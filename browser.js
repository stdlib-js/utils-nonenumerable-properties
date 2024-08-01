// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=void 0!==Object.getOwnPropertyNames,r=Object,t=r.getOwnPropertyNames;function n(e){return Object.keys(Object(e))}var i=void 0!==Object.keys,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function a(){return o&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString,c=Object.prototype.hasOwnProperty;function f(e,r){return null!=e&&c.call(e,r)}var l,s="function"==typeof Symbol?Symbol:void 0,p="function"==typeof s?s.toStringTag:"",g=a()?function(e){var r,t,n;if(null==e)return u.call(e);t=e[p],r=f(e,p);try{e[p]=void 0}catch(r){return u.call(e)}return n=u.call(e),r?e[p]=t:delete e[p],n}:function(e){return u.call(e)};function d(e){return"[object Arguments]"===g(e)}l=function(){return d(arguments)}();var h=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null,b=Object.defineProperty;function v(e){return"number"==typeof e}function w(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function m(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+w(i):w(i)+e,n&&(e="-"+e)),e}var j=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function O(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=m(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=m(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===S.call(e.specifier)?S.call(t):j.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var E=Math.abs,_=String.prototype.toLowerCase,k=String.prototype.toUpperCase,T=String.prototype.replace,x=/e\+(\d)$/,I=/e-(\d)$/,P=/^(\d+)$/,A=/^(\d+)e/,V=/\.0$/,F=/\.0*e/,N=/(\..*[^0])0*e/;function $(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!v(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":E(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=T.call(t,N,"$1e"),t=T.call(t,F,"e"),t=T.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=T.call(t,x,"e+0$1"),t=T.call(t,I,"e-0$1"),e.alternate&&(t=T.call(t,P,"$1."),t=T.call(t,A,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===k.call(e.specifier)?k.call(t):_.call(t)}function C(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var B=String.fromCharCode,L=Array.isArray;function R(e){return e!=e}function G(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function W(e){var r,t,n,i,o,a,u,c,f,l,s,p,g;if(!L(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if("string"==typeof(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,R(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=O(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!R(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(o)?String(n.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=$(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+C(g):C(g)+l)),a+=n.arg||"",u+=1}return a}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Z(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function M(e){var r,t,n,i;for(t=[],i=0,n=X.exec(e);n;)(r=e.slice(i,X.lastIndex-n[0].length)).length&&t.push(r),t.push(Z(n)),i=X.lastIndex,n=X.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Y(e){var r,t;if("string"!=typeof e)throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[M(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return W.apply(null,r)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(e){return!1}}()?b:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(e,r)||K.call(e,r)?(n=e.__proto__,e.__proto__=H,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(e,r,t.get),a&&q&&q.call(e,r,t.set),e};var Q=U;function ee(e,r,t){Q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function re(e){return"string"==typeof e}var te=String.prototype.valueOf,ne=a();function ie(e){return"object"==typeof e&&(e instanceof String||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object String]"===g(e)))}function oe(e){return re(e)||ie(e)}function ae(e){return"number"==typeof e}ee(oe,"isPrimitive",re),ee(oe,"isObject",ie);var ue=Number,ce=ue.prototype.toString,fe=a();function le(e){return"object"==typeof e&&(e instanceof ue||(fe?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Number]"===g(e)))}function se(e){return ae(e)||le(e)}function pe(e){return e!=e}function ge(e){return ae(e)&&pe(e)}function de(e){return le(e)&&pe(e.valueOf())}function he(e){return ge(e)||de(e)}ee(se,"isPrimitive",ae),ee(se,"isObject",le),ee(he,"isPrimitive",ge),ee(he,"isObject",de);var ye=Number.POSITIVE_INFINITY,be=ue.NEGATIVE_INFINITY,ve=Math.floor;function we(e){return ve(e)===e}function me(e){return e<ye&&e>be&&we(e)}function je(e){return ae(e)&&me(e)}function Se(e){return le(e)&&me(e.valueOf())}function Oe(e){return je(e)||Se(e)}ee(Oe,"isPrimitive",je),ee(Oe,"isObject",Se);var Ee=Object.prototype.propertyIsEnumerable,_e=!Ee.call("beep","0");function ke(e,r){var t;return null!=e&&(!(t=Ee.call(e,r))&&_e&&oe(e)?!ge(r=+r)&&je(r)&&r>=0&&r<e.length:t)}var Te=Array.isArray?Array.isArray:function(e){return"[object Array]"===g(e)},xe=h?d:function(e){return null!==e&&"object"==typeof e&&!Te(e)&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=4294967295&&f(e,"callee")&&!ke(e,"callee")},Ie=Array.prototype.slice;function Pe(e){return null!==e&&"object"==typeof e}ee(Pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Te(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Pe));var Ae=ke((function(){}),"prototype"),Ve=!ke({toString:null},"toString"),Fe=9007199254740991;function Ne(e,r,t){var n,i,o;if(!("object"==typeof(o=e)&&null!==o&&"number"==typeof o.length&&we(o.length)&&o.length>=0&&o.length<=Fe||re(e)))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!je(t))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(he(r)){for(;i<n;i++)if(he(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var $e=/./;function Ce(e){return"boolean"==typeof e}var Be=Boolean,Le=Boolean.prototype.toString,Re=a();function Ge(e){return"object"==typeof e&&(e instanceof Be||(Re?function(e){try{return Le.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function We(e){return Ce(e)||Ge(e)}ee(We,"isPrimitive",Ce),ee(We,"isObject",Ge);var Xe="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Me="object"==typeof globalThis?globalThis:null,Ye=function(e){if(arguments.length){if(!Ce(e))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Me)return Me;if(Xe)return Xe;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),Ue=Ye.document&&Ye.document.childNodes,He=Int8Array;function ze(){return/^\s*function\s*([^(]*)/i}var De=/^\s*function\s*([^(]*)/i;function qe(e){var r,t,n,i;if(("Object"===(t=g(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=De.exec(n.toString()))return r[1]}return Pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ee(ze,"REGEXP",De);var Je="function"==typeof $e||"object"==typeof He||"function"==typeof Ue?function(e){return qe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?qe(e).toLowerCase():r};function Ke(e){return e.constructor&&e.constructor.prototype===e}var Qe,er=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],rr="undefined"==typeof window?void 0:window,tr=function(){var e;if("undefined"===Je(rr))return!1;for(e in rr)try{-1===Ne(er,e)&&f(rr,e)&&null!==rr[e]&&"object"===Je(rr[e])&&Ke(rr[e])}catch(e){return!0}return!1}(),nr="undefined"!=typeof window,ir=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Qe=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(e){return xe(e)?n(Ie.call(e)):n(e)}:n:function(e){var r,t,n,i,o,a,u;if(i=[],xe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!f(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Pe(e))return i;t=Ae&&n}for(o in e)t&&"prototype"===o||!f(e,o)||i.push(String(o));if(Ve)for(r=function(e){if(!1===nr&&!tr)return Ke(e);try{return Ke(e)}catch(e){return!1}}(e),u=0;u<ir.length;u++)a=ir[u],r&&"constructor"===a||!f(e,a)||i.push(String(a));return i};var or=Qe,ar=e?function(e){return t(r(e))}:function(e){return or(r(e))},ur=void 0!==Object.getOwnPropertySymbols,cr=r.getOwnPropertySymbols,fr=ur?function(e){return cr(r(e))}:function(){return[]};function lr(e,r){return!1!==f(e,r)&&!1===ke(e,r)}return function(e){var r,t,n,i;for(r=ar(e),n=0,i=0;i<r.length;i++)lr(e,r[i])&&(r[n]=r[i],n+=1);for(r.length=n,t=fr(e),i=0;i<t.length;i++)lr(e,t[i])&&r.push(t[i]);return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nonEnumerableProperties=r();
//# sourceMappingURL=browser.js.map
