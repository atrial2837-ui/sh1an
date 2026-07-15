/**
 * @module usecase/remove-stream-song
 * @description セトリから 1 曲削除する UseCase。
 */

/**
 * @param {import('./add-stream.js').AddStreamDeps} deps
 * @param {{ id: number }} input
 */
export async function removeStreamSong(deps, { id }) {
  const row = await deps.streamSongs.findById(id);
  if (!row) throw new Error(`セトリ行が見つかりません: id=${id}`);

  await deps.streamSongs.deleteById(id);

  const newCount = await deps.streamSongs.countByStreamId(row.stream_id);
  await deps.streams.setSongCount(row.stream_id, newCount);

  if (row.song_id) {
    const stream = await deps.streams.findById(row.stream_id);
    if (stream) {
      const channel = await deps.channels.findById(stream.channel_id);
      if (channel) {
        const now = deps.clock.now().toISOString();
        await deps.stats.decrementBySongIds([row.song_id], channel.id, now);
      }
    }
  }

  return { ok: true };
}
