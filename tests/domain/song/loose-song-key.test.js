/**
 * @file loose-song-key.test.js
 * @description 重複検出用の緩いキー生成のユニットテスト。
 *   Node.js 組み込みテストランナー (node:test) を使用。
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import { buildLooseTitleKey } from '../../../src/domain/song/loose-song-key.js';

describe('buildLooseTitleKey', () => {
  it('波ダッシュの字種差 (~ 〜 ～) を同一キーに畳む', () => {
    // 本番で「愛♡スクリ〜ム！」が 3 レコードに分かれた実例。
    // NFKC は U+FF5E を U+007E にするが U+301C は変換しないため song_key が別値になる。
    const keys = [
      '愛♡スクリ~ム！', // ASCII TILDE
      '愛♡スクリ〜ム！', // WAVE DASH
      '愛♡スクリ～ム！', // FULLWIDTH TILDE
    ].map(buildLooseTitleKey);

    assert.equal(new Set(keys).size, 1);
    assert.equal(keys[0], '愛スクリム');
  });

  it('ハートの字種差 (♡ ♥) を無視する', () => {
    assert.equal(
      buildLooseTitleKey('愛♡スクリ〜ム！'),
      buildLooseTitleKey('愛♥スクリ〜ム!'),
    );
  });

  it('空白の有無を無視する', () => {
    assert.equal(
      buildLooseTitleKey('ハム太郎とっとこうた'),
      buildLooseTitleKey('ハム太郎 とっとこうた'),
    );
    assert.equal(
      buildLooseTitleKey('魔法 feat. ちょまいよ'),
      buildLooseTitleKey('魔法 feat.ちょまいよ'),
    );
  });

  it('三点リーダの表記差 (・・・ と ...) を無視する', () => {
    assert.equal(
      buildLooseTitleKey('世界が終わるまでは・・・'),
      buildLooseTitleKey('世界が終わるまでは...'),
    );
  });

  it('長音符 U+30FC は保持する (ロード が ロド に潰れない)', () => {
    assert.equal(buildLooseTitleKey('ロード'), 'ロード');
    assert.notEqual(buildLooseTitleKey('ロード'), buildLooseTitleKey('ロド'));
    assert.equal(buildLooseTitleKey('コーヒー'), 'コーヒー');
  });

  it('別の曲名を同一キーにしない', () => {
    assert.notEqual(buildLooseTitleKey('世界'), buildLooseTitleKey('世界線'));
    assert.notEqual(buildLooseTitleKey('Hello'), buildLooseTitleKey('Hell'));
  });

  it('大文字小文字を区別しない', () => {
    assert.equal(buildLooseTitleKey('DiSTANCE'), buildLooseTitleKey('Distance'));
  });

  it('記号だけの入力は空文字を返す', () => {
    assert.equal(buildLooseTitleKey('!!!'), '');
    assert.equal(buildLooseTitleKey('   '), '');
  });

  it('null / undefined は空文字として扱う', () => {
    assert.equal(buildLooseTitleKey(null), '');
    assert.equal(buildLooseTitleKey(undefined), '');
  });
});
