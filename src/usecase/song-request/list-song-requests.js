/**
 * @module usecase/song-request/list-song-requests
 * @description 共有楽曲リクエスト一覧取得ユースケース。
 */

/**
 * @param {object} deps
 * @param {object} deps.songRequests
 * @param {object} [input]
 * @param {number} [input.limit]
 */
export async function listSongRequests(deps, { limit = 80 } = {}) {
  const safeLimit = Math.min(Math.max(Number(limit) || 80, 1), 200);
  return deps.songRequests.listOpen({ limit: safeLimit });
}
