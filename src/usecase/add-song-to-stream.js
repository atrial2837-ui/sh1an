/**
 * @module usecase/add-song-to-stream
 * @description 既存歌枠のセトリに 1 曲追加する UseCase。
 */

import { normalize } from '../domain/shared/text.js';
import { upsertSong } from './upsert-song.js';

/**
 * @param {import('./add-stream.js').AddStreamDeps} deps
 * @param {{ channelCode: string, sourceIndex: number|string, title: string, artist?: string, position?: number }} input
 */
export async function addSongToStream(deps, { channelCode, sourceIndex, title, artist, position }) {
  const channel = await deps.channels.findByCode(channelCode);
  if (!channel) throw new Error(`Unknown channel: ${channelCode}`);

  const stream = await deps.streams.findByChannelSourceIndex(channel.id, Number(sourceIndex));
  if (!stream) throw new Error(`歌枠が見つかりません: ${channelCode} #${sourceIndex}`);

  const cleanTitle = normalize(title || '');
  if (!cleanTitle) throw new Error('曲名を入力してください');
  const cleanArtist = normalize(artist || '') || null;

  const songResult = await upsertSong(
    { songs: deps.songs, artists: deps.artists, clock: deps.clock },
    { title: cleanTitle, artist: cleanArtist || '' },
  );

  const existing = await deps.streamSongs.findByStreamId(stream.id);
  const pos = position ? Number(position) : (existing.length + 1);
  const now = deps.clock.now().toISOString();

  const rawText = cleanArtist ? `${cleanTitle} / ${cleanArtist}` : cleanTitle;

  const { id } = await deps.streamSongs.insertOne({
    streamId: stream.id,
    songId: songResult.id,
    position: pos,
    rawText,
    titleSnapshot: cleanTitle,
    artistSnapshot: cleanArtist,
    songKeySnapshot: songResult.songKey,
    createdAt: now,
  });

  const newCount = await deps.streamSongs.countByStreamId(stream.id);
  await deps.streams.setSongCount(stream.id, newCount);

  await deps.stats.upsertIncrement(songResult.id, channel.id, now);

  return { id, streamId: stream.id, songCount: newCount };
}
