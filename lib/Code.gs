/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ql=s((K9e,$l)=>{"use strict";var M3r=typeof Object.defineProperty=="function"?Object.defineProperty:null;$l.exports=M3r});var r6=s((rde,Kl)=>{"use strict";var B3r=Ql();function k3r(){try{return B3r({},"x",{}),!0}catch{return!1}}Kl.exports=k3r});var t6=s((ede,e6)=>{"use strict";var C3r=Object.defineProperty;e6.exports=C3r});var h1=s((tde,i6)=>{"use strict";function V3r(r){return typeof r=="number"}i6.exports=V3r});var q1=s((ide,n6)=>{"use strict";function U3r(r){return r[0]==="-"}function a6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function G3r(r,e,t){var i=!1,a=e-r.length;return a<0||(U3r(r)&&(i=!0,r=r.substr(1)),r=t?r+a6(a):a6(a)+r,i&&(r="-"+r)),r}n6.exports=G3r});var v6=s((ade,o6)=>{"use strict";var D3r=h1(),s6=q1(),H3r=String.prototype.toLowerCase,u6=String.prototype.toUpperCase;function z3r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!D3r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=s6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=s6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===u6.call(r.specifier)?u6.call(t):H3r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}o6.exports=z3r});var c6=s((nde,f6)=>{"use strict";function W3r(r){return typeof r=="string"}f6.exports=W3r});var d6=s((sde,p6)=>{"use strict";var X3r=h1(),J3r=Math.abs,Y3r=String.prototype.toLowerCase,l6=String.prototype.toUpperCase,Gi=String.prototype.replace,Z3r=/e\+(\d)$/,$3r=/e-(\d)$/,Q3r=/^(\d+)$/,K3r=/^(\d+)e/,rcr=/\.0$/,ecr=/\.0*e/,tcr=/(\..*[^0])0*e/;function icr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!X3r(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":J3r(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Gi.call(t,tcr,"$1e"),t=Gi.call(t,ecr,"e"),t=Gi.call(t,rcr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Gi.call(t,Z3r,"e+0$1"),t=Gi.call(t,$3r,"e-0$1"),r.alternate&&(t=Gi.call(t,Q3r,"$1."),t=Gi.call(t,K3r,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l6.call(r.specifier)?l6.call(t):Y3r.call(t),t}p6.exports=icr});var y6=s((ude,m6)=>{"use strict";function g6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function acr(r,e,t){var i=e-r.length;return i<0||(r=t?r+g6(i):g6(i)+r),r}m6.exports=acr});var q6=s((ode,h6)=>{"use strict";var ncr=v6(),scr=c6(),ucr=d6(),ocr=y6(),vcr=q1(),fcr=String.fromCharCode,R0=isNaN,ccr=Array.isArray;function lcr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function pcr(r){var e,t,i,a,n,u,o,v,f;if(!ccr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],scr(i))u+=i;else{if(e=i.precision!==void 0,i=lcr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,R0(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,R0(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ncr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!R0(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=R0(n)?String(i.arg):fcr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=ucr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=vcr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ocr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}h6.exports=pcr});var w6=s((vde,b6)=>{"use strict";var dcr=q6();b6.exports=dcr});var N6=s((fde,E6)=>{"use strict";var L0=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function gcr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function mcr(r){var e,t,i,a;for(t=[],a=0,i=L0.exec(r);i;)e=r.slice(a,L0.lastIndex-i[0].length),e.length&&t.push(e),t.push(gcr(i)),a=L0.lastIndex,i=L0.exec(r);return e=r.slice(a),e.length&&t.push(e),t}E6.exports=mcr});var O6=s((cde,S6)=>{"use strict";var ycr=N6();S6.exports=ycr});var _6=s((lde,A6)=>{"use strict";function hcr(r){return typeof r=="string"}A6.exports=hcr});var R6=s((pde,I6)=>{"use strict";var qcr=w6(),bcr=O6(),wcr=_6();function T6(r){var e,t,i;if(!wcr(r))throw new TypeError(T6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=bcr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return qcr.apply(null,t)}I6.exports=T6});var C=s((dde,L6)=>{"use strict";var Ecr=R6();L6.exports=Ecr});var B6=s((gde,M6)=>{"use strict";var P6=C(),la=Object.prototype,F6=la.toString,x6=la.__defineGetter__,j6=la.__defineSetter__,Ncr=la.__lookupGetter__,Scr=la.__lookupSetter__;function Ocr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||F6.call(r)==="[object Array]")throw new TypeError(P6("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||F6.call(t)==="[object Array]")throw new TypeError(P6("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(Ncr.call(r,e)||Scr.call(r,e)?(i=r.__proto__,r.__proto__=la,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&x6&&x6.call(r,e,t.get),u&&j6&&j6.call(r,e,t.set),r}M6.exports=Ocr});var ti=s((mde,k6)=>{"use strict";var Acr=r6(),_cr=t6(),Tcr=B6(),b1;Acr()?b1=_cr:b1=Tcr;k6.exports=b1});var V6=s((yde,C6)=>{"use strict";var Icr=ti();function Rcr(r,e,t){Icr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}C6.exports=Rcr});var G=s((hde,U6)=>{"use strict";var Lcr=V6();U6.exports=Lcr});var D6=s((qde,G6)=>{"use strict";var Pcr=ti();function Fcr(r,e,t){Pcr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}G6.exports=Fcr});var $r=s((bde,H6)=>{"use strict";var xcr=D6();H6.exports=xcr});var W6=s((wde,z6)=>{"use strict";function jcr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}z6.exports=jcr});var wn=s((Ede,X6)=>{"use strict";var Mcr=W6();X6.exports=Mcr});var Y6=s((Nde,J6)=>{"use strict";function Bcr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}J6.exports=Bcr});var P0=s((Sde,Z6)=>{"use strict";var kcr=Y6();Z6.exports=kcr});var Q6=s((Ode,$6)=>{"use strict";var Ccr=P0();function Vcr(r){return Ccr(0,r)}$6.exports=Vcr});var ii=s((Ade,K6)=>{"use strict";var Ucr=Q6();K6.exports=Ucr});var t4=s((_de,e4)=>{"use strict";var En=wn(),Gcr=ii(),r4=C();function Dcr(r,e,t){var i,a,n,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(n=Gcr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],a=t[f],a!==0&&a<v)throw new Error(r4("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",En(e).join(", "),En(t).join(", "),f));if(v===a)n[f]=1;else if(v===1)n[f]=0;else throw new Error(r4("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",En(e).join(", "),En(t).join(", "),f))}return{ref:r,data:i,shape:En(t),strides:n}}e4.exports=Dcr});var w1=s((Tde,i4)=>{"use strict";var Hcr=t4();i4.exports=Hcr});var s4=s((Ide,n4)=>{"use strict";var a4=w1();function zcr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;if(q=e[2],o=q[1],v=q[0],!(o<=0||v<=0))for(A=a4(r[0],e[0],q),b=A.data,w=A.strides,i=w[1],a=w[0],A=a4(r[1],e[1],q),T=A.data,w=A.strides,n=w[1],u=w[0],S=r[2],p=0,y=0,c=0;c<v;c++){for(l=0,m=0,g=b[p],d=T[y],h=S[c],f=0;f<o;f++)h[f]=t(g[l],d[m]),l+=i,m+=n;p+=a,y+=u}}n4.exports=zcr});var E1=s((Rde,u4)=>{"use strict";var Wcr=s4();u4.exports=Wcr});var v4=s((Lde,o4)=>{"use strict";var N1=w1();function Xcr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j;if(S=e[3],f=S[1],c=S[0],!(f<=0||c<=0))for(N=N1(r[0],e[0],S),I=N.data,O=N.strides,i=O[1],a=O[0],N=N1(r[1],e[1],S),E=N.data,O=N.strides,n=O[1],u=O[0],N=N1(r[2],e[2],S),P=N.data,O=N.strides,o=O[1],v=O[0],j=r[3],y=0,d=0,q=0,p=0;p<c;p++){for(m=0,g=0,h=0,w=I[y],A=E[d],b=P[q],T=j[p],l=0;l<f;l++)T[l]=t(w[m],A[g],b[h]),m+=i,g+=n,h+=o;y+=a,d+=u,q+=v}}o4.exports=Xcr});var S1=s((Pde,f4)=>{"use strict";var Jcr=v4();f4.exports=Jcr});var l4=s((Fde,c4)=>{"use strict";function Ycr(r){var e,t,i,a,n,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(a=r[0],f=a.length,v===1){for(c=0;c<f;c++)t.push(a[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(n=e[0]-f+c,n>=0?i=a[n]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}c4.exports=Ycr});var F0=s((xde,p4)=>{"use strict";var Zcr=l4();p4.exports=Zcr});var g4=s((jde,d4)=>{"use strict";var $cr=P0();function Qcr(r,e){var t,i,a,n;for(i=e[1],a=e[0],t=[],n=0;n<a;n++)t.push($cr(r,i));return t}d4.exports=Qcr});var x0=s((Mde,m4)=>{"use strict";var Kcr=g4();m4.exports=Kcr});var h4=s((Bde,y4)=>{"use strict";function rlr(r,e,t){var i,a,n,u,o,v;for(n=r[1],u=r[0],i=[],o=0;o<u;o++){for(a=[],v=0;v<n;v++)a.push(e.call(t,[o,v]));i.push(a)}return i}y4.exports=rlr});var b4=s((kde,q4)=>{"use strict";var elr=h4();q4.exports=elr});var E4=s((Cde,w4)=>{"use strict";function tlr(r){var e,t,i,a,n,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],n=0;n<t;n++)for(a=r[n],u=0;u<i;u++)e.push(a[u]);return e}w4.exports=tlr});var S4=s((Vde,N4)=>{"use strict";function ilr(r,e,t,i){var a,n,u,o,v,f;for(n=r.length,u=r[0].length,a=i,v=0;v<n;v++)for(o=r[v],f=0;f<u;f++)e[a]=o[f],a+=t;return e}N4.exports=ilr});var j0=s((Ude,A4)=>{"use strict";var alr=G(),O4=E4(),nlr=S4();alr(O4,"assign",nlr);A4.exports=O4});var T4=s((Gde,_4)=>{"use strict";var slr=/./;_4.exports=slr});var O1=s((Dde,I4)=>{"use strict";function ulr(r){return typeof r=="boolean"}I4.exports=ulr});var L4=s((Hde,R4)=>{"use strict";function olr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}R4.exports=olr});var F4=s((zde,P4)=>{"use strict";var vlr=L4();P4.exports=vlr});var j4=s((Wde,x4)=>{"use strict";var flr=F4(),clr=flr();function llr(){return clr&&typeof Symbol.toStringTag=="symbol"}x4.exports=llr});var pa=s((Xde,M4)=>{"use strict";var plr=j4();M4.exports=plr});var A1=s((Jde,B4)=>{"use strict";var dlr=Object.prototype.toString;B4.exports=dlr});var C4=s((Yde,k4)=>{"use strict";var glr=A1();function mlr(r){return glr.call(r)}k4.exports=mlr});var U4=s((Zde,V4)=>{"use strict";var ylr=Object.prototype.hasOwnProperty;function hlr(r,e){return r==null?!1:ylr.call(r,e)}V4.exports=hlr});var vr=s(($de,G4)=>{"use strict";var qlr=U4();G4.exports=qlr});var H4=s((Qde,D4)=>{"use strict";var blr=typeof Symbol=="function"?Symbol:void 0;D4.exports=blr});var _1=s((Kde,z4)=>{"use strict";var wlr=H4();z4.exports=wlr});var J4=s((rge,X4)=>{"use strict";var W4=_1(),Elr=typeof W4=="function"?W4.toStringTag:"";X4.exports=Elr});var Z4=s((ege,Y4)=>{"use strict";var Nlr=vr(),Nn=J4(),T1=A1();function Slr(r){var e,t,i;if(r==null)return T1.call(r);t=r[Nn],e=Nlr(r,Nn);try{r[Nn]=void 0}catch{return T1.call(r)}return i=T1.call(r),e?r[Nn]=t:delete r[Nn],i}Y4.exports=Slr});var Kr=s((tge,$4)=>{"use strict";var Olr=pa(),Alr=C4(),_lr=Z4(),I1;Olr()?I1=_lr:I1=Alr;$4.exports=I1});var K4=s((ige,Q4)=>{"use strict";var Tlr=Boolean;Q4.exports=Tlr});var R1=s((age,r5)=>{"use strict";var Ilr=K4();r5.exports=Ilr});var t5=s((nge,e5)=>{"use strict";var Rlr=Boolean.prototype.toString;e5.exports=Rlr});var a5=s((sge,i5)=>{"use strict";var Llr=t5();function Plr(r){try{return Llr.call(r),!0}catch{return!1}}i5.exports=Plr});var L1=s((uge,n5)=>{"use strict";var Flr=pa(),xlr=Kr(),jlr=R1(),Mlr=a5(),Blr=Flr();function klr(r){return typeof r=="object"?r instanceof jlr?!0:Blr?Mlr(r):xlr(r)==="[object Boolean]":!1}n5.exports=klr});var u5=s((oge,s5)=>{"use strict";var Clr=O1(),Vlr=L1();function Ulr(r){return Clr(r)||Vlr(r)}s5.exports=Ulr});var de=s((vge,v5)=>{"use strict";var o5=G(),P1=u5(),Glr=O1(),Dlr=L1();o5(P1,"isPrimitive",Glr);o5(P1,"isObject",Dlr);v5.exports=P1});var c5=s((fge,f5)=>{"use strict";function Hlr(){return new Function("return this;")()}f5.exports=Hlr});var p5=s((cge,l5)=>{"use strict";var zlr=typeof self=="object"?self:null;l5.exports=zlr});var g5=s((lge,d5)=>{"use strict";var Wlr=typeof window=="object"?window:null;d5.exports=Wlr});var y5=s((pge,m5)=>{"use strict";var Xlr=typeof globalThis=="object"?globalThis:null;m5.exports=Xlr});var F1=s((dge,w5)=>{"use strict";var Jlr=de().isPrimitive,Ylr=C(),Zlr=c5(),h5=p5(),q5=g5(),b5=y5();function $lr(r){if(arguments.length){if(!Jlr(r))throw new TypeError(Ylr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Zlr()}if(b5)return b5;if(h5)return h5;if(q5)return q5;throw new Error("unexpected error. Unable to resolve global object.")}w5.exports=$lr});var S5=s((gge,N5)=>{"use strict";var Qlr=F1(),E5=Qlr(),Klr=E5.document&&E5.document.childNodes;N5.exports=Klr});var A5=s((mge,O5)=>{"use strict";var r6r=Int8Array;O5.exports=r6r});var T5=s((yge,_5)=>{"use strict";var e6r=T4(),t6r=S5(),i6r=A5();function a6r(){return typeof e6r=="function"||typeof i6r=="object"||typeof t6r=="function"}_5.exports=a6r});var x1=s((hge,I5)=>{"use strict";function n6r(){return/^\s*function\s*([^(]*)/i}I5.exports=n6r});var L5=s((qge,R5)=>{"use strict";var s6r=x1(),u6r=s6r();R5.exports=u6r});var j1=s((bge,F5)=>{"use strict";var o6r=G(),P5=x1(),v6r=L5();o6r(P5,"REGEXP",v6r);F5.exports=P5});var j5=s((wge,x5)=>{"use strict";var f6r=Kr(),M1;function c6r(r){return f6r(r)==="[object Array]"}Array.isArray?M1=Array.isArray:M1=c6r;x5.exports=M1});var qe=s((Ege,M5)=>{"use strict";var l6r=j5();M5.exports=l6r});var k5=s((Nge,B5)=>{"use strict";var p6r=qe(),d6r=C();function g6r(r){if(typeof r!="function")throw new TypeError(d6r("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!p6r(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}B5.exports=g6r});var V5=s((Sge,C5)=>{"use strict";var m6r=k5();C5.exports=m6r});var G5=s((Oge,U5)=>{"use strict";function y6r(r){return r!==null&&typeof r=="object"}U5.exports=y6r});var k1=s((Age,D5)=>{"use strict";var h6r=G(),q6r=V5(),B1=G5(),b6r=q6r(B1);h6r(B1,"isObjectLikeArray",b6r);D5.exports=B1});var z5=s((_ge,H5)=>{"use strict";var w6r=k1();function E6r(r){return w6r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}H5.exports=E6r});var Di=s((Tge,W5)=>{"use strict";var N6r=z5();W5.exports=N6r});var J5=s((Ige,X5)=>{"use strict";var S6r=Kr(),O6r=j1().REGEXP,A6r=Di();function _6r(r){var e,t,i;if(t=S6r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=O6r.exec(i.toString()),e)return e[1]}return A6r(r)?"Buffer":t}X5.exports=_6r});var mt=s((Rge,Y5)=>{"use strict";var T6r=J5();Y5.exports=T6r});var $5=s((Lge,Z5)=>{"use strict";var I6r=mt();function R6r(r){var e;return r===null?"null":(e=typeof r,e==="object"?I6r(r).toLowerCase():e)}Z5.exports=R6r});var K5=s((Pge,Q5)=>{"use strict";var L6r=mt();function P6r(r){return L6r(r).toLowerCase()}Q5.exports=P6r});var M0=s((Fge,r8)=>{"use strict";var F6r=T5(),x6r=$5(),j6r=K5(),M6r=F6r()?j6r:x6r;r8.exports=M6r});var t8=s((xge,e8)=>{"use strict";var B6r=M0();function k6r(r){return B6r(r)==="function"}e8.exports=k6r});var yr=s((jge,i8)=>{"use strict";var C6r=t8();i8.exports=C6r});var n8=s((Mge,a8)=>{"use strict";var V6r=Math.floor;a8.exports=V6r});var Gr=s((Bge,s8)=>{"use strict";var U6r=n8();s8.exports=U6r});var o8=s((kge,u8)=>{"use strict";var G6r=Gr();function D6r(r){return G6r(r)===r}u8.exports=D6r});var we=s((Cge,v8)=>{"use strict";var H6r=o8();v8.exports=H6r});var c8=s((Vge,f8)=>{"use strict";var z6r=9007199254740991;f8.exports=z6r});var p8=s((Uge,l8)=>{"use strict";var W6r=we(),X6r=c8();function J6r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&W6r(r.length)&&r.length>=0&&r.length<=X6r}l8.exports=J6r});var Be=s((Gge,d8)=>{"use strict";var Y6r=p8();d8.exports=Y6r});var m8=s((Dge,g8)=>{"use strict";var Z6r=yr();function $6r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Z6r(r.next)}g8.exports=$6r});var h8=s((Hge,y8)=>{"use strict";var Q6r=m8();y8.exports=Q6r});var w8=s((zge,b8)=>{"use strict";var q8="function";function K6r(r){return typeof r.get===q8&&typeof r.set===q8}b8.exports=K6r});var da=s((Wge,E8)=>{"use strict";var r4r=w8();E8.exports=r4r});var O8=s((Xge,S8)=>{"use strict";var N8={complex128:e4r,complex64:t4r,default:i4r};function e4r(r,e,t){r.set(t,e)}function t4r(r,e,t){r.set(t,e)}function i4r(r,e,t){r.set(t,e)}function a4r(r){var e=N8[r];return typeof e=="function"?e:N8.default}S8.exports=a4r});var B0=s((Jge,A8)=>{"use strict";var n4r=O8();A8.exports=n4r});var I8=s((Yge,T8)=>{"use strict";var _8={float64:s4r,float32:u4r,int32:o4r,int16:v4r,int8:f4r,uint32:c4r,uint16:l4r,uint8:p4r,uint8c:d4r,generic:g4r,default:m4r};function s4r(r,e,t){r[e]=t}function u4r(r,e,t){r[e]=t}function o4r(r,e,t){r[e]=t}function v4r(r,e,t){r[e]=t}function f4r(r,e,t){r[e]=t}function c4r(r,e,t){r[e]=t}function l4r(r,e,t){r[e]=t}function p4r(r,e,t){r[e]=t}function d4r(r,e,t){r[e]=t}function g4r(r,e,t){r[e]=t}function m4r(r,e,t){r[e]=t}function y4r(r){var e=_8[r];return typeof e=="function"?e:_8.default}T8.exports=y4r});var k0=s((Zge,R8)=>{"use strict";var h4r=I8();R8.exports=h4r});var P8=s(($ge,L8)=>{"use strict";var q4r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};L8.exports=q4r});var x8=s((Qge,F8)=>{"use strict";var b4r=Kr(),w4r=typeof Float64Array=="function";function E4r(r){return w4r&&r instanceof Float64Array||b4r(r)==="[object Float64Array]"}F8.exports=E4r});var M8=s((Kge,j8)=>{"use strict";var N4r=x8();j8.exports=N4r});var k8=s((rme,B8)=>{"use strict";var S4r=typeof Float64Array=="function"?Float64Array:null;B8.exports=S4r});var U8=s((eme,V8)=>{"use strict";var O4r=M8(),C8=k8();function A4r(){var r,e;if(typeof C8!="function")return!1;try{e=new C8([1,3.14,-3.14,NaN]),r=O4r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}V8.exports=A4r});var C1=s((tme,G8)=>{"use strict";var _4r=U8();G8.exports=_4r});var H8=s((ime,D8)=>{"use strict";var T4r=typeof Float64Array=="function"?Float64Array:void 0;D8.exports=T4r});var W8=s((ame,z8)=>{"use strict";function I4r(){throw new Error("not implemented")}z8.exports=I4r});var ge=s((nme,X8)=>{"use strict";var R4r=C1(),L4r=H8(),P4r=W8(),V1;R4r()?V1=L4r:V1=P4r;X8.exports=V1});var Y8=s((sme,J8)=>{"use strict";var F4r=Kr(),x4r=typeof Float32Array=="function";function j4r(r){return x4r&&r instanceof Float32Array||F4r(r)==="[object Float32Array]"}J8.exports=j4r});var $8=s((ume,Z8)=>{"use strict";var M4r=Y8();Z8.exports=M4r});var hr=s((ome,Q8)=>{"use strict";var B4r=Number.POSITIVE_INFINITY;Q8.exports=B4r});var rp=s((vme,K8)=>{"use strict";var k4r=typeof Float32Array=="function"?Float32Array:null;K8.exports=k4r});var ip=s((fme,tp)=>{"use strict";var C4r=$8(),V4r=hr(),ep=rp();function U4r(){var r,e;if(typeof ep!="function")return!1;try{e=new ep([1,3.14,-3.14,5e40]),r=C4r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===V4r}catch{r=!1}return r}tp.exports=U4r});var np=s((cme,ap)=>{"use strict";var G4r=ip();ap.exports=G4r});var up=s((lme,sp)=>{"use strict";var D4r=typeof Float32Array=="function"?Float32Array:void 0;sp.exports=D4r});var vp=s((pme,op)=>{"use strict";function H4r(){throw new Error("not implemented")}op.exports=H4r});var rt=s((dme,fp)=>{"use strict";var z4r=np(),W4r=up(),X4r=vp(),U1;z4r()?U1=W4r:U1=X4r;fp.exports=U1});var lp=s((gme,cp)=>{"use strict";var J4r=Kr(),Y4r=typeof Uint32Array=="function";function Z4r(r){return Y4r&&r instanceof Uint32Array||J4r(r)==="[object Uint32Array]"}cp.exports=Z4r});var yt=s((mme,pp)=>{"use strict";var $4r=lp();pp.exports=$4r});var ga=s((yme,dp)=>{"use strict";var Q4r=4294967295;dp.exports=Q4r});var mp=s((hme,gp)=>{"use strict";var K4r=typeof Uint32Array=="function"?Uint32Array:null;gp.exports=K4r});var qp=s((qme,hp)=>{"use strict";var r5r=yt(),G1=ga(),yp=mp();function e5r(){var r,e;if(typeof yp!="function")return!1;try{e=[1,3.14,-3.14,G1+1,G1+2],e=new yp(e),r=r5r(e)&&e[0]===1&&e[1]===3&&e[2]===G1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}hp.exports=e5r});var wp=s((bme,bp)=>{"use strict";var t5r=qp();bp.exports=t5r});var Np=s((wme,Ep)=>{"use strict";var i5r=typeof Uint32Array=="function"?Uint32Array:void 0;Ep.exports=i5r});var Op=s((Eme,Sp)=>{"use strict";function a5r(){throw new Error("not implemented")}Sp.exports=a5r});var me=s((Nme,Ap)=>{"use strict";var n5r=wp(),s5r=Np(),u5r=Op(),D1;n5r()?D1=s5r:D1=u5r;Ap.exports=D1});var Tp=s((Sme,_p)=>{"use strict";var o5r=Kr(),v5r=typeof Int32Array=="function";function f5r(r){return v5r&&r instanceof Int32Array||o5r(r)==="[object Int32Array]"}_p.exports=f5r});var C0=s((Ome,Ip)=>{"use strict";var c5r=Tp();Ip.exports=c5r});var ma=s((Ame,Rp)=>{"use strict";var l5r=2147483647;Rp.exports=l5r});var Pp=s((_me,Lp)=>{"use strict";var p5r=-2147483648;Lp.exports=p5r});var xp=s((Tme,Fp)=>{"use strict";var d5r=typeof Int32Array=="function"?Int32Array:null;Fp.exports=d5r});var Bp=s((Ime,Mp)=>{"use strict";var g5r=C0(),m5r=ma(),y5r=Pp(),jp=xp();function h5r(){var r,e;if(typeof jp!="function")return!1;try{e=new jp([1,3.14,-3.14,m5r+1]),r=g5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===y5r}catch{r=!1}return r}Mp.exports=h5r});var Cp=s((Rme,kp)=>{"use strict";var q5r=Bp();kp.exports=q5r});var Up=s((Lme,Vp)=>{"use strict";var b5r=typeof Int32Array=="function"?Int32Array:void 0;Vp.exports=b5r});var Dp=s((Pme,Gp)=>{"use strict";function w5r(){throw new Error("not implemented")}Gp.exports=w5r});var ai=s((Fme,Hp)=>{"use strict";var E5r=Cp(),N5r=Up(),S5r=Dp(),H1;E5r()?H1=N5r:H1=S5r;Hp.exports=H1});var Wp=s((xme,zp)=>{"use strict";var O5r=Kr(),A5r=typeof Uint16Array=="function";function _5r(r){return A5r&&r instanceof Uint16Array||O5r(r)==="[object Uint16Array]"}zp.exports=_5r});var Jp=s((jme,Xp)=>{"use strict";var T5r=Wp();Xp.exports=T5r});var Zp=s((Mme,Yp)=>{"use strict";var I5r=65535;Yp.exports=I5r});var Qp=s((Bme,$p)=>{"use strict";var R5r=typeof Uint16Array=="function"?Uint16Array:null;$p.exports=R5r});var e7=s((kme,r7)=>{"use strict";var L5r=Jp(),z1=Zp(),Kp=Qp();function P5r(){var r,e;if(typeof Kp!="function")return!1;try{e=[1,3.14,-3.14,z1+1,z1+2],e=new Kp(e),r=L5r(e)&&e[0]===1&&e[1]===3&&e[2]===z1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}r7.exports=P5r});var i7=s((Cme,t7)=>{"use strict";var F5r=e7();t7.exports=F5r});var n7=s((Vme,a7)=>{"use strict";var x5r=typeof Uint16Array=="function"?Uint16Array:void 0;a7.exports=x5r});var u7=s((Ume,s7)=>{"use strict";function j5r(){throw new Error("not implemented")}s7.exports=j5r});var Hi=s((Gme,o7)=>{"use strict";var M5r=i7(),B5r=n7(),k5r=u7(),W1;M5r()?W1=B5r:W1=k5r;o7.exports=W1});var f7=s((Dme,v7)=>{"use strict";var C5r=Kr(),V5r=typeof Int16Array=="function";function U5r(r){return V5r&&r instanceof Int16Array||C5r(r)==="[object Int16Array]"}v7.exports=U5r});var l7=s((Hme,c7)=>{"use strict";var G5r=f7();c7.exports=G5r});var d7=s((zme,p7)=>{"use strict";var D5r=32767;p7.exports=D5r});var m7=s((Wme,g7)=>{"use strict";var H5r=-32768;g7.exports=H5r});var h7=s((Xme,y7)=>{"use strict";var z5r=typeof Int16Array=="function"?Int16Array:null;y7.exports=z5r});var w7=s((Jme,b7)=>{"use strict";var W5r=l7(),X5r=d7(),J5r=m7(),q7=h7();function Y5r(){var r,e;if(typeof q7!="function")return!1;try{e=new q7([1,3.14,-3.14,X5r+1]),r=W5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===J5r}catch{r=!1}return r}b7.exports=Y5r});var N7=s((Yme,E7)=>{"use strict";var Z5r=w7();E7.exports=Z5r});var O7=s((Zme,S7)=>{"use strict";var $5r=typeof Int16Array=="function"?Int16Array:void 0;S7.exports=$5r});var _7=s(($me,A7)=>{"use strict";function Q5r(){throw new Error("not implemented")}A7.exports=Q5r});var ya=s((Qme,T7)=>{"use strict";var K5r=N7(),r8r=O7(),e8r=_7(),X1;K5r()?X1=r8r:X1=e8r;T7.exports=X1});var R7=s((Kme,I7)=>{"use strict";var t8r=Kr(),i8r=typeof Uint8Array=="function";function a8r(r){return i8r&&r instanceof Uint8Array||t8r(r)==="[object Uint8Array]"}I7.exports=a8r});var P7=s((rye,L7)=>{"use strict";var n8r=R7();L7.exports=n8r});var x7=s((eye,F7)=>{"use strict";var s8r=255;F7.exports=s8r});var M7=s((tye,j7)=>{"use strict";var u8r=typeof Uint8Array=="function"?Uint8Array:null;j7.exports=u8r});var C7=s((iye,k7)=>{"use strict";var o8r=P7(),J1=x7(),B7=M7();function v8r(){var r,e;if(typeof B7!="function")return!1;try{e=[1,3.14,-3.14,J1+1,J1+2],e=new B7(e),r=o8r(e)&&e[0]===1&&e[1]===3&&e[2]===J1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}k7.exports=v8r});var U7=s((aye,V7)=>{"use strict";var f8r=C7();V7.exports=f8r});var D7=s((nye,G7)=>{"use strict";var c8r=typeof Uint8Array=="function"?Uint8Array:void 0;G7.exports=c8r});var z7=s((sye,H7)=>{"use strict";function l8r(){throw new Error("not implemented")}H7.exports=l8r});var et=s((uye,W7)=>{"use strict";var p8r=U7(),d8r=D7(),g8r=z7(),Y1;p8r()?Y1=d8r:Y1=g8r;W7.exports=Y1});var J7=s((oye,X7)=>{"use strict";var m8r=Kr(),y8r=typeof Uint8ClampedArray=="function";function h8r(r){return y8r&&r instanceof Uint8ClampedArray||m8r(r)==="[object Uint8ClampedArray]"}X7.exports=h8r});var Z7=s((vye,Y7)=>{"use strict";var q8r=J7();Y7.exports=q8r});var Q7=s((fye,$7)=>{"use strict";var b8r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;$7.exports=b8r});var e9=s((cye,r9)=>{"use strict";var w8r=Z7(),K7=Q7();function E8r(){var r,e;if(typeof K7!="function")return!1;try{e=new K7([-1,0,1,3.14,4.99,255,256]),r=w8r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}r9.exports=E8r});var i9=s((lye,t9)=>{"use strict";var N8r=e9();t9.exports=N8r});var n9=s((pye,a9)=>{"use strict";var S8r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;a9.exports=S8r});var u9=s((dye,s9)=>{"use strict";function O8r(){throw new Error("not implemented")}s9.exports=O8r});var ha=s((gye,o9)=>{"use strict";var A8r=i9(),_8r=n9(),T8r=u9(),Z1;A8r()?Z1=_8r:Z1=T8r;o9.exports=Z1});var f9=s((mye,v9)=>{"use strict";var I8r=Kr(),R8r=typeof Int8Array=="function";function L8r(r){return R8r&&r instanceof Int8Array||I8r(r)==="[object Int8Array]"}v9.exports=L8r});var l9=s((yye,c9)=>{"use strict";var P8r=f9();c9.exports=P8r});var d9=s((hye,p9)=>{"use strict";var F8r=127;p9.exports=F8r});var m9=s((qye,g9)=>{"use strict";var x8r=-128;g9.exports=x8r});var h9=s((bye,y9)=>{"use strict";var j8r=typeof Int8Array=="function"?Int8Array:null;y9.exports=j8r});var w9=s((wye,b9)=>{"use strict";var M8r=l9(),B8r=d9(),k8r=m9(),q9=h9();function C8r(){var r,e;if(typeof q9!="function")return!1;try{e=new q9([1,3.14,-3.14,B8r+1]),r=M8r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===k8r}catch{r=!1}return r}b9.exports=C8r});var N9=s((Eye,E9)=>{"use strict";var V8r=w9();E9.exports=V8r});var O9=s((Nye,S9)=>{"use strict";var U8r=typeof Int8Array=="function"?Int8Array:void 0;S9.exports=U8r});var _9=s((Sye,A9)=>{"use strict";function G8r(){throw new Error("not implemented")}A9.exports=G8r});var qa=s((Oye,T9)=>{"use strict";var D8r=N9(),H8r=O9(),z8r=_9(),$1;D8r()?$1=H8r:$1=z8r;T9.exports=$1});var Q1=s((Aye,I9)=>{"use strict";function W8r(r){return typeof r=="number"}I9.exports=W8r});var L9=s((_ye,R9)=>{"use strict";R9.exports=Number});var V0=s((Tye,P9)=>{"use strict";var X8r=L9();P9.exports=X8r});var x9=s((Iye,F9)=>{"use strict";var J8r=V0(),Y8r=J8r.prototype.toString;F9.exports=Y8r});var M9=s((Rye,j9)=>{"use strict";var Z8r=x9();function $8r(r){try{return Z8r.call(r),!0}catch{return!1}}j9.exports=$8r});var K1=s((Lye,B9)=>{"use strict";var Q8r=pa(),K8r=Kr(),rpr=V0(),epr=M9(),tpr=Q8r();function ipr(r){return typeof r=="object"?r instanceof rpr?!0:tpr?epr(r):K8r(r)==="[object Number]":!1}B9.exports=ipr});var C9=s((Pye,k9)=>{"use strict";var apr=Q1(),npr=K1();function spr(r){return apr(r)||npr(r)}k9.exports=spr});var Er=s((Fye,U9)=>{"use strict";var V9=G(),r2=C9(),upr=Q1(),opr=K1();V9(r2,"isPrimitive",upr);V9(r2,"isObject",opr);U9.exports=r2});var Ir=s((xye,G9)=>{"use strict";var vpr=V0(),fpr=vpr.NEGATIVE_INFINITY;G9.exports=fpr});var e2=s((jye,D9)=>{"use strict";var cpr=hr(),lpr=Ir(),ppr=we();function dpr(r){return r<cpr&&r>lpr&&ppr(r)}D9.exports=dpr});var t2=s((Mye,H9)=>{"use strict";var gpr=Er().isPrimitive,mpr=e2();function ypr(r){return gpr(r)&&mpr(r)}H9.exports=ypr});var i2=s((Bye,z9)=>{"use strict";var hpr=Er().isObject,qpr=e2();function bpr(r){return hpr(r)&&qpr(r.valueOf())}z9.exports=bpr});var X9=s((kye,W9)=>{"use strict";var wpr=t2(),Epr=i2();function Npr(r){return wpr(r)||Epr(r)}W9.exports=Npr});var ye=s((Cye,Y9)=>{"use strict";var J9=G(),a2=X9(),Spr=t2(),Opr=i2();J9(a2,"isPrimitive",Spr);J9(a2,"isObject",Opr);Y9.exports=a2});var n2=s((Vye,Z9)=>{"use strict";var Apr=ye().isPrimitive;function _pr(r){return Apr(r)&&r>=0}Z9.exports=_pr});var s2=s((Uye,$9)=>{"use strict";var Tpr=ye().isObject;function Ipr(r){return Tpr(r)&&r.valueOf()>=0}$9.exports=Ipr});var K9=s((Gye,Q9)=>{"use strict";var Rpr=n2(),Lpr=s2();function Ppr(r){return Rpr(r)||Lpr(r)}Q9.exports=Ppr});var be=s((Dye,ed)=>{"use strict";var rd=G(),u2=K9(),Fpr=n2(),xpr=s2();rd(u2,"isPrimitive",Fpr);rd(u2,"isObject",xpr);ed.exports=u2});var o2=s((Hye,td)=>{"use strict";var jpr=4294967295;td.exports=jpr});var ad=s((zye,id)=>{"use strict";var Mpr=we(),Bpr=o2();function kpr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Mpr(r.length)&&r.length>=0&&r.length<=Bpr}id.exports=kpr});var zi=s((Wye,nd)=>{"use strict";var Cpr=ad();nd.exports=Cpr});var ud=s((Xye,sd)=>{"use strict";var Vpr=Kr(),Upr=typeof ArrayBuffer=="function";function Gpr(r){return Upr&&r instanceof ArrayBuffer||Vpr(r)==="[object ArrayBuffer]"}sd.exports=Gpr});var U0=s((Jye,od)=>{"use strict";var Dpr=ud();od.exports=Dpr});var fd=s((Yye,vd)=>{"use strict";var Hpr=qe();function zpr(r){return typeof r=="object"&&r!==null&&!Hpr(r)}vd.exports=zpr});var G0=s((Zye,cd)=>{"use strict";var Wpr=fd();cd.exports=Wpr});var pd=s(($ye,ld)=>{"use strict";function Xpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}ld.exports=Xpr});var gd=s((Qye,dd)=>{"use strict";function Jpr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}dd.exports=Jpr});var bd=s((Kye,qd)=>{"use strict";var md=Er().isPrimitive,yd=ti(),Sn=G(),hd=C(),Ypr=pd(),Zpr=gd();function Wi(r,e){if(!(this instanceof Wi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!md(r))throw new TypeError(hd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!md(e))throw new TypeError(hd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return yd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),yd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Sn(Wi,"BYTES_PER_ELEMENT",8);Sn(Wi.prototype,"BYTES_PER_ELEMENT",8);Sn(Wi.prototype,"byteLength",16);Sn(Wi.prototype,"toString",Ypr);Sn(Wi.prototype,"toJSON",Zpr);qd.exports=Wi});var ba=s((rhe,wd)=>{"use strict";var $pr=bd();wd.exports=$pr});var Nd=s((ehe,Ed)=>{"use strict";var Qpr=typeof Math.fround=="function"?Math.fround:null;Ed.exports=Qpr});var Ad=s((the,Od)=>{"use strict";var Kpr=rt(),Sd=new Kpr(1);function r7r(r){return Sd[0]=r,Sd[0]}Od.exports=r7r});var Id=s((ihe,Td)=>{"use strict";var _d=Nd(),e7r=Ad(),v2;typeof _d=="function"?v2=_d:v2=e7r;Td.exports=v2});var Ld=s((ahe,Rd)=>{"use strict";function t7r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Rd.exports=t7r});var Fd=s((nhe,Pd)=>{"use strict";function i7r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Pd.exports=i7r});var Cd=s((she,kd)=>{"use strict";var xd=Er().isPrimitive,jd=ti(),On=G(),Md=Id(),Bd=C(),a7r=Ld(),n7r=Fd();function Xi(r,e){if(!(this instanceof Xi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!xd(r))throw new TypeError(Bd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!xd(e))throw new TypeError(Bd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return jd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Md(r)}),jd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Md(e)}),this}On(Xi,"BYTES_PER_ELEMENT",4);On(Xi.prototype,"BYTES_PER_ELEMENT",4);On(Xi.prototype,"byteLength",8);On(Xi.prototype,"toString",a7r);On(Xi.prototype,"toJSON",n7r);kd.exports=Xi});var wa=s((uhe,Vd)=>{"use strict";var s7r=Cd();Vd.exports=s7r});var Gd=s((ohe,Ud)=>{"use strict";var u7r=ba(),o7r=wa();function v7r(r){return r instanceof u7r||r instanceof o7r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}Ud.exports=v7r});var Je=s((vhe,Dd)=>{"use strict";var f7r=Gd();Dd.exports=f7r});var zd=s((fhe,Hd)=>{"use strict";var c7r=we();function l7r(r){return c7r(r/2)}Hd.exports=l7r});var D0=s((che,Wd)=>{"use strict";var p7r=zd();Wd.exports=p7r});var Jd=s((lhe,Xd)=>{"use strict";var d7r=vr(),H0=_1();function g7r(){return typeof H0=="function"&&typeof H0("foo")=="symbol"&&d7r(H0,"iterator")&&typeof H0.iterator=="symbol"}Xd.exports=g7r});var z0=s((phe,Yd)=>{"use strict";var m7r=Jd();Yd.exports=m7r});var $d=s((dhe,Zd)=>{"use strict";var y7r=z0(),h7r=y7r()?Symbol.iterator:null;Zd.exports=h7r});var An=s((ghe,Qd)=>{"use strict";var q7r=$d();Qd.exports=q7r});var rg=s((mhe,Kd)=>{"use strict";var b7r=ti();function w7r(r,e,t){b7r(r,e,{configurable:!1,enumerable:!1,get:t})}Kd.exports=w7r});var qr=s((yhe,eg)=>{"use strict";var E7r=rg();eg.exports=E7r});var ig=s((hhe,tg)=>{"use strict";function N7r(r){return r.re}tg.exports=N7r});var ni=s((qhe,ag)=>{"use strict";var S7r=ig();ag.exports=S7r});var sg=s((bhe,ng)=>{"use strict";function O7r(r){return r.im}ng.exports=O7r});var si=s((whe,ug)=>{"use strict";var A7r=sg();ug.exports=A7r});var vg=s((Ehe,og)=>{"use strict";var _7r=rt();function T7r(r,e){return new _7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}og.exports=T7r});var Ea=s((Nhe,fg)=>{"use strict";var I7r=vg();fg.exports=I7r});var lg=s((She,cg)=>{"use strict";var R7r=ge();function L7r(r,e){return new R7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}cg.exports=L7r});var Na=s((Ohe,pg)=>{"use strict";var P7r=lg();pg.exports=P7r});var mg=s((Ahe,gg)=>{"use strict";var dg={float64:F7r,float32:x7r,int32:j7r,int16:M7r,int8:B7r,uint32:k7r,uint16:C7r,uint8:V7r,uint8c:U7r,generic:G7r,default:D7r};function F7r(r,e){return r[e]}function x7r(r,e){return r[e]}function j7r(r,e){return r[e]}function M7r(r,e){return r[e]}function B7r(r,e){return r[e]}function k7r(r,e){return r[e]}function C7r(r,e){return r[e]}function V7r(r,e){return r[e]}function U7r(r,e){return r[e]}function G7r(r,e){return r[e]}function D7r(r,e){return r[e]}function H7r(r){var e=dg[r];return typeof e=="function"?e:dg.default}gg.exports=H7r});var Sa=s((_he,yg)=>{"use strict";var z7r=mg();yg.exports=z7r});var bg=s((The,qg)=>{"use strict";var hg={complex128:W7r,complex64:X7r,default:J7r};function W7r(r,e){return r.get(e)}function X7r(r,e){return r.get(e)}function J7r(r,e){return r.get(e)}function Y7r(r){var e=hg[r];return typeof e=="function"?e:hg.default}qg.exports=Y7r});var Ji=s((Ihe,wg)=>{"use strict";var Z7r=bg();wg.exports=Z7r});var Ng=s((Rhe,Eg)=>{"use strict";var $7r=zi(),Q7r=Je(),K7r=ni(),r9r=si(),e9r=C();function t9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,$7r(i)&&i.length>=2)e.push(i[0],i[1]);else if(Q7r(i))e.push(K7r(i),r9r(i));else return new TypeError(e9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Eg.exports=t9r});var Og=s((Lhe,Sg)=>{"use strict";var i9r=zi(),a9r=Je(),n9r=ni(),s9r=si(),u9r=C();function o9r(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),i9r(n)&&n.length>=2)i.push(n[0],n[1]);else if(a9r(n))i.push(n9r(n),s9r(n));else return new TypeError(u9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Sg.exports=o9r});var _g=s((Phe,Ag)=>{"use strict";var v9r=Je(),f9r=ni(),c9r=si();function l9r(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!v9r(i))return null;r[n]=f9r(i),r[n+1]=c9r(i),n+=2}return r}Ag.exports=l9r});var Mg=s((Fhe,jg)=>{"use strict";var _n=be().isPrimitive,Tg=zi(),c2=Be(),Ig=U0(),Rg=G0(),p9r=qe(),Yi=yr(),Oa=Je(),W0=D0(),f2=we(),d9r=z0(),Aa=An(),Ee=G(),Y0=qr(),Ge=rt(),Lg=wa(),Yr=C(),X0=ni(),J0=si(),g9r=Ea(),m9r=Na(),y9r=Sa(),h9r=Ji(),Pg=Ng(),q9r=Og(),b9r=_g(),ke=Ge.BYTES_PER_ELEMENT*2,Fg=d9r();function _a(r){return r instanceof re||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function xg(r){return r===re||r.name==="Complex128Array"}function w9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===ke}function E9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===ke*2}function re(){var r,e,t,i;if(e=arguments.length,!(this instanceof re))return e===0?new re:e===1?new re(arguments[0]):e===2?new re(arguments[0],arguments[1]):new re(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ge(0);else if(e===1)if(_n(arguments[0]))t=new Ge(arguments[0]*2);else if(c2(arguments[0]))if(t=arguments[0],i=t.length,i&&p9r(t)&&Oa(t[0])){if(t=b9r(new Ge(i*2),t),t===null){if(!W0(i))throw new RangeError(Yr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ge(arguments[0])}}else{if(w9r(t))t=g9r(t,0);else if(E9r(t))t=m9r(t,0);else if(!W0(i))throw new RangeError(Yr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ge(t)}else if(Ig(arguments[0])){if(t=arguments[0],!f2(t.byteLength/ke))throw new RangeError(Yr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ke,t.byteLength));t=new Ge(t)}else if(Rg(arguments[0])){if(t=arguments[0],Fg===!1)throw new TypeError(Yr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Yi(t[Aa]))throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Aa](),!Yi(t.next))throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Pg(t),t instanceof Error)throw t;t=new Ge(t)}else throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Ig(t))throw new TypeError(Yr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!_n(r))throw new TypeError(Yr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!f2(r/ke))throw new RangeError(Yr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ke,r));if(e===2){if(i=t.byteLength-r,!f2(i/ke))throw new RangeError(Yr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ke,i));t=new Ge(t,r)}else{if(i=arguments[2],!_n(i))throw new TypeError(Yr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*ke>t.byteLength-r)throw new RangeError(Yr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*ke));t=new Ge(t,r,i*2)}}return Ee(this,"_buffer",t),Ee(this,"_length",t.length/2),this}Ee(re,"BYTES_PER_ELEMENT",ke);Ee(re,"name","Complex64Array");Ee(re,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!Yi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!Yi(a))throw new TypeError(Yr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(_a(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),Oa(l))u[m]=X0(l),u[m+1]=J0(l);else if(Tg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Yr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(c2(e)){if(a){for(f=e.length,e.get&&e.set?v=h9r("default"):v=y9r("default"),p=0;p<f;p++)if(!Oa(v(e,p))){c=!0;break}if(c){if(!W0(f))throw new RangeError(Yr("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),Oa(l))u[m]=X0(l),u[m+1]=J0(l);else if(Tg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Yr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Rg(e)&&Fg&&Yi(e[Aa])){if(u=e[Aa](),!Yi(u.next))throw new TypeError(Yr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=q9r(u,a,t):o=Pg(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Yr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Ee(re,"of",function(){var e,t;if(!Yi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Y0(re.prototype,"buffer",function(){return this._buffer.buffer});Y0(re.prototype,"byteLength",function(){return this._buffer.byteLength});Y0(re.prototype,"byteOffset",function(){return this._buffer.byteOffset});Ee(re.prototype,"BYTES_PER_ELEMENT",re.BYTES_PER_ELEMENT);Ee(re.prototype,"copyWithin",function(e,t){if(!_a(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Ee(re.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!_a(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Ee(i,"next",v),Ee(i,"return",f),Aa&&Ee(i,Aa,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new Lg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Ee(re.prototype,"get",function(e){var t;if(!_a(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!_n(e))throw new TypeError(Yr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Lg(t[e],t[e+1])});Y0(re.prototype,"length",function(){return this._length});Ee(re.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!_a(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!_n(i))throw new TypeError(Yr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Oa(e)){if(i>=this._length)throw new RangeError(Yr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=X0(e),a[i+1]=J0(e);return}if(_a(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*ke,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new Ge(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(c2(e)){for(o=e.length,f=0;f<o;f++)if(!Oa(e[f])){u=!0;break}if(u){if(!W0(o))throw new RangeError(Yr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*ke,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new Ge(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=X0(v),a[i+1]=J0(v),i+=2;return}throw new TypeError(Yr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});jg.exports=re});var Ta=s((xhe,Bg)=>{"use strict";var N9r=Mg();Bg.exports=N9r});var Cg=s((jhe,kg)=>{"use strict";function S9r(r){return r.re}kg.exports=S9r});var tt=s((Mhe,Vg)=>{"use strict";var O9r=Cg();Vg.exports=O9r});var Gg=s((Bhe,Ug)=>{"use strict";function A9r(r){return r.im}Ug.exports=A9r});var it=s((khe,Dg)=>{"use strict";var _9r=Gg();Dg.exports=_9r});var zg=s((Che,Hg)=>{"use strict";var T9r=zi(),I9r=Je(),R9r=C(),L9r=tt(),P9r=it();function F9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,T9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(I9r(i))e.push(L9r(i),P9r(i));else return new TypeError(R9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Hg.exports=F9r});var Xg=s((Vhe,Wg)=>{"use strict";var x9r=zi(),j9r=Je(),M9r=C(),B9r=tt(),k9r=it();function C9r(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),x9r(n)&&n.length>=2)i.push(n[0],n[1]);else if(j9r(n))i.push(B9r(n),k9r(n));else return new TypeError(M9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Wg.exports=C9r});var Yg=s((Uhe,Jg)=>{"use strict";var V9r=Je(),U9r=tt(),G9r=it();function D9r(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!V9r(i))return null;r[n]=U9r(i),r[n+1]=G9r(i),n+=2}return r}Jg.exports=D9r});var am=s((Ghe,im)=>{"use strict";var Tn=be().isPrimitive,Zg=zi(),p2=Be(),$g=U0(),Qg=G0(),H9r=qe(),Zi=yr(),Ia=Je(),Z0=D0(),l2=we(),z9r=z0(),Ra=An(),Ne=G(),K0=qr(),De=ge(),Kg=ba(),$0=tt(),Q0=it(),W9r=Ea(),X9r=Na(),J9r=Sa(),Y9r=Ji(),Zr=C(),rm=zg(),Z9r=Xg(),$9r=Yg(),Ce=De.BYTES_PER_ELEMENT*2,em=z9r();function La(r){return r instanceof ee||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function tm(r){return r===ee||r.name==="Complex64Array"}function Q9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ce/2}function K9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ce}function ee(){var r,e,t,i;if(e=arguments.length,!(this instanceof ee))return e===0?new ee:e===1?new ee(arguments[0]):e===2?new ee(arguments[0],arguments[1]):new ee(arguments[0],arguments[1],arguments[2]);if(e===0)t=new De(0);else if(e===1)if(Tn(arguments[0]))t=new De(arguments[0]*2);else if(p2(arguments[0]))if(t=arguments[0],i=t.length,i&&H9r(t)&&Ia(t[0])){if(t=$9r(new De(i*2),t),t===null){if(!Z0(i))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(arguments[0])}}else{if(Q9r(t))t=W9r(t,0);else if(K9r(t))t=X9r(t,0);else if(!Z0(i))throw new RangeError(Zr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(t)}else if($g(arguments[0])){if(t=arguments[0],!l2(t.byteLength/Ce))throw new RangeError(Zr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ce,t.byteLength));t=new De(t)}else if(Qg(arguments[0])){if(t=arguments[0],em===!1)throw new TypeError(Zr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Zi(t[Ra]))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ra](),!Zi(t.next))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=rm(t),t instanceof Error)throw t;t=new De(t)}else throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!$g(t))throw new TypeError(Zr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Tn(r))throw new TypeError(Zr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!l2(r/Ce))throw new RangeError(Zr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ce,r));if(e===2){if(i=t.byteLength-r,!l2(i/Ce))throw new RangeError(Zr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ce,i));t=new De(t,r)}else{if(i=arguments[2],!Tn(i))throw new TypeError(Zr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ce>t.byteLength-r)throw new RangeError(Zr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ce));t=new De(t,r,i*2)}}return Ne(this,"_buffer",t),Ne(this,"_length",t.length/2),this}Ne(ee,"BYTES_PER_ELEMENT",Ce);Ne(ee,"name","Complex128Array");Ne(ee,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!Zi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!Zi(a))throw new TypeError(Zr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(La(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),Ia(l))u[m]=$0(l),u[m+1]=Q0(l);else if(Zg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(p2(e)){if(a){for(f=e.length,e.get&&e.set?v=Y9r("default"):v=J9r("default"),p=0;p<f;p++)if(!Ia(v(e,p))){c=!0;break}if(c){if(!Z0(f))throw new RangeError(Zr("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),Ia(l))u[m]=$0(l),u[m+1]=Q0(l);else if(Zg(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Qg(e)&&em&&Zi(e[Ra])){if(u=e[Ra](),!Zi(u.next))throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=Z9r(u,a,t):o=rm(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Ne(ee,"of",function(){var e,t;if(!Zi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});K0(ee.prototype,"buffer",function(){return this._buffer.buffer});K0(ee.prototype,"byteLength",function(){return this._buffer.byteLength});K0(ee.prototype,"byteOffset",function(){return this._buffer.byteOffset});Ne(ee.prototype,"BYTES_PER_ELEMENT",ee.BYTES_PER_ELEMENT);Ne(ee.prototype,"copyWithin",function(e,t){if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Ne(ee.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Ne(i,"next",v),Ne(i,"return",f),Ra&&Ne(i,Ra,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new Kg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Ne(ee.prototype,"get",function(e){var t;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Tn(e))throw new TypeError(Zr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Kg(t[e],t[e+1])});K0(ee.prototype,"length",function(){return this._length});Ne(ee.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Tn(i))throw new TypeError(Zr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Ia(e)){if(i>=this._length)throw new RangeError(Zr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=$0(e),a[i+1]=Q0(e);return}if(La(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ce,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(p2(e)){for(o=e.length,f=0;f<o;f++)if(!Ia(e[f])){u=!0;break}if(u){if(!Z0(o))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ce,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=$0(v),a[i+1]=Q0(v),i+=2;return}throw new TypeError(Zr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});im.exports=ee});var Pa=s((Dhe,nm)=>{"use strict";var rdr=am();nm.exports=rdr});var um=s((Hhe,sm)=>{"use strict";var edr=ge(),tdr=rt(),idr=me(),adr=ai(),ndr=Hi(),sdr=ya(),udr=et(),odr=ha(),vdr=qa(),fdr=Ta(),cdr=Pa(),ldr=[edr,tdr,adr,idr,sdr,ndr,vdr,udr,odr,fdr,cdr];sm.exports=ldr});var vm=s((zhe,om)=>{"use strict";var pdr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];om.exports=pdr});var lm=s((Whe,cm)=>{"use strict";var ddr=Di(),gdr=qe(),mdr=mt(),ydr=P8(),hdr=um(),fm=vm(),qdr=fm.length;function bdr(r){var e;if(gdr(r))return"generic";if(ddr(r))return null;for(e=0;e<qdr;e++)if(r instanceof hdr[e])return fm[e];return ydr[mdr(r)]||null}cm.exports=bdr});var Fa=s((Xhe,pm)=>{"use strict";var wdr=lm();pm.exports=wdr});var mm=s((Jhe,gm)=>{"use strict";var dm=yr(),Edr=Be(),Ndr=h8(),Sdr=da(),Odr=B0(),Adr=k0(),_dr=Fa(),d2=C();function Tdr(){var r,e,t,i,a,n,u,o,v;if(r=arguments[0],arguments.length>1)if(Edr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!dm(t))throw new TypeError(d2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!dm(t))throw new TypeError(d2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!Ndr(r))throw new TypeError(d2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(a=i.length,u=_dr(i),Sdr(i)?n=Odr(u):n=Adr(u),t){for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,t.call(e,v.value,o));return i}for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,v.value);return i}gm.exports=Tdr});var hm=s((Yhe,ym)=>{"use strict";var Idr=mm();ym.exports=Idr});var bm=s((Zhe,qm)=>{"use strict";function Rdr(r){return r!==r}qm.exports=Rdr});var W=s(($he,wm)=>{"use strict";var Ldr=bm();wm.exports=Ldr});var Nm=s((Qhe,Em)=>{"use strict";var Pdr={Complex64:"complex64",Complex128:"complex128"};Em.exports=Pdr});var Om=s((Khe,Sm)=>{"use strict";var Fdr=wa(),xdr=ba(),jdr=[Fdr,xdr];Sm.exports=jdr});var _m=s((rqe,Am)=>{"use strict";var Mdr=["complex64","complex128"];Am.exports=Mdr});var Rm=s((eqe,Im)=>{"use strict";var Bdr=mt(),kdr=Nm(),Cdr=Om(),Tm=_m(),Vdr=Tm.length;function Udr(r){var e;for(e=0;e<Vdr;e++)if(r instanceof Cdr[e])return Tm[e];return kdr[Bdr(r)]||null}Im.exports=Udr});var g2=s((tqe,Lm)=>{"use strict";var Gdr=Rm();Lm.exports=Gdr});var Fm=s((iqe,Pm)=>{"use strict";var Ddr=ge(),Hdr=rt(),zdr=Pa(),Wdr=Ta(),Xdr={float64:Ddr,float32:Hdr,complex128:zdr,complex64:Wdr};Pm.exports=Xdr});var jm=s((aqe,xm)=>{"use strict";var Jdr=Fm();function Ydr(r){return Jdr[r]||null}xm.exports=Ydr});var Bm=s((nqe,Mm)=>{"use strict";var Zdr=jm();Mm.exports=Zdr});var Cm=s((sqe,km)=>{"use strict";function $dr(r,e,t,i){var a,n,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(a=[r],i?n=t-1:n=t,u=(e-r)/n,o=1;o<n;o++)a.push(r+u*o);return i&&a.push(e),a}km.exports=$dr});var zm=s((uqe,Hm)=>{"use strict";var Qdr=wa(),Kdr=ba(),Vm=tt(),Um=it(),Gm=ni(),Dm=si();function rgr(r,e,t,i,a,n){var u,o,v,f,c,l,p,m,y,g,d,h,q;if(a===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Gm(e),l=Dm(e)):(f=Vm(e),l=Um(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Gm(i),p=Dm(i)):(c=Vm(i),p=Um(i)),o===2?u=Qdr:u=Kdr,a===1)return n?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],n?h=a-1:h=a,g=(c-f)/h,d=(p-l)/h,q=1;q<h;q++)m=f+g*q,y=l+d*q,v.push(new u(m,y));return n&&v.push(new u(c,p)),v}Hm.exports=rgr});var m2=s((oqe,Wm)=>{"use strict";function egr(r,e,t,i,a){var n,u,o;if(i===0)return r;if(i===1)return a?r[0]=t:r[0]=e,r;for(r[0]=e,a?n=i-1:n=i,u=(t-e)/n,o=1;o<n;o++)r[o]=e+u*o;return a&&(r[n]=t),r}Wm.exports=egr});var y2=s((vqe,$m)=>{"use strict";var Xm=tt(),Jm=it(),Ym=ni(),Zm=si();function tgr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g;if(n===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=Ym(t),f=Zm(t)):(o=Xm(t),f=Jm(t)),i==="float64"?(v=a,c=0):i==="complex64"?(v=Ym(a),c=Zm(a)):(v=Xm(a),c=Jm(a)),n===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=n-1:m=n,l=(v-o)/m,p=(c-f)/m,g=2,y=1;y<m;y++)r[g]=o+l*y,r[g+1]=f+p*y,g+=2;return u&&(r[g]=v,r[g+1]=c),r}$m.exports=tgr});var Km=s((fqe,Qm)=>{"use strict";var igr=Object;Qm.exports=igr});var xa=s((cqe,ry)=>{"use strict";var agr=Km();ry.exports=agr});var ty=s((lqe,ey)=>{"use strict";var ngr=Object.getPrototypeOf;ey.exports=ngr});var ay=s((pqe,iy)=>{"use strict";function sgr(r){return r.__proto__}iy.exports=sgr});var sy=s((dqe,ny)=>{"use strict";var ugr=Kr(),ogr=ay();function vgr(r){var e=ogr(r);return e||e===null?e:ugr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}ny.exports=vgr});var oy=s((gqe,uy)=>{"use strict";var fgr=yr(),cgr=ty(),lgr=sy(),h2;fgr(Object.getPrototypeOf)?h2=cgr:h2=lgr;uy.exports=h2});var fy=s((mqe,vy)=>{"use strict";var pgr=xa(),dgr=oy();function ggr(r){return r==null?null:(r=pgr(r),dgr(r))}vy.exports=ggr});var $i=s((yqe,cy)=>{"use strict";var mgr=fy();cy.exports=mgr});var dy=s((hqe,py)=>{"use strict";var ygr=G0(),ly=yr(),hgr=$i(),rs=vr(),qgr=Kr(),bgr=Object.prototype;function wgr(r){var e;for(e in r)if(!rs(r,e))return!1;return!0}function Egr(r){var e;return ygr(r)?(e=hgr(r),e?!rs(r,"constructor")&&rs(e,"constructor")&&ly(e.constructor)&&qgr(e.constructor)==="[object Function]"&&rs(e,"isPrototypeOf")&&ly(e.isPrototypeOf)&&(e===bgr||wgr(r)):!0):!1}py.exports=Egr});var mr=s((qqe,gy)=>{"use strict";var Ngr=dy();gy.exports=Ngr});var q2=s((bqe,my)=>{"use strict";function Sgr(r){return typeof r=="string"}my.exports=Sgr});var hy=s((wqe,yy)=>{"use strict";var Ogr=String.prototype.valueOf;yy.exports=Ogr});var by=s((Eqe,qy)=>{"use strict";var Agr=hy();function _gr(r){try{return Agr.call(r),!0}catch{return!1}}qy.exports=_gr});var b2=s((Nqe,wy)=>{"use strict";var Tgr=pa(),Igr=Kr(),Rgr=by(),Lgr=Tgr();function Pgr(r){return typeof r=="object"?r instanceof String?!0:Lgr?Rgr(r):Igr(r)==="[object String]":!1}wy.exports=Pgr});var Ny=s((Sqe,Ey)=>{"use strict";var Fgr=q2(),xgr=b2();function jgr(r){return Fgr(r)||xgr(r)}Ey.exports=jgr});var Jr=s((Oqe,Oy)=>{"use strict";var Sy=G(),w2=Ny(),Mgr=q2(),Bgr=b2();Sy(w2,"isPrimitive",Mgr);Sy(w2,"isObject",Bgr);Oy.exports=w2});var N2=s((Aqe,_y)=>{"use strict";var kgr=mr(),Ay=vr(),Cgr=Jr().isPrimitive,Vgr=de().isPrimitive,E2=C();function Ugr(r,e){return kgr(e)?Ay(e,"dtype")&&(r.dtype=e.dtype,!Cgr(r.dtype))?new TypeError(E2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Ay(e,"endpoint")&&(r.endpoint=e.endpoint,!Vgr(r.endpoint))?new TypeError(E2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(E2("invalid argument. Options argument must be an object. Value: `%s`.",e))}_y.exports=Ugr});var S2=s((_qe,Ggr)=>{Ggr.exports={endpoint:!0}});var xy=s((Tqe,Fy)=>{"use strict";var Ty=Je(),Iy=Er().isPrimitive,Dgr=be().isPrimitive,Ry=W(),Ly=g2(),Hgr=Bm(),zgr=Ea(),Wgr=Na(),ja=C(),Xgr=Cm(),Jgr=zm(),Ygr=m2(),Py=y2(),Zgr=N2(),$gr=S2();function Qgr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(o=Ly(r),o===null){if(!Ty(r))throw new TypeError(ja("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!Iy(r)||Ry(r))throw new TypeError(ja("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=Ly(e),v===null){if(!Ty(e))throw new TypeError(ja("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!Iy(e)||Ry(e))throw new TypeError(ja("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!Dgr(t))throw new TypeError(ja("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:$gr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(n=Zgr(i,arguments[3]),n))throw n;if(i.dtype==="generic")return f?Jgr(o,r,v,e,t,i.endpoint):Xgr(r,e,t,i.endpoint);if(a=Hgr(i.dtype),a===null)throw new TypeError(ja('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new a(t),i.dtype==="complex64")return Py(zgr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Py(Wgr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Ygr(u,r,e,t,i.endpoint)}Fy.exports=Qgr});var My=s((Iqe,jy)=>{"use strict";var Kgr=da(),rmr=Sa(),emr=k0(),tmr=Ji(),imr=B0(),amr=Fa();function nmr(r){var e=amr(r);return Kgr(r)?{accessorProtocol:!0,accessors:[tmr(e),imr(e)]}:{accessorProtocol:!1,accessors:[rmr(e),emr(e)]}}jy.exports=nmr});var ky=s((Rqe,By)=>{"use strict";var smr=My();By.exports=smr});var Vy=s((Lqe,Cy)=>{"use strict";var umr=ky();function omr(r){var e=umr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Cy.exports=omr});var In=s((Pqe,Uy)=>{"use strict";var vmr=Vy();Uy.exports=vmr});var Xy=s((Fqe,Wy)=>{"use strict";var fmr=wa(),cmr=ba(),Gy=tt(),Dy=it(),Hy=ni(),zy=si();function lmr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g,d,h,q,w,A;if(n===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Hy(t),l=zy(t)):(f=Gy(t),l=Dy(t)),i==="float64"?(c=a,p=0):i==="complex64"?(v+=1,c=Hy(a),p=zy(a)):(c=Gy(a),p=Dy(a)),v===2?o=fmr:o=cmr,y=r.data,m=r.accessors[1],n===1)return u?m(y,0,new o(c,p)):m(y,0,new o(f,l)),r;for(m(y,0,new o(f,l)),u?w=n-1:w=n,h=(c-f)/w,q=(p-l)/w,A=1;A<w;A++)g=f+h*A,d=l+q*A,m(y,A,new o(g,d));return u&&m(y,w,new o(c,p)),r}Wy.exports=lmr});var Yy=s((xqe,Jy)=>{"use strict";function pmr(r,e,t,i,a){var n,u,o,v,f;if(i===0)return r;if(n=r.data,u=r.accessors[1],i===1)return a?u(n,0,t):u(n,0,e),r;for(u(n,0,e),a?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(n,f,e+v*f);return a&&u(n,o,t),r}Jy.exports=pmr});var ih=s((jqe,th)=>{"use strict";var Zy=Je(),$y=Er().isPrimitive,dmr=Be(),Rn=C(),Qy=W(),Ky=g2(),gmr=Fa(),mmr=Ea(),ymr=Na(),rh=In(),hmr=Xy(),qmr=Yy(),eh=y2(),bmr=m2(),wmr=N2(),Emr=S2();function Nmr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(n=Ky(r),n===null){if(!Zy(r))throw new TypeError(Rn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="complex128"}o=!0}else{if(!$y(r)||Qy(r))throw new TypeError(Rn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="float64"}if(typeof e=="object"){if(u=Ky(e),u===null){if(!Zy(e))throw new TypeError(Rn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!$y(e)||Qy(e))throw new TypeError(Rn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!dmr(t))throw new TypeError(Rn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Emr.endpoint},arguments.length>3&&(a=wmr(i,arguments[3]),a))throw a;if(v=gmr(t),v===null&&(v="generic"),v==="complex64")return eh(mmr(t,0),n,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return eh(ymr(t,0),n,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=rh(t),hmr(f,n,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=rh(t),f.accessorProtocol?(qmr(f,r,e,t.length,i.endpoint),t):(bmr(t,r,e,t.length,i.endpoint),t)}th.exports=Nmr});var sh=s((Mqe,nh)=>{"use strict";var Smr=G(),ah=xy(),Omr=ih();Smr(ah,"assign",Omr);nh.exports=ah});var oh=s((Bqe,uh)=>{"use strict";var Amr=Er().isPrimitive,_mr=Jr().isPrimitive,Tmr=de().isPrimitive,Imr=qe(),Rmr=C(),Lmr={number:Amr,string:_mr,boolean:Tmr};function Pmr(r,e,t){var i,a,n,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],i=[],v=0;v<r.length;v++)if(o=r[v],n=e[v],u=Lmr[n],u(o))i.push([[o]]),a.push([1,1]);else if(Imr(o))i.push(o),a.push([o.length,o[0].length]);else throw new TypeError(Rmr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],n,n,String(o)));return[i,a]}uh.exports=Pmr});var es=s((kqe,vh)=>{"use strict";var Fmr=oh();vh.exports=Fmr});var ch=s((Cqe,fh)=>{"use strict";var xmr=x0();function jmr(r){return xmr(1,r)}fh.exports=jmr});var ph=s((Vqe,lh)=>{"use strict";var Mmr=ch();lh.exports=Mmr});var gh=s((Uqe,dh)=>{"use strict";function Bmr(r,e,t){var i,a,n,u,o,v,f,c;if(i=e[1],a=e[0],!(i<=0||a<=0))for(f=r[0],c=r[1],u=0;u<a;u++)for(o=f[u],v=c[u],n=0;n<i;n++)v[n]=t(o[n])}dh.exports=Bmr});var O2=s((Gqe,mh)=>{"use strict";var kmr=gh();mh.exports=kmr});var hh=s((Dqe,yh)=>{"use strict";var Cmr=x0();function Vmr(r){return Cmr(0,r)}yh.exports=Vmr});var ts=s((Hqe,qh)=>{"use strict";var Umr=hh();qh.exports=Umr});var wh=s((zqe,bh)=>{"use strict";var Se=$r(),Gmr=E1(),Dmr=S1(),Hmr=F0(),zmr=P0(),Wmr=x0(),Xmr=b4(),Jmr=j0(),Ymr=hm(),Zmr=sh(),$mr=es(),Qmr=ph(),Kmr=O2(),ryr=ii(),eyr=ts();function tyr(r){return Se(r,"bbinary2d",Gmr),Se(r,"bternary2d",Dmr),Se(r,"broadcastShapes",Hmr),Se(r,"filled",zmr),Se(r,"filled2d",Wmr),Se(r,"filled2dBy",Xmr),Se(r,"flatten2d",Jmr),Se(r,"iterator2array",Ymr),Se(r,"linspace",Zmr),Se(r,"normalizeBroadcastArgs",$mr),Se(r,"ones2d",Qmr),Se(r,"unary2d",Kmr),Se(r,"zeros",ryr),Se(r,"zeros2d",eyr),r}bh.exports=tyr});var Sh=s((Wqe,Nh)=>{"use strict";var Eh=C();function iyr(r,e,t,i,a){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Eh('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(a!=="closed"&&a!=="open")throw new TypeError(Eh('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),a))}return i==="closed"||i===void 0?a==="closed"||a===void 0?r>=e&&r<=t:r>=e&&r<t:a==="closed"||a===void 0?r>e&&r<=t:r>e&&r<t}Nh.exports=iyr});var Ah=s((Xqe,Oh)=>{"use strict";var ayr=Sh();Oh.exports=ayr});var Th=s((Jqe,_h)=>{"use strict";var nyr=Er().isPrimitive,syr=Ah(),uyr=C();function oyr(r,e,t,i,a,n){var u,o;if(!(nyr(r)&&syr(r,e,t,i,a)))throw i==="closed"?u="[":u="(",a==="closed"?o="]":o=")",new TypeError(uyr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",n,u,e,t,o,String(r)))}_h.exports=oyr});var Rh=s((Yqe,Ih)=>{"use strict";var vyr=Th();Ih.exports=vyr});var Ph=s((Zqe,Lh)=>{"use strict";var fyr=de().isPrimitive,cyr=C();function lyr(r,e){if(!fyr(r))throw new TypeError(cyr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Lh.exports=lyr});var xh=s(($qe,Fh)=>{"use strict";var pyr=Ph();Fh.exports=pyr});var Mh=s((Qqe,jh)=>{"use strict";function dyr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,e!==1&&i!==1&&i!==e||t!==1&&a!==1&&a!==t)return!1;return!0}jh.exports=dyr});var kh=s((Kqe,Bh)=>{"use strict";var gyr=Mh();Bh.exports=gyr});var Vh=s((rbe,Ch)=>{"use strict";var myr=C(),yyr=kh();function hyr(r,e,t){if(!yyr(r,e))throw new TypeError(myr("invalid argument. %s must be broadcast compatible.",t))}Ch.exports=hyr});var Gh=s((ebe,Uh)=>{"use strict";var qyr=Vh();Uh.exports=qyr});var Hh=s((tbe,Dh)=>{"use strict";function byr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,i!==1&&i!==e||a!==1&&a!==t)return!1;return!0}Dh.exports=byr});var Wh=s((ibe,zh)=>{"use strict";var wyr=Hh();zh.exports=wyr});var Jh=s((abe,Xh)=>{"use strict";var Eyr=C(),Nyr=Wh();function Syr(r,e,t,i){if(!Nyr(r,e))throw new TypeError(Eyr("invalid argument. %s must be broadcast compatible with %s.",t,i))}Xh.exports=Syr});var Zh=s((nbe,Yh)=>{"use strict";var Oyr=Jh();Yh.exports=Oyr});var Qh=s((sbe,$h)=>{"use strict";function Ayr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}$h.exports=Ayr});var rq=s((ube,Kh)=>{"use strict";function _yr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}Kh.exports=_yr});var is=s((obe,tq)=>{"use strict";var Tyr=G(),eq=Qh(),Iyr=rq();Tyr(eq,"assign",Iyr);tq.exports=eq});var aq=s((vbe,iq)=>{"use strict";var Ryr=is();function Lyr(r,e,t,i){var a=Ryr(e,t,i);return a[0]>=0&&a[1]<r}iq.exports=Lyr});var A2=s((fbe,nq)=>{"use strict";var Pyr=aq();nq.exports=Pyr});var uq=s((cbe,sq)=>{"use strict";var Fyr=A2();function xyr(r,e,t,i){if(e.length&&!Fyr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}sq.exports=xyr});var vq=s((lbe,oq)=>{"use strict";var jyr=uq();oq.exports=jyr});var cq=s((pbe,fq)=>{"use strict";var Myr=C();function Byr(r,e){if(r===void 0)throw new Error(Myr("invalid invocation. Must provide %s.",e))}fq.exports=Byr});var _2=s((dbe,lq)=>{"use strict";var kyr=cq();lq.exports=kyr});var dq=s((gbe,pq)=>{"use strict";var Cyr=C();function Vyr(r,e,t,i){if(!(r>e))throw new TypeError(Cyr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}pq.exports=Vyr});var mq=s((mbe,gq)=>{"use strict";var Uyr=dq();gq.exports=Uyr});var hq=s((ybe,yq)=>{"use strict";var Gyr=C();function Dyr(r,e,t,i){if(!(r>=e))throw new TypeError(Gyr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}yq.exports=Dyr});var bq=s((hbe,qq)=>{"use strict";var Hyr=hq();qq.exports=Hyr});var Eq=s((qbe,wq)=>{"use strict";var zyr=ye().isPrimitive,Wyr=C();function Xyr(r,e){if(!zyr(r))throw new TypeError(Wyr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}wq.exports=Xyr});var Sq=s((bbe,Nq)=>{"use strict";var Jyr=Eq();Nq.exports=Jyr});var Aq=s((wbe,Oq)=>{"use strict";var Yyr=C();function Zyr(r,e,t,i){if(!(r<e))throw new TypeError(Yyr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Oq.exports=Zyr});var Tq=s((Ebe,_q)=>{"use strict";var $yr=Aq();_q.exports=$yr});var Rq=s((Nbe,Iq)=>{"use strict";var Qyr=C();function Kyr(r,e,t,i){if(!(r<=e))throw new TypeError(Qyr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Iq.exports=Kyr});var Pq=s((Sbe,Lq)=>{"use strict";var rhr=Rq();Lq.exports=rhr});var xq=s((Obe,Fq)=>{"use strict";var ehr=be().isPrimitive,thr=C();function ihr(r,e){if(!ehr(r))throw new TypeError(thr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Fq.exports=ihr});var Mq=s((Abe,jq)=>{"use strict";var ahr=xq();jq.exports=ahr});var T2=s((_be,Bq)=>{"use strict";var nhr=Er().isPrimitive;function shr(r){return nhr(r)&&r>=0}Bq.exports=shr});var I2=s((Tbe,kq)=>{"use strict";var uhr=Er().isObject;function ohr(r){return uhr(r)&&r.valueOf()>=0}kq.exports=ohr});var Vq=s((Ibe,Cq)=>{"use strict";var vhr=T2(),fhr=I2();function chr(r){return vhr(r)||fhr(r)}Cq.exports=chr});var as=s((Rbe,Gq)=>{"use strict";var Uq=G(),R2=Vq(),lhr=T2(),phr=I2();Uq(R2,"isPrimitive",lhr);Uq(R2,"isObject",phr);Gq.exports=R2});var Hq=s((Lbe,Dq)=>{"use strict";var dhr=as().isPrimitive,ghr=C();function mhr(r,e){if(!dhr(r))throw new TypeError(ghr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Dq.exports=mhr});var Wq=s((Pbe,zq)=>{"use strict";var yhr=Hq();zq.exports=yhr});var Jq=s((Fbe,Xq)=>{"use strict";var hhr=Er().isPrimitive,qhr=C();function bhr(r,e){if(!hhr(r))throw new TypeError(qhr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Xq.exports=bhr});var Zq=s((xbe,Yq)=>{"use strict";var whr=Jq();Yq.exports=whr});var Qq=s((jbe,$q)=>{"use strict";var Ehr=C();function Nhr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Ehr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}$q.exports=Nhr});var rb=s((Mbe,Kq)=>{"use strict";var Shr=Qq();Kq.exports=Shr});var L2=s((Bbe,eb)=>{"use strict";var Ohr=ye().isPrimitive;function Ahr(r){return Ohr(r)&&r>0}eb.exports=Ahr});var P2=s((kbe,tb)=>{"use strict";var _hr=ye().isObject;function Thr(r){return _hr(r)&&r.valueOf()>0}tb.exports=Thr});var ab=s((Cbe,ib)=>{"use strict";var Ihr=L2(),Rhr=P2();function Lhr(r){return Ihr(r)||Rhr(r)}ib.exports=Lhr});var at=s((Vbe,sb)=>{"use strict";var nb=G(),F2=ab(),Phr=L2(),Fhr=P2();nb(F2,"isPrimitive",Phr);nb(F2,"isObject",Fhr);sb.exports=F2});var ob=s((Ube,ub)=>{"use strict";var xhr=at().isPrimitive,jhr=C();function Mhr(r,e){if(!xhr(r))throw new TypeError(jhr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}ub.exports=Mhr});var x2=s((Gbe,vb)=>{"use strict";var Bhr=ob();vb.exports=Bhr});var j2=s((Dbe,fb)=>{"use strict";var khr=Er().isPrimitive;function Chr(r){return khr(r)&&r>0}fb.exports=Chr});var M2=s((Hbe,cb)=>{"use strict";var Vhr=Er().isObject;function Uhr(r){return Vhr(r)&&r.valueOf()>0}cb.exports=Uhr});var pb=s((zbe,lb)=>{"use strict";var Ghr=j2(),Dhr=M2();function Hhr(r){return Ghr(r)||Dhr(r)}lb.exports=Hhr});var Ur=s((Wbe,gb)=>{"use strict";var db=G(),B2=pb(),zhr=j2(),Whr=M2();db(B2,"isPrimitive",zhr);db(B2,"isObject",Whr);gb.exports=B2});var yb=s((Xbe,mb)=>{"use strict";var Xhr=Ur().isPrimitive,Jhr=C();function Yhr(r,e){if(!Xhr(r))throw new TypeError(Jhr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}mb.exports=Yhr});var qb=s((Jbe,hb)=>{"use strict";var Zhr=yb();hb.exports=Zhr});var k2=s((Ybe,bb)=>{"use strict";var $hr=Er().isPrimitive;function Qhr(r){return $hr(r)&&r>=0&&r<=1}bb.exports=Qhr});var C2=s((Zbe,wb)=>{"use strict";var Khr=Er().isObject;function rqr(r){return Khr(r)&&r.valueOf()>=0&&r.valueOf()<=1}wb.exports=rqr});var Nb=s(($be,Eb)=>{"use strict";var eqr=k2(),tqr=C2();function iqr(r){return eqr(r)||tqr(r)}Eb.exports=iqr});var Ln=s((Qbe,Ob)=>{"use strict";var Sb=G(),V2=Nb(),aqr=k2(),nqr=C2();Sb(V2,"isPrimitive",aqr);Sb(V2,"isObject",nqr);Ob.exports=V2});var _b=s((Kbe,Ab)=>{"use strict";var sqr=Ln().isPrimitive,uqr=C();function oqr(r,e){if(!sqr(r))throw new TypeError(uqr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}Ab.exports=oqr});var Ib=s((rwe,Tb)=>{"use strict";var vqr=_b();Tb.exports=vqr});var Lb=s((ewe,Rb)=>{"use strict";var fqr=qe(),cqr=C();function lqr(r,e){if(!fqr(r))throw new TypeError(cqr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Rb.exports=lqr});var Fb=s((twe,Pb)=>{"use strict";var pqr=Lb();Pb.exports=pqr});var jb=s((iwe,xb)=>{"use strict";function dqr(r){return r.length===1||r[0].length===1}xb.exports=dqr});var Bb=s((awe,Mb)=>{"use strict";var gqr=jb();Mb.exports=gqr});var Cb=s((nwe,kb)=>{"use strict";var mqr=qe(),yqr=Bb();function hqr(r){return mqr(r)&&yqr(r)}kb.exports=hqr});var U2=s((swe,Vb)=>{"use strict";var qqr=Cb();Vb.exports=qqr});var Gb=s((uwe,Ub)=>{"use strict";var bqr=C(),wqr=U2();function Eqr(r,e){if(!wqr(r))throw new TypeError(bqr("invalid argument. %s must consist of only a single row or a single column.",e))}Ub.exports=Eqr});var Hb=s((owe,Db)=>{"use strict";var Nqr=Gb();Db.exports=Nqr});var Wb=s((vwe,zb)=>{"use strict";function Sqr(r){var e,t,i,a;for(e=r.length,t=r[0].length,a=1;a<arguments.length;a++)if(i=arguments[a],i.length!==e||i[0].length!==t)return!1;return!0}zb.exports=Sqr});var Jb=s((fwe,Xb)=>{"use strict";var Oqr=Wb();Xb.exports=Oqr});var Zb=s((cwe,Yb)=>{"use strict";var Aqr=C(),_qr=Jb();function Tqr(r,e,t){if(!_qr(r,e))throw new TypeError(Aqr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Yb.exports=Tqr});var Qb=s((lwe,$b)=>{"use strict";var Iqr=Zb();$b.exports=Iqr});var rw=s((pwe,Kb)=>{"use strict";var Rqr=Jr().isPrimitive,Lqr=C();function Pqr(r,e){if(!Rqr(r))throw new TypeError(Lqr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}Kb.exports=Pqr});var tw=s((dwe,ew)=>{"use strict";var Fqr=rw();ew.exports=Fqr});var aw=s((gwe,iw)=>{"use strict";var xqr=C(),jqr=be().isPrimitive;function Mqr(r,e){var t;for(t=0;t<r.length;t++)if(!jqr(r[t]))throw new TypeError(xqr("invalid argument. %s must contain only nonnegative integers.",e))}iw.exports=Mqr});var sw=s((mwe,nw)=>{"use strict";var Bqr=aw();nw.exports=Bqr});var ow=s((ywe,uw)=>{"use strict";var kqr=C(),Cqr=ye().isPrimitive;function Vqr(r,e){var t;for(t=0;t<r.length;t++)if(!Cqr(r[t]))throw new TypeError(kqr("invalid argument. %s must contain only integers.",e))}uw.exports=Vqr});var fw=s((hwe,vw)=>{"use strict";var Uqr=ow();vw.exports=Uqr});var lw=s((qwe,cw)=>{"use strict";var Gqr=C();function Dqr(r){throw new Error(Gqr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}cw.exports=Dqr});var dw=s((bwe,pw)=>{"use strict";var Hqr=lw();pw.exports=Hqr});var yw=s((wwe,mw)=>{"use strict";var gw=x2(),zqr=_2();function Wqr(r,e,t){gw(r,"Number of rows"),gw(e,"Number of columns"),zqr(t,"a pseudorandom number generator seed")}mw.exports=Wqr});var qw=s((Ewe,hw)=>{"use strict";var Xqr=yw();hw.exports=Xqr});var ww=s((Nwe,bw)=>{"use strict";var Jqr=we(),Yqr=o2();function Zqr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&Jqr(r.length)&&r.length>=0&&r.length<=Yqr}bw.exports=Zqr});var Nw=s((Swe,Ew)=>{"use strict";var $qr=ww();Ew.exports=$qr});var Ow=s((Owe,Sw)=>{"use strict";var Qqr=Nw(),Kqr=C();function rbr(r){if(typeof r!="function")throw new TypeError(Kqr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!Qqr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}Sw.exports=rbr});var G2=s((Awe,Aw)=>{"use strict";var ebr=Ow();Aw.exports=ebr});var Iw=s((_we,Tw)=>{"use strict";var D2=ye(),_w=G(),H2=G2(),tbr=H2(D2.isPrimitive),ibr=H2(D2.isObject),z2=H2(D2);_w(z2,"primitives",tbr);_w(z2,"objects",ibr);Tw.exports=z2});var Pw=s((Twe,Lw)=>{"use strict";var W2=be(),Rw=G(),X2=G2(),abr=X2(W2.isPrimitive),nbr=X2(W2.isObject),J2=X2(W2);Rw(J2,"primitives",abr);Rw(J2,"objects",nbr);Lw.exports=J2});var xw=s((Iwe,Fw)=>{"use strict";var nt=$r(),sbr=qe(),ubr=ye().isPrimitive,obr=Iw().primitives,vbr=be().isPrimitive,fbr=Pw().primitives,cbr=as().isPrimitive,lbr=Er().isPrimitive,pbr=at().isPrimitive,dbr=Ur().isPrimitive,gbr=Jr().isPrimitive;function mbr(r){return nt(r,"isArray",sbr),nt(r,"isInteger",ubr),nt(r,"isIntegerArray",obr),nt(r,"isNonNegativeInteger",vbr),nt(r,"isNonNegativeIntegerArray",fbr),nt(r,"isNonNegativeNumber",cbr),nt(r,"isNumber",lbr),nt(r,"isPositiveInteger",pbr),nt(r,"isPositiveNumber",dbr),nt(r,"isString",gbr),r}Fw.exports=mbr});var Mw=s((Rwe,jw)=>{"use strict";var Dr=$r(),ybr=Rh(),hbr=xh(),qbr=Gh(),bbr=Zh(),wbr=vq(),Ebr=_2(),Nbr=mq(),Sbr=bq(),Obr=Sq(),Abr=Tq(),_br=Pq(),Tbr=Mq(),Ibr=Wq(),Rbr=Zq(),Lbr=rb(),Pbr=x2(),Fbr=qb(),xbr=Ib(),jbr=Fb(),Mbr=Hb(),Bbr=Qb(),kbr=tw(),Cbr=sw(),Vbr=fw(),Ubr=dw(),Gbr=qw(),Dbr=xw();function Hbr(r){return Dr(r,"isBetween",ybr),Dr(r,"isBoolean",hbr),Dr(r,"isBroadcastCompatible",qbr),Dr(r,"isBroadcastCompatibleWith",bbr),Dr(r,"isBufferLengthCompatible",wbr),Dr(r,"isDefined",Ebr),Dr(r,"isGreaterThan",Nbr),Dr(r,"isGreaterThanEqual",Sbr),Dr(r,"isInteger",Obr),Dr(r,"isLessThan",Abr),Dr(r,"isLessThanEqual",_br),Dr(r,"isNonNegativeInteger",Tbr),Dr(r,"isNonNegativeNumber",Ibr),Dr(r,"isNumber",Rbr),Dr(r,"isOneOf",Lbr),Dr(r,"isPositiveInteger",Pbr),Dr(r,"isPositiveNumber",Fbr),Dr(r,"isProbability",xbr),Dr(r,"isRange",jbr),Dr(r,"isRange1d",Mbr),Dr(r,"isSameShape",Bbr),Dr(r,"isString",kbr),Dr(r,"isValidShape",Cbr),Dr(r,"isValidStrides",Vbr),Dr(r,"unrecognizedOptionName",Ubr),Dr(r,"verifyCommonPRNGArgs",Gbr),Dr(r,"base",Dbr({})),r}jw.exports=Hbr});var kw=s((Lwe,Bw)=>{"use strict";var Y2=4;function zbr(r,e,t,i,a,n){var u,o,v,f;if(r<=0||e===0)return a;if(i===1&&n===1){if(v=r%Y2,v>0)for(f=0;f<v;f++)a[f]+=e*t[f];if(r<Y2)return a;for(f=v;f<r;f+=Y2)a[f]+=e*t[f],a[f+1]+=e*t[f+1],a[f+2]+=e*t[f+2],a[f+3]+=e*t[f+3];return a}for(i<0?u=(1-r)*i:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r;f++)a[o]+=e*t[u],u+=i,o+=n;return a}Bw.exports=zbr});var Vw=s((Pwe,Cw)=>{"use strict";var Pn=4;function Wbr(r,e,t,i,a,n,u,o){var v,f,c,l;if(r<=0||e===0)return n;if(v=a,f=o,i===1&&u===1){if(c=r%Pn,c>0)for(l=0;l<c;l++)n[f]+=e*t[v],v+=i,f+=u;if(r<Pn)return n;for(l=c;l<r;l+=Pn)n[f]+=e*t[v],n[f+1]+=e*t[v+1],n[f+2]+=e*t[v+2],n[f+3]+=e*t[v+3],v+=Pn,f+=Pn;return n}for(l=0;l<r;l++)n[f]+=e*t[v],v+=i,f+=u;return n}Cw.exports=Wbr});var Z2=s((Fwe,Gw)=>{"use strict";var Xbr=G(),Uw=kw(),Jbr=Vw();Xbr(Uw,"ndarray",Jbr);Gw.exports=Uw});var zw=s((xwe,Hw)=>{"use strict";var Dw=$r(),Ybr=Z2().ndarray,Zbr=Z2().ndarray;function $br(r){return Dw(r,"daxpy",Ybr),Dw(r,"saxpy",Zbr),r}Hw.exports=$br});var Xw=s((jwe,Ww)=>{"use strict";var Qbr=$i(),Kbr=Kr();function rwr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Kbr(r)==="[object Error]")return!0;r=Qbr(r)}return!1}Ww.exports=rwr});var Yw=s((Mwe,Jw)=>{"use strict";var ewr=Xw();Jw.exports=ewr});var $2=s((Bwe,Zw)=>{"use strict";function twr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Zw.exports=twr});var Qw=s((kwe,$w)=>{"use strict";var iwr=$2(),awr=iwr();$w.exports=awr});var eE=s((Cwe,rE)=>{"use strict";var nwr=G(),Kw=$2(),swr=Qw();nwr(Kw,"REGEXP",swr);rE.exports=Kw});var iE=s((Vwe,tE)=>{"use strict";var uwr=Jr().isPrimitive,owr=eE(),vwr=C();function fwr(r){if(!uwr(r))throw new TypeError(vwr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=owr().exec(r),r?new RegExp(r[1],r[2]):null}tE.exports=fwr});var nE=s((Uwe,aE)=>{"use strict";var cwr=iE();aE.exports=cwr});var Q2=s((Gwe,sE)=>{"use strict";var lwr=Er().isPrimitive,pwr=W();function dwr(r){return lwr(r)&&pwr(r)}sE.exports=dwr});var K2=s((Dwe,uE)=>{"use strict";var gwr=Er().isObject,mwr=W();function ywr(r){return gwr(r)&&mwr(r.valueOf())}uE.exports=ywr});var vE=s((Hwe,oE)=>{"use strict";var hwr=Q2(),qwr=K2();function bwr(r){return hwr(r)||qwr(r)}oE.exports=bwr});var oe=s((zwe,cE)=>{"use strict";var fE=G(),rv=vE(),wwr=Q2(),Ewr=K2();fE(rv,"isPrimitive",wwr);fE(rv,"isObject",Ewr);cE.exports=rv});var gE=s((Wwe,dE)=>{"use strict";var lE=oe(),Nwr=Be(),Swr=Jr().isPrimitive,Owr=ye().isPrimitive,pE=C();function Awr(r,e,t){var i,a;if(!Nwr(r)&&!Swr(r))throw new TypeError(pE("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Owr(t))throw new TypeError(pE("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(lE(e)){for(;a<i;a++)if(lE(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}dE.exports=Awr});var ns=s((Xwe,mE)=>{"use strict";var _wr=gE();mE.exports=_wr});var ss=s((Jwe,yE)=>{"use strict";function Twr(r){return Object.keys(Object(r))}yE.exports=Twr});var qE=s((Ywe,hE)=>{"use strict";var Iwr=ss();function Rwr(){return(Iwr(arguments)||"").length!==2}function Lwr(){return Rwr(1,2)}hE.exports=Lwr});var wE=s((Zwe,bE)=>{"use strict";var Pwr=typeof Object.keys<"u";bE.exports=Pwr});var ev=s(($we,EE)=>{"use strict";var Fwr=Kr();function xwr(r){return Fwr(r)==="[object Arguments]"}EE.exports=xwr});var OE=s((Qwe,SE)=>{"use strict";var jwr=ev(),NE;function Mwr(){return jwr(arguments)}NE=Mwr();SE.exports=NE});var tv=s((Kwe,AE)=>{"use strict";var Bwr=Object.prototype.propertyIsEnumerable;AE.exports=Bwr});var IE=s((rEe,TE)=>{"use strict";var kwr=tv(),_E;function Cwr(){return!kwr.call("beep","0")}_E=Cwr();TE.exports=_E});var LE=s((eEe,RE)=>{"use strict";var Vwr=Jr(),Uwr=oe().isPrimitive,Gwr=ye().isPrimitive,Dwr=tv(),Hwr=IE();function zwr(r,e){var t;return r==null?!1:(t=Dwr.call(r,e),!t&&Hwr&&Vwr(r)?(e=+e,!Uwr(e)&&Gwr(e)&&e>=0&&e<r.length):t)}RE.exports=zwr});var Fn=s((tEe,PE)=>{"use strict";var Wwr=LE();PE.exports=Wwr});var xE=s((iEe,FE)=>{"use strict";var Xwr=vr(),Jwr=Fn(),Ywr=qe(),Zwr=we(),$wr=ga();function Qwr(r){return r!==null&&typeof r=="object"&&!Ywr(r)&&typeof r.length=="number"&&Zwr(r.length)&&r.length>=0&&r.length<=$wr&&Xwr(r,"callee")&&!Jwr(r,"callee")}FE.exports=Qwr});var av=s((aEe,jE)=>{"use strict";var Kwr=OE(),rEr=ev(),eEr=xE(),iv;Kwr?iv=rEr:iv=eEr;jE.exports=iv});var kE=s((nEe,BE)=>{"use strict";var tEr=av(),ME=ss(),iEr=Array.prototype.slice;function aEr(r){return tEr(r)?ME(iEr.call(r)):ME(r)}BE.exports=aEr});var VE=s((sEe,CE)=>{"use strict";function nEr(){}CE.exports=nEr});var Tr=s((uEe,UE)=>{"use strict";var sEr=VE();UE.exports=sEr});var DE=s((oEe,GE)=>{"use strict";var uEr=Fn(),oEr=Tr(),vEr=uEr(oEr,"prototype");GE.exports=vEr});var zE=s((vEe,HE)=>{"use strict";var fEr=Fn(),cEr={toString:null},lEr=!fEr(cEr,"toString");HE.exports=lEr});var nv=s((fEe,WE)=>{"use strict";function pEr(r){return r.constructor&&r.constructor.prototype===r}WE.exports=pEr});var XE=s((cEe,dEr)=>{dEr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var YE=s((lEe,JE)=>{"use strict";var gEr=typeof window>"u"?void 0:window;JE.exports=gEr});var KE=s((pEe,QE)=>{"use strict";var mEr=vr(),yEr=ns(),ZE=M0(),hEr=nv(),qEr=XE(),Ma=YE(),$E;function bEr(){var r;if(ZE(Ma)==="undefined")return!1;for(r in Ma)try{yEr(qEr,r)===-1&&mEr(Ma,r)&&Ma[r]!==null&&ZE(Ma[r])==="object"&&hEr(Ma[r])}catch{return!0}return!1}$E=bEr();QE.exports=$E});var eN=s((dEe,rN)=>{"use strict";var wEr=typeof window<"u";rN.exports=wEr});var aN=s((gEe,iN)=>{"use strict";var EEr=KE(),tN=nv(),NEr=eN();function SEr(r){if(NEr===!1&&!EEr)return tN(r);try{return tN(r)}catch{return!1}}iN.exports=SEr});var nN=s((mEe,OEr)=>{OEr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var oN=s((yEe,uN)=>{"use strict";var AEr=k1(),sv=vr(),_Er=av(),TEr=DE(),IEr=zE(),REr=aN(),sN=nN();function LEr(r){var e,t,i,a,n,u,o;if(a=[],_Er(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!sv(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!AEr(r))return a;t=TEr&&i}for(n in r)!(t&&n==="prototype")&&sv(r,n)&&a.push(String(n));if(IEr)for(e=REr(r),o=0;o<sN.length;o++)u=sN[o],!(e&&u==="constructor")&&sv(r,u)&&a.push(String(u));return a}uN.exports=LEr});var fN=s((hEe,vN)=>{"use strict";var PEr=qE(),FEr=wE(),xEr=ss(),jEr=kE(),MEr=oN(),us;FEr?PEr()?us=jEr:us=xEr:us=MEr;vN.exports=us});var Ba=s((qEe,cN)=>{"use strict";var BEr=fN();cN.exports=BEr});var pN=s((bEe,lN)=>{"use strict";var kEr=typeof Object.getOwnPropertyNames<"u";lN.exports=kEr});var mN=s((wEe,gN)=>{"use strict";var dN=xa(),CEr=dN.getOwnPropertyNames;function VEr(r){return CEr(dN(r))}gN.exports=VEr});var hN=s((EEe,yN)=>{"use strict";var UEr=xa(),GEr=Ba();function DEr(r){return GEr(UEr(r))}yN.exports=DEr});var bN=s((NEe,qN)=>{"use strict";var HEr=pN(),zEr=mN(),WEr=hN(),uv;HEr?uv=zEr:uv=WEr;qN.exports=uv});var EN=s((SEe,wN)=>{"use strict";var XEr=typeof Object.getOwnPropertyDescriptor<"u";wN.exports=XEr});var SN=s((OEe,NN)=>{"use strict";var JEr=Object.getOwnPropertyDescriptor;function YEr(r,e){var t;return r==null?null:(t=JEr(r,e),t===void 0?null:t)}NN.exports=YEr});var AN=s((AEe,ON)=>{"use strict";var ZEr=vr();function $Er(r,e){return ZEr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}ON.exports=$Er});var TN=s((_Ee,_N)=>{"use strict";var QEr=EN(),KEr=SN(),rNr=AN(),ov;QEr?ov=KEr:ov=rNr;_N.exports=ov});var RN=s((TEe,IN)=>{"use strict";var eNr=typeof Buffer=="function"?Buffer:null;IN.exports=eNr});var PN=s((IEe,LN)=>{"use strict";var tNr=Di(),os=RN();function iNr(){var r,e;if(typeof os!="function")return!1;try{typeof os.from=="function"?e=os.from([1,2,3,4]):e=new os([1,2,3,4]),r=tNr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}LN.exports=iNr});var xN=s((REe,FN)=>{"use strict";var aNr=PN();FN.exports=aNr});var BN=s(vs=>{"use strict";vs.byteLength=sNr;vs.toByteArray=oNr;vs.fromByteArray=cNr;var st=[],He=[],nNr=typeof Uint8Array<"u"?Uint8Array:Array,vv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Qi=0,jN=vv.length;Qi<jN;++Qi)st[Qi]=vv[Qi],He[vv.charCodeAt(Qi)]=Qi;var Qi,jN;He["-".charCodeAt(0)]=62;He["_".charCodeAt(0)]=63;function MN(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function sNr(r){var e=MN(r),t=e[0],i=e[1];return(t+i)*3/4-i}function uNr(r,e,t){return(e+t)*3/4-t}function oNr(r){var e,t=MN(r),i=t[0],a=t[1],n=new nNr(uNr(r,i,a)),u=0,o=a>0?i-4:i,v;for(v=0;v<o;v+=4)e=He[r.charCodeAt(v)]<<18|He[r.charCodeAt(v+1)]<<12|He[r.charCodeAt(v+2)]<<6|He[r.charCodeAt(v+3)],n[u++]=e>>16&255,n[u++]=e>>8&255,n[u++]=e&255;return a===2&&(e=He[r.charCodeAt(v)]<<2|He[r.charCodeAt(v+1)]>>4,n[u++]=e&255),a===1&&(e=He[r.charCodeAt(v)]<<10|He[r.charCodeAt(v+1)]<<4|He[r.charCodeAt(v+2)]>>2,n[u++]=e>>8&255,n[u++]=e&255),n}function vNr(r){return st[r>>18&63]+st[r>>12&63]+st[r>>6&63]+st[r&63]}function fNr(r,e,t){for(var i,a=[],n=e;n<t;n+=3)i=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),a.push(vNr(i));return a.join("")}function cNr(r){for(var e,t=r.length,i=t%3,a=[],n=16383,u=0,o=t-i;u<o;u+=n)a.push(fNr(r,u,u+n>o?o:u+n));return i===1?(e=r[t-1],a.push(st[e>>2]+st[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],a.push(st[e>>10]+st[e>>4&63]+st[e<<2&63]+"=")),a.join("")}});var kN=s(fv=>{fv.read=function(r,e,t,i,a){var n,u,o=a*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?a-1:0,p=t?-1:1,m=r[e+l];for(l+=p,n=m&(1<<-c)-1,m>>=-c,c+=o;c>0;n=n*256+r[e+l],l+=p,c-=8);for(u=n&(1<<-c)-1,n>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(n===0)n=1-f;else{if(n===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),n=n-f}return(m?-1:1)*u*Math.pow(2,n-i)};fv.write=function(r,e,t,i,a,n){var u,o,v,f=n*8-a-1,c=(1<<f)-1,l=c>>1,p=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:n-1,y=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,a),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,a),u=0));a>=8;r[t+m]=o&255,m+=y,o/=256,a-=8);for(u=u<<a|o,f+=a;f>0;r[t+m]=u&255,m+=y,u/=256,f-=8);r[t+m-y]|=g*128}});var eS=s(Ua=>{"use strict";var cv=BN(),Ca=kN(),CN=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ua.Buffer=D;Ua.SlowBuffer=yNr;Ua.INSPECT_MAX_BYTES=50;var fs=2147483647;Ua.kMaxLength=fs;D.TYPED_ARRAY_SUPPORT=lNr();!D.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function lNr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(D.prototype,"parent",{enumerable:!0,get:function(){if(!!D.isBuffer(this))return this.buffer}});Object.defineProperty(D.prototype,"offset",{enumerable:!0,get:function(){if(!!D.isBuffer(this))return this.byteOffset}});function ht(r){if(r>fs)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,D.prototype),e}function D(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return gv(r)}return DN(r,e,t)}D.poolSize=8192;function DN(r,e,t){if(typeof r=="string")return dNr(r,e);if(ArrayBuffer.isView(r))return gNr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ut(r,ArrayBuffer)||r&&ut(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ut(r,SharedArrayBuffer)||r&&ut(r.buffer,SharedArrayBuffer)))return pv(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return D.from(i,e,t);let a=mNr(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return D.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}D.from=function(r,e,t){return DN(r,e,t)};Object.setPrototypeOf(D.prototype,Uint8Array.prototype);Object.setPrototypeOf(D,Uint8Array);function HN(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function pNr(r,e,t){return HN(r),r<=0?ht(r):e!==void 0?typeof t=="string"?ht(r).fill(e,t):ht(r).fill(e):ht(r)}D.alloc=function(r,e,t){return pNr(r,e,t)};function gv(r){return HN(r),ht(r<0?0:mv(r)|0)}D.allocUnsafe=function(r){return gv(r)};D.allocUnsafeSlow=function(r){return gv(r)};function dNr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!D.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=zN(r,e)|0,i=ht(t),a=i.write(r,e);return a!==t&&(i=i.slice(0,a)),i}function lv(r){let e=r.length<0?0:mv(r.length)|0,t=ht(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function gNr(r){if(ut(r,Uint8Array)){let e=new Uint8Array(r);return pv(e.buffer,e.byteOffset,e.byteLength)}return lv(r)}function pv(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,D.prototype),i}function mNr(r){if(D.isBuffer(r)){let e=mv(r.length)|0,t=ht(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||hv(r.length)?ht(0):lv(r);if(r.type==="Buffer"&&Array.isArray(r.data))return lv(r.data)}function mv(r){if(r>=fs)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+fs.toString(16)+" bytes");return r|0}function yNr(r){return+r!=r&&(r=0),D.alloc(+r)}D.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==D.prototype};D.compare=function(e,t){if(ut(e,Uint8Array)&&(e=D.from(e,e.offset,e.byteLength)),ut(t,Uint8Array)&&(t=D.from(t,t.offset,t.byteLength)),!D.isBuffer(e)||!D.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,a=t.length;for(let n=0,u=Math.min(i,a);n<u;++n)if(e[n]!==t[n]){i=e[n],a=t[n];break}return i<a?-1:a<i?1:0};D.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};D.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return D.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let a=D.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){let u=e[i];if(ut(u,Uint8Array))n+u.length>a.length?(D.isBuffer(u)||(u=D.from(u)),u.copy(a,n)):Uint8Array.prototype.set.call(a,u,n);else if(D.isBuffer(u))u.copy(a,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=u.length}return a};function zN(r,e){if(D.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ut(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let a=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return dv(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return rS(r).length;default:if(a)return i?-1:dv(r).length;e=(""+e).toLowerCase(),a=!0}}D.byteLength=zN;function hNr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return TNr(this,e,t);case"utf8":case"utf-8":return XN(this,e,t);case"ascii":return ANr(this,e,t);case"latin1":case"binary":return _Nr(this,e,t);case"base64":return SNr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return INr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}D.prototype._isBuffer=!0;function Ki(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}D.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ki(this,t,t+1);return this};D.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ki(this,t,t+3),Ki(this,t+1,t+2);return this};D.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ki(this,t,t+7),Ki(this,t+1,t+6),Ki(this,t+2,t+5),Ki(this,t+3,t+4);return this};D.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?XN(this,0,e):hNr.apply(this,arguments)};D.prototype.toLocaleString=D.prototype.toString;D.prototype.equals=function(e){if(!D.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:D.compare(this,e)===0};D.prototype.inspect=function(){let e="",t=Ua.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};CN&&(D.prototype[CN]=D.prototype.inspect);D.prototype.compare=function(e,t,i,a,n){if(ut(e,Uint8Array)&&(e=D.from(e,e.offset,e.byteLength)),!D.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),a===void 0&&(a=0),n===void 0&&(n=this.length),t<0||i>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=i)return 0;if(a>=n)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,a>>>=0,n>>>=0,this===e)return 0;let u=n-a,o=i-t,v=Math.min(u,o),f=this.slice(a,n),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function WN(r,e,t,i,a){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,hv(t)&&(t=a?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(a)return-1;t=r.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=D.from(e,i)),D.isBuffer(e))return e.length===0?-1:VN(r,e,t,i,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):VN(r,[e],t,i,a);throw new TypeError("val must be string, number or Buffer")}function VN(r,e,t,i,a){let n=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,u/=2,o/=2,t/=2}function v(c,l){return n===1?c[l]:c.readUInt16BE(l*n)}let f;if(a){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*n}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}D.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};D.prototype.indexOf=function(e,t,i){return WN(this,e,t,i,!0)};D.prototype.lastIndexOf=function(e,t,i){return WN(this,e,t,i,!1)};function qNr(r,e,t,i){t=Number(t)||0;let a=r.length-t;i?(i=Number(i),i>a&&(i=a)):i=a;let n=e.length;i>n/2&&(i=n/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(hv(o))return u;r[t+u]=o}return u}function bNr(r,e,t,i){return cs(dv(e,r.length-t),r,t,i)}function wNr(r,e,t,i){return cs(FNr(e),r,t,i)}function ENr(r,e,t,i){return cs(rS(e),r,t,i)}function NNr(r,e,t,i){return cs(xNr(e,r.length-t),r,t,i)}D.prototype.write=function(e,t,i,a){if(t===void 0)a="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")a=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-t;if((i===void 0||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let u=!1;for(;;)switch(a){case"hex":return qNr(this,e,t,i);case"utf8":case"utf-8":return bNr(this,e,t,i);case"ascii":case"latin1":case"binary":return wNr(this,e,t,i);case"base64":return ENr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return NNr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),u=!0}};D.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function SNr(r,e,t){return e===0&&t===r.length?cv.fromByteArray(r):cv.fromByteArray(r.slice(e,t))}function XN(r,e,t){t=Math.min(r.length,t);let i=[],a=e;for(;a<t;){let n=r[a],u=null,o=n>239?4:n>223?3:n>191?2:1;if(a+o<=t){let v,f,c,l;switch(o){case 1:n<128&&(u=n);break;case 2:v=r[a+1],(v&192)===128&&(l=(n&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[a+1],f=r[a+2],(v&192)===128&&(f&192)===128&&(l=(n&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[a+1],f=r[a+2],c=r[a+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(n&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),a+=o}return ONr(i)}var UN=4096;function ONr(r){let e=r.length;if(e<=UN)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=UN));return t}function ANr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]&127);return i}function _Nr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]);return i}function TNr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let a="";for(let n=e;n<t;++n)a+=jNr[r[n]];return a}function INr(r,e,t){let i=r.slice(e,t),a="";for(let n=0;n<i.length-1;n+=2)a+=String.fromCharCode(i[n]+i[n+1]*256);return a}D.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,D.prototype),a};function ve(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}D.prototype.readUintLE=D.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return a};D.prototype.readUintBE=D.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a};D.prototype.readUint8=D.prototype.readUInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]};D.prototype.readUint16LE=D.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]|this[e+1]<<8};D.prototype.readUint16BE=D.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]<<8|this[e+1]};D.prototype.readUint32LE=D.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};D.prototype.readUint32BE=D.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};D.prototype.readBigUInt64LE=ui(function(e){e=e>>>0,Va(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))});D.prototype.readBigUInt64BE=ui(function(e){e=e>>>0,Va(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(a)<<BigInt(32))+BigInt(n)});D.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a};D.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=t,n=1,u=this[e+--a];for(;a>0&&(n*=256);)u+=this[e+--a]*n;return n*=128,u>=n&&(u-=Math.pow(2,8*t)),u};D.prototype.readInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};D.prototype.readInt16LE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};D.prototype.readInt16BE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};D.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};D.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};D.prototype.readBigInt64LE=ui(function(e){e=e>>>0,Va(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});D.prototype.readBigInt64BE=ui(function(e){e=e>>>0,Va(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&xn(e,this.length-8);let a=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});D.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ca.read(this,e,!0,23,4)};D.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ca.read(this,e,!1,23,4)};D.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ca.read(this,e,!0,52,8)};D.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ca.read(this,e,!1,52,8)};function Oe(r,e,t,i,a,n){if(!D.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<n)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}D.prototype.writeUintLE=D.prototype.writeUIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Oe(this,e,t,i,o,0)}let n=1,u=0;for(this[t]=e&255;++u<i&&(n*=256);)this[t+u]=e/n&255;return t+i};D.prototype.writeUintBE=D.prototype.writeUIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Oe(this,e,t,i,o,0)}let n=i-1,u=1;for(this[t+n]=e&255;--n>=0&&(u*=256);)this[t+n]=e/u&255;return t+i};D.prototype.writeUint8=D.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,1,255,0),this[t]=e&255,t+1};D.prototype.writeUint16LE=D.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};D.prototype.writeUint16BE=D.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};D.prototype.writeUint32LE=D.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};D.prototype.writeUint32BE=D.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function JN(r,e,t,i,a){KN(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function YN(r,e,t,i,a){KN(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t+7]=n,n=n>>8,r[t+6]=n,n=n>>8,r[t+5]=n,n=n>>8,r[t+4]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}D.prototype.writeBigUInt64LE=ui(function(e,t=0){return JN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});D.prototype.writeBigUInt64BE=ui(function(e,t=0){return YN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});D.prototype.writeIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Oe(this,e,t,i,v-1,-v)}let n=0,u=1,o=0;for(this[t]=e&255;++n<i&&(u*=256);)e<0&&o===0&&this[t+n-1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};D.prototype.writeIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Oe(this,e,t,i,v-1,-v)}let n=i-1,u=1,o=0;for(this[t+n]=e&255;--n>=0&&(u*=256);)e<0&&o===0&&this[t+n+1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};D.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};D.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};D.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};D.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};D.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};D.prototype.writeBigInt64LE=ui(function(e,t=0){return JN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});D.prototype.writeBigInt64BE=ui(function(e,t=0){return YN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ZN(r,e,t,i,a,n){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function $N(r,e,t,i,a){return e=+e,t=t>>>0,a||ZN(r,e,t,4,34028234663852886e22,-34028234663852886e22),Ca.write(r,e,t,i,23,4),t+4}D.prototype.writeFloatLE=function(e,t,i){return $N(this,e,t,!0,i)};D.prototype.writeFloatBE=function(e,t,i){return $N(this,e,t,!1,i)};function QN(r,e,t,i,a){return e=+e,t=t>>>0,a||ZN(r,e,t,8,17976931348623157e292,-17976931348623157e292),Ca.write(r,e,t,i,52,8),t+8}D.prototype.writeDoubleLE=function(e,t,i){return QN(this,e,t,!0,i)};D.prototype.writeDoubleBE=function(e,t,i){return QN(this,e,t,!1,i)};D.prototype.copy=function(e,t,i,a){if(!D.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<i&&(a=i),a===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-i&&(a=e.length-t+i);let n=a-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,a):Uint8Array.prototype.set.call(e,this.subarray(i,a),t),n};D.prototype.fill=function(e,t,i,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!D.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){let u=e.charCodeAt(0);(a==="utf8"&&u<128||a==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let n;if(typeof e=="number")for(n=t;n<i;++n)this[n]=e;else{let u=D.isBuffer(e)?e:D.from(e,a),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<i-t;++n)this[n+t]=u[n%o]}return this};var ka={};function yv(r,e,t){ka[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}yv("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);yv("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);yv("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,a=t;return Number.isInteger(t)&&Math.abs(t)>2**32?a=GN(String(t)):typeof t=="bigint"&&(a=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(a=GN(a)),a+="n"),i+=` It must be ${e}. Received ${a}`,i},RangeError);function GN(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function RNr(r,e,t){Va(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&xn(e,r.length-(t+1))}function KN(r,e,t,i,a,n){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw n>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(n+1)*8}${u}`:o=`>= -(2${u} ** ${(n+1)*8-1}${u}) and < 2 ** ${(n+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new ka.ERR_OUT_OF_RANGE("value",o,r)}RNr(i,a,n)}function Va(r,e){if(typeof r!="number")throw new ka.ERR_INVALID_ARG_TYPE(e,"number",r)}function xn(r,e,t){throw Math.floor(r)!==r?(Va(r,t),new ka.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new ka.ERR_BUFFER_OUT_OF_BOUNDS:new ka.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var LNr=/[^+/0-9A-Za-z-_]/g;function PNr(r){if(r=r.split("=")[0],r=r.trim().replace(LNr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function dv(r,e){e=e||1/0;let t,i=r.length,a=null,n=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&n.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&n.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&n.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;n.push(t)}else if(t<2048){if((e-=2)<0)break;n.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;n.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return n}function FNr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function xNr(r,e){let t,i,a,n=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,a=t%256,n.push(a),n.push(i);return n}function rS(r){return cv.toByteArray(PNr(r))}function cs(r,e,t,i){let a;for(a=0;a<i&&!(a+t>=e.length||a>=r.length);++a)e[a+t]=r[a];return a}function ut(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function hv(r){return r!==r}var jNr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let a=0;a<16;++a)e[i+a]=r[t]+r[a]}return e}();function ui(r){return typeof BigInt>"u"?MNr:r}function MNr(){throw new Error("BigInt not supported")}});var iS=s((jEe,tS)=>{"use strict";var BNr=eS().Buffer;tS.exports=BNr});var nS=s((MEe,aS)=>{"use strict";function kNr(){throw new Error("not implemented")}aS.exports=kNr});var oi=s((BEe,sS)=>{"use strict";var CNr=xN(),VNr=iS(),UNr=nS(),qv;CNr()?qv=VNr:qv=UNr;sS.exports=qv});var oS=s((kEe,uS)=>{"use strict";var GNr=yr(),DNr=oi(),HNr=GNr(DNr.from);uS.exports=HNr});var fS=s((CEe,vS)=>{"use strict";var zNr=Di(),WNr=C(),XNr=oi();function JNr(r){if(!zNr(r))throw new TypeError(WNr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return XNr.from(r)}vS.exports=JNr});var lS=s((VEe,cS)=>{"use strict";var YNr=Di(),ZNr=C(),$Nr=oi();function QNr(r){if(!YNr(r))throw new TypeError(ZNr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new $Nr(r)}cS.exports=QNr});var dS=s((UEe,pS)=>{"use strict";var KNr=oS(),rSr=fS(),eSr=lS(),bv;KNr?bv=rSr:bv=eSr;pS.exports=bv});var yS=s((GEe,mS)=>{"use strict";var tSr=qa(),iSr=et(),aSr=ha(),nSr=ya(),sSr=Hi(),uSr=ai(),oSr=me(),vSr=rt(),fSr=ge(),gS;function cSr(r){return new tSr(r)}function lSr(r){return new iSr(r)}function pSr(r){return new aSr(r)}function dSr(r){return new nSr(r)}function gSr(r){return new sSr(r)}function mSr(r){return new uSr(r)}function ySr(r){return new oSr(r)}function hSr(r){return new vSr(r)}function qSr(r){return new fSr(r)}function bSr(){var r={int8array:cSr,uint8array:lSr,uint8clampedarray:pSr,int16array:dSr,uint16array:gSr,int32array:mSr,uint32array:ySr,float32array:hSr,float64array:qSr};return r}gS=bSr();mS.exports=gS});var ES=s((DEe,wS)=>{"use strict";var ls=vr(),wv=qe(),hS=Di(),wSr=Yw(),qS=M0(),ESr=nE(),NSr=ns(),bS=Ba(),SSr=bN(),jn=TN(),OSr=$i(),Mn=ti(),ASr=dS(),_Sr=yS();function TSr(r){var e,t,i,a,n,u,o,v;for(e=[],a=[],o=Object.create(OSr(r)),e.push(r),a.push(o),t=SSr(r),v=0;v<t.length;v++)i=t[v],n=jn(r,i),ls(n,"value")&&(u=wv(r[i])?[]:{},n.value=ra(r[i],u,e,a,-1)),Mn(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function ISr(r){var e=[],t=[],i,a,n,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=bS(r),v=0;v<i.length;v++)u=i[v],a=jn(r,u),ls(a,"value")&&(n=wv(r[u])?[]:{},a.value=ra(r[u],n,e,t,-1)),Mn(o,u,a);return o}function ra(r,e,t,i,a){var n,u,o,v,f,c,l,p,m,y;if(a-=1,typeof r!="object"||r===null)return r;if(hS(r))return ASr(r);if(wSr(r))return ISr(r);if(o=qS(r),o==="date")return new Date(+r);if(o==="regexp")return ESr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=_Sr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?TSr(r):{};if(u=bS(r),a>0)for(n=o,y=0;y<u.length;y++){if(c=u[y],p=r[c],o=qS(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||hS(p)){n==="object"?(v=jn(r,c),ls(v,"value")&&(v.value=ra(p)),Mn(e,c,v)):e[c]=ra(p);continue}if(m=NSr(t,p),m!==-1){e[c]=i[m];continue}l=wv(p)?new Array(p.length):{},t.push(p),i.push(l),n==="array"?e[c]=ra(p,l,t,i,a):(v=jn(r,c),ls(v,"value")&&(v.value=ra(p,l,t,i,a)),Mn(e,c,v))}else if(o==="array")for(y=0;y<u.length;y++)c=u[y],e[c]=r[c];else for(y=0;y<u.length;y++)c=u[y],v=jn(r,c),Mn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}wS.exports=ra});var SS=s((HEe,NS)=>{"use strict";var RSr=qe(),LSr=be().isPrimitive,PSr=C(),FSr=hr(),xSr=ES();function jSr(r,e){var t;if(arguments.length>1){if(!LSr(e))throw new TypeError(PSr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=FSr;return t=RSr(r)?new Array(r.length):{},xSr(r,t,[r],[t],e)}NS.exports=jSr});var Bn=s((zEe,OS)=>{"use strict";var MSr=SS();OS.exports=MSr});var AS=s((WEe,BSr)=>{BSr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var TS=s((XEe,_S)=>{"use strict";var kSr=Bn(),CSr=AS();function VSr(){return kSr(CSr)}_S.exports=VSr});var IS=s((JEe,USr)=>{USr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var LS=s((YEe,RS)=>{"use strict";var GSr=Bn(),DSr=IS();function HSr(){return GSr(DSr)}RS.exports=HSr});var PS=s((ZEe,zSr)=>{zSr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var xS=s(($Ee,FS)=>{"use strict";var WSr=Bn(),XSr=PS();function JSr(){return WSr(XSr)}FS.exports=JSr});var jS=s((QEe,YSr)=>{YSr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var BS=s((KEe,MS)=>{"use strict";var ZSr=jS();function $Sr(){return ZSr.slice()}MS.exports=$Sr});var kS=s((rNe,QSr)=>{QSr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var VS=s((eNe,CS)=>{"use strict";var KSr=Bn(),rOr=kS();function eOr(){return KSr(rOr)}CS.exports=eOr});var GS=s((tNe,US)=>{"use strict";var kn=$r(),tOr=TS(),iOr=LS(),aOr=xS(),nOr=BS(),sOr=VS();function uOr(r){return kn(r,"AFINN_111",tOr),kn(r,"AFINN_96",iOr),kn(r,"ANSCOMBES_QUARTET",aOr),kn(r,"HERNDON_VENUS_SEMIDIAMETERS",nOr),kn(r,"NIGHTINGALES_ROSE",sOr),r}US.exports=uOr});var HS=s((iNe,DS)=>{"use strict";function oOr(r,e){return r+e}DS.exports=oOr});var WS=s((aNe,zS)=>{"use strict";var vOr=HS();zS.exports=vOr});var JS=s((nNe,XS)=>{"use strict";var fOr=hr(),cOr=Ir();function lOr(r){return r===fOr||r===cOr}XS.exports=lOr});var Ve=s((sNe,YS)=>{"use strict";var pOr=JS();YS.exports=pOr});var QS=s((uNe,$S)=>{"use strict";var ZS=D0();function dOr(r){return r>0?ZS(r-1):ZS(r+1)}$S.exports=dOr});var ps=s((oNe,KS)=>{"use strict";var gOr=QS();KS.exports=gOr});var eO=s((vNe,rO)=>{"use strict";var mOr=Math.sqrt;rO.exports=mOr});var Lr=s((fNe,tO)=>{"use strict";var yOr=eO();tO.exports=yOr});var aO=s((cNe,iO)=>{"use strict";function hOr(r){return Math.abs(r)}iO.exports=hOr});var Wr=s((lNe,nO)=>{"use strict";var qOr=aO();nO.exports=qOr});var uO=s((pNe,sO)=>{"use strict";var bOr=et(),wOr=Hi(),EOr={uint16:wOr,uint8:bOr};sO.exports=EOr});var cO=s((dNe,fO)=>{"use strict";var oO=uO(),vO;function NOr(){var r,e;return r=new oO.uint16(1),r[0]=4660,e=new oO.uint8(r.buffer),e[0]===52}vO=NOr();fO.exports=vO});var Ye=s((gNe,lO)=>{"use strict";var SOr=cO();lO.exports=SOr});var gO=s((mNe,dO)=>{"use strict";var OOr=Ye(),pO,Ev,Nv;OOr===!0?(Ev=1,Nv=0):(Ev=0,Nv=1);pO={HIGH:Ev,LOW:Nv};dO.exports=pO});var Sv=s((yNe,qO)=>{"use strict";var AOr=me(),_Or=ge(),yO=gO(),hO=new _Or(1),mO=new AOr(hO.buffer),TOr=yO.HIGH,IOr=yO.LOW;function ROr(r,e,t,i){return hO[0]=r,e[i]=mO[TOr],e[i+t]=mO[IOr],e}qO.exports=ROr});var wO=s((hNe,bO)=>{"use strict";var LOr=Sv();function POr(r){return LOr(r,[0>>>0,0>>>0],1,0)}bO.exports=POr});var Ga=s((qNe,NO)=>{"use strict";var FOr=G(),EO=wO(),xOr=Sv();FOr(EO,"assign",xOr);NO.exports=EO});var OO=s((bNe,SO)=>{"use strict";var jOr=Ye(),Ov;jOr===!0?Ov=0:Ov=1;SO.exports=Ov});var _O=s((wNe,AO)=>{"use strict";var MOr=me(),BOr=ge(),kOr=OO(),Av=new BOr(1),COr=new MOr(Av.buffer);function VOr(r,e){return Av[0]=r,COr[kOr]=e>>>0,Av[0]}AO.exports=VOr});var qt=s((ENe,TO)=>{"use strict";var UOr=_O();TO.exports=UOr});var RO=s((NNe,IO)=>{"use strict";function GOr(r){return r|0}IO.exports=GOr});var _v=s((SNe,LO)=>{"use strict";var DOr=RO();LO.exports=DOr});var ot=s((ONe,PO)=>{"use strict";var HOr=2147483647;PO.exports=HOr});var Tv=s((ANe,FO)=>{"use strict";var zOr=2147483648;FO.exports=zOr});var jO=s((_Ne,xO)=>{"use strict";var WOr=Ye(),Iv;WOr===!0?Iv=1:Iv=0;xO.exports=Iv});var kO=s((TNe,BO)=>{"use strict";var XOr=me(),JOr=ge(),YOr=jO(),MO=new JOr(1),ZOr=new XOr(MO.buffer);function $Or(r){return MO[0]=r,ZOr[YOr]}BO.exports=$Or});var ie=s((INe,CO)=>{"use strict";var QOr=kO();CO.exports=QOr});var GO=s((RNe,UO)=>{"use strict";var KOr=Ye(),VO,Rv,Lv;KOr===!0?(Rv=1,Lv=0):(Rv=0,Lv=1);VO={HIGH:Rv,LOW:Lv};UO.exports=VO});var XO=s((LNe,WO)=>{"use strict";var rAr=me(),eAr=ge(),HO=GO(),zO=new eAr(1),DO=new rAr(zO.buffer),tAr=HO.HIGH,iAr=HO.LOW;function aAr(r,e){return DO[tAr]=r,DO[iAr]=e,zO[0]}WO.exports=aAr});var Da=s((PNe,JO)=>{"use strict";var nAr=XO();JO.exports=nAr});var ZO=s((FNe,YO)=>{"use strict";var sAr=Tv(),uAr=ot(),oAr=Ga(),vAr=ie(),fAr=Da(),Pv=[0,0];function cAr(r,e){var t,i;return oAr.assign(r,Pv,1,0),t=Pv[0],t&=uAr,i=vAr(e),i&=sAr,t|=i,fAr(t,Pv[1])}YO.exports=cAr});var ds=s((xNe,$O)=>{"use strict";var lAr=ZO();$O.exports=lAr});var rA=s((jNe,KO)=>{"use strict";var QO=ps(),pAr=ds(),dAr=Ir(),gs=hr();function gAr(r,e){return e===dAr?gs:e===gs?0:e>0?QO(e)?r:0:QO(e)?pAr(gs,r):gs}KO.exports=gAr});var tA=s((MNe,eA)=>{"use strict";var mAr=ot(),yAr=ie(),hAr=1072693247,ms=1e300,ys=1e-300;function qAr(r,e){var t,i;return i=yAr(r),t=i&mAr,t<=hAr?e<0?ms*ms:ys*ys:e>0?ms*ms:ys*ys}eA.exports=qAr});var nA=s((BNe,aA)=>{"use strict";var bAr=Wr(),iA=hr();function wAr(r,e){return r===-1?(r-r)/(r-r):r===1?1:bAr(r)<1==(e===iA)?0:iA}aA.exports=wAr});var uA=s((kNe,sA)=>{"use strict";var EAr=Ye(),Fv;EAr===!0?Fv=1:Fv=0;sA.exports=Fv});var vA=s((CNe,oA)=>{"use strict";var NAr=me(),SAr=ge(),OAr=uA(),xv=new SAr(1),AAr=new NAr(xv.buffer);function _Ar(r,e){return xv[0]=r,AAr[OAr]=e>>>0,xv[0]}oA.exports=_Ar});var bt=s((VNe,fA)=>{"use strict";var TAr=vA();fA.exports=TAr});var vt=s((UNe,cA)=>{"use strict";var IAr=1023;cA.exports=IAr});var pA=s((GNe,lA)=>{"use strict";function RAr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}lA.exports=RAr});var yA=s((DNe,mA)=>{"use strict";var LAr=ie(),hs=qt(),dA=bt(),PAr=vt(),FAr=pA(),xAr=1048575,gA=1048576,jAr=1072693248,MAr=536870912,BAr=524288,kAr=20,CAr=9007199254740992,VAr=.9617966939259756,UAr=.9617967009544373,GAr=-7028461650952758e-24,DAr=[1,1.5],HAr=[0,.5849624872207642],zAr=[0,1350039202129749e-23];function WAr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O;return T=0,t<gA&&(e*=CAr,T-=53,t=LAr(e)),T+=(t>>kAr)-PAr|0,S=t&xAr|0,t=S|jAr|0,S<=235662?O=0:S<767610?O=1:(O=0,T+=1,t-=gA),e=dA(e,t),c=DAr[O],A=e-c,b=1/(e+c),a=A*b,u=hs(a,0),i=(t>>1|MAr)+BAr,i+=O<<18,v=dA(0,i),f=e-(v-c),o=b*(A-u*v-u*f),n=a*a,w=n*n*FAr(n),w+=o*(u+a),n=u*u,v=3+n+w,v=hs(v,0),f=w-(v-3-n),A=u*v,b=o*v+f*a,p=A+b,p=hs(p,0),m=b-(p-A),y=UAr*p,g=GAr*p+m*VAr+zAr[O],l=HAr[O],q=T,d=y+g+l+q,d=hs(d,0),h=g-(d-q-l-y),r[0]=d,r[1]=h,r}mA.exports=WAr});var qA=s((HNe,hA)=>{"use strict";function XAr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}hA.exports=XAr});var wA=s((zNe,bA)=>{"use strict";var JAr=qt(),YAr=qA(),ZAr=1.4426950408889634,$Ar=1.4426950216293335,QAr=19259629911266175e-24;function KAr(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*YAr(a),u=$Ar*a,o=a*QAr-n*ZAr,i=u+o,i=JAr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}bA.exports=KAr});var jv=s((WNe,EA)=>{"use strict";var r_r=1023;EA.exports=r_r});var SA=s((XNe,NA)=>{"use strict";var e_r=-1023;NA.exports=e_r});var Mv=s((JNe,OA)=>{"use strict";var t_r=-1074;OA.exports=t_r});var Bv=s((YNe,AA)=>{"use strict";var i_r=22250738585072014e-324;AA.exports=i_r});var kv=s((ZNe,_A)=>{"use strict";var a_r=Bv(),n_r=Ve(),s_r=W(),u_r=Wr(),o_r=4503599627370496;function v_r(r,e,t,i){return s_r(r)||n_r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&u_r(r)<a_r?(e[i]=r*o_r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}_A.exports=v_r});var IA=s(($Ne,TA)=>{"use strict";var f_r=kv();function c_r(r){return f_r(r,[0,0],1,0)}TA.exports=c_r});var PA=s((QNe,LA)=>{"use strict";var l_r=G(),RA=IA(),p_r=kv();l_r(RA,"assign",p_r);LA.exports=RA});var Cn=s((KNe,FA)=>{"use strict";var d_r=2146435072;FA.exports=d_r});var jA=s((rSe,xA)=>{"use strict";var g_r=ie(),m_r=Cn(),y_r=vt();function h_r(r){var e=g_r(r);return e=(e&m_r)>>>20,e-y_r|0}xA.exports=h_r});var BA=s((eSe,MA)=>{"use strict";var q_r=jA();MA.exports=q_r});var CA=s((tSe,kA)=>{"use strict";var b_r=hr(),w_r=Ir(),E_r=vt(),N_r=jv(),S_r=SA(),O_r=Mv(),A_r=W(),__r=Ve(),T_r=ds(),I_r=PA().assign,R_r=BA(),L_r=Ga(),P_r=Da(),F_r=2220446049250313e-31,x_r=2148532223>>>0,Cv=[0,0],Vv=[0,0];function j_r(r,e){var t,i;return e===0||r===0||A_r(r)||__r(r)?r:(I_r(r,Cv,1,0),r=Cv[0],e+=Cv[1],e+=R_r(r),e<O_r?T_r(0,r):e>N_r?r<0?w_r:b_r:(e<=S_r?(e+=52,i=F_r):i=1,L_r.assign(r,Vv,1,0),t=Vv[0],t&=x_r,t|=e+E_r<<20,i*P_r(t,Vv[1])))}kA.exports=j_r});var qs=s((iSe,VA)=>{"use strict";var M_r=CA();VA.exports=M_r});var bs=s((aSe,UA)=>{"use strict";var B_r=.6931471805599453;UA.exports=B_r});var ws=s((nSe,GA)=>{"use strict";var k_r=1048575;GA.exports=k_r});var HA=s((sSe,DA)=>{"use strict";function C_r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}DA.exports=C_r});var $A=s((uSe,ZA)=>{"use strict";var V_r=ie(),zA=bt(),U_r=qt(),G_r=_v(),D_r=qs(),H_r=bs(),WA=vt(),XA=ot(),JA=ws(),z_r=HA(),YA=1048576,W_r=1071644672,Vn=20,X_r=.6931471824645996,J_r=-1904654299957768e-24;function Y_r(r,e,t){var i,a,n,u,o,v,f,c,l,p,m;return p=r&XA|0,m=(p>>Vn)-WA|0,l=0,p>W_r&&(l=r+(YA>>m+1)>>>0,m=((l&XA)>>Vn)-WA|0,i=(l&~(JA>>m))>>>0,n=zA(0,i),l=(l&JA|YA)>>Vn-m>>>0,r<0&&(l=-l),e-=n),n=t+e,n=U_r(n,0),o=n*X_r,v=(t-(n-e))*H_r+n*J_r,c=o+v,f=v-(c-o),n=c*c,a=c-n*z_r(n),u=c*a/(a-2)-(f+c*f),c=1-(u-c),r=V_r(c),r=G_r(r),r+=l<<Vn>>>0,r>>Vn<=0?c=D_r(c,l):c=zA(c,r),c}ZA.exports=Y_r});var o_=s((oSe,u_)=>{"use strict";var QA=W(),KA=ps(),r_=Ve(),Z_r=we(),e_=Lr(),$_r=Wr(),Uv=Ga(),Q_r=qt(),t_=_v(),K_r=Ir(),rTr=hr(),Gv=ot(),eTr=rA(),tTr=tA(),iTr=nA(),aTr=yA(),nTr=wA(),sTr=$A(),uTr=1072693247,oTr=1105199104,vTr=1139802112,i_=1083179008,fTr=1072693248,cTr=1083231232,lTr=3230714880>>>0,a_=31,vi=1e300,fi=1e-300,pTr=8008566259537294e-32,wt=[0,0],n_=[0,0];function s_(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;if(QA(r)||QA(e))return NaN;if(Uv.assign(e,wt,1,0),o=wt[0],v=wt[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return e_(r);if(e===-.5)return 1/e_(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(r_(e))return iTr(r,e)}if(Uv.assign(r,wt,1,0),n=wt[0],u=wt[1],u===0){if(n===0)return eTr(r,e);if(r===1)return 1;if(r===-1&&KA(e))return-1;if(r_(r))return r===K_r?s_(-0,-e):e<0?0:rTr}if(r<0&&Z_r(e)===!1)return(r-r)/(r-r);if(a=$_r(r),t=n&Gv|0,i=o&Gv|0,f=n>>>a_|0,c=o>>>a_|0,f&&KA(e)?f=-1:f=1,i>oTr){if(i>vTr)return tTr(r,e);if(t<uTr)return c===1?f*vi*vi:f*fi*fi;if(t>fTr)return c===0?f*vi*vi:f*fi*fi;y=nTr(n_,a)}else y=aTr(n_,a,t);if(l=Q_r(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],g=m+p,Uv.assign(g,wt,1,0),d=t_(wt[0]),h=t_(wt[1]),d>=i_){if((d-i_|h)!==0||m+pTr>g-p)return f*vi*vi}else if((d&Gv)>=cTr&&((d-lTr|h)!==0||m<=g-p))return f*fi*fi;return g=sTr(d,p,m),f*g}u_.exports=s_});var Vr=s((vSe,v_)=>{"use strict";var dTr=o_();v_.exports=dTr});var Ha=s((fSe,f_)=>{"use strict";var gTr=9007199254740991;f_.exports=gTr});var Es=s((cSe,c_)=>{"use strict";var mTr=308;c_.exports=mTr});var Dv=s((lSe,l_)=>{"use strict";var yTr=-308;l_.exports=yTr});var Ns=s((pSe,p_)=>{"use strict";var hTr=-324;p_.exports=hTr});var b_=s((dSe,q_)=>{"use strict";var d_=W(),Ss=Ve(),g_=Vr(),qTr=Wr(),m_=Gr(),bTr=Ha(),y_=Es(),wTr=Dv(),ETr=Ns(),NTr=Ir(),STr=bTr+1,h_=1e308;function OTr(r,e){var t,i;return d_(r)||d_(e)||Ss(e)?NaN:Ss(r)||r===0||e<ETr||qTr(r)>STr&&e<=0?r:e>y_?r>=0?0:NTr:e<wTr?(t=g_(10,-(e+y_)),i=r*h_*t,Ss(i)?r:m_(i)/h_/t):(t=g_(10,-e),i=r*t,Ss(i)?r:m_(i)/t)}q_.exports=OTr});var E_=s((gSe,w_)=>{"use strict";var ATr=b_();w_.exports=ATr});var S_=s((mSe,N_)=>{"use strict";function _Tr(r,e){return r*e}N_.exports=_Tr});var A_=s((ySe,O_)=>{"use strict";var TTr=S_();O_.exports=TTr});var T_=s((hSe,__)=>{"use strict";function ITr(r,e){return r-e}__.exports=ITr});var R_=s((qSe,I_)=>{"use strict";var RTr=T_();I_.exports=RTr});var P_=s((bSe,L_)=>{"use strict";var Un=$r(),LTr=WS(),PTr=E_(),FTr=A_(),xTr=Vr(),jTr=R_();function MTr(r){return Un(r,"add",LTr),Un(r,"floorn",PTr),Un(r,"mul",FTr),Un(r,"pow",xTr),Un(r,"sub",jTr),r}L_.exports=MTr});var M_=s((wSe,j_)=>{"use strict";var F_=Er().isPrimitive,BTr=hr(),kTr=Ir(),x_=C();function CTr(r,e){return t;function t(i,a){var n;if(!F_(i)){if(e.nonnumeric===void 0)throw new TypeError(x_("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!F_(a)){if(e.nonnumeric===void 0)throw new TypeError(x_("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return n=r(i,a),n!==n?e.nan:n===BTr?e.pinf:n===kTr?e.ninf:n}}j_.exports=CTr});var Hv=s((ESe,B_)=>{"use strict";var VTr=M_();B_.exports=VTr});var C_=s((NSe,k_)=>{"use strict";var UTr=F0(),GTr=E1(),DTr=ts(),HTr=C(),zTr=es(),WTr=Hv(),XTr=["number","number"],JTr=["First argument","Second argument"];function YTr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(HTr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=zTr([r[0],r[1]],XTr,JTr),t=UTr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=DTr(t),n=WTr(e,i),r[0].push(a),r[1].push(t),GTr(r[0],r[1],n),a}k_.exports=YTr});var U_=s((SSe,V_)=>{"use strict";var ZTr=C_();V_.exports=ZTr});var D_=s((OSe,G_)=>{"use strict";var $Tr=Er().isPrimitive,QTr=hr(),KTr=Ir(),rIr=C();function eIr(r,e){return t;function t(i){var a;if(!$Tr(i)){if(e.nonnumeric===void 0)throw new TypeError(rIr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return a=r(i),a!==a?e.nan:a===QTr?e.pinf:a===KTr?e.ninf:a}}G_.exports=eIr});var Os=s((ASe,H_)=>{"use strict";var tIr=D_();H_.exports=tIr});var W_=s((_Se,z_)=>{"use strict";var zv=Er().isPrimitive,iIr=hr(),aIr=Ir(),Wv=C();function nIr(r,e){return t;function t(i,a,n){var u;if(!zv(i)){if(e.nonnumeric===void 0)throw new TypeError(Wv("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!zv(a)){if(e.nonnumeric===void 0)throw new TypeError(Wv("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!zv(n)){if(e.nonnumeric===void 0)throw new TypeError(Wv("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return u=r(i,a,n),u!==u?e.nan:u===iIr?e.pinf:u===aIr?e.ninf:u}}z_.exports=nIr});var Xv=s((TSe,X_)=>{"use strict";var sIr=W_();X_.exports=sIr});var Y_=s((ISe,J_)=>{"use strict";var As=Er().isPrimitive,uIr=hr(),oIr=Ir(),_s=C();function vIr(r,e){return t;function t(i,a,n,u){var o;if(!As(i)){if(e.nonnumeric===void 0)throw new TypeError(_s("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!As(a)){if(e.nonnumeric===void 0)throw new TypeError(_s("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!As(n)){if(e.nonnumeric===void 0)throw new TypeError(_s("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!As(u)){if(e.nonnumeric===void 0)throw new TypeError(_s("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,a,n,u),o!==o?e.nan:o===uIr?e.pinf:o===oIr?e.ninf:o}}J_.exports=vIr});var $_=s((RSe,Z_)=>{"use strict";var fIr=Y_();Z_.exports=fIr});var K_=s((LSe,Q_)=>{"use strict";var Gn=Er().isPrimitive,cIr=hr(),lIr=Ir(),Dn=C();function pIr(r,e){return t;function t(i,a,n,u,o){var v;if(!Gn(i)){if(e.nonnumeric===void 0)throw new TypeError(Dn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Gn(a)){if(e.nonnumeric===void 0)throw new TypeError(Dn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Gn(n)){if(e.nonnumeric===void 0)throw new TypeError(Dn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Gn(u)){if(e.nonnumeric===void 0)throw new TypeError(Dn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Gn(o)){if(e.nonnumeric===void 0)throw new TypeError(Dn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,a,n,u,o),v!==v?e.nan:v===cIr?e.pinf:v===lIr?e.ninf:v}}Q_.exports=pIr});var eT=s((PSe,rT)=>{"use strict";var dIr=K_();rT.exports=dIr});var iT=s((FSe,tT)=>{"use strict";var gIr=F0(),mIr=S1(),yIr=ts(),hIr=C(),qIr=es(),bIr=Xv(),wIr=["number","number","number"],EIr=["First argument","Second argument","Third argument"];function NIr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(hIr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=qIr([r[0],r[1],r[2]],wIr,EIr),t=gIr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=yIr(t),n=bIr(e,i),r[0].push(a),r[1].push(t),mIr(r[0],r[1],n),a}tT.exports=NIr});var nT=s((xSe,aT)=>{"use strict";var SIr=iT();aT.exports=SIr});var uT=s((jSe,sT)=>{"use strict";var OIr=qe(),AIr=O2(),_Ir=C(),TIr=Os();function IIr(r,e){var t,i,a,n,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")i[n]=r[u+1];else throw new Error(_Ir("invalid argument. Unrecognized option name. Value: %s.",String(n)));return a=TIr(e,i),OIr(t)?(AIr([t,t],[t.length,t[0].length],a),t):a(t)}sT.exports=IIr});var vT=s((MSe,oT)=>{"use strict";var RIr=uT();oT.exports=RIr});var cT=s((BSe,fT)=>{"use strict";function LIr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}fT.exports=LIr});var Jv=s((kSe,lT)=>{"use strict";var PIr=cT();lT.exports=PIr});var dT=s((CSe,pT)=>{"use strict";function FIr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}pT.exports=FIr});var ft=s((VSe,gT)=>{"use strict";var xIr=dT();gT.exports=xIr});var yT=s((USe,mT)=>{"use strict";var jIr=da(),MIr=Ji(),BIr=B0(),kIr=Sa(),CIr=k0(),VIr=ft();function UIr(r){var e,t,i,a;return e=r.data,i=r.shape,a=r.dtype,t=jIr(e),{ref:r,dtype:a,data:e,length:VIr(i),shape:i,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[MIr(a),BIr(a)]:[kIr(a),CIr(a)]}}mT.exports=UIr});var qT=s((GSe,hT)=>{"use strict";var GIr=yT();hT.exports=GIr});var wT=s((DSe,bT)=>{"use strict";function DIr(r){var e,t;if(e=[],r<=0)return e;for(t=0;t<r;t++)e.push(t);return e}bT.exports=DIr});var NT=s((HSe,ET)=>{"use strict";var HIr=wT();ET.exports=HIr});var OT=s((zSe,ST)=>{"use strict";function zIr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}ST.exports=zIr});var Yv=s((WSe,AT)=>{"use strict";var WIr=OT();AT.exports=WIr});var TT=s((XSe,_T)=>{"use strict";function XIr(r,e){var t,i,a,n,u,o,v,f,c,l;for(a=1,n=1,l=1;l<r.length;l++){for(v=r[a],t=v<0?-v:v,f=e[n],u=a-1,o=n-1;u>=0&&(c=r[u],i=c<0?-c:c,!(i<=t));)r[u+1]=c,e[o+1]=e[o],u-=1,o-=1;r[u+1]=v,e[o+1]=f,a+=1,n+=1}}_T.exports=XIr});var LT=s((JSe,RT)=>{"use strict";var JIr=NT(),YIr=wn(),IT=Yv(),ZIr=TT();function $Ir(r,e,t){var i;return i=JIr(r.length),e=YIr(e),ZIr(e,i),r=IT(r,i),t=IT(t,i),{sh:r,sx:e,sy:t}}RT.exports=$Ir});var ne=s((YSe,PT)=>{"use strict";var QIr=LT();PT.exports=QIr});var FT=s((ZSe,KIr)=>{KIr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var jT=s(($Se,xT)=>{"use strict";var rRr=FT();function eRr(r){return rRr[r]||null}xT.exports=eRr});var Zv=s((QSe,MT)=>{"use strict";var tRr=jT();MT.exports=tRr});var kT=s((KSe,BT)=>{"use strict";var iRr={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};BT.exports=iRr});var UT=s((rOe,VT)=>{"use strict";var CT=Zv(),$v=kT();function aRr(r,e){var t,i;return t=CT(r),i=CT(e),t===null||i===null?$v.BLOCK_SIZE_IN_ELEMENTS:t>i?$v.BLOCK_SIZE_IN_BYTES/t|0:$v.BLOCK_SIZE_IN_BYTES/i|0}VT.exports=aRr});var se=s((eOe,GT)=>{"use strict";var nRr=UT();GT.exports=nRr});var HT=s((tOe,DT)=>{"use strict";var sRr=ne(),uRr=se();function oRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(E=sRr(r.shape,r.strides,e.strides),y=E.sh,h=E.sx,q=E.sy,i=uRr(r.dtype,e.dtype),w=r.offset,A=e.offset,a=r.data,n=e.data,v=h[0],c=q[0],u=r.accessors[0],o=e.accessors[1],I=y[1];I>0;)for(I<i?(d=I,I=0):(d=i,I-=i),p=w+I*h[1],m=A+I*q[1],N=y[0];N>0;)for(N<i?(g=N,N=0):(g=i,N-=i),b=p+N*h[0],T=m+N*q[0],f=h[1]-g*h[0],l=q[1]-g*q[0],O=0;O<d;O++){for(S=0;S<g;S++)o(n,T,t(u(a,b))),b+=v,T+=c;b+=f,T+=l}}DT.exports=oRr});var WT=s((iOe,zT)=>{"use strict";var vRr=ne(),fRr=se();function cRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V;for(V=vRr(r.shape,r.strides,e.strides),q=V.sh,T=V.sx,S=V.sy,i=fRr(r.dtype,e.dtype),O=r.offset,N=e.offset,a=r.data,n=e.data,v=T[0],l=S[0],u=r.accessors[0],o=e.accessors[1],L=q[2];L>0;)for(L<i?(b=L,L=0):(b=i,L-=i),g=O+L*T[2],h=N+L*S[2],x=q[1];x>0;)for(x<i?(A=x,x=0):(A=i,x-=i),c=T[2]-A*T[1],m=S[2]-A*S[1],y=g+x*T[1],d=h+x*S[1],F=q[0];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),I=y+F*T[0],E=d+F*S[0],f=T[1]-w*T[0],p=S[1]-w*S[0],_=0;_<b;_++){for(j=0;j<A;j++){for(P=0;P<w;P++)o(n,E,t(u(a,I))),I+=v,E+=l;I+=f,E+=p}I+=c,E+=m}}zT.exports=cRr});var JT=s((aOe,XT)=>{"use strict";var lRr=ne(),pRr=se();function dRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z;for(z=lRr(r.shape,r.strides,e.strides),T=z.sh,E=z.sx,P=z.sy,i=pRr(r.dtype,e.dtype),j=r.offset,_=e.offset,a=r.data,n=e.data,v=E[0],p=P[0],u=r.accessors[0],o=e.accessors[1],H=T[3];H>0;)for(H<i?(I=H,H=0):(I=i,H-=i),q=j+H*E[3],b=_+H*P[3],U=T[2];U>0;)for(U<i?(N=U,U=0):(N=i,U-=i),l=E[3]-N*E[2],g=P[3]-N*P[2],h=q+U*E[2],A=b+U*P[2],M=T[1];M>0;)for(M<i?(O=M,M=0):(O=i,M-=i),c=E[2]-O*E[1],y=P[2]-O*P[1],d=h+M*E[1],w=A+M*P[1],k=T[0];k>0;)for(k<i?(S=k,k=0):(S=i,k-=i),F=d+k*E[0],x=w+k*P[0],f=E[1]-S*E[0],m=P[1]-S*P[0],R=0;R<I;R++){for(B=0;B<N;B++){for(V=0;V<O;V++){for(L=0;L<S;L++)o(n,x,t(u(a,F))),F+=v,x+=p;F+=f,x+=m}F+=c,x+=y}F+=l,x+=g}}XT.exports=dRr});var ZT=s((nOe,YT)=>{"use strict";var gRr=ne(),mRr=se();function yRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er;for(er=gRr(r.shape,r.strides,e.strides),I=er.sh,x=er.sx,L=er.sy,i=mRr(r.dtype,e.dtype),V=r.offset,B=e.offset,a=r.data,n=e.data,v=x[0],m=L[0],u=r.accessors[0],o=e.accessors[1],$=I[4];$>0;)for($<i?(F=$,$=0):(F=i,$-=i),b=V+$*x[4],N=B+$*L[4],J=I[3];J>0;)for(J<i?(_=J,J=0):(_=i,J-=i),p=x[4]-_*x[3],h=L[4]-_*L[3],A=b+J*x[3],O=N+J*L[3],X=I[2];X>0;)for(X<i?(j=X,X=0):(j=i,X-=i),l=x[3]-j*x[2],d=L[3]-j*L[2],w=A+X*x[2],S=O+X*L[2],Q=I[1];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=x[2]-P*x[1],g=L[2]-P*L[1],q=w+Q*x[1],T=S+Q*L[1],Z=I[0];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),R=q+Z*x[0],k=T+Z*L[0],f=x[1]-E*x[0],y=L[1]-E*L[0],Y=0;Y<F;Y++){for(z=0;z<_;z++){for(H=0;H<j;H++){for(U=0;U<P;U++){for(M=0;M<E;M++)o(n,k,t(u(a,R))),R+=v,k+=m;R+=f,k+=y}R+=c,k+=g}R+=l,k+=d}R+=p,k+=h}}YT.exports=yRr});var QT=s((sOe,$T)=>{"use strict";var hRr=ne(),qRr=se();function bRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir;for(ir=hRr(r.shape,r.strides,e.strides),_=ir.sh,k=ir.sx,M=ir.sy,i=qRr(r.dtype,e.dtype),U=r.offset,H=e.offset,a=r.data,n=e.data,v=k[0],y=M[0],u=r.accessors[0],o=e.accessors[1],fr=_[5];fr>0;)for(fr<i?(R=fr,fr=0):(R=i,fr-=i),O=U+fr*k[5],j=H+fr*M[5],ar=_[4];ar>0;)for(ar<i?(B=ar,ar=0):(B=i,ar-=i),m=k[5]-B*k[4],w=M[5]-B*M[4],S=O+ar*k[4],P=j+ar*M[4],tr=_[3];tr>0;)for(tr<i?(V=tr,tr=0):(V=i,tr-=i),p=k[4]-V*k[3],q=M[4]-V*M[3],T=S+tr*k[3],E=P+tr*M[3],rr=_[2];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=k[3]-L*k[2],h=M[3]-L*M[2],b=T+rr*k[2],I=E+rr*M[2],K=_[1];K>0;)for(K<i?(x=K,K=0):(x=i,K-=i),c=k[2]-x*k[1],d=M[2]-x*M[1],A=b+K*k[1],N=I+K*M[1],ur=_[0];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),z=A+ur*k[0],Y=N+ur*M[0],f=k[1]-F*k[0],g=M[1]-F*M[0],er=0;er<R;er++){for($=0;$<B;$++){for(J=0;J<V;J++){for(X=0;X<L;X++){for(Q=0;Q<x;Q++){for(Z=0;Z<F;Z++)o(n,Y,t(u(a,z))),z+=v,Y+=y;z+=f,Y+=g}z+=c,Y+=d}z+=l,Y+=h}z+=p,Y+=q}z+=m,Y+=w}}$T.exports=bRr});var rI=s((uOe,KT)=>{"use strict";var wRr=ne(),ERr=se();function NRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr;for(gr=wRr(r.shape,r.strides,e.strides),V=gr.sh,Y=gr.sx,Z=gr.sy,i=ERr(r.dtype,e.dtype),Q=r.offset,X=e.offset,a=r.data,n=e.data,v=Y[0],g=Z[0],u=r.accessors[0],o=e.accessors[1],lr=V[6];lr>0;)for(lr<i?(z=lr,lr=0):(z=i,lr-=i),E=Q+lr*Y[6],L=X+lr*Z[6],pr=V[5];pr>0;)for(pr<i?(H=pr,pr=0):(H=i,pr-=i),y=Y[6]-H*Y[5],b=Z[6]-H*Z[5],I=E+pr*Y[5],x=L+pr*Z[5],cr=V[4];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),m=Y[5]-U*Y[4],A=Z[5]-U*Z[4],N=I+cr*Y[4],F=x+cr*Z[4],or=V[3];or>0;)for(or<i?(M=or,or=0):(M=i,or-=i),p=Y[4]-M*Y[3],w=Z[4]-M*Z[3],O=N+or*Y[3],_=F+or*Z[3],sr=V[2];sr>0;)for(sr<i?(k=sr,sr=0):(k=i,sr-=i),l=Y[3]-k*Y[2],q=Z[3]-k*Z[2],S=O+sr*Y[2],j=_+sr*Z[2],nr=V[1];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=Y[2]-R*Y[1],h=Z[2]-R*Z[1],T=S+nr*Y[1],P=j+nr*Z[1],ir=V[0];ir>0;)for(ir<i?(B=ir,ir=0):(B=i,ir-=i),J=T+ir*Y[0],$=P+ir*Z[0],f=Y[1]-B*Y[0],d=Z[1]-B*Z[0],fr=0;fr<z;fr++){for(ar=0;ar<H;ar++){for(tr=0;tr<U;tr++){for(rr=0;rr<M;rr++){for(K=0;K<k;K++){for(ur=0;ur<R;ur++){for(er=0;er<B;er++)o(n,$,t(u(a,J))),J+=v,$+=g;J+=f,$+=d}J+=c,$+=h}J+=l,$+=q}J+=p,$+=w}J+=m,$+=A}J+=y,$+=b}}KT.exports=NRr});var tI=s((oOe,eI)=>{"use strict";var SRr=ne(),ORr=se();function ARr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br;for(Br=SRr(r.shape,r.strides,e.strides),M=Br.sh,$=Br.sx,er=Br.sy,i=ORr(r.dtype,e.dtype),ur=r.offset,K=e.offset,a=r.data,n=e.data,v=$[0],d=er[0],u=r.accessors[0],o=e.accessors[1],Pr=M[7];Pr>0;)for(Pr<i?(J=Pr,Pr=0):(J=i,Pr-=i),_=ur+Pr*$[7],k=K+Pr*er[7],wr=M[6];wr>0;)for(wr<i?(X=wr,wr=0):(X=i,wr-=i),g=$[7]-X*$[6],S=er[7]-X*er[6],j=_+wr*$[6],R=k+wr*er[6],_r=M[5];_r>0;)for(_r<i?(Q=_r,_r=0):(Q=i,_r-=i),y=$[6]-Q*$[5],T=er[6]-Q*er[5],P=j+_r*$[5],B=R+_r*er[5],Ar=M[4];Ar>0;)for(Ar<i?(Z=Ar,Ar=0):(Z=i,Ar-=i),m=$[5]-Z*$[4],b=er[5]-Z*er[4],E=P+Ar*$[4],V=B+Ar*er[4],xr=M[3];xr>0;)for(xr<i?(Y=xr,xr=0):(Y=i,xr-=i),p=$[4]-Y*$[3],A=er[4]-Y*er[3],I=E+xr*$[3],L=V+xr*er[3],Fr=M[2];Fr>0;)for(Fr<i?(z=Fr,Fr=0):(z=i,Fr-=i),l=$[3]-z*$[2],w=er[3]-z*er[2],N=I+Fr*$[2],x=L+Fr*er[2],gr=M[1];gr>0;)for(gr<i?(H=gr,gr=0):(H=i,gr-=i),c=$[2]-H*$[1],q=er[2]-H*er[1],O=N+gr*$[1],F=x+gr*er[1],lr=M[0];lr>0;)for(lr<i?(U=lr,lr=0):(U=i,lr-=i),rr=O+lr*$[0],tr=F+lr*er[0],f=$[1]-U*$[0],h=er[1]-U*er[0],pr=0;pr<J;pr++){for(cr=0;cr<X;cr++){for(or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<z;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++)o(n,tr,t(u(a,rr))),rr+=v,tr+=d;rr+=f,tr+=h}rr+=c,tr+=q}rr+=l,tr+=w}rr+=p,tr+=A}rr+=m,tr+=b}rr+=y,tr+=T}rr+=g,tr+=S}}eI.exports=ARr});var aI=s((vOe,iI)=>{"use strict";var _Rr=ne(),TRr=se();function IRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr,zr,Qr;for(Qr=_Rr(r.shape,r.strides,e.strides),Y=Qr.sh,tr=Qr.sx,ar=Qr.sy,i=TRr(r.dtype,e.dtype),fr=r.offset,ir=e.offset,a=r.data,n=e.data,v=tr[0],h=ar[0],u=r.accessors[0],o=e.accessors[1],zr=Y[8];zr>0;)for(zr<i?(rr=zr,zr=0):(rr=i,zr-=i),L=fr+zr*tr[8],z=ir+zr*ar[8],jr=Y[7];jr>0;)for(jr<i?(K=jr,jr=0):(K=i,jr-=i),d=tr[8]-K*tr[7],N=ar[8]-K*ar[7],x=L+jr*tr[7],H=z+jr*ar[7],Rr=Y[6];Rr>0;)for(Rr<i?(ur=Rr,Rr=0):(ur=i,Rr-=i),g=tr[7]-ur*tr[6],O=ar[7]-ur*ar[6],F=x+Rr*tr[6],U=H+Rr*ar[6],Cr=Y[5];Cr>0;)for(Cr<i?(er=Cr,Cr=0):(er=i,Cr-=i),y=tr[6]-er*tr[5],S=ar[6]-er*ar[5],_=F+Cr*tr[5],M=U+Cr*ar[5],kr=Y[4];kr>0;)for(kr<i?($=kr,kr=0):($=i,kr-=i),m=tr[5]-$*tr[4],T=ar[5]-$*ar[4],j=_+kr*tr[4],k=M+kr*ar[4],Xr=Y[3];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=tr[4]-J*tr[3],b=ar[4]-J*ar[3],P=j+Xr*tr[3],R=k+Xr*ar[3],Br=Y[2];Br>0;)for(Br<i?(X=Br,Br=0):(X=i,Br-=i),l=tr[3]-X*tr[2],A=ar[3]-X*ar[2],E=P+Br*tr[2],B=R+Br*ar[2],Pr=Y[1];Pr>0;)for(Pr<i?(Q=Pr,Pr=0):(Q=i,Pr-=i),c=tr[2]-Q*tr[1],w=ar[2]-Q*ar[1],I=E+Pr*tr[1],V=B+Pr*ar[1],wr=Y[0];wr>0;)for(wr<i?(Z=wr,wr=0):(Z=i,wr-=i),nr=I+wr*tr[0],sr=V+wr*ar[0],f=tr[1]-Z*tr[0],q=ar[1]-Z*ar[0],_r=0;_r<rr;_r++){for(Ar=0;Ar<K;Ar++){for(xr=0;xr<ur;xr++){for(Fr=0;Fr<er;Fr++){for(gr=0;gr<$;gr++){for(lr=0;lr<J;lr++){for(pr=0;pr<X;pr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++)o(n,sr,t(u(a,nr))),nr+=v,sr+=h;nr+=f,sr+=q}nr+=c,sr+=w}nr+=l,sr+=A}nr+=p,sr+=b}nr+=m,sr+=T}nr+=y,sr+=S}nr+=g,sr+=O}nr+=d,sr+=N}}iI.exports=IRr});var sI=s((fOe,nI)=>{"use strict";var RRr=ne(),LRr=se();function PRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr,zr,Qr,fe,ce,le,pe,Me,ei,I0;for(I0=RRr(r.shape,r.strides,e.strides),J=I0.sh,sr=I0.sx,or=I0.sy,i=LRr(r.dtype,e.dtype),cr=r.offset,pr=e.offset,a=r.data,n=e.data,v=sr[0],q=or[0],u=r.accessors[0],o=e.accessors[1],ei=J[9];ei>0;)for(ei<i?(nr=ei,ei=0):(nr=i,ei-=i),R=cr+ei*sr[9],X=pr+ei*or[9],Me=J[8];Me>0;)for(Me<i?(ir=Me,Me=0):(ir=i,Me-=i),h=sr[9]-ir*sr[8],E=or[9]-ir*or[8],B=R+Me*sr[8],Q=X+Me*or[8],pe=J[7];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),d=sr[8]-fr*sr[7],I=or[8]-fr*or[7],V=B+pe*sr[7],Z=Q+pe*or[7],le=J[6];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=sr[7]-ar*sr[6],N=or[7]-ar*or[6],L=V+le*sr[6],Y=Z+le*or[6],ce=J[5];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=sr[6]-tr*sr[5],O=or[6]-tr*or[5],x=L+ce*sr[5],z=Y+ce*or[5],fe=J[4];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=sr[5]-rr*sr[4],S=or[5]-rr*or[4],F=x+fe*sr[4],H=z+fe*or[4],Qr=J[3];Qr>0;)for(Qr<i?(K=Qr,Qr=0):(K=i,Qr-=i),p=sr[4]-K*sr[3],T=or[4]-K*or[3],_=F+Qr*sr[3],U=H+Qr*or[3],zr=J[2];zr>0;)for(zr<i?(ur=zr,zr=0):(ur=i,zr-=i),l=sr[3]-ur*sr[2],b=or[3]-ur*or[2],j=_+zr*sr[2],M=U+zr*or[2],jr=J[1];jr>0;)for(jr<i?(er=jr,jr=0):(er=i,jr-=i),c=sr[2]-er*sr[1],A=or[2]-er*or[1],P=j+jr*sr[1],k=M+jr*or[1],Rr=J[0];Rr>0;)for(Rr<i?($=Rr,Rr=0):($=i,Rr-=i),lr=P+Rr*sr[0],gr=k+Rr*or[0],f=sr[1]-$*sr[0],w=or[1]-$*or[0],Cr=0;Cr<nr;Cr++){for(kr=0;kr<ir;kr++){for(Xr=0;Xr<fr;Xr++){for(Br=0;Br<ar;Br++){for(Pr=0;Pr<tr;Pr++){for(wr=0;wr<rr;wr++){for(_r=0;_r<K;_r++){for(Ar=0;Ar<ur;Ar++){for(xr=0;xr<er;xr++){for(Fr=0;Fr<$;Fr++)o(n,gr,t(u(a,lr))),lr+=v,gr+=q;lr+=f,gr+=w}lr+=c,gr+=A}lr+=l,gr+=b}lr+=p,gr+=T}lr+=m,gr+=S}lr+=y,gr+=O}lr+=g,gr+=N}lr+=d,gr+=I}lr+=h,gr+=E}}nI.exports=PRr});var oI=s((cOe,uI)=>{"use strict";var FRr=ne(),xRr=se();function jRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(N=FRr(r.shape,r.strides,e.strides),p=N.sh,g=N.sx,d=N.sy,i=xRr(r.dtype,e.dtype),h=r.offset,q=e.offset,a=r.data,n=e.data,u=g[0],v=d[0],O=p[1];O>0;)for(O<i?(y=O,O=0):(y=i,O-=i),c=h+O*g[1],l=q+O*d[1],S=p[0];S>0;)for(S<i?(m=S,S=0):(m=i,S-=i),w=c+S*g[0],A=l+S*d[0],o=g[1]-m*g[0],f=d[1]-m*d[0],T=0;T<y;T++){for(b=0;b<m;b++)n[A]=t(a[w]),w+=u,A+=v;w+=o,A+=f}}uI.exports=jRr});var fI=s((lOe,vI)=>{"use strict";var MRr=ne(),BRr=se();function kRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x;for(x=MRr(r.shape,r.strides,e.strides),d=x.sh,A=x.sx,b=x.sy,i=BRr(r.dtype,e.dtype),T=r.offset,S=e.offset,a=r.data,n=e.data,u=A[0],f=b[0],F=d[2];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),m=T+F*A[2],g=S+F*b[2],_=d[1];_>0;)for(_<i?(q=_,_=0):(q=i,_-=i),v=A[2]-q*A[1],l=b[2]-q*b[1],p=m+_*A[1],y=g+_*b[1],j=d[0];j>0;)for(j<i?(h=j,j=0):(h=i,j-=i),O=p+j*A[0],N=y+j*b[0],o=A[1]-h*A[0],c=b[1]-h*b[0],P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++)n[N]=t(a[O]),O+=u,N+=f;O+=o,N+=c}O+=v,N+=l}}vI.exports=kRr});var lI=s((pOe,cI)=>{"use strict";var CRr=ne(),VRr=se();function URr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U;for(U=CRr(r.shape,r.strides,e.strides),A=U.sh,N=U.sx,I=U.sy,i=VRr(r.dtype,e.dtype),E=r.offset,P=e.offset,a=r.data,n=e.data,u=N[0],c=I[0],M=A[3];M>0;)for(M<i?(O=M,M=0):(O=i,M-=i),d=E+M*N[3],w=P+M*I[3],k=A[2];k>0;)for(k<i?(S=k,k=0):(S=i,k-=i),f=N[3]-S*N[2],m=I[3]-S*I[2],g=d+k*N[2],q=w+k*I[2],R=A[1];R>0;)for(R<i?(T=R,R=0):(T=i,R-=i),v=N[2]-T*N[1],p=I[2]-T*I[1],y=g+R*N[1],h=q+R*I[1],B=A[0];B>0;)for(B<i?(b=B,B=0):(b=i,B-=i),j=y+B*N[0],_=h+B*I[0],o=N[1]-b*N[0],l=I[1]-b*I[0],V=0;V<O;V++){for(L=0;L<S;L++){for(x=0;x<T;x++){for(F=0;F<b;F++)n[_]=t(a[j]),j+=u,_+=c;j+=o,_+=l}j+=v,_+=p}j+=f,_+=m}}cI.exports=URr});var dI=s((dOe,pI)=>{"use strict";var GRr=ne(),DRr=se();function HRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J;for(J=GRr(r.shape,r.strides,e.strides),O=J.sh,_=J.sx,F=J.sy,i=DRr(r.dtype,e.dtype),x=r.offset,L=e.offset,a=r.data,n=e.data,u=_[0],l=F[0],X=O[4];X>0;)for(X<i?(j=X,X=0):(j=i,X-=i),w=x+X*_[4],S=L+X*F[4],Q=O[3];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=_[4]-P*_[3],g=F[4]-P*F[3],q=w+Q*_[3],T=S+Q*F[3],Z=O[2];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),f=_[3]-E*_[2],y=F[3]-E*F[2],h=q+Z*_[2],b=T+Z*F[2],Y=O[1];Y>0;)for(Y<i?(I=Y,Y=0):(I=i,Y-=i),v=_[2]-I*_[1],m=F[2]-I*F[1],d=h+Y*_[1],A=b+Y*F[1],z=O[0];z>0;)for(z<i?(N=z,z=0):(N=i,z-=i),V=d+z*_[0],B=A+z*F[0],o=_[1]-N*_[0],p=F[1]-N*F[0],H=0;H<j;H++){for(U=0;U<P;U++){for(M=0;M<E;M++){for(k=0;k<I;k++){for(R=0;R<N;R++)n[B]=t(a[V]),V+=u,B+=l;V+=o,B+=p}V+=v,B+=m}V+=f,B+=y}V+=c,B+=g}}pI.exports=HRr});var mI=s((gOe,gI)=>{"use strict";var zRr=ne(),WRr=se();function XRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar;for(ar=zRr(r.shape,r.strides,e.strides),P=ar.sh,B=ar.sx,R=ar.sy,i=WRr(r.dtype,e.dtype),k=r.offset,M=e.offset,a=r.data,n=e.data,u=B[0],p=R[0],tr=P[5];tr>0;)for(tr<i?(V=tr,tr=0):(V=i,tr-=i),T=k+tr*B[5],E=M+tr*R[5],rr=P[4];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=B[5]-L*B[4],h=R[5]-L*R[4],b=T+rr*B[4],I=E+rr*R[4],K=P[3];K>0;)for(K<i?(x=K,K=0):(x=i,K-=i),c=B[4]-x*B[3],d=R[4]-x*R[3],A=b+K*B[3],N=I+K*R[3],ur=P[2];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),f=B[3]-F*B[2],g=R[3]-F*R[2],w=A+ur*B[2],O=N+ur*R[2],er=P[1];er>0;)for(er<i?(_=er,er=0):(_=i,er-=i),v=B[2]-_*B[1],y=R[2]-_*R[1],q=w+er*B[1],S=O+er*R[1],$=P[0];$>0;)for($<i?(j=$,$=0):(j=i,$-=i),U=q+$*B[0],H=S+$*R[0],o=B[1]-j*B[0],m=R[1]-j*R[0],J=0;J<V;J++){for(X=0;X<L;X++){for(Q=0;Q<x;Q++){for(Z=0;Z<F;Z++){for(Y=0;Y<_;Y++){for(z=0;z<j;z++)n[H]=t(a[U]),U+=u,H+=p;U+=o,H+=m}U+=v,H+=y}U+=f,H+=g}U+=c,H+=d}U+=l,H+=h}}gI.exports=XRr});var hI=s((mOe,yI)=>{"use strict";var JRr=ne(),YRr=se();function ZRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr;for(pr=JRr(r.shape,r.strides,e.strides),x=pr.sh,H=pr.sx,z=pr.sy,i=YRr(r.dtype,e.dtype),Y=r.offset,Z=e.offset,a=r.data,n=e.data,u=H[0],m=z[0],cr=x[6];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),N=Y+cr*H[6],F=Z+cr*z[6],or=x[5];or>0;)for(or<i?(M=or,or=0):(M=i,or-=i),p=H[6]-M*H[5],w=z[6]-M*z[5],O=N+or*H[5],_=F+or*z[5],sr=x[4];sr>0;)for(sr<i?(k=sr,sr=0):(k=i,sr-=i),l=H[5]-k*H[4],q=z[5]-k*z[4],S=O+sr*H[4],j=_+sr*z[4],nr=x[3];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=H[4]-R*H[3],h=z[4]-R*z[3],T=S+nr*H[3],P=j+nr*z[3],ir=x[2];ir>0;)for(ir<i?(B=ir,ir=0):(B=i,ir-=i),f=H[3]-B*H[2],d=z[3]-B*z[2],b=T+ir*H[2],E=P+ir*z[2],fr=x[1];fr>0;)for(fr<i?(V=fr,fr=0):(V=i,fr-=i),v=H[2]-V*H[1],g=z[2]-V*z[1],A=b+fr*H[1],I=E+fr*z[1],ar=x[0];ar>0;)for(ar<i?(L=ar,ar=0):(L=i,ar-=i),Q=A+ar*H[0],X=I+ar*z[0],o=H[1]-L*H[0],y=z[1]-L*z[0],tr=0;tr<U;tr++){for(rr=0;rr<M;rr++){for(K=0;K<k;K++){for(ur=0;ur<R;ur++){for(er=0;er<B;er++){for($=0;$<V;$++){for(J=0;J<L;J++)n[X]=t(a[Q]),Q+=u,X+=m;Q+=o,X+=y}Q+=v,X+=g}Q+=f,X+=d}Q+=c,X+=h}Q+=l,X+=q}Q+=p,X+=w}}yI.exports=ZRr});var bI=s((yOe,qI)=>{"use strict";var $Rr=ne(),QRr=se();function KRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr;for(wr=$Rr(r.shape,r.strides,e.strides),R=wr.sh,X=wr.sx,J=wr.sy,i=QRr(r.dtype,e.dtype),$=r.offset,er=e.offset,a=r.data,n=e.data,u=X[0],y=J[0],_r=R[7];_r>0;)for(_r<i?(Q=_r,_r=0):(Q=i,_r-=i),P=$+_r*X[7],B=er+_r*J[7],Ar=R[6];Ar>0;)for(Ar<i?(Z=Ar,Ar=0):(Z=i,Ar-=i),m=X[7]-Z*X[6],b=J[7]-Z*J[6],E=P+Ar*X[6],V=B+Ar*J[6],xr=R[5];xr>0;)for(xr<i?(Y=xr,xr=0):(Y=i,xr-=i),p=X[6]-Y*X[5],A=J[6]-Y*J[5],I=E+xr*X[5],L=V+xr*J[5],Fr=R[4];Fr>0;)for(Fr<i?(z=Fr,Fr=0):(z=i,Fr-=i),l=X[5]-z*X[4],w=J[5]-z*J[4],N=I+Fr*X[4],x=L+Fr*J[4],gr=R[3];gr>0;)for(gr<i?(H=gr,gr=0):(H=i,gr-=i),c=X[4]-H*X[3],q=J[4]-H*J[3],O=N+gr*X[3],F=x+gr*J[3],lr=R[2];lr>0;)for(lr<i?(U=lr,lr=0):(U=i,lr-=i),f=X[3]-U*X[2],h=J[3]-U*J[2],S=O+lr*X[2],_=F+lr*J[2],pr=R[1];pr>0;)for(pr<i?(M=pr,pr=0):(M=i,pr-=i),v=X[2]-M*X[1],d=J[2]-M*J[1],T=S+pr*X[1],j=_+pr*J[1],cr=R[0];cr>0;)for(cr<i?(k=cr,cr=0):(k=i,cr-=i),ur=T+cr*X[0],K=j+cr*J[0],o=X[1]-k*X[0],g=J[1]-k*J[0],or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<z;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++){for(tr=0;tr<M;tr++){for(rr=0;rr<k;rr++)n[K]=t(a[ur]),ur+=u,K+=y;ur+=o,K+=g}ur+=v,K+=d}ur+=f,K+=h}ur+=c,K+=q}ur+=l,K+=w}ur+=p,K+=A}ur+=m,K+=b}}qI.exports=KRr});var EI=s((hOe,wI)=>{"use strict";var rLr=ne(),eLr=se();function tLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr;for(jr=rLr(r.shape,r.strides,e.strides),H=jr.sh,K=jr.sx,rr=jr.sy,i=eLr(r.dtype,e.dtype),tr=r.offset,ar=e.offset,a=r.data,n=e.data,u=K[0],g=rr[0],Rr=H[8];Rr>0;)for(Rr<i?(ur=Rr,Rr=0):(ur=i,Rr-=i),F=tr+Rr*K[8],U=ar+Rr*rr[8],Cr=H[7];Cr>0;)for(Cr<i?(er=Cr,Cr=0):(er=i,Cr-=i),y=K[8]-er*K[7],S=rr[8]-er*rr[7],_=F+Cr*K[7],M=U+Cr*rr[7],kr=H[6];kr>0;)for(kr<i?($=kr,kr=0):($=i,kr-=i),m=K[7]-$*K[6],T=rr[7]-$*rr[6],j=_+kr*K[6],k=M+kr*rr[6],Xr=H[5];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=K[6]-J*K[5],b=rr[6]-J*rr[5],P=j+Xr*K[5],R=k+Xr*rr[5],Br=H[4];Br>0;)for(Br<i?(X=Br,Br=0):(X=i,Br-=i),l=K[5]-X*K[4],A=rr[5]-X*rr[4],E=P+Br*K[4],B=R+Br*rr[4],Pr=H[3];Pr>0;)for(Pr<i?(Q=Pr,Pr=0):(Q=i,Pr-=i),c=K[4]-Q*K[3],w=rr[4]-Q*rr[3],I=E+Pr*K[3],V=B+Pr*rr[3],wr=H[2];wr>0;)for(wr<i?(Z=wr,wr=0):(Z=i,wr-=i),f=K[3]-Z*K[2],q=rr[3]-Z*rr[2],N=I+wr*K[2],L=V+wr*rr[2],_r=H[1];_r>0;)for(_r<i?(Y=_r,_r=0):(Y=i,_r-=i),v=K[2]-Y*K[1],h=rr[2]-Y*rr[1],O=N+_r*K[1],x=L+_r*rr[1],Ar=H[0];Ar>0;)for(Ar<i?(z=Ar,Ar=0):(z=i,Ar-=i),fr=O+Ar*K[0],ir=x+Ar*rr[0],o=K[1]-z*K[0],d=rr[1]-z*rr[0],xr=0;xr<ur;xr++){for(Fr=0;Fr<er;Fr++){for(gr=0;gr<$;gr++){for(lr=0;lr<J;lr++){for(pr=0;pr<X;pr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++){for(sr=0;sr<Y;sr++){for(nr=0;nr<z;nr++)n[ir]=t(a[fr]),fr+=u,ir+=g;fr+=o,ir+=d}fr+=v,ir+=h}fr+=f,ir+=q}fr+=c,ir+=w}fr+=l,ir+=A}fr+=p,ir+=b}fr+=m,ir+=T}fr+=y,ir+=S}}wI.exports=tLr});var SI=s((qOe,NI)=>{"use strict";var iLr=ne(),aLr=se();function nLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr,zr,Qr,fe,ce,le,pe,Me;for(Me=iLr(r.shape,r.strides,e.strides),Q=Me.sh,ir=Me.sx,nr=Me.sy,i=aLr(r.dtype,e.dtype),sr=r.offset,or=e.offset,a=r.data,n=e.data,u=ir[0],d=nr[0],pe=Q[9];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),V=sr+pe*ir[9],Z=or+pe*nr[9],le=Q[8];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=ir[9]-ar*ir[8],N=nr[9]-ar*nr[8],L=V+le*ir[8],Y=Z+le*nr[8],ce=Q[7];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=ir[8]-tr*ir[7],O=nr[8]-tr*nr[7],x=L+ce*ir[7],z=Y+ce*nr[7],fe=Q[6];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=ir[7]-rr*ir[6],S=nr[7]-rr*nr[6],F=x+fe*ir[6],H=z+fe*nr[6],Qr=Q[5];Qr>0;)for(Qr<i?(K=Qr,Qr=0):(K=i,Qr-=i),p=ir[6]-K*ir[5],T=nr[6]-K*nr[5],_=F+Qr*ir[5],U=H+Qr*nr[5],zr=Q[4];zr>0;)for(zr<i?(ur=zr,zr=0):(ur=i,zr-=i),l=ir[5]-ur*ir[4],b=nr[5]-ur*nr[4],j=_+zr*ir[4],M=U+zr*nr[4],jr=Q[3];jr>0;)for(jr<i?(er=jr,jr=0):(er=i,jr-=i),c=ir[4]-er*ir[3],A=nr[4]-er*nr[3],P=j+jr*ir[3],k=M+jr*nr[3],Rr=Q[2];Rr>0;)for(Rr<i?($=Rr,Rr=0):($=i,Rr-=i),f=ir[3]-$*ir[2],w=nr[3]-$*nr[2],E=P+Rr*ir[2],R=k+Rr*nr[2],Cr=Q[1];Cr>0;)for(Cr<i?(J=Cr,Cr=0):(J=i,Cr-=i),v=ir[2]-J*ir[1],q=nr[2]-J*nr[1],I=E+Cr*ir[1],B=R+Cr*nr[1],kr=Q[0];kr>0;)for(kr<i?(X=kr,kr=0):(X=i,kr-=i),cr=I+kr*ir[0],pr=B+kr*nr[0],o=ir[1]-X*ir[0],h=nr[1]-X*nr[0],Xr=0;Xr<fr;Xr++){for(Br=0;Br<ar;Br++){for(Pr=0;Pr<tr;Pr++){for(wr=0;wr<rr;wr++){for(_r=0;_r<K;_r++){for(Ar=0;Ar<ur;Ar++){for(xr=0;xr<er;xr++){for(Fr=0;Fr<$;Fr++){for(gr=0;gr<J;gr++){for(lr=0;lr<X;lr++)n[pr]=t(a[cr]),cr+=u,pr+=d;cr+=o,pr+=h}cr+=v,pr+=q}cr+=f,pr+=w}cr+=c,pr+=A}cr+=l,pr+=b}cr+=p,pr+=T}cr+=m,pr+=S}cr+=y,pr+=O}cr+=g,pr+=N}}NI.exports=nLr});var AI=s((bOe,OI)=>{"use strict";function sLr(r,e,t){e.accessors[1](e.data,e.offset,t(r.accessors[0](r.data,r.offset)))}OI.exports=sLr});var TI=s((wOe,_I)=>{"use strict";function uLr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(f=r.shape[0],o=r.strides[0],v=e.strides[0],c=r.offset,l=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],p=0;p<f;p++)u(a,l,t(n(i,c))),c+=o,l+=v}_I.exports=uLr});var RI=s((EOe,II)=>{"use strict";function oLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;for(l=r.shape,y=r.strides,g=e.strides,r.order==="row-major"?(p=l[1],m=l[0],o=y[1],v=y[0]-p*y[1],f=g[1],c=g[0]-p*g[1]):(p=l[0],m=l[1],o=y[0],v=y[1]-p*y[0],f=g[0],c=g[1]-p*g[0]),d=r.offset,h=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],w=0;w<m;w++){for(q=0;q<p;q++)u(a,h,t(n(i,d))),d+=o,h+=f;d+=v,h+=c}}II.exports=oLr});var PI=s((NOe,LI)=>{"use strict";function vLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;for(m=r.shape,h=r.strides,q=e.strides,r.order==="row-major"?(y=m[2],g=m[1],d=m[0],o=h[2],v=h[1]-y*h[2],f=h[0]-g*h[1],c=q[2],l=q[1]-y*q[2],p=q[0]-g*q[1]):(y=m[0],g=m[1],d=m[2],o=h[0],v=h[1]-y*h[0],f=h[2]-g*h[1],c=q[0],l=q[1]-y*q[0],p=q[2]-g*q[1]),w=r.offset,A=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],S=0;S<d;S++){for(T=0;T<g;T++){for(b=0;b<y;b++)u(a,A,t(n(i,w))),w+=o,A+=c;w+=v,A+=l}w+=f,A+=p}}LI.exports=vLr});var xI=s((SOe,FI)=>{"use strict";function fLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(g=r.shape,A=r.strides,b=e.strides,r.order==="row-major"?(d=g[3],h=g[2],q=g[1],w=g[0],o=A[3],v=A[2]-d*A[3],f=A[1]-h*A[2],c=A[0]-q*A[1],l=b[3],p=b[2]-d*b[3],m=b[1]-h*b[2],y=b[0]-q*b[1]):(d=g[0],h=g[1],q=g[2],w=g[3],o=A[0],v=A[1]-d*A[0],f=A[2]-h*A[1],c=A[3]-q*A[2],l=b[0],p=b[1]-d*b[0],m=b[2]-h*b[1],y=b[3]-q*b[2]),T=r.offset,S=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],E=0;E<w;E++){for(I=0;I<q;I++){for(N=0;N<h;N++){for(O=0;O<d;O++)u(a,S,t(n(i,T))),T+=o,S+=l;T+=v,S+=p}T+=f,S+=m}T+=c,S+=y}}FI.exports=fLr});var MI=s((OOe,jI)=>{"use strict";function cLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F;for(h=r.shape,S=r.strides,O=e.strides,r.order==="row-major"?(q=h[4],w=h[3],A=h[2],b=h[1],T=h[0],o=S[4],v=S[3]-q*S[4],f=S[2]-w*S[3],c=S[1]-A*S[2],l=S[0]-b*S[1],p=O[4],m=O[3]-q*O[4],y=O[2]-w*O[3],g=O[1]-A*O[2],d=O[0]-b*O[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],o=S[0],v=S[1]-q*S[0],f=S[2]-w*S[1],c=S[3]-A*S[2],l=S[4]-b*S[3],p=O[0],m=O[1]-q*O[0],y=O[2]-w*O[1],g=O[3]-A*O[2],d=O[4]-b*O[3]),N=r.offset,I=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],F=0;F<T;F++){for(_=0;_<b;_++){for(j=0;j<A;j++){for(P=0;P<w;P++){for(E=0;E<q;E++)u(a,I,t(n(i,N))),N+=o,I+=p;N+=v,I+=m}N+=f,I+=y}N+=c,I+=g}N+=l,I+=d}}jI.exports=cLr});var kI=s((AOe,BI)=>{"use strict";function lLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B;for(w=r.shape,I=r.strides,E=e.strides,r.order==="row-major"?(A=w[5],b=w[4],T=w[3],S=w[2],O=w[1],N=w[0],o=I[5],v=I[4]-A*I[5],f=I[3]-b*I[4],c=I[2]-T*I[3],l=I[1]-S*I[2],p=I[0]-O*I[1],m=E[5],y=E[4]-A*E[5],g=E[3]-b*E[4],d=E[2]-T*E[3],h=E[1]-S*E[2],q=E[0]-O*E[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],o=I[0],v=I[1]-A*I[0],f=I[2]-b*I[1],c=I[3]-T*I[2],l=I[4]-S*I[3],p=I[5]-O*I[4],m=E[0],y=E[1]-A*E[0],g=E[2]-b*E[1],d=E[3]-T*E[2],h=E[4]-S*E[3],q=E[5]-O*E[4]),P=r.offset,j=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],B=0;B<N;B++){for(V=0;V<O;V++){for(L=0;L<S;L++){for(x=0;x<T;x++){for(F=0;F<b;F++){for(_=0;_<A;_++)u(a,j,t(n(i,P))),P+=o,j+=m;P+=v,j+=y}P+=f,j+=g}P+=c,j+=d}P+=l,j+=h}P+=p,j+=q}}BI.exports=lLr});var VI=s((_Oe,CI)=>{"use strict";function pLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U;for(b=r.shape,j=r.strides,_=e.strides,r.order==="row-major"?(T=b[6],S=b[5],O=b[4],N=b[3],I=b[2],E=b[1],P=b[0],o=j[6],v=j[5]-T*j[6],f=j[4]-S*j[5],c=j[3]-O*j[4],l=j[2]-N*j[3],p=j[1]-I*j[2],m=j[0]-E*j[1],y=_[6],g=_[5]-T*_[6],d=_[4]-S*_[5],h=_[3]-O*_[4],q=_[2]-N*_[3],w=_[1]-I*_[2],A=_[0]-E*_[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],o=j[0],v=j[1]-T*j[0],f=j[2]-S*j[1],c=j[3]-O*j[2],l=j[4]-N*j[3],p=j[5]-I*j[4],m=j[6]-E*j[5],y=_[0],g=_[1]-T*_[0],d=_[2]-S*_[1],h=_[3]-O*_[2],q=_[4]-N*_[3],w=_[5]-I*_[4],A=_[6]-E*_[5]),F=r.offset,x=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],U=0;U<P;U++){for(M=0;M<E;M++){for(k=0;k<I;k++){for(R=0;R<N;R++){for(B=0;B<O;B++){for(V=0;V<S;V++){for(L=0;L<T;L++)u(a,x,t(n(i,F))),F+=o,x+=y;F+=v,x+=g}F+=f,x+=d}F+=c,x+=h}F+=l,x+=q}F+=p,x+=w}F+=m,x+=A}}CI.exports=pLr});var GI=s((TOe,UI)=>{"use strict";function dLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z;for(S=r.shape,x=r.strides,L=e.strides,r.order==="row-major"?(O=S[7],N=S[6],I=S[5],E=S[4],P=S[3],j=S[2],_=S[1],F=S[0],o=x[7],v=x[6]-O*x[7],f=x[5]-N*x[6],c=x[4]-I*x[5],l=x[3]-E*x[4],p=x[2]-P*x[3],m=x[1]-j*x[2],y=x[0]-_*x[1],g=L[7],d=L[6]-O*L[7],h=L[5]-N*L[6],q=L[4]-I*L[5],w=L[3]-E*L[4],A=L[2]-P*L[3],b=L[1]-j*L[2],T=L[0]-_*L[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],j=S[5],_=S[6],F=S[7],o=x[0],v=x[1]-O*x[0],f=x[2]-N*x[1],c=x[3]-I*x[2],l=x[4]-E*x[3],p=x[5]-P*x[4],m=x[6]-j*x[5],y=x[7]-_*x[6],g=L[0],d=L[1]-O*L[0],h=L[2]-N*L[1],q=L[3]-I*L[2],w=L[4]-E*L[3],A=L[5]-P*L[4],b=L[6]-j*L[5],T=L[7]-_*L[6]),V=r.offset,B=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],Z=0;Z<F;Z++){for(Y=0;Y<_;Y++){for(z=0;z<j;z++){for(H=0;H<P;H++){for(U=0;U<E;U++){for(M=0;M<I;M++){for(k=0;k<N;k++){for(R=0;R<O;R++)u(a,B,t(n(i,V))),V+=o,B+=g;V+=v,B+=d}V+=f,B+=h}V+=c,B+=q}V+=l,B+=w}V+=p,B+=A}V+=m,B+=b}V+=y,B+=T}}UI.exports=dLr});var HI=s((IOe,DI)=>{"use strict";function gLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$;for(N=r.shape,B=r.strides,R=e.strides,r.order==="row-major"?(I=N[8],E=N[7],P=N[6],j=N[5],_=N[4],F=N[3],x=N[2],L=N[1],V=N[0],o=B[8],v=B[7]-I*B[8],f=B[6]-E*B[7],c=B[5]-P*B[6],l=B[4]-j*B[5],p=B[3]-_*B[4],m=B[2]-F*B[3],y=B[1]-x*B[2],g=B[0]-L*B[1],d=R[8],h=R[7]-I*R[8],q=R[6]-E*R[7],w=R[5]-P*R[6],A=R[4]-j*R[5],b=R[3]-_*R[4],T=R[2]-F*R[3],S=R[1]-x*R[2],O=R[0]-L*R[1]):(I=N[0],E=N[1],P=N[2],j=N[3],_=N[4],F=N[5],x=N[6],L=N[7],V=N[8],o=B[0],v=B[1]-I*B[0],f=B[2]-E*B[1],c=B[3]-P*B[2],l=B[4]-j*B[3],p=B[5]-_*B[4],m=B[6]-F*B[5],y=B[7]-x*B[6],g=B[8]-L*B[7],d=R[0],h=R[1]-I*R[0],q=R[2]-E*R[1],w=R[3]-P*R[2],A=R[4]-j*R[3],b=R[5]-_*R[4],T=R[6]-F*R[5],S=R[7]-x*R[6],O=R[8]-L*R[7]),k=r.offset,M=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],$=0;$<V;$++){for(J=0;J<L;J++){for(X=0;X<x;X++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(Y=0;Y<j;Y++){for(z=0;z<P;z++){for(H=0;H<E;H++){for(U=0;U<I;U++)u(a,M,t(n(i,k))),k+=o,M+=d;k+=v,M+=h}k+=f,M+=q}k+=c,M+=w}k+=l,M+=A}k+=p,M+=b}k+=m,M+=T}k+=y,M+=S}k+=g,M+=O}}DI.exports=gLr});var WI=s((ROe,zI)=>{"use strict";function mLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr;for(E=r.shape,M=r.strides,U=e.strides,r.order==="row-major"?(P=E[9],j=E[8],_=E[7],F=E[6],x=E[5],L=E[4],V=E[3],B=E[2],R=E[1],k=E[0],o=M[9],v=M[8]-P*M[9],f=M[7]-j*M[8],c=M[6]-_*M[7],l=M[5]-F*M[6],p=M[4]-x*M[5],m=M[3]-L*M[4],y=M[2]-V*M[3],g=M[1]-B*M[2],d=M[0]-R*M[1],h=U[9],q=U[8]-P*U[9],w=U[7]-j*U[8],A=U[6]-_*U[7],b=U[5]-F*U[6],T=U[4]-x*U[5],S=U[3]-L*U[4],O=U[2]-V*U[3],N=U[1]-B*U[2],I=U[0]-R*U[1]):(P=E[0],j=E[1],_=E[2],F=E[3],x=E[4],L=E[5],V=E[6],B=E[7],R=E[8],k=E[9],o=M[0],v=M[1]-P*M[0],f=M[2]-j*M[1],c=M[3]-_*M[2],l=M[4]-F*M[3],p=M[5]-x*M[4],m=M[6]-L*M[5],y=M[7]-V*M[6],g=M[8]-B*M[7],d=M[9]-R*M[8],h=U[0],q=U[1]-P*U[0],w=U[2]-j*U[1],A=U[3]-_*U[2],b=U[4]-F*U[3],T=U[5]-x*U[4],S=U[6]-L*U[5],O=U[7]-V*U[6],N=U[8]-B*U[7],I=U[9]-R*U[8]),H=r.offset,z=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],rr=0;rr<k;rr++){for(K=0;K<R;K++){for(ur=0;ur<B;ur++){for(er=0;er<V;er++){for($=0;$<L;$++){for(J=0;J<x;J++){for(X=0;X<F;X++){for(Q=0;Q<_;Q++){for(Z=0;Z<j;Z++){for(Y=0;Y<P;Y++)u(a,z,t(n(i,H))),H+=o,z+=h;H+=v,z+=q}H+=f,z+=w}H+=c,z+=A}H+=l,z+=b}H+=p,z+=T}H+=m,z+=S}H+=y,z+=O}H+=g,z+=N}H+=d,z+=I}}zI.exports=mLr});var JI=s((LOe,XI)=>{"use strict";var yLr=C();function hLr(r,e,t,i,a,n){var u,o,v,f,c;for(u=r.length,o=1,c=0;c<u;c++)o*=r[c];if(n==="clamp")a<0?a=0:a>=o&&(a=o-1);else if(n==="wrap")a<0?(a+=o,a<0&&(a%=o,a!==0&&(a+=o))):a>=o&&(a-=o,a>=o&&(a%=o));else if(a<0||a>=o)throw new RangeError(yLr("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",o,a));if(v=t,i==="column-major"){for(c=0;c<u;c++)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}for(c=u-1;c>=0;c--)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}XI.exports=hLr});var Qv=s((POe,YI)=>{"use strict";var qLr=JI();YI.exports=qLr});var KI=s((FOe,QI)=>{"use strict";var bLr=ft(),ZI=Qv(),$I="throw";function wLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(c=r.shape,o=bLr(c),i=r.data,a=e.data,l=r.strides,p=e.strides,m=r.offset,y=e.offset,n=r.order,u=e.order,v=r.accessors[0],f=e.accessors[1],h=0;h<o;h++)g=ZI(c,l,m,n,h,$I),d=ZI(c,p,y,u,h,$I),f(a,d,t(v(i,g)))}QI.exports=wLr});var eR=s((xOe,rR)=>{"use strict";function ELr(r,e,t){e.data[e.offset]=t(r.data[r.offset])}rR.exports=ELr});var iR=s((jOe,tR)=>{"use strict";function NLr(r,e,t){var i,a,n,u,o,v,f,c;for(o=r.shape[0],n=r.strides[0],u=e.strides[0],v=r.offset,f=e.offset,i=r.data,a=e.data,c=0;c<o;c++)a[f]=t(i[v]),v+=n,f+=u}tR.exports=NLr});var nR=s((MOe,aR)=>{"use strict";function SLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(f=r.shape,p=r.strides,m=e.strides,r.order==="row-major"?(c=f[1],l=f[0],n=p[1],u=p[0]-c*p[1],o=m[1],v=m[0]-c*m[1]):(c=f[0],l=f[1],n=p[0],u=p[1]-c*p[0],o=m[0],v=m[1]-c*m[0]),y=r.offset,g=e.offset,i=r.data,a=e.data,h=0;h<l;h++){for(d=0;d<c;d++)a[g]=t(i[y]),y+=n,g+=o;y+=u,g+=v}}aR.exports=SLr});var uR=s((BOe,sR)=>{"use strict";function OLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b;for(l=r.shape,g=r.strides,d=e.strides,r.order==="row-major"?(p=l[2],m=l[1],y=l[0],n=g[2],u=g[1]-p*g[2],o=g[0]-m*g[1],v=d[2],f=d[1]-p*d[2],c=d[0]-m*d[1]):(p=l[0],m=l[1],y=l[2],n=g[0],u=g[1]-p*g[0],o=g[2]-m*g[1],v=d[0],f=d[1]-p*d[0],c=d[2]-m*d[1]),h=r.offset,q=e.offset,i=r.data,a=e.data,b=0;b<y;b++){for(A=0;A<m;A++){for(w=0;w<p;w++)a[q]=t(i[h]),h+=n,q+=v;h+=u,q+=f}h+=o,q+=c}}sR.exports=OLr});var vR=s((kOe,oR)=>{"use strict";function ALr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(m=r.shape,q=r.strides,w=e.strides,r.order==="row-major"?(y=m[3],g=m[2],d=m[1],h=m[0],n=q[3],u=q[2]-y*q[3],o=q[1]-g*q[2],v=q[0]-d*q[1],f=w[3],c=w[2]-y*w[3],l=w[1]-g*w[2],p=w[0]-d*w[1]):(y=m[0],g=m[1],d=m[2],h=m[3],n=q[0],u=q[1]-y*q[0],o=q[2]-g*q[1],v=q[3]-d*q[2],f=w[0],c=w[1]-y*w[0],l=w[2]-g*w[1],p=w[3]-d*w[2]),A=r.offset,b=e.offset,i=r.data,a=e.data,N=0;N<h;N++){for(O=0;O<d;O++){for(S=0;S<g;S++){for(T=0;T<y;T++)a[b]=t(i[A]),A+=n,b+=f;A+=u,b+=c}A+=o,b+=l}A+=v,b+=p}}oR.exports=ALr});var cR=s((COe,fR)=>{"use strict";function _Lr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j;for(g=r.shape,b=r.strides,T=e.strides,r.order==="row-major"?(d=g[4],h=g[3],q=g[2],w=g[1],A=g[0],n=b[4],u=b[3]-d*b[4],o=b[2]-h*b[3],v=b[1]-q*b[2],f=b[0]-w*b[1],c=T[4],l=T[3]-d*T[4],p=T[2]-h*T[3],m=T[1]-q*T[2],y=T[0]-w*T[1]):(d=g[0],h=g[1],q=g[2],w=g[3],A=g[4],n=b[0],u=b[1]-d*b[0],o=b[2]-h*b[1],v=b[3]-q*b[2],f=b[4]-w*b[3],c=T[0],l=T[1]-d*T[0],p=T[2]-h*T[1],m=T[3]-q*T[2],y=T[4]-w*T[3]),S=r.offset,O=e.offset,i=r.data,a=e.data,j=0;j<A;j++){for(P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++){for(N=0;N<d;N++)a[O]=t(i[S]),S+=n,O+=c;S+=u,O+=l}S+=o,O+=p}S+=v,O+=m}S+=f,O+=y}}fR.exports=_Lr});var pR=s((VOe,lR)=>{"use strict";function TLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L;for(h=r.shape,O=r.strides,N=e.strides,r.order==="row-major"?(q=h[5],w=h[4],A=h[3],b=h[2],T=h[1],S=h[0],n=O[5],u=O[4]-q*O[5],o=O[3]-w*O[4],v=O[2]-A*O[3],f=O[1]-b*O[2],c=O[0]-T*O[1],l=N[5],p=N[4]-q*N[5],m=N[3]-w*N[4],y=N[2]-A*N[3],g=N[1]-b*N[2],d=N[0]-T*N[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],S=h[5],n=O[0],u=O[1]-q*O[0],o=O[2]-w*O[1],v=O[3]-A*O[2],f=O[4]-b*O[3],c=O[5]-T*O[4],l=N[0],p=N[1]-q*N[0],m=N[2]-w*N[1],y=N[3]-A*N[2],g=N[4]-b*N[3],d=N[5]-T*N[4]),I=r.offset,E=e.offset,i=r.data,a=e.data,L=0;L<S;L++){for(x=0;x<T;x++){for(F=0;F<b;F++){for(_=0;_<A;_++){for(j=0;j<w;j++){for(P=0;P<q;P++)a[E]=t(i[I]),I+=n,E+=l;I+=u,E+=p}I+=o,E+=m}I+=v,E+=y}I+=f,E+=g}I+=c,E+=d}}lR.exports=TLr});var gR=s((UOe,dR)=>{"use strict";function ILr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k;for(w=r.shape,E=r.strides,P=e.strides,r.order==="row-major"?(A=w[6],b=w[5],T=w[4],S=w[3],O=w[2],N=w[1],I=w[0],n=E[6],u=E[5]-A*E[6],o=E[4]-b*E[5],v=E[3]-T*E[4],f=E[2]-S*E[3],c=E[1]-O*E[2],l=E[0]-N*E[1],p=P[6],m=P[5]-A*P[6],y=P[4]-b*P[5],g=P[3]-T*P[4],d=P[2]-S*P[3],h=P[1]-O*P[2],q=P[0]-N*P[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],I=w[6],n=E[0],u=E[1]-A*E[0],o=E[2]-b*E[1],v=E[3]-T*E[2],f=E[4]-S*E[3],c=E[5]-O*E[4],l=E[6]-N*E[5],p=P[0],m=P[1]-A*P[0],y=P[2]-b*P[1],g=P[3]-T*P[2],d=P[4]-S*P[3],h=P[5]-O*P[4],q=P[6]-N*P[5]),j=r.offset,_=e.offset,i=r.data,a=e.data,k=0;k<I;k++){for(R=0;R<N;R++){for(B=0;B<O;B++){for(V=0;V<S;V++){for(L=0;L<T;L++){for(x=0;x<b;x++){for(F=0;F<A;F++)a[_]=t(i[j]),j+=n,_+=p;j+=u,_+=m}j+=o,_+=y}j+=v,_+=g}j+=f,_+=d}j+=c,_+=h}j+=l,_+=q}}dR.exports=ILr});var yR=s((GOe,mR)=>{"use strict";function RLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z;for(b=r.shape,_=r.strides,F=e.strides,r.order==="row-major"?(T=b[7],S=b[6],O=b[5],N=b[4],I=b[3],E=b[2],P=b[1],j=b[0],n=_[7],u=_[6]-T*_[7],o=_[5]-S*_[6],v=_[4]-O*_[5],f=_[3]-N*_[4],c=_[2]-I*_[3],l=_[1]-E*_[2],p=_[0]-P*_[1],m=F[7],y=F[6]-T*F[7],g=F[5]-S*F[6],d=F[4]-O*F[5],h=F[3]-N*F[4],q=F[2]-I*F[3],w=F[1]-E*F[2],A=F[0]-P*F[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],j=b[7],n=_[0],u=_[1]-T*_[0],o=_[2]-S*_[1],v=_[3]-O*_[2],f=_[4]-N*_[3],c=_[5]-I*_[4],l=_[6]-E*_[5],p=_[7]-P*_[6],m=F[0],y=F[1]-T*F[0],g=F[2]-S*F[1],d=F[3]-O*F[2],h=F[4]-N*F[3],q=F[5]-I*F[4],w=F[6]-E*F[5],A=F[7]-P*F[6]),x=r.offset,L=e.offset,i=r.data,a=e.data,z=0;z<j;z++){for(H=0;H<P;H++){for(U=0;U<E;U++){for(M=0;M<I;M++){for(k=0;k<N;k++){for(R=0;R<O;R++){for(B=0;B<S;B++){for(V=0;V<T;V++)a[L]=t(i[x]),x+=n,L+=m;x+=u,L+=y}x+=o,L+=g}x+=v,L+=d}x+=f,L+=h}x+=c,L+=q}x+=l,L+=w}x+=p,L+=A}}mR.exports=RLr});var qR=s((DOe,hR)=>{"use strict";function LLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X;for(S=r.shape,L=r.strides,V=e.strides,r.order==="row-major"?(O=S[8],N=S[7],I=S[6],E=S[5],P=S[4],j=S[3],_=S[2],F=S[1],x=S[0],n=L[8],u=L[7]-O*L[8],o=L[6]-N*L[7],v=L[5]-I*L[6],f=L[4]-E*L[5],c=L[3]-P*L[4],l=L[2]-j*L[3],p=L[1]-_*L[2],m=L[0]-F*L[1],y=V[8],g=V[7]-O*V[8],d=V[6]-N*V[7],h=V[5]-I*V[6],q=V[4]-E*V[5],w=V[3]-P*V[4],A=V[2]-j*V[3],b=V[1]-_*V[2],T=V[0]-F*V[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],j=S[5],_=S[6],F=S[7],x=S[8],n=L[0],u=L[1]-O*L[0],o=L[2]-N*L[1],v=L[3]-I*L[2],f=L[4]-E*L[3],c=L[5]-P*L[4],l=L[6]-j*L[5],p=L[7]-_*L[6],m=L[8]-F*L[7],y=V[0],g=V[1]-O*V[0],d=V[2]-N*V[1],h=V[3]-I*V[2],q=V[4]-E*V[3],w=V[5]-P*V[4],A=V[6]-j*V[5],b=V[7]-_*V[6],T=V[8]-F*V[7]),B=r.offset,R=e.offset,i=r.data,a=e.data,X=0;X<x;X++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(Y=0;Y<j;Y++){for(z=0;z<P;z++){for(H=0;H<E;H++){for(U=0;U<I;U++){for(M=0;M<N;M++){for(k=0;k<O;k++)a[R]=t(i[B]),B+=n,R+=y;B+=u,R+=g}B+=o,R+=d}B+=v,R+=h}B+=f,R+=q}B+=c,R+=w}B+=l,R+=A}B+=p,R+=b}B+=m,R+=T}}hR.exports=LLr});var wR=s((HOe,bR)=>{"use strict";function PLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur;for(N=r.shape,R=r.strides,k=e.strides,r.order==="row-major"?(I=N[9],E=N[8],P=N[7],j=N[6],_=N[5],F=N[4],x=N[3],L=N[2],V=N[1],B=N[0],n=R[9],u=R[8]-I*R[9],o=R[7]-E*R[8],v=R[6]-P*R[7],f=R[5]-j*R[6],c=R[4]-_*R[5],l=R[3]-F*R[4],p=R[2]-x*R[3],m=R[1]-L*R[2],y=R[0]-V*R[1],g=k[9],d=k[8]-I*k[9],h=k[7]-E*k[8],q=k[6]-P*k[7],w=k[5]-j*k[6],A=k[4]-_*k[5],b=k[3]-F*k[4],T=k[2]-x*k[3],S=k[1]-L*k[2],O=k[0]-V*k[1]):(I=N[0],E=N[1],P=N[2],j=N[3],_=N[4],F=N[5],x=N[6],L=N[7],V=N[8],B=N[9],n=R[0],u=R[1]-I*R[0],o=R[2]-E*R[1],v=R[3]-P*R[2],f=R[4]-j*R[3],c=R[5]-_*R[4],l=R[6]-F*R[5],p=R[7]-x*R[6],m=R[8]-L*R[7],y=R[9]-V*R[8],g=k[0],d=k[1]-I*k[0],h=k[2]-E*k[1],q=k[3]-P*k[2],w=k[4]-j*k[3],A=k[5]-_*k[4],b=k[6]-F*k[5],T=k[7]-x*k[6],S=k[8]-L*k[7],O=k[9]-V*k[8]),M=r.offset,U=e.offset,i=r.data,a=e.data,ur=0;ur<B;ur++){for(er=0;er<V;er++){for($=0;$<L;$++){for(J=0;J<x;J++){for(X=0;X<F;X++){for(Q=0;Q<_;Q++){for(Z=0;Z<j;Z++){for(Y=0;Y<P;Y++){for(z=0;z<E;z++){for(H=0;H<I;H++)a[U]=t(i[M]),M+=n,U+=g;M+=u,U+=d}M+=o,U+=h}M+=v,U+=q}M+=f,U+=w}M+=c,U+=A}M+=l,U+=b}M+=p,U+=T}M+=m,U+=S}M+=y,U+=O}}bR.exports=PLr});var OR=s((zOe,SR)=>{"use strict";var FLr=ft(),ER=Qv(),NR="throw";function xLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g;for(v=r.shape,o=FLr(v),i=r.data,a=e.data,f=r.strides,c=e.strides,l=r.offset,p=e.offset,n=r.order,u=e.order,g=0;g<o;g++)m=ER(v,f,l,n,g,NR),y=ER(v,c,p,u,g,NR),a[y]=t(i[m])}SR.exports=xLr});var LR=s((WOe,RR)=>{"use strict";var AR=Jv(),_R=is(),TR=qT(),jLr=HT(),MLr=WT(),BLr=JT(),kLr=ZT(),CLr=QT(),VLr=rI(),ULr=tI(),GLr=aI(),DLr=sI(),HLr=oI(),zLr=fI(),WLr=lI(),XLr=dI(),JLr=mI(),YLr=hI(),ZLr=bI(),$Lr=EI(),QLr=SI(),KLr=AI(),rPr=TI(),ePr=RI(),tPr=PI(),iPr=xI(),aPr=MI(),nPr=kI(),sPr=VI(),uPr=GI(),oPr=HI(),vPr=WI(),fPr=KI(),cPr=eR(),lPr=iR(),pPr=nR(),dPr=uR(),gPr=vR(),mPr=cR(),yPr=pR(),hPr=gR(),qPr=yR(),bPr=qR(),wPr=wR(),EPr=OR(),za=[cPr,lPr,pPr,dPr,gPr,mPr,yPr,hPr,qPr,bPr,wPr],Hn=[KLr,rPr,ePr,tPr,iPr,aPr,nPr,sPr,uPr,oPr,vPr],NPr=[HLr,zLr,WLr,XLr,JLr,YLr,ZLr,$Lr,QLr],SPr=[jLr,MLr,BLr,kLr,CLr,VLr,ULr,GLr,DLr],IR=za.length-1;function OPr(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(g=TR(r[0]),d=TR(r[1]),n=g.shape,u=d.shape,t=n.length,t!==u.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+u.length+".");if(t===0)return g.accessorProtocol||d.accessorProtocol?Hn[t](g,d,e):za[t](g,d,e);for(f=1,y=0,q=0;q<t;q++){if(h=n[q],h!==u[q])throw new Error("invalid arguments. Arrays must have the same shape.");f*=h,h===1&&(y+=1)}if(f!==0){if(t===1)return g.accessorProtocol||d.accessorProtocol?Hn[t](g,d,e):za[t](g,d,e);if(c=g.strides,l=d.strides,y===t-1){for(q=0;q<t&&n[q]===1;q++);return g.shape=[n[q]],d.shape=g.shape,g.strides=[c[q]],d.strides=[l[q]],g.accessorProtocol||d.accessorProtocol?Hn[1](g,d,e):za[1](g,d,e)}if(o=AR(c),v=AR(l),o!==0&&v!==0&&g.order===d.order){if(i=_R(n,c,g.offset),a=_R(u,l,d.offset),f===i[1]-i[0]+1&&f===a[1]-a[0]+1)return o===1?p=i[0]:p=i[1],v===1?m=a[0]:m=a[1],g.shape=[f],d.shape=g.shape,g.strides=[o],d.strides=[v],g.offset=p,d.offset=m,g.accessorProtocol||d.accessorProtocol?Hn[1](g,d,e):za[1](g,d,e);if(t<=IR)return g.accessorProtocol||d.accessorProtocol?Hn[t](g,d,e):za[t](g,d,e)}if(t<=IR)return g.accessorProtocol||d.accessorProtocol?SPr[t-2](g,d,e):NPr[t-2](g,d,e);if(g.accessorProtocol||d.accessorProtocol)return fPr(g,d,e);EPr(g,d,e)}}RR.exports=OPr});var FR=s((XOe,PR)=>{"use strict";var APr=LR();PR.exports=APr});var jR=s((JOe,xR)=>{"use strict";var _Pr=FR(),TPr=C(),IPr=Os();function RPr(r,e){var t,i,a,n,u;for(t={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},i=r[0],a=r[1],u=2;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")t[n]=r[u+1];else throw new Error(TPr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return _Pr([i,a],IPr(e,t)),a}xR.exports=RPr});var BR=s((YOe,MR)=>{"use strict";var LPr=jR();MR.exports=LPr});var CR=s((ZOe,kR)=>{"use strict";var PPr=$r(),FPr=BR();function xPr(r){return PPr(r,"unary",FPr),r}kR.exports=xPr});var UR=s(($Oe,VR)=>{"use strict";var Et=$r(),jPr=U_(),MPr=Os(),BPr=Hv(),kPr=Xv(),CPr=$_(),VPr=eT(),UPr=nT(),GPr=vT(),DPr=CR();function HPr(r){return Et(r,"binary",jPr),Et(r,"d_d",MPr),Et(r,"dd_d",BPr),Et(r,"ddd_d",kPr),Et(r,"dddd_d",CPr),Et(r,"ddddd_d",VPr),Et(r,"ternary",UPr),Et(r,"unary",GPr),Et(r,"ndarray",DPr({})),r}VR.exports=HPr});var DR=s((QOe,GR)=>{"use strict";function zPr(r){return r*r}GR.exports=zPr});var Ts=s((KOe,HR)=>{"use strict";var WPr=DR();HR.exports=WPr});var Is=s((rAe,zR)=>{"use strict";var XPr=.7853981633974483;zR.exports=XPr});var XR=s((eAe,WR)=>{"use strict";function JPr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}WR.exports=JPr});var YR=s((tAe,JR)=>{"use strict";function YPr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}JR.exports=YPr});var QR=s((iAe,$R)=>{"use strict";var ZPr=W(),$Pr=Lr(),ZR=Is(),QPr=XR(),KPr=YR(),rFr=6123233995736766e-32;function eFr(r){var e,t,i,a,n;if(ZPr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*KPr(t),t=$Pr(t+t),n=ZR-t,t=t*a-rFr,n-=t,n+=ZR;else{if(i<1e-8)return r;t=i*i,n=t*QPr(t),n=i*n+i}return e?-n:n}$R.exports=eFr});var ea=s((aAe,KR)=>{"use strict";var tFr=QR();KR.exports=tFr});var iL=s((nAe,tL)=>{"use strict";var iFr=W(),rL=ea(),aFr=Lr(),eL=Is(),nFr=6123233995736766e-32;function sFr(r){var e;return iFr(r)?NaN:r<-1||r>1?NaN:r>.5?2*rL(aFr(.5-.5*r)):(e=eL-rL(r),e+=nFr,e+=eL,e)}tL.exports=sFr});var zn=s((sAe,aL)=>{"use strict";var uFr=iL();aL.exports=uFr});var sL=s((uAe,nL)=>{"use strict";function oFr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}nL.exports=oFr});var cL=s((oAe,fL)=>{"use strict";var vFr=W(),uL=ie(),oL=bt(),fFr=hr(),cFr=Ir(),vL=vt(),lFr=sL(),Kv=.6931471803691238,rf=19082149292705877e-26,pFr=.41421356237309503,dFr=-.2928932188134525,gFr=1862645149230957e-24,mFr=5551115123125783e-32,yFr=9007199254740992,hFr=.6666666666666666;function qFr(r){var e,t,i,a,n,u,o,v,f,c;if(r<-1||vFr(r))return NaN;if(r===-1)return cFr;if(r===fFr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<pFr){if(i<gFr)return i<mFr?r:r-r*r*.5;r>dFr&&(c=0,a=r,t=1)}return c!==0&&(i<yFr?(f=1+r,t=uL(f),c=(t>>20)-vL,c>0?n=1-(f-r):n=r-(f-1),n/=f):(f=r,t=uL(f),c=(t>>20)-vL,n=0),t&=1048575,t<434334?f=oL(f,t|1072693248):(c+=1,f=oL(f,t|1071644672),t=1048576-t>>2),a=f-1),e=.5*a*a,t===0?a===0?(n+=c*rf,c*Kv+n):(v=e*(1-hFr*a),c*Kv-(v-(c*rf+n)-a)):(u=a/(2+a),o=u*u,v=o*lFr(o),c===0?a-(e-u*(e+v)):c*Kv-(e-(u*(e+v)+(c*rf+n))-a))}fL.exports=qFr});var ci=s((vAe,lL)=>{"use strict";var bFr=cL();lL.exports=bFr});var dL=s((fAe,pL)=>{"use strict";function wFr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}pL.exports=wFr});var mL=s((cAe,gL)=>{"use strict";function EFr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}gL.exports=EFr});var bL=s((lAe,qL)=>{"use strict";var yL=ie(),NFr=bt(),SFr=W(),OFr=vt(),AFr=Ir(),_Fr=dL(),TFr=mL(),Rs=.6931471803691238,Ls=19082149292705877e-26,IFr=0x40000000000000,RFr=.3333333333333333,hL=1048575,LFr=2146435072,PFr=1048576,FFr=1072693248;function xFr(r){var e,t,i,a,n,u,o,v,f,c,l,p;return r===0?AFr:SFr(r)||r<0?NaN:(t=yL(r),n=0,t<PFr&&(n-=54,r*=IFr,t=yL(r)),t>=LFr?r+r:(n+=(t>>20)-OFr|0,t&=hL,v=t+614244&1048576|0,r=NFr(r,t|v^FFr),n+=v>>20|0,o=r-1,(hL&2+t)<3?o===0?n===0?0:n*Rs+n*Ls:(u=o*o*(.5-RFr*o),n===0?o-u:n*Rs-(u-n*Ls-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,a=l*_Fr(l),i=p*TFr(l),v|=f,u=i+a,v>0?(e=.5*o*o,n===0?o-(e-c*(e+u)):n*Rs-(e-(c*(e+u)+n*Ls)-o)):n===0?o-c*(o-u):n*Rs-(c*(o-u)-n*Ls-o))))}qL.exports=xFr});var br=s((pAe,wL)=>{"use strict";var jFr=bL();wL.exports=jFr});var OL=s((dAe,SL)=>{"use strict";var MFr=W(),BFr=ci(),EL=Lr(),kFr=bs(),NL=br(),CFr=1<<28;function VFr(r){var e;return MFr(r)||r<1?NaN:r===1?0:r>=CFr?NL(r)+kFr:r>2?NL(2*r-1/(r+EL(r*r-1))):(e=r-1,BFr(e+EL(2*e+e*e)))}SL.exports=VFr});var _L=s((gAe,AL)=>{"use strict";var UFr=OL();AL.exports=UFr});var Ps=s((mAe,TL)=>{"use strict";var GFr=1.5707963267948966;TL.exports=GFr});var RL=s((yAe,IL)=>{"use strict";function DFr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}IL.exports=DFr});var PL=s((hAe,LL)=>{"use strict";function HFr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}LL.exports=HFr});var jL=s((qAe,xL)=>{"use strict";var zFr=W(),WFr=hr(),ef=Ps(),XFr=Is(),JFr=Ir(),YFr=RL(),ZFr=PL(),FL=6123233995736766e-32,$Fr=2.414213562373095;function QFr(r){var e,t,i,a;return zFr(r)||r===0?r:r===WFr?ef:r===JFr?-ef:(r<0&&(t=!0,r=-r),e=0,r>$Fr?(i=ef,e=1,r=-(1/r)):r<=.66?i=0:(i=XFr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*YFr(a)/ZFr(a),a=r*a+r,e===2?a+=.5*FL:e===1&&(a+=FL),i+=a,t?-i:i)}xL.exports=QFr});var Fs=s((bAe,ML)=>{"use strict";var KFr=jL();ML.exports=KFr});var kL=s((wAe,BL)=>{"use strict";var rxr=Fs();function exr(r){return rxr(1/r)}BL.exports=exr});var VL=s((EAe,CL)=>{"use strict";var txr=kL();CL.exports=txr});var GL=s((NAe,UL)=>{"use strict";var ixr=ea();function axr(r){return ixr(1+r)}UL.exports=axr});var HL=s((SAe,DL)=>{"use strict";var nxr=GL();DL.exports=nxr});var WL=s((OAe,zL)=>{"use strict";var sxr=ea();function uxr(r){return sxr(1-r)}zL.exports=uxr});var JL=s((AAe,XL)=>{"use strict";var oxr=WL();XL.exports=oxr});var ZL=s((_Ae,YL)=>{"use strict";var vxr=ea();function fxr(r){return vxr(1/r)}YL.exports=fxr});var QL=s((TAe,$L)=>{"use strict";var cxr=ZL();$L.exports=cxr});var tP=s((IAe,eP)=>{"use strict";var lxr=Ve(),pxr=W(),dxr=ci(),KL=Lr(),gxr=bs(),rP=br(),mxr=1/(1<<28),yxr=1<<28;function hxr(r){var e,t,i;return pxr(r)||lxr(r)?r:(r<0&&(r=-r,e=!0),r<mxr?i=r:r>yxr?i=rP(r)+gxr:r>2?i=rP(2*r+1/(KL(r*r+1)+r)):(t=r*r,i=dxr(r+t/(1+KL(1+t)))),e?-i:i)}eP.exports=hxr});var tf=s((RAe,iP)=>{"use strict";var qxr=tP();iP.exports=qxr});var nP=s((LAe,aP)=>{"use strict";var bxr=tf();function wxr(r){return bxr(1/r)}aP.exports=wxr});var uP=s((PAe,sP)=>{"use strict";var Exr=nP();sP.exports=Exr});var vP=s((FAe,oP)=>{"use strict";var Nxr=zn(),Sxr=Lr();function Oxr(r){return 2*Nxr(Sxr(r))}oP.exports=Oxr});var cP=s((xAe,fP)=>{"use strict";var Axr=vP();fP.exports=Axr});var pP=s((jAe,lP)=>{"use strict";var _xr=ea(),Txr=Lr();function Ixr(r){return 2*_xr(Txr(r))}lP.exports=Ixr});var gP=s((MAe,dP)=>{"use strict";var Rxr=pP();dP.exports=Rxr});var hP=s((BAe,yP)=>{"use strict";var Lxr=W(),mP=ci(),Pxr=hr(),Fxr=Ir(),xxr=1/(1<<28);function jxr(r){var e,t;return Lxr(r)||r<-1||r>1?NaN:r===1?Pxr:r===-1?Fxr:(r<0&&(e=!0,r=-r),r<xxr?e?-r:r:(r<.5?(t=r+r,t=.5*mP(t+t*r/(1-r))):t=.5*mP((r+r)/(1-r)),e?-t:t))}yP.exports=jxr});var bP=s((kAe,qP)=>{"use strict";var Mxr=hP();qP.exports=Mxr});var EP=s((CAe,wP)=>{"use strict";var Bxr=zn();function kxr(r){return Bxr(1+r)}wP.exports=kxr});var SP=s((VAe,NP)=>{"use strict";var Cxr=EP();NP.exports=Cxr});var AP=s((UAe,OP)=>{"use strict";var Vxr=zn();function Uxr(r){return Vxr(1-r)}OP.exports=Uxr});var TP=s((GAe,_P)=>{"use strict";var Gxr=AP();_P.exports=Gxr});var RP=s((DAe,IP)=>{"use strict";var Dxr=Gr();function Hxr(r){return Dxr(r)===r&&r>=0}IP.exports=Hxr});var af=s((HAe,LP)=>{"use strict";var zxr=RP();LP.exports=zxr});var PP=s((zAe,Wxr)=>{Wxr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var xP=s((WAe,FP)=>{"use strict";var Xxr=af(),Jxr=W(),Yxr=ps(),Zxr=Ir(),$xr=hr(),Qxr=PP(),Kxr=258;function rjr(r){return Jxr(r)||!Xxr(r)?NaN:Yxr(r)?0:r>Kxr?r/2&1?$xr:Zxr:Qxr[r/2]}FP.exports=rjr});var MP=s((XAe,jP)=>{"use strict";var ejr=xP();jP.exports=ejr});var kP=s((JAe,BP)=>{"use strict";var tjr=Ye(),nf;tjr===!0?nf=0:nf=1;BP.exports=nf});var UP=s((YAe,VP)=>{"use strict";var ijr=me(),ajr=ge(),njr=kP(),CP=new ajr(1),sjr=new ijr(CP.buffer);function ujr(r){return CP[0]=r,sjr[njr]}VP.exports=ujr});var DP=s((ZAe,GP)=>{"use strict";var ojr=UP();GP.exports=ojr});var JP=s(($Ae,XP)=>{"use strict";var vjr=Gr(),xs=qs(),Bs=ii(),zP=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fjr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],sf=16777216,uf=5960464477539063e-23,js=Bs(20),HP=Bs(20),Ms=Bs(20),he=Bs(20);function WP(r,e,t,i,a,n,u,o,v){var f,c,l,p,m,y,g,d,h;for(p=n,h=i[t],d=t,m=0;d>0;m++)c=uf*h|0,he[m]=h-sf*c|0,h=i[d-1]+c,d-=1;if(h=xs(h,a),h-=8*vjr(h*.125),g=h|0,h-=g,l=0,a>0?(m=he[t-1]>>24-a,g+=m,he[t-1]-=m<<24-a,l=he[t-1]>>23-a):a===0?l=he[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,m=0;m<t;m++)d=he[m],f===0?d!==0&&(f=1,he[m]=16777216-d):he[m]=16777215-d;if(a>0)switch(a){case 1:he[t-1]&=8388607;break;case 2:he[t-1]&=4194303;break}l===2&&(h=1-h,f!==0&&(h-=xs(1,a)))}if(h===0){for(d=0,m=t-1;m>=n;m--)d|=he[m];if(d===0){for(y=1;he[n-y]===0;y++);for(m=t+1;m<=t+y;m++){for(v[o+m]=zP[u+m],c=0,d=0;d<=o;d++)c+=r[d]*v[o+(m-d)];i[m]=c}return t+=y,WP(r,e,t,i,a,n,u,o,v)}}if(h===0)for(t-=1,a-=24;he[t]===0;)t-=1,a-=24;else h=xs(h,-a),h>=sf?(c=uf*h|0,he[t]=h-sf*c|0,t+=1,a+=24,he[t]=c):he[t]=h|0;for(c=xs(1,a),m=t;m>=0;m--)i[m]=c*he[m],c*=uf;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=fjr[y]*i[m+y];Ms[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Ms[m];for(l===0?e[0]=c:e[0]=-c,c=Ms[0]-c,m=1;m<=t;m++)c+=Ms[m];return l===0?e[1]=c:e[1]=-c,g&7}function cjr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+n,c=0;c<=p;c++)l<0?js[c]=0:js[c]=zP[l],l+=1;for(c=0;c<=n;c++){for(a=0,l=0;l<=o;l++)a+=r[l]*js[o+(c-l)];HP[c]=a}return v=n,WP(r,e,v,HP,f,n,u,o,js)}XP.exports=cjr});var ZP=s((QAe,YP)=>{"use strict";var ljr=Math.round;YP.exports=ljr});var of=s((KAe,$P)=>{"use strict";var pjr=ZP();$P.exports=pjr});var eF=s((r_e,rF)=>{"use strict";var djr=of(),QP=ie(),gjr=.6366197723675814,mjr=1.5707963267341256,yjr=6077100506506192e-26,hjr=6077100506303966e-26,qjr=20222662487959506e-37,bjr=20222662487111665e-37,wjr=84784276603689e-45,KP=2047;function Ejr(r,e,t){var i,a,n,u,o,v,f;return a=djr(r*gjr),u=r-a*mjr,o=a*yjr,f=e>>20|0,t[0]=u-o,i=QP(t[0]),v=f-(i>>20&KP),v>16&&(n=u,o=a*hjr,u=n-o,o=a*qjr-(n-u-o),t[0]=u-o,i=QP(t[0]),v=f-(i>>20&KP),v>49&&(n=u,o=a*bjr,u=n-o,o=a*wjr-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}rF.exports=Ejr});var iF=s((e_e,tF)=>{"use strict";var Njr=ot(),Sjr=Cn(),Ojr=ws(),Ajr=ie(),_jr=DP(),Tjr=Da(),Ijr=JP(),ks=eF(),Rjr=0,Ljr=16777216,li=1.5707963267341256,ta=6077100506506192e-26,Cs=2*ta,Vs=3*ta,Us=4*ta,Pjr=598523,Fjr=1072243195,xjr=1073928572,jjr=1074752122,Mjr=1074977148,Bjr=1075183036,kjr=1075388923,Cjr=1075594811,Vjr=1094263291,Wn=[0,0,0],Xn=[0,0];function Ujr(r,e){var t,i,a,n,u,o,v,f;if(a=Ajr(r),n=a&Njr|0,n<=Fjr)return e[0]=r,e[1]=0,0;if(n<=jjr)return(n&Ojr)===Pjr?ks(r,n,e):n<=xjr?r>0?(f=r-li,e[0]=f-ta,e[1]=f-e[0]-ta,1):(f=r+li,e[0]=f+ta,e[1]=f-e[0]+ta,-1):r>0?(f=r-2*li,e[0]=f-Cs,e[1]=f-e[0]-Cs,2):(f=r+2*li,e[0]=f+Cs,e[1]=f-e[0]+Cs,-2);if(n<=Cjr)return n<=Bjr?n===Mjr?ks(r,n,e):r>0?(f=r-3*li,e[0]=f-Vs,e[1]=f-e[0]-Vs,3):(f=r+3*li,e[0]=f+Vs,e[1]=f-e[0]+Vs,-3):n===kjr?ks(r,n,e):r>0?(f=r-4*li,e[0]=f-Us,e[1]=f-e[0]-Us,4):(f=r+4*li,e[0]=f+Us,e[1]=f-e[0]+Us,-4);if(n<Vjr)return ks(r,n,e);if(n>=Sjr)return e[0]=NaN,e[1]=NaN,0;for(t=_jr(r),i=(n>>20)-1046,f=Tjr(n-(i<<20|0),t),o=0;o<2;o++)Wn[o]=f|0,f=(f-Wn[o])*Ljr;for(Wn[2]=f,u=3;Wn[u-1]===Rjr;)u-=1;return v=Ijr(Wn,Xn,i,u,1),r<0?(e[0]=-Xn[0],e[1]=-Xn[1],-v):(e[0]=Xn[0],e[1]=Xn[1],v)}tF.exports=Ujr});var Jn=s((t_e,aF)=>{"use strict";var Gjr=iF();aF.exports=Gjr});var uF=s((i_e,sF)=>{"use strict";var nF=-.16666666666666632,Djr=.00833333333332249,Hjr=-.0001984126982985795,zjr=27557313707070068e-22,Wjr=-25050760253406863e-24,Xjr=158969099521155e-24,Jjr=.0416666666666666,Yjr=-.001388888888887411,Zjr=2480158728947673e-20,$jr=-27557314351390663e-23,Qjr=2087572321298175e-24,Kjr=-11359647557788195e-27;function rMr(r,e,t,i,a){var n,u,o,v,f;return f=r*r,v=f*f,u=Djr+f*(Hjr+f*zjr)+f*v*(Wjr+f*Xjr),o=f*r,e===0?t[a]=r+o*(nF+f*u):t[a]=r-(f*(.5*e-o*u)-e-o*nF),u=f*(Jjr+f*(Yjr+f*Zjr)),u+=v*v*($jr+f*(Qjr+f*Kjr)),n=.5*f,v=1-n,t[a+i]=v+(1-v-n+(f*u-r*e)),t}sF.exports=rMr});var ff=s((a_e,vF)=>{"use strict";var eMr=ot(),tMr=Cn(),iMr=ie(),aMr=Jn(),oF=uF(),nMr=1072243195,sMr=1044381696,vf=[0,0];function uMr(r,e,t,i){var a,n;if(a=iMr(r),a&=eMr,a<=nMr)return a<sMr&&(r|0)===0&&(e[i]=r,e[i+t]=0),oF(r,0,e,t,i);if(a>=tMr)return e[i]=NaN,e[i+t]=NaN,e;switch(n=aMr(r,vf),oF(vf[0],vf[1],e,t,i),n&3){case 1:return a=e[i+t],e[i+t]=-e[i],e[i]=a,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return a=-e[i+t],e[i+t]=e[i],e[i]=a,e;default:return e}}vF.exports=uMr});var cF=s((n_e,fF)=>{"use strict";var oMr=ff();function vMr(r){return oMr(r,[0,0],1,0)}fF.exports=vMr});var Yn=s((s_e,pF)=>{"use strict";var fMr=G(),lF=cF(),cMr=ff();fMr(lF,"assign",cMr);pF.exports=lF});var gF=s((u_e,dF)=>{"use strict";function lMr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}dF.exports=lMr});var yF=s((o_e,mF)=>{"use strict";function pMr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}mF.exports=pMr});var qF=s((v_e,hF)=>{"use strict";function dMr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}hF.exports=dMr});var wF=s((f_e,bF)=>{"use strict";function gMr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}bF.exports=gMr});var NF=s((c_e,EF)=>{"use strict";var mMr=Lr(),yMr=Yn().assign,hMr=hr(),qMr=gF(),bMr=yF(),wMr=qF(),EMr=wF(),NMr=.5641895835477563,SMr=2.404825557695773,OMr=5.520078110286311,AMr=616,_Mr=-.0014244423042272315,TMr=1413,IMr=.0005468602863106496,Zn=[0,0];function RMr(r){var e,t,i,a,n,u;return r<0&&(r=-r),r===hMr?0:r===0?1:r<=4?(n=r*r,a=qMr(n),u=(r+SMr)*(r-AMr/256-_Mr),u*a):r<=8?(n=1-r*r/64,a=bMr(n),u=(r+OMr)*(r-TMr/256-IMr),u*a):(n=8/r,i=n*n,e=wMr(i),t=EMr(i),u=NMr/mMr(r),yMr(r,Zn,1,0),u*(e*(Zn[1]+Zn[0])-n*t*(Zn[0]-Zn[1])))}EF.exports=RMr});var cf=s((l_e,SF)=>{"use strict";var LMr=NF();SF.exports=LMr});var Gs=s((p_e,OF)=>{"use strict";var PMr=1.772453850905516;OF.exports=PMr});var _F=s((d_e,AF)=>{"use strict";function FMr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}AF.exports=FMr});var IF=s((g_e,TF)=>{"use strict";function xMr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}TF.exports=xMr});var LF=s((m_e,RF)=>{"use strict";function jMr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}RF.exports=jMr});var FF=s((y_e,PF)=>{"use strict";function MMr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}PF.exports=MMr});var jF=s((h_e,xF)=>{"use strict";var BMr=Lr(),kMr=Wr(),CMr=Yn().assign,VMr=hr(),UMr=Gs(),GMr=_F(),DMr=IF(),HMr=LF(),zMr=FF(),WMr=3.8317059702075125,XMr=7.015586669815619,JMr=981,YMr=-.0003252797924876844,ZMr=1796,$Mr=-38330184381246464e-21,$n=[0,0];function QMr(r){var e,t,i,a,n,u,o,v;return v=kMr(r),r===0||v===VMr?0:(v<=4?(u=r*r,n=GMr(u),o=v*(v+WMr)*(v-JMr/256-YMr),e=o*n):v<=8?(u=r*r,n=DMr(u),o=v*(v+XMr)*(v-ZMr/256-$Mr),e=o*n):(u=8/v,a=u*u,t=HMr(a),i=zMr(a),o=1/(BMr(v)*UMr),CMr(v,$n,1,0),e=o*(t*($n[0]-$n[1])+u*i*($n[0]+$n[1]))),r<0&&(e*=-1),e)}xF.exports=QMr});var lf=s((q_e,MF)=>{"use strict";var KMr=jF();MF.exports=KMr});var Ue=s((b_e,BF)=>{"use strict";var rBr=3.141592653589793;BF.exports=rBr});var CF=s((w_e,kF)=>{"use strict";function eBr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}kF.exports=eBr});var UF=s((E_e,VF)=>{"use strict";function tBr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}VF.exports=tBr});var DF=s((N_e,GF)=>{"use strict";function iBr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}GF.exports=iBr});var zF=s((S_e,HF)=>{"use strict";function aBr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}HF.exports=aBr});var XF=s((O_e,WF)=>{"use strict";function nBr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}WF.exports=nBr});var QF=s((A_e,$F)=>{"use strict";var pf=br(),sBr=Lr(),uBr=Ue(),oBr=Gs(),vBr=Ir(),fBr=hr(),cBr=Yn().assign,df=cf(),lBr=CF(),pBr=UF(),dBr=DF(),gBr=zF(),mBr=XF(),yBr=1/oBr,gf=2/uBr,JF=.8935769662791675,YF=3.957678419314858,ZF=7.086051060301773,hBr=228,qBr=.0029519662791675214,bBr=1013,wBr=.0006471693148578684,EBr=1814,NBr=.00011356030177269763,Qn=[0,0];function SBr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?vBr:r===fBr?0:r<=3?(n=r*r,u=pf(r/JF)*df(r)*gf,a=lBr(n),o=(r+JF)*(r-hBr/256-qBr),u+o*a):r<=5.5?(n=r*r,u=pf(r/YF)*df(r)*gf,a=pBr(n),o=(r+YF)*(r-bBr/256-wBr),u+o*a):r<=8?(n=r*r,u=pf(r/ZF)*df(r)*gf,a=dBr(n),o=(r+ZF)*(r-EBr/256-NBr),u+o*a):(n=8/r,i=n*n,e=gBr(i),t=mBr(i),o=yBr/sBr(r),cBr(r,Qn,1,0),o*(e*(Qn[0]-Qn[1])+n*t*(Qn[1]+Qn[0])))}$F.exports=SBr});var rx=s((__e,KF)=>{"use strict";var OBr=QF();KF.exports=OBr});var tx=s((T_e,ex)=>{"use strict";function ABr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}ex.exports=ABr});var ax=s((I_e,ix)=>{"use strict";function _Br(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}ix.exports=_Br});var sx=s((R_e,nx)=>{"use strict";function TBr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}nx.exports=TBr});var ox=s((L_e,ux)=>{"use strict";function IBr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}ux.exports=IBr});var gx=s((P_e,dx)=>{"use strict";var vx=br(),RBr=Lr(),LBr=Ue(),PBr=Gs(),FBr=Ir(),xBr=hr(),jBr=Yn().assign,fx=lf(),MBr=tx(),BBr=ax(),kBr=sx(),CBr=ox(),VBr=1/PBr,cx=2/LBr,lx=2.197141326031017,px=5.429681040794135,UBr=562,GBr=.001828826031017035,DBr=1390,HBr=-6459205864867228e-21,Kn=[0,0];function zBr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?FBr:r===xBr?0:r<=4?(n=r*r,u=vx(r/lx)*fx(r)*cx,a=MBr(n),o=(r+lx)*(r-UBr/256-GBr)/r,u+o*a):r<=8?(n=r*r,u=vx(r/px)*fx(r)*cx,a=BBr(n),o=(r+px)*(r-DBr/256-HBr)/r,u+o*a):(n=8/r,i=n*n,e=kBr(i),t=CBr(i),o=VBr/RBr(r),jBr(r,Kn,1,0),o*(n*t*(Kn[0]-Kn[1])-e*(Kn[0]+Kn[1])))}dx.exports=zBr});var yx=s((F_e,mx)=>{"use strict";var WBr=gx();mx.exports=WBr});var qx=s((x_e,hx)=>{"use strict";function XBr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}hx.exports=XBr});var wx=s((j_e,bx)=>{"use strict";function JBr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}bx.exports=JBr});var Nx=s((M_e,Ex)=>{"use strict";var YBr=qx(),ZBr=wx();function $Br(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*YBr(n),i+=a*a*ZBr(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}Ex.exports=$Br});var mf=s((B_e,Sx)=>{"use strict";var QBr=Nx();Sx.exports=QBr});var _x=s((k_e,Ax)=>{"use strict";var Ox=-.16666666666666632,KBr=.00833333333332249,rkr=-.0001984126982985795,ekr=27557313707070068e-22,tkr=-25050760253406863e-24,ikr=158969099521155e-24;function akr(r,e){var t,i,a,n;return n=r*r,a=n*n,t=KBr+n*(rkr+n*ekr)+n*a*(tkr+n*ikr),i=n*r,e===0?r+i*(Ox+n*t):r-(n*(.5*e-i*t)-e-i*Ox)}Ax.exports=akr});var yf=s((C_e,Tx)=>{"use strict";var nkr=_x();Tx.exports=nkr});var Lx=s((V_e,Rx)=>{"use strict";var skr=ie(),hf=mf(),Ix=yf(),ukr=Jn(),Nt=[0,0],okr=2147483647,vkr=1072243195,fkr=1044381696,ckr=2146435072;function lkr(r){var e,t;if(e=skr(r),e&=okr,e<=vkr)return e<fkr?1:hf(r,0);if(e>=ckr)return NaN;switch(t=ukr(r,Nt),t&3){case 0:return hf(Nt[0],Nt[1]);case 1:return-Ix(Nt[0],Nt[1]);case 2:return-hf(Nt[0],Nt[1]);default:return Ix(Nt[0],Nt[1])}}Rx.exports=lkr});var ia=s((U_e,Px)=>{"use strict";var pkr=Lx();Px.exports=pkr});var jx=s((G_e,xx)=>{"use strict";var dkr=ot(),gkr=Cn(),mkr=ie(),Fx=mf(),qf=yf(),ykr=Jn(),hkr=1072243195,qkr=1045430272,St=[0,0];function bkr(r){var e,t;if(e=mkr(r),e&=dkr,e<=hkr)return e<qkr?r:qf(r,0);if(e>=gkr)return NaN;switch(t=ykr(r,St),t&3){case 0:return qf(St[0],St[1]);case 1:return Fx(St[0],St[1]);case 2:return-qf(St[0],St[1]);default:return-Fx(St[0],St[1])}}xx.exports=bkr});var aa=s((D_e,Mx)=>{"use strict";var wkr=jx();Mx.exports=wkr});var Cx=s((H_e,kx)=>{"use strict";var Ekr=W(),Nkr=Ve(),Skr=Wr(),Bx=ia(),Okr=aa(),Akr=Gr(),bf=Ue(),_kr=Ha(),Tkr=_kr+1;function Ikr(r){var e,t,i,a;return Ekr(r)?NaN:Nkr(r)?NaN:(e=Skr(r),e>Tkr?1:(t=Akr(e),i=e-t,i===.5?0:(i<.25?a=Bx(bf*i):i<.75?(i=.5-i,a=Okr(bf*i)):(i=1-i,a=-Bx(bf*i)),t%2===1?-a:a)))}kx.exports=Ikr});var Ux=s((z_e,Vx)=>{"use strict";var Rkr=Cx();Vx.exports=Rkr});var Dx=s((W_e,Gx)=>{"use strict";var Lkr=1.618033988749895;Gx.exports=Lkr});var zx=s((X_e,Hx)=>{"use strict";var Pkr=W(),Fkr=Ux(),xkr=Vr(),jkr=Dx(),Mkr=hr(),Bkr=Ir(),kkr=2.23606797749979;function Ckr(r){var e,t;return Pkr(r)||r===Mkr||r===Bkr?NaN:(e=xkr(jkr,r),t=Fkr(r)/e,(e-t)/kkr)}Hx.exports=Ckr});var Xx=s((J_e,Wx)=>{"use strict";var Vkr=zx();Wx.exports=Vkr});var Yx=s((Y_e,Jx)=>{"use strict";function Ukr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}Jx.exports=Ukr});var Kx=s((Z_e,Qx)=>{"use strict";var Gkr=Bv(),Dkr=Tv(),Zx=ot(),Ef=ie(),Hkr=bt(),zkr=Ve(),$x=Da(),Wkr=Ga(),Xkr=W(),Jkr=Yx(),Ykr=4294967295>>>0,Zkr=3221225472>>>0,$kr=0x40000000000000,wf=2147483648>>>0,Qkr=1>>>0,Kkr=715094163>>>0,rCr=696219795>>>0,eCr=Ef(Gkr),na=[0>>>0,0>>>0];function tCr(r){var e,t,i,a,n,u,o;return r===0||Xkr(r)||zkr(r)?r:(t=Ef(r)>>>0,e=(t&Dkr)>>>0,t&=Zx,t<eCr?(u=$kr*r,i=(Ef(u)&Zx)>>>0,i=(i/3>>>0)+rCr>>>0,u=$x(e|i,0)):(u=0,i=(t/3>>>0)+Kkr>>>0,u=Hkr(u,e|i)),a=u*u*(u/r),u*=Jkr(a),Wkr.assign(u,na,1,0),na[1]&wf?(na[0]+=Qkr,na[1]&=~wf):na[1]|=wf,u=$x(na[0]&Ykr,na[1]&Zkr),n=u*u,a=r/n,o=u+u,a=(a-u)/(o+a),u+=u*a,u)}Qx.exports=tCr});var ej=s(($_e,rj)=>{"use strict";var iCr=Kx();rj.exports=iCr});var ij=s((Q_e,tj)=>{"use strict";var aCr=Math.ceil;tj.exports=aCr});var Wa=s((K_e,aj)=>{"use strict";var nCr=ij();aj.exports=nCr});var sj=s((rTe,nj)=>{"use strict";function sCr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}nj.exports=sCr});var oj=s((eTe,uj)=>{"use strict";function uCr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}uj.exports=uCr});var cj=s((tTe,fj)=>{"use strict";var oCr=ie(),vCr=sj(),fCr=oj(),vj=1048575,cCr=.3333333333333333;function lCr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=oCr(r),n=r-1,(vj&2+a)<3?n===0?0:n*n*(cCr*n-.5):(u=n/(2+n),o=u*u,a&=vj,c=a-398458|0,f=o*o,l=440401-a|0,t=f*vCr(f),i=o*fCr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}fj.exports=lCr});var gj=s((iTe,dj)=>{"use strict";var lj=ie(),pCr=bt(),dCr=qt(),gCr=W(),mCr=vt(),yCr=Ir(),hCr=cj(),qCr=0x40000000000000,pj=.4342944818781689,bCr=25082946711645275e-27,wCr=.30102999566361177,ECr=3694239077158931e-28,NCr=1048575,SCr=2146435072,OCr=1048576,ACr=1072693248;function _Cr(r){var e,t,i,a,n,u,o,v;return gCr(r)||r<0?NaN:r===0?yCr:(t=lj(r),u=0,t<OCr&&(u-=54,r*=qCr,t=lj(r)),t>=SCr?r+r:(u+=(t>>20)-mCr|0,t&=NCr,n=t+614244&1048576|0,r=pCr(r,t|n^ACr),u+=n>>20|0,o=u,a=hCr(r),r-=1,e=dCr(r,0),i=r-e,v=o*ECr+(r+a)*bCr,v+=(i+a)*pj+e*pj,v+o*wCr))}dj.exports=_Cr});var yj=s((aTe,mj)=>{"use strict";var TCr=gj();mj.exports=TCr});var qj=s((nTe,hj)=>{"use strict";var ICr=W(),RCr=Ve(),LCr=Vr(),PCr=Gr(),FCr=Wa(),xCr=yj(),jCr=Es(),MCr=Ns(),BCr=hr();function kCr(r){var e,t;return ICr(r)||RCr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=xCr(r),e===-1?t=PCr(t):t=FCr(t),t<=MCr?e*0:t>jCr?BCr:e*LCr(10,t))}hj.exports=kCr});var wj=s((sTe,bj)=>{"use strict";var CCr=qj();bj.exports=CCr});var Nj=s((uTe,Ej)=>{"use strict";function VCr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}Ej.exports=VCr});var Oj=s((oTe,Sj)=>{"use strict";function UCr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}Sj.exports=UCr});var Tj=s((vTe,_j)=>{"use strict";var GCr=ie(),DCr=Nj(),HCr=Oj(),Aj=1048575,zCr=.3333333333333333;function WCr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=GCr(r),n=r-1,(Aj&2+a)<3?n===0?0:n*n*(zCr*n-.5):(u=n/(2+n),o=u*u,a&=Aj,c=a-398458|0,f=o*o,l=440401-a|0,t=f*DCr(f),i=o*HCr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}_j.exports=WCr});var Lj=s((fTe,Rj)=>{"use strict";var XCr=ie(),JCr=bt(),YCr=qt(),ZCr=Ga(),$Cr=W(),QCr=ot(),KCr=ws(),rVr=vt(),eVr=Ir(),tVr=Tj(),iVr=0x40000000000000,Ij=1.4426950407214463,aVr=16751713164886512e-26,nVr=2146435072,sVr=1048576,uVr=1072693248,Nf=[0,0];function oVr(r){var e,t,i,a,n,u,o;if($Cr(r)||r<0)return NaN;if(ZCr.assign(r,Nf,1,0),i=Nf[0],a=Nf[1],o=0,i<sVr){if((i&QCr|a)===0)return eVr;o-=54,r*=iVr,i=XCr(r)}return i>=nVr?r+r:(o+=(i>>20)-rVr|0,i&=KCr,u=i+614244&1048576|0,r=JCr(r,i|u^uVr),o+=u>>20|0,n=tVr(r),r-=1,e=YCr(r,0),t=r-e,(r+n)*aVr+(t+n)*Ij+e*Ij+o)}Rj.exports=oVr});var Fj=s((cTe,Pj)=>{"use strict";var vVr=Lj();Pj.exports=vVr});var jj=s((lTe,xj)=>{"use strict";var fVr=W(),cVr=Ve(),lVr=Vr(),pVr=Gr(),dVr=Wa(),gVr=Fj(),mVr=jv(),yVr=Mv(),hVr=hr();function qVr(r){var e,t;return fVr(r)||cVr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=gVr(r),t===yVr)?r:(e===-1?t=pVr(t):t=dVr(t),t>mVr?hVr:e*lVr(2,t))}xj.exports=qVr});var Bj=s((pTe,Mj)=>{"use strict";var bVr=jj();Mj.exports=bVr});var Cj=s((dTe,kj)=>{"use strict";var wVr=Gr(),EVr=Wa();function NVr(r){return r<0?EVr(r):wVr(r)}kj.exports=NVr});var Ds=s((gTe,Vj)=>{"use strict";var SVr=Cj();Vj.exports=SVr});var Gj=s((mTe,Uj)=>{"use strict";function OVr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}Uj.exports=OVr});var Hj=s((yTe,Dj)=>{"use strict";var AVr=qs(),_Vr=Gj();function TVr(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*_Vr(a),u=1-(e-i*n/(2-n)-r),AVr(u,t)}Dj.exports=TVr});var Zj=s((hTe,Yj)=>{"use strict";var IVr=W(),zj=Ds(),RVr=Ir(),Wj=hr(),LVr=Hj(),PVr=.6931471803691238,FVr=19082149292705877e-26,Xj=1.4426950408889634,xVr=709.782712893384,jVr=-745.1332191019411,Jj=1/(1<<28),MVr=-Jj;function BVr(r){var e,t,i;return IVr(r)||r===Wj?r:r===RVr?0:r>xVr?Wj:r<jVr?0:r>MVr&&r<Jj?1+r:(r<0?i=zj(Xj*r-.5):i=zj(Xj*r+.5),e=r-i*PVr,t=i*FVr,LVr(e,t,i))}Yj.exports=BVr});var ae=s((qTe,$j)=>{"use strict";var kVr=Zj();$j.exports=kVr});var Kj=s((bTe,Qj)=>{"use strict";var CVr=Ir();function VVr(r){return r===0&&1/r===CVr}Qj.exports=VVr});var Sf=s((wTe,rM)=>{"use strict";var UVr=Kj();rM.exports=UVr});var Of=s((ETe,eM)=>{"use strict";var GVr=2.5066282746310007;eM.exports=GVr});var iM=s((NTe,tM)=>{"use strict";function DVr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}tM.exports=DVr});var sM=s((STe,nM)=>{"use strict";var HVr=Of(),aM=Vr(),zVr=ae(),WVr=iM(),XVr=143.01608;function JVr(r){var e,t,i;return e=1/r,e=1+e*WVr(e),t=zVr(r),r>XVr?(i=aM(r,.5*r-.25),t=i*(i/t)):t=aM(r,r-.5)/t,HVr*t*e}nM.exports=JVr});var oM=s((OTe,uM)=>{"use strict";var YVr=.5772156649015329;uM.exports=YVr});var fM=s((ATe,vM)=>{"use strict";var ZVr=oM();function $Vr(r,e){return e/((1+ZVr*r)*r)}vM.exports=$Vr});var lM=s((_Te,cM)=>{"use strict";function QVr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}cM.exports=QVr});var bM=s((TTe,qM)=>{"use strict";var KVr=W(),rUr=we(),eUr=Sf(),pM=Wr(),tUr=Gr(),iUr=aa(),dM=hr(),gM=Ir(),mM=Ue(),yM=sM(),hM=fM(),aUr=lM();function nUr(r){var e,t,i,a;if(rUr(r)&&r<0||r===gM||KVr(r))return NaN;if(r===0)return eUr(r)?gM:dM;if(r>171.61447887182297)return dM;if(r<-170.5674972726612)return 0;if(t=pM(r),t>33)return r>=0?yM(r):(i=tUr(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*iUr(mM*a),e*mM/(pM(a)*yM(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return hM(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return hM(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*aUr(r))}qM.exports=nUr});var Xa=s((ITe,wM)=>{"use strict";var sUr=bM();wM.exports=sUr});var SM=s((RTe,NM)=>{"use strict";var uUr=W(),oUr=Ve(),EM=ia(),Af=aa(),vUr=Wr(),r0=ds(),e0=Ue();function fUr(r){var e,t;return uUr(r)?NaN:oUr(r)?NaN:(t=r%2,e=vUr(t),e===0||e===1?r0(0,t):e<.25?Af(e0*t):e<.75?(e=.5-e,r0(EM(e0*e),t)):e<1.25?(t=r0(1,t)-t,Af(e0*t)):e<1.75?(e-=1.5,-r0(EM(e0*e),t)):(t-=r0(2,t),Af(e0*t)))}NM.exports=fUr});var t0=s((LTe,OM)=>{"use strict";var cUr=SM();OM.exports=cUr});var _M=s((PTe,AM)=>{"use strict";function lUr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}AM.exports=lUr});var IM=s((FTe,TM)=>{"use strict";function pUr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}TM.exports=pUr});var LM=s((xTe,RM)=>{"use strict";function dUr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}RM.exports=dUr});var FM=s((jTe,PM)=>{"use strict";function gUr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}PM.exports=gUr});var jM=s((MTe,xM)=>{"use strict";function mUr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}xM.exports=mUr});var BM=s((BTe,MM)=>{"use strict";function yUr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}MM.exports=yUr});var CM=s((kTe,kM)=>{"use strict";function hUr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}kM.exports=hUr});var UM=s((CTe,VM)=>{"use strict";function qUr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}VM.exports=qUr});var DM=s((VTe,GM)=>{"use strict";function bUr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}GM.exports=bUr});var zM=s((UTe,HM)=>{"use strict";function wUr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}HM.exports=wUr});var JM=s((GTe,XM)=>{"use strict";var EUr=W(),NUr=Ve(),SUr=Wr(),Ja=br(),OUr=Ds(),AUr=t0(),_Ur=Ue(),_f=hr(),TUr=_M(),IUr=IM(),RUr=LM(),LUr=FM(),PUr=jM(),FUr=BM(),xUr=CM(),jUr=UM(),MUr=DM(),BUr=zM(),kUr=.07721566490153287,CUr=.3224670334241136,VUr=1,UUr=-.07721566490153287,GUr=.48383612272381005,DUr=-.1475877229945939,HUr=.06462494023913339,zUr=-.07721566490153287,WUr=1,XUr=.4189385332046727,Hs=1.4616321449683622,JUr=4503599627370496,YUr=0x400000000000000,ZUr=8470329472543003e-37,WM=1.4616321449683622,$Ur=-.12148629053584961,QUr=-3638676997039505e-33;function KUr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(EUr(r)||NUr(r))return r;if(r===0)return _f;if(r<0?(e=!0,r=-r):e=!1,r<ZUr)return-Ja(r);if(e){if(r>=JUr||(f=AUr(r),f===0))return _f;t=Ja(_Ur/SUr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-Ja(r),r>=Hs-1+.27?(l=1-r,i=0):r>=Hs-1-.27?(l=r-(WM-1),i=1):(l=r,i=2)):(m=0,r>=Hs+.27?(l=2-r,i=0):r>=Hs-.27?(l=r-WM,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=kUr+p*TUr(p),n=p*(CUr+p*IUr(p)),o=l*u+n,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=GUr+c*PUr(c),n=DUr+c*FUr(c),a=HUr+c*xUr(c),o=p*u-(QUr-c*(n+l*a)),m+=$Ur+o;break;case 2:u=l*(zUr+l*jUr(l)),n=WUr+l*MUr(l),m+=-.5*l+u/n;break}else if(r<8)switch(i=OUr(r),l=r-i,o=l*(UUr+l*LUr(l)),v=VUr+l*RUr(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=Ja(p)}else r<YUr?(f=Ja(r),p=1/r,l=p*p,c=XUr+p*BUr(l),m=(r-.5)*(f-1)+c):m=r*(Ja(r)-1);return e&&(m=t-m),m}XM.exports=KUr});var i0=s((DTe,YM)=>{"use strict";var rGr=JM();YM.exports=rGr});var pi=s((HTe,ZM)=>{"use strict";var eGr=6.283185307179586;ZM.exports=eGr});var Tf=s((zTe,$M)=>{"use strict";var tGr=14901161193847656e-24;$M.exports=tGr});var If=s((WTe,QM)=>{"use strict";var iGr=.9189385332046728;QM.exports=iGr});var KM=s((XTe,aGr)=>{aGr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var rB=s((JTe,nGr)=>{nGr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var eB=s((YTe,sGr)=>{sGr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var iB=s((ZTe,tB)=>{"use strict";function uGr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}tB.exports=uGr});var nB=s(($Te,aB)=>{"use strict";function oGr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}aB.exports=oGr});var uB=s((QTe,sB)=>{"use strict";function vGr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}sB.exports=vGr});var vB=s((KTe,oB)=>{"use strict";function fGr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}oB.exports=fGr});var cB=s((rIe,fB)=>{"use strict";function cGr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}fB.exports=cGr});var pB=s((eIe,lB)=>{"use strict";function lGr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}lB.exports=lGr});var hB=s((tIe,yB)=>{"use strict";var pGr=W(),dGr=we(),gGr=Wr(),zs=ae(),mGr=Gr(),yGr=Xa(),hGr=i0(),dB=t0(),gB=Vr(),qGr=br(),bGr=hr(),wGr=Ir(),mB=pi(),EGr=Tf(),NGr=If(),SGr=KM(),OGr=rB(),AGr=eB(),_Gr=iB(),TGr=nB(),IGr=uB(),RGr=vB(),LGr=cB(),PGr=pB(),FGr=129,xGr=170,jGr=709,MGr=1.2433929443359375,BGr=.6986598968505859;function Rf(r){var e,t,i,a,n,u;if(pGr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(dGr(r)&&(a=r|0,a===r))if(a<0){if(i=-a|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=FGr)return-AGr[u]/(i+1)}else return(a&1)===0?OGr[a/2]:SGr[(a-3)/2];return gGr(r)<EGr?-.5-NGr*r:(t=1-r,r<0?mGr(r/2)===r/2?0:(e=r,r=t,t=e,r>xGr?(e=dB(.5*t)*2*Rf(r),n=hGr(r),n-=r*qGr(mB),n>jGr?e<0?wGr:bGr:e*zs(n)):dB(.5*t)*2*gB(mB,-r)*yGr(r)*Rf(r)):r<1?(e=_Gr(t),e-=MGr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+TGr(t)):r<=4?(e=BGr+1/-t,e+IGr(r-2)):r<=7?(e=RGr(r-4),1+zs(e)):r<15?(e=LGr(r-7),1+zs(e)):r<36?(e=PGr(r-15),1+zs(e)):1+gB(2,-r))}yB.exports=Rf});var bB=s((iIe,qB)=>{"use strict";var kGr=hB();qB.exports=kGr});var EB=s((aIe,wB)=>{"use strict";var Mr=$r(),CGr=Wr(),VGr=Ts(),UGr=zn(),GGr=_L(),DGr=VL(),HGr=HL(),zGr=JL(),WGr=QL(),XGr=uP(),JGr=cP(),YGr=gP(),ZGr=ea(),$Gr=tf(),QGr=Fs(),KGr=bP(),rDr=SP(),eDr=TP(),tDr=MP(),iDr=cf(),aDr=lf(),nDr=rx(),sDr=yx(),uDr=Xx(),oDr=ej(),vDr=Wa(),fDr=wj(),cDr=Bj(),lDr=ia(),pDr=aa(),dDr=Lr(),gDr=bB();function mDr(r){return Mr(r,"abs",CGr),Mr(r,"abs2",VGr),Mr(r,"acos",UGr),Mr(r,"acosh",GGr),Mr(r,"acot",DGr),Mr(r,"acovercos",HGr),Mr(r,"acoversin",zGr),Mr(r,"acsc",WGr),Mr(r,"acsch",XGr),Mr(r,"ahavercos",JGr),Mr(r,"ahaversin",YGr),Mr(r,"asin",ZGr),Mr(r,"asinh",$Gr),Mr(r,"atan",QGr),Mr(r,"atanh",KGr),Mr(r,"avercos",rDr),Mr(r,"aversin",eDr),Mr(r,"bernoulli",tDr),Mr(r,"besselj0",iDr),Mr(r,"besselj1",aDr),Mr(r,"bessely0",nDr),Mr(r,"bessely1",sDr),Mr(r,"binet",uDr),Mr(r,"cbrt",oDr),Mr(r,"ceil",vDr),Mr(r,"ceil10",fDr),Mr(r,"ceil2",cDr),Mr(r,"cos",lDr),Mr(r,"sin",pDr),Mr(r,"sqrt",dDr),Mr(r,"zeta",gDr),r}wB.exports=mDr});var SB=s((nIe,NB)=>{"use strict";var yDr=$r(),hDr=P_(),qDr=UR(),bDr=EB();function wDr(r){return yDr(r,"tools",qDr({})),r=hDr(r),r=bDr(r),r}NB.exports=wDr});var _B=s((sIe,AB)=>{"use strict";var EDr=F1(),OB=EDr();function NDr(){return typeof OB.BigInt=="function"&&typeof BigInt=="function"&&typeof OB.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}AB.exports=NDr});var IB=s((uIe,TB)=>{"use strict";var SDr=_B();TB.exports=SDr});var PB=s((oIe,LB)=>{"use strict";var RB=Wr();function ODr(r){var e,t,i,a,n,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,a=RB(r[0]),u=1;u<t;u++)if(n=RB(r[u]),e&&n<a?e=!1:i&&n>a&&(i=!1),i||e)a=n;else return 0;return i&&e?3:i?1:2}LB.exports=ODr});var Lf=s((vIe,FB)=>{"use strict";var ADr=PB();FB.exports=ADr});var jB=s((fIe,xB)=>{"use strict";function _Dr(r,e){return e&&(r===2||r===3)}xB.exports=_Dr});var BB=s((cIe,MB)=>{"use strict";function TDr(r,e){return e&&(r===1||r===3)}MB.exports=TDr});var CB=s((lIe,kB)=>{"use strict";var IDr=is();function RDr(r,e,t,i,a){var n;return r===0||a===0?!1:(n=IDr(e,t,i),r===n[1]-n[0]+1)}kB.exports=RDr});var UB=s((pIe,VB)=>{"use strict";function LDr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}VB.exports=LDr});var DB=s((dIe,GB)=>{"use strict";function PDr(r){var e,t,i,a,n,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,a=this._offset,this._order==="column-major"){for(u=0;u<i;u++)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}for(u=i-1;u>=0;u--)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}GB.exports=PDr});var zB=s((gIe,HB)=>{"use strict";function FDr(r,e){var t,i,a,n,u,o;if(a=this._ndims,a===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,n=this._offset,this._order==="column-major"){for(o=0;o<a;o++)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}for(o=a-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}HB.exports=FDr});var XB=s((mIe,WB)=>{"use strict";function xDr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}WB.exports=xDr});var YB=s((yIe,JB)=>{"use strict";function jDr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}JB.exports=jDr});var $B=s((hIe,ZB)=>{"use strict";var MDr=tt(),BDr=it();function kDr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(MDr(t),BDr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}ZB.exports=kDr});var rk=s((qIe,KB)=>{"use strict";var CDr=Jr().isPrimitive,VDr=C(),QB=/[-\/\\^$*+?.()|[\]{}]/g;function UDr(r){var e,t,i;if(!CDr(r))throw new TypeError(VDr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(QB,"\\$&"):(t=r.substring(1,i),t=t.replace(QB,"\\$&"),r=r[0]+t+r.substring(i),r)}KB.exports=UDr});var tk=s((bIe,ek)=>{"use strict";var GDr=rk();ek.exports=GDr});var ak=s((wIe,ik)=>{"use strict";var DDr=RegExp.prototype.exec;ik.exports=DDr});var sk=s((EIe,nk)=>{"use strict";var HDr=ak();function zDr(r){try{return HDr.call(r),!0}catch{return!1}}nk.exports=zDr});var ok=s((NIe,uk)=>{"use strict";var WDr=pa(),XDr=Kr(),JDr=sk(),YDr=WDr();function ZDr(r){return typeof r=="object"?r instanceof RegExp?!0:YDr?JDr(r):XDr(r)==="[object RegExp]":!1}uk.exports=ZDr});var fk=s((SIe,vk)=>{"use strict";var $Dr=ok();vk.exports=$Dr});var lk=s((OIe,ck)=>{"use strict";function QDr(r,e,t){return r.replace(e,t)}ck.exports=QDr});var di=s((AIe,pk)=>{"use strict";var KDr=lk();pk.exports=KDr});var gk=s((_Ie,dk)=>{"use strict";var rHr=tk(),eHr=yr(),Pf=Jr().isPrimitive,tHr=fk(),Ff=C(),iHr=di();function aHr(r,e,t){if(!Pf(r))throw new TypeError(Ff("invalid argument. First argument must be a string. Value: `%s`.",r));if(Pf(e))e=new RegExp(rHr(e),"g");else if(!tHr(e))throw new TypeError(Ff("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Pf(t)&&!eHr(t))throw new TypeError(Ff("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return iHr(r,e,t)}dk.exports=aHr});var yk=s((TIe,mk)=>{"use strict";var nHr=gk();mk.exports=nHr});var qk=s((IIe,hk)=>{"use strict";var sHr=yk(),xf=tt(),jf=it(),uHr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function oHr(){var r,e,t,i,a,n,u;if(e=this._shape.length,a=this._dtype,i="ndarray( '"+a+"', ",r="",this._length<=100)if(a==="complex64"||a==="complex128")for(u=0;u<this._length;u++)n=this.iget(u),r+=xf(n)+", "+jf(n),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(a==="complex64"||a==="complex128")for(u=0;u<3;u++)n=this.iget(u),r+=xf(n)+", "+jf(n),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",a==="complex64"||a==="complex128")for(u=2;u>=0;u--)n=this.iget(this._length-1-u),r+=xf(n)+", "+jf(n),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=uHr[this.dtype],i+=sHr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}hk.exports=oHr});var wk=s((RIe,bk)=>{"use strict";var vHr=typeof ArrayBuffer=="function"?ArrayBuffer:null;bk.exports=vHr});var Nk=s((LIe,Ek)=>{"use strict";var fHr=U0(),cHr=ge(),Ws=wk();function lHr(){var r,e,t;if(typeof Ws!="function")return!1;try{t=new Ws(16),r=fHr(t)&&typeof Ws.isView=="function",r&&(e=new cHr(t),e[0]=-3.14,e[1]=NaN,r=r&&Ws.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}Ek.exports=lHr});var Ok=s((PIe,Sk)=>{"use strict";var pHr=Nk();Sk.exports=pHr});var _k=s((FIe,Ak)=>{"use strict";var dHr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;Ak.exports=dHr});var Ik=s((xIe,Tk)=>{"use strict";function gHr(){throw new Error("not implemented")}Tk.exports=gHr});var Xs=s((jIe,Rk)=>{"use strict";var mHr=Ok(),yHr=_k(),hHr=Ik(),Mf;mHr()?Mf=yHr:Mf=hHr;Rk.exports=Mf});var Pk=s((MIe,Lk)=>{"use strict";var qHr=Kr(),bHr=typeof DataView=="function";function wHr(r){return bHr&&r instanceof DataView||qHr(r)==="[object DataView]"}Lk.exports=wHr});var xk=s((BIe,Fk)=>{"use strict";var EHr=Pk();Fk.exports=EHr});var Mk=s((kIe,jk)=>{"use strict";var NHr=typeof DataView=="function"?DataView:null;jk.exports=NHr});var Ck=s((CIe,kk)=>{"use strict";var SHr=xk(),OHr=Xs(),Bk=Mk();function AHr(){var r,e,t;if(typeof Bk!="function")return!1;try{t=new OHr(24),e=new Bk(t,8),r=SHr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}kk.exports=AHr});var Uk=s((VIe,Vk)=>{"use strict";var _Hr=Ck();Vk.exports=_Hr});var Dk=s((UIe,Gk)=>{"use strict";var THr=typeof DataView=="function"?DataView:void 0;Gk.exports=THr});var zk=s((GIe,Hk)=>{"use strict";function IHr(){throw new Error("not implemented")}Hk.exports=IHr});var a0=s((DIe,Wk)=>{"use strict";var RHr=Uk(),LHr=Dk(),PHr=zk(),Bf;RHr()?Bf=LHr:Bf=PHr;Wk.exports=Bf});var Jk=s((HIe,Xk)=>{"use strict";var FHr=typeof BigInt=="function"?BigInt:void 0;Xk.exports=FHr});var Zk=s((zIe,Yk)=>{"use strict";var xHr=Jk();Yk.exports=xHr});var $k=s((WIe,jHr)=>{jHr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var rC=s((XIe,Kk)=>{"use strict";var Qk=$k();function MHr(){var r;return arguments.length===0?Qk.all.slice():(r=Qk[arguments[0]],r?r.slice():[])}Kk.exports=MHr});var tC=s((JIe,eC)=>{"use strict";function BHr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}eC.exports=BHr});var aC=s((YIe,iC)=>{"use strict";var kHr=$r(),CHr=Ba();function VHr(r,e){var t,i,a;for(t=CHr(e),a=0;a<t.length;a++)i=t[a],kHr(r,i,e[i]);return r}iC.exports=VHr});var Cf=s((ZIe,sC)=>{"use strict";var UHr=G(),kf=rC(),nC=tC(),GHr=aC();UHr(kf,"enum",nC);GHr(kf,nC());sC.exports=kf});var uC=s(($Ie,DHr)=>{DHr.exports=["row-major","column-major"]});var vC=s((QIe,oC)=>{"use strict";var HHr=uC();function zHr(){return HHr.slice()}oC.exports=zHr});var cC=s((KIe,fC)=>{"use strict";function WHr(){return{"row-major":1,"column-major":2}}fC.exports=WHr});var n0=s((rRe,pC)=>{"use strict";var XHr=G(),lC=vC(),JHr=cC();XHr(lC,"enum",JHr);pC.exports=lC});var dC=s((eRe,YHr)=>{YHr.exports=["throw","clamp","wrap"]});var mC=s((tRe,gC)=>{"use strict";var ZHr=dC();function $Hr(){return ZHr.slice()}gC.exports=$Hr});var hC=s((iRe,yC)=>{"use strict";function QHr(){return{throw:1,clamp:2,wrap:3}}yC.exports=QHr});var Vf=s((aRe,bC)=>{"use strict";var KHr=G(),qC=mC(),rzr=hC();KHr(qC,"enum",rzr);bC.exports=qC});var NC=s((nRe,EC)=>{"use strict";var gi=Ye(),ezr=Xs(),tzr=a0(),s0=Zk(),izr=Cf().enum,azr=n0().enum,nzr=Vf().enum,szr=izr(),uzr=azr(),wC=nzr();function ozr(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new tzr(new ezr(t)),a=this._shape,n=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,gi?1:0),f+=1,o.setInt16(f,szr[i],gi),f+=2,o.setBigInt64(f,s0(l),gi),c=l*8,f+=8,m=0;m<l;m++)o.setBigInt64(f,s0(a[m]),gi),o.setBigInt64(f+c,s0(n[m]*r),gi),f+=8;for(f+=c,o.setBigInt64(f,s0(this._offset*r),gi),f+=8,o.setInt8(f,uzr[this._order]),f+=1,o.setInt8(f,wC[v]),f+=1,o.setBigInt64(f,s0(p),gi),f+=8,m=0;m<p;m++)o.setInt8(f,wC[u[m]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,gi),this.__meta_dataview__=o,o}EC.exports=ozr});var OC=s((sRe,SC)=>{"use strict";var u0=Ye(),vzr=et(),fzr=a0(),czr=Gr(),lzr=4294967295>>>0,pzr=4294967296;function dzr(r){var e,t,i,a;return e=new vzr(8),r===0||(a=(r&lzr)>>>0,i=czr(r/pzr),t=new fzr(e.buffer),u0?(t.setUint32(0,a,u0),t.setUint32(4,i,u0)):(t.setUint32(0,i,u0),t.setUint32(4,a,u0))),e}SC.exports=dzr});var _C=s((uRe,AC)=>{"use strict";var o0=Ye(),gzr=et(),mzr=a0(),yzr=Gr(),hzr=4294967295>>>0,qzr=4294967296,Ys=new gzr(8),Js=new mzr(Ys.buffer);function bzr(r,e,t,i){var a,n,u;if(r===0){for(u=0;u<Ys.length;u++)e[i]=0,i+=t;return e}for(n=(r&hzr)>>>0,a=yzr(r/qzr),o0?(Js.setUint32(0,n,o0),Js.setUint32(4,a,o0)):(Js.setUint32(0,a,o0),Js.setUint32(4,n,o0)),u=0;u<Ys.length;u++)e[i]=Ys[u],i+=t;return e}AC.exports=bzr});var RC=s((oRe,IC)=>{"use strict";var wzr=G(),TC=OC(),Ezr=_C();wzr(TC,"assign",Ezr);IC.exports=TC});var FC=s((vRe,PC)=>{"use strict";var Uf=Ye(),Nzr=Xs(),Szr=a0(),Ozr=et(),Azr=Cf().enum,_zr=n0().enum,Tzr=Vf().enum,v0=RC().assign,Izr=Azr(),Rzr=_zr(),LC=Tzr();function Lzr(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,m=o.length,i=33+p*16+m,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new Szr(new Nzr(i)),e=new Ozr(v.buffer),n=this._shape,u=this._strides,a=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,Uf?1:0),c+=1,v.setInt16(c,Izr[a],Uf),c+=2,v0(p,e,1,c),l=p*8,c+=8,y=0;y<p;y++)v0(n[y],e,1,c),v0(u[y]*r,e,1,c+l),c+=8;for(c+=l,v0(this._offset*r,e,1,c),c+=8,v.setInt8(c,Rzr[this._order]),c+=1,v.setInt8(c,LC[f]),c+=1,v0(m,e,1,c),c+=8,y=0;y<m;y++)v.setInt8(c,LC[o[y]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,Uf),this.__meta_dataview__=v,v}PC.exports=Lzr});var jC=s((fRe,xC)=>{"use strict";var Pzr=IB(),mi=G(),Ze=qr(),Fzr=Zv(),xzr=Jv(),jzr=Lf(),Mzr=R1(),Bzr=jB(),kzr=BB(),Czr=CB(),Vzr=UB(),Uzr=DB(),Gzr=zB(),Dzr=XB(),Hzr=YB(),zzr=$B(),Wzr=qk(),Xzr=NC(),Jzr=FC();function te(r,e,t,i,a,n){var u,o,v,f,c;if(!(this instanceof te))return new te(r,e,t,i,a,n);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=Fzr(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=a,this._order=n,this._shape=t,this._strides=i,this._accessors=Mzr(e.get&&e.set),this._iterationOrder=xzr(i),u=Czr(f,t,i,a,this._iterationOrder),v=jzr(i),this._flags={ROW_MAJOR_CONTIGUOUS:kzr(v,u),COLUMN_MAJOR_CONTIGUOUS:Bzr(v,u),READONLY:!1},this.__meta_dataview__=null,this}mi(te,"name","ndarray");Ze(te.prototype,"byteLength",function(){return this._byteLength});Ze(te.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Ze(te.prototype,"data",function(){return this._buffer});Ze(te.prototype,"dtype",function(){return this._dtype});Ze(te.prototype,"flags",function(){return Vzr(this._flags)});Ze(te.prototype,"length",function(){return this._length});Ze(te.prototype,"ndims",function(){return this._ndims});Ze(te.prototype,"offset",function(){return this._offset});Ze(te.prototype,"order",function(){return this._order});Ze(te.prototype,"shape",function(){return this._shape.slice()});Ze(te.prototype,"strides",function(){return this._strides.slice()});mi(te.prototype,"get",Hzr);mi(te.prototype,"iget",Uzr);mi(te.prototype,"set",Dzr);mi(te.prototype,"iset",Gzr);mi(te.prototype,"toString",Wzr);mi(te.prototype,"toJSON",zzr);mi(te.prototype,"__array_meta_dataview__",Pzr()?Xzr:Jzr);xC.exports=te});var f0=s((cRe,MC)=>{"use strict";var Yzr=jC();MC.exports=Yzr});var kC=s((lRe,BC)=>{"use strict";var Zzr=f0();function $zr(r){return r instanceof Zzr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}BC.exports=$zr});var VC=s((pRe,CC)=>{"use strict";var Qzr=kC();CC.exports=Qzr});var GC=s((dRe,UC)=>{"use strict";function Kzr(r){var e=r.flags;return e&&e.READONLY===!0}UC.exports=Kzr});var HC=s((gRe,DC)=>{"use strict";var rWr=GC();DC.exports=rWr});var WC=s((mRe,zC)=>{"use strict";var eWr=be().isPrimitive,tWr=Be(),Gf=C();function iWr(r){var e,t,i,a;if(typeof r!="object"||r===null)throw new TypeError(Gf("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!tWr(t))throw new TypeError(Gf("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],a=0;a<t.length;a++){if(i=t[a],!eWr(i))throw new TypeError(Gf("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}zC.exports=iWr});var JC=s((yRe,XC)=>{"use strict";var aWr=WC();XC.exports=aWr});var ZC=s((hRe,YC)=>{"use strict";function nWr(r){return r===null}YC.exports=nWr});var Df=s((qRe,$C)=>{"use strict";var sWr=ZC();$C.exports=sWr});var KC=s((bRe,QC)=>{"use strict";function uWr(r){return r===void 0}QC.exports=uWr});var Hf=s((wRe,rV)=>{"use strict";var oWr=KC();rV.exports=oWr});var tV=s((ERe,eV)=>{"use strict";var Wf=G(),Xf=qr(),vWr=ye().isPrimitive,fWr=Df(),cWr=Hf(),Zs=C();function zf(r){return vWr(r)||fWr(r)||cWr(r)}function Ot(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof Ot))return new Ot(e,t,i);if(!zf(e))throw new TypeError(Zs("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!zf(t))throw new TypeError(Zs("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(zf(i)){if(i===0)throw new RangeError(Zs("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(Zs("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}Wf(Ot,"name","Slice");Xf(Ot.prototype,"start",function(){return this._start});Xf(Ot.prototype,"stop",function(){return this._stop});Xf(Ot.prototype,"step",function(){return this._step});Wf(Ot.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});Wf(Ot.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});eV.exports=Ot});var Ya=s((NRe,iV)=>{"use strict";var lWr=tV();iV.exports=lWr});var nV=s((SRe,aV)=>{"use strict";var pWr=Ya(),dWr=mt();function gWr(r){return r instanceof pWr||dWr(r)==="Slice"}aV.exports=gWr});var uV=s((ORe,sV)=>{"use strict";var mWr=nV();sV.exports=mWr});var fV=s((ARe,vV)=>{"use strict";var Jf=G(),oV=qr(),yWr=ye().isPrimitive,hWr=Df(),qWr=Hf(),bWr=uV(),wWr=C();function EWr(r){return yWr(r)||hWr(r)||qWr(r)||bWr(r)}function Ae(){var r,e,t,i,a;if(r=arguments.length,!(this instanceof Ae)){if(r===1)return new Ae(arguments[0]);if(r===2)return new Ae(arguments[0],arguments[1]);if(r===3)return new Ae(arguments[0],arguments[1],arguments[2]);if(r===4)return new Ae(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Ae(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],a=0;a<r;a++)t.push(arguments[a]);return e=Object.create(Ae.prototype),Ae.apply(e,t)}for(this._data=[],a=0;a<r;a++){if(i=arguments[a],!EWr(i))throw new TypeError(wWr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",a,i));this._data.push(i===void 0?null:i)}return this}Jf(Ae,"name","MultiSlice");oV(Ae.prototype,"ndims",function(){return this._data.length});oV(Ae.prototype,"data",function(){return this._data.slice()});Jf(Ae.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});Jf(Ae.prototype,"toJSON",function(){var e,t,i,a;for(e=this._data,t={type:"MultiSlice",data:[]},a=0;a<e.length;a++)i=e[a],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});vV.exports=Ae});var $s=s((_Re,cV)=>{"use strict";var NWr=fV();cV.exports=NWr});var pV=s((TRe,lV)=>{"use strict";function SWr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}lV.exports=SWr});var gV=s((IRe,dV)=>{"use strict";var OWr=Ya(),c0=pV();function AWr(r,e,t){var i,a,n;if(i=r.start,a=r.stop,n=r.step,n===null&&(n=1),i===null)n>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return c0();i=0}}else if(i>=e){if(t)return c0();n<0?i=e-1:i=e}if(a===null)n>0?a=e:a=null;else if(a<0){if(a=e+a,a<0)if(n>0){if(t)return c0();a=0}else{if(t&&a<-1)return c0();a=null}}else if(a>e){if(t)return c0();a=e}return new OWr(i,a,n)}dV.exports=AWr});var yV=s((RRe,mV)=>{"use strict";var _Wr=gV();mV.exports=_Wr});var qV=s((LRe,hV)=>{"use strict";function TWr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}hV.exports=TWr});var EV=s((PRe,wV)=>{"use strict";var IWr=$s(),l0=Ya(),RWr=yV(),bV=qV();function LWr(r,e,t){return r===null?new l0(0,e,1):typeof r=="number"?r>=e?t?bV():new l0(e,e,1):r<0?(r=e+r,r<0?t?bV():new l0(0,0,1):new l0(r,r+1,1)):new l0(r,r+1,1):RWr(r,e,t)}function PWr(r,e,t){var i,a,n,u;for(i=r.data,a=[],u=0;u<i.length;u++){if(n=LWr(i[u],e[u],t),n.code!==void 0)return n;a.push(n)}return IWr.apply(null,a)}wV.exports=PWr});var SV=s((FRe,NV)=>{"use strict";var FWr=EV();NV.exports=FWr});var AV=s((xRe,OV)=>{"use strict";function xWr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}OV.exports=xWr});var TV=s((jRe,_V)=>{"use strict";var jWr=AV();_V.exports=jWr});var RV=s((MRe,IV)=>{"use strict";var MWr=Wa();function BWr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:MWr((i-t)/e)}IV.exports=BWr});var PV=s((BRe,LV)=>{"use strict";var kWr=RV();LV.exports=kWr});var xV=s((kRe,FV)=>{"use strict";var CWr=PV();function VWr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(CWr(e[i]));return t}FV.exports=VWr});var MV=s((CRe,jV)=>{"use strict";var UWr=xV();jV.exports=UWr});var kV=s((VRe,BV)=>{"use strict";function GWr(r){return r.dtype}BV.exports=GWr});var VV=s((URe,CV)=>{"use strict";var DWr=kV();CV.exports=DWr});var GV=s((GRe,UV)=>{"use strict";var HWr=wn();function zWr(r,e){var t=r.shape;return e?HWr(t):t}UV.exports=zWr});var HV=s((DRe,DV)=>{"use strict";var WWr=GV();DV.exports=WWr});var WV=s((HRe,zV)=>{"use strict";function XWr(r){var e,t,i,a;for(e=r.length,t=[],a=0;a<e;a++)t.push(0);for(i=1,a=e-1;a>=0;a--)t[a]=i,i*=r[a];return t}function JWr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function YWr(r,e){return e==="column-major"?JWr(r):XWr(r)}zV.exports=YWr});var JV=s((zRe,XV)=>{"use strict";function ZWr(r,e){var t,i,a;for(t=r.length,i=1,a=t-1;a>=0;a--)e[a]=i,i*=r[a];return e}function $Wr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function QWr(r,e,t){return e==="column-major"?$Wr(r,t):ZWr(r,t)}XV.exports=QWr});var Qs=s((WRe,ZV)=>{"use strict";var KWr=G(),YV=WV(),rXr=JV();KWr(YV,"assign",rXr);ZV.exports=YV});var QV=s((XRe,$V)=>{"use strict";var eXr=Qs(),tXr=wn(),iXr="row-major";function aXr(r,e){var t,i,a;return a=r.strides,typeof a!="object"||a===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=iXr),eXr(i,t))):e?tXr(a):a}$V.exports=aXr});var rU=s((JRe,KV)=>{"use strict";var nXr=QV();KV.exports=nXr});var tU=s((YRe,eU)=>{"use strict";function sXr(r,e){var t,i,a;for(i=r.length,t=0,a=0;a<i;a++)e[a]<0&&(t-=e[a]*(r[a]-1));return t}eU.exports=sXr});var Ks=s((ZRe,iU)=>{"use strict";var uXr=tU();iU.exports=uXr});var nU=s(($Re,aU)=>{"use strict";var oXr=Ks();function vXr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:oXr(t,e))}aU.exports=vXr});var uU=s((QRe,sU)=>{"use strict";var fXr=nU();sU.exports=fXr});var vU=s((KRe,oU)=>{"use strict";var cXr=Lf(),Yf="row-major",lXr="column-major";function pXr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=cXr(e),t===1||t===3)?Yf:t===2?lXr:r.shape.length===0?Yf:null)}oU.exports=pXr});var cU=s((rLe,fU)=>{"use strict";var dXr=vU();fU.exports=dXr});var pU=s((eLe,lU)=>{"use strict";function gXr(r){return r.data}lU.exports=gXr});var gU=s((tLe,dU)=>{"use strict";var mXr=pU();dU.exports=mXr});var yU=s((iLe,mU)=>{"use strict";function yXr(r,e,t){var i,a,n;for(i=r.data,a=t,n=0;n<i.length;n++)a+=e[n]*i[n].start;return a}mU.exports=yXr});var qU=s((aLe,hU)=>{"use strict";function hXr(r,e,t){var i,a,n,u;for(i=r.data,a=[],n=0;n<t.length;n++)u=t[n],a.push(e[u]*i[u].step);return a}hU.exports=hXr});var wU=s((nLe,bU)=>{"use strict";var qXr=oi(),bXr=ge(),wXr=rt(),EXr=ya(),NXr=ai(),SXr=qa(),OXr=Hi(),AXr=me(),_Xr=et(),TXr=ha(),IXr=Ta(),RXr=Pa(),LXr={binary:qXr,float64:bXr,float32:wXr,generic:Array,int16:EXr,int32:NXr,int8:SXr,uint16:OXr,uint32:AXr,uint8:_Xr,uint8c:TXr,complex64:IXr,complex128:RXr};bU.exports=LXr});var NU=s((sLe,EU)=>{"use strict";var PXr=wU();function FXr(r){return PXr[r]||null}EU.exports=FXr});var OU=s((uLe,SU)=>{"use strict";var xXr=NU();SU.exports=xXr});var _U=s((oLe,AU)=>{"use strict";var jXr=yr(),MXr=oi(),BXr=jXr(MXr.allocUnsafe);AU.exports=BXr});var IU=s((vLe,TU)=>{"use strict";var kXr=be(),CXr=C(),VXr=oi();function UXr(r){if(!kXr(r))throw new TypeError(CXr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return VXr.allocUnsafe(r)}TU.exports=UXr});var LU=s((fLe,RU)=>{"use strict";var GXr=be(),DXr=C(),HXr=oi();function zXr(r){if(!GXr(r))throw new TypeError(DXr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new HXr(r)}RU.exports=zXr});var FU=s((cLe,PU)=>{"use strict";var WXr=_U(),XXr=IU(),JXr=LU(),Zf;WXr?Zf=XXr:Zf=JXr;PU.exports=Zf});var jU=s((lLe,xU)=>{"use strict";function YXr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}xU.exports=YXr});var BU=s((pLe,MU)=>{"use strict";var ZXr=OU(),$Xr=FU(),QXr=jU();function KXr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function rJr(r){return QXr($Xr(r))}function eJr(r,e){var t=ZXr(r);return t?new t(e):null}function tJr(r,e){return r==="generic"?KXr(e):r==="binary"?rJr(e):eJr(r,e)}MU.exports=tJr});var $f=s((dLe,kU)=>{"use strict";var iJr=BU();kU.exports=iJr});var VU=s((gLe,CU)=>{"use strict";var aJr=$f(),nJr=ii();function sJr(r,e,t,i,a){var n,u;return u=t.length,u===0?n=[0]:n=nJr(u),new r(e,aJr(e,0),t,n,0,i,{readonly:a})}CU.exports=sJr});var WU=s((mLe,zU)=>{"use strict";var UU=SV(),uJr=TV(),GU=MV(),Qf=Yv(),oJr=ii(),DU=ft(),vJr=VV(),fJr=HV(),cJr=rU(),lJr=uU(),pJr=cU(),Kf=gU(),HU=C(),dJr=yU(),gJr=qU(),mJr=VU();function yJr(r,e,t,i){var a,n,u,o,v,f,c,l,p,m;if(u=vJr(r),o=fJr(r,!0),a=cJr(r,!0),n=lJr(r),v=pJr(r),c=o.length,e.ndims!==c)throw new RangeError(HU("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,Kf(r),o,a,n,v,{readonly:!i});if(f=uJr(e),m=UU(e,o,!0),m.code){if(t)throw new RangeError(HU("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));m=UU(e,o,!1),p=GU(m),DU(Qf(p,f))>0&&(p=oJr(p.length))}else p=GU(m);return DU(p)===0?mJr(l,u,Qf(p,f),v,!i):(n=dJr(m,a,n),p=Qf(p,f),p.length===0?new l(u,Kf(r),[],[0],n,v,{readonly:!i}):(a=gJr(m,a,f),new l(u,Kf(r),p,a,n,v,{readonly:!i})))}zU.exports=yJr});var r3=s((yLe,XU)=>{"use strict";var hJr=WU();XU.exports=hJr});var e3=s((hLe,JU)=>{"use strict";var qJr="row-major";function bJr(r,e,t,i,a){var n,u;for(n=r-1;n>i;n--)a[n]=t[n];for(n=i;n>=0&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n--);for(n-=1;n>=0;n--)a[n]=t[n];return a}function wJr(r,e,t,i,a){var n,u;for(n=0;n<i;n++)a[n]=t[n];for(n=i;n<r&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n++);for(n+=1;n<r;n++)a[n]=t[n];return a}function EJr(r,e,t,i,a){var n=r.length;if(n===0)return null;if(i<0){if(i+=n,i<0)return null}else if(i>=n)return null;return e===qJr?bJr(n,r,t,i,a):wJr(n,r,t,i,a)}JU.exports=EJr});var ZU=s((qLe,YU)=>{"use strict";var NJr=ii(),SJr=e3();function OJr(r,e,t,i){return SJr(r,e,t,i,NJr(r.length))}YU.exports=OJr});var t3=s((bLe,QU)=>{"use strict";var AJr=G(),$U=ZU(),_Jr=e3();AJr($U,"assign",_Jr);QU.exports=$U});var tG=s((wLe,eG)=>{"use strict";var i3=G(),TJr=mr(),IJr=de().isPrimitive,RJr=VC(),LJr=HC(),PJr=vr(),KU=An(),FJr=ii(),xJr=JC(),jJr=ft(),MJr=r3(),BJr=t3().assign,kJr=$s(),ru=C();function rG(r){var e,t,i,a,n,u,o,v,f,c,l;if(!RJr(r))throw new TypeError(ru("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(a={writable:!1},arguments.length>1){if(e=arguments[1],!TJr(e))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",e));if(PJr(e,"readonly")){if(!IJr(e.readonly))throw new TypeError(ru("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(a.writable=!e.readonly,a.writable&&LJr(r))throw new Error(ru("invalid option. Cannot write to read-only array."))}}if(t=xJr(r),i=t.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return c=jJr(t),c===0&&(u=!0),c/=t[i-1],v=i-2,f=t[v],l=-1,o=FJr(i),o[i-1]=null,n={},i3(n,"next",p),i3(n,"return",m),KU&&i3(n,KU,y),n;function p(){var g,d;return l+=1,u||l>=c?{done:!0}:(g=kJr.apply(null,o),d=(o[v]+1)%f,o[v]=d,d===0&&(o=BJr(t,"row-major",o,v-1,o)),{value:MJr(r,g,!0,a.writable),done:!1})}function m(g){return u=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return rG(r,a)}}eG.exports=rG});var aG=s((ELe,iG)=>{"use strict";var CJr=tG();iG.exports=CJr});var uG=s((NLe,sG)=>{"use strict";function nG(r,e,t,i,a,n){var u,o,v,f,c;if(n>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[n],u=t[n],c=0;c<f;c++)o=nG(r,e,t,i,a,n+1),v.push(o),i+=u;return v}sG.exports=nG});var vG=s((SLe,oG)=>{"use strict";var VJr=In(),UJr=uG();function GJr(r,e,t,i,a){var n;if(e.length===0)return[];for(n=0;n<e.length;n++)if(e[n]===0)return[];return UJr(VJr(r),e,t,i,a,0)}oG.exports=GJr});var a3=s((OLe,fG)=>{"use strict";var DJr=vG();fG.exports=DJr});var lG=s((ALe,cG)=>{"use strict";var HJr=a3(),zJr=ft();function WJr(r,e,t,i,a,n,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<a.length;f++)r[v]=a[f],v+=1;return r[v]="offset",v+=1,r[v]=n,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:zJr(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:HJr(r,[r.length,1],[1,1],0,"row-major")}cG.exports=WJr});var dG=s((_Le,pG)=>{"use strict";var XJr=lG();pG.exports=XJr});var yG=s((TLe,mG)=>{"use strict";var JJr=n0(),gG=JJr(),YJr=gG.length;function ZJr(r){var e;for(e=0;e<YJr;e++)if(r===gG[e])return!0;return!1}mG.exports=ZJr});var qG=s((ILe,hG)=>{"use strict";var $Jr=yG();hG.exports=$Jr});var wG=s((RLe,bG)=>{"use strict";function QJr(r){return r.toLowerCase()}bG.exports=QJr});var sa=s((LLe,EG)=>{"use strict";var KJr=wG();EG.exports=KJr});var SG=s((PLe,NG)=>{"use strict";var rYr=da(),eYr=Ji(),tYr=Sa(),iYr=Fa();function aYr(r,e){var t,i,a,n;for(a=iYr(r),rYr(r)?i=eYr(a):i=tYr(a),t=r.length,n=0;n<t;n++)if(i(r,n)===e)return!0;return!1}NG.exports=aYr});var AG=s((FLe,OG)=>{"use strict";var nYr=Be(),sYr=da(),uYr=Ji(),oYr=Fa(),vYr=C();function fYr(r){var e,t,i;if(!nYr(r))throw new TypeError(vYr("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=oYr(r),sYr(r)&&(e=uYr(i)),t=r.length,e===void 0?a:n;function a(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function n(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}OG.exports=fYr});var IG=s((xLe,TG)=>{"use strict";var cYr=G(),_G=SG(),lYr=AG();cYr(_G,"factory",lYr);TG.exports=_G});var FG=s((jLe,PG)=>{"use strict";var eu=be().isPrimitive,pYr=ye().isPrimitive,RG=Er().isPrimitive,dYr=qG(),gYr=A2(),n3=sa(),mYr=IG().factory,yYr=n0(),hYr=f0(),qYr=ft(),ct=C(),bYr=U2(),wYr=j0(),EYr=yYr(),LG=["string","number","complex","boolean","date","any"],NYr=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],SYr=NYr.length,OYr=5,AYr=mYr(LG);function _Yr(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function TYr(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!RG(i));a++){if(!eu(i))throw new TypeError(ct('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function IYr(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!RG(i));a++){if(!pYr(i))throw new TypeError(ct('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function RYr(r,e){var t,i,a;if(r[0]!=="ndarray")throw new TypeError(ct('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(a=1;a<r.length;a++)if(i=n3(r[a]),i==="shape")e.shape=TYr(r,a+1),e.ndims=e.shape.length,a+=e.ndims;else if(i==="strides")e.strides=IYr(r,a+1),a+=e.strides.length;else if(i==="offset"){if(a+=1,t=r[a],!eu(t))throw new TypeError(ct('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(a+=1,t=n3(r[a]),!dYr(t))throw new TypeError(ct('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',EYr.join('", "'),t));e.order=t}else if(i==="dtype"){if(a+=1,t=n3(r[a]),!AYr(t))throw new TypeError(ct('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',LG.join('", "'),t));e.dtype=t}else if(i==="length"){if(a+=1,t=r[a],!eu(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(a+=1,t=r[a],!eu(t))throw new TypeError(ct('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){a+=1;break}else throw new TypeError(ct('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function LYr(r,e){return SYr+r+e+OYr}function PYr(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(ct("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=qYr(r.shape),t!==r.length)throw new TypeError(ct('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!gYr(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function FYr(r){var e;if(!bYr(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=_Yr(),e.rawBuffer=wYr(r),e=RYr(e.rawBuffer,e),e=PYr(e),e.headerLength=LYr(e.ndims,e.strides.length),e.ndarray=new hYr("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}PG.exports=FYr});var jG=s((MLe,xG)=>{"use strict";var xYr=FG();xG.exports=xYr});var BG=s((BLe,MG)=>{"use strict";var jYr=typeof String.prototype.trim<"u";MG.exports=jYr});var s3=s((kLe,kG)=>{"use strict";var MYr=String.prototype.trim;kG.exports=MYr});var GG=s((CLe,UG)=>{"use strict";var CG=s3(),BYr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,VG="\u180E";function kYr(){return CG.call(BYr)===""&&CG.call(VG)===VG}UG.exports=kYr});var HG=s((VLe,DG)=>{"use strict";var CYr=di(),VYr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function UYr(r){return CYr(r,VYr,"$1")}DG.exports=UYr});var WG=s((ULe,zG)=>{"use strict";var GYr=s3();function DYr(r){return GYr.call(r)}zG.exports=DYr});var yi=s((GLe,XG)=>{"use strict";var HYr=BG(),zYr=GG(),WYr=HG(),XYr=WG(),u3;HYr&&zYr()?u3=XYr:u3=WYr;XG.exports=u3});var YG=s((DLe,JG)=>{"use strict";var JYr=/(?:\s*-\s*)(?=\d+)(\d+)$/;JG.exports=JYr});var $G=s((HLe,ZG)=>{"use strict";var YYr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;ZG.exports=YYr});var rD=s((zLe,KG)=>{"use strict";var QG=Gr(),ZYr=YG(),$Yr=$G();function QYr(r,e,t,i){var a;if(r==="end")return e;if(a=r.match(ZYr),a){if(r=e-parseInt(a[1],10),r<0){if(i)return-2;r=0}return r}return a=r.match($Yr),a?(r=parseFloat(a[1]),r<1?i?-2:-1:t&&e>0&&r!==1?QG((e-1)/r):QG(e/r)):-1}KG.exports=QYr});var tD=s((WLe,eD)=>{"use strict";var KYr=/\s*:\s*/;eD.exports=KYr});var aD=s((XLe,iD)=>{"use strict";var rZr=/^[-+]?[0-9]+$/;iD.exports=rZr});var sD=s((JLe,nD)=>{"use strict";var eZr=/^end/;nD.exports=eZr});var oD=s((YLe,uD)=>{"use strict";function tZr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}uD.exports=tZr});var fD=s((ZLe,vD)=>{"use strict";function iZr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}vD.exports=iZr});var lD=s(($Le,cD)=>{"use strict";function aZr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}cD.exports=aZr});var yD=s((QLe,mD)=>{"use strict";var pD=Ya(),nZr=yi(),dD=rD(),sZr=tD(),o3=aD(),gD=sD(),Za=oD(),ua=fD(),uZr=lD();function oZr(r,e,t){var i,a,n;if(i=nZr(r).split(sZr),a=i.length,a<2||a>3)return Za();if(a===3)if(n=i[2],n.length===0)i[2]=1;else{if(o3.test(n)===!1)return Za();if(n=parseInt(n,10),n===0)return uZr();i[2]=n}else i.push(1);if(n=i[0],n.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(gD.test(n)){if(n=dD(n,e,i[2]<0,t),n<0)return n===-2?ua():Za();i[2]<0&&n>=e&&(n-=1),i[0]=n}else if(o3.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0){if(t)return ua();n=0}}else if(n>=e){if(t)return ua();i[2]<0?n=e-1:n=e}i[0]=n}else return Za();if(n=i[1],n.length===0)i[2]<0?i[1]=null:i[1]=e;else if(gD.test(n)){if(n=dD(n,e,i[2]<0,t),n<0)return n===-2?ua():Za();i[1]=n}else if(o3.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0)if(i[2]>0){if(t)return ua();n=0}else{if(t&&n<-1)return ua();n=null}}else if(n>e){if(t)return ua();n=e}i[1]=n}else return Za();return e===0?new pD(0,0,i[2]):new pD(i[0],i[1],i[2])}mD.exports=oZr});var qD=s((KLe,hD)=>{"use strict";var vZr=yD();hD.exports=vZr});var wD=s((rPe,bD)=>{"use strict";function fZr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}bD.exports=fZr});var ND=s((ePe,ED)=>{"use strict";function cZr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}ED.exports=cZr});var OD=s((tPe,SD)=>{"use strict";function lZr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}SD.exports=lZr});var _D=s((iPe,AD)=>{"use strict";function pZr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}AD.exports=pZr});var ID=s((aPe,TD)=>{"use strict";var dZr=/\s*,\s*/;TD.exports=dZr});var LD=s((nPe,RD)=>{"use strict";var gZr=/^[-+]?[0-9]+$/;RD.exports=gZr});var xD=s((sPe,FD)=>{"use strict";var mZr=yi(),yZr=Ya(),hZr=$s(),qZr=qD(),bZr=wD(),wZr=ND(),EZr=OD(),PD=_D(),NZr=ID(),SZr=LD();function OZr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(o=e.length,i=mZr(r).split(NZr),v=i.length,n=!1,a=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(n)return bZr();for(n=!0,p=0;p<o-v+1;p++)a.push(new yZr(0,e[l],1)),l+=1;continue}if(u=e[l],SZr.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return PD()}else if(f>=u)return PD()}l+=1}else{if(f=qZr(f,u,t),f.code)return f;l+=1}a.push(f)}return a.length!==o?a.length<o?wZr():EZr():hZr.apply(null,a)}FD.exports=OZr});var MD=s((uPe,jD)=>{"use strict";var AZr=xD();jD.exports=AZr});var CD=s((oPe,kD)=>{"use strict";var _Zr=Jr().isPrimitive,BD=MD(),TZr=C();function IZr(r,e,t){var i;if(!_Zr(r))throw new TypeError(TZr('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=BD(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=BD(r,e,!1)}}return i}kD.exports=IZr});var UD=s((vPe,VD)=>{"use strict";var RZr=CD();VD.exports=RZr});var DD=s((fPe,GD)=>{"use strict";var LZr=Qs(),PZr=Ks(),FZr=$f(),xZr=C(),jZr=f0(),MZr=ft();function BZr(r,e,t){var i,a,n,u;if(i=e.length,i>0?(n=MZr(e),u=LZr(e,t)):(n=1,u=[0]),a=FZr(r,n),a===null)throw new TypeError(xZr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new jZr(r,a,e,u,PZr(e,u),t)}GD.exports=BZr});var zD=s((cPe,HD)=>{"use strict";var kZr=DD();HD.exports=kZr});var XD=s((lPe,WD)=>{"use strict";var ze=$r(),CZr=aG(),VZr=f0(),UZr=dG(),GZr=t3(),DZr=ft(),HZr=jG(),zZr=UD(),WZr=Qs(),XZr=r3(),JZr=Ks(),YZr=a3(),ZZr=zD();function $Zr(r){return ze(r,"iterRows",CZr),ze(r,"ndarray",VZr),ze(r,"ndarray2range",UZr),ze(r,"nextCartesianIndex",GZr),ze(r,"numel",DZr),ze(r,"range2ndarray",HZr),ze(r,"seq2multislice",zZr),ze(r,"shape2strides",WZr),ze(r,"slice",XZr),ze(r,"strides2offset",JZr),ze(r,"toArray",YZr),ze(r,"zeros",ZZr),r}WD.exports=$Zr});var YD=s((pPe,JD)=>{"use strict";var QZr=ti();function KZr(r,e,t,i){QZr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}JD.exports=KZr});var Nr=s((dPe,ZD)=>{"use strict";var r$r=YD();ZD.exports=r$r});var QD=s((gPe,$D)=>{"use strict";function e$r(r){return e;function e(){return r}}$D.exports=e$r});var dr=s((mPe,KD)=>{"use strict";var t$r=QD();KD.exports=t$r});var eH=s((yPe,rH)=>{"use strict";var i$r=hr();function a$r(r){return r===0&&1/r===i$r}rH.exports=a$r});var hi=s((hPe,tH)=>{"use strict";var n$r=eH();tH.exports=n$r});var nH=s((qPe,aH)=>{"use strict";var s$r=hi(),iH=W(),v3=hr();function u$r(r,e){return iH(r)||iH(e)?NaN:r===v3||e===v3?v3:r===e&&r===0?s$r(r)?r:e:r>e?r:e}aH.exports=u$r});var f3=s((bPe,sH)=>{"use strict";var o$r=nH();sH.exports=o$r});var vH=s((wPe,oH)=>{"use strict";var uH=65535;function v$r(r,e){var t,i,a,n,u,o;return r>>>=0,e>>>=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&uH)>>>0,o=(e&uH)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i>>>0}oH.exports=v$r});var cH=s((EPe,fH)=>{"use strict";var f$r=vH();fH.exports=f$r});var c3=s((NPe,lH)=>{"use strict";function c$r(r,e,t,i,a,n,u){var o,v,f,c,l,p,m;for(o=e.data,v=a.data,c=e.accessors[0],f=a.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=n;return e}lH.exports=c$r});var gH=s((SPe,dH)=>{"use strict";var pH=In(),l$r=c3(),l3=8;function p$r(r,e,t,i,a){var n,u,o,v,f,c;if(r<=0)return i;if(o=pH(e),v=pH(i),o.accessorProtocol||v.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,l$r(r,o,t,n,v,a,u),v.data;if(t===1&&a===1){if(f=r%l3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<l3)return i;for(c=f;c<r;c+=l3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,c=0;c<r;c++)i[u]=e[n],n+=t,u+=a;return i}dH.exports=p$r});var hH=s((OPe,yH)=>{"use strict";var mH=In(),d$r=c3(),p0=8;function g$r(r,e,t,i,a,n,u){var o,v,f,c,l,p;if(r<=0)return a;if(f=mH(e),c=mH(a),f.accessorProtocol||c.accessorProtocol)return d$r(r,f,t,i,c,n,u),c.data;if(o=i,v=u,t===1&&n===1){if(l=r%p0,l>0)for(p=0;p<l;p++)a[v]=e[o],o+=t,v+=n;if(r<p0)return a;for(p=l;p<r;p+=p0)a[v]=e[o],a[v+1]=e[o+1],a[v+2]=e[o+2],a[v+3]=e[o+3],a[v+4]=e[o+4],a[v+5]=e[o+5],a[v+6]=e[o+6],a[v+7]=e[o+7],o+=p0,v+=p0;return a}for(p=0;p<r;p++)a[v]=e[o],o+=t,v+=n;return a}yH.exports=g$r});var qi=s((APe,bH)=>{"use strict";var m$r=G(),qH=gH(),y$r=hH();m$r(qH,"ndarray",y$r);bH.exports=qH});var EH=s((_Pe,wH)=>{"use strict";function h$r(){}wH.exports=h$r});var SH=s((TPe,NH)=>{"use strict";var q$r=EH();function b$r(){return q$r.name==="foo"}NH.exports=b$r});var AH=s((IPe,OH)=>{"use strict";var w$r=SH();OH.exports=w$r});var TH=s((RPe,_H)=>{"use strict";var E$r=yr(),N$r=AH(),S$r=C(),O$r=j1().REGEXP,A$r=N$r();function _$r(r){if(E$r(r)===!1)throw new TypeError(S$r("invalid argument. Must provide a function. Value: `%s`.",r));return A$r?r.name:O$r.exec(r.toString())[1]}_H.exports=_$r});var RH=s((LPe,IH)=>{"use strict";var T$r=TH();IH.exports=T$r});var PH=s((PPe,LH)=>{"use strict";var I$r=qa(),R$r=et(),L$r=ha(),P$r=ya(),F$r=Hi(),x$r=ai(),j$r=me(),M$r=rt(),B$r=ge(),k$r=[B$r,M$r,x$r,j$r,P$r,F$r,I$r,R$r,L$r];LH.exports=k$r});var FH=s((FPe,C$r)=>{C$r.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var CH=s((xPe,kH)=>{"use strict";var V$r=mt(),U$r=RH(),MH=$i(),G$r=C1(),D$r=ge(),xH=PH(),jH=FH(),tu=G$r()?MH(D$r):BH;tu=U$r(tu)==="TypedArray"?tu:BH;function BH(){}function H$r(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof tu)return!0;for(t=0;t<xH.length;t++)if(r instanceof xH[t])return!0;for(;r;){for(e=V$r(r),t=0;t<jH.length;t++)if(jH[t]===e)return!0;r=MH(r)}return!1}kH.exports=H$r});var UH=s((jPe,VH)=>{"use strict";var z$r=CH();VH.exports=z$r});var DH=s((MPe,GH)=>{"use strict";var W$r=Ta(),X$r=Pa(),J$r=[X$r,W$r];GH.exports=J$r});var HH=s((BPe,Y$r)=>{Y$r.exports=["Complex64Array","Complex128Array"]});var JH=s((kPe,XH)=>{"use strict";var Z$r=mt(),$$r=$i(),zH=DH(),WH=HH();function Q$r(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<zH.length;t++)if(r instanceof zH[t])return!0;for(;r;){for(e=Z$r(r),t=0;t<WH.length;t++)if(WH[t]===e)return!0;r=$$r(r)}return!1}XH.exports=Q$r});var ZH=s((CPe,YH)=>{"use strict";var K$r=JH();YH.exports=K$r});var QH=s((VPe,$H)=>{"use strict";var rQr=C();function eQr(r,e){if(typeof e!="function")throw new TypeError(rQr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}$H.exports=eQr});var rz=s((UPe,KH)=>{"use strict";var tQr=QH();KH.exports=tQr});var tz=s((GPe,ez)=>{"use strict";var iQr=qa(),aQr=et(),nQr=ha(),sQr=ya(),uQr=Hi(),oQr=ai(),vQr=me(),fQr=rt(),cQr=ge(),lQr=Ta(),pQr=Pa(),dQr=[[cQr,"Float64Array"],[fQr,"Float32Array"],[oQr,"Int32Array"],[vQr,"Uint32Array"],[sQr,"Int16Array"],[uQr,"Uint16Array"],[iQr,"Int8Array"],[aQr,"Uint8Array"],[nQr,"Uint8ClampedArray"],[lQr,"Complex64Array"],[pQr,"Complex128Array"]];ez.exports=dQr});var az=s((DPe,iz)=>{"use strict";var gQr=rz(),mQr=mt(),yQr=$i(),$a=tz();function hQr(r){var e,t;for(t=0;t<$a.length;t++)if(gQr(r,$a[t][0]))return $a[t][1];for(;r;){for(e=mQr(r),t=0;t<$a.length;t++)if(e===$a[t][1])return $a[t][1];r=yQr(r)}}iz.exports=hQr});var sz=s((HPe,nz)=>{"use strict";var qQr=UH(),bQr=ZH(),wQr=Ea(),EQr=Na(),NQr=C(),SQr=az();function OQr(r){var e,t,i;if(qQr(r))e=r;else if(bQr(r))r.BYTES_PER_ELEMENT===8?e=wQr(r,0):e=EQr(r,0);else throw new TypeError(NQr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:SQr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}nz.exports=OQr});var Sr=s((zPe,uz)=>{"use strict";var AQr=sz();uz.exports=AQr});var p3=s((WPe,oz)=>{"use strict";var _Qr=ga(),TQr=Gr(),IQr=_Qr-1;function RQr(){var r=TQr(1+IQr*Math.random());return r>>>0}oz.exports=RQr});var w3=s((XPe,qz)=>{"use strict";var At=G(),bi=qr(),vz=Nr(),d3=vr(),LQr=mr(),PQr=Be(),fz=yt(),FQr=de().isPrimitive,cz=at().isPrimitive,mz=Ha(),yz=ga(),_e=me(),xQr=f3(),b3=cH(),Qa=qi(),jQr=Sr(),Ie=C(),lz=p3(),ue=624,g3=397,pz=yz>>>0,MQr=19650218>>>0,m3=2147483648>>>0,y3=2147483647>>>0,BQr=1812433253>>>0,kQr=1664525>>>0,CQr=1566083941>>>0,VQr=2636928640>>>0,UQr=4022730752>>>0,GQr=2567483615>>>0,h3=[0>>>0,GQr>>>0],hz=1/(mz+1),DQr=67108864>>>0,HQr=2147483648>>>0,q3=1>>>0,zQr=mz*hz,iu=1,au=3,wi=2,Ei=ue+3,Te=ue+5,d0=ue+6;function dz(r,e){var t;return e?t="option":t="argument",r.length<d0+1?new RangeError(Ie("invalid %s. `state` array has insufficient length.",t)):r[0]!==iu?new RangeError(Ie("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,iu,r[0])):r[1]!==au?new RangeError(Ie("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,au,r[1])):r[wi]!==ue?new RangeError(Ie("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ue,r[wi])):r[Ei]!==1?new RangeError(Ie("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[Ei])):r[Te]!==r.length-d0?new RangeError(Ie("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-d0,r[Te])):null}function gz(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=b3(t,BQr)+i>>>0;return r}function WQr(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=xQr(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=b3(a,kQr)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=b3(a,CQr)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=HQr,r}function XQr(r){var e,t,i,a;for(a=ue-g3,t=0;t<a;t++)e=r[t]&m3|r[t+1]&y3,r[t]=r[t+g3]^e>>>1^h3[e&q3];for(i=ue-1;t<i;t++)e=r[t]&m3|r[t+1]&y3,r[t]=r[t-a]^e>>>1^h3[e&q3];return e=r[i]&m3|r[0]&y3,r[i]=r[g3-1]^e>>>1^h3[e&q3],r}function JQr(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!LQr(r))throw new TypeError(Ie("invalid argument. Options argument must be an object. Value: `%s`.",r));if(d3(r,"copy")&&(i.copy=r.copy,!FQr(r.copy)))throw new TypeError(Ie("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(d3(r,"state")){if(t=r.state,i.state=!0,!fz(t))throw new TypeError(Ie("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=dz(t,!0),u)throw u;i.copy===!1?e=t:(e=new _e(t.length),Qa(t.length,t,1,e,1)),t=new _e(e.buffer,e.byteOffset+(wi+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,t[Te])}if(a===void 0)if(d3(r,"seed"))if(a=r.seed,i.seed=!0,cz(a)){if(a>pz)throw new RangeError(Ie("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(PQr(a)===!1||a.length<1)throw new TypeError(Ie("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!cz(a))throw new TypeError(Ie("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>pz)throw new RangeError(Ie("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new _e(d0+n),e[0]=iu,e[1]=au,e[wi]=ue,e[Ei]=1,e[Ei+1]=ue,e[Te]=n,Qa.ndarray(n,a,1,0,e,1,Te+1),t=new _e(e.buffer,e.byteOffset+(wi+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,n),t=gz(t,ue,MQr),t=WQr(t,ue,a,n)}else a=lz()>>>0}else a=lz()>>>0;return t===void 0&&(e=new _e(d0+1),e[0]=iu,e[1]=au,e[wi]=ue,e[Ei]=1,e[Ei+1]=ue,e[Te]=1,e[Te+1]=a,t=new _e(e.buffer,e.byteOffset+(wi+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,1),t=gz(t,ue,a)),At(y,"NAME","mt19937"),bi(y,"seed",o),bi(y,"seedLength",v),vz(y,"state",l,p),bi(y,"stateLength",f),bi(y,"byteLength",c),At(y,"toJSON",m),At(y,"MIN",0),At(y,"MAX",yz),At(y,"normalized",g),At(g,"NAME",y.NAME),bi(g,"seed",o),bi(g,"seedLength",v),vz(g,"state",l,p),bi(g,"stateLength",f),bi(g,"byteLength",c),At(g,"toJSON",m),At(g,"MIN",0),At(g,"MAX",zQr),y;function o(){var d=e[Te];return Qa(d,a,1,new _e(d),1)}function v(){return e[Te]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return Qa(d,e,1,new _e(d),1)}function p(d){var h;if(!fz(d))throw new TypeError(Ie("invalid argument. Must provide a Uint32Array. Value: `%s`.",d));if(h=dz(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?Qa(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new _e(d.length)),Qa(d.length,d,1,e,1)),t=new _e(e.buffer,e.byteOffset+(wi+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,e[Te])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=jQr(e),d.params=[],d}function y(){var d,h;return h=e[Ei+1],h>=ue&&(t=XQr(t),h=0),d=t[h],e[Ei+1]=h+1,d^=d>>>11,d^=d<<7&VQr,d^=d<<15&UQr,d^=d>>>18,d>>>0}function g(){var d=y()>>>5,h=y()>>>6;return(d*DQr+h)*hz}}qz.exports=JQr});var wz=s((JPe,bz)=>{"use strict";var YQr=w3(),ZQr=p3(),$Qr=YQr({seed:ZQr()});bz.exports=$Qr});var Hr=s((YPe,Nz)=>{"use strict";var QQr=G(),Ez=wz(),KQr=w3();QQr(Ez,"factory",KQr);Nz.exports=Ez});var _z=s((ZPe,Az)=>{"use strict";var Sz=Er().isPrimitive,E3=C(),Oz=oe();function rKr(r,e){return!Sz(r)||Oz(r)?new TypeError(E3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Sz(e)||Oz(e)?new TypeError(E3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(E3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Az.exports=rKr});var Iz=s(($Pe,Tz)=>{"use strict";var eKr=Vr(),tKr=aa(),iKr=Ps();function aKr(r,e,t){return e+eKr(tKr(iKr*r()),2)*(t-e)}Tz.exports=aKr});var N3=s((QPe,Bz)=>{"use strict";var _t=G(),nu=qr(),Rz=Nr(),Lz=mr(),Pz=yr(),Fz=vr(),xz=dr(),nKr=Tr(),su=Hr().factory,jz=W(),sKr=Sr(),uu=C(),uKr=_z(),Mz=Iz();function oKr(){var r,e,t,i,a,n;if(arguments.length===0)e=su();else if(arguments.length===1){if(r=arguments[0],!Lz(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Fz(r,"prng")){if(!Pz(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else{if(a=arguments[0],n=arguments[1],i=uKr(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Lz(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Fz(r,"prng")){if(!Pz(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else e=su()}return a===void 0?t=y:t=m,_t(t,"NAME","arcsine"),r&&r.prng?(_t(t,"seed",null),_t(t,"seedLength",null),Rz(t,"state",xz(null),nKr),_t(t,"stateLength",null),_t(t,"byteLength",null),_t(t,"toJSON",xz(null)),_t(t,"PRNG",e)):(nu(t,"seed",u),nu(t,"seedLength",o),Rz(t,"state",c,l),nu(t,"stateLength",v),nu(t,"byteLength",f),_t(t,"toJSON",p),_t(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=sKr(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Mz(e,a,n)}function y(g,d){return jz(g)||jz(d)||g>=d?NaN:Mz(e,g,d)}}Bz.exports=oKr});var Cz=s((KPe,kz)=>{"use strict";var vKr=N3(),fKr=vKr();kz.exports=fKr});var Gz=s((rFe,Uz)=>{"use strict";var cKr=G(),Vz=Cz(),lKr=N3();cKr(Vz,"factory",lKr);Uz.exports=Vz});var S3=s((eFe,Jz)=>{"use strict";var Tt=G(),ou=qr(),Dz=Nr(),Hz=mr(),pKr=Ln().isPrimitive,zz=yr(),Wz=vr(),Xz=dr(),dKr=Tr(),vu=Hr().factory,gKr=W(),mKr=Sr(),fu=C();function yKr(){var r,e,t,i;if(arguments.length===0)e=vu();else if(arguments.length===1&&Hz(arguments[0]))if(r=arguments[0],Wz(r,"prng")){if(!zz(r.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vu(r);else{if(i=arguments[0],!pKr(i))throw new TypeError(fu("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Hz(r))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Wz(r,"prng")){if(!zz(r.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vu(r)}else e=vu()}return i===void 0?t=p:t=l,Tt(t,"NAME","bernoulli"),r&&r.prng?(Tt(t,"seed",null),Tt(t,"seedLength",null),Dz(t,"state",Xz(null),dKr),Tt(t,"stateLength",null),Tt(t,"byteLength",null),Tt(t,"toJSON",Xz(null)),Tt(t,"PRNG",e)):(ou(t,"seed",a),ou(t,"seedLength",n),Dz(t,"state",v,f),ou(t,"stateLength",u),ou(t,"byteLength",o),Tt(t,"toJSON",c),Tt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=mKr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return gKr(m)||m<0||m>1?NaN:e()<=m?1:0}}Jz.exports=yKr});var Zz=s((tFe,Yz)=>{"use strict";var hKr=S3(),qKr=hKr();Yz.exports=qKr});var Kz=s((iFe,Qz)=>{"use strict";var bKr=G(),$z=Zz(),wKr=S3();bKr($z,"factory",wKr);Qz.exports=$z});var iW=s((aFe,tW)=>{"use strict";var EKr=Lr(),rW=ae(),NKr=br(),eW=.00991256303526217;function SKr(r,e){var t,i,a;for(i=rW(-.5*e*e),t=[],t.push(eW/i),t.push(e),a=2;a<r;a++)t[a]=EKr(-2*NKr(eW/t[a-1]+i)),i=rW(-.5*t[a]*t[a]);return t.push(0),t}tW.exports=SKr});var nW=s((nFe,aW)=>{"use strict";function OKr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}aW.exports=OKr});var oW=s((sFe,uW)=>{"use strict";var sW=br();function AKr(r,e,t){var i,a;do i=sW(r())/e,a=sW(r());while(-2*a<i*i);return t?i-e:e-i}uW.exports=AKr});var lW=s((uFe,cW)=>{"use strict";var _Kr=Wr(),vW=ae(),TKr=iW(),IKr=nW(),RKr=oW(),LKr=128,fW=3.442619855899,oa=TKr(LKr,fW),PKr=IKr(oa),FKr=127;function xKr(r,e){return t;function t(){for(var i,a,n,u,o,v,f;;){if(o=2*r()-1,v=e()&FKr,_Kr(o)<PKr[v])return o*oa[v];if(v===0)return RKr(r,fW,o<0);if(u=o*oa[v],n=u*u,f=v+1,i=vW(-.5*(oa[v]*oa[v]-n)),a=vW(-.5*(oa[f]*oa[f]-n)),a+r()*(i-a)<1)return u}}}cW.exports=xKr});var A3=s((oFe,gW)=>{"use strict";var Ni=G(),cu=qr(),pW=Nr(),jKr=yr(),MKr=mr(),BKr=de().isPrimitive,lu=vr(),kKr=yt(),O3=Hr().factory,dW=dr(),CKr=Tr(),VKr=Gr(),UKr=ga(),GKr=Sr(),g0=C(),DKr=lW();function HKr(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!MKr(r))throw new TypeError(g0("invalid argument. Must provide an object. Value: `%s`.",r));if(lu(r,"copy")&&(a.copy=r.copy,!BKr(r.copy)))throw new TypeError(g0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(lu(r,"prng")){if(!jKr(r.prng))throw new TypeError(g0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(lu(r,"state")){if(a.state=r.state,!kKr(r.state))throw new TypeError(g0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(lu(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(g0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(t=O3(a),e=t.normalized):(t=O3({seed:VKr(1+UKr*e()),copy:a.copy}),a.seed=null):(t=O3(a),e=t.normalized),i=DKr(e,t),Ni(i,"NAME","improved-ziggurat"),a.seed===null?(Ni(i,"seed",null),Ni(i,"seedLength",null)):(cu(i,"seed",n),cu(i,"seedLength",u)),r&&r.prng?(pW(i,"state",dW(null),CKr),Ni(i,"stateLength",null),Ni(i,"byteLength",null),Ni(i,"toJSON",dW(null))):(pW(i,"state",f,c),cu(i,"stateLength",o),cu(i,"byteLength",v),Ni(i,"toJSON",l)),Ni(i,"PRNG",e),i;function n(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=GKr(t.state),p.params=[],p}}gW.exports=HKr});var yW=s((vFe,mW)=>{"use strict";var zKr=A3(),WKr=zKr();mW.exports=WKr});var Si=s((fFe,qW)=>{"use strict";var XKr=G(),hW=yW(),JKr=A3();XKr(hW,"factory",JKr);qW.exports=hW});var wW=s((cFe,bW)=>{"use strict";var YKr=yr(),ZKr=YKr(Object.assign);bW.exports=ZKr});var NW=s((lFe,EW)=>{"use strict";var $Kr=Object.assign;EW.exports=$Kr});var OW=s((pFe,SW)=>{"use strict";var QKr=typeof Object.getOwnPropertySymbols<"u";SW.exports=QKr});var TW=s((dFe,_W)=>{"use strict";var AW=xa(),KKr=AW.getOwnPropertySymbols;function rre(r){return KKr(AW(r))}_W.exports=rre});var RW=s((gFe,IW)=>{"use strict";function ere(){return[]}IW.exports=ere});var PW=s((mFe,LW)=>{"use strict";var tre=OW(),ire=TW(),are=RW(),_3;tre?_3=ire:_3=are;LW.exports=_3});var xW=s((yFe,FW)=>{"use strict";var nre=Ba(),sre=PW(),ure=Fn();function ore(r){var e,t,i;for(e=nre(r),t=sre(r),i=0;i<t.length;i++)ure(r,t[i])&&e.push(t[i]);return e}FW.exports=ore});var MW=s((hFe,jW)=>{"use strict";var vre=xW();jW.exports=vre});var CW=s((qFe,kW)=>{"use strict";var fre=MW(),BW=xa(),cre=C();function lre(r){var e,t,i,a,n,u,o;if(r==null)throw new TypeError(cre("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(n=BW(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=fre(BW(e)),a=t.length,o=0;o<a;o++)i=t[o],n[i]=e[i];return n}kW.exports=lre});var m0=s((bFe,VW)=>{"use strict";var pre=wW(),dre=NW(),gre=CW(),T3;pre?T3=dre:T3=gre;VW.exports=T3});var HW=s((wFe,DW)=>{"use strict";var UW=Ur().isPrimitive,GW=C();function mre(r,e){return UW(r)?UW(e)?null:new TypeError(GW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(GW("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DW.exports=mre});var YW=s((EFe,JW)=>{"use strict";var zW=br(),WW=Lr(),yre=Vr(),XW=1/3;function hre(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(t<1?(v=t+1-XW,o=1/WW(9*v),c=yre(r(),1/t)):(v=t-XW,o=1/WW(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,a=f*f,n=1-.331*a*a,u=.5*a+v*(1-p+zW(p)),l=r(),(l<n||zW(l)<u)&&(i=!1)}return v*p*c}JW.exports=hre});var QW=s((NFe,$W)=>{"use strict";var I3=Vr(),ZW=br();function qre(r,e,t){var i,a,n,u,o,v,f,c;for(n=t-1,o=I3(n+n,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),a=I3(u,4),c=8*t-12,c=1-a/c,v<=c?i=!1:(c+=.5*I3(a/(8*t-8),2),v<c&&(c=n*ZW(4*f*(1-f)),c+=u*u/2,c>=ZW(v)&&(i=!1))));return f}$W.exports=qre});var rX=s((SFe,KW)=>{"use strict";var bre=Vr(),pu=br();function wre(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y;for(o=t-1,v=i-1,f=o+v,c=f*pu(f),u=o/f,a=.5/bre(f,.5),n=!0;n===!0;)l=e(),m=u+l*a,m>=0&&m<=1&&(p=r(),y=o*pu(m/o),y+=v*pu((1-m)/v),y+=c+.5*l*l,y>=pu(p)&&(n=!1));return m}KW.exports=wre});var iX=s((OFe,tX)=>{"use strict";var R3=ae(),eX=Vr(),L3=br();function Ere(r,e,t){for(var i,a,n,u,o,v,f;;)if(u=r(),o=r(),v=eX(u,1/e),f=eX(o,1/t),n=v+f,n<=1)return n>0?v/n:(i=L3(u)/e,a=L3(o)/t,i>a?(a-=i,i=0):(i-=a,a=0),R3(i-L3(R3(i)+R3(a))))}tX.exports=Ere});var sX=s((AFe,nX)=>{"use strict";var aX=YW(),Nre=QW(),Sre=rX(),Ore=iX();function Are(r,e,t,i){var a,n;return t===i&&t>1.5?Nre(r,e,t):t>1&&i>1?Sre(r,e,t,i):t<1&&i<1?Ore(r,t,i):(a=aX(r,e,t),n=aX(r,e,i),a/(a+n))}nX.exports=Are});var j3=s((_Fe,mX)=>{"use strict";var It=G(),du=qr(),uX=Nr(),oX=mr(),vX=de().isPrimitive,fX=yr(),Ka=vr(),cX=dr(),_re=Tr(),lX=Si().factory,gu=Hr().factory,pX=W(),P3=qi(),F3=me(),x3=yt(),dX=m0(),Tre=Sr(),Rt=C(),Ire=HW(),gX=sX();function Rre(){var r,e,t,i,a,n,u,o,v;if(o=!0,arguments.length===0)a={copy:!1},n=gu(a);else if(arguments.length===1){if(a=arguments[0],!oX(a))throw new TypeError(Rt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(Ka(a,"copy")&&!vX(a.copy))throw new TypeError(Rt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(Ka(a,"prng")){if(!fX(a.prng))throw new TypeError(Rt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(Ka(a,"state")&&!x3(a.state))throw new TypeError(Rt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=dX({},a),a.copy===!1?o=!1:a.state&&(a.state=P3(a.state.length,a.state,1,new F3(a.state.length),1)),a.copy=!1,n=gu(a)}}else{if(t=arguments[0],i=arguments[1],v=Ire(t,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!oX(a))throw new TypeError(Rt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(Ka(a,"copy")&&!vX(a.copy))throw new TypeError(Rt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(Ka(a,"prng")){if(!fX(a.prng))throw new TypeError(Rt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(Ka(a,"state")&&!x3(a.state))throw new TypeError(Rt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=dX({},a),a.copy===!1?o=!1:a.state&&(a.state=P3(a.state.length,a.state,1,new F3(a.state.length),1)),a.copy=!1,n=gu(a)}}else a={copy:!1},n=gu(a)}return a&&a.prng?e=lX({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),e=lX({state:r,copy:!1})),t===void 0?u=h:u=d,It(u,"NAME","beta"),a&&a.prng?(It(u,"seed",null),It(u,"seedLength",null),uX(u,"state",cX(null),_re),It(u,"stateLength",null),It(u,"byteLength",null),It(u,"toJSON",cX(null)),It(u,"PRNG",n)):(du(u,"seed",f),du(u,"seedLength",c),uX(u,"state",m,y),du(u,"stateLength",l),du(u,"byteLength",p),It(u,"toJSON",g),It(u,"PRNG",n),n=n.normalized),u;function f(){return n.seed}function c(){return n.seedLength}function l(){return n.stateLength}function p(){return n.byteLength}function m(){return n.state}function y(q){if(!x3(q))throw new TypeError(Rt("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));o&&(q=P3(q.length,q,1,new F3(q.length),1)),n.state=q}function g(){var q={};return q.type="PRNG",q.name=u.NAME,q.state=Tre(n.state),t===void 0?q.params=[]:q.params=[t,i],q}function d(){return gX(n,e,t,i)}function h(q,w){return pX(q)||pX(w)||q<=0||w<=0?NaN:gX(n,e,q,w)}}mX.exports=Rre});var hX=s((TFe,yX)=>{"use strict";var Lre=j3(),Pre=Lre();yX.exports=Pre});var wX=s((IFe,bX)=>{"use strict";var Fre=G(),qX=hX(),xre=j3();Fre(qX,"factory",xre);bX.exports=qX});var OX=s((RFe,SX)=>{"use strict";var EX=Ur().isPrimitive,NX=C();function jre(r,e){return EX(r)?EX(e)?null:new TypeError(NX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(NX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}SX.exports=jre});var TX=s((LFe,_X)=>{"use strict";var AX=br();function Mre(r,e,t,i,a){var n,u,o,v,f,c,l;for(n=!0;n;){do f=e(),l=1+a*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+AX(l)),c=r(),(c<o||AX(c)<v)&&(n=!1)}return 1/t*i*l}_X.exports=Mre});var V3=s((PFe,kX)=>{"use strict";var Lt=G(),mu=qr(),IX=Nr(),RX=mr(),M3=yt(),LX=de().isPrimitive,PX=yr(),rn=vr(),FX=dr(),Bre=Tr(),xX=Si().factory,yu=Hr().factory,jX=W(),B3=Lr(),MX=Vr(),k3=qi(),C3=me(),kre=Sr(),BX=m0(),Pt=C(),Cre=OX(),hu=TX(),qu=1/3;function Vre(){var r,e,t,i,a,n,u,o,v,f,c;if(o=!0,arguments.length===0)a={copy:!1},n=yu(a);else if(arguments.length===1){if(a=arguments[0],!RX(a))throw new TypeError(Pt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(rn(a,"copy")&&!LX(a.copy))throw new TypeError(Pt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(rn(a,"prng")){if(!PX(a.prng))throw new TypeError(Pt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(rn(a,"state")&&!M3(a.state))throw new TypeError(Pt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=BX({},a),a.copy===!1?o=!1:a.state&&(a.state=k3(a.state.length,a.state,1,new C3(a.state.length),1)),a.copy=!1,n=yu(a)}}else{if(e=arguments[0],i=arguments[1],v=Cre(e,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!RX(a))throw new TypeError(Pt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(rn(a,"copy")&&!LX(a.copy))throw new TypeError(Pt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(rn(a,"prng")){if(!PX(a.prng))throw new TypeError(Pt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(rn(a,"state")&&!M3(a.state))throw new TypeError(Pt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=BX({},a),a.copy===!1?o=!1:a.state&&(a.state=k3(a.state.length,a.state,1,new C3(a.state.length),1)),a.copy=!1,n=yu(a)}}else a={copy:!1},n=yu(a)}return a&&a.prng?t=xX({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),t=xX({state:r,copy:!1})),e===void 0?u=A:(e>=1?(u=q,c=e-qu):(u=w,c=e+1-qu),f=1/B3(9*c)),Lt(u,"NAME","gamma"),a&&a.prng?(Lt(u,"seed",null),Lt(u,"seedLength",null),IX(u,"state",FX(null),Bre),Lt(u,"stateLength",null),Lt(u,"byteLength",null),Lt(u,"toJSON",FX(null)),Lt(u,"PRNG",n)):(mu(u,"seed",l),mu(u,"seedLength",p),IX(u,"state",g,d),mu(u,"stateLength",m),mu(u,"byteLength",y),Lt(u,"toJSON",h),Lt(u,"PRNG",n),n=n.normalized),u;function l(){return n.seed}function p(){return n.seedLength}function m(){return n.stateLength}function y(){return n.byteLength}function g(){return n.state}function d(b){if(!M3(b))throw new TypeError(Pt("invalid argument. Must provide a Uint32Array. Value: `%s`.",b));o&&(b=k3(b.length,b,1,new C3(b.length),1)),n.state=b}function h(){var b={};return b.type="PRNG",b.name=u.NAME,b.state=kre(n.state),e===void 0?b.params=[]:b.params=[e,i],b}function q(){return hu(n,t,i,c,f)}function w(){return hu(n,t,i,c,f)*MX(n(),1/e)}function A(b,T){var S,O;return jX(b)||jX(T)||b<=0||T<=0?NaN:b<1?(O=b+1-qu,S=1/B3(9*O),hu(n,t,T,O,S)*MX(n(),1/b)):(O=b-qu,S=1/B3(9*O),hu(n,t,T,O,S))}}kX.exports=Vre});var VX=s((FFe,CX)=>{"use strict";var Ure=V3(),Gre=Ure();CX.exports=Gre});var en=s((xFe,GX)=>{"use strict";var Dre=G(),UX=VX(),Hre=V3();Dre(UX,"factory",Hre);GX.exports=UX});var WX=s((jFe,zX)=>{"use strict";var DX=Ur().isPrimitive,HX=C();function zre(r,e){return DX(r)?DX(e)?null:new TypeError(HX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(HX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}zX.exports=zre});var JX=s((MFe,XX)=>{"use strict";function Wre(r,e,t){return r(e,1)/r(t,1)}XX.exports=Wre});var U3=s((BFe,eJ)=>{"use strict";var Oi=G(),bu=qr(),YX=Nr(),ZX=mr(),$X=dr(),Xre=Tr(),wu=en().factory,QX=W(),Jre=Sr(),KX=C(),Yre=WX(),rJ=JX();function Zre(){var r,e,t,i,a,n,u;if(arguments.length===0)r=wu();else if(arguments.length===1){if(i=arguments[0],!ZX(i))throw new TypeError(KX("invalid argument. Options argument must be an object. Value: `%s`.",i));r=wu(i)}else{if(e=arguments[0],t=arguments[1],u=Yre(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!ZX(i))throw new TypeError(KX("invalid argument. Options argument must be an object. Value: `%s`.",i));r=wu(i)}else r=wu()}return e===void 0?n=g:n=y,a=r.PRNG,Oi(n,"NAME","betaprime"),i&&i.prng?(Oi(n,"seed",null),Oi(n,"seedLength",null),YX(n,"state",$X(null),Xre),Oi(n,"stateLength",null),Oi(n,"byteLength",null),Oi(n,"toJSON",$X(null))):(bu(n,"seed",o),bu(n,"seedLength",v),YX(n,"state",l,p),bu(n,"stateLength",f),bu(n,"byteLength",c),Oi(n,"toJSON",m)),Oi(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=Jre(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return rJ(r,e,t)}function g(d,h){return QX(d)||QX(h)||d<=0||h<=0?NaN:rJ(r,d,h)}}eJ.exports=Zre});var iJ=s((kFe,tJ)=>{"use strict";var $re=U3(),Qre=$re();tJ.exports=Qre});var sJ=s((CFe,nJ)=>{"use strict";var Kre=G(),aJ=iJ(),ree=U3();Kre(aJ,"factory",ree);nJ.exports=aJ});var oJ=s((VFe,uJ)=>{"use strict";var eee=Gr();function tee(r){return eee(r)===r&&r>0}uJ.exports=tee});var G3=s((UFe,vJ)=>{"use strict";var iee=oJ();vJ.exports=iee});var cJ=s((GFe,fJ)=>{"use strict";function aee(r){return r>=0&&r<=1}fJ.exports=aee});var pJ=s((DFe,lJ)=>{"use strict";var nee=cJ();lJ.exports=nee});var mJ=s((HFe,gJ)=>{"use strict";var see=at().isPrimitive,uee=Ln().isPrimitive,dJ=C();function oee(r,e){return see(r)?uee(e)?null:new TypeError(dJ("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(dJ("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}gJ.exports=oee});var hJ=s((zFe,yJ)=>{"use strict";function vee(r,e,t){var i=0,a;for(a=0;a<e;a++)r()<=t&&(i+=1);return i}yJ.exports=vee});var bJ=s((WFe,qJ)=>{"use strict";var fee=W();function cee(r){return r===0||fee(r)?r:r<0?-1:1}qJ.exports=cee});var Eu=s((XFe,wJ)=>{"use strict";var lee=bJ();wJ.exports=lee});var NJ=s((JFe,EJ)=>{"use strict";var pee=Vr(),dee=1/12,gee=1/360,mee=1/1260;function yee(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=pee(r,2),(dee-(gee-mee/e)/e)/r}}EJ.exports=yee});var OJ=s((YFe,SJ)=>{"use strict";var D3=Gr(),hee=Eu(),qee=Lr(),H3=Wr(),Nu=br(),Su=NJ(),bee=1/6;function wee(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P;for(T=D3((e+1)*t),f=e-T+1,S=1-t,O=t/S,c=(e+1)*O,u=e*t*S,n=qee(u),d=1.15+2.53*n,g=-.0873+.0248*d+.01*t,h=e*t+.5,i=(2.83+5.1/d)*n,y=.92-4.2/d,a=.86*y,w=(T+.5)*Nu((T+1)/(O*f)),w+=Su(T)+Su(e-T);;){if(E=r(),E<=a)return I=E/y-.43,O=I*(2*g/(.5-H3(I))+d)+h,D3(O);if(E>=y?I=r()-.5:(I=E/y-.93,I=hee(I)*.5-I,E=y*r()),l=.5-H3(I),b=D3(I*(2*g/l+d)+h),!(b<0||b>e))if(E=E*i/(g/(l*l)+d),p=H3(b-T),p>15){if(E=Nu(E),o=p/u,v=(p/3+.625)*p,v+=bee,v/=u,o*=v+.5,N=-(p*p)/(2*u),E<N-o||E<=N+o&&(m=e-b+1,P=w+(e+1)*Nu(f/m),P+=(b+.5)*Nu(m*O/(b+1)),P+=-(Su(b)+Su(e-b)),E<=P))return b}else{if(q=1,T<b)for(A=T;A<=b;A++)q*=c/A-O;else if(T>b)for(A=b;A<=T;A++)E*=c/A-O;if(E<=q)return b}}}SJ.exports=wee});var TJ=s((ZFe,_J)=>{"use strict";var Eee=hJ(),Nee=OJ();function AJ(r,e,t){return t>.5?e-AJ(r,e,1-t):e*t<10?Eee(r,e,t):Nee(r,e,t)}_J.exports=AJ});var z3=s(($Fe,MJ)=>{"use strict";var Ft=G(),Ou=qr(),IJ=Nr(),RJ=mr(),LJ=yr(),PJ=vr(),FJ=dr(),See=Tr(),xJ=W(),Oee=G3(),Aee=pJ(),Au=Hr().factory,_ee=Sr(),_u=C(),Tee=mJ(),jJ=TJ();function Iee(){var r,e,t,i,a,n;if(arguments.length===0)e=Au();else if(arguments.length===1){if(r=arguments[0],!RJ(r))throw new TypeError(_u("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PJ(r,"prng")){if(!LJ(r.prng))throw new TypeError(_u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Au(r)}else{if(a=arguments[0],n=arguments[1],i=Tee(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!RJ(r))throw new TypeError(_u("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PJ(r,"prng")){if(!LJ(r.prng))throw new TypeError(_u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Au(r)}else e=Au()}return a===void 0?t=y:t=m,Ft(t,"NAME","binomial"),r&&r.prng?(Ft(t,"seed",null),Ft(t,"seedLength",null),IJ(t,"state",FJ(null),See),Ft(t,"stateLength",null),Ft(t,"byteLength",null),Ft(t,"toJSON",FJ(null)),Ft(t,"PRNG",e)):(Ou(t,"seed",u),Ou(t,"seedLength",o),IJ(t,"state",c,l),Ou(t,"stateLength",v),Ou(t,"byteLength",f),Ft(t,"toJSON",p),Ft(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=_ee(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return jJ(e,a,n)}function y(g,d){return xJ(g)||xJ(d)||!Oee(g)||!Aee(d)?NaN:jJ(e,g,d)}}MJ.exports=Iee});var kJ=s((QFe,BJ)=>{"use strict";var Ree=z3(),Lee=Ree();BJ.exports=Lee});var UJ=s((KFe,VJ)=>{"use strict";var Pee=G(),CJ=kJ(),Fee=z3();Pee(CJ,"factory",Fee);VJ.exports=CJ});var DJ=s((rxe,GJ)=>{"use strict";var xee=Lr(),jee=br(),Mee=aa(),Bee=ia(),kee=pi();function Cee(r){var e,t;return e=!0,i;function i(){var a,n,u,o;if(e){do a=r(),n=r();while(a===0);return u=xee(-2*jee(a)),o=kee*n,t=u*Bee(o),e=!1,u*Mee(o)}return e=!0,t}}GJ.exports=Cee});var zJ=s((exe,HJ)=>{"use strict";var Vee=Lr(),Uee=br(),Gee=ia(),Dee=Ue(),Hee=Gee(Dee);function zee(r){var e=Vee(-2*Uee(r));return e*Hee}HJ.exports=zee});var XJ=s((txe,WJ)=>{"use strict";var Wee=Lr(),Xee=br(),Jee=ia(),Yee=pi();function Zee(r){var e=Wee(-2*Xee(r)),t=Yee*r;return e*Jee(t)}WJ.exports=Zee});var W3=s((ixe,$J)=>{"use strict";var We=G(),Tu=qr(),JJ=Nr(),$ee=mr(),Qee=yr(),Kee=de().isPrimitive,y0=vr(),rte=yt(),YJ=Hr().factory,ZJ=dr(),ete=Tr(),tte=Sr(),h0=C(),ite=DJ(),ate=zJ(),nte=XJ();function ste(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!$ee(r))throw new TypeError(h0("invalid argument. Must provide an object. Value: `%s`.",r));if(y0(r,"copy")&&(a.copy=r.copy,!Kee(r.copy)))throw new TypeError(h0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(y0(r,"prng")){if(!Qee(r.prng))throw new TypeError(h0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(y0(r,"state")){if(a.state=r.state,!rte(r.state))throw new TypeError(h0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(y0(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(h0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(i=YJ(a),e=i.normalized):a.seed=null:(i=YJ(a),e=i.normalized),t=ite(e),We(t,"NAME","box-muller"),a.seed===null?(We(t,"seed",null),We(t,"seedLength",null)):(Tu(t,"seed",n),Tu(t,"seedLength",u)),r&&r.prng?(JJ(t,"state",ZJ(null),ete),We(t,"stateLength",null),We(t,"byteLength",null),We(t,"toJSON",ZJ(null))):(JJ(t,"state",f,c),Tu(t,"stateLength",o),Tu(t,"byteLength",v),We(t,"toJSON",l)),We(t,"PRNG",e),y0(e,"MIN")?(We(t,"MIN",ate(e.MIN)),We(t,"MAX",nte(e.MIN))):(We(t,"MIN",null),We(t,"MAX",null)),t;function n(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=tte(i.state),p.params=[],p}}$J.exports=ste});var KJ=s((axe,QJ)=>{"use strict";var ute=W3(),ote=ute();QJ.exports=ote});var tY=s((nxe,eY)=>{"use strict";var vte=G(),rY=KJ(),fte=W3();vte(rY,"factory",fte);eY.exports=rY});var nY=s((sxe,aY)=>{"use strict";var cte=Er().isPrimitive,lte=Ur().isPrimitive,iY=C(),pte=oe();function dte(r,e){return!cte(r)||pte(r)?new TypeError(iY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):lte(e)?null:new TypeError(iY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}aY.exports=dte});var uY=s((uxe,sY)=>{"use strict";function gte(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}sY.exports=gte});var vY=s((oxe,oY)=>{"use strict";function mte(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}oY.exports=mte});var lY=s((vxe,cY)=>{"use strict";var yte=ie(),fY=qt(),hte=uY(),qte=vY(),bte=.7853981633974483,wte=3061616997868383e-32,Ete=.3333333333333341,Nte=2147483647;function Ste(r,e,t){var i,a,n,u,o,v,f,c,l;return i=yte(r),a=i&Nte|0,a>=1072010280&&(r<0&&(r=-r,e=-e),l=bte-r,c=wte-e,r=l+c,e=0),l=r*r,c=l*l,u=hte(c),f=l*qte(c),o=l*r,u=e+l*(o*(u+f)+e),u+=Ete*o,c=r+u,a>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=fY(c,0),f=u-(l-r),n=-1/c,v=fY(n,0),o=1+v*l,v+n*(o+v*f))}cY.exports=Ste});var dY=s((fxe,pY)=>{"use strict";var Ote=lY();pY.exports=Ote});var yY=s((cxe,mY)=>{"use strict";var Ate=ie(),gY=dY(),_te=Jn(),X3=[0,0],Tte=2147483647,Ite=1072243195,Rte=2146435072,Lte=1044381696;function Pte(r){var e,t;return e=Ate(r),e&=Tte,e<=Ite?e<Lte?r:gY(r,0,1):e>=Rte?NaN:(t=_te(r,X3),gY(X3[0],X3[1],1-((t&1)<<1)))}mY.exports=Pte});var J3=s((lxe,hY)=>{"use strict";var Fte=yY();hY.exports=Fte});var bY=s((pxe,qY)=>{"use strict";var xte=J3(),jte=Ue();function Mte(r,e,t){return e+t*xte(jte*(r()-.5))}qY.exports=Mte});var Y3=s((dxe,TY)=>{"use strict";var Ai=G(),Iu=qr(),wY=Nr(),EY=mr(),NY=yr(),SY=vr(),OY=dr(),Bte=Tr(),AY=W(),tn=Si().factory,kte=Sr(),Ru=C(),Cte=nY(),_Y=bY();function Vte(){var r,e,t,i,a,n,u;if(arguments.length===0)e=tn();else if(arguments.length===1){if(t=arguments[0],!EY(t))throw new TypeError(Ru("invalid argument. Options argument must be an object. Value: `%s`.",t));if(SY(t,"prng")){if(!NY(t.prng))throw new TypeError(Ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=tn({prng:t.prng})}else e=tn(t)}else{if(u=arguments[0],r=arguments[1],n=Cte(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!EY(t))throw new TypeError(Ru("invalid argument. Options argument must be an object. Value: `%s`.",t));if(SY(t,"prng")){if(!NY(t.prng))throw new TypeError(Ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=tn({prng:t.prng})}else e=tn(t)}else e=tn()}return u===void 0?a=g:a=y,i=e.PRNG,Ai(a,"NAME","cauchy"),t&&t.prng?(Ai(a,"seed",null),Ai(a,"seedLength",null),wY(a,"state",OY(null),Bte),Ai(a,"stateLength",null),Ai(a,"byteLength",null),Ai(a,"toJSON",OY(null))):(Iu(a,"seed",o),Iu(a,"seedLength",v),wY(a,"state",l,p),Iu(a,"stateLength",f),Iu(a,"byteLength",c),Ai(a,"toJSON",m)),Ai(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=kte(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return _Y(e,u,r)}function g(d,h){return AY(d)||AY(h)||h<=0?NaN:_Y(e,d,h)}}TY.exports=Vte});var RY=s((gxe,IY)=>{"use strict";var Ute=Y3(),Gte=Ute();IY.exports=Gte});var FY=s((mxe,PY)=>{"use strict";var Dte=G(),LY=RY(),Hte=Y3();Dte(LY,"factory",Hte);PY.exports=LY});var Z3=s((yxe,CY)=>{"use strict";var _i=G(),Lu=qr(),xY=Nr(),zte=Ur().isPrimitive,jY=mr(),MY=yr(),BY=vr(),kY=dr(),Wte=Tr(),Xte=W(),an=en().factory,Jte=Sr(),Pu=C();function Yte(){var r,e,t,i,a;if(arguments.length===0)r=an();else if(arguments.length===1&&jY(arguments[0]))if(t=arguments[0],BY(t,"prng")){if(!MY(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=an({prng:t.prng})}else r=an(t);else{if(a=arguments[0],!zte(a))throw new TypeError(Pu("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!jY(t))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(BY(t,"prng")){if(!MY(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=an(a/2,.5,{prng:t.prng})}else r=an(a/2,.5,t)}else r=an(a/2,.5)}return a===void 0?i=m:i=p,e=r.PRNG,_i(i,"NAME","chisquare"),t&&t.prng?(_i(i,"seed",null),_i(i,"seedLength",null),xY(i,"state",kY(null),Wte),_i(i,"stateLength",null),_i(i,"byteLength",null),_i(i,"toJSON",kY(null))):(Lu(i,"seed",n),Lu(i,"seedLength",u),xY(i,"state",f,c),Lu(i,"stateLength",o),Lu(i,"byteLength",v),_i(i,"toJSON",l)),_i(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Jte(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return r()}function m(y){return Xte(y)||y<=0?NaN:r(y/2,.5)}}CY.exports=Yte});var UY=s((hxe,VY)=>{"use strict";var Zte=Z3(),$te=Zte();VY.exports=$te});var q0=s((qxe,DY)=>{"use strict";var Qte=G(),GY=UY(),Kte=Z3();Qte(GY,"factory",Kte);DY.exports=GY});var $3=s((bxe,ZY)=>{"use strict";var Ti=G(),Fu=qr(),HY=Nr(),rie=Ur().isPrimitive,zY=mr(),WY=yr(),XY=vr(),JY=dr(),eie=Tr(),tie=W(),nn=q0().factory,iie=Sr(),YY=Lr(),xu=C();function aie(){var r,e,t,i,a;if(arguments.length===0)r=nn();else if(arguments.length===1&&zY(arguments[0]))if(t=arguments[0],XY(t,"prng")){if(!WY(t.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=nn({prng:t.prng})}else r=nn(t);else{if(a=arguments[0],!rie(a))throw new TypeError(xu("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!zY(t))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(XY(t,"prng")){if(!WY(t.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=nn(a,{prng:t.prng})}else r=nn(a,t)}else r=nn(a)}return a===void 0?i=m:i=p,e=r.PRNG,Ti(i,"NAME","chi"),t&&t.prng?(Ti(i,"seed",null),Ti(i,"seedLength",null),HY(i,"state",JY(null),eie),Ti(i,"stateLength",null),Ti(i,"byteLength",null),Ti(i,"toJSON",JY(null))):(Fu(i,"seed",n),Fu(i,"seedLength",u),HY(i,"state",f,c),Fu(i,"stateLength",o),Fu(i,"byteLength",v),Ti(i,"toJSON",l)),Ti(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=iie(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return YY(r())}function m(y){return tie(y)||y<=0?NaN:YY(r(y))}}ZY.exports=aie});var QY=s((wxe,$Y)=>{"use strict";var nie=$3(),sie=nie();$Y.exports=sie});var eZ=s((Exe,rZ)=>{"use strict";var uie=G(),KY=QY(),oie=$3();uie(KY,"factory",oie);rZ.exports=KY});var aZ=s((Nxe,iZ)=>{"use strict";var vie=Er().isPrimitive,fie=Ur().isPrimitive,tZ=C(),cie=oe();function lie(r,e){return!vie(r)||cie(r)?new TypeError(tZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):fie(e)?null:new TypeError(tZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iZ.exports=lie});var sZ=s((Sxe,nZ)=>{"use strict";var Q3=W(),pie=t0(),die=Ue();function gie(r,e,t){var i;return Q3(r)||Q3(e)||Q3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+pie(i)/die)/2)}nZ.exports=gie});var vZ=s((Oxe,oZ)=>{"use strict";var uZ=W();function mie(r,e){return uZ(r)||uZ(e)?NaN:r<e?0:1}oZ.exports=mie});var lZ=s((Axe,cZ)=>{"use strict";var yie=dr(),fZ=W();function hie(r){if(fZ(r))return yie(NaN);return e;function e(t){return fZ(t)?NaN:t<r?0:1}}cZ.exports=hie});var ju=s((_xe,dZ)=>{"use strict";var qie=G(),pZ=vZ(),bie=lZ();qie(pZ,"factory",bie);dZ.exports=pZ});var mZ=s((Txe,gZ)=>{"use strict";var wie=dr(),Eie=ju().factory,K3=W(),Nie=t0(),Sie=Ue();function Oie(r,e){if(K3(r)||K3(e)||e<0)return wie(NaN);if(e===0)return Eie(r);return t;function t(i){var a;return K3(i)?NaN:i<r-e?0:i>r+e?1:(a=(i-r)/e,(1+a+Nie(a)/Sie)/2)}}gZ.exports=Oie});var qZ=s((Ixe,hZ)=>{"use strict";var Aie=G(),yZ=sZ(),_ie=mZ();Aie(yZ,"factory",_ie);hZ.exports=yZ});var rc=s((Rxe,bZ)=>{"use strict";var Tie=qZ(),Iie=1e4,Rie=1e-12;function Lie(r,e,t){var i,a,n,u,o;for(o=1,i=e-t,a=e+t;o<Iie;){if(u=(i+a)/2,a-i<Rie)return u;n=Tie(u,e,t),r>n?i=u:a=u,o+=1}return u}bZ.exports=Lie});var EZ=s((Lxe,wZ)=>{"use strict";var ec=W(),Pie=rc();function Fie(r,e,t){return ec(e)||ec(t)||ec(r)||t<0||r<0||r>1?NaN:t===0?e:Pie(r,e,t)}wZ.exports=Fie});var SZ=s((Pxe,NZ)=>{"use strict";var xie=W();function jie(r,e){return xie(r)||r<0||r>1?NaN:e}NZ.exports=jie});var _Z=s((Fxe,AZ)=>{"use strict";var Mie=dr(),OZ=W();function Bie(r){if(OZ(r))return Mie(NaN);return e;function e(t){return OZ(t)||t<0||t>1?NaN:r}}AZ.exports=Bie});var tc=s((xxe,IZ)=>{"use strict";var kie=G(),TZ=SZ(),Cie=_Z();kie(TZ,"factory",Cie);IZ.exports=TZ});var LZ=s((jxe,RZ)=>{"use strict";var Vie=dr(),Uie=tc().factory,ic=W(),Gie=rc();function Die(r,e){if(ic(r)||ic(e)||e<0)return Vie(NaN);if(e===0)return Uie(r);return t;function t(i){return ic(i)||i<0||i>1?NaN:Gie(i,r,e)}}RZ.exports=Die});var xZ=s((Mxe,FZ)=>{"use strict";var Hie=G(),PZ=EZ(),zie=LZ();Hie(PZ,"factory",zie);FZ.exports=PZ});var MZ=s((Bxe,jZ)=>{"use strict";var Wie=xZ();function Xie(r,e,t){return Wie(r(),e,t)}jZ.exports=Xie});var ac=s((kxe,HZ)=>{"use strict";var xt=G(),Mu=qr(),BZ=Nr(),kZ=mr(),CZ=yr(),VZ=vr(),UZ=dr(),Jie=Tr(),Bu=Hr().factory,GZ=W(),Yie=Sr(),ku=C(),Zie=aZ(),DZ=MZ();function $ie(){var r,e,t,i,a,n;if(arguments.length===0)e=Bu();else if(arguments.length===1){if(r=arguments[0],!kZ(r))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VZ(r,"prng")){if(!CZ(r.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else{if(a=arguments[0],n=arguments[1],i=Zie(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!kZ(r))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VZ(r,"prng")){if(!CZ(r.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bu(r)}else e=Bu()}return a===void 0?t=y:t=m,xt(t,"NAME","cosine"),r&&r.prng?(xt(t,"seed",null),xt(t,"seedLength",null),BZ(t,"state",UZ(null),Jie),xt(t,"stateLength",null),xt(t,"byteLength",null),xt(t,"toJSON",UZ(null)),xt(t,"PRNG",e)):(Mu(t,"seed",u),Mu(t,"seedLength",o),BZ(t,"state",c,l),Mu(t,"stateLength",v),Mu(t,"byteLength",f),xt(t,"toJSON",p),xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Yie(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return DZ(e,a,n)}function y(g,d){return GZ(g)||GZ(d)||d<=0?NaN:DZ(e,g,d)}}HZ.exports=$ie});var WZ=s((Cxe,zZ)=>{"use strict";var Qie=ac(),Kie=Qie();zZ.exports=Kie});var YZ=s((Vxe,JZ)=>{"use strict";var rae=G(),XZ=WZ(),eae=ac();rae(XZ,"factory",eae);JZ.exports=XZ});var KZ=s((Uxe,QZ)=>{"use strict";var ZZ=ye().isPrimitive,nc=C(),$Z=oe();function tae(r,e){return!ZZ(r)||$Z(r)?new TypeError(nc("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!ZZ(e)||$Z(e)?new TypeError(nc("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(nc("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}QZ.exports=tae});var t$=s((Gxe,e$)=>{"use strict";var sc=Ha(),sn=Gr();function r$(r,e,t){var i,a,n,u,o,v,f,c,l;if(n=t-e,n===0)return e;if(f=r.MIN,c=r.MAX,a=c-f,a===n)return r()-f+e;if(a<n)for(u=0;;){for(n===sc?(u=sn(n/(a+1)),n%(a+1)===a&&(u+=1)):u=sn((n+1)/(a+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*a===n-v+1)return i;v*=a+1}if(l=r$(r,0,sn(n/v)),!(l>sc/v)&&(l*=v,i+=l,!(i>n)))return i+e}for(a===sc?(o=sn(a/(n+1)),a%(n+1)===n&&(o+=1)):o=sn((a+1)/(n+1));;)if(i=r()-f,i=sn(i/o),i<=n)return i+e}e$.exports=r$});var uc=s((Dxe,f$)=>{"use strict";var jt=G(),Cu=qr(),i$=Nr(),a$=mr(),n$=yr(),s$=vr(),u$=dr(),iae=Tr(),Vu=Hr().factory,o$=W(),un=we(),aae=Sr(),Ii=C(),nae=KZ(),v$=t$();function sae(){var r,e,t,i,a,n;if(arguments.length===0)e=Vu();else if(arguments.length===1){if(r=arguments[0],!a$(r))throw new TypeError(Ii("invalid argument. Options argument must be an object. Value: `%s`.",r));if(s$(r,"prng")){if(!n$(r.prng))throw new TypeError(Ii("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!un(e.MIN))throw new TypeError(Ii("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!un(e.MAX))throw new TypeError(Ii("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Vu(r)}else{if(a=arguments[0],n=arguments[1],i=nae(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!a$(r))throw new TypeError(Ii("invalid argument. Options argument must be an object. Value: `%s`.",r));if(s$(r,"prng")){if(!n$(r.prng))throw new TypeError(Ii("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!un(e.MIN))throw new TypeError(Ii("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!un(e.MAX))throw new TypeError(Ii("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Vu(r)}else e=Vu()}return a===void 0?t=y:t=m,jt(t,"NAME","discrete-uniform"),r&&r.prng?(jt(t,"seed",null),jt(t,"seedLength",null),i$(t,"state",u$(null),iae),jt(t,"stateLength",null),jt(t,"byteLength",null),jt(t,"toJSON",u$(null)),jt(t,"PRNG",e)):(Cu(t,"seed",u),Cu(t,"seedLength",o),i$(t,"state",c,l),Cu(t,"stateLength",v),Cu(t,"byteLength",f),jt(t,"toJSON",p),jt(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=aae(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return v$(e,a,n)}function y(g,d){return o$(g)||o$(d)||!un(g)||!un(d)||g>d?NaN:v$(e,g,d)}}f$.exports=sae});var l$=s((Hxe,c$)=>{"use strict";var uae=uc(),oae=uae();c$.exports=oae});var g$=s((zxe,d$)=>{"use strict";var vae=G(),p$=l$(),fae=uc();vae(p$,"factory",fae);d$.exports=p$});var h$=s((Wxe,y$)=>{"use strict";var cae=Ur().isPrimitive,lae=at().isPrimitive,m$=C();function pae(r,e){return lae(r)?cae(e)?null:new TypeError(m$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(m$("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}y$.exports=pae});var b$=s((Xxe,q$)=>{"use strict";var dae=br();function gae(r,e,t){var i,a;for(i=1,a=0;a<e;a++)i*=r();return-(1/t)*dae(i)}q$.exports=gae});var oc=s((Jxe,T$)=>{"use strict";var Mt=G(),Uu=qr(),w$=Nr(),E$=mr(),N$=yr(),S$=vr(),O$=dr(),mae=Tr(),Gu=Hr().factory,A$=W(),yae=G3(),hae=Sr(),Du=C(),qae=h$(),_$=b$();function bae(){var r,e,t,i,a,n;if(arguments.length===0)e=Gu();else if(arguments.length===1){if(t=arguments[0],!E$(t))throw new TypeError(Du("invalid argument. Options argument must be an object. Value: `%s`.",t));if(S$(t,"prng")){if(!N$(t.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Gu(t)}else{if(n=arguments[0],r=arguments[1],a=qae(n,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!E$(t))throw new TypeError(Du("invalid argument. Options argument must be an object. Value: `%s`.",t));if(S$(t,"prng")){if(!N$(t.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Gu(t)}else e=Gu()}return n===void 0?i=y:i=m,Mt(i,"NAME","erlang"),t&&t.prng?(Mt(i,"seed",null),Mt(i,"seedLength",null),w$(i,"state",O$(null),mae),Mt(i,"stateLength",null),Mt(i,"byteLength",null),Mt(i,"toJSON",O$(null)),Mt(i,"PRNG",e)):(Uu(i,"seed",u),Uu(i,"seedLength",o),w$(i,"state",c,l),Uu(i,"stateLength",v),Uu(i,"byteLength",f),Mt(i,"toJSON",p),Mt(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=hae(e.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return _$(e,n,r)}function y(g,d){return A$(g)||A$(d)||!yae(g)||d<=0?NaN:_$(e,g,d)}}T$.exports=bae});var R$=s((Yxe,I$)=>{"use strict";var wae=oc(),Eae=wae();I$.exports=Eae});var F$=s((Zxe,P$)=>{"use strict";var Nae=G(),L$=R$(),Sae=oc();Nae(L$,"factory",Sae);P$.exports=L$});var j$=s(($xe,x$)=>{"use strict";var Oae=br();function Aae(r,e){return-Oae(1-r())/e}x$.exports=Aae});var vc=s((Qxe,G$)=>{"use strict";var Bt=G(),Hu=qr(),M$=Nr(),_ae=Ur().isPrimitive,B$=mr(),k$=yr(),C$=vr(),V$=dr(),Tae=Tr(),zu=Hr().factory,Iae=W(),Rae=Sr(),Wu=C(),U$=j$();function Lae(){var r,e,t,i;if(arguments.length===0)t=zu();else if(arguments.length===1&&B$(arguments[0]))if(e=arguments[0],C$(e,"prng")){if(!k$(e.prng))throw new TypeError(Wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e);else{if(r=arguments[0],!_ae(r))throw new TypeError(Wu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!B$(e))throw new TypeError(Wu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(C$(e,"prng")){if(!k$(e.prng))throw new TypeError(Wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e)}else t=zu()}return r===void 0?i=p:i=l,Bt(i,"NAME","exponential"),e&&e.prng?(Bt(i,"seed",null),Bt(i,"seedLength",null),M$(i,"state",V$(null),Tae),Bt(i,"stateLength",null),Bt(i,"byteLength",null),Bt(i,"toJSON",V$(null)),Bt(i,"PRNG",t)):(Hu(i,"seed",a),Hu(i,"seedLength",n),M$(i,"state",v,f),Hu(i,"stateLength",u),Hu(i,"byteLength",o),Bt(i,"toJSON",c),Bt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Rae(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return U$(t,r)}function p(m){return Iae(m)||m<=0?NaN:U$(t,m)}}G$.exports=Lae});var H$=s((Kxe,D$)=>{"use strict";var Pae=vc(),Fae=Pae();D$.exports=Fae});var X$=s((rje,W$)=>{"use strict";var xae=G(),z$=H$(),jae=vc();xae(z$,"factory",jae);W$.exports=z$});var $$=s((eje,Z$)=>{"use strict";var J$=Ur().isPrimitive,Y$=C();function Mae(r,e){return J$(r)?J$(e)?null:new TypeError(Y$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Y$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Z$.exports=Mae});var K$=s((tje,Q$)=>{"use strict";function Bae(r,e,t){var i=r(e)/e,a=r(t)/t;return i/a}Q$.exports=Bae});var fc=s((ije,uQ)=>{"use strict";var Ri=G(),Xu=qr(),rQ=Nr(),eQ=mr(),tQ=yr(),iQ=vr(),aQ=dr(),kae=Tr(),on=q0().factory,nQ=W(),Cae=Sr(),Ju=C(),Vae=$$(),sQ=K$();function Uae(){var r,e,t,i,a,n,u;if(arguments.length===0)r=on();else if(arguments.length===1){if(e=arguments[0],!eQ(e))throw new TypeError(Ju("invalid argument. Options argument must be an object. Value: `%s`.",e));if(iQ(e,"prng")){if(!tQ(e.prng))throw new TypeError(Ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=on({prng:e.prng})}else r=on(e)}else{if(n=arguments[0],u=arguments[1],a=Vae(n,u),a)throw a;if(arguments.length>2){if(e=arguments[2],!eQ(e))throw new TypeError(Ju("invalid argument. Options argument must be an object. Value: `%s`.",e));if(iQ(e,"prng")){if(!tQ(e.prng))throw new TypeError(Ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=on({prng:e.prng})}else r=on(e)}else r=on()}return n===void 0?i=g:i=y,t=r.PRNG,Ri(i,"NAME","f"),e&&e.prng?(Ri(i,"seed",null),Ri(i,"seedLength",null),rQ(i,"state",aQ(null),kae),Ri(i,"stateLength",null),Ri(i,"byteLength",null),Ri(i,"toJSON",aQ(null))):(Xu(i,"seed",o),Xu(i,"seedLength",v),rQ(i,"state",l,p),Xu(i,"stateLength",f),Xu(i,"byteLength",c),Ri(i,"toJSON",m)),Ri(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Cae(t.state),n===void 0?d.params=[]:d.params=[n,u],d}function y(){return sQ(r,n,u)}function g(d,h){return nQ(d)||nQ(h)||d<=0||h<=0?NaN:sQ(r,d,h)}}uQ.exports=Uae});var vQ=s((aje,oQ)=>{"use strict";var Gae=fc(),Dae=Gae();oQ.exports=Dae});var lQ=s((nje,cQ)=>{"use strict";var Hae=G(),fQ=vQ(),zae=fc();Hae(fQ,"factory",zae);cQ.exports=fQ});var gQ=s((sje,dQ)=>{"use strict";var pQ=Ur().isPrimitive,Wae=Er().isPrimitive,cc=oe(),lc=C();function Xae(r,e,t){return!pQ(r)||cc(r)?new TypeError(lc("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!pQ(e)||cc(e)?new TypeError(lc("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!Wae(t)||cc(t)?new TypeError(lc("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}dQ.exports=Xae});var yQ=s((uje,mQ)=>{"use strict";var Jae=Vr(),Yae=br();function Zae(r,e,t,i){return i+t*Jae(-Yae(r()),-1/e)}mQ.exports=Zae});var dc=s((oje,SQ)=>{"use strict";var kt=G(),Yu=qr(),hQ=Nr(),qQ=mr(),bQ=yr(),wQ=vr(),EQ=dr(),$ae=Tr(),Zu=Hr().factory,pc=W(),Qae=Sr(),$u=C(),Kae=gQ(),NQ=yQ();function rne(){var r,e,t,i,a,n,u;if(arguments.length===0)t=Zu();else if(arguments.length===1){if(e=arguments[0],!qQ(e))throw new TypeError($u("invalid argument. Options argument must be an object. Value: `%s`.",e));if(wQ(e,"prng")){if(!bQ(e.prng))throw new TypeError($u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Zu(e)}else{if(r=arguments[0],n=arguments[1],u=arguments[2],a=Kae(r,n,u),a)throw a;if(arguments.length>3){if(e=arguments[3],!qQ(e))throw new TypeError($u("invalid argument. Options argument must be an object. Value: `%s`.",e));if(wQ(e,"prng")){if(!bQ(e.prng))throw new TypeError($u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Zu(e)}else t=Zu()}return r===void 0?i=g:i=y,kt(i,"NAME","frechet"),e&&e.prng?(kt(i,"seed",null),kt(i,"seedLength",null),hQ(i,"state",EQ(null),$ae),kt(i,"stateLength",null),kt(i,"byteLength",null),kt(i,"toJSON",EQ(null)),kt(i,"PRNG",t)):(Yu(i,"seed",o),Yu(i,"seedLength",v),hQ(i,"state",l,p),Yu(i,"stateLength",f),Yu(i,"byteLength",c),kt(i,"toJSON",m),kt(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Qae(t.state),r===void 0?d.params=[]:d.params=[r,n,u],d}function y(){return NQ(t,r,n,u)}function g(d,h,q){return pc(d)||pc(h)||pc(q)||d<=0||h<=0?NaN:NQ(t,d,h,q)}}SQ.exports=rne});var AQ=s((vje,OQ)=>{"use strict";var ene=dc(),tne=ene();OQ.exports=tne});var IQ=s((fje,TQ)=>{"use strict";var ine=G(),_Q=AQ(),ane=dc();ine(_Q,"factory",ane);TQ.exports=_Q});var PQ=s((cje,LQ)=>{"use strict";var nne=Gr(),RQ=br();function sne(r,e){var t=r();return t===0&&(t=r()),nne(RQ(t)/RQ(1-e))}LQ.exports=sne});var gc=s((lje,CQ)=>{"use strict";var Ct=G(),Qu=qr(),FQ=Nr(),xQ=mr(),une=Ln().isPrimitive,jQ=yr(),MQ=vr(),BQ=dr(),one=Tr(),Ku=Hr().factory,vne=W(),fne=Sr(),ro=C(),kQ=PQ();function cne(){var r,e,t,i;if(arguments.length===0)e=Ku();else if(arguments.length===1&&xQ(arguments[0]))if(r=arguments[0],MQ(r,"prng")){if(!jQ(r.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ku(r);else{if(i=arguments[0],!une(i))throw new TypeError(ro("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!xQ(r))throw new TypeError(ro("invalid argument. Options argument must be an object. Value: `%s`.",r));if(MQ(r,"prng")){if(!jQ(r.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ku(r)}else e=Ku()}return i===void 0?t=p:t=l,Ct(t,"NAME","geometric"),r&&r.prng?(Ct(t,"seed",null),Ct(t,"seedLength",null),FQ(t,"state",BQ(null),one),Ct(t,"stateLength",null),Ct(t,"byteLength",null),Ct(t,"toJSON",BQ(null)),Ct(t,"PRNG",e)):(Qu(t,"seed",a),Qu(t,"seedLength",n),FQ(t,"state",v,f),Qu(t,"stateLength",u),Qu(t,"byteLength",o),Ct(t,"toJSON",c),Ct(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=fne(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return kQ(e,i)}function p(m){return vne(m)||m<0||m>1?NaN:kQ(e,m)}}CQ.exports=cne});var UQ=s((pje,VQ)=>{"use strict";var lne=gc(),pne=lne();VQ.exports=pne});var HQ=s((dje,DQ)=>{"use strict";var dne=G(),GQ=UQ(),gne=gc();dne(GQ,"factory",gne);DQ.exports=GQ});var XQ=s((gje,WQ)=>{"use strict";var mne=Er().isPrimitive,yne=Ur().isPrimitive,zQ=C(),hne=oe();function qne(r,e){return!mne(r)||hne(r)?new TypeError(zQ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):yne(e)?null:new TypeError(zQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}WQ.exports=qne});var ZQ=s((mje,YQ)=>{"use strict";var JQ=br();function bne(r,e,t){return e-t*JQ(-JQ(r()))}YQ.exports=bne});var mc=s((yje,aK)=>{"use strict";var Vt=G(),eo=qr(),$Q=Nr(),QQ=mr(),KQ=yr(),rK=vr(),eK=dr(),wne=Tr(),to=Hr().factory,tK=W(),Ene=Sr(),io=C(),Nne=XQ(),iK=ZQ();function Sne(){var r,e,t,i,a,n;if(arguments.length===0)t=to();else if(arguments.length===1){if(e=arguments[0],!QQ(e))throw new TypeError(io("invalid argument. Options argument must be an object. Value: `%s`.",e));if(rK(e,"prng")){if(!KQ(e.prng))throw new TypeError(io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=to(e)}else{if(n=arguments[0],r=arguments[1],a=Nne(n,r),a)throw a;if(arguments.length>2){if(e=arguments[2],!QQ(e))throw new TypeError(io("invalid argument. Options argument must be an object. Value: `%s`.",e));if(rK(e,"prng")){if(!KQ(e.prng))throw new TypeError(io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=to(e)}else t=to()}return n===void 0?i=y:i=m,Vt(i,"NAME","gumbel"),e&&e.prng?(Vt(i,"seed",null),Vt(i,"seedLength",null),$Q(i,"state",eK(null),wne),Vt(i,"stateLength",null),Vt(i,"byteLength",null),Vt(i,"toJSON",eK(null)),Vt(i,"PRNG",t)):(eo(i,"seed",u),eo(i,"seedLength",o),$Q(i,"state",c,l),eo(i,"stateLength",v),eo(i,"byteLength",f),Vt(i,"toJSON",p),Vt(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Ene(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return iK(t,n,r)}function y(g,d){return tK(g)||tK(d)||d<=0?NaN:iK(t,g,d)}}aK.exports=Sne});var sK=s((hje,nK)=>{"use strict";var One=mc(),Ane=One();nK.exports=Ane});var vK=s((qje,oK)=>{"use strict";var _ne=G(),uK=sK(),Tne=mc();_ne(uK,"factory",Tne);oK.exports=uK});var cK=s((bje,fK)=>{"use strict";var yc=be().isPrimitive,b0=C();function Ine(r,e,t){return yc(r)?yc(e)?yc(t)?t>r?new RangeError(b0("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(b0("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(b0("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(b0("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(b0("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}fK.exports=Ine});var lK=s((wje,Rne)=>{Rne.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var dK=s((Eje,pK)=>{"use strict";var Lne=W(),Pne=we(),Fne=Xa(),xne=hr(),jne=lK(),Mne=170;function Bne(r){return Lne(r)?NaN:Pne(r)?r<0?NaN:r<=Mne?jne[r]:xne:Fne(r+1)}pK.exports=Bne});var mK=s((Nje,gK)=>{"use strict";var kne=dK();gK.exports=kne});var hK=s((Sje,yK)=>{"use strict";var Li=mK();function Cne(r,e,t,i){var a,n,u;for(i<t?(a=Li(t)*Li(e+t-i)/(Li(e+t)*Li(t-i)),u=0):(a=Li(e)*Li(i)/(Li(i-t)*Li(e+t)),u=i-t),n=r();n>a;)n-=a,a*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}yK.exports=Cne});var bK=s((Oje,qK)=>{"use strict";var ao=hK();function Vne(r,e,t,i){var a,n,u,o;return i>e/2?(u=e-i,2*t<=e?(a=t,n=e-t,o=ao(r,a,n,u),t-o):(n=t,a=e-t,o=ao(r,a,n,u),i-e+t+o)):(u=i,2*t<=e?(a=t,n=e-t,o=ao(r,a,n,u),o):(a=e-t,n=t,o=ao(r,a,n,u),i-o))}qK.exports=Vne});var qc=s((Aje,TK)=>{"use strict";var Ut=G(),no=qr(),wK=Nr(),EK=mr(),NK=yr(),SK=vr(),OK=dr(),Une=Tr(),so=Hr().factory,hc=af(),AK=hr(),Gne=Sr(),uo=C(),Dne=cK(),_K=bK();function Hne(){var r,e,t,i,a,n,u;if(arguments.length===0)e=so();else if(arguments.length===1){if(r=arguments[0],!EK(r))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SK(r,"prng")){if(!NK(r.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=so(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=Dne(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!EK(r))throw new TypeError(uo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SK(r,"prng")){if(!NK(r.prng))throw new TypeError(uo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=so(r)}else e=so()}return a===void 0?t=g:t=y,Ut(t,"NAME","hypergeometric"),r&&r.prng?(Ut(t,"seed",null),Ut(t,"seedLength",null),wK(t,"state",OK(null),Une),Ut(t,"stateLength",null),Ut(t,"byteLength",null),Ut(t,"toJSON",OK(null)),Ut(t,"PRNG",e)):(no(t,"seed",o),no(t,"seedLength",v),wK(t,"state",l,p),no(t,"stateLength",f),no(t,"byteLength",c),Ut(t,"toJSON",m),Ut(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Gne(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return _K(e,a,n,u)}function g(d,h,q){return d===AK||h===AK||!hc(d)||!hc(h)||!hc(q)||q>d?NaN:_K(e,d,h,q)}}TK.exports=Hne});var RK=s((_je,IK)=>{"use strict";var zne=qc(),Wne=zne();IK.exports=Wne});var FK=s((Tje,PK)=>{"use strict";var Xne=G(),LK=RK(),Jne=qc();Xne(LK,"factory",Jne);PK.exports=LK});var BK=s((Ije,MK)=>{"use strict";var xK=Ur().isPrimitive,jK=C();function Yne(r,e){return xK(r)?xK(e)?null:new TypeError(jK("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(jK("invalid argument. First argument must be a positive number. Value: `%s`.",r))}MK.exports=Yne});var bc=s((Rje,HK)=>{"use strict";var Pi=G(),oo=qr(),kK=Nr(),CK=mr(),VK=yr(),UK=vr(),GK=dr(),Zne=Tr(),vn=en().factory,DK=W(),$ne=Sr(),vo=C(),Qne=BK();function Kne(){var r,e,t,i,a,n,u;if(arguments.length===0)r=vn();else if(arguments.length===1){if(i=arguments[0],!CK(i))throw new TypeError(vo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(UK(i,"prng")){if(!VK(i.prng))throw new TypeError(vo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=vn({prng:i.prng})}else r=vn(i)}else{if(e=arguments[0],t=arguments[1],u=Qne(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!CK(i))throw new TypeError(vo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(UK(i,"prng")){if(!VK(i.prng))throw new TypeError(vo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=vn(e,t,{prng:i.prng})}else r=vn(e,t,i)}else r=vn(e,t)}return e===void 0?n=g:n=y,a=r.PRNG,Pi(n,"NAME","invgamma"),i&&i.prng?(Pi(n,"seed",null),Pi(n,"seedLength",null),kK(n,"state",GK(null),Zne),Pi(n,"stateLength",null),Pi(n,"byteLength",null),Pi(n,"toJSON",GK(null))):(oo(n,"seed",o),oo(n,"seedLength",v),kK(n,"state",l,p),oo(n,"stateLength",f),oo(n,"byteLength",c),Pi(n,"toJSON",m)),Pi(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=$ne(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return 1/r()}function g(d,h){return DK(d)||DK(h)||d<=0||h<=0?NaN:1/r(d,h)}}HK.exports=Kne});var WK=s((Lje,zK)=>{"use strict";var r0e=bc(),e0e=r0e();zK.exports=e0e});var YK=s((Pje,JK)=>{"use strict";var t0e=G(),XK=WK(),i0e=bc();t0e(XK,"factory",i0e);JK.exports=XK});var KK=s((Fje,QK)=>{"use strict";var ZK=Ur().isPrimitive,$K=C();function a0e(r,e){return ZK(r)?ZK(e)?null:new TypeError($K("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError($K("invalid argument. First argument must be a positive number. Value: `%s`.",r))}QK.exports=a0e});var trr=s((xje,err)=>{"use strict";var rrr=Vr();function n0e(r,e,t){var i=r();return rrr(1-rrr(1-i,1/t),1/e)}err.exports=n0e});var wc=s((jje,frr)=>{"use strict";var Gt=G(),fo=qr(),irr=Nr(),arr=mr(),nrr=yr(),srr=vr(),urr=dr(),s0e=Tr(),co=Hr().factory,orr=W(),u0e=Sr(),lo=C(),o0e=KK(),vrr=trr();function v0e(){var r,e,t,i,a,n;if(arguments.length===0)e=co();else if(arguments.length===1){if(r=arguments[0],!arr(r))throw new TypeError(lo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(srr(r,"prng")){if(!nrr(r.prng))throw new TypeError(lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=co(r)}else{if(a=arguments[0],n=arguments[1],i=o0e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!arr(r))throw new TypeError(lo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(srr(r,"prng")){if(!nrr(r.prng))throw new TypeError(lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=co(r)}else e=co()}return a===void 0?t=y:t=m,Gt(t,"NAME","kumaraswamy"),r&&r.prng?(Gt(t,"seed",null),Gt(t,"seedLength",null),irr(t,"state",urr(null),s0e),Gt(t,"stateLength",null),Gt(t,"byteLength",null),Gt(t,"toJSON",urr(null)),Gt(t,"PRNG",e)):(fo(t,"seed",u),fo(t,"seedLength",o),irr(t,"state",c,l),fo(t,"stateLength",v),fo(t,"byteLength",f),Gt(t,"toJSON",p),Gt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=u0e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return vrr(e,a,n)}function y(g,d){return orr(g)||orr(d)||g<=0||d<=0?NaN:vrr(e,g,d)}}frr.exports=v0e});var lrr=s((Mje,crr)=>{"use strict";var f0e=wc(),c0e=f0e();crr.exports=c0e});var grr=s((Bje,drr)=>{"use strict";var l0e=G(),prr=lrr(),p0e=wc();l0e(prr,"factory",p0e);drr.exports=prr});var hrr=s((kje,yrr)=>{"use strict";var d0e=Er().isPrimitive,g0e=Ur().isPrimitive,mrr=C(),m0e=oe();function y0e(r,e){return!d0e(r)||m0e(r)?new TypeError(mrr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):g0e(e)?null:new TypeError(mrr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}yrr.exports=y0e});var brr=s((Cje,qrr)=>{"use strict";var h0e=Eu(),q0e=Wr(),b0e=br();function w0e(r,e,t){var i=r()-.5;return e-t*h0e(i)*b0e(1-2*q0e(i))}qrr.exports=w0e});var Ec=s((Vje,Trr)=>{"use strict";var Dt=G(),po=qr(),wrr=Nr(),Err=mr(),Nrr=yr(),Srr=vr(),Orr=dr(),E0e=Tr(),go=Hr().factory,Arr=W(),N0e=Sr(),mo=C(),S0e=hrr(),_rr=brr();function O0e(){var r,e,t,i,a,n;if(arguments.length===0)e=go();else if(arguments.length===1){if(r=arguments[0],!Err(r))throw new TypeError(mo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Srr(r,"prng")){if(!Nrr(r.prng))throw new TypeError(mo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=go(r)}else{if(a=arguments[0],n=arguments[1],i=S0e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Err(r))throw new TypeError(mo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Srr(r,"prng")){if(!Nrr(r.prng))throw new TypeError(mo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=go(r)}else e=go()}return a===void 0?t=y:t=m,Dt(t,"NAME","laplace"),r&&r.prng?(Dt(t,"seed",null),Dt(t,"seedLength",null),wrr(t,"state",Orr(null),E0e),Dt(t,"stateLength",null),Dt(t,"byteLength",null),Dt(t,"toJSON",Orr(null)),Dt(t,"PRNG",e)):(po(t,"seed",u),po(t,"seedLength",o),wrr(t,"state",c,l),po(t,"stateLength",v),po(t,"byteLength",f),Dt(t,"toJSON",p),Dt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=N0e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return _rr(e,a,n)}function y(g,d){return Arr(g)||Arr(d)||d<=0?NaN:_rr(e,g,d)}}Trr.exports=O0e});var Rrr=s((Uje,Irr)=>{"use strict";var A0e=Ec(),_0e=A0e();Irr.exports=_0e});var Frr=s((Gje,Prr)=>{"use strict";var T0e=G(),Lrr=Rrr(),I0e=Ec();T0e(Lrr,"factory",I0e);Prr.exports=Lrr});var Mrr=s((Dje,jrr)=>{"use strict";var R0e=Er().isPrimitive,L0e=Ur().isPrimitive,xrr=C(),P0e=oe();function F0e(r,e){return!R0e(r)||P0e(r)?new TypeError(xrr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):L0e(e)?null:new TypeError(xrr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}jrr.exports=F0e});var krr=s((Hje,Brr)=>{"use strict";function x0e(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Brr.exports=x0e});var Vrr=s((zje,Crr)=>{"use strict";function j0e(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Crr.exports=j0e});var Grr=s((Wje,Urr)=>{"use strict";function M0e(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Urr.exports=M0e});var Hrr=s((Xje,Drr)=>{"use strict";function B0e(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Drr.exports=B0e});var Wrr=s((Jje,zrr)=>{"use strict";function k0e(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}zrr.exports=k0e});var Zrr=s((Yje,Yrr)=>{"use strict";var C0e=W(),Xrr=Lr(),Jrr=br(),V0e=hr(),U0e=Ir(),G0e=krr(),D0e=Vrr(),H0e=Grr(),z0e=Hrr(),W0e=Wrr(),X0e=.08913147449493408,J0e=2.249481201171875,Y0e=.807220458984375,Z0e=.9399557113647461,$0e=.9836282730102539;function Q0e(r){var e,t,i,a,n,u;return C0e(r)?NaN:r===1?V0e:r===-1?U0e:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),a=1-t,t<=.5?(n=t*(t+10),u=G0e(t),e*(n*X0e+n*u)):a>=.25?(n=Xrr(-2*Jrr(a)),a-=.25,u=D0e(a),e*(n/(J0e+u))):(a=Xrr(-Jrr(a)),a<3?(i=a-1.125,u=H0e(i),e*(Y0e*a+u*a)):a<6?(i=a-3,u=z0e(i),e*(Z0e*a+u*a)):(i=a-6,u=W0e(i),e*($0e*a+u*a))))}Yrr.exports=Q0e});var Nc=s((Zje,$rr)=>{"use strict";var K0e=Zrr();$rr.exports=K0e});var Krr=s(($je,Qrr)=>{"use strict";var rse=Nc(),Sc=W(),ese=Lr();function tse(r,e,t){var i,a;return Sc(e)||Sc(t)||Sc(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,a=t*ese(2),i+a*rse(2*r-1))}Qrr.exports=tse});var eer=s((Qje,rer)=>{"use strict";var ise=dr(),ase=tc().factory,nse=Nc(),Oc=W(),sse=Lr();function use(r,e){var t,i;if(Oc(r)||Oc(e)||e<0)return ise(NaN);return e===0&&ase(r),t=r,i=e*sse(2),a;function a(n){return Oc(n)||n<0||n>1?NaN:t+i*nse(2*n-1)}}rer.exports=use});var Ac=s((Kje,ier)=>{"use strict";var ose=G(),ter=Krr(),vse=eer();ose(ter,"factory",vse);ier.exports=ter});var ner=s((rMe,aer)=>{"use strict";var fse=Ac();function cse(r,e,t){var i=fse(1-r()/2,0,1);return e+t/(i*i)}aer.exports=cse});var _c=s((eMe,per)=>{"use strict";var Ht=G(),yo=qr(),ser=Nr(),uer=mr(),oer=yr(),ver=vr(),fer=dr(),lse=Tr(),ho=Hr().factory,cer=W(),pse=Sr(),qo=C(),dse=Mrr(),ler=ner();function gse(){var r,e,t,i,a,n;if(arguments.length===0)e=ho();else if(arguments.length===1){if(r=arguments[0],!uer(r))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ver(r,"prng")){if(!oer(r.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ho(r)}else{if(a=arguments[0],n=arguments[1],i=dse(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!uer(r))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ver(r,"prng")){if(!oer(r.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ho(r)}else e=ho()}return a===void 0?t=y:t=m,Ht(t,"NAME","levy"),r&&r.prng?(Ht(t,"seed",null),Ht(t,"seedLength",null),ser(t,"state",fer(null),lse),Ht(t,"stateLength",null),Ht(t,"byteLength",null),Ht(t,"toJSON",fer(null)),Ht(t,"PRNG",e)):(yo(t,"seed",u),yo(t,"seedLength",o),ser(t,"state",c,l),yo(t,"stateLength",v),yo(t,"byteLength",f),Ht(t,"toJSON",p),Ht(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=pse(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return ler(e,a,n)}function y(g,d){return cer(g)||cer(d)||d<=0?NaN:ler(e,g,d)}}per.exports=gse});var ger=s((tMe,der)=>{"use strict";var mse=_c(),yse=mse();der.exports=yse});var her=s((iMe,yer)=>{"use strict";var hse=G(),mer=ger(),qse=_c();hse(mer,"factory",qse);yer.exports=mer});var wer=s((aMe,ber)=>{"use strict";var bse=Er().isPrimitive,wse=Ur().isPrimitive,Ese=oe(),qer=C();function Nse(r,e){return!bse(r)||Ese(r)?new TypeError(qer("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):wse(e)?null:new TypeError(qer("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ber.exports=Nse});var Ner=s((nMe,Eer)=>{"use strict";var Sse=br();function Ose(r,e,t){var i=r();return e+t*Sse(i/(1-i))}Eer.exports=Ose});var Tc=s((sMe,Ler)=>{"use strict";var zt=G(),bo=qr(),Ser=Nr(),Oer=mr(),Aer=yr(),_er=vr(),Ter=dr(),Ase=Tr(),wo=Hr().factory,Ier=W(),_se=Sr(),Eo=C(),Tse=wer(),Rer=Ner();function Ise(){var r,e,t,i,a,n;if(arguments.length===0)e=wo();else if(arguments.length===1){if(r=arguments[0],!Oer(r))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_er(r,"prng")){if(!Aer(r.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=wo(r)}else{if(a=arguments[0],n=arguments[1],i=Tse(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Oer(r))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_er(r,"prng")){if(!Aer(r.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=wo(r)}else e=wo()}return a===void 0?t=y:t=m,zt(t,"NAME","logistic"),r&&r.prng?(zt(t,"seed",null),zt(t,"seedLength",null),Ser(t,"state",Ter(null),Ase),zt(t,"stateLength",null),zt(t,"byteLength",null),zt(t,"toJSON",Ter(null)),zt(t,"PRNG",e)):(bo(t,"seed",u),bo(t,"seedLength",o),Ser(t,"state",c,l),bo(t,"stateLength",v),bo(t,"byteLength",f),zt(t,"toJSON",p),zt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=_se(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Rer(e,a,n)}function y(g,d){return Ier(g)||Ier(d)||d<=0?NaN:Rer(e,g,d)}}Ler.exports=Ise});var Fer=s((uMe,Per)=>{"use strict";var Rse=Tc(),Lse=Rse();Per.exports=Lse});var Mer=s((oMe,jer)=>{"use strict";var Pse=G(),xer=Fer(),Fse=Tc();Pse(xer,"factory",Fse);jer.exports=xer});var Cer=s((vMe,ker)=>{"use strict";var xse=Er().isPrimitive,jse=Ur().isPrimitive,Ber=C(),Mse=oe();function Bse(r,e){return!xse(r)||Mse(r)?new TypeError(Ber("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):jse(e)?null:new TypeError(Ber("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ker.exports=Bse});var Uer=s((fMe,Ver)=>{"use strict";var kse=ae();function Cse(r,e,t){return kse(e+t*r())}Ver.exports=Cse});var Ic=s((cMe,Yer)=>{"use strict";var Fi=G(),No=qr(),Ger=Nr(),Der=mr(),Her=yr(),zer=vr(),Wer=dr(),Vse=Tr(),fn=Si().factory,Xer=W(),Use=Sr(),So=C(),Gse=Cer(),Jer=Uer();function Dse(){var r,e,t,i,a,n,u;if(arguments.length===0)e=fn();else if(arguments.length===1){if(t=arguments[0],!Der(t))throw new TypeError(So("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zer(t,"prng")){if(!Her(t.prng))throw new TypeError(So("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=fn({prng:t.prng})}else e=fn(t)}else{if(u=arguments[0],r=arguments[1],n=Gse(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Der(t))throw new TypeError(So("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zer(t,"prng")){if(!Her(t.prng))throw new TypeError(So("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=fn({prng:t.prng})}else e=fn(t)}else e=fn()}return u===void 0?a=g:a=y,i=e.PRNG,Fi(a,"NAME","lognormal"),t&&t.prng?(Fi(a,"seed",null),Fi(a,"seedLength",null),Ger(a,"state",Wer(null),Vse),Fi(a,"stateLength",null),Fi(a,"byteLength",null),Fi(a,"toJSON",Wer(null))):(No(a,"seed",o),No(a,"seedLength",v),Ger(a,"state",l,p),No(a,"stateLength",f),No(a,"byteLength",c),Fi(a,"toJSON",m)),Fi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Use(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return Jer(e,u,r)}function g(d,h){return Xer(d)||Xer(h)||h<=0?NaN:Jer(e,d,h)}}Yer.exports=Dse});var $er=s((lMe,Zer)=>{"use strict";var Hse=Ic(),zse=Hse();Zer.exports=zse});var rtr=s((pMe,Ker)=>{"use strict";var Wse=G(),Qer=$er(),Xse=Ic();Wse(Qer,"factory",Xse);Ker.exports=Qer});var Rc=s((dMe,etr)=>{"use strict";var Jse=ma(),Yse=Gr(),Zse=Jse-1;function $se(){var r=Yse(1+Zse*Math.random());return r|0}etr.exports=$se});var Fc=s((gMe,str)=>{"use strict";var Wt=G(),xi=qr(),ttr=Nr(),Lc=vr(),Qse=mr(),Kse=de().isPrimitive,rue=Be(),eue=at().isPrimitive,itr=C0(),$e=C(),Oo=ma(),Re=ai(),cn=qi(),tue=Sr(),atr=Rc(),Pc=Oo-1|0,iue=Oo-1|0,aue=16807,Ao=1,_o=2,ji=2,Le=4,w0=5;function ntr(r,e){var t;return e?t="option":t="argument",r.length<w0+1?new RangeError($e("invalid %s. State array has insufficient length.",t)):r[0]!==Ao?new RangeError($e("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ao,r[0])):r[1]!==_o?new RangeError($e("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,_o,r[1])):r[ji]!==1?new RangeError($e("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[ji])):r[Le]!==r.length-w0?new RangeError($e("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-w0,r[Le])):null}function nue(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!Qse(r))throw new TypeError($e("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Lc(r,"copy")&&(i.copy=r.copy,!Kse(r.copy)))throw new TypeError($e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Lc(r,"state")){if(t=r.state,i.state=!0,!itr(t))throw new TypeError($e("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=ntr(t,!0),u)throw u;i.copy===!1?e=t:(e=new Re(t.length),cn(t.length,t,1,e,1)),t=new Re(e.buffer,e.byteOffset+(ji+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,t[Le])}if(a===void 0)if(Lc(r,"seed"))if(a=r.seed,i.seed=!0,eue(a)){if(a>iue)throw new RangeError($e("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(rue(a)&&a.length>0)n=a.length,e=new Re(w0+n),e[0]=Ao,e[1]=_o,e[ji]=1,e[Le]=n,cn.ndarray(n,a,1,0,e,1,Le+1),t=new Re(e.buffer,e.byteOffset+(ji+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,n),t[0]=a[0];else throw new TypeError($e("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=atr()|0}else a=atr()|0;return t===void 0&&(e=new Re(w0+1),e[0]=Ao,e[1]=_o,e[ji]=1,e[Le]=1,e[Le+1]=a,t=new Re(e.buffer,e.byteOffset+(ji+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,1),t[0]=a[0]),Wt(y,"NAME","minstd"),xi(y,"seed",o),xi(y,"seedLength",v),ttr(y,"state",l,p),xi(y,"stateLength",f),xi(y,"byteLength",c),Wt(y,"toJSON",m),Wt(y,"MIN",1),Wt(y,"MAX",Oo-1),Wt(y,"normalized",g),Wt(g,"NAME",y.NAME),xi(g,"seed",o),xi(g,"seedLength",v),ttr(g,"state",l,p),xi(g,"stateLength",f),xi(g,"byteLength",c),Wt(g,"toJSON",m),Wt(g,"MIN",(y.MIN-1)/Pc),Wt(g,"MAX",(y.MAX-1)/Pc),y;function o(){var d=e[Le];return cn(d,a,1,new Re(d),1)}function v(){return e[Le]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return cn(d,e,1,new Re(d),1)}function p(d){var h;if(!itr(d))throw new TypeError($e("invalid argument. Must provide an Int32Array. Value: `%s`.",d));if(h=ntr(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?cn(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Re(d.length)),cn(d.length,d,1,e,1)),t=new Re(e.buffer,e.byteOffset+(ji+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,e[Le])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=tue(e),d.params=[],d}function y(){var d=t[0]|0;return d=aue*d%Oo|0,t[0]=d,d|0}function g(){return(y()-1)/Pc}}str.exports=nue});var otr=s((mMe,utr)=>{"use strict";var sue=Fc(),uue=Rc(),oue=sue({seed:uue()});utr.exports=oue});var ctr=s((yMe,ftr)=>{"use strict";var vue=G(),vtr=otr(),fue=Fc();vue(vtr,"factory",fue);ftr.exports=vtr});var ptr=s((hMe,ltr)=>{"use strict";var cue=W(),lue=8;function pue(r,e,t){var i,a;for(a=0;a<lue;a++)if(i=r(),cue(i))throw new Error("unexpected error. PRNG returned NaN.");for(a=t-1;a>=0;a--)e[a]=r();return e}ltr.exports=pue});var xc=s((qMe,dtr)=>{"use strict";var due=ma(),gue=Gr(),mue=due-1;function yue(){var r=gue(1+mue*Math.random());return r|0}dtr.exports=yue});var Bc=s((bMe,btr)=>{"use strict";var Xt=G(),Mi=qr(),gtr=Nr(),jc=vr(),hue=mr(),que=de().isPrimitive,bue=Be(),wue=at().isPrimitive,mtr=C0(),ln=qi(),Eue=Gr(),Pe=ai(),E0=ma(),Nue=Sr(),Xe=C(),ytr=ptr(),htr=xc(),Mc=E0-1|0,Sue=E0-1|0,Oue=16807,xe=32,Ro=1,Lo=3,Bi=2,pn=xe+3,Fe=xe+6,N0=xe+7,To=pn+1,Io=pn+2;function qtr(r,e){var t;return e?t="option":t="argument",r.length<N0+1?new RangeError(Xe("invalid %s. State array has insufficient length.",t)):r[0]!==Ro?new RangeError(Xe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ro,r[0])):r[1]!==Lo?new RangeError(Xe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Lo,r[1])):r[Bi]!==xe?new RangeError(Xe("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,xe,r[Bi])):r[pn]!==2?new RangeError(Xe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[pn])):r[Fe]!==r.length-N0?new RangeError(Xe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-N0,r[Fe])):null}function Aue(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!hue(r))throw new TypeError(Xe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jc(r,"copy")&&(i.copy=r.copy,!que(r.copy)))throw new TypeError(Xe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(jc(r,"state")){if(t=r.state,i.state=!0,!mtr(t))throw new TypeError(Xe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=qtr(t,!0),u)throw u;i.copy===!1?e=t:(e=new Pe(t.length),ln(t.length,t,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(Bi+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,t[Fe])}if(a===void 0)if(jc(r,"seed"))if(a=r.seed,i.seed=!0,wue(a)){if(a>Sue)throw new RangeError(Xe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(bue(a)&&a.length>0)n=a.length,e=new Pe(N0+n),e[0]=Ro,e[1]=Lo,e[Bi]=xe,e[pn]=2,e[Io]=a[0],e[Fe]=n,ln.ndarray(n,a,1,0,e,1,Fe+1),t=new Pe(e.buffer,e.byteOffset+(Bi+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,n),t=ytr(y,t,xe),e[To]=t[0];else throw new TypeError(Xe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=htr()|0}else a=htr()|0;return t===void 0&&(e=new Pe(N0+1),e[0]=Ro,e[1]=Lo,e[Bi]=xe,e[pn]=2,e[Io]=a,e[Fe]=1,e[Fe+1]=a,t=new Pe(e.buffer,e.byteOffset+(Bi+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,1),t=ytr(y,t,xe),e[To]=t[0]),Xt(g,"NAME","minstd-shuffle"),Mi(g,"seed",o),Mi(g,"seedLength",v),gtr(g,"state",l,p),Mi(g,"stateLength",f),Mi(g,"byteLength",c),Xt(g,"toJSON",m),Xt(g,"MIN",1),Xt(g,"MAX",E0-1),Xt(g,"normalized",d),Xt(d,"NAME",g.NAME),Mi(d,"seed",o),Mi(d,"seedLength",v),gtr(d,"state",l,p),Mi(d,"stateLength",f),Mi(d,"byteLength",c),Xt(d,"toJSON",m),Xt(d,"MIN",(g.MIN-1)/Mc),Xt(d,"MAX",(g.MAX-1)/Mc),g;function o(){var h=e[Fe];return ln(h,a,1,new Pe(h),1)}function v(){return e[Fe]}function f(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return ln(h,e,1,new Pe(h),1)}function p(h){var q;if(!mtr(h))throw new TypeError(Xe("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(q=qtr(h,!1),q)throw q;i.copy===!1?i.state&&h.length===e.length?ln(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new Pe(h.length)),ln(h.length,h,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(Bi+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,e[Fe])}function m(){var h={};return h.type="PRNG",h.name=g.NAME,h.state=Nue(e),h.params=[],h}function y(){var h=e[Io]|0;return h=Oue*h%E0|0,e[Io]=h,h|0}function g(){var h,q;return h=e[To],q=Eue(xe*(h/E0)),h=t[q],e[To]=h,t[q]=y(),h}function d(){return(g()-1)/Mc}}btr.exports=Aue});var Etr=s((wMe,wtr)=>{"use strict";var _ue=Bc(),Tue=xc(),Iue=_ue({seed:Tue()});wtr.exports=Iue});var Otr=s((EMe,Str)=>{"use strict";var Rue=G(),Ntr=Etr(),Lue=Bc();Rue(Ntr,"factory",Lue);Str.exports=Ntr});var _tr=s((NMe,Atr)=>{"use strict";var Pue=ae();function Fue(r,e){for(var t=r(),i=1;t>Pue(-e);)i+=1,t*=r();return i-1}Atr.exports=Fue});var Itr=s((SMe,Ttr)=>{"use strict";var xue=Gr();function jue(r){return xue(r)===r&&r<0}Ttr.exports=jue});var Ltr=s((OMe,Rtr)=>{"use strict";var Mue=Itr();Rtr.exports=Mue});var Ftr=s((AMe,Ptr)=>{"use strict";var Bue=Ltr(),kue=i0();function Cue(r){return Bue(r)?NaN:kue(r+1)}Ptr.exports=Cue});var jtr=s((_Me,xtr)=>{"use strict";var Vue=Ftr();xtr.exports=Vue});var Ctr=s((TMe,ktr)=>{"use strict";var Uue=jtr(),Mtr=Gr(),Gue=Eu(),Due=Lr(),Btr=Wr(),Po=br(),Hue=If(),zue=1/12,Wue=1/360;function Xue(r,e){var t,i,a,n,u,o,v,f,c,l;for(t=Due(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,a=.86*u;;){if(l=r(),l<=a)return c=l/u-.43,c*=2*o/(.5-Btr(c))+v,c+=e+.445,Mtr(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=Gue(c)*.5-c,l=u*r()),n=.5-Btr(c),(n>=.013||n>=l)&&(f=Mtr((2*o/n+v)*c+e+.445),l*=i/(o/(n*n)+v),c=(f+.5)*Po(e/f),c+=-e-Hue+f,c-=(zue-Wue/(f*f))/f,f>=10&&c>=Po(l*t)||(c=f*Po(e)-e-Uue(f),f>=0&&f<=9&&c>=Po(l))))return f}}ktr.exports=Xue});var Utr=s((IMe,Vtr)=>{"use strict";var Jue=_tr(),Yue=Ctr();function Zue(r,e){return e<30?Jue(r,e):Yue(r,e)}Vtr.exports=Zue});var kc=s((RMe,Jtr)=>{"use strict";var Jt=G(),Fo=qr(),Gtr=Nr(),$ue=Ur().isPrimitive,Dtr=mr(),Htr=yr(),ztr=vr(),Wtr=dr(),Que=Tr(),xo=Hr().factory,Kue=W(),roe=Sr(),jo=C(),Xtr=Utr();function eoe(){var r,e,t,i;if(arguments.length===0)t=xo();else if(arguments.length===1&&Dtr(arguments[0]))if(e=arguments[0],ztr(e,"prng")){if(!Htr(e.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=xo(e);else{if(r=arguments[0],!$ue(r))throw new TypeError(jo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Dtr(e))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ztr(e,"prng")){if(!Htr(e.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=xo(e)}else t=xo()}return r===void 0?i=p:i=l,Jt(i,"NAME","poisson"),e&&e.prng?(Jt(i,"seed",null),Jt(i,"seedLength",null),Gtr(i,"state",Wtr(null),Que),Jt(i,"stateLength",null),Jt(i,"byteLength",null),Jt(i,"toJSON",Wtr(null)),Jt(i,"PRNG",t)):(Fo(i,"seed",a),Fo(i,"seedLength",n),Gtr(i,"state",v,f),Fo(i,"stateLength",u),Fo(i,"byteLength",o),Jt(i,"toJSON",c),Jt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=roe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Xtr(t,r)}function p(m){return Kue(m)||m<=0?NaN:Xtr(t,m)}}Jtr.exports=eoe});var Ztr=s((LMe,Ytr)=>{"use strict";var toe=kc(),ioe=toe();Ytr.exports=ioe});var Cc=s((PMe,Qtr)=>{"use strict";var aoe=G(),$tr=Ztr(),noe=kc();aoe($tr,"factory",noe);Qtr.exports=$tr});var rir=s((FMe,Ktr)=>{"use strict";var soe=Ur().isPrimitive,uoe=Er().isPrimitive,Vc=C(),ooe=oe();function voe(r,e){return soe(r)?!uoe(e)||ooe(e)?new TypeError(Vc("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Vc("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Vc("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Ktr.exports=voe});var Hc=s((xMe,oir)=>{"use strict";var ki=G(),Mo=qr(),eir=Nr(),dn=vr(),tir=mr(),Uc=yt(),iir=de().isPrimitive,air=yr(),nir=dr(),foe=Tr(),sir=W(),gn=Cc().factory,Bo=en().factory,Gc=qi(),Dc=me(),uir=m0(),coe=Sr(),Yt=C(),loe=rir();function poe(){var r,e,t,i,a,n,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=gn(i);else if(arguments.length===1){if(i=arguments[0],!tir(i))throw new TypeError(Yt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dn(i,"copy")&&!iir(i.copy))throw new TypeError(Yt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(dn(i,"prng")){if(!air(i.prng))throw new TypeError(Yt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=gn({prng:i.prng})}else{if(dn(i,"state")&&!Uc(i.state))throw new TypeError(Yt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=uir({},i),i.copy===!1?u=!1:i.state&&(i.state=Gc(i.state.length,i.state,1,new Dc(i.state.length),1)),i.copy=!1,t=gn(i)}}else{if(f=arguments[0],v=arguments[1],o=loe(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!tir(i))throw new TypeError(Yt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dn(i,"copy")&&!iir(i.copy))throw new TypeError(Yt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(dn(i,"prng")){if(!air(i.prng))throw new TypeError(Yt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=gn({prng:i.prng})}else{if(dn(i,"state")&&!Uc(i.state))throw new TypeError(Yt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=uir({},i),i.copy===!1?u=!1:i.state&&(i.state=Gc(i.state.length,i.state,1,new Dc(i.state.length),1)),i.copy=!1,t=gn(i)}}else i={copy:!1},t=gn(i)}return i&&i.prng?f===void 0?r=Bo({prng:i.prng}):r=Bo(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Bo({state:e,copy:!1}):r=Bo(f,v/(1-v),{state:e,copy:!1})),f===void 0?a=q:a=h,n=t.PRNG,ki(a,"NAME","negative-binomial"),i&&i.prng?(ki(a,"seed",null),ki(a,"seedLength",null),eir(a,"state",nir(null),foe),ki(a,"stateLength",null),ki(a,"byteLength",null),ki(a,"toJSON",nir(null))):(Mo(a,"seed",c),Mo(a,"seedLength",l),eir(a,"state",y,g),Mo(a,"stateLength",p),Mo(a,"byteLength",m),ki(a,"toJSON",d)),ki(a,"PRNG",n),a;function c(){return n.seed}function l(){return n.seedLength}function p(){return n.stateLength}function m(){return n.byteLength}function y(){return n.state}function g(w){if(!Uc(w))throw new TypeError(Yt("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));u&&(w=Gc(w.length,w,1,new Dc(w.length),1)),n.state=w}function d(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=coe(n.state),f===void 0?w.params=[]:w.params=[f,v],w}function h(){return t(r())}function q(w,A){return sir(w)||sir(A)||A<=0||A>=1?NaN:t(r(w,A/(1-A)))}}oir.exports=poe});var fir=s((jMe,vir)=>{"use strict";var doe=Hc(),goe=doe();vir.exports=goe});var pir=s((MMe,lir)=>{"use strict";var moe=G(),cir=fir(),yoe=Hc();moe(cir,"factory",yoe);lir.exports=cir});var mir=s((BMe,gir)=>{"use strict";var hoe=Er().isPrimitive,qoe=Ur().isPrimitive,dir=C(),boe=oe();function woe(r,e){return!hoe(r)||boe(r)?new TypeError(dir("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):qoe(e)?null:new TypeError(dir("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}gir.exports=woe});var hir=s((kMe,yir)=>{"use strict";function Eoe(r,e,t){return e+t*r()}yir.exports=Eoe});var zc=s((CMe,Air)=>{"use strict";var Ci=G(),ko=qr(),qir=Nr(),bir=mr(),wir=yr(),Eir=vr(),Nir=dr(),Noe=Tr(),mn=Si().factory,Sir=W(),Soe=Sr(),Co=C(),Ooe=mir(),Oir=hir();function Aoe(){var r,e,t,i,a,n,u;if(arguments.length===0)e=mn();else if(arguments.length===1){if(t=arguments[0],!bir(t))throw new TypeError(Co("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Eir(t,"prng")){if(!wir(t.prng))throw new TypeError(Co("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=mn({prng:t.prng})}else e=mn(t)}else{if(u=arguments[0],r=arguments[1],n=Ooe(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!bir(t))throw new TypeError(Co("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Eir(t,"prng")){if(!wir(t.prng))throw new TypeError(Co("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=mn({prng:t.prng})}else e=mn(t)}else e=mn()}return u===void 0?a=g:a=y,i=e.PRNG,Ci(a,"NAME","normal"),t&&t.prng?(Ci(a,"seed",null),Ci(a,"seedLength",null),qir(a,"state",Nir(null),Noe),Ci(a,"stateLength",null),Ci(a,"byteLength",null),Ci(a,"toJSON",Nir(null))):(ko(a,"seed",o),ko(a,"seedLength",v),qir(a,"state",l,p),ko(a,"stateLength",f),ko(a,"byteLength",c),Ci(a,"toJSON",m)),Ci(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Soe(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return Oir(e,u,r)}function g(d,h){return Sir(d)||Sir(h)||h<=0?NaN:Oir(e,d,h)}}Air.exports=Aoe});var Tir=s((VMe,_ir)=>{"use strict";var _oe=zc(),Toe=_oe();_ir.exports=Toe});var Lir=s((UMe,Rir)=>{"use strict";var Ioe=G(),Iir=Tir(),Roe=zc();Ioe(Iir,"factory",Roe);Rir.exports=Iir});var jir=s((GMe,xir)=>{"use strict";var Pir=Ur().isPrimitive,Fir=C();function Loe(r,e){return Pir(r)?Pir(e)?null:new TypeError(Fir("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Fir("invalid argument. First argument must be a positive number. Value: `%s`.",r))}xir.exports=Loe});var Bir=s((DMe,Mir)=>{"use strict";var Poe=Vr();function Foe(r,e,t){return t/Poe(r(),1/e)}Mir.exports=Foe});var Wc=s((HMe,zir)=>{"use strict";var Zt=G(),Vo=qr(),kir=Nr(),Cir=mr(),Vir=yr(),Uir=vr(),Gir=dr(),xoe=Tr(),Uo=Hr().factory,Dir=W(),joe=Sr(),Go=C(),Moe=jir(),Hir=Bir();function Boe(){var r,e,t,i,a,n;if(arguments.length===0)i=Uo();else if(arguments.length===1){if(t=arguments[0],!Cir(t))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Uir(t,"prng")){if(!Vir(t.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Uo(t)}else{if(r=arguments[0],e=arguments[1],n=Moe(r,e),n)throw n;if(arguments.length>2){if(t=arguments[2],!Cir(t))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Uir(t,"prng")){if(!Vir(t.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Uo(t)}else i=Uo()}return r===void 0?a=y:a=m,Zt(a,"NAME","pareto-type1"),t&&t.prng?(Zt(a,"seed",null),Zt(a,"seedLength",null),kir(a,"state",Gir(null),xoe),Zt(a,"stateLength",null),Zt(a,"byteLength",null),Zt(a,"toJSON",Gir(null)),Zt(a,"PRNG",i)):(Vo(a,"seed",u),Vo(a,"seedLength",o),kir(a,"state",c,l),Vo(a,"stateLength",v),Vo(a,"byteLength",f),Zt(a,"toJSON",p),Zt(a,"PRNG",i),i=i.normalized),a;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(g){i.state=g}function p(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=joe(i.state),r===void 0?g.params=[]:g.params=[r,e],g}function m(){return Hir(i,r,e)}function y(g,d){return Dir(g)||Dir(d)||g<=0||d<=0?NaN:Hir(i,g,d)}}zir.exports=Boe});var Xir=s((zMe,Wir)=>{"use strict";var koe=Wc(),Coe=koe();Wir.exports=Coe});var Zir=s((WMe,Yir)=>{"use strict";var Voe=G(),Jir=Xir(),Uoe=Wc();Voe(Jir,"factory",Uoe);Yir.exports=Jir});var Qir=s((XMe,$ir)=>{"use strict";var Goe=Lr(),Doe=br();function Hoe(r,e){return e*Goe(-2*Doe(r()))}$ir.exports=Hoe});var Xc=s((JMe,nar)=>{"use strict";var $t=G(),Do=qr(),Kir=Nr(),zoe=Ur().isPrimitive,rar=mr(),ear=yr(),tar=vr(),iar=dr(),Woe=Tr(),Ho=Hr().factory,Xoe=W(),Joe=Sr(),zo=C(),aar=Qir();function Yoe(){var r,e,t,i;if(arguments.length===0)t=Ho();else if(arguments.length===1&&rar(arguments[0]))if(e=arguments[0],tar(e,"prng")){if(!ear(e.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ho(e);else{if(r=arguments[0],!zoe(r))throw new TypeError(zo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!rar(e))throw new TypeError(zo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(tar(e,"prng")){if(!ear(e.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ho(e)}else t=Ho()}return r===void 0?i=p:i=l,$t(i,"NAME","rayleigh"),e&&e.prng?($t(i,"seed",null),$t(i,"seedLength",null),Kir(i,"state",iar(null),Woe),$t(i,"stateLength",null),$t(i,"byteLength",null),$t(i,"toJSON",iar(null)),$t(i,"PRNG",t)):(Do(i,"seed",a),Do(i,"seedLength",n),Kir(i,"state",v,f),Do(i,"stateLength",u),Do(i,"byteLength",o),$t(i,"toJSON",c),$t(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Joe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return aar(t,r)}function p(m){return Xoe(m)||m<=0?NaN:aar(t,m)}}nar.exports=Yoe});var uar=s((YMe,sar)=>{"use strict";var Zoe=Xc(),$oe=Zoe();sar.exports=$oe});var car=s((ZMe,far)=>{"use strict";var Qoe=G(),oar=uar(),Koe=Xc();Qoe(oar,"factory",Koe);far.exports=oar});var $c=s(($Me,bar)=>{"use strict";var Vi=G(),Wo=qr(),lar=Nr(),yn=vr(),par=Ur().isPrimitive,dar=mr(),Jc=yt(),gar=de().isPrimitive,r1e=W(),mar=yr(),yar=dr(),e1e=Tr(),Xo=q0().factory,hn=Si().factory,Yc=qi(),Zc=me(),har=m0(),t1e=Sr(),lt=C(),qar=Lr();function i1e(){var r,e,t,i,a,n,u,o;if(u=!0,arguments.length===0)a={copy:!1},t=hn(a);else if(arguments.length===1)if(dar(arguments[0])){if(a=arguments[0],yn(a,"copy")&&!gar(a.copy))throw new TypeError(lt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(yn(a,"prng")){if(!mar(a.prng))throw new TypeError(lt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=hn({prng:a.prng})}else{if(yn(a,"state")&&!Jc(a.state))throw new TypeError(lt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=har({},a),a.copy===!1?u=!1:a.state&&(a.state=Yc(a.state.length,a.state,1,new Zc(a.state.length),1)),a.copy=!1,t=hn(a)}}else{if(o=arguments[0],!par(o))throw new TypeError(lt("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));a={copy:!1},t=hn(a)}else{if(o=arguments[0],!par(o))throw new TypeError(lt("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(a=arguments[1],!dar(a))throw new TypeError(lt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(yn(a,"copy")&&!gar(a.copy))throw new TypeError(lt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(yn(a,"prng")){if(!mar(a.prng))throw new TypeError(lt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=hn({prng:a.prng})}else{if(yn(a,"state")&&!Jc(a.state))throw new TypeError(lt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=har({},a),a.copy===!1?u=!1:a.state&&(a.state=Yc(a.state.length,a.state,1,new Zc(a.state.length),1)),a.copy=!1,t=hn(a)}}return a&&a.prng?o===void 0?r=Xo({prng:a.prng}):r=Xo(o,{prng:a.prng}):(a.state?e=a.state:(e=t.state,t.state=e),o===void 0?r=Xo({state:e,copy:!1}):r=Xo(o,{state:e,copy:!1})),o===void 0?n=d:n=g,i=t.PRNG,Vi(n,"NAME","t"),a&&a.prng?(Vi(n,"seed",null),Vi(n,"seedLength",null),lar(n,"state",yar(null),e1e),Vi(n,"stateLength",null),Vi(n,"byteLength",null),Vi(n,"toJSON",yar(null))):(Wo(n,"seed",v),Wo(n,"seedLength",f),lar(n,"state",p,m),Wo(n,"stateLength",c),Wo(n,"byteLength",l),Vi(n,"toJSON",y)),Vi(n,"PRNG",i),n;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!Jc(h))throw new TypeError(lt("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));u&&(h=Yc(h.length,h,1,new Zc(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=n.NAME,h.state=t1e(i.state),o===void 0?h.params=[]:h.params=[o],h}function g(){return t()/qar(r()/o)}function d(h){return r1e(h)||h<=0?NaN:t()/qar(r(h)/h)}}bar.exports=i1e});var Ear=s((QMe,war)=>{"use strict";var a1e=$c(),n1e=a1e();war.exports=n1e});var Oar=s((KMe,Sar)=>{"use strict";var s1e=G(),Nar=Ear(),u1e=$c();s1e(Nar,"factory",u1e);Sar.exports=Nar});var _ar=s((rBe,Aar)=>{"use strict";var Qc=Er().isPrimitive,Jo=C(),Kc=oe();function o1e(r,e,t){return!Qc(r)||Kc(r)?new TypeError(Jo("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Qc(e)||Kc(e)?new TypeError(Jo("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Qc(t)||Kc(t)?new TypeError(Jo("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Jo("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Aar.exports=o1e});var Rar=s((eBe,Iar)=>{"use strict";var Tar=Lr();function v1e(r,e,t,i){var a,n,u;return a=(i-e)/(t-e),u=r(),u<a?(n=(t-e)*(i-e),e+Tar(n*u)):(n=(t-e)*(t-i),t-Tar(n*(1-u)))}Iar.exports=v1e});var el=s((tBe,Bar)=>{"use strict";var Qt=G(),Yo=qr(),Lar=Nr(),Par=mr(),Far=yr(),xar=vr(),jar=dr(),f1e=Tr(),Zo=Hr().factory,rl=W(),c1e=Sr(),$o=C(),l1e=_ar(),Mar=Rar();function p1e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=Zo();else if(arguments.length===1){if(r=arguments[0],!Par(r))throw new TypeError($o("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xar(r,"prng")){if(!Far(r.prng))throw new TypeError($o("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zo(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=l1e(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Par(r))throw new TypeError($o("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xar(r,"prng")){if(!Far(r.prng))throw new TypeError($o("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zo(r)}else e=Zo()}return a===void 0?t=g:t=y,Qt(t,"NAME","triangular"),r&&r.prng?(Qt(t,"seed",null),Qt(t,"seedLength",null),Lar(t,"state",jar(null),f1e),Qt(t,"stateLength",null),Qt(t,"byteLength",null),Qt(t,"toJSON",jar(null)),Qt(t,"PRNG",e)):(Yo(t,"seed",o),Yo(t,"seedLength",v),Lar(t,"state",l,p),Yo(t,"stateLength",f),Yo(t,"byteLength",c),Qt(t,"toJSON",m),Qt(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=c1e(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return Mar(e,a,n,u)}function g(d,h,q){return rl(d)||rl(h)||rl(q)||!(d<=q&&q<=h)?NaN:Mar(e,d,h,q)}}Bar.exports=p1e});var Car=s((iBe,kar)=>{"use strict";var d1e=el(),g1e=d1e();kar.exports=g1e});var Gar=s((aBe,Uar)=>{"use strict";var m1e=G(),Var=Car(),y1e=el();m1e(Var,"factory",y1e);Uar.exports=Var});var War=s((nBe,zar)=>{"use strict";var Dar=Er().isPrimitive,tl=C(),Har=oe();function h1e(r,e){return!Dar(r)||Har(r)?new TypeError(tl("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Dar(e)||Har(e)?new TypeError(tl("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(tl("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}zar.exports=h1e});var Jar=s((sBe,Xar)=>{"use strict";function q1e(r,e,t){var i=r();return t*i+(1-i)*e}Xar.exports=q1e});var il=s((uBe,tnr)=>{"use strict";var Kt=G(),Qo=qr(),Yar=Nr(),Zar=mr(),$ar=yr(),Qar=vr(),Kar=dr(),b1e=Tr(),Ko=Hr().factory,rnr=W(),w1e=Sr(),r1=C(),E1e=War(),enr=Jar();function N1e(){var r,e,t,i,a,n;if(arguments.length===0)e=Ko();else if(arguments.length===1){if(r=arguments[0],!Zar(r))throw new TypeError(r1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Qar(r,"prng")){if(!$ar(r.prng))throw new TypeError(r1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ko(r)}else{if(a=arguments[0],n=arguments[1],i=E1e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Zar(r))throw new TypeError(r1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Qar(r,"prng")){if(!$ar(r.prng))throw new TypeError(r1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ko(r)}else e=Ko()}return a===void 0?t=y:t=m,Kt(t,"NAME","uniform"),r&&r.prng?(Kt(t,"seed",null),Kt(t,"seedLength",null),Yar(t,"state",Kar(null),b1e),Kt(t,"stateLength",null),Kt(t,"byteLength",null),Kt(t,"toJSON",Kar(null)),Kt(t,"PRNG",e)):(Qo(t,"seed",u),Qo(t,"seedLength",o),Yar(t,"state",c,l),Qo(t,"stateLength",v),Qo(t,"byteLength",f),Kt(t,"toJSON",p),Kt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=w1e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return enr(e,a,n)}function y(g,d){return rnr(g)||rnr(d)||g>=d?NaN:enr(e,g,d)}}tnr.exports=N1e});var anr=s((oBe,inr)=>{"use strict";var S1e=il(),O1e=S1e();inr.exports=O1e});var unr=s((vBe,snr)=>{"use strict";var A1e=G(),nnr=anr(),_1e=il();A1e(nnr,"factory",_1e);snr.exports=nnr});var cnr=s((fBe,fnr)=>{"use strict";var onr=Ur().isPrimitive,vnr=C();function T1e(r,e){return onr(r)?onr(e)?null:new TypeError(vnr("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(vnr("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}fnr.exports=T1e});var pnr=s((cBe,lnr)=>{"use strict";var I1e=Vr(),R1e=br();function L1e(r,e,t){return t*I1e(-R1e(1-r()),1/e)}lnr.exports=L1e});var al=s((lBe,wnr)=>{"use strict";var ri=G(),e1=qr(),dnr=Nr(),gnr=mr(),mnr=yr(),ynr=vr(),hnr=dr(),P1e=Tr(),t1=Hr().factory,qnr=W(),F1e=Sr(),i1=C(),x1e=cnr(),bnr=pnr();function j1e(){var r,e,t,i,a,n;if(arguments.length===0)t=t1();else if(arguments.length===1){if(e=arguments[0],!gnr(e))throw new TypeError(i1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ynr(e,"prng")){if(!mnr(e.prng))throw new TypeError(i1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=t1(e)}else{if(n=arguments[0],r=arguments[1],a=x1e(r,n),a)throw a;if(arguments.length>2){if(e=arguments[2],!gnr(e))throw new TypeError(i1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ynr(e,"prng")){if(!mnr(e.prng))throw new TypeError(i1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=t1(e)}else t=t1()}return r===void 0?i=y:i=m,ri(i,"NAME","weibull"),e&&e.prng?(ri(i,"seed",null),ri(i,"seedLength",null),dnr(i,"state",hnr(null),P1e),ri(i,"stateLength",null),ri(i,"byteLength",null),ri(i,"toJSON",hnr(null)),ri(i,"PRNG",t)):(e1(i,"seed",u),e1(i,"seedLength",o),dnr(i,"state",c,l),e1(i,"stateLength",v),e1(i,"byteLength",f),ri(i,"toJSON",p),ri(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=F1e(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return bnr(t,n,r)}function y(g,d){return qnr(g)||qnr(d)||g<=0||d<=0?NaN:bnr(t,g,d)}}wnr.exports=j1e});var Nnr=s((pBe,Enr)=>{"use strict";var M1e=al(),B1e=M1e();Enr.exports=B1e});var Anr=s((dBe,Onr)=>{"use strict";var k1e=G(),Snr=Nnr(),C1e=al();k1e(Snr,"factory",C1e);Onr.exports=Snr});var Tnr=s((gBe,_nr)=>{"use strict";var V1e=qe(),U1e=ye().isPrimitive,G1e=C(),D1e=j0();function H1e(r){if(U1e(r))return r;if(V1e(r))return D1e(r);throw new TypeError(G1e("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}_nr.exports=H1e});var Rnr=s((mBe,Inr)=>{"use strict";var z1e=Tnr();Inr.exports=z1e});var Pnr=s((yBe,Lnr)=>{"use strict";var Or=$r(),W1e=Gz().factory,X1e=Kz().factory,J1e=wX().factory,Y1e=sJ().factory,Z1e=UJ().factory,$1e=tY().factory,Q1e=FY().factory,K1e=eZ().factory,r2e=q0().factory,e2e=YZ().factory,t2e=g$().factory,i2e=F$().factory,a2e=X$().factory,n2e=lQ().factory,s2e=IQ().factory,u2e=en().factory,o2e=HQ().factory,v2e=vK().factory,f2e=FK().factory,c2e=Si().factory,l2e=YK().factory,p2e=grr().factory,d2e=Frr().factory,g2e=her().factory,m2e=Mer().factory,y2e=rtr().factory,h2e=ctr().factory,q2e=Otr().factory,b2e=Hr().factory,w2e=pir().factory,E2e=Lir().factory,N2e=Zir().factory,S2e=Cc().factory,O2e=car().factory,A2e=Oar().factory,_2e=Gar().factory,T2e=unr().factory,I2e=Anr().factory,R2e=Rnr();function L2e(r){return Or(r,"arcsine",W1e),Or(r,"bernoulli",X1e),Or(r,"beta",J1e),Or(r,"betaprime",Y1e),Or(r,"binomial",Z1e),Or(r,"boxMuller",$1e),Or(r,"cauchy",Q1e),Or(r,"chi",K1e),Or(r,"chisquare",r2e),Or(r,"cosine",e2e),Or(r,"discreteUniform",t2e),Or(r,"erlang",i2e),Or(r,"exponential",a2e),Or(r,"f",n2e),Or(r,"frechet",s2e),Or(r,"gamma",u2e),Or(r,"geometric",o2e),Or(r,"gumbel",v2e),Or(r,"hypergeometric",f2e),Or(r,"improvedZiggurat",c2e),Or(r,"invgamma",l2e),Or(r,"kumaraswamy",p2e),Or(r,"laplace",d2e),Or(r,"levy",g2e),Or(r,"logistic",m2e),Or(r,"lognormal",y2e),Or(r,"minstd",h2e),Or(r,"minstdShuffle",q2e),Or(r,"mt19937",b2e),Or(r,"negativeBinomial",w2e),Or(r,"normal",E2e),Or(r,"pareto1",N2e),Or(r,"poisson",S2e),Or(r,"rayleigh",O2e),Or(r,"t",A2e),Or(r,"triangular",_2e),Or(r,"uniform",T2e),Or(r,"weibull",I2e),r.base={},Or(r.base,"normalizeSeed",R2e),r}Lnr.exports=L2e});var xnr=s((hBe,Fnr)=>{"use strict";var P2e=mr(),a1=vr(),F2e=ye().isPrimitive,x2e=at().isPrimitive,j2e=be().isPrimitive,M2e=as().isPrimitive,S0=C();function B2e(r,e){return P2e(e)?a1(e,"period")&&(r.period=e.period,!x2e(e.period))?new TypeError(S0("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):a1(e,"amplitude")&&(r.amplitude=e.amplitude,!M2e(e.amplitude))?new TypeError(S0("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):a1(e,"offset")&&(r.offset=e.offset,!F2e(e.offset))?new TypeError(S0("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):a1(e,"iter")&&(r.iter=e.iter,!j2e(e.iter))?new TypeError(S0("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(S0("invalid argument. Options argument must be an object. Value: `%s`.",e))}Fnr.exports=B2e});var knr=s((qBe,Bnr)=>{"use strict";var nl=G(),jnr=An(),k2e=J3(),C2e=Fs(),V2e=Ps(),U2e=Ue(),G2e=xnr();function Mnr(r){var e,t,i,a,n,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(a=G2e(e,r),a))throw a;return n=(e.period-e.offset)%e.period,n<0&&(n+=e.period),n-=1,u=U2e/e.period,o=e.amplitude/V2e,v=0,t={},nl(t,"next",f),nl(t,"return",c),jnr&&nl(t,jnr,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(n+=1,n%=e.period,{value:o*C2e(k2e(u*n)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return Mnr(e)}}Bnr.exports=Mnr});var Vnr=s((bBe,Cnr)=>{"use strict";var D2e=knr();Cnr.exports=D2e});var Gnr=s((wBe,Unr)=>{"use strict";var H2e=$r(),z2e=Vnr();function W2e(r){return H2e(r,"iterSawtoothWave",z2e),r}Unr.exports=W2e});var Hnr=s((EBe,Dnr)=>{"use strict";var X2e=17976931348623157e292;Dnr.exports=X2e});var n1=s((NBe,znr)=>{"use strict";var J2e=709.782712893384;znr.exports=J2e});var Xnr=s((SBe,Wnr)=>{"use strict";var Y2e=ae();function Z2e(r,e){var t,i,a,n;if(a=Y2e(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}Wnr.exports=Z2e});var Ynr=s((OBe,Jnr)=>{"use strict";function $2e(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Jnr.exports=$2e});var $nr=s((ABe,Znr)=>{"use strict";function Q2e(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Znr.exports=Q2e});var Knr=s((_Be,Qnr)=>{"use strict";function K2e(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Qnr.exports=K2e});var e0r=s((TBe,r0r)=>{"use strict";function rve(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}r0r.exports=rve});var i0r=s((IBe,t0r)=>{"use strict";function eve(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}t0r.exports=eve});var n0r=s((RBe,a0r)=>{"use strict";function tve(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}a0r.exports=tve});var u0r=s((LBe,s0r)=>{"use strict";function ive(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}s0r.exports=ive});var v0r=s((PBe,o0r)=>{"use strict";function ave(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}o0r.exports=ave});var p0r=s((FBe,l0r)=>{"use strict";var nve=W(),f0r=ae(),sve=qt(),uve=hr(),ove=Ir(),vve=Ynr(),fve=$nr(),cve=Knr(),lve=e0r(),pve=i0r(),dve=n0r(),gve=u0r(),mve=v0r(),s1=1e-300,yve=13877787807814457e-33,c0r=.8450629115104675,hve=.12837916709551256,qve=1,bve=-.0023621185607526594,wve=1,Eve=-.009864944034847148,Nve=1,Sve=-.0098649429247001,Ove=1;function Ave(r){var e,t,i,a,n,u,o,v;if(nve(r))return NaN;if(r===uve)return 0;if(r===ove)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<yve?1-r:(i=r*r,a=hve+i*vve(i),n=qve+i*fve(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=bve+n*cve(n),v=wve+n*lve(n),e?1+c0r+o/v:1-c0r-o/v;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=Eve+n*pve(n),n=Nve+n*dve(n);else{if(r<-6)return 2-s1;a=Sve+n*gve(n),n=Ove+n*mve(n)}return i=sve(t,0),a=f0r(-(i*i)-.5625)*f0r((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-s1:s1*s1}l0r.exports=Ave});var va=s((xBe,d0r)=>{"use strict";var _ve=p0r();d0r.exports=_ve});var y0r=s((jBe,m0r)=>{"use strict";var Tve=va(),g0r=Lr(),Ive=ae(),Rve=Ue();function Lve(r,e){var t,i,a,n,u;if(n=Tve(g0r(e)),n!==0&&r>1){for(i=Ive(-e)/g0r(Rve*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}m0r.exports=Lve});var sl=s((MBe,h0r)=>{"use strict";var Pve=-708.3964185322641;h0r.exports=Pve});var E0r=s((BBe,w0r)=>{"use strict";var qn=ae(),u1=Vr(),Fve=br(),q0r=n1(),b0r=sl();function xve(r,e){var t,i;return i=r*Fve(e),e>=1?i<q0r&&-e>b0r?t=u1(e,r)*qn(-e):r>=1?t=u1(e/qn(e/r),r):t=qn(i-e):i>b0r?t=u1(e,r)*qn(-e):e/r<q0r?t=u1(e/qn(e/r),r):t=qn(i-e),t}w0r.exports=xve});var ul=s((kBe,N0r)=>{"use strict";function jve(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}N0r.exports=jve});var O0r=s((CBe,S0r)=>{"use strict";var Mve=Function;S0r.exports=Mve});var _0r=s((VBe,A0r)=>{"use strict";var Bve=O0r();A0r.exports=Bve});var I0r=s((UBe,T0r)=>{"use strict";var kve=_0r(),Cve=ul();function Vve(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new kve(e)();function n(u){return Cve(r,u)}}T0r.exports=Vve});var P0r=s((GBe,L0r)=>{"use strict";var Uve=G(),R0r=ul(),Gve=I0r();Uve(R0r,"factory",Gve);L0r.exports=R0r});var fa=s((DBe,F0r)=>{"use strict";var Dve=2220446049250313e-31;F0r.exports=Dve});var j0r=s((HBe,x0r)=>{"use strict";var Hve=eval;x0r.exports=Hve});var B0r=s((zBe,M0r)=>{"use strict";var zve=j0r();function Wve(){var r;try{zve('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}M0r.exports=Wve});var ol=s((WBe,k0r)=>{"use strict";var Xve=B0r();k0r.exports=Xve});var V0r=s((XBe,C0r)=>{"use strict";var o1=Wr(),Jve=fa(),Yve=1e6;function Zve(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Jve,n=o.maxTerms||Yve,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,o1(i*u)>=o1(a)||--n===0)break}else do a=r(),u+=a;while(o1(i*u)<o1(a)&&--n);return u}C0r.exports=Zve});var D0r=s((JBe,G0r)=>{"use strict";var U0r=Wr(),$ve=fa(),Qve=1e6;function Kve(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||$ve,a=u.maxTerms||Qve,n=u.initialValue||0;do i=r(),n+=i;while(U0r(t*n)<U0r(i)&&--a);return n}G0r.exports=Kve});var v1=s((YBe,H0r)=>{"use strict";var rfe=ol(),efe=V0r(),tfe=D0r(),vl;rfe()?vl=efe:vl=tfe;H0r.exports=vl});var W0r=s((ZBe,z0r)=>{"use strict";function ife(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}z0r.exports=ife});var J0r=s(($Be,X0r)=>{"use strict";var afe=Wr(),nfe=br(),sfe=fa(),ufe=v1(),ofe=W0r();function vfe(r){var e,t;return r<=-1?NaN:(t=afe(r),t>.95?nfe(1+r)-r:t<sfe?-r*r/2:(e={initialValue:-r},ufe(ofe(r),e)))}X0r.exports=vfe});var Z0r=s((QBe,Y0r)=>{"use strict";var ffe=J0r();Y0r.exports=ffe});var Q0r=s((KBe,$0r)=>{"use strict";function cfe(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}$0r.exports=cfe});var rsr=s((rke,K0r)=>{"use strict";function lfe(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}K0r.exports=lfe});var tsr=s((eke,esr)=>{"use strict";function pfe(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}esr.exports=pfe});var asr=s((tke,isr)=>{"use strict";function dfe(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}isr.exports=dfe});var ssr=s((ike,nsr)=>{"use strict";function gfe(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}nsr.exports=gfe});var osr=s((ake,usr)=>{"use strict";function mfe(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}usr.exports=mfe});var fsr=s((nke,vsr)=>{"use strict";function yfe(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}vsr.exports=yfe});var lsr=s((ske,csr)=>{"use strict";function hfe(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}csr.exports=hfe});var dsr=s((uke,psr)=>{"use strict";function qfe(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}psr.exports=qfe});var msr=s((oke,gsr)=>{"use strict";var bfe=P0r(),wfe=Z0r(),Efe=va(),fl=Lr(),Nfe=ae(),Sfe=pi(),Ofe=Q0r(),Afe=rsr(),_fe=tsr(),Tfe=asr(),Ife=ssr(),Rfe=osr(),Lfe=fsr(),Pfe=lsr(),Ffe=dsr(),Qe=[0,0,0,0,0,0,0,0,0,0];function xfe(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-wfe(i),n=r*a,u=fl(2*a),e<r&&(u=-u),Qe[0]=Ofe(u),Qe[1]=Afe(u),Qe[2]=_fe(u),Qe[3]=Tfe(u),Qe[4]=Ife(u),Qe[5]=Rfe(u),Qe[6]=Lfe(u),Qe[7]=Pfe(u),Qe[8]=Ffe(u),Qe[9]=-.0005967612901927463,t=bfe(Qe,1/r),t*=Nfe(-n)/fl(Sfe*r),e<r&&(t=-t),t+=Efe(fl(n))/2,t}gsr.exports=xfe});var hsr=s((vke,ysr)=>{"use strict";function jfe(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}ysr.exports=jfe});var bsr=s((fke,qsr)=>{"use strict";var Mfe=v1(),Bfe=hsr();function kfe(r,e,t){var i,a;return t=t||0,a=Bfe(r,e),i=Mfe(a,{initialValue:t}),i}qsr.exports=kfe});var Esr=s((cke,wsr)=>{"use strict";function Cfe(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}wsr.exports=Cfe});var Ssr=s((lke,Nsr)=>{"use strict";var Vfe=Esr();Nsr.exports=Vfe});var Asr=s((pke,Osr)=>{"use strict";var Ufe=Ssr();Osr.exports=Ufe});var Isr=s((dke,Tsr)=>{"use strict";var Gfe=Sf(),_sr=W(),cl=Ir();function Dfe(r,e){return _sr(r)||_sr(e)?NaN:r===cl||e===cl?cl:r===e&&r===0?Gfe(r)?r:e:r<e?r:e}Tsr.exports=Dfe});var Lsr=s((gke,Rsr)=>{"use strict";var Hfe=Isr();Rsr.exports=Hfe});var Fsr=s((mke,Psr)=>{"use strict";var zfe=10.900511;Psr.exports=zfe});var ll=s((yke,xsr)=>{"use strict";var Wfe=2.718281828459045;xsr.exports=Wfe});var Bsr=s((hke,Msr)=>{"use strict";var Xfe=Asr(),Jfe=i0(),Yfe=Xa(),Zfe=ci(),$fe=Lr(),Qfe=Wr(),Ui=ae(),O0=Vr(),pl=f3(),dl=Lsr(),jsr=br(),f1=n1(),A0=sl(),gl=Fsr(),Kfe=ll();function r3e(r,e){var t,i,a,n,u,o,v;return a=r+gl-.5,v=(e-r-gl+.5)/a,r<1?e<=A0?Ui(r*jsr(e)-e-Jfe(r)):O0(e,r)*Ui(-e)/Yfe(r):(Qfe(v*v*r)<=100&&r>150?(t=r*(Zfe(v)-v)+e*(.5-gl)/a,t=Ui(t)):(n=r*jsr(e/a),u=r-e,dl(n,u)<=A0||pl(n,u)>=f1?(i=u/r,dl(n,u)/2>A0&&pl(n,u)/2<f1?(o=O0(e/a,r/2)*Ui(u/2),t=o*o):dl(n,u)/4>A0&&pl(n,u)/4<f1&&e>r?(o=O0(e/a,r/4)*Ui(u/4),t=o*o,t*=t):i>A0&&i<f1?t=O0(e*Ui(i)/a,r):t=Ui(n+u)):t=O0(e/a,r)*Ui(u)),t*=$fe(a/Kfe)/Xfe(r),t)}Msr.exports=r3e});var Csr=s((qke,ksr)=>{"use strict";var e3e=.34657359027997264;ksr.exports=e3e});var Usr=s((bke,Vsr)=>{"use strict";function t3e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}Vsr.exports=t3e});var Xsr=s((wke,Wsr)=>{"use strict";var i3e=W(),Gsr=ie(),ml=bt(),a3e=Da(),Dsr=hr(),n3e=Ir(),Hsr=vt(),s3e=Csr(),u3e=Usr(),o3e=709.782712893384,yl=.6931471803691238,hl=19082149292705877e-26,zsr=1.4426950408889634,v3e=38.816242111356935,f3e=1.0397207708399179;function c3e(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(r===Dsr||i3e(r))return r;if(r===n3e)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=v3e){if(i)return-1;if(v>=o3e)return Dsr}if(u=Gsr(v)|0,v>s3e)v<f3e?i?(a=r+yl,n=-hl,m=-1):(a=r-yl,n=hl,m=1):(i?m=zsr*r-.5:m=zsr*r+.5,m|=0,l=m,a=r-l*yl,n=l*hl),r=a-n,c=a-r-n;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*u3e(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=a3e(Hsr+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(a=Gsr(v)+(m<<20)|0,v=ml(v,a)):v*=t,v-1):(l=1,m<20?(a=1072693248-(2097152>>m)|0,l=ml(l,a),v=l-(p-r)):(a=Hsr-m<<20|0,l=ml(l,a),v=r-(p+l),v+=1),v*=t,v))}Wsr.exports=c3e});var ql=s((Eke,Jsr)=>{"use strict";var l3e=Xsr();Jsr.exports=l3e});var Qsr=s((Nke,$sr)=>{"use strict";var Ysr=W(),Zsr=Wr(),p3e=ql(),d3e=br(),g3e=Vr(),m3e=Ds();function y3e(r,e){var t;if(Ysr(r)||Ysr(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Zsr(e*(r-1))<.5||Zsr(e)<.2)&&(t=d3e(r)*e,t<.5))return p3e(t)}else if(m3e(e)!==e)return NaN;return g3e(r,e)-1}$sr.exports=y3e});var rur=s((Ske,Ksr)=>{"use strict";var h3e=Qsr();Ksr.exports=h3e});var tur=s((Oke,eur)=>{"use strict";function q3e(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}eur.exports=q3e});var aur=s((Ake,iur)=>{"use strict";function b3e(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}iur.exports=b3e});var sur=s((_ke,nur)=>{"use strict";function w3e(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}nur.exports=w3e});var our=s((Tke,uur)=>{"use strict";var bl=br(),E3e=fa(),N3e=tur(),S3e=aur(),O3e=sur(),A3e=.15896368026733398,_3e=.5281534194946289,T3e=.45201730728149414;function I3e(r,e,t){var i,a,n,u;if(r<E3e)return-bl(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=bl(r);while(r>=3);t=r-2}return n=t*(r+1),u=N3e(t),a+=n*A3e+n*u,a}return r<1&&(a+=-bl(r),t=e,e=r,r+=1),r<=1.5?(n=S3e(e),i=e*t,a+=i*_3e+i*n,a):(n=t*e,u=O3e(-t),a+=n*T3e+n*u,a)}uur.exports=I3e});var pur=s((Ike,lur)=>{"use strict";var vur=Xa(),fur=ql(),R3e=ci(),L3e=W(),cur=our();function P3e(r){return L3e(r)?NaN:r<0?r<-.5?vur(1+r)-1:fur(-R3e(r)+cur(r+2,r+1,r)):r<2?fur(cur(r+1,r,r-1)):vur(1+r)-1}lur.exports=P3e});var gur=s((Rke,dur)=>{"use strict";var F3e=pur();dur.exports=F3e});var yur=s((Lke,mur)=>{"use strict";function x3e(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}mur.exports=x3e});var qur=s((Pke,hur)=>{"use strict";var j3e=rur(),M3e=v1(),B3e=gur(),k3e=yur();function C3e(r,e,t){var i,a,n,u,o;return a=B3e(r),n=(a+1)/r,u=j3e(e,r),a-=u,a/=r,o=k3e(r,e),u+=1,i=t?n:0,a=-u*M3e(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}hur.exports=C3e});var wl=s((Fke,bur)=>{"use strict";var V3e=11754943508222875e-54;bur.exports=V3e});var Eur=s((xke,wur)=>{"use strict";var c1=Wr(),pt=wl(),U3e=fa(),G3e=1e6;function D3e(r,e,t){var i,a,n,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],n=f[0],u===0&&(u=pt),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=pt),o=f[1]+f[0]/o,o===0&&(o=pt),v=1/v,a=o*v,u*=a);while(c1(a-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=pt),o=f[1]+f[0]/o,o===0&&(o=pt),v=1/v,a=o*v,u*=a);while(f&&c1(a-1)>e&&--t);return n/u}function H3e(r,e,t){var i,a,n,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),n=v[1],n===0&&(n=pt),u=n,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=pt),u=v[1]+v[0]/u,u===0&&(u=pt),o=1/o,a=u*o,n*=a);while(v&&c1(a-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=pt),u=v[1]+v[0]/u,u===0&&(u=pt),o=1/o,a=u*o,n*=a);while(v&&c1(a-1)>e&&--t);return n}function z3e(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||G3e,a=i.tolerance||U3e,i.keep?H3e(r,a,t):D3e(r,a,t)}wur.exports=z3e});var Our=s((jke,Sur)=>{"use strict";var Nur=Wr(),W3e=fa(),bn=wl(),X3e=1e6;function J3e(r,e,t){var i,a,n,u,o,v;v=r(),o=v[1],a=v[0],o===0&&(o=bn),n=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=bn),n=v[1]+v[0]/n,n===0&&(n=bn),u=1/u,i=n*u,o*=i);while(v&&Nur(i-1)>e&&--t);return a/o}function Y3e(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=bn),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=bn),a=o[1]+o[0]/a,a===0&&(a=bn),n=1/n,i=a*n,u*=i);while(o&&Nur(i-1)>e&&--t);return u}function Z3e(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||W3e,t=i.maxIter||X3e,i.keep?Y3e(r,a,t):J3e(r,a,t)}Sur.exports=Z3e});var _ur=s((Mke,Aur)=>{"use strict";var $3e=ol(),Q3e=Eur(),K3e=Our(),El;$3e()?El=Q3e:El=K3e;Aur.exports=El});var Iur=s((Bke,Tur)=>{"use strict";function rce(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}Tur.exports=rce});var Lur=s((kke,Rur)=>{"use strict";var ece=_ur(),tce=Iur();function ice(r,e){var t=tce(r,e);return 1/(e-r+1+ece(t))}Rur.exports=ice});var Uur=s((Cke,Vur)=>{"use strict";var ace=i0(),nce=Gr(),_0=Xa(),Pur=Wr(),sce=ae(),Fur=Vr(),Ke=br(),uce=Tf(),xur=Hnr(),oce=Of(),jur=n1(),vce=hr(),fce=Xnr(),cce=y0r(),Mur=E0r(),lce=msr(),Nl=bsr(),Bur=Bsr(),pce=qur(),kur=Lur(),dce=170;function Cur(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(r<0||e<=0)return NaN;if(n=t===void 0?!0:t,l=i,p=0,e>=dce&&!n)return l&&e*4<r?(p=e*Ke(r)-r,p+=Ke(kur(e,r))):!l&&e>4*r?(p=e*Ke(r)-r,o=0,p+=Ke(Nl(e,r,o)/e)):(p=Cur(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Ke(p)-e+(e-.5)*Ke(e),p+=Ke(oce)):(p=e*Ke(r)-r,o=0,p+=Ke(Nl(e,r,o)/e)):p=Ke(p)+ace(e)),p>jur?vce:sce(p);switch(c=e<30&&e<=r+1&&r<jur,c?(h=nce(e),m=h===e,v=m?!1:Pur(h-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<uce&&e>1?u=6:r<.5?-.4/Ke(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,n&&e>20&&(y=Pur((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=fce(e,r),n===!1&&(p*=_0(e));break;case 1:p=cce(e,r),n===!1&&(p*=_0(e));break;case 2:p=n?Bur(e,r):Mur(e,r),p!==0&&(o=0,a=!1,l&&(o=n?1:_0(e),n||p>=1||xur*p>o?(o/=p,n||e<1||xur/e>o?(o*=-e,a=!0):o=0):o=0)),p*=Nl(e,r,o)/e,a&&(l=!1,p=-p);break;case 3:l=!l,d=pce(e,r,l),p=d[0],q=d[1],l=!1,n&&(p/=q);break;case 4:p=n?Bur(e,r):Mur(e,r),p!==0&&(p*=kur(e,r));break;case 5:p=lce(e,r),r>=e&&(l=!l);break;case 6:p=n?Fur(r,e)/_0(e+1):Fur(r,e)/e,p*=1-e*r/(e+1);break}return n&&p>1&&(p=1),l&&(g=n?1:_0(e),p=g-p),p}Vur.exports=Cur});var Sl=s((Vke,Gur)=>{"use strict";var gce=Uur();Gur.exports=gce});var Hur=s((Uke,Dur)=>{"use strict";var mce=Sl(),Ol=W(),yce=hr();function hce(r,e,t){return Ol(r)||Ol(e)||Ol(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===yce?1:mce(r*t,e)}Dur.exports=hce});var Xur=s((Gke,Wur)=>{"use strict";var qce=dr(),bce=ju().factory,wce=Sl(),zur=W(),Ece=hr();function Nce(r,e){if(zur(r)||zur(e)||r<0||e<=0)return qce(NaN);if(r===0)return bce(0);return t;function t(i){return i<=0?0:i===Ece?1:wce(i*e,r)}}Wur.exports=Nce});var Al=s((Dke,Yur)=>{"use strict";var Sce=G(),Jur=Hur(),Oce=Xur();Sce(Jur,"factory",Oce);Yur.exports=Jur});var $ur=s((Hke,Zur)=>{"use strict";var Ace=Al();function _ce(r,e){return Ace(r,e/2,.5)}Zur.exports=_ce});var Kur=s((zke,Qur)=>{"use strict";var Tce=Al().factory;function Ice(r){return Tce(r/2,.5)}Qur.exports=Ice});var tor=s((Wke,eor)=>{"use strict";var Rce=G(),ror=$ur(),Lce=Kur();Rce(ror,"factory",Lce);eor.exports=ror});var sor=s((Xke,nor)=>{"use strict";var Pce=mr(),Fce=vr(),xce=ns(),ior=C(),aor=["values","indices","*"];function jce(r,e){return Pce(e)?Fce(e,"returns")&&(r.returns=e.returns,xce(aor,r.returns)===-1)?new TypeError(ior('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",aor.join('", "'),r.returns)):null:new TypeError(ior("invalid argument. Options argument must be an object. Value: `%s`.",e))}nor.exports=jce});var oor=s((Jke,uor)=>{"use strict";var Mce=vr();function Bce(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),Mce(t,a)?t[a].push(r[n]):t[a]=[r[n]];return t}uor.exports=Bce});var cor=s((Yke,vor)=>{"use strict";var kce=vr();function Cce(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),kce(t,a)?t[a].push(n):t[a]=[n];return t}vor.exports=Cce});var por=s((Zke,lor)=>{"use strict";var Vce=vr();function Uce(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),Vce(t,a)?t[a].push([n,r[n]]):t[a]=[[n,r[n]]];return t}lor.exports=Uce});var yor=s(($ke,mor)=>{"use strict";var dor=Be(),gor=C(),Gce=sor(),Dce=oor(),Hce=cor(),zce=por();function Wce(r,e,t){var i,a,n;if(!dor(r))throw new TypeError(gor("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)n=e;else{if(a=Gce(i,e),a)throw a;n=t}if(!dor(n))throw new TypeError(gor("invalid argument. Last argument must be a collection. Value: `%s`.",n));if(r.length!==n.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Dce(r,n):i.returns==="indices"?Hce(r,n):zce(r,n)}mor.exports=Wce});var qor=s((Qke,hor)=>{"use strict";var Xce=yor();hor.exports=Xce});var wor=s((Kke,bor)=>{"use strict";function Jce(r){var e,t,i,a,n,u;for(e=0,t=0,a=0,i=r.length,n=0;n<i;n++)u=r[n],e=u-t,t+=e/(n+1),a+=e*(u-t);return a/(n-1)}bor.exports=Jce});var Sor=s((rCe,Nor)=>{"use strict";var Yce=qe(),Zce=Er().isPrimitive,$ce=mr(),Qce=oe(),Eor=vr(),_l=C();function Kce(r,e){return $ce(e)?Eor(e,"alpha")&&(r.alpha=e.alpha,!Zce(r.alpha)||Qce(r.alpha))?new TypeError(_l("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Eor(e,"groups")&&(r.groups=e.groups,!Yce(r.groups))?new TypeError(_l("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(_l("invalid argument. Options argument must be an object. Value: `%s`.",e))}Nor.exports=Kce});var Lor=s((eCe,Ror)=>{"use strict";var Oor=W(),l1=Ve(),Aor=Vr(),rle=Wr(),_or=of(),ele=Ha(),Tor=Es(),tle=Dv(),ile=Ns(),ale=ele+1,Ior=1e308;function nle(r,e){var t,i;return Oor(r)||Oor(e)||l1(e)?NaN:l1(r)||r===0||e<ile||rle(r)>ale&&e<=0?r:e>Tor?0*r:e<tle?(t=Aor(10,-(e+Tor)),i=r*Ior*t,l1(i)?r:_or(i)/Ior/t):(t=Aor(10,-e),i=r*t,l1(i)?r:_or(i)/t)}Ror.exports=nle});var For=s((tCe,Por)=>{"use strict";var sle=Lor();Por.exports=sle});var Mor=s((iCe,jor)=>{"use strict";var ule=at(),ole=mr(),vle=de().isPrimitive,xor=vr(),Tl=C(),Il=For();function fle(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!ole(r))throw new TypeError(Tl("invalid argument. First argument must be an object. Value: `%s`.",r));if(xor(r,"digits")){if(!ule(r.digits))throw new TypeError(Tl("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(xor(r,"decision")){if(!vle(r.decision))throw new TypeError(Tl("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Il(this.pValue,-t)+`
`,i+="    statistic: "+Il(this.statistic,-t)+`
`,i+="    df: "+Il(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}jor.exports=fle});var Cor=s((aCe,kor)=>{"use strict";var cle=Be(),lle=mr(),ca=$r(),ple=Ba(),p1=C(),dle=tor(),gle=qor(),Bor=br(),mle=wor(),yle=Sor(),hle=Mor();function qle(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;if(v=[],e=arguments.length,f={},lle(arguments[e-1])&&(r=arguments[e-1],e-=1,m=yle(f,r),m))throw m;if(f.groups){if(a=gle(arguments[0],f.groups),i=ple(a),e=i.length,e<2)throw new Error(p1("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(w=0;w<e;w++)v.push(a[i[w]])}else for(w=0;w<e;w++)v.push(arguments[w]);for(u=0,t=0,o=0,y=0,h=new Array(e),q=h.slice(),w=0;w<e;w++){if(p=v[w],!cle(p))throw new TypeError(p1("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(p1("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[w]=p.length-1,u+=h[w],t+=1/h[w],q[w]=mle(p),o+=h[w]*q[w],y+=h[w]*Bor(q[w])}if(o/=u,f.alpha===void 0?n=.05:n=f.alpha,n<0||n>1)throw new RangeError(p1("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));return l=u*Bor(o)-y,l/=1+(t-1/u)/(3*(e-1)),d=e-1,c=1-dle(l,d),g={},ca(g,"rejected",c<=n),ca(g,"alpha",n),ca(g,"pValue",c),ca(g,"statistic",l),ca(g,"df",d),ca(g,"method","Bartlett's test of equal variances"),ca(g,"print",hle),g}kor.exports=qle});var Uor=s((nCe,Vor)=>{"use strict";var ble=Cor();Vor.exports=ble});var Dor=s((sCe,Gor)=>{"use strict";var Rl=W(),wle=hi();function Ele(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,n=e[u],i[o]=n,o+=a,f=1,Rl(n)===!1)for(f;f<r;f++){if(u+=t,v=e[u],Rl(v)){n=v;break}(v>n||v===n&&wle(v))&&(n=v),i[o]=n,o+=a}if(Rl(n))for(f;f<r;f++)i[o]=n,o+=a;return i}Gor.exports=Ele});var zor=s((uCe,Hor)=>{"use strict";var Ll=W(),Nle=hi();function Sle(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return a;if(v=i,f=u,o=e[v],a[f]=o,f+=n,l=1,Ll(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],Ll(c)){o=c;break}(c>o||c===o&&Nle(c))&&(o=c),a[f]=o,f+=n}if(Ll(o))for(l;l<r;l++)a[f]=o,f+=n;return a}Hor.exports=Sle});var Jor=s((oCe,Xor)=>{"use strict";var Ole=G(),Wor=Dor(),Ale=zor();Ole(Wor,"ndarray",Ale);Xor.exports=Wor});var Zor=s((vCe,Yor)=>{"use strict";var _le=Jor();Yor.exports=_le});var Qor=s((fCe,$or)=>{"use strict";var Tle=W(),Ile=hi();function Rle(r,e,t){var i,a,n,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?a=(1-r)*t:a=0,i=e[a],u=1;u<r;u++){if(a+=t,n=e[a],Tle(n))return n;(n>i||n===i&&Ile(n))&&(i=n)}return i}$or.exports=Rle});var r1r=s((cCe,Kor)=>{"use strict";var Lle=W(),Ple=hi();function Fle(r,e,t,i){var a,n,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(n=i,a=e[n],o=1;o<r;o++){if(n+=t,u=e[n],Lle(u))return u;(u>a||u===a&&Ple(u))&&(a=u)}return a}Kor.exports=Fle});var i1r=s((lCe,t1r)=>{"use strict";var xle=G(),e1r=Qor(),jle=r1r();xle(e1r,"ndarray",jle);t1r.exports=e1r});var n1r=s((pCe,a1r)=>{"use strict";var Mle=i1r();a1r.exports=Mle});var o1r=s((dCe,u1r)=>{"use strict";var s1r=W(),Ble=hi();function kle(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=a;if(f===r)return NaN;if(n=e[u],s1r(n))return n;for(f+=1,f;f<r;f++)if(u+=t,o+=a,!i[o]){if(v=e[u],s1r(v))return v;(v>n||v===n&&Ble(v))&&(n=v)}return n}u1r.exports=kle});var c1r=s((gCe,f1r)=>{"use strict";var v1r=W(),Cle=hi();function Vle(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&a[f]!==0;l++)v+=t,f+=n;if(l===r)return NaN;if(o=e[v],v1r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=n,!a[f]){if(c=e[v],v1r(c))return c;(c>o||c===o&&Cle(c))&&(o=c)}return o}f1r.exports=Vle});var d1r=s((mCe,p1r)=>{"use strict";var Ule=G(),l1r=o1r(),Gle=c1r();Ule(l1r,"ndarray",Gle);p1r.exports=l1r});var m1r=s((yCe,g1r)=>{"use strict";var Dle=va(),Hle=Lr(),Pl=W();function zle(r,e,t){var i,a;return Pl(r)||Pl(e)||Pl(t)||t<0?NaN:t===0?r<e?0:1:(i=t*Hle(2),a=r-e,.5*Dle(-a/i))}g1r.exports=zle});var h1r=s((hCe,y1r)=>{"use strict";var Wle=dr(),Xle=ju().factory,Fl=W(),Jle=Lr(),Yle=va();function Zle(r,e){var t;if(Fl(r)||Fl(e)||e<0)return Wle(NaN);if(e===0)return Xle(r);return t=e*Jle(2),i;function i(a){var n;return Fl(a)?NaN:(n=a-r,.5*Yle(-n/t))}}y1r.exports=Zle});var w1r=s((qCe,b1r)=>{"use strict";var $le=G(),q1r=m1r(),Qle=h1r();$le(q1r,"factory",Qle);b1r.exports=q1r});var S1r=s((bCe,N1r)=>{"use strict";var E1r=W(),Kle=br(),r6e=pi(),e6e=ll();function t6e(r,e){return E1r(r)||E1r(e)||e<=0?NaN:.5*Kle(r6e*e6e*e*e)}N1r.exports=t6e});var A1r=s((wCe,O1r)=>{"use strict";var i6e=S1r();O1r.exports=i6e});var I1r=s((ECe,T1r)=>{"use strict";var _1r=W();function a6e(r,e){return _1r(r)||_1r(e)||e<=0?NaN:0}T1r.exports=a6e});var L1r=s((NCe,R1r)=>{"use strict";var n6e=I1r();R1r.exports=n6e});var F1r=s((SCe,P1r)=>{"use strict";var s6e=Gr(),u6e=[o6e,v6e,f6e,c6e,l6e,p6e,d6e,g6e,m6e,y6e,h6e,q6e,b6e,w6e,E6e,N6e,S6e,O6e,A6e,_6e,T6e,I6e,R6e,L6e,P6e,F6e,x6e,j6e,M6e,B6e,k6e,C6e,V6e,U6e,G6e,D6e,H6e,z6e,W6e,X6e,J6e,Y6e,Z6e,$6e,Q6e,K6e,r4e,e4e,t4e,i4e,a4e,n4e,s4e,u4e,o4e,v4e,f4e,c4e,l4e,p4e,d4e,g4e,m4e,y4e,h4e,q4e,b4e,w4e,E4e,N4e,S4e,O4e,A4e,_4e,T4e,I4e,R4e,L4e,P4e,F4e,x4e,j4e,M4e,B4e,k4e,C4e,V4e,U4e,G4e,D4e,H4e,z4e,W4e,X4e,J4e,Y4e,Z4e,$4e,Q4e,K4e,r5e];function o6e(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function v6e(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function f6e(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function c6e(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function l6e(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function p6e(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function d6e(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function g6e(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function m6e(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function y6e(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function h6e(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function q6e(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function b6e(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function w6e(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function E6e(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function N6e(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function S6e(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function O6e(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function A6e(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function _6e(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function T6e(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function I6e(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function R6e(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function L6e(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function P6e(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function F6e(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function x6e(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function j6e(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function M6e(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function B6e(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function k6e(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function C6e(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function V6e(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function U6e(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function G6e(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function D6e(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function H6e(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function z6e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function W6e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function X6e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function J6e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function Y6e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function Z6e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function $6e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function Q6e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function K6e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function r4e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function e4e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function t4e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function i4e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function a4e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function n4e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function s4e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function u4e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function o4e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function v4e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function f4e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function c4e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function l4e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function p4e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function d4e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function g4e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function m4e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function y4e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function h4e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function q4e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function b4e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function w4e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function E4e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function N4e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function S4e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function O4e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function A4e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function _4e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function T4e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function I4e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function R4e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function L4e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function P4e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function F4e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function x4e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function j4e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function M4e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function B4e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function k4e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function C4e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function V4e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function U4e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function G4e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function D4e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function H4e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function z4e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function W4e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function X4e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function J4e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function Y4e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function Z4e(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function $4e(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function Q4e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function K4e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function r5e(){return 1}function e5e(r){var e=s6e(r),t=u6e[e];return t(2*r-(2*e+1))}P1r.exports=e5e});var k1r=s((OCe,B1r)=>{"use strict";var x1r=ae(),t5e=hr(),j1r=F1r(),M1r=.5641895835477563;function i5e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?M1r/r:(e=r*r,M1r*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):j1r(400/(4+r)):r<-26.7?t5e:(e=r*r,r<-6.1?2*x1r(e):2*x1r(e)-j1r(400/(4-r)))}B1r.exports=i5e});var xl=s((ACe,C1r)=>{"use strict";var a5e=k1r();C1r.exports=a5e});var G1r=s((_Ce,U1r)=>{"use strict";var n5e=br(),s5e=ci(),u5e=Ts(),o5e=va(),v5e=xl(),f5e=Ir(),jl=W(),V1r=.7071067811865475;function c5e(r,e,t){var i;return jl(r)||jl(e)||jl(t)||t<0?NaN:t===0?r<e?f5e:0:(i=(r-e)/t,i<-1?n5e(v5e(-i*V1r)/2)-u5e(i)/2:s5e(-o5e(i*V1r)/2))}U1r.exports=c5e});var z1r=s((TCe,H1r)=>{"use strict";var D1r=W(),l5e=Ir();function p5e(r,e){return D1r(r)||D1r(e)?NaN:r<e?l5e:0}H1r.exports=p5e});var J1r=s((ICe,X1r)=>{"use strict";var d5e=dr(),W1r=W(),g5e=Ir();function m5e(r){if(W1r(r))return d5e(NaN);return e;function e(t){return W1r(t)?NaN:t<r?g5e:0}}X1r.exports=m5e});var $1r=s((RCe,Z1r)=>{"use strict";var y5e=G(),Y1r=z1r(),h5e=J1r();y5e(Y1r,"factory",h5e);Z1r.exports=Y1r});var e2r=s((LCe,r2r)=>{"use strict";var q5e=dr(),b5e=$1r().factory,Q1r=W(),w5e=ci(),E5e=Ts(),N5e=va(),S5e=xl(),O5e=br(),K1r=.7071067811865475;function A5e(r,e){if(Q1r(r)||Q1r(e)||e<0)return q5e(NaN);if(e===0)return b5e(r);return t;function t(i){var a=(i-r)/e;return a<-1?O5e(S5e(-a*K1r)/2)-E5e(a)/2:w5e(-N5e(a*K1r)/2)}}r2r.exports=A5e});var a2r=s((PCe,i2r)=>{"use strict";var _5e=G(),t2r=G1r(),T5e=e2r();_5e(t2r,"factory",T5e);i2r.exports=t2r});var Ml=s((FCe,n2r)=>{"use strict";var I5e=1.8378770664093456;n2r.exports=I5e});var o2r=s((xCe,u2r)=>{"use strict";var R5e=br(),s2r=Vr(),L5e=Ml(),P5e=Ir(),F5e=hr(),Bl=W();function x5e(r,e,t){var i,a,n;return Bl(r)||Bl(e)||Bl(t)||t<0?NaN:t===0?r===e?F5e:P5e:(i=s2r(t,2),a=-.5*(2*R5e(t)+L5e),n=-1/(2*i),a+n*s2r(r-e,2))}u2r.exports=x5e});var c2r=s((jCe,f2r)=>{"use strict";var j5e=hr(),M5e=Ir(),v2r=W();function B5e(r,e){return v2r(r)||v2r(e)?NaN:r===e?j5e:M5e}f2r.exports=B5e});var d2r=s((MCe,p2r)=>{"use strict";var k5e=dr(),C5e=hr(),V5e=Ir(),l2r=W();function U5e(r){if(l2r(r))return k5e(NaN);return e;function e(t){return l2r(t)?NaN:t===r?C5e:V5e}}p2r.exports=U5e});var y2r=s((BCe,m2r)=>{"use strict";var G5e=G(),g2r=c2r(),D5e=d2r();G5e(g2r,"factory",D5e);m2r.exports=g2r});var w2r=s((kCe,b2r)=>{"use strict";var H5e=dr(),z5e=y2r().factory,W5e=Ml(),h2r=W(),q2r=Vr(),X5e=br();function J5e(r,e){var t,i,a;if(h2r(r)||h2r(e)||e<0)return H5e(NaN);if(e===0)return z5e(r);return t=q2r(e,2),i=-.5*(2*X5e(e)+W5e),a=-1/(2*t),n;function n(u){return i+a*q2r(u-r,2)}}b2r.exports=J5e});var S2r=s((CCe,N2r)=>{"use strict";var Y5e=G(),E2r=o2r(),Z5e=w2r();Y5e(E2r,"factory",Z5e);N2r.exports=E2r});var _2r=s((VCe,A2r)=>{"use strict";var O2r=W();function $5e(r,e){return O2r(r)||O2r(e)||e<=0?NaN:r}A2r.exports=$5e});var I2r=s((UCe,T2r)=>{"use strict";var Q5e=_2r();T2r.exports=Q5e});var P2r=s((GCe,L2r)=>{"use strict";var R2r=W();function K5e(r,e){return R2r(r)||R2r(e)||e<=0?NaN:r}L2r.exports=K5e});var x2r=s((DCe,F2r)=>{"use strict";var r8e=P2r();F2r.exports=r8e});var M2r=s((HCe,j2r)=>{"use strict";var kl=W(),e8e=ae(),t8e=Vr();function i8e(r,e,t){return kl(r)||kl(e)||kl(t)||t<=0?NaN:e8e(e*r+.5*t8e(t*r,2))}j2r.exports=i8e});var k2r=s((zCe,B2r)=>{"use strict";var a8e=dr(),Cl=W(),n8e=ae(),s8e=Vr();function u8e(r,e){if(Cl(r)||Cl(e)||e<=0)return a8e(NaN);return t;function t(i){return Cl(i)?NaN:n8e(r*i+.5*s8e(e*i,2))}}B2r.exports=u8e});var U2r=s((WCe,V2r)=>{"use strict";var o8e=G(),C2r=M2r(),v8e=k2r();o8e(C2r,"factory",v8e);V2r.exports=C2r});var H2r=s((XCe,D2r)=>{"use strict";var G2r=W();function f8e(r,e){return G2r(r)||G2r(e)||e<=0?NaN:r}D2r.exports=f8e});var W2r=s((JCe,z2r)=>{"use strict";var c8e=H2r();z2r.exports=c8e});var Y2r=s((YCe,J2r)=>{"use strict";var l8e=ae(),X2r=Vr(),p8e=Lr(),d8e=pi(),g8e=hr(),Vl=W();function m8e(r,e,t){var i,a,n;return Vl(r)||Vl(e)||Vl(t)||t<0?NaN:t===0?r===e?g8e:0:(i=X2r(t,2),a=1/p8e(i*d8e),n=-1/(2*i),a*l8e(n*X2r(r-e,2)))}J2r.exports=m8e});var Q2r=s((ZCe,$2r)=>{"use strict";var y8e=hr(),Z2r=W();function h8e(r,e){return Z2r(r)||Z2r(e)?NaN:r===e?y8e:0}$2r.exports=h8e});var evr=s(($Ce,rvr)=>{"use strict";var q8e=dr(),b8e=hr(),K2r=W();function w8e(r){if(K2r(r))return q8e(NaN);return e;function e(t){return K2r(t)?NaN:t===r?b8e:0}}rvr.exports=w8e});var avr=s((QCe,ivr)=>{"use strict";var E8e=G(),tvr=Q2r(),N8e=evr();E8e(tvr,"factory",N8e);ivr.exports=tvr});var uvr=s((KCe,svr)=>{"use strict";var S8e=dr(),O8e=avr().factory,Ul=W(),A8e=Lr(),_8e=ae(),nvr=Vr(),T8e=pi();function I8e(r,e){var t,i,a;if(Ul(r)||Ul(e)||e<0)return S8e(NaN);if(e===0)return O8e(r);return t=nvr(e,2),i=1/A8e(t*T8e),a=-1/(2*t),n;function n(u){return Ul(u)?NaN:i*_8e(a*nvr(u-r,2))}}svr.exports=I8e});var fvr=s((rVe,vvr)=>{"use strict";var R8e=G(),ovr=Y2r(),L8e=uvr();R8e(ovr,"factory",L8e);vvr.exports=ovr});var pvr=s((eVe,lvr)=>{"use strict";var cvr=W();function P8e(r,e){return cvr(r)||cvr(e)||e<=0?NaN:0}lvr.exports=P8e});var gvr=s((tVe,dvr)=>{"use strict";var F8e=pvr();dvr.exports=F8e});var hvr=s((iVe,yvr)=>{"use strict";var mvr=W();function x8e(r,e){return mvr(r)||mvr(e)||e<=0?NaN:e}yvr.exports=x8e});var bvr=s((aVe,qvr)=>{"use strict";var j8e=hvr();qvr.exports=j8e});var Nvr=s((nVe,Evr)=>{"use strict";var wvr=W();function M8e(r,e){return wvr(r)||wvr(e)||e<=0?NaN:e*e}Evr.exports=M8e});var Ovr=s((sVe,Svr)=>{"use strict";var B8e=Nvr();Svr.exports=B8e});var _vr=s((uVe,Avr)=>{"use strict";var je=$r(),k8e=w1r(),C8e=A1r(),V8e=L1r(),U8e=a2r(),G8e=S2r(),D8e=I2r(),H8e=x2r(),z8e=U2r(),W8e=W2r(),X8e=fvr(),J8e=Ac(),Y8e=gvr(),Z8e=bvr(),$8e=Ovr();function Q8e(r){return je(r,"cdf",k8e),je(r,"entropy",C8e),je(r,"kurtosis",V8e),je(r,"logcdf",U8e),je(r,"logpdf",G8e),je(r,"mean",D8e),je(r,"median",H8e),je(r,"mgf",z8e),je(r,"mode",W8e),je(r,"pdf",X8e),je(r,"quantile",J8e),je(r,"skewness",Y8e),je(r,"stdev",Z8e),je(r,"variance",$8e),r}Avr.exports=Q8e});var Ivr=s((oVe,Tvr)=>{"use strict";var K8e=$r(),rpe=_vr();function epe(r){return K8e(r,"normal",rpe({})),r}Tvr.exports=epe});var Lvr=s((vVe,Rvr)=>{"use strict";var T0=$r(),tpe=Uor(),ipe=Zor().ndarray,ape=n1r().ndarray,npe=d1r().ndarray,spe=Ivr();function upe(r){return T0(r,"bartlettTest",tpe),T0(r,"cumax",ipe),T0(r,"max",ape),T0(r,"mskmax",npe),T0(r,"dists",spe({})),r}Rvr.exports=upe});var Fvr=s((fVe,Pvr)=>{"use strict";var ope=Jr().isPrimitive,vpe=C();function fpe(r){return e;function e(t){if(!ope(t))throw new TypeError(vpe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Pvr.exports=fpe});var jvr=s((cVe,xvr)=>{"use strict";var cpe=Fvr();xvr.exports=cpe});var Cvr=s((lVe,kvr)=>{"use strict";var Mvr=Jr().isPrimitive,Bvr=C();function lpe(r){return e;function e(t,i){if(!Mvr(t))throw new TypeError(Bvr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Mvr(i))throw new TypeError(Bvr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}kvr.exports=lpe});var Uvr=s((pVe,Vvr)=>{"use strict";var ppe=Cvr();Vvr.exports=ppe});var Dvr=s((dVe,Gvr)=>{"use strict";var Gl=Jr().isPrimitive,Dl=C();function dpe(r){return e;function e(t,i,a){if(!Gl(t))throw new TypeError(Dl("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Gl(i))throw new TypeError(Dl("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Gl(a))throw new TypeError(Dl("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(a)));return r(t,i,a)}}Gvr.exports=dpe});var zvr=s((gVe,Hvr)=>{"use strict";var gpe=Dvr();Hvr.exports=gpe});var Xvr=s((mVe,Wvr)=>{"use strict";var Hl=$r(),mpe=jvr(),ype=Uvr(),hpe=zvr();function qpe(r){return Hl(r,"s_o",mpe),Hl(r,"ss_o",ype),Hl(r,"sss_o",hpe),r}Wvr.exports=qpe});var Yvr=s((yVe,Jvr)=>{"use strict";function bpe(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Jvr.exports=bpe});var d1=s((hVe,Zvr)=>{"use strict";var wpe=Yvr();Zvr.exports=wpe});var Qvr=s((qVe,$vr)=>{"use strict";var Epe=d1(),Npe=sa(),g1=di(),Spe=yi(),Ope=/\s+/g,Ape=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,_pe=/(?:\s|^)([^\s]+)(?=\s|$)/g,Tpe=/([a-z0-9])([A-Z])/g;function Ipe(r,e,t){return e=Npe(e),t===0?e:Epe(e)}function Rpe(r){return r=g1(r,Ape," "),r=g1(r,Ope," "),r=g1(r,Tpe,"$1 $2"),r=Spe(r),g1(r,_pe,Ipe)}$vr.exports=Rpe});var rfr=s((bVe,Kvr)=>{"use strict";var Lpe=Qvr();Kvr.exports=Lpe});var tfr=s((wVe,efr)=>{"use strict";var Ppe=Jr().isPrimitive,Fpe=C(),xpe=rfr();function jpe(r){if(!Ppe(r))throw new TypeError(Fpe("invalid argument. First argument must be a string. Value: `%s`.",r));return xpe(r)}efr.exports=jpe});var afr=s((EVe,ifr)=>{"use strict";var Mpe=tfr();ifr.exports=Mpe});var sfr=s((NVe,nfr)=>{"use strict";var Bpe=Jr().isPrimitive,kpe=C(),Cpe=d1();function Vpe(r){if(!Bpe(r))throw new TypeError(kpe("invalid argument. First argument must be a string. Value: `%s`.",r));return Cpe(r)}nfr.exports=Vpe});var ofr=s((SVe,ufr)=>{"use strict";var Upe=sfr();ufr.exports=Upe});var ffr=s((OVe,vfr)=>{"use strict";function Gpe(r){return r.toUpperCase()}vfr.exports=Gpe});var lfr=s((AVe,cfr)=>{"use strict";var Dpe=ffr();cfr.exports=Dpe});var dfr=s((_Ve,pfr)=>{"use strict";var Hpe=lfr(),zl=di(),zpe=yi(),Wpe=/\s+/g,Xpe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Jpe=/([a-z0-9])([A-Z])/g;function Ype(r){return r=zl(r,Xpe," "),r=zl(r,Jpe,"$1 $2"),r=zpe(r),r=zl(r,Wpe,"_"),Hpe(r)}pfr.exports=Ype});var mfr=s((TVe,gfr)=>{"use strict";var Zpe=dfr();gfr.exports=Zpe});var hfr=s((IVe,yfr)=>{"use strict";var $pe=Jr().isPrimitive,Qpe=C(),Kpe=mfr();function r7e(r){if(!$pe(r))throw new TypeError(Qpe("invalid argument. Must provide a string. Value: `%s`.",r));return Kpe(r)}yfr.exports=r7e});var bfr=s((RVe,qfr)=>{"use strict";var e7e=hfr();qfr.exports=e7e});var Efr=s((LVe,wfr)=>{"use strict";var t7e=sa(),Wl=di(),i7e=yi(),a7e=/\s+/g,n7e=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,s7e=/([a-z0-9])([A-Z])/g;function u7e(r){return r=Wl(r,n7e," "),r=Wl(r,s7e,"$1 $2"),r=i7e(r),r=Wl(r,a7e,"-"),t7e(r)}wfr.exports=u7e});var Sfr=s((PVe,Nfr)=>{"use strict";var o7e=Efr();Nfr.exports=o7e});var Afr=s((FVe,Ofr)=>{"use strict";var v7e=Jr().isPrimitive,f7e=C(),c7e=Sfr();function l7e(r){if(!v7e(r))throw new TypeError(f7e("invalid argument. Must provide a string. Value: `%s`.",r));return c7e(r)}Ofr.exports=l7e});var Tfr=s((xVe,_fr)=>{"use strict";var p7e=Afr();_fr.exports=p7e});var Rfr=s((jVe,Ifr)=>{"use strict";var d7e=Jr().isPrimitive,g7e=C(),m7e=sa();function y7e(r){if(!d7e(r))throw new TypeError(g7e("invalid argument. Must provide a string. Value: `%s`.",r));return m7e(r)}Ifr.exports=y7e});var Pfr=s((MVe,Lfr)=>{"use strict";var h7e=Rfr();Lfr.exports=h7e});var xfr=s((BVe,Ffr)=>{"use strict";var q7e=d1(),b7e=sa(),m1=di(),w7e=yi(),E7e=/\s+/g,N7e=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,S7e=/(?:\s|^)([^\s]+)(?=\s|$)/g,O7e=/([a-z0-9])([A-Z])/g;function A7e(r,e){return q7e(b7e(e))}function _7e(r){return r=m1(r,N7e," "),r=m1(r,E7e," "),r=m1(r,O7e,"$1 $2"),r=w7e(r),m1(r,S7e,A7e)}Ffr.exports=_7e});var Mfr=s((kVe,jfr)=>{"use strict";var T7e=xfr();jfr.exports=T7e});var kfr=s((CVe,Bfr)=>{"use strict";var I7e=Jr().isPrimitive,R7e=C(),L7e=Mfr();function P7e(r){if(!I7e(r))throw new TypeError(R7e("invalid argument. First argument must be a string. Value: `%s`.",r));return L7e(r)}Bfr.exports=P7e});var Vfr=s((VVe,Cfr)=>{"use strict";var F7e=kfr();Cfr.exports=F7e});var Gfr=s((UVe,Ufr)=>{"use strict";var x7e=sa(),Xl=di(),j7e=yi(),M7e=/\s+/g,B7e=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,k7e=/([a-z0-9])([A-Z])/g;function C7e(r){return r=Xl(r,B7e," "),r=Xl(r,k7e,"$1 $2"),r=j7e(r),r=Xl(r,M7e,"_"),x7e(r)}Ufr.exports=C7e});var Hfr=s((GVe,Dfr)=>{"use strict";var V7e=Gfr();Dfr.exports=V7e});var Wfr=s((DVe,zfr)=>{"use strict";var U7e=Jr().isPrimitive,G7e=C(),D7e=Hfr();function H7e(r){if(!U7e(r))throw new TypeError(G7e("invalid argument. Must provide a string. Value: `%s`.",r));return D7e(r)}zfr.exports=H7e});var Jfr=s((HVe,Xfr)=>{"use strict";var z7e=Wfr();Xfr.exports=z7e});var $fr=s((zVe,Zfr)=>{"use strict";var W7e=mr(),Yfr=vr(),X7e=de().isPrimitive,J7e=Jr().isPrimitive,Jl=C();function Y7e(r,e){return W7e(e)?Yfr(e,"flags")&&(r.flags=e.flags,!J7e(r.flags))?new TypeError(Jl("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Yfr(e,"capture")&&(r.capture=e.capture,!X7e(r.capture))?new TypeError(Jl("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Jl("invalid argument. Options argument must be an object. Value: `%s`.",e))}Zfr.exports=Y7e});var y1=s((WVe,Kfr)=>{"use strict";var Z7e=$fr(),Qfr=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function $7e(r){var e,t;if(arguments.length>0){if(e={},t=Z7e(e,r),t)throw t;return e.capture?new RegExp("("+Qfr+")",e.flags):new RegExp(Qfr,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}Kfr.exports=$7e});var e3r=s((XVe,r3r)=>{"use strict";var Q7e=y1(),K7e=Q7e({capture:!0});r3r.exports=K7e});var i3r=s((JVe,t3r)=>{"use strict";var r9e=y1(),e9e=r9e();t3r.exports=e9e});var s3r=s((YVe,n3r)=>{"use strict";var a3r=G(),Yl=y1(),t9e=e3r(),i9e=i3r();a3r(Yl,"REGEXP",i9e);a3r(Yl,"REGEXP_CAPTURE",t9e);n3r.exports=Yl});var o3r=s((ZVe,u3r)=>{"use strict";var a9e=s3r().REGEXP;function n9e(r){var e,t,i,a;for(e=!0,t="",a=0;a<r.length;a++)i=r.charAt(a),a9e.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}u3r.exports=n9e});var f3r=s(($Ve,v3r)=>{"use strict";var s9e=o3r();v3r.exports=s9e});var l3r=s((QVe,c3r)=>{"use strict";var u9e=Jr().isPrimitive,o9e=C(),v9e=f3r();function f9e(r){if(!u9e(r))throw new TypeError(o9e("invalid argument. Must provide a string. Value: `%s`.",r));return v9e(r)}c3r.exports=f9e});var d3r=s((KVe,p3r)=>{"use strict";var c9e=l3r();p3r.exports=c9e});var m3r=s((rUe,g3r)=>{"use strict";function l9e(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}g3r.exports=l9e});var h3r=s((eUe,y3r)=>{"use strict";var p9e=m3r();y3r.exports=p9e});var b3r=s((tUe,q3r)=>{"use strict";var d9e=Jr().isPrimitive,g9e=C(),m9e=h3r();function y9e(r){if(!d9e(r))throw new TypeError(g9e("invalid argument. First argument must be a string. Value: `%s`.",r));return m9e(r)}q3r.exports=y9e});var E3r=s((iUe,w3r)=>{"use strict";var h9e=b3r();w3r.exports=h9e});var S3r=s((aUe,N3r)=>{"use strict";var q9e=Jr().isPrimitive,b9e=C();function w9e(r){if(!q9e(r))throw new TypeError(b9e("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}N3r.exports=w9e});var A3r=s((nUe,O3r)=>{"use strict";var E9e=S3r();O3r.exports=E9e});var T3r=s((sUe,_3r)=>{"use strict";var dt=$r(),N9e=afr(),S9e=ofr(),O9e=bfr(),A9e=Tfr(),_9e=Pfr(),T9e=Vfr(),I9e=Jfr(),R9e=d3r(),L9e=E3r(),P9e=A3r();function F9e(r){return dt(r,"camelcase",N9e),dt(r,"capitalize",S9e),dt(r,"constantcase",O9e),dt(r,"kebabcase",A9e),dt(r,"lowercase",_9e),dt(r,"pascalcase",T9e),dt(r,"snakecase",I9e),dt(r,"startcase",R9e),dt(r,"uncapitalize",L9e),dt(r,"uppercase",P9e),r}_3r.exports=F9e});var R3r=s((uUe,I3r)=>{"use strict";var x9e=$r(),j9e=Xvr(),M9e=T3r();function B9e(r){return x9e(r,"tools",j9e({})),r=M9e(r),r}I3r.exports=B9e});var P3r=s((oUe,L3r)=>{"use strict";var gt=$r(),k9e=wh(),C9e=Mw(),V9e=zw(),U9e=GS(),G9e=SB(),D9e=XD(),H9e=Pnr(),z9e=Gnr(),W9e=Lvr(),X9e=R3r();function J9e(){var r={};return gt(r,"array",k9e({})),gt(r,"assert",C9e({})),gt(r,"blas",V9e({})),gt(r,"datasets",U9e({})),gt(r,"math",G9e({})),gt(r,"ndarray",D9e({})),gt(r,"random",H9e({})),gt(r,"simulate",z9e({})),gt(r,"stats",W9e({})),gt(r,"string",X9e({})),r}L3r.exports=J9e});var x3r=s((vUe,F3r)=>{"use strict";var Y9e=G(),Zl=P3r();Y9e(Zl,"CACHED",Zl());F3r.exports=Zl});var $9e=s((fUe,j3r)=>{var Z9e=x3r().CACHED;j3r.exports=Z9e});return $9e();})();
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
		if ( x.length === 1 && x[ 0 ].length > 1 ) {
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
			len -= hlen - vhlen;
			// Because the meta data of the view consumes less memory than the input ndarray, we need to shift the data up to ensure a compact representation...
			for ( i = 0; i < len; i++ ) {
				buf[ vhlen+i ] = buf[ hlen+i ];
			}
			// Trim off the leftover items:
			x.length = len;
		}
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		len = vhlen + vlen;
		buf = ns.array.zeros( len );
		// When returning a view, return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
			tmp = new ns.ndarray.ndarray( 'generic', buf, shape, strides, vhlen, order );
			for ( i = 0; i < vlen; i++ ) {
				tmp.iset( i, vx.iget( i ) );
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
	var shape;
	var ndims;
	var obj;
	var out;
	var row;
	var idx;
	var dim;
	var it;
	var N;
	var M;
	var s;
	var o;
	var i;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		ns.assert.unrecognizedOptionName( o );
	}
	// Parse the input range as an ndarray:
	obj = ns.ndarray.range2ndarray( x );
	// Handle ndarrays having fewer than 2 dimensions (i.e., non-matrices)...
	ndims = obj.ndims;
	if ( ndims === 0 ) {
		return [
			[ '[ ] =' ],
			[],
			[ obj.ndarray.get() ]
		];
	}
	if ( ndims === 1 ) {
		out = [ [ '[ : ] =' ], [] ];
		if ( obj.length === 0 ) {
			out.push( [ '(empty)' ] );
			return out;
		}
		return out.concat( ns.ndarray.toArray( obj.ndarray, [ obj.length, 1 ], [ 1, 1 ], 0, 'row-major' ) ); // TODO: replace with @stdlib/array/base equivalent
	}
	// Determine the number of rows and columns per matrix:
	shape = obj.shape;
	dim = ndims - 2;
	N = shape[ dim ];
	M = shape[ dim+1 ];
	// Create an iterator which iterates over each row in the ndarray:
	it = ns.ndarray.iterRows( obj.ndarray );
	// Initialize a row counter:
	row = 0;
	// Initialize an index array for tracking indices:
	idx = ns.array.zeros( ndims );
	// Set the last two elements to ':' to indicate that we are selecting all elements:
	idx[ dim ] = ':';
	idx[ dim+1 ] = ':';
	// Assemble the output nested array...
	out = [ ns.array.filled( '', M ) ];
	out[ 0 ][ 0 ] = 'ndarray: (' + shape.join( ', ' ) + ')';
	out.push( ns.array.filled( '', M ) );
	while ( true ) {
		s = it.next();
		if ( s.done ) {
			break;
		}
		if ( row === 0 ) {
			out.push( ns.array.filled( '', M ) );
			out[ out.length-1 ][ 0 ] = '[ ' + idx.join( ', ' ) +' ] =';
			out.push( ns.array.filled( '', M ) );
		}
		s = s.value;
		out.push( ns.ndarray.toArray( s.data, s.shape, s.strides, s.offset, s.order ) ); // TODO: replace with @stdlib/array/base equivalent
		row = (row+1) % N;
		if ( row === 0 ) {
			out.push( ns.array.filled( '', M ) );
		}
		idx = ns.ndarray.nextCartesianIndex.assign( shape, obj.order, idx, dim-1, idx );
	}
	return out;
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
	// If we are returning a view of the input data buffer, check whether we need to shift the data to ensure a compact representation...
	len = buf.length; // header + numel(out)
	if ( opts.view ) {
		// Check whether the number of dimensions was reduced and, if so, shift the data to account for less header info...
		d = hlen - vhlen;
		if ( d !== 0 ) {
			// Reduce the buffer length:
			len -= d;
			// Because the meta data of the view consumes less memory than the input ndarray, we need to shift the data up to ensure a compact representation...
			for ( i = 0; i < len; i++ ) {
				buf[ vhlen+i ] = buf[ hlen+i ];
			}
			// Trim off the leftover items:
			buf.length = len;
			// Adjust the offset to account for reduced ndarray meta data:
			offset -= d;
		}
	}
	// TODO: do we need to consider a returned ndarray having a different dtype? ANSWER: no. Once we convert this to a scaffold, we can hard code the expected output dtype
	// Serialize the output ndarray to a range:
	return ns.ndarray.ndarray2range( out.data, len-vhlen, obj.dtype, out.shape, out.strides, offset-vhlen, out.order, opts.as ); 
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
