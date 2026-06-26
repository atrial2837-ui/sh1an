import{d as f,e as p}from"./chunk-AW5KTZNU.js";import{B as L,C,D as $,G as k,M as y,a as g,c as v,p as M,q as D,r as H}from"./chunk-3BNHFXWM.js";function O(){let{songs:a,streams:t}=p.data,r=t.slice(0,5),n=f(),d=g("#panel-dashboard"),i=H(t,n);d.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${P(t[0])}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">\u30B8\u30E3\u30F3\u30EB\u5206\u5E03</div>
          ${A(a)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">\u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7</div>
          ${I(i)}
        </div>
      </div>
      ${B()}
      ${N(t,a,r)}
    </div>
  `,F()}var j="sh1an-watch-history-v1";function x(){try{return JSON.parse(localStorage.getItem(j)||"[]")}catch{return[]}}function R(a){let t=Math.max(0,Math.floor(a)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),d=t%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(d).padStart(2,"0")}`:`${n}:${String(d).padStart(2,"0")}`}function B(){let a=x().slice(0,6);return`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">\u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.length?a.map((t,r)=>{let n=k(t.url),d=Math.floor((Date.now()-(t.updatedAt||0))/864e5),i=d<=0?"\u4ECA\u65E5":`${d}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${r}" title="${v(t.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${v(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${v(t.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${y("time")} ${R(t.t)} \u304B\u3089 \u30FB ${i}</span>
          </button>`}).join(""):'<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function F(){let a=g("#dashboard-resume-list");a&&(a.onclick=n=>{let d=n.target.closest("[data-resume-idx]");if(!d)return;let i=x()[Number(d.dataset.resumeIdx)];if(!i?.url)return;let o=null;i.channel!=null&&i.index!=null&&(o=(p.channelData?.combined?.streams||p.data?.streams||[]).find(s=>s.channel===i.channel&&s.index===i.index)||null),window.__openStreamViewer?.(o||{url:i.url,title:i.title,isMv:!!i.isMv},i.t)});let t=g("#dashboard-resume-clear");t&&(t.onclick=()=>{try{localStorage.removeItem(j)}catch{}let n=g("#dashboard-resume-list");n&&(n.innerHTML='<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>')});let r=g("#dashboard-resume-queue");r&&(r.onclick=()=>{let n=x(),d=p.channelData?.combined?.streams||p.data?.streams||[],i=n.map((o,e)=>{let s=o.channel!=null&&o.index!=null?d.find(l=>l.channel===o.channel&&l.index===o.index):null;return s?.url?{kind:"stream",key:`${s.channel}:${s.index}`,stream:s}:o.url?{kind:"mv",key:`history:${e}`,video:{url:o.url,title:o.title||"\u52D5\u753B",isMv:!!o.isMv}}:null}).filter(Boolean);i.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:i,idx:0})})}function N(a,t,r){let n=t.filter(e=>e.daysSinceLast>=180).sort((e,s)=>s.count-e.count).slice(0,5),d=t.filter(e=>e.daysSinceLast!=null&&e.daysSinceLast<=30).sort((e,s)=>s.count-e.count).slice(0,5),i=M(a,"month",f()),o=M(a,"year",f());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${i.length?i.slice(0,5).map((e,s)=>S(e,s,i[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${o.length?o.slice(0,5).map((e,s)=>S(e,s,o[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u4E45\u3057\u3076\u308A\u5019\u88DC</div>
      <div class="bar-list">
        ${n.length?n.map((e,s)=>S(e,s,n[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A</div>
      <div class="bar-list">
        ${d.length?d.map((e,s)=>S(e,s,d[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u76F4\u8FD1\u306E\u6B4C\u67A0</div>
      ${r.map(e=>`
        <div class="activity-row">
          <span class="a-date">${C(e.date)}</span>
          <span class="a-title">${e.url?`<a href="${v(e.url)}" target="_blank" rel="noopener">${v(e.title||"\u914D\u4FE1")}</a>`:v(e.title)}</span>
          <span class="a-meta">${y("mic")} ${e.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function S(a,t,r){let n=Math.round(a.count/r*100);return`
    <div class="bar-row clickable" data-songkey="${v(a.key)}" data-songtitle="${v(a.title)}" data-songartist="${v(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${t+1}</div>
      <div class="bar-content">
        <div class="bar-label">${v(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${v(a.artist)}</span></div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function P(a){if(!a)return`
      <div class="card dashboard-card dashboard-latest-card">
        <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
        <div class="empty-state">\u76F4\u8FD1\u306E\u6B4C\u67A0\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>
      </div>
    `;let t=a.url?k(a.url):"",r=(a.songs||[]).slice(0,15);return`
    <div class="card dashboard-card dashboard-latest-card">
      <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
      <div class="latest-stream-log">
        <a class="latest-stream-thumb" href="${v(a.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
          ${t?`<img src="${v(t)}" alt="" width="1280" height="720" loading="eager" fetchpriority="high" decoding="async" referrerpolicy="no-referrer">`:""}
        </a>
        <div class="latest-stream-body">
          <h3>${v(a.title||"\u914D\u4FE1")}</h3>
          <p>${y("mic")} ${(a.songs||[]).length}\u66F2 \u30FB ${L(a.date)}\u65E5\u524D</p>
          <div class="latest-setlist">
            ${r.length?r.map((n,d)=>`
              <span><strong>${d+1}</strong>${v(n.title||"\u2014")}</span>
            `).join(""):"<span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u672A\u767B\u9332</span>"}
          </div>
        </div>
      </div>
    </div>
  `}function A(a){let t=new Map;for(let s of a){let l=s.genre||s.genreText||"\u672A\u5206\u985E";!l||l==="\u672A\u5206\u985E"||t.set(l,(t.get(l)||0)+1)}let r=Array.from(t.entries()).sort((s,l)=>l[1]-s[1]),n=r.reduce((s,[,l])=>s+l,0);if(!r.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let d=a.length||0,i=Math.max(0,d-n),o=r[0],e=d?Math.round(o[1]/d*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${r.map(([s,l],m)=>`
          <span class="genre-meter-segment g${m%8}" style="width:${Math.max(3,l/n*100)}%" title="${v(s)}: ${l}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${r.slice(0,8).map(([s,l],m)=>`
          <div class="genre-row">
            <span class="genre-dot g${m%8}"></span>
            <span class="genre-name">${v(s)}</span>
            <strong>${l}</strong>
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
          <strong>${i}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${r.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${v(o[0])}</span>
          <strong>${e}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function I(a){let t=a.filter(c=>c.inRange),r=t.filter(c=>c.value>0),n=t.reduce((c,h)=>c+h.value,0),d=Math.max(0,...t.map(c=>c.value)),i=t[0]?.date,o=t[t.length-1]?.date,e=i&&o?`${$(i)} - ${$(o)}`:"\u2014",s=[],l=new Map;for(let c of t){let h=`${c.date.getFullYear()}-${String(c.date.getMonth()+1).padStart(2,"0")}`;if(!l.has(h)){let b={key:h,date:c.date,cells:[]};l.set(h,b),s.push(b)}l.get(h).cells.push(c)}let m=s.map(c=>{let h=c.cells.reduce((u,Y)=>u+Y.value,0),b=c.cells.filter(u=>u.value>0).length,_=Math.max(0,...c.cells.map(u=>u.value)),w=[...c.cells];for(;w.length<31;)w.push(null);let T=w.map(u=>u?`
      <span class="heatmap-day ${D(u.value)}" title="${u.iso}: ${u.value}\u66F2">
        <span>${u.date.getDate()}</span>
      </span>
    `:'<span class="heatmap-day is-empty" aria-hidden="true"></span>').join("");return`
      <section class="heatmap-month-card" aria-label="${$(c.date)} ${h}\u66F2 ${b}\u65E5\u914D\u4FE1">
        <div class="heatmap-month-head">
          <span>${$(c.date).replace(/^\d{4}\//,"")}</span>
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
      <div><span>\u914D\u4FE1\u65E5</span><strong>${r.length}\u65E5</strong></div>
      <div><span>\u6B4C\u5531\u66F2\u6570</span><strong>${n}\u66F2</strong></div>
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
