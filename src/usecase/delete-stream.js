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

  if ((stream.song_count ?? 0) > 0) {
    throw new ValidationError(
      `この歌枠には ${stream.song_count} 曲あります。先にセトリ編集画面で全曲を削除してから実行してください。`,
    );
  }

  await deps.streams.deleteById(stream.id);
  return { ok: true, deleted: { id: stream.id, sourceIndex: stream.source_index, title: stream.title } };
}
