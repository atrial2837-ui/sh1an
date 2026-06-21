import{a as Le,b as Se,e as Ut,f as xe}from"./chunk-QLD7E5MS.js";import{b as ye,c as ge,d as we,i as ke,j as $e,k as G,l as Z}from"./chunk-7FOBC26O.js";import{a as pt}from"./chunk-RKZOC53G.js";import{a as me,b as Bt,c as fe,e as d}from"./chunk-AW5KTZNU.js";import{E as Rt,F as V,H as nt,I as M,J as at,K as he,M as xt,N as be,P as b,a as l,b as D,c as m}from"./chunk-GPIKXWRQ.js";var I=-1,R=[],Yt=null,X=null,_t=null;function Me(t){Yt=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
    <div id="omni-box">
      <div class="omni-input-row">
        <span class="omni-search-icon" aria-hidden="true">${b("search")}</span>
        <input
          id="omni-input"
          class="omni-input"
          type="search"
          placeholder="\u66F2\u30FB\u914D\u4FE1\u30FB\u52D5\u753B\u3092\u691C\u7D22\uFF08\u30B9\u30DA\u30FC\u30B9\u533A\u5207\u308A\u3067\u7D5E\u308A\u8FBC\u307F\uFF09"
          autocomplete="off"
          spellcheck="false"
          aria-label="\u30B5\u30A4\u30C8\u5185\u691C\u7D22"
          aria-autocomplete="list"
          aria-controls="omni-listbox"
        >
        <kbd class="omni-esc-key">Esc</kbd>
      </div>
      <div id="omni-listbox" class="omni-listbox" role="listbox" aria-label="\u691C\u7D22\u7D50\u679C"></div>
      <div class="omni-footer">
        <span><kbd>\u2191</kbd><kbd>\u2193</kbd> \u79FB\u52D5</span>
        <span><kbd>Enter</kbd> \u9078\u629E</span>
        <span><kbd>Esc</kbd> \u9589\u3058\u308B</span>
      </div>
    </div>
  `,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&ht()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Ot(s.value)),s.addEventListener("keydown",ps),document.getElementById("omni-listbox").addEventListener("click",a=>{let n=a.target.closest("[data-omni-idx]");n&&Pe(Number(n.dataset.omniIdx))})}function Ce(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,I=-1,R=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Ot(""),fs().then(()=>{if(!jt())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&Ot(s)})}function ht(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),I=-1}function jt(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function ps(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),I=Math.min(I+1,e.length-1),_e(e)):t.key==="ArrowUp"?(t.preventDefault(),I=Math.max(I-1,-1),_e(e)):t.key==="Enter"?(t.preventDefault(),I>=0&&R[I]&&Pe(I)):t.key==="Escape"&&(t.preventDefault(),ht())}function _e(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===I),e.setAttribute("aria-selected",String(s===I))}),I>=0&&t[I]?.scrollIntoView({block:"nearest"})}function Pe(t){let e=R[t];!e||!Yt||(ht(),Yt(e))}function Ot(t){let e=document.getElementById("omni-listbox");if(!e)return;I=-1,R=[];let s=d.data?.songs||[],a=d.data?.streams||[],n=X||[],i=it(t),r="",c=0;if(!d.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let p=s.slice(0,8);if(p.length){r+=mt("rank","\u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let f of p)R.push({type:"song",song:f}),r+=Te(f,c++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let o=[];try{o=($e(t,s).results||[]).slice(0,8)}catch{}if(o.length||(o=s.filter(p=>Ee(t,`${p.title} ${p.artist}`)).slice(0,8)),o.length){r+=mt("music","\u66F2");for(let p of o)R.push({type:"song",song:p}),r+=Te(p,c++,i)}if(n.length){let p=n.filter(f=>hs(f,t)).slice(0,6);if(p.length){r+=mt("video","\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let f of p)R.push({type:"music-video",video:f}),r+=ms(f,c++,t)}}let u=new Set,v=[];for(let p of s)if(p.artist&&Ee(t,p.artist)&&!u.has(p.artist)&&(u.add(p.artist),v.push(p.artist),v.length>=4))break;if(v.length){r+=mt("artist","\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let p of v){let f=s.filter(w=>w.artist===p).length;R.push({type:"artist",artist:p}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${c++}">
        <span class="omni-item-icon">${b("artist")}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${ft(m(p),i)}</span>
          <span class="omni-item-meta">${f}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(a.length){let p=a.filter(f=>{let w=it(`${f.title||""} ${(f.songs||[]).map($=>`${$.title||""} ${$.artist||""}`).join(" ")}`),L=Tt(t);return L.length>0&&L.every($=>w.includes($))}).slice(0,5);if(p.length){r+=mt("calendar","\u914D\u4FE1\u67A0");for(let f of p){R.push({type:"stream",stream:f});let w=f.channel==="new"?"Main":f.channel==="old"?"Archive":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${c++}">
          <span class="omni-item-icon">${b("calendar")}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${ft(m(f.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${V(f.date)}${w?" \xB7 "+w:""} \xB7 ${f.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function mt(t,e){return`<div class="omni-section-label" role="presentation">${b(t)} ${e}</div>`}function Te(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("music")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${ft(m(t.title),s)}</span>
      <span class="omni-item-meta">${ft(m(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function ms(t,e,s){let a=Ie(t),n=t.originalArtist||t.character||a;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("video")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${ft(m(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${m(a)}${n?" \xB7 "+m(n):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function fs(){return X!==null?Promise.resolve(X):_t||(_t=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(X=Array.isArray(t?.videos)?t.videos:[],X)).catch(()=>(X=[],X)),_t)}function hs(t,e){let s=Tt(e);if(!s.length)return!1;let a=bs(t);return s.every(n=>a.includes(n))}function bs(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean);return it([e,...s,t.originalArtist,t.character,t.type,Ie(t)].filter(Boolean).join(" "))}function Ie(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function Tt(t){return it(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function Ee(t,e){let s=Tt(t);if(!s.length)return!1;let a=it(e);return s.every(n=>a.includes(n))}function it(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function ft(t,e){let a=Tt(e).find(r=>r&&t.toLowerCase().includes(r))||it(e);if(!a)return t;let i=t.toLowerCase().indexOf(a);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+a.length)+"</mark>"+t.slice(i+a.length)}Se();fe();var Ne={dashboard:()=>import("./chunk-2YZ4IIYX.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-WQRDJNJH.js").then(t=>t.renderRanking),songs:()=>import("./chunk-PCEAZYVQ.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-BSZ4HTFO.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-GI2XEPYV.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-YA2VNLZW.js").then(t=>t.renderPlaylists)},Et=new Map,Ae=0,lt=null;function At(t){return Object.prototype.hasOwnProperty.call(Ne,t)}async function ys(t){Et.has(t)||Et.set(t,Ne[t]());try{return await Et.get(t)}catch(e){throw Et.delete(t),e}}function Be(t){return["dashboard","timeline","analytics"].includes(t)}function gs(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let a={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(a[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ws(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ks(t){if(d.channelData?.fullLoaded)return;d.channelData=t;let e=W(d.channel)?d.channel:pt,s=W(e);s&&(d.data=s),!Be(d.activeTab)&&d.data&&st(d.activeTab,{autoLoad:!1})}function $s(t){d.channelData=t,d.channelData.fullLoaded=!0;let e=W(d.channel)?d.channel:pt;Ht(e,{resetSearch:!1,updateUrl:!1,render:!1}),st(d.activeTab,{autoLoad:!1})}function Re(){return lt=ge({onSongsReady:ks}).then($s).finally(()=>{lt=null}),lt}async function Wt(){d.channelData?.fullLoaded||(lt||Re(),await lt)}async function st(t=d.activeTab,e={}){if(t!=="playlists"&&(!d.data||!At(t))||!At(t))return;let s=d.channelData?.partialLoaded||d.channelData?.fullLoaded,a=d.channelData?.fullLoaded;if(t==="playlists"?!1:Be(t)?!a:!s)if(e.autoLoad){ws(t);try{await Wt()}catch(r){console.error("[data] full load failed",r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,c.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{st(t,{autoLoad:!0})}));return}}else{gs(t,{initial:e.initial});return}let i=++Ae;try{let r=await ys(t);if(i!==Ae||t!==d.activeTab||!d.data)return;t==="songs"&&ke(d.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let c=l(`#panel-${t}`);c&&(c.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(r?.message||String(r))}</div>
        </div>
      `)}}function N(t,e={}){At(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!q&&!K(s)){St=t,Dt=e,$t();return}d.activeTab=t,Jt(t),e.updateUrl!==!1&&Z({tab:t}),st(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Jt(t){D(".tab-btn").forEach(a=>{let n=a.dataset.tab===t;a.classList.toggle("active",n),a.setAttribute("aria-selected",n?"true":"false")}),D(".mobile-tab-item").forEach(a=>{let n=a.dataset.mobileTab===t;a.classList.toggle("is-active",n),a.setAttribute("aria-current",n?"page":"false")});let e=l("#mobile-tab-current"),s=l(`.tab-btn[data-tab="${t}"] span:last-child`)?.textContent?.trim();e&&s&&(e.textContent=s),D(".panel").forEach(a=>a.classList.toggle("active",a.id===`panel-${t}`)),document.body.dataset.activeTab=t}function W(t){return d.channelData?t==="all"?d.channelData.combined:d.channelData.channels[t]||null:null}function Ht(t,e={}){let s=W(t);s&&(d.channel=t,fn(t),d.data=s,d.timelineFilter=null,d.timelineFocus=null,d.timelineLimit=12,d.songsLimit=100,e.resetSearch!==!1&&(d.songsQuery="",d.songsGenre="all"),Ut(),D("#channel-switch [data-channel]").forEach(a=>a.classList.toggle("active",a.dataset.channel===t)),Zt(),e.updateUrl!==!1&&Z({tab:d.activeTab,channel:t,q:d.songsQuery}),un(),e.render!==!1&&st(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Ls(t,e={}){d.audience=t==="singer"?"singer":"listener",d.singerMode=d.audience==="singer",d.singerMode||(d.singerPreset="all"),D(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===d.audience)}),document.body.dataset.audience=d.audience,Zt(),d.audience==="singer"?(d.songsLimit=100,N("songs",{autoLoad:e.autoLoad!==!1})):d.data&&st(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Zt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=e}function Ss(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let a=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},n=()=>{a(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>a(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),a(!e.checked))}),e.addEventListener("change",()=>{a(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||n())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),s.addEventListener("click",i=>{i.stopPropagation()}),Zt()}function xs(){let t=l("#mobile-tab-nav"),e=l("#mobile-tab-toggle"),s=l("#mobile-tab-panel");if(!t||!e||!s)return;let a=n=>{s.hidden=!n,t.classList.toggle("is-open",n),document.body.classList.toggle("has-mobile-tab-open",n),e.setAttribute("aria-expanded",String(n))};e.addEventListener("click",n=>{n.stopPropagation(),a(s.hidden)}),s.addEventListener("click",n=>{let i=n.target.closest("[data-mobile-tab]");if(!i)return;let r=i.dataset.mobileTab;a(!1),N(r),document.querySelector(".tabs")?.scrollIntoView({behavior:"smooth",block:"start"})}),document.addEventListener("click",n=>{s.hidden||n.target.closest("#mobile-tab-nav")||a(!1)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&a(!1)}),Jt(d.activeTab||"dashboard")}function _s(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,a=420,n=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let c=window.scrollY>a;c&&n(),t.hidden=!c,t.classList.toggle("is-visible",c),t.setAttribute("aria-hidden",String(!c)),t.tabIndex=c?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function Ts(){if(d.channelData)for(let t of D("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!d.channelData.combined:!!(d.channelData.channels&&d.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Es({key:t,title:e,artist:s}){d.timelineFilter&&d.timelineFilter.key===t&&d.activeTab==="timeline"?d.timelineFilter=null:d.timelineFilter={key:t,title:e,artist:s},d.timelineFocus=null,d.timelineLimit=12,N("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ms(t,e){d.timelineFilter={key:t.key,title:t.title,artist:t.artist},d.timelineFocus=nt(e),d.timelineLimit=9999,N("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Cs(t){Xt(t.artist||"")}function Xt(t){let e=String(t||"").replace(/"/g,"");d.songsQuery=e?`artist:"${e}"`:"",d.songsLimit=100,Z({tab:"songs",q:d.songsQuery}),N("songs",{updateUrl:!1})}function Ct(t){return(d.data?.songs||[]).find(e=>e.key===t)||null}function Ue(){return window.matchMedia("(max-width: 700px)").matches}function Ye(t,e=0){let s=String(t||""),a=M(s);if(!a)return s;let n=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${a}${n>0?`&t=${n}s`:""}`}function Oe(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function Lt(){Pt&&(clearInterval(Pt),Pt=null)}function te(){Lt(),Pt=setInterval(()=>{if(T(),!!g)try{let t=g.getDuration?.()||0,e=g.getCurrentTime?.()||0;A&&Vs(A,e);let s=t>0?Math.min(e/t*100,100):0,a=l("#yt-mini-progress-fill");a&&(a.style.width=`${s}%`);let i=g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function ut(){if(Lt(),g){try{g.destroy()}catch{}g=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Ps(){if(g?.getCurrentTime)try{return g.getCurrentTime()}catch{}return Math.max(0,wt+(Date.now()-ae)/1e3)}function K(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function T(){let t=l("#stream-viewer");if(!K(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let a=s.getBoundingClientRect();e.style.left=`${a.left}px`,e.style.top=`${a.top}px`,e.style.width=`${a.width}px`,e.style.height=`${a.height}px`}function Is(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!h)return!1;se();let s=l("#yt-player-panel");if(!s)return!1;A=e;try{wt=Math.floor(h.getCurrentTime?.()??0)}catch{wt=0}ae=Date.now();let a=l("#yt-mini-title");a&&(a.textContent=e.title||"");let n=l("#yt-mini-hint");n&&(n.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,g=h,h=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",Nt(),B(),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400),window.addEventListener("resize",T),te();try{let i=g.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return ot(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,tt()),!0}function je(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",T),Lt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),h=g,g=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),ie(),B(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Fe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",T),Lt(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),h=g,g=null,ie(),B(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ke(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",T),Lt(),dt(),++Y,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),ut(),A=null,B(),!0}function As(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=ee(G().t),a={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${V(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!h){import("./chunk-4ON2M4WS.js").then(i=>i.playMusicBarVideo?.(a,s)).catch(()=>{});return}try{wt=Math.floor(h.getCurrentTime?.()??s)}catch{wt=s}ae=Date.now(),g=h,h=null,A=null,q=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let n=l("#yt-player-panel");n&&(n.hidden=!0),Nt(),B(),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400),window.addEventListener("resize",T),te(),import("./chunk-4ON2M4WS.js").then(i=>{i.adoptExternalPlayer?.(a,g,{restore:Fe,close:Ke}),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400)}).catch(()=>{})}function qt(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Ke();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",T),dt(),++Y,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),ut();let s=l("#yt-player-panel");return s&&(s.hidden=!0),A=null,B(),!0}var ze="sh1an-watch-history-v1",De=0;function Ds(){try{return JSON.parse(localStorage.getItem(ze)||"[]")}catch{return[]}}function Ge(t,e){if(!(!t?.url||e<10))try{let s=Ds().filter(a=>a.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(ze,JSON.stringify(s.slice(0,10)))}catch{}}function Vs(t,e){let s=Date.now();s-De<5e3||(De=s,Ge(t,e))}var bt=null;function ee(t=0){let e=[h,g];for(let s of e)try{let a=s?.getCurrentTime?.();if(Number.isFinite(a))return Math.max(0,Math.floor(a))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function Hs(t,e=0,s={}){if(!t)return"";let a=G(),n=new URLSearchParams,i=a.channel||d.channel;return i&&i!=="new"&&n.set("ch",i),n.set("v",t),s.includeTime!==!1&&e>5&&n.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${n}`}function B(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!K(t)&&t._currentStream?.url?M(t._currentStream.url):"",a=s?ee(G().t):0;Z({v:s||"",t:a>5?a:0},{replace:!0}),s&&Ge(t._currentStream,a),s&&!bt&&(bt=setInterval(B,5e3)),!s&&bt&&(clearInterval(bt),bt=null)}function qs(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
    <div class="sv-share-backdrop"></div>
    <div class="sv-share-dialog" role="dialog" aria-modal="true" aria-label="\u52D5\u753B\u3092\u5171\u6709">
      <div class="sv-share-head">
        <span class="sv-share-head-icon">${b("heart")}</span>
        <span class="sv-share-head-title">\u3053\u306E\u6B4C\u67A0\u3092\u304A\u3059\u305D\u308F\u3051</span>
        <button class="sv-share-close" id="sv-share-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <div class="sv-share-charm" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="sv-share-video">
        <span class="sv-share-video-icon">\u266A</span>
        <span class="sv-share-video-title" id="sv-share-video-title"></span>
      </div>
      <label class="sv-share-ts" id="sv-share-ts-row">
        <input type="checkbox" id="sv-share-ts-check">
        <span class="sv-share-ts-toggle" aria-hidden="true"></span>
        <span class="sv-share-ts-text"><strong id="sv-share-ts-label">0:00</strong> \u304B\u3089\u8074\u3044\u3066\u3082\u3089\u3046</span>
      </label>
      <div class="sv-share-url-row">
        <input class="sv-share-url" id="sv-share-url" type="text" readonly aria-label="\u5171\u6709\u30EA\u30F3\u30AF">
        <button class="sv-share-copy" id="sv-share-copy" type="button">\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC</button>
      </div>
      <div class="sv-share-sns">
        <a class="sv-share-sns-btn sv-share-x" id="sv-share-x" href="#" target="_blank" rel="noopener">X\u306B\u306E\u305B\u308B</a>
        <a class="sv-share-sns-btn sv-share-line" id="sv-share-line" href="#" target="_blank" rel="noopener">LINE\u3067\u9001\u308B</a>
        <button class="sv-share-sns-btn sv-share-native" id="sv-share-native" type="button" hidden>\u307B\u304B\u306B\u3082\u5171\u6709</button>
      </div>
      <div class="sv-share-foot">\u597D\u304D\u306A\u3068\u3053\u308D\u304B\u3089\u3001\u305D\u3063\u3068\u5C4A\u3051\u3089\u308C\u307E\u3059</div>
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&(n.preventDefault(),n.stopPropagation(),e())},{capture:!0});let s=()=>{let n=t._shareState;if(!n)return;let i=l("#sv-share-ts-check")?.checked&&n.t>0,r=Hs(n.id,n.t,{includeTime:i}),c=l("#sv-share-url");c&&(c.value=r);let o=n.title?`${n.title}`:"sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",u=l("#sv-share-x");u&&(u.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(o)}&url=${encodeURIComponent(r)}`);let v=l("#sv-share-line");return v&&(v.href=`https://line.me/R/share?text=${encodeURIComponent(`${o}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",n=>n.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let n=l("#sv-share-url")?.value;if(!n)return;let i=!1;try{await navigator.clipboard.writeText(n),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let a=l("#sv-share-native");navigator.share&&a&&(a.hidden=!1,a.addEventListener("click",async()=>{let n=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:n?.title||"",url:i})}catch{}}))}function Ns(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=M(e.url);if(!s)return;qs();let a=l("#sv-share-modal"),n=ee(G().t);a._shareState={id:s,t:n,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),c=l("#sv-share-ts-check"),o=l("#sv-share-ts-label");r&&(r.hidden=n<=5),c&&(c.checked=n>5),o&&(o.textContent=F(n)),a._rebuild?.(),a.hidden=!1}var Ve=new URLSearchParams(location.search).get("pl");async function Bs(){if(!Ve)return;let t=null;try{let a=Ve.replace(/-/g,"+").replace(/_/g,"/"),n=Uint8Array.from(atob(a),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(n))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(a=>typeof a=="string"&&a.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){Z({},{replace:!0});return}try{let a=await import("./chunk-YA2VNLZW.js"),n=a.createPlaylist(e);for(let i of s)a.addStreamToPlaylist(n.id,i);Z({tab:"playlists"},{replace:!0}),N("playlists",{updateUrl:!1})}catch{}}}async function Rs(){let t=G();if(!t.v)return!1;let e=t.v,s=t.t;try{await Wt()}catch{}let a=[];d.channelData?.combined&&a.push(d.channelData.combined),Object.values(d.channelData?.channels||{}).forEach(n=>{n&&a.push(n)});for(let n of a){let i=(n.streams||[]).find(r=>M(r.url)===e);if(i)return _(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(c=>M(c.url)===e);if(r)return _({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return _({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function Us(t,e=0,s=""){let a=M(t);if(!a)return;if(Ue()){window.open(Ye(t,e),"_blank","noopener");return}{let o=l("#stream-viewer");if(o&&!o.hidden&&!q)if(K(o))qt();else{++Y,o.hidden=!0,o._currentStream=null,h=null;let u=l("#sv-player-wrap");u&&(u.innerHTML=""),document.body.style.overflow="",A=null,Dt={},Nt(),B()}}ne(),se();let n=l("#yt-player-container"),i=l("#yt-player-panel");if(!n||!i)return;ut();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let c=l("#yt-mini-hint");c&&(c.textContent=A?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!A),i.hidden=!1,Je(()=>{let o=document.createElement("div");n.appendChild(o);try{g=new window.YT.Player(o,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{let v=tt();try{u.target.setVolume(v)}catch{}if(ot(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,v),e>5)try{u.target.seekTo(e,!0)}catch{}te()},onStateChange:u=>{let v=u.data===window.YT.PlayerState.PLAYING,p=l("#yt-mini-play");p&&p.setAttribute("data-playing",v?"1":"0")}}})}catch{let v=e>0?`&start=${Math.floor(e)}`:"";n.innerHTML=`<iframe src="https://www.youtube.com/embed/${a}?autoplay=1&playsinline=1${v}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function se(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
    <div class="yt-mini-video-wrap">
      <div id="yt-player-container"></div>
    </div>
    <div class="yt-mini-progress-wrap">
      <div class="yt-mini-progress-bar" id="yt-mini-progress-bar" title="\u30AF\u30EA\u30C3\u30AF\u3067\u30B7\u30FC\u30AF">
        <div class="yt-mini-progress-fill" id="yt-mini-progress-fill"></div>
      </div>
    </div>
    <div class="yt-mini-bar">
      <button class="yt-mini-play-btn" id="yt-mini-play" type="button" data-playing="0" aria-label="\u518D\u751F/\u505C\u6B62"></button>
      <button class="yt-mini-info yt-mini-restore" id="yt-mini-restore" type="button" aria-label="\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B">
        <span class="yt-mini-stream-title" id="yt-mini-title">\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F</span>
        <span class="yt-mini-hint" id="yt-mini-hint"></span>
      </button>
      <div class="yt-mini-vol-wrap">
        <button class="vol-btn" id="yt-mini-vol-btn" type="button" aria-label="\u97F3\u91CF">${b("volume")}</button>
        <input class="vol-slider" id="yt-mini-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
      </div>
      <button id="yt-player-close" type="button" class="yt-mini-close-btn" aria-label="\u9589\u3058\u308B">${b("close")}</button>
    </div>
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!qt()&&(ut(),A=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(g)try{g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?g.pauseVideo():g.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{je()||A&&_(A,Ps())}),l("#yt-mini-progress-bar").addEventListener("click",a=>{if(!g)return;let i=a.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(a.clientX-i.left)/i.width));try{let c=g.getDuration?.()||0;c>0&&g.seekTo(r*c,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let a=tt();e.value=a,e.style.setProperty("--pct",`${a}%`),s&&(s.innerHTML=gt(a)),e.addEventListener("input",n=>{let i=parseInt(n.target.value);if(n.target.style.setProperty("--pct",`${i}%`),Gt(i),s&&(s.innerHTML=gt(i)),g)try{g.setVolume(i)}catch{}})}if(s){let a=80;s.addEventListener("click",()=>{if(!e)return;let n=parseInt(e.value),i=n>0?0:a||80;n>0&&(a=n),ot(e,s,g,i)})}}var Qe=!1,We=[];window.onYouTubeIframeAPIReady=()=>{Qe=!0,We.splice(0).forEach(t=>t()),import("./chunk-4ON2M4WS.js").then(t=>t.notifyYtReady()).catch(()=>{})};function ne(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Je(t){if(Qe&&window.YT?.Player){t();return}We.push(t)}var tt=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Gt=t=>localStorage.setItem("kanaVol",String(t)),gt=()=>b("volume");function ot(t,e,s,a){if(t&&(t.value=a,t.style.setProperty("--pct",`${a}%`)),e&&(e.innerHTML=gt(a)),s)try{s.setVolume(a)}catch{}}var h=null,Y=0,A=null,wt=0,ae=0,q=!1,St="timeline",Dt={},H={},Ft=new Map,O=!1,j=!1,g=null,Pt=null,It=null,Ze="sh1anViewerSetlistCollapsed",U=!1;function ie(){St=d.activeTab||"timeline",d.activeTab="player",D(".tab-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),D(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player")),document.body.dataset.activeTab="player"}function Nt(){let t=Dt;Dt={},N(St||"timeline",t)}function Ys(){q=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function F(t){let e=Math.floor(t),s=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return s>0?`${s}:${String(a).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${a}:${String(n).padStart(2,"0")}`}function Xe(t){return`sh1an-ts-${t.channel||""}-${t.index||""}`}function et(t){try{return JSON.parse(localStorage.getItem(Xe(t))||"null")||{}}catch{return{}}}function Kt(t,e){try{localStorage.setItem(Xe(t),JSON.stringify(e))}catch{}}var J=-1;function Os(t,e,s,a){let n=e===a,i=s[e],r=i!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" title="${m(F(i))} \u306B\u79FB\u52D5">${m(F(i))}</button><button class="sv-ts-del" data-idx="${e}" data-action="del-ts" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u524A\u9664">${b("close")}</button>`:"",o=(H[e]||[]).map(p=>`<button class="sv-cts-badge" data-idx="${e}" data-action="cts-seek" data-cts-seconds="${p.timeSeconds}" title="\u307F\u3093\u306A\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7: ${m(F(p.timeSeconds))}">${m(F(p.timeSeconds))}</button>`).join(""),u=`<button class="sv-cts-propose" data-idx="${e}" data-action="cts-propose" type="button">+ \u63D0\u6848</button>`,v=`<div class="sv-cts-row">${o}${u}</div>`;return`<div class="sv-song${n?" is-current":""}" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">${r}<button class="sv-ts-set" data-idx="${e}" data-action="set-ts" title="\u73FE\u5728\u306E\u518D\u751F\u6642\u523B\u3092\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u8A18\u9332">${b("time")} \u30E1\u30E2</button></div>
    ${v}
  </div>`}async function js(t){if(H={},!t?.channel||t?.index==null)return;let e=`${t.channel}:${t.index}`;if(Ft.has(e)){H=Ft.get(e)||{};let n=l("#stream-viewer");if(!n||n._currentStream!==t)return;let i=l("#sv-setlist");i&&rt(i,t.songs,et(t),J),He(t);return}try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(n);if(!i.ok)return;let r=await i.json();for(let c of r.items||[])H[c.songIndex]||(H[c.songIndex]=[]),H[c.songIndex].push({timeSeconds:c.timeSeconds,note:c.note??null});Ft.set(e,H)}catch{}let s=l("#stream-viewer");if(!s||s._currentStream!==t)return;let a=l("#sv-setlist");a&&rt(a,t.songs,et(t),J),He(t)}function Fs(t,e,s){l("#sv-cts-modal")?.remove();let a=h?.getCurrentTime?.()??0,n=F(Math.floor(a)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u63D0\u6848</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <p class="sv-cts-modal-song">${m(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(n)}" placeholder="0:00" autocomplete="off">
      </label>
      <label class="sv-cts-modal-label">
        \u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-note-input" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-cts-submit" type="button">\u63D0\u6848\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-cts-status" hidden></p>
    </div>
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",c=>{c.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let c=i.querySelector("#sv-cts-ts-input").value.trim(),o=i.querySelector("#sv-cts-note-input").value.trim()||null,u=de(c),v=i.querySelector("#sv-cts-status");if(u===null){v.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",v.className="sv-cts-modal-status error",v.hidden=!1;return}let p=i.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:o})});if(f.ok)v.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",v.className="sv-cts-modal-status success",v.hidden=!1,p.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let w=await f.json().catch(()=>({}));v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${w.error||f.statusText}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function c(o){o.key==="Escape"&&(r(),document.removeEventListener("keydown",c))})}function He(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let a=Object.keys(H).length>=t.songs.length;e.textContent=a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function Ks(t){l("#sv-bulk-modal")?.remove();let e=et(t),n=Object.keys(H).length>=t.songs.length,i=t.songs.map((o,u)=>{let v=e[u]!=null?F(e[u]):"",p=H[u]?.[0]?.timeSeconds!=null?F(H[u][0].timeSeconds):"",f=v||p;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${m(o.title)}">${m(o.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">${b("time")}</button>
      </div>`}).join(""),r=document.createElement("div");r.id="sv-bulk-modal",r.className="sv-cts-modal-overlay",r.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <details class="sv-paste-area">
        <summary class="sv-paste-summary">\u914D\u4FE1\u30B3\u30E1\u30F3\u30C8\u304B\u3089\u4E00\u62EC\u5165\u529B</summary>
        <textarea class="sv-paste-textarea" placeholder="\u914D\u4FE1\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30B3\u30E1\u30F3\u30C8\u3092\u8CBC\u308A\u4ED8\u3051&#10;\u4F8B: 23:16\u3000\u5FAE\u304B\u306A\u30AB\u30AA\u30EA / Perfume\u300027:58"></textarea>
        <div class="sv-paste-btns">
          <button class="sv-paste-apply btn ghost" type="button">\u89E3\u6790\u3057\u3066\u5165\u529B</button>
          <span class="sv-paste-result" hidden></span>
        </div>
      </details>
      <p class="sv-bulk-hint">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u5165\u529B\u3057\u3066\u4E00\u62EC\u7533\u8ACB\u3067\u304D\u307E\u3059\u3002\u7A7A\u6B04\u306E\u66F2\u306F\u30B9\u30AD\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-bulk-rows">${i}</div>
      <label class="sv-cts-modal-label" style="margin-top:10px">
        \u5171\u901A\u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-bulk-note" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u63D0\u6848\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-bulk-submit" type="button">\u4E00\u62EC\u7533\u8ACB\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-bulk-status" hidden></p>
    </div>
  `,document.body.appendChild(r);let c=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",c),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",c),r.addEventListener("click",o=>{o.target===r&&c()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let u=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(f=>f.trim()).filter(Boolean),v=0;for(let f of u){let w=an(f);if(!w)continue;let L=on(w.title,w.artist,t.songs);if(L>=0){let $=r.querySelector(`[data-bulk-ts-idx="${L}"]`);$&&($.value=w.start,v++)}}let p=r.querySelector(".sv-paste-result");p&&(p.textContent=v>0?`${u.length}\u884C\u3092\u89E3\u6790 \u2192 ${v}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",p.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",o=>{let u=o.target.closest("[data-bulk-now]");if(!u)return;let v=parseInt(u.dataset.bulkNow,10),p=h?.getCurrentTime?.();if(p!=null){let f=r.querySelector(`[data-bulk-ts-idx="${v}"]`);f&&(f.value=F(Math.floor(p)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let o=r.querySelector("#sv-bulk-note").value.trim()||null,u=r.querySelector("#sv-bulk-status"),v=r.querySelector("#sv-bulk-submit"),p=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(L=>{let $=parseInt(L.dataset.bulkTsIdx,10),k=de(L.value.trim());k!==null&&p.push({songIndex:$,timeSeconds:k})}),!p.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}v.disabled=!0,v.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,u.hidden=!0;let f=0,w=0;await Promise.all(p.map(async L=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:L.songIndex,timeSeconds:L.timeSeconds,submitterNote:o})})).ok?f++:w++}catch{w++}v.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+w}/${p.length})`})),w===0?(u.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",v.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${f}\u4EF6\u6210\u529F / ${w}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",v.disabled=!1,v.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function o(u){u.key==="Escape"&&(c(),document.removeEventListener("keydown",o))})}function zs(){try{return JSON.parse(localStorage.getItem("sh1an-playlists")||"null")||[]}catch{return[]}}var le="sh1anViewerQueueCollapsed",x=null,kt=!1;function ct(t){let e=x,s=e?.items?.[t];if(s){e.idx=t,kt=!0;try{s.kind==="mv"?_({url:s.video.url,title:s.video.title,isMv:!0}):_(s.stream)}finally{kt=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&(x={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("sh1anListRepeat")==="1",collapsed:localStorage.getItem(le)==="1"},ct(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let a=t.filter(i=>i?.url).map((i,r)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${r}`,stream:i._stream}:{kind:"mv",key:`mv:${M(i.url)||r}`,video:{...i,isMv:!0}});if(!a.length)return!1;x={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:a,idx:Math.max(0,Math.min(e,a.length-1)),repeat:localStorage.getItem("sh1anListRepeat")==="1",collapsed:localStorage.getItem(le)==="1"};let n=x.items[x.idx];kt=!0;try{n.kind==="mv"?_({...n.video,isMv:!0},s):_(n.stream,s)}finally{kt=!1}return!0};function re(){let t=x;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
    <div class="sv-bp-section sv-queue-section${t.collapsed?" is-collapsed":""}">
      <div class="sv-bp-sh sv-queue-head">${b("playlist")} ${m(t.name)}
        <span class="sv-bp-sh-sub">\uFF08${t.idx+1} / ${t.items.length}\uFF09</span>
        <span class="sv-queue-current">${m(s)}</span>
        <button class="sv-queue-toggle" type="button"
          data-svq-action="toggle" aria-expanded="${!t.collapsed}"
          title="${t.collapsed?"\u30AD\u30E5\u30FC\u3092\u958B\u304F":"\u30AD\u30E5\u30FC\u3092\u9589\u3058\u308B"}">${t.collapsed?"\u958B\u304F":"\u9589\u3058\u308B"}</button>
        <button class="sv-queue-repeat${t.repeat?" is-on":""}" type="button"
          data-svq-action="repeat" aria-pressed="${t.repeat}"
          title="\u30EA\u30B9\u30C8\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u307E\u3067\u518D\u751F\u3057\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">${b("repeat")} \u30EA\u30D4\u30FC\u30C8</button>
      </div>
      <div class="sv-queue-list">
        ${t.items.map((a,n)=>{let i=a.kind==="mv"?a.video?.title||"\u52D5\u753B":a.stream?.title||"\u914D\u4FE1",r=a.kind==="mv"?b("video"):b("calendar"),c=a.kind==="mv"?"\u52D5\u753B":`${V(a.stream?.date)}\u3000\u7B2C${a.stream?.index}\u67A0`;return`<button class="sv-queue-row${n===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${n}">
            <span class="sv-queue-num">${n+1}</span>
            <span class="sv-queue-title">${m(i)}</span>
            <span class="sv-queue-meta">${r} ${m(c)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function ts(t){let e=t.target.closest("[data-svq-action]");if(!e||!x)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==x.idx&&ct(s),!0}if(e.dataset.svqAction==="repeat"){x.repeat=!x.repeat;try{localStorage.setItem("sh1anListRepeat",x.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",x.repeat),e.setAttribute("aria-pressed",String(x.repeat)),!0}if(e.dataset.svqAction==="toggle"){x.collapsed=!x.collapsed;try{localStorage.setItem(le,x.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=re()),oe(l("#sv-below-player")),!0}return!1}function oe(t){if(x?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function es(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(n=>n.channel===s.channel&&n.index===s.index);a<0||a>=t.length-1||_(t[a+1])}async function ss(t){let e=await ce(),s=M(t?.url);if(!s||!e.length)return;let a=e.findIndex(i=>M(i.url)===s);if(a<0||a>=e.length-1)return;let n=e[a+1];_({...n,isMv:!0})}async function Gs(t){let e=await ce(),s=M(t?.url);if(!s||!e.length)return;let a=e.findIndex(n=>M(n.url)===s);a<=0||_({...e[a-1],isMv:!0})}function ns(t){if(!t||K(t))return;let e=h||g;if(j&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(x?.items?.length){let a=x;a.idx<a.items.length-1?ct(a.idx+1):a.repeat&&ct(0);return}if(!O)return;let s=t._currentStream;s?.isMv?ss(s):es()}function dt(){It&&(clearInterval(It),It=null)}function Qs(t,e){dt();let s=!1;It=setInterval(()=>{if(t!==Y||e.hidden||!h){dt();return}try{let a=h.getPlayerState?.();a===window.YT?.PlayerState?.ENDED?(s||ns(e),s=!0):a===window.YT?.PlayerState?.PLAYING&&(s=!1);let n=h.getCurrentTime?.()??0,i=e._currentStream;if(i?.songs?.length){let r=et(i),c=-1;for(let o=0;o<i.songs.length;o++)r[o]!=null&&n>=r[o]&&(c=o);c!==J&&(J=c,Ws(c))}}catch{}},700)}function Ws(t){let e=l("#sv-setlist");if(!e)return;e.querySelectorAll(".sv-song").forEach((a,n)=>a.classList.toggle("is-current",n===t))}function as(t){U=!!t;try{localStorage.setItem(Ze,U?"1":"0")}catch{}let e=l("#stream-viewer .sv-panel"),s=l("#sv-setlist-toggle");e&&e.classList.toggle("is-setlist-collapsed",U),s&&(s.textContent=U?"\u958B\u304F":"\u7573\u3080",s.title=U?"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u958B\u304F":"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u6298\u308A\u305F\u305F\u3080",s.setAttribute("aria-expanded",String(!U)))}function Js(){try{U=localStorage.getItem(Ze)==="1"}catch{}as(U)}function Zs(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(n=>n.channel===s.channel&&n.index===s.index);a<=0||_(t[a-1])}function is(){let t=h||g;if(t)try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo?.():t.playVideo?.()}catch{}}function Vt(t){D('.sv-bp-control-btn[data-bp-action="toggle-play"]').forEach(e=>{e.innerHTML=t?b("pause"):b("play"),e.title=t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F",e.setAttribute("aria-label",t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F"),e.setAttribute("aria-pressed",String(t))})}function ls(){return'<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>'}function rs(t){return zs().some(e=>(e.streams||[]).includes(t))}function os(t,e,s){import("./chunk-YA2VNLZW.js").then(a=>{a.showAddToPlaylistModal(t,e,{onChange:n=>{s?.classList.toggle("is-saved",!!n),s?.setAttribute("aria-pressed",String(!!n)),s&&(s.title=n?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58")}})}).catch(()=>{})}function Xs(t){return t.length?t.map(e=>{let s=Oe(e.stream.url)||at(e.stream.url);return`<button class="sv-side-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(e.stream.channel)}" data-bp-index="${e.stream.index}">
      ${s?`<img class="sv-side-rel-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="sv-side-rel-thumb sv-side-rel-thumb--empty"></span>'}
      <span class="sv-side-rel-body">
        <span class="sv-side-rel-title">${m(e.stream.title||"\u914D\u4FE1")}</span>
        <span class="sv-side-rel-meta">${V(e.stream.date)} / ${e.overlap}\u66F2\u4E00\u81F4</span>
        <span class="sv-side-rel-songs">${e.sharedSongs.map(a=>m(a)).join("\u3001")}</span>
      </span>
    </button>`}).join(""):'<div class="sv-side-empty">\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}function tn(t){let e=l("#sv-side-related");e&&(e.innerHTML=`
    <div class="sv-side-related-head">
      <span>\u95A2\u9023\u914D\u4FE1</span>
      <span>${t.length?`${t.length}\u4EF6`:""}</span>
    </div>
    <div class="sv-side-related-list">${Xs(t)}</div>
  `)}function cs(t){return/縦型|たて配信|タテ|#?shorts|ショート|vertical/i.test(t?.title||"")||/\/shorts\//.test(t?.url||"")}function qe(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=at(t.url),a=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card ${cs(t)?"sv-bp-nav-card--portrait":"sv-bp-nav-card--landscape"}" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(a)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${V(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function en(t){let e=l("#sv-below-player");if(!e)return;let s=d.data?.streams||[],a=s.findIndex(v=>v.channel===t.channel&&v.index===t.index),n=a>=0&&a<s.length-1?s[a+1]:null,i=a>0?s[a-1]:null,r=new Set(t.songs.map(v=>v.title)),c=s.filter((v,p)=>p!==a).map(v=>{let p=v.songs.filter(f=>r.has(f.title));return{stream:v,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(v=>v.overlap>0).sort((v,p)=>p.overlap-v.overlap).slice(0,8),o=nt(t),u=rs(o);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${re()}

      <!-- \u64CD\u4F5C + \u524D\u5F8C\u30CA\u30D3 -->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-bp-action="prev-stream"
            ${i?"":"disabled"} title="\u524D\u306E\u914D\u4FE1" aria-label="\u524D\u306E\u914D\u4FE1">${b("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-bp-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${b("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-bp-action="next-stream"
            ${n?"":"disabled"} title="\u6B21\u306E\u914D\u4FE1" aria-label="\u6B21\u306E\u914D\u4FE1">${b("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${O?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${O?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${j?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${j?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${u?" is-saved":""}" type="button"
            data-bp-action="bookmark-stream" aria-pressed="${u}" title="${u?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${u?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${ls()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${n?`\u6B21\uFF1A${m(n.title||"\u6B21\u306E\u914D\u4FE1")}`:"\u6700\u5F8C\u306E\u914D\u4FE1\u3067\u3059"}
        </div>
        <div class="sv-bp-nav-cards">
          ${qe(i,"newer")}
          ${qe(n,"older")}
        </div>
        <div class="sv-bp-info-compact">
          <span>${V(t.date)}</span>
          <span>\u7B2C${t.index}\u67A0</span>
          <span>${t.songs.length}\u66F2</span>
        </div>
      </div>

    </div>
  `,tn(c),e.onchange=v=>{let p=v.target.closest("#sv-ap-check"),f=v.target.closest("#sv-repeat-check");if(p){O=p.checked;let w=p.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",O)}if(f){j=f.checked;let w=f.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",j)}},e.onclick=v=>{if(ts(v))return;let p=v.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let w=p.dataset.bpChannel,L=parseInt(p.dataset.bpIndex,10),$=(d.data?.streams||[]).find(k=>k.channel===w&&k.index===L);$&&_($)}else f==="prev-stream"?Zs():f==="next-stream"?es():f==="toggle-play"?is():f==="bookmark-stream"&&os(o,t.title||"\u914D\u4FE1",p)},oe(e);try{let v=(h||g)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;Vt(v)}catch{}}var yt=null;async function ce(){if(yt)return yt;try{yt=(await(await fetch("data/music.json")).json())?.videos||[]}catch{yt=[]}return yt}function sn(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function nn(t){let e=l("#sv-below-player");if(!e)return;try{await Wt()}catch{}let s=await ce();if(l("#stream-viewer")?._currentStream!==t)return;let a=d.channelData?.combined?.streams||d.data?.streams||[],n=Q(sn(t.title)),i=[];if(n.length>1)for(let y of a){let S=(y.songs||[]).find(C=>{let P=Q(C.title);return P===n||P.length>1&&(P.includes(n)||n.includes(P))});S&&i.push({stream:y,songTitle:S.title})}let r=i.slice(0,8),c={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},o=s.find(y=>y.url===t.url),u=s.filter(y=>y.url!==t.url).sort((y,S)=>{let C=o&&y.type===o.type?1:0,P=o&&S.type===o.type?1:0;return C!==P?P-C:(S.publishedAt||"").localeCompare(y.publishedAt||"")}).slice(0,12),v=s.findIndex(y=>M(y.url)===M(t.url)),p=v>=0&&v<s.length-1?s[v+1]:null,f=v>0?s[v-1]:null,w=o||s.find(y=>M(y.url)===M(t.url)),L=w?"mv:"+w.id:"",$=L?rs(L):!1,k=x,E=!!k?.items?.length,z=E&&k.idx>0||!!f,vt=E&&k.idx<k.items.length-1||!!p;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${re()}
      <!-- \u64CD\u4F5C\uFF08\u6B4C\u67A0\u30D3\u30E5\u30FC\u30EF\u30FC\u3068\u540C\u3058: \u524D\u3078 / \u518D\u751F\u505C\u6B62 / \u6B21\u3078 / \u9023\u7D9A\u518D\u751F / \u30EA\u30D4\u30FC\u30C8 / \u681E\uFF09-->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-prev"
            ${z?"":"disabled"} title="\u524D\u306E\u52D5\u753B" aria-label="\u524D\u306E\u52D5\u753B">${b("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-mv-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${b("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-next"
            ${vt?"":"disabled"} title="\u6B21\u306E\u52D5\u753B" aria-label="\u6B21\u306E\u52D5\u753B">${b("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${O?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${O?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${j?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${j?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${$?" is-saved":""}" type="button"
            data-mv-action="bookmark-mv" data-mv-key="${m(L)}" aria-pressed="${$}"
            title="${$?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${$?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${ls()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${p?`\u6B21\uFF1A${m(p.title||"\u6B21\u306E\u52D5\u753B")}`:'<span class="sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${b("mic")} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(y=>{let S=at(y.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${m(y.stream.channel)}" data-mv-index="${y.stream.index}">
              ${S?`<img class="sv-bp-rel-thumb" src="${m(S)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${m(y.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${V(y.stream.date)}\u3000\u7B2C${y.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">${b("music")} ${m(y.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${u.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${b("video")} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${u.map(y=>{let S=at(y.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${m(y.url)}" data-mv-title="${m(y.title)}">
              ${S?`<img class="sv-mv-card-thumb" src="${m(S)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${m(y.title)}</div>
                <div class="sv-mv-card-type">${c[y.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=y=>{let S=y.target.closest("#sv-ap-check"),C=y.target.closest("#sv-repeat-check");if(S){O=S.checked;let P=S.closest(".sv-bp-ap-switch");P&&P.classList.toggle("sv-bp-ap-switch--on",O)}if(C){j=C.checked;let P=C.closest(".sv-bp-ap-switch");P&&P.classList.toggle("sv-bp-ap-switch--on",j)}},e.onclick=y=>{if(ts(y))return;let S=y.target.closest("[data-mv-action]");if(!S)return;let C=S.dataset.mvAction;if(C==="open-stream"){let P=S.dataset.mvChannel,vs=parseInt(S.dataset.mvIndex,10),ve=(d.channelData?.combined?.streams||d.data?.streams||[]).find(pe=>pe.channel===P&&pe.index===vs);ve&&_(ve)}else C==="open-mv"?_({url:S.dataset.mvUrl,title:S.dataset.mvTitle,isMv:!0}):C==="all-videos"?N("playlists"):C==="toggle-play"?is():C==="mv-prev"?E&&k.idx>0?ct(k.idx-1):Gs(t):C==="mv-next"?E&&k.idx<k.items.length-1?ct(k.idx+1):ss(t):C==="bookmark-mv"&&os(S.dataset.mvKey,t.title||"\u52D5\u753B",S)},oe(e);try{let y=(h||g)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;Vt(y)}catch{}}function rt(t,e,s,a){t.innerHTML=e.map((n,i)=>Os(n,i,s,a)).join("")}var ds=/\b\d{1,2}:\d{2}(?::\d{2})?\b/g;function de(t){let e=String(t||"").match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function an(t){let e=String(t||"").trim();if(!e)return null;let s=e.match(ds)||[];if(!s.length)return null;let a=ln(e);if(!a)return null;let{title:n,artist:i}=rn(a);return n?{start:s[0].trim(),title:n,artist:i,end:s.length>1?s[s.length-1].trim():"",raw:a}:null}function ln(t){return String(t||"").replace(ds," ").replace(/https?:\/\/\S+/gi," ").replace(/^\s*(?:\d+[\).．、:]|[#＃]\d+|[・\-*＊•▶▷♪♫🎵🎶]+)\s*/u,"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`]+|[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").replace(/\s*(?:[-–—~〜→⇒>|｜]{2,}|[|｜])\s*$/g,"").replace(/[ \t　]+/g," ").trim()}function zt(t){return String(t||"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`・\-*＊•▶▷♪♫🎵🎶]+/u,"").replace(/[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").trim()}function rn(t){let e=zt(t);if(!e)return{title:"",artist:""};let s=[/^(.+?)\s*(?:\/|／)\s*(.+)$/,/^(.+?)\s+(?:by|BY|By)\s+(.+)$/,/^(.+?)\s*(?:-|－|–|—|~|〜|｜|\|)\s*(.+)$/,/^(.+?)\s+(?:covered\s+by|cover\s+by|歌[:：])\s+(.+)$/i];for(let a of s){let n=e.match(a);if(!n)continue;let i=zt(n[1]),r=zt(n[2]);if(i&&r)return{title:i,artist:r}}return{title:e,artist:""}}function Q(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function on(t,e,s){let a=Q(t),n=Q(e),i=-1,r=0;for(let c=0;c<s.length;c++){let o=Q(s[c].title),u=Q(s[c].artist),v=0;o===a?v+=80:a.length>1&&(o.includes(a)||a.includes(o))&&(v+=40),n&&u===n?v+=20:n&&n.length>1&&(u.includes(n)||n.includes(u))&&(v+=10),v>r&&(r=v,i=c)}if(r<40&&n)for(let c=0;c<s.length;c++){let o=Q(s[c].title),u=Q(s[c].artist),v=0;o===n?v+=70:n.length>1&&(o.includes(n)||n.includes(o))&&(v+=35),u&&u===a?v+=20:a.length>1&&(u.includes(a)||a.includes(u))&&(v+=10),v>r&&(r=v,i=c)}return r>=40?i:-1}function us(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
    <div class="sv-container">
      <div class="sv-header">
        <button class="sv-close-btn" id="sv-close" type="button" title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09">
          \u2190 <span class="sv-close-label">\u623B\u308B</span><span class="sv-esc-hint">Esc</span>
        </button>
        <div class="sv-title-area">
          <nav class="sv-breadcrumb" aria-label="\u73FE\u5728\u5730">
            <button class="sv-bc-btn" type="button" data-bc-tab="dashboard">\u30DB\u30FC\u30E0</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <button class="sv-bc-btn" type="button" data-bc-tab="timeline">\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3</button>
            <span class="sv-bc-sep" aria-hidden="true">/</span>
            <span class="sv-bc-current" id="sv-bc-title"></span>
          </nav>
          <div class="sv-stream-meta" id="sv-stream-meta"></div>
        </div>
        <button class="sv-fullscreen-btn" id="sv-fullscreen-btn" type="button"
          title="\u5927\u753B\u9762\u3067\u518D\u751F" aria-pressed="false">${b("external")}</button>
        <div class="sv-volume-wrap">
          <button class="vol-btn" id="sv-vol-btn" type="button" aria-label="\u97F3\u91CF">${b("volume")}</button>
          <input class="vol-slider" id="sv-vol-slider" type="range" min="0" max="100" value="100" aria-label="\u97F3\u91CF">
        </div>
        <button class="sv-music-btn" id="sv-music-btn" type="button" title="\u73FE\u5728\u4F4D\u7F6E\u304B\u3089\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F">
          <span class="sv-music-icon">${b("music")}</span><span class="sv-music-label">\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u8074\u304F</span>
        </button>
        <button class="sv-share-btn" id="sv-share-btn" type="button" title="\u3053\u306E\u52D5\u753B\u306E\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC">
          <span class="sv-share-icon">${b("link")}</span><span class="sv-share-label">\u5171\u6709</span>
        </button>
        <a class="sv-yt-link" id="sv-yt-link" href="#" target="_blank" rel="noopener" title="YouTube\u3067\u958B\u304F">
          <span class="sv-yt-icon">${b("external")}</span><span class="sv-yt-label">YouTube\u3067\u958B\u304F</span>
        </a>
      </div>
      <div class="sv-body">
        <div class="sv-player-section">
          <div class="sv-player-wrap" id="sv-player-wrap">
            <div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>
          </div>
          <div class="sv-below-player" id="sv-below-player"></div>
        </div>
        <div class="sv-panel">
          <div class="sv-panel-head">
            <span>\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8</span>
            <div class="sv-panel-head-right">
              <button class="sv-setlist-toggle" id="sv-setlist-toggle" type="button" aria-expanded="true">\u7573\u3080</button>
              <button class="sv-import-toggle" id="sv-import-toggle" type="button">\u4E00\u62EC\u5165\u529B</button>
              <button class="sv-cts-bulk-btn" id="sv-cts-bulk-btn" type="button" hidden>\u30BB\u30C8\u30EA\u767B\u9332</button>
              <span class="sv-song-count" id="sv-song-count"></span>
            </div>
          </div>
          <div class="sv-import-area" id="sv-import-area" hidden>
            <p class="sv-import-desc">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30921\u884C\u306B1\u3064\u5165\u529B\uFF08\u4E0A\u304B\u3089\u9806\u306B\u66F2\u3078\u5272\u308A\u5F53\u3066\uFF09</p>
            <textarea class="sv-import-input" id="sv-import-input" rows="6"
              placeholder="\u4F8B:&#10;15:59&#10;21:12&#10;25:57&#10;1:08:13"></textarea>
            <div class="sv-import-btns">
              <button class="sv-import-apply" id="sv-import-apply" type="button">\u9069\u7528</button>
              <button class="sv-import-cancel" id="sv-import-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
            </div>
          </div>
      <div class="sv-panel-hint">${b("time")} \u3067\u73FE\u5728\u6642\u523B\u3092\u30E1\u30E2 \uFF0F \u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5</div>
          <div class="sv-setlist" id="sv-setlist"></div>
          <div class="sv-side-related" id="sv-side-related"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>$t()),l("#sv-share-btn").addEventListener("click",Ns),l("#sv-music-btn").addEventListener("click",As),l("#sv-fullscreen-btn").addEventListener("click",Ys),l("#sv-setlist-toggle")?.addEventListener("click",()=>as(!U)),l("#sv-side-related")?.addEventListener("click",n=>{let i=n.target.closest('[data-bp-action="open-stream"]');if(!i)return;let r=i.dataset.bpChannel,c=parseInt(i.dataset.bpIndex,10),o=(d.data?.streams||[]).find(u=>u.channel===r&&u.index===c);o&&_(o)});let s=l("#sv-vol-slider"),a=l("#sv-vol-btn");if(s){let n=tt();s.value=n,s.style.setProperty("--pct",`${n}%`),a&&(a.innerHTML=gt(n)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Gt(r),a&&(a.innerHTML=gt(r)),h)try{h.setVolume(r)}catch{}})}if(a){let n=80;a.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:n||80;i>0&&(n=i),ot(s,a,h,r),Gt(r)})}e.querySelectorAll("[data-bc-tab]").forEach(n=>{n.addEventListener("click",()=>{St=n.dataset.bcTab,$t()})}),l("#sv-import-toggle").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!n.hidden,n.hidden||l("#sv-import-input")?.focus())}),l("#sv-import-cancel").addEventListener("click",()=>{let n=l("#sv-import-area");n&&(n.hidden=!0);let i=l("#sv-import-input");i&&(i.value="")}),l("#sv-import-apply").addEventListener("click",()=>{let n=e._currentStream;if(!n)return;let i=l("#sv-import-input");if(!i)return;let c=i.value.split(`
`).map(v=>de(v)).filter(v=>v!==null);if(!c.length)return;let o=et(n);c.forEach((v,p)=>{p<n.songs.length&&(o[p]=v)}),Kt(n,o),rt(l("#sv-setlist"),n.songs,o,J);let u=l("#sv-import-area");u&&(u.hidden=!0),i.value=""}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let n=e._currentStream;n&&Ks(n)}),l("#sv-setlist").addEventListener("click",n=>{let i=n.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),c=e._currentStream;if(!c)return;let o=et(c);if(i.dataset.action==="seek"){if(o[r]!=null&&h?.seekTo){h.seekTo(o[r],!0);try{h.playVideo()}catch{}}}else if(i.dataset.action==="set-ts"){let u=h?.getCurrentTime?.();u!=null&&(o[r]=Math.floor(u),Kt(c,o),rt(l("#sv-setlist"),c.songs,o,J))}else if(i.dataset.action==="del-ts")delete o[r],Kt(c,o),rt(l("#sv-setlist"),c.songs,o,J);else if(i.dataset.action==="cts-seek"){let u=Number(i.dataset.ctsSeconds);if(!isNaN(u)&&h?.seekTo){h.seekTo(u,!0);try{h.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let u=c.songs[r];Fs(c,r,u?.title||`\u66F2 ${r+1}`)}})}function _(t,e=0){if(!t?.url)return;let s=M(t.url);if(!s){Us(t.url);return}if(Ue()){window.open(Ye(t.url,e),"_blank","noopener");return}us(),ne(),dt(),kt||(x=null);let a=l("#stream-viewer");if(K(a)){if(a._currentStream?.url===t.url){if(!je()&&!window.__restoreMusicExternalPlayer?.()&&Fe(),e>0)try{h?.seekTo(Math.floor(e),!0),h?.playVideo()}catch{}return}qt()}let n=window.__takeOverMusicPlayerVideo?.(t.url)||null;n||import("./chunk-4ON2M4WS.js").then(k=>(k.releaseMusicPlayerVideo||k.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{g?.pauseVideo()}catch{}i.hidden=!0,ut()}if(A=null,q){q=!1;let k=l("#stream-viewer");k&&k.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}q=!1,ie();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv);let c=cs(t);r.classList.toggle("sv-portrait",c),r._currentStream=t,Js();let o=++Y,u=r.querySelectorAll("[data-bc-tab]");u[1]&&(t.isMv?(u[1].dataset.bcTab="playlists",u[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(u[1].dataset.bcTab="timeline",u[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let v=l("#sv-bc-title");v&&(v.textContent=t.title||"\u914D\u4FE1");let p=l("#sv-stream-meta");p&&(p.innerHTML=t.isMv?"":`${V(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000${b("mic")} ${t.songs.length}\u66F2`);let f=l("#sv-yt-link");f&&(f.href=t.url);let w=l("#sv-song-count");if(w&&(w.textContent=t.isMv?"":`${t.songs.length}\u66F2`),H={},t.isMv){let k=l("#sv-setlist");k&&(k.innerHTML="");let E=l("#sv-below-player");E&&(E.innerHTML="");let z=l("#sv-side-related");z&&(z.innerHTML=""),nn(t)}else{let k=et(t);rt(l("#sv-setlist"),t.songs,k,J),js(t),en(t)}r.hidden=!1,document.body.style.overflow="",B(),window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),h=null;let L=l("#sv-player-wrap");L.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let $=Math.floor(e||n?.currentTime||0);if(n?.player){L.innerHTML="",n.iframe?(n.iframe.style.width="100%",n.iframe.style.height="100%",L.appendChild(n.iframe)):L.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',h=n.player;try{h.setVolume?.(tt()),$>1&&h.seekTo?.($,!0),h.playVideo?.()}catch{}ot(l("#sv-vol-slider"),l("#sv-vol-btn"),null,tt()),Vt(!0),Qs(o,r);return}Je(()=>{if(o!==Y||r.hidden)return;L.innerHTML="";let k=document.createElement("div");L.appendChild(k);try{h=new window.YT.Player(k,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,origin:location.origin,rel:0,modestbranding:1,...$>0?{start:$}:{}},events:{onReady:E=>{let z=tt();try{E.target.setVolume(z)}catch{}ot(l("#sv-vol-slider"),l("#sv-vol-btn"),null,z);try{E.target.setPlaybackQuality("hd1080")}catch{}try{E.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if($>5)try{E.target.seekTo($,!0)}catch{}},onStateChange:E=>{if(o===Y){if(Vt(E.data===window.YT.PlayerState.PLAYING),E.data===window.YT.PlayerState.PLAYING)try{E.target.setPlaybackQuality("hd1080")}catch{}E.data===window.YT.PlayerState.ENDED&&ns(r)}},onError:()=>{o===Y&&(L.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${$>0?`&start=${$}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{L.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${$>0?`&start=${$}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function $t(){let t=l("#stream-viewer");if(!t||t.hidden||K(t))return;if(q){q=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let a=l("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","false");return}if(Is())return;++Y,t.hidden=!0,t._currentStream=null,dt(),h=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",Nt(),B()}window.__openStreamViewer=_;window.__closeStreamMiniPlayer=()=>{let t=l("#stream-viewer");if(K(t))return qt(),!0;let e=l("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,ut(),A=null,!0):!1};function Qt(t){let e=Ct(t),s=l("#song-modal"),a=l("#song-modal-body"),n=l("#song-modal-title");if(!e||!s||!a||!n)return;ye(e),n.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(o=>({...o,thumbnail:at(o.url),thumbnailFallback:he(o.url),thumbnailTiny:Oe(o.url),detailKey:nt(o)})),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),c=Bt(e.key);a.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${m(e.key)}">${m(e.artist)}</button>
        <div class="song-detail-tags">${r.map(o=>`<span class="tag-badge">${m(o)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${V(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${c?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${b("heart")} ${c?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${m(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(o=>`
        <div class="song-detail-stream">
          ${o.thumbnail&&o.url?`<a class="song-detail-thumb-link" href="${m(o.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F"><img class="song-detail-thumb" src="${m(o.thumbnail)}" data-fallback="${m(o.thumbnailFallback)}" data-tiny="${m(o.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${m(e.key)}" data-streamkey="${m(o.detailKey)}">
            <span>${V(o.date)}</span>
            <strong>${m(o.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function cn(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s();let n=a.target.closest("[data-detail-action]");if(n){if(a.stopPropagation(),n.dataset.detailAction==="close"&&s(),n.dataset.detailAction==="favorite"){let i=n.dataset.songkey;me(i);let r=Bt(i);n.innerHTML=`${b("heart")} ${r?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}`,n.classList.toggle("primary",r),n.classList.toggle("ghost",!r)}if(n.dataset.detailAction==="timeline"){let i=Ct(n.dataset.songkey);s(),i&&Es(i)}if(n.dataset.detailAction==="stream"){let i=Ct(n.dataset.songkey),r=i?.streamRefs?.find(c=>nt(c)===n.dataset.streamkey);s(),i&&r&&Ms(i,r)}if(n.dataset.detailAction==="artist"){let i=Ct(n.dataset.songkey);s(),i&&Cs(i)}}}),t.addEventListener("error",a=>{let n=a.target.closest?.(".song-detail-thumb");if(!n)return;let i=n.dataset.fallback||n.dataset.tiny||"";if(i&&n.src!==i){n.src=i,n.dataset.fallback===i?delete n.dataset.fallback:delete n.dataset.tiny;return}n.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&s()})}var dn=!1;function un(){if(!d.data)return;let{stats:t,streams:e=[]}=d.data,s=e[0]?.date||null,a=Rt(s),n=t.dataGeneratedDate||d.channelData?.dataGeneratedDate||null,i=Rt(n),r=t.channelLabel||t.channelId||"",c=r?`<span class="badge accent" style="margin-right:8px;">${m(r)}</span>`:"";l("#updated-info").innerHTML=c+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${V(n)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let o=l("#stats-grid"),u=Number.isFinite(t.streams)&&t.streams>0?(t.streams*2.4).toFixed(1):"\u2014";o.innerHTML=`
    <div class="stat-card">
      <div class="stat-label">TOTAL SONGS</div>
      <div class="stat-value">${xt(t.total)}<span class="stat-note">\u6B4C\u5531\u56DE\u6570</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">REPERTOIRE UNIQUES</div>
      <div class="stat-value">${xt(t.repertoire)}<span class="stat-note">coverage</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">STREAM COUNT</div>
      <div class="stat-value">${xt(t.streams)}<span class="stat-note">${a!=null?`Last: ${a} days ago`:"No stream data"}</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">TOTAL HOURS</div>
      <div class="stat-value">${u}<span class="stat-note">Avg 2.4h/\u67A0</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">1\u67A0\u5E73\u5747\u66F2\u6570</div>
      <div class="stat-value">${t.avgPerStream}<span class="stat-note">Trending UP</span></div>
    </div>
  `,dn=!0}function vn(){l("#loading").hidden=!1,l("#error").hidden=!0}function pn(){l("#loading").hidden=!0}function mn(t){let e=l("#loading"),s=l("#error"),a=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),a&&(a.textContent=t&&t.message?t.message:String(t))}function fn(t){let e=document.getElementById("page-title");if(!e)return;e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9";let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var hn={new:{name:"sh1an | \u30B7\u30A2\u30F3",handle:"@sh1an",url:"https://www.youtube.com/@sh1an",label:"Main",desc:`\u307D\u3093\u3053\u3064\u4E0D\u61AB\u306A\u9B54\u5C0E\u58EBVsinger
\u304D\u307F\u305F\u3061\u306E\u65E5\u5E38\u3092\u3058\u308F\u3058\u308F\u6E29\u304B\u304F\u3059\u308B\u3001\u4E00\u4E16\u7D00\u63A8\u305B\u308B\u6D3B\u52D5\u8005\u3092\u76EE\u6307\u3057\u3066\u9081\u9032\u4E2D\u3002
\u7DCF\u5408\u30BF\u30B0 #sh1arch1ve / \u30D5\u30A1\u30F3\u30A2\u30FC\u30C8 #sh1anotype / \u30D5\u30A1\u30F3\u30CD\u30FC\u30E0 sh1anchu\u30FB\u3057\u3042\u3093\u3061\u3085`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X",url:"https://x.com/sh1anos"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"YouTube",url:"https://www.youtube.com/@sh1an"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',label:"Twitch",url:"https://twitch.tv/sh1anos"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>',label:"HP",url:"https://lit.link/sh1an"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',label:"Instagram",url:"https://instagram.com/sh1anos"}],avatarUrl:"https://yt3.googleusercontent.com/Dr_8IrPp_iU_7lBmTH8Z9r3Z1cU1QQcb7AwwKEJoURu7nVqa7i6MQ30Wr0feOi7AfGHPMzdjgQ=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/JM4090e_TUtyfV4EBdfECwo3rzveeI3WgbO5VZHvw-2VySPqu2R9Q92NeYKYmhBmHmFQwHcYhw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function Mt(t){let e=hn[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,a=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",n=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(r=>m(r)).join("<br>")}</p>`:"",i=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(r=>`
        <a class="ch-card-link" href="${m(r.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${r.icon}</span>
          <span>${m(r.label)}</span>
        </a>`).join("")}
    </div>`:"";return`
    <div class="ch-card ch-card--${t}">
      <div class="ch-card-banner ch-card-banner--${t}${e.bannerUrl?" ch-card-banner--img":""}">
        ${s}
      </div>
      <div class="ch-card-body">
        <div class="ch-card-header">
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${a}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${m(e.name)}</div>
            <div class="ch-card-handle">${m(e.handle)}</div>
          </div>
        </div>
        ${n}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function bn(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let a="";t==="new"?a=Mt("new"):t==="old"?a=Mt("old"):a=Mt("new")+Mt("old"),s.innerHTML=a,e.hidden=!1,l("#ch-modal-close")?.focus()}function yn(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(a=>{a.addEventListener("click",()=>bn(a.dataset.chModal))})}function gn(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let a=()=>{t.hidden=!1,s.focus()},n=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",a),s.addEventListener("click",n),t.addEventListener("click",i=>{i.target===t&&n()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&n()})}function wn(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("sh1an-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("sh1an-welcome-tip-dismissed","1")})}async function ue(){vn();try{let t=await we();d.channelData=t,!lt&&!t.fullLoaded&&Re();let e=G(),s=!!e.v;d.songsQuery=e.q,d.activeTab=s?"player":At(e.tab)?e.tab:"dashboard",Jt(d.activeTab);let a=e.channel||d.channel||pt;if(W(a)||(a=pt),!W(a)){let n=Object.keys(t.channels)[0];n&&(a=n)}if(!W(a))throw new Error("No channel data could be loaded");Ts(),Ht(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await Rs()||N(e.tab,{updateUrl:!1,initial:!0})),pn(),Bs()}catch(t){console.error("[init] failed:",t),mn(t)}}function kn(){if(!d.channelData)return;let t=G();d.songsQuery=t.q,t.channel!==d.channel&&W(t.channel)&&Ht(t.channel,{resetSearch:!1,updateUrl:!1}),N(t.tab,{updateUrl:!1})}D(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!q&&!K(s)){St=e,$t();return}N(e)})});D(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Ht(t.dataset.channel))})});window.addEventListener("popstate",kn);D("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Ls(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest(".timeline-setlist .setlist-title[data-songkey]");if(e){t.preventDefault(),t.stopPropagation(),Qt(e.dataset.songkey);return}let s=t.target.closest("[data-artist-search]");if(s){t.preventDefault(),t.stopPropagation(),Xt(s.dataset.artistSearch||s.textContent||"");return}let a=t.target.closest("[data-playlist-add]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.playlistAdd,c=a.dataset.streamTitle||"",o=u=>{a.classList.toggle("is-saved",u),a.classList.contains("timeline-save-btn")&&(a.innerHTML=b("bookmark")),a.title=u?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"};import("./chunk-YA2VNLZW.js").then(u=>u.showAddToPlaylistModal(r,c,{onChange:o}));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.streamPlay,c=(d.data?.streams||[]).find(o=>nt(o)===r);c?.url&&_(c);return}if(be(t.target))return;let i=t.target.closest("[data-songkey]");i&&Qt(i.dataset.songkey)});l("#retry-btn").addEventListener("click",ue);l("#reload-btn").addEventListener("click",ue);gn();yn();se();us();cn();Ss();xs();_s();wn();import("./chunk-4ON2M4WS.js").then(t=>{t.setApiLoader(ne),t.initMusicPlayer()}).catch(()=>{});Me(t=>{t.type==="song"?Qt(t.song.key):t.type==="artist"?Xt(t.artist):t.type==="stream"?_(t.stream):t.type==="music-video"&&_({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let n=l("#stream-viewer");if(n&&!n.hidden&&!n.classList.contains("sv-minified")&&!n.classList.contains("sv-music-minified")&&l("#sv-share-modal")?.hidden!==!1&&h){if(t.key===" "){t.preventDefault();try{h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?h.pauseVideo():h.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let r=h.getCurrentTime?.()??0,c=Math.max(0,r+(t.key==="ArrowRight"?10:-10));h.seekTo(c,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Ce();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Le();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let n=l("#help-modal");n&&n.hidden&&(n.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let n=l("#stream-viewer"),i=!!l("#panel-player.active");if(n&&!n.hidden&&(q||i)){t.preventDefault(),$t();return}if(jt()){t.preventDefault(),ht();return}let r=l("#song-modal");if(r&&!r.hidden)return;let c=l("#ch-modal");if(c&&!c.hidden){c.hidden=!0;return}let o=l("#help-modal");if(o&&!o.hidden){o.hidden=!0,l("#help-btn")?.focus();return}let u=l("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});xe(()=>{d.data&&(Ut(),(d.activeTab==="dashboard"||d.activeTab==="analytics")&&st())});function $n(){ue()}$n();export{Ds as getWatchHistory};
