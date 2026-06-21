/**
 * @module adapter/http/song-request-router
 * @description 共有楽曲リクエスト公開 API のルート定義。
 *
 * エンドポイント:
 *   GET  /api/song-requests            → 共有リクエスト一覧
 *   POST /api/song-requests            → リクエスト投稿
 *   POST /api/song-requests/:id/vote   → 「自分も聴きたい」投票
 */

import { Router } from './router.js';
import { jsonResponse } from './json-presenter.js';
import { readJsonBody } from './read-json-body.js';
import { listSongRequests } from '../../usecase/song-request/list-song-requests.js';
import { submitSongRequest } from '../../usecase/song-request/submit-song-request.js';
import { voteSongRequest } from '../../usecase/song-request/vote-song-request.js';
import { ValidationError } from '../../domain/error/validation-error.js';
import { NotFoundError } from '../../domain/error/not-found-error.js';

const ROOT_RE = /^\/api\/song-requests\/?$/;
const ITEM_RE = /^\/api\/song-requests\/(\d+)\/?$/;
const VOTE_RE = /^\/api\/song-requests\/(\d+)\/vote\/?$/;
const STATUS_SET = new Set(['singable', 'practicing', 'unregistered']);

/**
 * @param {object} options
 * @param {(ctx: import('./router.js').RouteContext) => object} options.getDeps
 * @returns {Router}
 */
export function buildSongRequestRouter({ getDeps }) {
  const router = new Router();

  router.get(ROOT_RE, async (ctx) => {
    const deps = getDeps(ctx);
    const items = await listSongRequests(deps, {
      limit: Number(ctx.query.get('limit')) || 80,
    });
    return jsonResponse({ items: items.map(toPublic) });
  });

  router.post(ROOT_RE, async (ctx) => {
    const body = (await readJsonBody(ctx.request)) || {};
    const deps = getDeps(ctx);
    const created = await submitSongRequest(deps, {
      title: body.title,
      artist: body.artist,
      note: body.note,
      requesterName: body.requesterName,
    });
    return jsonResponse({ ok: true, item: toPublic(created) }, 201);
  });

  router.post(VOTE_RE, async (ctx) => {
    const url = new URL(ctx.request.url);
    const m = VOTE_RE.exec(url.pathname);
    const deps = getDeps(ctx);
    const item = await voteSongRequest(deps, { id: Number(m[1]) });
    return jsonResponse({ ok: true, item: toPublic(item) });
  });

  router.post(ITEM_RE, async (ctx) => {
    const url = new URL(ctx.request.url);
    const m = ITEM_RE.exec(url.pathname);
    const id = Number(m[1]);
    const body = (await readJsonBody(ctx.request)) || {};
    const patch = {};
    if ('title' in body) patch.title = clean(body.title);
    if ('artist' in body) patch.artist = clean(body.artist);
    if ('note' in body) patch.note = clean(body.note) || null;
    if ('requesterName' in body) patch.requesterName = clean(body.requesterName) || null;
    if ('status' in body) {
      const status = clean(body.status);
      if (!STATUS_SET.has(status)) throw new ValidationError('status が不正です');
      patch.status = status;
    }
    if ('title' in patch && !patch.title) throw new ValidationError('曲名を入力してください');
    const item = await getDeps(ctx).songRequests.update(id, patch);
    if (!item) throw new NotFoundError('リクエストが見つかりません');
    return jsonResponse({ ok: true, item: toPublic(item) });
  });

  router.delete(ITEM_RE, async (ctx) => {
    const url = new URL(ctx.request.url);
    const m = ITEM_RE.exec(url.pathname);
    const ok = await getDeps(ctx).songRequests.delete(Number(m[1]));
    if (!ok) throw new NotFoundError('リクエストが見つかりません');
    return jsonResponse({ ok: true });
  });

  return router;
}

/**
 * @param {import('../../domain/song-request/song-request.js').SongRequest} item
 */
function toPublic(item) {
  return {
    id:            item.id,
    title:         item.title,
    artist:        item.artist,
    note:          item.note,
    requesterName: item.requesterName,
    status:        item.status,
    voteCount:     item.voteCount,
    createdAt:     item.createdAt,
  };
}

function clean(value) {
  return String(value ?? '').normalize('NFKC').replace(/\s+/g, ' ').trim();
}
