/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Kl=s((Ede,Ql)=>{"use strict";var X3r=typeof Object.defineProperty=="function"?Object.defineProperty:null;Ql.exports=X3r});var e4=s((Nde,r4)=>{"use strict";var J3r=Kl();function Y3r(){try{return J3r({},"x",{}),!0}catch{return!1}}r4.exports=Y3r});var i4=s((Sde,t4)=>{"use strict";var Z3r=Object.defineProperty;t4.exports=Z3r});var w1=s((Ode,a4)=>{"use strict";function $3r(r){return typeof r=="number"}a4.exports=$3r});var E1=s((Ade,s4)=>{"use strict";function Q3r(r){return r[0]==="-"}function n4(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function K3r(r,e,t){var i=!1,a=e-r.length;return a<0||(Q3r(r)&&(i=!0,r=r.substr(1)),r=t?r+n4(a):n4(a)+r,i&&(r="-"+r)),r}s4.exports=K3r});var f4=s((_de,v4)=>{"use strict";var rcr=w1(),u4=E1(),ecr=String.prototype.toLowerCase,o4=String.prototype.toUpperCase;function tcr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!rcr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=u4(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=u4(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===o4.call(r.specifier)?o4.call(t):ecr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}v4.exports=tcr});var l4=s((Tde,c4)=>{"use strict";function icr(r){return typeof r=="string"}c4.exports=icr});var g4=s((Ide,d4)=>{"use strict";var acr=w1(),ncr=Math.abs,scr=String.prototype.toLowerCase,p4=String.prototype.toUpperCase,Di=String.prototype.replace,ucr=/e\+(\d)$/,ocr=/e-(\d)$/,vcr=/^(\d+)$/,fcr=/^(\d+)e/,ccr=/\.0$/,lcr=/\.0*e/,pcr=/(\..*[^0])0*e/;function dcr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!acr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ncr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Di.call(t,pcr,"$1e"),t=Di.call(t,lcr,"e"),t=Di.call(t,ccr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Di.call(t,ucr,"e+0$1"),t=Di.call(t,ocr,"e-0$1"),r.alternate&&(t=Di.call(t,vcr,"$1."),t=Di.call(t,fcr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p4.call(r.specifier)?p4.call(t):scr.call(t),t}d4.exports=dcr});var h4=s((Rde,y4)=>{"use strict";function m4(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function gcr(r,e,t){var i=e-r.length;return i<0||(r=t?r+m4(i):m4(i)+r),r}y4.exports=gcr});var b4=s((Lde,q4)=>{"use strict";var mcr=f4(),ycr=l4(),hcr=g4(),qcr=h4(),bcr=E1(),wcr=String.fromCharCode,F0=isNaN,Ecr=Array.isArray;function Ncr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Scr(r){var e,t,i,a,n,u,o,v,f;if(!Ecr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],ycr(i))u+=i;else{if(e=i.precision!==void 0,i=Ncr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,F0(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,F0(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=mcr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!F0(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=F0(n)?String(i.arg):wcr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=hcr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=bcr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=qcr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}q4.exports=Scr});var E4=s((Pde,w4)=>{"use strict";var Ocr=b4();w4.exports=Ocr});var S4=s((Fde,N4)=>{"use strict";var x0=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Acr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function _cr(r){var e,t,i,a;for(t=[],a=0,i=x0.exec(r);i;)e=r.slice(a,x0.lastIndex-i[0].length),e.length&&t.push(e),t.push(Acr(i)),a=x0.lastIndex,i=x0.exec(r);return e=r.slice(a),e.length&&t.push(e),t}N4.exports=_cr});var A4=s((xde,O4)=>{"use strict";var Tcr=S4();O4.exports=Tcr});var T4=s((jde,_4)=>{"use strict";function Icr(r){return typeof r=="string"}_4.exports=Icr});var L4=s((Mde,R4)=>{"use strict";var Rcr=E4(),Lcr=A4(),Pcr=T4();function I4(r){var e,t,i;if(!Pcr(r))throw new TypeError(I4("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Lcr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Rcr.apply(null,t)}R4.exports=I4});var C=s((Bde,P4)=>{"use strict";var Fcr=L4();P4.exports=Fcr});var k4=s((kde,B4)=>{"use strict";var F4=C(),pa=Object.prototype,x4=pa.toString,j4=pa.__defineGetter__,M4=pa.__defineSetter__,xcr=pa.__lookupGetter__,jcr=pa.__lookupSetter__;function Mcr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||x4.call(r)==="[object Array]")throw new TypeError(F4("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||x4.call(t)==="[object Array]")throw new TypeError(F4("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(xcr.call(r,e)||jcr.call(r,e)?(i=r.__proto__,r.__proto__=pa,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&j4&&j4.call(r,e,t.get),u&&M4&&M4.call(r,e,t.set),r}B4.exports=Mcr});var ii=s((Cde,C4)=>{"use strict";var Bcr=e4(),kcr=i4(),Ccr=k4(),N1;Bcr()?N1=kcr:N1=Ccr;C4.exports=N1});var U4=s((Vde,V4)=>{"use strict";var Vcr=ii();function Ucr(r,e,t){Vcr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}V4.exports=Ucr});var G=s((Ude,G4)=>{"use strict";var Gcr=U4();G4.exports=Gcr});var H4=s((Gde,D4)=>{"use strict";var Dcr=ii();function Hcr(r,e,t){Dcr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}D4.exports=Hcr});var $r=s((Dde,z4)=>{"use strict";var zcr=H4();z4.exports=zcr});var X4=s((Hde,W4)=>{"use strict";function Wcr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}W4.exports=Wcr});var En=s((zde,J4)=>{"use strict";var Xcr=X4();J4.exports=Xcr});var Z4=s((Wde,Y4)=>{"use strict";function Jcr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Y4.exports=Jcr});var Nn=s((Xde,$4)=>{"use strict";var Ycr=Z4();$4.exports=Ycr});var K4=s((Jde,Q4)=>{"use strict";var Zcr=Nn();function $cr(r){return Zcr(0,r)}Q4.exports=$cr});var ai=s((Yde,r6)=>{"use strict";var Qcr=K4();r6.exports=Qcr});var i6=s((Zde,t6)=>{"use strict";var Sn=En(),Kcr=ai(),e6=C();function rlr(r,e,t){var i,a,n,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(n=Kcr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],a=t[f],a!==0&&a<v)throw new Error(e6("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Sn(e).join(", "),Sn(t).join(", "),f));if(v===a)n[f]=1;else if(v===1)n[f]=0;else throw new Error(e6("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Sn(e).join(", "),Sn(t).join(", "),f))}return{ref:r,data:i,shape:Sn(t),strides:n}}t6.exports=rlr});var S1=s(($de,a6)=>{"use strict";var elr=i6();a6.exports=elr});var u6=s((Qde,s6)=>{"use strict";var n6=S1();function tlr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;if(q=e[2],o=q[1],v=q[0],!(o<=0||v<=0))for(A=n6(r[0],e[0],q),b=A.data,w=A.strides,i=w[1],a=w[0],A=n6(r[1],e[1],q),T=A.data,w=A.strides,n=w[1],u=w[0],S=r[2],p=0,y=0,c=0;c<v;c++){for(l=0,m=0,g=b[p],d=T[y],h=S[c],f=0;f<o;f++)h[f]=t(g[l],d[m]),l+=i,m+=n;p+=a,y+=u}}s6.exports=tlr});var O1=s((Kde,o6)=>{"use strict";var ilr=u6();o6.exports=ilr});var f6=s((rge,v6)=>{"use strict";var A1=S1();function alr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j;if(S=e[3],f=S[1],c=S[0],!(f<=0||c<=0))for(N=A1(r[0],e[0],S),I=N.data,O=N.strides,i=O[1],a=O[0],N=A1(r[1],e[1],S),E=N.data,O=N.strides,n=O[1],u=O[0],N=A1(r[2],e[2],S),P=N.data,O=N.strides,o=O[1],v=O[0],j=r[3],y=0,d=0,q=0,p=0;p<c;p++){for(m=0,g=0,h=0,w=I[y],A=E[d],b=P[q],T=j[p],l=0;l<f;l++)T[l]=t(w[m],A[g],b[h]),m+=i,g+=n,h+=o;y+=a,d+=u,q+=v}}v6.exports=alr});var _1=s((ege,c6)=>{"use strict";var nlr=f6();c6.exports=nlr});var p6=s((tge,l6)=>{"use strict";function slr(r){var e,t,i,a,n,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(a=r[0],f=a.length,v===1){for(c=0;c<f;c++)t.push(a[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(n=e[0]-f+c,n>=0?i=a[n]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}l6.exports=slr});var j0=s((ige,d6)=>{"use strict";var ulr=p6();d6.exports=ulr});var m6=s((age,g6)=>{"use strict";var olr=Nn();function vlr(r,e){var t,i,a,n;for(i=e[1],a=e[0],t=[],n=0;n<a;n++)t.push(olr(r,i));return t}g6.exports=vlr});var M0=s((nge,y6)=>{"use strict";var flr=m6();y6.exports=flr});var q6=s((sge,h6)=>{"use strict";function clr(r,e,t){var i,a,n,u,o,v;for(n=r[1],u=r[0],i=[],o=0;o<u;o++){for(a=[],v=0;v<n;v++)a.push(e.call(t,[o,v]));i.push(a)}return i}h6.exports=clr});var w6=s((uge,b6)=>{"use strict";var llr=q6();b6.exports=llr});var N6=s((oge,E6)=>{"use strict";function plr(r){var e,t,i,a,n,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],n=0;n<t;n++)for(a=r[n],u=0;u<i;u++)e.push(a[u]);return e}E6.exports=plr});var O6=s((vge,S6)=>{"use strict";function dlr(r,e,t,i){var a,n,u,o,v,f;for(n=r.length,u=r[0].length,a=i,v=0;v<n;v++)for(o=r[v],f=0;f<u;f++)e[a]=o[f],a+=t;return e}S6.exports=dlr});var B0=s((fge,_6)=>{"use strict";var glr=G(),A6=N6(),mlr=O6();glr(A6,"assign",mlr);_6.exports=A6});var I6=s((cge,T6)=>{"use strict";var ylr=/./;T6.exports=ylr});var T1=s((lge,R6)=>{"use strict";function hlr(r){return typeof r=="boolean"}R6.exports=hlr});var P6=s((pge,L6)=>{"use strict";function qlr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}L6.exports=qlr});var x6=s((dge,F6)=>{"use strict";var blr=P6();F6.exports=blr});var M6=s((gge,j6)=>{"use strict";var wlr=x6(),Elr=wlr();function Nlr(){return Elr&&typeof Symbol.toStringTag=="symbol"}j6.exports=Nlr});var da=s((mge,B6)=>{"use strict";var Slr=M6();B6.exports=Slr});var I1=s((yge,k6)=>{"use strict";var Olr=Object.prototype.toString;k6.exports=Olr});var V6=s((hge,C6)=>{"use strict";var Alr=I1();function _lr(r){return Alr.call(r)}C6.exports=_lr});var G6=s((qge,U6)=>{"use strict";var Tlr=Object.prototype.hasOwnProperty;function Ilr(r,e){return r==null?!1:Tlr.call(r,e)}U6.exports=Ilr});var vr=s((bge,D6)=>{"use strict";var Rlr=G6();D6.exports=Rlr});var z6=s((wge,H6)=>{"use strict";var Llr=typeof Symbol=="function"?Symbol:void 0;H6.exports=Llr});var R1=s((Ege,W6)=>{"use strict";var Plr=z6();W6.exports=Plr});var Y6=s((Nge,J6)=>{"use strict";var X6=R1(),Flr=typeof X6=="function"?X6.toStringTag:"";J6.exports=Flr});var $6=s((Sge,Z6)=>{"use strict";var xlr=vr(),On=Y6(),L1=I1();function jlr(r){var e,t,i;if(r==null)return L1.call(r);t=r[On],e=xlr(r,On);try{r[On]=void 0}catch{return L1.call(r)}return i=L1.call(r),e?r[On]=t:delete r[On],i}Z6.exports=jlr});var Kr=s((Oge,Q6)=>{"use strict";var Mlr=da(),Blr=V6(),klr=$6(),P1;Mlr()?P1=klr:P1=Blr;Q6.exports=P1});var r5=s((Age,K6)=>{"use strict";var Clr=Boolean;K6.exports=Clr});var F1=s((_ge,e5)=>{"use strict";var Vlr=r5();e5.exports=Vlr});var i5=s((Tge,t5)=>{"use strict";var Ulr=Boolean.prototype.toString;t5.exports=Ulr});var n5=s((Ige,a5)=>{"use strict";var Glr=i5();function Dlr(r){try{return Glr.call(r),!0}catch{return!1}}a5.exports=Dlr});var x1=s((Rge,s5)=>{"use strict";var Hlr=da(),zlr=Kr(),Wlr=F1(),Xlr=n5(),Jlr=Hlr();function Ylr(r){return typeof r=="object"?r instanceof Wlr?!0:Jlr?Xlr(r):zlr(r)==="[object Boolean]":!1}s5.exports=Ylr});var o5=s((Lge,u5)=>{"use strict";var Zlr=T1(),$lr=x1();function Qlr(r){return Zlr(r)||$lr(r)}u5.exports=Qlr});var de=s((Pge,f5)=>{"use strict";var v5=G(),j1=o5(),Klr=T1(),r4r=x1();v5(j1,"isPrimitive",Klr);v5(j1,"isObject",r4r);f5.exports=j1});var l5=s((Fge,c5)=>{"use strict";function e4r(){return new Function("return this;")()}c5.exports=e4r});var d5=s((xge,p5)=>{"use strict";var t4r=typeof self=="object"?self:null;p5.exports=t4r});var m5=s((jge,g5)=>{"use strict";var i4r=typeof window=="object"?window:null;g5.exports=i4r});var h5=s((Mge,y5)=>{"use strict";var a4r=typeof globalThis=="object"?globalThis:null;y5.exports=a4r});var M1=s((Bge,E5)=>{"use strict";var n4r=de().isPrimitive,s4r=C(),u4r=l5(),q5=d5(),b5=m5(),w5=h5();function o4r(r){if(arguments.length){if(!n4r(r))throw new TypeError(s4r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return u4r()}if(w5)return w5;if(q5)return q5;if(b5)return b5;throw new Error("unexpected error. Unable to resolve global object.")}E5.exports=o4r});var O5=s((kge,S5)=>{"use strict";var v4r=M1(),N5=v4r(),f4r=N5.document&&N5.document.childNodes;S5.exports=f4r});var _5=s((Cge,A5)=>{"use strict";var c4r=Int8Array;A5.exports=c4r});var I5=s((Vge,T5)=>{"use strict";var l4r=I6(),p4r=O5(),d4r=_5();function g4r(){return typeof l4r=="function"||typeof d4r=="object"||typeof p4r=="function"}T5.exports=g4r});var B1=s((Uge,R5)=>{"use strict";function m4r(){return/^\s*function\s*([^(]*)/i}R5.exports=m4r});var P5=s((Gge,L5)=>{"use strict";var y4r=B1(),h4r=y4r();L5.exports=h4r});var k1=s((Dge,x5)=>{"use strict";var q4r=G(),F5=B1(),b4r=P5();q4r(F5,"REGEXP",b4r);x5.exports=F5});var M5=s((Hge,j5)=>{"use strict";var w4r=Kr(),C1;function E4r(r){return w4r(r)==="[object Array]"}Array.isArray?C1=Array.isArray:C1=E4r;j5.exports=C1});var qe=s((zge,B5)=>{"use strict";var N4r=M5();B5.exports=N4r});var C5=s((Wge,k5)=>{"use strict";var S4r=qe(),O4r=C();function A4r(r){if(typeof r!="function")throw new TypeError(O4r("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!S4r(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}k5.exports=A4r});var U5=s((Xge,V5)=>{"use strict";var _4r=C5();V5.exports=_4r});var D5=s((Jge,G5)=>{"use strict";function T4r(r){return r!==null&&typeof r=="object"}G5.exports=T4r});var U1=s((Yge,H5)=>{"use strict";var I4r=G(),R4r=U5(),V1=D5(),L4r=R4r(V1);I4r(V1,"isObjectLikeArray",L4r);H5.exports=V1});var W5=s((Zge,z5)=>{"use strict";var P4r=U1();function F4r(r){return P4r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}z5.exports=F4r});var Hi=s(($ge,X5)=>{"use strict";var x4r=W5();X5.exports=x4r});var Y5=s((Qge,J5)=>{"use strict";var j4r=Kr(),M4r=k1().REGEXP,B4r=Hi();function k4r(r){var e,t,i;if(t=j4r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=M4r.exec(i.toString()),e)return e[1]}return B4r(r)?"Buffer":t}J5.exports=k4r});var yt=s((Kge,Z5)=>{"use strict";var C4r=Y5();Z5.exports=C4r});var Q5=s((rme,$5)=>{"use strict";var V4r=yt();function U4r(r){var e;return r===null?"null":(e=typeof r,e==="object"?V4r(r).toLowerCase():e)}$5.exports=U4r});var r8=s((eme,K5)=>{"use strict";var G4r=yt();function D4r(r){return G4r(r).toLowerCase()}K5.exports=D4r});var k0=s((tme,e8)=>{"use strict";var H4r=I5(),z4r=Q5(),W4r=r8(),X4r=H4r()?W4r:z4r;e8.exports=X4r});var i8=s((ime,t8)=>{"use strict";var J4r=k0();function Y4r(r){return J4r(r)==="function"}t8.exports=Y4r});var yr=s((ame,a8)=>{"use strict";var Z4r=i8();a8.exports=Z4r});var s8=s((nme,n8)=>{"use strict";var $4r=Math.floor;n8.exports=$4r});var Gr=s((sme,u8)=>{"use strict";var Q4r=s8();u8.exports=Q4r});var v8=s((ume,o8)=>{"use strict";var K4r=Gr();function r6r(r){return K4r(r)===r}o8.exports=r6r});var we=s((ome,f8)=>{"use strict";var e6r=v8();f8.exports=e6r});var l8=s((vme,c8)=>{"use strict";var t6r=9007199254740991;c8.exports=t6r});var d8=s((fme,p8)=>{"use strict";var i6r=we(),a6r=l8();function n6r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&i6r(r.length)&&r.length>=0&&r.length<=a6r}p8.exports=n6r});var Be=s((cme,g8)=>{"use strict";var s6r=d8();g8.exports=s6r});var y8=s((lme,m8)=>{"use strict";var u6r=yr();function o6r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&u6r(r.next)}m8.exports=o6r});var q8=s((pme,h8)=>{"use strict";var v6r=y8();h8.exports=v6r});var E8=s((dme,w8)=>{"use strict";var b8="function";function f6r(r){return typeof r.get===b8&&typeof r.set===b8}w8.exports=f6r});var ga=s((gme,N8)=>{"use strict";var c6r=E8();N8.exports=c6r});var A8=s((mme,O8)=>{"use strict";var S8={complex128:l6r,complex64:p6r,default:d6r};function l6r(r,e,t){r.set(t,e)}function p6r(r,e,t){r.set(t,e)}function d6r(r,e,t){r.set(t,e)}function g6r(r){var e=S8[r];return typeof e=="function"?e:S8.default}O8.exports=g6r});var C0=s((yme,_8)=>{"use strict";var m6r=A8();_8.exports=m6r});var R8=s((hme,I8)=>{"use strict";var T8={float64:y6r,float32:h6r,int32:q6r,int16:b6r,int8:w6r,uint32:E6r,uint16:N6r,uint8:S6r,uint8c:O6r,generic:A6r,default:_6r};function y6r(r,e,t){r[e]=t}function h6r(r,e,t){r[e]=t}function q6r(r,e,t){r[e]=t}function b6r(r,e,t){r[e]=t}function w6r(r,e,t){r[e]=t}function E6r(r,e,t){r[e]=t}function N6r(r,e,t){r[e]=t}function S6r(r,e,t){r[e]=t}function O6r(r,e,t){r[e]=t}function A6r(r,e,t){r[e]=t}function _6r(r,e,t){r[e]=t}function T6r(r){var e=T8[r];return typeof e=="function"?e:T8.default}I8.exports=T6r});var V0=s((qme,L8)=>{"use strict";var I6r=R8();L8.exports=I6r});var F8=s((bme,P8)=>{"use strict";var R6r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};P8.exports=R6r});var j8=s((wme,x8)=>{"use strict";var L6r=Kr(),P6r=typeof Float64Array=="function";function F6r(r){return P6r&&r instanceof Float64Array||L6r(r)==="[object Float64Array]"}x8.exports=F6r});var B8=s((Eme,M8)=>{"use strict";var x6r=j8();M8.exports=x6r});var C8=s((Nme,k8)=>{"use strict";var j6r=typeof Float64Array=="function"?Float64Array:null;k8.exports=j6r});var G8=s((Sme,U8)=>{"use strict";var M6r=B8(),V8=C8();function B6r(){var r,e;if(typeof V8!="function")return!1;try{e=new V8([1,3.14,-3.14,NaN]),r=M6r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}U8.exports=B6r});var G1=s((Ome,D8)=>{"use strict";var k6r=G8();D8.exports=k6r});var z8=s((Ame,H8)=>{"use strict";var C6r=typeof Float64Array=="function"?Float64Array:void 0;H8.exports=C6r});var X8=s((_me,W8)=>{"use strict";function V6r(){throw new Error("not implemented")}W8.exports=V6r});var ge=s((Tme,J8)=>{"use strict";var U6r=G1(),G6r=z8(),D6r=X8(),D1;U6r()?D1=G6r:D1=D6r;J8.exports=D1});var Z8=s((Ime,Y8)=>{"use strict";var H6r=Kr(),z6r=typeof Float32Array=="function";function W6r(r){return z6r&&r instanceof Float32Array||H6r(r)==="[object Float32Array]"}Y8.exports=W6r});var Q8=s((Rme,$8)=>{"use strict";var X6r=Z8();$8.exports=X6r});var hr=s((Lme,K8)=>{"use strict";var J6r=Number.POSITIVE_INFINITY;K8.exports=J6r});var ep=s((Pme,rp)=>{"use strict";var Y6r=typeof Float32Array=="function"?Float32Array:null;rp.exports=Y6r});var ap=s((Fme,ip)=>{"use strict";var Z6r=Q8(),$6r=hr(),tp=ep();function Q6r(){var r,e;if(typeof tp!="function")return!1;try{e=new tp([1,3.14,-3.14,5e40]),r=Z6r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===$6r}catch{r=!1}return r}ip.exports=Q6r});var sp=s((xme,np)=>{"use strict";var K6r=ap();np.exports=K6r});var op=s((jme,up)=>{"use strict";var r5r=typeof Float32Array=="function"?Float32Array:void 0;up.exports=r5r});var fp=s((Mme,vp)=>{"use strict";function e5r(){throw new Error("not implemented")}vp.exports=e5r});var et=s((Bme,cp)=>{"use strict";var t5r=sp(),i5r=op(),a5r=fp(),H1;t5r()?H1=i5r:H1=a5r;cp.exports=H1});var pp=s((kme,lp)=>{"use strict";var n5r=Kr(),s5r=typeof Uint32Array=="function";function u5r(r){return s5r&&r instanceof Uint32Array||n5r(r)==="[object Uint32Array]"}lp.exports=u5r});var ht=s((Cme,dp)=>{"use strict";var o5r=pp();dp.exports=o5r});var ma=s((Vme,gp)=>{"use strict";var v5r=4294967295;gp.exports=v5r});var yp=s((Ume,mp)=>{"use strict";var f5r=typeof Uint32Array=="function"?Uint32Array:null;mp.exports=f5r});var bp=s((Gme,qp)=>{"use strict";var c5r=ht(),z1=ma(),hp=yp();function l5r(){var r,e;if(typeof hp!="function")return!1;try{e=[1,3.14,-3.14,z1+1,z1+2],e=new hp(e),r=c5r(e)&&e[0]===1&&e[1]===3&&e[2]===z1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}qp.exports=l5r});var Ep=s((Dme,wp)=>{"use strict";var p5r=bp();wp.exports=p5r});var Sp=s((Hme,Np)=>{"use strict";var d5r=typeof Uint32Array=="function"?Uint32Array:void 0;Np.exports=d5r});var Ap=s((zme,Op)=>{"use strict";function g5r(){throw new Error("not implemented")}Op.exports=g5r});var me=s((Wme,_p)=>{"use strict";var m5r=Ep(),y5r=Sp(),h5r=Ap(),W1;m5r()?W1=y5r:W1=h5r;_p.exports=W1});var Ip=s((Xme,Tp)=>{"use strict";var q5r=Kr(),b5r=typeof Int32Array=="function";function w5r(r){return b5r&&r instanceof Int32Array||q5r(r)==="[object Int32Array]"}Tp.exports=w5r});var U0=s((Jme,Rp)=>{"use strict";var E5r=Ip();Rp.exports=E5r});var ya=s((Yme,Lp)=>{"use strict";var N5r=2147483647;Lp.exports=N5r});var Fp=s((Zme,Pp)=>{"use strict";var S5r=-2147483648;Pp.exports=S5r});var jp=s(($me,xp)=>{"use strict";var O5r=typeof Int32Array=="function"?Int32Array:null;xp.exports=O5r});var kp=s((Qme,Bp)=>{"use strict";var A5r=U0(),_5r=ya(),T5r=Fp(),Mp=jp();function I5r(){var r,e;if(typeof Mp!="function")return!1;try{e=new Mp([1,3.14,-3.14,_5r+1]),r=A5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===T5r}catch{r=!1}return r}Bp.exports=I5r});var Vp=s((Kme,Cp)=>{"use strict";var R5r=kp();Cp.exports=R5r});var Gp=s((rye,Up)=>{"use strict";var L5r=typeof Int32Array=="function"?Int32Array:void 0;Up.exports=L5r});var Hp=s((eye,Dp)=>{"use strict";function P5r(){throw new Error("not implemented")}Dp.exports=P5r});var ni=s((tye,zp)=>{"use strict";var F5r=Vp(),x5r=Gp(),j5r=Hp(),X1;F5r()?X1=x5r:X1=j5r;zp.exports=X1});var Xp=s((iye,Wp)=>{"use strict";var M5r=Kr(),B5r=typeof Uint16Array=="function";function k5r(r){return B5r&&r instanceof Uint16Array||M5r(r)==="[object Uint16Array]"}Wp.exports=k5r});var Yp=s((aye,Jp)=>{"use strict";var C5r=Xp();Jp.exports=C5r});var $p=s((nye,Zp)=>{"use strict";var V5r=65535;Zp.exports=V5r});var Kp=s((sye,Qp)=>{"use strict";var U5r=typeof Uint16Array=="function"?Uint16Array:null;Qp.exports=U5r});var t7=s((uye,e7)=>{"use strict";var G5r=Yp(),J1=$p(),r7=Kp();function D5r(){var r,e;if(typeof r7!="function")return!1;try{e=[1,3.14,-3.14,J1+1,J1+2],e=new r7(e),r=G5r(e)&&e[0]===1&&e[1]===3&&e[2]===J1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}e7.exports=D5r});var a7=s((oye,i7)=>{"use strict";var H5r=t7();i7.exports=H5r});var s7=s((vye,n7)=>{"use strict";var z5r=typeof Uint16Array=="function"?Uint16Array:void 0;n7.exports=z5r});var o7=s((fye,u7)=>{"use strict";function W5r(){throw new Error("not implemented")}u7.exports=W5r});var zi=s((cye,v7)=>{"use strict";var X5r=a7(),J5r=s7(),Y5r=o7(),Y1;X5r()?Y1=J5r:Y1=Y5r;v7.exports=Y1});var c7=s((lye,f7)=>{"use strict";var Z5r=Kr(),$5r=typeof Int16Array=="function";function Q5r(r){return $5r&&r instanceof Int16Array||Z5r(r)==="[object Int16Array]"}f7.exports=Q5r});var p7=s((pye,l7)=>{"use strict";var K5r=c7();l7.exports=K5r});var g7=s((dye,d7)=>{"use strict";var r8r=32767;d7.exports=r8r});var y7=s((gye,m7)=>{"use strict";var e8r=-32768;m7.exports=e8r});var q7=s((mye,h7)=>{"use strict";var t8r=typeof Int16Array=="function"?Int16Array:null;h7.exports=t8r});var E7=s((yye,w7)=>{"use strict";var i8r=p7(),a8r=g7(),n8r=y7(),b7=q7();function s8r(){var r,e;if(typeof b7!="function")return!1;try{e=new b7([1,3.14,-3.14,a8r+1]),r=i8r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===n8r}catch{r=!1}return r}w7.exports=s8r});var S7=s((hye,N7)=>{"use strict";var u8r=E7();N7.exports=u8r});var A7=s((qye,O7)=>{"use strict";var o8r=typeof Int16Array=="function"?Int16Array:void 0;O7.exports=o8r});var T7=s((bye,_7)=>{"use strict";function v8r(){throw new Error("not implemented")}_7.exports=v8r});var ha=s((wye,I7)=>{"use strict";var f8r=S7(),c8r=A7(),l8r=T7(),Z1;f8r()?Z1=c8r:Z1=l8r;I7.exports=Z1});var L7=s((Eye,R7)=>{"use strict";var p8r=Kr(),d8r=typeof Uint8Array=="function";function g8r(r){return d8r&&r instanceof Uint8Array||p8r(r)==="[object Uint8Array]"}R7.exports=g8r});var F7=s((Nye,P7)=>{"use strict";var m8r=L7();P7.exports=m8r});var j7=s((Sye,x7)=>{"use strict";var y8r=255;x7.exports=y8r});var B7=s((Oye,M7)=>{"use strict";var h8r=typeof Uint8Array=="function"?Uint8Array:null;M7.exports=h8r});var V7=s((Aye,C7)=>{"use strict";var q8r=F7(),$1=j7(),k7=B7();function b8r(){var r,e;if(typeof k7!="function")return!1;try{e=[1,3.14,-3.14,$1+1,$1+2],e=new k7(e),r=q8r(e)&&e[0]===1&&e[1]===3&&e[2]===$1-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}C7.exports=b8r});var G7=s((_ye,U7)=>{"use strict";var w8r=V7();U7.exports=w8r});var H7=s((Tye,D7)=>{"use strict";var E8r=typeof Uint8Array=="function"?Uint8Array:void 0;D7.exports=E8r});var W7=s((Iye,z7)=>{"use strict";function N8r(){throw new Error("not implemented")}z7.exports=N8r});var tt=s((Rye,X7)=>{"use strict";var S8r=G7(),O8r=H7(),A8r=W7(),Q1;S8r()?Q1=O8r:Q1=A8r;X7.exports=Q1});var Y7=s((Lye,J7)=>{"use strict";var _8r=Kr(),T8r=typeof Uint8ClampedArray=="function";function I8r(r){return T8r&&r instanceof Uint8ClampedArray||_8r(r)==="[object Uint8ClampedArray]"}J7.exports=I8r});var $7=s((Pye,Z7)=>{"use strict";var R8r=Y7();Z7.exports=R8r});var K7=s((Fye,Q7)=>{"use strict";var L8r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Q7.exports=L8r});var t9=s((xye,e9)=>{"use strict";var P8r=$7(),r9=K7();function F8r(){var r,e;if(typeof r9!="function")return!1;try{e=new r9([-1,0,1,3.14,4.99,255,256]),r=P8r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}e9.exports=F8r});var a9=s((jye,i9)=>{"use strict";var x8r=t9();i9.exports=x8r});var s9=s((Mye,n9)=>{"use strict";var j8r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;n9.exports=j8r});var o9=s((Bye,u9)=>{"use strict";function M8r(){throw new Error("not implemented")}u9.exports=M8r});var qa=s((kye,v9)=>{"use strict";var B8r=a9(),k8r=s9(),C8r=o9(),K1;B8r()?K1=k8r:K1=C8r;v9.exports=K1});var c9=s((Cye,f9)=>{"use strict";var V8r=Kr(),U8r=typeof Int8Array=="function";function G8r(r){return U8r&&r instanceof Int8Array||V8r(r)==="[object Int8Array]"}f9.exports=G8r});var p9=s((Vye,l9)=>{"use strict";var D8r=c9();l9.exports=D8r});var g9=s((Uye,d9)=>{"use strict";var H8r=127;d9.exports=H8r});var y9=s((Gye,m9)=>{"use strict";var z8r=-128;m9.exports=z8r});var q9=s((Dye,h9)=>{"use strict";var W8r=typeof Int8Array=="function"?Int8Array:null;h9.exports=W8r});var E9=s((Hye,w9)=>{"use strict";var X8r=p9(),J8r=g9(),Y8r=y9(),b9=q9();function Z8r(){var r,e;if(typeof b9!="function")return!1;try{e=new b9([1,3.14,-3.14,J8r+1]),r=X8r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Y8r}catch{r=!1}return r}w9.exports=Z8r});var S9=s((zye,N9)=>{"use strict";var $8r=E9();N9.exports=$8r});var A9=s((Wye,O9)=>{"use strict";var Q8r=typeof Int8Array=="function"?Int8Array:void 0;O9.exports=Q8r});var T9=s((Xye,_9)=>{"use strict";function K8r(){throw new Error("not implemented")}_9.exports=K8r});var ba=s((Jye,I9)=>{"use strict";var rpr=S9(),epr=A9(),tpr=T9(),r2;rpr()?r2=epr:r2=tpr;I9.exports=r2});var e2=s((Yye,R9)=>{"use strict";function ipr(r){return typeof r=="number"}R9.exports=ipr});var P9=s((Zye,L9)=>{"use strict";L9.exports=Number});var G0=s(($ye,F9)=>{"use strict";var apr=P9();F9.exports=apr});var j9=s((Qye,x9)=>{"use strict";var npr=G0(),spr=npr.prototype.toString;x9.exports=spr});var B9=s((Kye,M9)=>{"use strict";var upr=j9();function opr(r){try{return upr.call(r),!0}catch{return!1}}M9.exports=opr});var t2=s((rhe,k9)=>{"use strict";var vpr=da(),fpr=Kr(),cpr=G0(),lpr=B9(),ppr=vpr();function dpr(r){return typeof r=="object"?r instanceof cpr?!0:ppr?lpr(r):fpr(r)==="[object Number]":!1}k9.exports=dpr});var V9=s((ehe,C9)=>{"use strict";var gpr=e2(),mpr=t2();function ypr(r){return gpr(r)||mpr(r)}C9.exports=ypr});var Er=s((the,G9)=>{"use strict";var U9=G(),i2=V9(),hpr=e2(),qpr=t2();U9(i2,"isPrimitive",hpr);U9(i2,"isObject",qpr);G9.exports=i2});var Ir=s((ihe,D9)=>{"use strict";var bpr=G0(),wpr=bpr.NEGATIVE_INFINITY;D9.exports=wpr});var a2=s((ahe,H9)=>{"use strict";var Epr=hr(),Npr=Ir(),Spr=we();function Opr(r){return r<Epr&&r>Npr&&Spr(r)}H9.exports=Opr});var n2=s((nhe,z9)=>{"use strict";var Apr=Er().isPrimitive,_pr=a2();function Tpr(r){return Apr(r)&&_pr(r)}z9.exports=Tpr});var s2=s((she,W9)=>{"use strict";var Ipr=Er().isObject,Rpr=a2();function Lpr(r){return Ipr(r)&&Rpr(r.valueOf())}W9.exports=Lpr});var J9=s((uhe,X9)=>{"use strict";var Ppr=n2(),Fpr=s2();function xpr(r){return Ppr(r)||Fpr(r)}X9.exports=xpr});var ye=s((ohe,Z9)=>{"use strict";var Y9=G(),u2=J9(),jpr=n2(),Mpr=s2();Y9(u2,"isPrimitive",jpr);Y9(u2,"isObject",Mpr);Z9.exports=u2});var o2=s((vhe,$9)=>{"use strict";var Bpr=ye().isPrimitive;function kpr(r){return Bpr(r)&&r>=0}$9.exports=kpr});var v2=s((fhe,Q9)=>{"use strict";var Cpr=ye().isObject;function Vpr(r){return Cpr(r)&&r.valueOf()>=0}Q9.exports=Vpr});var rd=s((che,K9)=>{"use strict";var Upr=o2(),Gpr=v2();function Dpr(r){return Upr(r)||Gpr(r)}K9.exports=Dpr});var be=s((lhe,td)=>{"use strict";var ed=G(),f2=rd(),Hpr=o2(),zpr=v2();ed(f2,"isPrimitive",Hpr);ed(f2,"isObject",zpr);td.exports=f2});var c2=s((phe,id)=>{"use strict";var Wpr=4294967295;id.exports=Wpr});var nd=s((dhe,ad)=>{"use strict";var Xpr=we(),Jpr=c2();function Ypr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Xpr(r.length)&&r.length>=0&&r.length<=Jpr}ad.exports=Ypr});var Wi=s((ghe,sd)=>{"use strict";var Zpr=nd();sd.exports=Zpr});var od=s((mhe,ud)=>{"use strict";var $pr=Kr(),Qpr=typeof ArrayBuffer=="function";function Kpr(r){return Qpr&&r instanceof ArrayBuffer||$pr(r)==="[object ArrayBuffer]"}ud.exports=Kpr});var D0=s((yhe,vd)=>{"use strict";var r7r=od();vd.exports=r7r});var cd=s((hhe,fd)=>{"use strict";var e7r=qe();function t7r(r){return typeof r=="object"&&r!==null&&!e7r(r)}fd.exports=t7r});var H0=s((qhe,ld)=>{"use strict";var i7r=cd();ld.exports=i7r});var dd=s((bhe,pd)=>{"use strict";function a7r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}pd.exports=a7r});var md=s((whe,gd)=>{"use strict";function n7r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}gd.exports=n7r});var wd=s((Ehe,bd)=>{"use strict";var yd=Er().isPrimitive,hd=ii(),An=G(),qd=C(),s7r=dd(),u7r=md();function Xi(r,e){if(!(this instanceof Xi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!yd(r))throw new TypeError(qd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!yd(e))throw new TypeError(qd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return hd(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),hd(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}An(Xi,"BYTES_PER_ELEMENT",8);An(Xi.prototype,"BYTES_PER_ELEMENT",8);An(Xi.prototype,"byteLength",16);An(Xi.prototype,"toString",s7r);An(Xi.prototype,"toJSON",u7r);bd.exports=Xi});var wa=s((Nhe,Ed)=>{"use strict";var o7r=wd();Ed.exports=o7r});var Sd=s((She,Nd)=>{"use strict";var v7r=typeof Math.fround=="function"?Math.fround:null;Nd.exports=v7r});var _d=s((Ohe,Ad)=>{"use strict";var f7r=et(),Od=new f7r(1);function c7r(r){return Od[0]=r,Od[0]}Ad.exports=c7r});var Rd=s((Ahe,Id)=>{"use strict";var Td=Sd(),l7r=_d(),l2;typeof Td=="function"?l2=Td:l2=l7r;Id.exports=l2});var Pd=s((_he,Ld)=>{"use strict";function p7r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Ld.exports=p7r});var xd=s((The,Fd)=>{"use strict";function d7r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Fd.exports=d7r});var Vd=s((Ihe,Cd)=>{"use strict";var jd=Er().isPrimitive,Md=ii(),_n=G(),Bd=Rd(),kd=C(),g7r=Pd(),m7r=xd();function Ji(r,e){if(!(this instanceof Ji))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!jd(r))throw new TypeError(kd("invalid argument. Real component must be a number. Value: `%s`.",r));if(!jd(e))throw new TypeError(kd("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Md(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Bd(r)}),Md(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Bd(e)}),this}_n(Ji,"BYTES_PER_ELEMENT",4);_n(Ji.prototype,"BYTES_PER_ELEMENT",4);_n(Ji.prototype,"byteLength",8);_n(Ji.prototype,"toString",g7r);_n(Ji.prototype,"toJSON",m7r);Cd.exports=Ji});var Ea=s((Rhe,Ud)=>{"use strict";var y7r=Vd();Ud.exports=y7r});var Dd=s((Lhe,Gd)=>{"use strict";var h7r=wa(),q7r=Ea();function b7r(r){return r instanceof h7r||r instanceof q7r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}Gd.exports=b7r});var Je=s((Phe,Hd)=>{"use strict";var w7r=Dd();Hd.exports=w7r});var Wd=s((Fhe,zd)=>{"use strict";var E7r=we();function N7r(r){return E7r(r/2)}zd.exports=N7r});var z0=s((xhe,Xd)=>{"use strict";var S7r=Wd();Xd.exports=S7r});var Yd=s((jhe,Jd)=>{"use strict";var O7r=vr(),W0=R1();function A7r(){return typeof W0=="function"&&typeof W0("foo")=="symbol"&&O7r(W0,"iterator")&&typeof W0.iterator=="symbol"}Jd.exports=A7r});var X0=s((Mhe,Zd)=>{"use strict";var _7r=Yd();Zd.exports=_7r});var Qd=s((Bhe,$d)=>{"use strict";var T7r=X0(),I7r=T7r()?Symbol.iterator:null;$d.exports=I7r});var Tn=s((khe,Kd)=>{"use strict";var R7r=Qd();Kd.exports=R7r});var eg=s((Che,rg)=>{"use strict";var L7r=ii();function P7r(r,e,t){L7r(r,e,{configurable:!1,enumerable:!1,get:t})}rg.exports=P7r});var qr=s((Vhe,tg)=>{"use strict";var F7r=eg();tg.exports=F7r});var ag=s((Uhe,ig)=>{"use strict";function x7r(r){return r.re}ig.exports=x7r});var si=s((Ghe,ng)=>{"use strict";var j7r=ag();ng.exports=j7r});var ug=s((Dhe,sg)=>{"use strict";function M7r(r){return r.im}sg.exports=M7r});var ui=s((Hhe,og)=>{"use strict";var B7r=ug();og.exports=B7r});var fg=s((zhe,vg)=>{"use strict";var k7r=et();function C7r(r,e){return new k7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}vg.exports=C7r});var Na=s((Whe,cg)=>{"use strict";var V7r=fg();cg.exports=V7r});var pg=s((Xhe,lg)=>{"use strict";var U7r=ge();function G7r(r,e){return new U7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}lg.exports=G7r});var Sa=s((Jhe,dg)=>{"use strict";var D7r=pg();dg.exports=D7r});var yg=s((Yhe,mg)=>{"use strict";var gg={float64:H7r,float32:z7r,int32:W7r,int16:X7r,int8:J7r,uint32:Y7r,uint16:Z7r,uint8:$7r,uint8c:Q7r,generic:K7r,default:r9r};function H7r(r,e){return r[e]}function z7r(r,e){return r[e]}function W7r(r,e){return r[e]}function X7r(r,e){return r[e]}function J7r(r,e){return r[e]}function Y7r(r,e){return r[e]}function Z7r(r,e){return r[e]}function $7r(r,e){return r[e]}function Q7r(r,e){return r[e]}function K7r(r,e){return r[e]}function r9r(r,e){return r[e]}function e9r(r){var e=gg[r];return typeof e=="function"?e:gg.default}mg.exports=e9r});var Oa=s((Zhe,hg)=>{"use strict";var t9r=yg();hg.exports=t9r});var wg=s(($he,bg)=>{"use strict";var qg={complex128:i9r,complex64:a9r,default:n9r};function i9r(r,e){return r.get(e)}function a9r(r,e){return r.get(e)}function n9r(r,e){return r.get(e)}function s9r(r){var e=qg[r];return typeof e=="function"?e:qg.default}bg.exports=s9r});var Yi=s((Qhe,Eg)=>{"use strict";var u9r=wg();Eg.exports=u9r});var Sg=s((Khe,Ng)=>{"use strict";var o9r=Wi(),v9r=Je(),f9r=si(),c9r=ui(),l9r=C();function p9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,o9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(v9r(i))e.push(f9r(i),c9r(i));else return new TypeError(l9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Ng.exports=p9r});var Ag=s((rqe,Og)=>{"use strict";var d9r=Wi(),g9r=Je(),m9r=si(),y9r=ui(),h9r=C();function q9r(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),d9r(n)&&n.length>=2)i.push(n[0],n[1]);else if(g9r(n))i.push(m9r(n),y9r(n));else return new TypeError(h9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Og.exports=q9r});var Tg=s((eqe,_g)=>{"use strict";var b9r=Je(),w9r=si(),E9r=ui();function N9r(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!b9r(i))return null;r[n]=w9r(i),r[n+1]=E9r(i),n+=2}return r}_g.exports=N9r});var Bg=s((tqe,Mg)=>{"use strict";var In=be().isPrimitive,Ig=Wi(),d2=Be(),Rg=D0(),Lg=H0(),S9r=qe(),Zi=yr(),Aa=Je(),J0=z0(),p2=we(),O9r=X0(),_a=Tn(),Ee=G(),$0=qr(),Ge=et(),Pg=Ea(),Yr=C(),Y0=si(),Z0=ui(),A9r=Na(),_9r=Sa(),T9r=Oa(),I9r=Yi(),Fg=Sg(),R9r=Ag(),L9r=Tg(),ke=Ge.BYTES_PER_ELEMENT*2,xg=O9r();function Ta(r){return r instanceof re||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function jg(r){return r===re||r.name==="Complex128Array"}function P9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===ke}function F9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===ke*2}function re(){var r,e,t,i;if(e=arguments.length,!(this instanceof re))return e===0?new re:e===1?new re(arguments[0]):e===2?new re(arguments[0],arguments[1]):new re(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ge(0);else if(e===1)if(In(arguments[0]))t=new Ge(arguments[0]*2);else if(d2(arguments[0]))if(t=arguments[0],i=t.length,i&&S9r(t)&&Aa(t[0])){if(t=L9r(new Ge(i*2),t),t===null){if(!J0(i))throw new RangeError(Yr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ge(arguments[0])}}else{if(P9r(t))t=A9r(t,0);else if(F9r(t))t=_9r(t,0);else if(!J0(i))throw new RangeError(Yr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ge(t)}else if(Rg(arguments[0])){if(t=arguments[0],!p2(t.byteLength/ke))throw new RangeError(Yr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ke,t.byteLength));t=new Ge(t)}else if(Lg(arguments[0])){if(t=arguments[0],xg===!1)throw new TypeError(Yr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Zi(t[_a]))throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[_a](),!Zi(t.next))throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Fg(t),t instanceof Error)throw t;t=new Ge(t)}else throw new TypeError(Yr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Rg(t))throw new TypeError(Yr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!In(r))throw new TypeError(Yr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!p2(r/ke))throw new RangeError(Yr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ke,r));if(e===2){if(i=t.byteLength-r,!p2(i/ke))throw new RangeError(Yr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ke,i));t=new Ge(t,r)}else{if(i=arguments[2],!In(i))throw new TypeError(Yr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*ke>t.byteLength-r)throw new RangeError(Yr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*ke));t=new Ge(t,r,i*2)}}return Ee(this,"_buffer",t),Ee(this,"_length",t.length/2),this}Ee(re,"BYTES_PER_ELEMENT",ke);Ee(re,"name","Complex64Array");Ee(re,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!Zi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!Zi(a))throw new TypeError(Yr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Ta(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),Aa(l))u[m]=Y0(l),u[m+1]=Z0(l);else if(Ig(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Yr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(d2(e)){if(a){for(f=e.length,e.get&&e.set?v=I9r("default"):v=T9r("default"),p=0;p<f;p++)if(!Aa(v(e,p))){c=!0;break}if(c){if(!J0(f))throw new RangeError(Yr("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),Aa(l))u[m]=Y0(l),u[m+1]=Z0(l);else if(Ig(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Yr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Lg(e)&&xg&&Zi(e[_a])){if(u=e[_a](),!Zi(u.next))throw new TypeError(Yr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=R9r(u,a,t):o=Fg(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Yr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Ee(re,"of",function(){var e,t;if(!Zi(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});$0(re.prototype,"buffer",function(){return this._buffer.buffer});$0(re.prototype,"byteLength",function(){return this._buffer.byteLength});$0(re.prototype,"byteOffset",function(){return this._buffer.byteOffset});Ee(re.prototype,"BYTES_PER_ELEMENT",re.BYTES_PER_ELEMENT);Ee(re.prototype,"copyWithin",function(e,t){if(!Ta(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Ee(re.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Ta(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Ee(i,"next",v),Ee(i,"return",f),_a&&Ee(i,_a,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new Pg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Ee(re.prototype,"get",function(e){var t;if(!Ta(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!In(e))throw new TypeError(Yr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Pg(t[e],t[e+1])});$0(re.prototype,"length",function(){return this._length});Ee(re.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Ta(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!In(i))throw new TypeError(Yr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Aa(e)){if(i>=this._length)throw new RangeError(Yr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=Y0(e),a[i+1]=Z0(e);return}if(Ta(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*ke,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new Ge(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(d2(e)){for(o=e.length,f=0;f<o;f++)if(!Aa(e[f])){u=!0;break}if(u){if(!J0(o))throw new RangeError(Yr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*ke,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new Ge(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=Y0(v),a[i+1]=Z0(v),i+=2;return}throw new TypeError(Yr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Mg.exports=re});var Ia=s((iqe,kg)=>{"use strict";var x9r=Bg();kg.exports=x9r});var Vg=s((aqe,Cg)=>{"use strict";function j9r(r){return r.re}Cg.exports=j9r});var it=s((nqe,Ug)=>{"use strict";var M9r=Vg();Ug.exports=M9r});var Dg=s((sqe,Gg)=>{"use strict";function B9r(r){return r.im}Gg.exports=B9r});var at=s((uqe,Hg)=>{"use strict";var k9r=Dg();Hg.exports=k9r});var Wg=s((oqe,zg)=>{"use strict";var C9r=Wi(),V9r=Je(),U9r=C(),G9r=it(),D9r=at();function H9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,C9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(V9r(i))e.push(G9r(i),D9r(i));else return new TypeError(U9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}zg.exports=H9r});var Jg=s((vqe,Xg)=>{"use strict";var z9r=Wi(),W9r=Je(),X9r=C(),J9r=it(),Y9r=at();function Z9r(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),z9r(n)&&n.length>=2)i.push(n[0],n[1]);else if(W9r(n))i.push(J9r(n),Y9r(n));else return new TypeError(X9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Xg.exports=Z9r});var Zg=s((fqe,Yg)=>{"use strict";var $9r=Je(),Q9r=it(),K9r=at();function rdr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!$9r(i))return null;r[n]=Q9r(i),r[n+1]=K9r(i),n+=2}return r}Yg.exports=rdr});var nm=s((cqe,am)=>{"use strict";var Rn=be().isPrimitive,$g=Wi(),m2=Be(),Qg=D0(),Kg=H0(),edr=qe(),$i=yr(),Ra=Je(),Q0=z0(),g2=we(),tdr=X0(),La=Tn(),Ne=G(),es=qr(),De=ge(),rm=wa(),K0=it(),rs=at(),idr=Na(),adr=Sa(),ndr=Oa(),sdr=Yi(),Zr=C(),em=Wg(),udr=Jg(),odr=Zg(),Ce=De.BYTES_PER_ELEMENT*2,tm=tdr();function Pa(r){return r instanceof ee||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function im(r){return r===ee||r.name==="Complex64Array"}function vdr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ce/2}function fdr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ce}function ee(){var r,e,t,i;if(e=arguments.length,!(this instanceof ee))return e===0?new ee:e===1?new ee(arguments[0]):e===2?new ee(arguments[0],arguments[1]):new ee(arguments[0],arguments[1],arguments[2]);if(e===0)t=new De(0);else if(e===1)if(Rn(arguments[0]))t=new De(arguments[0]*2);else if(m2(arguments[0]))if(t=arguments[0],i=t.length,i&&edr(t)&&Ra(t[0])){if(t=odr(new De(i*2),t),t===null){if(!Q0(i))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(arguments[0])}}else{if(vdr(t))t=idr(t,0);else if(fdr(t))t=adr(t,0);else if(!Q0(i))throw new RangeError(Zr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(t)}else if(Qg(arguments[0])){if(t=arguments[0],!g2(t.byteLength/Ce))throw new RangeError(Zr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ce,t.byteLength));t=new De(t)}else if(Kg(arguments[0])){if(t=arguments[0],tm===!1)throw new TypeError(Zr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!$i(t[La]))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[La](),!$i(t.next))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=em(t),t instanceof Error)throw t;t=new De(t)}else throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Qg(t))throw new TypeError(Zr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Rn(r))throw new TypeError(Zr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!g2(r/Ce))throw new RangeError(Zr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ce,r));if(e===2){if(i=t.byteLength-r,!g2(i/Ce))throw new RangeError(Zr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ce,i));t=new De(t,r)}else{if(i=arguments[2],!Rn(i))throw new TypeError(Zr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ce>t.byteLength-r)throw new RangeError(Zr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ce));t=new De(t,r,i*2)}}return Ne(this,"_buffer",t),Ne(this,"_length",t.length/2),this}Ne(ee,"BYTES_PER_ELEMENT",Ce);Ne(ee,"name","Complex128Array");Ne(ee,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!$i(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!im(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!$i(a))throw new TypeError(Zr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Pa(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),Ra(l))u[m]=K0(l),u[m+1]=rs(l);else if($g(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(m2(e)){if(a){for(f=e.length,e.get&&e.set?v=sdr("default"):v=ndr("default"),p=0;p<f;p++)if(!Ra(v(e,p))){c=!0;break}if(c){if(!Q0(f))throw new RangeError(Zr("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),Ra(l))u[m]=K0(l),u[m+1]=rs(l);else if($g(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Kg(e)&&tm&&$i(e[La])){if(u=e[La](),!$i(u.next))throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=udr(u,a,t):o=em(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Ne(ee,"of",function(){var e,t;if(!$i(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!im(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});es(ee.prototype,"buffer",function(){return this._buffer.buffer});es(ee.prototype,"byteLength",function(){return this._buffer.byteLength});es(ee.prototype,"byteOffset",function(){return this._buffer.byteOffset});Ne(ee.prototype,"BYTES_PER_ELEMENT",ee.BYTES_PER_ELEMENT);Ne(ee.prototype,"copyWithin",function(e,t){if(!Pa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Ne(ee.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Pa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Ne(i,"next",v),Ne(i,"return",f),La&&Ne(i,La,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new rm(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Ne(ee.prototype,"get",function(e){var t;if(!Pa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Rn(e))throw new TypeError(Zr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new rm(t[e],t[e+1])});es(ee.prototype,"length",function(){return this._length});Ne(ee.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Pa(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Rn(i))throw new TypeError(Zr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Ra(e)){if(i>=this._length)throw new RangeError(Zr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=K0(e),a[i+1]=rs(e);return}if(Pa(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ce,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(m2(e)){for(o=e.length,f=0;f<o;f++)if(!Ra(e[f])){u=!0;break}if(u){if(!Q0(o))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ce,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=K0(v),a[i+1]=rs(v),i+=2;return}throw new TypeError(Zr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});am.exports=ee});var Fa=s((lqe,sm)=>{"use strict";var cdr=nm();sm.exports=cdr});var om=s((pqe,um)=>{"use strict";var ldr=ge(),pdr=et(),ddr=me(),gdr=ni(),mdr=zi(),ydr=ha(),hdr=tt(),qdr=qa(),bdr=ba(),wdr=Ia(),Edr=Fa(),Ndr=[ldr,pdr,gdr,ddr,ydr,mdr,bdr,hdr,qdr,wdr,Edr];um.exports=Ndr});var fm=s((dqe,vm)=>{"use strict";var Sdr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];vm.exports=Sdr});var pm=s((gqe,lm)=>{"use strict";var Odr=Hi(),Adr=qe(),_dr=yt(),Tdr=F8(),Idr=om(),cm=fm(),Rdr=cm.length;function Ldr(r){var e;if(Adr(r))return"generic";if(Odr(r))return null;for(e=0;e<Rdr;e++)if(r instanceof Idr[e])return cm[e];return Tdr[_dr(r)]||null}lm.exports=Ldr});var xa=s((mqe,dm)=>{"use strict";var Pdr=pm();dm.exports=Pdr});var ym=s((yqe,mm)=>{"use strict";var gm=yr(),Fdr=Be(),xdr=q8(),jdr=ga(),Mdr=C0(),Bdr=V0(),kdr=xa(),y2=C();function Cdr(){var r,e,t,i,a,n,u,o,v;if(r=arguments[0],arguments.length>1)if(Fdr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!gm(t))throw new TypeError(y2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!gm(t))throw new TypeError(y2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!xdr(r))throw new TypeError(y2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(a=i.length,u=kdr(i),jdr(i)?n=Mdr(u):n=Bdr(u),t){for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,t.call(e,v.value,o));return i}for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,v.value);return i}mm.exports=Cdr});var qm=s((hqe,hm)=>{"use strict";var Vdr=ym();hm.exports=Vdr});var wm=s((qqe,bm)=>{"use strict";function Udr(r){return r!==r}bm.exports=Udr});var W=s((bqe,Em)=>{"use strict";var Gdr=wm();Em.exports=Gdr});var Sm=s((wqe,Nm)=>{"use strict";var Ddr={Complex64:"complex64",Complex128:"complex128"};Nm.exports=Ddr});var Am=s((Eqe,Om)=>{"use strict";var Hdr=Ea(),zdr=wa(),Wdr=[Hdr,zdr];Om.exports=Wdr});var Tm=s((Nqe,_m)=>{"use strict";var Xdr=["complex64","complex128"];_m.exports=Xdr});var Lm=s((Sqe,Rm)=>{"use strict";var Jdr=yt(),Ydr=Sm(),Zdr=Am(),Im=Tm(),$dr=Im.length;function Qdr(r){var e;for(e=0;e<$dr;e++)if(r instanceof Zdr[e])return Im[e];return Ydr[Jdr(r)]||null}Rm.exports=Qdr});var h2=s((Oqe,Pm)=>{"use strict";var Kdr=Lm();Pm.exports=Kdr});var xm=s((Aqe,Fm)=>{"use strict";var rgr=ge(),egr=et(),tgr=Fa(),igr=Ia(),agr={float64:rgr,float32:egr,complex128:tgr,complex64:igr};Fm.exports=agr});var Mm=s((_qe,jm)=>{"use strict";var ngr=xm();function sgr(r){return ngr[r]||null}jm.exports=sgr});var km=s((Tqe,Bm)=>{"use strict";var ugr=Mm();Bm.exports=ugr});var Vm=s((Iqe,Cm)=>{"use strict";function ogr(r,e,t,i){var a,n,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(a=[r],i?n=t-1:n=t,u=(e-r)/n,o=1;o<n;o++)a.push(r+u*o);return i&&a.push(e),a}Cm.exports=ogr});var Wm=s((Rqe,zm)=>{"use strict";var vgr=Ea(),fgr=wa(),Um=it(),Gm=at(),Dm=si(),Hm=ui();function cgr(r,e,t,i,a,n){var u,o,v,f,c,l,p,m,y,g,d,h,q;if(a===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Dm(e),l=Hm(e)):(f=Um(e),l=Gm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Dm(i),p=Hm(i)):(c=Um(i),p=Gm(i)),o===2?u=vgr:u=fgr,a===1)return n?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],n?h=a-1:h=a,g=(c-f)/h,d=(p-l)/h,q=1;q<h;q++)m=f+g*q,y=l+d*q,v.push(new u(m,y));return n&&v.push(new u(c,p)),v}zm.exports=cgr});var q2=s((Lqe,Xm)=>{"use strict";function lgr(r,e,t,i,a){var n,u,o;if(i===0)return r;if(i===1)return a?r[0]=t:r[0]=e,r;for(r[0]=e,a?n=i-1:n=i,u=(t-e)/n,o=1;o<n;o++)r[o]=e+u*o;return a&&(r[n]=t),r}Xm.exports=lgr});var b2=s((Pqe,Qm)=>{"use strict";var Jm=it(),Ym=at(),Zm=si(),$m=ui();function pgr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g;if(n===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=Zm(t),f=$m(t)):(o=Jm(t),f=Ym(t)),i==="float64"?(v=a,c=0):i==="complex64"?(v=Zm(a),c=$m(a)):(v=Jm(a),c=Ym(a)),n===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=n-1:m=n,l=(v-o)/m,p=(c-f)/m,g=2,y=1;y<m;y++)r[g]=o+l*y,r[g+1]=f+p*y,g+=2;return u&&(r[g]=v,r[g+1]=c),r}Qm.exports=pgr});var ry=s((Fqe,Km)=>{"use strict";var dgr=Object;Km.exports=dgr});var ja=s((xqe,ey)=>{"use strict";var ggr=ry();ey.exports=ggr});var iy=s((jqe,ty)=>{"use strict";var mgr=Object.getPrototypeOf;ty.exports=mgr});var ny=s((Mqe,ay)=>{"use strict";function ygr(r){return r.__proto__}ay.exports=ygr});var uy=s((Bqe,sy)=>{"use strict";var hgr=Kr(),qgr=ny();function bgr(r){var e=qgr(r);return e||e===null?e:hgr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}sy.exports=bgr});var vy=s((kqe,oy)=>{"use strict";var wgr=yr(),Egr=iy(),Ngr=uy(),w2;wgr(Object.getPrototypeOf)?w2=Egr:w2=Ngr;oy.exports=w2});var cy=s((Cqe,fy)=>{"use strict";var Sgr=ja(),Ogr=vy();function Agr(r){return r==null?null:(r=Sgr(r),Ogr(r))}fy.exports=Agr});var Qi=s((Vqe,ly)=>{"use strict";var _gr=cy();ly.exports=_gr});var gy=s((Uqe,dy)=>{"use strict";var Tgr=H0(),py=yr(),Igr=Qi(),ts=vr(),Rgr=Kr(),Lgr=Object.prototype;function Pgr(r){var e;for(e in r)if(!ts(r,e))return!1;return!0}function Fgr(r){var e;return Tgr(r)?(e=Igr(r),e?!ts(r,"constructor")&&ts(e,"constructor")&&py(e.constructor)&&Rgr(e.constructor)==="[object Function]"&&ts(e,"isPrototypeOf")&&py(e.isPrototypeOf)&&(e===Lgr||Pgr(r)):!0):!1}dy.exports=Fgr});var mr=s((Gqe,my)=>{"use strict";var xgr=gy();my.exports=xgr});var E2=s((Dqe,yy)=>{"use strict";function jgr(r){return typeof r=="string"}yy.exports=jgr});var qy=s((Hqe,hy)=>{"use strict";var Mgr=String.prototype.valueOf;hy.exports=Mgr});var wy=s((zqe,by)=>{"use strict";var Bgr=qy();function kgr(r){try{return Bgr.call(r),!0}catch{return!1}}by.exports=kgr});var N2=s((Wqe,Ey)=>{"use strict";var Cgr=da(),Vgr=Kr(),Ugr=wy(),Ggr=Cgr();function Dgr(r){return typeof r=="object"?r instanceof String?!0:Ggr?Ugr(r):Vgr(r)==="[object String]":!1}Ey.exports=Dgr});var Sy=s((Xqe,Ny)=>{"use strict";var Hgr=E2(),zgr=N2();function Wgr(r){return Hgr(r)||zgr(r)}Ny.exports=Wgr});var Jr=s((Jqe,Ay)=>{"use strict";var Oy=G(),S2=Sy(),Xgr=E2(),Jgr=N2();Oy(S2,"isPrimitive",Xgr);Oy(S2,"isObject",Jgr);Ay.exports=S2});var A2=s((Yqe,Ty)=>{"use strict";var Ygr=mr(),_y=vr(),Zgr=Jr().isPrimitive,$gr=de().isPrimitive,O2=C();function Qgr(r,e){return Ygr(e)?_y(e,"dtype")&&(r.dtype=e.dtype,!Zgr(r.dtype))?new TypeError(O2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):_y(e,"endpoint")&&(r.endpoint=e.endpoint,!$gr(r.endpoint))?new TypeError(O2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(O2("invalid argument. Options argument must be an object. Value: `%s`.",e))}Ty.exports=Qgr});var _2=s((Zqe,Kgr)=>{Kgr.exports={endpoint:!0}});var jy=s(($qe,xy)=>{"use strict";var Iy=Je(),Ry=Er().isPrimitive,rmr=be().isPrimitive,Ly=W(),Py=h2(),emr=km(),tmr=Na(),imr=Sa(),Ma=C(),amr=Vm(),nmr=Wm(),smr=q2(),Fy=b2(),umr=A2(),omr=_2();function vmr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(o=Py(r),o===null){if(!Iy(r))throw new TypeError(Ma("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!Ry(r)||Ly(r))throw new TypeError(Ma("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=Py(e),v===null){if(!Iy(e))throw new TypeError(Ma("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!Ry(e)||Ly(e))throw new TypeError(Ma("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!rmr(t))throw new TypeError(Ma("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:omr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(n=umr(i,arguments[3]),n))throw n;if(i.dtype==="generic")return f?nmr(o,r,v,e,t,i.endpoint):amr(r,e,t,i.endpoint);if(a=emr(i.dtype),a===null)throw new TypeError(Ma('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new a(t),i.dtype==="complex64")return Fy(tmr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Fy(imr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return smr(u,r,e,t,i.endpoint)}xy.exports=vmr});var By=s((Qqe,My)=>{"use strict";var fmr=ga(),cmr=Oa(),lmr=V0(),pmr=Yi(),dmr=C0(),gmr=xa();function mmr(r){var e=gmr(r);return fmr(r)?{accessorProtocol:!0,accessors:[pmr(e),dmr(e)]}:{accessorProtocol:!1,accessors:[cmr(e),lmr(e)]}}My.exports=mmr});var Cy=s((Kqe,ky)=>{"use strict";var ymr=By();ky.exports=ymr});var Uy=s((rbe,Vy)=>{"use strict";var hmr=Cy();function qmr(r){var e=hmr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Vy.exports=qmr});var Ln=s((ebe,Gy)=>{"use strict";var bmr=Uy();Gy.exports=bmr});var Jy=s((tbe,Xy)=>{"use strict";var wmr=Ea(),Emr=wa(),Dy=it(),Hy=at(),zy=si(),Wy=ui();function Nmr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g,d,h,q,w,A;if(n===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=zy(t),l=Wy(t)):(f=Dy(t),l=Hy(t)),i==="float64"?(c=a,p=0):i==="complex64"?(v+=1,c=zy(a),p=Wy(a)):(c=Dy(a),p=Hy(a)),v===2?o=wmr:o=Emr,y=r.data,m=r.accessors[1],n===1)return u?m(y,0,new o(c,p)):m(y,0,new o(f,l)),r;for(m(y,0,new o(f,l)),u?w=n-1:w=n,h=(c-f)/w,q=(p-l)/w,A=1;A<w;A++)g=f+h*A,d=l+q*A,m(y,A,new o(g,d));return u&&m(y,w,new o(c,p)),r}Xy.exports=Nmr});var Zy=s((ibe,Yy)=>{"use strict";function Smr(r,e,t,i,a){var n,u,o,v,f;if(i===0)return r;if(n=r.data,u=r.accessors[1],i===1)return a?u(n,0,t):u(n,0,e),r;for(u(n,0,e),a?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(n,f,e+v*f);return a&&u(n,o,t),r}Yy.exports=Smr});var ah=s((abe,ih)=>{"use strict";var $y=Je(),Qy=Er().isPrimitive,Omr=Be(),Pn=C(),Ky=W(),rh=h2(),Amr=xa(),_mr=Na(),Tmr=Sa(),eh=Ln(),Imr=Jy(),Rmr=Zy(),th=b2(),Lmr=q2(),Pmr=A2(),Fmr=_2();function xmr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(n=rh(r),n===null){if(!$y(r))throw new TypeError(Pn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="complex128"}o=!0}else{if(!Qy(r)||Ky(r))throw new TypeError(Pn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="float64"}if(typeof e=="object"){if(u=rh(e),u===null){if(!$y(e))throw new TypeError(Pn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Qy(e)||Ky(e))throw new TypeError(Pn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Omr(t))throw new TypeError(Pn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Fmr.endpoint},arguments.length>3&&(a=Pmr(i,arguments[3]),a))throw a;if(v=Amr(t),v===null&&(v="generic"),v==="complex64")return th(_mr(t,0),n,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return th(Tmr(t,0),n,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=eh(t),Imr(f,n,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=eh(t),f.accessorProtocol?(Rmr(f,r,e,t.length,i.endpoint),t):(Lmr(t,r,e,t.length,i.endpoint),t)}ih.exports=xmr});var uh=s((nbe,sh)=>{"use strict";var jmr=G(),nh=jy(),Mmr=ah();jmr(nh,"assign",Mmr);sh.exports=nh});var vh=s((sbe,oh)=>{"use strict";var Bmr=Er().isPrimitive,kmr=Jr().isPrimitive,Cmr=de().isPrimitive,Vmr=qe(),Umr=C(),Gmr={number:Bmr,string:kmr,boolean:Cmr};function Dmr(r,e,t){var i,a,n,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],i=[],v=0;v<r.length;v++)if(o=r[v],n=e[v],u=Gmr[n],u(o))i.push([[o]]),a.push([1,1]);else if(Vmr(o))i.push(o),a.push([o.length,o[0].length]);else throw new TypeError(Umr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],n,n,String(o)));return[i,a]}oh.exports=Dmr});var is=s((ube,fh)=>{"use strict";var Hmr=vh();fh.exports=Hmr});var lh=s((obe,ch)=>{"use strict";var zmr=M0();function Wmr(r){return zmr(1,r)}ch.exports=Wmr});var dh=s((vbe,ph)=>{"use strict";var Xmr=lh();ph.exports=Xmr});var mh=s((fbe,gh)=>{"use strict";function Jmr(r,e,t){var i,a,n,u,o,v,f,c;if(i=e[1],a=e[0],!(i<=0||a<=0))for(f=r[0],c=r[1],u=0;u<a;u++)for(o=f[u],v=c[u],n=0;n<i;n++)v[n]=t(o[n])}gh.exports=Jmr});var T2=s((cbe,yh)=>{"use strict";var Ymr=mh();yh.exports=Ymr});var qh=s((lbe,hh)=>{"use strict";var Zmr=M0();function $mr(r){return Zmr(0,r)}hh.exports=$mr});var as=s((pbe,bh)=>{"use strict";var Qmr=qh();bh.exports=Qmr});var Eh=s((dbe,wh)=>{"use strict";var Se=$r(),Kmr=O1(),ryr=_1(),eyr=j0(),tyr=Nn(),iyr=M0(),ayr=w6(),nyr=B0(),syr=qm(),uyr=uh(),oyr=is(),vyr=dh(),fyr=T2(),cyr=ai(),lyr=as();function pyr(r){return Se(r,"bbinary2d",Kmr),Se(r,"bternary2d",ryr),Se(r,"broadcastShapes",eyr),Se(r,"filled",tyr),Se(r,"filled2d",iyr),Se(r,"filled2dBy",ayr),Se(r,"flatten2d",nyr),Se(r,"iterator2array",syr),Se(r,"linspace",uyr),Se(r,"normalizeBroadcastArgs",oyr),Se(r,"ones2d",vyr),Se(r,"unary2d",fyr),Se(r,"zeros",cyr),Se(r,"zeros2d",lyr),r}wh.exports=pyr});var Oh=s((gbe,Sh)=>{"use strict";var Nh=C();function dyr(r,e,t,i,a){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Nh('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(a!=="closed"&&a!=="open")throw new TypeError(Nh('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),a))}return i==="closed"||i===void 0?a==="closed"||a===void 0?r>=e&&r<=t:r>=e&&r<t:a==="closed"||a===void 0?r>e&&r<=t:r>e&&r<t}Sh.exports=dyr});var _h=s((mbe,Ah)=>{"use strict";var gyr=Oh();Ah.exports=gyr});var Ih=s((ybe,Th)=>{"use strict";var myr=Er().isPrimitive,yyr=_h(),hyr=C();function qyr(r,e,t,i,a,n){var u,o;if(!(myr(r)&&yyr(r,e,t,i,a)))throw i==="closed"?u="[":u="(",a==="closed"?o="]":o=")",new TypeError(hyr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",n,u,e,t,o,String(r)))}Th.exports=qyr});var Lh=s((hbe,Rh)=>{"use strict";var byr=Ih();Rh.exports=byr});var Fh=s((qbe,Ph)=>{"use strict";var wyr=de().isPrimitive,Eyr=C();function Nyr(r,e){if(!wyr(r))throw new TypeError(Eyr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Ph.exports=Nyr});var jh=s((bbe,xh)=>{"use strict";var Syr=Fh();xh.exports=Syr});var Bh=s((wbe,Mh)=>{"use strict";function Oyr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,e!==1&&i!==1&&i!==e||t!==1&&a!==1&&a!==t)return!1;return!0}Mh.exports=Oyr});var Ch=s((Ebe,kh)=>{"use strict";var Ayr=Bh();kh.exports=Ayr});var Uh=s((Nbe,Vh)=>{"use strict";var _yr=C(),Tyr=Ch();function Iyr(r,e,t){if(!Tyr(r,e))throw new TypeError(_yr("invalid argument. %s must be broadcast compatible.",t))}Vh.exports=Iyr});var Dh=s((Sbe,Gh)=>{"use strict";var Ryr=Uh();Gh.exports=Ryr});var zh=s((Obe,Hh)=>{"use strict";function Lyr(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,i!==1&&i!==e||a!==1&&a!==t)return!1;return!0}Hh.exports=Lyr});var Xh=s((Abe,Wh)=>{"use strict";var Pyr=zh();Wh.exports=Pyr});var Yh=s((_be,Jh)=>{"use strict";var Fyr=C(),xyr=Xh();function jyr(r,e,t,i){if(!xyr(r,e))throw new TypeError(Fyr("invalid argument. %s must be broadcast compatible with %s.",t,i))}Jh.exports=jyr});var $h=s((Tbe,Zh)=>{"use strict";var Myr=Yh();Zh.exports=Myr});var Kh=s((Ibe,Qh)=>{"use strict";function Byr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}Qh.exports=Byr});var eq=s((Rbe,rq)=>{"use strict";function kyr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}rq.exports=kyr});var ns=s((Lbe,iq)=>{"use strict";var Cyr=G(),tq=Kh(),Vyr=eq();Cyr(tq,"assign",Vyr);iq.exports=tq});var nq=s((Pbe,aq)=>{"use strict";var Uyr=ns();function Gyr(r,e,t,i){var a=Uyr(e,t,i);return a[0]>=0&&a[1]<r}aq.exports=Gyr});var I2=s((Fbe,sq)=>{"use strict";var Dyr=nq();sq.exports=Dyr});var oq=s((xbe,uq)=>{"use strict";var Hyr=I2();function zyr(r,e,t,i){if(e.length&&!Hyr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}uq.exports=zyr});var fq=s((jbe,vq)=>{"use strict";var Wyr=oq();vq.exports=Wyr});var lq=s((Mbe,cq)=>{"use strict";var Xyr=C();function Jyr(r,e){if(r===void 0)throw new Error(Xyr("invalid invocation. Must provide %s.",e))}cq.exports=Jyr});var R2=s((Bbe,pq)=>{"use strict";var Yyr=lq();pq.exports=Yyr});var gq=s((kbe,dq)=>{"use strict";var Zyr=C();function $yr(r,e,t,i){if(!(r>e))throw new TypeError(Zyr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}dq.exports=$yr});var yq=s((Cbe,mq)=>{"use strict";var Qyr=gq();mq.exports=Qyr});var qq=s((Vbe,hq)=>{"use strict";var Kyr=C();function rhr(r,e,t,i){if(!(r>=e))throw new TypeError(Kyr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}hq.exports=rhr});var wq=s((Ube,bq)=>{"use strict";var ehr=qq();bq.exports=ehr});var Nq=s((Gbe,Eq)=>{"use strict";var thr=ye().isPrimitive,ihr=C();function ahr(r,e){if(!thr(r))throw new TypeError(ihr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Eq.exports=ahr});var Oq=s((Dbe,Sq)=>{"use strict";var nhr=Nq();Sq.exports=nhr});var _q=s((Hbe,Aq)=>{"use strict";var shr=C();function uhr(r,e,t,i){if(!(r<e))throw new TypeError(shr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Aq.exports=uhr});var Iq=s((zbe,Tq)=>{"use strict";var ohr=_q();Tq.exports=ohr});var Lq=s((Wbe,Rq)=>{"use strict";var vhr=C();function fhr(r,e,t,i){if(!(r<=e))throw new TypeError(vhr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Rq.exports=fhr});var Fq=s((Xbe,Pq)=>{"use strict";var chr=Lq();Pq.exports=chr});var jq=s((Jbe,xq)=>{"use strict";var lhr=be().isPrimitive,phr=C();function dhr(r,e){if(!lhr(r))throw new TypeError(phr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}xq.exports=dhr});var Bq=s((Ybe,Mq)=>{"use strict";var ghr=jq();Mq.exports=ghr});var L2=s((Zbe,kq)=>{"use strict";var mhr=Er().isPrimitive;function yhr(r){return mhr(r)&&r>=0}kq.exports=yhr});var P2=s(($be,Cq)=>{"use strict";var hhr=Er().isObject;function qhr(r){return hhr(r)&&r.valueOf()>=0}Cq.exports=qhr});var Uq=s((Qbe,Vq)=>{"use strict";var bhr=L2(),whr=P2();function Ehr(r){return bhr(r)||whr(r)}Vq.exports=Ehr});var ss=s((Kbe,Dq)=>{"use strict";var Gq=G(),F2=Uq(),Nhr=L2(),Shr=P2();Gq(F2,"isPrimitive",Nhr);Gq(F2,"isObject",Shr);Dq.exports=F2});var zq=s((rwe,Hq)=>{"use strict";var Ohr=ss().isPrimitive,Ahr=C();function _hr(r,e){if(!Ohr(r))throw new TypeError(Ahr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Hq.exports=_hr});var Xq=s((ewe,Wq)=>{"use strict";var Thr=zq();Wq.exports=Thr});var Yq=s((twe,Jq)=>{"use strict";var Ihr=Er().isPrimitive,Rhr=C();function Lhr(r,e){if(!Ihr(r))throw new TypeError(Rhr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Jq.exports=Lhr});var $q=s((iwe,Zq)=>{"use strict";var Phr=Yq();Zq.exports=Phr});var Kq=s((awe,Qq)=>{"use strict";var Fhr=C();function xhr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Fhr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}Qq.exports=xhr});var eb=s((nwe,rb)=>{"use strict";var jhr=Kq();rb.exports=jhr});var x2=s((swe,tb)=>{"use strict";var Mhr=ye().isPrimitive;function Bhr(r){return Mhr(r)&&r>0}tb.exports=Bhr});var j2=s((uwe,ib)=>{"use strict";var khr=ye().isObject;function Chr(r){return khr(r)&&r.valueOf()>0}ib.exports=Chr});var nb=s((owe,ab)=>{"use strict";var Vhr=x2(),Uhr=j2();function Ghr(r){return Vhr(r)||Uhr(r)}ab.exports=Ghr});var nt=s((vwe,ub)=>{"use strict";var sb=G(),M2=nb(),Dhr=x2(),Hhr=j2();sb(M2,"isPrimitive",Dhr);sb(M2,"isObject",Hhr);ub.exports=M2});var vb=s((fwe,ob)=>{"use strict";var zhr=nt().isPrimitive,Whr=C();function Xhr(r,e){if(!zhr(r))throw new TypeError(Whr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}ob.exports=Xhr});var B2=s((cwe,fb)=>{"use strict";var Jhr=vb();fb.exports=Jhr});var k2=s((lwe,cb)=>{"use strict";var Yhr=Er().isPrimitive;function Zhr(r){return Yhr(r)&&r>0}cb.exports=Zhr});var C2=s((pwe,lb)=>{"use strict";var $hr=Er().isObject;function Qhr(r){return $hr(r)&&r.valueOf()>0}lb.exports=Qhr});var db=s((dwe,pb)=>{"use strict";var Khr=k2(),rqr=C2();function eqr(r){return Khr(r)||rqr(r)}pb.exports=eqr});var Ur=s((gwe,mb)=>{"use strict";var gb=G(),V2=db(),tqr=k2(),iqr=C2();gb(V2,"isPrimitive",tqr);gb(V2,"isObject",iqr);mb.exports=V2});var hb=s((mwe,yb)=>{"use strict";var aqr=Ur().isPrimitive,nqr=C();function sqr(r,e){if(!aqr(r))throw new TypeError(nqr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}yb.exports=sqr});var bb=s((ywe,qb)=>{"use strict";var uqr=hb();qb.exports=uqr});var U2=s((hwe,wb)=>{"use strict";var oqr=Er().isPrimitive;function vqr(r){return oqr(r)&&r>=0&&r<=1}wb.exports=vqr});var G2=s((qwe,Eb)=>{"use strict";var fqr=Er().isObject;function cqr(r){return fqr(r)&&r.valueOf()>=0&&r.valueOf()<=1}Eb.exports=cqr});var Sb=s((bwe,Nb)=>{"use strict";var lqr=U2(),pqr=G2();function dqr(r){return lqr(r)||pqr(r)}Nb.exports=dqr});var Fn=s((wwe,Ab)=>{"use strict";var Ob=G(),D2=Sb(),gqr=U2(),mqr=G2();Ob(D2,"isPrimitive",gqr);Ob(D2,"isObject",mqr);Ab.exports=D2});var Tb=s((Ewe,_b)=>{"use strict";var yqr=Fn().isPrimitive,hqr=C();function qqr(r,e){if(!yqr(r))throw new TypeError(hqr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}_b.exports=qqr});var Rb=s((Nwe,Ib)=>{"use strict";var bqr=Tb();Ib.exports=bqr});var Pb=s((Swe,Lb)=>{"use strict";var wqr=qe(),Eqr=C();function Nqr(r,e){if(!wqr(r))throw new TypeError(Eqr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Lb.exports=Nqr});var xb=s((Owe,Fb)=>{"use strict";var Sqr=Pb();Fb.exports=Sqr});var Mb=s((Awe,jb)=>{"use strict";function Oqr(r){return r.length===1||r[0].length===1}jb.exports=Oqr});var kb=s((_we,Bb)=>{"use strict";var Aqr=Mb();Bb.exports=Aqr});var Vb=s((Twe,Cb)=>{"use strict";var _qr=qe(),Tqr=kb();function Iqr(r){return _qr(r)&&Tqr(r)}Cb.exports=Iqr});var H2=s((Iwe,Ub)=>{"use strict";var Rqr=Vb();Ub.exports=Rqr});var Db=s((Rwe,Gb)=>{"use strict";var Lqr=C(),Pqr=H2();function Fqr(r,e){if(!Pqr(r))throw new TypeError(Lqr("invalid argument. %s must consist of only a single row or a single column.",e))}Gb.exports=Fqr});var zb=s((Lwe,Hb)=>{"use strict";var xqr=Db();Hb.exports=xqr});var Xb=s((Pwe,Wb)=>{"use strict";function jqr(r){var e,t,i,a;for(e=r.length,t=r[0].length,a=1;a<arguments.length;a++)if(i=arguments[a],i.length!==e||i[0].length!==t)return!1;return!0}Wb.exports=jqr});var Yb=s((Fwe,Jb)=>{"use strict";var Mqr=Xb();Jb.exports=Mqr});var $b=s((xwe,Zb)=>{"use strict";var Bqr=C(),kqr=Yb();function Cqr(r,e,t){if(!kqr(r,e))throw new TypeError(Bqr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Zb.exports=Cqr});var Kb=s((jwe,Qb)=>{"use strict";var Vqr=$b();Qb.exports=Vqr});var ew=s((Mwe,rw)=>{"use strict";var Uqr=Jr().isPrimitive,Gqr=C();function Dqr(r,e){if(!Uqr(r))throw new TypeError(Gqr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}rw.exports=Dqr});var iw=s((Bwe,tw)=>{"use strict";var Hqr=ew();tw.exports=Hqr});var nw=s((kwe,aw)=>{"use strict";var zqr=C(),Wqr=be().isPrimitive;function Xqr(r,e){var t;for(t=0;t<r.length;t++)if(!Wqr(r[t]))throw new TypeError(zqr("invalid argument. %s must contain only nonnegative integers.",e))}aw.exports=Xqr});var uw=s((Cwe,sw)=>{"use strict";var Jqr=nw();sw.exports=Jqr});var vw=s((Vwe,ow)=>{"use strict";var Yqr=C(),Zqr=ye().isPrimitive;function $qr(r,e){var t;for(t=0;t<r.length;t++)if(!Zqr(r[t]))throw new TypeError(Yqr("invalid argument. %s must contain only integers.",e))}ow.exports=$qr});var cw=s((Uwe,fw)=>{"use strict";var Qqr=vw();fw.exports=Qqr});var pw=s((Gwe,lw)=>{"use strict";var Kqr=C();function rbr(r){throw new Error(Kqr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}lw.exports=rbr});var gw=s((Dwe,dw)=>{"use strict";var ebr=pw();dw.exports=ebr});var hw=s((Hwe,yw)=>{"use strict";var mw=B2(),tbr=R2();function ibr(r,e,t){mw(r,"Number of rows"),mw(e,"Number of columns"),tbr(t,"a pseudorandom number generator seed")}yw.exports=ibr});var bw=s((zwe,qw)=>{"use strict";var abr=hw();qw.exports=abr});var Ew=s((Wwe,ww)=>{"use strict";var nbr=we(),sbr=c2();function ubr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&nbr(r.length)&&r.length>=0&&r.length<=sbr}ww.exports=ubr});var Sw=s((Xwe,Nw)=>{"use strict";var obr=Ew();Nw.exports=obr});var Aw=s((Jwe,Ow)=>{"use strict";var vbr=Sw(),fbr=C();function cbr(r){if(typeof r!="function")throw new TypeError(fbr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!vbr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}Ow.exports=cbr});var z2=s((Ywe,_w)=>{"use strict";var lbr=Aw();_w.exports=lbr});var Rw=s((Zwe,Iw)=>{"use strict";var W2=ye(),Tw=G(),X2=z2(),pbr=X2(W2.isPrimitive),dbr=X2(W2.isObject),J2=X2(W2);Tw(J2,"primitives",pbr);Tw(J2,"objects",dbr);Iw.exports=J2});var Fw=s(($we,Pw)=>{"use strict";var Y2=be(),Lw=G(),Z2=z2(),gbr=Z2(Y2.isPrimitive),mbr=Z2(Y2.isObject),$2=Z2(Y2);Lw($2,"primitives",gbr);Lw($2,"objects",mbr);Pw.exports=$2});var jw=s((Qwe,xw)=>{"use strict";var st=$r(),ybr=qe(),hbr=ye().isPrimitive,qbr=Rw().primitives,bbr=be().isPrimitive,wbr=Fw().primitives,Ebr=ss().isPrimitive,Nbr=Er().isPrimitive,Sbr=nt().isPrimitive,Obr=Ur().isPrimitive,Abr=Jr().isPrimitive;function _br(r){return st(r,"isArray",ybr),st(r,"isInteger",hbr),st(r,"isIntegerArray",qbr),st(r,"isNonNegativeInteger",bbr),st(r,"isNonNegativeIntegerArray",wbr),st(r,"isNonNegativeNumber",Ebr),st(r,"isNumber",Nbr),st(r,"isPositiveInteger",Sbr),st(r,"isPositiveNumber",Obr),st(r,"isString",Abr),r}xw.exports=_br});var Bw=s((Kwe,Mw)=>{"use strict";var Dr=$r(),Tbr=Lh(),Ibr=jh(),Rbr=Dh(),Lbr=$h(),Pbr=fq(),Fbr=R2(),xbr=yq(),jbr=wq(),Mbr=Oq(),Bbr=Iq(),kbr=Fq(),Cbr=Bq(),Vbr=Xq(),Ubr=$q(),Gbr=eb(),Dbr=B2(),Hbr=bb(),zbr=Rb(),Wbr=xb(),Xbr=zb(),Jbr=Kb(),Ybr=iw(),Zbr=uw(),$br=cw(),Qbr=gw(),Kbr=bw(),rwr=jw();function ewr(r){return Dr(r,"isBetween",Tbr),Dr(r,"isBoolean",Ibr),Dr(r,"isBroadcastCompatible",Rbr),Dr(r,"isBroadcastCompatibleWith",Lbr),Dr(r,"isBufferLengthCompatible",Pbr),Dr(r,"isDefined",Fbr),Dr(r,"isGreaterThan",xbr),Dr(r,"isGreaterThanEqual",jbr),Dr(r,"isInteger",Mbr),Dr(r,"isLessThan",Bbr),Dr(r,"isLessThanEqual",kbr),Dr(r,"isNonNegativeInteger",Cbr),Dr(r,"isNonNegativeNumber",Vbr),Dr(r,"isNumber",Ubr),Dr(r,"isOneOf",Gbr),Dr(r,"isPositiveInteger",Dbr),Dr(r,"isPositiveNumber",Hbr),Dr(r,"isProbability",zbr),Dr(r,"isRange",Wbr),Dr(r,"isRange1d",Xbr),Dr(r,"isSameShape",Jbr),Dr(r,"isString",Ybr),Dr(r,"isValidShape",Zbr),Dr(r,"isValidStrides",$br),Dr(r,"unrecognizedOptionName",Qbr),Dr(r,"verifyCommonPRNGArgs",Kbr),Dr(r,"base",rwr({})),r}Mw.exports=ewr});var Cw=s((rEe,kw)=>{"use strict";var Q2=4;function twr(r,e,t,i,a,n){var u,o,v,f;if(r<=0||e===0)return a;if(i===1&&n===1){if(v=r%Q2,v>0)for(f=0;f<v;f++)a[f]+=e*t[f];if(r<Q2)return a;for(f=v;f<r;f+=Q2)a[f]+=e*t[f],a[f+1]+=e*t[f+1],a[f+2]+=e*t[f+2],a[f+3]+=e*t[f+3];return a}for(i<0?u=(1-r)*i:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r;f++)a[o]+=e*t[u],u+=i,o+=n;return a}kw.exports=twr});var Uw=s((eEe,Vw)=>{"use strict";var xn=4;function iwr(r,e,t,i,a,n,u,o){var v,f,c,l;if(r<=0||e===0)return n;if(v=a,f=o,i===1&&u===1){if(c=r%xn,c>0)for(l=0;l<c;l++)n[f]+=e*t[v],v+=i,f+=u;if(r<xn)return n;for(l=c;l<r;l+=xn)n[f]+=e*t[v],n[f+1]+=e*t[v+1],n[f+2]+=e*t[v+2],n[f+3]+=e*t[v+3],v+=xn,f+=xn;return n}for(l=0;l<r;l++)n[f]+=e*t[v],v+=i,f+=u;return n}Vw.exports=iwr});var K2=s((tEe,Dw)=>{"use strict";var awr=G(),Gw=Cw(),nwr=Uw();awr(Gw,"ndarray",nwr);Dw.exports=Gw});var Ww=s((iEe,zw)=>{"use strict";var Hw=$r(),swr=K2().ndarray,uwr=K2().ndarray;function owr(r){return Hw(r,"daxpy",swr),Hw(r,"saxpy",uwr),r}zw.exports=owr});var Jw=s((aEe,Xw)=>{"use strict";var vwr=Qi(),fwr=Kr();function cwr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(fwr(r)==="[object Error]")return!0;r=vwr(r)}return!1}Xw.exports=cwr});var Zw=s((nEe,Yw)=>{"use strict";var lwr=Jw();Yw.exports=lwr});var rv=s((sEe,$w)=>{"use strict";function pwr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}$w.exports=pwr});var Kw=s((uEe,Qw)=>{"use strict";var dwr=rv(),gwr=dwr();Qw.exports=gwr});var tE=s((oEe,eE)=>{"use strict";var mwr=G(),rE=rv(),ywr=Kw();mwr(rE,"REGEXP",ywr);eE.exports=rE});var aE=s((vEe,iE)=>{"use strict";var hwr=Jr().isPrimitive,qwr=tE(),bwr=C();function wwr(r){if(!hwr(r))throw new TypeError(bwr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=qwr().exec(r),r?new RegExp(r[1],r[2]):null}iE.exports=wwr});var sE=s((fEe,nE)=>{"use strict";var Ewr=aE();nE.exports=Ewr});var ev=s((cEe,uE)=>{"use strict";var Nwr=Er().isPrimitive,Swr=W();function Owr(r){return Nwr(r)&&Swr(r)}uE.exports=Owr});var tv=s((lEe,oE)=>{"use strict";var Awr=Er().isObject,_wr=W();function Twr(r){return Awr(r)&&_wr(r.valueOf())}oE.exports=Twr});var fE=s((pEe,vE)=>{"use strict";var Iwr=ev(),Rwr=tv();function Lwr(r){return Iwr(r)||Rwr(r)}vE.exports=Lwr});var oe=s((dEe,lE)=>{"use strict";var cE=G(),iv=fE(),Pwr=ev(),Fwr=tv();cE(iv,"isPrimitive",Pwr);cE(iv,"isObject",Fwr);lE.exports=iv});var mE=s((gEe,gE)=>{"use strict";var pE=oe(),xwr=Be(),jwr=Jr().isPrimitive,Mwr=ye().isPrimitive,dE=C();function Bwr(r,e,t){var i,a;if(!xwr(r)&&!jwr(r))throw new TypeError(dE("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Mwr(t))throw new TypeError(dE("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(pE(e)){for(;a<i;a++)if(pE(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}gE.exports=Bwr});var us=s((mEe,yE)=>{"use strict";var kwr=mE();yE.exports=kwr});var os=s((yEe,hE)=>{"use strict";function Cwr(r){return Object.keys(Object(r))}hE.exports=Cwr});var bE=s((hEe,qE)=>{"use strict";var Vwr=os();function Uwr(){return(Vwr(arguments)||"").length!==2}function Gwr(){return Uwr(1,2)}qE.exports=Gwr});var EE=s((qEe,wE)=>{"use strict";var Dwr=typeof Object.keys<"u";wE.exports=Dwr});var av=s((bEe,NE)=>{"use strict";var Hwr=Kr();function zwr(r){return Hwr(r)==="[object Arguments]"}NE.exports=zwr});var AE=s((wEe,OE)=>{"use strict";var Wwr=av(),SE;function Xwr(){return Wwr(arguments)}SE=Xwr();OE.exports=SE});var nv=s((EEe,_E)=>{"use strict";var Jwr=Object.prototype.propertyIsEnumerable;_E.exports=Jwr});var RE=s((NEe,IE)=>{"use strict";var Ywr=nv(),TE;function Zwr(){return!Ywr.call("beep","0")}TE=Zwr();IE.exports=TE});var PE=s((SEe,LE)=>{"use strict";var $wr=Jr(),Qwr=oe().isPrimitive,Kwr=ye().isPrimitive,rEr=nv(),eEr=RE();function tEr(r,e){var t;return r==null?!1:(t=rEr.call(r,e),!t&&eEr&&$wr(r)?(e=+e,!Qwr(e)&&Kwr(e)&&e>=0&&e<r.length):t)}LE.exports=tEr});var jn=s((OEe,FE)=>{"use strict";var iEr=PE();FE.exports=iEr});var jE=s((AEe,xE)=>{"use strict";var aEr=vr(),nEr=jn(),sEr=qe(),uEr=we(),oEr=ma();function vEr(r){return r!==null&&typeof r=="object"&&!sEr(r)&&typeof r.length=="number"&&uEr(r.length)&&r.length>=0&&r.length<=oEr&&aEr(r,"callee")&&!nEr(r,"callee")}xE.exports=vEr});var uv=s((_Ee,ME)=>{"use strict";var fEr=AE(),cEr=av(),lEr=jE(),sv;fEr?sv=cEr:sv=lEr;ME.exports=sv});var CE=s((TEe,kE)=>{"use strict";var pEr=uv(),BE=os(),dEr=Array.prototype.slice;function gEr(r){return pEr(r)?BE(dEr.call(r)):BE(r)}kE.exports=gEr});var UE=s((IEe,VE)=>{"use strict";function mEr(){}VE.exports=mEr});var Tr=s((REe,GE)=>{"use strict";var yEr=UE();GE.exports=yEr});var HE=s((LEe,DE)=>{"use strict";var hEr=jn(),qEr=Tr(),bEr=hEr(qEr,"prototype");DE.exports=bEr});var WE=s((PEe,zE)=>{"use strict";var wEr=jn(),EEr={toString:null},NEr=!wEr(EEr,"toString");zE.exports=NEr});var ov=s((FEe,XE)=>{"use strict";function SEr(r){return r.constructor&&r.constructor.prototype===r}XE.exports=SEr});var JE=s((xEe,OEr)=>{OEr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var ZE=s((jEe,YE)=>{"use strict";var AEr=typeof window>"u"?void 0:window;YE.exports=AEr});var rN=s((MEe,KE)=>{"use strict";var _Er=vr(),TEr=us(),$E=k0(),IEr=ov(),REr=JE(),Ba=ZE(),QE;function LEr(){var r;if($E(Ba)==="undefined")return!1;for(r in Ba)try{TEr(REr,r)===-1&&_Er(Ba,r)&&Ba[r]!==null&&$E(Ba[r])==="object"&&IEr(Ba[r])}catch{return!0}return!1}QE=LEr();KE.exports=QE});var tN=s((BEe,eN)=>{"use strict";var PEr=typeof window<"u";eN.exports=PEr});var nN=s((kEe,aN)=>{"use strict";var FEr=rN(),iN=ov(),xEr=tN();function jEr(r){if(xEr===!1&&!FEr)return iN(r);try{return iN(r)}catch{return!1}}aN.exports=jEr});var sN=s((CEe,MEr)=>{MEr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var vN=s((VEe,oN)=>{"use strict";var BEr=U1(),vv=vr(),kEr=uv(),CEr=HE(),VEr=WE(),UEr=nN(),uN=sN();function GEr(r){var e,t,i,a,n,u,o;if(a=[],kEr(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!vv(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!BEr(r))return a;t=CEr&&i}for(n in r)!(t&&n==="prototype")&&vv(r,n)&&a.push(String(n));if(VEr)for(e=UEr(r),o=0;o<uN.length;o++)u=uN[o],!(e&&u==="constructor")&&vv(r,u)&&a.push(String(u));return a}oN.exports=GEr});var cN=s((UEe,fN)=>{"use strict";var DEr=bE(),HEr=EE(),zEr=os(),WEr=CE(),XEr=vN(),vs;HEr?DEr()?vs=WEr:vs=zEr:vs=XEr;fN.exports=vs});var ka=s((GEe,lN)=>{"use strict";var JEr=cN();lN.exports=JEr});var dN=s((DEe,pN)=>{"use strict";var YEr=typeof Object.getOwnPropertyNames<"u";pN.exports=YEr});var yN=s((HEe,mN)=>{"use strict";var gN=ja(),ZEr=gN.getOwnPropertyNames;function $Er(r){return ZEr(gN(r))}mN.exports=$Er});var qN=s((zEe,hN)=>{"use strict";var QEr=ja(),KEr=ka();function rNr(r){return KEr(QEr(r))}hN.exports=rNr});var wN=s((WEe,bN)=>{"use strict";var eNr=dN(),tNr=yN(),iNr=qN(),fv;eNr?fv=tNr:fv=iNr;bN.exports=fv});var NN=s((XEe,EN)=>{"use strict";var aNr=typeof Object.getOwnPropertyDescriptor<"u";EN.exports=aNr});var ON=s((JEe,SN)=>{"use strict";var nNr=Object.getOwnPropertyDescriptor;function sNr(r,e){var t;return r==null?null:(t=nNr(r,e),t===void 0?null:t)}SN.exports=sNr});var _N=s((YEe,AN)=>{"use strict";var uNr=vr();function oNr(r,e){return uNr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}AN.exports=oNr});var IN=s((ZEe,TN)=>{"use strict";var vNr=NN(),fNr=ON(),cNr=_N(),cv;vNr?cv=fNr:cv=cNr;TN.exports=cv});var LN=s(($Ee,RN)=>{"use strict";var lNr=typeof Buffer=="function"?Buffer:null;RN.exports=lNr});var FN=s((QEe,PN)=>{"use strict";var pNr=Hi(),fs=LN();function dNr(){var r,e;if(typeof fs!="function")return!1;try{typeof fs.from=="function"?e=fs.from([1,2,3,4]):e=new fs([1,2,3,4]),r=pNr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}PN.exports=dNr});var jN=s((KEe,xN)=>{"use strict";var gNr=FN();xN.exports=gNr});var kN=s(cs=>{"use strict";cs.byteLength=yNr;cs.toByteArray=qNr;cs.fromByteArray=ENr;var ut=[],He=[],mNr=typeof Uint8Array<"u"?Uint8Array:Array,lv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Ki=0,MN=lv.length;Ki<MN;++Ki)ut[Ki]=lv[Ki],He[lv.charCodeAt(Ki)]=Ki;var Ki,MN;He["-".charCodeAt(0)]=62;He["_".charCodeAt(0)]=63;function BN(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function yNr(r){var e=BN(r),t=e[0],i=e[1];return(t+i)*3/4-i}function hNr(r,e,t){return(e+t)*3/4-t}function qNr(r){var e,t=BN(r),i=t[0],a=t[1],n=new mNr(hNr(r,i,a)),u=0,o=a>0?i-4:i,v;for(v=0;v<o;v+=4)e=He[r.charCodeAt(v)]<<18|He[r.charCodeAt(v+1)]<<12|He[r.charCodeAt(v+2)]<<6|He[r.charCodeAt(v+3)],n[u++]=e>>16&255,n[u++]=e>>8&255,n[u++]=e&255;return a===2&&(e=He[r.charCodeAt(v)]<<2|He[r.charCodeAt(v+1)]>>4,n[u++]=e&255),a===1&&(e=He[r.charCodeAt(v)]<<10|He[r.charCodeAt(v+1)]<<4|He[r.charCodeAt(v+2)]>>2,n[u++]=e>>8&255,n[u++]=e&255),n}function bNr(r){return ut[r>>18&63]+ut[r>>12&63]+ut[r>>6&63]+ut[r&63]}function wNr(r,e,t){for(var i,a=[],n=e;n<t;n+=3)i=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),a.push(bNr(i));return a.join("")}function ENr(r){for(var e,t=r.length,i=t%3,a=[],n=16383,u=0,o=t-i;u<o;u+=n)a.push(wNr(r,u,u+n>o?o:u+n));return i===1?(e=r[t-1],a.push(ut[e>>2]+ut[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],a.push(ut[e>>10]+ut[e>>4&63]+ut[e<<2&63]+"=")),a.join("")}});var CN=s(pv=>{pv.read=function(r,e,t,i,a){var n,u,o=a*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?a-1:0,p=t?-1:1,m=r[e+l];for(l+=p,n=m&(1<<-c)-1,m>>=-c,c+=o;c>0;n=n*256+r[e+l],l+=p,c-=8);for(u=n&(1<<-c)-1,n>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(n===0)n=1-f;else{if(n===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),n=n-f}return(m?-1:1)*u*Math.pow(2,n-i)};pv.write=function(r,e,t,i,a,n){var u,o,v,f=n*8-a-1,c=(1<<f)-1,l=c>>1,p=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:n-1,y=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,a),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,a),u=0));a>=8;r[t+m]=o&255,m+=y,o/=256,a-=8);for(u=u<<a|o,f+=a;f>0;r[t+m]=u&255,m+=y,u/=256,f-=8);r[t+m-y]|=g*128}});var tS=s(Ga=>{"use strict";var dv=kN(),Va=CN(),VN=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ga.Buffer=D;Ga.SlowBuffer=TNr;Ga.INSPECT_MAX_BYTES=50;var ls=2147483647;Ga.kMaxLength=ls;D.TYPED_ARRAY_SUPPORT=NNr();!D.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function NNr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(D.prototype,"parent",{enumerable:!0,get:function(){if(!!D.isBuffer(this))return this.buffer}});Object.defineProperty(D.prototype,"offset",{enumerable:!0,get:function(){if(!!D.isBuffer(this))return this.byteOffset}});function qt(r){if(r>ls)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,D.prototype),e}function D(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return hv(r)}return HN(r,e,t)}D.poolSize=8192;function HN(r,e,t){if(typeof r=="string")return ONr(r,e);if(ArrayBuffer.isView(r))return ANr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ot(r,ArrayBuffer)||r&&ot(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ot(r,SharedArrayBuffer)||r&&ot(r.buffer,SharedArrayBuffer)))return mv(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return D.from(i,e,t);let a=_Nr(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return D.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}D.from=function(r,e,t){return HN(r,e,t)};Object.setPrototypeOf(D.prototype,Uint8Array.prototype);Object.setPrototypeOf(D,Uint8Array);function zN(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function SNr(r,e,t){return zN(r),r<=0?qt(r):e!==void 0?typeof t=="string"?qt(r).fill(e,t):qt(r).fill(e):qt(r)}D.alloc=function(r,e,t){return SNr(r,e,t)};function hv(r){return zN(r),qt(r<0?0:qv(r)|0)}D.allocUnsafe=function(r){return hv(r)};D.allocUnsafeSlow=function(r){return hv(r)};function ONr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!D.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=WN(r,e)|0,i=qt(t),a=i.write(r,e);return a!==t&&(i=i.slice(0,a)),i}function gv(r){let e=r.length<0?0:qv(r.length)|0,t=qt(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function ANr(r){if(ot(r,Uint8Array)){let e=new Uint8Array(r);return mv(e.buffer,e.byteOffset,e.byteLength)}return gv(r)}function mv(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,D.prototype),i}function _Nr(r){if(D.isBuffer(r)){let e=qv(r.length)|0,t=qt(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||wv(r.length)?qt(0):gv(r);if(r.type==="Buffer"&&Array.isArray(r.data))return gv(r.data)}function qv(r){if(r>=ls)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ls.toString(16)+" bytes");return r|0}function TNr(r){return+r!=r&&(r=0),D.alloc(+r)}D.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==D.prototype};D.compare=function(e,t){if(ot(e,Uint8Array)&&(e=D.from(e,e.offset,e.byteLength)),ot(t,Uint8Array)&&(t=D.from(t,t.offset,t.byteLength)),!D.isBuffer(e)||!D.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,a=t.length;for(let n=0,u=Math.min(i,a);n<u;++n)if(e[n]!==t[n]){i=e[n],a=t[n];break}return i<a?-1:a<i?1:0};D.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};D.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return D.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let a=D.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){let u=e[i];if(ot(u,Uint8Array))n+u.length>a.length?(D.isBuffer(u)||(u=D.from(u)),u.copy(a,n)):Uint8Array.prototype.set.call(a,u,n);else if(D.isBuffer(u))u.copy(a,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=u.length}return a};function WN(r,e){if(D.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ot(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let a=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return yv(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return eS(r).length;default:if(a)return i?-1:yv(r).length;e=(""+e).toLowerCase(),a=!0}}D.byteLength=WN;function INr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return CNr(this,e,t);case"utf8":case"utf-8":return JN(this,e,t);case"ascii":return BNr(this,e,t);case"latin1":case"binary":return kNr(this,e,t);case"base64":return jNr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return VNr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}D.prototype._isBuffer=!0;function ra(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}D.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)ra(this,t,t+1);return this};D.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)ra(this,t,t+3),ra(this,t+1,t+2);return this};D.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)ra(this,t,t+7),ra(this,t+1,t+6),ra(this,t+2,t+5),ra(this,t+3,t+4);return this};D.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?JN(this,0,e):INr.apply(this,arguments)};D.prototype.toLocaleString=D.prototype.toString;D.prototype.equals=function(e){if(!D.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:D.compare(this,e)===0};D.prototype.inspect=function(){let e="",t=Ga.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};VN&&(D.prototype[VN]=D.prototype.inspect);D.prototype.compare=function(e,t,i,a,n){if(ot(e,Uint8Array)&&(e=D.from(e,e.offset,e.byteLength)),!D.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),a===void 0&&(a=0),n===void 0&&(n=this.length),t<0||i>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=i)return 0;if(a>=n)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,a>>>=0,n>>>=0,this===e)return 0;let u=n-a,o=i-t,v=Math.min(u,o),f=this.slice(a,n),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function XN(r,e,t,i,a){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,wv(t)&&(t=a?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(a)return-1;t=r.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=D.from(e,i)),D.isBuffer(e))return e.length===0?-1:UN(r,e,t,i,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):UN(r,[e],t,i,a);throw new TypeError("val must be string, number or Buffer")}function UN(r,e,t,i,a){let n=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,u/=2,o/=2,t/=2}function v(c,l){return n===1?c[l]:c.readUInt16BE(l*n)}let f;if(a){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*n}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}D.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};D.prototype.indexOf=function(e,t,i){return XN(this,e,t,i,!0)};D.prototype.lastIndexOf=function(e,t,i){return XN(this,e,t,i,!1)};function RNr(r,e,t,i){t=Number(t)||0;let a=r.length-t;i?(i=Number(i),i>a&&(i=a)):i=a;let n=e.length;i>n/2&&(i=n/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(wv(o))return u;r[t+u]=o}return u}function LNr(r,e,t,i){return ps(yv(e,r.length-t),r,t,i)}function PNr(r,e,t,i){return ps(HNr(e),r,t,i)}function FNr(r,e,t,i){return ps(eS(e),r,t,i)}function xNr(r,e,t,i){return ps(zNr(e,r.length-t),r,t,i)}D.prototype.write=function(e,t,i,a){if(t===void 0)a="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")a=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-t;if((i===void 0||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let u=!1;for(;;)switch(a){case"hex":return RNr(this,e,t,i);case"utf8":case"utf-8":return LNr(this,e,t,i);case"ascii":case"latin1":case"binary":return PNr(this,e,t,i);case"base64":return FNr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xNr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),u=!0}};D.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function jNr(r,e,t){return e===0&&t===r.length?dv.fromByteArray(r):dv.fromByteArray(r.slice(e,t))}function JN(r,e,t){t=Math.min(r.length,t);let i=[],a=e;for(;a<t;){let n=r[a],u=null,o=n>239?4:n>223?3:n>191?2:1;if(a+o<=t){let v,f,c,l;switch(o){case 1:n<128&&(u=n);break;case 2:v=r[a+1],(v&192)===128&&(l=(n&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[a+1],f=r[a+2],(v&192)===128&&(f&192)===128&&(l=(n&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[a+1],f=r[a+2],c=r[a+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(n&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),a+=o}return MNr(i)}var GN=4096;function MNr(r){let e=r.length;if(e<=GN)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=GN));return t}function BNr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]&127);return i}function kNr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]);return i}function CNr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let a="";for(let n=e;n<t;++n)a+=WNr[r[n]];return a}function VNr(r,e,t){let i=r.slice(e,t),a="";for(let n=0;n<i.length-1;n+=2)a+=String.fromCharCode(i[n]+i[n+1]*256);return a}D.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,D.prototype),a};function ve(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}D.prototype.readUintLE=D.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return a};D.prototype.readUintBE=D.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a};D.prototype.readUint8=D.prototype.readUInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]};D.prototype.readUint16LE=D.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]|this[e+1]<<8};D.prototype.readUint16BE=D.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]<<8|this[e+1]};D.prototype.readUint32LE=D.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};D.prototype.readUint32BE=D.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};D.prototype.readBigUInt64LE=oi(function(e){e=e>>>0,Ua(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Mn(e,this.length-8);let a=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))});D.prototype.readBigUInt64BE=oi(function(e){e=e>>>0,Ua(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Mn(e,this.length-8);let a=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(a)<<BigInt(32))+BigInt(n)});D.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a};D.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=t,n=1,u=this[e+--a];for(;a>0&&(n*=256);)u+=this[e+--a]*n;return n*=128,u>=n&&(u-=Math.pow(2,8*t)),u};D.prototype.readInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};D.prototype.readInt16LE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};D.prototype.readInt16BE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};D.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};D.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};D.prototype.readBigInt64LE=oi(function(e){e=e>>>0,Ua(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Mn(e,this.length-8);let a=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});D.prototype.readBigInt64BE=oi(function(e){e=e>>>0,Ua(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Mn(e,this.length-8);let a=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});D.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Va.read(this,e,!0,23,4)};D.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Va.read(this,e,!1,23,4)};D.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Va.read(this,e,!0,52,8)};D.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Va.read(this,e,!1,52,8)};function Oe(r,e,t,i,a,n){if(!D.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<n)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}D.prototype.writeUintLE=D.prototype.writeUIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Oe(this,e,t,i,o,0)}let n=1,u=0;for(this[t]=e&255;++u<i&&(n*=256);)this[t+u]=e/n&255;return t+i};D.prototype.writeUintBE=D.prototype.writeUIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;Oe(this,e,t,i,o,0)}let n=i-1,u=1;for(this[t+n]=e&255;--n>=0&&(u*=256);)this[t+n]=e/u&255;return t+i};D.prototype.writeUint8=D.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,1,255,0),this[t]=e&255,t+1};D.prototype.writeUint16LE=D.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};D.prototype.writeUint16BE=D.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};D.prototype.writeUint32LE=D.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};D.prototype.writeUint32BE=D.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function YN(r,e,t,i,a){rS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function ZN(r,e,t,i,a){rS(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t+7]=n,n=n>>8,r[t+6]=n,n=n>>8,r[t+5]=n,n=n>>8,r[t+4]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}D.prototype.writeBigUInt64LE=oi(function(e,t=0){return YN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});D.prototype.writeBigUInt64BE=oi(function(e,t=0){return ZN(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});D.prototype.writeIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Oe(this,e,t,i,v-1,-v)}let n=0,u=1,o=0;for(this[t]=e&255;++n<i&&(u*=256);)e<0&&o===0&&this[t+n-1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};D.prototype.writeIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);Oe(this,e,t,i,v-1,-v)}let n=i-1,u=1,o=0;for(this[t+n]=e&255;--n>=0&&(u*=256);)e<0&&o===0&&this[t+n+1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};D.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};D.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};D.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};D.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};D.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Oe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};D.prototype.writeBigInt64LE=oi(function(e,t=0){return YN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});D.prototype.writeBigInt64BE=oi(function(e,t=0){return ZN(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function $N(r,e,t,i,a,n){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function QN(r,e,t,i,a){return e=+e,t=t>>>0,a||$N(r,e,t,4,34028234663852886e22,-34028234663852886e22),Va.write(r,e,t,i,23,4),t+4}D.prototype.writeFloatLE=function(e,t,i){return QN(this,e,t,!0,i)};D.prototype.writeFloatBE=function(e,t,i){return QN(this,e,t,!1,i)};function KN(r,e,t,i,a){return e=+e,t=t>>>0,a||$N(r,e,t,8,17976931348623157e292,-17976931348623157e292),Va.write(r,e,t,i,52,8),t+8}D.prototype.writeDoubleLE=function(e,t,i){return KN(this,e,t,!0,i)};D.prototype.writeDoubleBE=function(e,t,i){return KN(this,e,t,!1,i)};D.prototype.copy=function(e,t,i,a){if(!D.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<i&&(a=i),a===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-i&&(a=e.length-t+i);let n=a-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,a):Uint8Array.prototype.set.call(e,this.subarray(i,a),t),n};D.prototype.fill=function(e,t,i,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!D.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){let u=e.charCodeAt(0);(a==="utf8"&&u<128||a==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let n;if(typeof e=="number")for(n=t;n<i;++n)this[n]=e;else{let u=D.isBuffer(e)?e:D.from(e,a),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<i-t;++n)this[n+t]=u[n%o]}return this};var Ca={};function bv(r,e,t){Ca[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}bv("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);bv("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);bv("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,a=t;return Number.isInteger(t)&&Math.abs(t)>2**32?a=DN(String(t)):typeof t=="bigint"&&(a=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(a=DN(a)),a+="n"),i+=` It must be ${e}. Received ${a}`,i},RangeError);function DN(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function UNr(r,e,t){Ua(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Mn(e,r.length-(t+1))}function rS(r,e,t,i,a,n){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw n>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(n+1)*8}${u}`:o=`>= -(2${u} ** ${(n+1)*8-1}${u}) and < 2 ** ${(n+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ca.ERR_OUT_OF_RANGE("value",o,r)}UNr(i,a,n)}function Ua(r,e){if(typeof r!="number")throw new Ca.ERR_INVALID_ARG_TYPE(e,"number",r)}function Mn(r,e,t){throw Math.floor(r)!==r?(Ua(r,t),new Ca.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ca.ERR_BUFFER_OUT_OF_BOUNDS:new Ca.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var GNr=/[^+/0-9A-Za-z-_]/g;function DNr(r){if(r=r.split("=")[0],r=r.trim().replace(GNr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function yv(r,e){e=e||1/0;let t,i=r.length,a=null,n=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&n.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&n.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&n.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;n.push(t)}else if(t<2048){if((e-=2)<0)break;n.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;n.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return n}function HNr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function zNr(r,e){let t,i,a,n=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,a=t%256,n.push(a),n.push(i);return n}function eS(r){return dv.toByteArray(DNr(r))}function ps(r,e,t,i){let a;for(a=0;a<i&&!(a+t>=e.length||a>=r.length);++a)e[a+t]=r[a];return a}function ot(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function wv(r){return r!==r}var WNr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let a=0;a<16;++a)e[i+a]=r[t]+r[a]}return e}();function oi(r){return typeof BigInt>"u"?XNr:r}function XNr(){throw new Error("BigInt not supported")}});var aS=s((aNe,iS)=>{"use strict";var JNr=tS().Buffer;iS.exports=JNr});var sS=s((nNe,nS)=>{"use strict";function YNr(){throw new Error("not implemented")}nS.exports=YNr});var vi=s((sNe,uS)=>{"use strict";var ZNr=jN(),$Nr=aS(),QNr=sS(),Ev;ZNr()?Ev=$Nr:Ev=QNr;uS.exports=Ev});var vS=s((uNe,oS)=>{"use strict";var KNr=yr(),rSr=vi(),eSr=KNr(rSr.from);oS.exports=eSr});var cS=s((oNe,fS)=>{"use strict";var tSr=Hi(),iSr=C(),aSr=vi();function nSr(r){if(!tSr(r))throw new TypeError(iSr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return aSr.from(r)}fS.exports=nSr});var pS=s((vNe,lS)=>{"use strict";var sSr=Hi(),uSr=C(),oSr=vi();function vSr(r){if(!sSr(r))throw new TypeError(uSr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new oSr(r)}lS.exports=vSr});var gS=s((fNe,dS)=>{"use strict";var fSr=vS(),cSr=cS(),lSr=pS(),Nv;fSr?Nv=cSr:Nv=lSr;dS.exports=Nv});var hS=s((cNe,yS)=>{"use strict";var pSr=ba(),dSr=tt(),gSr=qa(),mSr=ha(),ySr=zi(),hSr=ni(),qSr=me(),bSr=et(),wSr=ge(),mS;function ESr(r){return new pSr(r)}function NSr(r){return new dSr(r)}function SSr(r){return new gSr(r)}function OSr(r){return new mSr(r)}function ASr(r){return new ySr(r)}function _Sr(r){return new hSr(r)}function TSr(r){return new qSr(r)}function ISr(r){return new bSr(r)}function RSr(r){return new wSr(r)}function LSr(){var r={int8array:ESr,uint8array:NSr,uint8clampedarray:SSr,int16array:OSr,uint16array:ASr,int32array:_Sr,uint32array:TSr,float32array:ISr,float64array:RSr};return r}mS=LSr();yS.exports=mS});var NS=s((lNe,ES)=>{"use strict";var ds=vr(),Sv=qe(),qS=Hi(),PSr=Zw(),bS=k0(),FSr=sE(),xSr=us(),wS=ka(),jSr=wN(),Bn=IN(),MSr=Qi(),kn=ii(),BSr=gS(),kSr=hS();function CSr(r){var e,t,i,a,n,u,o,v;for(e=[],a=[],o=Object.create(MSr(r)),e.push(r),a.push(o),t=jSr(r),v=0;v<t.length;v++)i=t[v],n=Bn(r,i),ds(n,"value")&&(u=Sv(r[i])?[]:{},n.value=ea(r[i],u,e,a,-1)),kn(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function VSr(r){var e=[],t=[],i,a,n,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=wS(r),v=0;v<i.length;v++)u=i[v],a=Bn(r,u),ds(a,"value")&&(n=Sv(r[u])?[]:{},a.value=ea(r[u],n,e,t,-1)),kn(o,u,a);return o}function ea(r,e,t,i,a){var n,u,o,v,f,c,l,p,m,y;if(a-=1,typeof r!="object"||r===null)return r;if(qS(r))return BSr(r);if(PSr(r))return VSr(r);if(o=bS(r),o==="date")return new Date(+r);if(o==="regexp")return FSr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=kSr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?CSr(r):{};if(u=wS(r),a>0)for(n=o,y=0;y<u.length;y++){if(c=u[y],p=r[c],o=bS(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||qS(p)){n==="object"?(v=Bn(r,c),ds(v,"value")&&(v.value=ea(p)),kn(e,c,v)):e[c]=ea(p);continue}if(m=xSr(t,p),m!==-1){e[c]=i[m];continue}l=Sv(p)?new Array(p.length):{},t.push(p),i.push(l),n==="array"?e[c]=ea(p,l,t,i,a):(v=Bn(r,c),ds(v,"value")&&(v.value=ea(p,l,t,i,a)),kn(e,c,v))}else if(o==="array")for(y=0;y<u.length;y++)c=u[y],e[c]=r[c];else for(y=0;y<u.length;y++)c=u[y],v=Bn(r,c),kn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}ES.exports=ea});var OS=s((pNe,SS)=>{"use strict";var USr=qe(),GSr=be().isPrimitive,DSr=C(),HSr=hr(),zSr=NS();function WSr(r,e){var t;if(arguments.length>1){if(!GSr(e))throw new TypeError(DSr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=HSr;return t=USr(r)?new Array(r.length):{},zSr(r,t,[r],[t],e)}SS.exports=WSr});var Cn=s((dNe,AS)=>{"use strict";var XSr=OS();AS.exports=XSr});var _S=s((gNe,JSr)=>{JSr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var IS=s((mNe,TS)=>{"use strict";var YSr=Cn(),ZSr=_S();function $Sr(){return YSr(ZSr)}TS.exports=$Sr});var RS=s((yNe,QSr)=>{QSr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var PS=s((hNe,LS)=>{"use strict";var KSr=Cn(),rOr=RS();function eOr(){return KSr(rOr)}LS.exports=eOr});var FS=s((qNe,tOr)=>{tOr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var jS=s((bNe,xS)=>{"use strict";var iOr=Cn(),aOr=FS();function nOr(){return iOr(aOr)}xS.exports=nOr});var MS=s((wNe,sOr)=>{sOr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var kS=s((ENe,BS)=>{"use strict";var uOr=MS();function oOr(){return uOr.slice()}BS.exports=oOr});var CS=s((NNe,vOr)=>{vOr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var US=s((SNe,VS)=>{"use strict";var fOr=Cn(),cOr=CS();function lOr(){return fOr(cOr)}VS.exports=lOr});var DS=s((ONe,GS)=>{"use strict";var Vn=$r(),pOr=IS(),dOr=PS(),gOr=jS(),mOr=kS(),yOr=US();function hOr(r){return Vn(r,"AFINN_111",pOr),Vn(r,"AFINN_96",dOr),Vn(r,"ANSCOMBES_QUARTET",gOr),Vn(r,"HERNDON_VENUS_SEMIDIAMETERS",mOr),Vn(r,"NIGHTINGALES_ROSE",yOr),r}GS.exports=hOr});var zS=s((ANe,HS)=>{"use strict";function qOr(r,e){return r+e}HS.exports=qOr});var XS=s((_Ne,WS)=>{"use strict";var bOr=zS();WS.exports=bOr});var YS=s((TNe,JS)=>{"use strict";var wOr=hr(),EOr=Ir();function NOr(r){return r===wOr||r===EOr}JS.exports=NOr});var Ve=s((INe,ZS)=>{"use strict";var SOr=YS();ZS.exports=SOr});var KS=s((RNe,QS)=>{"use strict";var $S=z0();function OOr(r){return r>0?$S(r-1):$S(r+1)}QS.exports=OOr});var gs=s((LNe,rO)=>{"use strict";var AOr=KS();rO.exports=AOr});var tO=s((PNe,eO)=>{"use strict";var _Or=Math.sqrt;eO.exports=_Or});var Lr=s((FNe,iO)=>{"use strict";var TOr=tO();iO.exports=TOr});var nO=s((xNe,aO)=>{"use strict";function IOr(r){return Math.abs(r)}aO.exports=IOr});var Wr=s((jNe,sO)=>{"use strict";var ROr=nO();sO.exports=ROr});var oO=s((MNe,uO)=>{"use strict";var LOr=tt(),POr=zi(),FOr={uint16:POr,uint8:LOr};uO.exports=FOr});var lO=s((BNe,cO)=>{"use strict";var vO=oO(),fO;function xOr(){var r,e;return r=new vO.uint16(1),r[0]=4660,e=new vO.uint8(r.buffer),e[0]===52}fO=xOr();cO.exports=fO});var Ye=s((kNe,pO)=>{"use strict";var jOr=lO();pO.exports=jOr});var mO=s((CNe,gO)=>{"use strict";var MOr=Ye(),dO,Ov,Av;MOr===!0?(Ov=1,Av=0):(Ov=0,Av=1);dO={HIGH:Ov,LOW:Av};gO.exports=dO});var _v=s((VNe,bO)=>{"use strict";var BOr=me(),kOr=ge(),hO=mO(),qO=new kOr(1),yO=new BOr(qO.buffer),COr=hO.HIGH,VOr=hO.LOW;function UOr(r,e,t,i){return qO[0]=r,e[i]=yO[COr],e[i+t]=yO[VOr],e}bO.exports=UOr});var EO=s((UNe,wO)=>{"use strict";var GOr=_v();function DOr(r){return GOr(r,[0>>>0,0>>>0],1,0)}wO.exports=DOr});var Da=s((GNe,SO)=>{"use strict";var HOr=G(),NO=EO(),zOr=_v();HOr(NO,"assign",zOr);SO.exports=NO});var AO=s((DNe,OO)=>{"use strict";var WOr=Ye(),Tv;WOr===!0?Tv=0:Tv=1;OO.exports=Tv});var TO=s((HNe,_O)=>{"use strict";var XOr=me(),JOr=ge(),YOr=AO(),Iv=new JOr(1),ZOr=new XOr(Iv.buffer);function $Or(r,e){return Iv[0]=r,ZOr[YOr]=e>>>0,Iv[0]}_O.exports=$Or});var bt=s((zNe,IO)=>{"use strict";var QOr=TO();IO.exports=QOr});var LO=s((WNe,RO)=>{"use strict";function KOr(r){return r|0}RO.exports=KOr});var Rv=s((XNe,PO)=>{"use strict";var rAr=LO();PO.exports=rAr});var vt=s((JNe,FO)=>{"use strict";var eAr=2147483647;FO.exports=eAr});var Lv=s((YNe,xO)=>{"use strict";var tAr=2147483648;xO.exports=tAr});var MO=s((ZNe,jO)=>{"use strict";var iAr=Ye(),Pv;iAr===!0?Pv=1:Pv=0;jO.exports=Pv});var CO=s(($Ne,kO)=>{"use strict";var aAr=me(),nAr=ge(),sAr=MO(),BO=new nAr(1),uAr=new aAr(BO.buffer);function oAr(r){return BO[0]=r,uAr[sAr]}kO.exports=oAr});var ie=s((QNe,VO)=>{"use strict";var vAr=CO();VO.exports=vAr});var DO=s((KNe,GO)=>{"use strict";var fAr=Ye(),UO,Fv,xv;fAr===!0?(Fv=1,xv=0):(Fv=0,xv=1);UO={HIGH:Fv,LOW:xv};GO.exports=UO});var JO=s((rSe,XO)=>{"use strict";var cAr=me(),lAr=ge(),zO=DO(),WO=new lAr(1),HO=new cAr(WO.buffer),pAr=zO.HIGH,dAr=zO.LOW;function gAr(r,e){return HO[pAr]=r,HO[dAr]=e,WO[0]}XO.exports=gAr});var Ha=s((eSe,YO)=>{"use strict";var mAr=JO();YO.exports=mAr});var $O=s((tSe,ZO)=>{"use strict";var yAr=Lv(),hAr=vt(),qAr=Da(),bAr=ie(),wAr=Ha(),jv=[0,0];function EAr(r,e){var t,i;return qAr.assign(r,jv,1,0),t=jv[0],t&=hAr,i=bAr(e),i&=yAr,t|=i,wAr(t,jv[1])}ZO.exports=EAr});var ms=s((iSe,QO)=>{"use strict";var NAr=$O();QO.exports=NAr});var eA=s((aSe,rA)=>{"use strict";var KO=gs(),SAr=ms(),OAr=Ir(),ys=hr();function AAr(r,e){return e===OAr?ys:e===ys?0:e>0?KO(e)?r:0:KO(e)?SAr(ys,r):ys}rA.exports=AAr});var iA=s((nSe,tA)=>{"use strict";var _Ar=vt(),TAr=ie(),IAr=1072693247,hs=1e300,qs=1e-300;function RAr(r,e){var t,i;return i=TAr(r),t=i&_Ar,t<=IAr?e<0?hs*hs:qs*qs:e>0?hs*hs:qs*qs}tA.exports=RAr});var sA=s((sSe,nA)=>{"use strict";var LAr=Wr(),aA=hr();function PAr(r,e){return r===-1?(r-r)/(r-r):r===1?1:LAr(r)<1==(e===aA)?0:aA}nA.exports=PAr});var oA=s((uSe,uA)=>{"use strict";var FAr=Ye(),Mv;FAr===!0?Mv=1:Mv=0;uA.exports=Mv});var fA=s((oSe,vA)=>{"use strict";var xAr=me(),jAr=ge(),MAr=oA(),Bv=new jAr(1),BAr=new xAr(Bv.buffer);function kAr(r,e){return Bv[0]=r,BAr[MAr]=e>>>0,Bv[0]}vA.exports=kAr});var wt=s((vSe,cA)=>{"use strict";var CAr=fA();cA.exports=CAr});var ft=s((fSe,lA)=>{"use strict";var VAr=1023;lA.exports=VAr});var dA=s((cSe,pA)=>{"use strict";function UAr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}pA.exports=UAr});var hA=s((lSe,yA)=>{"use strict";var GAr=ie(),bs=bt(),gA=wt(),DAr=ft(),HAr=dA(),zAr=1048575,mA=1048576,WAr=1072693248,XAr=536870912,JAr=524288,YAr=20,ZAr=9007199254740992,$Ar=.9617966939259756,QAr=.9617967009544373,KAr=-7028461650952758e-24,r_r=[1,1.5],e_r=[0,.5849624872207642],t_r=[0,1350039202129749e-23];function i_r(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O;return T=0,t<mA&&(e*=ZAr,T-=53,t=GAr(e)),T+=(t>>YAr)-DAr|0,S=t&zAr|0,t=S|WAr|0,S<=235662?O=0:S<767610?O=1:(O=0,T+=1,t-=mA),e=gA(e,t),c=r_r[O],A=e-c,b=1/(e+c),a=A*b,u=bs(a,0),i=(t>>1|XAr)+JAr,i+=O<<18,v=gA(0,i),f=e-(v-c),o=b*(A-u*v-u*f),n=a*a,w=n*n*HAr(n),w+=o*(u+a),n=u*u,v=3+n+w,v=bs(v,0),f=w-(v-3-n),A=u*v,b=o*v+f*a,p=A+b,p=bs(p,0),m=b-(p-A),y=QAr*p,g=KAr*p+m*$Ar+t_r[O],l=e_r[O],q=T,d=y+g+l+q,d=bs(d,0),h=g-(d-q-l-y),r[0]=d,r[1]=h,r}yA.exports=i_r});var bA=s((pSe,qA)=>{"use strict";function a_r(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}qA.exports=a_r});var EA=s((dSe,wA)=>{"use strict";var n_r=bt(),s_r=bA(),u_r=1.4426950408889634,o_r=1.4426950216293335,v_r=19259629911266175e-24;function f_r(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*s_r(a),u=o_r*a,o=a*v_r-n*u_r,i=u+o,i=n_r(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}wA.exports=f_r});var kv=s((gSe,NA)=>{"use strict";var c_r=1023;NA.exports=c_r});var OA=s((mSe,SA)=>{"use strict";var l_r=-1023;SA.exports=l_r});var Cv=s((ySe,AA)=>{"use strict";var p_r=-1074;AA.exports=p_r});var Vv=s((hSe,_A)=>{"use strict";var d_r=22250738585072014e-324;_A.exports=d_r});var Uv=s((qSe,TA)=>{"use strict";var g_r=Vv(),m_r=Ve(),y_r=W(),h_r=Wr(),q_r=4503599627370496;function b_r(r,e,t,i){return y_r(r)||m_r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&h_r(r)<g_r?(e[i]=r*q_r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}TA.exports=b_r});var RA=s((bSe,IA)=>{"use strict";var w_r=Uv();function E_r(r){return w_r(r,[0,0],1,0)}IA.exports=E_r});var FA=s((wSe,PA)=>{"use strict";var N_r=G(),LA=RA(),S_r=Uv();N_r(LA,"assign",S_r);PA.exports=LA});var Un=s((ESe,xA)=>{"use strict";var O_r=2146435072;xA.exports=O_r});var MA=s((NSe,jA)=>{"use strict";var A_r=ie(),__r=Un(),T_r=ft();function I_r(r){var e=A_r(r);return e=(e&__r)>>>20,e-T_r|0}jA.exports=I_r});var kA=s((SSe,BA)=>{"use strict";var R_r=MA();BA.exports=R_r});var VA=s((OSe,CA)=>{"use strict";var L_r=hr(),P_r=Ir(),F_r=ft(),x_r=kv(),j_r=OA(),M_r=Cv(),B_r=W(),k_r=Ve(),C_r=ms(),V_r=FA().assign,U_r=kA(),G_r=Da(),D_r=Ha(),H_r=2220446049250313e-31,z_r=2148532223>>>0,Gv=[0,0],Dv=[0,0];function W_r(r,e){var t,i;return e===0||r===0||B_r(r)||k_r(r)?r:(V_r(r,Gv,1,0),r=Gv[0],e+=Gv[1],e+=U_r(r),e<M_r?C_r(0,r):e>x_r?r<0?P_r:L_r:(e<=j_r?(e+=52,i=H_r):i=1,G_r.assign(r,Dv,1,0),t=Dv[0],t&=z_r,t|=e+F_r<<20,i*D_r(t,Dv[1])))}CA.exports=W_r});var ws=s((ASe,UA)=>{"use strict";var X_r=VA();UA.exports=X_r});var Es=s((_Se,GA)=>{"use strict";var J_r=.6931471805599453;GA.exports=J_r});var Ns=s((TSe,DA)=>{"use strict";var Y_r=1048575;DA.exports=Y_r});var zA=s((ISe,HA)=>{"use strict";function Z_r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}HA.exports=Z_r});var QA=s((RSe,$A)=>{"use strict";var $_r=ie(),WA=wt(),Q_r=bt(),K_r=Rv(),rTr=ws(),eTr=Es(),XA=ft(),JA=vt(),YA=Ns(),tTr=zA(),ZA=1048576,iTr=1071644672,Gn=20,aTr=.6931471824645996,nTr=-1904654299957768e-24;function sTr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m;return p=r&JA|0,m=(p>>Gn)-XA|0,l=0,p>iTr&&(l=r+(ZA>>m+1)>>>0,m=((l&JA)>>Gn)-XA|0,i=(l&~(YA>>m))>>>0,n=WA(0,i),l=(l&YA|ZA)>>Gn-m>>>0,r<0&&(l=-l),e-=n),n=t+e,n=Q_r(n,0),o=n*aTr,v=(t-(n-e))*eTr+n*nTr,c=o+v,f=v-(c-o),n=c*c,a=c-n*tTr(n),u=c*a/(a-2)-(f+c*f),c=1-(u-c),r=$_r(c),r=K_r(r),r+=l<<Gn>>>0,r>>Gn<=0?c=rTr(c,l):c=WA(c,r),c}$A.exports=sTr});var v_=s((LSe,o_)=>{"use strict";var KA=W(),r_=gs(),e_=Ve(),uTr=we(),t_=Lr(),oTr=Wr(),Hv=Da(),vTr=bt(),i_=Rv(),fTr=Ir(),cTr=hr(),zv=vt(),lTr=eA(),pTr=iA(),dTr=sA(),gTr=hA(),mTr=EA(),yTr=QA(),hTr=1072693247,qTr=1105199104,bTr=1139802112,a_=1083179008,wTr=1072693248,ETr=1083231232,NTr=3230714880>>>0,n_=31,fi=1e300,ci=1e-300,STr=8008566259537294e-32,Et=[0,0],s_=[0,0];function u_(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;if(KA(r)||KA(e))return NaN;if(Hv.assign(e,Et,1,0),o=Et[0],v=Et[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return t_(r);if(e===-.5)return 1/t_(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(e_(e))return dTr(r,e)}if(Hv.assign(r,Et,1,0),n=Et[0],u=Et[1],u===0){if(n===0)return lTr(r,e);if(r===1)return 1;if(r===-1&&r_(e))return-1;if(e_(r))return r===fTr?u_(-0,-e):e<0?0:cTr}if(r<0&&uTr(e)===!1)return(r-r)/(r-r);if(a=oTr(r),t=n&zv|0,i=o&zv|0,f=n>>>n_|0,c=o>>>n_|0,f&&r_(e)?f=-1:f=1,i>qTr){if(i>bTr)return pTr(r,e);if(t<hTr)return c===1?f*fi*fi:f*ci*ci;if(t>wTr)return c===0?f*fi*fi:f*ci*ci;y=mTr(s_,a)}else y=gTr(s_,a,t);if(l=vTr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],g=m+p,Hv.assign(g,Et,1,0),d=i_(Et[0]),h=i_(Et[1]),d>=a_){if((d-a_|h)!==0||m+STr>g-p)return f*fi*fi}else if((d&zv)>=ETr&&((d-NTr|h)!==0||m<=g-p))return f*ci*ci;return g=yTr(d,p,m),f*g}o_.exports=u_});var Vr=s((PSe,f_)=>{"use strict";var OTr=v_();f_.exports=OTr});var za=s((FSe,c_)=>{"use strict";var ATr=9007199254740991;c_.exports=ATr});var Ss=s((xSe,l_)=>{"use strict";var _Tr=308;l_.exports=_Tr});var Wv=s((jSe,p_)=>{"use strict";var TTr=-308;p_.exports=TTr});var Os=s((MSe,d_)=>{"use strict";var ITr=-324;d_.exports=ITr});var w_=s((BSe,b_)=>{"use strict";var g_=W(),As=Ve(),m_=Vr(),RTr=Wr(),y_=Gr(),LTr=za(),h_=Ss(),PTr=Wv(),FTr=Os(),xTr=Ir(),jTr=LTr+1,q_=1e308;function MTr(r,e){var t,i;return g_(r)||g_(e)||As(e)?NaN:As(r)||r===0||e<FTr||RTr(r)>jTr&&e<=0?r:e>h_?r>=0?0:xTr:e<PTr?(t=m_(10,-(e+h_)),i=r*q_*t,As(i)?r:y_(i)/q_/t):(t=m_(10,-e),i=r*t,As(i)?r:y_(i)/t)}b_.exports=MTr});var N_=s((kSe,E_)=>{"use strict";var BTr=w_();E_.exports=BTr});var O_=s((CSe,S_)=>{"use strict";function kTr(r,e){return r*e}S_.exports=kTr});var __=s((VSe,A_)=>{"use strict";var CTr=O_();A_.exports=CTr});var I_=s((USe,T_)=>{"use strict";function VTr(r,e){return r-e}T_.exports=VTr});var L_=s((GSe,R_)=>{"use strict";var UTr=I_();R_.exports=UTr});var F_=s((DSe,P_)=>{"use strict";var Dn=$r(),GTr=XS(),DTr=N_(),HTr=__(),zTr=Vr(),WTr=L_();function XTr(r){return Dn(r,"add",GTr),Dn(r,"floorn",DTr),Dn(r,"mul",HTr),Dn(r,"pow",zTr),Dn(r,"sub",WTr),r}P_.exports=XTr});var B_=s((HSe,M_)=>{"use strict";var x_=Er().isPrimitive,JTr=hr(),YTr=Ir(),j_=C();function ZTr(r,e){return t;function t(i,a){var n;if(!x_(i)){if(e.nonnumeric===void 0)throw new TypeError(j_("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!x_(a)){if(e.nonnumeric===void 0)throw new TypeError(j_("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return n=r(i,a),n!==n?e.nan:n===JTr?e.pinf:n===YTr?e.ninf:n}}M_.exports=ZTr});var Xv=s((zSe,k_)=>{"use strict";var $Tr=B_();k_.exports=$Tr});var V_=s((WSe,C_)=>{"use strict";var QTr=j0(),KTr=O1(),rIr=as(),eIr=C(),tIr=is(),iIr=Xv(),aIr=["number","number"],nIr=["First argument","Second argument"];function sIr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(eIr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=tIr([r[0],r[1]],aIr,nIr),t=QTr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=rIr(t),n=iIr(e,i),r[0].push(a),r[1].push(t),KTr(r[0],r[1],n),a}C_.exports=sIr});var G_=s((XSe,U_)=>{"use strict";var uIr=V_();U_.exports=uIr});var H_=s((JSe,D_)=>{"use strict";var oIr=Er().isPrimitive,vIr=hr(),fIr=Ir(),cIr=C();function lIr(r,e){return t;function t(i){var a;if(!oIr(i)){if(e.nonnumeric===void 0)throw new TypeError(cIr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return a=r(i),a!==a?e.nan:a===vIr?e.pinf:a===fIr?e.ninf:a}}D_.exports=lIr});var _s=s((YSe,z_)=>{"use strict";var pIr=H_();z_.exports=pIr});var X_=s((ZSe,W_)=>{"use strict";var Jv=Er().isPrimitive,dIr=hr(),gIr=Ir(),Yv=C();function mIr(r,e){return t;function t(i,a,n){var u;if(!Jv(i)){if(e.nonnumeric===void 0)throw new TypeError(Yv("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Jv(a)){if(e.nonnumeric===void 0)throw new TypeError(Yv("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Jv(n)){if(e.nonnumeric===void 0)throw new TypeError(Yv("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return u=r(i,a,n),u!==u?e.nan:u===dIr?e.pinf:u===gIr?e.ninf:u}}W_.exports=mIr});var Zv=s(($Se,J_)=>{"use strict";var yIr=X_();J_.exports=yIr});var Z_=s((QSe,Y_)=>{"use strict";var Ts=Er().isPrimitive,hIr=hr(),qIr=Ir(),Is=C();function bIr(r,e){return t;function t(i,a,n,u){var o;if(!Ts(i)){if(e.nonnumeric===void 0)throw new TypeError(Is("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Ts(a)){if(e.nonnumeric===void 0)throw new TypeError(Is("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Ts(n)){if(e.nonnumeric===void 0)throw new TypeError(Is("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Ts(u)){if(e.nonnumeric===void 0)throw new TypeError(Is("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,a,n,u),o!==o?e.nan:o===hIr?e.pinf:o===qIr?e.ninf:o}}Y_.exports=bIr});var Q_=s((KSe,$_)=>{"use strict";var wIr=Z_();$_.exports=wIr});var rT=s((rOe,K_)=>{"use strict";var Hn=Er().isPrimitive,EIr=hr(),NIr=Ir(),zn=C();function SIr(r,e){return t;function t(i,a,n,u,o){var v;if(!Hn(i)){if(e.nonnumeric===void 0)throw new TypeError(zn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Hn(a)){if(e.nonnumeric===void 0)throw new TypeError(zn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Hn(n)){if(e.nonnumeric===void 0)throw new TypeError(zn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Hn(u)){if(e.nonnumeric===void 0)throw new TypeError(zn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Hn(o)){if(e.nonnumeric===void 0)throw new TypeError(zn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,a,n,u,o),v!==v?e.nan:v===EIr?e.pinf:v===NIr?e.ninf:v}}K_.exports=SIr});var tT=s((eOe,eT)=>{"use strict";var OIr=rT();eT.exports=OIr});var aT=s((tOe,iT)=>{"use strict";var AIr=j0(),_Ir=_1(),TIr=as(),IIr=C(),RIr=is(),LIr=Zv(),PIr=["number","number","number"],FIr=["First argument","Second argument","Third argument"];function xIr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(IIr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=RIr([r[0],r[1],r[2]],PIr,FIr),t=AIr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=TIr(t),n=LIr(e,i),r[0].push(a),r[1].push(t),_Ir(r[0],r[1],n),a}iT.exports=xIr});var sT=s((iOe,nT)=>{"use strict";var jIr=aT();nT.exports=jIr});var oT=s((aOe,uT)=>{"use strict";var MIr=qe(),BIr=T2(),kIr=C(),CIr=_s();function VIr(r,e){var t,i,a,n,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")i[n]=r[u+1];else throw new Error(kIr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return a=CIr(e,i),MIr(t)?(BIr([t,t],[t.length,t[0].length],a),t):a(t)}uT.exports=VIr});var fT=s((nOe,vT)=>{"use strict";var UIr=oT();vT.exports=UIr});var lT=s((sOe,cT)=>{"use strict";function GIr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}cT.exports=GIr});var $v=s((uOe,pT)=>{"use strict";var DIr=lT();pT.exports=DIr});var gT=s((oOe,dT)=>{"use strict";function HIr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}dT.exports=HIr});var ct=s((vOe,mT)=>{"use strict";var zIr=gT();mT.exports=zIr});var hT=s((fOe,yT)=>{"use strict";var WIr=ga(),XIr=Yi(),JIr=C0(),YIr=Oa(),ZIr=V0(),$Ir=ct();function QIr(r){var e,t,i,a;return e=r.data,i=r.shape,a=r.dtype,t=WIr(e),{ref:r,dtype:a,data:e,length:$Ir(i),shape:i,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[XIr(a),JIr(a)]:[YIr(a),ZIr(a)]}}yT.exports=QIr});var bT=s((cOe,qT)=>{"use strict";var KIr=hT();qT.exports=KIr});var ET=s((lOe,wT)=>{"use strict";function rRr(r){var e,t;if(e=[],r<=0)return e;for(t=0;t<r;t++)e.push(t);return e}wT.exports=rRr});var ST=s((pOe,NT)=>{"use strict";var eRr=ET();NT.exports=eRr});var AT=s((dOe,OT)=>{"use strict";function tRr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}OT.exports=tRr});var Qv=s((gOe,_T)=>{"use strict";var iRr=AT();_T.exports=iRr});var IT=s((mOe,TT)=>{"use strict";function aRr(r,e){var t,i,a,n,u,o,v,f,c,l;for(a=1,n=1,l=1;l<r.length;l++){for(v=r[a],t=v<0?-v:v,f=e[n],u=a-1,o=n-1;u>=0&&(c=r[u],i=c<0?-c:c,!(i<=t));)r[u+1]=c,e[o+1]=e[o],u-=1,o-=1;r[u+1]=v,e[o+1]=f,a+=1,n+=1}}TT.exports=aRr});var PT=s((yOe,LT)=>{"use strict";var nRr=ST(),sRr=En(),RT=Qv(),uRr=IT();function oRr(r,e,t){var i;return i=nRr(r.length),e=sRr(e),uRr(e,i),r=RT(r,i),t=RT(t,i),{sh:r,sx:e,sy:t}}LT.exports=oRr});var ne=s((hOe,FT)=>{"use strict";var vRr=PT();FT.exports=vRr});var xT=s((qOe,fRr)=>{fRr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var MT=s((bOe,jT)=>{"use strict";var cRr=xT();function lRr(r){return cRr[r]||null}jT.exports=lRr});var Kv=s((wOe,BT)=>{"use strict";var pRr=MT();BT.exports=pRr});var CT=s((EOe,kT)=>{"use strict";var dRr={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};kT.exports=dRr});var GT=s((NOe,UT)=>{"use strict";var VT=Kv(),rf=CT();function gRr(r,e){var t,i;return t=VT(r),i=VT(e),t===null||i===null?rf.BLOCK_SIZE_IN_ELEMENTS:t>i?rf.BLOCK_SIZE_IN_BYTES/t|0:rf.BLOCK_SIZE_IN_BYTES/i|0}UT.exports=gRr});var se=s((SOe,DT)=>{"use strict";var mRr=GT();DT.exports=mRr});var zT=s((OOe,HT)=>{"use strict";var yRr=ne(),hRr=se();function qRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(E=yRr(r.shape,r.strides,e.strides),y=E.sh,h=E.sx,q=E.sy,i=hRr(r.dtype,e.dtype),w=r.offset,A=e.offset,a=r.data,n=e.data,v=h[0],c=q[0],u=r.accessors[0],o=e.accessors[1],I=y[1];I>0;)for(I<i?(d=I,I=0):(d=i,I-=i),p=w+I*h[1],m=A+I*q[1],N=y[0];N>0;)for(N<i?(g=N,N=0):(g=i,N-=i),b=p+N*h[0],T=m+N*q[0],f=h[1]-g*h[0],l=q[1]-g*q[0],O=0;O<d;O++){for(S=0;S<g;S++)o(n,T,t(u(a,b))),b+=v,T+=c;b+=f,T+=l}}HT.exports=qRr});var XT=s((AOe,WT)=>{"use strict";var bRr=ne(),wRr=se();function ERr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V;for(V=bRr(r.shape,r.strides,e.strides),q=V.sh,T=V.sx,S=V.sy,i=wRr(r.dtype,e.dtype),O=r.offset,N=e.offset,a=r.data,n=e.data,v=T[0],l=S[0],u=r.accessors[0],o=e.accessors[1],L=q[2];L>0;)for(L<i?(b=L,L=0):(b=i,L-=i),g=O+L*T[2],h=N+L*S[2],x=q[1];x>0;)for(x<i?(A=x,x=0):(A=i,x-=i),c=T[2]-A*T[1],m=S[2]-A*S[1],y=g+x*T[1],d=h+x*S[1],F=q[0];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),I=y+F*T[0],E=d+F*S[0],f=T[1]-w*T[0],p=S[1]-w*S[0],_=0;_<b;_++){for(j=0;j<A;j++){for(P=0;P<w;P++)o(n,E,t(u(a,I))),I+=v,E+=l;I+=f,E+=p}I+=c,E+=m}}WT.exports=ERr});var YT=s((_Oe,JT)=>{"use strict";var NRr=ne(),SRr=se();function ORr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z;for(z=NRr(r.shape,r.strides,e.strides),T=z.sh,E=z.sx,P=z.sy,i=SRr(r.dtype,e.dtype),j=r.offset,_=e.offset,a=r.data,n=e.data,v=E[0],p=P[0],u=r.accessors[0],o=e.accessors[1],H=T[3];H>0;)for(H<i?(I=H,H=0):(I=i,H-=i),q=j+H*E[3],b=_+H*P[3],U=T[2];U>0;)for(U<i?(N=U,U=0):(N=i,U-=i),l=E[3]-N*E[2],g=P[3]-N*P[2],h=q+U*E[2],A=b+U*P[2],M=T[1];M>0;)for(M<i?(O=M,M=0):(O=i,M-=i),c=E[2]-O*E[1],y=P[2]-O*P[1],d=h+M*E[1],w=A+M*P[1],k=T[0];k>0;)for(k<i?(S=k,k=0):(S=i,k-=i),F=d+k*E[0],x=w+k*P[0],f=E[1]-S*E[0],m=P[1]-S*P[0],R=0;R<I;R++){for(B=0;B<N;B++){for(V=0;V<O;V++){for(L=0;L<S;L++)o(n,x,t(u(a,F))),F+=v,x+=p;F+=f,x+=m}F+=c,x+=y}F+=l,x+=g}}JT.exports=ORr});var $T=s((TOe,ZT)=>{"use strict";var ARr=ne(),_Rr=se();function TRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er;for(er=ARr(r.shape,r.strides,e.strides),I=er.sh,x=er.sx,L=er.sy,i=_Rr(r.dtype,e.dtype),V=r.offset,B=e.offset,a=r.data,n=e.data,v=x[0],m=L[0],u=r.accessors[0],o=e.accessors[1],$=I[4];$>0;)for($<i?(F=$,$=0):(F=i,$-=i),b=V+$*x[4],N=B+$*L[4],J=I[3];J>0;)for(J<i?(_=J,J=0):(_=i,J-=i),p=x[4]-_*x[3],h=L[4]-_*L[3],A=b+J*x[3],O=N+J*L[3],X=I[2];X>0;)for(X<i?(j=X,X=0):(j=i,X-=i),l=x[3]-j*x[2],d=L[3]-j*L[2],w=A+X*x[2],S=O+X*L[2],Q=I[1];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=x[2]-P*x[1],g=L[2]-P*L[1],q=w+Q*x[1],T=S+Q*L[1],Z=I[0];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),R=q+Z*x[0],k=T+Z*L[0],f=x[1]-E*x[0],y=L[1]-E*L[0],Y=0;Y<F;Y++){for(z=0;z<_;z++){for(H=0;H<j;H++){for(U=0;U<P;U++){for(M=0;M<E;M++)o(n,k,t(u(a,R))),R+=v,k+=m;R+=f,k+=y}R+=c,k+=g}R+=l,k+=d}R+=p,k+=h}}ZT.exports=TRr});var KT=s((IOe,QT)=>{"use strict";var IRr=ne(),RRr=se();function LRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir;for(ir=IRr(r.shape,r.strides,e.strides),_=ir.sh,k=ir.sx,M=ir.sy,i=RRr(r.dtype,e.dtype),U=r.offset,H=e.offset,a=r.data,n=e.data,v=k[0],y=M[0],u=r.accessors[0],o=e.accessors[1],fr=_[5];fr>0;)for(fr<i?(R=fr,fr=0):(R=i,fr-=i),O=U+fr*k[5],j=H+fr*M[5],ar=_[4];ar>0;)for(ar<i?(B=ar,ar=0):(B=i,ar-=i),m=k[5]-B*k[4],w=M[5]-B*M[4],S=O+ar*k[4],P=j+ar*M[4],tr=_[3];tr>0;)for(tr<i?(V=tr,tr=0):(V=i,tr-=i),p=k[4]-V*k[3],q=M[4]-V*M[3],T=S+tr*k[3],E=P+tr*M[3],rr=_[2];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=k[3]-L*k[2],h=M[3]-L*M[2],b=T+rr*k[2],I=E+rr*M[2],K=_[1];K>0;)for(K<i?(x=K,K=0):(x=i,K-=i),c=k[2]-x*k[1],d=M[2]-x*M[1],A=b+K*k[1],N=I+K*M[1],ur=_[0];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),z=A+ur*k[0],Y=N+ur*M[0],f=k[1]-F*k[0],g=M[1]-F*M[0],er=0;er<R;er++){for($=0;$<B;$++){for(J=0;J<V;J++){for(X=0;X<L;X++){for(Q=0;Q<x;Q++){for(Z=0;Z<F;Z++)o(n,Y,t(u(a,z))),z+=v,Y+=y;z+=f,Y+=g}z+=c,Y+=d}z+=l,Y+=h}z+=p,Y+=q}z+=m,Y+=w}}QT.exports=LRr});var eI=s((ROe,rI)=>{"use strict";var PRr=ne(),FRr=se();function xRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr;for(gr=PRr(r.shape,r.strides,e.strides),V=gr.sh,Y=gr.sx,Z=gr.sy,i=FRr(r.dtype,e.dtype),Q=r.offset,X=e.offset,a=r.data,n=e.data,v=Y[0],g=Z[0],u=r.accessors[0],o=e.accessors[1],lr=V[6];lr>0;)for(lr<i?(z=lr,lr=0):(z=i,lr-=i),E=Q+lr*Y[6],L=X+lr*Z[6],pr=V[5];pr>0;)for(pr<i?(H=pr,pr=0):(H=i,pr-=i),y=Y[6]-H*Y[5],b=Z[6]-H*Z[5],I=E+pr*Y[5],x=L+pr*Z[5],cr=V[4];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),m=Y[5]-U*Y[4],A=Z[5]-U*Z[4],N=I+cr*Y[4],F=x+cr*Z[4],or=V[3];or>0;)for(or<i?(M=or,or=0):(M=i,or-=i),p=Y[4]-M*Y[3],w=Z[4]-M*Z[3],O=N+or*Y[3],_=F+or*Z[3],sr=V[2];sr>0;)for(sr<i?(k=sr,sr=0):(k=i,sr-=i),l=Y[3]-k*Y[2],q=Z[3]-k*Z[2],S=O+sr*Y[2],j=_+sr*Z[2],nr=V[1];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=Y[2]-R*Y[1],h=Z[2]-R*Z[1],T=S+nr*Y[1],P=j+nr*Z[1],ir=V[0];ir>0;)for(ir<i?(B=ir,ir=0):(B=i,ir-=i),J=T+ir*Y[0],$=P+ir*Z[0],f=Y[1]-B*Y[0],d=Z[1]-B*Z[0],fr=0;fr<z;fr++){for(ar=0;ar<H;ar++){for(tr=0;tr<U;tr++){for(rr=0;rr<M;rr++){for(K=0;K<k;K++){for(ur=0;ur<R;ur++){for(er=0;er<B;er++)o(n,$,t(u(a,J))),J+=v,$+=g;J+=f,$+=d}J+=c,$+=h}J+=l,$+=q}J+=p,$+=w}J+=m,$+=A}J+=y,$+=b}}rI.exports=xRr});var iI=s((LOe,tI)=>{"use strict";var jRr=ne(),MRr=se();function BRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br;for(Br=jRr(r.shape,r.strides,e.strides),M=Br.sh,$=Br.sx,er=Br.sy,i=MRr(r.dtype,e.dtype),ur=r.offset,K=e.offset,a=r.data,n=e.data,v=$[0],d=er[0],u=r.accessors[0],o=e.accessors[1],Pr=M[7];Pr>0;)for(Pr<i?(J=Pr,Pr=0):(J=i,Pr-=i),_=ur+Pr*$[7],k=K+Pr*er[7],wr=M[6];wr>0;)for(wr<i?(X=wr,wr=0):(X=i,wr-=i),g=$[7]-X*$[6],S=er[7]-X*er[6],j=_+wr*$[6],R=k+wr*er[6],_r=M[5];_r>0;)for(_r<i?(Q=_r,_r=0):(Q=i,_r-=i),y=$[6]-Q*$[5],T=er[6]-Q*er[5],P=j+_r*$[5],B=R+_r*er[5],Ar=M[4];Ar>0;)for(Ar<i?(Z=Ar,Ar=0):(Z=i,Ar-=i),m=$[5]-Z*$[4],b=er[5]-Z*er[4],E=P+Ar*$[4],V=B+Ar*er[4],xr=M[3];xr>0;)for(xr<i?(Y=xr,xr=0):(Y=i,xr-=i),p=$[4]-Y*$[3],A=er[4]-Y*er[3],I=E+xr*$[3],L=V+xr*er[3],Fr=M[2];Fr>0;)for(Fr<i?(z=Fr,Fr=0):(z=i,Fr-=i),l=$[3]-z*$[2],w=er[3]-z*er[2],N=I+Fr*$[2],x=L+Fr*er[2],gr=M[1];gr>0;)for(gr<i?(H=gr,gr=0):(H=i,gr-=i),c=$[2]-H*$[1],q=er[2]-H*er[1],O=N+gr*$[1],F=x+gr*er[1],lr=M[0];lr>0;)for(lr<i?(U=lr,lr=0):(U=i,lr-=i),rr=O+lr*$[0],tr=F+lr*er[0],f=$[1]-U*$[0],h=er[1]-U*er[0],pr=0;pr<J;pr++){for(cr=0;cr<X;cr++){for(or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<z;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++)o(n,tr,t(u(a,rr))),rr+=v,tr+=d;rr+=f,tr+=h}rr+=c,tr+=q}rr+=l,tr+=w}rr+=p,tr+=A}rr+=m,tr+=b}rr+=y,tr+=T}rr+=g,tr+=S}}tI.exports=BRr});var nI=s((POe,aI)=>{"use strict";var kRr=ne(),CRr=se();function VRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr,zr,Qr;for(Qr=kRr(r.shape,r.strides,e.strides),Y=Qr.sh,tr=Qr.sx,ar=Qr.sy,i=CRr(r.dtype,e.dtype),fr=r.offset,ir=e.offset,a=r.data,n=e.data,v=tr[0],h=ar[0],u=r.accessors[0],o=e.accessors[1],zr=Y[8];zr>0;)for(zr<i?(rr=zr,zr=0):(rr=i,zr-=i),L=fr+zr*tr[8],z=ir+zr*ar[8],jr=Y[7];jr>0;)for(jr<i?(K=jr,jr=0):(K=i,jr-=i),d=tr[8]-K*tr[7],N=ar[8]-K*ar[7],x=L+jr*tr[7],H=z+jr*ar[7],Rr=Y[6];Rr>0;)for(Rr<i?(ur=Rr,Rr=0):(ur=i,Rr-=i),g=tr[7]-ur*tr[6],O=ar[7]-ur*ar[6],F=x+Rr*tr[6],U=H+Rr*ar[6],Cr=Y[5];Cr>0;)for(Cr<i?(er=Cr,Cr=0):(er=i,Cr-=i),y=tr[6]-er*tr[5],S=ar[6]-er*ar[5],_=F+Cr*tr[5],M=U+Cr*ar[5],kr=Y[4];kr>0;)for(kr<i?($=kr,kr=0):($=i,kr-=i),m=tr[5]-$*tr[4],T=ar[5]-$*ar[4],j=_+kr*tr[4],k=M+kr*ar[4],Xr=Y[3];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=tr[4]-J*tr[3],b=ar[4]-J*ar[3],P=j+Xr*tr[3],R=k+Xr*ar[3],Br=Y[2];Br>0;)for(Br<i?(X=Br,Br=0):(X=i,Br-=i),l=tr[3]-X*tr[2],A=ar[3]-X*ar[2],E=P+Br*tr[2],B=R+Br*ar[2],Pr=Y[1];Pr>0;)for(Pr<i?(Q=Pr,Pr=0):(Q=i,Pr-=i),c=tr[2]-Q*tr[1],w=ar[2]-Q*ar[1],I=E+Pr*tr[1],V=B+Pr*ar[1],wr=Y[0];wr>0;)for(wr<i?(Z=wr,wr=0):(Z=i,wr-=i),nr=I+wr*tr[0],sr=V+wr*ar[0],f=tr[1]-Z*tr[0],q=ar[1]-Z*ar[0],_r=0;_r<rr;_r++){for(Ar=0;Ar<K;Ar++){for(xr=0;xr<ur;xr++){for(Fr=0;Fr<er;Fr++){for(gr=0;gr<$;gr++){for(lr=0;lr<J;lr++){for(pr=0;pr<X;pr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++)o(n,sr,t(u(a,nr))),nr+=v,sr+=h;nr+=f,sr+=q}nr+=c,sr+=w}nr+=l,sr+=A}nr+=p,sr+=b}nr+=m,sr+=T}nr+=y,sr+=S}nr+=g,sr+=O}nr+=d,sr+=N}}aI.exports=VRr});var uI=s((FOe,sI)=>{"use strict";var URr=ne(),GRr=se();function DRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr,zr,Qr,fe,ce,le,pe,Me,ti,P0;for(P0=URr(r.shape,r.strides,e.strides),J=P0.sh,sr=P0.sx,or=P0.sy,i=GRr(r.dtype,e.dtype),cr=r.offset,pr=e.offset,a=r.data,n=e.data,v=sr[0],q=or[0],u=r.accessors[0],o=e.accessors[1],ti=J[9];ti>0;)for(ti<i?(nr=ti,ti=0):(nr=i,ti-=i),R=cr+ti*sr[9],X=pr+ti*or[9],Me=J[8];Me>0;)for(Me<i?(ir=Me,Me=0):(ir=i,Me-=i),h=sr[9]-ir*sr[8],E=or[9]-ir*or[8],B=R+Me*sr[8],Q=X+Me*or[8],pe=J[7];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),d=sr[8]-fr*sr[7],I=or[8]-fr*or[7],V=B+pe*sr[7],Z=Q+pe*or[7],le=J[6];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=sr[7]-ar*sr[6],N=or[7]-ar*or[6],L=V+le*sr[6],Y=Z+le*or[6],ce=J[5];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=sr[6]-tr*sr[5],O=or[6]-tr*or[5],x=L+ce*sr[5],z=Y+ce*or[5],fe=J[4];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=sr[5]-rr*sr[4],S=or[5]-rr*or[4],F=x+fe*sr[4],H=z+fe*or[4],Qr=J[3];Qr>0;)for(Qr<i?(K=Qr,Qr=0):(K=i,Qr-=i),p=sr[4]-K*sr[3],T=or[4]-K*or[3],_=F+Qr*sr[3],U=H+Qr*or[3],zr=J[2];zr>0;)for(zr<i?(ur=zr,zr=0):(ur=i,zr-=i),l=sr[3]-ur*sr[2],b=or[3]-ur*or[2],j=_+zr*sr[2],M=U+zr*or[2],jr=J[1];jr>0;)for(jr<i?(er=jr,jr=0):(er=i,jr-=i),c=sr[2]-er*sr[1],A=or[2]-er*or[1],P=j+jr*sr[1],k=M+jr*or[1],Rr=J[0];Rr>0;)for(Rr<i?($=Rr,Rr=0):($=i,Rr-=i),lr=P+Rr*sr[0],gr=k+Rr*or[0],f=sr[1]-$*sr[0],w=or[1]-$*or[0],Cr=0;Cr<nr;Cr++){for(kr=0;kr<ir;kr++){for(Xr=0;Xr<fr;Xr++){for(Br=0;Br<ar;Br++){for(Pr=0;Pr<tr;Pr++){for(wr=0;wr<rr;wr++){for(_r=0;_r<K;_r++){for(Ar=0;Ar<ur;Ar++){for(xr=0;xr<er;xr++){for(Fr=0;Fr<$;Fr++)o(n,gr,t(u(a,lr))),lr+=v,gr+=q;lr+=f,gr+=w}lr+=c,gr+=A}lr+=l,gr+=b}lr+=p,gr+=T}lr+=m,gr+=S}lr+=y,gr+=O}lr+=g,gr+=N}lr+=d,gr+=I}lr+=h,gr+=E}}sI.exports=DRr});var vI=s((xOe,oI)=>{"use strict";var HRr=ne(),zRr=se();function WRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(N=HRr(r.shape,r.strides,e.strides),p=N.sh,g=N.sx,d=N.sy,i=zRr(r.dtype,e.dtype),h=r.offset,q=e.offset,a=r.data,n=e.data,u=g[0],v=d[0],O=p[1];O>0;)for(O<i?(y=O,O=0):(y=i,O-=i),c=h+O*g[1],l=q+O*d[1],S=p[0];S>0;)for(S<i?(m=S,S=0):(m=i,S-=i),w=c+S*g[0],A=l+S*d[0],o=g[1]-m*g[0],f=d[1]-m*d[0],T=0;T<y;T++){for(b=0;b<m;b++)n[A]=t(a[w]),w+=u,A+=v;w+=o,A+=f}}oI.exports=WRr});var cI=s((jOe,fI)=>{"use strict";var XRr=ne(),JRr=se();function YRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x;for(x=XRr(r.shape,r.strides,e.strides),d=x.sh,A=x.sx,b=x.sy,i=JRr(r.dtype,e.dtype),T=r.offset,S=e.offset,a=r.data,n=e.data,u=A[0],f=b[0],F=d[2];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),m=T+F*A[2],g=S+F*b[2],_=d[1];_>0;)for(_<i?(q=_,_=0):(q=i,_-=i),v=A[2]-q*A[1],l=b[2]-q*b[1],p=m+_*A[1],y=g+_*b[1],j=d[0];j>0;)for(j<i?(h=j,j=0):(h=i,j-=i),O=p+j*A[0],N=y+j*b[0],o=A[1]-h*A[0],c=b[1]-h*b[0],P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++)n[N]=t(a[O]),O+=u,N+=f;O+=o,N+=c}O+=v,N+=l}}fI.exports=YRr});var pI=s((MOe,lI)=>{"use strict";var ZRr=ne(),$Rr=se();function QRr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U;for(U=ZRr(r.shape,r.strides,e.strides),A=U.sh,N=U.sx,I=U.sy,i=$Rr(r.dtype,e.dtype),E=r.offset,P=e.offset,a=r.data,n=e.data,u=N[0],c=I[0],M=A[3];M>0;)for(M<i?(O=M,M=0):(O=i,M-=i),d=E+M*N[3],w=P+M*I[3],k=A[2];k>0;)for(k<i?(S=k,k=0):(S=i,k-=i),f=N[3]-S*N[2],m=I[3]-S*I[2],g=d+k*N[2],q=w+k*I[2],R=A[1];R>0;)for(R<i?(T=R,R=0):(T=i,R-=i),v=N[2]-T*N[1],p=I[2]-T*I[1],y=g+R*N[1],h=q+R*I[1],B=A[0];B>0;)for(B<i?(b=B,B=0):(b=i,B-=i),j=y+B*N[0],_=h+B*I[0],o=N[1]-b*N[0],l=I[1]-b*I[0],V=0;V<O;V++){for(L=0;L<S;L++){for(x=0;x<T;x++){for(F=0;F<b;F++)n[_]=t(a[j]),j+=u,_+=c;j+=o,_+=l}j+=v,_+=p}j+=f,_+=m}}lI.exports=QRr});var gI=s((BOe,dI)=>{"use strict";var KRr=ne(),rLr=se();function eLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J;for(J=KRr(r.shape,r.strides,e.strides),O=J.sh,_=J.sx,F=J.sy,i=rLr(r.dtype,e.dtype),x=r.offset,L=e.offset,a=r.data,n=e.data,u=_[0],l=F[0],X=O[4];X>0;)for(X<i?(j=X,X=0):(j=i,X-=i),w=x+X*_[4],S=L+X*F[4],Q=O[3];Q>0;)for(Q<i?(P=Q,Q=0):(P=i,Q-=i),c=_[4]-P*_[3],g=F[4]-P*F[3],q=w+Q*_[3],T=S+Q*F[3],Z=O[2];Z>0;)for(Z<i?(E=Z,Z=0):(E=i,Z-=i),f=_[3]-E*_[2],y=F[3]-E*F[2],h=q+Z*_[2],b=T+Z*F[2],Y=O[1];Y>0;)for(Y<i?(I=Y,Y=0):(I=i,Y-=i),v=_[2]-I*_[1],m=F[2]-I*F[1],d=h+Y*_[1],A=b+Y*F[1],z=O[0];z>0;)for(z<i?(N=z,z=0):(N=i,z-=i),V=d+z*_[0],B=A+z*F[0],o=_[1]-N*_[0],p=F[1]-N*F[0],H=0;H<j;H++){for(U=0;U<P;U++){for(M=0;M<E;M++){for(k=0;k<I;k++){for(R=0;R<N;R++)n[B]=t(a[V]),V+=u,B+=l;V+=o,B+=p}V+=v,B+=m}V+=f,B+=y}V+=c,B+=g}}dI.exports=eLr});var yI=s((kOe,mI)=>{"use strict";var tLr=ne(),iLr=se();function aLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar;for(ar=tLr(r.shape,r.strides,e.strides),P=ar.sh,B=ar.sx,R=ar.sy,i=iLr(r.dtype,e.dtype),k=r.offset,M=e.offset,a=r.data,n=e.data,u=B[0],p=R[0],tr=P[5];tr>0;)for(tr<i?(V=tr,tr=0):(V=i,tr-=i),T=k+tr*B[5],E=M+tr*R[5],rr=P[4];rr>0;)for(rr<i?(L=rr,rr=0):(L=i,rr-=i),l=B[5]-L*B[4],h=R[5]-L*R[4],b=T+rr*B[4],I=E+rr*R[4],K=P[3];K>0;)for(K<i?(x=K,K=0):(x=i,K-=i),c=B[4]-x*B[3],d=R[4]-x*R[3],A=b+K*B[3],N=I+K*R[3],ur=P[2];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),f=B[3]-F*B[2],g=R[3]-F*R[2],w=A+ur*B[2],O=N+ur*R[2],er=P[1];er>0;)for(er<i?(_=er,er=0):(_=i,er-=i),v=B[2]-_*B[1],y=R[2]-_*R[1],q=w+er*B[1],S=O+er*R[1],$=P[0];$>0;)for($<i?(j=$,$=0):(j=i,$-=i),U=q+$*B[0],H=S+$*R[0],o=B[1]-j*B[0],m=R[1]-j*R[0],J=0;J<V;J++){for(X=0;X<L;X++){for(Q=0;Q<x;Q++){for(Z=0;Z<F;Z++){for(Y=0;Y<_;Y++){for(z=0;z<j;z++)n[H]=t(a[U]),U+=u,H+=p;U+=o,H+=m}U+=v,H+=y}U+=f,H+=g}U+=c,H+=d}U+=l,H+=h}}mI.exports=aLr});var qI=s((COe,hI)=>{"use strict";var nLr=ne(),sLr=se();function uLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr;for(pr=nLr(r.shape,r.strides,e.strides),x=pr.sh,H=pr.sx,z=pr.sy,i=sLr(r.dtype,e.dtype),Y=r.offset,Z=e.offset,a=r.data,n=e.data,u=H[0],m=z[0],cr=x[6];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),N=Y+cr*H[6],F=Z+cr*z[6],or=x[5];or>0;)for(or<i?(M=or,or=0):(M=i,or-=i),p=H[6]-M*H[5],w=z[6]-M*z[5],O=N+or*H[5],_=F+or*z[5],sr=x[4];sr>0;)for(sr<i?(k=sr,sr=0):(k=i,sr-=i),l=H[5]-k*H[4],q=z[5]-k*z[4],S=O+sr*H[4],j=_+sr*z[4],nr=x[3];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=H[4]-R*H[3],h=z[4]-R*z[3],T=S+nr*H[3],P=j+nr*z[3],ir=x[2];ir>0;)for(ir<i?(B=ir,ir=0):(B=i,ir-=i),f=H[3]-B*H[2],d=z[3]-B*z[2],b=T+ir*H[2],E=P+ir*z[2],fr=x[1];fr>0;)for(fr<i?(V=fr,fr=0):(V=i,fr-=i),v=H[2]-V*H[1],g=z[2]-V*z[1],A=b+fr*H[1],I=E+fr*z[1],ar=x[0];ar>0;)for(ar<i?(L=ar,ar=0):(L=i,ar-=i),Q=A+ar*H[0],X=I+ar*z[0],o=H[1]-L*H[0],y=z[1]-L*z[0],tr=0;tr<U;tr++){for(rr=0;rr<M;rr++){for(K=0;K<k;K++){for(ur=0;ur<R;ur++){for(er=0;er<B;er++){for($=0;$<V;$++){for(J=0;J<L;J++)n[X]=t(a[Q]),Q+=u,X+=m;Q+=o,X+=y}Q+=v,X+=g}Q+=f,X+=d}Q+=c,X+=h}Q+=l,X+=q}Q+=p,X+=w}}hI.exports=uLr});var wI=s((VOe,bI)=>{"use strict";var oLr=ne(),vLr=se();function fLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr;for(wr=oLr(r.shape,r.strides,e.strides),R=wr.sh,X=wr.sx,J=wr.sy,i=vLr(r.dtype,e.dtype),$=r.offset,er=e.offset,a=r.data,n=e.data,u=X[0],y=J[0],_r=R[7];_r>0;)for(_r<i?(Q=_r,_r=0):(Q=i,_r-=i),P=$+_r*X[7],B=er+_r*J[7],Ar=R[6];Ar>0;)for(Ar<i?(Z=Ar,Ar=0):(Z=i,Ar-=i),m=X[7]-Z*X[6],b=J[7]-Z*J[6],E=P+Ar*X[6],V=B+Ar*J[6],xr=R[5];xr>0;)for(xr<i?(Y=xr,xr=0):(Y=i,xr-=i),p=X[6]-Y*X[5],A=J[6]-Y*J[5],I=E+xr*X[5],L=V+xr*J[5],Fr=R[4];Fr>0;)for(Fr<i?(z=Fr,Fr=0):(z=i,Fr-=i),l=X[5]-z*X[4],w=J[5]-z*J[4],N=I+Fr*X[4],x=L+Fr*J[4],gr=R[3];gr>0;)for(gr<i?(H=gr,gr=0):(H=i,gr-=i),c=X[4]-H*X[3],q=J[4]-H*J[3],O=N+gr*X[3],F=x+gr*J[3],lr=R[2];lr>0;)for(lr<i?(U=lr,lr=0):(U=i,lr-=i),f=X[3]-U*X[2],h=J[3]-U*J[2],S=O+lr*X[2],_=F+lr*J[2],pr=R[1];pr>0;)for(pr<i?(M=pr,pr=0):(M=i,pr-=i),v=X[2]-M*X[1],d=J[2]-M*J[1],T=S+pr*X[1],j=_+pr*J[1],cr=R[0];cr>0;)for(cr<i?(k=cr,cr=0):(k=i,cr-=i),ur=T+cr*X[0],K=j+cr*J[0],o=X[1]-k*X[0],g=J[1]-k*J[0],or=0;or<Q;or++){for(sr=0;sr<Z;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<z;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++){for(tr=0;tr<M;tr++){for(rr=0;rr<k;rr++)n[K]=t(a[ur]),ur+=u,K+=y;ur+=o,K+=g}ur+=v,K+=d}ur+=f,K+=h}ur+=c,K+=q}ur+=l,K+=w}ur+=p,K+=A}ur+=m,K+=b}}bI.exports=fLr});var NI=s((UOe,EI)=>{"use strict";var cLr=ne(),lLr=se();function pLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr;for(jr=cLr(r.shape,r.strides,e.strides),H=jr.sh,K=jr.sx,rr=jr.sy,i=lLr(r.dtype,e.dtype),tr=r.offset,ar=e.offset,a=r.data,n=e.data,u=K[0],g=rr[0],Rr=H[8];Rr>0;)for(Rr<i?(ur=Rr,Rr=0):(ur=i,Rr-=i),F=tr+Rr*K[8],U=ar+Rr*rr[8],Cr=H[7];Cr>0;)for(Cr<i?(er=Cr,Cr=0):(er=i,Cr-=i),y=K[8]-er*K[7],S=rr[8]-er*rr[7],_=F+Cr*K[7],M=U+Cr*rr[7],kr=H[6];kr>0;)for(kr<i?($=kr,kr=0):($=i,kr-=i),m=K[7]-$*K[6],T=rr[7]-$*rr[6],j=_+kr*K[6],k=M+kr*rr[6],Xr=H[5];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=K[6]-J*K[5],b=rr[6]-J*rr[5],P=j+Xr*K[5],R=k+Xr*rr[5],Br=H[4];Br>0;)for(Br<i?(X=Br,Br=0):(X=i,Br-=i),l=K[5]-X*K[4],A=rr[5]-X*rr[4],E=P+Br*K[4],B=R+Br*rr[4],Pr=H[3];Pr>0;)for(Pr<i?(Q=Pr,Pr=0):(Q=i,Pr-=i),c=K[4]-Q*K[3],w=rr[4]-Q*rr[3],I=E+Pr*K[3],V=B+Pr*rr[3],wr=H[2];wr>0;)for(wr<i?(Z=wr,wr=0):(Z=i,wr-=i),f=K[3]-Z*K[2],q=rr[3]-Z*rr[2],N=I+wr*K[2],L=V+wr*rr[2],_r=H[1];_r>0;)for(_r<i?(Y=_r,_r=0):(Y=i,_r-=i),v=K[2]-Y*K[1],h=rr[2]-Y*rr[1],O=N+_r*K[1],x=L+_r*rr[1],Ar=H[0];Ar>0;)for(Ar<i?(z=Ar,Ar=0):(z=i,Ar-=i),fr=O+Ar*K[0],ir=x+Ar*rr[0],o=K[1]-z*K[0],d=rr[1]-z*rr[0],xr=0;xr<ur;xr++){for(Fr=0;Fr<er;Fr++){for(gr=0;gr<$;gr++){for(lr=0;lr<J;lr++){for(pr=0;pr<X;pr++){for(cr=0;cr<Q;cr++){for(or=0;or<Z;or++){for(sr=0;sr<Y;sr++){for(nr=0;nr<z;nr++)n[ir]=t(a[fr]),fr+=u,ir+=g;fr+=o,ir+=d}fr+=v,ir+=h}fr+=f,ir+=q}fr+=c,ir+=w}fr+=l,ir+=A}fr+=p,ir+=b}fr+=m,ir+=T}fr+=y,ir+=S}}EI.exports=pLr});var OI=s((GOe,SI)=>{"use strict";var dLr=ne(),gLr=se();function mLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,pr,lr,gr,Fr,xr,Ar,_r,wr,Pr,Br,Xr,kr,Cr,Rr,jr,zr,Qr,fe,ce,le,pe,Me;for(Me=dLr(r.shape,r.strides,e.strides),Q=Me.sh,ir=Me.sx,nr=Me.sy,i=gLr(r.dtype,e.dtype),sr=r.offset,or=e.offset,a=r.data,n=e.data,u=ir[0],d=nr[0],pe=Q[9];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),V=sr+pe*ir[9],Z=or+pe*nr[9],le=Q[8];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=ir[9]-ar*ir[8],N=nr[9]-ar*nr[8],L=V+le*ir[8],Y=Z+le*nr[8],ce=Q[7];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=ir[8]-tr*ir[7],O=nr[8]-tr*nr[7],x=L+ce*ir[7],z=Y+ce*nr[7],fe=Q[6];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=ir[7]-rr*ir[6],S=nr[7]-rr*nr[6],F=x+fe*ir[6],H=z+fe*nr[6],Qr=Q[5];Qr>0;)for(Qr<i?(K=Qr,Qr=0):(K=i,Qr-=i),p=ir[6]-K*ir[5],T=nr[6]-K*nr[5],_=F+Qr*ir[5],U=H+Qr*nr[5],zr=Q[4];zr>0;)for(zr<i?(ur=zr,zr=0):(ur=i,zr-=i),l=ir[5]-ur*ir[4],b=nr[5]-ur*nr[4],j=_+zr*ir[4],M=U+zr*nr[4],jr=Q[3];jr>0;)for(jr<i?(er=jr,jr=0):(er=i,jr-=i),c=ir[4]-er*ir[3],A=nr[4]-er*nr[3],P=j+jr*ir[3],k=M+jr*nr[3],Rr=Q[2];Rr>0;)for(Rr<i?($=Rr,Rr=0):($=i,Rr-=i),f=ir[3]-$*ir[2],w=nr[3]-$*nr[2],E=P+Rr*ir[2],R=k+Rr*nr[2],Cr=Q[1];Cr>0;)for(Cr<i?(J=Cr,Cr=0):(J=i,Cr-=i),v=ir[2]-J*ir[1],q=nr[2]-J*nr[1],I=E+Cr*ir[1],B=R+Cr*nr[1],kr=Q[0];kr>0;)for(kr<i?(X=kr,kr=0):(X=i,kr-=i),cr=I+kr*ir[0],pr=B+kr*nr[0],o=ir[1]-X*ir[0],h=nr[1]-X*nr[0],Xr=0;Xr<fr;Xr++){for(Br=0;Br<ar;Br++){for(Pr=0;Pr<tr;Pr++){for(wr=0;wr<rr;wr++){for(_r=0;_r<K;_r++){for(Ar=0;Ar<ur;Ar++){for(xr=0;xr<er;xr++){for(Fr=0;Fr<$;Fr++){for(gr=0;gr<J;gr++){for(lr=0;lr<X;lr++)n[pr]=t(a[cr]),cr+=u,pr+=d;cr+=o,pr+=h}cr+=v,pr+=q}cr+=f,pr+=w}cr+=c,pr+=A}cr+=l,pr+=b}cr+=p,pr+=T}cr+=m,pr+=S}cr+=y,pr+=O}cr+=g,pr+=N}}SI.exports=mLr});var _I=s((DOe,AI)=>{"use strict";function yLr(r,e,t){e.accessors[1](e.data,e.offset,t(r.accessors[0](r.data,r.offset)))}AI.exports=yLr});var II=s((HOe,TI)=>{"use strict";function hLr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(f=r.shape[0],o=r.strides[0],v=e.strides[0],c=r.offset,l=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],p=0;p<f;p++)u(a,l,t(n(i,c))),c+=o,l+=v}TI.exports=hLr});var LI=s((zOe,RI)=>{"use strict";function qLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;for(l=r.shape,y=r.strides,g=e.strides,r.order==="row-major"?(p=l[1],m=l[0],o=y[1],v=y[0]-p*y[1],f=g[1],c=g[0]-p*g[1]):(p=l[0],m=l[1],o=y[0],v=y[1]-p*y[0],f=g[0],c=g[1]-p*g[0]),d=r.offset,h=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],w=0;w<m;w++){for(q=0;q<p;q++)u(a,h,t(n(i,d))),d+=o,h+=f;d+=v,h+=c}}RI.exports=qLr});var FI=s((WOe,PI)=>{"use strict";function bLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S;for(m=r.shape,h=r.strides,q=e.strides,r.order==="row-major"?(y=m[2],g=m[1],d=m[0],o=h[2],v=h[1]-y*h[2],f=h[0]-g*h[1],c=q[2],l=q[1]-y*q[2],p=q[0]-g*q[1]):(y=m[0],g=m[1],d=m[2],o=h[0],v=h[1]-y*h[0],f=h[2]-g*h[1],c=q[0],l=q[1]-y*q[0],p=q[2]-g*q[1]),w=r.offset,A=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],S=0;S<d;S++){for(T=0;T<g;T++){for(b=0;b<y;b++)u(a,A,t(n(i,w))),w+=o,A+=c;w+=v,A+=l}w+=f,A+=p}}PI.exports=bLr});var jI=s((XOe,xI)=>{"use strict";function wLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E;for(g=r.shape,A=r.strides,b=e.strides,r.order==="row-major"?(d=g[3],h=g[2],q=g[1],w=g[0],o=A[3],v=A[2]-d*A[3],f=A[1]-h*A[2],c=A[0]-q*A[1],l=b[3],p=b[2]-d*b[3],m=b[1]-h*b[2],y=b[0]-q*b[1]):(d=g[0],h=g[1],q=g[2],w=g[3],o=A[0],v=A[1]-d*A[0],f=A[2]-h*A[1],c=A[3]-q*A[2],l=b[0],p=b[1]-d*b[0],m=b[2]-h*b[1],y=b[3]-q*b[2]),T=r.offset,S=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],E=0;E<w;E++){for(I=0;I<q;I++){for(N=0;N<h;N++){for(O=0;O<d;O++)u(a,S,t(n(i,T))),T+=o,S+=l;T+=v,S+=p}T+=f,S+=m}T+=c,S+=y}}xI.exports=wLr});var BI=s((JOe,MI)=>{"use strict";function ELr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F;for(h=r.shape,S=r.strides,O=e.strides,r.order==="row-major"?(q=h[4],w=h[3],A=h[2],b=h[1],T=h[0],o=S[4],v=S[3]-q*S[4],f=S[2]-w*S[3],c=S[1]-A*S[2],l=S[0]-b*S[1],p=O[4],m=O[3]-q*O[4],y=O[2]-w*O[3],g=O[1]-A*O[2],d=O[0]-b*O[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],o=S[0],v=S[1]-q*S[0],f=S[2]-w*S[1],c=S[3]-A*S[2],l=S[4]-b*S[3],p=O[0],m=O[1]-q*O[0],y=O[2]-w*O[1],g=O[3]-A*O[2],d=O[4]-b*O[3]),N=r.offset,I=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],F=0;F<T;F++){for(_=0;_<b;_++){for(j=0;j<A;j++){for(P=0;P<w;P++){for(E=0;E<q;E++)u(a,I,t(n(i,N))),N+=o,I+=p;N+=v,I+=m}N+=f,I+=y}N+=c,I+=g}N+=l,I+=d}}MI.exports=ELr});var CI=s((YOe,kI)=>{"use strict";function NLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B;for(w=r.shape,I=r.strides,E=e.strides,r.order==="row-major"?(A=w[5],b=w[4],T=w[3],S=w[2],O=w[1],N=w[0],o=I[5],v=I[4]-A*I[5],f=I[3]-b*I[4],c=I[2]-T*I[3],l=I[1]-S*I[2],p=I[0]-O*I[1],m=E[5],y=E[4]-A*E[5],g=E[3]-b*E[4],d=E[2]-T*E[3],h=E[1]-S*E[2],q=E[0]-O*E[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],o=I[0],v=I[1]-A*I[0],f=I[2]-b*I[1],c=I[3]-T*I[2],l=I[4]-S*I[3],p=I[5]-O*I[4],m=E[0],y=E[1]-A*E[0],g=E[2]-b*E[1],d=E[3]-T*E[2],h=E[4]-S*E[3],q=E[5]-O*E[4]),P=r.offset,j=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],B=0;B<N;B++){for(V=0;V<O;V++){for(L=0;L<S;L++){for(x=0;x<T;x++){for(F=0;F<b;F++){for(_=0;_<A;_++)u(a,j,t(n(i,P))),P+=o,j+=m;P+=v,j+=y}P+=f,j+=g}P+=c,j+=d}P+=l,j+=h}P+=p,j+=q}}kI.exports=NLr});var UI=s((ZOe,VI)=>{"use strict";function SLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U;for(b=r.shape,j=r.strides,_=e.strides,r.order==="row-major"?(T=b[6],S=b[5],O=b[4],N=b[3],I=b[2],E=b[1],P=b[0],o=j[6],v=j[5]-T*j[6],f=j[4]-S*j[5],c=j[3]-O*j[4],l=j[2]-N*j[3],p=j[1]-I*j[2],m=j[0]-E*j[1],y=_[6],g=_[5]-T*_[6],d=_[4]-S*_[5],h=_[3]-O*_[4],q=_[2]-N*_[3],w=_[1]-I*_[2],A=_[0]-E*_[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],o=j[0],v=j[1]-T*j[0],f=j[2]-S*j[1],c=j[3]-O*j[2],l=j[4]-N*j[3],p=j[5]-I*j[4],m=j[6]-E*j[5],y=_[0],g=_[1]-T*_[0],d=_[2]-S*_[1],h=_[3]-O*_[2],q=_[4]-N*_[3],w=_[5]-I*_[4],A=_[6]-E*_[5]),F=r.offset,x=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],U=0;U<P;U++){for(M=0;M<E;M++){for(k=0;k<I;k++){for(R=0;R<N;R++){for(B=0;B<O;B++){for(V=0;V<S;V++){for(L=0;L<T;L++)u(a,x,t(n(i,F))),F+=o,x+=y;F+=v,x+=g}F+=f,x+=d}F+=c,x+=h}F+=l,x+=q}F+=p,x+=w}F+=m,x+=A}}VI.exports=SLr});var DI=s(($Oe,GI)=>{"use strict";function OLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z;for(S=r.shape,x=r.strides,L=e.strides,r.order==="row-major"?(O=S[7],N=S[6],I=S[5],E=S[4],P=S[3],j=S[2],_=S[1],F=S[0],o=x[7],v=x[6]-O*x[7],f=x[5]-N*x[6],c=x[4]-I*x[5],l=x[3]-E*x[4],p=x[2]-P*x[3],m=x[1]-j*x[2],y=x[0]-_*x[1],g=L[7],d=L[6]-O*L[7],h=L[5]-N*L[6],q=L[4]-I*L[5],w=L[3]-E*L[4],A=L[2]-P*L[3],b=L[1]-j*L[2],T=L[0]-_*L[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],j=S[5],_=S[6],F=S[7],o=x[0],v=x[1]-O*x[0],f=x[2]-N*x[1],c=x[3]-I*x[2],l=x[4]-E*x[3],p=x[5]-P*x[4],m=x[6]-j*x[5],y=x[7]-_*x[6],g=L[0],d=L[1]-O*L[0],h=L[2]-N*L[1],q=L[3]-I*L[2],w=L[4]-E*L[3],A=L[5]-P*L[4],b=L[6]-j*L[5],T=L[7]-_*L[6]),V=r.offset,B=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],Z=0;Z<F;Z++){for(Y=0;Y<_;Y++){for(z=0;z<j;z++){for(H=0;H<P;H++){for(U=0;U<E;U++){for(M=0;M<I;M++){for(k=0;k<N;k++){for(R=0;R<O;R++)u(a,B,t(n(i,V))),V+=o,B+=g;V+=v,B+=d}V+=f,B+=h}V+=c,B+=q}V+=l,B+=w}V+=p,B+=A}V+=m,B+=b}V+=y,B+=T}}GI.exports=OLr});var zI=s((QOe,HI)=>{"use strict";function ALr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$;for(N=r.shape,B=r.strides,R=e.strides,r.order==="row-major"?(I=N[8],E=N[7],P=N[6],j=N[5],_=N[4],F=N[3],x=N[2],L=N[1],V=N[0],o=B[8],v=B[7]-I*B[8],f=B[6]-E*B[7],c=B[5]-P*B[6],l=B[4]-j*B[5],p=B[3]-_*B[4],m=B[2]-F*B[3],y=B[1]-x*B[2],g=B[0]-L*B[1],d=R[8],h=R[7]-I*R[8],q=R[6]-E*R[7],w=R[5]-P*R[6],A=R[4]-j*R[5],b=R[3]-_*R[4],T=R[2]-F*R[3],S=R[1]-x*R[2],O=R[0]-L*R[1]):(I=N[0],E=N[1],P=N[2],j=N[3],_=N[4],F=N[5],x=N[6],L=N[7],V=N[8],o=B[0],v=B[1]-I*B[0],f=B[2]-E*B[1],c=B[3]-P*B[2],l=B[4]-j*B[3],p=B[5]-_*B[4],m=B[6]-F*B[5],y=B[7]-x*B[6],g=B[8]-L*B[7],d=R[0],h=R[1]-I*R[0],q=R[2]-E*R[1],w=R[3]-P*R[2],A=R[4]-j*R[3],b=R[5]-_*R[4],T=R[6]-F*R[5],S=R[7]-x*R[6],O=R[8]-L*R[7]),k=r.offset,M=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],$=0;$<V;$++){for(J=0;J<L;J++){for(X=0;X<x;X++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(Y=0;Y<j;Y++){for(z=0;z<P;z++){for(H=0;H<E;H++){for(U=0;U<I;U++)u(a,M,t(n(i,k))),k+=o,M+=d;k+=v,M+=h}k+=f,M+=q}k+=c,M+=w}k+=l,M+=A}k+=p,M+=b}k+=m,M+=T}k+=y,M+=S}k+=g,M+=O}}HI.exports=ALr});var XI=s((KOe,WI)=>{"use strict";function _Lr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur,K,rr;for(E=r.shape,M=r.strides,U=e.strides,r.order==="row-major"?(P=E[9],j=E[8],_=E[7],F=E[6],x=E[5],L=E[4],V=E[3],B=E[2],R=E[1],k=E[0],o=M[9],v=M[8]-P*M[9],f=M[7]-j*M[8],c=M[6]-_*M[7],l=M[5]-F*M[6],p=M[4]-x*M[5],m=M[3]-L*M[4],y=M[2]-V*M[3],g=M[1]-B*M[2],d=M[0]-R*M[1],h=U[9],q=U[8]-P*U[9],w=U[7]-j*U[8],A=U[6]-_*U[7],b=U[5]-F*U[6],T=U[4]-x*U[5],S=U[3]-L*U[4],O=U[2]-V*U[3],N=U[1]-B*U[2],I=U[0]-R*U[1]):(P=E[0],j=E[1],_=E[2],F=E[3],x=E[4],L=E[5],V=E[6],B=E[7],R=E[8],k=E[9],o=M[0],v=M[1]-P*M[0],f=M[2]-j*M[1],c=M[3]-_*M[2],l=M[4]-F*M[3],p=M[5]-x*M[4],m=M[6]-L*M[5],y=M[7]-V*M[6],g=M[8]-B*M[7],d=M[9]-R*M[8],h=U[0],q=U[1]-P*U[0],w=U[2]-j*U[1],A=U[3]-_*U[2],b=U[4]-F*U[3],T=U[5]-x*U[4],S=U[6]-L*U[5],O=U[7]-V*U[6],N=U[8]-B*U[7],I=U[9]-R*U[8]),H=r.offset,z=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],rr=0;rr<k;rr++){for(K=0;K<R;K++){for(ur=0;ur<B;ur++){for(er=0;er<V;er++){for($=0;$<L;$++){for(J=0;J<x;J++){for(X=0;X<F;X++){for(Q=0;Q<_;Q++){for(Z=0;Z<j;Z++){for(Y=0;Y<P;Y++)u(a,z,t(n(i,H))),H+=o,z+=h;H+=v,z+=q}H+=f,z+=w}H+=c,z+=A}H+=l,z+=b}H+=p,z+=T}H+=m,z+=S}H+=y,z+=O}H+=g,z+=N}H+=d,z+=I}}WI.exports=_Lr});var YI=s((rAe,JI)=>{"use strict";var TLr=C();function ILr(r,e,t,i,a,n){var u,o,v,f,c;for(u=r.length,o=1,c=0;c<u;c++)o*=r[c];if(n==="clamp")a<0?a=0:a>=o&&(a=o-1);else if(n==="wrap")a<0?(a+=o,a<0&&(a%=o,a!==0&&(a+=o))):a>=o&&(a-=o,a>=o&&(a%=o));else if(a<0||a>=o)throw new RangeError(TLr("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",o,a));if(v=t,i==="column-major"){for(c=0;c<u;c++)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}for(c=u-1;c>=0;c--)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}JI.exports=ILr});var ef=s((eAe,ZI)=>{"use strict";var RLr=YI();ZI.exports=RLr});var rR=s((tAe,KI)=>{"use strict";var LLr=ct(),$I=ef(),QI="throw";function PLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(c=r.shape,o=LLr(c),i=r.data,a=e.data,l=r.strides,p=e.strides,m=r.offset,y=e.offset,n=r.order,u=e.order,v=r.accessors[0],f=e.accessors[1],h=0;h<o;h++)g=$I(c,l,m,n,h,QI),d=$I(c,p,y,u,h,QI),f(a,d,t(v(i,g)))}KI.exports=PLr});var tR=s((iAe,eR)=>{"use strict";function FLr(r,e,t){e.data[e.offset]=t(r.data[r.offset])}eR.exports=FLr});var aR=s((aAe,iR)=>{"use strict";function xLr(r,e,t){var i,a,n,u,o,v,f,c;for(o=r.shape[0],n=r.strides[0],u=e.strides[0],v=r.offset,f=e.offset,i=r.data,a=e.data,c=0;c<o;c++)a[f]=t(i[v]),v+=n,f+=u}iR.exports=xLr});var sR=s((nAe,nR)=>{"use strict";function jLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(f=r.shape,p=r.strides,m=e.strides,r.order==="row-major"?(c=f[1],l=f[0],n=p[1],u=p[0]-c*p[1],o=m[1],v=m[0]-c*m[1]):(c=f[0],l=f[1],n=p[0],u=p[1]-c*p[0],o=m[0],v=m[1]-c*m[0]),y=r.offset,g=e.offset,i=r.data,a=e.data,h=0;h<l;h++){for(d=0;d<c;d++)a[g]=t(i[y]),y+=n,g+=o;y+=u,g+=v}}nR.exports=jLr});var oR=s((sAe,uR)=>{"use strict";function MLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b;for(l=r.shape,g=r.strides,d=e.strides,r.order==="row-major"?(p=l[2],m=l[1],y=l[0],n=g[2],u=g[1]-p*g[2],o=g[0]-m*g[1],v=d[2],f=d[1]-p*d[2],c=d[0]-m*d[1]):(p=l[0],m=l[1],y=l[2],n=g[0],u=g[1]-p*g[0],o=g[2]-m*g[1],v=d[0],f=d[1]-p*d[0],c=d[2]-m*d[1]),h=r.offset,q=e.offset,i=r.data,a=e.data,b=0;b<y;b++){for(A=0;A<m;A++){for(w=0;w<p;w++)a[q]=t(i[h]),h+=n,q+=v;h+=u,q+=f}h+=o,q+=c}}uR.exports=MLr});var fR=s((uAe,vR)=>{"use strict";function BLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N;for(m=r.shape,q=r.strides,w=e.strides,r.order==="row-major"?(y=m[3],g=m[2],d=m[1],h=m[0],n=q[3],u=q[2]-y*q[3],o=q[1]-g*q[2],v=q[0]-d*q[1],f=w[3],c=w[2]-y*w[3],l=w[1]-g*w[2],p=w[0]-d*w[1]):(y=m[0],g=m[1],d=m[2],h=m[3],n=q[0],u=q[1]-y*q[0],o=q[2]-g*q[1],v=q[3]-d*q[2],f=w[0],c=w[1]-y*w[0],l=w[2]-g*w[1],p=w[3]-d*w[2]),A=r.offset,b=e.offset,i=r.data,a=e.data,N=0;N<h;N++){for(O=0;O<d;O++){for(S=0;S<g;S++){for(T=0;T<y;T++)a[b]=t(i[A]),A+=n,b+=f;A+=u,b+=c}A+=o,b+=l}A+=v,b+=p}}vR.exports=BLr});var lR=s((oAe,cR)=>{"use strict";function kLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j;for(g=r.shape,b=r.strides,T=e.strides,r.order==="row-major"?(d=g[4],h=g[3],q=g[2],w=g[1],A=g[0],n=b[4],u=b[3]-d*b[4],o=b[2]-h*b[3],v=b[1]-q*b[2],f=b[0]-w*b[1],c=T[4],l=T[3]-d*T[4],p=T[2]-h*T[3],m=T[1]-q*T[2],y=T[0]-w*T[1]):(d=g[0],h=g[1],q=g[2],w=g[3],A=g[4],n=b[0],u=b[1]-d*b[0],o=b[2]-h*b[1],v=b[3]-q*b[2],f=b[4]-w*b[3],c=T[0],l=T[1]-d*T[0],p=T[2]-h*T[1],m=T[3]-q*T[2],y=T[4]-w*T[3]),S=r.offset,O=e.offset,i=r.data,a=e.data,j=0;j<A;j++){for(P=0;P<w;P++){for(E=0;E<q;E++){for(I=0;I<h;I++){for(N=0;N<d;N++)a[O]=t(i[S]),S+=n,O+=c;S+=u,O+=l}S+=o,O+=p}S+=v,O+=m}S+=f,O+=y}}cR.exports=kLr});var dR=s((vAe,pR)=>{"use strict";function CLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L;for(h=r.shape,O=r.strides,N=e.strides,r.order==="row-major"?(q=h[5],w=h[4],A=h[3],b=h[2],T=h[1],S=h[0],n=O[5],u=O[4]-q*O[5],o=O[3]-w*O[4],v=O[2]-A*O[3],f=O[1]-b*O[2],c=O[0]-T*O[1],l=N[5],p=N[4]-q*N[5],m=N[3]-w*N[4],y=N[2]-A*N[3],g=N[1]-b*N[2],d=N[0]-T*N[1]):(q=h[0],w=h[1],A=h[2],b=h[3],T=h[4],S=h[5],n=O[0],u=O[1]-q*O[0],o=O[2]-w*O[1],v=O[3]-A*O[2],f=O[4]-b*O[3],c=O[5]-T*O[4],l=N[0],p=N[1]-q*N[0],m=N[2]-w*N[1],y=N[3]-A*N[2],g=N[4]-b*N[3],d=N[5]-T*N[4]),I=r.offset,E=e.offset,i=r.data,a=e.data,L=0;L<S;L++){for(x=0;x<T;x++){for(F=0;F<b;F++){for(_=0;_<A;_++){for(j=0;j<w;j++){for(P=0;P<q;P++)a[E]=t(i[I]),I+=n,E+=l;I+=u,E+=p}I+=o,E+=m}I+=v,E+=y}I+=f,E+=g}I+=c,E+=d}}pR.exports=CLr});var mR=s((fAe,gR)=>{"use strict";function VLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k;for(w=r.shape,E=r.strides,P=e.strides,r.order==="row-major"?(A=w[6],b=w[5],T=w[4],S=w[3],O=w[2],N=w[1],I=w[0],n=E[6],u=E[5]-A*E[6],o=E[4]-b*E[5],v=E[3]-T*E[4],f=E[2]-S*E[3],c=E[1]-O*E[2],l=E[0]-N*E[1],p=P[6],m=P[5]-A*P[6],y=P[4]-b*P[5],g=P[3]-T*P[4],d=P[2]-S*P[3],h=P[1]-O*P[2],q=P[0]-N*P[1]):(A=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],I=w[6],n=E[0],u=E[1]-A*E[0],o=E[2]-b*E[1],v=E[3]-T*E[2],f=E[4]-S*E[3],c=E[5]-O*E[4],l=E[6]-N*E[5],p=P[0],m=P[1]-A*P[0],y=P[2]-b*P[1],g=P[3]-T*P[2],d=P[4]-S*P[3],h=P[5]-O*P[4],q=P[6]-N*P[5]),j=r.offset,_=e.offset,i=r.data,a=e.data,k=0;k<I;k++){for(R=0;R<N;R++){for(B=0;B<O;B++){for(V=0;V<S;V++){for(L=0;L<T;L++){for(x=0;x<b;x++){for(F=0;F<A;F++)a[_]=t(i[j]),j+=n,_+=p;j+=u,_+=m}j+=o,_+=y}j+=v,_+=g}j+=f,_+=d}j+=c,_+=h}j+=l,_+=q}}gR.exports=VLr});var hR=s((cAe,yR)=>{"use strict";function ULr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z;for(b=r.shape,_=r.strides,F=e.strides,r.order==="row-major"?(T=b[7],S=b[6],O=b[5],N=b[4],I=b[3],E=b[2],P=b[1],j=b[0],n=_[7],u=_[6]-T*_[7],o=_[5]-S*_[6],v=_[4]-O*_[5],f=_[3]-N*_[4],c=_[2]-I*_[3],l=_[1]-E*_[2],p=_[0]-P*_[1],m=F[7],y=F[6]-T*F[7],g=F[5]-S*F[6],d=F[4]-O*F[5],h=F[3]-N*F[4],q=F[2]-I*F[3],w=F[1]-E*F[2],A=F[0]-P*F[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],P=b[6],j=b[7],n=_[0],u=_[1]-T*_[0],o=_[2]-S*_[1],v=_[3]-O*_[2],f=_[4]-N*_[3],c=_[5]-I*_[4],l=_[6]-E*_[5],p=_[7]-P*_[6],m=F[0],y=F[1]-T*F[0],g=F[2]-S*F[1],d=F[3]-O*F[2],h=F[4]-N*F[3],q=F[5]-I*F[4],w=F[6]-E*F[5],A=F[7]-P*F[6]),x=r.offset,L=e.offset,i=r.data,a=e.data,z=0;z<j;z++){for(H=0;H<P;H++){for(U=0;U<E;U++){for(M=0;M<I;M++){for(k=0;k<N;k++){for(R=0;R<O;R++){for(B=0;B<S;B++){for(V=0;V<T;V++)a[L]=t(i[x]),x+=n,L+=m;x+=u,L+=y}x+=o,L+=g}x+=v,L+=d}x+=f,L+=h}x+=c,L+=q}x+=l,L+=w}x+=p,L+=A}}yR.exports=ULr});var bR=s((lAe,qR)=>{"use strict";function GLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X;for(S=r.shape,L=r.strides,V=e.strides,r.order==="row-major"?(O=S[8],N=S[7],I=S[6],E=S[5],P=S[4],j=S[3],_=S[2],F=S[1],x=S[0],n=L[8],u=L[7]-O*L[8],o=L[6]-N*L[7],v=L[5]-I*L[6],f=L[4]-E*L[5],c=L[3]-P*L[4],l=L[2]-j*L[3],p=L[1]-_*L[2],m=L[0]-F*L[1],y=V[8],g=V[7]-O*V[8],d=V[6]-N*V[7],h=V[5]-I*V[6],q=V[4]-E*V[5],w=V[3]-P*V[4],A=V[2]-j*V[3],b=V[1]-_*V[2],T=V[0]-F*V[1]):(O=S[0],N=S[1],I=S[2],E=S[3],P=S[4],j=S[5],_=S[6],F=S[7],x=S[8],n=L[0],u=L[1]-O*L[0],o=L[2]-N*L[1],v=L[3]-I*L[2],f=L[4]-E*L[3],c=L[5]-P*L[4],l=L[6]-j*L[5],p=L[7]-_*L[6],m=L[8]-F*L[7],y=V[0],g=V[1]-O*V[0],d=V[2]-N*V[1],h=V[3]-I*V[2],q=V[4]-E*V[3],w=V[5]-P*V[4],A=V[6]-j*V[5],b=V[7]-_*V[6],T=V[8]-F*V[7]),B=r.offset,R=e.offset,i=r.data,a=e.data,X=0;X<x;X++){for(Q=0;Q<F;Q++){for(Z=0;Z<_;Z++){for(Y=0;Y<j;Y++){for(z=0;z<P;z++){for(H=0;H<E;H++){for(U=0;U<I;U++){for(M=0;M<N;M++){for(k=0;k<O;k++)a[R]=t(i[B]),B+=n,R+=y;B+=u,R+=g}B+=o,R+=d}B+=v,R+=h}B+=f,R+=q}B+=c,R+=w}B+=l,R+=A}B+=p,R+=b}B+=m,R+=T}}qR.exports=GLr});var ER=s((pAe,wR)=>{"use strict";function DLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P,j,_,F,x,L,V,B,R,k,M,U,H,z,Y,Z,Q,X,J,$,er,ur;for(N=r.shape,R=r.strides,k=e.strides,r.order==="row-major"?(I=N[9],E=N[8],P=N[7],j=N[6],_=N[5],F=N[4],x=N[3],L=N[2],V=N[1],B=N[0],n=R[9],u=R[8]-I*R[9],o=R[7]-E*R[8],v=R[6]-P*R[7],f=R[5]-j*R[6],c=R[4]-_*R[5],l=R[3]-F*R[4],p=R[2]-x*R[3],m=R[1]-L*R[2],y=R[0]-V*R[1],g=k[9],d=k[8]-I*k[9],h=k[7]-E*k[8],q=k[6]-P*k[7],w=k[5]-j*k[6],A=k[4]-_*k[5],b=k[3]-F*k[4],T=k[2]-x*k[3],S=k[1]-L*k[2],O=k[0]-V*k[1]):(I=N[0],E=N[1],P=N[2],j=N[3],_=N[4],F=N[5],x=N[6],L=N[7],V=N[8],B=N[9],n=R[0],u=R[1]-I*R[0],o=R[2]-E*R[1],v=R[3]-P*R[2],f=R[4]-j*R[3],c=R[5]-_*R[4],l=R[6]-F*R[5],p=R[7]-x*R[6],m=R[8]-L*R[7],y=R[9]-V*R[8],g=k[0],d=k[1]-I*k[0],h=k[2]-E*k[1],q=k[3]-P*k[2],w=k[4]-j*k[3],A=k[5]-_*k[4],b=k[6]-F*k[5],T=k[7]-x*k[6],S=k[8]-L*k[7],O=k[9]-V*k[8]),M=r.offset,U=e.offset,i=r.data,a=e.data,ur=0;ur<B;ur++){for(er=0;er<V;er++){for($=0;$<L;$++){for(J=0;J<x;J++){for(X=0;X<F;X++){for(Q=0;Q<_;Q++){for(Z=0;Z<j;Z++){for(Y=0;Y<P;Y++){for(z=0;z<E;z++){for(H=0;H<I;H++)a[U]=t(i[M]),M+=n,U+=g;M+=u,U+=d}M+=o,U+=h}M+=v,U+=q}M+=f,U+=w}M+=c,U+=A}M+=l,U+=b}M+=p,U+=T}M+=m,U+=S}M+=y,U+=O}}wR.exports=DLr});var AR=s((dAe,OR)=>{"use strict";var HLr=ct(),NR=ef(),SR="throw";function zLr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g;for(v=r.shape,o=HLr(v),i=r.data,a=e.data,f=r.strides,c=e.strides,l=r.offset,p=e.offset,n=r.order,u=e.order,g=0;g<o;g++)m=NR(v,f,l,n,g,SR),y=NR(v,c,p,u,g,SR),a[y]=t(i[m])}OR.exports=zLr});var PR=s((gAe,LR)=>{"use strict";var _R=$v(),TR=ns(),IR=bT(),WLr=zT(),XLr=XT(),JLr=YT(),YLr=$T(),ZLr=KT(),$Lr=eI(),QLr=iI(),KLr=nI(),rPr=uI(),ePr=vI(),tPr=cI(),iPr=pI(),aPr=gI(),nPr=yI(),sPr=qI(),uPr=wI(),oPr=NI(),vPr=OI(),fPr=_I(),cPr=II(),lPr=LI(),pPr=FI(),dPr=jI(),gPr=BI(),mPr=CI(),yPr=UI(),hPr=DI(),qPr=zI(),bPr=XI(),wPr=rR(),EPr=tR(),NPr=aR(),SPr=sR(),OPr=oR(),APr=fR(),_Pr=lR(),TPr=dR(),IPr=mR(),RPr=hR(),LPr=bR(),PPr=ER(),FPr=AR(),Wa=[EPr,NPr,SPr,OPr,APr,_Pr,TPr,IPr,RPr,LPr,PPr],Wn=[fPr,cPr,lPr,pPr,dPr,gPr,mPr,yPr,hPr,qPr,bPr],xPr=[ePr,tPr,iPr,aPr,nPr,sPr,uPr,oPr,vPr],jPr=[WLr,XLr,JLr,YLr,ZLr,$Lr,QLr,KLr,rPr],RR=Wa.length-1;function MPr(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(g=IR(r[0]),d=IR(r[1]),n=g.shape,u=d.shape,t=n.length,t!==u.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+u.length+".");if(t===0)return g.accessorProtocol||d.accessorProtocol?Wn[t](g,d,e):Wa[t](g,d,e);for(f=1,y=0,q=0;q<t;q++){if(h=n[q],h!==u[q])throw new Error("invalid arguments. Arrays must have the same shape.");f*=h,h===1&&(y+=1)}if(f!==0){if(t===1)return g.accessorProtocol||d.accessorProtocol?Wn[t](g,d,e):Wa[t](g,d,e);if(c=g.strides,l=d.strides,y===t-1){for(q=0;q<t&&n[q]===1;q++);return g.shape=[n[q]],d.shape=g.shape,g.strides=[c[q]],d.strides=[l[q]],g.accessorProtocol||d.accessorProtocol?Wn[1](g,d,e):Wa[1](g,d,e)}if(o=_R(c),v=_R(l),o!==0&&v!==0&&g.order===d.order){if(i=TR(n,c,g.offset),a=TR(u,l,d.offset),f===i[1]-i[0]+1&&f===a[1]-a[0]+1)return o===1?p=i[0]:p=i[1],v===1?m=a[0]:m=a[1],g.shape=[f],d.shape=g.shape,g.strides=[o],d.strides=[v],g.offset=p,d.offset=m,g.accessorProtocol||d.accessorProtocol?Wn[1](g,d,e):Wa[1](g,d,e);if(t<=RR)return g.accessorProtocol||d.accessorProtocol?Wn[t](g,d,e):Wa[t](g,d,e)}if(t<=RR)return g.accessorProtocol||d.accessorProtocol?jPr[t-2](g,d,e):xPr[t-2](g,d,e);if(g.accessorProtocol||d.accessorProtocol)return wPr(g,d,e);FPr(g,d,e)}}LR.exports=MPr});var xR=s((mAe,FR)=>{"use strict";var BPr=PR();FR.exports=BPr});var MR=s((yAe,jR)=>{"use strict";var kPr=xR(),CPr=C(),VPr=_s();function UPr(r,e){var t,i,a,n,u;for(t={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},i=r[0],a=r[1],u=2;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")t[n]=r[u+1];else throw new Error(CPr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return kPr([i,a],VPr(e,t)),a}jR.exports=UPr});var kR=s((hAe,BR)=>{"use strict";var GPr=MR();BR.exports=GPr});var VR=s((qAe,CR)=>{"use strict";var DPr=$r(),HPr=kR();function zPr(r){return DPr(r,"unary",HPr),r}CR.exports=zPr});var GR=s((bAe,UR)=>{"use strict";var Nt=$r(),WPr=G_(),XPr=_s(),JPr=Xv(),YPr=Zv(),ZPr=Q_(),$Pr=tT(),QPr=sT(),KPr=fT(),rFr=VR();function eFr(r){return Nt(r,"binary",WPr),Nt(r,"d_d",XPr),Nt(r,"dd_d",JPr),Nt(r,"ddd_d",YPr),Nt(r,"dddd_d",ZPr),Nt(r,"ddddd_d",$Pr),Nt(r,"ternary",QPr),Nt(r,"unary",KPr),Nt(r,"ndarray",rFr({})),r}UR.exports=eFr});var HR=s((wAe,DR)=>{"use strict";function tFr(r){return r*r}DR.exports=tFr});var Rs=s((EAe,zR)=>{"use strict";var iFr=HR();zR.exports=iFr});var Ls=s((NAe,WR)=>{"use strict";var aFr=.7853981633974483;WR.exports=aFr});var JR=s((SAe,XR)=>{"use strict";function nFr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}XR.exports=nFr});var ZR=s((OAe,YR)=>{"use strict";function sFr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}YR.exports=sFr});var KR=s((AAe,QR)=>{"use strict";var uFr=W(),oFr=Lr(),$R=Ls(),vFr=JR(),fFr=ZR(),cFr=6123233995736766e-32;function lFr(r){var e,t,i,a,n;if(uFr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*fFr(t),t=oFr(t+t),n=$R-t,t=t*a-cFr,n-=t,n+=$R;else{if(i<1e-8)return r;t=i*i,n=t*vFr(t),n=i*n+i}return e?-n:n}QR.exports=lFr});var ta=s((_Ae,rL)=>{"use strict";var pFr=KR();rL.exports=pFr});var aL=s((TAe,iL)=>{"use strict";var dFr=W(),eL=ta(),gFr=Lr(),tL=Ls(),mFr=6123233995736766e-32;function yFr(r){var e;return dFr(r)?NaN:r<-1||r>1?NaN:r>.5?2*eL(gFr(.5-.5*r)):(e=tL-eL(r),e+=mFr,e+=tL,e)}iL.exports=yFr});var Xn=s((IAe,nL)=>{"use strict";var hFr=aL();nL.exports=hFr});var uL=s((RAe,sL)=>{"use strict";function qFr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}sL.exports=qFr});var lL=s((LAe,cL)=>{"use strict";var bFr=W(),oL=ie(),vL=wt(),wFr=hr(),EFr=Ir(),fL=ft(),NFr=uL(),tf=.6931471803691238,af=19082149292705877e-26,SFr=.41421356237309503,OFr=-.2928932188134525,AFr=1862645149230957e-24,_Fr=5551115123125783e-32,TFr=9007199254740992,IFr=.6666666666666666;function RFr(r){var e,t,i,a,n,u,o,v,f,c;if(r<-1||bFr(r))return NaN;if(r===-1)return EFr;if(r===wFr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<SFr){if(i<AFr)return i<_Fr?r:r-r*r*.5;r>OFr&&(c=0,a=r,t=1)}return c!==0&&(i<TFr?(f=1+r,t=oL(f),c=(t>>20)-fL,c>0?n=1-(f-r):n=r-(f-1),n/=f):(f=r,t=oL(f),c=(t>>20)-fL,n=0),t&=1048575,t<434334?f=vL(f,t|1072693248):(c+=1,f=vL(f,t|1071644672),t=1048576-t>>2),a=f-1),e=.5*a*a,t===0?a===0?(n+=c*af,c*tf+n):(v=e*(1-IFr*a),c*tf-(v-(c*af+n)-a)):(u=a/(2+a),o=u*u,v=o*NFr(o),c===0?a-(e-u*(e+v)):c*tf-(e-(u*(e+v)+(c*af+n))-a))}cL.exports=RFr});var li=s((PAe,pL)=>{"use strict";var LFr=lL();pL.exports=LFr});var gL=s((FAe,dL)=>{"use strict";function PFr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}dL.exports=PFr});var yL=s((xAe,mL)=>{"use strict";function FFr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}mL.exports=FFr});var wL=s((jAe,bL)=>{"use strict";var hL=ie(),xFr=wt(),jFr=W(),MFr=ft(),BFr=Ir(),kFr=gL(),CFr=yL(),Ps=.6931471803691238,Fs=19082149292705877e-26,VFr=0x40000000000000,UFr=.3333333333333333,qL=1048575,GFr=2146435072,DFr=1048576,HFr=1072693248;function zFr(r){var e,t,i,a,n,u,o,v,f,c,l,p;return r===0?BFr:jFr(r)||r<0?NaN:(t=hL(r),n=0,t<DFr&&(n-=54,r*=VFr,t=hL(r)),t>=GFr?r+r:(n+=(t>>20)-MFr|0,t&=qL,v=t+614244&1048576|0,r=xFr(r,t|v^HFr),n+=v>>20|0,o=r-1,(qL&2+t)<3?o===0?n===0?0:n*Ps+n*Fs:(u=o*o*(.5-UFr*o),n===0?o-u:n*Ps-(u-n*Fs-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,a=l*kFr(l),i=p*CFr(l),v|=f,u=i+a,v>0?(e=.5*o*o,n===0?o-(e-c*(e+u)):n*Ps-(e-(c*(e+u)+n*Fs)-o)):n===0?o-c*(o-u):n*Ps-(c*(o-u)-n*Fs-o))))}bL.exports=zFr});var br=s((MAe,EL)=>{"use strict";var WFr=wL();EL.exports=WFr});var AL=s((BAe,OL)=>{"use strict";var XFr=W(),JFr=li(),NL=Lr(),YFr=Es(),SL=br(),ZFr=1<<28;function $Fr(r){var e;return XFr(r)||r<1?NaN:r===1?0:r>=ZFr?SL(r)+YFr:r>2?SL(2*r-1/(r+NL(r*r-1))):(e=r-1,JFr(e+NL(2*e+e*e)))}OL.exports=$Fr});var TL=s((kAe,_L)=>{"use strict";var QFr=AL();_L.exports=QFr});var xs=s((CAe,IL)=>{"use strict";var KFr=1.5707963267948966;IL.exports=KFr});var LL=s((VAe,RL)=>{"use strict";function rxr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}RL.exports=rxr});var FL=s((UAe,PL)=>{"use strict";function exr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}PL.exports=exr});var ML=s((GAe,jL)=>{"use strict";var txr=W(),ixr=hr(),nf=xs(),axr=Ls(),nxr=Ir(),sxr=LL(),uxr=FL(),xL=6123233995736766e-32,oxr=2.414213562373095;function vxr(r){var e,t,i,a;return txr(r)||r===0?r:r===ixr?nf:r===nxr?-nf:(r<0&&(t=!0,r=-r),e=0,r>oxr?(i=nf,e=1,r=-(1/r)):r<=.66?i=0:(i=axr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*sxr(a)/uxr(a),a=r*a+r,e===2?a+=.5*xL:e===1&&(a+=xL),i+=a,t?-i:i)}jL.exports=vxr});var js=s((DAe,BL)=>{"use strict";var fxr=ML();BL.exports=fxr});var CL=s((HAe,kL)=>{"use strict";var cxr=js();function lxr(r){return cxr(1/r)}kL.exports=lxr});var UL=s((zAe,VL)=>{"use strict";var pxr=CL();VL.exports=pxr});var DL=s((WAe,GL)=>{"use strict";var dxr=ta();function gxr(r){return dxr(1+r)}GL.exports=gxr});var zL=s((XAe,HL)=>{"use strict";var mxr=DL();HL.exports=mxr});var XL=s((JAe,WL)=>{"use strict";var yxr=ta();function hxr(r){return yxr(1-r)}WL.exports=hxr});var YL=s((YAe,JL)=>{"use strict";var qxr=XL();JL.exports=qxr});var $L=s((ZAe,ZL)=>{"use strict";var bxr=ta();function wxr(r){return bxr(1/r)}ZL.exports=wxr});var KL=s(($Ae,QL)=>{"use strict";var Exr=$L();QL.exports=Exr});var iP=s((QAe,tP)=>{"use strict";var Nxr=Ve(),Sxr=W(),Oxr=li(),rP=Lr(),Axr=Es(),eP=br(),_xr=1/(1<<28),Txr=1<<28;function Ixr(r){var e,t,i;return Sxr(r)||Nxr(r)?r:(r<0&&(r=-r,e=!0),r<_xr?i=r:r>Txr?i=eP(r)+Axr:r>2?i=eP(2*r+1/(rP(r*r+1)+r)):(t=r*r,i=Oxr(r+t/(1+rP(1+t)))),e?-i:i)}tP.exports=Ixr});var sf=s((KAe,aP)=>{"use strict";var Rxr=iP();aP.exports=Rxr});var sP=s((r_e,nP)=>{"use strict";var Lxr=sf();function Pxr(r){return Lxr(1/r)}nP.exports=Pxr});var oP=s((e_e,uP)=>{"use strict";var Fxr=sP();uP.exports=Fxr});var fP=s((t_e,vP)=>{"use strict";var xxr=Xn(),jxr=Lr();function Mxr(r){return 2*xxr(jxr(r))}vP.exports=Mxr});var lP=s((i_e,cP)=>{"use strict";var Bxr=fP();cP.exports=Bxr});var dP=s((a_e,pP)=>{"use strict";var kxr=ta(),Cxr=Lr();function Vxr(r){return 2*kxr(Cxr(r))}pP.exports=Vxr});var mP=s((n_e,gP)=>{"use strict";var Uxr=dP();gP.exports=Uxr});var qP=s((s_e,hP)=>{"use strict";var Gxr=W(),yP=li(),Dxr=hr(),Hxr=Ir(),zxr=1/(1<<28);function Wxr(r){var e,t;return Gxr(r)||r<-1||r>1?NaN:r===1?Dxr:r===-1?Hxr:(r<0&&(e=!0,r=-r),r<zxr?e?-r:r:(r<.5?(t=r+r,t=.5*yP(t+t*r/(1-r))):t=.5*yP((r+r)/(1-r)),e?-t:t))}hP.exports=Wxr});var wP=s((u_e,bP)=>{"use strict";var Xxr=qP();bP.exports=Xxr});var NP=s((o_e,EP)=>{"use strict";var Jxr=Xn();function Yxr(r){return Jxr(1+r)}EP.exports=Yxr});var OP=s((v_e,SP)=>{"use strict";var Zxr=NP();SP.exports=Zxr});var _P=s((f_e,AP)=>{"use strict";var $xr=Xn();function Qxr(r){return $xr(1-r)}AP.exports=Qxr});var IP=s((c_e,TP)=>{"use strict";var Kxr=_P();TP.exports=Kxr});var LP=s((l_e,RP)=>{"use strict";var rjr=Gr();function ejr(r){return rjr(r)===r&&r>=0}RP.exports=ejr});var uf=s((p_e,PP)=>{"use strict";var tjr=LP();PP.exports=tjr});var FP=s((d_e,ijr)=>{ijr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var jP=s((g_e,xP)=>{"use strict";var ajr=uf(),njr=W(),sjr=gs(),ujr=Ir(),ojr=hr(),vjr=FP(),fjr=258;function cjr(r){return njr(r)||!ajr(r)?NaN:sjr(r)?0:r>fjr?r/2&1?ojr:ujr:vjr[r/2]}xP.exports=cjr});var BP=s((m_e,MP)=>{"use strict";var ljr=jP();MP.exports=ljr});var CP=s((y_e,kP)=>{"use strict";var pjr=Ye(),of;pjr===!0?of=0:of=1;kP.exports=of});var GP=s((h_e,UP)=>{"use strict";var djr=me(),gjr=ge(),mjr=CP(),VP=new gjr(1),yjr=new djr(VP.buffer);function hjr(r){return VP[0]=r,yjr[mjr]}UP.exports=hjr});var HP=s((q_e,DP)=>{"use strict";var qjr=GP();DP.exports=qjr});var YP=s((b_e,JP)=>{"use strict";var bjr=Gr(),Ms=ws(),Cs=ai(),WP=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],wjr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],vf=16777216,ff=5960464477539063e-23,Bs=Cs(20),zP=Cs(20),ks=Cs(20),he=Cs(20);function XP(r,e,t,i,a,n,u,o,v){var f,c,l,p,m,y,g,d,h;for(p=n,h=i[t],d=t,m=0;d>0;m++)c=ff*h|0,he[m]=h-vf*c|0,h=i[d-1]+c,d-=1;if(h=Ms(h,a),h-=8*bjr(h*.125),g=h|0,h-=g,l=0,a>0?(m=he[t-1]>>24-a,g+=m,he[t-1]-=m<<24-a,l=he[t-1]>>23-a):a===0?l=he[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,m=0;m<t;m++)d=he[m],f===0?d!==0&&(f=1,he[m]=16777216-d):he[m]=16777215-d;if(a>0)switch(a){case 1:he[t-1]&=8388607;break;case 2:he[t-1]&=4194303;break}l===2&&(h=1-h,f!==0&&(h-=Ms(1,a)))}if(h===0){for(d=0,m=t-1;m>=n;m--)d|=he[m];if(d===0){for(y=1;he[n-y]===0;y++);for(m=t+1;m<=t+y;m++){for(v[o+m]=WP[u+m],c=0,d=0;d<=o;d++)c+=r[d]*v[o+(m-d)];i[m]=c}return t+=y,XP(r,e,t,i,a,n,u,o,v)}}if(h===0)for(t-=1,a-=24;he[t]===0;)t-=1,a-=24;else h=Ms(h,-a),h>=vf?(c=ff*h|0,he[t]=h-vf*c|0,t+=1,a+=24,he[t]=c):he[t]=h|0;for(c=Ms(1,a),m=t;m>=0;m--)i[m]=c*he[m],c*=ff;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=wjr[y]*i[m+y];ks[t-m]=c}for(c=0,m=t;m>=0;m--)c+=ks[m];for(l===0?e[0]=c:e[0]=-c,c=ks[0]-c,m=1;m<=t;m++)c+=ks[m];return l===0?e[1]=c:e[1]=-c,g&7}function Ejr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+n,c=0;c<=p;c++)l<0?Bs[c]=0:Bs[c]=WP[l],l+=1;for(c=0;c<=n;c++){for(a=0,l=0;l<=o;l++)a+=r[l]*Bs[o+(c-l)];zP[c]=a}return v=n,XP(r,e,v,zP,f,n,u,o,Bs)}JP.exports=Ejr});var $P=s((w_e,ZP)=>{"use strict";var Njr=Math.round;ZP.exports=Njr});var cf=s((E_e,QP)=>{"use strict";var Sjr=$P();QP.exports=Sjr});var tF=s((N_e,eF)=>{"use strict";var Ojr=cf(),KP=ie(),Ajr=.6366197723675814,_jr=1.5707963267341256,Tjr=6077100506506192e-26,Ijr=6077100506303966e-26,Rjr=20222662487959506e-37,Ljr=20222662487111665e-37,Pjr=84784276603689e-45,rF=2047;function Fjr(r,e,t){var i,a,n,u,o,v,f;return a=Ojr(r*Ajr),u=r-a*_jr,o=a*Tjr,f=e>>20|0,t[0]=u-o,i=KP(t[0]),v=f-(i>>20&rF),v>16&&(n=u,o=a*Ijr,u=n-o,o=a*Rjr-(n-u-o),t[0]=u-o,i=KP(t[0]),v=f-(i>>20&rF),v>49&&(n=u,o=a*Ljr,u=n-o,o=a*Pjr-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}eF.exports=Fjr});var aF=s((S_e,iF)=>{"use strict";var xjr=vt(),jjr=Un(),Mjr=Ns(),Bjr=ie(),kjr=HP(),Cjr=Ha(),Vjr=YP(),Vs=tF(),Ujr=0,Gjr=16777216,pi=1.5707963267341256,ia=6077100506506192e-26,Us=2*ia,Gs=3*ia,Ds=4*ia,Djr=598523,Hjr=1072243195,zjr=1073928572,Wjr=1074752122,Xjr=1074977148,Jjr=1075183036,Yjr=1075388923,Zjr=1075594811,$jr=1094263291,Jn=[0,0,0],Yn=[0,0];function Qjr(r,e){var t,i,a,n,u,o,v,f;if(a=Bjr(r),n=a&xjr|0,n<=Hjr)return e[0]=r,e[1]=0,0;if(n<=Wjr)return(n&Mjr)===Djr?Vs(r,n,e):n<=zjr?r>0?(f=r-pi,e[0]=f-ia,e[1]=f-e[0]-ia,1):(f=r+pi,e[0]=f+ia,e[1]=f-e[0]+ia,-1):r>0?(f=r-2*pi,e[0]=f-Us,e[1]=f-e[0]-Us,2):(f=r+2*pi,e[0]=f+Us,e[1]=f-e[0]+Us,-2);if(n<=Zjr)return n<=Jjr?n===Xjr?Vs(r,n,e):r>0?(f=r-3*pi,e[0]=f-Gs,e[1]=f-e[0]-Gs,3):(f=r+3*pi,e[0]=f+Gs,e[1]=f-e[0]+Gs,-3):n===Yjr?Vs(r,n,e):r>0?(f=r-4*pi,e[0]=f-Ds,e[1]=f-e[0]-Ds,4):(f=r+4*pi,e[0]=f+Ds,e[1]=f-e[0]+Ds,-4);if(n<$jr)return Vs(r,n,e);if(n>=jjr)return e[0]=NaN,e[1]=NaN,0;for(t=kjr(r),i=(n>>20)-1046,f=Cjr(n-(i<<20|0),t),o=0;o<2;o++)Jn[o]=f|0,f=(f-Jn[o])*Gjr;for(Jn[2]=f,u=3;Jn[u-1]===Ujr;)u-=1;return v=Vjr(Jn,Yn,i,u,1),r<0?(e[0]=-Yn[0],e[1]=-Yn[1],-v):(e[0]=Yn[0],e[1]=Yn[1],v)}iF.exports=Qjr});var Zn=s((O_e,nF)=>{"use strict";var Kjr=aF();nF.exports=Kjr});var oF=s((A_e,uF)=>{"use strict";var sF=-.16666666666666632,rMr=.00833333333332249,eMr=-.0001984126982985795,tMr=27557313707070068e-22,iMr=-25050760253406863e-24,aMr=158969099521155e-24,nMr=.0416666666666666,sMr=-.001388888888887411,uMr=2480158728947673e-20,oMr=-27557314351390663e-23,vMr=2087572321298175e-24,fMr=-11359647557788195e-27;function cMr(r,e,t,i,a){var n,u,o,v,f;return f=r*r,v=f*f,u=rMr+f*(eMr+f*tMr)+f*v*(iMr+f*aMr),o=f*r,e===0?t[a]=r+o*(sF+f*u):t[a]=r-(f*(.5*e-o*u)-e-o*sF),u=f*(nMr+f*(sMr+f*uMr)),u+=v*v*(oMr+f*(vMr+f*fMr)),n=.5*f,v=1-n,t[a+i]=v+(1-v-n+(f*u-r*e)),t}uF.exports=cMr});var pf=s((__e,fF)=>{"use strict";var lMr=vt(),pMr=Un(),dMr=ie(),gMr=Zn(),vF=oF(),mMr=1072243195,yMr=1044381696,lf=[0,0];function hMr(r,e,t,i){var a,n;if(a=dMr(r),a&=lMr,a<=mMr)return a<yMr&&(r|0)===0&&(e[i]=r,e[i+t]=0),vF(r,0,e,t,i);if(a>=pMr)return e[i]=NaN,e[i+t]=NaN,e;switch(n=gMr(r,lf),vF(lf[0],lf[1],e,t,i),n&3){case 1:return a=e[i+t],e[i+t]=-e[i],e[i]=a,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return a=-e[i+t],e[i+t]=e[i],e[i]=a,e;default:return e}}fF.exports=hMr});var lF=s((T_e,cF)=>{"use strict";var qMr=pf();function bMr(r){return qMr(r,[0,0],1,0)}cF.exports=bMr});var $n=s((I_e,dF)=>{"use strict";var wMr=G(),pF=lF(),EMr=pf();wMr(pF,"assign",EMr);dF.exports=pF});var mF=s((R_e,gF)=>{"use strict";function NMr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}gF.exports=NMr});var hF=s((L_e,yF)=>{"use strict";function SMr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}yF.exports=SMr});var bF=s((P_e,qF)=>{"use strict";function OMr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}qF.exports=OMr});var EF=s((F_e,wF)=>{"use strict";function AMr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}wF.exports=AMr});var SF=s((x_e,NF)=>{"use strict";var _Mr=Lr(),TMr=$n().assign,IMr=hr(),RMr=mF(),LMr=hF(),PMr=bF(),FMr=EF(),xMr=.5641895835477563,jMr=2.404825557695773,MMr=5.520078110286311,BMr=616,kMr=-.0014244423042272315,CMr=1413,VMr=.0005468602863106496,Qn=[0,0];function UMr(r){var e,t,i,a,n,u;return r<0&&(r=-r),r===IMr?0:r===0?1:r<=4?(n=r*r,a=RMr(n),u=(r+jMr)*(r-BMr/256-kMr),u*a):r<=8?(n=1-r*r/64,a=LMr(n),u=(r+MMr)*(r-CMr/256-VMr),u*a):(n=8/r,i=n*n,e=PMr(i),t=FMr(i),u=xMr/_Mr(r),TMr(r,Qn,1,0),u*(e*(Qn[1]+Qn[0])-n*t*(Qn[0]-Qn[1])))}NF.exports=UMr});var df=s((j_e,OF)=>{"use strict";var GMr=SF();OF.exports=GMr});var Hs=s((M_e,AF)=>{"use strict";var DMr=1.772453850905516;AF.exports=DMr});var TF=s((B_e,_F)=>{"use strict";function HMr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}_F.exports=HMr});var RF=s((k_e,IF)=>{"use strict";function zMr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}IF.exports=zMr});var PF=s((C_e,LF)=>{"use strict";function WMr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}LF.exports=WMr});var xF=s((V_e,FF)=>{"use strict";function XMr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}FF.exports=XMr});var MF=s((U_e,jF)=>{"use strict";var JMr=Lr(),YMr=Wr(),ZMr=$n().assign,$Mr=hr(),QMr=Hs(),KMr=TF(),rBr=RF(),eBr=PF(),tBr=xF(),iBr=3.8317059702075125,aBr=7.015586669815619,nBr=981,sBr=-.0003252797924876844,uBr=1796,oBr=-38330184381246464e-21,Kn=[0,0];function vBr(r){var e,t,i,a,n,u,o,v;return v=YMr(r),r===0||v===$Mr?0:(v<=4?(u=r*r,n=KMr(u),o=v*(v+iBr)*(v-nBr/256-sBr),e=o*n):v<=8?(u=r*r,n=rBr(u),o=v*(v+aBr)*(v-uBr/256-oBr),e=o*n):(u=8/v,a=u*u,t=eBr(a),i=tBr(a),o=1/(JMr(v)*QMr),ZMr(v,Kn,1,0),e=o*(t*(Kn[0]-Kn[1])+u*i*(Kn[0]+Kn[1]))),r<0&&(e*=-1),e)}jF.exports=vBr});var gf=s((G_e,BF)=>{"use strict";var fBr=MF();BF.exports=fBr});var Ue=s((D_e,kF)=>{"use strict";var cBr=3.141592653589793;kF.exports=cBr});var VF=s((H_e,CF)=>{"use strict";function lBr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}CF.exports=lBr});var GF=s((z_e,UF)=>{"use strict";function pBr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}UF.exports=pBr});var HF=s((W_e,DF)=>{"use strict";function dBr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}DF.exports=dBr});var WF=s((X_e,zF)=>{"use strict";function gBr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}zF.exports=gBr});var JF=s((J_e,XF)=>{"use strict";function mBr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}XF.exports=mBr});var KF=s((Y_e,QF)=>{"use strict";var mf=br(),yBr=Lr(),hBr=Ue(),qBr=Hs(),bBr=Ir(),wBr=hr(),EBr=$n().assign,yf=df(),NBr=VF(),SBr=GF(),OBr=HF(),ABr=WF(),_Br=JF(),TBr=1/qBr,hf=2/hBr,YF=.8935769662791675,ZF=3.957678419314858,$F=7.086051060301773,IBr=228,RBr=.0029519662791675214,LBr=1013,PBr=.0006471693148578684,FBr=1814,xBr=.00011356030177269763,r0=[0,0];function jBr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?bBr:r===wBr?0:r<=3?(n=r*r,u=mf(r/YF)*yf(r)*hf,a=NBr(n),o=(r+YF)*(r-IBr/256-RBr),u+o*a):r<=5.5?(n=r*r,u=mf(r/ZF)*yf(r)*hf,a=SBr(n),o=(r+ZF)*(r-LBr/256-PBr),u+o*a):r<=8?(n=r*r,u=mf(r/$F)*yf(r)*hf,a=OBr(n),o=(r+$F)*(r-FBr/256-xBr),u+o*a):(n=8/r,i=n*n,e=ABr(i),t=_Br(i),o=TBr/yBr(r),EBr(r,r0,1,0),o*(e*(r0[0]-r0[1])+n*t*(r0[1]+r0[0])))}QF.exports=jBr});var ex=s((Z_e,rx)=>{"use strict";var MBr=KF();rx.exports=MBr});var ix=s(($_e,tx)=>{"use strict";function BBr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}tx.exports=BBr});var nx=s((Q_e,ax)=>{"use strict";function kBr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}ax.exports=kBr});var ux=s((K_e,sx)=>{"use strict";function CBr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}sx.exports=CBr});var vx=s((rTe,ox)=>{"use strict";function VBr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}ox.exports=VBr});var mx=s((eTe,gx)=>{"use strict";var fx=br(),UBr=Lr(),GBr=Ue(),DBr=Hs(),HBr=Ir(),zBr=hr(),WBr=$n().assign,cx=gf(),XBr=ix(),JBr=nx(),YBr=ux(),ZBr=vx(),$Br=1/DBr,lx=2/GBr,px=2.197141326031017,dx=5.429681040794135,QBr=562,KBr=.001828826031017035,rkr=1390,ekr=-6459205864867228e-21,e0=[0,0];function tkr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?HBr:r===zBr?0:r<=4?(n=r*r,u=fx(r/px)*cx(r)*lx,a=XBr(n),o=(r+px)*(r-QBr/256-KBr)/r,u+o*a):r<=8?(n=r*r,u=fx(r/dx)*cx(r)*lx,a=JBr(n),o=(r+dx)*(r-rkr/256-ekr)/r,u+o*a):(n=8/r,i=n*n,e=YBr(i),t=ZBr(i),o=$Br/UBr(r),WBr(r,e0,1,0),o*(n*t*(e0[0]-e0[1])-e*(e0[0]+e0[1])))}gx.exports=tkr});var hx=s((tTe,yx)=>{"use strict";var ikr=mx();yx.exports=ikr});var bx=s((iTe,qx)=>{"use strict";function akr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}qx.exports=akr});var Ex=s((aTe,wx)=>{"use strict";function nkr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}wx.exports=nkr});var Sx=s((nTe,Nx)=>{"use strict";var skr=bx(),ukr=Ex();function okr(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*skr(n),i+=a*a*ukr(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}Nx.exports=okr});var qf=s((sTe,Ox)=>{"use strict";var vkr=Sx();Ox.exports=vkr});var Tx=s((uTe,_x)=>{"use strict";var Ax=-.16666666666666632,fkr=.00833333333332249,ckr=-.0001984126982985795,lkr=27557313707070068e-22,pkr=-25050760253406863e-24,dkr=158969099521155e-24;function gkr(r,e){var t,i,a,n;return n=r*r,a=n*n,t=fkr+n*(ckr+n*lkr)+n*a*(pkr+n*dkr),i=n*r,e===0?r+i*(Ax+n*t):r-(n*(.5*e-i*t)-e-i*Ax)}_x.exports=gkr});var bf=s((oTe,Ix)=>{"use strict";var mkr=Tx();Ix.exports=mkr});var Px=s((vTe,Lx)=>{"use strict";var ykr=ie(),wf=qf(),Rx=bf(),hkr=Zn(),St=[0,0],qkr=2147483647,bkr=1072243195,wkr=1044381696,Ekr=2146435072;function Nkr(r){var e,t;if(e=ykr(r),e&=qkr,e<=bkr)return e<wkr?1:wf(r,0);if(e>=Ekr)return NaN;switch(t=hkr(r,St),t&3){case 0:return wf(St[0],St[1]);case 1:return-Rx(St[0],St[1]);case 2:return-wf(St[0],St[1]);default:return Rx(St[0],St[1])}}Lx.exports=Nkr});var aa=s((fTe,Fx)=>{"use strict";var Skr=Px();Fx.exports=Skr});var Mx=s((cTe,jx)=>{"use strict";var Okr=vt(),Akr=Un(),_kr=ie(),xx=qf(),Ef=bf(),Tkr=Zn(),Ikr=1072243195,Rkr=1045430272,Ot=[0,0];function Lkr(r){var e,t;if(e=_kr(r),e&=Okr,e<=Ikr)return e<Rkr?r:Ef(r,0);if(e>=Akr)return NaN;switch(t=Tkr(r,Ot),t&3){case 0:return Ef(Ot[0],Ot[1]);case 1:return xx(Ot[0],Ot[1]);case 2:return-Ef(Ot[0],Ot[1]);default:return-xx(Ot[0],Ot[1])}}jx.exports=Lkr});var na=s((lTe,Bx)=>{"use strict";var Pkr=Mx();Bx.exports=Pkr});var Vx=s((pTe,Cx)=>{"use strict";var Fkr=W(),xkr=Ve(),jkr=Wr(),kx=aa(),Mkr=na(),Bkr=Gr(),Nf=Ue(),kkr=za(),Ckr=kkr+1;function Vkr(r){var e,t,i,a;return Fkr(r)?NaN:xkr(r)?NaN:(e=jkr(r),e>Ckr?1:(t=Bkr(e),i=e-t,i===.5?0:(i<.25?a=kx(Nf*i):i<.75?(i=.5-i,a=Mkr(Nf*i)):(i=1-i,a=-kx(Nf*i)),t%2===1?-a:a)))}Cx.exports=Vkr});var Gx=s((dTe,Ux)=>{"use strict";var Ukr=Vx();Ux.exports=Ukr});var Hx=s((gTe,Dx)=>{"use strict";var Gkr=1.618033988749895;Dx.exports=Gkr});var Wx=s((mTe,zx)=>{"use strict";var Dkr=W(),Hkr=Gx(),zkr=Vr(),Wkr=Hx(),Xkr=hr(),Jkr=Ir(),Ykr=2.23606797749979;function Zkr(r){var e,t;return Dkr(r)||r===Xkr||r===Jkr?NaN:(e=zkr(Wkr,r),t=Hkr(r)/e,(e-t)/Ykr)}zx.exports=Zkr});var Jx=s((yTe,Xx)=>{"use strict";var $kr=Wx();Xx.exports=$kr});var Zx=s((hTe,Yx)=>{"use strict";function Qkr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}Yx.exports=Qkr});var rj=s((qTe,Kx)=>{"use strict";var Kkr=Vv(),rCr=Lv(),$x=vt(),Of=ie(),eCr=wt(),tCr=Ve(),Qx=Ha(),iCr=Da(),aCr=W(),nCr=Zx(),sCr=4294967295>>>0,uCr=3221225472>>>0,oCr=0x40000000000000,Sf=2147483648>>>0,vCr=1>>>0,fCr=715094163>>>0,cCr=696219795>>>0,lCr=Of(Kkr),sa=[0>>>0,0>>>0];function pCr(r){var e,t,i,a,n,u,o;return r===0||aCr(r)||tCr(r)?r:(t=Of(r)>>>0,e=(t&rCr)>>>0,t&=$x,t<lCr?(u=oCr*r,i=(Of(u)&$x)>>>0,i=(i/3>>>0)+cCr>>>0,u=Qx(e|i,0)):(u=0,i=(t/3>>>0)+fCr>>>0,u=eCr(u,e|i)),a=u*u*(u/r),u*=nCr(a),iCr.assign(u,sa,1,0),sa[1]&Sf?(sa[0]+=vCr,sa[1]&=~Sf):sa[1]|=Sf,u=Qx(sa[0]&sCr,sa[1]&uCr),n=u*u,a=r/n,o=u+u,a=(a-u)/(o+a),u+=u*a,u)}Kx.exports=pCr});var tj=s((bTe,ej)=>{"use strict";var dCr=rj();ej.exports=dCr});var aj=s((wTe,ij)=>{"use strict";var gCr=Math.ceil;ij.exports=gCr});var Xa=s((ETe,nj)=>{"use strict";var mCr=aj();nj.exports=mCr});var uj=s((NTe,sj)=>{"use strict";function yCr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}sj.exports=yCr});var vj=s((STe,oj)=>{"use strict";function hCr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}oj.exports=hCr});var lj=s((OTe,cj)=>{"use strict";var qCr=ie(),bCr=uj(),wCr=vj(),fj=1048575,ECr=.3333333333333333;function NCr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=qCr(r),n=r-1,(fj&2+a)<3?n===0?0:n*n*(ECr*n-.5):(u=n/(2+n),o=u*u,a&=fj,c=a-398458|0,f=o*o,l=440401-a|0,t=f*bCr(f),i=o*wCr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}cj.exports=NCr});var mj=s((ATe,gj)=>{"use strict";var pj=ie(),SCr=wt(),OCr=bt(),ACr=W(),_Cr=ft(),TCr=Ir(),ICr=lj(),RCr=0x40000000000000,dj=.4342944818781689,LCr=25082946711645275e-27,PCr=.30102999566361177,FCr=3694239077158931e-28,xCr=1048575,jCr=2146435072,MCr=1048576,BCr=1072693248;function kCr(r){var e,t,i,a,n,u,o,v;return ACr(r)||r<0?NaN:r===0?TCr:(t=pj(r),u=0,t<MCr&&(u-=54,r*=RCr,t=pj(r)),t>=jCr?r+r:(u+=(t>>20)-_Cr|0,t&=xCr,n=t+614244&1048576|0,r=SCr(r,t|n^BCr),u+=n>>20|0,o=u,a=ICr(r),r-=1,e=OCr(r,0),i=r-e,v=o*FCr+(r+a)*LCr,v+=(i+a)*dj+e*dj,v+o*PCr))}gj.exports=kCr});var hj=s((_Te,yj)=>{"use strict";var CCr=mj();yj.exports=CCr});var bj=s((TTe,qj)=>{"use strict";var VCr=W(),UCr=Ve(),GCr=Vr(),DCr=Gr(),HCr=Xa(),zCr=hj(),WCr=Ss(),XCr=Os(),JCr=hr();function YCr(r){var e,t;return VCr(r)||UCr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=zCr(r),e===-1?t=DCr(t):t=HCr(t),t<=XCr?e*0:t>WCr?JCr:e*GCr(10,t))}qj.exports=YCr});var Ej=s((ITe,wj)=>{"use strict";var ZCr=bj();wj.exports=ZCr});var Sj=s((RTe,Nj)=>{"use strict";function $Cr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}Nj.exports=$Cr});var Aj=s((LTe,Oj)=>{"use strict";function QCr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}Oj.exports=QCr});var Ij=s((PTe,Tj)=>{"use strict";var KCr=ie(),rVr=Sj(),eVr=Aj(),_j=1048575,tVr=.3333333333333333;function iVr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=KCr(r),n=r-1,(_j&2+a)<3?n===0?0:n*n*(tVr*n-.5):(u=n/(2+n),o=u*u,a&=_j,c=a-398458|0,f=o*o,l=440401-a|0,t=f*rVr(f),i=o*eVr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}Tj.exports=iVr});var Pj=s((FTe,Lj)=>{"use strict";var aVr=ie(),nVr=wt(),sVr=bt(),uVr=Da(),oVr=W(),vVr=vt(),fVr=Ns(),cVr=ft(),lVr=Ir(),pVr=Ij(),dVr=0x40000000000000,Rj=1.4426950407214463,gVr=16751713164886512e-26,mVr=2146435072,yVr=1048576,hVr=1072693248,Af=[0,0];function qVr(r){var e,t,i,a,n,u,o;if(oVr(r)||r<0)return NaN;if(uVr.assign(r,Af,1,0),i=Af[0],a=Af[1],o=0,i<yVr){if((i&vVr|a)===0)return lVr;o-=54,r*=dVr,i=aVr(r)}return i>=mVr?r+r:(o+=(i>>20)-cVr|0,i&=fVr,u=i+614244&1048576|0,r=nVr(r,i|u^hVr),o+=u>>20|0,n=pVr(r),r-=1,e=sVr(r,0),t=r-e,(r+n)*gVr+(t+n)*Rj+e*Rj+o)}Lj.exports=qVr});var xj=s((xTe,Fj)=>{"use strict";var bVr=Pj();Fj.exports=bVr});var Mj=s((jTe,jj)=>{"use strict";var wVr=W(),EVr=Ve(),NVr=Vr(),SVr=Gr(),OVr=Xa(),AVr=xj(),_Vr=kv(),TVr=Cv(),IVr=hr();function RVr(r){var e,t;return wVr(r)||EVr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=AVr(r),t===TVr)?r:(e===-1?t=SVr(t):t=OVr(t),t>_Vr?IVr:e*NVr(2,t))}jj.exports=RVr});var kj=s((MTe,Bj)=>{"use strict";var LVr=Mj();Bj.exports=LVr});var Vj=s((BTe,Cj)=>{"use strict";var PVr=Gr(),FVr=Xa();function xVr(r){return r<0?FVr(r):PVr(r)}Cj.exports=xVr});var zs=s((kTe,Uj)=>{"use strict";var jVr=Vj();Uj.exports=jVr});var Dj=s((CTe,Gj)=>{"use strict";function MVr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}Gj.exports=MVr});var zj=s((VTe,Hj)=>{"use strict";var BVr=ws(),kVr=Dj();function CVr(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*kVr(a),u=1-(e-i*n/(2-n)-r),BVr(u,t)}Hj.exports=CVr});var $j=s((UTe,Zj)=>{"use strict";var VVr=W(),Wj=zs(),UVr=Ir(),Xj=hr(),GVr=zj(),DVr=.6931471803691238,HVr=19082149292705877e-26,Jj=1.4426950408889634,zVr=709.782712893384,WVr=-745.1332191019411,Yj=1/(1<<28),XVr=-Yj;function JVr(r){var e,t,i;return VVr(r)||r===Xj?r:r===UVr?0:r>zVr?Xj:r<WVr?0:r>XVr&&r<Yj?1+r:(r<0?i=Wj(Jj*r-.5):i=Wj(Jj*r+.5),e=r-i*DVr,t=i*HVr,GVr(e,t,i))}Zj.exports=JVr});var ae=s((GTe,Qj)=>{"use strict";var YVr=$j();Qj.exports=YVr});var rM=s((DTe,Kj)=>{"use strict";var ZVr=Ir();function $Vr(r){return r===0&&1/r===ZVr}Kj.exports=$Vr});var _f=s((HTe,eM)=>{"use strict";var QVr=rM();eM.exports=QVr});var Tf=s((zTe,tM)=>{"use strict";var KVr=2.5066282746310007;tM.exports=KVr});var aM=s((WTe,iM)=>{"use strict";function rUr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}iM.exports=rUr});var uM=s((XTe,sM)=>{"use strict";var eUr=Tf(),nM=Vr(),tUr=ae(),iUr=aM(),aUr=143.01608;function nUr(r){var e,t,i;return e=1/r,e=1+e*iUr(e),t=tUr(r),r>aUr?(i=nM(r,.5*r-.25),t=i*(i/t)):t=nM(r,r-.5)/t,eUr*t*e}sM.exports=nUr});var vM=s((JTe,oM)=>{"use strict";var sUr=.5772156649015329;oM.exports=sUr});var cM=s((YTe,fM)=>{"use strict";var uUr=vM();function oUr(r,e){return e/((1+uUr*r)*r)}fM.exports=oUr});var pM=s((ZTe,lM)=>{"use strict";function vUr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}lM.exports=vUr});var wM=s(($Te,bM)=>{"use strict";var fUr=W(),cUr=we(),lUr=_f(),dM=Wr(),pUr=Gr(),dUr=na(),gM=hr(),mM=Ir(),yM=Ue(),hM=uM(),qM=cM(),gUr=pM();function mUr(r){var e,t,i,a;if(cUr(r)&&r<0||r===mM||fUr(r))return NaN;if(r===0)return lUr(r)?mM:gM;if(r>171.61447887182297)return gM;if(r<-170.5674972726612)return 0;if(t=dM(r),t>33)return r>=0?hM(r):(i=pUr(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*dUr(yM*a),e*yM/(dM(a)*hM(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return qM(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return qM(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*gUr(r))}bM.exports=mUr});var Ja=s((QTe,EM)=>{"use strict";var yUr=wM();EM.exports=yUr});var OM=s((KTe,SM)=>{"use strict";var hUr=W(),qUr=Ve(),NM=aa(),If=na(),bUr=Wr(),t0=ms(),i0=Ue();function wUr(r){var e,t;return hUr(r)?NaN:qUr(r)?NaN:(t=r%2,e=bUr(t),e===0||e===1?t0(0,t):e<.25?If(i0*t):e<.75?(e=.5-e,t0(NM(i0*e),t)):e<1.25?(t=t0(1,t)-t,If(i0*t)):e<1.75?(e-=1.5,-t0(NM(i0*e),t)):(t-=t0(2,t),If(i0*t)))}SM.exports=wUr});var a0=s((rIe,AM)=>{"use strict";var EUr=OM();AM.exports=EUr});var TM=s((eIe,_M)=>{"use strict";function NUr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}_M.exports=NUr});var RM=s((tIe,IM)=>{"use strict";function SUr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}IM.exports=SUr});var PM=s((iIe,LM)=>{"use strict";function OUr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}LM.exports=OUr});var xM=s((aIe,FM)=>{"use strict";function AUr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}FM.exports=AUr});var MM=s((nIe,jM)=>{"use strict";function _Ur(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}jM.exports=_Ur});var kM=s((sIe,BM)=>{"use strict";function TUr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}BM.exports=TUr});var VM=s((uIe,CM)=>{"use strict";function IUr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}CM.exports=IUr});var GM=s((oIe,UM)=>{"use strict";function RUr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}UM.exports=RUr});var HM=s((vIe,DM)=>{"use strict";function LUr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}DM.exports=LUr});var WM=s((fIe,zM)=>{"use strict";function PUr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}zM.exports=PUr});var YM=s((cIe,JM)=>{"use strict";var FUr=W(),xUr=Ve(),jUr=Wr(),Ya=br(),MUr=zs(),BUr=a0(),kUr=Ue(),Rf=hr(),CUr=TM(),VUr=RM(),UUr=PM(),GUr=xM(),DUr=MM(),HUr=kM(),zUr=VM(),WUr=GM(),XUr=HM(),JUr=WM(),YUr=.07721566490153287,ZUr=.3224670334241136,$Ur=1,QUr=-.07721566490153287,KUr=.48383612272381005,rGr=-.1475877229945939,eGr=.06462494023913339,tGr=-.07721566490153287,iGr=1,aGr=.4189385332046727,Ws=1.4616321449683622,nGr=4503599627370496,sGr=0x400000000000000,uGr=8470329472543003e-37,XM=1.4616321449683622,oGr=-.12148629053584961,vGr=-3638676997039505e-33;function fGr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(FUr(r)||xUr(r))return r;if(r===0)return Rf;if(r<0?(e=!0,r=-r):e=!1,r<uGr)return-Ya(r);if(e){if(r>=nGr||(f=BUr(r),f===0))return Rf;t=Ya(kUr/jUr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-Ya(r),r>=Ws-1+.27?(l=1-r,i=0):r>=Ws-1-.27?(l=r-(XM-1),i=1):(l=r,i=2)):(m=0,r>=Ws+.27?(l=2-r,i=0):r>=Ws-.27?(l=r-XM,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=YUr+p*CUr(p),n=p*(ZUr+p*VUr(p)),o=l*u+n,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=KUr+c*DUr(c),n=rGr+c*HUr(c),a=eGr+c*zUr(c),o=p*u-(vGr-c*(n+l*a)),m+=oGr+o;break;case 2:u=l*(tGr+l*WUr(l)),n=iGr+l*XUr(l),m+=-.5*l+u/n;break}else if(r<8)switch(i=MUr(r),l=r-i,o=l*(QUr+l*GUr(l)),v=$Ur+l*UUr(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=Ya(p)}else r<sGr?(f=Ya(r),p=1/r,l=p*p,c=aGr+p*JUr(l),m=(r-.5)*(f-1)+c):m=r*(Ya(r)-1);return e&&(m=t-m),m}JM.exports=fGr});var n0=s((lIe,ZM)=>{"use strict";var cGr=YM();ZM.exports=cGr});var di=s((pIe,$M)=>{"use strict";var lGr=6.283185307179586;$M.exports=lGr});var Lf=s((dIe,QM)=>{"use strict";var pGr=14901161193847656e-24;QM.exports=pGr});var Pf=s((gIe,KM)=>{"use strict";var dGr=.9189385332046728;KM.exports=dGr});var rB=s((mIe,gGr)=>{gGr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var eB=s((yIe,mGr)=>{mGr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var tB=s((hIe,yGr)=>{yGr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var aB=s((qIe,iB)=>{"use strict";function hGr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}iB.exports=hGr});var sB=s((bIe,nB)=>{"use strict";function qGr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}nB.exports=qGr});var oB=s((wIe,uB)=>{"use strict";function bGr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}uB.exports=bGr});var fB=s((EIe,vB)=>{"use strict";function wGr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}vB.exports=wGr});var lB=s((NIe,cB)=>{"use strict";function EGr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}cB.exports=EGr});var dB=s((SIe,pB)=>{"use strict";function NGr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}pB.exports=NGr});var qB=s((OIe,hB)=>{"use strict";var SGr=W(),OGr=we(),AGr=Wr(),Xs=ae(),_Gr=Gr(),TGr=Ja(),IGr=n0(),gB=a0(),mB=Vr(),RGr=br(),LGr=hr(),PGr=Ir(),yB=di(),FGr=Lf(),xGr=Pf(),jGr=rB(),MGr=eB(),BGr=tB(),kGr=aB(),CGr=sB(),VGr=oB(),UGr=fB(),GGr=lB(),DGr=dB(),HGr=129,zGr=170,WGr=709,XGr=1.2433929443359375,JGr=.6986598968505859;function Ff(r){var e,t,i,a,n,u;if(SGr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(OGr(r)&&(a=r|0,a===r))if(a<0){if(i=-a|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=HGr)return-BGr[u]/(i+1)}else return(a&1)===0?MGr[a/2]:jGr[(a-3)/2];return AGr(r)<FGr?-.5-xGr*r:(t=1-r,r<0?_Gr(r/2)===r/2?0:(e=r,r=t,t=e,r>zGr?(e=gB(.5*t)*2*Ff(r),n=IGr(r),n-=r*RGr(yB),n>WGr?e<0?PGr:LGr:e*Xs(n)):gB(.5*t)*2*mB(yB,-r)*TGr(r)*Ff(r)):r<1?(e=kGr(t),e-=XGr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+CGr(t)):r<=4?(e=JGr+1/-t,e+VGr(r-2)):r<=7?(e=UGr(r-4),1+Xs(e)):r<15?(e=GGr(r-7),1+Xs(e)):r<36?(e=DGr(r-15),1+Xs(e)):1+mB(2,-r))}hB.exports=Ff});var wB=s((AIe,bB)=>{"use strict";var YGr=qB();bB.exports=YGr});var NB=s((_Ie,EB)=>{"use strict";var Mr=$r(),ZGr=Wr(),$Gr=Rs(),QGr=Xn(),KGr=TL(),rDr=UL(),eDr=zL(),tDr=YL(),iDr=KL(),aDr=oP(),nDr=lP(),sDr=mP(),uDr=ta(),oDr=sf(),vDr=js(),fDr=wP(),cDr=OP(),lDr=IP(),pDr=BP(),dDr=df(),gDr=gf(),mDr=ex(),yDr=hx(),hDr=Jx(),qDr=tj(),bDr=Xa(),wDr=Ej(),EDr=kj(),NDr=aa(),SDr=na(),ODr=Lr(),ADr=wB();function _Dr(r){return Mr(r,"abs",ZGr),Mr(r,"abs2",$Gr),Mr(r,"acos",QGr),Mr(r,"acosh",KGr),Mr(r,"acot",rDr),Mr(r,"acovercos",eDr),Mr(r,"acoversin",tDr),Mr(r,"acsc",iDr),Mr(r,"acsch",aDr),Mr(r,"ahavercos",nDr),Mr(r,"ahaversin",sDr),Mr(r,"asin",uDr),Mr(r,"asinh",oDr),Mr(r,"atan",vDr),Mr(r,"atanh",fDr),Mr(r,"avercos",cDr),Mr(r,"aversin",lDr),Mr(r,"bernoulli",pDr),Mr(r,"besselj0",dDr),Mr(r,"besselj1",gDr),Mr(r,"bessely0",mDr),Mr(r,"bessely1",yDr),Mr(r,"binet",hDr),Mr(r,"cbrt",qDr),Mr(r,"ceil",bDr),Mr(r,"ceil10",wDr),Mr(r,"ceil2",EDr),Mr(r,"cos",NDr),Mr(r,"sin",SDr),Mr(r,"sqrt",ODr),Mr(r,"zeta",ADr),r}EB.exports=_Dr});var OB=s((TIe,SB)=>{"use strict";var TDr=$r(),IDr=F_(),RDr=GR(),LDr=NB();function PDr(r){return TDr(r,"tools",RDr({})),r=IDr(r),r=LDr(r),r}SB.exports=PDr});var TB=s((IIe,_B)=>{"use strict";var FDr=M1(),AB=FDr();function xDr(){return typeof AB.BigInt=="function"&&typeof BigInt=="function"&&typeof AB.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}_B.exports=xDr});var RB=s((RIe,IB)=>{"use strict";var jDr=TB();IB.exports=jDr});var FB=s((LIe,PB)=>{"use strict";var LB=Wr();function MDr(r){var e,t,i,a,n,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,a=LB(r[0]),u=1;u<t;u++)if(n=LB(r[u]),e&&n<a?e=!1:i&&n>a&&(i=!1),i||e)a=n;else return 0;return i&&e?3:i?1:2}PB.exports=MDr});var xf=s((PIe,xB)=>{"use strict";var BDr=FB();xB.exports=BDr});var MB=s((FIe,jB)=>{"use strict";function kDr(r,e){return e&&(r===2||r===3)}jB.exports=kDr});var kB=s((xIe,BB)=>{"use strict";function CDr(r,e){return e&&(r===1||r===3)}BB.exports=CDr});var VB=s((jIe,CB)=>{"use strict";var VDr=ns();function UDr(r,e,t,i,a){var n;return r===0||a===0?!1:(n=VDr(e,t,i),r===n[1]-n[0]+1)}CB.exports=UDr});var GB=s((MIe,UB)=>{"use strict";function GDr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}UB.exports=GDr});var HB=s((BIe,DB)=>{"use strict";function DDr(r){var e,t,i,a,n,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,a=this._offset,this._order==="column-major"){for(u=0;u<i;u++)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}for(u=i-1;u>=0;u--)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}DB.exports=DDr});var WB=s((kIe,zB)=>{"use strict";function HDr(r,e){var t,i,a,n,u,o;if(a=this._ndims,a===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,n=this._offset,this._order==="column-major"){for(o=0;o<a;o++)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}for(o=a-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}zB.exports=HDr});var JB=s((CIe,XB)=>{"use strict";function zDr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}XB.exports=zDr});var ZB=s((VIe,YB)=>{"use strict";function WDr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}YB.exports=WDr});var QB=s((UIe,$B)=>{"use strict";var XDr=it(),JDr=at();function YDr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(XDr(t),JDr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}$B.exports=YDr});var ek=s((GIe,rk)=>{"use strict";var ZDr=Jr().isPrimitive,$Dr=C(),KB=/[-\/\\^$*+?.()|[\]{}]/g;function QDr(r){var e,t,i;if(!ZDr(r))throw new TypeError($Dr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(KB,"\\$&"):(t=r.substring(1,i),t=t.replace(KB,"\\$&"),r=r[0]+t+r.substring(i),r)}rk.exports=QDr});var ik=s((DIe,tk)=>{"use strict";var KDr=ek();tk.exports=KDr});var nk=s((HIe,ak)=>{"use strict";var rHr=RegExp.prototype.exec;ak.exports=rHr});var uk=s((zIe,sk)=>{"use strict";var eHr=nk();function tHr(r){try{return eHr.call(r),!0}catch{return!1}}sk.exports=tHr});var vk=s((WIe,ok)=>{"use strict";var iHr=da(),aHr=Kr(),nHr=uk(),sHr=iHr();function uHr(r){return typeof r=="object"?r instanceof RegExp?!0:sHr?nHr(r):aHr(r)==="[object RegExp]":!1}ok.exports=uHr});var ck=s((XIe,fk)=>{"use strict";var oHr=vk();fk.exports=oHr});var pk=s((JIe,lk)=>{"use strict";function vHr(r,e,t){return r.replace(e,t)}lk.exports=vHr});var gi=s((YIe,dk)=>{"use strict";var fHr=pk();dk.exports=fHr});var mk=s((ZIe,gk)=>{"use strict";var cHr=ik(),lHr=yr(),jf=Jr().isPrimitive,pHr=ck(),Mf=C(),dHr=gi();function gHr(r,e,t){if(!jf(r))throw new TypeError(Mf("invalid argument. First argument must be a string. Value: `%s`.",r));if(jf(e))e=new RegExp(cHr(e),"g");else if(!pHr(e))throw new TypeError(Mf("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!jf(t)&&!lHr(t))throw new TypeError(Mf("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return dHr(r,e,t)}gk.exports=gHr});var hk=s(($Ie,yk)=>{"use strict";var mHr=mk();yk.exports=mHr});var bk=s((QIe,qk)=>{"use strict";var yHr=hk(),Bf=it(),kf=at(),hHr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function qHr(){var r,e,t,i,a,n,u;if(e=this._shape.length,a=this._dtype,i="ndarray( '"+a+"', ",r="",this._length<=100)if(a==="complex64"||a==="complex128")for(u=0;u<this._length;u++)n=this.iget(u),r+=Bf(n)+", "+kf(n),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(a==="complex64"||a==="complex128")for(u=0;u<3;u++)n=this.iget(u),r+=Bf(n)+", "+kf(n),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",a==="complex64"||a==="complex128")for(u=2;u>=0;u--)n=this.iget(this._length-1-u),r+=Bf(n)+", "+kf(n),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=hHr[this.dtype],i+=yHr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}qk.exports=qHr});var Ek=s((KIe,wk)=>{"use strict";var bHr=typeof ArrayBuffer=="function"?ArrayBuffer:null;wk.exports=bHr});var Sk=s((rRe,Nk)=>{"use strict";var wHr=D0(),EHr=ge(),Js=Ek();function NHr(){var r,e,t;if(typeof Js!="function")return!1;try{t=new Js(16),r=wHr(t)&&typeof Js.isView=="function",r&&(e=new EHr(t),e[0]=-3.14,e[1]=NaN,r=r&&Js.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}Nk.exports=NHr});var Ak=s((eRe,Ok)=>{"use strict";var SHr=Sk();Ok.exports=SHr});var Tk=s((tRe,_k)=>{"use strict";var OHr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;_k.exports=OHr});var Rk=s((iRe,Ik)=>{"use strict";function AHr(){throw new Error("not implemented")}Ik.exports=AHr});var Ys=s((aRe,Lk)=>{"use strict";var _Hr=Ak(),THr=Tk(),IHr=Rk(),Cf;_Hr()?Cf=THr:Cf=IHr;Lk.exports=Cf});var Fk=s((nRe,Pk)=>{"use strict";var RHr=Kr(),LHr=typeof DataView=="function";function PHr(r){return LHr&&r instanceof DataView||RHr(r)==="[object DataView]"}Pk.exports=PHr});var jk=s((sRe,xk)=>{"use strict";var FHr=Fk();xk.exports=FHr});var Bk=s((uRe,Mk)=>{"use strict";var xHr=typeof DataView=="function"?DataView:null;Mk.exports=xHr});var Vk=s((oRe,Ck)=>{"use strict";var jHr=jk(),MHr=Ys(),kk=Bk();function BHr(){var r,e,t;if(typeof kk!="function")return!1;try{t=new MHr(24),e=new kk(t,8),r=jHr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}Ck.exports=BHr});var Gk=s((vRe,Uk)=>{"use strict";var kHr=Vk();Uk.exports=kHr});var Hk=s((fRe,Dk)=>{"use strict";var CHr=typeof DataView=="function"?DataView:void 0;Dk.exports=CHr});var Wk=s((cRe,zk)=>{"use strict";function VHr(){throw new Error("not implemented")}zk.exports=VHr});var s0=s((lRe,Xk)=>{"use strict";var UHr=Gk(),GHr=Hk(),DHr=Wk(),Vf;UHr()?Vf=GHr:Vf=DHr;Xk.exports=Vf});var Yk=s((pRe,Jk)=>{"use strict";var HHr=typeof BigInt=="function"?BigInt:void 0;Jk.exports=HHr});var $k=s((dRe,Zk)=>{"use strict";var zHr=Yk();Zk.exports=zHr});var Qk=s((gRe,WHr)=>{WHr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var eC=s((mRe,rC)=>{"use strict";var Kk=Qk();function XHr(){var r;return arguments.length===0?Kk.all.slice():(r=Kk[arguments[0]],r?r.slice():[])}rC.exports=XHr});var iC=s((yRe,tC)=>{"use strict";function JHr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}tC.exports=JHr});var nC=s((hRe,aC)=>{"use strict";var YHr=$r(),ZHr=ka();function $Hr(r,e){var t,i,a;for(t=ZHr(e),a=0;a<t.length;a++)i=t[a],YHr(r,i,e[i]);return r}aC.exports=$Hr});var Gf=s((qRe,uC)=>{"use strict";var QHr=G(),Uf=eC(),sC=iC(),KHr=nC();QHr(Uf,"enum",sC);KHr(Uf,sC());uC.exports=Uf});var oC=s((bRe,rzr)=>{rzr.exports=["row-major","column-major"]});var fC=s((wRe,vC)=>{"use strict";var ezr=oC();function tzr(){return ezr.slice()}vC.exports=tzr});var lC=s((ERe,cC)=>{"use strict";function izr(){return{"row-major":1,"column-major":2}}cC.exports=izr});var u0=s((NRe,dC)=>{"use strict";var azr=G(),pC=fC(),nzr=lC();azr(pC,"enum",nzr);dC.exports=pC});var gC=s((SRe,szr)=>{szr.exports=["throw","clamp","wrap"]});var yC=s((ORe,mC)=>{"use strict";var uzr=gC();function ozr(){return uzr.slice()}mC.exports=ozr});var qC=s((ARe,hC)=>{"use strict";function vzr(){return{throw:1,clamp:2,wrap:3}}hC.exports=vzr});var Df=s((_Re,wC)=>{"use strict";var fzr=G(),bC=yC(),czr=qC();fzr(bC,"enum",czr);wC.exports=bC});var SC=s((TRe,NC)=>{"use strict";var mi=Ye(),lzr=Ys(),pzr=s0(),o0=$k(),dzr=Gf().enum,gzr=u0().enum,mzr=Df().enum,yzr=dzr(),hzr=gzr(),EC=mzr();function qzr(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new pzr(new lzr(t)),a=this._shape,n=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,mi?1:0),f+=1,o.setInt16(f,yzr[i],mi),f+=2,o.setBigInt64(f,o0(l),mi),c=l*8,f+=8,m=0;m<l;m++)o.setBigInt64(f,o0(a[m]),mi),o.setBigInt64(f+c,o0(n[m]*r),mi),f+=8;for(f+=c,o.setBigInt64(f,o0(this._offset*r),mi),f+=8,o.setInt8(f,hzr[this._order]),f+=1,o.setInt8(f,EC[v]),f+=1,o.setBigInt64(f,o0(p),mi),f+=8,m=0;m<p;m++)o.setInt8(f,EC[u[m]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,mi),this.__meta_dataview__=o,o}NC.exports=qzr});var AC=s((IRe,OC)=>{"use strict";var v0=Ye(),bzr=tt(),wzr=s0(),Ezr=Gr(),Nzr=4294967295>>>0,Szr=4294967296;function Ozr(r){var e,t,i,a;return e=new bzr(8),r===0||(a=(r&Nzr)>>>0,i=Ezr(r/Szr),t=new wzr(e.buffer),v0?(t.setUint32(0,a,v0),t.setUint32(4,i,v0)):(t.setUint32(0,i,v0),t.setUint32(4,a,v0))),e}OC.exports=Ozr});var TC=s((RRe,_C)=>{"use strict";var f0=Ye(),Azr=tt(),_zr=s0(),Tzr=Gr(),Izr=4294967295>>>0,Rzr=4294967296,$s=new Azr(8),Zs=new _zr($s.buffer);function Lzr(r,e,t,i){var a,n,u;if(r===0){for(u=0;u<$s.length;u++)e[i]=0,i+=t;return e}for(n=(r&Izr)>>>0,a=Tzr(r/Rzr),f0?(Zs.setUint32(0,n,f0),Zs.setUint32(4,a,f0)):(Zs.setUint32(0,a,f0),Zs.setUint32(4,n,f0)),u=0;u<$s.length;u++)e[i]=$s[u],i+=t;return e}_C.exports=Lzr});var LC=s((LRe,RC)=>{"use strict";var Pzr=G(),IC=AC(),Fzr=TC();Pzr(IC,"assign",Fzr);RC.exports=IC});var xC=s((PRe,FC)=>{"use strict";var Hf=Ye(),xzr=Ys(),jzr=s0(),Mzr=tt(),Bzr=Gf().enum,kzr=u0().enum,Czr=Df().enum,c0=LC().assign,Vzr=Bzr(),Uzr=kzr(),PC=Czr();function Gzr(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,m=o.length,i=33+p*16+m,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new jzr(new xzr(i)),e=new Mzr(v.buffer),n=this._shape,u=this._strides,a=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,Hf?1:0),c+=1,v.setInt16(c,Vzr[a],Hf),c+=2,c0(p,e,1,c),l=p*8,c+=8,y=0;y<p;y++)c0(n[y],e,1,c),c0(u[y]*r,e,1,c+l),c+=8;for(c+=l,c0(this._offset*r,e,1,c),c+=8,v.setInt8(c,Uzr[this._order]),c+=1,v.setInt8(c,PC[f]),c+=1,c0(m,e,1,c),c+=8,y=0;y<m;y++)v.setInt8(c,PC[o[y]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,Hf),this.__meta_dataview__=v,v}FC.exports=Gzr});var MC=s((FRe,jC)=>{"use strict";var Dzr=RB(),yi=G(),Ze=qr(),Hzr=Kv(),zzr=$v(),Wzr=xf(),Xzr=F1(),Jzr=MB(),Yzr=kB(),Zzr=VB(),$zr=GB(),Qzr=HB(),Kzr=WB(),rWr=JB(),eWr=ZB(),tWr=QB(),iWr=bk(),aWr=SC(),nWr=xC();function te(r,e,t,i,a,n){var u,o,v,f,c;if(!(this instanceof te))return new te(r,e,t,i,a,n);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=Hzr(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=a,this._order=n,this._shape=t,this._strides=i,this._accessors=Xzr(e.get&&e.set),this._iterationOrder=zzr(i),u=Zzr(f,t,i,a,this._iterationOrder),v=Wzr(i),this._flags={ROW_MAJOR_CONTIGUOUS:Yzr(v,u),COLUMN_MAJOR_CONTIGUOUS:Jzr(v,u),READONLY:!1},this.__meta_dataview__=null,this}yi(te,"name","ndarray");Ze(te.prototype,"byteLength",function(){return this._byteLength});Ze(te.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Ze(te.prototype,"data",function(){return this._buffer});Ze(te.prototype,"dtype",function(){return this._dtype});Ze(te.prototype,"flags",function(){return $zr(this._flags)});Ze(te.prototype,"length",function(){return this._length});Ze(te.prototype,"ndims",function(){return this._ndims});Ze(te.prototype,"offset",function(){return this._offset});Ze(te.prototype,"order",function(){return this._order});Ze(te.prototype,"shape",function(){return this._shape.slice()});Ze(te.prototype,"strides",function(){return this._strides.slice()});yi(te.prototype,"get",eWr);yi(te.prototype,"iget",Qzr);yi(te.prototype,"set",rWr);yi(te.prototype,"iset",Kzr);yi(te.prototype,"toString",iWr);yi(te.prototype,"toJSON",tWr);yi(te.prototype,"__array_meta_dataview__",Dzr()?aWr:nWr);jC.exports=te});var l0=s((xRe,BC)=>{"use strict";var sWr=MC();BC.exports=sWr});var VC=s((jRe,CC)=>{"use strict";function kC(r,e,t,i,a,n){var u,o,v,f,c;if(n>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[n],u=t[n],c=0;c<f;c++)o=kC(r,e,t,i,a,n+1),v.push(o),i+=u;return v}CC.exports=kC});var GC=s((MRe,UC)=>{"use strict";var uWr=Ln(),oWr=VC();function vWr(r,e,t,i,a){var n;if(e.length===0)return[];for(n=0;n<e.length;n++)if(e[n]===0)return[];return oWr(uWr(r),e,t,i,a,0)}UC.exports=vWr});var Qs=s((BRe,DC)=>{"use strict";var fWr=GC();DC.exports=fWr});var zC=s((kRe,HC)=>{"use strict";var cWr=Qs(),lWr=ct();function pWr(r,e,t,i,a,n,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<a.length;f++)r[v]=a[f],v+=1;return r[v]="offset",v+=1,r[v]=n,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:lWr(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:cWr(r,[r.length,1],[1,1],0,"row-major")}HC.exports=pWr});var XC=s((CRe,WC)=>{"use strict";var dWr=zC();WC.exports=dWr});var ZC=s((VRe,YC)=>{"use strict";var gWr=u0(),JC=gWr(),mWr=JC.length;function yWr(r){var e;for(e=0;e<mWr;e++)if(r===JC[e])return!0;return!1}YC.exports=yWr});var QC=s((URe,$C)=>{"use strict";var hWr=ZC();$C.exports=hWr});var rV=s((GRe,KC)=>{"use strict";function qWr(r){return r.toLowerCase()}KC.exports=qWr});var ua=s((DRe,eV)=>{"use strict";var bWr=rV();eV.exports=bWr});var iV=s((HRe,tV)=>{"use strict";var wWr=ga(),EWr=Yi(),NWr=Oa(),SWr=xa();function OWr(r,e){var t,i,a,n;for(a=SWr(r),wWr(r)?i=EWr(a):i=NWr(a),t=r.length,n=0;n<t;n++)if(i(r,n)===e)return!0;return!1}tV.exports=OWr});var nV=s((zRe,aV)=>{"use strict";var AWr=Be(),_Wr=ga(),TWr=Yi(),IWr=xa(),RWr=C();function LWr(r){var e,t,i;if(!AWr(r))throw new TypeError(RWr("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=IWr(r),_Wr(r)&&(e=TWr(i)),t=r.length,e===void 0?a:n;function a(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function n(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}aV.exports=LWr});var oV=s((WRe,uV)=>{"use strict";var PWr=G(),sV=iV(),FWr=nV();PWr(sV,"factory",FWr);uV.exports=sV});var lV=s((XRe,cV)=>{"use strict";var Ks=be().isPrimitive,xWr=ye().isPrimitive,vV=Er().isPrimitive,jWr=QC(),MWr=I2(),zf=ua(),BWr=oV().factory,kWr=u0(),CWr=l0(),VWr=ct(),lt=C(),UWr=H2(),GWr=B0(),DWr=kWr(),fV=["string","number","complex","boolean","date","any"],HWr=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],zWr=HWr.length,WWr=5,XWr=BWr(fV);function JWr(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function YWr(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!vV(i));a++){if(!Ks(i))throw new TypeError(lt('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function ZWr(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!vV(i));a++){if(!xWr(i))throw new TypeError(lt('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function $Wr(r,e){var t,i,a;if(r[0]!=="ndarray")throw new TypeError(lt('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(a=1;a<r.length;a++)if(i=zf(r[a]),i==="shape")e.shape=YWr(r,a+1),e.ndims=e.shape.length,a+=e.ndims;else if(i==="strides")e.strides=ZWr(r,a+1),a+=e.strides.length;else if(i==="offset"){if(a+=1,t=r[a],!Ks(t))throw new TypeError(lt('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(a+=1,t=zf(r[a]),!jWr(t))throw new TypeError(lt('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',DWr.join('", "'),t));e.order=t}else if(i==="dtype"){if(a+=1,t=zf(r[a]),!XWr(t))throw new TypeError(lt('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',fV.join('", "'),t));e.dtype=t}else if(i==="length"){if(a+=1,t=r[a],!Ks(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(a+=1,t=r[a],!Ks(t))throw new TypeError(lt('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){a+=1;break}else throw new TypeError(lt('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function QWr(r,e){return zWr+r+e+WWr}function KWr(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(lt("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=VWr(r.shape),t!==r.length)throw new TypeError(lt('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!MWr(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function rXr(r){var e;if(!UWr(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=JWr(),e.rawBuffer=GWr(r),e=$Wr(e.rawBuffer,e),e=KWr(e),e.headerLength=QWr(e.ndims,e.strides.length),e.ndarray=new CWr("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}cV.exports=rXr});var dV=s((JRe,pV)=>{"use strict";var eXr=lV();pV.exports=eXr});var mV=s((YRe,gV)=>{"use strict";var tXr=typeof String.prototype.trim<"u";gV.exports=tXr});var Wf=s((ZRe,yV)=>{"use strict";var iXr=String.prototype.trim;yV.exports=iXr});var wV=s(($Re,bV)=>{"use strict";var hV=Wf(),aXr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,qV="\u180E";function nXr(){return hV.call(aXr)===""&&hV.call(qV)===qV}bV.exports=nXr});var NV=s((QRe,EV)=>{"use strict";var sXr=gi(),uXr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function oXr(r){return sXr(r,uXr,"$1")}EV.exports=oXr});var OV=s((KRe,SV)=>{"use strict";var vXr=Wf();function fXr(r){return vXr.call(r)}SV.exports=fXr});var hi=s((rLe,AV)=>{"use strict";var cXr=mV(),lXr=wV(),pXr=NV(),dXr=OV(),Xf;cXr&&lXr()?Xf=dXr:Xf=pXr;AV.exports=Xf});var TV=s((eLe,_V)=>{"use strict";function gXr(r){return r===null}_V.exports=gXr});var Jf=s((tLe,IV)=>{"use strict";var mXr=TV();IV.exports=mXr});var LV=s((iLe,RV)=>{"use strict";function yXr(r){return r===void 0}RV.exports=yXr});var Yf=s((aLe,PV)=>{"use strict";var hXr=LV();PV.exports=hXr});var xV=s((nLe,FV)=>{"use strict";var $f=G(),Qf=qr(),qXr=ye().isPrimitive,bXr=Jf(),wXr=Yf(),ru=C();function Zf(r){return qXr(r)||bXr(r)||wXr(r)}function At(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof At))return new At(e,t,i);if(!Zf(e))throw new TypeError(ru("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!Zf(t))throw new TypeError(ru("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(Zf(i)){if(i===0)throw new RangeError(ru("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(ru("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}$f(At,"name","Slice");Qf(At.prototype,"start",function(){return this._start});Qf(At.prototype,"stop",function(){return this._stop});Qf(At.prototype,"step",function(){return this._step});$f(At.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});$f(At.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});FV.exports=At});var Za=s((sLe,jV)=>{"use strict";var EXr=xV();jV.exports=EXr});var BV=s((uLe,MV)=>{"use strict";var NXr=Za(),SXr=yt();function OXr(r){return r instanceof NXr||SXr(r)==="Slice"}MV.exports=OXr});var CV=s((oLe,kV)=>{"use strict";var AXr=BV();kV.exports=AXr});var GV=s((vLe,UV)=>{"use strict";var Kf=G(),VV=qr(),_Xr=ye().isPrimitive,TXr=Jf(),IXr=Yf(),RXr=CV(),LXr=C();function PXr(r){return _Xr(r)||TXr(r)||IXr(r)||RXr(r)}function Ae(){var r,e,t,i,a;if(r=arguments.length,!(this instanceof Ae)){if(r===1)return new Ae(arguments[0]);if(r===2)return new Ae(arguments[0],arguments[1]);if(r===3)return new Ae(arguments[0],arguments[1],arguments[2]);if(r===4)return new Ae(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Ae(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],a=0;a<r;a++)t.push(arguments[a]);return e=Object.create(Ae.prototype),Ae.apply(e,t)}for(this._data=[],a=0;a<r;a++){if(i=arguments[a],!PXr(i))throw new TypeError(LXr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",a,i));this._data.push(i===void 0?null:i)}return this}Kf(Ae,"name","MultiSlice");VV(Ae.prototype,"ndims",function(){return this._data.length});VV(Ae.prototype,"data",function(){return this._data.slice()});Kf(Ae.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});Kf(Ae.prototype,"toJSON",function(){var e,t,i,a;for(e=this._data,t={type:"MultiSlice",data:[]},a=0;a<e.length;a++)i=e[a],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});UV.exports=Ae});var eu=s((fLe,DV)=>{"use strict";var FXr=GV();DV.exports=FXr});var zV=s((cLe,HV)=>{"use strict";var xXr=/(?:\s*-\s*)(?=\d+)(\d+)$/;HV.exports=xXr});var XV=s((lLe,WV)=>{"use strict";var jXr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;WV.exports=jXr});var ZV=s((pLe,YV)=>{"use strict";var JV=Gr(),MXr=zV(),BXr=XV();function kXr(r,e,t,i){var a;if(r==="end")return e;if(a=r.match(MXr),a){if(r=e-parseInt(a[1],10),r<0){if(i)return-2;r=0}return r}return a=r.match(BXr),a?(r=parseFloat(a[1]),r<1?i?-2:-1:t&&e>0&&r!==1?JV((e-1)/r):JV(e/r)):-1}YV.exports=kXr});var QV=s((dLe,$V)=>{"use strict";var CXr=/\s*:\s*/;$V.exports=CXr});var rU=s((gLe,KV)=>{"use strict";var VXr=/^[-+]?[0-9]+$/;KV.exports=VXr});var tU=s((mLe,eU)=>{"use strict";var UXr=/^end/;eU.exports=UXr});var aU=s((yLe,iU)=>{"use strict";function GXr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}iU.exports=GXr});var sU=s((hLe,nU)=>{"use strict";function DXr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}nU.exports=DXr});var oU=s((qLe,uU)=>{"use strict";function HXr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}uU.exports=HXr});var pU=s((bLe,lU)=>{"use strict";var vU=Za(),zXr=hi(),fU=ZV(),WXr=QV(),r3=rU(),cU=tU(),$a=aU(),oa=sU(),XXr=oU();function JXr(r,e,t){var i,a,n;if(i=zXr(r).split(WXr),a=i.length,a<2||a>3)return $a();if(a===3)if(n=i[2],n.length===0)i[2]=1;else{if(r3.test(n)===!1)return $a();if(n=parseInt(n,10),n===0)return XXr();i[2]=n}else i.push(1);if(n=i[0],n.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(cU.test(n)){if(n=fU(n,e,i[2]<0,t),n<0)return n===-2?oa():$a();i[2]<0&&n>=e&&(n-=1),i[0]=n}else if(r3.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0){if(t)return oa();n=0}}else if(n>=e){if(t)return oa();i[2]<0?n=e-1:n=e}i[0]=n}else return $a();if(n=i[1],n.length===0)i[2]<0?i[1]=null:i[1]=e;else if(cU.test(n)){if(n=fU(n,e,i[2]<0,t),n<0)return n===-2?oa():$a();i[1]=n}else if(r3.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0)if(i[2]>0){if(t)return oa();n=0}else{if(t&&n<-1)return oa();n=null}}else if(n>e){if(t)return oa();n=e}i[1]=n}else return $a();return e===0?new vU(0,0,i[2]):new vU(i[0],i[1],i[2])}lU.exports=JXr});var gU=s((wLe,dU)=>{"use strict";var YXr=pU();dU.exports=YXr});var yU=s((ELe,mU)=>{"use strict";function ZXr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}mU.exports=ZXr});var qU=s((NLe,hU)=>{"use strict";function $Xr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}hU.exports=$Xr});var wU=s((SLe,bU)=>{"use strict";function QXr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}bU.exports=QXr});var NU=s((OLe,EU)=>{"use strict";function KXr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}EU.exports=KXr});var OU=s((ALe,SU)=>{"use strict";var rJr=/\s*,\s*/;SU.exports=rJr});var _U=s((_Le,AU)=>{"use strict";var eJr=/^[-+]?[0-9]+$/;AU.exports=eJr});var RU=s((TLe,IU)=>{"use strict";var tJr=hi(),iJr=Za(),aJr=eu(),nJr=gU(),sJr=yU(),uJr=qU(),oJr=wU(),TU=NU(),vJr=OU(),fJr=_U();function cJr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(o=e.length,i=tJr(r).split(vJr),v=i.length,n=!1,a=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(n)return sJr();for(n=!0,p=0;p<o-v+1;p++)a.push(new iJr(0,e[l],1)),l+=1;continue}if(u=e[l],fJr.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return TU()}else if(f>=u)return TU()}l+=1}else{if(f=nJr(f,u,t),f.code)return f;l+=1}a.push(f)}return a.length!==o?a.length<o?uJr():oJr():aJr.apply(null,a)}IU.exports=cJr});var PU=s((ILe,LU)=>{"use strict";var lJr=RU();LU.exports=lJr});var jU=s((RLe,xU)=>{"use strict";var pJr=Jr().isPrimitive,FU=PU(),dJr=C();function gJr(r,e,t){var i;if(!pJr(r))throw new TypeError(dJr('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=FU(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=FU(r,e,!1)}}return i}xU.exports=gJr});var BU=s((LLe,MU)=>{"use strict";var mJr=jU();MU.exports=mJr});var CU=s((PLe,kU)=>{"use strict";function yJr(r){var e,t,i,a;for(e=r.length,t=[],a=0;a<e;a++)t.push(0);for(i=1,a=e-1;a>=0;a--)t[a]=i,i*=r[a];return t}function hJr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function qJr(r,e){return e==="column-major"?hJr(r):yJr(r)}kU.exports=qJr});var UU=s((FLe,VU)=>{"use strict";function bJr(r,e){var t,i,a;for(t=r.length,i=1,a=t-1;a>=0;a--)e[a]=i,i*=r[a];return e}function wJr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function EJr(r,e,t){return e==="column-major"?wJr(r,t):bJr(r,t)}VU.exports=EJr});var tu=s((xLe,DU)=>{"use strict";var NJr=G(),GU=CU(),SJr=UU();NJr(GU,"assign",SJr);DU.exports=GU});var zU=s((jLe,HU)=>{"use strict";function OJr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}HU.exports=OJr});var XU=s((MLe,WU)=>{"use strict";var AJr=Za(),p0=zU();function _Jr(r,e,t){var i,a,n;if(i=r.start,a=r.stop,n=r.step,n===null&&(n=1),i===null)n>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return p0();i=0}}else if(i>=e){if(t)return p0();n<0?i=e-1:i=e}if(a===null)n>0?a=e:a=null;else if(a<0){if(a=e+a,a<0)if(n>0){if(t)return p0();a=0}else{if(t&&a<-1)return p0();a=null}}else if(a>e){if(t)return p0();a=e}return new AJr(i,a,n)}WU.exports=_Jr});var YU=s((BLe,JU)=>{"use strict";var TJr=XU();JU.exports=TJr});var $U=s((kLe,ZU)=>{"use strict";function IJr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}ZU.exports=IJr});var rG=s((CLe,KU)=>{"use strict";var RJr=eu(),d0=Za(),LJr=YU(),QU=$U();function PJr(r,e,t){return r===null?new d0(0,e,1):typeof r=="number"?r>=e?t?QU():new d0(e,e,1):r<0?(r=e+r,r<0?t?QU():new d0(0,0,1):new d0(r,r+1,1)):new d0(r,r+1,1):LJr(r,e,t)}function FJr(r,e,t){var i,a,n,u;for(i=r.data,a=[],u=0;u<i.length;u++){if(n=PJr(i[u],e[u],t),n.code!==void 0)return n;a.push(n)}return RJr.apply(null,a)}KU.exports=FJr});var tG=s((VLe,eG)=>{"use strict";var xJr=rG();eG.exports=xJr});var aG=s((ULe,iG)=>{"use strict";function jJr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}iG.exports=jJr});var sG=s((GLe,nG)=>{"use strict";var MJr=aG();nG.exports=MJr});var oG=s((DLe,uG)=>{"use strict";var BJr=Xa();function kJr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:BJr((i-t)/e)}uG.exports=kJr});var fG=s((HLe,vG)=>{"use strict";var CJr=oG();vG.exports=CJr});var lG=s((zLe,cG)=>{"use strict";var VJr=fG();function UJr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(VJr(e[i]));return t}cG.exports=UJr});var dG=s((WLe,pG)=>{"use strict";var GJr=lG();pG.exports=GJr});var mG=s((XLe,gG)=>{"use strict";function DJr(r){return r.dtype}gG.exports=DJr});var hG=s((JLe,yG)=>{"use strict";var HJr=mG();yG.exports=HJr});var bG=s((YLe,qG)=>{"use strict";var zJr=En();function WJr(r,e){var t=r.shape;return e?zJr(t):t}qG.exports=WJr});var EG=s((ZLe,wG)=>{"use strict";var XJr=bG();wG.exports=XJr});var SG=s(($Le,NG)=>{"use strict";var JJr=tu(),YJr=En(),ZJr="row-major";function $Jr(r,e){var t,i,a;return a=r.strides,typeof a!="object"||a===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=ZJr),JJr(i,t))):e?YJr(a):a}NG.exports=$Jr});var AG=s((QLe,OG)=>{"use strict";var QJr=SG();OG.exports=QJr});var TG=s((KLe,_G)=>{"use strict";function KJr(r,e){var t,i,a;for(i=r.length,t=0,a=0;a<i;a++)e[a]<0&&(t-=e[a]*(r[a]-1));return t}_G.exports=KJr});var iu=s((rPe,IG)=>{"use strict";var rYr=TG();IG.exports=rYr});var LG=s((ePe,RG)=>{"use strict";var eYr=iu();function tYr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:eYr(t,e))}RG.exports=tYr});var FG=s((tPe,PG)=>{"use strict";var iYr=LG();PG.exports=iYr});var jG=s((iPe,xG)=>{"use strict";var aYr=xf(),e3="row-major",nYr="column-major";function sYr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=aYr(e),t===1||t===3)?e3:t===2?nYr:r.shape.length===0?e3:null)}xG.exports=sYr});var BG=s((aPe,MG)=>{"use strict";var uYr=jG();MG.exports=uYr});var CG=s((nPe,kG)=>{"use strict";function oYr(r){return r.data}kG.exports=oYr});var UG=s((sPe,VG)=>{"use strict";var vYr=CG();VG.exports=vYr});var DG=s((uPe,GG)=>{"use strict";function fYr(r,e,t){var i,a,n;for(i=r.data,a=t,n=0;n<i.length;n++)a+=e[n]*i[n].start;return a}GG.exports=fYr});var zG=s((oPe,HG)=>{"use strict";function cYr(r,e,t){var i,a,n,u;for(i=r.data,a=[],n=0;n<t.length;n++)u=t[n],a.push(e[u]*i[u].step);return a}HG.exports=cYr});var XG=s((vPe,WG)=>{"use strict";var lYr=vi(),pYr=ge(),dYr=et(),gYr=ha(),mYr=ni(),yYr=ba(),hYr=zi(),qYr=me(),bYr=tt(),wYr=qa(),EYr=Ia(),NYr=Fa(),SYr={binary:lYr,float64:pYr,float32:dYr,generic:Array,int16:gYr,int32:mYr,int8:yYr,uint16:hYr,uint32:qYr,uint8:bYr,uint8c:wYr,complex64:EYr,complex128:NYr};WG.exports=SYr});var YG=s((fPe,JG)=>{"use strict";var OYr=XG();function AYr(r){return OYr[r]||null}JG.exports=AYr});var $G=s((cPe,ZG)=>{"use strict";var _Yr=YG();ZG.exports=_Yr});var KG=s((lPe,QG)=>{"use strict";var TYr=yr(),IYr=vi(),RYr=TYr(IYr.allocUnsafe);QG.exports=RYr});var eD=s((pPe,rD)=>{"use strict";var LYr=be(),PYr=C(),FYr=vi();function xYr(r){if(!LYr(r))throw new TypeError(PYr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return FYr.allocUnsafe(r)}rD.exports=xYr});var iD=s((dPe,tD)=>{"use strict";var jYr=be(),MYr=C(),BYr=vi();function kYr(r){if(!jYr(r))throw new TypeError(MYr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new BYr(r)}tD.exports=kYr});var nD=s((gPe,aD)=>{"use strict";var CYr=KG(),VYr=eD(),UYr=iD(),t3;CYr?t3=VYr:t3=UYr;aD.exports=t3});var uD=s((mPe,sD)=>{"use strict";function GYr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}sD.exports=GYr});var vD=s((yPe,oD)=>{"use strict";var DYr=$G(),HYr=nD(),zYr=uD();function WYr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function XYr(r){return zYr(HYr(r))}function JYr(r,e){var t=DYr(r);return t?new t(e):null}function YYr(r,e){return r==="generic"?WYr(e):r==="binary"?XYr(e):JYr(r,e)}oD.exports=YYr});var i3=s((hPe,fD)=>{"use strict";var ZYr=vD();fD.exports=ZYr});var lD=s((qPe,cD)=>{"use strict";var $Yr=i3(),QYr=ai();function KYr(r,e,t,i,a){var n,u;return u=t.length,u===0?n=[0]:n=QYr(u),new r(e,$Yr(e,0),t,n,0,i,{readonly:a})}cD.exports=KYr});var hD=s((bPe,yD)=>{"use strict";var pD=tG(),rZr=sG(),dD=dG(),a3=Qv(),eZr=ai(),gD=ct(),tZr=hG(),iZr=EG(),aZr=AG(),nZr=FG(),sZr=BG(),n3=UG(),mD=C(),uZr=DG(),oZr=zG(),vZr=lD();function fZr(r,e,t,i){var a,n,u,o,v,f,c,l,p,m;if(u=tZr(r),o=iZr(r,!0),a=aZr(r,!0),n=nZr(r),v=sZr(r),c=o.length,e.ndims!==c)throw new RangeError(mD("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,n3(r),o,a,n,v,{readonly:!i});if(f=rZr(e),m=pD(e,o,!0),m.code){if(t)throw new RangeError(mD("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));m=pD(e,o,!1),p=dD(m),gD(a3(p,f))>0&&(p=eZr(p.length))}else p=dD(m);return gD(p)===0?vZr(l,u,a3(p,f),v,!i):(n=uZr(m,a,n),p=a3(p,f),p.length===0?new l(u,n3(r),[],[0],n,v,{readonly:!i}):(a=oZr(m,a,f),new l(u,n3(r),p,a,n,v,{readonly:!i})))}yD.exports=fZr});var s3=s((wPe,qD)=>{"use strict";var cZr=hD();qD.exports=cZr});var wD=s((EPe,bD)=>{"use strict";var lZr=l0();function pZr(r){return r instanceof lZr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}bD.exports=pZr});var ND=s((NPe,ED)=>{"use strict";var dZr=wD();ED.exports=dZr});var OD=s((SPe,SD)=>{"use strict";function gZr(r){var e=r.flags;return e&&e.READONLY===!0}SD.exports=gZr});var _D=s((OPe,AD)=>{"use strict";var mZr=OD();AD.exports=mZr});var ID=s((APe,TD)=>{"use strict";var yZr=be().isPrimitive,hZr=Be(),u3=C();function qZr(r){var e,t,i,a;if(typeof r!="object"||r===null)throw new TypeError(u3("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!hZr(t))throw new TypeError(u3("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],a=0;a<t.length;a++){if(i=t[a],!yZr(i))throw new TypeError(u3("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}TD.exports=qZr});var LD=s((_Pe,RD)=>{"use strict";var bZr=ID();RD.exports=bZr});var o3=s((TPe,PD)=>{"use strict";var wZr="row-major";function EZr(r,e,t,i,a){var n,u;for(n=r-1;n>i;n--)a[n]=t[n];for(n=i;n>=0&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n--);for(n-=1;n>=0;n--)a[n]=t[n];return a}function NZr(r,e,t,i,a){var n,u;for(n=0;n<i;n++)a[n]=t[n];for(n=i;n<r&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n++);for(n+=1;n<r;n++)a[n]=t[n];return a}function SZr(r,e,t,i,a){var n=r.length;if(n===0)return null;if(i<0){if(i+=n,i<0)return null}else if(i>=n)return null;return e===wZr?EZr(n,r,t,i,a):NZr(n,r,t,i,a)}PD.exports=SZr});var xD=s((IPe,FD)=>{"use strict";var OZr=ai(),AZr=o3();function _Zr(r,e,t,i){return AZr(r,e,t,i,OZr(r.length))}FD.exports=_Zr});var BD=s((RPe,MD)=>{"use strict";var TZr=G(),jD=xD(),IZr=o3();TZr(jD,"assign",IZr);MD.exports=jD});var CD=s((LPe,kD)=>{"use strict";var ze=eu();function RZr(r){switch(r.length){case 0:return new ze;case 1:return new ze(r[0]);case 2:return new ze(r[0],r[1]);case 3:return new ze(r[0],r[1],r[2]);case 4:return new ze(r[0],r[1],r[2],r[3]);case 5:return new ze(r[0],r[1],r[2],r[3],r[4]);case 6:return new ze(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6]);case 8:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]);case 9:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]);case 10:return new ze(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);default:return ze.apply(null,r)}}kD.exports=RZr});var UD=s((PPe,VD)=>{"use strict";var LZr=CD();VD.exports=LZr});var zD=s((FPe,HD)=>{"use strict";var v3=G(),PZr=mr(),FZr=de().isPrimitive,xZr=ND(),jZr=_D(),MZr=vr(),GD=Tn(),BZr=ai(),kZr=LD(),CZr=ct(),VZr=s3(),UZr=BD().assign,GZr=UD(),au=C();function DD(r){var e,t,i,a,n,u,o,v,f,c,l;if(!xZr(r))throw new TypeError(au("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(a={writable:!1},arguments.length>1){if(e=arguments[1],!PZr(e))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(MZr(e,"readonly")){if(!FZr(e.readonly))throw new TypeError(au("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(a.writable=!e.readonly,a.writable&&jZr(r))throw new Error(au("invalid option. Cannot write to read-only array."))}}if(t=kZr(r),i=t.length,i<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return c=CZr(t),c===0&&(u=!0),c/=t[i-1]*t[i-2],v=i-3,f=t[v],l=-1,o=BZr(i),o[i-1]=null,o[i-2]=null,n={},v3(n,"next",p),v3(n,"return",m),GD&&v3(n,GD,y),n;function p(){var g,d,h;return l+=1,u||l>=c?{done:!0}:(g=o.slice(),d=GZr(o),h=(o[v]+1)%f,o[v]=h,h===0&&(o=UZr(t,"row-major",o,v-1,o)),{value:[g,VZr(r,d,!0,a.writable)],done:!1})}function m(g){return u=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return DD(r,a)}}HD.exports=DD});var XD=s((xPe,WD)=>{"use strict";var DZr=zD();WD.exports=DZr});var ZD=s((jPe,YD)=>{"use strict";var HZr=XD(),JD=Qs(),zZr=Nn();function WZr(r){return[["[ ] ="],[""],[r.ndarray.get()]]}function XZr(r){var e=[["[ : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(JD(r.ndarray,[r.length,1],[1,1],0,"row-major"))}function g0(r){return zZr("",r)}function JZr(r){var e,t,i,a,n;for(e=r.length,t=e-1,n=e-2,i="",a=0;a<e;a++)a<n?i+=r[a].toString():i+=":",a<t&&(i+=", ");return i}function YZr(r){return JD(r.data,r.shape,r.strides,r.offset,r.order)}function ZZr(r,e){var t;for(t=0;t<r.length;t++)e.push(r[t]);return e}function $Zr(r,e){var t=g0(e);return t[0]="ndarray: ("+r.join(", ")+")",t}function QZr(r,e){var t=g0(e);return t[0]="[ "+JZr(r)+" ] =",t}function KZr(r){var e,t,i,a,n,u;if(t=r.ndims,t===0)return WZr(r);if(t===1)return XZr(r);for(e=r.shape,i=e[t-1],n=HZr(r.ndarray),a=[$Zr(e,i),g0(i)];u=n.next(),!u.done;)a.push(QZr(u.value[0],i)),a.push(g0(i)),ZZr(YZr(u.value[1]),a),a.push(g0(i));return a}YD.exports=KZr});var QD=s((MPe,$D)=>{"use strict";var r$r=ZD();$D.exports=r$r});var rH=s((BPe,KD)=>{"use strict";var e$r=tu(),t$r=iu(),i$r=i3(),a$r=C(),n$r=l0(),s$r=ct();function u$r(r,e,t){var i,a,n,u;if(i=e.length,i>0?(n=s$r(e),u=e$r(e,t)):(n=1,u=[0]),a=i$r(r,n),a===null)throw new TypeError(a$r("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new n$r(r,a,e,u,t$r(e,u),t)}KD.exports=u$r});var tH=s((kPe,eH)=>{"use strict";var o$r=rH();eH.exports=o$r});var aH=s((CPe,iH)=>{"use strict";var $e=$r(),v$r=l0(),f$r=XC(),c$r=ct(),l$r=dV(),p$r=BU(),d$r=tu(),g$r=s3(),m$r=QD(),y$r=iu(),h$r=Qs(),q$r=tH();function b$r(r){return $e(r,"ndarray",v$r),$e(r,"ndarray2range",f$r),$e(r,"numel",c$r),$e(r,"range2ndarray",l$r),$e(r,"seq2multislice",p$r),$e(r,"shape2strides",d$r),$e(r,"slice",g$r),$e(r,"stackedRepr",m$r),$e(r,"strides2offset",y$r),$e(r,"toArray",h$r),$e(r,"zeros",q$r),r}iH.exports=b$r});var sH=s((VPe,nH)=>{"use strict";var w$r=ii();function E$r(r,e,t,i){w$r(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}nH.exports=E$r});var Nr=s((UPe,uH)=>{"use strict";var N$r=sH();uH.exports=N$r});var vH=s((GPe,oH)=>{"use strict";function S$r(r){return e;function e(){return r}}oH.exports=S$r});var dr=s((DPe,fH)=>{"use strict";var O$r=vH();fH.exports=O$r});var lH=s((HPe,cH)=>{"use strict";var A$r=hr();function _$r(r){return r===0&&1/r===A$r}cH.exports=_$r});var qi=s((zPe,pH)=>{"use strict";var T$r=lH();pH.exports=T$r});var mH=s((WPe,gH)=>{"use strict";var I$r=qi(),dH=W(),f3=hr();function R$r(r,e){return dH(r)||dH(e)?NaN:r===f3||e===f3?f3:r===e&&r===0?I$r(r)?r:e:r>e?r:e}gH.exports=R$r});var c3=s((XPe,yH)=>{"use strict";var L$r=mH();yH.exports=L$r});var bH=s((JPe,qH)=>{"use strict";var hH=65535;function P$r(r,e){var t,i,a,n,u,o;return r>>>=0,e>>>=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&hH)>>>0,o=(e&hH)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i>>>0}qH.exports=P$r});var EH=s((YPe,wH)=>{"use strict";var F$r=bH();wH.exports=F$r});var l3=s((ZPe,NH)=>{"use strict";function x$r(r,e,t,i,a,n,u){var o,v,f,c,l,p,m;for(o=e.data,v=a.data,c=e.accessors[0],f=a.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=n;return e}NH.exports=x$r});var AH=s(($Pe,OH)=>{"use strict";var SH=Ln(),j$r=l3(),p3=8;function M$r(r,e,t,i,a){var n,u,o,v,f,c;if(r<=0)return i;if(o=SH(e),v=SH(i),o.accessorProtocol||v.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,j$r(r,o,t,n,v,a,u),v.data;if(t===1&&a===1){if(f=r%p3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<p3)return i;for(c=f;c<r;c+=p3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,c=0;c<r;c++)i[u]=e[n],n+=t,u+=a;return i}OH.exports=M$r});var IH=s((QPe,TH)=>{"use strict";var _H=Ln(),B$r=l3(),m0=8;function k$r(r,e,t,i,a,n,u){var o,v,f,c,l,p;if(r<=0)return a;if(f=_H(e),c=_H(a),f.accessorProtocol||c.accessorProtocol)return B$r(r,f,t,i,c,n,u),c.data;if(o=i,v=u,t===1&&n===1){if(l=r%m0,l>0)for(p=0;p<l;p++)a[v]=e[o],o+=t,v+=n;if(r<m0)return a;for(p=l;p<r;p+=m0)a[v]=e[o],a[v+1]=e[o+1],a[v+2]=e[o+2],a[v+3]=e[o+3],a[v+4]=e[o+4],a[v+5]=e[o+5],a[v+6]=e[o+6],a[v+7]=e[o+7],o+=m0,v+=m0;return a}for(p=0;p<r;p++)a[v]=e[o],o+=t,v+=n;return a}TH.exports=k$r});var bi=s((KPe,LH)=>{"use strict";var C$r=G(),RH=AH(),V$r=IH();C$r(RH,"ndarray",V$r);LH.exports=RH});var FH=s((rFe,PH)=>{"use strict";function U$r(){}PH.exports=U$r});var jH=s((eFe,xH)=>{"use strict";var G$r=FH();function D$r(){return G$r.name==="foo"}xH.exports=D$r});var BH=s((tFe,MH)=>{"use strict";var H$r=jH();MH.exports=H$r});var CH=s((iFe,kH)=>{"use strict";var z$r=yr(),W$r=BH(),X$r=C(),J$r=k1().REGEXP,Y$r=W$r();function Z$r(r){if(z$r(r)===!1)throw new TypeError(X$r("invalid argument. Must provide a function. Value: `%s`.",r));return Y$r?r.name:J$r.exec(r.toString())[1]}kH.exports=Z$r});var UH=s((aFe,VH)=>{"use strict";var $$r=CH();VH.exports=$$r});var DH=s((nFe,GH)=>{"use strict";var Q$r=ba(),K$r=tt(),rQr=qa(),eQr=ha(),tQr=zi(),iQr=ni(),aQr=me(),nQr=et(),sQr=ge(),uQr=[sQr,nQr,iQr,aQr,eQr,tQr,Q$r,K$r,rQr];GH.exports=uQr});var HH=s((sFe,oQr)=>{oQr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var ZH=s((uFe,YH)=>{"use strict";var vQr=yt(),fQr=UH(),XH=Qi(),cQr=G1(),lQr=ge(),zH=DH(),WH=HH(),nu=cQr()?XH(lQr):JH;nu=fQr(nu)==="TypedArray"?nu:JH;function JH(){}function pQr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof nu)return!0;for(t=0;t<zH.length;t++)if(r instanceof zH[t])return!0;for(;r;){for(e=vQr(r),t=0;t<WH.length;t++)if(WH[t]===e)return!0;r=XH(r)}return!1}YH.exports=pQr});var QH=s((oFe,$H)=>{"use strict";var dQr=ZH();$H.exports=dQr});var rz=s((vFe,KH)=>{"use strict";var gQr=Ia(),mQr=Fa(),yQr=[mQr,gQr];KH.exports=yQr});var ez=s((fFe,hQr)=>{hQr.exports=["Complex64Array","Complex128Array"]});var nz=s((cFe,az)=>{"use strict";var qQr=yt(),bQr=Qi(),tz=rz(),iz=ez();function wQr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<tz.length;t++)if(r instanceof tz[t])return!0;for(;r;){for(e=qQr(r),t=0;t<iz.length;t++)if(iz[t]===e)return!0;r=bQr(r)}return!1}az.exports=wQr});var uz=s((lFe,sz)=>{"use strict";var EQr=nz();sz.exports=EQr});var vz=s((pFe,oz)=>{"use strict";var NQr=C();function SQr(r,e){if(typeof e!="function")throw new TypeError(NQr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}oz.exports=SQr});var cz=s((dFe,fz)=>{"use strict";var OQr=vz();fz.exports=OQr});var pz=s((gFe,lz)=>{"use strict";var AQr=ba(),_Qr=tt(),TQr=qa(),IQr=ha(),RQr=zi(),LQr=ni(),PQr=me(),FQr=et(),xQr=ge(),jQr=Ia(),MQr=Fa(),BQr=[[xQr,"Float64Array"],[FQr,"Float32Array"],[LQr,"Int32Array"],[PQr,"Uint32Array"],[IQr,"Int16Array"],[RQr,"Uint16Array"],[AQr,"Int8Array"],[_Qr,"Uint8Array"],[TQr,"Uint8ClampedArray"],[jQr,"Complex64Array"],[MQr,"Complex128Array"]];lz.exports=BQr});var gz=s((mFe,dz)=>{"use strict";var kQr=cz(),CQr=yt(),VQr=Qi(),Qa=pz();function UQr(r){var e,t;for(t=0;t<Qa.length;t++)if(kQr(r,Qa[t][0]))return Qa[t][1];for(;r;){for(e=CQr(r),t=0;t<Qa.length;t++)if(e===Qa[t][1])return Qa[t][1];r=VQr(r)}}dz.exports=UQr});var yz=s((yFe,mz)=>{"use strict";var GQr=QH(),DQr=uz(),HQr=Na(),zQr=Sa(),WQr=C(),XQr=gz();function JQr(r){var e,t,i;if(GQr(r))e=r;else if(DQr(r))r.BYTES_PER_ELEMENT===8?e=HQr(r,0):e=zQr(r,0);else throw new TypeError(WQr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:XQr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}mz.exports=JQr});var Sr=s((hFe,hz)=>{"use strict";var YQr=yz();hz.exports=YQr});var d3=s((qFe,qz)=>{"use strict";var ZQr=ma(),$Qr=Gr(),QQr=ZQr-1;function KQr(){var r=$Qr(1+QQr*Math.random());return r>>>0}qz.exports=KQr});var E3=s((bFe,Rz)=>{"use strict";var _t=G(),wi=qr(),bz=Nr(),g3=vr(),rKr=mr(),eKr=Be(),wz=ht(),tKr=de().isPrimitive,Ez=nt().isPrimitive,_z=za(),Tz=ma(),_e=me(),iKr=c3(),w3=EH(),Ka=bi(),aKr=Sr(),Ie=C(),Nz=d3(),ue=624,m3=397,Sz=Tz>>>0,nKr=19650218>>>0,y3=2147483648>>>0,h3=2147483647>>>0,sKr=1812433253>>>0,uKr=1664525>>>0,oKr=1566083941>>>0,vKr=2636928640>>>0,fKr=4022730752>>>0,cKr=2567483615>>>0,q3=[0>>>0,cKr>>>0],Iz=1/(_z+1),lKr=67108864>>>0,pKr=2147483648>>>0,b3=1>>>0,dKr=_z*Iz,su=1,uu=3,Ei=2,Ni=ue+3,Te=ue+5,y0=ue+6;function Oz(r,e){var t;return e?t="option":t="argument",r.length<y0+1?new RangeError(Ie("invalid %s. `state` array has insufficient length.",t)):r[0]!==su?new RangeError(Ie("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,su,r[0])):r[1]!==uu?new RangeError(Ie("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,uu,r[1])):r[Ei]!==ue?new RangeError(Ie("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ue,r[Ei])):r[Ni]!==1?new RangeError(Ie("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[Ni])):r[Te]!==r.length-y0?new RangeError(Ie("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-y0,r[Te])):null}function Az(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=w3(t,sKr)+i>>>0;return r}function gKr(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=iKr(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=w3(a,uKr)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=w3(a,oKr)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=pKr,r}function mKr(r){var e,t,i,a;for(a=ue-m3,t=0;t<a;t++)e=r[t]&y3|r[t+1]&h3,r[t]=r[t+m3]^e>>>1^q3[e&b3];for(i=ue-1;t<i;t++)e=r[t]&y3|r[t+1]&h3,r[t]=r[t-a]^e>>>1^q3[e&b3];return e=r[i]&y3|r[0]&h3,r[i]=r[m3-1]^e>>>1^q3[e&b3],r}function yKr(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!rKr(r))throw new TypeError(Ie("invalid argument. Options argument must be an object. Value: `%s`.",r));if(g3(r,"copy")&&(i.copy=r.copy,!tKr(r.copy)))throw new TypeError(Ie("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(g3(r,"state")){if(t=r.state,i.state=!0,!wz(t))throw new TypeError(Ie("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=Oz(t,!0),u)throw u;i.copy===!1?e=t:(e=new _e(t.length),Ka(t.length,t,1,e,1)),t=new _e(e.buffer,e.byteOffset+(Ei+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,t[Te])}if(a===void 0)if(g3(r,"seed"))if(a=r.seed,i.seed=!0,Ez(a)){if(a>Sz)throw new RangeError(Ie("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(eKr(a)===!1||a.length<1)throw new TypeError(Ie("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!Ez(a))throw new TypeError(Ie("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>Sz)throw new RangeError(Ie("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new _e(y0+n),e[0]=su,e[1]=uu,e[Ei]=ue,e[Ni]=1,e[Ni+1]=ue,e[Te]=n,Ka.ndarray(n,a,1,0,e,1,Te+1),t=new _e(e.buffer,e.byteOffset+(Ei+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,n),t=Az(t,ue,nKr),t=gKr(t,ue,a,n)}else a=Nz()>>>0}else a=Nz()>>>0;return t===void 0&&(e=new _e(y0+1),e[0]=su,e[1]=uu,e[Ei]=ue,e[Ni]=1,e[Ni+1]=ue,e[Te]=1,e[Te+1]=a,t=new _e(e.buffer,e.byteOffset+(Ei+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,1),t=Az(t,ue,a)),_t(y,"NAME","mt19937"),wi(y,"seed",o),wi(y,"seedLength",v),bz(y,"state",l,p),wi(y,"stateLength",f),wi(y,"byteLength",c),_t(y,"toJSON",m),_t(y,"MIN",0),_t(y,"MAX",Tz),_t(y,"normalized",g),_t(g,"NAME",y.NAME),wi(g,"seed",o),wi(g,"seedLength",v),bz(g,"state",l,p),wi(g,"stateLength",f),wi(g,"byteLength",c),_t(g,"toJSON",m),_t(g,"MIN",0),_t(g,"MAX",dKr),y;function o(){var d=e[Te];return Ka(d,a,1,new _e(d),1)}function v(){return e[Te]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return Ka(d,e,1,new _e(d),1)}function p(d){var h;if(!wz(d))throw new TypeError(Ie("invalid argument. Must provide a Uint32Array. Value: `%s`.",d));if(h=Oz(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?Ka(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new _e(d.length)),Ka(d.length,d,1,e,1)),t=new _e(e.buffer,e.byteOffset+(Ei+1)*e.BYTES_PER_ELEMENT,ue),a=new _e(e.buffer,e.byteOffset+(Te+1)*e.BYTES_PER_ELEMENT,e[Te])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=aKr(e),d.params=[],d}function y(){var d,h;return h=e[Ni+1],h>=ue&&(t=mKr(t),h=0),d=t[h],e[Ni+1]=h+1,d^=d>>>11,d^=d<<7&vKr,d^=d<<15&fKr,d^=d>>>18,d>>>0}function g(){var d=y()>>>5,h=y()>>>6;return(d*lKr+h)*Iz}}Rz.exports=yKr});var Pz=s((wFe,Lz)=>{"use strict";var hKr=E3(),qKr=d3(),bKr=hKr({seed:qKr()});Lz.exports=bKr});var Hr=s((EFe,xz)=>{"use strict";var wKr=G(),Fz=Pz(),EKr=E3();wKr(Fz,"factory",EKr);xz.exports=Fz});var kz=s((NFe,Bz)=>{"use strict";var jz=Er().isPrimitive,N3=C(),Mz=oe();function NKr(r,e){return!jz(r)||Mz(r)?new TypeError(N3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!jz(e)||Mz(e)?new TypeError(N3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(N3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Bz.exports=NKr});var Vz=s((SFe,Cz)=>{"use strict";var SKr=Vr(),OKr=na(),AKr=xs();function _Kr(r,e,t){return e+SKr(OKr(AKr*r()),2)*(t-e)}Cz.exports=_Kr});var S3=s((OFe,Jz)=>{"use strict";var Tt=G(),ou=qr(),Uz=Nr(),Gz=mr(),Dz=yr(),Hz=vr(),zz=dr(),TKr=Tr(),vu=Hr().factory,Wz=W(),IKr=Sr(),fu=C(),RKr=kz(),Xz=Vz();function LKr(){var r,e,t,i,a,n;if(arguments.length===0)e=vu();else if(arguments.length===1){if(r=arguments[0],!Gz(r))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hz(r,"prng")){if(!Dz(r.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vu(r)}else{if(a=arguments[0],n=arguments[1],i=RKr(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Gz(r))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hz(r,"prng")){if(!Dz(r.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vu(r)}else e=vu()}return a===void 0?t=y:t=m,Tt(t,"NAME","arcsine"),r&&r.prng?(Tt(t,"seed",null),Tt(t,"seedLength",null),Uz(t,"state",zz(null),TKr),Tt(t,"stateLength",null),Tt(t,"byteLength",null),Tt(t,"toJSON",zz(null)),Tt(t,"PRNG",e)):(ou(t,"seed",u),ou(t,"seedLength",o),Uz(t,"state",c,l),ou(t,"stateLength",v),ou(t,"byteLength",f),Tt(t,"toJSON",p),Tt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=IKr(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Xz(e,a,n)}function y(g,d){return Wz(g)||Wz(d)||g>=d?NaN:Xz(e,g,d)}}Jz.exports=LKr});var Zz=s((AFe,Yz)=>{"use strict";var PKr=S3(),FKr=PKr();Yz.exports=FKr});var Kz=s((_Fe,Qz)=>{"use strict";var xKr=G(),$z=Zz(),jKr=S3();xKr($z,"factory",jKr);Qz.exports=$z});var O3=s((TFe,nW)=>{"use strict";var It=G(),cu=qr(),rW=Nr(),eW=mr(),MKr=Fn().isPrimitive,tW=yr(),iW=vr(),aW=dr(),BKr=Tr(),lu=Hr().factory,kKr=W(),CKr=Sr(),pu=C();function VKr(){var r,e,t,i;if(arguments.length===0)e=lu();else if(arguments.length===1&&eW(arguments[0]))if(r=arguments[0],iW(r,"prng")){if(!tW(r.prng))throw new TypeError(pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=lu(r);else{if(i=arguments[0],!MKr(i))throw new TypeError(pu("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!eW(r))throw new TypeError(pu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iW(r,"prng")){if(!tW(r.prng))throw new TypeError(pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=lu(r)}else e=lu()}return i===void 0?t=p:t=l,It(t,"NAME","bernoulli"),r&&r.prng?(It(t,"seed",null),It(t,"seedLength",null),rW(t,"state",aW(null),BKr),It(t,"stateLength",null),It(t,"byteLength",null),It(t,"toJSON",aW(null)),It(t,"PRNG",e)):(cu(t,"seed",a),cu(t,"seedLength",n),rW(t,"state",v,f),cu(t,"stateLength",u),cu(t,"byteLength",o),It(t,"toJSON",c),It(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=CKr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return kKr(m)||m<0||m>1?NaN:e()<=m?1:0}}nW.exports=VKr});var uW=s((IFe,sW)=>{"use strict";var UKr=O3(),GKr=UKr();sW.exports=GKr});var fW=s((RFe,vW)=>{"use strict";var DKr=G(),oW=uW(),HKr=O3();DKr(oW,"factory",HKr);vW.exports=oW});var dW=s((LFe,pW)=>{"use strict";var zKr=Lr(),cW=ae(),WKr=br(),lW=.00991256303526217;function XKr(r,e){var t,i,a;for(i=cW(-.5*e*e),t=[],t.push(lW/i),t.push(e),a=2;a<r;a++)t[a]=zKr(-2*WKr(lW/t[a-1]+i)),i=cW(-.5*t[a]*t[a]);return t.push(0),t}pW.exports=XKr});var mW=s((PFe,gW)=>{"use strict";function JKr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}gW.exports=JKr});var qW=s((FFe,hW)=>{"use strict";var yW=br();function YKr(r,e,t){var i,a;do i=yW(r())/e,a=yW(r());while(-2*a<i*i);return t?i-e:e-i}hW.exports=YKr});var NW=s((xFe,EW)=>{"use strict";var ZKr=Wr(),bW=ae(),$Kr=dW(),QKr=mW(),KKr=qW(),rre=128,wW=3.442619855899,va=$Kr(rre,wW),ere=QKr(va),tre=127;function ire(r,e){return t;function t(){for(var i,a,n,u,o,v,f;;){if(o=2*r()-1,v=e()&tre,ZKr(o)<ere[v])return o*va[v];if(v===0)return KKr(r,wW,o<0);if(u=o*va[v],n=u*u,f=v+1,i=bW(-.5*(va[v]*va[v]-n)),a=bW(-.5*(va[f]*va[f]-n)),a+r()*(i-a)<1)return u}}}EW.exports=ire});var _3=s((jFe,AW)=>{"use strict";var Si=G(),du=qr(),SW=Nr(),are=yr(),nre=mr(),sre=de().isPrimitive,gu=vr(),ure=ht(),A3=Hr().factory,OW=dr(),ore=Tr(),vre=Gr(),fre=ma(),cre=Sr(),h0=C(),lre=NW();function pre(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!nre(r))throw new TypeError(h0("invalid argument. Must provide an object. Value: `%s`.",r));if(gu(r,"copy")&&(a.copy=r.copy,!sre(r.copy)))throw new TypeError(h0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(gu(r,"prng")){if(!are(r.prng))throw new TypeError(h0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(gu(r,"state")){if(a.state=r.state,!ure(r.state))throw new TypeError(h0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(gu(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(h0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(t=A3(a),e=t.normalized):(t=A3({seed:vre(1+fre*e()),copy:a.copy}),a.seed=null):(t=A3(a),e=t.normalized),i=lre(e,t),Si(i,"NAME","improved-ziggurat"),a.seed===null?(Si(i,"seed",null),Si(i,"seedLength",null)):(du(i,"seed",n),du(i,"seedLength",u)),r&&r.prng?(SW(i,"state",OW(null),ore),Si(i,"stateLength",null),Si(i,"byteLength",null),Si(i,"toJSON",OW(null))):(SW(i,"state",f,c),du(i,"stateLength",o),du(i,"byteLength",v),Si(i,"toJSON",l)),Si(i,"PRNG",e),i;function n(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=cre(t.state),p.params=[],p}}AW.exports=pre});var TW=s((MFe,_W)=>{"use strict";var dre=_3(),gre=dre();_W.exports=gre});var Oi=s((BFe,RW)=>{"use strict";var mre=G(),IW=TW(),yre=_3();mre(IW,"factory",yre);RW.exports=IW});var PW=s((kFe,LW)=>{"use strict";var hre=yr(),qre=hre(Object.assign);LW.exports=qre});var xW=s((CFe,FW)=>{"use strict";var bre=Object.assign;FW.exports=bre});var MW=s((VFe,jW)=>{"use strict";var wre=typeof Object.getOwnPropertySymbols<"u";jW.exports=wre});var CW=s((UFe,kW)=>{"use strict";var BW=ja(),Ere=BW.getOwnPropertySymbols;function Nre(r){return Ere(BW(r))}kW.exports=Nre});var UW=s((GFe,VW)=>{"use strict";function Sre(){return[]}VW.exports=Sre});var DW=s((DFe,GW)=>{"use strict";var Ore=MW(),Are=CW(),_re=UW(),T3;Ore?T3=Are:T3=_re;GW.exports=T3});var zW=s((HFe,HW)=>{"use strict";var Tre=ka(),Ire=DW(),Rre=jn();function Lre(r){var e,t,i;for(e=Tre(r),t=Ire(r),i=0;i<t.length;i++)Rre(r,t[i])&&e.push(t[i]);return e}HW.exports=Lre});var XW=s((zFe,WW)=>{"use strict";var Pre=zW();WW.exports=Pre});var ZW=s((WFe,YW)=>{"use strict";var Fre=XW(),JW=ja(),xre=C();function jre(r){var e,t,i,a,n,u,o;if(r==null)throw new TypeError(xre("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(n=JW(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=Fre(JW(e)),a=t.length,o=0;o<a;o++)i=t[o],n[i]=e[i];return n}YW.exports=jre});var q0=s((XFe,$W)=>{"use strict";var Mre=PW(),Bre=xW(),kre=ZW(),I3;Mre?I3=Bre:I3=kre;$W.exports=I3});var eX=s((JFe,rX)=>{"use strict";var QW=Ur().isPrimitive,KW=C();function Cre(r,e){return QW(r)?QW(e)?null:new TypeError(KW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(KW("invalid argument. First argument must be a positive number. Value: `%s`.",r))}rX.exports=Cre});var sX=s((YFe,nX)=>{"use strict";var tX=br(),iX=Lr(),Vre=Vr(),aX=1/3;function Ure(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(t<1?(v=t+1-aX,o=1/iX(9*v),c=Vre(r(),1/t)):(v=t-aX,o=1/iX(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,a=f*f,n=1-.331*a*a,u=.5*a+v*(1-p+tX(p)),l=r(),(l<n||tX(l)<u)&&(i=!1)}return v*p*c}nX.exports=Ure});var vX=s((ZFe,oX)=>{"use strict";var R3=Vr(),uX=br();function Gre(r,e,t){var i,a,n,u,o,v,f,c;for(n=t-1,o=R3(n+n,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),a=R3(u,4),c=8*t-12,c=1-a/c,v<=c?i=!1:(c+=.5*R3(a/(8*t-8),2),v<c&&(c=n*uX(4*f*(1-f)),c+=u*u/2,c>=uX(v)&&(i=!1))));return f}oX.exports=Gre});var cX=s(($Fe,fX)=>{"use strict";var Dre=Vr(),mu=br();function Hre(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y;for(o=t-1,v=i-1,f=o+v,c=f*mu(f),u=o/f,a=.5/Dre(f,.5),n=!0;n===!0;)l=e(),m=u+l*a,m>=0&&m<=1&&(p=r(),y=o*mu(m/o),y+=v*mu((1-m)/v),y+=c+.5*l*l,y>=mu(p)&&(n=!1));return m}fX.exports=Hre});var dX=s((QFe,pX)=>{"use strict";var L3=ae(),lX=Vr(),P3=br();function zre(r,e,t){for(var i,a,n,u,o,v,f;;)if(u=r(),o=r(),v=lX(u,1/e),f=lX(o,1/t),n=v+f,n<=1)return n>0?v/n:(i=P3(u)/e,a=P3(o)/t,i>a?(a-=i,i=0):(i-=a,a=0),L3(i-P3(L3(i)+L3(a))))}pX.exports=zre});var yX=s((KFe,mX)=>{"use strict";var gX=sX(),Wre=vX(),Xre=cX(),Jre=dX();function Yre(r,e,t,i){var a,n;return t===i&&t>1.5?Wre(r,e,t):t>1&&i>1?Xre(r,e,t,i):t<1&&i<1?Jre(r,t,i):(a=gX(r,e,t),n=gX(r,e,i),a/(a+n))}mX.exports=Yre});var M3=s((rxe,_X)=>{"use strict";var Rt=G(),yu=qr(),hX=Nr(),qX=mr(),bX=de().isPrimitive,wX=yr(),rn=vr(),EX=dr(),Zre=Tr(),NX=Oi().factory,hu=Hr().factory,SX=W(),F3=bi(),x3=me(),j3=ht(),OX=q0(),$re=Sr(),Lt=C(),Qre=eX(),AX=yX();function Kre(){var r,e,t,i,a,n,u,o,v;if(o=!0,arguments.length===0)a={copy:!1},n=hu(a);else if(arguments.length===1){if(a=arguments[0],!qX(a))throw new TypeError(Lt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(rn(a,"copy")&&!bX(a.copy))throw new TypeError(Lt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(rn(a,"prng")){if(!wX(a.prng))throw new TypeError(Lt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(rn(a,"state")&&!j3(a.state))throw new TypeError(Lt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=OX({},a),a.copy===!1?o=!1:a.state&&(a.state=F3(a.state.length,a.state,1,new x3(a.state.length),1)),a.copy=!1,n=hu(a)}}else{if(t=arguments[0],i=arguments[1],v=Qre(t,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!qX(a))throw new TypeError(Lt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(rn(a,"copy")&&!bX(a.copy))throw new TypeError(Lt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(rn(a,"prng")){if(!wX(a.prng))throw new TypeError(Lt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(rn(a,"state")&&!j3(a.state))throw new TypeError(Lt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=OX({},a),a.copy===!1?o=!1:a.state&&(a.state=F3(a.state.length,a.state,1,new x3(a.state.length),1)),a.copy=!1,n=hu(a)}}else a={copy:!1},n=hu(a)}return a&&a.prng?e=NX({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),e=NX({state:r,copy:!1})),t===void 0?u=h:u=d,Rt(u,"NAME","beta"),a&&a.prng?(Rt(u,"seed",null),Rt(u,"seedLength",null),hX(u,"state",EX(null),Zre),Rt(u,"stateLength",null),Rt(u,"byteLength",null),Rt(u,"toJSON",EX(null)),Rt(u,"PRNG",n)):(yu(u,"seed",f),yu(u,"seedLength",c),hX(u,"state",m,y),yu(u,"stateLength",l),yu(u,"byteLength",p),Rt(u,"toJSON",g),Rt(u,"PRNG",n),n=n.normalized),u;function f(){return n.seed}function c(){return n.seedLength}function l(){return n.stateLength}function p(){return n.byteLength}function m(){return n.state}function y(q){if(!j3(q))throw new TypeError(Lt("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));o&&(q=F3(q.length,q,1,new x3(q.length),1)),n.state=q}function g(){var q={};return q.type="PRNG",q.name=u.NAME,q.state=$re(n.state),t===void 0?q.params=[]:q.params=[t,i],q}function d(){return AX(n,e,t,i)}function h(q,w){return SX(q)||SX(w)||q<=0||w<=0?NaN:AX(n,e,q,w)}}_X.exports=Kre});var IX=s((exe,TX)=>{"use strict";var ree=M3(),eee=ree();TX.exports=eee});var PX=s((txe,LX)=>{"use strict";var tee=G(),RX=IX(),iee=M3();tee(RX,"factory",iee);LX.exports=RX});var MX=s((ixe,jX)=>{"use strict";var FX=Ur().isPrimitive,xX=C();function aee(r,e){return FX(r)?FX(e)?null:new TypeError(xX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}jX.exports=aee});var CX=s((axe,kX)=>{"use strict";var BX=br();function nee(r,e,t,i,a){var n,u,o,v,f,c,l;for(n=!0;n;){do f=e(),l=1+a*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+BX(l)),c=r(),(c<o||BX(c)<v)&&(n=!1)}return 1/t*i*l}kX.exports=nee});var U3=s((nxe,YX)=>{"use strict";var Pt=G(),qu=qr(),VX=Nr(),UX=mr(),B3=ht(),GX=de().isPrimitive,DX=yr(),en=vr(),HX=dr(),see=Tr(),zX=Oi().factory,bu=Hr().factory,WX=W(),k3=Lr(),XX=Vr(),C3=bi(),V3=me(),uee=Sr(),JX=q0(),Ft=C(),oee=MX(),wu=CX(),Eu=1/3;function vee(){var r,e,t,i,a,n,u,o,v,f,c;if(o=!0,arguments.length===0)a={copy:!1},n=bu(a);else if(arguments.length===1){if(a=arguments[0],!UX(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(en(a,"copy")&&!GX(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(en(a,"prng")){if(!DX(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(en(a,"state")&&!B3(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=JX({},a),a.copy===!1?o=!1:a.state&&(a.state=C3(a.state.length,a.state,1,new V3(a.state.length),1)),a.copy=!1,n=bu(a)}}else{if(e=arguments[0],i=arguments[1],v=oee(e,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!UX(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(en(a,"copy")&&!GX(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(en(a,"prng")){if(!DX(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(en(a,"state")&&!B3(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=JX({},a),a.copy===!1?o=!1:a.state&&(a.state=C3(a.state.length,a.state,1,new V3(a.state.length),1)),a.copy=!1,n=bu(a)}}else a={copy:!1},n=bu(a)}return a&&a.prng?t=zX({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),t=zX({state:r,copy:!1})),e===void 0?u=A:(e>=1?(u=q,c=e-Eu):(u=w,c=e+1-Eu),f=1/k3(9*c)),Pt(u,"NAME","gamma"),a&&a.prng?(Pt(u,"seed",null),Pt(u,"seedLength",null),VX(u,"state",HX(null),see),Pt(u,"stateLength",null),Pt(u,"byteLength",null),Pt(u,"toJSON",HX(null)),Pt(u,"PRNG",n)):(qu(u,"seed",l),qu(u,"seedLength",p),VX(u,"state",g,d),qu(u,"stateLength",m),qu(u,"byteLength",y),Pt(u,"toJSON",h),Pt(u,"PRNG",n),n=n.normalized),u;function l(){return n.seed}function p(){return n.seedLength}function m(){return n.stateLength}function y(){return n.byteLength}function g(){return n.state}function d(b){if(!B3(b))throw new TypeError(Ft("invalid argument. Must provide a Uint32Array. Value: `%s`.",b));o&&(b=C3(b.length,b,1,new V3(b.length),1)),n.state=b}function h(){var b={};return b.type="PRNG",b.name=u.NAME,b.state=uee(n.state),e===void 0?b.params=[]:b.params=[e,i],b}function q(){return wu(n,t,i,c,f)}function w(){return wu(n,t,i,c,f)*XX(n(),1/e)}function A(b,T){var S,O;return WX(b)||WX(T)||b<=0||T<=0?NaN:b<1?(O=b+1-Eu,S=1/k3(9*O),wu(n,t,T,O,S)*XX(n(),1/b)):(O=b-Eu,S=1/k3(9*O),wu(n,t,T,O,S))}}YX.exports=vee});var $X=s((sxe,ZX)=>{"use strict";var fee=U3(),cee=fee();ZX.exports=cee});var tn=s((uxe,KX)=>{"use strict";var lee=G(),QX=$X(),pee=U3();lee(QX,"factory",pee);KX.exports=QX});var iJ=s((oxe,tJ)=>{"use strict";var rJ=Ur().isPrimitive,eJ=C();function dee(r,e){return rJ(r)?rJ(e)?null:new TypeError(eJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(eJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}tJ.exports=dee});var nJ=s((vxe,aJ)=>{"use strict";function gee(r,e,t){return r(e,1)/r(t,1)}aJ.exports=gee});var G3=s((fxe,lJ)=>{"use strict";var Ai=G(),Nu=qr(),sJ=Nr(),uJ=mr(),oJ=dr(),mee=Tr(),Su=tn().factory,vJ=W(),yee=Sr(),fJ=C(),hee=iJ(),cJ=nJ();function qee(){var r,e,t,i,a,n,u;if(arguments.length===0)r=Su();else if(arguments.length===1){if(i=arguments[0],!uJ(i))throw new TypeError(fJ("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Su(i)}else{if(e=arguments[0],t=arguments[1],u=hee(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!uJ(i))throw new TypeError(fJ("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Su(i)}else r=Su()}return e===void 0?n=g:n=y,a=r.PRNG,Ai(n,"NAME","betaprime"),i&&i.prng?(Ai(n,"seed",null),Ai(n,"seedLength",null),sJ(n,"state",oJ(null),mee),Ai(n,"stateLength",null),Ai(n,"byteLength",null),Ai(n,"toJSON",oJ(null))):(Nu(n,"seed",o),Nu(n,"seedLength",v),sJ(n,"state",l,p),Nu(n,"stateLength",f),Nu(n,"byteLength",c),Ai(n,"toJSON",m)),Ai(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=yee(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return cJ(r,e,t)}function g(d,h){return vJ(d)||vJ(h)||d<=0||h<=0?NaN:cJ(r,d,h)}}lJ.exports=qee});var dJ=s((cxe,pJ)=>{"use strict";var bee=G3(),wee=bee();pJ.exports=wee});var yJ=s((lxe,mJ)=>{"use strict";var Eee=G(),gJ=dJ(),Nee=G3();Eee(gJ,"factory",Nee);mJ.exports=gJ});var qJ=s((pxe,hJ)=>{"use strict";var See=Gr();function Oee(r){return See(r)===r&&r>0}hJ.exports=Oee});var D3=s((dxe,bJ)=>{"use strict";var Aee=qJ();bJ.exports=Aee});var EJ=s((gxe,wJ)=>{"use strict";function _ee(r){return r>=0&&r<=1}wJ.exports=_ee});var SJ=s((mxe,NJ)=>{"use strict";var Tee=EJ();NJ.exports=Tee});var _J=s((yxe,AJ)=>{"use strict";var Iee=nt().isPrimitive,Ree=Fn().isPrimitive,OJ=C();function Lee(r,e){return Iee(r)?Ree(e)?null:new TypeError(OJ("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(OJ("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}AJ.exports=Lee});var IJ=s((hxe,TJ)=>{"use strict";function Pee(r,e,t){var i=0,a;for(a=0;a<e;a++)r()<=t&&(i+=1);return i}TJ.exports=Pee});var LJ=s((qxe,RJ)=>{"use strict";var Fee=W();function xee(r){return r===0||Fee(r)?r:r<0?-1:1}RJ.exports=xee});var Ou=s((bxe,PJ)=>{"use strict";var jee=LJ();PJ.exports=jee});var xJ=s((wxe,FJ)=>{"use strict";var Mee=Vr(),Bee=1/12,kee=1/360,Cee=1/1260;function Vee(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=Mee(r,2),(Bee-(kee-Cee/e)/e)/r}}FJ.exports=Vee});var MJ=s((Exe,jJ)=>{"use strict";var H3=Gr(),Uee=Ou(),Gee=Lr(),z3=Wr(),Au=br(),_u=xJ(),Dee=1/6;function Hee(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,A,b,T,S,O,N,I,E,P;for(T=H3((e+1)*t),f=e-T+1,S=1-t,O=t/S,c=(e+1)*O,u=e*t*S,n=Gee(u),d=1.15+2.53*n,g=-.0873+.0248*d+.01*t,h=e*t+.5,i=(2.83+5.1/d)*n,y=.92-4.2/d,a=.86*y,w=(T+.5)*Au((T+1)/(O*f)),w+=_u(T)+_u(e-T);;){if(E=r(),E<=a)return I=E/y-.43,O=I*(2*g/(.5-z3(I))+d)+h,H3(O);if(E>=y?I=r()-.5:(I=E/y-.93,I=Uee(I)*.5-I,E=y*r()),l=.5-z3(I),b=H3(I*(2*g/l+d)+h),!(b<0||b>e))if(E=E*i/(g/(l*l)+d),p=z3(b-T),p>15){if(E=Au(E),o=p/u,v=(p/3+.625)*p,v+=Dee,v/=u,o*=v+.5,N=-(p*p)/(2*u),E<N-o||E<=N+o&&(m=e-b+1,P=w+(e+1)*Au(f/m),P+=(b+.5)*Au(m*O/(b+1)),P+=-(_u(b)+_u(e-b)),E<=P))return b}else{if(q=1,T<b)for(A=T;A<=b;A++)q*=c/A-O;else if(T>b)for(A=b;A<=T;A++)E*=c/A-O;if(E<=q)return b}}}jJ.exports=Hee});var CJ=s((Nxe,kJ)=>{"use strict";var zee=IJ(),Wee=MJ();function BJ(r,e,t){return t>.5?e-BJ(r,e,1-t):e*t<10?zee(r,e,t):Wee(r,e,t)}kJ.exports=BJ});var W3=s((Sxe,XJ)=>{"use strict";var xt=G(),Tu=qr(),VJ=Nr(),UJ=mr(),GJ=yr(),DJ=vr(),HJ=dr(),Xee=Tr(),zJ=W(),Jee=D3(),Yee=SJ(),Iu=Hr().factory,Zee=Sr(),Ru=C(),$ee=_J(),WJ=CJ();function Qee(){var r,e,t,i,a,n;if(arguments.length===0)e=Iu();else if(arguments.length===1){if(r=arguments[0],!UJ(r))throw new TypeError(Ru("invalid argument. Options argument must be an object. Value: `%s`.",r));if(DJ(r,"prng")){if(!GJ(r.prng))throw new TypeError(Ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Iu(r)}else{if(a=arguments[0],n=arguments[1],i=$ee(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!UJ(r))throw new TypeError(Ru("invalid argument. Options argument must be an object. Value: `%s`.",r));if(DJ(r,"prng")){if(!GJ(r.prng))throw new TypeError(Ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Iu(r)}else e=Iu()}return a===void 0?t=y:t=m,xt(t,"NAME","binomial"),r&&r.prng?(xt(t,"seed",null),xt(t,"seedLength",null),VJ(t,"state",HJ(null),Xee),xt(t,"stateLength",null),xt(t,"byteLength",null),xt(t,"toJSON",HJ(null)),xt(t,"PRNG",e)):(Tu(t,"seed",u),Tu(t,"seedLength",o),VJ(t,"state",c,l),Tu(t,"stateLength",v),Tu(t,"byteLength",f),xt(t,"toJSON",p),xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Zee(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return WJ(e,a,n)}function y(g,d){return zJ(g)||zJ(d)||!Jee(g)||!Yee(d)?NaN:WJ(e,g,d)}}XJ.exports=Qee});var YJ=s((Oxe,JJ)=>{"use strict";var Kee=W3(),rte=Kee();JJ.exports=rte});var QJ=s((Axe,$J)=>{"use strict";var ete=G(),ZJ=YJ(),tte=W3();ete(ZJ,"factory",tte);$J.exports=ZJ});var rY=s((_xe,KJ)=>{"use strict";var ite=Lr(),ate=br(),nte=na(),ste=aa(),ute=di();function ote(r){var e,t;return e=!0,i;function i(){var a,n,u,o;if(e){do a=r(),n=r();while(a===0);return u=ite(-2*ate(a)),o=ute*n,t=u*ste(o),e=!1,u*nte(o)}return e=!0,t}}KJ.exports=ote});var tY=s((Txe,eY)=>{"use strict";var vte=Lr(),fte=br(),cte=aa(),lte=Ue(),pte=cte(lte);function dte(r){var e=vte(-2*fte(r));return e*pte}eY.exports=dte});var aY=s((Ixe,iY)=>{"use strict";var gte=Lr(),mte=br(),yte=aa(),hte=di();function qte(r){var e=gte(-2*mte(r)),t=hte*r;return e*yte(t)}iY.exports=qte});var X3=s((Rxe,oY)=>{"use strict";var We=G(),Lu=qr(),nY=Nr(),bte=mr(),wte=yr(),Ete=de().isPrimitive,b0=vr(),Nte=ht(),sY=Hr().factory,uY=dr(),Ste=Tr(),Ote=Sr(),w0=C(),Ate=rY(),_te=tY(),Tte=aY();function Ite(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!bte(r))throw new TypeError(w0("invalid argument. Must provide an object. Value: `%s`.",r));if(b0(r,"copy")&&(a.copy=r.copy,!Ete(r.copy)))throw new TypeError(w0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(b0(r,"prng")){if(!wte(r.prng))throw new TypeError(w0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(b0(r,"state")){if(a.state=r.state,!Nte(r.state))throw new TypeError(w0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(b0(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(w0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(i=sY(a),e=i.normalized):a.seed=null:(i=sY(a),e=i.normalized),t=Ate(e),We(t,"NAME","box-muller"),a.seed===null?(We(t,"seed",null),We(t,"seedLength",null)):(Lu(t,"seed",n),Lu(t,"seedLength",u)),r&&r.prng?(nY(t,"state",uY(null),Ste),We(t,"stateLength",null),We(t,"byteLength",null),We(t,"toJSON",uY(null))):(nY(t,"state",f,c),Lu(t,"stateLength",o),Lu(t,"byteLength",v),We(t,"toJSON",l)),We(t,"PRNG",e),b0(e,"MIN")?(We(t,"MIN",_te(e.MIN)),We(t,"MAX",Tte(e.MIN))):(We(t,"MIN",null),We(t,"MAX",null)),t;function n(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=Ote(i.state),p.params=[],p}}oY.exports=Ite});var fY=s((Lxe,vY)=>{"use strict";var Rte=X3(),Lte=Rte();vY.exports=Lte});var pY=s((Pxe,lY)=>{"use strict";var Pte=G(),cY=fY(),Fte=X3();Pte(cY,"factory",Fte);lY.exports=cY});var mY=s((Fxe,gY)=>{"use strict";var xte=Er().isPrimitive,jte=Ur().isPrimitive,dY=C(),Mte=oe();function Bte(r,e){return!xte(r)||Mte(r)?new TypeError(dY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):jte(e)?null:new TypeError(dY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}gY.exports=Bte});var hY=s((xxe,yY)=>{"use strict";function kte(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}yY.exports=kte});var bY=s((jxe,qY)=>{"use strict";function Cte(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}qY.exports=Cte});var NY=s((Mxe,EY)=>{"use strict";var Vte=ie(),wY=bt(),Ute=hY(),Gte=bY(),Dte=.7853981633974483,Hte=3061616997868383e-32,zte=.3333333333333341,Wte=2147483647;function Xte(r,e,t){var i,a,n,u,o,v,f,c,l;return i=Vte(r),a=i&Wte|0,a>=1072010280&&(r<0&&(r=-r,e=-e),l=Dte-r,c=Hte-e,r=l+c,e=0),l=r*r,c=l*l,u=Ute(c),f=l*Gte(c),o=l*r,u=e+l*(o*(u+f)+e),u+=zte*o,c=r+u,a>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=wY(c,0),f=u-(l-r),n=-1/c,v=wY(n,0),o=1+v*l,v+n*(o+v*f))}EY.exports=Xte});var OY=s((Bxe,SY)=>{"use strict";var Jte=NY();SY.exports=Jte});var TY=s((kxe,_Y)=>{"use strict";var Yte=ie(),AY=OY(),Zte=Zn(),J3=[0,0],$te=2147483647,Qte=1072243195,Kte=2146435072,rie=1044381696;function eie(r){var e,t;return e=Yte(r),e&=$te,e<=Qte?e<rie?r:AY(r,0,1):e>=Kte?NaN:(t=Zte(r,J3),AY(J3[0],J3[1],1-((t&1)<<1)))}_Y.exports=eie});var Y3=s((Cxe,IY)=>{"use strict";var tie=TY();IY.exports=tie});var LY=s((Vxe,RY)=>{"use strict";var iie=Y3(),aie=Ue();function nie(r,e,t){return e+t*iie(aie*(r()-.5))}RY.exports=nie});var Z3=s((Uxe,CY)=>{"use strict";var _i=G(),Pu=qr(),PY=Nr(),FY=mr(),xY=yr(),jY=vr(),MY=dr(),sie=Tr(),BY=W(),an=Oi().factory,uie=Sr(),Fu=C(),oie=mY(),kY=LY();function vie(){var r,e,t,i,a,n,u;if(arguments.length===0)e=an();else if(arguments.length===1){if(t=arguments[0],!FY(t))throw new TypeError(Fu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jY(t,"prng")){if(!xY(t.prng))throw new TypeError(Fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else{if(u=arguments[0],r=arguments[1],n=oie(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!FY(t))throw new TypeError(Fu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jY(t,"prng")){if(!xY(t.prng))throw new TypeError(Fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else e=an()}return u===void 0?a=g:a=y,i=e.PRNG,_i(a,"NAME","cauchy"),t&&t.prng?(_i(a,"seed",null),_i(a,"seedLength",null),PY(a,"state",MY(null),sie),_i(a,"stateLength",null),_i(a,"byteLength",null),_i(a,"toJSON",MY(null))):(Pu(a,"seed",o),Pu(a,"seedLength",v),PY(a,"state",l,p),Pu(a,"stateLength",f),Pu(a,"byteLength",c),_i(a,"toJSON",m)),_i(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=uie(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return kY(e,u,r)}function g(d,h){return BY(d)||BY(h)||h<=0?NaN:kY(e,d,h)}}CY.exports=vie});var UY=s((Gxe,VY)=>{"use strict";var fie=Z3(),cie=fie();VY.exports=cie});var HY=s((Dxe,DY)=>{"use strict";var lie=G(),GY=UY(),pie=Z3();lie(GY,"factory",pie);DY.exports=GY});var $3=s((Hxe,ZY)=>{"use strict";var Ti=G(),xu=qr(),zY=Nr(),die=Ur().isPrimitive,WY=mr(),XY=yr(),JY=vr(),YY=dr(),gie=Tr(),mie=W(),nn=tn().factory,yie=Sr(),ju=C();function hie(){var r,e,t,i,a;if(arguments.length===0)r=nn();else if(arguments.length===1&&WY(arguments[0]))if(t=arguments[0],JY(t,"prng")){if(!XY(t.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=nn({prng:t.prng})}else r=nn(t);else{if(a=arguments[0],!die(a))throw new TypeError(ju("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!WY(t))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",t));if(JY(t,"prng")){if(!XY(t.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=nn(a/2,.5,{prng:t.prng})}else r=nn(a/2,.5,t)}else r=nn(a/2,.5)}return a===void 0?i=m:i=p,e=r.PRNG,Ti(i,"NAME","chisquare"),t&&t.prng?(Ti(i,"seed",null),Ti(i,"seedLength",null),zY(i,"state",YY(null),gie),Ti(i,"stateLength",null),Ti(i,"byteLength",null),Ti(i,"toJSON",YY(null))):(xu(i,"seed",n),xu(i,"seedLength",u),zY(i,"state",f,c),xu(i,"stateLength",o),xu(i,"byteLength",v),Ti(i,"toJSON",l)),Ti(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=yie(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return r()}function m(y){return mie(y)||y<=0?NaN:r(y/2,.5)}}ZY.exports=hie});var QY=s((zxe,$Y)=>{"use strict";var qie=$3(),bie=qie();$Y.exports=bie});var E0=s((Wxe,rZ)=>{"use strict";var wie=G(),KY=QY(),Eie=$3();wie(KY,"factory",Eie);rZ.exports=KY});var Q3=s((Xxe,uZ)=>{"use strict";var Ii=G(),Mu=qr(),eZ=Nr(),Nie=Ur().isPrimitive,tZ=mr(),iZ=yr(),aZ=vr(),nZ=dr(),Sie=Tr(),Oie=W(),sn=E0().factory,Aie=Sr(),sZ=Lr(),Bu=C();function _ie(){var r,e,t,i,a;if(arguments.length===0)r=sn();else if(arguments.length===1&&tZ(arguments[0]))if(t=arguments[0],aZ(t,"prng")){if(!iZ(t.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=sn({prng:t.prng})}else r=sn(t);else{if(a=arguments[0],!Nie(a))throw new TypeError(Bu("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!tZ(t))throw new TypeError(Bu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(aZ(t,"prng")){if(!iZ(t.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=sn(a,{prng:t.prng})}else r=sn(a,t)}else r=sn(a)}return a===void 0?i=m:i=p,e=r.PRNG,Ii(i,"NAME","chi"),t&&t.prng?(Ii(i,"seed",null),Ii(i,"seedLength",null),eZ(i,"state",nZ(null),Sie),Ii(i,"stateLength",null),Ii(i,"byteLength",null),Ii(i,"toJSON",nZ(null))):(Mu(i,"seed",n),Mu(i,"seedLength",u),eZ(i,"state",f,c),Mu(i,"stateLength",o),Mu(i,"byteLength",v),Ii(i,"toJSON",l)),Ii(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Aie(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return sZ(r())}function m(y){return Oie(y)||y<=0?NaN:sZ(r(y))}}uZ.exports=_ie});var vZ=s((Jxe,oZ)=>{"use strict";var Tie=Q3(),Iie=Tie();oZ.exports=Iie});var lZ=s((Yxe,cZ)=>{"use strict";var Rie=G(),fZ=vZ(),Lie=Q3();Rie(fZ,"factory",Lie);cZ.exports=fZ});var gZ=s((Zxe,dZ)=>{"use strict";var Pie=Er().isPrimitive,Fie=Ur().isPrimitive,pZ=C(),xie=oe();function jie(r,e){return!Pie(r)||xie(r)?new TypeError(pZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Fie(e)?null:new TypeError(pZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}dZ.exports=jie});var yZ=s(($xe,mZ)=>{"use strict";var K3=W(),Mie=a0(),Bie=Ue();function kie(r,e,t){var i;return K3(r)||K3(e)||K3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+Mie(i)/Bie)/2)}mZ.exports=kie});var bZ=s((Qxe,qZ)=>{"use strict";var hZ=W();function Cie(r,e){return hZ(r)||hZ(e)?NaN:r<e?0:1}qZ.exports=Cie});var NZ=s((Kxe,EZ)=>{"use strict";var Vie=dr(),wZ=W();function Uie(r){if(wZ(r))return Vie(NaN);return e;function e(t){return wZ(t)?NaN:t<r?0:1}}EZ.exports=Uie});var ku=s((rje,OZ)=>{"use strict";var Gie=G(),SZ=bZ(),Die=NZ();Gie(SZ,"factory",Die);OZ.exports=SZ});var _Z=s((eje,AZ)=>{"use strict";var Hie=dr(),zie=ku().factory,rc=W(),Wie=a0(),Xie=Ue();function Jie(r,e){if(rc(r)||rc(e)||e<0)return Hie(NaN);if(e===0)return zie(r);return t;function t(i){var a;return rc(i)?NaN:i<r-e?0:i>r+e?1:(a=(i-r)/e,(1+a+Wie(a)/Xie)/2)}}AZ.exports=Jie});var RZ=s((tje,IZ)=>{"use strict";var Yie=G(),TZ=yZ(),Zie=_Z();Yie(TZ,"factory",Zie);IZ.exports=TZ});var ec=s((ije,LZ)=>{"use strict";var $ie=RZ(),Qie=1e4,Kie=1e-12;function rae(r,e,t){var i,a,n,u,o;for(o=1,i=e-t,a=e+t;o<Qie;){if(u=(i+a)/2,a-i<Kie)return u;n=$ie(u,e,t),r>n?i=u:a=u,o+=1}return u}LZ.exports=rae});var FZ=s((aje,PZ)=>{"use strict";var tc=W(),eae=ec();function tae(r,e,t){return tc(e)||tc(t)||tc(r)||t<0||r<0||r>1?NaN:t===0?e:eae(r,e,t)}PZ.exports=tae});var jZ=s((nje,xZ)=>{"use strict";var iae=W();function aae(r,e){return iae(r)||r<0||r>1?NaN:e}xZ.exports=aae});var kZ=s((sje,BZ)=>{"use strict";var nae=dr(),MZ=W();function sae(r){if(MZ(r))return nae(NaN);return e;function e(t){return MZ(t)||t<0||t>1?NaN:r}}BZ.exports=sae});var ic=s((uje,VZ)=>{"use strict";var uae=G(),CZ=jZ(),oae=kZ();uae(CZ,"factory",oae);VZ.exports=CZ});var GZ=s((oje,UZ)=>{"use strict";var vae=dr(),fae=ic().factory,ac=W(),cae=ec();function lae(r,e){if(ac(r)||ac(e)||e<0)return vae(NaN);if(e===0)return fae(r);return t;function t(i){return ac(i)||i<0||i>1?NaN:cae(i,r,e)}}UZ.exports=lae});var zZ=s((vje,HZ)=>{"use strict";var pae=G(),DZ=FZ(),dae=GZ();pae(DZ,"factory",dae);HZ.exports=DZ});var XZ=s((fje,WZ)=>{"use strict";var gae=zZ();function mae(r,e,t){return gae(r(),e,t)}WZ.exports=mae});var nc=s((cje,e$)=>{"use strict";var jt=G(),Cu=qr(),JZ=Nr(),YZ=mr(),ZZ=yr(),$Z=vr(),QZ=dr(),yae=Tr(),Vu=Hr().factory,KZ=W(),hae=Sr(),Uu=C(),qae=gZ(),r$=XZ();function bae(){var r,e,t,i,a,n;if(arguments.length===0)e=Vu();else if(arguments.length===1){if(r=arguments[0],!YZ(r))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if($Z(r,"prng")){if(!ZZ(r.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vu(r)}else{if(a=arguments[0],n=arguments[1],i=qae(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!YZ(r))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if($Z(r,"prng")){if(!ZZ(r.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vu(r)}else e=Vu()}return a===void 0?t=y:t=m,jt(t,"NAME","cosine"),r&&r.prng?(jt(t,"seed",null),jt(t,"seedLength",null),JZ(t,"state",QZ(null),yae),jt(t,"stateLength",null),jt(t,"byteLength",null),jt(t,"toJSON",QZ(null)),jt(t,"PRNG",e)):(Cu(t,"seed",u),Cu(t,"seedLength",o),JZ(t,"state",c,l),Cu(t,"stateLength",v),Cu(t,"byteLength",f),jt(t,"toJSON",p),jt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=hae(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return r$(e,a,n)}function y(g,d){return KZ(g)||KZ(d)||d<=0?NaN:r$(e,g,d)}}e$.exports=bae});var i$=s((lje,t$)=>{"use strict";var wae=nc(),Eae=wae();t$.exports=Eae});var s$=s((pje,n$)=>{"use strict";var Nae=G(),a$=i$(),Sae=nc();Nae(a$,"factory",Sae);n$.exports=a$});var f$=s((dje,v$)=>{"use strict";var u$=ye().isPrimitive,sc=C(),o$=oe();function Oae(r,e){return!u$(r)||o$(r)?new TypeError(sc("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!u$(e)||o$(e)?new TypeError(sc("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(sc("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}v$.exports=Oae});var p$=s((gje,l$)=>{"use strict";var uc=za(),un=Gr();function c$(r,e,t){var i,a,n,u,o,v,f,c,l;if(n=t-e,n===0)return e;if(f=r.MIN,c=r.MAX,a=c-f,a===n)return r()-f+e;if(a<n)for(u=0;;){for(n===uc?(u=un(n/(a+1)),n%(a+1)===a&&(u+=1)):u=un((n+1)/(a+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*a===n-v+1)return i;v*=a+1}if(l=c$(r,0,un(n/v)),!(l>uc/v)&&(l*=v,i+=l,!(i>n)))return i+e}for(a===uc?(o=un(a/(n+1)),a%(n+1)===n&&(o+=1)):o=un((a+1)/(n+1));;)if(i=r()-f,i=un(i/o),i<=n)return i+e}l$.exports=c$});var oc=s((mje,w$)=>{"use strict";var Mt=G(),Gu=qr(),d$=Nr(),g$=mr(),m$=yr(),y$=vr(),h$=dr(),Aae=Tr(),Du=Hr().factory,q$=W(),on=we(),_ae=Sr(),Ri=C(),Tae=f$(),b$=p$();function Iae(){var r,e,t,i,a,n;if(arguments.length===0)e=Du();else if(arguments.length===1){if(r=arguments[0],!g$(r))throw new TypeError(Ri("invalid argument. Options argument must be an object. Value: `%s`.",r));if(y$(r,"prng")){if(!m$(r.prng))throw new TypeError(Ri("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!on(e.MIN))throw new TypeError(Ri("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!on(e.MAX))throw new TypeError(Ri("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Du(r)}else{if(a=arguments[0],n=arguments[1],i=Tae(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!g$(r))throw new TypeError(Ri("invalid argument. Options argument must be an object. Value: `%s`.",r));if(y$(r,"prng")){if(!m$(r.prng))throw new TypeError(Ri("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!on(e.MIN))throw new TypeError(Ri("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!on(e.MAX))throw new TypeError(Ri("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Du(r)}else e=Du()}return a===void 0?t=y:t=m,Mt(t,"NAME","discrete-uniform"),r&&r.prng?(Mt(t,"seed",null),Mt(t,"seedLength",null),d$(t,"state",h$(null),Aae),Mt(t,"stateLength",null),Mt(t,"byteLength",null),Mt(t,"toJSON",h$(null)),Mt(t,"PRNG",e)):(Gu(t,"seed",u),Gu(t,"seedLength",o),d$(t,"state",c,l),Gu(t,"stateLength",v),Gu(t,"byteLength",f),Mt(t,"toJSON",p),Mt(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=_ae(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return b$(e,a,n)}function y(g,d){return q$(g)||q$(d)||!on(g)||!on(d)||g>d?NaN:b$(e,g,d)}}w$.exports=Iae});var N$=s((yje,E$)=>{"use strict";var Rae=oc(),Lae=Rae();E$.exports=Lae});var A$=s((hje,O$)=>{"use strict";var Pae=G(),S$=N$(),Fae=oc();Pae(S$,"factory",Fae);O$.exports=S$});var I$=s((qje,T$)=>{"use strict";var xae=Ur().isPrimitive,jae=nt().isPrimitive,_$=C();function Mae(r,e){return jae(r)?xae(e)?null:new TypeError(_$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_$("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}T$.exports=Mae});var L$=s((bje,R$)=>{"use strict";var Bae=br();function kae(r,e,t){var i,a;for(i=1,a=0;a<e;a++)i*=r();return-(1/t)*Bae(i)}R$.exports=kae});var vc=s((wje,C$)=>{"use strict";var Bt=G(),Hu=qr(),P$=Nr(),F$=mr(),x$=yr(),j$=vr(),M$=dr(),Cae=Tr(),zu=Hr().factory,B$=W(),Vae=D3(),Uae=Sr(),Wu=C(),Gae=I$(),k$=L$();function Dae(){var r,e,t,i,a,n;if(arguments.length===0)e=zu();else if(arguments.length===1){if(t=arguments[0],!F$(t))throw new TypeError(Wu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(j$(t,"prng")){if(!x$(t.prng))throw new TypeError(Wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=zu(t)}else{if(n=arguments[0],r=arguments[1],a=Gae(n,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!F$(t))throw new TypeError(Wu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(j$(t,"prng")){if(!x$(t.prng))throw new TypeError(Wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=zu(t)}else e=zu()}return n===void 0?i=y:i=m,Bt(i,"NAME","erlang"),t&&t.prng?(Bt(i,"seed",null),Bt(i,"seedLength",null),P$(i,"state",M$(null),Cae),Bt(i,"stateLength",null),Bt(i,"byteLength",null),Bt(i,"toJSON",M$(null)),Bt(i,"PRNG",e)):(Hu(i,"seed",u),Hu(i,"seedLength",o),P$(i,"state",c,l),Hu(i,"stateLength",v),Hu(i,"byteLength",f),Bt(i,"toJSON",p),Bt(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Uae(e.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return k$(e,n,r)}function y(g,d){return B$(g)||B$(d)||!Vae(g)||d<=0?NaN:k$(e,g,d)}}C$.exports=Dae});var U$=s((Eje,V$)=>{"use strict";var Hae=vc(),zae=Hae();V$.exports=zae});var H$=s((Nje,D$)=>{"use strict";var Wae=G(),G$=U$(),Xae=vc();Wae(G$,"factory",Xae);D$.exports=G$});var W$=s((Sje,z$)=>{"use strict";var Jae=br();function Yae(r,e){return-Jae(1-r())/e}z$.exports=Yae});var fc=s((Oje,K$)=>{"use strict";var kt=G(),Xu=qr(),X$=Nr(),Zae=Ur().isPrimitive,J$=mr(),Y$=yr(),Z$=vr(),$$=dr(),$ae=Tr(),Ju=Hr().factory,Qae=W(),Kae=Sr(),Yu=C(),Q$=W$();function rne(){var r,e,t,i;if(arguments.length===0)t=Ju();else if(arguments.length===1&&J$(arguments[0]))if(e=arguments[0],Z$(e,"prng")){if(!Y$(e.prng))throw new TypeError(Yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ju(e);else{if(r=arguments[0],!Zae(r))throw new TypeError(Yu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!J$(e))throw new TypeError(Yu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Z$(e,"prng")){if(!Y$(e.prng))throw new TypeError(Yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ju(e)}else t=Ju()}return r===void 0?i=p:i=l,kt(i,"NAME","exponential"),e&&e.prng?(kt(i,"seed",null),kt(i,"seedLength",null),X$(i,"state",$$(null),$ae),kt(i,"stateLength",null),kt(i,"byteLength",null),kt(i,"toJSON",$$(null)),kt(i,"PRNG",t)):(Xu(i,"seed",a),Xu(i,"seedLength",n),X$(i,"state",v,f),Xu(i,"stateLength",u),Xu(i,"byteLength",o),kt(i,"toJSON",c),kt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Kae(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Q$(t,r)}function p(m){return Qae(m)||m<=0?NaN:Q$(t,m)}}K$.exports=rne});var eQ=s((Aje,rQ)=>{"use strict";var ene=fc(),tne=ene();rQ.exports=tne});var aQ=s((_je,iQ)=>{"use strict";var ine=G(),tQ=eQ(),ane=fc();ine(tQ,"factory",ane);iQ.exports=tQ});var oQ=s((Tje,uQ)=>{"use strict";var nQ=Ur().isPrimitive,sQ=C();function nne(r,e){return nQ(r)?nQ(e)?null:new TypeError(sQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(sQ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}uQ.exports=nne});var fQ=s((Ije,vQ)=>{"use strict";function sne(r,e,t){var i=r(e)/e,a=r(t)/t;return i/a}vQ.exports=sne});var cc=s((Rje,hQ)=>{"use strict";var Li=G(),Zu=qr(),cQ=Nr(),lQ=mr(),pQ=yr(),dQ=vr(),gQ=dr(),une=Tr(),vn=E0().factory,mQ=W(),one=Sr(),$u=C(),vne=oQ(),yQ=fQ();function fne(){var r,e,t,i,a,n,u;if(arguments.length===0)r=vn();else if(arguments.length===1){if(e=arguments[0],!lQ(e))throw new TypeError($u("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dQ(e,"prng")){if(!pQ(e.prng))throw new TypeError($u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=vn({prng:e.prng})}else r=vn(e)}else{if(n=arguments[0],u=arguments[1],a=vne(n,u),a)throw a;if(arguments.length>2){if(e=arguments[2],!lQ(e))throw new TypeError($u("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dQ(e,"prng")){if(!pQ(e.prng))throw new TypeError($u("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=vn({prng:e.prng})}else r=vn(e)}else r=vn()}return n===void 0?i=g:i=y,t=r.PRNG,Li(i,"NAME","f"),e&&e.prng?(Li(i,"seed",null),Li(i,"seedLength",null),cQ(i,"state",gQ(null),une),Li(i,"stateLength",null),Li(i,"byteLength",null),Li(i,"toJSON",gQ(null))):(Zu(i,"seed",o),Zu(i,"seedLength",v),cQ(i,"state",l,p),Zu(i,"stateLength",f),Zu(i,"byteLength",c),Li(i,"toJSON",m)),Li(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=one(t.state),n===void 0?d.params=[]:d.params=[n,u],d}function y(){return yQ(r,n,u)}function g(d,h){return mQ(d)||mQ(h)||d<=0||h<=0?NaN:yQ(r,d,h)}}hQ.exports=fne});var bQ=s((Lje,qQ)=>{"use strict";var cne=cc(),lne=cne();qQ.exports=lne});var NQ=s((Pje,EQ)=>{"use strict";var pne=G(),wQ=bQ(),dne=cc();pne(wQ,"factory",dne);EQ.exports=wQ});var AQ=s((Fje,OQ)=>{"use strict";var SQ=Ur().isPrimitive,gne=Er().isPrimitive,lc=oe(),pc=C();function mne(r,e,t){return!SQ(r)||lc(r)?new TypeError(pc("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!SQ(e)||lc(e)?new TypeError(pc("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!gne(t)||lc(t)?new TypeError(pc("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}OQ.exports=mne});var TQ=s((xje,_Q)=>{"use strict";var yne=Vr(),hne=br();function qne(r,e,t,i){return i+t*yne(-hne(r()),-1/e)}_Q.exports=qne});var gc=s((jje,jQ)=>{"use strict";var Ct=G(),Qu=qr(),IQ=Nr(),RQ=mr(),LQ=yr(),PQ=vr(),FQ=dr(),bne=Tr(),Ku=Hr().factory,dc=W(),wne=Sr(),ro=C(),Ene=AQ(),xQ=TQ();function Nne(){var r,e,t,i,a,n,u;if(arguments.length===0)t=Ku();else if(arguments.length===1){if(e=arguments[0],!RQ(e))throw new TypeError(ro("invalid argument. Options argument must be an object. Value: `%s`.",e));if(PQ(e,"prng")){if(!LQ(e.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ku(e)}else{if(r=arguments[0],n=arguments[1],u=arguments[2],a=Ene(r,n,u),a)throw a;if(arguments.length>3){if(e=arguments[3],!RQ(e))throw new TypeError(ro("invalid argument. Options argument must be an object. Value: `%s`.",e));if(PQ(e,"prng")){if(!LQ(e.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ku(e)}else t=Ku()}return r===void 0?i=g:i=y,Ct(i,"NAME","frechet"),e&&e.prng?(Ct(i,"seed",null),Ct(i,"seedLength",null),IQ(i,"state",FQ(null),bne),Ct(i,"stateLength",null),Ct(i,"byteLength",null),Ct(i,"toJSON",FQ(null)),Ct(i,"PRNG",t)):(Qu(i,"seed",o),Qu(i,"seedLength",v),IQ(i,"state",l,p),Qu(i,"stateLength",f),Qu(i,"byteLength",c),Ct(i,"toJSON",m),Ct(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=wne(t.state),r===void 0?d.params=[]:d.params=[r,n,u],d}function y(){return xQ(t,r,n,u)}function g(d,h,q){return dc(d)||dc(h)||dc(q)||d<=0||h<=0?NaN:xQ(t,d,h,q)}}jQ.exports=Nne});var BQ=s((Mje,MQ)=>{"use strict";var Sne=gc(),One=Sne();MQ.exports=One});var VQ=s((Bje,CQ)=>{"use strict";var Ane=G(),kQ=BQ(),_ne=gc();Ane(kQ,"factory",_ne);CQ.exports=kQ});var DQ=s((kje,GQ)=>{"use strict";var Tne=Gr(),UQ=br();function Ine(r,e){var t=r();return t===0&&(t=r()),Tne(UQ(t)/UQ(1-e))}GQ.exports=Ine});var mc=s((Cje,ZQ)=>{"use strict";var Vt=G(),eo=qr(),HQ=Nr(),zQ=mr(),Rne=Fn().isPrimitive,WQ=yr(),XQ=vr(),JQ=dr(),Lne=Tr(),to=Hr().factory,Pne=W(),Fne=Sr(),io=C(),YQ=DQ();function xne(){var r,e,t,i;if(arguments.length===0)e=to();else if(arguments.length===1&&zQ(arguments[0]))if(r=arguments[0],XQ(r,"prng")){if(!WQ(r.prng))throw new TypeError(io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=to(r);else{if(i=arguments[0],!Rne(i))throw new TypeError(io("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!zQ(r))throw new TypeError(io("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XQ(r,"prng")){if(!WQ(r.prng))throw new TypeError(io("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=to(r)}else e=to()}return i===void 0?t=p:t=l,Vt(t,"NAME","geometric"),r&&r.prng?(Vt(t,"seed",null),Vt(t,"seedLength",null),HQ(t,"state",JQ(null),Lne),Vt(t,"stateLength",null),Vt(t,"byteLength",null),Vt(t,"toJSON",JQ(null)),Vt(t,"PRNG",e)):(eo(t,"seed",a),eo(t,"seedLength",n),HQ(t,"state",v,f),eo(t,"stateLength",u),eo(t,"byteLength",o),Vt(t,"toJSON",c),Vt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Fne(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return YQ(e,i)}function p(m){return Pne(m)||m<0||m>1?NaN:YQ(e,m)}}ZQ.exports=xne});var QQ=s((Vje,$Q)=>{"use strict";var jne=mc(),Mne=jne();$Q.exports=Mne});var eK=s((Uje,rK)=>{"use strict";var Bne=G(),KQ=QQ(),kne=mc();Bne(KQ,"factory",kne);rK.exports=KQ});var aK=s((Gje,iK)=>{"use strict";var Cne=Er().isPrimitive,Vne=Ur().isPrimitive,tK=C(),Une=oe();function Gne(r,e){return!Cne(r)||Une(r)?new TypeError(tK("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Vne(e)?null:new TypeError(tK("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iK.exports=Gne});var uK=s((Dje,sK)=>{"use strict";var nK=br();function Dne(r,e,t){return e-t*nK(-nK(r()))}sK.exports=Dne});var yc=s((Hje,gK)=>{"use strict";var Ut=G(),ao=qr(),oK=Nr(),vK=mr(),fK=yr(),cK=vr(),lK=dr(),Hne=Tr(),no=Hr().factory,pK=W(),zne=Sr(),so=C(),Wne=aK(),dK=uK();function Xne(){var r,e,t,i,a,n;if(arguments.length===0)t=no();else if(arguments.length===1){if(e=arguments[0],!vK(e))throw new TypeError(so("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cK(e,"prng")){if(!fK(e.prng))throw new TypeError(so("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=no(e)}else{if(n=arguments[0],r=arguments[1],a=Wne(n,r),a)throw a;if(arguments.length>2){if(e=arguments[2],!vK(e))throw new TypeError(so("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cK(e,"prng")){if(!fK(e.prng))throw new TypeError(so("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=no(e)}else t=no()}return n===void 0?i=y:i=m,Ut(i,"NAME","gumbel"),e&&e.prng?(Ut(i,"seed",null),Ut(i,"seedLength",null),oK(i,"state",lK(null),Hne),Ut(i,"stateLength",null),Ut(i,"byteLength",null),Ut(i,"toJSON",lK(null)),Ut(i,"PRNG",t)):(ao(i,"seed",u),ao(i,"seedLength",o),oK(i,"state",c,l),ao(i,"stateLength",v),ao(i,"byteLength",f),Ut(i,"toJSON",p),Ut(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=zne(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return dK(t,n,r)}function y(g,d){return pK(g)||pK(d)||d<=0?NaN:dK(t,g,d)}}gK.exports=Xne});var yK=s((zje,mK)=>{"use strict";var Jne=yc(),Yne=Jne();mK.exports=Yne});var bK=s((Wje,qK)=>{"use strict";var Zne=G(),hK=yK(),$ne=yc();Zne(hK,"factory",$ne);qK.exports=hK});var EK=s((Xje,wK)=>{"use strict";var hc=be().isPrimitive,N0=C();function Qne(r,e,t){return hc(r)?hc(e)?hc(t)?t>r?new RangeError(N0("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(N0("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(N0("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(N0("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(N0("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}wK.exports=Qne});var NK=s((Jje,Kne)=>{Kne.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var OK=s((Yje,SK)=>{"use strict";var r0e=W(),e0e=we(),t0e=Ja(),i0e=hr(),a0e=NK(),n0e=170;function s0e(r){return r0e(r)?NaN:e0e(r)?r<0?NaN:r<=n0e?a0e[r]:i0e:t0e(r+1)}SK.exports=s0e});var _K=s((Zje,AK)=>{"use strict";var u0e=OK();AK.exports=u0e});var IK=s(($je,TK)=>{"use strict";var Pi=_K();function o0e(r,e,t,i){var a,n,u;for(i<t?(a=Pi(t)*Pi(e+t-i)/(Pi(e+t)*Pi(t-i)),u=0):(a=Pi(e)*Pi(i)/(Pi(i-t)*Pi(e+t)),u=i-t),n=r();n>a;)n-=a,a*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}TK.exports=o0e});var LK=s((Qje,RK)=>{"use strict";var uo=IK();function v0e(r,e,t,i){var a,n,u,o;return i>e/2?(u=e-i,2*t<=e?(a=t,n=e-t,o=uo(r,a,n,u),t-o):(n=t,a=e-t,o=uo(r,a,n,u),i-e+t+o)):(u=i,2*t<=e?(a=t,n=e-t,o=uo(r,a,n,u),o):(a=e-t,n=t,o=uo(r,a,n,u),i-o))}RK.exports=v0e});var bc=s((Kje,CK)=>{"use strict";var Gt=G(),oo=qr(),PK=Nr(),FK=mr(),xK=yr(),jK=vr(),MK=dr(),f0e=Tr(),vo=Hr().factory,qc=uf(),BK=hr(),c0e=Sr(),fo=C(),l0e=EK(),kK=LK();function p0e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=vo();else if(arguments.length===1){if(r=arguments[0],!FK(r))throw new TypeError(fo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jK(r,"prng")){if(!xK(r.prng))throw new TypeError(fo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vo(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=l0e(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!FK(r))throw new TypeError(fo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jK(r,"prng")){if(!xK(r.prng))throw new TypeError(fo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=vo(r)}else e=vo()}return a===void 0?t=g:t=y,Gt(t,"NAME","hypergeometric"),r&&r.prng?(Gt(t,"seed",null),Gt(t,"seedLength",null),PK(t,"state",MK(null),f0e),Gt(t,"stateLength",null),Gt(t,"byteLength",null),Gt(t,"toJSON",MK(null)),Gt(t,"PRNG",e)):(oo(t,"seed",o),oo(t,"seedLength",v),PK(t,"state",l,p),oo(t,"stateLength",f),oo(t,"byteLength",c),Gt(t,"toJSON",m),Gt(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=c0e(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return kK(e,a,n,u)}function g(d,h,q){return d===BK||h===BK||!qc(d)||!qc(h)||!qc(q)||q>d?NaN:kK(e,d,h,q)}}CK.exports=p0e});var UK=s((rMe,VK)=>{"use strict";var d0e=bc(),g0e=d0e();VK.exports=g0e});var HK=s((eMe,DK)=>{"use strict";var m0e=G(),GK=UK(),y0e=bc();m0e(GK,"factory",y0e);DK.exports=GK});var JK=s((tMe,XK)=>{"use strict";var zK=Ur().isPrimitive,WK=C();function h0e(r,e){return zK(r)?zK(e)?null:new TypeError(WK("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(WK("invalid argument. First argument must be a positive number. Value: `%s`.",r))}XK.exports=h0e});var wc=s((iMe,err)=>{"use strict";var Fi=G(),co=qr(),YK=Nr(),ZK=mr(),$K=yr(),QK=vr(),KK=dr(),q0e=Tr(),fn=tn().factory,rrr=W(),b0e=Sr(),lo=C(),w0e=JK();function E0e(){var r,e,t,i,a,n,u;if(arguments.length===0)r=fn();else if(arguments.length===1){if(i=arguments[0],!ZK(i))throw new TypeError(lo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(QK(i,"prng")){if(!$K(i.prng))throw new TypeError(lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=fn({prng:i.prng})}else r=fn(i)}else{if(e=arguments[0],t=arguments[1],u=w0e(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!ZK(i))throw new TypeError(lo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(QK(i,"prng")){if(!$K(i.prng))throw new TypeError(lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=fn(e,t,{prng:i.prng})}else r=fn(e,t,i)}else r=fn(e,t)}return e===void 0?n=g:n=y,a=r.PRNG,Fi(n,"NAME","invgamma"),i&&i.prng?(Fi(n,"seed",null),Fi(n,"seedLength",null),YK(n,"state",KK(null),q0e),Fi(n,"stateLength",null),Fi(n,"byteLength",null),Fi(n,"toJSON",KK(null))):(co(n,"seed",o),co(n,"seedLength",v),YK(n,"state",l,p),co(n,"stateLength",f),co(n,"byteLength",c),Fi(n,"toJSON",m)),Fi(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=b0e(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return 1/r()}function g(d,h){return rrr(d)||rrr(h)||d<=0||h<=0?NaN:1/r(d,h)}}err.exports=E0e});var irr=s((aMe,trr)=>{"use strict";var N0e=wc(),S0e=N0e();trr.exports=S0e});var srr=s((nMe,nrr)=>{"use strict";var O0e=G(),arr=irr(),A0e=wc();O0e(arr,"factory",A0e);nrr.exports=arr});var frr=s((sMe,vrr)=>{"use strict";var urr=Ur().isPrimitive,orr=C();function _0e(r,e){return urr(r)?urr(e)?null:new TypeError(orr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(orr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}vrr.exports=_0e});var prr=s((uMe,lrr)=>{"use strict";var crr=Vr();function T0e(r,e,t){var i=r();return crr(1-crr(1-i,1/t),1/e)}lrr.exports=T0e});var Ec=s((oMe,wrr)=>{"use strict";var Dt=G(),po=qr(),drr=Nr(),grr=mr(),mrr=yr(),yrr=vr(),hrr=dr(),I0e=Tr(),go=Hr().factory,qrr=W(),R0e=Sr(),mo=C(),L0e=frr(),brr=prr();function P0e(){var r,e,t,i,a,n;if(arguments.length===0)e=go();else if(arguments.length===1){if(r=arguments[0],!grr(r))throw new TypeError(mo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yrr(r,"prng")){if(!mrr(r.prng))throw new TypeError(mo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=go(r)}else{if(a=arguments[0],n=arguments[1],i=L0e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!grr(r))throw new TypeError(mo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yrr(r,"prng")){if(!mrr(r.prng))throw new TypeError(mo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=go(r)}else e=go()}return a===void 0?t=y:t=m,Dt(t,"NAME","kumaraswamy"),r&&r.prng?(Dt(t,"seed",null),Dt(t,"seedLength",null),drr(t,"state",hrr(null),I0e),Dt(t,"stateLength",null),Dt(t,"byteLength",null),Dt(t,"toJSON",hrr(null)),Dt(t,"PRNG",e)):(po(t,"seed",u),po(t,"seedLength",o),drr(t,"state",c,l),po(t,"stateLength",v),po(t,"byteLength",f),Dt(t,"toJSON",p),Dt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=R0e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return brr(e,a,n)}function y(g,d){return qrr(g)||qrr(d)||g<=0||d<=0?NaN:brr(e,g,d)}}wrr.exports=P0e});var Nrr=s((vMe,Err)=>{"use strict";var F0e=Ec(),x0e=F0e();Err.exports=x0e});var Arr=s((fMe,Orr)=>{"use strict";var j0e=G(),Srr=Nrr(),M0e=Ec();j0e(Srr,"factory",M0e);Orr.exports=Srr});var Irr=s((cMe,Trr)=>{"use strict";var B0e=Er().isPrimitive,k0e=Ur().isPrimitive,_rr=C(),C0e=oe();function V0e(r,e){return!B0e(r)||C0e(r)?new TypeError(_rr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):k0e(e)?null:new TypeError(_rr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Trr.exports=V0e});var Lrr=s((lMe,Rrr)=>{"use strict";var U0e=Ou(),G0e=Wr(),D0e=br();function H0e(r,e,t){var i=r()-.5;return e-t*U0e(i)*D0e(1-2*G0e(i))}Rrr.exports=H0e});var Nc=s((pMe,Crr)=>{"use strict";var Ht=G(),yo=qr(),Prr=Nr(),Frr=mr(),xrr=yr(),jrr=vr(),Mrr=dr(),z0e=Tr(),ho=Hr().factory,Brr=W(),W0e=Sr(),qo=C(),X0e=Irr(),krr=Lrr();function J0e(){var r,e,t,i,a,n;if(arguments.length===0)e=ho();else if(arguments.length===1){if(r=arguments[0],!Frr(r))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jrr(r,"prng")){if(!xrr(r.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ho(r)}else{if(a=arguments[0],n=arguments[1],i=X0e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Frr(r))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jrr(r,"prng")){if(!xrr(r.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ho(r)}else e=ho()}return a===void 0?t=y:t=m,Ht(t,"NAME","laplace"),r&&r.prng?(Ht(t,"seed",null),Ht(t,"seedLength",null),Prr(t,"state",Mrr(null),z0e),Ht(t,"stateLength",null),Ht(t,"byteLength",null),Ht(t,"toJSON",Mrr(null)),Ht(t,"PRNG",e)):(yo(t,"seed",u),yo(t,"seedLength",o),Prr(t,"state",c,l),yo(t,"stateLength",v),yo(t,"byteLength",f),Ht(t,"toJSON",p),Ht(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=W0e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return krr(e,a,n)}function y(g,d){return Brr(g)||Brr(d)||d<=0?NaN:krr(e,g,d)}}Crr.exports=J0e});var Urr=s((dMe,Vrr)=>{"use strict";var Y0e=Nc(),Z0e=Y0e();Vrr.exports=Z0e});var Hrr=s((gMe,Drr)=>{"use strict";var $0e=G(),Grr=Urr(),Q0e=Nc();$0e(Grr,"factory",Q0e);Drr.exports=Grr});var Xrr=s((mMe,Wrr)=>{"use strict";var K0e=Er().isPrimitive,rse=Ur().isPrimitive,zrr=C(),ese=oe();function tse(r,e){return!K0e(r)||ese(r)?new TypeError(zrr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):rse(e)?null:new TypeError(zrr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Wrr.exports=tse});var Yrr=s((yMe,Jrr)=>{"use strict";function ise(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Jrr.exports=ise});var $rr=s((hMe,Zrr)=>{"use strict";function ase(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Zrr.exports=ase});var Krr=s((qMe,Qrr)=>{"use strict";function nse(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Qrr.exports=nse});var eer=s((bMe,rer)=>{"use strict";function sse(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}rer.exports=sse});var ier=s((wMe,ter)=>{"use strict";function use(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}ter.exports=use});var uer=s((EMe,ser)=>{"use strict";var ose=W(),aer=Lr(),ner=br(),vse=hr(),fse=Ir(),cse=Yrr(),lse=$rr(),pse=Krr(),dse=eer(),gse=ier(),mse=.08913147449493408,yse=2.249481201171875,hse=.807220458984375,qse=.9399557113647461,bse=.9836282730102539;function wse(r){var e,t,i,a,n,u;return ose(r)?NaN:r===1?vse:r===-1?fse:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),a=1-t,t<=.5?(n=t*(t+10),u=cse(t),e*(n*mse+n*u)):a>=.25?(n=aer(-2*ner(a)),a-=.25,u=lse(a),e*(n/(yse+u))):(a=aer(-ner(a)),a<3?(i=a-1.125,u=pse(i),e*(hse*a+u*a)):a<6?(i=a-3,u=dse(i),e*(qse*a+u*a)):(i=a-6,u=gse(i),e*(bse*a+u*a))))}ser.exports=wse});var Sc=s((NMe,oer)=>{"use strict";var Ese=uer();oer.exports=Ese});var fer=s((SMe,ver)=>{"use strict";var Nse=Sc(),Oc=W(),Sse=Lr();function Ose(r,e,t){var i,a;return Oc(e)||Oc(t)||Oc(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,a=t*Sse(2),i+a*Nse(2*r-1))}ver.exports=Ose});var ler=s((OMe,cer)=>{"use strict";var Ase=dr(),_se=ic().factory,Tse=Sc(),Ac=W(),Ise=Lr();function Rse(r,e){var t,i;if(Ac(r)||Ac(e)||e<0)return Ase(NaN);return e===0&&_se(r),t=r,i=e*Ise(2),a;function a(n){return Ac(n)||n<0||n>1?NaN:t+i*Tse(2*n-1)}}cer.exports=Rse});var _c=s((AMe,der)=>{"use strict";var Lse=G(),per=fer(),Pse=ler();Lse(per,"factory",Pse);der.exports=per});var mer=s((_Me,ger)=>{"use strict";var Fse=_c();function xse(r,e,t){var i=Fse(1-r()/2,0,1);return e+t/(i*i)}ger.exports=xse});var Tc=s((TMe,Ser)=>{"use strict";var zt=G(),bo=qr(),yer=Nr(),her=mr(),qer=yr(),ber=vr(),wer=dr(),jse=Tr(),wo=Hr().factory,Eer=W(),Mse=Sr(),Eo=C(),Bse=Xrr(),Ner=mer();function kse(){var r,e,t,i,a,n;if(arguments.length===0)e=wo();else if(arguments.length===1){if(r=arguments[0],!her(r))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ber(r,"prng")){if(!qer(r.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=wo(r)}else{if(a=arguments[0],n=arguments[1],i=Bse(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!her(r))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ber(r,"prng")){if(!qer(r.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=wo(r)}else e=wo()}return a===void 0?t=y:t=m,zt(t,"NAME","levy"),r&&r.prng?(zt(t,"seed",null),zt(t,"seedLength",null),yer(t,"state",wer(null),jse),zt(t,"stateLength",null),zt(t,"byteLength",null),zt(t,"toJSON",wer(null)),zt(t,"PRNG",e)):(bo(t,"seed",u),bo(t,"seedLength",o),yer(t,"state",c,l),bo(t,"stateLength",v),bo(t,"byteLength",f),zt(t,"toJSON",p),zt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Mse(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Ner(e,a,n)}function y(g,d){return Eer(g)||Eer(d)||d<=0?NaN:Ner(e,g,d)}}Ser.exports=kse});var Aer=s((IMe,Oer)=>{"use strict";var Cse=Tc(),Vse=Cse();Oer.exports=Vse});var Ier=s((RMe,Ter)=>{"use strict";var Use=G(),_er=Aer(),Gse=Tc();Use(_er,"factory",Gse);Ter.exports=_er});var Per=s((LMe,Ler)=>{"use strict";var Dse=Er().isPrimitive,Hse=Ur().isPrimitive,zse=oe(),Rer=C();function Wse(r,e){return!Dse(r)||zse(r)?new TypeError(Rer("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Hse(e)?null:new TypeError(Rer("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Ler.exports=Wse});var xer=s((PMe,Fer)=>{"use strict";var Xse=br();function Jse(r,e,t){var i=r();return e+t*Xse(i/(1-i))}Fer.exports=Jse});var Ic=s((FMe,Ger)=>{"use strict";var Wt=G(),No=qr(),jer=Nr(),Mer=mr(),Ber=yr(),ker=vr(),Cer=dr(),Yse=Tr(),So=Hr().factory,Ver=W(),Zse=Sr(),Oo=C(),$se=Per(),Uer=xer();function Qse(){var r,e,t,i,a,n;if(arguments.length===0)e=So();else if(arguments.length===1){if(r=arguments[0],!Mer(r))throw new TypeError(Oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ker(r,"prng")){if(!Ber(r.prng))throw new TypeError(Oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=So(r)}else{if(a=arguments[0],n=arguments[1],i=$se(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Mer(r))throw new TypeError(Oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ker(r,"prng")){if(!Ber(r.prng))throw new TypeError(Oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=So(r)}else e=So()}return a===void 0?t=y:t=m,Wt(t,"NAME","logistic"),r&&r.prng?(Wt(t,"seed",null),Wt(t,"seedLength",null),jer(t,"state",Cer(null),Yse),Wt(t,"stateLength",null),Wt(t,"byteLength",null),Wt(t,"toJSON",Cer(null)),Wt(t,"PRNG",e)):(No(t,"seed",u),No(t,"seedLength",o),jer(t,"state",c,l),No(t,"stateLength",v),No(t,"byteLength",f),Wt(t,"toJSON",p),Wt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Zse(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Uer(e,a,n)}function y(g,d){return Ver(g)||Ver(d)||d<=0?NaN:Uer(e,g,d)}}Ger.exports=Qse});var Her=s((xMe,Der)=>{"use strict";var Kse=Ic(),rue=Kse();Der.exports=rue});var Xer=s((jMe,Wer)=>{"use strict";var eue=G(),zer=Her(),tue=Ic();eue(zer,"factory",tue);Wer.exports=zer});var Zer=s((MMe,Yer)=>{"use strict";var iue=Er().isPrimitive,aue=Ur().isPrimitive,Jer=C(),nue=oe();function sue(r,e){return!iue(r)||nue(r)?new TypeError(Jer("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):aue(e)?null:new TypeError(Jer("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Yer.exports=sue});var Qer=s((BMe,$er)=>{"use strict";var uue=ae();function oue(r,e,t){return uue(e+t*r())}$er.exports=oue});var Rc=s((kMe,str)=>{"use strict";var xi=G(),Ao=qr(),Ker=Nr(),rtr=mr(),etr=yr(),ttr=vr(),itr=dr(),vue=Tr(),cn=Oi().factory,atr=W(),fue=Sr(),_o=C(),cue=Zer(),ntr=Qer();function lue(){var r,e,t,i,a,n,u;if(arguments.length===0)e=cn();else if(arguments.length===1){if(t=arguments[0],!rtr(t))throw new TypeError(_o("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ttr(t,"prng")){if(!etr(t.prng))throw new TypeError(_o("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else{if(u=arguments[0],r=arguments[1],n=cue(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!rtr(t))throw new TypeError(_o("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ttr(t,"prng")){if(!etr(t.prng))throw new TypeError(_o("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else e=cn()}return u===void 0?a=g:a=y,i=e.PRNG,xi(a,"NAME","lognormal"),t&&t.prng?(xi(a,"seed",null),xi(a,"seedLength",null),Ker(a,"state",itr(null),vue),xi(a,"stateLength",null),xi(a,"byteLength",null),xi(a,"toJSON",itr(null))):(Ao(a,"seed",o),Ao(a,"seedLength",v),Ker(a,"state",l,p),Ao(a,"stateLength",f),Ao(a,"byteLength",c),xi(a,"toJSON",m)),xi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=fue(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return ntr(e,u,r)}function g(d,h){return atr(d)||atr(h)||h<=0?NaN:ntr(e,d,h)}}str.exports=lue});var otr=s((CMe,utr)=>{"use strict";var pue=Rc(),due=pue();utr.exports=due});var ctr=s((VMe,ftr)=>{"use strict";var gue=G(),vtr=otr(),mue=Rc();gue(vtr,"factory",mue);ftr.exports=vtr});var Lc=s((UMe,ltr)=>{"use strict";var yue=ya(),hue=Gr(),que=yue-1;function bue(){var r=hue(1+que*Math.random());return r|0}ltr.exports=bue});var xc=s((GMe,ytr)=>{"use strict";var Xt=G(),ji=qr(),ptr=Nr(),Pc=vr(),wue=mr(),Eue=de().isPrimitive,Nue=Be(),Sue=nt().isPrimitive,dtr=U0(),Qe=C(),To=ya(),Re=ni(),ln=bi(),Oue=Sr(),gtr=Lc(),Fc=To-1|0,Aue=To-1|0,_ue=16807,Io=1,Ro=2,Mi=2,Le=4,S0=5;function mtr(r,e){var t;return e?t="option":t="argument",r.length<S0+1?new RangeError(Qe("invalid %s. State array has insufficient length.",t)):r[0]!==Io?new RangeError(Qe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Io,r[0])):r[1]!==Ro?new RangeError(Qe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Ro,r[1])):r[Mi]!==1?new RangeError(Qe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Mi])):r[Le]!==r.length-S0?new RangeError(Qe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-S0,r[Le])):null}function Tue(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!wue(r))throw new TypeError(Qe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Pc(r,"copy")&&(i.copy=r.copy,!Eue(r.copy)))throw new TypeError(Qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Pc(r,"state")){if(t=r.state,i.state=!0,!dtr(t))throw new TypeError(Qe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=mtr(t,!0),u)throw u;i.copy===!1?e=t:(e=new Re(t.length),ln(t.length,t,1,e,1)),t=new Re(e.buffer,e.byteOffset+(Mi+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,t[Le])}if(a===void 0)if(Pc(r,"seed"))if(a=r.seed,i.seed=!0,Sue(a)){if(a>Aue)throw new RangeError(Qe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(Nue(a)&&a.length>0)n=a.length,e=new Re(S0+n),e[0]=Io,e[1]=Ro,e[Mi]=1,e[Le]=n,ln.ndarray(n,a,1,0,e,1,Le+1),t=new Re(e.buffer,e.byteOffset+(Mi+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,n),t[0]=a[0];else throw new TypeError(Qe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=gtr()|0}else a=gtr()|0;return t===void 0&&(e=new Re(S0+1),e[0]=Io,e[1]=Ro,e[Mi]=1,e[Le]=1,e[Le+1]=a,t=new Re(e.buffer,e.byteOffset+(Mi+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,1),t[0]=a[0]),Xt(y,"NAME","minstd"),ji(y,"seed",o),ji(y,"seedLength",v),ptr(y,"state",l,p),ji(y,"stateLength",f),ji(y,"byteLength",c),Xt(y,"toJSON",m),Xt(y,"MIN",1),Xt(y,"MAX",To-1),Xt(y,"normalized",g),Xt(g,"NAME",y.NAME),ji(g,"seed",o),ji(g,"seedLength",v),ptr(g,"state",l,p),ji(g,"stateLength",f),ji(g,"byteLength",c),Xt(g,"toJSON",m),Xt(g,"MIN",(y.MIN-1)/Fc),Xt(g,"MAX",(y.MAX-1)/Fc),y;function o(){var d=e[Le];return ln(d,a,1,new Re(d),1)}function v(){return e[Le]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return ln(d,e,1,new Re(d),1)}function p(d){var h;if(!dtr(d))throw new TypeError(Qe("invalid argument. Must provide an Int32Array. Value: `%s`.",d));if(h=mtr(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?ln(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Re(d.length)),ln(d.length,d,1,e,1)),t=new Re(e.buffer,e.byteOffset+(Mi+1)*e.BYTES_PER_ELEMENT,1),a=new Re(e.buffer,e.byteOffset+(Le+1)*e.BYTES_PER_ELEMENT,e[Le])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=Oue(e),d.params=[],d}function y(){var d=t[0]|0;return d=_ue*d%To|0,t[0]=d,d|0}function g(){return(y()-1)/Fc}}ytr.exports=Tue});var qtr=s((DMe,htr)=>{"use strict";var Iue=xc(),Rue=Lc(),Lue=Iue({seed:Rue()});htr.exports=Lue});var Etr=s((HMe,wtr)=>{"use strict";var Pue=G(),btr=qtr(),Fue=xc();Pue(btr,"factory",Fue);wtr.exports=btr});var Str=s((zMe,Ntr)=>{"use strict";var xue=W(),jue=8;function Mue(r,e,t){var i,a;for(a=0;a<jue;a++)if(i=r(),xue(i))throw new Error("unexpected error. PRNG returned NaN.");for(a=t-1;a>=0;a--)e[a]=r();return e}Ntr.exports=Mue});var jc=s((WMe,Otr)=>{"use strict";var Bue=ya(),kue=Gr(),Cue=Bue-1;function Vue(){var r=kue(1+Cue*Math.random());return r|0}Otr.exports=Vue});var kc=s((XMe,Ltr)=>{"use strict";var Jt=G(),Bi=qr(),Atr=Nr(),Mc=vr(),Uue=mr(),Gue=de().isPrimitive,Due=Be(),Hue=nt().isPrimitive,_tr=U0(),pn=bi(),zue=Gr(),Pe=ni(),O0=ya(),Wue=Sr(),Xe=C(),Ttr=Str(),Itr=jc(),Bc=O0-1|0,Xue=O0-1|0,Jue=16807,xe=32,Fo=1,xo=3,ki=2,dn=xe+3,Fe=xe+6,A0=xe+7,Lo=dn+1,Po=dn+2;function Rtr(r,e){var t;return e?t="option":t="argument",r.length<A0+1?new RangeError(Xe("invalid %s. State array has insufficient length.",t)):r[0]!==Fo?new RangeError(Xe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Fo,r[0])):r[1]!==xo?new RangeError(Xe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,xo,r[1])):r[ki]!==xe?new RangeError(Xe("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,xe,r[ki])):r[dn]!==2?new RangeError(Xe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[dn])):r[Fe]!==r.length-A0?new RangeError(Xe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-A0,r[Fe])):null}function Yue(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!Uue(r))throw new TypeError(Xe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Mc(r,"copy")&&(i.copy=r.copy,!Gue(r.copy)))throw new TypeError(Xe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Mc(r,"state")){if(t=r.state,i.state=!0,!_tr(t))throw new TypeError(Xe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=Rtr(t,!0),u)throw u;i.copy===!1?e=t:(e=new Pe(t.length),pn(t.length,t,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,t[Fe])}if(a===void 0)if(Mc(r,"seed"))if(a=r.seed,i.seed=!0,Hue(a)){if(a>Xue)throw new RangeError(Xe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(Due(a)&&a.length>0)n=a.length,e=new Pe(A0+n),e[0]=Fo,e[1]=xo,e[ki]=xe,e[dn]=2,e[Po]=a[0],e[Fe]=n,pn.ndarray(n,a,1,0,e,1,Fe+1),t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,n),t=Ttr(y,t,xe),e[Lo]=t[0];else throw new TypeError(Xe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=Itr()|0}else a=Itr()|0;return t===void 0&&(e=new Pe(A0+1),e[0]=Fo,e[1]=xo,e[ki]=xe,e[dn]=2,e[Po]=a,e[Fe]=1,e[Fe+1]=a,t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,1),t=Ttr(y,t,xe),e[Lo]=t[0]),Jt(g,"NAME","minstd-shuffle"),Bi(g,"seed",o),Bi(g,"seedLength",v),Atr(g,"state",l,p),Bi(g,"stateLength",f),Bi(g,"byteLength",c),Jt(g,"toJSON",m),Jt(g,"MIN",1),Jt(g,"MAX",O0-1),Jt(g,"normalized",d),Jt(d,"NAME",g.NAME),Bi(d,"seed",o),Bi(d,"seedLength",v),Atr(d,"state",l,p),Bi(d,"stateLength",f),Bi(d,"byteLength",c),Jt(d,"toJSON",m),Jt(d,"MIN",(g.MIN-1)/Bc),Jt(d,"MAX",(g.MAX-1)/Bc),g;function o(){var h=e[Fe];return pn(h,a,1,new Pe(h),1)}function v(){return e[Fe]}function f(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return pn(h,e,1,new Pe(h),1)}function p(h){var q;if(!_tr(h))throw new TypeError(Xe("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(q=Rtr(h,!1),q)throw q;i.copy===!1?i.state&&h.length===e.length?pn(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new Pe(h.length)),pn(h.length,h,1,e,1)),t=new Pe(e.buffer,e.byteOffset+(ki+1)*e.BYTES_PER_ELEMENT,xe),a=new Pe(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,e[Fe])}function m(){var h={};return h.type="PRNG",h.name=g.NAME,h.state=Wue(e),h.params=[],h}function y(){var h=e[Po]|0;return h=Jue*h%O0|0,e[Po]=h,h|0}function g(){var h,q;return h=e[Lo],q=zue(xe*(h/O0)),h=t[q],e[Lo]=h,t[q]=y(),h}function d(){return(g()-1)/Bc}}Ltr.exports=Yue});var Ftr=s((JMe,Ptr)=>{"use strict";var Zue=kc(),$ue=jc(),Que=Zue({seed:$ue()});Ptr.exports=Que});var Mtr=s((YMe,jtr)=>{"use strict";var Kue=G(),xtr=Ftr(),roe=kc();Kue(xtr,"factory",roe);jtr.exports=xtr});var ktr=s((ZMe,Btr)=>{"use strict";var eoe=ae();function toe(r,e){for(var t=r(),i=1;t>eoe(-e);)i+=1,t*=r();return i-1}Btr.exports=toe});var Vtr=s(($Me,Ctr)=>{"use strict";var ioe=Gr();function aoe(r){return ioe(r)===r&&r<0}Ctr.exports=aoe});var Gtr=s((QMe,Utr)=>{"use strict";var noe=Vtr();Utr.exports=noe});var Htr=s((KMe,Dtr)=>{"use strict";var soe=Gtr(),uoe=n0();function ooe(r){return soe(r)?NaN:uoe(r+1)}Dtr.exports=ooe});var Wtr=s((rBe,ztr)=>{"use strict";var voe=Htr();ztr.exports=voe});var Ztr=s((eBe,Ytr)=>{"use strict";var foe=Wtr(),Xtr=Gr(),coe=Ou(),loe=Lr(),Jtr=Wr(),jo=br(),poe=Pf(),doe=1/12,goe=1/360;function moe(r,e){var t,i,a,n,u,o,v,f,c,l;for(t=loe(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,a=.86*u;;){if(l=r(),l<=a)return c=l/u-.43,c*=2*o/(.5-Jtr(c))+v,c+=e+.445,Xtr(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=coe(c)*.5-c,l=u*r()),n=.5-Jtr(c),(n>=.013||n>=l)&&(f=Xtr((2*o/n+v)*c+e+.445),l*=i/(o/(n*n)+v),c=(f+.5)*jo(e/f),c+=-e-poe+f,c-=(doe-goe/(f*f))/f,f>=10&&c>=jo(l*t)||(c=f*jo(e)-e-foe(f),f>=0&&f<=9&&c>=jo(l))))return f}}Ytr.exports=moe});var Qtr=s((tBe,$tr)=>{"use strict";var yoe=ktr(),hoe=Ztr();function qoe(r,e){return e<30?yoe(r,e):hoe(r,e)}$tr.exports=qoe});var Cc=s((iBe,nir)=>{"use strict";var Yt=G(),Mo=qr(),Ktr=Nr(),boe=Ur().isPrimitive,rir=mr(),eir=yr(),tir=vr(),iir=dr(),woe=Tr(),Bo=Hr().factory,Eoe=W(),Noe=Sr(),ko=C(),air=Qtr();function Soe(){var r,e,t,i;if(arguments.length===0)t=Bo();else if(arguments.length===1&&rir(arguments[0]))if(e=arguments[0],tir(e,"prng")){if(!eir(e.prng))throw new TypeError(ko("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bo(e);else{if(r=arguments[0],!boe(r))throw new TypeError(ko("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!rir(e))throw new TypeError(ko("invalid argument. Options argument must be an object. Value: `%s`.",e));if(tir(e,"prng")){if(!eir(e.prng))throw new TypeError(ko("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bo(e)}else t=Bo()}return r===void 0?i=p:i=l,Yt(i,"NAME","poisson"),e&&e.prng?(Yt(i,"seed",null),Yt(i,"seedLength",null),Ktr(i,"state",iir(null),woe),Yt(i,"stateLength",null),Yt(i,"byteLength",null),Yt(i,"toJSON",iir(null)),Yt(i,"PRNG",t)):(Mo(i,"seed",a),Mo(i,"seedLength",n),Ktr(i,"state",v,f),Mo(i,"stateLength",u),Mo(i,"byteLength",o),Yt(i,"toJSON",c),Yt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Noe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return air(t,r)}function p(m){return Eoe(m)||m<=0?NaN:air(t,m)}}nir.exports=Soe});var uir=s((aBe,sir)=>{"use strict";var Ooe=Cc(),Aoe=Ooe();sir.exports=Aoe});var Vc=s((nBe,vir)=>{"use strict";var _oe=G(),oir=uir(),Toe=Cc();_oe(oir,"factory",Toe);vir.exports=oir});var cir=s((sBe,fir)=>{"use strict";var Ioe=Ur().isPrimitive,Roe=Er().isPrimitive,Uc=C(),Loe=oe();function Poe(r,e){return Ioe(r)?!Roe(e)||Loe(e)?new TypeError(Uc("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Uc("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Uc("invalid argument. First argument must be a positive number. Value: `%s`.",r))}fir.exports=Poe});var zc=s((uBe,qir)=>{"use strict";var Ci=G(),Co=qr(),lir=Nr(),gn=vr(),pir=mr(),Gc=ht(),dir=de().isPrimitive,gir=yr(),mir=dr(),Foe=Tr(),yir=W(),mn=Vc().factory,Vo=tn().factory,Dc=bi(),Hc=me(),hir=q0(),xoe=Sr(),Zt=C(),joe=cir();function Moe(){var r,e,t,i,a,n,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=mn(i);else if(arguments.length===1){if(i=arguments[0],!pir(i))throw new TypeError(Zt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(gn(i,"copy")&&!dir(i.copy))throw new TypeError(Zt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(gn(i,"prng")){if(!gir(i.prng))throw new TypeError(Zt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=mn({prng:i.prng})}else{if(gn(i,"state")&&!Gc(i.state))throw new TypeError(Zt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=hir({},i),i.copy===!1?u=!1:i.state&&(i.state=Dc(i.state.length,i.state,1,new Hc(i.state.length),1)),i.copy=!1,t=mn(i)}}else{if(f=arguments[0],v=arguments[1],o=joe(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!pir(i))throw new TypeError(Zt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(gn(i,"copy")&&!dir(i.copy))throw new TypeError(Zt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(gn(i,"prng")){if(!gir(i.prng))throw new TypeError(Zt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=mn({prng:i.prng})}else{if(gn(i,"state")&&!Gc(i.state))throw new TypeError(Zt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=hir({},i),i.copy===!1?u=!1:i.state&&(i.state=Dc(i.state.length,i.state,1,new Hc(i.state.length),1)),i.copy=!1,t=mn(i)}}else i={copy:!1},t=mn(i)}return i&&i.prng?f===void 0?r=Vo({prng:i.prng}):r=Vo(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Vo({state:e,copy:!1}):r=Vo(f,v/(1-v),{state:e,copy:!1})),f===void 0?a=q:a=h,n=t.PRNG,Ci(a,"NAME","negative-binomial"),i&&i.prng?(Ci(a,"seed",null),Ci(a,"seedLength",null),lir(a,"state",mir(null),Foe),Ci(a,"stateLength",null),Ci(a,"byteLength",null),Ci(a,"toJSON",mir(null))):(Co(a,"seed",c),Co(a,"seedLength",l),lir(a,"state",y,g),Co(a,"stateLength",p),Co(a,"byteLength",m),Ci(a,"toJSON",d)),Ci(a,"PRNG",n),a;function c(){return n.seed}function l(){return n.seedLength}function p(){return n.stateLength}function m(){return n.byteLength}function y(){return n.state}function g(w){if(!Gc(w))throw new TypeError(Zt("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));u&&(w=Dc(w.length,w,1,new Hc(w.length),1)),n.state=w}function d(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=xoe(n.state),f===void 0?w.params=[]:w.params=[f,v],w}function h(){return t(r())}function q(w,A){return yir(w)||yir(A)||A<=0||A>=1?NaN:t(r(w,A/(1-A)))}}qir.exports=Moe});var wir=s((oBe,bir)=>{"use strict";var Boe=zc(),koe=Boe();bir.exports=koe});var Sir=s((vBe,Nir)=>{"use strict";var Coe=G(),Eir=wir(),Voe=zc();Coe(Eir,"factory",Voe);Nir.exports=Eir});var _ir=s((fBe,Air)=>{"use strict";var Uoe=Er().isPrimitive,Goe=Ur().isPrimitive,Oir=C(),Doe=oe();function Hoe(r,e){return!Uoe(r)||Doe(r)?new TypeError(Oir("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Goe(e)?null:new TypeError(Oir("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Air.exports=Hoe});var Iir=s((cBe,Tir)=>{"use strict";function zoe(r,e,t){return e+t*r()}Tir.exports=zoe});var Wc=s((lBe,Bir)=>{"use strict";var Vi=G(),Uo=qr(),Rir=Nr(),Lir=mr(),Pir=yr(),Fir=vr(),xir=dr(),Woe=Tr(),yn=Oi().factory,jir=W(),Xoe=Sr(),Go=C(),Joe=_ir(),Mir=Iir();function Yoe(){var r,e,t,i,a,n,u;if(arguments.length===0)e=yn();else if(arguments.length===1){if(t=arguments[0],!Lir(t))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Fir(t,"prng")){if(!Pir(t.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=yn({prng:t.prng})}else e=yn(t)}else{if(u=arguments[0],r=arguments[1],n=Joe(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Lir(t))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Fir(t,"prng")){if(!Pir(t.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=yn({prng:t.prng})}else e=yn(t)}else e=yn()}return u===void 0?a=g:a=y,i=e.PRNG,Vi(a,"NAME","normal"),t&&t.prng?(Vi(a,"seed",null),Vi(a,"seedLength",null),Rir(a,"state",xir(null),Woe),Vi(a,"stateLength",null),Vi(a,"byteLength",null),Vi(a,"toJSON",xir(null))):(Uo(a,"seed",o),Uo(a,"seedLength",v),Rir(a,"state",l,p),Uo(a,"stateLength",f),Uo(a,"byteLength",c),Vi(a,"toJSON",m)),Vi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Xoe(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return Mir(e,u,r)}function g(d,h){return jir(d)||jir(h)||h<=0?NaN:Mir(e,d,h)}}Bir.exports=Yoe});var Cir=s((pBe,kir)=>{"use strict";var Zoe=Wc(),$oe=Zoe();kir.exports=$oe});var Gir=s((dBe,Uir)=>{"use strict";var Qoe=G(),Vir=Cir(),Koe=Wc();Qoe(Vir,"factory",Koe);Uir.exports=Vir});var Wir=s((gBe,zir)=>{"use strict";var Dir=Ur().isPrimitive,Hir=C();function r1e(r,e){return Dir(r)?Dir(e)?null:new TypeError(Hir("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Hir("invalid argument. First argument must be a positive number. Value: `%s`.",r))}zir.exports=r1e});var Jir=s((mBe,Xir)=>{"use strict";var e1e=Vr();function t1e(r,e,t){return t/e1e(r(),1/e)}Xir.exports=t1e});var Xc=s((yBe,tar)=>{"use strict";var $t=G(),Do=qr(),Yir=Nr(),Zir=mr(),$ir=yr(),Qir=vr(),Kir=dr(),i1e=Tr(),Ho=Hr().factory,rar=W(),a1e=Sr(),zo=C(),n1e=Wir(),ear=Jir();function s1e(){var r,e,t,i,a,n;if(arguments.length===0)i=Ho();else if(arguments.length===1){if(t=arguments[0],!Zir(t))throw new TypeError(zo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Qir(t,"prng")){if(!$ir(t.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ho(t)}else{if(r=arguments[0],e=arguments[1],n=n1e(r,e),n)throw n;if(arguments.length>2){if(t=arguments[2],!Zir(t))throw new TypeError(zo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Qir(t,"prng")){if(!$ir(t.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ho(t)}else i=Ho()}return r===void 0?a=y:a=m,$t(a,"NAME","pareto-type1"),t&&t.prng?($t(a,"seed",null),$t(a,"seedLength",null),Yir(a,"state",Kir(null),i1e),$t(a,"stateLength",null),$t(a,"byteLength",null),$t(a,"toJSON",Kir(null)),$t(a,"PRNG",i)):(Do(a,"seed",u),Do(a,"seedLength",o),Yir(a,"state",c,l),Do(a,"stateLength",v),Do(a,"byteLength",f),$t(a,"toJSON",p),$t(a,"PRNG",i),i=i.normalized),a;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(g){i.state=g}function p(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=a1e(i.state),r===void 0?g.params=[]:g.params=[r,e],g}function m(){return ear(i,r,e)}function y(g,d){return rar(g)||rar(d)||g<=0||d<=0?NaN:ear(i,g,d)}}tar.exports=s1e});var aar=s((hBe,iar)=>{"use strict";var u1e=Xc(),o1e=u1e();iar.exports=o1e});var uar=s((qBe,sar)=>{"use strict";var v1e=G(),nar=aar(),f1e=Xc();v1e(nar,"factory",f1e);sar.exports=nar});var far=s((bBe,oar)=>{"use strict";var c1e=Lr(),l1e=br();function p1e(r,e){return e*c1e(-2*l1e(r()))}oar.exports=p1e});var Jc=s((wBe,yar)=>{"use strict";var Qt=G(),Wo=qr(),car=Nr(),d1e=Ur().isPrimitive,lar=mr(),par=yr(),dar=vr(),gar=dr(),g1e=Tr(),Xo=Hr().factory,m1e=W(),y1e=Sr(),Jo=C(),mar=far();function h1e(){var r,e,t,i;if(arguments.length===0)t=Xo();else if(arguments.length===1&&lar(arguments[0]))if(e=arguments[0],dar(e,"prng")){if(!par(e.prng))throw new TypeError(Jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xo(e);else{if(r=arguments[0],!d1e(r))throw new TypeError(Jo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!lar(e))throw new TypeError(Jo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dar(e,"prng")){if(!par(e.prng))throw new TypeError(Jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xo(e)}else t=Xo()}return r===void 0?i=p:i=l,Qt(i,"NAME","rayleigh"),e&&e.prng?(Qt(i,"seed",null),Qt(i,"seedLength",null),car(i,"state",gar(null),g1e),Qt(i,"stateLength",null),Qt(i,"byteLength",null),Qt(i,"toJSON",gar(null)),Qt(i,"PRNG",t)):(Wo(i,"seed",a),Wo(i,"seedLength",n),car(i,"state",v,f),Wo(i,"stateLength",u),Wo(i,"byteLength",o),Qt(i,"toJSON",c),Qt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=y1e(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return mar(t,r)}function p(m){return m1e(m)||m<=0?NaN:mar(t,m)}}yar.exports=h1e});var qar=s((EBe,har)=>{"use strict";var q1e=Jc(),b1e=q1e();har.exports=b1e});var Ear=s((NBe,war)=>{"use strict";var w1e=G(),bar=qar(),E1e=Jc();w1e(bar,"factory",E1e);war.exports=bar});var Qc=s((SBe,Lar)=>{"use strict";var Ui=G(),Yo=qr(),Nar=Nr(),hn=vr(),Sar=Ur().isPrimitive,Oar=mr(),Yc=ht(),Aar=de().isPrimitive,N1e=W(),_ar=yr(),Tar=dr(),S1e=Tr(),Zo=E0().factory,qn=Oi().factory,Zc=bi(),$c=me(),Iar=q0(),O1e=Sr(),pt=C(),Rar=Lr();function A1e(){var r,e,t,i,a,n,u,o;if(u=!0,arguments.length===0)a={copy:!1},t=qn(a);else if(arguments.length===1)if(Oar(arguments[0])){if(a=arguments[0],hn(a,"copy")&&!Aar(a.copy))throw new TypeError(pt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(hn(a,"prng")){if(!_ar(a.prng))throw new TypeError(pt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=qn({prng:a.prng})}else{if(hn(a,"state")&&!Yc(a.state))throw new TypeError(pt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Iar({},a),a.copy===!1?u=!1:a.state&&(a.state=Zc(a.state.length,a.state,1,new $c(a.state.length),1)),a.copy=!1,t=qn(a)}}else{if(o=arguments[0],!Sar(o))throw new TypeError(pt("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));a={copy:!1},t=qn(a)}else{if(o=arguments[0],!Sar(o))throw new TypeError(pt("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(a=arguments[1],!Oar(a))throw new TypeError(pt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(hn(a,"copy")&&!Aar(a.copy))throw new TypeError(pt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(hn(a,"prng")){if(!_ar(a.prng))throw new TypeError(pt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=qn({prng:a.prng})}else{if(hn(a,"state")&&!Yc(a.state))throw new TypeError(pt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Iar({},a),a.copy===!1?u=!1:a.state&&(a.state=Zc(a.state.length,a.state,1,new $c(a.state.length),1)),a.copy=!1,t=qn(a)}}return a&&a.prng?o===void 0?r=Zo({prng:a.prng}):r=Zo(o,{prng:a.prng}):(a.state?e=a.state:(e=t.state,t.state=e),o===void 0?r=Zo({state:e,copy:!1}):r=Zo(o,{state:e,copy:!1})),o===void 0?n=d:n=g,i=t.PRNG,Ui(n,"NAME","t"),a&&a.prng?(Ui(n,"seed",null),Ui(n,"seedLength",null),Nar(n,"state",Tar(null),S1e),Ui(n,"stateLength",null),Ui(n,"byteLength",null),Ui(n,"toJSON",Tar(null))):(Yo(n,"seed",v),Yo(n,"seedLength",f),Nar(n,"state",p,m),Yo(n,"stateLength",c),Yo(n,"byteLength",l),Ui(n,"toJSON",y)),Ui(n,"PRNG",i),n;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!Yc(h))throw new TypeError(pt("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));u&&(h=Zc(h.length,h,1,new $c(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=n.NAME,h.state=O1e(i.state),o===void 0?h.params=[]:h.params=[o],h}function g(){return t()/Rar(r()/o)}function d(h){return N1e(h)||h<=0?NaN:t()/Rar(r(h)/h)}}Lar.exports=A1e});var Far=s((OBe,Par)=>{"use strict";var _1e=Qc(),T1e=_1e();Par.exports=T1e});var Mar=s((ABe,jar)=>{"use strict";var I1e=G(),xar=Far(),R1e=Qc();I1e(xar,"factory",R1e);jar.exports=xar});var kar=s((_Be,Bar)=>{"use strict";var Kc=Er().isPrimitive,$o=C(),rl=oe();function L1e(r,e,t){return!Kc(r)||rl(r)?new TypeError($o("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Kc(e)||rl(e)?new TypeError($o("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Kc(t)||rl(t)?new TypeError($o("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError($o("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Bar.exports=L1e});var Uar=s((TBe,Var)=>{"use strict";var Car=Lr();function P1e(r,e,t,i){var a,n,u;return a=(i-e)/(t-e),u=r(),u<a?(n=(t-e)*(i-e),e+Car(n*u)):(n=(t-e)*(t-i),t-Car(n*(1-u)))}Var.exports=P1e});var tl=s((IBe,Jar)=>{"use strict";var Kt=G(),Qo=qr(),Gar=Nr(),Dar=mr(),Har=yr(),zar=vr(),War=dr(),F1e=Tr(),Ko=Hr().factory,el=W(),x1e=Sr(),r1=C(),j1e=kar(),Xar=Uar();function M1e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=Ko();else if(arguments.length===1){if(r=arguments[0],!Dar(r))throw new TypeError(r1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zar(r,"prng")){if(!Har(r.prng))throw new TypeError(r1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ko(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=j1e(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Dar(r))throw new TypeError(r1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zar(r,"prng")){if(!Har(r.prng))throw new TypeError(r1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ko(r)}else e=Ko()}return a===void 0?t=g:t=y,Kt(t,"NAME","triangular"),r&&r.prng?(Kt(t,"seed",null),Kt(t,"seedLength",null),Gar(t,"state",War(null),F1e),Kt(t,"stateLength",null),Kt(t,"byteLength",null),Kt(t,"toJSON",War(null)),Kt(t,"PRNG",e)):(Qo(t,"seed",o),Qo(t,"seedLength",v),Gar(t,"state",l,p),Qo(t,"stateLength",f),Qo(t,"byteLength",c),Kt(t,"toJSON",m),Kt(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=x1e(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return Xar(e,a,n,u)}function g(d,h,q){return el(d)||el(h)||el(q)||!(d<=q&&q<=h)?NaN:Xar(e,d,h,q)}}Jar.exports=M1e});var Zar=s((RBe,Yar)=>{"use strict";var B1e=tl(),k1e=B1e();Yar.exports=k1e});var Kar=s((LBe,Qar)=>{"use strict";var C1e=G(),$ar=Zar(),V1e=tl();C1e($ar,"factory",V1e);Qar.exports=$ar});var inr=s((PBe,tnr)=>{"use strict";var rnr=Er().isPrimitive,il=C(),enr=oe();function U1e(r,e){return!rnr(r)||enr(r)?new TypeError(il("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!rnr(e)||enr(e)?new TypeError(il("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(il("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}tnr.exports=U1e});var nnr=s((FBe,anr)=>{"use strict";function G1e(r,e,t){var i=r();return t*i+(1-i)*e}anr.exports=G1e});var al=s((xBe,pnr)=>{"use strict";var ri=G(),e1=qr(),snr=Nr(),unr=mr(),onr=yr(),vnr=vr(),fnr=dr(),D1e=Tr(),t1=Hr().factory,cnr=W(),H1e=Sr(),i1=C(),z1e=inr(),lnr=nnr();function W1e(){var r,e,t,i,a,n;if(arguments.length===0)e=t1();else if(arguments.length===1){if(r=arguments[0],!unr(r))throw new TypeError(i1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vnr(r,"prng")){if(!onr(r.prng))throw new TypeError(i1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=t1(r)}else{if(a=arguments[0],n=arguments[1],i=z1e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!unr(r))throw new TypeError(i1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vnr(r,"prng")){if(!onr(r.prng))throw new TypeError(i1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=t1(r)}else e=t1()}return a===void 0?t=y:t=m,ri(t,"NAME","uniform"),r&&r.prng?(ri(t,"seed",null),ri(t,"seedLength",null),snr(t,"state",fnr(null),D1e),ri(t,"stateLength",null),ri(t,"byteLength",null),ri(t,"toJSON",fnr(null)),ri(t,"PRNG",e)):(e1(t,"seed",u),e1(t,"seedLength",o),snr(t,"state",c,l),e1(t,"stateLength",v),e1(t,"byteLength",f),ri(t,"toJSON",p),ri(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=H1e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return lnr(e,a,n)}function y(g,d){return cnr(g)||cnr(d)||g>=d?NaN:lnr(e,g,d)}}pnr.exports=W1e});var gnr=s((jBe,dnr)=>{"use strict";var X1e=al(),J1e=X1e();dnr.exports=J1e});var hnr=s((MBe,ynr)=>{"use strict";var Y1e=G(),mnr=gnr(),Z1e=al();Y1e(mnr,"factory",Z1e);ynr.exports=mnr});var Enr=s((BBe,wnr)=>{"use strict";var qnr=Ur().isPrimitive,bnr=C();function $1e(r,e){return qnr(r)?qnr(e)?null:new TypeError(bnr("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(bnr("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}wnr.exports=$1e});var Snr=s((kBe,Nnr)=>{"use strict";var Q1e=Vr(),K1e=br();function r2e(r,e,t){return t*Q1e(-K1e(1-r()),1/e)}Nnr.exports=r2e});var nl=s((CBe,Pnr)=>{"use strict";var ei=G(),a1=qr(),Onr=Nr(),Anr=mr(),_nr=yr(),Tnr=vr(),Inr=dr(),e2e=Tr(),n1=Hr().factory,Rnr=W(),t2e=Sr(),s1=C(),i2e=Enr(),Lnr=Snr();function a2e(){var r,e,t,i,a,n;if(arguments.length===0)t=n1();else if(arguments.length===1){if(e=arguments[0],!Anr(e))throw new TypeError(s1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Tnr(e,"prng")){if(!_nr(e.prng))throw new TypeError(s1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=n1(e)}else{if(n=arguments[0],r=arguments[1],a=i2e(r,n),a)throw a;if(arguments.length>2){if(e=arguments[2],!Anr(e))throw new TypeError(s1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Tnr(e,"prng")){if(!_nr(e.prng))throw new TypeError(s1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=n1(e)}else t=n1()}return r===void 0?i=y:i=m,ei(i,"NAME","weibull"),e&&e.prng?(ei(i,"seed",null),ei(i,"seedLength",null),Onr(i,"state",Inr(null),e2e),ei(i,"stateLength",null),ei(i,"byteLength",null),ei(i,"toJSON",Inr(null)),ei(i,"PRNG",t)):(a1(i,"seed",u),a1(i,"seedLength",o),Onr(i,"state",c,l),a1(i,"stateLength",v),a1(i,"byteLength",f),ei(i,"toJSON",p),ei(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=t2e(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return Lnr(t,n,r)}function y(g,d){return Rnr(g)||Rnr(d)||g<=0||d<=0?NaN:Lnr(t,g,d)}}Pnr.exports=a2e});var xnr=s((VBe,Fnr)=>{"use strict";var n2e=nl(),s2e=n2e();Fnr.exports=s2e});var Bnr=s((UBe,Mnr)=>{"use strict";var u2e=G(),jnr=xnr(),o2e=nl();u2e(jnr,"factory",o2e);Mnr.exports=jnr});var Cnr=s((GBe,knr)=>{"use strict";var v2e=qe(),f2e=ye().isPrimitive,c2e=C(),l2e=B0();function p2e(r){if(f2e(r))return r;if(v2e(r))return l2e(r);throw new TypeError(c2e("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}knr.exports=p2e});var Unr=s((DBe,Vnr)=>{"use strict";var d2e=Cnr();Vnr.exports=d2e});var Dnr=s((HBe,Gnr)=>{"use strict";var Or=$r(),g2e=Kz().factory,m2e=fW().factory,y2e=PX().factory,h2e=yJ().factory,q2e=QJ().factory,b2e=pY().factory,w2e=HY().factory,E2e=lZ().factory,N2e=E0().factory,S2e=s$().factory,O2e=A$().factory,A2e=H$().factory,_2e=aQ().factory,T2e=NQ().factory,I2e=VQ().factory,R2e=tn().factory,L2e=eK().factory,P2e=bK().factory,F2e=HK().factory,x2e=Oi().factory,j2e=srr().factory,M2e=Arr().factory,B2e=Hrr().factory,k2e=Ier().factory,C2e=Xer().factory,V2e=ctr().factory,U2e=Etr().factory,G2e=Mtr().factory,D2e=Hr().factory,H2e=Sir().factory,z2e=Gir().factory,W2e=uar().factory,X2e=Vc().factory,J2e=Ear().factory,Y2e=Mar().factory,Z2e=Kar().factory,$2e=hnr().factory,Q2e=Bnr().factory,K2e=Unr();function rve(r){return Or(r,"arcsine",g2e),Or(r,"bernoulli",m2e),Or(r,"beta",y2e),Or(r,"betaprime",h2e),Or(r,"binomial",q2e),Or(r,"boxMuller",b2e),Or(r,"cauchy",w2e),Or(r,"chi",E2e),Or(r,"chisquare",N2e),Or(r,"cosine",S2e),Or(r,"discreteUniform",O2e),Or(r,"erlang",A2e),Or(r,"exponential",_2e),Or(r,"f",T2e),Or(r,"frechet",I2e),Or(r,"gamma",R2e),Or(r,"geometric",L2e),Or(r,"gumbel",P2e),Or(r,"hypergeometric",F2e),Or(r,"improvedZiggurat",x2e),Or(r,"invgamma",j2e),Or(r,"kumaraswamy",M2e),Or(r,"laplace",B2e),Or(r,"levy",k2e),Or(r,"logistic",C2e),Or(r,"lognormal",V2e),Or(r,"minstd",U2e),Or(r,"minstdShuffle",G2e),Or(r,"mt19937",D2e),Or(r,"negativeBinomial",H2e),Or(r,"normal",z2e),Or(r,"pareto1",W2e),Or(r,"poisson",X2e),Or(r,"rayleigh",J2e),Or(r,"t",Y2e),Or(r,"triangular",Z2e),Or(r,"uniform",$2e),Or(r,"weibull",Q2e),r.base={},Or(r.base,"normalizeSeed",K2e),r}Gnr.exports=rve});var znr=s((zBe,Hnr)=>{"use strict";var eve=mr(),u1=vr(),tve=ye().isPrimitive,ive=nt().isPrimitive,ave=be().isPrimitive,nve=ss().isPrimitive,_0=C();function sve(r,e){return eve(e)?u1(e,"period")&&(r.period=e.period,!ive(e.period))?new TypeError(_0("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):u1(e,"amplitude")&&(r.amplitude=e.amplitude,!nve(e.amplitude))?new TypeError(_0("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):u1(e,"offset")&&(r.offset=e.offset,!tve(e.offset))?new TypeError(_0("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):u1(e,"iter")&&(r.iter=e.iter,!ave(e.iter))?new TypeError(_0("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(_0("invalid argument. Options argument must be an object. Value: `%s`.",e))}Hnr.exports=sve});var Ynr=s((WBe,Jnr)=>{"use strict";var sl=G(),Wnr=Tn(),uve=Y3(),ove=js(),vve=xs(),fve=Ue(),cve=znr();function Xnr(r){var e,t,i,a,n,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(a=cve(e,r),a))throw a;return n=(e.period-e.offset)%e.period,n<0&&(n+=e.period),n-=1,u=fve/e.period,o=e.amplitude/vve,v=0,t={},sl(t,"next",f),sl(t,"return",c),Wnr&&sl(t,Wnr,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(n+=1,n%=e.period,{value:o*ove(uve(u*n)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return Xnr(e)}}Jnr.exports=Xnr});var $nr=s((XBe,Znr)=>{"use strict";var lve=Ynr();Znr.exports=lve});var Knr=s((JBe,Qnr)=>{"use strict";var pve=$r(),dve=$nr();function gve(r){return pve(r,"iterSawtoothWave",dve),r}Qnr.exports=gve});var e0r=s((YBe,r0r)=>{"use strict";var mve=17976931348623157e292;r0r.exports=mve});var o1=s((ZBe,t0r)=>{"use strict";var yve=709.782712893384;t0r.exports=yve});var a0r=s(($Be,i0r)=>{"use strict";var hve=ae();function qve(r,e){var t,i,a,n;if(a=hve(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}i0r.exports=qve});var s0r=s((QBe,n0r)=>{"use strict";function bve(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}n0r.exports=bve});var o0r=s((KBe,u0r)=>{"use strict";function wve(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}u0r.exports=wve});var f0r=s((rke,v0r)=>{"use strict";function Eve(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}v0r.exports=Eve});var l0r=s((eke,c0r)=>{"use strict";function Nve(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}c0r.exports=Nve});var d0r=s((tke,p0r)=>{"use strict";function Sve(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}p0r.exports=Sve});var m0r=s((ike,g0r)=>{"use strict";function Ove(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}g0r.exports=Ove});var h0r=s((ake,y0r)=>{"use strict";function Ave(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}y0r.exports=Ave});var b0r=s((nke,q0r)=>{"use strict";function _ve(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}q0r.exports=_ve});var S0r=s((ske,N0r)=>{"use strict";var Tve=W(),w0r=ae(),Ive=bt(),Rve=hr(),Lve=Ir(),Pve=s0r(),Fve=o0r(),xve=f0r(),jve=l0r(),Mve=d0r(),Bve=m0r(),kve=h0r(),Cve=b0r(),v1=1e-300,Vve=13877787807814457e-33,E0r=.8450629115104675,Uve=.12837916709551256,Gve=1,Dve=-.0023621185607526594,Hve=1,zve=-.009864944034847148,Wve=1,Xve=-.0098649429247001,Jve=1;function Yve(r){var e,t,i,a,n,u,o,v;if(Tve(r))return NaN;if(r===Rve)return 0;if(r===Lve)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Vve?1-r:(i=r*r,a=Uve+i*Pve(i),n=Gve+i*Fve(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=Dve+n*xve(n),v=Hve+n*jve(n),e?1+E0r+o/v:1-E0r-o/v;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=zve+n*Mve(n),n=Wve+n*Bve(n);else{if(r<-6)return 2-v1;a=Xve+n*kve(n),n=Jve+n*Cve(n)}return i=Ive(t,0),a=w0r(-(i*i)-.5625)*w0r((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-v1:v1*v1}N0r.exports=Yve});var fa=s((uke,O0r)=>{"use strict";var Zve=S0r();O0r.exports=Zve});var T0r=s((oke,_0r)=>{"use strict";var $ve=fa(),A0r=Lr(),Qve=ae(),Kve=Ue();function rfe(r,e){var t,i,a,n,u;if(n=$ve(A0r(e)),n!==0&&r>1){for(i=Qve(-e)/A0r(Kve*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}_0r.exports=rfe});var ul=s((vke,I0r)=>{"use strict";var efe=-708.3964185322641;I0r.exports=efe});var F0r=s((fke,P0r)=>{"use strict";var bn=ae(),f1=Vr(),tfe=br(),R0r=o1(),L0r=ul();function ife(r,e){var t,i;return i=r*tfe(e),e>=1?i<R0r&&-e>L0r?t=f1(e,r)*bn(-e):r>=1?t=f1(e/bn(e/r),r):t=bn(i-e):i>L0r?t=f1(e,r)*bn(-e):e/r<R0r?t=f1(e/bn(e/r),r):t=bn(i-e),t}P0r.exports=ife});var ol=s((cke,x0r)=>{"use strict";function afe(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}x0r.exports=afe});var M0r=s((lke,j0r)=>{"use strict";var nfe=Function;j0r.exports=nfe});var k0r=s((pke,B0r)=>{"use strict";var sfe=M0r();B0r.exports=sfe});var V0r=s((dke,C0r)=>{"use strict";var ufe=k0r(),ofe=ol();function vfe(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new ufe(e)();function n(u){return ofe(r,u)}}C0r.exports=vfe});var D0r=s((gke,G0r)=>{"use strict";var ffe=G(),U0r=ol(),cfe=V0r();ffe(U0r,"factory",cfe);G0r.exports=U0r});var ca=s((mke,H0r)=>{"use strict";var lfe=2220446049250313e-31;H0r.exports=lfe});var W0r=s((yke,z0r)=>{"use strict";var pfe=eval;z0r.exports=pfe});var J0r=s((hke,X0r)=>{"use strict";var dfe=W0r();function gfe(){var r;try{dfe('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}X0r.exports=gfe});var vl=s((qke,Y0r)=>{"use strict";var mfe=J0r();Y0r.exports=mfe});var $0r=s((bke,Z0r)=>{"use strict";var c1=Wr(),yfe=ca(),hfe=1e6;function qfe(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||yfe,n=o.maxTerms||hfe,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,c1(i*u)>=c1(a)||--n===0)break}else do a=r(),u+=a;while(c1(i*u)<c1(a)&&--n);return u}Z0r.exports=qfe});var rsr=s((wke,K0r)=>{"use strict";var Q0r=Wr(),bfe=ca(),wfe=1e6;function Efe(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||bfe,a=u.maxTerms||wfe,n=u.initialValue||0;do i=r(),n+=i;while(Q0r(t*n)<Q0r(i)&&--a);return n}K0r.exports=Efe});var l1=s((Eke,esr)=>{"use strict";var Nfe=vl(),Sfe=$0r(),Ofe=rsr(),fl;Nfe()?fl=Sfe:fl=Ofe;esr.exports=fl});var isr=s((Nke,tsr)=>{"use strict";function Afe(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}tsr.exports=Afe});var nsr=s((Ske,asr)=>{"use strict";var _fe=Wr(),Tfe=br(),Ife=ca(),Rfe=l1(),Lfe=isr();function Pfe(r){var e,t;return r<=-1?NaN:(t=_fe(r),t>.95?Tfe(1+r)-r:t<Ife?-r*r/2:(e={initialValue:-r},Rfe(Lfe(r),e)))}asr.exports=Pfe});var usr=s((Oke,ssr)=>{"use strict";var Ffe=nsr();ssr.exports=Ffe});var vsr=s((Ake,osr)=>{"use strict";function xfe(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}osr.exports=xfe});var csr=s((_ke,fsr)=>{"use strict";function jfe(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}fsr.exports=jfe});var psr=s((Tke,lsr)=>{"use strict";function Mfe(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}lsr.exports=Mfe});var gsr=s((Ike,dsr)=>{"use strict";function Bfe(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}dsr.exports=Bfe});var ysr=s((Rke,msr)=>{"use strict";function kfe(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}msr.exports=kfe});var qsr=s((Lke,hsr)=>{"use strict";function Cfe(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}hsr.exports=Cfe});var wsr=s((Pke,bsr)=>{"use strict";function Vfe(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}bsr.exports=Vfe});var Nsr=s((Fke,Esr)=>{"use strict";function Ufe(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Esr.exports=Ufe});var Osr=s((xke,Ssr)=>{"use strict";function Gfe(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Ssr.exports=Gfe});var _sr=s((jke,Asr)=>{"use strict";var Dfe=D0r(),Hfe=usr(),zfe=fa(),cl=Lr(),Wfe=ae(),Xfe=di(),Jfe=vsr(),Yfe=csr(),Zfe=psr(),$fe=gsr(),Qfe=ysr(),Kfe=qsr(),r3e=wsr(),e3e=Nsr(),t3e=Osr(),Ke=[0,0,0,0,0,0,0,0,0,0];function i3e(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-Hfe(i),n=r*a,u=cl(2*a),e<r&&(u=-u),Ke[0]=Jfe(u),Ke[1]=Yfe(u),Ke[2]=Zfe(u),Ke[3]=$fe(u),Ke[4]=Qfe(u),Ke[5]=Kfe(u),Ke[6]=r3e(u),Ke[7]=e3e(u),Ke[8]=t3e(u),Ke[9]=-.0005967612901927463,t=Dfe(Ke,1/r),t*=Wfe(-n)/cl(Xfe*r),e<r&&(t=-t),t+=zfe(cl(n))/2,t}Asr.exports=i3e});var Isr=s((Mke,Tsr)=>{"use strict";function a3e(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}Tsr.exports=a3e});var Lsr=s((Bke,Rsr)=>{"use strict";var n3e=l1(),s3e=Isr();function u3e(r,e,t){var i,a;return t=t||0,a=s3e(r,e),i=n3e(a,{initialValue:t}),i}Rsr.exports=u3e});var Fsr=s((kke,Psr)=>{"use strict";function o3e(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Psr.exports=o3e});var jsr=s((Cke,xsr)=>{"use strict";var v3e=Fsr();xsr.exports=v3e});var Bsr=s((Vke,Msr)=>{"use strict";var f3e=jsr();Msr.exports=f3e});var Vsr=s((Uke,Csr)=>{"use strict";var c3e=_f(),ksr=W(),ll=Ir();function l3e(r,e){return ksr(r)||ksr(e)?NaN:r===ll||e===ll?ll:r===e&&r===0?c3e(r)?r:e:r<e?r:e}Csr.exports=l3e});var Gsr=s((Gke,Usr)=>{"use strict";var p3e=Vsr();Usr.exports=p3e});var Hsr=s((Dke,Dsr)=>{"use strict";var d3e=10.900511;Dsr.exports=d3e});var pl=s((Hke,zsr)=>{"use strict";var g3e=2.718281828459045;zsr.exports=g3e});var Jsr=s((zke,Xsr)=>{"use strict";var m3e=Bsr(),y3e=n0(),h3e=Ja(),q3e=li(),b3e=Lr(),w3e=Wr(),Gi=ae(),T0=Vr(),dl=c3(),gl=Gsr(),Wsr=br(),p1=o1(),I0=ul(),ml=Hsr(),E3e=pl();function N3e(r,e){var t,i,a,n,u,o,v;return a=r+ml-.5,v=(e-r-ml+.5)/a,r<1?e<=I0?Gi(r*Wsr(e)-e-y3e(r)):T0(e,r)*Gi(-e)/h3e(r):(w3e(v*v*r)<=100&&r>150?(t=r*(q3e(v)-v)+e*(.5-ml)/a,t=Gi(t)):(n=r*Wsr(e/a),u=r-e,gl(n,u)<=I0||dl(n,u)>=p1?(i=u/r,gl(n,u)/2>I0&&dl(n,u)/2<p1?(o=T0(e/a,r/2)*Gi(u/2),t=o*o):gl(n,u)/4>I0&&dl(n,u)/4<p1&&e>r?(o=T0(e/a,r/4)*Gi(u/4),t=o*o,t*=t):i>I0&&i<p1?t=T0(e*Gi(i)/a,r):t=Gi(n+u)):t=T0(e/a,r)*Gi(u)),t*=b3e(a/E3e)/m3e(r),t)}Xsr.exports=N3e});var Zsr=s((Wke,Ysr)=>{"use strict";var S3e=.34657359027997264;Ysr.exports=S3e});var Qsr=s((Xke,$sr)=>{"use strict";function O3e(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}$sr.exports=O3e});var aur=s((Jke,iur)=>{"use strict";var A3e=W(),Ksr=ie(),yl=wt(),_3e=Ha(),rur=hr(),T3e=Ir(),eur=ft(),I3e=Zsr(),R3e=Qsr(),L3e=709.782712893384,hl=.6931471803691238,ql=19082149292705877e-26,tur=1.4426950408889634,P3e=38.816242111356935,F3e=1.0397207708399179;function x3e(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(r===rur||A3e(r))return r;if(r===T3e)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=P3e){if(i)return-1;if(v>=L3e)return rur}if(u=Ksr(v)|0,v>I3e)v<F3e?i?(a=r+hl,n=-ql,m=-1):(a=r-hl,n=ql,m=1):(i?m=tur*r-.5:m=tur*r+.5,m|=0,l=m,a=r-l*hl,n=l*ql),r=a-n,c=a-r-n;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*R3e(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=_3e(eur+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(a=Ksr(v)+(m<<20)|0,v=yl(v,a)):v*=t,v-1):(l=1,m<20?(a=1072693248-(2097152>>m)|0,l=yl(l,a),v=l-(p-r)):(a=eur-m<<20|0,l=yl(l,a),v=r-(p+l),v+=1),v*=t,v))}iur.exports=x3e});var bl=s((Yke,nur)=>{"use strict";var j3e=aur();nur.exports=j3e});var vur=s((Zke,our)=>{"use strict";var sur=W(),uur=Wr(),M3e=bl(),B3e=br(),k3e=Vr(),C3e=zs();function V3e(r,e){var t;if(sur(r)||sur(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((uur(e*(r-1))<.5||uur(e)<.2)&&(t=B3e(r)*e,t<.5))return M3e(t)}else if(C3e(e)!==e)return NaN;return k3e(r,e)-1}our.exports=V3e});var cur=s(($ke,fur)=>{"use strict";var U3e=vur();fur.exports=U3e});var pur=s((Qke,lur)=>{"use strict";function G3e(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}lur.exports=G3e});var gur=s((Kke,dur)=>{"use strict";function D3e(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}dur.exports=D3e});var yur=s((rCe,mur)=>{"use strict";function H3e(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}mur.exports=H3e});var qur=s((eCe,hur)=>{"use strict";var wl=br(),z3e=ca(),W3e=pur(),X3e=gur(),J3e=yur(),Y3e=.15896368026733398,Z3e=.5281534194946289,$3e=.45201730728149414;function Q3e(r,e,t){var i,a,n,u;if(r<z3e)return-wl(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=wl(r);while(r>=3);t=r-2}return n=t*(r+1),u=W3e(t),a+=n*Y3e+n*u,a}return r<1&&(a+=-wl(r),t=e,e=r,r+=1),r<=1.5?(n=X3e(e),i=e*t,a+=i*Z3e+i*n,a):(n=t*e,u=J3e(-t),a+=n*$3e+n*u,a)}hur.exports=Q3e});var Sur=s((tCe,Nur)=>{"use strict";var bur=Ja(),wur=bl(),K3e=li(),rce=W(),Eur=qur();function ece(r){return rce(r)?NaN:r<0?r<-.5?bur(1+r)-1:wur(-K3e(r)+Eur(r+2,r+1,r)):r<2?wur(Eur(r+1,r,r-1)):bur(1+r)-1}Nur.exports=ece});var Aur=s((iCe,Our)=>{"use strict";var tce=Sur();Our.exports=tce});var Tur=s((aCe,_ur)=>{"use strict";function ice(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}_ur.exports=ice});var Rur=s((nCe,Iur)=>{"use strict";var ace=cur(),nce=l1(),sce=Aur(),uce=Tur();function oce(r,e,t){var i,a,n,u,o;return a=sce(r),n=(a+1)/r,u=ace(e,r),a-=u,a/=r,o=uce(r,e),u+=1,i=t?n:0,a=-u*nce(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}Iur.exports=oce});var El=s((sCe,Lur)=>{"use strict";var vce=11754943508222875e-54;Lur.exports=vce});var Fur=s((uCe,Pur)=>{"use strict";var d1=Wr(),dt=El(),fce=ca(),cce=1e6;function lce(r,e,t){var i,a,n,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],n=f[0],u===0&&(u=dt),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=dt),o=f[1]+f[0]/o,o===0&&(o=dt),v=1/v,a=o*v,u*=a);while(d1(a-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=dt),o=f[1]+f[0]/o,o===0&&(o=dt),v=1/v,a=o*v,u*=a);while(f&&d1(a-1)>e&&--t);return n/u}function pce(r,e,t){var i,a,n,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),n=v[1],n===0&&(n=dt),u=n,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=dt),u=v[1]+v[0]/u,u===0&&(u=dt),o=1/o,a=u*o,n*=a);while(v&&d1(a-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=dt),u=v[1]+v[0]/u,u===0&&(u=dt),o=1/o,a=u*o,n*=a);while(v&&d1(a-1)>e&&--t);return n}function dce(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||cce,a=i.tolerance||fce,i.keep?pce(r,a,t):lce(r,a,t)}Pur.exports=dce});var Mur=s((oCe,jur)=>{"use strict";var xur=Wr(),gce=ca(),wn=El(),mce=1e6;function yce(r,e,t){var i,a,n,u,o,v;v=r(),o=v[1],a=v[0],o===0&&(o=wn),n=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=wn),n=v[1]+v[0]/n,n===0&&(n=wn),u=1/u,i=n*u,o*=i);while(v&&xur(i-1)>e&&--t);return a/o}function hce(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=wn),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=wn),a=o[1]+o[0]/a,a===0&&(a=wn),n=1/n,i=a*n,u*=i);while(o&&xur(i-1)>e&&--t);return u}function qce(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||gce,t=i.maxIter||mce,i.keep?hce(r,a,t):yce(r,a,t)}jur.exports=qce});var kur=s((vCe,Bur)=>{"use strict";var bce=vl(),wce=Fur(),Ece=Mur(),Nl;bce()?Nl=wce:Nl=Ece;Bur.exports=Nl});var Vur=s((fCe,Cur)=>{"use strict";function Nce(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}Cur.exports=Nce});var Gur=s((cCe,Uur)=>{"use strict";var Sce=kur(),Oce=Vur();function Ace(r,e){var t=Oce(r,e);return 1/(e-r+1+Sce(t))}Uur.exports=Ace});var Qur=s((lCe,$ur)=>{"use strict";var _ce=n0(),Tce=Gr(),R0=Ja(),Dur=Wr(),Ice=ae(),Hur=Vr(),rt=br(),Rce=Lf(),zur=e0r(),Lce=Tf(),Wur=o1(),Pce=hr(),Fce=a0r(),xce=T0r(),Xur=F0r(),jce=_sr(),Sl=Lsr(),Jur=Jsr(),Mce=Rur(),Yur=Gur(),Bce=170;function Zur(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(r<0||e<=0)return NaN;if(n=t===void 0?!0:t,l=i,p=0,e>=Bce&&!n)return l&&e*4<r?(p=e*rt(r)-r,p+=rt(Yur(e,r))):!l&&e>4*r?(p=e*rt(r)-r,o=0,p+=rt(Sl(e,r,o)/e)):(p=Zur(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=rt(p)-e+(e-.5)*rt(e),p+=rt(Lce)):(p=e*rt(r)-r,o=0,p+=rt(Sl(e,r,o)/e)):p=rt(p)+_ce(e)),p>Wur?Pce:Ice(p);switch(c=e<30&&e<=r+1&&r<Wur,c?(h=Tce(e),m=h===e,v=m?!1:Dur(h-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<Rce&&e>1?u=6:r<.5?-.4/rt(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,n&&e>20&&(y=Dur((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=Fce(e,r),n===!1&&(p*=R0(e));break;case 1:p=xce(e,r),n===!1&&(p*=R0(e));break;case 2:p=n?Jur(e,r):Xur(e,r),p!==0&&(o=0,a=!1,l&&(o=n?1:R0(e),n||p>=1||zur*p>o?(o/=p,n||e<1||zur/e>o?(o*=-e,a=!0):o=0):o=0)),p*=Sl(e,r,o)/e,a&&(l=!1,p=-p);break;case 3:l=!l,d=Mce(e,r,l),p=d[0],q=d[1],l=!1,n&&(p/=q);break;case 4:p=n?Jur(e,r):Xur(e,r),p!==0&&(p*=Yur(e,r));break;case 5:p=jce(e,r),r>=e&&(l=!l);break;case 6:p=n?Hur(r,e)/R0(e+1):Hur(r,e)/e,p*=1-e*r/(e+1);break}return n&&p>1&&(p=1),l&&(g=n?1:R0(e),p=g-p),p}$ur.exports=Zur});var Ol=s((pCe,Kur)=>{"use strict";var kce=Qur();Kur.exports=kce});var eor=s((dCe,ror)=>{"use strict";var Cce=Ol(),Al=W(),Vce=hr();function Uce(r,e,t){return Al(r)||Al(e)||Al(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Vce?1:Cce(r*t,e)}ror.exports=Uce});var aor=s((gCe,ior)=>{"use strict";var Gce=dr(),Dce=ku().factory,Hce=Ol(),tor=W(),zce=hr();function Wce(r,e){if(tor(r)||tor(e)||r<0||e<=0)return Gce(NaN);if(r===0)return Dce(0);return t;function t(i){return i<=0?0:i===zce?1:Hce(i*e,r)}}ior.exports=Wce});var _l=s((mCe,sor)=>{"use strict";var Xce=G(),nor=eor(),Jce=aor();Xce(nor,"factory",Jce);sor.exports=nor});var oor=s((yCe,uor)=>{"use strict";var Yce=_l();function Zce(r,e){return Yce(r,e/2,.5)}uor.exports=Zce});var cor=s((hCe,vor)=>{"use strict";var $ce=_l().factory;function Qce(r){return $ce(r/2,.5)}vor.exports=Qce});var dor=s((qCe,por)=>{"use strict";var Kce=G(),lor=oor(),rle=cor();Kce(lor,"factory",rle);por.exports=lor});var hor=s((bCe,yor)=>{"use strict";var ele=mr(),tle=vr(),ile=us(),gor=C(),mor=["values","indices","*"];function ale(r,e){return ele(e)?tle(e,"returns")&&(r.returns=e.returns,ile(mor,r.returns)===-1)?new TypeError(gor('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",mor.join('", "'),r.returns)):null:new TypeError(gor("invalid argument. Options argument must be an object. Value: `%s`.",e))}yor.exports=ale});var bor=s((wCe,qor)=>{"use strict";var nle=vr();function sle(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),nle(t,a)?t[a].push(r[n]):t[a]=[r[n]];return t}qor.exports=sle});var Eor=s((ECe,wor)=>{"use strict";var ule=vr();function ole(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),ule(t,a)?t[a].push(n):t[a]=[n];return t}wor.exports=ole});var Sor=s((NCe,Nor)=>{"use strict";var vle=vr();function fle(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),vle(t,a)?t[a].push([n,r[n]]):t[a]=[[n,r[n]]];return t}Nor.exports=fle});var Tor=s((SCe,_or)=>{"use strict";var Oor=Be(),Aor=C(),cle=hor(),lle=bor(),ple=Eor(),dle=Sor();function gle(r,e,t){var i,a,n;if(!Oor(r))throw new TypeError(Aor("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)n=e;else{if(a=cle(i,e),a)throw a;n=t}if(!Oor(n))throw new TypeError(Aor("invalid argument. Last argument must be a collection. Value: `%s`.",n));if(r.length!==n.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?lle(r,n):i.returns==="indices"?ple(r,n):dle(r,n)}_or.exports=gle});var Ror=s((OCe,Ior)=>{"use strict";var mle=Tor();Ior.exports=mle});var Por=s((ACe,Lor)=>{"use strict";function yle(r){var e,t,i,a,n,u;for(e=0,t=0,a=0,i=r.length,n=0;n<i;n++)u=r[n],e=u-t,t+=e/(n+1),a+=e*(u-t);return a/(n-1)}Lor.exports=yle});var jor=s((_Ce,xor)=>{"use strict";var hle=qe(),qle=Er().isPrimitive,ble=mr(),wle=oe(),For=vr(),Tl=C();function Ele(r,e){return ble(e)?For(e,"alpha")&&(r.alpha=e.alpha,!qle(r.alpha)||wle(r.alpha))?new TypeError(Tl("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):For(e,"groups")&&(r.groups=e.groups,!hle(r.groups))?new TypeError(Tl("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(Tl("invalid argument. Options argument must be an object. Value: `%s`.",e))}xor.exports=Ele});var Gor=s((TCe,Uor)=>{"use strict";var Mor=W(),g1=Ve(),Bor=Vr(),Nle=Wr(),kor=cf(),Sle=za(),Cor=Ss(),Ole=Wv(),Ale=Os(),_le=Sle+1,Vor=1e308;function Tle(r,e){var t,i;return Mor(r)||Mor(e)||g1(e)?NaN:g1(r)||r===0||e<Ale||Nle(r)>_le&&e<=0?r:e>Cor?0*r:e<Ole?(t=Bor(10,-(e+Cor)),i=r*Vor*t,g1(i)?r:kor(i)/Vor/t):(t=Bor(10,-e),i=r*t,g1(i)?r:kor(i)/t)}Uor.exports=Tle});var Hor=s((ICe,Dor)=>{"use strict";var Ile=Gor();Dor.exports=Ile});var Xor=s((RCe,Wor)=>{"use strict";var Rle=nt(),Lle=mr(),Ple=de().isPrimitive,zor=vr(),Il=C(),Rl=Hor();function Fle(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Lle(r))throw new TypeError(Il("invalid argument. First argument must be an object. Value: `%s`.",r));if(zor(r,"digits")){if(!Rle(r.digits))throw new TypeError(Il("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(zor(r,"decision")){if(!Ple(r.decision))throw new TypeError(Il("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Rl(this.pValue,-t)+`
`,i+="    statistic: "+Rl(this.statistic,-t)+`
`,i+="    df: "+Rl(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Wor.exports=Fle});var Zor=s((LCe,Yor)=>{"use strict";var xle=Be(),jle=mr(),la=$r(),Mle=ka(),m1=C(),Ble=dor(),kle=Ror(),Jor=br(),Cle=Por(),Vle=jor(),Ule=Xor();function Gle(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;if(v=[],e=arguments.length,f={},jle(arguments[e-1])&&(r=arguments[e-1],e-=1,m=Vle(f,r),m))throw m;if(f.groups){if(a=kle(arguments[0],f.groups),i=Mle(a),e=i.length,e<2)throw new Error(m1("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(w=0;w<e;w++)v.push(a[i[w]])}else for(w=0;w<e;w++)v.push(arguments[w]);for(u=0,t=0,o=0,y=0,h=new Array(e),q=h.slice(),w=0;w<e;w++){if(p=v[w],!xle(p))throw new TypeError(m1("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(m1("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[w]=p.length-1,u+=h[w],t+=1/h[w],q[w]=Cle(p),o+=h[w]*q[w],y+=h[w]*Jor(q[w])}if(o/=u,f.alpha===void 0?n=.05:n=f.alpha,n<0||n>1)throw new RangeError(m1("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));return l=u*Jor(o)-y,l/=1+(t-1/u)/(3*(e-1)),d=e-1,c=1-Ble(l,d),g={},la(g,"rejected",c<=n),la(g,"alpha",n),la(g,"pValue",c),la(g,"statistic",l),la(g,"df",d),la(g,"method","Bartlett's test of equal variances"),la(g,"print",Ule),g}Yor.exports=Gle});var Qor=s((PCe,$or)=>{"use strict";var Dle=Zor();$or.exports=Dle});var r1r=s((FCe,Kor)=>{"use strict";var Ll=W(),Hle=qi();function zle(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,n=e[u],i[o]=n,o+=a,f=1,Ll(n)===!1)for(f;f<r;f++){if(u+=t,v=e[u],Ll(v)){n=v;break}(v>n||v===n&&Hle(v))&&(n=v),i[o]=n,o+=a}if(Ll(n))for(f;f<r;f++)i[o]=n,o+=a;return i}Kor.exports=zle});var t1r=s((xCe,e1r)=>{"use strict";var Pl=W(),Wle=qi();function Xle(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return a;if(v=i,f=u,o=e[v],a[f]=o,f+=n,l=1,Pl(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],Pl(c)){o=c;break}(c>o||c===o&&Wle(c))&&(o=c),a[f]=o,f+=n}if(Pl(o))for(l;l<r;l++)a[f]=o,f+=n;return a}e1r.exports=Xle});var n1r=s((jCe,a1r)=>{"use strict";var Jle=G(),i1r=r1r(),Yle=t1r();Jle(i1r,"ndarray",Yle);a1r.exports=i1r});var u1r=s((MCe,s1r)=>{"use strict";var Zle=n1r();s1r.exports=Zle});var v1r=s((BCe,o1r)=>{"use strict";var $le=W(),Qle=qi();function Kle(r,e,t){var i,a,n,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?a=(1-r)*t:a=0,i=e[a],u=1;u<r;u++){if(a+=t,n=e[a],$le(n))return n;(n>i||n===i&&Qle(n))&&(i=n)}return i}o1r.exports=Kle});var c1r=s((kCe,f1r)=>{"use strict";var r4e=W(),e4e=qi();function t4e(r,e,t,i){var a,n,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(n=i,a=e[n],o=1;o<r;o++){if(n+=t,u=e[n],r4e(u))return u;(u>a||u===a&&e4e(u))&&(a=u)}return a}f1r.exports=t4e});var d1r=s((CCe,p1r)=>{"use strict";var i4e=G(),l1r=v1r(),a4e=c1r();i4e(l1r,"ndarray",a4e);p1r.exports=l1r});var m1r=s((VCe,g1r)=>{"use strict";var n4e=d1r();g1r.exports=n4e});var q1r=s((UCe,h1r)=>{"use strict";var y1r=W(),s4e=qi();function u4e(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=a;if(f===r)return NaN;if(n=e[u],y1r(n))return n;for(f+=1,f;f<r;f++)if(u+=t,o+=a,!i[o]){if(v=e[u],y1r(v))return v;(v>n||v===n&&s4e(v))&&(n=v)}return n}h1r.exports=u4e});var E1r=s((GCe,w1r)=>{"use strict";var b1r=W(),o4e=qi();function v4e(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&a[f]!==0;l++)v+=t,f+=n;if(l===r)return NaN;if(o=e[v],b1r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=n,!a[f]){if(c=e[v],b1r(c))return c;(c>o||c===o&&o4e(c))&&(o=c)}return o}w1r.exports=v4e});var O1r=s((DCe,S1r)=>{"use strict";var f4e=G(),N1r=q1r(),c4e=E1r();f4e(N1r,"ndarray",c4e);S1r.exports=N1r});var _1r=s((HCe,A1r)=>{"use strict";var l4e=fa(),p4e=Lr(),Fl=W();function d4e(r,e,t){var i,a;return Fl(r)||Fl(e)||Fl(t)||t<0?NaN:t===0?r<e?0:1:(i=t*p4e(2),a=r-e,.5*l4e(-a/i))}A1r.exports=d4e});var I1r=s((zCe,T1r)=>{"use strict";var g4e=dr(),m4e=ku().factory,xl=W(),y4e=Lr(),h4e=fa();function q4e(r,e){var t;if(xl(r)||xl(e)||e<0)return g4e(NaN);if(e===0)return m4e(r);return t=e*y4e(2),i;function i(a){var n;return xl(a)?NaN:(n=a-r,.5*h4e(-n/t))}}T1r.exports=q4e});var P1r=s((WCe,L1r)=>{"use strict";var b4e=G(),R1r=_1r(),w4e=I1r();b4e(R1r,"factory",w4e);L1r.exports=R1r});var j1r=s((XCe,x1r)=>{"use strict";var F1r=W(),E4e=br(),N4e=di(),S4e=pl();function O4e(r,e){return F1r(r)||F1r(e)||e<=0?NaN:.5*E4e(N4e*S4e*e*e)}x1r.exports=O4e});var B1r=s((JCe,M1r)=>{"use strict";var A4e=j1r();M1r.exports=A4e});var V1r=s((YCe,C1r)=>{"use strict";var k1r=W();function _4e(r,e){return k1r(r)||k1r(e)||e<=0?NaN:0}C1r.exports=_4e});var G1r=s((ZCe,U1r)=>{"use strict";var T4e=V1r();U1r.exports=T4e});var H1r=s(($Ce,D1r)=>{"use strict";var I4e=Gr(),R4e=[L4e,P4e,F4e,x4e,j4e,M4e,B4e,k4e,C4e,V4e,U4e,G4e,D4e,H4e,z4e,W4e,X4e,J4e,Y4e,Z4e,$4e,Q4e,K4e,r6e,e6e,t6e,i6e,a6e,n6e,s6e,u6e,o6e,v6e,f6e,c6e,l6e,p6e,d6e,g6e,m6e,y6e,h6e,q6e,b6e,w6e,E6e,N6e,S6e,O6e,A6e,_6e,T6e,I6e,R6e,L6e,P6e,F6e,x6e,j6e,M6e,B6e,k6e,C6e,V6e,U6e,G6e,D6e,H6e,z6e,W6e,X6e,J6e,Y6e,Z6e,$6e,Q6e,K6e,r5e,e5e,t5e,i5e,a5e,n5e,s5e,u5e,o5e,v5e,f5e,c5e,l5e,p5e,d5e,g5e,m5e,y5e,h5e,q5e,b5e,w5e,E5e,N5e];function L4e(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function P4e(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function F4e(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function x4e(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function j4e(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function M4e(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function B4e(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function k4e(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function C4e(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function V4e(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function U4e(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function G4e(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function D4e(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function H4e(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function z4e(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function W4e(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function X4e(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function J4e(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Y4e(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Z4e(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function $4e(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function Q4e(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function K4e(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function r6e(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function e6e(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function t6e(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function i6e(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function a6e(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function n6e(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function s6e(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function u6e(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function o6e(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function v6e(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function f6e(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function c6e(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function l6e(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function p6e(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function d6e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function g6e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function m6e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function y6e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function h6e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function q6e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function b6e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function w6e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function E6e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function N6e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function S6e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function O6e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function A6e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function _6e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function T6e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function I6e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function R6e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function L6e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function P6e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function F6e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function x6e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function j6e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function M6e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function B6e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function k6e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function C6e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function V6e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function U6e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function G6e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function D6e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function H6e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function z6e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function W6e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function X6e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function J6e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function Y6e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Z6e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function $6e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Q6e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function K6e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function r5e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function e5e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function t5e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function i5e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function a5e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function n5e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function s5e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function u5e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function o5e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function v5e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function f5e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function c5e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function l5e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function p5e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function d5e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function g5e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function m5e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function y5e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function h5e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function q5e(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function b5e(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function w5e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function E5e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function N5e(){return 1}function S5e(r){var e=I4e(r),t=R4e[e];return t(2*r-(2*e+1))}D1r.exports=S5e});var Y1r=s((QCe,J1r)=>{"use strict";var z1r=ae(),O5e=hr(),W1r=H1r(),X1r=.5641895835477563;function A5e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?X1r/r:(e=r*r,X1r*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):W1r(400/(4+r)):r<-26.7?O5e:(e=r*r,r<-6.1?2*z1r(e):2*z1r(e)-W1r(400/(4-r)))}J1r.exports=A5e});var jl=s((KCe,Z1r)=>{"use strict";var _5e=Y1r();Z1r.exports=_5e});var K1r=s((rVe,Q1r)=>{"use strict";var T5e=br(),I5e=li(),R5e=Rs(),L5e=fa(),P5e=jl(),F5e=Ir(),Ml=W(),$1r=.7071067811865475;function x5e(r,e,t){var i;return Ml(r)||Ml(e)||Ml(t)||t<0?NaN:t===0?r<e?F5e:0:(i=(r-e)/t,i<-1?T5e(P5e(-i*$1r)/2)-R5e(i)/2:I5e(-L5e(i*$1r)/2))}Q1r.exports=x5e});var t2r=s((eVe,e2r)=>{"use strict";var r2r=W(),j5e=Ir();function M5e(r,e){return r2r(r)||r2r(e)?NaN:r<e?j5e:0}e2r.exports=M5e});var n2r=s((tVe,a2r)=>{"use strict";var B5e=dr(),i2r=W(),k5e=Ir();function C5e(r){if(i2r(r))return B5e(NaN);return e;function e(t){return i2r(t)?NaN:t<r?k5e:0}}a2r.exports=C5e});var o2r=s((iVe,u2r)=>{"use strict";var V5e=G(),s2r=t2r(),U5e=n2r();V5e(s2r,"factory",U5e);u2r.exports=s2r});var l2r=s((aVe,c2r)=>{"use strict";var G5e=dr(),D5e=o2r().factory,v2r=W(),H5e=li(),z5e=Rs(),W5e=fa(),X5e=jl(),J5e=br(),f2r=.7071067811865475;function Y5e(r,e){if(v2r(r)||v2r(e)||e<0)return G5e(NaN);if(e===0)return D5e(r);return t;function t(i){var a=(i-r)/e;return a<-1?J5e(X5e(-a*f2r)/2)-z5e(a)/2:H5e(-W5e(a*f2r)/2)}}c2r.exports=Y5e});var g2r=s((nVe,d2r)=>{"use strict";var Z5e=G(),p2r=K1r(),$5e=l2r();Z5e(p2r,"factory",$5e);d2r.exports=p2r});var Bl=s((sVe,m2r)=>{"use strict";var Q5e=1.8378770664093456;m2r.exports=Q5e});var q2r=s((uVe,h2r)=>{"use strict";var K5e=br(),y2r=Vr(),r8e=Bl(),e8e=Ir(),t8e=hr(),kl=W();function i8e(r,e,t){var i,a,n;return kl(r)||kl(e)||kl(t)||t<0?NaN:t===0?r===e?t8e:e8e:(i=y2r(t,2),a=-.5*(2*K5e(t)+r8e),n=-1/(2*i),a+n*y2r(r-e,2))}h2r.exports=i8e});var E2r=s((oVe,w2r)=>{"use strict";var a8e=hr(),n8e=Ir(),b2r=W();function s8e(r,e){return b2r(r)||b2r(e)?NaN:r===e?a8e:n8e}w2r.exports=s8e});var O2r=s((vVe,S2r)=>{"use strict";var u8e=dr(),o8e=hr(),v8e=Ir(),N2r=W();function f8e(r){if(N2r(r))return u8e(NaN);return e;function e(t){return N2r(t)?NaN:t===r?o8e:v8e}}S2r.exports=f8e});var T2r=s((fVe,_2r)=>{"use strict";var c8e=G(),A2r=E2r(),l8e=O2r();c8e(A2r,"factory",l8e);_2r.exports=A2r});var P2r=s((cVe,L2r)=>{"use strict";var p8e=dr(),d8e=T2r().factory,g8e=Bl(),I2r=W(),R2r=Vr(),m8e=br();function y8e(r,e){var t,i,a;if(I2r(r)||I2r(e)||e<0)return p8e(NaN);if(e===0)return d8e(r);return t=R2r(e,2),i=-.5*(2*m8e(e)+g8e),a=-1/(2*t),n;function n(u){return i+a*R2r(u-r,2)}}L2r.exports=y8e});var j2r=s((lVe,x2r)=>{"use strict";var h8e=G(),F2r=q2r(),q8e=P2r();h8e(F2r,"factory",q8e);x2r.exports=F2r});var k2r=s((pVe,B2r)=>{"use strict";var M2r=W();function b8e(r,e){return M2r(r)||M2r(e)||e<=0?NaN:r}B2r.exports=b8e});var V2r=s((dVe,C2r)=>{"use strict";var w8e=k2r();C2r.exports=w8e});var D2r=s((gVe,G2r)=>{"use strict";var U2r=W();function E8e(r,e){return U2r(r)||U2r(e)||e<=0?NaN:r}G2r.exports=E8e});var z2r=s((mVe,H2r)=>{"use strict";var N8e=D2r();H2r.exports=N8e});var X2r=s((yVe,W2r)=>{"use strict";var Cl=W(),S8e=ae(),O8e=Vr();function A8e(r,e,t){return Cl(r)||Cl(e)||Cl(t)||t<=0?NaN:S8e(e*r+.5*O8e(t*r,2))}W2r.exports=A8e});var Y2r=s((hVe,J2r)=>{"use strict";var _8e=dr(),Vl=W(),T8e=ae(),I8e=Vr();function R8e(r,e){if(Vl(r)||Vl(e)||e<=0)return _8e(NaN);return t;function t(i){return Vl(i)?NaN:T8e(r*i+.5*I8e(e*i,2))}}J2r.exports=R8e});var Q2r=s((qVe,$2r)=>{"use strict";var L8e=G(),Z2r=X2r(),P8e=Y2r();L8e(Z2r,"factory",P8e);$2r.exports=Z2r});var evr=s((bVe,rvr)=>{"use strict";var K2r=W();function F8e(r,e){return K2r(r)||K2r(e)||e<=0?NaN:r}rvr.exports=F8e});var ivr=s((wVe,tvr)=>{"use strict";var x8e=evr();tvr.exports=x8e});var svr=s((EVe,nvr)=>{"use strict";var j8e=ae(),avr=Vr(),M8e=Lr(),B8e=di(),k8e=hr(),Ul=W();function C8e(r,e,t){var i,a,n;return Ul(r)||Ul(e)||Ul(t)||t<0?NaN:t===0?r===e?k8e:0:(i=avr(t,2),a=1/M8e(i*B8e),n=-1/(2*i),a*j8e(n*avr(r-e,2)))}nvr.exports=C8e});var vvr=s((NVe,ovr)=>{"use strict";var V8e=hr(),uvr=W();function U8e(r,e){return uvr(r)||uvr(e)?NaN:r===e?V8e:0}ovr.exports=U8e});var lvr=s((SVe,cvr)=>{"use strict";var G8e=dr(),D8e=hr(),fvr=W();function H8e(r){if(fvr(r))return G8e(NaN);return e;function e(t){return fvr(t)?NaN:t===r?D8e:0}}cvr.exports=H8e});var gvr=s((OVe,dvr)=>{"use strict";var z8e=G(),pvr=vvr(),W8e=lvr();z8e(pvr,"factory",W8e);dvr.exports=pvr});var hvr=s((AVe,yvr)=>{"use strict";var X8e=dr(),J8e=gvr().factory,Gl=W(),Y8e=Lr(),Z8e=ae(),mvr=Vr(),$8e=di();function Q8e(r,e){var t,i,a;if(Gl(r)||Gl(e)||e<0)return X8e(NaN);if(e===0)return J8e(r);return t=mvr(e,2),i=1/Y8e(t*$8e),a=-1/(2*t),n;function n(u){return Gl(u)?NaN:i*Z8e(a*mvr(u-r,2))}}yvr.exports=Q8e});var wvr=s((_Ve,bvr)=>{"use strict";var K8e=G(),qvr=svr(),rpe=hvr();K8e(qvr,"factory",rpe);bvr.exports=qvr});var Svr=s((TVe,Nvr)=>{"use strict";var Evr=W();function epe(r,e){return Evr(r)||Evr(e)||e<=0?NaN:0}Nvr.exports=epe});var Avr=s((IVe,Ovr)=>{"use strict";var tpe=Svr();Ovr.exports=tpe});var Ivr=s((RVe,Tvr)=>{"use strict";var _vr=W();function ipe(r,e){return _vr(r)||_vr(e)||e<=0?NaN:e}Tvr.exports=ipe});var Lvr=s((LVe,Rvr)=>{"use strict";var ape=Ivr();Rvr.exports=ape});var xvr=s((PVe,Fvr)=>{"use strict";var Pvr=W();function npe(r,e){return Pvr(r)||Pvr(e)||e<=0?NaN:e*e}Fvr.exports=npe});var Mvr=s((FVe,jvr)=>{"use strict";var spe=xvr();jvr.exports=spe});var kvr=s((xVe,Bvr)=>{"use strict";var je=$r(),upe=P1r(),ope=B1r(),vpe=G1r(),fpe=g2r(),cpe=j2r(),lpe=V2r(),ppe=z2r(),dpe=Q2r(),gpe=ivr(),mpe=wvr(),ype=_c(),hpe=Avr(),qpe=Lvr(),bpe=Mvr();function wpe(r){return je(r,"cdf",upe),je(r,"entropy",ope),je(r,"kurtosis",vpe),je(r,"logcdf",fpe),je(r,"logpdf",cpe),je(r,"mean",lpe),je(r,"median",ppe),je(r,"mgf",dpe),je(r,"mode",gpe),je(r,"pdf",mpe),je(r,"quantile",ype),je(r,"skewness",hpe),je(r,"stdev",qpe),je(r,"variance",bpe),r}Bvr.exports=wpe});var Vvr=s((jVe,Cvr)=>{"use strict";var Epe=$r(),Npe=kvr();function Spe(r){return Epe(r,"normal",Npe({})),r}Cvr.exports=Spe});var Gvr=s((MVe,Uvr)=>{"use strict";var L0=$r(),Ope=Qor(),Ape=u1r().ndarray,_pe=m1r().ndarray,Tpe=O1r().ndarray,Ipe=Vvr();function Rpe(r){return L0(r,"bartlettTest",Ope),L0(r,"cumax",Ape),L0(r,"max",_pe),L0(r,"mskmax",Tpe),L0(r,"dists",Ipe({})),r}Uvr.exports=Rpe});var Hvr=s((BVe,Dvr)=>{"use strict";var Lpe=Jr().isPrimitive,Ppe=C();function Fpe(r){return e;function e(t){if(!Lpe(t))throw new TypeError(Ppe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Dvr.exports=Fpe});var Wvr=s((kVe,zvr)=>{"use strict";var xpe=Hvr();zvr.exports=xpe});var Zvr=s((CVe,Yvr)=>{"use strict";var Xvr=Jr().isPrimitive,Jvr=C();function jpe(r){return e;function e(t,i){if(!Xvr(t))throw new TypeError(Jvr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Xvr(i))throw new TypeError(Jvr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Yvr.exports=jpe});var Qvr=s((VVe,$vr)=>{"use strict";var Mpe=Zvr();$vr.exports=Mpe});var rfr=s((UVe,Kvr)=>{"use strict";var Dl=Jr().isPrimitive,Hl=C();function Bpe(r){return e;function e(t,i,a){if(!Dl(t))throw new TypeError(Hl("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Dl(i))throw new TypeError(Hl("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Dl(a))throw new TypeError(Hl("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(a)));return r(t,i,a)}}Kvr.exports=Bpe});var tfr=s((GVe,efr)=>{"use strict";var kpe=rfr();efr.exports=kpe});var afr=s((DVe,ifr)=>{"use strict";var zl=$r(),Cpe=Wvr(),Vpe=Qvr(),Upe=tfr();function Gpe(r){return zl(r,"s_o",Cpe),zl(r,"ss_o",Vpe),zl(r,"sss_o",Upe),r}ifr.exports=Gpe});var sfr=s((HVe,nfr)=>{"use strict";function Dpe(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}nfr.exports=Dpe});var y1=s((zVe,ufr)=>{"use strict";var Hpe=sfr();ufr.exports=Hpe});var vfr=s((WVe,ofr)=>{"use strict";var zpe=y1(),Wpe=ua(),h1=gi(),Xpe=hi(),Jpe=/\s+/g,Ype=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Zpe=/(?:\s|^)([^\s]+)(?=\s|$)/g,$pe=/([a-z0-9])([A-Z])/g;function Qpe(r,e,t){return e=Wpe(e),t===0?e:zpe(e)}function Kpe(r){return r=h1(r,Ype," "),r=h1(r,Jpe," "),r=h1(r,$pe,"$1 $2"),r=Xpe(r),h1(r,Zpe,Qpe)}ofr.exports=Kpe});var cfr=s((XVe,ffr)=>{"use strict";var r7e=vfr();ffr.exports=r7e});var pfr=s((JVe,lfr)=>{"use strict";var e7e=Jr().isPrimitive,t7e=C(),i7e=cfr();function a7e(r){if(!e7e(r))throw new TypeError(t7e("invalid argument. First argument must be a string. Value: `%s`.",r));return i7e(r)}lfr.exports=a7e});var gfr=s((YVe,dfr)=>{"use strict";var n7e=pfr();dfr.exports=n7e});var yfr=s((ZVe,mfr)=>{"use strict";var s7e=Jr().isPrimitive,u7e=C(),o7e=y1();function v7e(r){if(!s7e(r))throw new TypeError(u7e("invalid argument. First argument must be a string. Value: `%s`.",r));return o7e(r)}mfr.exports=v7e});var qfr=s(($Ve,hfr)=>{"use strict";var f7e=yfr();hfr.exports=f7e});var wfr=s((QVe,bfr)=>{"use strict";function c7e(r){return r.toUpperCase()}bfr.exports=c7e});var Nfr=s((KVe,Efr)=>{"use strict";var l7e=wfr();Efr.exports=l7e});var Ofr=s((rUe,Sfr)=>{"use strict";var p7e=Nfr(),Wl=gi(),d7e=hi(),g7e=/\s+/g,m7e=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,y7e=/([a-z0-9])([A-Z])/g;function h7e(r){return r=Wl(r,m7e," "),r=Wl(r,y7e,"$1 $2"),r=d7e(r),r=Wl(r,g7e,"_"),p7e(r)}Sfr.exports=h7e});var _fr=s((eUe,Afr)=>{"use strict";var q7e=Ofr();Afr.exports=q7e});var Ifr=s((tUe,Tfr)=>{"use strict";var b7e=Jr().isPrimitive,w7e=C(),E7e=_fr();function N7e(r){if(!b7e(r))throw new TypeError(w7e("invalid argument. Must provide a string. Value: `%s`.",r));return E7e(r)}Tfr.exports=N7e});var Lfr=s((iUe,Rfr)=>{"use strict";var S7e=Ifr();Rfr.exports=S7e});var Ffr=s((aUe,Pfr)=>{"use strict";var O7e=ua(),Xl=gi(),A7e=hi(),_7e=/\s+/g,T7e=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,I7e=/([a-z0-9])([A-Z])/g;function R7e(r){return r=Xl(r,T7e," "),r=Xl(r,I7e,"$1 $2"),r=A7e(r),r=Xl(r,_7e,"-"),O7e(r)}Pfr.exports=R7e});var jfr=s((nUe,xfr)=>{"use strict";var L7e=Ffr();xfr.exports=L7e});var Bfr=s((sUe,Mfr)=>{"use strict";var P7e=Jr().isPrimitive,F7e=C(),x7e=jfr();function j7e(r){if(!P7e(r))throw new TypeError(F7e("invalid argument. Must provide a string. Value: `%s`.",r));return x7e(r)}Mfr.exports=j7e});var Cfr=s((uUe,kfr)=>{"use strict";var M7e=Bfr();kfr.exports=M7e});var Ufr=s((oUe,Vfr)=>{"use strict";var B7e=Jr().isPrimitive,k7e=C(),C7e=ua();function V7e(r){if(!B7e(r))throw new TypeError(k7e("invalid argument. Must provide a string. Value: `%s`.",r));return C7e(r)}Vfr.exports=V7e});var Dfr=s((vUe,Gfr)=>{"use strict";var U7e=Ufr();Gfr.exports=U7e});var zfr=s((fUe,Hfr)=>{"use strict";var G7e=y1(),D7e=ua(),q1=gi(),H7e=hi(),z7e=/\s+/g,W7e=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,X7e=/(?:\s|^)([^\s]+)(?=\s|$)/g,J7e=/([a-z0-9])([A-Z])/g;function Y7e(r,e){return G7e(D7e(e))}function Z7e(r){return r=q1(r,W7e," "),r=q1(r,z7e," "),r=q1(r,J7e,"$1 $2"),r=H7e(r),q1(r,X7e,Y7e)}Hfr.exports=Z7e});var Xfr=s((cUe,Wfr)=>{"use strict";var $7e=zfr();Wfr.exports=$7e});var Yfr=s((lUe,Jfr)=>{"use strict";var Q7e=Jr().isPrimitive,K7e=C(),r9e=Xfr();function e9e(r){if(!Q7e(r))throw new TypeError(K7e("invalid argument. First argument must be a string. Value: `%s`.",r));return r9e(r)}Jfr.exports=e9e});var $fr=s((pUe,Zfr)=>{"use strict";var t9e=Yfr();Zfr.exports=t9e});var Kfr=s((dUe,Qfr)=>{"use strict";var i9e=ua(),Jl=gi(),a9e=hi(),n9e=/\s+/g,s9e=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,u9e=/([a-z0-9])([A-Z])/g;function o9e(r){return r=Jl(r,s9e," "),r=Jl(r,u9e,"$1 $2"),r=a9e(r),r=Jl(r,n9e,"_"),i9e(r)}Qfr.exports=o9e});var e3r=s((gUe,r3r)=>{"use strict";var v9e=Kfr();r3r.exports=v9e});var i3r=s((mUe,t3r)=>{"use strict";var f9e=Jr().isPrimitive,c9e=C(),l9e=e3r();function p9e(r){if(!f9e(r))throw new TypeError(c9e("invalid argument. Must provide a string. Value: `%s`.",r));return l9e(r)}t3r.exports=p9e});var n3r=s((yUe,a3r)=>{"use strict";var d9e=i3r();a3r.exports=d9e});var o3r=s((hUe,u3r)=>{"use strict";var g9e=mr(),s3r=vr(),m9e=de().isPrimitive,y9e=Jr().isPrimitive,Yl=C();function h9e(r,e){return g9e(e)?s3r(e,"flags")&&(r.flags=e.flags,!y9e(r.flags))?new TypeError(Yl("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):s3r(e,"capture")&&(r.capture=e.capture,!m9e(r.capture))?new TypeError(Yl("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Yl("invalid argument. Options argument must be an object. Value: `%s`.",e))}u3r.exports=h9e});var b1=s((qUe,f3r)=>{"use strict";var q9e=o3r(),v3r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function b9e(r){var e,t;if(arguments.length>0){if(e={},t=q9e(e,r),t)throw t;return e.capture?new RegExp("("+v3r+")",e.flags):new RegExp(v3r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}f3r.exports=b9e});var l3r=s((bUe,c3r)=>{"use strict";var w9e=b1(),E9e=w9e({capture:!0});c3r.exports=E9e});var d3r=s((wUe,p3r)=>{"use strict";var N9e=b1(),S9e=N9e();p3r.exports=S9e});var y3r=s((EUe,m3r)=>{"use strict";var g3r=G(),Zl=b1(),O9e=l3r(),A9e=d3r();g3r(Zl,"REGEXP",A9e);g3r(Zl,"REGEXP_CAPTURE",O9e);m3r.exports=Zl});var q3r=s((NUe,h3r)=>{"use strict";var _9e=y3r().REGEXP;function T9e(r){var e,t,i,a;for(e=!0,t="",a=0;a<r.length;a++)i=r.charAt(a),_9e.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}h3r.exports=T9e});var w3r=s((SUe,b3r)=>{"use strict";var I9e=q3r();b3r.exports=I9e});var N3r=s((OUe,E3r)=>{"use strict";var R9e=Jr().isPrimitive,L9e=C(),P9e=w3r();function F9e(r){if(!R9e(r))throw new TypeError(L9e("invalid argument. Must provide a string. Value: `%s`.",r));return P9e(r)}E3r.exports=F9e});var O3r=s((AUe,S3r)=>{"use strict";var x9e=N3r();S3r.exports=x9e});var _3r=s((_Ue,A3r)=>{"use strict";function j9e(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}A3r.exports=j9e});var I3r=s((TUe,T3r)=>{"use strict";var M9e=_3r();T3r.exports=M9e});var L3r=s((IUe,R3r)=>{"use strict";var B9e=Jr().isPrimitive,k9e=C(),C9e=I3r();function V9e(r){if(!B9e(r))throw new TypeError(k9e("invalid argument. First argument must be a string. Value: `%s`.",r));return C9e(r)}R3r.exports=V9e});var F3r=s((RUe,P3r)=>{"use strict";var U9e=L3r();P3r.exports=U9e});var j3r=s((LUe,x3r)=>{"use strict";var G9e=Jr().isPrimitive,D9e=C();function H9e(r){if(!G9e(r))throw new TypeError(D9e("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}x3r.exports=H9e});var B3r=s((PUe,M3r)=>{"use strict";var z9e=j3r();M3r.exports=z9e});var C3r=s((FUe,k3r)=>{"use strict";var gt=$r(),W9e=gfr(),X9e=qfr(),J9e=Lfr(),Y9e=Cfr(),Z9e=Dfr(),$9e=$fr(),Q9e=n3r(),K9e=O3r(),rde=F3r(),ede=B3r();function tde(r){return gt(r,"camelcase",W9e),gt(r,"capitalize",X9e),gt(r,"constantcase",J9e),gt(r,"kebabcase",Y9e),gt(r,"lowercase",Z9e),gt(r,"pascalcase",$9e),gt(r,"snakecase",Q9e),gt(r,"startcase",K9e),gt(r,"uncapitalize",rde),gt(r,"uppercase",ede),r}k3r.exports=tde});var U3r=s((xUe,V3r)=>{"use strict";var ide=$r(),ade=afr(),nde=C3r();function sde(r){return ide(r,"tools",ade({})),r=nde(r),r}V3r.exports=sde});var D3r=s((jUe,G3r)=>{"use strict";var mt=$r(),ude=Eh(),ode=Bw(),vde=Ww(),fde=DS(),cde=OB(),lde=aH(),pde=Dnr(),dde=Knr(),gde=Gvr(),mde=U3r();function yde(){var r={};return mt(r,"array",ude({})),mt(r,"assert",ode({})),mt(r,"blas",vde({})),mt(r,"datasets",fde({})),mt(r,"math",cde({})),mt(r,"ndarray",lde({})),mt(r,"random",pde({})),mt(r,"simulate",dde({})),mt(r,"stats",gde({})),mt(r,"string",mde({})),r}G3r.exports=yde});var z3r=s((MUe,H3r)=>{"use strict";var hde=G(),$l=D3r();hde($l,"CACHED",$l());H3r.exports=$l});var bde=s((BUe,W3r)=>{var qde=z3r().CACHED;W3r.exports=qde});return bde();})();
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
