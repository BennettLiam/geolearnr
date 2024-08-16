var Jn=Array.isArray,Qn=Array.from,Xn=Object.isFrozen,Zn=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,xn=Object.getOwnPropertyDescriptors,rr=Object.prototype,tr=Array.prototype,Fn=Object.getPrototypeOf;const er=()=>{};function ur(n){return n()}function Dn(n){for(var r=0;r<n.length;r++)n[r]()}const T=2,rn=4,D=8,tn=16,E=32,G=64,g=128,L=256,w=512,m=1024,C=2048,F=4096,R=8192,Cn=16384,en=32768,lr=65536,Rn=1<<18,$=Symbol("$state"),or=Symbol("");function un(n){return n===this.v}function bn(n,r){return n!=n?r==r:n!==r||n!==null&&typeof n=="object"||typeof n=="function"}function ln(n){return!bn(n,this.v)}function Nn(n){throw new Error("effect_in_teardown")}function jn(){throw new Error("effect_in_unowned_derived")}function In(n){throw new Error("effect_orphan")}function Ln(){throw new Error("effect_update_depth_exceeded")}function sr(){throw new Error("hydration_failed")}function ir(n){throw new Error("props_invalid_value")}function Mn(){throw new Error("state_unsafe_mutation")}function on(n){return{f:0,v:n,reactions:null,equals:un,version:0}}function fr(n){var t;const r=on(n);return r.equals=ln,v!==null&&v.l!==null&&((t=v.l).s??(t.s=[])).push(r),r}function Pn(n,r){return i!==null&&z()&&i.f&T&&Mn(),n.equals(r)||(n.v=r,n.version=kn(),sn(n,m),z()&&f!==null&&f.f&w&&!(f.f&E)&&(_!==null&&_.includes(n)?(h(f,m),H(f)):d===null?Kn([n]):d.push(n))),r}function sn(n,r){var t=n.reactions;if(t!==null){var e=z();for(var u of t){var l=u.f;l&m||!e&&u===f||(h(u,r),l&(w|g)&&(l&T?sn(u,C):H(u)))}}}function fn(n){f===null&&i===null&&In(),i!==null&&i.f&g&&jn(),V&&Nn()}function J(n,r){var t=r.last;t===null?r.last=r.first=n:(t.next=n,n.prev=t,r.last=n)}function b(n,r,t,e=!0){var u=(n&G)!==0,l=f,o={ctx:v,deps:null,nodes:null,f:n|m,first:null,fn:r,last:null,next:null,parent:u?null:l,prev:null,teardown:null,transitions:null,version:0};if(t){var s=q;try{Q(!0),B(o),o.f|=Cn}catch(a){throw P(o),a}finally{Q(s)}}else r!==null&&H(o);var p=t&&o.deps===null&&o.first===null&&o.nodes===null&&o.teardown===null;return!p&&!u&&e&&(l!==null&&J(o,l),i!==null&&i.f&T&&J(o,i)),o}function ar(n){const r=b(D,null,!1);return h(r,w),r.teardown=n,r}function _r(n){fn();var r=f!==null&&(f.f&D)!==0&&v!==null&&!v.m;if(r){var t=v;(t.e??(t.e=[])).push(n)}else{var e=an(n);return e}}function cr(n){return fn(),_n(n)}function vr(n){const r=b(G,n,!0);return()=>{P(r)}}function an(n){return b(rn,n,!1)}function _n(n){return b(D,n,!0)}function pr(n){return _n(n)}function hr(n,r=0){return b(D|tn|r,n,!0)}function wr(n,r=!0){return b(D|E,n,!0,r)}function cn(n){var r=n.teardown;if(r!==null){const t=V,e=i;X(!0),Z(null);try{r.call(null)}finally{X(t),Z(e)}}}function P(n,r=!0){var t=!1;if((r||n.f&Rn)&&n.nodes!==null){for(var e=n.nodes.start,u=n.nodes.end;e!==null;){var l=e===u?null:e.nextSibling;e.remove(),e=l}t=!0}if(W(n,r&&!t),Y(n,0),h(n,R),n.transitions)for(const s of n.transitions)s.stop();cn(n);var o=n.parent;o!==null&&n.f&E&&o.first!==null&&vn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function vn(n){var r=n.parent,t=n.prev,e=n.next;t!==null&&(t.next=e),e!==null&&(e.prev=t),r!==null&&(r.first===n&&(r.first=e),r.last===n&&(r.last=t))}function Er(n,r){var t=[];pn(n,t,!0),Yn(t,()=>{P(n),r&&r()})}function Yn(n,r){var t=n.length;if(t>0){var e=()=>--t||r();for(var u of n)u.out(e)}else r()}function pn(n,r,t){if(!(n.f&F)){if(n.f^=F,n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&r.push(o);for(var e=n.first;e!==null;){var u=e.next,l=(e.f&en)!==0||(e.f&E)!==0;pn(e,r,l?t:!1),e=u}}}function yr(n){hn(n,!0)}function hn(n,r){if(n.f&F){n.f^=F,j(n)&&B(n);for(var t=n.first;t!==null;){var e=t.next,u=(t.f&en)!==0||(t.f&E)!==0;hn(t,u?r:!1),t=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&l.in()}}let M=!1,U=[];function wn(){M=!1;const n=U.slice();U=[],Dn(n)}function dr(n){M||(M=!0,queueMicrotask(wn)),U.push(n)}function Bn(){M&&wn()}function Hn(n){let r=T|m;f===null&&(r|=g);const t={deps:null,deriveds:null,equals:un,f:r,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(i!==null&&i.f&T){var e=i;e.deriveds===null?e.deriveds=[t]:e.deriveds.push(t)}return t}function mr(n){const r=Hn(n);return r.equals=ln,r}function En(n){W(n);var r=n.deriveds;if(r!==null){n.deriveds=null;for(var t=0;t<r.length;t+=1)Un(r[t])}}function yn(n){var r;En(n),r=Tn(n);var t=(O||n.f&g)&&n.deps!==null?C:w;h(n,t),n.equals(r)||(n.v=r,n.version=kn())}function Un(n){En(n),Y(n,0),h(n,R),n.first=n.last=n.deps=n.reactions=n.fn=null}const dn=0,zn=1;let I=dn,N=!1,q=!1,V=!1;function Q(n){q=n}function X(n){V=n}let k=[],x=0,i=null;function Z(n){i=n}let f=null,_=null,c=0,d=null;function Kn(n){d=n}let mn=0,O=!1,v=null;function kn(){return mn++}function z(){return v!==null&&v.l===null}function j(n){var o,s;var r=n.f;if(r&m)return!0;if(r&C){var t=n.deps,e=(r&g)!==0;if(t!==null){var u;if(r&L){for(u=0;u<t.length;u++)((o=t[u]).reactions??(o.reactions=new Set)).add(n);n.f^=L}for(u=0;u<t.length;u++){var l=t[u];if(j(l)&&yn(l),l.version>n.version)return!0;e&&!O&&!((s=l==null?void 0:l.reactions)!=null&&s.has(n))&&(l.reactions??(l.reactions=new Set)).add(n)}}e||h(n,w)}return!1}function Gn(n,r,t){throw n}function Tn(n){var y;var r=_,t=c,e=d,u=i,l=O;_=null,c=0,d=null,i=n.f&(E|G)?null:n,O=!q&&(n.f&g)!==0;try{var o=(0,n.fn)(),s=n.deps;if(_!==null){var p,a;if(s!==null){var S=c===0?_:s.slice(0,c).concat(_),A=S.length>16?new Set(S):null;for(a=c;a<s.length;a++)p=s[a],(A!==null?!A.has(p):!S.includes(p))&&gn(n,p)}if(s!==null&&c>0)for(s.length=c+_.length,a=0;a<_.length;a++)s[c+a]=_[a];else n.deps=s=_;if(!O)for(a=c;a<s.length;a++)((y=s[a]).reactions??(y.reactions=new Set)).add(n)}else s!==null&&c<s.length&&(Y(n,c),s.length=c);return o}finally{_=r,c=t,d=e,i=u,O=l}}function gn(n,r){let t=r.reactions;t!==null&&(t.delete(n),t.size===0&&(t=r.reactions=null)),t===null&&r.f&T&&(h(r,C),r.f&(g|L)||(r.f^=L),Y(r,0))}function Y(n,r){var t=n.deps;if(t!==null)for(var e=r===0?null:t.slice(0,r),u=new Set,l=r;l<t.length;l++){var o=t[l];u.has(o)||(u.add(o),(e===null||!e.includes(o))&&gn(n,o))}}function W(n,r=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var e=t.next;P(t,r),t=e}}function B(n){var r=n.f;if(!(r&R)){h(n,w);var t=n.ctx,e=f,u=v;f=n,v=t;try{r&tn||W(n),cn(n);var l=Tn(n);n.teardown=typeof l=="function"?l:null,n.version=mn}catch(o){Gn(o)}finally{f=e,v=u}}}function Sn(){x>1e3&&(x=0,Ln()),x++}function An(n){var r=n.length;if(r!==0){Sn();var t=q;q=!0;try{for(var e=0;e<r;e++){var u=n[e];if(u.first===null&&!(u.f&E))nn([u]);else{var l=[];On(u,l),nn(l)}}}finally{q=t}}}function nn(n){var r=n.length;if(r!==0)for(var t=0;t<r;t++){var e=n[t];!(e.f&(R|F))&&j(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?vn(e):e.fn=null))}}function Vn(){if(N=!1,x>1001)return;const n=k;k=[],An(n),N||(x=0)}function H(n){I===dn&&(N||(N=!0,queueMicrotask(Vn)));for(var r=n;r.parent!==null;){r=r.parent;var t=r.f;if(t&E){if(!(t&w))return;h(r,C)}}k.push(r)}function On(n,r){var t=n.first,e=[];n:for(;t!==null;){var u=t.f,l=(u&(R|F))===0,o=u&E,s=(u&w)!==0,p=t.first;if(l&&(!o||!s)){if(o&&h(t,w),u&D){if(!o&&j(t)&&(B(t),p=t.first),p!==null){t=p;continue}}else if(u&rn)if(o||s){if(p!==null){t=p;continue}}else e.push(t)}var a=t.next;if(a===null){let y=t.parent;for(;y!==null;){if(n===y)break n;var S=y.next;if(S!==null){t=S;continue n}y=y.parent}}t=a}for(var A=0;A<e.length;A++)p=e[A],r.push(p),On(p,r)}function qn(n){var r=I,t=k;try{Sn();const u=[];I=zn,k=u,N=!1,An(t);var e=n==null?void 0:n();return Bn(),(k.length>0||u.length>0)&&qn(),x=0,e}finally{I=r,k=t}}async function kr(){await Promise.resolve(),qn()}function Wn(n){var r=n.f;if(r&R)return n.v;if(i!==null){var t=i.deps;_===null&&t!==null&&t[c]===n?c++:(t===null||c===0||t[c-1]!==n)&&(_===null?_=[n]:_[_.length-1]!==n&&_.push(n)),d!==null&&f!==null&&f.f&w&&!(f.f&E)&&d.includes(n)&&(h(f,m),H(f))}if(r&T){var e=n;j(e)&&yn(e)}return n.v}function Tr(n){const r=i;try{return i=null,n()}finally{i=r}}const $n=~(m|C|w);function h(n,r){n.f=n.f&$n|r}function gr(n,r=1){var t=+Wn(n);return Pn(n,t+r),t}function Sr(n,r=!1,t){v={p:v,c:null,e:null,m:!1,s:n,x:null,l:null},r||(v.l={s:null,u:null,r1:[],r2:on(!1)})}function Ar(n){const r=v;if(r!==null){const e=r.e;if(e!==null){r.e=null;for(var t=0;t<e.length;t++)an(e[t])}v=r.p,r.m=!0}return{}}function Or(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if($ in n)K(n);else if(!Array.isArray(n))for(let r in n){const t=n[r];typeof t=="object"&&t&&$ in t&&K(t)}}}function K(n,r=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!r.has(n)){r.add(n),n instanceof Date&&n.getTime();for(let e in n)try{K(n[e],r)}catch{}const t=Fn(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const e=xn(t);for(let u in e){const l=e[u].get;if(l)try{l.call(n)}catch{}}}}}export{fr as A,pr as B,hr as C,yr as D,Er as E,pn as F,Yn as G,P as H,F as I,gr as J,en as K,or as L,an as M,_n as N,dr as O,ir as P,lr as Q,ln as R,$ as S,Hn as T,mr as U,qn as V,kr as W,bn as X,tr as a,Jn as b,Pn as c,Zn as d,Wn as e,f,nr as g,Fn as h,Xn as i,sr as j,Qn as k,vr as l,wr as m,Ar as n,rr as o,Sr as p,v as q,cr as r,on as s,_r as t,Tr as u,Dn as v,ur as w,Or as x,er as y,ar as z};
