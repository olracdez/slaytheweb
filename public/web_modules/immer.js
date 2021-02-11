function t(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function e(t){return!!t&&!!t[K]}function r(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[I]||!!t.constructor[I]||f(t)||c(t))}function n(t,e,r){void 0===r&&(r=!1),0===o(t)?(r?Object.keys:M)(t).forEach((function(r){return e(r,t[r],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function o(t){var e=t[K];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:f(t)?2:c(t)?3:0}function i(t,e){return 2===o(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function u(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function f(t){return E&&t instanceof Map}function c(t){return N&&t instanceof Set}function a(t){return t.o||t.t}function s(e,r){if(void 0===r&&(r=!1),Array.isArray(e))return e.slice();var o=Object.create(Object.getPrototypeOf(e));return n(e,(function(n){if(n!==K){var i=Object.getOwnPropertyDescriptor(e,n),u=i.value;i.get&&(r||t(1),u=i.get.call(e)),i.enumerable?o[n]=u:Object.defineProperty(o,n,{value:u,writable:!0,configurable:!0})}})),o}function l(t,i){e(t)||y(t)||!r(t)||(o(t)>1&&(t.set=t.add=t.clear=t.delete=p),Object.freeze(t),i&&n(t,(function(t,e){return l(e,!0)}),!0))}function p(){t(2)}function y(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function d(e){var r=U[e];return r||t(19,e),r}function h(){return z}function v(t,e){e&&(d("Patches"),t.u=[],t.s=[],t.v=e)}function P(t){b(t),t.p.forEach(m),t.p=null}function b(t){t===z&&(z=t.l)}function g(t){return z={p:[],l:z,h:t,m:!0,_:0}}function m(t){var e=t[K];0===e.i||1===e.i?e.j():e.O=!0}function O(e,n){n._=n.p.length;var o=n.p[0],i=void 0!==e&&e!==o;return n.h.g||d("ES5").S(n,e,i),i?(o[K].P&&(P(n),t(4)),r(e)&&(e=A(n,e),n.l||w(n,e)),n.u&&d("Patches").M(o[K],e,n.u,n.s)):e=A(n,o,[]),P(n),n.u&&n.v(n.u,n.s),e!==W?e:void 0}function A(t,e,r){if(y(e))return e;var o=e[K];if(!o)return n(e,(function(n,i){return j(t,o,e,n,i,r)}),!0),e;if(o.A!==t)return e;if(!o.P)return w(t,o.t,!0),o.t;if(!o.I){o.I=!0,o.A._--;var i=4===o.i||5===o.i?o.o=s(o.k,!0):o.o;n(i,(function(e,n){return j(t,o,i,e,n,r)})),w(t,i,!1),r&&t.u&&d("Patches").R(o,r,t.u,t.s)}return o.o}function j(t,n,f,c,a,s){if(e(a)){var l=A(t,a,s&&n&&3!==n.i&&!i(n.D,c)?s.concat(c):void 0);if(y=c,d=l,2===(h=o(p=f))?p.set(y,d):3===h?(p.delete(y),p.add(d)):p[y]=d,!e(l))return;t.m=!1}var p,y,d,h;if((!n||!u(a,function(t,e){return 2===o(t)?t.get(e):t[e]}(n.t,c)))&&r(a)){if(!t.h.N&&t._<1)return;A(t,a),n&&n.A.l||w(t,a)}}function w(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&l(e,r)}function D(t,e){var r=t[K],n=Reflect.getOwnPropertyDescriptor(r?a(r):t,e);return n&&n.value}function S(t){if(!t.P){if(t.P=!0,0===t.i||1===t.i){var e=t.o=s(t.t);n(t.p,(function(t,r){e[t]=r})),t.p=void 0}t.l&&S(t.l)}}function x(t){t.o||(t.o=s(t.t))}function _(t,e,r){var n=f(e)?d("MapSet").T(e,r):c(e)?d("MapSet").F(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:h(),P:!1,I:!1,D:{},l:e,t:t,k:null,p:{},o:null,j:null,C:!1},o=n,i=C;r&&(o=[n],i=$);var u=Proxy.revocable(o,i),f=u.revoke,c=u.proxy;return n.k=c,n.j=f,c}(e,r):d("ES5").J(e,r);return(r?r.A:h()).p.push(n),n}var F,z,R="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),E="undefined"!=typeof Map,N="undefined"!=typeof Set,k="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=R?Symbol("immer-nothing"):((F={})["immer-nothing"]=!0,F),I=R?Symbol("immer-draftable"):"__$immer_draftable",K=R?Symbol("immer-state"):"__$immer_state",M="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,U={},C={get:function(t,e){if(e===K)return t;var n=t.p;if(!t.P&&i(n,e))return n[e];var o=a(t)[e];if(t.I||!r(o))return o;if(t.P){if(o!==D(t.t,e))return o;n=t.o}return n[e]=_(t.A.h,o,t)},has:function(t,e){return e in a(t)},ownKeys:function(t){return Reflect.ownKeys(a(t))},set:function(t,e,r){if(!t.P){var n=D(t.t,e);if(r?u(n,r)||r===t.p[e]:u(n,r)&&e in t.t)return!0;x(t),S(t)}return t.D[e]=!0,t.o[e]=r,!0},deleteProperty:function(t,e){return void 0!==D(t.t,e)||e in t.t?(t.D[e]=!1,x(t),S(t)):t.D[e]&&delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=a(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&(n.writable=!0,n.configurable=1!==t.i||"length"!==e),n},defineProperty:function(){t(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){t(12)}},$={};n(C,(function(t,e){$[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),$.deleteProperty=function(t,e){return C.deleteProperty.call(this,t[0],e)},$.set=function(t,e,r){return C.set.call(this,t[0],e,r,t[0])};var J=new(function(){function n(t){this.g=k,this.N=!1,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var o=n.prototype;return o.produce=function(e,n,o){if("function"==typeof e&&"function"!=typeof n){var i=n;n=e;var u=this;return function(t){var e=this;void 0===t&&(t=i);for(var r=arguments.length,o=Array(r>1?r-1:0),f=1;f<r;f++)o[f-1]=arguments[f];return u.produce(t,(function(t){var r;return(r=n).call.apply(r,[e,t].concat(o))}))}}var f;if("function"!=typeof n&&t(6),void 0!==o&&"function"!=typeof o&&t(7),r(e)){var c=g(this),a=_(this,e,void 0),s=!0;try{f=n(a),s=!1}finally{s?P(c):b(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(t){return v(c,o),O(t,c)}),(function(t){throw P(c),t})):(v(c,o),O(f,c))}if((f=n(e))!==W)return void 0===f&&(f=e),this.N&&l(f,!0),f},o.produceWithPatches=function(t,e){var r,n,o=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},o.createDraft=function(e){r(e)||t(8);var n=g(this),o=_(this,e,void 0);return o[K].C=!0,b(n),o},o.finishDraft=function(t,e){var r=(t&&t[K]).A;return v(r,e),O(void 0,r)},o.setAutoFreeze=function(t){this.N=t},o.setUseProxies=function(e){k||t(20),this.g=e},o.applyPatches=function(t,r){var n;for(n=r.length-1;n>=0;n--){var o=r[n];if(0===o.path.length&&"replace"===o.op){t=o.value;break}}var i=d("Patches").U;return e(t)?i(t,r):this.produce(t,(function(t){return i(t,r.slice(n+1))}))},n}()),T=J.produce,X=(J.produceWithPatches.bind(J),J.setAutoFreeze.bind(J));J.setUseProxies.bind(J),J.applyPatches.bind(J),J.createDraft.bind(J),J.finishDraft.bind(J);export default T;export{X as setAutoFreeze};
//# sourceMappingURL=immer.js.map
