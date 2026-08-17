/**
 * @module usecase/find-duplicate-songs
 * @description 重複登録された曲の候補グループを検出する。
 *
 * 記号の字種差 (~ / 〜 / ～) やアーティスト名の打ち間違いで同じ曲が
 * 複数レコードに分かれるため、記号を落とした緩いキーで束ねて提示する。
 * 実際に統合するかどうかは利用者が確認して mergeSong を呼ぶ。
 */

import { buildLooseTitleKey } from '../domain/song/loose-song-key.js';
import { classifyGroup } from '../domain/song/artist-similarity.js';
import { normalizedKey } from '../domain/shared/text.js';

/**
 * @param {object} deps
 * @param {object} deps.songs - findAll() を持つ SongRepository
 * @param {object} deps.stats - findAll() を持つ SongChannelStatsRepository
 * @returns {Promise<{ groups: Array<{ key: string, songs: Array<object> }> }>}
 */
export async function findDuplicateSongs(deps) {
  const songs = await deps.songs.findAll();

  // 歌唱回数を曲ごとに合計して、どれを残すかの判断材料にする
  const singCounts = new Map();
  if (deps.stats?.findAll) {
    for (const row of await deps.stats.findAll()) {
      singCounts.set(row.song_id, (singCounts.get(row.song_id) ?? 0) + (row.sing_count ?? 0));
    }
  }

  // 同じアーティスト名が DB 全体で何曲に使われているか。
  // 打ち間違いは 1 曲だけに現れ、正しい表記は複数曲に現れるため、
  // どちらを残すべきかの手がかりになる (例: Mrs. GREEN APPLE 3曲 / Mrs.REEN APPLE 1曲)。
  const artistUsage = new Map();
  for (const song of songs) {
    const k = normalizedKey(song.artist ?? '');
    if (!k) continue;
    artistUsage.set(k, (artistUsage.get(k) ?? 0) + 1);
  }

  const buckets = new Map();
  for (const song of songs) {
    const key = buildLooseTitleKey(song.title);
    if (!key) continue;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push({
      id:              song.id,
      title:           song.title,
      artist:          song.artist ?? null,
      displayKey:      song.display_key ?? '',
      genre:           song.genre ?? '',
      songKey:         song.song_key,
      singCount:       singCounts.get(song.id) ?? 0,
      artistSongCount: artistUsage.get(normalizedKey(song.artist ?? '')) ?? 0,
    });
  }

  const groups = [];
  for (const [key, items] of buckets) {
    if (items.length < 2) continue;
    // 残す候補を先頭へ: アーティスト名が他の曲でも使われている順 → 歌唱回数順。
    // 歌唱回数だけで並べると打ち間違いの方が多く歌われている場合に
    // 誤った表記が既定で残ってしまう。
    items.sort((a, b) =>
      b.artistSongCount - a.artistSongCount ||
      b.singCount - a.singCount ||
      a.id - b.id);
    groups.push({ key, songs: items, ...classifyGroup(items) });
  }
  // 統合してよいものを先に、その中では件数が多い順に見せる
  groups.sort((a, b) =>
    (a.confidence === b.confidence ? 0 : a.confidence === 'safe' ? -1 : 1) ||
    b.songs.length - a.songs.length ||
    a.key.localeCompare(b.key));

  return { groups };
}
