/**
 * @module usecase/song-request/vote-song-request
 * @description 共有楽曲リクエストの投票ユースケース。
 */

import { NotFoundError } from '../../domain/error/not-found-error.js';
import { ValidationError } from '../../domain/error/validation-error.js';

/**
 * @param {object} deps
 * @param {object} deps.songRequests
 * @param {{ id: number }} input
 */
export async function voteSongRequest(deps, { id }) {
  if (!Number.isInteger(id) || id < 1) {
    throw new ValidationError('id は 1 以上の整数でなければなりません');
  }
  const item = await deps.songRequests.incrementVote(id);
  if (!item) throw new NotFoundError('リクエストが見つかりません');
  return item;
}
