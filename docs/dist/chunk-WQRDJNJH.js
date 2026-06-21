import{d as b}from"./chunk-RKZOC53G.js";import{e as c}from"./chunk-AW5KTZNU.js";import{F as S,P as D,a as y,c as p,g as w}from"./chunk-GPIKXWRQ.js";function v(){let{songs:t,streams:l=[]}=c.data,a=c.rankingPeriod||"all",r=y("#panel-ranking");if(!r)return;let e=a==="all"?null:T(l,a),o=e?E(t,e):[...t].sort((s,i)=>i.count-s.count||s.title.localeCompare(i.title,"ja")),n=c.rankingLimit,d=o.slice(0,n),u=!!c.channelData?.fullLoaded;r.innerHTML=`
    <div class="section-header">
      <h2>${D("rank")} Ranking Board</h2>
      <span class="count-pill">${t.length}\u66F2\u4E2D</span>
    </div>
    <div class="ranking-toolbar">
      ${C(l,a,u)}
      ${L(o,e)}
    </div>
    ${e?N(e):""}
    ${e?.counts.size===0?`
      <div class="empty-state">\u3053\u306E\u671F\u9593\u306B\u6B4C\u5531\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093</div>
    `:""}
    ${e?.counts.size!==0||!e?`
      <div class="ranking-table-head${e?" has-delta":""}">
        <span>RANK</span>
        <span>SONG DETAILS</span>
        <span>ARTIST</span>
        <span>${e?"COUNT / CHANGE":"COUNT"}</span>
        <span>${e?"TAGS":"HISTORY"}</span>
      </div>
      <div class="song-list ranking-list${e?" has-delta":""}">
        ${d.map((s,i)=>A(s,i+1,e)).join("")}
      </div>
      ${n<o.length?`
        <div class="timeline-controls">
          <button class="load-more-btn" id="rank-more">MORE (${o.length-n})</button>
        </div>`:""}
    `:""}
  `,r.addEventListener("click",s=>{let i=s.target.closest("[data-ranking-period]");if(!i)return;let g=i.dataset.rankingPeriod;g!==a&&(c.rankingPeriod=g,c.rankingLimit=b,v())});let m=document.getElementById("ranking-month-select");m&&m.addEventListener("change",s=>{s.target.value&&(c.rankingMonth=s.target.value,c.rankingPeriod="month-select",c.rankingLimit=b,v())});let k=document.getElementById("ranking-compare-select");k&&k.addEventListener("change",s=>{c.rankingCompareMonth=s.target.value,v()});let h=document.getElementById("ranking-swap-compare");h&&h.addEventListener("click",()=>{let s=c.rankingMonth||"",i=c.rankingCompareMonth||"";!s||!i||(c.rankingMonth=i,c.rankingCompareMonth=s,c.rankingPeriod="month-select",c.rankingLimit=b,v())});let f=document.getElementById("rank-more");f&&f.addEventListener("click",()=>{c.rankingLimit+=50,v()})}function C(t,l,a){let r=[{key:"all",label:"ALL TIME"},{key:"month",label:"THIS MONTH"},{key:"prev-month",label:"LAST MONTH"},{key:"week",label:"7 DAYS"}],e=I(t),o=c.rankingMonth||"";return`
    <div class="ranking-period-selector">
      ${r.map(n=>`
        <button
          class="period-btn${l===n.key?" active":""}"
          type="button"
          data-ranking-period="${n.key}"
          ${!a&&n.key!=="all"?'disabled title="\u914D\u4FE1\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D"':""}
        >${n.key==="all"||a?n.label:n.label+" ..."}</button>
      `).join("")}
      ${e.length&&a?`
        <select id="ranking-month-select" class="select-input period-month-select" title="\u6708\u3092\u6307\u5B9A">
          <option value="">SELECT MONTH</option>
          ${e.map(n=>{let[d,u]=n.split("-"),m=`${d}\u5E74${Number(u)}\u6708`;return`<option value="${n}"${l==="month-select"&&o===n?" selected":""}>${m}</option>`}).join("")}
        </select>
      `:""}
      ${l!=="all"&&e.length&&a?`
        <select id="ranking-compare-select" class="select-input period-month-select" title="\u5897\u6E1B\uFF08\u2191\u2193\uFF09\u306E\u6BD4\u8F03\u5148\u3092\u9078\u3076">
          <option value="">COMPARE: AUTO</option>
          ${e.map(n=>{let[d,u]=n.split("-"),m=`\u6BD4\u8F03: ${d}\u5E74${Number(u)}\u6708`;return`<option value="${n}"${(c.rankingCompareMonth||"")===n?" selected":""}>${m}</option>`}).join("")}
        </select>
        ${l==="month-select"&&o&&c.rankingCompareMonth?`
          <button id="ranking-swap-compare" class="period-btn ranking-swap-btn" type="button" title="\u8868\u793A\u6708\u3068\u6BD4\u8F03\u6708\u3092\u5165\u308C\u66FF\u3048\u308B">SWAP</button>
        `:""}
      `:""}
    </div>
  `}function L(t,l){let a=t[0],r=t.reduce((o,n)=>o+(l?n.periodCount||0:n.count||0),0),e=a?l?a.periodCount:a.count:0;return`
    <div class="ranking-summary">
      <div class="ranking-summary-item">
        <span>ENTRIES</span>
        <strong>${t.length}</strong>
      </div>
      <div class="ranking-summary-item">
        <span>TOTAL SINGS</span>
        <strong>${r}</strong>
      </div>
      <div class="ranking-summary-item ranking-summary-leader">
        <span>TOP SONG</span>
        <strong>${a?p(a.title):"-"}</strong>
        <small>${e}\u56DE</small>
      </div>
    </div>
  `}function N(t){let{label:l,prevLabel:a,counts:r,totalSongs:e}=t;return`
    <div class="ranking-period-header">
      <span class="ranking-period-label">${p(l)}</span>
      <span class="ranking-period-meta">${r.size}\u66F2\u30FB\u5408\u8A08${e}\u56DE\u6B4C\u5531
        ${a?`<span class="ranking-prev-label">\uFF08\u524D\uFF1A${p(a)}\u6BD4\uFF09</span>`:""}
      </span>
    </div>
  `}function T(t,l){let a=new Date,r,e,o,n,d,u;if(l==="week")e=new Date(a),r=new Date(a),r.setDate(a.getDate()-6),r.setHours(0,0,0,0),n=new Date(r),n.setDate(n.getDate()-1),o=new Date(n),o.setDate(n.getDate()-6),o.setHours(0,0,0,0),d="\u76F4\u8FD17\u65E5",u="\u524D\u306E7\u65E5";else if(l==="month"){let s=a.getFullYear(),i=a.getMonth();r=new Date(s,i,1),e=new Date(s,i+1,0,23,59,59),o=new Date(s,i-1,1),n=new Date(s,i,0,23,59,59),d=`${s}\u5E74${i+1}\u6708`,u=`${s}\u5E74${i||12}\u6708`}else if(l==="prev-month"){let s=a.getFullYear(),i=a.getMonth()-1,g=i<0?s-1:s,$=(i%12+12)%12;r=new Date(g,$,1),e=new Date(g,$+1,0,23,59,59),o=new Date(g,$-1,1),n=new Date(g,$,0,23,59,59),d=`${g}\u5E74${$+1}\u6708\uFF08\u5148\u6708\uFF09`,u=`${g}\u5E74${$||12}\u6708`}else if(l==="month-select"&&c.rankingMonth){let[s,i]=c.rankingMonth.split("-").map(Number);r=new Date(s,i-1,1),e=new Date(s,i,0,23,59,59),o=new Date(s,i-2,1),n=new Date(s,i-1,0,23,59,59),d=`${s}\u5E74${i}\u6708`,u=`${i===1?s-1:s}\u5E74${i===1?12:i-1}\u6708`}else return null;let m=c.rankingCompareMonth||"";if(m){let[s,i]=m.split("-").map(Number);s&&i&&(o=new Date(s,i-1,1),n=new Date(s,i,0,23,59,59),u=`${s}\u5E74${i}\u6708`)}let k=M(t,r,e),h=M(t,o,n),f=[...k.values()].reduce((s,i)=>s+i,0);return{label:d,prevLabel:u,start:r,end:e,counts:k,prevCounts:h,totalSongs:f}}function M(t,l,a){let r=new Map;for(let e of t){let o=e.date instanceof Date?e.date:new Date(e.date||0);if(o>=l&&o<=a)for(let n of e.songs||[])r.set(n.key,(r.get(n.key)||0)+1)}return r}function E(t,{counts:l,prevCounts:a}){let r=new Map(t.map(o=>[o.key,o])),e=[];for(let[o,n]of l){let d=r.get(o);if(!d)continue;let u=a.get(o)||0;e.push({...d,periodCount:n,delta:n-u,isNew:u===0})}return e.sort((o,n)=>n.periodCount-o.periodCount||o.title.localeCompare(n.title,"ja")),e.forEach((o,n)=>{o.periodRank=n+1}),e}function I(t){let l=new Set;for(let a of t){let r=a.date instanceof Date?a.date:new Date(a.date||0);isNaN(r)||l.add(`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`)}return[...l].sort().reverse()}function A(t,l,a){let r=a?t.periodCount:t.count,e=a?t.periodRank:t.rank??l,o=e===1?"r1":e===2?"r2":e===3?"r3":"",n=a?`<div class="count">${r}<small>\u56DE</small></div>
       <div class="rank-delta ${H(t)}">${O(t)}</div>`:`<div class="count">${r}<small>\u56DE</small></div>`,d=a?R(t):t.lastSung?`<span class="last-date">${S(t.lastSung)}</span><span class="badge ${w(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u672A\u62AB\u9732</span><span class="badge never">-</span>';return`
    <div class="song-row ranking-row" data-songkey="${p(t.key)}" data-songtitle="${p(t.title)}" data-songartist="${p(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${o}">${e}</div>
      <div class="info">
        <div class="title">${p(t.title)}</div>
      </div>
      <div class="ranking-artist-cell">
        <button class="artist artist-search-btn" type="button" data-artist-search="${p(t.artist)}">${p(t.artist)}</button>
      </div>
      <div class="song-row-side ranking-count-cell">
        ${n}
      </div>
      <div class="ranking-history-cell">
        ${d}
      </div>
    </div>
  `}function R(t){let l=[];t.genre&&l.push(`<span class="genre-badge">${p(t.genre)}</span>`);for(let a of(t.tags||[]).slice(0,2))l.push(`<span class="tag-badge">${p(a)}</span>`);return l.length?l.join(""):'<span class="muted">-</span>'}function H(t){return t.isNew?"new":t.delta>0?"up":t.delta<0?"down":"same"}function O(t){return t.isNew?"NEW":t.delta>0?`\u25B2${t.delta}`:t.delta<0?`\u25BC${Math.abs(t.delta)}`:"\u2014"}export{v as renderRanking};
