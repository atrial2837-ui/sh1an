/**
 * @module usecase/update-stream-song
 * @description セトリ行のタイトル・アーティストスナップショットを更新する UseCase。
 *
 * song_id / stats は変更しない (スナップショット修正のみ)。
 */

import { normalize } from '../domain/shared/text.js';

/**
 * @param {import('./add-stream.js').AddStreamDeps} deps
 * @param {{ id: number, title: string, artist?: string }} input
 */
export async function updateStreamSong(deps, { id, title, artist }) {
  const row = await deps.streamSongs.findById(id);
  if (!row) throw new Error(`セトリ行が見つかりません: id=${id}`);

  const cleanTitle = normalize(title || '');
  if (!cleanTitle) throw new Error('曲名を入力してください');
  const cleanArtist = normalize(artist || '') || null;

  await deps.streamSongs.updateById(id, {
    titleSnapshot: cleanTitle,
    artistSnapshot: cleanArtist,
    rawText: cleanArtist ? `${cleanTitle} / ${cleanArtist}` : cleanTitle,
  });

  return { ok: true };
}
