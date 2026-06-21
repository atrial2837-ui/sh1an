import{d as b}from"./chunk-RKZOC53G.js";import{e as c}from"./chunk-AW5KTZNU.js";import{F as w,P as M,a as y,c as p,g as D}from"./chunk-Y7E4FXHW.js";function v(){let{songs:t,streams:l=[]}=c.data,i=c.rankingPeriod||"all",r=y("#panel-ranking");if(!r)return;let a=i==="all"?null:E(l,i),o=a?N(t,a):[...t].sort((n,s)=>s.count-n.count||n.title.localeCompare(s.title,"ja")),e=c.rankingLimit,d=o.slice(0,e),u=!!c.channelData?.fullLoaded;r.innerHTML=`
    <div class="section-header">
      <h2>${M("rank")} \u6B4C\u5531\u56DE\u6570\u30E9\u30F3\u30AD\u30F3\u30B0</h2>
      <span class="count-pill">${t.length}\u66F2\u4E2D</span>
    </div>
    ${L(l,i,u)}
    ${a?S(a):""}
    ${a?a.counts.size===0?`
      <div class="empty-state">\u3053\u306E\u671F\u9593\u306B\u6B4C\u5531\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>
    `:"":`
      <div class="podium">
        ${d.slice(0,3).map((n,s)=>I(n,s)).join("")}
      </div>
    `}
    ${a?.counts.size!==0||!a?`
      <div class="song-list${a?" has-delta":""}">
        ${d.map((n,s)=>P(n,s+1,a)).join("")}
      </div>
      ${e<o.length?`
        <div class="timeline-controls">
          <button class="load-more-btn" id="rank-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${o.length-e}\u66F2)</button>
        </div>`:""}
    `:""}
  `,r.addEventListener("click",n=>{let s=n.target.closest("[data-ranking-period]");if(!s)return;let $=s.dataset.rankingPeriod;$!==i&&(c.rankingPeriod=$,c.rankingLimit=b,v())});let m=document.getElementById("ranking-month-select");m&&m.addEventListener("change",n=>{n.target.value&&(c.rankingMonth=n.target.value,c.rankingPeriod="month-select",c.rankingLimit=b,v())});let k=document.getElementById("ranking-compare-select");k&&k.addEventListener("change",n=>{c.rankingCompareMonth=n.target.value,v()});let f=document.getElementById("ranking-swap-compare");f&&f.addEventListener("click",()=>{let n=c.rankingMonth||"",s=c.rankingCompareMonth||"";!n||!s||(c.rankingMonth=s,c.rankingCompareMonth=n,c.rankingPeriod="month-select",c.rankingLimit=b,v())});let h=document.getElementById("rank-more");h&&h.addEventListener("click",()=>{c.rankingLimit+=50,v()})}function L(t,l,i){let r=[{key:"all",label:"\u5168\u671F\u9593"},{key:"month",label:"\u4ECA\u6708"},{key:"prev-month",label:"\u5148\u6708"},{key:"week",label:"\u76F4\u8FD17\u65E5"}],a=j(t),o=c.rankingMonth||"";return`
    <div class="ranking-period-selector">
      ${r.map(e=>`
        <button
          class="period-btn${l===e.key?" active":""}"
          type="button"
          data-ranking-period="${e.key}"
          ${!i&&e.key!=="all"?'disabled title="\u914D\u4FE1\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D"':""}
        >${e.key==="all"||i?e.label:e.label+" \u2026"}</button>
      `).join("")}
      ${a.length&&i?`
        <select id="ranking-month-select" class="select-input period-month-select" title="\u6708\u3092\u6307\u5B9A">
          <option value="">\u6708\u3092\u9078\u629E\u2026</option>
          ${a.map(e=>{let[d,u]=e.split("-"),m=`${d}\u5E74${Number(u)}\u6708`;return`<option value="${e}"${l==="month-select"&&o===e?" selected":""}>${m}</option>`}).join("")}
        </select>
      `:""}
      ${l!=="all"&&a.length&&i?`
        <select id="ranking-compare-select" class="select-input period-month-select" title="\u5897\u6E1B\uFF08\u2191\u2193\uFF09\u306E\u6BD4\u8F03\u5148\u3092\u9078\u3076">
          <option value="">\u6BD4\u8F03: \u76F4\u524D\u306E\u671F\u9593\uFF08\u81EA\u52D5\uFF09</option>
          ${a.map(e=>{let[d,u]=e.split("-"),m=`\u6BD4\u8F03: ${d}\u5E74${Number(u)}\u6708`;return`<option value="${e}"${(c.rankingCompareMonth||"")===e?" selected":""}>${m}</option>`}).join("")}
        </select>
        ${l==="month-select"&&o&&c.rankingCompareMonth?`
          <button id="ranking-swap-compare" class="period-btn ranking-swap-btn" type="button" title="\u8868\u793A\u6708\u3068\u6BD4\u8F03\u6708\u3092\u5165\u308C\u66FF\u3048\u308B">\u2194 \u5165\u308C\u66FF\u3048</button>
        `:""}
      `:""}
    </div>
  `}function S(t){let{label:l,prevLabel:i,counts:r,totalSongs:a}=t;return`
    <div class="ranking-period-header">
      <span class="ranking-period-label">${p(l)}</span>
      <span class="ranking-period-meta">${r.size}\u66F2\u30FB\u5408\u8A08${a}\u56DE\u6B4C\u5531
        ${i?`<span class="ranking-prev-label">\uFF08\u524D\uFF1A${p(i)}\u6BD4\uFF09</span>`:""}
      </span>
    </div>
  `}function E(t,l){let i=new Date,r,a,o,e,d,u;if(l==="week")a=new Date(i),r=new Date(i),r.setDate(i.getDate()-6),r.setHours(0,0,0,0),e=new Date(r),e.setDate(e.getDate()-1),o=new Date(e),o.setDate(e.getDate()-6),o.setHours(0,0,0,0),d="\u76F4\u8FD17\u65E5",u="\u524D\u306E7\u65E5";else if(l==="month"){let n=i.getFullYear(),s=i.getMonth();r=new Date(n,s,1),a=new Date(n,s+1,0,23,59,59),o=new Date(n,s-1,1),e=new Date(n,s,0,23,59,59),d=`${n}\u5E74${s+1}\u6708`,u=`${n}\u5E74${s||12}\u6708`}else if(l==="prev-month"){let n=i.getFullYear(),s=i.getMonth()-1,$=s<0?n-1:n,g=(s%12+12)%12;r=new Date($,g,1),a=new Date($,g+1,0,23,59,59),o=new Date($,g-1,1),e=new Date($,g,0,23,59,59),d=`${$}\u5E74${g+1}\u6708\uFF08\u5148\u6708\uFF09`,u=`${$}\u5E74${g||12}\u6708`}else if(l==="month-select"&&c.rankingMonth){let[n,s]=c.rankingMonth.split("-").map(Number);r=new Date(n,s-1,1),a=new Date(n,s,0,23,59,59),o=new Date(n,s-2,1),e=new Date(n,s-1,0,23,59,59),d=`${n}\u5E74${s}\u6708`,u=`${s===1?n-1:n}\u5E74${s===1?12:s-1}\u6708`}else return null;let m=c.rankingCompareMonth||"";if(m){let[n,s]=m.split("-").map(Number);n&&s&&(o=new Date(n,s-1,1),e=new Date(n,s,0,23,59,59),u=`${n}\u5E74${s}\u6708`)}let k=C(t,r,a),f=C(t,o,e),h=[...k.values()].reduce((n,s)=>n+s,0);return{label:d,prevLabel:u,start:r,end:a,counts:k,prevCounts:f,totalSongs:h}}function C(t,l,i){let r=new Map;for(let a of t){let o=a.date instanceof Date?a.date:new Date(a.date||0);if(o>=l&&o<=i)for(let e of a.songs||[])r.set(e.key,(r.get(e.key)||0)+1)}return r}function N(t,{counts:l,prevCounts:i}){let r=new Map(t.map(o=>[o.key,o])),a=[];for(let[o,e]of l){let d=r.get(o);if(!d)continue;let u=i.get(o)||0;a.push({...d,periodCount:e,delta:e-u,isNew:u===0})}return a.sort((o,e)=>e.periodCount-o.periodCount||o.title.localeCompare(e.title,"ja")),a.forEach((o,e)=>{o.periodRank=e+1}),a}function j(t){let l=new Set;for(let i of t){let r=i.date instanceof Date?i.date:new Date(i.date||0);isNaN(r)||l.add(`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`)}return[...l].sort().reverse()}function I(t,l){let i=["1","2","3"];return`
    <div class="podium-card rank-${l+1}"
      data-songkey="${p(t.key)}"
      data-songtitle="${p(t.title)}"
      data-songartist="${p(t.artist)}"
      title="\u30AF\u30EA\u30C3\u30AF\u3067\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u7D5E\u308A\u8FBC\u307F">
      <div class="podium-medal" aria-label="${l+1}\u4F4D"><span>${i[l]}</span></div>
      <div class="song-title">${p(t.title)}</div>
      <button class="song-artist artist-search-btn" type="button" data-artist-search="${p(t.artist)}">${p(t.artist)}</button>
      <div class="count-big">${t.count}<small>\u56DE</small></div>
      <div class="last-sung">${t.lastSung?`\u6700\u7D42: ${w(t.lastSung)} (${t.daysSinceLast}\u65E5\u524D)`:"\u672A\u62AB\u9732"}</div>
    </div>
  `}function P(t,l,i){let r=i?t.periodCount:t.count,a=i?t.periodRank:t.rank??l,o=a===1?"r1":a===2?"r2":a===3?"r3":"",e=i?`<div class="count">${r}<small>\u56DE</small></div>
       <div class="rank-delta ${H(t)}">${R(t)}</div>`:`<div class="count">${r}<small>\u56DE</small></div>
       <div class="last">${t.lastSung?`<span class="last-date">${w(t.lastSung)}</span><span class="badge ${D(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u672A\u62AB\u9732</span><span class="badge never">\u2014</span>'}</div>`;return`
    <div class="song-row" data-songkey="${p(t.key)}" data-songtitle="${p(t.title)}" data-songartist="${p(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${o}">${a}</div>
      <div class="info">
        <div class="title">${p(t.title)}</div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${p(t.artist)}">${p(t.artist)}</button>
      </div>
      <div class="song-row-side">
        ${e}
      </div>
    </div>
  `}function H(t){return t.isNew?"new":t.delta>0?"up":t.delta<0?"down":"same"}function R(t){return t.isNew?"NEW":t.delta>0?`\u25B2${t.delta}`:t.delta<0?`\u25BC${Math.abs(t.delta)}`:"\u2014"}export{v as renderRanking};
