(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function Qe(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function Ke(s,e){s===void 0&&(s={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof s[i]>"u"?s[i]=e[i]:Qe(e[i])&&Qe(s[i])&&Object.keys(e[i]).length>0&&Ke(s[i],e[i])})}const ct={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function V(){const s=typeof document<"u"?document:{};return Ke(s,ct),s}const xt={document:ct,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function N(){const s=typeof window<"u"?window:{};return Ke(s,xt),s}function ne(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function gt(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function me(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function J(){return Date.now()}function wt(s){const e=N();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function We(s,e){e===void 0&&(e="x");const t=N();let i,a,r;const f=wt(s);return t.WebKitCSSMatrix?(a=f.transform||f.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(p=>p.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(a==="none"?"":a)):(r=f.MozTransform||f.OTransform||f.MsTransform||f.msTransform||f.transform||f.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?a=r.m41:i.length===16?a=parseFloat(i[12]):a=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?a=r.m42:i.length===16?a=parseFloat(i[13]):a=parseFloat(i[5])),a||0}function ye(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function yt(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function K(){const s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!yt(i)){const a=Object.keys(Object(i)).filter(r=>e.indexOf(r)<0);for(let r=0,f=a.length;r<f;r+=1){const p=a[r],c=Object.getOwnPropertyDescriptor(i,p);c!==void 0&&c.enumerable&&(ye(s[p])&&ye(i[p])?i[p].__swiper__?s[p]=i[p]:K(s[p],i[p]):!ye(s[p])&&ye(i[p])?(s[p]={},i[p].__swiper__?s[p]=i[p]:K(s[p],i[p])):s[p]=i[p])}}}return s}function be(s,e,t){s.style.setProperty(e,t)}function pt(s){let{swiper:e,targetPosition:t,side:i}=s;const a=N(),r=-e.translate;let f=null,p;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const n=t>r?"next":"prev",d=(x,h)=>n==="next"&&x>=h||n==="prev"&&x<=h,u=()=>{p=new Date().getTime(),f===null&&(f=p);const x=Math.max(Math.min((p-f)/c,1),0),h=.5-Math.cos(x*Math.PI)/2;let l=r+h*(t-r);if(d(l,t)&&(l=t),e.wrapperEl.scrollTo({[i]:l}),d(l,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:l})}),a.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=a.requestAnimationFrame(u)};u()}function ce(s){return s.querySelector(".swiper-slide-transform")||s.shadowRoot&&s.shadowRoot.querySelector(".swiper-slide-transform")||s}function F(s,e){e===void 0&&(e="");const t=N(),i=[...s.children];return t.HTMLSlotElement&&s instanceof HTMLSlotElement&&i.push(...s.assignedElements()),e?i.filter(a=>a.matches(e)):i}function bt(s,e){const t=[e];for(;t.length>0;){const i=t.shift();if(s===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function St(s,e){const t=N();let i=e.contains(s);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(s),i||(i=bt(s,e))),i}function $e(s){try{console.warn(s);return}catch{}}function Z(s,e){e===void 0&&(e=[]);const t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:ne(e)),t}function Ce(s){const e=N(),t=V(),i=s.getBoundingClientRect(),a=t.body,r=s.clientTop||a.clientTop||0,f=s.clientLeft||a.clientLeft||0,p=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+p-r,left:i.left+c-f}}function Et(s,e){const t=[];for(;s.previousElementSibling;){const i=s.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function Tt(s,e){const t=[];for(;s.nextElementSibling;){const i=s.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function oe(s,e){return N().getComputedStyle(s,null).getPropertyValue(e)}function Ee(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function de(s,e){const t=[];let i=s.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function Se(s,e){function t(i){i.target===s&&(e.call(s,i),s.removeEventListener("transitionend",t))}e&&s.addEventListener("transitionend",t)}function _e(s,e,t){const i=N();return s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function H(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}function Pe(s){return e=>Math.abs(e)>0&&s.browser&&s.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}function ie(s,e){e===void 0&&(e=""),typeof trustedTypes<"u"?s.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):s.innerHTML=e}let Be;function Mt(){const s=N(),e=V();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function ft(){return Be||(Be=Mt()),Be}let Ye;function Lt(s){let{userAgent:e}=s===void 0?{}:s;const t=ft(),i=N(),a=i.navigator.platform,r=e||i.navigator.userAgent,f={ios:!1,android:!1},p=i.screen.width,c=i.screen.height,n=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),x=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=a==="Win32";let l=a==="MacIntel";const o=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&l&&t.touch&&o.indexOf(`${p}x${c}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),l=!1),n&&!h&&(f.os="android",f.android=!0),(d||x||u)&&(f.os="ios",f.ios=!0),f}function ut(s){return s===void 0&&(s={}),Ye||(Ye=Lt(s)),Ye}let He;function jt(){const s=N(),e=ut();let t=!1;function i(){const p=s.navigator.userAgent.toLowerCase();return p.indexOf("safari")>=0&&p.indexOf("chrome")<0&&p.indexOf("android")<0}if(i()){const p=String(s.navigator.userAgent);if(p.includes("Version/")){const[c,n]=p.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=c<16||c===16&&n<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),r=i(),f=r||a&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:f,isWebView:a}}function mt(){return He||(He=jt()),He}function kt(s){let{swiper:e,on:t,emit:i}=s;const a=N();let r=null,f=null;const p=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(u=>{f=a.requestAnimationFrame(()=>{const{width:x,height:h}=e;let l=x,o=h;u.forEach(g=>{let{contentBoxSize:w,contentRect:v,target:m}=g;m&&m!==e.el||(l=v?v.width:(w[0]||w).inlineSize,o=v?v.height:(w[0]||w).blockSize)}),(l!==x||o!==h)&&p()})}),r.observe(e.el))},n=()=>{f&&a.cancelAnimationFrame(f),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},d=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof a.ResizeObserver<"u"){c();return}a.addEventListener("resize",p),a.addEventListener("orientationchange",d)}),t("destroy",()=>{n(),a.removeEventListener("resize",p),a.removeEventListener("orientationchange",d)})}function $t(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;const r=[],f=N(),p=function(d,u){u===void 0&&(u={});const x=f.MutationObserver||f.WebkitMutationObserver,h=new x(l=>{if(e.__preventObserver__)return;if(l.length===1){a("observerUpdate",l[0]);return}const o=function(){a("observerUpdate",l[0])};f.requestAnimationFrame?f.requestAnimationFrame(o):f.setTimeout(o,0)});h.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(h)},c=()=>{if(e.params.observer){if(e.params.observeParents){const d=de(e.hostEl);for(let u=0;u<d.length;u+=1)p(d[u])}p(e.hostEl,{childList:e.params.observeSlideChildren}),p(e.wrapperEl,{attributes:!1})}},n=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",c),i("destroy",n)}var Ct={on(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const a=t?"unshift":"push";return s.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][a](e)}),i},once(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function a(){i.off(s,a),a.__emitterProxy&&delete a.__emitterProxy;for(var r=arguments.length,f=new Array(r),p=0;p<r;p++)f[p]=arguments[p];e.apply(i,f)}return a.__emitterProxy=e,i.on(s,a,t)},onAny(s,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((a,r)=>{(a===e||a.__emitterProxy&&a.__emitterProxy===e)&&t.eventsListeners[i].splice(r,1)})}),t},emit(){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,t,i;for(var a=arguments.length,r=new Array(a),f=0;f<a;f++)r[f]=arguments[f];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),i=s):(e=r[0].events,t=r[0].data,i=r[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(n=>{n.apply(i,[c,...t])}),s.eventsListeners&&s.eventsListeners[c]&&s.eventsListeners[c].forEach(n=>{n.apply(i,t)})}),s}};function Pt(){const s=this;let e,t;const i=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=i.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=i.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(oe(i,"padding-left")||0,10)-parseInt(oe(i,"padding-right")||0,10),t=t-parseInt(oe(i,"padding-top")||0,10)-parseInt(oe(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function It(){const s=this;function e(M,$){return parseFloat(M.getPropertyValue(s.getDirectionLabel($))||0)}const t=s.params,{wrapperEl:i,slidesEl:a,size:r,rtlTranslate:f,wrongRTL:p}=s,c=s.virtual&&t.virtual.enabled,n=c?s.virtual.slides.length:s.slides.length,d=F(a,`.${s.params.slideClass}, swiper-slide`),u=c?s.virtual.slides.length:d.length;let x=[];const h=[],l=[];let o=t.slidesOffsetBefore;typeof o=="function"&&(o=t.slidesOffsetBefore.call(s));let g=t.slidesOffsetAfter;typeof g=="function"&&(g=t.slidesOffsetAfter.call(s));const w=s.snapGrid.length,v=s.slidesGrid.length;let m=t.spaceBetween,y=-o,b=0,I=0;if(typeof r>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*r:typeof m=="string"&&(m=parseFloat(m)),s.virtualSize=-m,d.forEach(M=>{f?M.style.marginLeft="":M.style.marginRight="",M.style.marginBottom="",M.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(be(i,"--swiper-centered-offset-before",""),be(i,"--swiper-centered-offset-after",""));const T=t.grid&&t.grid.rows>1&&s.grid;T?s.grid.initSlides(d):s.grid&&s.grid.unsetSlides();let P;const L=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(M=>typeof t.breakpoints[M].slidesPerView<"u").length>0;for(let M=0;M<u;M+=1){P=0;let $;if(d[M]&&($=d[M]),T&&s.grid.updateSlide(M,$,d),!(d[M]&&oe($,"display")==="none")){if(t.slidesPerView==="auto"){L&&(d[M].style[s.getDirectionLabel("width")]="");const k=getComputedStyle($),j=$.style.transform,C=$.style.webkitTransform;if(j&&($.style.transform="none"),C&&($.style.webkitTransform="none"),t.roundLengths)P=s.isHorizontal()?_e($,"width"):_e($,"height");else{const z=e(k,"width"),O=e(k,"padding-left"),S=e(k,"padding-right"),E=e(k,"margin-left"),B=e(k,"margin-right"),Y=k.getPropertyValue("box-sizing");if(Y&&Y==="border-box")P=z+E+B;else{const{clientWidth:X,offsetWidth:R}=$;P=z+O+S+E+B+(R-X)}}j&&($.style.transform=j),C&&($.style.webkitTransform=C),t.roundLengths&&(P=Math.floor(P))}else P=(r-(t.slidesPerView-1)*m)/t.slidesPerView,t.roundLengths&&(P=Math.floor(P)),d[M]&&(d[M].style[s.getDirectionLabel("width")]=`${P}px`);d[M]&&(d[M].swiperSlideSize=P),l.push(P),t.centeredSlides?(y=y+P/2+b/2+m,b===0&&M!==0&&(y=y-r/2-m),M===0&&(y=y-r/2-m),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),I%t.slidesPerGroup===0&&x.push(y),h.push(y)):(t.roundLengths&&(y=Math.floor(y)),(I-Math.min(s.params.slidesPerGroupSkip,I))%s.params.slidesPerGroup===0&&x.push(y),h.push(y),y=y+P+m),s.virtualSize+=P+m,b=P,I+=1}}if(s.virtualSize=Math.max(s.virtualSize,r)+g,f&&p&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${s.virtualSize+m}px`),t.setWrapperSize&&(i.style[s.getDirectionLabel("width")]=`${s.virtualSize+m}px`),T&&s.grid.updateWrapperSize(P,x),!t.centeredSlides){const M=[];for(let $=0;$<x.length;$+=1){let k=x[$];t.roundLengths&&(k=Math.floor(k)),x[$]<=s.virtualSize-r&&M.push(k)}x=M,Math.floor(s.virtualSize-r)-Math.floor(x[x.length-1])>1&&x.push(s.virtualSize-r)}if(c&&t.loop){const M=l[0]+m;if(t.slidesPerGroup>1){const $=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),k=M*t.slidesPerGroup;for(let j=0;j<$;j+=1)x.push(x[x.length-1]+k)}for(let $=0;$<s.virtual.slidesBefore+s.virtual.slidesAfter;$+=1)t.slidesPerGroup===1&&x.push(x[x.length-1]+M),h.push(h[h.length-1]+M),s.virtualSize+=M}if(x.length===0&&(x=[0]),m!==0){const M=s.isHorizontal()&&f?"marginLeft":s.getDirectionLabel("marginRight");d.filter(($,k)=>!t.cssMode||t.loop?!0:k!==d.length-1).forEach($=>{$.style[M]=`${m}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let M=0;l.forEach(k=>{M+=k+(m||0)}),M-=m;const $=M>r?M-r:0;x=x.map(k=>k<=0?-o:k>$?$+g:k)}if(t.centerInsufficientSlides){let M=0;l.forEach(k=>{M+=k+(m||0)}),M-=m;const $=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(M+$<r){const k=(r-M-$)/2;x.forEach((j,C)=>{x[C]=j-k}),h.forEach((j,C)=>{h[C]=j+k})}}if(Object.assign(s,{slides:d,snapGrid:x,slidesGrid:h,slidesSizesGrid:l}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){be(i,"--swiper-centered-offset-before",`${-x[0]}px`),be(i,"--swiper-centered-offset-after",`${s.size/2-l[l.length-1]/2}px`);const M=-s.snapGrid[0],$=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(k=>k+M),s.slidesGrid=s.slidesGrid.map(k=>k+$)}if(u!==n&&s.emit("slidesLengthChange"),x.length!==w&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),h.length!==v&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const M=`${t.containerModifierClass}backface-hidden`,$=s.el.classList.contains(M);u<=t.maxBackfaceHiddenSlides?$||s.el.classList.add(M):$&&s.el.classList.remove(M)}}function At(s){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let a=0,r;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const f=p=>i?e.slides[e.getSlideIndexByData(p)]:e.slides[p];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(p=>{t.push(p)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const p=e.activeIndex+r;if(p>e.slides.length&&!i)break;t.push(f(p))}else t.push(f(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const p=t[r].offsetHeight;a=p>a?p:a}(a||a===0)&&(e.wrapperEl.style.height=`${a}px`)}function zt(){const s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(s.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-s.cssOverflowAdjustment()}const et=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function qt(s){s===void 0&&(s=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:a,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let f=-s;a&&(f=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let p=t.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*e.size:typeof p=="string"&&(p=parseFloat(p));for(let c=0;c<i.length;c+=1){const n=i[c];let d=n.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=i[0].swiperSlideOffset);const u=(f+(t.centeredSlides?e.minTranslate():0)-d)/(n.swiperSlideSize+p),x=(f-r[0]+(t.centeredSlides?e.minTranslate():0)-d)/(n.swiperSlideSize+p),h=-(f-d),l=h+e.slidesSizesGrid[c],o=h>=0&&h<=e.size-e.slidesSizesGrid[c],g=h>=0&&h<e.size-1||l>1&&l<=e.size||h<=0&&l>=e.size;g&&(e.visibleSlides.push(n),e.visibleSlidesIndexes.push(c)),et(n,g,t.slideVisibleClass),et(n,o,t.slideFullyVisibleClass),n.progress=a?-u:u,n.originalProgress=a?-x:x}}function Ot(s){const e=this;if(typeof s>"u"){const d=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*d||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:a,isBeginning:r,isEnd:f,progressLoop:p}=e;const c=r,n=f;if(i===0)a=0,r=!0,f=!0;else{a=(s-e.minTranslate())/i;const d=Math.abs(s-e.minTranslate())<1,u=Math.abs(s-e.maxTranslate())<1;r=d||a<=0,f=u||a>=1,d&&(a=0),u&&(a=1)}if(t.loop){const d=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),x=e.slidesGrid[d],h=e.slidesGrid[u],l=e.slidesGrid[e.slidesGrid.length-1],o=Math.abs(s);o>=x?p=(o-x)/l:p=(o+l-h)/l,p>1&&(p-=1)}Object.assign(e,{progress:a,progressLoop:p,isBeginning:r,isEnd:f}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),r&&!c&&e.emit("reachBeginning toEdge"),f&&!n&&e.emit("reachEnd toEdge"),(c&&!r||n&&!f)&&e.emit("fromEdge"),e.emit("progress",a)}const Ge=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function Dt(){const s=this,{slides:e,params:t,slidesEl:i,activeIndex:a}=s,r=s.virtual&&t.virtual.enabled,f=s.grid&&t.grid&&t.grid.rows>1,p=u=>F(i,`.${t.slideClass}${u}, swiper-slide${u}`)[0];let c,n,d;if(r)if(t.loop){let u=a-s.virtual.slidesBefore;u<0&&(u=s.virtual.slides.length+u),u>=s.virtual.slides.length&&(u-=s.virtual.slides.length),c=p(`[data-swiper-slide-index="${u}"]`)}else c=p(`[data-swiper-slide-index="${a}"]`);else f?(c=e.find(u=>u.column===a),d=e.find(u=>u.column===a+1),n=e.find(u=>u.column===a-1)):c=e[a];c&&(f||(d=Tt(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),n=Et(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!n===0&&(n=e[e.length-1]))),e.forEach(u=>{Ge(u,u===c,t.slideActiveClass),Ge(u,u===d,t.slideNextClass),Ge(u,u===n,t.slidePrevClass)}),s.emitSlidesClasses()}const ke=(s,e)=>{if(!s||s.destroyed||!s.params)return;const t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,i=e.closest(t());if(i){let a=i.querySelector(`.${s.params.lazyPreloaderClass}`);!a&&s.isElement&&(i.shadowRoot?a=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(a=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},Ne=(s,e)=>{if(!s.slides[e])return;const t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Ue=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext;const t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),a=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){const f=a,p=[f-e];p.push(...Array.from({length:e}).map((c,n)=>f+i+n)),s.slides.forEach((c,n)=>{p.includes(c.column)&&Ne(s,n)});return}const r=a+i-1;if(s.params.rewind||s.params.loop)for(let f=a-e;f<=r+e;f+=1){const p=(f%t+t)%t;(p<a||p>r)&&Ne(s,p)}else for(let f=Math.max(a-e,0);f<=Math.min(r+e,t-1);f+=1)f!==a&&(f>r||f<a)&&Ne(s,f)};function Bt(s){const{slidesGrid:e,params:t}=s,i=s.rtlTranslate?s.translate:-s.translate;let a;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?a=r:i>=e[r]&&i<e[r+1]&&(a=r+1):i>=e[r]&&(a=r);return t.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function Yt(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:a,activeIndex:r,realIndex:f,snapIndex:p}=e;let c=s,n;const d=h=>{let l=h-e.virtual.slidesBefore;return l<0&&(l=e.virtual.slides.length+l),l>=e.virtual.slides.length&&(l-=e.virtual.slides.length),l};if(typeof c>"u"&&(c=Bt(e)),i.indexOf(t)>=0)n=i.indexOf(t);else{const h=Math.min(a.slidesPerGroupSkip,c);n=h+Math.floor((c-h)/a.slidesPerGroup)}if(n>=i.length&&(n=i.length-1),c===r&&!e.params.loop){n!==p&&(e.snapIndex=n,e.emit("snapIndexChange"));return}if(c===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(c);return}const u=e.grid&&a.grid&&a.grid.rows>1;let x;if(e.virtual&&a.virtual.enabled&&a.loop)x=d(c);else if(u){const h=e.slides.find(o=>o.column===c);let l=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(l)&&(l=Math.max(e.slides.indexOf(h),0)),x=Math.floor(l/a.grid.rows)}else if(e.slides[c]){const h=e.slides[c].getAttribute("data-swiper-slide-index");h?x=parseInt(h,10):x=c}else x=c;Object.assign(e,{previousSnapIndex:p,snapIndex:n,previousRealIndex:f,realIndex:x,previousIndex:r,activeIndex:c}),e.initialized&&Ue(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(f!==x&&e.emit("realIndexChange"),e.emit("slideChange"))}function Ht(s,e){const t=this,i=t.params;let a=s.closest(`.${i.slideClass}, swiper-slide`);!a&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(p=>{!a&&p.matches&&p.matches(`.${i.slideClass}, swiper-slide`)&&(a=p)});let r=!1,f;if(a){for(let p=0;p<t.slides.length;p+=1)if(t.slides[p]===a){r=!0,f=p;break}}if(a&&r)t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=f;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Gt={updateSize:Pt,updateSlides:It,updateAutoHeight:At,updateSlidesOffset:zt,updateSlidesProgress:qt,updateProgress:Ot,updateSlidesClasses:Dt,updateActiveIndex:Yt,updateClickedSlide:Ht};function Nt(s){s===void 0&&(s=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:a,wrapperEl:r}=e;if(t.virtualTranslate)return i?-a:a;if(t.cssMode)return a;let f=We(r,s);return f+=e.cssOverflowAdjustment(),i&&(f=-f),f||0}function Xt(s,e){const t=this,{rtlTranslate:i,params:a,wrapperEl:r,progress:f}=t;let p=0,c=0;const n=0;t.isHorizontal()?p=i?-s:s:c=s,a.roundLengths&&(p=Math.floor(p),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?p:c,a.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-p:-c:a.virtualTranslate||(t.isHorizontal()?p-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${p}px, ${c}px, ${n}px)`);let d;const u=t.maxTranslate()-t.minTranslate();u===0?d=0:d=(s-t.minTranslate())/u,d!==f&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function Rt(){return-this.snapGrid[0]}function Vt(){return-this.snapGrid[this.snapGrid.length-1]}function Ft(s,e,t,i,a){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const r=this,{params:f,wrapperEl:p}=r;if(r.animating&&f.preventInteractionOnTransition)return!1;const c=r.minTranslate(),n=r.maxTranslate();let d;if(i&&s>c?d=c:i&&s<n?d=n:d=s,r.updateProgress(d),f.cssMode){const u=r.isHorizontal();if(e===0)p[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return pt({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;p.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,a),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(x){!r||r.destroyed||x.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Wt={getTranslate:Nt,setTranslate:Xt,minTranslate:Rt,maxTranslate:Vt,translateTo:Ft};function _t(s,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function ht(s){let{swiper:e,runCallbacks:t,direction:i,step:a}=s;const{activeIndex:r,previousIndex:f}=e;let p=i;p||(r>f?p="next":r<f?p="prev":p="reset"),e.emit(`transition${a}`),t&&p==="reset"?e.emit(`slideResetTransition${a}`):t&&r!==f&&(e.emit(`slideChangeTransition${a}`),p==="next"?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`))}function Ut(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),ht({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function Kt(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),ht({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var Zt={setTransition:_t,transitionStart:Ut,transitionEnd:Kt};function Jt(s,e,t,i,a){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const r=this;let f=s;f<0&&(f=0);const{params:p,snapGrid:c,slidesGrid:n,previousIndex:d,activeIndex:u,rtlTranslate:x,wrapperEl:h,enabled:l}=r;if(!l&&!i&&!a||r.destroyed||r.animating&&p.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const o=Math.min(r.params.slidesPerGroupSkip,f);let g=o+Math.floor((f-o)/r.params.slidesPerGroup);g>=c.length&&(g=c.length-1);const w=-c[g];if(p.normalizeSlideIndex)for(let T=0;T<n.length;T+=1){const P=-Math.floor(w*100),L=Math.floor(n[T]*100),M=Math.floor(n[T+1]*100);typeof n[T+1]<"u"?P>=L&&P<M-(M-L)/2?f=T:P>=L&&P<M&&(f=T+1):P>=L&&(f=T)}if(r.initialized&&f!==u&&(!r.allowSlideNext&&(x?w>r.translate&&w>r.minTranslate():w<r.translate&&w<r.minTranslate())||!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(u||0)!==f))return!1;f!==(d||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(w);let v;f>u?v="next":f<u?v="prev":v="reset";const m=r.virtual&&r.params.virtual.enabled;if(!(m&&a)&&(x&&-w===r.translate||!x&&w===r.translate))return r.updateActiveIndex(f),p.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),p.effect!=="slide"&&r.setTranslate(w),v!=="reset"&&(r.transitionStart(t,v),r.transitionEnd(t,v)),!1;if(p.cssMode){const T=r.isHorizontal(),P=x?w:-w;if(e===0)m&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),m&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[T?"scrollLeft":"scrollTop"]=P})):h[T?"scrollLeft":"scrollTop"]=P,m&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return pt({swiper:r,targetPosition:P,side:T?"left":"top"}),!0;h.scrollTo({[T?"left":"top"]:P,behavior:"smooth"})}return!0}const I=mt().isSafari;return m&&!a&&I&&r.isElement&&r.virtual.update(!1,!1,f),r.setTransition(e),r.setTranslate(w),r.updateActiveIndex(f),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(t,v),e===0?r.transitionEnd(t,v):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(P){!r||r.destroyed||P.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,v))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Qt(s,e,t,i){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);const r=a.grid&&a.params.grid&&a.params.grid.rows>1;let f=s;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)f=f+a.virtual.slidesBefore;else{let p;if(r){const x=f*a.params.grid.rows;p=a.slides.find(h=>h.getAttribute("data-swiper-slide-index")*1===x).column}else p=a.getSlideIndexByData(f);const c=r?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:n}=a.params;let d=a.params.slidesPerView;d==="auto"?d=a.slidesPerViewDynamic():(d=Math.ceil(parseFloat(a.params.slidesPerView,10)),n&&d%2===0&&(d=d+1));let u=c-p<d;if(n&&(u=u||p<Math.ceil(d/2)),i&&n&&a.params.slidesPerView!=="auto"&&!r&&(u=!1),u){const x=n?p<a.activeIndex?"prev":"next":p-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?p+1:p-c+1,slideRealIndex:x==="next"?a.realIndex:void 0})}if(r){const x=f*a.params.grid.rows;f=a.slides.find(h=>h.getAttribute("data-swiper-slide-index")*1===x).column}else f=a.getSlideIndexByData(f)}return requestAnimationFrame(()=>{a.slideTo(f,e,t,i)}),a}function es(s,e,t){e===void 0&&(e=!0);const i=this,{enabled:a,params:r,animating:f}=i;if(!a||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let p=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(p=Math.max(i.slidesPerViewDynamic("current",!0),1));const c=i.activeIndex<r.slidesPerGroupSkip?1:p,n=i.virtual&&r.virtual.enabled;if(r.loop){if(f&&!n&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+c,s,e,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+c,s,e,t)}function ts(s,e,t){e===void 0&&(e=!0);const i=this,{params:a,snapGrid:r,slidesGrid:f,rtlTranslate:p,enabled:c,animating:n}=i;if(!c||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);const d=i.virtual&&a.virtual.enabled;if(a.loop){if(n&&!d&&a.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const u=p?i.translate:-i.translate;function x(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const h=x(u),l=r.map(v=>x(v)),o=a.freeMode&&a.freeMode.enabled;let g=r[l.indexOf(h)-1];if(typeof g>"u"&&(a.cssMode||o)){let v;r.forEach((m,y)=>{h>=m&&(v=y)}),typeof v<"u"&&(g=o?r[v]:r[v>0?v-1:v])}let w=0;if(typeof g<"u"&&(w=f.indexOf(g),w<0&&(w=i.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(w=w-i.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),a.rewind&&i.isBeginning){const v=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(v,s,e,t)}else if(a.loop&&i.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{i.slideTo(w,s,e,t)}),!0;return i.slideTo(w,s,e,t)}function ss(s,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof s>"u"&&(s=i.params.speed),i.slideTo(i.activeIndex,s,e,t)}function is(s,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const a=this;if(a.destroyed)return;typeof s>"u"&&(s=a.params.speed);let r=a.activeIndex;const f=Math.min(a.params.slidesPerGroupSkip,r),p=f+Math.floor((r-f)/a.params.slidesPerGroup),c=a.rtlTranslate?a.translate:-a.translate;if(c>=a.snapGrid[p]){const n=a.snapGrid[p],d=a.snapGrid[p+1];c-n>(d-n)*i&&(r+=a.params.slidesPerGroup)}else{const n=a.snapGrid[p-1],d=a.snapGrid[p];c-n<=(d-n)*i&&(r-=a.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,a.slidesGrid.length-1),a.slideTo(r,s,e,t)}function as(){const s=this;if(s.destroyed)return;const{params:e,slidesEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let a=s.getSlideIndexWhenGrid(s.clickedIndex),r;const f=s.isElement?"swiper-slide":`.${e.slideClass}`,p=s.grid&&s.params.grid&&s.params.grid.rows>1;if(e.loop){if(s.animating)return;r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s.slideToLoop(r):a>(p?(s.slides.length-i)/2-(s.params.grid.rows-1):s.slides.length-i)?(s.loopFix(),a=s.getSlideIndex(F(t,`${f}[data-swiper-slide-index="${r}"]`)[0]),me(()=>{s.slideTo(a)})):s.slideTo(a)}else s.slideTo(a)}var rs={slideTo:Jt,slideToLoop:Qt,slideNext:es,slidePrev:ts,slideReset:ss,slideToClosest:is,slideToClickedSlide:as};function ls(s,e){const t=this,{params:i,slidesEl:a}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const r=()=>{F(a,`.${i.slideClass}, swiper-slide`).forEach((h,l)=>{h.setAttribute("data-swiper-slide-index",l)})},f=()=>{const x=F(a,`.${i.slideBlankClass}`);x.forEach(h=>{h.remove()}),x.length>0&&(t.recalcSlides(),t.updateSlides())},p=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||p)&&f();const c=i.slidesPerGroup*(p?i.grid.rows:1),n=t.slides.length%c!==0,d=p&&t.slides.length%i.grid.rows!==0,u=x=>{for(let h=0;h<x;h+=1){const l=t.isElement?Z("swiper-slide",[i.slideBlankClass]):Z("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(l)}};if(n){if(i.loopAddBlankSlides){const x=c-t.slides.length%c;u(x),t.recalcSlides(),t.updateSlides()}else $e("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(i.loopAddBlankSlides){const x=i.grid.rows-t.slides.length%i.grid.rows;u(x),t.recalcSlides(),t.updateSlides()}else $e("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();t.loopFix({slideRealIndex:s,direction:i.centeredSlides?void 0:"next",initial:e})}function ns(s){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:a,activeSlideIndex:r,initial:f,byController:p,byMousewheel:c}=s===void 0?{}:s;const n=this;if(!n.params.loop)return;n.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:x,slidesEl:h,params:l}=n,{centeredSlides:o,initialSlide:g}=l;if(n.allowSlidePrev=!0,n.allowSlideNext=!0,n.virtual&&l.virtual.enabled){t&&(!l.centeredSlides&&n.snapIndex===0?n.slideTo(n.virtual.slides.length,0,!1,!0):l.centeredSlides&&n.snapIndex<l.slidesPerView?n.slideTo(n.virtual.slides.length+n.snapIndex,0,!1,!0):n.snapIndex===n.snapGrid.length-1&&n.slideTo(n.virtual.slidesBefore,0,!1,!0)),n.allowSlidePrev=u,n.allowSlideNext=x,n.emit("loopFix");return}let w=l.slidesPerView;w==="auto"?w=n.slidesPerViewDynamic():(w=Math.ceil(parseFloat(l.slidesPerView,10)),o&&w%2===0&&(w=w+1));const v=l.slidesPerGroupAuto?w:l.slidesPerGroup;let m=o?Math.max(v,Math.ceil(w/2)):v;m%v!==0&&(m+=v-m%v),m+=l.loopAdditionalSlides,n.loopedSlides=m;const y=n.grid&&l.grid&&l.grid.rows>1;d.length<w+m||n.params.effect==="cards"&&d.length<w+m*2?$e("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&l.grid.fill==="row"&&$e("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const b=[],I=[],T=y?Math.ceil(d.length/l.grid.rows):d.length,P=f&&T-g<w&&!o;let L=P?g:n.activeIndex;typeof r>"u"?r=n.getSlideIndex(d.find(O=>O.classList.contains(l.slideActiveClass))):L=r;const M=i==="next"||!i,$=i==="prev"||!i;let k=0,j=0;const z=(y?d[r].column:r)+(o&&typeof a>"u"?-w/2+.5:0);if(z<m){k=Math.max(m-z,v);for(let O=0;O<m-z;O+=1){const S=O-Math.floor(O/T)*T;if(y){const E=T-S-1;for(let B=d.length-1;B>=0;B-=1)d[B].column===E&&b.push(B)}else b.push(T-S-1)}}else if(z+w>T-m){j=Math.max(z-(T-m*2),v),P&&(j=Math.max(j,w-T+g+1));for(let O=0;O<j;O+=1){const S=O-Math.floor(O/T)*T;y?d.forEach((E,B)=>{E.column===S&&I.push(B)}):I.push(S)}}if(n.__preventObserver__=!0,requestAnimationFrame(()=>{n.__preventObserver__=!1}),n.params.effect==="cards"&&d.length<w+m*2&&(I.includes(r)&&I.splice(I.indexOf(r),1),b.includes(r)&&b.splice(b.indexOf(r),1)),$&&b.forEach(O=>{d[O].swiperLoopMoveDOM=!0,h.prepend(d[O]),d[O].swiperLoopMoveDOM=!1}),M&&I.forEach(O=>{d[O].swiperLoopMoveDOM=!0,h.append(d[O]),d[O].swiperLoopMoveDOM=!1}),n.recalcSlides(),l.slidesPerView==="auto"?n.updateSlides():y&&(b.length>0&&$||I.length>0&&M)&&n.slides.forEach((O,S)=>{n.grid.updateSlide(S,O,n.slides)}),l.watchSlidesProgress&&n.updateSlidesOffset(),t){if(b.length>0&&$){if(typeof e>"u"){const O=n.slidesGrid[L],E=n.slidesGrid[L+k]-O;c?n.setTranslate(n.translate-E):(n.slideTo(L+Math.ceil(k),0,!1,!0),a&&(n.touchEventsData.startTranslate=n.touchEventsData.startTranslate-E,n.touchEventsData.currentTranslate=n.touchEventsData.currentTranslate-E))}else if(a){const O=y?b.length/l.grid.rows:b.length;n.slideTo(n.activeIndex+O,0,!1,!0),n.touchEventsData.currentTranslate=n.translate}}else if(I.length>0&&M)if(typeof e>"u"){const O=n.slidesGrid[L],E=n.slidesGrid[L-j]-O;c?n.setTranslate(n.translate-E):(n.slideTo(L-j,0,!1,!0),a&&(n.touchEventsData.startTranslate=n.touchEventsData.startTranslate-E,n.touchEventsData.currentTranslate=n.touchEventsData.currentTranslate-E))}else{const O=y?I.length/l.grid.rows:I.length;n.slideTo(n.activeIndex-O,0,!1,!0)}}if(n.allowSlidePrev=u,n.allowSlideNext=x,n.controller&&n.controller.control&&!p){const O={slideRealIndex:e,direction:i,setTranslate:a,activeSlideIndex:r,byController:!0};Array.isArray(n.controller.control)?n.controller.control.forEach(S=>{!S.destroyed&&S.params.loop&&S.loopFix({...O,slideTo:S.params.slidesPerView===l.slidesPerView?t:!1})}):n.controller.control instanceof n.constructor&&n.controller.control.params.loop&&n.controller.control.loopFix({...O,slideTo:n.controller.control.params.slidesPerView===l.slidesPerView?t:!1})}n.emit("loopFix")}function os(){const s=this,{params:e,slidesEl:t}=s;if(!e.loop||!t||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();const i=[];s.slides.forEach(a=>{const r=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;i[r]=a}),s.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),i.forEach(a=>{t.append(a)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var ds={loopCreate:ls,loopFix:ns,loopDestroy:os};function cs(s){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function ps(){const s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var fs={setGrabCursor:cs,unsetGrabCursor:ps};function us(s,e){e===void 0&&(e=this);function t(i){if(!i||i===V()||i===N())return null;i.assignedSlot&&(i=i.assignedSlot);const a=i.closest(s);return!a&&!i.getRootNode?null:a||t(i.getRootNode().host)}return t(e)}function tt(s,e,t){const i=N(),{params:a}=s,r=a.edgeSwipeDetection,f=a.edgeSwipeThreshold;return r&&(t<=f||t>=i.innerWidth-f)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function ms(s){const e=this,t=V();let i=s;i.originalEvent&&(i=i.originalEvent);const a=e.touchEventsData;if(i.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==i.pointerId)return;a.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(a.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){tt(e,i,i.targetTouches[0].pageX);return}const{params:r,touches:f,enabled:p}=e;if(!p||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let c=i.target;if(r.touchEventsTarget==="wrapper"&&!St(c,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||a.isTouched&&a.isMoved)return;const n=!!r.noSwipingClass&&r.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;n&&i.target&&i.target.shadowRoot&&d&&(c=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,x=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(x?us(u,c):c.closest(u))){e.allowClick=!0;return}if(r.swipeHandler&&!c.closest(r.swipeHandler))return;f.currentX=i.pageX,f.currentY=i.pageY;const h=f.currentX,l=f.currentY;if(!tt(e,i,h))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),f.startX=h,f.startY=l,a.touchStartTime=J(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1);let o=!0;c.matches(a.focusableElements)&&(o=!1,c.nodeName==="SELECT"&&(a.isTouched=!1)),t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==c&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!c.matches(a.focusableElements))&&t.activeElement.blur();const g=o&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||g)&&!c.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function hs(s){const e=V(),t=this,i=t.touchEventsData,{params:a,touches:r,rtlTranslate:f,enabled:p}=t;if(!p||!a.simulateTouch&&s.pointerType==="mouse")return;let c=s;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(i.touchId!==null||c.pointerId!==i.pointerId))return;let n;if(c.type==="touchmove"){if(n=[...c.changedTouches].find(b=>b.identifier===i.touchId),!n||n.identifier!==i.touchId)return}else n=c;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",c);return}const d=n.pageX,u=n.pageY;if(c.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!t.allowTouchMove){c.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),i.touchStartTime=J());return}if(a.touchReleaseOnEdges&&!a.loop)if(t.isVertical()){if(u<r.startY&&t.translate<=t.maxTranslate()||u>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(f&&(d>r.startX&&-t.translate<=t.maxTranslate()||d<r.startX&&-t.translate>=t.minTranslate()))return;if(!f&&(d<r.startX&&t.translate<=t.maxTranslate()||d>r.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==c.target&&c.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&c.target===e.activeElement&&c.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",c),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const x=r.currentX-r.startX,h=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(x**2+h**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let b;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:x*x+h*h>=25&&(b=Math.atan2(Math.abs(h),Math.abs(x))*180/Math.PI,i.isScrolling=t.isHorizontal()?b>a.touchAngle:90-b>a.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",c),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||c.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!a.cssMode&&c.cancelable&&c.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&c.stopPropagation();let l=t.isHorizontal()?x:h,o=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;a.oneWayMovement&&(l=Math.abs(l)*(f?1:-1),o=Math.abs(o)*(f?1:-1)),r.diff=l,l*=a.touchRatio,f&&(l=-l,o=-o);const g=t.touchesDirection;t.swipeDirection=l>0?"prev":"next",t.touchesDirection=o>0?"prev":"next";const w=t.params.loop&&!a.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(w&&v&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const b=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(b)}i.allowMomentumBounce=!1,a.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}if(new Date().getTime(),a._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&g!==t.touchesDirection&&w&&v&&Math.abs(l)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",c),i.isMoved=!0,i.currentTranslate=l+i.startTranslate;let m=!0,y=a.resistanceRatio;if(a.touchReleaseOnEdges&&(y=0),l>0?(w&&v&&i.allowThresholdMove&&i.currentTranslate>(a.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+l)**y))):l<0&&(w&&v&&i.allowThresholdMove&&i.currentTranslate<(a.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(a.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-l)**y))),m&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),a.threshold>0)if(Math.abs(l)>a.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&t.freeMode||a.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function vs(s){const e=this,t=e.touchEventsData;let i=s;i.originalEvent&&(i=i.originalEvent);let a;if(i.type==="touchend"||i.type==="touchcancel"){if(a=[...i.changedTouches].find(b=>b.identifier===t.touchId),!a||a.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;a=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:f,touches:p,rtlTranslate:c,slidesGrid:n,enabled:d}=e;if(!d||!f.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&f.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}f.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=J(),x=u-t.touchStartTime;if(e.allowClick){const b=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(b&&b[0]||i.target,b),e.emit("tap click",i),x<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=J(),me(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||p.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(f.followFinger?h=c?e.translate:-e.translate:h=-t.currentTranslate,f.cssMode)return;if(f.freeMode&&f.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const l=h>=-e.maxTranslate()&&!e.params.loop;let o=0,g=e.slidesSizesGrid[0];for(let b=0;b<n.length;b+=b<f.slidesPerGroupSkip?1:f.slidesPerGroup){const I=b<f.slidesPerGroupSkip-1?1:f.slidesPerGroup;typeof n[b+I]<"u"?(l||h>=n[b]&&h<n[b+I])&&(o=b,g=n[b+I]-n[b]):(l||h>=n[b])&&(o=b,g=n[n.length-1]-n[n.length-2])}let w=null,v=null;f.rewind&&(e.isBeginning?v=f.virtual&&f.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(w=0));const m=(h-n[o])/g,y=o<f.slidesPerGroupSkip-1?1:f.slidesPerGroup;if(x>f.longSwipesMs){if(!f.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=f.longSwipesRatio?e.slideTo(f.rewind&&e.isEnd?w:o+y):e.slideTo(o)),e.swipeDirection==="prev"&&(m>1-f.longSwipesRatio?e.slideTo(o+y):v!==null&&m<0&&Math.abs(m)>f.longSwipesRatio?e.slideTo(v):e.slideTo(o))}else{if(!f.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(o+y):e.slideTo(o):(e.swipeDirection==="next"&&e.slideTo(w!==null?w:o+y),e.swipeDirection==="prev"&&e.slideTo(v!==null?v:o))}}function st(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:a,snapGrid:r}=s,f=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();const p=f&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!p?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!f?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=a,s.allowSlideNext=i,s.params.watchOverflow&&r!==s.snapGrid&&s.checkOverflow()}function xs(s){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function gs(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let a;const r=s.maxTranslate()-s.minTranslate();r===0?a=0:a=(s.translate-s.minTranslate())/r,a!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function ws(s){const e=this;ke(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function ys(){const s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}const vt=(s,e)=>{const t=V(),{params:i,el:a,wrapperEl:r,device:f}=s,p=!!i.nested,c=e==="on"?"addEventListener":"removeEventListener",n=e;!a||typeof a=="string"||(t[c]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:p}),a[c]("touchstart",s.onTouchStart,{passive:!1}),a[c]("pointerdown",s.onTouchStart,{passive:!1}),t[c]("touchmove",s.onTouchMove,{passive:!1,capture:p}),t[c]("pointermove",s.onTouchMove,{passive:!1,capture:p}),t[c]("touchend",s.onTouchEnd,{passive:!0}),t[c]("pointerup",s.onTouchEnd,{passive:!0}),t[c]("pointercancel",s.onTouchEnd,{passive:!0}),t[c]("touchcancel",s.onTouchEnd,{passive:!0}),t[c]("pointerout",s.onTouchEnd,{passive:!0}),t[c]("pointerleave",s.onTouchEnd,{passive:!0}),t[c]("contextmenu",s.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&a[c]("click",s.onClick,!0),i.cssMode&&r[c]("scroll",s.onScroll),i.updateOnWindowResize?s[n](f.ios||f.android?"resize orientationchange observerUpdate":"resize observerUpdate",st,!0):s[n]("observerUpdate",st,!0),a[c]("load",s.onLoad,{capture:!0}))};function bs(){const s=this,{params:e}=s;s.onTouchStart=ms.bind(s),s.onTouchMove=hs.bind(s),s.onTouchEnd=vs.bind(s),s.onDocumentTouchStart=ys.bind(s),e.cssMode&&(s.onScroll=gs.bind(s)),s.onClick=xs.bind(s),s.onLoad=ws.bind(s),vt(s,"on")}function Ss(){vt(this,"off")}var Es={attachEvents:bs,detachEvents:Ss};const it=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function Ts(){const s=this,{realIndex:e,initialized:t,params:i,el:a}=s,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const f=V(),p=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",c=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?s.el:f.querySelector(i.breakpointsBase),n=s.getBreakpoint(r,p,c);if(!n||s.currentBreakpoint===n)return;const u=(n in r?r[n]:void 0)||s.originalParams,x=it(s,i),h=it(s,u),l=s.params.grabCursor,o=u.grabCursor,g=i.enabled;x&&!h?(a.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),s.emitContainerClasses()):!x&&h&&(a.classList.add(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&a.classList.add(`${i.containerModifierClass}grid-column`),s.emitContainerClasses()),l&&!o?s.unsetGrabCursor():!l&&o&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(I=>{if(typeof u[I]>"u")return;const T=i[I]&&i[I].enabled,P=u[I]&&u[I].enabled;T&&!P&&s[I].disable(),!T&&P&&s[I].enable()});const w=u.direction&&u.direction!==i.direction,v=i.loop&&(u.slidesPerView!==i.slidesPerView||w),m=i.loop;w&&t&&s.changeDirection(),K(s.params,u);const y=s.params.enabled,b=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),g&&!y?s.disable():!g&&y&&s.enable(),s.currentBreakpoint=n,s.emit("_beforeBreakpoint",u),t&&(v?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!m&&b?(s.loopCreate(e),s.updateSlides()):m&&!b&&s.loopDestroy()),s.emit("breakpoint",u)}function Ms(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1;const a=N(),r=e==="window"?a.innerHeight:t.clientHeight,f=Object.keys(s).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){const c=parseFloat(p.substr(1));return{value:r*c,point:p}}return{value:p,point:p}});f.sort((p,c)=>parseInt(p.value,10)-parseInt(c.value,10));for(let p=0;p<f.length;p+=1){const{point:c,value:n}=f[p];e==="window"?a.matchMedia(`(min-width: ${n}px)`).matches&&(i=c):n<=t.clientWidth&&(i=c)}return i||"max"}var Ls={setBreakpoint:Ts,getBreakpoint:Ms};function js(s,e){const t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(a=>{i[a]&&t.push(e+a)}):typeof i=="string"&&t.push(e+i)}),t}function ks(){const s=this,{classNames:e,params:t,rtl:i,el:a,device:r}=s,f=js(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...f),a.classList.add(...e),s.emitContainerClasses()}function $s(){const s=this,{el:e,classNames:t}=s;!e||typeof e=="string"||(e.classList.remove(...t),s.emitContainerClasses())}var Cs={addClasses:ks,removeClasses:$s};function Ps(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){const a=s.slides.length-1,r=s.slidesGrid[a]+s.slidesSizesGrid[a]+i*2;s.isLocked=s.size>r}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Is={checkOverflow:Ps},at={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function As(s,e){return function(i){i===void 0&&(i={});const a=Object.keys(i)[0],r=i[a];if(typeof r!="object"||r===null){K(e,i);return}if(s[a]===!0&&(s[a]={enabled:!0}),a==="navigation"&&s[a]&&s[a].enabled&&!s[a].prevEl&&!s[a].nextEl&&(s[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&s[a]&&s[a].enabled&&!s[a].el&&(s[a].auto=!0),!(a in s&&"enabled"in r)){K(e,i);return}typeof s[a]=="object"&&!("enabled"in s[a])&&(s[a].enabled=!0),s[a]||(s[a]={enabled:!1}),K(e,i)}}const Xe={eventsEmitter:Ct,update:Gt,translate:Wt,transition:Zt,slide:rs,loop:ds,grabCursor:fs,events:Es,breakpoints:Ls,checkOverflow:Is,classes:Cs},Re={};class U{constructor(){let e,t;for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?t=a[0]:[e,t]=a,t||(t={}),t=K({},t),e&&!t.el&&(t.el=e);const f=V();if(t.el&&typeof t.el=="string"&&f.querySelectorAll(t.el).length>1){const d=[];return f.querySelectorAll(t.el).forEach(u=>{const x=K({},t,{el:u});d.push(new U(x))}),d}const p=this;p.__swiper__=!0,p.support=ft(),p.device=ut({userAgent:t.userAgent}),p.browser=mt(),p.eventsListeners={},p.eventsAnyListeners=[],p.modules=[...p.__modules__],t.modules&&Array.isArray(t.modules)&&p.modules.push(...t.modules);const c={};p.modules.forEach(d=>{d({params:t,swiper:p,extendParams:As(t,c),on:p.on.bind(p),once:p.once.bind(p),off:p.off.bind(p),emit:p.emit.bind(p)})});const n=K({},at,c);return p.params=K({},n,Re,t),p.originalParams=K({},p.params),p.passedParams=K({},t),p.params&&p.params.on&&Object.keys(p.params.on).forEach(d=>{p.on(d,p.params.on[d])}),p.params&&p.params.onAny&&p.onAny(p.params.onAny),Object.assign(p,{enabled:p.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return p.params.direction==="horizontal"},isVertical(){return p.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:p.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),p.emit("_swiper"),p.params.init&&p.init(),p}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,a=F(t,`.${i.slideClass}, swiper-slide`),r=Ee(a[0]);return Ee(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=F(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const a=i.minTranslate(),f=(i.maxTranslate()-a)*e+a;i.translateTo(f,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const a=e.getSlideClasses(i);t.push({slideEl:i,classNames:a}),e.emit("_slideClass",i,a)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:a,slides:r,slidesGrid:f,slidesSizesGrid:p,size:c,activeIndex:n}=i;let d=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let u=r[n]?Math.ceil(r[n].swiperSlideSize):0,x;for(let h=n+1;h<r.length;h+=1)r[h]&&!x&&(u+=Math.ceil(r[h].swiperSlideSize),d+=1,u>c&&(x=!0));for(let h=n-1;h>=0;h-=1)r[h]&&!x&&(u+=r[h].swiperSlideSize,d+=1,u>c&&(x=!0))}else if(e==="current")for(let u=n+1;u<r.length;u+=1)(t?f[u]+p[u]-f[n]<c:f[u]-f[n]<c)&&(d+=1);else for(let u=n-1;u>=0;u-=1)f[n]-f[u]<c&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(f=>{f.complete&&ke(e,f)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function a(){const f=e.rtlTranslate?e.translate*-1:e.translate,p=Math.min(Math.max(f,e.maxTranslate()),e.minTranslate());e.setTranslate(p),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)a(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const f=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(f.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||a()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,a=i.params.direction;return e||(e=a==="horizontal"?"vertical":"horizontal"),e===a||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${a}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let f=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(a()):F(i,a())[0];return!f&&t.params.createElements&&(f=Z("div",t.params.wrapperClass),i.append(f),F(i,`.${t.params.slideClass}`).forEach(p=>{f.append(p)})),Object.assign(t,{el:i,wrapperEl:f,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:f,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||oe(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||oe(i,"direction")==="rtl"),wrongRTL:oe(f,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const a=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(r=>{r.complete?ke(t,r):r.addEventListener("load",f=>{ke(t,f.target)})}),Ue(t),t.initialized=!0,Ue(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:a,el:r,wrapperEl:f,slides:p}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),a.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),f&&f.removeAttribute("style"),p&&p.length&&p.forEach(c=>{c.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(c=>{i.off(c)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),gt(i)),i.destroyed=!0),null}static extendDefaults(e){K(Re,e)}static get extendedDefaults(){return Re}static get defaults(){return at}static installModule(e){U.prototype.__modules__||(U.prototype.__modules__=[]);const t=U.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>U.installModule(t)),U):(U.installModule(e),U)}}Object.keys(Xe).forEach(s=>{Object.keys(Xe[s]).forEach(e=>{U.prototype[e]=Xe[s][e]})});U.use([kt,$t]);function zs(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let r;const f=V();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const p=f.createElement("div");function c(l,o){const g=e.params.virtual;if(g.cache&&e.virtual.cache[o])return e.virtual.cache[o];let w;return g.renderSlide?(w=g.renderSlide.call(e,l,o),typeof w=="string"&&(ie(p,w),w=p.children[0])):e.isElement?w=Z("swiper-slide"):w=Z("div",e.params.slideClass),w.setAttribute("data-swiper-slide-index",o),g.renderSlide||ie(w,l),g.cache&&(e.virtual.cache[o]=w),w}function n(l,o,g){const{slidesPerView:w,slidesPerGroup:v,centeredSlides:m,loop:y,initialSlide:b}=e.params;if(o&&!y&&b>0)return;const{addSlidesBefore:I,addSlidesAfter:T}=e.params.virtual,{from:P,to:L,slides:M,slidesGrid:$,offset:k}=e.virtual;e.params.cssMode||e.updateActiveIndex();const j=typeof g>"u"?e.activeIndex||0:g;let C;e.rtlTranslate?C="right":C=e.isHorizontal()?"left":"top";let z,O;m?(z=Math.floor(w/2)+v+T,O=Math.floor(w/2)+v+I):(z=w+(v-1)+T,O=(y?w:v)+I);let S=j-O,E=j+z;y||(S=Math.max(S,0),E=Math.min(E,M.length-1));let B=(e.slidesGrid[S]||0)-(e.slidesGrid[0]||0);y&&j>=O?(S-=O,m||(B+=e.slidesGrid[0])):y&&j<O&&(S=-O,m&&(B+=e.slidesGrid[0])),Object.assign(e.virtual,{from:S,to:E,offset:B,slidesGrid:e.slidesGrid,slidesBefore:O,slidesAfter:z});function Y(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),a("virtualUpdate")}if(P===S&&L===E&&!l){e.slidesGrid!==$&&B!==k&&e.slides.forEach(A=>{A.style[C]=`${B-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),a("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:B,from:S,to:E,slides:function(){const D=[];for(let G=S;G<=E;G+=1)D.push(M[G]);return D}()}),e.params.virtual.renderExternalUpdate?Y():a("virtualUpdate");return}const X=[],R=[],ee=A=>{let D=A;return A<0?D=M.length+A:D>=M.length&&(D=D-M.length),D};if(l)e.slides.filter(A=>A.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(A=>{A.remove()});else for(let A=P;A<=L;A+=1)if(A<S||A>E){const D=ee(A);e.slides.filter(G=>G.matches(`.${e.params.slideClass}[data-swiper-slide-index="${D}"], swiper-slide[data-swiper-slide-index="${D}"]`)).forEach(G=>{G.remove()})}const xe=y?-M.length:0,q=y?M.length*2:M.length;for(let A=xe;A<q;A+=1)if(A>=S&&A<=E){const D=ee(A);typeof L>"u"||l?R.push(D):(A>L&&R.push(D),A<P&&X.push(D))}if(R.forEach(A=>{e.slidesEl.append(c(M[A],A))}),y)for(let A=X.length-1;A>=0;A-=1){const D=X[A];e.slidesEl.prepend(c(M[D],D))}else X.sort((A,D)=>D-A),X.forEach(A=>{e.slidesEl.prepend(c(M[A],A))});F(e.slidesEl,".swiper-slide, swiper-slide").forEach(A=>{A.style[C]=`${B-Math.abs(e.cssOverflowAdjustment())}px`}),Y()}function d(l){if(typeof l=="object"&&"length"in l)for(let o=0;o<l.length;o+=1)l[o]&&e.virtual.slides.push(l[o]);else e.virtual.slides.push(l);n(!0)}function u(l){const o=e.activeIndex;let g=o+1,w=1;if(Array.isArray(l)){for(let v=0;v<l.length;v+=1)l[v]&&e.virtual.slides.unshift(l[v]);g=o+l.length,w=l.length}else e.virtual.slides.unshift(l);if(e.params.virtual.cache){const v=e.virtual.cache,m={};Object.keys(v).forEach(y=>{const b=v[y],I=b.getAttribute("data-swiper-slide-index");I&&b.setAttribute("data-swiper-slide-index",parseInt(I,10)+w),m[parseInt(y,10)+w]=b}),e.virtual.cache=m}n(!0),e.slideTo(g,0)}function x(l){if(typeof l>"u"||l===null)return;let o=e.activeIndex;if(Array.isArray(l))for(let g=l.length-1;g>=0;g-=1)e.params.virtual.cache&&(delete e.virtual.cache[l[g]],Object.keys(e.virtual.cache).forEach(w=>{w>l&&(e.virtual.cache[w-1]=e.virtual.cache[w],e.virtual.cache[w-1].setAttribute("data-swiper-slide-index",w-1),delete e.virtual.cache[w])})),e.virtual.slides.splice(l[g],1),l[g]<o&&(o-=1),o=Math.max(o,0);else e.params.virtual.cache&&(delete e.virtual.cache[l],Object.keys(e.virtual.cache).forEach(g=>{g>l&&(e.virtual.cache[g-1]=e.virtual.cache[g],e.virtual.cache[g-1].setAttribute("data-swiper-slide-index",g-1),delete e.virtual.cache[g])})),e.virtual.slides.splice(l,1),l<o&&(o-=1),o=Math.max(o,0);n(!0),e.slideTo(o,0)}function h(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),n(!0),e.slideTo(0,0)}i("beforeInit",()=>{if(!e.params.virtual.enabled)return;let l;if(typeof e.passedParams.virtual.slides>"u"){const o=[...e.slidesEl.children].filter(g=>g.matches(`.${e.params.slideClass}, swiper-slide`));o&&o.length&&(e.virtual.slides=[...o],l=!0,o.forEach((g,w)=>{g.setAttribute("data-swiper-slide-index",w),e.virtual.cache[w]=g,g.remove()}))}l||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,n(!1,!0)}),i("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(r),r=setTimeout(()=>{n()},100)):n())}),i("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&be(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:d,prependSlide:u,removeSlide:x,removeAllSlides:h,update:n})}function qs(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;const r=V(),f=N();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(d){if(!e.enabled)return;const{rtlTranslate:u}=e;let x=d;x.originalEvent&&(x=x.originalEvent);const h=x.keyCode||x.charCode,l=e.params.keyboard.pageUpDown,o=l&&h===33,g=l&&h===34,w=h===37,v=h===39,m=h===38,y=h===40;if(!e.allowSlideNext&&(e.isHorizontal()&&v||e.isVertical()&&y||g)||!e.allowSlidePrev&&(e.isHorizontal()&&w||e.isVertical()&&m||o))return!1;if(!(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)&&!(r.activeElement&&(r.activeElement.isContentEditable||r.activeElement.nodeName&&(r.activeElement.nodeName.toLowerCase()==="input"||r.activeElement.nodeName.toLowerCase()==="textarea")))){if(e.params.keyboard.onlyInViewport&&(o||g||w||v||m||y)){let b=!1;if(de(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&de(e.el,`.${e.params.slideActiveClass}`).length===0)return;const I=e.el,T=I.clientWidth,P=I.clientHeight,L=f.innerWidth,M=f.innerHeight,$=Ce(I);u&&($.left-=I.scrollLeft);const k=[[$.left,$.top],[$.left+T,$.top],[$.left,$.top+P],[$.left+T,$.top+P]];for(let j=0;j<k.length;j+=1){const C=k[j];if(C[0]>=0&&C[0]<=L&&C[1]>=0&&C[1]<=M){if(C[0]===0&&C[1]===0)continue;b=!0}}if(!b)return}e.isHorizontal()?((o||g||w||v)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),((g||v)&&!u||(o||w)&&u)&&e.slideNext(),((o||w)&&!u||(g||v)&&u)&&e.slidePrev()):((o||g||m||y)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),(g||y)&&e.slideNext(),(o||m)&&e.slidePrev()),a("keyPress",h)}}function c(){e.keyboard.enabled||(r.addEventListener("keydown",p),e.keyboard.enabled=!0)}function n(){e.keyboard.enabled&&(r.removeEventListener("keydown",p),e.keyboard.enabled=!1)}i("init",()=>{e.params.keyboard.enabled&&c()}),i("destroy",()=>{e.keyboard.enabled&&n()}),Object.assign(e.keyboard,{enable:c,disable:n})}function Os(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;const r=N();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let f,p=J(),c;const n=[];function d(m){let T=0,P=0,L=0,M=0;return"detail"in m&&(P=m.detail),"wheelDelta"in m&&(P=-m.wheelDelta/120),"wheelDeltaY"in m&&(P=-m.wheelDeltaY/120),"wheelDeltaX"in m&&(T=-m.wheelDeltaX/120),"axis"in m&&m.axis===m.HORIZONTAL_AXIS&&(T=P,P=0),L=T*10,M=P*10,"deltaY"in m&&(M=m.deltaY),"deltaX"in m&&(L=m.deltaX),m.shiftKey&&!L&&(L=M,M=0),(L||M)&&m.deltaMode&&(m.deltaMode===1?(L*=40,M*=40):(L*=800,M*=800)),L&&!T&&(T=L<1?-1:1),M&&!P&&(P=M<1?-1:1),{spinX:T,spinY:P,pixelX:L,pixelY:M}}function u(){e.enabled&&(e.mouseEntered=!0)}function x(){e.enabled&&(e.mouseEntered=!1)}function h(m){return e.params.mousewheel.thresholdDelta&&m.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&J()-p<e.params.mousewheel.thresholdTime?!1:m.delta>=6&&J()-p<60?!0:(m.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),a("scroll",m.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),a("scroll",m.raw)),p=new r.Date().getTime(),!1)}function l(m){const y=e.params.mousewheel;if(m.direction<0){if(e.isEnd&&!e.params.loop&&y.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&y.releaseOnEdges)return!0;return!1}function o(m){let y=m,b=!0;if(!e.enabled||m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const I=e.params.mousewheel;e.params.cssMode&&y.preventDefault();let T=e.el;e.params.mousewheel.eventsTarget!=="container"&&(T=document.querySelector(e.params.mousewheel.eventsTarget));const P=T&&T.contains(y.target);if(!e.mouseEntered&&!P&&!I.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let L=0;const M=e.rtlTranslate?-1:1,$=d(y);if(I.forceToAxis)if(e.isHorizontal())if(Math.abs($.pixelX)>Math.abs($.pixelY))L=-$.pixelX*M;else return!0;else if(Math.abs($.pixelY)>Math.abs($.pixelX))L=-$.pixelY;else return!0;else L=Math.abs($.pixelX)>Math.abs($.pixelY)?-$.pixelX*M:-$.pixelY;if(L===0)return!0;I.invert&&(L=-L);let k=e.getTranslate()+L*I.sensitivity;if(k>=e.minTranslate()&&(k=e.minTranslate()),k<=e.maxTranslate()&&(k=e.maxTranslate()),b=e.params.loop?!0:!(k===e.minTranslate()||k===e.maxTranslate()),b&&e.params.nested&&y.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const j={time:J(),delta:Math.abs(L),direction:Math.sign(L),raw:m};n.length>=2&&n.shift();const C=n.length?n[n.length-1]:void 0;if(n.push(j),C?(j.direction!==C.direction||j.delta>C.delta||j.time>C.time+150)&&h(j):h(j),l(j))return!0}else{const j={time:J(),delta:Math.abs(L),direction:Math.sign(L)},C=c&&j.time<c.time+500&&j.delta<=c.delta&&j.direction===c.direction;if(!C){c=void 0;let z=e.getTranslate()+L*I.sensitivity;const O=e.isBeginning,S=e.isEnd;if(z>=e.minTranslate()&&(z=e.minTranslate()),z<=e.maxTranslate()&&(z=e.maxTranslate()),e.setTransition(0),e.setTranslate(z),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!O&&e.isBeginning||!S&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:j.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(f),f=void 0,n.length>=15&&n.shift();const E=n.length?n[n.length-1]:void 0,B=n[0];if(n.push(j),E&&(j.delta>E.delta||j.direction!==E.direction))n.splice(0);else if(n.length>=15&&j.time-B.time<500&&B.delta-j.delta>=1&&j.delta<=6){const Y=L>0?.8:.2;c=j,n.splice(0),f=me(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,Y)},0)}f||(f=me(()=>{if(e.destroyed||!e.params)return;const Y=.5;c=j,n.splice(0),e.slideToClosest(e.params.speed,!0,void 0,Y)},500))}if(C||a("scroll",y),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),I.releaseOnEdges&&(z===e.minTranslate()||z===e.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function g(m){let y=e.el;e.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(e.params.mousewheel.eventsTarget)),y[m]("mouseenter",u),y[m]("mouseleave",x),y[m]("wheel",o)}function w(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",o),!0):e.mousewheel.enabled?!1:(g("addEventListener"),e.mousewheel.enabled=!0,!0)}function v(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,o),!0):e.mousewheel.enabled?(g("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}i("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&v(),e.params.mousewheel.enabled&&w()}),i("destroy",()=>{e.params.cssMode&&w(),e.mousewheel.enabled&&v()}),Object.assign(e.mousewheel,{enable:w,disable:v})}function Ze(s,e,t,i){return s.params.createElements&&Object.keys(i).forEach(a=>{if(!t[a]&&t.auto===!0){let r=F(s.el,`.${i[a]}`)[0];r||(r=Z("div",i[a]),r.className=i[a],s.el.append(r)),t[a]=r,e[a]=r}}),t}function Ds(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(l){let o;return l&&typeof l=="string"&&e.isElement&&(o=e.el.querySelector(l)||e.hostEl.querySelector(l),o)?o:(l&&(typeof l=="string"&&(o=[...document.querySelectorAll(l)]),e.params.uniqueNavElements&&typeof l=="string"&&o&&o.length>1&&e.el.querySelectorAll(l).length===1?o=e.el.querySelector(l):o&&o.length===1&&(o=o[0])),l&&!o?l:o)}function f(l,o){const g=e.params.navigation;l=H(l),l.forEach(w=>{w&&(w.classList[o?"add":"remove"](...g.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=o),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass))})}function p(){const{nextEl:l,prevEl:o}=e.navigation;if(e.params.loop){f(o,!1),f(l,!1);return}f(o,e.isBeginning&&!e.params.rewind),f(l,e.isEnd&&!e.params.rewind)}function c(l){l.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),a("navigationPrev"))}function n(l){l.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),a("navigationNext"))}function d(){const l=e.params.navigation;if(e.params.navigation=Ze(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(l.nextEl||l.prevEl))return;let o=r(l.nextEl),g=r(l.prevEl);Object.assign(e.navigation,{nextEl:o,prevEl:g}),o=H(o),g=H(g);const w=(v,m)=>{v&&v.addEventListener("click",m==="next"?n:c),!e.enabled&&v&&v.classList.add(...l.lockClass.split(" "))};o.forEach(v=>w(v,"next")),g.forEach(v=>w(v,"prev"))}function u(){let{nextEl:l,prevEl:o}=e.navigation;l=H(l),o=H(o);const g=(w,v)=>{w.removeEventListener("click",v==="next"?n:c),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};l.forEach(w=>g(w,"next")),o.forEach(w=>g(w,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?h():(d(),p())}),i("toEdge fromEdge lock unlock",()=>{p()}),i("destroy",()=>{u()}),i("enable disable",()=>{let{nextEl:l,prevEl:o}=e.navigation;if(l=H(l),o=H(o),e.enabled){p();return}[...l,...o].filter(g=>!!g).forEach(g=>g.classList.add(e.params.navigation.lockClass))}),i("click",(l,o)=>{let{nextEl:g,prevEl:w}=e.navigation;g=H(g),w=H(w);const v=o.target;let m=w.includes(v)||g.includes(v);if(e.isElement&&!m){const y=o.path||o.composedPath&&o.composedPath();y&&(m=y.find(b=>g.includes(b)||w.includes(b)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===v||e.pagination.el.contains(v)))return;let y;g.length?y=g[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(y=w[0].classList.contains(e.params.navigation.hiddenClass)),a(y===!0?"navigationShow":"navigationHide"),[...g,...w].filter(b=>!!b).forEach(b=>b.classList.toggle(e.params.navigation.hiddenClass))}});const x=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),p()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(e.navigation,{enable:x,disable:h,update:p,init:d,destroy:u})}function se(s){return s===void 0&&(s=""),`.${s.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Bs(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;const r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:v=>v,formatFractionTotal:v=>v,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let f,p=0;function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function n(v,m){const{bulletActiveClass:y}=e.params.pagination;v&&(v=v[`${m==="prev"?"previous":"next"}ElementSibling`],v&&(v.classList.add(`${y}-${m}`),v=v[`${m==="prev"?"previous":"next"}ElementSibling`],v&&v.classList.add(`${y}-${m}-${m}`)))}function d(v,m,y){if(v=v%y,m=m%y,m===v+1)return"next";if(m===v-1)return"previous"}function u(v){const m=v.target.closest(se(e.params.pagination.bulletClass));if(!m)return;v.preventDefault();const y=Ee(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===y)return;const b=d(e.realIndex,y,e.slides.length);b==="next"?e.slideNext():b==="previous"?e.slidePrev():e.slideToLoop(y)}else e.slideTo(y)}function x(){const v=e.rtl,m=e.params.pagination;if(c())return;let y=e.pagination.el;y=H(y);let b,I;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,P=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(I=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(b=e.snapIndex,I=e.previousSnapIndex):(I=e.previousIndex||0,b=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const L=e.pagination.bullets;let M,$,k;if(m.dynamicBullets&&(f=_e(L[0],e.isHorizontal()?"width":"height"),y.forEach(j=>{j.style[e.isHorizontal()?"width":"height"]=`${f*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&I!==void 0&&(p+=b-(I||0),p>m.dynamicMainBullets-1?p=m.dynamicMainBullets-1:p<0&&(p=0)),M=Math.max(b-p,0),$=M+(Math.min(L.length,m.dynamicMainBullets)-1),k=($+M)/2),L.forEach(j=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${m.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();j.classList.remove(...C)}),y.length>1)L.forEach(j=>{const C=Ee(j);C===b?j.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&j.setAttribute("part","bullet"),m.dynamicBullets&&(C>=M&&C<=$&&j.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),C===M&&n(j,"prev"),C===$&&n(j,"next"))});else{const j=L[b];if(j&&j.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&L.forEach((C,z)=>{C.setAttribute("part",z===b?"bullet-active":"bullet")}),m.dynamicBullets){const C=L[M],z=L[$];for(let O=M;O<=$;O+=1)L[O]&&L[O].classList.add(...`${m.bulletActiveClass}-main`.split(" "));n(C,"prev"),n(z,"next")}}if(m.dynamicBullets){const j=Math.min(L.length,m.dynamicMainBullets+4),C=(f*j-f)/2-k*f,z=v?"right":"left";L.forEach(O=>{O.style[e.isHorizontal()?z:"top"]=`${C}px`})}}y.forEach((L,M)=>{if(m.type==="fraction"&&(L.querySelectorAll(se(m.currentClass)).forEach($=>{$.textContent=m.formatFractionCurrent(b+1)}),L.querySelectorAll(se(m.totalClass)).forEach($=>{$.textContent=m.formatFractionTotal(P)})),m.type==="progressbar"){let $;m.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const k=(b+1)/P;let j=1,C=1;$==="horizontal"?j=k:C=k,L.querySelectorAll(se(m.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${j}) scaleY(${C})`,z.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(ie(L,m.renderCustom(e,b+1,P)),M===0&&a("paginationRender",L)):(M===0&&a("paginationRender",L),a("paginationUpdate",L)),e.params.watchOverflow&&e.enabled&&L.classList[e.isLocked?"add":"remove"](m.lockClass)})}function h(){const v=e.params.pagination;if(c())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let y=e.pagination.el;y=H(y);let b="";if(v.type==="bullets"){let I=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&I>m&&(I=m);for(let T=0;T<I;T+=1)v.renderBullet?b+=v.renderBullet.call(e,T,v.bulletClass):b+=`<${v.bulletElement} ${e.isElement?'part="bullet"':""} class="${v.bulletClass}"></${v.bulletElement}>`}v.type==="fraction"&&(v.renderFraction?b=v.renderFraction.call(e,v.currentClass,v.totalClass):b=`<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`),v.type==="progressbar"&&(v.renderProgressbar?b=v.renderProgressbar.call(e,v.progressbarFillClass):b=`<span class="${v.progressbarFillClass}"></span>`),e.pagination.bullets=[],y.forEach(I=>{v.type!=="custom"&&ie(I,b||""),v.type==="bullets"&&e.pagination.bullets.push(...I.querySelectorAll(se(v.bulletClass)))}),v.type!=="custom"&&a("paginationRender",y[0])}function l(){e.params.pagination=Ze(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const v=e.params.pagination;if(!v.el)return;let m;typeof v.el=="string"&&e.isElement&&(m=e.el.querySelector(v.el)),!m&&typeof v.el=="string"&&(m=[...document.querySelectorAll(v.el)]),m||(m=v.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof v.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(v.el)],m.length>1&&(m=m.find(y=>de(y,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=H(m),m.forEach(y=>{v.type==="bullets"&&v.clickable&&y.classList.add(...(v.clickableClass||"").split(" ")),y.classList.add(v.modifierClass+v.type),y.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.type==="bullets"&&v.dynamicBullets&&(y.classList.add(`${v.modifierClass}${v.type}-dynamic`),p=0,v.dynamicMainBullets<1&&(v.dynamicMainBullets=1)),v.type==="progressbar"&&v.progressbarOpposite&&y.classList.add(v.progressbarOppositeClass),v.clickable&&y.addEventListener("click",u),e.enabled||y.classList.add(v.lockClass)}))}function o(){const v=e.params.pagination;if(c())return;let m=e.pagination.el;m&&(m=H(m),m.forEach(y=>{y.classList.remove(v.hiddenClass),y.classList.remove(v.modifierClass+v.type),y.classList.remove(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.clickable&&(y.classList.remove(...(v.clickableClass||"").split(" ")),y.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(y=>y.classList.remove(...v.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const v=e.params.pagination;let{el:m}=e.pagination;m=H(m),m.forEach(y=>{y.classList.remove(v.horizontalClass,v.verticalClass),y.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?w():(l(),h(),x())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&x()}),i("snapIndexChange",()=>{x()}),i("snapGridLengthChange",()=>{h(),x()}),i("destroy",()=>{o()}),i("enable disable",()=>{let{el:v}=e.pagination;v&&(v=H(v),v.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{x()}),i("click",(v,m)=>{const y=m.target,b=H(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&b&&b.length>0&&!y.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&y===e.navigation.nextEl||e.navigation.prevEl&&y===e.navigation.prevEl))return;const I=b[0].classList.contains(e.params.pagination.hiddenClass);a(I===!0?"paginationShow":"paginationHide"),b.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const g=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=H(v),v.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),l(),h(),x()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=H(v),v.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),o()};Object.assign(e.pagination,{enable:g,disable:w,render:h,update:x,init:l,destroy:o})}function Ys(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;const r=V();let f=!1,p=null,c=null,n,d,u,x;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:k,rtlTranslate:j}=e,{dragEl:C,el:z}=k,O=e.params.scrollbar,S=e.params.loop?e.progressLoop:e.progress;let E=d,B=(u-d)*S;j?(B=-B,B>0?(E=d-B,B=0):-B+d>u&&(E=u+B)):B<0?(E=d+B,B=0):B+d>u&&(E=u-B),e.isHorizontal()?(C.style.transform=`translate3d(${B}px, 0, 0)`,C.style.width=`${E}px`):(C.style.transform=`translate3d(0px, ${B}px, 0)`,C.style.height=`${E}px`),O.hide&&(clearTimeout(p),z.style.opacity=1,p=setTimeout(()=>{z.style.opacity=0,z.style.transitionDuration="400ms"},1e3))}function l(k){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${k}ms`)}function o(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:k}=e,{dragEl:j,el:C}=k;j.style.width="",j.style.height="",u=e.isHorizontal()?C.offsetWidth:C.offsetHeight,x=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?d=u*x:d=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?j.style.width=`${d}px`:j.style.height=`${d}px`,x>=1?C.style.display="none":C.style.display="",e.params.scrollbar.hide&&(C.style.opacity=0),e.params.watchOverflow&&e.enabled&&k.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function g(k){return e.isHorizontal()?k.clientX:k.clientY}function w(k){const{scrollbar:j,rtlTranslate:C}=e,{el:z}=j;let O;O=(g(k)-Ce(z)[e.isHorizontal()?"left":"top"]-(n!==null?n:d/2))/(u-d),O=Math.max(Math.min(O,1),0),C&&(O=1-O);const S=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*O;e.updateProgress(S),e.setTranslate(S),e.updateActiveIndex(),e.updateSlidesClasses()}function v(k){const j=e.params.scrollbar,{scrollbar:C,wrapperEl:z}=e,{el:O,dragEl:S}=C;f=!0,n=k.target===S?g(k)-k.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,k.preventDefault(),k.stopPropagation(),z.style.transitionDuration="100ms",S.style.transitionDuration="100ms",w(k),clearTimeout(c),O.style.transitionDuration="0ms",j.hide&&(O.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),a("scrollbarDragStart",k)}function m(k){const{scrollbar:j,wrapperEl:C}=e,{el:z,dragEl:O}=j;f&&(k.preventDefault&&k.cancelable?k.preventDefault():k.returnValue=!1,w(k),C.style.transitionDuration="0ms",z.style.transitionDuration="0ms",O.style.transitionDuration="0ms",a("scrollbarDragMove",k))}function y(k){const j=e.params.scrollbar,{scrollbar:C,wrapperEl:z}=e,{el:O}=C;f&&(f=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",z.style.transitionDuration=""),j.hide&&(clearTimeout(c),c=me(()=>{O.style.opacity=0,O.style.transitionDuration="400ms"},1e3)),a("scrollbarDragEnd",k),j.snapOnRelease&&e.slideToClosest())}function b(k){const{scrollbar:j,params:C}=e,z=j.el;if(!z)return;const O=z,S=C.passiveListeners?{passive:!1,capture:!1}:!1,E=C.passiveListeners?{passive:!0,capture:!1}:!1;if(!O)return;const B=k==="on"?"addEventListener":"removeEventListener";O[B]("pointerdown",v,S),r[B]("pointermove",m,S),r[B]("pointerup",y,E)}function I(){!e.params.scrollbar.el||!e.scrollbar.el||b("on")}function T(){!e.params.scrollbar.el||!e.scrollbar.el||b("off")}function P(){const{scrollbar:k,el:j}=e;e.params.scrollbar=Ze(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const C=e.params.scrollbar;if(!C.el)return;let z;if(typeof C.el=="string"&&e.isElement&&(z=e.el.querySelector(C.el)),!z&&typeof C.el=="string"){if(z=r.querySelectorAll(C.el),!z.length)return}else z||(z=C.el);e.params.uniqueNavElements&&typeof C.el=="string"&&z.length>1&&j.querySelectorAll(C.el).length===1&&(z=j.querySelector(C.el)),z.length>0&&(z=z[0]),z.classList.add(e.isHorizontal()?C.horizontalClass:C.verticalClass);let O;z&&(O=z.querySelector(se(e.params.scrollbar.dragClass)),O||(O=Z("div",e.params.scrollbar.dragClass),z.append(O))),Object.assign(k,{el:z,dragEl:O}),C.draggable&&I(),z&&z.classList[e.enabled?"remove":"add"](...ne(e.params.scrollbar.lockClass))}function L(){const k=e.params.scrollbar,j=e.scrollbar.el;j&&j.classList.remove(...ne(e.isHorizontal()?k.horizontalClass:k.verticalClass)),T()}i("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const k=e.params.scrollbar;let{el:j}=e.scrollbar;j=H(j),j.forEach(C=>{C.classList.remove(k.horizontalClass,k.verticalClass),C.classList.add(e.isHorizontal()?k.horizontalClass:k.verticalClass)})}),i("init",()=>{e.params.scrollbar.enabled===!1?$():(P(),o(),h())}),i("update resize observerUpdate lock unlock changeDirection",()=>{o()}),i("setTranslate",()=>{h()}),i("setTransition",(k,j)=>{l(j)}),i("enable disable",()=>{const{el:k}=e.scrollbar;k&&k.classList[e.enabled?"remove":"add"](...ne(e.params.scrollbar.lockClass))}),i("destroy",()=>{L()});const M=()=>{e.el.classList.remove(...ne(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...ne(e.params.scrollbar.scrollbarDisabledClass)),P(),o(),h()},$=()=>{e.el.classList.add(...ne(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...ne(e.params.scrollbar.scrollbarDisabledClass)),L()};Object.assign(e.scrollbar,{enable:M,disable:$,updateSize:o,setTranslate:h,init:P,destroy:L})}function Hs(s){let{swiper:e,extendParams:t,on:i}=s;t({parallax:{enabled:!1}});const a="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(c,n)=>{const{rtl:d}=e,u=d?-1:1,x=c.getAttribute("data-swiper-parallax")||"0";let h=c.getAttribute("data-swiper-parallax-x"),l=c.getAttribute("data-swiper-parallax-y");const o=c.getAttribute("data-swiper-parallax-scale"),g=c.getAttribute("data-swiper-parallax-opacity"),w=c.getAttribute("data-swiper-parallax-rotate");if(h||l?(h=h||"0",l=l||"0"):e.isHorizontal()?(h=x,l="0"):(l=x,h="0"),h.indexOf("%")>=0?h=`${parseInt(h,10)*n*u}%`:h=`${h*n*u}px`,l.indexOf("%")>=0?l=`${parseInt(l,10)*n}%`:l=`${l*n}px`,typeof g<"u"&&g!==null){const m=g-(g-1)*(1-Math.abs(n));c.style.opacity=m}let v=`translate3d(${h}, ${l}, 0px)`;if(typeof o<"u"&&o!==null){const m=o-(o-1)*(1-Math.abs(n));v+=` scale(${m})`}if(w&&typeof w<"u"&&w!==null){const m=w*n*-1;v+=` rotate(${m}deg)`}c.style.transform=v},f=()=>{const{el:c,slides:n,progress:d,snapGrid:u,isElement:x}=e,h=F(c,a);e.isElement&&h.push(...F(e.hostEl,a)),h.forEach(l=>{r(l,d)}),n.forEach((l,o)=>{let g=l.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(g+=Math.ceil(o/2)-d*(u.length-1)),g=Math.min(Math.max(g,-1),1),l.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach(w=>{r(w,g)})})},p=function(c){c===void 0&&(c=e.params.speed);const{el:n,hostEl:d}=e,u=[...n.querySelectorAll(a)];e.isElement&&u.push(...d.querySelectorAll(a)),u.forEach(x=>{let h=parseInt(x.getAttribute("data-swiper-parallax-duration"),10)||c;c===0&&(h=0),x.style.transitionDuration=`${h}ms`})};i("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),i("init",()=>{e.params.parallax.enabled&&f()}),i("setTranslate",()=>{e.params.parallax.enabled&&f()}),i("setTransition",(c,n)=>{e.params.parallax.enabled&&p(n)})}function Gs(s){let{swiper:e,extendParams:t,on:i,emit:a}=s;const r=N();t({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let f=1,p=!1,c=!1,n={x:0,y:0};const d=-3;let u,x;const h=[],l={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},o={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let w=1;Object.defineProperty(e.zoom,"scale",{get(){return w},set(q){if(w!==q){const A=l.imageEl,D=l.slideEl;a("zoomChange",q,A,D)}w=q}});function v(){if(h.length<2)return 1;const q=h[0].pageX,A=h[0].pageY,D=h[1].pageX,G=h[1].pageY;return Math.sqrt((D-q)**2+(G-A)**2)}function m(){const q=e.params.zoom,A=l.imageWrapEl.getAttribute("data-swiper-zoom")||q.maxRatio;if(q.limitToOriginalSize&&l.imageEl&&l.imageEl.naturalWidth){const D=l.imageEl.naturalWidth/l.imageEl.offsetWidth;return Math.min(D,A)}return A}function y(){if(h.length<2)return{x:null,y:null};const q=l.imageEl.getBoundingClientRect();return[(h[0].pageX+(h[1].pageX-h[0].pageX)/2-q.x-r.scrollX)/f,(h[0].pageY+(h[1].pageY-h[0].pageY)/2-q.y-r.scrollY)/f]}function b(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function I(q){const A=b();return!!(q.target.matches(A)||e.slides.filter(D=>D.contains(q.target)).length>0)}function T(q){const A=`.${e.params.zoom.containerClass}`;return!!(q.target.matches(A)||[...e.hostEl.querySelectorAll(A)].filter(D=>D.contains(q.target)).length>0)}function P(q){if(q.pointerType==="mouse"&&h.splice(0,h.length),!I(q))return;const A=e.params.zoom;if(u=!1,x=!1,h.push(q),!(h.length<2)){if(u=!0,l.scaleStart=v(),!l.slideEl){l.slideEl=q.target.closest(`.${e.params.slideClass}, swiper-slide`),l.slideEl||(l.slideEl=e.slides[e.activeIndex]);let D=l.slideEl.querySelector(`.${A.containerClass}`);if(D&&(D=D.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=D,D?l.imageWrapEl=de(l.imageEl,`.${A.containerClass}`)[0]:l.imageWrapEl=void 0,!l.imageWrapEl){l.imageEl=void 0;return}l.maxRatio=m()}if(l.imageEl){const[D,G]=y();l.originX=D,l.originY=G,l.imageEl.style.transitionDuration="0ms"}p=!0}}function L(q){if(!I(q))return;const A=e.params.zoom,D=e.zoom,G=h.findIndex(W=>W.pointerId===q.pointerId);G>=0&&(h[G]=q),!(h.length<2)&&(x=!0,l.scaleMove=v(),l.imageEl&&(D.scale=l.scaleMove/l.scaleStart*f,D.scale>l.maxRatio&&(D.scale=l.maxRatio-1+(D.scale-l.maxRatio+1)**.5),D.scale<A.minRatio&&(D.scale=A.minRatio+1-(A.minRatio-D.scale+1)**.5),l.imageEl.style.transform=`translate3d(0,0,0) scale(${D.scale})`))}function M(q){if(!I(q)||q.pointerType==="mouse"&&q.type==="pointerout")return;const A=e.params.zoom,D=e.zoom,G=h.findIndex(W=>W.pointerId===q.pointerId);G>=0&&h.splice(G,1),!(!u||!x)&&(u=!1,x=!1,l.imageEl&&(D.scale=Math.max(Math.min(D.scale,l.maxRatio),A.minRatio),l.imageEl.style.transitionDuration=`${e.params.speed}ms`,l.imageEl.style.transform=`translate3d(0,0,0) scale(${D.scale})`,f=D.scale,p=!1,D.scale>1&&l.slideEl?l.slideEl.classList.add(`${A.zoomedSlideClass}`):D.scale<=1&&l.slideEl&&l.slideEl.classList.remove(`${A.zoomedSlideClass}`),D.scale===1&&(l.originX=0,l.originY=0,l.slideEl=void 0)))}let $;function k(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function j(){clearTimeout($),e.touchEventsData.preventTouchMoveFromPointerMove=!0,$=setTimeout(()=>{e.destroyed||k()})}function C(q){const A=e.device;if(!l.imageEl||o.isTouched)return;A.android&&q.cancelable&&q.preventDefault(),o.isTouched=!0;const D=h.length>0?h[0]:q;o.touchesStart.x=D.pageX,o.touchesStart.y=D.pageY}function z(q){const D=q.pointerType==="mouse"&&e.params.zoom.panOnMouseMove;if(!I(q)||!T(q))return;const G=e.zoom;if(!l.imageEl)return;if(!o.isTouched||!l.slideEl){D&&E(q);return}if(D){E(q);return}o.isMoved||(o.width=l.imageEl.offsetWidth||l.imageEl.clientWidth,o.height=l.imageEl.offsetHeight||l.imageEl.clientHeight,o.startX=We(l.imageWrapEl,"x")||0,o.startY=We(l.imageWrapEl,"y")||0,l.slideWidth=l.slideEl.offsetWidth,l.slideHeight=l.slideEl.offsetHeight,l.imageWrapEl.style.transitionDuration="0ms");const W=o.width*G.scale,ae=o.height*G.scale;if(o.minX=Math.min(l.slideWidth/2-W/2,0),o.maxX=-o.minX,o.minY=Math.min(l.slideHeight/2-ae/2,0),o.maxY=-o.minY,o.touchesCurrent.x=h.length>0?h[0].pageX:q.pageX,o.touchesCurrent.y=h.length>0?h[0].pageY:q.pageY,Math.max(Math.abs(o.touchesCurrent.x-o.touchesStart.x),Math.abs(o.touchesCurrent.y-o.touchesStart.y))>5&&(e.allowClick=!1),!o.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(o.minX)===Math.floor(o.startX)&&o.touchesCurrent.x<o.touchesStart.x||Math.floor(o.maxX)===Math.floor(o.startX)&&o.touchesCurrent.x>o.touchesStart.x)){o.isTouched=!1,k();return}if(!e.isHorizontal()&&(Math.floor(o.minY)===Math.floor(o.startY)&&o.touchesCurrent.y<o.touchesStart.y||Math.floor(o.maxY)===Math.floor(o.startY)&&o.touchesCurrent.y>o.touchesStart.y)){o.isTouched=!1,k();return}}q.cancelable&&q.preventDefault(),q.stopPropagation(),j(),o.isMoved=!0;const te=(G.scale-f)/(l.maxRatio-e.params.zoom.minRatio),{originX:le,originY:_}=l;o.currentX=o.touchesCurrent.x-o.touchesStart.x+o.startX+te*(o.width-le*2),o.currentY=o.touchesCurrent.y-o.touchesStart.y+o.startY+te*(o.height-_*2),o.currentX<o.minX&&(o.currentX=o.minX+1-(o.minX-o.currentX+1)**.8),o.currentX>o.maxX&&(o.currentX=o.maxX-1+(o.currentX-o.maxX+1)**.8),o.currentY<o.minY&&(o.currentY=o.minY+1-(o.minY-o.currentY+1)**.8),o.currentY>o.maxY&&(o.currentY=o.maxY-1+(o.currentY-o.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=o.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=o.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(o.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(o.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(o.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(o.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=o.touchesCurrent.x,g.prevPositionY=o.touchesCurrent.y,g.prevTime=Date.now(),l.imageWrapEl.style.transform=`translate3d(${o.currentX}px, ${o.currentY}px,0)`}function O(){const q=e.zoom;if(h.length=0,!l.imageEl)return;if(!o.isTouched||!o.isMoved){o.isTouched=!1,o.isMoved=!1;return}o.isTouched=!1,o.isMoved=!1;let A=300,D=300;const G=g.x*A,W=o.currentX+G,ae=g.y*D,re=o.currentY+ae;g.x!==0&&(A=Math.abs((W-o.currentX)/g.x)),g.y!==0&&(D=Math.abs((re-o.currentY)/g.y));const te=Math.max(A,D);o.currentX=W,o.currentY=re;const le=o.width*q.scale,_=o.height*q.scale;o.minX=Math.min(l.slideWidth/2-le/2,0),o.maxX=-o.minX,o.minY=Math.min(l.slideHeight/2-_/2,0),o.maxY=-o.minY,o.currentX=Math.max(Math.min(o.currentX,o.maxX),o.minX),o.currentY=Math.max(Math.min(o.currentY,o.maxY),o.minY),l.imageWrapEl.style.transitionDuration=`${te}ms`,l.imageWrapEl.style.transform=`translate3d(${o.currentX}px, ${o.currentY}px,0)`}function S(){const q=e.zoom;l.slideEl&&e.activeIndex!==e.slides.indexOf(l.slideEl)&&(l.imageEl&&(l.imageEl.style.transform="translate3d(0,0,0) scale(1)"),l.imageWrapEl&&(l.imageWrapEl.style.transform="translate3d(0,0,0)"),l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),q.scale=1,f=1,l.slideEl=void 0,l.imageEl=void 0,l.imageWrapEl=void 0,l.originX=0,l.originY=0)}function E(q){if(f<=1||!l.imageWrapEl||!I(q)||!T(q))return;const A=r.getComputedStyle(l.imageWrapEl).transform,D=new r.DOMMatrix(A);if(!c){c=!0,n.x=q.clientX,n.y=q.clientY,o.startX=D.e,o.startY=D.f,o.width=l.imageEl.offsetWidth||l.imageEl.clientWidth,o.height=l.imageEl.offsetHeight||l.imageEl.clientHeight,l.slideWidth=l.slideEl.offsetWidth,l.slideHeight=l.slideEl.offsetHeight;return}const G=(q.clientX-n.x)*d,W=(q.clientY-n.y)*d,ae=o.width*f,re=o.height*f,te=l.slideWidth,le=l.slideHeight,_=Math.min(te/2-ae/2,0),Q=-_,ge=Math.min(le/2-re/2,0),Me=-ge,pe=Math.max(Math.min(o.startX+G,Q),_),fe=Math.max(Math.min(o.startY+W,Me),ge);l.imageWrapEl.style.transitionDuration="0ms",l.imageWrapEl.style.transform=`translate3d(${pe}px, ${fe}px, 0)`,n.x=q.clientX,n.y=q.clientY,o.startX=pe,o.startY=fe,o.currentX=pe,o.currentY=fe}function B(q){const A=e.zoom,D=e.params.zoom;if(!l.slideEl){q&&q.target&&(l.slideEl=q.target.closest(`.${e.params.slideClass}, swiper-slide`)),l.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.slideEl=F(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:l.slideEl=e.slides[e.activeIndex]);let we=l.slideEl.querySelector(`.${D.containerClass}`);we&&(we=we.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=we,we?l.imageWrapEl=de(l.imageEl,`.${D.containerClass}`)[0]:l.imageWrapEl=void 0}if(!l.imageEl||!l.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),l.slideEl.classList.add(`${D.zoomedSlideClass}`);let G,W,ae,re,te,le,_,Q,ge,Me,pe,fe,Le,je,Ae,ze,qe,Oe;typeof o.touchesStart.x>"u"&&q?(G=q.pageX,W=q.pageY):(G=o.touchesStart.x,W=o.touchesStart.y);const De=f,ue=typeof q=="number"?q:null;f===1&&ue&&(G=void 0,W=void 0,o.touchesStart.x=void 0,o.touchesStart.y=void 0);const Je=m();A.scale=ue||Je,f=ue||Je,q&&!(f===1&&ue)?(qe=l.slideEl.offsetWidth,Oe=l.slideEl.offsetHeight,ae=Ce(l.slideEl).left+r.scrollX,re=Ce(l.slideEl).top+r.scrollY,te=ae+qe/2-G,le=re+Oe/2-W,ge=l.imageEl.offsetWidth||l.imageEl.clientWidth,Me=l.imageEl.offsetHeight||l.imageEl.clientHeight,pe=ge*A.scale,fe=Me*A.scale,Le=Math.min(qe/2-pe/2,0),je=Math.min(Oe/2-fe/2,0),Ae=-Le,ze=-je,De>0&&ue&&typeof o.currentX=="number"&&typeof o.currentY=="number"?(_=o.currentX*A.scale/De,Q=o.currentY*A.scale/De):(_=te*A.scale,Q=le*A.scale),_<Le&&(_=Le),_>Ae&&(_=Ae),Q<je&&(Q=je),Q>ze&&(Q=ze)):(_=0,Q=0),ue&&A.scale===1&&(l.originX=0,l.originY=0),o.currentX=_,o.currentY=Q,l.imageWrapEl.style.transitionDuration="300ms",l.imageWrapEl.style.transform=`translate3d(${_}px, ${Q}px,0)`,l.imageEl.style.transitionDuration="300ms",l.imageEl.style.transform=`translate3d(0,0,0) scale(${A.scale})`}function Y(){const q=e.zoom,A=e.params.zoom;if(!l.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.slideEl=F(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:l.slideEl=e.slides[e.activeIndex];let D=l.slideEl.querySelector(`.${A.containerClass}`);D&&(D=D.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=D,D?l.imageWrapEl=de(l.imageEl,`.${A.containerClass}`)[0]:l.imageWrapEl=void 0}!l.imageEl||!l.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),q.scale=1,f=1,o.currentX=void 0,o.currentY=void 0,o.touchesStart.x=void 0,o.touchesStart.y=void 0,l.imageWrapEl.style.transitionDuration="300ms",l.imageWrapEl.style.transform="translate3d(0,0,0)",l.imageEl.style.transitionDuration="300ms",l.imageEl.style.transform="translate3d(0,0,0) scale(1)",l.slideEl.classList.remove(`${A.zoomedSlideClass}`),l.slideEl=void 0,l.originX=0,l.originY=0,e.params.zoom.panOnMouseMove&&(n={x:0,y:0},c&&(c=!1,o.startX=0,o.startY=0)))}function X(q){const A=e.zoom;A.scale&&A.scale!==1?Y():B(q)}function R(){const q=e.params.passiveListeners?{passive:!0,capture:!1}:!1,A=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:q,activeListenerWithCapture:A}}function ee(){const q=e.zoom;if(q.enabled)return;q.enabled=!0;const{passiveListener:A,activeListenerWithCapture:D}=R();e.wrapperEl.addEventListener("pointerdown",P,A),e.wrapperEl.addEventListener("pointermove",L,D),["pointerup","pointercancel","pointerout"].forEach(G=>{e.wrapperEl.addEventListener(G,M,A)}),e.wrapperEl.addEventListener("pointermove",z,D)}function xe(){const q=e.zoom;if(!q.enabled)return;q.enabled=!1;const{passiveListener:A,activeListenerWithCapture:D}=R();e.wrapperEl.removeEventListener("pointerdown",P,A),e.wrapperEl.removeEventListener("pointermove",L,D),["pointerup","pointercancel","pointerout"].forEach(G=>{e.wrapperEl.removeEventListener(G,M,A)}),e.wrapperEl.removeEventListener("pointermove",z,D)}i("init",()=>{e.params.zoom.enabled&&ee()}),i("destroy",()=>{xe()}),i("touchStart",(q,A)=>{e.zoom.enabled&&C(A)}),i("touchEnd",(q,A)=>{e.zoom.enabled&&O()}),i("doubleTap",(q,A)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&X(A)}),i("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&S()}),i("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&S()}),Object.assign(e.zoom,{enable:ee,disable:xe,in:B,out:Y,toggle:X})}function Ns(s){let{swiper:e,extendParams:t,on:i}=s;t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function a(n,d){const u=function(){let o,g,w;return(v,m)=>{for(g=-1,o=v.length;o-g>1;)w=o+g>>1,v[w]<=m?g=w:o=w;return o}}();this.x=n,this.y=d,this.lastIndex=n.length-1;let x,h;return this.interpolate=function(o){return o?(h=u(this.x,o),x=h-1,(o-this.x[x])*(this.y[h]-this.y[x])/(this.x[h]-this.x[x])+this.y[x]):0},this}function r(n){e.controller.spline=e.params.loop?new a(e.slidesGrid,n.slidesGrid):new a(e.snapGrid,n.snapGrid)}function f(n,d){const u=e.controller.control;let x,h;const l=e.constructor;function o(g){if(g.destroyed)return;const w=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(r(g),h=-e.controller.spline.interpolate(-w)),(!h||e.params.controller.by==="container")&&(x=(g.maxTranslate()-g.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(x)||!Number.isFinite(x))&&(x=1),h=(w-e.minTranslate())*x+g.minTranslate()),e.params.controller.inverse&&(h=g.maxTranslate()-h),g.updateProgress(h),g.setTranslate(h,e),g.updateActiveIndex(),g.updateSlidesClasses()}if(Array.isArray(u))for(let g=0;g<u.length;g+=1)u[g]!==d&&u[g]instanceof l&&o(u[g]);else u instanceof l&&d!==u&&o(u)}function p(n,d){const u=e.constructor,x=e.controller.control;let h;function l(o){o.destroyed||(o.setTransition(n,e),n!==0&&(o.transitionStart(),o.params.autoHeight&&me(()=>{o.updateAutoHeight()}),Se(o.wrapperEl,()=>{x&&o.transitionEnd()})))}if(Array.isArray(x))for(h=0;h<x.length;h+=1)x[h]!==d&&x[h]instanceof u&&l(x[h]);else x instanceof u&&d!==x&&l(x)}function c(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}i("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(d=>{if(e.controller.control||(e.controller.control=[]),d&&d.swiper)e.controller.control.push(d.swiper);else if(d){const u=`${e.params.eventsPrefix}init`,x=h=>{e.controller.control.push(h.detail[0]),e.update(),d.removeEventListener(u,x)};d.addEventListener(u,x)}});return}e.controller.control=e.params.controller.control}),i("update",()=>{c()}),i("resize",()=>{c()}),i("observerUpdate",()=>{c()}),i("setTranslate",(n,d,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(d,u)}),i("setTransition",(n,d,u)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(d,u)}),Object.assign(e.controller,{setTranslate:f,setTransition:p})}function Xs(s){let{swiper:e,extendParams:t,on:i}=s;t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let a=null,r,f,p=new Date().getTime();function c(S){const E=a;E.length!==0&&ie(E,S)}function n(S){const E=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(S).replace(/x/g,E)}function d(S){S=H(S),S.forEach(E=>{E.setAttribute("tabIndex","0")})}function u(S){S=H(S),S.forEach(E=>{E.setAttribute("tabIndex","-1")})}function x(S,E){S=H(S),S.forEach(B=>{B.setAttribute("role",E)})}function h(S,E){S=H(S),S.forEach(B=>{B.setAttribute("aria-roledescription",E)})}function l(S,E){S=H(S),S.forEach(B=>{B.setAttribute("aria-controls",E)})}function o(S,E){S=H(S),S.forEach(B=>{B.setAttribute("aria-label",E)})}function g(S,E){S=H(S),S.forEach(B=>{B.setAttribute("id",E)})}function w(S,E){S=H(S),S.forEach(B=>{B.setAttribute("aria-live",E)})}function v(S){S=H(S),S.forEach(E=>{E.setAttribute("aria-disabled",!0)})}function m(S){S=H(S),S.forEach(E=>{E.setAttribute("aria-disabled",!1)})}function y(S){if(S.keyCode!==13&&S.keyCode!==32)return;const E=e.params.a11y,B=S.target;if(!(e.pagination&&e.pagination.el&&(B===e.pagination.el||e.pagination.el.contains(S.target))&&!S.target.matches(se(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const Y=H(e.navigation.prevEl);H(e.navigation.nextEl).includes(B)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?c(E.lastSlideMessage):c(E.nextSlideMessage)),Y.includes(B)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?c(E.firstSlideMessage):c(E.prevSlideMessage))}e.pagination&&B.matches(se(e.params.pagination.bulletClass))&&B.click()}}function b(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:S,prevEl:E}=e.navigation;E&&(e.isBeginning?(v(E),u(E)):(m(E),d(E))),S&&(e.isEnd?(v(S),u(S)):(m(S),d(S)))}function I(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function T(){return I()&&e.params.pagination.clickable}function P(){const S=e.params.a11y;I()&&e.pagination.bullets.forEach(E=>{e.params.pagination.clickable&&(d(E),e.params.pagination.renderBullet||(x(E,"button"),o(E,S.paginationBulletMessage.replace(/\{\{index\}\}/,Ee(E)+1)))),E.matches(se(e.params.pagination.bulletActiveClass))?E.setAttribute("aria-current","true"):E.removeAttribute("aria-current")})}const L=(S,E,B)=>{d(S),S.tagName!=="BUTTON"&&(x(S,"button"),S.addEventListener("keydown",y)),o(S,B),l(S,E)},M=S=>{f&&f!==S.target&&!f.contains(S.target)&&(r=!0),e.a11y.clicked=!0},$=()=>{r=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},k=S=>{p=new Date().getTime()},j=S=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-p<100)return;const E=S.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!E||!e.slides.includes(E))return;f=E;const B=e.slides.indexOf(E)===e.activeIndex,Y=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(E);B||Y||S.sourceCapabilities&&S.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{r||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(E.getAttribute("data-swiper-slide-index"))),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(E)),0),r=!1)}))},C=()=>{const S=e.params.a11y;S.itemRoleDescriptionMessage&&h(e.slides,S.itemRoleDescriptionMessage),S.slideRole&&x(e.slides,S.slideRole);const E=e.slides.length;S.slideLabelMessage&&e.slides.forEach((B,Y)=>{const X=e.params.loop?parseInt(B.getAttribute("data-swiper-slide-index"),10):Y,R=S.slideLabelMessage.replace(/\{\{index\}\}/,X+1).replace(/\{\{slidesLength\}\}/,E);o(B,R)})},z=()=>{const S=e.params.a11y;e.el.append(a);const E=e.el;S.containerRoleDescriptionMessage&&h(E,S.containerRoleDescriptionMessage),S.containerMessage&&o(E,S.containerMessage),S.containerRole&&x(E,S.containerRole);const B=e.wrapperEl,Y=S.id||B.getAttribute("id")||`swiper-wrapper-${n(16)}`,X=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";g(B,Y),w(B,X),C();let{nextEl:R,prevEl:ee}=e.navigation?e.navigation:{};R=H(R),ee=H(ee),R&&R.forEach(q=>L(q,Y,S.nextSlideMessage)),ee&&ee.forEach(q=>L(q,Y,S.prevSlideMessage)),T()&&H(e.pagination.el).forEach(A=>{A.addEventListener("keydown",y)}),V().addEventListener("visibilitychange",k),e.el.addEventListener("focus",j,!0),e.el.addEventListener("focus",j,!0),e.el.addEventListener("pointerdown",M,!0),e.el.addEventListener("pointerup",$,!0)};function O(){a&&a.remove();let{nextEl:S,prevEl:E}=e.navigation?e.navigation:{};S=H(S),E=H(E),S&&S.forEach(Y=>Y.removeEventListener("keydown",y)),E&&E.forEach(Y=>Y.removeEventListener("keydown",y)),T()&&H(e.pagination.el).forEach(X=>{X.removeEventListener("keydown",y)}),V().removeEventListener("visibilitychange",k),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",j,!0),e.el.removeEventListener("pointerdown",M,!0),e.el.removeEventListener("pointerup",$,!0))}i("beforeInit",()=>{a=Z("span",e.params.a11y.notificationClass),a.setAttribute("aria-live","assertive"),a.setAttribute("aria-atomic","true")}),i("afterInit",()=>{e.params.a11y.enabled&&z()}),i("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&C()}),i("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&b()}),i("paginationUpdate",()=>{e.params.a11y.enabled&&P()}),i("destroy",()=>{e.params.a11y.enabled&&O()})}function Rs(s){let{swiper:e,extendParams:t,on:i}=s;t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let a=!1,r={};const f=h=>h.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),p=h=>{const l=N();let o;h?o=new URL(h):o=l.location;const g=o.pathname.slice(1).split("/").filter(y=>y!==""),w=g.length,v=g[w-2],m=g[w-1];return{key:v,value:m}},c=(h,l)=>{const o=N();if(!a||!e.params.history.enabled)return;let g;e.params.url?g=new URL(e.params.url):g=o.location;const w=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${l}"]`):e.slides[l];let v=f(w.getAttribute("data-history"));if(e.params.history.root.length>0){let y=e.params.history.root;y[y.length-1]==="/"&&(y=y.slice(0,y.length-1)),v=`${y}/${h?`${h}/`:""}${v}`}else g.pathname.includes(h)||(v=`${h?`${h}/`:""}${v}`);e.params.history.keepQuery&&(v+=g.search);const m=o.history.state;m&&m.value===v||(e.params.history.replaceState?o.history.replaceState({value:v},null,v):o.history.pushState({value:v},null,v))},n=(h,l,o)=>{if(l)for(let g=0,w=e.slides.length;g<w;g+=1){const v=e.slides[g];if(f(v.getAttribute("data-history"))===l){const y=e.getSlideIndex(v);e.slideTo(y,h,o)}}else e.slideTo(0,h,o)},d=()=>{r=p(e.params.url),n(e.params.speed,r.value,!1)},u=()=>{const h=N();if(e.params.history){if(!h.history||!h.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(a=!0,r=p(e.params.url),!r.key&&!r.value){e.params.history.replaceState||h.addEventListener("popstate",d);return}n(0,r.value,e.params.runCallbacksOnInit),e.params.history.replaceState||h.addEventListener("popstate",d)}},x=()=>{const h=N();e.params.history.replaceState||h.removeEventListener("popstate",d)};i("init",()=>{e.params.history.enabled&&u()}),i("destroy",()=>{e.params.history.enabled&&x()}),i("transitionEnd _freeModeNoMomentumRelease",()=>{a&&c(e.params.history.key,e.activeIndex)}),i("slideChange",()=>{a&&e.params.cssMode&&c(e.params.history.key,e.activeIndex)})}function Vs(s){let{swiper:e,extendParams:t,emit:i,on:a}=s,r=!1;const f=V(),p=N();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(x,h){if(e.virtual&&e.params.virtual.enabled){const l=e.slides.find(g=>g.getAttribute("data-hash")===h);return l?parseInt(l.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(F(e.slidesEl,`.${e.params.slideClass}[data-hash="${h}"], swiper-slide[data-hash="${h}"]`)[0])}}});const c=()=>{i("hashChange");const x=f.location.hash.replace("#",""),h=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],l=h?h.getAttribute("data-hash"):"";if(x!==l){const o=e.params.hashNavigation.getSlideIndex(e,x);if(typeof o>"u"||Number.isNaN(o))return;e.slideTo(o)}},n=()=>{if(!r||!e.params.hashNavigation.enabled)return;const x=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],h=x?x.getAttribute("data-hash")||x.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&p.history&&p.history.replaceState?(p.history.replaceState(null,null,`#${h}`||""),i("hashSet")):(f.location.hash=h||"",i("hashSet"))},d=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;r=!0;const x=f.location.hash.replace("#","");if(x){const l=e.params.hashNavigation.getSlideIndex(e,x);e.slideTo(l||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&p.addEventListener("hashchange",c)},u=()=>{e.params.hashNavigation.watchState&&p.removeEventListener("hashchange",c)};a("init",()=>{e.params.hashNavigation.enabled&&d()}),a("destroy",()=>{e.params.hashNavigation.enabled&&u()}),a("transitionEnd _freeModeNoMomentumRelease",()=>{r&&n()}),a("slideChange",()=>{r&&e.params.cssMode&&n()})}function Fs(s){let{swiper:e,extendParams:t,on:i,emit:a,params:r}=s;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f,p,c=r&&r.autoplay?r.autoplay.delay:3e3,n=r&&r.autoplay?r.autoplay.delay:3e3,d,u=new Date().getTime(),x,h,l,o,g,w,v;function m(E){!e||e.destroyed||!e.wrapperEl||E.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(v||E.detail&&E.detail.bySwiperTouchMove)&&M())}const y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?x=!0:x&&(n=d,x=!1);const E=e.autoplay.paused?d:u+n-new Date().getTime();e.autoplay.timeLeft=E,a("autoplayTimeLeft",E,E/c),p=requestAnimationFrame(()=>{y()})},b=()=>{let E;return e.virtual&&e.params.virtual.enabled?E=e.slides.find(Y=>Y.classList.contains("swiper-slide-active")):E=e.slides[e.activeIndex],E?parseInt(E.getAttribute("data-swiper-autoplay"),10):void 0},I=E=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(p),y();let B=typeof E>"u"?e.params.autoplay.delay:E;c=e.params.autoplay.delay,n=e.params.autoplay.delay;const Y=b();!Number.isNaN(Y)&&Y>0&&typeof E>"u"&&(B=Y,c=Y,n=Y),d=B;const X=e.params.speed,R=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(X,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,X,!0,!0),a("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(X,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,X,!0,!0),a("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{I()})))};return B>0?(clearTimeout(f),f=setTimeout(()=>{R()},B)):requestAnimationFrame(()=>{R()}),B},T=()=>{u=new Date().getTime(),e.autoplay.running=!0,I(),a("autoplayStart")},P=()=>{e.autoplay.running=!1,clearTimeout(f),cancelAnimationFrame(p),a("autoplayStop")},L=(E,B)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(f),E||(w=!0);const Y=()=>{a("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):M()};if(e.autoplay.paused=!0,B){g&&(d=e.params.autoplay.delay),g=!1,Y();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),Y())},M=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),w?(w=!1,I(d)):I(),e.autoplay.paused=!1,a("autoplayResume"))},$=()=>{if(e.destroyed||!e.autoplay.running)return;const E=V();E.visibilityState==="hidden"&&(w=!0,L(!0)),E.visibilityState==="visible"&&M()},k=E=>{E.pointerType==="mouse"&&(w=!0,v=!0,!(e.animating||e.autoplay.paused)&&L(!0))},j=E=>{E.pointerType==="mouse"&&(v=!1,e.autoplay.paused&&M())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",k),e.el.addEventListener("pointerleave",j))},z=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",k),e.el.removeEventListener("pointerleave",j))},O=()=>{V().addEventListener("visibilitychange",$)},S=()=>{V().removeEventListener("visibilitychange",$)};i("init",()=>{e.params.autoplay.enabled&&(C(),O(),T())}),i("destroy",()=>{z(),S(),e.autoplay.running&&P()}),i("_freeModeStaticRelease",()=>{(l||w)&&M()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?P():L(!0,!0)}),i("beforeTransitionStart",(E,B,Y)=>{e.destroyed||!e.autoplay.running||(Y||!e.params.autoplay.disableOnInteraction?L(!0,!0):P())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){P();return}h=!0,l=!1,w=!1,o=setTimeout(()=>{w=!0,l=!0,L(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(o),clearTimeout(f),e.params.autoplay.disableOnInteraction){l=!1,h=!1;return}l&&e.params.cssMode&&M(),l=!1,h=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(g=!0)}),Object.assign(e.autoplay,{start:T,stop:P,pause:L,resume:M})}function Ws(s){let{swiper:e,extendParams:t,on:i}=s;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,r=!1;e.thumbs={swiper:null};function f(){const n=e.thumbs.swiper;if(!n||n.destroyed)return;const d=n.clickedIndex,u=n.clickedSlide;if(u&&u.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof d>"u"||d===null)return;let x;n.params.loop?x=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10):x=d,e.params.loop?e.slideToLoop(x):e.slideTo(x)}function p(){const{thumbs:n}=e.params;if(a)return!1;a=!0;const d=e.constructor;if(n.swiper instanceof d){if(n.swiper.destroyed)return a=!1,!1;e.thumbs.swiper=n.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(ye(n.swiper)){const u=Object.assign({},n.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new d(u),r=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",f),!0}function c(n){const d=e.thumbs.swiper;if(!d||d.destroyed)return;const u=d.params.slidesPerView==="auto"?d.slidesPerViewDynamic():d.params.slidesPerView;let x=1;const h=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(x=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(x=1),x=Math.floor(x),d.slides.forEach(g=>g.classList.remove(h)),d.params.loop||d.params.virtual&&d.params.virtual.enabled)for(let g=0;g<x;g+=1)F(d.slidesEl,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(w=>{w.classList.add(h)});else for(let g=0;g<x;g+=1)d.slides[e.realIndex+g]&&d.slides[e.realIndex+g].classList.add(h);const l=e.params.thumbs.autoScrollOffset,o=l&&!d.params.loop;if(e.realIndex!==d.realIndex||o){const g=d.activeIndex;let w,v;if(d.params.loop){const m=d.slides.find(y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);w=d.slides.indexOf(m),v=e.activeIndex>e.previousIndex?"next":"prev"}else w=e.realIndex,v=w>e.previousIndex?"next":"prev";o&&(w+=v==="next"?l:-1*l),d.visibleSlidesIndexes&&d.visibleSlidesIndexes.indexOf(w)<0&&(d.params.centeredSlides?w>g?w=w-Math.floor(u/2)+1:w=w+Math.floor(u/2)-1:w>g&&d.params.slidesPerGroup,d.slideTo(w,n?0:void 0))}}i("beforeInit",()=>{const{thumbs:n}=e.params;if(!(!n||!n.swiper))if(typeof n.swiper=="string"||n.swiper instanceof HTMLElement){const d=V(),u=()=>{const h=typeof n.swiper=="string"?d.querySelector(n.swiper):n.swiper;if(h&&h.swiper)n.swiper=h.swiper,p(),c(!0);else if(h){const l=`${e.params.eventsPrefix}init`,o=g=>{n.swiper=g.detail[0],h.removeEventListener(l,o),p(),c(!0),n.swiper.update(),e.update()};h.addEventListener(l,o)}return h},x=()=>{if(e.destroyed)return;u()||requestAnimationFrame(x)};requestAnimationFrame(x)}else p(),c(!0)}),i("slideChange update resize observerUpdate",()=>{c()}),i("setTransition",(n,d)=>{const u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(d)}),i("beforeDestroy",()=>{const n=e.thumbs.swiper;!n||n.destroyed||r&&n.destroy()}),Object.assign(e.thumbs,{init:p,update:c})}function _s(s){let{swiper:e,extendParams:t,emit:i,once:a}=s;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function r(){if(e.params.cssMode)return;const c=e.getTranslate();e.setTranslate(c),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function f(){if(e.params.cssMode)return;const{touchEventsData:c,touches:n}=e;c.velocities.length===0&&c.velocities.push({position:n[e.isHorizontal()?"startX":"startY"],time:c.touchStartTime}),c.velocities.push({position:n[e.isHorizontal()?"currentX":"currentY"],time:J()})}function p(c){let{currentPos:n}=c;if(e.params.cssMode)return;const{params:d,wrapperEl:u,rtlTranslate:x,snapGrid:h,touchEventsData:l}=e,g=J()-l.touchStartTime;if(n<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(n>-e.maxTranslate()){e.slides.length<h.length?e.slideTo(h.length-1):e.slideTo(e.slides.length-1);return}if(d.freeMode.momentum){if(l.velocities.length>1){const P=l.velocities.pop(),L=l.velocities.pop(),M=P.position-L.position,$=P.time-L.time;e.velocity=M/$,e.velocity/=2,Math.abs(e.velocity)<d.freeMode.minimumVelocity&&(e.velocity=0),($>150||J()-P.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=d.freeMode.momentumVelocityRatio,l.velocities.length=0;let w=1e3*d.freeMode.momentumRatio;const v=e.velocity*w;let m=e.translate+v;x&&(m=-m);let y=!1,b;const I=Math.abs(e.velocity)*20*d.freeMode.momentumBounceRatio;let T;if(m<e.maxTranslate())d.freeMode.momentumBounce?(m+e.maxTranslate()<-I&&(m=e.maxTranslate()-I),b=e.maxTranslate(),y=!0,l.allowMomentumBounce=!0):m=e.maxTranslate(),d.loop&&d.centeredSlides&&(T=!0);else if(m>e.minTranslate())d.freeMode.momentumBounce?(m-e.minTranslate()>I&&(m=e.minTranslate()+I),b=e.minTranslate(),y=!0,l.allowMomentumBounce=!0):m=e.minTranslate(),d.loop&&d.centeredSlides&&(T=!0);else if(d.freeMode.sticky){let P;for(let L=0;L<h.length;L+=1)if(h[L]>-m){P=L;break}Math.abs(h[P]-m)<Math.abs(h[P-1]-m)||e.swipeDirection==="next"?m=h[P]:m=h[P-1],m=-m}if(T&&a("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(x?w=Math.abs((-m-e.translate)/e.velocity):w=Math.abs((m-e.translate)/e.velocity),d.freeMode.sticky){const P=Math.abs((x?-m:m)-e.translate),L=e.slidesSizesGrid[e.activeIndex];P<L?w=d.speed:P<2*L?w=d.speed*1.5:w=d.speed*2.5}}else if(d.freeMode.sticky){e.slideToClosest();return}d.freeMode.momentumBounce&&y?(e.updateProgress(b),e.setTransition(w),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Se(u,()=>{!e||e.destroyed||!l.allowMomentumBounce||(i("momentumBounce"),e.setTransition(d.speed),setTimeout(()=>{e.setTranslate(b),Se(u,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(m),e.setTransition(w),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Se(u,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(m),e.updateActiveIndex(),e.updateSlidesClasses()}else if(d.freeMode.sticky){e.slideToClosest();return}else d.freeMode&&i("_freeModeNoMomentumRelease");(!d.freeMode.momentum||g>=d.longSwipesMs)&&(i("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:r,onTouchMove:f,onTouchEnd:p}})}function Us(s){let{swiper:e,extendParams:t,on:i}=s;t({grid:{rows:1,fill:"column"}});let a,r,f,p;const c=()=>{let o=e.params.spaceBetween;return typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o)),o},n=o=>{const{slidesPerView:g}=e.params,{rows:w,fill:v}=e.params.grid,m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:o.length;f=Math.floor(m/w),Math.floor(m/w)===m/w?a=m:a=Math.ceil(m/w)*w,g!=="auto"&&v==="row"&&(a=Math.max(a,g*w)),r=a/w},d=()=>{e.slides&&e.slides.forEach(o=>{o.swiperSlideGridSet&&(o.style.height="",o.style[e.getDirectionLabel("margin-top")]="")})},u=(o,g,w)=>{const{slidesPerGroup:v}=e.params,m=c(),{rows:y,fill:b}=e.params.grid,I=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:w.length;let T,P,L;if(b==="row"&&v>1){const M=Math.floor(o/(v*y)),$=o-y*v*M,k=M===0?v:Math.min(Math.ceil((I-M*y*v)/y),v);L=Math.floor($/k),P=$-L*k+M*v,T=P+L*a/y,g.style.order=T}else b==="column"?(P=Math.floor(o/y),L=o-P*y,(P>f||P===f&&L===y-1)&&(L+=1,L>=y&&(L=0,P+=1))):(L=Math.floor(o/r),P=o-L*r);g.row=L,g.column=P,g.style.height=`calc((100% - ${(y-1)*m}px) / ${y})`,g.style[e.getDirectionLabel("margin-top")]=L!==0?m&&`${m}px`:"",g.swiperSlideGridSet=!0},x=(o,g)=>{const{centeredSlides:w,roundLengths:v}=e.params,m=c(),{rows:y}=e.params.grid;if(e.virtualSize=(o+m)*a,e.virtualSize=Math.ceil(e.virtualSize/y)-m,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),w){const b=[];for(let I=0;I<g.length;I+=1){let T=g[I];v&&(T=Math.floor(T)),g[I]<e.virtualSize+g[0]&&b.push(T)}g.splice(0,g.length),g.push(...b)}},h=()=>{p=e.params.grid&&e.params.grid.rows>1},l=()=>{const{params:o,el:g}=e,w=o.grid&&o.grid.rows>1;p&&!w?(g.classList.remove(`${o.containerModifierClass}grid`,`${o.containerModifierClass}grid-column`),f=1,e.emitContainerClasses()):!p&&w&&(g.classList.add(`${o.containerModifierClass}grid`),o.grid.fill==="column"&&g.classList.add(`${o.containerModifierClass}grid-column`),e.emitContainerClasses()),p=w};i("init",h),i("update",l),e.grid={initSlides:n,unsetSlides:d,updateSlide:u,updateWrapperSize:x}}function Ks(s){const e=this,{params:t,slidesEl:i}=e;t.loop&&e.loopDestroy();const a=r=>{if(typeof r=="string"){const f=document.createElement("div");ie(f,r),i.append(f.children[0]),ie(f,"")}else i.append(r)};if(typeof s=="object"&&"length"in s)for(let r=0;r<s.length;r+=1)s[r]&&a(s[r]);else a(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update()}function Zs(s){const e=this,{params:t,activeIndex:i,slidesEl:a}=e;t.loop&&e.loopDestroy();let r=i+1;const f=p=>{if(typeof p=="string"){const c=document.createElement("div");ie(c,p),a.prepend(c.children[0]),ie(c,"")}else a.prepend(p)};if(typeof s=="object"&&"length"in s){for(let p=0;p<s.length;p+=1)s[p]&&f(s[p]);r=i+s.length}else f(s);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),e.slideTo(r,0,!1)}function Js(s,e){const t=this,{params:i,activeIndex:a,slidesEl:r}=t;let f=a;i.loop&&(f-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const p=t.slides.length;if(s<=0){t.prependSlide(e);return}if(s>=p){t.appendSlide(e);return}let c=f>s?f+1:f;const n=[];for(let d=p-1;d>=s;d-=1){const u=t.slides[d];u.remove(),n.unshift(u)}if(typeof e=="object"&&"length"in e){for(let d=0;d<e.length;d+=1)e[d]&&r.append(e[d]);c=f>s?f+e.length:f}else r.append(e);for(let d=0;d<n.length;d+=1)r.append(n[d]);t.recalcSlides(),i.loop&&t.loopCreate(),(!i.observer||t.isElement)&&t.update(),i.loop?t.slideTo(c+t.loopedSlides,0,!1):t.slideTo(c,0,!1)}function Qs(s){const e=this,{params:t,activeIndex:i}=e;let a=i;t.loop&&(a-=e.loopedSlides,e.loopDestroy());let r=a,f;if(typeof s=="object"&&"length"in s){for(let p=0;p<s.length;p+=1)f=s[p],e.slides[f]&&e.slides[f].remove(),f<r&&(r-=1);r=Math.max(r,0)}else f=s,e.slides[f]&&e.slides[f].remove(),f<r&&(r-=1),r=Math.max(r,0);e.recalcSlides(),t.loop&&e.loopCreate(),(!t.observer||e.isElement)&&e.update(),t.loop?e.slideTo(r+e.loopedSlides,0,!1):e.slideTo(r,0,!1)}function ei(){const s=this,e=[];for(let t=0;t<s.slides.length;t+=1)e.push(t);s.removeSlide(e)}function ti(s){let{swiper:e}=s;Object.assign(e,{appendSlide:Ks.bind(e),prependSlide:Zs.bind(e),addSlide:Js.bind(e),removeSlide:Qs.bind(e),removeAllSlides:ei.bind(e)})}function ve(s){const{effect:e,swiper:t,on:i,setTranslate:a,setTransition:r,overwriteParams:f,perspective:p,recreateShadows:c,getEffectParams:n}=s;i("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),p&&p()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const u=f?f():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),i("setTranslate _virtualUpdated",()=>{t.params.effect===e&&a()}),i("setTransition",(u,x)=>{t.params.effect===e&&r(x)}),i("transitionEnd",()=>{if(t.params.effect===e&&c){if(!n||!n().slideShadows)return;t.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(x=>x.remove())}),c()}});let d;i("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides&&t.slides.length&&(a(),d=!1)}))})}function Te(s,e){const t=ce(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function Ie(s){let{swiper:e,duration:t,transformElements:i,allSlides:a}=s;const{activeIndex:r}=e,f=p=>p.parentElement?p.parentElement:e.slides.find(n=>n.shadowRoot&&n.shadowRoot===p.parentNode);if(e.params.virtualTranslate&&t!==0){let p=!1,c;a?c=i:c=i.filter(n=>{const d=n.classList.contains("swiper-slide-transform")?f(n):n;return e.getSlideIndex(d)===r}),c.forEach(n=>{Se(n,()=>{if(p||!e||e.destroyed)return;p=!0,e.animating=!1;const d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(d)})})}}function si(s){let{swiper:e,extendParams:t,on:i}=s;t({fadeEffect:{crossFade:!1}}),ve({effect:"fade",swiper:e,on:i,setTranslate:()=>{const{slides:f}=e,p=e.params.fadeEffect;for(let c=0;c<f.length;c+=1){const n=e.slides[c];let u=-n.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let x=0;e.isHorizontal()||(x=u,u=0);const h=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(n.progress),0):1+Math.min(Math.max(n.progress,-1),0),l=Te(p,n);l.style.opacity=h,l.style.transform=`translate3d(${u}px, ${x}px, 0px)`}},setTransition:f=>{const p=e.slides.map(c=>ce(c));p.forEach(c=>{c.style.transitionDuration=`${f}ms`}),Ie({swiper:e,duration:f,transformElements:p,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ii(s){let{swiper:e,extendParams:t,on:i}=s;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const a=(c,n,d)=>{let u=d?c.querySelector(".swiper-slide-shadow-left"):c.querySelector(".swiper-slide-shadow-top"),x=d?c.querySelector(".swiper-slide-shadow-right"):c.querySelector(".swiper-slide-shadow-bottom");u||(u=Z("div",`swiper-slide-shadow-cube swiper-slide-shadow-${d?"left":"top"}`.split(" ")),c.append(u)),x||(x=Z("div",`swiper-slide-shadow-cube swiper-slide-shadow-${d?"right":"bottom"}`.split(" ")),c.append(x)),u&&(u.style.opacity=Math.max(-n,0)),x&&(x.style.opacity=Math.max(n,0))};ve({effect:"cube",swiper:e,on:i,setTranslate:()=>{const{el:c,wrapperEl:n,slides:d,width:u,height:x,rtlTranslate:h,size:l,browser:o}=e,g=Pe(e),w=e.params.cubeEffect,v=e.isHorizontal(),m=e.virtual&&e.params.virtual.enabled;let y=0,b;w.shadow&&(v?(b=e.wrapperEl.querySelector(".swiper-cube-shadow"),b||(b=Z("div","swiper-cube-shadow"),e.wrapperEl.append(b)),b.style.height=`${u}px`):(b=c.querySelector(".swiper-cube-shadow"),b||(b=Z("div","swiper-cube-shadow"),c.append(b))));for(let T=0;T<d.length;T+=1){const P=d[T];let L=T;m&&(L=parseInt(P.getAttribute("data-swiper-slide-index"),10));let M=L*90,$=Math.floor(M/360);h&&(M=-M,$=Math.floor(-M/360));const k=Math.max(Math.min(P.progress,1),-1);let j=0,C=0,z=0;L%4===0?(j=-$*4*l,z=0):(L-1)%4===0?(j=0,z=-$*4*l):(L-2)%4===0?(j=l+$*4*l,z=l):(L-3)%4===0&&(j=-l,z=3*l+l*4*$),h&&(j=-j),v||(C=j,j=0);const O=`rotateX(${g(v?0:-M)}deg) rotateY(${g(v?M:0)}deg) translate3d(${j}px, ${C}px, ${z}px)`;k<=1&&k>-1&&(y=L*90+k*90,h&&(y=-L*90-k*90)),P.style.transform=O,w.slideShadows&&a(P,k,v)}if(n.style.transformOrigin=`50% 50% -${l/2}px`,n.style["-webkit-transform-origin"]=`50% 50% -${l/2}px`,w.shadow)if(v)b.style.transform=`translate3d(0px, ${u/2+w.shadowOffset}px, ${-u/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${w.shadowScale})`;else{const T=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,P=1.5-(Math.sin(T*2*Math.PI/360)/2+Math.cos(T*2*Math.PI/360)/2),L=w.shadowScale,M=w.shadowScale/P,$=w.shadowOffset;b.style.transform=`scale3d(${L}, 1, ${M}) translate3d(0px, ${x/2+$}px, ${-x/2/M}px) rotateX(-89.99deg)`}const I=(o.isSafari||o.isWebView)&&o.needPerspectiveFix?-l/2:0;n.style.transform=`translate3d(0px,0,${I}px) rotateX(${g(e.isHorizontal()?0:y)}deg) rotateY(${g(e.isHorizontal()?-y:0)}deg)`,n.style.setProperty("--swiper-cube-translate-z",`${I}px`)},setTransition:c=>{const{el:n,slides:d}=e;if(d.forEach(u=>{u.style.transitionDuration=`${c}ms`,u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(x=>{x.style.transitionDuration=`${c}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const u=n.querySelector(".swiper-cube-shadow");u&&(u.style.transitionDuration=`${c}ms`)}},recreateShadows:()=>{const c=e.isHorizontal();e.slides.forEach(n=>{const d=Math.max(Math.min(n.progress,1),-1);a(n,d,c)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function he(s,e,t){const i=`swiper-slide-shadow${t?`-${t}`:""}${s?` swiper-slide-shadow-${s}`:""}`,a=ce(e);let r=a.querySelector(`.${i.split(" ").join(".")}`);return r||(r=Z("div",i.split(" ")),a.append(r)),r}function ai(s){let{swiper:e,extendParams:t,on:i}=s;t({flipEffect:{slideShadows:!0,limitRotation:!0}});const a=(c,n)=>{let d=e.isHorizontal()?c.querySelector(".swiper-slide-shadow-left"):c.querySelector(".swiper-slide-shadow-top"),u=e.isHorizontal()?c.querySelector(".swiper-slide-shadow-right"):c.querySelector(".swiper-slide-shadow-bottom");d||(d=he("flip",c,e.isHorizontal()?"left":"top")),u||(u=he("flip",c,e.isHorizontal()?"right":"bottom")),d&&(d.style.opacity=Math.max(-n,0)),u&&(u.style.opacity=Math.max(n,0))};ve({effect:"flip",swiper:e,on:i,setTranslate:()=>{const{slides:c,rtlTranslate:n}=e,d=e.params.flipEffect,u=Pe(e);for(let x=0;x<c.length;x+=1){const h=c[x];let l=h.progress;e.params.flipEffect.limitRotation&&(l=Math.max(Math.min(h.progress,1),-1));const o=h.swiperSlideOffset;let w=-180*l,v=0,m=e.params.cssMode?-o-e.translate:-o,y=0;e.isHorizontal()?n&&(w=-w):(y=m,m=0,v=-w,w=0),h.style.zIndex=-Math.abs(Math.round(l))+c.length,d.slideShadows&&a(h,l);const b=`translate3d(${m}px, ${y}px, 0px) rotateX(${u(v)}deg) rotateY(${u(w)}deg)`,I=Te(d,h);I.style.transform=b}},setTransition:c=>{const n=e.slides.map(d=>ce(d));n.forEach(d=>{d.style.transitionDuration=`${c}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${c}ms`})}),Ie({swiper:e,duration:c,transformElements:n})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(c=>{let n=c.progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(c.progress,1),-1)),a(c,n)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ri(s){let{swiper:e,extendParams:t,on:i}=s;t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ve({effect:"coverflow",swiper:e,on:i,setTranslate:()=>{const{width:f,height:p,slides:c,slidesSizesGrid:n}=e,d=e.params.coverflowEffect,u=e.isHorizontal(),x=e.translate,h=u?-x+f/2:-x+p/2,l=u?d.rotate:-d.rotate,o=d.depth,g=Pe(e);for(let w=0,v=c.length;w<v;w+=1){const m=c[w],y=n[w],b=m.swiperSlideOffset,I=(h-b-y/2)/y,T=typeof d.modifier=="function"?d.modifier(I):I*d.modifier;let P=u?l*T:0,L=u?0:l*T,M=-o*Math.abs(T),$=d.stretch;typeof $=="string"&&$.indexOf("%")!==-1&&($=parseFloat(d.stretch)/100*y);let k=u?0:$*T,j=u?$*T:0,C=1-(1-d.scale)*Math.abs(T);Math.abs(j)<.001&&(j=0),Math.abs(k)<.001&&(k=0),Math.abs(M)<.001&&(M=0),Math.abs(P)<.001&&(P=0),Math.abs(L)<.001&&(L=0),Math.abs(C)<.001&&(C=0);const z=`translate3d(${j}px,${k}px,${M}px)  rotateX(${g(L)}deg) rotateY(${g(P)}deg) scale(${C})`,O=Te(d,m);if(O.style.transform=z,m.style.zIndex=-Math.abs(Math.round(T))+1,d.slideShadows){let S=u?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),E=u?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");S||(S=he("coverflow",m,u?"left":"top")),E||(E=he("coverflow",m,u?"right":"bottom")),S&&(S.style.opacity=T>0?T:0),E&&(E.style.opacity=-T>0?-T:0)}}},setTransition:f=>{e.slides.map(c=>ce(c)).forEach(c=>{c.style.transitionDuration=`${f}ms`,c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(n=>{n.style.transitionDuration=`${f}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function li(s){let{swiper:e,extendParams:t,on:i}=s;t({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=p=>typeof p=="string"?p:`${p}px`;ve({effect:"creative",swiper:e,on:i,setTranslate:()=>{const{slides:p,wrapperEl:c,slidesSizesGrid:n}=e,d=e.params.creativeEffect,{progressMultiplier:u}=d,x=e.params.centeredSlides,h=Pe(e);if(x){const l=n[0]/2-e.params.slidesOffsetBefore||0;c.style.transform=`translateX(calc(50% - ${l}px))`}for(let l=0;l<p.length;l+=1){const o=p[l],g=o.progress,w=Math.min(Math.max(o.progress,-d.limitProgress),d.limitProgress);let v=w;x||(v=Math.min(Math.max(o.originalProgress,-d.limitProgress),d.limitProgress));const m=o.swiperSlideOffset,y=[e.params.cssMode?-m-e.translate:-m,0,0],b=[0,0,0];let I=!1;e.isHorizontal()||(y[1]=y[0],y[0]=0);let T={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};w<0?(T=d.next,I=!0):w>0&&(T=d.prev,I=!0),y.forEach((C,z)=>{y[z]=`calc(${C}px + (${a(T.translate[z])} * ${Math.abs(w*u)}))`}),b.forEach((C,z)=>{let O=T.rotate[z]*Math.abs(w*u);b[z]=O}),o.style.zIndex=-Math.abs(Math.round(g))+p.length;const P=y.join(", "),L=`rotateX(${h(b[0])}deg) rotateY(${h(b[1])}deg) rotateZ(${h(b[2])}deg)`,M=v<0?`scale(${1+(1-T.scale)*v*u})`:`scale(${1-(1-T.scale)*v*u})`,$=v<0?1+(1-T.opacity)*v*u:1-(1-T.opacity)*v*u,k=`translate3d(${P}) ${L} ${M}`;if(I&&T.shadow||!I){let C=o.querySelector(".swiper-slide-shadow");if(!C&&T.shadow&&(C=he("creative",o)),C){const z=d.shadowPerProgress?w*(1/d.limitProgress):w;C.style.opacity=Math.min(Math.max(Math.abs(z),0),1)}}const j=Te(d,o);j.style.transform=k,j.style.opacity=$,T.origin&&(j.style.transformOrigin=T.origin)}},setTransition:p=>{const c=e.slides.map(n=>ce(n));c.forEach(n=>{n.style.transitionDuration=`${p}ms`,n.querySelectorAll(".swiper-slide-shadow").forEach(d=>{d.style.transitionDuration=`${p}ms`})}),Ie({swiper:e,duration:p,transformElements:c,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function ni(s){let{swiper:e,extendParams:t,on:i}=s;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),ve({effect:"cards",swiper:e,on:i,setTranslate:()=>{const{slides:f,activeIndex:p,rtlTranslate:c}=e,n=e.params.cardsEffect,{startTranslate:d,isTouched:u}=e.touchEventsData,x=c?-e.translate:e.translate;for(let h=0;h<f.length;h+=1){const l=f[h],o=l.progress,g=Math.min(Math.max(o,-4),4);let w=l.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(w-=f[0].swiperSlideOffset);let v=e.params.cssMode?-w-e.translate:-w,m=0;const y=-100*Math.abs(g);let b=1,I=-n.perSlideRotate*g,T=n.perSlideOffset-Math.abs(g)*.75;const P=e.virtual&&e.params.virtual.enabled?e.virtual.from+h:h,L=(P===p||P===p-1)&&g>0&&g<1&&(u||e.params.cssMode)&&x<d,M=(P===p||P===p+1)&&g<0&&g>-1&&(u||e.params.cssMode)&&x>d;if(L||M){const C=(1-Math.abs((Math.abs(g)-.5)/.5))**.5;I+=-28*g*C,b+=-.5*C,T+=96*C,m=`${-25*C*Math.abs(g)}%`}if(g<0?v=`calc(${v}px ${c?"-":"+"} (${T*Math.abs(g)}%))`:g>0?v=`calc(${v}px ${c?"-":"+"} (-${T*Math.abs(g)}%))`:v=`${v}px`,!e.isHorizontal()){const C=m;m=v,v=C}const $=g<0?`${1+(1-b)*g}`:`${1-(1-b)*g}`,k=`
        translate3d(${v}, ${m}, ${y}px)
        rotateZ(${n.rotate?c?-I:I:0}deg)
        scale(${$})
      `;if(n.slideShadows){let C=l.querySelector(".swiper-slide-shadow");C||(C=he("cards",l)),C&&(C.style.opacity=Math.min(Math.max((Math.abs(g)-.5)/.5,0),1))}l.style.zIndex=-Math.abs(Math.round(o))+f.length;const j=Te(n,l);j.style.transform=k}},setTransition:f=>{const p=e.slides.map(c=>ce(c));p.forEach(c=>{c.style.transitionDuration=`${f}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(n=>{n.style.transitionDuration=`${f}ms`})}),Ie({swiper:e,duration:f,transformElements:p})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:e.params.cardsEffect.rotate?3:2,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}const oi=[zs,qs,Os,Ds,Bs,Ys,Hs,Gs,Ns,Xs,Rs,Vs,Fs,Ws,_s,Us,ti,si,ii,ai,ri,li,ni];U.use(oi);function rt(){document.querySelectorAll(".card").forEach(n=>{n.addEventListener("mouseenter",()=>{n.classList.add("purple-card")}),n.addEventListener("mouseleave",()=>{n.classList.remove("purple-card")})});let e=document.querySelector(".card1"),t=document.querySelector(".card2"),i=document.querySelector(".card3"),a=document.querySelector(".title-card");window.addEventListener("scroll",()=>{window.scrollY>1700?(e.classList.add("card11"),t.classList.add("card22"),i.classList.add("card33"),a.classList.add("title-card1")):(e.classList.remove("card11"),t.classList.remove("card22"),i.classList.remove("card33"),a.classList.remove("title-card1"));let n=document.querySelector(".card3-1"),d=document.querySelector(".card3-2"),u=document.querySelector(".card3-3"),x=document.querySelector(".text-three-card");window.scrollY>2407.199951171875?x.classList.add("text-three-card-add"):x.classList.remove("text-three-card-add"),window.scrollY>2479.199951171875?n.classList.add("three-Card1"):n.classList.remove("three-Card1"),window.scrollY>2794.39990234375?(d.classList.add("three-Card2"),u.classList.add("three-Card3")):(d.classList.remove("three-Card2"),u.classList.remove("three-Card3")),window.scrollY>3079.199951171875?u.classList.add("three-Card3"):u.classList.remove("three-Card3")});let r=document.querySelector(".darkMode"),f=document.querySelector(".articleMo"),p=document.querySelectorAll(".card-mo"),c=document.querySelectorAll(".textMO");r.addEventListener("click",()=>{r.firstElementChild.classList.toggle("hidden"),r.lastElementChild.classList.toggle("hidden"),f.classList.toggle("dark"),p.forEach(n=>{n.classList.toggle("header-mode-mo")}),c.forEach(n=>{n.classList.toggle("a-mode")})})}function di(){let s=document.querySelectorAll(".card"),e=document.querySelectorAll(".text-three-part");document.querySelector(".sun").addEventListener("click",()=>{s.forEach(i=>{i.classList.toggle("header-mode-mo")}),e.forEach(i=>{i.classList.toggle("a-mode"),console.log("ppppppppppppppp")})})}const ci=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).aboutMe.map(a=>`   <article class="w-[70%] h-[80%] " id="job">
        <div class="w-[100%] h-[18%]  flex justify-start items-end">
          <div class="w-[31%] h-[80%]  flex justify-center items-center title-card opacity-0">
            <span class="text-[47px] font-black !mb-[10px] !mr-[30px] duration-300 text-three-part">
              ${a.title}
            </span>
          </div>
        </div>
        <div class="w-[100%] h-[82%]  flex flex-row justify-center items-end gap-[30px]">
          <div class="card card1">
            <div class="w-[90%] h-[85%] flex flex-col">
              <div class="w-[100%] h-[40%]  flex justify-start items-center">
                <div class="w-[30%] h-[70%] flex justify-center items-center">
                  <div class="w-[75%] h-[85%] bg-orange-600 flex justify-center items-center rounded-[100px]">
                    <img class="w-[55%] h-[90%] !mr-[-3px]" src=${a.image} alt="">
                  </div>
                </div>
              </div>
              <div class="w-[100%] h-[15%]  flex justify-start items-center">
                <div class="w-[50%]  h-[70%] !mb-[5px] flex justify-center items-end"><span class="text-[25px] font-black !mb-[-2px] !ml-[7px] duration-300 text-three-part">${a.title2}</span></div>
              </div>
              <div class="w-[100%] h-[45%]  flex justify-center items-center">
                <div class="w-[91%] h-[88%]  !ml-[11px] !mb-[3px] flex justify-center items-start">
                  <p class="text-[14px] leading-[23px] text-stone-600 duration-300 text-three-part">
                   ${a.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

         <div class="card card2">
            <div class="w-[90%] h-[85%] flex flex-col">
              <div class="w-[100%] h-[40%]  flex justify-start items-center">
                <div class="w-[30%] h-[70%] flex justify-center items-center">
                  <div class="w-[75%] h-[85%] bg-purple-600 flex justify-center items-center rounded-[100px]">
                    <img class="w-[55%] h-[90%] !mr-[-3px]" src=${a.image2} alt="">
                  </div>
                </div>
              </div>
              <div class="w-[100%] h-[15%]  flex justify-start items-center">
                <div class="w-[50%]  h-[70%] !mb-[5px] flex justify-center items-end"><span class="text-[25px] font-black !mb-[-2px] !ml-[40px] duration-300 text-three-part">${a.title3}</span></div>
              </div>
              <div class="w-[100%] h-[45%]  flex justify-center items-center">
                <div class="w-[91%] h-[88%]  !ml-[11px] !mb-[3px] flex justify-center items-start">
                  <p class="text-[14px] leading-[23px] text-stone-600 duration-300 text-three-part">
                  ${a.description2}
                  </p>
                </div>
              </div>
            </div>
          </div>

<div class="card card3">
            <div class="w-[90%] h-[85%] flex flex-col">
              <div class="w-[100%] h-[40%]  flex justify-start items-center">
                <div class="w-[30%] h-[70%] flex justify-center items-center">
                  <div class="w-[75%] h-[85%] bg-green-600 flex justify-center items-center rounded-[100px]">
                    <img class="w-[55%] h-[90%] !mr-[-3px]" src=${a.image3} alt="">
                  </div>
                </div>
              </div>
              <div class="w-[100%] h-[15%]  flex justify-start items-center">
                <div class="w-[50%]  h-[70%] !mb-[5px] flex justify-center items-end"><span class="text-[25px] font-black !mb-[-2px] !ml-[100px] duration-300 text-three-part">${a.title4} </span></div>
              </div>
              <div class="w-[100%] h-[45%]  flex justify-center items-center">
                <div class="w-[91%] h-[88%]  !ml-[11px] !mb-[3px] flex justify-center items-start">
                  <p class="text-[14px] leading-[23px] text-stone-600 duration-300 text-three-part">
                  ${a.description3}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>`),document.querySelector(".article").innerHTML=s.join(""),rt(),di()}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).aboutMe.map(a=>` <div class="w-[92%] h-[100%]  flex flex-col items-center" id="aboutme">
      <div class="w-[100%] opacity-0 h-[10%] flex items-center justify-start text-three-card ">
        <span class="text-[35px] font-black !mr-[5px] textMO">${a.title}</span>
      </div>
      <div class="w-[100%] h-[2%] "></div>
      <div class="w-[100%] h-[86%]  flex flex-col items-center gap-[20px]">
        <div class="card-mo !mt-[3px] card3-1 opacity-0">
          <div class="w-[90%] h-[85%]">
            <div class="w-[100%] h-[35%]  flex justify-start items-center">
              <div class="w-[24%] h-[95%]  !mr-[10px] flex justify-center items-center rounded-[40px] bg-orange-600"><img class="!mb-[3px]" src="./public/images/services/ui-design.svg" alt=""></div>
            </div>
            <div class="w-[100%] h-[20%] flex justify-start items-center "> 
              <div class="w-[40%] h-[80%] flex justify-center items-end !mt-[5px] ">
                <span class="text-[20px] font-black !mr-[4px]  textMO">
${a.title2}
              </span>
            </div>
            </div>
            <div class="w-[100%] h-[45%]  flex justify-center items-center">
              <div class="w-[93%] h-[78%]  !mt-[5px]">
                <p class="text-[13px] text-stone-600 leading-[23px] textMO">
                  ${a.description}
                </p>
              </div>
            </div>
          </div>
        </div>
    
    <div class="card-mo !mt-[3px] card3-2 opacity-0">
          <div class="w-[90%] h-[85%]">
            <div class="w-[100%] h-[35%] flex justify-start items-center">
              <div class="w-[24%] h-[95%] !mr-[10px] flex justify-center items-center rounded-[40px] bg-purple-600"><img class="!mb-[3px]" src=${a.image2} alt=""></div>
            </div>
            <div class="w-[100%] h-[20%] flex justify-start items-center"> 
              <div class="w-[40%] h-[80%] flex justify-center items-end !mt-[5px] ">
                <span class="text-[20px] font-black !ml-[22px] textMO">
${a.title3}
              </span>
            </div>
            </div>
            <div class="w-[100%] h-[45%]  flex justify-center items-center">
              <div class="w-[93%] h-[78%]  !mt-[5px]">
                <p class="text-[13px] text-stone-600 leading-[23px] textMO">
                  ${a.description2}
                </p>
              </div>
            </div>
          </div>
        </div>

            <div class="card-mo !mt-[3px] card3-3 opacity-0">
          <div class="w-[90%] h-[85%]">
            <div class="w-[100%] h-[35%] flex justify-start items-center">
              <div class="w-[24%] h-[95%]  !mr-[10px] flex justify-center items-center rounded-[40px] bg-green-600"><img class="!mb-[3px]" src=${a.image3} alt=""></div>
            </div>
            <div class="w-[100%] h-[20%] flex justify-start items-center"> 
              <div class="w-[40%] h-[80%] flex justify-start items-end !mt-[5px] ">
                <span class="text-[20px] font-black !mr-[11px] textMO">
${a.title4}
              </span>
            </div>
            </div>
            <div class="w-[100%] h-[45%]  flex justify-center items-center">
              <div class="w-[93%] h-[78%]  !mt-[5px]">
                <p class="text-[13px] text-stone-600 leading-[23px] textMO">
                ${a.description3}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
     </div>`),document.querySelector(".articleMo").innerHTML=e.join(""),rt()}catch(t){console.log(t.message)}},pi=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).footer.map(a=>`   <footer class="w-[100%] h-[45.5vh]  bg-slate-950 flex flex-col">
     <div class="w-[100%] h-[60%] flex justify-center items-center bg-slate-950">
      <div class="w-[25%] h-[75%] flex flex-col  !mr-[30px] !mt-[40px] items-center">
        <div class="w-[80%] h-[55%]  flex justify-center items-center"><span class="text-white text-[25px] family-fo !mt-[15px] duration-1000 animate-bounce hover:text-purple-700">${a.titleend}</span></div>
        <div class="w-[95%] h-[45%]  flex items-end">
          <div class="w-[100%] h-[40%]  flex flex-row">
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${a.title}</a></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${a.title2}</a></div>
            <div class="w-[4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${a.title3}</a></div>
            <div class="w-[4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${a.title4}</a></div>
            <div class="w-[4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center "><a href="#" class="text-[14px] text-stone-50 duration-300 hover:text-stone-500">${a.title5}</a></div>
          </div>
        </div>
      </div>
    </div>
 
    <div class="w-[100%] h-[16.5%]  flex justify-center items-center">
      <div class="w-[67%] h-[100%]  !mr-[12px] border-solid border-[0.5px] border-stone-700 border-t-0 border-l-0 border-r-0"></div>
    </div>
    <div class="w-[100%] h-[22.5%] bg-slate-950 flex justify-center">
      <div class="w-[67%] h-[90%]  !mr-[12px] flex justify-center items-center">
        <div class="w-[25%] h-[100%]  flex justify-center items-center !mt-[10px] !ml-[-10px]">
          <div class="w-[79%] h-[60%]  flex flex-row justify-center items-center gap-[25px]">
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-pink-700 hover:translate-y-[-5px]"><img src=${a.icon1} class="w-[50%] " alt=""></div>
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-blue-700 hover:translate-y-[-5px]"><img src=${a.icon2} class="w-[50%]" alt=""></div>
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-purple-700 hover:translate-y-[-5px]"><img src=${a.icon3} alt=""></div>
            <div class="w-[18%] h-[81%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-orange-700 hover:translate-y-[-5px]"><img src=${a.icon4} class="w-[50%]" alt=""></div>
          </div>
        </div>
      </div>
    </div>

  </footer>`),document.querySelector(".footer-desktop").innerHTML=s.join("")}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).footer.map(a=>`   <footer class="w-[100%]  h-[100%] flex flex-col items-center">
      <div class="w-[91%] h-[66%]  border-solid border-[1px] border-stone-500 border-t-0 border-l-0 border-r-0 flex justify-center items-center">
        <div class="w-[95%] h-[45%]  !mr-[4px] flex flex-col">
          <div class="w-[100%] h-[70%]  flex justify-center ">
              <div class="w-[80%] h-[55%]  flex justify-center items-center"><span class="text-white text-[25px] family-fo !mt-[15px] duration-1000 animate-bounce hover:text-purple-700">${a.titleend}</span></div></div>
          <div class="w-[100%] h-[30%]  flex flex-row gap-[5px]">
            <div class="w-[15%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${a.title}</a></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${a.title2}</a></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${a.title3}</a></div>
              <div class="w-[0.4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${a.title4}</a></div>
            <div class="w-[0.4%] h-[100%]"></div>
            <div class="w-[20%] h-[100%]  flex justify-center items-center"><a href="#" class="text-[13.5px] text-stone-100 duration-300 hover:text-stone-500">${a.title5}</a></div>
          </div>
        </div>
      </div>
      <div class="w-[100%] h-[34%]  flex justify-center items-center">
        <div class="w-[60%] h-[40%]  !mt-[5px] !ml-[10px] flex flex-row justify-center items-center gap-[22px]">
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-pink-700 hover:translate-y-[-5px]"><img src=${a.icon1} class="w-[50%]" alt=""></div>
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-blue-700 hover:translate-y-[-5px]"><img src=${a.icon2} class="w-[50%]" alt=""></div>
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-purple-700 hover:translate-y-[-5px]"><img src=${a.icon3} alt=""></div>
          <div class="w-[15%] h-[78%] bg-stone-800 rounded-[50%] flex justify-center items-center duration-300 hover:bg-orange-700 hover:translate-y-[-5px]"><img src=${a.icon4} class="w-[50%]" alt=""></div>
        </div>
      </div>
    </footer>`),document.querySelector(".footer-mobile").innerHTML=e.join("")}catch(t){console.log(t.message)}};function fi(){let s=document.querySelector(".title-form-des"),e=document.querySelector(".input1"),t=document.querySelector(".input2"),i=document.querySelector(".input3"),a=document.querySelector(".input4"),r=document.querySelector(".input5");document.querySelector(".btn-form"),window.addEventListener("scroll",()=>{window.scrollY>4180?s.classList.add("login-animation1"):s.classList.remove("login-animation1"),window.scrollY>4300?(e.classList.add("login-animation1"),t.classList.add("login-animation2")):(e.classList.remove("login-animation1"),t.classList.remove("login-animation2")),window.scrollY>4414?(i.classList.add("login-animation3"),a.classList.add("login-animation4")):(i.classList.remove("login-animation3"),a.classList.remove("login-animation4")),window.scrollY>4520?r.classList.add("login-animation3"):r.classList.remove("login-animation3")});let f=document.querySelector(".sun"),p=document.querySelectorAll(".log-page-des"),c=document.querySelectorAll(".form-text"),n=document.querySelectorAll(".input-add");f.addEventListener("click",()=>{p.forEach(d=>{d.classList.toggle("header-mode-mo")}),c.forEach(d=>{d.classList.toggle("a-mode")}),n.forEach(d=>{d.classList.toggle("dark"),d.classList.toggle("border-purple-600")})})}function ui(){let s=document.querySelector(".call-title-mo"),e=document.querySelector(".input1Mo"),t=document.querySelector(".input2Mo"),i=document.querySelector(".input3Mo"),a=document.querySelector(".input4Mo"),r=document.querySelector(".input5Mo"),f=document.querySelector(".btn1Mo");window.addEventListener("scroll",()=>{window.scrollY>5474.39990234375?s.classList.add("login-animation1"):s.classList.remove("login-animation1"),window.scrollY>5586.39990234375?e.classList.add("login-animation1"):e.classList.remove("login-animation1"),window.scrollY>5687.2001953125?t.classList.add("login-animation1"):t.classList.remove("login-animation1"),window.scrollY>5790.39990234375?i.classList.add("login-animation1"):i.classList.remove("login-animation1"),window.scrollY>5887.2001953125?a.classList.add("login-animation1"):a.classList.remove("login-animation1"),window.scrollY>5984?r.classList.add("login-animation1"):r.classList.remove("login-animation1"),window.scrollY>6207.2001953125?f.classList.add("opac-btn"):f.classList.remove("opac-btn")});let p=document.querySelector(".darkMode"),c=document.querySelector(".formMolog"),n=document.querySelectorAll(".inp-mo"),d=document.querySelectorAll(".text-form");p.addEventListener("click",()=>{p.firstElementChild.classList.toggle("hidden"),p.lastElementChild.classList.toggle("hidden"),d.forEach(u=>{u.classList.toggle("a-mode")}),n.forEach(u=>{u.classList.toggle("dark")}),c.classList.toggle("header-mode-mo")})}const mi=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).form.map(a=>`  <div class="w-[66.4%] h-[95%]  flex flex-col justify-center items-center " id="call">
      <div class="w-[100%] h-[12%] flex justify-start">
        <div class="w-[30%] h-[60%]  flex justify-start items-center title-form-des opacity-0"><span class="!mb-[10px] text-[48px] font-bold form-text">${a.title}</span></div>
      </div>
      <div class="w-[100%] h-[92%] rounded-[5px] bg-stone-100 flex flex-col flex-wrap items-center  !mr-[4px] duration-300 log-page-des">
        <div class="w-[95%] h-[15%]  flex flex-row flex-wrap !mt-[30px]  ">
    <div class="w-[50%] h-[100%] input1   flex flex-col justify-center items-center ">
    <div class="w-[96%] h-[85%] !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="name" class="text-[13px] !mr-[1px] form-text">${a.titelinp1}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="email" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="name"></div>
    </div>
   </div>  
   <div class="w-[50%] h-[100%] input2  flex flex-col justify-center items-end">
    <div class="w-[96%] h-[85%]  !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="lastname" class="text-[13px] !mr-[1px] form-text">${a.titelinp2}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="lastname" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="lastname"></div>
    </div>
   </div>   
</div>
<!--#region space-->
<div class="w-[100%] h-[20px]"></div>
<!--#endregion space-->
        <div class="w-[95%]  h-[15%]  flex flex-row flex-wrap">
   <div class="w-[50%] h-[100%] input3 flex flex-col justify-center items-center">
    <div class="w-[96%] h-[85%]  !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="email" class="text-[13px] !mr-[1px] form-text">${a.titelinp3}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="email" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="email"></div>
    </div>
   </div>     
   <div class="w-[50%] h-[100%] input4 flex flex-col justify-center items-end">
    <div class="w-[96%] h-[85%]  !mt-[6px] flex flex-col">
      <div class="w-[100%] h-[30%] ">
        <div class="w-[5%] h-[100%] flex justify-start items-start"><label for="call" class="text-[13px] !mr-[1px] form-text">${a.titelinp4}</label></div>
      </div>
      <div class="w-[100%] h-[70%]  flex justify-center items-center"><input type="call" class="w-[100%] h-[90%] bg-stone-50 duration-300 rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 input-add outline-0" name="name" id="call"></div>
    </div>
   </div>   
</div>
<!--#region space-->
<div class="w-[100%] h-[20px]"></div>
<!--#endregion space-->
<div class="w-[95%] h-[40%]  flex justify-center items-center">
  <div class="w-[99%] h-[96%]  input5 flex flex-col opacity-0">
    <div class="w-[100%] h-[10%]  flex justify-start items-center">
      <div class="w-[5%] h-[90%]  flex justify-center items-center !mr-[3px]">
        <label for="text" class="text-[13px] translate-x-[6px] form-text">${a.titelinp5}</label>
      </div>
    </div>
    <textarea id="text" class="w-[100%] input-add h-[90%] bg-stone-50 rounded-[5px] border-solid border-[1px] border-gray-400 duration-300 hover:border-purple-600 outline-0"></textarea>
  </div>
</div>
<!--#region space-->
<div class="w-[100%] h-[20px]"></div>
<!--#endregion space-->
<div class="w-[100%] h-[12%] flex justify-start items-start">
  <button class="w-[15%] h-[70%] rounded-[5px] bg-purple-600 !mr-[32px] !mt-[10px] flex justify-center items-center duration-300 hover:translate-y-[-5px] active:scale-95 "><span class="text-[15px] text-white"> ${a.titelBtn1}</span></button>
</div>
      </div>
    </div>`),document.querySelector(".form").innerHTML=s.join(""),fi()}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).form.map(a=>` <div class="w-[90%] h-[100%]  flex flex-col  ">
      <div class="w-[100%] h-[10%]  flex justify-start items-center"><div class="w-[50%] h-[70%] opacity-0 call-title-mo"><span class="text-[35px] font-bold text-form">${a.title}</span></div>
    </div>
    <!--#region space-->
    <div class="w-[100%] h-[2.5%] "></div>
    <!--#endregion space-->
    <form action="login" class="w-[100%] h-[100%] bg-stone-100 flex justify-center items-center rounded-[8px] formMolog">
      <div class="w-[87%] h-[100%]  flex flex-col flex-wrap items-center">
        <div class="w-[100%] h-[2%]  "></div>
        <div class="w-[95%] h-[13.5%] input1Mo opacity-0  flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${a.titelinp1}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
               <div class="w-[95%] h-[13.5%] input2Mo opacity-0 flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${a.titelinp2}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
               <div class="w-[95%] h-[13.5%] input3Mo opacity-0 flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${a.titelinp3}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
               <div class="w-[95%] h-[13.5%] input4Mo opacity-0 flex justify-center items-end">
<div class="w-[100%] h-[80%]  flex flex-col">
  <div class="w-[100%] h-[40%]  flex justify-start items-center">
    <div class="w-[8%] h-[75%]  flex
     justify-center items-center"><label for="name" class="text-[12.5px] text-stone-800 font-bold duration-300 text-form">${a.titelinp4}</label></div>
  </div>
    <input type="name" id="name" class="w-[100%] inp-mo h-[60%] duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0">
</div>
        </div>
        <div class="w-[100%] h-[3%] "></div>
        <div class="w-[95%] h-[28%] input5Mo opacity-0 flex flex-col">
          <div class="w-[100%] h-[13%] flex  items-start "><label for="YourText" class="text-[12.5px] text-stone-800 font-bold !mb-[30px] duration-300 text-form">
            ${a.titelinp5}
  </label></div>
  <textarea name="text" id="YourText" class="w-[100%] h-[88%] resize-none duration-300 bg-slate-50  rounded-[3px] border-solid border-[1px] border-gray-400 hover:border-purple-600 outline-0 inp-mo">

  </textarea>
        </div>
        <div class="w-[100%] h-[13%] duration-900 translate-y-[-10px] flex opacity-0 btn1Mo justify-center items-center"><button class="w-[38%] h-[50%] bg-purple-600 rounded-[5px] !mt-[4px]  duration-300 active:scale-95 hover:translate-y-[-5px] "><span class="text-[13.5px] text-white">${a.titelBtn1}</span></button></div>
      </div>
    </form>
    </div>`),document.querySelector(".formMo").innerHTML=e.join(""),ui()}catch(t){console.log(t.message)}};function hi(){let s=document.querySelector(".about-line"),e=document.querySelector(".ser-line"),t=document.querySelector(".job-line"),i=document.querySelector(".call-line");document.querySelectorAll(".hov-div").forEach(T=>{T.addEventListener("mouseenter",()=>{T.dataset.link==="about"&&s.classList.add("about-line-w"),T.dataset.link==="servic"&&e.classList.add("servis"),T.dataset.link==="job"&&t.classList.add("job"),T.dataset.link==="call"&&i.classList.add("call")}),T.addEventListener("mouseleave",()=>{T.dataset.link==="about"&&s.classList.remove("about-line-w"),T.dataset.link==="servic"&&e.classList.remove("servis"),T.dataset.link==="job"&&t.classList.remove("job"),T.dataset.link==="call"&&i.classList.remove("call")})});let r=document.querySelector(".sun"),f=document.querySelector(".circle"),p=document.querySelector("html"),c=document.querySelector("body"),n=document.querySelector("header"),d=document.querySelectorAll("a"),u=document.querySelector(".back-sky"),x=document.querySelector(".black-btn"),h=document.querySelectorAll("h3"),l=document.querySelectorAll("h2"),o=document.querySelectorAll("p"),g=document.querySelector("h1"),w=document.querySelectorAll("span");r.addEventListener("click",()=>{f.classList.toggle("dark-move"),r.classList.toggle("back-dark"),p.classList.toggle("dark"),c.classList.toggle("dark"),n.classList.toggle("header-mode"),d.forEach(T=>{T.classList.toggle("a-mode")}),u.classList.toggle("dark"),x.classList.toggle("btn-mode"),g.classList.toggle("a-mode"),h.forEach(T=>{T.classList.toggle("a-mode")}),l.forEach(T=>{T.classList.toggle("a-mode")}),o.forEach(T=>{T.classList.toggle("a-mode")}),w.forEach(T=>{T.classList.toggle("a-mode")})});let v=document.querySelector(".underline1"),m=document.querySelector(".underline2"),y=document.querySelector(".underline3"),b=document.querySelector(".underline4"),I=document.querySelector(".underline5");window.addEventListener("scroll",()=>{window.scrollY>600?(v.classList.remove("w-[60%]"),v.classList.add("w-[0%]"),m.classList.add("about-line-w")):(v.classList.add("w-[60%]"),v.classList.remove("w-[0%]"),m.classList.remove("about-line-w")),window.scrollY>=2088.800048828125?(y.classList.add("servis"),m.classList.remove("about-line-w")):y.classList.remove("servis"),window.scrollY>2524.800048828125?(y.classList.remove("servis"),b.classList.add("job")):b.classList.remove("job"),window.scrollY>3942.39990234375?(b.classList.remove("job"),I.classList.add("call")):I.classList.remove("call")})}const vi=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).headerDesktop.map(a=>`  <div class="w-[50%] h-[60%] flex justify-center items-center ">
        <h2 class="text-[30px] headh2">
        ${a.title}  
        </h2>
      </div>`),document.querySelector(".api-header-text").innerHTML=s.join("")}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).headerDesktop.map(a=>`     <div class="navdiv w-[14%]">
           <div class="w-[55%] h-[100%]  flex justify-start items-center relative hov-div">
            <a href="#home" class="!mr-[7px]">${a.title1}</a>
            <div class="w-[60%] h-[2px] bg-purple-800 absolute right-[7px] top-[31px] duration-300 underline1"></div>
           </div>
          </div>
          <div class="navdiv">
          <div class="w-[85%] h-[100%] flex justify-start items-center relative hov-div " data-link="about">
            <a href="#aboutme" class="">${a.title2}</a>
            <div class="w-[0%] h-[2px] duration-300 bg-purple-800 absolute about-line  top-[31px]  underline2"></div>
           </div>
          </div>
          <div class="navdiv">
                <div class="w-[75%] h-[100%] flex justify-start items-center  relative !mr-[4px]  hov-div " data-link="servic">
            <a href="#job" class="">${a.title3}</a>
            <div class="w-[0%] h-[2px] bg-purple-800 duration-300 absolute ser-line  top-[31px] underline3"></div>
           </div>
          </div>
          <div class="navdiv ">
             <div class="w-[75%] h-[100%] flex justify-start items-center  relative !mr-[19px]  hov-div " data-link="job">
            <a href="#project" class="">${a.title4}</a>
            <div class="w-[0%] h-[2px] bg-purple-800 duration-300 absolute job-line  top-[31px] underline4"></div>
           </div>
          </div>
          <div class="navdiv w-[21%]">
                   <div class="w-[75%] h-[100%] flex justify-start items-center  relative !mr-[37px]  hov-div " data-link="call">
            <a href="#call" class="">${a.title5}</a>
            <div class="w-[0%] h-[2px] bg-purple-800 duration-300 absolute call-line  top-[31px] underline5"></div>
           </div>
          </div>
          <div class="w-[14%] h-[100%]  flex  justify-center items-center  translate-x-[-20px]">
            <div class="w-[80%] h-[70%] bg-stone-300 sun rounded-[30px] flex justify-end items-center duration-300 !mr-[10px]">
              <div class="w-[35%] h-[80%] bg-purple-700 rounded-[50px] circle duration-300 "></div>
            </div>
          </div>`),document.querySelector(".nav").innerHTML=e.join(""),hi()}catch(t){console.log(t.message)}};function xi(){document.querySelector(".underline22");let s=document.querySelector(".underline33"),e=document.querySelector(".underline44"),t=document.querySelector(".underline55"),i=document.querySelector(".underline66"),a=document.querySelectorAll(".hoverDiv");a.forEach(c=>{c.addEventListener("click",()=>{c.dataset.link==="underline22"&&window.scrollTo({top:100,behavior:"smooth"}),c.dataset.link==="underline33"&&window.scrollTo({top:656,behavior:"smooth"})}),c.addEventListener("mouseenter",()=>{c.dataset.link==="underline33"&&s.classList.add("w-[93%]"),c.dataset.link==="underline44"&&e.classList.add("w-[90%]"),c.dataset.link==="underline55"&&t.classList.add("w-[95%]"),c.dataset.link==="underline66"&&i.classList.add("w-[97%]")})}),a.forEach(c=>{c.addEventListener("mouseleave",()=>{c.dataset.link==="underline33"&&s.classList.remove("w-[93%]"),c.dataset.link==="underline44"&&e.classList.remove("w-[90%]"),c.dataset.link==="underline55"&&t.classList.remove("w-[95%]"),c.dataset.link==="underline66"&&i.classList.remove("w-[97%]")})});let r=document.querySelector(".darkMode"),f=document.querySelector(".header-text"),p=document.querySelector(".ABL-LINE");r.addEventListener("click",()=>{r.firstElementChild.classList.toggle("hidden"),r.lastElementChild.classList.toggle("hidden"),f.classList.toggle("a-mode");let c=document.querySelector(".hamburger");c.firstElementChild.classList.toggle("bgMode"),p.classList.toggle("bgMode"),c.lastElementChild.classList.toggle("bgMode")})}const gi=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).headerMobile.map(a=>`<div class="w-[100%] h-[70%]  flex justify-start items-center ">
        <h2 class="text-[25px] !mt-[15px] duration-300  header-text">
         ${a.title}
        </h2>
      </div>`),document.querySelector(".api-header-text-mo").innerHTML=s.join("")}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).headerMobile.map(a=>` <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[40%] h-[40%]   flex justify-end items-center relative hoverDiv" data-link="underline22"><a href="#home" class="text-[14px] text-stone-50 header-text">${a.title1}</a>
            <div class="w-[80%] duration-300 h-[1.6px] bg-purple-600 absolute  top-[26px] rounded-[5px] underline22"></div>  
              </div>
            </div>
                  <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[80%] h-[40%]  flex justify-end items-center relative hoverDiv" data-link="underline33" ><a href="#aboutme" class="text-[14px] text-stone-50 header-text">${a.title2}</a>
            <div class="w-[0%] h-[2px] bg-purple-600 duration-300 absolute underline33 top-[26px] rounded-[5px]"></div>  
              </div>
            </div>
                 <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[100%] h-[40%]  flex justify-end items-center relative hoverDiv" data-link="underline44"><a href="#home" class="text-[14px] text-stone-50 header-text">${a.title3}</a>
            <div class="w-[0%] h-[2px] duration-300 underline44 bg-purple-600 absolute  top-[26px] rounded-[5px]"></div>  
              </div>
            </div>
                <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[100%] h-[40%]  flex justify-end items-center relative hoverDiv " data-link="underline55"><a href="#home" class="text-[14px] text-stone-50 header-text">${a.title4}</a>
            <div class="w-[0%] h-[2px] duration-300 underline55 bg-purple-600 absolute  top-[26px] rounded-[5px]"></div>  
              </div>
            </div>
                <div class="w-[100%] h-[20%]  flex justify-end items-center"><div class="w-[100%] h-[40%]  flex justify-end items-center relative hoverDiv  " data-link="underline66"><a href="#aboutme" class="text-[14px] text-stone-50 header-text">${a.title5}</a>
            <div class="w-[0%] h-[1.5px] duration-300 underline66 bg-purple-600 absolute  top-[26px] rounded-[5px]"></div>  
              </div>
            </div>`),document.querySelector(".nav-mo").innerHTML=e.join(""),xi()}catch(t){console.log(t.message)}};let wi=()=>{let s=document.querySelector(".pur-text"),e=document.querySelectorAll(".ttb-pur"),t=document.querySelectorAll(".ttb-pur2"),i=document.querySelectorAll(".ttb-pur3"),a=document.querySelectorAll(".ttb-pur4"),r=document.querySelectorAll(".ddddd"),f=document.querySelectorAll(".dddddd"),p=document.querySelectorAll(".ddddddd"),c=document.querySelectorAll(".dddddddd");window.addEventListener("scroll",()=>{window.scrollY>1200?(s.classList.add("pur-text1"),e.forEach(d=>{d.classList.add("ttb-pur1")}),t.forEach(d=>{d.classList.add("ttb-pur22")}),i.forEach(d=>{d.classList.add("ttb-pur33")}),a.forEach(d=>{d.classList.add("ttb-pur44")}),r.forEach(d=>{d.classList.add("ddddd1")}),f.forEach(d=>{d.classList.add("dddddd2")}),p.forEach(d=>{d.classList.add("ddddddd3")}),c.forEach(d=>{d.classList.add("dddddddd4")})):(s.classList.remove("pur-text1"),e.forEach(d=>{d.classList.remove("ttb-pur1")}),t.forEach(d=>{d.classList.remove("ttb-pur22")}),i.forEach(d=>{d.classList.remove("ttb-pur33")}),a.forEach(d=>{d.classList.remove("ttb-pur44")}),r.forEach(d=>{d.classList.remove("ddddd1")}),f.forEach(d=>{d.classList.remove("dddddd2")}),p.forEach(d=>{d.classList.remove("ddddddd3")}),c.forEach(d=>{d.classList.remove("dddddddd4")}))}),document.querySelector(".sun").addEventListener("click",()=>{let d=document.querySelectorAll(".hh"),u=document.querySelector(".myskiils"),x=document.querySelectorAll(".add-black");d.forEach(h=>{h.classList.toggle("a-mode")}),x.forEach(h=>{h.classList.toggle("dark")}),u.classList.toggle("header-mode-mo")})},yi=()=>{let s=document.querySelector(".title-form"),e=document.querySelector(".ttb-pur1-mo"),t=document.querySelector(".ttb-pur22-mo"),i=document.querySelector(".ttb-pur33-mo"),a=document.querySelector(".ttb-pur44-mo"),r=document.querySelector(".ttb-pur55-mo"),f=document.querySelector(".ttb-pur66-mo"),p=document.querySelector(".ttb-pur77-mo"),c=document.querySelector(".ttb-pur88-mo");window.addEventListener("scroll",()=>{window.scrollY>1527.199951171875?s.classList.add("titleMO"):s.classList.remove("titleMO"),window.scrollY>1583?e.classList.add("login-animation1"):e.classList.remove("login-animation1"),window.scrollY>1670?t.classList.add("login-animation1"):t.classList.remove("login-animation1"),window.scrollY>1772.800048828125?i.classList.add("login-animation1"):i.classList.remove("login-animation1"),window.scrollY>1862?a.classList.add("login-animation1"):a.classList.remove("login-animation1"),window.scrollY>1952?r.classList.add("login-animation1"):r.classList.remove("login-animation1"),window.scrollY>2047.199951171875?f.classList.add("login-animation1"):f.classList.remove("login-animation1"),window.scrollY>2138.39990234375?p.classList.add("login-animation1"):p.classList.remove("login-animation1"),window.scrollY>2228?c.classList.add("login-animation1"):c.classList.remove("login-animation1")});let n=document.querySelector(".darkMode"),d=document.querySelectorAll(".h2Mo"),u=document.querySelectorAll(".addBlackMo"),x=document.querySelector(".myskillMo");n.addEventListener("click",()=>{n.firstElementChild.classList.toggle("hidden"),n.lastElementChild.classList.toggle("hidden"),d.forEach(h=>{h.classList.toggle("a-mode")}),u.forEach(h=>{h.classList.toggle("header-mode-mo")}),x.classList.toggle("dark")})};function bi(){let s=document.querySelector(".ddddd1-mo"),e=document.querySelector(".dddddd2-mo");document.querySelector(".dddddddd3-mo"),document.querySelector(".dddddddd4-mo");let t=document.querySelector(".ddddddd5-mo");document.querySelector(".dddddddd6-mo");let i=document.querySelector(".dddddddd7-mo"),a=document.querySelector(".dddddddd8-mo");window.addEventListener("scroll",()=>{window.scrollY>1583?s.classList.add("ddddd1"):s.classList.remove("ddddd1"),window.scrollY>1670?e.classList.add("dddddd2"):e.classList.remove("dddddd2"),window.scrollY>1952?t.classList.add("ddddddd3"):t.classList.remove("ddddddd3"),window.scrollY>2138.39990234375?i.classList.add("dddddddd4"):i.classList.remove("dddddddd4"),window.scrollY>2228?a.classList.add("dddddddd4"):a.classList.remove("dddddddd4")})}const Si=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).mySkills.map(a=>` <div class="w-[70%] h-[80%]  flex flex-col items-center " id="skill">
    <div class="w-[100%] h-[20%]  flex justify-start items-center">
      <div class="w-[30%] h-[60%] flex justify-center items-center pur-text opacity-0">
        <h2 class="text-[48px] font-black !ml-[12px] !mb-[10px] duration-300 hh">
         ${a.title}
        </h2>
      </div>
    </div>
    <div class="w-[97%] h-[80%]  flex flex-row justify-center items-center">
      <div class="w-[50%] h-[90%] !mr-[5px]">
        <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur  add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%] flex flex-row justify-center items-center gap-[455px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleHTML}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberHTML}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%]"></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="ddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>


   <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur2 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[450px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleNext}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberNext}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>


          <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur3 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[420px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleJavaScript}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberJavaScript}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="ddddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

     <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur4 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[460px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleGit}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberGit}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="dddddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
      <div class="w-[50%] h-[90%]">
      <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur  add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[465px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleCss}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberCss}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="dddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      
   <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur2 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[445px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleReactjs}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberReactjs}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

 <div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur3 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[455px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleFigma}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberFigma}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

<div class="w-[100%] h-[25%]  flex justify-center items-end">
          <div class="w-[95%] h-[74%] bg-white !mb-[3px] rounded-[5px] flex justify-center items-center ttb-pur4 add-black duration-200 opacity-0">
          <div class="w-[95%] h-[80%]  flex flex-col">
            <div class="w-[100%] h-[40%]  flex flex-row justify-center items-center gap-[440px]">
              <span class="!mt-[10px] text-[15px] duration-300 hh">${a.titleGithub}</span>
              <span class="!mt-[5px] text-[14px] duration-300 hh">${a.numberGithub}</span>
            </div>
            <!--#region space-->
            <div class="w-[100%] h-[30%] "></div>
            <!--#endregion space-->
            <div class="w-[100%] h-[30%]  flex justify-center items-center">
              <div class="w-[98%] h-[53%] rounded-[20px] bg-stone-300 !mb-[7px] ">
                <div class="dddddddd w-[0%] h-[100%] bg-purple-600 !rounded-[20px]"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  </div>`),document.querySelector(".myskiils").innerHTML=s.join(""),wi()}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).mySkills.map(a=>`  <form  action="" class="w-[90%] h-[100%]  flex flex-col duration-300">
        <div  class="w-[100%] h-[10%] opacity-0 title-form  flex justify-center items-center" id="skill">
   <h2 class="text-[30px] font-black duration-300 h2Mo">
    ${a.title}
   </h2>
        </div>
        <div class="w-[100%] h-[10%] flex justify-center items-center" id="skills">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-start ttb-pur1-mo opacity-0">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[273px]">
                <span class="text-[13px] !mt-[5px] duration-300 h2Mo">${a.titleHTML}</span>
                <span class="text-[13px] !mt-[7px] duration-300 h2Mo">${a.numberHTML}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 ddddd1-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

       <div class="w-[100%] h-[1%]"></div>

        <div class="w-[100%] h-[10%]  flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center ttb-pur22-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[277px]">
                <span class="text-[13px] !mt-[5px] duration-300 h2Mo">${a.titleCss}</span>
                <span class="text-[13px] !mt-[5px] duration-300 h2Mo">${a.numberCss}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddd2-mo"></div>
                </div>
              </div>
            </div>
          </div>
         </div> 
         <div class="w-[100%] h-[1%]"></div>

     

       <div class="w-[100%] h-[1%]"></div>


          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center ttb-pur33-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[260px]">
                <span class="text-[13px] !mt-[3px] !mr-[-7px]duration-300 h2Mo">${a.titleNext}</span>
                <span class="text-[12px] duration-300 h2Mo">${a.numberNext}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd3-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

       <div class="w-[100%] h-[1%]"></div>


            <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] rounded-[5px] flex justify-center items-center bg-white duration-300 addBlackMo ttb-pur44-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[260px]">
                <span class="text-[13px] !mt-[3px] !mr-[-7px]duration-300 h2Mo">${a.titleFigma}</span>
                <span class="text-[12px] !mt-[3px] duration-300 h2Mo">${a.numberFigma}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd4-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="w-[100%] h-[1%]"></div>

          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] rounded-[5px] flex justify-center items-center bg-white duration-300 addBlackMo ttb-pur55-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[240px]">
                <span class="text-[13px] !mt-[3px] !mr-[-8px] duration-300 h2Mo">${a.titleJavaScript}</span>
                <span class="text-[12px]  !mt-[3px] duration-300 h2Mo">${a.numberJavaScript}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 ddddddd5-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
         <div class="w-[100%] h-[1%]"></div>


          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center  ttb-pur66-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[250px]">
                <span class="text-[13px] !mt-[3px] !mr-[-12px] duration-300 h2Mo">${a.titleReactjs}</span>
                <span class="text-[12px] duration-300 h2Mo">${a.numberReactjs}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd6-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="w-[100%] h-[1%]"></div>

          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white duration-300 addBlackMo rounded-[5px] flex justify-center items-center ttb-pur77-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[270px]">
                <span class="text-[13px] !mt-[3px] duration-300 h2Mo">${a.titleGit}</span>
                <span class="text-[12px] duration-300 h2Mo">${a.numberGit}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd7-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="w-[100%] h-[1%]"></div>

          <div class="w-[100%] h-[10%] flex justify-center items-center">
          <div class="w-[100%] h-[85%] bg-white addBlackMo rounded-[5px] flex justify-center items-center  ttb-pur88-mo ">
            <div class="w-[96%] h-[90%]  flex flex-col">
              <div class="w-[100%] h-[50%]  flex flex-row justify-center items-end gap-[245px]">
                <span class="text-[13px] !mt-[3px] duration-300 h2Mo">${a.titleGithub}</span>
                <span class="text-[12px] duration-300 h2Mo">${a.numberGithub}</span>
              </div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center">
                <div class="w-[95%] h-[27%] rounded-[20px] bg-stone-200 flex items-center">
                  <div class="w-[0%] h-[100%] rounded-[20px] bg-purple-600 dddddddd8-mo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>`),document.querySelector(".myskillMo").innerHTML=e.join(""),yi(),bi()}catch(t){console.log(t.message)}};function Ei(){let s=document.querySelector(".sun"),e=document.querySelector(".h11"),t=document.querySelectorAll("p"),i=document.querySelectorAll("h3");s.addEventListener("click",()=>{e.classList.toggle("a-mode"),i.forEach(a=>{a.classList.toggle("a-mode")}),t.forEach(a=>{a.classList.toggle("a-mode")})})}function Ti(){let s=document.querySelectorAll(".text-part1"),e=document.querySelector(".darkMode");e.addEventListener("click",()=>{e.firstElementChild.classList.toggle("hidden"),e.lastElementChild.classList.toggle("hidden"),s.forEach(t=>{t.classList.toggle("a-mode")})})}const Mi=async()=>{let s=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).part1.map(i=>` <div class="desktop:w-[75%] w-[100%] desktop:h-[75%] h-[100%]  flex desktop:flex-row flex-col-reverse" id="home">
    <!--#region 2child-p1-->
  <!--#region pa1-->
    <div class="desktop:w-[50%] desktop:h-[100%] h-[50%] flex justify-center items-center ">
      <div class="desktop:w-[75%] w-[90%] h-[85%] !mt-[20px] !ml-[10px]">
      <!--#region title-wel-->
        <div class="w-[100%] h-[35%]   desktop:block mobile:hidden one-op">
          <h1 class="text-[50px] duration-300 h11">${i.title1}</h1>
          <h1 class="text-[50px] text-fuchsia-800">${i.title2}</h1>
        </div>
      <!--#endregion title-wel-->
        <div class="w-[100%] h-[10%] desktop:block mobile:hidden ttb">
          <h3 class="text-[25px] duration-300">${i.title3}</h3>
        </div>
        <div class="w-[100%] h-[15%] desktop:hidden mobile:block mobile:flex mobile:justify-center mobile:items-center ttb-frontend">
          <h3 class="text-[20px] duration-300 text-part1">${i.title4mo}</h3>
        </div>
        <div class="w-[84%] h-[15%] desktop:block mobile:hidden ttbp">
          <p class="text-[14px] text-stone-700 leading-[23px] duration-300">
          ${i.description}
          </p>
        </div>
        <div class="w-[100%] h-[28%] desktop:hidden mobile:block p-qnimeh">
          <p class="text-[14px] text-stone-700 leading-[23px] text-center duration-300 text-part1">
  ${i.description2}
          </p>
        </div>
        <div class="w-[100%] desktop:h-[12%] h-[20%]"></div>
      <!--#region btn-->
        <div class="w-[100%] h-[15%] desktop:block mobile:hidden ttb-btn">
          <div class="w-[83%] h-[88%] flex justify-center items-center gap-[4.5px]">
            <a href="#talk" class="btn bg-purple-700"><span>${i.buttonText1Des}</span></a>
            <a href="#show" class="btn !ml-[20px] bg-stone-900 black-btn"><span>${i.buttonText2Des}</span></a>
          </div>
        </div>
      <!--#endregion btn-->
        <!--#region btn-->
        <div class="w-[100%] h-[25%] desktop:hidden mobile:block">
          <div class="w-[100%] h-[88%] flex justify-center items-center gap-[4.5px]">
            <a href="#talk" class="btn bg-purple-700 !mr-[20px]"><span>${i.buttonText1Mo}</span></a>
            <a href="#show" class="btn !ml-[20px] bg-stone-900 black-btn"><span>${i.buttonText1Mo}</span></a>
          </div>
        </div>
      <!--#endregion btn-->
      <!--#region icons-->
      <div class="w-[100%] h-[13%] desktop:block mobile:hidden">
      <div class="w-[100%] h-[100%]  flex justify-start items-end ">
        <div class="w-[40%] h-[60%] !mr-[21px] flex flex-row">
          <div class="four-part justify-start ins"><img class="!mt-[4px] !mr-[3px]" src=${i.imageIns} alt="instagram"></div>
          <div class="four-part link"><img src=${i.imageLinkedin}        alt="in"></div>
          <div class="four-part github"><img class="!mr-[6px] !mt-[2px]" src=${i.imageGithub}  alt="github"></div>
          <div class="four-part justify-end ball"><img class="!ml-[3px] !mt-[3px]" src=${i.imageBascketball} alt="bascketball"></div>
        </div>
      </div>
      </div>
      <!--#endregion icons-->
        <!--#region icons-->
        
      <div class="w-[100%] h-[13%] desktop:hidden mobile:block !mt-[10px]">
      <div class="w-[100%] h-[100%] flex justify-center items-center">
        <div class="w-[55%] h-[60%] !mr-[21px] flex flex-row">
          <div class="four-part justify-start"><img class="!mt-[4px] !mr-[3px]" src=${i.imageInsMo}   alt="instagram"></div>
          <div class="four-part"><img src=${i.imageLinkedinMo} alt="in"></div>
          <div class="four-part"><img class="!mr-[6px] !mt-[2px]" src=${i.imageGithubMo} alt="github"></div>
          <div class="four-part justify-end"><img class="!ml-[3px] !mt-[3px]" src=${i.imageBascketballMo}  alt="bascketball"></div>
        </div>
      </div>
      </div>
      <!--#endregion icons-->
      </div>
    </div>
  <!--#endregion pa1-->
  <!--#region pa2-->
  <div class="desktop:w-[50%] w-[100%] desktop:h-[100%] h-[50%]  flex mobile:flex-col desktop:justify-center justify-end items-center desktop:gap-0 gap-[20px] ">
    <div class="desktop:w-[65%] w-[40%] desktop:h-[80%] h-[50%] bg-stone-50 rounded-[80%] flex justify-center items-center !mt-[10px]  outline-offset-[15px] outline-1 outline-purple-600 ttb-img">
      <img class="w-[100%] h-[100%] object-cover rounded-[80%]" src=${i.imageMyself} alt="">
    </div>
    <div class="desktop:hidden mobile:block w-[90%] h-[20%] bg-pink-200= flex flex-row justify-center items-center">
     <div class="w-[100%] h-[100%]  flex flex-col justify-center items-center tt-ttb ">
       <h1 class="text-[25px] !mt-[40px] duration-300 text-part1">${i.title1}</h1>
      <h1 class="text-[25px]  text-fuchsia-800 !mb-[10px]">${i.title2}</h1>
     </div>

    </div>
  </div>
  <!--#endregion pa2-->
    <!--#endregion 2child-p1-->
  </div>`),document.querySelector(".part1-API").innerHTML=s.join(""),Ei(),Ti()}catch(e){console.log(e.message)}};function Li(){let s=document.querySelector(".add-ani"),e=document.querySelector(".add-ani2"),t=document.querySelector(".add-ani3"),i=document.querySelector(".add-ani4"),a=document.querySelector(".opac");window.addEventListener("scroll",()=>{window.scrollY>150?(s.classList.add("animeh"),e.classList.add("animeh2"),t.classList.add("animeh3"),i.classList.add("animeh4"),a.classList.add("opac")):(s.classList.remove("animeh"),e.classList.remove("animeh2"),t.classList.remove("animeh3"),i.classList.remove("animeh4"),a.classList.remove("opac"))}),document.querySelector(".sun").addEventListener("click",()=>{let f=document.querySelectorAll(".text"),p=document.querySelectorAll(".num");f.forEach(c=>{c.classList.toggle("a-mode")}),p.forEach(c=>{c.classList.toggle("a-mode")})})}function ji(){let s=document.querySelector(".fo-animeh1"),e=document.querySelector(".fo-animeh2"),t=document.querySelector(".fo-animeh3"),i=document.querySelector(".fo-animeh4");window.addEventListener("scroll",()=>{window.scrollY>260?(s.classList.add("fo-animeh11"),e.classList.add("fo-animeh22"),t.classList.add("fo-animeh33"),i.classList.add("fo-animeh44")):(s.classList.remove("fo-animeh11"),e.classList.remove("fo-animeh22"),t.classList.remove("fo-animeh33"),i.classList.remove("fo-animeh44"));let f=document.querySelector(".img-mo-animeh"),p=document.querySelector(".text-aboutme-mo"),c=document.querySelector(".animeh-hi"),n=document.querySelector(".p-animeh"),d=document.querySelector(".bt-animeh-mo");window.scrollY>700?(f.classList.add("img-mo-animeh1"),p.classList.add("text-aboutme-mo1"),c.classList.add("animeh-hi1"),n.classList.add("p-animeh1"),d.classList.add("bt-animeh-mo1")):(f.classList.remove("img-mo-animeh1"),p.classList.remove("text-aboutme-mo1"),c.classList.remove("animeh-hi1"),n.classList.remove("p-animeh1"),d.classList.remove("bt-animeh-mo1"))});let a=document.querySelector(".darkMode"),r=document.querySelectorAll(".num-p2");a.addEventListener("click",()=>{a.firstElementChild.classList.toggle("hidden"),a.lastElementChild.classList.toggle("hidden"),s.classList.toggle("header-mode-mo"),e.classList.toggle("header-mode-mo"),t.classList.toggle("header-mode-mo"),i.classList.toggle("header-mode-mo"),r.forEach(f=>{f.classList.toggle("a-mode")})})}const ki=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).part2.map(a=>` <div class="w-[55%] h-[85%] desktop:!mr-[25px] flex desktop:flex-row" id="aboutme">
    <div class="p1-4part">
      <div class="w-[45%] h-[65%]  !ml-[50px] flex flex-row opacity-0 add-ani">
        <div class="w-[67%] h-[100%]  flex justify-center items-center">
        <div class="w-[93%] h-[78%] bg-orange-600 flex justify-center items-center rounded-[100%] !mt-[12px]">
          <img class="!mr-[3px] !mt-[2px]" src=${a.image}  alt="">
        </div>
        </div>
        <div class="w-[33%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-center items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px]   duration-300 num">${a.number}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[15px] duration-300 text">${a.title}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p2-4part">
      <div class="w-[65%] h-[65%]  !ml-[20px] flex flex-row opacity-0 add-ani2">
        <div class="w-[50%] h-[100%]  flex justify-center items-center ">
        <div class="w-[93%] h-[78%] bg-green-400 flex justify-center items-center rounded-[100%] !mt-[12px]">
          <img class="!mr-[3px] !mt-[2px]" src=${a.image2}  alt="">
        </div>
        </div>
        <div class="w-[55%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-start items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px] duration-300 num">${a.number2}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[15px] duration-300 text">${a.title2}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p3-4part">
      <div class="w-[75%] h-[65%]   flex flex-row opacity-0 add-ani3">
        <div class="w-[50%] h-[100%]  flex justify-center items-center ">
        <div class="w-[80%] h-[78%] bg-pink-500 flex justify-center items-center rounded-[100%] !mt-[12px] !mr-[18px]">
          <img class="!mr-[3px] !mt-[2px]" src=${a.image3}   alt="">
        </div>
        </div>
        <div class="w-[55%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-start items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px] duration-300 num">${a.number3}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[15px] duration-300 text">${a.title3}</span>
          </div>
        </div>
      </div>
    </div>
    

  <div class="p4-4part">
      <div class="w-[65%] h-[65%]   flex flex-row opacity-0 add-ani4 !mr-[70px]">
        <div class="w-[50%] h-[100%]  flex justify-center items-center ">
        <div class="w-[93%] h-[78%] bg-purple-600 flex justify-center items-center rounded-[100%] !mt-[12px]">
          <img class="!mr-[3px] !mt-[2px]" src=${a.image4} alt="">
        </div>
        </div>
        <div class="w-[55%] h-[90%] flex flex-col !mt-[8px]">
          <div class="w-[100%] h-[60%] flex flex-row justify-start items-end">
            <span class="text-[25px] !mb-[-5px] font-black !ml-[5px] duration-300 num">${a.number4}</span>
          </div>
          <div class="w-[100%] h-[50%]  flex flex-row justify-start items-center">
            <span class="text-[14px] text-stone-600 !mt-[25px]!ml-[75px] duration-300 text">${a.title4}</span>
          </div>
        </div>
      </div>
    </div>

  </div>`),document.querySelector(".opac").innerHTML=s.join(""),Li()}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).part2.map(a=>` 
<div class="w-[100%] h-[70vh] flex justify-center items-center ">
 

<div class="w-[90%] h-[85%]  flex flex-col !mt-[50px]">
      <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[25px]">
        <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh1 duration-300 opacity-0">
          <div class="w-[50%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-orange-600 flex justify-center items-center">
                <img src=${a.image} alt="">
              </div>
            </div>
            <div class="w-[50%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${a.number}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${a.title}</span>
              </div>
            </div>
          </div>
        </div>
       
    <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh2 duration-300 opacity-0">
          <div class="w-[50%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-green-400 flex justify-center items-center">
                <img src=${a.image2} alt="">
              </div>
            </div>
            <div class="w-[100%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${a.number2}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${a.title2}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
         <div class="w-[100%] h-[50%]  flex flex-row justify-center items-center gap-[25px]">

    <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh3 duration-300 opacity-0">
          <div class="w-[52%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-pink-500 flex justify-center items-center">
                <img src=${a.image3} alt="">
              </div>
            </div>
            <div class="w-[100%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${a.number3}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${a.title3}</span>
              </div>
            </div>
          </div>
        </div>
    <div class="w-[45%] h-[87%] bg-white flex justify-center items-center rounded-[5px] shadow4 fo-animeh4 duration-300 opacity-0">
          <div class="w-[50%] h-[80%]  flex flex-col items-center">
            <div class="w-[100%] h-[50%]  flex justify-center items-start">
              <div class="w-[80%] h-[83%] rounded-[50%] bg-purple-500 flex justify-center items-center">
                <img src=${a.image4} alt="">
              </div>
            </div>
            <div class="w-[100%] h-[40%]  flex flex-col">
              <div class="w-[100%] h-[60%]  flex justify-center items-center">
                <span class="text-[20px] num-p2">${a.number4}</span>
              </div>
              <div class="w-[100%] h-[40%]  flex justify-center items-center">
                <span class="text-[13px] text-stone-600 num-p2">${a.title4}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
      </div>
    `),document.querySelector(".just-write").innerHTML=e.join(""),ji()}catch(t){console.log(t.message)}};function lt(){let s=document.querySelector(".img-animeh"),e=document.querySelector(".h2-animeh"),t=document.querySelector(".front-animeh"),i=document.querySelector(".animeh-p-infor"),a=document.querySelector(".btn-infor");window.addEventListener("scroll",()=>{window.scrollY>460?(s.classList.add("img"),e.classList.add("h2-ani"),t.classList.add("I-m-frontEnd"),i.classList.add("animeh-p-information"),a.classList.add("animeh-p-information")):(s.classList.remove("img"),e.classList.remove("h2-ani"),t.classList.remove("I-m-frontEnd"),i.classList.remove("animeh-p-information"),a.classList.remove("animeh-p-information"))});let r=document.querySelector(".darkMode"),f=document.querySelectorAll(".text-mo-p3"),p=document.querySelector("html"),c=document.querySelector("body");console.log(f),r.addEventListener("click",()=>{p.classList.toggle("dark"),c.classList.toggle("dark"),f.forEach(n=>{n.classList.toggle("a-mode")}),c.classList.contains("dark")?r.firstElementChild.classList.toggle("hidden"):r.lastElementChild.classList.toggle("hidden")})}function $i(){let s=document.querySelector(".sun"),e=document.querySelectorAll(".please-dada");s.addEventListener("click",()=>{e.forEach(t=>{t.classList.toggle("a-mode")})})}const Ci=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).part3.map(a=>`  <div class="w-[70%] h-[95%]  flex flex-row">
    <div class="w-[50%] h-[100%]  flex justify-center items-center">
      <div class="w-[90%] h-[90%] flex justify-center items-center !mr-[12px] rounded-[5px] img-animeh opacity-0">
        <img class="w-[85%] h-[85%] object-cover rounded-[5px]" src=${a.image} alt="">
      </div>
    </div>
    <div class="w-[50%] h-[100%]  flex justify-start items-center">
      <div class="w-[80%] h-[85%] !mr-[24px] flex flex-col">
        <div class="w-[100%] h-[24%] flex justify-start items-end">
          <div class="w-[40%] h-[50%] flex justify-center items-center h2-animeh opacity-0">
            <h2 class="text-[47px] font-bold !ml-[20px] duration-300 please-dada">
              ${a.title}
            </h2>
          </div>
        </div>
        
        <div class="w-[100%] h-[21%]  flex justify-start items-end">
          <div class="w-[85%] h-[57%] flex flex-wrap justify-start items-start">
            <div class="w-[100%] h-[90%] front-animeh opacity-0">
                 <h2 class="text-[23px] font-bold duration-300 please-dada">
${a.title2}
            </h2>
            </div>
            </div>
          </div>
          <div class="w-[100%] h-[23%] flex justify-center items-end">
            <div class="w-[98%] h-[73%] !ml-[10px] animeh-p-infor opacity-0">
              <p class="text-[14px] duration-300 please-dada">${a.description}</div>
          </div>
          <div class="w-[40%] h-[20%] flex justify-center items-center">
            <button class="w-[95%] h-[50%] bg-purple-700 rounded-[5px] !mt-[40px] duration-300 active:scale-95 hover:translate-y-[-5px] btn-infor ">
              <span class="text-stone-100 ">${a.textBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>`),document.querySelector(".part3").innerHTML=s.join(""),lt(),$i()}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).part3.map(a=>`   <div class="w-[100%] h-[53%] flex justify-center items-center">
      <div class="w-[90%] h-[90%] flex justify-center items-center img-mo-animeh opacity-0">
        <img class="object-cover w-[100%] h-[100%] !mb-[4px]" src=${a.image} alt="">
      </div>
    </div>
      <div class="w-[100%] h-[12%] flex justify-center items-center">
        <div class="w-[100%] h-[50%] flex justify-center items-center text-aboutme-mo opacity-0">
          <h2 class="text-[30px] duration-300 text-mo-p3">
         ${a.title}
          </h2>
        </div>
      </div>
      <div class="w-[100%] h-[1%]"></div>
      <div class="w-[100%] h-[12%]  flex justify-center items-center">
        <div class="w-[90%] h-[100%] !ml-[5px] flex flex-col justify-center items-center animeh-hi opacity-0  ">
          <span class="text-[25px] duration-300 text-mo-p3">
${a.title2Mo}
            </span>
            <span class="text-[25px] text-purple-600 duration-300 ">
              ${a.title3Mo}
            </span>
        </div>
      </div>
      <div class="w-[100%] h-[12%] flex justify-center items-center">
        <div class="w-[90%] h-[100%] p-animeh">
          <p class="text-[13px] leading-[22px] text-stone-600 duration-300 text-mo-p3">
          ${a.description}
          </p>
        </div>
      </div>
      <div class="w-[100%] h-[10%]  flex justify-start items-center">
        <button class="w-[32%] h-[70%] bg-purple-600 !mr-[20px] !desktop:mt-[4px] desktop:!mb-[-0px] mobile:!mb-[-40px] rounded-[5px] bt-animeh-mo"><span class="text-stone-100">  ${a.textBtn}</span></button>
      </div>`),document.querySelector(".part3Mo").innerHTML=e.join(""),lt()}catch(t){console.log(t.message)}};function Pi(){window.addEventListener("scroll",()=>{let t=document.querySelector(".purply-animeh");window.scrollY>2360?t.classList.add("purply-animeh1"):t.classList.remove("purply-animeh1")});let s=document.querySelector(".sun"),e=document.querySelector(".purply-animeh");s.addEventListener("click",()=>{e.classList.toggle("header-mode-mo")})}function Ii(){window.addEventListener("scroll",()=>{let t=document.querySelector(".purply-animeh-mo");window.scrollY>3400?t.classList.add("purply-animeh1-mo"):t.classList.remove("purply-animeh1-mo")});let s=document.querySelector(".darkMode"),e=document.querySelector(".purply-animeh-mo");s.addEventListener("click",()=>{s.firstElementChild.classList.toggle("hidden"),s.lastElementChild.classList.toggle("hidden"),e.classList.toggle("header-mode-mo")})}const Ai=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).purpleCard.map(a=>`  <div class="desktop:w-[67%] w-[90%] h-[70%] bg-purple-600 rounded-[5px] desktop:!mt-[30px] desktop:!mr-[10px] flex justify-center items-center !mt-[55px] purply-animeh opacity-0" id="skills">
    <div class="w-[90%] desktop:h-[47%] h-[80%] flex desktop:flex-row flex-col  justify-center items-center  desktop:!mt-0 !mt-[20px]">
      <div class="desktop:w-[50%] w-[100%] h-[100%]  flex flex-col justify-center desktop:items-start items-center">
        <div class="desktop:w-[100%] w-[90%] h-[50%]  flex justify-center desktop:items-center items-end">
          <h3 class="desktop:text-[48px] text-[30px] text-stone-50 font-bold desktop:!ml-[12px] !ml-0  desktop:!mt-0 !mt-[-10px] !text-center leading-[35px]">
           ${a.title}
          </h3>
        </div>
        <div class="desktop:w-[65%] w-[100%] h-[50%]  flex desktop:justify-end justify-center items-start">
          <div class="desktop:w-[98%] w-[85%] h-[80%]  flex desktop:justify-start desktop:items-end justify-center items-center">
            <p class="desktop:text-[13.8px] text-[13px] text-stone-50 desktop:leading-[25px] leading-[27px] desktop:!mr-[5px] !mr-[0px] desktop:text-start mobile:text-center desktop:!mt-0 !mt-[0px]">
              ${a.description}
            </p>
          </div>
        </div>
      </div>

       <div class="w-[50%] desktop:h-[100%] h-[50%]  flex desktop:justify-end justify-center desktop:items-center items-start desktop:!mr-0 !mr-[10px]
       ">
    <button class="desktop:w-[185px] w-[120px] desktop:h-[53px] h-[46px] bg-stone-50 rounded-[5px] !ml-[10px] flex justify-center items-center duration-300 hover:translate-y-[-5px] hover:bg-black  active:scale-95 btbt desktop:!mt-0 !mt-[5px]">
      <a href="#callWithMe" class="desktop:text-[15px] text-[14px] text-purple-600 duration-300 ">${a.textBtn}</a>
    </button>
       </div>

    </div>
  </div>`),document.querySelector(".purple-card-des").innerHTML=s.join(""),Pi()}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).purpleCard.map(a=>`  <div class="desktop:w-[67%] w-[90%] h-[70%] bg-purple-600 rounded-[5px] desktop:!mt-[30px] desktop:!mr-[10px] flex justify-center items-center !mt-[55px] purply-animeh-mo opacity-0">
    <div class="w-[90%] desktop:h-[47%] h-[80%] flex desktop:flex-row flex-col  justify-center items-center  desktop:!mt-0 !mt-[20px]">
      <div class="desktop:w-[50%] w-[100%] h-[100%]  flex flex-col justify-center desktop:items-start items-center">
        <div class="desktop:w-[100%] w-[90%] h-[50%]  flex justify-center desktop:items-center items-end">
          <h3 class="desktop:text-[48px] text-[30px] text-stone-50 font-bold desktop:!ml-[12px] !ml-0  desktop:!mb-0 !mb-[15px] !text-center leading-[35px]">
               ${a.title}
          </h3>
        </div>
        <div class="desktop:w-[65%] w-[100%] h-[50%]  flex desktop:justify-end justify-center items-start">
          <div class="desktop:w-[98%] w-[85%] h-[80%]  flex desktop:justify-start desktop:items-end justify-center items-center">
            <p class="desktop:text-[13.8px] text-[13px] text-stone-50 desktop:leading-[25px] leading-[27px] desktop:!mr-[5px] !mr-[0px] desktop:text-start mobile:text-center desktop:!mt-0 !mt-[0px]">
          ${a.description}
            </p>
          </div>
        </div>
      </div>

       <div class="w-[50%] desktop:h-[100%] h-[50%]  flex desktop:justify-end justify-center desktop:items-center items-start desktop:!mr-0 !mr-[10px]
       ">
    <button class="w-[125px] h-[48px] bg-stone-50 rounded-[5px] !ml-[10px] flex justify-center items-center duration-300 hover:translate-y-[-5px] hover:bg-black  active:scale-95 btbt desktop:!mt-0 !mt-[5px]">
      <a href="#callWithMe" class="desktop:text-[15px] text-[14px] text-purple-600 duration-300 ">${a.textBtn}</a>
    </button>
       </div>

    </div>
  </div>`),document.querySelector(".purple-card-mo").innerHTML=e.join(""),Ii()}catch(t){console.log(t.message)}};function zi(){let s=document.querySelector(".animation-slider"),e=document.querySelector(".title-des"),t=document.querySelector(".title-Mo");window.addEventListener("scroll",()=>{console.log(window.scrollY),window.scrollY>3465?e.classList.add("h2-ani"):e.classList.remove("h2-ani"),window.scrollY>4852?t.classList.add("h2-ani"):t.classList.remove("h2-ani"),window.scrollY>3580?s.classList.add("animation-slider-add"):s.classList.remove("animation-slider-add")})}function qi(){let s=document.querySelector(".slider-Mo");window.addEventListener("scroll",()=>{console.log(window.scrollY),window.scrollY>4944?s.classList.add("slide"):s.classList.remove("slide")})}const Oi=async()=>{let s=[],e=[],t=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).slider.map(r=>`       <div class="desktop:block mobile:hidden w-[100%] desktop:h-[20%] h-[15%]  flex justify-start items-start">
              <div class="desktop:w-[25%]  w-[60%] h-[60%]  flex justify-center items-center opacity-0 title-des "><h1 class="text-stone-50 desktop:text-[48px] text-[35px] !desktop:mt-0 !desktop:mr-0 !mt-[11px] !mr-[5px]  font-bold">${r.title}</h1>
        </div>
          </div>
          <div class="desktop:hidden !mobile:block w-[100%] desktop:h-[20%] h-[15%]  flex justify-start items-start">
                 <div class="desktop:w-[25%]  w-[60%] h-[60%]  flex justify-center items-center opacity-0 title-Mo "><h1 class="text-stone-50 desktop:text-[48px] text-[35px] !desktop:mt-0 !desktop:mr-0 !mt-[11px] !mr-[5px]  font-bold">${r.title}</h1>
        </div>
          </div>
          `),document.querySelector(".title").innerHTML=s.join("")}catch(i){console.log(i.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).slider.map(r=>`    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${r.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${r.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${r.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${r.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
       <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${r.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${r.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${r.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${r.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
   <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${r.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${r.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${r.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${r.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
       <div class="swiper-slide">
        <div class="w-[89%] h-[75%]  flex flex-col !mt-[20px]">
          <div class="w-[100%] h-[20%]  flex justify-end ">
            <div class="w-[15%] h-[70%] "><h2 class=" font-bold text-[18px] !mr-[6px]">${r.titleProjectName}</h2></div>
          </div>
          <div class="w-[100%] h-[48%] flex justify-center items-start">
            <div class="w-[95%] h-[90%] flex justify-center items-start  !mr-[15px]">
              <p class="text-[13.9px] leading-[22px] text-left text-stone-700">${r.description} </p>
            </div>
          </div>
          <div class="w-[100%] h-[32%]  flex justify-end items-center">
            <div class="w-[29%] h-[75%] flex flex-row  !ml-[5px] !mb-[7px]"><div class="w-[60%] h-[100%] flex flex-col ">
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><h2 class="font-bold !ml-[1px]">${r.personName}</h2></div>
              <div class="w-[100%] h-[50%]  flex justify-center items-center"><span class="text-[12px] !mr-[11px] !mb-[2.5px]">${r.personSide}</span></div>
            </div>
          <div class="w-[40%] h-[100%]  flex justify-center items-center">
            <div class="w-[77%] h-[90%] rounded-[50%] bg-gray-500"></div>
          </div>
          </div>
          </div>
        </div>
        
      </div>
    </div>`),document.querySelector(".slider-Des").innerHTML+=e.join(""),zi()}catch(i){console.log(i.message)}try{t=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).slider.map(r=>` <div class="swiper-wrapper">
      <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${r.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${r.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${r.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${r.personSide}</span></div>
       </div></div>
        </div>
      </div>
       <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${r.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${r.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${r.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${r.personSide}</span></div>
       </div></div>
        </div>
      </div>
        <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${r.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${r.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${r.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${r.personSide}</span></div>
       </div></div>
        </div>
      </div>
        <div class="swiper-slide !h-[82%]">
        <div class="w-[88%] h-[83%]  flex flex-col">
          <div class="w-[100%] h-[15%]  flex justify-center items-center"><div class="w-[20%] h-[60%]   !mt-[2px]"><span class="text-[15px] font-bold">${r.titleProjectName}</span></div></div>
          <div class="w-[100%] h-[50%]  flex justify-center items-center"><div class="w-[90%] h-[88%]  flex justify-center items-center"><p class="text-[14px] text-center text-stone-600">${r.description}</p></div></div>
       <div class="w-[100%] h-[35%] flex justify-center items-end"><div class="w-[21%] h-[90%]  flex flex-col ">
        <div class="w-[100%] h-[60%]  flex justify-center items-center">
          <div class="w-[70%] h-[90%] bg-stone-600 rounded-[50%] "></div>
        </div>
        <div class="w-[100%] h-[30%] "><span class="text-[15px] font-bold">${r.personName}</span></div>
        <div class="w-[100%] h-[20%]  flex !justify-center !items-end
        "><span class="text-[11.5px] font-bold text-stone-600 !mb-[-4px]">${r.personSide}</span></div>
       </div></div>
        </div>
      </div>

    </div>`),document.querySelector(".slider-Mo").innerHTML+=t.join(""),qi()}catch(i){console.log(i.message)}};function Di(){let s=document.querySelector(".project-card"),e=document.querySelector(".project-card2"),t=document.querySelector(".project-card3"),i=document.querySelector(".title-pro");window.addEventListener("scroll",()=>{window.scrollY>2700?(s.classList.add("project-card1"),e.classList.add("project-card22"),t.classList.add("project-card33"),i.classList.add("title-pro1")):(s.classList.remove("project-card1"),e.classList.remove("project-card22"),t.classList.remove("project-card33"),i.classList.remove("title-pro1"))});let a=document.querySelector(".sun"),r=document.querySelectorAll(".three-h1"),f=document.querySelector(".project-card"),p=document.querySelector(".project-card2"),c=document.querySelector(".project-card3");a.addEventListener("click",()=>{r.forEach(n=>{n.classList.toggle("a-mode")}),f.classList.toggle("header-mode-mo"),p.classList.toggle("header-mode-mo"),c.classList.toggle("header-mode-mo")})}function Bi(){let s=document.querySelector(".project-card11"),e=document.querySelector(".project-card222");document.querySelector(".project-card33");let t=document.querySelector(".title-pro-mo");window.addEventListener("scroll",()=>{window.scrollY>3805.60009765625?t.classList.add("title-pro1"):t.classList.remove("title-pro1"),window.scrollY>3880?s.classList.add("project-card1"):s.classList.remove("project-card1"),window.scrollY>4360?e.classList.add("project-card1"):e.classList.remove("project-card1")});let i=document.querySelector(".darkMode"),a=document.querySelectorAll(".three-h1"),r=document.querySelector(".project-card11"),f=document.querySelector(".project-card222"),p=document.querySelector(".project-card33");i.addEventListener("click",()=>{i.firstElementChild.classList.toggle("hidden"),i.lastElementChild.classList.toggle("hidden"),a.forEach(c=>{c.classList.toggle("a-mode")}),r.classList.toggle("header-mode-mo"),f.classList.toggle("header-mode-mo"),p.classList.toggle("header-mode-mo")})}const Yi=async()=>{let s=[],e=[];try{s=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).Three.map(a=>` <div class=" w-[70%]  h-[100%]  !mt-[25px] desktop:block mobile:hidden" id="project">
<div class="w-[100%]  h-[100%]  !mt-[25px] flex flex-col">
      <div class="w-[100%] desktop:h-[20%] h-[5%] ">
        <div class="desktop:w-[25%] w-[80%] desktop:h-[50%] h-[80%]   flex desktop:justify-center justify-start desktop:items-end items-start title-pro opacity-0">
          <h1 class="desktop:text-[48px] text-[35px] font-black !mb-[6px] desktop:!mr-[30px] three-h1">${a.title}</h1>
        </div>
      </div>
      <div class="w-[100%] desktop:h-[80%] h-[100%]  flex flex-col ">
        <div class="w-[100%] desktop:h-[87%] h-[100%]  flex desktop:flex-row flex-col justify-center items-center desktop:gap-[25px] gap-[20px]">

          <div class="project-card duration-300 mobile:project-1">
            <div class="w-[100%] h-[74%]  flex justify-center items-end relative rounded-[5px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]
              " src=${a.image} alt="">
              <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov rounded-[5px]"></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 three-h1">${a.title1}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-green-500">${a.title2}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">${a.title3}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/Exo-Game/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95 three-h1">${a.titleBtn}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="project-card2 duration-300 opacity-0">
            <div class="w-[100%] h-[74%] flex justify-center items-end relative rounded-[10px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]" src=${a.image2} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 rounded-[5px] absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 three-h1">${a.title4}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-red-600">${a.title5}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">Html,Tailwind Css,js</span>
                    <a href="https://abolfazleshtiyaghi.github.io/dark/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95 three-h1">${a.titleBtn} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="project-card3 duration-300 desktop:block mobile:hidden">
                       <div class="w-[100%] h-[74%] flex justify-center items-end relative">
              <img class="w-[100%] h-[100%] object-cover" src=${a.image3} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[60%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 three-h1">${a.title6}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-sky-700">${a.title7}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[170px]">
                    <span class="text-[13px] font-bold text-purple-600">${a.title8}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/vitto/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95 three-h1">${a.titleBtn} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`),document.querySelector(".three-card").innerHTML=s.join(""),Di()}catch(t){console.log(t.message)}try{e=(await(await fetch("https://abolfazleshtiyaghi.github.io/dataBase/db.json")).json()).Three.map(a=>` <div class="  w-[90%]   h-[100%] !mt-[25px] desktop:hidden mobile:block">
<div class=" w-[100%]  h-[100%]  !mt-[25px] flex flex-col">
      <div class="w-[100%] desktop:h-[20%] h-[5%] ">
        <div class="desktop:w-[25%] w-[80%] desktop:h-[50%] h-[80%]   flex desktop:justify-center justify-start desktop:items-end items-start title-pro-mo opacity-0">
          <h1 class="desktop:text-[48px] text-[35px] font-black !mb-[6px] desktop:!mr-[30px] three-h1">${a.title}</h1>
        </div>
      </div>
      <div class="w-[100%] desktop:h-[80%] h-[100%]  flex flex-col ">
        <div class="w-[100%] desktop:h-[87%] h-[100%]  flex desktop:flex-row flex-col justify-center items-center desktop:gap-[25px] gap-[20px]">

          <div class="duration-300 project-card11">
            <div class="w-[100%] h-[74%]  flex justify-center items-end relative rounded-[5px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]
              " src=${a.image} alt="">
              <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov rounded-[5px]"></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 duration-300 three-h1">${a.title1}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-green-500">${a.title2}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">${a.title3}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/Exo-Game/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95">${a.titleBtn}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="duration-300 project-card222">
            <div class="w-[100%] h-[74%] flex justify-center items-end relative rounded-[10px]">
              <img class="w-[100%] h-[100%] object-cover rounded-[5px]" src=${a.image2} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 rounded-[5px] absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[54%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 duration-300 three-h1">${a.title4}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-red-600">${a.title5}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[110px]">
                    <span class="text-[13px] font-bold text-purple-600">Html,Tailwind Css,js</span>
                    <a href="https://abolfazleshtiyaghi.github.io/dark/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95">مشاهده </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="duration-300 project-card33 desktop:block mobile:hidden">
                       <div class="w-[100%] h-[74%] flex justify-center items-end relative">
              <img class="w-[100%] h-[100%] object-cover" src=${a.image3} alt="">
                <div class="w-[100%] h-[0%] duration-400 bg-stone-600 opacity-50 absolute btt-card-hov "></div>
            </div>
            <div class="w-[100%] h-[26%]  flex justify-center items-center">
              <div class="w-[90%] h-[60%] !ml-[10px] flex flex-col">
                <div class="w-[100%] h-[43%] flex justify-start items-center">
                  <div class="w-[60%]  h-[100%] flex flex-row justify-start items-end">
                    <span class="text-[16px] font-black !mr-[5px] !mb-[-2px] text-stone-600 duration-300 three-h1">${a.title6}</span>
                    <span class="text-[16px] font-black !mr-[2px] !mb-[-2px] text-sky-700">${a.title7}</span>
                  </div>
                </div>
                <div class="w-[100%] h-[57%]  flex justify-center items-center">
                  <div class="w-[100%] h-[82%]  flex flex-row justify-center items-center gap-[170px]">
                    <span class="text-[13px] font-bold text-purple-600">${a.title8}</span>
                    <a href="https://abolfazleshtiyaghi.github.io/vitto/" class="w-[90px] h-[100%] rounded-[50px] border-solid border-[1.5px] border-purple-600 flex  justify-center items-center text-[13px] text-purple-500 duration-300 hover:bg-purple-600 hover:text-stone-50 active:scale-95">${a.titleBtn} </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    `),document.querySelector(".three-card-mo").innerHTML=e.join(""),Bi()}catch(t){console.log(t.message)}};let Ve=document.querySelector(".darkMode"),Hi=document.querySelector("html"),Gi=document.querySelector("body"),Ni=document.querySelector(".header-mo"),Xi=document.querySelector(".back-sky");Ve.addEventListener("click",()=>{Ve.firstElementChild.classList.toggle("hidden"),Ve.lastElementChild.classList.toggle("hidden"),Hi.classList.toggle("dark"),Gi.classList.toggle("dark"),Ni.classList.toggle("header-mode-mo"),Xi.classList.toggle("dark")});let nt=document.querySelector("#bottomToTop"),ot=document.querySelector(".darkMode");window.addEventListener("scroll",()=>{window.scrollY>100?(nt.classList.add("opacity-100"),ot.classList.add("opacity-100")):(nt.classList.remove("opacity-100"),ot.classList.remove("opacity-100"))});let dt=document.querySelector(".animation-slider");window.addEventListener("scroll",()=>{window.scrollY>3550?dt.classList.add("animation-slider-add"):dt.classList.remove("animation-slider-add")});const Ri=async()=>{await vi(),await gi(),await Mi(),await ki(),await Ci(),await Si(),await ci(),await Ai(),await Yi(),await Oi(),await mi(),await pi(),Fi()};let Fe=document.querySelector(".hamburger"),Vi=document.querySelector(".ham-page");Fe.addEventListener("click",()=>{Vi.classList.toggle("left-mo-page"),Fe.firstElementChild.classList.toggle("zarbdar-tb"),document.querySelector(".ABL-LINE").classList.toggle("remove-1"),Fe.lastElementChild.classList.toggle("zarbdar-bt")});function Fi(){new U(".mySwiper",{slidesPerView:1,spaceBetween:10,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:4,spaceBetween:40},1024:{slidesPerView:2,spaceBetween:30}}}),new U(".mySwiper2",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})}Ri();
