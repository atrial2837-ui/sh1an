/**
 * @module song/artist-similarity
 * @description 重複候補グループの「統合してよさそうか」を判定する。
 *
 * 曲名を記号無視で束ねると、統合すべきものと統合してはいけないものが混ざる。
 * 本番データ 538 曲での実例:
 *
 *   統合すべき (表記揺れ・打ち間違い)
 *     Mrs.REEN APPLE      ← Mrs.GREEN APPLE の G 抜け
 *     ASIAN KUNG-FU GENELATION ← GENERATION の R→L
 *     UNION SQUARE GARDEN ← UNISON の S 抜け
 *     ISSA / ISSA(DA PUMP)     ← 補足が付いただけ
 *     B'z / B'z ※ワンコーラスのみ ← 備考が名前欄に混入
 *
 *   統合してはいけない (同名異曲)
 *     花        Guiano / ORANGE RANGE
 *     DiSTANCE  BiSH / Daito Music
 *
 * 前者だけを既定で選ばせ、後者は人の判断を促すために分類する。
 *
 * 副作用禁止: fetch / DOM / fs / process / env / Date.now() の内部呼び出しゼロ。
 */

import { normalizedKey } from '../shared/text.js';

const DECORATION = /[\p{P}\p{S}\p{Z}\p{C}]/gu;

/**
 * 記号・空白を落としたアーティスト比較キー。
 * "Mrs.GREEN APPLE" と "Mrs. GREEN APPLE" を同一視する。
 *
 * @param {unknown} name
 * @returns {string}
 */
export function looseArtistKey(name) {
  return normalizedKey(name).replace(DECORATION, '');
}

/**
 * レーベンシュタイン距離。上限を超えたら打ち切って上限+1を返す。
 *
 * @param {string} a
 * @param {string} b
 * @param {number} [max=3] - これを超える距離は区別しない
 * @returns {number}
 */
export function editDistance(a, b, max = 3) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > max) return max + 1;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

/**
 * グループ内の 2 件の関係を判定する。
 *
 * - `same`       : 記号・空白を除くと完全一致 (Mrs.GREEN APPLE / Mrs. GREEN APPLE)
 * - `annotation` : 片方が他方の前方一致 (ISSA / ISSA(DA PUMP)、みきとP / みきとP feat.初音ミク)
 * - `typo`       : 編集距離が短く、長さに対する比率も小さい (GENERATION / GENELATION)
 * - `different`  : 上記に当てはまらない。別アーティストの可能性が高い
 *
 * @param {string|null} a
 * @param {string|null} b
 * @returns {'same'|'annotation'|'typo'|'different'}
 */
export function classifyArtistPair(a, b) {
  const ka = looseArtistKey(a);
  const kb = looseArtistKey(b);

  // どちらか未設定なら、埋めるだけの統合とみなして安全側に寄せる
  if (!ka || !kb) return 'same';
  if (ka === kb) return 'same';

  const [shortKey, longKey] = ka.length <= kb.length ? [ka, kb] : [kb, ka];
  if (longKey.startsWith(shortKey)) return 'annotation';

  const dist = editDistance(ka, kb, 3);
  // 距離 2 以内かつ長い方の 25% 以内の差なら打ち間違いとみなす
  if (dist <= 2 && dist / longKey.length <= 0.25) return 'typo';

  return 'different';
}

/**
 * グループ全体の信頼度を決める。
 * 1 件でも `different` を含むなら要確認に落とす。
 *
 * @param {Array<{ artist: string|null }>} songs
 * @returns {{ confidence: 'safe'|'review', reasons: string[] }}
 */
export function classifyGroup(songs) {
  const reasons = new Set();
  let review = false;

  let symbolOnlyArtist = false;

  for (let i = 0; i < songs.length; i++) {
    for (let j = i + 1; j < songs.length; j++) {
      const kind = classifyArtistPair(songs[i].artist, songs[j].artist);
      if (kind === 'different') {
        review = true;
        reasons.add('アーティストが別名義');
      } else if (kind === 'typo') {
        reasons.add('アーティスト名の打ち間違い');
      } else if (kind === 'annotation') {
        reasons.add('アーティスト名に補足あり');
      } else if (looseArtistKey(songs[i].artist) === looseArtistKey(songs[j].artist)
                 && normalizedKey(songs[i].artist) !== normalizedKey(songs[j].artist)) {
        symbolOnlyArtist = true;
      }
    }
  }

  const titles = new Set(songs.map((s) => s.title));
  if (titles.size > 1) reasons.add('曲名の記号・空白差');
  if (symbolOnlyArtist) reasons.add('アーティスト名の記号・空白差');
  if (!reasons.size) reasons.add('表記のわずかな違い');

  return { confidence: review ? 'review' : 'safe', reasons: [...reasons] };
}
