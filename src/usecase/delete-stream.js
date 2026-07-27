import { ValidationError } from '../domain/error/validation-error.js';
import { NotFoundError } from '../domain/error/not-found-error.js';

export async function deleteStream(deps, { channelCode, sourceIndex }) {
  const code = String(channelCode || '').trim();
  const idx  = Number(sourceIndex);
  if (!code) throw new ValidationError('channelCode を指定してください');
  if (!Number.isInteger(idx) || idx < 1) throw new ValidationError('枠番号は 1 以上の整数で入力してください');

  const channel = await deps.channels.findByCode(code);
  if (!channel) throw new ValidationError(`未知のチャンネルです: ${code}`);

  const stream = await deps.streams.findByChannelSourceIndex(channel.id, idx);
  if (!stream) throw new NotFoundError('指定した歌枠が見つかりません');

  const songCount = stream.song_count ?? 0;

  if (songCount > 0) {
    const songs = await deps.streamSongs.findByStreamId(stream.id);
    const songIds = songs.map((s) => s.song_id).filter((id) => id != null);
    if (songIds.length > 0) {
      const now = deps.clock.now().toISOString();
      await deps.stats.decrementBySongIds(songIds, channel.id, now);
    }
    await deps.streamSongs.deleteByStreamId(stream.id);
  }

  await deps.streams.deleteById(stream.id);
  return { ok: true, deleted: { id: stream.id, sourceIndex: stream.source_index, title: stream.title, songCount } };
}
