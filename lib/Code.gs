/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Rc=s((ice,Lc)=>{"use strict";var v1r=typeof Object.defineProperty=="function"?Object.defineProperty:null;Lc.exports=v1r});var Fc=s((nce,Pc)=>{"use strict";var f1r=Rc();function c1r(){try{return f1r({},"x",{}),!0}catch{return!1}}Pc.exports=c1r});var Bc=s((ace,Mc)=>{"use strict";var l1r=Object.defineProperty;Mc.exports=l1r});var Ku=s((sce,kc)=>{"use strict";function p1r(r){return typeof r=="number"}kc.exports=p1r});var ro=s((uce,Cc)=>{"use strict";function g1r(r){return r[0]==="-"}function jc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function m1r(r,e,t){var i=!1,n=e-r.length;return n<0||(g1r(r)&&(i=!0,r=r.substr(1)),r=t?r+jc(n):jc(n)+r,i&&(r="-"+r)),r}Cc.exports=m1r});var xc=s((oce,Gc)=>{"use strict";var d1r=Ku(),Uc=ro(),h1r=String.prototype.toLowerCase,Vc=String.prototype.toUpperCase;function q1r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!d1r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Uc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Uc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Vc.call(r.specifier)?Vc.call(t):h1r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Gc.exports=q1r});var Dc=s((vce,Hc)=>{"use strict";function y1r(r){return typeof r=="string"}Hc.exports=y1r});var Xc=s((fce,zc)=>{"use strict";var b1r=Ku(),w1r=Math.abs,E1r=String.prototype.toLowerCase,Wc=String.prototype.toUpperCase,jt=String.prototype.replace,N1r=/e\+(\d)$/,O1r=/e-(\d)$/,S1r=/^(\d+)$/,A1r=/^(\d+)e/,_1r=/\.0$/,T1r=/\.0*e/,I1r=/(\..*[^0])0*e/;function L1r(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!b1r(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":w1r(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=jt.call(t,I1r,"$1e"),t=jt.call(t,T1r,"e"),t=jt.call(t,_1r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=jt.call(t,N1r,"e+0$1"),t=jt.call(t,O1r,"e-0$1"),r.alternate&&(t=jt.call(t,S1r,"$1."),t=jt.call(t,A1r,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Wc.call(r.specifier)?Wc.call(t):E1r.call(t),t}zc.exports=L1r});var $c=s((cce,Yc)=>{"use strict";function Jc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function R1r(r,e,t){var i=e-r.length;return i<0||(r=t?r+Jc(i):Jc(i)+r),r}Yc.exports=R1r});var Qc=s((lce,Zc)=>{"use strict";var P1r=xc(),F1r=Dc(),M1r=Xc(),B1r=$c(),k1r=ro(),j1r=String.fromCharCode,ma=isNaN,C1r=Array.isArray;function U1r(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V1r(r){var e,t,i,n,a,u,o,f,v;if(!C1r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],F1r(i))u+=i;else{if(e=i.precision!==void 0,i=U1r(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,ma(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,ma(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=P1r(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!ma(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ma(a)?String(i.arg):j1r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=M1r(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=k1r(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=B1r(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}Zc.exports=V1r});var r6=s((pce,Kc)=>{"use strict";var G1r=Qc();Kc.exports=G1r});var t6=s((gce,e6)=>{"use strict";var da=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x1r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function H1r(r){var e,t,i,n;for(t=[],n=0,i=da.exec(r);i;)e=r.slice(n,da.lastIndex-i[0].length),e.length&&t.push(e),t.push(x1r(i)),n=da.lastIndex,i=da.exec(r);return e=r.slice(n),e.length&&t.push(e),t}e6.exports=H1r});var n6=s((mce,i6)=>{"use strict";var D1r=t6();i6.exports=D1r});var s6=s((dce,a6)=>{"use strict";function W1r(r){return typeof r=="string"}a6.exports=W1r});var v6=s((hce,o6)=>{"use strict";var z1r=r6(),X1r=n6(),J1r=s6();function u6(r){var e,t,i;if(!J1r(r))throw new TypeError(u6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=X1r(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return z1r.apply(null,t)}o6.exports=u6});var y=s((qce,f6)=>{"use strict";var Y1r=v6();f6.exports=Y1r});var d6=s((yce,m6)=>{"use strict";var c6=y(),ai=Object.prototype,l6=ai.toString,p6=ai.__defineGetter__,g6=ai.__defineSetter__,$1r=ai.__lookupGetter__,Z1r=ai.__lookupSetter__;function Q1r(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||l6.call(r)==="[object Array]")throw new TypeError(c6("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||l6.call(t)==="[object Array]")throw new TypeError(c6("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&($1r.call(r,e)||Z1r.call(r,e)?(i=r.__proto__,r.__proto__=ai,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&p6&&p6.call(r,e,t.get),u&&g6&&g6.call(r,e,t.set),r}m6.exports=Q1r});var Ye=s((bce,h6)=>{"use strict";var K1r=Fc(),r2r=Bc(),e2r=d6(),eo;K1r()?eo=r2r:eo=e2r;h6.exports=eo});var y6=s((wce,q6)=>{"use strict";var t2r=Ye();function i2r(r,e,t){t2r(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}q6.exports=i2r});var b=s((Ece,b6)=>{"use strict";var n2r=y6();b6.exports=n2r});var E6=s((Nce,w6)=>{"use strict";var a2r=Ye();function s2r(r,e,t){a2r(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}w6.exports=s2r});var rr=s((Oce,N6)=>{"use strict";var u2r=E6();N6.exports=u2r});var S6=s((Sce,O6)=>{"use strict";function o2r(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}O6.exports=o2r});var ha=s((Ace,A6)=>{"use strict";var v2r=S6();A6.exports=v2r});var T6=s((_ce,_6)=>{"use strict";function f2r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}_6.exports=f2r});var to=s((Tce,I6)=>{"use strict";var c2r=T6();I6.exports=c2r});var R6=s((Ice,L6)=>{"use strict";var l2r=to();function p2r(r){return l2r(0,r)}L6.exports=p2r});var si=s((Lce,P6)=>{"use strict";var g2r=R6();P6.exports=g2r});var B6=s((Rce,M6)=>{"use strict";var ln=ha(),m2r=si(),F6=y();function d2r(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=m2r(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(F6("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",ln(e).join(", "),ln(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(F6("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",ln(e).join(", "),ln(t).join(", "),v))}return{ref:r,data:i,shape:ln(t),strides:a}}M6.exports=d2r});var io=s((Pce,k6)=>{"use strict";var h2r=B6();k6.exports=h2r});var U6=s((Fce,C6)=>{"use strict";var j6=io();function q2r(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,D,K;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=j6(r[0],e[0],N),A=F.data,O=F.strides,i=O[1],n=O[0],F=j6(r[1],e[1],N),D=F.data,O=F.strides,a=O[1],u=O[0],K=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,g=0,d=A[p],m=D[h],q=K[c],v=0;v<o;v++)q[v]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}C6.exports=q2r});var no=s((Mce,V6)=>{"use strict";var y2r=U6();V6.exports=y2r});var x6=s((Bce,G6)=>{"use strict";var ao=io();function b2r(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,D,K,G,Rr,Pr,or,kt,Ic;if(K=e[3],v=K[1],c=K[0],!(v<=0||c<=0))for(Rr=ao(r[0],e[0],K),Pr=Rr.data,G=Rr.strides,i=G[1],n=G[0],Rr=ao(r[1],e[1],K),or=Rr.data,G=Rr.strides,a=G[1],u=G[0],Rr=ao(r[2],e[2],K),kt=Rr.data,G=Rr.strides,o=G[1],f=G[0],Ic=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,q=0,O=Pr[h],F=or[m],A=kt[N],D=Ic[p],l=0;l<v;l++)D[l]=t(O[g],F[d],A[q]),g+=i,d+=a,q+=o;h+=n,m+=u,N+=f}}G6.exports=b2r});var so=s((kce,H6)=>{"use strict";var w2r=x6();H6.exports=w2r});var W6=s((jce,D6)=>{"use strict";function E2r(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}D6.exports=E2r});var qa=s((Cce,z6)=>{"use strict";var N2r=W6();z6.exports=N2r});var J6=s((Uce,X6)=>{"use strict";var O2r=to();function S2r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(O2r(r,i));return t}X6.exports=S2r});var ya=s((Vce,Y6)=>{"use strict";var A2r=J6();Y6.exports=A2r});var Z6=s((Gce,$6)=>{"use strict";function _2r(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}$6.exports=_2r});var K6=s((xce,Q6)=>{"use strict";var T2r=Z6();Q6.exports=T2r});var el=s((Hce,rl)=>{"use strict";function I2r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}rl.exports=I2r});var il=s((Dce,tl)=>{"use strict";function L2r(r,e,t,i){var n,a,u,o,f,v;for(a=r.length,u=r[0].length,n=i,f=0;f<a;f++)for(o=r[f],v=0;v<u;v++)e[n]=o[v],n+=t;return e}tl.exports=L2r});var uo=s((Wce,al)=>{"use strict";var R2r=b(),nl=el(),P2r=il();R2r(nl,"assign",P2r);al.exports=nl});var ul=s((zce,sl)=>{"use strict";var F2r=/./;sl.exports=F2r});var oo=s((Xce,ol)=>{"use strict";function M2r(r){return typeof r=="boolean"}ol.exports=M2r});var fl=s((Jce,vl)=>{"use strict";function B2r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}vl.exports=B2r});var ll=s((Yce,cl)=>{"use strict";var k2r=fl();cl.exports=k2r});var gl=s(($ce,pl)=>{"use strict";var j2r=ll(),C2r=j2r();function U2r(){return C2r&&typeof Symbol.toStringTag=="symbol"}pl.exports=U2r});var ui=s((Zce,ml)=>{"use strict";var V2r=gl();ml.exports=V2r});var vo=s((Qce,dl)=>{"use strict";var G2r=Object.prototype.toString;dl.exports=G2r});var ql=s((Kce,hl)=>{"use strict";var x2r=vo();function H2r(r){return x2r.call(r)}hl.exports=H2r});var bl=s((r6e,yl)=>{"use strict";var D2r=Object.prototype.hasOwnProperty;function W2r(r,e){return r==null?!1:D2r.call(r,e)}yl.exports=W2r});var S=s((e6e,wl)=>{"use strict";var z2r=bl();wl.exports=z2r});var Nl=s((t6e,El)=>{"use strict";var X2r=typeof Symbol=="function"?Symbol:void 0;El.exports=X2r});var fo=s((i6e,Ol)=>{"use strict";var J2r=Nl();Ol.exports=J2r});var _l=s((n6e,Al)=>{"use strict";var Sl=fo(),Y2r=typeof Sl=="function"?Sl.toStringTag:"";Al.exports=Y2r});var Il=s((a6e,Tl)=>{"use strict";var $2r=S(),pn=_l(),co=vo();function Z2r(r){var e,t,i;if(r==null)return co.call(r);t=r[pn],e=$2r(r,pn);try{r[pn]=void 0}catch{return co.call(r)}return i=co.call(r),e?r[pn]=t:delete r[pn],i}Tl.exports=Z2r});var er=s((s6e,Ll)=>{"use strict";var Q2r=ui(),K2r=ql(),r3r=Il(),lo;Q2r()?lo=r3r:lo=K2r;Ll.exports=lo});var Pl=s((u6e,Rl)=>{"use strict";var e3r=Boolean;Rl.exports=e3r});var po=s((o6e,Fl)=>{"use strict";var t3r=Pl();Fl.exports=t3r});var Bl=s((v6e,Ml)=>{"use strict";var i3r=Boolean.prototype.toString;Ml.exports=i3r});var jl=s((f6e,kl)=>{"use strict";var n3r=Bl();function a3r(r){try{return n3r.call(r),!0}catch{return!1}}kl.exports=a3r});var go=s((c6e,Cl)=>{"use strict";var s3r=ui(),u3r=er(),o3r=po(),v3r=jl(),f3r=s3r();function c3r(r){return typeof r=="object"?r instanceof o3r?!0:f3r?v3r(r):u3r(r)==="[object Boolean]":!1}Cl.exports=c3r});var Vl=s((l6e,Ul)=>{"use strict";var l3r=oo(),p3r=go();function g3r(r){return l3r(r)||p3r(r)}Ul.exports=g3r});var gr=s((p6e,xl)=>{"use strict";var Gl=b(),mo=Vl(),m3r=oo(),d3r=go();Gl(mo,"isPrimitive",m3r);Gl(mo,"isObject",d3r);xl.exports=mo});var Dl=s((g6e,Hl)=>{"use strict";function h3r(){return new Function("return this;")()}Hl.exports=h3r});var zl=s((m6e,Wl)=>{"use strict";var q3r=typeof self=="object"?self:null;Wl.exports=q3r});var Jl=s((d6e,Xl)=>{"use strict";var y3r=typeof window=="object"?window:null;Xl.exports=y3r});var $l=s((h6e,Yl)=>{"use strict";var b3r=typeof globalThis=="object"?globalThis:null;Yl.exports=b3r});var ho=s((q6e,r4)=>{"use strict";var w3r=gr().isPrimitive,E3r=y(),N3r=Dl(),Zl=zl(),Ql=Jl(),Kl=$l();function O3r(r){if(arguments.length){if(!w3r(r))throw new TypeError(E3r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return N3r()}if(Kl)return Kl;if(Zl)return Zl;if(Ql)return Ql;throw new Error("unexpected error. Unable to resolve global object.")}r4.exports=O3r});var i4=s((y6e,t4)=>{"use strict";var S3r=ho(),e4=S3r(),A3r=e4.document&&e4.document.childNodes;t4.exports=A3r});var a4=s((b6e,n4)=>{"use strict";var _3r=Int8Array;n4.exports=_3r});var u4=s((w6e,s4)=>{"use strict";var T3r=ul(),I3r=i4(),L3r=a4();function R3r(){return typeof T3r=="function"||typeof L3r=="object"||typeof I3r=="function"}s4.exports=R3r});var qo=s((E6e,o4)=>{"use strict";function P3r(){return/^\s*function\s*([^(]*)/i}o4.exports=P3r});var f4=s((N6e,v4)=>{"use strict";var F3r=qo(),M3r=F3r();v4.exports=M3r});var yo=s((O6e,l4)=>{"use strict";var B3r=b(),c4=qo(),k3r=f4();B3r(c4,"REGEXP",k3r);l4.exports=c4});var g4=s((S6e,p4)=>{"use strict";var j3r=er(),bo;function C3r(r){return j3r(r)==="[object Array]"}Array.isArray?bo=Array.isArray:bo=C3r;p4.exports=bo});var mr=s((A6e,m4)=>{"use strict";var U3r=g4();m4.exports=U3r});var h4=s((_6e,d4)=>{"use strict";var V3r=mr(),G3r=y();function x3r(r){if(typeof r!="function")throw new TypeError(G3r("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!V3r(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}d4.exports=x3r});var y4=s((T6e,q4)=>{"use strict";var H3r=h4();q4.exports=H3r});var w4=s((I6e,b4)=>{"use strict";function D3r(r){return r!==null&&typeof r=="object"}b4.exports=D3r});var Eo=s((L6e,E4)=>{"use strict";var W3r=b(),z3r=y4(),wo=w4(),X3r=z3r(wo);W3r(wo,"isObjectLikeArray",X3r);E4.exports=wo});var O4=s((R6e,N4)=>{"use strict";var J3r=Eo();function Y3r(r){return J3r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}N4.exports=Y3r});var Ct=s((P6e,S4)=>{"use strict";var $3r=O4();S4.exports=$3r});var _4=s((F6e,A4)=>{"use strict";var Z3r=er(),Q3r=yo().REGEXP,K3r=Ct();function rvr(r){var e,t,i;if(t=Z3r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Q3r.exec(i.toString()),e)return e[1]}return K3r(r)?"Buffer":t}A4.exports=rvr});var ce=s((M6e,T4)=>{"use strict";var evr=_4();T4.exports=evr});var L4=s((B6e,I4)=>{"use strict";var tvr=ce();function ivr(r){var e;return r===null?"null":(e=typeof r,e==="object"?tvr(r).toLowerCase():e)}I4.exports=ivr});var P4=s((k6e,R4)=>{"use strict";var nvr=ce();function avr(r){return nvr(r).toLowerCase()}R4.exports=avr});var ba=s((j6e,F4)=>{"use strict";var svr=u4(),uvr=L4(),ovr=P4(),vvr=svr()?ovr:uvr;F4.exports=vvr});var B4=s((C6e,M4)=>{"use strict";var fvr=ba();function cvr(r){return fvr(r)==="function"}M4.exports=cvr});var T=s((U6e,k4)=>{"use strict";var lvr=B4();k4.exports=lvr});var C4=s((V6e,j4)=>{"use strict";var pvr=Math.floor;j4.exports=pvr});var z=s((G6e,U4)=>{"use strict";var gvr=C4();U4.exports=gvr});var G4=s((x6e,V4)=>{"use strict";var mvr=z();function dvr(r){return mvr(r)===r}V4.exports=dvr});var hr=s((H6e,x4)=>{"use strict";var hvr=G4();x4.exports=hvr});var D4=s((D6e,H4)=>{"use strict";var qvr=9007199254740991;H4.exports=qvr});var z4=s((W6e,W4)=>{"use strict";var yvr=hr(),bvr=D4();function wvr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&yvr(r.length)&&r.length>=0&&r.length<=bvr}W4.exports=wvr});var Dr=s((z6e,X4)=>{"use strict";var Evr=z4();X4.exports=Evr});var Y4=s((X6e,J4)=>{"use strict";var Nvr=T();function Ovr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Nvr(r.next)}J4.exports=Ovr});var Z4=s((J6e,$4)=>{"use strict";var Svr=Y4();$4.exports=Svr});var r8=s((Y6e,K4)=>{"use strict";var Q4="function";function Avr(r){return typeof r.get===Q4&&typeof r.set===Q4}K4.exports=Avr});var No=s(($6e,e8)=>{"use strict";var _vr=r8();e8.exports=_vr});var n8=s((Z6e,i8)=>{"use strict";var t8={complex128:Tvr,complex64:Ivr,default:Lvr};function Tvr(r,e,t){r.set(t,e)}function Ivr(r,e,t){r.set(t,e)}function Lvr(r,e,t){r.set(t,e)}function Rvr(r){var e=t8[r];return typeof e=="function"?e:t8.default}i8.exports=Rvr});var Oo=s((Q6e,a8)=>{"use strict";var Pvr=n8();a8.exports=Pvr});var o8=s((K6e,u8)=>{"use strict";var s8={float64:Fvr,float32:Mvr,int32:Bvr,int16:kvr,int8:jvr,uint32:Cvr,uint16:Uvr,uint8:Vvr,uint8c:Gvr,generic:xvr,default:Hvr};function Fvr(r,e,t){r[e]=t}function Mvr(r,e,t){r[e]=t}function Bvr(r,e,t){r[e]=t}function kvr(r,e,t){r[e]=t}function jvr(r,e,t){r[e]=t}function Cvr(r,e,t){r[e]=t}function Uvr(r,e,t){r[e]=t}function Vvr(r,e,t){r[e]=t}function Gvr(r,e,t){r[e]=t}function xvr(r,e,t){r[e]=t}function Hvr(r,e,t){r[e]=t}function Dvr(r){var e=s8[r];return typeof e=="function"?e:s8.default}u8.exports=Dvr});var So=s((rle,v8)=>{"use strict";var Wvr=o8();v8.exports=Wvr});var c8=s((ele,f8)=>{"use strict";var zvr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};f8.exports=zvr});var p8=s((tle,l8)=>{"use strict";var Xvr=er(),Jvr=typeof Float64Array=="function";function Yvr(r){return Jvr&&r instanceof Float64Array||Xvr(r)==="[object Float64Array]"}l8.exports=Yvr});var m8=s((ile,g8)=>{"use strict";var $vr=p8();g8.exports=$vr});var h8=s((nle,d8)=>{"use strict";var Zvr=typeof Float64Array=="function"?Float64Array:null;d8.exports=Zvr});var b8=s((ale,y8)=>{"use strict";var Qvr=m8(),q8=h8();function Kvr(){var r,e;if(typeof q8!="function")return!1;try{e=new q8([1,3.14,-3.14,NaN]),r=Qvr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}y8.exports=Kvr});var Ao=s((sle,w8)=>{"use strict";var rfr=b8();w8.exports=rfr});var N8=s((ule,E8)=>{"use strict";var efr=typeof Float64Array=="function"?Float64Array:void 0;E8.exports=efr});var S8=s((ole,O8)=>{"use strict";function tfr(){throw new Error("not implemented")}O8.exports=tfr});var cr=s((vle,A8)=>{"use strict";var ifr=Ao(),nfr=N8(),afr=S8(),_o;ifr()?_o=nfr:_o=afr;A8.exports=_o});var T8=s((fle,_8)=>{"use strict";var sfr=er(),ufr=typeof Float32Array=="function";function ofr(r){return ufr&&r instanceof Float32Array||sfr(r)==="[object Float32Array]"}_8.exports=ofr});var L8=s((cle,I8)=>{"use strict";var vfr=T8();I8.exports=vfr});var I=s((lle,R8)=>{"use strict";var ffr=Number.POSITIVE_INFINITY;R8.exports=ffr});var F8=s((ple,P8)=>{"use strict";var cfr=typeof Float32Array=="function"?Float32Array:null;P8.exports=cfr});var k8=s((gle,B8)=>{"use strict";var lfr=L8(),pfr=I(),M8=F8();function gfr(){var r,e;if(typeof M8!="function")return!1;try{e=new M8([1,3.14,-3.14,5e40]),r=lfr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===pfr}catch{r=!1}return r}B8.exports=gfr});var C8=s((mle,j8)=>{"use strict";var mfr=k8();j8.exports=mfr});var V8=s((dle,U8)=>{"use strict";var dfr=typeof Float32Array=="function"?Float32Array:void 0;U8.exports=dfr});var x8=s((hle,G8)=>{"use strict";function hfr(){throw new Error("not implemented")}G8.exports=hfr});var Zr=s((qle,H8)=>{"use strict";var qfr=C8(),yfr=V8(),bfr=x8(),To;qfr()?To=yfr:To=bfr;H8.exports=To});var W8=s((yle,D8)=>{"use strict";var wfr=er(),Efr=typeof Uint32Array=="function";function Nfr(r){return Efr&&r instanceof Uint32Array||wfr(r)==="[object Uint32Array]"}D8.exports=Nfr});var le=s((ble,z8)=>{"use strict";var Ofr=W8();z8.exports=Ofr});var oi=s((wle,X8)=>{"use strict";var Sfr=4294967295;X8.exports=Sfr});var Y8=s((Ele,J8)=>{"use strict";var Afr=typeof Uint32Array=="function"?Uint32Array:null;J8.exports=Afr});var Q8=s((Nle,Z8)=>{"use strict";var _fr=le(),Io=oi(),$8=Y8();function Tfr(){var r,e;if(typeof $8!="function")return!1;try{e=[1,3.14,-3.14,Io+1,Io+2],e=new $8(e),r=_fr(e)&&e[0]===1&&e[1]===3&&e[2]===Io-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Z8.exports=Tfr});var r5=s((Ole,K8)=>{"use strict";var Ifr=Q8();K8.exports=Ifr});var t5=s((Sle,e5)=>{"use strict";var Lfr=typeof Uint32Array=="function"?Uint32Array:void 0;e5.exports=Lfr});var n5=s((Ale,i5)=>{"use strict";function Rfr(){throw new Error("not implemented")}i5.exports=Rfr});var lr=s((_le,a5)=>{"use strict";var Pfr=r5(),Ffr=t5(),Mfr=n5(),Lo;Pfr()?Lo=Ffr:Lo=Mfr;a5.exports=Lo});var u5=s((Tle,s5)=>{"use strict";var Bfr=er(),kfr=typeof Int32Array=="function";function jfr(r){return kfr&&r instanceof Int32Array||Bfr(r)==="[object Int32Array]"}s5.exports=jfr});var wa=s((Ile,o5)=>{"use strict";var Cfr=u5();o5.exports=Cfr});var vi=s((Lle,v5)=>{"use strict";var Ufr=2147483647;v5.exports=Ufr});var c5=s((Rle,f5)=>{"use strict";var Vfr=-2147483648;f5.exports=Vfr});var p5=s((Ple,l5)=>{"use strict";var Gfr=typeof Int32Array=="function"?Int32Array:null;l5.exports=Gfr});var d5=s((Fle,m5)=>{"use strict";var xfr=wa(),Hfr=vi(),Dfr=c5(),g5=p5();function Wfr(){var r,e;if(typeof g5!="function")return!1;try{e=new g5([1,3.14,-3.14,Hfr+1]),r=xfr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Dfr}catch{r=!1}return r}m5.exports=Wfr});var q5=s((Mle,h5)=>{"use strict";var zfr=d5();h5.exports=zfr});var b5=s((Ble,y5)=>{"use strict";var Xfr=typeof Int32Array=="function"?Int32Array:void 0;y5.exports=Xfr});var E5=s((kle,w5)=>{"use strict";function Jfr(){throw new Error("not implemented")}w5.exports=Jfr});var $e=s((jle,N5)=>{"use strict";var Yfr=q5(),$fr=b5(),Zfr=E5(),Ro;Yfr()?Ro=$fr:Ro=Zfr;N5.exports=Ro});var S5=s((Cle,O5)=>{"use strict";var Qfr=er(),Kfr=typeof Uint16Array=="function";function rcr(r){return Kfr&&r instanceof Uint16Array||Qfr(r)==="[object Uint16Array]"}O5.exports=rcr});var _5=s((Ule,A5)=>{"use strict";var ecr=S5();A5.exports=ecr});var I5=s((Vle,T5)=>{"use strict";var tcr=65535;T5.exports=tcr});var R5=s((Gle,L5)=>{"use strict";var icr=typeof Uint16Array=="function"?Uint16Array:null;L5.exports=icr});var M5=s((xle,F5)=>{"use strict";var ncr=_5(),Po=I5(),P5=R5();function acr(){var r,e;if(typeof P5!="function")return!1;try{e=[1,3.14,-3.14,Po+1,Po+2],e=new P5(e),r=ncr(e)&&e[0]===1&&e[1]===3&&e[2]===Po-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}F5.exports=acr});var k5=s((Hle,B5)=>{"use strict";var scr=M5();B5.exports=scr});var C5=s((Dle,j5)=>{"use strict";var ucr=typeof Uint16Array=="function"?Uint16Array:void 0;j5.exports=ucr});var V5=s((Wle,U5)=>{"use strict";function ocr(){throw new Error("not implemented")}U5.exports=ocr});var Ut=s((zle,G5)=>{"use strict";var vcr=k5(),fcr=C5(),ccr=V5(),Fo;vcr()?Fo=fcr:Fo=ccr;G5.exports=Fo});var H5=s((Xle,x5)=>{"use strict";var lcr=er(),pcr=typeof Int16Array=="function";function gcr(r){return pcr&&r instanceof Int16Array||lcr(r)==="[object Int16Array]"}x5.exports=gcr});var W5=s((Jle,D5)=>{"use strict";var mcr=H5();D5.exports=mcr});var X5=s((Yle,z5)=>{"use strict";var dcr=32767;z5.exports=dcr});var Y5=s(($le,J5)=>{"use strict";var hcr=-32768;J5.exports=hcr});var Z5=s((Zle,$5)=>{"use strict";var qcr=typeof Int16Array=="function"?Int16Array:null;$5.exports=qcr});var rp=s((Qle,K5)=>{"use strict";var ycr=W5(),bcr=X5(),wcr=Y5(),Q5=Z5();function Ecr(){var r,e;if(typeof Q5!="function")return!1;try{e=new Q5([1,3.14,-3.14,bcr+1]),r=ycr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===wcr}catch{r=!1}return r}K5.exports=Ecr});var tp=s((Kle,ep)=>{"use strict";var Ncr=rp();ep.exports=Ncr});var np=s((r4e,ip)=>{"use strict";var Ocr=typeof Int16Array=="function"?Int16Array:void 0;ip.exports=Ocr});var sp=s((e4e,ap)=>{"use strict";function Scr(){throw new Error("not implemented")}ap.exports=Scr});var fi=s((t4e,up)=>{"use strict";var Acr=tp(),_cr=np(),Tcr=sp(),Mo;Acr()?Mo=_cr:Mo=Tcr;up.exports=Mo});var vp=s((i4e,op)=>{"use strict";var Icr=er(),Lcr=typeof Uint8Array=="function";function Rcr(r){return Lcr&&r instanceof Uint8Array||Icr(r)==="[object Uint8Array]"}op.exports=Rcr});var cp=s((n4e,fp)=>{"use strict";var Pcr=vp();fp.exports=Pcr});var pp=s((a4e,lp)=>{"use strict";var Fcr=255;lp.exports=Fcr});var mp=s((s4e,gp)=>{"use strict";var Mcr=typeof Uint8Array=="function"?Uint8Array:null;gp.exports=Mcr});var qp=s((u4e,hp)=>{"use strict";var Bcr=cp(),Bo=pp(),dp=mp();function kcr(){var r,e;if(typeof dp!="function")return!1;try{e=[1,3.14,-3.14,Bo+1,Bo+2],e=new dp(e),r=Bcr(e)&&e[0]===1&&e[1]===3&&e[2]===Bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}hp.exports=kcr});var bp=s((o4e,yp)=>{"use strict";var jcr=qp();yp.exports=jcr});var Ep=s((v4e,wp)=>{"use strict";var Ccr=typeof Uint8Array=="function"?Uint8Array:void 0;wp.exports=Ccr});var Op=s((f4e,Np)=>{"use strict";function Ucr(){throw new Error("not implemented")}Np.exports=Ucr});var Qr=s((c4e,Sp)=>{"use strict";var Vcr=bp(),Gcr=Ep(),xcr=Op(),ko;Vcr()?ko=Gcr:ko=xcr;Sp.exports=ko});var _p=s((l4e,Ap)=>{"use strict";var Hcr=er(),Dcr=typeof Uint8ClampedArray=="function";function Wcr(r){return Dcr&&r instanceof Uint8ClampedArray||Hcr(r)==="[object Uint8ClampedArray]"}Ap.exports=Wcr});var Ip=s((p4e,Tp)=>{"use strict";var zcr=_p();Tp.exports=zcr});var Rp=s((g4e,Lp)=>{"use strict";var Xcr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Lp.exports=Xcr});var Mp=s((m4e,Fp)=>{"use strict";var Jcr=Ip(),Pp=Rp();function Ycr(){var r,e;if(typeof Pp!="function")return!1;try{e=new Pp([-1,0,1,3.14,4.99,255,256]),r=Jcr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Fp.exports=Ycr});var kp=s((d4e,Bp)=>{"use strict";var $cr=Mp();Bp.exports=$cr});var Cp=s((h4e,jp)=>{"use strict";var Zcr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;jp.exports=Zcr});var Vp=s((q4e,Up)=>{"use strict";function Qcr(){throw new Error("not implemented")}Up.exports=Qcr});var ci=s((y4e,Gp)=>{"use strict";var Kcr=kp(),r6r=Cp(),e6r=Vp(),jo;Kcr()?jo=r6r:jo=e6r;Gp.exports=jo});var Hp=s((b4e,xp)=>{"use strict";var t6r=er(),i6r=typeof Int8Array=="function";function n6r(r){return i6r&&r instanceof Int8Array||t6r(r)==="[object Int8Array]"}xp.exports=n6r});var Wp=s((w4e,Dp)=>{"use strict";var a6r=Hp();Dp.exports=a6r});var Xp=s((E4e,zp)=>{"use strict";var s6r=127;zp.exports=s6r});var Yp=s((N4e,Jp)=>{"use strict";var u6r=-128;Jp.exports=u6r});var Zp=s((O4e,$p)=>{"use strict";var o6r=typeof Int8Array=="function"?Int8Array:null;$p.exports=o6r});var r7=s((S4e,Kp)=>{"use strict";var v6r=Wp(),f6r=Xp(),c6r=Yp(),Qp=Zp();function l6r(){var r,e;if(typeof Qp!="function")return!1;try{e=new Qp([1,3.14,-3.14,f6r+1]),r=v6r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===c6r}catch{r=!1}return r}Kp.exports=l6r});var t7=s((A4e,e7)=>{"use strict";var p6r=r7();e7.exports=p6r});var n7=s((_4e,i7)=>{"use strict";var g6r=typeof Int8Array=="function"?Int8Array:void 0;i7.exports=g6r});var s7=s((T4e,a7)=>{"use strict";function m6r(){throw new Error("not implemented")}a7.exports=m6r});var li=s((I4e,u7)=>{"use strict";var d6r=t7(),h6r=n7(),q6r=s7(),Co;d6r()?Co=h6r:Co=q6r;u7.exports=Co});var Uo=s((L4e,o7)=>{"use strict";function y6r(r){return typeof r=="number"}o7.exports=y6r});var f7=s((R4e,v7)=>{"use strict";v7.exports=Number});var Ea=s((P4e,c7)=>{"use strict";var b6r=f7();c7.exports=b6r});var p7=s((F4e,l7)=>{"use strict";var w6r=Ea(),E6r=w6r.prototype.toString;l7.exports=E6r});var m7=s((M4e,g7)=>{"use strict";var N6r=p7();function O6r(r){try{return N6r.call(r),!0}catch{return!1}}g7.exports=O6r});var Vo=s((B4e,d7)=>{"use strict";var S6r=ui(),A6r=er(),_6r=Ea(),T6r=m7(),I6r=S6r();function L6r(r){return typeof r=="object"?r instanceof _6r?!0:I6r?T6r(r):A6r(r)==="[object Number]":!1}d7.exports=L6r});var q7=s((k4e,h7)=>{"use strict";var R6r=Uo(),P6r=Vo();function F6r(r){return R6r(r)||P6r(r)}h7.exports=F6r});var j=s((j4e,b7)=>{"use strict";var y7=b(),Go=q7(),M6r=Uo(),B6r=Vo();y7(Go,"isPrimitive",M6r);y7(Go,"isObject",B6r);b7.exports=Go});var U=s((C4e,w7)=>{"use strict";var k6r=Ea(),j6r=k6r.NEGATIVE_INFINITY;w7.exports=j6r});var xo=s((U4e,E7)=>{"use strict";var C6r=I(),U6r=U(),V6r=hr();function G6r(r){return r<C6r&&r>U6r&&V6r(r)}E7.exports=G6r});var Ho=s((V4e,N7)=>{"use strict";var x6r=j().isPrimitive,H6r=xo();function D6r(r){return x6r(r)&&H6r(r)}N7.exports=D6r});var Do=s((G4e,O7)=>{"use strict";var W6r=j().isObject,z6r=xo();function X6r(r){return W6r(r)&&z6r(r.valueOf())}O7.exports=X6r});var A7=s((x4e,S7)=>{"use strict";var J6r=Ho(),Y6r=Do();function $6r(r){return J6r(r)||Y6r(r)}S7.exports=$6r});var dr=s((H4e,T7)=>{"use strict";var _7=b(),Wo=A7(),Z6r=Ho(),Q6r=Do();_7(Wo,"isPrimitive",Z6r);_7(Wo,"isObject",Q6r);T7.exports=Wo});var zo=s((D4e,I7)=>{"use strict";var K6r=dr().isPrimitive;function rlr(r){return K6r(r)&&r>=0}I7.exports=rlr});var Xo=s((W4e,L7)=>{"use strict";var elr=dr().isObject;function tlr(r){return elr(r)&&r.valueOf()>=0}L7.exports=tlr});var P7=s((z4e,R7)=>{"use strict";var ilr=zo(),nlr=Xo();function alr(r){return ilr(r)||nlr(r)}R7.exports=alr});var Fr=s((X4e,M7)=>{"use strict";var F7=b(),Jo=P7(),slr=zo(),ulr=Xo();F7(Jo,"isPrimitive",slr);F7(Jo,"isObject",ulr);M7.exports=Jo});var Yo=s((J4e,B7)=>{"use strict";var olr=4294967295;B7.exports=olr});var j7=s((Y4e,k7)=>{"use strict";var vlr=hr(),flr=Yo();function clr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&vlr(r.length)&&r.length>=0&&r.length<=flr}k7.exports=clr});var Vt=s(($4e,C7)=>{"use strict";var llr=j7();C7.exports=llr});var V7=s((Z4e,U7)=>{"use strict";var plr=er(),glr=typeof ArrayBuffer=="function";function mlr(r){return glr&&r instanceof ArrayBuffer||plr(r)==="[object ArrayBuffer]"}U7.exports=mlr});var Na=s((Q4e,G7)=>{"use strict";var dlr=V7();G7.exports=dlr});var H7=s((K4e,x7)=>{"use strict";var hlr=mr();function qlr(r){return typeof r=="object"&&r!==null&&!hlr(r)}x7.exports=qlr});var Oa=s((r8e,D7)=>{"use strict";var ylr=H7();D7.exports=ylr});var z7=s((e8e,W7)=>{"use strict";function blr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}W7.exports=blr});var J7=s((t8e,X7)=>{"use strict";function wlr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}X7.exports=wlr});var K7=s((i8e,Q7)=>{"use strict";var Y7=j().isPrimitive,$7=Ye(),gn=b(),Z7=y(),Elr=z7(),Nlr=J7();function Gt(r,e){if(!(this instanceof Gt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Y7(r))throw new TypeError(Z7("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Y7(e))throw new TypeError(Z7("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return $7(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),$7(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}gn(Gt,"BYTES_PER_ELEMENT",8);gn(Gt.prototype,"BYTES_PER_ELEMENT",8);gn(Gt.prototype,"byteLength",16);gn(Gt.prototype,"toString",Elr);gn(Gt.prototype,"toJSON",Nlr);Q7.exports=Gt});var pi=s((n8e,r9)=>{"use strict";var Olr=K7();r9.exports=Olr});var t9=s((a8e,e9)=>{"use strict";var Slr=typeof Math.fround=="function"?Math.fround:null;e9.exports=Slr});var a9=s((s8e,n9)=>{"use strict";var Alr=Zr(),i9=new Alr(1);function _lr(r){return i9[0]=r,i9[0]}n9.exports=_lr});var o9=s((u8e,u9)=>{"use strict";var s9=t9(),Tlr=a9(),$o;typeof s9=="function"?$o=s9:$o=Tlr;u9.exports=$o});var f9=s((o8e,v9)=>{"use strict";function Ilr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}v9.exports=Ilr});var l9=s((v8e,c9)=>{"use strict";function Llr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}c9.exports=Llr});var q9=s((f8e,h9)=>{"use strict";var p9=j().isPrimitive,g9=Ye(),mn=b(),m9=o9(),d9=y(),Rlr=f9(),Plr=l9();function xt(r,e){if(!(this instanceof xt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!p9(r))throw new TypeError(d9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!p9(e))throw new TypeError(d9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return g9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:m9(r)}),g9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:m9(e)}),this}mn(xt,"BYTES_PER_ELEMENT",4);mn(xt.prototype,"BYTES_PER_ELEMENT",4);mn(xt.prototype,"byteLength",8);mn(xt.prototype,"toString",Rlr);mn(xt.prototype,"toJSON",Plr);h9.exports=xt});var gi=s((c8e,y9)=>{"use strict";var Flr=q9();y9.exports=Flr});var w9=s((l8e,b9)=>{"use strict";var Mlr=pi(),Blr=gi();function klr(r){return r instanceof Mlr||r instanceof Blr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}b9.exports=klr});var Wr=s((p8e,E9)=>{"use strict";var jlr=w9();E9.exports=jlr});var O9=s((g8e,N9)=>{"use strict";var Clr=hr();function Ulr(r){return Clr(r/2)}N9.exports=Ulr});var Sa=s((m8e,S9)=>{"use strict";var Vlr=O9();S9.exports=Vlr});var _9=s((d8e,A9)=>{"use strict";var Glr=S(),Aa=fo();function xlr(){return typeof Aa=="function"&&typeof Aa("foo")=="symbol"&&Glr(Aa,"iterator")&&typeof Aa.iterator=="symbol"}A9.exports=xlr});var _a=s((h8e,T9)=>{"use strict";var Hlr=_9();T9.exports=Hlr});var L9=s((q8e,I9)=>{"use strict";var Dlr=_a(),Wlr=Dlr()?Symbol.iterator:null;I9.exports=Wlr});var Ta=s((y8e,R9)=>{"use strict";var zlr=L9();R9.exports=zlr});var F9=s((b8e,P9)=>{"use strict";var Xlr=Ye();function Jlr(r,e,t){Xlr(r,e,{configurable:!1,enumerable:!1,get:t})}P9.exports=Jlr});var R=s((w8e,M9)=>{"use strict";var Ylr=F9();M9.exports=Ylr});var k9=s((E8e,B9)=>{"use strict";function $lr(r){return r.re}B9.exports=$lr});var Ze=s((N8e,j9)=>{"use strict";var Zlr=k9();j9.exports=Zlr});var U9=s((O8e,C9)=>{"use strict";function Qlr(r){return r.im}C9.exports=Qlr});var Qe=s((S8e,V9)=>{"use strict";var Klr=U9();V9.exports=Klr});var x9=s((A8e,G9)=>{"use strict";var r4r=Zr();function e4r(r,e){return new r4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}G9.exports=e4r});var mi=s((_8e,H9)=>{"use strict";var t4r=x9();H9.exports=t4r});var W9=s((T8e,D9)=>{"use strict";var i4r=cr();function n4r(r,e){return new i4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}D9.exports=n4r});var di=s((I8e,z9)=>{"use strict";var a4r=W9();z9.exports=a4r});var Y9=s((L8e,J9)=>{"use strict";var X9={float64:s4r,float32:u4r,int32:o4r,int16:v4r,int8:f4r,uint32:c4r,uint16:l4r,uint8:p4r,uint8c:g4r,generic:m4r,default:d4r};function s4r(r,e){return r[e]}function u4r(r,e){return r[e]}function o4r(r,e){return r[e]}function v4r(r,e){return r[e]}function f4r(r,e){return r[e]}function c4r(r,e){return r[e]}function l4r(r,e){return r[e]}function p4r(r,e){return r[e]}function g4r(r,e){return r[e]}function m4r(r,e){return r[e]}function d4r(r,e){return r[e]}function h4r(r){var e=X9[r];return typeof e=="function"?e:X9.default}J9.exports=h4r});var Ia=s((R8e,$9)=>{"use strict";var q4r=Y9();$9.exports=q4r});var K9=s((P8e,Q9)=>{"use strict";var Z9={complex128:y4r,complex64:b4r,default:w4r};function y4r(r,e){return r.get(e)}function b4r(r,e){return r.get(e)}function w4r(r,e){return r.get(e)}function E4r(r){var e=Z9[r];return typeof e=="function"?e:Z9.default}Q9.exports=E4r});var La=s((F8e,rg)=>{"use strict";var N4r=K9();rg.exports=N4r});var tg=s((M8e,eg)=>{"use strict";var O4r=Vt(),S4r=Wr(),A4r=Ze(),_4r=Qe(),T4r=y();function I4r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,O4r(i)&&i.length>=2)e.push(i[0],i[1]);else if(S4r(i))e.push(A4r(i),_4r(i));else return new TypeError(T4r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}eg.exports=I4r});var ng=s((B8e,ig)=>{"use strict";var L4r=Vt(),R4r=Wr(),P4r=Ze(),F4r=Qe(),M4r=y();function B4r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),L4r(a)&&a.length>=2)i.push(a[0],a[1]);else if(R4r(a))i.push(P4r(a),F4r(a));else return new TypeError(M4r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}ig.exports=B4r});var sg=s((k8e,ag)=>{"use strict";var k4r=Wr(),j4r=Ze(),C4r=Qe();function U4r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!k4r(i))return null;r[a]=j4r(i),r[a+1]=C4r(i),a+=2}return r}ag.exports=U4r});var mg=s((j8e,gg)=>{"use strict";var dn=Fr().isPrimitive,ug=Vt(),Qo=Dr(),og=Na(),vg=Oa(),V4r=mr(),Ht=T(),hi=Wr(),Ra=Sa(),Zo=hr(),G4r=_a(),qi=Ta(),qr=b(),Ma=R(),Ur=Zr(),fg=gi(),$=y(),Pa=Ze(),Fa=Qe(),x4r=mi(),H4r=di(),D4r=Ia(),W4r=La(),cg=tg(),z4r=ng(),X4r=sg(),Mr=Ur.BYTES_PER_ELEMENT*2,lg=G4r();function yi(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function pg(r){return r===tr||r.name==="Complex128Array"}function J4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Mr}function Y4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Mr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ur(0);else if(e===1)if(dn(arguments[0]))t=new Ur(arguments[0]*2);else if(Qo(arguments[0]))if(t=arguments[0],i=t.length,i&&V4r(t)&&hi(t[0])){if(t=X4r(new Ur(i*2),t),t===null){if(!Ra(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(arguments[0])}}else{if(J4r(t))t=x4r(t,0);else if(Y4r(t))t=H4r(t,0);else if(!Ra(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(t)}else if(og(arguments[0])){if(t=arguments[0],!Zo(t.byteLength/Mr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Mr,t.byteLength));t=new Ur(t)}else if(vg(arguments[0])){if(t=arguments[0],lg===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ht(t[qi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[qi](),!Ht(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=cg(t),t instanceof Error)throw t;t=new Ur(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!og(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!dn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Zo(r/Mr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Mr,r));if(e===2){if(i=t.byteLength-r,!Zo(i/Mr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Mr,i));t=new Ur(t,r)}else{if(i=arguments[2],!dn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Mr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Mr));t=new Ur(t,r,i*2)}}return qr(this,"_buffer",t),qr(this,"_length",t.length/2),this}qr(tr,"BYTES_PER_ELEMENT",Mr);qr(tr,"name","Complex64Array");qr(tr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ht(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(yi(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),hi(l))u[g]=Pa(l),u[g+1]=Fa(l);else if(ug(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Qo(e)){if(n){for(v=e.length,e.get&&e.set?f=W4r("default"):f=D4r("default"),p=0;p<v;p++)if(!hi(f(e,p))){c=!0;break}if(c){if(!Ra(v))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),hi(l))u[g]=Pa(l),u[g+1]=Fa(l);else if(ug(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(vg(e)&&lg&&Ht(e[qi])){if(u=e[qi](),!Ht(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=z4r(u,n,t):o=cg(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});qr(tr,"of",function(){var e,t;if(!Ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ma(tr.prototype,"buffer",function(){return this._buffer.buffer});Ma(tr.prototype,"byteLength",function(){return this._buffer.byteLength});Ma(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});qr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);qr(tr.prototype,"copyWithin",function(e,t){if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});qr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},qr(i,"next",f),qr(i,"return",v),qi&&qr(i,qi,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new fg(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});qr(tr.prototype,"get",function(e){var t;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!dn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new fg(t[e],t[e+1])});Ma(tr.prototype,"length",function(){return this._length});qr(tr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!yi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!dn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(hi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Pa(e),n[i+1]=Fa(e);return}if(yi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Mr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Qo(e)){for(o=e.length,v=0;v<o;v++)if(!hi(e[v])){u=!0;break}if(u){if(!Ra(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Mr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Pa(f),n[i+1]=Fa(f),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});gg.exports=tr});var bi=s((C8e,dg)=>{"use strict";var $4r=mg();dg.exports=$4r});var qg=s((U8e,hg)=>{"use strict";function Z4r(r){return r.re}hg.exports=Z4r});var Kr=s((V8e,yg)=>{"use strict";var Q4r=qg();yg.exports=Q4r});var wg=s((G8e,bg)=>{"use strict";function K4r(r){return r.im}bg.exports=K4r});var re=s((x8e,Eg)=>{"use strict";var r8r=wg();Eg.exports=r8r});var Og=s((H8e,Ng)=>{"use strict";var e8r=Vt(),t8r=Wr(),i8r=y(),n8r=Kr(),a8r=re();function s8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,e8r(i)&&i.length>=2)e.push(i[0],i[1]);else if(t8r(i))e.push(n8r(i),a8r(i));else return new TypeError(i8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Ng.exports=s8r});var Ag=s((D8e,Sg)=>{"use strict";var u8r=Vt(),o8r=Wr(),v8r=y(),f8r=Kr(),c8r=re();function l8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),u8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(o8r(a))i.push(f8r(a),c8r(a));else return new TypeError(v8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}Sg.exports=l8r});var Tg=s((W8e,_g)=>{"use strict";var p8r=Wr(),g8r=Kr(),m8r=re();function d8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!p8r(i))return null;r[a]=g8r(i),r[a+1]=m8r(i),a+=2}return r}_g.exports=d8r});var jg=s((z8e,kg)=>{"use strict";var hn=Fr().isPrimitive,Ig=Vt(),r1=Dr(),Lg=Na(),Rg=Oa(),h8r=mr(),Dt=T(),wi=Wr(),Ba=Sa(),Ko=hr(),q8r=_a(),Ei=Ta(),yr=b(),Ca=R(),Vr=cr(),Pg=pi(),ka=Kr(),ja=re(),y8r=mi(),b8r=di(),w8r=Ia(),E8r=La(),Z=y(),Fg=Og(),N8r=Ag(),O8r=Tg(),Br=Vr.BYTES_PER_ELEMENT*2,Mg=q8r();function Ni(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Bg(r){return r===ir||r.name==="Complex64Array"}function S8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Br/2}function A8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Br}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Vr(0);else if(e===1)if(hn(arguments[0]))t=new Vr(arguments[0]*2);else if(r1(arguments[0]))if(t=arguments[0],i=t.length,i&&h8r(t)&&wi(t[0])){if(t=O8r(new Vr(i*2),t),t===null){if(!Ba(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(arguments[0])}}else{if(S8r(t))t=y8r(t,0);else if(A8r(t))t=b8r(t,0);else if(!Ba(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(t)}else if(Lg(arguments[0])){if(t=arguments[0],!Ko(t.byteLength/Br))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Br,t.byteLength));t=new Vr(t)}else if(Rg(arguments[0])){if(t=arguments[0],Mg===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Dt(t[Ei]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ei](),!Dt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Fg(t),t instanceof Error)throw t;t=new Vr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Lg(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!hn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Ko(r/Br))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Br,r));if(e===2){if(i=t.byteLength-r,!Ko(i/Br))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Br,i));t=new Vr(t,r)}else{if(i=arguments[2],!hn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Br>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Br));t=new Vr(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(ir,"BYTES_PER_ELEMENT",Br);yr(ir,"name","Complex128Array");yr(ir,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Bg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Dt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(Ni(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),wi(l))u[g]=ka(l),u[g+1]=ja(l);else if(Ig(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(r1(e)){if(n){for(v=e.length,e.get&&e.set?f=E8r("default"):f=w8r("default"),p=0;p<v;p++)if(!wi(f(e,p))){c=!0;break}if(c){if(!Ba(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),wi(l))u[g]=ka(l),u[g+1]=ja(l);else if(Ig(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Rg(e)&&Mg&&Dt(e[Ei])){if(u=e[Ei](),!Dt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=N8r(u,n,t):o=Fg(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(ir,"of",function(){var e,t;if(!Dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Bg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ca(ir.prototype,"buffer",function(){return this._buffer.buffer});Ca(ir.prototype,"byteLength",function(){return this._buffer.byteLength});Ca(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);yr(ir.prototype,"copyWithin",function(e,t){if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},yr(i,"next",f),yr(i,"return",v),Ei&&yr(i,Ei,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Pg(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(ir.prototype,"get",function(e){var t;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!hn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Pg(t[e],t[e+1])});Ca(ir.prototype,"length",function(){return this._length});yr(ir.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!hn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(wi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ka(e),n[i+1]=ja(e);return}if(Ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Br,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Vr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(r1(e)){for(o=e.length,v=0;v<o;v++)if(!wi(e[v])){u=!0;break}if(u){if(!Ba(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Br,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Vr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=ka(f),n[i+1]=ja(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});kg.exports=ir});var Oi=s((X8e,Cg)=>{"use strict";var _8r=jg();Cg.exports=_8r});var Vg=s((J8e,Ug)=>{"use strict";var T8r=cr(),I8r=Zr(),L8r=lr(),R8r=$e(),P8r=Ut(),F8r=fi(),M8r=Qr(),B8r=ci(),k8r=li(),j8r=bi(),C8r=Oi(),U8r=[T8r,I8r,R8r,L8r,F8r,P8r,k8r,M8r,B8r,j8r,C8r];Ug.exports=U8r});var xg=s((Y8e,Gg)=>{"use strict";var V8r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Gg.exports=V8r});var Wg=s(($8e,Dg)=>{"use strict";var G8r=Ct(),x8r=mr(),H8r=ce(),D8r=c8(),W8r=Vg(),Hg=xg(),z8r=Hg.length;function X8r(r){var e;if(x8r(r))return"generic";if(G8r(r))return null;for(e=0;e<z8r;e++)if(r instanceof W8r[e])return Hg[e];return D8r[H8r(r)]||null}Dg.exports=X8r});var Ua=s((Z8e,zg)=>{"use strict";var J8r=Wg();zg.exports=J8r});var Yg=s((Q8e,Jg)=>{"use strict";var Xg=T(),Y8r=Dr(),$8r=Z4(),Z8r=No(),Q8r=Oo(),K8r=So(),r5r=Ua(),e1=y();function e5r(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(Y8r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!Xg(t))throw new TypeError(e1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!Xg(t))throw new TypeError(e1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!$8r(r))throw new TypeError(e1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=r5r(i),Z8r(i)?a=Q8r(u):a=K8r(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}Jg.exports=e5r});var Zg=s((K8e,$g)=>{"use strict";var t5r=Yg();$g.exports=t5r});var Kg=s((r5e,Qg)=>{"use strict";function i5r(r){return r!==r}Qg.exports=i5r});var E=s((e5e,rm)=>{"use strict";var n5r=Kg();rm.exports=n5r});var tm=s((t5e,em)=>{"use strict";var a5r={Complex64:"complex64",Complex128:"complex128"};em.exports=a5r});var nm=s((i5e,im)=>{"use strict";var s5r=gi(),u5r=pi(),o5r=[s5r,u5r];im.exports=o5r});var sm=s((n5e,am)=>{"use strict";var v5r=["complex64","complex128"];am.exports=v5r});var vm=s((a5e,om)=>{"use strict";var f5r=ce(),c5r=tm(),l5r=nm(),um=sm(),p5r=um.length;function g5r(r){var e;for(e=0;e<p5r;e++)if(r instanceof l5r[e])return um[e];return c5r[f5r(r)]||null}om.exports=g5r});var t1=s((s5e,fm)=>{"use strict";var m5r=vm();fm.exports=m5r});var lm=s((u5e,cm)=>{"use strict";var d5r=cr(),h5r=Zr(),q5r=Oi(),y5r=bi(),b5r={float64:d5r,float32:h5r,complex128:q5r,complex64:y5r};cm.exports=b5r});var gm=s((o5e,pm)=>{"use strict";var w5r=lm();function E5r(r){return w5r[r]||null}pm.exports=E5r});var dm=s((v5e,mm)=>{"use strict";var N5r=gm();mm.exports=N5r});var qm=s((f5e,hm)=>{"use strict";function O5r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}hm.exports=O5r});var Om=s((c5e,Nm)=>{"use strict";var S5r=gi(),A5r=pi(),ym=Kr(),bm=re(),wm=Ze(),Em=Qe();function _5r(r,e,t,i,n,a){var u,o,f,v,c,l,p,g,h,d,m,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=wm(e),l=Em(e)):(v=ym(e),l=bm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=wm(i),p=Em(i)):(c=ym(i),p=bm(i)),o===2?u=S5r:u=A5r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,m=(p-l)/q,N=1;N<q;N++)g=v+d*N,h=l+m*N,f.push(new u(g,h));return a&&f.push(new u(c,p)),f}Nm.exports=_5r});var i1=s((l5e,Sm)=>{"use strict";function T5r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}Sm.exports=T5r});var n1=s((p5e,Lm)=>{"use strict";var Am=Kr(),_m=re(),Tm=Ze(),Im=Qe();function I5r(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=Tm(t),v=Im(t)):(o=Am(t),v=_m(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=Tm(n),c=Im(n)):(f=Am(n),c=_m(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?g=a-1:g=a,l=(f-o)/g,p=(c-v)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}Lm.exports=I5r});var Pm=s((g5e,Rm)=>{"use strict";var L5r=Object;Rm.exports=L5r});var Si=s((m5e,Fm)=>{"use strict";var R5r=Pm();Fm.exports=R5r});var Bm=s((d5e,Mm)=>{"use strict";var P5r=Object.getPrototypeOf;Mm.exports=P5r});var jm=s((h5e,km)=>{"use strict";function F5r(r){return r.__proto__}km.exports=F5r});var Um=s((q5e,Cm)=>{"use strict";var M5r=er(),B5r=jm();function k5r(r){var e=B5r(r);return e||e===null?e:M5r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Cm.exports=k5r});var Gm=s((y5e,Vm)=>{"use strict";var j5r=T(),C5r=Bm(),U5r=Um(),a1;j5r(Object.getPrototypeOf)?a1=C5r:a1=U5r;Vm.exports=a1});var Hm=s((b5e,xm)=>{"use strict";var V5r=Si(),G5r=Gm();function x5r(r){return r==null?null:(r=V5r(r),G5r(r))}xm.exports=x5r});var Wt=s((w5e,Dm)=>{"use strict";var H5r=Hm();Dm.exports=H5r});var Xm=s((E5e,zm)=>{"use strict";var D5r=Oa(),Wm=T(),W5r=Wt(),Va=S(),z5r=er(),X5r=Object.prototype;function J5r(r){var e;for(e in r)if(!Va(r,e))return!1;return!0}function Y5r(r){var e;return D5r(r)?(e=W5r(r),e?!Va(r,"constructor")&&Va(e,"constructor")&&Wm(e.constructor)&&z5r(e.constructor)==="[object Function]"&&Va(e,"isPrototypeOf")&&Wm(e.isPrototypeOf)&&(e===X5r||J5r(r)):!0):!1}zm.exports=Y5r});var L=s((N5e,Jm)=>{"use strict";var $5r=Xm();Jm.exports=$5r});var s1=s((O5e,Ym)=>{"use strict";function Z5r(r){return typeof r=="string"}Ym.exports=Z5r});var Zm=s((S5e,$m)=>{"use strict";var Q5r=String.prototype.valueOf;$m.exports=Q5r});var Km=s((A5e,Qm)=>{"use strict";var K5r=Zm();function rpr(r){try{return K5r.call(r),!0}catch{return!1}}Qm.exports=rpr});var u1=s((_5e,rd)=>{"use strict";var epr=ui(),tpr=er(),ipr=Km(),npr=epr();function apr(r){return typeof r=="object"?r instanceof String?!0:npr?ipr(r):tpr(r)==="[object String]":!1}rd.exports=apr});var td=s((T5e,ed)=>{"use strict";var spr=s1(),upr=u1();function opr(r){return spr(r)||upr(r)}ed.exports=opr});var Q=s((I5e,nd)=>{"use strict";var id=b(),o1=td(),vpr=s1(),fpr=u1();id(o1,"isPrimitive",vpr);id(o1,"isObject",fpr);nd.exports=o1});var f1=s((L5e,sd)=>{"use strict";var cpr=L(),ad=S(),lpr=Q().isPrimitive,ppr=gr().isPrimitive,v1=y();function gpr(r,e){return cpr(e)?ad(e,"dtype")&&(r.dtype=e.dtype,!lpr(r.dtype))?new TypeError(v1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):ad(e,"endpoint")&&(r.endpoint=e.endpoint,!ppr(r.endpoint))?new TypeError(v1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(v1("invalid argument. Options argument must be an object. Value: `%s`.",e))}sd.exports=gpr});var c1=s((R5e,mpr)=>{mpr.exports={endpoint:!0}});var pd=s((P5e,ld)=>{"use strict";var ud=Wr(),od=j().isPrimitive,dpr=Fr().isPrimitive,vd=E(),fd=t1(),hpr=dm(),qpr=mi(),ypr=di(),Ai=y(),bpr=qm(),wpr=Om(),Epr=i1(),cd=n1(),Npr=f1(),Opr=c1();function Spr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=fd(r),o===null){if(!ud(r))throw new TypeError(Ai("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!od(r)||vd(r))throw new TypeError(Ai("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=fd(e),f===null){if(!ud(e))throw new TypeError(Ai("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!od(e)||vd(e))throw new TypeError(Ai("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!dpr(t))throw new TypeError(Ai("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Opr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Npr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?wpr(o,r,f,e,t,i.endpoint):bpr(r,e,t,i.endpoint);if(n=hpr(i.dtype),n===null)throw new TypeError(Ai('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return cd(qpr(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return cd(ypr(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Epr(u,r,e,t,i.endpoint)}ld.exports=Spr});var md=s((F5e,gd)=>{"use strict";var Apr=No(),_pr=Ia(),Tpr=So(),Ipr=La(),Lpr=Oo(),Rpr=Ua();function Ppr(r){var e=Rpr(r);return Apr(r)?{accessorProtocol:!0,accessors:[Ipr(e),Lpr(e)]}:{accessorProtocol:!1,accessors:[_pr(e),Tpr(e)]}}gd.exports=Ppr});var hd=s((M5e,dd)=>{"use strict";var Fpr=md();dd.exports=Fpr});var yd=s((B5e,qd)=>{"use strict";var Mpr=hd();function Bpr(r){var e=Mpr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}qd.exports=Bpr});var qn=s((k5e,bd)=>{"use strict";var kpr=yd();bd.exports=kpr});var Ad=s((j5e,Sd)=>{"use strict";var jpr=gi(),Cpr=pi(),wd=Kr(),Ed=re(),Nd=Ze(),Od=Qe();function Upr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d,m,q,N,O,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=Nd(t),l=Od(t)):(v=wd(t),l=Ed(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=Nd(n),p=Od(n)):(c=wd(n),p=Ed(n)),f===2?o=jpr:o=Cpr,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(v,l)),r;for(g(h,0,new o(v,l)),u?O=a-1:O=a,q=(c-v)/O,N=(p-l)/O,F=1;F<O;F++)d=v+q*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}Sd.exports=Upr});var Td=s((C5e,_d)=>{"use strict";function Vpr(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}_d.exports=Vpr});var kd=s((U5e,Bd)=>{"use strict";var Id=Wr(),Ld=j().isPrimitive,Gpr=Dr(),yn=y(),Rd=E(),Pd=t1(),xpr=Ua(),Hpr=mi(),Dpr=di(),Fd=qn(),Wpr=Ad(),zpr=Td(),Md=n1(),Xpr=i1(),Jpr=f1(),Ypr=c1();function $pr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=Pd(r),a===null){if(!Id(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!Ld(r)||Rd(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Pd(e),u===null){if(!Id(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Ld(e)||Rd(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Gpr(t))throw new TypeError(yn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Ypr.endpoint},arguments.length>3&&(n=Jpr(i,arguments[3]),n))throw n;if(f=xpr(t),f===null&&(f="generic"),f==="complex64")return Md(Hpr(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return Md(Dpr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=Fd(t),Wpr(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=Fd(t),v.accessorProtocol?(zpr(v,r,e,t.length,i.endpoint),t):(Xpr(t,r,e,t.length,i.endpoint),t)}Bd.exports=$pr});var Ud=s((V5e,Cd)=>{"use strict";var Zpr=b(),jd=pd(),Qpr=kd();Zpr(jd,"assign",Qpr);Cd.exports=jd});var Gd=s((G5e,Vd)=>{"use strict";var Kpr=j().isPrimitive,r7r=Q().isPrimitive,e7r=gr().isPrimitive,t7r=mr(),i7r=y(),n7r={number:Kpr,string:r7r,boolean:e7r};function a7r(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=n7r[a],u(o))i.push([[o]]),n.push([1,1]);else if(t7r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(i7r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}Vd.exports=a7r});var Ga=s((x5e,xd)=>{"use strict";var s7r=Gd();xd.exports=s7r});var Dd=s((H5e,Hd)=>{"use strict";var u7r=ya();function o7r(r){return u7r(1,r)}Hd.exports=o7r});var zd=s((D5e,Wd)=>{"use strict";var v7r=Dd();Wd.exports=v7r});var Jd=s((W5e,Xd)=>{"use strict";function f7r(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}Xd.exports=f7r});var l1=s((z5e,Yd)=>{"use strict";var c7r=Jd();Yd.exports=c7r});var Zd=s((X5e,$d)=>{"use strict";var l7r=ya();function p7r(r){return l7r(0,r)}$d.exports=p7r});var xa=s((J5e,Qd)=>{"use strict";var g7r=Zd();Qd.exports=g7r});var rh=s((Y5e,Kd)=>{"use strict";var kr=rr(),m7r=no(),d7r=so(),h7r=qa(),q7r=ya(),y7r=K6(),b7r=uo(),w7r=Zg(),E7r=Ud(),N7r=Ga(),O7r=zd(),S7r=l1(),A7r=si(),_7r=xa();function T7r(r){return kr(r,"bbinary2d",m7r),kr(r,"bternary2d",d7r),kr(r,"broadcastShapes",h7r),kr(r,"filled2d",q7r),kr(r,"filled2dBy",y7r),kr(r,"flatten2d",b7r),kr(r,"iterator2array",w7r),kr(r,"linspace",E7r),kr(r,"normalizeBroadcastArgs",N7r),kr(r,"ones2d",O7r),kr(r,"unary2d",S7r),kr(r,"zeros",A7r),kr(r,"zeros2d",_7r),r}Kd.exports=T7r});var ih=s(($5e,th)=>{"use strict";var eh=y();function I7r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(eh('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(eh('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}th.exports=I7r});var ah=s((Z5e,nh)=>{"use strict";var L7r=ih();nh.exports=L7r});var uh=s((Q5e,sh)=>{"use strict";var R7r=j().isPrimitive,P7r=ah(),F7r=y();function M7r(r,e,t,i,n,a){var u,o;if(!(R7r(r)&&P7r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(F7r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}sh.exports=M7r});var vh=s((K5e,oh)=>{"use strict";var B7r=uh();oh.exports=B7r});var ch=s((rpe,fh)=>{"use strict";var k7r=gr().isPrimitive,j7r=y();function C7r(r,e){if(!k7r(r))throw new TypeError(j7r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}fh.exports=C7r});var ph=s((epe,lh)=>{"use strict";var U7r=ch();lh.exports=U7r});var mh=s((tpe,gh)=>{"use strict";function V7r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}gh.exports=V7r});var hh=s((ipe,dh)=>{"use strict";var G7r=mh();dh.exports=G7r});var yh=s((npe,qh)=>{"use strict";var x7r=y(),H7r=hh();function D7r(r,e,t){if(!H7r(r,e))throw new TypeError(x7r("invalid argument. %s must be broadcast compatible.",t))}qh.exports=D7r});var wh=s((ape,bh)=>{"use strict";var W7r=yh();bh.exports=W7r});var Nh=s((spe,Eh)=>{"use strict";function z7r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Eh.exports=z7r});var Sh=s((upe,Oh)=>{"use strict";var X7r=Nh();Oh.exports=X7r});var _h=s((ope,Ah)=>{"use strict";var J7r=y(),Y7r=Sh();function $7r(r,e,t,i){if(!Y7r(r,e))throw new TypeError(J7r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Ah.exports=$7r});var Ih=s((vpe,Th)=>{"use strict";var Z7r=_h();Th.exports=Z7r});var Rh=s((fpe,Lh)=>{"use strict";function Q7r(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}Lh.exports=Q7r});var Fh=s((cpe,Ph)=>{"use strict";function K7r(r,e,t,i){var n,a,u,o,f;for(n=r.length,a=t,u=t,f=0;f<n;f++){if(r[f]===0)return i[0]=t,i[1]=t,i;o=e[f],o>0?u+=o*(r[f]-1):o<0&&(a+=o*(r[f]-1))}return i[0]=a,i[1]=u,i}Ph.exports=K7r});var p1=s((lpe,Bh)=>{"use strict";var r9r=b(),Mh=Rh(),e9r=Fh();r9r(Mh,"assign",e9r);Bh.exports=Mh});var jh=s((ppe,kh)=>{"use strict";var t9r=p1();function i9r(r,e,t,i){var n=t9r(e,t,i);return n[0]>=0&&n[1]<r}kh.exports=i9r});var Uh=s((gpe,Ch)=>{"use strict";var n9r=jh();Ch.exports=n9r});var Gh=s((mpe,Vh)=>{"use strict";var a9r=Uh();function s9r(r,e,t,i){if(e.length&&!a9r(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}Vh.exports=s9r});var Hh=s((dpe,xh)=>{"use strict";var u9r=Gh();xh.exports=u9r});var Wh=s((hpe,Dh)=>{"use strict";var o9r=y();function v9r(r,e){if(r===void 0)throw new Error(o9r("invalid invocation. Must provide %s.",e))}Dh.exports=v9r});var g1=s((qpe,zh)=>{"use strict";var f9r=Wh();zh.exports=f9r});var Jh=s((ype,Xh)=>{"use strict";var c9r=y();function l9r(r,e,t,i){if(!(r>e))throw new TypeError(c9r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Xh.exports=l9r});var $h=s((bpe,Yh)=>{"use strict";var p9r=Jh();Yh.exports=p9r});var Qh=s((wpe,Zh)=>{"use strict";var g9r=y();function m9r(r,e,t,i){if(!(r>=e))throw new TypeError(g9r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Zh.exports=m9r});var rq=s((Epe,Kh)=>{"use strict";var d9r=Qh();Kh.exports=d9r});var tq=s((Npe,eq)=>{"use strict";var h9r=dr().isPrimitive,q9r=y();function y9r(r,e){if(!h9r(r))throw new TypeError(q9r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}eq.exports=y9r});var nq=s((Ope,iq)=>{"use strict";var b9r=tq();iq.exports=b9r});var sq=s((Spe,aq)=>{"use strict";var w9r=y();function E9r(r,e,t,i){if(!(r<e))throw new TypeError(w9r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}aq.exports=E9r});var oq=s((Ape,uq)=>{"use strict";var N9r=sq();uq.exports=N9r});var fq=s((_pe,vq)=>{"use strict";var O9r=y();function S9r(r,e,t,i){if(!(r<=e))throw new TypeError(O9r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}vq.exports=S9r});var lq=s((Tpe,cq)=>{"use strict";var A9r=fq();cq.exports=A9r});var gq=s((Ipe,pq)=>{"use strict";var _9r=Fr().isPrimitive,T9r=y();function I9r(r,e){if(!_9r(r))throw new TypeError(T9r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}pq.exports=I9r});var dq=s((Lpe,mq)=>{"use strict";var L9r=gq();mq.exports=L9r});var m1=s((Rpe,hq)=>{"use strict";var R9r=j().isPrimitive;function P9r(r){return R9r(r)&&r>=0}hq.exports=P9r});var d1=s((Ppe,qq)=>{"use strict";var F9r=j().isObject;function M9r(r){return F9r(r)&&r.valueOf()>=0}qq.exports=M9r});var bq=s((Fpe,yq)=>{"use strict";var B9r=m1(),k9r=d1();function j9r(r){return B9r(r)||k9r(r)}yq.exports=j9r});var Ha=s((Mpe,Eq)=>{"use strict";var wq=b(),h1=bq(),C9r=m1(),U9r=d1();wq(h1,"isPrimitive",C9r);wq(h1,"isObject",U9r);Eq.exports=h1});var Oq=s((Bpe,Nq)=>{"use strict";var V9r=Ha().isPrimitive,G9r=y();function x9r(r,e){if(!V9r(r))throw new TypeError(G9r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Nq.exports=x9r});var Aq=s((kpe,Sq)=>{"use strict";var H9r=Oq();Sq.exports=H9r});var Tq=s((jpe,_q)=>{"use strict";var D9r=j().isPrimitive,W9r=y();function z9r(r,e){if(!D9r(r))throw new TypeError(W9r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}_q.exports=z9r});var Lq=s((Cpe,Iq)=>{"use strict";var X9r=Tq();Iq.exports=X9r});var Pq=s((Upe,Rq)=>{"use strict";var J9r=y();function Y9r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(J9r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}Rq.exports=Y9r});var Mq=s((Vpe,Fq)=>{"use strict";var $9r=Pq();Fq.exports=$9r});var q1=s((Gpe,Bq)=>{"use strict";var Z9r=dr().isPrimitive;function Q9r(r){return Z9r(r)&&r>0}Bq.exports=Q9r});var y1=s((xpe,kq)=>{"use strict";var K9r=dr().isObject;function rgr(r){return K9r(r)&&r.valueOf()>0}kq.exports=rgr});var Cq=s((Hpe,jq)=>{"use strict";var egr=q1(),tgr=y1();function igr(r){return egr(r)||tgr(r)}jq.exports=igr});var ee=s((Dpe,Vq)=>{"use strict";var Uq=b(),b1=Cq(),ngr=q1(),agr=y1();Uq(b1,"isPrimitive",ngr);Uq(b1,"isObject",agr);Vq.exports=b1});var xq=s((Wpe,Gq)=>{"use strict";var sgr=ee().isPrimitive,ugr=y();function ogr(r,e){if(!sgr(r))throw new TypeError(ugr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Gq.exports=ogr});var w1=s((zpe,Hq)=>{"use strict";var vgr=xq();Hq.exports=vgr});var E1=s((Xpe,Dq)=>{"use strict";var fgr=j().isPrimitive;function cgr(r){return fgr(r)&&r>0}Dq.exports=cgr});var N1=s((Jpe,Wq)=>{"use strict";var lgr=j().isObject;function pgr(r){return lgr(r)&&r.valueOf()>0}Wq.exports=pgr});var Xq=s((Ype,zq)=>{"use strict";var ggr=E1(),mgr=N1();function dgr(r){return ggr(r)||mgr(r)}zq.exports=dgr});var W=s(($pe,Yq)=>{"use strict";var Jq=b(),O1=Xq(),hgr=E1(),qgr=N1();Jq(O1,"isPrimitive",hgr);Jq(O1,"isObject",qgr);Yq.exports=O1});var Zq=s((Zpe,$q)=>{"use strict";var ygr=W().isPrimitive,bgr=y();function wgr(r,e){if(!ygr(r))throw new TypeError(bgr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}$q.exports=wgr});var Kq=s((Qpe,Qq)=>{"use strict";var Egr=Zq();Qq.exports=Egr});var S1=s((Kpe,ry)=>{"use strict";var Ngr=j().isPrimitive;function Ogr(r){return Ngr(r)&&r>=0&&r<=1}ry.exports=Ogr});var A1=s((r7e,ey)=>{"use strict";var Sgr=j().isObject;function Agr(r){return Sgr(r)&&r.valueOf()>=0&&r.valueOf()<=1}ey.exports=Agr});var iy=s((e7e,ty)=>{"use strict";var _gr=S1(),Tgr=A1();function Igr(r){return _gr(r)||Tgr(r)}ty.exports=Igr});var bn=s((t7e,ay)=>{"use strict";var ny=b(),_1=iy(),Lgr=S1(),Rgr=A1();ny(_1,"isPrimitive",Lgr);ny(_1,"isObject",Rgr);ay.exports=_1});var uy=s((i7e,sy)=>{"use strict";var Pgr=bn().isPrimitive,Fgr=y();function Mgr(r,e){if(!Pgr(r))throw new TypeError(Fgr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}sy.exports=Mgr});var vy=s((n7e,oy)=>{"use strict";var Bgr=uy();oy.exports=Bgr});var cy=s((a7e,fy)=>{"use strict";var kgr=mr(),jgr=y();function Cgr(r,e){if(!kgr(r))throw new TypeError(jgr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}fy.exports=Cgr});var py=s((s7e,ly)=>{"use strict";var Ugr=cy();ly.exports=Ugr});var my=s((u7e,gy)=>{"use strict";function Vgr(r){return r.length===1||r[0].length===1}gy.exports=Vgr});var hy=s((o7e,dy)=>{"use strict";var Ggr=my();dy.exports=Ggr});var yy=s((v7e,qy)=>{"use strict";var xgr=mr(),Hgr=hy();function Dgr(r){return xgr(r)&&Hgr(r)}qy.exports=Dgr});var wy=s((f7e,by)=>{"use strict";var Wgr=yy();by.exports=Wgr});var Ny=s((c7e,Ey)=>{"use strict";var zgr=y(),Xgr=wy();function Jgr(r,e){if(!Xgr(r))throw new TypeError(zgr("invalid argument. %s must consist of only a single row or a single column.",e))}Ey.exports=Jgr});var Sy=s((l7e,Oy)=>{"use strict";var Ygr=Ny();Oy.exports=Ygr});var _y=s((p7e,Ay)=>{"use strict";function $gr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Ay.exports=$gr});var Iy=s((g7e,Ty)=>{"use strict";var Zgr=_y();Ty.exports=Zgr});var Ry=s((m7e,Ly)=>{"use strict";var Qgr=y(),Kgr=Iy();function rmr(r,e,t){if(!Kgr(r,e))throw new TypeError(Qgr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Ly.exports=rmr});var Fy=s((d7e,Py)=>{"use strict";var emr=Ry();Py.exports=emr});var By=s((h7e,My)=>{"use strict";var tmr=Q().isPrimitive,imr=y();function nmr(r,e){if(!tmr(r))throw new TypeError(imr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}My.exports=nmr});var jy=s((q7e,ky)=>{"use strict";var amr=By();ky.exports=amr});var Uy=s((y7e,Cy)=>{"use strict";var smr=y(),umr=Fr().isPrimitive;function omr(r,e){var t;for(t=0;t<r.length;t++)if(!umr(r[t]))throw new TypeError(smr("invalid argument. %s must contain only nonnegative integers.",e))}Cy.exports=omr});var Gy=s((b7e,Vy)=>{"use strict";var vmr=Uy();Vy.exports=vmr});var Hy=s((w7e,xy)=>{"use strict";var fmr=y(),cmr=dr().isPrimitive;function lmr(r,e){var t;for(t=0;t<r.length;t++)if(!cmr(r[t]))throw new TypeError(fmr("invalid argument. %s must contain only integers.",e))}xy.exports=lmr});var Wy=s((E7e,Dy)=>{"use strict";var pmr=Hy();Dy.exports=pmr});var Xy=s((N7e,zy)=>{"use strict";var gmr=y();function mmr(r){throw new Error(gmr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}zy.exports=mmr});var Yy=s((O7e,Jy)=>{"use strict";var dmr=Xy();Jy.exports=dmr});var Qy=s((S7e,Zy)=>{"use strict";var $y=w1(),hmr=g1();function qmr(r,e,t){$y(r,"Number of rows"),$y(e,"Number of columns"),hmr(t,"a pseudorandom number generator seed")}Zy.exports=qmr});var rb=s((A7e,Ky)=>{"use strict";var ymr=Qy();Ky.exports=ymr});var tb=s((_7e,eb)=>{"use strict";var bmr=hr(),wmr=Yo();function Emr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&bmr(r.length)&&r.length>=0&&r.length<=wmr}eb.exports=Emr});var nb=s((T7e,ib)=>{"use strict";var Nmr=tb();ib.exports=Nmr});var sb=s((I7e,ab)=>{"use strict";var Omr=nb(),Smr=y();function Amr(r){if(typeof r!="function")throw new TypeError(Smr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Omr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}ab.exports=Amr});var T1=s((L7e,ub)=>{"use strict";var _mr=sb();ub.exports=_mr});var fb=s((R7e,vb)=>{"use strict";var I1=dr(),ob=b(),L1=T1(),Tmr=L1(I1.isPrimitive),Imr=L1(I1.isObject),R1=L1(I1);ob(R1,"primitives",Tmr);ob(R1,"objects",Imr);vb.exports=R1});var pb=s((P7e,lb)=>{"use strict";var P1=Fr(),cb=b(),F1=T1(),Lmr=F1(P1.isPrimitive),Rmr=F1(P1.isObject),M1=F1(P1);cb(M1,"primitives",Lmr);cb(M1,"objects",Rmr);lb.exports=M1});var mb=s((F7e,gb)=>{"use strict";var te=rr(),Pmr=mr(),Fmr=dr().isPrimitive,Mmr=fb().primitives,Bmr=Fr().isPrimitive,kmr=pb().primitives,jmr=Ha().isPrimitive,Cmr=j().isPrimitive,Umr=ee().isPrimitive,Vmr=W().isPrimitive,Gmr=Q().isPrimitive;function xmr(r){return te(r,"isArray",Pmr),te(r,"isInteger",Fmr),te(r,"isIntegerArray",Mmr),te(r,"isNonNegativeInteger",Bmr),te(r,"isNonNegativeIntegerArray",kmr),te(r,"isNonNegativeNumber",jmr),te(r,"isNumber",Cmr),te(r,"isPositiveInteger",Umr),te(r,"isPositiveNumber",Vmr),te(r,"isString",Gmr),r}gb.exports=xmr});var hb=s((M7e,db)=>{"use strict";var X=rr(),Hmr=vh(),Dmr=ph(),Wmr=wh(),zmr=Ih(),Xmr=Hh(),Jmr=g1(),Ymr=$h(),$mr=rq(),Zmr=nq(),Qmr=oq(),Kmr=lq(),rdr=dq(),edr=Aq(),tdr=Lq(),idr=Mq(),ndr=w1(),adr=Kq(),sdr=vy(),udr=py(),odr=Sy(),vdr=Fy(),fdr=jy(),cdr=Gy(),ldr=Wy(),pdr=Yy(),gdr=rb(),mdr=mb();function ddr(r){return X(r,"isBetween",Hmr),X(r,"isBoolean",Dmr),X(r,"isBroadcastCompatible",Wmr),X(r,"isBroadcastCompatibleWith",zmr),X(r,"isBufferLengthCompatible",Xmr),X(r,"isDefined",Jmr),X(r,"isGreaterThan",Ymr),X(r,"isGreaterThanEqual",$mr),X(r,"isInteger",Zmr),X(r,"isLessThan",Qmr),X(r,"isLessThanEqual",Kmr),X(r,"isNonNegativeInteger",rdr),X(r,"isNonNegativeNumber",edr),X(r,"isNumber",tdr),X(r,"isOneOf",idr),X(r,"isPositiveInteger",ndr),X(r,"isPositiveNumber",adr),X(r,"isProbability",sdr),X(r,"isRange",udr),X(r,"isRange1d",odr),X(r,"isSameShape",vdr),X(r,"isString",fdr),X(r,"isValidShape",cdr),X(r,"isValidStrides",ldr),X(r,"unrecognizedOptionName",pdr),X(r,"verifyCommonPRNGArgs",gdr),X(r,"base",mdr({})),r}db.exports=ddr});var yb=s((B7e,qb)=>{"use strict";var B1=4;function hdr(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%B1,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<B1)return n;for(v=f;v<r;v+=B1)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}qb.exports=hdr});var wb=s((k7e,bb)=>{"use strict";var wn=4;function qdr(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%wn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<wn)return a;for(l=c;l<r;l+=wn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=wn,v+=wn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}bb.exports=qdr});var k1=s((j7e,Nb)=>{"use strict";var ydr=b(),Eb=yb(),bdr=wb();ydr(Eb,"ndarray",bdr);Nb.exports=Eb});var Ab=s((C7e,Sb)=>{"use strict";var Ob=rr(),wdr=k1().ndarray,Edr=k1().ndarray;function Ndr(r){return Ob(r,"daxpy",wdr),Ob(r,"saxpy",Edr),r}Sb.exports=Ndr});var Tb=s((U7e,_b)=>{"use strict";var Odr=Wt(),Sdr=er();function Adr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Sdr(r)==="[object Error]")return!0;r=Odr(r)}return!1}_b.exports=Adr});var Lb=s((V7e,Ib)=>{"use strict";var _dr=Tb();Ib.exports=_dr});var j1=s((G7e,Rb)=>{"use strict";function Tdr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Rb.exports=Tdr});var Fb=s((x7e,Pb)=>{"use strict";var Idr=j1(),Ldr=Idr();Pb.exports=Ldr});var kb=s((H7e,Bb)=>{"use strict";var Rdr=b(),Mb=j1(),Pdr=Fb();Rdr(Mb,"REGEXP",Pdr);Bb.exports=Mb});var Cb=s((D7e,jb)=>{"use strict";var Fdr=Q().isPrimitive,Mdr=kb(),Bdr=y();function kdr(r){if(!Fdr(r))throw new TypeError(Bdr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=Mdr().exec(r),r?new RegExp(r[1],r[2]):null}jb.exports=kdr});var Vb=s((W7e,Ub)=>{"use strict";var jdr=Cb();Ub.exports=jdr});var C1=s((z7e,Gb)=>{"use strict";var Cdr=j().isPrimitive,Udr=E();function Vdr(r){return Cdr(r)&&Udr(r)}Gb.exports=Vdr});var U1=s((X7e,xb)=>{"use strict";var Gdr=j().isObject,xdr=E();function Hdr(r){return Gdr(r)&&xdr(r.valueOf())}xb.exports=Hdr});var Db=s((J7e,Hb)=>{"use strict";var Ddr=C1(),Wdr=U1();function zdr(r){return Ddr(r)||Wdr(r)}Hb.exports=zdr});var vr=s((Y7e,zb)=>{"use strict";var Wb=b(),V1=Db(),Xdr=C1(),Jdr=U1();Wb(V1,"isPrimitive",Xdr);Wb(V1,"isObject",Jdr);zb.exports=V1});var $b=s(($7e,Yb)=>{"use strict";var Xb=vr(),Ydr=Dr(),$dr=Q().isPrimitive,Zdr=dr().isPrimitive,Jb=y();function Qdr(r,e,t){var i,n;if(!Ydr(r)&&!$dr(r))throw new TypeError(Jb("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Zdr(t))throw new TypeError(Jb("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Xb(e)){for(;n<i;n++)if(Xb(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Yb.exports=Qdr});var Da=s((Z7e,Zb)=>{"use strict";var Kdr=$b();Zb.exports=Kdr});var Wa=s((Q7e,Qb)=>{"use strict";function rhr(r){return Object.keys(Object(r))}Qb.exports=rhr});var rw=s((K7e,Kb)=>{"use strict";var ehr=Wa();function thr(){return(ehr(arguments)||"").length!==2}function ihr(){return thr(1,2)}Kb.exports=ihr});var tw=s((r9e,ew)=>{"use strict";var nhr=typeof Object.keys<"u";ew.exports=nhr});var G1=s((e9e,iw)=>{"use strict";var ahr=er();function shr(r){return ahr(r)==="[object Arguments]"}iw.exports=shr});var sw=s((t9e,aw)=>{"use strict";var uhr=G1(),nw;function ohr(){return uhr(arguments)}nw=ohr();aw.exports=nw});var x1=s((i9e,uw)=>{"use strict";var vhr=Object.prototype.propertyIsEnumerable;uw.exports=vhr});var fw=s((n9e,vw)=>{"use strict";var fhr=x1(),ow;function chr(){return!fhr.call("beep","0")}ow=chr();vw.exports=ow});var lw=s((a9e,cw)=>{"use strict";var lhr=Q(),phr=vr().isPrimitive,ghr=dr().isPrimitive,mhr=x1(),dhr=fw();function hhr(r,e){var t;return r==null?!1:(t=mhr.call(r,e),!t&&dhr&&lhr(r)?(e=+e,!phr(e)&&ghr(e)&&e>=0&&e<r.length):t)}cw.exports=hhr});var En=s((s9e,pw)=>{"use strict";var qhr=lw();pw.exports=qhr});var mw=s((u9e,gw)=>{"use strict";var yhr=S(),bhr=En(),whr=mr(),Ehr=hr(),Nhr=oi();function Ohr(r){return r!==null&&typeof r=="object"&&!whr(r)&&typeof r.length=="number"&&Ehr(r.length)&&r.length>=0&&r.length<=Nhr&&yhr(r,"callee")&&!bhr(r,"callee")}gw.exports=Ohr});var D1=s((o9e,dw)=>{"use strict";var Shr=sw(),Ahr=G1(),_hr=mw(),H1;Shr?H1=Ahr:H1=_hr;dw.exports=H1});var yw=s((v9e,qw)=>{"use strict";var Thr=D1(),hw=Wa(),Ihr=Array.prototype.slice;function Lhr(r){return Thr(r)?hw(Ihr.call(r)):hw(r)}qw.exports=Lhr});var ww=s((f9e,bw)=>{"use strict";function Rhr(){}bw.exports=Rhr});var C=s((c9e,Ew)=>{"use strict";var Phr=ww();Ew.exports=Phr});var Ow=s((l9e,Nw)=>{"use strict";var Fhr=En(),Mhr=C(),Bhr=Fhr(Mhr,"prototype");Nw.exports=Bhr});var Aw=s((p9e,Sw)=>{"use strict";var khr=En(),jhr={toString:null},Chr=!khr(jhr,"toString");Sw.exports=Chr});var W1=s((g9e,_w)=>{"use strict";function Uhr(r){return r.constructor&&r.constructor.prototype===r}_w.exports=Uhr});var Tw=s((m9e,Vhr)=>{Vhr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Lw=s((d9e,Iw)=>{"use strict";var Ghr=typeof window>"u"?void 0:window;Iw.exports=Ghr});var Mw=s((h9e,Fw)=>{"use strict";var xhr=S(),Hhr=Da(),Rw=ba(),Dhr=W1(),Whr=Tw(),_i=Lw(),Pw;function zhr(){var r;if(Rw(_i)==="undefined")return!1;for(r in _i)try{Hhr(Whr,r)===-1&&xhr(_i,r)&&_i[r]!==null&&Rw(_i[r])==="object"&&Dhr(_i[r])}catch{return!0}return!1}Pw=zhr();Fw.exports=Pw});var kw=s((q9e,Bw)=>{"use strict";var Xhr=typeof window<"u";Bw.exports=Xhr});var Uw=s((y9e,Cw)=>{"use strict";var Jhr=Mw(),jw=W1(),Yhr=kw();function $hr(r){if(Yhr===!1&&!Jhr)return jw(r);try{return jw(r)}catch{return!1}}Cw.exports=$hr});var Vw=s((b9e,Zhr)=>{Zhr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Hw=s((w9e,xw)=>{"use strict";var Qhr=Eo(),z1=S(),Khr=D1(),rqr=Ow(),eqr=Aw(),tqr=Uw(),Gw=Vw();function iqr(r){var e,t,i,n,a,u,o;if(n=[],Khr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!z1(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Qhr(r))return n;t=rqr&&i}for(a in r)!(t&&a==="prototype")&&z1(r,a)&&n.push(String(a));if(eqr)for(e=tqr(r),o=0;o<Gw.length;o++)u=Gw[o],!(e&&u==="constructor")&&z1(r,u)&&n.push(String(u));return n}xw.exports=iqr});var Ww=s((E9e,Dw)=>{"use strict";var nqr=rw(),aqr=tw(),sqr=Wa(),uqr=yw(),oqr=Hw(),za;aqr?nqr()?za=uqr:za=sqr:za=oqr;Dw.exports=za});var Ti=s((N9e,zw)=>{"use strict";var vqr=Ww();zw.exports=vqr});var Jw=s((O9e,Xw)=>{"use strict";var fqr=typeof Object.getOwnPropertyNames<"u";Xw.exports=fqr});var Zw=s((S9e,$w)=>{"use strict";var Yw=Si(),cqr=Yw.getOwnPropertyNames;function lqr(r){return cqr(Yw(r))}$w.exports=lqr});var Kw=s((A9e,Qw)=>{"use strict";var pqr=Si(),gqr=Ti();function mqr(r){return gqr(pqr(r))}Qw.exports=mqr});var eE=s((_9e,rE)=>{"use strict";var dqr=Jw(),hqr=Zw(),qqr=Kw(),X1;dqr?X1=hqr:X1=qqr;rE.exports=X1});var iE=s((T9e,tE)=>{"use strict";var yqr=typeof Object.getOwnPropertyDescriptor<"u";tE.exports=yqr});var aE=s((I9e,nE)=>{"use strict";var bqr=Object.getOwnPropertyDescriptor;function wqr(r,e){var t;return r==null?null:(t=bqr(r,e),t===void 0?null:t)}nE.exports=wqr});var uE=s((L9e,sE)=>{"use strict";var Eqr=S();function Nqr(r,e){return Eqr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}sE.exports=Nqr});var vE=s((R9e,oE)=>{"use strict";var Oqr=iE(),Sqr=aE(),Aqr=uE(),J1;Oqr?J1=Sqr:J1=Aqr;oE.exports=J1});var cE=s((P9e,fE)=>{"use strict";var _qr=typeof Buffer=="function"?Buffer:null;fE.exports=_qr});var pE=s((F9e,lE)=>{"use strict";var Tqr=Ct(),Xa=cE();function Iqr(){var r,e;if(typeof Xa!="function")return!1;try{typeof Xa.from=="function"?e=Xa.from([1,2,3,4]):e=new Xa([1,2,3,4]),r=Tqr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}lE.exports=Iqr});var mE=s((M9e,gE)=>{"use strict";var Lqr=pE();gE.exports=Lqr});var qE=s(Ja=>{"use strict";Ja.byteLength=Pqr;Ja.toByteArray=Mqr;Ja.fromByteArray=jqr;var ie=[],Gr=[],Rqr=typeof Uint8Array<"u"?Uint8Array:Array,Y1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(zt=0,dE=Y1.length;zt<dE;++zt)ie[zt]=Y1[zt],Gr[Y1.charCodeAt(zt)]=zt;var zt,dE;Gr["-".charCodeAt(0)]=62;Gr["_".charCodeAt(0)]=63;function hE(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Pqr(r){var e=hE(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Fqr(r,e,t){return(e+t)*3/4-t}function Mqr(r){var e,t=hE(r),i=t[0],n=t[1],a=new Rqr(Fqr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Gr[r.charCodeAt(f)]<<18|Gr[r.charCodeAt(f+1)]<<12|Gr[r.charCodeAt(f+2)]<<6|Gr[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Gr[r.charCodeAt(f)]<<2|Gr[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=Gr[r.charCodeAt(f)]<<10|Gr[r.charCodeAt(f+1)]<<4|Gr[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Bqr(r){return ie[r>>18&63]+ie[r>>12&63]+ie[r>>6&63]+ie[r&63]}function kqr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Bqr(i));return n.join("")}function jqr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(kqr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ie[e>>2]+ie[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ie[e>>10]+ie[e>>4&63]+ie[e<<2&63]+"=")),n.join("")}});var yE=s($1=>{$1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(g?-1:1)*u*Math.pow(2,a-i)};$1.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+g]=u&255,g+=h,u/=256,v-=8);r[t+g-h]|=d*128}});var kE=s(Pi=>{"use strict";var Z1=qE(),Li=yE(),bE=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Pi.Buffer=w;Pi.SlowBuffer=Hqr;Pi.INSPECT_MAX_BYTES=50;var Ya=2147483647;Pi.kMaxLength=Ya;w.TYPED_ARRAY_SUPPORT=Cqr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Cqr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function pe(r){if(r>Ya)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return e2(r)}return OE(r,e,t)}w.poolSize=8192;function OE(r,e,t){if(typeof r=="string")return Vqr(r,e);if(ArrayBuffer.isView(r))return Gqr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ne(r,ArrayBuffer)||r&&ne(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ne(r,SharedArrayBuffer)||r&&ne(r.buffer,SharedArrayBuffer)))return K1(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=xqr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return OE(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function SE(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Uqr(r,e,t){return SE(r),r<=0?pe(r):e!==void 0?typeof t=="string"?pe(r).fill(e,t):pe(r).fill(e):pe(r)}w.alloc=function(r,e,t){return Uqr(r,e,t)};function e2(r){return SE(r),pe(r<0?0:t2(r)|0)}w.allocUnsafe=function(r){return e2(r)};w.allocUnsafeSlow=function(r){return e2(r)};function Vqr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=AE(r,e)|0,i=pe(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function Q1(r){let e=r.length<0?0:t2(r.length)|0,t=pe(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function Gqr(r){if(ne(r,Uint8Array)){let e=new Uint8Array(r);return K1(e.buffer,e.byteOffset,e.byteLength)}return Q1(r)}function K1(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function xqr(r){if(w.isBuffer(r)){let e=t2(r.length)|0,t=pe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||n2(r.length)?pe(0):Q1(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Q1(r.data)}function t2(r){if(r>=Ya)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ya.toString(16)+" bytes");return r|0}function Hqr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(ne(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),ne(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(ne(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function AE(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ne(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return r2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return BE(r).length;default:if(n)return i?-1:r2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=AE;function Dqr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return ryr(this,e,t);case"utf8":case"utf-8":return TE(this,e,t);case"ascii":return Qqr(this,e,t);case"latin1":case"binary":return Kqr(this,e,t);case"base64":return $qr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return eyr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Xt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Xt(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Xt(this,t,t+3),Xt(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Xt(this,t,t+7),Xt(this,t+1,t+6),Xt(this,t+2,t+5),Xt(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?TE(this,0,e):Dqr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=Pi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};bE&&(w.prototype[bE]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(ne(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function _E(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,n2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:wE(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):wE(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function wE(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return _E(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return _E(this,e,t,i,!1)};function Wqr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(n2(o))return u;r[t+u]=o}return u}function zqr(r,e,t,i){return $a(r2(e,r.length-t),r,t,i)}function Xqr(r,e,t,i){return $a(ayr(e),r,t,i)}function Jqr(r,e,t,i){return $a(BE(e),r,t,i)}function Yqr(r,e,t,i){return $a(syr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return Wqr(this,e,t,i);case"utf8":case"utf-8":return zqr(this,e,t,i);case"ascii":case"latin1":case"binary":return Xqr(this,e,t,i);case"base64":return Jqr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yqr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $qr(r,e,t){return e===0&&t===r.length?Z1.fromByteArray(r):Z1.fromByteArray(r.slice(e,t))}function TE(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Zqr(i)}var EE=4096;function Zqr(r){let e=r.length;if(e<=EE)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=EE));return t}function Qqr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Kqr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function ryr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=uyr[r[a]];return n}function eyr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=Ke(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Nn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=Ke(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Nn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=Ke(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Nn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=Ke(function(e){e=e>>>0,Ri(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Nn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Li.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Li.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Li.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Li.read(this,e,!1,52,8)};function br(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;br(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;br(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function IE(r,e,t,i,n){ME(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function LE(r,e,t,i,n){ME(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=Ke(function(e,t=0){return IE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=Ke(function(e,t=0){return LE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);br(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);br(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||br(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=Ke(function(e,t=0){return IE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=Ke(function(e,t=0){return LE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function RE(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function PE(r,e,t,i,n){return e=+e,t=t>>>0,n||RE(r,e,t,4,34028234663852886e22,-34028234663852886e22),Li.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return PE(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return PE(this,e,t,!1,i)};function FE(r,e,t,i,n){return e=+e,t=t>>>0,n||RE(r,e,t,8,17976931348623157e292,-17976931348623157e292),Li.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return FE(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return FE(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Ii={};function i2(r,e,t){Ii[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}i2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);i2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);i2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=NE(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=NE(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function NE(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function tyr(r,e,t){Ri(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Nn(e,r.length-(t+1))}function ME(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ii.ERR_OUT_OF_RANGE("value",o,r)}tyr(i,n,a)}function Ri(r,e){if(typeof r!="number")throw new Ii.ERR_INVALID_ARG_TYPE(e,"number",r)}function Nn(r,e,t){throw Math.floor(r)!==r?(Ri(r,t),new Ii.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ii.ERR_BUFFER_OUT_OF_BOUNDS:new Ii.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var iyr=/[^+/0-9A-Za-z-_]/g;function nyr(r){if(r=r.split("=")[0],r=r.trim().replace(iyr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function r2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function ayr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function syr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function BE(r){return Z1.toByteArray(nyr(r))}function $a(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function ne(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function n2(r){return r!==r}var uyr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ke(r){return typeof BigInt>"u"?oyr:r}function oyr(){throw new Error("BigInt not supported")}});var CE=s((U9e,jE)=>{"use strict";var vyr=kE().Buffer;jE.exports=vyr});var VE=s((V9e,UE)=>{"use strict";function fyr(){throw new Error("not implemented")}UE.exports=fyr});var rt=s((G9e,GE)=>{"use strict";var cyr=mE(),lyr=CE(),pyr=VE(),a2;cyr()?a2=lyr:a2=pyr;GE.exports=a2});var HE=s((x9e,xE)=>{"use strict";var gyr=T(),myr=rt(),dyr=gyr(myr.from);xE.exports=dyr});var WE=s((H9e,DE)=>{"use strict";var hyr=Ct(),qyr=y(),yyr=rt();function byr(r){if(!hyr(r))throw new TypeError(qyr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return yyr.from(r)}DE.exports=byr});var XE=s((D9e,zE)=>{"use strict";var wyr=Ct(),Eyr=y(),Nyr=rt();function Oyr(r){if(!wyr(r))throw new TypeError(Eyr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Nyr(r)}zE.exports=Oyr});var YE=s((W9e,JE)=>{"use strict";var Syr=HE(),Ayr=WE(),_yr=XE(),s2;Syr?s2=Ayr:s2=_yr;JE.exports=s2});var QE=s((z9e,ZE)=>{"use strict";var Tyr=li(),Iyr=Qr(),Lyr=ci(),Ryr=fi(),Pyr=Ut(),Fyr=$e(),Myr=lr(),Byr=Zr(),kyr=cr(),$E;function jyr(r){return new Tyr(r)}function Cyr(r){return new Iyr(r)}function Uyr(r){return new Lyr(r)}function Vyr(r){return new Ryr(r)}function Gyr(r){return new Pyr(r)}function xyr(r){return new Fyr(r)}function Hyr(r){return new Myr(r)}function Dyr(r){return new Byr(r)}function Wyr(r){return new kyr(r)}function zyr(){var r={int8array:jyr,uint8array:Cyr,uint8clampedarray:Uyr,int16array:Vyr,uint16array:Gyr,int32array:xyr,uint32array:Hyr,float32array:Dyr,float64array:Wyr};return r}$E=zyr();ZE.exports=$E});var iN=s((X9e,tN)=>{"use strict";var Za=S(),u2=mr(),KE=Ct(),Xyr=Lb(),rN=ba(),Jyr=Vb(),Yyr=Da(),eN=Ti(),$yr=eE(),On=vE(),Zyr=Wt(),Sn=Ye(),Qyr=YE(),Kyr=QE();function rbr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(Zyr(r)),e.push(r),n.push(o),t=$yr(r),f=0;f<t.length;f++)i=t[f],a=On(r,i),Za(a,"value")&&(u=u2(r[i])?[]:{},a.value=Jt(r[i],u,e,n,-1)),Sn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function ebr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=eN(r),f=0;f<i.length;f++)u=i[f],n=On(r,u),Za(n,"value")&&(a=u2(r[u])?[]:{},n.value=Jt(r[u],a,e,t,-1)),Sn(o,u,n);return o}function Jt(r,e,t,i,n){var a,u,o,f,v,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(KE(r))return Qyr(r);if(Xyr(r))return ebr(r);if(o=rN(r),o==="date")return new Date(+r);if(o==="regexp")return Jyr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Kyr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?rbr(r):{};if(u=eN(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=rN(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||KE(p)){a==="object"?(f=On(r,c),Za(f,"value")&&(f.value=Jt(p)),Sn(e,c,f)):e[c]=Jt(p);continue}if(g=Yyr(t,p),g!==-1){e[c]=i[g];continue}l=u2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Jt(p,l,t,i,n):(f=On(r,c),Za(f,"value")&&(f.value=Jt(p,l,t,i,n)),Sn(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=On(r,c),Sn(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}tN.exports=Jt});var aN=s((J9e,nN)=>{"use strict";var tbr=mr(),ibr=Fr().isPrimitive,nbr=y(),abr=I(),sbr=iN();function ubr(r,e){var t;if(arguments.length>1){if(!ibr(e))throw new TypeError(nbr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=abr;return t=tbr(r)?new Array(r.length):{},sbr(r,t,[r],[t],e)}nN.exports=ubr});var An=s((Y9e,sN)=>{"use strict";var obr=aN();sN.exports=obr});var uN=s(($9e,vbr)=>{vbr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var vN=s((Z9e,oN)=>{"use strict";var fbr=An(),cbr=uN();function lbr(){return fbr(cbr)}oN.exports=lbr});var fN=s((Q9e,pbr)=>{pbr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var lN=s((K9e,cN)=>{"use strict";var gbr=An(),mbr=fN();function dbr(){return gbr(mbr)}cN.exports=dbr});var pN=s((rge,hbr)=>{hbr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var mN=s((ege,gN)=>{"use strict";var qbr=An(),ybr=pN();function bbr(){return qbr(ybr)}gN.exports=bbr});var dN=s((tge,wbr)=>{wbr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var qN=s((ige,hN)=>{"use strict";var Ebr=dN();function Nbr(){return Ebr.slice()}hN.exports=Nbr});var yN=s((nge,Obr)=>{Obr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var wN=s((age,bN)=>{"use strict";var Sbr=An(),Abr=yN();function _br(){return Sbr(Abr)}bN.exports=_br});var NN=s((sge,EN)=>{"use strict";var _n=rr(),Tbr=vN(),Ibr=lN(),Lbr=mN(),Rbr=qN(),Pbr=wN();function Fbr(r){return _n(r,"AFINN_111",Tbr),_n(r,"AFINN_96",Ibr),_n(r,"ANSCOMBES_QUARTET",Lbr),_n(r,"HERNDON_VENUS_SEMIDIAMETERS",Rbr),_n(r,"NIGHTINGALES_ROSE",Pbr),r}EN.exports=Fbr});var SN=s((uge,ON)=>{"use strict";function Mbr(r,e){return r+e}ON.exports=Mbr});var _N=s((oge,AN)=>{"use strict";var Bbr=SN();AN.exports=Bbr});var IN=s((vge,TN)=>{"use strict";var kbr=I(),jbr=U();function Cbr(r){return r===kbr||r===jbr}TN.exports=Cbr});var jr=s((fge,LN)=>{"use strict";var Ubr=IN();LN.exports=Ubr});var FN=s((cge,PN)=>{"use strict";var RN=Sa();function Vbr(r){return r>0?RN(r-1):RN(r+1)}PN.exports=Vbr});var Qa=s((lge,MN)=>{"use strict";var Gbr=FN();MN.exports=Gbr});var kN=s((pge,BN)=>{"use strict";var xbr=Math.sqrt;BN.exports=xbr});var V=s((gge,jN)=>{"use strict";var Hbr=kN();jN.exports=Hbr});var UN=s((mge,CN)=>{"use strict";function Dbr(r){return Math.abs(r)}CN.exports=Dbr});var Y=s((dge,VN)=>{"use strict";var Wbr=UN();VN.exports=Wbr});var xN=s((hge,GN)=>{"use strict";var zbr=Qr(),Xbr=Ut(),Jbr={uint16:Xbr,uint8:zbr};GN.exports=Jbr});var zN=s((qge,WN)=>{"use strict";var HN=xN(),DN;function Ybr(){var r,e;return r=new HN.uint16(1),r[0]=4660,e=new HN.uint8(r.buffer),e[0]===52}DN=Ybr();WN.exports=DN});var zr=s((yge,XN)=>{"use strict";var $br=zN();XN.exports=$br});var $N=s((bge,YN)=>{"use strict";var Zbr=zr(),JN,o2,v2;Zbr===!0?(o2=1,v2=0):(o2=0,v2=1);JN={HIGH:o2,LOW:v2};YN.exports=JN});var f2=s((wge,rO)=>{"use strict";var Qbr=lr(),Kbr=cr(),QN=$N(),KN=new Kbr(1),ZN=new Qbr(KN.buffer),rwr=QN.HIGH,ewr=QN.LOW;function twr(r,e,t,i){return KN[0]=r,e[i]=ZN[rwr],e[i+t]=ZN[ewr],e}rO.exports=twr});var tO=s((Ege,eO)=>{"use strict";var iwr=f2();function nwr(r){return iwr(r,[0>>>0,0>>>0],1,0)}eO.exports=nwr});var Fi=s((Nge,nO)=>{"use strict";var awr=b(),iO=tO(),swr=f2();awr(iO,"assign",swr);nO.exports=iO});var sO=s((Oge,aO)=>{"use strict";var uwr=zr(),c2;uwr===!0?c2=0:c2=1;aO.exports=c2});var oO=s((Sge,uO)=>{"use strict";var owr=lr(),vwr=cr(),fwr=sO(),l2=new vwr(1),cwr=new owr(l2.buffer);function lwr(r,e){return l2[0]=r,cwr[fwr]=e>>>0,l2[0]}uO.exports=lwr});var ge=s((Age,vO)=>{"use strict";var pwr=oO();vO.exports=pwr});var cO=s((_ge,fO)=>{"use strict";function gwr(r){return r|0}fO.exports=gwr});var p2=s((Tge,lO)=>{"use strict";var mwr=cO();lO.exports=mwr});var ae=s((Ige,pO)=>{"use strict";var dwr=2147483647;pO.exports=dwr});var g2=s((Lge,gO)=>{"use strict";var hwr=2147483648;gO.exports=hwr});var dO=s((Rge,mO)=>{"use strict";var qwr=zr(),m2;qwr===!0?m2=1:m2=0;mO.exports=m2});var yO=s((Pge,qO)=>{"use strict";var ywr=lr(),bwr=cr(),wwr=dO(),hO=new bwr(1),Ewr=new ywr(hO.buffer);function Nwr(r){return hO[0]=r,Ewr[wwr]}qO.exports=Nwr});var ar=s((Fge,bO)=>{"use strict";var Owr=yO();bO.exports=Owr});var NO=s((Mge,EO)=>{"use strict";var Swr=zr(),wO,d2,h2;Swr===!0?(d2=1,h2=0):(d2=0,h2=1);wO={HIGH:d2,LOW:h2};EO.exports=wO});var TO=s((Bge,_O)=>{"use strict";var Awr=lr(),_wr=cr(),SO=NO(),AO=new _wr(1),OO=new Awr(AO.buffer),Twr=SO.HIGH,Iwr=SO.LOW;function Lwr(r,e){return OO[Twr]=r,OO[Iwr]=e,AO[0]}_O.exports=Lwr});var Mi=s((kge,IO)=>{"use strict";var Rwr=TO();IO.exports=Rwr});var RO=s((jge,LO)=>{"use strict";var Pwr=g2(),Fwr=ae(),Mwr=Fi(),Bwr=ar(),kwr=Mi(),q2=[0,0];function jwr(r,e){var t,i;return Mwr.assign(r,q2,1,0),t=q2[0],t&=Fwr,i=Bwr(e),i&=Pwr,t|=i,kwr(t,q2[1])}LO.exports=jwr});var Ka=s((Cge,PO)=>{"use strict";var Cwr=RO();PO.exports=Cwr});var BO=s((Uge,MO)=>{"use strict";var FO=Qa(),Uwr=Ka(),Vwr=U(),r0=I();function Gwr(r,e){return e===Vwr?r0:e===r0?0:e>0?FO(e)?r:0:FO(e)?Uwr(r0,r):r0}MO.exports=Gwr});var jO=s((Vge,kO)=>{"use strict";var xwr=ae(),Hwr=ar(),Dwr=1072693247,e0=1e300,t0=1e-300;function Wwr(r,e){var t,i;return i=Hwr(r),t=i&xwr,t<=Dwr?e<0?e0*e0:t0*t0:e>0?e0*e0:t0*t0}kO.exports=Wwr});var VO=s((Gge,UO)=>{"use strict";var zwr=Y(),CO=I();function Xwr(r,e){return r===-1?(r-r)/(r-r):r===1?1:zwr(r)<1==(e===CO)?0:CO}UO.exports=Xwr});var xO=s((xge,GO)=>{"use strict";var Jwr=zr(),y2;Jwr===!0?y2=1:y2=0;GO.exports=y2});var DO=s((Hge,HO)=>{"use strict";var Ywr=lr(),$wr=cr(),Zwr=xO(),b2=new $wr(1),Qwr=new Ywr(b2.buffer);function Kwr(r,e){return b2[0]=r,Qwr[Zwr]=e>>>0,b2[0]}HO.exports=Kwr});var me=s((Dge,WO)=>{"use strict";var rEr=DO();WO.exports=rEr});var se=s((Wge,zO)=>{"use strict";var eEr=1023;zO.exports=eEr});var JO=s((zge,XO)=>{"use strict";function tEr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}XO.exports=tEr});var QO=s((Xge,ZO)=>{"use strict";var iEr=ar(),i0=ge(),YO=me(),nEr=se(),aEr=JO(),sEr=1048575,$O=1048576,uEr=1072693248,oEr=536870912,vEr=524288,fEr=20,cEr=9007199254740992,lEr=.9617966939259756,pEr=.9617967009544373,gEr=-7028461650952758e-24,mEr=[1,1.5],dEr=[0,.5849624872207642],hEr=[0,1350039202129749e-23];function qEr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,D,K,G;return D=0,t<$O&&(e*=cEr,D-=53,t=iEr(e)),D+=(t>>fEr)-nEr|0,K=t&sEr|0,t=K|uEr|0,K<=235662?G=0:K<767610?G=1:(G=0,D+=1,t-=$O),e=YO(e,t),c=mEr[G],F=e-c,A=1/(e+c),n=F*A,u=i0(n,0),i=(t>>1|oEr)+vEr,i+=G<<18,f=YO(0,i),v=e-(f-c),o=A*(F-u*f-u*v),a=n*n,O=a*a*aEr(a),O+=o*(u+n),a=u*u,f=3+a+O,f=i0(f,0),v=O-(f-3-a),F=u*f,A=o*f+v*n,p=F+A,p=i0(p,0),g=A-(p-F),h=pEr*p,d=gEr*p+g*lEr+hEr[G],l=dEr[G],N=D,m=h+d+l+N,m=i0(m,0),q=d-(m-N-l-h),r[0]=m,r[1]=q,r}ZO.exports=qEr});var rS=s((Jge,KO)=>{"use strict";function yEr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}KO.exports=yEr});var tS=s((Yge,eS)=>{"use strict";var bEr=ge(),wEr=rS(),EEr=1.4426950408889634,NEr=1.4426950216293335,OEr=19259629911266175e-24;function SEr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*wEr(n),u=NEr*n,o=n*OEr-a*EEr,i=u+o,i=bEr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}eS.exports=SEr});var w2=s(($ge,iS)=>{"use strict";var AEr=1023;iS.exports=AEr});var aS=s((Zge,nS)=>{"use strict";var _Er=-1023;nS.exports=_Er});var E2=s((Qge,sS)=>{"use strict";var TEr=-1074;sS.exports=TEr});var N2=s((Kge,uS)=>{"use strict";var IEr=22250738585072014e-324;uS.exports=IEr});var O2=s((rme,oS)=>{"use strict";var LEr=N2(),REr=jr(),PEr=E(),FEr=Y(),MEr=4503599627370496;function BEr(r,e,t,i){return PEr(r)||REr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&FEr(r)<LEr?(e[i]=r*MEr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}oS.exports=BEr});var fS=s((eme,vS)=>{"use strict";var kEr=O2();function jEr(r){return kEr(r,[0,0],1,0)}vS.exports=jEr});var pS=s((tme,lS)=>{"use strict";var CEr=b(),cS=fS(),UEr=O2();CEr(cS,"assign",UEr);lS.exports=cS});var Tn=s((ime,gS)=>{"use strict";var VEr=2146435072;gS.exports=VEr});var dS=s((nme,mS)=>{"use strict";var GEr=ar(),xEr=Tn(),HEr=se();function DEr(r){var e=GEr(r);return e=(e&xEr)>>>20,e-HEr|0}mS.exports=DEr});var qS=s((ame,hS)=>{"use strict";var WEr=dS();hS.exports=WEr});var bS=s((sme,yS)=>{"use strict";var zEr=I(),XEr=U(),JEr=se(),YEr=w2(),$Er=aS(),ZEr=E2(),QEr=E(),KEr=jr(),rNr=Ka(),eNr=pS().assign,tNr=qS(),iNr=Fi(),nNr=Mi(),aNr=2220446049250313e-31,sNr=2148532223>>>0,S2=[0,0],A2=[0,0];function uNr(r,e){var t,i;return e===0||r===0||QEr(r)||KEr(r)?r:(eNr(r,S2,1,0),r=S2[0],e+=S2[1],e+=tNr(r),e<ZEr?rNr(0,r):e>YEr?r<0?XEr:zEr:(e<=$Er?(e+=52,i=aNr):i=1,iNr.assign(r,A2,1,0),t=A2[0],t&=sNr,t|=e+JEr<<20,i*nNr(t,A2[1])))}yS.exports=uNr});var n0=s((ume,wS)=>{"use strict";var oNr=bS();wS.exports=oNr});var a0=s((ome,ES)=>{"use strict";var vNr=.6931471805599453;ES.exports=vNr});var s0=s((vme,NS)=>{"use strict";var fNr=1048575;NS.exports=fNr});var SS=s((fme,OS)=>{"use strict";function cNr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}OS.exports=cNr});var PS=s((cme,RS)=>{"use strict";var lNr=ar(),AS=me(),pNr=ge(),gNr=p2(),mNr=n0(),dNr=a0(),_S=se(),TS=ae(),IS=s0(),hNr=SS(),LS=1048576,qNr=1071644672,In=20,yNr=.6931471824645996,bNr=-1904654299957768e-24;function wNr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g;return p=r&TS|0,g=(p>>In)-_S|0,l=0,p>qNr&&(l=r+(LS>>g+1)>>>0,g=((l&TS)>>In)-_S|0,i=(l&~(IS>>g))>>>0,a=AS(0,i),l=(l&IS|LS)>>In-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=pNr(a,0),o=a*yNr,f=(t-(a-e))*dNr+a*bNr,c=o+f,v=f-(c-o),a=c*c,n=c-a*hNr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=lNr(c),r=gNr(r),r+=l<<In>>>0,r>>In<=0?c=mNr(c,l):c=AS(c,r),c}RS.exports=wNr});var HS=s((lme,xS)=>{"use strict";var FS=E(),MS=Qa(),BS=jr(),ENr=hr(),kS=V(),NNr=Y(),_2=Fi(),ONr=ge(),jS=p2(),SNr=U(),ANr=I(),T2=ae(),_Nr=BO(),TNr=jO(),INr=VO(),LNr=QO(),RNr=tS(),PNr=PS(),FNr=1072693247,MNr=1105199104,BNr=1139802112,CS=1083179008,kNr=1072693248,jNr=1083231232,CNr=3230714880>>>0,US=31,et=1e300,tt=1e-300,UNr=8008566259537294e-32,de=[0,0],VS=[0,0];function GS(r,e){var t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q;if(FS(r)||FS(e))return NaN;if(_2.assign(e,de,1,0),o=de[0],f=de[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return kS(r);if(e===-.5)return 1/kS(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(BS(e))return INr(r,e)}if(_2.assign(r,de,1,0),a=de[0],u=de[1],u===0){if(a===0)return _Nr(r,e);if(r===1)return 1;if(r===-1&&MS(e))return-1;if(BS(r))return r===SNr?GS(-0,-e):e<0?0:ANr}if(r<0&&ENr(e)===!1)return(r-r)/(r-r);if(n=NNr(r),t=a&T2|0,i=o&T2|0,v=a>>>US|0,c=o>>>US|0,v&&MS(e)?v=-1:v=1,i>MNr){if(i>BNr)return TNr(r,e);if(t<FNr)return c===1?v*et*et:v*tt*tt;if(t>kNr)return c===0?v*et*et:v*tt*tt;h=RNr(VS,n)}else h=LNr(VS,n,t);if(l=ONr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,_2.assign(d,de,1,0),m=jS(de[0]),q=jS(de[1]),m>=CS){if((m-CS|q)!==0||g+UNr>d-p)return v*et*et}else if((m&T2)>=jNr&&((m-CNr|q)!==0||g<=d-p))return v*tt*tt;return d=PNr(m,p,g),v*d}xS.exports=GS});var H=s((pme,DS)=>{"use strict";var VNr=HS();DS.exports=VNr});var Bi=s((gme,WS)=>{"use strict";var GNr=9007199254740991;WS.exports=GNr});var u0=s((mme,zS)=>{"use strict";var xNr=308;zS.exports=xNr});var I2=s((dme,XS)=>{"use strict";var HNr=-308;XS.exports=HNr});var o0=s((hme,JS)=>{"use strict";var DNr=-324;JS.exports=DNr});var eA=s((qme,rA)=>{"use strict";var YS=E(),v0=jr(),$S=H(),WNr=Y(),ZS=z(),zNr=Bi(),QS=u0(),XNr=I2(),JNr=o0(),YNr=U(),$Nr=zNr+1,KS=1e308;function ZNr(r,e){var t,i;return YS(r)||YS(e)||v0(e)?NaN:v0(r)||r===0||e<JNr||WNr(r)>$Nr&&e<=0?r:e>QS?r>=0?0:YNr:e<XNr?(t=$S(10,-(e+QS)),i=r*KS*t,v0(i)?r:ZS(i)/KS/t):(t=$S(10,-e),i=r*t,v0(i)?r:ZS(i)/t)}rA.exports=ZNr});var iA=s((yme,tA)=>{"use strict";var QNr=eA();tA.exports=QNr});var aA=s((bme,nA)=>{"use strict";function KNr(r,e){return r*e}nA.exports=KNr});var uA=s((wme,sA)=>{"use strict";var rOr=aA();sA.exports=rOr});var vA=s((Eme,oA)=>{"use strict";function eOr(r,e){return r-e}oA.exports=eOr});var cA=s((Nme,fA)=>{"use strict";var tOr=vA();fA.exports=tOr});var pA=s((Ome,lA)=>{"use strict";var Ln=rr(),iOr=_N(),nOr=iA(),aOr=uA(),sOr=H(),uOr=cA();function oOr(r){return Ln(r,"add",iOr),Ln(r,"floorn",nOr),Ln(r,"mul",aOr),Ln(r,"pow",sOr),Ln(r,"sub",uOr),r}lA.exports=oOr});var hA=s((Sme,dA)=>{"use strict";var gA=j().isPrimitive,vOr=I(),fOr=U(),mA=y();function cOr(r,e){return t;function t(i,n){var a;if(!gA(i)){if(e.nonnumeric===void 0)throw new TypeError(mA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!gA(n)){if(e.nonnumeric===void 0)throw new TypeError(mA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===vOr?e.pinf:a===fOr?e.ninf:a}}dA.exports=cOr});var L2=s((Ame,qA)=>{"use strict";var lOr=hA();qA.exports=lOr});var bA=s((_me,yA)=>{"use strict";var pOr=qa(),gOr=no(),mOr=xa(),dOr=y(),hOr=Ga(),qOr=L2(),yOr=["number","number"],bOr=["First argument","Second argument"];function wOr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(dOr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=hOr([r[0],r[1]],yOr,bOr),t=pOr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=mOr(t),a=qOr(e,i),r[0].push(n),r[1].push(t),gOr(r[0],r[1],a),n}yA.exports=wOr});var EA=s((Tme,wA)=>{"use strict";var EOr=bA();wA.exports=EOr});var OA=s((Ime,NA)=>{"use strict";var NOr=j().isPrimitive,OOr=I(),SOr=U(),AOr=y();function _Or(r,e){return t;function t(i){var n;if(!NOr(i)){if(e.nonnumeric===void 0)throw new TypeError(AOr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===OOr?e.pinf:n===SOr?e.ninf:n}}NA.exports=_Or});var R2=s((Lme,SA)=>{"use strict";var TOr=OA();SA.exports=TOr});var _A=s((Rme,AA)=>{"use strict";var P2=j().isPrimitive,IOr=I(),LOr=U(),F2=y();function ROr(r,e){return t;function t(i,n,a){var u;if(!P2(i)){if(e.nonnumeric===void 0)throw new TypeError(F2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!P2(n)){if(e.nonnumeric===void 0)throw new TypeError(F2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!P2(a)){if(e.nonnumeric===void 0)throw new TypeError(F2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===IOr?e.pinf:u===LOr?e.ninf:u}}AA.exports=ROr});var M2=s((Pme,TA)=>{"use strict";var POr=_A();TA.exports=POr});var LA=s((Fme,IA)=>{"use strict";var f0=j().isPrimitive,FOr=I(),MOr=U(),c0=y();function BOr(r,e){return t;function t(i,n,a,u){var o;if(!f0(i)){if(e.nonnumeric===void 0)throw new TypeError(c0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!f0(n)){if(e.nonnumeric===void 0)throw new TypeError(c0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!f0(a)){if(e.nonnumeric===void 0)throw new TypeError(c0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!f0(u)){if(e.nonnumeric===void 0)throw new TypeError(c0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===FOr?e.pinf:o===MOr?e.ninf:o}}IA.exports=BOr});var PA=s((Mme,RA)=>{"use strict";var kOr=LA();RA.exports=kOr});var MA=s((Bme,FA)=>{"use strict";var Rn=j().isPrimitive,jOr=I(),COr=U(),Pn=y();function UOr(r,e){return t;function t(i,n,a,u,o){var f;if(!Rn(i)){if(e.nonnumeric===void 0)throw new TypeError(Pn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Rn(n)){if(e.nonnumeric===void 0)throw new TypeError(Pn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Rn(a)){if(e.nonnumeric===void 0)throw new TypeError(Pn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Rn(u)){if(e.nonnumeric===void 0)throw new TypeError(Pn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Rn(o)){if(e.nonnumeric===void 0)throw new TypeError(Pn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===jOr?e.pinf:f===COr?e.ninf:f}}FA.exports=UOr});var kA=s((kme,BA)=>{"use strict";var VOr=MA();BA.exports=VOr});var CA=s((jme,jA)=>{"use strict";var GOr=qa(),xOr=so(),HOr=xa(),DOr=y(),WOr=Ga(),zOr=M2(),XOr=["number","number","number"],JOr=["First argument","Second argument","Third argument"];function YOr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(DOr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=WOr([r[0],r[1],r[2]],XOr,JOr),t=GOr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=HOr(t),a=zOr(e,i),r[0].push(n),r[1].push(t),xOr(r[0],r[1],a),n}jA.exports=YOr});var VA=s((Cme,UA)=>{"use strict";var $Or=CA();UA.exports=$Or});var xA=s((Ume,GA)=>{"use strict";var ZOr=mr(),QOr=l1(),KOr=y(),rSr=R2();function eSr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(KOr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=rSr(e,i),ZOr(t)?(QOr([t,t],[t.length,t[0].length],n),t):n(t)}GA.exports=eSr});var DA=s((Vme,HA)=>{"use strict";var tSr=xA();HA.exports=tSr});var zA=s((Gme,WA)=>{"use strict";var it=rr(),iSr=EA(),nSr=R2(),aSr=L2(),sSr=M2(),uSr=PA(),oSr=kA(),vSr=VA(),fSr=DA();function cSr(r){return it(r,"binary",iSr),it(r,"d_d",nSr),it(r,"dd_d",aSr),it(r,"ddd_d",sSr),it(r,"dddd_d",uSr),it(r,"ddddd_d",oSr),it(r,"ternary",vSr),it(r,"unary",fSr),r}WA.exports=cSr});var JA=s((xme,XA)=>{"use strict";function lSr(r){return r*r}XA.exports=lSr});var l0=s((Hme,YA)=>{"use strict";var pSr=JA();YA.exports=pSr});var p0=s((Dme,$A)=>{"use strict";var gSr=.7853981633974483;$A.exports=gSr});var QA=s((Wme,ZA)=>{"use strict";function mSr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}ZA.exports=mSr});var r_=s((zme,KA)=>{"use strict";function dSr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}KA.exports=dSr});var i_=s((Xme,t_)=>{"use strict";var hSr=E(),qSr=V(),e_=p0(),ySr=QA(),bSr=r_(),wSr=6123233995736766e-32;function ESr(r){var e,t,i,n,a;if(hSr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*bSr(t),t=qSr(t+t),a=e_-t,t=t*n-wSr,a-=t,a+=e_;else{if(i<1e-8)return r;t=i*i,a=t*ySr(t),a=i*a+i}return e?-a:a}t_.exports=ESr});var Yt=s((Jme,n_)=>{"use strict";var NSr=i_();n_.exports=NSr});var o_=s((Yme,u_)=>{"use strict";var OSr=E(),a_=Yt(),SSr=V(),s_=p0(),ASr=6123233995736766e-32;function _Sr(r){var e;return OSr(r)?NaN:r<-1||r>1?NaN:r>.5?2*a_(SSr(.5-.5*r)):(e=s_-a_(r),e+=ASr,e+=s_,e)}u_.exports=_Sr});var Fn=s(($me,v_)=>{"use strict";var TSr=o_();v_.exports=TSr});var c_=s((Zme,f_)=>{"use strict";function ISr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}f_.exports=ISr});var d_=s((Qme,m_)=>{"use strict";var LSr=E(),l_=ar(),p_=me(),RSr=I(),PSr=U(),g_=se(),FSr=c_(),B2=.6931471803691238,k2=19082149292705877e-26,MSr=.41421356237309503,BSr=-.2928932188134525,kSr=1862645149230957e-24,jSr=5551115123125783e-32,CSr=9007199254740992,USr=.6666666666666666;function VSr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||LSr(r))return NaN;if(r===-1)return PSr;if(r===RSr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<MSr){if(i<kSr)return i<jSr?r:r-r*r*.5;r>BSr&&(c=0,n=r,t=1)}return c!==0&&(i<CSr?(v=1+r,t=l_(v),c=(t>>20)-g_,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=l_(v),c=(t>>20)-g_,a=0),t&=1048575,t<434334?v=p_(v,t|1072693248):(c+=1,v=p_(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*k2,c*B2+a):(f=e*(1-USr*n),c*B2-(f-(c*k2+a)-n)):(u=n/(2+n),o=u*u,f=o*FSr(o),c===0?n-(e-u*(e+f)):c*B2-(e-(u*(e+f)+(c*k2+a))-n))}m_.exports=VSr});var nt=s((Kme,h_)=>{"use strict";var GSr=d_();h_.exports=GSr});var y_=s((rde,q_)=>{"use strict";function xSr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}q_.exports=xSr});var w_=s((ede,b_)=>{"use strict";function HSr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}b_.exports=HSr});var S_=s((tde,O_)=>{"use strict";var E_=ar(),DSr=me(),WSr=E(),zSr=se(),XSr=U(),JSr=y_(),YSr=w_(),g0=.6931471803691238,m0=19082149292705877e-26,$Sr=0x40000000000000,ZSr=.3333333333333333,N_=1048575,QSr=2146435072,KSr=1048576,rAr=1072693248;function eAr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?XSr:WSr(r)||r<0?NaN:(t=E_(r),a=0,t<KSr&&(a-=54,r*=$Sr,t=E_(r)),t>=QSr?r+r:(a+=(t>>20)-zSr|0,t&=N_,f=t+614244&1048576|0,r=DSr(r,t|f^rAr),a+=f>>20|0,o=r-1,(N_&2+t)<3?o===0?a===0?0:a*g0+a*m0:(u=o*o*(.5-ZSr*o),a===0?o-u:a*g0-(u-a*m0-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*JSr(l),i=p*YSr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*g0-(e-(c*(e+u)+a*m0)-o)):a===0?o-c*(o-u):a*g0-(c*(o-u)-a*m0-o))))}O_.exports=eAr});var P=s((ide,A_)=>{"use strict";var tAr=S_();A_.exports=tAr});var L_=s((nde,I_)=>{"use strict";var iAr=E(),nAr=nt(),__=V(),aAr=a0(),T_=P(),sAr=1<<28;function uAr(r){var e;return iAr(r)||r<1?NaN:r===1?0:r>=sAr?T_(r)+aAr:r>2?T_(2*r-1/(r+__(r*r-1))):(e=r-1,nAr(e+__(2*e+e*e)))}I_.exports=uAr});var P_=s((ade,R_)=>{"use strict";var oAr=L_();R_.exports=oAr});var d0=s((sde,F_)=>{"use strict";var vAr=1.5707963267948966;F_.exports=vAr});var B_=s((ude,M_)=>{"use strict";function fAr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}M_.exports=fAr});var j_=s((ode,k_)=>{"use strict";function cAr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}k_.exports=cAr});var V_=s((vde,U_)=>{"use strict";var lAr=E(),pAr=I(),j2=d0(),gAr=p0(),mAr=U(),dAr=B_(),hAr=j_(),C_=6123233995736766e-32,qAr=2.414213562373095;function yAr(r){var e,t,i,n;return lAr(r)||r===0?r:r===pAr?j2:r===mAr?-j2:(r<0&&(t=!0,r=-r),e=0,r>qAr?(i=j2,e=1,r=-(1/r)):r<=.66?i=0:(i=gAr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*dAr(n)/hAr(n),n=r*n+r,e===2?n+=.5*C_:e===1&&(n+=C_),i+=n,t?-i:i)}U_.exports=yAr});var h0=s((fde,G_)=>{"use strict";var bAr=V_();G_.exports=bAr});var H_=s((cde,x_)=>{"use strict";var wAr=h0();function EAr(r){return wAr(1/r)}x_.exports=EAr});var W_=s((lde,D_)=>{"use strict";var NAr=H_();D_.exports=NAr});var X_=s((pde,z_)=>{"use strict";var OAr=Yt();function SAr(r){return OAr(1+r)}z_.exports=SAr});var Y_=s((gde,J_)=>{"use strict";var AAr=X_();J_.exports=AAr});var Z_=s((mde,$_)=>{"use strict";var _Ar=Yt();function TAr(r){return _Ar(1-r)}$_.exports=TAr});var K_=s((dde,Q_)=>{"use strict";var IAr=Z_();Q_.exports=IAr});var eT=s((hde,rT)=>{"use strict";var LAr=Yt();function RAr(r){return LAr(1/r)}rT.exports=RAr});var iT=s((qde,tT)=>{"use strict";var PAr=eT();tT.exports=PAr});var uT=s((yde,sT)=>{"use strict";var FAr=jr(),MAr=E(),BAr=nt(),nT=V(),kAr=a0(),aT=P(),jAr=1/(1<<28),CAr=1<<28;function UAr(r){var e,t,i;return MAr(r)||FAr(r)?r:(r<0&&(r=-r,e=!0),r<jAr?i=r:r>CAr?i=aT(r)+kAr:r>2?i=aT(2*r+1/(nT(r*r+1)+r)):(t=r*r,i=BAr(r+t/(1+nT(1+t)))),e?-i:i)}sT.exports=UAr});var C2=s((bde,oT)=>{"use strict";var VAr=uT();oT.exports=VAr});var fT=s((wde,vT)=>{"use strict";var GAr=C2();function xAr(r){return GAr(1/r)}vT.exports=xAr});var lT=s((Ede,cT)=>{"use strict";var HAr=fT();cT.exports=HAr});var gT=s((Nde,pT)=>{"use strict";var DAr=Fn(),WAr=V();function zAr(r){return 2*DAr(WAr(r))}pT.exports=zAr});var dT=s((Ode,mT)=>{"use strict";var XAr=gT();mT.exports=XAr});var qT=s((Sde,hT)=>{"use strict";var JAr=Yt(),YAr=V();function $Ar(r){return 2*JAr(YAr(r))}hT.exports=$Ar});var bT=s((Ade,yT)=>{"use strict";var ZAr=qT();yT.exports=ZAr});var NT=s((_de,ET)=>{"use strict";var QAr=E(),wT=nt(),KAr=I(),r_r=U(),e_r=1/(1<<28);function t_r(r){var e,t;return QAr(r)||r<-1||r>1?NaN:r===1?KAr:r===-1?r_r:(r<0&&(e=!0,r=-r),r<e_r?e?-r:r:(r<.5?(t=r+r,t=.5*wT(t+t*r/(1-r))):t=.5*wT((r+r)/(1-r)),e?-t:t))}ET.exports=t_r});var ST=s((Tde,OT)=>{"use strict";var i_r=NT();OT.exports=i_r});var _T=s((Ide,AT)=>{"use strict";var n_r=Fn();function a_r(r){return n_r(1+r)}AT.exports=a_r});var IT=s((Lde,TT)=>{"use strict";var s_r=_T();TT.exports=s_r});var RT=s((Rde,LT)=>{"use strict";var u_r=Fn();function o_r(r){return u_r(1-r)}LT.exports=o_r});var FT=s((Pde,PT)=>{"use strict";var v_r=RT();PT.exports=v_r});var BT=s((Fde,MT)=>{"use strict";var f_r=z();function c_r(r){return f_r(r)===r&&r>=0}MT.exports=c_r});var U2=s((Mde,kT)=>{"use strict";var l_r=BT();kT.exports=l_r});var jT=s((Bde,p_r)=>{p_r.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var UT=s((kde,CT)=>{"use strict";var g_r=U2(),m_r=E(),d_r=Qa(),h_r=U(),q_r=I(),y_r=jT(),b_r=258;function w_r(r){return m_r(r)||!g_r(r)?NaN:d_r(r)?0:r>b_r?r/2&1?q_r:h_r:y_r[r/2]}CT.exports=w_r});var GT=s((jde,VT)=>{"use strict";var E_r=UT();VT.exports=E_r});var HT=s((Cde,xT)=>{"use strict";var N_r=zr(),V2;N_r===!0?V2=0:V2=1;xT.exports=V2});var zT=s((Ude,WT)=>{"use strict";var O_r=lr(),S_r=cr(),A_r=HT(),DT=new S_r(1),__r=new O_r(DT.buffer);function T_r(r){return DT[0]=r,__r[A_r]}WT.exports=T_r});var JT=s((Vde,XT)=>{"use strict";var I_r=zT();XT.exports=I_r});var KT=s((Gde,QT)=>{"use strict";var L_r=z(),q0=n0(),w0=si(),$T=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],R_r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],G2=16777216,x2=5960464477539063e-23,y0=w0(20),YT=w0(20),b0=w0(20),pr=w0(20);function ZT(r,e,t,i,n,a,u,o,f){var v,c,l,p,g,h,d,m,q;for(p=a,q=i[t],m=t,g=0;m>0;g++)c=x2*q|0,pr[g]=q-G2*c|0,q=i[m-1]+c,m-=1;if(q=q0(q,n),q-=8*L_r(q*.125),d=q|0,q-=d,l=0,n>0?(g=pr[t-1]>>24-n,d+=g,pr[t-1]-=g<<24-n,l=pr[t-1]>>23-n):n===0?l=pr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,g=0;g<t;g++)m=pr[g],v===0?m!==0&&(v=1,pr[g]=16777216-m):pr[g]=16777215-m;if(n>0)switch(n){case 1:pr[t-1]&=8388607;break;case 2:pr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=q0(1,n)))}if(q===0){for(m=0,g=t-1;g>=a;g--)m|=pr[g];if(m===0){for(h=1;pr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(f[o+g]=$T[u+g],c=0,m=0;m<=o;m++)c+=r[m]*f[o+(g-m)];i[g]=c}return t+=h,ZT(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;pr[t]===0;)t-=1,n-=24;else q=q0(q,-n),q>=G2?(c=x2*q|0,pr[t]=q-G2*c|0,t+=1,n+=24,pr[t]=c):pr[t]=q|0;for(c=q0(1,n),g=t;g>=0;g--)i[g]=c*pr[g],c*=x2;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=R_r[h]*i[g+h];b0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=b0[g];for(l===0?e[0]=c:e[0]=-c,c=b0[0]-c,g=1;g<=t;g++)c+=b0[g];return l===0?e[1]=c:e[1]=-c,d&7}function P_r(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?y0[c]=0:y0[c]=$T[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*y0[o+(c-l)];YT[c]=n}return f=a,ZT(r,e,f,YT,v,a,u,o,y0)}QT.exports=P_r});var eI=s((xde,rI)=>{"use strict";var F_r=Math.round;rI.exports=F_r});var H2=s((Hde,tI)=>{"use strict";var M_r=eI();tI.exports=M_r});var sI=s((Dde,aI)=>{"use strict";var B_r=H2(),iI=ar(),k_r=.6366197723675814,j_r=1.5707963267341256,C_r=6077100506506192e-26,U_r=6077100506303966e-26,V_r=20222662487959506e-37,G_r=20222662487111665e-37,x_r=84784276603689e-45,nI=2047;function H_r(r,e,t){var i,n,a,u,o,f,v;return n=B_r(r*k_r),u=r-n*j_r,o=n*C_r,v=e>>20|0,t[0]=u-o,i=iI(t[0]),f=v-(i>>20&nI),f>16&&(a=u,o=n*U_r,u=a-o,o=n*V_r-(a-u-o),t[0]=u-o,i=iI(t[0]),f=v-(i>>20&nI),f>49&&(a=u,o=n*G_r,u=a-o,o=n*x_r-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}aI.exports=H_r});var oI=s((Wde,uI)=>{"use strict";var D_r=ae(),W_r=Tn(),z_r=s0(),X_r=ar(),J_r=JT(),Y_r=Mi(),$_r=KT(),E0=sI(),Z_r=0,Q_r=16777216,at=1.5707963267341256,$t=6077100506506192e-26,N0=2*$t,O0=3*$t,S0=4*$t,K_r=598523,rTr=1072243195,eTr=1073928572,tTr=1074752122,iTr=1074977148,nTr=1075183036,aTr=1075388923,sTr=1075594811,uTr=1094263291,Mn=[0,0,0],Bn=[0,0];function oTr(r,e){var t,i,n,a,u,o,f,v;if(n=X_r(r),a=n&D_r|0,a<=rTr)return e[0]=r,e[1]=0,0;if(a<=tTr)return(a&z_r)===K_r?E0(r,a,e):a<=eTr?r>0?(v=r-at,e[0]=v-$t,e[1]=v-e[0]-$t,1):(v=r+at,e[0]=v+$t,e[1]=v-e[0]+$t,-1):r>0?(v=r-2*at,e[0]=v-N0,e[1]=v-e[0]-N0,2):(v=r+2*at,e[0]=v+N0,e[1]=v-e[0]+N0,-2);if(a<=sTr)return a<=nTr?a===iTr?E0(r,a,e):r>0?(v=r-3*at,e[0]=v-O0,e[1]=v-e[0]-O0,3):(v=r+3*at,e[0]=v+O0,e[1]=v-e[0]+O0,-3):a===aTr?E0(r,a,e):r>0?(v=r-4*at,e[0]=v-S0,e[1]=v-e[0]-S0,4):(v=r+4*at,e[0]=v+S0,e[1]=v-e[0]+S0,-4);if(a<uTr)return E0(r,a,e);if(a>=W_r)return e[0]=NaN,e[1]=NaN,0;for(t=J_r(r),i=(a>>20)-1046,v=Y_r(a-(i<<20|0),t),o=0;o<2;o++)Mn[o]=v|0,v=(v-Mn[o])*Q_r;for(Mn[2]=v,u=3;Mn[u-1]===Z_r;)u-=1;return f=$_r(Mn,Bn,i,u,1),r<0?(e[0]=-Bn[0],e[1]=-Bn[1],-f):(e[0]=Bn[0],e[1]=Bn[1],f)}uI.exports=oTr});var kn=s((zde,vI)=>{"use strict";var vTr=oI();vI.exports=vTr});var lI=s((Xde,cI)=>{"use strict";var fI=-.16666666666666632,fTr=.00833333333332249,cTr=-.0001984126982985795,lTr=27557313707070068e-22,pTr=-25050760253406863e-24,gTr=158969099521155e-24,mTr=.0416666666666666,dTr=-.001388888888887411,hTr=2480158728947673e-20,qTr=-27557314351390663e-23,yTr=2087572321298175e-24,bTr=-11359647557788195e-27;function wTr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=fTr+v*(cTr+v*lTr)+v*f*(pTr+v*gTr),o=v*r,e===0?t[n]=r+o*(fI+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*fI),u=v*(mTr+v*(dTr+v*hTr)),u+=f*f*(qTr+v*(yTr+v*bTr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}cI.exports=wTr});var W2=s((Jde,gI)=>{"use strict";var ETr=ae(),NTr=Tn(),OTr=ar(),STr=kn(),pI=lI(),ATr=1072243195,_Tr=1044381696,D2=[0,0];function TTr(r,e,t,i){var n,a;if(n=OTr(r),n&=ETr,n<=ATr)return n<_Tr&&(r|0)===0&&(e[i]=r,e[i+t]=0),pI(r,0,e,t,i);if(n>=NTr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=STr(r,D2),pI(D2[0],D2[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}gI.exports=TTr});var dI=s((Yde,mI)=>{"use strict";var ITr=W2();function LTr(r){return ITr(r,[0,0],1,0)}mI.exports=LTr});var jn=s(($de,qI)=>{"use strict";var RTr=b(),hI=dI(),PTr=W2();RTr(hI,"assign",PTr);qI.exports=hI});var bI=s((Zde,yI)=>{"use strict";function FTr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}yI.exports=FTr});var EI=s((Qde,wI)=>{"use strict";function MTr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}wI.exports=MTr});var OI=s((Kde,NI)=>{"use strict";function BTr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}NI.exports=BTr});var AI=s((rhe,SI)=>{"use strict";function kTr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}SI.exports=kTr});var TI=s((ehe,_I)=>{"use strict";var jTr=V(),CTr=jn().assign,UTr=I(),VTr=bI(),GTr=EI(),xTr=OI(),HTr=AI(),DTr=.5641895835477563,WTr=2.404825557695773,zTr=5.520078110286311,XTr=616,JTr=-.0014244423042272315,YTr=1413,$Tr=.0005468602863106496,Cn=[0,0];function ZTr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===UTr?0:r===0?1:r<=4?(a=r*r,n=VTr(a),u=(r+WTr)*(r-XTr/256-JTr),u*n):r<=8?(a=1-r*r/64,n=GTr(a),u=(r+zTr)*(r-YTr/256-$Tr),u*n):(a=8/r,i=a*a,e=xTr(i),t=HTr(i),u=DTr/jTr(r),CTr(r,Cn,1,0),u*(e*(Cn[1]+Cn[0])-a*t*(Cn[0]-Cn[1])))}_I.exports=ZTr});var z2=s((the,II)=>{"use strict";var QTr=TI();II.exports=QTr});var A0=s((ihe,LI)=>{"use strict";var KTr=1.772453850905516;LI.exports=KTr});var PI=s((nhe,RI)=>{"use strict";function rIr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}RI.exports=rIr});var MI=s((ahe,FI)=>{"use strict";function eIr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}FI.exports=eIr});var kI=s((she,BI)=>{"use strict";function tIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}BI.exports=tIr});var CI=s((uhe,jI)=>{"use strict";function iIr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}jI.exports=iIr});var VI=s((ohe,UI)=>{"use strict";var nIr=V(),aIr=Y(),sIr=jn().assign,uIr=I(),oIr=A0(),vIr=PI(),fIr=MI(),cIr=kI(),lIr=CI(),pIr=3.8317059702075125,gIr=7.015586669815619,mIr=981,dIr=-.0003252797924876844,hIr=1796,qIr=-38330184381246464e-21,Un=[0,0];function yIr(r){var e,t,i,n,a,u,o,f;return f=aIr(r),r===0||f===uIr?0:(f<=4?(u=r*r,a=vIr(u),o=f*(f+pIr)*(f-mIr/256-dIr),e=o*a):f<=8?(u=r*r,a=fIr(u),o=f*(f+gIr)*(f-hIr/256-qIr),e=o*a):(u=8/f,n=u*u,t=cIr(n),i=lIr(n),o=1/(nIr(f)*oIr),sIr(f,Un,1,0),e=o*(t*(Un[0]-Un[1])+u*i*(Un[0]+Un[1]))),r<0&&(e*=-1),e)}UI.exports=yIr});var X2=s((vhe,GI)=>{"use strict";var bIr=VI();GI.exports=bIr});var Cr=s((fhe,xI)=>{"use strict";var wIr=3.141592653589793;xI.exports=wIr});var DI=s((che,HI)=>{"use strict";function EIr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}HI.exports=EIr});var zI=s((lhe,WI)=>{"use strict";function NIr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}WI.exports=NIr});var JI=s((phe,XI)=>{"use strict";function OIr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}XI.exports=OIr});var $I=s((ghe,YI)=>{"use strict";function SIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}YI.exports=SIr});var QI=s((mhe,ZI)=>{"use strict";function AIr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}ZI.exports=AIr});var iL=s((dhe,tL)=>{"use strict";var J2=P(),_Ir=V(),TIr=Cr(),IIr=A0(),LIr=U(),RIr=I(),PIr=jn().assign,Y2=z2(),FIr=DI(),MIr=zI(),BIr=JI(),kIr=$I(),jIr=QI(),CIr=1/IIr,$2=2/TIr,KI=.8935769662791675,rL=3.957678419314858,eL=7.086051060301773,UIr=228,VIr=.0029519662791675214,GIr=1013,xIr=.0006471693148578684,HIr=1814,DIr=.00011356030177269763,Vn=[0,0];function WIr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?LIr:r===RIr?0:r<=3?(a=r*r,u=J2(r/KI)*Y2(r)*$2,n=FIr(a),o=(r+KI)*(r-UIr/256-VIr),u+o*n):r<=5.5?(a=r*r,u=J2(r/rL)*Y2(r)*$2,n=MIr(a),o=(r+rL)*(r-GIr/256-xIr),u+o*n):r<=8?(a=r*r,u=J2(r/eL)*Y2(r)*$2,n=BIr(a),o=(r+eL)*(r-HIr/256-DIr),u+o*n):(a=8/r,i=a*a,e=kIr(i),t=jIr(i),o=CIr/_Ir(r),PIr(r,Vn,1,0),o*(e*(Vn[0]-Vn[1])+a*t*(Vn[1]+Vn[0])))}tL.exports=WIr});var aL=s((hhe,nL)=>{"use strict";var zIr=iL();nL.exports=zIr});var uL=s((qhe,sL)=>{"use strict";function XIr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}sL.exports=XIr});var vL=s((yhe,oL)=>{"use strict";function JIr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}oL.exports=JIr});var cL=s((bhe,fL)=>{"use strict";function YIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}fL.exports=YIr});var pL=s((whe,lL)=>{"use strict";function $Ir(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}lL.exports=$Ir});var bL=s((Ehe,yL)=>{"use strict";var gL=P(),ZIr=V(),QIr=Cr(),KIr=A0(),rLr=U(),eLr=I(),tLr=jn().assign,mL=X2(),iLr=uL(),nLr=vL(),aLr=cL(),sLr=pL(),uLr=1/KIr,dL=2/QIr,hL=2.197141326031017,qL=5.429681040794135,oLr=562,vLr=.001828826031017035,fLr=1390,cLr=-6459205864867228e-21,Gn=[0,0];function lLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?rLr:r===eLr?0:r<=4?(a=r*r,u=gL(r/hL)*mL(r)*dL,n=iLr(a),o=(r+hL)*(r-oLr/256-vLr)/r,u+o*n):r<=8?(a=r*r,u=gL(r/qL)*mL(r)*dL,n=nLr(a),o=(r+qL)*(r-fLr/256-cLr)/r,u+o*n):(a=8/r,i=a*a,e=aLr(i),t=sLr(i),o=uLr/ZIr(r),tLr(r,Gn,1,0),o*(a*t*(Gn[0]-Gn[1])-e*(Gn[0]+Gn[1])))}yL.exports=lLr});var EL=s((Nhe,wL)=>{"use strict";var pLr=bL();wL.exports=pLr});var OL=s((Ohe,NL)=>{"use strict";function gLr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}NL.exports=gLr});var AL=s((She,SL)=>{"use strict";function mLr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}SL.exports=mLr});var TL=s((Ahe,_L)=>{"use strict";var dLr=OL(),hLr=AL();function qLr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*dLr(a),i+=n*n*hLr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}_L.exports=qLr});var Z2=s((_he,IL)=>{"use strict";var yLr=TL();IL.exports=yLr});var PL=s((The,RL)=>{"use strict";var LL=-.16666666666666632,bLr=.00833333333332249,wLr=-.0001984126982985795,ELr=27557313707070068e-22,NLr=-25050760253406863e-24,OLr=158969099521155e-24;function SLr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=bLr+a*(wLr+a*ELr)+a*n*(NLr+a*OLr),i=a*r,e===0?r+i*(LL+a*t):r-(a*(.5*e-i*t)-e-i*LL)}RL.exports=SLr});var Q2=s((Ihe,FL)=>{"use strict";var ALr=PL();FL.exports=ALr});var kL=s((Lhe,BL)=>{"use strict";var _Lr=ar(),K2=Z2(),ML=Q2(),TLr=kn(),he=[0,0],ILr=2147483647,LLr=1072243195,RLr=1044381696,PLr=2146435072;function FLr(r){var e,t;if(e=_Lr(r),e&=ILr,e<=LLr)return e<RLr?1:K2(r,0);if(e>=PLr)return NaN;switch(t=TLr(r,he),t&3){case 0:return K2(he[0],he[1]);case 1:return-ML(he[0],he[1]);case 2:return-K2(he[0],he[1]);default:return ML(he[0],he[1])}}BL.exports=FLr});var Zt=s((Rhe,jL)=>{"use strict";var MLr=kL();jL.exports=MLr});var VL=s((Phe,UL)=>{"use strict";var BLr=ae(),kLr=Tn(),jLr=ar(),CL=Z2(),r3=Q2(),CLr=kn(),ULr=1072243195,VLr=1045430272,qe=[0,0];function GLr(r){var e,t;if(e=jLr(r),e&=BLr,e<=ULr)return e<VLr?r:r3(r,0);if(e>=kLr)return NaN;switch(t=CLr(r,qe),t&3){case 0:return r3(qe[0],qe[1]);case 1:return CL(qe[0],qe[1]);case 2:return-r3(qe[0],qe[1]);default:return-CL(qe[0],qe[1])}}UL.exports=GLr});var Qt=s((Fhe,GL)=>{"use strict";var xLr=VL();GL.exports=xLr});var DL=s((Mhe,HL)=>{"use strict";var HLr=E(),DLr=jr(),WLr=Y(),xL=Zt(),zLr=Qt(),XLr=z(),e3=Cr(),JLr=Bi(),YLr=JLr+1;function $Lr(r){var e,t,i,n;return HLr(r)?NaN:DLr(r)?NaN:(e=WLr(r),e>YLr?1:(t=XLr(e),i=e-t,i===.5?0:(i<.25?n=xL(e3*i):i<.75?(i=.5-i,n=zLr(e3*i)):(i=1-i,n=-xL(e3*i)),t%2===1?-n:n)))}HL.exports=$Lr});var zL=s((Bhe,WL)=>{"use strict";var ZLr=DL();WL.exports=ZLr});var JL=s((khe,XL)=>{"use strict";var QLr=1.618033988749895;XL.exports=QLr});var $L=s((jhe,YL)=>{"use strict";var KLr=E(),rRr=zL(),eRr=H(),tRr=JL(),iRr=I(),nRr=U(),aRr=2.23606797749979;function sRr(r){var e,t;return KLr(r)||r===iRr||r===nRr?NaN:(e=eRr(tRr,r),t=rRr(r)/e,(e-t)/aRr)}YL.exports=sRr});var QL=s((Che,ZL)=>{"use strict";var uRr=$L();ZL.exports=uRr});var rR=s((Uhe,KL)=>{"use strict";function oRr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}KL.exports=oRr});var nR=s((Vhe,iR)=>{"use strict";var vRr=N2(),fRr=g2(),eR=ae(),i3=ar(),cRr=me(),lRr=jr(),tR=Mi(),pRr=Fi(),gRr=E(),mRr=rR(),dRr=4294967295>>>0,hRr=3221225472>>>0,qRr=0x40000000000000,t3=2147483648>>>0,yRr=1>>>0,bRr=715094163>>>0,wRr=696219795>>>0,ERr=i3(vRr),Kt=[0>>>0,0>>>0];function NRr(r){var e,t,i,n,a,u,o;return r===0||gRr(r)||lRr(r)?r:(t=i3(r)>>>0,e=(t&fRr)>>>0,t&=eR,t<ERr?(u=qRr*r,i=(i3(u)&eR)>>>0,i=(i/3>>>0)+wRr>>>0,u=tR(e|i,0)):(u=0,i=(t/3>>>0)+bRr>>>0,u=cRr(u,e|i)),n=u*u*(u/r),u*=mRr(n),pRr.assign(u,Kt,1,0),Kt[1]&t3?(Kt[0]+=yRr,Kt[1]&=~t3):Kt[1]|=t3,u=tR(Kt[0]&dRr,Kt[1]&hRr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}iR.exports=NRr});var sR=s((Ghe,aR)=>{"use strict";var ORr=nR();aR.exports=ORr});var oR=s((xhe,uR)=>{"use strict";var SRr=Math.ceil;uR.exports=SRr});var ki=s((Hhe,vR)=>{"use strict";var ARr=oR();vR.exports=ARr});var cR=s((Dhe,fR)=>{"use strict";function _Rr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}fR.exports=_Rr});var pR=s((Whe,lR)=>{"use strict";function TRr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}lR.exports=TRr});var dR=s((zhe,mR)=>{"use strict";var IRr=ar(),LRr=cR(),RRr=pR(),gR=1048575,PRr=.3333333333333333;function FRr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=IRr(r),a=r-1,(gR&2+n)<3?a===0?0:a*a*(PRr*a-.5):(u=a/(2+a),o=u*u,n&=gR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*LRr(v),i=o*RRr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}mR.exports=FRr});var bR=s((Xhe,yR)=>{"use strict";var hR=ar(),MRr=me(),BRr=ge(),kRr=E(),jRr=se(),CRr=U(),URr=dR(),VRr=0x40000000000000,qR=.4342944818781689,GRr=25082946711645275e-27,xRr=.30102999566361177,HRr=3694239077158931e-28,DRr=1048575,WRr=2146435072,zRr=1048576,XRr=1072693248;function JRr(r){var e,t,i,n,a,u,o,f;return kRr(r)||r<0?NaN:r===0?CRr:(t=hR(r),u=0,t<zRr&&(u-=54,r*=VRr,t=hR(r)),t>=WRr?r+r:(u+=(t>>20)-jRr|0,t&=DRr,a=t+614244&1048576|0,r=MRr(r,t|a^XRr),u+=a>>20|0,o=u,n=URr(r),r-=1,e=BRr(r,0),i=r-e,f=o*HRr+(r+n)*GRr,f+=(i+n)*qR+e*qR,f+o*xRr))}yR.exports=JRr});var ER=s((Jhe,wR)=>{"use strict";var YRr=bR();wR.exports=YRr});var OR=s((Yhe,NR)=>{"use strict";var $Rr=E(),ZRr=jr(),QRr=H(),KRr=z(),rPr=ki(),ePr=ER(),tPr=u0(),iPr=o0(),nPr=I();function aPr(r){var e,t;return $Rr(r)||ZRr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=ePr(r),e===-1?t=KRr(t):t=rPr(t),t<=iPr?e*0:t>tPr?nPr:e*QRr(10,t))}NR.exports=aPr});var AR=s(($he,SR)=>{"use strict";var sPr=OR();SR.exports=sPr});var TR=s((Zhe,_R)=>{"use strict";function uPr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}_R.exports=uPr});var LR=s((Qhe,IR)=>{"use strict";function oPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}IR.exports=oPr});var FR=s((Khe,PR)=>{"use strict";var vPr=ar(),fPr=TR(),cPr=LR(),RR=1048575,lPr=.3333333333333333;function pPr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=vPr(r),a=r-1,(RR&2+n)<3?a===0?0:a*a*(lPr*a-.5):(u=a/(2+a),o=u*u,n&=RR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*fPr(v),i=o*cPr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}PR.exports=pPr});var kR=s((rqe,BR)=>{"use strict";var gPr=ar(),mPr=me(),dPr=ge(),hPr=Fi(),qPr=E(),yPr=ae(),bPr=s0(),wPr=se(),EPr=U(),NPr=FR(),OPr=0x40000000000000,MR=1.4426950407214463,SPr=16751713164886512e-26,APr=2146435072,_Pr=1048576,TPr=1072693248,n3=[0,0];function IPr(r){var e,t,i,n,a,u,o;if(qPr(r)||r<0)return NaN;if(hPr.assign(r,n3,1,0),i=n3[0],n=n3[1],o=0,i<_Pr){if((i&yPr|n)===0)return EPr;o-=54,r*=OPr,i=gPr(r)}return i>=APr?r+r:(o+=(i>>20)-wPr|0,i&=bPr,u=i+614244&1048576|0,r=mPr(r,i|u^TPr),o+=u>>20|0,a=NPr(r),r-=1,e=dPr(r,0),t=r-e,(r+a)*SPr+(t+a)*MR+e*MR+o)}BR.exports=IPr});var CR=s((eqe,jR)=>{"use strict";var LPr=kR();jR.exports=LPr});var VR=s((tqe,UR)=>{"use strict";var RPr=E(),PPr=jr(),FPr=H(),MPr=z(),BPr=ki(),kPr=CR(),jPr=w2(),CPr=E2(),UPr=I();function VPr(r){var e,t;return RPr(r)||PPr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=kPr(r),t===CPr)?r:(e===-1?t=MPr(t):t=BPr(t),t>jPr?UPr:e*FPr(2,t))}UR.exports=VPr});var xR=s((iqe,GR)=>{"use strict";var GPr=VR();GR.exports=GPr});var DR=s((nqe,HR)=>{"use strict";var xPr=z(),HPr=ki();function DPr(r){return r<0?HPr(r):xPr(r)}HR.exports=DPr});var _0=s((aqe,WR)=>{"use strict";var WPr=DR();WR.exports=WPr});var XR=s((sqe,zR)=>{"use strict";function zPr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}zR.exports=zPr});var YR=s((uqe,JR)=>{"use strict";var XPr=n0(),JPr=XR();function YPr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*JPr(n),u=1-(e-i*a/(2-a)-r),XPr(u,t)}JR.exports=YPr});var eP=s((oqe,rP)=>{"use strict";var $Pr=E(),$R=_0(),ZPr=U(),ZR=I(),QPr=YR(),KPr=.6931471803691238,rFr=19082149292705877e-26,QR=1.4426950408889634,eFr=709.782712893384,tFr=-745.1332191019411,KR=1/(1<<28),iFr=-KR;function nFr(r){var e,t,i;return $Pr(r)||r===ZR?r:r===ZPr?0:r>eFr?ZR:r<tFr?0:r>iFr&&r<KR?1+r:(r<0?i=$R(QR*r-.5):i=$R(QR*r+.5),e=r-i*KPr,t=i*rFr,QPr(e,t,i))}rP.exports=nFr});var sr=s((vqe,tP)=>{"use strict";var aFr=eP();tP.exports=aFr});var nP=s((fqe,iP)=>{"use strict";var sFr=U();function uFr(r){return r===0&&1/r===sFr}iP.exports=uFr});var a3=s((cqe,aP)=>{"use strict";var oFr=nP();aP.exports=oFr});var s3=s((lqe,sP)=>{"use strict";var vFr=2.5066282746310007;sP.exports=vFr});var oP=s((pqe,uP)=>{"use strict";function fFr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}uP.exports=fFr});var cP=s((gqe,fP)=>{"use strict";var cFr=s3(),vP=H(),lFr=sr(),pFr=oP(),gFr=143.01608;function mFr(r){var e,t,i;return e=1/r,e=1+e*pFr(e),t=lFr(r),r>gFr?(i=vP(r,.5*r-.25),t=i*(i/t)):t=vP(r,r-.5)/t,cFr*t*e}fP.exports=mFr});var pP=s((mqe,lP)=>{"use strict";var dFr=.5772156649015329;lP.exports=dFr});var mP=s((dqe,gP)=>{"use strict";var hFr=pP();function qFr(r,e){return e/((1+hFr*r)*r)}gP.exports=qFr});var hP=s((hqe,dP)=>{"use strict";function yFr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}dP.exports=yFr});var SP=s((qqe,OP)=>{"use strict";var bFr=E(),wFr=hr(),EFr=a3(),qP=Y(),NFr=z(),OFr=Qt(),yP=I(),bP=U(),wP=Cr(),EP=cP(),NP=mP(),SFr=hP();function AFr(r){var e,t,i,n;if(wFr(r)&&r<0||r===bP||bFr(r))return NaN;if(r===0)return EFr(r)?bP:yP;if(r>171.61447887182297)return yP;if(r<-170.5674972726612)return 0;if(t=qP(r),t>33)return r>=0?EP(r):(i=NFr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*OFr(wP*n),e*wP/(qP(n)*EP(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return NP(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return NP(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*SFr(r))}OP.exports=AFr});var ji=s((yqe,AP)=>{"use strict";var _Fr=SP();AP.exports=_Fr});var IP=s((bqe,TP)=>{"use strict";var TFr=E(),IFr=jr(),_P=Zt(),u3=Qt(),LFr=Y(),xn=Ka(),Hn=Cr();function RFr(r){var e,t;return TFr(r)?NaN:IFr(r)?NaN:(t=r%2,e=LFr(t),e===0||e===1?xn(0,t):e<.25?u3(Hn*t):e<.75?(e=.5-e,xn(_P(Hn*e),t)):e<1.25?(t=xn(1,t)-t,u3(Hn*t)):e<1.75?(e-=1.5,-xn(_P(Hn*e),t)):(t-=xn(2,t),u3(Hn*t)))}TP.exports=RFr});var Dn=s((wqe,LP)=>{"use strict";var PFr=IP();LP.exports=PFr});var PP=s((Eqe,RP)=>{"use strict";function FFr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}RP.exports=FFr});var MP=s((Nqe,FP)=>{"use strict";function MFr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}FP.exports=MFr});var kP=s((Oqe,BP)=>{"use strict";function BFr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}BP.exports=BFr});var CP=s((Sqe,jP)=>{"use strict";function kFr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}jP.exports=kFr});var VP=s((Aqe,UP)=>{"use strict";function jFr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}UP.exports=jFr});var xP=s((_qe,GP)=>{"use strict";function CFr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}GP.exports=CFr});var DP=s((Tqe,HP)=>{"use strict";function UFr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}HP.exports=UFr});var zP=s((Iqe,WP)=>{"use strict";function VFr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}WP.exports=VFr});var JP=s((Lqe,XP)=>{"use strict";function GFr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}XP.exports=GFr});var $P=s((Rqe,YP)=>{"use strict";function xFr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}YP.exports=xFr});var KP=s((Pqe,QP)=>{"use strict";var HFr=E(),DFr=jr(),WFr=Y(),Ci=P(),zFr=_0(),XFr=Dn(),JFr=Cr(),o3=I(),YFr=PP(),$Fr=MP(),ZFr=kP(),QFr=CP(),KFr=VP(),rMr=xP(),eMr=DP(),tMr=zP(),iMr=JP(),nMr=$P(),aMr=.07721566490153287,sMr=.3224670334241136,uMr=1,oMr=-.07721566490153287,vMr=.48383612272381005,fMr=-.1475877229945939,cMr=.06462494023913339,lMr=-.07721566490153287,pMr=1,gMr=.4189385332046727,T0=1.4616321449683622,mMr=4503599627370496,dMr=0x400000000000000,hMr=8470329472543003e-37,ZP=1.4616321449683622,qMr=-.12148629053584961,yMr=-3638676997039505e-33;function bMr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(HFr(r)||DFr(r))return r;if(r===0)return o3;if(r<0?(e=!0,r=-r):e=!1,r<hMr)return-Ci(r);if(e){if(r>=mMr||(v=XFr(r),v===0))return o3;t=Ci(JFr/WFr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Ci(r),r>=T0-1+.27?(l=1-r,i=0):r>=T0-1-.27?(l=r-(ZP-1),i=1):(l=r,i=2)):(g=0,r>=T0+.27?(l=2-r,i=0):r>=T0-.27?(l=r-ZP,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=aMr+p*YFr(p),a=p*(sMr+p*$Fr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=vMr+c*KFr(c),a=fMr+c*rMr(c),n=cMr+c*eMr(c),o=p*u-(yMr-c*(a+l*n)),g+=qMr+o;break;case 2:u=l*(lMr+l*tMr(l)),a=pMr+l*iMr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=zFr(r),l=r-i,o=l*(oMr+l*QFr(l)),f=uMr+l*ZFr(l),g=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Ci(p)}else r<dMr?(v=Ci(r),p=1/r,l=p*p,c=gMr+p*nMr(l),g=(r-.5)*(v-1)+c):g=r*(Ci(r)-1);return e&&(g=t-g),g}QP.exports=bMr});var Wn=s((Fqe,rF)=>{"use strict";var wMr=KP();rF.exports=wMr});var st=s((Mqe,eF)=>{"use strict";var EMr=6.283185307179586;eF.exports=EMr});var v3=s((Bqe,tF)=>{"use strict";var NMr=14901161193847656e-24;tF.exports=NMr});var f3=s((kqe,iF)=>{"use strict";var OMr=.9189385332046728;iF.exports=OMr});var nF=s((jqe,SMr)=>{SMr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var aF=s((Cqe,AMr)=>{AMr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var sF=s((Uqe,_Mr)=>{_Mr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var oF=s((Vqe,uF)=>{"use strict";function TMr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}uF.exports=TMr});var fF=s((Gqe,vF)=>{"use strict";function IMr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}vF.exports=IMr});var lF=s((xqe,cF)=>{"use strict";function LMr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}cF.exports=LMr});var gF=s((Hqe,pF)=>{"use strict";function RMr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}pF.exports=RMr});var dF=s((Dqe,mF)=>{"use strict";function PMr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}mF.exports=PMr});var qF=s((Wqe,hF)=>{"use strict";function FMr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}hF.exports=FMr});var NF=s((zqe,EF)=>{"use strict";var MMr=E(),BMr=hr(),kMr=Y(),I0=sr(),jMr=z(),CMr=ji(),UMr=Wn(),yF=Dn(),bF=H(),VMr=P(),GMr=I(),xMr=U(),wF=st(),HMr=v3(),DMr=f3(),WMr=nF(),zMr=aF(),XMr=sF(),JMr=oF(),YMr=fF(),$Mr=lF(),ZMr=gF(),QMr=dF(),KMr=qF(),rBr=129,eBr=170,tBr=709,iBr=1.2433929443359375,nBr=.6986598968505859;function c3(r){var e,t,i,n,a,u;if(MMr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(BMr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=rBr)return-XMr[u]/(i+1)}else return(n&1)===0?zMr[n/2]:WMr[(n-3)/2];return kMr(r)<HMr?-.5-DMr*r:(t=1-r,r<0?jMr(r/2)===r/2?0:(e=r,r=t,t=e,r>eBr?(e=yF(.5*t)*2*c3(r),a=UMr(r),a-=r*VMr(wF),a>tBr?e<0?xMr:GMr:e*I0(a)):yF(.5*t)*2*bF(wF,-r)*CMr(r)*c3(r)):r<1?(e=JMr(t),e-=iBr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+YMr(t)):r<=4?(e=nBr+1/-t,e+$Mr(r-2)):r<=7?(e=ZMr(r-4),1+I0(e)):r<15?(e=QMr(r-7),1+I0(e)):r<36?(e=KMr(r-15),1+I0(e)):1+bF(2,-r))}EF.exports=c3});var SF=s((Xqe,OF)=>{"use strict";var aBr=NF();OF.exports=aBr});var _F=s((Jqe,AF)=>{"use strict";var x=rr(),sBr=Y(),uBr=l0(),oBr=Fn(),vBr=P_(),fBr=W_(),cBr=Y_(),lBr=K_(),pBr=iT(),gBr=lT(),mBr=dT(),dBr=bT(),hBr=Yt(),qBr=C2(),yBr=h0(),bBr=ST(),wBr=IT(),EBr=FT(),NBr=GT(),OBr=z2(),SBr=X2(),ABr=aL(),_Br=EL(),TBr=QL(),IBr=sR(),LBr=ki(),RBr=AR(),PBr=xR(),FBr=Zt(),MBr=Qt(),BBr=V(),kBr=SF();function jBr(r){return x(r,"abs",sBr),x(r,"abs2",uBr),x(r,"acos",oBr),x(r,"acosh",vBr),x(r,"acot",fBr),x(r,"acovercos",cBr),x(r,"acoversin",lBr),x(r,"acsc",pBr),x(r,"acsch",gBr),x(r,"ahavercos",mBr),x(r,"ahaversin",dBr),x(r,"asin",hBr),x(r,"asinh",qBr),x(r,"atan",yBr),x(r,"atanh",bBr),x(r,"avercos",wBr),x(r,"aversin",EBr),x(r,"bernoulli",NBr),x(r,"besselj0",OBr),x(r,"besselj1",SBr),x(r,"bessely0",ABr),x(r,"bessely1",_Br),x(r,"binet",TBr),x(r,"cbrt",IBr),x(r,"ceil",LBr),x(r,"ceil10",RBr),x(r,"ceil2",PBr),x(r,"cos",FBr),x(r,"sin",MBr),x(r,"sqrt",BBr),x(r,"zeta",kBr),r}AF.exports=jBr});var IF=s((Yqe,TF)=>{"use strict";var CBr=rr(),UBr=pA(),VBr=zA(),GBr=_F();function xBr(r){return CBr(r,"tools",VBr({})),r=UBr(r),r=GBr(r),r}TF.exports=xBr});var PF=s(($qe,RF)=>{"use strict";var HBr=ho(),LF=HBr();function DBr(){return typeof LF.BigInt=="function"&&typeof BigInt=="function"&&typeof LF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}RF.exports=DBr});var MF=s((Zqe,FF)=>{"use strict";var WBr=PF();FF.exports=WBr});var BF=s((Qqe,zBr)=>{zBr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var jF=s((Kqe,kF)=>{"use strict";var XBr=BF();function JBr(r){return XBr[r]||null}kF.exports=JBr});var UF=s((rye,CF)=>{"use strict";var YBr=jF();CF.exports=YBr});var GF=s((eye,VF)=>{"use strict";function $Br(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}VF.exports=$Br});var HF=s((tye,xF)=>{"use strict";var ZBr=GF();xF.exports=ZBr});var zF=s((iye,WF)=>{"use strict";var DF=Y();function QBr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=DF(r[0]),u=1;u<t;u++)if(a=DF(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}WF.exports=QBr});var l3=s((nye,XF)=>{"use strict";var KBr=zF();XF.exports=KBr});var YF=s((aye,JF)=>{"use strict";function rkr(r,e){return e&&(r===2||r===3)}JF.exports=rkr});var ZF=s((sye,$F)=>{"use strict";function ekr(r,e){return e&&(r===1||r===3)}$F.exports=ekr});var KF=s((uye,QF)=>{"use strict";var tkr=p1();function ikr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=tkr(e,t,i),r===a[1]-a[0]+1)}QF.exports=ikr});var eM=s((oye,rM)=>{"use strict";function nkr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}rM.exports=nkr});var iM=s((vye,tM)=>{"use strict";function akr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}tM.exports=akr});var aM=s((fye,nM)=>{"use strict";function skr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}nM.exports=skr});var uM=s((cye,sM)=>{"use strict";function ukr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}sM.exports=ukr});var vM=s((lye,oM)=>{"use strict";function okr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}oM.exports=okr});var cM=s((pye,fM)=>{"use strict";var vkr=Kr(),fkr=re();function ckr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(vkr(t),fkr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}fM.exports=ckr});var gM=s((gye,pM)=>{"use strict";var lkr=Q().isPrimitive,pkr=y(),lM=/[-\/\\^$*+?.()|[\]{}]/g;function gkr(r){var e,t,i;if(!lkr(r))throw new TypeError(pkr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(lM,"\\$&"):(t=r.substring(1,i),t=t.replace(lM,"\\$&"),r=r[0]+t+r.substring(i),r)}pM.exports=gkr});var dM=s((mye,mM)=>{"use strict";var mkr=gM();mM.exports=mkr});var qM=s((dye,hM)=>{"use strict";var dkr=RegExp.prototype.exec;hM.exports=dkr});var bM=s((hye,yM)=>{"use strict";var hkr=qM();function qkr(r){try{return hkr.call(r),!0}catch{return!1}}yM.exports=qkr});var EM=s((qye,wM)=>{"use strict";var ykr=ui(),bkr=er(),wkr=bM(),Ekr=ykr();function Nkr(r){return typeof r=="object"?r instanceof RegExp?!0:Ekr?wkr(r):bkr(r)==="[object RegExp]":!1}wM.exports=Nkr});var OM=s((yye,NM)=>{"use strict";var Okr=EM();NM.exports=Okr});var AM=s((bye,SM)=>{"use strict";function Skr(r,e,t){return r.replace(e,t)}SM.exports=Skr});var ut=s((wye,_M)=>{"use strict";var Akr=AM();_M.exports=Akr});var IM=s((Eye,TM)=>{"use strict";var _kr=dM(),Tkr=T(),p3=Q().isPrimitive,Ikr=OM(),g3=y(),Lkr=ut();function Rkr(r,e,t){if(!p3(r))throw new TypeError(g3("invalid argument. First argument must be a string. Value: `%s`.",r));if(p3(e))e=new RegExp(_kr(e),"g");else if(!Ikr(e))throw new TypeError(g3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!p3(t)&&!Tkr(t))throw new TypeError(g3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return Lkr(r,e,t)}TM.exports=Rkr});var RM=s((Nye,LM)=>{"use strict";var Pkr=IM();LM.exports=Pkr});var FM=s((Oye,PM)=>{"use strict";var Fkr=RM(),m3=Kr(),d3=re(),Mkr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function Bkr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=m3(a)+", "+d3(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=m3(a)+", "+d3(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=m3(a)+", "+d3(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=Mkr[this.dtype],i+=Fkr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}PM.exports=Bkr});var BM=s((Sye,MM)=>{"use strict";var kkr=typeof ArrayBuffer=="function"?ArrayBuffer:null;MM.exports=kkr});var jM=s((Aye,kM)=>{"use strict";var jkr=Na(),Ckr=cr(),L0=BM();function Ukr(){var r,e,t;if(typeof L0!="function")return!1;try{t=new L0(16),r=jkr(t)&&typeof L0.isView=="function",r&&(e=new Ckr(t),e[0]=-3.14,e[1]=NaN,r=r&&L0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}kM.exports=Ukr});var UM=s((_ye,CM)=>{"use strict";var Vkr=jM();CM.exports=Vkr});var GM=s((Tye,VM)=>{"use strict";var Gkr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;VM.exports=Gkr});var HM=s((Iye,xM)=>{"use strict";function xkr(){throw new Error("not implemented")}xM.exports=xkr});var R0=s((Lye,DM)=>{"use strict";var Hkr=UM(),Dkr=GM(),Wkr=HM(),h3;Hkr()?h3=Dkr:h3=Wkr;DM.exports=h3});var zM=s((Rye,WM)=>{"use strict";var zkr=er(),Xkr=typeof DataView=="function";function Jkr(r){return Xkr&&r instanceof DataView||zkr(r)==="[object DataView]"}WM.exports=Jkr});var JM=s((Pye,XM)=>{"use strict";var Ykr=zM();XM.exports=Ykr});var $M=s((Fye,YM)=>{"use strict";var $kr=typeof DataView=="function"?DataView:null;YM.exports=$kr});var KM=s((Mye,QM)=>{"use strict";var Zkr=JM(),Qkr=R0(),ZM=$M();function Kkr(){var r,e,t;if(typeof ZM!="function")return!1;try{t=new Qkr(24),e=new ZM(t,8),r=Zkr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}QM.exports=Kkr});var eB=s((Bye,rB)=>{"use strict";var rjr=KM();rB.exports=rjr});var iB=s((kye,tB)=>{"use strict";var ejr=typeof DataView=="function"?DataView:void 0;tB.exports=ejr});var aB=s((jye,nB)=>{"use strict";function tjr(){throw new Error("not implemented")}nB.exports=tjr});var zn=s((Cye,sB)=>{"use strict";var ijr=eB(),njr=iB(),ajr=aB(),q3;ijr()?q3=njr:q3=ajr;sB.exports=q3});var oB=s((Uye,uB)=>{"use strict";var sjr=typeof BigInt=="function"?BigInt:void 0;uB.exports=sjr});var fB=s((Vye,vB)=>{"use strict";var ujr=oB();vB.exports=ujr});var cB=s((Gye,ojr)=>{ojr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var gB=s((xye,pB)=>{"use strict";var lB=cB();function vjr(){var r;return arguments.length===0?lB.all.slice():(r=lB[arguments[0]],r?r.slice():[])}pB.exports=vjr});var dB=s((Hye,mB)=>{"use strict";function fjr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}mB.exports=fjr});var qB=s((Dye,hB)=>{"use strict";var cjr=rr(),ljr=Ti();function pjr(r,e){var t,i,n;for(t=ljr(e),n=0;n<t.length;n++)i=t[n],cjr(r,i,e[i]);return r}hB.exports=pjr});var b3=s((Wye,bB)=>{"use strict";var gjr=b(),y3=gB(),yB=dB(),mjr=qB();gjr(y3,"enum",yB);mjr(y3,yB());bB.exports=y3});var wB=s((zye,djr)=>{djr.exports=["row-major","column-major"]});var NB=s((Xye,EB)=>{"use strict";var hjr=wB();function qjr(){return hjr.slice()}EB.exports=qjr});var SB=s((Jye,OB)=>{"use strict";function yjr(){return{"row-major":1,"column-major":2}}OB.exports=yjr});var w3=s((Yye,_B)=>{"use strict";var bjr=b(),AB=NB(),wjr=SB();bjr(AB,"enum",wjr);_B.exports=AB});var TB=s(($ye,Ejr)=>{Ejr.exports=["throw","clamp","wrap"]});var LB=s((Zye,IB)=>{"use strict";var Njr=TB();function Ojr(){return Njr.slice()}IB.exports=Ojr});var PB=s((Qye,RB)=>{"use strict";function Sjr(){return{throw:1,clamp:2,wrap:3}}RB.exports=Sjr});var E3=s((Kye,MB)=>{"use strict";var Ajr=b(),FB=LB(),_jr=PB();Ajr(FB,"enum",_jr);MB.exports=FB});var jB=s((rbe,kB)=>{"use strict";var ot=zr(),Tjr=R0(),Ijr=zn(),Xn=fB(),Ljr=b3().enum,Rjr=w3().enum,Pjr=E3().enum,Fjr=Ljr(),Mjr=Rjr(),BB=Pjr();function Bjr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g;if(f=this._mode||"throw",u=this._submode||[f],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new Ijr(new Tjr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,v=0,o.setInt8(v,ot?1:0),v+=1,o.setInt16(v,Fjr[i],ot),v+=2,o.setBigInt64(v,Xn(l),ot),c=l*8,v+=8,g=0;g<l;g++)o.setBigInt64(v,Xn(n[g]),ot),o.setBigInt64(v+c,Xn(a[g]*r),ot),v+=8;for(v+=c,o.setBigInt64(v,Xn(this._offset*r),ot),v+=8,o.setInt8(v,Mjr[this._order]),v+=1,o.setInt8(v,BB[f]),v+=1,o.setBigInt64(v,Xn(p),ot),v+=8,g=0;g<p;g++)o.setInt8(v,BB[u[g]]),v+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(v,e,ot),this.__meta_dataview__=o,o}kB.exports=Bjr});var UB=s((ebe,CB)=>{"use strict";var Jn=zr(),kjr=Qr(),jjr=zn(),Cjr=z(),Ujr=4294967295>>>0,Vjr=4294967296;function Gjr(r){var e,t,i,n;return e=new kjr(8),r===0||(n=(r&Ujr)>>>0,i=Cjr(r/Vjr),t=new jjr(e.buffer),Jn?(t.setUint32(0,n,Jn),t.setUint32(4,i,Jn)):(t.setUint32(0,i,Jn),t.setUint32(4,n,Jn))),e}CB.exports=Gjr});var GB=s((tbe,VB)=>{"use strict";var Yn=zr(),xjr=Qr(),Hjr=zn(),Djr=z(),Wjr=4294967295>>>0,zjr=4294967296,F0=new xjr(8),P0=new Hjr(F0.buffer);function Xjr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<F0.length;u++)e[i]=0,i+=t;return e}for(a=(r&Wjr)>>>0,n=Djr(r/zjr),Yn?(P0.setUint32(0,a,Yn),P0.setUint32(4,n,Yn)):(P0.setUint32(0,n,Yn),P0.setUint32(4,a,Yn)),u=0;u<F0.length;u++)e[i]=F0[u],i+=t;return e}VB.exports=Xjr});var DB=s((ibe,HB)=>{"use strict";var Jjr=b(),xB=UB(),Yjr=GB();Jjr(xB,"assign",Yjr);HB.exports=xB});var XB=s((nbe,zB)=>{"use strict";var N3=zr(),$jr=R0(),Zjr=zn(),Qjr=Qr(),Kjr=b3().enum,rCr=w3().enum,eCr=E3().enum,$n=DB().assign,tCr=Kjr(),iCr=rCr(),WB=eCr();function nCr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h;if(v=this._mode||"throw",o=this._submode||[v],p=this._ndims,g=o.length,i=33+p*16+g,f=this.__meta_dataview__,f&&f.byteLength===i)return f;for(f=new Zjr(new $jr(i)),e=new Qjr(f.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,f.setInt8(c,N3?1:0),c+=1,f.setInt16(c,tCr[n],N3),c+=2,$n(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)$n(a[h],e,1,c),$n(u[h]*r,e,1,c+l),c+=8;for(c+=l,$n(this._offset*r,e,1,c),c+=8,f.setInt8(c,iCr[this._order]),c+=1,f.setInt8(c,WB[v]),c+=1,$n(g,e,1,c),c+=8,h=0;h<g;h++)f.setInt8(c,WB[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,f.setInt32(c,t,N3),this.__meta_dataview__=f,f}zB.exports=nCr});var YB=s((abe,JB)=>{"use strict";var aCr=MF(),vt=b(),Xr=R(),sCr=UF(),uCr=HF(),oCr=l3(),vCr=po(),fCr=YF(),cCr=ZF(),lCr=KF(),pCr=eM(),gCr=iM(),mCr=aM(),dCr=uM(),hCr=vM(),qCr=cM(),yCr=FM(),bCr=jB(),wCr=XB();function nr(r,e,t,i,n,a){var u,o,f,v,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(v=1,c=0;c<t.length;c++)v*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*v:o=null,this._byteLength=o,this._bytesPerElement=sCr(r),this._buffer=e,this._dtype=r,this._length=v,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=vCr(e.get&&e.set),this._iterationOrder=uCr(i),u=lCr(v,t,i,n,this._iterationOrder),f=oCr(i),this._flags={ROW_MAJOR_CONTIGUOUS:cCr(f,u),COLUMN_MAJOR_CONTIGUOUS:fCr(f,u),READONLY:!1},this.__meta_dataview__=null,this}vt(nr,"name","ndarray");Xr(nr.prototype,"byteLength",function(){return this._byteLength});Xr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Xr(nr.prototype,"data",function(){return this._buffer});Xr(nr.prototype,"dtype",function(){return this._dtype});Xr(nr.prototype,"flags",function(){return pCr(this._flags)});Xr(nr.prototype,"length",function(){return this._length});Xr(nr.prototype,"ndims",function(){return this._ndims});Xr(nr.prototype,"offset",function(){return this._offset});Xr(nr.prototype,"order",function(){return this._order});Xr(nr.prototype,"shape",function(){return this._shape.slice()});Xr(nr.prototype,"strides",function(){return this._strides.slice()});vt(nr.prototype,"get",hCr);vt(nr.prototype,"iget",gCr);vt(nr.prototype,"set",dCr);vt(nr.prototype,"iset",mCr);vt(nr.prototype,"toString",yCr);vt(nr.prototype,"toJSON",qCr);vt(nr.prototype,"__array_meta_dataview__",aCr()?bCr:wCr);JB.exports=nr});var O3=s((sbe,$B)=>{"use strict";var ECr=YB();$B.exports=ECr});var QB=s((ube,ZB)=>{"use strict";function NCr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}ZB.exports=NCr});var M0=s((obe,KB)=>{"use strict";var OCr=QB();KB.exports=OCr});var ek=s((vbe,rk)=>{"use strict";var SCr=typeof String.prototype.trim<"u";rk.exports=SCr});var S3=s((fbe,tk)=>{"use strict";var ACr=String.prototype.trim;tk.exports=ACr});var sk=s((cbe,ak)=>{"use strict";var ik=S3(),_Cr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,nk="\u180E";function TCr(){return ik.call(_Cr)===""&&ik.call(nk)===nk}ak.exports=TCr});var ok=s((lbe,uk)=>{"use strict";var ICr=ut(),LCr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function RCr(r){return ICr(r,LCr,"$1")}uk.exports=RCr});var fk=s((pbe,vk)=>{"use strict";var PCr=S3();function FCr(r){return PCr.call(r)}vk.exports=FCr});var ft=s((gbe,ck)=>{"use strict";var MCr=ek(),BCr=sk(),kCr=ok(),jCr=fk(),A3;MCr&&BCr()?A3=jCr:A3=kCr;ck.exports=A3});var pk=s((mbe,lk)=>{"use strict";function CCr(r){return r===null}lk.exports=CCr});var _3=s((dbe,gk)=>{"use strict";var UCr=pk();gk.exports=UCr});var dk=s((hbe,mk)=>{"use strict";function VCr(r){return r===void 0}mk.exports=VCr});var T3=s((qbe,hk)=>{"use strict";var GCr=dk();hk.exports=GCr});var yk=s((ybe,qk)=>{"use strict";var L3=b(),R3=R(),xCr=dr().isPrimitive,HCr=_3(),DCr=T3(),B0=y();function I3(r){return xCr(r)||HCr(r)||DCr(r)}function ye(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof ye))return new ye(e,t,i);if(!I3(e))throw new TypeError(B0("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!I3(t))throw new TypeError(B0("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(I3(i)){if(i===0)throw new RangeError(B0("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(B0("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}L3(ye,"name","Slice");R3(ye.prototype,"start",function(){return this._start});R3(ye.prototype,"stop",function(){return this._stop});R3(ye.prototype,"step",function(){return this._step});L3(ye.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});L3(ye.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});qk.exports=ye});var Ui=s((bbe,bk)=>{"use strict";var WCr=yk();bk.exports=WCr});var Ek=s((wbe,wk)=>{"use strict";var zCr=Ui(),XCr=ce();function JCr(r){return r instanceof zCr||XCr(r)==="Slice"}wk.exports=JCr});var Ok=s((Ebe,Nk)=>{"use strict";var YCr=Ek();Nk.exports=YCr});var _k=s((Nbe,Ak)=>{"use strict";var P3=b(),Sk=R(),$Cr=dr().isPrimitive,ZCr=_3(),QCr=T3(),KCr=Ok(),rUr=y();function eUr(r){return $Cr(r)||ZCr(r)||QCr(r)||KCr(r)}function wr(){var r,e,t,i,n;if(r=arguments.length,!(this instanceof wr)){if(r===1)return new wr(arguments[0]);if(r===2)return new wr(arguments[0],arguments[1]);if(r===3)return new wr(arguments[0],arguments[1],arguments[2]);if(r===4)return new wr(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new wr(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],n=0;n<r;n++)t.push(arguments[n]);return e=Object.create(wr.prototype),wr.apply(e,t)}for(this._data=[],n=0;n<r;n++){if(i=arguments[n],!eUr(i))throw new TypeError(rUr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,i));this._data.push(i===void 0?null:i)}return this}P3(wr,"name","MultiSlice");Sk(wr.prototype,"ndims",function(){return this._data.length});Sk(wr.prototype,"data",function(){return this._data.slice()});P3(wr.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});P3(wr.prototype,"toJSON",function(){var e,t,i,n;for(e=this._data,t={type:"MultiSlice",data:[]},n=0;n<e.length;n++)i=e[n],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});Ak.exports=wr});var F3=s((Obe,Tk)=>{"use strict";var tUr=_k();Tk.exports=tUr});var Lk=s((Sbe,Ik)=>{"use strict";var iUr=/(?:\s*-\s*)(?=\d+)(\d+)$/;Ik.exports=iUr});var Pk=s((Abe,Rk)=>{"use strict";var nUr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;Rk.exports=nUr});var Bk=s((_be,Mk)=>{"use strict";var Fk=z(),aUr=Lk(),sUr=Pk();function uUr(r,e,t,i){var n;if(r==="end")return e;if(n=r.match(aUr),n){if(r=e-parseInt(n[1],10),r<0){if(i)return-2;r=0}return r}return n=r.match(sUr),n?(r=parseFloat(n[1]),r<1?i?-2:-1:t&&e>0&&r!==1?Fk((e-1)/r):Fk(e/r)):-1}Mk.exports=uUr});var jk=s((Tbe,kk)=>{"use strict";var oUr=/\s*:\s*/;kk.exports=oUr});var Uk=s((Ibe,Ck)=>{"use strict";var vUr=/^[-+]?[0-9]+$/;Ck.exports=vUr});var Gk=s((Lbe,Vk)=>{"use strict";var fUr=/^end/;Vk.exports=fUr});var Hk=s((Rbe,xk)=>{"use strict";function cUr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}xk.exports=cUr});var Wk=s((Pbe,Dk)=>{"use strict";function lUr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Dk.exports=lUr});var Xk=s((Fbe,zk)=>{"use strict";function pUr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}zk.exports=pUr});var Qk=s((Mbe,Zk)=>{"use strict";var Jk=Ui(),gUr=ft(),Yk=Bk(),mUr=jk(),M3=Uk(),$k=Gk(),Vi=Hk(),ri=Wk(),dUr=Xk();function hUr(r,e,t){var i,n,a;if(i=gUr(r).split(mUr),n=i.length,n<2||n>3)return Vi();if(n===3)if(a=i[2],a.length===0)i[2]=1;else{if(M3.test(a)===!1)return Vi();if(a=parseInt(a,10),a===0)return dUr();i[2]=a}else i.push(1);if(a=i[0],a.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if($k.test(a)){if(a=Yk(a,e,i[2]<0,t),a<0)return a===-2?ri():Vi();i[2]<0&&a>=e&&(a-=1),i[0]=a}else if(M3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0){if(t)return ri();a=0}}else if(a>=e){if(t)return ri();i[2]<0?a=e-1:a=e}i[0]=a}else return Vi();if(a=i[1],a.length===0)i[2]<0?i[1]=null:i[1]=e;else if($k.test(a)){if(a=Yk(a,e,i[2]<0,t),a<0)return a===-2?ri():Vi();i[1]=a}else if(M3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0)if(i[2]>0){if(t)return ri();a=0}else{if(t&&a<-1)return ri();a=null}}else if(a>e){if(t)return ri();a=e}i[1]=a}else return Vi();return e===0?new Jk(0,0,i[2]):new Jk(i[0],i[1],i[2])}Zk.exports=hUr});var rj=s((Bbe,Kk)=>{"use strict";var qUr=Qk();Kk.exports=qUr});var tj=s((kbe,ej)=>{"use strict";function yUr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}ej.exports=yUr});var nj=s((jbe,ij)=>{"use strict";function bUr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}ij.exports=bUr});var sj=s((Cbe,aj)=>{"use strict";function wUr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}aj.exports=wUr});var oj=s((Ube,uj)=>{"use strict";function EUr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}uj.exports=EUr});var fj=s((Vbe,vj)=>{"use strict";var NUr=/\s*,\s*/;vj.exports=NUr});var lj=s((Gbe,cj)=>{"use strict";var OUr=/^[-+]?[0-9]+$/;cj.exports=OUr});var mj=s((xbe,gj)=>{"use strict";var SUr=ft(),AUr=Ui(),_Ur=F3(),TUr=rj(),IUr=tj(),LUr=nj(),RUr=sj(),pj=oj(),PUr=fj(),FUr=lj();function MUr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(o=e.length,i=SUr(r).split(PUr),f=i.length,a=!1,n=[],l=0,c=0;c<f;c++){if(v=i[c],v==="..."){if(a)return IUr();for(a=!0,p=0;p<o-f+1;p++)n.push(new AUr(0,e[l],1)),l+=1;continue}if(u=e[l],FUr.test(v)){if(v=parseInt(v,10),t){if(v<0){if(u+v<0)return pj()}else if(v>=u)return pj()}l+=1}else{if(v=TUr(v,u,t),v.code)return v;l+=1}n.push(v)}return n.length!==o?n.length<o?LUr():RUr():_Ur.apply(null,n)}gj.exports=MUr});var hj=s((Hbe,dj)=>{"use strict";var BUr=mj();dj.exports=BUr});var yj=s((Dbe,qj)=>{"use strict";function kUr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function jUr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function CUr(r,e){return e==="column-major"?jUr(r):kUr(r)}qj.exports=CUr});var wj=s((Wbe,bj)=>{"use strict";function UUr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function VUr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function GUr(r,e,t){return e==="column-major"?VUr(r,t):UUr(r,t)}bj.exports=GUr});var k0=s((zbe,Nj)=>{"use strict";var xUr=b(),Ej=yj(),HUr=wj();xUr(Ej,"assign",HUr);Nj.exports=Ej});var Sj=s((Xbe,Oj)=>{"use strict";function DUr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Oj.exports=DUr});var _j=s((Jbe,Aj)=>{"use strict";var WUr=Ui(),Zn=Sj();function zUr(r,e,t){var i,n,a;if(i=r.start,n=r.stop,a=r.step,a===null&&(a=1),i===null)a>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return Zn();i=0}}else if(i>=e){if(t)return Zn();a<0?i=e-1:i=e}if(n===null)a>0?n=e:n=null;else if(n<0){if(n=e+n,n<0)if(a>0){if(t)return Zn();n=0}else{if(t&&n<-1)return Zn();n=null}}else if(n>e){if(t)return Zn();n=e}return new WUr(i,n,a)}Aj.exports=zUr});var Ij=s((Ybe,Tj)=>{"use strict";var XUr=_j();Tj.exports=XUr});var Rj=s(($be,Lj)=>{"use strict";function JUr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Lj.exports=JUr});var Mj=s((Zbe,Fj)=>{"use strict";var YUr=F3(),Qn=Ui(),$Ur=Ij(),Pj=Rj();function ZUr(r,e,t){return r===null?new Qn(0,e,1):typeof r=="number"?r>=e?t?Pj():new Qn(e,e,1):r<0?(r=e+r,r<0?t?Pj():new Qn(0,0,1):new Qn(r,r+1,1)):new Qn(r,r+1,1):$Ur(r,e,t)}function QUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],u=0;u<i.length;u++){if(a=ZUr(i[u],e[u],t),a.code!==void 0)return a;n.push(a)}return YUr.apply(null,n)}Fj.exports=QUr});var kj=s((Qbe,Bj)=>{"use strict";var KUr=Mj();Bj.exports=KUr});var Cj=s((Kbe,jj)=>{"use strict";function rVr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}jj.exports=rVr});var Vj=s((rwe,Uj)=>{"use strict";var eVr=Cj();Uj.exports=eVr});var xj=s((ewe,Gj)=>{"use strict";var tVr=ki();function iVr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:tVr((i-t)/e)}Gj.exports=iVr});var Dj=s((twe,Hj)=>{"use strict";var nVr=xj();Hj.exports=nVr});var zj=s((iwe,Wj)=>{"use strict";var aVr=Dj();function sVr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(aVr(e[i]));return t}Wj.exports=sVr});var Jj=s((nwe,Xj)=>{"use strict";var uVr=zj();Xj.exports=uVr});var $j=s((awe,Yj)=>{"use strict";function oVr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}Yj.exports=oVr});var Qj=s((swe,Zj)=>{"use strict";var vVr=$j();Zj.exports=vVr});var rC=s((uwe,Kj)=>{"use strict";function fVr(r){return r.dtype}Kj.exports=fVr});var tC=s((owe,eC)=>{"use strict";var cVr=rC();eC.exports=cVr});var nC=s((vwe,iC)=>{"use strict";var lVr=ha();function pVr(r,e){var t=r.shape;return e?lVr(t):t}iC.exports=pVr});var sC=s((fwe,aC)=>{"use strict";var gVr=nC();aC.exports=gVr});var oC=s((cwe,uC)=>{"use strict";var mVr=k0(),dVr=ha(),hVr="row-major";function qVr(r,e){var t,i,n;return n=r.strides,typeof n!="object"||n===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=hVr),mVr(i,t))):e?dVr(n):n}uC.exports=qVr});var fC=s((lwe,vC)=>{"use strict";var yVr=oC();vC.exports=yVr});var lC=s((pwe,cC)=>{"use strict";function bVr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}cC.exports=bVr});var j0=s((gwe,pC)=>{"use strict";var wVr=lC();pC.exports=wVr});var mC=s((mwe,gC)=>{"use strict";var EVr=j0();function NVr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:EVr(t,e))}gC.exports=NVr});var hC=s((dwe,dC)=>{"use strict";var OVr=mC();dC.exports=OVr});var yC=s((hwe,qC)=>{"use strict";var SVr=l3(),B3="row-major",AVr="column-major";function _Vr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=SVr(e),t===1||t===3)?B3:t===2?AVr:r.shape.length===0?B3:null)}qC.exports=_Vr});var wC=s((qwe,bC)=>{"use strict";var TVr=yC();bC.exports=TVr});var NC=s((ywe,EC)=>{"use strict";function IVr(r){return r.data}EC.exports=IVr});var SC=s((bwe,OC)=>{"use strict";var LVr=NC();OC.exports=LVr});var _C=s((wwe,AC)=>{"use strict";function RVr(r,e,t){var i,n,a;for(i=r.data,n=t,a=0;a<i.length;a++)n+=e[a]*i[a].start;return n}AC.exports=RVr});var IC=s((Ewe,TC)=>{"use strict";function PVr(r,e,t){var i,n,a,u;for(i=r.data,n=[],a=0;a<t.length;a++)u=t[a],n.push(e[u]*i[u].step);return n}TC.exports=PVr});var RC=s((Nwe,LC)=>{"use strict";var FVr=rt(),MVr=cr(),BVr=Zr(),kVr=fi(),jVr=$e(),CVr=li(),UVr=Ut(),VVr=lr(),GVr=Qr(),xVr=ci(),HVr=bi(),DVr=Oi(),WVr={binary:FVr,float64:MVr,float32:BVr,generic:Array,int16:kVr,int32:jVr,int8:CVr,uint16:UVr,uint32:VVr,uint8:GVr,uint8c:xVr,complex64:HVr,complex128:DVr};LC.exports=WVr});var FC=s((Owe,PC)=>{"use strict";var zVr=RC();function XVr(r){return zVr[r]||null}PC.exports=XVr});var BC=s((Swe,MC)=>{"use strict";var JVr=FC();MC.exports=JVr});var jC=s((Awe,kC)=>{"use strict";var YVr=T(),$Vr=rt(),ZVr=YVr($Vr.allocUnsafe);kC.exports=ZVr});var UC=s((_we,CC)=>{"use strict";var QVr=Fr(),KVr=y(),rGr=rt();function eGr(r){if(!QVr(r))throw new TypeError(KVr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return rGr.allocUnsafe(r)}CC.exports=eGr});var GC=s((Twe,VC)=>{"use strict";var tGr=Fr(),iGr=y(),nGr=rt();function aGr(r){if(!tGr(r))throw new TypeError(iGr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new nGr(r)}VC.exports=aGr});var HC=s((Iwe,xC)=>{"use strict";var sGr=jC(),uGr=UC(),oGr=GC(),k3;sGr?k3=uGr:k3=oGr;xC.exports=k3});var WC=s((Lwe,DC)=>{"use strict";function vGr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}DC.exports=vGr});var XC=s((Rwe,zC)=>{"use strict";var fGr=BC(),cGr=HC(),lGr=WC();function pGr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function gGr(r){return lGr(cGr(r))}function mGr(r,e){var t=fGr(r);return t?new t(e):null}function dGr(r,e){return r==="generic"?pGr(e):r==="binary"?gGr(e):mGr(r,e)}zC.exports=dGr});var j3=s((Pwe,JC)=>{"use strict";var hGr=XC();JC.exports=hGr});var $C=s((Fwe,YC)=>{"use strict";var qGr=j3(),yGr=si();function bGr(r,e,t,i,n){var a,u;return u=t.length,u===0?a=[0]:a=yGr(u),new r(e,qGr(e,0),t,a,0,i,{readonly:n})}YC.exports=bGr});var tU=s((Mwe,eU)=>{"use strict";var ZC=kj(),wGr=Vj(),QC=Jj(),C3=Qj(),EGr=si(),KC=M0(),NGr=tC(),OGr=sC(),SGr=fC(),AGr=hC(),_Gr=wC(),U3=SC(),rU=y(),TGr=_C(),IGr=IC(),LGr=$C();function RGr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g;if(u=NGr(r),o=OGr(r,!0),n=SGr(r,!0),a=AGr(r),f=_Gr(r),c=o.length,e.ndims!==c)throw new RangeError(rU("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,U3(r),o,n,a,f,{readonly:!i});if(v=wGr(e),g=ZC(e,o,!0),g.code){if(t)throw new RangeError(rU("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));g=ZC(e,o,!1),p=QC(g),KC(C3(p,v))>0&&(p=EGr(p.length))}else p=QC(g);return KC(p)===0?LGr(l,u,C3(p,v),f,!i):(a=TGr(g,n,a),p=C3(p,v),p.length===0?new l(u,U3(r),[],[0],a,f,{readonly:!i}):(n=IGr(g,n,v),new l(u,U3(r),p,n,a,f,{readonly:!i})))}eU.exports=RGr});var nU=s((Bwe,iU)=>{"use strict";var PGr=tU();iU.exports=PGr});var uU=s((kwe,sU)=>{"use strict";function aU(r,e,t,i,n,a){var u,o,f,v,c;if(a>=e.length)return r.accessors[0](r.data,i);for(f=[],v=e[a],u=t[a],c=0;c<v;c++)o=aU(r,e,t,i,n,a+1),f.push(o),i+=u;return f}sU.exports=aU});var vU=s((jwe,oU)=>{"use strict";var FGr=qn(),MGr=uU();function BGr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return MGr(FGr(r),e,t,i,n,0)}oU.exports=BGr});var cU=s((Cwe,fU)=>{"use strict";var kGr=vU();fU.exports=kGr});var pU=s((Uwe,lU)=>{"use strict";var jGr=k0(),CGr=j0(),UGr=j3(),VGr=y(),GGr=O3(),xGr=M0();function HGr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=xGr(e),u=jGr(e,t)):(a=1,u=[0]),n=UGr(r,a),n===null)throw new TypeError(VGr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new GGr(r,n,e,u,CGr(e,u),t)}lU.exports=HGr});var mU=s((Vwe,gU)=>{"use strict";var DGr=pU();gU.exports=DGr});var hU=s((Gwe,dU)=>{"use strict";var ct=rr(),WGr=O3(),zGr=M0(),XGr=hj(),JGr=k0(),YGr=nU(),$Gr=j0(),ZGr=cU(),QGr=mU();function KGr(r){return ct(r,"ndarray",WGr),ct(r,"numel",zGr),ct(r,"seq2multislice",XGr),ct(r,"shape2strides",JGr),ct(r,"slice",YGr),ct(r,"strides2offset",$Gr),ct(r,"toArray",ZGr),ct(r,"zeros",QGr),r}dU.exports=KGr});var yU=s((xwe,qU)=>{"use strict";var rxr=Ye();function exr(r,e,t,i){rxr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}qU.exports=exr});var M=s((Hwe,bU)=>{"use strict";var txr=yU();bU.exports=txr});var EU=s((Dwe,wU)=>{"use strict";function ixr(r){return e;function e(){return r}}wU.exports=ixr});var _=s((Wwe,NU)=>{"use strict";var nxr=EU();NU.exports=nxr});var SU=s((zwe,OU)=>{"use strict";var axr=I();function sxr(r){return r===0&&1/r===axr}OU.exports=sxr});var lt=s((Xwe,AU)=>{"use strict";var uxr=SU();AU.exports=uxr});var IU=s((Jwe,TU)=>{"use strict";var oxr=lt(),_U=E(),V3=I();function vxr(r,e){return _U(r)||_U(e)?NaN:r===V3||e===V3?V3:r===e&&r===0?oxr(r)?r:e:r>e?r:e}TU.exports=vxr});var G3=s((Ywe,LU)=>{"use strict";var fxr=IU();LU.exports=fxr});var FU=s(($we,PU)=>{"use strict";var RU=65535;function cxr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&RU)>>>0,o=(e&RU)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}PU.exports=cxr});var BU=s((Zwe,MU)=>{"use strict";var lxr=FU();MU.exports=lxr});var x3=s((Qwe,kU)=>{"use strict";function pxr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,g=0;g<r;g++)v(f,p,c(o,l)),l+=t,p+=a;return e}kU.exports=pxr});var UU=s((Kwe,CU)=>{"use strict";var jU=qn(),gxr=x3(),H3=8;function mxr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=jU(e),f=jU(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,gxr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%H3,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<H3)return i;for(c=v;c<r;c+=H3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}CU.exports=mxr});var xU=s((rEe,GU)=>{"use strict";var VU=qn(),dxr=x3(),Kn=8;function hxr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=VU(e),c=VU(n),v.accessorProtocol||c.accessorProtocol)return dxr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%Kn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Kn)return n;for(p=l;p<r;p+=Kn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Kn,f+=Kn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}GU.exports=hxr});var pt=s((eEe,DU)=>{"use strict";var qxr=b(),HU=UU(),yxr=xU();qxr(HU,"ndarray",yxr);DU.exports=HU});var zU=s((tEe,WU)=>{"use strict";function bxr(){}WU.exports=bxr});var JU=s((iEe,XU)=>{"use strict";var wxr=zU();function Exr(){return wxr.name==="foo"}XU.exports=Exr});var $U=s((nEe,YU)=>{"use strict";var Nxr=JU();YU.exports=Nxr});var QU=s((aEe,ZU)=>{"use strict";var Oxr=T(),Sxr=$U(),Axr=y(),_xr=yo().REGEXP,Txr=Sxr();function Ixr(r){if(Oxr(r)===!1)throw new TypeError(Axr("invalid argument. Must provide a function. Value: `%s`.",r));return Txr?r.name:_xr.exec(r.toString())[1]}ZU.exports=Ixr});var rV=s((sEe,KU)=>{"use strict";var Lxr=QU();KU.exports=Lxr});var tV=s((uEe,eV)=>{"use strict";var Rxr=li(),Pxr=Qr(),Fxr=ci(),Mxr=fi(),Bxr=Ut(),kxr=$e(),jxr=lr(),Cxr=Zr(),Uxr=cr(),Vxr=[Uxr,Cxr,kxr,jxr,Mxr,Bxr,Rxr,Pxr,Fxr];eV.exports=Vxr});var iV=s((oEe,Gxr)=>{Gxr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var vV=s((vEe,oV)=>{"use strict";var xxr=ce(),Hxr=rV(),sV=Wt(),Dxr=Ao(),Wxr=cr(),nV=tV(),aV=iV(),C0=Dxr()?sV(Wxr):uV;C0=Hxr(C0)==="TypedArray"?C0:uV;function uV(){}function zxr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof C0)return!0;for(t=0;t<nV.length;t++)if(r instanceof nV[t])return!0;for(;r;){for(e=xxr(r),t=0;t<aV.length;t++)if(aV[t]===e)return!0;r=sV(r)}return!1}oV.exports=zxr});var cV=s((fEe,fV)=>{"use strict";var Xxr=vV();fV.exports=Xxr});var pV=s((cEe,lV)=>{"use strict";var Jxr=bi(),Yxr=Oi(),$xr=[Yxr,Jxr];lV.exports=$xr});var gV=s((lEe,Zxr)=>{Zxr.exports=["Complex64Array","Complex128Array"]});var qV=s((pEe,hV)=>{"use strict";var Qxr=ce(),Kxr=Wt(),mV=pV(),dV=gV();function rHr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<mV.length;t++)if(r instanceof mV[t])return!0;for(;r;){for(e=Qxr(r),t=0;t<dV.length;t++)if(dV[t]===e)return!0;r=Kxr(r)}return!1}hV.exports=rHr});var bV=s((gEe,yV)=>{"use strict";var eHr=qV();yV.exports=eHr});var EV=s((mEe,wV)=>{"use strict";var tHr=y();function iHr(r,e){if(typeof e!="function")throw new TypeError(tHr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}wV.exports=iHr});var OV=s((dEe,NV)=>{"use strict";var nHr=EV();NV.exports=nHr});var AV=s((hEe,SV)=>{"use strict";var aHr=li(),sHr=Qr(),uHr=ci(),oHr=fi(),vHr=Ut(),fHr=$e(),cHr=lr(),lHr=Zr(),pHr=cr(),gHr=bi(),mHr=Oi(),dHr=[[pHr,"Float64Array"],[lHr,"Float32Array"],[fHr,"Int32Array"],[cHr,"Uint32Array"],[oHr,"Int16Array"],[vHr,"Uint16Array"],[aHr,"Int8Array"],[sHr,"Uint8Array"],[uHr,"Uint8ClampedArray"],[gHr,"Complex64Array"],[mHr,"Complex128Array"]];SV.exports=dHr});var TV=s((qEe,_V)=>{"use strict";var hHr=OV(),qHr=ce(),yHr=Wt(),Gi=AV();function bHr(r){var e,t;for(t=0;t<Gi.length;t++)if(hHr(r,Gi[t][0]))return Gi[t][1];for(;r;){for(e=qHr(r),t=0;t<Gi.length;t++)if(e===Gi[t][1])return Gi[t][1];r=yHr(r)}}_V.exports=bHr});var LV=s((yEe,IV)=>{"use strict";var wHr=cV(),EHr=bV(),NHr=mi(),OHr=di(),SHr=y(),AHr=TV();function _Hr(r){var e,t,i;if(wHr(r))e=r;else if(EHr(r))r.BYTES_PER_ELEMENT===8?e=NHr(r,0):e=OHr(r,0);else throw new TypeError(SHr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:AHr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}IV.exports=_Hr});var B=s((bEe,RV)=>{"use strict";var THr=LV();RV.exports=THr});var D3=s((wEe,PV)=>{"use strict";var IHr=oi(),LHr=z(),RHr=IHr-1;function PHr(){var r=LHr(1+RHr*Math.random());return r>>>0}PV.exports=PHr});var Q3=s((EEe,HV)=>{"use strict";var be=b(),gt=R(),FV=M(),W3=S(),FHr=L(),MHr=Dr(),MV=le(),BHr=gr().isPrimitive,BV=ee().isPrimitive,VV=Bi(),GV=oi(),Er=lr(),kHr=G3(),Z3=BU(),xi=pt(),jHr=B(),Or=y(),kV=D3(),ur=624,z3=397,jV=GV>>>0,CHr=19650218>>>0,X3=2147483648>>>0,J3=2147483647>>>0,UHr=1812433253>>>0,VHr=1664525>>>0,GHr=1566083941>>>0,xHr=2636928640>>>0,HHr=4022730752>>>0,DHr=2567483615>>>0,Y3=[0>>>0,DHr>>>0],xV=1/(VV+1),WHr=67108864>>>0,zHr=2147483648>>>0,$3=1>>>0,XHr=VV*xV,U0=1,V0=3,mt=2,dt=ur+3,Nr=ur+5,ra=ur+6;function CV(r,e){var t;return e?t="option":t="argument",r.length<ra+1?new RangeError(Or("invalid %s. `state` array has insufficient length.",t)):r[0]!==U0?new RangeError(Or("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,U0,r[0])):r[1]!==V0?new RangeError(Or("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,V0,r[1])):r[mt]!==ur?new RangeError(Or("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[mt])):r[dt]!==1?new RangeError(Or("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[dt])):r[Nr]!==r.length-ra?new RangeError(Or("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ra,r[Nr])):null}function UV(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=Z3(t,UHr)+i>>>0;return r}function JHr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=kHr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=Z3(n,VHr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=Z3(n,GHr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=zHr,r}function YHr(r){var e,t,i,n;for(n=ur-z3,t=0;t<n;t++)e=r[t]&X3|r[t+1]&J3,r[t]=r[t+z3]^e>>>1^Y3[e&$3];for(i=ur-1;t<i;t++)e=r[t]&X3|r[t+1]&J3,r[t]=r[t-n]^e>>>1^Y3[e&$3];return e=r[i]&X3|r[0]&J3,r[i]=r[z3-1]^e>>>1^Y3[e&$3],r}function $Hr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!FHr(r))throw new TypeError(Or("invalid argument. Options argument must be an object. Value: `%s`.",r));if(W3(r,"copy")&&(i.copy=r.copy,!BHr(r.copy)))throw new TypeError(Or("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(W3(r,"state")){if(t=r.state,i.state=!0,!MV(t))throw new TypeError(Or("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=CV(t,!0),u)throw u;i.copy===!1?e=t:(e=new Er(t.length),xi(t.length,t,1,e,1)),t=new Er(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,ur),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,t[Nr])}if(n===void 0)if(W3(r,"seed"))if(n=r.seed,i.seed=!0,BV(n)){if(n>jV)throw new RangeError(Or("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(MHr(n)===!1||n.length<1)throw new TypeError(Or("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!BV(n))throw new TypeError(Or("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>jV)throw new RangeError(Or("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new Er(ra+a),e[0]=U0,e[1]=V0,e[mt]=ur,e[dt]=1,e[dt+1]=ur,e[Nr]=a,xi.ndarray(a,n,1,0,e,1,Nr+1),t=new Er(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,ur),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,a),t=UV(t,ur,CHr),t=JHr(t,ur,n,a)}else n=kV()>>>0}else n=kV()>>>0;return t===void 0&&(e=new Er(ra+1),e[0]=U0,e[1]=V0,e[mt]=ur,e[dt]=1,e[dt+1]=ur,e[Nr]=1,e[Nr+1]=n,t=new Er(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,ur),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,1),t=UV(t,ur,n)),be(h,"NAME","mt19937"),gt(h,"seed",o),gt(h,"seedLength",f),FV(h,"state",l,p),gt(h,"stateLength",v),gt(h,"byteLength",c),be(h,"toJSON",g),be(h,"MIN",0),be(h,"MAX",GV),be(h,"normalized",d),be(d,"NAME",h.NAME),gt(d,"seed",o),gt(d,"seedLength",f),FV(d,"state",l,p),gt(d,"stateLength",v),gt(d,"byteLength",c),be(d,"toJSON",g),be(d,"MIN",0),be(d,"MAX",XHr),h;function o(){var m=e[Nr];return xi(m,n,1,new Er(m),1)}function f(){return e[Nr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return xi(m,e,1,new Er(m),1)}function p(m){var q;if(!MV(m))throw new TypeError(Or("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(q=CV(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?xi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Er(m.length)),xi(m.length,m,1,e,1)),t=new Er(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,ur),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,e[Nr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=jHr(e),m.params=[],m}function h(){var m,q;return q=e[dt+1],q>=ur&&(t=YHr(t),q=0),m=t[q],e[dt+1]=q+1,m^=m>>>11,m^=m<<7&xHr,m^=m<<15&HHr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,q=h()>>>6;return(m*WHr+q)*xV}}HV.exports=$Hr});var WV=s((NEe,DV)=>{"use strict";var ZHr=Q3(),QHr=D3(),KHr=ZHr({seed:QHr()});DV.exports=KHr});var J=s((OEe,XV)=>{"use strict";var rDr=b(),zV=WV(),eDr=Q3();rDr(zV,"factory",eDr);XV.exports=zV});var ZV=s((SEe,$V)=>{"use strict";var JV=j().isPrimitive,K3=y(),YV=vr();function tDr(r,e){return!JV(r)||YV(r)?new TypeError(K3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!JV(e)||YV(e)?new TypeError(K3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(K3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}$V.exports=tDr});var KV=s((AEe,QV)=>{"use strict";var iDr=H(),nDr=Qt(),aDr=d0();function sDr(r,e,t){return e+iDr(nDr(aDr*r()),2)*(t-e)}QV.exports=sDr});var rv=s((_Ee,uG)=>{"use strict";var we=b(),G0=R(),rG=M(),eG=L(),tG=T(),iG=S(),nG=_(),uDr=C(),x0=J().factory,aG=E(),oDr=B(),H0=y(),vDr=ZV(),sG=KV();function fDr(){var r,e,t,i,n,a;if(arguments.length===0)e=x0();else if(arguments.length===1){if(r=arguments[0],!eG(r))throw new TypeError(H0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iG(r,"prng")){if(!tG(r.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=x0(r)}else{if(n=arguments[0],a=arguments[1],i=vDr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!eG(r))throw new TypeError(H0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iG(r,"prng")){if(!tG(r.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=x0(r)}else e=x0()}return n===void 0?t=h:t=g,we(t,"NAME","arcsine"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),rG(t,"state",nG(null),uDr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",nG(null)),we(t,"PRNG",e)):(G0(t,"seed",u),G0(t,"seedLength",o),rG(t,"state",c,l),G0(t,"stateLength",f),G0(t,"byteLength",v),we(t,"toJSON",p),we(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=oDr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return sG(e,n,a)}function h(d,m){return aG(d)||aG(m)||d>=m?NaN:sG(e,d,m)}}uG.exports=fDr});var vG=s((TEe,oG)=>{"use strict";var cDr=rv(),lDr=cDr();oG.exports=lDr});var lG=s((IEe,cG)=>{"use strict";var pDr=b(),fG=vG(),gDr=rv();pDr(fG,"factory",gDr);cG.exports=fG});var ev=s((LEe,qG)=>{"use strict";var Ee=b(),D0=R(),pG=M(),gG=L(),mDr=bn().isPrimitive,mG=T(),dG=S(),hG=_(),dDr=C(),W0=J().factory,hDr=E(),qDr=B(),z0=y();function yDr(){var r,e,t,i;if(arguments.length===0)e=W0();else if(arguments.length===1&&gG(arguments[0]))if(r=arguments[0],dG(r,"prng")){if(!mG(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=W0(r);else{if(i=arguments[0],!mDr(i))throw new TypeError(z0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!gG(r))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(dG(r,"prng")){if(!mG(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=W0(r)}else e=W0()}return i===void 0?t=p:t=l,Ee(t,"NAME","bernoulli"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),pG(t,"state",hG(null),dDr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",hG(null)),Ee(t,"PRNG",e)):(D0(t,"seed",n),D0(t,"seedLength",a),pG(t,"state",f,v),D0(t,"stateLength",u),D0(t,"byteLength",o),Ee(t,"toJSON",c),Ee(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=qDr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return hDr(g)||g<0||g>1?NaN:e()<=g?1:0}}qG.exports=yDr});var bG=s((REe,yG)=>{"use strict";var bDr=ev(),wDr=bDr();yG.exports=wDr});var NG=s((PEe,EG)=>{"use strict";var EDr=b(),wG=bG(),NDr=ev();EDr(wG,"factory",NDr);EG.exports=wG});var _G=s((FEe,AG)=>{"use strict";var ODr=V(),OG=sr(),SDr=P(),SG=.00991256303526217;function ADr(r,e){var t,i,n;for(i=OG(-.5*e*e),t=[],t.push(SG/i),t.push(e),n=2;n<r;n++)t[n]=ODr(-2*SDr(SG/t[n-1]+i)),i=OG(-.5*t[n]*t[n]);return t.push(0),t}AG.exports=ADr});var IG=s((MEe,TG)=>{"use strict";function _Dr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}TG.exports=_Dr});var PG=s((BEe,RG)=>{"use strict";var LG=P();function TDr(r,e,t){var i,n;do i=LG(r())/e,n=LG(r());while(-2*n<i*i);return t?i-e:e-i}RG.exports=TDr});var kG=s((kEe,BG)=>{"use strict";var IDr=Y(),FG=sr(),LDr=_G(),RDr=IG(),PDr=PG(),FDr=128,MG=3.442619855899,ei=LDr(FDr,MG),MDr=RDr(ei),BDr=127;function kDr(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&BDr,IDr(o)<MDr[f])return o*ei[f];if(f===0)return PDr(r,MG,o<0);if(u=o*ei[f],a=u*u,v=f+1,i=FG(-.5*(ei[f]*ei[f]-a)),n=FG(-.5*(ei[v]*ei[v]-a)),n+r()*(i-n)<1)return u}}}BG.exports=kDr});var iv=s((jEe,UG)=>{"use strict";var ht=b(),X0=R(),jG=M(),jDr=T(),CDr=L(),UDr=gr().isPrimitive,J0=S(),VDr=le(),tv=J().factory,CG=_(),GDr=C(),xDr=z(),HDr=oi(),DDr=B(),ea=y(),WDr=kG();function zDr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!CDr(r))throw new TypeError(ea("invalid argument. Must provide an object. Value: `%s`.",r));if(J0(r,"copy")&&(n.copy=r.copy,!UDr(r.copy)))throw new TypeError(ea("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(J0(r,"prng")){if(!jDr(r.prng))throw new TypeError(ea("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(J0(r,"state")){if(n.state=r.state,!VDr(r.state))throw new TypeError(ea("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(J0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(ea("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=tv(n),e=t.normalized):(t=tv({seed:xDr(1+HDr*e()),copy:n.copy}),n.seed=null):(t=tv(n),e=t.normalized),i=WDr(e,t),ht(i,"NAME","improved-ziggurat"),n.seed===null?(ht(i,"seed",null),ht(i,"seedLength",null)):(X0(i,"seed",a),X0(i,"seedLength",u)),r&&r.prng?(jG(i,"state",CG(null),GDr),ht(i,"stateLength",null),ht(i,"byteLength",null),ht(i,"toJSON",CG(null))):(jG(i,"state",v,c),X0(i,"stateLength",o),X0(i,"byteLength",f),ht(i,"toJSON",l)),ht(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=DDr(t.state),p.params=[],p}}UG.exports=zDr});var GG=s((CEe,VG)=>{"use strict";var XDr=iv(),JDr=XDr();VG.exports=JDr});var qt=s((UEe,HG)=>{"use strict";var YDr=b(),xG=GG(),$Dr=iv();YDr(xG,"factory",$Dr);HG.exports=xG});var WG=s((VEe,DG)=>{"use strict";var ZDr=T(),QDr=ZDr(Object.assign);DG.exports=QDr});var XG=s((GEe,zG)=>{"use strict";var KDr=Object.assign;zG.exports=KDr});var YG=s((xEe,JG)=>{"use strict";var rWr=typeof Object.getOwnPropertySymbols<"u";JG.exports=rWr});var QG=s((HEe,ZG)=>{"use strict";var $G=Si(),eWr=$G.getOwnPropertySymbols;function tWr(r){return eWr($G(r))}ZG.exports=tWr});var rx=s((DEe,KG)=>{"use strict";function iWr(){return[]}KG.exports=iWr});var tx=s((WEe,ex)=>{"use strict";var nWr=YG(),aWr=QG(),sWr=rx(),nv;nWr?nv=aWr:nv=sWr;ex.exports=nv});var nx=s((zEe,ix)=>{"use strict";var uWr=Ti(),oWr=tx(),vWr=En();function fWr(r){var e,t,i;for(e=uWr(r),t=oWr(r),i=0;i<t.length;i++)vWr(r,t[i])&&e.push(t[i]);return e}ix.exports=fWr});var sx=s((XEe,ax)=>{"use strict";var cWr=nx();ax.exports=cWr});var vx=s((JEe,ox)=>{"use strict";var lWr=sx(),ux=Si(),pWr=y();function gWr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(pWr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=ux(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=lWr(ux(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}ox.exports=gWr});var ta=s((YEe,fx)=>{"use strict";var mWr=WG(),dWr=XG(),hWr=vx(),av;mWr?av=dWr:av=hWr;fx.exports=av});var gx=s(($Ee,px)=>{"use strict";var cx=W().isPrimitive,lx=y();function qWr(r,e){return cx(r)?cx(e)?null:new TypeError(lx("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(lx("invalid argument. First argument must be a positive number. Value: `%s`.",r))}px.exports=qWr});var yx=s((ZEe,qx)=>{"use strict";var mx=P(),dx=V(),yWr=H(),hx=1/3;function bWr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-hx,o=1/dx(9*f),c=yWr(r(),1/t)):(f=t-hx,o=1/dx(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+mx(p)),l=r(),(l<a||mx(l)<u)&&(i=!1)}return f*p*c}qx.exports=bWr});var Ex=s((QEe,wx)=>{"use strict";var sv=H(),bx=P();function wWr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=sv(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=sv(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*sv(n/(8*t-8),2),f<c&&(c=a*bx(4*v*(1-v)),c+=u*u/2,c>=bx(f)&&(i=!1))));return v}wx.exports=wWr});var Ox=s((KEe,Nx)=>{"use strict";var EWr=H(),Y0=P();function NWr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h;for(o=t-1,f=i-1,v=o+f,c=v*Y0(v),u=o/v,n=.5/EWr(v,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*Y0(g/o),h+=f*Y0((1-g)/f),h+=c+.5*l*l,h>=Y0(p)&&(a=!1));return g}Nx.exports=NWr});var _x=s((rNe,Ax)=>{"use strict";var uv=sr(),Sx=H(),ov=P();function OWr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=Sx(u,1/e),v=Sx(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=ov(u)/e,n=ov(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),uv(i-ov(uv(i)+uv(n))))}Ax.exports=OWr});var Lx=s((eNe,Ix)=>{"use strict";var Tx=yx(),SWr=Ex(),AWr=Ox(),_Wr=_x();function TWr(r,e,t,i){var n,a;return t===i&&t>1.5?SWr(r,e,t):t>1&&i>1?AWr(r,e,t,i):t<1&&i<1?_Wr(r,t,i):(n=Tx(r,e,t),a=Tx(r,e,i),n/(n+a))}Ix.exports=TWr});var lv=s((tNe,Vx)=>{"use strict";var Ne=b(),$0=R(),Rx=M(),Px=L(),Fx=gr().isPrimitive,Mx=T(),Hi=S(),Bx=_(),IWr=C(),kx=qt().factory,Z0=J().factory,jx=E(),vv=pt(),fv=lr(),cv=le(),Cx=ta(),LWr=B(),Oe=y(),RWr=gx(),Ux=Lx();function PWr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=Z0(n);else if(arguments.length===1){if(n=arguments[0],!Px(n))throw new TypeError(Oe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Hi(n,"copy")&&!Fx(n.copy))throw new TypeError(Oe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Hi(n,"prng")){if(!Mx(n.prng))throw new TypeError(Oe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Hi(n,"state")&&!cv(n.state))throw new TypeError(Oe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Cx({},n),n.copy===!1?o=!1:n.state&&(n.state=vv(n.state.length,n.state,1,new fv(n.state.length),1)),n.copy=!1,a=Z0(n)}}else{if(t=arguments[0],i=arguments[1],f=RWr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!Px(n))throw new TypeError(Oe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Hi(n,"copy")&&!Fx(n.copy))throw new TypeError(Oe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Hi(n,"prng")){if(!Mx(n.prng))throw new TypeError(Oe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Hi(n,"state")&&!cv(n.state))throw new TypeError(Oe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Cx({},n),n.copy===!1?o=!1:n.state&&(n.state=vv(n.state.length,n.state,1,new fv(n.state.length),1)),n.copy=!1,a=Z0(n)}}else n={copy:!1},a=Z0(n)}return n&&n.prng?e=kx({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=kx({state:r,copy:!1})),t===void 0?u=q:u=m,Ne(u,"NAME","beta"),n&&n.prng?(Ne(u,"seed",null),Ne(u,"seedLength",null),Rx(u,"state",Bx(null),IWr),Ne(u,"stateLength",null),Ne(u,"byteLength",null),Ne(u,"toJSON",Bx(null)),Ne(u,"PRNG",a)):($0(u,"seed",v),$0(u,"seedLength",c),Rx(u,"state",g,h),$0(u,"stateLength",l),$0(u,"byteLength",p),Ne(u,"toJSON",d),Ne(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!cv(N))throw new TypeError(Oe("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=vv(N.length,N,1,new fv(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=LWr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return Ux(a,e,t,i)}function q(N,O){return jx(N)||jx(O)||N<=0||O<=0?NaN:Ux(a,e,N,O)}}Vx.exports=PWr});var xx=s((iNe,Gx)=>{"use strict";var FWr=lv(),MWr=FWr();Gx.exports=MWr});var Wx=s((nNe,Dx)=>{"use strict";var BWr=b(),Hx=xx(),kWr=lv();BWr(Hx,"factory",kWr);Dx.exports=Hx});var Yx=s((aNe,Jx)=>{"use strict";var zx=W().isPrimitive,Xx=y();function jWr(r,e){return zx(r)?zx(e)?null:new TypeError(Xx("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Xx("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Jx.exports=jWr});var Qx=s((sNe,Zx)=>{"use strict";var $x=P();function CWr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+$x(l)),c=r(),(c<o||$x(c)<f)&&(a=!1)}return 1/t*i*l}Zx.exports=CWr});var hv=s((uNe,oH)=>{"use strict";var Se=b(),Q0=R(),Kx=M(),rH=L(),pv=le(),eH=gr().isPrimitive,tH=T(),Di=S(),iH=_(),UWr=C(),nH=qt().factory,K0=J().factory,aH=E(),gv=V(),sH=H(),mv=pt(),dv=lr(),VWr=B(),uH=ta(),Ae=y(),GWr=Yx(),rs=Qx(),es=1/3;function xWr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=K0(n);else if(arguments.length===1){if(n=arguments[0],!rH(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Di(n,"copy")&&!eH(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Di(n,"prng")){if(!tH(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Di(n,"state")&&!pv(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uH({},n),n.copy===!1?o=!1:n.state&&(n.state=mv(n.state.length,n.state,1,new dv(n.state.length),1)),n.copy=!1,a=K0(n)}}else{if(e=arguments[0],i=arguments[1],f=GWr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!rH(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Di(n,"copy")&&!eH(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Di(n,"prng")){if(!tH(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Di(n,"state")&&!pv(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uH({},n),n.copy===!1?o=!1:n.state&&(n.state=mv(n.state.length,n.state,1,new dv(n.state.length),1)),n.copy=!1,a=K0(n)}}else n={copy:!1},a=K0(n)}return n&&n.prng?t=nH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=nH({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-es):(u=O,c=e+1-es),v=1/gv(9*c)),Se(u,"NAME","gamma"),n&&n.prng?(Se(u,"seed",null),Se(u,"seedLength",null),Kx(u,"state",iH(null),UWr),Se(u,"stateLength",null),Se(u,"byteLength",null),Se(u,"toJSON",iH(null)),Se(u,"PRNG",a)):(Q0(u,"seed",l),Q0(u,"seedLength",p),Kx(u,"state",d,m),Q0(u,"stateLength",g),Q0(u,"byteLength",h),Se(u,"toJSON",q),Se(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(A){if(!pv(A))throw new TypeError(Ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));o&&(A=mv(A.length,A,1,new dv(A.length),1)),a.state=A}function q(){var A={};return A.type="PRNG",A.name=u.NAME,A.state=VWr(a.state),e===void 0?A.params=[]:A.params=[e,i],A}function N(){return rs(a,t,i,c,v)}function O(){return rs(a,t,i,c,v)*sH(a(),1/e)}function F(A,D){var K,G;return aH(A)||aH(D)||A<=0||D<=0?NaN:A<1?(G=A+1-es,K=1/gv(9*G),rs(a,t,D,G,K)*sH(a(),1/A)):(G=A-es,K=1/gv(9*G),rs(a,t,D,G,K))}}oH.exports=xWr});var fH=s((oNe,vH)=>{"use strict";var HWr=hv(),DWr=HWr();vH.exports=DWr});var Wi=s((vNe,lH)=>{"use strict";var WWr=b(),cH=fH(),zWr=hv();WWr(cH,"factory",zWr);lH.exports=cH});var dH=s((fNe,mH)=>{"use strict";var pH=W().isPrimitive,gH=y();function XWr(r,e){return pH(r)?pH(e)?null:new TypeError(gH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}mH.exports=XWr});var qH=s((cNe,hH)=>{"use strict";function JWr(r,e,t){return r(e,1)/r(t,1)}hH.exports=JWr});var qv=s((lNe,SH)=>{"use strict";var yt=b(),ts=R(),yH=M(),bH=L(),wH=_(),YWr=C(),is=Wi().factory,EH=E(),$Wr=B(),NH=y(),ZWr=dH(),OH=qH();function QWr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=is();else if(arguments.length===1){if(i=arguments[0],!bH(i))throw new TypeError(NH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=is(i)}else{if(e=arguments[0],t=arguments[1],u=ZWr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!bH(i))throw new TypeError(NH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=is(i)}else r=is()}return e===void 0?a=d:a=h,n=r.PRNG,yt(a,"NAME","betaprime"),i&&i.prng?(yt(a,"seed",null),yt(a,"seedLength",null),yH(a,"state",wH(null),YWr),yt(a,"stateLength",null),yt(a,"byteLength",null),yt(a,"toJSON",wH(null))):(ts(a,"seed",o),ts(a,"seedLength",f),yH(a,"state",l,p),ts(a,"stateLength",v),ts(a,"byteLength",c),yt(a,"toJSON",g)),yt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=$Wr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return OH(r,e,t)}function d(m,q){return EH(m)||EH(q)||m<=0||q<=0?NaN:OH(r,m,q)}}SH.exports=QWr});var _H=s((pNe,AH)=>{"use strict";var KWr=qv(),rzr=KWr();AH.exports=rzr});var LH=s((gNe,IH)=>{"use strict";var ezr=b(),TH=_H(),tzr=qv();ezr(TH,"factory",tzr);IH.exports=TH});var PH=s((mNe,RH)=>{"use strict";var izr=z();function nzr(r){return izr(r)===r&&r>0}RH.exports=nzr});var yv=s((dNe,FH)=>{"use strict";var azr=PH();FH.exports=azr});var BH=s((hNe,MH)=>{"use strict";function szr(r){return r>=0&&r<=1}MH.exports=szr});var jH=s((qNe,kH)=>{"use strict";var uzr=BH();kH.exports=uzr});var VH=s((yNe,UH)=>{"use strict";var ozr=ee().isPrimitive,vzr=bn().isPrimitive,CH=y();function fzr(r,e){return ozr(r)?vzr(e)?null:new TypeError(CH("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(CH("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}UH.exports=fzr});var xH=s((bNe,GH)=>{"use strict";function czr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}GH.exports=czr});var DH=s((wNe,HH)=>{"use strict";var lzr=E();function pzr(r){return r===0||lzr(r)?r:r<0?-1:1}HH.exports=pzr});var ns=s((ENe,WH)=>{"use strict";var gzr=DH();WH.exports=gzr});var XH=s((NNe,zH)=>{"use strict";var mzr=H(),dzr=1/12,hzr=1/360,qzr=1/1260;function yzr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=mzr(r,2),(dzr-(hzr-qzr/e)/e)/r}}zH.exports=yzr});var YH=s((ONe,JH)=>{"use strict";var bv=z(),bzr=ns(),wzr=V(),wv=Y(),as=P(),ss=XH(),Ezr=1/6;function Nzr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,A,D,K,G,Rr,Pr,or,kt;for(D=bv((e+1)*t),v=e-D+1,K=1-t,G=t/K,c=(e+1)*G,u=e*t*K,a=wzr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,q=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(D+.5)*as((D+1)/(G*v)),O+=ss(D)+ss(e-D);;){if(or=r(),or<=n)return Pr=or/h-.43,G=Pr*(2*d/(.5-wv(Pr))+m)+q,bv(G);if(or>=h?Pr=r()-.5:(Pr=or/h-.93,Pr=bzr(Pr)*.5-Pr,or=h*r()),l=.5-wv(Pr),A=bv(Pr*(2*d/l+m)+q),!(A<0||A>e))if(or=or*i/(d/(l*l)+m),p=wv(A-D),p>15){if(or=as(or),o=p/u,f=(p/3+.625)*p,f+=Ezr,f/=u,o*=f+.5,Rr=-(p*p)/(2*u),or<Rr-o||or<=Rr+o&&(g=e-A+1,kt=O+(e+1)*as(v/g),kt+=(A+.5)*as(g*G/(A+1)),kt+=-(ss(A)+ss(e-A)),or<=kt))return A}else{if(N=1,D<A)for(F=D;F<=A;F++)N*=c/F-G;else if(D>A)for(F=A;F<=D;F++)or*=c/F-G;if(or<=N)return A}}}JH.exports=Nzr});var QH=s((SNe,ZH)=>{"use strict";var Ozr=xH(),Szr=YH();function $H(r,e,t){return t>.5?e-$H(r,e,1-t):e*t<10?Ozr(r,e,t):Szr(r,e,t)}ZH.exports=$H});var Ev=s((ANe,sD)=>{"use strict";var _e=b(),us=R(),KH=M(),rD=L(),eD=T(),tD=S(),iD=_(),Azr=C(),nD=E(),_zr=yv(),Tzr=jH(),os=J().factory,Izr=B(),vs=y(),Lzr=VH(),aD=QH();function Rzr(){var r,e,t,i,n,a;if(arguments.length===0)e=os();else if(arguments.length===1){if(r=arguments[0],!rD(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tD(r,"prng")){if(!eD(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else{if(n=arguments[0],a=arguments[1],i=Lzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!rD(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tD(r,"prng")){if(!eD(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else e=os()}return n===void 0?t=h:t=g,_e(t,"NAME","binomial"),r&&r.prng?(_e(t,"seed",null),_e(t,"seedLength",null),KH(t,"state",iD(null),Azr),_e(t,"stateLength",null),_e(t,"byteLength",null),_e(t,"toJSON",iD(null)),_e(t,"PRNG",e)):(us(t,"seed",u),us(t,"seedLength",o),KH(t,"state",c,l),us(t,"stateLength",f),us(t,"byteLength",v),_e(t,"toJSON",p),_e(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Izr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return aD(e,n,a)}function h(d,m){return nD(d)||nD(m)||!_zr(d)||!Tzr(m)?NaN:aD(e,d,m)}}sD.exports=Rzr});var oD=s((_Ne,uD)=>{"use strict";var Pzr=Ev(),Fzr=Pzr();uD.exports=Fzr});var cD=s((TNe,fD)=>{"use strict";var Mzr=b(),vD=oD(),Bzr=Ev();Mzr(vD,"factory",Bzr);fD.exports=vD});var pD=s((INe,lD)=>{"use strict";var kzr=V(),jzr=P(),Czr=Qt(),Uzr=Zt(),Vzr=st();function Gzr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=kzr(-2*jzr(n)),o=Vzr*a,t=u*Uzr(o),e=!1,u*Czr(o)}return e=!0,t}}lD.exports=Gzr});var mD=s((LNe,gD)=>{"use strict";var xzr=V(),Hzr=P(),Dzr=Zt(),Wzr=Cr(),zzr=Dzr(Wzr);function Xzr(r){var e=xzr(-2*Hzr(r));return e*zzr}gD.exports=Xzr});var hD=s((RNe,dD)=>{"use strict";var Jzr=V(),Yzr=P(),$zr=Zt(),Zzr=st();function Qzr(r){var e=Jzr(-2*Yzr(r)),t=Zzr*r;return e*$zr(t)}dD.exports=Qzr});var Nv=s((PNe,wD)=>{"use strict";var xr=b(),fs=R(),qD=M(),Kzr=L(),rXr=T(),eXr=gr().isPrimitive,ia=S(),tXr=le(),yD=J().factory,bD=_(),iXr=C(),nXr=B(),na=y(),aXr=pD(),sXr=mD(),uXr=hD();function oXr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!Kzr(r))throw new TypeError(na("invalid argument. Must provide an object. Value: `%s`.",r));if(ia(r,"copy")&&(n.copy=r.copy,!eXr(r.copy)))throw new TypeError(na("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(ia(r,"prng")){if(!rXr(r.prng))throw new TypeError(na("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(ia(r,"state")){if(n.state=r.state,!tXr(r.state))throw new TypeError(na("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(ia(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(na("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=yD(n),e=i.normalized):n.seed=null:(i=yD(n),e=i.normalized),t=aXr(e),xr(t,"NAME","box-muller"),n.seed===null?(xr(t,"seed",null),xr(t,"seedLength",null)):(fs(t,"seed",a),fs(t,"seedLength",u)),r&&r.prng?(qD(t,"state",bD(null),iXr),xr(t,"stateLength",null),xr(t,"byteLength",null),xr(t,"toJSON",bD(null))):(qD(t,"state",v,c),fs(t,"stateLength",o),fs(t,"byteLength",f),xr(t,"toJSON",l)),xr(t,"PRNG",e),ia(e,"MIN")?(xr(t,"MIN",sXr(e.MIN)),xr(t,"MAX",uXr(e.MIN))):(xr(t,"MIN",null),xr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=nXr(i.state),p.params=[],p}}wD.exports=oXr});var ND=s((FNe,ED)=>{"use strict";var vXr=Nv(),fXr=vXr();ED.exports=fXr});var AD=s((MNe,SD)=>{"use strict";var cXr=b(),OD=ND(),lXr=Nv();cXr(OD,"factory",lXr);SD.exports=OD});var ID=s((BNe,TD)=>{"use strict";var pXr=j().isPrimitive,gXr=W().isPrimitive,_D=y(),mXr=vr();function dXr(r,e){return!pXr(r)||mXr(r)?new TypeError(_D("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):gXr(e)?null:new TypeError(_D("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}TD.exports=dXr});var RD=s((kNe,LD)=>{"use strict";function hXr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}LD.exports=hXr});var FD=s((jNe,PD)=>{"use strict";function qXr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}PD.exports=qXr});var kD=s((CNe,BD)=>{"use strict";var yXr=ar(),MD=ge(),bXr=RD(),wXr=FD(),EXr=.7853981633974483,NXr=3061616997868383e-32,OXr=.3333333333333341,SXr=2147483647;function AXr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=yXr(r),n=i&SXr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=EXr-r,c=NXr-e,r=l+c,e=0),l=r*r,c=l*l,u=bXr(c),v=l*wXr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=OXr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=MD(c,0),v=u-(l-r),a=-1/c,f=MD(a,0),o=1+f*l,f+a*(o+f*v))}BD.exports=AXr});var CD=s((UNe,jD)=>{"use strict";var _Xr=kD();jD.exports=_Xr});var GD=s((VNe,VD)=>{"use strict";var TXr=ar(),UD=CD(),IXr=kn(),Ov=[0,0],LXr=2147483647,RXr=1072243195,PXr=2146435072,FXr=1044381696;function MXr(r){var e,t;return e=TXr(r),e&=LXr,e<=RXr?e<FXr?r:UD(r,0,1):e>=PXr?NaN:(t=IXr(r,Ov),UD(Ov[0],Ov[1],1-((t&1)<<1)))}VD.exports=MXr});var Sv=s((GNe,xD)=>{"use strict";var BXr=GD();xD.exports=BXr});var DD=s((xNe,HD)=>{"use strict";var kXr=Sv(),jXr=Cr();function CXr(r,e,t){return e+t*kXr(jXr*(r()-.5))}HD.exports=CXr});var Av=s((HNe,QD)=>{"use strict";var bt=b(),cs=R(),WD=M(),zD=L(),XD=T(),JD=S(),YD=_(),UXr=C(),$D=E(),zi=qt().factory,VXr=B(),ls=y(),GXr=ID(),ZD=DD();function xXr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=zi();else if(arguments.length===1){if(t=arguments[0],!zD(t))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",t));if(JD(t,"prng")){if(!XD(t.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=zi({prng:t.prng})}else e=zi(t)}else{if(u=arguments[0],r=arguments[1],a=GXr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!zD(t))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",t));if(JD(t,"prng")){if(!XD(t.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=zi({prng:t.prng})}else e=zi(t)}else e=zi()}return u===void 0?n=d:n=h,i=e.PRNG,bt(n,"NAME","cauchy"),t&&t.prng?(bt(n,"seed",null),bt(n,"seedLength",null),WD(n,"state",YD(null),UXr),bt(n,"stateLength",null),bt(n,"byteLength",null),bt(n,"toJSON",YD(null))):(cs(n,"seed",o),cs(n,"seedLength",f),WD(n,"state",l,p),cs(n,"stateLength",v),cs(n,"byteLength",c),bt(n,"toJSON",g)),bt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=VXr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return ZD(e,u,r)}function d(m,q){return $D(m)||$D(q)||q<=0?NaN:ZD(e,m,q)}}QD.exports=xXr});var rW=s((DNe,KD)=>{"use strict";var HXr=Av(),DXr=HXr();KD.exports=DXr});var iW=s((WNe,tW)=>{"use strict";var WXr=b(),eW=rW(),zXr=Av();WXr(eW,"factory",zXr);tW.exports=eW});var _v=s((zNe,vW)=>{"use strict";var wt=b(),ps=R(),nW=M(),XXr=W().isPrimitive,aW=L(),sW=T(),uW=S(),oW=_(),JXr=C(),YXr=E(),Xi=Wi().factory,$Xr=B(),gs=y();function ZXr(){var r,e,t,i,n;if(arguments.length===0)r=Xi();else if(arguments.length===1&&aW(arguments[0]))if(t=arguments[0],uW(t,"prng")){if(!sW(t.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Xi({prng:t.prng})}else r=Xi(t);else{if(n=arguments[0],!XXr(n))throw new TypeError(gs("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!aW(t))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(uW(t,"prng")){if(!sW(t.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Xi(n/2,.5,{prng:t.prng})}else r=Xi(n/2,.5,t)}else r=Xi(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,wt(i,"NAME","chisquare"),t&&t.prng?(wt(i,"seed",null),wt(i,"seedLength",null),nW(i,"state",oW(null),JXr),wt(i,"stateLength",null),wt(i,"byteLength",null),wt(i,"toJSON",oW(null))):(ps(i,"seed",a),ps(i,"seedLength",u),nW(i,"state",v,c),ps(i,"stateLength",o),ps(i,"byteLength",f),wt(i,"toJSON",l)),wt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=$Xr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return YXr(h)||h<=0?NaN:r(h/2,.5)}}vW.exports=ZXr});var cW=s((XNe,fW)=>{"use strict";var QXr=_v(),KXr=QXr();fW.exports=KXr});var aa=s((JNe,pW)=>{"use strict";var rJr=b(),lW=cW(),eJr=_v();rJr(lW,"factory",eJr);pW.exports=lW});var Tv=s((YNe,bW)=>{"use strict";var Et=b(),ms=R(),gW=M(),tJr=W().isPrimitive,mW=L(),dW=T(),hW=S(),qW=_(),iJr=C(),nJr=E(),Ji=aa().factory,aJr=B(),yW=V(),ds=y();function sJr(){var r,e,t,i,n;if(arguments.length===0)r=Ji();else if(arguments.length===1&&mW(arguments[0]))if(t=arguments[0],hW(t,"prng")){if(!dW(t.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ji({prng:t.prng})}else r=Ji(t);else{if(n=arguments[0],!tJr(n))throw new TypeError(ds("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!mW(t))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hW(t,"prng")){if(!dW(t.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ji(n,{prng:t.prng})}else r=Ji(n,t)}else r=Ji(n)}return n===void 0?i=g:i=p,e=r.PRNG,Et(i,"NAME","chi"),t&&t.prng?(Et(i,"seed",null),Et(i,"seedLength",null),gW(i,"state",qW(null),iJr),Et(i,"stateLength",null),Et(i,"byteLength",null),Et(i,"toJSON",qW(null))):(ms(i,"seed",a),ms(i,"seedLength",u),gW(i,"state",v,c),ms(i,"stateLength",o),ms(i,"byteLength",f),Et(i,"toJSON",l)),Et(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=aJr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return yW(r())}function g(h){return nJr(h)||h<=0?NaN:yW(r(h))}}bW.exports=sJr});var EW=s(($Ne,wW)=>{"use strict";var uJr=Tv(),oJr=uJr();wW.exports=oJr});var SW=s((ZNe,OW)=>{"use strict";var vJr=b(),NW=EW(),fJr=Tv();vJr(NW,"factory",fJr);OW.exports=NW});var TW=s((QNe,_W)=>{"use strict";var cJr=j().isPrimitive,lJr=W().isPrimitive,AW=y(),pJr=vr();function gJr(r,e){return!cJr(r)||pJr(r)?new TypeError(AW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):lJr(e)?null:new TypeError(AW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_W.exports=gJr});var LW=s((KNe,IW)=>{"use strict";var Iv=E(),mJr=Dn(),dJr=Cr();function hJr(r,e,t){var i;return Iv(r)||Iv(e)||Iv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+mJr(i)/dJr)/2)}IW.exports=hJr});var FW=s((rOe,PW)=>{"use strict";var RW=E();function qJr(r,e){return RW(r)||RW(e)?NaN:r<e?0:1}PW.exports=qJr});var kW=s((eOe,BW)=>{"use strict";var yJr=_(),MW=E();function bJr(r){if(MW(r))return yJr(NaN);return e;function e(t){return MW(t)?NaN:t<r?0:1}}BW.exports=bJr});var hs=s((tOe,CW)=>{"use strict";var wJr=b(),jW=FW(),EJr=kW();wJr(jW,"factory",EJr);CW.exports=jW});var VW=s((iOe,UW)=>{"use strict";var NJr=_(),OJr=hs().factory,Lv=E(),SJr=Dn(),AJr=Cr();function _Jr(r,e){if(Lv(r)||Lv(e)||e<0)return NJr(NaN);if(e===0)return OJr(r);return t;function t(i){var n;return Lv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+SJr(n)/AJr)/2)}}UW.exports=_Jr});var HW=s((nOe,xW)=>{"use strict";var TJr=b(),GW=LW(),IJr=VW();TJr(GW,"factory",IJr);xW.exports=GW});var Rv=s((aOe,DW)=>{"use strict";var LJr=HW(),RJr=1e4,PJr=1e-12;function FJr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<RJr;){if(u=(i+n)/2,n-i<PJr)return u;a=LJr(u,e,t),r>a?i=u:n=u,o+=1}return u}DW.exports=FJr});var zW=s((sOe,WW)=>{"use strict";var Pv=E(),MJr=Rv();function BJr(r,e,t){return Pv(e)||Pv(t)||Pv(r)||t<0||r<0||r>1?NaN:t===0?e:MJr(r,e,t)}WW.exports=BJr});var JW=s((uOe,XW)=>{"use strict";var kJr=E();function jJr(r,e){return kJr(r)||r<0||r>1?NaN:e}XW.exports=jJr});var ZW=s((oOe,$W)=>{"use strict";var CJr=_(),YW=E();function UJr(r){if(YW(r))return CJr(NaN);return e;function e(t){return YW(t)||t<0||t>1?NaN:r}}$W.exports=UJr});var Fv=s((vOe,KW)=>{"use strict";var VJr=b(),QW=JW(),GJr=ZW();VJr(QW,"factory",GJr);KW.exports=QW});var ez=s((fOe,rz)=>{"use strict";var xJr=_(),HJr=Fv().factory,Mv=E(),DJr=Rv();function WJr(r,e){if(Mv(r)||Mv(e)||e<0)return xJr(NaN);if(e===0)return HJr(r);return t;function t(i){return Mv(i)||i<0||i>1?NaN:DJr(i,r,e)}}rz.exports=WJr});var nz=s((cOe,iz)=>{"use strict";var zJr=b(),tz=zW(),XJr=ez();zJr(tz,"factory",XJr);iz.exports=tz});var sz=s((lOe,az)=>{"use strict";var JJr=nz();function YJr(r,e,t){return JJr(r(),e,t)}az.exports=YJr});var Bv=s((pOe,gz)=>{"use strict";var Te=b(),qs=R(),uz=M(),oz=L(),vz=T(),fz=S(),cz=_(),$Jr=C(),ys=J().factory,lz=E(),ZJr=B(),bs=y(),QJr=TW(),pz=sz();function KJr(){var r,e,t,i,n,a;if(arguments.length===0)e=ys();else if(arguments.length===1){if(r=arguments[0],!oz(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fz(r,"prng")){if(!vz(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else{if(n=arguments[0],a=arguments[1],i=QJr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!oz(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fz(r,"prng")){if(!vz(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else e=ys()}return n===void 0?t=h:t=g,Te(t,"NAME","cosine"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),uz(t,"state",cz(null),$Jr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",cz(null)),Te(t,"PRNG",e)):(qs(t,"seed",u),qs(t,"seedLength",o),uz(t,"state",c,l),qs(t,"stateLength",f),qs(t,"byteLength",v),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=ZJr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return pz(e,n,a)}function h(d,m){return lz(d)||lz(m)||m<=0?NaN:pz(e,d,m)}}gz.exports=KJr});var dz=s((gOe,mz)=>{"use strict";var rYr=Bv(),eYr=rYr();mz.exports=eYr});var yz=s((mOe,qz)=>{"use strict";var tYr=b(),hz=dz(),iYr=Bv();tYr(hz,"factory",iYr);qz.exports=hz});var Nz=s((dOe,Ez)=>{"use strict";var bz=dr().isPrimitive,kv=y(),wz=vr();function nYr(r,e){return!bz(r)||wz(r)?new TypeError(kv("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!bz(e)||wz(e)?new TypeError(kv("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(kv("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}Ez.exports=nYr});var Az=s((hOe,Sz)=>{"use strict";var jv=Bi(),Yi=z();function Oz(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===jv?(u=Yi(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Yi((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=Oz(r,0,Yi(a/f)),!(l>jv/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===jv?(o=Yi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Yi((n+1)/(a+1));;)if(i=r()-v,i=Yi(i/o),i<=a)return i+e}Sz.exports=Oz});var Cv=s((qOe,Mz)=>{"use strict";var Ie=b(),ws=R(),_z=M(),Tz=L(),Iz=T(),Lz=S(),Rz=_(),aYr=C(),Es=J().factory,Pz=E(),$i=hr(),sYr=B(),Nt=y(),uYr=Nz(),Fz=Az();function oYr(){var r,e,t,i,n,a;if(arguments.length===0)e=Es();else if(arguments.length===1){if(r=arguments[0],!Tz(r))throw new TypeError(Nt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Lz(r,"prng")){if(!Iz(r.prng))throw new TypeError(Nt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!$i(e.MIN))throw new TypeError(Nt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!$i(e.MAX))throw new TypeError(Nt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Es(r)}else{if(n=arguments[0],a=arguments[1],i=uYr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Tz(r))throw new TypeError(Nt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Lz(r,"prng")){if(!Iz(r.prng))throw new TypeError(Nt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!$i(e.MIN))throw new TypeError(Nt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!$i(e.MAX))throw new TypeError(Nt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Es(r)}else e=Es()}return n===void 0?t=h:t=g,Ie(t,"NAME","discrete-uniform"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),_z(t,"state",Rz(null),aYr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",Rz(null)),Ie(t,"PRNG",e)):(ws(t,"seed",u),ws(t,"seedLength",o),_z(t,"state",c,l),ws(t,"stateLength",f),ws(t,"byteLength",v),Ie(t,"toJSON",p),Ie(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=sYr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Fz(e,n,a)}function h(d,m){return Pz(d)||Pz(m)||!$i(d)||!$i(m)||d>m?NaN:Fz(e,d,m)}}Mz.exports=oYr});var kz=s((yOe,Bz)=>{"use strict";var vYr=Cv(),fYr=vYr();Bz.exports=fYr});var Uz=s((bOe,Cz)=>{"use strict";var cYr=b(),jz=kz(),lYr=Cv();cYr(jz,"factory",lYr);Cz.exports=jz});var xz=s((wOe,Gz)=>{"use strict";var pYr=W().isPrimitive,gYr=ee().isPrimitive,Vz=y();function mYr(r,e){return gYr(r)?pYr(e)?null:new TypeError(Vz("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Vz("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}Gz.exports=mYr});var Dz=s((EOe,Hz)=>{"use strict";var dYr=P();function hYr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*dYr(i)}Hz.exports=hYr});var Uv=s((NOe,Qz)=>{"use strict";var Le=b(),Ns=R(),Wz=M(),zz=L(),Xz=T(),Jz=S(),Yz=_(),qYr=C(),Os=J().factory,$z=E(),yYr=yv(),bYr=B(),Ss=y(),wYr=xz(),Zz=Dz();function EYr(){var r,e,t,i,n,a;if(arguments.length===0)e=Os();else if(arguments.length===1){if(t=arguments[0],!zz(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Jz(t,"prng")){if(!Xz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Os(t)}else{if(a=arguments[0],r=arguments[1],n=wYr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!zz(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Jz(t,"prng")){if(!Xz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Os(t)}else e=Os()}return a===void 0?i=h:i=g,Le(i,"NAME","erlang"),t&&t.prng?(Le(i,"seed",null),Le(i,"seedLength",null),Wz(i,"state",Yz(null),qYr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",Yz(null)),Le(i,"PRNG",e)):(Ns(i,"seed",u),Ns(i,"seedLength",o),Wz(i,"state",c,l),Ns(i,"stateLength",f),Ns(i,"byteLength",v),Le(i,"toJSON",p),Le(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=bYr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return Zz(e,a,r)}function h(d,m){return $z(d)||$z(m)||!yYr(d)||m<=0?NaN:Zz(e,d,m)}}Qz.exports=EYr});var rX=s((OOe,Kz)=>{"use strict";var NYr=Uv(),OYr=NYr();Kz.exports=OYr});var iX=s((SOe,tX)=>{"use strict";var SYr=b(),eX=rX(),AYr=Uv();SYr(eX,"factory",AYr);tX.exports=eX});var aX=s((AOe,nX)=>{"use strict";var _Yr=P();function TYr(r,e){return-_Yr(1-r())/e}nX.exports=TYr});var Vv=s((_Oe,lX)=>{"use strict";var Re=b(),As=R(),sX=M(),IYr=W().isPrimitive,uX=L(),oX=T(),vX=S(),fX=_(),LYr=C(),_s=J().factory,RYr=E(),PYr=B(),Ts=y(),cX=aX();function FYr(){var r,e,t,i;if(arguments.length===0)t=_s();else if(arguments.length===1&&uX(arguments[0]))if(e=arguments[0],vX(e,"prng")){if(!oX(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=_s(e);else{if(r=arguments[0],!IYr(r))throw new TypeError(Ts("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!uX(e))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(vX(e,"prng")){if(!oX(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=_s(e)}else t=_s()}return r===void 0?i=p:i=l,Re(i,"NAME","exponential"),e&&e.prng?(Re(i,"seed",null),Re(i,"seedLength",null),sX(i,"state",fX(null),LYr),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",fX(null)),Re(i,"PRNG",t)):(As(i,"seed",n),As(i,"seedLength",a),sX(i,"state",f,v),As(i,"stateLength",u),As(i,"byteLength",o),Re(i,"toJSON",c),Re(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=PYr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return cX(t,r)}function p(g){return RYr(g)||g<=0?NaN:cX(t,g)}}lX.exports=FYr});var gX=s((TOe,pX)=>{"use strict";var MYr=Vv(),BYr=MYr();pX.exports=BYr});var hX=s((IOe,dX)=>{"use strict";var kYr=b(),mX=gX(),jYr=Vv();kYr(mX,"factory",jYr);dX.exports=mX});var wX=s((LOe,bX)=>{"use strict";var qX=W().isPrimitive,yX=y();function CYr(r,e){return qX(r)?qX(e)?null:new TypeError(yX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(yX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}bX.exports=CYr});var NX=s((ROe,EX)=>{"use strict";function UYr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}EX.exports=UYr});var Gv=s((POe,RX)=>{"use strict";var Ot=b(),Is=R(),OX=M(),SX=L(),AX=T(),_X=S(),TX=_(),VYr=C(),Zi=aa().factory,IX=E(),GYr=B(),Ls=y(),xYr=wX(),LX=NX();function HYr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Zi();else if(arguments.length===1){if(e=arguments[0],!SX(e))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_X(e,"prng")){if(!AX(e.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Zi({prng:e.prng})}else r=Zi(e)}else{if(a=arguments[0],u=arguments[1],n=xYr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!SX(e))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_X(e,"prng")){if(!AX(e.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Zi({prng:e.prng})}else r=Zi(e)}else r=Zi()}return a===void 0?i=d:i=h,t=r.PRNG,Ot(i,"NAME","f"),e&&e.prng?(Ot(i,"seed",null),Ot(i,"seedLength",null),OX(i,"state",TX(null),VYr),Ot(i,"stateLength",null),Ot(i,"byteLength",null),Ot(i,"toJSON",TX(null))):(Is(i,"seed",o),Is(i,"seedLength",f),OX(i,"state",l,p),Is(i,"stateLength",v),Is(i,"byteLength",c),Ot(i,"toJSON",g)),Ot(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=GYr(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return LX(r,a,u)}function d(m,q){return IX(m)||IX(q)||m<=0||q<=0?NaN:LX(r,m,q)}}RX.exports=HYr});var FX=s((FOe,PX)=>{"use strict";var DYr=Gv(),WYr=DYr();PX.exports=WYr});var kX=s((MOe,BX)=>{"use strict";var zYr=b(),MX=FX(),XYr=Gv();zYr(MX,"factory",XYr);BX.exports=MX});var UX=s((BOe,CX)=>{"use strict";var jX=W().isPrimitive,JYr=j().isPrimitive,xv=vr(),Hv=y();function YYr(r,e,t){return!jX(r)||xv(r)?new TypeError(Hv("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!jX(e)||xv(e)?new TypeError(Hv("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!JYr(t)||xv(t)?new TypeError(Hv("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}CX.exports=YYr});var GX=s((kOe,VX)=>{"use strict";var $Yr=H(),ZYr=P();function QYr(r,e,t,i){return i+t*$Yr(-ZYr(r()),-1/e)}VX.exports=QYr});var Wv=s((jOe,JX)=>{"use strict";var Pe=b(),Rs=R(),xX=M(),HX=L(),DX=T(),WX=S(),zX=_(),KYr=C(),Ps=J().factory,Dv=E(),r$r=B(),Fs=y(),e$r=UX(),XX=GX();function t$r(){var r,e,t,i,n,a,u;if(arguments.length===0)t=Ps();else if(arguments.length===1){if(e=arguments[0],!HX(e))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(WX(e,"prng")){if(!DX(e.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ps(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=e$r(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!HX(e))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(WX(e,"prng")){if(!DX(e.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ps(e)}else t=Ps()}return r===void 0?i=d:i=h,Pe(i,"NAME","frechet"),e&&e.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),xX(i,"state",zX(null),KYr),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",zX(null)),Pe(i,"PRNG",t)):(Rs(i,"seed",o),Rs(i,"seedLength",f),xX(i,"state",l,p),Rs(i,"stateLength",v),Rs(i,"byteLength",c),Pe(i,"toJSON",g),Pe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=r$r(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return XX(t,r,a,u)}function d(m,q,N){return Dv(m)||Dv(q)||Dv(N)||m<=0||q<=0?NaN:XX(t,m,q,N)}}JX.exports=t$r});var $X=s((COe,YX)=>{"use strict";var i$r=Wv(),n$r=i$r();YX.exports=n$r});var KX=s((UOe,QX)=>{"use strict";var a$r=b(),ZX=$X(),s$r=Wv();a$r(ZX,"factory",s$r);QX.exports=ZX});var tJ=s((VOe,eJ)=>{"use strict";var u$r=z(),rJ=P();function o$r(r,e){var t=r();return t===0&&(t=r()),u$r(rJ(t)/rJ(1-e))}eJ.exports=o$r});var zv=s((GOe,vJ)=>{"use strict";var Fe=b(),Ms=R(),iJ=M(),nJ=L(),v$r=bn().isPrimitive,aJ=T(),sJ=S(),uJ=_(),f$r=C(),Bs=J().factory,c$r=E(),l$r=B(),ks=y(),oJ=tJ();function p$r(){var r,e,t,i;if(arguments.length===0)e=Bs();else if(arguments.length===1&&nJ(arguments[0]))if(r=arguments[0],sJ(r,"prng")){if(!aJ(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r);else{if(i=arguments[0],!v$r(i))throw new TypeError(ks("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!nJ(r))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sJ(r,"prng")){if(!aJ(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r)}else e=Bs()}return i===void 0?t=p:t=l,Fe(t,"NAME","geometric"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),iJ(t,"state",uJ(null),f$r),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",uJ(null)),Fe(t,"PRNG",e)):(Ms(t,"seed",n),Ms(t,"seedLength",a),iJ(t,"state",f,v),Ms(t,"stateLength",u),Ms(t,"byteLength",o),Fe(t,"toJSON",c),Fe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=l$r(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return oJ(e,i)}function p(g){return c$r(g)||g<0||g>1?NaN:oJ(e,g)}}vJ.exports=p$r});var cJ=s((xOe,fJ)=>{"use strict";var g$r=zv(),m$r=g$r();fJ.exports=m$r});var gJ=s((HOe,pJ)=>{"use strict";var d$r=b(),lJ=cJ(),h$r=zv();d$r(lJ,"factory",h$r);pJ.exports=lJ});var hJ=s((DOe,dJ)=>{"use strict";var q$r=j().isPrimitive,y$r=W().isPrimitive,mJ=y(),b$r=vr();function w$r(r,e){return!q$r(r)||b$r(r)?new TypeError(mJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):y$r(e)?null:new TypeError(mJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}dJ.exports=w$r});var bJ=s((WOe,yJ)=>{"use strict";var qJ=P();function E$r(r,e,t){return e-t*qJ(-qJ(r()))}yJ.exports=E$r});var Xv=s((zOe,TJ)=>{"use strict";var Me=b(),js=R(),wJ=M(),EJ=L(),NJ=T(),OJ=S(),SJ=_(),N$r=C(),Cs=J().factory,AJ=E(),O$r=B(),Us=y(),S$r=hJ(),_J=bJ();function A$r(){var r,e,t,i,n,a;if(arguments.length===0)t=Cs();else if(arguments.length===1){if(e=arguments[0],!EJ(e))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",e));if(OJ(e,"prng")){if(!NJ(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Cs(e)}else{if(a=arguments[0],r=arguments[1],n=S$r(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!EJ(e))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",e));if(OJ(e,"prng")){if(!NJ(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Cs(e)}else t=Cs()}return a===void 0?i=h:i=g,Me(i,"NAME","gumbel"),e&&e.prng?(Me(i,"seed",null),Me(i,"seedLength",null),wJ(i,"state",SJ(null),N$r),Me(i,"stateLength",null),Me(i,"byteLength",null),Me(i,"toJSON",SJ(null)),Me(i,"PRNG",t)):(js(i,"seed",u),js(i,"seedLength",o),wJ(i,"state",c,l),js(i,"stateLength",f),js(i,"byteLength",v),Me(i,"toJSON",p),Me(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=O$r(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return _J(t,a,r)}function h(d,m){return AJ(d)||AJ(m)||m<=0?NaN:_J(t,d,m)}}TJ.exports=A$r});var LJ=s((XOe,IJ)=>{"use strict";var _$r=Xv(),T$r=_$r();IJ.exports=T$r});var FJ=s((JOe,PJ)=>{"use strict";var I$r=b(),RJ=LJ(),L$r=Xv();I$r(RJ,"factory",L$r);PJ.exports=RJ});var BJ=s((YOe,MJ)=>{"use strict";var Jv=Fr().isPrimitive,sa=y();function R$r(r,e,t){return Jv(r)?Jv(e)?Jv(t)?t>r?new RangeError(sa("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(sa("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(sa("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(sa("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(sa("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}MJ.exports=R$r});var kJ=s(($Oe,P$r)=>{P$r.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var CJ=s((ZOe,jJ)=>{"use strict";var F$r=E(),M$r=hr(),B$r=ji(),k$r=I(),j$r=kJ(),C$r=170;function U$r(r){return F$r(r)?NaN:M$r(r)?r<0?NaN:r<=C$r?j$r[r]:k$r:B$r(r+1)}jJ.exports=U$r});var VJ=s((QOe,UJ)=>{"use strict";var V$r=CJ();UJ.exports=V$r});var xJ=s((KOe,GJ)=>{"use strict";var St=VJ();function G$r(r,e,t,i){var n,a,u;for(i<t?(n=St(t)*St(e+t-i)/(St(e+t)*St(t-i)),u=0):(n=St(e)*St(i)/(St(i-t)*St(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}GJ.exports=G$r});var DJ=s((rSe,HJ)=>{"use strict";var Vs=xJ();function x$r(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=Vs(r,n,a,u),t-o):(a=t,n=e-t,o=Vs(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=Vs(r,n,a,u),o):(n=e-t,a=t,o=Vs(r,n,a,u),i-o))}HJ.exports=x$r});var $v=s((eSe,QJ)=>{"use strict";var Be=b(),Gs=R(),WJ=M(),zJ=L(),XJ=T(),JJ=S(),YJ=_(),H$r=C(),xs=J().factory,Yv=U2(),$J=I(),D$r=B(),Hs=y(),W$r=BJ(),ZJ=DJ();function z$r(){var r,e,t,i,n,a,u;if(arguments.length===0)e=xs();else if(arguments.length===1){if(r=arguments[0],!zJ(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JJ(r,"prng")){if(!XJ(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=W$r(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!zJ(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JJ(r,"prng")){if(!XJ(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else e=xs()}return n===void 0?t=d:t=h,Be(t,"NAME","hypergeometric"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),WJ(t,"state",YJ(null),H$r),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",YJ(null)),Be(t,"PRNG",e)):(Gs(t,"seed",o),Gs(t,"seedLength",f),WJ(t,"state",l,p),Gs(t,"stateLength",v),Gs(t,"byteLength",c),Be(t,"toJSON",g),Be(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=D$r(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return ZJ(e,n,a,u)}function d(m,q,N){return m===$J||q===$J||!Yv(m)||!Yv(q)||!Yv(N)||N>m?NaN:ZJ(e,m,q,N)}}QJ.exports=z$r});var rY=s((tSe,KJ)=>{"use strict";var X$r=$v(),J$r=X$r();KJ.exports=J$r});var iY=s((iSe,tY)=>{"use strict";var Y$r=b(),eY=rY(),$$r=$v();Y$r(eY,"factory",$$r);tY.exports=eY});var uY=s((nSe,sY)=>{"use strict";var nY=W().isPrimitive,aY=y();function Z$r(r,e){return nY(r)?nY(e)?null:new TypeError(aY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(aY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}sY.exports=Z$r});var Zv=s((aSe,gY)=>{"use strict";var At=b(),Ds=R(),oY=M(),vY=L(),fY=T(),cY=S(),lY=_(),Q$r=C(),Qi=Wi().factory,pY=E(),K$r=B(),Ws=y(),rZr=uY();function eZr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Qi();else if(arguments.length===1){if(i=arguments[0],!vY(i))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",i));if(cY(i,"prng")){if(!fY(i.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Qi({prng:i.prng})}else r=Qi(i)}else{if(e=arguments[0],t=arguments[1],u=rZr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!vY(i))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",i));if(cY(i,"prng")){if(!fY(i.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Qi(e,t,{prng:i.prng})}else r=Qi(e,t,i)}else r=Qi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,At(a,"NAME","invgamma"),i&&i.prng?(At(a,"seed",null),At(a,"seedLength",null),oY(a,"state",lY(null),Q$r),At(a,"stateLength",null),At(a,"byteLength",null),At(a,"toJSON",lY(null))):(Ds(a,"seed",o),Ds(a,"seedLength",f),oY(a,"state",l,p),Ds(a,"stateLength",v),Ds(a,"byteLength",c),At(a,"toJSON",g)),At(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=K$r(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,q){return pY(m)||pY(q)||m<=0||q<=0?NaN:1/r(m,q)}}gY.exports=eZr});var dY=s((sSe,mY)=>{"use strict";var tZr=Zv(),iZr=tZr();mY.exports=iZr});var yY=s((uSe,qY)=>{"use strict";var nZr=b(),hY=dY(),aZr=Zv();nZr(hY,"factory",aZr);qY.exports=hY});var NY=s((oSe,EY)=>{"use strict";var bY=W().isPrimitive,wY=y();function sZr(r,e){return bY(r)?bY(e)?null:new TypeError(wY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}EY.exports=sZr});var AY=s((vSe,SY)=>{"use strict";var OY=H();function uZr(r,e,t){var i=r();return OY(1-OY(1-i,1/t),1/e)}SY.exports=uZr});var Qv=s((fSe,MY)=>{"use strict";var ke=b(),zs=R(),_Y=M(),TY=L(),IY=T(),LY=S(),RY=_(),oZr=C(),Xs=J().factory,PY=E(),vZr=B(),Js=y(),fZr=NY(),FY=AY();function cZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Xs();else if(arguments.length===1){if(r=arguments[0],!TY(r))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LY(r,"prng")){if(!IY(r.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Xs(r)}else{if(n=arguments[0],a=arguments[1],i=fZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!TY(r))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LY(r,"prng")){if(!IY(r.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Xs(r)}else e=Xs()}return n===void 0?t=h:t=g,ke(t,"NAME","kumaraswamy"),r&&r.prng?(ke(t,"seed",null),ke(t,"seedLength",null),_Y(t,"state",RY(null),oZr),ke(t,"stateLength",null),ke(t,"byteLength",null),ke(t,"toJSON",RY(null)),ke(t,"PRNG",e)):(zs(t,"seed",u),zs(t,"seedLength",o),_Y(t,"state",c,l),zs(t,"stateLength",f),zs(t,"byteLength",v),ke(t,"toJSON",p),ke(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=vZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return FY(e,n,a)}function h(d,m){return PY(d)||PY(m)||d<=0||m<=0?NaN:FY(e,d,m)}}MY.exports=cZr});var kY=s((cSe,BY)=>{"use strict";var lZr=Qv(),pZr=lZr();BY.exports=pZr});var UY=s((lSe,CY)=>{"use strict";var gZr=b(),jY=kY(),mZr=Qv();gZr(jY,"factory",mZr);CY.exports=jY});var xY=s((pSe,GY)=>{"use strict";var dZr=j().isPrimitive,hZr=W().isPrimitive,VY=y(),qZr=vr();function yZr(r,e){return!dZr(r)||qZr(r)?new TypeError(VY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):hZr(e)?null:new TypeError(VY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}GY.exports=yZr});var DY=s((gSe,HY)=>{"use strict";var bZr=ns(),wZr=Y(),EZr=P();function NZr(r,e,t){var i=r()-.5;return e-t*bZr(i)*EZr(1-2*wZr(i))}HY.exports=NZr});var Kv=s((mSe,QY)=>{"use strict";var je=b(),Ys=R(),WY=M(),zY=L(),XY=T(),JY=S(),YY=_(),OZr=C(),$s=J().factory,$Y=E(),SZr=B(),Zs=y(),AZr=xY(),ZY=DY();function _Zr(){var r,e,t,i,n,a;if(arguments.length===0)e=$s();else if(arguments.length===1){if(r=arguments[0],!zY(r))throw new TypeError(Zs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JY(r,"prng")){if(!XY(r.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$s(r)}else{if(n=arguments[0],a=arguments[1],i=AZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!zY(r))throw new TypeError(Zs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JY(r,"prng")){if(!XY(r.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$s(r)}else e=$s()}return n===void 0?t=h:t=g,je(t,"NAME","laplace"),r&&r.prng?(je(t,"seed",null),je(t,"seedLength",null),WY(t,"state",YY(null),OZr),je(t,"stateLength",null),je(t,"byteLength",null),je(t,"toJSON",YY(null)),je(t,"PRNG",e)):(Ys(t,"seed",u),Ys(t,"seedLength",o),WY(t,"state",c,l),Ys(t,"stateLength",f),Ys(t,"byteLength",v),je(t,"toJSON",p),je(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=SZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return ZY(e,n,a)}function h(d,m){return $Y(d)||$Y(m)||m<=0?NaN:ZY(e,d,m)}}QY.exports=_Zr});var r$=s((dSe,KY)=>{"use strict";var TZr=Kv(),IZr=TZr();KY.exports=IZr});var i$=s((hSe,t$)=>{"use strict";var LZr=b(),e$=r$(),RZr=Kv();LZr(e$,"factory",RZr);t$.exports=e$});var s$=s((qSe,a$)=>{"use strict";var PZr=j().isPrimitive,FZr=W().isPrimitive,n$=y(),MZr=vr();function BZr(r,e){return!PZr(r)||MZr(r)?new TypeError(n$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):FZr(e)?null:new TypeError(n$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}a$.exports=BZr});var o$=s((ySe,u$)=>{"use strict";function kZr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}u$.exports=kZr});var f$=s((bSe,v$)=>{"use strict";function jZr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}v$.exports=jZr});var l$=s((wSe,c$)=>{"use strict";function CZr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}c$.exports=CZr});var g$=s((ESe,p$)=>{"use strict";function UZr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}p$.exports=UZr});var d$=s((NSe,m$)=>{"use strict";function VZr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}m$.exports=VZr});var b$=s((OSe,y$)=>{"use strict";var GZr=E(),h$=V(),q$=P(),xZr=I(),HZr=U(),DZr=o$(),WZr=f$(),zZr=l$(),XZr=g$(),JZr=d$(),YZr=.08913147449493408,$Zr=2.249481201171875,ZZr=.807220458984375,QZr=.9399557113647461,KZr=.9836282730102539;function rQr(r){var e,t,i,n,a,u;return GZr(r)?NaN:r===1?xZr:r===-1?HZr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=DZr(t),e*(a*YZr+a*u)):n>=.25?(a=h$(-2*q$(n)),n-=.25,u=WZr(n),e*(a/($Zr+u))):(n=h$(-q$(n)),n<3?(i=n-1.125,u=zZr(i),e*(ZZr*n+u*n)):n<6?(i=n-3,u=XZr(i),e*(QZr*n+u*n)):(i=n-6,u=JZr(i),e*(KZr*n+u*n))))}y$.exports=rQr});var rf=s((SSe,w$)=>{"use strict";var eQr=b$();w$.exports=eQr});var N$=s((ASe,E$)=>{"use strict";var tQr=rf(),ef=E(),iQr=V();function nQr(r,e,t){var i,n;return ef(e)||ef(t)||ef(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*iQr(2),i+n*tQr(2*r-1))}E$.exports=nQr});var S$=s((_Se,O$)=>{"use strict";var aQr=_(),sQr=Fv().factory,uQr=rf(),tf=E(),oQr=V();function vQr(r,e){var t,i;if(tf(r)||tf(e)||e<0)return aQr(NaN);return e===0&&sQr(r),t=r,i=e*oQr(2),n;function n(a){return tf(a)||a<0||a>1?NaN:t+i*uQr(2*a-1)}}O$.exports=vQr});var nf=s((TSe,_$)=>{"use strict";var fQr=b(),A$=N$(),cQr=S$();fQr(A$,"factory",cQr);_$.exports=A$});var I$=s((ISe,T$)=>{"use strict";var lQr=nf();function pQr(r,e,t){var i=lQr(1-r()/2,0,1);return e+t/(i*i)}T$.exports=pQr});var af=s((LSe,j$)=>{"use strict";var Ce=b(),Qs=R(),L$=M(),R$=L(),P$=T(),F$=S(),M$=_(),gQr=C(),Ks=J().factory,B$=E(),mQr=B(),ru=y(),dQr=s$(),k$=I$();function hQr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ks();else if(arguments.length===1){if(r=arguments[0],!R$(r))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F$(r,"prng")){if(!P$(r.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ks(r)}else{if(n=arguments[0],a=arguments[1],i=dQr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!R$(r))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F$(r,"prng")){if(!P$(r.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ks(r)}else e=Ks()}return n===void 0?t=h:t=g,Ce(t,"NAME","levy"),r&&r.prng?(Ce(t,"seed",null),Ce(t,"seedLength",null),L$(t,"state",M$(null),gQr),Ce(t,"stateLength",null),Ce(t,"byteLength",null),Ce(t,"toJSON",M$(null)),Ce(t,"PRNG",e)):(Qs(t,"seed",u),Qs(t,"seedLength",o),L$(t,"state",c,l),Qs(t,"stateLength",f),Qs(t,"byteLength",v),Ce(t,"toJSON",p),Ce(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=mQr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return k$(e,n,a)}function h(d,m){return B$(d)||B$(m)||m<=0?NaN:k$(e,d,m)}}j$.exports=hQr});var U$=s((RSe,C$)=>{"use strict";var qQr=af(),yQr=qQr();C$.exports=yQr});var x$=s((PSe,G$)=>{"use strict";var bQr=b(),V$=U$(),wQr=af();bQr(V$,"factory",wQr);G$.exports=V$});var W$=s((FSe,D$)=>{"use strict";var EQr=j().isPrimitive,NQr=W().isPrimitive,OQr=vr(),H$=y();function SQr(r,e){return!EQr(r)||OQr(r)?new TypeError(H$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):NQr(e)?null:new TypeError(H$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}D$.exports=SQr});var X$=s((MSe,z$)=>{"use strict";var AQr=P();function _Qr(r,e,t){var i=r();return e+t*AQr(i/(1-i))}z$.exports=_Qr});var sf=s((BSe,eZ)=>{"use strict";var Ue=b(),eu=R(),J$=M(),Y$=L(),$$=T(),Z$=S(),Q$=_(),TQr=C(),tu=J().factory,K$=E(),IQr=B(),iu=y(),LQr=W$(),rZ=X$();function RQr(){var r,e,t,i,n,a;if(arguments.length===0)e=tu();else if(arguments.length===1){if(r=arguments[0],!Y$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Z$(r,"prng")){if(!$$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else{if(n=arguments[0],a=arguments[1],i=LQr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Y$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Z$(r,"prng")){if(!$$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else e=tu()}return n===void 0?t=h:t=g,Ue(t,"NAME","logistic"),r&&r.prng?(Ue(t,"seed",null),Ue(t,"seedLength",null),J$(t,"state",Q$(null),TQr),Ue(t,"stateLength",null),Ue(t,"byteLength",null),Ue(t,"toJSON",Q$(null)),Ue(t,"PRNG",e)):(eu(t,"seed",u),eu(t,"seedLength",o),J$(t,"state",c,l),eu(t,"stateLength",f),eu(t,"byteLength",v),Ue(t,"toJSON",p),Ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=IQr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return rZ(e,n,a)}function h(d,m){return K$(d)||K$(m)||m<=0?NaN:rZ(e,d,m)}}eZ.exports=RQr});var iZ=s((kSe,tZ)=>{"use strict";var PQr=sf(),FQr=PQr();tZ.exports=FQr});var sZ=s((jSe,aZ)=>{"use strict";var MQr=b(),nZ=iZ(),BQr=sf();MQr(nZ,"factory",BQr);aZ.exports=nZ});var vZ=s((CSe,oZ)=>{"use strict";var kQr=j().isPrimitive,jQr=W().isPrimitive,uZ=y(),CQr=vr();function UQr(r,e){return!kQr(r)||CQr(r)?new TypeError(uZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):jQr(e)?null:new TypeError(uZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}oZ.exports=UQr});var cZ=s((USe,fZ)=>{"use strict";var VQr=sr();function GQr(r,e,t){return VQr(e+t*r())}fZ.exports=GQr});var uf=s((VSe,yZ)=>{"use strict";var _t=b(),nu=R(),lZ=M(),pZ=L(),gZ=T(),mZ=S(),dZ=_(),xQr=C(),Ki=qt().factory,hZ=E(),HQr=B(),au=y(),DQr=vZ(),qZ=cZ();function WQr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ki();else if(arguments.length===1){if(t=arguments[0],!pZ(t))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mZ(t,"prng")){if(!gZ(t.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ki({prng:t.prng})}else e=Ki(t)}else{if(u=arguments[0],r=arguments[1],a=DQr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!pZ(t))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mZ(t,"prng")){if(!gZ(t.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ki({prng:t.prng})}else e=Ki(t)}else e=Ki()}return u===void 0?n=d:n=h,i=e.PRNG,_t(n,"NAME","lognormal"),t&&t.prng?(_t(n,"seed",null),_t(n,"seedLength",null),lZ(n,"state",dZ(null),xQr),_t(n,"stateLength",null),_t(n,"byteLength",null),_t(n,"toJSON",dZ(null))):(nu(n,"seed",o),nu(n,"seedLength",f),lZ(n,"state",l,p),nu(n,"stateLength",v),nu(n,"byteLength",c),_t(n,"toJSON",g)),_t(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=HQr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return qZ(e,u,r)}function d(m,q){return hZ(m)||hZ(q)||q<=0?NaN:qZ(e,m,q)}}yZ.exports=WQr});var wZ=s((GSe,bZ)=>{"use strict";var zQr=uf(),XQr=zQr();bZ.exports=XQr});var OZ=s((xSe,NZ)=>{"use strict";var JQr=b(),EZ=wZ(),YQr=uf();JQr(EZ,"factory",YQr);NZ.exports=EZ});var of=s((HSe,SZ)=>{"use strict";var $Qr=vi(),ZQr=z(),QQr=$Qr-1;function KQr(){var r=ZQr(1+QQr*Math.random());return r|0}SZ.exports=KQr});var cf=s((DSe,LZ)=>{"use strict";var Ve=b(),Tt=R(),AZ=M(),vf=S(),rKr=L(),eKr=gr().isPrimitive,tKr=Dr(),iKr=ee().isPrimitive,_Z=wa(),Jr=y(),su=vi(),Sr=$e(),rn=pt(),nKr=B(),TZ=of(),ff=su-1|0,aKr=su-1|0,sKr=16807,uu=1,ou=2,It=2,Ar=4,ua=5;function IZ(r,e){var t;return e?t="option":t="argument",r.length<ua+1?new RangeError(Jr("invalid %s. State array has insufficient length.",t)):r[0]!==uu?new RangeError(Jr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,uu,r[0])):r[1]!==ou?new RangeError(Jr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ou,r[1])):r[It]!==1?new RangeError(Jr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[It])):r[Ar]!==r.length-ua?new RangeError(Jr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ua,r[Ar])):null}function uKr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!rKr(r))throw new TypeError(Jr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vf(r,"copy")&&(i.copy=r.copy,!eKr(r.copy)))throw new TypeError(Jr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(vf(r,"state")){if(t=r.state,i.state=!0,!_Z(t))throw new TypeError(Jr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=IZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Sr(t.length),rn(t.length,t,1,e,1)),t=new Sr(e.buffer,e.byteOffset+(It+1)*e.BYTES_PER_ELEMENT,1),n=new Sr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(vf(r,"seed"))if(n=r.seed,i.seed=!0,iKr(n)){if(n>aKr)throw new RangeError(Jr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(tKr(n)&&n.length>0)a=n.length,e=new Sr(ua+a),e[0]=uu,e[1]=ou,e[It]=1,e[Ar]=a,rn.ndarray(a,n,1,0,e,1,Ar+1),t=new Sr(e.buffer,e.byteOffset+(It+1)*e.BYTES_PER_ELEMENT,1),n=new Sr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Jr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=TZ()|0}else n=TZ()|0;return t===void 0&&(e=new Sr(ua+1),e[0]=uu,e[1]=ou,e[It]=1,e[Ar]=1,e[Ar+1]=n,t=new Sr(e.buffer,e.byteOffset+(It+1)*e.BYTES_PER_ELEMENT,1),n=new Sr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ve(h,"NAME","minstd"),Tt(h,"seed",o),Tt(h,"seedLength",f),AZ(h,"state",l,p),Tt(h,"stateLength",v),Tt(h,"byteLength",c),Ve(h,"toJSON",g),Ve(h,"MIN",1),Ve(h,"MAX",su-1),Ve(h,"normalized",d),Ve(d,"NAME",h.NAME),Tt(d,"seed",o),Tt(d,"seedLength",f),AZ(d,"state",l,p),Tt(d,"stateLength",v),Tt(d,"byteLength",c),Ve(d,"toJSON",g),Ve(d,"MIN",(h.MIN-1)/ff),Ve(d,"MAX",(h.MAX-1)/ff),h;function o(){var m=e[Ar];return rn(m,n,1,new Sr(m),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return rn(m,e,1,new Sr(m),1)}function p(m){var q;if(!_Z(m))throw new TypeError(Jr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(q=IZ(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?rn(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Sr(m.length)),rn(m.length,m,1,e,1)),t=new Sr(e.buffer,e.byteOffset+(It+1)*e.BYTES_PER_ELEMENT,1),n=new Sr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=nKr(e),m.params=[],m}function h(){var m=t[0]|0;return m=sKr*m%su|0,t[0]=m,m|0}function d(){return(h()-1)/ff}}LZ.exports=uKr});var PZ=s((WSe,RZ)=>{"use strict";var oKr=cf(),vKr=of(),fKr=oKr({seed:vKr()});RZ.exports=fKr});var BZ=s((zSe,MZ)=>{"use strict";var cKr=b(),FZ=PZ(),lKr=cf();cKr(FZ,"factory",lKr);MZ.exports=FZ});var jZ=s((XSe,kZ)=>{"use strict";var pKr=E(),gKr=8;function mKr(r,e,t){var i,n;for(n=0;n<gKr;n++)if(i=r(),pKr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}kZ.exports=mKr});var lf=s((JSe,CZ)=>{"use strict";var dKr=vi(),hKr=z(),qKr=dKr-1;function yKr(){var r=hKr(1+qKr*Math.random());return r|0}CZ.exports=yKr});var mf=s((YSe,DZ)=>{"use strict";var Ge=b(),Lt=R(),UZ=M(),pf=S(),bKr=L(),wKr=gr().isPrimitive,EKr=Dr(),NKr=ee().isPrimitive,VZ=wa(),en=pt(),OKr=z(),_r=$e(),oa=vi(),SKr=B(),Hr=y(),GZ=jZ(),xZ=lf(),gf=oa-1|0,AKr=oa-1|0,_Kr=16807,Ir=32,cu=1,lu=3,Rt=2,tn=Ir+3,Tr=Ir+6,va=Ir+7,vu=tn+1,fu=tn+2;function HZ(r,e){var t;return e?t="option":t="argument",r.length<va+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==cu?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,cu,r[0])):r[1]!==lu?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,lu,r[1])):r[Rt]!==Ir?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Ir,r[Rt])):r[tn]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[tn])):r[Tr]!==r.length-va?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-va,r[Tr])):null}function TKr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!bKr(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pf(r,"copy")&&(i.copy=r.copy,!wKr(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(pf(r,"state")){if(t=r.state,i.state=!0,!VZ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=HZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new _r(t.length),en(t.length,t,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Rt+1)*e.BYTES_PER_ELEMENT,Ir),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,t[Tr])}if(n===void 0)if(pf(r,"seed"))if(n=r.seed,i.seed=!0,NKr(n)){if(n>AKr)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(EKr(n)&&n.length>0)a=n.length,e=new _r(va+a),e[0]=cu,e[1]=lu,e[Rt]=Ir,e[tn]=2,e[fu]=n[0],e[Tr]=a,en.ndarray(a,n,1,0,e,1,Tr+1),t=new _r(e.buffer,e.byteOffset+(Rt+1)*e.BYTES_PER_ELEMENT,Ir),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,a),t=GZ(h,t,Ir),e[vu]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=xZ()|0}else n=xZ()|0;return t===void 0&&(e=new _r(va+1),e[0]=cu,e[1]=lu,e[Rt]=Ir,e[tn]=2,e[fu]=n,e[Tr]=1,e[Tr+1]=n,t=new _r(e.buffer,e.byteOffset+(Rt+1)*e.BYTES_PER_ELEMENT,Ir),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,1),t=GZ(h,t,Ir),e[vu]=t[0]),Ge(d,"NAME","minstd-shuffle"),Lt(d,"seed",o),Lt(d,"seedLength",f),UZ(d,"state",l,p),Lt(d,"stateLength",v),Lt(d,"byteLength",c),Ge(d,"toJSON",g),Ge(d,"MIN",1),Ge(d,"MAX",oa-1),Ge(d,"normalized",m),Ge(m,"NAME",d.NAME),Lt(m,"seed",o),Lt(m,"seedLength",f),UZ(m,"state",l,p),Lt(m,"stateLength",v),Lt(m,"byteLength",c),Ge(m,"toJSON",g),Ge(m,"MIN",(d.MIN-1)/gf),Ge(m,"MAX",(d.MAX-1)/gf),d;function o(){var q=e[Tr];return en(q,n,1,new _r(q),1)}function f(){return e[Tr]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return en(q,e,1,new _r(q),1)}function p(q){var N;if(!VZ(q))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=HZ(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?en(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new _r(q.length)),en(q.length,q,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Rt+1)*e.BYTES_PER_ELEMENT,Ir),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,e[Tr])}function g(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=SKr(e),q.params=[],q}function h(){var q=e[fu]|0;return q=_Kr*q%oa|0,e[fu]=q,q|0}function d(){var q,N;return q=e[vu],N=OKr(Ir*(q/oa)),q=t[N],e[vu]=q,t[N]=h(),q}function m(){return(d()-1)/gf}}DZ.exports=TKr});var zZ=s(($Se,WZ)=>{"use strict";var IKr=mf(),LKr=lf(),RKr=IKr({seed:LKr()});WZ.exports=RKr});var YZ=s((ZSe,JZ)=>{"use strict";var PKr=b(),XZ=zZ(),FKr=mf();PKr(XZ,"factory",FKr);JZ.exports=XZ});var ZZ=s((QSe,$Z)=>{"use strict";var MKr=sr();function BKr(r,e){for(var t=r(),i=1;t>MKr(-e);)i+=1,t*=r();return i-1}$Z.exports=BKr});var KZ=s((KSe,QZ)=>{"use strict";var kKr=z();function jKr(r){return kKr(r)===r&&r<0}QZ.exports=jKr});var eQ=s((rAe,rQ)=>{"use strict";var CKr=KZ();rQ.exports=CKr});var iQ=s((eAe,tQ)=>{"use strict";var UKr=eQ(),VKr=Wn();function GKr(r){return UKr(r)?NaN:VKr(r+1)}tQ.exports=GKr});var aQ=s((tAe,nQ)=>{"use strict";var xKr=iQ();nQ.exports=xKr});var vQ=s((iAe,oQ)=>{"use strict";var HKr=aQ(),sQ=z(),DKr=ns(),WKr=V(),uQ=Y(),pu=P(),zKr=f3(),XKr=1/12,JKr=1/360;function YKr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=WKr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-uQ(c))+f,c+=e+.445,sQ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=DKr(c)*.5-c,l=u*r()),a=.5-uQ(c),(a>=.013||a>=l)&&(v=sQ((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*pu(e/v),c+=-e-zKr+v,c-=(XKr-JKr/(v*v))/v,v>=10&&c>=pu(l*t)||(c=v*pu(e)-e-HKr(v),v>=0&&v<=9&&c>=pu(l))))return v}}oQ.exports=YKr});var cQ=s((nAe,fQ)=>{"use strict";var $Kr=ZZ(),ZKr=vQ();function QKr(r,e){return e<30?$Kr(r,e):ZKr(r,e)}fQ.exports=QKr});var df=s((aAe,qQ)=>{"use strict";var xe=b(),gu=R(),lQ=M(),KKr=W().isPrimitive,pQ=L(),gQ=T(),mQ=S(),dQ=_(),rre=C(),mu=J().factory,ere=E(),tre=B(),du=y(),hQ=cQ();function ire(){var r,e,t,i;if(arguments.length===0)t=mu();else if(arguments.length===1&&pQ(arguments[0]))if(e=arguments[0],mQ(e,"prng")){if(!gQ(e.prng))throw new TypeError(du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=mu(e);else{if(r=arguments[0],!KKr(r))throw new TypeError(du("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!pQ(e))throw new TypeError(du("invalid argument. Options argument must be an object. Value: `%s`.",e));if(mQ(e,"prng")){if(!gQ(e.prng))throw new TypeError(du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=mu(e)}else t=mu()}return r===void 0?i=p:i=l,xe(i,"NAME","poisson"),e&&e.prng?(xe(i,"seed",null),xe(i,"seedLength",null),lQ(i,"state",dQ(null),rre),xe(i,"stateLength",null),xe(i,"byteLength",null),xe(i,"toJSON",dQ(null)),xe(i,"PRNG",t)):(gu(i,"seed",n),gu(i,"seedLength",a),lQ(i,"state",f,v),gu(i,"stateLength",u),gu(i,"byteLength",o),xe(i,"toJSON",c),xe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=tre(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return hQ(t,r)}function p(g){return ere(g)||g<=0?NaN:hQ(t,g)}}qQ.exports=ire});var bQ=s((sAe,yQ)=>{"use strict";var nre=df(),are=nre();yQ.exports=are});var hf=s((uAe,EQ)=>{"use strict";var sre=b(),wQ=bQ(),ure=df();sre(wQ,"factory",ure);EQ.exports=wQ});var OQ=s((oAe,NQ)=>{"use strict";var ore=W().isPrimitive,vre=j().isPrimitive,qf=y(),fre=vr();function cre(r,e){return ore(r)?!vre(e)||fre(e)?new TypeError(qf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(qf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(qf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}NQ.exports=cre});var Ef=s((vAe,PQ)=>{"use strict";var Pt=b(),hu=R(),SQ=M(),nn=S(),AQ=L(),yf=le(),_Q=gr().isPrimitive,TQ=T(),IQ=_(),lre=C(),LQ=E(),an=hf().factory,qu=Wi().factory,bf=pt(),wf=lr(),RQ=ta(),pre=B(),He=y(),gre=OQ();function mre(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=an(i);else if(arguments.length===1){if(i=arguments[0],!AQ(i))throw new TypeError(He("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nn(i,"copy")&&!_Q(i.copy))throw new TypeError(He("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(nn(i,"prng")){if(!TQ(i.prng))throw new TypeError(He("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=an({prng:i.prng})}else{if(nn(i,"state")&&!yf(i.state))throw new TypeError(He("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=RQ({},i),i.copy===!1?u=!1:i.state&&(i.state=bf(i.state.length,i.state,1,new wf(i.state.length),1)),i.copy=!1,t=an(i)}}else{if(v=arguments[0],f=arguments[1],o=gre(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!AQ(i))throw new TypeError(He("invalid argument. Options argument must be an object. Value: `%s`.",i));if(nn(i,"copy")&&!_Q(i.copy))throw new TypeError(He("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(nn(i,"prng")){if(!TQ(i.prng))throw new TypeError(He("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=an({prng:i.prng})}else{if(nn(i,"state")&&!yf(i.state))throw new TypeError(He("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=RQ({},i),i.copy===!1?u=!1:i.state&&(i.state=bf(i.state.length,i.state,1,new wf(i.state.length),1)),i.copy=!1,t=an(i)}}else i={copy:!1},t=an(i)}return i&&i.prng?v===void 0?r=qu({prng:i.prng}):r=qu(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=qu({state:e,copy:!1}):r=qu(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,Pt(n,"NAME","negative-binomial"),i&&i.prng?(Pt(n,"seed",null),Pt(n,"seedLength",null),SQ(n,"state",IQ(null),lre),Pt(n,"stateLength",null),Pt(n,"byteLength",null),Pt(n,"toJSON",IQ(null))):(hu(n,"seed",c),hu(n,"seedLength",l),SQ(n,"state",h,d),hu(n,"stateLength",p),hu(n,"byteLength",g),Pt(n,"toJSON",m)),Pt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!yf(O))throw new TypeError(He("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=bf(O.length,O,1,new wf(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=pre(a.state),v===void 0?O.params=[]:O.params=[v,f],O}function q(){return t(r())}function N(O,F){return LQ(O)||LQ(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}PQ.exports=mre});var MQ=s((fAe,FQ)=>{"use strict";var dre=Ef(),hre=dre();FQ.exports=hre});var jQ=s((cAe,kQ)=>{"use strict";var qre=b(),BQ=MQ(),yre=Ef();qre(BQ,"factory",yre);kQ.exports=BQ});var VQ=s((lAe,UQ)=>{"use strict";var bre=j().isPrimitive,wre=W().isPrimitive,CQ=y(),Ere=vr();function Nre(r,e){return!bre(r)||Ere(r)?new TypeError(CQ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):wre(e)?null:new TypeError(CQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}UQ.exports=Nre});var xQ=s((pAe,GQ)=>{"use strict";function Ore(r,e,t){return e+t*r()}GQ.exports=Ore});var Nf=s((gAe,$Q)=>{"use strict";var Ft=b(),yu=R(),HQ=M(),DQ=L(),WQ=T(),zQ=S(),XQ=_(),Sre=C(),sn=qt().factory,JQ=E(),Are=B(),bu=y(),_re=VQ(),YQ=xQ();function Tre(){var r,e,t,i,n,a,u;if(arguments.length===0)e=sn();else if(arguments.length===1){if(t=arguments[0],!DQ(t))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zQ(t,"prng")){if(!WQ(t.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else{if(u=arguments[0],r=arguments[1],a=_re(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!DQ(t))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zQ(t,"prng")){if(!WQ(t.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=sn({prng:t.prng})}else e=sn(t)}else e=sn()}return u===void 0?n=d:n=h,i=e.PRNG,Ft(n,"NAME","normal"),t&&t.prng?(Ft(n,"seed",null),Ft(n,"seedLength",null),HQ(n,"state",XQ(null),Sre),Ft(n,"stateLength",null),Ft(n,"byteLength",null),Ft(n,"toJSON",XQ(null))):(yu(n,"seed",o),yu(n,"seedLength",f),HQ(n,"state",l,p),yu(n,"stateLength",v),yu(n,"byteLength",c),Ft(n,"toJSON",g)),Ft(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=Are(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return YQ(e,u,r)}function d(m,q){return JQ(m)||JQ(q)||q<=0?NaN:YQ(e,m,q)}}$Q.exports=Tre});var QQ=s((mAe,ZQ)=>{"use strict";var Ire=Nf(),Lre=Ire();ZQ.exports=Lre});var eK=s((dAe,rK)=>{"use strict";var Rre=b(),KQ=QQ(),Pre=Nf();Rre(KQ,"factory",Pre);rK.exports=KQ});var aK=s((hAe,nK)=>{"use strict";var tK=W().isPrimitive,iK=y();function Fre(r,e){return tK(r)?tK(e)?null:new TypeError(iK("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(iK("invalid argument. First argument must be a positive number. Value: `%s`.",r))}nK.exports=Fre});var uK=s((qAe,sK)=>{"use strict";var Mre=H();function Bre(r,e,t){return t/Mre(r(),1/e)}sK.exports=Bre});var Of=s((yAe,mK)=>{"use strict";var De=b(),wu=R(),oK=M(),vK=L(),fK=T(),cK=S(),lK=_(),kre=C(),Eu=J().factory,pK=E(),jre=B(),Nu=y(),Cre=aK(),gK=uK();function Ure(){var r,e,t,i,n,a;if(arguments.length===0)i=Eu();else if(arguments.length===1){if(t=arguments[0],!vK(t))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(cK(t,"prng")){if(!fK(t.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Eu(t)}else{if(r=arguments[0],e=arguments[1],a=Cre(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!vK(t))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(cK(t,"prng")){if(!fK(t.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Eu(t)}else i=Eu()}return r===void 0?n=h:n=g,De(n,"NAME","pareto-type1"),t&&t.prng?(De(n,"seed",null),De(n,"seedLength",null),oK(n,"state",lK(null),kre),De(n,"stateLength",null),De(n,"byteLength",null),De(n,"toJSON",lK(null)),De(n,"PRNG",i)):(wu(n,"seed",u),wu(n,"seedLength",o),oK(n,"state",c,l),wu(n,"stateLength",f),wu(n,"byteLength",v),De(n,"toJSON",p),De(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=jre(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return gK(i,r,e)}function h(d,m){return pK(d)||pK(m)||d<=0||m<=0?NaN:gK(i,d,m)}}mK.exports=Ure});var hK=s((bAe,dK)=>{"use strict";var Vre=Of(),Gre=Vre();dK.exports=Gre});var bK=s((wAe,yK)=>{"use strict";var xre=b(),qK=hK(),Hre=Of();xre(qK,"factory",Hre);yK.exports=qK});var EK=s((EAe,wK)=>{"use strict";var Dre=V(),Wre=P();function zre(r,e){return e*Dre(-2*Wre(r()))}wK.exports=zre});var Sf=s((NAe,IK)=>{"use strict";var We=b(),Ou=R(),NK=M(),Xre=W().isPrimitive,OK=L(),SK=T(),AK=S(),_K=_(),Jre=C(),Su=J().factory,Yre=E(),$re=B(),Au=y(),TK=EK();function Zre(){var r,e,t,i;if(arguments.length===0)t=Su();else if(arguments.length===1&&OK(arguments[0]))if(e=arguments[0],AK(e,"prng")){if(!SK(e.prng))throw new TypeError(Au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Su(e);else{if(r=arguments[0],!Xre(r))throw new TypeError(Au("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!OK(e))throw new TypeError(Au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(AK(e,"prng")){if(!SK(e.prng))throw new TypeError(Au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Su(e)}else t=Su()}return r===void 0?i=p:i=l,We(i,"NAME","rayleigh"),e&&e.prng?(We(i,"seed",null),We(i,"seedLength",null),NK(i,"state",_K(null),Jre),We(i,"stateLength",null),We(i,"byteLength",null),We(i,"toJSON",_K(null)),We(i,"PRNG",t)):(Ou(i,"seed",n),Ou(i,"seedLength",a),NK(i,"state",f,v),Ou(i,"stateLength",u),Ou(i,"byteLength",o),We(i,"toJSON",c),We(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=$re(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return TK(t,r)}function p(g){return Yre(g)||g<=0?NaN:TK(t,g)}}IK.exports=Zre});var RK=s((OAe,LK)=>{"use strict";var Qre=Sf(),Kre=Qre();LK.exports=Kre});var MK=s((SAe,FK)=>{"use strict";var ree=b(),PK=RK(),eee=Sf();ree(PK,"factory",eee);FK.exports=PK});var If=s((AAe,HK)=>{"use strict";var Mt=b(),_u=R(),BK=M(),un=S(),kK=W().isPrimitive,jK=L(),Af=le(),CK=gr().isPrimitive,tee=E(),UK=T(),VK=_(),iee=C(),Tu=aa().factory,on=qt().factory,_f=pt(),Tf=lr(),GK=ta(),nee=B(),ue=y(),xK=V();function aee(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=on(n);else if(arguments.length===1)if(jK(arguments[0])){if(n=arguments[0],un(n,"copy")&&!CK(n.copy))throw new TypeError(ue("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(un(n,"prng")){if(!UK(n.prng))throw new TypeError(ue("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=on({prng:n.prng})}else{if(un(n,"state")&&!Af(n.state))throw new TypeError(ue("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=GK({},n),n.copy===!1?u=!1:n.state&&(n.state=_f(n.state.length,n.state,1,new Tf(n.state.length),1)),n.copy=!1,t=on(n)}}else{if(o=arguments[0],!kK(o))throw new TypeError(ue("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=on(n)}else{if(o=arguments[0],!kK(o))throw new TypeError(ue("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!jK(n))throw new TypeError(ue("invalid argument. Options argument must be an object. Value: `%s`.",n));if(un(n,"copy")&&!CK(n.copy))throw new TypeError(ue("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(un(n,"prng")){if(!UK(n.prng))throw new TypeError(ue("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=on({prng:n.prng})}else{if(un(n,"state")&&!Af(n.state))throw new TypeError(ue("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=GK({},n),n.copy===!1?u=!1:n.state&&(n.state=_f(n.state.length,n.state,1,new Tf(n.state.length),1)),n.copy=!1,t=on(n)}}return n&&n.prng?o===void 0?r=Tu({prng:n.prng}):r=Tu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Tu({state:e,copy:!1}):r=Tu(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,Mt(a,"NAME","t"),n&&n.prng?(Mt(a,"seed",null),Mt(a,"seedLength",null),BK(a,"state",VK(null),iee),Mt(a,"stateLength",null),Mt(a,"byteLength",null),Mt(a,"toJSON",VK(null))):(_u(a,"seed",f),_u(a,"seedLength",v),BK(a,"state",p,g),_u(a,"stateLength",c),_u(a,"byteLength",l),Mt(a,"toJSON",h)),Mt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(q){if(!Af(q))throw new TypeError(ue("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=_f(q.length,q,1,new Tf(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=nee(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/xK(r()/o)}function m(q){return tee(q)||q<=0?NaN:t()/xK(r(q)/q)}}HK.exports=aee});var WK=s((_Ae,DK)=>{"use strict";var see=If(),uee=see();DK.exports=uee});var JK=s((TAe,XK)=>{"use strict";var oee=b(),zK=WK(),vee=If();oee(zK,"factory",vee);XK.exports=zK});var $K=s((IAe,YK)=>{"use strict";var Lf=j().isPrimitive,Iu=y(),Rf=vr();function fee(r,e,t){return!Lf(r)||Rf(r)?new TypeError(Iu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Lf(e)||Rf(e)?new TypeError(Iu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Lf(t)||Rf(t)?new TypeError(Iu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Iu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}YK.exports=fee});var KK=s((LAe,QK)=>{"use strict";var ZK=V();function cee(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+ZK(a*u)):(a=(t-e)*(t-i),t-ZK(a*(1-u)))}QK.exports=cee});var Ff=s((RAe,srr)=>{"use strict";var ze=b(),Lu=R(),rrr=M(),err=L(),trr=T(),irr=S(),nrr=_(),lee=C(),Ru=J().factory,Pf=E(),pee=B(),Pu=y(),gee=$K(),arr=KK();function mee(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ru();else if(arguments.length===1){if(r=arguments[0],!err(r))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(irr(r,"prng")){if(!trr(r.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=gee(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!err(r))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(irr(r,"prng")){if(!trr(r.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else e=Ru()}return n===void 0?t=d:t=h,ze(t,"NAME","triangular"),r&&r.prng?(ze(t,"seed",null),ze(t,"seedLength",null),rrr(t,"state",nrr(null),lee),ze(t,"stateLength",null),ze(t,"byteLength",null),ze(t,"toJSON",nrr(null)),ze(t,"PRNG",e)):(Lu(t,"seed",o),Lu(t,"seedLength",f),rrr(t,"state",l,p),Lu(t,"stateLength",v),Lu(t,"byteLength",c),ze(t,"toJSON",g),ze(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=pee(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return arr(e,n,a,u)}function d(m,q,N){return Pf(m)||Pf(q)||Pf(N)||!(m<=N&&N<=q)?NaN:arr(e,m,q,N)}}srr.exports=mee});var orr=s((PAe,urr)=>{"use strict";var dee=Ff(),hee=dee();urr.exports=hee});var crr=s((FAe,frr)=>{"use strict";var qee=b(),vrr=orr(),yee=Ff();qee(vrr,"factory",yee);frr.exports=vrr});var mrr=s((MAe,grr)=>{"use strict";var lrr=j().isPrimitive,Mf=y(),prr=vr();function bee(r,e){return!lrr(r)||prr(r)?new TypeError(Mf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!lrr(e)||prr(e)?new TypeError(Mf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Mf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}grr.exports=bee});var hrr=s((BAe,drr)=>{"use strict";function wee(r,e,t){var i=r();return t*i+(1-i)*e}drr.exports=wee});var Bf=s((kAe,Srr)=>{"use strict";var Xe=b(),Fu=R(),qrr=M(),yrr=L(),brr=T(),wrr=S(),Err=_(),Eee=C(),Mu=J().factory,Nrr=E(),Nee=B(),Bu=y(),Oee=mrr(),Orr=hrr();function See(){var r,e,t,i,n,a;if(arguments.length===0)e=Mu();else if(arguments.length===1){if(r=arguments[0],!yrr(r))throw new TypeError(Bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wrr(r,"prng")){if(!brr(r.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Mu(r)}else{if(n=arguments[0],a=arguments[1],i=Oee(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!yrr(r))throw new TypeError(Bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wrr(r,"prng")){if(!brr(r.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Mu(r)}else e=Mu()}return n===void 0?t=h:t=g,Xe(t,"NAME","uniform"),r&&r.prng?(Xe(t,"seed",null),Xe(t,"seedLength",null),qrr(t,"state",Err(null),Eee),Xe(t,"stateLength",null),Xe(t,"byteLength",null),Xe(t,"toJSON",Err(null)),Xe(t,"PRNG",e)):(Fu(t,"seed",u),Fu(t,"seedLength",o),qrr(t,"state",c,l),Fu(t,"stateLength",f),Fu(t,"byteLength",v),Xe(t,"toJSON",p),Xe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Nee(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Orr(e,n,a)}function h(d,m){return Nrr(d)||Nrr(m)||d>=m?NaN:Orr(e,d,m)}}Srr.exports=See});var _rr=s((jAe,Arr)=>{"use strict";var Aee=Bf(),_ee=Aee();Arr.exports=_ee});var Lrr=s((CAe,Irr)=>{"use strict";var Tee=b(),Trr=_rr(),Iee=Bf();Tee(Trr,"factory",Iee);Irr.exports=Trr});var Mrr=s((UAe,Frr)=>{"use strict";var Rrr=W().isPrimitive,Prr=y();function Lee(r,e){return Rrr(r)?Rrr(e)?null:new TypeError(Prr("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(Prr("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}Frr.exports=Lee});var krr=s((VAe,Brr)=>{"use strict";var Ree=H(),Pee=P();function Fee(r,e,t){return t*Ree(-Pee(1-r()),1/e)}Brr.exports=Fee});var kf=s((GAe,Drr)=>{"use strict";var Je=b(),ku=R(),jrr=M(),Crr=L(),Urr=T(),Vrr=S(),Grr=_(),Mee=C(),ju=J().factory,xrr=E(),Bee=B(),Cu=y(),kee=Mrr(),Hrr=krr();function jee(){var r,e,t,i,n,a;if(arguments.length===0)t=ju();else if(arguments.length===1){if(e=arguments[0],!Crr(e))throw new TypeError(Cu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Vrr(e,"prng")){if(!Urr(e.prng))throw new TypeError(Cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ju(e)}else{if(a=arguments[0],r=arguments[1],n=kee(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!Crr(e))throw new TypeError(Cu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Vrr(e,"prng")){if(!Urr(e.prng))throw new TypeError(Cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ju(e)}else t=ju()}return r===void 0?i=h:i=g,Je(i,"NAME","weibull"),e&&e.prng?(Je(i,"seed",null),Je(i,"seedLength",null),jrr(i,"state",Grr(null),Mee),Je(i,"stateLength",null),Je(i,"byteLength",null),Je(i,"toJSON",Grr(null)),Je(i,"PRNG",t)):(ku(i,"seed",u),ku(i,"seedLength",o),jrr(i,"state",c,l),ku(i,"stateLength",f),ku(i,"byteLength",v),Je(i,"toJSON",p),Je(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Bee(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return Hrr(t,a,r)}function h(d,m){return xrr(d)||xrr(m)||d<=0||m<=0?NaN:Hrr(t,d,m)}}Drr.exports=jee});var zrr=s((xAe,Wrr)=>{"use strict";var Cee=kf(),Uee=Cee();Wrr.exports=Uee});var Yrr=s((HAe,Jrr)=>{"use strict";var Vee=b(),Xrr=zrr(),Gee=kf();Vee(Xrr,"factory",Gee);Jrr.exports=Xrr});var Zrr=s((DAe,$rr)=>{"use strict";var xee=mr(),Hee=dr().isPrimitive,Dee=y(),Wee=uo();function zee(r){if(Hee(r))return r;if(xee(r))return Wee(r);throw new TypeError(Dee("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}$rr.exports=zee});var Krr=s((WAe,Qrr)=>{"use strict";var Xee=Zrr();Qrr.exports=Xee});var eer=s((zAe,rer)=>{"use strict";var k=rr(),Jee=lG().factory,Yee=NG().factory,$ee=Wx().factory,Zee=LH().factory,Qee=cD().factory,Kee=AD().factory,rte=iW().factory,ete=SW().factory,tte=aa().factory,ite=yz().factory,nte=Uz().factory,ate=iX().factory,ste=hX().factory,ute=kX().factory,ote=KX().factory,vte=Wi().factory,fte=gJ().factory,cte=FJ().factory,lte=iY().factory,pte=qt().factory,gte=yY().factory,mte=UY().factory,dte=i$().factory,hte=x$().factory,qte=sZ().factory,yte=OZ().factory,bte=BZ().factory,wte=YZ().factory,Ete=J().factory,Nte=jQ().factory,Ote=eK().factory,Ste=bK().factory,Ate=hf().factory,_te=MK().factory,Tte=JK().factory,Ite=crr().factory,Lte=Lrr().factory,Rte=Yrr().factory,Pte=Krr();function Fte(r){return k(r,"arcsine",Jee),k(r,"bernoulli",Yee),k(r,"beta",$ee),k(r,"betaprime",Zee),k(r,"binomial",Qee),k(r,"boxMuller",Kee),k(r,"cauchy",rte),k(r,"chi",ete),k(r,"chisquare",tte),k(r,"cosine",ite),k(r,"discreteUniform",nte),k(r,"erlang",ate),k(r,"exponential",ste),k(r,"f",ute),k(r,"frechet",ote),k(r,"gamma",vte),k(r,"geometric",fte),k(r,"gumbel",cte),k(r,"hypergeometric",lte),k(r,"improvedZiggurat",pte),k(r,"invgamma",gte),k(r,"kumaraswamy",mte),k(r,"laplace",dte),k(r,"levy",hte),k(r,"logistic",qte),k(r,"lognormal",yte),k(r,"minstd",bte),k(r,"minstdShuffle",wte),k(r,"mt19937",Ete),k(r,"negativeBinomial",Nte),k(r,"normal",Ote),k(r,"pareto1",Ste),k(r,"poisson",Ate),k(r,"rayleigh",_te),k(r,"t",Tte),k(r,"triangular",Ite),k(r,"uniform",Lte),k(r,"weibull",Rte),r.base={},k(r.base,"normalizeSeed",Pte),r}rer.exports=Fte});var ier=s((XAe,ter)=>{"use strict";var Mte=L(),Uu=S(),Bte=dr().isPrimitive,kte=ee().isPrimitive,jte=Fr().isPrimitive,Cte=Ha().isPrimitive,fa=y();function Ute(r,e){return Mte(e)?Uu(e,"period")&&(r.period=e.period,!kte(e.period))?new TypeError(fa("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Uu(e,"amplitude")&&(r.amplitude=e.amplitude,!Cte(e.amplitude))?new TypeError(fa("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Uu(e,"offset")&&(r.offset=e.offset,!Bte(e.offset))?new TypeError(fa("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Uu(e,"iter")&&(r.iter=e.iter,!jte(e.iter))?new TypeError(fa("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(fa("invalid argument. Options argument must be an object. Value: `%s`.",e))}ter.exports=Ute});var uer=s((JAe,ser)=>{"use strict";var jf=b(),ner=Ta(),Vte=Sv(),Gte=h0(),xte=d0(),Hte=Cr(),Dte=ier();function aer(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=Dte(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=Hte/e.period,o=e.amplitude/xte,f=0,t={},jf(t,"next",v),jf(t,"return",c),ner&&jf(t,ner,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*Gte(Vte(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return aer(e)}}ser.exports=aer});var ver=s((YAe,oer)=>{"use strict";var Wte=uer();oer.exports=Wte});var cer=s(($Ae,fer)=>{"use strict";var zte=rr(),Xte=ver();function Jte(r){return zte(r,"iterSawtoothWave",Xte),r}fer.exports=Jte});var per=s((ZAe,ler)=>{"use strict";var Yte=17976931348623157e292;ler.exports=Yte});var Vu=s((QAe,ger)=>{"use strict";var $te=709.782712893384;ger.exports=$te});var der=s((KAe,mer)=>{"use strict";var Zte=sr();function Qte(r,e){var t,i,n,a;if(n=Zte(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}mer.exports=Qte});var qer=s((r_e,her)=>{"use strict";function Kte(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}her.exports=Kte});var ber=s((e_e,yer)=>{"use strict";function rie(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}yer.exports=rie});var Eer=s((t_e,wer)=>{"use strict";function eie(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}wer.exports=eie});var Oer=s((i_e,Ner)=>{"use strict";function tie(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Ner.exports=tie});var Aer=s((n_e,Ser)=>{"use strict";function iie(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Ser.exports=iie});var Ter=s((a_e,_er)=>{"use strict";function nie(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}_er.exports=nie});var Ler=s((s_e,Ier)=>{"use strict";function aie(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Ier.exports=aie});var Per=s((u_e,Rer)=>{"use strict";function sie(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Rer.exports=sie});var ker=s((o_e,Ber)=>{"use strict";var uie=E(),Fer=sr(),oie=ge(),vie=I(),fie=U(),cie=qer(),lie=ber(),pie=Eer(),gie=Oer(),mie=Aer(),die=Ter(),hie=Ler(),qie=Per(),Gu=1e-300,yie=13877787807814457e-33,Mer=.8450629115104675,bie=.12837916709551256,wie=1,Eie=-.0023621185607526594,Nie=1,Oie=-.009864944034847148,Sie=1,Aie=-.0098649429247001,_ie=1;function Tie(r){var e,t,i,n,a,u,o,f;if(uie(r))return NaN;if(r===vie)return 0;if(r===fie)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<yie?1-r:(i=r*r,n=bie+i*cie(i),a=wie+i*lie(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Eie+a*pie(a),f=Nie+a*gie(a),e?1+Mer+o/f:1-Mer-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Oie+a*mie(a),a=Sie+a*die(a);else{if(r<-6)return 2-Gu;n=Aie+a*hie(a),a=_ie+a*qie(a)}return i=oie(t,0),n=Fer(-(i*i)-.5625)*Fer((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Gu:Gu*Gu}Ber.exports=Tie});var ti=s((v_e,jer)=>{"use strict";var Iie=ker();jer.exports=Iie});var Ver=s((f_e,Uer)=>{"use strict";var Lie=ti(),Cer=V(),Rie=sr(),Pie=Cr();function Fie(r,e){var t,i,n,a,u;if(a=Lie(Cer(e)),a!==0&&r>1){for(i=Rie(-e)/Cer(Pie*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}Uer.exports=Fie});var Cf=s((c_e,Ger)=>{"use strict";var Mie=-708.3964185322641;Ger.exports=Mie});var Wer=s((l_e,Der)=>{"use strict";var vn=sr(),xu=H(),Bie=P(),xer=Vu(),Her=Cf();function kie(r,e){var t,i;return i=r*Bie(e),e>=1?i<xer&&-e>Her?t=xu(e,r)*vn(-e):r>=1?t=xu(e/vn(e/r),r):t=vn(i-e):i>Her?t=xu(e,r)*vn(-e):e/r<xer?t=xu(e/vn(e/r),r):t=vn(i-e),t}Der.exports=kie});var Uf=s((p_e,zer)=>{"use strict";function jie(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}zer.exports=jie});var Jer=s((g_e,Xer)=>{"use strict";var Cie=Function;Xer.exports=Cie});var $er=s((m_e,Yer)=>{"use strict";var Uie=Jer();Yer.exports=Uie});var Qer=s((d_e,Zer)=>{"use strict";var Vie=$er(),Gie=Uf();function xie(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Vie(e)();function a(u){return Gie(r,u)}}Zer.exports=xie});var etr=s((h_e,rtr)=>{"use strict";var Hie=b(),Ker=Uf(),Die=Qer();Hie(Ker,"factory",Die);rtr.exports=Ker});var ii=s((q_e,ttr)=>{"use strict";var Wie=2220446049250313e-31;ttr.exports=Wie});var ntr=s((y_e,itr)=>{"use strict";var zie=eval;itr.exports=zie});var str=s((b_e,atr)=>{"use strict";var Xie=ntr();function Jie(){var r;try{Xie('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}atr.exports=Jie});var Vf=s((w_e,utr)=>{"use strict";var Yie=str();utr.exports=Yie});var vtr=s((E_e,otr)=>{"use strict";var Hu=Y(),$ie=ii(),Zie=1e6;function Qie(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||$ie,a=o.maxTerms||Zie,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Hu(i*u)>=Hu(n)||--a===0)break}else do n=r(),u+=n;while(Hu(i*u)<Hu(n)&&--a);return u}otr.exports=Qie});var ltr=s((N_e,ctr)=>{"use strict";var ftr=Y(),Kie=ii(),rne=1e6;function ene(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||Kie,n=u.maxTerms||rne,a=u.initialValue||0;do i=r(),a+=i;while(ftr(t*a)<ftr(i)&&--n);return a}ctr.exports=ene});var Du=s((O_e,ptr)=>{"use strict";var tne=Vf(),ine=vtr(),nne=ltr(),Gf;tne()?Gf=ine:Gf=nne;ptr.exports=Gf});var mtr=s((S_e,gtr)=>{"use strict";function ane(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}gtr.exports=ane});var htr=s((A_e,dtr)=>{"use strict";var sne=Y(),une=P(),one=ii(),vne=Du(),fne=mtr();function cne(r){var e,t;return r<=-1?NaN:(t=sne(r),t>.95?une(1+r)-r:t<one?-r*r/2:(e={initialValue:-r},vne(fne(r),e)))}dtr.exports=cne});var ytr=s((__e,qtr)=>{"use strict";var lne=htr();qtr.exports=lne});var wtr=s((T_e,btr)=>{"use strict";function pne(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}btr.exports=pne});var Ntr=s((I_e,Etr)=>{"use strict";function gne(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Etr.exports=gne});var Str=s((L_e,Otr)=>{"use strict";function mne(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Otr.exports=mne});var _tr=s((R_e,Atr)=>{"use strict";function dne(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Atr.exports=dne});var Itr=s((P_e,Ttr)=>{"use strict";function hne(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Ttr.exports=hne});var Rtr=s((F_e,Ltr)=>{"use strict";function qne(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Ltr.exports=qne});var Ftr=s((M_e,Ptr)=>{"use strict";function yne(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Ptr.exports=yne});var Btr=s((B_e,Mtr)=>{"use strict";function bne(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Mtr.exports=bne});var jtr=s((k_e,ktr)=>{"use strict";function wne(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}ktr.exports=wne});var Utr=s((j_e,Ctr)=>{"use strict";var Ene=etr(),Nne=ytr(),One=ti(),xf=V(),Sne=sr(),Ane=st(),_ne=wtr(),Tne=Ntr(),Ine=Str(),Lne=_tr(),Rne=Itr(),Pne=Rtr(),Fne=Ftr(),Mne=Btr(),Bne=jtr(),Yr=[0,0,0,0,0,0,0,0,0,0];function kne(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-Nne(i),a=r*n,u=xf(2*n),e<r&&(u=-u),Yr[0]=_ne(u),Yr[1]=Tne(u),Yr[2]=Ine(u),Yr[3]=Lne(u),Yr[4]=Rne(u),Yr[5]=Pne(u),Yr[6]=Fne(u),Yr[7]=Mne(u),Yr[8]=Bne(u),Yr[9]=-.0005967612901927463,t=Ene(Yr,1/r),t*=Sne(-a)/xf(Ane*r),e<r&&(t=-t),t+=One(xf(a))/2,t}Ctr.exports=kne});var Gtr=s((C_e,Vtr)=>{"use strict";function jne(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}Vtr.exports=jne});var Htr=s((U_e,xtr)=>{"use strict";var Cne=Du(),Une=Gtr();function Vne(r,e,t){var i,n;return t=t||0,n=Une(r,e),i=Cne(n,{initialValue:t}),i}xtr.exports=Vne});var Wtr=s((V_e,Dtr)=>{"use strict";function Gne(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Dtr.exports=Gne});var Xtr=s((G_e,ztr)=>{"use strict";var xne=Wtr();ztr.exports=xne});var Ytr=s((x_e,Jtr)=>{"use strict";var Hne=Xtr();Jtr.exports=Hne});var Qtr=s((H_e,Ztr)=>{"use strict";var Dne=a3(),$tr=E(),Hf=U();function Wne(r,e){return $tr(r)||$tr(e)?NaN:r===Hf||e===Hf?Hf:r===e&&r===0?Dne(r)?r:e:r<e?r:e}Ztr.exports=Wne});var rir=s((D_e,Ktr)=>{"use strict";var zne=Qtr();Ktr.exports=zne});var tir=s((W_e,eir)=>{"use strict";var Xne=10.900511;eir.exports=Xne});var Df=s((z_e,iir)=>{"use strict";var Jne=2.718281828459045;iir.exports=Jne});var sir=s((X_e,air)=>{"use strict";var Yne=Ytr(),$ne=Wn(),Zne=ji(),Qne=nt(),Kne=V(),rae=Y(),Bt=sr(),ca=H(),Wf=G3(),zf=rir(),nir=P(),Wu=Vu(),la=Cf(),Xf=tir(),eae=Df();function tae(r,e){var t,i,n,a,u,o,f;return n=r+Xf-.5,f=(e-r-Xf+.5)/n,r<1?e<=la?Bt(r*nir(e)-e-$ne(r)):ca(e,r)*Bt(-e)/Zne(r):(rae(f*f*r)<=100&&r>150?(t=r*(Qne(f)-f)+e*(.5-Xf)/n,t=Bt(t)):(a=r*nir(e/n),u=r-e,zf(a,u)<=la||Wf(a,u)>=Wu?(i=u/r,zf(a,u)/2>la&&Wf(a,u)/2<Wu?(o=ca(e/n,r/2)*Bt(u/2),t=o*o):zf(a,u)/4>la&&Wf(a,u)/4<Wu&&e>r?(o=ca(e/n,r/4)*Bt(u/4),t=o*o,t*=t):i>la&&i<Wu?t=ca(e*Bt(i)/n,r):t=Bt(a+u)):t=ca(e/n,r)*Bt(u)),t*=Kne(n/eae)/Yne(r),t)}air.exports=tae});var oir=s((J_e,uir)=>{"use strict";var iae=.34657359027997264;uir.exports=iae});var fir=s((Y_e,vir)=>{"use strict";function nae(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}vir.exports=nae});var dir=s(($_e,mir)=>{"use strict";var aae=E(),cir=ar(),Jf=me(),sae=Mi(),lir=I(),uae=U(),pir=se(),oae=oir(),vae=fir(),fae=709.782712893384,Yf=.6931471803691238,$f=19082149292705877e-26,gir=1.4426950408889634,cae=38.816242111356935,lae=1.0397207708399179;function pae(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(r===lir||aae(r))return r;if(r===uae)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=cae){if(i)return-1;if(f>=fae)return lir}if(u=cir(f)|0,f>oae)f<lae?i?(n=r+Yf,a=-$f,g=-1):(n=r-Yf,a=$f,g=1):(i?g=gir*r-.5:g=gir*r+.5,g|=0,l=g,n=r-l*Yf,a=l*$f),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,v=r*e,o=1+v*vae(v),l=3-o*e,p=v*((o-l)/(6-r*l)),g===0?r-(r*p-v):(t=sae(pir+g<<20,0),p=r*(p-c)-c,p-=v,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(f=1-(p-r),g===1024?(n=cir(f)+(g<<20)|0,f=Jf(f,n)):f*=t,f-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=Jf(l,n),f=l-(p-r)):(n=pir-g<<20|0,l=Jf(l,n),f=r-(p+l),f+=1),f*=t,f))}mir.exports=pae});var Zf=s((Z_e,hir)=>{"use strict";var gae=dir();hir.exports=gae});var wir=s((Q_e,bir)=>{"use strict";var qir=E(),yir=Y(),mae=Zf(),dae=P(),hae=H(),qae=_0();function yae(r,e){var t;if(qir(r)||qir(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((yir(e*(r-1))<.5||yir(e)<.2)&&(t=dae(r)*e,t<.5))return mae(t)}else if(qae(e)!==e)return NaN;return hae(r,e)-1}bir.exports=yae});var Nir=s((K_e,Eir)=>{"use strict";var bae=wir();Eir.exports=bae});var Sir=s((rTe,Oir)=>{"use strict";function wae(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Oir.exports=wae});var _ir=s((eTe,Air)=>{"use strict";function Eae(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Air.exports=Eae});var Iir=s((tTe,Tir)=>{"use strict";function Nae(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Tir.exports=Nae});var Rir=s((iTe,Lir)=>{"use strict";var Qf=P(),Oae=ii(),Sae=Sir(),Aae=_ir(),_ae=Iir(),Tae=.15896368026733398,Iae=.5281534194946289,Lae=.45201730728149414;function Rae(r,e,t){var i,n,a,u;if(r<Oae)return-Qf(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=Qf(r);while(r>=3);t=r-2}return a=t*(r+1),u=Sae(t),n+=a*Tae+a*u,n}return r<1&&(n+=-Qf(r),t=e,e=r,r+=1),r<=1.5?(a=Aae(e),i=e*t,n+=i*Iae+i*a,n):(a=t*e,u=_ae(-t),n+=a*Lae+a*u,n)}Lir.exports=Rae});var kir=s((nTe,Bir)=>{"use strict";var Pir=ji(),Fir=Zf(),Pae=nt(),Fae=E(),Mir=Rir();function Mae(r){return Fae(r)?NaN:r<0?r<-.5?Pir(1+r)-1:Fir(-Pae(r)+Mir(r+2,r+1,r)):r<2?Fir(Mir(r+1,r,r-1)):Pir(1+r)-1}Bir.exports=Mae});var Cir=s((aTe,jir)=>{"use strict";var Bae=kir();jir.exports=Bae});var Vir=s((sTe,Uir)=>{"use strict";function kae(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Uir.exports=kae});var xir=s((uTe,Gir)=>{"use strict";var jae=Nir(),Cae=Du(),Uae=Cir(),Vae=Vir();function Gae(r,e,t){var i,n,a,u,o;return n=Uae(r),a=(n+1)/r,u=jae(e,r),n-=u,n/=r,o=Vae(r,e),u+=1,i=t?a:0,n=-u*Cae(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Gir.exports=Gae});var Kf=s((oTe,Hir)=>{"use strict";var xae=11754943508222875e-54;Hir.exports=xae});var Wir=s((vTe,Dir)=>{"use strict";var zu=Y(),oe=Kf(),Hae=ii(),Dae=1e6;function Wae(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=oe),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=oe),o=v[1]+v[0]/o,o===0&&(o=oe),f=1/f,n=o*f,u*=n);while(zu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=oe),o=v[1]+v[0]/o,o===0&&(o=oe),f=1/f,n=o*f,u*=n);while(v&&zu(n-1)>e&&--t);return a/u}function zae(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=oe),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=oe),u=f[1]+f[0]/u,u===0&&(u=oe),o=1/o,n=u*o,a*=n);while(f&&zu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=oe),u=f[1]+f[0]/u,u===0&&(u=oe),o=1/o,n=u*o,a*=n);while(f&&zu(n-1)>e&&--t);return a}function Xae(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Dae,n=i.tolerance||Hae,i.keep?zae(r,n,t):Wae(r,n,t)}Dir.exports=Xae});var Jir=s((fTe,Xir)=>{"use strict";var zir=Y(),Jae=ii(),fn=Kf(),Yae=1e6;function $ae(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=fn),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=fn),a=f[1]+f[0]/a,a===0&&(a=fn),u=1/u,i=a*u,o*=i);while(f&&zir(i-1)>e&&--t);return n/o}function Zae(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=fn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=fn),n=o[1]+o[0]/n,n===0&&(n=fn),a=1/a,i=n*a,u*=i);while(o&&zir(i-1)>e&&--t);return u}function Qae(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||Jae,t=i.maxIter||Yae,i.keep?Zae(r,n,t):$ae(r,n,t)}Xir.exports=Qae});var $ir=s((cTe,Yir)=>{"use strict";var Kae=Vf(),r0e=Wir(),e0e=Jir(),rc;Kae()?rc=r0e:rc=e0e;Yir.exports=rc});var Qir=s((lTe,Zir)=>{"use strict";function t0e(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Zir.exports=t0e});var rnr=s((pTe,Kir)=>{"use strict";var i0e=$ir(),n0e=Qir();function a0e(r,e){var t=n0e(r,e);return 1/(e-r+1+i0e(t))}Kir.exports=a0e});var fnr=s((gTe,vnr)=>{"use strict";var s0e=Wn(),u0e=z(),pa=ji(),enr=Y(),o0e=sr(),tnr=H(),$r=P(),v0e=v3(),inr=per(),f0e=s3(),nnr=Vu(),c0e=I(),l0e=der(),p0e=Ver(),anr=Wer(),g0e=Utr(),ec=Htr(),snr=sir(),m0e=xir(),unr=rnr(),d0e=170;function onr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h,d,m,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=d0e&&!a)return l&&e*4<r?(p=e*$r(r)-r,p+=$r(unr(e,r))):!l&&e>4*r?(p=e*$r(r)-r,o=0,p+=$r(ec(e,r,o)/e)):(p=onr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=$r(p)-e+(e-.5)*$r(e),p+=$r(f0e)):(p=e*$r(r)-r,o=0,p+=$r(ec(e,r,o)/e)):p=$r(p)+s0e(e)),p>nnr?c0e:o0e(p);switch(c=e<30&&e<=r+1&&r<nnr,c?(q=u0e(e),g=q===e,f=g?!1:enr(q-e)===.5):g=f=!1,g&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<v0e&&e>1?u=6:r<.5?-.4/$r(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=enr((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=l0e(e,r),a===!1&&(p*=pa(e));break;case 1:p=p0e(e,r),a===!1&&(p*=pa(e));break;case 2:p=a?snr(e,r):anr(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:pa(e),a||p>=1||inr*p>o?(o/=p,a||e<1||inr/e>o?(o*=-e,n=!0):o=0):o=0)),p*=ec(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=m0e(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?snr(e,r):anr(e,r),p!==0&&(p*=unr(e,r));break;case 5:p=g0e(e,r),r>=e&&(l=!l);break;case 6:p=a?tnr(r,e)/pa(e+1):tnr(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:pa(e),p=d-p),p}vnr.exports=onr});var tc=s((mTe,cnr)=>{"use strict";var h0e=fnr();cnr.exports=h0e});var pnr=s((dTe,lnr)=>{"use strict";var q0e=tc(),ic=E(),y0e=I();function b0e(r,e,t){return ic(r)||ic(e)||ic(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===y0e?1:q0e(r*t,e)}lnr.exports=b0e});var dnr=s((hTe,mnr)=>{"use strict";var w0e=_(),E0e=hs().factory,N0e=tc(),gnr=E(),O0e=I();function S0e(r,e){if(gnr(r)||gnr(e)||r<0||e<=0)return w0e(NaN);if(r===0)return E0e(0);return t;function t(i){return i<=0?0:i===O0e?1:N0e(i*e,r)}}mnr.exports=S0e});var nc=s((qTe,qnr)=>{"use strict";var A0e=b(),hnr=pnr(),_0e=dnr();A0e(hnr,"factory",_0e);qnr.exports=hnr});var bnr=s((yTe,ynr)=>{"use strict";var T0e=nc();function I0e(r,e){return T0e(r,e/2,.5)}ynr.exports=I0e});var Enr=s((bTe,wnr)=>{"use strict";var L0e=nc().factory;function R0e(r){return L0e(r/2,.5)}wnr.exports=R0e});var Snr=s((wTe,Onr)=>{"use strict";var P0e=b(),Nnr=bnr(),F0e=Enr();P0e(Nnr,"factory",F0e);Onr.exports=Nnr});var Inr=s((ETe,Tnr)=>{"use strict";var M0e=L(),B0e=S(),k0e=Da(),Anr=y(),_nr=["values","indices","*"];function j0e(r,e){return M0e(e)?B0e(e,"returns")&&(r.returns=e.returns,k0e(_nr,r.returns)===-1)?new TypeError(Anr('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",_nr.join('", "'),r.returns)):null:new TypeError(Anr("invalid argument. Options argument must be an object. Value: `%s`.",e))}Tnr.exports=j0e});var Rnr=s((NTe,Lnr)=>{"use strict";var C0e=S();function U0e(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),C0e(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Lnr.exports=U0e});var Fnr=s((OTe,Pnr)=>{"use strict";var V0e=S();function G0e(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),V0e(t,n)?t[n].push(a):t[n]=[a];return t}Pnr.exports=G0e});var Bnr=s((STe,Mnr)=>{"use strict";var x0e=S();function H0e(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),x0e(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Mnr.exports=H0e});var Unr=s((ATe,Cnr)=>{"use strict";var knr=Dr(),jnr=y(),D0e=Inr(),W0e=Rnr(),z0e=Fnr(),X0e=Bnr();function J0e(r,e,t){var i,n,a;if(!knr(r))throw new TypeError(jnr("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=D0e(i,e),n)throw n;a=t}if(!knr(a))throw new TypeError(jnr("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?W0e(r,a):i.returns==="indices"?z0e(r,a):X0e(r,a)}Cnr.exports=J0e});var Gnr=s((_Te,Vnr)=>{"use strict";var Y0e=Unr();Vnr.exports=Y0e});var Hnr=s((TTe,xnr)=>{"use strict";function $0e(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}xnr.exports=$0e});var znr=s((ITe,Wnr)=>{"use strict";var Z0e=mr(),Q0e=j().isPrimitive,K0e=L(),rse=vr(),Dnr=S(),ac=y();function ese(r,e){return K0e(e)?Dnr(e,"alpha")&&(r.alpha=e.alpha,!Q0e(r.alpha)||rse(r.alpha))?new TypeError(ac("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Dnr(e,"groups")&&(r.groups=e.groups,!Z0e(r.groups))?new TypeError(ac("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(ac("invalid argument. Options argument must be an object. Value: `%s`.",e))}Wnr.exports=ese});var Knr=s((LTe,Qnr)=>{"use strict";var Xnr=E(),Xu=jr(),Jnr=H(),tse=Y(),Ynr=H2(),ise=Bi(),$nr=u0(),nse=I2(),ase=o0(),sse=ise+1,Znr=1e308;function use(r,e){var t,i;return Xnr(r)||Xnr(e)||Xu(e)?NaN:Xu(r)||r===0||e<ase||tse(r)>sse&&e<=0?r:e>$nr?0*r:e<nse?(t=Jnr(10,-(e+$nr)),i=r*Znr*t,Xu(i)?r:Ynr(i)/Znr/t):(t=Jnr(10,-e),i=r*t,Xu(i)?r:Ynr(i)/t)}Qnr.exports=use});var ear=s((RTe,rar)=>{"use strict";var ose=Knr();rar.exports=ose});var nar=s((PTe,iar)=>{"use strict";var vse=ee(),fse=L(),cse=gr().isPrimitive,tar=S(),sc=y(),uc=ear();function lse(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!fse(r))throw new TypeError(sc("invalid argument. First argument must be an object. Value: `%s`.",r));if(tar(r,"digits")){if(!vse(r.digits))throw new TypeError(sc("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(tar(r,"decision")){if(!cse(r.decision))throw new TypeError(sc("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+uc(this.pValue,-t)+`
`,i+="    statistic: "+uc(this.statistic,-t)+`
`,i+="    df: "+uc(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}iar.exports=lse});var uar=s((FTe,sar)=>{"use strict";var pse=Dr(),gse=L(),ni=rr(),mse=Ti(),Ju=y(),dse=Snr(),hse=Gnr(),aar=P(),qse=Hnr(),yse=znr(),bse=nar();function wse(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O;if(f=[],e=arguments.length,v={},gse(arguments[e-1])&&(r=arguments[e-1],e-=1,g=yse(v,r),g))throw g;if(v.groups){if(n=hse(arguments[0],v.groups),i=mse(n),e=i.length,e<2)throw new Error(Ju("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)f.push(n[i[O]])}else for(O=0;O<e;O++)f.push(arguments[O]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),O=0;O<e;O++){if(p=f[O],!pse(p))throw new TypeError(Ju("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(Ju("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[O]=p.length-1,u+=q[O],t+=1/q[O],N[O]=qse(p),o+=q[O]*N[O],h+=q[O]*aar(N[O])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(Ju("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*aar(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-dse(l,m),d={},ni(d,"rejected",c<=a),ni(d,"alpha",a),ni(d,"pValue",c),ni(d,"statistic",l),ni(d,"df",m),ni(d,"method","Bartlett's test of equal variances"),ni(d,"print",bse),d}sar.exports=wse});var far=s((MTe,oar)=>{"use strict";var Ese=uar();oar.exports=Ese});var lar=s((BTe,car)=>{"use strict";var oc=E(),Nse=lt();function Ose(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,oc(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],oc(f)){a=f;break}(f>a||f===a&&Nse(f))&&(a=f),i[o]=a,o+=n}if(oc(a))for(v;v<r;v++)i[o]=a,o+=n;return i}car.exports=Ose});var gar=s((kTe,par)=>{"use strict";var vc=E(),Sse=lt();function Ase(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,vc(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],vc(c)){o=c;break}(c>o||c===o&&Sse(c))&&(o=c),n[v]=o,v+=a}if(vc(o))for(l;l<r;l++)n[v]=o,v+=a;return n}par.exports=Ase});var har=s((jTe,dar)=>{"use strict";var _se=b(),mar=lar(),Tse=gar();_se(mar,"ndarray",Tse);dar.exports=mar});var yar=s((CTe,qar)=>{"use strict";var Ise=har();qar.exports=Ise});var war=s((UTe,bar)=>{"use strict";var Lse=E(),Rse=lt();function Pse(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],Lse(a))return a;(a>i||a===i&&Rse(a))&&(i=a)}return i}bar.exports=Pse});var Nar=s((VTe,Ear)=>{"use strict";var Fse=E(),Mse=lt();function Bse(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Fse(u))return u;(u>n||u===n&&Mse(u))&&(n=u)}return n}Ear.exports=Bse});var Aar=s((GTe,Sar)=>{"use strict";var kse=b(),Oar=war(),jse=Nar();kse(Oar,"ndarray",jse);Sar.exports=Oar});var Tar=s((xTe,_ar)=>{"use strict";var Cse=Aar();_ar.exports=Cse});var Rar=s((HTe,Lar)=>{"use strict";var Iar=E(),Use=lt();function Vse(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],Iar(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],Iar(f))return f;(f>a||f===a&&Use(f))&&(a=f)}return a}Lar.exports=Vse});var Mar=s((DTe,Far)=>{"use strict";var Par=E(),Gse=lt();function xse(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],Par(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],Par(c))return c;(c>o||c===o&&Gse(c))&&(o=c)}return o}Far.exports=xse});var jar=s((WTe,kar)=>{"use strict";var Hse=b(),Bar=Rar(),Dse=Mar();Hse(Bar,"ndarray",Dse);kar.exports=Bar});var Uar=s((zTe,Car)=>{"use strict";var Wse=ti(),zse=V(),fc=E();function Xse(r,e,t){var i,n;return fc(r)||fc(e)||fc(t)||t<0?NaN:t===0?r<e?0:1:(i=t*zse(2),n=r-e,.5*Wse(-n/i))}Car.exports=Xse});var Gar=s((XTe,Var)=>{"use strict";var Jse=_(),Yse=hs().factory,cc=E(),$se=V(),Zse=ti();function Qse(r,e){var t;if(cc(r)||cc(e)||e<0)return Jse(NaN);if(e===0)return Yse(r);return t=e*$se(2),i;function i(n){var a;return cc(n)?NaN:(a=n-r,.5*Zse(-a/t))}}Var.exports=Qse});var Dar=s((JTe,Har)=>{"use strict";var Kse=b(),xar=Uar(),rue=Gar();Kse(xar,"factory",rue);Har.exports=xar});var Xar=s((YTe,zar)=>{"use strict";var War=E(),eue=P(),tue=st(),iue=Df();function nue(r,e){return War(r)||War(e)||e<=0?NaN:.5*eue(tue*iue*e*e)}zar.exports=nue});var Yar=s(($Te,Jar)=>{"use strict";var aue=Xar();Jar.exports=aue});var Qar=s((ZTe,Zar)=>{"use strict";var $ar=E();function sue(r,e){return $ar(r)||$ar(e)||e<=0?NaN:0}Zar.exports=sue});var r0r=s((QTe,Kar)=>{"use strict";var uue=Qar();Kar.exports=uue});var t0r=s((KTe,e0r)=>{"use strict";var oue=z(),vue=[fue,cue,lue,pue,gue,mue,due,hue,que,yue,bue,wue,Eue,Nue,Oue,Sue,Aue,_ue,Tue,Iue,Lue,Rue,Pue,Fue,Mue,Bue,kue,jue,Cue,Uue,Vue,Gue,xue,Hue,Due,Wue,zue,Xue,Jue,Yue,$ue,Zue,Que,Kue,roe,eoe,toe,ioe,noe,aoe,soe,uoe,ooe,voe,foe,coe,loe,poe,goe,moe,doe,hoe,qoe,yoe,boe,woe,Eoe,Noe,Ooe,Soe,Aoe,_oe,Toe,Ioe,Loe,Roe,Poe,Foe,Moe,Boe,koe,joe,Coe,Uoe,Voe,Goe,xoe,Hoe,Doe,Woe,zoe,Xoe,Joe,Yoe,$oe,Zoe,Qoe,Koe,r1e,e1e,t1e];function fue(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function cue(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function lue(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function pue(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function gue(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function mue(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function due(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function hue(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function que(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function yue(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function bue(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function wue(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Eue(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function Nue(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function Oue(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function Sue(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function Aue(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function _ue(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Tue(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Iue(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function Lue(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function Rue(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function Pue(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function Fue(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function Mue(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Bue(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function kue(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function jue(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function Cue(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function Uue(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function Vue(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function Gue(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function xue(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function Hue(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function Due(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function Wue(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function zue(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function Xue(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function Jue(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function Yue(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function $ue(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function Zue(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function Que(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function Kue(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function roe(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function eoe(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function toe(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function ioe(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function noe(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function aoe(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function soe(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function uoe(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function ooe(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function voe(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function foe(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function coe(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function loe(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function poe(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function goe(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function moe(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function doe(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function hoe(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function qoe(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function yoe(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function boe(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function woe(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function Eoe(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function Noe(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function Ooe(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function Soe(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function Aoe(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function _oe(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function Toe(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Ioe(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function Loe(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Roe(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function Poe(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function Foe(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Moe(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Boe(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function koe(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function joe(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function Coe(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Uoe(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function Voe(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function Goe(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function xoe(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function Hoe(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function Doe(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function Woe(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function zoe(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function Xoe(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function Joe(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function Yoe(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function $oe(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function Zoe(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function Qoe(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function Koe(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function r1e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function e1e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function t1e(){return 1}function i1e(r){var e=oue(r),t=vue[e];return t(2*r-(2*e+1))}e0r.exports=i1e});var u0r=s((rIe,s0r)=>{"use strict";var i0r=sr(),n1e=I(),n0r=t0r(),a0r=.5641895835477563;function a1e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?a0r/r:(e=r*r,a0r*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):n0r(400/(4+r)):r<-26.7?n1e:(e=r*r,r<-6.1?2*i0r(e):2*i0r(e)-n0r(400/(4-r)))}s0r.exports=a1e});var lc=s((eIe,o0r)=>{"use strict";var s1e=u0r();o0r.exports=s1e});var c0r=s((tIe,f0r)=>{"use strict";var u1e=P(),o1e=nt(),v1e=l0(),f1e=ti(),c1e=lc(),l1e=U(),pc=E(),v0r=.7071067811865475;function p1e(r,e,t){var i;return pc(r)||pc(e)||pc(t)||t<0?NaN:t===0?r<e?l1e:0:(i=(r-e)/t,i<-1?u1e(c1e(-i*v0r)/2)-v1e(i)/2:o1e(-f1e(i*v0r)/2))}f0r.exports=p1e});var g0r=s((iIe,p0r)=>{"use strict";var l0r=E(),g1e=U();function m1e(r,e){return l0r(r)||l0r(e)?NaN:r<e?g1e:0}p0r.exports=m1e});var h0r=s((nIe,d0r)=>{"use strict";var d1e=_(),m0r=E(),h1e=U();function q1e(r){if(m0r(r))return d1e(NaN);return e;function e(t){return m0r(t)?NaN:t<r?h1e:0}}d0r.exports=q1e});var b0r=s((aIe,y0r)=>{"use strict";var y1e=b(),q0r=g0r(),b1e=h0r();y1e(q0r,"factory",b1e);y0r.exports=q0r});var O0r=s((sIe,N0r)=>{"use strict";var w1e=_(),E1e=b0r().factory,w0r=E(),N1e=nt(),O1e=l0(),S1e=ti(),A1e=lc(),_1e=P(),E0r=.7071067811865475;function T1e(r,e){if(w0r(r)||w0r(e)||e<0)return w1e(NaN);if(e===0)return E1e(r);return t;function t(i){var n=(i-r)/e;return n<-1?_1e(A1e(-n*E0r)/2)-O1e(n)/2:N1e(-S1e(n*E0r)/2)}}N0r.exports=T1e});var _0r=s((uIe,A0r)=>{"use strict";var I1e=b(),S0r=c0r(),L1e=O0r();I1e(S0r,"factory",L1e);A0r.exports=S0r});var gc=s((oIe,T0r)=>{"use strict";var R1e=1.8378770664093456;T0r.exports=R1e});var R0r=s((vIe,L0r)=>{"use strict";var P1e=P(),I0r=H(),F1e=gc(),M1e=U(),B1e=I(),mc=E();function k1e(r,e,t){var i,n,a;return mc(r)||mc(e)||mc(t)||t<0?NaN:t===0?r===e?B1e:M1e:(i=I0r(t,2),n=-.5*(2*P1e(t)+F1e),a=-1/(2*i),n+a*I0r(r-e,2))}L0r.exports=k1e});var M0r=s((fIe,F0r)=>{"use strict";var j1e=I(),C1e=U(),P0r=E();function U1e(r,e){return P0r(r)||P0r(e)?NaN:r===e?j1e:C1e}F0r.exports=U1e});var j0r=s((cIe,k0r)=>{"use strict";var V1e=_(),G1e=I(),x1e=U(),B0r=E();function H1e(r){if(B0r(r))return V1e(NaN);return e;function e(t){return B0r(t)?NaN:t===r?G1e:x1e}}k0r.exports=H1e});var V0r=s((lIe,U0r)=>{"use strict";var D1e=b(),C0r=M0r(),W1e=j0r();D1e(C0r,"factory",W1e);U0r.exports=C0r});var D0r=s((pIe,H0r)=>{"use strict";var z1e=_(),X1e=V0r().factory,J1e=gc(),G0r=E(),x0r=H(),Y1e=P();function $1e(r,e){var t,i,n;if(G0r(r)||G0r(e)||e<0)return z1e(NaN);if(e===0)return X1e(r);return t=x0r(e,2),i=-.5*(2*Y1e(e)+J1e),n=-1/(2*t),a;function a(u){return i+n*x0r(u-r,2)}}H0r.exports=$1e});var X0r=s((gIe,z0r)=>{"use strict";var Z1e=b(),W0r=R0r(),Q1e=D0r();Z1e(W0r,"factory",Q1e);z0r.exports=W0r});var $0r=s((mIe,Y0r)=>{"use strict";var J0r=E();function K1e(r,e){return J0r(r)||J0r(e)||e<=0?NaN:r}Y0r.exports=K1e});var Q0r=s((dIe,Z0r)=>{"use strict";var r2e=$0r();Z0r.exports=r2e});var esr=s((hIe,rsr)=>{"use strict";var K0r=E();function e2e(r,e){return K0r(r)||K0r(e)||e<=0?NaN:r}rsr.exports=e2e});var isr=s((qIe,tsr)=>{"use strict";var t2e=esr();tsr.exports=t2e});var asr=s((yIe,nsr)=>{"use strict";var dc=E(),i2e=sr(),n2e=H();function a2e(r,e,t){return dc(r)||dc(e)||dc(t)||t<=0?NaN:i2e(e*r+.5*n2e(t*r,2))}nsr.exports=a2e});var usr=s((bIe,ssr)=>{"use strict";var s2e=_(),hc=E(),u2e=sr(),o2e=H();function v2e(r,e){if(hc(r)||hc(e)||e<=0)return s2e(NaN);return t;function t(i){return hc(i)?NaN:u2e(r*i+.5*o2e(e*i,2))}}ssr.exports=v2e});var fsr=s((wIe,vsr)=>{"use strict";var f2e=b(),osr=asr(),c2e=usr();f2e(osr,"factory",c2e);vsr.exports=osr});var psr=s((EIe,lsr)=>{"use strict";var csr=E();function l2e(r,e){return csr(r)||csr(e)||e<=0?NaN:r}lsr.exports=l2e});var msr=s((NIe,gsr)=>{"use strict";var p2e=psr();gsr.exports=p2e});var qsr=s((OIe,hsr)=>{"use strict";var g2e=sr(),dsr=H(),m2e=V(),d2e=st(),h2e=I(),qc=E();function q2e(r,e,t){var i,n,a;return qc(r)||qc(e)||qc(t)||t<0?NaN:t===0?r===e?h2e:0:(i=dsr(t,2),n=1/m2e(i*d2e),a=-1/(2*i),n*g2e(a*dsr(r-e,2)))}hsr.exports=q2e});var wsr=s((SIe,bsr)=>{"use strict";var y2e=I(),ysr=E();function b2e(r,e){return ysr(r)||ysr(e)?NaN:r===e?y2e:0}bsr.exports=b2e});var Osr=s((AIe,Nsr)=>{"use strict";var w2e=_(),E2e=I(),Esr=E();function N2e(r){if(Esr(r))return w2e(NaN);return e;function e(t){return Esr(t)?NaN:t===r?E2e:0}}Nsr.exports=N2e});var _sr=s((_Ie,Asr)=>{"use strict";var O2e=b(),Ssr=wsr(),S2e=Osr();O2e(Ssr,"factory",S2e);Asr.exports=Ssr});var Lsr=s((TIe,Isr)=>{"use strict";var A2e=_(),_2e=_sr().factory,yc=E(),T2e=V(),I2e=sr(),Tsr=H(),L2e=st();function R2e(r,e){var t,i,n;if(yc(r)||yc(e)||e<0)return A2e(NaN);if(e===0)return _2e(r);return t=Tsr(e,2),i=1/T2e(t*L2e),n=-1/(2*t),a;function a(u){return yc(u)?NaN:i*I2e(n*Tsr(u-r,2))}}Isr.exports=R2e});var Fsr=s((IIe,Psr)=>{"use strict";var P2e=b(),Rsr=qsr(),F2e=Lsr();P2e(Rsr,"factory",F2e);Psr.exports=Rsr});var ksr=s((LIe,Bsr)=>{"use strict";var Msr=E();function M2e(r,e){return Msr(r)||Msr(e)||e<=0?NaN:0}Bsr.exports=M2e});var Csr=s((RIe,jsr)=>{"use strict";var B2e=ksr();jsr.exports=B2e});var Gsr=s((PIe,Vsr)=>{"use strict";var Usr=E();function k2e(r,e){return Usr(r)||Usr(e)||e<=0?NaN:e}Vsr.exports=k2e});var Hsr=s((FIe,xsr)=>{"use strict";var j2e=Gsr();xsr.exports=j2e});var zsr=s((MIe,Wsr)=>{"use strict";var Dsr=E();function C2e(r,e){return Dsr(r)||Dsr(e)||e<=0?NaN:e*e}Wsr.exports=C2e});var Jsr=s((BIe,Xsr)=>{"use strict";var U2e=zsr();Xsr.exports=U2e});var $sr=s((kIe,Ysr)=>{"use strict";var Lr=rr(),V2e=Dar(),G2e=Yar(),x2e=r0r(),H2e=_0r(),D2e=X0r(),W2e=Q0r(),z2e=isr(),X2e=fsr(),J2e=msr(),Y2e=Fsr(),$2e=nf(),Z2e=Csr(),Q2e=Hsr(),K2e=Jsr();function r3e(r){return Lr(r,"cdf",V2e),Lr(r,"entropy",G2e),Lr(r,"kurtosis",x2e),Lr(r,"logcdf",H2e),Lr(r,"logpdf",D2e),Lr(r,"mean",W2e),Lr(r,"median",z2e),Lr(r,"mgf",X2e),Lr(r,"mode",J2e),Lr(r,"pdf",Y2e),Lr(r,"quantile",$2e),Lr(r,"skewness",Z2e),Lr(r,"stdev",Q2e),Lr(r,"variance",K2e),r}Ysr.exports=r3e});var Qsr=s((jIe,Zsr)=>{"use strict";var e3e=rr(),t3e=$sr();function i3e(r){return e3e(r,"normal",t3e({})),r}Zsr.exports=i3e});var rur=s((CIe,Ksr)=>{"use strict";var ga=rr(),n3e=far(),a3e=yar().ndarray,s3e=Tar().ndarray,u3e=jar().ndarray,o3e=Qsr();function v3e(r){return ga(r,"bartlettTest",n3e),ga(r,"cumax",a3e),ga(r,"max",s3e),ga(r,"mskmax",u3e),ga(r,"dists",o3e({})),r}Ksr.exports=v3e});var tur=s((UIe,eur)=>{"use strict";var f3e=Q().isPrimitive,c3e=y();function l3e(r){return e;function e(t){if(!f3e(t))throw new TypeError(c3e("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}eur.exports=l3e});var nur=s((VIe,iur)=>{"use strict";var p3e=tur();iur.exports=p3e});var our=s((GIe,uur)=>{"use strict";var aur=Q().isPrimitive,sur=y();function g3e(r){return e;function e(t,i){if(!aur(t))throw new TypeError(sur("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!aur(i))throw new TypeError(sur("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}uur.exports=g3e});var fur=s((xIe,vur)=>{"use strict";var m3e=our();vur.exports=m3e});var lur=s((HIe,cur)=>{"use strict";var bc=Q().isPrimitive,wc=y();function d3e(r){return e;function e(t,i,n){if(!bc(t))throw new TypeError(wc("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!bc(i))throw new TypeError(wc("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!bc(n))throw new TypeError(wc("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}cur.exports=d3e});var gur=s((DIe,pur)=>{"use strict";var h3e=lur();pur.exports=h3e});var dur=s((WIe,mur)=>{"use strict";var Ec=rr(),q3e=nur(),y3e=fur(),b3e=gur();function w3e(r){return Ec(r,"s_o",q3e),Ec(r,"ss_o",y3e),Ec(r,"sss_o",b3e),r}mur.exports=w3e});var qur=s((zIe,hur)=>{"use strict";function E3e(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}hur.exports=E3e});var Yu=s((XIe,yur)=>{"use strict";var N3e=qur();yur.exports=N3e});var wur=s((JIe,bur)=>{"use strict";function O3e(r){return r.toLowerCase()}bur.exports=O3e});var cn=s((YIe,Eur)=>{"use strict";var S3e=wur();Eur.exports=S3e});var Our=s(($Ie,Nur)=>{"use strict";var A3e=Yu(),_3e=cn(),$u=ut(),T3e=ft(),I3e=/\s+/g,L3e=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,R3e=/(?:\s|^)([^\s]+)(?=\s|$)/g,P3e=/([a-z0-9])([A-Z])/g;function F3e(r,e,t){return e=_3e(e),t===0?e:A3e(e)}function M3e(r){return r=$u(r,L3e," "),r=$u(r,I3e," "),r=$u(r,P3e,"$1 $2"),r=T3e(r),$u(r,R3e,F3e)}Nur.exports=M3e});var Aur=s((ZIe,Sur)=>{"use strict";var B3e=Our();Sur.exports=B3e});var Tur=s((QIe,_ur)=>{"use strict";var k3e=Q().isPrimitive,j3e=y(),C3e=Aur();function U3e(r){if(!k3e(r))throw new TypeError(j3e("invalid argument. First argument must be a string. Value: `%s`.",r));return C3e(r)}_ur.exports=U3e});var Lur=s((KIe,Iur)=>{"use strict";var V3e=Tur();Iur.exports=V3e});var Pur=s((rLe,Rur)=>{"use strict";var G3e=Q().isPrimitive,x3e=y(),H3e=Yu();function D3e(r){if(!G3e(r))throw new TypeError(x3e("invalid argument. First argument must be a string. Value: `%s`.",r));return H3e(r)}Rur.exports=D3e});var Mur=s((eLe,Fur)=>{"use strict";var W3e=Pur();Fur.exports=W3e});var kur=s((tLe,Bur)=>{"use strict";function z3e(r){return r.toUpperCase()}Bur.exports=z3e});var Cur=s((iLe,jur)=>{"use strict";var X3e=kur();jur.exports=X3e});var Vur=s((nLe,Uur)=>{"use strict";var J3e=Cur(),Nc=ut(),Y3e=ft(),$3e=/\s+/g,Z3e=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Q3e=/([a-z0-9])([A-Z])/g;function K3e(r){return r=Nc(r,Z3e," "),r=Nc(r,Q3e,"$1 $2"),r=Y3e(r),r=Nc(r,$3e,"_"),J3e(r)}Uur.exports=K3e});var xur=s((aLe,Gur)=>{"use strict";var rve=Vur();Gur.exports=rve});var Dur=s((sLe,Hur)=>{"use strict";var eve=Q().isPrimitive,tve=y(),ive=xur();function nve(r){if(!eve(r))throw new TypeError(tve("invalid argument. Must provide a string. Value: `%s`.",r));return ive(r)}Hur.exports=nve});var zur=s((uLe,Wur)=>{"use strict";var ave=Dur();Wur.exports=ave});var Jur=s((oLe,Xur)=>{"use strict";var sve=cn(),Oc=ut(),uve=ft(),ove=/\s+/g,vve=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,fve=/([a-z0-9])([A-Z])/g;function cve(r){return r=Oc(r,vve," "),r=Oc(r,fve,"$1 $2"),r=uve(r),r=Oc(r,ove,"-"),sve(r)}Xur.exports=cve});var $ur=s((vLe,Yur)=>{"use strict";var lve=Jur();Yur.exports=lve});var Qur=s((fLe,Zur)=>{"use strict";var pve=Q().isPrimitive,gve=y(),mve=$ur();function dve(r){if(!pve(r))throw new TypeError(gve("invalid argument. Must provide a string. Value: `%s`.",r));return mve(r)}Zur.exports=dve});var ror=s((cLe,Kur)=>{"use strict";var hve=Qur();Kur.exports=hve});var tor=s((lLe,eor)=>{"use strict";var qve=Q().isPrimitive,yve=y(),bve=cn();function wve(r){if(!qve(r))throw new TypeError(yve("invalid argument. Must provide a string. Value: `%s`.",r));return bve(r)}eor.exports=wve});var nor=s((pLe,ior)=>{"use strict";var Eve=tor();ior.exports=Eve});var sor=s((gLe,aor)=>{"use strict";var Nve=Yu(),Ove=cn(),Zu=ut(),Sve=ft(),Ave=/\s+/g,_ve=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Tve=/(?:\s|^)([^\s]+)(?=\s|$)/g,Ive=/([a-z0-9])([A-Z])/g;function Lve(r,e){return Nve(Ove(e))}function Rve(r){return r=Zu(r,_ve," "),r=Zu(r,Ave," "),r=Zu(r,Ive,"$1 $2"),r=Sve(r),Zu(r,Tve,Lve)}aor.exports=Rve});var oor=s((mLe,uor)=>{"use strict";var Pve=sor();uor.exports=Pve});var cor=s((dLe,vor)=>{"use strict";var Fve=Q().isPrimitive,Mve=y(),Bve=oor();function kve(r){if(!Fve(r))throw new TypeError(Mve("invalid argument. First argument must be a string. Value: `%s`.",r));return Bve(r)}vor.exports=kve});var por=s((hLe,lor)=>{"use strict";var jve=cor();lor.exports=jve});var mor=s((qLe,gor)=>{"use strict";var Cve=cn(),Sc=ut(),Uve=ft(),Vve=/\s+/g,Gve=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,xve=/([a-z0-9])([A-Z])/g;function Hve(r){return r=Sc(r,Gve," "),r=Sc(r,xve,"$1 $2"),r=Uve(r),r=Sc(r,Vve,"_"),Cve(r)}gor.exports=Hve});var hor=s((yLe,dor)=>{"use strict";var Dve=mor();dor.exports=Dve});var yor=s((bLe,qor)=>{"use strict";var Wve=Q().isPrimitive,zve=y(),Xve=hor();function Jve(r){if(!Wve(r))throw new TypeError(zve("invalid argument. Must provide a string. Value: `%s`.",r));return Xve(r)}qor.exports=Jve});var wor=s((wLe,bor)=>{"use strict";var Yve=yor();bor.exports=Yve});var Oor=s((ELe,Nor)=>{"use strict";var $ve=L(),Eor=S(),Zve=gr().isPrimitive,Qve=Q().isPrimitive,Ac=y();function Kve(r,e){return $ve(e)?Eor(e,"flags")&&(r.flags=e.flags,!Qve(r.flags))?new TypeError(Ac("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Eor(e,"capture")&&(r.capture=e.capture,!Zve(r.capture))?new TypeError(Ac("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Ac("invalid argument. Options argument must be an object. Value: `%s`.",e))}Nor.exports=Kve});var Qu=s((NLe,Aor)=>{"use strict";var rfe=Oor(),Sor=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function efe(r){var e,t;if(arguments.length>0){if(e={},t=rfe(e,r),t)throw t;return e.capture?new RegExp("("+Sor+")",e.flags):new RegExp(Sor,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}Aor.exports=efe});var Tor=s((OLe,_or)=>{"use strict";var tfe=Qu(),ife=tfe({capture:!0});_or.exports=ife});var Lor=s((SLe,Ior)=>{"use strict";var nfe=Qu(),afe=nfe();Ior.exports=afe});var For=s((ALe,Por)=>{"use strict";var Ror=b(),_c=Qu(),sfe=Tor(),ufe=Lor();Ror(_c,"REGEXP",ufe);Ror(_c,"REGEXP_CAPTURE",sfe);Por.exports=_c});var Bor=s((_Le,Mor)=>{"use strict";var ofe=For().REGEXP;function vfe(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),ofe.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}Mor.exports=vfe});var jor=s((TLe,kor)=>{"use strict";var ffe=Bor();kor.exports=ffe});var Uor=s((ILe,Cor)=>{"use strict";var cfe=Q().isPrimitive,lfe=y(),pfe=jor();function gfe(r){if(!cfe(r))throw new TypeError(lfe("invalid argument. Must provide a string. Value: `%s`.",r));return pfe(r)}Cor.exports=gfe});var Gor=s((LLe,Vor)=>{"use strict";var mfe=Uor();Vor.exports=mfe});var Hor=s((RLe,xor)=>{"use strict";function dfe(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}xor.exports=dfe});var Wor=s((PLe,Dor)=>{"use strict";var hfe=Hor();Dor.exports=hfe});var Xor=s((FLe,zor)=>{"use strict";var qfe=Q().isPrimitive,yfe=y(),bfe=Wor();function wfe(r){if(!qfe(r))throw new TypeError(yfe("invalid argument. First argument must be a string. Value: `%s`.",r));return bfe(r)}zor.exports=wfe});var Yor=s((MLe,Jor)=>{"use strict";var Efe=Xor();Jor.exports=Efe});var Zor=s((BLe,$or)=>{"use strict";var Nfe=Q().isPrimitive,Ofe=y();function Sfe(r){if(!Nfe(r))throw new TypeError(Ofe("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}$or.exports=Sfe});var Kor=s((kLe,Qor)=>{"use strict";var Afe=Zor();Qor.exports=Afe});var e1r=s((jLe,r1r)=>{"use strict";var ve=rr(),_fe=Lur(),Tfe=Mur(),Ife=zur(),Lfe=ror(),Rfe=nor(),Pfe=por(),Ffe=wor(),Mfe=Gor(),Bfe=Yor(),kfe=Kor();function jfe(r){return ve(r,"camelcase",_fe),ve(r,"capitalize",Tfe),ve(r,"constantcase",Ife),ve(r,"kebabcase",Lfe),ve(r,"lowercase",Rfe),ve(r,"pascalcase",Pfe),ve(r,"snakecase",Ffe),ve(r,"startcase",Mfe),ve(r,"uncapitalize",Bfe),ve(r,"uppercase",kfe),r}r1r.exports=jfe});var i1r=s((CLe,t1r)=>{"use strict";var Cfe=rr(),Ufe=dur(),Vfe=e1r();function Gfe(r){return Cfe(r,"tools",Ufe({})),r=Vfe(r),r}t1r.exports=Gfe});var a1r=s((ULe,n1r)=>{"use strict";var fe=rr(),xfe=rh(),Hfe=hb(),Dfe=Ab(),Wfe=NN(),zfe=IF(),Xfe=hU(),Jfe=eer(),Yfe=cer(),$fe=rur(),Zfe=i1r();function Qfe(){var r={};return fe(r,"array",xfe({})),fe(r,"assert",Hfe({})),fe(r,"blas",Dfe({})),fe(r,"datasets",Wfe({})),fe(r,"math",zfe({})),fe(r,"ndarray",Xfe({})),fe(r,"random",Jfe({})),fe(r,"simulate",Yfe({})),fe(r,"stats",$fe({})),fe(r,"string",Zfe({})),r}n1r.exports=Qfe});var u1r=s((VLe,s1r)=>{"use strict";var Kfe=b(),Tc=a1r();Kfe(Tc,"CACHED",Tc());s1r.exports=Tc});var ece=s((GLe,o1r)=>{var rce=u1r().CACHED;o1r.exports=rce});return ece();})();
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
* STDLIB_NDSLICE( A1:A100, '::-1,...,1::-2' )
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
	var arr;
	var len;
	var tmp;
	var buf;
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
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'strict' || o === 'view' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate strict/view/layout values
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( x, 'First argument' );
	// Resolve the default presentation layout based on the presentation layout of the input array...
	if ( opts.as === null ) {
		if ( x.length === 1 && x[ 0 ].length > 1 ) {
			opts.as = 'row';
		} else {
			opts.as = 'column';
		}
	}
	x = ns.array.flatten2d( x );
	// Resolve ndarray meta data...
	ns.assert.isString( x[ 0 ], 'First range element' );
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
		} else if ( o === 'dtype' ) {
			i += 1;
			dtype = x[ i ];
		} else if ( o === 'data' ) {
			i += 1;
			break;
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
	if ( strides.length !== ndims ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Number of strides does not match the number of dimensions.' );
	}
	if ( !ns.assert.base.isNonNegativeInteger( offset ) ) {
		throw new TypeError( 'invalid argument. First argument is not a valid ndarray. Offset must be a nonnegative integer.' );
	}
	// TODO: validate order
	// TODO: validate dtype
	ns.assert.isString( slice, 'Second argument' );
	s = ns.ndarray.seq2multislice( slice, shape, true );
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
			s = ns.ndarray.seq2multislice( slice, shape, false );
		}
	}
	// Calculate the header length: 6 field names + 2 fields having length rank(shape) + 3 fields having one value
	hlen = 6 + (2*ndims) + (3*1);
	// Create an ndarray view, adjusting the offset to account for the header info:
	arr = new ns.ndarray.ndarray( 'generic', x, shape, strides, offset+hlen, order );
	// Create the slice:
	vx = ns.ndarray.slice( arr, s, opts.strict, false );
	shape = vx.shape;
	ndims = shape.length;
	strides = vx.strides;
	order = vx.order;
	// Calculate the header length for the slice:
	vhlen = 6 + (2*ndims) + (3*1);
	// Revert the header info offset adjustment:
	offset = vx.offset - hlen;
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		len = x.length;
		buf = x;
		// Check whether the number of dimensions was reduced and, if so, shift the data to account for less header info...
		if ( vhlen !== hlen ) {
			len -= hlen - vhlen;
			// Because the meta data does not consume as much memory, we need to shift the data up to ensure a compact representation...
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
		len = vhlen + ns.ndarray.numel( vx.length );
		buf = ns.array.zeros( len );
		// When returning a view, return elements in array iteration order...
		strides = ns.ndarray.shape2strides( shape, order );
		tmp = new ns.ndarray.ndarray( 'generic', buf, shape, strides, vhlen, order );
		for ( i = 0; i < vx.length; i++ ) {
			tmp.iset( i, vx.iget( i ) );
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = 0;
	}
	// Set the header info...
	ih = 0;
	buf[ ih ] = 'shape';
	ih += 1;
	for ( i = 0; i < ndims; i++ ) {
		buf[ ih ] = shape[ i ];
		ih += 1;
	}
	buf[ ih ] = 'strides';
	ih += 1;
	for ( i = 0; i < ndims; i++ ) {
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
	buf[ ih ] = dtype;
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
	// 6 field names + 2 fields having length rank(shape) + 3 fields having one value + the number of array elements
	len = 6 + (2*ndims) + (3*1) + ns.ndarray.numel( shape );
	arr = ns.array.zeros( len );
	offset = 0;
	arr[ offset ] = 'shape';
	offset += 1;
	for ( i = 0; i < ndims; i++ ) {
		arr[ offset ] = shape[ i ];
		offset += 1;
	}
	arr[ offset ] = 'strides';
	offset += 1;
	strides = ns.ndarray.shape2strides( shape, opts.order );
	for ( i = 0; i < ndims; i++ ) {
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
	arr[ offset ] = 'data';
	if ( opts.as === 'row' ) {
		return [ arr ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( arr, [ len, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
	if ( opts.strides === null ) {
		opts.strides = ns.ndarray.shape2strides( opts.shape, opts.order );
	} else {
		ns.assert.isRange1d( opts.strides, 'Strides argument' );
		opts.strides = ns.array.flatten2d( opts.strides );
		ns.assert.isValidStrides( opts.strides, 'Strides argument' );
	}
	if ( opts.offset === null ) {
		opts.offset = ns.ndarray.strides2offset( opts.shape, opts.strides );
	} else {
		ns.assert.isNonNegativeInteger( opts.offset, 'Offset argument' );
	}
	len = data.length * data[ 0 ].length;
	ns.assert.isBufferLengthCompatible( len, opts.shape, opts.strides, opts.offset ); 
	ndims = opts.shape.length;
	// TODO: determine a means to abstract this logic to a helper utility package
	// Header: 6 field names + 2 fields having length rank(shape) + 3 fields having one value
	len = 6 + (2*ndims) + (3*1) + len;
	arr = ns.array.zeros( len );
	ix = 0;
	arr[ ix ] = 'shape';
	ix += 1;
	for ( i = 0; i < ndims; i++ ) {
		arr[ ix ] = opts.shape[ i ];
		ix += 1;
	}
	arr[ ix ] = 'strides';
	ix += 1;
	for ( i = 0; i < ndims; i++ ) {
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
	arr[ ix ] = 'data';
	ix += 1;
	arr = ns.array.flatten2d.assign( data, arr, 1, ix );
	if ( opts.as === 'row' ) {
		return [ arr ];
	}
	// opts.as === 'column'
	return ns.ndarray.toArray( arr, [ len, 1 ], [ 1, 1 ], 0, 'row-major' ); // TODO: replace with @stdlib/array/base/equivalent
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
