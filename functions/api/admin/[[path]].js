import { mapErrorToResponse } from '../../../src/adapter/http/error-mapper.js';
import { createPagesAdminRouter } from '../../../src/infra/wire/pages-admin-router.js';

// Admin API で使用するメソッドをすべて列挙する
const ALLOWED_METHODS = 'GET, POST, PATCH, DELETE, OPTIONS';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': ALLOWED_METHODS,
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
  'Access-Control-Max-Age':       '86400',
};

export async function onRequest({ request, env, params }) {
  // CORS プリフライト
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  try {
    const remainder = Array.isArray(params.path)
      ? params.path.join('/')
      : String(params.path || '');

    const url = new URL(request.url);
    url.pathname = '/' + remainder;
    const fixedRequest = new Request(url.toString(), request);

    const router = createPagesAdminRouter(env);
    const response = await router.dispatch(fixedRequest, env);

    // CORS ヘッダーを全レスポンスに付与
    const headers = new Headers(response.headers);
    for (const [k, v] of Object.entries(CORS_HEADERS)) headers.set(k, v);
    return new Response(response.body, { status: response.status, headers });
  } catch (error) {
    const response = mapErrorToResponse(error);
    const headers = new Headers(response.headers);
    for (const [k, v] of Object.entries(CORS_HEADERS)) headers.set(k, v);
    return new Response(response.body, { status: response.status, headers });
  }
}
