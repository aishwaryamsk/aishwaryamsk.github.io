(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();const Lt="modulepreload",xt=function(t){return"/"+t},nt={},L=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=xt(r),r in nt)return;nt[r]=!0;const c=r.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":Lt,c||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),c)return new Promise((o,u)=>{s.addEventListener("load",o),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function g(){}function at(t,e){for(const n in e)t[n]=e[n];return t}function dt(t){return t()}function ot(){return Object.create(null)}function I(t){t.forEach(dt)}function G(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let V;function Jt(t,e){return V||(V=document.createElement("a")),V.href=e,t===V.href}function At(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Zt(t){return t&&G(t.destroy)?t.destroy:g}function U(t,e){t.appendChild(e)}function F(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function ht(t){return document.createTextNode(t)}function Pt(){return ht(" ")}function J(){return ht("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function It(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}let q;function D(t){q=t}function Q(){if(!q)throw new Error("Function called outside component initialization");return q}function Rt(t){Q().$$.after_update.push(t)}function Dt(t){Q().$$.on_destroy.push(t)}function qt(){const t=Q();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=It(e,n,{cancelable:i});return r.slice().forEach(l=>{l.call(t,c)}),!c.defaultPrevented}return!0}}function rt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const R=[],st=[],Y=[],it=[],_t=Promise.resolve();let M=!1;function mt(){M||(M=!0,_t.then(yt))}function Nt(){return mt(),_t}function W(t){Y.push(t)}const H=new Set;let X=0;function yt(){const t=q;do{for(;X<R.length;){const e=R[X];X++,D(e),Tt(e.$$)}for(D(null),R.length=0,X=0;st.length;)st.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];H.has(n)||(H.add(n),n())}Y.length=0}while(R.length);for(;it.length;)it.pop()();M=!1,H.clear(),D(t)}function Tt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}const B=new Set;let C;function Z(){C={r:0,c:[],p:C}}function tt(){C.r||I(C.c),C=C.p}function $(t,e){t&&t.i&&(B.delete(t),t.i(e))}function O(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),C.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function bt(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const l=t[c],s=e[c];if(s){for(const o in l)o in s||(i[o]=1);for(const o in s)r[o]||(n[o]=s[o],r[o]=1);t[c]=s}else for(const o in l)r[o]=1}for(const l in i)l in n||(n[l]=void 0);return n}function gt(t){return typeof t=="object"&&t!==null?t:{}}function N(t){t&&t.c()}function P(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:l,after_update:s}=t.$$;r&&r.m(e,n),i||W(()=>{const o=c.map(dt).filter(G);l?l.push(...o):I(o),t.$$.on_mount=[]}),s.forEach(W)}function S(t,e){const n=t.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(R.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(t,e,n,i,r,c,l,s=[-1]){const o=q;D(t);const u=t.$$={fragment:null,ctx:null,props:c,update:g,not_equal:r,bound:ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ot(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};l&&l(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},(_,w,...m)=>{const y=m.length?m[0]:w;return u.ctx&&r(u.ctx[_],u.ctx[_]=y)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](y),p&&Vt(t,_)),w}):[],u.update(),p=!0,I(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const _=St(e.target);u.fragment&&u.fragment.l(_),_.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&$(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),yt()}D(o)}class Et{$destroy(){S(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function x(t){if(!t)throw Error("Parameter args is required");if(!t.component==!t.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(t.component&&(t.asyncComponent=()=>Promise.resolve(t.component)),typeof t.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(t.conditions){Array.isArray(t.conditions)||(t.conditions=[t.conditions]);for(let n=0;n<t.conditions.length;n++)if(!t.conditions[n]||typeof t.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return t.loadingComponent&&(t.asyncComponent.loading=t.loadingComponent,t.asyncComponent.loadingParams=t.loadingParams||void 0),{component:t.asyncComponent,userData:t.userData,conditions:t.conditions&&t.conditions.length?t.conditions:void 0,props:t.props&&Object.keys(t.props).length?t.props:{},_sveltesparouter:!0}}const A=[];function kt(t,e){return{subscribe:vt(t,e).subscribe}}function vt(t,e=g){let n;const i=new Set;function r(s){if(K(t,s)&&(t=s,n)){const o=!A.length;for(const u of i)u[1](),A.push(u,t);if(o){for(let u=0;u<A.length;u+=2)A[u][0](A[u+1]);A.length=0}}}function c(s){r(s(t))}function l(s,o=g){const u=[s,o];return i.add(u),i.size===1&&(n=e(r)||g),s(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:r,update:c,subscribe:l}}function $t(t,e,n){const i=!Array.isArray(t),r=i?[t]:t,c=e.length<2;return kt(n,l=>{let s=!1;const o=[];let u=0,p=g;const _=()=>{if(u)return;p();const m=e(i?o[0]:o,l);c?l(m):p=G(m)?m:g},w=r.map((m,y)=>pt(m,T=>{o[y]=T,u&=~(1<<y),s&&_()},()=>{u|=1<<y}));return s=!0,_(),function(){I(w),p()}})}function Ut(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,i,r,c,l=[],s="",o=t.split("/");for(o[0]||o.shift();r=o.shift();)n=r[0],n==="*"?(l.push("wild"),s+="/(.*)"):n===":"?(i=r.indexOf("?",1),c=r.indexOf(".",1),l.push(r.substring(1,~i?i:~c?c:r.length)),s+=!!~i&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(s+=(~i?"?":"")+"\\"+r.substring(c))):s+="/"+r;return{keys:l,pattern:new RegExp("^"+s+(e?"(?=$|/)":"/?$"),"i")}}function zt(t){let e,n,i;const r=[t[2]];var c=t[0];function l(s){let o={};for(let u=0;u<r.length;u+=1)o=at(o,r[u]);return{props:o}}return c&&(e=new c(l()),e.$on("routeEvent",t[7])),{c(){e&&N(e.$$.fragment),n=J()},m(s,o){e&&P(e,s,o),F(s,n,o),i=!0},p(s,o){const u=o&4?bt(r,[gt(s[2])]):{};if(c!==(c=s[0])){if(e){Z();const p=e;O(p.$$.fragment,1,0,()=>{S(p,1)}),tt()}c?(e=new c(l()),e.$on("routeEvent",s[7]),N(e.$$.fragment),$(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else c&&e.$set(u)},i(s){i||(e&&$(e.$$.fragment,s),i=!0)},o(s){e&&O(e.$$.fragment,s),i=!1},d(s){s&&k(n),e&&S(e,s)}}}function Xt(t){let e,n,i;const r=[{params:t[1]},t[2]];var c=t[0];function l(s){let o={};for(let u=0;u<r.length;u+=1)o=at(o,r[u]);return{props:o}}return c&&(e=new c(l()),e.$on("routeEvent",t[6])),{c(){e&&N(e.$$.fragment),n=J()},m(s,o){e&&P(e,s,o),F(s,n,o),i=!0},p(s,o){const u=o&6?bt(r,[o&2&&{params:s[1]},o&4&&gt(s[2])]):{};if(c!==(c=s[0])){if(e){Z();const p=e;O(p.$$.fragment,1,0,()=>{S(p,1)}),tt()}c?(e=new c(l()),e.$on("routeEvent",s[6]),N(e.$$.fragment),$(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else c&&e.$set(u)},i(s){i||(e&&$(e.$$.fragment,s),i=!0)},o(s){e&&O(e.$$.fragment,s),i=!1},d(s){s&&k(n),e&&S(e,s)}}}function Yt(t){let e,n,i,r;const c=[Xt,zt],l=[];function s(o,u){return o[1]?0:1}return e=s(t),n=l[e]=c[e](t),{c(){n.c(),i=J()},m(o,u){l[e].m(o,u),F(o,i,u),r=!0},p(o,[u]){let p=e;e=s(o),e===p?l[e].p(o,u):(Z(),O(l[p],1,1,()=>{l[p]=null}),tt(),n=l[e],n?n.p(o,u):(n=l[e]=c[e](o),n.c()),$(n,1),n.m(i.parentNode,i))},i(o){r||($(n),r=!0)},o(o){O(n),r=!1},d(o){l[e].d(o),o&&k(i)}}}function ct(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let i="";return n>-1&&(i=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:i}}const et=kt(null,function(e){e(ct());const n=()=>{e(ct())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),oe=$t(et,t=>t.location);$t(et,t=>t.querystring);const ut=vt(void 0);function re(t,e){if(e=ft(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return lt(t,e),{update(n){n=ft(n),lt(t,n)}}}function Bt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function lt(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",i=>{i.preventDefault(),e.disabled||Ft(i.currentTarget.getAttribute("href"))})}function ft(t){return t&&typeof t=="string"?{href:t}:t||{}}function Ft(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function Ht(t,e,n){let{routes:i={}}=e,{prefix:r=""}=e,{restoreScrollState:c=!1}=e;class l{constructor(f,d){if(!d||typeof d!="function"&&(typeof d!="object"||d._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:b,keys:h}=Ut(f);this.path=f,typeof d=="object"&&d._sveltesparouter===!0?(this.component=d.component,this.conditions=d.conditions||[],this.userData=d.userData,this.props=d.props||{}):(this.component=()=>Promise.resolve(d),this.conditions=[],this.props={}),this._pattern=b,this._keys=h}match(f){if(r){if(typeof r=="string")if(f.startsWith(r))f=f.substr(r.length)||"/";else return null;else if(r instanceof RegExp){const v=f.match(r);if(v&&v[0])f=f.substr(v[0].length)||"/";else return null}}const d=this._pattern.exec(f);if(d===null)return null;if(this._keys===!1)return d;const b={};let h=0;for(;h<this._keys.length;){try{b[this._keys[h]]=decodeURIComponent(d[h+1]||"")||null}catch{b[this._keys[h]]=null}h++}return b}async checkConditions(f){for(let d=0;d<this.conditions.length;d++)if(!await this.conditions[d](f))return!1;return!0}}const s=[];i instanceof Map?i.forEach((a,f)=>{s.push(new l(f,a))}):Object.keys(i).forEach(a=>{s.push(new l(a,i[a]))});let o=null,u=null,p={};const _=qt();async function w(a,f){await Nt(),_(a,f)}let m=null,y=null;c&&(y=a=>{a.state&&(a.state.__svelte_spa_router_scrollY||a.state.__svelte_spa_router_scrollX)?m=a.state:m=null},window.addEventListener("popstate",y),Rt(()=>{Bt(m)}));let T=null,j=null;const Ct=et.subscribe(async a=>{T=a;let f=0;for(;f<s.length;){const d=s[f].match(a.location);if(!d){f++;continue}const b={route:s[f].path,location:a.location,querystring:a.querystring,userData:s[f].userData,params:d&&typeof d=="object"&&Object.keys(d).length?d:null};if(!await s[f].checkConditions(b)){n(0,o=null),j=null,w("conditionsFailed",b);return}w("routeLoading",Object.assign({},b));const h=s[f].component;if(j!=h){h.loading?(n(0,o=h.loading),j=h,n(1,u=h.loadingParams),n(2,p={}),w("routeLoaded",Object.assign({},b,{component:o,name:o.name,params:u}))):(n(0,o=null),j=null);const v=await h();if(a!=T)return;n(0,o=v&&v.default||v),j=h}d&&typeof d=="object"&&Object.keys(d).length?n(1,u=d):n(1,u=null),n(2,p=s[f].props),w("routeLoaded",Object.assign({},b,{component:o,name:o.name,params:u})).then(()=>{ut.set(u)});return}n(0,o=null),j=null,ut.set(void 0)});Dt(()=>{Ct(),y&&window.removeEventListener("popstate",y)});function Ot(a){rt.call(this,t,a)}function jt(a){rt.call(this,t,a)}return t.$$set=a=>{"routes"in a&&n(3,i=a.routes),"prefix"in a&&n(4,r=a.prefix),"restoreScrollState"in a&&n(5,c=a.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=c?"manual":"auto")},[o,u,p,i,r,c,Ot,jt]}class Mt extends Et{constructor(e){super(),wt(this,e,Ht,Yt,K,{routes:3,prefix:4,restoreScrollState:5})}}function Wt(t){let e,n,i,r,c,l,s;return l=new Mt({props:{routes:t[0]}}),{c(){e=z("link"),n=z("link"),i=z("link"),r=z("link"),c=Pt(),N(l.$$.fragment),E(e,"rel","stylesheet"),E(e,"href","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"),E(n,"rel","preconnect"),E(n,"href","https://fonts.googleapis.com"),E(i,"rel","preconnect"),E(i,"href","https://fonts.gstatic.com"),E(i,"crossorigin",""),E(r,"href","https://fonts.googleapis.com/css2?family=Aboreto&family=Bilbo+Swash+Caps&family=Nunito:wght@600&display=swap"),E(r,"rel","stylesheet")},m(o,u){U(document.head,e),U(document.head,n),U(document.head,i),U(document.head,r),F(o,c,u),P(l,o,u),s=!0},p:g,i(o){s||($(l.$$.fragment,o),s=!0)},o(o){O(l.$$.fragment,o),s=!1},d(o){k(e),k(n),k(i),k(r),o&&k(c),S(l,o)}}}function Gt(t){return[{"/mostCommonObjsInPaintings":x({asyncComponent:()=>L(()=>import("./ProjectDesc.ffa03fa6.js"),["assets/ProjectDesc.ffa03fa6.js","assets/projectsRef.7ab97463.js"])}),"/ethnicitiesInGrammys":x({asyncComponent:()=>L(()=>import("./ProjectDesc.ffa03fa6.js"),["assets/ProjectDesc.ffa03fa6.js","assets/projectsRef.7ab97463.js"])}),"/vast2022":x({asyncComponent:()=>L(()=>import("./ProjectDesc.ffa03fa6.js"),["assets/ProjectDesc.ffa03fa6.js","assets/projectsRef.7ab97463.js"])}),"/covid19sentiments":x({asyncComponent:()=>L(()=>import("./ProjectDesc.ffa03fa6.js"),["assets/ProjectDesc.ffa03fa6.js","assets/projectsRef.7ab97463.js"])}),"/about":x({asyncComponent:()=>L(()=>import("./About.d0a9319f.js"),[])}),"/":x({asyncComponent:()=>L(()=>import("./Home.627286b5.js"),["assets/Home.627286b5.js","assets/About.d0a9319f.js","assets/projectsRef.7ab97463.js"])})}]}class Kt extends Et{constructor(e){super(),wt(this,e,Gt,Wt,K,{})}}new Kt({target:document.getElementById("app")});export{Et as S,Pt as a,E as b,Jt as c,F as d,z as e,U as f,k as g,te as h,wt as i,Qt as j,Zt as k,oe as l,re as m,g as n,ne as o,N as p,P as q,$ as r,K as s,ht as t,O as u,S as v,ee as w,Z as x,tt as y,I as z};
