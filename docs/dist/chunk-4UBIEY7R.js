import{e as X}from"./chunk-AW5KTZNU.js";import{F as tt,H as M,I as et,J as N,K as V,P as w,a as h,c as l}from"./chunk-GPIKXWRQ.js";var vt="sh1an-playlists",ht="sh1an-music-videos-cache-v2",yt="sh1an-song-requests-cache-v1",$t="sh1an-song-requests-local-v1",st=24,y="all-streams",j=1,ot="newest",A="grid",v=null,H=null,K=!1,D="",at=null,L=!1,q=new Set,g=null,Y=!1,k="";function _(){try{return JSON.parse(localStorage.getItem(vt)||"[]")}catch{return[]}}function C(t){try{localStorage.setItem(vt,JSON.stringify(t))}catch{}}function wt(t){let e=_(),s={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return e.unshift(s),C(e),s}function Bt(t){C(_().filter(e=>e.id!==t))}function jt(t,e){let s=_(),a=s.find(n=>n.id===t);return!a||a.streams.includes(e)?!1:(a.streams.push(e),C(s),!0)}function Dt(t,e){let s=_(),a=s.find(n=>n.id===t);a&&(a.streams=a.streams.filter(n=>n!==e),C(s))}function J(t){return _().some(e=>e.streams.includes(t))}function T(){let t=h("#panel-playlists");if(!t)return;let e=X.data?.streams||[];if(y==="my-playlists"&&v===null){let n=U();n.length?v=n:qt().then(r=>{v===null&&(v=Array.isArray(r)?r:[]),y==="my-playlists"&&T()})}let s=document.activeElement?.id==="pl-music-search",a=null;if(s){try{a=document.activeElement.selectionStart}catch{}D=document.activeElement.value||""}if(t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${y==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${y==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${y==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${y==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${y==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${y==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${_().length}</span>
        </button>
        <button class="pl-subtab${y==="requests"?" active":""}"
          data-pl-subtab="requests" role="tab"
          aria-selected="${y==="requests"}">
          \u30EA\u30AF\u30A8\u30B9\u30C8
          <span class="pl-subtab-count">${g?.length??""}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${y==="all-streams"?_t(e,j):y==="music"?Ht():y==="my-playlists"?pe(e):At()}
      </div>
    </div>
  `,y==="music"&&Yt(),y==="requests"&&ee(),s){let n=h("#pl-music-search");if(n&&(n.focus(),a!==null))try{n.setSelectionRange(a,a)}catch{}}t.onclick=n=>{let r=n.target.closest("[data-pl-subtab]");if(r){y=r.dataset.plSubtab,y==="all-streams"&&(j=1),T();return}let i=n.target.closest("[data-pl-sort]");if(i){ot=i.dataset.plSort,j=1,pt(e);return}let c=n.target.closest("[data-pl-page]");if(c&&!c.disabled){j=Number(c.dataset.plPage),pt(e);return}let u=n.target.closest("[data-music-view]:not([data-music-select-toggle])");if(u){A=u.dataset.musicView,z();return}if(n.target.closest("[data-music-select-toggle]")){L=!L,L||q.clear(),rt();return}let d=n.target.closest("[data-mv-select]");if(d){let f=d.dataset.mvSelect,o=!q.has(f);o?q.add(f):q.delete(f);let m=d.classList.contains("mv-list-row")?d:d.closest(".mv-card");m&&m.classList.toggle("is-selected",o);let $=m?.querySelector(".mv-card-checkbox, .mv-list-checkbox");$&&($.innerHTML=o?w("check"):""),d.setAttribute("aria-pressed",String(o)),Ft();return}if(n.target.closest("[data-music-select-all]")){G(v||[]).forEach(({v:f})=>q.add(f.id)),rt();return}if(n.target.closest("[data-music-select-clear]")){q.clear(),rt();return}if(n.target.closest("[data-music-select-add]")){if(!q.size)return;let f=[...v||[]].filter(o=>q.has(o.id)).map(o=>"mv:"+o.id);bt(f);return}let b=n.target.closest("[data-playlist-add-mv]");if(b){let f=b.dataset.playlistAddMv,o=b.dataset.streamTitle||"";bt("mv:"+f,o);return}let p=n.target.closest("[data-mv-watch]");if(p&&v?.length){if(n.metaKey||n.ctrlKey||n.shiftKey||n.button===1)return;n.preventDefault();let f=v[Number(p.dataset.mvWatch)];f?.url&&window.__openStreamViewer?.({url:f.url,title:f.title,isMv:!0});return}y==="my-playlists"&&fe(n,e),y==="requests"&&se(n)},t.oninput=n=>{let r=n.target.closest("#pl-music-search");r&&(D=r.value||"",clearTimeout(at),at=setTimeout(z,100))},t.oncompositionend=n=>{let r=n.target.closest("#pl-music-search");r&&(D=r.value||"",clearTimeout(at),z())},t.addEventListener("error",n=>{let r=n.target;if(!r.classList.contains("pl-sg-thumb"))return;let i=r.dataset.fallback;i&&r.src!==i&&(r.src=i,delete r.dataset.fallback)},!0),ve()}var Ot=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function Vt(t,e){let s=t.slice();return e==="oldest"?s.reverse():e==="most-songs"?s.sort((a,n)=>(n.songs?.length??0)-(a.songs?.length??0)):e==="fewest-songs"?s.sort((a,n)=>(a.songs?.length??0)-(n.songs?.length??0)):s}function _t(t,e){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let s=Vt(t,ot),a=s.length,n=Math.max(1,Math.ceil(a/st)),r=Math.min(Math.max(1,e),n),i=(r-1)*st,u=s.slice(i,i+st).map(p=>{let f=M(p),o=N(p.url),m=V(p.url),$=p.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${l(f)}"
        title="${l(p.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${o?`<img class="pl-sg-thumb" src="${l(o)}"
                data-fallback="${l(m)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${$}<span class="pl-sg-badge-unit">\u66F2</span></span>
          <span class="pl-sg-add${J(f)?" is-saved":""}" role="button" tabindex="0"
            aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"
            data-playlist-add="${l(f)}" data-stream-title="${l(p.title||"\u914D\u4FE1")}"
            title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">${dt}</span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${l(p.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${l(tt(p.date)||"")}</span>
        </div>
      </button>`}).join(""),d=n>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${r-1}"
        ${r<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${r} / ${n}</span>
      <button class="pl-page-btn" data-pl-page="${r+1}"
        ${r>=n?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${Ot.map(p=>`
        <button class="pl-sort-opt${ot===p.key?" active":""}"
          data-pl-sort="${p.key}" type="button">${p.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${u}</div>${d}`}function pt(t){let e=h("#pl-subtab-body");if(!e){T();return}e.innerHTML=_t(t,j);let s=h("#panel-playlists");s&&s.addEventListener("error",a=>{let n=a.target;if(!n.classList.contains("pl-sg-thumb"))return;let r=n.dataset.fallback;r&&n.src!==r&&(n.src=r,delete n.dataset.fallback)},{once:!0,capture:!0}),e.scrollIntoView({behavior:"smooth",block:"start"})}function Ht(){if(v===null){let t=U();t.length&&(v=t)}return ct(v||[])}async function Yt(){if(v!==null){nt();return}v=U(),K=!0,nt();let t=await qt();K=!1,v=Array.isArray(t)?t:[],nt()}function nt(){if(y!=="music")return;let t=h("#pl-subtab-body");t&&(h("#pl-music-search")?z():t.innerHTML=ct(v||[]))}function ct(t){return zt(t)+`<div id="pl-music-results">${St(t)}</div>`}function zt(t){let e=ut(),a=G(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${l(e)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${a}${a===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${A==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${A==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${A==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
        <button class="pl-music-view-btn pl-music-select-toggle${L?" active":""}" data-music-select-toggle="1" type="button" ${a?"":"disabled"} title="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">\u2611 \u9078\u629E</button>
      </div>
    </div>
    ${L?Kt():""}`}function Kt(){let t=q.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>${w("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function St(t){let e=G(t);return K&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?e.length?A==="grid"?mt(e):A==="list"?Wt(e):A==="category"?Zt(e):mt(e):K?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${l(ut())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function ut(){let t=h("#pl-music-search");return t&&(D=t.value||""),D}function rt(){let t=h("#pl-subtab-body");t&&(t.innerHTML=ct(v||[]))}function Ft(){let t=q.size,e=h("#pl-music-selcount");e&&(e.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let s=document.querySelector("[data-music-select-add]");s&&(s.disabled=!t,s.innerHTML=`${w("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let a=document.querySelector("[data-music-select-clear]");a&&(a.disabled=!t)}function z(){let t=v||[],e=h(".pl-music-count");if(e){let a=G(t).length;e.textContent=`${a}${a===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(a=>{a.classList.toggle("active",a.dataset.musicView===A)});let s=h("#pl-music-results");s&&(s.innerHTML=St(t))}function U(){try{let t=JSON.parse(localStorage.getItem(ht)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Jt(t){try{localStorage.setItem(ht,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function qt(){return H||(H=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let e=Array.isArray(t?.videos)?t.videos:[];return Jt(e),e}).catch(()=>v||U()),H)}function kt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function Ut(t){return kt(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function Gt(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean),a=Q(t).label;return kt([e,...s,t.originalArtist,t.character,t.type,a].filter(Boolean).join(" "))}function G(t){let e=Ut(ut()),s=t.map((a,n)=>({v:a,i:n}));return e.length?s.filter(({v:a})=>{let n=Gt(a);return e.every(r=>n.includes(r))}):s}function Q(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function F(t){return t.publishedAt?String(t.publishedAt).replaceAll("-","/"):"\u516C\u958B\u65E5\u672A\u767B\u9332"}function xt(t,e){let s=N(t.url),a=V(t.url),{label:n,cls:r}=Q(t),i=J("mv:"+t.id);if(L){let c=q.has(t.id);return`
    <div class="mv-card mv-card--select${c?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${l(t.id)}" aria-pressed="${c}">
        ${s?`<img class="mv-card-thumb" src="${l(s)}" data-fallback="${l(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${c?w("check"):""}</span>
        <span class="mv-type-badge ${r}">${n}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${l(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${l(F(t))}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <a class="mv-card-thumb-btn" href="${l(t.url||"#")}" target="_blank" rel="noopener"
        data-mv-watch="${e}" aria-label="\u52D5\u753B\u30D3\u30E5\u30FC\u30EF\u30FC\u3067\u898B\u308B">
        ${s?`<img class="mv-card-thumb" src="${l(s)}" data-fallback="${l(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">${w("play")}</span>
        <span class="mv-type-badge ${r}">${n}</span>
      </a>
      <button class="pl-sg-add mv-add-btn mv-add-btn--overlay${i?" is-saved":""}" type="button"
        data-playlist-add-mv="${l(t.id)}"
        data-stream-title="${l(t.title||"")}"
        aria-label="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}"
        title="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${dt}</button>
      <div class="mv-card-info">
        <span class="mv-card-title">${l(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${l(F(t))}</span>
      </div>
    </div>`}function Qt(t,e){let s=N(t.url),a=V(t.url),{label:n,cls:r,sub:i}=Q(t),c=J("mv:"+t.id);if(L){let u=q.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${u?" is-selected":""}" data-mv-select="${l(t.id)}" role="button" aria-pressed="${u}">
      <span class="mv-list-checkbox">${u?w("check"):""}</span>
      <span class="mv-list-thumb">
        ${s?`<img src="${l(s)}" data-fallback="${l(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </span>
      <div class="mv-list-info">
        <span class="mv-list-title">${l(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${l(F(t))}</span>
      </div>
      <span class="mv-type-badge ${r}">${n}</span>
    </div>`}return`
    <div class="mv-list-row">
      <a class="mv-list-thumb" href="${l(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
        ${s?`<img src="${l(s)}" data-fallback="${l(a)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </a>
      <div class="mv-list-info">
        <span class="mv-list-title">${l(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${l(F(t))}</span>
      </div>
      <span class="mv-type-badge ${r}">${n}</span>
      <button class="mv-add-btn${c?" is-saved":""}" type="button"
        data-playlist-add-mv="${l(t.id)}"
        data-stream-title="${l(t.title||"")}"
        title="${c?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${w("bookmark")}</button>
    </div>`}function mt(t){return`<div class="mv-grid">${t.map(({v:e,i:s})=>xt(e,s)).join("")}</div>`}function Wt(t){return`<div class="mv-list">${t.map(({v:e,i:s})=>Qt(e,s)).join("")}</div>`}function Zt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:s,label:a})=>({label:a,items:t.filter(({v:n})=>n.type===s)})).filter(({items:s})=>s.length>0).map(({label:s,items:a})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${s} <span class="mv-cat-count">${a.length}</span></h3>
        <div class="mv-grid">${a.map(({v:n,i:r})=>xt(n,r)).join("")}</div>
      </div>`).join("")}
    </div>`}function _e(){return v||[]}function W(t){if(!t?.startsWith("mv:"))return null;let e=t.slice(3);return(v||[]).find(s=>s.id===e)||null}function Et(t,e){return(t.streams||[]).map(s=>{if(s.startsWith("mv:")){let n=W(s);return n?.url?et(n.url):""}let a=e.find(n=>M(n)===s);return a?.url?et(a.url):""}).filter(Boolean)}function Xt(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let e;if(t.length===1)e=`https://www.youtube.com/watch?v=${t[0]}`;else{let s=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),e=`https://www.youtube.com/watch_videos?video_ids=${s.join(",")}`}window.open(e,"_blank","noopener noreferrer")}function At(){let t=g||R(),e=k?`<p class="song-request-status is-error">${l(k)}</p>`:Y?'<p class="song-request-status">\u5171\u6709\u30EA\u30B9\u30C8\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>':"";return`
    <section class="song-request-board" aria-label="\u5171\u6709\u697D\u66F2\u30EA\u30AF\u30A8\u30B9\u30C8">
      <div class="song-request-head">
        <div>
          <p class="song-request-kicker">SHARED REQUEST</p>
          <h3>\u6B4C\u3063\u3066\u307B\u3057\u3044\u66F2</h3>
        </div>
        <p class="song-request-copy">\u66F2\u540D\u3060\u3051\u3067\u3082\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u307B\u304B\u306E\u4EBA\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u306F\u300C\u81EA\u5206\u3082\u8074\u304D\u305F\u3044\u300D\u3067\u53C2\u52A0\u3067\u304D\u307E\u3059\u3002</p>
      </div>
      <form class="song-request-form" id="song-request-form">
        <label>
          <span>SONG TITLE</span>
          <input id="song-request-title" name="title" maxlength="120" required placeholder="\u4F8B\uFF1A\u6708\u5149">
        </label>
        <label>
          <span>ARTIST</span>
          <input id="song-request-artist" name="artist" maxlength="120" placeholder="\u4F8B\uFF1A\u30AD\u30BF\u30CB\u30BF\u30C4\u30E4 \xD7 \u306F\u308B\u307E\u304D\u3054\u306F\u3093">
        </label>
        <label>
          <span>NOTE</span>
          <textarea id="song-request-note" name="note" maxlength="240" rows="3" placeholder="\u304A\u3059\u3059\u3081\u7406\u7531\u30FB\u8074\u304D\u305F\u3044\u96F0\u56F2\u6C17\u306A\u3069"></textarea>
        </label>
        <label>
          <span>NAME</span>
          <input id="song-request-name" name="requesterName" maxlength="40" placeholder="\u4EFB\u610F">
        </label>
        <button class="song-request-submit" type="button" data-song-request-submit>
          ${w("plus")} \u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u8FFD\u52A0
        </button>
      </form>
      ${e}
      <div class="song-request-list" id="song-request-list">
        ${te(t)}
      </div>
    </section>`}function te(t){return t.length?t.map(e=>{let s=Mt(e.id),a=e.status||"unregistered";return`
      <article class="song-request-item">
        <div class="song-request-rank">
          <span>${Number(e.voteCount||0)}</span>
          <small>votes</small>
        </div>
        <div class="song-request-main">
          <h4>${l(e.title||"\u2014")}</h4>
          <p>${l(e.artist||"\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u672A\u6307\u5B9A")}</p>
          ${e.note?`<blockquote>${l(e.note)}</blockquote>`:""}
          <div class="song-request-meta">
            <span>${l(e.requesterName||"\u533F\u540D")}</span>
            <span>${l(de(e.createdAt))}</span>
          </div>
        </div>
        <button class="song-request-vote${s?" is-voted":""}" type="button"
          data-song-request-vote="${l(String(e.id))}" ${s?"disabled":""}>
          ${s?"\u53C2\u52A0\u6E08\u307F":"\u81EA\u5206\u3082\u8074\u304D\u305F\u3044"}
        </button>
        <div class="song-request-tools">
          <div class="song-request-status-tabs" aria-label="\u6B4C\u5531\u30B9\u30C6\u30FC\u30BF\u30B9">
            ${lt(e.id,a,"singable","\u6B4C\u3048\u308B")}
            ${lt(e.id,a,"practicing","\u7DF4\u7FD2\u4E2D")}
            ${lt(e.id,a,"unregistered","\u672A\u767B\u9332")}
          </div>
          <button class="song-request-mini" type="button" data-song-request-edit="${l(String(e.id))}">\u7DE8\u96C6</button>
          <button class="song-request-mini danger" type="button" data-song-request-delete="${l(String(e.id))}">\u524A\u9664</button>
        </div>
      </article>`}).join(""):`
      <div class="pl-empty-state song-request-empty">
        <p>\u307E\u3060\u5171\u6709\u30EA\u30AF\u30A8\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u6700\u521D\u306E1\u66F2\u3092\u8FFD\u52A0\u3057\u3066\u3001\u6B4C\u3063\u3066\u307B\u3057\u3044\u66F2\u30EA\u30B9\u30C8\u3092\u80B2\u3066\u3089\u308C\u307E\u3059</p>
      </div>`}function lt(t,e,s,a){return`<button class="song-request-status-btn${e===s?" active":""}" type="button"
    data-song-request-status="${l(String(t))}" data-status="${s}">${a}</button>`}async function ee(){if(!Y){Y=!0,k="",I();try{let t=await ie();g=t,O(t)}catch{g=B(),k=g.length?"\u5171\u6709API\u306B\u63A5\u7D9A\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u7AEF\u672B\u306E\u4EEE\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059":"\u5171\u6709API\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3002\u30C7\u30D7\u30ED\u30A4\u74B0\u5883\u307E\u305F\u306FD1\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044"}finally{Y=!1,I()}}}function I(){if(y!=="requests")return;let t=h("#pl-subtab-body");t&&(t.innerHTML=At())}async function se(t){let e=t.target.closest("[data-song-request-submit]");if(e){await ae(e);return}let s=t.target.closest("[data-song-request-vote]");if(s&&!s.disabled){await ne(s);return}let a=t.target.closest("[data-song-request-status]");if(a){await Tt(a.dataset.songRequestStatus,{status:a.dataset.status});return}let n=t.target.closest("[data-song-request-edit]");if(n){await re(Number(n.dataset.songRequestEdit));return}let r=t.target.closest("[data-song-request-delete]");r&&await le(Number(r.dataset.songRequestDelete))}async function ae(t){let e=h("#song-request-form"),s=h("#song-request-title")?.value?.trim()||"",a=h("#song-request-artist")?.value?.trim()||"",n=h("#song-request-note")?.value?.trim()||"",r=h("#song-request-name")?.value?.trim()||"";if(!s){k="\u66F2\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",I(),h("#song-request-title")?.focus();return}t.disabled=!0,t.textContent="\u8FFD\u52A0\u4E2D\u2026";try{g=[await oe({title:s,artist:a,note:n,requesterName:r}),...g||R()].sort((c,u)=>(u.voteCount||0)-(c.voteCount||0)||String(u.createdAt).localeCompare(String(c.createdAt))),O(g),k="",e?.reset()}catch{let c=ue({title:s,artist:a,note:n,requesterName:r});g=[c,...B().filter(u=>u.id!==c.id)],k="\u5171\u6709API\u306B\u63A5\u7D9A\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u7AEF\u672B\u306E\u4EEE\u30EA\u30AF\u30A8\u30B9\u30C8\u3068\u3057\u3066\u4FDD\u5B58\u3057\u307E\u3057\u305F"}finally{I()}}async function ne(t){let e=Number(t.dataset.songRequestVote);if(!(!e||Mt(e))){t.disabled=!0,t.textContent="\u53CD\u6620\u4E2D\u2026";try{let s=await ce(e);ft(e),g=(g||R()).map(a=>a.id===e?s:a).sort((a,n)=>(n.voteCount||0)-(a.voteCount||0)||String(n.createdAt).localeCompare(String(a.createdAt))),O(g),k=""}catch{ft(e),g=(g||B()).map(a=>a.id===e?{...a,voteCount:Number(a.voteCount||0)+1}:a),Z(g),k="\u5171\u6709API\u306B\u63A5\u7D9A\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u7AEF\u672B\u4E0A\u3067\u6295\u7968\u3092\u53CD\u6620\u3057\u307E\u3057\u305F"}finally{I()}}}async function re(t){let e=(g||R()).find(n=>Number(n.id)===Number(t));if(!e)return;let s=prompt("\u30EA\u30AF\u30A8\u30B9\u30C8\u66F2",e.title||"");if(s===null)return;let a=prompt("\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u540D",e.artist||"");a!==null&&await Tt(t,{title:s,artist:a})}async function le(t){let e=(g||R()).find(s=>Number(s.id)===Number(t));if(!(!e||!confirm(`\u300C${e.title}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`))){try{await fetch(`/api/song-requests/${encodeURIComponent(t)}`,{method:"DELETE"}).then(s=>{if(!s.ok)throw new Error(`delete ${s.status}`)})}catch{Z(B().filter(a=>Number(a.id)!==Number(t))),k="\u5171\u6709API\u306B\u63A5\u7D9A\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u7AEF\u672B\u4E0A\u3067\u524A\u9664\u3057\u307E\u3057\u305F"}g=(g||R()).filter(s=>Number(s.id)!==Number(t)),O(g),I()}}async function Tt(t,e){try{let s=await fetch(`/api/song-requests/${encodeURIComponent(t)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!s.ok)throw new Error(`update ${s.status}`);let a=await s.json();g=(g||R()).map(n=>Number(n.id)===Number(t)?a.item:n),O(g),k=""}catch{g=(g||B()).map(a=>Number(a.id)===Number(t)?{...a,...e}:a),Z(g),k="\u5171\u6709API\u306B\u63A5\u7D9A\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u3053\u306E\u7AEF\u672B\u4E0A\u3067\u5909\u66F4\u3057\u307E\u3057\u305F"}I()}async function ie(){let t=await fetch("/api/song-requests?limit=80",{cache:"no-store"});if(!t.ok)throw new Error(`song-requests ${t.status}`);let e=await t.json();return Array.isArray(e?.items)?e.items:[]}async function oe(t){let e=await fetch("/api/song-requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error(`song-requests ${e.status}`);return(await e.json()).item}async function ce(t){let e=await fetch(`/api/song-requests/${encodeURIComponent(t)}/vote`,{method:"POST"});if(!e.ok)throw new Error(`song-requests vote ${e.status}`);return(await e.json()).item}function R(){try{let t=JSON.parse(localStorage.getItem(yt)||"null");return Array.isArray(t?.items)?t.items:[]}catch{return[]}}function O(t){try{localStorage.setItem(yt,JSON.stringify({items:t,cachedAt:Date.now()}))}catch{}}function B(){try{return JSON.parse(localStorage.getItem($t)||"[]")}catch{return[]}}function Z(t){try{localStorage.setItem($t,JSON.stringify(t))}catch{}}function ue(t){let e={id:Date.now(),title:t.title,artist:t.artist||"",note:t.note||null,requesterName:t.requesterName||null,status:"unregistered",voteCount:1,createdAt:new Date().toISOString()},s=[e,...B()];return Z(s),e}function Ct(t){return`sh1an-song-request-voted:${t}`}function Mt(t){try{return localStorage.getItem(Ct(t))==="1"}catch{return!1}}function ft(t){try{localStorage.setItem(Ct(t),"1")}catch{}}function de(t){if(!t)return"";let e=new Date(t);return Number.isNaN(e.getTime())?String(t).slice(0,10):`${e.getFullYear()}/${String(e.getMonth()+1).padStart(2,"0")}/${String(e.getDate()).padStart(2,"0")}`}function pe(t){let e=_();return e.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${e.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">${w("plus")} \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${e.map(s=>me(s,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u681E\u30DC\u30BF\u30F3</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">${w("plus")} \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function me(t,e){let s=t.streams.map(u=>{let d=u.startsWith("mv:"),b=d?W(u):null;return{skey:u,isMv:d,mv:b,stream:d?null:e.find(p=>M(p)===u)}}),a=s.find(({stream:u,mv:d})=>u?.url||d?.url)?.stream?.url||s.find(({mv:u})=>u?.url)?.mv?.url,n=a?`<img class="pl-card-cover" src="${l(N(a))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",r=s.length,i=s.map(({skey:u,isMv:d,mv:b,stream:p})=>{let f=l(t.id+"|:|"+u),o='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',m=`<button class="pl-rm-btn" data-pl-rm-stream="${f}" type="button" title="\u524A\u9664">${w("close")}</button>`;if(d){if(!b)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${l(u)}" data-pl-id="${l(t.id)}">${o}
          <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
          <div class="pl-stream-actions">${m}</div>
        </div>`;let{label:$,sub:E}=Q(b),S=b.type||"original",x=(v||[]).indexOf(b);return`
        <div class="pl-stream-row" data-pl-skey="${l(u)}" data-pl-id="${l(t.id)}">
          ${o}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${S}">${$}</span></span>
            <span class="pl-stream-title">${l(b.title||"\u2014")}</span>
            <span class="pl-stream-meta">${l(E)}</span>
          </div>
          <div class="pl-stream-actions">
            ${x>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${x}" type="button" title="\u518D\u751F">${w("play")}</button>`:""}
            ${m}
          </div>
        </div>`}return p?`
      <div class="pl-stream-row" data-pl-skey="${l(u)}" data-pl-id="${l(t.id)}">
        ${o}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${tt(p.date)}</span>
          <span class="pl-stream-title">${l(p.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${p.index}\u67A0 \xB7 ${p.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${p.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${l(u)}"
                type="button" title="\u518D\u751F">${w("play")}</button>`:""}
          ${m}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${l(u)}" data-pl-id="${l(t.id)}">${o}
        <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
        <div class="pl-stream-actions">${m}</div>
      </div>`}).join(""),c=Et(t,e);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${n?`<div class="pl-card-cover-wrap">${n}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${l(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${l(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${l(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${i||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${c.length||t.streams.length?`
      <div class="pl-card-footer">
        ${c.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${l(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${c.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${l(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">${w("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function fe(t,e){if(t.target.closest("#pl-new-btn")){be();return}let s=t.target.closest("[data-pl-share]");if(s){let d=_().find(m=>m.id===s.dataset.plShare);if(!d)return;let b=JSON.stringify({n:d.name,s:d.streams}),p=btoa(String.fromCharCode(...new TextEncoder().encode(b))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),f=`${location.origin}${location.pathname}?pl=${p}`,o=m=>{s.innerHTML=m?`${w("check")} \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F`:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{s.innerHTML=`${w("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709`},1600)};navigator.clipboard?.writeText(f).then(()=>o(!0)).catch(()=>{try{let m=document.createElement("textarea");m.value=f,m.style.cssText="position:fixed;opacity:0;",document.body.appendChild(m),m.select();let $=document.execCommand("copy");m.remove(),o($)}catch{o(!1)}});return}let a=t.target.closest("[data-pl-del]");if(a){let d=a.dataset.plDel,b=_().find(p=>p.id===d);b&&confirm(`\u300C${b.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(Bt(d),T());return}let n=t.target.closest("[data-pl-rm-stream]");if(n){let[d,b]=n.dataset.plRmStream.split("|:|");Dt(d,b),T();return}let r=t.target.closest("[data-pl-play-stream]");if(r){let d=r.closest(".pl-stream-row");if(d&&gt(d,e))return;let b=r.dataset.plPlayStream,p=e.find(f=>M(f)===b);p?.url&&window.__openStreamViewer?.(p);return}let i=t.target.closest("[data-play-music-pl]");if(i){let d=i.closest(".pl-stream-row");if(d&&gt(d,e))return;if(v?.length){let b=Number(i.dataset.playMusicPl);import("./chunk-4ON2M4WS.js").then(p=>p.playMusicQueue(v,b))}return}let c=t.target.closest("[data-pl-rename]");if(c){let d=c.dataset.plRename,b=_().find(f=>f.id===d);if(!b)return;let p=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",b.name)?.trim();if(p){let f=_(),o=f.find(m=>m.id===d);o&&(o.name=p,C(f),T())}return}let u=t.target.closest("[data-pl-yt-share]");if(u){let d=u.dataset.plYtShare,b=_().find(p=>p.id===d);if(!b)return;Xt(Et(b,e));return}}function be(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(wt(t),T())}var dt='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';function ge(t){let e=X.data?.streams||[];for(let s of t.streams||[])if(s.startsWith("mv:")){let a=W(s);if(a?.url)return a.url}else{let a=e.find(n=>M(n)===s);if(a?.url)return a.url}return""}function bt(t,e,s={}){let a=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!a.length)return;let n=a.length>1,r=()=>{try{s.onChange?.(a.some(o=>J(o)))}catch{}},i=h("#pl-add-modal");i||(i=document.createElement("div"),i.id="pl-add-modal",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i));let c=o=>a.every(m=>(o.streams||[]).includes(m)),u=o=>{let m=c(o),$=ge(o),E=$?N($):"";return`
      <button class="pl-modal-item${m?" is-saved":""}" data-pl-add="${l(o.id)}"
        type="button" role="checkbox" aria-checked="${m}">
        <span class="pl-modal-item-cover">
          ${E?`<img src="${l(E)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="pl-modal-item-cover--empty">\u266A</span>'}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${l(o.name)}</span>
          <span class="pl-modal-item-count">${o.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${m?" is-saved":""}" aria-hidden="true">${dt}</span>
      </button>`},d=()=>{let o=_();return o.length?o.map(u).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},b=n?`${a.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:e||"\u914D\u4FE1",p=()=>{i.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">${w("close")}</button>
        </div>
        <div class="pl-modal-sub">${l(b)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${d()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">${w("plus")}</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,i.hidden=!1,i.querySelector("#pl-modal-close").addEventListener("click",f),i.querySelector("#pl-modal-backdrop").addEventListener("click",f),i.querySelector("#pl-modal-new").addEventListener("click",()=>{let o=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!o)return;let m=wt(o);a.forEach(S=>jt(m.id,S)),it(n?`\u300C${o}\u300D\u306B${a.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${o}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let $=i.querySelector("#pl-modal-list");$?.querySelector(".pl-modal-empty")&&($.innerHTML=""),$&&$.insertAdjacentHTML("afterbegin",u(_().find(S=>S.id===m.id))),r()}),i.querySelector("#pl-modal-list").addEventListener("click",o=>{let m=o.target.closest("[data-pl-add]");if(!m)return;let $=m.dataset.plAdd,E=_(),S=E.find(x=>x.id===$);S&&(Array.isArray(S.streams)||(S.streams=[]),c(S)?(a.forEach(x=>{S.streams=S.streams.filter(Pt=>Pt!==x)}),C(E),it(n?`${a.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(a.forEach(x=>{S.streams.includes(x)||S.streams.push(x)}),C(E),it(n?`\u300C${S.name}\u300D\u306B${a.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${S.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),m.outerHTML=u(_().find(x=>x.id===$)),r())})},f=()=>{i.hidden=!0};p(),document.addEventListener("keydown",function o(m){m.key==="Escape"&&(f(),document.removeEventListener("keydown",o))})}function it(t){let e=h("#pl-toast");e||(e=document.createElement("div"),e.id="pl-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("pl-toast--show"),clearTimeout(e._timer),e._timer=setTimeout(()=>e.classList.remove("pl-toast--show"),2500)}function gt(t,e){let s=_().find(r=>r.id===t.dataset.plId);if(!s||!window.__playMyListInViewer)return!1;let a=[];for(let r of s.streams)if(r.startsWith("mv:")){let i=W(r);i?.url&&a.push({kind:"mv",key:r,video:i})}else{let i=e.find(c=>M(c)===r);i?.url&&a.push({kind:"stream",key:r,stream:i})}if(!a.length)return!1;let n=a.findIndex(r=>r.key===t.dataset.plSkey);return n<0&&(n=0),window.__playMyListInViewer({name:s.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:a,idx:n}),!0}function ve(){if(y!=="my-playlists")return;let t=h("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(e=>{e.addEventListener("pointerdown",he,{passive:!1})})}var P=null;function he(t){if(P)return;let e=t.target.closest(".pl-drag-handle");if(!e)return;let s=e.closest(".pl-stream-row"),a=e.closest(".pl-stream-list");if(!s||!a)return;t.preventDefault();let n=Array.from(a.querySelectorAll(".pl-stream-row")),r=n.indexOf(s);if(r<0)return;let i=n.map(u=>{let d=u.getBoundingClientRect();return d.top+d.height/2}),c=s.getBoundingClientRect();P={list:a,row:s,rows:n,mids:i,startIdx:r,targetIdx:r,startY:t.clientY,rowH:c.height+(parseFloat(getComputedStyle(a).rowGap||getComputedStyle(a).gap)||0),plId:s.dataset.plId,moved:!1},s.classList.add("is-dragging"),a.classList.add("is-drag-active");try{s.setPointerCapture(t.pointerId)}catch{}s.addEventListener("pointermove",Lt,{passive:!1}),s.addEventListener("pointerup",It),s.addEventListener("pointercancel",Rt)}function Lt(t){let e=P;if(!e)return;t.preventDefault();let s=t.clientY-e.startY;if(!e.moved&&Math.abs(s)<3)return;e.moved=!0,e.row.style.transform=`translateY(${s}px)`;let a=e.mids[e.startIdx]+s,n=0;for(let r=0;r<e.mids.length;r++)r!==e.startIdx&&a>e.mids[r]&&n++;n!==e.targetIdx&&(e.targetIdx=n,e.rows.forEach((r,i)=>{if(i===e.startIdx)return;let c=0;e.startIdx<n&&i>e.startIdx&&i<=n?c=-e.rowH:e.startIdx>n&&i>=n&&i<e.startIdx&&(c=e.rowH),r.style.transform=c?`translateY(${c}px)`:""}))}function It(){let t=P;if(!t)return;let{plId:e,startIdx:s,targetIdx:a,moved:n}=t;if(Nt(),!n||a===s)return;let r=_(),i=r.find(c=>c.id===e);if(i&&s<i.streams.length){let c=i.streams.slice(),[u]=c.splice(s,1);c.splice(a,0,u),i.streams=c,C(r)}T()}function Rt(){Nt()}function Nt(){let t=P;t&&(t.rows.forEach(e=>{e.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",Lt),t.row.removeEventListener("pointerup",It),t.row.removeEventListener("pointercancel",Rt),P=null)}export{_ as a,wt as b,Bt as c,jt as d,Dt as e,J as f,T as g,_e as h,W as i,bt as j};
