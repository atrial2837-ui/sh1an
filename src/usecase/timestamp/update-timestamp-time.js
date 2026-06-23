/**
 * @module usecase/timestamp/update-timestamp-time
 * @description 管理者がタイムスタンプの時刻を修正するユースケース。
 */

import { ValidationError } from '../../domain/error/validation-error.js';
import { NotFoundError } from '../../domain/error/not-found-error.js';

/**
 * @param {object} deps
 * @param {import('../../infra/d1-worker/d1-timestamp-repository.js').D1TimestampRepository} deps.timestamps
 * @param {object} input
 * @param {number} input.id
 * @param {number} input.timeSeconds
 * @returns {Promise<import('../../domain/timestamp/timestamp-submission.js').TimestampSubmission>}
 */
export async function updateTimestampTime(deps, input) {
  const { id, timeSeconds } = input;

  // id は正の整数
  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    throw new ValidationError('id は正の整数でなければなりません');
  }

  // timeSeconds は 0 以上の整数
  if (!Number.isInteger(Number(timeSeconds)) || Number(timeSeconds) < 0) {
    throw new ValidationError('timeSeconds は 0 以上の整数でなければなりません');
  }

  const updated = await deps.timestamps.updateTime(Number(id), {
    timeSeconds: Number(timeSeconds),
  });

  if (!updated) {
    throw new NotFoundError(`id=${id} のタイムスタンプが見つかりません`);
  }

  return updated;
}
