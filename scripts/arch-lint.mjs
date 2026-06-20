/**
 * レイヤー境界の自動強制（Clean Architecture の依存方向チェック）
 *
 *   node scripts/arch-lint.mjs   または   npm run arch
 *
 * SoT の層分離（domain ← usecase ← adapter ← infra、UI は domain-compat 経由）を
 * 機械的に守らせる。人間の規律に頼らず、層をまたぐ禁止 import を検出して落とす。
 *
 * 依存方向は内向き（外側 → 内側）のみ許可:
 *   infra → adapter → usecase → domain
 * 内側が外側を import するのが「禁止辺」。
 *
 * 禁止する依存辺（importer → 禁止された import 先）:
 *   - domain  →  usecase / adapter / infra   （ドメインは純粋。外側を知らない）
 *   - usecase →  infra                        （具体 infra へ依存しない。port 経由）
 *   - adapter →  infra                        （アダプタは具体フレームワークを知らない）
 *   - ui(docs/js) → usecase / adapter / infra （UI は domain-compat 経由の domain のみ）
 *
 * adapter → usecase は内向きなので許可（コントローラがユースケースを呼ぶ正当な依存）。
 * infra は最外層（wire）なので outbound 制約なし。
 *
 * 判定は「実行時 import」のみ。JSDoc の `import('...')` 型注釈はコメント除去後に走査するため
 * 検出対象外（型参照は実行時依存を生まない）。
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, resolve, relative, sep } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── 禁止辺の定義 ─────────────────────────────────────────────────────────────
const FORBIDDEN = {
  domain:  ['usecase', 'adapter', 'infra'],
  usecase: ['infra'],
  adapter: ['infra'],
  ui:      ['usecase', 'adapter', 'infra'],
  infra:   [],
};

// ── 対象ファイル収集 ─────────────────────────────────────────────────────────
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.js')) out.push(p);
  }
  return out;
}

// パス → レイヤー名（対象外なら null）
function layerOf(absPath) {
  const rel = relative(ROOT, absPath).split(sep).join('/');
  if (rel.startsWith('src/domain/'))  return 'domain';
  if (rel.startsWith('src/usecase/')) return 'usecase';
  if (rel.startsWith('src/adapter/')) return 'adapter';
  if (rel.startsWith('src/infra/'))   return 'infra';
  if (rel.startsWith('docs/js/'))     return 'ui';
  return null;
}

// コメント（JSDoc 含むブロック / 行）を除去。JSDoc 内の `import('...')` 型注釈を
// 実行時依存と誤検出しないため。
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, '')   // ブロックコメント /* ... */（JSDoc 含む）
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1'); // 行コメント //（http:// の // を誤除去しない）
}

// import / export-from / dynamic import の参照先（相対指定のみ）を抽出
function specifiersOf(rawSrc) {
  const src = stripComments(rawSrc);
  const specs = [];
  const re1 = /(?:import|export)\b[^;'"]*?\bfrom\s*['"]([^'"]+)['"]/g;     // import/export ... from '...'
  const re2 = /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g;                     // dynamic import('...')
  const re3 = /(?:^|[;\n])\s*import\s*['"]([^'"]+)['"]/g;                   // side-effect import '...'
  for (const re of [re1, re2, re3]) {
    let m;
    while ((m = re.exec(src))) specs.push(m[1]);
  }
  return specs;
}

const targets = [
  ...walk(join(ROOT, 'src')),
  ...walk(join(ROOT, 'docs', 'js')),
];

const violations = [];
for (const file of targets) {
  const from = layerOf(file);
  if (!from) continue;
  const banned = FORBIDDEN[from];
  if (!banned || !banned.length) continue;

  const src = readFileSync(file, 'utf-8');
  for (const spec of specifiersOf(src)) {
    if (!spec.startsWith('.')) continue;                 // 外部パッケージは対象外
    const targetLayer = layerOf(resolve(dirname(file), spec));
    if (targetLayer && banned.includes(targetLayer)) {
      violations.push({
        file: relative(ROOT, file).split(sep).join('/'),
        from,
        to: targetLayer,
        spec,
      });
    }
  }
}

// ── 結果 ─────────────────────────────────────────────────────────────────────
console.log(`レイヤー境界チェック: ${targets.length} ファイル走査`);
if (violations.length) {
  console.error(`\nNG: ${violations.length} 件の禁止された層依存`);
  for (const v of violations) {
    console.error(`  ✗ [${v.from} → ${v.to}] ${v.file}\n      import '${v.spec}'`);
  }
  console.error('\n依存方向: domain ← usecase ← adapter ← infra（UI は domain-compat 経由の domain のみ）');
  process.exit(1);
}
console.log('  ✓ 禁止された層依存なし');
console.log('\nOK: レイヤー境界チェックに合格');
