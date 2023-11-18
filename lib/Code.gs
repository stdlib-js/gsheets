/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var i6=s((Yme,t6)=>{"use strict";var rlr=typeof Object.defineProperty=="function"?Object.defineProperty:null;t6.exports=rlr});var n6=s((Zme,a6)=>{"use strict";var elr=i6();function tlr(){try{return elr({},"x",{}),!0}catch{return!1}}a6.exports=tlr});var u6=s(($me,s6)=>{"use strict";var ilr=Object.defineProperty;s6.exports=ilr});var E1=s((Qme,o6)=>{"use strict";function alr(r){return typeof r=="number"}o6.exports=alr});var N1=s((Kme,f6)=>{"use strict";function nlr(r){return r[0]==="-"}function v6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function slr(r,e,t){var i=!1,a=e-r.length;return a<0||(nlr(r)&&(i=!0,r=r.substr(1)),r=t?r+v6(a):v6(a)+r,i&&(r="-"+r)),r}f6.exports=slr});var d6=s((rye,p6)=>{"use strict";var ulr=E1(),c6=N1(),olr=String.prototype.toLowerCase,l6=String.prototype.toUpperCase;function vlr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!ulr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=c6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=c6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===l6.call(r.specifier)?l6.call(t):olr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}p6.exports=vlr});var m6=s((eye,g6)=>{"use strict";function flr(r){return typeof r=="string"}g6.exports=flr});var q6=s((tye,h6)=>{"use strict";var clr=E1(),llr=Math.abs,plr=String.prototype.toLowerCase,y6=String.prototype.toUpperCase,zi=String.prototype.replace,dlr=/e\+(\d)$/,glr=/e-(\d)$/,mlr=/^(\d+)$/,ylr=/^(\d+)e/,hlr=/\.0$/,qlr=/\.0*e/,blr=/(\..*[^0])0*e/;function wlr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!clr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":llr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=zi.call(t,blr,"$1e"),t=zi.call(t,qlr,"e"),t=zi.call(t,hlr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=zi.call(t,dlr,"e+0$1"),t=zi.call(t,glr,"e-0$1"),r.alternate&&(t=zi.call(t,mlr,"$1."),t=zi.call(t,ylr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===y6.call(r.specifier)?y6.call(t):plr.call(t),t}h6.exports=wlr});var E6=s((iye,w6)=>{"use strict";function b6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Elr(r,e,t){var i=e-r.length;return i<0||(r=t?r+b6(i):b6(i)+r),r}w6.exports=Elr});var S6=s((aye,N6)=>{"use strict";var Nlr=d6(),Slr=m6(),Olr=q6(),Alr=E6(),_lr=N1(),Tlr=String.fromCharCode,M0=isNaN,Ilr=Array.isArray;function Rlr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Llr(r){var e,t,i,a,n,u,o,v,f;if(!Ilr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],Slr(i))u+=i;else{if(e=i.precision!==void 0,i=Rlr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,M0(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,M0(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Nlr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!M0(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=M0(n)?String(i.arg):Tlr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Olr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=_lr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Alr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}N6.exports=Llr});var A6=s((nye,O6)=>{"use strict";var Plr=S6();O6.exports=Plr});var T6=s((sye,_6)=>{"use strict";var x0=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Flr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function jlr(r){var e,t,i,a;for(t=[],a=0,i=x0.exec(r);i;)e=r.slice(a,x0.lastIndex-i[0].length),e.length&&t.push(e),t.push(Flr(i)),a=x0.lastIndex,i=x0.exec(r);return e=r.slice(a),e.length&&t.push(e),t}_6.exports=jlr});var R6=s((uye,I6)=>{"use strict";var Mlr=T6();I6.exports=Mlr});var P6=s((oye,L6)=>{"use strict";function xlr(r){return typeof r=="string"}L6.exports=xlr});var M6=s((vye,j6)=>{"use strict";var Blr=A6(),klr=R6(),Clr=P6();function F6(r){var e,t,i;if(!Clr(r))throw new TypeError(F6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=klr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Blr.apply(null,t)}j6.exports=F6});var C=s((fye,x6)=>{"use strict";var Vlr=M6();x6.exports=Vlr});var G6=s((cye,U6)=>{"use strict";var B6=C(),da=Object.prototype,k6=da.toString,C6=da.__defineGetter__,V6=da.__defineSetter__,Ulr=da.__lookupGetter__,Glr=da.__lookupSetter__;function Dlr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||k6.call(r)==="[object Array]")throw new TypeError(B6("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||k6.call(t)==="[object Array]")throw new TypeError(B6("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(Ulr.call(r,e)||Glr.call(r,e)?(i=r.__proto__,r.__proto__=da,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&C6&&C6.call(r,e,t.get),u&&V6&&V6.call(r,e,t.set),r}U6.exports=Dlr});var ni=s((lye,D6)=>{"use strict";var Hlr=n6(),zlr=u6(),Wlr=G6(),S1;Hlr()?S1=zlr:S1=Wlr;D6.exports=S1});var z6=s((pye,H6)=>{"use strict";var Xlr=ni();function Jlr(r,e,t){Xlr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}H6.exports=Jlr});var G=s((dye,W6)=>{"use strict";var Ylr=z6();W6.exports=Ylr});var J6=s((gye,X6)=>{"use strict";var Zlr=ni();function $lr(r,e,t){Zlr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}X6.exports=$lr});var $r=s((mye,Y6)=>{"use strict";var Qlr=J6();Y6.exports=Qlr});var $6=s((yye,Z6)=>{"use strict";function Klr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}Z6.exports=Klr});var En=s((hye,Q6)=>{"use strict";var r6r=$6();Q6.exports=r6r});var r4=s((qye,K6)=>{"use strict";function e6r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}K6.exports=e6r});var Nn=s((bye,e4)=>{"use strict";var t6r=r4();e4.exports=t6r});var i4=s((wye,t4)=>{"use strict";var i6r=Nn();function a6r(r){return i6r(0,r)}t4.exports=a6r});var si=s((Eye,a4)=>{"use strict";var n6r=i4();a4.exports=n6r});var u4=s((Nye,s4)=>{"use strict";var Sn=En(),s6r=si(),n4=C();function u6r(r,e,t){var i,a,n,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(n=s6r(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],a=t[f],a!==0&&a<v)throw new Error(n4("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Sn(e).join(", "),Sn(t).join(", "),f));if(v===a)n[f]=1;else if(v===1)n[f]=0;else throw new Error(n4("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Sn(e).join(", "),Sn(t).join(", "),f))}return{ref:r,data:i,shape:Sn(t),strides:n}}s4.exports=u6r});var O1=s((Sye,o4)=>{"use strict";var o6r=u4();o4.exports=o6r});var c4=s((Oye,f4)=>{"use strict";var v4=O1();function v6r(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;if(q=e[2],o=q[1],v=q[0],!(o<=0||v<=0))for(A=v4(r[0],e[0],q),b=A.data,w=A.strides,i=w[1],a=w[0],A=v4(r[1],e[1],q),T=A.data,w=A.strides,n=w[1],u=w[0],S=r[2],p=0,y=0,c=0;c<v;c++){for(l=0,m=0,g=b[p],d=T[y],h=S[c],f=0;f<o;f++)h[f]=t(g[l],d[m]),l+=i,m+=n;p+=a,y+=u}}f4.exports=v6r});var A1=s((Aye,l4)=>{"use strict";var f6r=c4();l4.exports=f6r});var d4=s((_ye,p4)=>{"use strict";var _1=O1();function c6r(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M;if(S=e[3],f=S[1],c=S[0],!(f<=0||c<=0))for(N=_1(r[0],e[0],S),I=N.data,O=N.strides,i=O[1],a=O[0],N=_1(r[1],e[1],S),E=N.data,O=N.strides,n=O[1],u=O[0],N=_1(r[2],e[2],S),P=N.data,O=N.strides,o=O[1],v=O[0],M=r[3],y=0,d=0,q=0,p=0;p<c;p++){for(m=0,g=0,h=0,w=I[y],A=E[d],b=P[q],T=M[p],l=0;l<f;l++)T[l]=t(w[m],A[g],b[h]),m+=i,g+=n,h+=o;y+=a,d+=u,q+=v}}p4.exports=c6r});var T1=s((Tye,g4)=>{"use strict";var l6r=d4();g4.exports=l6r});var y4=s((Iye,m4)=>{"use strict";function p6r(r){var e,t,i,a,n,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(a=r[0],f=a.length,v===1){for(c=0;c<f;c++)t.push(a[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(n=e[0]-f+c,n>=0?i=a[n]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}m4.exports=p6r});var B0=s((Rye,h4)=>{"use strict";var d6r=y4();h4.exports=d6r});var b4=s((Lye,q4)=>{"use strict";var g6r=Nn();function m6r(r,e){var t,i,a,n;for(i=e[1],a=e[0],t=[],n=0;n<a;n++)t.push(g6r(r,i));return t}q4.exports=m6r});var k0=s((Pye,w4)=>{"use strict";var y6r=b4();w4.exports=y6r});var N4=s((Fye,E4)=>{"use strict";function h6r(r,e,t){var i,a,n,u,o,v;for(n=r[1],u=r[0],i=[],o=0;o<u;o++){for(a=[],v=0;v<n;v++)a.push(e.call(t,[o,v]));i.push(a)}return i}E4.exports=h6r});var O4=s((jye,S4)=>{"use strict";var q6r=N4();S4.exports=q6r});var _4=s((Mye,A4)=>{"use strict";function b6r(r){var e,t,i,a,n,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],n=0;n<t;n++)for(a=r[n],u=0;u<i;u++)e.push(a[u]);return e}A4.exports=b6r});var I4=s((xye,T4)=>{"use strict";function w6r(r,e,t,i){var a,n,u,o,v,f;for(n=r.length,u=r[0].length,a=i,v=0;v<n;v++)for(o=r[v],f=0;f<u;f++)e[a]=o[f],a+=t;return e}T4.exports=w6r});var C0=s((Bye,L4)=>{"use strict";var E6r=G(),R4=_4(),N6r=I4();E6r(R4,"assign",N6r);L4.exports=R4});var F4=s((kye,P4)=>{"use strict";var S6r=/./;P4.exports=S6r});var I1=s((Cye,j4)=>{"use strict";function O6r(r){return typeof r=="boolean"}j4.exports=O6r});var x4=s((Vye,M4)=>{"use strict";function A6r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}M4.exports=A6r});var k4=s((Uye,B4)=>{"use strict";var _6r=x4();B4.exports=_6r});var V4=s((Gye,C4)=>{"use strict";var T6r=k4(),I6r=T6r();function R6r(){return I6r&&typeof Symbol.toStringTag=="symbol"}C4.exports=R6r});var ga=s((Dye,U4)=>{"use strict";var L6r=V4();U4.exports=L6r});var R1=s((Hye,G4)=>{"use strict";var P6r=Object.prototype.toString;G4.exports=P6r});var H4=s((zye,D4)=>{"use strict";var F6r=R1();function j6r(r){return F6r.call(r)}D4.exports=j6r});var W4=s((Wye,z4)=>{"use strict";var M6r=Object.prototype.hasOwnProperty;function x6r(r,e){return r==null?!1:M6r.call(r,e)}z4.exports=x6r});var vr=s((Xye,X4)=>{"use strict";var B6r=W4();X4.exports=B6r});var Y4=s((Jye,J4)=>{"use strict";var k6r=typeof Symbol=="function"?Symbol:void 0;J4.exports=k6r});var L1=s((Yye,Z4)=>{"use strict";var C6r=Y4();Z4.exports=C6r});var K4=s((Zye,Q4)=>{"use strict";var $4=L1(),V6r=typeof $4=="function"?$4.toStringTag:"";Q4.exports=V6r});var e5=s(($ye,r5)=>{"use strict";var U6r=vr(),On=K4(),P1=R1();function G6r(r){var e,t,i;if(r==null)return P1.call(r);t=r[On],e=U6r(r,On);try{r[On]=void 0}catch{return P1.call(r)}return i=P1.call(r),e?r[On]=t:delete r[On],i}r5.exports=G6r});var Kr=s((Qye,t5)=>{"use strict";var D6r=ga(),H6r=H4(),z6r=e5(),F1;D6r()?F1=z6r:F1=H6r;t5.exports=F1});var a5=s((Kye,i5)=>{"use strict";var W6r=Boolean;i5.exports=W6r});var j1=s((rhe,n5)=>{"use strict";var X6r=a5();n5.exports=X6r});var u5=s((ehe,s5)=>{"use strict";var J6r=Boolean.prototype.toString;s5.exports=J6r});var v5=s((the,o5)=>{"use strict";var Y6r=u5();function Z6r(r){try{return Y6r.call(r),!0}catch{return!1}}o5.exports=Z6r});var M1=s((ihe,f5)=>{"use strict";var $6r=ga(),Q6r=Kr(),K6r=j1(),r4r=v5(),e4r=$6r();function t4r(r){return typeof r=="object"?r instanceof K6r?!0:e4r?r4r(r):Q6r(r)==="[object Boolean]":!1}f5.exports=t4r});var l5=s((ahe,c5)=>{"use strict";var i4r=I1(),a4r=M1();function n4r(r){return i4r(r)||a4r(r)}c5.exports=n4r});var de=s((nhe,d5)=>{"use strict";var p5=G(),x1=l5(),s4r=I1(),u4r=M1();p5(x1,"isPrimitive",s4r);p5(x1,"isObject",u4r);d5.exports=x1});var m5=s((she,g5)=>{"use strict";function o4r(){return new Function("return this;")()}g5.exports=o4r});var h5=s((uhe,y5)=>{"use strict";var v4r=typeof self=="object"?self:null;y5.exports=v4r});var b5=s((ohe,q5)=>{"use strict";var f4r=typeof window=="object"?window:null;q5.exports=f4r});var E5=s((vhe,w5)=>{"use strict";var c4r=typeof globalThis=="object"?globalThis:null;w5.exports=c4r});var B1=s((fhe,A5)=>{"use strict";var l4r=de().isPrimitive,p4r=C(),d4r=m5(),N5=h5(),S5=b5(),O5=E5();function g4r(r){if(arguments.length){if(!l4r(r))throw new TypeError(p4r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return d4r()}if(O5)return O5;if(N5)return N5;if(S5)return S5;throw new Error("unexpected error. Unable to resolve global object.")}A5.exports=g4r});var I5=s((che,T5)=>{"use strict";var m4r=B1(),_5=m4r(),y4r=_5.document&&_5.document.childNodes;T5.exports=y4r});var L5=s((lhe,R5)=>{"use strict";var h4r=Int8Array;R5.exports=h4r});var F5=s((phe,P5)=>{"use strict";var q4r=F4(),b4r=I5(),w4r=L5();function E4r(){return typeof q4r=="function"||typeof w4r=="object"||typeof b4r=="function"}P5.exports=E4r});var k1=s((dhe,j5)=>{"use strict";function N4r(){return/^\s*function\s*([^(]*)/i}j5.exports=N4r});var x5=s((ghe,M5)=>{"use strict";var S4r=k1(),O4r=S4r();M5.exports=O4r});var C1=s((mhe,k5)=>{"use strict";var A4r=G(),B5=k1(),_4r=x5();A4r(B5,"REGEXP",_4r);k5.exports=B5});var V5=s((yhe,C5)=>{"use strict";var T4r=Kr(),V1;function I4r(r){return T4r(r)==="[object Array]"}Array.isArray?V1=Array.isArray:V1=I4r;C5.exports=V1});var qe=s((hhe,U5)=>{"use strict";var R4r=V5();U5.exports=R4r});var D5=s((qhe,G5)=>{"use strict";var L4r=qe(),P4r=C();function F4r(r){if(typeof r!="function")throw new TypeError(P4r("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!L4r(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}G5.exports=F4r});var z5=s((bhe,H5)=>{"use strict";var j4r=D5();H5.exports=j4r});var X5=s((whe,W5)=>{"use strict";function M4r(r){return r!==null&&typeof r=="object"}W5.exports=M4r});var G1=s((Ehe,J5)=>{"use strict";var x4r=G(),B4r=z5(),U1=X5(),k4r=B4r(U1);x4r(U1,"isObjectLikeArray",k4r);J5.exports=U1});var Z5=s((Nhe,Y5)=>{"use strict";var C4r=G1();function V4r(r){return C4r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}Y5.exports=V4r});var Wi=s((She,$5)=>{"use strict";var U4r=Z5();$5.exports=U4r});var K5=s((Ohe,Q5)=>{"use strict";var G4r=Kr(),D4r=C1().REGEXP,H4r=Wi();function z4r(r){var e,t,i;if(t=G4r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=D4r.exec(i.toString()),e)return e[1]}return H4r(r)?"Buffer":t}Q5.exports=z4r});var ht=s((Ahe,r8)=>{"use strict";var W4r=K5();r8.exports=W4r});var t8=s((_he,e8)=>{"use strict";var X4r=ht();function J4r(r){var e;return r===null?"null":(e=typeof r,e==="object"?X4r(r).toLowerCase():e)}e8.exports=J4r});var a8=s((The,i8)=>{"use strict";var Y4r=ht();function Z4r(r){return Y4r(r).toLowerCase()}i8.exports=Z4r});var V0=s((Ihe,n8)=>{"use strict";var $4r=F5(),Q4r=t8(),K4r=a8(),r5r=$4r()?K4r:Q4r;n8.exports=r5r});var u8=s((Rhe,s8)=>{"use strict";var e5r=V0();function t5r(r){return e5r(r)==="function"}s8.exports=t5r});var yr=s((Lhe,o8)=>{"use strict";var i5r=u8();o8.exports=i5r});var f8=s((Phe,v8)=>{"use strict";var a5r=Math.floor;v8.exports=a5r});var Ur=s((Fhe,c8)=>{"use strict";var n5r=f8();c8.exports=n5r});var p8=s((jhe,l8)=>{"use strict";var s5r=Ur();function u5r(r){return s5r(r)===r}l8.exports=u5r});var Ee=s((Mhe,d8)=>{"use strict";var o5r=p8();d8.exports=o5r});var m8=s((xhe,g8)=>{"use strict";var v5r=9007199254740991;g8.exports=v5r});var h8=s((Bhe,y8)=>{"use strict";var f5r=Ee(),c5r=m8();function l5r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&f5r(r.length)&&r.length>=0&&r.length<=c5r}y8.exports=l5r});var Ce=s((khe,q8)=>{"use strict";var p5r=h8();q8.exports=p5r});var w8=s((Che,b8)=>{"use strict";var d5r=yr();function g5r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&d5r(r.next)}b8.exports=g5r});var N8=s((Vhe,E8)=>{"use strict";var m5r=w8();E8.exports=m5r});var A8=s((Uhe,O8)=>{"use strict";var S8="function";function y5r(r){return typeof r.get===S8&&typeof r.set===S8}O8.exports=y5r});var ma=s((Ghe,_8)=>{"use strict";var h5r=A8();_8.exports=h5r});var R8=s((Dhe,I8)=>{"use strict";var T8={complex128:q5r,complex64:b5r,default:w5r};function q5r(r,e,t){r.set(t,e)}function b5r(r,e,t){r.set(t,e)}function w5r(r,e,t){r.set(t,e)}function E5r(r){var e=T8[r];return typeof e=="function"?e:T8.default}I8.exports=E5r});var U0=s((Hhe,L8)=>{"use strict";var N5r=R8();L8.exports=N5r});var j8=s((zhe,F8)=>{"use strict";var P8={float64:S5r,float32:O5r,int32:A5r,int16:_5r,int8:T5r,uint32:I5r,uint16:R5r,uint8:L5r,uint8c:P5r,generic:F5r,default:j5r};function S5r(r,e,t){r[e]=t}function O5r(r,e,t){r[e]=t}function A5r(r,e,t){r[e]=t}function _5r(r,e,t){r[e]=t}function T5r(r,e,t){r[e]=t}function I5r(r,e,t){r[e]=t}function R5r(r,e,t){r[e]=t}function L5r(r,e,t){r[e]=t}function P5r(r,e,t){r[e]=t}function F5r(r,e,t){r[e]=t}function j5r(r,e,t){r[e]=t}function M5r(r){var e=P8[r];return typeof e=="function"?e:P8.default}F8.exports=M5r});var G0=s((Whe,M8)=>{"use strict";var x5r=j8();M8.exports=x5r});var B8=s((Xhe,x8)=>{"use strict";var B5r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};x8.exports=B5r});var C8=s((Jhe,k8)=>{"use strict";var k5r=Kr(),C5r=typeof Float64Array=="function";function V5r(r){return C5r&&r instanceof Float64Array||k5r(r)==="[object Float64Array]"}k8.exports=V5r});var U8=s((Yhe,V8)=>{"use strict";var U5r=C8();V8.exports=U5r});var D8=s((Zhe,G8)=>{"use strict";var G5r=typeof Float64Array=="function"?Float64Array:null;G8.exports=G5r});var W8=s(($he,z8)=>{"use strict";var D5r=U8(),H8=D8();function H5r(){var r,e;if(typeof H8!="function")return!1;try{e=new H8([1,3.14,-3.14,NaN]),r=D5r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}z8.exports=H5r});var D1=s((Qhe,X8)=>{"use strict";var z5r=W8();X8.exports=z5r});var Y8=s((Khe,J8)=>{"use strict";var W5r=typeof Float64Array=="function"?Float64Array:void 0;J8.exports=W5r});var $8=s((rqe,Z8)=>{"use strict";function X5r(){throw new Error("not implemented")}Z8.exports=X5r});var ge=s((eqe,Q8)=>{"use strict";var J5r=D1(),Y5r=Y8(),Z5r=$8(),H1;J5r()?H1=Y5r:H1=Z5r;Q8.exports=H1});var rp=s((tqe,K8)=>{"use strict";var $5r=Kr(),Q5r=typeof Float32Array=="function";function K5r(r){return Q5r&&r instanceof Float32Array||$5r(r)==="[object Float32Array]"}K8.exports=K5r});var tp=s((iqe,ep)=>{"use strict";var r8r=rp();ep.exports=r8r});var hr=s((aqe,ip)=>{"use strict";var e8r=Number.POSITIVE_INFINITY;ip.exports=e8r});var np=s((nqe,ap)=>{"use strict";var t8r=typeof Float32Array=="function"?Float32Array:null;ap.exports=t8r});var op=s((sqe,up)=>{"use strict";var i8r=tp(),a8r=hr(),sp=np();function n8r(){var r,e;if(typeof sp!="function")return!1;try{e=new sp([1,3.14,-3.14,5e40]),r=i8r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===a8r}catch{r=!1}return r}up.exports=n8r});var fp=s((uqe,vp)=>{"use strict";var s8r=op();vp.exports=s8r});var lp=s((oqe,cp)=>{"use strict";var u8r=typeof Float32Array=="function"?Float32Array:void 0;cp.exports=u8r});var dp=s((vqe,pp)=>{"use strict";function o8r(){throw new Error("not implemented")}pp.exports=o8r});var et=s((fqe,gp)=>{"use strict";var v8r=fp(),f8r=lp(),c8r=dp(),z1;v8r()?z1=f8r:z1=c8r;gp.exports=z1});var yp=s((cqe,mp)=>{"use strict";var l8r=Kr(),p8r=typeof Uint32Array=="function";function d8r(r){return p8r&&r instanceof Uint32Array||l8r(r)==="[object Uint32Array]"}mp.exports=d8r});var qt=s((lqe,hp)=>{"use strict";var g8r=yp();hp.exports=g8r});var ya=s((pqe,qp)=>{"use strict";var m8r=4294967295;qp.exports=m8r});var wp=s((dqe,bp)=>{"use strict";var y8r=typeof Uint32Array=="function"?Uint32Array:null;bp.exports=y8r});var Sp=s((gqe,Np)=>{"use strict";var h8r=qt(),W1=ya(),Ep=wp();function q8r(){var r,e;if(typeof Ep!="function")return!1;try{e=[1,3.14,-3.14,W1+1,W1+2],e=new Ep(e),r=h8r(e)&&e[0]===1&&e[1]===3&&e[2]===W1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Np.exports=q8r});var Ap=s((mqe,Op)=>{"use strict";var b8r=Sp();Op.exports=b8r});var Tp=s((yqe,_p)=>{"use strict";var w8r=typeof Uint32Array=="function"?Uint32Array:void 0;_p.exports=w8r});var Rp=s((hqe,Ip)=>{"use strict";function E8r(){throw new Error("not implemented")}Ip.exports=E8r});var me=s((qqe,Lp)=>{"use strict";var N8r=Ap(),S8r=Tp(),O8r=Rp(),X1;N8r()?X1=S8r:X1=O8r;Lp.exports=X1});var Fp=s((bqe,Pp)=>{"use strict";var A8r=Kr(),_8r=typeof Int32Array=="function";function T8r(r){return _8r&&r instanceof Int32Array||A8r(r)==="[object Int32Array]"}Pp.exports=T8r});var D0=s((wqe,jp)=>{"use strict";var I8r=Fp();jp.exports=I8r});var ha=s((Eqe,Mp)=>{"use strict";var R8r=2147483647;Mp.exports=R8r});var Bp=s((Nqe,xp)=>{"use strict";var L8r=-2147483648;xp.exports=L8r});var Cp=s((Sqe,kp)=>{"use strict";var P8r=typeof Int32Array=="function"?Int32Array:null;kp.exports=P8r});var Gp=s((Oqe,Up)=>{"use strict";var F8r=D0(),j8r=ha(),M8r=Bp(),Vp=Cp();function x8r(){var r,e;if(typeof Vp!="function")return!1;try{e=new Vp([1,3.14,-3.14,j8r+1]),r=F8r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===M8r}catch{r=!1}return r}Up.exports=x8r});var Hp=s((Aqe,Dp)=>{"use strict";var B8r=Gp();Dp.exports=B8r});var Wp=s((_qe,zp)=>{"use strict";var k8r=typeof Int32Array=="function"?Int32Array:void 0;zp.exports=k8r});var Jp=s((Tqe,Xp)=>{"use strict";function C8r(){throw new Error("not implemented")}Xp.exports=C8r});var ui=s((Iqe,Yp)=>{"use strict";var V8r=Hp(),U8r=Wp(),G8r=Jp(),J1;V8r()?J1=U8r:J1=G8r;Yp.exports=J1});var $p=s((Rqe,Zp)=>{"use strict";var D8r=Kr(),H8r=typeof Uint16Array=="function";function z8r(r){return H8r&&r instanceof Uint16Array||D8r(r)==="[object Uint16Array]"}Zp.exports=z8r});var Kp=s((Lqe,Qp)=>{"use strict";var W8r=$p();Qp.exports=W8r});var e7=s((Pqe,r7)=>{"use strict";var X8r=65535;r7.exports=X8r});var i7=s((Fqe,t7)=>{"use strict";var J8r=typeof Uint16Array=="function"?Uint16Array:null;t7.exports=J8r});var s7=s((jqe,n7)=>{"use strict";var Y8r=Kp(),Y1=e7(),a7=i7();function Z8r(){var r,e;if(typeof a7!="function")return!1;try{e=[1,3.14,-3.14,Y1+1,Y1+2],e=new a7(e),r=Y8r(e)&&e[0]===1&&e[1]===3&&e[2]===Y1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}n7.exports=Z8r});var o7=s((Mqe,u7)=>{"use strict";var $8r=s7();u7.exports=$8r});var f7=s((xqe,v7)=>{"use strict";var Q8r=typeof Uint16Array=="function"?Uint16Array:void 0;v7.exports=Q8r});var l7=s((Bqe,c7)=>{"use strict";function K8r(){throw new Error("not implemented")}c7.exports=K8r});var Xi=s((kqe,p7)=>{"use strict";var rpr=o7(),epr=f7(),tpr=l7(),Z1;rpr()?Z1=epr:Z1=tpr;p7.exports=Z1});var g7=s((Cqe,d7)=>{"use strict";var ipr=Kr(),apr=typeof Int16Array=="function";function npr(r){return apr&&r instanceof Int16Array||ipr(r)==="[object Int16Array]"}d7.exports=npr});var y7=s((Vqe,m7)=>{"use strict";var spr=g7();m7.exports=spr});var q7=s((Uqe,h7)=>{"use strict";var upr=32767;h7.exports=upr});var w7=s((Gqe,b7)=>{"use strict";var opr=-32768;b7.exports=opr});var N7=s((Dqe,E7)=>{"use strict";var vpr=typeof Int16Array=="function"?Int16Array:null;E7.exports=vpr});var A7=s((Hqe,O7)=>{"use strict";var fpr=y7(),cpr=q7(),lpr=w7(),S7=N7();function ppr(){var r,e;if(typeof S7!="function")return!1;try{e=new S7([1,3.14,-3.14,cpr+1]),r=fpr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===lpr}catch{r=!1}return r}O7.exports=ppr});var T7=s((zqe,_7)=>{"use strict";var dpr=A7();_7.exports=dpr});var R7=s((Wqe,I7)=>{"use strict";var gpr=typeof Int16Array=="function"?Int16Array:void 0;I7.exports=gpr});var P7=s((Xqe,L7)=>{"use strict";function mpr(){throw new Error("not implemented")}L7.exports=mpr});var qa=s((Jqe,F7)=>{"use strict";var ypr=T7(),hpr=R7(),qpr=P7(),$1;ypr()?$1=hpr:$1=qpr;F7.exports=$1});var M7=s((Yqe,j7)=>{"use strict";var bpr=Kr(),wpr=typeof Uint8Array=="function";function Epr(r){return wpr&&r instanceof Uint8Array||bpr(r)==="[object Uint8Array]"}j7.exports=Epr});var B7=s((Zqe,x7)=>{"use strict";var Npr=M7();x7.exports=Npr});var C7=s(($qe,k7)=>{"use strict";var Spr=255;k7.exports=Spr});var U7=s((Qqe,V7)=>{"use strict";var Opr=typeof Uint8Array=="function"?Uint8Array:null;V7.exports=Opr});var H7=s((Kqe,D7)=>{"use strict";var Apr=B7(),Q1=C7(),G7=U7();function _pr(){var r,e;if(typeof G7!="function")return!1;try{e=[1,3.14,-3.14,Q1+1,Q1+2],e=new G7(e),r=Apr(e)&&e[0]===1&&e[1]===3&&e[2]===Q1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}D7.exports=_pr});var W7=s((rbe,z7)=>{"use strict";var Tpr=H7();z7.exports=Tpr});var J7=s((ebe,X7)=>{"use strict";var Ipr=typeof Uint8Array=="function"?Uint8Array:void 0;X7.exports=Ipr});var Z7=s((tbe,Y7)=>{"use strict";function Rpr(){throw new Error("not implemented")}Y7.exports=Rpr});var tt=s((ibe,$7)=>{"use strict";var Lpr=W7(),Ppr=J7(),Fpr=Z7(),K1;Lpr()?K1=Ppr:K1=Fpr;$7.exports=K1});var K7=s((abe,Q7)=>{"use strict";var jpr=Kr(),Mpr=typeof Uint8ClampedArray=="function";function xpr(r){return Mpr&&r instanceof Uint8ClampedArray||jpr(r)==="[object Uint8ClampedArray]"}Q7.exports=xpr});var e9=s((nbe,r9)=>{"use strict";var Bpr=K7();r9.exports=Bpr});var i9=s((sbe,t9)=>{"use strict";var kpr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;t9.exports=kpr});var s9=s((ube,n9)=>{"use strict";var Cpr=e9(),a9=i9();function Vpr(){var r,e;if(typeof a9!="function")return!1;try{e=new a9([-1,0,1,3.14,4.99,255,256]),r=Cpr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}n9.exports=Vpr});var o9=s((obe,u9)=>{"use strict";var Upr=s9();u9.exports=Upr});var f9=s((vbe,v9)=>{"use strict";var Gpr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;v9.exports=Gpr});var l9=s((fbe,c9)=>{"use strict";function Dpr(){throw new Error("not implemented")}c9.exports=Dpr});var ba=s((cbe,p9)=>{"use strict";var Hpr=o9(),zpr=f9(),Wpr=l9(),r2;Hpr()?r2=zpr:r2=Wpr;p9.exports=r2});var g9=s((lbe,d9)=>{"use strict";var Xpr=Kr(),Jpr=typeof Int8Array=="function";function Ypr(r){return Jpr&&r instanceof Int8Array||Xpr(r)==="[object Int8Array]"}d9.exports=Ypr});var y9=s((pbe,m9)=>{"use strict";var Zpr=g9();m9.exports=Zpr});var q9=s((dbe,h9)=>{"use strict";var $pr=127;h9.exports=$pr});var w9=s((gbe,b9)=>{"use strict";var Qpr=-128;b9.exports=Qpr});var N9=s((mbe,E9)=>{"use strict";var Kpr=typeof Int8Array=="function"?Int8Array:null;E9.exports=Kpr});var A9=s((ybe,O9)=>{"use strict";var r7r=y9(),e7r=q9(),t7r=w9(),S9=N9();function i7r(){var r,e;if(typeof S9!="function")return!1;try{e=new S9([1,3.14,-3.14,e7r+1]),r=r7r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===t7r}catch{r=!1}return r}O9.exports=i7r});var T9=s((hbe,_9)=>{"use strict";var a7r=A9();_9.exports=a7r});var R9=s((qbe,I9)=>{"use strict";var n7r=typeof Int8Array=="function"?Int8Array:void 0;I9.exports=n7r});var P9=s((bbe,L9)=>{"use strict";function s7r(){throw new Error("not implemented")}L9.exports=s7r});var wa=s((wbe,F9)=>{"use strict";var u7r=T9(),o7r=R9(),v7r=P9(),e2;u7r()?e2=o7r:e2=v7r;F9.exports=e2});var t2=s((Ebe,j9)=>{"use strict";function f7r(r){return typeof r=="number"}j9.exports=f7r});var x9=s((Nbe,M9)=>{"use strict";M9.exports=Number});var H0=s((Sbe,B9)=>{"use strict";var c7r=x9();B9.exports=c7r});var C9=s((Obe,k9)=>{"use strict";var l7r=H0(),p7r=l7r.prototype.toString;k9.exports=p7r});var U9=s((Abe,V9)=>{"use strict";var d7r=C9();function g7r(r){try{return d7r.call(r),!0}catch{return!1}}V9.exports=g7r});var i2=s((_be,G9)=>{"use strict";var m7r=ga(),y7r=Kr(),h7r=H0(),q7r=U9(),b7r=m7r();function w7r(r){return typeof r=="object"?r instanceof h7r?!0:b7r?q7r(r):y7r(r)==="[object Number]":!1}G9.exports=w7r});var H9=s((Tbe,D9)=>{"use strict";var E7r=t2(),N7r=i2();function S7r(r){return E7r(r)||N7r(r)}D9.exports=S7r});var Nr=s((Ibe,W9)=>{"use strict";var z9=G(),a2=H9(),O7r=t2(),A7r=i2();z9(a2,"isPrimitive",O7r);z9(a2,"isObject",A7r);W9.exports=a2});var Rr=s((Rbe,X9)=>{"use strict";var _7r=H0(),T7r=_7r.NEGATIVE_INFINITY;X9.exports=T7r});var n2=s((Lbe,J9)=>{"use strict";var I7r=hr(),R7r=Rr(),L7r=Ee();function P7r(r){return r<I7r&&r>R7r&&L7r(r)}J9.exports=P7r});var s2=s((Pbe,Y9)=>{"use strict";var F7r=Nr().isPrimitive,j7r=n2();function M7r(r){return F7r(r)&&j7r(r)}Y9.exports=M7r});var u2=s((Fbe,Z9)=>{"use strict";var x7r=Nr().isObject,B7r=n2();function k7r(r){return x7r(r)&&B7r(r.valueOf())}Z9.exports=k7r});var Q9=s((jbe,$9)=>{"use strict";var C7r=s2(),V7r=u2();function U7r(r){return C7r(r)||V7r(r)}$9.exports=U7r});var ye=s((Mbe,rd)=>{"use strict";var K9=G(),o2=Q9(),G7r=s2(),D7r=u2();K9(o2,"isPrimitive",G7r);K9(o2,"isObject",D7r);rd.exports=o2});var v2=s((xbe,ed)=>{"use strict";var H7r=ye().isPrimitive;function z7r(r){return H7r(r)&&r>=0}ed.exports=z7r});var f2=s((Bbe,td)=>{"use strict";var W7r=ye().isObject;function X7r(r){return W7r(r)&&r.valueOf()>=0}td.exports=X7r});var ad=s((kbe,id)=>{"use strict";var J7r=v2(),Y7r=f2();function Z7r(r){return J7r(r)||Y7r(r)}id.exports=Z7r});var be=s((Cbe,sd)=>{"use strict";var nd=G(),c2=ad(),$7r=v2(),Q7r=f2();nd(c2,"isPrimitive",$7r);nd(c2,"isObject",Q7r);sd.exports=c2});var l2=s((Vbe,ud)=>{"use strict";var K7r=4294967295;ud.exports=K7r});var vd=s((Ube,od)=>{"use strict";var r9r=Ee(),e9r=l2();function t9r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&r9r(r.length)&&r.length>=0&&r.length<=e9r}od.exports=t9r});var Ji=s((Gbe,fd)=>{"use strict";var i9r=vd();fd.exports=i9r});var ld=s((Dbe,cd)=>{"use strict";var a9r=Kr(),n9r=typeof ArrayBuffer=="function";function s9r(r){return n9r&&r instanceof ArrayBuffer||a9r(r)==="[object ArrayBuffer]"}cd.exports=s9r});var z0=s((Hbe,pd)=>{"use strict";var u9r=ld();pd.exports=u9r});var gd=s((zbe,dd)=>{"use strict";var o9r=qe();function v9r(r){return typeof r=="object"&&r!==null&&!o9r(r)}dd.exports=v9r});var W0=s((Wbe,md)=>{"use strict";var f9r=gd();md.exports=f9r});var hd=s((Xbe,yd)=>{"use strict";function c9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}yd.exports=c9r});var bd=s((Jbe,qd)=>{"use strict";function l9r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}qd.exports=l9r});var Od=s((Ybe,Sd)=>{"use strict";var wd=Nr().isPrimitive,Ed=ni(),An=G(),Nd=C(),p9r=hd(),d9r=bd();function Yi(r,e){if(!(this instanceof Yi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!wd(r))throw new TypeError(Nd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!wd(e))throw new TypeError(Nd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Ed(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Ed(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}An(Yi,"BYTES_PER_ELEMENT",8);An(Yi.prototype,"BYTES_PER_ELEMENT",8);An(Yi.prototype,"byteLength",16);An(Yi.prototype,"toString",p9r);An(Yi.prototype,"toJSON",d9r);Sd.exports=Yi});var Ea=s((Zbe,Ad)=>{"use strict";var g9r=Od();Ad.exports=g9r});var Td=s(($be,_d)=>{"use strict";var m9r=typeof Math.fround=="function"?Math.fround:null;_d.exports=m9r});var Ld=s((Qbe,Rd)=>{"use strict";var y9r=et(),Id=new y9r(1);function h9r(r){return Id[0]=r,Id[0]}Rd.exports=h9r});var jd=s((Kbe,Fd)=>{"use strict";var Pd=Td(),q9r=Ld(),p2;typeof Pd=="function"?p2=Pd:p2=q9r;Fd.exports=p2});var xd=s((rwe,Md)=>{"use strict";function b9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Md.exports=b9r});var kd=s((ewe,Bd)=>{"use strict";function w9r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Bd.exports=w9r});var Hd=s((twe,Dd)=>{"use strict";var Cd=Nr().isPrimitive,Vd=ni(),_n=G(),Ud=jd(),Gd=C(),E9r=xd(),N9r=kd();function Zi(r,e){if(!(this instanceof Zi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Cd(r))throw new TypeError(Gd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Cd(e))throw new TypeError(Gd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Vd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ud(r)}),Vd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ud(e)}),this}_n(Zi,"BYTES_PER_ELEMENT",4);_n(Zi.prototype,"BYTES_PER_ELEMENT",4);_n(Zi.prototype,"byteLength",8);_n(Zi.prototype,"toString",E9r);_n(Zi.prototype,"toJSON",N9r);Dd.exports=Zi});var Na=s((iwe,zd)=>{"use strict";var S9r=Hd();zd.exports=S9r});var Xd=s((awe,Wd)=>{"use strict";var O9r=Ea(),A9r=Na();function _9r(r){return r instanceof O9r||r instanceof A9r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}Wd.exports=_9r});var Je=s((nwe,Jd)=>{"use strict";var T9r=Xd();Jd.exports=T9r});var Zd=s((swe,Yd)=>{"use strict";var I9r=Ee();function R9r(r){return I9r(r/2)}Yd.exports=R9r});var X0=s((uwe,$d)=>{"use strict";var L9r=Zd();$d.exports=L9r});var Kd=s((owe,Qd)=>{"use strict";var P9r=vr(),J0=L1();function F9r(){return typeof J0=="function"&&typeof J0("foo")=="symbol"&&P9r(J0,"iterator")&&typeof J0.iterator=="symbol"}Qd.exports=F9r});var Y0=s((vwe,rg)=>{"use strict";var j9r=Kd();rg.exports=j9r});var tg=s((fwe,eg)=>{"use strict";var M9r=Y0(),x9r=M9r()?Symbol.iterator:null;eg.exports=x9r});var Tn=s((cwe,ig)=>{"use strict";var B9r=tg();ig.exports=B9r});var ng=s((lwe,ag)=>{"use strict";var k9r=ni();function C9r(r,e,t){k9r(r,e,{configurable:!1,enumerable:!1,get:t})}ag.exports=C9r});var qr=s((pwe,sg)=>{"use strict";var V9r=ng();sg.exports=V9r});var og=s((dwe,ug)=>{"use strict";function U9r(r){return r.re}ug.exports=U9r});var oi=s((gwe,vg)=>{"use strict";var G9r=og();vg.exports=G9r});var cg=s((mwe,fg)=>{"use strict";function D9r(r){return r.im}fg.exports=D9r});var vi=s((ywe,lg)=>{"use strict";var H9r=cg();lg.exports=H9r});var dg=s((hwe,pg)=>{"use strict";var z9r=et();function W9r(r,e){return new z9r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}pg.exports=W9r});var Sa=s((qwe,gg)=>{"use strict";var X9r=dg();gg.exports=X9r});var yg=s((bwe,mg)=>{"use strict";var J9r=ge();function Y9r(r,e){return new J9r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}mg.exports=Y9r});var Oa=s((wwe,hg)=>{"use strict";var Z9r=yg();hg.exports=Z9r});var wg=s((Ewe,bg)=>{"use strict";var qg={float64:$9r,float32:Q9r,int32:K9r,int16:rdr,int8:edr,uint32:tdr,uint16:idr,uint8:adr,uint8c:ndr,generic:sdr,default:udr};function $9r(r,e){return r[e]}function Q9r(r,e){return r[e]}function K9r(r,e){return r[e]}function rdr(r,e){return r[e]}function edr(r,e){return r[e]}function tdr(r,e){return r[e]}function idr(r,e){return r[e]}function adr(r,e){return r[e]}function ndr(r,e){return r[e]}function sdr(r,e){return r[e]}function udr(r,e){return r[e]}function odr(r){var e=qg[r];return typeof e=="function"?e:qg.default}bg.exports=odr});var Aa=s((Nwe,Eg)=>{"use strict";var vdr=wg();Eg.exports=vdr});var Og=s((Swe,Sg)=>{"use strict";var Ng={complex128:fdr,complex64:cdr,default:ldr};function fdr(r,e){return r.get(e)}function cdr(r,e){return r.get(e)}function ldr(r,e){return r.get(e)}function pdr(r){var e=Ng[r];return typeof e=="function"?e:Ng.default}Sg.exports=pdr});var $i=s((Owe,Ag)=>{"use strict";var ddr=Og();Ag.exports=ddr});var Tg=s((Awe,_g)=>{"use strict";var gdr=Ji(),mdr=Je(),ydr=oi(),hdr=vi(),qdr=C();function bdr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,gdr(i)&&i.length>=2)e.push(i[0],i[1]);else if(mdr(i))e.push(ydr(i),hdr(i));else return new TypeError(qdr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}_g.exports=bdr});var Rg=s((_we,Ig)=>{"use strict";var wdr=Ji(),Edr=Je(),Ndr=oi(),Sdr=vi(),Odr=C();function Adr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),wdr(n)&&n.length>=2)i.push(n[0],n[1]);else if(Edr(n))i.push(Ndr(n),Sdr(n));else return new TypeError(Odr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Ig.exports=Adr});var Pg=s((Twe,Lg)=>{"use strict";var _dr=Je(),Tdr=oi(),Idr=vi();function Rdr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!_dr(i))return null;r[n]=Tdr(i),r[n+1]=Idr(i),n+=2}return r}Lg.exports=Rdr});var Ug=s((Iwe,Vg)=>{"use strict";var In=be().isPrimitive,Fg=Ji(),g2=Ce(),jg=z0(),Mg=W0(),Ldr=qe(),Qi=yr(),_a=Je(),Z0=X0(),d2=Ee(),Pdr=Y0(),Ta=Tn(),Ne=G(),K0=qr(),Ge=et(),xg=Na(),Yr=C(),$0=oi(),Q0=vi(),Fdr=Sa(),jdr=Oa(),Mdr=Aa(),xdr=$i(),Bg=Tg(),Bdr=Rg(),kdr=Pg(),Ve=Ge.BYTES_PER_ELEMENT*2,kg=Pdr();function Ia(r){return r instanceof re||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Cg(r){return r===re||r.name==="Complex128Array"}function Cdr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ve}function Vdr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ve*2}function re(){var r,e,t,i;if(e=arguments.length,!(this instanceof re))return e===0?new re:e===1?new re(arguments[0]):e===2?new re(arguments[0],arguments[1]):new re(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ge(0);else if(e===1)if(In(arguments[0]))t=new Ge(arguments[0]*2);else if(g2(arguments[0]))if(t=arguments[0],i=t.length,i&&Ldr(t)&&_a(t[0])){if(t=kdr(new Ge(i*2),t),t===null){if(!Z0(i))throw new RangeError(Yr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ge(arguments[0])}}else{if(Cdr(t))t=Fdr(t,0);else if(Vdr(t))t=jdr(t,0);else if(!Z0(i))throw new RangeError(Yr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ge(t)}else if(jg(arguments[0])){if(t=arguments[0],!d2(t.byteLength/Ve))throw new RangeError(Yr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ve,t.byteLength));t=new Ge(t)}else if(Mg(arguments[0])){if(t=arguments[0],kg===!1)throw new TypeError(Yr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Qi(t[Ta]))throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ta](),!Qi(t.next))throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Bg(t),t instanceof Error)throw t;t=new Ge(t)}else throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!jg(t))throw new TypeError(Yr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!In(r))throw new TypeError(Yr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!d2(r/Ve))throw new RangeError(Yr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ve,r));if(e===2){if(i=t.byteLength-r,!d2(i/Ve))throw new RangeError(Yr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ve,i));t=new Ge(t,r)}else{if(i=arguments[2],!In(i))throw new TypeError(Yr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ve>t.byteLength-r)throw new RangeError(Yr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ve));t=new Ge(t,r,i*2)}}return Ne(this,"_buffer",t),Ne(this,"_length",t.length/2),this}Ne(re,"BYTES_PER_ELEMENT",Ve);Ne(re,"name","Complex64Array");Ne(re,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!Qi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!Qi(a))throw new TypeError(Yr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Ia(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),_a(l))u[m]=$0(l),u[m+1]=Q0(l);else if(Fg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Yr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(g2(e)){if(a){for(f=e.length,e.get&&e.set?v=xdr("default"):v=Mdr("default"),p=0;p<f;p++)if(!_a(v(e,p))){c=!0;break}if(c){if(!Z0(f))throw new RangeError(Yr("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),_a(l))u[m]=$0(l),u[m+1]=Q0(l);else if(Fg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Yr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Mg(e)&&kg&&Qi(e[Ta])){if(u=e[Ta](),!Qi(u.next))throw new TypeError(Yr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=Bdr(u,a,t):o=Bg(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Yr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Ne(re,"of",function(){var e,t;if(!Qi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});K0(re.prototype,"buffer",function(){return this._buffer.buffer});K0(re.prototype,"byteLength",function(){return this._buffer.byteLength});K0(re.prototype,"byteOffset",function(){return this._buffer.byteOffset});Ne(re.prototype,"BYTES_PER_ELEMENT",re.BYTES_PER_ELEMENT);Ne(re.prototype,"copyWithin",function(e,t){if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Ne(re.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Ne(i,"next",v),Ne(i,"return",f),Ta&&Ne(i,Ta,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new xg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Ne(re.prototype,"get",function(e){var t;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!In(e))throw new TypeError(Yr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new xg(t[e],t[e+1])});K0(re.prototype,"length",function(){return this._length});Ne(re.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Ia(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!In(i))throw new TypeError(Yr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(_a(e)){if(i>=this._length)throw new RangeError(Yr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=$0(e),a[i+1]=Q0(e);return}if(Ia(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ve,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new Ge(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(g2(e)){for(o=e.length,f=0;f<o;f++)if(!_a(e[f])){u=!0;break}if(u){if(!Z0(o))throw new RangeError(Yr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ve,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new Ge(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=$0(v),a[i+1]=Q0(v),i+=2;return}throw new TypeError(Yr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Vg.exports=re});var Ra=s((Rwe,Gg)=>{"use strict";var Udr=Ug();Gg.exports=Udr});var Hg=s((Lwe,Dg)=>{"use strict";function Gdr(r){return r.re}Dg.exports=Gdr});var it=s((Pwe,zg)=>{"use strict";var Ddr=Hg();zg.exports=Ddr});var Xg=s((Fwe,Wg)=>{"use strict";function Hdr(r){return r.im}Wg.exports=Hdr});var at=s((jwe,Jg)=>{"use strict";var zdr=Xg();Jg.exports=zdr});var Zg=s((Mwe,Yg)=>{"use strict";var Wdr=Ji(),Xdr=Je(),Jdr=C(),Ydr=it(),Zdr=at();function $dr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Wdr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Xdr(i))e.push(Ydr(i),Zdr(i));else return new TypeError(Jdr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Yg.exports=$dr});var Qg=s((xwe,$g)=>{"use strict";var Qdr=Ji(),Kdr=Je(),rgr=C(),egr=it(),tgr=at();function igr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),Qdr(n)&&n.length>=2)i.push(n[0],n[1]);else if(Kdr(n))i.push(egr(n),tgr(n));else return new TypeError(rgr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}$g.exports=igr});var rm=s((Bwe,Kg)=>{"use strict";var agr=Je(),ngr=it(),sgr=at();function ugr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!agr(i))return null;r[n]=ngr(i),r[n+1]=sgr(i),n+=2}return r}Kg.exports=ugr});var vm=s((kwe,om)=>{"use strict";var Rn=be().isPrimitive,em=Ji(),y2=Ce(),tm=z0(),im=W0(),ogr=qe(),Ki=yr(),La=Je(),rs=X0(),m2=Ee(),vgr=Y0(),Pa=Tn(),Se=G(),is=qr(),De=ge(),am=Ea(),es=it(),ts=at(),fgr=Sa(),cgr=Oa(),lgr=Aa(),pgr=$i(),Zr=C(),nm=Zg(),dgr=Qg(),ggr=rm(),Ue=De.BYTES_PER_ELEMENT*2,sm=vgr();function Fa(r){return r instanceof ee||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function um(r){return r===ee||r.name==="Complex64Array"}function mgr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ue/2}function ygr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ue}function ee(){var r,e,t,i;if(e=arguments.length,!(this instanceof ee))return e===0?new ee:e===1?new ee(arguments[0]):e===2?new ee(arguments[0],arguments[1]):new ee(arguments[0],arguments[1],arguments[2]);if(e===0)t=new De(0);else if(e===1)if(Rn(arguments[0]))t=new De(arguments[0]*2);else if(y2(arguments[0]))if(t=arguments[0],i=t.length,i&&ogr(t)&&La(t[0])){if(t=ggr(new De(i*2),t),t===null){if(!rs(i))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(arguments[0])}}else{if(mgr(t))t=fgr(t,0);else if(ygr(t))t=cgr(t,0);else if(!rs(i))throw new RangeError(Zr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(t)}else if(tm(arguments[0])){if(t=arguments[0],!m2(t.byteLength/Ue))throw new RangeError(Zr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ue,t.byteLength));t=new De(t)}else if(im(arguments[0])){if(t=arguments[0],sm===!1)throw new TypeError(Zr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ki(t[Pa]))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Pa](),!Ki(t.next))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=nm(t),t instanceof Error)throw t;t=new De(t)}else throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!tm(t))throw new TypeError(Zr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Rn(r))throw new TypeError(Zr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!m2(r/Ue))throw new RangeError(Zr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ue,r));if(e===2){if(i=t.byteLength-r,!m2(i/Ue))throw new RangeError(Zr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ue,i));t=new De(t,r)}else{if(i=arguments[2],!Rn(i))throw new TypeError(Zr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ue>t.byteLength-r)throw new RangeError(Zr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ue));t=new De(t,r,i*2)}}return Se(this,"_buffer",t),Se(this,"_length",t.length/2),this}Se(ee,"BYTES_PER_ELEMENT",Ue);Se(ee,"name","Complex128Array");Se(ee,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!Ki(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!um(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!Ki(a))throw new TypeError(Zr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Fa(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),La(l))u[m]=es(l),u[m+1]=ts(l);else if(em(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(y2(e)){if(a){for(f=e.length,e.get&&e.set?v=pgr("default"):v=lgr("default"),p=0;p<f;p++)if(!La(v(e,p))){c=!0;break}if(c){if(!rs(f))throw new RangeError(Zr("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),La(l))u[m]=es(l),u[m+1]=ts(l);else if(em(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(im(e)&&sm&&Ki(e[Pa])){if(u=e[Pa](),!Ki(u.next))throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=dgr(u,a,t):o=nm(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Se(ee,"of",function(){var e,t;if(!Ki(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!um(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});is(ee.prototype,"buffer",function(){return this._buffer.buffer});is(ee.prototype,"byteLength",function(){return this._buffer.byteLength});is(ee.prototype,"byteOffset",function(){return this._buffer.byteOffset});Se(ee.prototype,"BYTES_PER_ELEMENT",ee.BYTES_PER_ELEMENT);Se(ee.prototype,"copyWithin",function(e,t){if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Se(ee.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Se(i,"next",v),Se(i,"return",f),Pa&&Se(i,Pa,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new am(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Se(ee.prototype,"get",function(e){var t;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Rn(e))throw new TypeError(Zr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new am(t[e],t[e+1])});is(ee.prototype,"length",function(){return this._length});Se(ee.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Fa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Rn(i))throw new TypeError(Zr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(La(e)){if(i>=this._length)throw new RangeError(Zr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=es(e),a[i+1]=ts(e);return}if(Fa(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(y2(e)){for(o=e.length,f=0;f<o;f++)if(!La(e[f])){u=!0;break}if(u){if(!rs(o))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=es(v),a[i+1]=ts(v),i+=2;return}throw new TypeError(Zr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});om.exports=ee});var ja=s((Cwe,fm)=>{"use strict";var hgr=vm();fm.exports=hgr});var lm=s((Vwe,cm)=>{"use strict";var qgr=ge(),bgr=et(),wgr=me(),Egr=ui(),Ngr=Xi(),Sgr=qa(),Ogr=tt(),Agr=ba(),_gr=wa(),Tgr=Ra(),Igr=ja(),Rgr=[qgr,bgr,Egr,wgr,Sgr,Ngr,_gr,Ogr,Agr,Tgr,Igr];cm.exports=Rgr});var dm=s((Uwe,pm)=>{"use strict";var Lgr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];pm.exports=Lgr});var ym=s((Gwe,mm)=>{"use strict";var Pgr=Wi(),Fgr=qe(),jgr=ht(),Mgr=B8(),xgr=lm(),gm=dm(),Bgr=gm.length;function kgr(r){var e;if(Fgr(r))return"generic";if(Pgr(r))return null;for(e=0;e<Bgr;e++)if(r instanceof xgr[e])return gm[e];return Mgr[jgr(r)]||null}mm.exports=kgr});var Ma=s((Dwe,hm)=>{"use strict";var Cgr=ym();hm.exports=Cgr});var wm=s((Hwe,bm)=>{"use strict";var qm=yr(),Vgr=Ce(),Ugr=N8(),Ggr=ma(),Dgr=U0(),Hgr=G0(),zgr=Ma(),h2=C();function Wgr(){var r,e,t,i,a,n,u,o,v;if(r=arguments[0],arguments.length>1)if(Vgr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!qm(t))throw new TypeError(h2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!qm(t))throw new TypeError(h2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!Ugr(r))throw new TypeError(h2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(a=i.length,u=zgr(i),Ggr(i)?n=Dgr(u):n=Hgr(u),t){for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,t.call(e,v.value,o));return i}for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,v.value);return i}bm.exports=Wgr});var Nm=s((zwe,Em)=>{"use strict";var Xgr=wm();Em.exports=Xgr});var Om=s((Wwe,Sm)=>{"use strict";function Jgr(r){return r!==r}Sm.exports=Jgr});var z=s((Xwe,Am)=>{"use strict";var Ygr=Om();Am.exports=Ygr});var Tm=s((Jwe,_m)=>{"use strict";var Zgr={Complex64:"complex64",Complex128:"complex128"};_m.exports=Zgr});var Rm=s((Ywe,Im)=>{"use strict";var $gr=Na(),Qgr=Ea(),Kgr=[$gr,Qgr];Im.exports=Kgr});var Pm=s((Zwe,Lm)=>{"use strict";var rmr=["complex64","complex128"];Lm.exports=rmr});var Mm=s(($we,jm)=>{"use strict";var emr=ht(),tmr=Tm(),imr=Rm(),Fm=Pm(),amr=Fm.length;function nmr(r){var e;for(e=0;e<amr;e++)if(r instanceof imr[e])return Fm[e];return tmr[emr(r)]||null}jm.exports=nmr});var q2=s((Qwe,xm)=>{"use strict";var smr=Mm();xm.exports=smr});var km=s((Kwe,Bm)=>{"use strict";var umr=ge(),omr=et(),vmr=ja(),fmr=Ra(),cmr={float64:umr,float32:omr,complex128:vmr,complex64:fmr};Bm.exports=cmr});var Vm=s((rEe,Cm)=>{"use strict";var lmr=km();function pmr(r){return lmr[r]||null}Cm.exports=pmr});var Gm=s((eEe,Um)=>{"use strict";var dmr=Vm();Um.exports=dmr});var Hm=s((tEe,Dm)=>{"use strict";function gmr(r,e,t,i){var a,n,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(a=[r],i?n=t-1:n=t,u=(e-r)/n,o=1;o<n;o++)a.push(r+u*o);return i&&a.push(e),a}Dm.exports=gmr});var Zm=s((iEe,Ym)=>{"use strict";var mmr=Na(),ymr=Ea(),zm=it(),Wm=at(),Xm=oi(),Jm=vi();function hmr(r,e,t,i,a,n){var u,o,v,f,c,l,p,m,y,g,d,h,q;if(a===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Xm(e),l=Jm(e)):(f=zm(e),l=Wm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Xm(i),p=Jm(i)):(c=zm(i),p=Wm(i)),o===2?u=mmr:u=ymr,a===1)return n?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],n?h=a-1:h=a,g=(c-f)/h,d=(p-l)/h,q=1;q<h;q++)m=f+g*q,y=l+d*q,v.push(new u(m,y));return n&&v.push(new u(c,p)),v}Ym.exports=hmr});var b2=s((aEe,$m)=>{"use strict";function qmr(r,e,t,i,a){var n,u,o;if(i===0)return r;if(i===1)return a?r[0]=t:r[0]=e,r;for(r[0]=e,a?n=i-1:n=i,u=(t-e)/n,o=1;o<n;o++)r[o]=e+u*o;return a&&(r[n]=t),r}$m.exports=qmr});var w2=s((nEe,ty)=>{"use strict";var Qm=it(),Km=at(),ry=oi(),ey=vi();function bmr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g;if(n===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=ry(t),f=ey(t)):(o=Qm(t),f=Km(t)),i==="float64"?(v=a,c=0):i==="complex64"?(v=ry(a),c=ey(a)):(v=Qm(a),c=Km(a)),n===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=n-1:m=n,l=(v-o)/m,p=(c-f)/m,g=2,y=1;y<m;y++)r[g]=o+l*y,r[g+1]=f+p*y,g+=2;return u&&(r[g]=v,r[g+1]=c),r}ty.exports=bmr});var ay=s((sEe,iy)=>{"use strict";var wmr=Object;iy.exports=wmr});var xa=s((uEe,ny)=>{"use strict";var Emr=ay();ny.exports=Emr});var uy=s((oEe,sy)=>{"use strict";var Nmr=Object.getPrototypeOf;sy.exports=Nmr});var vy=s((vEe,oy)=>{"use strict";function Smr(r){return r.__proto__}oy.exports=Smr});var cy=s((fEe,fy)=>{"use strict";var Omr=Kr(),Amr=vy();function _mr(r){var e=Amr(r);return e||e===null?e:Omr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}fy.exports=_mr});var py=s((cEe,ly)=>{"use strict";var Tmr=yr(),Imr=uy(),Rmr=cy(),E2;Tmr(Object.getPrototypeOf)?E2=Imr:E2=Rmr;ly.exports=E2});var gy=s((lEe,dy)=>{"use strict";var Lmr=xa(),Pmr=py();function Fmr(r){return r==null?null:(r=Lmr(r),Pmr(r))}dy.exports=Fmr});var ra=s((pEe,my)=>{"use strict";var jmr=gy();my.exports=jmr});var qy=s((dEe,hy)=>{"use strict";var Mmr=W0(),yy=yr(),xmr=ra(),as=vr(),Bmr=Kr(),kmr=Object.prototype;function Cmr(r){var e;for(e in r)if(!as(r,e))return!1;return!0}function Vmr(r){var e;return Mmr(r)?(e=xmr(r),e?!as(r,"constructor")&&as(e,"constructor")&&yy(e.constructor)&&Bmr(e.constructor)==="[object Function]"&&as(e,"isPrototypeOf")&&yy(e.isPrototypeOf)&&(e===kmr||Cmr(r)):!0):!1}hy.exports=Vmr});var mr=s((gEe,by)=>{"use strict";var Umr=qy();by.exports=Umr});var N2=s((mEe,wy)=>{"use strict";function Gmr(r){return typeof r=="string"}wy.exports=Gmr});var Ny=s((yEe,Ey)=>{"use strict";var Dmr=String.prototype.valueOf;Ey.exports=Dmr});var Oy=s((hEe,Sy)=>{"use strict";var Hmr=Ny();function zmr(r){try{return Hmr.call(r),!0}catch{return!1}}Sy.exports=zmr});var S2=s((qEe,Ay)=>{"use strict";var Wmr=ga(),Xmr=Kr(),Jmr=Oy(),Ymr=Wmr();function Zmr(r){return typeof r=="object"?r instanceof String?!0:Ymr?Jmr(r):Xmr(r)==="[object String]":!1}Ay.exports=Zmr});var Ty=s((bEe,_y)=>{"use strict";var $mr=N2(),Qmr=S2();function Kmr(r){return $mr(r)||Qmr(r)}_y.exports=Kmr});var Jr=s((wEe,Ry)=>{"use strict";var Iy=G(),O2=Ty(),ryr=N2(),eyr=S2();Iy(O2,"isPrimitive",ryr);Iy(O2,"isObject",eyr);Ry.exports=O2});var _2=s((EEe,Py)=>{"use strict";var tyr=mr(),Ly=vr(),iyr=Jr().isPrimitive,ayr=de().isPrimitive,A2=C();function nyr(r,e){return tyr(e)?Ly(e,"dtype")&&(r.dtype=e.dtype,!iyr(r.dtype))?new TypeError(A2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Ly(e,"endpoint")&&(r.endpoint=e.endpoint,!ayr(r.endpoint))?new TypeError(A2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(A2("invalid argument. Options argument must be an object. Value: `%s`.",e))}Py.exports=nyr});var T2=s((NEe,syr)=>{syr.exports={endpoint:!0}});var Cy=s((SEe,ky)=>{"use strict";var Fy=Je(),jy=Nr().isPrimitive,uyr=be().isPrimitive,My=z(),xy=q2(),oyr=Gm(),vyr=Sa(),fyr=Oa(),Ba=C(),cyr=Hm(),lyr=Zm(),pyr=b2(),By=w2(),dyr=_2(),gyr=T2();function myr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(o=xy(r),o===null){if(!Fy(r))throw new TypeError(Ba("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!jy(r)||My(r))throw new TypeError(Ba("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=xy(e),v===null){if(!Fy(e))throw new TypeError(Ba("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!jy(e)||My(e))throw new TypeError(Ba("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!uyr(t))throw new TypeError(Ba("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:gyr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(n=dyr(i,arguments[3]),n))throw n;if(i.dtype==="generic")return f?lyr(o,r,v,e,t,i.endpoint):cyr(r,e,t,i.endpoint);if(a=oyr(i.dtype),a===null)throw new TypeError(Ba('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new a(t),i.dtype==="complex64")return By(vyr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return By(fyr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return pyr(u,r,e,t,i.endpoint)}ky.exports=myr});var Uy=s((OEe,Vy)=>{"use strict";var yyr=ma(),hyr=Aa(),qyr=G0(),byr=$i(),wyr=U0(),Eyr=Ma();function Nyr(r){var e=Eyr(r);return yyr(r)?{accessorProtocol:!0,accessors:[byr(e),wyr(e)]}:{accessorProtocol:!1,accessors:[hyr(e),qyr(e)]}}Vy.exports=Nyr});var Dy=s((AEe,Gy)=>{"use strict";var Syr=Uy();Gy.exports=Syr});var zy=s((_Ee,Hy)=>{"use strict";var Oyr=Dy();function Ayr(r){var e=Oyr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Hy.exports=Ayr});var Ln=s((TEe,Wy)=>{"use strict";var _yr=zy();Wy.exports=_yr});var Qy=s((IEe,$y)=>{"use strict";var Tyr=Na(),Iyr=Ea(),Xy=it(),Jy=at(),Yy=oi(),Zy=vi();function Ryr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g,d,h,q,w,A;if(n===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Yy(t),l=Zy(t)):(f=Xy(t),l=Jy(t)),i==="float64"?(c=a,p=0):i==="complex64"?(v+=1,c=Yy(a),p=Zy(a)):(c=Xy(a),p=Jy(a)),v===2?o=Tyr:o=Iyr,y=r.data,m=r.accessors[1],n===1)return u?m(y,0,new o(c,p)):m(y,0,new o(f,l)),r;for(m(y,0,new o(f,l)),u?w=n-1:w=n,h=(c-f)/w,q=(p-l)/w,A=1;A<w;A++)g=f+h*A,d=l+q*A,m(y,A,new o(g,d));return u&&m(y,w,new o(c,p)),r}$y.exports=Ryr});var rh=s((REe,Ky)=>{"use strict";function Lyr(r,e,t,i,a){var n,u,o,v,f;if(i===0)return r;if(n=r.data,u=r.accessors[1],i===1)return a?u(n,0,t):u(n,0,e),r;for(u(n,0,e),a?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(n,f,e+v*f);return a&&u(n,o,t),r}Ky.exports=Lyr});var oh=s((LEe,uh)=>{"use strict";var eh=Je(),th=Nr().isPrimitive,Pyr=Ce(),Pn=C(),ih=z(),ah=q2(),Fyr=Ma(),jyr=Sa(),Myr=Oa(),nh=Ln(),xyr=Qy(),Byr=rh(),sh=w2(),kyr=b2(),Cyr=_2(),Vyr=T2();function Uyr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(n=ah(r),n===null){if(!eh(r))throw new TypeError(Pn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="complex128"}o=!0}else{if(!th(r)||ih(r))throw new TypeError(Pn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="float64"}if(typeof e=="object"){if(u=ah(e),u===null){if(!eh(e))throw new TypeError(Pn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!th(e)||ih(e))throw new TypeError(Pn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Pyr(t))throw new TypeError(Pn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Vyr.endpoint},arguments.length>3&&(a=Cyr(i,arguments[3]),a))throw a;if(v=Fyr(t),v===null&&(v="generic"),v==="complex64")return sh(jyr(t,0),n,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return sh(Myr(t,0),n,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=nh(t),xyr(f,n,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=nh(t),f.accessorProtocol?(Byr(f,r,e,t.length,i.endpoint),t):(kyr(t,r,e,t.length,i.endpoint),t)}uh.exports=Uyr});var ch=s((PEe,fh)=>{"use strict";var Gyr=G(),vh=Cy(),Dyr=oh();Gyr(vh,"assign",Dyr);fh.exports=vh});var ph=s((FEe,lh)=>{"use strict";var Hyr=Nr().isPrimitive,zyr=Jr().isPrimitive,Wyr=de().isPrimitive,Xyr=qe(),Jyr=C(),Yyr={number:Hyr,string:zyr,boolean:Wyr};function Zyr(r,e,t){var i,a,n,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],i=[],v=0;v<r.length;v++)if(o=r[v],n=e[v],u=Yyr[n],u(o))i.push([[o]]),a.push([1,1]);else if(Xyr(o))i.push(o),a.push([o.length,o[0].length]);else throw new TypeError(Jyr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],n,n,String(o)));return[i,a]}lh.exports=Zyr});var ns=s((jEe,dh)=>{"use strict";var $yr=ph();dh.exports=$yr});var mh=s((MEe,gh)=>{"use strict";var Qyr=k0();function Kyr(r){return Qyr(1,r)}gh.exports=Kyr});var hh=s((xEe,yh)=>{"use strict";var rhr=mh();yh.exports=rhr});var bh=s((BEe,qh)=>{"use strict";function ehr(r,e,t){var i,a,n,u,o,v,f,c;if(i=e[1],a=e[0],!(i<=0||a<=0))for(f=r[0],c=r[1],u=0;u<a;u++)for(o=f[u],v=c[u],n=0;n<i;n++)v[n]=t(o[n])}qh.exports=ehr});var I2=s((kEe,wh)=>{"use strict";var thr=bh();wh.exports=thr});var Nh=s((CEe,Eh)=>{"use strict";var ihr=k0();function ahr(r){return ihr(0,r)}Eh.exports=ahr});var ss=s((VEe,Sh)=>{"use strict";var nhr=Nh();Sh.exports=nhr});var Ah=s((UEe,Oh)=>{"use strict";var Oe=$r(),shr=A1(),uhr=T1(),ohr=B0(),vhr=Nn(),fhr=k0(),chr=O4(),lhr=C0(),phr=Nm(),dhr=ch(),ghr=ns(),mhr=hh(),yhr=I2(),hhr=si(),qhr=ss();function bhr(r){return Oe(r,"bbinary2d",shr),Oe(r,"bternary2d",uhr),Oe(r,"broadcastShapes",ohr),Oe(r,"filled",vhr),Oe(r,"filled2d",fhr),Oe(r,"filled2dBy",chr),Oe(r,"flatten2d",lhr),Oe(r,"iterator2array",phr),Oe(r,"linspace",dhr),Oe(r,"normalizeBroadcastArgs",ghr),Oe(r,"ones2d",mhr),Oe(r,"unary2d",yhr),Oe(r,"zeros",hhr),Oe(r,"zeros2d",qhr),r}Oh.exports=bhr});var Ih=s((GEe,Th)=>{"use strict";var _h=C();function whr(r,e,t,i,a){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(_h('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(a!=="closed"&&a!=="open")throw new TypeError(_h('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),a))}return i==="closed"||i===void 0?a==="closed"||a===void 0?r>=e&&r<=t:r>=e&&r<t:a==="closed"||a===void 0?r>e&&r<=t:r>e&&r<t}Th.exports=whr});var Lh=s((DEe,Rh)=>{"use strict";var Ehr=Ih();Rh.exports=Ehr});var Fh=s((HEe,Ph)=>{"use strict";var Nhr=Nr().isPrimitive,Shr=Lh(),Ohr=C();function Ahr(r,e,t,i,a,n){var u,o;if(!(Nhr(r)&&Shr(r,e,t,i,a)))throw i==="closed"?u="[":u="(",a==="closed"?o="]":o=")",new TypeError(Ohr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",n,u,e,t,o,String(r)))}Ph.exports=Ahr});var Mh=s((zEe,jh)=>{"use strict";var _hr=Fh();jh.exports=_hr});var Bh=s((WEe,xh)=>{"use strict";var Thr=de().isPrimitive,Ihr=C();function Rhr(r,e){if(!Thr(r))throw new TypeError(Ihr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}xh.exports=Rhr});var Ch=s((XEe,kh)=>{"use strict";var Lhr=Bh();kh.exports=Lhr});var Uh=s((JEe,Vh)=>{"use strict";function Phr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,e!==1&&i!==1&&i!==e||t!==1&&a!==1&&a!==t)return!1;return!0}Vh.exports=Phr});var Dh=s((YEe,Gh)=>{"use strict";var Fhr=Uh();Gh.exports=Fhr});var zh=s((ZEe,Hh)=>{"use strict";var jhr=C(),Mhr=Dh();function xhr(r,e,t){if(!Mhr(r,e))throw new TypeError(jhr("invalid argument. %s must be broadcast compatible.",t))}Hh.exports=xhr});var Xh=s(($Ee,Wh)=>{"use strict";var Bhr=zh();Wh.exports=Bhr});var Yh=s((QEe,Jh)=>{"use strict";function khr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,i!==1&&i!==e||a!==1&&a!==t)return!1;return!0}Jh.exports=khr});var $h=s((KEe,Zh)=>{"use strict";var Chr=Yh();Zh.exports=Chr});var Kh=s((rNe,Qh)=>{"use strict";var Vhr=C(),Uhr=$h();function Ghr(r,e,t,i){if(!Uhr(r,e))throw new TypeError(Vhr("invalid argument. %s must be broadcast compatible with %s.",t,i))}Qh.exports=Ghr});var eq=s((eNe,rq)=>{"use strict";var Dhr=Kh();rq.exports=Dhr});var iq=s((tNe,tq)=>{"use strict";function Hhr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}tq.exports=Hhr});var nq=s((iNe,aq)=>{"use strict";function zhr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}aq.exports=zhr});var us=s((aNe,uq)=>{"use strict";var Whr=G(),sq=iq(),Xhr=nq();Whr(sq,"assign",Xhr);uq.exports=sq});var vq=s((nNe,oq)=>{"use strict";var Jhr=us();function Yhr(r,e,t,i){var a=Jhr(e,t,i);return a[0]>=0&&a[1]<r}oq.exports=Yhr});var R2=s((sNe,fq)=>{"use strict";var Zhr=vq();fq.exports=Zhr});var lq=s((uNe,cq)=>{"use strict";var $hr=R2();function Qhr(r,e,t,i){if(e.length&&!$hr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}cq.exports=Qhr});var dq=s((oNe,pq)=>{"use strict";var Khr=lq();pq.exports=Khr});var mq=s((vNe,gq)=>{"use strict";var rqr=C();function eqr(r,e){if(r===void 0)throw new Error(rqr("invalid invocation. Must provide %s.",e))}gq.exports=eqr});var L2=s((fNe,yq)=>{"use strict";var tqr=mq();yq.exports=tqr});var qq=s((cNe,hq)=>{"use strict";var iqr=C();function aqr(r,e,t,i){if(!(r>e))throw new TypeError(iqr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}hq.exports=aqr});var wq=s((lNe,bq)=>{"use strict";var nqr=qq();bq.exports=nqr});var Nq=s((pNe,Eq)=>{"use strict";var sqr=C();function uqr(r,e,t,i){if(!(r>=e))throw new TypeError(sqr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Eq.exports=uqr});var Oq=s((dNe,Sq)=>{"use strict";var oqr=Nq();Sq.exports=oqr});var _q=s((gNe,Aq)=>{"use strict";var vqr=ye().isPrimitive,fqr=C();function cqr(r,e){if(!vqr(r))throw new TypeError(fqr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Aq.exports=cqr});var Iq=s((mNe,Tq)=>{"use strict";var lqr=_q();Tq.exports=lqr});var Lq=s((yNe,Rq)=>{"use strict";var pqr=C();function dqr(r,e,t,i){if(!(r<e))throw new TypeError(pqr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Rq.exports=dqr});var Fq=s((hNe,Pq)=>{"use strict";var gqr=Lq();Pq.exports=gqr});var Mq=s((qNe,jq)=>{"use strict";var mqr=C();function yqr(r,e,t,i){if(!(r<=e))throw new TypeError(mqr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}jq.exports=yqr});var Bq=s((bNe,xq)=>{"use strict";var hqr=Mq();xq.exports=hqr});var Cq=s((wNe,kq)=>{"use strict";var qqr=be().isPrimitive,bqr=C();function wqr(r,e){if(!qqr(r))throw new TypeError(bqr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}kq.exports=wqr});var Uq=s((ENe,Vq)=>{"use strict";var Eqr=Cq();Vq.exports=Eqr});var P2=s((NNe,Gq)=>{"use strict";var Nqr=Nr().isPrimitive;function Sqr(r){return Nqr(r)&&r>=0}Gq.exports=Sqr});var F2=s((SNe,Dq)=>{"use strict";var Oqr=Nr().isObject;function Aqr(r){return Oqr(r)&&r.valueOf()>=0}Dq.exports=Aqr});var zq=s((ONe,Hq)=>{"use strict";var _qr=P2(),Tqr=F2();function Iqr(r){return _qr(r)||Tqr(r)}Hq.exports=Iqr});var os=s((ANe,Xq)=>{"use strict";var Wq=G(),j2=zq(),Rqr=P2(),Lqr=F2();Wq(j2,"isPrimitive",Rqr);Wq(j2,"isObject",Lqr);Xq.exports=j2});var Yq=s((_Ne,Jq)=>{"use strict";var Pqr=os().isPrimitive,Fqr=C();function jqr(r,e){if(!Pqr(r))throw new TypeError(Fqr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Jq.exports=jqr});var $q=s((TNe,Zq)=>{"use strict";var Mqr=Yq();Zq.exports=Mqr});var Kq=s((INe,Qq)=>{"use strict";var xqr=Nr().isPrimitive,Bqr=C();function kqr(r,e){if(!xqr(r))throw new TypeError(Bqr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Qq.exports=kqr});var eb=s((RNe,rb)=>{"use strict";var Cqr=Kq();rb.exports=Cqr});var ib=s((LNe,tb)=>{"use strict";var Vqr=C();function Uqr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Vqr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}tb.exports=Uqr});var nb=s((PNe,ab)=>{"use strict";var Gqr=ib();ab.exports=Gqr});var M2=s((FNe,sb)=>{"use strict";var Dqr=ye().isPrimitive;function Hqr(r){return Dqr(r)&&r>0}sb.exports=Hqr});var x2=s((jNe,ub)=>{"use strict";var zqr=ye().isObject;function Wqr(r){return zqr(r)&&r.valueOf()>0}ub.exports=Wqr});var vb=s((MNe,ob)=>{"use strict";var Xqr=M2(),Jqr=x2();function Yqr(r){return Xqr(r)||Jqr(r)}ob.exports=Yqr});var nt=s((xNe,cb)=>{"use strict";var fb=G(),B2=vb(),Zqr=M2(),$qr=x2();fb(B2,"isPrimitive",Zqr);fb(B2,"isObject",$qr);cb.exports=B2});var pb=s((BNe,lb)=>{"use strict";var Qqr=nt().isPrimitive,Kqr=C();function rbr(r,e){if(!Qqr(r))throw new TypeError(Kqr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}lb.exports=rbr});var k2=s((kNe,db)=>{"use strict";var ebr=pb();db.exports=ebr});var C2=s((CNe,gb)=>{"use strict";var tbr=Nr().isPrimitive;function ibr(r){return tbr(r)&&r>0}gb.exports=ibr});var V2=s((VNe,mb)=>{"use strict";var abr=Nr().isObject;function nbr(r){return abr(r)&&r.valueOf()>0}mb.exports=nbr});var hb=s((UNe,yb)=>{"use strict";var sbr=C2(),ubr=V2();function obr(r){return sbr(r)||ubr(r)}yb.exports=obr});var Gr=s((GNe,bb)=>{"use strict";var qb=G(),U2=hb(),vbr=C2(),fbr=V2();qb(U2,"isPrimitive",vbr);qb(U2,"isObject",fbr);bb.exports=U2});var Eb=s((DNe,wb)=>{"use strict";var cbr=Gr().isPrimitive,lbr=C();function pbr(r,e){if(!cbr(r))throw new TypeError(lbr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}wb.exports=pbr});var Sb=s((HNe,Nb)=>{"use strict";var dbr=Eb();Nb.exports=dbr});var G2=s((zNe,Ob)=>{"use strict";var gbr=Nr().isPrimitive;function mbr(r){return gbr(r)&&r>=0&&r<=1}Ob.exports=mbr});var D2=s((WNe,Ab)=>{"use strict";var ybr=Nr().isObject;function hbr(r){return ybr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Ab.exports=hbr});var Tb=s((XNe,_b)=>{"use strict";var qbr=G2(),bbr=D2();function wbr(r){return qbr(r)||bbr(r)}_b.exports=wbr});var Fn=s((JNe,Rb)=>{"use strict";var Ib=G(),H2=Tb(),Ebr=G2(),Nbr=D2();Ib(H2,"isPrimitive",Ebr);Ib(H2,"isObject",Nbr);Rb.exports=H2});var Pb=s((YNe,Lb)=>{"use strict";var Sbr=Fn().isPrimitive,Obr=C();function Abr(r,e){if(!Sbr(r))throw new TypeError(Obr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}Lb.exports=Abr});var jb=s((ZNe,Fb)=>{"use strict";var _br=Pb();Fb.exports=_br});var xb=s(($Ne,Mb)=>{"use strict";var Tbr=qe(),Ibr=C();function Rbr(r,e){if(!Tbr(r))throw new TypeError(Ibr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Mb.exports=Rbr});var kb=s((QNe,Bb)=>{"use strict";var Lbr=xb();Bb.exports=Lbr});var Vb=s((KNe,Cb)=>{"use strict";function Pbr(r){return r.length===1||r[0].length===1}Cb.exports=Pbr});var Gb=s((rSe,Ub)=>{"use strict";var Fbr=Vb();Ub.exports=Fbr});var Hb=s((eSe,Db)=>{"use strict";var jbr=qe(),Mbr=Gb();function xbr(r){return jbr(r)&&Mbr(r)}Db.exports=xbr});var z2=s((tSe,zb)=>{"use strict";var Bbr=Hb();zb.exports=Bbr});var Xb=s((iSe,Wb)=>{"use strict";var kbr=C(),Cbr=z2();function Vbr(r,e){if(!Cbr(r))throw new TypeError(kbr("invalid argument. %s must consist of only a single row or a single column.",e))}Wb.exports=Vbr});var Yb=s((aSe,Jb)=>{"use strict";var Ubr=Xb();Jb.exports=Ubr});var $b=s((nSe,Zb)=>{"use strict";function Gbr(r){var e,t,i,a;for(e=r.length,t=r[0].length,a=1;a<arguments.length;a++)if(i=arguments[a],i.length!==e||i[0].length!==t)return!1;return!0}Zb.exports=Gbr});var Kb=s((sSe,Qb)=>{"use strict";var Dbr=$b();Qb.exports=Dbr});var ew=s((uSe,rw)=>{"use strict";var Hbr=C(),zbr=Kb();function Wbr(r,e,t){if(!zbr(r,e))throw new TypeError(Hbr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}rw.exports=Wbr});var iw=s((oSe,tw)=>{"use strict";var Xbr=ew();tw.exports=Xbr});var nw=s((vSe,aw)=>{"use strict";var Jbr=Jr().isPrimitive,Ybr=C();function Zbr(r,e){if(!Jbr(r))throw new TypeError(Ybr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}aw.exports=Zbr});var uw=s((fSe,sw)=>{"use strict";var $br=nw();sw.exports=$br});var vw=s((cSe,ow)=>{"use strict";var Qbr=C(),Kbr=be().isPrimitive;function rwr(r,e){var t;for(t=0;t<r.length;t++)if(!Kbr(r[t]))throw new TypeError(Qbr("invalid argument. %s must contain only nonnegative integers.",e))}ow.exports=rwr});var cw=s((lSe,fw)=>{"use strict";var ewr=vw();fw.exports=ewr});var pw=s((pSe,lw)=>{"use strict";var twr=C(),iwr=ye().isPrimitive;function awr(r,e){var t;for(t=0;t<r.length;t++)if(!iwr(r[t]))throw new TypeError(twr("invalid argument. %s must contain only integers.",e))}lw.exports=awr});var gw=s((dSe,dw)=>{"use strict";var nwr=pw();dw.exports=nwr});var yw=s((gSe,mw)=>{"use strict";var swr=C();function uwr(r){throw new Error(swr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}mw.exports=uwr});var qw=s((mSe,hw)=>{"use strict";var owr=yw();hw.exports=owr});var Ew=s((ySe,ww)=>{"use strict";var bw=k2(),vwr=L2();function fwr(r,e,t){bw(r,"Number of rows"),bw(e,"Number of columns"),vwr(t,"a pseudorandom number generator seed")}ww.exports=fwr});var Sw=s((hSe,Nw)=>{"use strict";var cwr=Ew();Nw.exports=cwr});var Aw=s((qSe,Ow)=>{"use strict";var lwr=Ee(),pwr=l2();function dwr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&lwr(r.length)&&r.length>=0&&r.length<=pwr}Ow.exports=dwr});var Tw=s((bSe,_w)=>{"use strict";var gwr=Aw();_w.exports=gwr});var Rw=s((wSe,Iw)=>{"use strict";var mwr=Tw(),ywr=C();function hwr(r){if(typeof r!="function")throw new TypeError(ywr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!mwr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}Iw.exports=hwr});var W2=s((ESe,Lw)=>{"use strict";var qwr=Rw();Lw.exports=qwr});var jw=s((NSe,Fw)=>{"use strict";var X2=ye(),Pw=G(),J2=W2(),bwr=J2(X2.isPrimitive),wwr=J2(X2.isObject),Y2=J2(X2);Pw(Y2,"primitives",bwr);Pw(Y2,"objects",wwr);Fw.exports=Y2});var Bw=s((SSe,xw)=>{"use strict";var Z2=be(),Mw=G(),$2=W2(),Ewr=$2(Z2.isPrimitive),Nwr=$2(Z2.isObject),Q2=$2(Z2);Mw(Q2,"primitives",Ewr);Mw(Q2,"objects",Nwr);xw.exports=Q2});var Cw=s((OSe,kw)=>{"use strict";var st=$r(),Swr=qe(),Owr=ye().isPrimitive,Awr=jw().primitives,_wr=be().isPrimitive,Twr=Bw().primitives,Iwr=os().isPrimitive,Rwr=Nr().isPrimitive,Lwr=nt().isPrimitive,Pwr=Gr().isPrimitive,Fwr=Jr().isPrimitive;function jwr(r){return st(r,"isArray",Swr),st(r,"isInteger",Owr),st(r,"isIntegerArray",Awr),st(r,"isNonNegativeInteger",_wr),st(r,"isNonNegativeIntegerArray",Twr),st(r,"isNonNegativeNumber",Iwr),st(r,"isNumber",Rwr),st(r,"isPositiveInteger",Lwr),st(r,"isPositiveNumber",Pwr),st(r,"isString",Fwr),r}kw.exports=jwr});var Uw=s((ASe,Vw)=>{"use strict";var Hr=$r(),Mwr=Mh(),xwr=Ch(),Bwr=Xh(),kwr=eq(),Cwr=dq(),Vwr=L2(),Uwr=wq(),Gwr=Oq(),Dwr=Iq(),Hwr=Fq(),zwr=Bq(),Wwr=Uq(),Xwr=$q(),Jwr=eb(),Ywr=nb(),Zwr=k2(),$wr=Sb(),Qwr=jb(),Kwr=kb(),rEr=Yb(),eEr=iw(),tEr=uw(),iEr=cw(),aEr=gw(),nEr=qw(),sEr=Sw(),uEr=Cw();function oEr(r){return Hr(r,"isBetween",Mwr),Hr(r,"isBoolean",xwr),Hr(r,"isBroadcastCompatible",Bwr),Hr(r,"isBroadcastCompatibleWith",kwr),Hr(r,"isBufferLengthCompatible",Cwr),Hr(r,"isDefined",Vwr),Hr(r,"isGreaterThan",Uwr),Hr(r,"isGreaterThanEqual",Gwr),Hr(r,"isInteger",Dwr),Hr(r,"isLessThan",Hwr),Hr(r,"isLessThanEqual",zwr),Hr(r,"isNonNegativeInteger",Wwr),Hr(r,"isNonNegativeNumber",Xwr),Hr(r,"isNumber",Jwr),Hr(r,"isOneOf",Ywr),Hr(r,"isPositiveInteger",Zwr),Hr(r,"isPositiveNumber",$wr),Hr(r,"isProbability",Qwr),Hr(r,"isRange",Kwr),Hr(r,"isRange1d",rEr),Hr(r,"isSameShape",eEr),Hr(r,"isString",tEr),Hr(r,"isValidShape",iEr),Hr(r,"isValidStrides",aEr),Hr(r,"unrecognizedOptionName",nEr),Hr(r,"verifyCommonPRNGArgs",sEr),Hr(r,"base",uEr({})),r}Vw.exports=oEr});var Dw=s((_Se,Gw)=>{"use strict";var K2=4;function vEr(r,e,t,i,a,n){var u,o,v,f;if(r<=0||e===0)return a;if(i===1&&n===1){if(v=r%K2,v>0)for(f=0;f<v;f++)a[f]+=e*t[f];if(r<K2)return a;for(f=v;f<r;f+=K2)a[f]+=e*t[f],a[f+1]+=e*t[f+1],a[f+2]+=e*t[f+2],a[f+3]+=e*t[f+3];return a}for(i<0?u=(1-r)*i:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r;f++)a[o]+=e*t[u],u+=i,o+=n;return a}Gw.exports=vEr});var zw=s((TSe,Hw)=>{"use strict";var jn=4;function fEr(r,e,t,i,a,n,u,o){var v,f,c,l;if(r<=0||e===0)return n;if(v=a,f=o,i===1&&u===1){if(c=r%jn,c>0)for(l=0;l<c;l++)n[f]+=e*t[v],v+=i,f+=u;if(r<jn)return n;for(l=c;l<r;l+=jn)n[f]+=e*t[v],n[f+1]+=e*t[v+1],n[f+2]+=e*t[v+2],n[f+3]+=e*t[v+3],v+=jn,f+=jn;return n}for(l=0;l<r;l++)n[f]+=e*t[v],v+=i,f+=u;return n}Hw.exports=fEr});var rv=s((ISe,Xw)=>{"use strict";var cEr=G(),Ww=Dw(),lEr=zw();cEr(Ww,"ndarray",lEr);Xw.exports=Ww});var Zw=s((RSe,Yw)=>{"use strict";var Jw=$r(),pEr=rv().ndarray,dEr=rv().ndarray;function gEr(r){return Jw(r,"daxpy",pEr),Jw(r,"saxpy",dEr),r}Yw.exports=gEr});var Qw=s((LSe,$w)=>{"use strict";var mEr=ra(),yEr=Kr();function hEr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(yEr(r)==="[object Error]")return!0;r=mEr(r)}return!1}$w.exports=hEr});var rE=s((PSe,Kw)=>{"use strict";var qEr=Qw();Kw.exports=qEr});var ev=s((FSe,eE)=>{"use strict";function bEr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}eE.exports=bEr});var iE=s((jSe,tE)=>{"use strict";var wEr=ev(),EEr=wEr();tE.exports=EEr});var sE=s((MSe,nE)=>{"use strict";var NEr=G(),aE=ev(),SEr=iE();NEr(aE,"REGEXP",SEr);nE.exports=aE});var oE=s((xSe,uE)=>{"use strict";var OEr=Jr().isPrimitive,AEr=sE(),_Er=C();function TEr(r){if(!OEr(r))throw new TypeError(_Er("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=AEr().exec(r),r?new RegExp(r[1],r[2]):null}uE.exports=TEr});var fE=s((BSe,vE)=>{"use strict";var IEr=oE();vE.exports=IEr});var tv=s((kSe,cE)=>{"use strict";var REr=Nr().isPrimitive,LEr=z();function PEr(r){return REr(r)&&LEr(r)}cE.exports=PEr});var iv=s((CSe,lE)=>{"use strict";var FEr=Nr().isObject,jEr=z();function MEr(r){return FEr(r)&&jEr(r.valueOf())}lE.exports=MEr});var dE=s((VSe,pE)=>{"use strict";var xEr=tv(),BEr=iv();function kEr(r){return xEr(r)||BEr(r)}pE.exports=kEr});var oe=s((USe,mE)=>{"use strict";var gE=G(),av=dE(),CEr=tv(),VEr=iv();gE(av,"isPrimitive",CEr);gE(av,"isObject",VEr);mE.exports=av});var bE=s((GSe,qE)=>{"use strict";var yE=oe(),UEr=Ce(),GEr=Jr().isPrimitive,DEr=ye().isPrimitive,hE=C();function HEr(r,e,t){var i,a;if(!UEr(r)&&!GEr(r))throw new TypeError(hE("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!DEr(t))throw new TypeError(hE("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(yE(e)){for(;a<i;a++)if(yE(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}qE.exports=HEr});var vs=s((DSe,wE)=>{"use strict";var zEr=bE();wE.exports=zEr});var fs=s((HSe,EE)=>{"use strict";function WEr(r){return Object.keys(Object(r))}EE.exports=WEr});var SE=s((zSe,NE)=>{"use strict";var XEr=fs();function JEr(){return(XEr(arguments)||"").length!==2}function YEr(){return JEr(1,2)}NE.exports=YEr});var AE=s((WSe,OE)=>{"use strict";var ZEr=typeof Object.keys<"u";OE.exports=ZEr});var nv=s((XSe,_E)=>{"use strict";var $Er=Kr();function QEr(r){return $Er(r)==="[object Arguments]"}_E.exports=QEr});var RE=s((JSe,IE)=>{"use strict";var KEr=nv(),TE;function rNr(){return KEr(arguments)}TE=rNr();IE.exports=TE});var sv=s((YSe,LE)=>{"use strict";var eNr=Object.prototype.propertyIsEnumerable;LE.exports=eNr});var jE=s((ZSe,FE)=>{"use strict";var tNr=sv(),PE;function iNr(){return!tNr.call("beep","0")}PE=iNr();FE.exports=PE});var xE=s(($Se,ME)=>{"use strict";var aNr=Jr(),nNr=oe().isPrimitive,sNr=ye().isPrimitive,uNr=sv(),oNr=jE();function vNr(r,e){var t;return r==null?!1:(t=uNr.call(r,e),!t&&oNr&&aNr(r)?(e=+e,!nNr(e)&&sNr(e)&&e>=0&&e<r.length):t)}ME.exports=vNr});var Mn=s((QSe,BE)=>{"use strict";var fNr=xE();BE.exports=fNr});var CE=s((KSe,kE)=>{"use strict";var cNr=vr(),lNr=Mn(),pNr=qe(),dNr=Ee(),gNr=ya();function mNr(r){return r!==null&&typeof r=="object"&&!pNr(r)&&typeof r.length=="number"&&dNr(r.length)&&r.length>=0&&r.length<=gNr&&cNr(r,"callee")&&!lNr(r,"callee")}kE.exports=mNr});var ov=s((rOe,VE)=>{"use strict";var yNr=RE(),hNr=nv(),qNr=CE(),uv;yNr?uv=hNr:uv=qNr;VE.exports=uv});var DE=s((eOe,GE)=>{"use strict";var bNr=ov(),UE=fs(),wNr=Array.prototype.slice;function ENr(r){return bNr(r)?UE(wNr.call(r)):UE(r)}GE.exports=ENr});var zE=s((tOe,HE)=>{"use strict";function NNr(){}HE.exports=NNr});var Ir=s((iOe,WE)=>{"use strict";var SNr=zE();WE.exports=SNr});var JE=s((aOe,XE)=>{"use strict";var ONr=Mn(),ANr=Ir(),_Nr=ONr(ANr,"prototype");XE.exports=_Nr});var ZE=s((nOe,YE)=>{"use strict";var TNr=Mn(),INr={toString:null},RNr=!TNr(INr,"toString");YE.exports=RNr});var vv=s((sOe,$E)=>{"use strict";function LNr(r){return r.constructor&&r.constructor.prototype===r}$E.exports=LNr});var QE=s((uOe,PNr)=>{PNr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var rN=s((oOe,KE)=>{"use strict";var FNr=typeof window>"u"?void 0:window;KE.exports=FNr});var aN=s((vOe,iN)=>{"use strict";var jNr=vr(),MNr=vs(),eN=V0(),xNr=vv(),BNr=QE(),ka=rN(),tN;function kNr(){var r;if(eN(ka)==="undefined")return!1;for(r in ka)try{MNr(BNr,r)===-1&&jNr(ka,r)&&ka[r]!==null&&eN(ka[r])==="object"&&xNr(ka[r])}catch{return!0}return!1}tN=kNr();iN.exports=tN});var sN=s((fOe,nN)=>{"use strict";var CNr=typeof window<"u";nN.exports=CNr});var vN=s((cOe,oN)=>{"use strict";var VNr=aN(),uN=vv(),UNr=sN();function GNr(r){if(UNr===!1&&!VNr)return uN(r);try{return uN(r)}catch{return!1}}oN.exports=GNr});var fN=s((lOe,DNr)=>{DNr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var pN=s((pOe,lN)=>{"use strict";var HNr=G1(),fv=vr(),zNr=ov(),WNr=JE(),XNr=ZE(),JNr=vN(),cN=fN();function YNr(r){var e,t,i,a,n,u,o;if(a=[],zNr(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!fv(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!HNr(r))return a;t=WNr&&i}for(n in r)!(t&&n==="prototype")&&fv(r,n)&&a.push(String(n));if(XNr)for(e=JNr(r),o=0;o<cN.length;o++)u=cN[o],!(e&&u==="constructor")&&fv(r,u)&&a.push(String(u));return a}lN.exports=YNr});var gN=s((dOe,dN)=>{"use strict";var ZNr=SE(),$Nr=AE(),QNr=fs(),KNr=DE(),rSr=pN(),cs;$Nr?ZNr()?cs=KNr:cs=QNr:cs=rSr;dN.exports=cs});var Ca=s((gOe,mN)=>{"use strict";var eSr=gN();mN.exports=eSr});var hN=s((mOe,yN)=>{"use strict";var tSr=typeof Object.getOwnPropertyNames<"u";yN.exports=tSr});var wN=s((yOe,bN)=>{"use strict";var qN=xa(),iSr=qN.getOwnPropertyNames;function aSr(r){return iSr(qN(r))}bN.exports=aSr});var NN=s((hOe,EN)=>{"use strict";var nSr=xa(),sSr=Ca();function uSr(r){return sSr(nSr(r))}EN.exports=uSr});var ON=s((qOe,SN)=>{"use strict";var oSr=hN(),vSr=wN(),fSr=NN(),cv;oSr?cv=vSr:cv=fSr;SN.exports=cv});var _N=s((bOe,AN)=>{"use strict";var cSr=typeof Object.getOwnPropertyDescriptor<"u";AN.exports=cSr});var IN=s((wOe,TN)=>{"use strict";var lSr=Object.getOwnPropertyDescriptor;function pSr(r,e){var t;return r==null?null:(t=lSr(r,e),t===void 0?null:t)}TN.exports=pSr});var LN=s((EOe,RN)=>{"use strict";var dSr=vr();function gSr(r,e){return dSr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}RN.exports=gSr});var FN=s((NOe,PN)=>{"use strict";var mSr=_N(),ySr=IN(),hSr=LN(),lv;mSr?lv=ySr:lv=hSr;PN.exports=lv});var MN=s((SOe,jN)=>{"use strict";var qSr=typeof Buffer=="function"?Buffer:null;jN.exports=qSr});var BN=s((OOe,xN)=>{"use strict";var bSr=Wi(),ls=MN();function wSr(){var r,e;if(typeof ls!="function")return!1;try{typeof ls.from=="function"?e=ls.from([1,2,3,4]):e=new ls([1,2,3,4]),r=bSr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}xN.exports=wSr});var CN=s((AOe,kN)=>{"use strict";var ESr=BN();kN.exports=ESr});var GN=s(ps=>{"use strict";ps.byteLength=SSr;ps.toByteArray=ASr;ps.fromByteArray=ISr;var ut=[],He=[],NSr=typeof Uint8Array<"u"?Uint8Array:Array,pv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ea=0,VN=pv.length;ea<VN;++ea)ut[ea]=pv[ea],He[pv.charCodeAt(ea)]=ea;var ea,VN;He["-".charCodeAt(0)]=62;He["_".charCodeAt(0)]=63;function UN(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function SSr(r){var e=UN(r),t=e[0],i=e[1];return(t+i)*3/4-i}function OSr(r,e,t){return(e+t)*3/4-t}function ASr(r){var e,t=UN(r),i=t[0],a=t[1],n=new NSr(OSr(r,i,a)),u=0,o=a>0?i-4:i,v;for(v=0;v<o;v+=4)e=He[r.charCodeAt(v)]<<18|He[r.charCodeAt(v+1)]<<12|He[r.charCodeAt(v+2)]<<6|He[r.charCodeAt(v+3)],n[u++]=e>>16&255,n[u++]=e>>8&255,n[u++]=e&255;return a===2&&(e=He[r.charCodeAt(v)]<<2|He[r.charCodeAt(v+1)]>>4,n[u++]=e&255),a===1&&(e=He[r.charCodeAt(v)]<<10|He[r.charCodeAt(v+1)]<<4|He[r.charCodeAt(v+2)]>>2,n[u++]=e>>8&255,n[u++]=e&255),n}function _Sr(r){return ut[r>>18&63]+ut[r>>12&63]+ut[r>>6&63]+ut[r&63]}function TSr(r,e,t){for(var i,a=[],n=e;n<t;n+=3)i=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),a.push(_Sr(i));return a.join("")}function ISr(r){for(var e,t=r.length,i=t%3,a=[],n=16383,u=0,o=t-i;u<o;u+=n)a.push(TSr(r,u,u+n>o?o:u+n));return i===1?(e=r[t-1],a.push(ut[e>>2]+ut[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],a.push(ut[e>>10]+ut[e>>4&63]+ut[e<<2&63]+"=")),a.join("")}});var DN=s(dv=>{dv.read=function(r,e,t,i,a){var n,u,o=a*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?a-1:0,p=t?-1:1,m=r[e+l];for(l+=p,n=m&(1<<-c)-1,m>>=-c,c+=o;c>0;n=n*256+r[e+l],l+=p,c-=8);for(u=n&(1<<-c)-1,n>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(n===0)n=1-f;else{if(n===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),n=n-f}return(m?-1:1)*u*Math.pow(2,n-i)};dv.write=function(r,e,t,i,a,n){var u,o,v,f=n*8-a-1,c=(1<<f)-1,l=c>>1,p=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:n-1,y=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,a),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,a),u=0));a>=8;r[t+m]=o&255,m+=y,o/=256,a-=8);for(u=u<<a|o,f+=a;f>0;r[t+m]=u&255,m+=y,u/=256,f-=8);r[t+m-y]|=g*128}});var sS=s(Da=>{"use strict";var gv=GN(),Ua=DN(),HN=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Da.Buffer=D;Da.SlowBuffer=MSr;Da.INSPECT_MAX_BYTES=50;var ds=2147483647;Da.kMaxLength=ds;D.TYPED_ARRAY_SUPPORT=RSr();!D.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function RSr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(D.prototype,"parent",{enumerable:!0,get:function(){if(!!D.isBuffer(this))return this.buffer}});Object.defineProperty(D.prototype,"offset",{enumerable:!0,get:function(){if(!!D.isBuffer(this))return this.byteOffset}});function bt(r){if(r>ds)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,D.prototype),e}function D(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return qv(r)}return JN(r,e,t)}D.poolSize=8192;function JN(r,e,t){if(typeof r=="string")return PSr(r,e);if(ArrayBuffer.isView(r))return FSr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ot(r,ArrayBuffer)||r&&ot(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ot(r,SharedArrayBuffer)||r&&ot(r.buffer,SharedArrayBuffer)))return yv(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return D.from(i,e,t);let a=jSr(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return D.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}D.from=function(r,e,t){return JN(r,e,t)};Object.setPrototypeOf(D.prototype,Uint8Array.prototype);Object.setPrototypeOf(D,Uint8Array);function YN(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function LSr(r,e,t){return YN(r),r<=0?bt(r):e!==void 0?typeof t=="string"?bt(r).fill(e,t):bt(r).fill(e):bt(r)}D.alloc=function(r,e,t){return LSr(r,e,t)};function qv(r){return YN(r),bt(r<0?0:bv(r)|0)}D.allocUnsafe=function(r){return qv(r)};D.allocUnsafeSlow=function(r){return qv(r)};function PSr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!D.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=ZN(r,e)|0,i=bt(t),a=i.write(r,e);return a!==t&&(i=i.slice(0,a)),i}function mv(r){let e=r.length<0?0:bv(r.length)|0,t=bt(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function FSr(r){if(ot(r,Uint8Array)){let e=new Uint8Array(r);return yv(e.buffer,e.byteOffset,e.byteLength)}return mv(r)}function yv(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,D.prototype),i}function jSr(r){if(D.isBuffer(r)){let e=bv(r.length)|0,t=bt(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Ev(r.length)?bt(0):mv(r);if(r.type==="Buffer"&&Array.isArray(r.data))return mv(r.data)}function bv(r){if(r>=ds)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ds.toString(16)+" bytes");return r|0}function MSr(r){return+r!=r&&(r=0),D.alloc(+r)}D.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==D.prototype};D.compare=function(e,t){if(ot(e,Uint8Array)&&(e=D.from(e,e.offset,e.byteLength)),ot(t,Uint8Array)&&(t=D.from(t,t.offset,t.byteLength)),!D.isBuffer(e)||!D.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,a=t.length;for(let n=0,u=Math.min(i,a);n<u;++n)if(e[n]!==t[n]){i=e[n],a=t[n];break}return i<a?-1:a<i?1:0};D.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};D.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return D.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let a=D.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){let u=e[i];if(ot(u,Uint8Array))n+u.length>a.length?(D.isBuffer(u)||(u=D.from(u)),u.copy(a,n)):Uint8Array.prototype.set.call(a,u,n);else if(D.isBuffer(u))u.copy(a,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=u.length}return a};function ZN(r,e){if(D.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ot(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let a=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return hv(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return nS(r).length;default:if(a)return i?-1:hv(r).length;e=(""+e).toLowerCase(),a=!0}}D.byteLength=ZN;function xSr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return WSr(this,e,t);case"utf8":case"utf-8":return QN(this,e,t);case"ascii":return HSr(this,e,t);case"latin1":case"binary":return zSr(this,e,t);case"base64":return GSr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return XSr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}D.prototype._isBuffer=!0;function ta(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}D.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)ta(this,t,t+1);return this};D.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)ta(this,t,t+3),ta(this,t+1,t+2);return this};D.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)ta(this,t,t+7),ta(this,t+1,t+6),ta(this,t+2,t+5),ta(this,t+3,t+4);return this};D.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?QN(this,0,e):xSr.apply(this,arguments)};D.prototype.toLocaleString=D.prototype.toString;D.prototype.equals=function(e){if(!D.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:D.compare(this,e)===0};D.prototype.inspect=function(){let e="",t=Da.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};HN&&(D.prototype[HN]=D.prototype.inspect);D.prototype.compare=function(e,t,i,a,n){if(ot(e,Uint8Array)&&(e=D.from(e,e.offset,e.byteLength)),!D.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),a===void 0&&(a=0),n===void 0&&(n=this.length),t<0||i>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=i)return 0;if(a>=n)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,a>>>=0,n>>>=0,this===e)return 0;let u=n-a,o=i-t,v=Math.min(u,o),f=this.slice(a,n),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function $N(r,e,t,i,a){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Ev(t)&&(t=a?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(a)return-1;t=r.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=D.from(e,i)),D.isBuffer(e))return e.length===0?-1:zN(r,e,t,i,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):zN(r,[e],t,i,a);throw new TypeError("val must be string, number or Buffer")}function zN(r,e,t,i,a){let n=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,u/=2,o/=2,t/=2}function v(c,l){return n===1?c[l]:c.readUInt16BE(l*n)}let f;if(a){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*n}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}D.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};D.prototype.indexOf=function(e,t,i){return $N(this,e,t,i,!0)};D.prototype.lastIndexOf=function(e,t,i){return $N(this,e,t,i,!1)};function BSr(r,e,t,i){t=Number(t)||0;let a=r.length-t;i?(i=Number(i),i>a&&(i=a)):i=a;let n=e.length;i>n/2&&(i=n/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(Ev(o))return u;r[t+u]=o}return u}function kSr(r,e,t,i){return gs(hv(e,r.length-t),r,t,i)}function CSr(r,e,t,i){return gs($Sr(e),r,t,i)}function VSr(r,e,t,i){return gs(nS(e),r,t,i)}function USr(r,e,t,i){return gs(QSr(e,r.length-t),r,t,i)}D.prototype.write=function(e,t,i,a){if(t===void 0)a="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")a=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-t;if((i===void 0||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let u=!1;for(;;)switch(a){case"hex":return BSr(this,e,t,i);case"utf8":case"utf-8":return kSr(this,e,t,i);case"ascii":case"latin1":case"binary":return CSr(this,e,t,i);case"base64":return VSr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return USr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),u=!0}};D.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function GSr(r,e,t){return e===0&&t===r.length?gv.fromByteArray(r):gv.fromByteArray(r.slice(e,t))}function QN(r,e,t){t=Math.min(r.length,t);let i=[],a=e;for(;a<t;){let n=r[a],u=null,o=n>239?4:n>223?3:n>191?2:1;if(a+o<=t){let v,f,c,l;switch(o){case 1:n<128&&(u=n);break;case 2:v=r[a+1],(v&192)===128&&(l=(n&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[a+1],f=r[a+2],(v&192)===128&&(f&192)===128&&(l=(n&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[a+1],f=r[a+2],c=r[a+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(n&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),a+=o}return DSr(i)}var WN=4096;function DSr(r){let e=r.length;if(e<=WN)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=WN));return t}function HSr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]&127);return i}function zSr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]);return i}function WSr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let a="";for(let n=e;n<t;++n)a+=KSr[r[n]];return a}function XSr(r,e,t){let i=r.slice(e,t),a="";for(let n=0;n<i.length-1;n+=2)a+=String.fromCharCode(i[n]+i[n+1]*256);return a}D.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,D.prototype),a};function ve(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}D.prototype.readUintLE=D.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return a};D.prototype.readUintBE=D.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a};D.prototype.readUint8=D.prototype.readUInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]};D.prototype.readUint16LE=D.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]|this[e+1]<<8};D.prototype.readUint16BE=D.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]<<8|this[e+1]};D.prototype.readUint32LE=D.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};D.prototype.readUint32BE=D.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};D.prototype.readBigUInt64LE=fi(function(e){e=e>>>0,Ga(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))});D.prototype.readBigUInt64BE=fi(function(e){e=e>>>0,Ga(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(a)<<BigInt(32))+BigInt(n)});D.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a};D.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=t,n=1,u=this[e+--a];for(;a>0&&(n*=256);)u+=this[e+--a]*n;return n*=128,u>=n&&(u-=Math.pow(2,8*t)),u};D.prototype.readInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};D.prototype.readInt16LE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};D.prototype.readInt16BE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};D.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};D.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};D.prototype.readBigInt64LE=fi(function(e){e=e>>>0,Ga(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});D.prototype.readBigInt64BE=fi(function(e){e=e>>>0,Ga(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});D.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ua.read(this,e,!0,23,4)};D.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ua.read(this,e,!1,23,4)};D.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ua.read(this,e,!0,52,8)};D.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ua.read(this,e,!1,52,8)};function Ae(r,e,t,i,a,n){if(!D.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<n)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}D.prototype.writeUintLE=D.prototype.writeUIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Ae(this,e,t,i,o,0)}let n=1,u=0;for(this[t]=e&255;++u<i&&(n*=256);)this[t+u]=e/n&255;return t+i};D.prototype.writeUintBE=D.prototype.writeUIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Ae(this,e,t,i,o,0)}let n=i-1,u=1;for(this[t+n]=e&255;--n>=0&&(u*=256);)this[t+n]=e/u&255;return t+i};D.prototype.writeUint8=D.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,1,255,0),this[t]=e&255,t+1};D.prototype.writeUint16LE=D.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};D.prototype.writeUint16BE=D.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};D.prototype.writeUint32LE=D.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};D.prototype.writeUint32BE=D.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function KN(r,e,t,i,a){aS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function rS(r,e,t,i,a){aS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t+7]=n,n=n>>8,r[t+6]=n,n=n>>8,r[t+5]=n,n=n>>8,r[t+4]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}D.prototype.writeBigUInt64LE=fi(function(e,t=0){return KN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});D.prototype.writeBigUInt64BE=fi(function(e,t=0){return rS(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});D.prototype.writeIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Ae(this,e,t,i,v-1,-v)}let n=0,u=1,o=0;for(this[t]=e&255;++n<i&&(u*=256);)e<0&&o===0&&this[t+n-1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};D.prototype.writeIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Ae(this,e,t,i,v-1,-v)}let n=i-1,u=1,o=0;for(this[t+n]=e&255;--n>=0&&(u*=256);)e<0&&o===0&&this[t+n+1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};D.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};D.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};D.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};D.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};D.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Ae(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};D.prototype.writeBigInt64LE=fi(function(e,t=0){return KN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});D.prototype.writeBigInt64BE=fi(function(e,t=0){return rS(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function eS(r,e,t,i,a,n){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function tS(r,e,t,i,a){return e=+e,t=t>>>0,a||eS(r,e,t,4,34028234663852886e22,-34028234663852886e22),Ua.write(r,e,t,i,23,4),t+4}D.prototype.writeFloatLE=function(e,t,i){return tS(this,e,t,!0,i)};D.prototype.writeFloatBE=function(e,t,i){return tS(this,e,t,!1,i)};function iS(r,e,t,i,a){return e=+e,t=t>>>0,a||eS(r,e,t,8,17976931348623157e292,-17976931348623157e292),Ua.write(r,e,t,i,52,8),t+8}D.prototype.writeDoubleLE=function(e,t,i){return iS(this,e,t,!0,i)};D.prototype.writeDoubleBE=function(e,t,i){return iS(this,e,t,!1,i)};D.prototype.copy=function(e,t,i,a){if(!D.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<i&&(a=i),a===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-i&&(a=e.length-t+i);let n=a-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,a):Uint8Array.prototype.set.call(e,this.subarray(i,a),t),n};D.prototype.fill=function(e,t,i,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!D.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){let u=e.charCodeAt(0);(a==="utf8"&&u<128||a==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let n;if(typeof e=="number")for(n=t;n<i;++n)this[n]=e;else{let u=D.isBuffer(e)?e:D.from(e,a),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<i-t;++n)this[n+t]=u[n%o]}return this};var Va={};function wv(r,e,t){Va[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}wv("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);wv("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);wv("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,a=t;return Number.isInteger(t)&&Math.abs(t)>2**32?a=XN(String(t)):typeof t=="bigint"&&(a=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(a=XN(a)),a+="n"),i+=` It must be ${e}. Received ${a}`,i},RangeError);function XN(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function JSr(r,e,t){Ga(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&xn(e,r.length-(t+1))}function aS(r,e,t,i,a,n){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw n>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(n+1)*8}${u}`:o=`>= -(2${u} ** ${(n+1)*8-1}${u}) and < 2 ** ${(n+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Va.ERR_OUT_OF_RANGE("value",o,r)}JSr(i,a,n)}function Ga(r,e){if(typeof r!="number")throw new Va.ERR_INVALID_ARG_TYPE(e,"number",r)}function xn(r,e,t){throw Math.floor(r)!==r?(Ga(r,t),new Va.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Va.ERR_BUFFER_OUT_OF_BOUNDS:new Va.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var YSr=/[^+/0-9A-Za-z-_]/g;function ZSr(r){if(r=r.split("=")[0],r=r.trim().replace(YSr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function hv(r,e){e=e||1/0;let t,i=r.length,a=null,n=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&n.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&n.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&n.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;n.push(t)}else if(t<2048){if((e-=2)<0)break;n.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;n.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return n}function $Sr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function QSr(r,e){let t,i,a,n=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,a=t%256,n.push(a),n.push(i);return n}function nS(r){return gv.toByteArray(ZSr(r))}function gs(r,e,t,i){let a;for(a=0;a<i&&!(a+t>=e.length||a>=r.length);++a)e[a+t]=r[a];return a}function ot(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Ev(r){return r!==r}var KSr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let a=0;a<16;++a)e[i+a]=r[t]+r[a]}return e}();function fi(r){return typeof BigInt>"u"?rOr:r}function rOr(){throw new Error("BigInt not supported")}});var oS=s((LOe,uS)=>{"use strict";var eOr=sS().Buffer;uS.exports=eOr});var fS=s((POe,vS)=>{"use strict";function tOr(){throw new Error("not implemented")}vS.exports=tOr});var ci=s((FOe,cS)=>{"use strict";var iOr=CN(),aOr=oS(),nOr=fS(),Nv;iOr()?Nv=aOr:Nv=nOr;cS.exports=Nv});var pS=s((jOe,lS)=>{"use strict";var sOr=yr(),uOr=ci(),oOr=sOr(uOr.from);lS.exports=oOr});var gS=s((MOe,dS)=>{"use strict";var vOr=Wi(),fOr=C(),cOr=ci();function lOr(r){if(!vOr(r))throw new TypeError(fOr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return cOr.from(r)}dS.exports=lOr});var yS=s((xOe,mS)=>{"use strict";var pOr=Wi(),dOr=C(),gOr=ci();function mOr(r){if(!pOr(r))throw new TypeError(dOr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new gOr(r)}mS.exports=mOr});var qS=s((BOe,hS)=>{"use strict";var yOr=pS(),hOr=gS(),qOr=yS(),Sv;yOr?Sv=hOr:Sv=qOr;hS.exports=Sv});var ES=s((kOe,wS)=>{"use strict";var bOr=wa(),wOr=tt(),EOr=ba(),NOr=qa(),SOr=Xi(),OOr=ui(),AOr=me(),_Or=et(),TOr=ge(),bS;function IOr(r){return new bOr(r)}function ROr(r){return new wOr(r)}function LOr(r){return new EOr(r)}function POr(r){return new NOr(r)}function FOr(r){return new SOr(r)}function jOr(r){return new OOr(r)}function MOr(r){return new AOr(r)}function xOr(r){return new _Or(r)}function BOr(r){return new TOr(r)}function kOr(){var r={int8array:IOr,uint8array:ROr,uint8clampedarray:LOr,int16array:POr,uint16array:FOr,int32array:jOr,uint32array:MOr,float32array:xOr,float64array:BOr};return r}bS=kOr();wS.exports=bS});var _S=s((COe,AS)=>{"use strict";var ms=vr(),Ov=qe(),NS=Wi(),COr=rE(),SS=V0(),VOr=fE(),UOr=vs(),OS=Ca(),GOr=ON(),Bn=FN(),DOr=ra(),kn=ni(),HOr=qS(),zOr=ES();function WOr(r){var e,t,i,a,n,u,o,v;for(e=[],a=[],o=Object.create(DOr(r)),e.push(r),a.push(o),t=GOr(r),v=0;v<t.length;v++)i=t[v],n=Bn(r,i),ms(n,"value")&&(u=Ov(r[i])?[]:{},n.value=ia(r[i],u,e,a,-1)),kn(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function XOr(r){var e=[],t=[],i,a,n,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=OS(r),v=0;v<i.length;v++)u=i[v],a=Bn(r,u),ms(a,"value")&&(n=Ov(r[u])?[]:{},a.value=ia(r[u],n,e,t,-1)),kn(o,u,a);return o}function ia(r,e,t,i,a){var n,u,o,v,f,c,l,p,m,y;if(a-=1,typeof r!="object"||r===null)return r;if(NS(r))return HOr(r);if(COr(r))return XOr(r);if(o=SS(r),o==="date")return new Date(+r);if(o==="regexp")return VOr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=zOr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?WOr(r):{};if(u=OS(r),a>0)for(n=o,y=0;y<u.length;y++){if(c=u[y],p=r[c],o=SS(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||NS(p)){n==="object"?(v=Bn(r,c),ms(v,"value")&&(v.value=ia(p)),kn(e,c,v)):e[c]=ia(p);continue}if(m=UOr(t,p),m!==-1){e[c]=i[m];continue}l=Ov(p)?new Array(p.length):{},t.push(p),i.push(l),n==="array"?e[c]=ia(p,l,t,i,a):(v=Bn(r,c),ms(v,"value")&&(v.value=ia(p,l,t,i,a)),kn(e,c,v))}else if(o==="array")for(y=0;y<u.length;y++)c=u[y],e[c]=r[c];else for(y=0;y<u.length;y++)c=u[y],v=Bn(r,c),kn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}AS.exports=ia});var IS=s((VOe,TS)=>{"use strict";var JOr=qe(),YOr=be().isPrimitive,ZOr=C(),$Or=hr(),QOr=_S();function KOr(r,e){var t;if(arguments.length>1){if(!YOr(e))throw new TypeError(ZOr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=$Or;return t=JOr(r)?new Array(r.length):{},QOr(r,t,[r],[t],e)}TS.exports=KOr});var Cn=s((UOe,RS)=>{"use strict";var rAr=IS();RS.exports=rAr});var LS=s((GOe,eAr)=>{eAr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var FS=s((DOe,PS)=>{"use strict";var tAr=Cn(),iAr=LS();function aAr(){return tAr(iAr)}PS.exports=aAr});var jS=s((HOe,nAr)=>{nAr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var xS=s((zOe,MS)=>{"use strict";var sAr=Cn(),uAr=jS();function oAr(){return sAr(uAr)}MS.exports=oAr});var BS=s((WOe,vAr)=>{vAr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var CS=s((XOe,kS)=>{"use strict";var fAr=Cn(),cAr=BS();function lAr(){return fAr(cAr)}kS.exports=lAr});var VS=s((JOe,pAr)=>{pAr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var GS=s((YOe,US)=>{"use strict";var dAr=VS();function gAr(){return dAr.slice()}US.exports=gAr});var DS=s((ZOe,mAr)=>{mAr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var zS=s(($Oe,HS)=>{"use strict";var yAr=Cn(),hAr=DS();function qAr(){return yAr(hAr)}HS.exports=qAr});var XS=s((QOe,WS)=>{"use strict";var Vn=$r(),bAr=FS(),wAr=xS(),EAr=CS(),NAr=GS(),SAr=zS();function OAr(r){return Vn(r,"AFINN_111",bAr),Vn(r,"AFINN_96",wAr),Vn(r,"ANSCOMBES_QUARTET",EAr),Vn(r,"HERNDON_VENUS_SEMIDIAMETERS",NAr),Vn(r,"NIGHTINGALES_ROSE",SAr),r}WS.exports=OAr});var YS=s((KOe,JS)=>{"use strict";function AAr(r,e){return r+e}JS.exports=AAr});var $S=s((rAe,ZS)=>{"use strict";var _Ar=YS();ZS.exports=_Ar});var KS=s((eAe,QS)=>{"use strict";var TAr=hr(),IAr=Rr();function RAr(r){return r===TAr||r===IAr}QS.exports=RAr});var _e=s((tAe,rO)=>{"use strict";var LAr=KS();rO.exports=LAr});var iO=s((iAe,tO)=>{"use strict";var eO=X0();function PAr(r){return r>0?eO(r-1):eO(r+1)}tO.exports=PAr});var ys=s((aAe,aO)=>{"use strict";var FAr=iO();aO.exports=FAr});var sO=s((nAe,nO)=>{"use strict";var jAr=Math.sqrt;nO.exports=jAr});var Pr=s((sAe,uO)=>{"use strict";var MAr=sO();uO.exports=MAr});var vO=s((uAe,oO)=>{"use strict";function xAr(r){return Math.abs(r)}oO.exports=xAr});var Dr=s((oAe,fO)=>{"use strict";var BAr=vO();fO.exports=BAr});var lO=s((vAe,cO)=>{"use strict";var kAr=tt(),CAr=Xi(),VAr={uint16:CAr,uint8:kAr};cO.exports=VAr});var mO=s((fAe,gO)=>{"use strict";var pO=lO(),dO;function UAr(){var r,e;return r=new pO.uint16(1),r[0]=4660,e=new pO.uint8(r.buffer),e[0]===52}dO=UAr();gO.exports=dO});var Ye=s((cAe,yO)=>{"use strict";var GAr=mO();yO.exports=GAr});var bO=s((lAe,qO)=>{"use strict";var DAr=Ye(),hO,Av,_v;DAr===!0?(Av=1,_v=0):(Av=0,_v=1);hO={HIGH:Av,LOW:_v};qO.exports=hO});var Tv=s((pAe,SO)=>{"use strict";var HAr=me(),zAr=ge(),EO=bO(),NO=new zAr(1),wO=new HAr(NO.buffer),WAr=EO.HIGH,XAr=EO.LOW;function JAr(r,e,t,i){return NO[0]=r,e[i]=wO[WAr],e[i+t]=wO[XAr],e}SO.exports=JAr});var AO=s((dAe,OO)=>{"use strict";var YAr=Tv();function ZAr(r){return YAr(r,[0>>>0,0>>>0],1,0)}OO.exports=ZAr});var Ha=s((gAe,TO)=>{"use strict";var $Ar=G(),_O=AO(),QAr=Tv();$Ar(_O,"assign",QAr);TO.exports=_O});var RO=s((mAe,IO)=>{"use strict";var KAr=Ye(),Iv;KAr===!0?Iv=0:Iv=1;IO.exports=Iv});var PO=s((yAe,LO)=>{"use strict";var r_r=me(),e_r=ge(),t_r=RO(),Rv=new e_r(1),i_r=new r_r(Rv.buffer);function a_r(r,e){return Rv[0]=r,i_r[t_r]=e>>>0,Rv[0]}LO.exports=a_r});var wt=s((hAe,FO)=>{"use strict";var n_r=PO();FO.exports=n_r});var MO=s((qAe,jO)=>{"use strict";function s_r(r){return r|0}jO.exports=s_r});var Lv=s((bAe,xO)=>{"use strict";var u_r=MO();xO.exports=u_r});var vt=s((wAe,BO)=>{"use strict";var o_r=2147483647;BO.exports=o_r});var Pv=s((EAe,kO)=>{"use strict";var v_r=2147483648;kO.exports=v_r});var VO=s((NAe,CO)=>{"use strict";var f_r=Ye(),Fv;f_r===!0?Fv=1:Fv=0;CO.exports=Fv});var DO=s((SAe,GO)=>{"use strict";var c_r=me(),l_r=ge(),p_r=VO(),UO=new l_r(1),d_r=new c_r(UO.buffer);function g_r(r){return UO[0]=r,d_r[p_r]}GO.exports=g_r});var ae=s((OAe,HO)=>{"use strict";var m_r=DO();HO.exports=m_r});var XO=s((AAe,WO)=>{"use strict";var y_r=Ye(),zO,jv,Mv;y_r===!0?(jv=1,Mv=0):(jv=0,Mv=1);zO={HIGH:jv,LOW:Mv};WO.exports=zO});var QO=s((_Ae,$O)=>{"use strict";var h_r=me(),q_r=ge(),YO=XO(),ZO=new q_r(1),JO=new h_r(ZO.buffer),b_r=YO.HIGH,w_r=YO.LOW;function E_r(r,e){return JO[b_r]=r,JO[w_r]=e,ZO[0]}$O.exports=E_r});var za=s((TAe,KO)=>{"use strict";var N_r=QO();KO.exports=N_r});var eA=s((IAe,rA)=>{"use strict";var S_r=Pv(),O_r=vt(),A_r=Ha(),__r=ae(),T_r=za(),xv=[0,0];function I_r(r,e){var t,i;return A_r.assign(r,xv,1,0),t=xv[0],t&=O_r,i=__r(e),i&=S_r,t|=i,T_r(t,xv[1])}rA.exports=I_r});var hs=s((RAe,tA)=>{"use strict";var R_r=eA();tA.exports=R_r});var nA=s((LAe,aA)=>{"use strict";var iA=ys(),L_r=hs(),P_r=Rr(),qs=hr();function F_r(r,e){return e===P_r?qs:e===qs?0:e>0?iA(e)?r:0:iA(e)?L_r(qs,r):qs}aA.exports=F_r});var uA=s((PAe,sA)=>{"use strict";var j_r=vt(),M_r=ae(),x_r=1072693247,bs=1e300,ws=1e-300;function B_r(r,e){var t,i;return i=M_r(r),t=i&j_r,t<=x_r?e<0?bs*bs:ws*ws:e>0?bs*bs:ws*ws}sA.exports=B_r});var fA=s((FAe,vA)=>{"use strict";var k_r=Dr(),oA=hr();function C_r(r,e){return r===-1?(r-r)/(r-r):r===1?1:k_r(r)<1==(e===oA)?0:oA}vA.exports=C_r});var lA=s((jAe,cA)=>{"use strict";var V_r=Ye(),Bv;V_r===!0?Bv=1:Bv=0;cA.exports=Bv});var dA=s((MAe,pA)=>{"use strict";var U_r=me(),G_r=ge(),D_r=lA(),kv=new G_r(1),H_r=new U_r(kv.buffer);function z_r(r,e){return kv[0]=r,H_r[D_r]=e>>>0,kv[0]}pA.exports=z_r});var Et=s((xAe,gA)=>{"use strict";var W_r=dA();gA.exports=W_r});var ft=s((BAe,mA)=>{"use strict";var X_r=1023;mA.exports=X_r});var hA=s((kAe,yA)=>{"use strict";function J_r(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}yA.exports=J_r});var EA=s((CAe,wA)=>{"use strict";var Y_r=ae(),Es=wt(),qA=Et(),Z_r=ft(),$_r=hA(),Q_r=1048575,bA=1048576,K_r=1072693248,rTr=536870912,eTr=524288,tTr=20,iTr=9007199254740992,aTr=.9617966939259756,nTr=.9617967009544373,sTr=-7028461650952758e-24,uTr=[1,1.5],oTr=[0,.5849624872207642],vTr=[0,1350039202129749e-23];function fTr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O;return T=0,t<bA&&(e*=iTr,T-=53,t=Y_r(e)),T+=(t>>tTr)-Z_r|0,S=t&Q_r|0,t=S|K_r|0,S<=235662?O=0:S<767610?O=1:(O=0,T+=1,t-=bA),e=qA(e,t),c=uTr[O],A=e-c,b=1/(e+c),a=A*b,u=Es(a,0),i=(t>>1|rTr)+eTr,i+=O<<18,v=qA(0,i),f=e-(v-c),o=b*(A-u*v-u*f),n=a*a,w=n*n*$_r(n),w+=o*(u+a),n=u*u,v=3+n+w,v=Es(v,0),f=w-(v-3-n),A=u*v,b=o*v+f*a,p=A+b,p=Es(p,0),m=b-(p-A),y=nTr*p,g=sTr*p+m*aTr+vTr[O],l=oTr[O],q=T,d=y+g+l+q,d=Es(d,0),h=g-(d-q-l-y),r[0]=d,r[1]=h,r}wA.exports=fTr});var SA=s((VAe,NA)=>{"use strict";function cTr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}NA.exports=cTr});var AA=s((UAe,OA)=>{"use strict";var lTr=wt(),pTr=SA(),dTr=1.4426950408889634,gTr=1.4426950216293335,mTr=19259629911266175e-24;function yTr(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*pTr(a),u=gTr*a,o=a*mTr-n*dTr,i=u+o,i=lTr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}OA.exports=yTr});var Cv=s((GAe,_A)=>{"use strict";var hTr=1023;_A.exports=hTr});var IA=s((DAe,TA)=>{"use strict";var qTr=-1023;TA.exports=qTr});var Vv=s((HAe,RA)=>{"use strict";var bTr=-1074;RA.exports=bTr});var Uv=s((zAe,LA)=>{"use strict";var wTr=22250738585072014e-324;LA.exports=wTr});var Gv=s((WAe,PA)=>{"use strict";var ETr=Uv(),NTr=_e(),STr=z(),OTr=Dr(),ATr=4503599627370496;function _Tr(r,e,t,i){return STr(r)||NTr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&OTr(r)<ETr?(e[i]=r*ATr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}PA.exports=_Tr});var jA=s((XAe,FA)=>{"use strict";var TTr=Gv();function ITr(r){return TTr(r,[0,0],1,0)}FA.exports=ITr});var BA=s((JAe,xA)=>{"use strict";var RTr=G(),MA=jA(),LTr=Gv();RTr(MA,"assign",LTr);xA.exports=MA});var Un=s((YAe,kA)=>{"use strict";var PTr=2146435072;kA.exports=PTr});var VA=s((ZAe,CA)=>{"use strict";var FTr=ae(),jTr=Un(),MTr=ft();function xTr(r){var e=FTr(r);return e=(e&jTr)>>>20,e-MTr|0}CA.exports=xTr});var GA=s(($Ae,UA)=>{"use strict";var BTr=VA();UA.exports=BTr});var HA=s((QAe,DA)=>{"use strict";var kTr=hr(),CTr=Rr(),VTr=ft(),UTr=Cv(),GTr=IA(),DTr=Vv(),HTr=z(),zTr=_e(),WTr=hs(),XTr=BA().assign,JTr=GA(),YTr=Ha(),ZTr=za(),$Tr=2220446049250313e-31,QTr=2148532223>>>0,Dv=[0,0],Hv=[0,0];function KTr(r,e){var t,i;return e===0||r===0||HTr(r)||zTr(r)?r:(XTr(r,Dv,1,0),r=Dv[0],e+=Dv[1],e+=JTr(r),e<DTr?WTr(0,r):e>UTr?r<0?CTr:kTr:(e<=GTr?(e+=52,i=$Tr):i=1,YTr.assign(r,Hv,1,0),t=Hv[0],t&=QTr,t|=e+VTr<<20,i*ZTr(t,Hv[1])))}DA.exports=KTr});var Ns=s((KAe,zA)=>{"use strict";var rIr=HA();zA.exports=rIr});var Gn=s((r_e,WA)=>{"use strict";var eIr=.6931471805599453;WA.exports=eIr});var Ss=s((e_e,XA)=>{"use strict";var tIr=1048575;XA.exports=tIr});var YA=s((t_e,JA)=>{"use strict";function iIr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}JA.exports=iIr});var t_=s((i_e,e_)=>{"use strict";var aIr=ae(),ZA=Et(),nIr=wt(),sIr=Lv(),uIr=Ns(),oIr=Gn(),$A=ft(),QA=vt(),KA=Ss(),vIr=YA(),r_=1048576,fIr=1071644672,Dn=20,cIr=.6931471824645996,lIr=-1904654299957768e-24;function pIr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m;return p=r&QA|0,m=(p>>Dn)-$A|0,l=0,p>fIr&&(l=r+(r_>>m+1)>>>0,m=((l&QA)>>Dn)-$A|0,i=(l&~(KA>>m))>>>0,n=ZA(0,i),l=(l&KA|r_)>>Dn-m>>>0,r<0&&(l=-l),e-=n),n=t+e,n=nIr(n,0),o=n*cIr,v=(t-(n-e))*oIr+n*lIr,c=o+v,f=v-(c-o),n=c*c,a=c-n*vIr(n),u=c*a/(a-2)-(f+c*f),c=1-(u-c),r=aIr(c),r=sIr(r),r+=l<<Dn>>>0,r>>Dn<=0?c=uIr(c,l):c=ZA(c,r),c}e_.exports=pIr});var p_=s((a_e,l_)=>{"use strict";var i_=z(),a_=ys(),n_=_e(),dIr=Ee(),s_=Pr(),gIr=Dr(),zv=Ha(),mIr=wt(),u_=Lv(),yIr=Rr(),hIr=hr(),Wv=vt(),qIr=nA(),bIr=uA(),wIr=fA(),EIr=EA(),NIr=AA(),SIr=t_(),OIr=1072693247,AIr=1105199104,_Ir=1139802112,o_=1083179008,TIr=1072693248,IIr=1083231232,RIr=3230714880>>>0,v_=31,li=1e300,pi=1e-300,LIr=8008566259537294e-32,Nt=[0,0],f_=[0,0];function c_(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;if(i_(r)||i_(e))return NaN;if(zv.assign(e,Nt,1,0),o=Nt[0],v=Nt[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return s_(r);if(e===-.5)return 1/s_(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(n_(e))return wIr(r,e)}if(zv.assign(r,Nt,1,0),n=Nt[0],u=Nt[1],u===0){if(n===0)return qIr(r,e);if(r===1)return 1;if(r===-1&&a_(e))return-1;if(n_(r))return r===yIr?c_(-0,-e):e<0?0:hIr}if(r<0&&dIr(e)===!1)return(r-r)/(r-r);if(a=gIr(r),t=n&Wv|0,i=o&Wv|0,f=n>>>v_|0,c=o>>>v_|0,f&&a_(e)?f=-1:f=1,i>AIr){if(i>_Ir)return bIr(r,e);if(t<OIr)return c===1?f*li*li:f*pi*pi;if(t>TIr)return c===0?f*li*li:f*pi*pi;y=NIr(f_,a)}else y=EIr(f_,a,t);if(l=mIr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],g=m+p,zv.assign(g,Nt,1,0),d=u_(Nt[0]),h=u_(Nt[1]),d>=o_){if((d-o_|h)!==0||m+LIr>g-p)return f*li*li}else if((d&Wv)>=IIr&&((d-RIr|h)!==0||m<=g-p))return f*pi*pi;return g=SIr(d,p,m),f*g}l_.exports=c_});var Vr=s((n_e,d_)=>{"use strict";var PIr=p_();d_.exports=PIr});var aa=s((s_e,g_)=>{"use strict";var FIr=9007199254740991;g_.exports=FIr});var Os=s((u_e,m_)=>{"use strict";var jIr=308;m_.exports=jIr});var Xv=s((o_e,y_)=>{"use strict";var MIr=-308;y_.exports=MIr});var As=s((v_e,h_)=>{"use strict";var xIr=-324;h_.exports=xIr});var O_=s((f_e,S_)=>{"use strict";var q_=z(),_s=_e(),b_=Vr(),BIr=Dr(),w_=Ur(),kIr=aa(),E_=Os(),CIr=Xv(),VIr=As(),UIr=Rr(),GIr=kIr+1,N_=1e308;function DIr(r,e){var t,i;return q_(r)||q_(e)||_s(e)?NaN:_s(r)||r===0||e<VIr||BIr(r)>GIr&&e<=0?r:e>E_?r>=0?0:UIr:e<CIr?(t=b_(10,-(e+E_)),i=r*N_*t,_s(i)?r:w_(i)/N_/t):(t=b_(10,-e),i=r*t,_s(i)?r:w_(i)/t)}S_.exports=DIr});var __=s((c_e,A_)=>{"use strict";var HIr=O_();A_.exports=HIr});var I_=s((l_e,T_)=>{"use strict";function zIr(r,e){return r*e}T_.exports=zIr});var L_=s((p_e,R_)=>{"use strict";var WIr=I_();R_.exports=WIr});var F_=s((d_e,P_)=>{"use strict";function XIr(r,e){return r-e}P_.exports=XIr});var M_=s((g_e,j_)=>{"use strict";var JIr=F_();j_.exports=JIr});var B_=s((m_e,x_)=>{"use strict";var Hn=$r(),YIr=$S(),ZIr=__(),$Ir=L_(),QIr=Vr(),KIr=M_();function rRr(r){return Hn(r,"add",YIr),Hn(r,"floorn",ZIr),Hn(r,"mul",$Ir),Hn(r,"pow",QIr),Hn(r,"sub",KIr),r}x_.exports=rRr});var U_=s((y_e,V_)=>{"use strict";var k_=Nr().isPrimitive,eRr=hr(),tRr=Rr(),C_=C();function iRr(r,e){return t;function t(i,a){var n;if(!k_(i)){if(e.nonnumeric===void 0)throw new TypeError(C_("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!k_(a)){if(e.nonnumeric===void 0)throw new TypeError(C_("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return n=r(i,a),n!==n?e.nan:n===eRr?e.pinf:n===tRr?e.ninf:n}}V_.exports=iRr});var Jv=s((h_e,G_)=>{"use strict";var aRr=U_();G_.exports=aRr});var H_=s((q_e,D_)=>{"use strict";var nRr=B0(),sRr=A1(),uRr=ss(),oRr=C(),vRr=ns(),fRr=Jv(),cRr=["number","number"],lRr=["First argument","Second argument"];function pRr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(oRr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=vRr([r[0],r[1]],cRr,lRr),t=nRr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=uRr(t),n=fRr(e,i),r[0].push(a),r[1].push(t),sRr(r[0],r[1],n),a}D_.exports=pRr});var W_=s((b_e,z_)=>{"use strict";var dRr=H_();z_.exports=dRr});var J_=s((w_e,X_)=>{"use strict";var gRr=Nr().isPrimitive,mRr=hr(),yRr=Rr(),hRr=C();function qRr(r,e){return t;function t(i){var a;if(!gRr(i)){if(e.nonnumeric===void 0)throw new TypeError(hRr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return a=r(i),a!==a?e.nan:a===mRr?e.pinf:a===yRr?e.ninf:a}}X_.exports=qRr});var Ts=s((E_e,Y_)=>{"use strict";var bRr=J_();Y_.exports=bRr});var $_=s((N_e,Z_)=>{"use strict";var Yv=Nr().isPrimitive,wRr=hr(),ERr=Rr(),Zv=C();function NRr(r,e){return t;function t(i,a,n){var u;if(!Yv(i)){if(e.nonnumeric===void 0)throw new TypeError(Zv("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Yv(a)){if(e.nonnumeric===void 0)throw new TypeError(Zv("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Yv(n)){if(e.nonnumeric===void 0)throw new TypeError(Zv("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return u=r(i,a,n),u!==u?e.nan:u===wRr?e.pinf:u===ERr?e.ninf:u}}Z_.exports=NRr});var $v=s((S_e,Q_)=>{"use strict";var SRr=$_();Q_.exports=SRr});var rT=s((O_e,K_)=>{"use strict";var Is=Nr().isPrimitive,ORr=hr(),ARr=Rr(),Rs=C();function _Rr(r,e){return t;function t(i,a,n,u){var o;if(!Is(i)){if(e.nonnumeric===void 0)throw new TypeError(Rs("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Is(a)){if(e.nonnumeric===void 0)throw new TypeError(Rs("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Is(n)){if(e.nonnumeric===void 0)throw new TypeError(Rs("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Is(u)){if(e.nonnumeric===void 0)throw new TypeError(Rs("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,a,n,u),o!==o?e.nan:o===ORr?e.pinf:o===ARr?e.ninf:o}}K_.exports=_Rr});var tT=s((A_e,eT)=>{"use strict";var TRr=rT();eT.exports=TRr});var aT=s((__e,iT)=>{"use strict";var zn=Nr().isPrimitive,IRr=hr(),RRr=Rr(),Wn=C();function LRr(r,e){return t;function t(i,a,n,u,o){var v;if(!zn(i)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!zn(a)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!zn(n)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!zn(u)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!zn(o)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,a,n,u,o),v!==v?e.nan:v===IRr?e.pinf:v===RRr?e.ninf:v}}iT.exports=LRr});var sT=s((T_e,nT)=>{"use strict";var PRr=aT();nT.exports=PRr});var oT=s((I_e,uT)=>{"use strict";var FRr=B0(),jRr=T1(),MRr=ss(),xRr=C(),BRr=ns(),kRr=$v(),CRr=["number","number","number"],VRr=["First argument","Second argument","Third argument"];function URr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(xRr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=BRr([r[0],r[1],r[2]],CRr,VRr),t=FRr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=MRr(t),n=kRr(e,i),r[0].push(a),r[1].push(t),jRr(r[0],r[1],n),a}uT.exports=URr});var fT=s((R_e,vT)=>{"use strict";var GRr=oT();vT.exports=GRr});var lT=s((L_e,cT)=>{"use strict";var DRr=qe(),HRr=I2(),zRr=C(),WRr=Ts();function XRr(r,e){var t,i,a,n,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")i[n]=r[u+1];else throw new Error(zRr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return a=WRr(e,i),DRr(t)?(HRr([t,t],[t.length,t[0].length],a),t):a(t)}cT.exports=XRr});var dT=s((P_e,pT)=>{"use strict";var JRr=lT();pT.exports=JRr});var mT=s((F_e,gT)=>{"use strict";function YRr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}gT.exports=YRr});var Qv=s((j_e,yT)=>{"use strict";var ZRr=mT();yT.exports=ZRr});var qT=s((M_e,hT)=>{"use strict";function $Rr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}hT.exports=$Rr});var ct=s((x_e,bT)=>{"use strict";var QRr=qT();bT.exports=QRr});var ET=s((B_e,wT)=>{"use strict";var KRr=ma(),rLr=$i(),eLr=U0(),tLr=Aa(),iLr=G0(),aLr=ct();function nLr(r){var e,t,i,a;return e=r.data,i=r.shape,a=r.dtype,t=KRr(e),{ref:r,dtype:a,data:e,length:aLr(i),shape:i,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[rLr(a),eLr(a)]:[tLr(a),iLr(a)]}}wT.exports=nLr});var ST=s((k_e,NT)=>{"use strict";var sLr=ET();NT.exports=sLr});var AT=s((C_e,OT)=>{"use strict";function uLr(r){var e,t;if(e=[],r<=0)return e;for(t=0;t<r;t++)e.push(t);return e}OT.exports=uLr});var TT=s((V_e,_T)=>{"use strict";var oLr=AT();_T.exports=oLr});var RT=s((U_e,IT)=>{"use strict";function vLr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}IT.exports=vLr});var Kv=s((G_e,LT)=>{"use strict";var fLr=RT();LT.exports=fLr});var FT=s((D_e,PT)=>{"use strict";function cLr(r,e){var t,i,a,n,u,o,v,f,c,l;for(a=1,n=1,l=1;l<r.length;l++){for(v=r[a],t=v<0?-v:v,f=e[n],u=a-1,o=n-1;u>=0&&(c=r[u],i=c<0?-c:c,!(i<=t));)r[u+1]=c,e[o+1]=e[o],u-=1,o-=1;r[u+1]=v,e[o+1]=f,a+=1,n+=1}}PT.exports=cLr});var xT=s((H_e,MT)=>{"use strict";var lLr=TT(),pLr=En(),jT=Kv(),dLr=FT();function gLr(r,e,t){var i;return i=lLr(r.length),e=pLr(e),dLr(e,i),r=jT(r,i),t=jT(t,i),{sh:r,sx:e,sy:t}}MT.exports=gLr});var ne=s((z_e,BT)=>{"use strict";var mLr=xT();BT.exports=mLr});var kT=s((W_e,yLr)=>{yLr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var VT=s((X_e,CT)=>{"use strict";var hLr=kT();function qLr(r){return hLr[r]||null}CT.exports=qLr});var r3=s((J_e,UT)=>{"use strict";var bLr=VT();UT.exports=bLr});var DT=s((Y_e,GT)=>{"use strict";var wLr={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};GT.exports=wLr});var WT=s((Z_e,zT)=>{"use strict";var HT=r3(),e3=DT();function ELr(r,e){var t,i;return t=HT(r),i=HT(e),t===null||i===null?e3.BLOCK_SIZE_IN_ELEMENTS:t>i?e3.BLOCK_SIZE_IN_BYTES/t|0:e3.BLOCK_SIZE_IN_BYTES/i|0}zT.exports=ELr});var se=s(($_e,XT)=>{"use strict";var NLr=WT();XT.exports=NLr});var YT=s((Q_e,JT)=>{"use strict";var SLr=ne(),OLr=se();function ALr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(E=SLr(r.shape,r.strides,e.strides),y=E.sh,h=E.sx,q=E.sy,i=OLr(r.dtype,e.dtype),w=r.offset,A=e.offset,a=r.data,n=e.data,v=h[0],c=q[0],u=r.accessors[0],o=e.accessors[1],I=y[1];I>0;)for(I<i?(d=I,I=0):(d=i,I-=i),p=w+I*h[1],m=A+I*q[1],N=y[0];N>0;)for(N<i?(g=N,N=0):(g=i,N-=i),b=p+N*h[0],T=m+N*q[0],f=h[1]-g*h[0],l=q[1]-g*q[0],O=0;O<d;O++){for(S=0;S<g;S++)o(n,T,t(u(a,b))),b+=v,T+=c;b+=f,T+=l}}JT.exports=ALr});var $T=s((K_e,ZT)=>{"use strict";var _Lr=ne(),TLr=se();function ILr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V;for(V=_Lr(r.shape,r.strides,e.strides),q=V.sh,T=V.sx,S=V.sy,i=TLr(r.dtype,e.dtype),O=r.offset,N=e.offset,a=r.data,n=e.data,v=T[0],l=S[0],u=r.accessors[0],o=e.accessors[1],L=q[2];L>0;)for(L<i?(b=L,L=0):(b=i,L-=i),g=O+L*T[2],h=N+L*S[2],j=q[1];j>0;)for(j<i?(A=j,j=0):(A=i,j-=i),c=T[2]-A*T[1],m=S[2]-A*S[1],y=g+j*T[1],d=h+j*S[1],F=q[0];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),I=y+F*T[0],E=d+F*S[0],f=T[1]-w*T[0],p=S[1]-w*S[0],_=0;_<b;_++){for(M=0;M<A;M++){for(P=0;P<w;P++)o(n,E,t(u(a,I))),I+=v,E+=l;I+=f,E+=p}I+=c,E+=m}}ZT.exports=ILr});var KT=s((rTe,QT)=>{"use strict";var RLr=ne(),LLr=se();function PLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W;for(W=RLr(r.shape,r.strides,e.strides),T=W.sh,E=W.sx,P=W.sy,i=LLr(r.dtype,e.dtype),M=r.offset,_=e.offset,a=r.data,n=e.data,v=E[0],p=P[0],u=r.accessors[0],o=e.accessors[1],H=T[3];H>0;)for(H<i?(I=H,H=0):(I=i,H-=i),q=M+H*E[3],b=_+H*P[3],U=T[2];U>0;)for(U<i?(N=U,U=0):(N=i,U-=i),l=E[3]-N*E[2],g=P[3]-N*P[2],h=q+U*E[2],A=b+U*P[2],x=T[1];x>0;)for(x<i?(O=x,x=0):(O=i,x-=i),c=E[2]-O*E[1],y=P[2]-O*P[1],d=h+x*E[1],w=A+x*P[1],k=T[0];k>0;)for(k<i?(S=k,k=0):(S=i,k-=i),F=d+k*E[0],j=w+k*P[0],f=E[1]-S*E[0],m=P[1]-S*P[0],R=0;R<I;R++){for(B=0;B<N;B++){for(V=0;V<O;V++){for(L=0;L<S;L++)o(n,j,t(u(a,F))),F+=v,j+=p;F+=f,j+=m}F+=c,j+=y}F+=l,j+=g}}QT.exports=PLr});var eI=s((eTe,rI)=>{"use strict";var FLr=ne(),jLr=se();function MLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er;for(er=FLr(r.shape,r.strides,e.strides),I=er.sh,j=er.sx,L=er.sy,i=jLr(r.dtype,e.dtype),V=r.offset,B=e.offset,a=r.data,n=e.data,v=j[0],m=L[0],u=r.accessors[0],o=e.accessors[1],$=I[4];$>0;)for($<i?(F=$,$=0):(F=i,$-=i),b=V+$*j[4],N=B+$*L[4],J=I[3];J>0;)for(J<i?(_=J,J=0):(_=i,J-=i),p=j[4]-_*j[3],h=L[4]-_*L[3],A=b+J*j[3],O=N+J*L[3],X=I[2];X>0;)for(X<i?(M=X,X=0):(M=i,X-=i),l=j[3]-M*j[2],d=L[3]-M*L[2],w=A+X*j[2],S=O+X*L[2],Q=I[1];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=j[2]-P*j[1],g=L[2]-P*L[1],q=w+Q*j[1],T=S+Q*L[1],Z=I[0];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),R=q+Z*j[0],k=T+Z*L[0],f=j[1]-E*j[0],y=L[1]-E*L[0],Y=0;Y<F;Y++){for(W=0;W<_;W++){for(H=0;H<M;H++){for(U=0;U<P;U++){for(x=0;x<E;x++)o(n,k,t(u(a,R))),R+=v,k+=m;R+=f,k+=y}R+=c,k+=g}R+=l,k+=d}R+=p,k+=h}}rI.exports=MLr});var iI=s((tTe,tI)=>{"use strict";var xLr=ne(),BLr=se();function kLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir;for(ir=xLr(r.shape,r.strides,e.strides),_=ir.sh,k=ir.sx,x=ir.sy,i=BLr(r.dtype,e.dtype),U=r.offset,H=e.offset,a=r.data,n=e.data,v=k[0],y=x[0],u=r.accessors[0],o=e.accessors[1],fr=_[5];fr>0;)for(fr<i?(R=fr,fr=0):(R=i,fr-=i),O=U+fr*k[5],M=H+fr*x[5],ar=_[4];ar>0;)for(ar<i?(B=ar,ar=0):(B=i,ar-=i),m=k[5]-B*k[4],w=x[5]-B*x[4],S=O+ar*k[4],P=M+ar*x[4],tr=_[3];tr>0;)for(tr<i?(V=tr,tr=0):(V=i,tr-=i),p=k[4]-V*k[3],q=x[4]-V*x[3],T=S+tr*k[3],E=P+tr*x[3],rr=_[2];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=k[3]-L*k[2],h=x[3]-L*x[2],b=T+rr*k[2],I=E+rr*x[2],K=_[1];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=k[2]-j*k[1],d=x[2]-j*x[1],A=b+K*k[1],N=I+K*x[1],ur=_[0];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),W=A+ur*k[0],Y=N+ur*x[0],f=k[1]-F*k[0],g=x[1]-F*x[0],er=0;er<R;er++){for($=0;$<B;$++){for(J=0;J<V;J++){for(X=0;X<L;X++){for(Q=0;Q<j;Q++){for(Z=0;Z<F;Z++)o(n,Y,t(u(a,W))),W+=v,Y+=y;W+=f,Y+=g}W+=c,Y+=d}W+=l,Y+=h}W+=p,Y+=q}W+=m,Y+=w}}tI.exports=kLr});var nI=s((iTe,aI)=>{"use strict";var CLr=ne(),VLr=se();function ULr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr;for(gr=CLr(r.shape,r.strides,e.strides),V=gr.sh,Y=gr.sx,Z=gr.sy,i=VLr(r.dtype,e.dtype),Q=r.offset,X=e.offset,a=r.data,n=e.data,v=Y[0],g=Z[0],u=r.accessors[0],o=e.accessors[1],lr=V[6];lr>0;)for(lr<i?(W=lr,lr=0):(W=i,lr-=i),E=Q+lr*Y[6],L=X+lr*Z[6],pr=V[5];pr>0;)for(pr<i?(H=pr,pr=0):(H=i,pr-=i),y=Y[6]-H*Y[5],b=Z[6]-H*Z[5],I=E+pr*Y[5],j=L+pr*Z[5],cr=V[4];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),m=Y[5]-U*Y[4],A=Z[5]-U*Z[4],N=I+cr*Y[4],F=j+cr*Z[4],or=V[3];or>0;)for(or<i?(x=or,or=0):(x=i,or-=i),p=Y[4]-x*Y[3],w=Z[4]-x*Z[3],O=N+or*Y[3],_=F+or*Z[3],sr=V[2];sr>0;)for(sr<i?(k=sr,sr=0):(k=i,sr-=i),l=Y[3]-k*Y[2],q=Z[3]-k*Z[2],S=O+sr*Y[2],M=_+sr*Z[2],nr=V[1];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=Y[2]-R*Y[1],h=Z[2]-R*Z[1],T=S+nr*Y[1],P=M+nr*Z[1],ir=V[0];ir>0;)for(ir<i?(B=ir,ir=0):(B=i,ir-=i),J=T+ir*Y[0],$=P+ir*Z[0],f=Y[1]-B*Y[0],d=Z[1]-B*Z[0],fr=0;fr<W;fr++){for(ar=0;ar<H;ar++){for(tr=0;tr<U;tr++){for(rr=0;rr<x;rr++){for(K=0;K<k;K++){for(ur=0;ur<R;ur++){for(er=0;er<B;er++)o(n,$,t(u(a,J))),J+=v,$+=g;J+=f,$+=d}J+=c,$+=h}J+=l,$+=q}J+=p,$+=w}J+=m,$+=A}J+=y,$+=b}}aI.exports=ULr});var uI=s((aTe,sI)=>{"use strict";var GLr=ne(),DLr=se();function HLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,jr,Mr,_r,Tr,Er,Fr,Br;for(Br=GLr(r.shape,r.strides,e.strides),x=Br.sh,$=Br.sx,er=Br.sy,i=DLr(r.dtype,e.dtype),ur=r.offset,K=e.offset,a=r.data,n=e.data,v=$[0],d=er[0],u=r.accessors[0],o=e.accessors[1],Fr=x[7];Fr>0;)for(Fr<i?(J=Fr,Fr=0):(J=i,Fr-=i),_=ur+Fr*$[7],k=K+Fr*er[7],Er=x[6];Er>0;)for(Er<i?(X=Er,Er=0):(X=i,Er-=i),g=$[7]-X*$[6],S=er[7]-X*er[6],M=_+Er*$[6],R=k+Er*er[6],Tr=x[5];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),y=$[6]-Q*$[5],T=er[6]-Q*er[5],P=M+Tr*$[5],B=R+Tr*er[5],_r=x[4];_r>0;)for(_r<i?(Z=_r,_r=0):(Z=i,_r-=i),m=$[5]-Z*$[4],b=er[5]-Z*er[4],E=P+_r*$[4],V=B+_r*er[4],Mr=x[3];Mr>0;)for(Mr<i?(Y=Mr,Mr=0):(Y=i,Mr-=i),p=$[4]-Y*$[3],A=er[4]-Y*er[3],I=E+Mr*$[3],L=V+Mr*er[3],jr=x[2];jr>0;)for(jr<i?(W=jr,jr=0):(W=i,jr-=i),l=$[3]-W*$[2],w=er[3]-W*er[2],N=I+jr*$[2],j=L+jr*er[2],gr=x[1];gr>0;)for(gr<i?(H=gr,gr=0):(H=i,gr-=i),c=$[2]-H*$[1],q=er[2]-H*er[1],O=N+gr*$[1],F=j+gr*er[1],lr=x[0];lr>0;)for(lr<i?(U=lr,lr=0):(U=i,lr-=i),rr=O+lr*$[0],tr=F+lr*er[0],f=$[1]-U*$[0],h=er[1]-U*er[0],pr=0;pr<J;pr++){for(cr=0;cr<X;cr++){for(or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<W;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++)o(n,tr,t(u(a,rr))),rr+=v,tr+=d;rr+=f,tr+=h}rr+=c,tr+=q}rr+=l,tr+=w}rr+=p,tr+=A}rr+=m,tr+=b}rr+=y,tr+=T}rr+=g,tr+=S}}sI.exports=HLr});var vI=s((nTe,oI)=>{"use strict";var zLr=ne(),WLr=se();function XLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,jr,Mr,_r,Tr,Er,Fr,Br,Xr,kr,Cr,Lr,xr,Wr,Qr;for(Qr=zLr(r.shape,r.strides,e.strides),Y=Qr.sh,tr=Qr.sx,ar=Qr.sy,i=WLr(r.dtype,e.dtype),fr=r.offset,ir=e.offset,a=r.data,n=e.data,v=tr[0],h=ar[0],u=r.accessors[0],o=e.accessors[1],Wr=Y[8];Wr>0;)for(Wr<i?(rr=Wr,Wr=0):(rr=i,Wr-=i),L=fr+Wr*tr[8],W=ir+Wr*ar[8],xr=Y[7];xr>0;)for(xr<i?(K=xr,xr=0):(K=i,xr-=i),d=tr[8]-K*tr[7],N=ar[8]-K*ar[7],j=L+xr*tr[7],H=W+xr*ar[7],Lr=Y[6];Lr>0;)for(Lr<i?(ur=Lr,Lr=0):(ur=i,Lr-=i),g=tr[7]-ur*tr[6],O=ar[7]-ur*ar[6],F=j+Lr*tr[6],U=H+Lr*ar[6],Cr=Y[5];Cr>0;)for(Cr<i?(er=Cr,Cr=0):(er=i,Cr-=i),y=tr[6]-er*tr[5],S=ar[6]-er*ar[5],_=F+Cr*tr[5],x=U+Cr*ar[5],kr=Y[4];kr>0;)for(kr<i?($=kr,kr=0):($=i,kr-=i),m=tr[5]-$*tr[4],T=ar[5]-$*ar[4],M=_+kr*tr[4],k=x+kr*ar[4],Xr=Y[3];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=tr[4]-J*tr[3],b=ar[4]-J*ar[3],P=M+Xr*tr[3],R=k+Xr*ar[3],Br=Y[2];Br>0;)for(Br<i?(X=Br,Br=0):(X=i,Br-=i),l=tr[3]-X*tr[2],A=ar[3]-X*ar[2],E=P+Br*tr[2],B=R+Br*ar[2],Fr=Y[1];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=tr[2]-Q*tr[1],w=ar[2]-Q*ar[1],I=E+Fr*tr[1],V=B+Fr*ar[1],Er=Y[0];Er>0;)for(Er<i?(Z=Er,Er=0):(Z=i,Er-=i),nr=I+Er*tr[0],sr=V+Er*ar[0],f=tr[1]-Z*tr[0],q=ar[1]-Z*ar[0],Tr=0;Tr<rr;Tr++){for(_r=0;_r<K;_r++){for(Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(gr=0;gr<$;gr++){for(lr=0;lr<J;lr++){for(pr=0;pr<X;pr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++)o(n,sr,t(u(a,nr))),nr+=v,sr+=h;nr+=f,sr+=q}nr+=c,sr+=w}nr+=l,sr+=A}nr+=p,sr+=b}nr+=m,sr+=T}nr+=y,sr+=S}nr+=g,sr+=O}nr+=d,sr+=N}}oI.exports=XLr});var cI=s((sTe,fI)=>{"use strict";var JLr=ne(),YLr=se();function ZLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,jr,Mr,_r,Tr,Er,Fr,Br,Xr,kr,Cr,Lr,xr,Wr,Qr,fe,ce,le,pe,ke,ai,j0;for(j0=JLr(r.shape,r.strides,e.strides),J=j0.sh,sr=j0.sx,or=j0.sy,i=YLr(r.dtype,e.dtype),cr=r.offset,pr=e.offset,a=r.data,n=e.data,v=sr[0],q=or[0],u=r.accessors[0],o=e.accessors[1],ai=J[9];ai>0;)for(ai<i?(nr=ai,ai=0):(nr=i,ai-=i),R=cr+ai*sr[9],X=pr+ai*or[9],ke=J[8];ke>0;)for(ke<i?(ir=ke,ke=0):(ir=i,ke-=i),h=sr[9]-ir*sr[8],E=or[9]-ir*or[8],B=R+ke*sr[8],Q=X+ke*or[8],pe=J[7];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),d=sr[8]-fr*sr[7],I=or[8]-fr*or[7],V=B+pe*sr[7],Z=Q+pe*or[7],le=J[6];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=sr[7]-ar*sr[6],N=or[7]-ar*or[6],L=V+le*sr[6],Y=Z+le*or[6],ce=J[5];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=sr[6]-tr*sr[5],O=or[6]-tr*or[5],j=L+ce*sr[5],W=Y+ce*or[5],fe=J[4];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=sr[5]-rr*sr[4],S=or[5]-rr*or[4],F=j+fe*sr[4],H=W+fe*or[4],Qr=J[3];Qr>0;)for(Qr<i?(K=Qr,Qr=0):(K=i,Qr-=i),p=sr[4]-K*sr[3],T=or[4]-K*or[3],_=F+Qr*sr[3],U=H+Qr*or[3],Wr=J[2];Wr>0;)for(Wr<i?(ur=Wr,Wr=0):(ur=i,Wr-=i),l=sr[3]-ur*sr[2],b=or[3]-ur*or[2],M=_+Wr*sr[2],x=U+Wr*or[2],xr=J[1];xr>0;)for(xr<i?(er=xr,xr=0):(er=i,xr-=i),c=sr[2]-er*sr[1],A=or[2]-er*or[1],P=M+xr*sr[1],k=x+xr*or[1],Lr=J[0];Lr>0;)for(Lr<i?($=Lr,Lr=0):($=i,Lr-=i),lr=P+Lr*sr[0],gr=k+Lr*or[0],f=sr[1]-$*sr[0],w=or[1]-$*or[0],Cr=0;Cr<nr;Cr++){for(kr=0;kr<ir;kr++){for(Xr=0;Xr<fr;Xr++){for(Br=0;Br<ar;Br++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(_r=0;_r<ur;_r++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<$;jr++)o(n,gr,t(u(a,lr))),lr+=v,gr+=q;lr+=f,gr+=w}lr+=c,gr+=A}lr+=l,gr+=b}lr+=p,gr+=T}lr+=m,gr+=S}lr+=y,gr+=O}lr+=g,gr+=N}lr+=d,gr+=I}lr+=h,gr+=E}}fI.exports=ZLr});var pI=s((uTe,lI)=>{"use strict";var $Lr=ne(),QLr=se();function KLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(N=$Lr(r.shape,r.strides,e.strides),p=N.sh,g=N.sx,d=N.sy,i=QLr(r.dtype,e.dtype),h=r.offset,q=e.offset,a=r.data,n=e.data,u=g[0],v=d[0],O=p[1];O>0;)for(O<i?(y=O,O=0):(y=i,O-=i),c=h+O*g[1],l=q+O*d[1],S=p[0];S>0;)for(S<i?(m=S,S=0):(m=i,S-=i),w=c+S*g[0],A=l+S*d[0],o=g[1]-m*g[0],f=d[1]-m*d[0],T=0;T<y;T++){for(b=0;b<m;b++)n[A]=t(a[w]),w+=u,A+=v;w+=o,A+=f}}lI.exports=KLr});var gI=s((oTe,dI)=>{"use strict";var rPr=ne(),ePr=se();function tPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j;for(j=rPr(r.shape,r.strides,e.strides),d=j.sh,A=j.sx,b=j.sy,i=ePr(r.dtype,e.dtype),T=r.offset,S=e.offset,a=r.data,n=e.data,u=A[0],f=b[0],F=d[2];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),m=T+F*A[2],g=S+F*b[2],_=d[1];_>0;)for(_<i?(q=_,_=0):(q=i,_-=i),v=A[2]-q*A[1],l=b[2]-q*b[1],p=m+_*A[1],y=g+_*b[1],M=d[0];M>0;)for(M<i?(h=M,M=0):(h=i,M-=i),O=p+M*A[0],N=y+M*b[0],o=A[1]-h*A[0],c=b[1]-h*b[0],P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++)n[N]=t(a[O]),O+=u,N+=f;O+=o,N+=c}O+=v,N+=l}}dI.exports=tPr});var yI=s((vTe,mI)=>{"use strict";var iPr=ne(),aPr=se();function nPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U;for(U=iPr(r.shape,r.strides,e.strides),A=U.sh,N=U.sx,I=U.sy,i=aPr(r.dtype,e.dtype),E=r.offset,P=e.offset,a=r.data,n=e.data,u=N[0],c=I[0],x=A[3];x>0;)for(x<i?(O=x,x=0):(O=i,x-=i),d=E+x*N[3],w=P+x*I[3],k=A[2];k>0;)for(k<i?(S=k,k=0):(S=i,k-=i),f=N[3]-S*N[2],m=I[3]-S*I[2],g=d+k*N[2],q=w+k*I[2],R=A[1];R>0;)for(R<i?(T=R,R=0):(T=i,R-=i),v=N[2]-T*N[1],p=I[2]-T*I[1],y=g+R*N[1],h=q+R*I[1],B=A[0];B>0;)for(B<i?(b=B,B=0):(b=i,B-=i),M=y+B*N[0],_=h+B*I[0],o=N[1]-b*N[0],l=I[1]-b*I[0],V=0;V<O;V++){for(L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++)n[_]=t(a[M]),M+=u,_+=c;M+=o,_+=l}M+=v,_+=p}M+=f,_+=m}}mI.exports=nPr});var qI=s((fTe,hI)=>{"use strict";var sPr=ne(),uPr=se();function oPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J;for(J=sPr(r.shape,r.strides,e.strides),O=J.sh,_=J.sx,F=J.sy,i=uPr(r.dtype,e.dtype),j=r.offset,L=e.offset,a=r.data,n=e.data,u=_[0],l=F[0],X=O[4];X>0;)for(X<i?(M=X,X=0):(M=i,X-=i),w=j+X*_[4],S=L+X*F[4],Q=O[3];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=_[4]-P*_[3],g=F[4]-P*F[3],q=w+Q*_[3],T=S+Q*F[3],Z=O[2];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),f=_[3]-E*_[2],y=F[3]-E*F[2],h=q+Z*_[2],b=T+Z*F[2],Y=O[1];Y>0;)for(Y<i?(I=Y,Y=0):(I=i,Y-=i),v=_[2]-I*_[1],m=F[2]-I*F[1],d=h+Y*_[1],A=b+Y*F[1],W=O[0];W>0;)for(W<i?(N=W,W=0):(N=i,W-=i),V=d+W*_[0],B=A+W*F[0],o=_[1]-N*_[0],p=F[1]-N*F[0],H=0;H<M;H++){for(U=0;U<P;U++){for(x=0;x<E;x++){for(k=0;k<I;k++){for(R=0;R<N;R++)n[B]=t(a[V]),V+=u,B+=l;V+=o,B+=p}V+=v,B+=m}V+=f,B+=y}V+=c,B+=g}}hI.exports=oPr});var wI=s((cTe,bI)=>{"use strict";var vPr=ne(),fPr=se();function cPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar;for(ar=vPr(r.shape,r.strides,e.strides),P=ar.sh,B=ar.sx,R=ar.sy,i=fPr(r.dtype,e.dtype),k=r.offset,x=e.offset,a=r.data,n=e.data,u=B[0],p=R[0],tr=P[5];tr>0;)for(tr<i?(V=tr,tr=0):(V=i,tr-=i),T=k+tr*B[5],E=x+tr*R[5],rr=P[4];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=B[5]-L*B[4],h=R[5]-L*R[4],b=T+rr*B[4],I=E+rr*R[4],K=P[3];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=B[4]-j*B[3],d=R[4]-j*R[3],A=b+K*B[3],N=I+K*R[3],ur=P[2];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),f=B[3]-F*B[2],g=R[3]-F*R[2],w=A+ur*B[2],O=N+ur*R[2],er=P[1];er>0;)for(er<i?(_=er,er=0):(_=i,er-=i),v=B[2]-_*B[1],y=R[2]-_*R[1],q=w+er*B[1],S=O+er*R[1],$=P[0];$>0;)for($<i?(M=$,$=0):(M=i,$-=i),U=q+$*B[0],H=S+$*R[0],o=B[1]-M*B[0],m=R[1]-M*R[0],J=0;J<V;J++){for(X=0;X<L;X++){for(Q=0;Q<j;Q++){for(Z=0;Z<F;Z++){for(Y=0;Y<_;Y++){for(W=0;W<M;W++)n[H]=t(a[U]),U+=u,H+=p;U+=o,H+=m}U+=v,H+=y}U+=f,H+=g}U+=c,H+=d}U+=l,H+=h}}bI.exports=cPr});var NI=s((lTe,EI)=>{"use strict";var lPr=ne(),pPr=se();function dPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr;for(pr=lPr(r.shape,r.strides,e.strides),j=pr.sh,H=pr.sx,W=pr.sy,i=pPr(r.dtype,e.dtype),Y=r.offset,Z=e.offset,a=r.data,n=e.data,u=H[0],m=W[0],cr=j[6];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),N=Y+cr*H[6],F=Z+cr*W[6],or=j[5];or>0;)for(or<i?(x=or,or=0):(x=i,or-=i),p=H[6]-x*H[5],w=W[6]-x*W[5],O=N+or*H[5],_=F+or*W[5],sr=j[4];sr>0;)for(sr<i?(k=sr,sr=0):(k=i,sr-=i),l=H[5]-k*H[4],q=W[5]-k*W[4],S=O+sr*H[4],M=_+sr*W[4],nr=j[3];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=H[4]-R*H[3],h=W[4]-R*W[3],T=S+nr*H[3],P=M+nr*W[3],ir=j[2];ir>0;)for(ir<i?(B=ir,ir=0):(B=i,ir-=i),f=H[3]-B*H[2],d=W[3]-B*W[2],b=T+ir*H[2],E=P+ir*W[2],fr=j[1];fr>0;)for(fr<i?(V=fr,fr=0):(V=i,fr-=i),v=H[2]-V*H[1],g=W[2]-V*W[1],A=b+fr*H[1],I=E+fr*W[1],ar=j[0];ar>0;)for(ar<i?(L=ar,ar=0):(L=i,ar-=i),Q=A+ar*H[0],X=I+ar*W[0],o=H[1]-L*H[0],y=W[1]-L*W[0],tr=0;tr<U;tr++){for(rr=0;rr<x;rr++){for(K=0;K<k;K++){for(ur=0;ur<R;ur++){for(er=0;er<B;er++){for($=0;$<V;$++){for(J=0;J<L;J++)n[X]=t(a[Q]),Q+=u,X+=m;Q+=o,X+=y}Q+=v,X+=g}Q+=f,X+=d}Q+=c,X+=h}Q+=l,X+=q}Q+=p,X+=w}}EI.exports=dPr});var OI=s((pTe,SI)=>{"use strict";var gPr=ne(),mPr=se();function yPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,jr,Mr,_r,Tr,Er;for(Er=gPr(r.shape,r.strides,e.strides),R=Er.sh,X=Er.sx,J=Er.sy,i=mPr(r.dtype,e.dtype),$=r.offset,er=e.offset,a=r.data,n=e.data,u=X[0],y=J[0],Tr=R[7];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),P=$+Tr*X[7],B=er+Tr*J[7],_r=R[6];_r>0;)for(_r<i?(Z=_r,_r=0):(Z=i,_r-=i),m=X[7]-Z*X[6],b=J[7]-Z*J[6],E=P+_r*X[6],V=B+_r*J[6],Mr=R[5];Mr>0;)for(Mr<i?(Y=Mr,Mr=0):(Y=i,Mr-=i),p=X[6]-Y*X[5],A=J[6]-Y*J[5],I=E+Mr*X[5],L=V+Mr*J[5],jr=R[4];jr>0;)for(jr<i?(W=jr,jr=0):(W=i,jr-=i),l=X[5]-W*X[4],w=J[5]-W*J[4],N=I+jr*X[4],j=L+jr*J[4],gr=R[3];gr>0;)for(gr<i?(H=gr,gr=0):(H=i,gr-=i),c=X[4]-H*X[3],q=J[4]-H*J[3],O=N+gr*X[3],F=j+gr*J[3],lr=R[2];lr>0;)for(lr<i?(U=lr,lr=0):(U=i,lr-=i),f=X[3]-U*X[2],h=J[3]-U*J[2],S=O+lr*X[2],_=F+lr*J[2],pr=R[1];pr>0;)for(pr<i?(x=pr,pr=0):(x=i,pr-=i),v=X[2]-x*X[1],d=J[2]-x*J[1],T=S+pr*X[1],M=_+pr*J[1],cr=R[0];cr>0;)for(cr<i?(k=cr,cr=0):(k=i,cr-=i),ur=T+cr*X[0],K=M+cr*J[0],o=X[1]-k*X[0],g=J[1]-k*J[0],or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<W;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++){for(tr=0;tr<x;tr++){for(rr=0;rr<k;rr++)n[K]=t(a[ur]),ur+=u,K+=y;ur+=o,K+=g}ur+=v,K+=d}ur+=f,K+=h}ur+=c,K+=q}ur+=l,K+=w}ur+=p,K+=A}ur+=m,K+=b}}SI.exports=yPr});var _I=s((dTe,AI)=>{"use strict";var hPr=ne(),qPr=se();function bPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,jr,Mr,_r,Tr,Er,Fr,Br,Xr,kr,Cr,Lr,xr;for(xr=hPr(r.shape,r.strides,e.strides),H=xr.sh,K=xr.sx,rr=xr.sy,i=qPr(r.dtype,e.dtype),tr=r.offset,ar=e.offset,a=r.data,n=e.data,u=K[0],g=rr[0],Lr=H[8];Lr>0;)for(Lr<i?(ur=Lr,Lr=0):(ur=i,Lr-=i),F=tr+Lr*K[8],U=ar+Lr*rr[8],Cr=H[7];Cr>0;)for(Cr<i?(er=Cr,Cr=0):(er=i,Cr-=i),y=K[8]-er*K[7],S=rr[8]-er*rr[7],_=F+Cr*K[7],x=U+Cr*rr[7],kr=H[6];kr>0;)for(kr<i?($=kr,kr=0):($=i,kr-=i),m=K[7]-$*K[6],T=rr[7]-$*rr[6],M=_+kr*K[6],k=x+kr*rr[6],Xr=H[5];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=K[6]-J*K[5],b=rr[6]-J*rr[5],P=M+Xr*K[5],R=k+Xr*rr[5],Br=H[4];Br>0;)for(Br<i?(X=Br,Br=0):(X=i,Br-=i),l=K[5]-X*K[4],A=rr[5]-X*rr[4],E=P+Br*K[4],B=R+Br*rr[4],Fr=H[3];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=K[4]-Q*K[3],w=rr[4]-Q*rr[3],I=E+Fr*K[3],V=B+Fr*rr[3],Er=H[2];Er>0;)for(Er<i?(Z=Er,Er=0):(Z=i,Er-=i),f=K[3]-Z*K[2],q=rr[3]-Z*rr[2],N=I+Er*K[2],L=V+Er*rr[2],Tr=H[1];Tr>0;)for(Tr<i?(Y=Tr,Tr=0):(Y=i,Tr-=i),v=K[2]-Y*K[1],h=rr[2]-Y*rr[1],O=N+Tr*K[1],j=L+Tr*rr[1],_r=H[0];_r>0;)for(_r<i?(W=_r,_r=0):(W=i,_r-=i),fr=O+_r*K[0],ir=j+_r*rr[0],o=K[1]-W*K[0],d=rr[1]-W*rr[0],Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(gr=0;gr<$;gr++){for(lr=0;lr<J;lr++){for(pr=0;pr<X;pr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++){for(sr=0;sr<Y;sr++){for(nr=0;nr<W;nr++)n[ir]=t(a[fr]),fr+=u,ir+=g;fr+=o,ir+=d}fr+=v,ir+=h}fr+=f,ir+=q}fr+=c,ir+=w}fr+=l,ir+=A}fr+=p,ir+=b}fr+=m,ir+=T}fr+=y,ir+=S}}AI.exports=bPr});var II=s((gTe,TI)=>{"use strict";var wPr=ne(),EPr=se();function NPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,jr,Mr,_r,Tr,Er,Fr,Br,Xr,kr,Cr,Lr,xr,Wr,Qr,fe,ce,le,pe,ke;for(ke=wPr(r.shape,r.strides,e.strides),Q=ke.sh,ir=ke.sx,nr=ke.sy,i=EPr(r.dtype,e.dtype),sr=r.offset,or=e.offset,a=r.data,n=e.data,u=ir[0],d=nr[0],pe=Q[9];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),V=sr+pe*ir[9],Z=or+pe*nr[9],le=Q[8];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=ir[9]-ar*ir[8],N=nr[9]-ar*nr[8],L=V+le*ir[8],Y=Z+le*nr[8],ce=Q[7];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=ir[8]-tr*ir[7],O=nr[8]-tr*nr[7],j=L+ce*ir[7],W=Y+ce*nr[7],fe=Q[6];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=ir[7]-rr*ir[6],S=nr[7]-rr*nr[6],F=j+fe*ir[6],H=W+fe*nr[6],Qr=Q[5];Qr>0;)for(Qr<i?(K=Qr,Qr=0):(K=i,Qr-=i),p=ir[6]-K*ir[5],T=nr[6]-K*nr[5],_=F+Qr*ir[5],U=H+Qr*nr[5],Wr=Q[4];Wr>0;)for(Wr<i?(ur=Wr,Wr=0):(ur=i,Wr-=i),l=ir[5]-ur*ir[4],b=nr[5]-ur*nr[4],M=_+Wr*ir[4],x=U+Wr*nr[4],xr=Q[3];xr>0;)for(xr<i?(er=xr,xr=0):(er=i,xr-=i),c=ir[4]-er*ir[3],A=nr[4]-er*nr[3],P=M+xr*ir[3],k=x+xr*nr[3],Lr=Q[2];Lr>0;)for(Lr<i?($=Lr,Lr=0):($=i,Lr-=i),f=ir[3]-$*ir[2],w=nr[3]-$*nr[2],E=P+Lr*ir[2],R=k+Lr*nr[2],Cr=Q[1];Cr>0;)for(Cr<i?(J=Cr,Cr=0):(J=i,Cr-=i),v=ir[2]-J*ir[1],q=nr[2]-J*nr[1],I=E+Cr*ir[1],B=R+Cr*nr[1],kr=Q[0];kr>0;)for(kr<i?(X=kr,kr=0):(X=i,kr-=i),cr=I+kr*ir[0],pr=B+kr*nr[0],o=ir[1]-X*ir[0],h=nr[1]-X*nr[0],Xr=0;Xr<fr;Xr++){for(Br=0;Br<ar;Br++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(_r=0;_r<ur;_r++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<$;jr++){for(gr=0;gr<J;gr++){for(lr=0;lr<X;lr++)n[pr]=t(a[cr]),cr+=u,pr+=d;cr+=o,pr+=h}cr+=v,pr+=q}cr+=f,pr+=w}cr+=c,pr+=A}cr+=l,pr+=b}cr+=p,pr+=T}cr+=m,pr+=S}cr+=y,pr+=O}cr+=g,pr+=N}}TI.exports=NPr});var LI=s((mTe,RI)=>{"use strict";function SPr(r,e,t){e.accessors[1](e.data,e.offset,t(r.accessors[0](r.data,r.offset)))}RI.exports=SPr});var FI=s((yTe,PI)=>{"use strict";function OPr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(f=r.shape[0],o=r.strides[0],v=e.strides[0],c=r.offset,l=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],p=0;p<f;p++)u(a,l,t(n(i,c))),c+=o,l+=v}PI.exports=OPr});var MI=s((hTe,jI)=>{"use strict";function APr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;for(l=r.shape,y=r.strides,g=e.strides,r.order==="row-major"?(p=l[1],m=l[0],o=y[1],v=y[0]-p*y[1],f=g[1],c=g[0]-p*g[1]):(p=l[0],m=l[1],o=y[0],v=y[1]-p*y[0],f=g[0],c=g[1]-p*g[0]),d=r.offset,h=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],w=0;w<m;w++){for(q=0;q<p;q++)u(a,h,t(n(i,d))),d+=o,h+=f;d+=v,h+=c}}jI.exports=APr});var BI=s((qTe,xI)=>{"use strict";function _Pr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;for(m=r.shape,h=r.strides,q=e.strides,r.order==="row-major"?(y=m[2],g=m[1],d=m[0],o=h[2],v=h[1]-y*h[2],f=h[0]-g*h[1],c=q[2],l=q[1]-y*q[2],p=q[0]-g*q[1]):(y=m[0],g=m[1],d=m[2],o=h[0],v=h[1]-y*h[0],f=h[2]-g*h[1],c=q[0],l=q[1]-y*q[0],p=q[2]-g*q[1]),w=r.offset,A=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],S=0;S<d;S++){for(T=0;T<g;T++){for(b=0;b<y;b++)u(a,A,t(n(i,w))),w+=o,A+=c;w+=v,A+=l}w+=f,A+=p}}xI.exports=_Pr});var CI=s((bTe,kI)=>{"use strict";function TPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(g=r.shape,A=r.strides,b=e.strides,r.order==="row-major"?(d=g[3],h=g[2],q=g[1],w=g[0],o=A[3],v=A[2]-d*A[3],f=A[1]-h*A[2],c=A[0]-q*A[1],l=b[3],p=b[2]-d*b[3],m=b[1]-h*b[2],y=b[0]-q*b[1]):(d=g[0],h=g[1],q=g[2],w=g[3],o=A[0],v=A[1]-d*A[0],f=A[2]-h*A[1],c=A[3]-q*A[2],l=b[0],p=b[1]-d*b[0],m=b[2]-h*b[1],y=b[3]-q*b[2]),T=r.offset,S=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],E=0;E<w;E++){for(I=0;I<q;I++){for(N=0;N<h;N++){for(O=0;O<d;O++)u(a,S,t(n(i,T))),T+=o,S+=l;T+=v,S+=p}T+=f,S+=m}T+=c,S+=y}}kI.exports=TPr});var UI=s((wTe,VI)=>{"use strict";function IPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F;for(h=r.shape,S=r.strides,O=e.strides,r.order==="row-major"?(q=h[4],w=h[3],A=h[2],b=h[1],T=h[0],o=S[4],v=S[3]-q*S[4],f=S[2]-w*S[3],c=S[1]-A*S[2],l=S[0]-b*S[1],p=O[4],m=O[3]-q*O[4],y=O[2]-w*O[3],g=O[1]-A*O[2],d=O[0]-b*O[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],o=S[0],v=S[1]-q*S[0],f=S[2]-w*S[1],c=S[3]-A*S[2],l=S[4]-b*S[3],p=O[0],m=O[1]-q*O[0],y=O[2]-w*O[1],g=O[3]-A*O[2],d=O[4]-b*O[3]),N=r.offset,I=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],F=0;F<T;F++){for(_=0;_<b;_++){for(M=0;M<A;M++){for(P=0;P<w;P++){for(E=0;E<q;E++)u(a,I,t(n(i,N))),N+=o,I+=p;N+=v,I+=m}N+=f,I+=y}N+=c,I+=g}N+=l,I+=d}}VI.exports=IPr});var DI=s((ETe,GI)=>{"use strict";function RPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B;for(w=r.shape,I=r.strides,E=e.strides,r.order==="row-major"?(A=w[5],b=w[4],T=w[3],S=w[2],O=w[1],N=w[0],o=I[5],v=I[4]-A*I[5],f=I[3]-b*I[4],c=I[2]-T*I[3],l=I[1]-S*I[2],p=I[0]-O*I[1],m=E[5],y=E[4]-A*E[5],g=E[3]-b*E[4],d=E[2]-T*E[3],h=E[1]-S*E[2],q=E[0]-O*E[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],o=I[0],v=I[1]-A*I[0],f=I[2]-b*I[1],c=I[3]-T*I[2],l=I[4]-S*I[3],p=I[5]-O*I[4],m=E[0],y=E[1]-A*E[0],g=E[2]-b*E[1],d=E[3]-T*E[2],h=E[4]-S*E[3],q=E[5]-O*E[4]),P=r.offset,M=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],B=0;B<N;B++){for(V=0;V<O;V++){for(L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(_=0;_<A;_++)u(a,M,t(n(i,P))),P+=o,M+=m;P+=v,M+=y}P+=f,M+=g}P+=c,M+=d}P+=l,M+=h}P+=p,M+=q}}GI.exports=RPr});var zI=s((NTe,HI)=>{"use strict";function LPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U;for(b=r.shape,M=r.strides,_=e.strides,r.order==="row-major"?(T=b[6],S=b[5],O=b[4],N=b[3],I=b[2],E=b[1],P=b[0],o=M[6],v=M[5]-T*M[6],f=M[4]-S*M[5],c=M[3]-O*M[4],l=M[2]-N*M[3],p=M[1]-I*M[2],m=M[0]-E*M[1],y=_[6],g=_[5]-T*_[6],d=_[4]-S*_[5],h=_[3]-O*_[4],q=_[2]-N*_[3],w=_[1]-I*_[2],A=_[0]-E*_[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],o=M[0],v=M[1]-T*M[0],f=M[2]-S*M[1],c=M[3]-O*M[2],l=M[4]-N*M[3],p=M[5]-I*M[4],m=M[6]-E*M[5],y=_[0],g=_[1]-T*_[0],d=_[2]-S*_[1],h=_[3]-O*_[2],q=_[4]-N*_[3],w=_[5]-I*_[4],A=_[6]-E*_[5]),F=r.offset,j=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],U=0;U<P;U++){for(x=0;x<E;x++){for(k=0;k<I;k++){for(R=0;R<N;R++){for(B=0;B<O;B++){for(V=0;V<S;V++){for(L=0;L<T;L++)u(a,j,t(n(i,F))),F+=o,j+=y;F+=v,j+=g}F+=f,j+=d}F+=c,j+=h}F+=l,j+=q}F+=p,j+=w}F+=m,j+=A}}HI.exports=LPr});var XI=s((STe,WI)=>{"use strict";function PPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z;for(S=r.shape,j=r.strides,L=e.strides,r.order==="row-major"?(O=S[7],N=S[6],I=S[5],E=S[4],P=S[3],M=S[2],_=S[1],F=S[0],o=j[7],v=j[6]-O*j[7],f=j[5]-N*j[6],c=j[4]-I*j[5],l=j[3]-E*j[4],p=j[2]-P*j[3],m=j[1]-M*j[2],y=j[0]-_*j[1],g=L[7],d=L[6]-O*L[7],h=L[5]-N*L[6],q=L[4]-I*L[5],w=L[3]-E*L[4],A=L[2]-P*L[3],b=L[1]-M*L[2],T=L[0]-_*L[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],M=S[5],_=S[6],F=S[7],o=j[0],v=j[1]-O*j[0],f=j[2]-N*j[1],c=j[3]-I*j[2],l=j[4]-E*j[3],p=j[5]-P*j[4],m=j[6]-M*j[5],y=j[7]-_*j[6],g=L[0],d=L[1]-O*L[0],h=L[2]-N*L[1],q=L[3]-I*L[2],w=L[4]-E*L[3],A=L[5]-P*L[4],b=L[6]-M*L[5],T=L[7]-_*L[6]),V=r.offset,B=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],Z=0;Z<F;Z++){for(Y=0;Y<_;Y++){for(W=0;W<M;W++){for(H=0;H<P;H++){for(U=0;U<E;U++){for(x=0;x<I;x++){for(k=0;k<N;k++){for(R=0;R<O;R++)u(a,B,t(n(i,V))),V+=o,B+=g;V+=v,B+=d}V+=f,B+=h}V+=c,B+=q}V+=l,B+=w}V+=p,B+=A}V+=m,B+=b}V+=y,B+=T}}WI.exports=PPr});var YI=s((OTe,JI)=>{"use strict";function FPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$;for(N=r.shape,B=r.strides,R=e.strides,r.order==="row-major"?(I=N[8],E=N[7],P=N[6],M=N[5],_=N[4],F=N[3],j=N[2],L=N[1],V=N[0],o=B[8],v=B[7]-I*B[8],f=B[6]-E*B[7],c=B[5]-P*B[6],l=B[4]-M*B[5],p=B[3]-_*B[4],m=B[2]-F*B[3],y=B[1]-j*B[2],g=B[0]-L*B[1],d=R[8],h=R[7]-I*R[8],q=R[6]-E*R[7],w=R[5]-P*R[6],A=R[4]-M*R[5],b=R[3]-_*R[4],T=R[2]-F*R[3],S=R[1]-j*R[2],O=R[0]-L*R[1]):(I=N[0],E=N[1],P=N[2],M=N[3],_=N[4],F=N[5],j=N[6],L=N[7],V=N[8],o=B[0],v=B[1]-I*B[0],f=B[2]-E*B[1],c=B[3]-P*B[2],l=B[4]-M*B[3],p=B[5]-_*B[4],m=B[6]-F*B[5],y=B[7]-j*B[6],g=B[8]-L*B[7],d=R[0],h=R[1]-I*R[0],q=R[2]-E*R[1],w=R[3]-P*R[2],A=R[4]-M*R[3],b=R[5]-_*R[4],T=R[6]-F*R[5],S=R[7]-j*R[6],O=R[8]-L*R[7]),k=r.offset,x=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],$=0;$<V;$++){for(J=0;J<L;J++){for(X=0;X<j;X++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(Y=0;Y<M;Y++){for(W=0;W<P;W++){for(H=0;H<E;H++){for(U=0;U<I;U++)u(a,x,t(n(i,k))),k+=o,x+=d;k+=v,x+=h}k+=f,x+=q}k+=c,x+=w}k+=l,x+=A}k+=p,x+=b}k+=m,x+=T}k+=y,x+=S}k+=g,x+=O}}JI.exports=FPr});var $I=s((ATe,ZI)=>{"use strict";function jPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur,K,rr;for(E=r.shape,x=r.strides,U=e.strides,r.order==="row-major"?(P=E[9],M=E[8],_=E[7],F=E[6],j=E[5],L=E[4],V=E[3],B=E[2],R=E[1],k=E[0],o=x[9],v=x[8]-P*x[9],f=x[7]-M*x[8],c=x[6]-_*x[7],l=x[5]-F*x[6],p=x[4]-j*x[5],m=x[3]-L*x[4],y=x[2]-V*x[3],g=x[1]-B*x[2],d=x[0]-R*x[1],h=U[9],q=U[8]-P*U[9],w=U[7]-M*U[8],A=U[6]-_*U[7],b=U[5]-F*U[6],T=U[4]-j*U[5],S=U[3]-L*U[4],O=U[2]-V*U[3],N=U[1]-B*U[2],I=U[0]-R*U[1]):(P=E[0],M=E[1],_=E[2],F=E[3],j=E[4],L=E[5],V=E[6],B=E[7],R=E[8],k=E[9],o=x[0],v=x[1]-P*x[0],f=x[2]-M*x[1],c=x[3]-_*x[2],l=x[4]-F*x[3],p=x[5]-j*x[4],m=x[6]-L*x[5],y=x[7]-V*x[6],g=x[8]-B*x[7],d=x[9]-R*x[8],h=U[0],q=U[1]-P*U[0],w=U[2]-M*U[1],A=U[3]-_*U[2],b=U[4]-F*U[3],T=U[5]-j*U[4],S=U[6]-L*U[5],O=U[7]-V*U[6],N=U[8]-B*U[7],I=U[9]-R*U[8]),H=r.offset,W=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],rr=0;rr<k;rr++){for(K=0;K<R;K++){for(ur=0;ur<B;ur++){for(er=0;er<V;er++){for($=0;$<L;$++){for(J=0;J<j;J++){for(X=0;X<F;X++){for(Q=0;Q<_;Q++){for(Z=0;Z<M;Z++){for(Y=0;Y<P;Y++)u(a,W,t(n(i,H))),H+=o,W+=h;H+=v,W+=q}H+=f,W+=w}H+=c,W+=A}H+=l,W+=b}H+=p,W+=T}H+=m,W+=S}H+=y,W+=O}H+=g,W+=N}H+=d,W+=I}}ZI.exports=jPr});var KI=s((_Te,QI)=>{"use strict";var MPr=C();function xPr(r,e,t,i,a,n){var u,o,v,f,c;for(u=r.length,o=1,c=0;c<u;c++)o*=r[c];if(n==="clamp")a<0?a=0:a>=o&&(a=o-1);else if(n==="wrap")a<0?(a+=o,a<0&&(a%=o,a!==0&&(a+=o))):a>=o&&(a-=o,a>=o&&(a%=o));else if(a<0||a>=o)throw new RangeError(MPr("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",o,a));if(v=t,i==="column-major"){for(c=0;c<u;c++)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}for(c=u-1;c>=0;c--)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}QI.exports=xPr});var t3=s((TTe,rR)=>{"use strict";var BPr=KI();rR.exports=BPr});var aR=s((ITe,iR)=>{"use strict";var kPr=ct(),eR=t3(),tR="throw";function CPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(c=r.shape,o=kPr(c),i=r.data,a=e.data,l=r.strides,p=e.strides,m=r.offset,y=e.offset,n=r.order,u=e.order,v=r.accessors[0],f=e.accessors[1],h=0;h<o;h++)g=eR(c,l,m,n,h,tR),d=eR(c,p,y,u,h,tR),f(a,d,t(v(i,g)))}iR.exports=CPr});var sR=s((RTe,nR)=>{"use strict";function VPr(r,e,t){e.data[e.offset]=t(r.data[r.offset])}nR.exports=VPr});var oR=s((LTe,uR)=>{"use strict";function UPr(r,e,t){var i,a,n,u,o,v,f,c;for(o=r.shape[0],n=r.strides[0],u=e.strides[0],v=r.offset,f=e.offset,i=r.data,a=e.data,c=0;c<o;c++)a[f]=t(i[v]),v+=n,f+=u}uR.exports=UPr});var fR=s((PTe,vR)=>{"use strict";function GPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(f=r.shape,p=r.strides,m=e.strides,r.order==="row-major"?(c=f[1],l=f[0],n=p[1],u=p[0]-c*p[1],o=m[1],v=m[0]-c*m[1]):(c=f[0],l=f[1],n=p[0],u=p[1]-c*p[0],o=m[0],v=m[1]-c*m[0]),y=r.offset,g=e.offset,i=r.data,a=e.data,h=0;h<l;h++){for(d=0;d<c;d++)a[g]=t(i[y]),y+=n,g+=o;y+=u,g+=v}}vR.exports=GPr});var lR=s((FTe,cR)=>{"use strict";function DPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b;for(l=r.shape,g=r.strides,d=e.strides,r.order==="row-major"?(p=l[2],m=l[1],y=l[0],n=g[2],u=g[1]-p*g[2],o=g[0]-m*g[1],v=d[2],f=d[1]-p*d[2],c=d[0]-m*d[1]):(p=l[0],m=l[1],y=l[2],n=g[0],u=g[1]-p*g[0],o=g[2]-m*g[1],v=d[0],f=d[1]-p*d[0],c=d[2]-m*d[1]),h=r.offset,q=e.offset,i=r.data,a=e.data,b=0;b<y;b++){for(A=0;A<m;A++){for(w=0;w<p;w++)a[q]=t(i[h]),h+=n,q+=v;h+=u,q+=f}h+=o,q+=c}}cR.exports=DPr});var dR=s((jTe,pR)=>{"use strict";function HPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(m=r.shape,q=r.strides,w=e.strides,r.order==="row-major"?(y=m[3],g=m[2],d=m[1],h=m[0],n=q[3],u=q[2]-y*q[3],o=q[1]-g*q[2],v=q[0]-d*q[1],f=w[3],c=w[2]-y*w[3],l=w[1]-g*w[2],p=w[0]-d*w[1]):(y=m[0],g=m[1],d=m[2],h=m[3],n=q[0],u=q[1]-y*q[0],o=q[2]-g*q[1],v=q[3]-d*q[2],f=w[0],c=w[1]-y*w[0],l=w[2]-g*w[1],p=w[3]-d*w[2]),A=r.offset,b=e.offset,i=r.data,a=e.data,N=0;N<h;N++){for(O=0;O<d;O++){for(S=0;S<g;S++){for(T=0;T<y;T++)a[b]=t(i[A]),A+=n,b+=f;A+=u,b+=c}A+=o,b+=l}A+=v,b+=p}}pR.exports=HPr});var mR=s((MTe,gR)=>{"use strict";function zPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M;for(g=r.shape,b=r.strides,T=e.strides,r.order==="row-major"?(d=g[4],h=g[3],q=g[2],w=g[1],A=g[0],n=b[4],u=b[3]-d*b[4],o=b[2]-h*b[3],v=b[1]-q*b[2],f=b[0]-w*b[1],c=T[4],l=T[3]-d*T[4],p=T[2]-h*T[3],m=T[1]-q*T[2],y=T[0]-w*T[1]):(d=g[0],h=g[1],q=g[2],w=g[3],A=g[4],n=b[0],u=b[1]-d*b[0],o=b[2]-h*b[1],v=b[3]-q*b[2],f=b[4]-w*b[3],c=T[0],l=T[1]-d*T[0],p=T[2]-h*T[1],m=T[3]-q*T[2],y=T[4]-w*T[3]),S=r.offset,O=e.offset,i=r.data,a=e.data,M=0;M<A;M++){for(P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++){for(N=0;N<d;N++)a[O]=t(i[S]),S+=n,O+=c;S+=u,O+=l}S+=o,O+=p}S+=v,O+=m}S+=f,O+=y}}gR.exports=zPr});var hR=s((xTe,yR)=>{"use strict";function WPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L;for(h=r.shape,O=r.strides,N=e.strides,r.order==="row-major"?(q=h[5],w=h[4],A=h[3],b=h[2],T=h[1],S=h[0],n=O[5],u=O[4]-q*O[5],o=O[3]-w*O[4],v=O[2]-A*O[3],f=O[1]-b*O[2],c=O[0]-T*O[1],l=N[5],p=N[4]-q*N[5],m=N[3]-w*N[4],y=N[2]-A*N[3],g=N[1]-b*N[2],d=N[0]-T*N[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],S=h[5],n=O[0],u=O[1]-q*O[0],o=O[2]-w*O[1],v=O[3]-A*O[2],f=O[4]-b*O[3],c=O[5]-T*O[4],l=N[0],p=N[1]-q*N[0],m=N[2]-w*N[1],y=N[3]-A*N[2],g=N[4]-b*N[3],d=N[5]-T*N[4]),I=r.offset,E=e.offset,i=r.data,a=e.data,L=0;L<S;L++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(_=0;_<A;_++){for(M=0;M<w;M++){for(P=0;P<q;P++)a[E]=t(i[I]),I+=n,E+=l;I+=u,E+=p}I+=o,E+=m}I+=v,E+=y}I+=f,E+=g}I+=c,E+=d}}yR.exports=WPr});var bR=s((BTe,qR)=>{"use strict";function XPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k;for(w=r.shape,E=r.strides,P=e.strides,r.order==="row-major"?(A=w[6],b=w[5],T=w[4],S=w[3],O=w[2],N=w[1],I=w[0],n=E[6],u=E[5]-A*E[6],o=E[4]-b*E[5],v=E[3]-T*E[4],f=E[2]-S*E[3],c=E[1]-O*E[2],l=E[0]-N*E[1],p=P[6],m=P[5]-A*P[6],y=P[4]-b*P[5],g=P[3]-T*P[4],d=P[2]-S*P[3],h=P[1]-O*P[2],q=P[0]-N*P[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],I=w[6],n=E[0],u=E[1]-A*E[0],o=E[2]-b*E[1],v=E[3]-T*E[2],f=E[4]-S*E[3],c=E[5]-O*E[4],l=E[6]-N*E[5],p=P[0],m=P[1]-A*P[0],y=P[2]-b*P[1],g=P[3]-T*P[2],d=P[4]-S*P[3],h=P[5]-O*P[4],q=P[6]-N*P[5]),M=r.offset,_=e.offset,i=r.data,a=e.data,k=0;k<I;k++){for(R=0;R<N;R++){for(B=0;B<O;B++){for(V=0;V<S;V++){for(L=0;L<T;L++){for(j=0;j<b;j++){for(F=0;F<A;F++)a[_]=t(i[M]),M+=n,_+=p;M+=u,_+=m}M+=o,_+=y}M+=v,_+=g}M+=f,_+=d}M+=c,_+=h}M+=l,_+=q}}qR.exports=XPr});var ER=s((kTe,wR)=>{"use strict";function JPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W;for(b=r.shape,_=r.strides,F=e.strides,r.order==="row-major"?(T=b[7],S=b[6],O=b[5],N=b[4],I=b[3],E=b[2],P=b[1],M=b[0],n=_[7],u=_[6]-T*_[7],o=_[5]-S*_[6],v=_[4]-O*_[5],f=_[3]-N*_[4],c=_[2]-I*_[3],l=_[1]-E*_[2],p=_[0]-P*_[1],m=F[7],y=F[6]-T*F[7],g=F[5]-S*F[6],d=F[4]-O*F[5],h=F[3]-N*F[4],q=F[2]-I*F[3],w=F[1]-E*F[2],A=F[0]-P*F[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],M=b[7],n=_[0],u=_[1]-T*_[0],o=_[2]-S*_[1],v=_[3]-O*_[2],f=_[4]-N*_[3],c=_[5]-I*_[4],l=_[6]-E*_[5],p=_[7]-P*_[6],m=F[0],y=F[1]-T*F[0],g=F[2]-S*F[1],d=F[3]-O*F[2],h=F[4]-N*F[3],q=F[5]-I*F[4],w=F[6]-E*F[5],A=F[7]-P*F[6]),j=r.offset,L=e.offset,i=r.data,a=e.data,W=0;W<M;W++){for(H=0;H<P;H++){for(U=0;U<E;U++){for(x=0;x<I;x++){for(k=0;k<N;k++){for(R=0;R<O;R++){for(B=0;B<S;B++){for(V=0;V<T;V++)a[L]=t(i[j]),j+=n,L+=m;j+=u,L+=y}j+=o,L+=g}j+=v,L+=d}j+=f,L+=h}j+=c,L+=q}j+=l,L+=w}j+=p,L+=A}}wR.exports=JPr});var SR=s((CTe,NR)=>{"use strict";function YPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X;for(S=r.shape,L=r.strides,V=e.strides,r.order==="row-major"?(O=S[8],N=S[7],I=S[6],E=S[5],P=S[4],M=S[3],_=S[2],F=S[1],j=S[0],n=L[8],u=L[7]-O*L[8],o=L[6]-N*L[7],v=L[5]-I*L[6],f=L[4]-E*L[5],c=L[3]-P*L[4],l=L[2]-M*L[3],p=L[1]-_*L[2],m=L[0]-F*L[1],y=V[8],g=V[7]-O*V[8],d=V[6]-N*V[7],h=V[5]-I*V[6],q=V[4]-E*V[5],w=V[3]-P*V[4],A=V[2]-M*V[3],b=V[1]-_*V[2],T=V[0]-F*V[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],M=S[5],_=S[6],F=S[7],j=S[8],n=L[0],u=L[1]-O*L[0],o=L[2]-N*L[1],v=L[3]-I*L[2],f=L[4]-E*L[3],c=L[5]-P*L[4],l=L[6]-M*L[5],p=L[7]-_*L[6],m=L[8]-F*L[7],y=V[0],g=V[1]-O*V[0],d=V[2]-N*V[1],h=V[3]-I*V[2],q=V[4]-E*V[3],w=V[5]-P*V[4],A=V[6]-M*V[5],b=V[7]-_*V[6],T=V[8]-F*V[7]),B=r.offset,R=e.offset,i=r.data,a=e.data,X=0;X<j;X++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(Y=0;Y<M;Y++){for(W=0;W<P;W++){for(H=0;H<E;H++){for(U=0;U<I;U++){for(x=0;x<N;x++){for(k=0;k<O;k++)a[R]=t(i[B]),B+=n,R+=y;B+=u,R+=g}B+=o,R+=d}B+=v,R+=h}B+=f,R+=q}B+=c,R+=w}B+=l,R+=A}B+=p,R+=b}B+=m,R+=T}}NR.exports=YPr});var AR=s((VTe,OR)=>{"use strict";function ZPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,M,_,F,j,L,V,B,R,k,x,U,H,W,Y,Z,Q,X,J,$,er,ur;for(N=r.shape,R=r.strides,k=e.strides,r.order==="row-major"?(I=N[9],E=N[8],P=N[7],M=N[6],_=N[5],F=N[4],j=N[3],L=N[2],V=N[1],B=N[0],n=R[9],u=R[8]-I*R[9],o=R[7]-E*R[8],v=R[6]-P*R[7],f=R[5]-M*R[6],c=R[4]-_*R[5],l=R[3]-F*R[4],p=R[2]-j*R[3],m=R[1]-L*R[2],y=R[0]-V*R[1],g=k[9],d=k[8]-I*k[9],h=k[7]-E*k[8],q=k[6]-P*k[7],w=k[5]-M*k[6],A=k[4]-_*k[5],b=k[3]-F*k[4],T=k[2]-j*k[3],S=k[1]-L*k[2],O=k[0]-V*k[1]):(I=N[0],E=N[1],P=N[2],M=N[3],_=N[4],F=N[5],j=N[6],L=N[7],V=N[8],B=N[9],n=R[0],u=R[1]-I*R[0],o=R[2]-E*R[1],v=R[3]-P*R[2],f=R[4]-M*R[3],c=R[5]-_*R[4],l=R[6]-F*R[5],p=R[7]-j*R[6],m=R[8]-L*R[7],y=R[9]-V*R[8],g=k[0],d=k[1]-I*k[0],h=k[2]-E*k[1],q=k[3]-P*k[2],w=k[4]-M*k[3],A=k[5]-_*k[4],b=k[6]-F*k[5],T=k[7]-j*k[6],S=k[8]-L*k[7],O=k[9]-V*k[8]),x=r.offset,U=e.offset,i=r.data,a=e.data,ur=0;ur<B;ur++){for(er=0;er<V;er++){for($=0;$<L;$++){for(J=0;J<j;J++){for(X=0;X<F;X++){for(Q=0;Q<_;Q++){for(Z=0;Z<M;Z++){for(Y=0;Y<P;Y++){for(W=0;W<E;W++){for(H=0;H<I;H++)a[U]=t(i[x]),x+=n,U+=g;x+=u,U+=d}x+=o,U+=h}x+=v,U+=q}x+=f,U+=w}x+=c,U+=A}x+=l,U+=b}x+=p,U+=T}x+=m,U+=S}x+=y,U+=O}}OR.exports=ZPr});var RR=s((UTe,IR)=>{"use strict";var $Pr=ct(),_R=t3(),TR="throw";function QPr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g;for(v=r.shape,o=$Pr(v),i=r.data,a=e.data,f=r.strides,c=e.strides,l=r.offset,p=e.offset,n=r.order,u=e.order,g=0;g<o;g++)m=_R(v,f,l,n,g,TR),y=_R(v,c,p,u,g,TR),a[y]=t(i[m])}IR.exports=QPr});var xR=s((GTe,MR)=>{"use strict";var LR=Qv(),PR=us(),FR=ST(),KPr=YT(),rFr=$T(),eFr=KT(),tFr=eI(),iFr=iI(),aFr=nI(),nFr=uI(),sFr=vI(),uFr=cI(),oFr=pI(),vFr=gI(),fFr=yI(),cFr=qI(),lFr=wI(),pFr=NI(),dFr=OI(),gFr=_I(),mFr=II(),yFr=LI(),hFr=FI(),qFr=MI(),bFr=BI(),wFr=CI(),EFr=UI(),NFr=DI(),SFr=zI(),OFr=XI(),AFr=YI(),_Fr=$I(),TFr=aR(),IFr=sR(),RFr=oR(),LFr=fR(),PFr=lR(),FFr=dR(),jFr=mR(),MFr=hR(),xFr=bR(),BFr=ER(),kFr=SR(),CFr=AR(),VFr=RR(),Wa=[IFr,RFr,LFr,PFr,FFr,jFr,MFr,xFr,BFr,kFr,CFr],Xn=[yFr,hFr,qFr,bFr,wFr,EFr,NFr,SFr,OFr,AFr,_Fr],UFr=[oFr,vFr,fFr,cFr,lFr,pFr,dFr,gFr,mFr],GFr=[KPr,rFr,eFr,tFr,iFr,aFr,nFr,sFr,uFr],jR=Wa.length-1;function DFr(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(g=FR(r[0]),d=FR(r[1]),n=g.shape,u=d.shape,t=n.length,t!==u.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+u.length+".");if(t===0)return g.accessorProtocol||d.accessorProtocol?Xn[t](g,d,e):Wa[t](g,d,e);for(f=1,y=0,q=0;q<t;q++){if(h=n[q],h!==u[q])throw new Error("invalid arguments. Arrays must have the same shape.");f*=h,h===1&&(y+=1)}if(f!==0){if(t===1)return g.accessorProtocol||d.accessorProtocol?Xn[t](g,d,e):Wa[t](g,d,e);if(c=g.strides,l=d.strides,y===t-1){for(q=0;q<t&&n[q]===1;q++);return g.shape=[n[q]],d.shape=g.shape,g.strides=[c[q]],d.strides=[l[q]],g.accessorProtocol||d.accessorProtocol?Xn[1](g,d,e):Wa[1](g,d,e)}if(o=LR(c),v=LR(l),o!==0&&v!==0&&g.order===d.order){if(i=PR(n,c,g.offset),a=PR(u,l,d.offset),f===i[1]-i[0]+1&&f===a[1]-a[0]+1)return o===1?p=i[0]:p=i[1],v===1?m=a[0]:m=a[1],g.shape=[f],d.shape=g.shape,g.strides=[o],d.strides=[v],g.offset=p,d.offset=m,g.accessorProtocol||d.accessorProtocol?Xn[1](g,d,e):Wa[1](g,d,e);if(t<=jR)return g.accessorProtocol||d.accessorProtocol?Xn[t](g,d,e):Wa[t](g,d,e)}if(t<=jR)return g.accessorProtocol||d.accessorProtocol?GFr[t-2](g,d,e):UFr[t-2](g,d,e);if(g.accessorProtocol||d.accessorProtocol)return TFr(g,d,e);VFr(g,d,e)}}MR.exports=DFr});var kR=s((DTe,BR)=>{"use strict";var HFr=xR();BR.exports=HFr});var VR=s((HTe,CR)=>{"use strict";var zFr=kR(),WFr=C(),XFr=Ts();function JFr(r,e){var t,i,a,n,u;for(t={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},i=r[0],a=r[1],u=2;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")t[n]=r[u+1];else throw new Error(WFr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return zFr([i,a],XFr(e,t)),a}CR.exports=JFr});var GR=s((zTe,UR)=>{"use strict";var YFr=VR();UR.exports=YFr});var HR=s((WTe,DR)=>{"use strict";var ZFr=$r(),$Fr=GR();function QFr(r){return ZFr(r,"unary",$Fr),r}DR.exports=QFr});var WR=s((XTe,zR)=>{"use strict";var St=$r(),KFr=W_(),rjr=Ts(),ejr=Jv(),tjr=$v(),ijr=tT(),ajr=sT(),njr=fT(),sjr=dT(),ujr=HR();function ojr(r){return St(r,"binary",KFr),St(r,"d_d",rjr),St(r,"dd_d",ejr),St(r,"ddd_d",tjr),St(r,"dddd_d",ijr),St(r,"ddddd_d",ajr),St(r,"ternary",njr),St(r,"unary",sjr),St(r,"ndarray",ujr({})),r}zR.exports=ojr});var JR=s((JTe,XR)=>{"use strict";function vjr(r){return r*r}XR.exports=vjr});var Ls=s((YTe,YR)=>{"use strict";var fjr=JR();YR.exports=fjr});var Ps=s((ZTe,ZR)=>{"use strict";var cjr=.7853981633974483;ZR.exports=cjr});var QR=s(($Te,$R)=>{"use strict";function ljr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}$R.exports=ljr});var rL=s((QTe,KR)=>{"use strict";function pjr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}KR.exports=pjr});var iL=s((KTe,tL)=>{"use strict";var djr=z(),gjr=Pr(),eL=Ps(),mjr=QR(),yjr=rL(),hjr=6123233995736766e-32;function qjr(r){var e,t,i,a,n;if(djr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*yjr(t),t=gjr(t+t),n=eL-t,t=t*a-hjr,n-=t,n+=eL;else{if(i<1e-8)return r;t=i*i,n=t*mjr(t),n=i*n+i}return e?-n:n}tL.exports=qjr});var na=s((rIe,aL)=>{"use strict";var bjr=iL();aL.exports=bjr});var oL=s((eIe,uL)=>{"use strict";var wjr=z(),nL=na(),Ejr=Pr(),sL=Ps(),Njr=6123233995736766e-32;function Sjr(r){var e;return wjr(r)?NaN:r<-1||r>1?NaN:r>.5?2*nL(Ejr(.5-.5*r)):(e=sL-nL(r),e+=Njr,e+=sL,e)}uL.exports=Sjr});var Jn=s((tIe,vL)=>{"use strict";var Ojr=oL();vL.exports=Ojr});var cL=s((iIe,fL)=>{"use strict";function Ajr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}fL.exports=Ajr});var mL=s((aIe,gL)=>{"use strict";var _jr=z(),lL=ae(),pL=Et(),Tjr=hr(),Ijr=Rr(),dL=ft(),Rjr=cL(),i3=.6931471803691238,a3=19082149292705877e-26,Ljr=.41421356237309503,Pjr=-.2928932188134525,Fjr=1862645149230957e-24,jjr=5551115123125783e-32,Mjr=9007199254740992,xjr=.6666666666666666;function Bjr(r){var e,t,i,a,n,u,o,v,f,c;if(r<-1||_jr(r))return NaN;if(r===-1)return Ijr;if(r===Tjr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Ljr){if(i<Fjr)return i<jjr?r:r-r*r*.5;r>Pjr&&(c=0,a=r,t=1)}return c!==0&&(i<Mjr?(f=1+r,t=lL(f),c=(t>>20)-dL,c>0?n=1-(f-r):n=r-(f-1),n/=f):(f=r,t=lL(f),c=(t>>20)-dL,n=0),t&=1048575,t<434334?f=pL(f,t|1072693248):(c+=1,f=pL(f,t|1071644672),t=1048576-t>>2),a=f-1),e=.5*a*a,t===0?a===0?(n+=c*a3,c*i3+n):(v=e*(1-xjr*a),c*i3-(v-(c*a3+n)-a)):(u=a/(2+a),o=u*u,v=o*Rjr(o),c===0?a-(e-u*(e+v)):c*i3-(e-(u*(e+v)+(c*a3+n))-a))}gL.exports=Bjr});var di=s((nIe,yL)=>{"use strict";var kjr=mL();yL.exports=kjr});var qL=s((sIe,hL)=>{"use strict";function Cjr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}hL.exports=Cjr});var wL=s((uIe,bL)=>{"use strict";function Vjr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}bL.exports=Vjr});var OL=s((oIe,SL)=>{"use strict";var EL=ae(),Ujr=Et(),Gjr=z(),Djr=ft(),Hjr=Rr(),zjr=qL(),Wjr=wL(),Fs=.6931471803691238,js=19082149292705877e-26,Xjr=0x40000000000000,Jjr=.3333333333333333,NL=1048575,Yjr=2146435072,Zjr=1048576,$jr=1072693248;function Qjr(r){var e,t,i,a,n,u,o,v,f,c,l,p;return r===0?Hjr:Gjr(r)||r<0?NaN:(t=EL(r),n=0,t<Zjr&&(n-=54,r*=Xjr,t=EL(r)),t>=Yjr?r+r:(n+=(t>>20)-Djr|0,t&=NL,v=t+614244&1048576|0,r=Ujr(r,t|v^$jr),n+=v>>20|0,o=r-1,(NL&2+t)<3?o===0?n===0?0:n*Fs+n*js:(u=o*o*(.5-Jjr*o),n===0?o-u:n*Fs-(u-n*js-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,a=l*zjr(l),i=p*Wjr(l),v|=f,u=i+a,v>0?(e=.5*o*o,n===0?o-(e-c*(e+u)):n*Fs-(e-(c*(e+u)+n*js)-o)):n===0?o-c*(o-u):n*Fs-(c*(o-u)-n*js-o))))}SL.exports=Qjr});var br=s((vIe,AL)=>{"use strict";var Kjr=OL();AL.exports=Kjr});var RL=s((fIe,IL)=>{"use strict";var rMr=z(),eMr=di(),_L=Pr(),tMr=Gn(),TL=br(),iMr=1<<28;function aMr(r){var e;return rMr(r)||r<1?NaN:r===1?0:r>=iMr?TL(r)+tMr:r>2?TL(2*r-1/(r+_L(r*r-1))):(e=r-1,eMr(e+_L(2*e+e*e)))}IL.exports=aMr});var PL=s((cIe,LL)=>{"use strict";var nMr=RL();LL.exports=nMr});var Ms=s((lIe,FL)=>{"use strict";var sMr=1.5707963267948966;FL.exports=sMr});var ML=s((pIe,jL)=>{"use strict";function uMr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}jL.exports=uMr});var BL=s((dIe,xL)=>{"use strict";function oMr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}xL.exports=oMr});var VL=s((gIe,CL)=>{"use strict";var vMr=z(),fMr=hr(),n3=Ms(),cMr=Ps(),lMr=Rr(),pMr=ML(),dMr=BL(),kL=6123233995736766e-32,gMr=2.414213562373095;function mMr(r){var e,t,i,a;return vMr(r)||r===0?r:r===fMr?n3:r===lMr?-n3:(r<0&&(t=!0,r=-r),e=0,r>gMr?(i=n3,e=1,r=-(1/r)):r<=.66?i=0:(i=cMr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*pMr(a)/dMr(a),a=r*a+r,e===2?a+=.5*kL:e===1&&(a+=kL),i+=a,t?-i:i)}CL.exports=mMr});var xs=s((mIe,UL)=>{"use strict";var yMr=VL();UL.exports=yMr});var DL=s((yIe,GL)=>{"use strict";var hMr=xs();function qMr(r){return hMr(1/r)}GL.exports=qMr});var zL=s((hIe,HL)=>{"use strict";var bMr=DL();HL.exports=bMr});var XL=s((qIe,WL)=>{"use strict";var wMr=na();function EMr(r){return wMr(1+r)}WL.exports=EMr});var YL=s((bIe,JL)=>{"use strict";var NMr=XL();JL.exports=NMr});var $L=s((wIe,ZL)=>{"use strict";var SMr=na();function OMr(r){return SMr(1-r)}ZL.exports=OMr});var KL=s((EIe,QL)=>{"use strict";var AMr=$L();QL.exports=AMr});var eP=s((NIe,rP)=>{"use strict";var _Mr=na();function TMr(r){return _Mr(1/r)}rP.exports=TMr});var iP=s((SIe,tP)=>{"use strict";var IMr=eP();tP.exports=IMr});var uP=s((OIe,sP)=>{"use strict";var RMr=_e(),LMr=z(),PMr=di(),aP=Pr(),FMr=Gn(),nP=br(),jMr=1/(1<<28),MMr=1<<28;function xMr(r){var e,t,i;return LMr(r)||RMr(r)?r:(r<0&&(r=-r,e=!0),r<jMr?i=r:r>MMr?i=nP(r)+FMr:r>2?i=nP(2*r+1/(aP(r*r+1)+r)):(t=r*r,i=PMr(r+t/(1+aP(1+t)))),e?-i:i)}sP.exports=xMr});var s3=s((AIe,oP)=>{"use strict";var BMr=uP();oP.exports=BMr});var fP=s((_Ie,vP)=>{"use strict";var kMr=s3();function CMr(r){return kMr(1/r)}vP.exports=CMr});var lP=s((TIe,cP)=>{"use strict";var VMr=fP();cP.exports=VMr});var dP=s((IIe,pP)=>{"use strict";var UMr=Jn(),GMr=Pr();function DMr(r){return 2*UMr(GMr(r))}pP.exports=DMr});var mP=s((RIe,gP)=>{"use strict";var HMr=dP();gP.exports=HMr});var hP=s((LIe,yP)=>{"use strict";var zMr=na(),WMr=Pr();function XMr(r){return 2*zMr(WMr(r))}yP.exports=XMr});var bP=s((PIe,qP)=>{"use strict";var JMr=hP();qP.exports=JMr});var NP=s((FIe,EP)=>{"use strict";var YMr=z(),wP=di(),ZMr=hr(),$Mr=Rr(),QMr=1/(1<<28);function KMr(r){var e,t;return YMr(r)||r<-1||r>1?NaN:r===1?ZMr:r===-1?$Mr:(r<0&&(e=!0,r=-r),r<QMr?e?-r:r:(r<.5?(t=r+r,t=.5*wP(t+t*r/(1-r))):t=.5*wP((r+r)/(1-r)),e?-t:t))}EP.exports=KMr});var OP=s((jIe,SP)=>{"use strict";var rxr=NP();SP.exports=rxr});var _P=s((MIe,AP)=>{"use strict";var exr=Jn();function txr(r){return exr(1+r)}AP.exports=txr});var IP=s((xIe,TP)=>{"use strict";var ixr=_P();TP.exports=ixr});var LP=s((BIe,RP)=>{"use strict";var axr=Jn();function nxr(r){return axr(1-r)}RP.exports=nxr});var FP=s((kIe,PP)=>{"use strict";var sxr=LP();PP.exports=sxr});var MP=s((CIe,jP)=>{"use strict";var uxr=Ur();function oxr(r){return uxr(r)===r&&r>=0}jP.exports=oxr});var u3=s((VIe,xP)=>{"use strict";var vxr=MP();xP.exports=vxr});var BP=s((UIe,fxr)=>{fxr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var CP=s((GIe,kP)=>{"use strict";var cxr=u3(),lxr=z(),pxr=ys(),dxr=Rr(),gxr=hr(),mxr=BP(),yxr=258;function hxr(r){return lxr(r)||!cxr(r)?NaN:pxr(r)?0:r>yxr?r/2&1?gxr:dxr:mxr[r/2]}kP.exports=hxr});var UP=s((DIe,VP)=>{"use strict";var qxr=CP();VP.exports=qxr});var DP=s((HIe,GP)=>{"use strict";var bxr=Ye(),o3;bxr===!0?o3=0:o3=1;GP.exports=o3});var WP=s((zIe,zP)=>{"use strict";var wxr=me(),Exr=ge(),Nxr=DP(),HP=new Exr(1),Sxr=new wxr(HP.buffer);function Oxr(r){return HP[0]=r,Sxr[Nxr]}zP.exports=Oxr});var JP=s((WIe,XP)=>{"use strict";var Axr=WP();XP.exports=Axr});var KP=s((XIe,QP)=>{"use strict";var _xr=Ur(),Bs=Ns(),Vs=si(),ZP=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Txr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],v3=16777216,f3=5960464477539063e-23,ks=Vs(20),YP=Vs(20),Cs=Vs(20),he=Vs(20);function $P(r,e,t,i,a,n,u,o,v){var f,c,l,p,m,y,g,d,h;for(p=n,h=i[t],d=t,m=0;d>0;m++)c=f3*h|0,he[m]=h-v3*c|0,h=i[d-1]+c,d-=1;if(h=Bs(h,a),h-=8*_xr(h*.125),g=h|0,h-=g,l=0,a>0?(m=he[t-1]>>24-a,g+=m,he[t-1]-=m<<24-a,l=he[t-1]>>23-a):a===0?l=he[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,m=0;m<t;m++)d=he[m],f===0?d!==0&&(f=1,he[m]=16777216-d):he[m]=16777215-d;if(a>0)switch(a){case 1:he[t-1]&=8388607;break;case 2:he[t-1]&=4194303;break}l===2&&(h=1-h,f!==0&&(h-=Bs(1,a)))}if(h===0){for(d=0,m=t-1;m>=n;m--)d|=he[m];if(d===0){for(y=1;he[n-y]===0;y++);for(m=t+1;m<=t+y;m++){for(v[o+m]=ZP[u+m],c=0,d=0;d<=o;d++)c+=r[d]*v[o+(m-d)];i[m]=c}return t+=y,$P(r,e,t,i,a,n,u,o,v)}}if(h===0)for(t-=1,a-=24;he[t]===0;)t-=1,a-=24;else h=Bs(h,-a),h>=v3?(c=f3*h|0,he[t]=h-v3*c|0,t+=1,a+=24,he[t]=c):he[t]=h|0;for(c=Bs(1,a),m=t;m>=0;m--)i[m]=c*he[m],c*=f3;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=Txr[y]*i[m+y];Cs[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Cs[m];for(l===0?e[0]=c:e[0]=-c,c=Cs[0]-c,m=1;m<=t;m++)c+=Cs[m];return l===0?e[1]=c:e[1]=-c,g&7}function Ixr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+n,c=0;c<=p;c++)l<0?ks[c]=0:ks[c]=ZP[l],l+=1;for(c=0;c<=n;c++){for(a=0,l=0;l<=o;l++)a+=r[l]*ks[o+(c-l)];YP[c]=a}return v=n,$P(r,e,v,YP,f,n,u,o,ks)}QP.exports=Ixr});var eF=s((JIe,rF)=>{"use strict";var Rxr=Math.round;rF.exports=Rxr});var c3=s((YIe,tF)=>{"use strict";var Lxr=eF();tF.exports=Lxr});var sF=s((ZIe,nF)=>{"use strict";var Pxr=c3(),iF=ae(),Fxr=.6366197723675814,jxr=1.5707963267341256,Mxr=6077100506506192e-26,xxr=6077100506303966e-26,Bxr=20222662487959506e-37,kxr=20222662487111665e-37,Cxr=84784276603689e-45,aF=2047;function Vxr(r,e,t){var i,a,n,u,o,v,f;return a=Pxr(r*Fxr),u=r-a*jxr,o=a*Mxr,f=e>>20|0,t[0]=u-o,i=iF(t[0]),v=f-(i>>20&aF),v>16&&(n=u,o=a*xxr,u=n-o,o=a*Bxr-(n-u-o),t[0]=u-o,i=iF(t[0]),v=f-(i>>20&aF),v>49&&(n=u,o=a*kxr,u=n-o,o=a*Cxr-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}nF.exports=Vxr});var oF=s(($Ie,uF)=>{"use strict";var Uxr=vt(),Gxr=Un(),Dxr=Ss(),Hxr=ae(),zxr=JP(),Wxr=za(),Xxr=KP(),Us=sF(),Jxr=0,Yxr=16777216,gi=1.5707963267341256,sa=6077100506506192e-26,Gs=2*sa,Ds=3*sa,Hs=4*sa,Zxr=598523,$xr=1072243195,Qxr=1073928572,Kxr=1074752122,rBr=1074977148,eBr=1075183036,tBr=1075388923,iBr=1075594811,aBr=1094263291,Yn=[0,0,0],Zn=[0,0];function nBr(r,e){var t,i,a,n,u,o,v,f;if(a=Hxr(r),n=a&Uxr|0,n<=$xr)return e[0]=r,e[1]=0,0;if(n<=Kxr)return(n&Dxr)===Zxr?Us(r,n,e):n<=Qxr?r>0?(f=r-gi,e[0]=f-sa,e[1]=f-e[0]-sa,1):(f=r+gi,e[0]=f+sa,e[1]=f-e[0]+sa,-1):r>0?(f=r-2*gi,e[0]=f-Gs,e[1]=f-e[0]-Gs,2):(f=r+2*gi,e[0]=f+Gs,e[1]=f-e[0]+Gs,-2);if(n<=iBr)return n<=eBr?n===rBr?Us(r,n,e):r>0?(f=r-3*gi,e[0]=f-Ds,e[1]=f-e[0]-Ds,3):(f=r+3*gi,e[0]=f+Ds,e[1]=f-e[0]+Ds,-3):n===tBr?Us(r,n,e):r>0?(f=r-4*gi,e[0]=f-Hs,e[1]=f-e[0]-Hs,4):(f=r+4*gi,e[0]=f+Hs,e[1]=f-e[0]+Hs,-4);if(n<aBr)return Us(r,n,e);if(n>=Gxr)return e[0]=NaN,e[1]=NaN,0;for(t=zxr(r),i=(n>>20)-1046,f=Wxr(n-(i<<20|0),t),o=0;o<2;o++)Yn[o]=f|0,f=(f-Yn[o])*Yxr;for(Yn[2]=f,u=3;Yn[u-1]===Jxr;)u-=1;return v=Xxr(Yn,Zn,i,u,1),r<0?(e[0]=-Zn[0],e[1]=-Zn[1],-v):(e[0]=Zn[0],e[1]=Zn[1],v)}uF.exports=nBr});var $n=s((QIe,vF)=>{"use strict";var sBr=oF();vF.exports=sBr});var lF=s((KIe,cF)=>{"use strict";var fF=-.16666666666666632,uBr=.00833333333332249,oBr=-.0001984126982985795,vBr=27557313707070068e-22,fBr=-25050760253406863e-24,cBr=158969099521155e-24,lBr=.0416666666666666,pBr=-.001388888888887411,dBr=2480158728947673e-20,gBr=-27557314351390663e-23,mBr=2087572321298175e-24,yBr=-11359647557788195e-27;function hBr(r,e,t,i,a){var n,u,o,v,f;return f=r*r,v=f*f,u=uBr+f*(oBr+f*vBr)+f*v*(fBr+f*cBr),o=f*r,e===0?t[a]=r+o*(fF+f*u):t[a]=r-(f*(.5*e-o*u)-e-o*fF),u=f*(lBr+f*(pBr+f*dBr)),u+=v*v*(gBr+f*(mBr+f*yBr)),n=.5*f,v=1-n,t[a+i]=v+(1-v-n+(f*u-r*e)),t}cF.exports=hBr});var p3=s((rRe,dF)=>{"use strict";var qBr=vt(),bBr=Un(),wBr=ae(),EBr=$n(),pF=lF(),NBr=1072243195,SBr=1044381696,l3=[0,0];function OBr(r,e,t,i){var a,n;if(a=wBr(r),a&=qBr,a<=NBr)return a<SBr&&(r|0)===0&&(e[i]=r,e[i+t]=0),pF(r,0,e,t,i);if(a>=bBr)return e[i]=NaN,e[i+t]=NaN,e;switch(n=EBr(r,l3),pF(l3[0],l3[1],e,t,i),n&3){case 1:return a=e[i+t],e[i+t]=-e[i],e[i]=a,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return a=-e[i+t],e[i+t]=e[i],e[i]=a,e;default:return e}}dF.exports=OBr});var mF=s((eRe,gF)=>{"use strict";var ABr=p3();function _Br(r){return ABr(r,[0,0],1,0)}gF.exports=_Br});var Qn=s((tRe,hF)=>{"use strict";var TBr=G(),yF=mF(),IBr=p3();TBr(yF,"assign",IBr);hF.exports=yF});var bF=s((iRe,qF)=>{"use strict";function RBr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}qF.exports=RBr});var EF=s((aRe,wF)=>{"use strict";function LBr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}wF.exports=LBr});var SF=s((nRe,NF)=>{"use strict";function PBr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}NF.exports=PBr});var AF=s((sRe,OF)=>{"use strict";function FBr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}OF.exports=FBr});var TF=s((uRe,_F)=>{"use strict";var jBr=Pr(),MBr=Qn().assign,xBr=hr(),BBr=bF(),kBr=EF(),CBr=SF(),VBr=AF(),UBr=.5641895835477563,GBr=2.404825557695773,DBr=5.520078110286311,HBr=616,zBr=-.0014244423042272315,WBr=1413,XBr=.0005468602863106496,Kn=[0,0];function JBr(r){var e,t,i,a,n,u;return r<0&&(r=-r),r===xBr?0:r===0?1:r<=4?(n=r*r,a=BBr(n),u=(r+GBr)*(r-HBr/256-zBr),u*a):r<=8?(n=1-r*r/64,a=kBr(n),u=(r+DBr)*(r-WBr/256-XBr),u*a):(n=8/r,i=n*n,e=CBr(i),t=VBr(i),u=UBr/jBr(r),MBr(r,Kn,1,0),u*(e*(Kn[1]+Kn[0])-n*t*(Kn[0]-Kn[1])))}_F.exports=JBr});var d3=s((oRe,IF)=>{"use strict";var YBr=TF();IF.exports=YBr});var zs=s((vRe,RF)=>{"use strict";var ZBr=1.772453850905516;RF.exports=ZBr});var PF=s((fRe,LF)=>{"use strict";function $Br(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}LF.exports=$Br});var jF=s((cRe,FF)=>{"use strict";function QBr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}FF.exports=QBr});var xF=s((lRe,MF)=>{"use strict";function KBr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}MF.exports=KBr});var kF=s((pRe,BF)=>{"use strict";function rkr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}BF.exports=rkr});var VF=s((dRe,CF)=>{"use strict";var ekr=Pr(),tkr=Dr(),ikr=Qn().assign,akr=hr(),nkr=zs(),skr=PF(),ukr=jF(),okr=xF(),vkr=kF(),fkr=3.8317059702075125,ckr=7.015586669815619,lkr=981,pkr=-.0003252797924876844,dkr=1796,gkr=-38330184381246464e-21,r0=[0,0];function mkr(r){var e,t,i,a,n,u,o,v;return v=tkr(r),r===0||v===akr?0:(v<=4?(u=r*r,n=skr(u),o=v*(v+fkr)*(v-lkr/256-pkr),e=o*n):v<=8?(u=r*r,n=ukr(u),o=v*(v+ckr)*(v-dkr/256-gkr),e=o*n):(u=8/v,a=u*u,t=okr(a),i=vkr(a),o=1/(ekr(v)*nkr),ikr(v,r0,1,0),e=o*(t*(r0[0]-r0[1])+u*i*(r0[0]+r0[1]))),r<0&&(e*=-1),e)}CF.exports=mkr});var g3=s((gRe,UF)=>{"use strict";var ykr=VF();UF.exports=ykr});var we=s((mRe,GF)=>{"use strict";var hkr=3.141592653589793;GF.exports=hkr});var HF=s((yRe,DF)=>{"use strict";function qkr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}DF.exports=qkr});var WF=s((hRe,zF)=>{"use strict";function bkr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}zF.exports=bkr});var JF=s((qRe,XF)=>{"use strict";function wkr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}XF.exports=wkr});var ZF=s((bRe,YF)=>{"use strict";function Ekr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}YF.exports=Ekr});var QF=s((wRe,$F)=>{"use strict";function Nkr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}$F.exports=Nkr});var ij=s((ERe,tj)=>{"use strict";var m3=br(),Skr=Pr(),Okr=we(),Akr=zs(),_kr=Rr(),Tkr=hr(),Ikr=Qn().assign,y3=d3(),Rkr=HF(),Lkr=WF(),Pkr=JF(),Fkr=ZF(),jkr=QF(),Mkr=1/Akr,h3=2/Okr,KF=.8935769662791675,rj=3.957678419314858,ej=7.086051060301773,xkr=228,Bkr=.0029519662791675214,kkr=1013,Ckr=.0006471693148578684,Vkr=1814,Ukr=.00011356030177269763,e0=[0,0];function Gkr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?_kr:r===Tkr?0:r<=3?(n=r*r,u=m3(r/KF)*y3(r)*h3,a=Rkr(n),o=(r+KF)*(r-xkr/256-Bkr),u+o*a):r<=5.5?(n=r*r,u=m3(r/rj)*y3(r)*h3,a=Lkr(n),o=(r+rj)*(r-kkr/256-Ckr),u+o*a):r<=8?(n=r*r,u=m3(r/ej)*y3(r)*h3,a=Pkr(n),o=(r+ej)*(r-Vkr/256-Ukr),u+o*a):(n=8/r,i=n*n,e=Fkr(i),t=jkr(i),o=Mkr/Skr(r),Ikr(r,e0,1,0),o*(e*(e0[0]-e0[1])+n*t*(e0[1]+e0[0])))}tj.exports=Gkr});var nj=s((NRe,aj)=>{"use strict";var Dkr=ij();aj.exports=Dkr});var uj=s((SRe,sj)=>{"use strict";function Hkr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}sj.exports=Hkr});var vj=s((ORe,oj)=>{"use strict";function zkr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}oj.exports=zkr});var cj=s((ARe,fj)=>{"use strict";function Wkr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}fj.exports=Wkr});var pj=s((_Re,lj)=>{"use strict";function Xkr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}lj.exports=Xkr});var bj=s((TRe,qj)=>{"use strict";var dj=br(),Jkr=Pr(),Ykr=we(),Zkr=zs(),$kr=Rr(),Qkr=hr(),Kkr=Qn().assign,gj=g3(),rCr=uj(),eCr=vj(),tCr=cj(),iCr=pj(),aCr=1/Zkr,mj=2/Ykr,yj=2.197141326031017,hj=5.429681040794135,nCr=562,sCr=.001828826031017035,uCr=1390,oCr=-6459205864867228e-21,t0=[0,0];function vCr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?$kr:r===Qkr?0:r<=4?(n=r*r,u=dj(r/yj)*gj(r)*mj,a=rCr(n),o=(r+yj)*(r-nCr/256-sCr)/r,u+o*a):r<=8?(n=r*r,u=dj(r/hj)*gj(r)*mj,a=eCr(n),o=(r+hj)*(r-uCr/256-oCr)/r,u+o*a):(n=8/r,i=n*n,e=tCr(i),t=iCr(i),o=aCr/Jkr(r),Kkr(r,t0,1,0),o*(n*t*(t0[0]-t0[1])-e*(t0[0]+t0[1])))}qj.exports=vCr});var Ej=s((IRe,wj)=>{"use strict";var fCr=bj();wj.exports=fCr});var Sj=s((RRe,Nj)=>{"use strict";function cCr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}Nj.exports=cCr});var Aj=s((LRe,Oj)=>{"use strict";function lCr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}Oj.exports=lCr});var Tj=s((PRe,_j)=>{"use strict";var pCr=Sj(),dCr=Aj();function gCr(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*pCr(n),i+=a*a*dCr(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}_j.exports=gCr});var q3=s((FRe,Ij)=>{"use strict";var mCr=Tj();Ij.exports=mCr});var Pj=s((jRe,Lj)=>{"use strict";var Rj=-.16666666666666632,yCr=.00833333333332249,hCr=-.0001984126982985795,qCr=27557313707070068e-22,bCr=-25050760253406863e-24,wCr=158969099521155e-24;function ECr(r,e){var t,i,a,n;return n=r*r,a=n*n,t=yCr+n*(hCr+n*qCr)+n*a*(bCr+n*wCr),i=n*r,e===0?r+i*(Rj+n*t):r-(n*(.5*e-i*t)-e-i*Rj)}Lj.exports=ECr});var b3=s((MRe,Fj)=>{"use strict";var NCr=Pj();Fj.exports=NCr});var xj=s((xRe,Mj)=>{"use strict";var SCr=ae(),w3=q3(),jj=b3(),OCr=$n(),Ot=[0,0],ACr=2147483647,_Cr=1072243195,TCr=1044381696,ICr=2146435072;function RCr(r){var e,t;if(e=SCr(r),e&=ACr,e<=_Cr)return e<TCr?1:w3(r,0);if(e>=ICr)return NaN;switch(t=OCr(r,Ot),t&3){case 0:return w3(Ot[0],Ot[1]);case 1:return-jj(Ot[0],Ot[1]);case 2:return-w3(Ot[0],Ot[1]);default:return jj(Ot[0],Ot[1])}}Mj.exports=RCr});var At=s((BRe,Bj)=>{"use strict";var LCr=xj();Bj.exports=LCr});var Vj=s((kRe,Cj)=>{"use strict";var PCr=vt(),FCr=Un(),jCr=ae(),kj=q3(),E3=b3(),MCr=$n(),xCr=1072243195,BCr=1045430272,_t=[0,0];function kCr(r){var e,t;if(e=jCr(r),e&=PCr,e<=xCr)return e<BCr?r:E3(r,0);if(e>=FCr)return NaN;switch(t=MCr(r,_t),t&3){case 0:return E3(_t[0],_t[1]);case 1:return kj(_t[0],_t[1]);case 2:return-E3(_t[0],_t[1]);default:return-kj(_t[0],_t[1])}}Cj.exports=kCr});var lt=s((CRe,Uj)=>{"use strict";var CCr=Vj();Uj.exports=CCr});var Hj=s((VRe,Dj)=>{"use strict";var VCr=z(),UCr=_e(),GCr=Dr(),Gj=At(),DCr=lt(),HCr=Ur(),N3=we(),zCr=aa(),WCr=zCr+1;function XCr(r){var e,t,i,a;return VCr(r)?NaN:UCr(r)?NaN:(e=GCr(r),e>WCr?1:(t=HCr(e),i=e-t,i===.5?0:(i<.25?a=Gj(N3*i):i<.75?(i=.5-i,a=DCr(N3*i)):(i=1-i,a=-Gj(N3*i)),t%2===1?-a:a)))}Dj.exports=XCr});var Wj=s((URe,zj)=>{"use strict";var JCr=Hj();zj.exports=JCr});var Jj=s((GRe,Xj)=>{"use strict";var YCr=1.618033988749895;Xj.exports=YCr});var Zj=s((DRe,Yj)=>{"use strict";var ZCr=z(),$Cr=Wj(),QCr=Vr(),KCr=Jj(),rVr=hr(),eVr=Rr(),tVr=2.23606797749979;function iVr(r){var e,t;return ZCr(r)||r===rVr||r===eVr?NaN:(e=QCr(KCr,r),t=$Cr(r)/e,(e-t)/tVr)}Yj.exports=iVr});var Qj=s((HRe,$j)=>{"use strict";var aVr=Zj();$j.exports=aVr});var rM=s((zRe,Kj)=>{"use strict";function nVr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}Kj.exports=nVr});var aM=s((WRe,iM)=>{"use strict";var sVr=Uv(),uVr=Pv(),eM=vt(),O3=ae(),oVr=Et(),vVr=_e(),tM=za(),fVr=Ha(),cVr=z(),lVr=rM(),pVr=4294967295>>>0,dVr=3221225472>>>0,gVr=0x40000000000000,S3=2147483648>>>0,mVr=1>>>0,yVr=715094163>>>0,hVr=696219795>>>0,qVr=O3(sVr),ua=[0>>>0,0>>>0];function bVr(r){var e,t,i,a,n,u,o;return r===0||cVr(r)||vVr(r)?r:(t=O3(r)>>>0,e=(t&uVr)>>>0,t&=eM,t<qVr?(u=gVr*r,i=(O3(u)&eM)>>>0,i=(i/3>>>0)+hVr>>>0,u=tM(e|i,0)):(u=0,i=(t/3>>>0)+yVr>>>0,u=oVr(u,e|i)),a=u*u*(u/r),u*=lVr(a),fVr.assign(u,ua,1,0),ua[1]&S3?(ua[0]+=mVr,ua[1]&=~S3):ua[1]|=S3,u=tM(ua[0]&pVr,ua[1]&dVr),n=u*u,a=r/n,o=u+u,a=(a-u)/(o+a),u+=u*a,u)}iM.exports=bVr});var sM=s((XRe,nM)=>{"use strict";var wVr=aM();nM.exports=wVr});var oM=s((JRe,uM)=>{"use strict";var EVr=Math.ceil;uM.exports=EVr});var Xa=s((YRe,vM)=>{"use strict";var NVr=oM();vM.exports=NVr});var cM=s((ZRe,fM)=>{"use strict";function SVr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}fM.exports=SVr});var pM=s(($Re,lM)=>{"use strict";function OVr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}lM.exports=OVr});var mM=s((QRe,gM)=>{"use strict";var AVr=ae(),_Vr=cM(),TVr=pM(),dM=1048575,IVr=.3333333333333333;function RVr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=AVr(r),n=r-1,(dM&2+a)<3?n===0?0:n*n*(IVr*n-.5):(u=n/(2+n),o=u*u,a&=dM,c=a-398458|0,f=o*o,l=440401-a|0,t=f*_Vr(f),i=o*TVr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}gM.exports=RVr});var bM=s((KRe,qM)=>{"use strict";var yM=ae(),LVr=Et(),PVr=wt(),FVr=z(),jVr=ft(),MVr=Rr(),xVr=mM(),BVr=0x40000000000000,hM=.4342944818781689,kVr=25082946711645275e-27,CVr=.30102999566361177,VVr=3694239077158931e-28,UVr=1048575,GVr=2146435072,DVr=1048576,HVr=1072693248;function zVr(r){var e,t,i,a,n,u,o,v;return FVr(r)||r<0?NaN:r===0?MVr:(t=yM(r),u=0,t<DVr&&(u-=54,r*=BVr,t=yM(r)),t>=GVr?r+r:(u+=(t>>20)-jVr|0,t&=UVr,n=t+614244&1048576|0,r=LVr(r,t|n^HVr),u+=n>>20|0,o=u,a=xVr(r),r-=1,e=PVr(r,0),i=r-e,v=o*VVr+(r+a)*kVr,v+=(i+a)*hM+e*hM,v+o*CVr))}qM.exports=zVr});var EM=s((rLe,wM)=>{"use strict";var WVr=bM();wM.exports=WVr});var SM=s((eLe,NM)=>{"use strict";var XVr=z(),JVr=_e(),YVr=Vr(),ZVr=Ur(),$Vr=Xa(),QVr=EM(),KVr=Os(),rUr=As(),eUr=hr();function tUr(r){var e,t;return XVr(r)||JVr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=QVr(r),e===-1?t=ZVr(t):t=$Vr(t),t<=rUr?e*0:t>KVr?eUr:e*YVr(10,t))}NM.exports=tUr});var AM=s((tLe,OM)=>{"use strict";var iUr=SM();OM.exports=iUr});var TM=s((iLe,_M)=>{"use strict";function aUr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}_M.exports=aUr});var RM=s((aLe,IM)=>{"use strict";function nUr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}IM.exports=nUr});var FM=s((nLe,PM)=>{"use strict";var sUr=ae(),uUr=TM(),oUr=RM(),LM=1048575,vUr=.3333333333333333;function fUr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=sUr(r),n=r-1,(LM&2+a)<3?n===0?0:n*n*(vUr*n-.5):(u=n/(2+n),o=u*u,a&=LM,c=a-398458|0,f=o*o,l=440401-a|0,t=f*uUr(f),i=o*oUr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}PM.exports=fUr});var xM=s((sLe,MM)=>{"use strict";var cUr=ae(),lUr=Et(),pUr=wt(),dUr=Ha(),gUr=z(),mUr=vt(),yUr=Ss(),hUr=ft(),qUr=Rr(),bUr=FM(),wUr=0x40000000000000,jM=1.4426950407214463,EUr=16751713164886512e-26,NUr=2146435072,SUr=1048576,OUr=1072693248,A3=[0,0];function AUr(r){var e,t,i,a,n,u,o;if(gUr(r)||r<0)return NaN;if(dUr.assign(r,A3,1,0),i=A3[0],a=A3[1],o=0,i<SUr){if((i&mUr|a)===0)return qUr;o-=54,r*=wUr,i=cUr(r)}return i>=NUr?r+r:(o+=(i>>20)-hUr|0,i&=yUr,u=i+614244&1048576|0,r=lUr(r,i|u^OUr),o+=u>>20|0,n=bUr(r),r-=1,e=pUr(r,0),t=r-e,(r+n)*EUr+(t+n)*jM+e*jM+o)}MM.exports=AUr});var kM=s((uLe,BM)=>{"use strict";var _Ur=xM();BM.exports=_Ur});var VM=s((oLe,CM)=>{"use strict";var TUr=z(),IUr=_e(),RUr=Vr(),LUr=Ur(),PUr=Xa(),FUr=kM(),jUr=Cv(),MUr=Vv(),xUr=hr();function BUr(r){var e,t;return TUr(r)||IUr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=FUr(r),t===MUr)?r:(e===-1?t=LUr(t):t=PUr(t),t>jUr?xUr:e*RUr(2,t))}CM.exports=BUr});var GM=s((vLe,UM)=>{"use strict";var kUr=VM();UM.exports=kUr});var HM=s((fLe,DM)=>{"use strict";var CUr=Ur(),VUr=Xa();function UUr(r){return r<0?VUr(r):CUr(r)}DM.exports=UUr});var Ws=s((cLe,zM)=>{"use strict";var GUr=HM();zM.exports=GUr});var XM=s((lLe,WM)=>{"use strict";function DUr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}WM.exports=DUr});var YM=s((pLe,JM)=>{"use strict";var HUr=Ns(),zUr=XM();function WUr(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*zUr(a),u=1-(e-i*n/(2-n)-r),HUr(u,t)}JM.exports=WUr});var ex=s((dLe,rx)=>{"use strict";var XUr=z(),ZM=Ws(),JUr=Rr(),$M=hr(),YUr=YM(),ZUr=.6931471803691238,$Ur=19082149292705877e-26,QM=1.4426950408889634,QUr=709.782712893384,KUr=-745.1332191019411,KM=1/(1<<28),rGr=-KM;function eGr(r){var e,t,i;return XUr(r)||r===$M?r:r===JUr?0:r>QUr?$M:r<KUr?0:r>rGr&&r<KM?1+r:(r<0?i=ZM(QM*r-.5):i=ZM(QM*r+.5),e=r-i*ZUr,t=i*$Ur,YUr(e,t,i))}rx.exports=eGr});var te=s((gLe,tx)=>{"use strict";var tGr=ex();tx.exports=tGr});var ax=s((mLe,ix)=>{"use strict";var iGr=z(),_3=te();function aGr(r){return iGr(r)?r:(r<0&&(r=-r),r>21?_3(r)/2:(_3(r)+_3(-r))/2)}ix.exports=aGr});var sx=s((yLe,nx)=>{"use strict";var nGr=ax();nx.exports=nGr});var ox=s((hLe,ux)=>{"use strict";function sGr(r){return r===0?.041666666666666664:.041666666666666664+r*(-.0013888888888888872+r*(2480158730157055e-20+r*(-2755731921499979e-22+r*(2087675428708152e-24+r*(-1147028484342536e-26+r*4737750796424621e-29)))))}ux.exports=sGr});var cx=s((qLe,fx)=>{"use strict";var uGr=At(),oGr=ox(),vx=.7853981633974483;function vGr(r){var e;return r<-vx||r>vx?uGr(r)-1:(e=r*r,-.5*e+e*e*oGr(e))}fx.exports=vGr});var px=s((bLe,lx)=>{"use strict";var fGr=cx();lx.exports=fGr});var mx=s((wLe,gx)=>{"use strict";var cGr=z(),lGr=_e(),pGr=Dr(),dx=At(),dGr=lt(),gGr=Ur(),T3=we(),mGr=aa(),yGr=mGr+1;function hGr(r){var e,t,i,a;return cGr(r)?NaN:lGr(r)?NaN:(e=pGr(r),e>yGr?1:(t=gGr(e),i=e-t,i===.5?0:(i<.25?a=dx(T3*i):i<.75?(i=.5-i,a=dGr(T3*i)):(i=1-i,a=-dx(T3*i)),t%2===1?-a:a)))}gx.exports=hGr});var hx=s((ELe,yx)=>{"use strict";var qGr=mx();yx.exports=qGr});var bx=s((NLe,qx)=>{"use strict";function bGr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}qx.exports=bGr});var Ex=s((SLe,wx)=>{"use strict";function wGr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}wx.exports=wGr});var Ox=s((OLe,Sx)=>{"use strict";var EGr=ae(),Nx=wt(),NGr=bx(),SGr=Ex(),OGr=.7853981633974483,AGr=3061616997868383e-32,_Gr=.3333333333333341,TGr=2147483647;function IGr(r,e,t){var i,a,n,u,o,v,f,c,l;return i=EGr(r),a=i&TGr|0,a>=1072010280&&(r<0&&(r=-r,e=-e),l=OGr-r,c=AGr-e,r=l+c,e=0),l=r*r,c=l*l,u=NGr(c),f=l*SGr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=_Gr*o,c=r+u,a>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=Nx(c,0),f=u-(l-r),n=-1/c,v=Nx(n,0),o=1+v*l,v+n*(o+v*f))}Sx.exports=IGr});var _x=s((ALe,Ax)=>{"use strict";var RGr=Ox();Ax.exports=RGr});var Rx=s((_Le,Ix)=>{"use strict";var LGr=ae(),Tx=_x(),PGr=$n(),I3=[0,0],FGr=2147483647,jGr=1072243195,MGr=2146435072,xGr=1044381696;function BGr(r){var e,t;return e=LGr(r),e&=FGr,e<=jGr?e<xGr?r:Tx(r,0,1):e>=MGr?NaN:(t=PGr(r,I3),Tx(I3[0],I3[1],1-((t&1)<<1)))}Ix.exports=BGr});var i0=s((TLe,Lx)=>{"use strict";var kGr=Rx();Lx.exports=kGr});var Fx=s((ILe,Px)=>{"use strict";var CGr=i0();function VGr(r){return 1/CGr(r)}Px.exports=VGr});var Mx=s((RLe,jx)=>{"use strict";var UGr=Fx();jx.exports=UGr});var Bx=s((LLe,xx)=>{"use strict";function GGr(r){var e,t,i;return r===0?-.3333333333333332:(r<0?e=-r:e=r,e<=1?(t=-1614.6876844170845+r*(-99.28772310019185+r*(-.9643991794250523+r*0)),i=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+r*1))):(r=1/r,t=0+r*(-.9643991794250523+r*(-99.28772310019185+r*-1614.6876844170845)),i=1+r*(112.81167849163293+r*(2235.4883906010045+r*4844.063053251255))),t/i)}xx.exports=GGr});var Cx=s((PLe,kx)=>{"use strict";var DGr=Dr(),HGr=te(),zGr=Bx(),WGr=88.02969193111305;function XGr(r){var e,t;if(t=DGr(r),t>.5*WGr)return r<0?-1:1;if(t>=.625)e=HGr(2*t),t=1-2/(e+1),r<0&&(t=-t);else{if(r===0)return r;e=r*r,t=r+r*e*zGr(e)}return t}kx.exports=XGr});var Ux=s((FLe,Vx)=>{"use strict";var JGr=Cx();Vx.exports=JGr});var Dx=s((jLe,Gx)=>{"use strict";var YGr=Ux();function ZGr(r){return 1/YGr(r)}Gx.exports=ZGr});var zx=s((MLe,Hx)=>{"use strict";var $Gr=Dx();Hx.exports=$Gr});var Xx=s((xLe,Wx)=>{"use strict";var QGr=lt();function KGr(r){return 1+QGr(r)}Wx.exports=KGr});var Yx=s((BLe,Jx)=>{"use strict";var rDr=Xx();Jx.exports=rDr});var $x=s((kLe,Zx)=>{"use strict";var eDr=lt();function tDr(r){return 1-eDr(r)}Zx.exports=tDr});var Kx=s((CLe,Qx)=>{"use strict";var iDr=$x();Qx.exports=iDr});var eB=s((VLe,rB)=>{"use strict";var aDr=.017453292519943295;function nDr(r){return r*aDr}rB.exports=nDr});var iB=s((ULe,tB)=>{"use strict";var sDr=eB();tB.exports=sDr});var nB=s((GLe,aB)=>{"use strict";function uDr(r){return r===0?.08333333333333333:.08333333333333333+r*(-.008333333333333333+r*(.003968253968253968+r*(-.004166666666666667+r*(.007575757575757576+r*(-.021092796092796094+r*(.08333333333333333+r*-.4432598039215686))))))}aB.exports=uDr});var uB=s((DLe,sB)=>{"use strict";var oDr=br(),vDr=nB();function fDr(r){var e,t;return r-=1,e=oDr(r)+1/(2*r),t=1/(r*r),e-t*vDr(t)}sB.exports=fDr});var vB=s((HLe,oB)=>{"use strict";function cDr(r){var e,t,i;return r===0?.25479851061131553:(r<0?e=-r:e=r,e<=1?(t=.25479851061131553+r*(-.3255503118680449+r*(-.6503185377089651+r*(-.28919126444774784+r*(-.04525132144873906+r*(-.002071332116774595+r*0))))),i=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+r*-5578984132167551e-22)))))):(r=1/r,t=0+r*(-.002071332116774595+r*(-.04525132144873906+r*(-.28919126444774784+r*(-.6503185377089651+r*(-.3255503118680449+r*.25479851061131553))))),i=-5578984132167551e-22+r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+r*1)))))),t/i)}oB.exports=cDr});var cB=s((zLe,fB)=>{"use strict";var lDr=vB(),pDr=1569415565/1073741824,dDr=381566830/1073741824/1073741824,gDr=9016312093258695e-35,mDr=.9955816268920898;function yDr(r){var e,t;return e=r-pDr,e-=dDr,e-=gDr,t=lDr(r-1),e*mDr+e*t}fB.exports=yDr});var dB=s((WLe,pB)=>{"use strict";var hDr=z(),qDr=Ur(),bDr=i0(),lB=we(),wDr=uB(),EDr=cB(),NDr=10;function SDr(r){var e,t;if(hDr(r)||r===0)return NaN;if(r<=-1){if(r=1-r,e=r-qDr(r),e>.5&&(e-=1),e===0)return NaN;t=lB/bDr(lB*e)}else t=0;if(r>=NDr)return t+=wDr(r),t;for(;r>2;)r-=1,t+=1/r;for(;r<1;)t-=1/r,r+=1;return t+=EDr(r),t}pB.exports=SDr});var mB=s((XLe,gB)=>{"use strict";var ODr=dB();gB.exports=ODr});var hB=s((JLe,yB)=>{"use strict";var ADr=.34657359027997264;yB.exports=ADr});var bB=s((YLe,qB)=>{"use strict";function _Dr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}qB.exports=_Dr});var AB=s((ZLe,OB)=>{"use strict";var TDr=z(),wB=ae(),R3=Et(),IDr=za(),EB=hr(),RDr=Rr(),NB=ft(),LDr=hB(),PDr=bB(),FDr=709.782712893384,L3=.6931471803691238,P3=19082149292705877e-26,SB=1.4426950408889634,jDr=38.816242111356935,MDr=1.0397207708399179;function xDr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(r===EB||TDr(r))return r;if(r===RDr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=jDr){if(i)return-1;if(v>=FDr)return EB}if(u=wB(v)|0,v>LDr)v<MDr?i?(a=r+L3,n=-P3,m=-1):(a=r-L3,n=P3,m=1):(i?m=SB*r-.5:m=SB*r+.5,m|=0,l=m,a=r-l*L3,n=l*P3),r=a-n,c=a-r-n;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*PDr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=IDr(NB+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(a=wB(v)+(m<<20)|0,v=R3(v,a)):v*=t,v-1):(l=1,m<20?(a=1072693248-(2097152>>m)|0,l=R3(l,a),v=l-(p-r)):(a=NB-m<<20|0,l=R3(l,a),v=r-(p+l),v+=1),v*=t,v))}OB.exports=xDr});var F3=s(($Le,_B)=>{"use strict";var BDr=AB();_B.exports=BDr});var LB=s((QLe,RB)=>{"use strict";var TB=z(),IB=Dr(),kDr=F3(),CDr=br(),VDr=Vr(),UDr=Ws();function GDr(r,e){var t;if(TB(r)||TB(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((IB(e*(r-1))<.5||IB(e)<.2)&&(t=CDr(r)*e,t<.5))return kDr(t)}else if(UDr(e)!==e)return NaN;return VDr(r,e)-1}RB.exports=GDr});var j3=s((KLe,PB)=>{"use strict";var DDr=LB();PB.exports=DDr});var jB=s((rPe,FB)=>{"use strict";var HDr=Rr();function zDr(r){return r===0&&1/r===HDr}FB.exports=zDr});var M3=s((ePe,MB)=>{"use strict";var WDr=jB();MB.exports=WDr});var x3=s((tPe,xB)=>{"use strict";var XDr=2.5066282746310007;xB.exports=XDr});var kB=s((iPe,BB)=>{"use strict";function JDr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}BB.exports=JDr});var UB=s((aPe,VB)=>{"use strict";var YDr=x3(),CB=Vr(),ZDr=te(),$Dr=kB(),QDr=143.01608;function KDr(r){var e,t,i;return e=1/r,e=1+e*$Dr(e),t=ZDr(r),r>QDr?(i=CB(r,.5*r-.25),t=i*(i/t)):t=CB(r,r-.5)/t,YDr*t*e}VB.exports=KDr});var DB=s((nPe,GB)=>{"use strict";var rHr=.5772156649015329;GB.exports=rHr});var zB=s((sPe,HB)=>{"use strict";var eHr=DB();function tHr(r,e){return e/((1+eHr*r)*r)}HB.exports=tHr});var XB=s((uPe,WB)=>{"use strict";function iHr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}WB.exports=iHr});var ek=s((oPe,rk)=>{"use strict";var aHr=z(),nHr=Ee(),sHr=M3(),JB=Dr(),uHr=Ur(),oHr=lt(),YB=hr(),ZB=Rr(),$B=we(),QB=UB(),KB=zB(),vHr=XB();function fHr(r){var e,t,i,a;if(nHr(r)&&r<0||r===ZB||aHr(r))return NaN;if(r===0)return sHr(r)?ZB:YB;if(r>171.61447887182297)return YB;if(r<-170.5674972726612)return 0;if(t=JB(r),t>33)return r>=0?QB(r):(i=uHr(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*oHr($B*a),e*$B/(JB(a)*QB(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return KB(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return KB(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*vHr(r))}rk.exports=fHr});var Ja=s((vPe,tk)=>{"use strict";var cHr=ek();tk.exports=cHr});var nk=s((fPe,ak)=>{"use strict";var lHr=z(),pHr=_e(),ik=At(),B3=lt(),dHr=Dr(),a0=hs(),n0=we();function gHr(r){var e,t;return lHr(r)?NaN:pHr(r)?NaN:(t=r%2,e=dHr(t),e===0||e===1?a0(0,t):e<.25?B3(n0*t):e<.75?(e=.5-e,a0(ik(n0*e),t)):e<1.25?(t=a0(1,t)-t,B3(n0*t)):e<1.75?(e-=1.5,-a0(ik(n0*e),t)):(t-=a0(2,t),B3(n0*t)))}ak.exports=gHr});var s0=s((cPe,sk)=>{"use strict";var mHr=nk();sk.exports=mHr});var ok=s((lPe,uk)=>{"use strict";function yHr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}uk.exports=yHr});var fk=s((pPe,vk)=>{"use strict";function hHr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}vk.exports=hHr});var lk=s((dPe,ck)=>{"use strict";function qHr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}ck.exports=qHr});var dk=s((gPe,pk)=>{"use strict";function bHr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}pk.exports=bHr});var mk=s((mPe,gk)=>{"use strict";function wHr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}gk.exports=wHr});var hk=s((yPe,yk)=>{"use strict";function EHr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}yk.exports=EHr});var bk=s((hPe,qk)=>{"use strict";function NHr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}qk.exports=NHr});var Ek=s((qPe,wk)=>{"use strict";function SHr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}wk.exports=SHr});var Sk=s((bPe,Nk)=>{"use strict";function OHr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}Nk.exports=OHr});var Ak=s((wPe,Ok)=>{"use strict";function AHr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}Ok.exports=AHr});var Ik=s((EPe,Tk)=>{"use strict";var _Hr=z(),THr=_e(),IHr=Dr(),Ya=br(),RHr=Ws(),LHr=s0(),PHr=we(),k3=hr(),FHr=ok(),jHr=fk(),MHr=lk(),xHr=dk(),BHr=mk(),kHr=hk(),CHr=bk(),VHr=Ek(),UHr=Sk(),GHr=Ak(),DHr=.07721566490153287,HHr=.3224670334241136,zHr=1,WHr=-.07721566490153287,XHr=.48383612272381005,JHr=-.1475877229945939,YHr=.06462494023913339,ZHr=-.07721566490153287,$Hr=1,QHr=.4189385332046727,Xs=1.4616321449683622,KHr=4503599627370496,rzr=0x400000000000000,ezr=8470329472543003e-37,_k=1.4616321449683622,tzr=-.12148629053584961,izr=-3638676997039505e-33;function azr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(_Hr(r)||THr(r))return r;if(r===0)return k3;if(r<0?(e=!0,r=-r):e=!1,r<ezr)return-Ya(r);if(e){if(r>=KHr||(f=LHr(r),f===0))return k3;t=Ya(PHr/IHr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-Ya(r),r>=Xs-1+.27?(l=1-r,i=0):r>=Xs-1-.27?(l=r-(_k-1),i=1):(l=r,i=2)):(m=0,r>=Xs+.27?(l=2-r,i=0):r>=Xs-.27?(l=r-_k,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=DHr+p*FHr(p),n=p*(HHr+p*jHr(p)),o=l*u+n,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=XHr+c*BHr(c),n=JHr+c*kHr(c),a=YHr+c*CHr(c),o=p*u-(izr-c*(n+l*a)),m+=tzr+o;break;case 2:u=l*(ZHr+l*VHr(l)),n=$Hr+l*UHr(l),m+=-.5*l+u/n;break}else if(r<8)switch(i=RHr(r),l=r-i,o=l*(WHr+l*xHr(l)),v=zHr+l*MHr(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=Ya(p)}else r<rzr?(f=Ya(r),p=1/r,l=p*p,c=QHr+p*GHr(l),m=(r-.5)*(f-1)+c):m=r*(Ya(r)-1);return e&&(m=t-m),m}Tk.exports=azr});var u0=s((NPe,Rk)=>{"use strict";var nzr=Ik();Rk.exports=nzr});var mi=s((SPe,Lk)=>{"use strict";var szr=6.283185307179586;Lk.exports=szr});var C3=s((OPe,Pk)=>{"use strict";var uzr=14901161193847656e-24;Pk.exports=uzr});var V3=s((APe,Fk)=>{"use strict";var ozr=.9189385332046728;Fk.exports=ozr});var jk=s((_Pe,vzr)=>{vzr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var Mk=s((TPe,fzr)=>{fzr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var xk=s((IPe,czr)=>{czr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var kk=s((RPe,Bk)=>{"use strict";function lzr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}Bk.exports=lzr});var Vk=s((LPe,Ck)=>{"use strict";function pzr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}Ck.exports=pzr});var Gk=s((PPe,Uk)=>{"use strict";function dzr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}Uk.exports=dzr});var Hk=s((FPe,Dk)=>{"use strict";function gzr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}Dk.exports=gzr});var Wk=s((jPe,zk)=>{"use strict";function mzr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}zk.exports=mzr});var Jk=s((MPe,Xk)=>{"use strict";function yzr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}Xk.exports=yzr});var Kk=s((xPe,Qk)=>{"use strict";var hzr=z(),qzr=Ee(),bzr=Dr(),Js=te(),wzr=Ur(),Ezr=Ja(),Nzr=u0(),Yk=s0(),Zk=Vr(),Szr=br(),Ozr=hr(),Azr=Rr(),$k=mi(),_zr=C3(),Tzr=V3(),Izr=jk(),Rzr=Mk(),Lzr=xk(),Pzr=kk(),Fzr=Vk(),jzr=Gk(),Mzr=Hk(),xzr=Wk(),Bzr=Jk(),kzr=129,Czr=170,Vzr=709,Uzr=1.2433929443359375,Gzr=.6986598968505859;function U3(r){var e,t,i,a,n,u;if(hzr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(qzr(r)&&(a=r|0,a===r))if(a<0){if(i=-a|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=kzr)return-Lzr[u]/(i+1)}else return(a&1)===0?Rzr[a/2]:Izr[(a-3)/2];return bzr(r)<_zr?-.5-Tzr*r:(t=1-r,r<0?wzr(r/2)===r/2?0:(e=r,r=t,t=e,r>Czr?(e=Yk(.5*t)*2*U3(r),n=Nzr(r),n-=r*Szr($k),n>Vzr?e<0?Azr:Ozr:e*Js(n)):Yk(.5*t)*2*Zk($k,-r)*Ezr(r)*U3(r)):r<1?(e=Pzr(t),e-=Uzr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+Fzr(t)):r<=4?(e=Gzr+1/-t,e+jzr(r-2)):r<=7?(e=Mzr(r-4),1+Js(e)):r<15?(e=xzr(r-7),1+Js(e)):r<36?(e=Bzr(r-15),1+Js(e)):1+Zk(2,-r))}Qk.exports=U3});var G3=s((BPe,rC)=>{"use strict";var Dzr=Kk();rC.exports=Dzr});var tC=s((kPe,eC)=>{"use strict";var Hzr=z(),zzr=j3(),Wzr=G3(),Xzr=Gn();function Jzr(r){return Hzr(r)?NaN:r===1?Xzr:-zzr(2,1-r)*Wzr(r)}eC.exports=Jzr});var aC=s((CPe,iC)=>{"use strict";var Yzr=tC();iC.exports=Yzr});var sC=s((VPe,nC)=>{"use strict";var wr=$r(),Zzr=Dr(),$zr=Ls(),Qzr=Jn(),Kzr=PL(),rWr=zL(),eWr=YL(),tWr=KL(),iWr=iP(),aWr=lP(),nWr=mP(),sWr=bP(),uWr=na(),oWr=s3(),vWr=xs(),fWr=OP(),cWr=IP(),lWr=FP(),pWr=UP(),dWr=d3(),gWr=g3(),mWr=nj(),yWr=Ej(),hWr=Qj(),qWr=sM(),bWr=Xa(),wWr=AM(),EWr=GM(),NWr=At(),SWr=sx(),OWr=px(),AWr=hx(),_Wr=Mx(),TWr=zx(),IWr=Yx(),RWr=Kx(),LWr=iB(),PWr=mB(),FWr=aC(),jWr=lt(),MWr=Pr(),xWr=G3();function BWr(r){return wr(r,"abs",Zzr),wr(r,"abs2",$zr),wr(r,"acos",Qzr),wr(r,"acosh",Kzr),wr(r,"acot",rWr),wr(r,"acovercos",eWr),wr(r,"acoversin",tWr),wr(r,"acsc",iWr),wr(r,"acsch",aWr),wr(r,"ahavercos",nWr),wr(r,"ahaversin",sWr),wr(r,"asin",uWr),wr(r,"asinh",oWr),wr(r,"atan",vWr),wr(r,"atanh",fWr),wr(r,"avercos",cWr),wr(r,"aversin",lWr),wr(r,"bernoulli",pWr),wr(r,"besselj0",dWr),wr(r,"besselj1",gWr),wr(r,"bessely0",mWr),wr(r,"bessely1",yWr),wr(r,"binet",hWr),wr(r,"cbrt",qWr),wr(r,"ceil",bWr),wr(r,"ceil10",wWr),wr(r,"ceil2",EWr),wr(r,"cos",NWr),wr(r,"cosh",SWr),wr(r,"cosm1",OWr),wr(r,"cospi",AWr),wr(r,"cot",_Wr),wr(r,"coth",TWr),wr(r,"covercos",IWr),wr(r,"coversin",RWr),wr(r,"deg2rad",LWr),wr(r,"digamma",PWr),wr(r,"eta",FWr),wr(r,"sin",jWr),wr(r,"sqrt",MWr),wr(r,"zeta",xWr),r}nC.exports=BWr});var oC=s((UPe,uC)=>{"use strict";var kWr=$r(),CWr=B_(),VWr=WR(),UWr=sC();function GWr(r){return kWr(r,"tools",VWr({})),r=CWr(r),r=UWr(r),r}uC.exports=GWr});var cC=s((GPe,fC)=>{"use strict";var DWr=B1(),vC=DWr();function HWr(){return typeof vC.BigInt=="function"&&typeof BigInt=="function"&&typeof vC.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}fC.exports=HWr});var pC=s((DPe,lC)=>{"use strict";var zWr=cC();lC.exports=zWr});var mC=s((HPe,gC)=>{"use strict";var dC=Dr();function WWr(r){var e,t,i,a,n,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,a=dC(r[0]),u=1;u<t;u++)if(n=dC(r[u]),e&&n<a?e=!1:i&&n>a&&(i=!1),i||e)a=n;else return 0;return i&&e?3:i?1:2}gC.exports=WWr});var D3=s((zPe,yC)=>{"use strict";var XWr=mC();yC.exports=XWr});var qC=s((WPe,hC)=>{"use strict";function JWr(r,e){return e&&(r===2||r===3)}hC.exports=JWr});var wC=s((XPe,bC)=>{"use strict";function YWr(r,e){return e&&(r===1||r===3)}bC.exports=YWr});var NC=s((JPe,EC)=>{"use strict";var ZWr=us();function $Wr(r,e,t,i,a){var n;return r===0||a===0?!1:(n=ZWr(e,t,i),r===n[1]-n[0]+1)}EC.exports=$Wr});var OC=s((YPe,SC)=>{"use strict";function QWr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}SC.exports=QWr});var _C=s((ZPe,AC)=>{"use strict";function KWr(r){var e,t,i,a,n,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,a=this._offset,this._order==="column-major"){for(u=0;u<i;u++)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}for(u=i-1;u>=0;u--)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}AC.exports=KWr});var IC=s(($Pe,TC)=>{"use strict";function rXr(r,e){var t,i,a,n,u,o;if(a=this._ndims,a===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,n=this._offset,this._order==="column-major"){for(o=0;o<a;o++)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}for(o=a-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}TC.exports=rXr});var LC=s((QPe,RC)=>{"use strict";function eXr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}RC.exports=eXr});var FC=s((KPe,PC)=>{"use strict";function tXr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}PC.exports=tXr});var MC=s((rFe,jC)=>{"use strict";var iXr=it(),aXr=at();function nXr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(iXr(t),aXr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}jC.exports=nXr});var kC=s((eFe,BC)=>{"use strict";var sXr=Jr().isPrimitive,uXr=C(),xC=/[-\/\\^$*+?.()|[\]{}]/g;function oXr(r){var e,t,i;if(!sXr(r))throw new TypeError(uXr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(xC,"\\$&"):(t=r.substring(1,i),t=t.replace(xC,"\\$&"),r=r[0]+t+r.substring(i),r)}BC.exports=oXr});var VC=s((tFe,CC)=>{"use strict";var vXr=kC();CC.exports=vXr});var GC=s((iFe,UC)=>{"use strict";var fXr=RegExp.prototype.exec;UC.exports=fXr});var HC=s((aFe,DC)=>{"use strict";var cXr=GC();function lXr(r){try{return cXr.call(r),!0}catch{return!1}}DC.exports=lXr});var WC=s((nFe,zC)=>{"use strict";var pXr=ga(),dXr=Kr(),gXr=HC(),mXr=pXr();function yXr(r){return typeof r=="object"?r instanceof RegExp?!0:mXr?gXr(r):dXr(r)==="[object RegExp]":!1}zC.exports=yXr});var JC=s((sFe,XC)=>{"use strict";var hXr=WC();XC.exports=hXr});var ZC=s((uFe,YC)=>{"use strict";function qXr(r,e,t){return r.replace(e,t)}YC.exports=qXr});var yi=s((oFe,$C)=>{"use strict";var bXr=ZC();$C.exports=bXr});var KC=s((vFe,QC)=>{"use strict";var wXr=VC(),EXr=yr(),H3=Jr().isPrimitive,NXr=JC(),z3=C(),SXr=yi();function OXr(r,e,t){if(!H3(r))throw new TypeError(z3("invalid argument. First argument must be a string. Value: `%s`.",r));if(H3(e))e=new RegExp(wXr(e),"g");else if(!NXr(e))throw new TypeError(z3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!H3(t)&&!EXr(t))throw new TypeError(z3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return SXr(r,e,t)}QC.exports=OXr});var eV=s((fFe,rV)=>{"use strict";var AXr=KC();rV.exports=AXr});var iV=s((cFe,tV)=>{"use strict";var _Xr=eV(),W3=it(),X3=at(),TXr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function IXr(){var r,e,t,i,a,n,u;if(e=this._shape.length,a=this._dtype,i="ndarray( '"+a+"', ",r="",this._length<=100)if(a==="complex64"||a==="complex128")for(u=0;u<this._length;u++)n=this.iget(u),r+=W3(n)+", "+X3(n),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(a==="complex64"||a==="complex128")for(u=0;u<3;u++)n=this.iget(u),r+=W3(n)+", "+X3(n),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",a==="complex64"||a==="complex128")for(u=2;u>=0;u--)n=this.iget(this._length-1-u),r+=W3(n)+", "+X3(n),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=TXr[this.dtype],i+=_Xr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}tV.exports=IXr});var nV=s((lFe,aV)=>{"use strict";var RXr=typeof ArrayBuffer=="function"?ArrayBuffer:null;aV.exports=RXr});var uV=s((pFe,sV)=>{"use strict";var LXr=z0(),PXr=ge(),Ys=nV();function FXr(){var r,e,t;if(typeof Ys!="function")return!1;try{t=new Ys(16),r=LXr(t)&&typeof Ys.isView=="function",r&&(e=new PXr(t),e[0]=-3.14,e[1]=NaN,r=r&&Ys.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}sV.exports=FXr});var vV=s((dFe,oV)=>{"use strict";var jXr=uV();oV.exports=jXr});var cV=s((gFe,fV)=>{"use strict";var MXr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;fV.exports=MXr});var pV=s((mFe,lV)=>{"use strict";function xXr(){throw new Error("not implemented")}lV.exports=xXr});var Zs=s((yFe,dV)=>{"use strict";var BXr=vV(),kXr=cV(),CXr=pV(),J3;BXr()?J3=kXr:J3=CXr;dV.exports=J3});var mV=s((hFe,gV)=>{"use strict";var VXr=Kr(),UXr=typeof DataView=="function";function GXr(r){return UXr&&r instanceof DataView||VXr(r)==="[object DataView]"}gV.exports=GXr});var hV=s((qFe,yV)=>{"use strict";var DXr=mV();yV.exports=DXr});var bV=s((bFe,qV)=>{"use strict";var HXr=typeof DataView=="function"?DataView:null;qV.exports=HXr});var NV=s((wFe,EV)=>{"use strict";var zXr=hV(),WXr=Zs(),wV=bV();function XXr(){var r,e,t;if(typeof wV!="function")return!1;try{t=new WXr(24),e=new wV(t,8),r=zXr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}EV.exports=XXr});var OV=s((EFe,SV)=>{"use strict";var JXr=NV();SV.exports=JXr});var _V=s((NFe,AV)=>{"use strict";var YXr=typeof DataView=="function"?DataView:void 0;AV.exports=YXr});var IV=s((SFe,TV)=>{"use strict";function ZXr(){throw new Error("not implemented")}TV.exports=ZXr});var o0=s((OFe,RV)=>{"use strict";var $Xr=OV(),QXr=_V(),KXr=IV(),Y3;$Xr()?Y3=QXr:Y3=KXr;RV.exports=Y3});var PV=s((AFe,LV)=>{"use strict";var rJr=typeof BigInt=="function"?BigInt:void 0;LV.exports=rJr});var jV=s((_Fe,FV)=>{"use strict";var eJr=PV();FV.exports=eJr});var MV=s((TFe,tJr)=>{tJr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var kV=s((IFe,BV)=>{"use strict";var xV=MV();function iJr(){var r;return arguments.length===0?xV.all.slice():(r=xV[arguments[0]],r?r.slice():[])}BV.exports=iJr});var VV=s((RFe,CV)=>{"use strict";function aJr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}CV.exports=aJr});var GV=s((LFe,UV)=>{"use strict";var nJr=$r(),sJr=Ca();function uJr(r,e){var t,i,a;for(t=sJr(e),a=0;a<t.length;a++)i=t[a],nJr(r,i,e[i]);return r}UV.exports=uJr});var $3=s((PFe,HV)=>{"use strict";var oJr=G(),Z3=kV(),DV=VV(),vJr=GV();oJr(Z3,"enum",DV);vJr(Z3,DV());HV.exports=Z3});var zV=s((FFe,fJr)=>{fJr.exports=["row-major","column-major"]});var XV=s((jFe,WV)=>{"use strict";var cJr=zV();function lJr(){return cJr.slice()}WV.exports=lJr});var YV=s((MFe,JV)=>{"use strict";function pJr(){return{"row-major":1,"column-major":2}}JV.exports=pJr});var v0=s((xFe,$V)=>{"use strict";var dJr=G(),ZV=XV(),gJr=YV();dJr(ZV,"enum",gJr);$V.exports=ZV});var QV=s((BFe,mJr)=>{mJr.exports=["throw","clamp","wrap"]});var rU=s((kFe,KV)=>{"use strict";var yJr=QV();function hJr(){return yJr.slice()}KV.exports=hJr});var tU=s((CFe,eU)=>{"use strict";function qJr(){return{throw:1,clamp:2,wrap:3}}eU.exports=qJr});var Q3=s((VFe,aU)=>{"use strict";var bJr=G(),iU=rU(),wJr=tU();bJr(iU,"enum",wJr);aU.exports=iU});var uU=s((UFe,sU)=>{"use strict";var hi=Ye(),EJr=Zs(),NJr=o0(),f0=jV(),SJr=$3().enum,OJr=v0().enum,AJr=Q3().enum,_Jr=SJr(),TJr=OJr(),nU=AJr();function IJr(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new NJr(new EJr(t)),a=this._shape,n=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,hi?1:0),f+=1,o.setInt16(f,_Jr[i],hi),f+=2,o.setBigInt64(f,f0(l),hi),c=l*8,f+=8,m=0;m<l;m++)o.setBigInt64(f,f0(a[m]),hi),o.setBigInt64(f+c,f0(n[m]*r),hi),f+=8;for(f+=c,o.setBigInt64(f,f0(this._offset*r),hi),f+=8,o.setInt8(f,TJr[this._order]),f+=1,o.setInt8(f,nU[v]),f+=1,o.setBigInt64(f,f0(p),hi),f+=8,m=0;m<p;m++)o.setInt8(f,nU[u[m]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,hi),this.__meta_dataview__=o,o}sU.exports=IJr});var vU=s((GFe,oU)=>{"use strict";var c0=Ye(),RJr=tt(),LJr=o0(),PJr=Ur(),FJr=4294967295>>>0,jJr=4294967296;function MJr(r){var e,t,i,a;return e=new RJr(8),r===0||(a=(r&FJr)>>>0,i=PJr(r/jJr),t=new LJr(e.buffer),c0?(t.setUint32(0,a,c0),t.setUint32(4,i,c0)):(t.setUint32(0,i,c0),t.setUint32(4,a,c0))),e}oU.exports=MJr});var cU=s((DFe,fU)=>{"use strict";var l0=Ye(),xJr=tt(),BJr=o0(),kJr=Ur(),CJr=4294967295>>>0,VJr=4294967296,Qs=new xJr(8),$s=new BJr(Qs.buffer);function UJr(r,e,t,i){var a,n,u;if(r===0){for(u=0;u<Qs.length;u++)e[i]=0,i+=t;return e}for(n=(r&CJr)>>>0,a=kJr(r/VJr),l0?($s.setUint32(0,n,l0),$s.setUint32(4,a,l0)):($s.setUint32(0,a,l0),$s.setUint32(4,n,l0)),u=0;u<Qs.length;u++)e[i]=Qs[u],i+=t;return e}fU.exports=UJr});var dU=s((HFe,pU)=>{"use strict";var GJr=G(),lU=vU(),DJr=cU();GJr(lU,"assign",DJr);pU.exports=lU});var yU=s((zFe,mU)=>{"use strict";var K3=Ye(),HJr=Zs(),zJr=o0(),WJr=tt(),XJr=$3().enum,JJr=v0().enum,YJr=Q3().enum,p0=dU().assign,ZJr=XJr(),$Jr=JJr(),gU=YJr();function QJr(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,m=o.length,i=33+p*16+m,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new zJr(new HJr(i)),e=new WJr(v.buffer),n=this._shape,u=this._strides,a=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,K3?1:0),c+=1,v.setInt16(c,ZJr[a],K3),c+=2,p0(p,e,1,c),l=p*8,c+=8,y=0;y<p;y++)p0(n[y],e,1,c),p0(u[y]*r,e,1,c+l),c+=8;for(c+=l,p0(this._offset*r,e,1,c),c+=8,v.setInt8(c,$Jr[this._order]),c+=1,v.setInt8(c,gU[f]),c+=1,p0(m,e,1,c),c+=8,y=0;y<m;y++)v.setInt8(c,gU[o[y]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,K3),this.__meta_dataview__=v,v}mU.exports=QJr});var qU=s((WFe,hU)=>{"use strict";var KJr=pC(),qi=G(),Ze=qr(),rYr=r3(),eYr=Qv(),tYr=D3(),iYr=j1(),aYr=qC(),nYr=wC(),sYr=NC(),uYr=OC(),oYr=_C(),vYr=IC(),fYr=LC(),cYr=FC(),lYr=MC(),pYr=iV(),dYr=uU(),gYr=yU();function ie(r,e,t,i,a,n){var u,o,v,f,c;if(!(this instanceof ie))return new ie(r,e,t,i,a,n);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=rYr(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=a,this._order=n,this._shape=t,this._strides=i,this._accessors=iYr(e.get&&e.set),this._iterationOrder=eYr(i),u=sYr(f,t,i,a,this._iterationOrder),v=tYr(i),this._flags={ROW_MAJOR_CONTIGUOUS:nYr(v,u),COLUMN_MAJOR_CONTIGUOUS:aYr(v,u),READONLY:!1},this.__meta_dataview__=null,this}qi(ie,"name","ndarray");Ze(ie.prototype,"byteLength",function(){return this._byteLength});Ze(ie.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Ze(ie.prototype,"data",function(){return this._buffer});Ze(ie.prototype,"dtype",function(){return this._dtype});Ze(ie.prototype,"flags",function(){return uYr(this._flags)});Ze(ie.prototype,"length",function(){return this._length});Ze(ie.prototype,"ndims",function(){return this._ndims});Ze(ie.prototype,"offset",function(){return this._offset});Ze(ie.prototype,"order",function(){return this._order});Ze(ie.prototype,"shape",function(){return this._shape.slice()});Ze(ie.prototype,"strides",function(){return this._strides.slice()});qi(ie.prototype,"get",cYr);qi(ie.prototype,"iget",oYr);qi(ie.prototype,"set",fYr);qi(ie.prototype,"iset",vYr);qi(ie.prototype,"toString",pYr);qi(ie.prototype,"toJSON",lYr);qi(ie.prototype,"__array_meta_dataview__",KJr()?dYr:gYr);hU.exports=ie});var d0=s((XFe,bU)=>{"use strict";var mYr=qU();bU.exports=mYr});var NU=s((JFe,EU)=>{"use strict";function wU(r,e,t,i,a,n){var u,o,v,f,c;if(n>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[n],u=t[n],c=0;c<f;c++)o=wU(r,e,t,i,a,n+1),v.push(o),i+=u;return v}EU.exports=wU});var OU=s((YFe,SU)=>{"use strict";var yYr=Ln(),hYr=NU();function qYr(r,e,t,i,a){var n;if(e.length===0)return[];for(n=0;n<e.length;n++)if(e[n]===0)return[];return hYr(yYr(r),e,t,i,a,0)}SU.exports=qYr});var Ks=s((ZFe,AU)=>{"use strict";var bYr=OU();AU.exports=bYr});var TU=s(($Fe,_U)=>{"use strict";var wYr=Ks(),EYr=ct();function NYr(r,e,t,i,a,n,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<a.length;f++)r[v]=a[f],v+=1;return r[v]="offset",v+=1,r[v]=n,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:EYr(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:wYr(r,[r.length,1],[1,1],0,"row-major")}_U.exports=NYr});var RU=s((QFe,IU)=>{"use strict";var SYr=TU();IU.exports=SYr});var FU=s((KFe,PU)=>{"use strict";var OYr=v0(),LU=OYr(),AYr=LU.length;function _Yr(r){var e;for(e=0;e<AYr;e++)if(r===LU[e])return!0;return!1}PU.exports=_Yr});var MU=s((rje,jU)=>{"use strict";var TYr=FU();jU.exports=TYr});var BU=s((eje,xU)=>{"use strict";function IYr(r){return r.toLowerCase()}xU.exports=IYr});var oa=s((tje,kU)=>{"use strict";var RYr=BU();kU.exports=RYr});var VU=s((ije,CU)=>{"use strict";var LYr=ma(),PYr=$i(),FYr=Aa(),jYr=Ma();function MYr(r,e){var t,i,a,n;for(a=jYr(r),LYr(r)?i=PYr(a):i=FYr(a),t=r.length,n=0;n<t;n++)if(i(r,n)===e)return!0;return!1}CU.exports=MYr});var GU=s((aje,UU)=>{"use strict";var xYr=Ce(),BYr=ma(),kYr=$i(),CYr=Ma(),VYr=C();function UYr(r){var e,t,i;if(!xYr(r))throw new TypeError(VYr("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=CYr(r),BYr(r)&&(e=kYr(i)),t=r.length,e===void 0?a:n;function a(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function n(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}UU.exports=UYr});var zU=s((nje,HU)=>{"use strict";var GYr=G(),DU=VU(),DYr=GU();GYr(DU,"factory",DYr);HU.exports=DU});var YU=s((sje,JU)=>{"use strict";var ru=be().isPrimitive,HYr=ye().isPrimitive,WU=Nr().isPrimitive,zYr=MU(),WYr=R2(),rf=oa(),XYr=zU().factory,JYr=v0(),YYr=d0(),ZYr=ct(),pt=C(),$Yr=z2(),QYr=C0(),KYr=JYr(),XU=["string","number","complex","boolean","date","any"],rZr=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],eZr=rZr.length,tZr=5,iZr=XYr(XU);function aZr(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function nZr(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!WU(i));a++){if(!ru(i))throw new TypeError(pt('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function sZr(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!WU(i));a++){if(!HYr(i))throw new TypeError(pt('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function uZr(r,e){var t,i,a;if(r[0]!=="ndarray")throw new TypeError(pt('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(a=1;a<r.length;a++)if(i=rf(r[a]),i==="shape")e.shape=nZr(r,a+1),e.ndims=e.shape.length,a+=e.ndims;else if(i==="strides")e.strides=sZr(r,a+1),a+=e.strides.length;else if(i==="offset"){if(a+=1,t=r[a],!ru(t))throw new TypeError(pt('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(a+=1,t=rf(r[a]),!zYr(t))throw new TypeError(pt('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',KYr.join('", "'),t));e.order=t}else if(i==="dtype"){if(a+=1,t=rf(r[a]),!iZr(t))throw new TypeError(pt('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',XU.join('", "'),t));e.dtype=t}else if(i==="length"){if(a+=1,t=r[a],!ru(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(a+=1,t=r[a],!ru(t))throw new TypeError(pt('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){a+=1;break}else throw new TypeError(pt('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function oZr(r,e){return eZr+r+e+tZr}function vZr(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(pt("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=ZYr(r.shape),t!==r.length)throw new TypeError(pt('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!WYr(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function fZr(r){var e;if(!$Yr(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=aZr(),e.rawBuffer=QYr(r),e=uZr(e.rawBuffer,e),e=vZr(e),e.headerLength=oZr(e.ndims,e.strides.length),e.ndarray=new YYr("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}JU.exports=fZr});var $U=s((uje,ZU)=>{"use strict";var cZr=YU();ZU.exports=cZr});var KU=s((oje,QU)=>{"use strict";var lZr=typeof String.prototype.trim<"u";QU.exports=lZr});var ef=s((vje,rG)=>{"use strict";var pZr=String.prototype.trim;rG.exports=pZr});var aG=s((fje,iG)=>{"use strict";var eG=ef(),dZr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,tG="\u180E";function gZr(){return eG.call(dZr)===""&&eG.call(tG)===tG}iG.exports=gZr});var sG=s((cje,nG)=>{"use strict";var mZr=yi(),yZr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function hZr(r){return mZr(r,yZr,"$1")}nG.exports=hZr});var oG=s((lje,uG)=>{"use strict";var qZr=ef();function bZr(r){return qZr.call(r)}uG.exports=bZr});var bi=s((pje,vG)=>{"use strict";var wZr=KU(),EZr=aG(),NZr=sG(),SZr=oG(),tf;wZr&&EZr()?tf=SZr:tf=NZr;vG.exports=tf});var cG=s((dje,fG)=>{"use strict";function OZr(r){return r===null}fG.exports=OZr});var af=s((gje,lG)=>{"use strict";var AZr=cG();lG.exports=AZr});var dG=s((mje,pG)=>{"use strict";function _Zr(r){return r===void 0}pG.exports=_Zr});var nf=s((yje,gG)=>{"use strict";var TZr=dG();gG.exports=TZr});var yG=s((hje,mG)=>{"use strict";var uf=G(),of=qr(),IZr=ye().isPrimitive,RZr=af(),LZr=nf(),eu=C();function sf(r){return IZr(r)||RZr(r)||LZr(r)}function Tt(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof Tt))return new Tt(e,t,i);if(!sf(e))throw new TypeError(eu("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!sf(t))throw new TypeError(eu("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(sf(i)){if(i===0)throw new RangeError(eu("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(eu("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}uf(Tt,"name","Slice");of(Tt.prototype,"start",function(){return this._start});of(Tt.prototype,"stop",function(){return this._stop});of(Tt.prototype,"step",function(){return this._step});uf(Tt.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});uf(Tt.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});mG.exports=Tt});var Za=s((qje,hG)=>{"use strict";var PZr=yG();hG.exports=PZr});var bG=s((bje,qG)=>{"use strict";var FZr=Za(),jZr=ht();function MZr(r){return r instanceof FZr||jZr(r)==="Slice"}qG.exports=MZr});var EG=s((wje,wG)=>{"use strict";var xZr=bG();wG.exports=xZr});var OG=s((Eje,SG)=>{"use strict";var vf=G(),NG=qr(),BZr=ye().isPrimitive,kZr=af(),CZr=nf(),VZr=EG(),UZr=C();function GZr(r){return BZr(r)||kZr(r)||CZr(r)||VZr(r)}function Te(){var r,e,t,i,a;if(r=arguments.length,!(this instanceof Te)){if(r===1)return new Te(arguments[0]);if(r===2)return new Te(arguments[0],arguments[1]);if(r===3)return new Te(arguments[0],arguments[1],arguments[2]);if(r===4)return new Te(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Te(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],a=0;a<r;a++)t.push(arguments[a]);return e=Object.create(Te.prototype),Te.apply(e,t)}for(this._data=[],a=0;a<r;a++){if(i=arguments[a],!GZr(i))throw new TypeError(UZr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",a,i));this._data.push(i===void 0?null:i)}return this}vf(Te,"name","MultiSlice");NG(Te.prototype,"ndims",function(){return this._data.length});NG(Te.prototype,"data",function(){return this._data.slice()});vf(Te.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});vf(Te.prototype,"toJSON",function(){var e,t,i,a;for(e=this._data,t={type:"MultiSlice",data:[]},a=0;a<e.length;a++)i=e[a],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});SG.exports=Te});var tu=s((Nje,AG)=>{"use strict";var DZr=OG();AG.exports=DZr});var TG=s((Sje,_G)=>{"use strict";var HZr=/(?:\s*-\s*)(?=\d+)(\d+)$/;_G.exports=HZr});var RG=s((Oje,IG)=>{"use strict";var zZr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;IG.exports=zZr});var FG=s((Aje,PG)=>{"use strict";var LG=Ur(),WZr=TG(),XZr=RG();function JZr(r,e,t,i){var a;if(r==="end")return e;if(a=r.match(WZr),a){if(r=e-parseInt(a[1],10),r<0){if(i)return-2;r=0}return r}return a=r.match(XZr),a?(r=parseFloat(a[1]),r<1?i?-2:-1:t&&e>0&&r!==1?LG((e-1)/r):LG(e/r)):-1}PG.exports=JZr});var MG=s((_je,jG)=>{"use strict";var YZr=/\s*:\s*/;jG.exports=YZr});var BG=s((Tje,xG)=>{"use strict";var ZZr=/^[-+]?[0-9]+$/;xG.exports=ZZr});var CG=s((Ije,kG)=>{"use strict";var $Zr=/^end/;kG.exports=$Zr});var UG=s((Rje,VG)=>{"use strict";function QZr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}VG.exports=QZr});var DG=s((Lje,GG)=>{"use strict";function KZr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}GG.exports=KZr});var zG=s((Pje,HG)=>{"use strict";function r$r(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}HG.exports=r$r});var ZG=s((Fje,YG)=>{"use strict";var WG=Za(),e$r=bi(),XG=FG(),t$r=MG(),ff=BG(),JG=CG(),$a=UG(),va=DG(),i$r=zG();function a$r(r,e,t){var i,a,n;if(i=e$r(r).split(t$r),a=i.length,a<2||a>3)return $a();if(a===3)if(n=i[2],n.length===0)i[2]=1;else{if(ff.test(n)===!1)return $a();if(n=parseInt(n,10),n===0)return i$r();i[2]=n}else i.push(1);if(n=i[0],n.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(JG.test(n)){if(n=XG(n,e,i[2]<0,t),n<0)return n===-2?va():$a();i[2]<0&&n>=e&&(n-=1),i[0]=n}else if(ff.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0){if(t)return va();n=0}}else if(n>=e){if(t)return va();i[2]<0?n=e-1:n=e}i[0]=n}else return $a();if(n=i[1],n.length===0)i[2]<0?i[1]=null:i[1]=e;else if(JG.test(n)){if(n=XG(n,e,i[2]<0,t),n<0)return n===-2?va():$a();i[1]=n}else if(ff.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0)if(i[2]>0){if(t)return va();n=0}else{if(t&&n<-1)return va();n=null}}else if(n>e){if(t)return va();n=e}i[1]=n}else return $a();return e===0?new WG(0,0,i[2]):new WG(i[0],i[1],i[2])}YG.exports=a$r});var QG=s((jje,$G)=>{"use strict";var n$r=ZG();$G.exports=n$r});var rD=s((Mje,KG)=>{"use strict";function s$r(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}KG.exports=s$r});var tD=s((xje,eD)=>{"use strict";function u$r(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}eD.exports=u$r});var aD=s((Bje,iD)=>{"use strict";function o$r(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}iD.exports=o$r});var sD=s((kje,nD)=>{"use strict";function v$r(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}nD.exports=v$r});var oD=s((Cje,uD)=>{"use strict";var f$r=/\s*,\s*/;uD.exports=f$r});var fD=s((Vje,vD)=>{"use strict";var c$r=/^[-+]?[0-9]+$/;vD.exports=c$r});var pD=s((Uje,lD)=>{"use strict";var l$r=bi(),p$r=Za(),d$r=tu(),g$r=QG(),m$r=rD(),y$r=tD(),h$r=aD(),cD=sD(),q$r=oD(),b$r=fD();function w$r(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(o=e.length,i=l$r(r).split(q$r),v=i.length,n=!1,a=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(n)return m$r();for(n=!0,p=0;p<o-v+1;p++)a.push(new p$r(0,e[l],1)),l+=1;continue}if(u=e[l],b$r.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return cD()}else if(f>=u)return cD()}l+=1}else{if(f=g$r(f,u,t),f.code)return f;l+=1}a.push(f)}return a.length!==o?a.length<o?y$r():h$r():d$r.apply(null,a)}lD.exports=w$r});var gD=s((Gje,dD)=>{"use strict";var E$r=pD();dD.exports=E$r});var hD=s((Dje,yD)=>{"use strict";var N$r=Jr().isPrimitive,mD=gD(),S$r=C();function O$r(r,e,t){var i;if(!N$r(r))throw new TypeError(S$r('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=mD(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=mD(r,e,!1)}}return i}yD.exports=O$r});var bD=s((Hje,qD)=>{"use strict";var A$r=hD();qD.exports=A$r});var ED=s((zje,wD)=>{"use strict";function _$r(r){var e,t,i,a;for(e=r.length,t=[],a=0;a<e;a++)t.push(0);for(i=1,a=e-1;a>=0;a--)t[a]=i,i*=r[a];return t}function T$r(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function I$r(r,e){return e==="column-major"?T$r(r):_$r(r)}wD.exports=I$r});var SD=s((Wje,ND)=>{"use strict";function R$r(r,e){var t,i,a;for(t=r.length,i=1,a=t-1;a>=0;a--)e[a]=i,i*=r[a];return e}function L$r(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function P$r(r,e,t){return e==="column-major"?L$r(r,t):R$r(r,t)}ND.exports=P$r});var iu=s((Xje,AD)=>{"use strict";var F$r=G(),OD=ED(),j$r=SD();F$r(OD,"assign",j$r);AD.exports=OD});var TD=s((Jje,_D)=>{"use strict";function M$r(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}_D.exports=M$r});var RD=s((Yje,ID)=>{"use strict";var x$r=Za(),g0=TD();function B$r(r,e,t){var i,a,n;if(i=r.start,a=r.stop,n=r.step,n===null&&(n=1),i===null)n>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return g0();i=0}}else if(i>=e){if(t)return g0();n<0?i=e-1:i=e}if(a===null)n>0?a=e:a=null;else if(a<0){if(a=e+a,a<0)if(n>0){if(t)return g0();a=0}else{if(t&&a<-1)return g0();a=null}}else if(a>e){if(t)return g0();a=e}return new x$r(i,a,n)}ID.exports=B$r});var PD=s((Zje,LD)=>{"use strict";var k$r=RD();LD.exports=k$r});var jD=s(($je,FD)=>{"use strict";function C$r(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}FD.exports=C$r});var BD=s((Qje,xD)=>{"use strict";var V$r=tu(),m0=Za(),U$r=PD(),MD=jD();function G$r(r,e,t){return r===null?new m0(0,e,1):typeof r=="number"?r>=e?t?MD():new m0(e,e,1):r<0?(r=e+r,r<0?t?MD():new m0(0,0,1):new m0(r,r+1,1)):new m0(r,r+1,1):U$r(r,e,t)}function D$r(r,e,t){var i,a,n,u;for(i=r.data,a=[],u=0;u<i.length;u++){if(n=G$r(i[u],e[u],t),n.code!==void 0)return n;a.push(n)}return V$r.apply(null,a)}xD.exports=D$r});var CD=s((Kje,kD)=>{"use strict";var H$r=BD();kD.exports=H$r});var UD=s((rMe,VD)=>{"use strict";function z$r(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}VD.exports=z$r});var DD=s((eMe,GD)=>{"use strict";var W$r=UD();GD.exports=W$r});var zD=s((tMe,HD)=>{"use strict";var X$r=Xa();function J$r(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:X$r((i-t)/e)}HD.exports=J$r});var XD=s((iMe,WD)=>{"use strict";var Y$r=zD();WD.exports=Y$r});var YD=s((aMe,JD)=>{"use strict";var Z$r=XD();function $$r(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(Z$r(e[i]));return t}JD.exports=$$r});var $D=s((nMe,ZD)=>{"use strict";var Q$r=YD();ZD.exports=Q$r});var KD=s((sMe,QD)=>{"use strict";function K$r(r){return r.dtype}QD.exports=K$r});var eH=s((uMe,rH)=>{"use strict";var rQr=KD();rH.exports=rQr});var iH=s((oMe,tH)=>{"use strict";var eQr=En();function tQr(r,e){var t=r.shape;return e?eQr(t):t}tH.exports=tQr});var nH=s((vMe,aH)=>{"use strict";var iQr=iH();aH.exports=iQr});var uH=s((fMe,sH)=>{"use strict";var aQr=iu(),nQr=En(),sQr="row-major";function uQr(r,e){var t,i,a;return a=r.strides,typeof a!="object"||a===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=sQr),aQr(i,t))):e?nQr(a):a}sH.exports=uQr});var vH=s((cMe,oH)=>{"use strict";var oQr=uH();oH.exports=oQr});var cH=s((lMe,fH)=>{"use strict";function vQr(r,e){var t,i,a;for(i=r.length,t=0,a=0;a<i;a++)e[a]<0&&(t-=e[a]*(r[a]-1));return t}fH.exports=vQr});var au=s((pMe,lH)=>{"use strict";var fQr=cH();lH.exports=fQr});var dH=s((dMe,pH)=>{"use strict";var cQr=au();function lQr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:cQr(t,e))}pH.exports=lQr});var mH=s((gMe,gH)=>{"use strict";var pQr=dH();gH.exports=pQr});var hH=s((mMe,yH)=>{"use strict";var dQr=D3(),cf="row-major",gQr="column-major";function mQr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=dQr(e),t===1||t===3)?cf:t===2?gQr:r.shape.length===0?cf:null)}yH.exports=mQr});var bH=s((yMe,qH)=>{"use strict";var yQr=hH();qH.exports=yQr});var EH=s((hMe,wH)=>{"use strict";function hQr(r){return r.data}wH.exports=hQr});var SH=s((qMe,NH)=>{"use strict";var qQr=EH();NH.exports=qQr});var AH=s((bMe,OH)=>{"use strict";function bQr(r,e,t){var i,a,n;for(i=r.data,a=t,n=0;n<i.length;n++)a+=e[n]*i[n].start;return a}OH.exports=bQr});var TH=s((wMe,_H)=>{"use strict";function wQr(r,e,t){var i,a,n,u;for(i=r.data,a=[],n=0;n<t.length;n++)u=t[n],a.push(e[u]*i[u].step);return a}_H.exports=wQr});var RH=s((EMe,IH)=>{"use strict";var EQr=ci(),NQr=ge(),SQr=et(),OQr=qa(),AQr=ui(),_Qr=wa(),TQr=Xi(),IQr=me(),RQr=tt(),LQr=ba(),PQr=Ra(),FQr=ja(),jQr={binary:EQr,float64:NQr,float32:SQr,generic:Array,int16:OQr,int32:AQr,int8:_Qr,uint16:TQr,uint32:IQr,uint8:RQr,uint8c:LQr,complex64:PQr,complex128:FQr};IH.exports=jQr});var PH=s((NMe,LH)=>{"use strict";var MQr=RH();function xQr(r){return MQr[r]||null}LH.exports=xQr});var jH=s((SMe,FH)=>{"use strict";var BQr=PH();FH.exports=BQr});var xH=s((OMe,MH)=>{"use strict";var kQr=yr(),CQr=ci(),VQr=kQr(CQr.allocUnsafe);MH.exports=VQr});var kH=s((AMe,BH)=>{"use strict";var UQr=be(),GQr=C(),DQr=ci();function HQr(r){if(!UQr(r))throw new TypeError(GQr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return DQr.allocUnsafe(r)}BH.exports=HQr});var VH=s((_Me,CH)=>{"use strict";var zQr=be(),WQr=C(),XQr=ci();function JQr(r){if(!zQr(r))throw new TypeError(WQr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new XQr(r)}CH.exports=JQr});var GH=s((TMe,UH)=>{"use strict";var YQr=xH(),ZQr=kH(),$Qr=VH(),lf;YQr?lf=ZQr:lf=$Qr;UH.exports=lf});var HH=s((IMe,DH)=>{"use strict";function QQr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}DH.exports=QQr});var WH=s((RMe,zH)=>{"use strict";var KQr=jH(),rKr=GH(),eKr=HH();function tKr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function iKr(r){return eKr(rKr(r))}function aKr(r,e){var t=KQr(r);return t?new t(e):null}function nKr(r,e){return r==="generic"?tKr(e):r==="binary"?iKr(e):aKr(r,e)}zH.exports=nKr});var pf=s((LMe,XH)=>{"use strict";var sKr=WH();XH.exports=sKr});var YH=s((PMe,JH)=>{"use strict";var uKr=pf(),oKr=si();function vKr(r,e,t,i,a){var n,u;return u=t.length,u===0?n=[0]:n=oKr(u),new r(e,uKr(e,0),t,n,0,i,{readonly:a})}JH.exports=vKr});var ez=s((FMe,rz)=>{"use strict";var ZH=CD(),fKr=DD(),$H=$D(),df=Kv(),cKr=si(),QH=ct(),lKr=eH(),pKr=nH(),dKr=vH(),gKr=mH(),mKr=bH(),gf=SH(),KH=C(),yKr=AH(),hKr=TH(),qKr=YH();function bKr(r,e,t,i){var a,n,u,o,v,f,c,l,p,m;if(u=lKr(r),o=pKr(r,!0),a=dKr(r,!0),n=gKr(r),v=mKr(r),c=o.length,e.ndims!==c)throw new RangeError(KH("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,gf(r),o,a,n,v,{readonly:!i});if(f=fKr(e),m=ZH(e,o,!0),m.code){if(t)throw new RangeError(KH("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));m=ZH(e,o,!1),p=$H(m),QH(df(p,f))>0&&(p=cKr(p.length))}else p=$H(m);return QH(p)===0?qKr(l,u,df(p,f),v,!i):(n=yKr(m,a,n),p=df(p,f),p.length===0?new l(u,gf(r),[],[0],n,v,{readonly:!i}):(a=hKr(m,a,f),new l(u,gf(r),p,a,n,v,{readonly:!i})))}rz.exports=bKr});var mf=s((jMe,tz)=>{"use strict";var wKr=ez();tz.exports=wKr});var az=s((MMe,iz)=>{"use strict";var EKr=d0();function NKr(r){return r instanceof EKr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}iz.exports=NKr});var sz=s((xMe,nz)=>{"use strict";var SKr=az();nz.exports=SKr});var oz=s((BMe,uz)=>{"use strict";function OKr(r){var e=r.flags;return e&&e.READONLY===!0}uz.exports=OKr});var fz=s((kMe,vz)=>{"use strict";var AKr=oz();vz.exports=AKr});var lz=s((CMe,cz)=>{"use strict";var _Kr=be().isPrimitive,TKr=Ce(),yf=C();function IKr(r){var e,t,i,a;if(typeof r!="object"||r===null)throw new TypeError(yf("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!TKr(t))throw new TypeError(yf("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],a=0;a<t.length;a++){if(i=t[a],!_Kr(i))throw new TypeError(yf("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}cz.exports=IKr});var dz=s((VMe,pz)=>{"use strict";var RKr=lz();pz.exports=RKr});var hf=s((UMe,gz)=>{"use strict";var LKr="row-major";function PKr(r,e,t,i,a){var n,u;for(n=r-1;n>i;n--)a[n]=t[n];for(n=i;n>=0&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n--);for(n-=1;n>=0;n--)a[n]=t[n];return a}function FKr(r,e,t,i,a){var n,u;for(n=0;n<i;n++)a[n]=t[n];for(n=i;n<r&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n++);for(n+=1;n<r;n++)a[n]=t[n];return a}function jKr(r,e,t,i,a){var n=r.length;if(n===0)return null;if(i<0){if(i+=n,i<0)return null}else if(i>=n)return null;return e===LKr?PKr(n,r,t,i,a):FKr(n,r,t,i,a)}gz.exports=jKr});var yz=s((GMe,mz)=>{"use strict";var MKr=si(),xKr=hf();function BKr(r,e,t,i){return xKr(r,e,t,i,MKr(r.length))}mz.exports=BKr});var bz=s((DMe,qz)=>{"use strict";var kKr=G(),hz=yz(),CKr=hf();kKr(hz,"assign",CKr);qz.exports=hz});var Ez=s((HMe,wz)=>{"use strict";var ze=tu();function VKr(r){switch(r.length){case 0:return new ze;case 1:return new ze(r[0]);case 2:return new ze(r[0],r[1]);case 3:return new ze(r[0],r[1],r[2]);case 4:return new ze(r[0],r[1],r[2],r[3]);case 5:return new ze(r[0],r[1],r[2],r[3],r[4]);case 6:return new ze(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6]);case 8:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]);case 9:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]);case 10:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);default:return ze.apply(null,r)}}wz.exports=VKr});var Sz=s((zMe,Nz)=>{"use strict";var UKr=Ez();Nz.exports=UKr});var Tz=s((WMe,_z)=>{"use strict";var qf=G(),GKr=mr(),DKr=de().isPrimitive,HKr=sz(),zKr=fz(),WKr=vr(),Oz=Tn(),XKr=si(),JKr=dz(),YKr=ct(),ZKr=mf(),$Kr=bz().assign,QKr=Sz(),nu=C();function Az(r){var e,t,i,a,n,u,o,v,f,c,l;if(!HKr(r))throw new TypeError(nu("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(a={writable:!1},arguments.length>1){if(e=arguments[1],!GKr(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(WKr(e,"readonly")){if(!DKr(e.readonly))throw new TypeError(nu("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(a.writable=!e.readonly,a.writable&&zKr(r))throw new Error(nu("invalid option. Cannot write to read-only array."))}}if(t=JKr(r),i=t.length,i<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return c=YKr(t),c===0&&(u=!0),c/=t[i-1]*t[i-2],v=i-3,f=t[v],l=-1,o=XKr(i),o[i-1]=null,o[i-2]=null,n={},qf(n,"next",p),qf(n,"return",m),Oz&&qf(n,Oz,y),n;function p(){var g,d,h;return l+=1,u||l>=c?{done:!0}:(g=o.slice(),d=QKr(o),h=(o[v]+1)%f,o[v]=h,h===0&&(o=$Kr(t,"row-major",o,v-1,o)),{value:[g,ZKr(r,d,!0,a.writable)],done:!1})}function m(g){return u=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return Az(r,a)}}_z.exports=Az});var Rz=s((XMe,Iz)=>{"use strict";var KKr=Tz();Iz.exports=KKr});var Fz=s((JMe,Pz)=>{"use strict";var rre=Rz(),Lz=Ks(),ere=Nn();function tre(r){return[["[ ] ="],[""],[r.ndarray.get()]]}function ire(r){var e=[["[ : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(Lz(r.ndarray,[r.length,1],[1,1],0,"row-major"))}function y0(r){return ere("",r)}function are(r){var e,t,i,a,n;for(e=r.length,t=e-1,n=e-2,i="",a=0;a<e;a++)a<n?i+=r[a].toString():i+=":",a<t&&(i+=", ");return i}function nre(r){return Lz(r.data,r.shape,r.strides,r.offset,r.order)}function sre(r,e){var t;for(t=0;t<r.length;t++)e.push(r[t]);return e}function ure(r,e){var t=y0(e);return t[0]="ndarray: ("+r.join(", ")+")",t}function ore(r,e){var t=y0(e);return t[0]="[ "+are(r)+" ] =",t}function vre(r){var e,t,i,a,n,u;if(t=r.ndims,t===0)return tre(r);if(t===1)return ire(r);for(e=r.shape,i=e[t-1],n=rre(r.ndarray),a=[ure(e,i),y0(i)];u=n.next(),!u.done;)a.push(ore(u.value[0],i)),a.push(y0(i)),sre(nre(u.value[1]),a),a.push(y0(i));return a}Pz.exports=vre});var Mz=s((YMe,jz)=>{"use strict";var fre=Fz();jz.exports=fre});var Bz=s((ZMe,xz)=>{"use strict";var cre=iu(),lre=au(),pre=pf(),dre=C(),gre=d0(),mre=ct();function yre(r,e,t){var i,a,n,u;if(i=e.length,i>0?(n=mre(e),u=cre(e,t)):(n=1,u=[0]),a=pre(r,n),a===null)throw new TypeError(dre("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new gre(r,a,e,u,lre(e,u),t)}xz.exports=yre});var Cz=s(($Me,kz)=>{"use strict";var hre=Bz();kz.exports=hre});var Uz=s((QMe,Vz)=>{"use strict";var $e=$r(),qre=d0(),bre=RU(),wre=ct(),Ere=$U(),Nre=bD(),Sre=iu(),Ore=mf(),Are=Mz(),_re=au(),Tre=Ks(),Ire=Cz();function Rre(r){return $e(r,"ndarray",qre),$e(r,"ndarray2range",bre),$e(r,"numel",wre),$e(r,"range2ndarray",Ere),$e(r,"seq2multislice",Nre),$e(r,"shape2strides",Sre),$e(r,"slice",Ore),$e(r,"stackedRepr",Are),$e(r,"strides2offset",_re),$e(r,"toArray",Tre),$e(r,"zeros",Ire),r}Vz.exports=Rre});var Dz=s((KMe,Gz)=>{"use strict";var Lre=ni();function Pre(r,e,t,i){Lre(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}Gz.exports=Pre});var Sr=s((rxe,Hz)=>{"use strict";var Fre=Dz();Hz.exports=Fre});var Wz=s((exe,zz)=>{"use strict";function jre(r){return e;function e(){return r}}zz.exports=jre});var dr=s((txe,Xz)=>{"use strict";var Mre=Wz();Xz.exports=Mre});var Yz=s((ixe,Jz)=>{"use strict";var xre=hr();function Bre(r){return r===0&&1/r===xre}Jz.exports=Bre});var wi=s((axe,Zz)=>{"use strict";var kre=Yz();Zz.exports=kre});var Kz=s((nxe,Qz)=>{"use strict";var Cre=wi(),$z=z(),bf=hr();function Vre(r,e){return $z(r)||$z(e)?NaN:r===bf||e===bf?bf:r===e&&r===0?Cre(r)?r:e:r>e?r:e}Qz.exports=Vre});var wf=s((sxe,rW)=>{"use strict";var Ure=Kz();rW.exports=Ure});var iW=s((uxe,tW)=>{"use strict";var eW=65535;function Gre(r,e){var t,i,a,n,u,o;return r>>>=0,e>>>=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&eW)>>>0,o=(e&eW)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i>>>0}tW.exports=Gre});var nW=s((oxe,aW)=>{"use strict";var Dre=iW();aW.exports=Dre});var Ef=s((vxe,sW)=>{"use strict";function Hre(r,e,t,i,a,n,u){var o,v,f,c,l,p,m;for(o=e.data,v=a.data,c=e.accessors[0],f=a.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=n;return e}sW.exports=Hre});var vW=s((fxe,oW)=>{"use strict";var uW=Ln(),zre=Ef(),Nf=8;function Wre(r,e,t,i,a){var n,u,o,v,f,c;if(r<=0)return i;if(o=uW(e),v=uW(i),o.accessorProtocol||v.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,zre(r,o,t,n,v,a,u),v.data;if(t===1&&a===1){if(f=r%Nf,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<Nf)return i;for(c=f;c<r;c+=Nf)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,c=0;c<r;c++)i[u]=e[n],n+=t,u+=a;return i}oW.exports=Wre});var lW=s((cxe,cW)=>{"use strict";var fW=Ln(),Xre=Ef(),h0=8;function Jre(r,e,t,i,a,n,u){var o,v,f,c,l,p;if(r<=0)return a;if(f=fW(e),c=fW(a),f.accessorProtocol||c.accessorProtocol)return Xre(r,f,t,i,c,n,u),c.data;if(o=i,v=u,t===1&&n===1){if(l=r%h0,l>0)for(p=0;p<l;p++)a[v]=e[o],o+=t,v+=n;if(r<h0)return a;for(p=l;p<r;p+=h0)a[v]=e[o],a[v+1]=e[o+1],a[v+2]=e[o+2],a[v+3]=e[o+3],a[v+4]=e[o+4],a[v+5]=e[o+5],a[v+6]=e[o+6],a[v+7]=e[o+7],o+=h0,v+=h0;return a}for(p=0;p<r;p++)a[v]=e[o],o+=t,v+=n;return a}cW.exports=Jre});var Ei=s((lxe,dW)=>{"use strict";var Yre=G(),pW=vW(),Zre=lW();Yre(pW,"ndarray",Zre);dW.exports=pW});var mW=s((pxe,gW)=>{"use strict";function $re(){}gW.exports=$re});var hW=s((dxe,yW)=>{"use strict";var Qre=mW();function Kre(){return Qre.name==="foo"}yW.exports=Kre});var bW=s((gxe,qW)=>{"use strict";var ree=hW();qW.exports=ree});var EW=s((mxe,wW)=>{"use strict";var eee=yr(),tee=bW(),iee=C(),aee=C1().REGEXP,nee=tee();function see(r){if(eee(r)===!1)throw new TypeError(iee("invalid argument. Must provide a function. Value: `%s`.",r));return nee?r.name:aee.exec(r.toString())[1]}wW.exports=see});var SW=s((yxe,NW)=>{"use strict";var uee=EW();NW.exports=uee});var AW=s((hxe,OW)=>{"use strict";var oee=wa(),vee=tt(),fee=ba(),cee=qa(),lee=Xi(),pee=ui(),dee=me(),gee=et(),mee=ge(),yee=[mee,gee,pee,dee,cee,lee,oee,vee,fee];OW.exports=yee});var _W=s((qxe,hee)=>{hee.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var FW=s((bxe,PW)=>{"use strict";var qee=ht(),bee=SW(),RW=ra(),wee=D1(),Eee=ge(),TW=AW(),IW=_W(),su=wee()?RW(Eee):LW;su=bee(su)==="TypedArray"?su:LW;function LW(){}function Nee(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof su)return!0;for(t=0;t<TW.length;t++)if(r instanceof TW[t])return!0;for(;r;){for(e=qee(r),t=0;t<IW.length;t++)if(IW[t]===e)return!0;r=RW(r)}return!1}PW.exports=Nee});var MW=s((wxe,jW)=>{"use strict";var See=FW();jW.exports=See});var BW=s((Exe,xW)=>{"use strict";var Oee=Ra(),Aee=ja(),_ee=[Aee,Oee];xW.exports=_ee});var kW=s((Nxe,Tee)=>{Tee.exports=["Complex64Array","Complex128Array"]});var GW=s((Sxe,UW)=>{"use strict";var Iee=ht(),Ree=ra(),CW=BW(),VW=kW();function Lee(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<CW.length;t++)if(r instanceof CW[t])return!0;for(;r;){for(e=Iee(r),t=0;t<VW.length;t++)if(VW[t]===e)return!0;r=Ree(r)}return!1}UW.exports=Lee});var HW=s((Oxe,DW)=>{"use strict";var Pee=GW();DW.exports=Pee});var WW=s((Axe,zW)=>{"use strict";var Fee=C();function jee(r,e){if(typeof e!="function")throw new TypeError(Fee("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}zW.exports=jee});var JW=s((_xe,XW)=>{"use strict";var Mee=WW();XW.exports=Mee});var ZW=s((Txe,YW)=>{"use strict";var xee=wa(),Bee=tt(),kee=ba(),Cee=qa(),Vee=Xi(),Uee=ui(),Gee=me(),Dee=et(),Hee=ge(),zee=Ra(),Wee=ja(),Xee=[[Hee,"Float64Array"],[Dee,"Float32Array"],[Uee,"Int32Array"],[Gee,"Uint32Array"],[Cee,"Int16Array"],[Vee,"Uint16Array"],[xee,"Int8Array"],[Bee,"Uint8Array"],[kee,"Uint8ClampedArray"],[zee,"Complex64Array"],[Wee,"Complex128Array"]];YW.exports=Xee});var QW=s((Ixe,$W)=>{"use strict";var Jee=JW(),Yee=ht(),Zee=ra(),Qa=ZW();function $ee(r){var e,t;for(t=0;t<Qa.length;t++)if(Jee(r,Qa[t][0]))return Qa[t][1];for(;r;){for(e=Yee(r),t=0;t<Qa.length;t++)if(e===Qa[t][1])return Qa[t][1];r=Zee(r)}}$W.exports=$ee});var rX=s((Rxe,KW)=>{"use strict";var Qee=MW(),Kee=HW(),rte=Sa(),ete=Oa(),tte=C(),ite=QW();function ate(r){var e,t,i;if(Qee(r))e=r;else if(Kee(r))r.BYTES_PER_ELEMENT===8?e=rte(r,0):e=ete(r,0);else throw new TypeError(tte("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:ite(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}KW.exports=ate});var Or=s((Lxe,eX)=>{"use strict";var nte=rX();eX.exports=nte});var Sf=s((Pxe,tX)=>{"use strict";var ste=ya(),ute=Ur(),ote=ste-1;function vte(){var r=ute(1+ote*Math.random());return r>>>0}tX.exports=vte});var Pf=s((Fxe,pX)=>{"use strict";var It=G(),Ni=qr(),iX=Sr(),Of=vr(),fte=mr(),cte=Ce(),aX=qt(),lte=de().isPrimitive,nX=nt().isPrimitive,fX=aa(),cX=ya(),Ie=me(),pte=wf(),Lf=nW(),Ka=Ei(),dte=Or(),Le=C(),sX=Sf(),ue=624,Af=397,uX=cX>>>0,gte=19650218>>>0,_f=2147483648>>>0,Tf=2147483647>>>0,mte=1812433253>>>0,yte=1664525>>>0,hte=1566083941>>>0,qte=2636928640>>>0,bte=4022730752>>>0,wte=2567483615>>>0,If=[0>>>0,wte>>>0],lX=1/(fX+1),Ete=67108864>>>0,Nte=2147483648>>>0,Rf=1>>>0,Ste=fX*lX,uu=1,ou=3,Si=2,Oi=ue+3,Re=ue+5,q0=ue+6;function oX(r,e){var t;return e?t="option":t="argument",r.length<q0+1?new RangeError(Le("invalid %s. `state` array has insufficient length.",t)):r[0]!==uu?new RangeError(Le("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,uu,r[0])):r[1]!==ou?new RangeError(Le("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ou,r[1])):r[Si]!==ue?new RangeError(Le("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ue,r[Si])):r[Oi]!==1?new RangeError(Le("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[Oi])):r[Re]!==r.length-q0?new RangeError(Le("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-q0,r[Re])):null}function vX(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=Lf(t,mte)+i>>>0;return r}function Ote(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=pte(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=Lf(a,yte)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=Lf(a,hte)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=Nte,r}function Ate(r){var e,t,i,a;for(a=ue-Af,t=0;t<a;t++)e=r[t]&_f|r[t+1]&Tf,r[t]=r[t+Af]^e>>>1^If[e&Rf];for(i=ue-1;t<i;t++)e=r[t]&_f|r[t+1]&Tf,r[t]=r[t-a]^e>>>1^If[e&Rf];return e=r[i]&_f|r[0]&Tf,r[i]=r[Af-1]^e>>>1^If[e&Rf],r}function _te(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!fte(r))throw new TypeError(Le("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Of(r,"copy")&&(i.copy=r.copy,!lte(r.copy)))throw new TypeError(Le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Of(r,"state")){if(t=r.state,i.state=!0,!aX(t))throw new TypeError(Le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=oX(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ie(t.length),Ka(t.length,t,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Si+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,t[Re])}if(a===void 0)if(Of(r,"seed"))if(a=r.seed,i.seed=!0,nX(a)){if(a>uX)throw new RangeError(Le("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(cte(a)===!1||a.length<1)throw new TypeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!nX(a))throw new TypeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>uX)throw new RangeError(Le("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new Ie(q0+n),e[0]=uu,e[1]=ou,e[Si]=ue,e[Oi]=1,e[Oi+1]=ue,e[Re]=n,Ka.ndarray(n,a,1,0,e,1,Re+1),t=new Ie(e.buffer,e.byteOffset+(Si+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,n),t=vX(t,ue,gte),t=Ote(t,ue,a,n)}else a=sX()>>>0}else a=sX()>>>0;return t===void 0&&(e=new Ie(q0+1),e[0]=uu,e[1]=ou,e[Si]=ue,e[Oi]=1,e[Oi+1]=ue,e[Re]=1,e[Re+1]=a,t=new Ie(e.buffer,e.byteOffset+(Si+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,1),t=vX(t,ue,a)),It(y,"NAME","mt19937"),Ni(y,"seed",o),Ni(y,"seedLength",v),iX(y,"state",l,p),Ni(y,"stateLength",f),Ni(y,"byteLength",c),It(y,"toJSON",m),It(y,"MIN",0),It(y,"MAX",cX),It(y,"normalized",g),It(g,"NAME",y.NAME),Ni(g,"seed",o),Ni(g,"seedLength",v),iX(g,"state",l,p),Ni(g,"stateLength",f),Ni(g,"byteLength",c),It(g,"toJSON",m),It(g,"MIN",0),It(g,"MAX",Ste),y;function o(){var d=e[Re];return Ka(d,a,1,new Ie(d),1)}function v(){return e[Re]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return Ka(d,e,1,new Ie(d),1)}function p(d){var h;if(!aX(d))throw new TypeError(Le("invalid argument. Must provide a Uint32Array. Value: `%s`.",d));if(h=oX(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?Ka(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Ie(d.length)),Ka(d.length,d,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Si+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,e[Re])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=dte(e),d.params=[],d}function y(){var d,h;return h=e[Oi+1],h>=ue&&(t=Ate(t),h=0),d=t[h],e[Oi+1]=h+1,d^=d>>>11,d^=d<<7&qte,d^=d<<15&bte,d^=d>>>18,d>>>0}function g(){var d=y()>>>5,h=y()>>>6;return(d*Ete+h)*lX}}pX.exports=_te});var gX=s((jxe,dX)=>{"use strict";var Tte=Pf(),Ite=Sf(),Rte=Tte({seed:Ite()});dX.exports=Rte});var zr=s((Mxe,yX)=>{"use strict";var Lte=G(),mX=gX(),Pte=Pf();Lte(mX,"factory",Pte);yX.exports=mX});var wX=s((xxe,bX)=>{"use strict";var hX=Nr().isPrimitive,Ff=C(),qX=oe();function Fte(r,e){return!hX(r)||qX(r)?new TypeError(Ff("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!hX(e)||qX(e)?new TypeError(Ff("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Ff("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}bX.exports=Fte});var NX=s((Bxe,EX)=>{"use strict";var jte=Vr(),Mte=lt(),xte=Ms();function Bte(r,e,t){return e+jte(Mte(xte*r()),2)*(t-e)}EX.exports=Bte});var jf=s((kxe,LX)=>{"use strict";var Rt=G(),vu=qr(),SX=Sr(),OX=mr(),AX=yr(),_X=vr(),TX=dr(),kte=Ir(),fu=zr().factory,IX=z(),Cte=Or(),cu=C(),Vte=wX(),RX=NX();function Ute(){var r,e,t,i,a,n;if(arguments.length===0)e=fu();else if(arguments.length===1){if(r=arguments[0],!OX(r))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_X(r,"prng")){if(!AX(r.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=fu(r)}else{if(a=arguments[0],n=arguments[1],i=Vte(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!OX(r))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_X(r,"prng")){if(!AX(r.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=fu(r)}else e=fu()}return a===void 0?t=y:t=m,Rt(t,"NAME","arcsine"),r&&r.prng?(Rt(t,"seed",null),Rt(t,"seedLength",null),SX(t,"state",TX(null),kte),Rt(t,"stateLength",null),Rt(t,"byteLength",null),Rt(t,"toJSON",TX(null)),Rt(t,"PRNG",e)):(vu(t,"seed",u),vu(t,"seedLength",o),SX(t,"state",c,l),vu(t,"stateLength",v),vu(t,"byteLength",f),Rt(t,"toJSON",p),Rt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Cte(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return RX(e,a,n)}function y(g,d){return IX(g)||IX(d)||g>=d?NaN:RX(e,g,d)}}LX.exports=Ute});var FX=s((Cxe,PX)=>{"use strict";var Gte=jf(),Dte=Gte();PX.exports=Dte});var xX=s((Vxe,MX)=>{"use strict";var Hte=G(),jX=FX(),zte=jf();Hte(jX,"factory",zte);MX.exports=jX});var Mf=s((Uxe,GX)=>{"use strict";var Lt=G(),lu=qr(),BX=Sr(),kX=mr(),Wte=Fn().isPrimitive,CX=yr(),VX=vr(),UX=dr(),Xte=Ir(),pu=zr().factory,Jte=z(),Yte=Or(),du=C();function Zte(){var r,e,t,i;if(arguments.length===0)e=pu();else if(arguments.length===1&&kX(arguments[0]))if(r=arguments[0],VX(r,"prng")){if(!CX(r.prng))throw new TypeError(du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=pu(r);else{if(i=arguments[0],!Wte(i))throw new TypeError(du("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!kX(r))throw new TypeError(du("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VX(r,"prng")){if(!CX(r.prng))throw new TypeError(du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=pu(r)}else e=pu()}return i===void 0?t=p:t=l,Lt(t,"NAME","bernoulli"),r&&r.prng?(Lt(t,"seed",null),Lt(t,"seedLength",null),BX(t,"state",UX(null),Xte),Lt(t,"stateLength",null),Lt(t,"byteLength",null),Lt(t,"toJSON",UX(null)),Lt(t,"PRNG",e)):(lu(t,"seed",a),lu(t,"seedLength",n),BX(t,"state",v,f),lu(t,"stateLength",u),lu(t,"byteLength",o),Lt(t,"toJSON",c),Lt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Yte(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return Jte(m)||m<0||m>1?NaN:e()<=m?1:0}}GX.exports=Zte});var HX=s((Gxe,DX)=>{"use strict";var $te=Mf(),Qte=$te();DX.exports=Qte});var XX=s((Dxe,WX)=>{"use strict";var Kte=G(),zX=HX(),rie=Mf();Kte(zX,"factory",rie);WX.exports=zX});var $X=s((Hxe,ZX)=>{"use strict";var eie=Pr(),JX=te(),tie=br(),YX=.00991256303526217;function iie(r,e){var t,i,a;for(i=JX(-.5*e*e),t=[],t.push(YX/i),t.push(e),a=2;a<r;a++)t[a]=eie(-2*tie(YX/t[a-1]+i)),i=JX(-.5*t[a]*t[a]);return t.push(0),t}ZX.exports=iie});var KX=s((zxe,QX)=>{"use strict";function aie(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}QX.exports=aie});var tJ=s((Wxe,eJ)=>{"use strict";var rJ=br();function nie(r,e,t){var i,a;do i=rJ(r())/e,a=rJ(r());while(-2*a<i*i);return t?i-e:e-i}eJ.exports=nie});var sJ=s((Xxe,nJ)=>{"use strict";var sie=Dr(),iJ=te(),uie=$X(),oie=KX(),vie=tJ(),fie=128,aJ=3.442619855899,fa=uie(fie,aJ),cie=oie(fa),lie=127;function pie(r,e){return t;function t(){for(var i,a,n,u,o,v,f;;){if(o=2*r()-1,v=e()&lie,sie(o)<cie[v])return o*fa[v];if(v===0)return vie(r,aJ,o<0);if(u=o*fa[v],n=u*u,f=v+1,i=iJ(-.5*(fa[v]*fa[v]-n)),a=iJ(-.5*(fa[f]*fa[f]-n)),a+r()*(i-a)<1)return u}}}nJ.exports=pie});var Bf=s((Jxe,vJ)=>{"use strict";var Ai=G(),gu=qr(),uJ=Sr(),die=yr(),gie=mr(),mie=de().isPrimitive,mu=vr(),yie=qt(),xf=zr().factory,oJ=dr(),hie=Ir(),qie=Ur(),bie=ya(),wie=Or(),b0=C(),Eie=sJ();function Nie(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!gie(r))throw new TypeError(b0("invalid argument. Must provide an object. Value: `%s`.",r));if(mu(r,"copy")&&(a.copy=r.copy,!mie(r.copy)))throw new TypeError(b0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(mu(r,"prng")){if(!die(r.prng))throw new TypeError(b0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(mu(r,"state")){if(a.state=r.state,!yie(r.state))throw new TypeError(b0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(mu(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(b0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(t=xf(a),e=t.normalized):(t=xf({seed:qie(1+bie*e()),copy:a.copy}),a.seed=null):(t=xf(a),e=t.normalized),i=Eie(e,t),Ai(i,"NAME","improved-ziggurat"),a.seed===null?(Ai(i,"seed",null),Ai(i,"seedLength",null)):(gu(i,"seed",n),gu(i,"seedLength",u)),r&&r.prng?(uJ(i,"state",oJ(null),hie),Ai(i,"stateLength",null),Ai(i,"byteLength",null),Ai(i,"toJSON",oJ(null))):(uJ(i,"state",f,c),gu(i,"stateLength",o),gu(i,"byteLength",v),Ai(i,"toJSON",l)),Ai(i,"PRNG",e),i;function n(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=wie(t.state),p.params=[],p}}vJ.exports=Nie});var cJ=s((Yxe,fJ)=>{"use strict";var Sie=Bf(),Oie=Sie();fJ.exports=Oie});var _i=s((Zxe,pJ)=>{"use strict";var Aie=G(),lJ=cJ(),_ie=Bf();Aie(lJ,"factory",_ie);pJ.exports=lJ});var gJ=s(($xe,dJ)=>{"use strict";var Tie=yr(),Iie=Tie(Object.assign);dJ.exports=Iie});var yJ=s((Qxe,mJ)=>{"use strict";var Rie=Object.assign;mJ.exports=Rie});var qJ=s((Kxe,hJ)=>{"use strict";var Lie=typeof Object.getOwnPropertySymbols<"u";hJ.exports=Lie});var EJ=s((rBe,wJ)=>{"use strict";var bJ=xa(),Pie=bJ.getOwnPropertySymbols;function Fie(r){return Pie(bJ(r))}wJ.exports=Fie});var SJ=s((eBe,NJ)=>{"use strict";function jie(){return[]}NJ.exports=jie});var AJ=s((tBe,OJ)=>{"use strict";var Mie=qJ(),xie=EJ(),Bie=SJ(),kf;Mie?kf=xie:kf=Bie;OJ.exports=kf});var TJ=s((iBe,_J)=>{"use strict";var kie=Ca(),Cie=AJ(),Vie=Mn();function Uie(r){var e,t,i;for(e=kie(r),t=Cie(r),i=0;i<t.length;i++)Vie(r,t[i])&&e.push(t[i]);return e}_J.exports=Uie});var RJ=s((aBe,IJ)=>{"use strict";var Gie=TJ();IJ.exports=Gie});var FJ=s((nBe,PJ)=>{"use strict";var Die=RJ(),LJ=xa(),Hie=C();function zie(r){var e,t,i,a,n,u,o;if(r==null)throw new TypeError(Hie("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(n=LJ(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=Die(LJ(e)),a=t.length,o=0;o<a;o++)i=t[o],n[i]=e[i];return n}PJ.exports=zie});var w0=s((sBe,jJ)=>{"use strict";var Wie=gJ(),Xie=yJ(),Jie=FJ(),Cf;Wie?Cf=Xie:Cf=Jie;jJ.exports=Cf});var kJ=s((uBe,BJ)=>{"use strict";var MJ=Gr().isPrimitive,xJ=C();function Yie(r,e){return MJ(r)?MJ(e)?null:new TypeError(xJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}BJ.exports=Yie});var DJ=s((oBe,GJ)=>{"use strict";var CJ=br(),VJ=Pr(),Zie=Vr(),UJ=1/3;function $ie(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(t<1?(v=t+1-UJ,o=1/VJ(9*v),c=Zie(r(),1/t)):(v=t-UJ,o=1/VJ(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,a=f*f,n=1-.331*a*a,u=.5*a+v*(1-p+CJ(p)),l=r(),(l<n||CJ(l)<u)&&(i=!1)}return v*p*c}GJ.exports=$ie});var WJ=s((vBe,zJ)=>{"use strict";var Vf=Vr(),HJ=br();function Qie(r,e,t){var i,a,n,u,o,v,f,c;for(n=t-1,o=Vf(n+n,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),a=Vf(u,4),c=8*t-12,c=1-a/c,v<=c?i=!1:(c+=.5*Vf(a/(8*t-8),2),v<c&&(c=n*HJ(4*f*(1-f)),c+=u*u/2,c>=HJ(v)&&(i=!1))));return f}zJ.exports=Qie});var JJ=s((fBe,XJ)=>{"use strict";var Kie=Vr(),yu=br();function rae(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y;for(o=t-1,v=i-1,f=o+v,c=f*yu(f),u=o/f,a=.5/Kie(f,.5),n=!0;n===!0;)l=e(),m=u+l*a,m>=0&&m<=1&&(p=r(),y=o*yu(m/o),y+=v*yu((1-m)/v),y+=c+.5*l*l,y>=yu(p)&&(n=!1));return m}XJ.exports=rae});var $J=s((cBe,ZJ)=>{"use strict";var Uf=te(),YJ=Vr(),Gf=br();function eae(r,e,t){for(var i,a,n,u,o,v,f;;)if(u=r(),o=r(),v=YJ(u,1/e),f=YJ(o,1/t),n=v+f,n<=1)return n>0?v/n:(i=Gf(u)/e,a=Gf(o)/t,i>a?(a-=i,i=0):(i-=a,a=0),Uf(i-Gf(Uf(i)+Uf(a))))}ZJ.exports=eae});var rY=s((lBe,KJ)=>{"use strict";var QJ=DJ(),tae=WJ(),iae=JJ(),aae=$J();function nae(r,e,t,i){var a,n;return t===i&&t>1.5?tae(r,e,t):t>1&&i>1?iae(r,e,t,i):t<1&&i<1?aae(r,t,i):(a=QJ(r,e,t),n=QJ(r,e,i),a/(a+n))}KJ.exports=nae});var Wf=s((pBe,fY)=>{"use strict";var Pt=G(),hu=qr(),eY=Sr(),tY=mr(),iY=de().isPrimitive,aY=yr(),rn=vr(),nY=dr(),sae=Ir(),sY=_i().factory,qu=zr().factory,uY=z(),Df=Ei(),Hf=me(),zf=qt(),oY=w0(),uae=Or(),Ft=C(),oae=kJ(),vY=rY();function vae(){var r,e,t,i,a,n,u,o,v;if(o=!0,arguments.length===0)a={copy:!1},n=qu(a);else if(arguments.length===1){if(a=arguments[0],!tY(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(rn(a,"copy")&&!iY(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(rn(a,"prng")){if(!aY(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(rn(a,"state")&&!zf(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=oY({},a),a.copy===!1?o=!1:a.state&&(a.state=Df(a.state.length,a.state,1,new Hf(a.state.length),1)),a.copy=!1,n=qu(a)}}else{if(t=arguments[0],i=arguments[1],v=oae(t,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!tY(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(rn(a,"copy")&&!iY(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(rn(a,"prng")){if(!aY(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(rn(a,"state")&&!zf(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=oY({},a),a.copy===!1?o=!1:a.state&&(a.state=Df(a.state.length,a.state,1,new Hf(a.state.length),1)),a.copy=!1,n=qu(a)}}else a={copy:!1},n=qu(a)}return a&&a.prng?e=sY({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),e=sY({state:r,copy:!1})),t===void 0?u=h:u=d,Pt(u,"NAME","beta"),a&&a.prng?(Pt(u,"seed",null),Pt(u,"seedLength",null),eY(u,"state",nY(null),sae),Pt(u,"stateLength",null),Pt(u,"byteLength",null),Pt(u,"toJSON",nY(null)),Pt(u,"PRNG",n)):(hu(u,"seed",f),hu(u,"seedLength",c),eY(u,"state",m,y),hu(u,"stateLength",l),hu(u,"byteLength",p),Pt(u,"toJSON",g),Pt(u,"PRNG",n),n=n.normalized),u;function f(){return n.seed}function c(){return n.seedLength}function l(){return n.stateLength}function p(){return n.byteLength}function m(){return n.state}function y(q){if(!zf(q))throw new TypeError(Ft("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));o&&(q=Df(q.length,q,1,new Hf(q.length),1)),n.state=q}function g(){var q={};return q.type="PRNG",q.name=u.NAME,q.state=uae(n.state),t===void 0?q.params=[]:q.params=[t,i],q}function d(){return vY(n,e,t,i)}function h(q,w){return uY(q)||uY(w)||q<=0||w<=0?NaN:vY(n,e,q,w)}}fY.exports=vae});var lY=s((dBe,cY)=>{"use strict";var fae=Wf(),cae=fae();cY.exports=cae});var gY=s((gBe,dY)=>{"use strict";var lae=G(),pY=lY(),pae=Wf();lae(pY,"factory",pae);dY.exports=pY});var qY=s((mBe,hY)=>{"use strict";var mY=Gr().isPrimitive,yY=C();function dae(r,e){return mY(r)?mY(e)?null:new TypeError(yY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(yY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}hY.exports=dae});var EY=s((yBe,wY)=>{"use strict";var bY=br();function gae(r,e,t,i,a){var n,u,o,v,f,c,l;for(n=!0;n;){do f=e(),l=1+a*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+bY(l)),c=r(),(c<o||bY(c)<v)&&(n=!1)}return 1/t*i*l}wY.exports=gae});var $f=s((hBe,PY)=>{"use strict";var jt=G(),bu=qr(),NY=Sr(),SY=mr(),Xf=qt(),OY=de().isPrimitive,AY=yr(),en=vr(),_Y=dr(),mae=Ir(),TY=_i().factory,wu=zr().factory,IY=z(),Jf=Pr(),RY=Vr(),Yf=Ei(),Zf=me(),yae=Or(),LY=w0(),Mt=C(),hae=qY(),Eu=EY(),Nu=1/3;function qae(){var r,e,t,i,a,n,u,o,v,f,c;if(o=!0,arguments.length===0)a={copy:!1},n=wu(a);else if(arguments.length===1){if(a=arguments[0],!SY(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(en(a,"copy")&&!OY(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(en(a,"prng")){if(!AY(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(en(a,"state")&&!Xf(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=LY({},a),a.copy===!1?o=!1:a.state&&(a.state=Yf(a.state.length,a.state,1,new Zf(a.state.length),1)),a.copy=!1,n=wu(a)}}else{if(e=arguments[0],i=arguments[1],v=hae(e,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!SY(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(en(a,"copy")&&!OY(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(en(a,"prng")){if(!AY(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(en(a,"state")&&!Xf(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=LY({},a),a.copy===!1?o=!1:a.state&&(a.state=Yf(a.state.length,a.state,1,new Zf(a.state.length),1)),a.copy=!1,n=wu(a)}}else a={copy:!1},n=wu(a)}return a&&a.prng?t=TY({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),t=TY({state:r,copy:!1})),e===void 0?u=A:(e>=1?(u=q,c=e-Nu):(u=w,c=e+1-Nu),f=1/Jf(9*c)),jt(u,"NAME","gamma"),a&&a.prng?(jt(u,"seed",null),jt(u,"seedLength",null),NY(u,"state",_Y(null),mae),jt(u,"stateLength",null),jt(u,"byteLength",null),jt(u,"toJSON",_Y(null)),jt(u,"PRNG",n)):(bu(u,"seed",l),bu(u,"seedLength",p),NY(u,"state",g,d),bu(u,"stateLength",m),bu(u,"byteLength",y),jt(u,"toJSON",h),jt(u,"PRNG",n),n=n.normalized),u;function l(){return n.seed}function p(){return n.seedLength}function m(){return n.stateLength}function y(){return n.byteLength}function g(){return n.state}function d(b){if(!Xf(b))throw new TypeError(Mt("invalid argument. Must provide a Uint32Array. Value: `%s`.",b));o&&(b=Yf(b.length,b,1,new Zf(b.length),1)),n.state=b}function h(){var b={};return b.type="PRNG",b.name=u.NAME,b.state=yae(n.state),e===void 0?b.params=[]:b.params=[e,i],b}function q(){return Eu(n,t,i,c,f)}function w(){return Eu(n,t,i,c,f)*RY(n(),1/e)}function A(b,T){var S,O;return IY(b)||IY(T)||b<=0||T<=0?NaN:b<1?(O=b+1-Nu,S=1/Jf(9*O),Eu(n,t,T,O,S)*RY(n(),1/b)):(O=b-Nu,S=1/Jf(9*O),Eu(n,t,T,O,S))}}PY.exports=qae});var jY=s((qBe,FY)=>{"use strict";var bae=$f(),wae=bae();FY.exports=wae});var tn=s((bBe,xY)=>{"use strict";var Eae=G(),MY=jY(),Nae=$f();Eae(MY,"factory",Nae);xY.exports=MY});var VY=s((wBe,CY)=>{"use strict";var BY=Gr().isPrimitive,kY=C();function Sae(r,e){return BY(r)?BY(e)?null:new TypeError(kY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(kY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}CY.exports=Sae});var GY=s((EBe,UY)=>{"use strict";function Oae(r,e,t){return r(e,1)/r(t,1)}UY.exports=Oae});var Qf=s((NBe,YY)=>{"use strict";var Ti=G(),Su=qr(),DY=Sr(),HY=mr(),zY=dr(),Aae=Ir(),Ou=tn().factory,WY=z(),_ae=Or(),XY=C(),Tae=VY(),JY=GY();function Iae(){var r,e,t,i,a,n,u;if(arguments.length===0)r=Ou();else if(arguments.length===1){if(i=arguments[0],!HY(i))throw new TypeError(XY("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Ou(i)}else{if(e=arguments[0],t=arguments[1],u=Tae(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!HY(i))throw new TypeError(XY("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Ou(i)}else r=Ou()}return e===void 0?n=g:n=y,a=r.PRNG,Ti(n,"NAME","betaprime"),i&&i.prng?(Ti(n,"seed",null),Ti(n,"seedLength",null),DY(n,"state",zY(null),Aae),Ti(n,"stateLength",null),Ti(n,"byteLength",null),Ti(n,"toJSON",zY(null))):(Su(n,"seed",o),Su(n,"seedLength",v),DY(n,"state",l,p),Su(n,"stateLength",f),Su(n,"byteLength",c),Ti(n,"toJSON",m)),Ti(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=_ae(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return JY(r,e,t)}function g(d,h){return WY(d)||WY(h)||d<=0||h<=0?NaN:JY(r,d,h)}}YY.exports=Iae});var $Y=s((SBe,ZY)=>{"use strict";var Rae=Qf(),Lae=Rae();ZY.exports=Lae});var rZ=s((OBe,KY)=>{"use strict";var Pae=G(),QY=$Y(),Fae=Qf();Pae(QY,"factory",Fae);KY.exports=QY});var tZ=s((ABe,eZ)=>{"use strict";var jae=Ur();function Mae(r){return jae(r)===r&&r>0}eZ.exports=Mae});var Kf=s((_Be,iZ)=>{"use strict";var xae=tZ();iZ.exports=xae});var nZ=s((TBe,aZ)=>{"use strict";function Bae(r){return r>=0&&r<=1}aZ.exports=Bae});var uZ=s((IBe,sZ)=>{"use strict";var kae=nZ();sZ.exports=kae});var fZ=s((RBe,vZ)=>{"use strict";var Cae=nt().isPrimitive,Vae=Fn().isPrimitive,oZ=C();function Uae(r,e){return Cae(r)?Vae(e)?null:new TypeError(oZ("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(oZ("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}vZ.exports=Uae});var lZ=s((LBe,cZ)=>{"use strict";function Gae(r,e,t){var i=0,a;for(a=0;a<e;a++)r()<=t&&(i+=1);return i}cZ.exports=Gae});var dZ=s((PBe,pZ)=>{"use strict";var Dae=z();function Hae(r){return r===0||Dae(r)?r:r<0?-1:1}pZ.exports=Hae});var Au=s((FBe,gZ)=>{"use strict";var zae=dZ();gZ.exports=zae});var yZ=s((jBe,mZ)=>{"use strict";var Wae=Vr(),Xae=1/12,Jae=1/360,Yae=1/1260;function Zae(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=Wae(r,2),(Xae-(Jae-Yae/e)/e)/r}}mZ.exports=Zae});var qZ=s((MBe,hZ)=>{"use strict";var rc=Ur(),$ae=Au(),Qae=Pr(),ec=Dr(),_u=br(),Tu=yZ(),Kae=1/6;function rne(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P;for(T=rc((e+1)*t),f=e-T+1,S=1-t,O=t/S,c=(e+1)*O,u=e*t*S,n=Qae(u),d=1.15+2.53*n,g=-.0873+.0248*d+.01*t,h=e*t+.5,i=(2.83+5.1/d)*n,y=.92-4.2/d,a=.86*y,w=(T+.5)*_u((T+1)/(O*f)),w+=Tu(T)+Tu(e-T);;){if(E=r(),E<=a)return I=E/y-.43,O=I*(2*g/(.5-ec(I))+d)+h,rc(O);if(E>=y?I=r()-.5:(I=E/y-.93,I=$ae(I)*.5-I,E=y*r()),l=.5-ec(I),b=rc(I*(2*g/l+d)+h),!(b<0||b>e))if(E=E*i/(g/(l*l)+d),p=ec(b-T),p>15){if(E=_u(E),o=p/u,v=(p/3+.625)*p,v+=Kae,v/=u,o*=v+.5,N=-(p*p)/(2*u),E<N-o||E<=N+o&&(m=e-b+1,P=w+(e+1)*_u(f/m),P+=(b+.5)*_u(m*O/(b+1)),P+=-(Tu(b)+Tu(e-b)),E<=P))return b}else{if(q=1,T<b)for(A=T;A<=b;A++)q*=c/A-O;else if(T>b)for(A=b;A<=T;A++)E*=c/A-O;if(E<=q)return b}}}hZ.exports=rne});var EZ=s((xBe,wZ)=>{"use strict";var ene=lZ(),tne=qZ();function bZ(r,e,t){return t>.5?e-bZ(r,e,1-t):e*t<10?ene(r,e,t):tne(r,e,t)}wZ.exports=bZ});var tc=s((BBe,RZ)=>{"use strict";var xt=G(),Iu=qr(),NZ=Sr(),SZ=mr(),OZ=yr(),AZ=vr(),_Z=dr(),ine=Ir(),TZ=z(),ane=Kf(),nne=uZ(),Ru=zr().factory,sne=Or(),Lu=C(),une=fZ(),IZ=EZ();function one(){var r,e,t,i,a,n;if(arguments.length===0)e=Ru();else if(arguments.length===1){if(r=arguments[0],!SZ(r))throw new TypeError(Lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(Lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else{if(a=arguments[0],n=arguments[1],i=une(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!SZ(r))throw new TypeError(Lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AZ(r,"prng")){if(!OZ(r.prng))throw new TypeError(Lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else e=Ru()}return a===void 0?t=y:t=m,xt(t,"NAME","binomial"),r&&r.prng?(xt(t,"seed",null),xt(t,"seedLength",null),NZ(t,"state",_Z(null),ine),xt(t,"stateLength",null),xt(t,"byteLength",null),xt(t,"toJSON",_Z(null)),xt(t,"PRNG",e)):(Iu(t,"seed",u),Iu(t,"seedLength",o),NZ(t,"state",c,l),Iu(t,"stateLength",v),Iu(t,"byteLength",f),xt(t,"toJSON",p),xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=sne(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return IZ(e,a,n)}function y(g,d){return TZ(g)||TZ(d)||!ane(g)||!nne(d)?NaN:IZ(e,g,d)}}RZ.exports=one});var PZ=s((kBe,LZ)=>{"use strict";var vne=tc(),fne=vne();LZ.exports=fne});var MZ=s((CBe,jZ)=>{"use strict";var cne=G(),FZ=PZ(),lne=tc();cne(FZ,"factory",lne);jZ.exports=FZ});var BZ=s((VBe,xZ)=>{"use strict";var pne=Pr(),dne=br(),gne=lt(),mne=At(),yne=mi();function hne(r){var e,t;return e=!0,i;function i(){var a,n,u,o;if(e){do a=r(),n=r();while(a===0);return u=pne(-2*dne(a)),o=yne*n,t=u*mne(o),e=!1,u*gne(o)}return e=!0,t}}xZ.exports=hne});var CZ=s((UBe,kZ)=>{"use strict";var qne=Pr(),bne=br(),wne=At(),Ene=we(),Nne=wne(Ene);function Sne(r){var e=qne(-2*bne(r));return e*Nne}kZ.exports=Sne});var UZ=s((GBe,VZ)=>{"use strict";var One=Pr(),Ane=br(),_ne=At(),Tne=mi();function Ine(r){var e=One(-2*Ane(r)),t=Tne*r;return e*_ne(t)}VZ.exports=Ine});var ic=s((DBe,zZ)=>{"use strict";var We=G(),Pu=qr(),GZ=Sr(),Rne=mr(),Lne=yr(),Pne=de().isPrimitive,E0=vr(),Fne=qt(),DZ=zr().factory,HZ=dr(),jne=Ir(),Mne=Or(),N0=C(),xne=BZ(),Bne=CZ(),kne=UZ();function Cne(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!Rne(r))throw new TypeError(N0("invalid argument. Must provide an object. Value: `%s`.",r));if(E0(r,"copy")&&(a.copy=r.copy,!Pne(r.copy)))throw new TypeError(N0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(E0(r,"prng")){if(!Lne(r.prng))throw new TypeError(N0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(E0(r,"state")){if(a.state=r.state,!Fne(r.state))throw new TypeError(N0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(E0(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(N0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(i=DZ(a),e=i.normalized):a.seed=null:(i=DZ(a),e=i.normalized),t=xne(e),We(t,"NAME","box-muller"),a.seed===null?(We(t,"seed",null),We(t,"seedLength",null)):(Pu(t,"seed",n),Pu(t,"seedLength",u)),r&&r.prng?(GZ(t,"state",HZ(null),jne),We(t,"stateLength",null),We(t,"byteLength",null),We(t,"toJSON",HZ(null))):(GZ(t,"state",f,c),Pu(t,"stateLength",o),Pu(t,"byteLength",v),We(t,"toJSON",l)),We(t,"PRNG",e),E0(e,"MIN")?(We(t,"MIN",Bne(e.MIN)),We(t,"MAX",kne(e.MIN))):(We(t,"MIN",null),We(t,"MAX",null)),t;function n(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=Mne(i.state),p.params=[],p}}zZ.exports=Cne});var XZ=s((HBe,WZ)=>{"use strict";var Vne=ic(),Une=Vne();WZ.exports=Une});var ZZ=s((zBe,YZ)=>{"use strict";var Gne=G(),JZ=XZ(),Dne=ic();Gne(JZ,"factory",Dne);YZ.exports=JZ});var KZ=s((WBe,QZ)=>{"use strict";var Hne=Nr().isPrimitive,zne=Gr().isPrimitive,$Z=C(),Wne=oe();function Xne(r,e){return!Hne(r)||Wne(r)?new TypeError($Z("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zne(e)?null:new TypeError($Z("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}QZ.exports=Xne});var e$=s((XBe,r$)=>{"use strict";var Jne=i0(),Yne=we();function Zne(r,e,t){return e+t*Jne(Yne*(r()-.5))}r$.exports=Zne});var ac=s((JBe,v$)=>{"use strict";var Ii=G(),Fu=qr(),t$=Sr(),i$=mr(),a$=yr(),n$=vr(),s$=dr(),$ne=Ir(),u$=z(),an=_i().factory,Qne=Or(),ju=C(),Kne=KZ(),o$=e$();function r0e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=an();else if(arguments.length===1){if(t=arguments[0],!i$(t))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",t));if(n$(t,"prng")){if(!a$(t.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else{if(u=arguments[0],r=arguments[1],n=Kne(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!i$(t))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",t));if(n$(t,"prng")){if(!a$(t.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else e=an()}return u===void 0?a=g:a=y,i=e.PRNG,Ii(a,"NAME","cauchy"),t&&t.prng?(Ii(a,"seed",null),Ii(a,"seedLength",null),t$(a,"state",s$(null),$ne),Ii(a,"stateLength",null),Ii(a,"byteLength",null),Ii(a,"toJSON",s$(null))):(Fu(a,"seed",o),Fu(a,"seedLength",v),t$(a,"state",l,p),Fu(a,"stateLength",f),Fu(a,"byteLength",c),Ii(a,"toJSON",m)),Ii(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Qne(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return o$(e,u,r)}function g(d,h){return u$(d)||u$(h)||h<=0?NaN:o$(e,d,h)}}v$.exports=r0e});var c$=s((YBe,f$)=>{"use strict";var e0e=ac(),t0e=e0e();f$.exports=t0e});var d$=s((ZBe,p$)=>{"use strict";var i0e=G(),l$=c$(),a0e=ac();i0e(l$,"factory",a0e);p$.exports=l$});var nc=s(($Be,b$)=>{"use strict";var Ri=G(),Mu=qr(),g$=Sr(),n0e=Gr().isPrimitive,m$=mr(),y$=yr(),h$=vr(),q$=dr(),s0e=Ir(),u0e=z(),nn=tn().factory,o0e=Or(),xu=C();function v0e(){var r,e,t,i,a;if(arguments.length===0)r=nn();else if(arguments.length===1&&m$(arguments[0]))if(t=arguments[0],h$(t,"prng")){if(!y$(t.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=nn({prng:t.prng})}else r=nn(t);else{if(a=arguments[0],!n0e(a))throw new TypeError(xu("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!m$(t))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(h$(t,"prng")){if(!y$(t.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=nn(a/2,.5,{prng:t.prng})}else r=nn(a/2,.5,t)}else r=nn(a/2,.5)}return a===void 0?i=m:i=p,e=r.PRNG,Ri(i,"NAME","chisquare"),t&&t.prng?(Ri(i,"seed",null),Ri(i,"seedLength",null),g$(i,"state",q$(null),s0e),Ri(i,"stateLength",null),Ri(i,"byteLength",null),Ri(i,"toJSON",q$(null))):(Mu(i,"seed",n),Mu(i,"seedLength",u),g$(i,"state",f,c),Mu(i,"stateLength",o),Mu(i,"byteLength",v),Ri(i,"toJSON",l)),Ri(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=o0e(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return r()}function m(y){return u0e(y)||y<=0?NaN:r(y/2,.5)}}b$.exports=v0e});var E$=s((QBe,w$)=>{"use strict";var f0e=nc(),c0e=f0e();w$.exports=c0e});var S0=s((KBe,S$)=>{"use strict";var l0e=G(),N$=E$(),p0e=nc();l0e(N$,"factory",p0e);S$.exports=N$});var sc=s((rke,L$)=>{"use strict";var Li=G(),Bu=qr(),O$=Sr(),d0e=Gr().isPrimitive,A$=mr(),_$=yr(),T$=vr(),I$=dr(),g0e=Ir(),m0e=z(),sn=S0().factory,y0e=Or(),R$=Pr(),ku=C();function h0e(){var r,e,t,i,a;if(arguments.length===0)r=sn();else if(arguments.length===1&&A$(arguments[0]))if(t=arguments[0],T$(t,"prng")){if(!_$(t.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=sn({prng:t.prng})}else r=sn(t);else{if(a=arguments[0],!d0e(a))throw new TypeError(ku("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!A$(t))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",t));if(T$(t,"prng")){if(!_$(t.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=sn(a,{prng:t.prng})}else r=sn(a,t)}else r=sn(a)}return a===void 0?i=m:i=p,e=r.PRNG,Li(i,"NAME","chi"),t&&t.prng?(Li(i,"seed",null),Li(i,"seedLength",null),O$(i,"state",I$(null),g0e),Li(i,"stateLength",null),Li(i,"byteLength",null),Li(i,"toJSON",I$(null))):(Bu(i,"seed",n),Bu(i,"seedLength",u),O$(i,"state",f,c),Bu(i,"stateLength",o),Bu(i,"byteLength",v),Li(i,"toJSON",l)),Li(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=y0e(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return R$(r())}function m(y){return m0e(y)||y<=0?NaN:R$(r(y))}}L$.exports=h0e});var F$=s((eke,P$)=>{"use strict";var q0e=sc(),b0e=q0e();P$.exports=b0e});var x$=s((tke,M$)=>{"use strict";var w0e=G(),j$=F$(),E0e=sc();w0e(j$,"factory",E0e);M$.exports=j$});var C$=s((ike,k$)=>{"use strict";var N0e=Nr().isPrimitive,S0e=Gr().isPrimitive,B$=C(),O0e=oe();function A0e(r,e){return!N0e(r)||O0e(r)?new TypeError(B$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):S0e(e)?null:new TypeError(B$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}k$.exports=A0e});var U$=s((ake,V$)=>{"use strict";var uc=z(),_0e=s0(),T0e=we();function I0e(r,e,t){var i;return uc(r)||uc(e)||uc(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+_0e(i)/T0e)/2)}V$.exports=I0e});var H$=s((nke,D$)=>{"use strict";var G$=z();function R0e(r,e){return G$(r)||G$(e)?NaN:r<e?0:1}D$.exports=R0e});var X$=s((ske,W$)=>{"use strict";var L0e=dr(),z$=z();function P0e(r){if(z$(r))return L0e(NaN);return e;function e(t){return z$(t)?NaN:t<r?0:1}}W$.exports=P0e});var Cu=s((uke,Y$)=>{"use strict";var F0e=G(),J$=H$(),j0e=X$();F0e(J$,"factory",j0e);Y$.exports=J$});var $$=s((oke,Z$)=>{"use strict";var M0e=dr(),x0e=Cu().factory,oc=z(),B0e=s0(),k0e=we();function C0e(r,e){if(oc(r)||oc(e)||e<0)return M0e(NaN);if(e===0)return x0e(r);return t;function t(i){var a;return oc(i)?NaN:i<r-e?0:i>r+e?1:(a=(i-r)/e,(1+a+B0e(a)/k0e)/2)}}Z$.exports=C0e});var rQ=s((vke,K$)=>{"use strict";var V0e=G(),Q$=U$(),U0e=$$();V0e(Q$,"factory",U0e);K$.exports=Q$});var vc=s((fke,eQ)=>{"use strict";var G0e=rQ(),D0e=1e4,H0e=1e-12;function z0e(r,e,t){var i,a,n,u,o;for(o=1,i=e-t,a=e+t;o<D0e;){if(u=(i+a)/2,a-i<H0e)return u;n=G0e(u,e,t),r>n?i=u:a=u,o+=1}return u}eQ.exports=z0e});var iQ=s((cke,tQ)=>{"use strict";var fc=z(),W0e=vc();function X0e(r,e,t){return fc(e)||fc(t)||fc(r)||t<0||r<0||r>1?NaN:t===0?e:W0e(r,e,t)}tQ.exports=X0e});var nQ=s((lke,aQ)=>{"use strict";var J0e=z();function Y0e(r,e){return J0e(r)||r<0||r>1?NaN:e}aQ.exports=Y0e});var oQ=s((pke,uQ)=>{"use strict";var Z0e=dr(),sQ=z();function $0e(r){if(sQ(r))return Z0e(NaN);return e;function e(t){return sQ(t)||t<0||t>1?NaN:r}}uQ.exports=$0e});var cc=s((dke,fQ)=>{"use strict";var Q0e=G(),vQ=nQ(),K0e=oQ();Q0e(vQ,"factory",K0e);fQ.exports=vQ});var lQ=s((gke,cQ)=>{"use strict";var rse=dr(),ese=cc().factory,lc=z(),tse=vc();function ise(r,e){if(lc(r)||lc(e)||e<0)return rse(NaN);if(e===0)return ese(r);return t;function t(i){return lc(i)||i<0||i>1?NaN:tse(i,r,e)}}cQ.exports=ise});var gQ=s((mke,dQ)=>{"use strict";var ase=G(),pQ=iQ(),nse=lQ();ase(pQ,"factory",nse);dQ.exports=pQ});var yQ=s((yke,mQ)=>{"use strict";var sse=gQ();function use(r,e,t){return sse(r(),e,t)}mQ.exports=use});var pc=s((hke,OQ)=>{"use strict";var Bt=G(),Vu=qr(),hQ=Sr(),qQ=mr(),bQ=yr(),wQ=vr(),EQ=dr(),ose=Ir(),Uu=zr().factory,NQ=z(),vse=Or(),Gu=C(),fse=C$(),SQ=yQ();function cse(){var r,e,t,i,a,n;if(arguments.length===0)e=Uu();else if(arguments.length===1){if(r=arguments[0],!qQ(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wQ(r,"prng")){if(!bQ(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else{if(a=arguments[0],n=arguments[1],i=fse(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!qQ(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wQ(r,"prng")){if(!bQ(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else e=Uu()}return a===void 0?t=y:t=m,Bt(t,"NAME","cosine"),r&&r.prng?(Bt(t,"seed",null),Bt(t,"seedLength",null),hQ(t,"state",EQ(null),ose),Bt(t,"stateLength",null),Bt(t,"byteLength",null),Bt(t,"toJSON",EQ(null)),Bt(t,"PRNG",e)):(Vu(t,"seed",u),Vu(t,"seedLength",o),hQ(t,"state",c,l),Vu(t,"stateLength",v),Vu(t,"byteLength",f),Bt(t,"toJSON",p),Bt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=vse(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return SQ(e,a,n)}function y(g,d){return NQ(g)||NQ(d)||d<=0?NaN:SQ(e,g,d)}}OQ.exports=cse});var _Q=s((qke,AQ)=>{"use strict";var lse=pc(),pse=lse();AQ.exports=pse});var RQ=s((bke,IQ)=>{"use strict";var dse=G(),TQ=_Q(),gse=pc();dse(TQ,"factory",gse);IQ.exports=TQ});var jQ=s((wke,FQ)=>{"use strict";var LQ=ye().isPrimitive,dc=C(),PQ=oe();function mse(r,e){return!LQ(r)||PQ(r)?new TypeError(dc("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!LQ(e)||PQ(e)?new TypeError(dc("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(dc("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}FQ.exports=mse});var BQ=s((Eke,xQ)=>{"use strict";var gc=aa(),un=Ur();function MQ(r,e,t){var i,a,n,u,o,v,f,c,l;if(n=t-e,n===0)return e;if(f=r.MIN,c=r.MAX,a=c-f,a===n)return r()-f+e;if(a<n)for(u=0;;){for(n===gc?(u=un(n/(a+1)),n%(a+1)===a&&(u+=1)):u=un((n+1)/(a+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*a===n-v+1)return i;v*=a+1}if(l=MQ(r,0,un(n/v)),!(l>gc/v)&&(l*=v,i+=l,!(i>n)))return i+e}for(a===gc?(o=un(a/(n+1)),a%(n+1)===n&&(o+=1)):o=un((a+1)/(n+1));;)if(i=r()-f,i=un(i/o),i<=n)return i+e}xQ.exports=MQ});var mc=s((Nke,zQ)=>{"use strict";var kt=G(),Du=qr(),kQ=Sr(),CQ=mr(),VQ=yr(),UQ=vr(),GQ=dr(),yse=Ir(),Hu=zr().factory,DQ=z(),on=Ee(),hse=Or(),Pi=C(),qse=jQ(),HQ=BQ();function bse(){var r,e,t,i,a,n;if(arguments.length===0)e=Hu();else if(arguments.length===1){if(r=arguments[0],!CQ(r))throw new TypeError(Pi("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UQ(r,"prng")){if(!VQ(r.prng))throw new TypeError(Pi("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!on(e.MIN))throw new TypeError(Pi("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!on(e.MAX))throw new TypeError(Pi("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Hu(r)}else{if(a=arguments[0],n=arguments[1],i=qse(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!CQ(r))throw new TypeError(Pi("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UQ(r,"prng")){if(!VQ(r.prng))throw new TypeError(Pi("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!on(e.MIN))throw new TypeError(Pi("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!on(e.MAX))throw new TypeError(Pi("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Hu(r)}else e=Hu()}return a===void 0?t=y:t=m,kt(t,"NAME","discrete-uniform"),r&&r.prng?(kt(t,"seed",null),kt(t,"seedLength",null),kQ(t,"state",GQ(null),yse),kt(t,"stateLength",null),kt(t,"byteLength",null),kt(t,"toJSON",GQ(null)),kt(t,"PRNG",e)):(Du(t,"seed",u),Du(t,"seedLength",o),kQ(t,"state",c,l),Du(t,"stateLength",v),Du(t,"byteLength",f),kt(t,"toJSON",p),kt(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=hse(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return HQ(e,a,n)}function y(g,d){return DQ(g)||DQ(d)||!on(g)||!on(d)||g>d?NaN:HQ(e,g,d)}}zQ.exports=bse});var XQ=s((Ske,WQ)=>{"use strict";var wse=mc(),Ese=wse();WQ.exports=Ese});var ZQ=s((Oke,YQ)=>{"use strict";var Nse=G(),JQ=XQ(),Sse=mc();Nse(JQ,"factory",Sse);YQ.exports=JQ});var KQ=s((Ake,QQ)=>{"use strict";var Ose=Gr().isPrimitive,Ase=nt().isPrimitive,$Q=C();function _se(r,e){return Ase(r)?Ose(e)?null:new TypeError($Q("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError($Q("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}QQ.exports=_se});var eK=s((_ke,rK)=>{"use strict";var Tse=br();function Ise(r,e,t){var i,a;for(i=1,a=0;a<e;a++)i*=r();return-(1/t)*Tse(i)}rK.exports=Ise});var yc=s((Tke,vK)=>{"use strict";var Ct=G(),zu=qr(),tK=Sr(),iK=mr(),aK=yr(),nK=vr(),sK=dr(),Rse=Ir(),Wu=zr().factory,uK=z(),Lse=Kf(),Pse=Or(),Xu=C(),Fse=KQ(),oK=eK();function jse(){var r,e,t,i,a,n;if(arguments.length===0)e=Wu();else if(arguments.length===1){if(t=arguments[0],!iK(t))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nK(t,"prng")){if(!aK(t.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Wu(t)}else{if(n=arguments[0],r=arguments[1],a=Fse(n,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!iK(t))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(nK(t,"prng")){if(!aK(t.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Wu(t)}else e=Wu()}return n===void 0?i=y:i=m,Ct(i,"NAME","erlang"),t&&t.prng?(Ct(i,"seed",null),Ct(i,"seedLength",null),tK(i,"state",sK(null),Rse),Ct(i,"stateLength",null),Ct(i,"byteLength",null),Ct(i,"toJSON",sK(null)),Ct(i,"PRNG",e)):(zu(i,"seed",u),zu(i,"seedLength",o),tK(i,"state",c,l),zu(i,"stateLength",v),zu(i,"byteLength",f),Ct(i,"toJSON",p),Ct(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Pse(e.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return oK(e,n,r)}function y(g,d){return uK(g)||uK(d)||!Lse(g)||d<=0?NaN:oK(e,g,d)}}vK.exports=jse});var cK=s((Ike,fK)=>{"use strict";var Mse=yc(),xse=Mse();fK.exports=xse});var dK=s((Rke,pK)=>{"use strict";var Bse=G(),lK=cK(),kse=yc();Bse(lK,"factory",kse);pK.exports=lK});var mK=s((Lke,gK)=>{"use strict";var Cse=br();function Vse(r,e){return-Cse(1-r())/e}gK.exports=Vse});var hc=s((Pke,NK)=>{"use strict";var Vt=G(),Ju=qr(),yK=Sr(),Use=Gr().isPrimitive,hK=mr(),qK=yr(),bK=vr(),wK=dr(),Gse=Ir(),Yu=zr().factory,Dse=z(),Hse=Or(),Zu=C(),EK=mK();function zse(){var r,e,t,i;if(arguments.length===0)t=Yu();else if(arguments.length===1&&hK(arguments[0]))if(e=arguments[0],bK(e,"prng")){if(!qK(e.prng))throw new TypeError(Zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Yu(e);else{if(r=arguments[0],!Use(r))throw new TypeError(Zu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!hK(e))throw new TypeError(Zu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(bK(e,"prng")){if(!qK(e.prng))throw new TypeError(Zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Yu(e)}else t=Yu()}return r===void 0?i=p:i=l,Vt(i,"NAME","exponential"),e&&e.prng?(Vt(i,"seed",null),Vt(i,"seedLength",null),yK(i,"state",wK(null),Gse),Vt(i,"stateLength",null),Vt(i,"byteLength",null),Vt(i,"toJSON",wK(null)),Vt(i,"PRNG",t)):(Ju(i,"seed",a),Ju(i,"seedLength",n),yK(i,"state",v,f),Ju(i,"stateLength",u),Ju(i,"byteLength",o),Vt(i,"toJSON",c),Vt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Hse(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return EK(t,r)}function p(m){return Dse(m)||m<=0?NaN:EK(t,m)}}NK.exports=zse});var OK=s((Fke,SK)=>{"use strict";var Wse=hc(),Xse=Wse();SK.exports=Xse});var TK=s((jke,_K)=>{"use strict";var Jse=G(),AK=OK(),Yse=hc();Jse(AK,"factory",Yse);_K.exports=AK});var PK=s((Mke,LK)=>{"use strict";var IK=Gr().isPrimitive,RK=C();function Zse(r,e){return IK(r)?IK(e)?null:new TypeError(RK("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(RK("invalid argument. First argument must be a positive number. Value: `%s`.",r))}LK.exports=Zse});var jK=s((xke,FK)=>{"use strict";function $se(r,e,t){var i=r(e)/e,a=r(t)/t;return i/a}FK.exports=$se});var qc=s((Bke,GK)=>{"use strict";var Fi=G(),$u=qr(),MK=Sr(),xK=mr(),BK=yr(),kK=vr(),CK=dr(),Qse=Ir(),vn=S0().factory,VK=z(),Kse=Or(),Qu=C(),rue=PK(),UK=jK();function eue(){var r,e,t,i,a,n,u;if(arguments.length===0)r=vn();else if(arguments.length===1){if(e=arguments[0],!xK(e))throw new TypeError(Qu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(kK(e,"prng")){if(!BK(e.prng))throw new TypeError(Qu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=vn({prng:e.prng})}else r=vn(e)}else{if(n=arguments[0],u=arguments[1],a=rue(n,u),a)throw a;if(arguments.length>2){if(e=arguments[2],!xK(e))throw new TypeError(Qu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(kK(e,"prng")){if(!BK(e.prng))throw new TypeError(Qu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=vn({prng:e.prng})}else r=vn(e)}else r=vn()}return n===void 0?i=g:i=y,t=r.PRNG,Fi(i,"NAME","f"),e&&e.prng?(Fi(i,"seed",null),Fi(i,"seedLength",null),MK(i,"state",CK(null),Qse),Fi(i,"stateLength",null),Fi(i,"byteLength",null),Fi(i,"toJSON",CK(null))):($u(i,"seed",o),$u(i,"seedLength",v),MK(i,"state",l,p),$u(i,"stateLength",f),$u(i,"byteLength",c),Fi(i,"toJSON",m)),Fi(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Kse(t.state),n===void 0?d.params=[]:d.params=[n,u],d}function y(){return UK(r,n,u)}function g(d,h){return VK(d)||VK(h)||d<=0||h<=0?NaN:UK(r,d,h)}}GK.exports=eue});var HK=s((kke,DK)=>{"use strict";var tue=qc(),iue=tue();DK.exports=iue});var XK=s((Cke,WK)=>{"use strict";var aue=G(),zK=HK(),nue=qc();aue(zK,"factory",nue);WK.exports=zK});var ZK=s((Vke,YK)=>{"use strict";var JK=Gr().isPrimitive,sue=Nr().isPrimitive,bc=oe(),wc=C();function uue(r,e,t){return!JK(r)||bc(r)?new TypeError(wc("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!JK(e)||bc(e)?new TypeError(wc("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!sue(t)||bc(t)?new TypeError(wc("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}YK.exports=uue});var QK=s((Uke,$K)=>{"use strict";var oue=Vr(),vue=br();function fue(r,e,t,i){return i+t*oue(-vue(r()),-1/e)}$K.exports=fue});var Nc=s((Gke,nrr)=>{"use strict";var Ut=G(),Ku=qr(),KK=Sr(),rrr=mr(),err=yr(),trr=vr(),irr=dr(),cue=Ir(),ro=zr().factory,Ec=z(),lue=Or(),eo=C(),pue=ZK(),arr=QK();function due(){var r,e,t,i,a,n,u;if(arguments.length===0)t=ro();else if(arguments.length===1){if(e=arguments[0],!rrr(e))throw new TypeError(eo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(trr(e,"prng")){if(!err(e.prng))throw new TypeError(eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ro(e)}else{if(r=arguments[0],n=arguments[1],u=arguments[2],a=pue(r,n,u),a)throw a;if(arguments.length>3){if(e=arguments[3],!rrr(e))throw new TypeError(eo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(trr(e,"prng")){if(!err(e.prng))throw new TypeError(eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ro(e)}else t=ro()}return r===void 0?i=g:i=y,Ut(i,"NAME","frechet"),e&&e.prng?(Ut(i,"seed",null),Ut(i,"seedLength",null),KK(i,"state",irr(null),cue),Ut(i,"stateLength",null),Ut(i,"byteLength",null),Ut(i,"toJSON",irr(null)),Ut(i,"PRNG",t)):(Ku(i,"seed",o),Ku(i,"seedLength",v),KK(i,"state",l,p),Ku(i,"stateLength",f),Ku(i,"byteLength",c),Ut(i,"toJSON",m),Ut(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=lue(t.state),r===void 0?d.params=[]:d.params=[r,n,u],d}function y(){return arr(t,r,n,u)}function g(d,h,q){return Ec(d)||Ec(h)||Ec(q)||d<=0||h<=0?NaN:arr(t,d,h,q)}}nrr.exports=due});var urr=s((Dke,srr)=>{"use strict";var gue=Nc(),mue=gue();srr.exports=mue});var frr=s((Hke,vrr)=>{"use strict";var yue=G(),orr=urr(),hue=Nc();yue(orr,"factory",hue);vrr.exports=orr});var prr=s((zke,lrr)=>{"use strict";var que=Ur(),crr=br();function bue(r,e){var t=r();return t===0&&(t=r()),que(crr(t)/crr(1-e))}lrr.exports=bue});var Sc=s((Wke,brr)=>{"use strict";var Gt=G(),to=qr(),drr=Sr(),grr=mr(),wue=Fn().isPrimitive,mrr=yr(),yrr=vr(),hrr=dr(),Eue=Ir(),io=zr().factory,Nue=z(),Sue=Or(),ao=C(),qrr=prr();function Oue(){var r,e,t,i;if(arguments.length===0)e=io();else if(arguments.length===1&&grr(arguments[0]))if(r=arguments[0],yrr(r,"prng")){if(!mrr(r.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=io(r);else{if(i=arguments[0],!wue(i))throw new TypeError(ao("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!grr(r))throw new TypeError(ao("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yrr(r,"prng")){if(!mrr(r.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=io(r)}else e=io()}return i===void 0?t=p:t=l,Gt(t,"NAME","geometric"),r&&r.prng?(Gt(t,"seed",null),Gt(t,"seedLength",null),drr(t,"state",hrr(null),Eue),Gt(t,"stateLength",null),Gt(t,"byteLength",null),Gt(t,"toJSON",hrr(null)),Gt(t,"PRNG",e)):(to(t,"seed",a),to(t,"seedLength",n),drr(t,"state",v,f),to(t,"stateLength",u),to(t,"byteLength",o),Gt(t,"toJSON",c),Gt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Sue(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return qrr(e,i)}function p(m){return Nue(m)||m<0||m>1?NaN:qrr(e,m)}}brr.exports=Oue});var Err=s((Xke,wrr)=>{"use strict";var Aue=Sc(),_ue=Aue();wrr.exports=_ue});var Orr=s((Jke,Srr)=>{"use strict";var Tue=G(),Nrr=Err(),Iue=Sc();Tue(Nrr,"factory",Iue);Srr.exports=Nrr});var Trr=s((Yke,_rr)=>{"use strict";var Rue=Nr().isPrimitive,Lue=Gr().isPrimitive,Arr=C(),Pue=oe();function Fue(r,e){return!Rue(r)||Pue(r)?new TypeError(Arr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Lue(e)?null:new TypeError(Arr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_rr.exports=Fue});var Lrr=s((Zke,Rrr)=>{"use strict";var Irr=br();function jue(r,e,t){return e-t*Irr(-Irr(r()))}Rrr.exports=jue});var Oc=s(($ke,Crr)=>{"use strict";var Dt=G(),no=qr(),Prr=Sr(),Frr=mr(),jrr=yr(),Mrr=vr(),xrr=dr(),Mue=Ir(),so=zr().factory,Brr=z(),xue=Or(),uo=C(),Bue=Trr(),krr=Lrr();function kue(){var r,e,t,i,a,n;if(arguments.length===0)t=so();else if(arguments.length===1){if(e=arguments[0],!Frr(e))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Mrr(e,"prng")){if(!jrr(e.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=so(e)}else{if(n=arguments[0],r=arguments[1],a=Bue(n,r),a)throw a;if(arguments.length>2){if(e=arguments[2],!Frr(e))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Mrr(e,"prng")){if(!jrr(e.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=so(e)}else t=so()}return n===void 0?i=y:i=m,Dt(i,"NAME","gumbel"),e&&e.prng?(Dt(i,"seed",null),Dt(i,"seedLength",null),Prr(i,"state",xrr(null),Mue),Dt(i,"stateLength",null),Dt(i,"byteLength",null),Dt(i,"toJSON",xrr(null)),Dt(i,"PRNG",t)):(no(i,"seed",u),no(i,"seedLength",o),Prr(i,"state",c,l),no(i,"stateLength",v),no(i,"byteLength",f),Dt(i,"toJSON",p),Dt(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=xue(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return krr(t,n,r)}function y(g,d){return Brr(g)||Brr(d)||d<=0?NaN:krr(t,g,d)}}Crr.exports=kue});var Urr=s((Qke,Vrr)=>{"use strict";var Cue=Oc(),Vue=Cue();Vrr.exports=Vue});var Hrr=s((Kke,Drr)=>{"use strict";var Uue=G(),Grr=Urr(),Gue=Oc();Uue(Grr,"factory",Gue);Drr.exports=Grr});var Wrr=s((rCe,zrr)=>{"use strict";var Ac=be().isPrimitive,O0=C();function Due(r,e,t){return Ac(r)?Ac(e)?Ac(t)?t>r?new RangeError(O0("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(O0("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(O0("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(O0("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(O0("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}zrr.exports=Due});var Xrr=s((eCe,Hue)=>{Hue.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var Yrr=s((tCe,Jrr)=>{"use strict";var zue=z(),Wue=Ee(),Xue=Ja(),Jue=hr(),Yue=Xrr(),Zue=170;function $ue(r){return zue(r)?NaN:Wue(r)?r<0?NaN:r<=Zue?Yue[r]:Jue:Xue(r+1)}Jrr.exports=$ue});var $rr=s((iCe,Zrr)=>{"use strict";var Que=Yrr();Zrr.exports=Que});var Krr=s((aCe,Qrr)=>{"use strict";var ji=$rr();function Kue(r,e,t,i){var a,n,u;for(i<t?(a=ji(t)*ji(e+t-i)/(ji(e+t)*ji(t-i)),u=0):(a=ji(e)*ji(i)/(ji(i-t)*ji(e+t)),u=i-t),n=r();n>a;)n-=a,a*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}Qrr.exports=Kue});var eer=s((nCe,rer)=>{"use strict";var oo=Krr();function roe(r,e,t,i){var a,n,u,o;return i>e/2?(u=e-i,2*t<=e?(a=t,n=e-t,o=oo(r,a,n,u),t-o):(n=t,a=e-t,o=oo(r,a,n,u),i-e+t+o)):(u=i,2*t<=e?(a=t,n=e-t,o=oo(r,a,n,u),o):(a=e-t,n=t,o=oo(r,a,n,u),i-o))}rer.exports=roe});var Tc=s((sCe,ver)=>{"use strict";var Ht=G(),vo=qr(),ter=Sr(),ier=mr(),aer=yr(),ner=vr(),ser=dr(),eoe=Ir(),fo=zr().factory,_c=u3(),uer=hr(),toe=Or(),co=C(),ioe=Wrr(),oer=eer();function aoe(){var r,e,t,i,a,n,u;if(arguments.length===0)e=fo();else if(arguments.length===1){if(r=arguments[0],!ier(r))throw new TypeError(co("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ner(r,"prng")){if(!aer(r.prng))throw new TypeError(co("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=fo(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=ioe(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!ier(r))throw new TypeError(co("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ner(r,"prng")){if(!aer(r.prng))throw new TypeError(co("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=fo(r)}else e=fo()}return a===void 0?t=g:t=y,Ht(t,"NAME","hypergeometric"),r&&r.prng?(Ht(t,"seed",null),Ht(t,"seedLength",null),ter(t,"state",ser(null),eoe),Ht(t,"stateLength",null),Ht(t,"byteLength",null),Ht(t,"toJSON",ser(null)),Ht(t,"PRNG",e)):(vo(t,"seed",o),vo(t,"seedLength",v),ter(t,"state",l,p),vo(t,"stateLength",f),vo(t,"byteLength",c),Ht(t,"toJSON",m),Ht(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=toe(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return oer(e,a,n,u)}function g(d,h,q){return d===uer||h===uer||!_c(d)||!_c(h)||!_c(q)||q>d?NaN:oer(e,d,h,q)}}ver.exports=aoe});var cer=s((uCe,fer)=>{"use strict";var noe=Tc(),soe=noe();fer.exports=soe});var der=s((oCe,per)=>{"use strict";var uoe=G(),ler=cer(),ooe=Tc();uoe(ler,"factory",ooe);per.exports=ler});var her=s((vCe,yer)=>{"use strict";var ger=Gr().isPrimitive,mer=C();function voe(r,e){return ger(r)?ger(e)?null:new TypeError(mer("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(mer("invalid argument. First argument must be a positive number. Value: `%s`.",r))}yer.exports=voe});var Ic=s((fCe,Oer)=>{"use strict";var Mi=G(),lo=qr(),qer=Sr(),ber=mr(),wer=yr(),Eer=vr(),Ner=dr(),foe=Ir(),fn=tn().factory,Ser=z(),coe=Or(),po=C(),loe=her();function poe(){var r,e,t,i,a,n,u;if(arguments.length===0)r=fn();else if(arguments.length===1){if(i=arguments[0],!ber(i))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Eer(i,"prng")){if(!wer(i.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=fn({prng:i.prng})}else r=fn(i)}else{if(e=arguments[0],t=arguments[1],u=loe(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!ber(i))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Eer(i,"prng")){if(!wer(i.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=fn(e,t,{prng:i.prng})}else r=fn(e,t,i)}else r=fn(e,t)}return e===void 0?n=g:n=y,a=r.PRNG,Mi(n,"NAME","invgamma"),i&&i.prng?(Mi(n,"seed",null),Mi(n,"seedLength",null),qer(n,"state",Ner(null),foe),Mi(n,"stateLength",null),Mi(n,"byteLength",null),Mi(n,"toJSON",Ner(null))):(lo(n,"seed",o),lo(n,"seedLength",v),qer(n,"state",l,p),lo(n,"stateLength",f),lo(n,"byteLength",c),Mi(n,"toJSON",m)),Mi(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=coe(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return 1/r()}function g(d,h){return Ser(d)||Ser(h)||d<=0||h<=0?NaN:1/r(d,h)}}Oer.exports=poe});var _er=s((cCe,Aer)=>{"use strict";var doe=Ic(),goe=doe();Aer.exports=goe});var Rer=s((lCe,Ier)=>{"use strict";var moe=G(),Ter=_er(),yoe=Ic();moe(Ter,"factory",yoe);Ier.exports=Ter});var jer=s((pCe,Fer)=>{"use strict";var Ler=Gr().isPrimitive,Per=C();function hoe(r,e){return Ler(r)?Ler(e)?null:new TypeError(Per("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Per("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Fer.exports=hoe});var Ber=s((dCe,xer)=>{"use strict";var Mer=Vr();function qoe(r,e,t){var i=r();return Mer(1-Mer(1-i,1/t),1/e)}xer.exports=qoe});var Rc=s((gCe,zer)=>{"use strict";var zt=G(),go=qr(),ker=Sr(),Cer=mr(),Ver=yr(),Uer=vr(),Ger=dr(),boe=Ir(),mo=zr().factory,Der=z(),woe=Or(),yo=C(),Eoe=jer(),Her=Ber();function Noe(){var r,e,t,i,a,n;if(arguments.length===0)e=mo();else if(arguments.length===1){if(r=arguments[0],!Cer(r))throw new TypeError(yo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Uer(r,"prng")){if(!Ver(r.prng))throw new TypeError(yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=mo(r)}else{if(a=arguments[0],n=arguments[1],i=Eoe(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Cer(r))throw new TypeError(yo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Uer(r,"prng")){if(!Ver(r.prng))throw new TypeError(yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=mo(r)}else e=mo()}return a===void 0?t=y:t=m,zt(t,"NAME","kumaraswamy"),r&&r.prng?(zt(t,"seed",null),zt(t,"seedLength",null),ker(t,"state",Ger(null),boe),zt(t,"stateLength",null),zt(t,"byteLength",null),zt(t,"toJSON",Ger(null)),zt(t,"PRNG",e)):(go(t,"seed",u),go(t,"seedLength",o),ker(t,"state",c,l),go(t,"stateLength",v),go(t,"byteLength",f),zt(t,"toJSON",p),zt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=woe(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Her(e,a,n)}function y(g,d){return Der(g)||Der(d)||g<=0||d<=0?NaN:Her(e,g,d)}}zer.exports=Noe});var Xer=s((mCe,Wer)=>{"use strict";var Soe=Rc(),Ooe=Soe();Wer.exports=Ooe});var Zer=s((yCe,Yer)=>{"use strict";var Aoe=G(),Jer=Xer(),_oe=Rc();Aoe(Jer,"factory",_oe);Yer.exports=Jer});var Ker=s((hCe,Qer)=>{"use strict";var Toe=Nr().isPrimitive,Ioe=Gr().isPrimitive,$er=C(),Roe=oe();function Loe(r,e){return!Toe(r)||Roe(r)?new TypeError($er("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ioe(e)?null:new TypeError($er("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Qer.exports=Loe});var etr=s((qCe,rtr)=>{"use strict";var Poe=Au(),Foe=Dr(),joe=br();function Moe(r,e,t){var i=r()-.5;return e-t*Poe(i)*joe(1-2*Foe(i))}rtr.exports=Moe});var Lc=s((bCe,vtr)=>{"use strict";var Wt=G(),ho=qr(),ttr=Sr(),itr=mr(),atr=yr(),ntr=vr(),str=dr(),xoe=Ir(),qo=zr().factory,utr=z(),Boe=Or(),bo=C(),koe=Ker(),otr=etr();function Coe(){var r,e,t,i,a,n;if(arguments.length===0)e=qo();else if(arguments.length===1){if(r=arguments[0],!itr(r))throw new TypeError(bo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ntr(r,"prng")){if(!atr(r.prng))throw new TypeError(bo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qo(r)}else{if(a=arguments[0],n=arguments[1],i=koe(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!itr(r))throw new TypeError(bo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ntr(r,"prng")){if(!atr(r.prng))throw new TypeError(bo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qo(r)}else e=qo()}return a===void 0?t=y:t=m,Wt(t,"NAME","laplace"),r&&r.prng?(Wt(t,"seed",null),Wt(t,"seedLength",null),ttr(t,"state",str(null),xoe),Wt(t,"stateLength",null),Wt(t,"byteLength",null),Wt(t,"toJSON",str(null)),Wt(t,"PRNG",e)):(ho(t,"seed",u),ho(t,"seedLength",o),ttr(t,"state",c,l),ho(t,"stateLength",v),ho(t,"byteLength",f),Wt(t,"toJSON",p),Wt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Boe(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return otr(e,a,n)}function y(g,d){return utr(g)||utr(d)||d<=0?NaN:otr(e,g,d)}}vtr.exports=Coe});var ctr=s((wCe,ftr)=>{"use strict";var Voe=Lc(),Uoe=Voe();ftr.exports=Uoe});var dtr=s((ECe,ptr)=>{"use strict";var Goe=G(),ltr=ctr(),Doe=Lc();Goe(ltr,"factory",Doe);ptr.exports=ltr});var ytr=s((NCe,mtr)=>{"use strict";var Hoe=Nr().isPrimitive,zoe=Gr().isPrimitive,gtr=C(),Woe=oe();function Xoe(r,e){return!Hoe(r)||Woe(r)?new TypeError(gtr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zoe(e)?null:new TypeError(gtr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}mtr.exports=Xoe});var qtr=s((SCe,htr)=>{"use strict";function Joe(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}htr.exports=Joe});var wtr=s((OCe,btr)=>{"use strict";function Yoe(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}btr.exports=Yoe});var Ntr=s((ACe,Etr)=>{"use strict";function Zoe(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Etr.exports=Zoe});var Otr=s((_Ce,Str)=>{"use strict";function $oe(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Str.exports=$oe});var _tr=s((TCe,Atr)=>{"use strict";function Qoe(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Atr.exports=Qoe});var Ltr=s((ICe,Rtr)=>{"use strict";var Koe=z(),Ttr=Pr(),Itr=br(),r1e=hr(),e1e=Rr(),t1e=qtr(),i1e=wtr(),a1e=Ntr(),n1e=Otr(),s1e=_tr(),u1e=.08913147449493408,o1e=2.249481201171875,v1e=.807220458984375,f1e=.9399557113647461,c1e=.9836282730102539;function l1e(r){var e,t,i,a,n,u;return Koe(r)?NaN:r===1?r1e:r===-1?e1e:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),a=1-t,t<=.5?(n=t*(t+10),u=t1e(t),e*(n*u1e+n*u)):a>=.25?(n=Ttr(-2*Itr(a)),a-=.25,u=i1e(a),e*(n/(o1e+u))):(a=Ttr(-Itr(a)),a<3?(i=a-1.125,u=a1e(i),e*(v1e*a+u*a)):a<6?(i=a-3,u=n1e(i),e*(f1e*a+u*a)):(i=a-6,u=s1e(i),e*(c1e*a+u*a))))}Rtr.exports=l1e});var Pc=s((RCe,Ptr)=>{"use strict";var p1e=Ltr();Ptr.exports=p1e});var jtr=s((LCe,Ftr)=>{"use strict";var d1e=Pc(),Fc=z(),g1e=Pr();function m1e(r,e,t){var i,a;return Fc(e)||Fc(t)||Fc(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,a=t*g1e(2),i+a*d1e(2*r-1))}Ftr.exports=m1e});var xtr=s((PCe,Mtr)=>{"use strict";var y1e=dr(),h1e=cc().factory,q1e=Pc(),jc=z(),b1e=Pr();function w1e(r,e){var t,i;if(jc(r)||jc(e)||e<0)return y1e(NaN);return e===0&&h1e(r),t=r,i=e*b1e(2),a;function a(n){return jc(n)||n<0||n>1?NaN:t+i*q1e(2*n-1)}}Mtr.exports=w1e});var Mc=s((FCe,ktr)=>{"use strict";var E1e=G(),Btr=jtr(),N1e=xtr();E1e(Btr,"factory",N1e);ktr.exports=Btr});var Vtr=s((jCe,Ctr)=>{"use strict";var S1e=Mc();function O1e(r,e,t){var i=S1e(1-r()/2,0,1);return e+t/(i*i)}Ctr.exports=O1e});var xc=s((MCe,Jtr)=>{"use strict";var Xt=G(),wo=qr(),Utr=Sr(),Gtr=mr(),Dtr=yr(),Htr=vr(),ztr=dr(),A1e=Ir(),Eo=zr().factory,Wtr=z(),_1e=Or(),No=C(),T1e=ytr(),Xtr=Vtr();function I1e(){var r,e,t,i,a,n;if(arguments.length===0)e=Eo();else if(arguments.length===1){if(r=arguments[0],!Gtr(r))throw new TypeError(No("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Htr(r,"prng")){if(!Dtr(r.prng))throw new TypeError(No("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eo(r)}else{if(a=arguments[0],n=arguments[1],i=T1e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Gtr(r))throw new TypeError(No("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Htr(r,"prng")){if(!Dtr(r.prng))throw new TypeError(No("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eo(r)}else e=Eo()}return a===void 0?t=y:t=m,Xt(t,"NAME","levy"),r&&r.prng?(Xt(t,"seed",null),Xt(t,"seedLength",null),Utr(t,"state",ztr(null),A1e),Xt(t,"stateLength",null),Xt(t,"byteLength",null),Xt(t,"toJSON",ztr(null)),Xt(t,"PRNG",e)):(wo(t,"seed",u),wo(t,"seedLength",o),Utr(t,"state",c,l),wo(t,"stateLength",v),wo(t,"byteLength",f),Xt(t,"toJSON",p),Xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=_1e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Xtr(e,a,n)}function y(g,d){return Wtr(g)||Wtr(d)||d<=0?NaN:Xtr(e,g,d)}}Jtr.exports=I1e});var Ztr=s((xCe,Ytr)=>{"use strict";var R1e=xc(),L1e=R1e();Ytr.exports=L1e});var Ktr=s((BCe,Qtr)=>{"use strict";var P1e=G(),$tr=Ztr(),F1e=xc();P1e($tr,"factory",F1e);Qtr.exports=$tr});var tir=s((kCe,eir)=>{"use strict";var j1e=Nr().isPrimitive,M1e=Gr().isPrimitive,x1e=oe(),rir=C();function B1e(r,e){return!j1e(r)||x1e(r)?new TypeError(rir("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):M1e(e)?null:new TypeError(rir("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}eir.exports=B1e});var air=s((CCe,iir)=>{"use strict";var k1e=br();function C1e(r,e,t){var i=r();return e+t*k1e(i/(1-i))}iir.exports=C1e});var Bc=s((VCe,lir)=>{"use strict";var Jt=G(),So=qr(),nir=Sr(),sir=mr(),uir=yr(),oir=vr(),vir=dr(),V1e=Ir(),Oo=zr().factory,fir=z(),U1e=Or(),Ao=C(),G1e=tir(),cir=air();function D1e(){var r,e,t,i,a,n;if(arguments.length===0)e=Oo();else if(arguments.length===1){if(r=arguments[0],!sir(r))throw new TypeError(Ao("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oir(r,"prng")){if(!uir(r.prng))throw new TypeError(Ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Oo(r)}else{if(a=arguments[0],n=arguments[1],i=G1e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!sir(r))throw new TypeError(Ao("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oir(r,"prng")){if(!uir(r.prng))throw new TypeError(Ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Oo(r)}else e=Oo()}return a===void 0?t=y:t=m,Jt(t,"NAME","logistic"),r&&r.prng?(Jt(t,"seed",null),Jt(t,"seedLength",null),nir(t,"state",vir(null),V1e),Jt(t,"stateLength",null),Jt(t,"byteLength",null),Jt(t,"toJSON",vir(null)),Jt(t,"PRNG",e)):(So(t,"seed",u),So(t,"seedLength",o),nir(t,"state",c,l),So(t,"stateLength",v),So(t,"byteLength",f),Jt(t,"toJSON",p),Jt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=U1e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return cir(e,a,n)}function y(g,d){return fir(g)||fir(d)||d<=0?NaN:cir(e,g,d)}}lir.exports=D1e});var dir=s((UCe,pir)=>{"use strict";var H1e=Bc(),z1e=H1e();pir.exports=z1e});var yir=s((GCe,mir)=>{"use strict";var W1e=G(),gir=dir(),X1e=Bc();W1e(gir,"factory",X1e);mir.exports=gir});var bir=s((DCe,qir)=>{"use strict";var J1e=Nr().isPrimitive,Y1e=Gr().isPrimitive,hir=C(),Z1e=oe();function $1e(r,e){return!J1e(r)||Z1e(r)?new TypeError(hir("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Y1e(e)?null:new TypeError(hir("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}qir.exports=$1e});var Eir=s((HCe,wir)=>{"use strict";var Q1e=te();function K1e(r,e,t){return Q1e(e+t*r())}wir.exports=K1e});var kc=s((zCe,Rir)=>{"use strict";var xi=G(),_o=qr(),Nir=Sr(),Sir=mr(),Oir=yr(),Air=vr(),_ir=dr(),r2e=Ir(),cn=_i().factory,Tir=z(),e2e=Or(),To=C(),t2e=bir(),Iir=Eir();function i2e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=cn();else if(arguments.length===1){if(t=arguments[0],!Sir(t))throw new TypeError(To("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Air(t,"prng")){if(!Oir(t.prng))throw new TypeError(To("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else{if(u=arguments[0],r=arguments[1],n=t2e(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Sir(t))throw new TypeError(To("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Air(t,"prng")){if(!Oir(t.prng))throw new TypeError(To("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else e=cn()}return u===void 0?a=g:a=y,i=e.PRNG,xi(a,"NAME","lognormal"),t&&t.prng?(xi(a,"seed",null),xi(a,"seedLength",null),Nir(a,"state",_ir(null),r2e),xi(a,"stateLength",null),xi(a,"byteLength",null),xi(a,"toJSON",_ir(null))):(_o(a,"seed",o),_o(a,"seedLength",v),Nir(a,"state",l,p),_o(a,"stateLength",f),_o(a,"byteLength",c),xi(a,"toJSON",m)),xi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=e2e(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return Iir(e,u,r)}function g(d,h){return Tir(d)||Tir(h)||h<=0?NaN:Iir(e,d,h)}}Rir.exports=i2e});var Pir=s((WCe,Lir)=>{"use strict";var a2e=kc(),n2e=a2e();Lir.exports=n2e});var Mir=s((XCe,jir)=>{"use strict";var s2e=G(),Fir=Pir(),u2e=kc();s2e(Fir,"factory",u2e);jir.exports=Fir});var Cc=s((JCe,xir)=>{"use strict";var o2e=ha(),v2e=Ur(),f2e=o2e-1;function c2e(){var r=v2e(1+f2e*Math.random());return r|0}xir.exports=c2e});var Gc=s((YCe,Uir)=>{"use strict";var Yt=G(),Bi=qr(),Bir=Sr(),Vc=vr(),l2e=mr(),p2e=de().isPrimitive,d2e=Ce(),g2e=nt().isPrimitive,kir=D0(),Qe=C(),Io=ha(),Pe=ui(),ln=Ei(),m2e=Or(),Cir=Cc(),Uc=Io-1|0,y2e=Io-1|0,h2e=16807,Ro=1,Lo=2,ki=2,Fe=4,A0=5;function Vir(r,e){var t;return e?t="option":t="argument",r.length<A0+1?new RangeError(Qe("invalid %s. State array has insufficient length.",t)):r[0]!==Ro?new RangeError(Qe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ro,r[0])):r[1]!==Lo?new RangeError(Qe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Lo,r[1])):r[ki]!==1?new RangeError(Qe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[ki])):r[Fe]!==r.length-A0?new RangeError(Qe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-A0,r[Fe])):null}function q2e(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!l2e(r))throw new TypeError(Qe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Vc(r,"copy")&&(i.copy=r.copy,!p2e(r.copy)))throw new TypeError(Qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Vc(r,"state")){if(t=r.state,i.state=!0,!kir(t))throw new TypeError(Qe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=Vir(t,!0),u)throw u;i.copy===!1?e=t:(e=new Pe(t.length),ln(t.length,t,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,t[Fe])}if(a===void 0)if(Vc(r,"seed"))if(a=r.seed,i.seed=!0,g2e(a)){if(a>y2e)throw new RangeError(Qe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(d2e(a)&&a.length>0)n=a.length,e=new Pe(A0+n),e[0]=Ro,e[1]=Lo,e[ki]=1,e[Fe]=n,ln.ndarray(n,a,1,0,e,1,Fe+1),t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,n),t[0]=a[0];else throw new TypeError(Qe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=Cir()|0}else a=Cir()|0;return t===void 0&&(e=new Pe(A0+1),e[0]=Ro,e[1]=Lo,e[ki]=1,e[Fe]=1,e[Fe+1]=a,t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,1),t[0]=a[0]),Yt(y,"NAME","minstd"),Bi(y,"seed",o),Bi(y,"seedLength",v),Bir(y,"state",l,p),Bi(y,"stateLength",f),Bi(y,"byteLength",c),Yt(y,"toJSON",m),Yt(y,"MIN",1),Yt(y,"MAX",Io-1),Yt(y,"normalized",g),Yt(g,"NAME",y.NAME),Bi(g,"seed",o),Bi(g,"seedLength",v),Bir(g,"state",l,p),Bi(g,"stateLength",f),Bi(g,"byteLength",c),Yt(g,"toJSON",m),Yt(g,"MIN",(y.MIN-1)/Uc),Yt(g,"MAX",(y.MAX-1)/Uc),y;function o(){var d=e[Fe];return ln(d,a,1,new Pe(d),1)}function v(){return e[Fe]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return ln(d,e,1,new Pe(d),1)}function p(d){var h;if(!kir(d))throw new TypeError(Qe("invalid argument. Must provide an Int32Array. Value: `%s`.",d));if(h=Vir(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?ln(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Pe(d.length)),ln(d.length,d,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,1),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,e[Fe])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=m2e(e),d.params=[],d}function y(){var d=t[0]|0;return d=h2e*d%Io|0,t[0]=d,d|0}function g(){return(y()-1)/Uc}}Uir.exports=q2e});var Dir=s((ZCe,Gir)=>{"use strict";var b2e=Gc(),w2e=Cc(),E2e=b2e({seed:w2e()});Gir.exports=E2e});var Wir=s(($Ce,zir)=>{"use strict";var N2e=G(),Hir=Dir(),S2e=Gc();N2e(Hir,"factory",S2e);zir.exports=Hir});var Jir=s((QCe,Xir)=>{"use strict";var O2e=z(),A2e=8;function _2e(r,e,t){var i,a;for(a=0;a<A2e;a++)if(i=r(),O2e(i))throw new Error("unexpected error. PRNG returned NaN.");for(a=t-1;a>=0;a--)e[a]=r();return e}Xir.exports=_2e});var Dc=s((KCe,Yir)=>{"use strict";var T2e=ha(),I2e=Ur(),R2e=T2e-1;function L2e(){var r=I2e(1+R2e*Math.random());return r|0}Yir.exports=L2e});var Wc=s((rVe,ear)=>{"use strict";var Zt=G(),Ci=qr(),Zir=Sr(),Hc=vr(),P2e=mr(),F2e=de().isPrimitive,j2e=Ce(),M2e=nt().isPrimitive,$ir=D0(),pn=Ei(),x2e=Ur(),je=ui(),_0=ha(),B2e=Or(),Xe=C(),Qir=Jir(),Kir=Dc(),zc=_0-1|0,k2e=_0-1|0,C2e=16807,xe=32,jo=1,Mo=3,Vi=2,dn=xe+3,Me=xe+6,T0=xe+7,Po=dn+1,Fo=dn+2;function rar(r,e){var t;return e?t="option":t="argument",r.length<T0+1?new RangeError(Xe("invalid %s. State array has insufficient length.",t)):r[0]!==jo?new RangeError(Xe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,jo,r[0])):r[1]!==Mo?new RangeError(Xe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Mo,r[1])):r[Vi]!==xe?new RangeError(Xe("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,xe,r[Vi])):r[dn]!==2?new RangeError(Xe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[dn])):r[Me]!==r.length-T0?new RangeError(Xe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-T0,r[Me])):null}function V2e(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!P2e(r))throw new TypeError(Xe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hc(r,"copy")&&(i.copy=r.copy,!F2e(r.copy)))throw new TypeError(Xe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Hc(r,"state")){if(t=r.state,i.state=!0,!$ir(t))throw new TypeError(Xe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=rar(t,!0),u)throw u;i.copy===!1?e=t:(e=new je(t.length),pn(t.length,t,1,e,1)),t=new je(e.buffer,e.byteOffset+(Vi+1)*e.BYTES_PER_ELEMENT,xe),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,t[Me])}if(a===void 0)if(Hc(r,"seed"))if(a=r.seed,i.seed=!0,M2e(a)){if(a>k2e)throw new RangeError(Xe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(j2e(a)&&a.length>0)n=a.length,e=new je(T0+n),e[0]=jo,e[1]=Mo,e[Vi]=xe,e[dn]=2,e[Fo]=a[0],e[Me]=n,pn.ndarray(n,a,1,0,e,1,Me+1),t=new je(e.buffer,e.byteOffset+(Vi+1)*e.BYTES_PER_ELEMENT,xe),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,n),t=Qir(y,t,xe),e[Po]=t[0];else throw new TypeError(Xe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=Kir()|0}else a=Kir()|0;return t===void 0&&(e=new je(T0+1),e[0]=jo,e[1]=Mo,e[Vi]=xe,e[dn]=2,e[Fo]=a,e[Me]=1,e[Me+1]=a,t=new je(e.buffer,e.byteOffset+(Vi+1)*e.BYTES_PER_ELEMENT,xe),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,1),t=Qir(y,t,xe),e[Po]=t[0]),Zt(g,"NAME","minstd-shuffle"),Ci(g,"seed",o),Ci(g,"seedLength",v),Zir(g,"state",l,p),Ci(g,"stateLength",f),Ci(g,"byteLength",c),Zt(g,"toJSON",m),Zt(g,"MIN",1),Zt(g,"MAX",_0-1),Zt(g,"normalized",d),Zt(d,"NAME",g.NAME),Ci(d,"seed",o),Ci(d,"seedLength",v),Zir(d,"state",l,p),Ci(d,"stateLength",f),Ci(d,"byteLength",c),Zt(d,"toJSON",m),Zt(d,"MIN",(g.MIN-1)/zc),Zt(d,"MAX",(g.MAX-1)/zc),g;function o(){var h=e[Me];return pn(h,a,1,new je(h),1)}function v(){return e[Me]}function f(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return pn(h,e,1,new je(h),1)}function p(h){var q;if(!$ir(h))throw new TypeError(Xe("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(q=rar(h,!1),q)throw q;i.copy===!1?i.state&&h.length===e.length?pn(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new je(h.length)),pn(h.length,h,1,e,1)),t=new je(e.buffer,e.byteOffset+(Vi+1)*e.BYTES_PER_ELEMENT,xe),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,e[Me])}function m(){var h={};return h.type="PRNG",h.name=g.NAME,h.state=B2e(e),h.params=[],h}function y(){var h=e[Fo]|0;return h=C2e*h%_0|0,e[Fo]=h,h|0}function g(){var h,q;return h=e[Po],q=x2e(xe*(h/_0)),h=t[q],e[Po]=h,t[q]=y(),h}function d(){return(g()-1)/zc}}ear.exports=V2e});var iar=s((eVe,tar)=>{"use strict";var U2e=Wc(),G2e=Dc(),D2e=U2e({seed:G2e()});tar.exports=D2e});var sar=s((tVe,nar)=>{"use strict";var H2e=G(),aar=iar(),z2e=Wc();H2e(aar,"factory",z2e);nar.exports=aar});var oar=s((iVe,uar)=>{"use strict";var W2e=te();function X2e(r,e){for(var t=r(),i=1;t>W2e(-e);)i+=1,t*=r();return i-1}uar.exports=X2e});var car=s((aVe,far)=>{"use strict";var J2e=Ur();function Y2e(r){return J2e(r)===r&&r<0}far.exports=Y2e});var par=s((nVe,lar)=>{"use strict";var Z2e=car();lar.exports=Z2e});var gar=s((sVe,dar)=>{"use strict";var $2e=par(),Q2e=u0();function K2e(r){return $2e(r)?NaN:Q2e(r+1)}dar.exports=K2e});var yar=s((uVe,mar)=>{"use strict";var rve=gar();mar.exports=rve});var war=s((oVe,bar)=>{"use strict";var eve=yar(),har=Ur(),tve=Au(),ive=Pr(),qar=Dr(),xo=br(),ave=V3(),nve=1/12,sve=1/360;function uve(r,e){var t,i,a,n,u,o,v,f,c,l;for(t=ive(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,a=.86*u;;){if(l=r(),l<=a)return c=l/u-.43,c*=2*o/(.5-qar(c))+v,c+=e+.445,har(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=tve(c)*.5-c,l=u*r()),n=.5-qar(c),(n>=.013||n>=l)&&(f=har((2*o/n+v)*c+e+.445),l*=i/(o/(n*n)+v),c=(f+.5)*xo(e/f),c+=-e-ave+f,c-=(nve-sve/(f*f))/f,f>=10&&c>=xo(l*t)||(c=f*xo(e)-e-eve(f),f>=0&&f<=9&&c>=xo(l))))return f}}bar.exports=uve});var Nar=s((vVe,Ear)=>{"use strict";var ove=oar(),vve=war();function fve(r,e){return e<30?ove(r,e):vve(r,e)}Ear.exports=fve});var Xc=s((fVe,Rar)=>{"use strict";var $t=G(),Bo=qr(),Sar=Sr(),cve=Gr().isPrimitive,Oar=mr(),Aar=yr(),_ar=vr(),Tar=dr(),lve=Ir(),ko=zr().factory,pve=z(),dve=Or(),Co=C(),Iar=Nar();function gve(){var r,e,t,i;if(arguments.length===0)t=ko();else if(arguments.length===1&&Oar(arguments[0]))if(e=arguments[0],_ar(e,"prng")){if(!Aar(e.prng))throw new TypeError(Co("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ko(e);else{if(r=arguments[0],!cve(r))throw new TypeError(Co("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Oar(e))throw new TypeError(Co("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_ar(e,"prng")){if(!Aar(e.prng))throw new TypeError(Co("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ko(e)}else t=ko()}return r===void 0?i=p:i=l,$t(i,"NAME","poisson"),e&&e.prng?($t(i,"seed",null),$t(i,"seedLength",null),Sar(i,"state",Tar(null),lve),$t(i,"stateLength",null),$t(i,"byteLength",null),$t(i,"toJSON",Tar(null)),$t(i,"PRNG",t)):(Bo(i,"seed",a),Bo(i,"seedLength",n),Sar(i,"state",v,f),Bo(i,"stateLength",u),Bo(i,"byteLength",o),$t(i,"toJSON",c),$t(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=dve(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Iar(t,r)}function p(m){return pve(m)||m<=0?NaN:Iar(t,m)}}Rar.exports=gve});var Par=s((cVe,Lar)=>{"use strict";var mve=Xc(),yve=mve();Lar.exports=yve});var Jc=s((lVe,jar)=>{"use strict";var hve=G(),Far=Par(),qve=Xc();hve(Far,"factory",qve);jar.exports=Far});var xar=s((pVe,Mar)=>{"use strict";var bve=Gr().isPrimitive,wve=Nr().isPrimitive,Yc=C(),Eve=oe();function Nve(r,e){return bve(r)?!wve(e)||Eve(e)?new TypeError(Yc("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Yc("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Yc("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Mar.exports=Nve});var Kc=s((dVe,Har)=>{"use strict";var Ui=G(),Vo=qr(),Bar=Sr(),gn=vr(),kar=mr(),Zc=qt(),Car=de().isPrimitive,Var=yr(),Uar=dr(),Sve=Ir(),Gar=z(),mn=Jc().factory,Uo=tn().factory,$c=Ei(),Qc=me(),Dar=w0(),Ove=Or(),Qt=C(),Ave=xar();function _ve(){var r,e,t,i,a,n,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=mn(i);else if(arguments.length===1){if(i=arguments[0],!kar(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(gn(i,"copy")&&!Car(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(gn(i,"prng")){if(!Var(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=mn({prng:i.prng})}else{if(gn(i,"state")&&!Zc(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Dar({},i),i.copy===!1?u=!1:i.state&&(i.state=$c(i.state.length,i.state,1,new Qc(i.state.length),1)),i.copy=!1,t=mn(i)}}else{if(f=arguments[0],v=arguments[1],o=Ave(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!kar(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(gn(i,"copy")&&!Car(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(gn(i,"prng")){if(!Var(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=mn({prng:i.prng})}else{if(gn(i,"state")&&!Zc(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=Dar({},i),i.copy===!1?u=!1:i.state&&(i.state=$c(i.state.length,i.state,1,new Qc(i.state.length),1)),i.copy=!1,t=mn(i)}}else i={copy:!1},t=mn(i)}return i&&i.prng?f===void 0?r=Uo({prng:i.prng}):r=Uo(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Uo({state:e,copy:!1}):r=Uo(f,v/(1-v),{state:e,copy:!1})),f===void 0?a=q:a=h,n=t.PRNG,Ui(a,"NAME","negative-binomial"),i&&i.prng?(Ui(a,"seed",null),Ui(a,"seedLength",null),Bar(a,"state",Uar(null),Sve),Ui(a,"stateLength",null),Ui(a,"byteLength",null),Ui(a,"toJSON",Uar(null))):(Vo(a,"seed",c),Vo(a,"seedLength",l),Bar(a,"state",y,g),Vo(a,"stateLength",p),Vo(a,"byteLength",m),Ui(a,"toJSON",d)),Ui(a,"PRNG",n),a;function c(){return n.seed}function l(){return n.seedLength}function p(){return n.stateLength}function m(){return n.byteLength}function y(){return n.state}function g(w){if(!Zc(w))throw new TypeError(Qt("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));u&&(w=$c(w.length,w,1,new Qc(w.length),1)),n.state=w}function d(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=Ove(n.state),f===void 0?w.params=[]:w.params=[f,v],w}function h(){return t(r())}function q(w,A){return Gar(w)||Gar(A)||A<=0||A>=1?NaN:t(r(w,A/(1-A)))}}Har.exports=_ve});var War=s((gVe,zar)=>{"use strict";var Tve=Kc(),Ive=Tve();zar.exports=Ive});var Yar=s((mVe,Jar)=>{"use strict";var Rve=G(),Xar=War(),Lve=Kc();Rve(Xar,"factory",Lve);Jar.exports=Xar});var Qar=s((yVe,$ar)=>{"use strict";var Pve=Nr().isPrimitive,Fve=Gr().isPrimitive,Zar=C(),jve=oe();function Mve(r,e){return!Pve(r)||jve(r)?new TypeError(Zar("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Fve(e)?null:new TypeError(Zar("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}$ar.exports=Mve});var rnr=s((hVe,Kar)=>{"use strict";function xve(r,e,t){return e+t*r()}Kar.exports=xve});var rl=s((qVe,onr)=>{"use strict";var Gi=G(),Go=qr(),enr=Sr(),tnr=mr(),inr=yr(),anr=vr(),nnr=dr(),Bve=Ir(),yn=_i().factory,snr=z(),kve=Or(),Do=C(),Cve=Qar(),unr=rnr();function Vve(){var r,e,t,i,a,n,u;if(arguments.length===0)e=yn();else if(arguments.length===1){if(t=arguments[0],!tnr(t))throw new TypeError(Do("invalid argument. Options argument must be an object. Value: `%s`.",t));if(anr(t,"prng")){if(!inr(t.prng))throw new TypeError(Do("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=yn({prng:t.prng})}else e=yn(t)}else{if(u=arguments[0],r=arguments[1],n=Cve(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!tnr(t))throw new TypeError(Do("invalid argument. Options argument must be an object. Value: `%s`.",t));if(anr(t,"prng")){if(!inr(t.prng))throw new TypeError(Do("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=yn({prng:t.prng})}else e=yn(t)}else e=yn()}return u===void 0?a=g:a=y,i=e.PRNG,Gi(a,"NAME","normal"),t&&t.prng?(Gi(a,"seed",null),Gi(a,"seedLength",null),enr(a,"state",nnr(null),Bve),Gi(a,"stateLength",null),Gi(a,"byteLength",null),Gi(a,"toJSON",nnr(null))):(Go(a,"seed",o),Go(a,"seedLength",v),enr(a,"state",l,p),Go(a,"stateLength",f),Go(a,"byteLength",c),Gi(a,"toJSON",m)),Gi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=kve(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return unr(e,u,r)}function g(d,h){return snr(d)||snr(h)||h<=0?NaN:unr(e,d,h)}}onr.exports=Vve});var fnr=s((bVe,vnr)=>{"use strict";var Uve=rl(),Gve=Uve();vnr.exports=Gve});var pnr=s((wVe,lnr)=>{"use strict";var Dve=G(),cnr=fnr(),Hve=rl();Dve(cnr,"factory",Hve);lnr.exports=cnr});var ynr=s((EVe,mnr)=>{"use strict";var dnr=Gr().isPrimitive,gnr=C();function zve(r,e){return dnr(r)?dnr(e)?null:new TypeError(gnr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gnr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}mnr.exports=zve});var qnr=s((NVe,hnr)=>{"use strict";var Wve=Vr();function Xve(r,e,t){return t/Wve(r(),1/e)}hnr.exports=Xve});var el=s((SVe,_nr)=>{"use strict";var Kt=G(),Ho=qr(),bnr=Sr(),wnr=mr(),Enr=yr(),Nnr=vr(),Snr=dr(),Jve=Ir(),zo=zr().factory,Onr=z(),Yve=Or(),Wo=C(),Zve=ynr(),Anr=qnr();function $ve(){var r,e,t,i,a,n;if(arguments.length===0)i=zo();else if(arguments.length===1){if(t=arguments[0],!wnr(t))throw new TypeError(Wo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Nnr(t,"prng")){if(!Enr(t.prng))throw new TypeError(Wo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=zo(t)}else{if(r=arguments[0],e=arguments[1],n=Zve(r,e),n)throw n;if(arguments.length>2){if(t=arguments[2],!wnr(t))throw new TypeError(Wo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Nnr(t,"prng")){if(!Enr(t.prng))throw new TypeError(Wo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=zo(t)}else i=zo()}return r===void 0?a=y:a=m,Kt(a,"NAME","pareto-type1"),t&&t.prng?(Kt(a,"seed",null),Kt(a,"seedLength",null),bnr(a,"state",Snr(null),Jve),Kt(a,"stateLength",null),Kt(a,"byteLength",null),Kt(a,"toJSON",Snr(null)),Kt(a,"PRNG",i)):(Ho(a,"seed",u),Ho(a,"seedLength",o),bnr(a,"state",c,l),Ho(a,"stateLength",v),Ho(a,"byteLength",f),Kt(a,"toJSON",p),Kt(a,"PRNG",i),i=i.normalized),a;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(g){i.state=g}function p(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Yve(i.state),r===void 0?g.params=[]:g.params=[r,e],g}function m(){return Anr(i,r,e)}function y(g,d){return Onr(g)||Onr(d)||g<=0||d<=0?NaN:Anr(i,g,d)}}_nr.exports=$ve});var Inr=s((OVe,Tnr)=>{"use strict";var Qve=el(),Kve=Qve();Tnr.exports=Kve});var Pnr=s((AVe,Lnr)=>{"use strict";var r3e=G(),Rnr=Inr(),e3e=el();r3e(Rnr,"factory",e3e);Lnr.exports=Rnr});var jnr=s((_Ve,Fnr)=>{"use strict";var t3e=Pr(),i3e=br();function a3e(r,e){return e*t3e(-2*i3e(r()))}Fnr.exports=a3e});var tl=s((TVe,Unr)=>{"use strict";var ri=G(),Xo=qr(),Mnr=Sr(),n3e=Gr().isPrimitive,xnr=mr(),Bnr=yr(),knr=vr(),Cnr=dr(),s3e=Ir(),Jo=zr().factory,u3e=z(),o3e=Or(),Yo=C(),Vnr=jnr();function v3e(){var r,e,t,i;if(arguments.length===0)t=Jo();else if(arguments.length===1&&xnr(arguments[0]))if(e=arguments[0],knr(e,"prng")){if(!Bnr(e.prng))throw new TypeError(Yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Jo(e);else{if(r=arguments[0],!n3e(r))throw new TypeError(Yo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!xnr(e))throw new TypeError(Yo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(knr(e,"prng")){if(!Bnr(e.prng))throw new TypeError(Yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Jo(e)}else t=Jo()}return r===void 0?i=p:i=l,ri(i,"NAME","rayleigh"),e&&e.prng?(ri(i,"seed",null),ri(i,"seedLength",null),Mnr(i,"state",Cnr(null),s3e),ri(i,"stateLength",null),ri(i,"byteLength",null),ri(i,"toJSON",Cnr(null)),ri(i,"PRNG",t)):(Xo(i,"seed",a),Xo(i,"seedLength",n),Mnr(i,"state",v,f),Xo(i,"stateLength",u),Xo(i,"byteLength",o),ri(i,"toJSON",c),ri(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=o3e(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Vnr(t,r)}function p(m){return u3e(m)||m<=0?NaN:Vnr(t,m)}}Unr.exports=v3e});var Dnr=s((IVe,Gnr)=>{"use strict";var f3e=tl(),c3e=f3e();Gnr.exports=c3e});var Wnr=s((RVe,znr)=>{"use strict";var l3e=G(),Hnr=Dnr(),p3e=tl();l3e(Hnr,"factory",p3e);znr.exports=Hnr});var sl=s((LVe,e0r)=>{"use strict";var Di=G(),Zo=qr(),Xnr=Sr(),hn=vr(),Jnr=Gr().isPrimitive,Ynr=mr(),il=qt(),Znr=de().isPrimitive,d3e=z(),$nr=yr(),Qnr=dr(),g3e=Ir(),$o=S0().factory,qn=_i().factory,al=Ei(),nl=me(),Knr=w0(),m3e=Or(),dt=C(),r0r=Pr();function y3e(){var r,e,t,i,a,n,u,o;if(u=!0,arguments.length===0)a={copy:!1},t=qn(a);else if(arguments.length===1)if(Ynr(arguments[0])){if(a=arguments[0],hn(a,"copy")&&!Znr(a.copy))throw new TypeError(dt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(hn(a,"prng")){if(!$nr(a.prng))throw new TypeError(dt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=qn({prng:a.prng})}else{if(hn(a,"state")&&!il(a.state))throw new TypeError(dt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Knr({},a),a.copy===!1?u=!1:a.state&&(a.state=al(a.state.length,a.state,1,new nl(a.state.length),1)),a.copy=!1,t=qn(a)}}else{if(o=arguments[0],!Jnr(o))throw new TypeError(dt("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));a={copy:!1},t=qn(a)}else{if(o=arguments[0],!Jnr(o))throw new TypeError(dt("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(a=arguments[1],!Ynr(a))throw new TypeError(dt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(hn(a,"copy")&&!Znr(a.copy))throw new TypeError(dt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(hn(a,"prng")){if(!$nr(a.prng))throw new TypeError(dt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=qn({prng:a.prng})}else{if(hn(a,"state")&&!il(a.state))throw new TypeError(dt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Knr({},a),a.copy===!1?u=!1:a.state&&(a.state=al(a.state.length,a.state,1,new nl(a.state.length),1)),a.copy=!1,t=qn(a)}}return a&&a.prng?o===void 0?r=$o({prng:a.prng}):r=$o(o,{prng:a.prng}):(a.state?e=a.state:(e=t.state,t.state=e),o===void 0?r=$o({state:e,copy:!1}):r=$o(o,{state:e,copy:!1})),o===void 0?n=d:n=g,i=t.PRNG,Di(n,"NAME","t"),a&&a.prng?(Di(n,"seed",null),Di(n,"seedLength",null),Xnr(n,"state",Qnr(null),g3e),Di(n,"stateLength",null),Di(n,"byteLength",null),Di(n,"toJSON",Qnr(null))):(Zo(n,"seed",v),Zo(n,"seedLength",f),Xnr(n,"state",p,m),Zo(n,"stateLength",c),Zo(n,"byteLength",l),Di(n,"toJSON",y)),Di(n,"PRNG",i),n;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!il(h))throw new TypeError(dt("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));u&&(h=al(h.length,h,1,new nl(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=n.NAME,h.state=m3e(i.state),o===void 0?h.params=[]:h.params=[o],h}function g(){return t()/r0r(r()/o)}function d(h){return d3e(h)||h<=0?NaN:t()/r0r(r(h)/h)}}e0r.exports=y3e});var i0r=s((PVe,t0r)=>{"use strict";var h3e=sl(),q3e=h3e();t0r.exports=q3e});var s0r=s((FVe,n0r)=>{"use strict";var b3e=G(),a0r=i0r(),w3e=sl();b3e(a0r,"factory",w3e);n0r.exports=a0r});var o0r=s((jVe,u0r)=>{"use strict";var ul=Nr().isPrimitive,Qo=C(),ol=oe();function E3e(r,e,t){return!ul(r)||ol(r)?new TypeError(Qo("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!ul(e)||ol(e)?new TypeError(Qo("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!ul(t)||ol(t)?new TypeError(Qo("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Qo("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}u0r.exports=E3e});var c0r=s((MVe,f0r)=>{"use strict";var v0r=Pr();function N3e(r,e,t,i){var a,n,u;return a=(i-e)/(t-e),u=r(),u<a?(n=(t-e)*(i-e),e+v0r(n*u)):(n=(t-e)*(t-i),t-v0r(n*(1-u)))}f0r.exports=N3e});var fl=s((xVe,h0r)=>{"use strict";var ei=G(),Ko=qr(),l0r=Sr(),p0r=mr(),d0r=yr(),g0r=vr(),m0r=dr(),S3e=Ir(),r1=zr().factory,vl=z(),O3e=Or(),e1=C(),A3e=o0r(),y0r=c0r();function _3e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=r1();else if(arguments.length===1){if(r=arguments[0],!p0r(r))throw new TypeError(e1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(g0r(r,"prng")){if(!d0r(r.prng))throw new TypeError(e1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=r1(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=A3e(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!p0r(r))throw new TypeError(e1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(g0r(r,"prng")){if(!d0r(r.prng))throw new TypeError(e1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=r1(r)}else e=r1()}return a===void 0?t=g:t=y,ei(t,"NAME","triangular"),r&&r.prng?(ei(t,"seed",null),ei(t,"seedLength",null),l0r(t,"state",m0r(null),S3e),ei(t,"stateLength",null),ei(t,"byteLength",null),ei(t,"toJSON",m0r(null)),ei(t,"PRNG",e)):(Ko(t,"seed",o),Ko(t,"seedLength",v),l0r(t,"state",l,p),Ko(t,"stateLength",f),Ko(t,"byteLength",c),ei(t,"toJSON",m),ei(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=O3e(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return y0r(e,a,n,u)}function g(d,h,q){return vl(d)||vl(h)||vl(q)||!(d<=q&&q<=h)?NaN:y0r(e,d,h,q)}}h0r.exports=_3e});var b0r=s((BVe,q0r)=>{"use strict";var T3e=fl(),I3e=T3e();q0r.exports=I3e});var N0r=s((kVe,E0r)=>{"use strict";var R3e=G(),w0r=b0r(),L3e=fl();R3e(w0r,"factory",L3e);E0r.exports=w0r});var _0r=s((CVe,A0r)=>{"use strict";var S0r=Nr().isPrimitive,cl=C(),O0r=oe();function P3e(r,e){return!S0r(r)||O0r(r)?new TypeError(cl("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!S0r(e)||O0r(e)?new TypeError(cl("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(cl("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}A0r.exports=P3e});var I0r=s((VVe,T0r)=>{"use strict";function F3e(r,e,t){var i=r();return t*i+(1-i)*e}T0r.exports=F3e});var ll=s((UVe,B0r)=>{"use strict";var ti=G(),t1=qr(),R0r=Sr(),L0r=mr(),P0r=yr(),F0r=vr(),j0r=dr(),j3e=Ir(),i1=zr().factory,M0r=z(),M3e=Or(),a1=C(),x3e=_0r(),x0r=I0r();function B3e(){var r,e,t,i,a,n;if(arguments.length===0)e=i1();else if(arguments.length===1){if(r=arguments[0],!L0r(r))throw new TypeError(a1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F0r(r,"prng")){if(!P0r(r.prng))throw new TypeError(a1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=i1(r)}else{if(a=arguments[0],n=arguments[1],i=x3e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!L0r(r))throw new TypeError(a1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F0r(r,"prng")){if(!P0r(r.prng))throw new TypeError(a1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=i1(r)}else e=i1()}return a===void 0?t=y:t=m,ti(t,"NAME","uniform"),r&&r.prng?(ti(t,"seed",null),ti(t,"seedLength",null),R0r(t,"state",j0r(null),j3e),ti(t,"stateLength",null),ti(t,"byteLength",null),ti(t,"toJSON",j0r(null)),ti(t,"PRNG",e)):(t1(t,"seed",u),t1(t,"seedLength",o),R0r(t,"state",c,l),t1(t,"stateLength",v),t1(t,"byteLength",f),ti(t,"toJSON",p),ti(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=M3e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return x0r(e,a,n)}function y(g,d){return M0r(g)||M0r(d)||g>=d?NaN:x0r(e,g,d)}}B0r.exports=B3e});var C0r=s((GVe,k0r)=>{"use strict";var k3e=ll(),C3e=k3e();k0r.exports=C3e});var G0r=s((DVe,U0r)=>{"use strict";var V3e=G(),V0r=C0r(),U3e=ll();V3e(V0r,"factory",U3e);U0r.exports=V0r});var W0r=s((HVe,z0r)=>{"use strict";var D0r=Gr().isPrimitive,H0r=C();function G3e(r,e){return D0r(r)?D0r(e)?null:new TypeError(H0r("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(H0r("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}z0r.exports=G3e});var J0r=s((zVe,X0r)=>{"use strict";var D3e=Vr(),H3e=br();function z3e(r,e,t){return t*D3e(-H3e(1-r()),1/e)}X0r.exports=z3e});var pl=s((WVe,tsr)=>{"use strict";var ii=G(),n1=qr(),Y0r=Sr(),Z0r=mr(),$0r=yr(),Q0r=vr(),K0r=dr(),W3e=Ir(),s1=zr().factory,rsr=z(),X3e=Or(),u1=C(),J3e=W0r(),esr=J0r();function Y3e(){var r,e,t,i,a,n;if(arguments.length===0)t=s1();else if(arguments.length===1){if(e=arguments[0],!Z0r(e))throw new TypeError(u1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Q0r(e,"prng")){if(!$0r(e.prng))throw new TypeError(u1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=s1(e)}else{if(n=arguments[0],r=arguments[1],a=J3e(r,n),a)throw a;if(arguments.length>2){if(e=arguments[2],!Z0r(e))throw new TypeError(u1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Q0r(e,"prng")){if(!$0r(e.prng))throw new TypeError(u1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=s1(e)}else t=s1()}return r===void 0?i=y:i=m,ii(i,"NAME","weibull"),e&&e.prng?(ii(i,"seed",null),ii(i,"seedLength",null),Y0r(i,"state",K0r(null),W3e),ii(i,"stateLength",null),ii(i,"byteLength",null),ii(i,"toJSON",K0r(null)),ii(i,"PRNG",t)):(n1(i,"seed",u),n1(i,"seedLength",o),Y0r(i,"state",c,l),n1(i,"stateLength",v),n1(i,"byteLength",f),ii(i,"toJSON",p),ii(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=X3e(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return esr(t,n,r)}function y(g,d){return rsr(g)||rsr(d)||g<=0||d<=0?NaN:esr(t,g,d)}}tsr.exports=Y3e});var asr=s((XVe,isr)=>{"use strict";var Z3e=pl(),$3e=Z3e();isr.exports=$3e});var usr=s((JVe,ssr)=>{"use strict";var Q3e=G(),nsr=asr(),K3e=pl();Q3e(nsr,"factory",K3e);ssr.exports=nsr});var vsr=s((YVe,osr)=>{"use strict";var rfe=qe(),efe=ye().isPrimitive,tfe=C(),ife=C0();function afe(r){if(efe(r))return r;if(rfe(r))return ife(r);throw new TypeError(tfe("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}osr.exports=afe});var csr=s((ZVe,fsr)=>{"use strict";var nfe=vsr();fsr.exports=nfe});var psr=s(($Ve,lsr)=>{"use strict";var Ar=$r(),sfe=xX().factory,ufe=XX().factory,ofe=gY().factory,vfe=rZ().factory,ffe=MZ().factory,cfe=ZZ().factory,lfe=d$().factory,pfe=x$().factory,dfe=S0().factory,gfe=RQ().factory,mfe=ZQ().factory,yfe=dK().factory,hfe=TK().factory,qfe=XK().factory,bfe=frr().factory,wfe=tn().factory,Efe=Orr().factory,Nfe=Hrr().factory,Sfe=der().factory,Ofe=_i().factory,Afe=Rer().factory,_fe=Zer().factory,Tfe=dtr().factory,Ife=Ktr().factory,Rfe=yir().factory,Lfe=Mir().factory,Pfe=Wir().factory,Ffe=sar().factory,jfe=zr().factory,Mfe=Yar().factory,xfe=pnr().factory,Bfe=Pnr().factory,kfe=Jc().factory,Cfe=Wnr().factory,Vfe=s0r().factory,Ufe=N0r().factory,Gfe=G0r().factory,Dfe=usr().factory,Hfe=csr();function zfe(r){return Ar(r,"arcsine",sfe),Ar(r,"bernoulli",ufe),Ar(r,"beta",ofe),Ar(r,"betaprime",vfe),Ar(r,"binomial",ffe),Ar(r,"boxMuller",cfe),Ar(r,"cauchy",lfe),Ar(r,"chi",pfe),Ar(r,"chisquare",dfe),Ar(r,"cosine",gfe),Ar(r,"discreteUniform",mfe),Ar(r,"erlang",yfe),Ar(r,"exponential",hfe),Ar(r,"f",qfe),Ar(r,"frechet",bfe),Ar(r,"gamma",wfe),Ar(r,"geometric",Efe),Ar(r,"gumbel",Nfe),Ar(r,"hypergeometric",Sfe),Ar(r,"improvedZiggurat",Ofe),Ar(r,"invgamma",Afe),Ar(r,"kumaraswamy",_fe),Ar(r,"laplace",Tfe),Ar(r,"levy",Ife),Ar(r,"logistic",Rfe),Ar(r,"lognormal",Lfe),Ar(r,"minstd",Pfe),Ar(r,"minstdShuffle",Ffe),Ar(r,"mt19937",jfe),Ar(r,"negativeBinomial",Mfe),Ar(r,"normal",xfe),Ar(r,"pareto1",Bfe),Ar(r,"poisson",kfe),Ar(r,"rayleigh",Cfe),Ar(r,"t",Vfe),Ar(r,"triangular",Ufe),Ar(r,"uniform",Gfe),Ar(r,"weibull",Dfe),r.base={},Ar(r.base,"normalizeSeed",Hfe),r}lsr.exports=zfe});var gsr=s((QVe,dsr)=>{"use strict";var Wfe=mr(),o1=vr(),Xfe=ye().isPrimitive,Jfe=nt().isPrimitive,Yfe=be().isPrimitive,Zfe=os().isPrimitive,I0=C();function $fe(r,e){return Wfe(e)?o1(e,"period")&&(r.period=e.period,!Jfe(e.period))?new TypeError(I0("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):o1(e,"amplitude")&&(r.amplitude=e.amplitude,!Zfe(e.amplitude))?new TypeError(I0("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):o1(e,"offset")&&(r.offset=e.offset,!Xfe(e.offset))?new TypeError(I0("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):o1(e,"iter")&&(r.iter=e.iter,!Yfe(e.iter))?new TypeError(I0("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(I0("invalid argument. Options argument must be an object. Value: `%s`.",e))}dsr.exports=$fe});var qsr=s((KVe,hsr)=>{"use strict";var dl=G(),msr=Tn(),Qfe=i0(),Kfe=xs(),rce=Ms(),ece=we(),tce=gsr();function ysr(r){var e,t,i,a,n,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(a=tce(e,r),a))throw a;return n=(e.period-e.offset)%e.period,n<0&&(n+=e.period),n-=1,u=ece/e.period,o=e.amplitude/rce,v=0,t={},dl(t,"next",f),dl(t,"return",c),msr&&dl(t,msr,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(n+=1,n%=e.period,{value:o*Kfe(Qfe(u*n)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return ysr(e)}}hsr.exports=ysr});var wsr=s((rUe,bsr)=>{"use strict";var ice=qsr();bsr.exports=ice});var Nsr=s((eUe,Esr)=>{"use strict";var ace=$r(),nce=wsr();function sce(r){return ace(r,"iterSawtoothWave",nce),r}Esr.exports=sce});var Osr=s((tUe,Ssr)=>{"use strict";var uce=17976931348623157e292;Ssr.exports=uce});var v1=s((iUe,Asr)=>{"use strict";var oce=709.782712893384;Asr.exports=oce});var Tsr=s((aUe,_sr)=>{"use strict";var vce=te();function fce(r,e){var t,i,a,n;if(a=vce(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}_sr.exports=fce});var Rsr=s((nUe,Isr)=>{"use strict";function cce(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Isr.exports=cce});var Psr=s((sUe,Lsr)=>{"use strict";function lce(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Lsr.exports=lce});var jsr=s((uUe,Fsr)=>{"use strict";function pce(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Fsr.exports=pce});var xsr=s((oUe,Msr)=>{"use strict";function dce(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Msr.exports=dce});var ksr=s((vUe,Bsr)=>{"use strict";function gce(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Bsr.exports=gce});var Vsr=s((fUe,Csr)=>{"use strict";function mce(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Csr.exports=mce});var Gsr=s((cUe,Usr)=>{"use strict";function yce(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Usr.exports=yce});var Hsr=s((lUe,Dsr)=>{"use strict";function hce(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Dsr.exports=hce});var Jsr=s((pUe,Xsr)=>{"use strict";var qce=z(),zsr=te(),bce=wt(),wce=hr(),Ece=Rr(),Nce=Rsr(),Sce=Psr(),Oce=jsr(),Ace=xsr(),_ce=ksr(),Tce=Vsr(),Ice=Gsr(),Rce=Hsr(),f1=1e-300,Lce=13877787807814457e-33,Wsr=.8450629115104675,Pce=.12837916709551256,Fce=1,jce=-.0023621185607526594,Mce=1,xce=-.009864944034847148,Bce=1,kce=-.0098649429247001,Cce=1;function Vce(r){var e,t,i,a,n,u,o,v;if(qce(r))return NaN;if(r===wce)return 0;if(r===Ece)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Lce?1-r:(i=r*r,a=Pce+i*Nce(i),n=Fce+i*Sce(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=jce+n*Oce(n),v=Mce+n*Ace(n),e?1+Wsr+o/v:1-Wsr-o/v;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=xce+n*_ce(n),n=Bce+n*Tce(n);else{if(r<-6)return 2-f1;a=kce+n*Ice(n),n=Cce+n*Rce(n)}return i=bce(t,0),a=zsr(-(i*i)-.5625)*zsr((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-f1:f1*f1}Xsr.exports=Vce});var ca=s((dUe,Ysr)=>{"use strict";var Uce=Jsr();Ysr.exports=Uce});var Qsr=s((gUe,$sr)=>{"use strict";var Gce=ca(),Zsr=Pr(),Dce=te(),Hce=we();function zce(r,e){var t,i,a,n,u;if(n=Gce(Zsr(e)),n!==0&&r>1){for(i=Dce(-e)/Zsr(Hce*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}$sr.exports=zce});var gl=s((mUe,Ksr)=>{"use strict";var Wce=-708.3964185322641;Ksr.exports=Wce});var iur=s((yUe,tur)=>{"use strict";var bn=te(),c1=Vr(),Xce=br(),rur=v1(),eur=gl();function Jce(r,e){var t,i;return i=r*Xce(e),e>=1?i<rur&&-e>eur?t=c1(e,r)*bn(-e):r>=1?t=c1(e/bn(e/r),r):t=bn(i-e):i>eur?t=c1(e,r)*bn(-e):e/r<rur?t=c1(e/bn(e/r),r):t=bn(i-e),t}tur.exports=Jce});var ml=s((hUe,aur)=>{"use strict";function Yce(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}aur.exports=Yce});var sur=s((qUe,nur)=>{"use strict";var Zce=Function;nur.exports=Zce});var our=s((bUe,uur)=>{"use strict";var $ce=sur();uur.exports=$ce});var fur=s((wUe,vur)=>{"use strict";var Qce=our(),Kce=ml();function rle(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Qce(e)();function n(u){return Kce(r,u)}}vur.exports=rle});var pur=s((EUe,lur)=>{"use strict";var ele=G(),cur=ml(),tle=fur();ele(cur,"factory",tle);lur.exports=cur});var la=s((NUe,dur)=>{"use strict";var ile=2220446049250313e-31;dur.exports=ile});var mur=s((SUe,gur)=>{"use strict";var ale=eval;gur.exports=ale});var hur=s((OUe,yur)=>{"use strict";var nle=mur();function sle(){var r;try{nle('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}yur.exports=sle});var yl=s((AUe,qur)=>{"use strict";var ule=hur();qur.exports=ule});var wur=s((_Ue,bur)=>{"use strict";var l1=Dr(),ole=la(),vle=1e6;function fle(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||ole,n=o.maxTerms||vle,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,l1(i*u)>=l1(a)||--n===0)break}else do a=r(),u+=a;while(l1(i*u)<l1(a)&&--n);return u}bur.exports=fle});var Sur=s((TUe,Nur)=>{"use strict";var Eur=Dr(),cle=la(),lle=1e6;function ple(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||cle,a=u.maxTerms||lle,n=u.initialValue||0;do i=r(),n+=i;while(Eur(t*n)<Eur(i)&&--a);return n}Nur.exports=ple});var p1=s((IUe,Our)=>{"use strict";var dle=yl(),gle=wur(),mle=Sur(),hl;dle()?hl=gle:hl=mle;Our.exports=hl});var _ur=s((RUe,Aur)=>{"use strict";function yle(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}Aur.exports=yle});var Iur=s((LUe,Tur)=>{"use strict";var hle=Dr(),qle=br(),ble=la(),wle=p1(),Ele=_ur();function Nle(r){var e,t;return r<=-1?NaN:(t=hle(r),t>.95?qle(1+r)-r:t<ble?-r*r/2:(e={initialValue:-r},wle(Ele(r),e)))}Tur.exports=Nle});var Lur=s((PUe,Rur)=>{"use strict";var Sle=Iur();Rur.exports=Sle});var Fur=s((FUe,Pur)=>{"use strict";function Ole(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Pur.exports=Ole});var Mur=s((jUe,jur)=>{"use strict";function Ale(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}jur.exports=Ale});var Bur=s((MUe,xur)=>{"use strict";function _le(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}xur.exports=_le});var Cur=s((xUe,kur)=>{"use strict";function Tle(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}kur.exports=Tle});var Uur=s((BUe,Vur)=>{"use strict";function Ile(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Vur.exports=Ile});var Dur=s((kUe,Gur)=>{"use strict";function Rle(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Gur.exports=Rle});var zur=s((CUe,Hur)=>{"use strict";function Lle(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Hur.exports=Lle});var Xur=s((VUe,Wur)=>{"use strict";function Ple(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Wur.exports=Ple});var Yur=s((UUe,Jur)=>{"use strict";function Fle(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Jur.exports=Fle});var $ur=s((GUe,Zur)=>{"use strict";var jle=pur(),Mle=Lur(),xle=ca(),ql=Pr(),Ble=te(),kle=mi(),Cle=Fur(),Vle=Mur(),Ule=Bur(),Gle=Cur(),Dle=Uur(),Hle=Dur(),zle=zur(),Wle=Xur(),Xle=Yur(),Ke=[0,0,0,0,0,0,0,0,0,0];function Jle(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-Mle(i),n=r*a,u=ql(2*a),e<r&&(u=-u),Ke[0]=Cle(u),Ke[1]=Vle(u),Ke[2]=Ule(u),Ke[3]=Gle(u),Ke[4]=Dle(u),Ke[5]=Hle(u),Ke[6]=zle(u),Ke[7]=Wle(u),Ke[8]=Xle(u),Ke[9]=-.0005967612901927463,t=jle(Ke,1/r),t*=Ble(-n)/ql(kle*r),e<r&&(t=-t),t+=xle(ql(n))/2,t}Zur.exports=Jle});var Kur=s((DUe,Qur)=>{"use strict";function Yle(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}Qur.exports=Yle});var eor=s((HUe,ror)=>{"use strict";var Zle=p1(),$le=Kur();function Qle(r,e,t){var i,a;return t=t||0,a=$le(r,e),i=Zle(a,{initialValue:t}),i}ror.exports=Qle});var ior=s((zUe,tor)=>{"use strict";function Kle(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}tor.exports=Kle});var nor=s((WUe,aor)=>{"use strict";var r6e=ior();aor.exports=r6e});var uor=s((XUe,sor)=>{"use strict";var e6e=nor();sor.exports=e6e});var cor=s((JUe,vor)=>{"use strict";var t6e=M3(),oor=z(),bl=Rr();function i6e(r,e){return oor(r)||oor(e)?NaN:r===bl||e===bl?bl:r===e&&r===0?t6e(r)?r:e:r<e?r:e}vor.exports=i6e});var por=s((YUe,lor)=>{"use strict";var a6e=cor();lor.exports=a6e});var gor=s((ZUe,dor)=>{"use strict";var n6e=10.900511;dor.exports=n6e});var wl=s(($Ue,mor)=>{"use strict";var s6e=2.718281828459045;mor.exports=s6e});var qor=s((QUe,hor)=>{"use strict";var u6e=uor(),o6e=u0(),v6e=Ja(),f6e=di(),c6e=Pr(),l6e=Dr(),Hi=te(),R0=Vr(),El=wf(),Nl=por(),yor=br(),d1=v1(),L0=gl(),Sl=gor(),p6e=wl();function d6e(r,e){var t,i,a,n,u,o,v;return a=r+Sl-.5,v=(e-r-Sl+.5)/a,r<1?e<=L0?Hi(r*yor(e)-e-o6e(r)):R0(e,r)*Hi(-e)/v6e(r):(l6e(v*v*r)<=100&&r>150?(t=r*(f6e(v)-v)+e*(.5-Sl)/a,t=Hi(t)):(n=r*yor(e/a),u=r-e,Nl(n,u)<=L0||El(n,u)>=d1?(i=u/r,Nl(n,u)/2>L0&&El(n,u)/2<d1?(o=R0(e/a,r/2)*Hi(u/2),t=o*o):Nl(n,u)/4>L0&&El(n,u)/4<d1&&e>r?(o=R0(e/a,r/4)*Hi(u/4),t=o*o,t*=t):i>L0&&i<d1?t=R0(e*Hi(i)/a,r):t=Hi(n+u)):t=R0(e/a,r)*Hi(u)),t*=c6e(a/p6e)/u6e(r),t)}hor.exports=d6e});var wor=s((KUe,bor)=>{"use strict";function g6e(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}bor.exports=g6e});var Nor=s((rGe,Eor)=>{"use strict";function m6e(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Eor.exports=m6e});var Oor=s((eGe,Sor)=>{"use strict";function y6e(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Sor.exports=y6e});var _or=s((tGe,Aor)=>{"use strict";var Ol=br(),h6e=la(),q6e=wor(),b6e=Nor(),w6e=Oor(),E6e=.15896368026733398,N6e=.5281534194946289,S6e=.45201730728149414;function O6e(r,e,t){var i,a,n,u;if(r<h6e)return-Ol(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=Ol(r);while(r>=3);t=r-2}return n=t*(r+1),u=q6e(t),a+=n*E6e+n*u,a}return r<1&&(a+=-Ol(r),t=e,e=r,r+=1),r<=1.5?(n=b6e(e),i=e*t,a+=i*N6e+i*n,a):(n=t*e,u=w6e(-t),a+=n*S6e+n*u,a)}Aor.exports=O6e});var Por=s((iGe,Lor)=>{"use strict";var Tor=Ja(),Ior=F3(),A6e=di(),_6e=z(),Ror=_or();function T6e(r){return _6e(r)?NaN:r<0?r<-.5?Tor(1+r)-1:Ior(-A6e(r)+Ror(r+2,r+1,r)):r<2?Ior(Ror(r+1,r,r-1)):Tor(1+r)-1}Lor.exports=T6e});var jor=s((aGe,For)=>{"use strict";var I6e=Por();For.exports=I6e});var xor=s((nGe,Mor)=>{"use strict";function R6e(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}Mor.exports=R6e});var kor=s((sGe,Bor)=>{"use strict";var L6e=j3(),P6e=p1(),F6e=jor(),j6e=xor();function M6e(r,e,t){var i,a,n,u,o;return a=F6e(r),n=(a+1)/r,u=L6e(e,r),a-=u,a/=r,o=j6e(r,e),u+=1,i=t?n:0,a=-u*P6e(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}Bor.exports=M6e});var Al=s((uGe,Cor)=>{"use strict";var x6e=11754943508222875e-54;Cor.exports=x6e});var Uor=s((oGe,Vor)=>{"use strict";var g1=Dr(),gt=Al(),B6e=la(),k6e=1e6;function C6e(r,e,t){var i,a,n,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],n=f[0],u===0&&(u=gt),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=gt),o=f[1]+f[0]/o,o===0&&(o=gt),v=1/v,a=o*v,u*=a);while(g1(a-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=gt),o=f[1]+f[0]/o,o===0&&(o=gt),v=1/v,a=o*v,u*=a);while(f&&g1(a-1)>e&&--t);return n/u}function V6e(r,e,t){var i,a,n,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),n=v[1],n===0&&(n=gt),u=n,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=gt),u=v[1]+v[0]/u,u===0&&(u=gt),o=1/o,a=u*o,n*=a);while(v&&g1(a-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=gt),u=v[1]+v[0]/u,u===0&&(u=gt),o=1/o,a=u*o,n*=a);while(v&&g1(a-1)>e&&--t);return n}function U6e(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||k6e,a=i.tolerance||B6e,i.keep?V6e(r,a,t):C6e(r,a,t)}Vor.exports=U6e});var Hor=s((vGe,Dor)=>{"use strict";var Gor=Dr(),G6e=la(),wn=Al(),D6e=1e6;function H6e(r,e,t){var i,a,n,u,o,v;v=r(),o=v[1],a=v[0],o===0&&(o=wn),n=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=wn),n=v[1]+v[0]/n,n===0&&(n=wn),u=1/u,i=n*u,o*=i);while(v&&Gor(i-1)>e&&--t);return a/o}function z6e(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=wn),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=wn),a=o[1]+o[0]/a,a===0&&(a=wn),n=1/n,i=a*n,u*=i);while(o&&Gor(i-1)>e&&--t);return u}function W6e(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||G6e,t=i.maxIter||D6e,i.keep?z6e(r,a,t):H6e(r,a,t)}Dor.exports=W6e});var Wor=s((fGe,zor)=>{"use strict";var X6e=yl(),J6e=Uor(),Y6e=Hor(),_l;X6e()?_l=J6e:_l=Y6e;zor.exports=_l});var Jor=s((cGe,Xor)=>{"use strict";function Z6e(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}Xor.exports=Z6e});var Zor=s((lGe,Yor)=>{"use strict";var $6e=Wor(),Q6e=Jor();function K6e(r,e){var t=Q6e(r,e);return 1/(e-r+1+$6e(t))}Yor.exports=K6e});var s1r=s((pGe,n1r)=>{"use strict";var r4e=u0(),e4e=Ur(),P0=Ja(),$or=Dr(),t4e=te(),Qor=Vr(),rt=br(),i4e=C3(),Kor=Osr(),a4e=x3(),r1r=v1(),n4e=hr(),s4e=Tsr(),u4e=Qsr(),e1r=iur(),o4e=$ur(),Tl=eor(),t1r=qor(),v4e=kor(),i1r=Zor(),f4e=170;function a1r(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(r<0||e<=0)return NaN;if(n=t===void 0?!0:t,l=i,p=0,e>=f4e&&!n)return l&&e*4<r?(p=e*rt(r)-r,p+=rt(i1r(e,r))):!l&&e>4*r?(p=e*rt(r)-r,o=0,p+=rt(Tl(e,r,o)/e)):(p=a1r(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=rt(p)-e+(e-.5)*rt(e),p+=rt(a4e)):(p=e*rt(r)-r,o=0,p+=rt(Tl(e,r,o)/e)):p=rt(p)+r4e(e)),p>r1r?n4e:t4e(p);switch(c=e<30&&e<=r+1&&r<r1r,c?(h=e4e(e),m=h===e,v=m?!1:$or(h-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<i4e&&e>1?u=6:r<.5?-.4/rt(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,n&&e>20&&(y=$or((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=s4e(e,r),n===!1&&(p*=P0(e));break;case 1:p=u4e(e,r),n===!1&&(p*=P0(e));break;case 2:p=n?t1r(e,r):e1r(e,r),p!==0&&(o=0,a=!1,l&&(o=n?1:P0(e),n||p>=1||Kor*p>o?(o/=p,n||e<1||Kor/e>o?(o*=-e,a=!0):o=0):o=0)),p*=Tl(e,r,o)/e,a&&(l=!1,p=-p);break;case 3:l=!l,d=v4e(e,r,l),p=d[0],q=d[1],l=!1,n&&(p/=q);break;case 4:p=n?t1r(e,r):e1r(e,r),p!==0&&(p*=i1r(e,r));break;case 5:p=o4e(e,r),r>=e&&(l=!l);break;case 6:p=n?Qor(r,e)/P0(e+1):Qor(r,e)/e,p*=1-e*r/(e+1);break}return n&&p>1&&(p=1),l&&(g=n?1:P0(e),p=g-p),p}n1r.exports=a1r});var Il=s((dGe,u1r)=>{"use strict";var c4e=s1r();u1r.exports=c4e});var v1r=s((gGe,o1r)=>{"use strict";var l4e=Il(),Rl=z(),p4e=hr();function d4e(r,e,t){return Rl(r)||Rl(e)||Rl(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===p4e?1:l4e(r*t,e)}o1r.exports=d4e});var l1r=s((mGe,c1r)=>{"use strict";var g4e=dr(),m4e=Cu().factory,y4e=Il(),f1r=z(),h4e=hr();function q4e(r,e){if(f1r(r)||f1r(e)||r<0||e<=0)return g4e(NaN);if(r===0)return m4e(0);return t;function t(i){return i<=0?0:i===h4e?1:y4e(i*e,r)}}c1r.exports=q4e});var Ll=s((yGe,d1r)=>{"use strict";var b4e=G(),p1r=v1r(),w4e=l1r();b4e(p1r,"factory",w4e);d1r.exports=p1r});var m1r=s((hGe,g1r)=>{"use strict";var E4e=Ll();function N4e(r,e){return E4e(r,e/2,.5)}g1r.exports=N4e});var h1r=s((qGe,y1r)=>{"use strict";var S4e=Ll().factory;function O4e(r){return S4e(r/2,.5)}y1r.exports=O4e});var w1r=s((bGe,b1r)=>{"use strict";var A4e=G(),q1r=m1r(),_4e=h1r();A4e(q1r,"factory",_4e);b1r.exports=q1r});var O1r=s((wGe,S1r)=>{"use strict";var T4e=mr(),I4e=vr(),R4e=vs(),E1r=C(),N1r=["values","indices","*"];function L4e(r,e){return T4e(e)?I4e(e,"returns")&&(r.returns=e.returns,R4e(N1r,r.returns)===-1)?new TypeError(E1r('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",N1r.join('", "'),r.returns)):null:new TypeError(E1r("invalid argument. Options argument must be an object. Value: `%s`.",e))}S1r.exports=L4e});var _1r=s((EGe,A1r)=>{"use strict";var P4e=vr();function F4e(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),P4e(t,a)?t[a].push(r[n]):t[a]=[r[n]];return t}A1r.exports=F4e});var I1r=s((NGe,T1r)=>{"use strict";var j4e=vr();function M4e(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),j4e(t,a)?t[a].push(n):t[a]=[n];return t}T1r.exports=M4e});var L1r=s((SGe,R1r)=>{"use strict";var x4e=vr();function B4e(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),x4e(t,a)?t[a].push([n,r[n]]):t[a]=[[n,r[n]]];return t}R1r.exports=B4e});var M1r=s((OGe,j1r)=>{"use strict";var P1r=Ce(),F1r=C(),k4e=O1r(),C4e=_1r(),V4e=I1r(),U4e=L1r();function G4e(r,e,t){var i,a,n;if(!P1r(r))throw new TypeError(F1r("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)n=e;else{if(a=k4e(i,e),a)throw a;n=t}if(!P1r(n))throw new TypeError(F1r("invalid argument. Last argument must be a collection. Value: `%s`.",n));if(r.length!==n.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?C4e(r,n):i.returns==="indices"?V4e(r,n):U4e(r,n)}j1r.exports=G4e});var B1r=s((AGe,x1r)=>{"use strict";var D4e=M1r();x1r.exports=D4e});var C1r=s((_Ge,k1r)=>{"use strict";function H4e(r){var e,t,i,a,n,u;for(e=0,t=0,a=0,i=r.length,n=0;n<i;n++)u=r[n],e=u-t,t+=e/(n+1),a+=e*(u-t);return a/(n-1)}k1r.exports=H4e});var G1r=s((TGe,U1r)=>{"use strict";var z4e=qe(),W4e=Nr().isPrimitive,X4e=mr(),J4e=oe(),V1r=vr(),Pl=C();function Y4e(r,e){return X4e(e)?V1r(e,"alpha")&&(r.alpha=e.alpha,!W4e(r.alpha)||J4e(r.alpha))?new TypeError(Pl("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):V1r(e,"groups")&&(r.groups=e.groups,!z4e(r.groups))?new TypeError(Pl("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(Pl("invalid argument. Options argument must be an object. Value: `%s`.",e))}U1r.exports=Y4e});var Y1r=s((IGe,J1r)=>{"use strict";var D1r=z(),m1=_e(),H1r=Vr(),Z4e=Dr(),z1r=c3(),$4e=aa(),W1r=Os(),Q4e=Xv(),K4e=As(),r5e=$4e+1,X1r=1e308;function e5e(r,e){var t,i;return D1r(r)||D1r(e)||m1(e)?NaN:m1(r)||r===0||e<K4e||Z4e(r)>r5e&&e<=0?r:e>W1r?0*r:e<Q4e?(t=H1r(10,-(e+W1r)),i=r*X1r*t,m1(i)?r:z1r(i)/X1r/t):(t=H1r(10,-e),i=r*t,m1(i)?r:z1r(i)/t)}J1r.exports=e5e});var $1r=s((RGe,Z1r)=>{"use strict";var t5e=Y1r();Z1r.exports=t5e});var r2r=s((LGe,K1r)=>{"use strict";var i5e=nt(),a5e=mr(),n5e=de().isPrimitive,Q1r=vr(),Fl=C(),jl=$1r();function s5e(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!a5e(r))throw new TypeError(Fl("invalid argument. First argument must be an object. Value: `%s`.",r));if(Q1r(r,"digits")){if(!i5e(r.digits))throw new TypeError(Fl("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Q1r(r,"decision")){if(!n5e(r.decision))throw new TypeError(Fl("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+jl(this.pValue,-t)+`
`,i+="    statistic: "+jl(this.statistic,-t)+`
`,i+="    df: "+jl(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}K1r.exports=s5e});var i2r=s((PGe,t2r)=>{"use strict";var u5e=Ce(),o5e=mr(),pa=$r(),v5e=Ca(),y1=C(),f5e=w1r(),c5e=B1r(),e2r=br(),l5e=C1r(),p5e=G1r(),d5e=r2r();function g5e(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;if(v=[],e=arguments.length,f={},o5e(arguments[e-1])&&(r=arguments[e-1],e-=1,m=p5e(f,r),m))throw m;if(f.groups){if(a=c5e(arguments[0],f.groups),i=v5e(a),e=i.length,e<2)throw new Error(y1("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(w=0;w<e;w++)v.push(a[i[w]])}else for(w=0;w<e;w++)v.push(arguments[w]);for(u=0,t=0,o=0,y=0,h=new Array(e),q=h.slice(),w=0;w<e;w++){if(p=v[w],!u5e(p))throw new TypeError(y1("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(y1("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[w]=p.length-1,u+=h[w],t+=1/h[w],q[w]=l5e(p),o+=h[w]*q[w],y+=h[w]*e2r(q[w])}if(o/=u,f.alpha===void 0?n=.05:n=f.alpha,n<0||n>1)throw new RangeError(y1("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));return l=u*e2r(o)-y,l/=1+(t-1/u)/(3*(e-1)),d=e-1,c=1-f5e(l,d),g={},pa(g,"rejected",c<=n),pa(g,"alpha",n),pa(g,"pValue",c),pa(g,"statistic",l),pa(g,"df",d),pa(g,"method","Bartlett's test of equal variances"),pa(g,"print",d5e),g}t2r.exports=g5e});var n2r=s((FGe,a2r)=>{"use strict";var m5e=i2r();a2r.exports=m5e});var u2r=s((jGe,s2r)=>{"use strict";var Ml=z(),y5e=wi();function h5e(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,n=e[u],i[o]=n,o+=a,f=1,Ml(n)===!1)for(f;f<r;f++){if(u+=t,v=e[u],Ml(v)){n=v;break}(v>n||v===n&&y5e(v))&&(n=v),i[o]=n,o+=a}if(Ml(n))for(f;f<r;f++)i[o]=n,o+=a;return i}s2r.exports=h5e});var v2r=s((MGe,o2r)=>{"use strict";var xl=z(),q5e=wi();function b5e(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return a;if(v=i,f=u,o=e[v],a[f]=o,f+=n,l=1,xl(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],xl(c)){o=c;break}(c>o||c===o&&q5e(c))&&(o=c),a[f]=o,f+=n}if(xl(o))for(l;l<r;l++)a[f]=o,f+=n;return a}o2r.exports=b5e});var l2r=s((xGe,c2r)=>{"use strict";var w5e=G(),f2r=u2r(),E5e=v2r();w5e(f2r,"ndarray",E5e);c2r.exports=f2r});var d2r=s((BGe,p2r)=>{"use strict";var N5e=l2r();p2r.exports=N5e});var m2r=s((kGe,g2r)=>{"use strict";var S5e=z(),O5e=wi();function A5e(r,e,t){var i,a,n,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?a=(1-r)*t:a=0,i=e[a],u=1;u<r;u++){if(a+=t,n=e[a],S5e(n))return n;(n>i||n===i&&O5e(n))&&(i=n)}return i}g2r.exports=A5e});var h2r=s((CGe,y2r)=>{"use strict";var _5e=z(),T5e=wi();function I5e(r,e,t,i){var a,n,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(n=i,a=e[n],o=1;o<r;o++){if(n+=t,u=e[n],_5e(u))return u;(u>a||u===a&&T5e(u))&&(a=u)}return a}y2r.exports=I5e});var w2r=s((VGe,b2r)=>{"use strict";var R5e=G(),q2r=m2r(),L5e=h2r();R5e(q2r,"ndarray",L5e);b2r.exports=q2r});var N2r=s((UGe,E2r)=>{"use strict";var P5e=w2r();E2r.exports=P5e});var A2r=s((GGe,O2r)=>{"use strict";var S2r=z(),F5e=wi();function j5e(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=a;if(f===r)return NaN;if(n=e[u],S2r(n))return n;for(f+=1,f;f<r;f++)if(u+=t,o+=a,!i[o]){if(v=e[u],S2r(v))return v;(v>n||v===n&&F5e(v))&&(n=v)}return n}O2r.exports=j5e});var I2r=s((DGe,T2r)=>{"use strict";var _2r=z(),M5e=wi();function x5e(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&a[f]!==0;l++)v+=t,f+=n;if(l===r)return NaN;if(o=e[v],_2r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=n,!a[f]){if(c=e[v],_2r(c))return c;(c>o||c===o&&M5e(c))&&(o=c)}return o}T2r.exports=x5e});var P2r=s((HGe,L2r)=>{"use strict";var B5e=G(),R2r=A2r(),k5e=I2r();B5e(R2r,"ndarray",k5e);L2r.exports=R2r});var j2r=s((zGe,F2r)=>{"use strict";var C5e=ca(),V5e=Pr(),Bl=z();function U5e(r,e,t){var i,a;return Bl(r)||Bl(e)||Bl(t)||t<0?NaN:t===0?r<e?0:1:(i=t*V5e(2),a=r-e,.5*C5e(-a/i))}F2r.exports=U5e});var x2r=s((WGe,M2r)=>{"use strict";var G5e=dr(),D5e=Cu().factory,kl=z(),H5e=Pr(),z5e=ca();function W5e(r,e){var t;if(kl(r)||kl(e)||e<0)return G5e(NaN);if(e===0)return D5e(r);return t=e*H5e(2),i;function i(a){var n;return kl(a)?NaN:(n=a-r,.5*z5e(-n/t))}}M2r.exports=W5e});var C2r=s((XGe,k2r)=>{"use strict";var X5e=G(),B2r=j2r(),J5e=x2r();X5e(B2r,"factory",J5e);k2r.exports=B2r});var G2r=s((JGe,U2r)=>{"use strict";var V2r=z(),Y5e=br(),Z5e=mi(),$5e=wl();function Q5e(r,e){return V2r(r)||V2r(e)||e<=0?NaN:.5*Y5e(Z5e*$5e*e*e)}U2r.exports=Q5e});var H2r=s((YGe,D2r)=>{"use strict";var K5e=G2r();D2r.exports=K5e});var X2r=s((ZGe,W2r)=>{"use strict";var z2r=z();function r8e(r,e){return z2r(r)||z2r(e)||e<=0?NaN:0}W2r.exports=r8e});var Y2r=s(($Ge,J2r)=>{"use strict";var e8e=X2r();J2r.exports=e8e});var $2r=s((QGe,Z2r)=>{"use strict";var t8e=Ur(),i8e=[a8e,n8e,s8e,u8e,o8e,v8e,f8e,c8e,l8e,p8e,d8e,g8e,m8e,y8e,h8e,q8e,b8e,w8e,E8e,N8e,S8e,O8e,A8e,_8e,T8e,I8e,R8e,L8e,P8e,F8e,j8e,M8e,x8e,B8e,k8e,C8e,V8e,U8e,G8e,D8e,H8e,z8e,W8e,X8e,J8e,Y8e,Z8e,$8e,Q8e,K8e,rpe,epe,tpe,ipe,ape,npe,spe,upe,ope,vpe,fpe,cpe,lpe,ppe,dpe,gpe,mpe,ype,hpe,qpe,bpe,wpe,Epe,Npe,Spe,Ope,Ape,_pe,Tpe,Ipe,Rpe,Lpe,Ppe,Fpe,jpe,Mpe,xpe,Bpe,kpe,Cpe,Vpe,Upe,Gpe,Dpe,Hpe,zpe,Wpe,Xpe,Jpe,Ype,Zpe];function a8e(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function n8e(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function s8e(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function u8e(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function o8e(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function v8e(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function f8e(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function c8e(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function l8e(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function p8e(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function d8e(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function g8e(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function m8e(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function y8e(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function h8e(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function q8e(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function b8e(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function w8e(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function E8e(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function N8e(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function S8e(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function O8e(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function A8e(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function _8e(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function T8e(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function I8e(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function R8e(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function L8e(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function P8e(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function F8e(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function j8e(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function M8e(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function x8e(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function B8e(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function k8e(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function C8e(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function V8e(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function U8e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function G8e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function D8e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function H8e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function z8e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function W8e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function X8e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function J8e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function Y8e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function Z8e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function $8e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function Q8e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function K8e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function rpe(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function epe(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function tpe(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function ipe(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function ape(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function npe(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function spe(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function upe(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function ope(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function vpe(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function fpe(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function cpe(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function lpe(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function ppe(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function dpe(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function gpe(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function mpe(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function ype(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function hpe(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function qpe(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function bpe(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function wpe(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function Epe(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Npe(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function Spe(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Ope(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function Ape(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function _pe(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Tpe(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Ipe(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Rpe(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function Lpe(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function Ppe(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Fpe(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function jpe(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function Mpe(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function xpe(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function Bpe(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function kpe(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function Cpe(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function Vpe(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function Upe(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function Gpe(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function Dpe(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function Hpe(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function zpe(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function Wpe(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function Xpe(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function Jpe(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function Ype(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function Zpe(){return 1}function $pe(r){var e=t8e(r),t=i8e[e];return t(2*r-(2*e+1))}Z2r.exports=$pe});var tvr=s((KGe,evr)=>{"use strict";var Q2r=te(),Qpe=hr(),K2r=$2r(),rvr=.5641895835477563;function Kpe(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?rvr/r:(e=r*r,rvr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):K2r(400/(4+r)):r<-26.7?Qpe:(e=r*r,r<-6.1?2*Q2r(e):2*Q2r(e)-K2r(400/(4-r)))}evr.exports=Kpe});var Cl=s((rDe,ivr)=>{"use strict";var r7e=tvr();ivr.exports=r7e});var svr=s((eDe,nvr)=>{"use strict";var e7e=br(),t7e=di(),i7e=Ls(),a7e=ca(),n7e=Cl(),s7e=Rr(),Vl=z(),avr=.7071067811865475;function u7e(r,e,t){var i;return Vl(r)||Vl(e)||Vl(t)||t<0?NaN:t===0?r<e?s7e:0:(i=(r-e)/t,i<-1?e7e(n7e(-i*avr)/2)-i7e(i)/2:t7e(-a7e(i*avr)/2))}nvr.exports=u7e});var vvr=s((tDe,ovr)=>{"use strict";var uvr=z(),o7e=Rr();function v7e(r,e){return uvr(r)||uvr(e)?NaN:r<e?o7e:0}ovr.exports=v7e});var lvr=s((iDe,cvr)=>{"use strict";var f7e=dr(),fvr=z(),c7e=Rr();function l7e(r){if(fvr(r))return f7e(NaN);return e;function e(t){return fvr(t)?NaN:t<r?c7e:0}}cvr.exports=l7e});var gvr=s((aDe,dvr)=>{"use strict";var p7e=G(),pvr=vvr(),d7e=lvr();p7e(pvr,"factory",d7e);dvr.exports=pvr});var qvr=s((nDe,hvr)=>{"use strict";var g7e=dr(),m7e=gvr().factory,mvr=z(),y7e=di(),h7e=Ls(),q7e=ca(),b7e=Cl(),w7e=br(),yvr=.7071067811865475;function E7e(r,e){if(mvr(r)||mvr(e)||e<0)return g7e(NaN);if(e===0)return m7e(r);return t;function t(i){var a=(i-r)/e;return a<-1?w7e(b7e(-a*yvr)/2)-h7e(a)/2:y7e(-q7e(a*yvr)/2)}}hvr.exports=E7e});var Evr=s((sDe,wvr)=>{"use strict";var N7e=G(),bvr=svr(),S7e=qvr();N7e(bvr,"factory",S7e);wvr.exports=bvr});var Ul=s((uDe,Nvr)=>{"use strict";var O7e=1.8378770664093456;Nvr.exports=O7e});var Avr=s((oDe,Ovr)=>{"use strict";var A7e=br(),Svr=Vr(),_7e=Ul(),T7e=Rr(),I7e=hr(),Gl=z();function R7e(r,e,t){var i,a,n;return Gl(r)||Gl(e)||Gl(t)||t<0?NaN:t===0?r===e?I7e:T7e:(i=Svr(t,2),a=-.5*(2*A7e(t)+_7e),n=-1/(2*i),a+n*Svr(r-e,2))}Ovr.exports=R7e});var Ivr=s((vDe,Tvr)=>{"use strict";var L7e=hr(),P7e=Rr(),_vr=z();function F7e(r,e){return _vr(r)||_vr(e)?NaN:r===e?L7e:P7e}Tvr.exports=F7e});var Pvr=s((fDe,Lvr)=>{"use strict";var j7e=dr(),M7e=hr(),x7e=Rr(),Rvr=z();function B7e(r){if(Rvr(r))return j7e(NaN);return e;function e(t){return Rvr(t)?NaN:t===r?M7e:x7e}}Lvr.exports=B7e});var Mvr=s((cDe,jvr)=>{"use strict";var k7e=G(),Fvr=Ivr(),C7e=Pvr();k7e(Fvr,"factory",C7e);jvr.exports=Fvr});var Cvr=s((lDe,kvr)=>{"use strict";var V7e=dr(),U7e=Mvr().factory,G7e=Ul(),xvr=z(),Bvr=Vr(),D7e=br();function H7e(r,e){var t,i,a;if(xvr(r)||xvr(e)||e<0)return V7e(NaN);if(e===0)return U7e(r);return t=Bvr(e,2),i=-.5*(2*D7e(e)+G7e),a=-1/(2*t),n;function n(u){return i+a*Bvr(u-r,2)}}kvr.exports=H7e});var Gvr=s((pDe,Uvr)=>{"use strict";var z7e=G(),Vvr=Avr(),W7e=Cvr();z7e(Vvr,"factory",W7e);Uvr.exports=Vvr});var zvr=s((dDe,Hvr)=>{"use strict";var Dvr=z();function X7e(r,e){return Dvr(r)||Dvr(e)||e<=0?NaN:r}Hvr.exports=X7e});var Xvr=s((gDe,Wvr)=>{"use strict";var J7e=zvr();Wvr.exports=J7e});var Zvr=s((mDe,Yvr)=>{"use strict";var Jvr=z();function Y7e(r,e){return Jvr(r)||Jvr(e)||e<=0?NaN:r}Yvr.exports=Y7e});var Qvr=s((yDe,$vr)=>{"use strict";var Z7e=Zvr();$vr.exports=Z7e});var r3r=s((hDe,Kvr)=>{"use strict";var Dl=z(),$7e=te(),Q7e=Vr();function K7e(r,e,t){return Dl(r)||Dl(e)||Dl(t)||t<=0?NaN:$7e(e*r+.5*Q7e(t*r,2))}Kvr.exports=K7e});var t3r=s((qDe,e3r)=>{"use strict";var r9e=dr(),Hl=z(),e9e=te(),t9e=Vr();function i9e(r,e){if(Hl(r)||Hl(e)||e<=0)return r9e(NaN);return t;function t(i){return Hl(i)?NaN:e9e(r*i+.5*t9e(e*i,2))}}e3r.exports=i9e});var n3r=s((bDe,a3r)=>{"use strict";var a9e=G(),i3r=r3r(),n9e=t3r();a9e(i3r,"factory",n9e);a3r.exports=i3r});var o3r=s((wDe,u3r)=>{"use strict";var s3r=z();function s9e(r,e){return s3r(r)||s3r(e)||e<=0?NaN:r}u3r.exports=s9e});var f3r=s((EDe,v3r)=>{"use strict";var u9e=o3r();v3r.exports=u9e});var p3r=s((NDe,l3r)=>{"use strict";var o9e=te(),c3r=Vr(),v9e=Pr(),f9e=mi(),c9e=hr(),zl=z();function l9e(r,e,t){var i,a,n;return zl(r)||zl(e)||zl(t)||t<0?NaN:t===0?r===e?c9e:0:(i=c3r(t,2),a=1/v9e(i*f9e),n=-1/(2*i),a*o9e(n*c3r(r-e,2)))}l3r.exports=l9e});var m3r=s((SDe,g3r)=>{"use strict";var p9e=hr(),d3r=z();function d9e(r,e){return d3r(r)||d3r(e)?NaN:r===e?p9e:0}g3r.exports=d9e});var q3r=s((ODe,h3r)=>{"use strict";var g9e=dr(),m9e=hr(),y3r=z();function y9e(r){if(y3r(r))return g9e(NaN);return e;function e(t){return y3r(t)?NaN:t===r?m9e:0}}h3r.exports=y9e});var E3r=s((ADe,w3r)=>{"use strict";var h9e=G(),b3r=m3r(),q9e=q3r();h9e(b3r,"factory",q9e);w3r.exports=b3r});var O3r=s((_De,S3r)=>{"use strict";var b9e=dr(),w9e=E3r().factory,Wl=z(),E9e=Pr(),N9e=te(),N3r=Vr(),S9e=mi();function O9e(r,e){var t,i,a;if(Wl(r)||Wl(e)||e<0)return b9e(NaN);if(e===0)return w9e(r);return t=N3r(e,2),i=1/E9e(t*S9e),a=-1/(2*t),n;function n(u){return Wl(u)?NaN:i*N9e(a*N3r(u-r,2))}}S3r.exports=O9e});var T3r=s((TDe,_3r)=>{"use strict";var A9e=G(),A3r=p3r(),_9e=O3r();A9e(A3r,"factory",_9e);_3r.exports=A3r});var L3r=s((IDe,R3r)=>{"use strict";var I3r=z();function T9e(r,e){return I3r(r)||I3r(e)||e<=0?NaN:0}R3r.exports=T9e});var F3r=s((RDe,P3r)=>{"use strict";var I9e=L3r();P3r.exports=I9e});var x3r=s((LDe,M3r)=>{"use strict";var j3r=z();function R9e(r,e){return j3r(r)||j3r(e)||e<=0?NaN:e}M3r.exports=R9e});var k3r=s((PDe,B3r)=>{"use strict";var L9e=x3r();B3r.exports=L9e});var U3r=s((FDe,V3r)=>{"use strict";var C3r=z();function P9e(r,e){return C3r(r)||C3r(e)||e<=0?NaN:e*e}V3r.exports=P9e});var D3r=s((jDe,G3r)=>{"use strict";var F9e=U3r();G3r.exports=F9e});var z3r=s((MDe,H3r)=>{"use strict";var Be=$r(),j9e=C2r(),M9e=H2r(),x9e=Y2r(),B9e=Evr(),k9e=Gvr(),C9e=Xvr(),V9e=Qvr(),U9e=n3r(),G9e=f3r(),D9e=T3r(),H9e=Mc(),z9e=F3r(),W9e=k3r(),X9e=D3r();function J9e(r){return Be(r,"cdf",j9e),Be(r,"entropy",M9e),Be(r,"kurtosis",x9e),Be(r,"logcdf",B9e),Be(r,"logpdf",k9e),Be(r,"mean",C9e),Be(r,"median",V9e),Be(r,"mgf",U9e),Be(r,"mode",G9e),Be(r,"pdf",D9e),Be(r,"quantile",H9e),Be(r,"skewness",z9e),Be(r,"stdev",W9e),Be(r,"variance",X9e),r}H3r.exports=J9e});var X3r=s((xDe,W3r)=>{"use strict";var Y9e=$r(),Z9e=z3r();function $9e(r){return Y9e(r,"normal",Z9e({})),r}W3r.exports=$9e});var Y3r=s((BDe,J3r)=>{"use strict";var F0=$r(),Q9e=n2r(),K9e=d2r().ndarray,rde=N2r().ndarray,ede=P2r().ndarray,tde=X3r();function ide(r){return F0(r,"bartlettTest",Q9e),F0(r,"cumax",K9e),F0(r,"max",rde),F0(r,"mskmax",ede),F0(r,"dists",tde({})),r}J3r.exports=ide});var $3r=s((kDe,Z3r)=>{"use strict";var ade=Jr().isPrimitive,nde=C();function sde(r){return e;function e(t){if(!ade(t))throw new TypeError(nde("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Z3r.exports=sde});var K3r=s((CDe,Q3r)=>{"use strict";var ude=$3r();Q3r.exports=ude});var ifr=s((VDe,tfr)=>{"use strict";var rfr=Jr().isPrimitive,efr=C();function ode(r){return e;function e(t,i){if(!rfr(t))throw new TypeError(efr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!rfr(i))throw new TypeError(efr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}tfr.exports=ode});var nfr=s((UDe,afr)=>{"use strict";var vde=ifr();afr.exports=vde});var ufr=s((GDe,sfr)=>{"use strict";var Xl=Jr().isPrimitive,Jl=C();function fde(r){return e;function e(t,i,a){if(!Xl(t))throw new TypeError(Jl("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Xl(i))throw new TypeError(Jl("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Xl(a))throw new TypeError(Jl("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(a)));return r(t,i,a)}}sfr.exports=fde});var vfr=s((DDe,ofr)=>{"use strict";var cde=ufr();ofr.exports=cde});var cfr=s((HDe,ffr)=>{"use strict";var Yl=$r(),lde=K3r(),pde=nfr(),dde=vfr();function gde(r){return Yl(r,"s_o",lde),Yl(r,"ss_o",pde),Yl(r,"sss_o",dde),r}ffr.exports=gde});var pfr=s((zDe,lfr)=>{"use strict";function mde(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}lfr.exports=mde});var h1=s((WDe,dfr)=>{"use strict";var yde=pfr();dfr.exports=yde});var mfr=s((XDe,gfr)=>{"use strict";var hde=h1(),qde=oa(),q1=yi(),bde=bi(),wde=/\s+/g,Ede=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Nde=/(?:\s|^)([^\s]+)(?=\s|$)/g,Sde=/([a-z0-9])([A-Z])/g;function Ode(r,e,t){return e=qde(e),t===0?e:hde(e)}function Ade(r){return r=q1(r,Ede," "),r=q1(r,wde," "),r=q1(r,Sde,"$1 $2"),r=bde(r),q1(r,Nde,Ode)}gfr.exports=Ade});var hfr=s((JDe,yfr)=>{"use strict";var _de=mfr();yfr.exports=_de});var bfr=s((YDe,qfr)=>{"use strict";var Tde=Jr().isPrimitive,Ide=C(),Rde=hfr();function Lde(r){if(!Tde(r))throw new TypeError(Ide("invalid argument. First argument must be a string. Value: `%s`.",r));return Rde(r)}qfr.exports=Lde});var Efr=s((ZDe,wfr)=>{"use strict";var Pde=bfr();wfr.exports=Pde});var Sfr=s(($De,Nfr)=>{"use strict";var Fde=Jr().isPrimitive,jde=C(),Mde=h1();function xde(r){if(!Fde(r))throw new TypeError(jde("invalid argument. First argument must be a string. Value: `%s`.",r));return Mde(r)}Nfr.exports=xde});var Afr=s((QDe,Ofr)=>{"use strict";var Bde=Sfr();Ofr.exports=Bde});var Tfr=s((KDe,_fr)=>{"use strict";function kde(r){return r.toUpperCase()}_fr.exports=kde});var Rfr=s((rHe,Ifr)=>{"use strict";var Cde=Tfr();Ifr.exports=Cde});var Pfr=s((eHe,Lfr)=>{"use strict";var Vde=Rfr(),Zl=yi(),Ude=bi(),Gde=/\s+/g,Dde=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Hde=/([a-z0-9])([A-Z])/g;function zde(r){return r=Zl(r,Dde," "),r=Zl(r,Hde,"$1 $2"),r=Ude(r),r=Zl(r,Gde,"_"),Vde(r)}Lfr.exports=zde});var jfr=s((tHe,Ffr)=>{"use strict";var Wde=Pfr();Ffr.exports=Wde});var xfr=s((iHe,Mfr)=>{"use strict";var Xde=Jr().isPrimitive,Jde=C(),Yde=jfr();function Zde(r){if(!Xde(r))throw new TypeError(Jde("invalid argument. Must provide a string. Value: `%s`.",r));return Yde(r)}Mfr.exports=Zde});var kfr=s((aHe,Bfr)=>{"use strict";var $de=xfr();Bfr.exports=$de});var Vfr=s((nHe,Cfr)=>{"use strict";var Qde=oa(),$l=yi(),Kde=bi(),rge=/\s+/g,ege=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,tge=/([a-z0-9])([A-Z])/g;function ige(r){return r=$l(r,ege," "),r=$l(r,tge,"$1 $2"),r=Kde(r),r=$l(r,rge,"-"),Qde(r)}Cfr.exports=ige});var Gfr=s((sHe,Ufr)=>{"use strict";var age=Vfr();Ufr.exports=age});var Hfr=s((uHe,Dfr)=>{"use strict";var nge=Jr().isPrimitive,sge=C(),uge=Gfr();function oge(r){if(!nge(r))throw new TypeError(sge("invalid argument. Must provide a string. Value: `%s`.",r));return uge(r)}Dfr.exports=oge});var Wfr=s((oHe,zfr)=>{"use strict";var vge=Hfr();zfr.exports=vge});var Jfr=s((vHe,Xfr)=>{"use strict";var fge=Jr().isPrimitive,cge=C(),lge=oa();function pge(r){if(!fge(r))throw new TypeError(cge("invalid argument. Must provide a string. Value: `%s`.",r));return lge(r)}Xfr.exports=pge});var Zfr=s((fHe,Yfr)=>{"use strict";var dge=Jfr();Yfr.exports=dge});var Qfr=s((cHe,$fr)=>{"use strict";var gge=h1(),mge=oa(),b1=yi(),yge=bi(),hge=/\s+/g,qge=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,bge=/(?:\s|^)([^\s]+)(?=\s|$)/g,wge=/([a-z0-9])([A-Z])/g;function Ege(r,e){return gge(mge(e))}function Nge(r){return r=b1(r,qge," "),r=b1(r,hge," "),r=b1(r,wge,"$1 $2"),r=yge(r),b1(r,bge,Ege)}$fr.exports=Nge});var rcr=s((lHe,Kfr)=>{"use strict";var Sge=Qfr();Kfr.exports=Sge});var tcr=s((pHe,ecr)=>{"use strict";var Oge=Jr().isPrimitive,Age=C(),_ge=rcr();function Tge(r){if(!Oge(r))throw new TypeError(Age("invalid argument. First argument must be a string. Value: `%s`.",r));return _ge(r)}ecr.exports=Tge});var acr=s((dHe,icr)=>{"use strict";var Ige=tcr();icr.exports=Ige});var scr=s((gHe,ncr)=>{"use strict";var Rge=oa(),Ql=yi(),Lge=bi(),Pge=/\s+/g,Fge=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,jge=/([a-z0-9])([A-Z])/g;function Mge(r){return r=Ql(r,Fge," "),r=Ql(r,jge,"$1 $2"),r=Lge(r),r=Ql(r,Pge,"_"),Rge(r)}ncr.exports=Mge});var ocr=s((mHe,ucr)=>{"use strict";var xge=scr();ucr.exports=xge});var fcr=s((yHe,vcr)=>{"use strict";var Bge=Jr().isPrimitive,kge=C(),Cge=ocr();function Vge(r){if(!Bge(r))throw new TypeError(kge("invalid argument. Must provide a string. Value: `%s`.",r));return Cge(r)}vcr.exports=Vge});var lcr=s((hHe,ccr)=>{"use strict";var Uge=fcr();ccr.exports=Uge});var gcr=s((qHe,dcr)=>{"use strict";var Gge=mr(),pcr=vr(),Dge=de().isPrimitive,Hge=Jr().isPrimitive,Kl=C();function zge(r,e){return Gge(e)?pcr(e,"flags")&&(r.flags=e.flags,!Hge(r.flags))?new TypeError(Kl("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):pcr(e,"capture")&&(r.capture=e.capture,!Dge(r.capture))?new TypeError(Kl("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Kl("invalid argument. Options argument must be an object. Value: `%s`.",e))}dcr.exports=zge});var w1=s((bHe,ycr)=>{"use strict";var Wge=gcr(),mcr=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function Xge(r){var e,t;if(arguments.length>0){if(e={},t=Wge(e,r),t)throw t;return e.capture?new RegExp("("+mcr+")",e.flags):new RegExp(mcr,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}ycr.exports=Xge});var qcr=s((wHe,hcr)=>{"use strict";var Jge=w1(),Yge=Jge({capture:!0});hcr.exports=Yge});var wcr=s((EHe,bcr)=>{"use strict";var Zge=w1(),$ge=Zge();bcr.exports=$ge});var Scr=s((NHe,Ncr)=>{"use strict";var Ecr=G(),r6=w1(),Qge=qcr(),Kge=wcr();Ecr(r6,"REGEXP",Kge);Ecr(r6,"REGEXP_CAPTURE",Qge);Ncr.exports=r6});var Acr=s((SHe,Ocr)=>{"use strict";var rme=Scr().REGEXP;function eme(r){var e,t,i,a;for(e=!0,t="",a=0;a<r.length;a++)i=r.charAt(a),rme.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}Ocr.exports=eme});var Tcr=s((OHe,_cr)=>{"use strict";var tme=Acr();_cr.exports=tme});var Rcr=s((AHe,Icr)=>{"use strict";var ime=Jr().isPrimitive,ame=C(),nme=Tcr();function sme(r){if(!ime(r))throw new TypeError(ame("invalid argument. Must provide a string. Value: `%s`.",r));return nme(r)}Icr.exports=sme});var Pcr=s((_He,Lcr)=>{"use strict";var ume=Rcr();Lcr.exports=ume});var jcr=s((THe,Fcr)=>{"use strict";function ome(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}Fcr.exports=ome});var xcr=s((IHe,Mcr)=>{"use strict";var vme=jcr();Mcr.exports=vme});var kcr=s((RHe,Bcr)=>{"use strict";var fme=Jr().isPrimitive,cme=C(),lme=xcr();function pme(r){if(!fme(r))throw new TypeError(cme("invalid argument. First argument must be a string. Value: `%s`.",r));return lme(r)}Bcr.exports=pme});var Vcr=s((LHe,Ccr)=>{"use strict";var dme=kcr();Ccr.exports=dme});var Gcr=s((PHe,Ucr)=>{"use strict";var gme=Jr().isPrimitive,mme=C();function yme(r){if(!gme(r))throw new TypeError(mme("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}Ucr.exports=yme});var Hcr=s((FHe,Dcr)=>{"use strict";var hme=Gcr();Dcr.exports=hme});var Wcr=s((jHe,zcr)=>{"use strict";var mt=$r(),qme=Efr(),bme=Afr(),wme=kfr(),Eme=Wfr(),Nme=Zfr(),Sme=acr(),Ome=lcr(),Ame=Pcr(),_me=Vcr(),Tme=Hcr();function Ime(r){return mt(r,"camelcase",qme),mt(r,"capitalize",bme),mt(r,"constantcase",wme),mt(r,"kebabcase",Eme),mt(r,"lowercase",Nme),mt(r,"pascalcase",Sme),mt(r,"snakecase",Ome),mt(r,"startcase",Ame),mt(r,"uncapitalize",_me),mt(r,"uppercase",Tme),r}zcr.exports=Ime});var Jcr=s((MHe,Xcr)=>{"use strict";var Rme=$r(),Lme=cfr(),Pme=Wcr();function Fme(r){return Rme(r,"tools",Lme({})),r=Pme(r),r}Xcr.exports=Fme});var Zcr=s((xHe,Ycr)=>{"use strict";var yt=$r(),jme=Ah(),Mme=Uw(),xme=Zw(),Bme=XS(),kme=oC(),Cme=Uz(),Vme=psr(),Ume=Nsr(),Gme=Y3r(),Dme=Jcr();function Hme(){var r={};return yt(r,"array",jme({})),yt(r,"assert",Mme({})),yt(r,"blas",xme({})),yt(r,"datasets",Bme({})),yt(r,"math",kme({})),yt(r,"ndarray",Cme({})),yt(r,"random",Vme({})),yt(r,"simulate",Ume({})),yt(r,"stats",Gme({})),yt(r,"string",Dme({})),r}Ycr.exports=Hme});var Qcr=s((BHe,$cr)=>{"use strict";var zme=G(),e6=Zcr();zme(e6,"CACHED",e6());$cr.exports=e6});var Xme=s((kHe,Kcr)=>{var Wme=Qcr().CACHED;Kcr.exports=Wme});return Xme();})();
/**
* Multiplies a vector by a constant and adds the result to another vector.
*
* @customfunction
* @param {integer} N - number of elements on which to operate
* @param {number} alpha - scalar constant
* @param {Range<number>} x - first vector
* @param {integer} strideX - index increment for the first vector
* @param {integer} offsetX - index offset for the first vector
* @param {Range<number>} y - second vector
* @param {integer} strideY - index increment for the second vector
* @param {integer} offsetY - index offset for the second vector
* @returns {Range<number>} results
*
* @example
* STDLIB_BLAS_SAXPY( 10, 5, A1:A100, 1, 0, B1:B100, 1, 0 )
*/
function STDLIB_BLAS_SAXPY( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) { 
	var out;
	ns.assert.isNonNegativeInteger( N, 'Number of elements' );
	ns.assert.isNumber( alpha, 'Scalar constant' );
	ns.assert.isRange1d( x, 'First vector argument' );
	ns.assert.isInteger( strideX, 'Stride for first vector' );
	ns.assert.isNonNegativeInteger( offsetX, 'Offset for first vector' );
	ns.assert.isRange1d( y, 'Second vector argument' );
	ns.assert.isInteger( strideY, 'Stride for second vector' );
	ns.assert.isNonNegativeInteger( offsetY, 'Offset for second vector' );
	out = ns.blas.saxpy( N, alpha, ns.array.flatten2d( x ), strideX, offsetX, ns.array.flatten2d( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
}
/**
* Multiplies a vector by a constant and adds the result to another vector.
*
* @customfunction
* @param {integer} N - number of elements on which to operate
* @param {number} alpha - scalar constant
* @param {Range<number>} x - first vector
* @param {integer} strideX - index increment for the first vector
* @param {integer} offsetX - index offset for the first vector
* @param {Range<number>} y - second vector
* @param {integer} strideY - index increment for the second vector
* @param {integer} offsetY - index offset for the second vector
* @returns {Range<number>} results
*
* @example
* STDLIB_BLAS_DAXPY( 10, 5, A1:A100, 1, 0, B1:B100, 1, 0 )
*/
function STDLIB_BLAS_DAXPY( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) { 
	var out;
	ns.assert.isNonNegativeInteger( N, 'Number of elements' );
	ns.assert.isNumber( alpha, 'Scalar constant' );
	ns.assert.isRange1d( x, 'First vector argument' );
	ns.assert.isInteger( strideX, 'Stride for first vector' );
	ns.assert.isNonNegativeInteger( offsetX, 'Offset for first vector' );
	ns.assert.isRange1d( y, 'Second vector argument' );
	ns.assert.isInteger( strideY, 'Stride for second vector' );
	ns.assert.isNonNegativeInteger( offsetY, 'Offset for second vector' );
	out = ns.blas.daxpy( N, alpha, ns.array.flatten2d( x ), strideX, offsetX, ns.array.flatten2d( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
}
/**
* Fills one or more cells with a specified value.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {*} value - fill value
* @returns {Range} filled range
*
* @example
* STDLIB_FULL( 10, 1, 5 )
*
* @example
* STDLIB_FULL( 10, 1, "beep" )
*/
function STDLIB_FULL( nrows, ncols, value ) {
	ns.assert.isPositiveInteger( nrows, 'Number of rows' );
	ns.assert.isPositiveInteger( ncols, 'Number of columns' );
	return ns.array.filled2d( value, [ nrows, ncols ] );
}
/**
* Fills one or more cells with zeros.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @returns {Range<integer>} zeros
*
* @example
* STDLIB_ZEROS( 10, 1 )
*/
function STDLIB_ZEROS( nrows, ncols ) {
	ns.assert.isPositiveInteger( nrows, 'Number of rows' );
	ns.assert.isPositiveInteger( ncols, 'Number of columns' );
	return ns.array.zeros2d( [ nrows, ncols ] );
}
/**
* Fills one or more cells with ones.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @returns {Range<integer>} ones
*
* @example
* STDLIB_ONES( 10, 1 )
*/
function STDLIB_ONES( nrows, ncols ) {
	ns.assert.isPositiveInteger( nrows, 'Number of rows' );
	ns.assert.isPositiveInteger( ncols, 'Number of columns' );
	return ns.array.ones2d( [ nrows, ncols ] );
}
/**
* Generates a linearly spaced range over a specified interval.
*
* ## Notes
*
* -   If `length` is `1`, the function returns a range containing `stop`, but not `start`, when the endpoint option is `TRUE`; otherwise, the function returns a range containing `start`, but not `stop`.
* -   When the output array length is greater than `1` and endpoint option value is `TRUE`, the output range is guaranteed to include the interval start and end values. Beware, however, that values between the interval start and end values are subject to floating-point rounding errors.
* -   When the endpoint option value is `FALSE`, the function generates `length + 1` linearly spaced values over the interval `[start, stop]` and only writes `length` values to the output range, thus excluding `stop` from the output range. Accordingly, for a fixed `length`, the spacing between adjacent values in the output range changes depending on the endpoint option value.
* -   By default, the function generates a linearly spaced range over the closed interval `[start, stop]`. To generate linearly spaced values over the half-open interval `[start, stop)`, set the endpoint option value to `FALSE`.
* -   If `start` is less than `stop`, the output range will contain ascending values, and, if `start` is greater than `stop`, the output range will contain descending values.
*
* @customfunction
* @param {number} start - start of interval
* @param {number} stop - end of interval
* @param {integer} length - range length
* @param {string} endpoint - endpoint option name
* @param {boolean} endpointValue - endpoint option value indicating whether to include the stop value in the output range (default: `TRUE`)
* @returns {Range<number>} linearly spaced range
*
* @example
* STDLIB_LINSPACE( 1, 10, 100 )
*
* @example
* STDLIB_LINSPACE( 1, 10, 100, "endpoint", FALSE )
*/
function STDLIB_LINSPACE( start, stop, length, endpoint, endpointValue ) { 
	var opts;
	var o;
	var v;
	var i;
	ns.assert.isNumber( start, 'Start of interval' );
	ns.assert.isNumber( stop, 'End of interval' );
	ns.assert.isPositiveInteger( length, 'Range length' );
	opts = {
		'dtype': 'generic'
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'endpoint' ) {
			ns.assert.isBoolean( v, 'Endpoint' );
			opts[ o ] = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	return ns.array.linspace( start, stop, length, opts );
}
/**
* Generates a sawtooth wave.
*
* @customfunction
* @param {integer} N - number of values
* @param {string} period - period option name
* @param {integer} periodValue - period value (default: `10`)
* @param {string} amplitude - amplitude option name
* @param {number} amplitudeValue - amplitude value (default: `1`)
* @param {string} offset - phase offset option name
* @param {integer} offsetValue - phase offset value (default: `0`)
* @returns {Range<number>} simulated values
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "amplitude", 20 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "offset", 3 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10, "amplitude", 20, "offset", 3 )
*/
function STDLIB_SAWTOOTH_WAVE( N, period, periodValue, amplitude, amplitudeValue, offset, offsetValue ) { 
	var opts;
	var it;
	var o;
	var v;
	var i;
	ns.assert.isNonNegativeInteger( N, 'Number of values' );
	opts = {
		'iter': N
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'period' ) {
			ns.assert.isPositiveInteger( v, 'Period' );
			opts[ o ] = v;
		} else if ( o === 'amplitude' ) {
			ns.assert.isNonNegativeNumber( v, 'Amplitude' );
			opts[ o ] = v;
		} else if ( o === 'offset' ) {
			ns.assert.isInteger( v, 'Offset' );
			opts[ o ] = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	it = ns.simulate.iterSawtoothWave( opts );
	return ns.array.iterator2array( it );
}
/**
* Anscombe's quartet.
*
* @customfunction
* @returns {Range<number>} dataset
*
* @example
* STDLIB_ANSCOMBES_QUARTET()
*/
function STDLIB_ANSCOMBES_QUARTET() {
	var data;
	var out;
	var tmp;
	var d;
	var i;
	var j;
	data = ns.datasets.ANSCOMBES_QUARTET(); 
	out = [];
	for ( i = 0; i < data.length; i++ ) {
		d = data[ i ];
		for ( j = 0; j < d.length; j++ ) {
			tmp = d[ j ];
			tmp.push( i+1 );
			out.push( tmp );
		}
	}
	return out;
}
/**
* Creates an ndarray view.
*
* @customfunction
* @param {Range} x - input ndarray
* @param {string} slice - subsequence string
* @param {string} strict - option name for specifying whether to enforce strict bounds checking
* @param {boolean} strictValue - boolean indicating whether to enforce strict bounds checking
* @param {string} view - option name for specifying whether to return a "view" of the input ndarray
* @param {boolean} viewValue - boolean indicating whether to return a "view" of the input ndarray
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} ndarray view
*
* @example
* STDLIB_NDSLICE( A1:A100, '::-1,...,::-2' )
*/
function STDLIB_NDSLICE( x, slice, strict, strictValue, view, viewValue, as, asValue ) { 
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var vhlen;
	var opts;
	var hlen;
	var vlen;
	var len;
	var tmp;
	var buf;
	var obj;
	var vx;
	var s;
	var o;
	var i;
	opts = {
		'strict': true,
		'view': false,
		'as': null
	};
	// Parse optional keyword arguments...
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'strict' || o === 'view' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate strict/view/layout values
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Parse the input range as an ndarray:
	obj = ns.ndarray.range2ndarray( x );
	// Resolve the default presentation layout based on the presentation layout of the input array...
	if ( opts.as === null ) {
		if ( x.length === 1 && x[ 0 ].length > 1 ) { // TODO: move to utility package: gsheets/ndarray/default-presentation-layout
			opts.as = 'row';
		} else {
			opts.as = 'column';
		}
	}
	// Parse the provided indexing expression:
	s = ns.ndarray.seq2multislice( slice, obj.shape, opts.strict );
	// Cache a reference to the linearized ndarray data:
	x = obj.rawBuffer;
	hlen = obj.headerLength;
	// Create the slice:
	vx = ns.ndarray.slice( obj.ndarray, s, opts.strict, false );
	vlen = vx.length;
	shape = vx.shape;
	strides = vx.strides;
	order = vx.order;
	ndims = shape.length;
	// Calculate the header length for the slice:
	vhlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package instead of hardcoding
	// Adjust the view index offset to account for the header info:
	offset = vx.offset - hlen;
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		len = x.length;
		buf = x;
		// Check whether the number of dimensions was reduced and, if so, shift the data to account for less header info...
		if ( vhlen !== hlen ) {
			buf.splice( vhlen, hlen-vhlen );
		}
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		len = vhlen + vlen;
		buf = ns.array.zeros( len );
		// Return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
			tmp = new ns.ndarray.ndarray( 'generic', buf, shape, strides, vhlen, order );
			for ( i = 0; i < vlen; i++ ) {
				tmp.iset( i, vx.iget( i ) ); // use getter as iteration order can be non-contiguous depending on the view
			}
		} else {
			strides = [ 0 ];
			buf[ len-1 ] = vx.get();
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = 0;
	}
	return ns.ndarray.ndarray2range( buf, len-vhlen, obj.dtype, shape, strides, offset, order, opts.as );
}
/**
* Creates a zero-filled ndarray having a specified shape.
*
* @customfunction
* @param {Range<integer>} shape - array shape
* @param {string} order - option name for specifying the ndarray memory layout
* @param {string} orderValue - order option value
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} zero-filled ndarray
*
* @example
* STDLIB_NDZEROS( { 10, 1 } )
*/
function STDLIB_NDZEROS( shape, order, orderValue, as, asValue ) { 
	var strides;
	var ndims;
	var opts;
	var hlen;
	var buf;
	var len;
	var o;
	var i;
	opts = {
		'order': 'row-major',
		'as': 'column'
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'order' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate order/layout value
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( shape, 'First argument' );
	shape = ns.array.flatten2d( shape );
	ns.assert.isValidShape( shape, 'First argument' );
	// Compute the output array strides from the input array shape:
	ndims = shape.length;
	if ( ndims === 0 ) { // TODO: consider moving this logic to a separate utility package, as this may be a recurring pattern
		strides = [ 0 ];
	} else {
		strides = ns.ndarray.shape2strides( shape, opts.order );
	}
	// Calculate the header length:
	hlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package, rather than hardcode
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	if ( ndims === 0 ) {
		len = 1;
	} else {
		len = ns.ndarray.numel( shape );
	}
	buf = ns.array.zeros( hlen + len );
	// Serialize ndarray info to a range:
	return ns.ndarray.ndarray2range( buf, len, 'number', shape, strides, 0, opts.order, opts.as );
}
/**
* Creates an ndarray.
*
* @customfunction
* @param {Range} data - ndarray data
* @param {string} shape - option name for specifying the ndarray shape
* @param {Range<integer>} shapeValue - ndarray shape
* @param {string} strides - option name for specifying the ndarray strides
* @param {Range<integer>} stridesValue - ndarray strides
* @param {string} offset - option name for specifying an index offset
* @param {integer} offsetValue - index offset
* @param {string} order - option name for specifying the ndarray memory layout
* @param {string} orderValue - ndarray memory layout (either "row-major" or "column-major")
* @param {string} dtype - option name for specifying the ndarray data type
* @param {string} dtypeValue - ndarray data type
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} ndarray
*
* @example
* STDLIB_NDARRAY( A1:A100, "shape", { 10, 10 } )
*/
function STDLIB_NDARRAY( data, shape, shapeValue, strides, stridesValue, offset, offsetValue, order, orderValue, dtype, dtypeValue, as, asValue ) { 
	var ndims;
	var opts;
	var hlen;
	var buf;
	var len;
	var o;
	var i;
	opts = {
		'shape': null,
		'strides': null,
		'offset': null,
		'order': 'row-major',
		'dtype': 'generic',
		'as': 'column'
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'shape' || o === 'strides' || o === 'offset' || o === 'order' || o === 'dtype' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate option values: order, dtype, as
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( data, 'First argument' );
	if ( opts.shape === null ) {
		opts.shape = [ data.length ];
	} else {
		ns.assert.isRange1d( opts.shape, 'Shape argument' );
		opts.shape = ns.array.flatten2d( opts.shape );
		ns.assert.isValidShape( opts.shape, 'Shape argument' );
	}
	ndims = opts.shape.length;
	if ( opts.strides === null ) {
		if ( ndims === 0 ) {
			opts.strides = [ 0 ];
		} else {
			opts.strides = ns.ndarray.shape2strides( opts.shape, opts.order );
		}
	} else {
		ns.assert.isRange1d( opts.strides, 'Strides argument' );
		opts.strides = ns.array.flatten2d( opts.strides );
		ns.assert.isValidStrides( opts.strides, 'Strides argument' );
		if ( ndims === 0 && ( opts.strides.length !== 1 || opts.strides[ 0 ] !== 0 ) ) {
			// TODO: raise an exception
		}
	}
	if ( opts.offset === null ) {
		opts.offset = ns.ndarray.strides2offset( opts.shape, opts.strides );
	} else {
		ns.assert.isNonNegativeInteger( opts.offset, 'Offset argument' );
	}
	// Compute the number of elements in the provided data buffer:
	len = data.length * data[ 0 ].length;
	// Verify that, for zero-dimensional ndarrays, the index of the underlying data element does not exceed the bounds of the underlying data buffer:
	if ( ndims === 0 && offset >= len ) {
		// TODO: raise an exception
	}
	// Verify that the desired shape, strides, and offset are compatible with the number of elements in the provided data buffer:
	if ( len > 0 ) {
		ns.assert.isBufferLengthCompatible( len, opts.shape, opts.strides, opts.offset ); 
	}
	// Calculate the header length:
	hlen = 9 + ndims + opts.strides.length + (5*1); // TODO: use internal utility package, rather than hardcode
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	buf = ns.array.zeros( hlen + len );
	// Copy the data elements to the ndarray buffer:
	buf = ns.array.flatten2d.assign( data, buf, 1, hlen );
	// Serialize ndarray data as a range:
	return ns.ndarray.ndarray2range( buf, len, opts.dtype, opts.shape, opts.strides, opts.offset, opts.order, opts.as ); 
}
/**
* Displays a printable stacked representation of an ndarray.
*
* @customfunction
* @param {Range} x - input ndarray
* @returns {Range} stacked representation of an ndarray
*
* @example
* STDLIB_NDARRAY_STACKED_REPR( A1:A100 )
*/
function STDLIB_NDARRAY_STACKED_REPR( x ) { 
	var o;
	var i;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		ns.assert.unrecognizedOptionName( o );
	}
	return ns.ndarray.stackedRepr( ns.ndarray.range2ndarray( x ) );
}
/**
* Evaluates Binet's formula extended to real numbers.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BINET( 0.0 )
*
* @example
* STDLIB_BINET( A1:A100 )
*
* @example
* STDLIB_BINET( A1:D100 )
*
* @example
* STDLIB_BINET( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BINET( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.binet );
}
/**
* Computes the Bessel function of the second kind of order zero.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELY0( 0.0 )
*
* @example
* STDLIB_BESSELY0( A1:A100 )
*
* @example
* STDLIB_BESSELY0( A1:D100 )
*
* @example
* STDLIB_BESSELY0( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELY0( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bessely0 );
}
/**
* Rounds a number toward positive infinity.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CEIL( 0.0 )
*
* @example
* STDLIB_CEIL( A1:A100 )
*
* @example
* STDLIB_CEIL( A1:D100 )
*
* @example
* STDLIB_CEIL( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CEIL( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil );
}
/**
* Computes the coversed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COVERCOS( -2.0 )
*
* @example
* STDLIB_COVERCOS( A1:A100 )
*
* @example
* STDLIB_COVERCOS( A1:D100 )
*
* @example
* STDLIB_COVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.covercos );
}
/**
* Computes the nth Bernoulli number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BERNOULLI( 0 )
*
* @example
* STDLIB_BERNOULLI( A1:A100 )
*
* @example
* STDLIB_BERNOULLI( A1:D100 )
*
* @example
* STDLIB_BERNOULLI( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BERNOULLI( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bernoulli );
}
/**
* Computes the inverse versed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AVERCOS( 0.0 )
*
* @example
* STDLIB_AVERCOS( A1:A100 )
*
* @example
* STDLIB_AVERCOS( A1:D100 )
*
* @example
* STDLIB_AVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.avercos );
}
/**
* Computes the Bessel function of the second kind of order one.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELY1( 0.0 )
*
* @example
* STDLIB_BESSELY1( A1:A100 )
*
* @example
* STDLIB_BESSELY1( A1:D100 )
*
* @example
* STDLIB_BESSELY1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELY1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bessely1 );
}
/**
* Evaluates the exponential function.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_POW( 2.0, 3.0 )
*
* @example
* STDLIB_POW( A1:A100, B1:B100 )
*
* @example
* STDLIB_POW( A1:D100, 3.0 )
*
* @example
* STDLIB_POW( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_POW( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.pow );
}
/**
* Computes the hyperbolic arctangent.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ATANH( 1.0 )
*
* @example
* STDLIB_ATANH( A1:A100 )
*
* @example
* STDLIB_ATANH( A1:D100 )
*
* @example
* STDLIB_ATANH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ATANH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.atanh );
}
/**
* Computes the coversed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COVERSIN( -2.0 )
*
* @example
* STDLIB_COVERSIN( A1:A100 )
*
* @example
* STDLIB_COVERSIN( A1:D100 )
*
* @example
* STDLIB_COVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.coversin );
}
/**
* Rounds a number to the nearest power of 10 toward positive infinity.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CEIL10( 0.0 )
*
* @example
* STDLIB_CEIL10( A1:A100 )
*
* @example
* STDLIB_CEIL10( A1:D100 )
*
* @example
* STDLIB_CEIL10( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CEIL10( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil10 );
}
/**
* Computes the hyperbolic cotangent of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COTH( -2.0 )
*
* @example
* STDLIB_COTH( A1:A100 )
*
* @example
* STDLIB_COTH( A1:D100 )
*
* @example
* STDLIB_COTH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COTH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.coth );
}
/**
* Computes the product.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_MUL( -1.2, 3.1 )
*
* @example
* STDLIB_MUL( A1:A100, B1:B100 )
*
* @example
* STDLIB_MUL( A1:D100, 3.1 )
*
* @example
* STDLIB_MUL( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_MUL( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.mul );
}
/**
* Computes the hyperbolic arccosecant.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACSCH( 1.0 )
*
* @example
* STDLIB_ACSCH( A1:A100 )
*
* @example
* STDLIB_ACSCH( A1:D100 )
*
* @example
* STDLIB_ACSCH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACSCH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acsch );
}
/**
* Computes the inverse versed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AVERSIN( 0.0 )
*
* @example
* STDLIB_AVERSIN( A1:A100 )
*
* @example
* STDLIB_AVERSIN( A1:D100 )
*
* @example
* STDLIB_AVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.aversin );
}
/**
* Rounds a number to the nearest power of 2 toward positive infinity.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CEIL2( -4.2 )
*
* @example
* STDLIB_CEIL2( A1:A100 )
*
* @example
* STDLIB_CEIL2( A1:D100 )
*
* @example
* STDLIB_CEIL2( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CEIL2( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil2 );
}
/**
* Computes the squared absolute value.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ABS2( -1.2 )
*
* @example
* STDLIB_ABS2( A1:A100 )
*
* @example
* STDLIB_ABS2( A1:D100 )
*
* @example
* STDLIB_ABS2( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ABS2( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.abs2 );
}
/**
* Computes the sine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_SIN( 0.0 )
*
* @example
* STDLIB_SIN( A1:A100 )
*
* @example
* STDLIB_SIN( A1:D100 )
*
* @example
* STDLIB_SIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_SIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.sin );
}
/**
* Computes the hyperbolic cosine of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COSH( 0.0 )
*
* @example
* STDLIB_COSH( A1:A100 )
*
* @example
* STDLIB_COSH( A1:D100 )
*
* @example
* STDLIB_COSH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cosh );
}
/**
* Computes the inverse cotangent of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOT( 2.0 )
*
* @example
* STDLIB_ACOT( A1:A100 )
*
* @example
* STDLIB_ACOT( A1:D100 )
*
* @example
* STDLIB_ACOT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acot );
}
/**
* Computes the arccosine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOS( 1.0 )
*
* @example
* STDLIB_ACOS( A1:A100 )
*
* @example
* STDLIB_ACOS( A1:D100 )
*
* @example
* STDLIB_ACOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acos );
}
/**
* Computes the hyperbolic arcsine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ASINH( 1.0 )
*
* @example
* STDLIB_ASINH( A1:A100 )
*
* @example
* STDLIB_ASINH( A1:D100 )
*
* @example
* STDLIB_ASINH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ASINH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.asinh );
}
/**
* Computes the absolute value.
*
* @customfunction
* @param {Range} x - input ndarray
* @param {string} slice - option name for specifying a subsequence indexing expression for operating on an ndarray slice
* @param {string} sliceValue - subsequence string
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @param {string} view - option name for specifying whether to return a "view" of the input ndarray
* @param {boolean} viewValue - boolean indicating whether to return a "view" of the input ndarray
* @param {string} strict - option name for specifying whether to enforce strict bounds checking
* @param {boolean} strictValue - boolean indicating whether to enforce strict bounds checking
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ABS( A1:A100 )
*
* @example
* STDLIB_ABS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_NDARRAY_ABS( x, slice, sliceValue, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue, view, viewValue, strict, strictValue, as, asValue ) { 
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var vhlen;
	var opts;
	var args;
	var data;
	var hlen;
	var obj;
	var out;
	var len;
	var buf;
	var s;
	var d;
	var o;
	var i;
	opts = {
		'slice': null,
		'strict': true,
		'view': false,
		'as': 'column' // FIXME: infer default based on orientation of `x`
	};
	obj = ns.ndarray.range2ndarray( x );
	hlen = obj.headerLength;
	x = obj.ndarray;
	args = [ null, null ];
	for ( i = 1; i < arguments.length; i++ ) {
		o = arguments[ i ];
		if ( o === 'as' || o === 'slice' || o === 'strict' || o === 'view' ) {
			i += 1;
			opts[ o ] = arguments[ i ];
			// TODO: validate as/strict/view option values
		} else {
			args.push( o );
		}
	}
	if ( opts.slice !== null ) {
		// Parse the provided indexing expression:
		s = ns.ndarray.seq2multislice( opts.slice, obj.shape, opts.strict );
		// Create the slice:
		x = ns.ndarray.slice( x, s, opts.strict, false );
	}
	len = x.length; // numel(x)
	shape = x.shape;
	strides = x.strides;
	offset = x.offset;
	order = x.order;
	data = x.data;
	ndims = shape.length;
	// Calculate the header length for the slice:
	vhlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package instead of hardcoding
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		// Copy the data to avoid mutation of the same elements over which we are iterating:
		buf = data.slice();
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		buf = ns.array.zeros( vhlen + len );
		// When returning a view, return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
		} else {
			strides = [ 0 ];
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = vhlen;
	}
	// Set the input and output ndarray arguments:
	args[ 0 ] = x;
	args[ 1 ] = new ns.ndarray.ndarray( 'generic', buf, shape, strides, offset, order );
	// Perform element-wise computation:
	out = ns.math.tools.ndarray.unary( args, ns.math.abs );
	// If we are returning a view of the input data buffer, check whether we need to shift the data to account for less header info and thus ensure a compact representation...
	len = buf.length; // header + numel(out)
	if ( opts.view ) {
		if ( vhlen !== hlen ) {
			d = hlen - vhlen;
			buf.splice( vhlen, d );
			offset -= d;
		}
	}
	// TODO: do we need to consider a returned ndarray having a different dtype? ANSWER: no. Once we convert this to a scaffold, we can hard code the expected output dtype
	// Serialize the output ndarray to a range:
	return ns.ndarray.ndarray2range( out.data, len-vhlen, obj.dtype, out.shape, out.strides, offset-vhlen, out.order, opts.as ); 
}
/**
* Computes the cosine of a number times π.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COSPI( 0.0 )
*
* @example
* STDLIB_COSPI( A1:A100 )
*
* @example
* STDLIB_COSPI( A1:D100 )
*
* @example
* STDLIB_COSPI( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSPI( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cospi );
}
/**
* Computes the arcsine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ASIN( 1.0 )
*
* @example
* STDLIB_ASIN( A1:A100 )
*
* @example
* STDLIB_ASIN( A1:D100 )
*
* @example
* STDLIB_ASIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ASIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.asin );
}
/**
* Computes the cosine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COS( 0.0 )
*
* @example
* STDLIB_COS( A1:A100 )
*
* @example
* STDLIB_COS( A1:D100 )
*
* @example
* STDLIB_COS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cos );
}
/**
* Evaluates the cotangent of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COT( 0.1 )
*
* @example
* STDLIB_COT( A1:A100 )
*
* @example
* STDLIB_COT( A1:D100 )
*
* @example
* STDLIB_COT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cot );
}
/**
* Evaluates the Riemann zeta function as a function of a real variable.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ZETA( 1.2 )
*
* @example
* STDLIB_ZETA( A1:A100 )
*
* @example
* STDLIB_ZETA( A1:D100 )
*
* @example
* STDLIB_ZETA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ZETA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.zeta );
}
/**
* Computes the principal root.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_SQRT( 64.0 )
*
* @example
* STDLIB_SQRT( A1:A100 )
*
* @example
* STDLIB_SQRT( A1:D100 )
*
* @example
* STDLIB_SQRT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_SQRT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.sqrt );
}
/**
* Computes the arccosecant.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACSC( 1.0 )
*
* @example
* STDLIB_ACSC( A1:A100 )
*
* @example
* STDLIB_ACSC( A1:D100 )
*
* @example
* STDLIB_ACSC( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACSC( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acsc );
}
/**
* Performs subtraction.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_SUB( -1.2, 3.1 )
*
* @example
* STDLIB_SUB( A1:A100, B1:B100 )
*
* @example
* STDLIB_SUB( A1:D100, 3.1 )
*
* @example
* STDLIB_SUB( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_SUB( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.sub );
}
/**
* Evaluates the Dirichlet eta function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ETA( -2.5 )
*
* @example
* STDLIB_ETA( A1:A100 )
*
* @example
* STDLIB_ETA( A1:D100 )
*
* @example
* STDLIB_ETA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ETA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.eta );
}
/**
* Computes the sum.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_ADD( -1.2, 3.1 )
*
* @example
* STDLIB_ADD( A1:A100, B1:B100 )
*
* @example
* STDLIB_ADD( A1:D100, 3.1 )
*
* @example
* STDLIB_ADD( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ADD( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.add );
}
/**
* Computes the absolute value.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ABS( -1.2 )
*
* @example
* STDLIB_ABS( A1:A100 )
*
* @example
* STDLIB_ABS( A1:D100 )
*
* @example
* STDLIB_ABS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ABS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.abs );
}
/**
* Evaluates the digamma function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_DIGAMMA( -2.5 )
*
* @example
* STDLIB_DIGAMMA( A1:A100 )
*
* @example
* STDLIB_DIGAMMA( A1:D100 )
*
* @example
* STDLIB_DIGAMMA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DIGAMMA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.digamma );
}
/**
* Computes the Bessel function of the first kind of order zero.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELJ0( 0.0 )
*
* @example
* STDLIB_BESSELJ0( A1:A100 )
*
* @example
* STDLIB_BESSELJ0( A1:D100 )
*
* @example
* STDLIB_BESSELJ0( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELJ0( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.besselj0 );
}
/**
* Computes the inverse coversed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOVERSIN( 0.0 )
*
* @example
* STDLIB_ACOVERSIN( A1:A100 )
*
* @example
* STDLIB_ACOVERSIN( A1:D100 )
*
* @example
* STDLIB_ACOVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acoversin );
}
/**
* Computes the arctangent of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ATAN( 1.0 )
*
* @example
* STDLIB_ATAN( A1:A100 )
*
* @example
* STDLIB_ATAN( A1:D100 )
*
* @example
* STDLIB_ATAN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ATAN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.atan );
}
/**
* Computes the inverse half-value versed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AHAVERCOS( 0.0 )
*
* @example
* STDLIB_AHAVERCOS( A1:A100 )
*
* @example
* STDLIB_AHAVERCOS( A1:D100 )
*
* @example
* STDLIB_AHAVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AHAVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ahavercos );
}
/**
* Converts an angle from degrees to radians.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_DEG2RAD( 90.0 )
*
* @example
* STDLIB_DEG2RAD( A1:A100 )
*
* @example
* STDLIB_DEG2RAD( A1:D100 )
*
* @example
* STDLIB_DEG2RAD( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DEG2RAD( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.deg2rad );
}
/**
* Rounds a number to the nearest multiple of 10^n toward negative infinity.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_FLOORN( 3.141592653589793, -4 )
*
* @example
* STDLIB_FLOORN( A1:A100, B1:B100 )
*
* @example
* STDLIB_FLOORN( A1:D100, -4 )
*
* @example
* STDLIB_FLOORN( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_FLOORN( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.floorn );
}
/**
* Computes the Bessel function of the first kind of order one.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELJ1( 0.0 )
*
* @example
* STDLIB_BESSELJ1( A1:A100 )
*
* @example
* STDLIB_BESSELJ1( A1:D100 )
*
* @example
* STDLIB_BESSELJ1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELJ1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.besselj1 );
}
/**
* Computes cos(x)-1.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COSM1( 0.0 )
*
* @example
* STDLIB_COSM1( A1:A100 )
*
* @example
* STDLIB_COSM1( A1:D100 )
*
* @example
* STDLIB_COSM1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSM1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cosm1 );
}
/**
* Computes the hyperbolic arccosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOSH( 1.0 )
*
* @example
* STDLIB_ACOSH( A1:A100 )
*
* @example
* STDLIB_ACOSH( A1:D100 )
*
* @example
* STDLIB_ACOSH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOSH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acosh );
}
/**
* Computes the inverse half-value versed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AHAVERSIN( 0.0 )
*
* @example
* STDLIB_AHAVERSIN( A1:A100 )
*
* @example
* STDLIB_AHAVERSIN( A1:D100 )
*
* @example
* STDLIB_AHAVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AHAVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ahaversin );
}
/**
* Computes the inverse coversed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOVERCOS( 0.0 )
*
* @example
* STDLIB_ACOVERCOS( A1:A100 )
*
* @example
* STDLIB_ACOVERCOS( A1:D100 )
*
* @example
* STDLIB_ACOVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acovercos );
}
/**
* Computes the cube root.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CBRT( 64.0 )
*
* @example
* STDLIB_CBRT( A1:A100 )
*
* @example
* STDLIB_CBRT( A1:D100 )
*
* @example
* STDLIB_CBRT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CBRT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cbrt );
}
var __STDLIB_KEBABCASE = ns.string.tools.s_o( ns.string.kebabcase ); 
/**
* Converts a string to kebab case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_KEBABCASE( "foo bar" )
*
* @example
* STDLIB_KEBABCASE( A2:A100 )
*
* @example
* STDLIB_KEBABCASE( A2:D100 )
*/
function STDLIB_KEBABCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_KEBABCASE );
		return value;
	}
	return __STDLIB_KEBABCASE( value );
}
var __STDLIB_STARTCASE = ns.string.tools.s_o( ns.string.startcase ); 
/**
* Converts a string to start case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_STARTCASE( "foo bar" )
*
* @example
* STDLIB_STARTCASE( A2:A100 )
*
* @example
* STDLIB_STARTCASE( A2:D100 )
*/
function STDLIB_STARTCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_STARTCASE );
		return value;
	}
	return __STDLIB_STARTCASE( value );
}
var __STDLIB_SNAKECASE = ns.string.tools.s_o( ns.string.snakecase ); 
/**
* Converts a string to snake case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_SNAKECASE( "foo bar" )
*
* @example
* STDLIB_SNAKECASE( A2:A100 )
*
* @example
* STDLIB_SNAKECASE( A2:D100 )
*/
function STDLIB_SNAKECASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_SNAKECASE );
		return value;
	}
	return __STDLIB_SNAKECASE( value );
}
var __STDLIB_UPPERCASE = ns.string.tools.s_o( ns.string.uppercase ); 
/**
* Converts a string to uppercase.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_UPPERCASE( "foo bar" )
*
* @example
* STDLIB_UPPERCASE( A2:A100 )
*
* @example
* STDLIB_UPPERCASE( A2:D100 )
*/
function STDLIB_UPPERCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UPPERCASE );
		return value;
	}
	return __STDLIB_UPPERCASE( value );
}
var __STDLIB_CONSTANTCASE = ns.string.tools.s_o( ns.string.constantcase ); 
/**
* Converts a string to constant case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_CONSTANTCASE( "foo bar" )
*
* @example
* STDLIB_CONSTANTCASE( A2:A100 )
*
* @example
* STDLIB_CONSTANTCASE( A2:D100 )
*/
function STDLIB_CONSTANTCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CONSTANTCASE );
		return value;
	}
	return __STDLIB_CONSTANTCASE( value );
}
var __STDLIB_UNCAPITALIZE = ns.string.tools.s_o( ns.string.uncapitalize ); 
/**
* Lowercases the first character of a string.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_UNCAPITALIZE( "Foo Bar" )
*
* @example
* STDLIB_UNCAPITALIZE( A2:A100 )
*
* @example
* STDLIB_UNCAPITALIZE( A2:D100 )
*/
function STDLIB_UNCAPITALIZE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UNCAPITALIZE );
		return value;
	}
	return __STDLIB_UNCAPITALIZE( value );
}
var __STDLIB_LOWERCASE = ns.string.tools.s_o( ns.string.lowercase ); 
/**
* Converts a string to lowercase.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_LOWERCASE( "Foo Bar" )
*
* @example
* STDLIB_LOWERCASE( A2:A100 )
*
* @example
* STDLIB_LOWERCASE( A2:D100 )
*/
function STDLIB_LOWERCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_LOWERCASE );
		return value;
	}
	return __STDLIB_LOWERCASE( value );
}
var __STDLIB_CAMELCASE = ns.string.tools.s_o( ns.string.camelcase ); 
/**
* Converts a string to camel case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_CAMELCASE( "foo bar" )
*
* @example
* STDLIB_CAMELCASE( A2:A100 )
*
* @example
* STDLIB_CAMELCASE( A2:D100 )
*/
function STDLIB_CAMELCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAMELCASE );
		return value;
	}
	return __STDLIB_CAMELCASE( value );
}
var __STDLIB_CAPITALIZE = ns.string.tools.s_o( ns.string.capitalize ); 
/**
* Capitalizes the first character of a string.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_CAPITALIZE( "foo bar" )
*
* @example
* STDLIB_CAPITALIZE( A2:A100 )
*
* @example
* STDLIB_CAPITALIZE( A2:D100 )
*/
function STDLIB_CAPITALIZE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAPITALIZE );
		return value;
	}
	return __STDLIB_CAPITALIZE( value );
}
var __STDLIB_PASCALCASE = ns.string.tools.s_o( ns.string.pascalcase ); 
/**
* Converts a string to Pascal case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_PASCALCASE( "foo bar" )
*
* @example
* STDLIB_PASCALCASE( A2:A100 )
*
* @example
* STDLIB_PASCALCASE( A2:D100 )
*/
function STDLIB_PASCALCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_PASCALCASE );
		return value;
	}
	return __STDLIB_PASCALCASE( value );
}
/**
* Generates pseudorandom numbers drawn from a beta distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - first shape parameter
* @param {number} beta - second shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BETA( 10, 1, 1, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_BETA( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'First shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Second shape parameter' );
	rand = ns.random.beta( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a chi distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} k - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_CHI( 10, 1, 2, "seed", 1234 )
*/
function STDLIB_RANDOM_CHI( nrows, ncols, k, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chi( k, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a logistic distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} s - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LOGISTIC( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LOGISTIC( nrows, ncols, mu, s, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( s, 'Scale parameter' );
	rand = ns.random.logistic( mu, s, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a gamma distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} beta - rate parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_GAMMA( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_GAMMA( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Rate parameter' );
	rand = ns.random.gamma( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Bernoulli distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BERNOULLI( 10, 1, 0.5, "seed", 1234 )
*/
function STDLIB_RANDOM_BERNOULLI( nrows, ncols, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.bernoulli( p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a triangular distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} c - mode
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_TRIANGULAR( 10, 1, 0, 10, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_TRIANGULAR( nrows, ncols, a, b, c, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 5; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( a, 'Minimum support' );
	ns.assert.isNumber( b, 'Maximum support' );
	ns.assert.isNumber( c, 'Mode' );
	ns.assert.isBetween( c, a, b, 'closed', 'closed', 'Mode' );
	rand = ns.random.triangular( a, b, c, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Weibull distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} k - scale parameter
* @param {number} lambda - shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_WEIBULL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_WEIBULL( nrows, ncols, k, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Scale parameter' );
	ns.assert.isPositiveNumber( lambda, 'Shape parameter' );
	rand = ns.random.weibull( k, lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BOX_MULLER( 10, 1, "seed", 1234 )
*/
function STDLIB_RANDOM_BOX_MULLER( nrows, ncols, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.boxMuller({
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Pareto (Type 1) distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} beta - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_PARETO1( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_PARETO1( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Scale parameter' );
	rand = ns.random.pareto1( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Lévy distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - location parameter
* @param {number} c - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LEVY( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LEVY( nrows, ncols, mu, c, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Location parameter' );
	ns.assert.isPositiveNumber( c, 'Scale parameter' );
	rand = ns.random.levy( mu, c, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a raised cosine distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} s - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_COSINE( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_COSINE( nrows, ncols, mu, s, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( s, 'Scale parameter' );
	rand = ns.random.cosine( mu, s, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from Kumaraswamy's double bounded distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - first shape parameter
* @param {number} b - second shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_KUMARASWAMY( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_KUMARASWAMY( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( a, 'First shape parameter' );
	ns.assert.isPositiveNumber( b, 'Second shape parameter' );
	rand = ns.random.kumaraswamy( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a hypergeometric distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {integer} N - population size
* @param {integer} K - subpopulation size
* @param {integer} n - number of draws
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_HYPERGEOMETRIC( 10, 1, 20, 10, 7, "seed", 1234 )
*/
function STDLIB_RANDOM_HYPERGEOMETRIC( nrows, ncols, N, K, n, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 5; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNonNegativeInteger( N, 'Population size' );
	ns.assert.isNonNegativeInteger( K, 'Subpopulation size' );
	ns.assert.isNonNegativeInteger( n, 'Number of draws' );
	ns.assert.isLessThanEqual( n, N, 'Number of draws', 'population size' );
	ns.assert.isLessThanEqual( K, N, 'Subpopulation size', 'population size' );
	rand = ns.random.hypergeometric( N, K, n, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Laplace (double exponential) distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} b - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LAPLACE( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LAPLACE( nrows, ncols, mu, b, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( b, 'Scale parameter' );
	rand = ns.random.laplace( mu, b, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an exponential distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} lambda - rate parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_EXPONENTIAL( 10, 1, 7.9, "seed", 1234 )
*/
function STDLIB_RANDOM_EXPONENTIAL( nrows, ncols, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Rate parameter' );
	rand = ns.random.exponential( lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers using the Mersenne Twister pseudorandom number generator.
*
* ## Notes
*
* -   Without normalization, generates numbers on the closed interval `[0, 4294967295]`.
* -   With normalization, generates numbers on the half-open interval `[0, 1)`.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @param {string} normalized - normalized option name
* @param {boolean} normalizedValue - normalized option value (default: `FALSE`)
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234, "normalized", FALSE )
*
* @example
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234, "normalized", TRUE )
*/
function STDLIB_RANDOM_MT19937( nrows, ncols, seed, seedValue, normalized, normalizedValue ) { 
	var rand;
	var flg;
	var s;
	var o;
	var v;
	var f;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else if ( o === 'normalized' ) {
			flg = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.mt19937({
		'seed': s
	});
	if ( flg ) {
		f = rand.normalized;
	} else {
		f = rand;
	}
	return ns.array.filled2dBy( [ nrows, ncols ], f );
}
/**
* Generates pseudorandom numbers drawn from a binomial distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} n - number of trials
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BINOMIAL( 10, 1, 20, 0.8, "seed", 1234 )
*/
function STDLIB_RANDOM_BINOMIAL( nrows, ncols, n, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveInteger( n, 'Number of trials' );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.binomial( n, p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a continuous uniform distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - minimum support (inclusive)
* @param {number} b - maximum support (exclusive)
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_UNIFORM( 10, 1, 0, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_UNIFORM( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( a, 'Minimum support' );
	ns.assert.isNumber( b, 'Maximum support' );
	ns.assert.isLessThan( a, b, 'Minimum support', 'maximum support' );
	rand = ns.random.uniform( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a beta prime distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - first shape parameter
* @param {number} beta - second shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BETAPRIME( 10, 1, 1, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_BETAPRIME( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'First shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Second shape parameter' );
	rand = ns.random.betaprime( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an Erlang distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {integer} k - shape parameter
* @param {number} lambda - rate parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_ERLANG( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_ERLANG( nrows, ncols, k, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveInteger( k, 'Shape parameter' );
	ns.assert.isPositiveNumber( lambda, 'Rate parameter' );
	rand = ns.random.erlang( k, lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a geometric distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_GEOMETRIC( 10, 1, 0.5, "seed", 1234 )
*/
function STDLIB_RANDOM_GEOMETRIC( nrows, ncols, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.geometric( p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Student's t-distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} v - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_T( 10, 1, 2.4, "seed", 1234 )
*/
function STDLIB_RANDOM_T( nrows, ncols, v, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var a;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		a = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( a );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( v, 'Degrees of freedom' );
	rand = ns.random.t( v, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an F distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} d1 - degrees of freedom
* @param {number} d2 - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_F( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_F( nrows, ncols, d1, d2, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( d1, 'Degrees of freedom' );
	ns.assert.isPositiveNumber( d2, 'Degrees of freedom' );
	rand = ns.random.f( d1, d2, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Cauchy distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} x0 - location parameter
* @param {number} gamma - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_CAUCHY( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_CAUCHY( nrows, ncols, x0, gamma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( x0, 'Location parameter' );
	ns.assert.isPositiveNumber( gamma, 'Scale parameter' );
	rand = ns.random.cauchy( x0, gamma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers using a linear congruential pseudorandom number generator (LCG).
*
* ## Notes
*
* -   Without normalization, generates numbers on the closed interval `[0, 2147483646]`.
* -   With normalization, generates numbers on the half-open interval `[0, 1)`.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @param {string} normalized - normalized option name
* @param {boolean} normalizedValue - normalized option value (default: `FALSE`)
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_MINSTD( 10, 1, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_MINSTD( 10, 1, "seed", 1234, "normalized", FALSE )
*
* @example
* STDLIB_RANDOM_MINSTD( 10, 1, "seed", 1234, "normalized", TRUE )
*/
function STDLIB_RANDOM_MINSTD( nrows, ncols, seed, seedValue, normalized, normalizedValue ) { 
	var rand;
	var flg;
	var s;
	var o;
	var v;
	var f;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else if ( o === 'normalized' ) {
			flg = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.minstd({
		'seed': s
	});
	if ( flg ) {
		f = rand.normalized;
	} else {
		f = rand;
	}
	return ns.array.filled2dBy( [ nrows, ncols ], f );
}
/**
* Generates pseudorandom numbers drawn from a chi-square distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} k - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_CHISQUARE( 10, 1, 2, "seed", 1234 )
*/
function STDLIB_RANDOM_CHISQUARE( nrows, ncols, k, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chisquare( k, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an inverse gamma distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} beta - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_INVGAMMA( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_INVGAMMA( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Scale parameter' );
	rand = ns.random.invgamma( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a negative binomial distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} r - number of successes until experiment is stopped
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_NEGATIVE_BINOMIAL( 10, 1, 20, 0.8, "seed", 1234 )
*/
function STDLIB_RANDOM_NEGATIVE_BINOMIAL( nrows, ncols, r, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( r, 'Number of successes until experiment is stopped' );
	ns.assert.isBetween( p, 0.0, 1.0, 'open', 'open', 'Success probability' );
	rand = ns.random.negativeBinomial( r, p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Fréchet distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} s - scale parameter
* @param {number} m - location parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_FRECHET( 10, 1, 2, 5, 3.33, "seed", 1234 )
*/
function STDLIB_RANDOM_FRECHET( nrows, ncols, alpha, s, m, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 5; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( s, 'Scale parameter' );
	ns.assert.isNumber( m, 'Location parameter' );
	rand = ns.random.frechet( alpha, s, m, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Gumbel distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} beta - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_GUMBEL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_GUMBEL( nrows, ncols, mu, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( beta, 'Scale parameter' );
	rand = ns.random.gumbel( mu, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Poisson distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} lambda - mean parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_POISSON( 10, 1, 7.9, "seed", 1234 )
*/
function STDLIB_RANDOM_POISSON( nrows, ncols, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Mean parameter' );
	rand = ns.random.poisson( lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Rayleigh distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} sigma - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_RAYLEIGH( 10, 1, 2.5, "seed", 1234 )
*/
function STDLIB_RANDOM_RAYLEIGH( nrows, ncols, sigma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( sigma, 'Scale parameter' );
	rand = ns.random.rayleigh( sigma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a normal distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} sigma - standard deviation
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_NORMAL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_NORMAL( nrows, ncols, mu, sigma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( sigma, 'Standard deviation' );
	rand = ns.random.normal( mu, sigma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a discrete uniform distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {integer} a - minimum support (inclusive)
* @param {integer} b - maximum support (inclusive)
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_DISCRETE_UNIFORM( 10, 1, 0, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_DISCRETE_UNIFORM( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isInteger( a, 'Minimum support' );
	ns.assert.isInteger( b, 'Maximum support' );
	ns.assert.isLessThanEqual( a, b, 'Minimum support', 'maximum support' );
	rand = ns.random.discreteUniform( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat transform.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_IMPROVED_ZIGGURAT( 10, 1, "seed", 1234 )
*/
function STDLIB_RANDOM_IMPROVED_ZIGGURAT( nrows, ncols, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.improvedZiggurat({
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
*
* ## Notes
*
* -   Without normalization, generates numbers on the closed interval `[0, 2147483646]`.
* -   With normalization, generates numbers on the half-open interval `[0, 1)`.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @param {string} normalized - normalized option name
* @param {boolean} normalizedValue - normalized option value (default: `FALSE`)
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_MINSTD_SHUFFLE( 10, 1, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_MINSTD_SHUFFLE( 10, 1, "seed", 1234, "normalized", FALSE )
*
* @example
* STDLIB_RANDOM_MINSTD_SHUFFLE( 10, 1, "seed", 1234, "normalized", TRUE )
*/
function STDLIB_RANDOM_MINSTD_SHUFFLE( nrows, ncols, seed, seedValue, normalized, normalizedValue ) { 
	var rand;
	var flg;
	var s;
	var o;
	var v;
	var f;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else if ( o === 'normalized' ) {
			flg = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.minstdShuffle({
		'seed': s
	});
	if ( flg ) {
		f = rand.normalized;
	} else {
		f = rand;
	}
	return ns.array.filled2dBy( [ nrows, ncols ], f );
}
/**
* Generates pseudorandom numbers drawn from a lognormal distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - location parameter
* @param {number} sigma - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LOGNORMAL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LOGNORMAL( nrows, ncols, mu, sigma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( mu, 'Location parameter' );
	ns.assert.isPositiveNumber( sigma, 'Scale parameter' );
	rand = ns.random.lognormal( mu, sigma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an arcsine distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_ARCSINE( 10, 1, 0, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_ARCSINE( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( a, 'Minimum support' );
	ns.assert.isNumber( b, 'Maximum support' );
	ns.assert.isLessThan( a, b, 'Minimum support', 'maximum support' );
	rand = ns.random.arcsine( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Tests the null hypothesis that the variances in all groups are the same.
*
* @customfunction
* @param {Range<number>} values - numeric observations
* @param {string} groups - groups option name
* @param {Range} groupsValue - groups option values
* @param {string} alpha - significance level option name
* @param {number} alphaValue - significance level option value (default: `0.05`)
* @param {string} format - results format option name
* @param {string} formatValue - results format option value (either `"print"` or `"raw"`; default: `"print"`)
* @returns {string|Range<string|number>} results
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100 )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "alpha", 0.10 )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "format", "print" )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "format", "raw" )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "alpha", 0.10, "format", "print" )
*/
function STDLIB_BARTLETT_TEST( values, groups, groupsValue, alpha, alphaValue, format, formatValue ) { 
	var opts;
	var out;
	var o;
	var v;
	var i;
	ns.assert.isRange( values, 'Observations' );
	opts = {};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'groups' ) {
			ns.assert.isRange( v, 'Groups' );
			opts[ o ] = ns.array.flatten2d( v );
		} else if ( o === 'alpha' ) {
			ns.assert.isNumber( v, 'Significance level' );
			opts[ o ] = v;
		} else if ( o === 'format' ) {
			ns.assert.isOneOf( v, [ 'raw', 'print' ], 'format' );
			opts[ o ] = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isDefined( opts.groups, 'groups' );
	out = ns.stats.bartlettTest( ns.array.flatten2d( values ), opts );
	if ( opts.format === 'raw' ) {
		return [
			[ 'rejected', out.rejected ],
			[ 'alpha', out.alpha ],
			[ 'df', out.df ],
			[ 'pValue', out.pValue ],
			[ 'statistic', out.statistic ]
		];
	}
	return out.print();
}
/**
* Computes the maximum value.
*
* @customfunction
* @param {Range<number>} x - range
* @param {string} axis - axis option name
* @param {integer} axisValue - axis option value (where `0` indicates across columns and `1` indicates across rows; default: `1`)
* @returns {Range<number>} results
*
* @example
* STDLIB_MAX( A1:A100 )
*
* @example
* STDLIB_MAX( A1:C100, "axis", 1 )
*
* @example
* STDLIB_MAX( A1:C100, "axis", 0 )
*/
function STDLIB_MAX( x, axis, axisValue ) { 
	var sarray;
	var offset;
	var out;
	var ax;
	var M;
	var N;
	var o;
	var v;
	var i;
	ns.assert.isRange( x, 'First argument' );
	ax = 1;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	out = [];
	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		M = x.length;
		N = x[ 0 ].length;
		for ( i = 0; i < M; i++ ) {
			out.push( ns.stats.max( N, x[ i ], 1, 0 ) );
		}
		return out;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.array.flatten2d( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.stats.max( N, sarray, M, offset ) );
		offset += 1;
	}
	return [ out ];
}
/**
* Computes the maximum value according to a mask.
*
* @customfunction
* @param {Range<number>} x - input range
* @param {Range<integer>} mask - mask range (must be broadcast compatible with the input range)
* @param {string} axis - axis option name
* @param {integer} axisValue - axis option value (where `0` indicates across columns and `1` indicates across rows; default: `1`)
* @returns {Range<number>} results
*
* @example
* STDLIB_MSKMAX( A1:A100, B1:B100 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:D100 )
*
* @example
* STDLIB_MSKMAX( A1:A100, D1:F100 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:F100, "axis", 1 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:F100, "axis", 0 )
*/
function STDLIB_MSKMAX( x, mask, axis, axisValue ) { 
	var sarray;
	var smask;
	var out;
	var sox;
	var som;
	var ax;
	var xM;
	var xN;
	var mM;
	var mN;
	var sx;
	var sm;
	var ix;
	var im;
	var M;
	var N;
	var o;
	var v;
	var i;
	ns.assert.isRange( x, 'First argument' );
	ns.assert.isRange( mask, 'Second argument' );
	ns.assert.isBroadcastCompatible( x, mask, 'First and second arguments' );
	ax = 1;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	out = [];
	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		// Retrieve input array dimensions:
		xM = x.length;
		xN = x[ 0 ].length;
		mM = mask.length;
		mN = mask[ 0 ].length;
		// Determine the broadcasted dimensions:
		M = ( xM > mM ) ? xM : mM;
		N = ( xN > mN ) ? xN : mN;
		// Set the "offset" strides (i.e., the increment for moving to the next row):
		sox = ( xM > 1 ) ? 1 : 0;
		som = ( mM > 1 ) ? 1 : 0;
		// Set the array element strides (i.e., the increment for moving to the next column):
		sx = ( xN > 1 ) ? 1 : 0;
		sm = ( mN > 1 ) ? 1 : 0;
		// Initialize the row pointers:
		ix = 0;
		im = 0;
		// Iterate over columns...
		for ( i = 0; i < M; i++ ) {
			out.push( ns.stats.mskmax( N, x[ ix ], sx, 0, mask[ im ], sm, 0 ) );
			ix += sox;
			im += som;
		}
		return out;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	// Retrieve input array dimensions:
	xM = x[ 0 ].length;    // number of columns
	xN = x.length;         // number of rows
	mM = mask[ 0 ].length;
	mN = mask.length;
	// Determine the broadcasted dimensions:
	M = ( xM > mM ) ? xM : mM;
	N = ( xN > mN ) ? xN : mN;
	// Set the "offset" strides (i.e., the increment for moving to the next column):
	sox = ( xM > 1 ) ? 1 : 0;
	som = ( mM > 1 ) ? 1 : 0;
	// Set the array element strides (i.e., the increment for moving to the next row):
	sx = ( xN > 1 ) ? M : 1;
	sm = ( mN > 1 ) ? M : 1;
	// Initialize the column pointers:
	ix = 0;
	im = 0;
	// Flatten the input arrays to strided arrays in row-major order:
	sarray = ns.array.flatten2d( x );
	smask = ns.array.flatten2d( mask );
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.stats.mskmax( N, sarray, sx, ix, smask, sm, im ) );
		ix += sox;
		im += som;
	}
	return [ out ];
}
/**
* Computes the cumulative maximum value.
*
* @customfunction
* @param {Range<number>} x - range
* @param {string} axis - axis option name
* @param {integer} axisValue - axis option value (where `0` indicates across columns and `1` indicates across rows; default: `1`)
* @returns {Range<number>} results
*
* @example
* STDLIB_CUMAX( A1:A100 )
*
* @example
* STDLIB_CUMAX( A1:C100, "axis", 1 )
*
* @example
* STDLIB_CUMAX( A1:C100, "axis", 0 )
*/
function STDLIB_CUMAX( x, axis, axisValue ) { 
	var sarray;
	var offset;
	var tmp;
	var ax;
	var M;
	var N;
	var o;
	var v;
	var i;
	var j;
	ns.assert.isRange( x, 'First argument' );
	ax = 1;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		M = x.length;
		N = x[ 0 ].length;
		for ( i = 0; i < M; i++ ) {
			ns.stats.cumax( N, x[ i ], 1, 0, x[ i ], 1, 0 );
		}
		return x;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.array.flatten2d( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		ns.stats.cumax( N, sarray, M, offset, sarray, M, offset );
		offset += 1;
	}
	// Check for a singleton dimension and whether we can avoid performing a copy...
	if ( M === 1 ) {
		return sarray;
	}
	// Reuse the input array as the output array...
	offset = 0;
	for ( i = 0; i < N; i++ ) {
		tmp = x[ i ];
		for ( j = 0; j < M; j++ ) {
			tmp[ j ] = sarray[ offset ];
			offset += 1;
		}
	}
	return x;
}
/**
* Computes the variance of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_VARIANCE( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.variance );
}
/**
* Computes the expected value of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MEAN( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.mean );
}
/**
* Evaluates the natural logarithm of the probability density function (PDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the PDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_LOGPDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.logpdf );
}
/**
* Computes the mode of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MODE( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MODE( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MODE( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MODE( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MODE( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.mode );
}
/**
* Computes the expected value of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MEDIAN( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.median );
}
/**
* Evaluates the quantile function for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} p - value(s) at which to evaluate the quantile function
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_QUANTILE( p, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.quantile );
}
/**
* Computes the differential entropy for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_ENTROPY( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.entropy );
}
/**
* Evaluates the probability density function (PDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the PDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_PDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_PDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.pdf );
}
/**
* Evaluates the moment-generating function (MGF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} t - value(s) at which to evaluate the MGF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MGF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MGF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MGF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MGF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MGF( t, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.mgf );
}
/**
* Evaluates the cumulative density function (CDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the CDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_CDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_CDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_CDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_CDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_CDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.cdf );
}
/**
* Computes the excess kurtosis for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_KURTOSIS( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.kurtosis );
}
/**
* Computes the standard deviation of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_STDEV( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.stdev );
}
/**
* Evaluates the natural logarithm of the cumulative density function (CDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the CDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_LOGCDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.logcdf );
}
/**
* Computes the skewness of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_SKEWNESS( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.skewness );
}
