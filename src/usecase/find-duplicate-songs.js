/**
 * @module usecase/find-duplicate-songs
 * @description 重複登録された曲の候補グループを検出する。
 *
 * 記号の字種差 (~ / 〜 / ～) やアーティスト名の打ち間違いで同じ曲が
 * 複数レコードに分かれるため、記号を落とした緩いキーで束ねて提示する。
 * 実際に統合するかどうかは利用者が確認して mergeSong を呼ぶ。
 */

import { buildLooseTitleKey } from '../domain/song/loose-song-key.js';

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

  const buckets = new Map();
  for (const song of songs) {
    const key = buildLooseTitleKey(song.title);
    if (!key) continue;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push({
      id:         song.id,
      title:      song.title,
      artist:     song.artist ?? null,
      displayKey: song.display_key ?? '',
      genre:      song.genre ?? '',
      songKey:    song.song_key,
      singCount:  singCounts.get(song.id) ?? 0,
    });
  }

  const groups = [];
  for (const [key, items] of buckets) {
    if (items.length < 2) continue;
    // 歌唱回数が多い順 → 残す候補を先頭に置く
    items.sort((a, b) => b.singCount - a.singCount || a.id - b.id);
    groups.push({ key, songs: items });
  }
  // 件数が多いグループを先に見せる
  groups.sort((a, b) => b.songs.length - a.songs.length || a.key.localeCompare(b.key));

  return { groups };
}
