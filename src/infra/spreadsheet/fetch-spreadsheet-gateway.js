/**
 * @module infra/spreadsheet/fetch-spreadsheet-gateway
 * @description fetch を使った SpreadsheetGateway の本番実装。
 */

/**
 * fetch を使用して Spreadsheet (CSV) を取得する Gateway。
 *
 * @implements {import('../../domain/port/gateways/spreadsheet-gateway.js').SpreadsheetGateway}
 */
export class FetchSpreadsheetGateway {
  /**
   * @param {typeof fetch} [fetchImpl] DI 用 fetch 実装 (テスト時は mock)
   */
  constructor(fetchImpl) {
    // Wrap fetch in an arrow function to avoid "Illegal invocation" errors.
    // `bind(globalThis)` breaks Node.js 20's undici-based fetch (used in
    // GitHub Actions), while a bare `this.fetch = fetch` breaks in Cloudflare
    // Workers. The arrow wrapper is safe in both environments.
    this.fetch = fetchImpl
      ? (...args) => fetchImpl(...args)
      : (...args) => fetch(...args);
  }

  /**
   * CSV エンドポイントから CSV テキストを取得する。
   *
   * 根拠: functions/api/admin/[[path]].js:419-424
   *   const response = await fetch(url);
   *   if (!response.ok) throw new Error(...);
   *   return await response.text();
   *
   * @param {string} url - CSV 直リンク (正規化済み)
   * @returns {Promise<string>} CSV テキスト
   * @throws {Error} HTTP 非 2xx の場合
   */
  async fetchCsv(url) {
    const response = await this.fetch(url);
    if (!response.ok) {
      throw new Error(`Spreadsheet fetch failed: HTTP ${response.status}`);
    }
    return await response.text();
  }
}
