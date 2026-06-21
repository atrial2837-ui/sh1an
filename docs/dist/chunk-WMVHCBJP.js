import{e as F}from"./chunk-AW5KTZNU.js";import{F as K,H as E,I as W,J as C,K as H,P as h,a as _,c as r}from"./chunk-Y7E4FXHW.js";var it="sh1an-playlists",ct="sh1an-music-videos-cache-v2",G=24,w="all-streams",B=1,X="newest",M="grid",v=null,V=null,j=!1,P="",J=null,A=!1,S=new Set;function y(){try{return JSON.parse(localStorage.getItem(it)||"[]")}catch{return[]}}function T(t){try{localStorage.setItem(it,JSON.stringify(t))}catch{}}function ot(t){let s=y(),e={id:String(Date.now()),name:t.trim(),createdAt:new Date().toISOString(),streams:[]};return s.unshift(e),T(s),e}function wt(t){T(y().filter(s=>s.id!==t))}function _t(t,s){let e=y(),l=e.find(a=>a.id===t);return!l||l.streams.includes(s)?!1:(l.streams.push(s),T(e),!0)}function St(t,s){let e=y(),l=e.find(a=>a.id===t);l&&(l.streams=l.streams.filter(a=>a!==s),T(e))}function Y(t){return y().some(s=>s.streams.includes(t))}function L(){let t=_("#panel-playlists");if(!t)return;let s=F.data?.streams||[];if(w==="my-playlists"&&v===null){let a=q();a.length?v=a:pt().then(n=>{v===null&&(v=Array.isArray(n)?n:[]),w==="my-playlists"&&L()})}let e=document.activeElement?.id==="pl-music-search",l=null;if(e){try{l=document.activeElement.selectionStart}catch{}P=document.activeElement.value||""}if(t.innerHTML=`
    <div class="pl-wrap">
      <nav class="pl-subtabs" role="tablist" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u30B5\u30D6\u30BF\u30D6">
        <button class="pl-subtab${w==="all-streams"?" active":""}"
          data-pl-subtab="all-streams"  role="tab"
          aria-selected="${w==="all-streams"}">\u6B4C\u67A0\u4E00\u89A7</button>
        <button class="pl-subtab${w==="music"?" active":""}"
          data-pl-subtab="music" role="tab"
          aria-selected="${w==="music"}">\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2</button>
        <button class="pl-subtab${w==="my-playlists"?" active":""}"
          data-pl-subtab="my-playlists" role="tab"
          aria-selected="${w==="my-playlists"}">
          \u30DE\u30A4\u30EA\u30B9\u30C8
          <span class="pl-subtab-count">${y().length}</span>
        </button>
      </nav>
      <div class="pl-subtab-body" id="pl-subtab-body">
        ${w==="all-streams"?dt(s,B):w==="music"?Mt():jt(s)}
      </div>
    </div>
  `,w==="music"&&Lt(),e){let a=_("#pl-music-search");if(a&&(a.focus(),l!==null))try{a.setSelectionRange(l,l)}catch{}}t.onclick=a=>{let n=a.target.closest("[data-pl-subtab]");if(n){w=n.dataset.plSubtab,w==="all-streams"&&(B=1),L();return}let i=a.target.closest("[data-pl-sort]");if(i){X=i.dataset.plSort,B=1,at(s);return}let p=a.target.closest("[data-pl-page]");if(p&&!p.disabled){B=Number(p.dataset.plPage),at(s);return}let m=a.target.closest("[data-music-view]:not([data-music-select-toggle])");if(m){M=m.dataset.musicView,R();return}if(a.target.closest("[data-music-select-toggle]")){A=!A,A||S.clear(),Q();return}let o=a.target.closest("[data-mv-select]");if(o){let f=o.dataset.mvSelect,c=!S.has(f);c?S.add(f):S.delete(f);let u=o.classList.contains("mv-list-row")?o:o.closest(".mv-card");u&&u.classList.toggle("is-selected",c);let g=u?.querySelector(".mv-card-checkbox, .mv-list-checkbox");g&&(g.innerHTML=c?h("check"):""),o.setAttribute("aria-pressed",String(c)),At();return}if(a.target.closest("[data-music-select-all]")){z(v||[]).forEach(({v:f})=>S.add(f.id)),Q();return}if(a.target.closest("[data-music-select-clear]")){S.clear(),Q();return}if(a.target.closest("[data-music-select-add]")){if(!S.size)return;let f=[...v||[]].filter(c=>S.has(c.id)).map(c=>"mv:"+c.id);nt(f);return}let b=a.target.closest("[data-playlist-add-mv]");if(b){let f=b.dataset.playlistAddMv,c=b.dataset.streamTitle||"";nt("mv:"+f,c);return}let d=a.target.closest("[data-mv-watch]");if(d&&v?.length){if(a.metaKey||a.ctrlKey||a.shiftKey||a.button===1)return;a.preventDefault();let f=v[Number(d.dataset.mvWatch)];f?.url&&window.__openStreamViewer?.({url:f.url,title:f.title,isMv:!0});return}w==="my-playlists"&&Yt(a,s)},t.oninput=a=>{let n=a.target.closest("#pl-music-search");n&&(P=n.value||"",clearTimeout(J),J=setTimeout(R,100))},t.oncompositionend=a=>{let n=a.target.closest("#pl-music-search");n&&(P=n.value||"",clearTimeout(J),R())},t.addEventListener("error",a=>{let n=a.target;if(!n.classList.contains("pl-sg-thumb"))return;let i=n.dataset.fallback;i&&n.src!==i&&(n.src=i,delete n.dataset.fallback)},!0),Ot()}var kt=[{key:"newest",label:"\u65B0\u3057\u3044\u9806"},{key:"oldest",label:"\u53E4\u3044\u9806"},{key:"most-songs",label:"\u66F2\u6570\u2193"},{key:"fewest-songs",label:"\u66F2\u6570\u2191"}];function xt(t,s){let e=t.slice();return s==="oldest"?e.reverse():s==="most-songs"?e.sort((l,a)=>(a.songs?.length??0)-(l.songs?.length??0)):s==="fewest-songs"?e.sort((l,a)=>(l.songs?.length??0)-(a.songs?.length??0)):e}function dt(t,s){if(!t.length)return`
      <div class="pl-empty-state">
        <p>\u914D\u4FE1\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</p>
        <p class="pl-empty-hint">\u5148\u306B\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30BF\u30D6\u3092\u958B\u304F\u3068\u3059\u3050\u306B\u8868\u793A\u3055\u308C\u307E\u3059</p>
      </div>`;let e=xt(t,X),l=e.length,a=Math.max(1,Math.ceil(l/G)),n=Math.min(Math.max(1,s),a),i=(n-1)*G,m=e.slice(i,i+G).map(d=>{let f=E(d),c=C(d.url),u=H(d.url),g=d.songs?.length??0;return`
      <button class="pl-sg-card" type="button" data-stream-play="${r(f)}"
        title="${r(d.title||"\u914D\u4FE1")}">
        <div class="pl-sg-thumb-wrap">
          ${c?`<img class="pl-sg-thumb" src="${r(c)}"
                data-fallback="${r(u)}"
                alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="pl-sg-thumb-placeholder"></div>'}
          <span class="pl-sg-song-badge">${g}<span class="pl-sg-badge-unit">\u66F2</span></span>
          <span class="pl-sg-add${Y(f)?" is-saved":""}" role="button" tabindex="0"
            aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"
            data-playlist-add="${r(f)}" data-stream-title="${r(d.title||"\u914D\u4FE1")}"
            title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0">${et}</span>
        </div>
        <div class="pl-sg-info">
          <span class="pl-sg-title">${r(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-sg-date">${r(K(d.date)||"")}</span>
        </div>
      </button>`}).join(""),o=a>1?`
    <div class="pl-pagination">
      <button class="pl-page-btn" data-pl-page="${n-1}"
        ${n<=1?"disabled":""} type="button" aria-label="\u524D\u306E\u30DA\u30FC\u30B8">\u524D\u3078</button>
      <span class="pl-page-info">${n} / ${a}</span>
      <button class="pl-page-btn" data-pl-page="${n+1}"
        ${n>=a?"disabled":""} type="button" aria-label="\u6B21\u306E\u30DA\u30FC\u30B8">\u6B21\u3078</button>
    </div>`:"";return`${`
    <div class="pl-sort-bar">
      ${kt.map(d=>`
        <button class="pl-sort-opt${X===d.key?" active":""}"
          data-pl-sort="${d.key}" type="button">${d.label}</button>`).join("")}
    </div>`}<div class="pl-stream-grid" id="pl-stream-grid">${m}</div>${o}`}function at(t){let s=_("#pl-subtab-body");if(!s){L();return}s.innerHTML=dt(t,B);let e=_("#panel-playlists");e&&e.addEventListener("error",l=>{let a=l.target;if(!a.classList.contains("pl-sg-thumb"))return;let n=a.dataset.fallback;n&&a.src!==n&&(a.src=n,delete a.dataset.fallback)},{once:!0,capture:!0}),s.scrollIntoView({behavior:"smooth",block:"start"})}function Mt(){if(v===null){let t=q();t.length&&(v=t)}return tt(v||[])}async function Lt(){if(v!==null){U();return}v=q(),j=!0,U();let t=await pt();j=!1,v=Array.isArray(t)?t:[],U()}function U(){if(w!=="music")return;let t=_("#pl-subtab-body");t&&(_("#pl-music-search")?R():t.innerHTML=tt(v||[]))}function tt(t){return Tt(t)+`<div id="pl-music-results">${ut(t)}</div>`}function Tt(t){let s=st(),l=z(t).length;return`
    <div class="pl-music-viewbar">
      <label class="pl-music-search-wrap">
        <span class="pl-music-search-icon" aria-hidden="true">\u2315</span>
        <input id="pl-music-search" class="pl-music-search" type="search"
          value="${r(s)}"
          placeholder="\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3067\u691C\u7D22"
          aria-label="\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2\u3092\u691C\u7D22">
      </label>
      <span class="pl-music-count">${l}${l===t.length?"":` / ${t.length}`}\u4EF6</span>
      <div class="pl-music-views">
        <button class="pl-music-view-btn${M==="grid"?" active":""}" data-music-view="grid"     type="button">\u30B0\u30EA\u30C3\u30C9</button>
        <button class="pl-music-view-btn${M==="list"?" active":""}" data-music-view="list"     type="button">\u30EA\u30B9\u30C8</button>
        <button class="pl-music-view-btn${M==="category"?" active":""}" data-music-view="category" type="button">\u30AB\u30C6\u30B4\u30EA</button>
        <button class="pl-music-view-btn pl-music-select-toggle${A?" active":""}" data-music-select-toggle="1" type="button" ${l?"":"disabled"} title="\u8907\u6570\u9078\u629E\u3057\u3066\u307E\u3068\u3081\u3066\u8FFD\u52A0">\u2611 \u9078\u629E</button>
      </div>
    </div>
    ${A?Et():""}`}function Et(){let t=S.size;return`
    <div class="pl-music-selbar">
      <span class="pl-music-selcount" id="pl-music-selcount">${t}\u66F2\u3092\u9078\u629E\u4E2D</span>
      <div class="pl-music-selactions">
        <button class="pl-sel-btn" data-music-select-all="1" type="button">\u8868\u793A\u4E2D\u3092\u3059\u3079\u3066\u9078\u629E</button>
        <button class="pl-sel-btn" data-music-select-clear="1" type="button" ${t?"":"disabled"}>\u9078\u629E\u89E3\u9664</button>
        <button class="pl-sel-btn primary" data-music-select-add="1" type="button" ${t?"":"disabled"}>${h("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0</button>
        <button class="pl-sel-btn" data-music-select-toggle="1" type="button">\u5B8C\u4E86</button>
      </div>
    </div>`}function ut(t){let s=z(t);return j&&!t.length?'<div class="pl-empty-state"><p>\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</p><p class="pl-empty-hint">\u691C\u7D22\u6B04\u306F\u3053\u306E\u307E\u307E\u5165\u529B\u3067\u304D\u307E\u3059</p></div>':t.length?s.length?M==="grid"?lt(s):M==="list"?Ht(s):M==="category"?Vt(s):lt(s):j?`<div class="pl-empty-state"><p>\u6700\u65B0\u30C7\u30FC\u30BF\u3092\u78BA\u8A8D\u4E2D\u2026</p><p class="pl-empty-hint">\u300C${r(st())}\u300D\u306E\u5019\u88DC\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</p></div>`:'<div class="pl-empty-state"><p>\u4E00\u81F4\u3059\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093</p><p class="pl-empty-hint">\u300C\u66F2\u540D / \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u300D\u306E\u3088\u3046\u306B\u533A\u5207\u3063\u3066\u691C\u7D22\u3067\u304D\u307E\u3059</p></div>':'<div class="pl-empty-state"><p>\u52D5\u753B\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</p><p class="pl-empty-hint">\u7BA1\u7406\u753B\u9762\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059</p></div>'}function st(){let t=_("#pl-music-search");return t&&(P=t.value||""),P}function Q(){let t=_("#pl-subtab-body");t&&(t.innerHTML=tt(v||[]))}function At(){let t=S.size,s=_("#pl-music-selcount");s&&(s.textContent=`${t}\u66F2\u3092\u9078\u629E\u4E2D`);let e=document.querySelector("[data-music-select-add]");e&&(e.disabled=!t,e.innerHTML=`${h("plus")} ${t}\u66F2\u3092\u307E\u3068\u3081\u3066\u8FFD\u52A0`);let l=document.querySelector("[data-music-select-clear]");l&&(l.disabled=!t)}function R(){let t=v||[],s=_(".pl-music-count");if(s){let l=z(t).length;s.textContent=`${l}${l===t.length?"":` / ${t.length}`}\u4EF6`}document.querySelectorAll("[data-music-view]").forEach(l=>{l.classList.toggle("active",l.dataset.musicView===M)});let e=_("#pl-music-results");e&&(e.innerHTML=ut(t))}function q(){try{let t=JSON.parse(localStorage.getItem(ct)||"null");return Array.isArray(t?.videos)?t.videos:[]}catch{return[]}}function Ct(t){try{localStorage.setItem(ct,JSON.stringify({videos:t,cachedAt:Date.now()}))}catch{}}async function pt(){return V||(V=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>{let s=Array.isArray(t?.videos)?t.videos:[];return Ct(s),s}).catch(()=>v||q()),V)}function mt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/[！-～]/g,s=>String.fromCharCode(s.charCodeAt(0)-65248)).replace(/[‐-‒–—―ー]/g,"-").replace(/\s+/g," ").trim()}function It(t){return mt(t).split(/[\/／|｜\s]+/).map(s=>s.trim()).filter(Boolean)}function Bt(t){let s=t.title||"",e=s.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean),l=O(t).label;return mt([s,...e,t.originalArtist,t.character,t.type,l].filter(Boolean).join(" "))}function z(t){let s=It(st()),e=t.map((l,a)=>({v:l,i:a}));return s.length?e.filter(({v:l})=>{let a=Bt(l);return s.every(n=>a.includes(n))}):e}function O(t){switch(t.type){case"cover":return{label:"\u30AB\u30D0\u30FC",cls:"mv-badge-cover",sub:t.originalArtist||"\u30AB\u30D0\u30FC\u66F2"};case"office":return{label:"Re:AcT",cls:"mv-badge-office",sub:"Re:AcT"};case"character":return{label:"\u30AD\u30E3\u30E9",cls:"mv-badge-character",sub:t.character||"\u30AD\u30E3\u30E9\u30BD\u30F3"};default:return{label:"\u30AA\u30EA\u30B8\u30CA\u30EB",cls:"mv-badge-original",sub:"\u304B\u306A\u3046"}}}function D(t){return t.publishedAt?String(t.publishedAt).replaceAll("-","/"):"\u516C\u958B\u65E5\u672A\u767B\u9332"}function ft(t,s){let e=C(t.url),l=H(t.url),{label:a,cls:n}=O(t),i=Y("mv:"+t.id);if(A){let p=S.has(t.id);return`
    <div class="mv-card mv-card--select${p?" is-selected":""}">
      <button class="mv-card-thumb-btn" type="button" data-mv-select="${r(t.id)}" aria-pressed="${p}">
        ${e?`<img class="mv-card-thumb" src="${r(e)}" data-fallback="${r(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-checkbox">${p?h("check"):""}</span>
        <span class="mv-type-badge ${n}">${a}</span>
      </button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(D(t))}</span>
      </div>
    </div>`}return`
    <div class="mv-card">
      <a class="mv-card-thumb-btn" href="${r(t.url||"#")}" target="_blank" rel="noopener"
        data-mv-watch="${s}" aria-label="\u52D5\u753B\u30D3\u30E5\u30FC\u30EF\u30FC\u3067\u898B\u308B">
        ${e?`<img class="mv-card-thumb" src="${r(e)}" data-fallback="${r(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="mv-card-thumb mv-card-thumb-placeholder"></div>'}
        <span class="mv-card-play-icon">${h("play")}</span>
        <span class="mv-type-badge ${n}">${a}</span>
      </a>
      <button class="pl-sg-add mv-add-btn mv-add-btn--overlay${i?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        aria-label="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}"
        title="${i?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${et}</button>
      <div class="mv-card-info">
        <span class="mv-card-title">${r(t.title||"\u2014")}</span>
        <span class="mv-card-sub">${r(D(t))}</span>
      </div>
    </div>`}function Pt(t,s){let e=C(t.url),l=H(t.url),{label:a,cls:n,sub:i}=O(t),p=Y("mv:"+t.id);if(A){let m=S.has(t.id);return`
    <div class="mv-list-row mv-list-row--select${m?" is-selected":""}" data-mv-select="${r(t.id)}" role="button" aria-pressed="${m}">
      <span class="mv-list-checkbox">${m?h("check"):""}</span>
      <span class="mv-list-thumb">
        ${e?`<img src="${r(e)}" data-fallback="${r(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </span>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(D(t))}</span>
      </div>
      <span class="mv-type-badge ${n}">${a}</span>
    </div>`}return`
    <div class="mv-list-row">
      <a class="mv-list-thumb" href="${r(t.url||"#")}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F">
        ${e?`<img src="${r(e)}" data-fallback="${r(l)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
      </a>
      <div class="mv-list-info">
        <span class="mv-list-title">${r(t.title||"\u2014")}</span>
        <span class="mv-list-sub">${r(D(t))}</span>
      </div>
      <span class="mv-type-badge ${n}">${a}</span>
      <button class="mv-add-btn${p?" is-saved":""}" type="button"
        data-playlist-add-mv="${r(t.id)}"
        data-stream-title="${r(t.title||"")}"
        title="${p?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"}">${h("bookmark")}</button>
    </div>`}function lt(t){return`<div class="mv-grid">${t.map(({v:s,i:e})=>ft(s,e)).join("")}</div>`}function Ht(t){return`<div class="mv-list">${t.map(({v:s,i:e})=>Pt(s,e)).join("")}</div>`}function Vt(t){return`
    <div class="mv-category">
      ${[{key:"original",label:"\u30AA\u30EA\u30B8\u30CA\u30EB\u66F2\uFF08\u500B\u4EBA\uFF09"},{key:"office",label:"Re:AcT \u30AA\u30EA\u66F2"},{key:"character",label:"\u30AD\u30E3\u30E9\u30BD\u30F3 / \u58F0\u512A\u30AA\u30EA\u66F2"},{key:"cover",label:"\u30AB\u30D0\u30FC\u66F2\uFF08\u6B4C\u307F\u305F\uFF09"}].map(({key:e,label:l})=>({label:l,items:t.filter(({v:a})=>a.type===e)})).filter(({items:e})=>e.length>0).map(({label:e,items:l})=>`
      <div class="mv-cat-section">
        <h3 class="mv-cat-heading">${e} <span class="mv-cat-count">${l.length}</span></h3>
        <div class="mv-grid">${l.map(({v:a,i:n})=>ft(a,n)).join("")}</div>
      </div>`).join("")}
    </div>`}function Gt(){return v||[]}function N(t){if(!t?.startsWith("mv:"))return null;let s=t.slice(3);return(v||[]).find(e=>e.id===s)||null}function bt(t,s){return(t.streams||[]).map(e=>{if(e.startsWith("mv:")){let a=N(e);return a?.url?W(a.url):""}let l=s.find(a=>E(a)===e);return l?.url?W(l.url):""}).filter(Boolean)}function Rt(t){if(!t.length){alert("YouTube\u3067\u518D\u751F\u3067\u304D\u308B\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093");return}let s;if(t.length===1)s=`https://www.youtube.com/watch?v=${t[0]}`;else{let e=t.slice(0,50);t.length>50&&alert(`\u52D5\u753B\u304C${t.length}\u672C\u3042\u308A\u307E\u3059\u3002\u5148\u982D50\u672C\u3067\u9023\u7D9A\u518D\u751F\u3057\u307E\u3059\u3002`),s=`https://www.youtube.com/watch_videos?video_ids=${e.join(",")}`}window.open(s,"_blank","noopener noreferrer")}function jt(t){let s=y();return s.length?`
    <div class="pl-my-actions">
      <span class="pl-my-count">${s.length}\u4EF6\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8</span>
      <button class="pl-new-btn" id="pl-new-btn" type="button">${h("plus")} \u65B0\u898F\u4F5C\u6210</button>
    </div>
    <div class="pl-grid">
      ${s.map(e=>Dt(e,t)).join("")}
    </div>`:`
      <div class="pl-empty-state">
        <p>\u307E\u3060\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093</p>
        <p class="pl-empty-hint">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u914D\u4FE1\u67A0\u304B\u3089 <strong>\u681E\u30DC\u30BF\u30F3</strong> \u3092\u62BC\u3057\u3066\u8FFD\u52A0\u3067\u304D\u307E\u3059</p>
      </div>
      <div class="pl-my-actions">
        <button class="pl-new-btn" id="pl-new-btn" type="button">${h("plus")} \u65B0\u898F\u4F5C\u6210</button>
      </div>`}function Dt(t,s){let e=t.streams.map(m=>{let o=m.startsWith("mv:"),b=o?N(m):null;return{skey:m,isMv:o,mv:b,stream:o?null:s.find(d=>E(d)===m)}}),l=e.find(({stream:m,mv:o})=>m?.url||o?.url)?.stream?.url||e.find(({mv:m})=>m?.url)?.mv?.url,a=l?`<img class="pl-card-cover" src="${r(C(l))}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"",n=e.length,i=e.map(({skey:m,isMv:o,mv:b,stream:d})=>{let f=r(t.id+"|:|"+m),c='<span class="pl-drag-handle" aria-hidden="true" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u4E26\u3073\u66FF\u3048">\u283F</span>',u=`<button class="pl-rm-btn" data-pl-rm-stream="${f}" type="button" title="\u524A\u9664">${h("close")}</button>`;if(o){if(!b)return`
        <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">${c}
          <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u52D5\u753B\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
          <div class="pl-stream-actions">${u}</div>
        </div>`;let{label:g,sub:x}=O(b),$=b.type||"original",k=(v||[]).indexOf(b);return`
        <div class="pl-stream-row" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">
          ${c}
          <div class="pl-stream-info">
            <span class="pl-stream-date"><span class="mv-badge-inline mv-type-${$}">${g}</span></span>
            <span class="pl-stream-title">${r(b.title||"\u2014")}</span>
            <span class="pl-stream-meta">${r(x)}</span>
          </div>
          <div class="pl-stream-actions">
            ${k>=0?`<button class="pl-play-stream-btn" data-play-music-pl="${k}" type="button" title="\u518D\u751F">${h("play")}</button>`:""}
            ${u}
          </div>
        </div>`}return d?`
      <div class="pl-stream-row" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">
        ${c}
        <div class="pl-stream-info">
          <span class="pl-stream-date">${K(d.date)}</span>
          <span class="pl-stream-title">${r(d.title||"\u914D\u4FE1")}</span>
          <span class="pl-stream-meta">\u7B2C${d.index}\u67A0 \xB7 ${d.songs?.length??0}\u66F2</span>
        </div>
        <div class="pl-stream-actions">
          ${d.url?`<button class="pl-play-stream-btn" data-pl-play-stream="${r(m)}"
                type="button" title="\u518D\u751F">${h("play")}</button>`:""}
          ${u}
        </div>
      </div>`:`
      <div class="pl-stream-row pl-stream-missing" data-pl-skey="${r(m)}" data-pl-id="${r(t.id)}">${c}
        <div class="pl-stream-info"><span class="pl-stream-title">\uFF08\u914D\u4FE1\u30C7\u30FC\u30BF\u306A\u3057\uFF09</span></div>
        <div class="pl-stream-actions">${u}</div>
      </div>`}).join(""),p=bt(t,s);return`
    <div class="pl-card">
      <div class="pl-card-head">
        ${a?`<div class="pl-card-cover-wrap">${a}</div>`:""}
        <div class="pl-card-head-info">
          <button class="pl-card-name" data-pl-rename="${r(t.id)}"
            type="button" title="\u30AF\u30EA\u30C3\u30AF\u3067\u540D\u524D\u5909\u66F4">${r(t.name)}</button>
          <span class="pl-card-count">${t.streams.length}\u4EF6</span>
        </div>
        <button class="pl-del-btn" data-pl-del="${r(t.id)}"
          type="button" title="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u524A\u9664">\u{1F5D1}</button>
      </div>
      <div class="pl-stream-list">
        ${i||'<div class="pl-stream-empty">\u914D\u4FE1\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}
      </div>
      ${p.length||t.streams.length?`
      <div class="pl-card-footer">
        ${p.length?`
        <button class="pl-yt-share-btn" data-pl-yt-share="${r(t.id)}"
          type="button" title="YouTube\u3067\u9023\u7D9A\u518D\u751F\uFF08\u4E00\u6642\u7684\u306A\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3068\u3057\u3066\u958B\u304D\u307E\u3059\uFF09">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
          YouTube\u3067\u9023\u7D9A\u518D\u751F (${p.length}\u672C)
        </button>`:""}
        ${t.streams.length?`
        <button class="pl-yt-share-btn" data-pl-share="${r(t.id)}"
          type="button" title="\u3053\u306E\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">${h("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709</button>`:""}
      </div>`:""}
    </div>`}function Yt(t,s){if(t.target.closest("#pl-new-btn")){qt();return}let e=t.target.closest("[data-pl-share]");if(e){let o=y().find(u=>u.id===e.dataset.plShare);if(!o)return;let b=JSON.stringify({n:o.name,s:o.streams}),d=btoa(String.fromCharCode(...new TextEncoder().encode(b))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),f=`${location.origin}${location.pathname}?pl=${d}`,c=u=>{e.innerHTML=u?`${h("check")} \u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F`:"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",setTimeout(()=>{e.innerHTML=`${h("link")} \u30EA\u30F3\u30AF\u3092\u5171\u6709`},1600)};navigator.clipboard?.writeText(f).then(()=>c(!0)).catch(()=>{try{let u=document.createElement("textarea");u.value=f,u.style.cssText="position:fixed;opacity:0;",document.body.appendChild(u),u.select();let g=document.execCommand("copy");u.remove(),c(g)}catch{c(!1)}});return}let l=t.target.closest("[data-pl-del]");if(l){let o=l.dataset.plDel,b=y().find(d=>d.id===o);b&&confirm(`\u300C${b.name}\u300D\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F`)&&(wt(o),L());return}let a=t.target.closest("[data-pl-rm-stream]");if(a){let[o,b]=a.dataset.plRmStream.split("|:|");St(o,b),L();return}let n=t.target.closest("[data-pl-play-stream]");if(n){let o=n.closest(".pl-stream-row");if(o&&rt(o,s))return;let b=n.dataset.plPlayStream,d=s.find(f=>E(f)===b);d?.url&&window.__openStreamViewer?.(d);return}let i=t.target.closest("[data-play-music-pl]");if(i){let o=i.closest(".pl-stream-row");if(o&&rt(o,s))return;if(v?.length){let b=Number(i.dataset.playMusicPl);import("./chunk-LQZJM6CS.js").then(d=>d.playMusicQueue(v,b))}return}let p=t.target.closest("[data-pl-rename]");if(p){let o=p.dataset.plRename,b=y().find(f=>f.id===o);if(!b)return;let d=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D",b.name)?.trim();if(d){let f=y(),c=f.find(u=>u.id===o);c&&(c.name=d,T(f),L())}return}let m=t.target.closest("[data-pl-yt-share]");if(m){let o=m.dataset.plYtShare,b=y().find(d=>d.id===o);if(!b)return;Rt(bt(b,s));return}}function qt(){let t=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044")?.trim();t&&(ot(t),L())}var et='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>';function zt(t){let s=F.data?.streams||[];for(let e of t.streams||[])if(e.startsWith("mv:")){let l=N(e);if(l?.url)return l.url}else{let l=s.find(a=>E(a)===e);if(l?.url)return l.url}return""}function nt(t,s,e={}){let l=Array.isArray(t)?t.filter(Boolean):[t].filter(Boolean);if(!l.length)return;let a=l.length>1,n=()=>{try{e.onChange?.(l.some(c=>Y(c)))}catch{}},i=_("#pl-add-modal");i||(i=document.createElement("div"),i.id="pl-add-modal",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i));let p=c=>l.every(u=>(c.streams||[]).includes(u)),m=c=>{let u=p(c),g=zt(c),x=g?C(g):"";return`
      <button class="pl-modal-item${u?" is-saved":""}" data-pl-add="${r(c.id)}"
        type="button" role="checkbox" aria-checked="${u}">
        <span class="pl-modal-item-cover">
          ${x?`<img src="${r(x)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="pl-modal-item-cover--empty">\u266A</span>'}
        </span>
        <span class="pl-modal-item-info">
          <span class="pl-modal-item-name">${r(c.name)}</span>
          <span class="pl-modal-item-count">${c.streams.length}\u66F2</span>
        </span>
        <span class="pl-modal-bookmark${u?" is-saved":""}" aria-hidden="true">${et}</span>
      </button>`},o=()=>{let c=y();return c.length?c.map(m).join(""):'<p class="pl-modal-empty">\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u304C\u3042\u308A\u307E\u305B\u3093<br><span style="font-size:11px">\u4E0B\u306E\u300C\u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210\u300D\u304B\u3089\u8FFD\u52A0\u3067\u304D\u307E\u3059</span></p>'},b=a?`${l.length}\u66F2\u3092\u307E\u3068\u3081\u3066\u4FDD\u5B58`:s||"\u914D\u4FE1",d=()=>{i.innerHTML=`
      <div class="pl-modal-backdrop" id="pl-modal-backdrop"></div>
      <div class="pl-modal-box" role="dialog" aria-modal="true" aria-label="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58">
        <div class="pl-modal-head">
          <span class="pl-modal-head-title">\u4FDD\u5B58\u5148</span>
          <button class="pl-modal-close" id="pl-modal-close" type="button" aria-label="\u9589\u3058\u308B">${h("close")}</button>
        </div>
        <div class="pl-modal-sub">${r(b)}</div>
        <div class="pl-modal-list" id="pl-modal-list">${o()}</div>
        <button class="pl-modal-new" id="pl-modal-new" type="button">
          <span class="pl-modal-new-icon">${h("plus")}</span> \u65B0\u3057\u3044\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u3092\u4F5C\u6210
        </button>
      </div>`,i.hidden=!1,i.querySelector("#pl-modal-close").addEventListener("click",f),i.querySelector("#pl-modal-backdrop").addEventListener("click",f),i.querySelector("#pl-modal-new").addEventListener("click",()=>{let c=prompt("\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u540D")?.trim();if(!c)return;let u=ot(c);l.forEach($=>_t(u.id,$)),Z(a?`\u300C${c}\u300D\u306B${l.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${c}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`);let g=i.querySelector("#pl-modal-list");g?.querySelector(".pl-modal-empty")&&(g.innerHTML=""),g&&g.insertAdjacentHTML("afterbegin",m(y().find($=>$.id===u.id))),n()}),i.querySelector("#pl-modal-list").addEventListener("click",c=>{let u=c.target.closest("[data-pl-add]");if(!u)return;let g=u.dataset.plAdd,x=y(),$=x.find(k=>k.id===g);$&&(Array.isArray($.streams)||($.streams=[]),p($)?(l.forEach(k=>{$.streams=$.streams.filter($t=>$t!==k)}),T(x),Z(a?`${l.length}\u66F2\u3092\u524A\u9664\u3057\u307E\u3057\u305F`:"\u524A\u9664\u3057\u307E\u3057\u305F")):(l.forEach(k=>{$.streams.includes(k)||$.streams.push(k)}),T(x),Z(a?`\u300C${$.name}\u300D\u306B${l.length}\u66F2\u4FDD\u5B58\u3057\u307E\u3057\u305F`:`\u300C${$.name}\u300D\u306B\u4FDD\u5B58\u3057\u307E\u3057\u305F`)),u.outerHTML=m(y().find(k=>k.id===g)),n())})},f=()=>{i.hidden=!0};d(),document.addEventListener("keydown",function c(u){u.key==="Escape"&&(f(),document.removeEventListener("keydown",c))})}function Z(t){let s=_("#pl-toast");s||(s=document.createElement("div"),s.id="pl-toast",document.body.appendChild(s)),s.textContent=t,s.classList.add("pl-toast--show"),clearTimeout(s._timer),s._timer=setTimeout(()=>s.classList.remove("pl-toast--show"),2500)}function rt(t,s){let e=y().find(n=>n.id===t.dataset.plId);if(!e||!window.__playMyListInViewer)return!1;let l=[];for(let n of e.streams)if(n.startsWith("mv:")){let i=N(n);i?.url&&l.push({kind:"mv",key:n,video:i})}else{let i=s.find(p=>E(p)===n);i?.url&&l.push({kind:"stream",key:n,stream:i})}if(!l.length)return!1;let a=l.findIndex(n=>n.key===t.dataset.plSkey);return a<0&&(a=0),window.__playMyListInViewer({name:e.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:l,idx:a}),!0}function Ot(){if(w!=="my-playlists")return;let t=_("#panel-playlists");t&&t.querySelectorAll(".pl-stream-list").forEach(s=>{s.addEventListener("pointerdown",Nt,{passive:!1})})}var I=null;function Nt(t){if(I)return;let s=t.target.closest(".pl-drag-handle");if(!s)return;let e=s.closest(".pl-stream-row"),l=s.closest(".pl-stream-list");if(!e||!l)return;t.preventDefault();let a=Array.from(l.querySelectorAll(".pl-stream-row")),n=a.indexOf(e);if(n<0)return;let i=a.map(m=>{let o=m.getBoundingClientRect();return o.top+o.height/2}),p=e.getBoundingClientRect();I={list:l,row:e,rows:a,mids:i,startIdx:n,targetIdx:n,startY:t.clientY,rowH:p.height+(parseFloat(getComputedStyle(l).rowGap||getComputedStyle(l).gap)||0),plId:e.dataset.plId,moved:!1},e.classList.add("is-dragging"),l.classList.add("is-drag-active");try{e.setPointerCapture(t.pointerId)}catch{}e.addEventListener("pointermove",vt,{passive:!1}),e.addEventListener("pointerup",gt),e.addEventListener("pointercancel",ht)}function vt(t){let s=I;if(!s)return;t.preventDefault();let e=t.clientY-s.startY;if(!s.moved&&Math.abs(e)<3)return;s.moved=!0,s.row.style.transform=`translateY(${e}px)`;let l=s.mids[s.startIdx]+e,a=0;for(let n=0;n<s.mids.length;n++)n!==s.startIdx&&l>s.mids[n]&&a++;a!==s.targetIdx&&(s.targetIdx=a,s.rows.forEach((n,i)=>{if(i===s.startIdx)return;let p=0;s.startIdx<a&&i>s.startIdx&&i<=a?p=-s.rowH:s.startIdx>a&&i>=a&&i<s.startIdx&&(p=s.rowH),n.style.transform=p?`translateY(${p}px)`:""}))}function gt(){let t=I;if(!t)return;let{plId:s,startIdx:e,targetIdx:l,moved:a}=t;if(yt(),!a||l===e)return;let n=y(),i=n.find(p=>p.id===s);if(i&&e<i.streams.length){let p=i.streams.slice(),[m]=p.splice(e,1);p.splice(l,0,m),i.streams=p,T(n)}L()}function ht(){yt()}function yt(){let t=I;t&&(t.rows.forEach(s=>{s.style.transform=""}),t.row.classList.remove("is-dragging"),t.list.classList.remove("is-drag-active"),t.row.removeEventListener("pointermove",vt),t.row.removeEventListener("pointerup",gt),t.row.removeEventListener("pointercancel",ht),I=null)}export{y as a,ot as b,wt as c,_t as d,St as e,Y as f,L as g,Gt as h,N as i,nt as j};
