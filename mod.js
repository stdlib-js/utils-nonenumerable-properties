// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function a(){return o&&"symbol"==typeof Symbol.toStringTag}var c=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function s(r,e){return null!=r&&u.call(r,e)}var l="function"==typeof Symbol?Symbol:void 0,f="function"==typeof l?l.toStringTag:"";var p=a()?function(r){var e,t,n;if(null==r)return c.call(r);t=r[f],e=s(r,f);try{r[f]=void 0}catch(e){return c.call(r)}return n=c.call(r),e?r[f]=t:delete r[f],n}:function(r){return c.call(r)};function g(r){return"[object Arguments]"===p(r)}var d=function(){return g(arguments)}(),h="function"==typeof Object.defineProperty?Object.defineProperty:null;var b=Object.defineProperty;function y(r){return"number"==typeof r}function v(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function w(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+v(i):v(i)+r,n&&(r="-"+r)),r}var m=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function j(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=w(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=w(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===S.call(r.specifier)?S.call(t):m.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function E(r){return"string"==typeof r}var k=Math.abs,O=String.prototype.toLowerCase,x=String.prototype.toUpperCase,_=String.prototype.replace,I=/e\+(\d)$/,T=/e-(\d)$/,V=/^(\d+)$/,A=/^(\d+)e/,F=/\.0$/,P=/\.0*e/,$=/(\..*[^0])0*e/;function C(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":k(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,$,"$1e"),t=_.call(t,P,"e"),t=_.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,I,"e+0$1"),t=_.call(t,T,"e-0$1"),r.alternate&&(t=_.call(t,V,"$1."),t=_.call(t,A,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===x.call(r.specifier)?x.call(t):O.call(t)}function N(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+N(n):N(n)+r}var L=String.fromCharCode,W=isNaN,Z=Array.isArray;function B(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function G(r){var e,t,n,i,o,a,c,u,s;if(!Z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(E(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,W(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=j(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=w(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=X.exec(r);n;)(e=r.slice(i,X.lastIndex-n[0].length)).length&&t.push(e),t.push(M(n)),i=X.lastIndex,n=X.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Y(r){return"string"==typeof r}function z(r){var e,t;if(!Y(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return G.apply(null,e)}var H,D=Object.prototype,q=D.toString,J=D.__defineGetter__,K=D.__defineSetter__,Q=D.__lookupGetter__,rr=D.__lookupSetter__;H=function(){try{return h({},"x",{}),!0}catch(r){return!1}}()?b:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===q.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===q.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Q.call(r,e)||rr.call(r,e)?(n=r.__proto__,r.__proto__=D,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&J&&J.call(r,e,t.get),a&&K&&K.call(r,e,t.set),r};var er=H;function tr(r,e,t){er(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function nr(r){return"string"==typeof r}var ir=Object.prototype.toString;var or="function"==typeof l?l.toStringTag:"";var ar=a()?function(r){var e,t,n;if(null==r)return ir.call(r);t=r[or],e=s(r,or);try{r[or]=void 0}catch(e){return ir.call(r)}return n=ir.call(r),e?r[or]=t:delete r[or],n}:function(r){return ir.call(r)},cr=String.prototype.valueOf;var ur=a();function sr(r){return"object"==typeof r&&(r instanceof String||(ur?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===ar(r)))}function lr(r){return nr(r)||sr(r)}function fr(r){return"number"==typeof r}tr(lr,"isPrimitive",nr),tr(lr,"isObject",sr);var pr=Object.prototype.toString;var gr="function"==typeof l?l.toStringTag:"";var dr=a()?function(r){var e,t,n;if(null==r)return pr.call(r);t=r[gr],e=s(r,gr);try{r[gr]=void 0}catch(e){return pr.call(r)}return n=pr.call(r),e?r[gr]=t:delete r[gr],n}:function(r){return pr.call(r)},hr=Number,br=hr.prototype.toString;var yr=a();function vr(r){return"object"==typeof r&&(r instanceof hr||(yr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===dr(r)))}function wr(r){return fr(r)||vr(r)}function mr(r){return r!=r}function Sr(r){return fr(r)&&mr(r)}function jr(r){return vr(r)&&mr(r.valueOf())}function Er(r){return Sr(r)||jr(r)}tr(wr,"isPrimitive",fr),tr(wr,"isObject",vr),tr(Er,"isPrimitive",Sr),tr(Er,"isObject",jr);var kr=Number.POSITIVE_INFINITY,Or=hr.NEGATIVE_INFINITY,xr=Math.floor;function _r(r){return xr(r)===r}function Ir(r){return r<kr&&r>Or&&_r(r)}function Tr(r){return fr(r)&&Ir(r)}function Vr(r){return vr(r)&&Ir(r.valueOf())}function Ar(r){return Tr(r)||Vr(r)}tr(Ar,"isPrimitive",Tr),tr(Ar,"isObject",Vr);var Fr=Object.prototype.propertyIsEnumerable;var Pr=!Fr.call("beep","0");function $r(r,e){var t;return null!=r&&(!(t=Fr.call(r,e))&&Pr&&lr(r)?!Sr(e=+e)&&Tr(e)&&e>=0&&e<r.length:t)}var Cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===p(r)};var Nr=d?g:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&_r(r.length)&&r.length>=0&&r.length<=4294967295&&s(r,"callee")&&!$r(r,"callee")},Rr=Array.prototype.slice;function Lr(r){return"number"==typeof r}function Wr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Zr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Wr(i):Wr(i)+r,n&&(r="-"+r)),r}var Br=String.prototype.toLowerCase,Gr=String.prototype.toUpperCase;function Xr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Lr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Zr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Zr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Gr.call(r.specifier)?Gr.call(t):Br.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Mr(r){return"string"==typeof r}var Ur=Math.abs,Yr=String.prototype.toLowerCase,zr=String.prototype.toUpperCase,Hr=String.prototype.replace,Dr=/e\+(\d)$/,qr=/e-(\d)$/,Jr=/^(\d+)$/,Kr=/^(\d+)e/,Qr=/\.0$/,re=/\.0*e/,ee=/(\..*[^0])0*e/;function te(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Lr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ur(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Hr.call(t,ee,"$1e"),t=Hr.call(t,re,"e"),t=Hr.call(t,Qr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Hr.call(t,Dr,"e+0$1"),t=Hr.call(t,qr,"e-0$1"),r.alternate&&(t=Hr.call(t,Jr,"$1."),t=Hr.call(t,Kr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===zr.call(r.specifier)?zr.call(t):Yr.call(t)}function ne(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ie(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ne(n):ne(n)+r}var oe=String.fromCharCode,ae=isNaN,ce=Array.isArray;function ue(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function se(r){var e,t,n,i,o,a,c,u,s;if(!ce(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Mr(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=ue(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ae(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ae(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Xr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ae(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ae(o)?String(n.arg):oe(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=te(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Zr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ie(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var le=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function fe(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function pe(r){var e,t,n,i;for(t=[],i=0,n=le.exec(r);n;)(e=r.slice(i,le.lastIndex-n[0].length)).length&&t.push(e),t.push(fe(n)),i=le.lastIndex,n=le.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ge(r){return"string"==typeof r}function de(r){var e,t;if(!ge(r))throw new TypeError(de("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[pe(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return se.apply(null,e)}function he(r){return null!==r&&"object"==typeof r}tr(he,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(de("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(he));var be=$r((function(){}),"prototype"),ye=!$r({toString:null},"toString");function ve(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&_r(r.length)&&r.length>=0&&r.length<=9007199254740991}function we(r,e,t){var n,i;if(!ve(r)&&!nr(r))throw new TypeError(de("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Tr(t))throw new TypeError(de("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Er(e)){for(;i<n;i++)if(Er(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var me=/./;function Se(r){return"boolean"==typeof r}var je=Boolean,Ee=Boolean.prototype.toString;var ke=a();function Oe(r){return"object"==typeof r&&(r instanceof je||(ke?function(r){try{return Ee.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===p(r)))}function xe(r){return Se(r)||Oe(r)}function _e(){return new Function("return this;")()}tr(xe,"isPrimitive",Se),tr(xe,"isObject",Oe);var Ie="object"==typeof self?self:null,Te="object"==typeof window?window:null,Ve="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ae="object"==typeof Ve?Ve:null,Fe="object"==typeof globalThis?globalThis:null;var Pe=function(r){if(arguments.length){if(!Se(r))throw new TypeError(de("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _e()}if(Fe)return Fe;if(Ie)return Ie;if(Te)return Te;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),$e=Pe.document&&Pe.document.childNodes,Ce=Int8Array;function Ne(){return/^\s*function\s*([^(]*)/i}var Re=/^\s*function\s*([^(]*)/i;function Le(r){var e,t,n,i;if(("Object"===(t=p(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Re.exec(n.toString()))return e[1]}return he(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}tr(Ne,"REGEXP",Re);var We="function"==typeof me||"object"==typeof Ce||"function"==typeof $e?function(r){return Le(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Le(r).toLowerCase():e};function Ze(r){return r.constructor&&r.constructor.prototype===r}var Be=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ge="undefined"==typeof window?void 0:window;var Xe=function(){var r;if("undefined"===We(Ge))return!1;for(r in Ge)try{-1===we(Be,r)&&s(Ge,r)&&null!==Ge[r]&&"object"===We(Ge[r])&&Ze(Ge[r])}catch(r){return!0}return!1}(),Me="undefined"!=typeof window;var Ue=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ye=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return Nr(r)?n(Rr.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,c;if(i=[],Nr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!s(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!he(r))return i;t=be&&n}for(o in r)t&&"prototype"===o||!s(r,o)||i.push(String(o));if(ye)for(e=function(r){if(!1===Me&&!Xe)return Ze(r);try{return Ze(r)}catch(r){return!1}}(r),c=0;c<Ue.length;c++)a=Ue[c],e&&"constructor"===a||!s(r,a)||i.push(String(a));return i};var ze=r?function(r){return t(e(r))}:function(r){return Ye(e(r))},He=void 0!==Object.getOwnPropertySymbols,De=Object,qe=De.getOwnPropertySymbols;var Je=He?function(r){return qe(De(r))}:function(){return[]};function Ke(r,e){return!1!==s(r,e)&&!1===$r(r,e)}function Qe(r){var e,t,n,i;for(e=ze(r),n=0,i=0;i<e.length;i++)Ke(r,e[i])&&(e[n]=e[i],n+=1);for(e.length=n,t=Je(r),i=0;i<t.length;i++)Ke(r,t[i])&&e.push(t[i]);return e}export{Qe as default};
//# sourceMappingURL=mod.js.map
