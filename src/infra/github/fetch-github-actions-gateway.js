/**
 * @module infra/github/fetch-github-actions-gateway
 * @description fetch を使った GitHubActionsGateway の本番実装。
 */

/**
 * fetch を使用して GitHub Actions workflow_dispatch を発火させる Gateway。
 *
 * @implements {import('../../domain/port/gateways/github-actions-gateway.js').GitHubActionsGateway}
 */
export class FetchGitHubActionsGateway {
  /**
   * @param {{
   *   token: string,
   *   fetchImpl?: typeof fetch
   * }} config
   * @throws {Error} token が未提供の場合
   */
  constructor({ token, fetchImpl }) {
    if (!token) {
      throw new Error('GitHub Actions token is required');
    }
    this.token = token;
    // Wrap fetch in an arrow function to avoid "Illegal invocation" errors.
    // `bind(globalThis)` breaks Node.js 20's undici-based fetch (used in
    // GitHub Actions), while a bare `this.fetch = fetch` breaks in Cloudflare
    // Workers. The arrow wrapper is safe in both environments.
    this.fetch = fetchImpl
      ? (...args) => fetchImpl(...args)
      : (...args) => fetch(...args);
  }

  /**
   * GitHub Actions workflow_dispatch イベントを発火させる。
   *
   * 根拠: functions/api/admin/[[path]].js:427-456
   *   POST https://api.github.com/repos/{owner}/{repo}/actions/workflows/{workflow}/dispatches
   *   headers: { authorization: `Bearer ${token}`, ... }
   *   body: { ref, inputs: { ... } }
   *
   * @param {import('../../domain/port/gateways/github-actions-gateway.js').WorkflowDispatchInput} input
   * @returns {Promise<void>}
   * @throws {Error} HTTP 非 2xx の場合
   */
  async dispatchWorkflow({ owner, repo, workflow, ref, inputs = {} }) {
    const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow}/dispatches`;
    const response = await this.fetch(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${this.token}`,
        accept: 'application/vnd.github+json',
        'content-type': 'application/json',
        'user-agent': 'sh1an-songlist',
        'x-github-api-version': '2022-11-28',
      },
      body: JSON.stringify({ ref, inputs }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`GitHub Actions workflow_dispatch failed: HTTP ${response.status} ${text}`);
    }
  }
}
