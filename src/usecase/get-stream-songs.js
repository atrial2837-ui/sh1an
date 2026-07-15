/**
 * @module usecase/get-stream-songs
 * @description 指定歌枠のセトリ一覧を取得する UseCase。
 */

/**
 * @param {import('./add-stream.js').AddStreamDeps} deps
 * @param {{ channelCode: string, sourceIndex: number|string }} input
 */
export async function getStreamSongs(deps, { channelCode, sourceIndex }) {
  const channel = await deps.channels.findByCode(channelCode);
  if (!channel) throw new Error(`Unknown channel: ${channelCode}`);

  const stream = await deps.streams.findByChannelSourceIndex(channel.id, Number(sourceIndex));
  if (!stream) throw new Error(`歌枠が見つかりません: ${channelCode} #${sourceIndex}`);

  const songs = await deps.streamSongs.findByStreamId(stream.id);
  return { stream, songs };
}
