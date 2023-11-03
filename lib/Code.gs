/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var xc=s((h6e,Gc)=>{"use strict";var n2r=typeof Object.defineProperty=="function"?Object.defineProperty:null;Gc.exports=n2r});var Hc=s((y6e,Dc)=>{"use strict";var a2r=xc();function s2r(){try{return a2r({},"x",{}),!0}catch{return!1}}Dc.exports=s2r});var zc=s((q6e,Wc)=>{"use strict";var u2r=Object.defineProperty;Wc.exports=u2r});var oo=s((b6e,Xc)=>{"use strict";function o2r(r){return typeof r=="number"}Xc.exports=o2r});var fo=s((w6e,Yc)=>{"use strict";function f2r(r){return r[0]==="-"}function Jc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function v2r(r,e,t){var i=!1,n=e-r.length;return n<0||(f2r(r)&&(i=!0,r=r.substr(1)),r=t?r+Jc(n):Jc(n)+r,i&&(r="-"+r)),r}Yc.exports=v2r});var Kc=s((E6e,Qc)=>{"use strict";var c2r=oo(),$c=fo(),l2r=String.prototype.toLowerCase,Zc=String.prototype.toUpperCase;function p2r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!c2r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=$c(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=$c(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Zc.call(r.specifier)?Zc.call(t):l2r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Qc.exports=p2r});var el=s((N6e,rl)=>{"use strict";function g2r(r){return typeof r=="string"}rl.exports=g2r});var nl=s((O6e,il)=>{"use strict";var m2r=oo(),d2r=Math.abs,h2r=String.prototype.toLowerCase,tl=String.prototype.toUpperCase,Vt=String.prototype.replace,y2r=/e\+(\d)$/,q2r=/e-(\d)$/,b2r=/^(\d+)$/,w2r=/^(\d+)e/,E2r=/\.0$/,N2r=/\.0*e/,O2r=/(\..*[^0])0*e/;function S2r(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!m2r(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":d2r(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Vt.call(t,O2r,"$1e"),t=Vt.call(t,N2r,"e"),t=Vt.call(t,E2r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Vt.call(t,y2r,"e+0$1"),t=Vt.call(t,q2r,"e-0$1"),r.alternate&&(t=Vt.call(t,b2r,"$1."),t=Vt.call(t,w2r,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===tl.call(r.specifier)?tl.call(t):h2r.call(t),t}il.exports=S2r});var ul=s((S6e,sl)=>{"use strict";function al(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function A2r(r,e,t){var i=e-r.length;return i<0||(r=t?r+al(i):al(i)+r),r}sl.exports=A2r});var fl=s((A6e,ol)=>{"use strict";var _2r=Kc(),T2r=el(),I2r=nl(),R2r=ul(),L2r=fo(),P2r=String.fromCharCode,Oa=isNaN,F2r=Array.isArray;function M2r(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B2r(r){var e,t,i,n,a,u,o,v,f;if(!F2r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],T2r(i))u+=i;else{if(e=i.precision!==void 0,i=M2r(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Oa(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Oa(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=_2r(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Oa(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Oa(a)?String(i.arg):P2r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=I2r(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=L2r(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=R2r(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}ol.exports=B2r});var cl=s((_6e,vl)=>{"use strict";var j2r=fl();vl.exports=j2r});var pl=s((T6e,ll)=>{"use strict";var Sa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k2r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function C2r(r){var e,t,i,n;for(t=[],n=0,i=Sa.exec(r);i;)e=r.slice(n,Sa.lastIndex-i[0].length),e.length&&t.push(e),t.push(k2r(i)),n=Sa.lastIndex,i=Sa.exec(r);return e=r.slice(n),e.length&&t.push(e),t}ll.exports=C2r});var ml=s((I6e,gl)=>{"use strict";var V2r=pl();gl.exports=V2r});var hl=s((R6e,dl)=>{"use strict";function U2r(r){return typeof r=="string"}dl.exports=U2r});var bl=s((L6e,ql)=>{"use strict";var G2r=cl(),x2r=ml(),D2r=hl();function yl(r){var e,t,i;if(!D2r(r))throw new TypeError(yl("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x2r(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return G2r.apply(null,t)}ql.exports=yl});var q=s((P6e,wl)=>{"use strict";var H2r=bl();wl.exports=H2r});var _l=s((F6e,Al)=>{"use strict";var El=q(),oi=Object.prototype,Nl=oi.toString,Ol=oi.__defineGetter__,Sl=oi.__defineSetter__,W2r=oi.__lookupGetter__,z2r=oi.__lookupSetter__;function X2r(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||Nl.call(r)==="[object Array]")throw new TypeError(El("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Nl.call(t)==="[object Array]")throw new TypeError(El("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(W2r.call(r,e)||z2r.call(r,e)?(i=r.__proto__,r.__proto__=oi,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ol&&Ol.call(r,e,t.get),u&&Sl&&Sl.call(r,e,t.set),r}Al.exports=X2r});var Ze=s((M6e,Tl)=>{"use strict";var J2r=Hc(),Y2r=zc(),$2r=_l(),vo;J2r()?vo=Y2r:vo=$2r;Tl.exports=vo});var Rl=s((B6e,Il)=>{"use strict";var Z2r=Ze();function Q2r(r,e,t){Z2r(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Il.exports=Q2r});var b=s((j6e,Ll)=>{"use strict";var K2r=Rl();Ll.exports=K2r});var Fl=s((k6e,Pl)=>{"use strict";var r3r=Ze();function e3r(r,e,t){r3r(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Pl.exports=e3r});var rr=s((C6e,Ml)=>{"use strict";var t3r=Fl();Ml.exports=t3r});var jl=s((V6e,Bl)=>{"use strict";function i3r(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}Bl.exports=i3r});var Aa=s((U6e,kl)=>{"use strict";var n3r=jl();kl.exports=n3r});var Vl=s((G6e,Cl)=>{"use strict";function a3r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Cl.exports=a3r});var _a=s((x6e,Ul)=>{"use strict";var s3r=Vl();Ul.exports=s3r});var xl=s((D6e,Gl)=>{"use strict";var u3r=_a();function o3r(r){return u3r(0,r)}Gl.exports=o3r});var Qe=s((H6e,Dl)=>{"use strict";var f3r=xl();Dl.exports=f3r});var zl=s((W6e,Wl)=>{"use strict";var dn=Aa(),v3r=Qe(),Hl=q();function c3r(r,e,t){var i,n,a,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(a=v3r(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],n=t[f],n!==0&&n<v)throw new Error(Hl("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",dn(e).join(", "),dn(t).join(", "),f));if(v===n)a[f]=1;else if(v===1)a[f]=0;else throw new Error(Hl("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",dn(e).join(", "),dn(t).join(", "),f))}return{ref:r,data:i,shape:dn(t),strides:a}}Wl.exports=c3r});var co=s((z6e,Xl)=>{"use strict";var l3r=zl();Xl.exports=l3r});var $l=s((X6e,Yl)=>{"use strict";var Jl=co();function p3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K;if(N=e[2],o=N[1],v=N[0],!(o<=0||v<=0))for(F=Jl(r[0],e[0],N),A=F.data,O=F.strides,i=O[1],n=O[0],F=Jl(r[1],e[1],N),H=F.data,O=F.strides,a=O[1],u=O[0],K=r[2],p=0,h=0,c=0;c<v;c++){for(l=0,g=0,d=A[p],m=H[h],y=K[c],f=0;f<o;f++)y[f]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}Yl.exports=p3r});var lo=s((J6e,Zl)=>{"use strict";var g3r=$l();Zl.exports=g3r});var Kl=s((Y6e,Ql)=>{"use strict";var po=co();function m3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K,G,Fr,Mr,or,Ct,Uc;if(K=e[3],f=K[1],c=K[0],!(f<=0||c<=0))for(Fr=po(r[0],e[0],K),Mr=Fr.data,G=Fr.strides,i=G[1],n=G[0],Fr=po(r[1],e[1],K),or=Fr.data,G=Fr.strides,a=G[1],u=G[0],Fr=po(r[2],e[2],K),Ct=Fr.data,G=Fr.strides,o=G[1],v=G[0],Uc=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,y=0,O=Mr[h],F=or[m],A=Ct[N],H=Uc[p],l=0;l<f;l++)H[l]=t(O[g],F[d],A[y]),g+=i,d+=a,y+=o;h+=n,m+=u,N+=v}}Ql.exports=m3r});var go=s(($6e,r6)=>{"use strict";var d3r=Kl();r6.exports=d3r});var t6=s((Z6e,e6)=>{"use strict";function h3r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}e6.exports=h3r});var Ta=s((Q6e,i6)=>{"use strict";var y3r=t6();i6.exports=y3r});var a6=s((K6e,n6)=>{"use strict";var q3r=_a();function b3r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(q3r(r,i));return t}n6.exports=b3r});var Ia=s((r4e,s6)=>{"use strict";var w3r=a6();s6.exports=w3r});var o6=s((e4e,u6)=>{"use strict";function E3r(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}u6.exports=E3r});var v6=s((t4e,f6)=>{"use strict";var N3r=o6();f6.exports=N3r});var l6=s((i4e,c6)=>{"use strict";function O3r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}c6.exports=O3r});var g6=s((n4e,p6)=>{"use strict";function S3r(r,e,t,i){var n,a,u,o,v,f;for(a=r.length,u=r[0].length,n=i,v=0;v<a;v++)for(o=r[v],f=0;f<u;f++)e[n]=o[f],n+=t;return e}p6.exports=S3r});var Ra=s((a4e,d6)=>{"use strict";var A3r=b(),m6=l6(),_3r=g6();A3r(m6,"assign",_3r);d6.exports=m6});var y6=s((s4e,h6)=>{"use strict";var T3r=/./;h6.exports=T3r});var mo=s((u4e,q6)=>{"use strict";function I3r(r){return typeof r=="boolean"}q6.exports=I3r});var w6=s((o4e,b6)=>{"use strict";function R3r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}b6.exports=R3r});var N6=s((f4e,E6)=>{"use strict";var L3r=w6();E6.exports=L3r});var S6=s((v4e,O6)=>{"use strict";var P3r=N6(),F3r=P3r();function M3r(){return F3r&&typeof Symbol.toStringTag=="symbol"}O6.exports=M3r});var fi=s((c4e,A6)=>{"use strict";var B3r=S6();A6.exports=B3r});var ho=s((l4e,_6)=>{"use strict";var j3r=Object.prototype.toString;_6.exports=j3r});var I6=s((p4e,T6)=>{"use strict";var k3r=ho();function C3r(r){return k3r.call(r)}T6.exports=C3r});var L6=s((g4e,R6)=>{"use strict";var V3r=Object.prototype.hasOwnProperty;function U3r(r,e){return r==null?!1:V3r.call(r,e)}R6.exports=U3r});var S=s((m4e,P6)=>{"use strict";var G3r=L6();P6.exports=G3r});var M6=s((d4e,F6)=>{"use strict";var x3r=typeof Symbol=="function"?Symbol:void 0;F6.exports=x3r});var yo=s((h4e,B6)=>{"use strict";var D3r=M6();B6.exports=D3r});var C6=s((y4e,k6)=>{"use strict";var j6=yo(),H3r=typeof j6=="function"?j6.toStringTag:"";k6.exports=H3r});var U6=s((q4e,V6)=>{"use strict";var W3r=S(),hn=C6(),qo=ho();function z3r(r){var e,t,i;if(r==null)return qo.call(r);t=r[hn],e=W3r(r,hn);try{r[hn]=void 0}catch{return qo.call(r)}return i=qo.call(r),e?r[hn]=t:delete r[hn],i}V6.exports=z3r});var er=s((b4e,G6)=>{"use strict";var X3r=fi(),J3r=I6(),Y3r=U6(),bo;X3r()?bo=Y3r:bo=J3r;G6.exports=bo});var D6=s((w4e,x6)=>{"use strict";var $3r=Boolean;x6.exports=$3r});var wo=s((E4e,H6)=>{"use strict";var Z3r=D6();H6.exports=Z3r});var z6=s((N4e,W6)=>{"use strict";var Q3r=Boolean.prototype.toString;W6.exports=Q3r});var J6=s((O4e,X6)=>{"use strict";var K3r=z6();function rfr(r){try{return K3r.call(r),!0}catch{return!1}}X6.exports=rfr});var Eo=s((S4e,Y6)=>{"use strict";var efr=fi(),tfr=er(),ifr=wo(),nfr=J6(),afr=efr();function sfr(r){return typeof r=="object"?r instanceof ifr?!0:afr?nfr(r):tfr(r)==="[object Boolean]":!1}Y6.exports=sfr});var Z6=s((A4e,$6)=>{"use strict";var ufr=mo(),ofr=Eo();function ffr(r){return ufr(r)||ofr(r)}$6.exports=ffr});var cr=s((_4e,K6)=>{"use strict";var Q6=b(),No=Z6(),vfr=mo(),cfr=Eo();Q6(No,"isPrimitive",vfr);Q6(No,"isObject",cfr);K6.exports=No});var e4=s((T4e,r4)=>{"use strict";function lfr(){return new Function("return this;")()}r4.exports=lfr});var i4=s((I4e,t4)=>{"use strict";var pfr=typeof self=="object"?self:null;t4.exports=pfr});var a4=s((R4e,n4)=>{"use strict";var gfr=typeof window=="object"?window:null;n4.exports=gfr});var u4=s((L4e,s4)=>{"use strict";var mfr=typeof globalThis=="object"?globalThis:null;s4.exports=mfr});var Oo=s((P4e,c4)=>{"use strict";var dfr=cr().isPrimitive,hfr=q(),yfr=e4(),o4=i4(),f4=a4(),v4=u4();function qfr(r){if(arguments.length){if(!dfr(r))throw new TypeError(hfr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return yfr()}if(v4)return v4;if(o4)return o4;if(f4)return f4;throw new Error("unexpected error. Unable to resolve global object.")}c4.exports=qfr});var g4=s((F4e,p4)=>{"use strict";var bfr=Oo(),l4=bfr(),wfr=l4.document&&l4.document.childNodes;p4.exports=wfr});var d4=s((M4e,m4)=>{"use strict";var Efr=Int8Array;m4.exports=Efr});var y4=s((B4e,h4)=>{"use strict";var Nfr=y6(),Ofr=g4(),Sfr=d4();function Afr(){return typeof Nfr=="function"||typeof Sfr=="object"||typeof Ofr=="function"}h4.exports=Afr});var So=s((j4e,q4)=>{"use strict";function _fr(){return/^\s*function\s*([^(]*)/i}q4.exports=_fr});var w4=s((k4e,b4)=>{"use strict";var Tfr=So(),Ifr=Tfr();b4.exports=Ifr});var Ao=s((C4e,N4)=>{"use strict";var Rfr=b(),E4=So(),Lfr=w4();Rfr(E4,"REGEXP",Lfr);N4.exports=E4});var S4=s((V4e,O4)=>{"use strict";var Pfr=er(),_o;function Ffr(r){return Pfr(r)==="[object Array]"}Array.isArray?_o=Array.isArray:_o=Ffr;O4.exports=_o});var dr=s((U4e,A4)=>{"use strict";var Mfr=S4();A4.exports=Mfr});var T4=s((G4e,_4)=>{"use strict";var Bfr=dr(),jfr=q();function kfr(r){if(typeof r!="function")throw new TypeError(jfr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Bfr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}_4.exports=kfr});var R4=s((x4e,I4)=>{"use strict";var Cfr=T4();I4.exports=Cfr});var P4=s((D4e,L4)=>{"use strict";function Vfr(r){return r!==null&&typeof r=="object"}L4.exports=Vfr});var Io=s((H4e,F4)=>{"use strict";var Ufr=b(),Gfr=R4(),To=P4(),xfr=Gfr(To);Ufr(To,"isObjectLikeArray",xfr);F4.exports=To});var B4=s((W4e,M4)=>{"use strict";var Dfr=Io();function Hfr(r){return Dfr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}M4.exports=Hfr});var Ut=s((z4e,j4)=>{"use strict";var Wfr=B4();j4.exports=Wfr});var C4=s((X4e,k4)=>{"use strict";var zfr=er(),Xfr=Ao().REGEXP,Jfr=Ut();function Yfr(r){var e,t,i;if(t=zfr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Xfr.exec(i.toString()),e)return e[1]}return Jfr(r)?"Buffer":t}k4.exports=Yfr});var pe=s((J4e,V4)=>{"use strict";var $fr=C4();V4.exports=$fr});var G4=s((Y4e,U4)=>{"use strict";var Zfr=pe();function Qfr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Zfr(r).toLowerCase():e)}U4.exports=Qfr});var D4=s(($4e,x4)=>{"use strict";var Kfr=pe();function rvr(r){return Kfr(r).toLowerCase()}x4.exports=rvr});var La=s((Z4e,H4)=>{"use strict";var evr=y4(),tvr=G4(),ivr=D4(),nvr=evr()?ivr:tvr;H4.exports=nvr});var z4=s((Q4e,W4)=>{"use strict";var avr=La();function svr(r){return avr(r)==="function"}W4.exports=svr});var I=s((K4e,X4)=>{"use strict";var uvr=z4();X4.exports=uvr});var Y4=s((r8e,J4)=>{"use strict";var ovr=Math.floor;J4.exports=ovr});var z=s((e8e,$4)=>{"use strict";var fvr=Y4();$4.exports=fvr});var Q4=s((t8e,Z4)=>{"use strict";var vvr=z();function cvr(r){return vvr(r)===r}Z4.exports=cvr});var yr=s((i8e,K4)=>{"use strict";var lvr=Q4();K4.exports=lvr});var e8=s((n8e,r8)=>{"use strict";var pvr=9007199254740991;r8.exports=pvr});var i8=s((a8e,t8)=>{"use strict";var gvr=yr(),mvr=e8();function dvr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&gvr(r.length)&&r.length>=0&&r.length<=mvr}t8.exports=dvr});var Br=s((s8e,n8)=>{"use strict";var hvr=i8();n8.exports=hvr});var s8=s((u8e,a8)=>{"use strict";var yvr=I();function qvr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&yvr(r.next)}a8.exports=qvr});var o8=s((o8e,u8)=>{"use strict";var bvr=s8();u8.exports=bvr});var c8=s((f8e,v8)=>{"use strict";var f8="function";function wvr(r){return typeof r.get===f8&&typeof r.set===f8}v8.exports=wvr});var yn=s((v8e,l8)=>{"use strict";var Evr=c8();l8.exports=Evr});var m8=s((c8e,g8)=>{"use strict";var p8={complex128:Nvr,complex64:Ovr,default:Svr};function Nvr(r,e,t){r.set(t,e)}function Ovr(r,e,t){r.set(t,e)}function Svr(r,e,t){r.set(t,e)}function Avr(r){var e=p8[r];return typeof e=="function"?e:p8.default}g8.exports=Avr});var Ro=s((l8e,d8)=>{"use strict";var _vr=m8();d8.exports=_vr});var q8=s((p8e,y8)=>{"use strict";var h8={float64:Tvr,float32:Ivr,int32:Rvr,int16:Lvr,int8:Pvr,uint32:Fvr,uint16:Mvr,uint8:Bvr,uint8c:jvr,generic:kvr,default:Cvr};function Tvr(r,e,t){r[e]=t}function Ivr(r,e,t){r[e]=t}function Rvr(r,e,t){r[e]=t}function Lvr(r,e,t){r[e]=t}function Pvr(r,e,t){r[e]=t}function Fvr(r,e,t){r[e]=t}function Mvr(r,e,t){r[e]=t}function Bvr(r,e,t){r[e]=t}function jvr(r,e,t){r[e]=t}function kvr(r,e,t){r[e]=t}function Cvr(r,e,t){r[e]=t}function Vvr(r){var e=h8[r];return typeof e=="function"?e:h8.default}y8.exports=Vvr});var Lo=s((g8e,b8)=>{"use strict";var Uvr=q8();b8.exports=Uvr});var E8=s((m8e,w8)=>{"use strict";var Gvr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};w8.exports=Gvr});var O8=s((d8e,N8)=>{"use strict";var xvr=er(),Dvr=typeof Float64Array=="function";function Hvr(r){return Dvr&&r instanceof Float64Array||xvr(r)==="[object Float64Array]"}N8.exports=Hvr});var A8=s((h8e,S8)=>{"use strict";var Wvr=O8();S8.exports=Wvr});var T8=s((y8e,_8)=>{"use strict";var zvr=typeof Float64Array=="function"?Float64Array:null;_8.exports=zvr});var L8=s((q8e,R8)=>{"use strict";var Xvr=A8(),I8=T8();function Jvr(){var r,e;if(typeof I8!="function")return!1;try{e=new I8([1,3.14,-3.14,NaN]),r=Xvr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}R8.exports=Jvr});var Po=s((b8e,P8)=>{"use strict";var Yvr=L8();P8.exports=Yvr});var M8=s((w8e,F8)=>{"use strict";var $vr=typeof Float64Array=="function"?Float64Array:void 0;F8.exports=$vr});var j8=s((E8e,B8)=>{"use strict";function Zvr(){throw new Error("not implemented")}B8.exports=Zvr});var lr=s((N8e,k8)=>{"use strict";var Qvr=Po(),Kvr=M8(),rcr=j8(),Fo;Qvr()?Fo=Kvr:Fo=rcr;k8.exports=Fo});var V8=s((O8e,C8)=>{"use strict";var ecr=er(),tcr=typeof Float32Array=="function";function icr(r){return tcr&&r instanceof Float32Array||ecr(r)==="[object Float32Array]"}C8.exports=icr});var G8=s((S8e,U8)=>{"use strict";var ncr=V8();U8.exports=ncr});var R=s((A8e,x8)=>{"use strict";var acr=Number.POSITIVE_INFINITY;x8.exports=acr});var H8=s((_8e,D8)=>{"use strict";var scr=typeof Float32Array=="function"?Float32Array:null;D8.exports=scr});var X8=s((T8e,z8)=>{"use strict";var ucr=G8(),ocr=R(),W8=H8();function fcr(){var r,e;if(typeof W8!="function")return!1;try{e=new W8([1,3.14,-3.14,5e40]),r=ucr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===ocr}catch{r=!1}return r}z8.exports=fcr});var Y8=s((I8e,J8)=>{"use strict";var vcr=X8();J8.exports=vcr});var Z8=s((R8e,$8)=>{"use strict";var ccr=typeof Float32Array=="function"?Float32Array:void 0;$8.exports=ccr});var K8=s((L8e,Q8)=>{"use strict";function lcr(){throw new Error("not implemented")}Q8.exports=lcr});var Qr=s((P8e,r5)=>{"use strict";var pcr=Y8(),gcr=Z8(),mcr=K8(),Mo;pcr()?Mo=gcr:Mo=mcr;r5.exports=Mo});var t5=s((F8e,e5)=>{"use strict";var dcr=er(),hcr=typeof Uint32Array=="function";function ycr(r){return hcr&&r instanceof Uint32Array||dcr(r)==="[object Uint32Array]"}e5.exports=ycr});var ge=s((M8e,i5)=>{"use strict";var qcr=t5();i5.exports=qcr});var vi=s((B8e,n5)=>{"use strict";var bcr=4294967295;n5.exports=bcr});var s5=s((j8e,a5)=>{"use strict";var wcr=typeof Uint32Array=="function"?Uint32Array:null;a5.exports=wcr});var f5=s((k8e,o5)=>{"use strict";var Ecr=ge(),Bo=vi(),u5=s5();function Ncr(){var r,e;if(typeof u5!="function")return!1;try{e=[1,3.14,-3.14,Bo+1,Bo+2],e=new u5(e),r=Ecr(e)&&e[0]===1&&e[1]===3&&e[2]===Bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}o5.exports=Ncr});var c5=s((C8e,v5)=>{"use strict";var Ocr=f5();v5.exports=Ocr});var p5=s((V8e,l5)=>{"use strict";var Scr=typeof Uint32Array=="function"?Uint32Array:void 0;l5.exports=Scr});var m5=s((U8e,g5)=>{"use strict";function Acr(){throw new Error("not implemented")}g5.exports=Acr});var pr=s((G8e,d5)=>{"use strict";var _cr=c5(),Tcr=p5(),Icr=m5(),jo;_cr()?jo=Tcr:jo=Icr;d5.exports=jo});var y5=s((x8e,h5)=>{"use strict";var Rcr=er(),Lcr=typeof Int32Array=="function";function Pcr(r){return Lcr&&r instanceof Int32Array||Rcr(r)==="[object Int32Array]"}h5.exports=Pcr});var Pa=s((D8e,q5)=>{"use strict";var Fcr=y5();q5.exports=Fcr});var ci=s((H8e,b5)=>{"use strict";var Mcr=2147483647;b5.exports=Mcr});var E5=s((W8e,w5)=>{"use strict";var Bcr=-2147483648;w5.exports=Bcr});var O5=s((z8e,N5)=>{"use strict";var jcr=typeof Int32Array=="function"?Int32Array:null;N5.exports=jcr});var _5=s((X8e,A5)=>{"use strict";var kcr=Pa(),Ccr=ci(),Vcr=E5(),S5=O5();function Ucr(){var r,e;if(typeof S5!="function")return!1;try{e=new S5([1,3.14,-3.14,Ccr+1]),r=kcr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Vcr}catch{r=!1}return r}A5.exports=Ucr});var I5=s((J8e,T5)=>{"use strict";var Gcr=_5();T5.exports=Gcr});var L5=s((Y8e,R5)=>{"use strict";var xcr=typeof Int32Array=="function"?Int32Array:void 0;R5.exports=xcr});var F5=s(($8e,P5)=>{"use strict";function Dcr(){throw new Error("not implemented")}P5.exports=Dcr});var Ke=s((Z8e,M5)=>{"use strict";var Hcr=I5(),Wcr=L5(),zcr=F5(),ko;Hcr()?ko=Wcr:ko=zcr;M5.exports=ko});var j5=s((Q8e,B5)=>{"use strict";var Xcr=er(),Jcr=typeof Uint16Array=="function";function Ycr(r){return Jcr&&r instanceof Uint16Array||Xcr(r)==="[object Uint16Array]"}B5.exports=Ycr});var C5=s((K8e,k5)=>{"use strict";var $cr=j5();k5.exports=$cr});var U5=s((r5e,V5)=>{"use strict";var Zcr=65535;V5.exports=Zcr});var x5=s((e5e,G5)=>{"use strict";var Qcr=typeof Uint16Array=="function"?Uint16Array:null;G5.exports=Qcr});var W5=s((t5e,H5)=>{"use strict";var Kcr=C5(),Co=U5(),D5=x5();function rlr(){var r,e;if(typeof D5!="function")return!1;try{e=[1,3.14,-3.14,Co+1,Co+2],e=new D5(e),r=Kcr(e)&&e[0]===1&&e[1]===3&&e[2]===Co-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}H5.exports=rlr});var X5=s((i5e,z5)=>{"use strict";var elr=W5();z5.exports=elr});var Y5=s((n5e,J5)=>{"use strict";var tlr=typeof Uint16Array=="function"?Uint16Array:void 0;J5.exports=tlr});var Z5=s((a5e,$5)=>{"use strict";function ilr(){throw new Error("not implemented")}$5.exports=ilr});var Gt=s((s5e,Q5)=>{"use strict";var nlr=X5(),alr=Y5(),slr=Z5(),Vo;nlr()?Vo=alr:Vo=slr;Q5.exports=Vo});var rp=s((u5e,K5)=>{"use strict";var ulr=er(),olr=typeof Int16Array=="function";function flr(r){return olr&&r instanceof Int16Array||ulr(r)==="[object Int16Array]"}K5.exports=flr});var tp=s((o5e,ep)=>{"use strict";var vlr=rp();ep.exports=vlr});var np=s((f5e,ip)=>{"use strict";var clr=32767;ip.exports=clr});var sp=s((v5e,ap)=>{"use strict";var llr=-32768;ap.exports=llr});var op=s((c5e,up)=>{"use strict";var plr=typeof Int16Array=="function"?Int16Array:null;up.exports=plr});var cp=s((l5e,vp)=>{"use strict";var glr=tp(),mlr=np(),dlr=sp(),fp=op();function hlr(){var r,e;if(typeof fp!="function")return!1;try{e=new fp([1,3.14,-3.14,mlr+1]),r=glr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===dlr}catch{r=!1}return r}vp.exports=hlr});var pp=s((p5e,lp)=>{"use strict";var ylr=cp();lp.exports=ylr});var mp=s((g5e,gp)=>{"use strict";var qlr=typeof Int16Array=="function"?Int16Array:void 0;gp.exports=qlr});var hp=s((m5e,dp)=>{"use strict";function blr(){throw new Error("not implemented")}dp.exports=blr});var li=s((d5e,yp)=>{"use strict";var wlr=pp(),Elr=mp(),Nlr=hp(),Uo;wlr()?Uo=Elr:Uo=Nlr;yp.exports=Uo});var bp=s((h5e,qp)=>{"use strict";var Olr=er(),Slr=typeof Uint8Array=="function";function Alr(r){return Slr&&r instanceof Uint8Array||Olr(r)==="[object Uint8Array]"}qp.exports=Alr});var Ep=s((y5e,wp)=>{"use strict";var _lr=bp();wp.exports=_lr});var Op=s((q5e,Np)=>{"use strict";var Tlr=255;Np.exports=Tlr});var Ap=s((b5e,Sp)=>{"use strict";var Ilr=typeof Uint8Array=="function"?Uint8Array:null;Sp.exports=Ilr});var Ip=s((w5e,Tp)=>{"use strict";var Rlr=Ep(),Go=Op(),_p=Ap();function Llr(){var r,e;if(typeof _p!="function")return!1;try{e=[1,3.14,-3.14,Go+1,Go+2],e=new _p(e),r=Rlr(e)&&e[0]===1&&e[1]===3&&e[2]===Go-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Tp.exports=Llr});var Lp=s((E5e,Rp)=>{"use strict";var Plr=Ip();Rp.exports=Plr});var Fp=s((N5e,Pp)=>{"use strict";var Flr=typeof Uint8Array=="function"?Uint8Array:void 0;Pp.exports=Flr});var Bp=s((O5e,Mp)=>{"use strict";function Mlr(){throw new Error("not implemented")}Mp.exports=Mlr});var Kr=s((S5e,jp)=>{"use strict";var Blr=Lp(),jlr=Fp(),klr=Bp(),xo;Blr()?xo=jlr:xo=klr;jp.exports=xo});var Cp=s((A5e,kp)=>{"use strict";var Clr=er(),Vlr=typeof Uint8ClampedArray=="function";function Ulr(r){return Vlr&&r instanceof Uint8ClampedArray||Clr(r)==="[object Uint8ClampedArray]"}kp.exports=Ulr});var Up=s((_5e,Vp)=>{"use strict";var Glr=Cp();Vp.exports=Glr});var xp=s((T5e,Gp)=>{"use strict";var xlr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Gp.exports=xlr});var Wp=s((I5e,Hp)=>{"use strict";var Dlr=Up(),Dp=xp();function Hlr(){var r,e;if(typeof Dp!="function")return!1;try{e=new Dp([-1,0,1,3.14,4.99,255,256]),r=Dlr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Hp.exports=Hlr});var Xp=s((R5e,zp)=>{"use strict";var Wlr=Wp();zp.exports=Wlr});var Yp=s((L5e,Jp)=>{"use strict";var zlr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Jp.exports=zlr});var Zp=s((P5e,$p)=>{"use strict";function Xlr(){throw new Error("not implemented")}$p.exports=Xlr});var pi=s((F5e,Qp)=>{"use strict";var Jlr=Xp(),Ylr=Yp(),$lr=Zp(),Do;Jlr()?Do=Ylr:Do=$lr;Qp.exports=Do});var r7=s((M5e,Kp)=>{"use strict";var Zlr=er(),Qlr=typeof Int8Array=="function";function Klr(r){return Qlr&&r instanceof Int8Array||Zlr(r)==="[object Int8Array]"}Kp.exports=Klr});var t7=s((B5e,e7)=>{"use strict";var r6r=r7();e7.exports=r6r});var n7=s((j5e,i7)=>{"use strict";var e6r=127;i7.exports=e6r});var s7=s((k5e,a7)=>{"use strict";var t6r=-128;a7.exports=t6r});var o7=s((C5e,u7)=>{"use strict";var i6r=typeof Int8Array=="function"?Int8Array:null;u7.exports=i6r});var c7=s((V5e,v7)=>{"use strict";var n6r=t7(),a6r=n7(),s6r=s7(),f7=o7();function u6r(){var r,e;if(typeof f7!="function")return!1;try{e=new f7([1,3.14,-3.14,a6r+1]),r=n6r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===s6r}catch{r=!1}return r}v7.exports=u6r});var p7=s((U5e,l7)=>{"use strict";var o6r=c7();l7.exports=o6r});var m7=s((G5e,g7)=>{"use strict";var f6r=typeof Int8Array=="function"?Int8Array:void 0;g7.exports=f6r});var h7=s((x5e,d7)=>{"use strict";function v6r(){throw new Error("not implemented")}d7.exports=v6r});var gi=s((D5e,y7)=>{"use strict";var c6r=p7(),l6r=m7(),p6r=h7(),Ho;c6r()?Ho=l6r:Ho=p6r;y7.exports=Ho});var Wo=s((H5e,q7)=>{"use strict";function g6r(r){return typeof r=="number"}q7.exports=g6r});var w7=s((W5e,b7)=>{"use strict";b7.exports=Number});var Fa=s((z5e,E7)=>{"use strict";var m6r=w7();E7.exports=m6r});var O7=s((X5e,N7)=>{"use strict";var d6r=Fa(),h6r=d6r.prototype.toString;N7.exports=h6r});var A7=s((J5e,S7)=>{"use strict";var y6r=O7();function q6r(r){try{return y6r.call(r),!0}catch{return!1}}S7.exports=q6r});var zo=s((Y5e,_7)=>{"use strict";var b6r=fi(),w6r=er(),E6r=Fa(),N6r=A7(),O6r=b6r();function S6r(r){return typeof r=="object"?r instanceof E6r?!0:O6r?N6r(r):w6r(r)==="[object Number]":!1}_7.exports=S6r});var I7=s(($5e,T7)=>{"use strict";var A6r=Wo(),_6r=zo();function T6r(r){return A6r(r)||_6r(r)}T7.exports=T6r});var M=s((Z5e,L7)=>{"use strict";var R7=b(),Xo=I7(),I6r=Wo(),R6r=zo();R7(Xo,"isPrimitive",I6r);R7(Xo,"isObject",R6r);L7.exports=Xo});var V=s((Q5e,P7)=>{"use strict";var L6r=Fa(),P6r=L6r.NEGATIVE_INFINITY;P7.exports=P6r});var Jo=s((K5e,F7)=>{"use strict";var F6r=R(),M6r=V(),B6r=yr();function j6r(r){return r<F6r&&r>M6r&&B6r(r)}F7.exports=j6r});var Yo=s((rpe,M7)=>{"use strict";var k6r=M().isPrimitive,C6r=Jo();function V6r(r){return k6r(r)&&C6r(r)}M7.exports=V6r});var $o=s((epe,B7)=>{"use strict";var U6r=M().isObject,G6r=Jo();function x6r(r){return U6r(r)&&G6r(r.valueOf())}B7.exports=x6r});var k7=s((tpe,j7)=>{"use strict";var D6r=Yo(),H6r=$o();function W6r(r){return D6r(r)||H6r(r)}j7.exports=W6r});var gr=s((ipe,V7)=>{"use strict";var C7=b(),Zo=k7(),z6r=Yo(),X6r=$o();C7(Zo,"isPrimitive",z6r);C7(Zo,"isObject",X6r);V7.exports=Zo});var Qo=s((npe,U7)=>{"use strict";var J6r=gr().isPrimitive;function Y6r(r){return J6r(r)&&r>=0}U7.exports=Y6r});var Ko=s((ape,G7)=>{"use strict";var $6r=gr().isObject;function Z6r(r){return $6r(r)&&r.valueOf()>=0}G7.exports=Z6r});var D7=s((spe,x7)=>{"use strict";var Q6r=Qo(),K6r=Ko();function r4r(r){return Q6r(r)||K6r(r)}x7.exports=r4r});var hr=s((upe,W7)=>{"use strict";var H7=b(),r1=D7(),e4r=Qo(),t4r=Ko();H7(r1,"isPrimitive",e4r);H7(r1,"isObject",t4r);W7.exports=r1});var e1=s((ope,z7)=>{"use strict";var i4r=4294967295;z7.exports=i4r});var J7=s((fpe,X7)=>{"use strict";var n4r=yr(),a4r=e1();function s4r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&n4r(r.length)&&r.length>=0&&r.length<=a4r}X7.exports=s4r});var xt=s((vpe,Y7)=>{"use strict";var u4r=J7();Y7.exports=u4r});var Z7=s((cpe,$7)=>{"use strict";var o4r=er(),f4r=typeof ArrayBuffer=="function";function v4r(r){return f4r&&r instanceof ArrayBuffer||o4r(r)==="[object ArrayBuffer]"}$7.exports=v4r});var Ma=s((lpe,Q7)=>{"use strict";var c4r=Z7();Q7.exports=c4r});var r9=s((ppe,K7)=>{"use strict";var l4r=dr();function p4r(r){return typeof r=="object"&&r!==null&&!l4r(r)}K7.exports=p4r});var Ba=s((gpe,e9)=>{"use strict";var g4r=r9();e9.exports=g4r});var i9=s((mpe,t9)=>{"use strict";function m4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}t9.exports=m4r});var a9=s((dpe,n9)=>{"use strict";function d4r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}n9.exports=d4r});var v9=s((hpe,f9)=>{"use strict";var s9=M().isPrimitive,u9=Ze(),qn=b(),o9=q(),h4r=i9(),y4r=a9();function Dt(r,e){if(!(this instanceof Dt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s9(r))throw new TypeError(o9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!s9(e))throw new TypeError(o9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return u9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),u9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}qn(Dt,"BYTES_PER_ELEMENT",8);qn(Dt.prototype,"BYTES_PER_ELEMENT",8);qn(Dt.prototype,"byteLength",16);qn(Dt.prototype,"toString",h4r);qn(Dt.prototype,"toJSON",y4r);f9.exports=Dt});var mi=s((ype,c9)=>{"use strict";var q4r=v9();c9.exports=q4r});var p9=s((qpe,l9)=>{"use strict";var b4r=typeof Math.fround=="function"?Math.fround:null;l9.exports=b4r});var d9=s((bpe,m9)=>{"use strict";var w4r=Qr(),g9=new w4r(1);function E4r(r){return g9[0]=r,g9[0]}m9.exports=E4r});var q9=s((wpe,y9)=>{"use strict";var h9=p9(),N4r=d9(),t1;typeof h9=="function"?t1=h9:t1=N4r;y9.exports=t1});var w9=s((Epe,b9)=>{"use strict";function O4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}b9.exports=O4r});var N9=s((Npe,E9)=>{"use strict";function S4r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}E9.exports=S4r});var I9=s((Ope,T9)=>{"use strict";var O9=M().isPrimitive,S9=Ze(),bn=b(),A9=q9(),_9=q(),A4r=w9(),_4r=N9();function Ht(r,e){if(!(this instanceof Ht))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!O9(r))throw new TypeError(_9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!O9(e))throw new TypeError(_9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return S9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:A9(r)}),S9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:A9(e)}),this}bn(Ht,"BYTES_PER_ELEMENT",4);bn(Ht.prototype,"BYTES_PER_ELEMENT",4);bn(Ht.prototype,"byteLength",8);bn(Ht.prototype,"toString",A4r);bn(Ht.prototype,"toJSON",_4r);T9.exports=Ht});var di=s((Spe,R9)=>{"use strict";var T4r=I9();R9.exports=T4r});var P9=s((Ape,L9)=>{"use strict";var I4r=mi(),R4r=di();function L4r(r){return r instanceof I4r||r instanceof R4r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}L9.exports=L4r});var Wr=s((_pe,F9)=>{"use strict";var P4r=P9();F9.exports=P4r});var B9=s((Tpe,M9)=>{"use strict";var F4r=yr();function M4r(r){return F4r(r/2)}M9.exports=M4r});var ja=s((Ipe,j9)=>{"use strict";var B4r=B9();j9.exports=B4r});var C9=s((Rpe,k9)=>{"use strict";var j4r=S(),ka=yo();function k4r(){return typeof ka=="function"&&typeof ka("foo")=="symbol"&&j4r(ka,"iterator")&&typeof ka.iterator=="symbol"}k9.exports=k4r});var Ca=s((Lpe,V9)=>{"use strict";var C4r=C9();V9.exports=C4r});var G9=s((Ppe,U9)=>{"use strict";var V4r=Ca(),U4r=V4r()?Symbol.iterator:null;U9.exports=U4r});var wn=s((Fpe,x9)=>{"use strict";var G4r=G9();x9.exports=G4r});var H9=s((Mpe,D9)=>{"use strict";var x4r=Ze();function D4r(r,e,t){x4r(r,e,{configurable:!1,enumerable:!1,get:t})}D9.exports=D4r});var L=s((Bpe,W9)=>{"use strict";var H4r=H9();W9.exports=H4r});var X9=s((jpe,z9)=>{"use strict";function W4r(r){return r.re}z9.exports=W4r});var rt=s((kpe,J9)=>{"use strict";var z4r=X9();J9.exports=z4r});var $9=s((Cpe,Y9)=>{"use strict";function X4r(r){return r.im}Y9.exports=X4r});var et=s((Vpe,Z9)=>{"use strict";var J4r=$9();Z9.exports=J4r});var K9=s((Upe,Q9)=>{"use strict";var Y4r=Qr();function $4r(r,e){return new Y4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}Q9.exports=$4r});var hi=s((Gpe,rg)=>{"use strict";var Z4r=K9();rg.exports=Z4r});var tg=s((xpe,eg)=>{"use strict";var Q4r=lr();function K4r(r,e){return new Q4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}eg.exports=K4r});var yi=s((Dpe,ig)=>{"use strict";var r8r=tg();ig.exports=r8r});var sg=s((Hpe,ag)=>{"use strict";var ng={float64:e8r,float32:t8r,int32:i8r,int16:n8r,int8:a8r,uint32:s8r,uint16:u8r,uint8:o8r,uint8c:f8r,generic:v8r,default:c8r};function e8r(r,e){return r[e]}function t8r(r,e){return r[e]}function i8r(r,e){return r[e]}function n8r(r,e){return r[e]}function a8r(r,e){return r[e]}function s8r(r,e){return r[e]}function u8r(r,e){return r[e]}function o8r(r,e){return r[e]}function f8r(r,e){return r[e]}function v8r(r,e){return r[e]}function c8r(r,e){return r[e]}function l8r(r){var e=ng[r];return typeof e=="function"?e:ng.default}ag.exports=l8r});var En=s((Wpe,ug)=>{"use strict";var p8r=sg();ug.exports=p8r});var vg=s((zpe,fg)=>{"use strict";var og={complex128:g8r,complex64:m8r,default:d8r};function g8r(r,e){return r.get(e)}function m8r(r,e){return r.get(e)}function d8r(r,e){return r.get(e)}function h8r(r){var e=og[r];return typeof e=="function"?e:og.default}fg.exports=h8r});var qi=s((Xpe,cg)=>{"use strict";var y8r=vg();cg.exports=y8r});var pg=s((Jpe,lg)=>{"use strict";var q8r=xt(),b8r=Wr(),w8r=rt(),E8r=et(),N8r=q();function O8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,q8r(i)&&i.length>=2)e.push(i[0],i[1]);else if(b8r(i))e.push(w8r(i),E8r(i));else return new TypeError(N8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}lg.exports=O8r});var mg=s((Ype,gg)=>{"use strict";var S8r=xt(),A8r=Wr(),_8r=rt(),T8r=et(),I8r=q();function R8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),S8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(A8r(a))i.push(_8r(a),T8r(a));else return new TypeError(I8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}gg.exports=R8r});var hg=s(($pe,dg)=>{"use strict";var L8r=Wr(),P8r=rt(),F8r=et();function M8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!L8r(i))return null;r[a]=P8r(i),r[a+1]=F8r(i),a+=2}return r}dg.exports=M8r});var Ag=s((Zpe,Sg)=>{"use strict";var Nn=hr().isPrimitive,yg=xt(),n1=Br(),qg=Ma(),bg=Ba(),B8r=dr(),Wt=I(),bi=Wr(),Va=ja(),i1=yr(),j8r=Ca(),wi=wn(),qr=b(),xa=L(),Ur=Qr(),wg=di(),$=q(),Ua=rt(),Ga=et(),k8r=hi(),C8r=yi(),V8r=En(),U8r=qi(),Eg=pg(),G8r=mg(),x8r=hg(),jr=Ur.BYTES_PER_ELEMENT*2,Ng=j8r();function Ei(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Og(r){return r===tr||r.name==="Complex128Array"}function D8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===jr}function H8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===jr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ur(0);else if(e===1)if(Nn(arguments[0]))t=new Ur(arguments[0]*2);else if(n1(arguments[0]))if(t=arguments[0],i=t.length,i&&B8r(t)&&bi(t[0])){if(t=x8r(new Ur(i*2),t),t===null){if(!Va(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(arguments[0])}}else{if(D8r(t))t=k8r(t,0);else if(H8r(t))t=C8r(t,0);else if(!Va(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(t)}else if(qg(arguments[0])){if(t=arguments[0],!i1(t.byteLength/jr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",jr,t.byteLength));t=new Ur(t)}else if(bg(arguments[0])){if(t=arguments[0],Ng===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Wt(t[wi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[wi](),!Wt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Eg(t),t instanceof Error)throw t;t=new Ur(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!qg(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Nn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!i1(r/jr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",jr,r));if(e===2){if(i=t.byteLength-r,!i1(i/jr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",jr,i));t=new Ur(t,r)}else{if(i=arguments[2],!Nn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*jr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*jr));t=new Ur(t,r,i*2)}}return qr(this,"_buffer",t),qr(this,"_length",t.length/2),this}qr(tr,"BYTES_PER_ELEMENT",jr);qr(tr,"name","Complex64Array");qr(tr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,g;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Og(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Wt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(Ei(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),bi(l))u[g]=Ua(l),u[g+1]=Ga(l);else if(yg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(n1(e)){if(n){for(f=e.length,e.get&&e.set?v=U8r("default"):v=V8r("default"),p=0;p<f;p++)if(!bi(v(e,p))){c=!0;break}if(c){if(!Va(f))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),bi(l))u[g]=Ua(l),u[g+1]=Ga(l);else if(yg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(bg(e)&&Ng&&Wt(e[wi])){if(u=e[wi](),!Wt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=G8r(u,n,t):o=Eg(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});qr(tr,"of",function(){var e,t;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Og(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});xa(tr.prototype,"buffer",function(){return this._buffer.buffer});xa(tr.prototype,"byteLength",function(){return this._buffer.byteLength});xa(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});qr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);qr(tr.prototype,"copyWithin",function(e,t){if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});qr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},qr(i,"next",v),qr(i,"return",f),wi&&qr(i,wi,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new wg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});qr(tr.prototype,"get",function(e){var t;if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Nn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new wg(t[e],t[e+1])});xa(tr.prototype,"length",function(){return this._length});qr(tr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!Ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Nn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(bi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ua(e),n[i+1]=Ga(e);return}if(Ei(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(n1(e)){for(o=e.length,f=0;f<o;f++)if(!bi(e[f])){u=!0;break}if(u){if(!Va(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ua(v),n[i+1]=Ga(v),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Sg.exports=tr});var Ni=s((Qpe,_g)=>{"use strict";var W8r=Ag();_g.exports=W8r});var Ig=s((Kpe,Tg)=>{"use strict";function z8r(r){return r.re}Tg.exports=z8r});var re=s((r7e,Rg)=>{"use strict";var X8r=Ig();Rg.exports=X8r});var Pg=s((e7e,Lg)=>{"use strict";function J8r(r){return r.im}Lg.exports=J8r});var ee=s((t7e,Fg)=>{"use strict";var Y8r=Pg();Fg.exports=Y8r});var Bg=s((i7e,Mg)=>{"use strict";var $8r=xt(),Z8r=Wr(),Q8r=q(),K8r=re(),r5r=ee();function e5r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,$8r(i)&&i.length>=2)e.push(i[0],i[1]);else if(Z8r(i))e.push(K8r(i),r5r(i));else return new TypeError(Q8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Mg.exports=e5r});var kg=s((n7e,jg)=>{"use strict";var t5r=xt(),i5r=Wr(),n5r=q(),a5r=re(),s5r=ee();function u5r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),t5r(a)&&a.length>=2)i.push(a[0],a[1]);else if(i5r(a))i.push(a5r(a),s5r(a));else return new TypeError(n5r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}jg.exports=u5r});var Vg=s((a7e,Cg)=>{"use strict";var o5r=Wr(),f5r=re(),v5r=ee();function c5r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!o5r(i))return null;r[a]=f5r(i),r[a+1]=v5r(i),a+=2}return r}Cg.exports=c5r});var Jg=s((s7e,Xg)=>{"use strict";var On=hr().isPrimitive,Ug=xt(),s1=Br(),Gg=Ma(),xg=Ba(),l5r=dr(),zt=I(),Oi=Wr(),Da=ja(),a1=yr(),p5r=Ca(),Si=wn(),br=b(),za=L(),Gr=lr(),Dg=mi(),Ha=re(),Wa=ee(),g5r=hi(),m5r=yi(),d5r=En(),h5r=qi(),Z=q(),Hg=Bg(),y5r=kg(),q5r=Vg(),kr=Gr.BYTES_PER_ELEMENT*2,Wg=p5r();function Ai(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function zg(r){return r===ir||r.name==="Complex64Array"}function b5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===kr/2}function w5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===kr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Gr(0);else if(e===1)if(On(arguments[0]))t=new Gr(arguments[0]*2);else if(s1(arguments[0]))if(t=arguments[0],i=t.length,i&&l5r(t)&&Oi(t[0])){if(t=q5r(new Gr(i*2),t),t===null){if(!Da(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(arguments[0])}}else{if(b5r(t))t=g5r(t,0);else if(w5r(t))t=m5r(t,0);else if(!Da(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(t)}else if(Gg(arguments[0])){if(t=arguments[0],!a1(t.byteLength/kr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",kr,t.byteLength));t=new Gr(t)}else if(xg(arguments[0])){if(t=arguments[0],Wg===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!zt(t[Si]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Si](),!zt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Hg(t),t instanceof Error)throw t;t=new Gr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Gg(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!On(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!a1(r/kr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",kr,r));if(e===2){if(i=t.byteLength-r,!a1(i/kr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",kr,i));t=new Gr(t,r)}else{if(i=arguments[2],!On(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*kr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*kr));t=new Gr(t,r,i*2)}}return br(this,"_buffer",t),br(this,"_length",t.length/2),this}br(ir,"BYTES_PER_ELEMENT",kr);br(ir,"name","Complex128Array");br(ir,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,g;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!zt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(Ai(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),Oi(l))u[g]=Ha(l),u[g+1]=Wa(l);else if(Ug(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(s1(e)){if(n){for(f=e.length,e.get&&e.set?v=h5r("default"):v=d5r("default"),p=0;p<f;p++)if(!Oi(v(e,p))){c=!0;break}if(c){if(!Da(f))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),Oi(l))u[g]=Ha(l),u[g+1]=Wa(l);else if(Ug(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(xg(e)&&Wg&&zt(e[Si])){if(u=e[Si](),!zt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=y5r(u,n,t):o=Hg(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});br(ir,"of",function(){var e,t;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});za(ir.prototype,"buffer",function(){return this._buffer.buffer});za(ir.prototype,"byteLength",function(){return this._buffer.byteLength});za(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});br(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);br(ir.prototype,"copyWithin",function(e,t){if(!Ai(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});br(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!Ai(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},br(i,"next",v),br(i,"return",f),Si&&br(i,Si,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Dg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});br(ir.prototype,"get",function(e){var t;if(!Ai(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!On(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Dg(t[e],t[e+1])});za(ir.prototype,"length",function(){return this._length});br(ir.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!Ai(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!On(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Oi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ha(e),n[i+1]=Wa(e);return}if(Ai(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*kr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(s1(e)){for(o=e.length,f=0;f<o;f++)if(!Oi(e[f])){u=!0;break}if(u){if(!Da(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*kr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ha(v),n[i+1]=Wa(v),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Xg.exports=ir});var _i=s((u7e,Yg)=>{"use strict";var E5r=Jg();Yg.exports=E5r});var Zg=s((o7e,$g)=>{"use strict";var N5r=lr(),O5r=Qr(),S5r=pr(),A5r=Ke(),_5r=Gt(),T5r=li(),I5r=Kr(),R5r=pi(),L5r=gi(),P5r=Ni(),F5r=_i(),M5r=[N5r,O5r,A5r,S5r,T5r,_5r,L5r,I5r,R5r,P5r,F5r];$g.exports=M5r});var Kg=s((f7e,Qg)=>{"use strict";var B5r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Qg.exports=B5r});var tm=s((v7e,em)=>{"use strict";var j5r=Ut(),k5r=dr(),C5r=pe(),V5r=E8(),U5r=Zg(),rm=Kg(),G5r=rm.length;function x5r(r){var e;if(k5r(r))return"generic";if(j5r(r))return null;for(e=0;e<G5r;e++)if(r instanceof U5r[e])return rm[e];return V5r[C5r(r)]||null}em.exports=x5r});var Ti=s((c7e,im)=>{"use strict";var D5r=tm();im.exports=D5r});var sm=s((l7e,am)=>{"use strict";var nm=I(),H5r=Br(),W5r=o8(),z5r=yn(),X5r=Ro(),J5r=Lo(),Y5r=Ti(),u1=q();function $5r(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(H5r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!nm(t))throw new TypeError(u1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!nm(t))throw new TypeError(u1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!W5r(r))throw new TypeError(u1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=Y5r(i),z5r(i)?a=X5r(u):a=J5r(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}am.exports=$5r});var om=s((p7e,um)=>{"use strict";var Z5r=sm();um.exports=Z5r});var vm=s((g7e,fm)=>{"use strict";function Q5r(r){return r!==r}fm.exports=Q5r});var E=s((m7e,cm)=>{"use strict";var K5r=vm();cm.exports=K5r});var pm=s((d7e,lm)=>{"use strict";var rpr={Complex64:"complex64",Complex128:"complex128"};lm.exports=rpr});var mm=s((h7e,gm)=>{"use strict";var epr=di(),tpr=mi(),ipr=[epr,tpr];gm.exports=ipr});var hm=s((y7e,dm)=>{"use strict";var npr=["complex64","complex128"];dm.exports=npr});var bm=s((q7e,qm)=>{"use strict";var apr=pe(),spr=pm(),upr=mm(),ym=hm(),opr=ym.length;function fpr(r){var e;for(e=0;e<opr;e++)if(r instanceof upr[e])return ym[e];return spr[apr(r)]||null}qm.exports=fpr});var o1=s((b7e,wm)=>{"use strict";var vpr=bm();wm.exports=vpr});var Nm=s((w7e,Em)=>{"use strict";var cpr=lr(),lpr=Qr(),ppr=_i(),gpr=Ni(),mpr={float64:cpr,float32:lpr,complex128:ppr,complex64:gpr};Em.exports=mpr});var Sm=s((E7e,Om)=>{"use strict";var dpr=Nm();function hpr(r){return dpr[r]||null}Om.exports=hpr});var _m=s((N7e,Am)=>{"use strict";var ypr=Sm();Am.exports=ypr});var Im=s((O7e,Tm)=>{"use strict";function qpr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Tm.exports=qpr});var Bm=s((S7e,Mm)=>{"use strict";var bpr=di(),wpr=mi(),Rm=re(),Lm=ee(),Pm=rt(),Fm=et();function Epr(r,e,t,i,n,a){var u,o,v,f,c,l,p,g,h,d,m,y,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Pm(e),l=Fm(e)):(f=Rm(e),l=Lm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Pm(i),p=Fm(i)):(c=Rm(i),p=Lm(i)),o===2?u=bpr:u=wpr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?y=n-1:y=n,d=(c-f)/y,m=(p-l)/y,N=1;N<y;N++)g=f+d*N,h=l+m*N,v.push(new u(g,h));return a&&v.push(new u(c,p)),v}Mm.exports=Epr});var f1=s((A7e,jm)=>{"use strict";function Npr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}jm.exports=Npr});var v1=s((_7e,Gm)=>{"use strict";var km=re(),Cm=ee(),Vm=rt(),Um=et();function Opr(r,e,t,i,n,a,u){var o,v,f,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=Vm(t),f=Um(t)):(o=km(t),f=Cm(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=Vm(n),c=Um(n)):(v=km(n),c=Cm(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?g=a-1:g=a,l=(v-o)/g,p=(c-f)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}Gm.exports=Opr});var Dm=s((T7e,xm)=>{"use strict";var Spr=Object;xm.exports=Spr});var Ii=s((I7e,Hm)=>{"use strict";var Apr=Dm();Hm.exports=Apr});var zm=s((R7e,Wm)=>{"use strict";var _pr=Object.getPrototypeOf;Wm.exports=_pr});var Jm=s((L7e,Xm)=>{"use strict";function Tpr(r){return r.__proto__}Xm.exports=Tpr});var $m=s((P7e,Ym)=>{"use strict";var Ipr=er(),Rpr=Jm();function Lpr(r){var e=Rpr(r);return e||e===null?e:Ipr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Ym.exports=Lpr});var Qm=s((F7e,Zm)=>{"use strict";var Ppr=I(),Fpr=zm(),Mpr=$m(),c1;Ppr(Object.getPrototypeOf)?c1=Fpr:c1=Mpr;Zm.exports=c1});var rd=s((M7e,Km)=>{"use strict";var Bpr=Ii(),jpr=Qm();function kpr(r){return r==null?null:(r=Bpr(r),jpr(r))}Km.exports=kpr});var Xt=s((B7e,ed)=>{"use strict";var Cpr=rd();ed.exports=Cpr});var nd=s((j7e,id)=>{"use strict";var Vpr=Ba(),td=I(),Upr=Xt(),Xa=S(),Gpr=er(),xpr=Object.prototype;function Dpr(r){var e;for(e in r)if(!Xa(r,e))return!1;return!0}function Hpr(r){var e;return Vpr(r)?(e=Upr(r),e?!Xa(r,"constructor")&&Xa(e,"constructor")&&td(e.constructor)&&Gpr(e.constructor)==="[object Function]"&&Xa(e,"isPrototypeOf")&&td(e.isPrototypeOf)&&(e===xpr||Dpr(r)):!0):!1}id.exports=Hpr});var T=s((k7e,ad)=>{"use strict";var Wpr=nd();ad.exports=Wpr});var l1=s((C7e,sd)=>{"use strict";function zpr(r){return typeof r=="string"}sd.exports=zpr});var od=s((V7e,ud)=>{"use strict";var Xpr=String.prototype.valueOf;ud.exports=Xpr});var vd=s((U7e,fd)=>{"use strict";var Jpr=od();function Ypr(r){try{return Jpr.call(r),!0}catch{return!1}}fd.exports=Ypr});var p1=s((G7e,cd)=>{"use strict";var $pr=fi(),Zpr=er(),Qpr=vd(),Kpr=$pr();function r7r(r){return typeof r=="object"?r instanceof String?!0:Kpr?Qpr(r):Zpr(r)==="[object String]":!1}cd.exports=r7r});var pd=s((x7e,ld)=>{"use strict";var e7r=l1(),t7r=p1();function i7r(r){return e7r(r)||t7r(r)}ld.exports=i7r});var Q=s((D7e,md)=>{"use strict";var gd=b(),g1=pd(),n7r=l1(),a7r=p1();gd(g1,"isPrimitive",n7r);gd(g1,"isObject",a7r);md.exports=g1});var d1=s((H7e,hd)=>{"use strict";var s7r=T(),dd=S(),u7r=Q().isPrimitive,o7r=cr().isPrimitive,m1=q();function f7r(r,e){return s7r(e)?dd(e,"dtype")&&(r.dtype=e.dtype,!u7r(r.dtype))?new TypeError(m1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):dd(e,"endpoint")&&(r.endpoint=e.endpoint,!o7r(r.endpoint))?new TypeError(m1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(m1("invalid argument. Options argument must be an object. Value: `%s`.",e))}hd.exports=f7r});var h1=s((W7e,v7r)=>{v7r.exports={endpoint:!0}});var Od=s((z7e,Nd)=>{"use strict";var yd=Wr(),qd=M().isPrimitive,c7r=hr().isPrimitive,bd=E(),wd=o1(),l7r=_m(),p7r=hi(),g7r=yi(),Ri=q(),m7r=Im(),d7r=Bm(),h7r=f1(),Ed=v1(),y7r=d1(),q7r=h1();function b7r(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=wd(r),o===null){if(!yd(r))throw new TypeError(Ri("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!qd(r)||bd(r))throw new TypeError(Ri("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=wd(e),v===null){if(!yd(e))throw new TypeError(Ri("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!qd(e)||bd(e))throw new TypeError(Ri("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!c7r(t))throw new TypeError(Ri("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:q7r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=y7r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?d7r(o,r,v,e,t,i.endpoint):m7r(r,e,t,i.endpoint);if(n=l7r(i.dtype),n===null)throw new TypeError(Ri('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return Ed(p7r(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Ed(g7r(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return h7r(u,r,e,t,i.endpoint)}Nd.exports=b7r});var Ad=s((X7e,Sd)=>{"use strict";var w7r=yn(),E7r=En(),N7r=Lo(),O7r=qi(),S7r=Ro(),A7r=Ti();function _7r(r){var e=A7r(r);return w7r(r)?{accessorProtocol:!0,accessors:[O7r(e),S7r(e)]}:{accessorProtocol:!1,accessors:[E7r(e),N7r(e)]}}Sd.exports=_7r});var Td=s((J7e,_d)=>{"use strict";var T7r=Ad();_d.exports=T7r});var Rd=s((Y7e,Id)=>{"use strict";var I7r=Td();function R7r(r){var e=I7r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Id.exports=R7r});var Sn=s(($7e,Ld)=>{"use strict";var L7r=Rd();Ld.exports=L7r});var kd=s((Z7e,jd)=>{"use strict";var P7r=di(),F7r=mi(),Pd=re(),Fd=ee(),Md=rt(),Bd=et();function M7r(r,e,t,i,n,a,u){var o,v,f,c,l,p,g,h,d,m,y,N,O,F;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Md(t),l=Bd(t)):(f=Pd(t),l=Fd(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=Md(n),p=Bd(n)):(c=Pd(n),p=Fd(n)),v===2?o=P7r:o=F7r,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(f,l)),r;for(g(h,0,new o(f,l)),u?O=a-1:O=a,y=(c-f)/O,N=(p-l)/O,F=1;F<O;F++)d=f+y*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}jd.exports=M7r});var Vd=s((Q7e,Cd)=>{"use strict";function B7r(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}Cd.exports=B7r});var Xd=s((K7e,zd)=>{"use strict";var Ud=Wr(),Gd=M().isPrimitive,j7r=Br(),An=q(),xd=E(),Dd=o1(),k7r=Ti(),C7r=hi(),V7r=yi(),Hd=Sn(),U7r=kd(),G7r=Vd(),Wd=v1(),x7r=f1(),D7r=d1(),H7r=h1();function W7r(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=Dd(r),a===null){if(!Ud(r))throw new TypeError(An("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!Gd(r)||xd(r))throw new TypeError(An("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Dd(e),u===null){if(!Ud(e))throw new TypeError(An("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Gd(e)||xd(e))throw new TypeError(An("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!j7r(t))throw new TypeError(An("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:H7r.endpoint},arguments.length>3&&(n=D7r(i,arguments[3]),n))throw n;if(v=k7r(t),v===null&&(v="generic"),v==="complex64")return Wd(C7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return Wd(V7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=Hd(t),U7r(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=Hd(t),f.accessorProtocol?(G7r(f,r,e,t.length,i.endpoint),t):(x7r(t,r,e,t.length,i.endpoint),t)}zd.exports=W7r});var $d=s((r9e,Yd)=>{"use strict";var z7r=b(),Jd=Od(),X7r=Xd();z7r(Jd,"assign",X7r);Yd.exports=Jd});var Qd=s((e9e,Zd)=>{"use strict";var J7r=M().isPrimitive,Y7r=Q().isPrimitive,$7r=cr().isPrimitive,Z7r=dr(),Q7r=q(),K7r={number:J7r,string:Y7r,boolean:$7r};function r9r(r,e,t){var i,n,a,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],v=0;v<r.length;v++)if(o=r[v],a=e[v],u=K7r[a],u(o))i.push([[o]]),n.push([1,1]);else if(Z7r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(Q7r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],a,a,String(o)));return[i,n]}Zd.exports=r9r});var Ja=s((t9e,Kd)=>{"use strict";var e9r=Qd();Kd.exports=e9r});var eh=s((i9e,rh)=>{"use strict";var t9r=Ia();function i9r(r){return t9r(1,r)}rh.exports=i9r});var ih=s((n9e,th)=>{"use strict";var n9r=eh();th.exports=n9r});var ah=s((a9e,nh)=>{"use strict";function a9r(r,e,t){var i,n,a,u,o,v,f,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(f=r[0],c=r[1],u=0;u<n;u++)for(o=f[u],v=c[u],a=0;a<i;a++)v[a]=t(o[a])}nh.exports=a9r});var y1=s((s9e,sh)=>{"use strict";var s9r=ah();sh.exports=s9r});var oh=s((u9e,uh)=>{"use strict";var u9r=Ia();function o9r(r){return u9r(0,r)}uh.exports=o9r});var Ya=s((o9e,fh)=>{"use strict";var f9r=oh();fh.exports=f9r});var ch=s((f9e,vh)=>{"use strict";var wr=rr(),v9r=lo(),c9r=go(),l9r=Ta(),p9r=_a(),g9r=Ia(),m9r=v6(),d9r=Ra(),h9r=om(),y9r=$d(),q9r=Ja(),b9r=ih(),w9r=y1(),E9r=Qe(),N9r=Ya();function O9r(r){return wr(r,"bbinary2d",v9r),wr(r,"bternary2d",c9r),wr(r,"broadcastShapes",l9r),wr(r,"filled",p9r),wr(r,"filled2d",g9r),wr(r,"filled2dBy",m9r),wr(r,"flatten2d",d9r),wr(r,"iterator2array",h9r),wr(r,"linspace",y9r),wr(r,"normalizeBroadcastArgs",q9r),wr(r,"ones2d",b9r),wr(r,"unary2d",w9r),wr(r,"zeros",E9r),wr(r,"zeros2d",N9r),r}vh.exports=O9r});var gh=s((v9e,ph)=>{"use strict";var lh=q();function S9r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(lh('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(lh('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}ph.exports=S9r});var dh=s((c9e,mh)=>{"use strict";var A9r=gh();mh.exports=A9r});var yh=s((l9e,hh)=>{"use strict";var _9r=M().isPrimitive,T9r=dh(),I9r=q();function R9r(r,e,t,i,n,a){var u,o;if(!(_9r(r)&&T9r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(I9r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}hh.exports=R9r});var bh=s((p9e,qh)=>{"use strict";var L9r=yh();qh.exports=L9r});var Eh=s((g9e,wh)=>{"use strict";var P9r=cr().isPrimitive,F9r=q();function M9r(r,e){if(!P9r(r))throw new TypeError(F9r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}wh.exports=M9r});var Oh=s((m9e,Nh)=>{"use strict";var B9r=Eh();Nh.exports=B9r});var Ah=s((d9e,Sh)=>{"use strict";function j9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Sh.exports=j9r});var Th=s((h9e,_h)=>{"use strict";var k9r=Ah();_h.exports=k9r});var Rh=s((y9e,Ih)=>{"use strict";var C9r=q(),V9r=Th();function U9r(r,e,t){if(!V9r(r,e))throw new TypeError(C9r("invalid argument. %s must be broadcast compatible.",t))}Ih.exports=U9r});var Ph=s((q9e,Lh)=>{"use strict";var G9r=Rh();Lh.exports=G9r});var Mh=s((b9e,Fh)=>{"use strict";function x9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Fh.exports=x9r});var jh=s((w9e,Bh)=>{"use strict";var D9r=Mh();Bh.exports=D9r});var Ch=s((E9e,kh)=>{"use strict";var H9r=q(),W9r=jh();function z9r(r,e,t,i){if(!W9r(r,e))throw new TypeError(H9r("invalid argument. %s must be broadcast compatible with %s.",t,i))}kh.exports=z9r});var Uh=s((N9e,Vh)=>{"use strict";var X9r=Ch();Vh.exports=X9r});var xh=s((O9e,Gh)=>{"use strict";function J9r(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}Gh.exports=J9r});var Hh=s((S9e,Dh)=>{"use strict";function Y9r(r,e,t,i){var n,a,u,o,v;for(n=r.length,a=t,u=t,v=0;v<n;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(a+=o*(r[v]-1))}return i[0]=a,i[1]=u,i}Dh.exports=Y9r});var q1=s((A9e,zh)=>{"use strict";var $9r=b(),Wh=xh(),Z9r=Hh();$9r(Wh,"assign",Z9r);zh.exports=Wh});var Jh=s((_9e,Xh)=>{"use strict";var Q9r=q1();function K9r(r,e,t,i){var n=Q9r(e,t,i);return n[0]>=0&&n[1]<r}Xh.exports=K9r});var b1=s((T9e,Yh)=>{"use strict";var rgr=Jh();Yh.exports=rgr});var Zh=s((I9e,$h)=>{"use strict";var egr=b1();function tgr(r,e,t,i){if(e.length&&!egr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}$h.exports=tgr});var Kh=s((R9e,Qh)=>{"use strict";var igr=Zh();Qh.exports=igr});var ey=s((L9e,ry)=>{"use strict";var ngr=q();function agr(r,e){if(r===void 0)throw new Error(ngr("invalid invocation. Must provide %s.",e))}ry.exports=agr});var w1=s((P9e,ty)=>{"use strict";var sgr=ey();ty.exports=sgr});var ny=s((F9e,iy)=>{"use strict";var ugr=q();function ogr(r,e,t,i){if(!(r>e))throw new TypeError(ugr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}iy.exports=ogr});var sy=s((M9e,ay)=>{"use strict";var fgr=ny();ay.exports=fgr});var oy=s((B9e,uy)=>{"use strict";var vgr=q();function cgr(r,e,t,i){if(!(r>=e))throw new TypeError(vgr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}uy.exports=cgr});var vy=s((j9e,fy)=>{"use strict";var lgr=oy();fy.exports=lgr});var ly=s((k9e,cy)=>{"use strict";var pgr=gr().isPrimitive,ggr=q();function mgr(r,e){if(!pgr(r))throw new TypeError(ggr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}cy.exports=mgr});var gy=s((C9e,py)=>{"use strict";var dgr=ly();py.exports=dgr});var dy=s((V9e,my)=>{"use strict";var hgr=q();function ygr(r,e,t,i){if(!(r<e))throw new TypeError(hgr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}my.exports=ygr});var yy=s((U9e,hy)=>{"use strict";var qgr=dy();hy.exports=qgr});var by=s((G9e,qy)=>{"use strict";var bgr=q();function wgr(r,e,t,i){if(!(r<=e))throw new TypeError(bgr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}qy.exports=wgr});var Ey=s((x9e,wy)=>{"use strict";var Egr=by();wy.exports=Egr});var Oy=s((D9e,Ny)=>{"use strict";var Ngr=hr().isPrimitive,Ogr=q();function Sgr(r,e){if(!Ngr(r))throw new TypeError(Ogr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Ny.exports=Sgr});var Ay=s((H9e,Sy)=>{"use strict";var Agr=Oy();Sy.exports=Agr});var E1=s((W9e,_y)=>{"use strict";var _gr=M().isPrimitive;function Tgr(r){return _gr(r)&&r>=0}_y.exports=Tgr});var N1=s((z9e,Ty)=>{"use strict";var Igr=M().isObject;function Rgr(r){return Igr(r)&&r.valueOf()>=0}Ty.exports=Rgr});var Ry=s((X9e,Iy)=>{"use strict";var Lgr=E1(),Pgr=N1();function Fgr(r){return Lgr(r)||Pgr(r)}Iy.exports=Fgr});var $a=s((J9e,Py)=>{"use strict";var Ly=b(),O1=Ry(),Mgr=E1(),Bgr=N1();Ly(O1,"isPrimitive",Mgr);Ly(O1,"isObject",Bgr);Py.exports=O1});var My=s((Y9e,Fy)=>{"use strict";var jgr=$a().isPrimitive,kgr=q();function Cgr(r,e){if(!jgr(r))throw new TypeError(kgr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Fy.exports=Cgr});var jy=s(($9e,By)=>{"use strict";var Vgr=My();By.exports=Vgr});var Cy=s((Z9e,ky)=>{"use strict";var Ugr=M().isPrimitive,Ggr=q();function xgr(r,e){if(!Ugr(r))throw new TypeError(Ggr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}ky.exports=xgr});var Uy=s((Q9e,Vy)=>{"use strict";var Dgr=Cy();Vy.exports=Dgr});var xy=s((K9e,Gy)=>{"use strict";var Hgr=q();function Wgr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Hgr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}Gy.exports=Wgr});var Hy=s((rge,Dy)=>{"use strict";var zgr=xy();Dy.exports=zgr});var S1=s((ege,Wy)=>{"use strict";var Xgr=gr().isPrimitive;function Jgr(r){return Xgr(r)&&r>0}Wy.exports=Jgr});var A1=s((tge,zy)=>{"use strict";var Ygr=gr().isObject;function $gr(r){return Ygr(r)&&r.valueOf()>0}zy.exports=$gr});var Jy=s((ige,Xy)=>{"use strict";var Zgr=S1(),Qgr=A1();function Kgr(r){return Zgr(r)||Qgr(r)}Xy.exports=Kgr});var te=s((nge,$y)=>{"use strict";var Yy=b(),_1=Jy(),rmr=S1(),emr=A1();Yy(_1,"isPrimitive",rmr);Yy(_1,"isObject",emr);$y.exports=_1});var Qy=s((age,Zy)=>{"use strict";var tmr=te().isPrimitive,imr=q();function nmr(r,e){if(!tmr(r))throw new TypeError(imr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Zy.exports=nmr});var T1=s((sge,Ky)=>{"use strict";var amr=Qy();Ky.exports=amr});var I1=s((uge,rq)=>{"use strict";var smr=M().isPrimitive;function umr(r){return smr(r)&&r>0}rq.exports=umr});var R1=s((oge,eq)=>{"use strict";var omr=M().isObject;function fmr(r){return omr(r)&&r.valueOf()>0}eq.exports=fmr});var iq=s((fge,tq)=>{"use strict";var vmr=I1(),cmr=R1();function lmr(r){return vmr(r)||cmr(r)}tq.exports=lmr});var W=s((vge,aq)=>{"use strict";var nq=b(),L1=iq(),pmr=I1(),gmr=R1();nq(L1,"isPrimitive",pmr);nq(L1,"isObject",gmr);aq.exports=L1});var uq=s((cge,sq)=>{"use strict";var mmr=W().isPrimitive,dmr=q();function hmr(r,e){if(!mmr(r))throw new TypeError(dmr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}sq.exports=hmr});var fq=s((lge,oq)=>{"use strict";var ymr=uq();oq.exports=ymr});var P1=s((pge,vq)=>{"use strict";var qmr=M().isPrimitive;function bmr(r){return qmr(r)&&r>=0&&r<=1}vq.exports=bmr});var F1=s((gge,cq)=>{"use strict";var wmr=M().isObject;function Emr(r){return wmr(r)&&r.valueOf()>=0&&r.valueOf()<=1}cq.exports=Emr});var pq=s((mge,lq)=>{"use strict";var Nmr=P1(),Omr=F1();function Smr(r){return Nmr(r)||Omr(r)}lq.exports=Smr});var _n=s((dge,mq)=>{"use strict";var gq=b(),M1=pq(),Amr=P1(),_mr=F1();gq(M1,"isPrimitive",Amr);gq(M1,"isObject",_mr);mq.exports=M1});var hq=s((hge,dq)=>{"use strict";var Tmr=_n().isPrimitive,Imr=q();function Rmr(r,e){if(!Tmr(r))throw new TypeError(Imr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}dq.exports=Rmr});var qq=s((yge,yq)=>{"use strict";var Lmr=hq();yq.exports=Lmr});var wq=s((qge,bq)=>{"use strict";var Pmr=dr(),Fmr=q();function Mmr(r,e){if(!Pmr(r))throw new TypeError(Fmr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}bq.exports=Mmr});var Nq=s((bge,Eq)=>{"use strict";var Bmr=wq();Eq.exports=Bmr});var Sq=s((wge,Oq)=>{"use strict";function jmr(r){return r.length===1||r[0].length===1}Oq.exports=jmr});var _q=s((Ege,Aq)=>{"use strict";var kmr=Sq();Aq.exports=kmr});var Iq=s((Nge,Tq)=>{"use strict";var Cmr=dr(),Vmr=_q();function Umr(r){return Cmr(r)&&Vmr(r)}Tq.exports=Umr});var B1=s((Oge,Rq)=>{"use strict";var Gmr=Iq();Rq.exports=Gmr});var Pq=s((Sge,Lq)=>{"use strict";var xmr=q(),Dmr=B1();function Hmr(r,e){if(!Dmr(r))throw new TypeError(xmr("invalid argument. %s must consist of only a single row or a single column.",e))}Lq.exports=Hmr});var Mq=s((Age,Fq)=>{"use strict";var Wmr=Pq();Fq.exports=Wmr});var jq=s((_ge,Bq)=>{"use strict";function zmr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Bq.exports=zmr});var Cq=s((Tge,kq)=>{"use strict";var Xmr=jq();kq.exports=Xmr});var Uq=s((Ige,Vq)=>{"use strict";var Jmr=q(),Ymr=Cq();function $mr(r,e,t){if(!Ymr(r,e))throw new TypeError(Jmr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Vq.exports=$mr});var xq=s((Rge,Gq)=>{"use strict";var Zmr=Uq();Gq.exports=Zmr});var Hq=s((Lge,Dq)=>{"use strict";var Qmr=Q().isPrimitive,Kmr=q();function rdr(r,e){if(!Qmr(r))throw new TypeError(Kmr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}Dq.exports=rdr});var zq=s((Pge,Wq)=>{"use strict";var edr=Hq();Wq.exports=edr});var Jq=s((Fge,Xq)=>{"use strict";var tdr=q(),idr=hr().isPrimitive;function ndr(r,e){var t;for(t=0;t<r.length;t++)if(!idr(r[t]))throw new TypeError(tdr("invalid argument. %s must contain only nonnegative integers.",e))}Xq.exports=ndr});var $q=s((Mge,Yq)=>{"use strict";var adr=Jq();Yq.exports=adr});var Qq=s((Bge,Zq)=>{"use strict";var sdr=q(),udr=gr().isPrimitive;function odr(r,e){var t;for(t=0;t<r.length;t++)if(!udr(r[t]))throw new TypeError(sdr("invalid argument. %s must contain only integers.",e))}Zq.exports=odr});var rb=s((jge,Kq)=>{"use strict";var fdr=Qq();Kq.exports=fdr});var tb=s((kge,eb)=>{"use strict";var vdr=q();function cdr(r){throw new Error(vdr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}eb.exports=cdr});var nb=s((Cge,ib)=>{"use strict";var ldr=tb();ib.exports=ldr});var ub=s((Vge,sb)=>{"use strict";var ab=T1(),pdr=w1();function gdr(r,e,t){ab(r,"Number of rows"),ab(e,"Number of columns"),pdr(t,"a pseudorandom number generator seed")}sb.exports=gdr});var fb=s((Uge,ob)=>{"use strict";var mdr=ub();ob.exports=mdr});var cb=s((Gge,vb)=>{"use strict";var ddr=yr(),hdr=e1();function ydr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&ddr(r.length)&&r.length>=0&&r.length<=hdr}vb.exports=ydr});var pb=s((xge,lb)=>{"use strict";var qdr=cb();lb.exports=qdr});var mb=s((Dge,gb)=>{"use strict";var bdr=pb(),wdr=q();function Edr(r){if(typeof r!="function")throw new TypeError(wdr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!bdr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}gb.exports=Edr});var j1=s((Hge,db)=>{"use strict";var Ndr=mb();db.exports=Ndr});var qb=s((Wge,yb)=>{"use strict";var k1=gr(),hb=b(),C1=j1(),Odr=C1(k1.isPrimitive),Sdr=C1(k1.isObject),V1=C1(k1);hb(V1,"primitives",Odr);hb(V1,"objects",Sdr);yb.exports=V1});var Eb=s((zge,wb)=>{"use strict";var U1=hr(),bb=b(),G1=j1(),Adr=G1(U1.isPrimitive),_dr=G1(U1.isObject),x1=G1(U1);bb(x1,"primitives",Adr);bb(x1,"objects",_dr);wb.exports=x1});var Ob=s((Xge,Nb)=>{"use strict";var ie=rr(),Tdr=dr(),Idr=gr().isPrimitive,Rdr=qb().primitives,Ldr=hr().isPrimitive,Pdr=Eb().primitives,Fdr=$a().isPrimitive,Mdr=M().isPrimitive,Bdr=te().isPrimitive,jdr=W().isPrimitive,kdr=Q().isPrimitive;function Cdr(r){return ie(r,"isArray",Tdr),ie(r,"isInteger",Idr),ie(r,"isIntegerArray",Rdr),ie(r,"isNonNegativeInteger",Ldr),ie(r,"isNonNegativeIntegerArray",Pdr),ie(r,"isNonNegativeNumber",Fdr),ie(r,"isNumber",Mdr),ie(r,"isPositiveInteger",Bdr),ie(r,"isPositiveNumber",jdr),ie(r,"isString",kdr),r}Nb.exports=Cdr});var Ab=s((Jge,Sb)=>{"use strict";var X=rr(),Vdr=bh(),Udr=Oh(),Gdr=Ph(),xdr=Uh(),Ddr=Kh(),Hdr=w1(),Wdr=sy(),zdr=vy(),Xdr=gy(),Jdr=yy(),Ydr=Ey(),$dr=Ay(),Zdr=jy(),Qdr=Uy(),Kdr=Hy(),rhr=T1(),ehr=fq(),thr=qq(),ihr=Nq(),nhr=Mq(),ahr=xq(),shr=zq(),uhr=$q(),ohr=rb(),fhr=nb(),vhr=fb(),chr=Ob();function lhr(r){return X(r,"isBetween",Vdr),X(r,"isBoolean",Udr),X(r,"isBroadcastCompatible",Gdr),X(r,"isBroadcastCompatibleWith",xdr),X(r,"isBufferLengthCompatible",Ddr),X(r,"isDefined",Hdr),X(r,"isGreaterThan",Wdr),X(r,"isGreaterThanEqual",zdr),X(r,"isInteger",Xdr),X(r,"isLessThan",Jdr),X(r,"isLessThanEqual",Ydr),X(r,"isNonNegativeInteger",$dr),X(r,"isNonNegativeNumber",Zdr),X(r,"isNumber",Qdr),X(r,"isOneOf",Kdr),X(r,"isPositiveInteger",rhr),X(r,"isPositiveNumber",ehr),X(r,"isProbability",thr),X(r,"isRange",ihr),X(r,"isRange1d",nhr),X(r,"isSameShape",ahr),X(r,"isString",shr),X(r,"isValidShape",uhr),X(r,"isValidStrides",ohr),X(r,"unrecognizedOptionName",fhr),X(r,"verifyCommonPRNGArgs",vhr),X(r,"base",chr({})),r}Sb.exports=lhr});var Tb=s((Yge,_b)=>{"use strict";var D1=4;function phr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%D1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<D1)return n;for(f=v;f<r;f+=D1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}_b.exports=phr});var Rb=s(($ge,Ib)=>{"use strict";var Tn=4;function ghr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%Tn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<Tn)return a;for(l=c;l<r;l+=Tn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Tn,f+=Tn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}Ib.exports=ghr});var H1=s((Zge,Pb)=>{"use strict";var mhr=b(),Lb=Tb(),dhr=Rb();mhr(Lb,"ndarray",dhr);Pb.exports=Lb});var Bb=s((Qge,Mb)=>{"use strict";var Fb=rr(),hhr=H1().ndarray,yhr=H1().ndarray;function qhr(r){return Fb(r,"daxpy",hhr),Fb(r,"saxpy",yhr),r}Mb.exports=qhr});var kb=s((Kge,jb)=>{"use strict";var bhr=Xt(),whr=er();function Ehr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(whr(r)==="[object Error]")return!0;r=bhr(r)}return!1}jb.exports=Ehr});var Vb=s((rme,Cb)=>{"use strict";var Nhr=kb();Cb.exports=Nhr});var W1=s((eme,Ub)=>{"use strict";function Ohr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Ub.exports=Ohr});var xb=s((tme,Gb)=>{"use strict";var Shr=W1(),Ahr=Shr();Gb.exports=Ahr});var Wb=s((ime,Hb)=>{"use strict";var _hr=b(),Db=W1(),Thr=xb();_hr(Db,"REGEXP",Thr);Hb.exports=Db});var Xb=s((nme,zb)=>{"use strict";var Ihr=Q().isPrimitive,Rhr=Wb(),Lhr=q();function Phr(r){if(!Ihr(r))throw new TypeError(Lhr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=Rhr().exec(r),r?new RegExp(r[1],r[2]):null}zb.exports=Phr});var Yb=s((ame,Jb)=>{"use strict";var Fhr=Xb();Jb.exports=Fhr});var z1=s((sme,$b)=>{"use strict";var Mhr=M().isPrimitive,Bhr=E();function jhr(r){return Mhr(r)&&Bhr(r)}$b.exports=jhr});var X1=s((ume,Zb)=>{"use strict";var khr=M().isObject,Chr=E();function Vhr(r){return khr(r)&&Chr(r.valueOf())}Zb.exports=Vhr});var Kb=s((ome,Qb)=>{"use strict";var Uhr=z1(),Ghr=X1();function xhr(r){return Uhr(r)||Ghr(r)}Qb.exports=xhr});var fr=s((fme,ew)=>{"use strict";var rw=b(),J1=Kb(),Dhr=z1(),Hhr=X1();rw(J1,"isPrimitive",Dhr);rw(J1,"isObject",Hhr);ew.exports=J1});var aw=s((vme,nw)=>{"use strict";var tw=fr(),Whr=Br(),zhr=Q().isPrimitive,Xhr=gr().isPrimitive,iw=q();function Jhr(r,e,t){var i,n;if(!Whr(r)&&!zhr(r))throw new TypeError(iw("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Xhr(t))throw new TypeError(iw("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(tw(e)){for(;n<i;n++)if(tw(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}nw.exports=Jhr});var Za=s((cme,sw)=>{"use strict";var Yhr=aw();sw.exports=Yhr});var Qa=s((lme,uw)=>{"use strict";function $hr(r){return Object.keys(Object(r))}uw.exports=$hr});var fw=s((pme,ow)=>{"use strict";var Zhr=Qa();function Qhr(){return(Zhr(arguments)||"").length!==2}function Khr(){return Qhr(1,2)}ow.exports=Khr});var cw=s((gme,vw)=>{"use strict";var ryr=typeof Object.keys<"u";vw.exports=ryr});var Y1=s((mme,lw)=>{"use strict";var eyr=er();function tyr(r){return eyr(r)==="[object Arguments]"}lw.exports=tyr});var mw=s((dme,gw)=>{"use strict";var iyr=Y1(),pw;function nyr(){return iyr(arguments)}pw=nyr();gw.exports=pw});var $1=s((hme,dw)=>{"use strict";var ayr=Object.prototype.propertyIsEnumerable;dw.exports=ayr});var qw=s((yme,yw)=>{"use strict";var syr=$1(),hw;function uyr(){return!syr.call("beep","0")}hw=uyr();yw.exports=hw});var ww=s((qme,bw)=>{"use strict";var oyr=Q(),fyr=fr().isPrimitive,vyr=gr().isPrimitive,cyr=$1(),lyr=qw();function pyr(r,e){var t;return r==null?!1:(t=cyr.call(r,e),!t&&lyr&&oyr(r)?(e=+e,!fyr(e)&&vyr(e)&&e>=0&&e<r.length):t)}bw.exports=pyr});var In=s((bme,Ew)=>{"use strict";var gyr=ww();Ew.exports=gyr});var Ow=s((wme,Nw)=>{"use strict";var myr=S(),dyr=In(),hyr=dr(),yyr=yr(),qyr=vi();function byr(r){return r!==null&&typeof r=="object"&&!hyr(r)&&typeof r.length=="number"&&yyr(r.length)&&r.length>=0&&r.length<=qyr&&myr(r,"callee")&&!dyr(r,"callee")}Nw.exports=byr});var Q1=s((Eme,Sw)=>{"use strict";var wyr=mw(),Eyr=Y1(),Nyr=Ow(),Z1;wyr?Z1=Eyr:Z1=Nyr;Sw.exports=Z1});var Tw=s((Nme,_w)=>{"use strict";var Oyr=Q1(),Aw=Qa(),Syr=Array.prototype.slice;function Ayr(r){return Oyr(r)?Aw(Syr.call(r)):Aw(r)}_w.exports=Ayr});var Rw=s((Ome,Iw)=>{"use strict";function _yr(){}Iw.exports=_yr});var C=s((Sme,Lw)=>{"use strict";var Tyr=Rw();Lw.exports=Tyr});var Fw=s((Ame,Pw)=>{"use strict";var Iyr=In(),Ryr=C(),Lyr=Iyr(Ryr,"prototype");Pw.exports=Lyr});var Bw=s((_me,Mw)=>{"use strict";var Pyr=In(),Fyr={toString:null},Myr=!Pyr(Fyr,"toString");Mw.exports=Myr});var K1=s((Tme,jw)=>{"use strict";function Byr(r){return r.constructor&&r.constructor.prototype===r}jw.exports=Byr});var kw=s((Ime,jyr)=>{jyr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Vw=s((Rme,Cw)=>{"use strict";var kyr=typeof window>"u"?void 0:window;Cw.exports=kyr});var Dw=s((Lme,xw)=>{"use strict";var Cyr=S(),Vyr=Za(),Uw=La(),Uyr=K1(),Gyr=kw(),Li=Vw(),Gw;function xyr(){var r;if(Uw(Li)==="undefined")return!1;for(r in Li)try{Vyr(Gyr,r)===-1&&Cyr(Li,r)&&Li[r]!==null&&Uw(Li[r])==="object"&&Uyr(Li[r])}catch{return!0}return!1}Gw=xyr();xw.exports=Gw});var Ww=s((Pme,Hw)=>{"use strict";var Dyr=typeof window<"u";Hw.exports=Dyr});var Jw=s((Fme,Xw)=>{"use strict";var Hyr=Dw(),zw=K1(),Wyr=Ww();function zyr(r){if(Wyr===!1&&!Hyr)return zw(r);try{return zw(r)}catch{return!1}}Xw.exports=zyr});var Yw=s((Mme,Xyr)=>{Xyr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Qw=s((Bme,Zw)=>{"use strict";var Jyr=Io(),r2=S(),Yyr=Q1(),$yr=Fw(),Zyr=Bw(),Qyr=Jw(),$w=Yw();function Kyr(r){var e,t,i,n,a,u,o;if(n=[],Yyr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!r2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Jyr(r))return n;t=$yr&&i}for(a in r)!(t&&a==="prototype")&&r2(r,a)&&n.push(String(a));if(Zyr)for(e=Qyr(r),o=0;o<$w.length;o++)u=$w[o],!(e&&u==="constructor")&&r2(r,u)&&n.push(String(u));return n}Zw.exports=Kyr});var rE=s((jme,Kw)=>{"use strict";var rqr=fw(),eqr=cw(),tqr=Qa(),iqr=Tw(),nqr=Qw(),Ka;eqr?rqr()?Ka=iqr:Ka=tqr:Ka=nqr;Kw.exports=Ka});var Pi=s((kme,eE)=>{"use strict";var aqr=rE();eE.exports=aqr});var iE=s((Cme,tE)=>{"use strict";var sqr=typeof Object.getOwnPropertyNames<"u";tE.exports=sqr});var sE=s((Vme,aE)=>{"use strict";var nE=Ii(),uqr=nE.getOwnPropertyNames;function oqr(r){return uqr(nE(r))}aE.exports=oqr});var oE=s((Ume,uE)=>{"use strict";var fqr=Ii(),vqr=Pi();function cqr(r){return vqr(fqr(r))}uE.exports=cqr});var vE=s((Gme,fE)=>{"use strict";var lqr=iE(),pqr=sE(),gqr=oE(),e2;lqr?e2=pqr:e2=gqr;fE.exports=e2});var lE=s((xme,cE)=>{"use strict";var mqr=typeof Object.getOwnPropertyDescriptor<"u";cE.exports=mqr});var gE=s((Dme,pE)=>{"use strict";var dqr=Object.getOwnPropertyDescriptor;function hqr(r,e){var t;return r==null?null:(t=dqr(r,e),t===void 0?null:t)}pE.exports=hqr});var dE=s((Hme,mE)=>{"use strict";var yqr=S();function qqr(r,e){return yqr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}mE.exports=qqr});var yE=s((Wme,hE)=>{"use strict";var bqr=lE(),wqr=gE(),Eqr=dE(),t2;bqr?t2=wqr:t2=Eqr;hE.exports=t2});var bE=s((zme,qE)=>{"use strict";var Nqr=typeof Buffer=="function"?Buffer:null;qE.exports=Nqr});var EE=s((Xme,wE)=>{"use strict";var Oqr=Ut(),r0=bE();function Sqr(){var r,e;if(typeof r0!="function")return!1;try{typeof r0.from=="function"?e=r0.from([1,2,3,4]):e=new r0([1,2,3,4]),r=Oqr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}wE.exports=Sqr});var OE=s((Jme,NE)=>{"use strict";var Aqr=EE();NE.exports=Aqr});var _E=s(e0=>{"use strict";e0.byteLength=Tqr;e0.toByteArray=Rqr;e0.fromByteArray=Fqr;var ne=[],xr=[],_qr=typeof Uint8Array<"u"?Uint8Array:Array,i2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Jt=0,SE=i2.length;Jt<SE;++Jt)ne[Jt]=i2[Jt],xr[i2.charCodeAt(Jt)]=Jt;var Jt,SE;xr["-".charCodeAt(0)]=62;xr["_".charCodeAt(0)]=63;function AE(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Tqr(r){var e=AE(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Iqr(r,e,t){return(e+t)*3/4-t}function Rqr(r){var e,t=AE(r),i=t[0],n=t[1],a=new _qr(Iqr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=xr[r.charCodeAt(v)]<<18|xr[r.charCodeAt(v+1)]<<12|xr[r.charCodeAt(v+2)]<<6|xr[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=xr[r.charCodeAt(v)]<<2|xr[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=xr[r.charCodeAt(v)]<<10|xr[r.charCodeAt(v+1)]<<4|xr[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Lqr(r){return ne[r>>18&63]+ne[r>>12&63]+ne[r>>6&63]+ne[r&63]}function Pqr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Lqr(i));return n.join("")}function Fqr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(Pqr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ne[e>>2]+ne[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ne[e>>10]+ne[e>>4&63]+ne[e<<2&63]+"=")),n.join("")}});var TE=s(n2=>{n2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(g?-1:1)*u*Math.pow(2,a-i)};n2.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+g]=u&255,g+=h,u/=256,f-=8);r[t+g-h]|=d*128}});var WE=s(ji=>{"use strict";var a2=_E(),Mi=TE(),IE=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ji.Buffer=w;ji.SlowBuffer=Vqr;ji.INSPECT_MAX_BYTES=50;var t0=2147483647;ji.kMaxLength=t0;w.TYPED_ARRAY_SUPPORT=Mqr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Mqr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function me(r){if(r>t0)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f2(r)}return FE(r,e,t)}w.poolSize=8192;function FE(r,e,t){if(typeof r=="string")return jqr(r,e);if(ArrayBuffer.isView(r))return kqr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ae(r,ArrayBuffer)||r&&ae(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ae(r,SharedArrayBuffer)||r&&ae(r.buffer,SharedArrayBuffer)))return u2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=Cqr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return FE(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function ME(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Bqr(r,e,t){return ME(r),r<=0?me(r):e!==void 0?typeof t=="string"?me(r).fill(e,t):me(r).fill(e):me(r)}w.alloc=function(r,e,t){return Bqr(r,e,t)};function f2(r){return ME(r),me(r<0?0:v2(r)|0)}w.allocUnsafe=function(r){return f2(r)};w.allocUnsafeSlow=function(r){return f2(r)};function jqr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=BE(r,e)|0,i=me(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function s2(r){let e=r.length<0?0:v2(r.length)|0,t=me(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function kqr(r){if(ae(r,Uint8Array)){let e=new Uint8Array(r);return u2(e.buffer,e.byteOffset,e.byteLength)}return s2(r)}function u2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function Cqr(r){if(w.isBuffer(r)){let e=v2(r.length)|0,t=me(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||l2(r.length)?me(0):s2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return s2(r.data)}function v2(r){if(r>=t0)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+t0.toString(16)+" bytes");return r|0}function Vqr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(ae(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(ae(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function BE(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ae(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return o2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return HE(r).length;default:if(n)return i?-1:o2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=BE;function Uqr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return $qr(this,e,t);case"utf8":case"utf-8":return kE(this,e,t);case"ascii":return Jqr(this,e,t);case"latin1":case"binary":return Yqr(this,e,t);case"base64":return zqr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zqr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Yt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Yt(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Yt(this,t,t+3),Yt(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Yt(this,t,t+7),Yt(this,t+1,t+6),Yt(this,t+2,t+5),Yt(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?kE(this,0,e):Uqr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=ji.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};IE&&(w.prototype[IE]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(ae(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function jE(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,l2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:RE(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):RE(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function RE(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return jE(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return jE(this,e,t,i,!1)};function Gqr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(l2(o))return u;r[t+u]=o}return u}function xqr(r,e,t,i){return i0(o2(e,r.length-t),r,t,i)}function Dqr(r,e,t,i){return i0(ebr(e),r,t,i)}function Hqr(r,e,t,i){return i0(HE(e),r,t,i)}function Wqr(r,e,t,i){return i0(tbr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return Gqr(this,e,t,i);case"utf8":case"utf-8":return xqr(this,e,t,i);case"ascii":case"latin1":case"binary":return Dqr(this,e,t,i);case"base64":return Hqr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Wqr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function zqr(r,e,t){return e===0&&t===r.length?a2.fromByteArray(r):a2.fromByteArray(r.slice(e,t))}function kE(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Xqr(i)}var LE=4096;function Xqr(r){let e=r.length;if(e<=LE)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=LE));return t}function Jqr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Yqr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function $qr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=ibr[r[a]];return n}function Zqr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function vr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||vr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||vr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||vr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=tt(function(e){e=e>>>0,Bi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=tt(function(e){e=e>>>0,Bi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||vr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||vr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||vr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||vr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=tt(function(e){e=e>>>0,Bi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=tt(function(e){e=e>>>0,Bi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),Mi.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||vr(e,4,this.length),Mi.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||vr(e,8,this.length),Mi.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||vr(e,8,this.length),Mi.read(this,e,!1,52,8)};function Er(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function CE(r,e,t,i,n){DE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function VE(r,e,t,i,n){DE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=tt(function(e,t=0){return CE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=tt(function(e,t=0){return VE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);Er(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);Er(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=tt(function(e,t=0){return CE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=tt(function(e,t=0){return VE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function UE(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function GE(r,e,t,i,n){return e=+e,t=t>>>0,n||UE(r,e,t,4,34028234663852886e22,-34028234663852886e22),Mi.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return GE(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return GE(this,e,t,!1,i)};function xE(r,e,t,i,n){return e=+e,t=t>>>0,n||UE(r,e,t,8,17976931348623157e292,-17976931348623157e292),Mi.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return xE(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return xE(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Fi={};function c2(r,e,t){Fi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}c2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);c2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);c2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=PE(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=PE(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function PE(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Qqr(r,e,t){Bi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Rn(e,r.length-(t+1))}function DE(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Fi.ERR_OUT_OF_RANGE("value",o,r)}Qqr(i,n,a)}function Bi(r,e){if(typeof r!="number")throw new Fi.ERR_INVALID_ARG_TYPE(e,"number",r)}function Rn(r,e,t){throw Math.floor(r)!==r?(Bi(r,t),new Fi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Fi.ERR_BUFFER_OUT_OF_BOUNDS:new Fi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Kqr=/[^+/0-9A-Za-z-_]/g;function rbr(r){if(r=r.split("=")[0],r=r.trim().replace(Kqr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function o2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function ebr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function tbr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function HE(r){return a2.toByteArray(rbr(r))}function i0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function ae(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function l2(r){return r!==r}var ibr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function tt(r){return typeof BigInt>"u"?nbr:r}function nbr(){throw new Error("BigInt not supported")}});var XE=s((Kme,zE)=>{"use strict";var abr=WE().Buffer;zE.exports=abr});var YE=s((rde,JE)=>{"use strict";function sbr(){throw new Error("not implemented")}JE.exports=sbr});var it=s((ede,$E)=>{"use strict";var ubr=OE(),obr=XE(),fbr=YE(),p2;ubr()?p2=obr:p2=fbr;$E.exports=p2});var QE=s((tde,ZE)=>{"use strict";var vbr=I(),cbr=it(),lbr=vbr(cbr.from);ZE.exports=lbr});var rN=s((ide,KE)=>{"use strict";var pbr=Ut(),gbr=q(),mbr=it();function dbr(r){if(!pbr(r))throw new TypeError(gbr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return mbr.from(r)}KE.exports=dbr});var tN=s((nde,eN)=>{"use strict";var hbr=Ut(),ybr=q(),qbr=it();function bbr(r){if(!hbr(r))throw new TypeError(ybr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new qbr(r)}eN.exports=bbr});var nN=s((ade,iN)=>{"use strict";var wbr=QE(),Ebr=rN(),Nbr=tN(),g2;wbr?g2=Ebr:g2=Nbr;iN.exports=g2});var uN=s((sde,sN)=>{"use strict";var Obr=gi(),Sbr=Kr(),Abr=pi(),_br=li(),Tbr=Gt(),Ibr=Ke(),Rbr=pr(),Lbr=Qr(),Pbr=lr(),aN;function Fbr(r){return new Obr(r)}function Mbr(r){return new Sbr(r)}function Bbr(r){return new Abr(r)}function jbr(r){return new _br(r)}function kbr(r){return new Tbr(r)}function Cbr(r){return new Ibr(r)}function Vbr(r){return new Rbr(r)}function Ubr(r){return new Lbr(r)}function Gbr(r){return new Pbr(r)}function xbr(){var r={int8array:Fbr,uint8array:Mbr,uint8clampedarray:Bbr,int16array:jbr,uint16array:kbr,int32array:Cbr,uint32array:Vbr,float32array:Ubr,float64array:Gbr};return r}aN=xbr();sN.exports=aN});var lN=s((ude,cN)=>{"use strict";var n0=S(),m2=dr(),oN=Ut(),Dbr=Vb(),fN=La(),Hbr=Yb(),Wbr=Za(),vN=Pi(),zbr=vE(),Ln=yE(),Xbr=Xt(),Pn=Ze(),Jbr=nN(),Ybr=uN();function $br(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(Xbr(r)),e.push(r),n.push(o),t=zbr(r),v=0;v<t.length;v++)i=t[v],a=Ln(r,i),n0(a,"value")&&(u=m2(r[i])?[]:{},a.value=$t(r[i],u,e,n,-1)),Pn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Zbr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=vN(r),v=0;v<i.length;v++)u=i[v],n=Ln(r,u),n0(n,"value")&&(a=m2(r[u])?[]:{},n.value=$t(r[u],a,e,t,-1)),Pn(o,u,n);return o}function $t(r,e,t,i,n){var a,u,o,v,f,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(oN(r))return Jbr(r);if(Dbr(r))return Zbr(r);if(o=fN(r),o==="date")return new Date(+r);if(o==="regexp")return Hbr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=Ybr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?$br(r):{};if(u=vN(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=fN(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||oN(p)){a==="object"?(v=Ln(r,c),n0(v,"value")&&(v.value=$t(p)),Pn(e,c,v)):e[c]=$t(p);continue}if(g=Wbr(t,p),g!==-1){e[c]=i[g];continue}l=m2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=$t(p,l,t,i,n):(v=Ln(r,c),n0(v,"value")&&(v.value=$t(p,l,t,i,n)),Pn(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=Ln(r,c),Pn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}cN.exports=$t});var gN=s((ode,pN)=>{"use strict";var Qbr=dr(),Kbr=hr().isPrimitive,rwr=q(),ewr=R(),twr=lN();function iwr(r,e){var t;if(arguments.length>1){if(!Kbr(e))throw new TypeError(rwr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=ewr;return t=Qbr(r)?new Array(r.length):{},twr(r,t,[r],[t],e)}pN.exports=iwr});var Fn=s((fde,mN)=>{"use strict";var nwr=gN();mN.exports=nwr});var dN=s((vde,awr)=>{awr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var yN=s((cde,hN)=>{"use strict";var swr=Fn(),uwr=dN();function owr(){return swr(uwr)}hN.exports=owr});var qN=s((lde,fwr)=>{fwr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var wN=s((pde,bN)=>{"use strict";var vwr=Fn(),cwr=qN();function lwr(){return vwr(cwr)}bN.exports=lwr});var EN=s((gde,pwr)=>{pwr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var ON=s((mde,NN)=>{"use strict";var gwr=Fn(),mwr=EN();function dwr(){return gwr(mwr)}NN.exports=dwr});var SN=s((dde,hwr)=>{hwr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var _N=s((hde,AN)=>{"use strict";var ywr=SN();function qwr(){return ywr.slice()}AN.exports=qwr});var TN=s((yde,bwr)=>{bwr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var RN=s((qde,IN)=>{"use strict";var wwr=Fn(),Ewr=TN();function Nwr(){return wwr(Ewr)}IN.exports=Nwr});var PN=s((bde,LN)=>{"use strict";var Mn=rr(),Owr=yN(),Swr=wN(),Awr=ON(),_wr=_N(),Twr=RN();function Iwr(r){return Mn(r,"AFINN_111",Owr),Mn(r,"AFINN_96",Swr),Mn(r,"ANSCOMBES_QUARTET",Awr),Mn(r,"HERNDON_VENUS_SEMIDIAMETERS",_wr),Mn(r,"NIGHTINGALES_ROSE",Twr),r}LN.exports=Iwr});var MN=s((wde,FN)=>{"use strict";function Rwr(r,e){return r+e}FN.exports=Rwr});var jN=s((Ede,BN)=>{"use strict";var Lwr=MN();BN.exports=Lwr});var CN=s((Nde,kN)=>{"use strict";var Pwr=R(),Fwr=V();function Mwr(r){return r===Pwr||r===Fwr}kN.exports=Mwr});var Cr=s((Ode,VN)=>{"use strict";var Bwr=CN();VN.exports=Bwr});var xN=s((Sde,GN)=>{"use strict";var UN=ja();function jwr(r){return r>0?UN(r-1):UN(r+1)}GN.exports=jwr});var a0=s((Ade,DN)=>{"use strict";var kwr=xN();DN.exports=kwr});var WN=s((_de,HN)=>{"use strict";var Cwr=Math.sqrt;HN.exports=Cwr});var U=s((Tde,zN)=>{"use strict";var Vwr=WN();zN.exports=Vwr});var JN=s((Ide,XN)=>{"use strict";function Uwr(r){return Math.abs(r)}XN.exports=Uwr});var Y=s((Rde,YN)=>{"use strict";var Gwr=JN();YN.exports=Gwr});var ZN=s((Lde,$N)=>{"use strict";var xwr=Kr(),Dwr=Gt(),Hwr={uint16:Dwr,uint8:xwr};$N.exports=Hwr});var eO=s((Pde,rO)=>{"use strict";var QN=ZN(),KN;function Wwr(){var r,e;return r=new QN.uint16(1),r[0]=4660,e=new QN.uint8(r.buffer),e[0]===52}KN=Wwr();rO.exports=KN});var zr=s((Fde,tO)=>{"use strict";var zwr=eO();tO.exports=zwr});var aO=s((Mde,nO)=>{"use strict";var Xwr=zr(),iO,d2,h2;Xwr===!0?(d2=1,h2=0):(d2=0,h2=1);iO={HIGH:d2,LOW:h2};nO.exports=iO});var y2=s((Bde,fO)=>{"use strict";var Jwr=pr(),Ywr=lr(),uO=aO(),oO=new Ywr(1),sO=new Jwr(oO.buffer),$wr=uO.HIGH,Zwr=uO.LOW;function Qwr(r,e,t,i){return oO[0]=r,e[i]=sO[$wr],e[i+t]=sO[Zwr],e}fO.exports=Qwr});var cO=s((jde,vO)=>{"use strict";var Kwr=y2();function rEr(r){return Kwr(r,[0>>>0,0>>>0],1,0)}vO.exports=rEr});var ki=s((kde,pO)=>{"use strict";var eEr=b(),lO=cO(),tEr=y2();eEr(lO,"assign",tEr);pO.exports=lO});var mO=s((Cde,gO)=>{"use strict";var iEr=zr(),q2;iEr===!0?q2=0:q2=1;gO.exports=q2});var hO=s((Vde,dO)=>{"use strict";var nEr=pr(),aEr=lr(),sEr=mO(),b2=new aEr(1),uEr=new nEr(b2.buffer);function oEr(r,e){return b2[0]=r,uEr[sEr]=e>>>0,b2[0]}dO.exports=oEr});var de=s((Ude,yO)=>{"use strict";var fEr=hO();yO.exports=fEr});var bO=s((Gde,qO)=>{"use strict";function vEr(r){return r|0}qO.exports=vEr});var w2=s((xde,wO)=>{"use strict";var cEr=bO();wO.exports=cEr});var se=s((Dde,EO)=>{"use strict";var lEr=2147483647;EO.exports=lEr});var E2=s((Hde,NO)=>{"use strict";var pEr=2147483648;NO.exports=pEr});var SO=s((Wde,OO)=>{"use strict";var gEr=zr(),N2;gEr===!0?N2=1:N2=0;OO.exports=N2});var TO=s((zde,_O)=>{"use strict";var mEr=pr(),dEr=lr(),hEr=SO(),AO=new dEr(1),yEr=new mEr(AO.buffer);function qEr(r){return AO[0]=r,yEr[hEr]}_O.exports=qEr});var ar=s((Xde,IO)=>{"use strict";var bEr=TO();IO.exports=bEr});var PO=s((Jde,LO)=>{"use strict";var wEr=zr(),RO,O2,S2;wEr===!0?(O2=1,S2=0):(O2=0,S2=1);RO={HIGH:O2,LOW:S2};LO.exports=RO});var kO=s((Yde,jO)=>{"use strict";var EEr=pr(),NEr=lr(),MO=PO(),BO=new NEr(1),FO=new EEr(BO.buffer),OEr=MO.HIGH,SEr=MO.LOW;function AEr(r,e){return FO[OEr]=r,FO[SEr]=e,BO[0]}jO.exports=AEr});var Ci=s(($de,CO)=>{"use strict";var _Er=kO();CO.exports=_Er});var UO=s((Zde,VO)=>{"use strict";var TEr=E2(),IEr=se(),REr=ki(),LEr=ar(),PEr=Ci(),A2=[0,0];function FEr(r,e){var t,i;return REr.assign(r,A2,1,0),t=A2[0],t&=IEr,i=LEr(e),i&=TEr,t|=i,PEr(t,A2[1])}VO.exports=FEr});var s0=s((Qde,GO)=>{"use strict";var MEr=UO();GO.exports=MEr});var HO=s((Kde,DO)=>{"use strict";var xO=a0(),BEr=s0(),jEr=V(),u0=R();function kEr(r,e){return e===jEr?u0:e===u0?0:e>0?xO(e)?r:0:xO(e)?BEr(u0,r):u0}DO.exports=kEr});var zO=s((rhe,WO)=>{"use strict";var CEr=se(),VEr=ar(),UEr=1072693247,o0=1e300,f0=1e-300;function GEr(r,e){var t,i;return i=VEr(r),t=i&CEr,t<=UEr?e<0?o0*o0:f0*f0:e>0?o0*o0:f0*f0}WO.exports=GEr});var YO=s((ehe,JO)=>{"use strict";var xEr=Y(),XO=R();function DEr(r,e){return r===-1?(r-r)/(r-r):r===1?1:xEr(r)<1==(e===XO)?0:XO}JO.exports=DEr});var ZO=s((the,$O)=>{"use strict";var HEr=zr(),_2;HEr===!0?_2=1:_2=0;$O.exports=_2});var KO=s((ihe,QO)=>{"use strict";var WEr=pr(),zEr=lr(),XEr=ZO(),T2=new zEr(1),JEr=new WEr(T2.buffer);function YEr(r,e){return T2[0]=r,JEr[XEr]=e>>>0,T2[0]}QO.exports=YEr});var he=s((nhe,rS)=>{"use strict";var $Er=KO();rS.exports=$Er});var ue=s((ahe,eS)=>{"use strict";var ZEr=1023;eS.exports=ZEr});var iS=s((she,tS)=>{"use strict";function QEr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}tS.exports=QEr});var uS=s((uhe,sS)=>{"use strict";var KEr=ar(),v0=de(),nS=he(),rNr=ue(),eNr=iS(),tNr=1048575,aS=1048576,iNr=1072693248,nNr=536870912,aNr=524288,sNr=20,uNr=9007199254740992,oNr=.9617966939259756,fNr=.9617967009544373,vNr=-7028461650952758e-24,cNr=[1,1.5],lNr=[0,.5849624872207642],pNr=[0,1350039202129749e-23];function gNr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K,G;return H=0,t<aS&&(e*=uNr,H-=53,t=KEr(e)),H+=(t>>sNr)-rNr|0,K=t&tNr|0,t=K|iNr|0,K<=235662?G=0:K<767610?G=1:(G=0,H+=1,t-=aS),e=nS(e,t),c=cNr[G],F=e-c,A=1/(e+c),n=F*A,u=v0(n,0),i=(t>>1|nNr)+aNr,i+=G<<18,v=nS(0,i),f=e-(v-c),o=A*(F-u*v-u*f),a=n*n,O=a*a*eNr(a),O+=o*(u+n),a=u*u,v=3+a+O,v=v0(v,0),f=O-(v-3-a),F=u*v,A=o*v+f*n,p=F+A,p=v0(p,0),g=A-(p-F),h=fNr*p,d=vNr*p+g*oNr+pNr[G],l=lNr[G],N=H,m=h+d+l+N,m=v0(m,0),y=d-(m-N-l-h),r[0]=m,r[1]=y,r}sS.exports=gNr});var fS=s((ohe,oS)=>{"use strict";function mNr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}oS.exports=mNr});var cS=s((fhe,vS)=>{"use strict";var dNr=de(),hNr=fS(),yNr=1.4426950408889634,qNr=1.4426950216293335,bNr=19259629911266175e-24;function wNr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*hNr(n),u=qNr*n,o=n*bNr-a*yNr,i=u+o,i=dNr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}vS.exports=wNr});var I2=s((vhe,lS)=>{"use strict";var ENr=1023;lS.exports=ENr});var gS=s((che,pS)=>{"use strict";var NNr=-1023;pS.exports=NNr});var R2=s((lhe,mS)=>{"use strict";var ONr=-1074;mS.exports=ONr});var L2=s((phe,dS)=>{"use strict";var SNr=22250738585072014e-324;dS.exports=SNr});var P2=s((ghe,hS)=>{"use strict";var ANr=L2(),_Nr=Cr(),TNr=E(),INr=Y(),RNr=4503599627370496;function LNr(r,e,t,i){return TNr(r)||_Nr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&INr(r)<ANr?(e[i]=r*RNr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}hS.exports=LNr});var qS=s((mhe,yS)=>{"use strict";var PNr=P2();function FNr(r){return PNr(r,[0,0],1,0)}yS.exports=FNr});var ES=s((dhe,wS)=>{"use strict";var MNr=b(),bS=qS(),BNr=P2();MNr(bS,"assign",BNr);wS.exports=bS});var Bn=s((hhe,NS)=>{"use strict";var jNr=2146435072;NS.exports=jNr});var SS=s((yhe,OS)=>{"use strict";var kNr=ar(),CNr=Bn(),VNr=ue();function UNr(r){var e=kNr(r);return e=(e&CNr)>>>20,e-VNr|0}OS.exports=UNr});var _S=s((qhe,AS)=>{"use strict";var GNr=SS();AS.exports=GNr});var IS=s((bhe,TS)=>{"use strict";var xNr=R(),DNr=V(),HNr=ue(),WNr=I2(),zNr=gS(),XNr=R2(),JNr=E(),YNr=Cr(),$Nr=s0(),ZNr=ES().assign,QNr=_S(),KNr=ki(),rOr=Ci(),eOr=2220446049250313e-31,tOr=2148532223>>>0,F2=[0,0],M2=[0,0];function iOr(r,e){var t,i;return e===0||r===0||JNr(r)||YNr(r)?r:(ZNr(r,F2,1,0),r=F2[0],e+=F2[1],e+=QNr(r),e<XNr?$Nr(0,r):e>WNr?r<0?DNr:xNr:(e<=zNr?(e+=52,i=eOr):i=1,KNr.assign(r,M2,1,0),t=M2[0],t&=tOr,t|=e+HNr<<20,i*rOr(t,M2[1])))}TS.exports=iOr});var c0=s((whe,RS)=>{"use strict";var nOr=IS();RS.exports=nOr});var l0=s((Ehe,LS)=>{"use strict";var aOr=.6931471805599453;LS.exports=aOr});var p0=s((Nhe,PS)=>{"use strict";var sOr=1048575;PS.exports=sOr});var MS=s((Ohe,FS)=>{"use strict";function uOr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}FS.exports=uOr});var GS=s((She,US)=>{"use strict";var oOr=ar(),BS=he(),fOr=de(),vOr=w2(),cOr=c0(),lOr=l0(),jS=ue(),kS=se(),CS=p0(),pOr=MS(),VS=1048576,gOr=1071644672,jn=20,mOr=.6931471824645996,dOr=-1904654299957768e-24;function hOr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g;return p=r&kS|0,g=(p>>jn)-jS|0,l=0,p>gOr&&(l=r+(VS>>g+1)>>>0,g=((l&kS)>>jn)-jS|0,i=(l&~(CS>>g))>>>0,a=BS(0,i),l=(l&CS|VS)>>jn-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=fOr(a,0),o=a*mOr,v=(t-(a-e))*lOr+a*dOr,c=o+v,f=v-(c-o),a=c*c,n=c-a*pOr(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=oOr(c),r=vOr(r),r+=l<<jn>>>0,r>>jn<=0?c=cOr(c,l):c=BS(c,r),c}US.exports=hOr});var QS=s((Ahe,ZS)=>{"use strict";var xS=E(),DS=a0(),HS=Cr(),yOr=yr(),WS=U(),qOr=Y(),B2=ki(),bOr=de(),zS=w2(),wOr=V(),EOr=R(),j2=se(),NOr=HO(),OOr=zO(),SOr=YO(),AOr=uS(),_Or=cS(),TOr=GS(),IOr=1072693247,ROr=1105199104,LOr=1139802112,XS=1083179008,POr=1072693248,FOr=1083231232,MOr=3230714880>>>0,JS=31,nt=1e300,at=1e-300,BOr=8008566259537294e-32,ye=[0,0],YS=[0,0];function $S(r,e){var t,i,n,a,u,o,v,f,c,l,p,g,h,d,m,y;if(xS(r)||xS(e))return NaN;if(B2.assign(e,ye,1,0),o=ye[0],v=ye[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return WS(r);if(e===-.5)return 1/WS(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(HS(e))return SOr(r,e)}if(B2.assign(r,ye,1,0),a=ye[0],u=ye[1],u===0){if(a===0)return NOr(r,e);if(r===1)return 1;if(r===-1&&DS(e))return-1;if(HS(r))return r===wOr?$S(-0,-e):e<0?0:EOr}if(r<0&&yOr(e)===!1)return(r-r)/(r-r);if(n=qOr(r),t=a&j2|0,i=o&j2|0,f=a>>>JS|0,c=o>>>JS|0,f&&DS(e)?f=-1:f=1,i>ROr){if(i>LOr)return OOr(r,e);if(t<IOr)return c===1?f*nt*nt:f*at*at;if(t>POr)return c===0?f*nt*nt:f*at*at;h=_Or(YS,n)}else h=AOr(YS,n,t);if(l=bOr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,B2.assign(d,ye,1,0),m=zS(ye[0]),y=zS(ye[1]),m>=XS){if((m-XS|y)!==0||g+BOr>d-p)return f*nt*nt}else if((m&j2)>=FOr&&((m-MOr|y)!==0||g<=d-p))return f*at*at;return d=TOr(m,p,g),f*d}ZS.exports=$S});var D=s((_he,KS)=>{"use strict";var jOr=QS();KS.exports=jOr});var Vi=s((The,rA)=>{"use strict";var kOr=9007199254740991;rA.exports=kOr});var g0=s((Ihe,eA)=>{"use strict";var COr=308;eA.exports=COr});var k2=s((Rhe,tA)=>{"use strict";var VOr=-308;tA.exports=VOr});var m0=s((Lhe,iA)=>{"use strict";var UOr=-324;iA.exports=UOr});var vA=s((Phe,fA)=>{"use strict";var nA=E(),d0=Cr(),aA=D(),GOr=Y(),sA=z(),xOr=Vi(),uA=g0(),DOr=k2(),HOr=m0(),WOr=V(),zOr=xOr+1,oA=1e308;function XOr(r,e){var t,i;return nA(r)||nA(e)||d0(e)?NaN:d0(r)||r===0||e<HOr||GOr(r)>zOr&&e<=0?r:e>uA?r>=0?0:WOr:e<DOr?(t=aA(10,-(e+uA)),i=r*oA*t,d0(i)?r:sA(i)/oA/t):(t=aA(10,-e),i=r*t,d0(i)?r:sA(i)/t)}fA.exports=XOr});var lA=s((Fhe,cA)=>{"use strict";var JOr=vA();cA.exports=JOr});var gA=s((Mhe,pA)=>{"use strict";function YOr(r,e){return r*e}pA.exports=YOr});var dA=s((Bhe,mA)=>{"use strict";var $Or=gA();mA.exports=$Or});var yA=s((jhe,hA)=>{"use strict";function ZOr(r,e){return r-e}hA.exports=ZOr});var bA=s((khe,qA)=>{"use strict";var QOr=yA();qA.exports=QOr});var EA=s((Che,wA)=>{"use strict";var kn=rr(),KOr=jN(),rSr=lA(),eSr=dA(),tSr=D(),iSr=bA();function nSr(r){return kn(r,"add",KOr),kn(r,"floorn",rSr),kn(r,"mul",eSr),kn(r,"pow",tSr),kn(r,"sub",iSr),r}wA.exports=nSr});var AA=s((Vhe,SA)=>{"use strict";var NA=M().isPrimitive,aSr=R(),sSr=V(),OA=q();function uSr(r,e){return t;function t(i,n){var a;if(!NA(i)){if(e.nonnumeric===void 0)throw new TypeError(OA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!NA(n)){if(e.nonnumeric===void 0)throw new TypeError(OA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===aSr?e.pinf:a===sSr?e.ninf:a}}SA.exports=uSr});var C2=s((Uhe,_A)=>{"use strict";var oSr=AA();_A.exports=oSr});var IA=s((Ghe,TA)=>{"use strict";var fSr=Ta(),vSr=lo(),cSr=Ya(),lSr=q(),pSr=Ja(),gSr=C2(),mSr=["number","number"],dSr=["First argument","Second argument"];function hSr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(lSr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=pSr([r[0],r[1]],mSr,dSr),t=fSr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=cSr(t),a=gSr(e,i),r[0].push(n),r[1].push(t),vSr(r[0],r[1],a),n}TA.exports=hSr});var LA=s((xhe,RA)=>{"use strict";var ySr=IA();RA.exports=ySr});var FA=s((Dhe,PA)=>{"use strict";var qSr=M().isPrimitive,bSr=R(),wSr=V(),ESr=q();function NSr(r,e){return t;function t(i){var n;if(!qSr(i)){if(e.nonnumeric===void 0)throw new TypeError(ESr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===bSr?e.pinf:n===wSr?e.ninf:n}}PA.exports=NSr});var V2=s((Hhe,MA)=>{"use strict";var OSr=FA();MA.exports=OSr});var jA=s((Whe,BA)=>{"use strict";var U2=M().isPrimitive,SSr=R(),ASr=V(),G2=q();function _Sr(r,e){return t;function t(i,n,a){var u;if(!U2(i)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!U2(n)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!U2(a)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===SSr?e.pinf:u===ASr?e.ninf:u}}BA.exports=_Sr});var x2=s((zhe,kA)=>{"use strict";var TSr=jA();kA.exports=TSr});var VA=s((Xhe,CA)=>{"use strict";var h0=M().isPrimitive,ISr=R(),RSr=V(),y0=q();function LSr(r,e){return t;function t(i,n,a,u){var o;if(!h0(i)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!h0(n)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!h0(a)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!h0(u)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===ISr?e.pinf:o===RSr?e.ninf:o}}CA.exports=LSr});var GA=s((Jhe,UA)=>{"use strict";var PSr=VA();UA.exports=PSr});var DA=s((Yhe,xA)=>{"use strict";var Cn=M().isPrimitive,FSr=R(),MSr=V(),Vn=q();function BSr(r,e){return t;function t(i,n,a,u,o){var v;if(!Cn(i)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Cn(n)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Cn(a)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Cn(u)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Cn(o)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,n,a,u,o),v!==v?e.nan:v===FSr?e.pinf:v===MSr?e.ninf:v}}xA.exports=BSr});var WA=s(($he,HA)=>{"use strict";var jSr=DA();HA.exports=jSr});var XA=s((Zhe,zA)=>{"use strict";var kSr=Ta(),CSr=go(),VSr=Ya(),USr=q(),GSr=Ja(),xSr=x2(),DSr=["number","number","number"],HSr=["First argument","Second argument","Third argument"];function WSr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(USr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=GSr([r[0],r[1],r[2]],DSr,HSr),t=kSr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=VSr(t),a=xSr(e,i),r[0].push(n),r[1].push(t),CSr(r[0],r[1],a),n}zA.exports=WSr});var YA=s((Qhe,JA)=>{"use strict";var zSr=XA();JA.exports=zSr});var ZA=s((Khe,$A)=>{"use strict";var XSr=dr(),JSr=y1(),YSr=q(),$Sr=V2();function ZSr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(YSr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=$Sr(e,i),XSr(t)?(JSr([t,t],[t.length,t[0].length],n),t):n(t)}$A.exports=ZSr});var KA=s((rye,QA)=>{"use strict";var QSr=ZA();QA.exports=QSr});var e_=s((eye,r_)=>{"use strict";var st=rr(),KSr=LA(),rAr=V2(),eAr=C2(),tAr=x2(),iAr=GA(),nAr=WA(),aAr=YA(),sAr=KA();function uAr(r){return st(r,"binary",KSr),st(r,"d_d",rAr),st(r,"dd_d",eAr),st(r,"ddd_d",tAr),st(r,"dddd_d",iAr),st(r,"ddddd_d",nAr),st(r,"ternary",aAr),st(r,"unary",sAr),r}r_.exports=uAr});var i_=s((tye,t_)=>{"use strict";function oAr(r){return r*r}t_.exports=oAr});var q0=s((iye,n_)=>{"use strict";var fAr=i_();n_.exports=fAr});var b0=s((nye,a_)=>{"use strict";var vAr=.7853981633974483;a_.exports=vAr});var u_=s((aye,s_)=>{"use strict";function cAr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}s_.exports=cAr});var f_=s((sye,o_)=>{"use strict";function lAr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}o_.exports=lAr});var l_=s((uye,c_)=>{"use strict";var pAr=E(),gAr=U(),v_=b0(),mAr=u_(),dAr=f_(),hAr=6123233995736766e-32;function yAr(r){var e,t,i,n,a;if(pAr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*dAr(t),t=gAr(t+t),a=v_-t,t=t*n-hAr,a-=t,a+=v_;else{if(i<1e-8)return r;t=i*i,a=t*mAr(t),a=i*a+i}return e?-a:a}c_.exports=yAr});var Zt=s((oye,p_)=>{"use strict";var qAr=l_();p_.exports=qAr});var h_=s((fye,d_)=>{"use strict";var bAr=E(),g_=Zt(),wAr=U(),m_=b0(),EAr=6123233995736766e-32;function NAr(r){var e;return bAr(r)?NaN:r<-1||r>1?NaN:r>.5?2*g_(wAr(.5-.5*r)):(e=m_-g_(r),e+=EAr,e+=m_,e)}d_.exports=NAr});var Un=s((vye,y_)=>{"use strict";var OAr=h_();y_.exports=OAr});var b_=s((cye,q_)=>{"use strict";function SAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}q_.exports=SAr});var S_=s((lye,O_)=>{"use strict";var AAr=E(),w_=ar(),E_=he(),_Ar=R(),TAr=V(),N_=ue(),IAr=b_(),D2=.6931471803691238,H2=19082149292705877e-26,RAr=.41421356237309503,LAr=-.2928932188134525,PAr=1862645149230957e-24,FAr=5551115123125783e-32,MAr=9007199254740992,BAr=.6666666666666666;function jAr(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||AAr(r))return NaN;if(r===-1)return TAr;if(r===_Ar||r===0)return r;if(r<0?i=-r:i=r,c=1,i<RAr){if(i<PAr)return i<FAr?r:r-r*r*.5;r>LAr&&(c=0,n=r,t=1)}return c!==0&&(i<MAr?(f=1+r,t=w_(f),c=(t>>20)-N_,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=w_(f),c=(t>>20)-N_,a=0),t&=1048575,t<434334?f=E_(f,t|1072693248):(c+=1,f=E_(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*H2,c*D2+a):(v=e*(1-BAr*n),c*D2-(v-(c*H2+a)-n)):(u=n/(2+n),o=u*u,v=o*IAr(o),c===0?n-(e-u*(e+v)):c*D2-(e-(u*(e+v)+(c*H2+a))-n))}O_.exports=jAr});var ut=s((pye,A_)=>{"use strict";var kAr=S_();A_.exports=kAr});var T_=s((gye,__)=>{"use strict";function CAr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}__.exports=CAr});var R_=s((mye,I_)=>{"use strict";function VAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}I_.exports=VAr});var M_=s((dye,F_)=>{"use strict";var L_=ar(),UAr=he(),GAr=E(),xAr=ue(),DAr=V(),HAr=T_(),WAr=R_(),w0=.6931471803691238,E0=19082149292705877e-26,zAr=0x40000000000000,XAr=.3333333333333333,P_=1048575,JAr=2146435072,YAr=1048576,$Ar=1072693248;function ZAr(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?DAr:GAr(r)||r<0?NaN:(t=L_(r),a=0,t<YAr&&(a-=54,r*=zAr,t=L_(r)),t>=JAr?r+r:(a+=(t>>20)-xAr|0,t&=P_,v=t+614244&1048576|0,r=UAr(r,t|v^$Ar),a+=v>>20|0,o=r-1,(P_&2+t)<3?o===0?a===0?0:a*w0+a*E0:(u=o*o*(.5-XAr*o),a===0?o-u:a*w0-(u-a*E0-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*HAr(l),i=p*WAr(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*w0-(e-(c*(e+u)+a*E0)-o)):a===0?o-c*(o-u):a*w0-(c*(o-u)-a*E0-o))))}F_.exports=ZAr});var P=s((hye,B_)=>{"use strict";var QAr=M_();B_.exports=QAr});var V_=s((yye,C_)=>{"use strict";var KAr=E(),r_r=ut(),j_=U(),e_r=l0(),k_=P(),t_r=1<<28;function i_r(r){var e;return KAr(r)||r<1?NaN:r===1?0:r>=t_r?k_(r)+e_r:r>2?k_(2*r-1/(r+j_(r*r-1))):(e=r-1,r_r(e+j_(2*e+e*e)))}C_.exports=i_r});var G_=s((qye,U_)=>{"use strict";var n_r=V_();U_.exports=n_r});var N0=s((bye,x_)=>{"use strict";var a_r=1.5707963267948966;x_.exports=a_r});var H_=s((wye,D_)=>{"use strict";function s_r(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}D_.exports=s_r});var z_=s((Eye,W_)=>{"use strict";function u_r(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}W_.exports=u_r});var Y_=s((Nye,J_)=>{"use strict";var o_r=E(),f_r=R(),W2=N0(),v_r=b0(),c_r=V(),l_r=H_(),p_r=z_(),X_=6123233995736766e-32,g_r=2.414213562373095;function m_r(r){var e,t,i,n;return o_r(r)||r===0?r:r===f_r?W2:r===c_r?-W2:(r<0&&(t=!0,r=-r),e=0,r>g_r?(i=W2,e=1,r=-(1/r)):r<=.66?i=0:(i=v_r,e=2,r=(r-1)/(r+1)),n=r*r,n=n*l_r(n)/p_r(n),n=r*n+r,e===2?n+=.5*X_:e===1&&(n+=X_),i+=n,t?-i:i)}J_.exports=m_r});var O0=s((Oye,$_)=>{"use strict";var d_r=Y_();$_.exports=d_r});var Q_=s((Sye,Z_)=>{"use strict";var h_r=O0();function y_r(r){return h_r(1/r)}Z_.exports=y_r});var rT=s((Aye,K_)=>{"use strict";var q_r=Q_();K_.exports=q_r});var tT=s((_ye,eT)=>{"use strict";var b_r=Zt();function w_r(r){return b_r(1+r)}eT.exports=w_r});var nT=s((Tye,iT)=>{"use strict";var E_r=tT();iT.exports=E_r});var sT=s((Iye,aT)=>{"use strict";var N_r=Zt();function O_r(r){return N_r(1-r)}aT.exports=O_r});var oT=s((Rye,uT)=>{"use strict";var S_r=sT();uT.exports=S_r});var vT=s((Lye,fT)=>{"use strict";var A_r=Zt();function __r(r){return A_r(1/r)}fT.exports=__r});var lT=s((Pye,cT)=>{"use strict";var T_r=vT();cT.exports=T_r});var dT=s((Fye,mT)=>{"use strict";var I_r=Cr(),R_r=E(),L_r=ut(),pT=U(),P_r=l0(),gT=P(),F_r=1/(1<<28),M_r=1<<28;function B_r(r){var e,t,i;return R_r(r)||I_r(r)?r:(r<0&&(r=-r,e=!0),r<F_r?i=r:r>M_r?i=gT(r)+P_r:r>2?i=gT(2*r+1/(pT(r*r+1)+r)):(t=r*r,i=L_r(r+t/(1+pT(1+t)))),e?-i:i)}mT.exports=B_r});var z2=s((Mye,hT)=>{"use strict";var j_r=dT();hT.exports=j_r});var qT=s((Bye,yT)=>{"use strict";var k_r=z2();function C_r(r){return k_r(1/r)}yT.exports=C_r});var wT=s((jye,bT)=>{"use strict";var V_r=qT();bT.exports=V_r});var NT=s((kye,ET)=>{"use strict";var U_r=Un(),G_r=U();function x_r(r){return 2*U_r(G_r(r))}ET.exports=x_r});var ST=s((Cye,OT)=>{"use strict";var D_r=NT();OT.exports=D_r});var _T=s((Vye,AT)=>{"use strict";var H_r=Zt(),W_r=U();function z_r(r){return 2*H_r(W_r(r))}AT.exports=z_r});var IT=s((Uye,TT)=>{"use strict";var X_r=_T();TT.exports=X_r});var PT=s((Gye,LT)=>{"use strict";var J_r=E(),RT=ut(),Y_r=R(),$_r=V(),Z_r=1/(1<<28);function Q_r(r){var e,t;return J_r(r)||r<-1||r>1?NaN:r===1?Y_r:r===-1?$_r:(r<0&&(e=!0,r=-r),r<Z_r?e?-r:r:(r<.5?(t=r+r,t=.5*RT(t+t*r/(1-r))):t=.5*RT((r+r)/(1-r)),e?-t:t))}LT.exports=Q_r});var MT=s((xye,FT)=>{"use strict";var K_r=PT();FT.exports=K_r});var jT=s((Dye,BT)=>{"use strict";var rTr=Un();function eTr(r){return rTr(1+r)}BT.exports=eTr});var CT=s((Hye,kT)=>{"use strict";var tTr=jT();kT.exports=tTr});var UT=s((Wye,VT)=>{"use strict";var iTr=Un();function nTr(r){return iTr(1-r)}VT.exports=nTr});var xT=s((zye,GT)=>{"use strict";var aTr=UT();GT.exports=aTr});var HT=s((Xye,DT)=>{"use strict";var sTr=z();function uTr(r){return sTr(r)===r&&r>=0}DT.exports=uTr});var X2=s((Jye,WT)=>{"use strict";var oTr=HT();WT.exports=oTr});var zT=s((Yye,fTr)=>{fTr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var JT=s(($ye,XT)=>{"use strict";var vTr=X2(),cTr=E(),lTr=a0(),pTr=V(),gTr=R(),mTr=zT(),dTr=258;function hTr(r){return cTr(r)||!vTr(r)?NaN:lTr(r)?0:r>dTr?r/2&1?gTr:pTr:mTr[r/2]}XT.exports=hTr});var $T=s((Zye,YT)=>{"use strict";var yTr=JT();YT.exports=yTr});var QT=s((Qye,ZT)=>{"use strict";var qTr=zr(),J2;qTr===!0?J2=0:J2=1;ZT.exports=J2});var eI=s((Kye,rI)=>{"use strict";var bTr=pr(),wTr=lr(),ETr=QT(),KT=new wTr(1),NTr=new bTr(KT.buffer);function OTr(r){return KT[0]=r,NTr[ETr]}rI.exports=OTr});var iI=s((rqe,tI)=>{"use strict";var STr=eI();tI.exports=STr});var oI=s((eqe,uI)=>{"use strict";var ATr=z(),S0=c0(),T0=Qe(),aI=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_Tr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Y2=16777216,$2=5960464477539063e-23,A0=T0(20),nI=T0(20),_0=T0(20),mr=T0(20);function sI(r,e,t,i,n,a,u,o,v){var f,c,l,p,g,h,d,m,y;for(p=a,y=i[t],m=t,g=0;m>0;g++)c=$2*y|0,mr[g]=y-Y2*c|0,y=i[m-1]+c,m-=1;if(y=S0(y,n),y-=8*ATr(y*.125),d=y|0,y-=d,l=0,n>0?(g=mr[t-1]>>24-n,d+=g,mr[t-1]-=g<<24-n,l=mr[t-1]>>23-n):n===0?l=mr[t-1]>>23:y>=.5&&(l=2),l>0){for(d+=1,f=0,g=0;g<t;g++)m=mr[g],f===0?m!==0&&(f=1,mr[g]=16777216-m):mr[g]=16777215-m;if(n>0)switch(n){case 1:mr[t-1]&=8388607;break;case 2:mr[t-1]&=4194303;break}l===2&&(y=1-y,f!==0&&(y-=S0(1,n)))}if(y===0){for(m=0,g=t-1;g>=a;g--)m|=mr[g];if(m===0){for(h=1;mr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(v[o+g]=aI[u+g],c=0,m=0;m<=o;m++)c+=r[m]*v[o+(g-m)];i[g]=c}return t+=h,sI(r,e,t,i,n,a,u,o,v)}}if(y===0)for(t-=1,n-=24;mr[t]===0;)t-=1,n-=24;else y=S0(y,-n),y>=Y2?(c=$2*y|0,mr[t]=y-Y2*c|0,t+=1,n+=24,mr[t]=c):mr[t]=y|0;for(c=S0(1,n),g=t;g>=0;g--)i[g]=c*mr[g],c*=$2;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=_Tr[h]*i[g+h];_0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=_0[g];for(l===0?e[0]=c:e[0]=-c,c=_0[0]-c,g=1;g<=t;g++)c+=_0[g];return l===0?e[1]=c:e[1]=-c,d&7}function TTr(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?A0[c]=0:A0[c]=aI[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*A0[o+(c-l)];nI[c]=n}return v=a,sI(r,e,v,nI,f,a,u,o,A0)}uI.exports=TTr});var vI=s((tqe,fI)=>{"use strict";var ITr=Math.round;fI.exports=ITr});var Z2=s((iqe,cI)=>{"use strict";var RTr=vI();cI.exports=RTr});var mI=s((nqe,gI)=>{"use strict";var LTr=Z2(),lI=ar(),PTr=.6366197723675814,FTr=1.5707963267341256,MTr=6077100506506192e-26,BTr=6077100506303966e-26,jTr=20222662487959506e-37,kTr=20222662487111665e-37,CTr=84784276603689e-45,pI=2047;function VTr(r,e,t){var i,n,a,u,o,v,f;return n=LTr(r*PTr),u=r-n*FTr,o=n*MTr,f=e>>20|0,t[0]=u-o,i=lI(t[0]),v=f-(i>>20&pI),v>16&&(a=u,o=n*BTr,u=a-o,o=n*jTr-(a-u-o),t[0]=u-o,i=lI(t[0]),v=f-(i>>20&pI),v>49&&(a=u,o=n*kTr,u=a-o,o=n*CTr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}gI.exports=VTr});var hI=s((aqe,dI)=>{"use strict";var UTr=se(),GTr=Bn(),xTr=p0(),DTr=ar(),HTr=iI(),WTr=Ci(),zTr=oI(),I0=mI(),XTr=0,JTr=16777216,ot=1.5707963267341256,Qt=6077100506506192e-26,R0=2*Qt,L0=3*Qt,P0=4*Qt,YTr=598523,$Tr=1072243195,ZTr=1073928572,QTr=1074752122,KTr=1074977148,rIr=1075183036,eIr=1075388923,tIr=1075594811,iIr=1094263291,Gn=[0,0,0],xn=[0,0];function nIr(r,e){var t,i,n,a,u,o,v,f;if(n=DTr(r),a=n&UTr|0,a<=$Tr)return e[0]=r,e[1]=0,0;if(a<=QTr)return(a&xTr)===YTr?I0(r,a,e):a<=ZTr?r>0?(f=r-ot,e[0]=f-Qt,e[1]=f-e[0]-Qt,1):(f=r+ot,e[0]=f+Qt,e[1]=f-e[0]+Qt,-1):r>0?(f=r-2*ot,e[0]=f-R0,e[1]=f-e[0]-R0,2):(f=r+2*ot,e[0]=f+R0,e[1]=f-e[0]+R0,-2);if(a<=tIr)return a<=rIr?a===KTr?I0(r,a,e):r>0?(f=r-3*ot,e[0]=f-L0,e[1]=f-e[0]-L0,3):(f=r+3*ot,e[0]=f+L0,e[1]=f-e[0]+L0,-3):a===eIr?I0(r,a,e):r>0?(f=r-4*ot,e[0]=f-P0,e[1]=f-e[0]-P0,4):(f=r+4*ot,e[0]=f+P0,e[1]=f-e[0]+P0,-4);if(a<iIr)return I0(r,a,e);if(a>=GTr)return e[0]=NaN,e[1]=NaN,0;for(t=HTr(r),i=(a>>20)-1046,f=WTr(a-(i<<20|0),t),o=0;o<2;o++)Gn[o]=f|0,f=(f-Gn[o])*JTr;for(Gn[2]=f,u=3;Gn[u-1]===XTr;)u-=1;return v=zTr(Gn,xn,i,u,1),r<0?(e[0]=-xn[0],e[1]=-xn[1],-v):(e[0]=xn[0],e[1]=xn[1],v)}dI.exports=nIr});var Dn=s((sqe,yI)=>{"use strict";var aIr=hI();yI.exports=aIr});var wI=s((uqe,bI)=>{"use strict";var qI=-.16666666666666632,sIr=.00833333333332249,uIr=-.0001984126982985795,oIr=27557313707070068e-22,fIr=-25050760253406863e-24,vIr=158969099521155e-24,cIr=.0416666666666666,lIr=-.001388888888887411,pIr=2480158728947673e-20,gIr=-27557314351390663e-23,mIr=2087572321298175e-24,dIr=-11359647557788195e-27;function hIr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=sIr+f*(uIr+f*oIr)+f*v*(fIr+f*vIr),o=f*r,e===0?t[n]=r+o*(qI+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*qI),u=f*(cIr+f*(lIr+f*pIr)),u+=v*v*(gIr+f*(mIr+f*dIr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}bI.exports=hIr});var K2=s((oqe,NI)=>{"use strict";var yIr=se(),qIr=Bn(),bIr=ar(),wIr=Dn(),EI=wI(),EIr=1072243195,NIr=1044381696,Q2=[0,0];function OIr(r,e,t,i){var n,a;if(n=bIr(r),n&=yIr,n<=EIr)return n<NIr&&(r|0)===0&&(e[i]=r,e[i+t]=0),EI(r,0,e,t,i);if(n>=qIr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=wIr(r,Q2),EI(Q2[0],Q2[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}NI.exports=OIr});var SI=s((fqe,OI)=>{"use strict";var SIr=K2();function AIr(r){return SIr(r,[0,0],1,0)}OI.exports=AIr});var Hn=s((vqe,_I)=>{"use strict";var _Ir=b(),AI=SI(),TIr=K2();_Ir(AI,"assign",TIr);_I.exports=AI});var II=s((cqe,TI)=>{"use strict";function IIr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}TI.exports=IIr});var LI=s((lqe,RI)=>{"use strict";function RIr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}RI.exports=RIr});var FI=s((pqe,PI)=>{"use strict";function LIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}PI.exports=LIr});var BI=s((gqe,MI)=>{"use strict";function PIr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}MI.exports=PIr});var kI=s((mqe,jI)=>{"use strict";var FIr=U(),MIr=Hn().assign,BIr=R(),jIr=II(),kIr=LI(),CIr=FI(),VIr=BI(),UIr=.5641895835477563,GIr=2.404825557695773,xIr=5.520078110286311,DIr=616,HIr=-.0014244423042272315,WIr=1413,zIr=.0005468602863106496,Wn=[0,0];function XIr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===BIr?0:r===0?1:r<=4?(a=r*r,n=jIr(a),u=(r+GIr)*(r-DIr/256-HIr),u*n):r<=8?(a=1-r*r/64,n=kIr(a),u=(r+xIr)*(r-WIr/256-zIr),u*n):(a=8/r,i=a*a,e=CIr(i),t=VIr(i),u=UIr/FIr(r),MIr(r,Wn,1,0),u*(e*(Wn[1]+Wn[0])-a*t*(Wn[0]-Wn[1])))}jI.exports=XIr});var r3=s((dqe,CI)=>{"use strict";var JIr=kI();CI.exports=JIr});var F0=s((hqe,VI)=>{"use strict";var YIr=1.772453850905516;VI.exports=YIr});var GI=s((yqe,UI)=>{"use strict";function $Ir(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}UI.exports=$Ir});var DI=s((qqe,xI)=>{"use strict";function ZIr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}xI.exports=ZIr});var WI=s((bqe,HI)=>{"use strict";function QIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}HI.exports=QIr});var XI=s((wqe,zI)=>{"use strict";function KIr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}zI.exports=KIr});var YI=s((Eqe,JI)=>{"use strict";var rRr=U(),eRr=Y(),tRr=Hn().assign,iRr=R(),nRr=F0(),aRr=GI(),sRr=DI(),uRr=WI(),oRr=XI(),fRr=3.8317059702075125,vRr=7.015586669815619,cRr=981,lRr=-.0003252797924876844,pRr=1796,gRr=-38330184381246464e-21,zn=[0,0];function mRr(r){var e,t,i,n,a,u,o,v;return v=eRr(r),r===0||v===iRr?0:(v<=4?(u=r*r,a=aRr(u),o=v*(v+fRr)*(v-cRr/256-lRr),e=o*a):v<=8?(u=r*r,a=sRr(u),o=v*(v+vRr)*(v-pRr/256-gRr),e=o*a):(u=8/v,n=u*u,t=uRr(n),i=oRr(n),o=1/(rRr(v)*nRr),tRr(v,zn,1,0),e=o*(t*(zn[0]-zn[1])+u*i*(zn[0]+zn[1]))),r<0&&(e*=-1),e)}JI.exports=mRr});var e3=s((Nqe,$I)=>{"use strict";var dRr=YI();$I.exports=dRr});var Vr=s((Oqe,ZI)=>{"use strict";var hRr=3.141592653589793;ZI.exports=hRr});var KI=s((Sqe,QI)=>{"use strict";function yRr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}QI.exports=yRr});var eR=s((Aqe,rR)=>{"use strict";function qRr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}rR.exports=qRr});var iR=s((_qe,tR)=>{"use strict";function bRr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}tR.exports=bRr});var aR=s((Tqe,nR)=>{"use strict";function wRr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}nR.exports=wRr});var uR=s((Iqe,sR)=>{"use strict";function ERr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}sR.exports=ERr});var lR=s((Rqe,cR)=>{"use strict";var t3=P(),NRr=U(),ORr=Vr(),SRr=F0(),ARr=V(),_Rr=R(),TRr=Hn().assign,i3=r3(),IRr=KI(),RRr=eR(),LRr=iR(),PRr=aR(),FRr=uR(),MRr=1/SRr,n3=2/ORr,oR=.8935769662791675,fR=3.957678419314858,vR=7.086051060301773,BRr=228,jRr=.0029519662791675214,kRr=1013,CRr=.0006471693148578684,VRr=1814,URr=.00011356030177269763,Xn=[0,0];function GRr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?ARr:r===_Rr?0:r<=3?(a=r*r,u=t3(r/oR)*i3(r)*n3,n=IRr(a),o=(r+oR)*(r-BRr/256-jRr),u+o*n):r<=5.5?(a=r*r,u=t3(r/fR)*i3(r)*n3,n=RRr(a),o=(r+fR)*(r-kRr/256-CRr),u+o*n):r<=8?(a=r*r,u=t3(r/vR)*i3(r)*n3,n=LRr(a),o=(r+vR)*(r-VRr/256-URr),u+o*n):(a=8/r,i=a*a,e=PRr(i),t=FRr(i),o=MRr/NRr(r),TRr(r,Xn,1,0),o*(e*(Xn[0]-Xn[1])+a*t*(Xn[1]+Xn[0])))}cR.exports=GRr});var gR=s((Lqe,pR)=>{"use strict";var xRr=lR();pR.exports=xRr});var dR=s((Pqe,mR)=>{"use strict";function DRr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}mR.exports=DRr});var yR=s((Fqe,hR)=>{"use strict";function HRr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}hR.exports=HRr});var bR=s((Mqe,qR)=>{"use strict";function WRr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}qR.exports=WRr});var ER=s((Bqe,wR)=>{"use strict";function zRr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}wR.exports=zRr});var IR=s((jqe,TR)=>{"use strict";var NR=P(),XRr=U(),JRr=Vr(),YRr=F0(),$Rr=V(),ZRr=R(),QRr=Hn().assign,OR=e3(),KRr=dR(),rLr=yR(),eLr=bR(),tLr=ER(),iLr=1/YRr,SR=2/JRr,AR=2.197141326031017,_R=5.429681040794135,nLr=562,aLr=.001828826031017035,sLr=1390,uLr=-6459205864867228e-21,Jn=[0,0];function oLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?$Rr:r===ZRr?0:r<=4?(a=r*r,u=NR(r/AR)*OR(r)*SR,n=KRr(a),o=(r+AR)*(r-nLr/256-aLr)/r,u+o*n):r<=8?(a=r*r,u=NR(r/_R)*OR(r)*SR,n=rLr(a),o=(r+_R)*(r-sLr/256-uLr)/r,u+o*n):(a=8/r,i=a*a,e=eLr(i),t=tLr(i),o=iLr/XRr(r),QRr(r,Jn,1,0),o*(a*t*(Jn[0]-Jn[1])-e*(Jn[0]+Jn[1])))}TR.exports=oLr});var LR=s((kqe,RR)=>{"use strict";var fLr=IR();RR.exports=fLr});var FR=s((Cqe,PR)=>{"use strict";function vLr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}PR.exports=vLr});var BR=s((Vqe,MR)=>{"use strict";function cLr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}MR.exports=cLr});var kR=s((Uqe,jR)=>{"use strict";var lLr=FR(),pLr=BR();function gLr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*lLr(a),i+=n*n*pLr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}jR.exports=gLr});var a3=s((Gqe,CR)=>{"use strict";var mLr=kR();CR.exports=mLr});var GR=s((xqe,UR)=>{"use strict";var VR=-.16666666666666632,dLr=.00833333333332249,hLr=-.0001984126982985795,yLr=27557313707070068e-22,qLr=-25050760253406863e-24,bLr=158969099521155e-24;function wLr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=dLr+a*(hLr+a*yLr)+a*n*(qLr+a*bLr),i=a*r,e===0?r+i*(VR+a*t):r-(a*(.5*e-i*t)-e-i*VR)}UR.exports=wLr});var s3=s((Dqe,xR)=>{"use strict";var ELr=GR();xR.exports=ELr});var WR=s((Hqe,HR)=>{"use strict";var NLr=ar(),u3=a3(),DR=s3(),OLr=Dn(),qe=[0,0],SLr=2147483647,ALr=1072243195,_Lr=1044381696,TLr=2146435072;function ILr(r){var e,t;if(e=NLr(r),e&=SLr,e<=ALr)return e<_Lr?1:u3(r,0);if(e>=TLr)return NaN;switch(t=OLr(r,qe),t&3){case 0:return u3(qe[0],qe[1]);case 1:return-DR(qe[0],qe[1]);case 2:return-u3(qe[0],qe[1]);default:return DR(qe[0],qe[1])}}HR.exports=ILr});var Kt=s((Wqe,zR)=>{"use strict";var RLr=WR();zR.exports=RLr});var YR=s((zqe,JR)=>{"use strict";var LLr=se(),PLr=Bn(),FLr=ar(),XR=a3(),o3=s3(),MLr=Dn(),BLr=1072243195,jLr=1045430272,be=[0,0];function kLr(r){var e,t;if(e=FLr(r),e&=LLr,e<=BLr)return e<jLr?r:o3(r,0);if(e>=PLr)return NaN;switch(t=MLr(r,be),t&3){case 0:return o3(be[0],be[1]);case 1:return XR(be[0],be[1]);case 2:return-o3(be[0],be[1]);default:return-XR(be[0],be[1])}}JR.exports=kLr});var ri=s((Xqe,$R)=>{"use strict";var CLr=YR();$R.exports=CLr});var KR=s((Jqe,QR)=>{"use strict";var VLr=E(),ULr=Cr(),GLr=Y(),ZR=Kt(),xLr=ri(),DLr=z(),f3=Vr(),HLr=Vi(),WLr=HLr+1;function zLr(r){var e,t,i,n;return VLr(r)?NaN:ULr(r)?NaN:(e=GLr(r),e>WLr?1:(t=DLr(e),i=e-t,i===.5?0:(i<.25?n=ZR(f3*i):i<.75?(i=.5-i,n=xLr(f3*i)):(i=1-i,n=-ZR(f3*i)),t%2===1?-n:n)))}QR.exports=zLr});var eL=s((Yqe,rL)=>{"use strict";var XLr=KR();rL.exports=XLr});var iL=s(($qe,tL)=>{"use strict";var JLr=1.618033988749895;tL.exports=JLr});var aL=s((Zqe,nL)=>{"use strict";var YLr=E(),$Lr=eL(),ZLr=D(),QLr=iL(),KLr=R(),rPr=V(),ePr=2.23606797749979;function tPr(r){var e,t;return YLr(r)||r===KLr||r===rPr?NaN:(e=ZLr(QLr,r),t=$Lr(r)/e,(e-t)/ePr)}nL.exports=tPr});var uL=s((Qqe,sL)=>{"use strict";var iPr=aL();sL.exports=iPr});var fL=s((Kqe,oL)=>{"use strict";function nPr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}oL.exports=nPr});var pL=s((rbe,lL)=>{"use strict";var aPr=L2(),sPr=E2(),vL=se(),c3=ar(),uPr=he(),oPr=Cr(),cL=Ci(),fPr=ki(),vPr=E(),cPr=fL(),lPr=4294967295>>>0,pPr=3221225472>>>0,gPr=0x40000000000000,v3=2147483648>>>0,mPr=1>>>0,dPr=715094163>>>0,hPr=696219795>>>0,yPr=c3(aPr),ei=[0>>>0,0>>>0];function qPr(r){var e,t,i,n,a,u,o;return r===0||vPr(r)||oPr(r)?r:(t=c3(r)>>>0,e=(t&sPr)>>>0,t&=vL,t<yPr?(u=gPr*r,i=(c3(u)&vL)>>>0,i=(i/3>>>0)+hPr>>>0,u=cL(e|i,0)):(u=0,i=(t/3>>>0)+dPr>>>0,u=uPr(u,e|i)),n=u*u*(u/r),u*=cPr(n),fPr.assign(u,ei,1,0),ei[1]&v3?(ei[0]+=mPr,ei[1]&=~v3):ei[1]|=v3,u=cL(ei[0]&lPr,ei[1]&pPr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}lL.exports=qPr});var mL=s((ebe,gL)=>{"use strict";var bPr=pL();gL.exports=bPr});var hL=s((tbe,dL)=>{"use strict";var wPr=Math.ceil;dL.exports=wPr});var Ui=s((ibe,yL)=>{"use strict";var EPr=hL();yL.exports=EPr});var bL=s((nbe,qL)=>{"use strict";function NPr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}qL.exports=NPr});var EL=s((abe,wL)=>{"use strict";function OPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}wL.exports=OPr});var SL=s((sbe,OL)=>{"use strict";var SPr=ar(),APr=bL(),_Pr=EL(),NL=1048575,TPr=.3333333333333333;function IPr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=SPr(r),a=r-1,(NL&2+n)<3?a===0?0:a*a*(TPr*a-.5):(u=a/(2+a),o=u*u,n&=NL,c=n-398458|0,f=o*o,l=440401-n|0,t=f*APr(f),i=o*_Pr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}OL.exports=IPr});var IL=s((ube,TL)=>{"use strict";var AL=ar(),RPr=he(),LPr=de(),PPr=E(),FPr=ue(),MPr=V(),BPr=SL(),jPr=0x40000000000000,_L=.4342944818781689,kPr=25082946711645275e-27,CPr=.30102999566361177,VPr=3694239077158931e-28,UPr=1048575,GPr=2146435072,xPr=1048576,DPr=1072693248;function HPr(r){var e,t,i,n,a,u,o,v;return PPr(r)||r<0?NaN:r===0?MPr:(t=AL(r),u=0,t<xPr&&(u-=54,r*=jPr,t=AL(r)),t>=GPr?r+r:(u+=(t>>20)-FPr|0,t&=UPr,a=t+614244&1048576|0,r=RPr(r,t|a^DPr),u+=a>>20|0,o=u,n=BPr(r),r-=1,e=LPr(r,0),i=r-e,v=o*VPr+(r+n)*kPr,v+=(i+n)*_L+e*_L,v+o*CPr))}TL.exports=HPr});var LL=s((obe,RL)=>{"use strict";var WPr=IL();RL.exports=WPr});var FL=s((fbe,PL)=>{"use strict";var zPr=E(),XPr=Cr(),JPr=D(),YPr=z(),$Pr=Ui(),ZPr=LL(),QPr=g0(),KPr=m0(),rFr=R();function eFr(r){var e,t;return zPr(r)||XPr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=ZPr(r),e===-1?t=YPr(t):t=$Pr(t),t<=KPr?e*0:t>QPr?rFr:e*JPr(10,t))}PL.exports=eFr});var BL=s((vbe,ML)=>{"use strict";var tFr=FL();ML.exports=tFr});var kL=s((cbe,jL)=>{"use strict";function iFr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}jL.exports=iFr});var VL=s((lbe,CL)=>{"use strict";function nFr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}CL.exports=nFr});var xL=s((pbe,GL)=>{"use strict";var aFr=ar(),sFr=kL(),uFr=VL(),UL=1048575,oFr=.3333333333333333;function fFr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=aFr(r),a=r-1,(UL&2+n)<3?a===0?0:a*a*(oFr*a-.5):(u=a/(2+a),o=u*u,n&=UL,c=n-398458|0,f=o*o,l=440401-n|0,t=f*sFr(f),i=o*uFr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}GL.exports=fFr});var WL=s((gbe,HL)=>{"use strict";var vFr=ar(),cFr=he(),lFr=de(),pFr=ki(),gFr=E(),mFr=se(),dFr=p0(),hFr=ue(),yFr=V(),qFr=xL(),bFr=0x40000000000000,DL=1.4426950407214463,wFr=16751713164886512e-26,EFr=2146435072,NFr=1048576,OFr=1072693248,l3=[0,0];function SFr(r){var e,t,i,n,a,u,o;if(gFr(r)||r<0)return NaN;if(pFr.assign(r,l3,1,0),i=l3[0],n=l3[1],o=0,i<NFr){if((i&mFr|n)===0)return yFr;o-=54,r*=bFr,i=vFr(r)}return i>=EFr?r+r:(o+=(i>>20)-hFr|0,i&=dFr,u=i+614244&1048576|0,r=cFr(r,i|u^OFr),o+=u>>20|0,a=qFr(r),r-=1,e=lFr(r,0),t=r-e,(r+a)*wFr+(t+a)*DL+e*DL+o)}HL.exports=SFr});var XL=s((mbe,zL)=>{"use strict";var AFr=WL();zL.exports=AFr});var YL=s((dbe,JL)=>{"use strict";var _Fr=E(),TFr=Cr(),IFr=D(),RFr=z(),LFr=Ui(),PFr=XL(),FFr=I2(),MFr=R2(),BFr=R();function jFr(r){var e,t;return _Fr(r)||TFr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=PFr(r),t===MFr)?r:(e===-1?t=RFr(t):t=LFr(t),t>FFr?BFr:e*IFr(2,t))}JL.exports=jFr});var ZL=s((hbe,$L)=>{"use strict";var kFr=YL();$L.exports=kFr});var KL=s((ybe,QL)=>{"use strict";var CFr=z(),VFr=Ui();function UFr(r){return r<0?VFr(r):CFr(r)}QL.exports=UFr});var M0=s((qbe,rP)=>{"use strict";var GFr=KL();rP.exports=GFr});var tP=s((bbe,eP)=>{"use strict";function xFr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}eP.exports=xFr});var nP=s((wbe,iP)=>{"use strict";var DFr=c0(),HFr=tP();function WFr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*HFr(n),u=1-(e-i*a/(2-a)-r),DFr(u,t)}iP.exports=WFr});var vP=s((Ebe,fP)=>{"use strict";var zFr=E(),aP=M0(),XFr=V(),sP=R(),JFr=nP(),YFr=.6931471803691238,$Fr=19082149292705877e-26,uP=1.4426950408889634,ZFr=709.782712893384,QFr=-745.1332191019411,oP=1/(1<<28),KFr=-oP;function rMr(r){var e,t,i;return zFr(r)||r===sP?r:r===XFr?0:r>ZFr?sP:r<QFr?0:r>KFr&&r<oP?1+r:(r<0?i=aP(uP*r-.5):i=aP(uP*r+.5),e=r-i*YFr,t=i*$Fr,JFr(e,t,i))}fP.exports=rMr});var sr=s((Nbe,cP)=>{"use strict";var eMr=vP();cP.exports=eMr});var pP=s((Obe,lP)=>{"use strict";var tMr=V();function iMr(r){return r===0&&1/r===tMr}lP.exports=iMr});var p3=s((Sbe,gP)=>{"use strict";var nMr=pP();gP.exports=nMr});var g3=s((Abe,mP)=>{"use strict";var aMr=2.5066282746310007;mP.exports=aMr});var hP=s((_be,dP)=>{"use strict";function sMr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}dP.exports=sMr});var bP=s((Tbe,qP)=>{"use strict";var uMr=g3(),yP=D(),oMr=sr(),fMr=hP(),vMr=143.01608;function cMr(r){var e,t,i;return e=1/r,e=1+e*fMr(e),t=oMr(r),r>vMr?(i=yP(r,.5*r-.25),t=i*(i/t)):t=yP(r,r-.5)/t,uMr*t*e}qP.exports=cMr});var EP=s((Ibe,wP)=>{"use strict";var lMr=.5772156649015329;wP.exports=lMr});var OP=s((Rbe,NP)=>{"use strict";var pMr=EP();function gMr(r,e){return e/((1+pMr*r)*r)}NP.exports=gMr});var AP=s((Lbe,SP)=>{"use strict";function mMr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}SP.exports=mMr});var MP=s((Pbe,FP)=>{"use strict";var dMr=E(),hMr=yr(),yMr=p3(),_P=Y(),qMr=z(),bMr=ri(),TP=R(),IP=V(),RP=Vr(),LP=bP(),PP=OP(),wMr=AP();function EMr(r){var e,t,i,n;if(hMr(r)&&r<0||r===IP||dMr(r))return NaN;if(r===0)return yMr(r)?IP:TP;if(r>171.61447887182297)return TP;if(r<-170.5674972726612)return 0;if(t=_P(r),t>33)return r>=0?LP(r):(i=qMr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*bMr(RP*n),e*RP/(_P(n)*LP(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return PP(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return PP(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*wMr(r))}FP.exports=EMr});var Gi=s((Fbe,BP)=>{"use strict";var NMr=MP();BP.exports=NMr});var CP=s((Mbe,kP)=>{"use strict";var OMr=E(),SMr=Cr(),jP=Kt(),m3=ri(),AMr=Y(),Yn=s0(),$n=Vr();function _Mr(r){var e,t;return OMr(r)?NaN:SMr(r)?NaN:(t=r%2,e=AMr(t),e===0||e===1?Yn(0,t):e<.25?m3($n*t):e<.75?(e=.5-e,Yn(jP($n*e),t)):e<1.25?(t=Yn(1,t)-t,m3($n*t)):e<1.75?(e-=1.5,-Yn(jP($n*e),t)):(t-=Yn(2,t),m3($n*t)))}kP.exports=_Mr});var Zn=s((Bbe,VP)=>{"use strict";var TMr=CP();VP.exports=TMr});var GP=s((jbe,UP)=>{"use strict";function IMr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}UP.exports=IMr});var DP=s((kbe,xP)=>{"use strict";function RMr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}xP.exports=RMr});var WP=s((Cbe,HP)=>{"use strict";function LMr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}HP.exports=LMr});var XP=s((Vbe,zP)=>{"use strict";function PMr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}zP.exports=PMr});var YP=s((Ube,JP)=>{"use strict";function FMr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}JP.exports=FMr});var ZP=s((Gbe,$P)=>{"use strict";function MMr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}$P.exports=MMr});var KP=s((xbe,QP)=>{"use strict";function BMr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}QP.exports=BMr});var eF=s((Dbe,rF)=>{"use strict";function jMr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}rF.exports=jMr});var iF=s((Hbe,tF)=>{"use strict";function kMr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}tF.exports=kMr});var aF=s((Wbe,nF)=>{"use strict";function CMr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}nF.exports=CMr});var oF=s((zbe,uF)=>{"use strict";var VMr=E(),UMr=Cr(),GMr=Y(),xi=P(),xMr=M0(),DMr=Zn(),HMr=Vr(),d3=R(),WMr=GP(),zMr=DP(),XMr=WP(),JMr=XP(),YMr=YP(),$Mr=ZP(),ZMr=KP(),QMr=eF(),KMr=iF(),rBr=aF(),eBr=.07721566490153287,tBr=.3224670334241136,iBr=1,nBr=-.07721566490153287,aBr=.48383612272381005,sBr=-.1475877229945939,uBr=.06462494023913339,oBr=-.07721566490153287,fBr=1,vBr=.4189385332046727,B0=1.4616321449683622,cBr=4503599627370496,lBr=0x400000000000000,pBr=8470329472543003e-37,sF=1.4616321449683622,gBr=-.12148629053584961,mBr=-3638676997039505e-33;function dBr(r){var e,t,i,n,a,u,o,v,f,c,l,p,g;if(VMr(r)||UMr(r))return r;if(r===0)return d3;if(r<0?(e=!0,r=-r):e=!1,r<pBr)return-xi(r);if(e){if(r>=cBr||(f=DMr(r),f===0))return d3;t=xi(HMr/GMr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-xi(r),r>=B0-1+.27?(l=1-r,i=0):r>=B0-1-.27?(l=r-(sF-1),i=1):(l=r,i=2)):(g=0,r>=B0+.27?(l=2-r,i=0):r>=B0-.27?(l=r-sF,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=eBr+p*WMr(p),a=p*(tBr+p*zMr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=aBr+c*YMr(c),a=sBr+c*$Mr(c),n=uBr+c*ZMr(c),o=p*u-(mBr-c*(a+l*n)),g+=gBr+o;break;case 2:u=l*(oBr+l*QMr(l)),a=fBr+l*KMr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=xMr(r),l=r-i,o=l*(nBr+l*JMr(l)),v=iBr+l*XMr(l),g=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=xi(p)}else r<lBr?(f=xi(r),p=1/r,l=p*p,c=vBr+p*rBr(l),g=(r-.5)*(f-1)+c):g=r*(xi(r)-1);return e&&(g=t-g),g}uF.exports=dBr});var Qn=s((Xbe,fF)=>{"use strict";var hBr=oF();fF.exports=hBr});var ft=s((Jbe,vF)=>{"use strict";var yBr=6.283185307179586;vF.exports=yBr});var h3=s((Ybe,cF)=>{"use strict";var qBr=14901161193847656e-24;cF.exports=qBr});var y3=s(($be,lF)=>{"use strict";var bBr=.9189385332046728;lF.exports=bBr});var pF=s((Zbe,wBr)=>{wBr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var gF=s((Qbe,EBr)=>{EBr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var mF=s((Kbe,NBr)=>{NBr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var hF=s((rwe,dF)=>{"use strict";function OBr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}dF.exports=OBr});var qF=s((ewe,yF)=>{"use strict";function SBr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}yF.exports=SBr});var wF=s((twe,bF)=>{"use strict";function ABr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}bF.exports=ABr});var NF=s((iwe,EF)=>{"use strict";function _Br(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}EF.exports=_Br});var SF=s((nwe,OF)=>{"use strict";function TBr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}OF.exports=TBr});var _F=s((awe,AF)=>{"use strict";function IBr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}AF.exports=IBr});var PF=s((swe,LF)=>{"use strict";var RBr=E(),LBr=yr(),PBr=Y(),j0=sr(),FBr=z(),MBr=Gi(),BBr=Qn(),TF=Zn(),IF=D(),jBr=P(),kBr=R(),CBr=V(),RF=ft(),VBr=h3(),UBr=y3(),GBr=pF(),xBr=gF(),DBr=mF(),HBr=hF(),WBr=qF(),zBr=wF(),XBr=NF(),JBr=SF(),YBr=_F(),$Br=129,ZBr=170,QBr=709,KBr=1.2433929443359375,rjr=.6986598968505859;function q3(r){var e,t,i,n,a,u;if(RBr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(LBr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=$Br)return-DBr[u]/(i+1)}else return(n&1)===0?xBr[n/2]:GBr[(n-3)/2];return PBr(r)<VBr?-.5-UBr*r:(t=1-r,r<0?FBr(r/2)===r/2?0:(e=r,r=t,t=e,r>ZBr?(e=TF(.5*t)*2*q3(r),a=BBr(r),a-=r*jBr(RF),a>QBr?e<0?CBr:kBr:e*j0(a)):TF(.5*t)*2*IF(RF,-r)*MBr(r)*q3(r)):r<1?(e=HBr(t),e-=KBr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+WBr(t)):r<=4?(e=rjr+1/-t,e+zBr(r-2)):r<=7?(e=XBr(r-4),1+j0(e)):r<15?(e=JBr(r-7),1+j0(e)):r<36?(e=YBr(r-15),1+j0(e)):1+IF(2,-r))}LF.exports=q3});var MF=s((uwe,FF)=>{"use strict";var ejr=PF();FF.exports=ejr});var jF=s((owe,BF)=>{"use strict";var x=rr(),tjr=Y(),ijr=q0(),njr=Un(),ajr=G_(),sjr=rT(),ujr=nT(),ojr=oT(),fjr=lT(),vjr=wT(),cjr=ST(),ljr=IT(),pjr=Zt(),gjr=z2(),mjr=O0(),djr=MT(),hjr=CT(),yjr=xT(),qjr=$T(),bjr=r3(),wjr=e3(),Ejr=gR(),Njr=LR(),Ojr=uL(),Sjr=mL(),Ajr=Ui(),_jr=BL(),Tjr=ZL(),Ijr=Kt(),Rjr=ri(),Ljr=U(),Pjr=MF();function Fjr(r){return x(r,"abs",tjr),x(r,"abs2",ijr),x(r,"acos",njr),x(r,"acosh",ajr),x(r,"acot",sjr),x(r,"acovercos",ujr),x(r,"acoversin",ojr),x(r,"acsc",fjr),x(r,"acsch",vjr),x(r,"ahavercos",cjr),x(r,"ahaversin",ljr),x(r,"asin",pjr),x(r,"asinh",gjr),x(r,"atan",mjr),x(r,"atanh",djr),x(r,"avercos",hjr),x(r,"aversin",yjr),x(r,"bernoulli",qjr),x(r,"besselj0",bjr),x(r,"besselj1",wjr),x(r,"bessely0",Ejr),x(r,"bessely1",Njr),x(r,"binet",Ojr),x(r,"cbrt",Sjr),x(r,"ceil",Ajr),x(r,"ceil10",_jr),x(r,"ceil2",Tjr),x(r,"cos",Ijr),x(r,"sin",Rjr),x(r,"sqrt",Ljr),x(r,"zeta",Pjr),r}BF.exports=Fjr});var CF=s((fwe,kF)=>{"use strict";var Mjr=rr(),Bjr=EA(),jjr=e_(),kjr=jF();function Cjr(r){return Mjr(r,"tools",jjr({})),r=Bjr(r),r=kjr(r),r}kF.exports=Cjr});var GF=s((vwe,UF)=>{"use strict";var Vjr=Oo(),VF=Vjr();function Ujr(){return typeof VF.BigInt=="function"&&typeof BigInt=="function"&&typeof VF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}UF.exports=Ujr});var DF=s((cwe,xF)=>{"use strict";var Gjr=GF();xF.exports=Gjr});var HF=s((lwe,xjr)=>{xjr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var zF=s((pwe,WF)=>{"use strict";var Djr=HF();function Hjr(r){return Djr[r]||null}WF.exports=Hjr});var JF=s((gwe,XF)=>{"use strict";var Wjr=zF();XF.exports=Wjr});var $F=s((mwe,YF)=>{"use strict";function zjr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}YF.exports=zjr});var QF=s((dwe,ZF)=>{"use strict";var Xjr=$F();ZF.exports=Xjr});var eM=s((hwe,rM)=>{"use strict";var KF=Y();function Jjr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=KF(r[0]),u=1;u<t;u++)if(a=KF(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}rM.exports=Jjr});var b3=s((ywe,tM)=>{"use strict";var Yjr=eM();tM.exports=Yjr});var nM=s((qwe,iM)=>{"use strict";function $jr(r,e){return e&&(r===2||r===3)}iM.exports=$jr});var sM=s((bwe,aM)=>{"use strict";function Zjr(r,e){return e&&(r===1||r===3)}aM.exports=Zjr});var oM=s((wwe,uM)=>{"use strict";var Qjr=q1();function Kjr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=Qjr(e,t,i),r===a[1]-a[0]+1)}uM.exports=Kjr});var vM=s((Ewe,fM)=>{"use strict";function rkr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}fM.exports=rkr});var lM=s((Nwe,cM)=>{"use strict";function ekr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}cM.exports=ekr});var gM=s((Owe,pM)=>{"use strict";function tkr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}pM.exports=tkr});var dM=s((Swe,mM)=>{"use strict";function ikr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}mM.exports=ikr});var yM=s((Awe,hM)=>{"use strict";function nkr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}hM.exports=nkr});var bM=s((_we,qM)=>{"use strict";var akr=re(),skr=ee();function ukr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(akr(t),skr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}qM.exports=ukr});var NM=s((Twe,EM)=>{"use strict";var okr=Q().isPrimitive,fkr=q(),wM=/[-\/\\^$*+?.()|[\]{}]/g;function vkr(r){var e,t,i;if(!okr(r))throw new TypeError(fkr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(wM,"\\$&"):(t=r.substring(1,i),t=t.replace(wM,"\\$&"),r=r[0]+t+r.substring(i),r)}EM.exports=vkr});var SM=s((Iwe,OM)=>{"use strict";var ckr=NM();OM.exports=ckr});var _M=s((Rwe,AM)=>{"use strict";var lkr=RegExp.prototype.exec;AM.exports=lkr});var IM=s((Lwe,TM)=>{"use strict";var pkr=_M();function gkr(r){try{return pkr.call(r),!0}catch{return!1}}TM.exports=gkr});var LM=s((Pwe,RM)=>{"use strict";var mkr=fi(),dkr=er(),hkr=IM(),ykr=mkr();function qkr(r){return typeof r=="object"?r instanceof RegExp?!0:ykr?hkr(r):dkr(r)==="[object RegExp]":!1}RM.exports=qkr});var FM=s((Fwe,PM)=>{"use strict";var bkr=LM();PM.exports=bkr});var BM=s((Mwe,MM)=>{"use strict";function wkr(r,e,t){return r.replace(e,t)}MM.exports=wkr});var vt=s((Bwe,jM)=>{"use strict";var Ekr=BM();jM.exports=Ekr});var CM=s((jwe,kM)=>{"use strict";var Nkr=SM(),Okr=I(),w3=Q().isPrimitive,Skr=FM(),E3=q(),Akr=vt();function _kr(r,e,t){if(!w3(r))throw new TypeError(E3("invalid argument. First argument must be a string. Value: `%s`.",r));if(w3(e))e=new RegExp(Nkr(e),"g");else if(!Skr(e))throw new TypeError(E3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!w3(t)&&!Okr(t))throw new TypeError(E3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return Akr(r,e,t)}kM.exports=_kr});var UM=s((kwe,VM)=>{"use strict";var Tkr=CM();VM.exports=Tkr});var xM=s((Cwe,GM)=>{"use strict";var Ikr=UM(),N3=re(),O3=ee(),Rkr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function Lkr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=N3(a)+", "+O3(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=N3(a)+", "+O3(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=N3(a)+", "+O3(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=Rkr[this.dtype],i+=Ikr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}GM.exports=Lkr});var HM=s((Vwe,DM)=>{"use strict";var Pkr=typeof ArrayBuffer=="function"?ArrayBuffer:null;DM.exports=Pkr});var zM=s((Uwe,WM)=>{"use strict";var Fkr=Ma(),Mkr=lr(),k0=HM();function Bkr(){var r,e,t;if(typeof k0!="function")return!1;try{t=new k0(16),r=Fkr(t)&&typeof k0.isView=="function",r&&(e=new Mkr(t),e[0]=-3.14,e[1]=NaN,r=r&&k0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}WM.exports=Bkr});var JM=s((Gwe,XM)=>{"use strict";var jkr=zM();XM.exports=jkr});var $M=s((xwe,YM)=>{"use strict";var kkr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;YM.exports=kkr});var QM=s((Dwe,ZM)=>{"use strict";function Ckr(){throw new Error("not implemented")}ZM.exports=Ckr});var C0=s((Hwe,KM)=>{"use strict";var Vkr=JM(),Ukr=$M(),Gkr=QM(),S3;Vkr()?S3=Ukr:S3=Gkr;KM.exports=S3});var eB=s((Wwe,rB)=>{"use strict";var xkr=er(),Dkr=typeof DataView=="function";function Hkr(r){return Dkr&&r instanceof DataView||xkr(r)==="[object DataView]"}rB.exports=Hkr});var iB=s((zwe,tB)=>{"use strict";var Wkr=eB();tB.exports=Wkr});var aB=s((Xwe,nB)=>{"use strict";var zkr=typeof DataView=="function"?DataView:null;nB.exports=zkr});var oB=s((Jwe,uB)=>{"use strict";var Xkr=iB(),Jkr=C0(),sB=aB();function Ykr(){var r,e,t;if(typeof sB!="function")return!1;try{t=new Jkr(24),e=new sB(t,8),r=Xkr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}uB.exports=Ykr});var vB=s((Ywe,fB)=>{"use strict";var $kr=oB();fB.exports=$kr});var lB=s(($we,cB)=>{"use strict";var Zkr=typeof DataView=="function"?DataView:void 0;cB.exports=Zkr});var gB=s((Zwe,pB)=>{"use strict";function Qkr(){throw new Error("not implemented")}pB.exports=Qkr});var Kn=s((Qwe,mB)=>{"use strict";var Kkr=vB(),rCr=lB(),eCr=gB(),A3;Kkr()?A3=rCr:A3=eCr;mB.exports=A3});var hB=s((Kwe,dB)=>{"use strict";var tCr=typeof BigInt=="function"?BigInt:void 0;dB.exports=tCr});var qB=s((rEe,yB)=>{"use strict";var iCr=hB();yB.exports=iCr});var bB=s((eEe,nCr)=>{nCr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var NB=s((tEe,EB)=>{"use strict";var wB=bB();function aCr(){var r;return arguments.length===0?wB.all.slice():(r=wB[arguments[0]],r?r.slice():[])}EB.exports=aCr});var SB=s((iEe,OB)=>{"use strict";function sCr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}OB.exports=sCr});var _B=s((nEe,AB)=>{"use strict";var uCr=rr(),oCr=Pi();function fCr(r,e){var t,i,n;for(t=oCr(e),n=0;n<t.length;n++)i=t[n],uCr(r,i,e[i]);return r}AB.exports=fCr});var T3=s((aEe,IB)=>{"use strict";var vCr=b(),_3=NB(),TB=SB(),cCr=_B();vCr(_3,"enum",TB);cCr(_3,TB());IB.exports=_3});var RB=s((sEe,lCr)=>{lCr.exports=["row-major","column-major"]});var PB=s((uEe,LB)=>{"use strict";var pCr=RB();function gCr(){return pCr.slice()}LB.exports=gCr});var MB=s((oEe,FB)=>{"use strict";function mCr(){return{"row-major":1,"column-major":2}}FB.exports=mCr});var ra=s((fEe,jB)=>{"use strict";var dCr=b(),BB=PB(),hCr=MB();dCr(BB,"enum",hCr);jB.exports=BB});var kB=s((vEe,yCr)=>{yCr.exports=["throw","clamp","wrap"]});var VB=s((cEe,CB)=>{"use strict";var qCr=kB();function bCr(){return qCr.slice()}CB.exports=bCr});var GB=s((lEe,UB)=>{"use strict";function wCr(){return{throw:1,clamp:2,wrap:3}}UB.exports=wCr});var I3=s((pEe,DB)=>{"use strict";var ECr=b(),xB=VB(),NCr=GB();ECr(xB,"enum",NCr);DB.exports=xB});var zB=s((gEe,WB)=>{"use strict";var ct=zr(),OCr=C0(),SCr=Kn(),ea=qB(),ACr=T3().enum,_Cr=ra().enum,TCr=I3().enum,ICr=ACr(),RCr=_Cr(),HB=TCr();function LCr(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new SCr(new OCr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,ct?1:0),f+=1,o.setInt16(f,ICr[i],ct),f+=2,o.setBigInt64(f,ea(l),ct),c=l*8,f+=8,g=0;g<l;g++)o.setBigInt64(f,ea(n[g]),ct),o.setBigInt64(f+c,ea(a[g]*r),ct),f+=8;for(f+=c,o.setBigInt64(f,ea(this._offset*r),ct),f+=8,o.setInt8(f,RCr[this._order]),f+=1,o.setInt8(f,HB[v]),f+=1,o.setBigInt64(f,ea(p),ct),f+=8,g=0;g<p;g++)o.setInt8(f,HB[u[g]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,ct),this.__meta_dataview__=o,o}WB.exports=LCr});var JB=s((mEe,XB)=>{"use strict";var ta=zr(),PCr=Kr(),FCr=Kn(),MCr=z(),BCr=4294967295>>>0,jCr=4294967296;function kCr(r){var e,t,i,n;return e=new PCr(8),r===0||(n=(r&BCr)>>>0,i=MCr(r/jCr),t=new FCr(e.buffer),ta?(t.setUint32(0,n,ta),t.setUint32(4,i,ta)):(t.setUint32(0,i,ta),t.setUint32(4,n,ta))),e}XB.exports=kCr});var $B=s((dEe,YB)=>{"use strict";var ia=zr(),CCr=Kr(),VCr=Kn(),UCr=z(),GCr=4294967295>>>0,xCr=4294967296,U0=new CCr(8),V0=new VCr(U0.buffer);function DCr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<U0.length;u++)e[i]=0,i+=t;return e}for(a=(r&GCr)>>>0,n=UCr(r/xCr),ia?(V0.setUint32(0,a,ia),V0.setUint32(4,n,ia)):(V0.setUint32(0,n,ia),V0.setUint32(4,a,ia)),u=0;u<U0.length;u++)e[i]=U0[u],i+=t;return e}YB.exports=DCr});var KB=s((hEe,QB)=>{"use strict";var HCr=b(),ZB=JB(),WCr=$B();HCr(ZB,"assign",WCr);QB.exports=ZB});var tj=s((yEe,ej)=>{"use strict";var R3=zr(),zCr=C0(),XCr=Kn(),JCr=Kr(),YCr=T3().enum,$Cr=ra().enum,ZCr=I3().enum,na=KB().assign,QCr=YCr(),KCr=$Cr(),rj=ZCr();function rVr(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g,h;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,g=o.length,i=33+p*16+g,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new XCr(new zCr(i)),e=new JCr(v.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,R3?1:0),c+=1,v.setInt16(c,QCr[n],R3),c+=2,na(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)na(a[h],e,1,c),na(u[h]*r,e,1,c+l),c+=8;for(c+=l,na(this._offset*r,e,1,c),c+=8,v.setInt8(c,KCr[this._order]),c+=1,v.setInt8(c,rj[f]),c+=1,na(g,e,1,c),c+=8,h=0;h<g;h++)v.setInt8(c,rj[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,R3),this.__meta_dataview__=v,v}ej.exports=rVr});var nj=s((qEe,ij)=>{"use strict";var eVr=DF(),lt=b(),Xr=L(),tVr=JF(),iVr=QF(),nVr=b3(),aVr=wo(),sVr=nM(),uVr=sM(),oVr=oM(),fVr=vM(),vVr=lM(),cVr=gM(),lVr=dM(),pVr=yM(),gVr=bM(),mVr=xM(),dVr=zB(),hVr=tj();function nr(r,e,t,i,n,a){var u,o,v,f,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=tVr(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=aVr(e.get&&e.set),this._iterationOrder=iVr(i),u=oVr(f,t,i,n,this._iterationOrder),v=nVr(i),this._flags={ROW_MAJOR_CONTIGUOUS:uVr(v,u),COLUMN_MAJOR_CONTIGUOUS:sVr(v,u),READONLY:!1},this.__meta_dataview__=null,this}lt(nr,"name","ndarray");Xr(nr.prototype,"byteLength",function(){return this._byteLength});Xr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Xr(nr.prototype,"data",function(){return this._buffer});Xr(nr.prototype,"dtype",function(){return this._dtype});Xr(nr.prototype,"flags",function(){return fVr(this._flags)});Xr(nr.prototype,"length",function(){return this._length});Xr(nr.prototype,"ndims",function(){return this._ndims});Xr(nr.prototype,"offset",function(){return this._offset});Xr(nr.prototype,"order",function(){return this._order});Xr(nr.prototype,"shape",function(){return this._shape.slice()});Xr(nr.prototype,"strides",function(){return this._strides.slice()});lt(nr.prototype,"get",pVr);lt(nr.prototype,"iget",vVr);lt(nr.prototype,"set",lVr);lt(nr.prototype,"iset",cVr);lt(nr.prototype,"toString",mVr);lt(nr.prototype,"toJSON",gVr);lt(nr.prototype,"__array_meta_dataview__",eVr()?dVr:hVr);ij.exports=nr});var aa=s((bEe,aj)=>{"use strict";var yVr=nj();aj.exports=yVr});var uj=s((wEe,sj)=>{"use strict";var qVr=aa();function bVr(r){return r instanceof qVr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}sj.exports=bVr});var fj=s((EEe,oj)=>{"use strict";var wVr=uj();oj.exports=wVr});var cj=s((NEe,vj)=>{"use strict";function EVr(r){var e=r.flags;return e&&e.READONLY===!0}vj.exports=EVr});var pj=s((OEe,lj)=>{"use strict";var NVr=cj();lj.exports=NVr});var mj=s((SEe,gj)=>{"use strict";var OVr=hr().isPrimitive,SVr=Br(),L3=q();function AVr(r){var e,t,i,n;if(typeof r!="object"||r===null)throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!SVr(t))throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],n=0;n<t.length;n++){if(i=t[n],!OVr(i))throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}gj.exports=AVr});var hj=s((AEe,dj)=>{"use strict";var _Vr=mj();dj.exports=_Vr});var qj=s((_Ee,yj)=>{"use strict";function TVr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}yj.exports=TVr});var Di=s((TEe,bj)=>{"use strict";var IVr=qj();bj.exports=IVr});var Ej=s((IEe,wj)=>{"use strict";function RVr(r){return r===null}wj.exports=RVr});var P3=s((REe,Nj)=>{"use strict";var LVr=Ej();Nj.exports=LVr});var Sj=s((LEe,Oj)=>{"use strict";function PVr(r){return r===void 0}Oj.exports=PVr});var F3=s((PEe,Aj)=>{"use strict";var FVr=Sj();Aj.exports=FVr});var Tj=s((FEe,_j)=>{"use strict";var B3=b(),j3=L(),MVr=gr().isPrimitive,BVr=P3(),jVr=F3(),G0=q();function M3(r){return MVr(r)||BVr(r)||jVr(r)}function we(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof we))return new we(e,t,i);if(!M3(e))throw new TypeError(G0("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!M3(t))throw new TypeError(G0("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(M3(i)){if(i===0)throw new RangeError(G0("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(G0("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}B3(we,"name","Slice");j3(we.prototype,"start",function(){return this._start});j3(we.prototype,"stop",function(){return this._stop});j3(we.prototype,"step",function(){return this._step});B3(we.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});B3(we.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});_j.exports=we});var Hi=s((MEe,Ij)=>{"use strict";var kVr=Tj();Ij.exports=kVr});var Lj=s((BEe,Rj)=>{"use strict";var CVr=Hi(),VVr=pe();function UVr(r){return r instanceof CVr||VVr(r)==="Slice"}Rj.exports=UVr});var Fj=s((jEe,Pj)=>{"use strict";var GVr=Lj();Pj.exports=GVr});var jj=s((kEe,Bj)=>{"use strict";var k3=b(),Mj=L(),xVr=gr().isPrimitive,DVr=P3(),HVr=F3(),WVr=Fj(),zVr=q();function XVr(r){return xVr(r)||DVr(r)||HVr(r)||WVr(r)}function Nr(){var r,e,t,i,n;if(r=arguments.length,!(this instanceof Nr)){if(r===1)return new Nr(arguments[0]);if(r===2)return new Nr(arguments[0],arguments[1]);if(r===3)return new Nr(arguments[0],arguments[1],arguments[2]);if(r===4)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],n=0;n<r;n++)t.push(arguments[n]);return e=Object.create(Nr.prototype),Nr.apply(e,t)}for(this._data=[],n=0;n<r;n++){if(i=arguments[n],!XVr(i))throw new TypeError(zVr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,i));this._data.push(i===void 0?null:i)}return this}k3(Nr,"name","MultiSlice");Mj(Nr.prototype,"ndims",function(){return this._data.length});Mj(Nr.prototype,"data",function(){return this._data.slice()});k3(Nr.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});k3(Nr.prototype,"toJSON",function(){var e,t,i,n;for(e=this._data,t={type:"MultiSlice",data:[]},n=0;n<e.length;n++)i=e[n],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});Bj.exports=Nr});var x0=s((CEe,kj)=>{"use strict";var JVr=jj();kj.exports=JVr});var Vj=s((VEe,Cj)=>{"use strict";function YVr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Cj.exports=YVr});var Gj=s((UEe,Uj)=>{"use strict";var $Vr=Hi(),sa=Vj();function ZVr(r,e,t){var i,n,a;if(i=r.start,n=r.stop,a=r.step,a===null&&(a=1),i===null)a>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return sa();i=0}}else if(i>=e){if(t)return sa();a<0?i=e-1:i=e}if(n===null)a>0?n=e:n=null;else if(n<0){if(n=e+n,n<0)if(a>0){if(t)return sa();n=0}else{if(t&&n<-1)return sa();n=null}}else if(n>e){if(t)return sa();n=e}return new $Vr(i,n,a)}Uj.exports=ZVr});var Dj=s((GEe,xj)=>{"use strict";var QVr=Gj();xj.exports=QVr});var Wj=s((xEe,Hj)=>{"use strict";function KVr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Hj.exports=KVr});var Jj=s((DEe,Xj)=>{"use strict";var rUr=x0(),ua=Hi(),eUr=Dj(),zj=Wj();function tUr(r,e,t){return r===null?new ua(0,e,1):typeof r=="number"?r>=e?t?zj():new ua(e,e,1):r<0?(r=e+r,r<0?t?zj():new ua(0,0,1):new ua(r,r+1,1)):new ua(r,r+1,1):eUr(r,e,t)}function iUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],u=0;u<i.length;u++){if(a=tUr(i[u],e[u],t),a.code!==void 0)return a;n.push(a)}return rUr.apply(null,n)}Xj.exports=iUr});var $j=s((HEe,Yj)=>{"use strict";var nUr=Jj();Yj.exports=nUr});var Qj=s((WEe,Zj)=>{"use strict";function aUr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}Zj.exports=aUr});var rk=s((zEe,Kj)=>{"use strict";var sUr=Qj();Kj.exports=sUr});var tk=s((XEe,ek)=>{"use strict";var uUr=Ui();function oUr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:uUr((i-t)/e)}ek.exports=oUr});var nk=s((JEe,ik)=>{"use strict";var fUr=tk();ik.exports=fUr});var sk=s((YEe,ak)=>{"use strict";var vUr=nk();function cUr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(vUr(e[i]));return t}ak.exports=cUr});var ok=s(($Ee,uk)=>{"use strict";var lUr=sk();uk.exports=lUr});var vk=s((ZEe,fk)=>{"use strict";function pUr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}fk.exports=pUr});var lk=s((QEe,ck)=>{"use strict";var gUr=vk();ck.exports=gUr});var gk=s((KEe,pk)=>{"use strict";function mUr(r){return r.dtype}pk.exports=mUr});var dk=s((rNe,mk)=>{"use strict";var dUr=gk();mk.exports=dUr});var yk=s((eNe,hk)=>{"use strict";var hUr=Aa();function yUr(r,e){var t=r.shape;return e?hUr(t):t}hk.exports=yUr});var bk=s((tNe,qk)=>{"use strict";var qUr=yk();qk.exports=qUr});var Ek=s((iNe,wk)=>{"use strict";function bUr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function wUr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function EUr(r,e){return e==="column-major"?wUr(r):bUr(r)}wk.exports=EUr});var Ok=s((nNe,Nk)=>{"use strict";function NUr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function OUr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function SUr(r,e,t){return e==="column-major"?OUr(r,t):NUr(r,t)}Nk.exports=SUr});var D0=s((aNe,Ak)=>{"use strict";var AUr=b(),Sk=Ek(),_Ur=Ok();AUr(Sk,"assign",_Ur);Ak.exports=Sk});var Tk=s((sNe,_k)=>{"use strict";var TUr=D0(),IUr=Aa(),RUr="row-major";function LUr(r,e){var t,i,n;return n=r.strides,typeof n!="object"||n===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=RUr),TUr(i,t))):e?IUr(n):n}_k.exports=LUr});var Rk=s((uNe,Ik)=>{"use strict";var PUr=Tk();Ik.exports=PUr});var Pk=s((oNe,Lk)=>{"use strict";function FUr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}Lk.exports=FUr});var H0=s((fNe,Fk)=>{"use strict";var MUr=Pk();Fk.exports=MUr});var Bk=s((vNe,Mk)=>{"use strict";var BUr=H0();function jUr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:BUr(t,e))}Mk.exports=jUr});var kk=s((cNe,jk)=>{"use strict";var kUr=Bk();jk.exports=kUr});var Vk=s((lNe,Ck)=>{"use strict";var CUr=b3(),C3="row-major",VUr="column-major";function UUr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=CUr(e),t===1||t===3)?C3:t===2?VUr:r.shape.length===0?C3:null)}Ck.exports=UUr});var Gk=s((pNe,Uk)=>{"use strict";var GUr=Vk();Uk.exports=GUr});var Dk=s((gNe,xk)=>{"use strict";function xUr(r){return r.data}xk.exports=xUr});var Wk=s((mNe,Hk)=>{"use strict";var DUr=Dk();Hk.exports=DUr});var Xk=s((dNe,zk)=>{"use strict";function HUr(r,e,t){var i,n,a;for(i=r.data,n=t,a=0;a<i.length;a++)n+=e[a]*i[a].start;return n}zk.exports=HUr});var Yk=s((hNe,Jk)=>{"use strict";function WUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],a=0;a<t.length;a++)u=t[a],n.push(e[u]*i[u].step);return n}Jk.exports=WUr});var Zk=s((yNe,$k)=>{"use strict";var zUr=it(),XUr=lr(),JUr=Qr(),YUr=li(),$Ur=Ke(),ZUr=gi(),QUr=Gt(),KUr=pr(),rGr=Kr(),eGr=pi(),tGr=Ni(),iGr=_i(),nGr={binary:zUr,float64:XUr,float32:JUr,generic:Array,int16:YUr,int32:$Ur,int8:ZUr,uint16:QUr,uint32:KUr,uint8:rGr,uint8c:eGr,complex64:tGr,complex128:iGr};$k.exports=nGr});var Kk=s((qNe,Qk)=>{"use strict";var aGr=Zk();function sGr(r){return aGr[r]||null}Qk.exports=sGr});var eC=s((bNe,rC)=>{"use strict";var uGr=Kk();rC.exports=uGr});var iC=s((wNe,tC)=>{"use strict";var oGr=I(),fGr=it(),vGr=oGr(fGr.allocUnsafe);tC.exports=vGr});var aC=s((ENe,nC)=>{"use strict";var cGr=hr(),lGr=q(),pGr=it();function gGr(r){if(!cGr(r))throw new TypeError(lGr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return pGr.allocUnsafe(r)}nC.exports=gGr});var uC=s((NNe,sC)=>{"use strict";var mGr=hr(),dGr=q(),hGr=it();function yGr(r){if(!mGr(r))throw new TypeError(dGr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new hGr(r)}sC.exports=yGr});var fC=s((ONe,oC)=>{"use strict";var qGr=iC(),bGr=aC(),wGr=uC(),V3;qGr?V3=bGr:V3=wGr;oC.exports=V3});var cC=s((SNe,vC)=>{"use strict";function EGr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}vC.exports=EGr});var pC=s((ANe,lC)=>{"use strict";var NGr=eC(),OGr=fC(),SGr=cC();function AGr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function _Gr(r){return SGr(OGr(r))}function TGr(r,e){var t=NGr(r);return t?new t(e):null}function IGr(r,e){return r==="generic"?AGr(e):r==="binary"?_Gr(e):TGr(r,e)}lC.exports=IGr});var U3=s((_Ne,gC)=>{"use strict";var RGr=pC();gC.exports=RGr});var dC=s((TNe,mC)=>{"use strict";var LGr=U3(),PGr=Qe();function FGr(r,e,t,i,n){var a,u;return u=t.length,u===0?a=[0]:a=PGr(u),new r(e,LGr(e,0),t,a,0,i,{readonly:n})}mC.exports=FGr});var EC=s((INe,wC)=>{"use strict";var hC=$j(),MGr=rk(),yC=ok(),G3=lk(),BGr=Qe(),qC=Di(),jGr=dk(),kGr=bk(),CGr=Rk(),VGr=kk(),UGr=Gk(),x3=Wk(),bC=q(),GGr=Xk(),xGr=Yk(),DGr=dC();function HGr(r,e,t,i){var n,a,u,o,v,f,c,l,p,g;if(u=jGr(r),o=kGr(r,!0),n=CGr(r,!0),a=VGr(r),v=UGr(r),c=o.length,e.ndims!==c)throw new RangeError(bC("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,x3(r),o,n,a,v,{readonly:!i});if(f=MGr(e),g=hC(e,o,!0),g.code){if(t)throw new RangeError(bC("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));g=hC(e,o,!1),p=yC(g),qC(G3(p,f))>0&&(p=BGr(p.length))}else p=yC(g);return qC(p)===0?DGr(l,u,G3(p,f),v,!i):(a=GGr(g,n,a),p=G3(p,f),p.length===0?new l(u,x3(r),[],[0],a,v,{readonly:!i}):(n=xGr(g,n,f),new l(u,x3(r),p,n,a,v,{readonly:!i})))}wC.exports=HGr});var D3=s((RNe,NC)=>{"use strict";var WGr=EC();NC.exports=WGr});var H3=s((LNe,OC)=>{"use strict";var zGr="row-major";function XGr(r,e,t,i,n){var a,u;for(a=r-1;a>i;a--)n[a]=t[a];for(a=i;a>=0&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a--);for(a-=1;a>=0;a--)n[a]=t[a];return n}function JGr(r,e,t,i,n){var a,u;for(a=0;a<i;a++)n[a]=t[a];for(a=i;a<r&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a++);for(a+=1;a<r;a++)n[a]=t[a];return n}function YGr(r,e,t,i,n){var a=r.length;if(a===0)return null;if(i<0){if(i+=a,i<0)return null}else if(i>=a)return null;return e===zGr?XGr(a,r,t,i,n):JGr(a,r,t,i,n)}OC.exports=YGr});var AC=s((PNe,SC)=>{"use strict";var $Gr=Qe(),ZGr=H3();function QGr(r,e,t,i){return ZGr(r,e,t,i,$Gr(r.length))}SC.exports=QGr});var W3=s((FNe,TC)=>{"use strict";var KGr=b(),_C=AC(),rxr=H3();KGr(_C,"assign",rxr);TC.exports=_C});var PC=s((MNe,LC)=>{"use strict";var z3=b(),exr=T(),txr=cr().isPrimitive,ixr=fj(),nxr=pj(),axr=S(),IC=wn(),sxr=Qe(),uxr=hj(),oxr=Di(),fxr=D3(),vxr=W3().assign,cxr=x0(),W0=q();function RC(r){var e,t,i,n,a,u,o,v,f,c,l;if(!ixr(r))throw new TypeError(W0("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(n={writable:!1},arguments.length>1){if(e=arguments[1],!exr(e))throw new TypeError(W0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(axr(e,"readonly")){if(!txr(e.readonly))throw new TypeError(W0("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(n.writable=!e.readonly,n.writable&&nxr(r))throw new Error(W0("invalid option. Cannot write to read-only array."))}}if(t=uxr(r),i=t.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return c=oxr(t),c===0&&(u=!0),c/=t[i-1],v=i-2,f=t[v],l=-1,o=sxr(i),o[i-1]=null,a={},z3(a,"next",p),z3(a,"return",g),IC&&z3(a,IC,h),a;function p(){var d,m;return l+=1,u||l>=c?{done:!0}:(d=cxr.apply(null,o),m=(o[v]+1)%f,o[v]=m,m===0&&(o=vxr(t,"row-major",o,v-1,o)),{value:fxr(r,d,!0,n.writable),done:!1})}function g(d){return u=!0,arguments.length?{value:d,done:!0}:{done:!0}}function h(){return RC(r,n)}}LC.exports=RC});var MC=s((BNe,FC)=>{"use strict";var lxr=PC();FC.exports=lxr});var kC=s((jNe,jC)=>{"use strict";var pxr=ra(),BC=pxr(),gxr=BC.length;function mxr(r){var e;for(e=0;e<gxr;e++)if(r===BC[e])return!0;return!1}jC.exports=mxr});var VC=s((kNe,CC)=>{"use strict";var dxr=kC();CC.exports=dxr});var GC=s((CNe,UC)=>{"use strict";function hxr(r){return r.toLowerCase()}UC.exports=hxr});var ti=s((VNe,xC)=>{"use strict";var yxr=GC();xC.exports=yxr});var HC=s((UNe,DC)=>{"use strict";var qxr=yn(),bxr=qi(),wxr=En(),Exr=Ti();function Nxr(r,e){var t,i,n,a;for(n=Exr(r),qxr(r)?i=bxr(n):i=wxr(n),t=r.length,a=0;a<t;a++)if(i(r,a)===e)return!0;return!1}DC.exports=Nxr});var zC=s((GNe,WC)=>{"use strict";var Oxr=Br(),Sxr=yn(),Axr=qi(),_xr=Ti(),Txr=q();function Ixr(r){var e,t,i;if(!Oxr(r))throw new TypeError(Txr("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=_xr(r),Sxr(r)&&(e=Axr(i)),t=r.length,e===void 0?n:a;function n(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function a(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}WC.exports=Ixr});var YC=s((xNe,JC)=>{"use strict";var Rxr=b(),XC=HC(),Lxr=zC();Rxr(XC,"factory",Lxr);JC.exports=XC});var KC=s((DNe,QC)=>{"use strict";var z0=hr().isPrimitive,Pxr=gr().isPrimitive,$C=M().isPrimitive,Fxr=VC(),Mxr=b1(),X3=ti(),Bxr=YC().factory,jxr=ra(),kxr=aa(),Cxr=Di(),oe=q(),Vxr=B1(),Uxr=Ra(),Gxr=jxr(),ZC=["string","number","complex","boolean","date","any"],xxr=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],Dxr=xxr.length,Hxr=5,Wxr=Bxr(ZC);function zxr(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function Xxr(r,e){var t,i,n;for(t=[],n=e;n<r.length&&(i=r[n],!!$C(i));n++){if(!z0(i))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function Jxr(r,e){var t,i,n;for(t=[],n=e;n<r.length&&(i=r[n],!!$C(i));n++){if(!Pxr(i))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function Yxr(r,e){var t,i,n;if(r[0]!=="ndarray")throw new TypeError(oe('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(n=1;n<r.length;n++)if(i=X3(r[n]),i==="shape")e.shape=Xxr(r,n+1),e.ndims=e.shape.length,n+=e.ndims;else if(i==="strides")e.strides=Jxr(r,n+1),n+=e.strides.length;else if(i==="offset"){if(n+=1,t=r[n],!z0(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(n+=1,t=X3(r[n]),!Fxr(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',Gxr.join('", "'),t));e.order=t}else if(i==="dtype"){if(n+=1,t=X3(r[n]),!Wxr(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',ZC.join('", "'),t));e.dtype=t}else if(i==="length"){if(n+=1,t=r[n],!z0(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(n+=1,t=r[n],!z0(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){n+=1;break}else throw new TypeError(oe('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function $xr(r,e){return Dxr+r+e+Hxr}function Zxr(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(oe("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=Cxr(r.shape),t!==r.length)throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!Mxr(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function Qxr(r){var e;if(!Vxr(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=zxr(),e.rawBuffer=Uxr(r),e=Yxr(e.rawBuffer,e),e=Zxr(e),e.headerLength=$xr(e.ndims,e.strides.length),e.ndarray=new kxr("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}QC.exports=Qxr});var eV=s((HNe,rV)=>{"use strict";var Kxr=KC();rV.exports=Kxr});var iV=s((WNe,tV)=>{"use strict";var rDr=typeof String.prototype.trim<"u";tV.exports=rDr});var J3=s((zNe,nV)=>{"use strict";var eDr=String.prototype.trim;nV.exports=eDr});var oV=s((XNe,uV)=>{"use strict";var aV=J3(),tDr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,sV="\u180E";function iDr(){return aV.call(tDr)===""&&aV.call(sV)===sV}uV.exports=iDr});var vV=s((JNe,fV)=>{"use strict";var nDr=vt(),aDr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function sDr(r){return nDr(r,aDr,"$1")}fV.exports=sDr});var lV=s((YNe,cV)=>{"use strict";var uDr=J3();function oDr(r){return uDr.call(r)}cV.exports=oDr});var pt=s(($Ne,pV)=>{"use strict";var fDr=iV(),vDr=oV(),cDr=vV(),lDr=lV(),Y3;fDr&&vDr()?Y3=lDr:Y3=cDr;pV.exports=Y3});var mV=s((ZNe,gV)=>{"use strict";var pDr=/(?:\s*-\s*)(?=\d+)(\d+)$/;gV.exports=pDr});var hV=s((QNe,dV)=>{"use strict";var gDr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;dV.exports=gDr});var bV=s((KNe,qV)=>{"use strict";var yV=z(),mDr=mV(),dDr=hV();function hDr(r,e,t,i){var n;if(r==="end")return e;if(n=r.match(mDr),n){if(r=e-parseInt(n[1],10),r<0){if(i)return-2;r=0}return r}return n=r.match(dDr),n?(r=parseFloat(n[1]),r<1?i?-2:-1:t&&e>0&&r!==1?yV((e-1)/r):yV(e/r)):-1}qV.exports=hDr});var EV=s((rOe,wV)=>{"use strict";var yDr=/\s*:\s*/;wV.exports=yDr});var OV=s((eOe,NV)=>{"use strict";var qDr=/^[-+]?[0-9]+$/;NV.exports=qDr});var AV=s((tOe,SV)=>{"use strict";var bDr=/^end/;SV.exports=bDr});var TV=s((iOe,_V)=>{"use strict";function wDr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}_V.exports=wDr});var RV=s((nOe,IV)=>{"use strict";function EDr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}IV.exports=EDr});var PV=s((aOe,LV)=>{"use strict";function NDr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}LV.exports=NDr});var kV=s((sOe,jV)=>{"use strict";var FV=Hi(),ODr=pt(),MV=bV(),SDr=EV(),$3=OV(),BV=AV(),Wi=TV(),ii=RV(),ADr=PV();function _Dr(r,e,t){var i,n,a;if(i=ODr(r).split(SDr),n=i.length,n<2||n>3)return Wi();if(n===3)if(a=i[2],a.length===0)i[2]=1;else{if($3.test(a)===!1)return Wi();if(a=parseInt(a,10),a===0)return ADr();i[2]=a}else i.push(1);if(a=i[0],a.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(BV.test(a)){if(a=MV(a,e,i[2]<0,t),a<0)return a===-2?ii():Wi();i[2]<0&&a>=e&&(a-=1),i[0]=a}else if($3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0){if(t)return ii();a=0}}else if(a>=e){if(t)return ii();i[2]<0?a=e-1:a=e}i[0]=a}else return Wi();if(a=i[1],a.length===0)i[2]<0?i[1]=null:i[1]=e;else if(BV.test(a)){if(a=MV(a,e,i[2]<0,t),a<0)return a===-2?ii():Wi();i[1]=a}else if($3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0)if(i[2]>0){if(t)return ii();a=0}else{if(t&&a<-1)return ii();a=null}}else if(a>e){if(t)return ii();a=e}i[1]=a}else return Wi();return e===0?new FV(0,0,i[2]):new FV(i[0],i[1],i[2])}jV.exports=_Dr});var VV=s((uOe,CV)=>{"use strict";var TDr=kV();CV.exports=TDr});var GV=s((oOe,UV)=>{"use strict";function IDr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}UV.exports=IDr});var DV=s((fOe,xV)=>{"use strict";function RDr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}xV.exports=RDr});var WV=s((vOe,HV)=>{"use strict";function LDr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}HV.exports=LDr});var XV=s((cOe,zV)=>{"use strict";function PDr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}zV.exports=PDr});var YV=s((lOe,JV)=>{"use strict";var FDr=/\s*,\s*/;JV.exports=FDr});var ZV=s((pOe,$V)=>{"use strict";var MDr=/^[-+]?[0-9]+$/;$V.exports=MDr});var rU=s((gOe,KV)=>{"use strict";var BDr=pt(),jDr=Hi(),kDr=x0(),CDr=VV(),VDr=GV(),UDr=DV(),GDr=WV(),QV=XV(),xDr=YV(),DDr=ZV();function HDr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(o=e.length,i=BDr(r).split(xDr),v=i.length,a=!1,n=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(a)return VDr();for(a=!0,p=0;p<o-v+1;p++)n.push(new jDr(0,e[l],1)),l+=1;continue}if(u=e[l],DDr.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return QV()}else if(f>=u)return QV()}l+=1}else{if(f=CDr(f,u,t),f.code)return f;l+=1}n.push(f)}return n.length!==o?n.length<o?UDr():GDr():kDr.apply(null,n)}KV.exports=HDr});var tU=s((mOe,eU)=>{"use strict";var WDr=rU();eU.exports=WDr});var aU=s((dOe,nU)=>{"use strict";function iU(r,e,t,i,n,a){var u,o,v,f,c;if(a>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[a],u=t[a],c=0;c<f;c++)o=iU(r,e,t,i,n,a+1),v.push(o),i+=u;return v}nU.exports=iU});var uU=s((hOe,sU)=>{"use strict";var zDr=Sn(),XDr=aU();function JDr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return XDr(zDr(r),e,t,i,n,0)}sU.exports=JDr});var fU=s((yOe,oU)=>{"use strict";var YDr=uU();oU.exports=YDr});var cU=s((qOe,vU)=>{"use strict";var $Dr=D0(),ZDr=H0(),QDr=U3(),KDr=q(),rHr=aa(),eHr=Di();function tHr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=eHr(e),u=$Dr(e,t)):(a=1,u=[0]),n=QDr(r,a),n===null)throw new TypeError(KDr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new rHr(r,n,e,u,ZDr(e,u),t)}vU.exports=tHr});var pU=s((bOe,lU)=>{"use strict";var iHr=cU();lU.exports=iHr});var mU=s((wOe,gU)=>{"use strict";var Jr=rr(),nHr=MC(),aHr=aa(),sHr=W3(),uHr=Di(),oHr=eV(),fHr=tU(),vHr=D0(),cHr=D3(),lHr=H0(),pHr=fU(),gHr=pU();function mHr(r){return Jr(r,"iterRows",nHr),Jr(r,"ndarray",aHr),Jr(r,"nextCartesianIndex",sHr),Jr(r,"numel",uHr),Jr(r,"range2ndarray",oHr),Jr(r,"seq2multislice",fHr),Jr(r,"shape2strides",vHr),Jr(r,"slice",cHr),Jr(r,"strides2offset",lHr),Jr(r,"toArray",pHr),Jr(r,"zeros",gHr),r}gU.exports=mHr});var hU=s((EOe,dU)=>{"use strict";var dHr=Ze();function hHr(r,e,t,i){dHr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}dU.exports=hHr});var B=s((NOe,yU)=>{"use strict";var yHr=hU();yU.exports=yHr});var bU=s((OOe,qU)=>{"use strict";function qHr(r){return e;function e(){return r}}qU.exports=qHr});var _=s((SOe,wU)=>{"use strict";var bHr=bU();wU.exports=bHr});var NU=s((AOe,EU)=>{"use strict";var wHr=R();function EHr(r){return r===0&&1/r===wHr}EU.exports=EHr});var gt=s((_Oe,OU)=>{"use strict";var NHr=NU();OU.exports=NHr});var _U=s((TOe,AU)=>{"use strict";var OHr=gt(),SU=E(),Z3=R();function SHr(r,e){return SU(r)||SU(e)?NaN:r===Z3||e===Z3?Z3:r===e&&r===0?OHr(r)?r:e:r>e?r:e}AU.exports=SHr});var Q3=s((IOe,TU)=>{"use strict";var AHr=_U();TU.exports=AHr});var LU=s((ROe,RU)=>{"use strict";var IU=65535;function _Hr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&IU)>>>0,o=(e&IU)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}RU.exports=_Hr});var FU=s((LOe,PU)=>{"use strict";var THr=LU();PU.exports=THr});var K3=s((POe,MU)=>{"use strict";function IHr(r,e,t,i,n,a,u){var o,v,f,c,l,p,g;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,g=0;g<r;g++)f(v,p,c(o,l)),l+=t,p+=a;return e}MU.exports=IHr});var kU=s((FOe,jU)=>{"use strict";var BU=Sn(),RHr=K3(),rf=8;function LHr(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=BU(e),v=BU(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,RHr(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%rf,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<rf)return i;for(c=f;c<r;c+=rf)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}jU.exports=LHr});var UU=s((MOe,VU)=>{"use strict";var CU=Sn(),PHr=K3(),oa=8;function FHr(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=CU(e),c=CU(n),f.accessorProtocol||c.accessorProtocol)return PHr(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%oa,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<oa)return n;for(p=l;p<r;p+=oa)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=oa,v+=oa;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}VU.exports=FHr});var mt=s((BOe,xU)=>{"use strict";var MHr=b(),GU=kU(),BHr=UU();MHr(GU,"ndarray",BHr);xU.exports=GU});var HU=s((jOe,DU)=>{"use strict";function jHr(){}DU.exports=jHr});var zU=s((kOe,WU)=>{"use strict";var kHr=HU();function CHr(){return kHr.name==="foo"}WU.exports=CHr});var JU=s((COe,XU)=>{"use strict";var VHr=zU();XU.exports=VHr});var $U=s((VOe,YU)=>{"use strict";var UHr=I(),GHr=JU(),xHr=q(),DHr=Ao().REGEXP,HHr=GHr();function WHr(r){if(UHr(r)===!1)throw new TypeError(xHr("invalid argument. Must provide a function. Value: `%s`.",r));return HHr?r.name:DHr.exec(r.toString())[1]}YU.exports=WHr});var QU=s((UOe,ZU)=>{"use strict";var zHr=$U();ZU.exports=zHr});var rG=s((GOe,KU)=>{"use strict";var XHr=gi(),JHr=Kr(),YHr=pi(),$Hr=li(),ZHr=Gt(),QHr=Ke(),KHr=pr(),rWr=Qr(),eWr=lr(),tWr=[eWr,rWr,QHr,KHr,$Hr,ZHr,XHr,JHr,YHr];KU.exports=tWr});var eG=s((xOe,iWr)=>{iWr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var uG=s((DOe,sG)=>{"use strict";var nWr=pe(),aWr=QU(),nG=Xt(),sWr=Po(),uWr=lr(),tG=rG(),iG=eG(),X0=sWr()?nG(uWr):aG;X0=aWr(X0)==="TypedArray"?X0:aG;function aG(){}function oWr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof X0)return!0;for(t=0;t<tG.length;t++)if(r instanceof tG[t])return!0;for(;r;){for(e=nWr(r),t=0;t<iG.length;t++)if(iG[t]===e)return!0;r=nG(r)}return!1}sG.exports=oWr});var fG=s((HOe,oG)=>{"use strict";var fWr=uG();oG.exports=fWr});var cG=s((WOe,vG)=>{"use strict";var vWr=Ni(),cWr=_i(),lWr=[cWr,vWr];vG.exports=lWr});var lG=s((zOe,pWr)=>{pWr.exports=["Complex64Array","Complex128Array"]});var dG=s((XOe,mG)=>{"use strict";var gWr=pe(),mWr=Xt(),pG=cG(),gG=lG();function dWr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<pG.length;t++)if(r instanceof pG[t])return!0;for(;r;){for(e=gWr(r),t=0;t<gG.length;t++)if(gG[t]===e)return!0;r=mWr(r)}return!1}mG.exports=dWr});var yG=s((JOe,hG)=>{"use strict";var hWr=dG();hG.exports=hWr});var bG=s((YOe,qG)=>{"use strict";var yWr=q();function qWr(r,e){if(typeof e!="function")throw new TypeError(yWr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}qG.exports=qWr});var EG=s(($Oe,wG)=>{"use strict";var bWr=bG();wG.exports=bWr});var OG=s((ZOe,NG)=>{"use strict";var wWr=gi(),EWr=Kr(),NWr=pi(),OWr=li(),SWr=Gt(),AWr=Ke(),_Wr=pr(),TWr=Qr(),IWr=lr(),RWr=Ni(),LWr=_i(),PWr=[[IWr,"Float64Array"],[TWr,"Float32Array"],[AWr,"Int32Array"],[_Wr,"Uint32Array"],[OWr,"Int16Array"],[SWr,"Uint16Array"],[wWr,"Int8Array"],[EWr,"Uint8Array"],[NWr,"Uint8ClampedArray"],[RWr,"Complex64Array"],[LWr,"Complex128Array"]];NG.exports=PWr});var AG=s((QOe,SG)=>{"use strict";var FWr=EG(),MWr=pe(),BWr=Xt(),zi=OG();function jWr(r){var e,t;for(t=0;t<zi.length;t++)if(FWr(r,zi[t][0]))return zi[t][1];for(;r;){for(e=MWr(r),t=0;t<zi.length;t++)if(e===zi[t][1])return zi[t][1];r=BWr(r)}}SG.exports=jWr});var TG=s((KOe,_G)=>{"use strict";var kWr=fG(),CWr=yG(),VWr=hi(),UWr=yi(),GWr=q(),xWr=AG();function DWr(r){var e,t,i;if(kWr(r))e=r;else if(CWr(r))r.BYTES_PER_ELEMENT===8?e=VWr(r,0):e=UWr(r,0);else throw new TypeError(GWr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:xWr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}_G.exports=DWr});var j=s((rSe,IG)=>{"use strict";var HWr=TG();IG.exports=HWr});var ef=s((eSe,RG)=>{"use strict";var WWr=vi(),zWr=z(),XWr=WWr-1;function JWr(){var r=zWr(1+XWr*Math.random());return r>>>0}RG.exports=JWr});var vf=s((tSe,GG)=>{"use strict";var Ee=b(),dt=L(),LG=B(),tf=S(),YWr=T(),$Wr=Br(),PG=ge(),ZWr=cr().isPrimitive,FG=te().isPrimitive,CG=Vi(),VG=vi(),Or=pr(),QWr=Q3(),ff=FU(),Xi=mt(),KWr=j(),Ar=q(),MG=ef(),ur=624,nf=397,BG=VG>>>0,rzr=19650218>>>0,af=2147483648>>>0,sf=2147483647>>>0,ezr=1812433253>>>0,tzr=1664525>>>0,izr=1566083941>>>0,nzr=2636928640>>>0,azr=4022730752>>>0,szr=2567483615>>>0,uf=[0>>>0,szr>>>0],UG=1/(CG+1),uzr=67108864>>>0,ozr=2147483648>>>0,of=1>>>0,fzr=CG*UG,J0=1,Y0=3,ht=2,yt=ur+3,Sr=ur+5,fa=ur+6;function jG(r,e){var t;return e?t="option":t="argument",r.length<fa+1?new RangeError(Ar("invalid %s. `state` array has insufficient length.",t)):r[0]!==J0?new RangeError(Ar("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,J0,r[0])):r[1]!==Y0?new RangeError(Ar("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Y0,r[1])):r[ht]!==ur?new RangeError(Ar("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[ht])):r[yt]!==1?new RangeError(Ar("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[yt])):r[Sr]!==r.length-fa?new RangeError(Ar("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-fa,r[Sr])):null}function kG(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=ff(t,ezr)+i>>>0;return r}function vzr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=QWr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=ff(n,tzr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=ff(n,izr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=ozr,r}function czr(r){var e,t,i,n;for(n=ur-nf,t=0;t<n;t++)e=r[t]&af|r[t+1]&sf,r[t]=r[t+nf]^e>>>1^uf[e&of];for(i=ur-1;t<i;t++)e=r[t]&af|r[t+1]&sf,r[t]=r[t-n]^e>>>1^uf[e&of];return e=r[i]&af|r[0]&sf,r[i]=r[nf-1]^e>>>1^uf[e&of],r}function lzr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!YWr(r))throw new TypeError(Ar("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tf(r,"copy")&&(i.copy=r.copy,!ZWr(r.copy)))throw new TypeError(Ar("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(tf(r,"state")){if(t=r.state,i.state=!0,!PG(t))throw new TypeError(Ar("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=jG(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),Xi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(tf(r,"seed"))if(n=r.seed,i.seed=!0,FG(n)){if(n>BG)throw new RangeError(Ar("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if($Wr(n)===!1||n.length<1)throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!FG(n))throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>BG)throw new RangeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new Or(fa+a),e[0]=J0,e[1]=Y0,e[ht]=ur,e[yt]=1,e[yt+1]=ur,e[Sr]=a,Xi.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=kG(t,ur,rzr),t=vzr(t,ur,n,a)}else n=MG()>>>0}else n=MG()>>>0;return t===void 0&&(e=new Or(fa+1),e[0]=J0,e[1]=Y0,e[ht]=ur,e[yt]=1,e[yt+1]=ur,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=kG(t,ur,n)),Ee(h,"NAME","mt19937"),dt(h,"seed",o),dt(h,"seedLength",v),LG(h,"state",l,p),dt(h,"stateLength",f),dt(h,"byteLength",c),Ee(h,"toJSON",g),Ee(h,"MIN",0),Ee(h,"MAX",VG),Ee(h,"normalized",d),Ee(d,"NAME",h.NAME),dt(d,"seed",o),dt(d,"seedLength",v),LG(d,"state",l,p),dt(d,"stateLength",f),dt(d,"byteLength",c),Ee(d,"toJSON",g),Ee(d,"MIN",0),Ee(d,"MAX",fzr),h;function o(){var m=e[Sr];return Xi(m,n,1,new Or(m),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Xi(m,e,1,new Or(m),1)}function p(m){var y;if(!PG(m))throw new TypeError(Ar("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(y=jG(m,!1),y)throw y;i.copy===!1?i.state&&m.length===e.length?Xi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Or(m.length)),Xi(m.length,m,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=KWr(e),m.params=[],m}function h(){var m,y;return y=e[yt+1],y>=ur&&(t=czr(t),y=0),m=t[y],e[yt+1]=y+1,m^=m>>>11,m^=m<<7&nzr,m^=m<<15&azr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,y=h()>>>6;return(m*uzr+y)*UG}}GG.exports=lzr});var DG=s((iSe,xG)=>{"use strict";var pzr=vf(),gzr=ef(),mzr=pzr({seed:gzr()});xG.exports=mzr});var J=s((nSe,WG)=>{"use strict";var dzr=b(),HG=DG(),hzr=vf();dzr(HG,"factory",hzr);WG.exports=HG});var YG=s((aSe,JG)=>{"use strict";var zG=M().isPrimitive,cf=q(),XG=fr();function yzr(r,e){return!zG(r)||XG(r)?new TypeError(cf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!zG(e)||XG(e)?new TypeError(cf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(cf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}JG.exports=yzr});var ZG=s((sSe,$G)=>{"use strict";var qzr=D(),bzr=ri(),wzr=N0();function Ezr(r,e,t){return e+qzr(bzr(wzr*r()),2)*(t-e)}$G.exports=Ezr});var lf=s((uSe,ax)=>{"use strict";var Ne=b(),$0=L(),QG=B(),KG=T(),rx=I(),ex=S(),tx=_(),Nzr=C(),Z0=J().factory,ix=E(),Ozr=j(),Q0=q(),Szr=YG(),nx=ZG();function Azr(){var r,e,t,i,n,a;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(r=arguments[0],!KG(r))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ex(r,"prng")){if(!rx(r.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else{if(n=arguments[0],a=arguments[1],i=Szr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!KG(r))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ex(r,"prng")){if(!rx(r.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else e=Z0()}return n===void 0?t=h:t=g,Ne(t,"NAME","arcsine"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),QG(t,"state",tx(null),Nzr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",tx(null)),Ne(t,"PRNG",e)):($0(t,"seed",u),$0(t,"seedLength",o),QG(t,"state",c,l),$0(t,"stateLength",v),$0(t,"byteLength",f),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Ozr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return nx(e,n,a)}function h(d,m){return ix(d)||ix(m)||d>=m?NaN:nx(e,d,m)}}ax.exports=Azr});var ux=s((oSe,sx)=>{"use strict";var _zr=lf(),Tzr=_zr();sx.exports=Tzr});var vx=s((fSe,fx)=>{"use strict";var Izr=b(),ox=ux(),Rzr=lf();Izr(ox,"factory",Rzr);fx.exports=ox});var pf=s((vSe,dx)=>{"use strict";var Oe=b(),K0=L(),cx=B(),lx=T(),Lzr=_n().isPrimitive,px=I(),gx=S(),mx=_(),Pzr=C(),rs=J().factory,Fzr=E(),Mzr=j(),es=q();function Bzr(){var r,e,t,i;if(arguments.length===0)e=rs();else if(arguments.length===1&&lx(arguments[0]))if(r=arguments[0],gx(r,"prng")){if(!px(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r);else{if(i=arguments[0],!Lzr(i))throw new TypeError(es("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!lx(r))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gx(r,"prng")){if(!px(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r)}else e=rs()}return i===void 0?t=p:t=l,Oe(t,"NAME","bernoulli"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),cx(t,"state",mx(null),Pzr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",mx(null)),Oe(t,"PRNG",e)):(K0(t,"seed",n),K0(t,"seedLength",a),cx(t,"state",v,f),K0(t,"stateLength",u),K0(t,"byteLength",o),Oe(t,"toJSON",c),Oe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Mzr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return Fzr(g)||g<0||g>1?NaN:e()<=g?1:0}}dx.exports=Bzr});var yx=s((cSe,hx)=>{"use strict";var jzr=pf(),kzr=jzr();hx.exports=kzr});var wx=s((lSe,bx)=>{"use strict";var Czr=b(),qx=yx(),Vzr=pf();Czr(qx,"factory",Vzr);bx.exports=qx});var Sx=s((pSe,Ox)=>{"use strict";var Uzr=U(),Ex=sr(),Gzr=P(),Nx=.00991256303526217;function xzr(r,e){var t,i,n;for(i=Ex(-.5*e*e),t=[],t.push(Nx/i),t.push(e),n=2;n<r;n++)t[n]=Uzr(-2*Gzr(Nx/t[n-1]+i)),i=Ex(-.5*t[n]*t[n]);return t.push(0),t}Ox.exports=xzr});var _x=s((gSe,Ax)=>{"use strict";function Dzr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}Ax.exports=Dzr});var Rx=s((mSe,Ix)=>{"use strict";var Tx=P();function Hzr(r,e,t){var i,n;do i=Tx(r())/e,n=Tx(r());while(-2*n<i*i);return t?i-e:e-i}Ix.exports=Hzr});var Mx=s((dSe,Fx)=>{"use strict";var Wzr=Y(),Lx=sr(),zzr=Sx(),Xzr=_x(),Jzr=Rx(),Yzr=128,Px=3.442619855899,ni=zzr(Yzr,Px),$zr=Xzr(ni),Zzr=127;function Qzr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&Zzr,Wzr(o)<$zr[v])return o*ni[v];if(v===0)return Jzr(r,Px,o<0);if(u=o*ni[v],a=u*u,f=v+1,i=Lx(-.5*(ni[v]*ni[v]-a)),n=Lx(-.5*(ni[f]*ni[f]-a)),n+r()*(i-n)<1)return u}}}Fx.exports=Qzr});var mf=s((hSe,kx)=>{"use strict";var qt=b(),ts=L(),Bx=B(),Kzr=I(),rXr=T(),eXr=cr().isPrimitive,is=S(),tXr=ge(),gf=J().factory,jx=_(),iXr=C(),nXr=z(),aXr=vi(),sXr=j(),va=q(),uXr=Mx();function oXr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!rXr(r))throw new TypeError(va("invalid argument. Must provide an object. Value: `%s`.",r));if(is(r,"copy")&&(n.copy=r.copy,!eXr(r.copy)))throw new TypeError(va("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(is(r,"prng")){if(!Kzr(r.prng))throw new TypeError(va("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(is(r,"state")){if(n.state=r.state,!tXr(r.state))throw new TypeError(va("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(is(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(va("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=gf(n),e=t.normalized):(t=gf({seed:nXr(1+aXr*e()),copy:n.copy}),n.seed=null):(t=gf(n),e=t.normalized),i=uXr(e,t),qt(i,"NAME","improved-ziggurat"),n.seed===null?(qt(i,"seed",null),qt(i,"seedLength",null)):(ts(i,"seed",a),ts(i,"seedLength",u)),r&&r.prng?(Bx(i,"state",jx(null),iXr),qt(i,"stateLength",null),qt(i,"byteLength",null),qt(i,"toJSON",jx(null))):(Bx(i,"state",f,c),ts(i,"stateLength",o),ts(i,"byteLength",v),qt(i,"toJSON",l)),qt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=sXr(t.state),p.params=[],p}}kx.exports=oXr});var Vx=s((ySe,Cx)=>{"use strict";var fXr=mf(),vXr=fXr();Cx.exports=vXr});var bt=s((qSe,Gx)=>{"use strict";var cXr=b(),Ux=Vx(),lXr=mf();cXr(Ux,"factory",lXr);Gx.exports=Ux});var Dx=s((bSe,xx)=>{"use strict";var pXr=I(),gXr=pXr(Object.assign);xx.exports=gXr});var Wx=s((wSe,Hx)=>{"use strict";var mXr=Object.assign;Hx.exports=mXr});var Xx=s((ESe,zx)=>{"use strict";var dXr=typeof Object.getOwnPropertySymbols<"u";zx.exports=dXr});var $x=s((NSe,Yx)=>{"use strict";var Jx=Ii(),hXr=Jx.getOwnPropertySymbols;function yXr(r){return hXr(Jx(r))}Yx.exports=yXr});var Qx=s((OSe,Zx)=>{"use strict";function qXr(){return[]}Zx.exports=qXr});var rD=s((SSe,Kx)=>{"use strict";var bXr=Xx(),wXr=$x(),EXr=Qx(),df;bXr?df=wXr:df=EXr;Kx.exports=df});var tD=s((ASe,eD)=>{"use strict";var NXr=Pi(),OXr=rD(),SXr=In();function AXr(r){var e,t,i;for(e=NXr(r),t=OXr(r),i=0;i<t.length;i++)SXr(r,t[i])&&e.push(t[i]);return e}eD.exports=AXr});var nD=s((_Se,iD)=>{"use strict";var _Xr=tD();iD.exports=_Xr});var uD=s((TSe,sD)=>{"use strict";var TXr=nD(),aD=Ii(),IXr=q();function RXr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(IXr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=aD(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=TXr(aD(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}sD.exports=RXr});var ca=s((ISe,oD)=>{"use strict";var LXr=Dx(),PXr=Wx(),FXr=uD(),hf;LXr?hf=PXr:hf=FXr;oD.exports=hf});var lD=s((RSe,cD)=>{"use strict";var fD=W().isPrimitive,vD=q();function MXr(r,e){return fD(r)?fD(e)?null:new TypeError(vD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(vD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}cD.exports=MXr});var hD=s((LSe,dD)=>{"use strict";var pD=P(),gD=U(),BXr=D(),mD=1/3;function jXr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-mD,o=1/gD(9*v),c=BXr(r(),1/t)):(v=t-mD,o=1/gD(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+pD(p)),l=r(),(l<a||pD(l)<u)&&(i=!1)}return v*p*c}dD.exports=jXr});var bD=s((PSe,qD)=>{"use strict";var yf=D(),yD=P();function kXr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=yf(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=yf(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*yf(n/(8*t-8),2),v<c&&(c=a*yD(4*f*(1-f)),c+=u*u/2,c>=yD(v)&&(i=!1))));return f}qD.exports=kXr});var ED=s((FSe,wD)=>{"use strict";var CXr=D(),ns=P();function VXr(r,e,t,i){var n,a,u,o,v,f,c,l,p,g,h;for(o=t-1,v=i-1,f=o+v,c=f*ns(f),u=o/f,n=.5/CXr(f,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*ns(g/o),h+=v*ns((1-g)/v),h+=c+.5*l*l,h>=ns(p)&&(a=!1));return g}wD.exports=VXr});var SD=s((MSe,OD)=>{"use strict";var qf=sr(),ND=D(),bf=P();function UXr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=ND(u,1/e),f=ND(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=bf(u)/e,n=bf(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),qf(i-bf(qf(i)+qf(n))))}OD.exports=UXr});var TD=s((BSe,_D)=>{"use strict";var AD=hD(),GXr=bD(),xXr=ED(),DXr=SD();function HXr(r,e,t,i){var n,a;return t===i&&t>1.5?GXr(r,e,t):t>1&&i>1?xXr(r,e,t,i):t<1&&i<1?DXr(r,t,i):(n=AD(r,e,t),a=AD(r,e,i),n/(n+a))}_D.exports=HXr});var Of=s((jSe,CD)=>{"use strict";var Se=b(),as=L(),ID=B(),RD=T(),LD=cr().isPrimitive,PD=I(),Ji=S(),FD=_(),WXr=C(),MD=bt().factory,ss=J().factory,BD=E(),wf=mt(),Ef=pr(),Nf=ge(),jD=ca(),zXr=j(),Ae=q(),XXr=lD(),kD=TD();function JXr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=ss(n);else if(arguments.length===1){if(n=arguments[0],!RD(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ji(n,"copy")&&!LD(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ji(n,"prng")){if(!PD(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ji(n,"state")&&!Nf(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=jD({},n),n.copy===!1?o=!1:n.state&&(n.state=wf(n.state.length,n.state,1,new Ef(n.state.length),1)),n.copy=!1,a=ss(n)}}else{if(t=arguments[0],i=arguments[1],v=XXr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!RD(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ji(n,"copy")&&!LD(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ji(n,"prng")){if(!PD(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ji(n,"state")&&!Nf(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=jD({},n),n.copy===!1?o=!1:n.state&&(n.state=wf(n.state.length,n.state,1,new Ef(n.state.length),1)),n.copy=!1,a=ss(n)}}else n={copy:!1},a=ss(n)}return n&&n.prng?e=MD({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=MD({state:r,copy:!1})),t===void 0?u=y:u=m,Se(u,"NAME","beta"),n&&n.prng?(Se(u,"seed",null),Se(u,"seedLength",null),ID(u,"state",FD(null),WXr),Se(u,"stateLength",null),Se(u,"byteLength",null),Se(u,"toJSON",FD(null)),Se(u,"PRNG",a)):(as(u,"seed",f),as(u,"seedLength",c),ID(u,"state",g,h),as(u,"stateLength",l),as(u,"byteLength",p),Se(u,"toJSON",d),Se(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!Nf(N))throw new TypeError(Ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=wf(N.length,N,1,new Ef(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=zXr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return kD(a,e,t,i)}function y(N,O){return BD(N)||BD(O)||N<=0||O<=0?NaN:kD(a,e,N,O)}}CD.exports=JXr});var UD=s((kSe,VD)=>{"use strict";var YXr=Of(),$Xr=YXr();VD.exports=$Xr});var DD=s((CSe,xD)=>{"use strict";var ZXr=b(),GD=UD(),QXr=Of();ZXr(GD,"factory",QXr);xD.exports=GD});var XD=s((VSe,zD)=>{"use strict";var HD=W().isPrimitive,WD=q();function KXr(r,e){return HD(r)?HD(e)?null:new TypeError(WD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(WD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}zD.exports=KXr});var $D=s((USe,YD)=>{"use strict";var JD=P();function rJr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+JD(l)),c=r(),(c<o||JD(c)<v)&&(a=!1)}return 1/t*i*l}YD.exports=rJr});var If=s((GSe,sH)=>{"use strict";var _e=b(),us=L(),ZD=B(),QD=T(),Sf=ge(),KD=cr().isPrimitive,rH=I(),Yi=S(),eH=_(),eJr=C(),tH=bt().factory,os=J().factory,iH=E(),Af=U(),nH=D(),_f=mt(),Tf=pr(),tJr=j(),aH=ca(),Te=q(),iJr=XD(),fs=$D(),vs=1/3;function nJr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=os(n);else if(arguments.length===1){if(n=arguments[0],!QD(n))throw new TypeError(Te("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Yi(n,"copy")&&!KD(n.copy))throw new TypeError(Te("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Yi(n,"prng")){if(!rH(n.prng))throw new TypeError(Te("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Yi(n,"state")&&!Sf(n.state))throw new TypeError(Te("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=aH({},n),n.copy===!1?o=!1:n.state&&(n.state=_f(n.state.length,n.state,1,new Tf(n.state.length),1)),n.copy=!1,a=os(n)}}else{if(e=arguments[0],i=arguments[1],v=iJr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!QD(n))throw new TypeError(Te("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Yi(n,"copy")&&!KD(n.copy))throw new TypeError(Te("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Yi(n,"prng")){if(!rH(n.prng))throw new TypeError(Te("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Yi(n,"state")&&!Sf(n.state))throw new TypeError(Te("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=aH({},n),n.copy===!1?o=!1:n.state&&(n.state=_f(n.state.length,n.state,1,new Tf(n.state.length),1)),n.copy=!1,a=os(n)}}else n={copy:!1},a=os(n)}return n&&n.prng?t=tH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=tH({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-vs):(u=O,c=e+1-vs),f=1/Af(9*c)),_e(u,"NAME","gamma"),n&&n.prng?(_e(u,"seed",null),_e(u,"seedLength",null),ZD(u,"state",eH(null),eJr),_e(u,"stateLength",null),_e(u,"byteLength",null),_e(u,"toJSON",eH(null)),_e(u,"PRNG",a)):(us(u,"seed",l),us(u,"seedLength",p),ZD(u,"state",d,m),us(u,"stateLength",g),us(u,"byteLength",h),_e(u,"toJSON",y),_e(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(A){if(!Sf(A))throw new TypeError(Te("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));o&&(A=_f(A.length,A,1,new Tf(A.length),1)),a.state=A}function y(){var A={};return A.type="PRNG",A.name=u.NAME,A.state=tJr(a.state),e===void 0?A.params=[]:A.params=[e,i],A}function N(){return fs(a,t,i,c,f)}function O(){return fs(a,t,i,c,f)*nH(a(),1/e)}function F(A,H){var K,G;return iH(A)||iH(H)||A<=0||H<=0?NaN:A<1?(G=A+1-vs,K=1/Af(9*G),fs(a,t,H,G,K)*nH(a(),1/A)):(G=A-vs,K=1/Af(9*G),fs(a,t,H,G,K))}}sH.exports=nJr});var oH=s((xSe,uH)=>{"use strict";var aJr=If(),sJr=aJr();uH.exports=sJr});var $i=s((DSe,vH)=>{"use strict";var uJr=b(),fH=oH(),oJr=If();uJr(fH,"factory",oJr);vH.exports=fH});var gH=s((HSe,pH)=>{"use strict";var cH=W().isPrimitive,lH=q();function fJr(r,e){return cH(r)?cH(e)?null:new TypeError(lH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(lH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}pH.exports=fJr});var dH=s((WSe,mH)=>{"use strict";function vJr(r,e,t){return r(e,1)/r(t,1)}mH.exports=vJr});var Rf=s((zSe,NH)=>{"use strict";var wt=b(),cs=L(),hH=B(),yH=T(),qH=_(),cJr=C(),ls=$i().factory,bH=E(),lJr=j(),wH=q(),pJr=gH(),EH=dH();function gJr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=ls();else if(arguments.length===1){if(i=arguments[0],!yH(i))throw new TypeError(wH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=ls(i)}else{if(e=arguments[0],t=arguments[1],u=pJr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!yH(i))throw new TypeError(wH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=ls(i)}else r=ls()}return e===void 0?a=d:a=h,n=r.PRNG,wt(a,"NAME","betaprime"),i&&i.prng?(wt(a,"seed",null),wt(a,"seedLength",null),hH(a,"state",qH(null),cJr),wt(a,"stateLength",null),wt(a,"byteLength",null),wt(a,"toJSON",qH(null))):(cs(a,"seed",o),cs(a,"seedLength",v),hH(a,"state",l,p),cs(a,"stateLength",f),cs(a,"byteLength",c),wt(a,"toJSON",g)),wt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=lJr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return EH(r,e,t)}function d(m,y){return bH(m)||bH(y)||m<=0||y<=0?NaN:EH(r,m,y)}}NH.exports=gJr});var SH=s((XSe,OH)=>{"use strict";var mJr=Rf(),dJr=mJr();OH.exports=dJr});var TH=s((JSe,_H)=>{"use strict";var hJr=b(),AH=SH(),yJr=Rf();hJr(AH,"factory",yJr);_H.exports=AH});var RH=s((YSe,IH)=>{"use strict";var qJr=z();function bJr(r){return qJr(r)===r&&r>0}IH.exports=bJr});var Lf=s(($Se,LH)=>{"use strict";var wJr=RH();LH.exports=wJr});var FH=s((ZSe,PH)=>{"use strict";function EJr(r){return r>=0&&r<=1}PH.exports=EJr});var BH=s((QSe,MH)=>{"use strict";var NJr=FH();MH.exports=NJr});var CH=s((KSe,kH)=>{"use strict";var OJr=te().isPrimitive,SJr=_n().isPrimitive,jH=q();function AJr(r,e){return OJr(r)?SJr(e)?null:new TypeError(jH("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(jH("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}kH.exports=AJr});var UH=s((rAe,VH)=>{"use strict";function _Jr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}VH.exports=_Jr});var xH=s((eAe,GH)=>{"use strict";var TJr=E();function IJr(r){return r===0||TJr(r)?r:r<0?-1:1}GH.exports=IJr});var ps=s((tAe,DH)=>{"use strict";var RJr=xH();DH.exports=RJr});var WH=s((iAe,HH)=>{"use strict";var LJr=D(),PJr=1/12,FJr=1/360,MJr=1/1260;function BJr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=LJr(r,2),(PJr-(FJr-MJr/e)/e)/r}}HH.exports=BJr});var XH=s((nAe,zH)=>{"use strict";var Pf=z(),jJr=ps(),kJr=U(),Ff=Y(),gs=P(),ms=WH(),CJr=1/6;function VJr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K,G,Fr,Mr,or,Ct;for(H=Pf((e+1)*t),f=e-H+1,K=1-t,G=t/K,c=(e+1)*G,u=e*t*K,a=kJr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,y=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(H+.5)*gs((H+1)/(G*f)),O+=ms(H)+ms(e-H);;){if(or=r(),or<=n)return Mr=or/h-.43,G=Mr*(2*d/(.5-Ff(Mr))+m)+y,Pf(G);if(or>=h?Mr=r()-.5:(Mr=or/h-.93,Mr=jJr(Mr)*.5-Mr,or=h*r()),l=.5-Ff(Mr),A=Pf(Mr*(2*d/l+m)+y),!(A<0||A>e))if(or=or*i/(d/(l*l)+m),p=Ff(A-H),p>15){if(or=gs(or),o=p/u,v=(p/3+.625)*p,v+=CJr,v/=u,o*=v+.5,Fr=-(p*p)/(2*u),or<Fr-o||or<=Fr+o&&(g=e-A+1,Ct=O+(e+1)*gs(f/g),Ct+=(A+.5)*gs(g*G/(A+1)),Ct+=-(ms(A)+ms(e-A)),or<=Ct))return A}else{if(N=1,H<A)for(F=H;F<=A;F++)N*=c/F-G;else if(H>A)for(F=A;F<=H;F++)or*=c/F-G;if(or<=N)return A}}}zH.exports=VJr});var $H=s((aAe,YH)=>{"use strict";var UJr=UH(),GJr=XH();function JH(r,e,t){return t>.5?e-JH(r,e,1-t):e*t<10?UJr(r,e,t):GJr(r,e,t)}YH.exports=JH});var Mf=s((sAe,nW)=>{"use strict";var Ie=b(),ds=L(),ZH=B(),QH=T(),KH=I(),rW=S(),eW=_(),xJr=C(),tW=E(),DJr=Lf(),HJr=BH(),hs=J().factory,WJr=j(),ys=q(),zJr=CH(),iW=$H();function XJr(){var r,e,t,i,n,a;if(arguments.length===0)e=hs();else if(arguments.length===1){if(r=arguments[0],!QH(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rW(r,"prng")){if(!KH(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else{if(n=arguments[0],a=arguments[1],i=zJr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!QH(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rW(r,"prng")){if(!KH(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else e=hs()}return n===void 0?t=h:t=g,Ie(t,"NAME","binomial"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),ZH(t,"state",eW(null),xJr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",eW(null)),Ie(t,"PRNG",e)):(ds(t,"seed",u),ds(t,"seedLength",o),ZH(t,"state",c,l),ds(t,"stateLength",v),ds(t,"byteLength",f),Ie(t,"toJSON",p),Ie(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=WJr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return iW(e,n,a)}function h(d,m){return tW(d)||tW(m)||!DJr(d)||!HJr(m)?NaN:iW(e,d,m)}}nW.exports=XJr});var sW=s((uAe,aW)=>{"use strict";var JJr=Mf(),YJr=JJr();aW.exports=YJr});var fW=s((oAe,oW)=>{"use strict";var $Jr=b(),uW=sW(),ZJr=Mf();$Jr(uW,"factory",ZJr);oW.exports=uW});var cW=s((fAe,vW)=>{"use strict";var QJr=U(),KJr=P(),rYr=ri(),eYr=Kt(),tYr=ft();function iYr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=QJr(-2*KJr(n)),o=tYr*a,t=u*eYr(o),e=!1,u*rYr(o)}return e=!0,t}}vW.exports=iYr});var pW=s((vAe,lW)=>{"use strict";var nYr=U(),aYr=P(),sYr=Kt(),uYr=Vr(),oYr=sYr(uYr);function fYr(r){var e=nYr(-2*aYr(r));return e*oYr}lW.exports=fYr});var mW=s((cAe,gW)=>{"use strict";var vYr=U(),cYr=P(),lYr=Kt(),pYr=ft();function gYr(r){var e=vYr(-2*cYr(r)),t=pYr*r;return e*lYr(t)}gW.exports=gYr});var Bf=s((lAe,qW)=>{"use strict";var Dr=b(),qs=L(),dW=B(),mYr=T(),dYr=I(),hYr=cr().isPrimitive,la=S(),yYr=ge(),hW=J().factory,yW=_(),qYr=C(),bYr=j(),pa=q(),wYr=cW(),EYr=pW(),NYr=mW();function OYr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!mYr(r))throw new TypeError(pa("invalid argument. Must provide an object. Value: `%s`.",r));if(la(r,"copy")&&(n.copy=r.copy,!hYr(r.copy)))throw new TypeError(pa("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(la(r,"prng")){if(!dYr(r.prng))throw new TypeError(pa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(la(r,"state")){if(n.state=r.state,!yYr(r.state))throw new TypeError(pa("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(la(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(pa("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=hW(n),e=i.normalized):n.seed=null:(i=hW(n),e=i.normalized),t=wYr(e),Dr(t,"NAME","box-muller"),n.seed===null?(Dr(t,"seed",null),Dr(t,"seedLength",null)):(qs(t,"seed",a),qs(t,"seedLength",u)),r&&r.prng?(dW(t,"state",yW(null),qYr),Dr(t,"stateLength",null),Dr(t,"byteLength",null),Dr(t,"toJSON",yW(null))):(dW(t,"state",f,c),qs(t,"stateLength",o),qs(t,"byteLength",v),Dr(t,"toJSON",l)),Dr(t,"PRNG",e),la(e,"MIN")?(Dr(t,"MIN",EYr(e.MIN)),Dr(t,"MAX",NYr(e.MIN))):(Dr(t,"MIN",null),Dr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=bYr(i.state),p.params=[],p}}qW.exports=OYr});var wW=s((pAe,bW)=>{"use strict";var SYr=Bf(),AYr=SYr();bW.exports=AYr});var OW=s((gAe,NW)=>{"use strict";var _Yr=b(),EW=wW(),TYr=Bf();_Yr(EW,"factory",TYr);NW.exports=EW});var _W=s((mAe,AW)=>{"use strict";var IYr=M().isPrimitive,RYr=W().isPrimitive,SW=q(),LYr=fr();function PYr(r,e){return!IYr(r)||LYr(r)?new TypeError(SW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):RYr(e)?null:new TypeError(SW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}AW.exports=PYr});var IW=s((dAe,TW)=>{"use strict";function FYr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}TW.exports=FYr});var LW=s((hAe,RW)=>{"use strict";function MYr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}RW.exports=MYr});var MW=s((yAe,FW)=>{"use strict";var BYr=ar(),PW=de(),jYr=IW(),kYr=LW(),CYr=.7853981633974483,VYr=3061616997868383e-32,UYr=.3333333333333341,GYr=2147483647;function xYr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=BYr(r),n=i&GYr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=CYr-r,c=VYr-e,r=l+c,e=0),l=r*r,c=l*l,u=jYr(c),f=l*kYr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=UYr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=PW(c,0),f=u-(l-r),a=-1/c,v=PW(a,0),o=1+v*l,v+a*(o+v*f))}FW.exports=xYr});var jW=s((qAe,BW)=>{"use strict";var DYr=MW();BW.exports=DYr});var VW=s((bAe,CW)=>{"use strict";var HYr=ar(),kW=jW(),WYr=Dn(),jf=[0,0],zYr=2147483647,XYr=1072243195,JYr=2146435072,YYr=1044381696;function $Yr(r){var e,t;return e=HYr(r),e&=zYr,e<=XYr?e<YYr?r:kW(r,0,1):e>=JYr?NaN:(t=WYr(r,jf),kW(jf[0],jf[1],1-((t&1)<<1)))}CW.exports=$Yr});var kf=s((wAe,UW)=>{"use strict";var ZYr=VW();UW.exports=ZYr});var xW=s((EAe,GW)=>{"use strict";var QYr=kf(),KYr=Vr();function r$r(r,e,t){return e+t*QYr(KYr*(r()-.5))}GW.exports=r$r});var Cf=s((NAe,$W)=>{"use strict";var Et=b(),bs=L(),DW=B(),HW=T(),WW=I(),zW=S(),XW=_(),e$r=C(),JW=E(),Zi=bt().factory,t$r=j(),ws=q(),i$r=_W(),YW=xW();function n$r(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zi();else if(arguments.length===1){if(t=arguments[0],!HW(t))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zW(t,"prng")){if(!WW(t.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else{if(u=arguments[0],r=arguments[1],a=i$r(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!HW(t))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zW(t,"prng")){if(!WW(t.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else e=Zi()}return u===void 0?n=d:n=h,i=e.PRNG,Et(n,"NAME","cauchy"),t&&t.prng?(Et(n,"seed",null),Et(n,"seedLength",null),DW(n,"state",XW(null),e$r),Et(n,"stateLength",null),Et(n,"byteLength",null),Et(n,"toJSON",XW(null))):(bs(n,"seed",o),bs(n,"seedLength",v),DW(n,"state",l,p),bs(n,"stateLength",f),bs(n,"byteLength",c),Et(n,"toJSON",g)),Et(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=t$r(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return YW(e,u,r)}function d(m,y){return JW(m)||JW(y)||y<=0?NaN:YW(e,m,y)}}$W.exports=n$r});var QW=s((OAe,ZW)=>{"use strict";var a$r=Cf(),s$r=a$r();ZW.exports=s$r});var ez=s((SAe,rz)=>{"use strict";var u$r=b(),KW=QW(),o$r=Cf();u$r(KW,"factory",o$r);rz.exports=KW});var Vf=s((AAe,uz)=>{"use strict";var Nt=b(),Es=L(),tz=B(),f$r=W().isPrimitive,iz=T(),nz=I(),az=S(),sz=_(),v$r=C(),c$r=E(),Qi=$i().factory,l$r=j(),Ns=q();function p$r(){var r,e,t,i,n;if(arguments.length===0)r=Qi();else if(arguments.length===1&&iz(arguments[0]))if(t=arguments[0],az(t,"prng")){if(!nz(t.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Qi({prng:t.prng})}else r=Qi(t);else{if(n=arguments[0],!f$r(n))throw new TypeError(Ns("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!iz(t))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",t));if(az(t,"prng")){if(!nz(t.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Qi(n/2,.5,{prng:t.prng})}else r=Qi(n/2,.5,t)}else r=Qi(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,Nt(i,"NAME","chisquare"),t&&t.prng?(Nt(i,"seed",null),Nt(i,"seedLength",null),tz(i,"state",sz(null),v$r),Nt(i,"stateLength",null),Nt(i,"byteLength",null),Nt(i,"toJSON",sz(null))):(Es(i,"seed",a),Es(i,"seedLength",u),tz(i,"state",f,c),Es(i,"stateLength",o),Es(i,"byteLength",v),Nt(i,"toJSON",l)),Nt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=l$r(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return c$r(h)||h<=0?NaN:r(h/2,.5)}}uz.exports=p$r});var fz=s((_Ae,oz)=>{"use strict";var g$r=Vf(),m$r=g$r();oz.exports=m$r});var ga=s((TAe,cz)=>{"use strict";var d$r=b(),vz=fz(),h$r=Vf();d$r(vz,"factory",h$r);cz.exports=vz});var Uf=s((IAe,yz)=>{"use strict";var Ot=b(),Os=L(),lz=B(),y$r=W().isPrimitive,pz=T(),gz=I(),mz=S(),dz=_(),q$r=C(),b$r=E(),Ki=ga().factory,w$r=j(),hz=U(),Ss=q();function E$r(){var r,e,t,i,n;if(arguments.length===0)r=Ki();else if(arguments.length===1&&pz(arguments[0]))if(t=arguments[0],mz(t,"prng")){if(!gz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ki({prng:t.prng})}else r=Ki(t);else{if(n=arguments[0],!y$r(n))throw new TypeError(Ss("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!pz(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mz(t,"prng")){if(!gz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ki(n,{prng:t.prng})}else r=Ki(n,t)}else r=Ki(n)}return n===void 0?i=g:i=p,e=r.PRNG,Ot(i,"NAME","chi"),t&&t.prng?(Ot(i,"seed",null),Ot(i,"seedLength",null),lz(i,"state",dz(null),q$r),Ot(i,"stateLength",null),Ot(i,"byteLength",null),Ot(i,"toJSON",dz(null))):(Os(i,"seed",a),Os(i,"seedLength",u),lz(i,"state",f,c),Os(i,"stateLength",o),Os(i,"byteLength",v),Ot(i,"toJSON",l)),Ot(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=w$r(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return hz(r())}function g(h){return b$r(h)||h<=0?NaN:hz(r(h))}}yz.exports=E$r});var bz=s((RAe,qz)=>{"use strict";var N$r=Uf(),O$r=N$r();qz.exports=O$r});var Nz=s((LAe,Ez)=>{"use strict";var S$r=b(),wz=bz(),A$r=Uf();S$r(wz,"factory",A$r);Ez.exports=wz});var Az=s((PAe,Sz)=>{"use strict";var _$r=M().isPrimitive,T$r=W().isPrimitive,Oz=q(),I$r=fr();function R$r(r,e){return!_$r(r)||I$r(r)?new TypeError(Oz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):T$r(e)?null:new TypeError(Oz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Sz.exports=R$r});var Tz=s((FAe,_z)=>{"use strict";var Gf=E(),L$r=Zn(),P$r=Vr();function F$r(r,e,t){var i;return Gf(r)||Gf(e)||Gf(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+L$r(i)/P$r)/2)}_z.exports=F$r});var Lz=s((MAe,Rz)=>{"use strict";var Iz=E();function M$r(r,e){return Iz(r)||Iz(e)?NaN:r<e?0:1}Rz.exports=M$r});var Mz=s((BAe,Fz)=>{"use strict";var B$r=_(),Pz=E();function j$r(r){if(Pz(r))return B$r(NaN);return e;function e(t){return Pz(t)?NaN:t<r?0:1}}Fz.exports=j$r});var As=s((jAe,jz)=>{"use strict";var k$r=b(),Bz=Lz(),C$r=Mz();k$r(Bz,"factory",C$r);jz.exports=Bz});var Cz=s((kAe,kz)=>{"use strict";var V$r=_(),U$r=As().factory,xf=E(),G$r=Zn(),x$r=Vr();function D$r(r,e){if(xf(r)||xf(e)||e<0)return V$r(NaN);if(e===0)return U$r(r);return t;function t(i){var n;return xf(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+G$r(n)/x$r)/2)}}kz.exports=D$r});var Gz=s((CAe,Uz)=>{"use strict";var H$r=b(),Vz=Tz(),W$r=Cz();H$r(Vz,"factory",W$r);Uz.exports=Vz});var Df=s((VAe,xz)=>{"use strict";var z$r=Gz(),X$r=1e4,J$r=1e-12;function Y$r(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<X$r;){if(u=(i+n)/2,n-i<J$r)return u;a=z$r(u,e,t),r>a?i=u:n=u,o+=1}return u}xz.exports=Y$r});var Hz=s((UAe,Dz)=>{"use strict";var Hf=E(),$$r=Df();function Z$r(r,e,t){return Hf(e)||Hf(t)||Hf(r)||t<0||r<0||r>1?NaN:t===0?e:$$r(r,e,t)}Dz.exports=Z$r});var zz=s((GAe,Wz)=>{"use strict";var Q$r=E();function K$r(r,e){return Q$r(r)||r<0||r>1?NaN:e}Wz.exports=K$r});var Yz=s((xAe,Jz)=>{"use strict";var rZr=_(),Xz=E();function eZr(r){if(Xz(r))return rZr(NaN);return e;function e(t){return Xz(t)||t<0||t>1?NaN:r}}Jz.exports=eZr});var Wf=s((DAe,Zz)=>{"use strict";var tZr=b(),$z=zz(),iZr=Yz();tZr($z,"factory",iZr);Zz.exports=$z});var Kz=s((HAe,Qz)=>{"use strict";var nZr=_(),aZr=Wf().factory,zf=E(),sZr=Df();function uZr(r,e){if(zf(r)||zf(e)||e<0)return nZr(NaN);if(e===0)return aZr(r);return t;function t(i){return zf(i)||i<0||i>1?NaN:sZr(i,r,e)}}Qz.exports=uZr});var tX=s((WAe,eX)=>{"use strict";var oZr=b(),rX=Hz(),fZr=Kz();oZr(rX,"factory",fZr);eX.exports=rX});var nX=s((zAe,iX)=>{"use strict";var vZr=tX();function cZr(r,e,t){return vZr(r(),e,t)}iX.exports=cZr});var Xf=s((XAe,lX)=>{"use strict";var Re=b(),_s=L(),aX=B(),sX=T(),uX=I(),oX=S(),fX=_(),lZr=C(),Ts=J().factory,vX=E(),pZr=j(),Is=q(),gZr=Az(),cX=nX();function mZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ts();else if(arguments.length===1){if(r=arguments[0],!sX(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oX(r,"prng")){if(!uX(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else{if(n=arguments[0],a=arguments[1],i=gZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!sX(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oX(r,"prng")){if(!uX(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else e=Ts()}return n===void 0?t=h:t=g,Re(t,"NAME","cosine"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),aX(t,"state",fX(null),lZr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",fX(null)),Re(t,"PRNG",e)):(_s(t,"seed",u),_s(t,"seedLength",o),aX(t,"state",c,l),_s(t,"stateLength",v),_s(t,"byteLength",f),Re(t,"toJSON",p),Re(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=pZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return cX(e,n,a)}function h(d,m){return vX(d)||vX(m)||m<=0?NaN:cX(e,d,m)}}lX.exports=mZr});var gX=s((JAe,pX)=>{"use strict";var dZr=Xf(),hZr=dZr();pX.exports=hZr});var hX=s((YAe,dX)=>{"use strict";var yZr=b(),mX=gX(),qZr=Xf();yZr(mX,"factory",qZr);dX.exports=mX});var wX=s(($Ae,bX)=>{"use strict";var yX=gr().isPrimitive,Jf=q(),qX=fr();function bZr(r,e){return!yX(r)||qX(r)?new TypeError(Jf("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!yX(e)||qX(e)?new TypeError(Jf("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Jf("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}bX.exports=bZr});var OX=s((ZAe,NX)=>{"use strict";var Yf=Vi(),rn=z();function EX(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===Yf?(u=rn(a/(n+1)),a%(n+1)===n&&(u+=1)):u=rn((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=EX(r,0,rn(a/v)),!(l>Yf/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===Yf?(o=rn(n/(a+1)),n%(a+1)===a&&(o+=1)):o=rn((n+1)/(a+1));;)if(i=r()-f,i=rn(i/o),i<=a)return i+e}NX.exports=EX});var $f=s((QAe,PX)=>{"use strict";var Le=b(),Rs=L(),SX=B(),AX=T(),_X=I(),TX=S(),IX=_(),wZr=C(),Ls=J().factory,RX=E(),en=yr(),EZr=j(),St=q(),NZr=wX(),LX=OX();function OZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ls();else if(arguments.length===1){if(r=arguments[0],!AX(r))throw new TypeError(St("invalid argument. Options argument must be an object. Value: `%s`.",r));if(TX(r,"prng")){if(!_X(r.prng))throw new TypeError(St("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!en(e.MIN))throw new TypeError(St("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!en(e.MAX))throw new TypeError(St("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Ls(r)}else{if(n=arguments[0],a=arguments[1],i=NZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!AX(r))throw new TypeError(St("invalid argument. Options argument must be an object. Value: `%s`.",r));if(TX(r,"prng")){if(!_X(r.prng))throw new TypeError(St("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!en(e.MIN))throw new TypeError(St("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!en(e.MAX))throw new TypeError(St("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Ls(r)}else e=Ls()}return n===void 0?t=h:t=g,Le(t,"NAME","discrete-uniform"),r&&r.prng?(Le(t,"seed",null),Le(t,"seedLength",null),SX(t,"state",IX(null),wZr),Le(t,"stateLength",null),Le(t,"byteLength",null),Le(t,"toJSON",IX(null)),Le(t,"PRNG",e)):(Rs(t,"seed",u),Rs(t,"seedLength",o),SX(t,"state",c,l),Rs(t,"stateLength",v),Rs(t,"byteLength",f),Le(t,"toJSON",p),Le(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=EZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return LX(e,n,a)}function h(d,m){return RX(d)||RX(m)||!en(d)||!en(m)||d>m?NaN:LX(e,d,m)}}PX.exports=OZr});var MX=s((KAe,FX)=>{"use strict";var SZr=$f(),AZr=SZr();FX.exports=AZr});var kX=s((r_e,jX)=>{"use strict";var _Zr=b(),BX=MX(),TZr=$f();_Zr(BX,"factory",TZr);jX.exports=BX});var UX=s((e_e,VX)=>{"use strict";var IZr=W().isPrimitive,RZr=te().isPrimitive,CX=q();function LZr(r,e){return RZr(r)?IZr(e)?null:new TypeError(CX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(CX("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}VX.exports=LZr});var xX=s((t_e,GX)=>{"use strict";var PZr=P();function FZr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*PZr(i)}GX.exports=FZr});var Zf=s((i_e,$X)=>{"use strict";var Pe=b(),Ps=L(),DX=B(),HX=T(),WX=I(),zX=S(),XX=_(),MZr=C(),Fs=J().factory,JX=E(),BZr=Lf(),jZr=j(),Ms=q(),kZr=UX(),YX=xX();function CZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Fs();else if(arguments.length===1){if(t=arguments[0],!HX(t))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zX(t,"prng")){if(!WX(t.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Fs(t)}else{if(a=arguments[0],r=arguments[1],n=kZr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!HX(t))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zX(t,"prng")){if(!WX(t.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Fs(t)}else e=Fs()}return a===void 0?i=h:i=g,Pe(i,"NAME","erlang"),t&&t.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),DX(i,"state",XX(null),MZr),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",XX(null)),Pe(i,"PRNG",e)):(Ps(i,"seed",u),Ps(i,"seedLength",o),DX(i,"state",c,l),Ps(i,"stateLength",v),Ps(i,"byteLength",f),Pe(i,"toJSON",p),Pe(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=jZr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return YX(e,a,r)}function h(d,m){return JX(d)||JX(m)||!BZr(d)||m<=0?NaN:YX(e,d,m)}}$X.exports=CZr});var QX=s((n_e,ZX)=>{"use strict";var VZr=Zf(),UZr=VZr();ZX.exports=UZr});var eJ=s((a_e,rJ)=>{"use strict";var GZr=b(),KX=QX(),xZr=Zf();GZr(KX,"factory",xZr);rJ.exports=KX});var iJ=s((s_e,tJ)=>{"use strict";var DZr=P();function HZr(r,e){return-DZr(1-r())/e}tJ.exports=HZr});var Qf=s((u_e,vJ)=>{"use strict";var Fe=b(),Bs=L(),nJ=B(),WZr=W().isPrimitive,aJ=T(),sJ=I(),uJ=S(),oJ=_(),zZr=C(),js=J().factory,XZr=E(),JZr=j(),ks=q(),fJ=iJ();function YZr(){var r,e,t,i;if(arguments.length===0)t=js();else if(arguments.length===1&&aJ(arguments[0]))if(e=arguments[0],uJ(e,"prng")){if(!sJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e);else{if(r=arguments[0],!WZr(r))throw new TypeError(ks("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!aJ(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(uJ(e,"prng")){if(!sJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e)}else t=js()}return r===void 0?i=p:i=l,Fe(i,"NAME","exponential"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),nJ(i,"state",oJ(null),zZr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",oJ(null)),Fe(i,"PRNG",t)):(Bs(i,"seed",n),Bs(i,"seedLength",a),nJ(i,"state",v,f),Bs(i,"stateLength",u),Bs(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=JZr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return fJ(t,r)}function p(g){return XZr(g)||g<=0?NaN:fJ(t,g)}}vJ.exports=YZr});var lJ=s((o_e,cJ)=>{"use strict";var $Zr=Qf(),ZZr=$Zr();cJ.exports=ZZr});var mJ=s((f_e,gJ)=>{"use strict";var QZr=b(),pJ=lJ(),KZr=Qf();QZr(pJ,"factory",KZr);gJ.exports=pJ});var qJ=s((v_e,yJ)=>{"use strict";var dJ=W().isPrimitive,hJ=q();function rQr(r,e){return dJ(r)?dJ(e)?null:new TypeError(hJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(hJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}yJ.exports=rQr});var wJ=s((c_e,bJ)=>{"use strict";function eQr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}bJ.exports=eQr});var Kf=s((l_e,IJ)=>{"use strict";var At=b(),Cs=L(),EJ=B(),NJ=T(),OJ=I(),SJ=S(),AJ=_(),tQr=C(),tn=ga().factory,_J=E(),iQr=j(),Vs=q(),nQr=qJ(),TJ=wJ();function aQr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=tn();else if(arguments.length===1){if(e=arguments[0],!NJ(e))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SJ(e,"prng")){if(!OJ(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=tn({prng:e.prng})}else r=tn(e)}else{if(a=arguments[0],u=arguments[1],n=nQr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!NJ(e))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SJ(e,"prng")){if(!OJ(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=tn({prng:e.prng})}else r=tn(e)}else r=tn()}return a===void 0?i=d:i=h,t=r.PRNG,At(i,"NAME","f"),e&&e.prng?(At(i,"seed",null),At(i,"seedLength",null),EJ(i,"state",AJ(null),tQr),At(i,"stateLength",null),At(i,"byteLength",null),At(i,"toJSON",AJ(null))):(Cs(i,"seed",o),Cs(i,"seedLength",v),EJ(i,"state",l,p),Cs(i,"stateLength",f),Cs(i,"byteLength",c),At(i,"toJSON",g)),At(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=iQr(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return TJ(r,a,u)}function d(m,y){return _J(m)||_J(y)||m<=0||y<=0?NaN:TJ(r,m,y)}}IJ.exports=aQr});var LJ=s((p_e,RJ)=>{"use strict";var sQr=Kf(),uQr=sQr();RJ.exports=uQr});var MJ=s((g_e,FJ)=>{"use strict";var oQr=b(),PJ=LJ(),fQr=Kf();oQr(PJ,"factory",fQr);FJ.exports=PJ});var kJ=s((m_e,jJ)=>{"use strict";var BJ=W().isPrimitive,vQr=M().isPrimitive,rv=fr(),ev=q();function cQr(r,e,t){return!BJ(r)||rv(r)?new TypeError(ev("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!BJ(e)||rv(e)?new TypeError(ev("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!vQr(t)||rv(t)?new TypeError(ev("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}jJ.exports=cQr});var VJ=s((d_e,CJ)=>{"use strict";var lQr=D(),pQr=P();function gQr(r,e,t,i){return i+t*lQr(-pQr(r()),-1/e)}CJ.exports=gQr});var iv=s((h_e,zJ)=>{"use strict";var Me=b(),Us=L(),UJ=B(),GJ=T(),xJ=I(),DJ=S(),HJ=_(),mQr=C(),Gs=J().factory,tv=E(),dQr=j(),xs=q(),hQr=kJ(),WJ=VJ();function yQr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=Gs();else if(arguments.length===1){if(e=arguments[0],!GJ(e))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(DJ(e,"prng")){if(!xJ(e.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=hQr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!GJ(e))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(DJ(e,"prng")){if(!xJ(e.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e)}else t=Gs()}return r===void 0?i=d:i=h,Me(i,"NAME","frechet"),e&&e.prng?(Me(i,"seed",null),Me(i,"seedLength",null),UJ(i,"state",HJ(null),mQr),Me(i,"stateLength",null),Me(i,"byteLength",null),Me(i,"toJSON",HJ(null)),Me(i,"PRNG",t)):(Us(i,"seed",o),Us(i,"seedLength",v),UJ(i,"state",l,p),Us(i,"stateLength",f),Us(i,"byteLength",c),Me(i,"toJSON",g),Me(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=dQr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return WJ(t,r,a,u)}function d(m,y,N){return tv(m)||tv(y)||tv(N)||m<=0||y<=0?NaN:WJ(t,m,y,N)}}zJ.exports=yQr});var JJ=s((y_e,XJ)=>{"use strict";var qQr=iv(),bQr=qQr();XJ.exports=bQr});var ZJ=s((q_e,$J)=>{"use strict";var wQr=b(),YJ=JJ(),EQr=iv();wQr(YJ,"factory",EQr);$J.exports=YJ});var rY=s((b_e,KJ)=>{"use strict";var NQr=z(),QJ=P();function OQr(r,e){var t=r();return t===0&&(t=r()),NQr(QJ(t)/QJ(1-e))}KJ.exports=OQr});var nv=s((w_e,uY)=>{"use strict";var Be=b(),Ds=L(),eY=B(),tY=T(),SQr=_n().isPrimitive,iY=I(),nY=S(),aY=_(),AQr=C(),Hs=J().factory,_Qr=E(),TQr=j(),Ws=q(),sY=rY();function IQr(){var r,e,t,i;if(arguments.length===0)e=Hs();else if(arguments.length===1&&tY(arguments[0]))if(r=arguments[0],nY(r,"prng")){if(!iY(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r);else{if(i=arguments[0],!SQr(i))throw new TypeError(Ws("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!tY(r))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nY(r,"prng")){if(!iY(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r)}else e=Hs()}return i===void 0?t=p:t=l,Be(t,"NAME","geometric"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),eY(t,"state",aY(null),AQr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",aY(null)),Be(t,"PRNG",e)):(Ds(t,"seed",n),Ds(t,"seedLength",a),eY(t,"state",v,f),Ds(t,"stateLength",u),Ds(t,"byteLength",o),Be(t,"toJSON",c),Be(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=TQr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return sY(e,i)}function p(g){return _Qr(g)||g<0||g>1?NaN:sY(e,g)}}uY.exports=IQr});var fY=s((E_e,oY)=>{"use strict";var RQr=nv(),LQr=RQr();oY.exports=LQr});var lY=s((N_e,cY)=>{"use strict";var PQr=b(),vY=fY(),FQr=nv();PQr(vY,"factory",FQr);cY.exports=vY});var mY=s((O_e,gY)=>{"use strict";var MQr=M().isPrimitive,BQr=W().isPrimitive,pY=q(),jQr=fr();function kQr(r,e){return!MQr(r)||jQr(r)?new TypeError(pY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):BQr(e)?null:new TypeError(pY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}gY.exports=kQr});var yY=s((S_e,hY)=>{"use strict";var dY=P();function CQr(r,e,t){return e-t*dY(-dY(r()))}hY.exports=CQr});var av=s((A_e,AY)=>{"use strict";var je=b(),zs=L(),qY=B(),bY=T(),wY=I(),EY=S(),NY=_(),VQr=C(),Xs=J().factory,OY=E(),UQr=j(),Js=q(),GQr=mY(),SY=yY();function xQr(){var r,e,t,i,n,a;if(arguments.length===0)t=Xs();else if(arguments.length===1){if(e=arguments[0],!bY(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(EY(e,"prng")){if(!wY(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else{if(a=arguments[0],r=arguments[1],n=GQr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!bY(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(EY(e,"prng")){if(!wY(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else t=Xs()}return a===void 0?i=h:i=g,je(i,"NAME","gumbel"),e&&e.prng?(je(i,"seed",null),je(i,"seedLength",null),qY(i,"state",NY(null),VQr),je(i,"stateLength",null),je(i,"byteLength",null),je(i,"toJSON",NY(null)),je(i,"PRNG",t)):(zs(i,"seed",u),zs(i,"seedLength",o),qY(i,"state",c,l),zs(i,"stateLength",v),zs(i,"byteLength",f),je(i,"toJSON",p),je(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=UQr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return SY(t,a,r)}function h(d,m){return OY(d)||OY(m)||m<=0?NaN:SY(t,d,m)}}AY.exports=xQr});var TY=s((__e,_Y)=>{"use strict";var DQr=av(),HQr=DQr();_Y.exports=HQr});var LY=s((T_e,RY)=>{"use strict";var WQr=b(),IY=TY(),zQr=av();WQr(IY,"factory",zQr);RY.exports=IY});var FY=s((I_e,PY)=>{"use strict";var sv=hr().isPrimitive,ma=q();function XQr(r,e,t){return sv(r)?sv(e)?sv(t)?t>r?new RangeError(ma("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(ma("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(ma("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(ma("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(ma("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}PY.exports=XQr});var MY=s((R_e,JQr)=>{JQr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var jY=s((L_e,BY)=>{"use strict";var YQr=E(),$Qr=yr(),ZQr=Gi(),QQr=R(),KQr=MY(),rKr=170;function eKr(r){return YQr(r)?NaN:$Qr(r)?r<0?NaN:r<=rKr?KQr[r]:QQr:ZQr(r+1)}BY.exports=eKr});var CY=s((P_e,kY)=>{"use strict";var tKr=jY();kY.exports=tKr});var UY=s((F_e,VY)=>{"use strict";var _t=CY();function iKr(r,e,t,i){var n,a,u;for(i<t?(n=_t(t)*_t(e+t-i)/(_t(e+t)*_t(t-i)),u=0):(n=_t(e)*_t(i)/(_t(i-t)*_t(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}VY.exports=iKr});var xY=s((M_e,GY)=>{"use strict";var Ys=UY();function nKr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=Ys(r,n,a,u),t-o):(a=t,n=e-t,o=Ys(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=Ys(r,n,a,u),o):(n=e-t,a=t,o=Ys(r,n,a,u),i-o))}GY.exports=nKr});var ov=s((B_e,$Y)=>{"use strict";var ke=b(),$s=L(),DY=B(),HY=T(),WY=I(),zY=S(),XY=_(),aKr=C(),Zs=J().factory,uv=X2(),JY=R(),sKr=j(),Qs=q(),uKr=FY(),YY=xY();function oKr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zs();else if(arguments.length===1){if(r=arguments[0],!HY(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zY(r,"prng")){if(!WY(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=uKr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!HY(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zY(r,"prng")){if(!WY(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else e=Zs()}return n===void 0?t=d:t=h,ke(t,"NAME","hypergeometric"),r&&r.prng?(ke(t,"seed",null),ke(t,"seedLength",null),DY(t,"state",XY(null),aKr),ke(t,"stateLength",null),ke(t,"byteLength",null),ke(t,"toJSON",XY(null)),ke(t,"PRNG",e)):($s(t,"seed",o),$s(t,"seedLength",v),DY(t,"state",l,p),$s(t,"stateLength",f),$s(t,"byteLength",c),ke(t,"toJSON",g),ke(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=sKr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return YY(e,n,a,u)}function d(m,y,N){return m===JY||y===JY||!uv(m)||!uv(y)||!uv(N)||N>m?NaN:YY(e,m,y,N)}}$Y.exports=oKr});var QY=s((j_e,ZY)=>{"use strict";var fKr=ov(),vKr=fKr();ZY.exports=vKr});var e$=s((k_e,r$)=>{"use strict";var cKr=b(),KY=QY(),lKr=ov();cKr(KY,"factory",lKr);r$.exports=KY});var a$=s((C_e,n$)=>{"use strict";var t$=W().isPrimitive,i$=q();function pKr(r,e){return t$(r)?t$(e)?null:new TypeError(i$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(i$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}n$.exports=pKr});var fv=s((V_e,l$)=>{"use strict";var Tt=b(),Ks=L(),s$=B(),u$=T(),o$=I(),f$=S(),v$=_(),gKr=C(),nn=$i().factory,c$=E(),mKr=j(),ru=q(),dKr=a$();function hKr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=nn();else if(arguments.length===1){if(i=arguments[0],!u$(i))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",i));if(f$(i,"prng")){if(!o$(i.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=nn({prng:i.prng})}else r=nn(i)}else{if(e=arguments[0],t=arguments[1],u=dKr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!u$(i))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",i));if(f$(i,"prng")){if(!o$(i.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=nn(e,t,{prng:i.prng})}else r=nn(e,t,i)}else r=nn(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,Tt(a,"NAME","invgamma"),i&&i.prng?(Tt(a,"seed",null),Tt(a,"seedLength",null),s$(a,"state",v$(null),gKr),Tt(a,"stateLength",null),Tt(a,"byteLength",null),Tt(a,"toJSON",v$(null))):(Ks(a,"seed",o),Ks(a,"seedLength",v),s$(a,"state",l,p),Ks(a,"stateLength",f),Ks(a,"byteLength",c),Tt(a,"toJSON",g)),Tt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=mKr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,y){return c$(m)||c$(y)||m<=0||y<=0?NaN:1/r(m,y)}}l$.exports=hKr});var g$=s((U_e,p$)=>{"use strict";var yKr=fv(),qKr=yKr();p$.exports=qKr});var h$=s((G_e,d$)=>{"use strict";var bKr=b(),m$=g$(),wKr=fv();bKr(m$,"factory",wKr);d$.exports=m$});var w$=s((x_e,b$)=>{"use strict";var y$=W().isPrimitive,q$=q();function EKr(r,e){return y$(r)?y$(e)?null:new TypeError(q$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(q$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}b$.exports=EKr});var O$=s((D_e,N$)=>{"use strict";var E$=D();function NKr(r,e,t){var i=r();return E$(1-E$(1-i,1/t),1/e)}N$.exports=NKr});var vv=s((H_e,P$)=>{"use strict";var Ce=b(),eu=L(),S$=B(),A$=T(),_$=I(),T$=S(),I$=_(),OKr=C(),tu=J().factory,R$=E(),SKr=j(),iu=q(),AKr=w$(),L$=O$();function _Kr(){var r,e,t,i,n,a;if(arguments.length===0)e=tu();else if(arguments.length===1){if(r=arguments[0],!A$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(T$(r,"prng")){if(!_$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else{if(n=arguments[0],a=arguments[1],i=AKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!A$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(T$(r,"prng")){if(!_$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else e=tu()}return n===void 0?t=h:t=g,Ce(t,"NAME","kumaraswamy"),r&&r.prng?(Ce(t,"seed",null),Ce(t,"seedLength",null),S$(t,"state",I$(null),OKr),Ce(t,"stateLength",null),Ce(t,"byteLength",null),Ce(t,"toJSON",I$(null)),Ce(t,"PRNG",e)):(eu(t,"seed",u),eu(t,"seedLength",o),S$(t,"state",c,l),eu(t,"stateLength",v),eu(t,"byteLength",f),Ce(t,"toJSON",p),Ce(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=SKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return L$(e,n,a)}function h(d,m){return R$(d)||R$(m)||d<=0||m<=0?NaN:L$(e,d,m)}}P$.exports=_Kr});var M$=s((W_e,F$)=>{"use strict";var TKr=vv(),IKr=TKr();F$.exports=IKr});var k$=s((z_e,j$)=>{"use strict";var RKr=b(),B$=M$(),LKr=vv();RKr(B$,"factory",LKr);j$.exports=B$});var U$=s((X_e,V$)=>{"use strict";var PKr=M().isPrimitive,FKr=W().isPrimitive,C$=q(),MKr=fr();function BKr(r,e){return!PKr(r)||MKr(r)?new TypeError(C$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):FKr(e)?null:new TypeError(C$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}V$.exports=BKr});var x$=s((J_e,G$)=>{"use strict";var jKr=ps(),kKr=Y(),CKr=P();function VKr(r,e,t){var i=r()-.5;return e-t*jKr(i)*CKr(1-2*kKr(i))}G$.exports=VKr});var cv=s((Y_e,$$)=>{"use strict";var Ve=b(),nu=L(),D$=B(),H$=T(),W$=I(),z$=S(),X$=_(),UKr=C(),au=J().factory,J$=E(),GKr=j(),su=q(),xKr=U$(),Y$=x$();function DKr(){var r,e,t,i,n,a;if(arguments.length===0)e=au();else if(arguments.length===1){if(r=arguments[0],!H$(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(z$(r,"prng")){if(!W$(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else{if(n=arguments[0],a=arguments[1],i=xKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!H$(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(z$(r,"prng")){if(!W$(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else e=au()}return n===void 0?t=h:t=g,Ve(t,"NAME","laplace"),r&&r.prng?(Ve(t,"seed",null),Ve(t,"seedLength",null),D$(t,"state",X$(null),UKr),Ve(t,"stateLength",null),Ve(t,"byteLength",null),Ve(t,"toJSON",X$(null)),Ve(t,"PRNG",e)):(nu(t,"seed",u),nu(t,"seedLength",o),D$(t,"state",c,l),nu(t,"stateLength",v),nu(t,"byteLength",f),Ve(t,"toJSON",p),Ve(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=GKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Y$(e,n,a)}function h(d,m){return J$(d)||J$(m)||m<=0?NaN:Y$(e,d,m)}}$$.exports=DKr});var Q$=s(($_e,Z$)=>{"use strict";var HKr=cv(),WKr=HKr();Z$.exports=WKr});var eZ=s((Z_e,rZ)=>{"use strict";var zKr=b(),K$=Q$(),XKr=cv();zKr(K$,"factory",XKr);rZ.exports=K$});var nZ=s((Q_e,iZ)=>{"use strict";var JKr=M().isPrimitive,YKr=W().isPrimitive,tZ=q(),$Kr=fr();function ZKr(r,e){return!JKr(r)||$Kr(r)?new TypeError(tZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):YKr(e)?null:new TypeError(tZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iZ.exports=ZKr});var sZ=s((K_e,aZ)=>{"use strict";function QKr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}aZ.exports=QKr});var oZ=s((rTe,uZ)=>{"use strict";function KKr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}uZ.exports=KKr});var vZ=s((eTe,fZ)=>{"use strict";function rre(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}fZ.exports=rre});var lZ=s((tTe,cZ)=>{"use strict";function ere(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}cZ.exports=ere});var gZ=s((iTe,pZ)=>{"use strict";function tre(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}pZ.exports=tre});var yZ=s((nTe,hZ)=>{"use strict";var ire=E(),mZ=U(),dZ=P(),nre=R(),are=V(),sre=sZ(),ure=oZ(),ore=vZ(),fre=lZ(),vre=gZ(),cre=.08913147449493408,lre=2.249481201171875,pre=.807220458984375,gre=.9399557113647461,mre=.9836282730102539;function dre(r){var e,t,i,n,a,u;return ire(r)?NaN:r===1?nre:r===-1?are:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=sre(t),e*(a*cre+a*u)):n>=.25?(a=mZ(-2*dZ(n)),n-=.25,u=ure(n),e*(a/(lre+u))):(n=mZ(-dZ(n)),n<3?(i=n-1.125,u=ore(i),e*(pre*n+u*n)):n<6?(i=n-3,u=fre(i),e*(gre*n+u*n)):(i=n-6,u=vre(i),e*(mre*n+u*n))))}hZ.exports=dre});var lv=s((aTe,qZ)=>{"use strict";var hre=yZ();qZ.exports=hre});var wZ=s((sTe,bZ)=>{"use strict";var yre=lv(),pv=E(),qre=U();function bre(r,e,t){var i,n;return pv(e)||pv(t)||pv(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*qre(2),i+n*yre(2*r-1))}bZ.exports=bre});var NZ=s((uTe,EZ)=>{"use strict";var wre=_(),Ere=Wf().factory,Nre=lv(),gv=E(),Ore=U();function Sre(r,e){var t,i;if(gv(r)||gv(e)||e<0)return wre(NaN);return e===0&&Ere(r),t=r,i=e*Ore(2),n;function n(a){return gv(a)||a<0||a>1?NaN:t+i*Nre(2*a-1)}}EZ.exports=Sre});var mv=s((oTe,SZ)=>{"use strict";var Are=b(),OZ=wZ(),_re=NZ();Are(OZ,"factory",_re);SZ.exports=OZ});var _Z=s((fTe,AZ)=>{"use strict";var Tre=mv();function Ire(r,e,t){var i=Tre(1-r()/2,0,1);return e+t/(i*i)}AZ.exports=Ire});var dv=s((vTe,BZ)=>{"use strict";var Ue=b(),uu=L(),TZ=B(),IZ=T(),RZ=I(),LZ=S(),PZ=_(),Rre=C(),ou=J().factory,FZ=E(),Lre=j(),fu=q(),Pre=nZ(),MZ=_Z();function Fre(){var r,e,t,i,n,a;if(arguments.length===0)e=ou();else if(arguments.length===1){if(r=arguments[0],!IZ(r))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LZ(r,"prng")){if(!RZ(r.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else{if(n=arguments[0],a=arguments[1],i=Pre(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!IZ(r))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LZ(r,"prng")){if(!RZ(r.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else e=ou()}return n===void 0?t=h:t=g,Ue(t,"NAME","levy"),r&&r.prng?(Ue(t,"seed",null),Ue(t,"seedLength",null),TZ(t,"state",PZ(null),Rre),Ue(t,"stateLength",null),Ue(t,"byteLength",null),Ue(t,"toJSON",PZ(null)),Ue(t,"PRNG",e)):(uu(t,"seed",u),uu(t,"seedLength",o),TZ(t,"state",c,l),uu(t,"stateLength",v),uu(t,"byteLength",f),Ue(t,"toJSON",p),Ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Lre(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return MZ(e,n,a)}function h(d,m){return FZ(d)||FZ(m)||m<=0?NaN:MZ(e,d,m)}}BZ.exports=Fre});var kZ=s((cTe,jZ)=>{"use strict";var Mre=dv(),Bre=Mre();jZ.exports=Bre});var UZ=s((lTe,VZ)=>{"use strict";var jre=b(),CZ=kZ(),kre=dv();jre(CZ,"factory",kre);VZ.exports=CZ});var DZ=s((pTe,xZ)=>{"use strict";var Cre=M().isPrimitive,Vre=W().isPrimitive,Ure=fr(),GZ=q();function Gre(r,e){return!Cre(r)||Ure(r)?new TypeError(GZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Vre(e)?null:new TypeError(GZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}xZ.exports=Gre});var WZ=s((gTe,HZ)=>{"use strict";var xre=P();function Dre(r,e,t){var i=r();return e+t*xre(i/(1-i))}HZ.exports=Dre});var hv=s((mTe,KZ)=>{"use strict";var Ge=b(),vu=L(),zZ=B(),XZ=T(),JZ=I(),YZ=S(),$Z=_(),Hre=C(),cu=J().factory,ZZ=E(),Wre=j(),lu=q(),zre=DZ(),QZ=WZ();function Xre(){var r,e,t,i,n,a;if(arguments.length===0)e=cu();else if(arguments.length===1){if(r=arguments[0],!XZ(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(YZ(r,"prng")){if(!JZ(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else{if(n=arguments[0],a=arguments[1],i=zre(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!XZ(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(YZ(r,"prng")){if(!JZ(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else e=cu()}return n===void 0?t=h:t=g,Ge(t,"NAME","logistic"),r&&r.prng?(Ge(t,"seed",null),Ge(t,"seedLength",null),zZ(t,"state",$Z(null),Hre),Ge(t,"stateLength",null),Ge(t,"byteLength",null),Ge(t,"toJSON",$Z(null)),Ge(t,"PRNG",e)):(vu(t,"seed",u),vu(t,"seedLength",o),zZ(t,"state",c,l),vu(t,"stateLength",v),vu(t,"byteLength",f),Ge(t,"toJSON",p),Ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Wre(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return QZ(e,n,a)}function h(d,m){return ZZ(d)||ZZ(m)||m<=0?NaN:QZ(e,d,m)}}KZ.exports=Xre});var eQ=s((dTe,rQ)=>{"use strict";var Jre=hv(),Yre=Jre();rQ.exports=Yre});var nQ=s((hTe,iQ)=>{"use strict";var $re=b(),tQ=eQ(),Zre=hv();$re(tQ,"factory",Zre);iQ.exports=tQ});var uQ=s((yTe,sQ)=>{"use strict";var Qre=M().isPrimitive,Kre=W().isPrimitive,aQ=q(),ree=fr();function eee(r,e){return!Qre(r)||ree(r)?new TypeError(aQ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Kre(e)?null:new TypeError(aQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}sQ.exports=eee});var fQ=s((qTe,oQ)=>{"use strict";var tee=sr();function iee(r,e,t){return tee(e+t*r())}oQ.exports=iee});var yv=s((bTe,hQ)=>{"use strict";var It=b(),pu=L(),vQ=B(),cQ=T(),lQ=I(),pQ=S(),gQ=_(),nee=C(),an=bt().factory,mQ=E(),aee=j(),gu=q(),see=uQ(),dQ=fQ();function uee(){var r,e,t,i,n,a,u;if(arguments.length===0)e=an();else if(arguments.length===1){if(t=arguments[0],!cQ(t))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(pQ(t,"prng")){if(!lQ(t.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else{if(u=arguments[0],r=arguments[1],a=see(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!cQ(t))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(pQ(t,"prng")){if(!lQ(t.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else e=an()}return u===void 0?n=d:n=h,i=e.PRNG,It(n,"NAME","lognormal"),t&&t.prng?(It(n,"seed",null),It(n,"seedLength",null),vQ(n,"state",gQ(null),nee),It(n,"stateLength",null),It(n,"byteLength",null),It(n,"toJSON",gQ(null))):(pu(n,"seed",o),pu(n,"seedLength",v),vQ(n,"state",l,p),pu(n,"stateLength",f),pu(n,"byteLength",c),It(n,"toJSON",g)),It(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=aee(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return dQ(e,u,r)}function d(m,y){return mQ(m)||mQ(y)||y<=0?NaN:dQ(e,m,y)}}hQ.exports=uee});var qQ=s((wTe,yQ)=>{"use strict";var oee=yv(),fee=oee();yQ.exports=fee});var EQ=s((ETe,wQ)=>{"use strict";var vee=b(),bQ=qQ(),cee=yv();vee(bQ,"factory",cee);wQ.exports=bQ});var qv=s((NTe,NQ)=>{"use strict";var lee=ci(),pee=z(),gee=lee-1;function mee(){var r=pee(1+gee*Math.random());return r|0}NQ.exports=mee});var Ev=s((OTe,TQ)=>{"use strict";var xe=b(),Rt=L(),OQ=B(),bv=S(),dee=T(),hee=cr().isPrimitive,yee=Br(),qee=te().isPrimitive,SQ=Pa(),Yr=q(),mu=ci(),_r=Ke(),sn=mt(),bee=j(),AQ=qv(),wv=mu-1|0,wee=mu-1|0,Eee=16807,du=1,hu=2,Lt=2,Tr=4,da=5;function _Q(r,e){var t;return e?t="option":t="argument",r.length<da+1?new RangeError(Yr("invalid %s. State array has insufficient length.",t)):r[0]!==du?new RangeError(Yr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,du,r[0])):r[1]!==hu?new RangeError(Yr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,hu,r[1])):r[Lt]!==1?new RangeError(Yr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Lt])):r[Tr]!==r.length-da?new RangeError(Yr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-da,r[Tr])):null}function Nee(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!dee(r))throw new TypeError(Yr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bv(r,"copy")&&(i.copy=r.copy,!hee(r.copy)))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(bv(r,"state")){if(t=r.state,i.state=!0,!SQ(t))throw new TypeError(Yr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=_Q(t,!0),u)throw u;i.copy===!1?e=t:(e=new _r(t.length),sn(t.length,t,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,t[Tr])}if(n===void 0)if(bv(r,"seed"))if(n=r.seed,i.seed=!0,qee(n)){if(n>wee)throw new RangeError(Yr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(yee(n)&&n.length>0)a=n.length,e=new _r(da+a),e[0]=du,e[1]=hu,e[Lt]=1,e[Tr]=a,sn.ndarray(a,n,1,0,e,1,Tr+1),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Yr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=AQ()|0}else n=AQ()|0;return t===void 0&&(e=new _r(da+1),e[0]=du,e[1]=hu,e[Lt]=1,e[Tr]=1,e[Tr+1]=n,t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),xe(h,"NAME","minstd"),Rt(h,"seed",o),Rt(h,"seedLength",v),OQ(h,"state",l,p),Rt(h,"stateLength",f),Rt(h,"byteLength",c),xe(h,"toJSON",g),xe(h,"MIN",1),xe(h,"MAX",mu-1),xe(h,"normalized",d),xe(d,"NAME",h.NAME),Rt(d,"seed",o),Rt(d,"seedLength",v),OQ(d,"state",l,p),Rt(d,"stateLength",f),Rt(d,"byteLength",c),xe(d,"toJSON",g),xe(d,"MIN",(h.MIN-1)/wv),xe(d,"MAX",(h.MAX-1)/wv),h;function o(){var m=e[Tr];return sn(m,n,1,new _r(m),1)}function v(){return e[Tr]}function f(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return sn(m,e,1,new _r(m),1)}function p(m){var y;if(!SQ(m))throw new TypeError(Yr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(y=_Q(m,!1),y)throw y;i.copy===!1?i.state&&m.length===e.length?sn(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new _r(m.length)),sn(m.length,m,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,e[Tr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=bee(e),m.params=[],m}function h(){var m=t[0]|0;return m=Eee*m%mu|0,t[0]=m,m|0}function d(){return(h()-1)/wv}}TQ.exports=Nee});var RQ=s((STe,IQ)=>{"use strict";var Oee=Ev(),See=qv(),Aee=Oee({seed:See()});IQ.exports=Aee});var FQ=s((ATe,PQ)=>{"use strict";var _ee=b(),LQ=RQ(),Tee=Ev();_ee(LQ,"factory",Tee);PQ.exports=LQ});var BQ=s((_Te,MQ)=>{"use strict";var Iee=E(),Ree=8;function Lee(r,e,t){var i,n;for(n=0;n<Ree;n++)if(i=r(),Iee(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}MQ.exports=Lee});var Nv=s((TTe,jQ)=>{"use strict";var Pee=ci(),Fee=z(),Mee=Pee-1;function Bee(){var r=Fee(1+Mee*Math.random());return r|0}jQ.exports=Bee});var Av=s((ITe,xQ)=>{"use strict";var De=b(),Pt=L(),kQ=B(),Ov=S(),jee=T(),kee=cr().isPrimitive,Cee=Br(),Vee=te().isPrimitive,CQ=Pa(),un=mt(),Uee=z(),Ir=Ke(),ha=ci(),Gee=j(),Hr=q(),VQ=BQ(),UQ=Nv(),Sv=ha-1|0,xee=ha-1|0,Dee=16807,Lr=32,bu=1,wu=3,Ft=2,on=Lr+3,Rr=Lr+6,ya=Lr+7,yu=on+1,qu=on+2;function GQ(r,e){var t;return e?t="option":t="argument",r.length<ya+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==bu?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,bu,r[0])):r[1]!==wu?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,wu,r[1])):r[Ft]!==Lr?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Lr,r[Ft])):r[on]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[on])):r[Rr]!==r.length-ya?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ya,r[Rr])):null}function Hee(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!jee(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ov(r,"copy")&&(i.copy=r.copy,!kee(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Ov(r,"state")){if(t=r.state,i.state=!0,!CQ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=GQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ir(t.length),un(t.length,t,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,t[Rr])}if(n===void 0)if(Ov(r,"seed"))if(n=r.seed,i.seed=!0,Vee(n)){if(n>xee)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Cee(n)&&n.length>0)a=n.length,e=new Ir(ya+a),e[0]=bu,e[1]=wu,e[Ft]=Lr,e[on]=2,e[qu]=n[0],e[Rr]=a,un.ndarray(a,n,1,0,e,1,Rr+1),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,a),t=VQ(h,t,Lr),e[yu]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=UQ()|0}else n=UQ()|0;return t===void 0&&(e=new Ir(ya+1),e[0]=bu,e[1]=wu,e[Ft]=Lr,e[on]=2,e[qu]=n,e[Rr]=1,e[Rr+1]=n,t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,1),t=VQ(h,t,Lr),e[yu]=t[0]),De(d,"NAME","minstd-shuffle"),Pt(d,"seed",o),Pt(d,"seedLength",v),kQ(d,"state",l,p),Pt(d,"stateLength",f),Pt(d,"byteLength",c),De(d,"toJSON",g),De(d,"MIN",1),De(d,"MAX",ha-1),De(d,"normalized",m),De(m,"NAME",d.NAME),Pt(m,"seed",o),Pt(m,"seedLength",v),kQ(m,"state",l,p),Pt(m,"stateLength",f),Pt(m,"byteLength",c),De(m,"toJSON",g),De(m,"MIN",(d.MIN-1)/Sv),De(m,"MAX",(d.MAX-1)/Sv),d;function o(){var y=e[Rr];return un(y,n,1,new Ir(y),1)}function v(){return e[Rr]}function f(){return e.length}function c(){return e.byteLength}function l(){var y=e.length;return un(y,e,1,new Ir(y),1)}function p(y){var N;if(!CQ(y))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",y));if(N=GQ(y,!1),N)throw N;i.copy===!1?i.state&&y.length===e.length?un(y.length,y,1,e,1):(e=y,i.state=!0):(y.length!==e.length&&(e=new Ir(y.length)),un(y.length,y,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,e[Rr])}function g(){var y={};return y.type="PRNG",y.name=d.NAME,y.state=Gee(e),y.params=[],y}function h(){var y=e[qu]|0;return y=Dee*y%ha|0,e[qu]=y,y|0}function d(){var y,N;return y=e[yu],N=Uee(Lr*(y/ha)),y=t[N],e[yu]=y,t[N]=h(),y}function m(){return(d()-1)/Sv}}xQ.exports=Hee});var HQ=s((RTe,DQ)=>{"use strict";var Wee=Av(),zee=Nv(),Xee=Wee({seed:zee()});DQ.exports=Xee});var XQ=s((LTe,zQ)=>{"use strict";var Jee=b(),WQ=HQ(),Yee=Av();Jee(WQ,"factory",Yee);zQ.exports=WQ});var YQ=s((PTe,JQ)=>{"use strict";var $ee=sr();function Zee(r,e){for(var t=r(),i=1;t>$ee(-e);)i+=1,t*=r();return i-1}JQ.exports=Zee});var ZQ=s((FTe,$Q)=>{"use strict";var Qee=z();function Kee(r){return Qee(r)===r&&r<0}$Q.exports=Kee});var KQ=s((MTe,QQ)=>{"use strict";var rte=ZQ();QQ.exports=rte});var eK=s((BTe,rK)=>{"use strict";var ete=KQ(),tte=Qn();function ite(r){return ete(r)?NaN:tte(r+1)}rK.exports=ite});var iK=s((jTe,tK)=>{"use strict";var nte=eK();tK.exports=nte});var uK=s((kTe,sK)=>{"use strict";var ate=iK(),nK=z(),ste=ps(),ute=U(),aK=Y(),Eu=P(),ote=y3(),fte=1/12,vte=1/360;function cte(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=ute(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-aK(c))+v,c+=e+.445,nK(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=ste(c)*.5-c,l=u*r()),a=.5-aK(c),(a>=.013||a>=l)&&(f=nK((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Eu(e/f),c+=-e-ote+f,c-=(fte-vte/(f*f))/f,f>=10&&c>=Eu(l*t)||(c=f*Eu(e)-e-ate(f),f>=0&&f<=9&&c>=Eu(l))))return f}}sK.exports=cte});var fK=s((CTe,oK)=>{"use strict";var lte=YQ(),pte=uK();function gte(r,e){return e<30?lte(r,e):pte(r,e)}oK.exports=gte});var _v=s((VTe,dK)=>{"use strict";var He=b(),Nu=L(),vK=B(),mte=W().isPrimitive,cK=T(),lK=I(),pK=S(),gK=_(),dte=C(),Ou=J().factory,hte=E(),yte=j(),Su=q(),mK=fK();function qte(){var r,e,t,i;if(arguments.length===0)t=Ou();else if(arguments.length===1&&cK(arguments[0]))if(e=arguments[0],pK(e,"prng")){if(!lK(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ou(e);else{if(r=arguments[0],!mte(r))throw new TypeError(Su("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!cK(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(pK(e,"prng")){if(!lK(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ou(e)}else t=Ou()}return r===void 0?i=p:i=l,He(i,"NAME","poisson"),e&&e.prng?(He(i,"seed",null),He(i,"seedLength",null),vK(i,"state",gK(null),dte),He(i,"stateLength",null),He(i,"byteLength",null),He(i,"toJSON",gK(null)),He(i,"PRNG",t)):(Nu(i,"seed",n),Nu(i,"seedLength",a),vK(i,"state",v,f),Nu(i,"stateLength",u),Nu(i,"byteLength",o),He(i,"toJSON",c),He(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=yte(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return mK(t,r)}function p(g){return hte(g)||g<=0?NaN:mK(t,g)}}dK.exports=qte});var yK=s((UTe,hK)=>{"use strict";var bte=_v(),wte=bte();hK.exports=wte});var Tv=s((GTe,bK)=>{"use strict";var Ete=b(),qK=yK(),Nte=_v();Ete(qK,"factory",Nte);bK.exports=qK});var EK=s((xTe,wK)=>{"use strict";var Ote=W().isPrimitive,Ste=M().isPrimitive,Iv=q(),Ate=fr();function _te(r,e){return Ote(r)?!Ste(e)||Ate(e)?new TypeError(Iv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Iv("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Iv("invalid argument. First argument must be a positive number. Value: `%s`.",r))}wK.exports=_te});var Fv=s((DTe,RK)=>{"use strict";var Mt=b(),Au=L(),NK=B(),fn=S(),OK=T(),Rv=ge(),SK=cr().isPrimitive,AK=I(),_K=_(),Tte=C(),TK=E(),vn=Tv().factory,_u=$i().factory,Lv=mt(),Pv=pr(),IK=ca(),Ite=j(),We=q(),Rte=EK();function Lte(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=vn(i);else if(arguments.length===1){if(i=arguments[0],!OK(i))throw new TypeError(We("invalid argument. Options argument must be an object. Value: `%s`.",i));if(fn(i,"copy")&&!SK(i.copy))throw new TypeError(We("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(fn(i,"prng")){if(!AK(i.prng))throw new TypeError(We("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=vn({prng:i.prng})}else{if(fn(i,"state")&&!Rv(i.state))throw new TypeError(We("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=IK({},i),i.copy===!1?u=!1:i.state&&(i.state=Lv(i.state.length,i.state,1,new Pv(i.state.length),1)),i.copy=!1,t=vn(i)}}else{if(f=arguments[0],v=arguments[1],o=Rte(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!OK(i))throw new TypeError(We("invalid argument. Options argument must be an object. Value: `%s`.",i));if(fn(i,"copy")&&!SK(i.copy))throw new TypeError(We("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(fn(i,"prng")){if(!AK(i.prng))throw new TypeError(We("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=vn({prng:i.prng})}else{if(fn(i,"state")&&!Rv(i.state))throw new TypeError(We("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=IK({},i),i.copy===!1?u=!1:i.state&&(i.state=Lv(i.state.length,i.state,1,new Pv(i.state.length),1)),i.copy=!1,t=vn(i)}}else i={copy:!1},t=vn(i)}return i&&i.prng?f===void 0?r=_u({prng:i.prng}):r=_u(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=_u({state:e,copy:!1}):r=_u(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=y,a=t.PRNG,Mt(n,"NAME","negative-binomial"),i&&i.prng?(Mt(n,"seed",null),Mt(n,"seedLength",null),NK(n,"state",_K(null),Tte),Mt(n,"stateLength",null),Mt(n,"byteLength",null),Mt(n,"toJSON",_K(null))):(Au(n,"seed",c),Au(n,"seedLength",l),NK(n,"state",h,d),Au(n,"stateLength",p),Au(n,"byteLength",g),Mt(n,"toJSON",m)),Mt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!Rv(O))throw new TypeError(We("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Lv(O.length,O,1,new Pv(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=Ite(a.state),f===void 0?O.params=[]:O.params=[f,v],O}function y(){return t(r())}function N(O,F){return TK(O)||TK(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}RK.exports=Lte});var PK=s((HTe,LK)=>{"use strict";var Pte=Fv(),Fte=Pte();LK.exports=Fte});var BK=s((WTe,MK)=>{"use strict";var Mte=b(),FK=PK(),Bte=Fv();Mte(FK,"factory",Bte);MK.exports=FK});var CK=s((zTe,kK)=>{"use strict";var jte=M().isPrimitive,kte=W().isPrimitive,jK=q(),Cte=fr();function Vte(r,e){return!jte(r)||Cte(r)?new TypeError(jK("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):kte(e)?null:new TypeError(jK("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}kK.exports=Vte});var UK=s((XTe,VK)=>{"use strict";function Ute(r,e,t){return e+t*r()}VK.exports=Ute});var Mv=s((JTe,JK)=>{"use strict";var Bt=b(),Tu=L(),GK=B(),xK=T(),DK=I(),HK=S(),WK=_(),Gte=C(),cn=bt().factory,zK=E(),xte=j(),Iu=q(),Dte=CK(),XK=UK();function Hte(){var r,e,t,i,n,a,u;if(arguments.length===0)e=cn();else if(arguments.length===1){if(t=arguments[0],!xK(t))throw new TypeError(Iu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(HK(t,"prng")){if(!DK(t.prng))throw new TypeError(Iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else{if(u=arguments[0],r=arguments[1],a=Dte(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!xK(t))throw new TypeError(Iu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(HK(t,"prng")){if(!DK(t.prng))throw new TypeError(Iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else e=cn()}return u===void 0?n=d:n=h,i=e.PRNG,Bt(n,"NAME","normal"),t&&t.prng?(Bt(n,"seed",null),Bt(n,"seedLength",null),GK(n,"state",WK(null),Gte),Bt(n,"stateLength",null),Bt(n,"byteLength",null),Bt(n,"toJSON",WK(null))):(Tu(n,"seed",o),Tu(n,"seedLength",v),GK(n,"state",l,p),Tu(n,"stateLength",f),Tu(n,"byteLength",c),Bt(n,"toJSON",g)),Bt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=xte(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return XK(e,u,r)}function d(m,y){return zK(m)||zK(y)||y<=0?NaN:XK(e,m,y)}}JK.exports=Hte});var $K=s((YTe,YK)=>{"use strict";var Wte=Mv(),zte=Wte();YK.exports=zte});var KK=s(($Te,QK)=>{"use strict";var Xte=b(),ZK=$K(),Jte=Mv();Xte(ZK,"factory",Jte);QK.exports=ZK});var irr=s((ZTe,trr)=>{"use strict";var rrr=W().isPrimitive,err=q();function Yte(r,e){return rrr(r)?rrr(e)?null:new TypeError(err("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(err("invalid argument. First argument must be a positive number. Value: `%s`.",r))}trr.exports=Yte});var arr=s((QTe,nrr)=>{"use strict";var $te=D();function Zte(r,e,t){return t/$te(r(),1/e)}nrr.exports=Zte});var Bv=s((KTe,prr)=>{"use strict";var ze=b(),Ru=L(),srr=B(),urr=T(),orr=I(),frr=S(),vrr=_(),Qte=C(),Lu=J().factory,crr=E(),Kte=j(),Pu=q(),rie=irr(),lrr=arr();function eie(){var r,e,t,i,n,a;if(arguments.length===0)i=Lu();else if(arguments.length===1){if(t=arguments[0],!urr(t))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(frr(t,"prng")){if(!orr(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Lu(t)}else{if(r=arguments[0],e=arguments[1],a=rie(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!urr(t))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(frr(t,"prng")){if(!orr(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Lu(t)}else i=Lu()}return r===void 0?n=h:n=g,ze(n,"NAME","pareto-type1"),t&&t.prng?(ze(n,"seed",null),ze(n,"seedLength",null),srr(n,"state",vrr(null),Qte),ze(n,"stateLength",null),ze(n,"byteLength",null),ze(n,"toJSON",vrr(null)),ze(n,"PRNG",i)):(Ru(n,"seed",u),Ru(n,"seedLength",o),srr(n,"state",c,l),Ru(n,"stateLength",v),Ru(n,"byteLength",f),ze(n,"toJSON",p),ze(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=Kte(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return lrr(i,r,e)}function h(d,m){return crr(d)||crr(m)||d<=0||m<=0?NaN:lrr(i,d,m)}}prr.exports=eie});var mrr=s((rIe,grr)=>{"use strict";var tie=Bv(),iie=tie();grr.exports=iie});var yrr=s((eIe,hrr)=>{"use strict";var nie=b(),drr=mrr(),aie=Bv();nie(drr,"factory",aie);hrr.exports=drr});var brr=s((tIe,qrr)=>{"use strict";var sie=U(),uie=P();function oie(r,e){return e*sie(-2*uie(r()))}qrr.exports=oie});var jv=s((iIe,_rr)=>{"use strict";var Xe=b(),Fu=L(),wrr=B(),fie=W().isPrimitive,Err=T(),Nrr=I(),Orr=S(),Srr=_(),vie=C(),Mu=J().factory,cie=E(),lie=j(),Bu=q(),Arr=brr();function pie(){var r,e,t,i;if(arguments.length===0)t=Mu();else if(arguments.length===1&&Err(arguments[0]))if(e=arguments[0],Orr(e,"prng")){if(!Nrr(e.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Mu(e);else{if(r=arguments[0],!fie(r))throw new TypeError(Bu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Err(e))throw new TypeError(Bu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Orr(e,"prng")){if(!Nrr(e.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Mu(e)}else t=Mu()}return r===void 0?i=p:i=l,Xe(i,"NAME","rayleigh"),e&&e.prng?(Xe(i,"seed",null),Xe(i,"seedLength",null),wrr(i,"state",Srr(null),vie),Xe(i,"stateLength",null),Xe(i,"byteLength",null),Xe(i,"toJSON",Srr(null)),Xe(i,"PRNG",t)):(Fu(i,"seed",n),Fu(i,"seedLength",a),wrr(i,"state",v,f),Fu(i,"stateLength",u),Fu(i,"byteLength",o),Xe(i,"toJSON",c),Xe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=lie(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return Arr(t,r)}function p(g){return cie(g)||g<=0?NaN:Arr(t,g)}}_rr.exports=pie});var Irr=s((nIe,Trr)=>{"use strict";var gie=jv(),mie=gie();Trr.exports=mie});var Prr=s((aIe,Lrr)=>{"use strict";var die=b(),Rrr=Irr(),hie=jv();die(Rrr,"factory",hie);Lrr.exports=Rrr});var Uv=s((sIe,Grr)=>{"use strict";var jt=b(),ju=L(),Frr=B(),ln=S(),Mrr=W().isPrimitive,Brr=T(),kv=ge(),jrr=cr().isPrimitive,yie=E(),krr=I(),Crr=_(),qie=C(),ku=ga().factory,pn=bt().factory,Cv=mt(),Vv=pr(),Vrr=ca(),bie=j(),fe=q(),Urr=U();function wie(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=pn(n);else if(arguments.length===1)if(Brr(arguments[0])){if(n=arguments[0],ln(n,"copy")&&!jrr(n.copy))throw new TypeError(fe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ln(n,"prng")){if(!krr(n.prng))throw new TypeError(fe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=pn({prng:n.prng})}else{if(ln(n,"state")&&!kv(n.state))throw new TypeError(fe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Vrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Cv(n.state.length,n.state,1,new Vv(n.state.length),1)),n.copy=!1,t=pn(n)}}else{if(o=arguments[0],!Mrr(o))throw new TypeError(fe("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=pn(n)}else{if(o=arguments[0],!Mrr(o))throw new TypeError(fe("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!Brr(n))throw new TypeError(fe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(ln(n,"copy")&&!jrr(n.copy))throw new TypeError(fe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ln(n,"prng")){if(!krr(n.prng))throw new TypeError(fe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=pn({prng:n.prng})}else{if(ln(n,"state")&&!kv(n.state))throw new TypeError(fe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Vrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Cv(n.state.length,n.state,1,new Vv(n.state.length),1)),n.copy=!1,t=pn(n)}}return n&&n.prng?o===void 0?r=ku({prng:n.prng}):r=ku(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=ku({state:e,copy:!1}):r=ku(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,jt(a,"NAME","t"),n&&n.prng?(jt(a,"seed",null),jt(a,"seedLength",null),Frr(a,"state",Crr(null),qie),jt(a,"stateLength",null),jt(a,"byteLength",null),jt(a,"toJSON",Crr(null))):(ju(a,"seed",v),ju(a,"seedLength",f),Frr(a,"state",p,g),ju(a,"stateLength",c),ju(a,"byteLength",l),jt(a,"toJSON",h)),jt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(y){if(!kv(y))throw new TypeError(fe("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));u&&(y=Cv(y.length,y,1,new Vv(y.length),1)),i.state=y}function h(){var y={};return y.type="PRNG",y.name=a.NAME,y.state=bie(i.state),o===void 0?y.params=[]:y.params=[o],y}function d(){return t()/Urr(r()/o)}function m(y){return yie(y)||y<=0?NaN:t()/Urr(r(y)/y)}}Grr.exports=wie});var Drr=s((uIe,xrr)=>{"use strict";var Eie=Uv(),Nie=Eie();xrr.exports=Nie});var zrr=s((oIe,Wrr)=>{"use strict";var Oie=b(),Hrr=Drr(),Sie=Uv();Oie(Hrr,"factory",Sie);Wrr.exports=Hrr});var Jrr=s((fIe,Xrr)=>{"use strict";var Gv=M().isPrimitive,Cu=q(),xv=fr();function Aie(r,e,t){return!Gv(r)||xv(r)?new TypeError(Cu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Gv(e)||xv(e)?new TypeError(Cu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Gv(t)||xv(t)?new TypeError(Cu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Cu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Xrr.exports=Aie});var Zrr=s((vIe,$rr)=>{"use strict";var Yrr=U();function _ie(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+Yrr(a*u)):(a=(t-e)*(t-i),t-Yrr(a*(1-u)))}$rr.exports=_ie});var Hv=s((cIe,ner)=>{"use strict";var Je=b(),Vu=L(),Qrr=B(),Krr=T(),rer=I(),eer=S(),ter=_(),Tie=C(),Uu=J().factory,Dv=E(),Iie=j(),Gu=q(),Rie=Jrr(),ier=Zrr();function Lie(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Uu();else if(arguments.length===1){if(r=arguments[0],!Krr(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(eer(r,"prng")){if(!rer(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=Rie(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Krr(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(eer(r,"prng")){if(!rer(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else e=Uu()}return n===void 0?t=d:t=h,Je(t,"NAME","triangular"),r&&r.prng?(Je(t,"seed",null),Je(t,"seedLength",null),Qrr(t,"state",ter(null),Tie),Je(t,"stateLength",null),Je(t,"byteLength",null),Je(t,"toJSON",ter(null)),Je(t,"PRNG",e)):(Vu(t,"seed",o),Vu(t,"seedLength",v),Qrr(t,"state",l,p),Vu(t,"stateLength",f),Vu(t,"byteLength",c),Je(t,"toJSON",g),Je(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Iie(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return ier(e,n,a,u)}function d(m,y,N){return Dv(m)||Dv(y)||Dv(N)||!(m<=N&&N<=y)?NaN:ier(e,m,y,N)}}ner.exports=Lie});var ser=s((lIe,aer)=>{"use strict";var Pie=Hv(),Fie=Pie();aer.exports=Fie});var fer=s((pIe,oer)=>{"use strict";var Mie=b(),uer=ser(),Bie=Hv();Mie(uer,"factory",Bie);oer.exports=uer});var per=s((gIe,ler)=>{"use strict";var ver=M().isPrimitive,Wv=q(),cer=fr();function jie(r,e){return!ver(r)||cer(r)?new TypeError(Wv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!ver(e)||cer(e)?new TypeError(Wv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Wv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}ler.exports=jie});var mer=s((mIe,ger)=>{"use strict";function kie(r,e,t){var i=r();return t*i+(1-i)*e}ger.exports=kie});var zv=s((dIe,Ner)=>{"use strict";var Ye=b(),xu=L(),der=B(),her=T(),yer=I(),qer=S(),ber=_(),Cie=C(),Du=J().factory,wer=E(),Vie=j(),Hu=q(),Uie=per(),Eer=mer();function Gie(){var r,e,t,i,n,a;if(arguments.length===0)e=Du();else if(arguments.length===1){if(r=arguments[0],!her(r))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qer(r,"prng")){if(!yer(r.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Du(r)}else{if(n=arguments[0],a=arguments[1],i=Uie(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!her(r))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qer(r,"prng")){if(!yer(r.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Du(r)}else e=Du()}return n===void 0?t=h:t=g,Ye(t,"NAME","uniform"),r&&r.prng?(Ye(t,"seed",null),Ye(t,"seedLength",null),der(t,"state",ber(null),Cie),Ye(t,"stateLength",null),Ye(t,"byteLength",null),Ye(t,"toJSON",ber(null)),Ye(t,"PRNG",e)):(xu(t,"seed",u),xu(t,"seedLength",o),der(t,"state",c,l),xu(t,"stateLength",v),xu(t,"byteLength",f),Ye(t,"toJSON",p),Ye(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Vie(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Eer(e,n,a)}function h(d,m){return wer(d)||wer(m)||d>=m?NaN:Eer(e,d,m)}}Ner.exports=Gie});var Ser=s((hIe,Oer)=>{"use strict";var xie=zv(),Die=xie();Oer.exports=Die});var Ter=s((yIe,_er)=>{"use strict";var Hie=b(),Aer=Ser(),Wie=zv();Hie(Aer,"factory",Wie);_er.exports=Aer});var Per=s((qIe,Ler)=>{"use strict";var Ier=W().isPrimitive,Rer=q();function zie(r,e){return Ier(r)?Ier(e)?null:new TypeError(Rer("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(Rer("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}Ler.exports=zie});var Mer=s((bIe,Fer)=>{"use strict";var Xie=D(),Jie=P();function Yie(r,e,t){return t*Xie(-Jie(1-r()),1/e)}Fer.exports=Yie});var Xv=s((wIe,xer)=>{"use strict";var $e=b(),Wu=L(),Ber=B(),jer=T(),ker=I(),Cer=S(),Ver=_(),$ie=C(),zu=J().factory,Uer=E(),Zie=j(),Xu=q(),Qie=Per(),Ger=Mer();function Kie(){var r,e,t,i,n,a;if(arguments.length===0)t=zu();else if(arguments.length===1){if(e=arguments[0],!jer(e))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Cer(e,"prng")){if(!ker(e.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e)}else{if(a=arguments[0],r=arguments[1],n=Qie(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!jer(e))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Cer(e,"prng")){if(!ker(e.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e)}else t=zu()}return r===void 0?i=h:i=g,$e(i,"NAME","weibull"),e&&e.prng?($e(i,"seed",null),$e(i,"seedLength",null),Ber(i,"state",Ver(null),$ie),$e(i,"stateLength",null),$e(i,"byteLength",null),$e(i,"toJSON",Ver(null)),$e(i,"PRNG",t)):(Wu(i,"seed",u),Wu(i,"seedLength",o),Ber(i,"state",c,l),Wu(i,"stateLength",v),Wu(i,"byteLength",f),$e(i,"toJSON",p),$e(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Zie(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return Ger(t,a,r)}function h(d,m){return Uer(d)||Uer(m)||d<=0||m<=0?NaN:Ger(t,d,m)}}xer.exports=Kie});var Her=s((EIe,Der)=>{"use strict";var rne=Xv(),ene=rne();Der.exports=ene});var Xer=s((NIe,zer)=>{"use strict";var tne=b(),Wer=Her(),ine=Xv();tne(Wer,"factory",ine);zer.exports=Wer});var Yer=s((OIe,Jer)=>{"use strict";var nne=dr(),ane=gr().isPrimitive,sne=q(),une=Ra();function one(r){if(ane(r))return r;if(nne(r))return une(r);throw new TypeError(sne("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}Jer.exports=one});var Zer=s((SIe,$er)=>{"use strict";var fne=Yer();$er.exports=fne});var Ker=s((AIe,Qer)=>{"use strict";var k=rr(),vne=vx().factory,cne=wx().factory,lne=DD().factory,pne=TH().factory,gne=fW().factory,mne=OW().factory,dne=ez().factory,hne=Nz().factory,yne=ga().factory,qne=hX().factory,bne=kX().factory,wne=eJ().factory,Ene=mJ().factory,Nne=MJ().factory,One=ZJ().factory,Sne=$i().factory,Ane=lY().factory,_ne=LY().factory,Tne=e$().factory,Ine=bt().factory,Rne=h$().factory,Lne=k$().factory,Pne=eZ().factory,Fne=UZ().factory,Mne=nQ().factory,Bne=EQ().factory,jne=FQ().factory,kne=XQ().factory,Cne=J().factory,Vne=BK().factory,Une=KK().factory,Gne=yrr().factory,xne=Tv().factory,Dne=Prr().factory,Hne=zrr().factory,Wne=fer().factory,zne=Ter().factory,Xne=Xer().factory,Jne=Zer();function Yne(r){return k(r,"arcsine",vne),k(r,"bernoulli",cne),k(r,"beta",lne),k(r,"betaprime",pne),k(r,"binomial",gne),k(r,"boxMuller",mne),k(r,"cauchy",dne),k(r,"chi",hne),k(r,"chisquare",yne),k(r,"cosine",qne),k(r,"discreteUniform",bne),k(r,"erlang",wne),k(r,"exponential",Ene),k(r,"f",Nne),k(r,"frechet",One),k(r,"gamma",Sne),k(r,"geometric",Ane),k(r,"gumbel",_ne),k(r,"hypergeometric",Tne),k(r,"improvedZiggurat",Ine),k(r,"invgamma",Rne),k(r,"kumaraswamy",Lne),k(r,"laplace",Pne),k(r,"levy",Fne),k(r,"logistic",Mne),k(r,"lognormal",Bne),k(r,"minstd",jne),k(r,"minstdShuffle",kne),k(r,"mt19937",Cne),k(r,"negativeBinomial",Vne),k(r,"normal",Une),k(r,"pareto1",Gne),k(r,"poisson",xne),k(r,"rayleigh",Dne),k(r,"t",Hne),k(r,"triangular",Wne),k(r,"uniform",zne),k(r,"weibull",Xne),r.base={},k(r.base,"normalizeSeed",Jne),r}Qer.exports=Yne});var etr=s((_Ie,rtr)=>{"use strict";var $ne=T(),Ju=S(),Zne=gr().isPrimitive,Qne=te().isPrimitive,Kne=hr().isPrimitive,rae=$a().isPrimitive,qa=q();function eae(r,e){return $ne(e)?Ju(e,"period")&&(r.period=e.period,!Qne(e.period))?new TypeError(qa("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Ju(e,"amplitude")&&(r.amplitude=e.amplitude,!rae(e.amplitude))?new TypeError(qa("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Ju(e,"offset")&&(r.offset=e.offset,!Zne(e.offset))?new TypeError(qa("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Ju(e,"iter")&&(r.iter=e.iter,!Kne(e.iter))?new TypeError(qa("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(qa("invalid argument. Options argument must be an object. Value: `%s`.",e))}rtr.exports=eae});var atr=s((TIe,ntr)=>{"use strict";var Jv=b(),ttr=wn(),tae=kf(),iae=O0(),nae=N0(),aae=Vr(),sae=etr();function itr(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=sae(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=aae/e.period,o=e.amplitude/nae,v=0,t={},Jv(t,"next",f),Jv(t,"return",c),ttr&&Jv(t,ttr,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*iae(tae(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return itr(e)}}ntr.exports=itr});var utr=s((IIe,str)=>{"use strict";var uae=atr();str.exports=uae});var ftr=s((RIe,otr)=>{"use strict";var oae=rr(),fae=utr();function vae(r){return oae(r,"iterSawtoothWave",fae),r}otr.exports=vae});var ctr=s((LIe,vtr)=>{"use strict";var cae=17976931348623157e292;vtr.exports=cae});var Yu=s((PIe,ltr)=>{"use strict";var lae=709.782712893384;ltr.exports=lae});var gtr=s((FIe,ptr)=>{"use strict";var pae=sr();function gae(r,e){var t,i,n,a;if(n=pae(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}ptr.exports=gae});var dtr=s((MIe,mtr)=>{"use strict";function mae(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}mtr.exports=mae});var ytr=s((BIe,htr)=>{"use strict";function dae(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}htr.exports=dae});var btr=s((jIe,qtr)=>{"use strict";function hae(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}qtr.exports=hae});var Etr=s((kIe,wtr)=>{"use strict";function yae(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}wtr.exports=yae});var Otr=s((CIe,Ntr)=>{"use strict";function qae(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Ntr.exports=qae});var Atr=s((VIe,Str)=>{"use strict";function bae(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Str.exports=bae});var Ttr=s((UIe,_tr)=>{"use strict";function wae(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}_tr.exports=wae});var Rtr=s((GIe,Itr)=>{"use strict";function Eae(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Itr.exports=Eae});var Mtr=s((xIe,Ftr)=>{"use strict";var Nae=E(),Ltr=sr(),Oae=de(),Sae=R(),Aae=V(),_ae=dtr(),Tae=ytr(),Iae=btr(),Rae=Etr(),Lae=Otr(),Pae=Atr(),Fae=Ttr(),Mae=Rtr(),$u=1e-300,Bae=13877787807814457e-33,Ptr=.8450629115104675,jae=.12837916709551256,kae=1,Cae=-.0023621185607526594,Vae=1,Uae=-.009864944034847148,Gae=1,xae=-.0098649429247001,Dae=1;function Hae(r){var e,t,i,n,a,u,o,v;if(Nae(r))return NaN;if(r===Sae)return 0;if(r===Aae)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Bae?1-r:(i=r*r,n=jae+i*_ae(i),a=kae+i*Tae(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Cae+a*Iae(a),v=Vae+a*Rae(a),e?1+Ptr+o/v:1-Ptr-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Uae+a*Lae(a),a=Gae+a*Pae(a);else{if(r<-6)return 2-$u;n=xae+a*Fae(a),a=Dae+a*Mae(a)}return i=Oae(t,0),n=Ltr(-(i*i)-.5625)*Ltr((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-$u:$u*$u}Ftr.exports=Hae});var ai=s((DIe,Btr)=>{"use strict";var Wae=Mtr();Btr.exports=Wae});var Ctr=s((HIe,ktr)=>{"use strict";var zae=ai(),jtr=U(),Xae=sr(),Jae=Vr();function Yae(r,e){var t,i,n,a,u;if(a=zae(jtr(e)),a!==0&&r>1){for(i=Xae(-e)/jtr(Jae*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}ktr.exports=Yae});var Yv=s((WIe,Vtr)=>{"use strict";var $ae=-708.3964185322641;Vtr.exports=$ae});var Dtr=s((zIe,xtr)=>{"use strict";var gn=sr(),Zu=D(),Zae=P(),Utr=Yu(),Gtr=Yv();function Qae(r,e){var t,i;return i=r*Zae(e),e>=1?i<Utr&&-e>Gtr?t=Zu(e,r)*gn(-e):r>=1?t=Zu(e/gn(e/r),r):t=gn(i-e):i>Gtr?t=Zu(e,r)*gn(-e):e/r<Utr?t=Zu(e/gn(e/r),r):t=gn(i-e),t}xtr.exports=Qae});var $v=s((XIe,Htr)=>{"use strict";function Kae(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Htr.exports=Kae});var ztr=s((JIe,Wtr)=>{"use strict";var r0e=Function;Wtr.exports=r0e});var Jtr=s((YIe,Xtr)=>{"use strict";var e0e=ztr();Xtr.exports=e0e});var $tr=s(($Ie,Ytr)=>{"use strict";var t0e=Jtr(),i0e=$v();function n0e(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new t0e(e)();function a(u){return i0e(r,u)}}Ytr.exports=n0e});var Ktr=s((ZIe,Qtr)=>{"use strict";var a0e=b(),Ztr=$v(),s0e=$tr();a0e(Ztr,"factory",s0e);Qtr.exports=Ztr});var si=s((QIe,rir)=>{"use strict";var u0e=2220446049250313e-31;rir.exports=u0e});var tir=s((KIe,eir)=>{"use strict";var o0e=eval;eir.exports=o0e});var nir=s((rRe,iir)=>{"use strict";var f0e=tir();function v0e(){var r;try{f0e('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}iir.exports=v0e});var Zv=s((eRe,air)=>{"use strict";var c0e=nir();air.exports=c0e});var uir=s((tRe,sir)=>{"use strict";var Qu=Y(),l0e=si(),p0e=1e6;function g0e(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||l0e,a=o.maxTerms||p0e,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Qu(i*u)>=Qu(n)||--a===0)break}else do n=r(),u+=n;while(Qu(i*u)<Qu(n)&&--a);return u}sir.exports=g0e});var vir=s((iRe,fir)=>{"use strict";var oir=Y(),m0e=si(),d0e=1e6;function h0e(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||m0e,n=u.maxTerms||d0e,a=u.initialValue||0;do i=r(),a+=i;while(oir(t*a)<oir(i)&&--n);return a}fir.exports=h0e});var Ku=s((nRe,cir)=>{"use strict";var y0e=Zv(),q0e=uir(),b0e=vir(),Qv;y0e()?Qv=q0e:Qv=b0e;cir.exports=Qv});var pir=s((aRe,lir)=>{"use strict";function w0e(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}lir.exports=w0e});var mir=s((sRe,gir)=>{"use strict";var E0e=Y(),N0e=P(),O0e=si(),S0e=Ku(),A0e=pir();function _0e(r){var e,t;return r<=-1?NaN:(t=E0e(r),t>.95?N0e(1+r)-r:t<O0e?-r*r/2:(e={initialValue:-r},S0e(A0e(r),e)))}gir.exports=_0e});var hir=s((uRe,dir)=>{"use strict";var T0e=mir();dir.exports=T0e});var qir=s((oRe,yir)=>{"use strict";function I0e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}yir.exports=I0e});var wir=s((fRe,bir)=>{"use strict";function R0e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}bir.exports=R0e});var Nir=s((vRe,Eir)=>{"use strict";function L0e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Eir.exports=L0e});var Sir=s((cRe,Oir)=>{"use strict";function P0e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Oir.exports=P0e});var _ir=s((lRe,Air)=>{"use strict";function F0e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Air.exports=F0e});var Iir=s((pRe,Tir)=>{"use strict";function M0e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Tir.exports=M0e});var Lir=s((gRe,Rir)=>{"use strict";function B0e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Rir.exports=B0e});var Fir=s((mRe,Pir)=>{"use strict";function j0e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Pir.exports=j0e});var Bir=s((dRe,Mir)=>{"use strict";function k0e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Mir.exports=k0e});var kir=s((hRe,jir)=>{"use strict";var C0e=Ktr(),V0e=hir(),U0e=ai(),Kv=U(),G0e=sr(),x0e=ft(),D0e=qir(),H0e=wir(),W0e=Nir(),z0e=Sir(),X0e=_ir(),J0e=Iir(),Y0e=Lir(),$0e=Fir(),Z0e=Bir(),$r=[0,0,0,0,0,0,0,0,0,0];function Q0e(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-V0e(i),a=r*n,u=Kv(2*n),e<r&&(u=-u),$r[0]=D0e(u),$r[1]=H0e(u),$r[2]=W0e(u),$r[3]=z0e(u),$r[4]=X0e(u),$r[5]=J0e(u),$r[6]=Y0e(u),$r[7]=$0e(u),$r[8]=Z0e(u),$r[9]=-.0005967612901927463,t=C0e($r,1/r),t*=G0e(-a)/Kv(x0e*r),e<r&&(t=-t),t+=U0e(Kv(a))/2,t}jir.exports=Q0e});var Vir=s((yRe,Cir)=>{"use strict";function K0e(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}Cir.exports=K0e});var Gir=s((qRe,Uir)=>{"use strict";var rse=Ku(),ese=Vir();function tse(r,e,t){var i,n;return t=t||0,n=ese(r,e),i=rse(n,{initialValue:t}),i}Uir.exports=tse});var Dir=s((bRe,xir)=>{"use strict";function ise(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}xir.exports=ise});var Wir=s((wRe,Hir)=>{"use strict";var nse=Dir();Hir.exports=nse});var Xir=s((ERe,zir)=>{"use strict";var ase=Wir();zir.exports=ase});var $ir=s((NRe,Yir)=>{"use strict";var sse=p3(),Jir=E(),rc=V();function use(r,e){return Jir(r)||Jir(e)?NaN:r===rc||e===rc?rc:r===e&&r===0?sse(r)?r:e:r<e?r:e}Yir.exports=use});var Qir=s((ORe,Zir)=>{"use strict";var ose=$ir();Zir.exports=ose});var rnr=s((SRe,Kir)=>{"use strict";var fse=10.900511;Kir.exports=fse});var ec=s((ARe,enr)=>{"use strict";var vse=2.718281828459045;enr.exports=vse});var nnr=s((_Re,inr)=>{"use strict";var cse=Xir(),lse=Qn(),pse=Gi(),gse=ut(),mse=U(),dse=Y(),kt=sr(),ba=D(),tc=Q3(),ic=Qir(),tnr=P(),ro=Yu(),wa=Yv(),nc=rnr(),hse=ec();function yse(r,e){var t,i,n,a,u,o,v;return n=r+nc-.5,v=(e-r-nc+.5)/n,r<1?e<=wa?kt(r*tnr(e)-e-lse(r)):ba(e,r)*kt(-e)/pse(r):(dse(v*v*r)<=100&&r>150?(t=r*(gse(v)-v)+e*(.5-nc)/n,t=kt(t)):(a=r*tnr(e/n),u=r-e,ic(a,u)<=wa||tc(a,u)>=ro?(i=u/r,ic(a,u)/2>wa&&tc(a,u)/2<ro?(o=ba(e/n,r/2)*kt(u/2),t=o*o):ic(a,u)/4>wa&&tc(a,u)/4<ro&&e>r?(o=ba(e/n,r/4)*kt(u/4),t=o*o,t*=t):i>wa&&i<ro?t=ba(e*kt(i)/n,r):t=kt(a+u)):t=ba(e/n,r)*kt(u)),t*=mse(n/hse)/cse(r),t)}inr.exports=yse});var snr=s((TRe,anr)=>{"use strict";var qse=.34657359027997264;anr.exports=qse});var onr=s((IRe,unr)=>{"use strict";function bse(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}unr.exports=bse});var gnr=s((RRe,pnr)=>{"use strict";var wse=E(),fnr=ar(),ac=he(),Ese=Ci(),vnr=R(),Nse=V(),cnr=ue(),Ose=snr(),Sse=onr(),Ase=709.782712893384,sc=.6931471803691238,uc=19082149292705877e-26,lnr=1.4426950408889634,_se=38.816242111356935,Tse=1.0397207708399179;function Ise(r){var e,t,i,n,a,u,o,v,f,c,l,p,g;if(r===vnr||wse(r))return r;if(r===Nse)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=_se){if(i)return-1;if(v>=Ase)return vnr}if(u=fnr(v)|0,v>Ose)v<Tse?i?(n=r+sc,a=-uc,g=-1):(n=r-sc,a=uc,g=1):(i?g=lnr*r-.5:g=lnr*r+.5,g|=0,l=g,n=r-l*sc,a=l*uc),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,f=r*e,o=1+f*Sse(f),l=3-o*e,p=f*((o-l)/(6-r*l)),g===0?r-(r*p-f):(t=Ese(cnr+g<<20,0),p=r*(p-c)-c,p-=f,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(v=1-(p-r),g===1024?(n=fnr(v)+(g<<20)|0,v=ac(v,n)):v*=t,v-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=ac(l,n),v=l-(p-r)):(n=cnr-g<<20|0,l=ac(l,n),v=r-(p+l),v+=1),v*=t,v))}pnr.exports=Ise});var oc=s((LRe,mnr)=>{"use strict";var Rse=gnr();mnr.exports=Rse});var qnr=s((PRe,ynr)=>{"use strict";var dnr=E(),hnr=Y(),Lse=oc(),Pse=P(),Fse=D(),Mse=M0();function Bse(r,e){var t;if(dnr(r)||dnr(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((hnr(e*(r-1))<.5||hnr(e)<.2)&&(t=Pse(r)*e,t<.5))return Lse(t)}else if(Mse(e)!==e)return NaN;return Fse(r,e)-1}ynr.exports=Bse});var wnr=s((FRe,bnr)=>{"use strict";var jse=qnr();bnr.exports=jse});var Nnr=s((MRe,Enr)=>{"use strict";function kse(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Enr.exports=kse});var Snr=s((BRe,Onr)=>{"use strict";function Cse(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Onr.exports=Cse});var _nr=s((jRe,Anr)=>{"use strict";function Vse(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Anr.exports=Vse});var Inr=s((kRe,Tnr)=>{"use strict";var fc=P(),Use=si(),Gse=Nnr(),xse=Snr(),Dse=_nr(),Hse=.15896368026733398,Wse=.5281534194946289,zse=.45201730728149414;function Xse(r,e,t){var i,n,a,u;if(r<Use)return-fc(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=fc(r);while(r>=3);t=r-2}return a=t*(r+1),u=Gse(t),n+=a*Hse+a*u,n}return r<1&&(n+=-fc(r),t=e,e=r,r+=1),r<=1.5?(a=xse(e),i=e*t,n+=i*Wse+i*a,n):(a=t*e,u=Dse(-t),n+=a*zse+a*u,n)}Tnr.exports=Xse});var Mnr=s((CRe,Fnr)=>{"use strict";var Rnr=Gi(),Lnr=oc(),Jse=ut(),Yse=E(),Pnr=Inr();function $se(r){return Yse(r)?NaN:r<0?r<-.5?Rnr(1+r)-1:Lnr(-Jse(r)+Pnr(r+2,r+1,r)):r<2?Lnr(Pnr(r+1,r,r-1)):Rnr(1+r)-1}Fnr.exports=$se});var jnr=s((VRe,Bnr)=>{"use strict";var Zse=Mnr();Bnr.exports=Zse});var Cnr=s((URe,knr)=>{"use strict";function Qse(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}knr.exports=Qse});var Unr=s((GRe,Vnr)=>{"use strict";var Kse=wnr(),rue=Ku(),eue=jnr(),tue=Cnr();function iue(r,e,t){var i,n,a,u,o;return n=eue(r),a=(n+1)/r,u=Kse(e,r),n-=u,n/=r,o=tue(r,e),u+=1,i=t?a:0,n=-u*rue(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Vnr.exports=iue});var vc=s((xRe,Gnr)=>{"use strict";var nue=11754943508222875e-54;Gnr.exports=nue});var Dnr=s((DRe,xnr)=>{"use strict";var eo=Y(),ve=vc(),aue=si(),sue=1e6;function uue(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=ve),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=ve),o=f[1]+f[0]/o,o===0&&(o=ve),v=1/v,n=o*v,u*=n);while(eo(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=ve),o=f[1]+f[0]/o,o===0&&(o=ve),v=1/v,n=o*v,u*=n);while(f&&eo(n-1)>e&&--t);return a/u}function oue(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=ve),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=ve),u=v[1]+v[0]/u,u===0&&(u=ve),o=1/o,n=u*o,a*=n);while(v&&eo(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=ve),u=v[1]+v[0]/u,u===0&&(u=ve),o=1/o,n=u*o,a*=n);while(v&&eo(n-1)>e&&--t);return a}function fue(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||sue,n=i.tolerance||aue,i.keep?oue(r,n,t):uue(r,n,t)}xnr.exports=fue});var znr=s((HRe,Wnr)=>{"use strict";var Hnr=Y(),vue=si(),mn=vc(),cue=1e6;function lue(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=mn),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=mn),a=v[1]+v[0]/a,a===0&&(a=mn),u=1/u,i=a*u,o*=i);while(v&&Hnr(i-1)>e&&--t);return n/o}function pue(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=mn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=mn),n=o[1]+o[0]/n,n===0&&(n=mn),a=1/a,i=n*a,u*=i);while(o&&Hnr(i-1)>e&&--t);return u}function gue(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||vue,t=i.maxIter||cue,i.keep?pue(r,n,t):lue(r,n,t)}Wnr.exports=gue});var Jnr=s((WRe,Xnr)=>{"use strict";var mue=Zv(),due=Dnr(),hue=znr(),cc;mue()?cc=due:cc=hue;Xnr.exports=cc});var $nr=s((zRe,Ynr)=>{"use strict";function yue(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Ynr.exports=yue});var Qnr=s((XRe,Znr)=>{"use strict";var que=Jnr(),bue=$nr();function wue(r,e){var t=bue(r,e);return 1/(e-r+1+que(t))}Znr.exports=wue});var oar=s((JRe,uar)=>{"use strict";var Eue=Qn(),Nue=z(),Ea=Gi(),Knr=Y(),Oue=sr(),rar=D(),Zr=P(),Sue=h3(),ear=ctr(),Aue=g3(),tar=Yu(),_ue=R(),Tue=gtr(),Iue=Ctr(),iar=Dtr(),Rue=kir(),lc=Gir(),nar=nnr(),Lue=Unr(),aar=Qnr(),Pue=170;function sar(r,e,t,i){var n,a,u,o,v,f,c,l,p,g,h,d,m,y,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Pue&&!a)return l&&e*4<r?(p=e*Zr(r)-r,p+=Zr(aar(e,r))):!l&&e>4*r?(p=e*Zr(r)-r,o=0,p+=Zr(lc(e,r,o)/e)):(p=sar(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Zr(p)-e+(e-.5)*Zr(e),p+=Zr(Aue)):(p=e*Zr(r)-r,o=0,p+=Zr(lc(e,r,o)/e)):p=Zr(p)+Eue(e)),p>tar?_ue:Oue(p);switch(c=e<30&&e<=r+1&&r<tar,c?(y=Nue(e),g=y===e,v=g?!1:Knr(y-e)===.5):g=v=!1,g&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<Sue&&e>1?u=6:r<.5?-.4/Zr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=Knr((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=Tue(e,r),a===!1&&(p*=Ea(e));break;case 1:p=Iue(e,r),a===!1&&(p*=Ea(e));break;case 2:p=a?nar(e,r):iar(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:Ea(e),a||p>=1||ear*p>o?(o/=p,a||e<1||ear/e>o?(o*=-e,n=!0):o=0):o=0)),p*=lc(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=Lue(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?nar(e,r):iar(e,r),p!==0&&(p*=aar(e,r));break;case 5:p=Rue(e,r),r>=e&&(l=!l);break;case 6:p=a?rar(r,e)/Ea(e+1):rar(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:Ea(e),p=d-p),p}uar.exports=sar});var pc=s((YRe,far)=>{"use strict";var Fue=oar();far.exports=Fue});var lar=s(($Re,car)=>{"use strict";var Mue=pc(),gc=E(),Bue=R();function jue(r,e,t){return gc(r)||gc(e)||gc(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Bue?1:Mue(r*t,e)}car.exports=jue});var mar=s((ZRe,gar)=>{"use strict";var kue=_(),Cue=As().factory,Vue=pc(),par=E(),Uue=R();function Gue(r,e){if(par(r)||par(e)||r<0||e<=0)return kue(NaN);if(r===0)return Cue(0);return t;function t(i){return i<=0?0:i===Uue?1:Vue(i*e,r)}}gar.exports=Gue});var mc=s((QRe,har)=>{"use strict";var xue=b(),dar=lar(),Due=mar();xue(dar,"factory",Due);har.exports=dar});var qar=s((KRe,yar)=>{"use strict";var Hue=mc();function Wue(r,e){return Hue(r,e/2,.5)}yar.exports=Wue});var war=s((rLe,bar)=>{"use strict";var zue=mc().factory;function Xue(r){return zue(r/2,.5)}bar.exports=Xue});var Oar=s((eLe,Nar)=>{"use strict";var Jue=b(),Ear=qar(),Yue=war();Jue(Ear,"factory",Yue);Nar.exports=Ear});var Tar=s((tLe,_ar)=>{"use strict";var $ue=T(),Zue=S(),Que=Za(),Sar=q(),Aar=["values","indices","*"];function Kue(r,e){return $ue(e)?Zue(e,"returns")&&(r.returns=e.returns,Que(Aar,r.returns)===-1)?new TypeError(Sar('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Aar.join('", "'),r.returns)):null:new TypeError(Sar("invalid argument. Options argument must be an object. Value: `%s`.",e))}_ar.exports=Kue});var Rar=s((iLe,Iar)=>{"use strict";var roe=S();function eoe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),roe(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Iar.exports=eoe});var Par=s((nLe,Lar)=>{"use strict";var toe=S();function ioe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),toe(t,n)?t[n].push(a):t[n]=[a];return t}Lar.exports=ioe});var Mar=s((aLe,Far)=>{"use strict";var noe=S();function aoe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),noe(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Far.exports=aoe});var Car=s((sLe,kar)=>{"use strict";var Bar=Br(),jar=q(),soe=Tar(),uoe=Rar(),ooe=Par(),foe=Mar();function voe(r,e,t){var i,n,a;if(!Bar(r))throw new TypeError(jar("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=soe(i,e),n)throw n;a=t}if(!Bar(a))throw new TypeError(jar("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?uoe(r,a):i.returns==="indices"?ooe(r,a):foe(r,a)}kar.exports=voe});var Uar=s((uLe,Var)=>{"use strict";var coe=Car();Var.exports=coe});var xar=s((oLe,Gar)=>{"use strict";function loe(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}Gar.exports=loe});var War=s((fLe,Har)=>{"use strict";var poe=dr(),goe=M().isPrimitive,moe=T(),doe=fr(),Dar=S(),dc=q();function hoe(r,e){return moe(e)?Dar(e,"alpha")&&(r.alpha=e.alpha,!goe(r.alpha)||doe(r.alpha))?new TypeError(dc("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Dar(e,"groups")&&(r.groups=e.groups,!poe(r.groups))?new TypeError(dc("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(dc("invalid argument. Options argument must be an object. Value: `%s`.",e))}Har.exports=hoe});var Qar=s((vLe,Zar)=>{"use strict";var zar=E(),to=Cr(),Xar=D(),yoe=Y(),Jar=Z2(),qoe=Vi(),Yar=g0(),boe=k2(),woe=m0(),Eoe=qoe+1,$ar=1e308;function Noe(r,e){var t,i;return zar(r)||zar(e)||to(e)?NaN:to(r)||r===0||e<woe||yoe(r)>Eoe&&e<=0?r:e>Yar?0*r:e<boe?(t=Xar(10,-(e+Yar)),i=r*$ar*t,to(i)?r:Jar(i)/$ar/t):(t=Xar(10,-e),i=r*t,to(i)?r:Jar(i)/t)}Zar.exports=Noe});var r0r=s((cLe,Kar)=>{"use strict";var Ooe=Qar();Kar.exports=Ooe});var i0r=s((lLe,t0r)=>{"use strict";var Soe=te(),Aoe=T(),_oe=cr().isPrimitive,e0r=S(),hc=q(),yc=r0r();function Toe(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Aoe(r))throw new TypeError(hc("invalid argument. First argument must be an object. Value: `%s`.",r));if(e0r(r,"digits")){if(!Soe(r.digits))throw new TypeError(hc("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(e0r(r,"decision")){if(!_oe(r.decision))throw new TypeError(hc("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+yc(this.pValue,-t)+`
`,i+="    statistic: "+yc(this.statistic,-t)+`
`,i+="    df: "+yc(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}t0r.exports=Toe});var s0r=s((pLe,a0r)=>{"use strict";var Ioe=Br(),Roe=T(),ui=rr(),Loe=Pi(),io=q(),Poe=Oar(),Foe=Uar(),n0r=P(),Moe=xar(),Boe=War(),joe=i0r();function koe(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O;if(v=[],e=arguments.length,f={},Roe(arguments[e-1])&&(r=arguments[e-1],e-=1,g=Boe(f,r),g))throw g;if(f.groups){if(n=Foe(arguments[0],f.groups),i=Loe(n),e=i.length,e<2)throw new Error(io("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)v.push(n[i[O]])}else for(O=0;O<e;O++)v.push(arguments[O]);for(u=0,t=0,o=0,h=0,y=new Array(e),N=y.slice(),O=0;O<e;O++){if(p=v[O],!Ioe(p))throw new TypeError(io("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(io("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));y[O]=p.length-1,u+=y[O],t+=1/y[O],N[O]=Moe(p),o+=y[O]*N[O],h+=y[O]*n0r(N[O])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(io("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*n0r(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-Poe(l,m),d={},ui(d,"rejected",c<=a),ui(d,"alpha",a),ui(d,"pValue",c),ui(d,"statistic",l),ui(d,"df",m),ui(d,"method","Bartlett's test of equal variances"),ui(d,"print",joe),d}a0r.exports=koe});var o0r=s((gLe,u0r)=>{"use strict";var Coe=s0r();u0r.exports=Coe});var v0r=s((mLe,f0r)=>{"use strict";var qc=E(),Voe=gt();function Uoe(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,qc(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],qc(v)){a=v;break}(v>a||v===a&&Voe(v))&&(a=v),i[o]=a,o+=n}if(qc(a))for(f;f<r;f++)i[o]=a,o+=n;return i}f0r.exports=Uoe});var l0r=s((dLe,c0r)=>{"use strict";var bc=E(),Goe=gt();function xoe(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,bc(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],bc(c)){o=c;break}(c>o||c===o&&Goe(c))&&(o=c),n[f]=o,f+=a}if(bc(o))for(l;l<r;l++)n[f]=o,f+=a;return n}c0r.exports=xoe});var m0r=s((hLe,g0r)=>{"use strict";var Doe=b(),p0r=v0r(),Hoe=l0r();Doe(p0r,"ndarray",Hoe);g0r.exports=p0r});var h0r=s((yLe,d0r)=>{"use strict";var Woe=m0r();d0r.exports=Woe});var q0r=s((qLe,y0r)=>{"use strict";var zoe=E(),Xoe=gt();function Joe(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],zoe(a))return a;(a>i||a===i&&Xoe(a))&&(i=a)}return i}y0r.exports=Joe});var w0r=s((bLe,b0r)=>{"use strict";var Yoe=E(),$oe=gt();function Zoe(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Yoe(u))return u;(u>n||u===n&&$oe(u))&&(n=u)}return n}b0r.exports=Zoe});var O0r=s((wLe,N0r)=>{"use strict";var Qoe=b(),E0r=q0r(),Koe=w0r();Qoe(E0r,"ndarray",Koe);N0r.exports=E0r});var A0r=s((ELe,S0r)=>{"use strict";var r1e=O0r();S0r.exports=r1e});var I0r=s((NLe,T0r)=>{"use strict";var _0r=E(),e1e=gt();function t1e(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],_0r(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],_0r(v))return v;(v>a||v===a&&e1e(v))&&(a=v)}return a}T0r.exports=t1e});var P0r=s((OLe,L0r)=>{"use strict";var R0r=E(),i1e=gt();function n1e(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],R0r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],R0r(c))return c;(c>o||c===o&&i1e(c))&&(o=c)}return o}L0r.exports=n1e});var B0r=s((SLe,M0r)=>{"use strict";var a1e=b(),F0r=I0r(),s1e=P0r();a1e(F0r,"ndarray",s1e);M0r.exports=F0r});var k0r=s((ALe,j0r)=>{"use strict";var u1e=ai(),o1e=U(),wc=E();function f1e(r,e,t){var i,n;return wc(r)||wc(e)||wc(t)||t<0?NaN:t===0?r<e?0:1:(i=t*o1e(2),n=r-e,.5*u1e(-n/i))}j0r.exports=f1e});var V0r=s((_Le,C0r)=>{"use strict";var v1e=_(),c1e=As().factory,Ec=E(),l1e=U(),p1e=ai();function g1e(r,e){var t;if(Ec(r)||Ec(e)||e<0)return v1e(NaN);if(e===0)return c1e(r);return t=e*l1e(2),i;function i(n){var a;return Ec(n)?NaN:(a=n-r,.5*p1e(-a/t))}}C0r.exports=g1e});var x0r=s((TLe,G0r)=>{"use strict";var m1e=b(),U0r=k0r(),d1e=V0r();m1e(U0r,"factory",d1e);G0r.exports=U0r});var W0r=s((ILe,H0r)=>{"use strict";var D0r=E(),h1e=P(),y1e=ft(),q1e=ec();function b1e(r,e){return D0r(r)||D0r(e)||e<=0?NaN:.5*h1e(y1e*q1e*e*e)}H0r.exports=b1e});var X0r=s((RLe,z0r)=>{"use strict";var w1e=W0r();z0r.exports=w1e});var $0r=s((LLe,Y0r)=>{"use strict";var J0r=E();function E1e(r,e){return J0r(r)||J0r(e)||e<=0?NaN:0}Y0r.exports=E1e});var Q0r=s((PLe,Z0r)=>{"use strict";var N1e=$0r();Z0r.exports=N1e});var rsr=s((FLe,K0r)=>{"use strict";var O1e=z(),S1e=[A1e,_1e,T1e,I1e,R1e,L1e,P1e,F1e,M1e,B1e,j1e,k1e,C1e,V1e,U1e,G1e,x1e,D1e,H1e,W1e,z1e,X1e,J1e,Y1e,$1e,Z1e,Q1e,K1e,r2e,e2e,t2e,i2e,n2e,a2e,s2e,u2e,o2e,f2e,v2e,c2e,l2e,p2e,g2e,m2e,d2e,h2e,y2e,q2e,b2e,w2e,E2e,N2e,O2e,S2e,A2e,_2e,T2e,I2e,R2e,L2e,P2e,F2e,M2e,B2e,j2e,k2e,C2e,V2e,U2e,G2e,x2e,D2e,H2e,W2e,z2e,X2e,J2e,Y2e,$2e,Z2e,Q2e,K2e,r3e,e3e,t3e,i3e,n3e,a3e,s3e,u3e,o3e,f3e,v3e,c3e,l3e,p3e,g3e,m3e,d3e,h3e,y3e];function A1e(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function _1e(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function T1e(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function I1e(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function R1e(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function L1e(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function P1e(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function F1e(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function M1e(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function B1e(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function j1e(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function k1e(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function C1e(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function V1e(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function U1e(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function G1e(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function x1e(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function D1e(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function H1e(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function W1e(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function z1e(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function X1e(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function J1e(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function Y1e(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function $1e(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Z1e(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function Q1e(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function K1e(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function r2e(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function e2e(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function t2e(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function i2e(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function n2e(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function a2e(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function s2e(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function u2e(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function o2e(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function f2e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function v2e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function c2e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function l2e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function p2e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function g2e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function m2e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function d2e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function h2e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function y2e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function q2e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function b2e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function w2e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function E2e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function N2e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function O2e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function S2e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function A2e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function _2e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function T2e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function I2e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function R2e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function L2e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function P2e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function F2e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function M2e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function B2e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function j2e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function k2e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function C2e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function V2e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function U2e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function G2e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function x2e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function D2e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function H2e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function W2e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function z2e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function X2e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function J2e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function Y2e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function $2e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Z2e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Q2e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function K2e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function r3e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function e3e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function t3e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function i3e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function n3e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function a3e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function s3e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function u3e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function o3e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function f3e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function v3e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function c3e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function l3e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function p3e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function g3e(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function m3e(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function d3e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function h3e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function y3e(){return 1}function q3e(r){var e=O1e(r),t=S1e[e];return t(2*r-(2*e+1))}K0r.exports=q3e});var asr=s((MLe,nsr)=>{"use strict";var esr=sr(),b3e=R(),tsr=rsr(),isr=.5641895835477563;function w3e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?isr/r:(e=r*r,isr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):tsr(400/(4+r)):r<-26.7?b3e:(e=r*r,r<-6.1?2*esr(e):2*esr(e)-tsr(400/(4-r)))}nsr.exports=w3e});var Nc=s((BLe,ssr)=>{"use strict";var E3e=asr();ssr.exports=E3e});var fsr=s((jLe,osr)=>{"use strict";var N3e=P(),O3e=ut(),S3e=q0(),A3e=ai(),_3e=Nc(),T3e=V(),Oc=E(),usr=.7071067811865475;function I3e(r,e,t){var i;return Oc(r)||Oc(e)||Oc(t)||t<0?NaN:t===0?r<e?T3e:0:(i=(r-e)/t,i<-1?N3e(_3e(-i*usr)/2)-S3e(i)/2:O3e(-A3e(i*usr)/2))}osr.exports=I3e});var lsr=s((kLe,csr)=>{"use strict";var vsr=E(),R3e=V();function L3e(r,e){return vsr(r)||vsr(e)?NaN:r<e?R3e:0}csr.exports=L3e});var msr=s((CLe,gsr)=>{"use strict";var P3e=_(),psr=E(),F3e=V();function M3e(r){if(psr(r))return P3e(NaN);return e;function e(t){return psr(t)?NaN:t<r?F3e:0}}gsr.exports=M3e});var ysr=s((VLe,hsr)=>{"use strict";var B3e=b(),dsr=lsr(),j3e=msr();B3e(dsr,"factory",j3e);hsr.exports=dsr});var Esr=s((ULe,wsr)=>{"use strict";var k3e=_(),C3e=ysr().factory,qsr=E(),V3e=ut(),U3e=q0(),G3e=ai(),x3e=Nc(),D3e=P(),bsr=.7071067811865475;function H3e(r,e){if(qsr(r)||qsr(e)||e<0)return k3e(NaN);if(e===0)return C3e(r);return t;function t(i){var n=(i-r)/e;return n<-1?D3e(x3e(-n*bsr)/2)-U3e(n)/2:V3e(-G3e(n*bsr)/2)}}wsr.exports=H3e});var Ssr=s((GLe,Osr)=>{"use strict";var W3e=b(),Nsr=fsr(),z3e=Esr();W3e(Nsr,"factory",z3e);Osr.exports=Nsr});var Sc=s((xLe,Asr)=>{"use strict";var X3e=1.8378770664093456;Asr.exports=X3e});var Isr=s((DLe,Tsr)=>{"use strict";var J3e=P(),_sr=D(),Y3e=Sc(),$3e=V(),Z3e=R(),Ac=E();function Q3e(r,e,t){var i,n,a;return Ac(r)||Ac(e)||Ac(t)||t<0?NaN:t===0?r===e?Z3e:$3e:(i=_sr(t,2),n=-.5*(2*J3e(t)+Y3e),a=-1/(2*i),n+a*_sr(r-e,2))}Tsr.exports=Q3e});var Psr=s((HLe,Lsr)=>{"use strict";var K3e=R(),rfe=V(),Rsr=E();function efe(r,e){return Rsr(r)||Rsr(e)?NaN:r===e?K3e:rfe}Lsr.exports=efe});var Bsr=s((WLe,Msr)=>{"use strict";var tfe=_(),ife=R(),nfe=V(),Fsr=E();function afe(r){if(Fsr(r))return tfe(NaN);return e;function e(t){return Fsr(t)?NaN:t===r?ife:nfe}}Msr.exports=afe});var Csr=s((zLe,ksr)=>{"use strict";var sfe=b(),jsr=Psr(),ufe=Bsr();sfe(jsr,"factory",ufe);ksr.exports=jsr});var xsr=s((XLe,Gsr)=>{"use strict";var ofe=_(),ffe=Csr().factory,vfe=Sc(),Vsr=E(),Usr=D(),cfe=P();function lfe(r,e){var t,i,n;if(Vsr(r)||Vsr(e)||e<0)return ofe(NaN);if(e===0)return ffe(r);return t=Usr(e,2),i=-.5*(2*cfe(e)+vfe),n=-1/(2*t),a;function a(u){return i+n*Usr(u-r,2)}}Gsr.exports=lfe});var Wsr=s((JLe,Hsr)=>{"use strict";var pfe=b(),Dsr=Isr(),gfe=xsr();pfe(Dsr,"factory",gfe);Hsr.exports=Dsr});var Jsr=s((YLe,Xsr)=>{"use strict";var zsr=E();function mfe(r,e){return zsr(r)||zsr(e)||e<=0?NaN:r}Xsr.exports=mfe});var $sr=s(($Le,Ysr)=>{"use strict";var dfe=Jsr();Ysr.exports=dfe});var Ksr=s((ZLe,Qsr)=>{"use strict";var Zsr=E();function hfe(r,e){return Zsr(r)||Zsr(e)||e<=0?NaN:r}Qsr.exports=hfe});var eur=s((QLe,rur)=>{"use strict";var yfe=Ksr();rur.exports=yfe});var iur=s((KLe,tur)=>{"use strict";var _c=E(),qfe=sr(),bfe=D();function wfe(r,e,t){return _c(r)||_c(e)||_c(t)||t<=0?NaN:qfe(e*r+.5*bfe(t*r,2))}tur.exports=wfe});var aur=s((rPe,nur)=>{"use strict";var Efe=_(),Tc=E(),Nfe=sr(),Ofe=D();function Sfe(r,e){if(Tc(r)||Tc(e)||e<=0)return Efe(NaN);return t;function t(i){return Tc(i)?NaN:Nfe(r*i+.5*Ofe(e*i,2))}}nur.exports=Sfe});var our=s((ePe,uur)=>{"use strict";var Afe=b(),sur=iur(),_fe=aur();Afe(sur,"factory",_fe);uur.exports=sur});var cur=s((tPe,vur)=>{"use strict";var fur=E();function Tfe(r,e){return fur(r)||fur(e)||e<=0?NaN:r}vur.exports=Tfe});var pur=s((iPe,lur)=>{"use strict";var Ife=cur();lur.exports=Ife});var dur=s((nPe,mur)=>{"use strict";var Rfe=sr(),gur=D(),Lfe=U(),Pfe=ft(),Ffe=R(),Ic=E();function Mfe(r,e,t){var i,n,a;return Ic(r)||Ic(e)||Ic(t)||t<0?NaN:t===0?r===e?Ffe:0:(i=gur(t,2),n=1/Lfe(i*Pfe),a=-1/(2*i),n*Rfe(a*gur(r-e,2)))}mur.exports=Mfe});var qur=s((aPe,yur)=>{"use strict";var Bfe=R(),hur=E();function jfe(r,e){return hur(r)||hur(e)?NaN:r===e?Bfe:0}yur.exports=jfe});var Eur=s((sPe,wur)=>{"use strict";var kfe=_(),Cfe=R(),bur=E();function Vfe(r){if(bur(r))return kfe(NaN);return e;function e(t){return bur(t)?NaN:t===r?Cfe:0}}wur.exports=Vfe});var Sur=s((uPe,Our)=>{"use strict";var Ufe=b(),Nur=qur(),Gfe=Eur();Ufe(Nur,"factory",Gfe);Our.exports=Nur});var Tur=s((oPe,_ur)=>{"use strict";var xfe=_(),Dfe=Sur().factory,Rc=E(),Hfe=U(),Wfe=sr(),Aur=D(),zfe=ft();function Xfe(r,e){var t,i,n;if(Rc(r)||Rc(e)||e<0)return xfe(NaN);if(e===0)return Dfe(r);return t=Aur(e,2),i=1/Hfe(t*zfe),n=-1/(2*t),a;function a(u){return Rc(u)?NaN:i*Wfe(n*Aur(u-r,2))}}_ur.exports=Xfe});var Lur=s((fPe,Rur)=>{"use strict";var Jfe=b(),Iur=dur(),Yfe=Tur();Jfe(Iur,"factory",Yfe);Rur.exports=Iur});var Mur=s((vPe,Fur)=>{"use strict";var Pur=E();function $fe(r,e){return Pur(r)||Pur(e)||e<=0?NaN:0}Fur.exports=$fe});var jur=s((cPe,Bur)=>{"use strict";var Zfe=Mur();Bur.exports=Zfe});var Vur=s((lPe,Cur)=>{"use strict";var kur=E();function Qfe(r,e){return kur(r)||kur(e)||e<=0?NaN:e}Cur.exports=Qfe});var Gur=s((pPe,Uur)=>{"use strict";var Kfe=Vur();Uur.exports=Kfe});var Hur=s((gPe,Dur)=>{"use strict";var xur=E();function rve(r,e){return xur(r)||xur(e)||e<=0?NaN:e*e}Dur.exports=rve});var zur=s((mPe,Wur)=>{"use strict";var eve=Hur();Wur.exports=eve});var Jur=s((dPe,Xur)=>{"use strict";var Pr=rr(),tve=x0r(),ive=X0r(),nve=Q0r(),ave=Ssr(),sve=Wsr(),uve=$sr(),ove=eur(),fve=our(),vve=pur(),cve=Lur(),lve=mv(),pve=jur(),gve=Gur(),mve=zur();function dve(r){return Pr(r,"cdf",tve),Pr(r,"entropy",ive),Pr(r,"kurtosis",nve),Pr(r,"logcdf",ave),Pr(r,"logpdf",sve),Pr(r,"mean",uve),Pr(r,"median",ove),Pr(r,"mgf",fve),Pr(r,"mode",vve),Pr(r,"pdf",cve),Pr(r,"quantile",lve),Pr(r,"skewness",pve),Pr(r,"stdev",gve),Pr(r,"variance",mve),r}Xur.exports=dve});var $ur=s((hPe,Yur)=>{"use strict";var hve=rr(),yve=Jur();function qve(r){return hve(r,"normal",yve({})),r}Yur.exports=qve});var Qur=s((yPe,Zur)=>{"use strict";var Na=rr(),bve=o0r(),wve=h0r().ndarray,Eve=A0r().ndarray,Nve=B0r().ndarray,Ove=$ur();function Sve(r){return Na(r,"bartlettTest",bve),Na(r,"cumax",wve),Na(r,"max",Eve),Na(r,"mskmax",Nve),Na(r,"dists",Ove({})),r}Zur.exports=Sve});var ror=s((qPe,Kur)=>{"use strict";var Ave=Q().isPrimitive,_ve=q();function Tve(r){return e;function e(t){if(!Ave(t))throw new TypeError(_ve("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Kur.exports=Tve});var tor=s((bPe,eor)=>{"use strict";var Ive=ror();eor.exports=Ive});var sor=s((wPe,aor)=>{"use strict";var ior=Q().isPrimitive,nor=q();function Rve(r){return e;function e(t,i){if(!ior(t))throw new TypeError(nor("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!ior(i))throw new TypeError(nor("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}aor.exports=Rve});var oor=s((EPe,uor)=>{"use strict";var Lve=sor();uor.exports=Lve});var cor=s((NPe,vor)=>{"use strict";var Lc=Q().isPrimitive,Pc=q();function Pve(r){return e;function e(t,i,n){if(!Lc(t))throw new TypeError(Pc("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Lc(i))throw new TypeError(Pc("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Lc(n))throw new TypeError(Pc("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}vor.exports=Pve});var por=s((OPe,lor)=>{"use strict";var Fve=cor();lor.exports=Fve});var mor=s((SPe,gor)=>{"use strict";var Fc=rr(),Mve=tor(),Bve=oor(),jve=por();function kve(r){return Fc(r,"s_o",Mve),Fc(r,"ss_o",Bve),Fc(r,"sss_o",jve),r}gor.exports=kve});var hor=s((APe,dor)=>{"use strict";function Cve(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}dor.exports=Cve});var no=s((_Pe,yor)=>{"use strict";var Vve=hor();yor.exports=Vve});var bor=s((TPe,qor)=>{"use strict";var Uve=no(),Gve=ti(),ao=vt(),xve=pt(),Dve=/\s+/g,Hve=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Wve=/(?:\s|^)([^\s]+)(?=\s|$)/g,zve=/([a-z0-9])([A-Z])/g;function Xve(r,e,t){return e=Gve(e),t===0?e:Uve(e)}function Jve(r){return r=ao(r,Hve," "),r=ao(r,Dve," "),r=ao(r,zve,"$1 $2"),r=xve(r),ao(r,Wve,Xve)}qor.exports=Jve});var Eor=s((IPe,wor)=>{"use strict";var Yve=bor();wor.exports=Yve});var Oor=s((RPe,Nor)=>{"use strict";var $ve=Q().isPrimitive,Zve=q(),Qve=Eor();function Kve(r){if(!$ve(r))throw new TypeError(Zve("invalid argument. First argument must be a string. Value: `%s`.",r));return Qve(r)}Nor.exports=Kve});var Aor=s((LPe,Sor)=>{"use strict";var rce=Oor();Sor.exports=rce});var Tor=s((PPe,_or)=>{"use strict";var ece=Q().isPrimitive,tce=q(),ice=no();function nce(r){if(!ece(r))throw new TypeError(tce("invalid argument. First argument must be a string. Value: `%s`.",r));return ice(r)}_or.exports=nce});var Ror=s((FPe,Ior)=>{"use strict";var ace=Tor();Ior.exports=ace});var Por=s((MPe,Lor)=>{"use strict";function sce(r){return r.toUpperCase()}Lor.exports=sce});var Mor=s((BPe,For)=>{"use strict";var uce=Por();For.exports=uce});var jor=s((jPe,Bor)=>{"use strict";var oce=Mor(),Mc=vt(),fce=pt(),vce=/\s+/g,cce=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,lce=/([a-z0-9])([A-Z])/g;function pce(r){return r=Mc(r,cce," "),r=Mc(r,lce,"$1 $2"),r=fce(r),r=Mc(r,vce,"_"),oce(r)}Bor.exports=pce});var Cor=s((kPe,kor)=>{"use strict";var gce=jor();kor.exports=gce});var Uor=s((CPe,Vor)=>{"use strict";var mce=Q().isPrimitive,dce=q(),hce=Cor();function yce(r){if(!mce(r))throw new TypeError(dce("invalid argument. Must provide a string. Value: `%s`.",r));return hce(r)}Vor.exports=yce});var xor=s((VPe,Gor)=>{"use strict";var qce=Uor();Gor.exports=qce});var Hor=s((UPe,Dor)=>{"use strict";var bce=ti(),Bc=vt(),wce=pt(),Ece=/\s+/g,Nce=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Oce=/([a-z0-9])([A-Z])/g;function Sce(r){return r=Bc(r,Nce," "),r=Bc(r,Oce,"$1 $2"),r=wce(r),r=Bc(r,Ece,"-"),bce(r)}Dor.exports=Sce});var zor=s((GPe,Wor)=>{"use strict";var Ace=Hor();Wor.exports=Ace});var Jor=s((xPe,Xor)=>{"use strict";var _ce=Q().isPrimitive,Tce=q(),Ice=zor();function Rce(r){if(!_ce(r))throw new TypeError(Tce("invalid argument. Must provide a string. Value: `%s`.",r));return Ice(r)}Xor.exports=Rce});var $or=s((DPe,Yor)=>{"use strict";var Lce=Jor();Yor.exports=Lce});var Qor=s((HPe,Zor)=>{"use strict";var Pce=Q().isPrimitive,Fce=q(),Mce=ti();function Bce(r){if(!Pce(r))throw new TypeError(Fce("invalid argument. Must provide a string. Value: `%s`.",r));return Mce(r)}Zor.exports=Bce});var r1r=s((WPe,Kor)=>{"use strict";var jce=Qor();Kor.exports=jce});var t1r=s((zPe,e1r)=>{"use strict";var kce=no(),Cce=ti(),so=vt(),Vce=pt(),Uce=/\s+/g,Gce=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,xce=/(?:\s|^)([^\s]+)(?=\s|$)/g,Dce=/([a-z0-9])([A-Z])/g;function Hce(r,e){return kce(Cce(e))}function Wce(r){return r=so(r,Gce," "),r=so(r,Uce," "),r=so(r,Dce,"$1 $2"),r=Vce(r),so(r,xce,Hce)}e1r.exports=Wce});var n1r=s((XPe,i1r)=>{"use strict";var zce=t1r();i1r.exports=zce});var s1r=s((JPe,a1r)=>{"use strict";var Xce=Q().isPrimitive,Jce=q(),Yce=n1r();function $ce(r){if(!Xce(r))throw new TypeError(Jce("invalid argument. First argument must be a string. Value: `%s`.",r));return Yce(r)}a1r.exports=$ce});var o1r=s((YPe,u1r)=>{"use strict";var Zce=s1r();u1r.exports=Zce});var v1r=s(($Pe,f1r)=>{"use strict";var Qce=ti(),jc=vt(),Kce=pt(),rle=/\s+/g,ele=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,tle=/([a-z0-9])([A-Z])/g;function ile(r){return r=jc(r,ele," "),r=jc(r,tle,"$1 $2"),r=Kce(r),r=jc(r,rle,"_"),Qce(r)}f1r.exports=ile});var l1r=s((ZPe,c1r)=>{"use strict";var nle=v1r();c1r.exports=nle});var g1r=s((QPe,p1r)=>{"use strict";var ale=Q().isPrimitive,sle=q(),ule=l1r();function ole(r){if(!ale(r))throw new TypeError(sle("invalid argument. Must provide a string. Value: `%s`.",r));return ule(r)}p1r.exports=ole});var d1r=s((KPe,m1r)=>{"use strict";var fle=g1r();m1r.exports=fle});var q1r=s((rFe,y1r)=>{"use strict";var vle=T(),h1r=S(),cle=cr().isPrimitive,lle=Q().isPrimitive,kc=q();function ple(r,e){return vle(e)?h1r(e,"flags")&&(r.flags=e.flags,!lle(r.flags))?new TypeError(kc("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):h1r(e,"capture")&&(r.capture=e.capture,!cle(r.capture))?new TypeError(kc("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(kc("invalid argument. Options argument must be an object. Value: `%s`.",e))}y1r.exports=ple});var uo=s((eFe,w1r)=>{"use strict";var gle=q1r(),b1r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function mle(r){var e,t;if(arguments.length>0){if(e={},t=gle(e,r),t)throw t;return e.capture?new RegExp("("+b1r+")",e.flags):new RegExp(b1r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}w1r.exports=mle});var N1r=s((tFe,E1r)=>{"use strict";var dle=uo(),hle=dle({capture:!0});E1r.exports=hle});var S1r=s((iFe,O1r)=>{"use strict";var yle=uo(),qle=yle();O1r.exports=qle});var T1r=s((nFe,_1r)=>{"use strict";var A1r=b(),Cc=uo(),ble=N1r(),wle=S1r();A1r(Cc,"REGEXP",wle);A1r(Cc,"REGEXP_CAPTURE",ble);_1r.exports=Cc});var R1r=s((aFe,I1r)=>{"use strict";var Ele=T1r().REGEXP;function Nle(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),Ele.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}I1r.exports=Nle});var P1r=s((sFe,L1r)=>{"use strict";var Ole=R1r();L1r.exports=Ole});var M1r=s((uFe,F1r)=>{"use strict";var Sle=Q().isPrimitive,Ale=q(),_le=P1r();function Tle(r){if(!Sle(r))throw new TypeError(Ale("invalid argument. Must provide a string. Value: `%s`.",r));return _le(r)}F1r.exports=Tle});var j1r=s((oFe,B1r)=>{"use strict";var Ile=M1r();B1r.exports=Ile});var C1r=s((fFe,k1r)=>{"use strict";function Rle(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}k1r.exports=Rle});var U1r=s((vFe,V1r)=>{"use strict";var Lle=C1r();V1r.exports=Lle});var x1r=s((cFe,G1r)=>{"use strict";var Ple=Q().isPrimitive,Fle=q(),Mle=U1r();function Ble(r){if(!Ple(r))throw new TypeError(Fle("invalid argument. First argument must be a string. Value: `%s`.",r));return Mle(r)}G1r.exports=Ble});var H1r=s((lFe,D1r)=>{"use strict";var jle=x1r();D1r.exports=jle});var z1r=s((pFe,W1r)=>{"use strict";var kle=Q().isPrimitive,Cle=q();function Vle(r){if(!kle(r))throw new TypeError(Cle("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}W1r.exports=Vle});var J1r=s((gFe,X1r)=>{"use strict";var Ule=z1r();X1r.exports=Ule});var $1r=s((mFe,Y1r)=>{"use strict";var ce=rr(),Gle=Aor(),xle=Ror(),Dle=xor(),Hle=$or(),Wle=r1r(),zle=o1r(),Xle=d1r(),Jle=j1r(),Yle=H1r(),$le=J1r();function Zle(r){return ce(r,"camelcase",Gle),ce(r,"capitalize",xle),ce(r,"constantcase",Dle),ce(r,"kebabcase",Hle),ce(r,"lowercase",Wle),ce(r,"pascalcase",zle),ce(r,"snakecase",Xle),ce(r,"startcase",Jle),ce(r,"uncapitalize",Yle),ce(r,"uppercase",$le),r}Y1r.exports=Zle});var Q1r=s((dFe,Z1r)=>{"use strict";var Qle=rr(),Kle=mor(),r6e=$1r();function e6e(r){return Qle(r,"tools",Kle({})),r=r6e(r),r}Z1r.exports=e6e});var r2r=s((hFe,K1r)=>{"use strict";var le=rr(),t6e=ch(),i6e=Ab(),n6e=Bb(),a6e=PN(),s6e=CF(),u6e=mU(),o6e=Ker(),f6e=ftr(),v6e=Qur(),c6e=Q1r();function l6e(){var r={};return le(r,"array",t6e({})),le(r,"assert",i6e({})),le(r,"blas",n6e({})),le(r,"datasets",a6e({})),le(r,"math",s6e({})),le(r,"ndarray",u6e({})),le(r,"random",o6e({})),le(r,"simulate",f6e({})),le(r,"stats",v6e({})),le(r,"string",c6e({})),r}K1r.exports=l6e});var t2r=s((yFe,e2r)=>{"use strict";var p6e=b(),Vc=r2r();p6e(Vc,"CACHED",Vc());e2r.exports=Vc});var m6e=s((qFe,i2r)=>{var g6e=t2r().CACHED;i2r.exports=g6e});return m6e();})();
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
	var dtype;
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
	var ih;
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
	// Parse the provided indexing expression...
	ns.assert.isString( slice, 'Second argument' );
	s = ns.ndarray.seq2multislice( slice, obj.shape, true );
	if ( s.code ) {
		if ( s.code === 'ERR_SLICE_INVALID_SUBSEQUENCE' ) {
			throw new TypeError( 'invalid argument. Second argument is not a valid subsequence.' );
		}
		if ( s.code === 'ERR_SLICE_INVALID_INCREMENT' ) {
			throw new TypeError( 'invalid argument. Second argument is not a valid subsequence. The increment must be a non-zero integer value.' );
		}
		if ( s.code === 'ERR_SLICE_TOO_MANY_DIMENSIONS' ) {
			throw new TypeError( 'invalid argument. Second argument has more dimensions than the provided ndarray.' );
		}
		if ( s.code === 'ERR_SLICE_INSUFFICIENT_DIMENSIONS' ) {
			throw new TypeError( 'invalid argument. Second argument has fewer dimensions than the provided ndarray.' );
		}
		if ( s.code === 'ERR_SLICE_INVALID_ELLIPSIS' ) {
			throw new TypeError( 'invalid argument. Second argument is not a valid subsequence. A subsequence must only contain at most one ellipsis.' );
		}
		// NOTE: the following error check must come last due to fall-through when in non-strict mode...
		if ( s.code === 'ERR_SLICE_OUT_OF_BOUNDS' ) {
			if ( opts.strict ) {
				throw new RangeError( 'invalid argument. Second argument resolves to a slice exceeding index bounds.' );
			}
			// Repeat parsing, this time allowing for out-of-bounds slices:
			s = ns.ndarray.seq2multislice( slice, obj.shape, false );
		}
	}
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
	vhlen = 9 + ndims + strides.length + (5*1);
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
	// Set the header info...
	ih = 0;
	buf[ ih ] = 'ndarray';
	ih += 1;
	buf[ ih ] = 'shape';
	ih += 1;
	for ( i = 0; i < shape.length; i++ ) {
		buf[ ih ] = shape[ i ];
		ih += 1;
	}
	buf[ ih ] = 'strides';
	ih += 1;
	for ( i = 0; i < strides.length; i++ ) {
		buf[ ih ] = strides[ i ];
		ih += 1;
	}
	buf[ ih ] = 'offset';
	ih += 1;
	buf[ ih ] = offset;
	ih += 1;
	buf[ ih ] = 'order';
	ih += 1;
	buf[ ih ] = order;
	ih += 1;
	buf[ ih ] = 'dtype';
	ih += 1;
	buf[ ih ] = obj.dtype;
	ih += 1;
	buf[ ih ] = 'length';
	ih += 1;
	buf[ ih ] = vlen;
	ih += 1;
	buf[ ih ] = 'capacity';
	ih += 1;
	buf[ ih ] = len - vhlen;
	ih += 1;
	buf[ ih ] = 'data';
	if ( opts.as === 'row' ) {
		return [ buf ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( buf, [ len, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
	var offset;
	var ndims;
	var opts;
	var hlen;
	var arr;
	var len;
	var o;
	var i;
	opts = {
		'order': 'row-major',
		'dtype': 'generic',
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
	ndims = shape.length;
	if ( ndims === 0 ) {
		strides = [ 0 ];
	} else {
		strides = ns.ndarray.shape2strides( shape, opts.order );
	}
	// Calculate the header length:
	hlen = 9 + ndims + strides.length + (5*1);
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	if ( ndims === 0 ) {
		len = 1;
	} else {
		len = ns.ndarray.numel( shape );
	}
	arr = ns.array.zeros( hlen + len );
	offset = 0;
	arr[ offset ] = 'ndarray';
	offset += 1;
	arr[ offset ] = 'shape';
	offset += 1;
	for ( i = 0; i < ndims; i++ ) {
		arr[ offset ] = shape[ i ];
		offset += 1;
	}
	arr[ offset ] = 'strides';
	offset += 1;
	for ( i = 0; i < strides.length; i++ ) {
		arr[ offset ] = strides[ i ];
		offset += 1;
	}
	arr[ offset ] = 'offset';
	offset += 1;
	arr[ offset ] = 0;
	offset += 1;
	arr[ offset ] = 'order';
	offset += 1;
	arr[ offset ] = opts.order;
	offset += 1;
	arr[ offset ] = 'dtype';
	offset += 1;
	arr[ offset ] = 'number';
	offset += 1;
	arr[ offset ] = 'length';
	offset += 1;
	arr[ offset ] = len;
	offset += 1;
	arr[ offset ] = 'capacity';
	offset += 1;
	arr[ offset ] = len;
	offset += 1;
	arr[ offset ] = 'data';
	if ( opts.as === 'row' ) {
		return [ arr ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( arr, [ arr.length, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
	var arr;
	var len;
	var ix;
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
		// TODO: validate strides when ndims === 0
	}
	if ( opts.offset === null ) {
		opts.offset = ns.ndarray.strides2offset( opts.shape, opts.strides );
	} else {
		ns.assert.isNonNegativeInteger( opts.offset, 'Offset argument' );
	}
	len = data.length * data[ 0 ].length;
	// TODO: validate that, for zero-dimensional arrays, len >= 1
	if ( len > 0 ) {
		ns.assert.isBufferLengthCompatible( len, opts.shape, opts.strides, opts.offset ); 
	}
	// TODO: determine a means to abstract the following logic to a helper utility package
	// Calculate the header length:
	hlen = 9 + ndims + opts.strides.length + (5*1);
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	arr = ns.array.zeros( hlen + len );
	ix = 0;
	arr[ ix ] = 'ndarray';
	ix += 1;
	arr[ ix ] = 'shape';
	ix += 1;
	for ( i = 0; i < opts.shape.length; i++ ) {
		arr[ ix ] = opts.shape[ i ];
		ix += 1;
	}
	arr[ ix ] = 'strides';
	ix += 1;
	for ( i = 0; i < opts.strides.length; i++ ) {
		arr[ ix ] = opts.strides[ i ];
		ix += 1;
	}
	arr[ ix ] = 'offset';
	ix += 1;
	arr[ ix ] = opts.offset;
	ix += 1;
	arr[ ix ] = 'order';
	ix += 1;
	arr[ ix ] = opts.order;
	ix += 1;
	arr[ ix ] = 'dtype';
	ix += 1;
	arr[ ix ] = opts.dtype;
	ix += 1;
	arr[ ix ] = 'length';
	ix += 1;
	arr[ ix ] = ( ndims === 0 ) ? 1 : ns.ndarray.numel( opts.shape );
	ix += 1;
	arr[ ix ] = 'capacity';
	ix += 1;
	arr[ ix ] = len;
	ix += 1;
	arr[ ix ] = 'data';
	ix += 1;
	arr = ns.array.flatten2d.assign( data, arr, 1, ix );
	if ( opts.as === 'row' ) {
		return [ arr ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( arr, [ arr.length, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var hlen;
	var arr;
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
	ns.assert.isRange1d( x, 'First argument' );
	x = ns.array.flatten2d( x );
	// Resolve ndarray meta data...
	ns.assert.isString( x[ 0 ], 'First range element' );
	// TODO: check if x[0] === 'ndarray'
	for ( i = 0; i < x.length; i++ ) {
		o = ns.string.lowercase( x[ i ] );
		if ( o === 'shape' ) {
			i += 1;
			shape = [];
			for ( ; i < x.length; i++ ) {
				if ( !ns.assert.base.isNumber( x[ i ] ) ) {
					i -= 1;
					break;
				}
				shape.push( x[ i ] );
			}
		} else if ( o === 'strides' ) {
			i += 1;
			strides = [];
			for ( ; i < x.length; i++ ) {
				if ( !ns.assert.base.isNumber( x[ i ] ) ) {
					i -= 1;
					break;
				}
				strides.push( x[ i ] );
			}
		} else if ( o === 'offset' ) {
			i += 1;
			offset = x[ i ];
		} else if ( o === 'order' ) {
			i += 1;
			order = x[ i ];
		} else if ( o === 'dtype' || o === 'length' || o === 'capacity' ) {
			i += 1;
		} else if ( o === 'data' ) {
			i += 1;
			break;
		} else if ( o === 'ndarray' ) {
			// No-op...
		} else {
			throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Unrecognized meta data field.' );
		}
	}
	if ( !ns.assert.base.isArray( shape ) || ( shape.length && !ns.assert.base.isNonNegativeIntegerArray( shape ) ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Shape must only contain nonnegative integer values.' );
	}
	ndims = shape.length;
	if ( !ns.assert.base.isArray( strides ) || ( strides.length && !ns.assert.base.isIntegerArray( strides ) ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Strides must only contain integer values.' );
	}
	if ( ndims > 0 && strides.length !== ndims ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Number of strides does not match the number of dimensions.' );
	} else if ( ndims === 0 && ( strides.length !== 1 || strides[ 0 ] !== 0 ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. A zero-dimensional ndarray should have a single stride equal to 0.' );
	}
	if ( !ns.assert.base.isNonNegativeInteger( offset ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Offset must be a nonnegative integer.' );
	}
	// TODO: validate order
	// TODO: validate dtype
	// Calculate the header length:
	hlen = 9 + ndims + strides.length + (5*1);
	// Create an ndarray view, adjusting the offset to account for the header info:
	arr = new ns.ndarray.ndarray( 'generic', x, shape, strides, offset+hlen, order );
	if ( ndims === 0 ) {
		return [
			[ '[ ] =' ],
			[ arr.get() ]
		];
	}
	if ( ndims === 1 ) {
		out = [ [ '[ : ] =' ] ];
		if ( arr.length === 0 ) {
			out.push( [ '(empty)' ] );
			return out;
		}
		return out.concat( ns.ndarray.toArray( arr, [ arr.length, 1 ], [ 1, 1 ], 0, 'row-major' ) ); // TODO: replace with @stdlib/array/base equivalent
	}
	// Determine the number of rows and columns per matrix:
	dim = ndims - 2;
	N = shape[ dim ];
	M = shape[ dim+1 ];
	// Create an iterator which iterates over each row in the ndarray:
	it = ns.ndarray.iterRows( arr );
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
		idx = ns.ndarray.nextCartesianIndex.assign( shape, order, idx, dim-1, idx );
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
