import{d as m,e as u}from"./chunk-AW5KTZNU.js";import{B as S,C as M,G as $,M as p,a as h,c,p as b,q as y,r as w}from"./chunk-3BNHFXWM.js";function I(){let{songs:t,streams:a}=u.data,r=a.slice(0,5),i=m(),d=h("#panel-dashboard"),o=w(a,i);d.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${C(a[0])}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">\u30B8\u30E3\u30F3\u30EB\u5206\u5E03</div>
          ${_(t)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">\u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7</div>
          ${T(o)}
        </div>
      </div>
      ${L()}
      ${D(a,t,r)}
    </div>
  `,j()}var k="sh1an-watch-history-v1";function f(){try{return JSON.parse(localStorage.getItem(k)||"[]")}catch{return[]}}function H(t){let a=Math.max(0,Math.floor(t)),r=Math.floor(a/3600),i=Math.floor(a%3600/60),d=a%60;return r>0?`${r}:${String(i).padStart(2,"0")}:${String(d).padStart(2,"0")}`:`${i}:${String(d).padStart(2,"0")}`}function L(){let t=f().slice(0,6);return`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">\u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${t.length?t.map((a,r)=>{let i=$(a.url),d=Math.floor((Date.now()-(a.updatedAt||0))/864e5),o=d<=0?"\u4ECA\u65E5":`${d}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${r}" title="${c(a.title||"")}">
            ${i?`<img class="dashboard-resume-thumb" src="${c(i)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${c(a.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${p("time")} ${H(a.t)} \u304B\u3089 \u30FB ${o}</span>
          </button>`}).join(""):'<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function j(){let t=h("#dashboard-resume-list");t&&(t.onclick=i=>{let d=i.target.closest("[data-resume-idx]");if(!d)return;let o=f()[Number(d.dataset.resumeIdx)];if(!o?.url)return;let l=null;o.channel!=null&&o.index!=null&&(l=(u.channelData?.combined?.streams||u.data?.streams||[]).find(s=>s.channel===o.channel&&s.index===o.index)||null),window.__openStreamViewer?.(l||{url:o.url,title:o.title,isMv:!!o.isMv},o.t)});let a=h("#dashboard-resume-clear");a&&(a.onclick=()=>{try{localStorage.removeItem(k)}catch{}let i=h("#dashboard-resume-list");i&&(i.innerHTML='<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>')});let r=h("#dashboard-resume-queue");r&&(r.onclick=()=>{let i=f(),d=u.channelData?.combined?.streams||u.data?.streams||[],o=i.map((l,e)=>{let s=l.channel!=null&&l.index!=null?d.find(n=>n.channel===l.channel&&n.index===l.index):null;return s?.url?{kind:"stream",key:`${s.channel}:${s.index}`,stream:s}:l.url?{kind:"mv",key:`history:${e}`,video:{url:l.url,title:l.title||"\u52D5\u753B",isMv:!!l.isMv}}:null}).filter(Boolean);o.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:o,idx:0})})}function D(t,a,r){let i=a.filter(e=>e.daysSinceLast>=180).sort((e,s)=>s.count-e.count).slice(0,5),d=a.filter(e=>e.daysSinceLast!=null&&e.daysSinceLast<=30).sort((e,s)=>s.count-e.count).slice(0,5),o=b(t,"month",m()),l=b(t,"year",m());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${o.length?o.slice(0,5).map((e,s)=>g(e,s,o[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((e,s)=>g(e,s,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u4E45\u3057\u3076\u308A\u5019\u88DC</div>
      <div class="bar-list">
        ${i.length?i.map((e,s)=>g(e,s,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A</div>
      <div class="bar-list">
        ${d.length?d.map((e,s)=>g(e,s,d[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u76F4\u8FD1\u306E\u6B4C\u67A0</div>
      ${r.map(e=>`
        <div class="activity-row">
          <span class="a-date">${M(e.date)}</span>
          <span class="a-title">${e.url?`<a href="${c(e.url)}" target="_blank" rel="noopener">${c(e.title||"\u914D\u4FE1")}</a>`:c(e.title)}</span>
          <span class="a-meta">${p("mic")} ${e.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function g(t,a,r){let i=Math.round(t.count/r*100);return`
    <div class="bar-row clickable" data-songkey="${c(t.key)}" data-songtitle="${c(t.title)}" data-songartist="${c(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${a+1}</div>
      <div class="bar-content">
        <div class="bar-label">${c(t.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${c(t.artist)}</span></div>
        <div class="bar-bar" style="width:${i}%;"></div>
      </div>
      <div class="bar-value">${t.count}</div>
    </div>
  `}function C(t){if(!t)return`
      <div class="card dashboard-card dashboard-latest-card">
        <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
        <div class="empty-state">\u76F4\u8FD1\u306E\u6B4C\u67A0\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>
      </div>
    `;let a=t.url?$(t.url):"",r=(t.songs||[]).slice(0,5);return`
    <div class="card dashboard-card dashboard-latest-card">
      <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
      <div class="latest-stream-log">
        <a class="latest-stream-thumb" href="${c(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
          ${a?`<img src="${c(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
        </a>
        <div class="latest-stream-body">
          <h3>${c(t.title||"\u914D\u4FE1")}</h3>
          <p>${p("mic")} ${(t.songs||[]).length}\u66F2 \u30FB ${S(t.date)}\u65E5\u524D</p>
          <div class="latest-setlist">
            ${r.length?r.map((i,d)=>`
              <span><strong>${d+1}</strong>${c(i.title||"\u2014")}</span>
            `).join(""):"<span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u672A\u767B\u9332</span>"}
          </div>
        </div>
      </div>
    </div>
  `}function _(t){let a=new Map;for(let s of t){let n=s.genre||s.genreText||"\u672A\u5206\u985E";!n||n==="\u672A\u5206\u985E"||a.set(n,(a.get(n)||0)+1)}let r=Array.from(a.entries()).sort((s,n)=>n[1]-s[1]),i=r.reduce((s,[,n])=>s+n,0);if(!r.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let d=t.length||0,o=Math.max(0,d-i),l=r[0],e=d?Math.round(l[1]/d*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${r.map(([s,n],v)=>`
          <span class="genre-meter-segment g${v%8}" style="width:${Math.max(3,n/i*100)}%" title="${c(s)}: ${n}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${r.slice(0,8).map(([s,n],v)=>`
          <div class="genre-row">
            <span class="genre-dot g${v%8}"></span>
            <span class="genre-name">${c(s)}</span>
            <strong>${n}</strong>
          </div>
        `).join("")}
      </div>
      <div class="genre-insights" aria-label="\u30B8\u30E3\u30F3\u30EB\u96C6\u8A08">
        <div class="genre-insight">
          <span>\u5206\u985E\u6E08\u307F</span>
          <strong>${i}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u672A\u5206\u985E</span>
          <strong>${o}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${r.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${c(l[0])}</span>
          <strong>${e}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function T(t){let a=[];for(let n=0;n<t.length;n+=7)a.push(t.slice(n,n+7));let r=n=>(n.find(v=>v.inRange)||n[0]).date,i=-1,d=a.map(n=>{let v=r(n).getMonth(),x=v!==i?`${v+1}\u6708`:"";return i=v,`<div class="hm-month">${x}</div>`}).join(""),o=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],l=new Set([1,3,5]),e=o.map((n,v)=>`<div class="hm-day${l.has(v)?"":" is-dim"}">${l.has(v)?n:""}</div>`).join(""),s=a.map(n=>`
    <div class="hm-week">
      ${n.map(v=>v.inRange?`<div class="heatmap-cell ${y(v.value)}" title="${v.iso}: ${v.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("")}
    </div>`).join("");return`
    <div class="heatmap-cal">
      <div class="hm-corner"></div>
      <div class="hm-months">${d}</div>
      <div class="hm-days">${e}</div>
      <div class="hm-weeks">${s}</div>
    </div>
    <div class="heatmap-legend">
      \u5C11\u306A\u3081
      <div class="scale">
        <div class="heatmap-cell"></div>
        <div class="heatmap-cell l1"></div>
        <div class="heatmap-cell l2"></div>
        <div class="heatmap-cell l3"></div>
        <div class="heatmap-cell l4"></div>
      </div>
      \u591A\u3081
    </div>
  `}export{I as renderDashboard};
