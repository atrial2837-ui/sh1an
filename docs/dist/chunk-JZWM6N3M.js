import{d as f,e as g}from"./chunk-AW5KTZNU.js";import{B as C,C as L,D as $,G as k,M as y,a as m,c,p as M,q as D,r as H}from"./chunk-3BNHFXWM.js";function K(){let{songs:s,streams:a}=g.data,d=a.slice(0,5),n=f(),i=m("#panel-dashboard"),r=H(a,n);i.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${A(a[0])}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">\u30B8\u30E3\u30F3\u30EB\u5206\u5E03</div>
          ${I(s)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">\u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7</div>
          ${P(r)}
        </div>
      </div>
      ${N()}
      ${F(a,s,d)}
    </div>
  `,B()}var j="sh1an-watch-history-v1";function x(){try{return JSON.parse(localStorage.getItem(j)||"[]")}catch{return[]}}function R(s){let a=Math.max(0,Math.floor(s)),d=Math.floor(a/3600),n=Math.floor(a%3600/60),i=a%60;return d>0?`${d}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${n}:${String(i).padStart(2,"0")}`}function N(){let s=x().slice(0,6);return`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">\u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${s.length?s.map((a,d)=>{let n=k(a.url),i=Math.floor((Date.now()-(a.updatedAt||0))/864e5),r=i<=0?"\u4ECA\u65E5":`${i}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${d}" title="${c(a.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${c(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${c(a.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${y("time")} ${R(a.t)} \u304B\u3089 \u30FB ${r}</span>
          </button>`}).join(""):'<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function B(){let s=m("#dashboard-resume-list");s&&(s.onclick=n=>{let i=n.target.closest("[data-resume-idx]");if(!i)return;let r=x()[Number(i.dataset.resumeIdx)];if(!r?.url)return;let l=null;r.channel!=null&&r.index!=null&&(l=(g.channelData?.combined?.streams||g.data?.streams||[]).find(t=>t.channel===r.channel&&t.index===r.index)||null),window.__openStreamViewer?.(l||{url:r.url,title:r.title,isMv:!!r.isMv},r.t)});let a=m("#dashboard-resume-clear");a&&(a.onclick=()=>{try{localStorage.removeItem(j)}catch{}let n=m("#dashboard-resume-list");n&&(n.innerHTML='<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>')});let d=m("#dashboard-resume-queue");d&&(d.onclick=()=>{let n=x(),i=g.channelData?.combined?.streams||g.data?.streams||[],r=n.map((l,e)=>{let t=l.channel!=null&&l.index!=null?i.find(o=>o.channel===l.channel&&o.index===l.index):null;return t?.url?{kind:"stream",key:`${t.channel}:${t.index}`,stream:t}:l.url?{kind:"mv",key:`history:${e}`,video:{url:l.url,title:l.title||"\u52D5\u753B",isMv:!!l.isMv}}:null}).filter(Boolean);r.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:r,idx:0})})}function F(s,a,d){let n=a.filter(e=>e.daysSinceLast>=180).sort((e,t)=>t.count-e.count).slice(0,5),i=a.filter(e=>e.daysSinceLast!=null&&e.daysSinceLast<=30).sort((e,t)=>t.count-e.count).slice(0,5),r=M(s,"month",f()),l=M(s,"year",f());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${r.length?r.slice(0,5).map((e,t)=>S(e,t,r[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((e,t)=>S(e,t,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u4E45\u3057\u3076\u308A\u5019\u88DC</div>
      <div class="bar-list">
        ${n.length?n.map((e,t)=>S(e,t,n[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A</div>
      <div class="bar-list">
        ${i.length?i.map((e,t)=>S(e,t,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u76F4\u8FD1\u306E\u6B4C\u67A0</div>
      ${d.map(e=>`
        <div class="activity-row">
          <span class="a-date">${L(e.date)}</span>
          <span class="a-title">${e.url?`<a href="${c(e.url)}" target="_blank" rel="noopener">${c(e.title||"\u914D\u4FE1")}</a>`:c(e.title)}</span>
          <span class="a-meta">${y("mic")} ${e.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function S(s,a,d){let n=Math.round(s.count/d*100);return`
    <div class="bar-row clickable" data-songkey="${c(s.key)}" data-songtitle="${c(s.title)}" data-songartist="${c(s.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${a+1}</div>
      <div class="bar-content">
        <div class="bar-label">${c(s.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${c(s.artist)}</span></div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${s.count}</div>
    </div>
  `}function A(s){if(!s)return`
      <div class="card dashboard-card dashboard-latest-card">
        <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
        <div class="empty-state">\u76F4\u8FD1\u306E\u6B4C\u67A0\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>
      </div>
    `;let a=s.url?k(s.url):"",d=(s.songs||[]).slice(0,15),n=5,i=(t,o)=>{let p=t.key?`<span class="latest-sl-title is-link" role="button" tabindex="0" data-songkey="${c(t.key)}">${c(t.title||"\u2014")}</span>`:`<span class="latest-sl-title">${c(t.title||"\u2014")}</span>`,v=t.artist?`<button class="latest-sl-artist" type="button" data-artist-search="${c(t.artist)}">${c(t.artist)}</button>`:"";return`<div class="latest-setlist-item"><strong class="latest-sl-num">${o+1}</strong><div class="latest-sl-info">${p}${v}</div></div>`},r=d.slice(0,n),l=d.slice(n),e=l.length?`<details class="latest-setlist-more">
         <summary>\u6B8B\u308A${l.length}\u66F2\u3092\u8868\u793A</summary>
         <div class="latest-setlist-rest">${l.map((t,o)=>i(t,o+n)).join("")}</div>
       </details>`:"";return`
    <div class="card dashboard-card dashboard-latest-card">
      <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
      <div class="latest-stream-log">
        <a class="latest-stream-thumb" href="${c(s.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
          ${a?`<img src="${c(a)}" alt="" width="1280" height="720" loading="eager" fetchpriority="high" decoding="async" referrerpolicy="no-referrer">`:""}
        </a>
        <div class="latest-stream-body">
          <h3>${c(s.title||"\u914D\u4FE1")}</h3>
          <p>${y("mic")} ${(s.songs||[]).length}\u66F2 \u30FB ${C(s.date)}\u65E5\u524D</p>
          <div class="latest-setlist">
            ${r.length?r.map(i).join("")+e:"<span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u672A\u767B\u9332</span>"}
          </div>
        </div>
      </div>
    </div>
  `}function I(s){let a=new Map;for(let t of s){let o=t.genre||t.genreText||"\u672A\u5206\u985E";!o||o==="\u672A\u5206\u985E"||a.set(o,(a.get(o)||0)+1)}let d=Array.from(a.entries()).sort((t,o)=>o[1]-t[1]),n=d.reduce((t,[,o])=>t+o,0);if(!d.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let i=s.length||0,r=Math.max(0,i-n),l=d[0],e=i?Math.round(l[1]/i*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${d.map(([t,o],p)=>`
          <span class="genre-meter-segment g${p%8}" style="width:${Math.max(3,o/n*100)}%" title="${c(t)}: ${o}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${d.slice(0,8).map(([t,o],p)=>`
          <div class="genre-row">
            <span class="genre-dot g${p%8}"></span>
            <span class="genre-name">${c(t)}</span>
            <strong>${o}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${n}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u672A\u5206\u985E</span>
          <strong>${r}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${d.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${c(l[0])}</span>
          <strong>${e}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function P(s){let a=s.filter(v=>v.inRange),d=a.filter(v=>v.value>0),n=a.reduce((v,h)=>v+h.value,0),i=Math.max(0,...a.map(v=>v.value)),r=a[0]?.date,l=a[a.length-1]?.date,e=r&&l?`${$(r)} - ${$(l)}`:"\u2014",t=[],o=new Map;for(let v of a){let h=`${v.date.getFullYear()}-${String(v.date.getMonth()+1).padStart(2,"0")}`;if(!o.has(h)){let b={key:h,date:v.date,cells:[]};o.set(h,b),t.push(b)}o.get(h).cells.push(v)}let p=t.map(v=>{let h=v.cells.reduce((u,Y)=>u+Y.value,0),b=v.cells.filter(u=>u.value>0).length,_=Math.max(0,...v.cells.map(u=>u.value)),w=[...v.cells];for(;w.length<31;)w.push(null);let T=w.map(u=>u?`
      <span class="heatmap-day ${D(u.value)}" title="${u.iso}: ${u.value}\u66F2">
        <span>${u.date.getDate()}</span>
      </span>
    `:'<span class="heatmap-day is-empty" aria-hidden="true"></span>').join("");return`
      <section class="heatmap-month-card" aria-label="${$(v.date)} ${h}\u66F2 ${b}\u65E5\u914D\u4FE1">
        <div class="heatmap-month-head">
          <span>${$(v.date).replace(/^\d{4}\//,"")}</span>
          <strong>${h}</strong>
        </div>
        <div class="heatmap-month-meta">
          <span>\u914D\u4FE1 ${b}\u65E5</span>
          <span>\u6700\u591A ${_}\u66F2/\u65E5</span>
        </div>
        <div class="heatmap-days" aria-hidden="true">${T}</div>
      </section>
    `}).join("");return`
    <div class="heatmap-summary">
      <div><span>\u8868\u793A\u671F\u9593</span><strong>${e}</strong></div>
      <div><span>\u914D\u4FE1\u65E5</span><strong>${d.length}\u65E5</strong></div>
      <div><span>\u6B4C\u5531\u66F2\u6570</span><strong>${n}\u66F2</strong></div>
      <div><span>\u6700\u591A</span><strong>${i}\u66F2/\u65E5</strong></div>
    </div>
    <div class="heatmap-month-grid">${p}</div>
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
  `}export{K as renderDashboard};
