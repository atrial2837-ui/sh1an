/**
 * @file artist-similarity.test.js
 * @description 重複候補グループの安全判定のユニットテスト。
 *   Node.js 組み込みテストランナー (node:test) を使用。
 *   期待値は本番データ 538 曲で実際に検出されたケースに基づく。
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import {
  looseArtistKey,
  editDistance,
  classifyArtistPair,
  classifyGroup,
} from '../../../src/domain/song/artist-similarity.js';

describe('looseArtistKey', () => {
  it('記号・空白の差を吸収する', () => {
    const keys = ['Mrs. GREEN APPLE', 'Mrs.GREEN APPLE', 'Mrs GREEN APPLE'].map(looseArtistKey);
    assert.equal(new Set(keys).size, 1);
  });
});

describe('editDistance', () => {
  it('同一文字列は 0', () => {
    assert.equal(editDistance('abc', 'abc'), 0);
  });

  it('1 文字置換は 1', () => {
    assert.equal(editDistance('kei', 'key'), 1);
  });

  it('1 文字欠落は 1', () => {
    assert.equal(editDistance('unison', 'union'), 1);
  });

  it('上限を超える差は max + 1 で打ち切る', () => {
    assert.equal(editDistance('abc', 'zzzzzzzzzz', 3), 4);
  });
});

describe('classifyArtistPair', () => {
  it('記号だけ違う名義は same', () => {
    assert.equal(classifyArtistPair('Mrs. GREEN APPLE', 'Mrs GREEN APPLE'), 'same');
  });

  it('片方が未設定なら same (埋めるだけの統合)', () => {
    assert.equal(classifyArtistPair(null, 'なとり'), 'same');
    assert.equal(classifyArtistPair('なとり', ''), 'same');
  });

  it('前方一致する補足付きは annotation', () => {
    assert.equal(classifyArtistPair('ISSA', 'ISSA(DA PUMP)'), 'annotation');
    assert.equal(classifyArtistPair('みきとP', 'みきとP feat.初音ミク'), 'annotation');
    assert.equal(classifyArtistPair("B'z", "B'z ※ワンコーラスのみ"), 'annotation');
  });

  it('1 文字違いの長い名義は typo', () => {
    assert.equal(
      classifyArtistPair('ASIAN KUNG-FU GENERATION', 'ASIAN KUNG-FU GENELATION'),
      'typo',
    );
    assert.equal(classifyArtistPair('Mrs. GREEN APPLE', 'Mrs.REEN APPLE'), 'typo');
    assert.equal(classifyArtistPair('flumpool', 'flumppl'), 'typo');
  });

  it('明確に別のアーティストは different', () => {
    assert.equal(classifyArtistPair('Guiano', 'ORANGE RANGE'), 'different');
    assert.equal(classifyArtistPair('BiSH', 'Daito Music'), 'different');
    assert.equal(classifyArtistPair('the pillows', 'BUMP OF CHICKEN'), 'different');
  });

  it('短い名義の 1 文字違いは different に寄せる (KEI と KEY は別人の可能性)', () => {
    // 3 文字で 1 文字違いは比率が大きく、打ち間違いと断定できないため人に判断させる
    assert.equal(classifyArtistPair('KEI', 'KEY'), 'different');
  });
});

describe('classifyGroup', () => {
  it('別名義が 1 件でも混ざれば review に落とす', () => {
    const { confidence, reasons } = classifyGroup([
      { artist: 'Guiano' },
      { artist: 'ORANGE RANGE' },
    ]);
    assert.equal(confidence, 'review');
    assert.ok(reasons.includes('アーティストが別名義'));
  });

  it('打ち間違いだけなら safe', () => {
    const { confidence, reasons } = classifyGroup([
      { artist: 'ASIAN KUNG-FU GENERATION' },
      { artist: 'ASIAN KUNG-FU GENELATION' },
    ]);
    assert.equal(confidence, 'safe');
    assert.ok(reasons.includes('アーティスト名の打ち間違い'));
  });

  it('3 件のうち 1 件でも別名義なら review', () => {
    const { confidence } = classifyGroup([
      { artist: 'Mrs. GREEN APPLE' },
      { artist: 'Mrs.REEN APPLE' },
      { artist: 'ORANGE RANGE' },
    ]);
    assert.equal(confidence, 'review');
  });

  it('曲名の記号差を理由に含める', () => {
    const { reasons } = classifyGroup([
      { artist: 'WANDS', title: '世界が終わるまでは・・・' },
      { artist: 'WANDS', title: '世界が終わるまでは...' },
    ]);
    assert.ok(reasons.includes('曲名の記号・空白差'));
  });

  it('理由が特定できない場合も空配列にしない', () => {
    const { reasons } = classifyGroup([
      { artist: 'Ado', title: '新時代' },
      { artist: 'Ado', title: '新時代' },
    ]);
    assert.ok(reasons.length > 0);
  });
});
