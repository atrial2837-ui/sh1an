/**
 * @module infra/d1-rest/d1-timestamp-repository
 * @description community_timestamps の D1 REST API 実装（静的データ生成で使用）。
 *
 * 静的 JSON 生成（generate_static_data）が承認済みタイムスタンプを読み、
 * streams.json の各曲へ t（秒）を付与するために使う。
 *
 * @typedef {import('./d1-rest-client.js').D1RestClient} D1RestClient
 */

export class D1RestTimestampRepository {
  /** @param {D1RestClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * 承認済みタイムスタンプを全件返す（生の DB 行）。
   * channel-stats が channel_code / stream_index / song_index / time_seconds を直接参照する。
   *
   * @returns {Promise<Record<string, unknown>[]>}
   */
  async listApproved() {
    return await this.client.query(
      `SELECT channel_code, stream_index, song_index, time_seconds, status
       FROM community_timestamps
       WHERE status = 'approved'
       ORDER BY channel_code ASC, stream_index ASC, song_index ASC`,
    );
  }
}
