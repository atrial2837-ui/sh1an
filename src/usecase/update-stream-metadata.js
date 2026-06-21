/**
 * @module usecase/update-stream-metadata
 * @description 歌枠のタイトル・配信日を更新する。
 */

import { ValidationError } from '../domain/error/validation-error.js';
import { NotFoundError } from '../domain/error/not-found-error.js';

/**
 * @param {object} deps
 * @param {object} deps.channels
 * @param {object} deps.streams
 * @param {{ channelCode: string, sourceIndex: number, streamedOn?: string, title?: string }} input
 */
export async function updateStreamMetadata(deps, input) {
  const channelCode = String(input.channelCode || '').trim();
  const sourceIndex = Number(input.sourceIndex);
  const streamedOn = String(input.streamedOn || '').trim();
  const title = String(input.title ?? '').trim();

  if (!channelCode) throw new ValidationError('channelCode を指定してください');
  if (!Number.isInteger(sourceIndex) || sourceIndex < 1) {
    throw new ValidationError('枠番号は 1 以上の整数で入力してください');
  }
  if (streamedOn && !/^\d{4}-\d{2}-\d{2}$/.test(streamedOn)) {
    throw new ValidationError('配信日は YYYY-MM-DD 形式で入力してください');
  }

  const channel = await deps.channels.findByCode(channelCode);
  if (!channel) throw new ValidationError(`未知のチャンネルです: ${channelCode}`);
  const stream = await deps.streams.findByChannelSourceIndex(channel.id, sourceIndex);
  if (!stream) throw new NotFoundError('指定した歌枠が見つかりません');

  const updated = await deps.streams.updateMetadata(stream.id, {
    streamedOn: streamedOn || undefined,
    title: title || null,
  });
  return { stream: updated };
}
