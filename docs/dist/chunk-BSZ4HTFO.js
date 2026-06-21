import{b as g,c as k}from"./chunk-RKZOC53G.js";import{f as L}from"./chunk-4UBIEY7R.js";import{e as s}from"./chunk-AW5KTZNU.js";import{F as y,H as h,P as b,a as d,c as o}from"./chunk-GPIKXWRQ.js";var T='<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/></svg>',I='<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><polygon points="6 4 19 12 6 20 6 4"/></svg>';function f(){let{streams:n}=s.data,r=s.timelineFilter,a=r?n.filter(t=>t.songs.some(i=>i.key===r.key)):n,l=w(a,s.timelineSort),c=d("#panel-timeline");c.innerHTML=`
    <div class="section-header">
      <h2>${b("calendar")} \u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</h2>
      <span class="count-pill">${l.length}\u67A0</span>
    </div>
    <div class="timeline-tools">
      <label class="timeline-sort-field" for="timeline-sort">
        <span>\u4E26\u3073\u66FF\u3048</span>
        <select id="timeline-sort" class="select-input">
          <option value="date-desc"${s.timelineSort==="date-desc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u65B0\u3057\u3044\u9806\uFF09</option>
          <option value="date-asc"${s.timelineSort==="date-asc"?" selected":""}>\u914D\u4FE1\u65E5\uFF08\u53E4\u3044\u9806\uFF09</option>
          <option value="songs-desc"${s.timelineSort==="songs-desc"?" selected":""}>\u66F2\u6570\uFF08\u591A\u3044\u9806\uFF09</option>
          <option value="songs-asc"${s.timelineSort==="songs-asc"?" selected":""}>\u66F2\u6570\uFF08\u5C11\u306A\u3044\u9806\uFF09</option>
          <option value="index-desc"${s.timelineSort==="index-desc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5927\u304D\u3044\u9806\uFF09</option>
          <option value="index-asc"${s.timelineSort==="index-asc"?" selected":""}>\u67A0\u756A\u53F7\uFF08\u5C0F\u3055\u3044\u9806\uFF09</option>
          <option value="title"${s.timelineSort==="title"?" selected":""}>\u30BF\u30A4\u30C8\u30EB\u9806</option>
        </select>
      </label>
    </div>
    <div id="timeline-filter-banner"></div>
    <div id="timeline" class="timeline"></div>
    <div class="timeline-controls" id="timeline-controls"></div>
  `,d("#timeline-sort")?.addEventListener("change",t=>{s.timelineSort=t.target.value||"date-desc",s.timelineLimit=g,f()});let p=d("#timeline-filter-banner");if(r){let t=l.reduce((i,$)=>i+$.songs.filter(v=>v.key===r.key).length,0);p.innerHTML=`
      <div class="filter-banner">
        <span class="filter-icon">${b("search")}</span>
        <div class="filter-text">
          <strong>${o(r.title)}</strong>
          <span style="color:var(--ink-mute);"> / ${o(r.artist)}</span>
          <span class="meta">\u3053\u306E\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306E\u307F\u8868\u793A\u4E2D\uFF08${l.length}\u67A0 / ${t}\u56DE\u6B4C\u5531\uFF09</span>
        </div>
        <button class="clear-btn" id="clear-filter">${b("close")} \u7D5E\u308A\u8FBC\u307F\u3092\u89E3\u9664</button>
      </div>
    `,d("#clear-filter").addEventListener("click",()=>{s.timelineFilter=null,s.timelineLimit=g,f()})}if(!l.length){d("#timeline").innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u914D\u4FE1\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>';return}let m=l.slice(0,s.timelineLimit);if(d("#timeline").innerHTML=m.map((t,i)=>x(t,i,r)).join(""),s.timelineFocus){let i=document.querySelector(`[data-streamkey="${CSS.escape(s.timelineFocus)}"]`)?.closest(".timeline-item");i?.classList.add("focus"),i?.scrollIntoView({behavior:"smooth",block:"center"}),s.timelineFocus=null}d("#timeline").onclick=async t=>{let i=t.target.closest("[data-copy-stream]");if(!i)return;t.preventDefault(),t.stopPropagation();let $=m[Number(i.dataset.copyStream)];if($)try{await navigator.clipboard.writeText(E($)),i.classList.add("is-copied"),i.setAttribute("aria-label","\u30B3\u30D4\u30FC\u6E08\u307F"),i.title="\u30B3\u30D4\u30FC\u6E08\u307F",setTimeout(()=>{i.classList.remove("is-copied"),i.setAttribute("aria-label","\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"),i.title="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"},1200)}catch{i.classList.add("is-error"),i.setAttribute("aria-label","\u30B3\u30D4\u30FC\u306B\u5931\u6557"),i.title="\u30B3\u30D4\u30FC\u306B\u5931\u6557",setTimeout(()=>{i.classList.remove("is-error"),i.setAttribute("aria-label","\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"),i.title="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC"},1200)}};let e=d("#timeline-controls");s.timelineLimit<l.length&&(e.innerHTML=`<button class="load-more-btn" id="load-more">\u25BC \u3082\u3063\u3068\u898B\u308B (\u6B8B\u308A${l.length-s.timelineLimit}\u67A0)</button>`,d("#load-more").addEventListener("click",()=>{s.timelineLimit+=k,f()}))}function x(n,r,a){let l=!a&&s.timelineSort==="date-desc"&&r<3?"recent":"",c=n.songs.map((u,S)=>`
      <li class="setlist-item${a&&u.key===a.key?" hit":""}">
        <span class="setlist-num">${S+1}.</span>
        <button class="setlist-title" type="button"
          data-songkey="${o(u.key)}"
          data-songtitle="${o(u.title)}"
          data-songartist="${o(u.artist)}"
          title="\u66F2\u8A73\u7D30\u3092\u8868\u793A">${o(u.title)}</button>
        <span class="setlist-separator">/</span>
        <button class="setlist-artist" type="button"
          data-artist-search="${o(u.artist)}"
          title="\u5168\u66F2\u30EA\u30B9\u30C8\u3067\u7D5E\u308A\u8FBC\u307F">${o(u.artist)}</button>
      </li>`).join(""),p=n.url?`<a href="${o(n.url)}" target="_blank" rel="noopener">${o(n.title||"\u914D\u4FE1")}</a>`:o(n.title||"\u914D\u4FE1"),m=n.url?`<span class="watch-actions"><a class="watch-open-link" href="${o(n.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F" title="YouTube\u3067\u958B\u304F">${I}</a></span>`:"",e=h(n),t=L(e),i=`<button class="timeline-save-btn${t?" is-saved":""}" type="button" data-playlist-add="${o(e)}" data-stream-title="${o(n.title||"\u914D\u4FE1")}" title="${t?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${b("bookmark")}</button>`,$=`<button class="timeline-copy-btn" type="button" data-copy-stream="${r}" aria-label="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC" title="\u30BB\u30C8\u30EA\u3092\u30B3\u30D4\u30FC">${T}</button>`;return`
    <details class="timeline-item ${l}"${a?" open":""}>
      <span class="stream-anchor" data-streamkey="${o(h(n))}"></span>
      <summary class="timeline-summary">
        <span class="timeline-date-badge">${y(n.date).replace(/^\d{4}\//,"")}</span>
        <span class="timeline-summary-main">
          <span class="timeline-head">
            <span class="timeline-stream-no">\u7B2C${n.index}\u67A0</span>
            <span class="timeline-songcount">${b("check")} ${n.songs.length}\u66F2</span>
          </span>
          <span class="timeline-title">${p}</span>
        </span>
        <span class="timeline-actions">
          ${i}
          ${$}
          ${m}
        </span>
      </summary>
      <div class="timeline-setlist"><ol class="setlist-list">${c}</ol></div>
    </details>
  `}function w(n,r){let a=[...n],l=e=>e.date instanceof Date?e.date.getTime():new Date(e.date||0).getTime(),c=e=>Number(e.index)||0,p=e=>e.songs?.length||0,m=(e,t)=>l(t)-l(e)||c(t)-c(e);switch(r){case"date-asc":a.sort((e,t)=>l(e)-l(t)||c(e)-c(t));break;case"songs-desc":a.sort((e,t)=>p(t)-p(e)||m(e,t));break;case"songs-asc":a.sort((e,t)=>p(e)-p(t)||m(e,t));break;case"index-desc":a.sort((e,t)=>c(t)-c(e)||m(e,t));break;case"index-asc":a.sort((e,t)=>c(e)-c(t)||m(e,t));break;case"title":a.sort((e,t)=>String(e.title||"").localeCompare(String(t.title||""),"ja")||m(e,t));break;case"date-desc":default:a.sort(m);break}return a}function E(n){return(n.songs||[]).map(r=>{let a=String(r?.title||"").trim(),l=String(r?.artist||"").trim();return l?`${a} / ${l}`:a}).filter(Boolean).join(`
`)}export{f as renderTimeline};
