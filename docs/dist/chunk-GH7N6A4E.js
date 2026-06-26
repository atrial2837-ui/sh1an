import{d as f,e as h}from"./chunk-AW5KTZNU.js";import{B as L,C,D as $,G as k,M as y,a as g,c as l,p as M,q as D,r as H}from"./chunk-3BNHFXWM.js";function O(){let{songs:a,streams:t}=h.data,i=t.slice(0,5),s=f(),d=g("#panel-dashboard"),r=H(t,s);d.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${P(t[0])}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">\u30B8\u30E3\u30F3\u30EB\u5206\u5E03</div>
          ${A(a)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">\u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7</div>
          ${I(r)}
        </div>
      </div>
      ${B()}
      ${N(t,a,i)}
    </div>
  `,F()}var j="sh1an-watch-history-v1";function x(){try{return JSON.parse(localStorage.getItem(j)||"[]")}catch{return[]}}function R(a){let t=Math.max(0,Math.floor(a)),i=Math.floor(t/3600),s=Math.floor(t%3600/60),d=t%60;return i>0?`${i}:${String(s).padStart(2,"0")}:${String(d).padStart(2,"0")}`:`${s}:${String(d).padStart(2,"0")}`}function B(){let a=x().slice(0,6);return`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">\u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.length?a.map((t,i)=>{let s=k(t.url),d=Math.floor((Date.now()-(t.updatedAt||0))/864e5),r=d<=0?"\u4ECA\u65E5":`${d}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${i}" title="${l(t.title||"")}">
            ${s?`<img class="dashboard-resume-thumb" src="${l(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${l(t.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${y("time")} ${R(t.t)} \u304B\u3089 \u30FB ${r}</span>
          </button>`}).join(""):'<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function F(){let a=g("#dashboard-resume-list");a&&(a.onclick=s=>{let d=s.target.closest("[data-resume-idx]");if(!d)return;let r=x()[Number(d.dataset.resumeIdx)];if(!r?.url)return;let o=null;r.channel!=null&&r.index!=null&&(o=(h.channelData?.combined?.streams||h.data?.streams||[]).find(e=>e.channel===r.channel&&e.index===r.index)||null),window.__openStreamViewer?.(o||{url:r.url,title:r.title,isMv:!!r.isMv},r.t)});let t=g("#dashboard-resume-clear");t&&(t.onclick=()=>{try{localStorage.removeItem(j)}catch{}let s=g("#dashboard-resume-list");s&&(s.innerHTML='<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>')});let i=g("#dashboard-resume-queue");i&&(i.onclick=()=>{let s=x(),d=h.channelData?.combined?.streams||h.data?.streams||[],r=s.map((o,n)=>{let e=o.channel!=null&&o.index!=null?d.find(c=>c.channel===o.channel&&c.index===o.index):null;return e?.url?{kind:"stream",key:`${e.channel}:${e.index}`,stream:e}:o.url?{kind:"mv",key:`history:${n}`,video:{url:o.url,title:o.title||"\u52D5\u753B",isMv:!!o.isMv}}:null}).filter(Boolean);r.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:r,idx:0})})}function N(a,t,i){let s=t.filter(n=>n.daysSinceLast>=180).sort((n,e)=>e.count-n.count).slice(0,5),d=t.filter(n=>n.daysSinceLast!=null&&n.daysSinceLast<=30).sort((n,e)=>e.count-n.count).slice(0,5),r=M(a,"month",f()),o=M(a,"year",f());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${r.length?r.slice(0,5).map((n,e)=>S(n,e,r[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${o.length?o.slice(0,5).map((n,e)=>S(n,e,o[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u4E45\u3057\u3076\u308A\u5019\u88DC</div>
      <div class="bar-list">
        ${s.length?s.map((n,e)=>S(n,e,s[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A</div>
      <div class="bar-list">
        ${d.length?d.map((n,e)=>S(n,e,d[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u76F4\u8FD1\u306E\u6B4C\u67A0</div>
      ${i.map(n=>`
        <div class="activity-row">
          <span class="a-date">${C(n.date)}</span>
          <span class="a-title">${n.url?`<a href="${l(n.url)}" target="_blank" rel="noopener">${l(n.title||"\u914D\u4FE1")}</a>`:l(n.title)}</span>
          <span class="a-meta">${y("mic")} ${n.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function S(a,t,i){let s=Math.round(a.count/i*100);return`
    <div class="bar-row clickable" data-songkey="${l(a.key)}" data-songtitle="${l(a.title)}" data-songartist="${l(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${t+1}</div>
      <div class="bar-content">
        <div class="bar-label">${l(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${l(a.artist)}</span></div>
        <div class="bar-bar" style="width:${s}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function P(a){if(!a)return`
      <div class="card dashboard-card dashboard-latest-card">
        <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
        <div class="empty-state">\u76F4\u8FD1\u306E\u6B4C\u67A0\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>
      </div>
    `;let t=a.url?k(a.url):"",i=(a.songs||[]).slice(0,15);return`
    <div class="card dashboard-card dashboard-latest-card">
      <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
      <div class="latest-stream-log">
        <a class="latest-stream-thumb" href="${l(a.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
          ${t?`<img src="${l(t)}" alt="" width="1280" height="720" loading="eager" fetchpriority="high" decoding="async" referrerpolicy="no-referrer">`:""}
        </a>
        <div class="latest-stream-body">
          <h3>${l(a.title||"\u914D\u4FE1")}</h3>
          <p>${y("mic")} ${(a.songs||[]).length}\u66F2 \u30FB ${L(a.date)}\u65E5\u524D</p>
          <div class="latest-setlist">
            ${i.length?i.map((s,d)=>{let r=s.key?`<span class="latest-sl-title is-link" role="button" tabindex="0" data-songkey="${l(s.key)}">${l(s.title||"\u2014")}</span>`:`<span class="latest-sl-title">${l(s.title||"\u2014")}</span>`,o=s.artist?`<button class="latest-sl-artist" type="button" data-artist-search="${l(s.artist)}">${l(s.artist)}</button>`:"";return`<div class="latest-setlist-item"><strong class="latest-sl-num">${d+1}</strong><div class="latest-sl-info">${r}${o}</div></div>`}).join(""):"<span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u672A\u767B\u9332</span>"}
          </div>
        </div>
      </div>
    </div>
  `}function A(a){let t=new Map;for(let e of a){let c=e.genre||e.genreText||"\u672A\u5206\u985E";!c||c==="\u672A\u5206\u985E"||t.set(c,(t.get(c)||0)+1)}let i=Array.from(t.entries()).sort((e,c)=>c[1]-e[1]),s=i.reduce((e,[,c])=>e+c,0);if(!i.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let d=a.length||0,r=Math.max(0,d-s),o=i[0],n=d?Math.round(o[1]/d*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${i.map(([e,c],m)=>`
          <span class="genre-meter-segment g${m%8}" style="width:${Math.max(3,c/s*100)}%" title="${l(e)}: ${c}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${i.slice(0,8).map(([e,c],m)=>`
          <div class="genre-row">
            <span class="genre-dot g${m%8}"></span>
            <span class="genre-name">${l(e)}</span>
            <strong>${c}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${s}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u672A\u5206\u985E</span>
          <strong>${r}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${i.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${l(o[0])}</span>
          <strong>${n}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function I(a){let t=a.filter(v=>v.inRange),i=t.filter(v=>v.value>0),s=t.reduce((v,p)=>v+p.value,0),d=Math.max(0,...t.map(v=>v.value)),r=t[0]?.date,o=t[t.length-1]?.date,n=r&&o?`${$(r)} - ${$(o)}`:"\u2014",e=[],c=new Map;for(let v of t){let p=`${v.date.getFullYear()}-${String(v.date.getMonth()+1).padStart(2,"0")}`;if(!c.has(p)){let b={key:p,date:v.date,cells:[]};c.set(p,b),e.push(b)}c.get(p).cells.push(v)}let m=e.map(v=>{let p=v.cells.reduce((u,Y)=>u+Y.value,0),b=v.cells.filter(u=>u.value>0).length,_=Math.max(0,...v.cells.map(u=>u.value)),w=[...v.cells];for(;w.length<31;)w.push(null);let T=w.map(u=>u?`
      <span class="heatmap-day ${D(u.value)}" title="${u.iso}: ${u.value}\u66F2">
        <span>${u.date.getDate()}</span>
      </span>
    `:'<span class="heatmap-day is-empty" aria-hidden="true"></span>').join("");return`
      <section class="heatmap-month-card" aria-label="${$(v.date)} ${p}\u66F2 ${b}\u65E5\u914D\u4FE1">
        <div class="heatmap-month-head">
          <span>${$(v.date).replace(/^\d{4}\//,"")}</span>
          <strong>${p}</strong>
        </div>
        <div class="heatmap-month-meta">
          <span>\u914D\u4FE1 ${b}\u65E5</span>
          <span>\u6700\u591A ${_}\u66F2/\u65E5</span>
        </div>
        <div class="heatmap-days" aria-hidden="true">${T}</div>
      </section>
    `}).join("");return`
    <div class="heatmap-summary">
      <div><span>\u8868\u793A\u671F\u9593</span><strong>${n}</strong></div>
      <div><span>\u914D\u4FE1\u65E5</span><strong>${i.length}\u65E5</strong></div>
      <div><span>\u6B4C\u5531\u66F2\u6570</span><strong>${s}\u66F2</strong></div>
      <div><span>\u6700\u591A</span><strong>${d}\u66F2/\u65E5</strong></div>
    </div>
    <div class="heatmap-month-grid">${m}</div>
    <div class="heatmap-legend">
      <span>\u65E5\u3054\u3068\u306E\u6B4C\u5531\u66F2\u6570</span>
      <div class="scale">
        <div class="heatmap-cell"></div>
        <div class="heatmap-cell l1"></div>
        <div class="heatmap-cell l2"></div>
        <div class="heatmap-cell l3"></div>
        <div class="heatmap-cell l4"></div>
      </div>
      <span>\u591A\u3044\u307B\u3069\u660E\u308B\u3044</span>
    </div>
  `}export{O as renderDashboard};
