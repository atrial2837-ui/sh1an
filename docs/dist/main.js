import{a as $e,b as Le,e as Bt,f as Se}from"./chunk-QLD7E5MS.js";import{b as be,c as ye,d as ge,i as we,j as ke,k as z,l as W}from"./chunk-7FOBC26O.js";import{a as dt}from"./chunk-RKZOC53G.js";import{a as pe,b as Nt,c as me,e as c}from"./chunk-AW5KTZNU.js";import{E as Rt,F as V,H as et,I as M,J as st,K as fe,M as St,N as he,P as b,a as l,b as D,c as m}from"./chunk-GPIKXWRQ.js";var I=-1,B=[],Ut=null,J=null,xt=null;function Ee(t){Ut=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&pt()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>Yt(s.value)),s.addEventListener("keydown",us),document.getElementById("omni-listbox").addEventListener("click",n=>{let a=n.target.closest("[data-omni-idx]");a&&Ce(Number(a.dataset.omniIdx))})}function Me(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,I=-1,B=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),Yt(""),ps().then(()=>{if(!Ot())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&Yt(s)})}function pt(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),I=-1}function Ot(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function us(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),I=Math.min(I+1,e.length-1),xe(e)):t.key==="ArrowUp"?(t.preventDefault(),I=Math.max(I-1,-1),xe(e)):t.key==="Enter"?(t.preventDefault(),I>=0&&B[I]&&Ce(I)):t.key==="Escape"&&(t.preventDefault(),pt())}function xe(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===I),e.setAttribute("aria-selected",String(s===I))}),I>=0&&t[I]?.scrollIntoView({block:"nearest"})}function Ce(t){let e=B[t];!e||!Ut||(pt(),Ut(e))}function Yt(t){let e=document.getElementById("omni-listbox");if(!e)return;I=-1,B=[];let s=c.data?.songs||[],n=c.data?.streams||[],a=J||[],i=nt(t),r="",d=0;if(!c.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let p=s.slice(0,8);if(p.length){r+=ut("rank","\u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let f of p)B.push({type:"song",song:f}),r+=_e(f,d++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let o=[];try{o=(ke(t,s).results||[]).slice(0,8)}catch{}if(o.length||(o=s.filter(p=>Te(t,`${p.title} ${p.artist}`)).slice(0,8)),o.length){r+=ut("music","\u66F2");for(let p of o)B.push({type:"song",song:p}),r+=_e(p,d++,i)}if(a.length){let p=a.filter(f=>ms(f,t)).slice(0,6);if(p.length){r+=ut("video","\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let f of p)B.push({type:"music-video",video:f}),r+=vs(f,d++,t)}}let u=new Set,v=[];for(let p of s)if(p.artist&&Te(t,p.artist)&&!u.has(p.artist)&&(u.add(p.artist),v.push(p.artist),v.length>=4))break;if(v.length){r+=ut("artist","\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let p of v){let f=s.filter(w=>w.artist===p).length;B.push({type:"artist",artist:p}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${d++}">
        <span class="omni-item-icon">${b("artist")}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${vt(m(p),i)}</span>
          <span class="omni-item-meta">${f}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(n.length){let p=n.filter(f=>{let w=nt(`${f.title||""} ${(f.songs||[]).map($=>`${$.title||""} ${$.artist||""}`).join(" ")}`),L=_t(t);return L.length>0&&L.every($=>w.includes($))}).slice(0,5);if(p.length){r+=ut("calendar","\u914D\u4FE1\u67A0");for(let f of p){B.push({type:"stream",stream:f});let w=f.channel==="new"?"Main":f.channel==="old"?"Archive":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${d++}">
          <span class="omni-item-icon">${b("calendar")}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${vt(m(f.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${V(f.date)}${w?" \xB7 "+w:""} \xB7 ${f.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${m(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function ut(t,e){return`<div class="omni-section-label" role="presentation">${b(t)} ${e}</div>`}function _e(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("music")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${vt(m(t.title),s)}</span>
      <span class="omni-item-meta">${vt(m(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function vs(t,e,s){let n=Pe(t),a=t.originalArtist||t.character||n;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("video")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${vt(m(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${m(n)}${a?" \xB7 "+m(a):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function ps(){return J!==null?Promise.resolve(J):xt||(xt=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(J=Array.isArray(t?.videos)?t.videos:[],J)).catch(()=>(J=[],J)),xt)}function ms(t,e){let s=_t(e);if(!s.length)return!1;let n=fs(t);return s.every(a=>n.includes(a))}function fs(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(n=>n.trim()).filter(Boolean);return nt([e,...s,t.originalArtist,t.character,t.type,Pe(t)].filter(Boolean).join(" "))}function Pe(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function _t(t){return nt(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function Te(t,e){let s=_t(t);if(!s.length)return!1;let n=nt(e);return s.every(a=>n.includes(a))}function nt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function vt(t,e){let n=_t(e).find(r=>r&&t.toLowerCase().includes(r))||nt(e);if(!n)return t;let i=t.toLowerCase().indexOf(n);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+n.length)+"</mark>"+t.slice(i+n.length)}Le();me();var qe={dashboard:()=>import("./chunk-2YZ4IIYX.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-WQRDJNJH.js").then(t=>t.renderRanking),songs:()=>import("./chunk-PCEAZYVQ.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-BSZ4HTFO.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-GI2XEPYV.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-YA2VNLZW.js").then(t=>t.renderPlaylists)},Tt=new Map,Ie=0,at=null;function It(t){return Object.prototype.hasOwnProperty.call(qe,t)}async function hs(t){Tt.has(t)||Tt.set(t,qe[t]());try{return await Tt.get(t)}catch(e){throw Tt.delete(t),e}}function Ne(t){return["dashboard","timeline","analytics"].includes(t)}function bs(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let n={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${m(n[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ys(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function gs(t){if(c.channelData?.fullLoaded)return;c.channelData=t;let e=Q(c.channel)?c.channel:dt,s=Q(e);s&&(c.data=s),!Ne(c.activeTab)&&c.data&&tt(c.activeTab,{autoLoad:!1})}function ws(t){c.channelData=t,c.channelData.fullLoaded=!0;let e=Q(c.channel)?c.channel:dt;Vt(e,{resetSearch:!1,updateUrl:!1,render:!1}),tt(c.activeTab,{autoLoad:!1})}function Re(){return at=ye({onSongsReady:gs}).then(ws).finally(()=>{at=null}),at}async function Qt(){c.channelData?.fullLoaded||(at||Re(),await at)}async function tt(t=c.activeTab,e={}){if(t!=="playlists"&&(!c.data||!It(t))||!It(t))return;let s=c.channelData?.partialLoaded||c.channelData?.fullLoaded,n=c.channelData?.fullLoaded;if(t==="playlists"?!1:Ne(t)?!n:!s)if(e.autoLoad){ys(t);try{await Qt()}catch(r){console.error("[data] full load failed",r);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${m(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${m(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,d.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{tt(t,{autoLoad:!0})}));return}}else{bs(t,{initial:e.initial});return}let i=++Ie;try{let r=await hs(t);if(i!==Ie||t!==c.activeTab||!c.data)return;t==="songs"&&we(c.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let d=l(`#panel-${t}`);d&&(d.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${m(r?.message||String(r))}</div>
        </div>
      `)}}function N(t,e={}){It(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!q&&!j(s)){Lt=t,At=e,kt();return}c.activeTab=t,Wt(t),e.updateUrl!==!1&&W({tab:t}),tt(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Wt(t){D(".tab-btn").forEach(n=>{let a=n.dataset.tab===t;n.classList.toggle("active",a),n.setAttribute("aria-selected",a?"true":"false")}),D(".mobile-tab-item").forEach(n=>{let a=n.dataset.mobileTab===t;n.classList.toggle("is-active",a),n.setAttribute("aria-current",a?"page":"false")});let e=l("#mobile-tab-current"),s=l(`.tab-btn[data-tab="${t}"] span:last-child`)?.textContent?.trim();e&&s&&(e.textContent=s),D(".panel").forEach(n=>n.classList.toggle("active",n.id===`panel-${t}`)),document.body.dataset.activeTab=t}function Q(t){return c.channelData?t==="all"?c.channelData.combined:c.channelData.channels[t]||null:null}function Vt(t,e={}){let s=Q(t);s&&(c.channel=t,mn(t),c.data=s,c.timelineFilter=null,c.timelineFocus=null,c.timelineLimit=12,c.songsLimit=100,e.resetSearch!==!1&&(c.songsQuery="",c.songsGenre="all"),Bt(),D("#channel-switch [data-channel]").forEach(n=>n.classList.toggle("active",n.dataset.channel===t)),Jt(),e.updateUrl!==!1&&W({tab:c.activeTab,channel:t,q:c.songsQuery}),dn(),e.render!==!1&&tt(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function ks(t,e={}){c.audience=t==="singer"?"singer":"listener",c.singerMode=c.audience==="singer",c.singerMode||(c.singerPreset="all"),D(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===c.audience)}),document.body.dataset.audience=c.audience,Jt(),c.audience==="singer"?(c.songsLimit=100,N("songs",{autoLoad:e.autoLoad!==!1})):c.data&&tt(c.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Jt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=e}function $s(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let n=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},a=()=>{n(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>n(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),n(!e.checked))}),e.addEventListener("change",()=>{n(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a()}),s.addEventListener("click",i=>{i.stopPropagation()}),Jt()}function Ls(){let t=l("#mobile-tab-nav"),e=l("#mobile-tab-toggle"),s=l("#mobile-tab-panel");if(!t||!e||!s)return;let n=a=>{s.hidden=!a,t.classList.toggle("is-open",a),document.body.classList.toggle("has-mobile-tab-open",a),e.setAttribute("aria-expanded",String(a))};e.addEventListener("click",a=>{a.stopPropagation(),n(s.hidden)}),s.addEventListener("click",a=>{let i=a.target.closest("[data-mobile-tab]");if(!i)return;let r=i.dataset.mobileTab;n(!1),N(r),document.querySelector(".tabs")?.scrollIntoView({behavior:"smooth",block:"start"})}),document.addEventListener("click",a=>{s.hidden||a.target.closest("#mobile-tab-nav")||n(!1)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&n(!1)}),Wt(c.activeTab||"dashboard")}function Ss(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,n=420,a=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let d=window.scrollY>n;d&&a(),t.hidden=!d,t.classList.toggle("is-visible",d),t.setAttribute("aria-hidden",String(!d)),t.tabIndex=d?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function xs(){if(c.channelData)for(let t of D("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!c.channelData.combined:!!(c.channelData.channels&&c.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function _s({key:t,title:e,artist:s}){c.timelineFilter&&c.timelineFilter.key===t&&c.activeTab==="timeline"?c.timelineFilter=null:c.timelineFilter={key:t,title:e,artist:s},c.timelineFocus=null,c.timelineLimit=12,N("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ts(t,e){c.timelineFilter={key:t.key,title:t.title,artist:t.artist},c.timelineFocus=et(e),c.timelineLimit=9999,N("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Es(t){Zt(t.artist||"")}function Zt(t){let e=String(t||"").replace(/"/g,"");c.songsQuery=e?`artist:"${e}"`:"",c.songsLimit=100,W({tab:"songs",q:c.songsQuery}),N("songs",{updateUrl:!1})}function Mt(t){return(c.data?.songs||[]).find(e=>e.key===t)||null}function Be(){return window.matchMedia("(max-width: 700px)").matches}function Xt(t,e=0){let s=String(t||""),n=M(s);if(!n)return s;let a=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${n}${a>0?`&t=${a}s`:""}`}function Ue(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function $t(){Ct&&(clearInterval(Ct),Ct=null)}function te(){$t(),Ct=setInterval(()=>{if(T(),!!g)try{let t=g.getDuration?.()||0,e=g.getCurrentTime?.()||0;A&&As(A,e);let s=t>0?Math.min(e/t*100,100):0,n=l("#yt-mini-progress-fill");n&&(n.style.width=`${s}%`);let i=g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function ot(){if($t(),g){try{g.destroy()}catch{}g=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Ms(){if(g?.getCurrentTime)try{return g.getCurrentTime()}catch{}return Math.max(0,bt+(Date.now()-ae)/1e3)}function j(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function T(){let t=l("#stream-viewer");if(!j(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let n=s.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.top=`${n.top}px`,e.style.width=`${n.width}px`,e.style.height=`${n.height}px`}function Cs(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!h)return!1;se();let s=l("#yt-player-panel");if(!s)return!1;A=e;try{bt=Math.floor(h.getCurrentTime?.()??0)}catch{bt=0}ae=Date.now();let n=l("#yt-mini-title");n&&(n.textContent=e.title||"");let a=l("#yt-mini-hint");a&&(a.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,g=h,h=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",qt(),R(),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400),window.addEventListener("resize",T),te();try{let i=g.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return it(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,Z()),!0}function Ye(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",T),$t(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),h=g,g=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),ie(),R(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Oe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",T),$t(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),h=g,g=null,ie(),R(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Fe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",T),$t(),rt(),++Y,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),ot(),A=null,R(),!0}function Ps(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=ee(z().t),n={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${V(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!h){import("./chunk-4ON2M4WS.js").then(i=>i.playMusicBarVideo?.(n,s)).catch(()=>{});return}try{bt=Math.floor(h.getCurrentTime?.()??s)}catch{bt=s}ae=Date.now(),g=h,h=null,A=null,q=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let a=l("#yt-player-panel");a&&(a.hidden=!0),qt(),R(),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400),window.addEventListener("resize",T),te(),import("./chunk-4ON2M4WS.js").then(i=>{i.adoptExternalPlayer?.(n,g,{restore:Oe,close:Fe}),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400)}).catch(()=>{})}function Ht(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Fe();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",T),rt(),++Y,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),ot();let s=l("#yt-player-panel");return s&&(s.hidden=!0),A=null,R(),!0}var je="sh1an-watch-history-v1",Ae=0;function Is(){try{return JSON.parse(localStorage.getItem(je)||"[]")}catch{return[]}}function Ke(t,e){if(!(!t?.url||e<10))try{let s=Is().filter(n=>n.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(je,JSON.stringify(s.slice(0,10)))}catch{}}function As(t,e){let s=Date.now();s-Ae<5e3||(Ae=s,Ke(t,e))}var mt=null;function ee(t=0){let e=[h,g];for(let s of e)try{let n=s?.getCurrentTime?.();if(Number.isFinite(n))return Math.max(0,Math.floor(n))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function Ds(t,e=0,s={}){if(!t)return"";let n=z(),a=new URLSearchParams,i=n.channel||c.channel;return i&&i!=="new"&&a.set("ch",i),a.set("v",t),s.includeTime!==!1&&e>5&&a.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${a}`}function R(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!j(t)&&t._currentStream?.url?M(t._currentStream.url):"",n=s?ee(z().t):0;W({v:s||"",t:n>5?n:0},{replace:!0}),s&&Ke(t._currentStream,n),s&&!mt&&(mt=setInterval(R,5e3)),!s&&mt&&(clearInterval(mt),mt=null)}function Vs(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&(a.preventDefault(),a.stopPropagation(),e())},{capture:!0});let s=()=>{let a=t._shareState;if(!a)return;let i=l("#sv-share-ts-check")?.checked&&a.t>0,r=Ds(a.id,a.t,{includeTime:i}),d=l("#sv-share-url");d&&(d.value=r);let o=a.title?`${a.title}`:"sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",u=l("#sv-share-x");u&&(u.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(o)}&url=${encodeURIComponent(r)}`);let v=l("#sv-share-line");return v&&(v.href=`https://line.me/R/share?text=${encodeURIComponent(`${o}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",a=>a.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let a=l("#sv-share-url")?.value;if(!a)return;let i=!1;try{await navigator.clipboard.writeText(a),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let n=l("#sv-share-native");navigator.share&&n&&(n.hidden=!1,n.addEventListener("click",async()=>{let a=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:a?.title||"",url:i})}catch{}}))}function Hs(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=M(e.url);if(!s)return;Vs();let n=l("#sv-share-modal"),a=ee(z().t);n._shareState={id:s,t:a,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),d=l("#sv-share-ts-check"),o=l("#sv-share-ts-label");r&&(r.hidden=a<=5),d&&(d.checked=a>5),o&&(o.textContent=X(a)),n._rebuild?.(),n.hidden=!1}var De=new URLSearchParams(location.search).get("pl");async function qs(){if(!De)return;let t=null;try{let n=De.replace(/-/g,"+").replace(/_/g,"/"),a=Uint8Array.from(atob(n),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(a))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(n=>typeof n=="string"&&n.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){W({},{replace:!0});return}try{let n=await import("./chunk-YA2VNLZW.js"),a=n.createPlaylist(e);for(let i of s)n.addStreamToPlaylist(a.id,i);W({tab:"playlists"},{replace:!0}),N("playlists",{updateUrl:!1})}catch{}}}async function Ns(){let t=z();if(!t.v)return!1;let e=t.v,s=t.t;try{await Qt()}catch{}let n=[];c.channelData?.combined&&n.push(c.channelData.combined),Object.values(c.channelData?.channels||{}).forEach(a=>{a&&n.push(a)});for(let a of n){let i=(a.streams||[]).find(r=>M(r.url)===e);if(i)return _(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(d=>M(d.url)===e);if(r)return _({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return _({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function Rs(t,e=0,s=""){let n=M(t);if(!n)return;if(Be()){window.open(Xt(t,e),"_blank","noopener");return}{let o=l("#stream-viewer");if(o&&!o.hidden&&!q)if(j(o))Ht();else{++Y,o.hidden=!0,o._currentStream=null,h=null;let u=l("#sv-player-wrap");u&&(u.innerHTML=""),document.body.style.overflow="",A=null,At={},qt(),R()}}ne(),se();let a=l("#yt-player-container"),i=l("#yt-player-panel");if(!a||!i)return;ot();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let d=l("#yt-mini-hint");d&&(d.textContent=A?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!A),i.hidden=!1,Qe(()=>{let o=document.createElement("div");a.appendChild(o);try{g=new window.YT.Player(o,{videoId:n,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:u=>{let v=Z();try{u.target.setVolume(v)}catch{}if(it(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,v),e>5)try{u.target.seekTo(e,!0)}catch{}te()},onStateChange:u=>{let v=u.data===window.YT.PlayerState.PLAYING,p=l("#yt-mini-play");p&&p.setAttribute("data-playing",v?"1":"0")}}})}catch{let v=e>0?`&start=${Math.floor(e)}`:"";a.innerHTML=`<iframe src="https://www.youtube.com/embed/${n}?autoplay=1&playsinline=1${v}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function se(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!Ht()&&(ot(),A=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(g)try{g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?g.pauseVideo():g.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{Ye()||A&&_(A,Ms())}),l("#yt-mini-progress-bar").addEventListener("click",n=>{if(!g)return;let i=n.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(n.clientX-i.left)/i.width));try{let d=g.getDuration?.()||0;d>0&&g.seekTo(r*d,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let n=Z();e.value=n,e.style.setProperty("--pct",`${n}%`),s&&(s.innerHTML=ht(n)),e.addEventListener("input",a=>{let i=parseInt(a.target.value);if(a.target.style.setProperty("--pct",`${i}%`),Kt(i),s&&(s.innerHTML=ht(i)),g)try{g.setVolume(i)}catch{}})}if(s){let n=80;s.addEventListener("click",()=>{if(!e)return;let a=parseInt(e.value),i=a>0?0:n||80;a>0&&(n=a),it(e,s,g,i)})}}var ze=!1,Ge=[];window.onYouTubeIframeAPIReady=()=>{ze=!0,Ge.splice(0).forEach(t=>t()),import("./chunk-4ON2M4WS.js").then(t=>t.notifyYtReady()).catch(()=>{})};function ne(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Qe(t){if(ze&&window.YT?.Player){t();return}Ge.push(t)}var Z=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Kt=t=>localStorage.setItem("kanaVol",String(t)),ht=()=>b("volume");function it(t,e,s,n){if(t&&(t.value=n,t.style.setProperty("--pct",`${n}%`)),e&&(e.innerHTML=ht(n)),s)try{s.setVolume(n)}catch{}}var h=null,Y=0,A=null,bt=0,ae=0,q=!1,Lt="timeline",At={},H={},Ft=new Map,O=!1,F=!1,g=null,Ct=null,Pt=null,We="sh1anViewerSetlistCollapsed",U=!1;function ie(){Lt=c.activeTab||"timeline",c.activeTab="player",D(".tab-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),D(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player")),document.body.dataset.activeTab="player"}function qt(){let t=At;At={},N(Lt||"timeline",t)}function Bs(){q=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function X(t){let e=Math.floor(t),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?`${s}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`:`${n}:${String(a).padStart(2,"0")}`}function Us(t){return`sh1an-ts-${t.channel||""}-${t.index||""}`}function yt(t){try{return JSON.parse(localStorage.getItem(Us(t))||"null")||{}}catch{return{}}}var gt=-1;function Ys(t,e,s,n){let a=e===n,i=(H[e]||[])[0],r=i!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" data-seconds="${i.timeSeconds}" title="${m(X(i.timeSeconds))} \u306B\u79FB\u52D5">${m(X(i.timeSeconds))}</button>`:'<span class="sv-ts-none" aria-hidden="true">--:--</span>';return`<div class="sv-song${a?" is-current":""}" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${m(t.title)}</span>
      <span class="sv-song-artist">${m(t.artist)}</span>
    </div>
    <div class="sv-song-actions">
      ${r}
      <button class="sv-ts-report" data-idx="${e}" data-action="cts-propose" type="button" title="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u4FEE\u6B63\u3092\u7533\u8ACB">\u4FEE\u6B63\u7533\u8ACB</button>
    </div>
  </div>`}async function Os(t){if(H={},!t?.channel||t?.index==null)return;let e=`${t.channel}:${t.index}`;if(Ft.has(e)){H=Ft.get(e)||{};let a=l("#stream-viewer");if(!a||a._currentStream!==t)return;let i=l("#sv-setlist");i&&zt(i,t.songs,yt(t),gt),Ve(t);return}try{let a=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(a);if(!i.ok)return;let r=await i.json();for(let d of r.items||[])H[d.songIndex]||(H[d.songIndex]=[]),H[d.songIndex].push({timeSeconds:d.timeSeconds,note:d.note??null});Ft.set(e,H)}catch{}let s=l("#stream-viewer");if(!s||s._currentStream!==t)return;let n=l("#sv-setlist");n&&zt(n,t.songs,yt(t),gt),Ve(t)}function Fs(t,e,s){l("#sv-cts-modal")?.remove();let n=h?.getCurrentTime?.()??0,a=X(Math.floor(n)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u4FEE\u6B63\u3092\u7533\u8ACB">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u4FEE\u6B63\u3092\u7533\u8ACB</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <p class="sv-cts-modal-song">${m(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${m(a)}" placeholder="0:00" autocomplete="off">
      </label>
      <label class="sv-cts-modal-label">
        \u30B3\u30E1\u30F3\u30C8\uFF08\u4EFB\u610F\u30FB200\u6587\u5B57\u4EE5\u5185\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-note-input" type="text" maxlength="200" placeholder="">
      </label>
      <p class="sv-cts-modal-hint">\u4FEE\u6B63\u7533\u8ACB\u306F\u7BA1\u7406\u8005\u306E\u5BE9\u67FB\u5F8C\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-cts-modal-btns">
        <button class="sv-cts-modal-submit" id="sv-cts-submit" type="button">\u7533\u8ACB\u3059\u308B</button>
        <button class="sv-cts-modal-cancel" type="button">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
      </div>
      <p class="sv-cts-modal-status" id="sv-cts-status" hidden></p>
    </div>
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",d=>{d.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let d=i.querySelector("#sv-cts-ts-input").value.trim(),o=i.querySelector("#sv-cts-note-input").value.trim()||null,u=os(d),v=i.querySelector("#sv-cts-status");if(u===null){v.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",v.className="sv-cts-modal-status error",v.hidden=!1;return}let p=i.querySelector("#sv-cts-submit");p.disabled=!0,p.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:u,submitterNote:o})});if(f.ok)v.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",v.className="sv-cts-modal-status success",v.hidden=!1,p.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let w=await f.json().catch(()=>({}));v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${w.error||f.statusText}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){v.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,v.className="sv-cts-modal-status error",v.hidden=!1,p.disabled=!1,p.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function d(o){o.key==="Escape"&&(r(),document.removeEventListener("keydown",d))})}function Ve(t){let e=l("#sv-cts-bulk-btn");if(!e||!t?.songs?.length)return;let n=Object.keys(H).length>=t.songs.length;e.textContent=n?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332",e.hidden=!1}function js(t){l("#sv-bulk-modal")?.remove();let e=yt(t),a=Object.keys(H).length>=t.songs.length,i=t.songs.map((o,u)=>{let v=e[u]!=null?X(e[u]):"",p=H[u]?.[0]?.timeSeconds!=null?X(H[u][0].timeSeconds):"",f=v||p;return`
      <div class="sv-bulk-row" data-idx="${u}">
        <span class="sv-bulk-num">${u+1}</span>
        <span class="sv-bulk-title" title="${m(o.title)}">${m(o.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${m(f)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${u}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${u}">${b("time")}</button>
      </div>`}).join(""),r=document.createElement("div");r.id="sv-bulk-modal",r.className="sv-cts-modal-overlay",r.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">${a?"\u4FEE\u6B63\u7533\u8ACB":"\u30BB\u30C8\u30EA\u767B\u9332"}</span>
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
  `,document.body.appendChild(r);let d=()=>r.remove();r.querySelector(".sv-cts-modal-close").addEventListener("click",d),r.querySelector(".sv-cts-modal-cancel").addEventListener("click",d),r.addEventListener("click",o=>{o.target===r&&d()}),r.querySelector(".sv-paste-apply").addEventListener("click",()=>{let u=(r.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(f=>f.trim()).filter(Boolean),v=0;for(let f of u){let w=nn(f);if(!w)continue;let L=rn(w.title,w.artist,t.songs);if(L>=0){let $=r.querySelector(`[data-bulk-ts-idx="${L}"]`);$&&($.value=w.start,v++)}}let p=r.querySelector(".sv-paste-result");p&&(p.textContent=v>0?`${u.length}\u884C\u3092\u89E3\u6790 \u2192 ${v}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",p.hidden=!1)}),r.querySelector(".sv-bulk-rows").addEventListener("click",o=>{let u=o.target.closest("[data-bulk-now]");if(!u)return;let v=parseInt(u.dataset.bulkNow,10),p=h?.getCurrentTime?.();if(p!=null){let f=r.querySelector(`[data-bulk-ts-idx="${v}"]`);f&&(f.value=X(Math.floor(p)))}}),r.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let o=r.querySelector("#sv-bulk-note").value.trim()||null,u=r.querySelector("#sv-bulk-status"),v=r.querySelector("#sv-bulk-submit"),p=[];if(r.querySelectorAll("[data-bulk-ts-idx]").forEach(L=>{let $=parseInt(L.dataset.bulkTsIdx,10),k=os(L.value.trim());k!==null&&p.push({songIndex:$,timeSeconds:k})}),!p.length){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",u.className="sv-cts-modal-status error",u.hidden=!1;return}v.disabled=!0,v.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${p.length})`,u.hidden=!0;let f=0,w=0;await Promise.all(p.map(async L=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:L.songIndex,timeSeconds:L.timeSeconds,submitterNote:o})})).ok?f++:w++}catch{w++}v.textContent=`\u7533\u8ACB\u4E2D\u2026 (${f+w}/${p.length})`})),w===0?(u.textContent=`${f}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,u.className="sv-cts-modal-status success",v.hidden=!0,r.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(u.textContent=`${f}\u4EF6\u6210\u529F / ${w}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,u.className="sv-cts-modal-status error",v.disabled=!1,v.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),u.hidden=!1}),document.addEventListener("keydown",function o(u){u.key==="Escape"&&(d(),document.removeEventListener("keydown",o))})}function Ks(){try{return JSON.parse(localStorage.getItem("sh1an-playlists")||"null")||[]}catch{return[]}}var le="sh1anViewerQueueCollapsed",x=null,wt=!1;function lt(t){let e=x,s=e?.items?.[t];if(s){e.idx=t,wt=!0;try{s.kind==="mv"?_({url:s.video.url,title:s.video.title,isMv:!0}):_(s.stream)}finally{wt=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&(x={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("sh1anListRepeat")==="1",collapsed:localStorage.getItem(le)==="1"},lt(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let n=t.filter(i=>i?.url).map((i,r)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${r}`,stream:i._stream}:{kind:"mv",key:`mv:${M(i.url)||r}`,video:{...i,isMv:!0}});if(!n.length)return!1;x={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:n,idx:Math.max(0,Math.min(e,n.length-1)),repeat:localStorage.getItem("sh1anListRepeat")==="1",collapsed:localStorage.getItem(le)==="1"};let a=x.items[x.idx];wt=!0;try{a.kind==="mv"?_({...a.video,isMv:!0},s):_(a.stream,s)}finally{wt=!1}return!0};function re(){let t=x;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
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
        ${t.items.map((n,a)=>{let i=n.kind==="mv"?n.video?.title||"\u52D5\u753B":n.stream?.title||"\u914D\u4FE1",r=n.kind==="mv"?b("video"):b("calendar"),d=n.kind==="mv"?"\u52D5\u753B":`${V(n.stream?.date)}\u3000\u7B2C${n.stream?.index}\u67A0`;return`<button class="sv-queue-row${a===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${a}">
            <span class="sv-queue-num">${a+1}</span>
            <span class="sv-queue-title">${m(i)}</span>
            <span class="sv-queue-meta">${r} ${m(d)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function Je(t){let e=t.target.closest("[data-svq-action]");if(!e||!x)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==x.idx&&lt(s),!0}if(e.dataset.svqAction==="repeat"){x.repeat=!x.repeat;try{localStorage.setItem("sh1anListRepeat",x.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",x.repeat),e.setAttribute("aria-pressed",String(x.repeat)),!0}if(e.dataset.svqAction==="toggle"){x.collapsed=!x.collapsed;try{localStorage.setItem(le,x.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=re()),oe(l("#sv-below-player")),!0}return!1}function oe(t){if(x?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function Ze(){let t=c.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<0||n>=t.length-1||_(t[n+1])}async function Xe(t){let e=await ce(),s=M(t?.url);if(!s||!e.length)return;let n=e.findIndex(i=>M(i.url)===s);if(n<0||n>=e.length-1)return;let a=e[n+1];_({...a,isMv:!0})}async function zs(t){let e=await ce(),s=M(t?.url);if(!s||!e.length)return;let n=e.findIndex(a=>M(a.url)===s);n<=0||_({...e[n-1],isMv:!0})}function ts(t){if(!t||j(t))return;let e=h||g;if(F&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(x?.items?.length){let n=x;n.idx<n.items.length-1?lt(n.idx+1):n.repeat&&lt(0);return}if(!O)return;let s=t._currentStream;s?.isMv?Xe(s):Ze()}function rt(){Pt&&(clearInterval(Pt),Pt=null)}function Gs(t,e){rt();let s=!1;Pt=setInterval(()=>{if(t!==Y||e.hidden||!h){rt();return}try{let n=h.getPlayerState?.();n===window.YT?.PlayerState?.ENDED?(s||ts(e),s=!0):n===window.YT?.PlayerState?.PLAYING&&(s=!1);let a=h.getCurrentTime?.()??0,i=e._currentStream;if(i?.songs?.length){let r=yt(i),d=-1;for(let o=0;o<i.songs.length;o++)r[o]!=null&&a>=r[o]&&(d=o);d!==gt&&(gt=d,Qs(d))}}catch{}},700)}function Qs(t){let e=l("#sv-setlist");if(!e)return;e.querySelectorAll(".sv-song").forEach((n,a)=>n.classList.toggle("is-current",a===t))}function es(t){U=!!t;try{localStorage.setItem(We,U?"1":"0")}catch{}let e=l("#stream-viewer .sv-panel"),s=l("#sv-setlist-toggle");e&&e.classList.toggle("is-setlist-collapsed",U),s&&(s.textContent=U?"\u958B\u304F":"\u7573\u3080",s.title=U?"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u958B\u304F":"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u6298\u308A\u305F\u305F\u3080",s.setAttribute("aria-expanded",String(!U)))}function Ws(){try{U=localStorage.getItem(We)==="1"}catch{}es(U)}function Js(){let t=c.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let n=t.findIndex(a=>a.channel===s.channel&&a.index===s.index);n<=0||_(t[n-1])}function ss(){let t=h||g;if(t)try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo?.():t.playVideo?.()}catch{}}function Dt(t){D('.sv-bp-control-btn[data-bp-action="toggle-play"]').forEach(e=>{e.innerHTML=t?b("pause"):b("play"),e.title=t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F",e.setAttribute("aria-label",t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F"),e.setAttribute("aria-pressed",String(t))})}function ns(){return'<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>'}function as(t){return Ks().some(e=>(e.streams||[]).includes(t))}function is(t,e,s){import("./chunk-YA2VNLZW.js").then(n=>{n.showAddToPlaylistModal(t,e,{onChange:a=>{s?.classList.toggle("is-saved",!!a),s?.setAttribute("aria-pressed",String(!!a)),s&&(s.title=a?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58")}})}).catch(()=>{})}function Zs(t){return t.length?t.map(e=>{let s=Ue(e.stream.url)||st(e.stream.url);return`<button class="sv-side-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${m(e.stream.channel)}" data-bp-index="${e.stream.index}">
      ${s?`<img class="sv-side-rel-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="sv-side-rel-thumb sv-side-rel-thumb--empty"></span>'}
      <span class="sv-side-rel-body">
        <span class="sv-side-rel-title">${m(e.stream.title||"\u914D\u4FE1")}</span>
        <span class="sv-side-rel-meta">${V(e.stream.date)} / ${e.overlap}\u66F2\u4E00\u81F4</span>
        <span class="sv-side-rel-songs">${e.sharedSongs.map(n=>m(n)).join("\u3001")}</span>
      </span>
    </button>`}).join(""):'<div class="sv-side-empty">\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}function Xs(t){let e=l("#sv-side-related");e&&(e.innerHTML=`
    <div class="sv-side-related-head">
      <span>\u95A2\u9023\u914D\u4FE1</span>
      <span>${t.length?`${t.length}\u4EF6`:""}</span>
    </div>
    <div class="sv-side-related-list">${Zs(t)}</div>
  `)}function ls(t){return/縦型|たて配信|タテ|#?shorts|ショート|vertical/i.test(t?.title||"")||/\/shorts\//.test(t?.url||"")}function He(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${m(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=st(t.url),n=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card ${ls(t)?"sv-bp-nav-card--portrait":"sv-bp-nav-card--landscape"}" type="button" data-bp-action="open-stream" data-bp-channel="${m(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${m(n)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${m(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${m(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${V(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function tn(t){let e=l("#sv-below-player");if(!e)return;let s=c.data?.streams||[],n=s.findIndex(v=>v.channel===t.channel&&v.index===t.index),a=n>=0&&n<s.length-1?s[n+1]:null,i=n>0?s[n-1]:null,r=new Set(t.songs.map(v=>v.title)),d=s.filter((v,p)=>p!==n).map(v=>{let p=v.songs.filter(f=>r.has(f.title));return{stream:v,overlap:p.length,sharedSongs:p.slice(0,3).map(f=>f.title)}}).filter(v=>v.overlap>0).sort((v,p)=>p.overlap-v.overlap).slice(0,8),o=et(t),u=as(o);e.innerHTML=`
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
            ${a?"":"disabled"} title="\u6B21\u306E\u914D\u4FE1" aria-label="\u6B21\u306E\u914D\u4FE1">${b("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${O?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${O?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${F?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${F?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${u?" is-saved":""}" type="button"
            data-bp-action="bookmark-stream" aria-pressed="${u}" title="${u?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${u?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${ns()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${a?`\u6B21\uFF1A${m(a.title||"\u6B21\u306E\u914D\u4FE1")}`:"\u6700\u5F8C\u306E\u914D\u4FE1\u3067\u3059"}
        </div>
        <div class="sv-bp-nav-cards">
          ${He(i,"newer")}
          ${He(a,"older")}
        </div>
        <div class="sv-bp-info-compact">
          <span>${V(t.date)}</span>
          <span>\u7B2C${t.index}\u67A0</span>
          <span>${t.songs.length}\u66F2</span>
        </div>
      </div>

    </div>
  `,Xs(d),e.onchange=v=>{let p=v.target.closest("#sv-ap-check"),f=v.target.closest("#sv-repeat-check");if(p){O=p.checked;let w=p.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",O)}if(f){F=f.checked;let w=f.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",F)}},e.onclick=v=>{if(Je(v))return;let p=v.target.closest("[data-bp-action]");if(!p)return;let f=p.dataset.bpAction;if(f==="open-stream"){let w=p.dataset.bpChannel,L=parseInt(p.dataset.bpIndex,10),$=(c.data?.streams||[]).find(k=>k.channel===w&&k.index===L);$&&_($)}else f==="prev-stream"?Js():f==="next-stream"?Ze():f==="toggle-play"?ss():f==="bookmark-stream"&&is(o,t.title||"\u914D\u4FE1",p)},oe(e);try{let v=(h||g)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;Dt(v)}catch{}}var ft=null;async function ce(){if(ft)return ft;try{ft=(await(await fetch("data/music.json")).json())?.videos||[]}catch{ft=[]}return ft}function en(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function sn(t){let e=l("#sv-below-player");if(!e)return;try{await Qt()}catch{}let s=await ce();if(l("#stream-viewer")?._currentStream!==t)return;let n=c.channelData?.combined?.streams||c.data?.streams||[],a=G(en(t.title)),i=[];if(a.length>1)for(let y of n){let S=(y.songs||[]).find(C=>{let P=G(C.title);return P===a||P.length>1&&(P.includes(a)||a.includes(P))});S&&i.push({stream:y,songTitle:S.title})}let r=i.slice(0,8),d={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},o=s.find(y=>y.url===t.url),u=s.filter(y=>y.url!==t.url).sort((y,S)=>{let C=o&&y.type===o.type?1:0,P=o&&S.type===o.type?1:0;return C!==P?P-C:(S.publishedAt||"").localeCompare(y.publishedAt||"")}).slice(0,12),v=s.findIndex(y=>M(y.url)===M(t.url)),p=v>=0&&v<s.length-1?s[v+1]:null,f=v>0?s[v-1]:null,w=o||s.find(y=>M(y.url)===M(t.url)),L=w?"mv:"+w.id:"",$=L?as(L):!1,k=x,E=!!k?.items?.length,K=E&&k.idx>0||!!f,ct=E&&k.idx<k.items.length-1||!!p;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${re()}
      <!-- \u64CD\u4F5C\uFF08\u6B4C\u67A0\u30D3\u30E5\u30FC\u30EF\u30FC\u3068\u540C\u3058: \u524D\u3078 / \u518D\u751F\u505C\u6B62 / \u6B21\u3078 / \u9023\u7D9A\u518D\u751F / \u30EA\u30D4\u30FC\u30C8 / \u681E\uFF09-->
      <div class="sv-bp-section sv-bp-section--nav">
        <div class="sv-bp-control-bar">
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-prev"
            ${K?"":"disabled"} title="\u524D\u306E\u52D5\u753B" aria-label="\u524D\u306E\u52D5\u753B">${b("previous")}</button>
          <button class="sv-bp-control-btn sv-bp-control-btn--play" type="button" data-mv-action="toggle-play"
            title="\u518D\u751F / \u4E00\u6642\u505C\u6B62" aria-label="\u518D\u751F / \u4E00\u6642\u505C\u6B62">${b("play")}</button>
          <button class="sv-bp-control-btn" type="button" data-mv-action="mv-next"
            ${ct?"":"disabled"} title="\u6B21\u306E\u52D5\u753B" aria-label="\u6B21\u306E\u52D5\u753B">${b("next")}</button>
          <label class="sv-bp-ap-label" for="sv-ap-check">
            <span class="sv-bp-ap-switch${O?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-ap-check" class="sv-bp-ap-check"${O?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u9023\u7D9A\u518D\u751F
          </label>
          <label class="sv-bp-ap-label" for="sv-repeat-check">
            <span class="sv-bp-ap-switch${F?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${F?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${$?" is-saved":""}" type="button"
            data-mv-action="bookmark-mv" data-mv-key="${m(L)}" aria-pressed="${$}"
            title="${$?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${$?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${ns()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${p?`\u6B21\uFF1A${m(p.title||"\u6B21\u306E\u52D5\u753B")}`:'<span class="sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${b("mic")} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(y=>{let S=st(y.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${m(y.stream.channel)}" data-mv-index="${y.stream.index}">
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
          ${u.map(y=>{let S=st(y.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${m(y.url)}" data-mv-title="${m(y.title)}">
              ${S?`<img class="sv-mv-card-thumb" src="${m(S)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${m(y.title)}</div>
                <div class="sv-mv-card-type">${d[y.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=y=>{let S=y.target.closest("#sv-ap-check"),C=y.target.closest("#sv-repeat-check");if(S){O=S.checked;let P=S.closest(".sv-bp-ap-switch");P&&P.classList.toggle("sv-bp-ap-switch--on",O)}if(C){F=C.checked;let P=C.closest(".sv-bp-ap-switch");P&&P.classList.toggle("sv-bp-ap-switch--on",F)}},e.onclick=y=>{if(Je(y))return;let S=y.target.closest("[data-mv-action]");if(!S)return;let C=S.dataset.mvAction;if(C==="open-stream"){let P=S.dataset.mvChannel,ds=parseInt(S.dataset.mvIndex,10),ue=(c.channelData?.combined?.streams||c.data?.streams||[]).find(ve=>ve.channel===P&&ve.index===ds);ue&&_(ue)}else C==="open-mv"?_({url:S.dataset.mvUrl,title:S.dataset.mvTitle,isMv:!0}):C==="all-videos"?N("playlists"):C==="toggle-play"?ss():C==="mv-prev"?E&&k.idx>0?lt(k.idx-1):zs(t):C==="mv-next"?E&&k.idx<k.items.length-1?lt(k.idx+1):Xe(t):C==="bookmark-mv"&&is(S.dataset.mvKey,t.title||"\u52D5\u753B",S)},oe(e);try{let y=(h||g)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;Dt(y)}catch{}}function zt(t,e,s,n){t.innerHTML=e.map((a,i)=>Ys(a,i,s,n)).join("")}var rs=/\b\d{1,2}:\d{2}(?::\d{2})?\b/g;function os(t){let e=String(t||"").match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function nn(t){let e=String(t||"").trim();if(!e)return null;let s=e.match(rs)||[];if(!s.length)return null;let n=an(e);if(!n)return null;let{title:a,artist:i}=ln(n);return a?{start:s[0].trim(),title:a,artist:i,end:s.length>1?s[s.length-1].trim():"",raw:n}:null}function an(t){return String(t||"").replace(rs," ").replace(/https?:\/\/\S+/gi," ").replace(/^\s*(?:\d+[\).．、:]|[#＃]\d+|[・\-*＊•▶▷♪♫🎵🎶]+)\s*/u,"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`]+|[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").replace(/\s*(?:[-–—~〜→⇒>|｜]{2,}|[|｜])\s*$/g,"").replace(/[ \t　]+/g," ").trim()}function jt(t){return String(t||"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`・\-*＊•▶▷♪♫🎵🎶]+/u,"").replace(/[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").trim()}function ln(t){let e=jt(t);if(!e)return{title:"",artist:""};let s=[/^(.+?)\s*(?:\/|／)\s*(.+)$/,/^(.+?)\s+(?:by|BY|By)\s+(.+)$/,/^(.+?)\s*(?:-|－|–|—|~|〜|｜|\|)\s*(.+)$/,/^(.+?)\s+(?:covered\s+by|cover\s+by|歌[:：])\s+(.+)$/i];for(let n of s){let a=e.match(n);if(!a)continue;let i=jt(a[1]),r=jt(a[2]);if(i&&r)return{title:i,artist:r}}return{title:e,artist:""}}function G(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function rn(t,e,s){let n=G(t),a=G(e),i=-1,r=0;for(let d=0;d<s.length;d++){let o=G(s[d].title),u=G(s[d].artist),v=0;o===n?v+=80:n.length>1&&(o.includes(n)||n.includes(o))&&(v+=40),a&&u===a?v+=20:a&&a.length>1&&(u.includes(a)||a.includes(u))&&(v+=10),v>r&&(r=v,i=d)}if(r<40&&a)for(let d=0;d<s.length;d++){let o=G(s[d].title),u=G(s[d].artist),v=0;o===a?v+=70:a.length>1&&(o.includes(a)||a.includes(o))&&(v+=35),u&&u===n?v+=20:n.length>1&&(u.includes(n)||n.includes(u))&&(v+=10),v>r&&(r=v,i=d)}return r>=40?i:-1}function cs(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
              <button class="sv-cts-bulk-btn" id="sv-cts-bulk-btn" type="button" hidden>\u307E\u3068\u3081\u3066\u4FEE\u6B63\u7533\u8ACB</button>
              <span class="sv-song-count" id="sv-song-count"></span>
            </div>
          </div>
      <div class="sv-panel-hint">${b("time")} \u6642\u523B\u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5 \uFF0F \u30BA\u30EC\u306F\u300C\u4FEE\u6B63\u7533\u8ACB\u300D\u304B\u3089</div>
          <div class="sv-setlist" id="sv-setlist"></div>
          <div class="sv-side-related" id="sv-side-related"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>kt()),l("#sv-share-btn").addEventListener("click",Hs),l("#sv-music-btn").addEventListener("click",Ps),l("#sv-fullscreen-btn").addEventListener("click",Bs),l("#sv-setlist-toggle")?.addEventListener("click",()=>es(!U)),l("#sv-side-related")?.addEventListener("click",a=>{let i=a.target.closest('[data-bp-action="open-stream"]');if(!i)return;let r=i.dataset.bpChannel,d=parseInt(i.dataset.bpIndex,10),o=(c.data?.streams||[]).find(u=>u.channel===r&&u.index===d);o&&_(o)});let s=l("#sv-vol-slider"),n=l("#sv-vol-btn");if(s){let a=Z();s.value=a,s.style.setProperty("--pct",`${a}%`),n&&(n.innerHTML=ht(a)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Kt(r),n&&(n.innerHTML=ht(r)),h)try{h.setVolume(r)}catch{}})}if(n){let a=80;n.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:a||80;i>0&&(a=i),it(s,n,h,r),Kt(r)})}e.querySelectorAll("[data-bc-tab]").forEach(a=>{a.addEventListener("click",()=>{Lt=a.dataset.bcTab,kt()})}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let a=e._currentStream;a&&js(a)}),l("#sv-setlist").addEventListener("click",a=>{let i=a.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),d=e._currentStream;if(d){if(i.dataset.action==="seek"){let o=Number(i.dataset.seconds);if(!isNaN(o)&&h?.seekTo){h.seekTo(o,!0);try{h.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let o=d.songs[r];Fs(d,r,o?.title||`\u66F2 ${r+1}`)}}})}function _(t,e=0){if(!t?.url)return;let s=M(t.url);if(!s){Rs(t.url);return}if(Be()){window.open(Xt(t.url,e),"_blank","noopener");return}cs(),ne(),rt(),wt||(x=null);let n=l("#stream-viewer");if(j(n)){if(n._currentStream?.url===t.url){if(!Ye()&&!window.__restoreMusicExternalPlayer?.()&&Oe(),e>0)try{h?.seekTo(Math.floor(e),!0),h?.playVideo()}catch{}return}Ht()}let a=window.__takeOverMusicPlayerVideo?.(t.url)||null;a||import("./chunk-4ON2M4WS.js").then(k=>(k.releaseMusicPlayerVideo||k.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{g?.pauseVideo()}catch{}i.hidden=!0,ot()}if(A=null,q){q=!1;let k=l("#stream-viewer");k&&k.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}q=!1,ie();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv);let d=ls(t);r.classList.toggle("sv-portrait",d),r._currentStream=t,Ws();let o=++Y,u=r.querySelectorAll("[data-bc-tab]");u[1]&&(t.isMv?(u[1].dataset.bcTab="playlists",u[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(u[1].dataset.bcTab="timeline",u[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let v=l("#sv-bc-title");v&&(v.textContent=t.title||"\u914D\u4FE1");let p=l("#sv-stream-meta");p&&(p.innerHTML=t.isMv?"":`${V(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000${b("mic")} ${t.songs.length}\u66F2`);let f=l("#sv-yt-link");f&&(f.href=t.url);let w=l("#sv-song-count");if(w&&(w.textContent=t.isMv?"":`${t.songs.length}\u66F2`),H={},t.isMv){let k=l("#sv-setlist");k&&(k.innerHTML="");let E=l("#sv-below-player");E&&(E.innerHTML="");let K=l("#sv-side-related");K&&(K.innerHTML=""),sn(t)}else{let k=yt(t);zt(l("#sv-setlist"),t.songs,k,gt),Os(t),tn(t)}r.hidden=!1,document.body.style.overflow="",R(),window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),h=null;let L=l("#sv-player-wrap");L.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let $=Math.floor(e||a?.currentTime||0);if(a?.player){L.innerHTML="",a.iframe?(a.iframe.style.width="100%",a.iframe.style.height="100%",L.appendChild(a.iframe)):L.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',h=a.player;try{h.setVolume?.(Z()),$>1&&h.seekTo?.($,!0),h.playVideo?.()}catch{}it(l("#sv-vol-slider"),l("#sv-vol-btn"),null,Z()),Dt(!0),Gs(o,r);return}Qe(()=>{if(o!==Y||r.hidden)return;L.innerHTML="";let k=document.createElement("div");L.appendChild(k);try{h=new window.YT.Player(k,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,origin:location.origin,rel:0,modestbranding:1,...$>0?{start:$}:{}},events:{onReady:E=>{let K=Z();try{E.target.setVolume(K)}catch{}it(l("#sv-vol-slider"),l("#sv-vol-btn"),null,K);try{E.target.setPlaybackQuality("hd1080")}catch{}try{E.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if($>5)try{E.target.seekTo($,!0)}catch{}},onStateChange:E=>{if(o===Y){if(Dt(E.data===window.YT.PlayerState.PLAYING),E.data===window.YT.PlayerState.PLAYING)try{E.target.setPlaybackQuality("hd1080")}catch{}E.data===window.YT.PlayerState.ENDED&&ts(r)}},onError:()=>{o===Y&&(L.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${$>0?`&start=${$}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{L.innerHTML=`<iframe src="https://www.youtube.com/embed/${m(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${$>0?`&start=${$}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function kt(){let t=l("#stream-viewer");if(!t||t.hidden||j(t))return;if(q){q=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let n=l("#sv-fullscreen-btn");n&&n.setAttribute("aria-pressed","false");return}if(Cs())return;++Y,t.hidden=!0,t._currentStream=null,rt(),h=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",qt(),R()}window.__openStreamViewer=_;window.__closeStreamMiniPlayer=()=>{let t=l("#stream-viewer");if(j(t))return Ht(),!0;let e=l("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,ot(),A=null,!0):!1};function Gt(t){let e=Mt(t),s=l("#song-modal"),n=l("#song-modal-body"),a=l("#song-modal-title");if(!e||!s||!n||!a)return;be(e),a.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(o=>{let u=Math.max(0,Math.floor(Number(o.t)||0));return{...o,startAt:u,watchUrl:Xt(o.url,u),thumbnail:st(o.url),thumbnailFallback:fe(o.url),thumbnailTiny:Ue(o.url),detailKey:et(o)}}),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),d=Nt(e.key);n.innerHTML=`
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
      <button class="btn ${d?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${m(e.key)}">${b("heart")} ${d?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
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
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function on(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s();let a=n.target.closest("[data-detail-action]");if(a){if(n.stopPropagation(),a.dataset.detailAction==="close"&&s(),a.dataset.detailAction==="favorite"){let i=a.dataset.songkey;pe(i);let r=Nt(i);a.innerHTML=`${b("heart")} ${r?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}`,a.classList.toggle("primary",r),a.classList.toggle("ghost",!r)}if(a.dataset.detailAction==="timeline"){let i=Mt(a.dataset.songkey);s(),i&&_s(i)}if(a.dataset.detailAction==="stream"){let i=Mt(a.dataset.songkey),r=i?.streamRefs?.find(d=>et(d)===a.dataset.streamkey);s(),i&&r&&Ts(i,r)}if(a.dataset.detailAction==="artist"){let i=Mt(a.dataset.songkey);s(),i&&Es(i)}}}),t.addEventListener("error",n=>{let a=n.target.closest?.(".song-detail-thumb");if(!a)return;let i=a.dataset.fallback||a.dataset.tiny||"";if(i&&a.src!==i){a.src=i,a.dataset.fallback===i?delete a.dataset.fallback:delete a.dataset.tiny;return}a.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&s()})}var cn=!1;function dn(){if(!c.data)return;let{stats:t,streams:e=[]}=c.data,s=e[0]?.date||null,n=Rt(s),a=t.dataGeneratedDate||c.channelData?.dataGeneratedDate||null,i=Rt(a),r=t.channelLabel||t.channelId||"",d=r?`<span class="badge accent" style="margin-right:8px;">${m(r)}</span>`:"";l("#updated-info").innerHTML=d+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${V(a)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let o=l("#stats-grid"),u=Number.isFinite(t.streams)&&t.streams>0?(t.streams*2.4).toFixed(1):"\u2014";o.innerHTML=`
    <div class="stat-card">
      <div class="stat-label">TOTAL SONGS</div>
      <div class="stat-value">${St(t.total)}<span class="stat-note">\u6B4C\u5531\u56DE\u6570</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">REPERTOIRE UNIQUES</div>
      <div class="stat-value">${St(t.repertoire)}<span class="stat-note">coverage</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">STREAM COUNT</div>
      <div class="stat-value">${St(t.streams)}<span class="stat-note">${n!=null?`Last: ${n} days ago`:"No stream data"}</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">TOTAL HOURS</div>
      <div class="stat-value">${u}<span class="stat-note">Avg 2.4h/\u67A0</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">1\u67A0\u5E73\u5747\u66F2\u6570</div>
      <div class="stat-value">${t.avgPerStream}<span class="stat-note">Trending UP</span></div>
    </div>
  `,cn=!0}function un(){l("#loading").hidden=!1,l("#error").hidden=!0}function vn(){l("#loading").hidden=!0}function pn(t){let e=l("#loading"),s=l("#error"),n=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),n&&(n.textContent=t&&t.message?t.message:String(t))}function mn(t){let e=document.getElementById("page-title");if(!e)return;e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.svg" alt="" width="32" height="32" fetchpriority="high" decoding="sync">sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9";let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var fn={new:{name:"sh1an | \u30B7\u30A2\u30F3",handle:"@sh1an",url:"https://www.youtube.com/@sh1an",label:"Main",desc:`\u307D\u3093\u3053\u3064\u4E0D\u61AB\u306A\u9B54\u5C0E\u58EBVsinger
\u304D\u307F\u305F\u3061\u306E\u65E5\u5E38\u3092\u3058\u308F\u3058\u308F\u6E29\u304B\u304F\u3059\u308B\u3001\u4E00\u4E16\u7D00\u63A8\u305B\u308B\u6D3B\u52D5\u8005\u3092\u76EE\u6307\u3057\u3066\u9081\u9032\u4E2D\u3002
\u7DCF\u5408\u30BF\u30B0 #sh1arch1ve / \u30D5\u30A1\u30F3\u30A2\u30FC\u30C8 #sh1anotype / \u30D5\u30A1\u30F3\u30CD\u30FC\u30E0 sh1anchu\u30FB\u3057\u3042\u3093\u3061\u3085`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X",url:"https://x.com/sh1anos"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"YouTube",url:"https://www.youtube.com/@sh1an"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',label:"Twitch",url:"https://twitch.tv/sh1anos"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>',label:"HP",url:"https://lit.link/sh1an"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',label:"Instagram",url:"https://instagram.com/sh1anos"}],avatarUrl:"https://yt3.googleusercontent.com/Dr_8IrPp_iU_7lBmTH8Z9r3Z1cU1QQcb7AwwKEJoURu7nVqa7i6MQ30Wr0feOi7AfGHPMzdjgQ=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/JM4090e_TUtyfV4EBdfECwo3rzveeI3WgbO5VZHvw-2VySPqu2R9Q92NeYKYmhBmHmFQwHcYhw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function Et(t){let e=fn[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${m(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${m(e.label)}</span>`:`<span class="ch-card-banner-label">${m(e.label)}</span>`,n=e.avatarUrl?`<img class="ch-card-avatar-img" src="${m(e.avatarUrl)}" alt="${m(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",a=e.desc?`<p class="ch-card-desc">${e.desc.split(`
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
          <div class="ch-card-avatar ch-card-avatar--${t}${e.avatarUrl?" ch-card-avatar--img":""}">${n}</div>
          <div class="ch-card-meta">
            <div class="ch-card-name">${m(e.name)}</div>
            <div class="ch-card-handle">${m(e.handle)}</div>
          </div>
        </div>
        ${a}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${m(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function hn(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let n="";t==="new"?n=Et("new"):t==="old"?n=Et("old"):n=Et("new")+Et("old"),s.innerHTML=n,e.hidden=!1,l("#ch-modal-close")?.focus()}function bn(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(n=>{n.addEventListener("click",()=>hn(n.dataset.chModal))})}function yn(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let n=()=>{t.hidden=!1,s.focus()},a=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",n),s.addEventListener("click",a),t.addEventListener("click",i=>{i.target===t&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&a()})}function gn(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("sh1an-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("sh1an-welcome-tip-dismissed","1")})}async function de(){un();try{let t=await ge();c.channelData=t,!at&&!t.fullLoaded&&Re();let e=z(),s=!!e.v;c.songsQuery=e.q,c.activeTab=s?"player":It(e.tab)?e.tab:"dashboard",Wt(c.activeTab);let n=e.channel||c.channel||dt;if(Q(n)||(n=dt),!Q(n)){let a=Object.keys(t.channels)[0];a&&(n=a)}if(!Q(n))throw new Error("No channel data could be loaded");xs(),Vt(n,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await Ns()||N(e.tab,{updateUrl:!1,initial:!0})),vn(),qs()}catch(t){console.error("[init] failed:",t),pn(t)}}function wn(){if(!c.channelData)return;let t=z();c.songsQuery=t.q,t.channel!==c.channel&&Q(t.channel)&&Vt(t.channel,{resetSearch:!1,updateUrl:!1}),N(t.tab,{updateUrl:!1})}D(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!q&&!j(s)){Lt=e,kt();return}N(e)})});D(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Vt(t.dataset.channel))})});window.addEventListener("popstate",wn);D("[data-audience]").forEach(t=>{t.addEventListener("click",()=>ks(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest(".timeline-setlist .setlist-title[data-songkey]");if(e){t.preventDefault(),t.stopPropagation(),Gt(e.dataset.songkey);return}let s=t.target.closest("[data-artist-search]");if(s){t.preventDefault(),t.stopPropagation(),Zt(s.dataset.artistSearch||s.textContent||"");return}let n=t.target.closest("[data-playlist-add]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.playlistAdd,d=n.dataset.streamTitle||"",o=u=>{n.classList.toggle("is-saved",u),n.classList.contains("timeline-save-btn")&&(n.innerHTML=b("bookmark")),n.title=u?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"};import("./chunk-YA2VNLZW.js").then(u=>u.showAddToPlaylistModal(r,d,{onChange:o}));return}let a=t.target.closest("[data-stream-play]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.streamPlay,d=(c.data?.streams||[]).find(o=>et(o)===r);d?.url&&_(d);return}if(he(t.target))return;let i=t.target.closest("[data-songkey]");i&&Gt(i.dataset.songkey)});l("#retry-btn").addEventListener("click",de);l("#reload-btn").addEventListener("click",de);yn();bn();se();cs();on();$s();Ls();Ss();gn();import("./chunk-4ON2M4WS.js").then(t=>{t.setApiLoader(ne),t.initMusicPlayer()}).catch(()=>{});Ee(t=>{t.type==="song"?Gt(t.song.key):t.type==="artist"?Zt(t.artist):t.type==="stream"?_(t.stream):t.type==="music-video"&&_({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let a=l("#stream-viewer");if(a&&!a.hidden&&!a.classList.contains("sv-minified")&&!a.classList.contains("sv-music-minified")&&l("#sv-share-modal")?.hidden!==!1&&h){if(t.key===" "){t.preventDefault();try{h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?h.pauseVideo():h.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let r=h.getCurrentTime?.()??0,d=Math.max(0,r+(t.key==="ArrowRight"?10:-10));h.seekTo(d,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Me();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),$e();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let a=l("#help-modal");a&&a.hidden&&(a.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let a=l("#stream-viewer"),i=!!l("#panel-player.active");if(a&&!a.hidden&&(q||i)){t.preventDefault(),kt();return}if(Ot()){t.preventDefault(),pt();return}let r=l("#song-modal");if(r&&!r.hidden)return;let d=l("#ch-modal");if(d&&!d.hidden){d.hidden=!0;return}let o=l("#help-modal");if(o&&!o.hidden){o.hidden=!0,l("#help-btn")?.focus();return}let u=l("#songs-search");u&&document.activeElement===u&&u.value&&(t.preventDefault(),u.value="",u.dispatchEvent(new Event("input",{bubbles:!0})))}});Se(()=>{c.data&&(Bt(),(c.activeTab==="dashboard"||c.activeTab==="analytics")&&tt())});function kn(){de()}kn();export{Is as getWatchHistory};
