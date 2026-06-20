param(
  [string]$Out = "docs/data/music.json"
)

$ErrorActionPreference = "Stop"

$playlists = @(
  @{ Type = "cover";    List = "PLdAno8EXhmVbyr0Cw-1uby8iBxzoaP6QG" },
  @{ Type = "original"; List = "PLdAno8EXhmVZPCwvt6tUd0gRLRAoEuGjd" },
  @{ Type = "sugariri"; List = "PLdAno8EXhmVa7OaO4JtmTMn76LxYFaGDQ" }
)

function Get-UrlText($url) {
  $response = Invoke-WebRequest -Uri $url -UseBasicParsing -Headers @{ "User-Agent" = "Mozilla/5.0" }
  if ($response.RawContentStream) {
    $response.RawContentStream.Position = 0
    $reader = [System.IO.StreamReader]::new($response.RawContentStream, [System.Text.Encoding]::UTF8)
    try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
  }
  return [string]$response.Content
}

function Get-TextValue($node) {
  if ($null -eq $node) { return "" }
  if ($node.simpleText) { return [string]$node.simpleText }
  if ($node.runs) { return (($node.runs | ForEach-Object { $_.text }) -join "") }
  return ""
}

function Find-PlaylistVideos($node, [System.Collections.Generic.List[object]]$out) {
  if ($null -eq $node) { return }
  if ($node -is [System.Array]) {
    foreach ($item in $node) { Find-PlaylistVideos $item $out }
    return
  }
  if ($node -isnot [psobject]) { return }

  if ($node.playlistVideoRenderer) {
    $out.Add($node.playlistVideoRenderer)
  }

  foreach ($prop in $node.PSObject.Properties) {
    Find-PlaylistVideos $prop.Value $out
  }
}

function Get-InitialData($html) {
  $match = [regex]::Match($html, "var ytInitialData = (?<json>\{.+?\});</script>", [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if (-not $match.Success) {
    $match = [regex]::Match($html, "ytInitialData""\s*:\s*(?<json>\{.+?\})\s*,\s*""ytInitialPlayerResponse", [System.Text.RegularExpressions.RegexOptions]::Singleline)
  }
  if (-not $match.Success) {
    throw "ytInitialData was not found."
  }
  return $match.Groups["json"].Value | ConvertFrom-Json
}

function Get-RssDates($listId) {
  $dates = @{}
  $feedUrl = "https://www.youtube.com/feeds/videos.xml?playlist_id=$listId"
  try {
    [xml]$rss = Get-UrlText $feedUrl
    foreach ($entry in $rss.feed.entry) {
      $videoId = [string]$entry.videoId
      if ($videoId) {
        $dates[$videoId] = ([datetime]$entry.published).ToString("yyyy-MM-dd")
      }
    }
  } catch {
    Write-Warning "RSS fetch failed for ${listId}: $_"
  }
  return $dates
}

function Get-PlaylistItems($playlist) {
  $url = "https://www.youtube.com/playlist?list=$($playlist.List)"
  $html = Get-UrlText $url
  $data = Get-InitialData $html
  $nodes = [System.Collections.Generic.List[object]]::new()
  Find-PlaylistVideos $data $nodes
  $dates = Get-RssDates $playlist.List
  $seen = @{}
  $items = @()

  foreach ($node in $nodes) {
    $id = [string]$node.videoId
    if (-not $id -or $seen[$id]) { continue }
    $seen[$id] = $true
    $title = Get-TextValue $node.title
    if (-not $title -or $title -eq "[Private video]" -or $title -eq "[Deleted video]") { continue }
    $items += [pscustomobject]@{
      id          = "mv_$id"
      title       = $title
      type        = $playlist.Type
      url         = "https://www.youtube.com/watch?v=$id"
      publishedAt = $dates[$id]
    }
  }
  return $items
}

$oldByVideoId = @{}
if (Test-Path -LiteralPath $Out) {
  $old = Get-Content -Raw -Encoding UTF8 -LiteralPath $Out | ConvertFrom-Json
  foreach ($video in @($old.videos)) {
    $videoId = ([regex]::Match([string]$video.url, "(?:v=|youtu\.be/)([A-Za-z0-9_-]{11})")).Groups[1].Value
    if ($videoId) { $oldByVideoId[$videoId] = $video }
  }
}

$videos = @()
foreach ($playlist in $playlists) {
  $items = Get-PlaylistItems $playlist
  foreach ($item in $items) {
    $videoId = $item.url.Substring($item.url.Length - 11)
    $old = $oldByVideoId[$videoId]
    if ($old) {
      $merged = [ordered]@{}
      foreach ($prop in $old.PSObject.Properties) { $merged[$prop.Name] = $prop.Value }
      $merged.id = $item.id
      $merged.title = $item.title
      $merged.type = $item.type
      $merged.url = $item.url
      if ($item.publishedAt) { $merged.publishedAt = $item.publishedAt }
      $videos += [pscustomobject]$merged
    } else {
      $obj = [ordered]@{
        id    = $item.id
        title = $item.title
        type  = $item.type
        url   = $item.url
      }
      if ($item.publishedAt) { $obj.publishedAt = $item.publishedAt }
      $videos += [pscustomobject]$obj
    }
  }
}

$result = [ordered]@{
  videos = $videos
}

$json = $result | ConvertTo-Json -Depth 20
Set-Content -LiteralPath $Out -Value $json -Encoding UTF8

$videos | Group-Object type | Select-Object Name, Count
