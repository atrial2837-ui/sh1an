import test from 'node:test';
import assert from 'node:assert/strict';

import { submitSongRequest } from '../../src/usecase/song-request/submit-song-request.js';
import { listSongRequests } from '../../src/usecase/song-request/list-song-requests.js';
import { voteSongRequest } from '../../src/usecase/song-request/vote-song-request.js';

class MemorySongRequests {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  async insert(input) {
    const now = '2026-06-22T00:00:00.000Z';
    const item = {
      id: this.nextId++,
      voteCount: 1,
      status: 'open',
      createdAt: now,
      updatedAt: now,
      ...input,
    };
    this.items.unshift(item);
    return item;
  }

  async listOpen({ limit }) {
    return this.items
      .filter(item => item.status === 'open')
      .sort((a, b) => b.voteCount - a.voteCount || b.createdAt.localeCompare(a.createdAt))
      .slice(0, limit);
  }

  async incrementVote(id) {
    const item = this.items.find(x => x.id === id && x.status === 'open');
    if (!item) return null;
    item.voteCount += 1;
    return item;
  }
}

test('submitSongRequest: 曲名だけで共有リクエストを作成できる', async () => {
  const repo = new MemorySongRequests();
  const item = await submitSongRequest({ songRequests: repo }, { title: ' 月光 ' });
  assert.equal(item.title, '月光');
  assert.equal(item.artist, '');
  assert.equal(item.voteCount, 1);
});

test('submitSongRequest: 曲名が空なら ValidationError', async () => {
  const repo = new MemorySongRequests();
  await assert.rejects(
    () => submitSongRequest({ songRequests: repo }, { title: '   ' }),
    /曲名を入力してください/,
  );
});

test('listSongRequests: 得票順で公開リクエストを返す', async () => {
  const repo = new MemorySongRequests();
  const a = await submitSongRequest({ songRequests: repo }, { title: 'A' });
  const b = await submitSongRequest({ songRequests: repo }, { title: 'B' });
  await voteSongRequest({ songRequests: repo }, { id: b.id });
  const items = await listSongRequests({ songRequests: repo });
  assert.deepEqual(items.map(item => item.id), [b.id, a.id]);
});

test('voteSongRequest: 存在しない id は NotFoundError', async () => {
  const repo = new MemorySongRequests();
  await assert.rejects(
    () => voteSongRequest({ songRequests: repo }, { id: 404 }),
    /リクエストが見つかりません/,
  );
});
