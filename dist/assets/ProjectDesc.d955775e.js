import{S as V,i as W,s as X,e as o,a as b,t as T,b as s,c as Y,d as m,f as l,n as h,g as j,h as Z,j as x,l as ee}from"./index.37291f6d.js";import{p as f}from"./projectsRef.bce0bfe8.js";function N(n,e,a){const i=n.slice();return i[2]=e[a],i}function te(n){let e,a,i,t,r;return{c(){e=o("span"),a=o("i"),i=b(),t=o("a"),r=T("GitHub"),s(a,"class","bi bi-link-45deg link-icon"),s(t,"class","proj-link bold-txt"),s(t,"href",f.projects[n[0]].github),s(t,"target","_blank"),s(e,"class","p-1")},m(p,k){m(p,e,k),l(e,a),l(e,i),l(e,t),l(t,r)},p:h,d(p){p&&j(e)}}}function le(n){let e,a,i,t,r;return{c(){e=o("span"),a=o("i"),i=b(),t=o("a"),r=T("Challenge"),s(a,"class","bi bi-link-45deg link-icon"),s(t,"class","proj-link bold-txt"),s(t,"href",f.projects[n[0]].challengeLink),s(t,"target","_blank"),s(e,"class","p-1")},m(p,k){m(p,e,k),l(e,a),l(e,i),l(e,t),l(t,r)},p:h,d(p){p&&j(e)}}}function se(n){let e,a,i,t,r;return{c(){e=o("span"),a=o("i"),i=b(),t=o("a"),r=T("Reference Dataset"),s(a,"class","bi bi-link-45deg link-icon"),s(t,"class","proj-link bold-txt"),s(t,"href",f.projects[n[0]].refDataset),s(t,"target","_blank"),s(e,"class","p-1")},m(p,k){m(p,e,k),l(e,a),l(e,i),l(e,t),l(t,r)},p:h,d(p){p&&j(e)}}}function O(n){let e,a=n[2]+"",i;return{c(){e=o("li"),i=T(a),s(e,"class","one-line-list")},m(t,r){m(t,e,r),l(e,i)},p:h,d(t){t&&j(e)}}}function ne(n){let e;return{c(){e=o("span"),e.textContent=`Data Source:
        ${f.projects[n[0]].source}`,s(e,"class","bold-txt")},m(a,i){m(a,e,i)},p:h,d(a){a&&j(e)}}}function ae(n){let e,a,i,t=f.projects[n[0]].source+"",r;return{c(){e=o("span"),e.textContent="Data Source:",a=b(),i=o("a"),r=T(t),s(e,"class","bold-txt"),s(i,"class","proj-link"),s(i,"href",f.projects[n[0]].sourceLink),s(i,"target","_blank")},m(p,k){m(p,e,k),m(p,a,k),m(p,i,k),l(i,r)},p:h,d(p){p&&j(e),p&&j(a),p&&j(i)}}}function ie(n){let e,a,i,t,r,p,k,d,C,R,P,S,y,z,A,B,E,G,F,q,I,$,w,Q=f.projects[n[0]].longDescription+"",J,v=f.projects[n[0]].github&&te(n),D=f.projects[n[0]].challengeLink&&le(n),L=f.projects[n[0]].refDataset&&se(n),H=f.projects[n[0]].languages,_=[];for(let c=0;c<H.length;c+=1)_[c]=O(N(n,H,c));function U(c,g){return f.projects[c[0]].sourceLink?ae:ne}let M=U(n)(n);return{c(){e=o("div"),a=o("div"),a.textContent=`${f.projects[n[0]].title}`,i=b(),t=o("div"),r=o("img"),k=b(),d=o("p"),C=o("span"),R=o("i"),P=b(),S=o("a"),y=T("Demo"),z=b(),v&&v.c(),A=b(),D&&D.c(),B=b(),L&&L.c(),E=b(),G=o("div"),G.innerHTML='<span class="bold-txt">Tools:</span>',F=b(),q=o("ul");for(let c=0;c<_.length;c+=1)_[c].c();I=b(),$=o("div"),w=o("p"),J=b(),M.c(),s(a,"class","proj-title text-center pt-5 pb-3"),s(r,"class","proj-img me-auto d-block"),Y(r.src,p=f.projects[n[0]].imgSrc)||s(r,"src",p),s(r,"alt","project cover"),s(R,"class","bi bi-link-45deg link-icon"),s(S,"class","proj-link bold-txt"),s(S,"href",f.projects[n[0]].demoLink),s(S,"target","_blank"),s(C,"class","p-1"),s(q,"class","clearfix"),s(t,"class","col-sm-5 p-3"),s(w,"class","break-line"),s($,"class","col-sm-7 p-3"),s(e,"class","row g-0")},m(c,g){m(c,e,g),l(e,a),l(e,i),l(e,t),l(t,r),l(t,k),l(t,d),l(d,C),l(C,R),l(C,P),l(C,S),l(S,y),l(d,z),v&&v.m(d,null),l(d,A),D&&D.m(d,null),l(d,B),L&&L.m(d,null),l(t,E),l(t,G),l(t,F),l(t,q);for(let u=0;u<_.length;u+=1)_[u].m(q,null);l(e,I),l(e,$),l($,w),w.innerHTML=Q,l($,J),M.m($,null)},p(c,[g]){if(f.projects[c[0]].github&&v.p(c,g),f.projects[c[0]].challengeLink&&D.p(c,g),f.projects[c[0]].refDataset&&L.p(c,g),g&1){H=f.projects[c[0]].languages;let u;for(u=0;u<H.length;u+=1){const K=N(c,H,u);_[u]?_[u].p(K,g):(_[u]=O(K),_[u].c(),_[u].m(q,null))}for(;u<_.length;u+=1)_[u].d(1);_.length=H.length}M.p(c,g)},i:h,o:h,d(c){c&&j(e),v&&v.d(),D&&D.d(),L&&L.d(),Z(_,c),M.d()}}}function ce(n,e,a){let i;return x(n,ee,r=>a(1,i=r)),[i.replace(/\//g,"")]}class fe extends V{constructor(e){super(),W(this,e,ce,ie,X,{})}}export{fe as default};
