/**
 * @module usecase/timestamp/create-approved-timestamp
 * @description 管理者が承認済みタイムスタンプを直接登録するユースケース。
 */

import { ValidationError } from '../../domain/error/validation-error.js';

/**
 * @param {object} deps
 * @param {import('../../infra/d1-worker/d1-timestamp-repository.js').D1TimestampRepository} deps.timestamps
 * @param {object} input
 * @param {string} input.channelCode
 * @param {number} input.streamIndex
 * @param {number} input.songIndex
 * @param {number} input.timeSeconds
 * @param {string|null} [input.reviewerNote]
 * @returns {Promise<import('../../domain/timestamp/timestamp-submission.js').TimestampSubmission>}
 */
export async function createApprovedTimestamp(deps, input) {
  const { channelCode, streamIndex, songIndex, timeSeconds, reviewerNote = null } = input;

  // channelCode は非空文字列
  if (!channelCode || typeof channelCode !== 'string' || !channelCode.trim()) {
    throw new ValidationError('channelCode は空でない文字列でなければなりません');
  }

  // streamIndex は 0 以上の整数
  if (!Number.isInteger(Number(streamIndex)) || Number(streamIndex) < 0) {
    throw new ValidationError('streamIndex は 0 以上の整数でなければなりません');
  }

  // songIndex は 0 以上の整数
  if (!Number.isInteger(Number(songIndex)) || Number(songIndex) < 0) {
    throw new ValidationError('songIndex は 0 以上の整数でなければなりません');
  }

  // timeSeconds は 0 以上の整数
  if (!Number.isInteger(Number(timeSeconds)) || Number(timeSeconds) < 0) {
    throw new ValidationError('timeSeconds は 0 以上の整数でなければなりません');
  }

  return deps.timestamps.insertApproved({
    channelCode: channelCode.trim(),
    streamIndex: Number(streamIndex),
    songIndex:   Number(songIndex),
    timeSeconds: Number(timeSeconds),
    reviewerNote: reviewerNote?.trim() || null,
  });
}
