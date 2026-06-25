/**
 * ローカル D1 データベース初期化スクリプト
 *
 * wrangler d1 --local に対してスキーマとデータを順序立てて適用します。
 * ローカル D1 の永続化ディレクトリ (.wrangler/state/v3) を wrangler pages dev と共有することで、
 * db:local で投入したデータが pages dev で読めるようにします。
 *
 * 実行順序:
 *   1. d1/schema.sql      - ベーステーブル定義
 *   2. migrations/*.sql   - スキーママイグレーション (数値順)
 *   3. d1/import_data.sql - CSV からのデータ一括投入
 *
 * 使用方法:
 *   npm run db:local
 */

import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const DB_NAME = "sh1an-db";
const sqlFiles = [
  "d1/schema.sql",
  "migrations/0001_community_timestamps.sql",
  "migrations/0002_song_requests.sql",
  "d1/import_data.sql",
];

/**
 * wrangler d1 execute --local でファイルを実行
 */
function executeSqlFile(filePath) {
  const fullPath = path.resolve(projectRoot, filePath);
  console.log(`\n→ Applying ${filePath}...`);

  try {
    // wrangler d1 execute sh1an-db --local --file=<path>
    execSync(
      `npx wrangler d1 execute ${DB_NAME} --local --file="${fullPath}"`,
      { stdio: "inherit", cwd: projectRoot }
    );
    console.log(`✓ ${filePath} applied successfully`);
  } catch (error) {
    console.error(`✗ Failed to apply ${filePath}`);
    process.exit(1);
  }
}

async function main() {
  console.log("=== Local D1 Database Initialization ===\n");

  for (const file of sqlFiles) {
    executeSqlFile(file);
  }

  console.log("\n=== Schema and data applied successfully ===");
  console.log("Local D1 is ready under .wrangler/state/v3/d1/ (managed by wrangler/miniflare)");
  console.log("\nNext: npm run dev");
}

main();
