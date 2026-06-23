import{d as m,e as u}from"./chunk-AW5KTZNU.js";import{E as y,F as D,J as w,P as g,a as h,c as l,p as f,q as M,r as k,s as x,t as H,u as j}from"./chunk-4S6OL3GJ.js";function K(){let{songs:a,streams:s}=u.data,n=[...a].sort((b,$)=>$.count-b.count).slice(0,5),d=n[0]?.count||1,c=s.slice(0,5),r=m(),e=x(a,r),t=h("#panel-dashboard"),i=j(s,r),v=`
    <div class="card dashboard-card dashboard-activity-card">
      <div class="card-title">\u4ECA\u6708\u306E\u6D3B\u52D5</div>
      <div class="dashboard-metric-list">
        <div class="activity-row">
          <span class="a-date">\u914D\u4FE1</span>
          <span class="a-meta">\u6B4C\u67A0\u6570</span>
          <strong>${M(s,r)}\u56DE</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6B4C\u5531</span>
          <span class="a-meta">\u7DCF\u6B4C\u5531\u6570</span>
          <strong>${k(s,r)}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u65B0\u66F2</span>
          <span class="a-meta">\u521D\u62AB\u9732</span>
          <strong>${e}\u66F2</strong>
        </div>
        <div class="activity-row">
          <span class="a-date">\u6700\u7D42</span>
          <span class="a-meta">\u6700\u65B0\u6B4C\u67A0\u304B\u3089</span>
          <strong>${s[0]?`${y(s[0].date)}\u65E5\u524D`:"\u2014"}</strong>
        </div>
      </div>
    </div>
  `,T=`
    <div class="card dashboard-card dashboard-top-card">
      <div class="card-title">TOP 5 \u697D\u66F2</div>
      <div class="bar-list">
        ${n.length?n.map((b,$)=>p(b,$,d)).join(""):'<div class="empty-state">\u66F2\u30C7\u30FC\u30BF\u306A\u3057</div>'}
      </div>
    </div>
  `;t.innerHTML=`
    <div class="dashboard-grid" id="dashboard-grid">
      <div class="dashboard-overview-grid">
        ${v}
        ${N(s[0])}
        ${T}
        <div class="card dashboard-card dashboard-genre-card">
          <div class="card-title">\u30B8\u30E3\u30F3\u30EB\u5206\u5E03</div>
          ${P(a)}
        </div>
        <div class="card dashboard-card dashboard-schedule-card">
          <div class="card-title">\u66DC\u65E5\u5206\u5E03</div>
          ${B(s)}
        </div>
        <div class="card dashboard-card dashboard-heatmap-card">
          <div class="card-title">\u914D\u4FE1\u30D2\u30FC\u30C8\u30DE\u30C3\u30D7</div>
          ${F(i)}
        </div>
      </div>
      ${_()}
      ${Y(s,a,c)}
    </div>
  `,R()}var L="sh1an-watch-history-v1";function S(){try{return JSON.parse(localStorage.getItem(L)||"[]")}catch{return[]}}function C(a){let s=Math.max(0,Math.floor(a)),o=Math.floor(s/3600),n=Math.floor(s%3600/60),d=s%60;return o>0?`${o}:${String(n).padStart(2,"0")}:${String(d).padStart(2,"0")}`:`${n}:${String(d).padStart(2,"0")}`}function _(){let a=S().slice(0,6);return`
    <div class="card dashboard-card dashboard-resume-card">
      <div class="card-title">\u7D9A\u304D\u304B\u3089\u898B\u308B
        <span class="dashboard-resume-actions">
          <button class="dashboard-resume-clear dashboard-resume-queue" id="dashboard-resume-queue" type="button" title="\u5C65\u6B74\u3092\u30AD\u30E5\u30FC\u3068\u3057\u3066\u518D\u751F">\u30AD\u30E5\u30FC\u518D\u751F</button>
          <button class="dashboard-resume-clear" id="dashboard-resume-clear" type="button" title="\u5C65\u6B74\u3092\u6D88\u53BB">\u6D88\u53BB</button>
        </span>
      </div>
      <div class="dashboard-resume-list" id="dashboard-resume-list">
        ${a.length?a.map((s,o)=>{let n=w(s.url),d=Math.floor((Date.now()-(s.updatedAt||0))/864e5),c=d<=0?"\u4ECA\u65E5":`${d}\u65E5\u524D`;return`
          <button class="dashboard-resume-item" type="button" data-resume-idx="${o}" title="${l(s.title||"")}">
            ${n?`<img class="dashboard-resume-thumb" src="${l(n)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="dashboard-resume-thumb"></div>'}
            <span class="dashboard-resume-title">${l(s.title||"\u52D5\u753B")}</span>
            <span class="dashboard-resume-meta">${g("time")} ${C(s.t)} \u304B\u3089 \u30FB ${c}</span>
          </button>`}).join(""):'<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}
      </div>
    </div>`}function R(){let a=h("#dashboard-resume-list");a&&(a.onclick=n=>{let d=n.target.closest("[data-resume-idx]");if(!d)return;let c=S()[Number(d.dataset.resumeIdx)];if(!c?.url)return;let r=null;c.channel!=null&&c.index!=null&&(r=(u.channelData?.combined?.streams||u.data?.streams||[]).find(t=>t.channel===c.channel&&t.index===c.index)||null),window.__openStreamViewer?.(r||{url:c.url,title:c.title,isMv:!!c.isMv},c.t)});let s=h("#dashboard-resume-clear");s&&(s.onclick=()=>{try{localStorage.removeItem(L)}catch{}let n=h("#dashboard-resume-list");n&&(n.innerHTML='<div class="empty-state">\u518D\u751F\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>')});let o=h("#dashboard-resume-queue");o&&(o.onclick=()=>{let n=S(),d=u.channelData?.combined?.streams||u.data?.streams||[],c=n.map((r,e)=>{let t=r.channel!=null&&r.index!=null?d.find(i=>i.channel===r.channel&&i.index===r.index):null;return t?.url?{kind:"stream",key:`${t.channel}:${t.index}`,stream:t}:r.url?{kind:"mv",key:`history:${e}`,video:{url:r.url,title:r.title||"\u52D5\u753B",isMv:!!r.isMv}}:null}).filter(Boolean);c.length&&window.__playMyListInViewer?.({name:"\u8996\u8074\u5C65\u6B74",items:c,idx:0})})}function Y(a,s,o){let n=s.filter(e=>e.daysSinceLast>=180).sort((e,t)=>t.count-e.count).slice(0,5),d=s.filter(e=>e.daysSinceLast!=null&&e.daysSinceLast<=30).sort((e,t)=>t.count-e.count).slice(0,5),c=f(a,"month",m()),r=f(a,"year",m());return`
    <div class="card dashboard-card dashboard-list-card dashboard-list-month">
      <div class="card-title">\u4ECA\u6708\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${c.length?c.slice(0,5).map((e,t)=>p(e,t,c[0].count)).join(""):'<div class="empty-state">\u4ECA\u6708\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-year">
      <div class="card-title">\u4ECA\u5E74\u306E\u3088\u304F\u6B4C\u308F\u308C\u305F\u66F2</div>
      <div class="bar-list">
        ${r.length?r.slice(0,5).map((e,t)=>p(e,t,r[0].count)).join(""):'<div class="empty-state">\u4ECA\u5E74\u306E\u6B4C\u5531\u5C65\u6B74\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-stale">
      <div class="card-title">\u4E45\u3057\u3076\u308A\u5019\u88DC</div>
      <div class="bar-list">
        ${n.length?n.map((e,t)=>p(e,t,n[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-list-card dashboard-list-recent">
      <div class="card-title">\u6700\u8FD1\u6B4C\u3063\u305F\u5B9A\u756A</div>
      <div class="bar-list">
        ${d.length?d.map((e,t)=>p(e,t,d[0].count)).join(""):'<div class="empty-state">\u5019\u88DC\u306A\u3057</div>'}
      </div>
    </div>

    <div class="card dashboard-card dashboard-recent-card">
      <div class="card-title">\u76F4\u8FD1\u306E\u6B4C\u67A0</div>
      ${o.map(e=>`
        <div class="activity-row">
          <span class="a-date">${D(e.date)}</span>
          <span class="a-title">${e.url?`<a href="${l(e.url)}" target="_blank" rel="noopener">${l(e.title||"\u914D\u4FE1")}</a>`:l(e.title)}</span>
          <span class="a-meta">${g("mic")} ${e.songs.length}\u66F2</span>
        </div>
      `).join("")}
    </div>
  `}function p(a,s,o){let n=Math.round(a.count/o*100);return`
    <div class="bar-row clickable" data-songkey="${l(a.key)}" data-songtitle="${l(a.title)}" data-songartist="${l(a.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="bar-rank">${s+1}</div>
      <div class="bar-content">
        <div class="bar-label">${l(a.title)} <span style="color:var(--ink-mute);font-size:11px;">/ ${l(a.artist)}</span></div>
        <div class="bar-bar" style="width:${n}%;"></div>
      </div>
      <div class="bar-value">${a.count}</div>
    </div>
  `}function N(a){if(!a)return`
      <div class="card dashboard-card dashboard-latest-card">
        <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
        <div class="empty-state">\u76F4\u8FD1\u306E\u6B4C\u67A0\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>
      </div>
    `;let s=a.url?w(a.url):"",o=(a.songs||[]).slice(0,5);return`
    <div class="card dashboard-card dashboard-latest-card">
      <div class="card-title">\u6700\u65B0\u306E\u6B4C\u67A0</div>
      <div class="latest-stream-log">
        <a class="latest-stream-thumb" href="${l(a.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
          ${s?`<img src="${l(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
        </a>
        <div class="latest-stream-body">
          <h3>${l(a.title||"\u914D\u4FE1")}</h3>
          <p>${g("mic")} ${(a.songs||[]).length}\u66F2 \u30FB ${y(a.date)}\u65E5\u524D</p>
          <div class="latest-setlist">
            ${o.length?o.map((n,d)=>`
              <span><strong>${d+1}</strong>${l(n.title||"\u2014")}</span>
            `).join(""):"<span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u672A\u767B\u9332</span>"}
          </div>
        </div>
      </div>
    </div>
  `}function B(a){let s=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"],o=Array(7).fill(0);for(let d of a){let c=d.date instanceof Date?d.date:new Date(d.date);Number.isNaN(c.getTime())||o[c.getDay()]++}let n=Math.max(1,...o);return`
    <div class="dow-dist">
      ${s.map((d,c)=>{let r=o[c],e=Math.round(r/n*100);return`
        <div class="dow-row" title="${d}\u66DC: ${r}\u67A0">
          <span class="dow-label">${d}</span>
          <div class="dow-bar-track"><div class="dow-bar" style="width:${e}%"></div></div>
          <span class="dow-value">${r}</span>
        </div>`}).join("")}
    </div>
  `}function P(a){let s=new Map;for(let t of a){let i=t.genre||t.genreText||"\u672A\u5206\u985E";!i||i==="\u672A\u5206\u985E"||s.set(i,(s.get(i)||0)+1)}let o=Array.from(s.entries()).sort((t,i)=>i[1]-t[1]),n=o.reduce((t,[,i])=>t+i,0);if(!o.length)return'<div class="empty-state">\u30B8\u30E3\u30F3\u30EB\u30C7\u30FC\u30BF\u306A\u3057</div>';let d=a.length||0,c=Math.max(0,d-n),r=o[0],e=d?Math.round(r[1]/d*100):0;return`
    <div class="genre-meter" aria-label="\u30B8\u30E3\u30F3\u30EB\u5206\u5E03">
      <div class="genre-meter-track">
        ${o.map(([t,i],v)=>`
          <span class="genre-meter-segment g${v%8}" style="width:${Math.max(3,i/n*100)}%" title="${l(t)}: ${i}\u66F2"></span>
        `).join("")}
      </div>
      <div class="genre-breakdown">
        ${o.slice(0,8).map(([t,i],v)=>`
          <div class="genre-row">
            <span class="genre-dot g${v%8}"></span>
            <span class="genre-name">${l(t)}</span>
            <strong>${i}</strong>
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
          <strong>${c}<small>\u66F2</small></strong>
        </div>
        <div class="genre-insight">
          <span>\u30B8\u30E3\u30F3\u30EB\u6570</span>
          <strong>${o.length}<small>\u7A2E</small></strong>
        </div>
        <div class="genre-insight">
          <span>${l(r[0])}</span>
          <strong>${e}<small>%</small></strong>
        </div>
      </div>
    </div>
  `}function F(a){let s=[];for(let t=0;t<a.length;t+=7)s.push(a.slice(t,t+7));let o=t=>(t.find(i=>i.inRange)||t[0]).date,n=-1,d=s.map(t=>{let i=o(t).getMonth(),v=i!==n?`${i+1}\u6708`:"";return n=i,`<div class="hm-month">${v}</div>`}).join(""),r=["\u65E5","\u6708","\u706B","\u6C34","\u6728","\u91D1","\u571F"].map((t,i)=>`<div class="hm-day${i%2?" is-dim":""}">${t}</div>`).join(""),e=s.map(t=>`
    <div class="hm-week">
      ${t.map(i=>i.inRange?`<div class="heatmap-cell ${H(i.value)}" title="${i.iso}: ${i.value}\u66F2"></div>`:'<div class="heatmap-cell" style="visibility:hidden"></div>').join("")}
    </div>`).join("");return`
    <div class="heatmap-cal">
      <div class="hm-corner"></div>
      <div class="hm-months">${d}</div>
      <div class="hm-days">${r}</div>
      <div class="hm-weeks">${e}</div>
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
  `}export{K as renderDashboard};
