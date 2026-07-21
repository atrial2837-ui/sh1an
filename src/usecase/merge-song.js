/**
 * @module usecase/merge-song
 * @description 重複曲を統合する UseCase。
 *
 * fromId の曲を toId に統合する:
 *   1. stream_songs の song_id を from → to に付け替え
 *   2. song_channel_stats を統合 (from の sing_count を to に加算して from を削除)
 *   3. from 曲を songs テーブルから削除
 */

import { ValidationError } from '../domain/error/validation-error.js';
import { NotFoundError } from '../domain/error/not-found-error.js';

/**
 * @param {import('./add-stream.js').AddStreamDeps} deps
 * @param {{ fromId: number|string, toId: number|string }} input
 */
export async function mergeSong(deps, { fromId, toId }) {
  const from = Number(fromId);
  const to   = Number(toId);
  if (!from || !to) throw new ValidationError('fromId と toId は正の整数で指定してください');
  if (from === to)  throw new ValidationError('同じ曲を統合することはできません');

  const fromSong = await deps.songs.findById(from);
  if (!fromSong) throw new NotFoundError(`song not found: id=${from}`);
  const toSong = await deps.songs.findById(to);
  if (!toSong)   throw new NotFoundError(`song not found: id=${to}`);

  const now = deps.clock.now().toISOString();

  await deps.streamSongs.replaceSongId(from, to);
  await deps.stats.mergeSongStats(from, to, now);
  await deps.songs.deleteById(from);

  return {
    ok:   true,
    from: { id: from, title: fromSong.title, artist: fromSong.artist },
    into: { id: to,   title: toSong.title,   artist: toSong.artist },
  };
}
