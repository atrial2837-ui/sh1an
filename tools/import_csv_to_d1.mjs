/**
 * @module tools/import_csv_to_d1
 * @description 歌唱ログ CSV から D1 投入用 SQL を生成する。
 *
 * 入力 CSV の想定ヘッダー（順不同・ヘッダー名で解決）:
 *   配信日, 開始時刻, 歌枠URL, 枠タイトル, 曲順, 曲名, アーティスト名, キー, ジャンル, ...
 *
 * 出力: channels / artists / songs / streams / stream_songs / song_channel_stats /
 *        community_timestamps への explicit-id 一括 INSERT（先頭で対象テーブルを
 *        DELETE してから投入する冪等な全ロード）。
 *
 * 正規化・song_key 生成はアプリ本体と同一ロジック（src/domain）を再利用する。
 *
 * 使い方:
 *   node tools/import_csv_to_d1.mjs <csv-path> [out.sql]
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { parseCsv } from '../src/adapter/csv/parse-csv.js';
import { normalize, normalizedKey, cleanMetadata } from '../src/domain/shared/text.js';
import { buildSongKey, UNKNOWN_ARTIST_NAME } from '../src/domain/song/song-key.js';

const CHANNEL_CODE = 'new';
const CHANNEL_NAME = 'Main';
const NOW = new Date().toISOString();

const csvPath = process.argv[2] || 'C:/Users/owner/Downloads/歌唱ログ_修正済み.csv';
const outPath = process.argv[3] || 'd1/import_data.sql';

/** SQL 文字列リテラル化（NULL 対応）。 */
function q(value) {
  if (value === null || value === undefined || value === '') return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}
/** 必須文字列（空でも '' を出す）。 */
function qs(value) {
  return `'${String(value ?? '').replace(/'/g, "''")}'`;
}

/** "2023/09/02" → "2023-09-02"。不正なら null。 */
function toIsoDate(raw) {
  const m = String(raw || '').trim().match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/);
  if (!m) return null;
  return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
}

/** "M:SS" / "MM:SS" / "H:MM:SS" → 秒。不正/空なら null。 */
function toSeconds(raw) {
  const m = String(raw || '').trim().match(/^(\d+):(\d{2})(?::(\d{2}))?$/);
  if (!m) return null;
  if (m[3] !== undefined) return (+m[1]) * 3600 + (+m[2]) * 60 + (+m[3]);
  return (+m[1]) * 60 + (+m[2]);
}

// ── CSV 読み込み & ヘッダー解決 ──────────────────────────────────────────
const rows = parseCsv(readFileSync(csvPath, 'utf8'));
const header = (rows.shift() || []).map((h) => normalize(h));
const col = (name) => header.indexOf(name);
const C = {
  date:   col('配信日'),
  time:   col('開始時刻'),
  url:    col('歌枠URL'),
  title:  col('枠タイトル'),
  order:  col('曲順'),
  song:   col('曲名'),
  artist: col('アーティスト名'),
  key:    col('キー'),
  genre:  col('ジャンル'),
};
for (const [k, v] of Object.entries(C)) {
  if (v < 0) { console.error(`CSV ヘッダーに「${k}」列が見つかりません: ${JSON.stringify(header)}`); process.exit(1); }
}

const data = rows.filter((r) => r.length > 1 && normalize(r[C.song]));

// ── エンティティ構築 ────────────────────────────────────────────────────
const artists = new Map();        // normalized_name → { id, name, normalizedName }
const songs = new Map();          // song_key → { id, title, normalizedTitle, artistId, songKey, displayKey, genre }
const streams = new Map();        // url_key → { urlKey, streamedOn, title, url, songs: [] }
let artistSeq = 0, songSeq = 0;

function upsertArtist(rawArtist) {
  const name = normalize(rawArtist || UNKNOWN_ARTIST_NAME) || UNKNOWN_ARTIST_NAME;
  const normalizedName = normalizedKey(name);
  let a = artists.get(normalizedName);
  if (!a) { a = { id: ++artistSeq, name, normalizedName }; artists.set(normalizedName, a); }
  return a;
}
function upsertSong(rawTitle, rawArtist, rawKey, rawGenre) {
  const title = normalize(rawTitle);
  const artist = normalize(rawArtist || UNKNOWN_ARTIST_NAME) || UNKNOWN_ARTIST_NAME;
  const songKey = buildSongKey(title, artist);
  let s = songs.get(songKey);
  const displayKey = cleanMetadata(rawKey);
  const genre = cleanMetadata(rawGenre);
  if (!s) {
    const a = upsertArtist(artist);
    s = { id: ++songSeq, title, normalizedTitle: normalizedKey(title), artistId: a.id, songKey, displayKey, genre };
    songs.set(songKey, s);
  } else {
    // 後勝ちで displayKey / genre を補完（空なら更新しない）
    if (displayKey) s.displayKey = displayKey;
    if (genre) s.genre = genre;
  }
  return s;
}

let skippedNoDate = 0;
for (const r of data) {
  const streamedOn = toIsoDate(r[C.date]);
  if (!streamedOn) { skippedNoDate++; continue; }
  const url = normalize(r[C.url]);
  const title = normalize(r[C.title]);
  const urlKey = url || `${CHANNEL_CODE}:${streamedOn}:${title}`;
  let st = streams.get(urlKey);
  if (!st) { st = { urlKey, streamedOn, title, url, songs: [] }; streams.set(urlKey, st); }
  const song = upsertSong(r[C.song], r[C.artist], r[C.key], r[C.genre]);
  const orderNum = parseInt(parseFloat(r[C.order]), 10);
  st.songs.push({
    order: Number.isFinite(orderNum) ? orderNum : (st.songs.length + 1),
    song,
    titleSnapshot: normalize(r[C.song]),
    artistSnapshot: normalize(r[C.artist]) || null,
    timeSeconds: toSeconds(r[C.time]),
  });
}

// 枠番号(source_index): 配信日昇順（古い枠=1）。同日内は CSV 出現順を保持。
const streamList = [...streams.values()];
streamList.sort((a, b) => (a.streamedOn < b.streamedOn ? -1 : a.streamedOn > b.streamedOn ? 1 : 0));
streamList.forEach((st, i) => {
  st.sourceIndex = i + 1;
  st.songs.sort((a, b) => a.order - b.order);
});

// song_channel_stats: song_id ごとの歌唱回数
const singCount = new Map();
for (const st of streamList) for (const row of st.songs) {
  singCount.set(row.song.id, (singCount.get(row.song.id) || 0) + 1);
}

// ── SQL 生成 ────────────────────────────────────────────────────────────
const out = [];
out.push('-- 歌唱ログ CSV → D1 全ロード（自動生成: tools/import_csv_to_d1.mjs）');
out.push(`-- source: ${csvPath}`);
// 注: D1 (remote) は明示的な BEGIN TRANSACTION / PRAGMA を拒否するため使用しない。
// wrangler d1 execute --file が暗黙トランザクションで一括実行する。
// 子→親の順で DELETE、親→子の順で INSERT するため FK 制約は満たされる。
for (const t of ['community_timestamps', 'song_channel_stats', 'stream_songs', 'streams', 'songs', 'artists', 'channels']) {
  out.push(`DELETE FROM ${t};`);
}
out.push(`DELETE FROM sqlite_sequence WHERE name IN ('artists','songs','streams','stream_songs','channels','community_timestamps');`);
out.push('');
out.push(`INSERT INTO channels (id, code, name, sort_order, created_at) VALUES (1, ${qs(CHANNEL_CODE)}, ${qs(CHANNEL_NAME)}, 1, ${qs(NOW)});`);
out.push('');

const CHUNK = 200;
function emitBatch(label, table, cols, valuesArr) {
  out.push(`-- ${label}: ${valuesArr.length}`);
  for (let i = 0; i < valuesArr.length; i += CHUNK) {
    const slice = valuesArr.slice(i, i + CHUNK);
    out.push(`INSERT INTO ${table} (${cols.join(', ')}) VALUES`);
    out.push(slice.map((v) => `  (${v})`).join(',\n') + ';');
  }
  out.push('');
}

// artists
emitBatch('artists', 'artists', ['id', 'name', 'normalized_name', 'created_at'],
  [...artists.values()].map((a) => `${a.id}, ${qs(a.name)}, ${qs(a.normalizedName)}, ${qs(NOW)}`));

// songs
emitBatch('songs', 'songs', ['id', 'title', 'normalized_title', 'artist_id', 'song_key', 'display_key', 'genre', 'created_at'],
  [...songs.values()].map((s) => `${s.id}, ${qs(s.title)}, ${qs(s.normalizedTitle)}, ${s.artistId}, ${qs(s.songKey)}, ${qs(s.displayKey)}, ${qs(s.genre)}, ${qs(NOW)}`));

// streams
emitBatch('streams', 'streams', ['id', 'channel_id', 'source_index', 'streamed_on', 'title', 'url', 'url_key', 'song_count', 'created_at'],
  streamList.map((st) => `${st.sourceIndex}, 1, ${st.sourceIndex}, ${qs(st.streamedOn)}, ${q(st.title)}, ${q(st.url)}, ${qs(st.urlKey)}, ${st.songs.length}, ${qs(NOW)}`));

// stream_songs
let ssSeq = 0;
const ssValues = [];
for (const st of streamList) for (const row of st.songs) {
  ssValues.push(`${++ssSeq}, ${st.sourceIndex}, ${row.song.id}, ${row.order}, ${q(row.titleSnapshot)}, ${qs(row.titleSnapshot)}, ${q(row.artistSnapshot)}, ${qs(row.song.songKey)}, ${qs(NOW)}`);
}
emitBatch('stream_songs', 'stream_songs', ['id', 'stream_id', 'song_id', 'position', 'raw_text', 'title_snapshot', 'artist_snapshot', 'song_key_snapshot', 'created_at'], ssValues);

// song_channel_stats
emitBatch('song_channel_stats', 'song_channel_stats', ['song_id', 'channel_id', 'sing_count', 'source_index', 'created_at', 'updated_at'],
  [...singCount.entries()].map(([songId, cnt]) => `${songId}, 1, ${cnt}, NULL, ${qs(NOW)}, ${qs(NOW)}`));

// community_timestamps（開始時刻あり → 承認済みとして投入）
const tsValues = [];
let tsCount = 0;
for (const st of streamList) {
  st.songs.forEach((row, idx) => {
    if (row.timeSeconds === null) return;
    tsCount++;
    tsValues.push(`${qs(CHANNEL_CODE)}, ${st.sourceIndex}, ${idx}, ${row.timeSeconds}, 'approved', NULL, ${qs(NOW)}, ${qs(NOW)}, 'import'`);
  });
}
emitBatch('community_timestamps', 'community_timestamps',
  ['channel_code', 'stream_index', 'song_index', 'time_seconds', 'status', 'submitter_note', 'created_at', 'reviewed_at', 'reviewer_note'], tsValues);

writeFileSync(outPath, out.join('\n'), 'utf8');

console.log('── 集計 ─────────────────────────────');
console.log('CSV データ行:', data.length, '/ 日付不正でスキップ:', skippedNoDate);
console.log('streams:', streamList.length);
console.log('artists:', artists.size);
console.log('songs:', songs.size);
console.log('stream_songs:', ssSeq);
console.log('community_timestamps (timestamp付き):', tsCount);
console.log('日付範囲:', streamList[0]?.streamedOn, '..', streamList[streamList.length - 1]?.streamedOn);
console.log('出力:', outPath, `(${(out.join('\n').length / 1024).toFixed(0)} KB)`);
