import{a as at,e as ot,f as G,g as rt,h as lt,j as dt,l as k}from"./chunk-EMLWUNYE.js";import{a as tt,b as D,e}from"./chunk-AW5KTZNU.js";import{B as K,D as et,E as nt,G as R,M as it,P as j,Q as v,a as c,c as r,g as st,k as q,l as Q,m as _}from"./chunk-I26RRBMD.js";var L,M,x,V,Y,P,pt,C,yt=null,mt="sh1an-setlist-v1",E=[],H=null,I=null,T=null;function W(){T&&(T.disconnect(),T=null)}function ht(t){if(W(),e.songsLimit>=t)return;let s=document.getElementById("songs-infinite-sentinel");s&&(T=new IntersectionObserver(i=>{i[0].isIntersecting&&(e.songsLimit+=100,h())},{rootMargin:"200px"}),T.observe(s))}function Wt(){W(),Et(),Mt(),at(e.data?.songs||[]);let t=c("#panel-songs");t.innerHTML=`
    <div class="section-header">
      <h2>${e.singerMode?`${v("mic")} \u9078\u66F2\u30DC\u30FC\u30C9`:`${v("music")} \u5168\u66F2\u30EA\u30B9\u30C8`}</h2>
      <span class="count-pill" id="songs-count">\u2014</span>
    </div>
    <div class="mobile-panel-switch">
      <button class="btn ghost active" type="button" data-mobile-panel-toggle="filters">\u7D5E\u308A\u8FBC\u307F</button>
    </div>
    <div id="songs-filter-panel" class="mobile-panel mobile-panel-filters is-open">
      <div class="songs-search-shell">
        <div class="search-input-wrap">
          <span class="songs-search-icon" aria-hidden="true">\u2315</span>
          <input id="songs-search" class="text-input songs-search-input" type="search" placeholder="\u66F2\u540D\u30FB\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FB\u96F0\u56F2\u6C17\u3067\u691C\u7D22" value="${r(e.songsQuery)}">
          <div id="search-history-dropdown" class="search-history-dropdown" hidden></div>
        </div>
        <button class="songs-fav-toggle ${e.favoritesFilter?"is-active":""}" type="button" data-filter="favorites" aria-pressed="${e.favoritesFilter?"true":"false"}" title="\u304A\u6C17\u306B\u5165\u308A\u3060\u3051\u8868\u793A">${v("heart")}</button>
        ${e.singerMode?'<button class="songs-setlist-mini btn primary" id="setlist-toggle-btn" type="button" aria-controls="setlist-planner" aria-expanded="'+(e.setlistExpanded?"true":"false")+'">'+(e.setlistExpanded?"\u30BB\u30C8\u30EA\u3092\u9589\u3058\u308B":"\u30BB\u30C8\u30EA\u5236\u4F5C")+"</button>":""}
      </div>
      <!-- \u96F0\u56F2\u6C17\u30B5\u30B8\u30A7\u30B9\u30C8\u30C1\u30C3\u30D7\uFF08\u5E38\u6642\u8868\u793A\u30FB8\u7A2E\u306E\u307F\uFF09 -->
      <div id="search-suggest" class="suggest-strip songs-suggest-strip" role="group" aria-label="\u96F0\u56F2\u6C17\u3067\u7D20\u65E9\u304F\u691C\u7D22">
        ${[["chill","\u30C1\u30EB\u306A\u66F2"],["\u3042\u3064\u3044","\u3042\u3064\u3044\u66F2"],["\u3057\u3063\u3068\u308A","\u3057\u3063\u3068\u308A"],["\u30A8\u30E2\u3044","\u30A8\u30E2\u3044"],["\u304B\u308F\u3044\u3044","\u304B\u308F\u3044\u3044"]].map(([n,d])=>`<button type="button" class="suggest-chip" data-suggest="${r(d)}">${n}</button>`).join("")}
      </div>
      <details class="songs-advanced">
        <summary>
          <span>\u7D5E\u308A\u8FBC\u307F</span>
          <small>\u4E26\u3073\u9806\u30FB\u30B8\u30E3\u30F3\u30EB\u30FB\u72B6\u614B</small>
        </summary>
        <div class="songs-advanced-body">
          <div class="controls songs-control-grid">
        <select id="songs-sort" class="select-input">
          <option value="count-desc">\u56DE\u6570\uFF08\u591A\uFF09</option>
          <option value="count-asc">\u56DE\u6570\uFF08\u5C11\uFF09</option>
          <option value="recent">\u6700\u7D42\u62AB\u9732\uFF08\u65B0\uFF09</option>
          <option value="oldest">\u6700\u7D42\u62AB\u9732\uFF08\u53E4\uFF09</option>
          <option value="title">\u66F2\u540D\uFF08\u3042\u2192\u3093\uFF09</option>
          <option value="artist">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        </select>
        <select id="songs-genre" class="select-input genre-select" title="\u30B8\u30E3\u30F3\u30EB\u3067\u7D5E\u308A\u8FBC\u307F">
          ${St()}
        </select>
          </div>
      <!-- \u7D5E\u308A\u8FBC\u307F\u30DC\u30BF\u30F3\u884C -->
      <div class="controls songs-filter-row" id="songs-filters">
        <button class="btn ghost" data-filter="all">\u3059\u3079\u3066</button>
        <button class="btn ghost" data-filter="fresh">\u{1F7E2} \u6700\u8FD1</button>
        <button class="btn ghost" data-filter="stale">\u{1F7E0} \u4E45\u3057\u3076\u308A</button>
        <button class="btn ghost" data-filter="never">\u26AA \u672A\u78BA\u8A8D</button>
        <button class="btn ghost songs-favorites-filter" data-filter="favorites">${v("heart")} \u304A\u6C17\u306B\u5165\u308A</button>
        ${e.singerMode?"":`<button class="btn ghost" id="recommend-btn" type="button">${v("lightbulb")} \u304A\u3059\u3059\u3081</button><button class="btn ghost" id="todays-song-btn" type="button">${v("dice")} \u4ECA\u65E5\u306E\u4E00\u66F2</button>`}
      </div>
      ${e.singerMode?`
        <div class="songs-tools">
          <button class="btn ghost" data-singer-preset="keyed" type="button">\u30AD\u30FC\u78BA\u8A8D\u6E08\u307F</button>
          <button class="btn ghost" data-singer-preset="classic" type="button">\u5B9A\u756A</button>
          <button class="btn ghost" data-singer-preset="stale" type="button">\u4E45\u3057\u3076\u308A</button>
          <button class="btn ghost" data-singer-preset="rare" type="button">\u30EC\u30A2</button>
          <button class="btn ghost" data-singer-preset="chill" type="button">Chill</button>
          <button class="btn ghost" data-singer-preset="energetic" type="button">\u6FC0\u3057\u3044</button>
          <button class="btn ghost" data-singer-preset="nostalgic" type="button">\u30CE\u30B9\u30BF\u30EB\u30B8\u30C3\u30AF</button>
          <button class="btn ghost" id="compact-btn" type="button">\u8868\u793A: ${e.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}</button>
          <button class="btn ghost" id="todays-song-btn" type="button">${v("dice")} \u4ECA\u65E5\u306E\u4E00\u66F2</button>
        </div>
      `:""}
          <div class="genre-strip" id="songs-genre-chips">${wt()}</div>
        </div>
      </details>
    </div>
    ${e.singerMode?'<div id="setlist-planner" class="setlist-planner mobile-panel mobile-panel-setlist"></div>':""}
    <div id="todays-song-box" class="todays-song-box" hidden></div>
    <div id="songs-list" class="song-list"></div>
    <div class="timeline-controls" id="songs-more-wrap"></div>
  `,L=c("#songs-search"),M=c("#songs-sort"),x=c("#songs-genre"),V=c("#songs-filters"),Y=c("#songs-genre-chips"),P=c("#songs-list"),pt=c("#songs-count"),C=c("#songs-more-wrap"),M.value=e.songsSort,x.value=Lt(e.songsGenre)?e.songsGenre:"all",e.songsGenre=x.value,O(),N(),U();let s=document.getElementById("search-suggest"),i=it(()=>{e.songsQuery=L.value,e.songsLimit=100,G(e.songsQuery),F(),k({tab:"songs",q:e.songsQuery},{replace:!0}),N(),h()},120);L.addEventListener("input",()=>{i()}),L.addEventListener("focus",()=>{ct()}),L.addEventListener("blur",()=>{setTimeout(()=>{F()},200)}),s&&s.addEventListener("click",n=>{let d=n.target.closest("[data-suggest]");if(!d)return;let u=d.dataset.suggest;L.value===u?(L.value="",e.songsQuery=""):(L.value=u,e.songsQuery=u),e.songsLimit=100,G(e.songsQuery||u),k({tab:"songs",q:e.songsQuery},{replace:!0}),N(),h()}),M.addEventListener("change",()=>{e.songsSort=M.value,h()}),x.addEventListener("change",()=>{e.songsGenre=x.value,e.songsLimit=100,U(),h()}),V.addEventListener("click",n=>{let d=n.target.closest("[data-filter]");d&&(d.dataset.filter==="favorites"?e.favoritesFilter=!e.favoritesFilter:(e.songsFilter=d.dataset.filter,e.favoritesFilter=!1),e.songsLimit=100,O(),h())}),t.querySelector(".songs-fav-toggle")?.addEventListener("click",()=>{e.favoritesFilter=!e.favoritesFilter,e.favoritesFilter&&(e.songsFilter="all"),e.songsLimit=100,O(),h()}),Y.addEventListener("click",n=>{let d=n.target.closest("[data-genre]");d&&(e.songsGenre=d.dataset.genre,x.value=e.songsGenre,e.songsLimit=100,U(),h())});for(let n of t.querySelectorAll("[data-singer-preset]"))n.addEventListener("click",()=>{e.singerMode=!0,e.singerPreset=e.singerPreset===n.dataset.singerPreset?"all":n.dataset.singerPreset,e.songsLimit=100,h()});c("#compact-btn")?.addEventListener("click",()=>{e.songsView=e.songsView==="compact"?"comfortable":"compact",h()}),c("#setlist-toggle-btn")?.addEventListener("click",()=>$t()),c("#recommend-btn")?.addEventListener("click",()=>xt()),c("#todays-song-btn")?.addEventListener("click",()=>ut());for(let n of t.querySelectorAll("[data-mobile-panel-toggle]"))n.addEventListener("click",()=>bt(n.dataset.mobilePanelToggle));t.onclick=n=>{if(n.target.closest("#search-history-clear")){n.preventDefault(),n.stopPropagation(),lt(),F();return}let u=n.target.closest(".search-history-remove");if(u){n.preventDefault(),n.stopPropagation(),rt(u.dataset.remove),ct();return}let o=n.target.closest(".search-history-item");if(o){n.preventDefault(),n.stopPropagation();let f=o.dataset.query;e.songsQuery=f,L.value=f,e.songsLimit=100,F(),k({tab:"songs",q:f}),h();return}if(n.target.closest("[data-recommend-dismiss]")){n.preventDefault(),n.stopPropagation();let f=c("#recommend-box");f&&(f.hidden=!0,f.innerHTML="");return}if(n.target.closest("[data-todays-song-dismiss]")){n.preventDefault(),n.stopPropagation();let f=c("#todays-song-box");f&&(f.hidden=!0,f.innerHTML="");return}if(n.target.closest("[data-todays-song-reroll]")){n.preventDefault(),n.stopPropagation(),ut();return}let p=n.target.closest("[data-setlist-action]");if(p){n.stopPropagation(),Ft(p);return}let b=n.target.closest("[data-artist-search]");if(b){n.stopPropagation();let f=String(b.dataset.artistSearch||"").replace(/"/g,"");e.songsQuery=`artist:"${f}"`,L.value=e.songsQuery,e.songsLimit=100,k({tab:"songs",q:e.songsQuery}),h();return}let m=n.target.closest("[data-fav-toggle]");if(m){n.preventDefault(),n.stopPropagation();let f=m.dataset.favToggle;tt(f);let Z=D(f);m.classList.toggle("is-active",Z),m.setAttribute("aria-pressed",String(Z)),m.innerHTML=v("heart");return}let $=n.target.closest("[data-tag-search]");if(!$)return;n.stopPropagation();let S=$.dataset.tagType||"tag";e.songsQuery=`${S}:${$.dataset.tagSearch}`,L.value=e.songsQuery,e.songsLimit=100,k({tab:"songs",q:e.songsQuery}),h()},t.oninput=n=>{n.target.id==="setlist-theme"&&(e.setlist.theme=n.target.value,w())},t.onchange=n=>{n.target.id==="setlist-copy-format"&&(e.setlist.copyFormat=n.target.value,w())},t.onkeydown=n=>{n.key==="Enter"&&(!n.target.closest(".setlist-custom-add")&&!n.target.closest(".setlist-custom-details")||n.target.tagName!=="BUTTON"&&(n.preventDefault(),ft()))},h()}function ct(){let t=ot(),s=c("#search-history-dropdown");s&&(yt=s,t.length?s.innerHTML=`
      <div class="search-history-header">
        <span>\u691C\u7D22\u5C65\u6B74</span>
        <button class="search-history-clear-btn" type="button" id="search-history-clear">\u3059\u3079\u3066\u524A\u9664</button>
      </div>
      ${t.map(i=>`
        <div class="search-history-item" data-query="${r(i)}">
          <span class="search-history-query">${r(i)}</span>
          <button class="search-history-remove" type="button" data-remove="${r(i)}" aria-label="\u524A\u9664">\xD7</button>
        </div>
      `).join("")}
    `:s.innerHTML='<div class="search-history-empty">\u691C\u7D22\u5C65\u6B74\u304C\u3042\u308A\u307E\u305B\u3093</div>',s.hidden=!1)}function F(){let t=c("#search-history-dropdown");t&&(t.hidden=!0)}function bt(t){let s=c("#songs-filter-panel"),i=c("#setlist-planner");if(t==="setlist"&&!e.singerMode){s?.classList.add("is-open"),i?.classList.remove("is-open");for(let d of document.querySelectorAll("[data-mobile-panel-toggle]"))d.classList.toggle("active",d.dataset.mobilePanelToggle==="filters");return}if(e.singerMode){s?.classList.add("is-open"),s?.scrollIntoView({behavior:"smooth",block:"start"});for(let u of document.querySelectorAll("[data-mobile-panel-toggle]"))u.classList.toggle("active",u.dataset.mobilePanelToggle==="filters");return}let n=t==="setlist";s?.classList.toggle("is-open",!n),i?.classList.toggle("is-open",n);for(let d of document.querySelectorAll("[data-mobile-panel-toggle]"))d.classList.toggle("active",d.dataset.mobilePanelToggle===t)}function $t(){if(!e.singerMode)return;e.setlistExpanded=!e.setlistExpanded,y();let t=c("#setlist-planner");e.setlistExpanded&&t?.scrollIntoView({behavior:"smooth",block:"start"})}function B(t){return String(t.genre||"\u672A\u5206\u985E").trim()||"\u672A\u5206\u985E"}function z(){let t=new Map;for(let s of e.data.songs||[]){let i=B(s);t.set(i,(t.get(i)||0)+1)}return[...t.entries()].sort((s,i)=>i[1]-s[1]||s[0].localeCompare(i[0],"ja"))}function Lt(t){return t==="all"||z().some(([s])=>s===t)}function St(){let t=['<option value="all">\u5168\u30B8\u30E3\u30F3\u30EB</option>'];for(let[s,i]of z())t.push(`<option value="${r(s)}">${r(s)} (${i})</option>`);return t.join("")}function wt(){let t=['<button class="genre-chip" type="button" data-genre="all">\u5168\u30B8\u30E3\u30F3\u30EB</button>'];for(let[s,i]of z())t.push(`
      <button class="genre-chip" type="button" data-genre="${r(s)}">
        <span>${r(s)}</span><small>${i}</small>
      </button>
    `);return t.join("")}function U(){for(let t of Y.querySelectorAll("[data-genre]"))t.classList.toggle("active",t.dataset.genre===e.songsGenre)}function O(){for(let s of V.querySelectorAll("[data-filter]"))s.dataset.filter==="favorites"?(s.classList.toggle("primary",e.favoritesFilter),s.classList.toggle("ghost",!e.favoritesFilter)):(s.classList.toggle("primary",s.dataset.filter===e.songsFilter&&!e.favoritesFilter),s.classList.toggle("ghost",s.dataset.filter!==e.songsFilter||e.favoritesFilter));let t=document.querySelector(".songs-fav-toggle");t&&(t.classList.toggle("is-active",e.favoritesFilter),t.setAttribute("aria-pressed",String(e.favoritesFilter)),t.innerHTML=v("heart"))}function N(){let t=document.getElementById("search-suggest");if(!t)return;let s=(e.songsQuery||"").trim();for(let i of t.querySelectorAll("[data-suggest]"))i.classList.toggle("is-active",i.dataset.suggest===s)}function h(){let{songs:t}=e.data,s=q(t,e.songsGenre,B),i=_(s,{singerMode:e.singerMode,preset:e.singerPreset,keyPublished:e.data?.stats?.keyPublished}),n=Q(i,e.songsFilter),{results:d,tokens:u}=dt(e.songsQuery,n),o=e.songsQuery.trim()?d.filter(a=>n.includes(a)):n;if(e.favoritesFilter&&(o=o.filter(a=>e.favorites.has(a.key))),o=K(o,e.songsSort,!!e.songsQuery.trim()),E=o,pt.textContent=`${o.length} / ${t.length}\u66F2`,!o.length){P.innerHTML='<div class="empty-state">\u8A72\u5F53\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>',C.innerHTML="";return}let l=o.slice(0,e.songsLimit);P.classList.toggle("compact",e.songsView==="compact");for(let a of document.querySelectorAll("[data-singer-preset]")){let g=e.singerMode&&e.singerPreset===a.dataset.singerPreset;a.classList.toggle("primary",g),a.classList.toggle("ghost",!g)}c("#compact-btn")&&(c("#compact-btn").textContent=`\u8868\u793A: ${e.songsView==="compact"?"\u30B3\u30F3\u30D1\u30AF\u30C8":"\u8A73\u7D30"}`),P.innerHTML=l.map(a=>_t(a,u)).join(""),y(),e.songsLimit<o.length?(C.innerHTML=`
      <div id="songs-infinite-sentinel" style="height:1px;width:100%;"></div>
      <button class="load-more-btn" id="songs-more">\u25BC \u3082\u3063\u3068\u8868\u793A (\u6B8B\u308A${o.length-e.songsLimit}\u66F2)</button>
    `,c("#songs-more").addEventListener("click",()=>{e.songsLimit+=200,h()}),ht(o.length)):(W(),C.innerHTML="")}function ut(){let t=c("#todays-song-box");if(!t)return;if(!E.length){t.hidden=!1,t.innerHTML='<div class="empty-state">\u6761\u4EF6\u306B\u5408\u3046\u66F2\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let s=E[Math.floor(Math.random()*E.length)];t.hidden=!1,t.innerHTML=kt(s)}function kt(t){let s=t.lastSung?`${R(t.lastSung)} \xB7 ${t.daysSinceLast}\u65E5\u524D`:"\u5C65\u6B74\u672A\u78BA\u8A8D",i=t.displayKey?`<span class="todays-song-key">\u30AD\u30FC ${r(t.displayKey)}</span>`:"",n=e.singerMode?`<button class="btn primary" type="button" data-setlist-action="todays-song-add" data-songkey="${r(t.key)}">${v("plus")} \u30BB\u30C8\u30EA\u306B\u8FFD\u52A0</button>`:"";return`
    <div class="todays-song-card">
      <div class="todays-song-header">
        <span class="todays-song-label">${v("dice")} \u4ECA\u65E5\u306E\u4E00\u66F2</span>
        <button class="todays-song-dismiss" type="button" data-todays-song-dismiss aria-label="\u9589\u3058\u308B">\xD7</button>
      </div>
      <div class="todays-song-info">
        <div class="todays-song-title">${r(t.title)}</div>
        <div class="todays-song-artist">${r(t.artist)}</div>
        <div class="todays-song-meta">
          <span class="todays-song-count">${t.count}\u56DE</span>
          <span class="todays-song-last">${s}</span>
          ${i}
        </div>
      </div>
      <div class="todays-song-actions">
        ${n}
        <button class="btn ghost" type="button" data-todays-song-reroll>\u5225\u306E\u3082\u3046\u4E00\u56DE</button>
      </div>
    </div>
  `}function xt(){let t=c("#recommend-box"),s=K(_(Q(q(e.data.songs,"all",B),e.songsFilter),{singerMode:e.singerMode,preset:e.singerPreset,keyPublished:e.data?.stats?.keyPublished}).filter(d=>d.lastSung&&(d.displayKey||!e.data.stats.keyPublished)),"oldest",!1);if(!s.length){t.hidden=!1,t.innerHTML='<div class="empty-state">\u6761\u4EF6\u306B\u5408\u3046\u304A\u3059\u3059\u3081\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093</div>';return}let i=s.slice(0,Math.min(80,s.length)),n=i[Math.floor(Math.random()*i.length)];t.hidden=!1,t.innerHTML=`
    <div class="recommend-card" data-songkey="${r(n.key)}" data-songtitle="${r(n.title)}" data-songartist="${r(n.artist)}">
      <div>
        <div class="recommend-label">\u4ECA\u65E5\u306E\u5019\u88DC</div>
        <strong>${r(n.title)}</strong>
        <span>/ ${r(n.artist)}</span>
      </div>
      <div class="recommend-meta">
        <span>${n.count}\u56DE</span>
        <span>${n.daysSinceLast??"\u2014"}\u65E5\u524D</span>
        ${n.displayKey?`<span>\u30AD\u30FC ${r(n.displayKey)}</span>`:""}
      </div>
      <button class="recommend-dismiss" type="button" data-recommend-dismiss aria-label="\u304A\u3059\u3059\u3081\u9078\u66F2\u3092\u9589\u3058\u308B">\xD7</button>
    </div>
  `}function Et(){try{let t=localStorage.getItem(mt);if(!t)return;let s=JSON.parse(t);e.setlist.theme=String(s.theme||""),e.setlist.copyFormat=s.copyFormat==="timestamp"?"timestamp":"simple",e.setlist.items=Array.isArray(s.items)?s.items:[]}catch{e.setlist.items=[]}}function Tt(){let t=e.setlist.items;if(!t.length)return window.location.href.split("?")[0];let s=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i=new URL(window.location.href.split("?")[0]);return i.searchParams.set("setlist",s),i.toString()}function Mt(){try{let s=new URLSearchParams(window.location.search).get("setlist");if(!s)return;let i=decodeURIComponent(escape(atob(s))),n=JSON.parse(i);if(!Array.isArray(n)||!n.length)return;let d=new Set(e.setlist.items.map(o=>o.key)),u=n.filter(o=>!d.has(o.key));u.length&&(e.setlist.items=[...e.setlist.items,...u],w())}catch{}}async function Ht(){let t=Tt();if(!e.setlist.items.length){y("\u5171\u6709\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(t),y("\u5171\u6709URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{y("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}function w(){localStorage.setItem(mt,JSON.stringify(e.setlist))}function J(t){return(e.data.songs||[]).find(s=>s.key===t)||null}function A(t){t&&(e.setlist.items.push({key:t.key,title:t.title,artist:t.artist,displayKey:t.displayKey||"",genre:t.genre||"",moodTags:t.moodTags||[],seasonTags:t.seasonTags||[],daysSinceLast:t.daysSinceLast}),w(),y("\u8FFD\u52A0\u3057\u307E\u3057\u305F"))}function ft(){let t=c("#setlist-custom-title"),s=c("#setlist-custom-artist"),i=c("#setlist-custom-key"),n=String(t?.value||"").trim(),d=String(s?.value||"").trim(),u=String(i?.value||"").trim();if(!n){y("\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044");return}e.setlist.items.push({key:`custom:${Date.now()}:${Math.random().toString(36).slice(2,8)}`,custom:!0,title:n,artist:d,displayKey:u,genre:"\u65B0\u898F",moodTags:[],seasonTags:[],daysSinceLast:null}),w(),y("\u65B0\u3057\u3044\u66F2\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F")}function It(t){if(t.custom)return t;let s=J(t.key);return s?{...t,...s}:t}function Ft(t){let s=t.dataset.setlistAction,i=Number(t.dataset.index);if(s==="add"&&A(J(t.dataset.songkey)),s==="todays-song-add"&&A(J(t.dataset.songkey)),s==="remove"&&e.setlist.items.splice(i,1),s==="up"&&i>0&&([e.setlist.items[i-1],e.setlist.items[i]]=[e.setlist.items[i],e.setlist.items[i-1]]),s==="down"&&i<e.setlist.items.length-1&&([e.setlist.items[i+1],e.setlist.items[i]]=[e.setlist.items[i],e.setlist.items[i+1]]),s==="copy-item"){Qt(i);return}if(s==="add-custom"){ft();return}if(s==="random"&&Pt(),s==="copy"&&qt(),s==="share"){Ht();return}s==="clear"&&confirm("\u30BB\u30C8\u30EA\u3092\u7A7A\u306B\u3057\u307E\u3059\u304B\uFF1F")&&(e.setlist.items=[]),w(),["add","random","copy"].includes(s)||y()}function Pt(){let t=new Set(e.setlist.items.map(n=>n.key)),s=(E.length?E:e.data.songs).filter(n=>n.key&&!t.has(n.key));if(!s.length){y("\u8FFD\u52A0\u3067\u304D\u308B\u5019\u88DC\u304C\u3042\u308A\u307E\u305B\u3093");return}let i=s[Math.floor(Math.random()*s.length)];A(i)}function X(){return e.setlist.items.map(It)}function y(t=""){let s=c("#setlist-planner");if(!s)return;if(Kt(),s.hidden=!e.singerMode||!e.setlistExpanded,s.classList.toggle("is-open",e.singerMode&&e.setlistExpanded),!e.singerMode){s.innerHTML="";return}let i=X(),n=nt(i),d=i.length*5;s.innerHTML=`
    <div class="setlist-head">
      <div>
        <div class="recommend-label">Setlist Builder</div>
        <h3>\u4ECA\u65E5\u306E\u30BB\u30C8\u30EA</h3>
      </div>
      <div class="setlist-total">${i.length}\u66F2 / \u7D04${d}\u5206</div>
    </div>
    <input id="setlist-theme" class="text-input setlist-theme" type="text" placeholder="\u6B4C\u67A0\u30C6\u30FC\u30DE\u30E1\u30E2" value="${r(e.setlist.theme)}">
    <div class="setlist-search-add">
      <div class="setlist-search-wrap">
        <input id="setlist-search-input" class="text-input setlist-search-input"
               type="text" placeholder="\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u2026" autocomplete="off" spellcheck="false">
        <div id="setlist-search-dropdown" class="setlist-search-dropdown" hidden></div>
      </div>
      <details class="setlist-custom-details">
        <summary>\u691C\u7D22\u3067\u898B\u3064\u304B\u3089\u306A\u3044\u66F2\u3092\u8FFD\u52A0\u3059\u308B</summary>
        <div class="setlist-custom-add">
          <input id="setlist-custom-title" class="text-input" type="text"
                 placeholder="\u66F2\u540D\uFF08\u4F8B\uFF1A\u30B7\u30E3\u30EB\u30EB\uFF09" autocomplete="off">
          <div class="setlist-custom-row2">
            <input id="setlist-custom-artist" class="text-input" type="text"
                   placeholder="\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\uFF08\u4EFB\u610F\uFF09" autocomplete="off">
            <input id="setlist-custom-key" class="text-input setlist-custom-key-inp" type="text"
                   placeholder="\u30AD\u30FC" maxlength="5" autocomplete="off">
            <button class="btn primary" type="button" data-setlist-action="add-custom">\u8FFD\u52A0</button>
          </div>
        </div>
      </details>
    </div>
    <div class="setlist-balance">
      ${gt("\u30B8\u30E3\u30F3\u30EB",n.genres)}
      ${gt("\u96F0\u56F2\u6C17",n.moods)}
      <span>\u30AD\u30FC ${n.keys}/${i.length}</span>
      <span>\u4E45\u3057\u3076\u308A ${n.stale}</span>
    </div>
    <div class="setlist-items">
      ${i.length?i.map((u,o)=>Ct(u,o)).join(""):'<div class="setlist-empty">\u66F2\u306E\u300C\u30BB\u30C8\u30EA\u300D\u30DC\u30BF\u30F3\u304B\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0\u304B\u3089\u4F5C\u308C\u307E\u3059</div>'}
    </div>
    <div class="setlist-actions">
      <select id="setlist-copy-format" class="select-input">
        <option value="simple"${e.setlist.copyFormat==="simple"?" selected":""}>\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8</option>
        <option value="timestamp"${e.setlist.copyFormat==="timestamp"?" selected":""}>\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u5165\u529B\u7528</option>
      </select>
      <button class="btn ghost" type="button" data-setlist-action="random">\u30E9\u30F3\u30C0\u30E0\u8FFD\u52A0</button>
      <button class="btn primary" type="button" data-setlist-action="copy">\u30B3\u30D4\u30FC</button>
      <button class="btn ghost" type="button" data-setlist-action="share">${v("link")} \u5171\u6709</button>
      <button class="btn ghost" type="button" data-setlist-action="clear">\u30AF\u30EA\u30A2</button>
      ${t?`<span class="setlist-message">${r(t)}</span>`:""}
    </div>
  `,At(),Bt()}function gt(t,s){return s.length?`<span>${t} ${s.map(([i,n])=>`${r(i)} ${n}`).join(" / ")}</span>`:`<span>${t} \u2014</span>`}function Ct(t,s){return`
    <div class="setlist-item" data-index="${s}">
      <div class="setlist-no">${s+1}</div>
      <div class="setlist-drag-handle" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048" aria-label="\u30C9\u30E9\u30C3\u30B0\u30CF\u30F3\u30C9\u30EB">\u283F</div>
      <div class="setlist-info">
        <strong>${r(t.title)}</strong>
        <span>${t.artist?r(t.artist):"\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u672A\u5165\u529B"}${t.displayKey?` \xB7 key ${r(t.displayKey)}`:""}${t.custom?" \xB7 \u65B0\u898F":""}</span>
      </div>
      <div class="setlist-move">
        <button class="setlist-copy-one" type="button" data-setlist-action="copy-item" data-index="${s}" aria-label="${r(t.title)}\u3092\u30B3\u30D4\u30FC">\u29C9</button>
        <button type="button" data-setlist-action="up" data-index="${s}" aria-label="\u4E0A\u3078">\u2191</button>
        <button type="button" data-setlist-action="down" data-index="${s}" aria-label="\u4E0B\u3078">\u2193</button>
        <button type="button" data-setlist-action="remove" data-index="${s}" aria-label="\u524A\u9664">\xD7</button>
      </div>
    </div>
  `}function At(){let t=document.getElementById("setlist-search-input"),s=document.getElementById("setlist-search-dropdown");if(!t||!s)return;let i=[],n=-1;function d(l){let a=l.trim().toLowerCase();if(!a){s.hidden=!0,i=[],n=-1;return}let p=(e.data?.songs||[]).filter(m=>m.title.toLowerCase().includes(a)||(m.artist||"").toLowerCase().includes(a)).sort((m,$)=>{let S=m.title.toLowerCase().startsWith(a)?2:m.title.toLowerCase().includes(a)?1:0,f=$.title.toLowerCase().startsWith(a)?2:$.title.toLowerCase().includes(a)?1:0;return S!==f?f-S:$.count-m.count}).slice(0,8),b={_isNew:!0,title:l.trim()};p.length?(s.innerHTML=p.map((m,$)=>`
          <div class="setlist-dd-item" data-dd-idx="${$}">
            <span class="setlist-dd-icon">${v("music")}</span>
            <div class="setlist-dd-body">
              <div class="setlist-dd-title">${r(m.title)}</div>
              <div class="setlist-dd-meta">${r(m.artist||"\u2014")} \xB7 ${m.count}\u56DE</div>
            </div>
          </div>`).join("")+`<div class="setlist-dd-item setlist-dd-new" data-dd-idx="${p.length}">
          <span class="setlist-dd-plus">${v("plus")}</span>
          <div class="setlist-dd-body">
            <div class="setlist-dd-title">\u300C${r(l.trim())}\u300D\u3092\u65B0\u898F\u8FFD\u52A0</div>
            <div class="setlist-dd-meta">\u66F2\u30EA\u30B9\u30C8\u306B\u306A\u3044\u66F2\u3068\u3057\u3066\u8FFD\u52A0</div>
          </div>
        </div>`,i=[...p,b]):(s.innerHTML=`
        <div class="setlist-dd-item setlist-dd-new" data-dd-idx="0">
          <span class="setlist-dd-plus">${v("plus")}</span>
          <div class="setlist-dd-body">
            <div class="setlist-dd-title">\u300C${r(l.trim())}\u300D\u3092\u65B0\u898F\u8FFD\u52A0</div>
            <div class="setlist-dd-meta">\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</div>
          </div>
        </div>`,i=[b]),n=-1,s.hidden=!1,u()}function u(){s.querySelectorAll("[data-dd-idx]").forEach((l,a)=>l.classList.toggle("is-selected",a===n))}function o(l){let a=i[l];if(a)if(s.hidden=!0,i=[],n=-1,a._isNew){let g=document.querySelector(".setlist-custom-details"),p=document.getElementById("setlist-custom-title");g&&p?(g.open=!0,p.value=a.title,t.value="",document.getElementById("setlist-custom-artist")?.focus()):t.value=""}else t.value="",A(a)}t.addEventListener("input",()=>d(t.value)),t.addEventListener("keydown",l=>{if(s.hidden)return;let a=i.length;l.key==="ArrowDown"?(l.preventDefault(),n=(n+1)%a,u()):l.key==="ArrowUp"?(l.preventDefault(),n=(n-1+a)%a,u()):l.key==="Enter"?(l.preventDefault(),l.stopPropagation(),o(n>=0?n:0)):l.key==="Escape"&&(s.hidden=!0,n=-1)}),s.addEventListener("mousedown",l=>{let a=l.target.closest("[data-dd-idx]");a&&(l.preventDefault(),o(Number(a.dataset.ddIdx)))}),H&&document.removeEventListener("click",H),H=l=>{!t.contains(l.target)&&!s.contains(l.target)&&(s.hidden=!0,n=-1)},document.addEventListener("click",H)}function Bt(){I&&(I(),I=null);let t=document.querySelector(".setlist-items");if(!t)return;let s=null,i=()=>{s&&(s.rows.forEach(o=>{o.style.transform=""}),s.row.classList.remove("is-dragging"),t.classList.remove("is-drag-active"),s.row.removeEventListener("pointermove",n),s.row.removeEventListener("pointerup",d),s.row.removeEventListener("pointercancel",u),s=null)};function n(o){if(!s)return;o.preventDefault();let l=o.clientY-s.startY;if(!s.moved&&Math.abs(l)<3)return;s.moved=!0,s.row.style.transform=`translateY(${l}px)`;let a=s.mids[s.startIdx]+l,g=0;for(let p=0;p<s.mids.length;p++)p!==s.startIdx&&a>s.mids[p]&&g++;g!==s.targetIdx&&(s.targetIdx=g,s.rows.forEach((p,b)=>{if(b===s.startIdx)return;let m=0;s.startIdx<g&&b>s.startIdx&&b<=g?m=-s.rowH:s.startIdx>g&&b>=g&&b<s.startIdx&&(m=s.rowH),p.style.transform=m?`translateY(${m}px)`:""}))}function d(){if(!s)return;let{startIdx:o,targetIdx:l,moved:a}=s;if(i(),!a||l===o)return;let g=e.setlist.items;if(o<g.length){let[p]=g.splice(o,1);g.splice(l,0,p),w(),y()}}function u(){i()}t.addEventListener("pointerdown",o=>{if(s||o.button!=null&&o.button!==0)return;let l=!!o.target.closest(".setlist-drag-handle");if(o.pointerType==="touch"&&!l||o.target.closest("button, a, input, select, textarea"))return;let a=o.target.closest(".setlist-item");if(!a)return;o.preventDefault();let g=Array.from(t.querySelectorAll(".setlist-item")),p=g.indexOf(a);if(p<0)return;let b=g.map($=>{let S=$.getBoundingClientRect();return S.top+S.height/2}),m=a.getBoundingClientRect();s={rows:g,mids:b,startIdx:p,targetIdx:p,startY:o.clientY,rowH:m.height+(parseFloat(getComputedStyle(t).rowGap||getComputedStyle(t).gap)||0),row:a,moved:!1},a.classList.add("is-dragging"),t.classList.add("is-drag-active");try{a.setPointerCapture(o.pointerId)}catch{}a.addEventListener("pointermove",n,{passive:!1}),a.addEventListener("pointerup",d),a.addEventListener("pointercancel",u)}),I=i}function Dt(){let t=X(),s=[];return e.setlist.theme&&s.push(`# ${e.setlist.theme}`,""),t.forEach(i=>{s.push(vt(i))}),s.join(`
`)}function vt(t){let s=String(t?.title||"").trim(),i=String(t?.artist||"").trim(),n=i?`${s} / ${i}`:s;return e.setlist.copyFormat==="timestamp"?`00:00\u3000${n}\u300000:00`:n}async function qt(){let t=Dt();if(!t.trim()){y("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(t),y("\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{y("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}async function Qt(t){let s=X()[t];if(!s){y("\u30B3\u30D4\u30FC\u3059\u308B\u66F2\u304C\u3042\u308A\u307E\u305B\u3093");return}try{await navigator.clipboard.writeText(vt(s)),y("1\u66F2\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F")}catch{y("\u30B3\u30D4\u30FC\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}}function _t(t,s){let i=t.rank===1?"r1":t.rank===2?"r2":t.rank===3?"r3":"",n=t.lastSung?`<span class="last-date">${R(t.lastSung)}</span><span class="badge ${st(t.daysSinceLast)}">${t.daysSinceLast}\u65E5\u524D</span>`:'<span class="last-date">\u5C65\u6B74\u672A\u78BA\u8A8D</span><span class="badge never">\u8981\u78BA\u8A8D</span>',d=j(t.title,s),u=j(t.artist,s),o=et(t,e.songsQuery),l=D(t.key);return`
    <div class="song-row" data-songkey="${r(t.key)}" data-songtitle="${r(t.title)}" data-songartist="${r(t.artist)}" title="\u30AF\u30EA\u30C3\u30AF\u3067\u66F2\u8A73\u7D30\u3092\u8868\u793A">
      <div class="rank ${i}">${t.rank}</div>
      <div class="info">
        <div class="title song-title-line"><span class="song-title-text">${d}</span><button class="fav-btn ${l?"is-active":""}" type="button" data-fav-toggle="${r(t.key)}" aria-label="\u304A\u6C17\u306B\u5165\u308A" aria-pressed="${l?"true":"false"}" title="\u304A\u6C17\u306B\u5165\u308A">${v("heart")}</button></div>
        <button class="artist artist-search-btn" type="button" data-artist-search="${r(t.artist)}">${u}</button>
        <div class="song-meta-line">
          <span class="genre-badge">${r(B(t))}</span>
          ${Rt(t)}
          ${o.map(a=>`<span class="match-badge">${r(a)}\u4E00\u81F4</span>`).join("")}
        </div>
        ${jt(t)}
      </div>
      <div class="song-row-side">
        <div class="count">${t.count}<small>\u56DE</small></div>
        <div class="last">${n}</div>
      </div>
    </div>
  `}function Kt(){let t=c("#setlist-toggle-btn");if(!t)return;let s=e.setlist.items.length;t.setAttribute("aria-expanded",e.setlistExpanded?"true":"false"),t.textContent=e.setlistExpanded?`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u9589\u3058\u308B${s?` (${s})`:""}`:`\u30BB\u30C8\u30EA\u5236\u4F5C\u3092\u958B\u304F${s?` (${s})`:""}`}function Rt(t){return[...(t.seasonTags||[]).map(i=>({tag:i,type:"season"})),...(t.moodTags||[]).map(i=>({tag:i,type:"mood"})),...e.singerMode?(t.singerTags||[]).map(i=>({tag:i,type:"tag"})):[]].slice(0,e.songsView==="compact"?2:5).map(({tag:i,type:n})=>`
    <button class="tag-badge tag-click" type="button" data-tag-type="${n}" data-tag-search="${r(i)}">${r(i)}</button>
  `).join("")}function jt(t){if(!e.singerMode)return"";let s=`<button class="setlist-add-btn" type="button" data-setlist-action="add" data-songkey="${r(t.key)}">${v("plus")} \u30BB\u30C8\u30EA</button>`;if(!e.data?.stats?.keyPublished)return`<div class="song-key-line song-key-actions">${s}</div>`;let i=String(t.displayKey||"").trim();return i?`
    <div class="song-key-line song-key-actions">
      <button type="button" class="song-key-badge" title="\u7D71\u5408\u96C6\u8A08 T/U\u5217\u306E\u30AD\u30FC">
        <span>\u30AD\u30FC</span><strong>${r(i)}</strong>
      </button>
      ${s}
    </div>
  `:`<div class="song-key-line song-key-actions"><span class="song-key-empty">\u30AD\u30FC\u672A\u767B\u9332</span>${s}</div>`}export{Wt as renderSongs};
