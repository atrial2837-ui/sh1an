/**
 * @module song/loose-song-key
 * @description 重複曲の検出用の「緩いキー」を生成する。
 *
 * buildSongKey / normalizedKey は NFKC + 小文字化 + 空白畳みまでしか行わないため、
 * 見た目が同じ記号でもコードポイントが違うと別キーになる。実際に起きた例:
 *
 *   愛♡スクリ~ム！   ~ = U+007E TILDE            → NFKC 後も U+007E
 *   愛♡スクリ〜ム！   〜 = U+301C WAVE DASH        → NFKC 後も U+301C
 *   愛♡スクリ～ム！   ～ = U+FF5E FULLWIDTH TILDE → NFKC で U+007E
 *
 * U+301C だけ他と一致せず、同じ曲が別レコードとして登録されてしまう。
 *
 * そこで検出用には記号・句読点・空白をすべて落としたキーを使う。
 * 上記 3 件はいずれも「愛スクリム」に畳まれてグループ化できる。
 *
 * 注意: このキーは「統合候補を人に提示する」ためのものであり、
 * これ自体を song_key として保存してはいけない (情報が落ちるため)。
 * 実際の統合は必ず利用者が確認したうえで id 指定で行う。
 *
 * 副作用禁止: fetch / DOM / fs / process / env / Date.now() の内部呼び出しゼロ。
 */

import { normalizedKey } from '../shared/text.js';

/**
 * 記号 (\p{S})・句読点 (\p{P})・区切り (\p{Z})・制御文字 (\p{C}) を除去する。
 * 長音符 U+30FC は \p{L}(Lm) なので残る ("ロード" が "ロド" にならない)。
 */
const DECORATION = /[\p{P}\p{S}\p{Z}\p{C}]/gu;

/**
 * 重複検出用の緩いキーを生成する。
 *
 * normalizedKey (NFKC + trim + 空白畳み + 小文字化) を適用したあと、
 * 記号・句読点・空白を除去する。文字 (漢字/かな/英数) だけが残る。
 *
 * @param {unknown} title - 曲名。null/undefined は空文字として扱う。
 * @returns {string} 記号を除いた比較用キー。文字が残らない場合は空文字。
 */
export function buildLooseTitleKey(title) {
  return normalizedKey(title).replace(DECORATION, '');
}
