import{a as Se,b as _e,e as Yt,f as xe}from"./chunk-5MMGVMBB.js";import{b as ge,c as we,d as ke,i as $e,j as Le,k as z,l as W}from"./chunk-CBRIRMV4.js";import{a as dt}from"./chunk-RKZOC53G.js";import{a as fe,b as Rt,c as he,e as d}from"./chunk-AW5KTZNU.js";import{B as Ut,C as V,E as et,F as M,G as st,H as be,J as _t,K as ye,M as b,a as l,b as D,c as p}from"./chunk-3BNHFXWM.js";var I=-1,R=[],Ot=null,J=null,xt=null;function Pe(t){Ot=t;let e=document.createElement("div");e.id="omni-backdrop",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","\u30B5\u30A4\u30C8\u5185\u691C\u7D22"),e.innerHTML=`
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
  `,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&pt()});let s=document.getElementById("omni-input");s.addEventListener("input",()=>jt(s.value)),s.addEventListener("keydown",ps),document.getElementById("omni-listbox").addEventListener("click",a=>{let n=a.target.closest("[data-omni-idx]");n&&Ie(Number(n.dataset.omniIdx))})}function Ce(){let t=document.getElementById("omni-backdrop");if(!t)return;t.hidden=!1,I=-1,R=[];let e=document.getElementById("omni-input");e&&(e.value="",e.focus(),e.select()),jt(""),fs().then(()=>{if(!Ft())return;let s=document.getElementById("omni-input")?.value||"";s.trim()&&jt(s)})}function pt(){let t=document.getElementById("omni-backdrop");t&&(t.hidden=!0),I=-1}function Ft(){let t=document.getElementById("omni-backdrop");return!!(t&&!t.hidden)}function ps(t){let e=document.querySelectorAll("#omni-listbox [data-omni-idx]");t.key==="ArrowDown"?(t.preventDefault(),I=Math.min(I+1,e.length-1),Te(e)):t.key==="ArrowUp"?(t.preventDefault(),I=Math.max(I-1,-1),Te(e)):t.key==="Enter"?(t.preventDefault(),I>=0&&R[I]&&Ie(I)):t.key==="Escape"&&(t.preventDefault(),pt())}function Te(t){t.forEach((e,s)=>{e.classList.toggle("is-active",s===I),e.setAttribute("aria-selected",String(s===I))}),I>=0&&t[I]?.scrollIntoView({block:"nearest"})}function Ie(t){let e=R[t];!e||!Ot||(pt(),Ot(e))}function jt(t){let e=document.getElementById("omni-listbox");if(!e)return;I=-1,R=[];let s=d.data?.songs||[],a=d.data?.streams||[],n=J||[],i=nt(t),r="",o=0;if(!d.data){e.innerHTML='<div class="omni-empty">\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';return}if(!i){let m=s.slice(0,8);if(m.length){r+=ut("rank","\u3088\u304F\u6B4C\u308F\u308C\u308B\u66F2");for(let f of m)R.push({type:"song",song:f}),r+=Ee(f,o++,"")}e.innerHTML=r||'<div class="omni-empty">\u691C\u7D22\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044</div>';return}let c=[];try{c=(Le(t,s).results||[]).slice(0,8)}catch{}if(c.length||(c=s.filter(m=>Me(t,`${m.title} ${m.artist}`)).slice(0,8)),c.length){r+=ut("music","\u66F2");for(let m of c)R.push({type:"song",song:m}),r+=Ee(m,o++,i)}if(n.length){let m=n.filter(f=>hs(f,t)).slice(0,6);if(m.length){r+=ut("video","\u6B4C\u307F\u305F\u30FB\u30AA\u30EA\u66F2");for(let f of m)R.push({type:"music-video",video:f}),r+=ms(f,o++,t)}}let v=new Set,u=[];for(let m of s)if(m.artist&&Me(t,m.artist)&&!v.has(m.artist)&&(v.add(m.artist),u.push(m.artist),u.length>=4))break;if(u.length){r+=ut("artist","\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8");for(let m of u){let f=s.filter(w=>w.artist===m).length;R.push({type:"artist",artist:m}),r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
        <span class="omni-item-icon">${b("artist")}</span>
        <div class="omni-item-body">
          <span class="omni-item-title">${vt(p(m),i)}</span>
          <span class="omni-item-meta">${f}\u66F2 \xB7 \u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u7D5E\u308A\u8FBC\u307F</span>
        </div>
      </div>`}}if(a.length){let m=a.filter(f=>{let w=nt(`${f.title||""} ${(f.songs||[]).map(L=>`${L.title||""} ${L.artist||""}`).join(" ")}`),_=Tt(t);return _.length>0&&_.every(L=>w.includes(L))}).slice(0,5);if(m.length){r+=ut("calendar","\u914D\u4FE1\u67A0");for(let f of m){R.push({type:"stream",stream:f});let w=f.channel==="new"?"Main":f.channel==="old"?"Archive":"";r+=`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${o++}">
          <span class="omni-item-icon">${b("calendar")}</span>
          <div class="omni-item-body">
            <span class="omni-item-title">${vt(p(f.title||"\u914D\u4FE1"),i)}</span>
            <span class="omni-item-meta">${V(f.date)}${w?" \xB7 "+w:""} \xB7 ${f.songs?.length||0}\u66F2 \xB7 \u30AF\u30EA\u30C3\u30AF\u3067\u518D\u751F</span>
          </div>
        </div>`}}}r||(r=`<div class="omni-empty">\u300C${p(t)}\u300D\u306B\u4E00\u81F4\u3059\u308B\u7D50\u679C\u304C\u3042\u308A\u307E\u305B\u3093 \u{1F420}</div>`),e.innerHTML=r}function ut(t,e){return`<div class="omni-section-label" role="presentation">${b(t)} ${e}</div>`}function Ee(t,e,s){return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("music")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${vt(p(t.title),s)}</span>
      <span class="omni-item-meta">${vt(p(t.artist||""),s)} \xB7 ${t.count}\u56DE\u6B4C\u5531</span>
    </div>
    <span class="omni-item-count">${t.count}<small>\u56DE</small></span>
  </div>`}function ms(t,e,s){let a=Ae(t),n=t.originalArtist||t.character||a;return`<div class="omni-item" role="option" aria-selected="false" data-omni-idx="${e}">
    <span class="omni-item-icon">${b("video")}</span>
    <div class="omni-item-body">
      <span class="omni-item-title">${vt(p(t.title||"\u52D5\u753B"),s)}</span>
      <span class="omni-item-meta">${p(a)}${n?" \xB7 "+p(n):""} \xB7 \u52D5\u753B\u3067\u898B\u308B</span>
    </div>
  </div>`}function fs(){return J!==null?Promise.resolve(J):xt||(xt=fetch("/data/music.json",{cache:"no-store"}).then(t=>t.ok?t.json():Promise.reject(new Error(`music.json ${t.status}`))).then(t=>(J=Array.isArray(t?.videos)?t.videos:[],J)).catch(()=>(J=[],J)),xt)}function hs(t,e){let s=Tt(e);if(!s.length)return!1;let a=bs(t);return s.every(n=>a.includes(n))}function bs(t){let e=t.title||"",s=e.split(/[\/／|｜]/).map(a=>a.trim()).filter(Boolean);return nt([e,...s,t.originalArtist,t.character,t.type,Ae(t)].filter(Boolean).join(" "))}function Ae(t){switch(t?.type){case"cover":return"\u6B4C\u307F\u305F";case"office":return"Re:AcT\u30AA\u30EA\u66F2";case"character":return"\u30AD\u30E3\u30E9\u30BD\u30F3";default:return"\u30AA\u30EA\u66F2"}}function Tt(t){return nt(t).split(/[\/／|｜\s]+/).map(e=>e.trim()).filter(Boolean)}function Me(t,e){let s=Tt(t);if(!s.length)return!1;let a=nt(e);return s.every(n=>a.includes(n))}function nt(t){return String(t||"").normalize("NFKC").toLowerCase().replace(/\s+/g," ").trim()}function vt(t,e){let a=Tt(e).find(r=>r&&t.toLowerCase().includes(r))||nt(e);if(!a)return t;let i=t.toLowerCase().indexOf(a);return i<0?t:t.slice(0,i)+'<mark class="hl">'+t.slice(i,i+a.length)+"</mark>"+t.slice(i+a.length)}_e();he();var Be={dashboard:()=>import("./chunk-N2Z3LW2B.js").then(t=>t.renderDashboard),ranking:()=>import("./chunk-XRPG5ZEJ.js").then(t=>t.renderRanking),songs:()=>import("./chunk-LR2K7GMT.js").then(t=>t.renderSongs),timeline:()=>import("./chunk-RBSZKBAR.js").then(t=>t.renderTimeline),analytics:()=>import("./chunk-QR5IQKR5.js").then(t=>t.renderAnalytics),playlists:()=>import("./chunk-TE55XZYD.js").then(t=>t.renderPlaylists)},Et=new Map,De=0,at=null;function At(t){return Object.prototype.hasOwnProperty.call(Be,t)}async function ys(t){Et.has(t)||Et.set(t,Be[t]());try{return await Et.get(t)}catch(e){throw Et.delete(t),e}}function Re(t){return["dashboard","timeline","analytics"].includes(t)}function gs(t,e={}){let s=l(`#panel-${t}`);if(!s)return;let a={dashboard:"\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u8A73\u7D30",ranking:"\u30E9\u30F3\u30AD\u30F3\u30B0",songs:"\u66F2\u30EA\u30B9\u30C8",timeline:"\u914D\u4FE1\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3",analytics:"\u30A2\u30CA\u30EA\u30C6\u30A3\u30AF\u30B9"};s.innerHTML=`
    <div class="state-card">
      <div class="msg">${p(a[t]||"\u8A73\u7D30\u30C7\u30FC\u30BF")}</div>
      <div class="err-detail">\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059\u3002</div>
    </div>
  `}function ws(t){let e=l(`#panel-${t}`);e&&(e.innerHTML=`
    <div class="state-card">
      <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059</div>
    </div>
  `)}function ks(t){if(d.channelData?.fullLoaded)return;d.channelData=t;let e=Q(d.channel)?d.channel:dt,s=Q(e);s&&(d.data=s),!Re(d.activeTab)&&d.data&&tt(d.activeTab,{autoLoad:!1})}function $s(t){d.channelData=t,d.channelData.fullLoaded=!0;let e=Q(d.channel)?d.channel:dt;Ht(e,{resetSearch:!1,updateUrl:!1,render:!1}),tt(d.activeTab,{autoLoad:!1})}function Ue(){return at=we({onSongsReady:ks}).then($s).finally(()=>{at=null}),at}async function Jt(){d.channelData?.fullLoaded||(at||Ue(),await at)}async function tt(t=d.activeTab,e={}){if(t!=="playlists"&&(!d.data||!At(t))||!At(t))return;let s=d.channelData?.partialLoaded||d.channelData?.fullLoaded,a=d.channelData?.fullLoaded;if(t==="playlists"?!1:Re(t)?!a:!s)if(e.autoLoad){ws(t);try{await Jt()}catch(r){console.error("[data] full load failed",r);let o=l(`#panel-${t}`);o&&(o.innerHTML=`
            <div class="state-card">
              <div class="msg">\u8A73\u7D30\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
              <div class="err-detail">${p(r?.message||String(r))}</div>
              <button class="btn primary" type="button" data-load-full-data="${p(t)}">\u518D\u8AAD\u307F\u8FBC\u307F</button>
            </div>
          `,o.querySelector("[data-load-full-data]")?.addEventListener("click",()=>{tt(t,{autoLoad:!0})}));return}}else{gs(t,{initial:e.initial});return}let i=++De;try{let r=await ys(t);if(i!==De||t!==d.activeTab||!d.data)return;t==="songs"&&$e(d.data.songs||[]),r()}catch(r){console.error(`[${t}] render failed`,r);let o=l(`#panel-${t}`);o&&(o.innerHTML=`
        <div class="state-card">
          <div class="msg">\u8868\u793A\u306B\u5931\u6557\u3057\u307E\u3057\u305F</div>
          <div class="err-detail">${p(r?.message||String(r))}</div>
        </div>
      `)}}function H(t,e={}){At(t)||(t="dashboard");let s=l("#stream-viewer");if(t!=="player"&&s&&!s.hidden&&!q&&!F(s)){St=t,Vt=e,$t();return}d.activeTab=t,Zt(t),e.updateUrl!==!1&&W({tab:t}),tt(t,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Zt(t){D(".tab-btn").forEach(a=>{let n=a.dataset.tab===t;a.classList.toggle("active",n),a.setAttribute("aria-selected",n?"true":"false")}),D(".mobile-tab-item").forEach(a=>{let n=a.dataset.mobileTab===t;a.classList.toggle("is-active",n),a.setAttribute("aria-current",n?"page":"false")});let e=l("#mobile-tab-current"),s=l(`.tab-btn[data-tab="${t}"] span:last-child`)?.textContent?.trim();e&&s&&(e.textContent=s),D(".panel").forEach(a=>a.classList.toggle("active",a.id===`panel-${t}`)),document.body.dataset.activeTab=t,document.body.classList.toggle("nav-top",t==="playlists"||t==="player")}function Q(t){return d.channelData?t==="all"?d.channelData.combined:d.channelData.channels[t]||null:null}function Ht(t,e={}){let s=Q(t);s&&(d.channel=t,hn(t),d.data=s,d.timelineFilter=null,d.timelineFocus=null,d.timelineLimit=12,d.songsLimit=100,e.resetSearch!==!1&&(d.songsQuery="",d.songsGenre="all"),Yt(),D("#channel-switch [data-channel]").forEach(a=>a.classList.toggle("active",a.dataset.channel===t)),Xt(),e.updateUrl!==!1&&W({tab:d.activeTab,channel:t,q:d.songsQuery}),vn(),e.render!==!1&&tt(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial}))}function Ls(t,e={}){d.audience=t==="singer"?"singer":"listener",d.singerMode=d.audience==="singer",d.singerMode||(d.singerPreset="all"),D(".audience-switch [data-audience]").forEach(s=>{s.classList.toggle("active",s.dataset.audience===d.audience)}),document.body.dataset.audience=d.audience,Xt(),d.audience==="singer"?(d.songsLimit=100,H("songs",{autoLoad:e.autoLoad!==!1})):d.data&&tt(d.activeTab,{autoLoad:e.autoLoad!==!1,initial:!!e.initial})}function Xt(){let t=l("#mobile-menu-label");if(!t)return;let e=l("#audience-switch [data-audience].active")?.textContent?.trim()||"\u30EA\u30B9\u30CA\u30FC";t.textContent=e}function Ss(){let t=l("#mobile-menu-toggle"),e=l("#mobile-menu-state"),s=l("#topbar-actions");if(!t||!e||!s)return;let a=i=>{e.checked=i,s.classList.toggle("is-open",i),t.setAttribute("aria-expanded",String(i))},n=()=>{a(!1),t.focus()};t.addEventListener("click",i=>{i.stopPropagation(),requestAnimationFrame(()=>a(e.checked))}),t.addEventListener("keydown",i=>{i.key!=="Enter"&&i.key!==" "||(i.preventDefault(),a(!e.checked))}),e.addEventListener("change",()=>{a(e.checked)}),document.addEventListener("click",i=>{s.classList.contains("is-open")&&(i.target.closest("#topbar-actions")||i.target.closest("#mobile-menu-toggle")||i.target.closest("#mobile-menu-state")||n())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),s.addEventListener("click",i=>{i.stopPropagation()}),Xt()}function _s(){let t=l("#mobile-tab-nav"),e=l("#mobile-tab-toggle"),s=l("#mobile-tab-panel");if(!t||!e||!s)return;let a=n=>{s.hidden=!n,t.classList.toggle("is-open",n),document.body.classList.toggle("has-mobile-tab-open",n),e.setAttribute("aria-expanded",String(n))};e.addEventListener("click",n=>{n.stopPropagation(),a(s.hidden)}),s.addEventListener("click",n=>{let i=n.target.closest("[data-mobile-tab]");if(!i)return;let r=i.dataset.mobileTab;a(!1),H(r),document.querySelector(".tabs")?.scrollIntoView({behavior:"smooth",block:"start"})}),document.addEventListener("click",n=>{s.hidden||n.target.closest("#mobile-tab-nav")||a(!1)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&a(!1)}),Zt(d.activeTab||"dashboard")}function xs(){let t=l("#page-top-toast");if(!t)return;let e=t.querySelector("img[data-src]"),s=!1,a=420,n=()=>{!e||e.src||(e.src=e.dataset.src||"")},i=()=>{s=!1;let o=window.scrollY>a;o&&n(),t.hidden=!o,t.classList.toggle("is-visible",o),t.setAttribute("aria-hidden",String(!o)),t.tabIndex=o?0:-1},r=()=>{s||(s=!0,requestAnimationFrame(i))};t.hidden=!0,t.setAttribute("aria-hidden","true"),t.tabIndex=-1,t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",r,{passive:!0}),i()}function Ts(){if(d.channelData)for(let t of D("#channel-switch [data-channel]")){let e=t.dataset.channel,s=e==="all"?!!d.channelData.combined:!!(d.channelData.channels&&d.channelData.channels[e]);t.disabled=!s,s?t.removeAttribute("title"):t.title="\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"}}function Es({key:t,title:e,artist:s}){d.timelineFilter&&d.timelineFilter.key===t&&d.activeTab==="timeline"?d.timelineFilter=null:d.timelineFilter={key:t,title:e,artist:s},d.timelineFocus=null,d.timelineLimit=12,H("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ms(t,e){d.timelineFilter={key:t.key,title:t.title,artist:t.artist},d.timelineFocus=et(e),d.timelineLimit=9999,H("timeline"),l("#panel-timeline").scrollIntoView({behavior:"smooth",block:"start"})}function Ps(t){te(t.artist||"")}function te(t){let e=String(t||"").replace(/"/g,"");d.songsQuery=e?`artist:"${e}"`:"",d.songsLimit=100,W({tab:"songs",q:d.songsQuery}),H("songs",{updateUrl:!1})}function Pt(t){return(d.data?.songs||[]).find(e=>e.key===t)||null}function Ye(){return window.matchMedia("(max-width: 700px)").matches}function ee(t,e=0){let s=String(t||""),a=M(s);if(!a)return s;let n=Math.max(0,Math.floor(Number(e)||0));return`https://www.youtube.com/watch?v=${a}${n>0?`&t=${n}s`:""}`}function Oe(t){let e=M(t);return e?`https://i.ytimg.com/vi/${e}/default.jpg`:""}function Lt(){Ct&&(clearInterval(Ct),Ct=null)}function se(){Lt(),Ct=setInterval(()=>{if(T(),!!g)try{let t=g.getDuration?.()||0,e=g.getCurrentTime?.()||0;A&&Vs(A,e);let s=t>0?Math.min(e/t*100,100):0,a=l("#yt-mini-progress-fill");a&&(a.style.width=`${s}%`);let i=g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING,r=l("#yt-mini-play");r&&r.setAttribute("data-playing",i?"1":"0")}catch{}},400)}function ot(){if(Lt(),g){try{g.destroy()}catch{}g=null}let t=l("#yt-player-container");t&&(t.innerHTML="")}function Cs(){if(g?.getCurrentTime)try{return g.getCurrentTime()}catch{}return Math.max(0,yt+(Date.now()-le)/1e3)}function F(t=l("#stream-viewer")){return!!t&&(t.classList.contains("sv-minified")||t.classList.contains("sv-music-minified"))}function T(){let t=l("#stream-viewer");if(!F(t))return;let e=l("#sv-player-wrap"),s=t.classList.contains("sv-music-minified")?document.querySelector("#music-bar .mbar-video-wrap"):document.querySelector("#yt-player-panel .yt-mini-video-wrap");if(!e||!s)return;let a=s.getBoundingClientRect();e.style.left=`${a.left}px`,e.style.top=`${a.top}px`,e.style.width=`${a.width}px`,e.style.height=`${a.height}px`}function Is(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||!e||!h)return!1;ae();let s=l("#yt-player-panel");if(!s)return!1;A=e;try{yt=Math.floor(h.getCurrentTime?.()??0)}catch{yt=0}le=Date.now();let a=l("#yt-mini-title");a&&(a.textContent=e.title||"");let n=l("#yt-mini-hint");n&&(n.textContent="\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B"),s.classList.add("has-stream"),s.hidden=!1,g=h,h=null,t.classList.add("sv-minified"),document.body.classList.add("has-sv-mini"),document.body.style.overflow="",Bt(),B(),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400),window.addEventListener("resize",T),se();try{let i=g.getPlayerState?.();l("#yt-mini-play")?.setAttribute("data-playing",i===window.YT?.PlayerState?.PLAYING?"1":"0")}catch{}return it(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,Z()),!0}function je(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",T),Lt(),t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini");let e=l("#sv-player-wrap");e&&(e.style.cssText=""),h=g,g=null;let s=l("#yt-player-panel");return s&&(s.hidden=!0),re(),B(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Fe(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",T),Lt(),t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music");let e=l("#sv-player-wrap");return e&&(e.style.cssText=""),h=g,g=null,re(),B(),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),!0}function Ke(){let t=l("#stream-viewer");if(!t?.classList.contains("sv-music-minified"))return!1;window.removeEventListener("resize",T),Lt(),rt(),++Y,t.classList.remove("sv-music-minified"),document.body.classList.remove("has-sv-music"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");return e&&(e.style.cssText="",e.innerHTML=""),ot(),A=null,B(),!0}function As(){let t=l("#stream-viewer"),e=t?._currentStream;if(!t||t.hidden||!e?.url)return;let s=ne(z().t),a={...e,title:e.title||(e.isMv?"\u52D5\u753B":"\u6B4C\u67A0"),type:e.isMv?e.type||"original":"stream",sub:e.isMv?e.originalArtist||e.character||e.sub||"":`${V(e.date)} \u7B2C${e.index}\u67A0`,_stream:e};if(!h){Dt().then(i=>i.playMusicBarVideo?.(a,s)).catch(()=>{});return}try{yt=Math.floor(h.getCurrentTime?.()??s)}catch{yt=s}le=Date.now(),g=h,h=null,A=null,q=!1,t.classList.remove("sv-fullscreen","sv-minified"),t.classList.add("sv-music-minified"),document.body.classList.remove("has-sv-fullscreen","has-sv-mini"),document.body.classList.add("has-sv-music"),document.body.style.overflow="",t.hidden=!1;let n=l("#yt-player-panel");n&&(n.hidden=!0),Bt(),B(),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400),window.addEventListener("resize",T),se(),Dt().then(i=>{i.adoptExternalPlayer?.(a,g,{restore:Fe,close:Ke}),T(),requestAnimationFrame(T),setTimeout(T,120),setTimeout(T,400)}).catch(()=>{})}function Nt(){let t=l("#stream-viewer");if(t?.classList.contains("sv-music-minified"))return Ke();if(!t?.classList.contains("sv-minified"))return!1;window.removeEventListener("resize",T),rt(),++Y,t.classList.remove("sv-minified"),document.body.classList.remove("has-sv-mini"),t.hidden=!0,t._currentStream=null;let e=l("#sv-player-wrap");e&&(e.style.cssText="",e.innerHTML=""),ot();let s=l("#yt-player-panel");return s&&(s.hidden=!0),A=null,B(),!0}var ze="sh1an-watch-history-v1",Ve=0;function Ds(){try{return JSON.parse(localStorage.getItem(ze)||"[]")}catch{return[]}}function Ge(t,e){if(!(!t?.url||e<10))try{let s=Ds().filter(a=>a.url!==t.url);s.unshift({url:t.url,title:t.title||"",t:Math.max(0,Math.floor(e)),isMv:!!t.isMv,channel:t.channel??null,index:t.index??null,date:t.date??null,updatedAt:Date.now()}),localStorage.setItem(ze,JSON.stringify(s.slice(0,10)))}catch{}}function Vs(t,e){let s=Date.now();s-Ve<5e3||(Ve=s,Ge(t,e))}var mt=null;function ne(t=0){let e=[h,g];for(let s of e)try{let a=s?.getCurrentTime?.();if(Number.isFinite(a))return Math.max(0,Math.floor(a))}catch{}return Math.max(0,Math.floor(Number(t)||0))}function qs(t,e=0,s={}){if(!t)return"";let a=z(),n=new URLSearchParams,i=a.channel||d.channel;return i&&i!=="new"&&n.set("ch",i),n.set("v",t),s.includeTime!==!1&&e>5&&n.set("t",String(Math.floor(e))),`${location.origin}${location.pathname}?${n}`}function B(){let t=l("#stream-viewer"),s=t&&!t.hidden&&!F(t)&&t._currentStream?.url?M(t._currentStream.url):"",a=s?ne(z().t):0;W({v:s||"",t:a>5?a:0},{replace:!0}),s&&Ge(t._currentStream,a),s&&!mt&&(mt=setInterval(B,5e3)),!s&&mt&&(clearInterval(mt),mt=null)}function Hs(){if(l("#sv-share-modal"))return;let t=document.createElement("div");t.id="sv-share-modal",t.hidden=!0,t.innerHTML=`
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
    </div>`,document.body.appendChild(t);let e=()=>{t.hidden=!0};t.querySelector(".sv-share-backdrop").addEventListener("click",e),l("#sv-share-close").addEventListener("click",e),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&(n.preventDefault(),n.stopPropagation(),e())},{capture:!0});let s=()=>{let n=t._shareState;if(!n)return;let i=l("#sv-share-ts-check")?.checked&&n.t>0,r=qs(n.id,n.t,{includeTime:i}),o=l("#sv-share-url");o&&(o.value=r);let c=n.title?`${n.title}`:"sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9",v=l("#sv-share-x");v&&(v.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(c)}&url=${encodeURIComponent(r)}`);let u=l("#sv-share-line");return u&&(u.href=`https://line.me/R/share?text=${encodeURIComponent(`${c}
${r}`)}`),r};l("#sv-share-ts-check").addEventListener("change",s),t._rebuild=s,l("#sv-share-url").addEventListener("focus",n=>n.target.select()),l("#sv-share-copy").addEventListener("click",async()=>{let n=l("#sv-share-url")?.value;if(!n)return;let i=!1;try{await navigator.clipboard.writeText(n),i=!0}catch{try{l("#sv-share-url").select(),i=document.execCommand("copy")}catch{}}let r=l("#sv-share-copy");r&&(r.textContent=i?"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u3057\u305F":"\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093",r.classList.add("copied"),setTimeout(()=>{r.textContent="\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",r.classList.remove("copied")},1600))});let a=l("#sv-share-native");navigator.share&&a&&(a.hidden=!1,a.addEventListener("click",async()=>{let n=t._shareState,i=l("#sv-share-url")?.value;if(i)try{await navigator.share({title:n?.title||"",url:i})}catch{}}))}function Ns(){let e=l("#stream-viewer")?._currentStream;if(!e?.url)return;let s=M(e.url);if(!s)return;Hs();let a=l("#sv-share-modal"),n=ne(z().t);a._shareState={id:s,t:n,title:e.title||""};let i=l("#sv-share-video-title");i&&(i.textContent=e.title||"(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)");let r=l("#sv-share-ts-row"),o=l("#sv-share-ts-check"),c=l("#sv-share-ts-label");r&&(r.hidden=n<=5),o&&(o.checked=n>5),c&&(c.textContent=X(n)),a._rebuild?.(),a.hidden=!1}var qe=new URLSearchParams(location.search).get("pl");async function Bs(){if(!qe)return;let t=null;try{let a=qe.replace(/-/g,"+").replace(/_/g,"/"),n=Uint8Array.from(atob(a),i=>i.charCodeAt(0));t=JSON.parse(new TextDecoder().decode(n))}catch{return}if(!t||typeof t.n!="string"||!Array.isArray(t.s))return;let e=t.n.slice(0,60)||"\u5171\u6709\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8",s=t.s.filter(a=>typeof a=="string"&&a.length<100).slice(0,300);if(s.length){if(!confirm(`\u5171\u6709\u3055\u308C\u305F\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u300C${e}\u300D\uFF08${s.length}\u4EF6\uFF09\u3092\u53D6\u308A\u8FBC\u307F\u307E\u3059\u304B\uFF1F`)){W({},{replace:!0});return}try{let a=await import("./chunk-TE55XZYD.js"),n=a.createPlaylist(e);for(let i of s)a.addStreamToPlaylist(n.id,i);W({tab:"playlists"},{replace:!0}),H("playlists",{updateUrl:!1})}catch{}}}async function Rs(){let t=z();if(!t.v)return!1;let e=t.v,s=t.t;try{await Jt()}catch{}let a=[];d.channelData?.combined&&a.push(d.channelData.combined),Object.values(d.channelData?.channels||{}).forEach(n=>{n&&a.push(n)});for(let n of a){let i=(n.streams||[]).find(r=>M(r.url)===e);if(i)return x(i,s),!0}try{let r=((await(await fetch("data/music.json")).json())?.videos||[]).find(o=>M(o.url)===e);if(r)return x({url:r.url,title:r.title,isMv:!0},s),!0}catch{}return x({url:`https://www.youtube.com/watch?v=${e}`,title:"",isMv:!0},s),!0}function Us(t,e=0,s=""){let a=M(t);if(!a)return;if(Ye()){window.open(ee(t,e),"_blank","noopener");return}{let c=l("#stream-viewer");if(c&&!c.hidden&&!q)if(F(c))Nt();else{++Y,c.hidden=!0,c._currentStream=null,h=null;let v=l("#sv-player-wrap");v&&(v.innerHTML=""),document.body.style.overflow="",A=null,Vt={},Bt(),B()}}ie(),ae();let n=l("#yt-player-container"),i=l("#yt-player-panel");if(!n||!i)return;ot();let r=l("#yt-mini-title");r&&(r.textContent=s||"\u30A4\u30F3\u30E9\u30A4\u30F3\u518D\u751F");let o=l("#yt-mini-hint");o&&(o.textContent=A?"\u25B2 \u30BF\u30C3\u30D7\u3057\u3066\u914D\u4FE1\u30D3\u30E5\u30FC\u30EF\u30FC\u3078\u623B\u308B":""),i.classList.toggle("has-stream",!!A),i.hidden=!1,Je(()=>{let c=document.createElement("div");n.appendChild(c);try{g=new window.YT.Player(c,{videoId:a,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,rel:0,controls:0,disablekb:1,modestbranding:1,...e>0?{start:Math.floor(e)}:{}},events:{onReady:v=>{let u=Z();try{v.target.setVolume(u)}catch{}if(it(l("#yt-mini-vol-slider"),l("#yt-mini-vol-btn"),null,u),e>5)try{v.target.seekTo(e,!0)}catch{}se()},onStateChange:v=>{let u=v.data===window.YT.PlayerState.PLAYING,m=l("#yt-mini-play");m&&m.setAttribute("data-playing",u?"1":"0")}}})}catch{let u=e>0?`&start=${Math.floor(e)}`:"";n.innerHTML=`<iframe src="https://www.youtube.com/embed/${a}?autoplay=1&playsinline=1${u}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`}})}function ae(){if(l("#yt-player-panel"))return;let t=document.createElement("div");t.id="yt-player-panel",t.hidden=!0,t.innerHTML=`
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
  `,document.body.appendChild(t),l("#yt-player-close").addEventListener("click",()=>{t.hidden=!0,!Nt()&&(ot(),A=null)}),l("#yt-mini-play").addEventListener("click",()=>{if(g)try{g.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?g.pauseVideo():g.playVideo()}catch{}}),l("#yt-mini-restore").addEventListener("click",()=>{je()||A&&x(A,Cs())}),l("#yt-mini-progress-bar").addEventListener("click",a=>{if(!g)return;let i=a.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(1,(a.clientX-i.left)/i.width));try{let o=g.getDuration?.()||0;o>0&&g.seekTo(r*o,!0)}catch{}});let e=l("#yt-mini-vol-slider"),s=l("#yt-mini-vol-btn");if(e){let a=Z();e.value=a,e.style.setProperty("--pct",`${a}%`),s&&(s.innerHTML=bt(a)),e.addEventListener("input",n=>{let i=parseInt(n.target.value);if(n.target.style.setProperty("--pct",`${i}%`),Gt(i),s&&(s.innerHTML=bt(i)),g)try{g.setVolume(i)}catch{}})}if(s){let a=80;s.addEventListener("click",()=>{if(!e)return;let n=parseInt(e.value),i=n>0?0:a||80;n>0&&(a=n),it(e,s,g,i)})}}var Qe=!1,We=[];window.onYouTubeIframeAPIReady=()=>{Qe=!0,We.splice(0).forEach(t=>t()),ht&&Dt({init:!1}).then(t=>t.notifyYtReady()).catch(()=>{})};var ht=null;function Dt(t={}){let e=t.init!==!1;return ht||(ht=import("./chunk-U5DD3H7P.js").then(s=>(s.setApiLoader?.(ie),s))),ht.then(s=>(e&&s.initMusicPlayer?.(),s))}function ie(){if(document.getElementById("yt-iframe-api-script"))return;let t=document.createElement("script");t.id="yt-iframe-api-script",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}function Je(t){if(Qe&&window.YT?.Player){t();return}We.push(t)}var Z=()=>Math.max(0,Math.min(100,parseInt(localStorage.getItem("kanaVol")??"100")||100)),Gt=t=>localStorage.setItem("kanaVol",String(t)),bt=()=>b("volume");function it(t,e,s,a){if(t&&(t.value=a,t.style.setProperty("--pct",`${a}%`)),e&&(e.innerHTML=bt(a)),s)try{s.setVolume(a)}catch{}}var h=null,Y=0,A=null,yt=0,le=0,q=!1,St="timeline",Vt={},N={},Kt=new Map,O=!1,j=!1,g=null,Ct=null,It=null,Ze="sh1anViewerSetlistCollapsed",U=!1;function re(){St=d.activeTab||"timeline",d.activeTab="player",D(".tab-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-selected","false")}),D(".panel").forEach(t=>t.classList.toggle("active",t.id==="panel-player")),document.body.dataset.activeTab="player",document.body.classList.add("nav-top")}function Bt(){let t=Vt;Vt={},H(St||"timeline",t)}function Ys(){q=!0;let t=l("#stream-viewer");if(!t)return;t.classList.add("sv-fullscreen"),document.body.classList.add("has-sv-fullscreen"),document.body.style.overflow="hidden";let e=l("#sv-close");e&&(e.title="\u901A\u5E38\u8868\u793A\u306B\u623B\u308B\uFF08Esc\uFF09");let s=l("#sv-fullscreen-btn");s&&s.setAttribute("aria-pressed","true")}function X(t){let e=Math.floor(t),s=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return s>0?`${s}:${String(a).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${a}:${String(n).padStart(2,"0")}`}function Os(t){return`sh1an-ts-${t.channel||""}-${t.index||""}`}function gt(t){try{return JSON.parse(localStorage.getItem(Os(t))||"null")||{}}catch{return{}}}var wt=-1;function js(t,e,s,a){let n=e===a,i=(N[e]||[])[0],r=i!=null?`<button class="sv-ts-badge" data-idx="${e}" data-action="seek" data-seconds="${i.timeSeconds}" title="${p(X(i.timeSeconds))} \u306B\u79FB\u52D5">${p(X(i.timeSeconds))}</button>`:'<span class="sv-ts-none" aria-hidden="true">--:--</span>';return`<div class="sv-song${n?" is-current":""}" data-idx="${e}">
    <span class="sv-song-num">${e+1}</span>
    <div class="sv-song-info">
      <span class="sv-song-title">${p(t.title)}</span>
      <span class="sv-song-artist">${p(t.artist)}</span>
    </div>
    <div class="sv-song-actions">
      ${r}
    </div>
  </div>`}async function Fs(t){if(N={},!t?.channel||t?.index==null)return;let e=`${t.channel}:${t.index}`;if(Kt.has(e)){N=Kt.get(e)||{};let n=l("#stream-viewer");if(!n||n._currentStream!==t)return;let i=l("#sv-setlist");i&&Qt(i,t.songs,gt(t),wt),He(t);return}try{let n=`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,i=await fetch(n);if(!i.ok)return;let r=await i.json();for(let o of r.items||[])N[o.songIndex]||(N[o.songIndex]=[]),N[o.songIndex].push({timeSeconds:o.timeSeconds,note:o.note??null});Kt.set(e,N)}catch{}let s=l("#stream-viewer");if(!s||s._currentStream!==t)return;let a=l("#sv-setlist");a&&Qt(a,t.songs,gt(t),wt),He(t)}function Ks(t,e,s){l("#sv-cts-modal")?.remove();let a=h?.getCurrentTime?.()??0,n=X(Math.floor(a)),i=document.createElement("div");i.id="sv-cts-modal",i.className="sv-cts-modal-overlay",i.innerHTML=`
    <div class="sv-cts-modal-box" role="dialog" aria-modal="true" aria-label="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u4FEE\u6B63\u3092\u7533\u8ACB">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u4FEE\u6B63\u3092\u7533\u8ACB</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <p class="sv-cts-modal-song">${p(s)}</p>
      <label class="sv-cts-modal-label">
        \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\uFF08MM:SS \u307E\u305F\u306F H:MM:SS\uFF09
        <input class="sv-cts-modal-input" id="sv-cts-ts-input" type="text" value="${p(n)}" placeholder="0:00" autocomplete="off">
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
  `,document.body.appendChild(i);let r=()=>i.remove();i.querySelector(".sv-cts-modal-close").addEventListener("click",r),i.querySelector(".sv-cts-modal-cancel").addEventListener("click",r),i.addEventListener("click",o=>{o.target===i&&r()}),i.querySelector("#sv-cts-submit").addEventListener("click",async()=>{let o=i.querySelector("#sv-cts-ts-input").value.trim(),c=i.querySelector("#sv-cts-note-input").value.trim()||null,v=ds(o),u=i.querySelector("#sv-cts-status");if(v===null){u.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\uFF08\u4F8B: 1:23 \u307E\u305F\u306F 1:23:45\uFF09",u.className="sv-cts-modal-status error",u.hidden=!1;return}let m=i.querySelector("#sv-cts-submit");m.disabled=!0,m.textContent="\u9001\u4FE1\u4E2D\u2026";try{let f=await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:e,timeSeconds:v,submitterNote:c})});if(f.ok)u.textContent="\u63D0\u6848\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002",u.className="sv-cts-modal-status success",u.hidden=!1,m.hidden=!0,i.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B";else{let w=await f.json().catch(()=>({}));u.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${w.error||f.statusText}`,u.className="sv-cts-modal-status error",u.hidden=!1,m.disabled=!1,m.textContent="\u63D0\u6848\u3059\u308B"}}catch(f){u.textContent=`\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${f.message}`,u.className="sv-cts-modal-status error",u.hidden=!1,m.disabled=!1,m.textContent="\u63D0\u6848\u3059\u308B"}}),setTimeout(()=>i.querySelector("#sv-cts-ts-input")?.focus(),50),document.addEventListener("keydown",function o(c){c.key==="Escape"&&(r(),document.removeEventListener("keydown",o))})}function He(t){let e=l("#sv-cts-bulk-btn");!e||!t?.songs?.length||(e.textContent="\u4FEE\u6B63\u7533\u8ACB",e.hidden=!1)}function zs(t){l("#sv-bulk-modal")?.remove();let e=gt(t),s=t.songs.map((r,o)=>`<option value="${o}">${o+1}. ${p(r.title)}${r.artist?" / "+p(r.artist):""}</option>`).join(""),a=t.songs.map((r,o)=>{let c=e[o]!=null?X(e[o]):"",v=N[o]?.[0]?.timeSeconds!=null?X(N[o][0].timeSeconds):"",u=c||v;return`
      <div class="sv-bulk-row" data-idx="${o}">
        <span class="sv-bulk-num">${o+1}</span>
        <span class="sv-bulk-title" title="${p(r.title)}">${p(r.title)}</span>
        <input class="sv-bulk-ts-input" type="text" value="${p(u)}"
          placeholder="0:00" autocomplete="off" data-bulk-ts-idx="${o}">
        <button class="sv-bulk-ts-now" type="button" title="\u73FE\u5728\u6642\u523B\u3092\u5165\u529B" data-bulk-now="${o}">${b("time")}</button>
      </div>`}).join(""),n=document.createElement("div");n.id="sv-bulk-modal",n.className="sv-cts-modal-overlay",n.innerHTML=`
    <div class="sv-cts-modal-box sv-bulk-modal-box" role="dialog" aria-modal="true"
      aria-label="\u4FEE\u6B63\u7533\u8ACB">
      <div class="sv-cts-modal-head">
        <span class="sv-cts-modal-title">\u4FEE\u6B63\u7533\u8ACB</span>
        <button class="sv-cts-modal-close" type="button" aria-label="\u9589\u3058\u308B">${b("close")}</button>
      </div>
      <label class="sv-cts-modal-label">
        \u66F2\u3092\u9078\u3076\uFF08\u500B\u5225\u7533\u8ACB\uFF09\uFF0F\u305D\u306E\u307E\u307E\u5168\u66F2\u307E\u3068\u3081\u3066\u7533\u8ACB\u3082\u53EF
        <select class="sv-cts-modal-input" id="sv-bulk-song-jump">
          <option value="">\u5168\u66F2\u3092\u307E\u3068\u3081\u3066</option>
          ${s}
        </select>
      </label>
      <details class="sv-paste-area">
        <summary class="sv-paste-summary">\u914D\u4FE1\u30B3\u30E1\u30F3\u30C8\u304B\u3089\u4E00\u62EC\u5165\u529B</summary>
        <textarea class="sv-paste-textarea" placeholder="\u914D\u4FE1\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u30B3\u30E1\u30F3\u30C8\u3092\u8CBC\u308A\u4ED8\u3051&#10;\u4F8B: 23:16\u3000\u5FAE\u304B\u306A\u30AB\u30AA\u30EA / Perfume\u300027:58"></textarea>
        <div class="sv-paste-btns">
          <button class="sv-paste-apply btn ghost" type="button">\u89E3\u6790\u3057\u3066\u5165\u529B</button>
          <span class="sv-paste-result" hidden></span>
        </div>
      </details>
      <p class="sv-bulk-hint">\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u5165\u529B\u3057\u3066\u4E00\u62EC\u7533\u8ACB\u3067\u304D\u307E\u3059\u3002\u7A7A\u6B04\u306E\u66F2\u306F\u30B9\u30AD\u30C3\u30D7\u3055\u308C\u307E\u3059\u3002</p>
      <div class="sv-bulk-rows">${a}</div>
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
  `,document.body.appendChild(n);let i=()=>n.remove();n.querySelector(".sv-cts-modal-close").addEventListener("click",i),n.querySelector(".sv-cts-modal-cancel").addEventListener("click",i),n.addEventListener("click",r=>{r.target===n&&i()}),n.querySelector("#sv-bulk-song-jump")?.addEventListener("change",r=>{n.querySelectorAll(".sv-bulk-row.is-target").forEach(v=>v.classList.remove("is-target"));let o=r.target.value;if(o==="")return;let c=n.querySelector(`.sv-bulk-row[data-idx="${o}"]`);c&&(c.classList.add("is-target"),c.scrollIntoView({block:"center",behavior:"smooth"}),c.querySelector(".sv-bulk-ts-input")?.focus())}),n.querySelector(".sv-paste-apply").addEventListener("click",()=>{let o=(n.querySelector(".sv-paste-textarea")?.value||"").split(`
`).map(u=>u.trim()).filter(Boolean),c=0;for(let u of o){let m=ln(u);if(!m)continue;let f=cn(m.title,m.artist,t.songs);if(f>=0){let w=n.querySelector(`[data-bulk-ts-idx="${f}"]`);w&&(w.value=m.start,c++)}}let v=n.querySelector(".sv-paste-result");v&&(v.textContent=c>0?`${o.length}\u884C\u3092\u89E3\u6790 \u2192 ${c}\u66F2\u306B\u5165\u529B\u3057\u307E\u3057\u305F`:"\u4E00\u81F4\u3059\u308B\u66F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F",v.hidden=!1)}),n.querySelector(".sv-bulk-rows").addEventListener("click",r=>{let o=r.target.closest("[data-bulk-now]");if(!o)return;let c=parseInt(o.dataset.bulkNow,10),v=h?.getCurrentTime?.();if(v!=null){let u=n.querySelector(`[data-bulk-ts-idx="${c}"]`);u&&(u.value=X(Math.floor(v)))}}),n.querySelector("#sv-bulk-submit").addEventListener("click",async()=>{let r=n.querySelector("#sv-bulk-note").value.trim()||null,o=n.querySelector("#sv-bulk-status"),c=n.querySelector("#sv-bulk-submit"),v=[];if(n.querySelectorAll("[data-bulk-ts-idx]").forEach(f=>{let w=parseInt(f.dataset.bulkTsIdx,10),_=ds(f.value.trim());_!==null&&v.push({songIndex:w,timeSeconds:_})}),!v.length){o.textContent="\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u304C1\u3064\u3082\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",o.className="sv-cts-modal-status error",o.hidden=!1;return}c.disabled=!0,c.textContent=`\u7533\u8ACB\u4E2D\u2026 (0/${v.length})`,o.hidden=!0;let u=0,m=0;await Promise.all(v.map(async f=>{try{(await fetch(`/api/timestamps/${encodeURIComponent(t.channel)}/${t.index}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({songIndex:f.songIndex,timeSeconds:f.timeSeconds,submitterNote:r})})).ok?u++:m++}catch{m++}c.textContent=`\u7533\u8ACB\u4E2D\u2026 (${u+m}/${v.length})`})),m===0?(o.textContent=`${u}\u66F2\u5206\u306E\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u3092\u7533\u8ACB\u3057\u307E\u3057\u305F\uFF01\u5BE9\u67FB\u5F8C\u306B\u516C\u958B\u3055\u308C\u307E\u3059\u3002`,o.className="sv-cts-modal-status success",c.hidden=!0,n.querySelector(".sv-cts-modal-cancel").textContent="\u9589\u3058\u308B"):(o.textContent=`${u}\u4EF6\u6210\u529F / ${m}\u4EF6\u5931\u6557\u3002\u5931\u6557\u5206\u3092\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,o.className="sv-cts-modal-status error",c.disabled=!1,c.textContent="\u4E00\u62EC\u7533\u8ACB\u3059\u308B"),o.hidden=!1}),document.addEventListener("keydown",function r(o){o.key==="Escape"&&(i(),document.removeEventListener("keydown",r))})}function Gs(){try{return JSON.parse(localStorage.getItem("sh1an-playlists")||"null")||[]}catch{return[]}}var oe="sh1anViewerQueueCollapsed",S=null,kt=!1;function lt(t){let e=S,s=e?.items?.[t];if(s){e.idx=t,kt=!0;try{s.kind==="mv"?x({url:s.video.url,title:s.video.title,isMv:!0}):x(s.stream)}finally{kt=!1}}}window.__playMyListInViewer=t=>{t?.items?.length&&(S={name:t.name||"\u30DE\u30A4\u30EA\u30B9\u30C8",items:t.items,idx:0,repeat:localStorage.getItem("sh1anListRepeat")==="1",collapsed:localStorage.getItem(oe)==="1"},lt(Math.max(0,Math.min(t.idx||0,t.items.length-1))))};window.__openMusicQueueInViewer=(t,e=0,s=0)=>{if(!t?.length)return!1;let a=t.filter(i=>i?.url).map((i,r)=>i._stream?{kind:"stream",key:i._stream.url||`stream:${r}`,stream:i._stream}:{kind:"mv",key:`mv:${M(i.url)||r}`,video:{...i,isMv:!0}});if(!a.length)return!1;S={name:"\u97F3\u697D\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E5\u30FC",items:a,idx:Math.max(0,Math.min(e,a.length-1)),repeat:localStorage.getItem("sh1anListRepeat")==="1",collapsed:localStorage.getItem(oe)==="1"};let n=S.items[S.idx];kt=!0;try{n.kind==="mv"?x({...n.video,isMv:!0},s):x(n.stream,s)}finally{kt=!1}return!0};function ce(){let t=S;if(!t?.items?.length)return"";let e=t.items[t.idx],s=e?.kind==="mv"?e.video?.title||"\u52D5\u753B":e?.stream?.title||"\u914D\u4FE1";return`
    <div class="sv-bp-section sv-queue-section${t.collapsed?" is-collapsed":""}">
      <div class="sv-bp-sh sv-queue-head">${b("playlist")} ${p(t.name)}
        <span class="sv-bp-sh-sub">\uFF08${t.idx+1} / ${t.items.length}\uFF09</span>
        <span class="sv-queue-current">${p(s)}</span>
        <button class="sv-queue-toggle" type="button"
          data-svq-action="toggle" aria-expanded="${!t.collapsed}"
          title="${t.collapsed?"\u30AD\u30E5\u30FC\u3092\u958B\u304F":"\u30AD\u30E5\u30FC\u3092\u9589\u3058\u308B"}">${t.collapsed?"\u958B\u304F":"\u9589\u3058\u308B"}</button>
        <button class="sv-queue-repeat${t.repeat?" is-on":""}" type="button"
          data-svq-action="repeat" aria-pressed="${t.repeat}"
          title="\u30EA\u30B9\u30C8\u30EA\u30D4\u30FC\u30C8\uFF08ON: \u6700\u5F8C\u307E\u3067\u518D\u751F\u3057\u305F\u3089\u5148\u982D\u3078\u623B\u308B\uFF09">${b("repeat")} \u30EA\u30D4\u30FC\u30C8</button>
      </div>
      <div class="sv-queue-list">
        ${t.items.map((a,n)=>{let i=a.kind==="mv"?a.video?.title||"\u52D5\u753B":a.stream?.title||"\u914D\u4FE1",r=a.kind==="mv"?b("video"):b("calendar"),o=a.kind==="mv"?"\u52D5\u753B":`${V(a.stream?.date)}\u3000\u7B2C${a.stream?.index}\u67A0`;return`<button class="sv-queue-row${n===t.idx?" is-current":""}" type="button"
            data-svq-action="jump" data-svq-idx="${n}">
            <span class="sv-queue-num">${n+1}</span>
            <span class="sv-queue-title">${p(i)}</span>
            <span class="sv-queue-meta">${r} ${p(o)}</span>
          </button>`}).join("")}
      </div>
    </div>`}function Xe(t){let e=t.target.closest("[data-svq-action]");if(!e||!S)return!1;if(e.dataset.svqAction==="jump"){let s=parseInt(e.dataset.svqIdx,10);return!Number.isNaN(s)&&s!==S.idx&&lt(s),!0}if(e.dataset.svqAction==="repeat"){S.repeat=!S.repeat;try{localStorage.setItem("sh1anListRepeat",S.repeat?"1":"0")}catch{}return e.classList.toggle("is-on",S.repeat),e.setAttribute("aria-pressed",String(S.repeat)),!0}if(e.dataset.svqAction==="toggle"){S.collapsed=!S.collapsed;try{localStorage.setItem(oe,S.collapsed?"1":"0")}catch{}let s=e.closest(".sv-queue-section");return s&&(s.outerHTML=ce()),de(l("#sv-below-player")),!0}return!1}function de(t){if(S?.collapsed)return;let e=t?.querySelector?.(".sv-queue-list"),s=e?.querySelector(".sv-queue-row.is-current");e&&s&&(e.scrollTop=Math.max(0,s.offsetTop-e.clientHeight/2))}function ts(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(n=>n.channel===s.channel&&n.index===s.index);a<0||a>=t.length-1||x(t[a+1])}async function es(t){let e=await ue(),s=M(t?.url);if(!s||!e.length)return;let a=e.findIndex(i=>M(i.url)===s);if(a<0||a>=e.length-1)return;let n=e[a+1];x({...n,isMv:!0})}async function Qs(t){let e=await ue(),s=M(t?.url);if(!s||!e.length)return;let a=e.findIndex(n=>M(n.url)===s);a<=0||x({...e[a-1],isMv:!0})}function ss(t){if(!t||F(t))return;let e=h||g;if(j&&e){try{e.seekTo(0,!0),e.playVideo()}catch{}return}if(S?.items?.length){let a=S;a.idx<a.items.length-1?lt(a.idx+1):a.repeat&&lt(0);return}if(!O)return;let s=t._currentStream;s?.isMv?es(s):ts()}function rt(){It&&(clearInterval(It),It=null)}function Ws(t,e){rt();let s=!1;It=setInterval(()=>{if(t!==Y||e.hidden||!h){rt();return}try{let a=h.getPlayerState?.();a===window.YT?.PlayerState?.ENDED?(s||ss(e),s=!0):a===window.YT?.PlayerState?.PLAYING&&(s=!1);let n=h.getCurrentTime?.()??0,i=e._currentStream;if(i?.songs?.length){let r=gt(i),o=-1;for(let c=0;c<i.songs.length;c++)r[c]!=null&&n>=r[c]&&(o=c);o!==wt&&(wt=o,Js(o))}}catch{}},700)}function Js(t){let e=l("#sv-setlist");if(!e)return;e.querySelectorAll(".sv-song").forEach((a,n)=>a.classList.toggle("is-current",n===t))}function ns(t){U=!!t;try{localStorage.setItem(Ze,U?"1":"0")}catch{}let e=l("#stream-viewer .sv-panel"),s=l("#sv-setlist-toggle");e&&e.classList.toggle("is-setlist-collapsed",U),s&&(s.textContent=U?"\u958B\u304F":"\u7573\u3080",s.title=U?"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u958B\u304F":"\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8\u3092\u6298\u308A\u305F\u305F\u3080",s.setAttribute("aria-expanded",String(!U)))}function Zs(){try{U=localStorage.getItem(Ze)==="1"}catch{}ns(U)}function Xs(){let t=d.data?.streams||[],s=l("#stream-viewer")?._currentStream;if(!s)return;let a=t.findIndex(n=>n.channel===s.channel&&n.index===s.index);a<=0||x(t[a-1])}function as(){let t=h||g;if(t)try{t.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?t.pauseVideo?.():t.playVideo?.()}catch{}}function qt(t){D('.sv-bp-control-btn[data-bp-action="toggle-play"]').forEach(e=>{e.innerHTML=t?b("pause"):b("play"),e.title=t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F",e.setAttribute("aria-label",t?"\u4E00\u6642\u505C\u6B62":"\u518D\u751F"),e.setAttribute("aria-pressed",String(t))})}function is(){return'<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z"/></svg>'}function ls(t){return Gs().some(e=>(e.streams||[]).includes(t))}function rs(t,e,s){import("./chunk-TE55XZYD.js").then(a=>{a.showAddToPlaylistModal(t,e,{onChange:n=>{s?.classList.toggle("is-saved",!!n),s?.setAttribute("aria-pressed",String(!!n)),s&&(s.title=n?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58")}})}).catch(()=>{})}function tn(t){return t.length?t.map(e=>{let s=Oe(e.stream.url)||st(e.stream.url);return`<button class="sv-side-rel-card" type="button" data-bp-action="open-stream" data-bp-channel="${p(e.stream.channel)}" data-bp-index="${e.stream.index}">
      ${s?`<img class="sv-side-rel-thumb" src="${p(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<span class="sv-side-rel-thumb sv-side-rel-thumb--empty"></span>'}
      <span class="sv-side-rel-body">
        <span class="sv-side-rel-title">${p(e.stream.title||"\u914D\u4FE1")}</span>
        <span class="sv-side-rel-meta">${V(e.stream.date)} / ${e.overlap}\u66F2\u4E00\u81F4</span>
        <span class="sv-side-rel-songs">${e.sharedSongs.map(a=>p(a)).join("\u3001")}</span>
      </span>
    </button>`}).join(""):'<div class="sv-side-empty">\u540C\u3058\u66F2\u3092\u6B4C\u3063\u305F\u914D\u4FE1\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093</div>'}function en(t){let e=l("#sv-side-related");e&&(e.innerHTML=`
    <div class="sv-side-related-head">
      <span>\u95A2\u9023\u914D\u4FE1</span>
      <span>${t.length?`${t.length}\u4EF6`:""}</span>
    </div>
    <div class="sv-side-related-list">${tn(t)}</div>
  `)}function os(t){return/縦型|たて配信|タテ|#?shorts|ショート|vertical/i.test(t?.title||"")||/\/shorts\//.test(t?.url||"")}function Ne(t,e){if(!t)return`<div class="sv-bp-nav-card sv-bp-nav-empty">${p(e==="newer"?"\u6700\u65B0\u914D\u4FE1":"\u6700\u521D\u306E\u914D\u4FE1")}</div>`;let s=st(t.url),a=e==="newer"?"\u65B0\u3057\u3044\u914D\u4FE1 \u2192":"\u2190 \u53E4\u3044\u914D\u4FE1";return`<button class="sv-bp-nav-card ${os(t)?"sv-bp-nav-card--portrait":"sv-bp-nav-card--landscape"}" type="button" data-bp-action="open-stream" data-bp-channel="${p(t.channel)}" data-bp-index="${t.index}">
    <div class="sv-bp-nav-dir">${p(a)}</div>
    ${s?`<img class="sv-bp-nav-thumb" src="${p(s)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-nav-thumb sv-bp-nav-thumb--empty"></div>'}
    <div class="sv-bp-nav-info">
      <div class="sv-bp-nav-title">${p(t.title||"\u914D\u4FE1")}</div>
      <div class="sv-bp-nav-meta">${V(t.date)}\u3000${t.songs.length}\u66F2</div>
    </div>
  </button>`}function sn(t){let e=l("#sv-below-player");if(!e)return;let s=d.data?.streams||[],a=s.findIndex(u=>u.channel===t.channel&&u.index===t.index),n=a>=0&&a<s.length-1?s[a+1]:null,i=a>0?s[a-1]:null,r=new Set(t.songs.map(u=>u.title)),o=s.filter((u,m)=>m!==a).map(u=>{let m=u.songs.filter(f=>r.has(f.title));return{stream:u,overlap:m.length,sharedSongs:m.slice(0,3).map(f=>f.title)}}).filter(u=>u.overlap>0).sort((u,m)=>m.overlap-u.overlap).slice(0,8),c=et(t),v=ls(c);e.innerHTML=`
    <div class="sv-bp-wrap">
      ${ce()}

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
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${v?" is-saved":""}" type="button"
            data-bp-action="bookmark-stream" aria-pressed="${v}" title="${v?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${v?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${is()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${n?`\u6B21\uFF1A${p(n.title||"\u6B21\u306E\u914D\u4FE1")}`:"\u6700\u5F8C\u306E\u914D\u4FE1\u3067\u3059"}
        </div>
        <div class="sv-bp-nav-cards">
          ${Ne(i,"newer")}
          ${Ne(n,"older")}
        </div>
        <div class="sv-bp-info-compact">
          <span>${V(t.date)}</span>
          <span>\u7B2C${t.index}\u67A0</span>
          <span>${t.songs.length}\u66F2</span>
        </div>
      </div>

    </div>
  `,en(o),e.onchange=u=>{let m=u.target.closest("#sv-ap-check"),f=u.target.closest("#sv-repeat-check");if(m){O=m.checked;let w=m.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",O)}if(f){j=f.checked;let w=f.closest(".sv-bp-ap-switch");w&&w.classList.toggle("sv-bp-ap-switch--on",j)}},e.onclick=u=>{if(Xe(u))return;let m=u.target.closest("[data-bp-action]");if(!m)return;let f=m.dataset.bpAction;if(f==="open-stream"){let w=m.dataset.bpChannel,_=parseInt(m.dataset.bpIndex,10),L=(d.data?.streams||[]).find(k=>k.channel===w&&k.index===_);L&&x(L)}else f==="prev-stream"?Xs():f==="next-stream"?ts():f==="toggle-play"?as():f==="bookmark-stream"&&rs(c,t.title||"\u914D\u4FE1",m)},de(e);try{let u=(h||g)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;qt(u)}catch{}}var ft=null;async function ue(){if(ft)return ft;try{ft=(await(await fetch("data/music.json")).json())?.videos||[]}catch{ft=[]}return ft}function nn(t){let e=String(t||"");return e=e.replace(/【[^】]*】/g," "),e=e.replace(/^\s*MV[⌇|｜♪♬:：\-\s]*/i," "),e=e.split(/[\/／|｜]/)[0],e=e.replace(/歌ってみた|covered?\s*(by.*)?$/gi," "),e.trim()}async function an(t){let e=l("#sv-below-player");if(!e)return;try{await Jt()}catch{}let s=await ue();if(l("#stream-viewer")?._currentStream!==t)return;let a=d.channelData?.combined?.streams||d.data?.streams||[],n=G(nn(t.title)),i=[];if(n.length>1)for(let y of a){let $=(y.songs||[]).find(P=>{let C=G(P.title);return C===n||C.length>1&&(C.includes(n)||n.includes(C))});$&&i.push({stream:y,songTitle:$.title})}let r=i.slice(0,8),o={original:"\u30AA\u30EA\u30B8\u30CA\u30EB",office:"Re:AcT",character:"\u30AD\u30E3\u30E9\u30BD\u30F3",cover:"\u30AB\u30D0\u30FC"},c=s.find(y=>y.url===t.url),v=s.filter(y=>y.url!==t.url).sort((y,$)=>{let P=c&&y.type===c.type?1:0,C=c&&$.type===c.type?1:0;return P!==C?C-P:($.publishedAt||"").localeCompare(y.publishedAt||"")}).slice(0,12),u=s.findIndex(y=>M(y.url)===M(t.url)),m=u>=0&&u<s.length-1?s[u+1]:null,f=u>0?s[u-1]:null,w=c||s.find(y=>M(y.url)===M(t.url)),_=w?"mv:"+w.id:"",L=_?ls(_):!1,k=S,E=!!k?.items?.length,K=E&&k.idx>0||!!f,ct=E&&k.idx<k.items.length-1||!!m;e.innerHTML=`
    <div class="sv-bp-wrap">
      ${ce()}
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
            <span class="sv-bp-ap-switch${j?" sv-bp-ap-switch--on":""}">
              <input type="checkbox" id="sv-repeat-check" class="sv-bp-ap-check"${j?" checked":""}>
              <span class="sv-bp-ap-knob"></span>
            </span>
            \u30EA\u30D4\u30FC\u30C8
          </label>
          <button class="sv-bp-control-btn sv-bp-bookmark-btn${L?" is-saved":""}" type="button"
            data-mv-action="bookmark-mv" data-mv-key="${p(_)}" aria-pressed="${L}"
            title="${L?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}"
            aria-label="${L?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"}">${is()}</button>
        </div>
        <div class="sv-bp-next-hint">
          ${m?`\u6B21\uFF1A${p(m.title||"\u6B21\u306E\u52D5\u753B")}`:'<span class="sv-bp-ap-hint--end">\uFF08\u6700\u5F8C\u306E\u52D5\u753B\uFF09</span>'}
        </div>
      </div>
      ${r.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${b("mic")} \u3053\u306E\u66F2\u304C\u6B4C\u308F\u308C\u305F\u6B4C\u67A0 <span class="sv-bp-sh-sub">\uFF08\u5168${i.length}\u56DE\uFF09</span></div>
        <div class="sv-bp-related-list">
          ${r.map(y=>{let $=st(y.stream.url);return`<button class="sv-bp-rel-card" type="button" data-mv-action="open-stream" data-mv-channel="${p(y.stream.channel)}" data-mv-index="${y.stream.index}">
              ${$?`<img class="sv-bp-rel-thumb" src="${p($)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-bp-rel-thumb sv-bp-rel-thumb--empty"></div>'}
              <div class="sv-bp-rel-info">
                <div class="sv-bp-rel-title">${p(y.stream.title||"\u914D\u4FE1")}</div>
                <div class="sv-bp-rel-meta">${V(y.stream.date)}\u3000\u7B2C${y.stream.index}\u67A0</div>
                <div class="sv-bp-rel-songs">${b("music")} ${p(y.songTitle)}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}

      ${v.length?`
      <div class="sv-bp-section">
        <div class="sv-bp-sh">${b("video")} \u307B\u304B\u306E\u52D5\u753B <button class="sv-mv-all-btn" type="button" data-mv-action="all-videos">\u3059\u3079\u3066\u898B\u308B \u2192</button></div>
        <div class="sv-mv-grid">
          ${v.map(y=>{let $=st(y.url);return`<button class="sv-mv-card" type="button" data-mv-action="open-mv" data-mv-url="${p(y.url)}" data-mv-title="${p(y.title)}">
              ${$?`<img class="sv-mv-card-thumb" src="${p($)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="sv-mv-card-thumb"></div>'}
              <div class="sv-mv-card-body">
                <div class="sv-mv-card-title">${p(y.title)}</div>
                <div class="sv-mv-card-type">${o[y.type]||"\u30AA\u30EA\u30B8\u30CA\u30EB"}</div>
              </div>
            </button>`}).join("")}
        </div>
      </div>
      `:""}
    </div>
  `,e.onchange=y=>{let $=y.target.closest("#sv-ap-check"),P=y.target.closest("#sv-repeat-check");if($){O=$.checked;let C=$.closest(".sv-bp-ap-switch");C&&C.classList.toggle("sv-bp-ap-switch--on",O)}if(P){j=P.checked;let C=P.closest(".sv-bp-ap-switch");C&&C.classList.toggle("sv-bp-ap-switch--on",j)}},e.onclick=y=>{if(Xe(y))return;let $=y.target.closest("[data-mv-action]");if(!$)return;let P=$.dataset.mvAction;if(P==="open-stream"){let C=$.dataset.mvChannel,vs=parseInt($.dataset.mvIndex,10),pe=(d.channelData?.combined?.streams||d.data?.streams||[]).find(me=>me.channel===C&&me.index===vs);pe&&x(pe)}else P==="open-mv"?x({url:$.dataset.mvUrl,title:$.dataset.mvTitle,isMv:!0}):P==="all-videos"?H("playlists"):P==="toggle-play"?as():P==="mv-prev"?E&&k.idx>0?lt(k.idx-1):Qs(t):P==="mv-next"?E&&k.idx<k.items.length-1?lt(k.idx+1):es(t):P==="bookmark-mv"&&rs($.dataset.mvKey,t.title||"\u52D5\u753B",$)},de(e);try{let y=(h||g)?.getPlayerState?.()===window.YT?.PlayerState?.PLAYING;qt(y)}catch{}}function Qt(t,e,s,a){t.innerHTML=e.map((n,i)=>js(n,i,s,a)).join("")}var cs=/\b\d{1,2}:\d{2}(?::\d{2})?\b/g;function ds(t){let e=String(t||"").match(/(\d+):(\d{2}):(\d{2})|(\d+):(\d{2})/);return e?e[1]!==void 0?parseInt(e[1])*3600+parseInt(e[2])*60+parseInt(e[3]):parseInt(e[4])*60+parseInt(e[5]):null}function ln(t){let e=String(t||"").trim();if(!e)return null;let s=e.match(cs)||[];if(!s.length)return null;let a=rn(e);if(!a)return null;let{title:n,artist:i}=on(a);return n?{start:s[0].trim(),title:n,artist:i,end:s.length>1?s[s.length-1].trim():"",raw:a}:null}function rn(t){return String(t||"").replace(cs," ").replace(/https?:\/\/\S+/gi," ").replace(/^\s*(?:\d+[\).．、:]|[#＃]\d+|[・\-*＊•▶▷♪♫🎵🎶]+)\s*/u,"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`]+|[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").replace(/\s*(?:[-–—~〜→⇒>|｜]{2,}|[|｜])\s*$/g,"").replace(/[ \t　]+/g," ").trim()}function zt(t){return String(t||"").replace(/^[\s　\[\]【】()（）<>＜＞「」『』"'`・\-*＊•▶▷♪♫🎵🎶]+/u,"").replace(/[\s　\[\]【】()（）<>＜＞「」『』"'`]+$/g,"").trim()}function on(t){let e=zt(t);if(!e)return{title:"",artist:""};let s=[/^(.+?)\s*(?:\/|／)\s*(.+)$/,/^(.+?)\s+(?:by|BY|By)\s+(.+)$/,/^(.+?)\s*(?:-|－|–|—|~|〜|｜|\|)\s*(.+)$/,/^(.+?)\s+(?:covered\s+by|cover\s+by|歌[:：])\s+(.+)$/i];for(let a of s){let n=e.match(a);if(!n)continue;let i=zt(n[1]),r=zt(n[2]);if(i&&r)return{title:i,artist:r}}return{title:e,artist:""}}function G(t){return(t||"").toLowerCase().replace(/[\s　]/g,"").replace(/[！-～]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)).replace(/[・｡。、，,．.！!？?「」『』【】（）()]/g,"")}function cn(t,e,s){let a=G(t),n=G(e),i=-1,r=0;for(let o=0;o<s.length;o++){let c=G(s[o].title),v=G(s[o].artist),u=0;c===a?u+=80:a.length>1&&(c.includes(a)||a.includes(c))&&(u+=40),n&&v===n?u+=20:n&&n.length>1&&(v.includes(n)||n.includes(v))&&(u+=10),u>r&&(r=u,i=o)}if(r<40&&n)for(let o=0;o<s.length;o++){let c=G(s[o].title),v=G(s[o].artist),u=0;c===n?u+=70:n.length>1&&(c.includes(n)||n.includes(c))&&(u+=35),v&&v===a?u+=20:a.length>1&&(v.includes(a)||a.includes(v))&&(u+=10),u>r&&(r=u,i=o)}return r>=40?i:-1}function us(){if(l("#stream-viewer"))return;let t=l("#panel-player");if(!t)return;let e=document.createElement("div");e.id="stream-viewer",e.hidden=!0,e.setAttribute("aria-label","\u914D\u4FE1\u30D7\u30EC\u30A4\u30E4\u30FC"),e.innerHTML=`
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
              <button class="sv-cts-bulk-btn" id="sv-cts-bulk-btn" type="button" hidden>\u4FEE\u6B63\u7533\u8ACB</button>
              <span class="sv-song-count" id="sv-song-count"></span>
            </div>
          </div>
      <div class="sv-panel-hint">${b("time")} \u6642\u523B\u30D0\u30C3\u30B8\u3092\u30BF\u30C3\u30D7\u3067\u79FB\u52D5 \uFF0F \u30BA\u30EC\u306F\u300C\u4FEE\u6B63\u7533\u8ACB\u300D\u304B\u3089</div>
          <div class="sv-setlist" id="sv-setlist"></div>
          <div class="sv-side-related" id="sv-side-related"></div>
        </div>
      </div>
    </div>
  `,t.appendChild(e),l("#sv-close").addEventListener("click",()=>$t()),l("#sv-share-btn").addEventListener("click",Ns),l("#sv-music-btn").addEventListener("click",As),l("#sv-fullscreen-btn").addEventListener("click",Ys),l("#sv-setlist-toggle")?.addEventListener("click",()=>ns(!U)),l("#sv-side-related")?.addEventListener("click",n=>{let i=n.target.closest('[data-bp-action="open-stream"]');if(!i)return;let r=i.dataset.bpChannel,o=parseInt(i.dataset.bpIndex,10),c=(d.data?.streams||[]).find(v=>v.channel===r&&v.index===o);c&&x(c)});let s=l("#sv-vol-slider"),a=l("#sv-vol-btn");if(s){let n=Z();s.value=n,s.style.setProperty("--pct",`${n}%`),a&&(a.innerHTML=bt(n)),s.addEventListener("input",i=>{let r=parseInt(i.target.value);if(i.target.style.setProperty("--pct",`${r}%`),Gt(r),a&&(a.innerHTML=bt(r)),h)try{h.setVolume(r)}catch{}})}if(a){let n=80;a.addEventListener("click",()=>{if(!s)return;let i=parseInt(s.value),r=i>0?0:n||80;i>0&&(n=i),it(s,a,h,r),Gt(r)})}e.querySelectorAll("[data-bc-tab]").forEach(n=>{n.addEventListener("click",()=>{St=n.dataset.bcTab,$t()})}),l("#sv-cts-bulk-btn").addEventListener("click",()=>{let n=e._currentStream;n&&zs(n)}),l("#sv-setlist").addEventListener("click",n=>{let i=n.target.closest("[data-action]");if(!i)return;let r=parseInt(i.dataset.idx,10),o=e._currentStream;if(o){if(i.dataset.action==="seek"){let c=Number(i.dataset.seconds);if(!isNaN(c)&&h?.seekTo){h.seekTo(c,!0);try{h.playVideo()}catch{}}}else if(i.dataset.action==="cts-propose"){let c=o.songs[r];Ks(o,r,c?.title||`\u66F2 ${r+1}`)}}})}function x(t,e=0){if(!t?.url)return;let s=M(t.url);if(!s){Us(t.url);return}if(Ye()){window.open(ee(t.url,e),"_blank","noopener");return}us(),ie(),rt(),kt||(S=null);let a=l("#stream-viewer");if(F(a)){if(a._currentStream?.url===t.url){if(!je()&&!window.__restoreMusicExternalPlayer?.()&&Fe(),e>0)try{h?.seekTo(Math.floor(e),!0),h?.playVideo()}catch{}return}Nt()}let n=window.__takeOverMusicPlayerVideo?.(t.url)||null;n||ht&&Dt({init:!1}).then(k=>(k.releaseMusicPlayerVideo||k.pauseMusicPlayer)()).catch(()=>{});let i=l("#yt-player-panel");if(i&&!i.hidden){try{g?.pauseVideo()}catch{}i.hidden=!0,ot()}if(A=null,q){q=!1;let k=l("#stream-viewer");k&&k.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow=""}q=!1,re();let r=l("#stream-viewer");r.classList.remove("sv-fullscreen"),r.classList.toggle("sv-mv-mode",!!t.isMv);let o=os(t);r.classList.toggle("sv-portrait",o),r._currentStream=t,Zs();let c=++Y,v=r.querySelectorAll("[data-bc-tab]");v[1]&&(t.isMv?(v[1].dataset.bcTab="playlists",v[1].textContent="\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8"):(v[1].dataset.bcTab="timeline",v[1].textContent="\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"));let u=l("#sv-bc-title");u&&(u.textContent=t.title||"\u914D\u4FE1");let m=l("#sv-stream-meta");m&&(m.innerHTML=t.isMv?"":`${V(t.date)}\u3000\u7B2C${t.index}\u67A0\u3000${b("mic")} ${t.songs.length}\u66F2`);let f=l("#sv-yt-link");f&&(f.href=t.url);let w=l("#sv-song-count");if(w&&(w.textContent=t.isMv?"":`${t.songs.length}\u66F2`),N={},t.isMv){let k=l("#sv-setlist");k&&(k.innerHTML="");let E=l("#sv-below-player");E&&(E.innerHTML="");let K=l("#sv-side-related");K&&(K.innerHTML=""),an(t)}else{let k=gt(t);Qt(l("#sv-setlist"),t.songs,k,wt),Fs(t),sn(t)}r.hidden=!1,document.body.style.overflow="",B(),window.scrollTo({top:0,behavior:"auto"}),setTimeout(()=>{l("#sv-close")?.focus({preventScroll:!0})},50),h=null;let _=l("#sv-player-wrap");_.innerHTML='<div class="sv-player-loading">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div>';let L=Math.floor(e||n?.currentTime||0);if(n?.player){_.innerHTML="",n.iframe?(n.iframe.style.width="100%",n.iframe.style.height="100%",_.appendChild(n.iframe)):_.innerHTML='<div class="sv-player-loading">\u518D\u751F\u3092\u5F15\u304D\u7D99\u304E\u307E\u3057\u305F</div>',h=n.player;try{h.setVolume?.(Z()),L>1&&h.seekTo?.(L,!0),h.playVideo?.()}catch{}it(l("#sv-vol-slider"),l("#sv-vol-btn"),null,Z()),qt(!0),Ws(c,r);return}Je(()=>{if(c!==Y||r.hidden)return;_.innerHTML="";let k=document.createElement("div");_.appendChild(k);try{h=new window.YT.Player(k,{videoId:s,width:"100%",height:"100%",playerVars:{autoplay:1,playsinline:1,origin:location.origin,rel:0,modestbranding:1,...L>0?{start:L}:{}},events:{onReady:E=>{let K=Z();try{E.target.setVolume(K)}catch{}it(l("#sv-vol-slider"),l("#sv-vol-btn"),null,K);try{E.target.setPlaybackQuality("hd1080")}catch{}try{E.target.setPlaybackQualityRange("hd720","hd1080")}catch{}if(L>5)try{E.target.seekTo(L,!0)}catch{}},onStateChange:E=>{if(c===Y){if(qt(E.data===window.YT.PlayerState.PLAYING),E.data===window.YT.PlayerState.PLAYING)try{E.target.setPlaybackQuality("hd1080")}catch{}E.data===window.YT.PlayerState.ENDED&&ss(r)}},onError:()=>{c===Y&&(_.innerHTML=`<iframe src="https://www.youtube.com/embed/${p(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${L>0?`&start=${L}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`)}}})}catch{_.innerHTML=`<iframe src="https://www.youtube.com/embed/${p(s)}?autoplay=1&playsinline=1&rel=0&origin=${encodeURIComponent(location.origin)}${L>0?`&start=${L}`:""}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`}})}function $t(){let t=l("#stream-viewer");if(!t||t.hidden||F(t))return;if(q){q=!1,t.classList.remove("sv-fullscreen"),document.body.classList.remove("has-sv-fullscreen"),document.body.style.overflow="";let s=l("#sv-close");s&&(s.title="\u30DF\u30CB\u30D7\u30EC\u30A4\u30E4\u30FC\u3067\u518D\u751F\u3092\u7D9A\u3051\u306A\u304C\u3089\u623B\u308A\u307E\u3059\uFF08Esc\uFF09");let a=l("#sv-fullscreen-btn");a&&a.setAttribute("aria-pressed","false");return}if(Is())return;++Y,t.hidden=!0,t._currentStream=null,rt(),h=null;let e=l("#sv-player-wrap");e&&(e.innerHTML=""),document.body.style.overflow="",Bt(),B()}window.__openStreamViewer=x;window.__closeStreamMiniPlayer=()=>{let t=l("#stream-viewer");if(F(t))return Nt(),!0;let e=l("#yt-player-panel");return e&&!e.hidden?(e.hidden=!0,ot(),A=null,!0):!1};function Wt(t){let e=Pt(t),s=l("#song-modal"),a=l("#song-modal-body"),n=l("#song-modal-title");if(!e||!s||!a||!n)return;ge(e),n.textContent=e.title;let i=(e.streamRefs||[]).slice(0,8).map(c=>{let v=Math.max(0,Math.floor(Number(c.t)||0));return{...c,startAt:v,watchUrl:ee(c.url,v),thumbnail:st(c.url),thumbnailFallback:be(c.url),thumbnailTiny:Oe(c.url),detailKey:et(c)}}),r=[e.genre,...e.seasonTags||[],...e.moodTags||[],...e.singerTags||[]].filter(Boolean),o=Rt(e.key);a.innerHTML=`
    <div class="song-detail-main">
      <div>
        <button class="song-detail-artist" type="button" data-detail-action="artist" data-songkey="${p(e.key)}">${p(e.artist)}</button>
        <div class="song-detail-tags">${r.map(c=>`<span class="tag-badge">${p(c)}</span>`).join("")}</div>
      </div>
      <div class="song-detail-stats">
        <div><strong>${e.count}</strong><span>\u6B4C\u5531\u56DE\u6570</span></div>
        <div><strong>${e.daysSinceLast??"\u2014"}</strong><span>\u65E5\u524D</span></div>
        <div><strong>${V(e.firstSung)||"\u2014"}</strong><span>\u521D\u62AB\u9732</span></div>
      </div>
    </div>
    <div class="song-detail-actions">
      <button class="btn ${o?"primary":"ghost"}" type="button" data-detail-action="favorite" data-songkey="${p(e.key)}">${b("heart")} ${o?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}</button>
      <button class="btn primary" type="button" data-detail-action="timeline" data-songkey="${p(e.key)}">\u6B4C\u67A0\u3092\u898B\u308B</button>
      <button class="btn ghost" type="button" data-detail-action="close">\u9589\u3058\u308B</button>
    </div>
    <div class="song-detail-history">
      <h3>\u6B4C\u3063\u305F\u6B4C\u67A0</h3>
      ${i.length?i.map(c=>`
        <div class="song-detail-stream">
          ${c.thumbnail&&c.url?`<a class="song-detail-thumb-link" href="${p(c.url)}" target="_blank" rel="noopener" aria-label="YouTube\u3067\u958B\u304F"><img class="song-detail-thumb" src="${p(c.thumbnail)}" data-fallback="${p(c.thumbnailFallback)}" data-tiny="${p(c.thumbnailTiny)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:'<div class="song-detail-thumb placeholder"></div>'}
          <button class="song-detail-frame" type="button" data-detail-action="stream" data-songkey="${p(e.key)}" data-streamkey="${p(c.detailKey)}">
            <span>${V(c.date)}</span>
            <strong>${p(c.title||"\u914D\u4FE1")}</strong>
          </button>
        </div>
      `).join(""):'<p class="song-detail-empty">\u5C65\u6B74\u672A\u78BA\u8A8D</p>'}
    </div>
  `,s.hidden=!1,l("#song-modal-close")?.focus()}function dn(){let t=l("#song-modal"),e=l("#song-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s();let n=a.target.closest("[data-detail-action]");if(n){if(a.stopPropagation(),n.dataset.detailAction==="close"&&s(),n.dataset.detailAction==="favorite"){let i=n.dataset.songkey;fe(i);let r=Rt(i);n.innerHTML=`${b("heart")} ${r?"\u304A\u6C17\u306B\u5165\u308A\u89E3\u9664":"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0"}`,n.classList.toggle("primary",r),n.classList.toggle("ghost",!r)}if(n.dataset.detailAction==="timeline"){let i=Pt(n.dataset.songkey);s(),i&&Es(i)}if(n.dataset.detailAction==="stream"){let i=Pt(n.dataset.songkey),r=i?.streamRefs?.find(o=>et(o)===n.dataset.streamkey);s(),i&&r&&Ms(i,r)}if(n.dataset.detailAction==="artist"){let i=Pt(n.dataset.songkey);s(),i&&Ps(i)}}}),t.addEventListener("error",a=>{let n=a.target.closest?.(".song-detail-thumb");if(!n)return;let i=n.dataset.fallback||n.dataset.tiny||"";if(i&&n.src!==i){n.src=i,n.dataset.fallback===i?delete n.dataset.fallback:delete n.dataset.tiny;return}n.closest(".song-detail-thumb-link")?.classList.add("thumb-missing")},!0),document.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&s()})}var un=!1;function vn(){if(!d.data)return;let{stats:t,streams:e=[]}=d.data,s=e[0]?.date||null,a=Ut(s),n=t.dataGeneratedDate||d.channelData?.dataGeneratedDate||null,i=Ut(n),r=t.channelLabel||t.channelId||"",o=r?`<span class="badge accent" style="margin-right:8px;">${p(r)}</span>`:"";l("#updated-info").innerHTML=o+`\u30C7\u30FC\u30BF\u66F4\u65B0\u65E5\uFF1A<strong>${V(n)||"\u2014"}</strong>`+(i!=null?` <span class="badge">${i}\u65E5\u524D</span>`:"");let c=l("#stats-grid"),v=Number.isFinite(t.streams)&&t.streams>0?(t.streams*2.4).toFixed(1):"\u2014";c.innerHTML=`
    <div class="stat-card">
      <div class="stat-label">TOTAL SONGS</div>
      <div class="stat-value">${_t(t.total)}<span class="stat-note">\u6B4C\u5531\u56DE\u6570</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">REPERTOIRE UNIQUES</div>
      <div class="stat-value">${_t(t.repertoire)}<span class="stat-note">coverage</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">STREAM COUNT</div>
      <div class="stat-value">${_t(t.streams)}<span class="stat-note">${a!=null?`Last: ${a} days ago`:"No stream data"}</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">TOTAL HOURS</div>
      <div class="stat-value">${v}<span class="stat-note">Avg 2.4h/\u67A0</span></div>
    </div>
    <div class="stat-card">
      <div class="stat-label">1\u67A0\u5E73\u5747\u66F2\u6570</div>
      <div class="stat-value">${t.avgPerStream}<span class="stat-note">Trending UP</span></div>
    </div>
  `,un=!0}function pn(){l("#loading").hidden=!1,l("#error").hidden=!0}function mn(){l("#loading").hidden=!0}function fn(t){let e=l("#loading"),s=l("#error"),a=l("#err-detail");e&&(e.hidden=!0),s&&(s.hidden=!1),a&&(a.textContent=t&&t.message?t.message:String(t))}function hn(t){let e=document.getElementById("page-title");if(!e)return;e.innerHTML='<img class="hero-title-icon" src="assets/site-icon.png" alt="" width="32" height="32" fetchpriority="high" decoding="sync">sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9',document.title="sh1an \u6B4C\u5531\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9";let s=document.getElementById("hero-ch-bg");s&&(s.dataset.mode=t||"all")}var bn={new:{name:"sh1an | \u30B7\u30A2\u30F3",handle:"@sh1an",url:"https://www.youtube.com/@sh1an",label:"Main",desc:`\u307D\u3093\u3053\u3064\u4E0D\u61AB\u306A\u9B54\u5C0E\u58EBVsinger
\u304D\u307F\u305F\u3061\u306E\u65E5\u5E38\u3092\u3058\u308F\u3058\u308F\u6E29\u304B\u304F\u3059\u308B\u3001\u4E00\u4E16\u7D00\u63A8\u305B\u308B\u6D3B\u52D5\u8005\u3092\u76EE\u6307\u3057\u3066\u9081\u9032\u4E2D\u3002
\u7DCF\u5408\u30BF\u30B0 #sh1arch1ve / \u30D5\u30A1\u30F3\u30A2\u30FC\u30C8 #sh1anotype / \u30D5\u30A1\u30F3\u30CD\u30FC\u30E0 sh1anchu\u30FB\u3057\u3042\u3093\u3061\u3085`,links:[{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',label:"X",url:"https://x.com/sh1anos"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.17a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.4A2.51 2.51 0 0 0 2.42 7.17 26.9 26.9 0 0 0 2 12a26.9 26.9 0 0 0 .42 4.83 2.51 2.51 0 0 0 1.77 1.77c1.56.4 7.81.4 7.81.4s6.25 0 7.81-.4a2.51 2.51 0 0 0 1.77-1.77A26.9 26.9 0 0 0 22 12a26.9 26.9 0 0 0-.42-4.83ZM10 15.43V8.57L16 12l-6 3.43Z"/></svg>',label:"YouTube",url:"https://www.youtube.com/@sh1an"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',label:"Twitch",url:"https://twitch.tv/sh1anos"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>',label:"HP",url:"https://lit.link/sh1an"},{icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',label:"Instagram",url:"https://instagram.com/sh1anos"}],avatarUrl:"https://yt3.googleusercontent.com/Dr_8IrPp_iU_7lBmTH8Z9r3Z1cU1QQcb7AwwKEJoURu7nVqa7i6MQ30Wr0feOi7AfGHPMzdjgQ=s900-c-k-c0x00ffffff-no-rj",bannerUrl:"https://yt3.googleusercontent.com/JM4090e_TUtyfV4EBdfECwo3rzveeI3WgbO5VZHvw-2VySPqu2R9Q92NeYKYmhBmHmFQwHcYhw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"}};function Mt(t){let e=bn[t];if(!e)return"";let s=e.bannerUrl?`<img class="ch-card-banner-img" src="${p(e.bannerUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">
       <span class="ch-card-banner-label ch-card-banner-label--over">${p(e.label)}</span>`:`<span class="ch-card-banner-label">${p(e.label)}</span>`,a=e.avatarUrl?`<img class="ch-card-avatar-img" src="${p(e.avatarUrl)}" alt="${p(e.name)}" loading="lazy" referrerpolicy="no-referrer">`:t==="new"?"\u65B0":"\u65E7",n=e.desc?`<p class="ch-card-desc">${e.desc.split(`
`).map(r=>p(r)).join("<br>")}</p>`:"",i=e.links?.length?`
    <div class="ch-card-links">
      ${e.links.map(r=>`
        <a class="ch-card-link" href="${p(r.url)}" target="_blank" rel="noopener">
          <span class="ch-card-link-icon" aria-hidden="true">${r.icon}</span>
          <span>${p(r.label)}</span>
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
            <div class="ch-card-name">${p(e.name)}</div>
            <div class="ch-card-handle">${p(e.handle)}</div>
          </div>
        </div>
        ${n}
        ${i}
        <div class="ch-card-actions">
          <a class="ch-card-yt-btn" href="${p(e.url)}" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
            YouTube\u30C1\u30E3\u30F3\u30CD\u30EB\u3078
          </a>
        </div>
      </div>
    </div>`}function yn(t){let e=l("#ch-modal"),s=l("#ch-modal-body");if(!e||!s)return;let a="";t==="new"?a=Mt("new"):t==="old"?a=Mt("old"):a=Mt("new")+Mt("old"),s.innerHTML=a,e.hidden=!1,l("#ch-modal-close")?.focus()}function gn(){let t=l("#ch-modal"),e=l("#ch-modal-close");if(!t||!e)return;let s=()=>{t.hidden=!0};e.addEventListener("click",s),t.addEventListener("click",a=>{a.target===t&&s()}),document.querySelectorAll("[data-ch-modal]").forEach(a=>{a.addEventListener("click",()=>yn(a.dataset.chModal))})}function wn(){let t=l("#help-modal"),e=l("#help-btn"),s=l("#help-close");if(!t||!e||!s)return;let a=()=>{t.hidden=!1,s.focus()},n=()=>{t.hidden=!0,e.focus()};e.addEventListener("click",a),s.addEventListener("click",n),t.addEventListener("click",i=>{i.target===t&&n()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!t.hidden&&n()})}function kn(){let t=l("#welcome-tip"),e=l("#welcome-close");if(!t||!e||window.matchMedia("(max-width: 760px)").matches||localStorage.getItem("sh1an-welcome-tip-dismissed")==="1")return;let s=()=>{t.hidden=!1};"requestIdleCallback"in window?window.requestIdleCallback(s,{timeout:5e3}):window.setTimeout(s,2500),e.addEventListener("click",()=>{t.hidden=!0,localStorage.setItem("sh1an-welcome-tip-dismissed","1")})}async function ve(){pn();try{let t=await ke();d.channelData=t,!at&&!t.fullLoaded&&Ue();let e=z(),s=!!e.v;d.songsQuery=e.q,d.activeTab=s?"player":At(e.tab)?e.tab:"dashboard",Zt(d.activeTab);let a=e.channel||d.channel||dt;if(Q(a)||(a=dt),!Q(a)){let n=Object.keys(t.channels)[0];n&&(a=n)}if(!Q(a))throw new Error("No channel data could be loaded");Ts(),Ht(a,{resetSearch:!1,updateUrl:!1,autoLoad:!0,initial:!0,render:!s}),s&&(await Rs()||H(e.tab,{updateUrl:!1,initial:!0})),mn(),Bs()}catch(t){console.error("[init] failed:",t),fn(t)}}function $n(){if(!d.channelData)return;let t=z();d.songsQuery=t.q,t.channel!==d.channel&&Q(t.channel)&&Ht(t.channel,{resetSearch:!1,updateUrl:!1}),H(t.tab,{updateUrl:!1})}D(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{let e=t.dataset.tab,s=l("#stream-viewer");if(e!=="player"&&s&&!s.hidden&&!q&&!F(s)){St=e,$t();return}H(e)})});D(".ch-btn").forEach(t=>{t.addEventListener("click",()=>{t.dataset.channel&&(t.disabled||Ht(t.dataset.channel))})});window.addEventListener("popstate",$n);D("[data-audience]").forEach(t=>{t.addEventListener("click",()=>Ls(t.dataset.audience))});document.body.addEventListener("click",t=>{let e=t.target.closest(".timeline-setlist .setlist-title[data-songkey]");if(e){t.preventDefault(),t.stopPropagation(),Wt(e.dataset.songkey);return}let s=t.target.closest("[data-artist-search]");if(s){t.preventDefault(),t.stopPropagation(),te(s.dataset.artistSearch||s.textContent||"");return}let a=t.target.closest("[data-playlist-add]");if(a){t.preventDefault(),t.stopPropagation();let r=a.dataset.playlistAdd,o=a.dataset.streamTitle||"",c=v=>{a.classList.toggle("is-saved",v),a.classList.contains("timeline-save-btn")&&(a.innerHTML=b("bookmark")),a.title=v?"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58\u6E08\u307F":"\u30D7\u30EC\u30A4\u30EA\u30B9\u30C8\u306B\u4FDD\u5B58"};import("./chunk-TE55XZYD.js").then(v=>v.showAddToPlaylistModal(r,o,{onChange:c}));return}let n=t.target.closest("[data-stream-play]");if(n){t.preventDefault(),t.stopPropagation();let r=n.dataset.streamPlay,o=(d.data?.streams||[]).find(c=>et(c)===r);o?.url&&x(o);return}if(ye(t.target))return;let i=t.target.closest("[data-songkey]");i&&Wt(i.dataset.songkey)});l("#retry-btn").addEventListener("click",ve);l("#reload-btn").addEventListener("click",ve);wn();gn();ae();us();dn();Ss();_s();xs();kn();Pe(t=>{t.type==="song"?Wt(t.song.key):t.type==="artist"?te(t.artist):t.type==="stream"?x(t.stream):t.type==="music-video"&&x({...t.video,isMv:!0})});document.addEventListener("keydown",t=>{let e=document.activeElement?.tagName,s=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!s&&!t.metaKey&&!t.ctrlKey&&!t.altKey){let n=l("#stream-viewer");if(n&&!n.hidden&&!n.classList.contains("sv-minified")&&!n.classList.contains("sv-music-minified")&&l("#sv-share-modal")?.hidden!==!1&&h){if(t.key===" "){t.preventDefault();try{h.getPlayerState?.()===window.YT?.PlayerState?.PLAYING?h.pauseVideo():h.playVideo()}catch{}return}if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();try{let r=h.getCurrentTime?.()??0,o=Math.max(0,r+(t.key==="ArrowRight"?10:-10));h.seekTo(o,!0)}catch{}return}}}if(t.key==="/"&&!s&&!t.metaKey&&!t.ctrlKey||t.key==="k"&&(t.ctrlKey||t.metaKey)&&!t.shiftKey){t.preventDefault(),Ce();return}if(t.key==="t"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault(),Se();return}if(t.key==="?"&&!s&&!t.metaKey&&!t.ctrlKey){t.preventDefault();let n=l("#help-modal");n&&n.hidden&&(n.hidden=!1,l("#help-close")?.focus());return}if(t.key==="Escape"&&!t.metaKey&&!t.ctrlKey){let n=l("#stream-viewer"),i=!!l("#panel-player.active");if(n&&!n.hidden&&(q||i)){t.preventDefault(),$t();return}if(Ft()){t.preventDefault(),pt();return}let r=l("#song-modal");if(r&&!r.hidden)return;let o=l("#ch-modal");if(o&&!o.hidden){o.hidden=!0;return}let c=l("#help-modal");if(c&&!c.hidden){c.hidden=!0,l("#help-btn")?.focus();return}let v=l("#songs-search");v&&document.activeElement===v&&v.value&&(t.preventDefault(),v.value="",v.dispatchEvent(new Event("input",{bubbles:!0})))}});xe(()=>{d.data&&(Yt(),(d.activeTab==="dashboard"||d.activeTab==="analytics")&&tt())});function Ln(){ve()}Ln();export{Ds as getWatchHistory};
