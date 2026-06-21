import{d as g,e as u}from"./chunk-AW5KTZNU.js";import{E as y,F as S,J as w,P as v,a as h,c,p as f,q as k,r as T,s as x,t as H,u as L}from"./chunk-GPIKXWRQ.js";function V(){let{songs:a,streams:s}=u.data,n=[...a].sort((b,$)=>$.count-b.count).slice(0,5),i=n[0]?.count||1,d=s.slice(0,5),l=g(),e=x(a,l),t=h("#panel-dashboard"),o=L(s,l),p=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">${v("analytics")} \u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u6B4C\u67A0\u6570</span>
          <strong>${k(s,l)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${T(s,l)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u4ECA\u6708\u306E\u521D\u62AB\u9732\u66F2\u6570</span>
          <strong>${e}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${s[0]?`${y(s[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,j=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">${v("rank")} TOP 5 \u697D\u66F2 <span class="pill">ALL TIME</span></div>
      <div class="bar-list">
        ${n.length?n.map((b,$)=>m(b,$,i)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;t.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${p}
        ${R(s[0])}
        ${j}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">${v("chart")} GENRE DISTRIBUTION <span class="pill">\u697D\u66F2\u6570</span></div>
          ${N(a)}
        </div>
        <div class="card dashboard-card dashboard-schedule-card">
          <div class="card-title">${v("calendar")} \u66DC\u65E5\u30FB\u6642\u9593\u5E2F\u5206\u5E03 <span class="pill">SCHEDULE DENSITY</span></div>
          ${_(s)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">${v("calendar")} \u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7 <span class="pill">ACTIVITY HEATMAP</span></div>
          ${Y(o)}
        </div>
      </div>
      ${I()}
      ${E(s,a,d)}
    </div>
  `,A()}var D="sh1an-watch-history-v1";function M(){try{return JSON.parse(localStorage.getItem(D)||"[]")}catch{return[]}}function C(a){let s=Math.max(0,Math.floor(a)),r=Math.floor(s/3600),n=Math.floor(s%3600/60),i=s%60;return r>0?`${r}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`:`${n}:${String(i).padStart(2,"0")}`}function I(){let a=M().slice(0,6);return`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">${v("play")} \u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.length?a.map((s,r)=>{let n=w(s.url),i=Math.floor((Date.now()-(s.updatedAt||0))/864e5),d=i<=0?"\u4ECA\u65E5":`${i}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${r}" title="${c(s.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${c(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${c(s.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${v("time")} ${C(s.t)} \u304B\u3089 \u30FB ${d}</span>
          </button>`}).join(""):'<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function A(){let a=h("#dashboard-resume-list");a&&(a.onclick=n=>{let i=n.target.closest("[data-resume-idx]");if(!i)return;let d=M()[Number(i.dataset.resumeIdx)];if(!d?.url)return;let l=null;d.channel!=null&&d.index!=null&&(l=(u.channelData?.combined?.streams||u.data?.streams||[]).find(t=>t.channel===d.channel&&t.index===d.index)||null),window.__openStreamViewer?.(l||{url:d.url,title:d.title,isMv:!!d.isMv},d.t)});let s=h("#dashboard-resume-clear");s&&(s.onclick=()=>{try{localStorage.removeItem(D)}catch{}h("#panel-dashboard .dashboard-resume-card")?.remove()});let r=h("#dashboard-resume-queue");r&&(r.onclick=()=>{let n=M(),i=u.channelData?.combined?.streams||u.data?.streams||[],d=n.map((l,e)=>{let t=l.channel!=null&&l.index!=null?i.find(o=>o.channel===l.channel&&o.index===l.index):null;return t?.url?{kind:"stream",key:`${t.channel}:${t.index}`,stream:t}:l.url?{kind:"mv",key:`history:${e}`,video:{url:l.url,title:l.title||"\u52D5\u753B",isMv:!!l.isMv}}:null}).filter(Boolean);d.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:d,idx:0})})}function E(a,s,r){let n=s.filter(e=>e.daysSinceLast>=180).sort((e,t)=>t.count-e.count).slice(0,5),i=s.filter(e=>e.daysSinceLast!=null&&e.daysSinceLast<=30).sort((e,t)=>t.count-e.count).slice(0,5),d=f(a,"month",g()),l=f(a,"year",g());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">${v("rank")} \u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${d.length?d.slice(0,5).map((e,t)=>m(e,t,d[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">${v("rank")} \u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2 <span class="pill">\u8EFD\u91CF\u7248</span></div>
      <div class="bar-list">
        ${l.length?l.slice(0,5).map((e,t)=>m(e,t,l[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">${v("time")} \u4E45\u3057\u3076\u308A\u5019\u88DC <span class="pill">180\u65E5\u4EE5\u4E0A</span></div>
      <div class="bar-list">
        ${n.length?n.map((e,t)=>m(e,t,n[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">${v("sparkle")} \u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A <span class="pill">30\u65E5\u4EE5\u5185</span></div>
      <div class="bar-list">
        ${i.length?i.map((e,t)=>m(e,t,i[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">${v("video")} \u76F4\u8FD1\u306E\u6B4C\u67A0 <span class="pill">\u6700\u65B0${r.length}\u4EF6</span></div>
      ${r.map(e=>`
        <div class="activity-row">
          <span class="a-date">${S(e.date)}</span>
          <span class="a-title">${e.url?`<a href="${c(e.url)}" target="_blank" rel="noopener">${c(e.title||"\u914D\u4FE1")}</a>`:c(e.title)}</span>
          <span class="a-meta">${v("mic")} ${e.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function m(a,s,r){let n=Math.round(a.count/r*100);return`
    <div class="bar-row clickable" data-songkey="${c(a.key)}" data-songtitle="${c(a.title)}" data-songartist="${c(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${s+1}</div>
      <div class="bar-content">
        <div class="bar-label">${c(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${c(a.artist)}</span></div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function R(a){if(!a)return`
      <div class="card dashboard-card dashboard-latest-card">
        <div class="card-title">${v("video")} LATEST STREAM LOG</div>
        <div class="empty-state">\u76F4\u8FD1\u306E\u6B4C\u67A0\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>
      </div>
    `;let s=a.url?w(a.url):"",r=(a.songs||[]).slice(0,5);return`
    <div class="card dashboard-card dashboard-latest-card">
      <div class="card-title">
        ${v("video")} LATEST STREAM LOG
        <span class="pill">${S(a.date)}</span>
      </div>
      <div class="latest-stream-log">
        <a class="latest-stream-thumb" href="${c(a.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
          ${s?`<img src="${c(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
        </a>
        <div class="latest-stream-body">
          <h3>${c(a.title||"\u914D\u4FE1")}</h3>
          <p>${v("mic")} ${(a.songs||[]).length}\u66F2 \u30FB ${y(a.date)}\u65E5\u524D</p>
          <div class="latest-setlist">
            ${r.length?r.map((n,i)=>`
              <span><strong>${i+1}</strong>${c(n.title||"\u2014")}</span>
            `).join(""):"<span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u672A\u767B\u9332</span>"}
          </div>
        </div>
      </div>
    </div>
  `}function _(a){let s=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],r=[{key:"morning",label:"\u671D",from:5,to:11},{key:"day",label:"\u663C",from:11,to:17},{key:"night",label:"\u591C",from:17,to:23},{key:"late",label:"\u6DF1\u591C",from:23,to:29}],n=Array.from({length:s.length},()=>Array(r.length).fill(0));for(let d of a){let l=d.date instanceof Date?d.date:new Date(d.date);if(Number.isNaN(l.getTime()))continue;let e=l.getHours(),t=e<5?e+24:e,o=r.findIndex(p=>t>=p.from&&t<p.to);o>=0&&n[l.getDay()][o]++}let i=Math.max(1,...n.flat());return`
    <div class="schedule-density">
      <div class="schedule-head"></div>
      ${r.map(d=>`<div class="schedule-slot-label">${d.label}</div>`).join("")}
      ${s.map((d,l)=>`
        <div class="schedule-day-label">${d}</div>
        ${r.map((e,t)=>{let o=n[l][t],p=Math.ceil(o/i*4);return`<div class="schedule-cell l${o?p:0}" title="${d}\u66DC ${e.label}: ${o}\u67A0"><span>${o||""}</span></div>`}).join("")}
      `).join("")}
    </div>
  `}function N(a){let s=new Map;for(let t of a){let o=t.genre||t.genreText||"\u672A\u5206\u985E";!o||o==="\u672A\u5206\u985E"||s.set(o,(s.get(o)||0)+1)}let r=Array.from(s.entries()).sort((t,o)=>o[1]-t[1]),n=r.reduce((t,[,o])=>t+o,0);if(!r.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let i=a.length||0,d=Math.max(0,i-n),l=r[0],e=i?Math.round(l[1]/i*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${r.map(([t,o],p)=>`
          <span class="genre-meter-segment g${p%8}" style="width:${Math.max(3,o/n*100)}%" title="${c(t)}: ${o}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${r.slice(0,8).map(([t,o],p)=>`
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
          <strong>${d}<small>\u66F2</small></strong>
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
  `}function Y(a){let r=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map(i=>`<div>${i}</div>`).join(""),n=a.map(i=>i.inRange?`<div class="heatmap-cell ${H(i.value)}" title="${i.iso}: ${i.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("");return`
    <div class="heatmap-flex">
      <div class="heatmap-row-labels">${r}</div>
      <div class="heatmap-wrap"><div class="heatmap">${n}</div></div>
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
  `}export{V as renderDashboard};
