/**
 * @module infra/d1-worker/d1-song-request-repository
 * @description song_requests テーブルへの D1 Worker Binding 実装。
 */

import { SongRequest } from '../../domain/song-request/song-request.js';

export class D1SongRequestRepository {
  /** @param {import('./d1-worker-client.js').D1WorkerClient} client */
  constructor(client) {
    this.client = client;
  }

  /**
   * @param {{ limit?: number }} [opts]
   * @returns {Promise<SongRequest[]>}
   */
  async listOpen({ limit = 80 } = {}) {
    const rows = await this.client.query(
      `SELECT * FROM song_requests
       ORDER BY vote_count DESC, created_at DESC
       LIMIT ?`,
      limit,
    );
    return rows.map(toEntity);
  }

  /**
   * @param {object} props
   * @param {string} props.title
   * @param {string} [props.artist]
   * @param {string|null} [props.note]
   * @param {string|null} [props.requesterName]
   * @returns {Promise<SongRequest>}
   */
  async insert({ title, artist = '', note = null, requesterName = null }) {
    const row = await this.client.queryFirst(
      `INSERT INTO song_requests
         (title, artist, note, requester_name)
       VALUES (?, ?, ?, ?)
       RETURNING *`,
      title,
      artist,
      note,
      requesterName,
    );
    return toEntity(row);
  }

  /**
   * @param {number} id
   * @param {{ title?: string, artist?: string, note?: string|null, requesterName?: string|null, status?: string }} patch
   * @returns {Promise<SongRequest|null>}
   */
  async update(id, patch) {
    const current = await this.client.queryFirst(
      `SELECT * FROM song_requests WHERE id = ?`,
      id,
    );
    if (!current) return null;
    const row = await this.client.queryFirst(
      `UPDATE song_requests
       SET title = ?, artist = ?, note = ?, requester_name = ?, status = ?, updated_at = datetime('now')
       WHERE id = ?
       RETURNING *`,
      patch.title ?? current.title,
      patch.artist ?? current.artist ?? '',
      patch.note === undefined ? current.note ?? null : patch.note,
      patch.requesterName === undefined ? current.requester_name ?? null : patch.requesterName,
      patch.status ?? current.status ?? 'unregistered',
      id,
    );
    return row ? toEntity(row) : null;
  }

  /**
   * @param {number} id
   * @returns {Promise<SongRequest|null>}
   */
  async incrementVote(id) {
    const row = await this.client.queryFirst(
      `UPDATE song_requests
       SET vote_count = vote_count + 1,
           updated_at = datetime('now')
       WHERE id = ?
       RETURNING *`,
      id,
    );
    return row ? toEntity(row) : null;
  }

  /**
   * @param {number} id
   * @returns {Promise<boolean>}
   */
  async delete(id) {
    const result = await this.client.run(
      `DELETE FROM song_requests WHERE id = ?`,
      id,
    );
    return Number(result.meta?.changes || 0) > 0;
  }
}

/**
 * @param {Record<string, unknown>} row
 * @returns {SongRequest}
 */
function toEntity(row) {
  return new SongRequest({
    id:            row.id,
    title:         row.title,
    artist:        row.artist ?? '',
    note:          row.note ?? null,
    requesterName: row.requester_name ?? null,
    status:        row.status ?? 'unregistered',
    voteCount:     row.vote_count ?? 0,
    createdAt:     row.created_at,
    updatedAt:     row.updated_at,
  });
}
