import { state } from '../store.js';
import { $, escapeHtml, fmtDate, fmtMonth, daysSince, youtubeThumb } from '../utils.js';
import { periodHits, buildHeatmap, heatLevel } from '../domain-compat.js';
import { getToday } from '../store.js';
import { icon } from '../icons.js';

export function renderDashboard() {
  const { songs, streams } = state.data;
  const recent = streams.slice(0, 5);
  const today = getToday();
  const panel = $('#panel-dashboard');
  const heatmap = buildHeatmap(streams, today);

  panel.innerHTML = `
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${renderLatestStreamLog(streams[0])}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">ジャンル分布</div>
          ${renderGenreChart(songs)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">配信ヒートマップ</div>
          ${renderHeatmap(heatmap)}
        </div>
      </div>
      ${renderResumeSection()}
      ${deferredDashboardHtml(streams, songs, recent)}
    </div>
  `;
  bindResumeSection();
}

/* ── まとめカード（年間/月間リキャップ） ────────────────────────────────── */

/** カード外枠 HTML（内容は bindRecapCard で差し込む） */
function renderRecapCardShell() {
  return `
    <div class="card dashboard-card dashboard-recap-card" id="dashboard-recap-card">
      <div class="card-title">
        sh1an のまとめ
        <span class="dashboard-recap-toggle" id="dashboard-recap-toggle">
          <button class="btn ghost" type="button" data-recap-period="year" id="recap-btn-year">今年</button>
          <button class="btn ghost" type="button" data-recap-period="month" id="recap-btn-month">今月</button>
        </span>
      </div>
      <div id="dashboard-recap-body"></div>
    </div>
  `;
}

/** 期間 (year | month) に応じてリキャップを集計して HTML を返す */
function computeRecap(streams, songs, period, today) {
  const y = today.getFullYear();
  const m = today.getMonth(); // 0-indexed

  /** stream がその期間に含まれるか */
  function inPeriod(stream) {
    const d = stream.date instanceof Date ? stream.date : new Date(stream.date);
    if (period === 'year') return d.getFullYear() === y;
    return d.getFullYear() === y && d.getMonth() === m;
  }

  const targetStreams = streams.filter(inPeriod);
  if (!targetStreams.length) return null;

  // 配信回数
  const streamCount = targetStreams.length;

  // 総歌唱数
  const totalSongs = targetStreams.reduce((sum, s) => sum + (s.songs?.length || 0), 0);

  // distinct song key
  const distinctKeys = new Set();
  for (const s of targetStreams) {
    for (const song of (s.songs || [])) {
      if (song.key) distinctKeys.add(song.key);
    }
  }
  const distinctCount = distinctKeys.size;

  // 最多歌唱曲（期間内の出現回数でカウント）
  const countMap = new Map();
  for (const s of targetStreams) {
    for (const song of (s.songs || [])) {
      if (!song.key) continue;
      const entry = countMap.get(song.key) || { title: song.title, count: 0 };
      entry.count++;
      countMap.set(song.key, entry);
    }
  }
  let topSong = null;
  let topCount = 0;
  for (const [, entry] of countMap) {
    if (entry.count > topCount) { topCount = entry.count; topSong = entry; }
  }

  // 初披露曲数（song.firstSung がその期間内）
  let newSongCount = 0;
  for (const song of songs) {
    if (!song.firstSung) continue;
    const d = song.firstSung instanceof Date ? song.firstSung : new Date(song.firstSung);
    if (period === 'year' && d.getFullYear() === y) newSongCount++;
    else if (period === 'month' && d.getFullYear() === y && d.getMonth() === m) newSongCount++;
  }

  return { streamCount, totalSongs, distinctCount, topSong, topCount, newSongCount };
}

function recapBodyHtml(recap, periodLabel) {
  if (!recap) {
    return `<div class="empty-state">この期間の記録はまだありません</div>`;
  }
  const topSongHtml = recap.topSong
    ? `${escapeHtml(recap.topSong.title)} <span class="recap-sub">(${recap.topCount}回)</span>`
    : '—';
  return `
    <div class="recap-period-label">${escapeHtml(periodLabel)}</div>
    <div class="recap-tiles">
      <div class="recap-tile">
        <strong>${recap.streamCount}</strong>
        <span>歌枠数</span>
      </div>
      <div class="recap-tile">
        <strong>${recap.totalSongs}</strong>
        <span>総歌唱数</span>
      </div>
      <div class="recap-tile">
        <strong>${recap.distinctCount}</strong>
        <span>曲の種類</span>
      </div>
      <div class="recap-tile">
        <strong>${recap.newSongCount}</strong>
        <span>初披露曲</span>
      </div>
    </div>
    <div class="recap-top-song">
      ${icon('rank')} 最多歌唱: ${topSongHtml}
    </div>
  `;
}

function bindRecapCard(streams, songs) {
  const body = $('#dashboard-recap-body');
  const yearBtn = $('#recap-btn-year');
  const monthBtn = $('#recap-btn-month');
  if (!body) return;

  const today = getToday();
  let currentPeriod = 'year';

  function render(period) {
    currentPeriod = period;
    const y = today.getFullYear();
    const m = today.getMonth();
    const monthNames = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    const label = period === 'year' ? `${y}年` : `${y}年 ${monthNames[m]}`;
    const recap = computeRecap(streams, songs, period, today);
    body.innerHTML = recapBodyHtml(recap, label);
    // ボタンの active 切替
    yearBtn?.classList.toggle('primary', period === 'year');
    yearBtn?.classList.toggle('ghost', period !== 'year');
    monthBtn?.classList.toggle('primary', period === 'month');
    monthBtn?.classList.toggle('ghost', period !== 'month');
  }

  // 初期描画
  render('year');

  // トグルボタン
  const toggle = $('#dashboard-recap-toggle');
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-recap-period]');
      if (!btn) return;
      render(btn.dataset.recapPeriod);
    });
  }
}

/* ── 続きから見る（視聴履歴） ──────────────────────────────────────────── */

const WATCH_HISTORY_KEY = 'sh1an-watch-history-v1';

function _watchHistory() {
  try { return JSON.parse(localStorage.getItem(WATCH_HISTORY_KEY) || '[]'); } catch (_) { return []; }
}

function _fmtPos(sec) {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}` : `${m}:${String(ss).padStart(2, '0')}`;
}

function renderResumeSection() {
  const entries = _watchHistory().slice(0, 6);
  return `
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">続きから見る
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="履歴をキューとして再生">キュー再生</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="履歴を消去">消去</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${entries.length ? entries.map((e, i) => {
          const thumb = youtubeThumb(e.url);
          const days = Math.floor((Date.now() - (e.updatedAt || 0)) / 86400000);
          const ago = days <= 0 ? '今日' : `${days}日前`;
          return `
          <button class="dashboard-resume-item" type="button" data-resume-idx="${i}" title="${escapeHtml(e.title || '')}">
            ${thumb ? `<img class="dashboard-resume-thumb" src="${escapeHtml(thumb)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${escapeHtml(e.title || '動画')}</span>
            <span class="dashboard-resume-meta">${icon('time')} ${_fmtPos(e.t)} から ・ ${ago}</span>
          </button>`;
        }).join('') : '<div class="empty-state">再生履歴はまだありません</div>'}
      </div>
    </div>`;
}

/** renderDashboard 後に呼ぶ: 続きから見るのクリック処理 */
function bindResumeSection() {
  const list = $('#dashboard-resume-list');
  if (list) {
    list.onclick = (e) => {
      const btn = e.target.closest('[data-resume-idx]');
      if (!btn) return;
      const entry = _watchHistory()[Number(btn.dataset.resumeIdx)];
      if (!entry?.url) return;
      let target = null;
      if (entry.channel != null && entry.index != null) {
        const all = state.channelData?.combined?.streams || state.data?.streams || [];
        target = all.find(s => s.channel === entry.channel && s.index === entry.index) || null;
      }
      window.__openStreamViewer?.(target || { url: entry.url, title: entry.title, isMv: !!entry.isMv }, entry.t);
    };
  }
  const clear = $('#dashboard-resume-clear');
  if (clear) {
    clear.onclick = () => {
      // 再生履歴をクリアする。パネルは残し、空状態を表示する。
      try { localStorage.removeItem(WATCH_HISTORY_KEY); } catch (_) {}
      const list = $('#dashboard-resume-list');
      if (list) list.innerHTML = '<div class="empty-state">再生履歴はまだありません</div>';
    };
  }
  const queueBtn = $('#dashboard-resume-queue');
  if (queueBtn) {
    queueBtn.onclick = () => {
      const entries = _watchHistory();
      const streams = state.channelData?.combined?.streams || state.data?.streams || [];
      const items = entries.map((entry, i) => {
        const stream = entry.channel != null && entry.index != null
          ? streams.find(s => s.channel === entry.channel && s.index === entry.index)
          : null;
        if (stream?.url) return { kind: 'stream', key: `${stream.channel}:${stream.index}`, stream };
        if (entry.url) return { kind: 'mv', key: `history:${i}`, video: { url: entry.url, title: entry.title || '動画', isMv: !!entry.isMv } };
        return null;
      }).filter(Boolean);
      if (!items.length) return;
      window.__playMyListInViewer?.({ name: '視聴履歴', items, idx: 0 });
    };
  }
}

function deferredDashboardHtml(streams, songs, recent) {
  const stalePicks = songs.filter(s => s.daysSinceLast >= 180).sort((a, b) => b.count - a.count).slice(0, 5);
  const recentPicks = songs.filter(s => s.daysSinceLast != null && s.daysSinceLast <= 30).sort((a, b) => b.count - a.count).slice(0, 5);
  const monthlyHits = periodHits(streams, 'month', getToday());
  const yearlyHits = periodHits(streams, 'year', getToday());
  return `
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">今月のよく歌われた曲</div>
      <div class="bar-list">
        ${monthlyHits.length ? monthlyHits.slice(0, 5).map((s, i) => topBarRow(s, i, monthlyHits[0].count)).join('') : '<div class="empty-state">今月の歌唱履歴なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">今年のよく歌われた曲</div>
      <div class="bar-list">
        ${yearlyHits.length ? yearlyHits.slice(0, 5).map((s, i) => topBarRow(s, i, yearlyHits[0].count)).join('') : '<div class="empty-state">今年の歌唱履歴なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">久しぶり候補</div>
      <div class="bar-list">
        ${stalePicks.length ? stalePicks.map((s, i) => topBarRow(s, i, stalePicks[0].count)).join('') : '<div class="empty-state">候補なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">最近歌った定番</div>
      <div class="bar-list">
        ${recentPicks.length ? recentPicks.map((s, i) => topBarRow(s, i, recentPicks[0].count)).join('') : '<div class="empty-state">候補なし</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">直近の歌枠</div>
      ${recent.map(s => `
        <div class="activity-row">
          <span class="a-date">${fmtDate(s.date)}</span>
          <span class="a-title">${s.url ? `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title || '配信')}</a>` : escapeHtml(s.title)}</span>
          <span class="a-meta">${icon('mic')} ${s.songs.length}曲</span>
        </div>
      `).join('')}
    </div>
  `;
}

function topBarRow(s, i, max) {
  const pct = Math.round((s.count / max) * 100);
  return `
    <div class="bar-row clickable" data-songkey="${escapeHtml(s.key)}" data-songtitle="${escapeHtml(s.title)}" data-songartist="${escapeHtml(s.artist)}" title="クリックで配信タイムラインに絞り込み">
      <div class="bar-rank">${i + 1}</div>
      <div class="bar-content">
        <div class="bar-label">${escapeHtml(s.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${escapeHtml(s.artist)}</span></div>
        <div class="bar-bar" style="width:${pct}%;"></div>
      </div>
      <div class="bar-value">${s.count}</div>
    </div>
  `;
}

function renderLatestStreamLog(stream) {
  if (!stream) {
    return `
      <div class="card dashboard-card dashboard-latest-card">
        <div class="card-title">最新の歌枠</div>
        <div class="empty-state">直近の歌枠はまだありません</div>
      </div>
    `;
  }
  const thumb = stream.url ? youtubeThumb(stream.url) : '';
  const songs = (stream.songs || []).slice(0, 15);
  return `
    <div class="card dashboard-card dashboard-latest-card">
      <div class="card-title">最新の歌枠</div>
      <div class="latest-stream-log">
        <a class="latest-stream-thumb" href="${escapeHtml(stream.url || '#')}" target="_blank" rel="noopener" aria-label="YouTubeで開く">
          ${thumb ? `<img src="${escapeHtml(thumb)}" alt="" width="1280" height="720" loading="eager" fetchpriority="high" decoding="async" referrerpolicy="no-referrer">` : ''}
        </a>
        <div class="latest-stream-body">
          <h3>${escapeHtml(stream.title || '配信')}</h3>
          <p>${icon('mic')} ${(stream.songs || []).length}曲 ・ ${daysSince(stream.date)}日前</p>
          <div class="latest-setlist">
            ${songs.length ? songs.map((s, i) => {
              const titleEl = s.key
                ? `<button class="latest-sl-title" type="button" data-songkey="${escapeHtml(s.key)}">${escapeHtml(s.title || '—')}</button>`
                : `<span class="latest-sl-title">${escapeHtml(s.title || '—')}</span>`;
              const artistEl = s.artist
                ? `<button class="latest-sl-artist" type="button" data-artist-search="${escapeHtml(s.artist)}">${escapeHtml(s.artist)}</button>`
                : '';
              return `<div class="latest-setlist-item"><strong class="latest-sl-num">${i + 1}</strong><div class="latest-sl-info">${titleEl}${artistEl}</div></div>`;
            }).join('') : '<span>セットリスト未登録</span>'}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderScheduleDensity(streams) {
  // 配信は夜中心のため時間帯軸は廃止し、曜日分布のみを表示する。
  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const counts = Array(7).fill(0);
  for (const stream of streams) {
    const d = stream.date instanceof Date ? stream.date : new Date(stream.date);
    if (Number.isNaN(d.getTime())) continue;
    counts[d.getDay()]++;
  }
  const max = Math.max(1, ...counts);
  return `
    <div class="dow-dist">
      ${days.map((day, i) => {
        const value = counts[i];
        const pct = Math.round((value / max) * 100);
        return `
        <div class="dow-row" title="${day}曜: ${value}枠">
          <span class="dow-label">${day}</span>
          <div class="dow-bar-track"><div class="dow-bar" style="width:${pct}%"></div></div>
          <span class="dow-value">${value}</span>
        </div>`;
      }).join('')}
    </div>
  `;
}

function renderGenreChart(songs) {
  const genreCounts = new Map();
  for (const s of songs) {
    const genre = s.genre || s.genreText || '未分類';
    if (!genre || genre === '未分類') continue;
    genreCounts.set(genre, (genreCounts.get(genre) || 0) + 1);
  }
  const rows = Array.from(genreCounts.entries()).sort((a, b) => b[1] - a[1]);
  const total = rows.reduce((sum, [, count]) => sum + count, 0);
  if (!rows.length) return '<div class="empty-state">ジャンルデータなし</div>';
  const totalSongs = songs.length || 0;
  const unclassified = Math.max(0, totalSongs - total);
  const topGenre = rows[0];
  const topShare = totalSongs ? Math.round((topGenre[1] / totalSongs) * 100) : 0;
  return `
    <div class="genre-meter" aria-label="ジャンル分布">
      <div class="genre-meter-track">
        ${rows.map(([genre, count], index) => `
          <span class="genre-meter-segment g${index % 8}" style="width:${Math.max(3, (count / total) * 100)}%" title="${escapeHtml(genre)}: ${count}曲"></span>
        `).join('')}
      </div>
      <div class="genre-breakdown">
        ${rows.slice(0, 8).map(([genre, count], index) => `
          <div class="genre-row">
            <span class="genre-dot g${index % 8}"></span>
            <span class="genre-name">${escapeHtml(genre)}</span>
            <strong>${count}</strong>
          </div>
        `).join('')}
      </div>
      <div class="genre-insights" aria-label="ジャンル集計">
        <div class="genre-insight">
          <span>分類済み</span>
          <strong>${total}<small>曲</small></strong>
        </div>
        <div class="genre-insight">
          <span>未分類</span>
          <strong>${unclassified}<small>曲</small></strong>
        </div>
        <div class="genre-insight">
          <span>ジャンル数</span>
          <strong>${rows.length}<small>種</small></strong>
        </div>
        <div class="genre-insight">
          <span>${escapeHtml(topGenre[0])}</span>
          <strong>${topShare}<small>%</small></strong>
        </div>
      </div>
    </div>
  `;
}

function renderMonthlyBars(monthly, max) {
  if (!monthly.length) return '<div class="empty-state">月別データなし</div>';
  return `
    <div class="monthly-bars" aria-label="月別歌唱数">
      ${monthly.map((m) => {
        const pct = Math.max(5, Math.round((m.songs / max) * 100));
        return `
          <div class="month-bar" title="${fmtMonth(m.date)}: ${m.songs}曲 / ${m.streams}枠">
            <div class="month-bar-track"><span style="height:${pct}%"></span></div>
            <div class="month-label">${fmtMonth(m.date).replace(/^\d{4}\//, '')}</div>
            <strong>${m.songs}</strong>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderHeatmap(cells) {
  const inRange = cells.filter(c => c.inRange);
  const activeDays = inRange.filter(c => c.value > 0);
  const totalSongs = inRange.reduce((sum, c) => sum + c.value, 0);
  const maxDay = Math.max(0, ...inRange.map(c => c.value));
  const first = inRange[0]?.date;
  const last = inRange[inRange.length - 1]?.date;
  const period = first && last ? `${fmtMonth(first)} - ${fmtMonth(last)}` : '—';
  const months = [];
  const monthMap = new Map();
  for (const cell of inRange) {
    const key = `${cell.date.getFullYear()}-${String(cell.date.getMonth() + 1).padStart(2, '0')}`;
    if (!monthMap.has(key)) {
      const month = { key, date: cell.date, cells: [] };
      monthMap.set(key, month);
      months.push(month);
    }
    monthMap.get(key).cells.push(cell);
  }

  const monthCards = months.map(month => {
    const monthSongs = month.cells.reduce((sum, c) => sum + c.value, 0);
    const monthActive = month.cells.filter(c => c.value > 0).length;
    const monthMax = Math.max(0, ...month.cells.map(c => c.value));
    const days = [...month.cells];
    while (days.length < 31) days.push(null);
    const daysHtml = days.map(c => c ? `
      <span class="heatmap-day ${heatLevel(c.value)}" title="${c.iso}: ${c.value}曲">
        <span>${c.date.getDate()}</span>
      </span>
    ` : '<span class="heatmap-day is-empty" aria-hidden="true"></span>').join('');
    return `
      <section class="heatmap-month-card" aria-label="${fmtMonth(month.date)} ${monthSongs}曲 ${monthActive}日配信">
        <div class="heatmap-month-head">
          <span>${fmtMonth(month.date).replace(/^\d{4}\//, '')}</span>
          <strong>${monthSongs}</strong>
        </div>
        <div class="heatmap-month-meta">
          <span>配信 ${monthActive}日</span>
          <span>最多 ${monthMax}曲/日</span>
        </div>
        <div class="heatmap-days" aria-hidden="true">${daysHtml}</div>
      </section>
    `;
  }).join('');

  return `
    <div class="heatmap-summary">
      <div><span>表示期間</span><strong>${period}</strong></div>
      <div><span>配信日</span><strong>${activeDays.length}日</strong></div>
      <div><span>歌唱曲数</span><strong>${totalSongs}曲</strong></div>
      <div><span>最多</span><strong>${maxDay}曲/日</strong></div>
    </div>
    <div class="heatmap-month-grid">${monthCards}</div>
    <div class="heatmap-legend">
      <span>日ごとの歌唱曲数</span>
      <div class="scale">
        <div class="heatmap-cell"></div>
        <div class="heatmap-cell l1"></div>
        <div class="heatmap-cell l2"></div>
        <div class="heatmap-cell l3"></div>
        <div class="heatmap-cell l4"></div>
      </div>
      <span>多いほど明るい</span>
    </div>
  `;
}
