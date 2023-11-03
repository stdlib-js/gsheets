/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Dc=s((B6e,xc)=>{"use strict";var p2r=typeof Object.defineProperty=="function"?Object.defineProperty:null;xc.exports=p2r});var Wc=s((j6e,Hc)=>{"use strict";var g2r=Dc();function m2r(){try{return g2r({},"x",{}),!0}catch{return!1}}Hc.exports=m2r});var Xc=s((k6e,zc)=>{"use strict";var d2r=Object.defineProperty;zc.exports=d2r});var oo=s((C6e,Jc)=>{"use strict";function h2r(r){return typeof r=="number"}Jc.exports=h2r});var vo=s((V6e,$c)=>{"use strict";function y2r(r){return r[0]==="-"}function Yc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function q2r(r,e,t){var i=!1,n=e-r.length;return n<0||(y2r(r)&&(i=!0,r=r.substr(1)),r=t?r+Yc(n):Yc(n)+r,i&&(r="-"+r)),r}$c.exports=q2r});var rl=s((U6e,Kc)=>{"use strict";var b2r=oo(),Zc=vo(),w2r=String.prototype.toLowerCase,Qc=String.prototype.toUpperCase;function E2r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!b2r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Zc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Zc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Qc.call(r.specifier)?Qc.call(t):w2r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Kc.exports=E2r});var tl=s((G6e,el)=>{"use strict";function N2r(r){return typeof r=="string"}el.exports=N2r});var al=s((x6e,nl)=>{"use strict";var S2r=oo(),O2r=Math.abs,A2r=String.prototype.toLowerCase,il=String.prototype.toUpperCase,Vt=String.prototype.replace,_2r=/e\+(\d)$/,T2r=/e-(\d)$/,I2r=/^(\d+)$/,R2r=/^(\d+)e/,L2r=/\.0$/,P2r=/\.0*e/,F2r=/(\..*[^0])0*e/;function M2r(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!S2r(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":O2r(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Vt.call(t,F2r,"$1e"),t=Vt.call(t,P2r,"e"),t=Vt.call(t,L2r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Vt.call(t,_2r,"e+0$1"),t=Vt.call(t,T2r,"e-0$1"),r.alternate&&(t=Vt.call(t,I2r,"$1."),t=Vt.call(t,R2r,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===il.call(r.specifier)?il.call(t):A2r.call(t),t}nl.exports=M2r});var ol=s((D6e,ul)=>{"use strict";function sl(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function B2r(r,e,t){var i=e-r.length;return i<0||(r=t?r+sl(i):sl(i)+r),r}ul.exports=B2r});var fl=s((H6e,vl)=>{"use strict";var j2r=rl(),k2r=tl(),C2r=al(),V2r=ol(),U2r=vo(),G2r=String.fromCharCode,Sa=isNaN,x2r=Array.isArray;function D2r(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H2r(r){var e,t,i,n,a,u,o,v,f;if(!x2r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],k2r(i))u+=i;else{if(e=i.precision!==void 0,i=D2r(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Sa(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Sa(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=j2r(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Sa(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Sa(a)?String(i.arg):G2r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=C2r(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=U2r(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=V2r(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}vl.exports=H2r});var ll=s((W6e,cl)=>{"use strict";var W2r=fl();cl.exports=W2r});var gl=s((z6e,pl)=>{"use strict";var Oa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function z2r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function X2r(r){var e,t,i,n;for(t=[],n=0,i=Oa.exec(r);i;)e=r.slice(n,Oa.lastIndex-i[0].length),e.length&&t.push(e),t.push(z2r(i)),n=Oa.lastIndex,i=Oa.exec(r);return e=r.slice(n),e.length&&t.push(e),t}pl.exports=X2r});var dl=s((X6e,ml)=>{"use strict";var J2r=gl();ml.exports=J2r});var yl=s((J6e,hl)=>{"use strict";function Y2r(r){return typeof r=="string"}hl.exports=Y2r});var wl=s((Y6e,bl)=>{"use strict";var $2r=ll(),Z2r=dl(),Q2r=yl();function ql(r){var e,t,i;if(!Q2r(r))throw new TypeError(ql("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Z2r(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return $2r.apply(null,t)}bl.exports=ql});var q=s(($6e,El)=>{"use strict";var K2r=wl();El.exports=K2r});var Tl=s((Z6e,_l)=>{"use strict";var Nl=q(),vi=Object.prototype,Sl=vi.toString,Ol=vi.__defineGetter__,Al=vi.__defineSetter__,r3r=vi.__lookupGetter__,e3r=vi.__lookupSetter__;function t3r(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||Sl.call(r)==="[object Array]")throw new TypeError(Nl("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Sl.call(t)==="[object Array]")throw new TypeError(Nl("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(r3r.call(r,e)||e3r.call(r,e)?(i=r.__proto__,r.__proto__=vi,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ol&&Ol.call(r,e,t.get),u&&Al&&Al.call(r,e,t.set),r}_l.exports=t3r});var Ze=s((Q6e,Il)=>{"use strict";var i3r=Wc(),n3r=Xc(),a3r=Tl(),fo;i3r()?fo=n3r:fo=a3r;Il.exports=fo});var Ll=s((K6e,Rl)=>{"use strict";var s3r=Ze();function u3r(r,e,t){s3r(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Rl.exports=u3r});var b=s((r4e,Pl)=>{"use strict";var o3r=Ll();Pl.exports=o3r});var Ml=s((e4e,Fl)=>{"use strict";var v3r=Ze();function f3r(r,e,t){v3r(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Fl.exports=f3r});var rr=s((t4e,Bl)=>{"use strict";var c3r=Ml();Bl.exports=c3r});var kl=s((i4e,jl)=>{"use strict";function l3r(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}jl.exports=l3r});var Aa=s((n4e,Cl)=>{"use strict";var p3r=kl();Cl.exports=p3r});var Ul=s((a4e,Vl)=>{"use strict";function g3r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Vl.exports=g3r});var _a=s((s4e,Gl)=>{"use strict";var m3r=Ul();Gl.exports=m3r});var Dl=s((u4e,xl)=>{"use strict";var d3r=_a();function h3r(r){return d3r(0,r)}xl.exports=h3r});var Qe=s((o4e,Hl)=>{"use strict";var y3r=Dl();Hl.exports=y3r});var Xl=s((v4e,zl)=>{"use strict";var dn=Aa(),q3r=Qe(),Wl=q();function b3r(r,e,t){var i,n,a,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(a=q3r(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],n=t[f],n!==0&&n<v)throw new Error(Wl("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",dn(e).join(", "),dn(t).join(", "),f));if(v===n)a[f]=1;else if(v===1)a[f]=0;else throw new Error(Wl("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",dn(e).join(", "),dn(t).join(", "),f))}return{ref:r,data:i,shape:dn(t),strides:a}}zl.exports=b3r});var co=s((f4e,Jl)=>{"use strict";var w3r=Xl();Jl.exports=w3r});var Zl=s((c4e,$l)=>{"use strict";var Yl=co();function E3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,S,F,A,H,K;if(N=e[2],o=N[1],v=N[0],!(o<=0||v<=0))for(F=Yl(r[0],e[0],N),A=F.data,S=F.strides,i=S[1],n=S[0],F=Yl(r[1],e[1],N),H=F.data,S=F.strides,a=S[1],u=S[0],K=r[2],p=0,h=0,c=0;c<v;c++){for(l=0,g=0,d=A[p],m=H[h],y=K[c],f=0;f<o;f++)y[f]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}$l.exports=E3r});var lo=s((l4e,Ql)=>{"use strict";var N3r=Zl();Ql.exports=N3r});var r6=s((p4e,Kl)=>{"use strict";var po=co();function S3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,S,F,A,H,K,G,Fr,Mr,or,Ct,Gc;if(K=e[3],f=K[1],c=K[0],!(f<=0||c<=0))for(Fr=po(r[0],e[0],K),Mr=Fr.data,G=Fr.strides,i=G[1],n=G[0],Fr=po(r[1],e[1],K),or=Fr.data,G=Fr.strides,a=G[1],u=G[0],Fr=po(r[2],e[2],K),Ct=Fr.data,G=Fr.strides,o=G[1],v=G[0],Gc=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,y=0,S=Mr[h],F=or[m],A=Ct[N],H=Gc[p],l=0;l<f;l++)H[l]=t(S[g],F[d],A[y]),g+=i,d+=a,y+=o;h+=n,m+=u,N+=v}}Kl.exports=S3r});var go=s((g4e,e6)=>{"use strict";var O3r=r6();e6.exports=O3r});var i6=s((m4e,t6)=>{"use strict";function A3r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}t6.exports=A3r});var Ta=s((d4e,n6)=>{"use strict";var _3r=i6();n6.exports=_3r});var s6=s((h4e,a6)=>{"use strict";var T3r=_a();function I3r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(T3r(r,i));return t}a6.exports=I3r});var Ia=s((y4e,u6)=>{"use strict";var R3r=s6();u6.exports=R3r});var v6=s((q4e,o6)=>{"use strict";function L3r(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}o6.exports=L3r});var c6=s((b4e,f6)=>{"use strict";var P3r=v6();f6.exports=P3r});var p6=s((w4e,l6)=>{"use strict";function F3r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}l6.exports=F3r});var m6=s((E4e,g6)=>{"use strict";function M3r(r,e,t,i){var n,a,u,o,v,f;for(a=r.length,u=r[0].length,n=i,v=0;v<a;v++)for(o=r[v],f=0;f<u;f++)e[n]=o[f],n+=t;return e}g6.exports=M3r});var Ra=s((N4e,h6)=>{"use strict";var B3r=b(),d6=p6(),j3r=m6();B3r(d6,"assign",j3r);h6.exports=d6});var q6=s((S4e,y6)=>{"use strict";var k3r=/./;y6.exports=k3r});var mo=s((O4e,b6)=>{"use strict";function C3r(r){return typeof r=="boolean"}b6.exports=C3r});var E6=s((A4e,w6)=>{"use strict";function V3r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}w6.exports=V3r});var S6=s((_4e,N6)=>{"use strict";var U3r=E6();N6.exports=U3r});var A6=s((T4e,O6)=>{"use strict";var G3r=S6(),x3r=G3r();function D3r(){return x3r&&typeof Symbol.toStringTag=="symbol"}O6.exports=D3r});var fi=s((I4e,_6)=>{"use strict";var H3r=A6();_6.exports=H3r});var ho=s((R4e,T6)=>{"use strict";var W3r=Object.prototype.toString;T6.exports=W3r});var R6=s((L4e,I6)=>{"use strict";var z3r=ho();function X3r(r){return z3r.call(r)}I6.exports=X3r});var P6=s((P4e,L6)=>{"use strict";var J3r=Object.prototype.hasOwnProperty;function Y3r(r,e){return r==null?!1:J3r.call(r,e)}L6.exports=Y3r});var O=s((F4e,F6)=>{"use strict";var $3r=P6();F6.exports=$3r});var B6=s((M4e,M6)=>{"use strict";var Z3r=typeof Symbol=="function"?Symbol:void 0;M6.exports=Z3r});var yo=s((B4e,j6)=>{"use strict";var Q3r=B6();j6.exports=Q3r});var V6=s((j4e,C6)=>{"use strict";var k6=yo(),K3r=typeof k6=="function"?k6.toStringTag:"";C6.exports=K3r});var G6=s((k4e,U6)=>{"use strict";var rvr=O(),hn=V6(),qo=ho();function evr(r){var e,t,i;if(r==null)return qo.call(r);t=r[hn],e=rvr(r,hn);try{r[hn]=void 0}catch{return qo.call(r)}return i=qo.call(r),e?r[hn]=t:delete r[hn],i}U6.exports=evr});var er=s((C4e,x6)=>{"use strict";var tvr=fi(),ivr=R6(),nvr=G6(),bo;tvr()?bo=nvr:bo=ivr;x6.exports=bo});var H6=s((V4e,D6)=>{"use strict";var avr=Boolean;D6.exports=avr});var wo=s((U4e,W6)=>{"use strict";var svr=H6();W6.exports=svr});var X6=s((G4e,z6)=>{"use strict";var uvr=Boolean.prototype.toString;z6.exports=uvr});var Y6=s((x4e,J6)=>{"use strict";var ovr=X6();function vvr(r){try{return ovr.call(r),!0}catch{return!1}}J6.exports=vvr});var Eo=s((D4e,$6)=>{"use strict";var fvr=fi(),cvr=er(),lvr=wo(),pvr=Y6(),gvr=fvr();function mvr(r){return typeof r=="object"?r instanceof lvr?!0:gvr?pvr(r):cvr(r)==="[object Boolean]":!1}$6.exports=mvr});var Q6=s((H4e,Z6)=>{"use strict";var dvr=mo(),hvr=Eo();function yvr(r){return dvr(r)||hvr(r)}Z6.exports=yvr});var cr=s((W4e,r4)=>{"use strict";var K6=b(),No=Q6(),qvr=mo(),bvr=Eo();K6(No,"isPrimitive",qvr);K6(No,"isObject",bvr);r4.exports=No});var t4=s((z4e,e4)=>{"use strict";function wvr(){return new Function("return this;")()}e4.exports=wvr});var n4=s((X4e,i4)=>{"use strict";var Evr=typeof self=="object"?self:null;i4.exports=Evr});var s4=s((J4e,a4)=>{"use strict";var Nvr=typeof window=="object"?window:null;a4.exports=Nvr});var o4=s((Y4e,u4)=>{"use strict";var Svr=typeof globalThis=="object"?globalThis:null;u4.exports=Svr});var So=s(($4e,l4)=>{"use strict";var Ovr=cr().isPrimitive,Avr=q(),_vr=t4(),v4=n4(),f4=s4(),c4=o4();function Tvr(r){if(arguments.length){if(!Ovr(r))throw new TypeError(Avr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _vr()}if(c4)return c4;if(v4)return v4;if(f4)return f4;throw new Error("unexpected error. Unable to resolve global object.")}l4.exports=Tvr});var m4=s((Z4e,g4)=>{"use strict";var Ivr=So(),p4=Ivr(),Rvr=p4.document&&p4.document.childNodes;g4.exports=Rvr});var h4=s((Q4e,d4)=>{"use strict";var Lvr=Int8Array;d4.exports=Lvr});var q4=s((K4e,y4)=>{"use strict";var Pvr=q6(),Fvr=m4(),Mvr=h4();function Bvr(){return typeof Pvr=="function"||typeof Mvr=="object"||typeof Fvr=="function"}y4.exports=Bvr});var Oo=s((r8e,b4)=>{"use strict";function jvr(){return/^\s*function\s*([^(]*)/i}b4.exports=jvr});var E4=s((e8e,w4)=>{"use strict";var kvr=Oo(),Cvr=kvr();w4.exports=Cvr});var Ao=s((t8e,S4)=>{"use strict";var Vvr=b(),N4=Oo(),Uvr=E4();Vvr(N4,"REGEXP",Uvr);S4.exports=N4});var A4=s((i8e,O4)=>{"use strict";var Gvr=er(),_o;function xvr(r){return Gvr(r)==="[object Array]"}Array.isArray?_o=Array.isArray:_o=xvr;O4.exports=_o});var dr=s((n8e,_4)=>{"use strict";var Dvr=A4();_4.exports=Dvr});var I4=s((a8e,T4)=>{"use strict";var Hvr=dr(),Wvr=q();function zvr(r){if(typeof r!="function")throw new TypeError(Wvr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Hvr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}T4.exports=zvr});var L4=s((s8e,R4)=>{"use strict";var Xvr=I4();R4.exports=Xvr});var F4=s((u8e,P4)=>{"use strict";function Jvr(r){return r!==null&&typeof r=="object"}P4.exports=Jvr});var Io=s((o8e,M4)=>{"use strict";var Yvr=b(),$vr=L4(),To=F4(),Zvr=$vr(To);Yvr(To,"isObjectLikeArray",Zvr);M4.exports=To});var j4=s((v8e,B4)=>{"use strict";var Qvr=Io();function Kvr(r){return Qvr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}B4.exports=Kvr});var Ut=s((f8e,k4)=>{"use strict";var rfr=j4();k4.exports=rfr});var V4=s((c8e,C4)=>{"use strict";var efr=er(),tfr=Ao().REGEXP,ifr=Ut();function nfr(r){var e,t,i;if(t=efr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=tfr.exec(i.toString()),e)return e[1]}return ifr(r)?"Buffer":t}C4.exports=nfr});var pe=s((l8e,U4)=>{"use strict";var afr=V4();U4.exports=afr});var x4=s((p8e,G4)=>{"use strict";var sfr=pe();function ufr(r){var e;return r===null?"null":(e=typeof r,e==="object"?sfr(r).toLowerCase():e)}G4.exports=ufr});var H4=s((g8e,D4)=>{"use strict";var ofr=pe();function vfr(r){return ofr(r).toLowerCase()}D4.exports=vfr});var La=s((m8e,W4)=>{"use strict";var ffr=q4(),cfr=x4(),lfr=H4(),pfr=ffr()?lfr:cfr;W4.exports=pfr});var X4=s((d8e,z4)=>{"use strict";var gfr=La();function mfr(r){return gfr(r)==="function"}z4.exports=mfr});var I=s((h8e,J4)=>{"use strict";var dfr=X4();J4.exports=dfr});var $4=s((y8e,Y4)=>{"use strict";var hfr=Math.floor;Y4.exports=hfr});var z=s((q8e,Z4)=>{"use strict";var yfr=$4();Z4.exports=yfr});var K4=s((b8e,Q4)=>{"use strict";var qfr=z();function bfr(r){return qfr(r)===r}Q4.exports=bfr});var yr=s((w8e,r8)=>{"use strict";var wfr=K4();r8.exports=wfr});var t8=s((E8e,e8)=>{"use strict";var Efr=9007199254740991;e8.exports=Efr});var n8=s((N8e,i8)=>{"use strict";var Nfr=yr(),Sfr=t8();function Ofr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Nfr(r.length)&&r.length>=0&&r.length<=Sfr}i8.exports=Ofr});var Br=s((S8e,a8)=>{"use strict";var Afr=n8();a8.exports=Afr});var u8=s((O8e,s8)=>{"use strict";var _fr=I();function Tfr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&_fr(r.next)}s8.exports=Tfr});var v8=s((A8e,o8)=>{"use strict";var Ifr=u8();o8.exports=Ifr});var l8=s((_8e,c8)=>{"use strict";var f8="function";function Rfr(r){return typeof r.get===f8&&typeof r.set===f8}c8.exports=Rfr});var yn=s((T8e,p8)=>{"use strict";var Lfr=l8();p8.exports=Lfr});var d8=s((I8e,m8)=>{"use strict";var g8={complex128:Pfr,complex64:Ffr,default:Mfr};function Pfr(r,e,t){r.set(t,e)}function Ffr(r,e,t){r.set(t,e)}function Mfr(r,e,t){r.set(t,e)}function Bfr(r){var e=g8[r];return typeof e=="function"?e:g8.default}m8.exports=Bfr});var Ro=s((R8e,h8)=>{"use strict";var jfr=d8();h8.exports=jfr});var b8=s((L8e,q8)=>{"use strict";var y8={float64:kfr,float32:Cfr,int32:Vfr,int16:Ufr,int8:Gfr,uint32:xfr,uint16:Dfr,uint8:Hfr,uint8c:Wfr,generic:zfr,default:Xfr};function kfr(r,e,t){r[e]=t}function Cfr(r,e,t){r[e]=t}function Vfr(r,e,t){r[e]=t}function Ufr(r,e,t){r[e]=t}function Gfr(r,e,t){r[e]=t}function xfr(r,e,t){r[e]=t}function Dfr(r,e,t){r[e]=t}function Hfr(r,e,t){r[e]=t}function Wfr(r,e,t){r[e]=t}function zfr(r,e,t){r[e]=t}function Xfr(r,e,t){r[e]=t}function Jfr(r){var e=y8[r];return typeof e=="function"?e:y8.default}q8.exports=Jfr});var Lo=s((P8e,w8)=>{"use strict";var Yfr=b8();w8.exports=Yfr});var N8=s((F8e,E8)=>{"use strict";var $fr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};E8.exports=$fr});var O8=s((M8e,S8)=>{"use strict";var Zfr=er(),Qfr=typeof Float64Array=="function";function Kfr(r){return Qfr&&r instanceof Float64Array||Zfr(r)==="[object Float64Array]"}S8.exports=Kfr});var _8=s((B8e,A8)=>{"use strict";var rcr=O8();A8.exports=rcr});var I8=s((j8e,T8)=>{"use strict";var ecr=typeof Float64Array=="function"?Float64Array:null;T8.exports=ecr});var P8=s((k8e,L8)=>{"use strict";var tcr=_8(),R8=I8();function icr(){var r,e;if(typeof R8!="function")return!1;try{e=new R8([1,3.14,-3.14,NaN]),r=tcr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}L8.exports=icr});var Po=s((C8e,F8)=>{"use strict";var ncr=P8();F8.exports=ncr});var B8=s((V8e,M8)=>{"use strict";var acr=typeof Float64Array=="function"?Float64Array:void 0;M8.exports=acr});var k8=s((U8e,j8)=>{"use strict";function scr(){throw new Error("not implemented")}j8.exports=scr});var lr=s((G8e,C8)=>{"use strict";var ucr=Po(),ocr=B8(),vcr=k8(),Fo;ucr()?Fo=ocr:Fo=vcr;C8.exports=Fo});var U8=s((x8e,V8)=>{"use strict";var fcr=er(),ccr=typeof Float32Array=="function";function lcr(r){return ccr&&r instanceof Float32Array||fcr(r)==="[object Float32Array]"}V8.exports=lcr});var x8=s((D8e,G8)=>{"use strict";var pcr=U8();G8.exports=pcr});var R=s((H8e,D8)=>{"use strict";var gcr=Number.POSITIVE_INFINITY;D8.exports=gcr});var W8=s((W8e,H8)=>{"use strict";var mcr=typeof Float32Array=="function"?Float32Array:null;H8.exports=mcr});var J8=s((z8e,X8)=>{"use strict";var dcr=x8(),hcr=R(),z8=W8();function ycr(){var r,e;if(typeof z8!="function")return!1;try{e=new z8([1,3.14,-3.14,5e40]),r=dcr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===hcr}catch{r=!1}return r}X8.exports=ycr});var $8=s((X8e,Y8)=>{"use strict";var qcr=J8();Y8.exports=qcr});var Q8=s((J8e,Z8)=>{"use strict";var bcr=typeof Float32Array=="function"?Float32Array:void 0;Z8.exports=bcr});var r5=s((Y8e,K8)=>{"use strict";function wcr(){throw new Error("not implemented")}K8.exports=wcr});var Qr=s(($8e,e5)=>{"use strict";var Ecr=$8(),Ncr=Q8(),Scr=r5(),Mo;Ecr()?Mo=Ncr:Mo=Scr;e5.exports=Mo});var i5=s((Z8e,t5)=>{"use strict";var Ocr=er(),Acr=typeof Uint32Array=="function";function _cr(r){return Acr&&r instanceof Uint32Array||Ocr(r)==="[object Uint32Array]"}t5.exports=_cr});var ge=s((Q8e,n5)=>{"use strict";var Tcr=i5();n5.exports=Tcr});var ci=s((K8e,a5)=>{"use strict";var Icr=4294967295;a5.exports=Icr});var u5=s((r5e,s5)=>{"use strict";var Rcr=typeof Uint32Array=="function"?Uint32Array:null;s5.exports=Rcr});var f5=s((e5e,v5)=>{"use strict";var Lcr=ge(),Bo=ci(),o5=u5();function Pcr(){var r,e;if(typeof o5!="function")return!1;try{e=[1,3.14,-3.14,Bo+1,Bo+2],e=new o5(e),r=Lcr(e)&&e[0]===1&&e[1]===3&&e[2]===Bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}v5.exports=Pcr});var l5=s((t5e,c5)=>{"use strict";var Fcr=f5();c5.exports=Fcr});var g5=s((i5e,p5)=>{"use strict";var Mcr=typeof Uint32Array=="function"?Uint32Array:void 0;p5.exports=Mcr});var d5=s((n5e,m5)=>{"use strict";function Bcr(){throw new Error("not implemented")}m5.exports=Bcr});var pr=s((a5e,h5)=>{"use strict";var jcr=l5(),kcr=g5(),Ccr=d5(),jo;jcr()?jo=kcr:jo=Ccr;h5.exports=jo});var q5=s((s5e,y5)=>{"use strict";var Vcr=er(),Ucr=typeof Int32Array=="function";function Gcr(r){return Ucr&&r instanceof Int32Array||Vcr(r)==="[object Int32Array]"}y5.exports=Gcr});var Pa=s((u5e,b5)=>{"use strict";var xcr=q5();b5.exports=xcr});var li=s((o5e,w5)=>{"use strict";var Dcr=2147483647;w5.exports=Dcr});var N5=s((v5e,E5)=>{"use strict";var Hcr=-2147483648;E5.exports=Hcr});var O5=s((f5e,S5)=>{"use strict";var Wcr=typeof Int32Array=="function"?Int32Array:null;S5.exports=Wcr});var T5=s((c5e,_5)=>{"use strict";var zcr=Pa(),Xcr=li(),Jcr=N5(),A5=O5();function Ycr(){var r,e;if(typeof A5!="function")return!1;try{e=new A5([1,3.14,-3.14,Xcr+1]),r=zcr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Jcr}catch{r=!1}return r}_5.exports=Ycr});var R5=s((l5e,I5)=>{"use strict";var $cr=T5();I5.exports=$cr});var P5=s((p5e,L5)=>{"use strict";var Zcr=typeof Int32Array=="function"?Int32Array:void 0;L5.exports=Zcr});var M5=s((g5e,F5)=>{"use strict";function Qcr(){throw new Error("not implemented")}F5.exports=Qcr});var Ke=s((m5e,B5)=>{"use strict";var Kcr=R5(),rlr=P5(),elr=M5(),ko;Kcr()?ko=rlr:ko=elr;B5.exports=ko});var k5=s((d5e,j5)=>{"use strict";var tlr=er(),ilr=typeof Uint16Array=="function";function nlr(r){return ilr&&r instanceof Uint16Array||tlr(r)==="[object Uint16Array]"}j5.exports=nlr});var V5=s((h5e,C5)=>{"use strict";var alr=k5();C5.exports=alr});var G5=s((y5e,U5)=>{"use strict";var slr=65535;U5.exports=slr});var D5=s((q5e,x5)=>{"use strict";var ulr=typeof Uint16Array=="function"?Uint16Array:null;x5.exports=ulr});var z5=s((b5e,W5)=>{"use strict";var olr=V5(),Co=G5(),H5=D5();function vlr(){var r,e;if(typeof H5!="function")return!1;try{e=[1,3.14,-3.14,Co+1,Co+2],e=new H5(e),r=olr(e)&&e[0]===1&&e[1]===3&&e[2]===Co-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}W5.exports=vlr});var J5=s((w5e,X5)=>{"use strict";var flr=z5();X5.exports=flr});var $5=s((E5e,Y5)=>{"use strict";var clr=typeof Uint16Array=="function"?Uint16Array:void 0;Y5.exports=clr});var Q5=s((N5e,Z5)=>{"use strict";function llr(){throw new Error("not implemented")}Z5.exports=llr});var Gt=s((S5e,K5)=>{"use strict";var plr=J5(),glr=$5(),mlr=Q5(),Vo;plr()?Vo=glr:Vo=mlr;K5.exports=Vo});var ep=s((O5e,rp)=>{"use strict";var dlr=er(),hlr=typeof Int16Array=="function";function ylr(r){return hlr&&r instanceof Int16Array||dlr(r)==="[object Int16Array]"}rp.exports=ylr});var ip=s((A5e,tp)=>{"use strict";var qlr=ep();tp.exports=qlr});var ap=s((_5e,np)=>{"use strict";var blr=32767;np.exports=blr});var up=s((T5e,sp)=>{"use strict";var wlr=-32768;sp.exports=wlr});var vp=s((I5e,op)=>{"use strict";var Elr=typeof Int16Array=="function"?Int16Array:null;op.exports=Elr});var lp=s((R5e,cp)=>{"use strict";var Nlr=ip(),Slr=ap(),Olr=up(),fp=vp();function Alr(){var r,e;if(typeof fp!="function")return!1;try{e=new fp([1,3.14,-3.14,Slr+1]),r=Nlr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Olr}catch{r=!1}return r}cp.exports=Alr});var gp=s((L5e,pp)=>{"use strict";var _lr=lp();pp.exports=_lr});var dp=s((P5e,mp)=>{"use strict";var Tlr=typeof Int16Array=="function"?Int16Array:void 0;mp.exports=Tlr});var yp=s((F5e,hp)=>{"use strict";function Ilr(){throw new Error("not implemented")}hp.exports=Ilr});var pi=s((M5e,qp)=>{"use strict";var Rlr=gp(),Llr=dp(),Plr=yp(),Uo;Rlr()?Uo=Llr:Uo=Plr;qp.exports=Uo});var wp=s((B5e,bp)=>{"use strict";var Flr=er(),Mlr=typeof Uint8Array=="function";function Blr(r){return Mlr&&r instanceof Uint8Array||Flr(r)==="[object Uint8Array]"}bp.exports=Blr});var Np=s((j5e,Ep)=>{"use strict";var jlr=wp();Ep.exports=jlr});var Op=s((k5e,Sp)=>{"use strict";var klr=255;Sp.exports=klr});var _p=s((C5e,Ap)=>{"use strict";var Clr=typeof Uint8Array=="function"?Uint8Array:null;Ap.exports=Clr});var Rp=s((V5e,Ip)=>{"use strict";var Vlr=Np(),Go=Op(),Tp=_p();function Ulr(){var r,e;if(typeof Tp!="function")return!1;try{e=[1,3.14,-3.14,Go+1,Go+2],e=new Tp(e),r=Vlr(e)&&e[0]===1&&e[1]===3&&e[2]===Go-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Ip.exports=Ulr});var Pp=s((U5e,Lp)=>{"use strict";var Glr=Rp();Lp.exports=Glr});var Mp=s((G5e,Fp)=>{"use strict";var xlr=typeof Uint8Array=="function"?Uint8Array:void 0;Fp.exports=xlr});var jp=s((x5e,Bp)=>{"use strict";function Dlr(){throw new Error("not implemented")}Bp.exports=Dlr});var Kr=s((D5e,kp)=>{"use strict";var Hlr=Pp(),Wlr=Mp(),zlr=jp(),xo;Hlr()?xo=Wlr:xo=zlr;kp.exports=xo});var Vp=s((H5e,Cp)=>{"use strict";var Xlr=er(),Jlr=typeof Uint8ClampedArray=="function";function Ylr(r){return Jlr&&r instanceof Uint8ClampedArray||Xlr(r)==="[object Uint8ClampedArray]"}Cp.exports=Ylr});var Gp=s((W5e,Up)=>{"use strict";var $lr=Vp();Up.exports=$lr});var Dp=s((z5e,xp)=>{"use strict";var Zlr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;xp.exports=Zlr});var zp=s((X5e,Wp)=>{"use strict";var Qlr=Gp(),Hp=Dp();function Klr(){var r,e;if(typeof Hp!="function")return!1;try{e=new Hp([-1,0,1,3.14,4.99,255,256]),r=Qlr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Wp.exports=Klr});var Jp=s((J5e,Xp)=>{"use strict";var r6r=zp();Xp.exports=r6r});var $p=s((Y5e,Yp)=>{"use strict";var e6r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Yp.exports=e6r});var Qp=s(($5e,Zp)=>{"use strict";function t6r(){throw new Error("not implemented")}Zp.exports=t6r});var gi=s((Z5e,Kp)=>{"use strict";var i6r=Jp(),n6r=$p(),a6r=Qp(),Do;i6r()?Do=n6r:Do=a6r;Kp.exports=Do});var e7=s((Q5e,r7)=>{"use strict";var s6r=er(),u6r=typeof Int8Array=="function";function o6r(r){return u6r&&r instanceof Int8Array||s6r(r)==="[object Int8Array]"}r7.exports=o6r});var i7=s((K5e,t7)=>{"use strict";var v6r=e7();t7.exports=v6r});var a7=s((rpe,n7)=>{"use strict";var f6r=127;n7.exports=f6r});var u7=s((epe,s7)=>{"use strict";var c6r=-128;s7.exports=c6r});var v7=s((tpe,o7)=>{"use strict";var l6r=typeof Int8Array=="function"?Int8Array:null;o7.exports=l6r});var l7=s((ipe,c7)=>{"use strict";var p6r=i7(),g6r=a7(),m6r=u7(),f7=v7();function d6r(){var r,e;if(typeof f7!="function")return!1;try{e=new f7([1,3.14,-3.14,g6r+1]),r=p6r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===m6r}catch{r=!1}return r}c7.exports=d6r});var g7=s((npe,p7)=>{"use strict";var h6r=l7();p7.exports=h6r});var d7=s((ape,m7)=>{"use strict";var y6r=typeof Int8Array=="function"?Int8Array:void 0;m7.exports=y6r});var y7=s((spe,h7)=>{"use strict";function q6r(){throw new Error("not implemented")}h7.exports=q6r});var mi=s((upe,q7)=>{"use strict";var b6r=g7(),w6r=d7(),E6r=y7(),Ho;b6r()?Ho=w6r:Ho=E6r;q7.exports=Ho});var Wo=s((ope,b7)=>{"use strict";function N6r(r){return typeof r=="number"}b7.exports=N6r});var E7=s((vpe,w7)=>{"use strict";w7.exports=Number});var Fa=s((fpe,N7)=>{"use strict";var S6r=E7();N7.exports=S6r});var O7=s((cpe,S7)=>{"use strict";var O6r=Fa(),A6r=O6r.prototype.toString;S7.exports=A6r});var _7=s((lpe,A7)=>{"use strict";var _6r=O7();function T6r(r){try{return _6r.call(r),!0}catch{return!1}}A7.exports=T6r});var zo=s((ppe,T7)=>{"use strict";var I6r=fi(),R6r=er(),L6r=Fa(),P6r=_7(),F6r=I6r();function M6r(r){return typeof r=="object"?r instanceof L6r?!0:F6r?P6r(r):R6r(r)==="[object Number]":!1}T7.exports=M6r});var R7=s((gpe,I7)=>{"use strict";var B6r=Wo(),j6r=zo();function k6r(r){return B6r(r)||j6r(r)}I7.exports=k6r});var M=s((mpe,P7)=>{"use strict";var L7=b(),Xo=R7(),C6r=Wo(),V6r=zo();L7(Xo,"isPrimitive",C6r);L7(Xo,"isObject",V6r);P7.exports=Xo});var V=s((dpe,F7)=>{"use strict";var U6r=Fa(),G6r=U6r.NEGATIVE_INFINITY;F7.exports=G6r});var Jo=s((hpe,M7)=>{"use strict";var x6r=R(),D6r=V(),H6r=yr();function W6r(r){return r<x6r&&r>D6r&&H6r(r)}M7.exports=W6r});var Yo=s((ype,B7)=>{"use strict";var z6r=M().isPrimitive,X6r=Jo();function J6r(r){return z6r(r)&&X6r(r)}B7.exports=J6r});var $o=s((qpe,j7)=>{"use strict";var Y6r=M().isObject,$6r=Jo();function Z6r(r){return Y6r(r)&&$6r(r.valueOf())}j7.exports=Z6r});var C7=s((bpe,k7)=>{"use strict";var Q6r=Yo(),K6r=$o();function r4r(r){return Q6r(r)||K6r(r)}k7.exports=r4r});var gr=s((wpe,U7)=>{"use strict";var V7=b(),Zo=C7(),e4r=Yo(),t4r=$o();V7(Zo,"isPrimitive",e4r);V7(Zo,"isObject",t4r);U7.exports=Zo});var Qo=s((Epe,G7)=>{"use strict";var i4r=gr().isPrimitive;function n4r(r){return i4r(r)&&r>=0}G7.exports=n4r});var Ko=s((Npe,x7)=>{"use strict";var a4r=gr().isObject;function s4r(r){return a4r(r)&&r.valueOf()>=0}x7.exports=s4r});var H7=s((Spe,D7)=>{"use strict";var u4r=Qo(),o4r=Ko();function v4r(r){return u4r(r)||o4r(r)}D7.exports=v4r});var hr=s((Ope,z7)=>{"use strict";var W7=b(),r1=H7(),f4r=Qo(),c4r=Ko();W7(r1,"isPrimitive",f4r);W7(r1,"isObject",c4r);z7.exports=r1});var e1=s((Ape,X7)=>{"use strict";var l4r=4294967295;X7.exports=l4r});var Y7=s((_pe,J7)=>{"use strict";var p4r=yr(),g4r=e1();function m4r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&p4r(r.length)&&r.length>=0&&r.length<=g4r}J7.exports=m4r});var xt=s((Tpe,$7)=>{"use strict";var d4r=Y7();$7.exports=d4r});var Q7=s((Ipe,Z7)=>{"use strict";var h4r=er(),y4r=typeof ArrayBuffer=="function";function q4r(r){return y4r&&r instanceof ArrayBuffer||h4r(r)==="[object ArrayBuffer]"}Z7.exports=q4r});var Ma=s((Rpe,K7)=>{"use strict";var b4r=Q7();K7.exports=b4r});var e9=s((Lpe,r9)=>{"use strict";var w4r=dr();function E4r(r){return typeof r=="object"&&r!==null&&!w4r(r)}r9.exports=E4r});var Ba=s((Ppe,t9)=>{"use strict";var N4r=e9();t9.exports=N4r});var n9=s((Fpe,i9)=>{"use strict";function S4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}i9.exports=S4r});var s9=s((Mpe,a9)=>{"use strict";function O4r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}a9.exports=O4r});var c9=s((Bpe,f9)=>{"use strict";var u9=M().isPrimitive,o9=Ze(),qn=b(),v9=q(),A4r=n9(),_4r=s9();function Dt(r,e){if(!(this instanceof Dt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!u9(r))throw new TypeError(v9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!u9(e))throw new TypeError(v9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return o9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),o9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}qn(Dt,"BYTES_PER_ELEMENT",8);qn(Dt.prototype,"BYTES_PER_ELEMENT",8);qn(Dt.prototype,"byteLength",16);qn(Dt.prototype,"toString",A4r);qn(Dt.prototype,"toJSON",_4r);f9.exports=Dt});var di=s((jpe,l9)=>{"use strict";var T4r=c9();l9.exports=T4r});var g9=s((kpe,p9)=>{"use strict";var I4r=typeof Math.fround=="function"?Math.fround:null;p9.exports=I4r});var h9=s((Cpe,d9)=>{"use strict";var R4r=Qr(),m9=new R4r(1);function L4r(r){return m9[0]=r,m9[0]}d9.exports=L4r});var b9=s((Vpe,q9)=>{"use strict";var y9=g9(),P4r=h9(),t1;typeof y9=="function"?t1=y9:t1=P4r;q9.exports=t1});var E9=s((Upe,w9)=>{"use strict";function F4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}w9.exports=F4r});var S9=s((Gpe,N9)=>{"use strict";function M4r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}N9.exports=M4r});var R9=s((xpe,I9)=>{"use strict";var O9=M().isPrimitive,A9=Ze(),bn=b(),_9=b9(),T9=q(),B4r=E9(),j4r=S9();function Ht(r,e){if(!(this instanceof Ht))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!O9(r))throw new TypeError(T9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!O9(e))throw new TypeError(T9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return A9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:_9(r)}),A9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:_9(e)}),this}bn(Ht,"BYTES_PER_ELEMENT",4);bn(Ht.prototype,"BYTES_PER_ELEMENT",4);bn(Ht.prototype,"byteLength",8);bn(Ht.prototype,"toString",B4r);bn(Ht.prototype,"toJSON",j4r);I9.exports=Ht});var hi=s((Dpe,L9)=>{"use strict";var k4r=R9();L9.exports=k4r});var F9=s((Hpe,P9)=>{"use strict";var C4r=di(),V4r=hi();function U4r(r){return r instanceof C4r||r instanceof V4r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}P9.exports=U4r});var zr=s((Wpe,M9)=>{"use strict";var G4r=F9();M9.exports=G4r});var j9=s((zpe,B9)=>{"use strict";var x4r=yr();function D4r(r){return x4r(r/2)}B9.exports=D4r});var ja=s((Xpe,k9)=>{"use strict";var H4r=j9();k9.exports=H4r});var V9=s((Jpe,C9)=>{"use strict";var W4r=O(),ka=yo();function z4r(){return typeof ka=="function"&&typeof ka("foo")=="symbol"&&W4r(ka,"iterator")&&typeof ka.iterator=="symbol"}C9.exports=z4r});var Ca=s((Ype,U9)=>{"use strict";var X4r=V9();U9.exports=X4r});var x9=s(($pe,G9)=>{"use strict";var J4r=Ca(),Y4r=J4r()?Symbol.iterator:null;G9.exports=Y4r});var wn=s((Zpe,D9)=>{"use strict";var $4r=x9();D9.exports=$4r});var W9=s((Qpe,H9)=>{"use strict";var Z4r=Ze();function Q4r(r,e,t){Z4r(r,e,{configurable:!1,enumerable:!1,get:t})}H9.exports=Q4r});var L=s((Kpe,z9)=>{"use strict";var K4r=W9();z9.exports=K4r});var J9=s((r7e,X9)=>{"use strict";function r8r(r){return r.re}X9.exports=r8r});var rt=s((e7e,Y9)=>{"use strict";var e8r=J9();Y9.exports=e8r});var Z9=s((t7e,$9)=>{"use strict";function t8r(r){return r.im}$9.exports=t8r});var et=s((i7e,Q9)=>{"use strict";var i8r=Z9();Q9.exports=i8r});var rg=s((n7e,K9)=>{"use strict";var n8r=Qr();function a8r(r,e){return new n8r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}K9.exports=a8r});var yi=s((a7e,eg)=>{"use strict";var s8r=rg();eg.exports=s8r});var ig=s((s7e,tg)=>{"use strict";var u8r=lr();function o8r(r,e){return new u8r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}tg.exports=o8r});var qi=s((u7e,ng)=>{"use strict";var v8r=ig();ng.exports=v8r});var ug=s((o7e,sg)=>{"use strict";var ag={float64:f8r,float32:c8r,int32:l8r,int16:p8r,int8:g8r,uint32:m8r,uint16:d8r,uint8:h8r,uint8c:y8r,generic:q8r,default:b8r};function f8r(r,e){return r[e]}function c8r(r,e){return r[e]}function l8r(r,e){return r[e]}function p8r(r,e){return r[e]}function g8r(r,e){return r[e]}function m8r(r,e){return r[e]}function d8r(r,e){return r[e]}function h8r(r,e){return r[e]}function y8r(r,e){return r[e]}function q8r(r,e){return r[e]}function b8r(r,e){return r[e]}function w8r(r){var e=ag[r];return typeof e=="function"?e:ag.default}sg.exports=w8r});var En=s((v7e,og)=>{"use strict";var E8r=ug();og.exports=E8r});var cg=s((f7e,fg)=>{"use strict";var vg={complex128:N8r,complex64:S8r,default:O8r};function N8r(r,e){return r.get(e)}function S8r(r,e){return r.get(e)}function O8r(r,e){return r.get(e)}function A8r(r){var e=vg[r];return typeof e=="function"?e:vg.default}fg.exports=A8r});var bi=s((c7e,lg)=>{"use strict";var _8r=cg();lg.exports=_8r});var gg=s((l7e,pg)=>{"use strict";var T8r=xt(),I8r=zr(),R8r=rt(),L8r=et(),P8r=q();function F8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,T8r(i)&&i.length>=2)e.push(i[0],i[1]);else if(I8r(i))e.push(R8r(i),L8r(i));else return new TypeError(P8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}pg.exports=F8r});var dg=s((p7e,mg)=>{"use strict";var M8r=xt(),B8r=zr(),j8r=rt(),k8r=et(),C8r=q();function V8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),M8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(B8r(a))i.push(j8r(a),k8r(a));else return new TypeError(C8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}mg.exports=V8r});var yg=s((g7e,hg)=>{"use strict";var U8r=zr(),G8r=rt(),x8r=et();function D8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!U8r(i))return null;r[a]=G8r(i),r[a+1]=x8r(i),a+=2}return r}hg.exports=D8r});var _g=s((m7e,Ag)=>{"use strict";var Nn=hr().isPrimitive,qg=xt(),n1=Br(),bg=Ma(),wg=Ba(),H8r=dr(),Wt=I(),wi=zr(),Va=ja(),i1=yr(),W8r=Ca(),Ei=wn(),qr=b(),xa=L(),Ur=Qr(),Eg=hi(),Z=q(),Ua=rt(),Ga=et(),z8r=yi(),X8r=qi(),J8r=En(),Y8r=bi(),Ng=gg(),$8r=dg(),Z8r=yg(),jr=Ur.BYTES_PER_ELEMENT*2,Sg=W8r();function Ni(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Og(r){return r===tr||r.name==="Complex128Array"}function Q8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===jr}function K8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===jr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ur(0);else if(e===1)if(Nn(arguments[0]))t=new Ur(arguments[0]*2);else if(n1(arguments[0]))if(t=arguments[0],i=t.length,i&&H8r(t)&&wi(t[0])){if(t=Z8r(new Ur(i*2),t),t===null){if(!Va(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(arguments[0])}}else{if(Q8r(t))t=z8r(t,0);else if(K8r(t))t=X8r(t,0);else if(!Va(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(t)}else if(bg(arguments[0])){if(t=arguments[0],!i1(t.byteLength/jr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",jr,t.byteLength));t=new Ur(t)}else if(wg(arguments[0])){if(t=arguments[0],Sg===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Wt(t[Ei]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ei](),!Wt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Ng(t),t instanceof Error)throw t;t=new Ur(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!bg(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Nn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!i1(r/jr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",jr,r));if(e===2){if(i=t.byteLength-r,!i1(i/jr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",jr,i));t=new Ur(t,r)}else{if(i=arguments[2],!Nn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*jr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*jr));t=new Ur(t,r,i*2)}}return qr(this,"_buffer",t),qr(this,"_length",t.length/2),this}qr(tr,"BYTES_PER_ELEMENT",jr);qr(tr,"name","Complex64Array");qr(tr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,g;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Og(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Wt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(Ni(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),wi(l))u[g]=Ua(l),u[g+1]=Ga(l);else if(qg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(n1(e)){if(n){for(f=e.length,e.get&&e.set?v=Y8r("default"):v=J8r("default"),p=0;p<f;p++)if(!wi(v(e,p))){c=!0;break}if(c){if(!Va(f))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),wi(l))u[g]=Ua(l),u[g+1]=Ga(l);else if(qg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(wg(e)&&Sg&&Wt(e[Ei])){if(u=e[Ei](),!Wt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=$8r(u,n,t):o=Ng(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});qr(tr,"of",function(){var e,t;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Og(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});xa(tr.prototype,"buffer",function(){return this._buffer.buffer});xa(tr.prototype,"byteLength",function(){return this._buffer.byteLength});xa(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});qr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);qr(tr.prototype,"copyWithin",function(e,t){if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});qr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},qr(i,"next",v),qr(i,"return",f),Ei&&qr(i,Ei,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Eg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});qr(tr.prototype,"get",function(e){var t;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Nn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Eg(t[e],t[e+1])});xa(tr.prototype,"length",function(){return this._length});qr(tr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Nn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(wi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ua(e),n[i+1]=Ga(e);return}if(Ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(n1(e)){for(o=e.length,f=0;f<o;f++)if(!wi(e[f])){u=!0;break}if(u){if(!Va(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ua(v),n[i+1]=Ga(v),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Ag.exports=tr});var Si=s((d7e,Tg)=>{"use strict";var r5r=_g();Tg.exports=r5r});var Rg=s((h7e,Ig)=>{"use strict";function e5r(r){return r.re}Ig.exports=e5r});var re=s((y7e,Lg)=>{"use strict";var t5r=Rg();Lg.exports=t5r});var Fg=s((q7e,Pg)=>{"use strict";function i5r(r){return r.im}Pg.exports=i5r});var ee=s((b7e,Mg)=>{"use strict";var n5r=Fg();Mg.exports=n5r});var jg=s((w7e,Bg)=>{"use strict";var a5r=xt(),s5r=zr(),u5r=q(),o5r=re(),v5r=ee();function f5r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,a5r(i)&&i.length>=2)e.push(i[0],i[1]);else if(s5r(i))e.push(o5r(i),v5r(i));else return new TypeError(u5r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Bg.exports=f5r});var Cg=s((E7e,kg)=>{"use strict";var c5r=xt(),l5r=zr(),p5r=q(),g5r=re(),m5r=ee();function d5r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),c5r(a)&&a.length>=2)i.push(a[0],a[1]);else if(l5r(a))i.push(g5r(a),m5r(a));else return new TypeError(p5r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}kg.exports=d5r});var Ug=s((N7e,Vg)=>{"use strict";var h5r=zr(),y5r=re(),q5r=ee();function b5r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!h5r(i))return null;r[a]=y5r(i),r[a+1]=q5r(i),a+=2}return r}Vg.exports=b5r});var Yg=s((S7e,Jg)=>{"use strict";var Sn=hr().isPrimitive,Gg=xt(),s1=Br(),xg=Ma(),Dg=Ba(),w5r=dr(),zt=I(),Oi=zr(),Da=ja(),a1=yr(),E5r=Ca(),Ai=wn(),br=b(),za=L(),Gr=lr(),Hg=di(),Ha=re(),Wa=ee(),N5r=yi(),S5r=qi(),O5r=En(),A5r=bi(),Q=q(),Wg=jg(),_5r=Cg(),T5r=Ug(),kr=Gr.BYTES_PER_ELEMENT*2,zg=E5r();function _i(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Xg(r){return r===ir||r.name==="Complex64Array"}function I5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===kr/2}function R5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===kr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Gr(0);else if(e===1)if(Sn(arguments[0]))t=new Gr(arguments[0]*2);else if(s1(arguments[0]))if(t=arguments[0],i=t.length,i&&w5r(t)&&Oi(t[0])){if(t=T5r(new Gr(i*2),t),t===null){if(!Da(i))throw new RangeError(Q("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(arguments[0])}}else{if(I5r(t))t=N5r(t,0);else if(R5r(t))t=S5r(t,0);else if(!Da(i))throw new RangeError(Q("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(t)}else if(xg(arguments[0])){if(t=arguments[0],!a1(t.byteLength/kr))throw new RangeError(Q("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",kr,t.byteLength));t=new Gr(t)}else if(Dg(arguments[0])){if(t=arguments[0],zg===!1)throw new TypeError(Q("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!zt(t[Ai]))throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ai](),!zt(t.next))throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Wg(t),t instanceof Error)throw t;t=new Gr(t)}else throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!xg(t))throw new TypeError(Q("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Sn(r))throw new TypeError(Q("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!a1(r/kr))throw new RangeError(Q("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",kr,r));if(e===2){if(i=t.byteLength-r,!a1(i/kr))throw new RangeError(Q("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",kr,i));t=new Gr(t,r)}else{if(i=arguments[2],!Sn(i))throw new TypeError(Q("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*kr>t.byteLength-r)throw new RangeError(Q("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*kr));t=new Gr(t,r,i*2)}}return br(this,"_buffer",t),br(this,"_length",t.length/2),this}br(ir,"BYTES_PER_ELEMENT",kr);br(ir,"name","Complex128Array");br(ir,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,g;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Xg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!zt(n))throw new TypeError(Q("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(_i(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),Oi(l))u[g]=Ha(l),u[g+1]=Wa(l);else if(Gg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Q("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(s1(e)){if(n){for(f=e.length,e.get&&e.set?v=A5r("default"):v=O5r("default"),p=0;p<f;p++)if(!Oi(v(e,p))){c=!0;break}if(c){if(!Da(f))throw new RangeError(Q("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),Oi(l))u[g]=Ha(l),u[g+1]=Wa(l);else if(Gg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Q("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Dg(e)&&zg&&zt(e[Ai])){if(u=e[Ai](),!zt(u.next))throw new TypeError(Q("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=_5r(u,n,t):o=Wg(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Q("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});br(ir,"of",function(){var e,t;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Xg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});za(ir.prototype,"buffer",function(){return this._buffer.buffer});za(ir.prototype,"byteLength",function(){return this._buffer.byteLength});za(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});br(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);br(ir.prototype,"copyWithin",function(e,t){if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});br(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},br(i,"next",v),br(i,"return",f),Ai&&br(i,Ai,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Hg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});br(ir.prototype,"get",function(e){var t;if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Sn(e))throw new TypeError(Q("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Hg(t[e],t[e+1])});za(ir.prototype,"length",function(){return this._length});br(ir.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Sn(i))throw new TypeError(Q("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Oi(e)){if(i>=this._length)throw new RangeError(Q("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ha(e),n[i+1]=Wa(e);return}if(_i(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*kr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(s1(e)){for(o=e.length,f=0;f<o;f++)if(!Oi(e[f])){u=!0;break}if(u){if(!Da(o))throw new RangeError(Q("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*kr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ha(v),n[i+1]=Wa(v),i+=2;return}throw new TypeError(Q("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Jg.exports=ir});var Ti=s((O7e,$g)=>{"use strict";var L5r=Yg();$g.exports=L5r});var Qg=s((A7e,Zg)=>{"use strict";var P5r=lr(),F5r=Qr(),M5r=pr(),B5r=Ke(),j5r=Gt(),k5r=pi(),C5r=Kr(),V5r=gi(),U5r=mi(),G5r=Si(),x5r=Ti(),D5r=[P5r,F5r,B5r,M5r,k5r,j5r,U5r,C5r,V5r,G5r,x5r];Zg.exports=D5r});var rm=s((_7e,Kg)=>{"use strict";var H5r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Kg.exports=H5r});var im=s((T7e,tm)=>{"use strict";var W5r=Ut(),z5r=dr(),X5r=pe(),J5r=N8(),Y5r=Qg(),em=rm(),$5r=em.length;function Z5r(r){var e;if(z5r(r))return"generic";if(W5r(r))return null;for(e=0;e<$5r;e++)if(r instanceof Y5r[e])return em[e];return J5r[X5r(r)]||null}tm.exports=Z5r});var Ii=s((I7e,nm)=>{"use strict";var Q5r=im();nm.exports=Q5r});var um=s((R7e,sm)=>{"use strict";var am=I(),K5r=Br(),rpr=v8(),epr=yn(),tpr=Ro(),ipr=Lo(),npr=Ii(),u1=q();function apr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(K5r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!am(t))throw new TypeError(u1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!am(t))throw new TypeError(u1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!rpr(r))throw new TypeError(u1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=npr(i),epr(i)?a=tpr(u):a=ipr(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}sm.exports=apr});var vm=s((L7e,om)=>{"use strict";var spr=um();om.exports=spr});var cm=s((P7e,fm)=>{"use strict";function upr(r){return r!==r}fm.exports=upr});var E=s((F7e,lm)=>{"use strict";var opr=cm();lm.exports=opr});var gm=s((M7e,pm)=>{"use strict";var vpr={Complex64:"complex64",Complex128:"complex128"};pm.exports=vpr});var dm=s((B7e,mm)=>{"use strict";var fpr=hi(),cpr=di(),lpr=[fpr,cpr];mm.exports=lpr});var ym=s((j7e,hm)=>{"use strict";var ppr=["complex64","complex128"];hm.exports=ppr});var wm=s((k7e,bm)=>{"use strict";var gpr=pe(),mpr=gm(),dpr=dm(),qm=ym(),hpr=qm.length;function ypr(r){var e;for(e=0;e<hpr;e++)if(r instanceof dpr[e])return qm[e];return mpr[gpr(r)]||null}bm.exports=ypr});var o1=s((C7e,Em)=>{"use strict";var qpr=wm();Em.exports=qpr});var Sm=s((V7e,Nm)=>{"use strict";var bpr=lr(),wpr=Qr(),Epr=Ti(),Npr=Si(),Spr={float64:bpr,float32:wpr,complex128:Epr,complex64:Npr};Nm.exports=Spr});var Am=s((U7e,Om)=>{"use strict";var Opr=Sm();function Apr(r){return Opr[r]||null}Om.exports=Apr});var Tm=s((G7e,_m)=>{"use strict";var _pr=Am();_m.exports=_pr});var Rm=s((x7e,Im)=>{"use strict";function Tpr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Im.exports=Tpr});var jm=s((D7e,Bm)=>{"use strict";var Ipr=hi(),Rpr=di(),Lm=re(),Pm=ee(),Fm=rt(),Mm=et();function Lpr(r,e,t,i,n,a){var u,o,v,f,c,l,p,g,h,d,m,y,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Fm(e),l=Mm(e)):(f=Lm(e),l=Pm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Fm(i),p=Mm(i)):(c=Lm(i),p=Pm(i)),o===2?u=Ipr:u=Rpr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?y=n-1:y=n,d=(c-f)/y,m=(p-l)/y,N=1;N<y;N++)g=f+d*N,h=l+m*N,v.push(new u(g,h));return a&&v.push(new u(c,p)),v}Bm.exports=Lpr});var v1=s((H7e,km)=>{"use strict";function Ppr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}km.exports=Ppr});var f1=s((W7e,xm)=>{"use strict";var Cm=re(),Vm=ee(),Um=rt(),Gm=et();function Fpr(r,e,t,i,n,a,u){var o,v,f,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=Um(t),f=Gm(t)):(o=Cm(t),f=Vm(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=Um(n),c=Gm(n)):(v=Cm(n),c=Vm(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?g=a-1:g=a,l=(v-o)/g,p=(c-f)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}xm.exports=Fpr});var Hm=s((z7e,Dm)=>{"use strict";var Mpr=Object;Dm.exports=Mpr});var Ri=s((X7e,Wm)=>{"use strict";var Bpr=Hm();Wm.exports=Bpr});var Xm=s((J7e,zm)=>{"use strict";var jpr=Object.getPrototypeOf;zm.exports=jpr});var Ym=s((Y7e,Jm)=>{"use strict";function kpr(r){return r.__proto__}Jm.exports=kpr});var Zm=s(($7e,$m)=>{"use strict";var Cpr=er(),Vpr=Ym();function Upr(r){var e=Vpr(r);return e||e===null?e:Cpr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}$m.exports=Upr});var Km=s((Z7e,Qm)=>{"use strict";var Gpr=I(),xpr=Xm(),Dpr=Zm(),c1;Gpr(Object.getPrototypeOf)?c1=xpr:c1=Dpr;Qm.exports=c1});var ed=s((Q7e,rd)=>{"use strict";var Hpr=Ri(),Wpr=Km();function zpr(r){return r==null?null:(r=Hpr(r),Wpr(r))}rd.exports=zpr});var Xt=s((K7e,td)=>{"use strict";var Xpr=ed();td.exports=Xpr});var ad=s((r9e,nd)=>{"use strict";var Jpr=Ba(),id=I(),Ypr=Xt(),Xa=O(),$pr=er(),Zpr=Object.prototype;function Qpr(r){var e;for(e in r)if(!Xa(r,e))return!1;return!0}function Kpr(r){var e;return Jpr(r)?(e=Ypr(r),e?!Xa(r,"constructor")&&Xa(e,"constructor")&&id(e.constructor)&&$pr(e.constructor)==="[object Function]"&&Xa(e,"isPrototypeOf")&&id(e.isPrototypeOf)&&(e===Zpr||Qpr(r)):!0):!1}nd.exports=Kpr});var T=s((e9e,sd)=>{"use strict";var r7r=ad();sd.exports=r7r});var l1=s((t9e,ud)=>{"use strict";function e7r(r){return typeof r=="string"}ud.exports=e7r});var vd=s((i9e,od)=>{"use strict";var t7r=String.prototype.valueOf;od.exports=t7r});var cd=s((n9e,fd)=>{"use strict";var i7r=vd();function n7r(r){try{return i7r.call(r),!0}catch{return!1}}fd.exports=n7r});var p1=s((a9e,ld)=>{"use strict";var a7r=fi(),s7r=er(),u7r=cd(),o7r=a7r();function v7r(r){return typeof r=="object"?r instanceof String?!0:o7r?u7r(r):s7r(r)==="[object String]":!1}ld.exports=v7r});var gd=s((s9e,pd)=>{"use strict";var f7r=l1(),c7r=p1();function l7r(r){return f7r(r)||c7r(r)}pd.exports=l7r});var $=s((u9e,dd)=>{"use strict";var md=b(),g1=gd(),p7r=l1(),g7r=p1();md(g1,"isPrimitive",p7r);md(g1,"isObject",g7r);dd.exports=g1});var d1=s((o9e,yd)=>{"use strict";var m7r=T(),hd=O(),d7r=$().isPrimitive,h7r=cr().isPrimitive,m1=q();function y7r(r,e){return m7r(e)?hd(e,"dtype")&&(r.dtype=e.dtype,!d7r(r.dtype))?new TypeError(m1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):hd(e,"endpoint")&&(r.endpoint=e.endpoint,!h7r(r.endpoint))?new TypeError(m1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(m1("invalid argument. Options argument must be an object. Value: `%s`.",e))}yd.exports=y7r});var h1=s((v9e,q7r)=>{q7r.exports={endpoint:!0}});var Od=s((f9e,Sd)=>{"use strict";var qd=zr(),bd=M().isPrimitive,b7r=hr().isPrimitive,wd=E(),Ed=o1(),w7r=Tm(),E7r=yi(),N7r=qi(),Li=q(),S7r=Rm(),O7r=jm(),A7r=v1(),Nd=f1(),_7r=d1(),T7r=h1();function I7r(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=Ed(r),o===null){if(!qd(r))throw new TypeError(Li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!bd(r)||wd(r))throw new TypeError(Li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=Ed(e),v===null){if(!qd(e))throw new TypeError(Li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!bd(e)||wd(e))throw new TypeError(Li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!b7r(t))throw new TypeError(Li("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:T7r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=_7r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?O7r(o,r,v,e,t,i.endpoint):S7r(r,e,t,i.endpoint);if(n=w7r(i.dtype),n===null)throw new TypeError(Li('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return Nd(E7r(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Nd(N7r(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return A7r(u,r,e,t,i.endpoint)}Sd.exports=I7r});var _d=s((c9e,Ad)=>{"use strict";var R7r=yn(),L7r=En(),P7r=Lo(),F7r=bi(),M7r=Ro(),B7r=Ii();function j7r(r){var e=B7r(r);return R7r(r)?{accessorProtocol:!0,accessors:[F7r(e),M7r(e)]}:{accessorProtocol:!1,accessors:[L7r(e),P7r(e)]}}Ad.exports=j7r});var Id=s((l9e,Td)=>{"use strict";var k7r=_d();Td.exports=k7r});var Ld=s((p9e,Rd)=>{"use strict";var C7r=Id();function V7r(r){var e=C7r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Rd.exports=V7r});var On=s((g9e,Pd)=>{"use strict";var U7r=Ld();Pd.exports=U7r});var Cd=s((m9e,kd)=>{"use strict";var G7r=hi(),x7r=di(),Fd=re(),Md=ee(),Bd=rt(),jd=et();function D7r(r,e,t,i,n,a,u){var o,v,f,c,l,p,g,h,d,m,y,N,S,F;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Bd(t),l=jd(t)):(f=Fd(t),l=Md(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=Bd(n),p=jd(n)):(c=Fd(n),p=Md(n)),v===2?o=G7r:o=x7r,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(f,l)),r;for(g(h,0,new o(f,l)),u?S=a-1:S=a,y=(c-f)/S,N=(p-l)/S,F=1;F<S;F++)d=f+y*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,S,new o(c,p)),r}kd.exports=D7r});var Ud=s((d9e,Vd)=>{"use strict";function H7r(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}Vd.exports=H7r});var Jd=s((h9e,Xd)=>{"use strict";var Gd=zr(),xd=M().isPrimitive,W7r=Br(),An=q(),Dd=E(),Hd=o1(),z7r=Ii(),X7r=yi(),J7r=qi(),Wd=On(),Y7r=Cd(),$7r=Ud(),zd=f1(),Z7r=v1(),Q7r=d1(),K7r=h1();function r9r(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=Hd(r),a===null){if(!Gd(r))throw new TypeError(An("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!xd(r)||Dd(r))throw new TypeError(An("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Hd(e),u===null){if(!Gd(e))throw new TypeError(An("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!xd(e)||Dd(e))throw new TypeError(An("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!W7r(t))throw new TypeError(An("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:K7r.endpoint},arguments.length>3&&(n=Q7r(i,arguments[3]),n))throw n;if(v=z7r(t),v===null&&(v="generic"),v==="complex64")return zd(X7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return zd(J7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=Wd(t),Y7r(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=Wd(t),f.accessorProtocol?($7r(f,r,e,t.length,i.endpoint),t):(Z7r(t,r,e,t.length,i.endpoint),t)}Xd.exports=r9r});var Zd=s((y9e,$d)=>{"use strict";var e9r=b(),Yd=Od(),t9r=Jd();e9r(Yd,"assign",t9r);$d.exports=Yd});var Kd=s((q9e,Qd)=>{"use strict";var i9r=M().isPrimitive,n9r=$().isPrimitive,a9r=cr().isPrimitive,s9r=dr(),u9r=q(),o9r={number:i9r,string:n9r,boolean:a9r};function v9r(r,e,t){var i,n,a,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],v=0;v<r.length;v++)if(o=r[v],a=e[v],u=o9r[a],u(o))i.push([[o]]),n.push([1,1]);else if(s9r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(u9r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],a,a,String(o)));return[i,n]}Qd.exports=v9r});var Ja=s((b9e,rh)=>{"use strict";var f9r=Kd();rh.exports=f9r});var th=s((w9e,eh)=>{"use strict";var c9r=Ia();function l9r(r){return c9r(1,r)}eh.exports=l9r});var nh=s((E9e,ih)=>{"use strict";var p9r=th();ih.exports=p9r});var sh=s((N9e,ah)=>{"use strict";function g9r(r,e,t){var i,n,a,u,o,v,f,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(f=r[0],c=r[1],u=0;u<n;u++)for(o=f[u],v=c[u],a=0;a<i;a++)v[a]=t(o[a])}ah.exports=g9r});var y1=s((S9e,uh)=>{"use strict";var m9r=sh();uh.exports=m9r});var vh=s((O9e,oh)=>{"use strict";var d9r=Ia();function h9r(r){return d9r(0,r)}oh.exports=h9r});var Ya=s((A9e,fh)=>{"use strict";var y9r=vh();fh.exports=y9r});var lh=s((_9e,ch)=>{"use strict";var wr=rr(),q9r=lo(),b9r=go(),w9r=Ta(),E9r=_a(),N9r=Ia(),S9r=c6(),O9r=Ra(),A9r=vm(),_9r=Zd(),T9r=Ja(),I9r=nh(),R9r=y1(),L9r=Qe(),P9r=Ya();function F9r(r){return wr(r,"bbinary2d",q9r),wr(r,"bternary2d",b9r),wr(r,"broadcastShapes",w9r),wr(r,"filled",E9r),wr(r,"filled2d",N9r),wr(r,"filled2dBy",S9r),wr(r,"flatten2d",O9r),wr(r,"iterator2array",A9r),wr(r,"linspace",_9r),wr(r,"normalizeBroadcastArgs",T9r),wr(r,"ones2d",I9r),wr(r,"unary2d",R9r),wr(r,"zeros",L9r),wr(r,"zeros2d",P9r),r}ch.exports=F9r});var mh=s((T9e,gh)=>{"use strict";var ph=q();function M9r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(ph('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(ph('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}gh.exports=M9r});var hh=s((I9e,dh)=>{"use strict";var B9r=mh();dh.exports=B9r});var qh=s((R9e,yh)=>{"use strict";var j9r=M().isPrimitive,k9r=hh(),C9r=q();function V9r(r,e,t,i,n,a){var u,o;if(!(j9r(r)&&k9r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(C9r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}yh.exports=V9r});var wh=s((L9e,bh)=>{"use strict";var U9r=qh();bh.exports=U9r});var Nh=s((P9e,Eh)=>{"use strict";var G9r=cr().isPrimitive,x9r=q();function D9r(r,e){if(!G9r(r))throw new TypeError(x9r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Eh.exports=D9r});var Oh=s((F9e,Sh)=>{"use strict";var H9r=Nh();Sh.exports=H9r});var _h=s((M9e,Ah)=>{"use strict";function W9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Ah.exports=W9r});var Ih=s((B9e,Th)=>{"use strict";var z9r=_h();Th.exports=z9r});var Lh=s((j9e,Rh)=>{"use strict";var X9r=q(),J9r=Ih();function Y9r(r,e,t){if(!J9r(r,e))throw new TypeError(X9r("invalid argument. %s must be broadcast compatible.",t))}Rh.exports=Y9r});var Fh=s((k9e,Ph)=>{"use strict";var $9r=Lh();Ph.exports=$9r});var Bh=s((C9e,Mh)=>{"use strict";function Z9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Mh.exports=Z9r});var kh=s((V9e,jh)=>{"use strict";var Q9r=Bh();jh.exports=Q9r});var Vh=s((U9e,Ch)=>{"use strict";var K9r=q(),rgr=kh();function egr(r,e,t,i){if(!rgr(r,e))throw new TypeError(K9r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Ch.exports=egr});var Gh=s((G9e,Uh)=>{"use strict";var tgr=Vh();Uh.exports=tgr});var Dh=s((x9e,xh)=>{"use strict";function igr(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}xh.exports=igr});var Wh=s((D9e,Hh)=>{"use strict";function ngr(r,e,t,i){var n,a,u,o,v;for(n=r.length,a=t,u=t,v=0;v<n;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(a+=o*(r[v]-1))}return i[0]=a,i[1]=u,i}Hh.exports=ngr});var q1=s((H9e,Xh)=>{"use strict";var agr=b(),zh=Dh(),sgr=Wh();agr(zh,"assign",sgr);Xh.exports=zh});var Yh=s((W9e,Jh)=>{"use strict";var ugr=q1();function ogr(r,e,t,i){var n=ugr(e,t,i);return n[0]>=0&&n[1]<r}Jh.exports=ogr});var b1=s((z9e,$h)=>{"use strict";var vgr=Yh();$h.exports=vgr});var Qh=s((X9e,Zh)=>{"use strict";var fgr=b1();function cgr(r,e,t,i){if(e.length&&!fgr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}Zh.exports=cgr});var ry=s((J9e,Kh)=>{"use strict";var lgr=Qh();Kh.exports=lgr});var ty=s((Y9e,ey)=>{"use strict";var pgr=q();function ggr(r,e){if(r===void 0)throw new Error(pgr("invalid invocation. Must provide %s.",e))}ey.exports=ggr});var w1=s(($9e,iy)=>{"use strict";var mgr=ty();iy.exports=mgr});var ay=s((Z9e,ny)=>{"use strict";var dgr=q();function hgr(r,e,t,i){if(!(r>e))throw new TypeError(dgr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}ny.exports=hgr});var uy=s((Q9e,sy)=>{"use strict";var ygr=ay();sy.exports=ygr});var vy=s((K9e,oy)=>{"use strict";var qgr=q();function bgr(r,e,t,i){if(!(r>=e))throw new TypeError(qgr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}oy.exports=bgr});var cy=s((rge,fy)=>{"use strict";var wgr=vy();fy.exports=wgr});var py=s((ege,ly)=>{"use strict";var Egr=gr().isPrimitive,Ngr=q();function Sgr(r,e){if(!Egr(r))throw new TypeError(Ngr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}ly.exports=Sgr});var my=s((tge,gy)=>{"use strict";var Ogr=py();gy.exports=Ogr});var hy=s((ige,dy)=>{"use strict";var Agr=q();function _gr(r,e,t,i){if(!(r<e))throw new TypeError(Agr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}dy.exports=_gr});var qy=s((nge,yy)=>{"use strict";var Tgr=hy();yy.exports=Tgr});var wy=s((age,by)=>{"use strict";var Igr=q();function Rgr(r,e,t,i){if(!(r<=e))throw new TypeError(Igr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}by.exports=Rgr});var Ny=s((sge,Ey)=>{"use strict";var Lgr=wy();Ey.exports=Lgr});var Oy=s((uge,Sy)=>{"use strict";var Pgr=hr().isPrimitive,Fgr=q();function Mgr(r,e){if(!Pgr(r))throw new TypeError(Fgr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Sy.exports=Mgr});var _y=s((oge,Ay)=>{"use strict";var Bgr=Oy();Ay.exports=Bgr});var E1=s((vge,Ty)=>{"use strict";var jgr=M().isPrimitive;function kgr(r){return jgr(r)&&r>=0}Ty.exports=kgr});var N1=s((fge,Iy)=>{"use strict";var Cgr=M().isObject;function Vgr(r){return Cgr(r)&&r.valueOf()>=0}Iy.exports=Vgr});var Ly=s((cge,Ry)=>{"use strict";var Ugr=E1(),Ggr=N1();function xgr(r){return Ugr(r)||Ggr(r)}Ry.exports=xgr});var $a=s((lge,Fy)=>{"use strict";var Py=b(),S1=Ly(),Dgr=E1(),Hgr=N1();Py(S1,"isPrimitive",Dgr);Py(S1,"isObject",Hgr);Fy.exports=S1});var By=s((pge,My)=>{"use strict";var Wgr=$a().isPrimitive,zgr=q();function Xgr(r,e){if(!Wgr(r))throw new TypeError(zgr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}My.exports=Xgr});var ky=s((gge,jy)=>{"use strict";var Jgr=By();jy.exports=Jgr});var Vy=s((mge,Cy)=>{"use strict";var Ygr=M().isPrimitive,$gr=q();function Zgr(r,e){if(!Ygr(r))throw new TypeError($gr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Cy.exports=Zgr});var Gy=s((dge,Uy)=>{"use strict";var Qgr=Vy();Uy.exports=Qgr});var Dy=s((hge,xy)=>{"use strict";var Kgr=q();function rmr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Kgr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}xy.exports=rmr});var Wy=s((yge,Hy)=>{"use strict";var emr=Dy();Hy.exports=emr});var O1=s((qge,zy)=>{"use strict";var tmr=gr().isPrimitive;function imr(r){return tmr(r)&&r>0}zy.exports=imr});var A1=s((bge,Xy)=>{"use strict";var nmr=gr().isObject;function amr(r){return nmr(r)&&r.valueOf()>0}Xy.exports=amr});var Yy=s((wge,Jy)=>{"use strict";var smr=O1(),umr=A1();function omr(r){return smr(r)||umr(r)}Jy.exports=omr});var te=s((Ege,Zy)=>{"use strict";var $y=b(),_1=Yy(),vmr=O1(),fmr=A1();$y(_1,"isPrimitive",vmr);$y(_1,"isObject",fmr);Zy.exports=_1});var Ky=s((Nge,Qy)=>{"use strict";var cmr=te().isPrimitive,lmr=q();function pmr(r,e){if(!cmr(r))throw new TypeError(lmr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Qy.exports=pmr});var T1=s((Sge,rq)=>{"use strict";var gmr=Ky();rq.exports=gmr});var I1=s((Oge,eq)=>{"use strict";var mmr=M().isPrimitive;function dmr(r){return mmr(r)&&r>0}eq.exports=dmr});var R1=s((Age,tq)=>{"use strict";var hmr=M().isObject;function ymr(r){return hmr(r)&&r.valueOf()>0}tq.exports=ymr});var nq=s((_ge,iq)=>{"use strict";var qmr=I1(),bmr=R1();function wmr(r){return qmr(r)||bmr(r)}iq.exports=wmr});var W=s((Tge,sq)=>{"use strict";var aq=b(),L1=nq(),Emr=I1(),Nmr=R1();aq(L1,"isPrimitive",Emr);aq(L1,"isObject",Nmr);sq.exports=L1});var oq=s((Ige,uq)=>{"use strict";var Smr=W().isPrimitive,Omr=q();function Amr(r,e){if(!Smr(r))throw new TypeError(Omr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}uq.exports=Amr});var fq=s((Rge,vq)=>{"use strict";var _mr=oq();vq.exports=_mr});var P1=s((Lge,cq)=>{"use strict";var Tmr=M().isPrimitive;function Imr(r){return Tmr(r)&&r>=0&&r<=1}cq.exports=Imr});var F1=s((Pge,lq)=>{"use strict";var Rmr=M().isObject;function Lmr(r){return Rmr(r)&&r.valueOf()>=0&&r.valueOf()<=1}lq.exports=Lmr});var gq=s((Fge,pq)=>{"use strict";var Pmr=P1(),Fmr=F1();function Mmr(r){return Pmr(r)||Fmr(r)}pq.exports=Mmr});var _n=s((Mge,dq)=>{"use strict";var mq=b(),M1=gq(),Bmr=P1(),jmr=F1();mq(M1,"isPrimitive",Bmr);mq(M1,"isObject",jmr);dq.exports=M1});var yq=s((Bge,hq)=>{"use strict";var kmr=_n().isPrimitive,Cmr=q();function Vmr(r,e){if(!kmr(r))throw new TypeError(Cmr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}hq.exports=Vmr});var bq=s((jge,qq)=>{"use strict";var Umr=yq();qq.exports=Umr});var Eq=s((kge,wq)=>{"use strict";var Gmr=dr(),xmr=q();function Dmr(r,e){if(!Gmr(r))throw new TypeError(xmr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}wq.exports=Dmr});var Sq=s((Cge,Nq)=>{"use strict";var Hmr=Eq();Nq.exports=Hmr});var Aq=s((Vge,Oq)=>{"use strict";function Wmr(r){return r.length===1||r[0].length===1}Oq.exports=Wmr});var Tq=s((Uge,_q)=>{"use strict";var zmr=Aq();_q.exports=zmr});var Rq=s((Gge,Iq)=>{"use strict";var Xmr=dr(),Jmr=Tq();function Ymr(r){return Xmr(r)&&Jmr(r)}Iq.exports=Ymr});var B1=s((xge,Lq)=>{"use strict";var $mr=Rq();Lq.exports=$mr});var Fq=s((Dge,Pq)=>{"use strict";var Zmr=q(),Qmr=B1();function Kmr(r,e){if(!Qmr(r))throw new TypeError(Zmr("invalid argument. %s must consist of only a single row or a single column.",e))}Pq.exports=Kmr});var Bq=s((Hge,Mq)=>{"use strict";var rdr=Fq();Mq.exports=rdr});var kq=s((Wge,jq)=>{"use strict";function edr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}jq.exports=edr});var Vq=s((zge,Cq)=>{"use strict";var tdr=kq();Cq.exports=tdr});var Gq=s((Xge,Uq)=>{"use strict";var idr=q(),ndr=Vq();function adr(r,e,t){if(!ndr(r,e))throw new TypeError(idr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Uq.exports=adr});var Dq=s((Jge,xq)=>{"use strict";var sdr=Gq();xq.exports=sdr});var Wq=s((Yge,Hq)=>{"use strict";var udr=$().isPrimitive,odr=q();function vdr(r,e){if(!udr(r))throw new TypeError(odr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}Hq.exports=vdr});var Xq=s(($ge,zq)=>{"use strict";var fdr=Wq();zq.exports=fdr});var Yq=s((Zge,Jq)=>{"use strict";var cdr=q(),ldr=hr().isPrimitive;function pdr(r,e){var t;for(t=0;t<r.length;t++)if(!ldr(r[t]))throw new TypeError(cdr("invalid argument. %s must contain only nonnegative integers.",e))}Jq.exports=pdr});var Zq=s((Qge,$q)=>{"use strict";var gdr=Yq();$q.exports=gdr});var Kq=s((Kge,Qq)=>{"use strict";var mdr=q(),ddr=gr().isPrimitive;function hdr(r,e){var t;for(t=0;t<r.length;t++)if(!ddr(r[t]))throw new TypeError(mdr("invalid argument. %s must contain only integers.",e))}Qq.exports=hdr});var eb=s((rme,rb)=>{"use strict";var ydr=Kq();rb.exports=ydr});var ib=s((eme,tb)=>{"use strict";var qdr=q();function bdr(r){throw new Error(qdr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}tb.exports=bdr});var ab=s((tme,nb)=>{"use strict";var wdr=ib();nb.exports=wdr});var ob=s((ime,ub)=>{"use strict";var sb=T1(),Edr=w1();function Ndr(r,e,t){sb(r,"Number of rows"),sb(e,"Number of columns"),Edr(t,"a pseudorandom number generator seed")}ub.exports=Ndr});var fb=s((nme,vb)=>{"use strict";var Sdr=ob();vb.exports=Sdr});var lb=s((ame,cb)=>{"use strict";var Odr=yr(),Adr=e1();function _dr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&Odr(r.length)&&r.length>=0&&r.length<=Adr}cb.exports=_dr});var gb=s((sme,pb)=>{"use strict";var Tdr=lb();pb.exports=Tdr});var db=s((ume,mb)=>{"use strict";var Idr=gb(),Rdr=q();function Ldr(r){if(typeof r!="function")throw new TypeError(Rdr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Idr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}mb.exports=Ldr});var j1=s((ome,hb)=>{"use strict";var Pdr=db();hb.exports=Pdr});var bb=s((vme,qb)=>{"use strict";var k1=gr(),yb=b(),C1=j1(),Fdr=C1(k1.isPrimitive),Mdr=C1(k1.isObject),V1=C1(k1);yb(V1,"primitives",Fdr);yb(V1,"objects",Mdr);qb.exports=V1});var Nb=s((fme,Eb)=>{"use strict";var U1=hr(),wb=b(),G1=j1(),Bdr=G1(U1.isPrimitive),jdr=G1(U1.isObject),x1=G1(U1);wb(x1,"primitives",Bdr);wb(x1,"objects",jdr);Eb.exports=x1});var Ob=s((cme,Sb)=>{"use strict";var ie=rr(),kdr=dr(),Cdr=gr().isPrimitive,Vdr=bb().primitives,Udr=hr().isPrimitive,Gdr=Nb().primitives,xdr=$a().isPrimitive,Ddr=M().isPrimitive,Hdr=te().isPrimitive,Wdr=W().isPrimitive,zdr=$().isPrimitive;function Xdr(r){return ie(r,"isArray",kdr),ie(r,"isInteger",Cdr),ie(r,"isIntegerArray",Vdr),ie(r,"isNonNegativeInteger",Udr),ie(r,"isNonNegativeIntegerArray",Gdr),ie(r,"isNonNegativeNumber",xdr),ie(r,"isNumber",Ddr),ie(r,"isPositiveInteger",Hdr),ie(r,"isPositiveNumber",Wdr),ie(r,"isString",zdr),r}Sb.exports=Xdr});var _b=s((lme,Ab)=>{"use strict";var X=rr(),Jdr=wh(),Ydr=Oh(),$dr=Fh(),Zdr=Gh(),Qdr=ry(),Kdr=w1(),rhr=uy(),ehr=cy(),thr=my(),ihr=qy(),nhr=Ny(),ahr=_y(),shr=ky(),uhr=Gy(),ohr=Wy(),vhr=T1(),fhr=fq(),chr=bq(),lhr=Sq(),phr=Bq(),ghr=Dq(),mhr=Xq(),dhr=Zq(),hhr=eb(),yhr=ab(),qhr=fb(),bhr=Ob();function whr(r){return X(r,"isBetween",Jdr),X(r,"isBoolean",Ydr),X(r,"isBroadcastCompatible",$dr),X(r,"isBroadcastCompatibleWith",Zdr),X(r,"isBufferLengthCompatible",Qdr),X(r,"isDefined",Kdr),X(r,"isGreaterThan",rhr),X(r,"isGreaterThanEqual",ehr),X(r,"isInteger",thr),X(r,"isLessThan",ihr),X(r,"isLessThanEqual",nhr),X(r,"isNonNegativeInteger",ahr),X(r,"isNonNegativeNumber",shr),X(r,"isNumber",uhr),X(r,"isOneOf",ohr),X(r,"isPositiveInteger",vhr),X(r,"isPositiveNumber",fhr),X(r,"isProbability",chr),X(r,"isRange",lhr),X(r,"isRange1d",phr),X(r,"isSameShape",ghr),X(r,"isString",mhr),X(r,"isValidShape",dhr),X(r,"isValidStrides",hhr),X(r,"unrecognizedOptionName",yhr),X(r,"verifyCommonPRNGArgs",qhr),X(r,"base",bhr({})),r}Ab.exports=whr});var Ib=s((pme,Tb)=>{"use strict";var D1=4;function Ehr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%D1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<D1)return n;for(f=v;f<r;f+=D1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}Tb.exports=Ehr});var Lb=s((gme,Rb)=>{"use strict";var Tn=4;function Nhr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%Tn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<Tn)return a;for(l=c;l<r;l+=Tn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Tn,f+=Tn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}Rb.exports=Nhr});var H1=s((mme,Fb)=>{"use strict";var Shr=b(),Pb=Ib(),Ohr=Lb();Shr(Pb,"ndarray",Ohr);Fb.exports=Pb});var jb=s((dme,Bb)=>{"use strict";var Mb=rr(),Ahr=H1().ndarray,_hr=H1().ndarray;function Thr(r){return Mb(r,"daxpy",Ahr),Mb(r,"saxpy",_hr),r}Bb.exports=Thr});var Cb=s((hme,kb)=>{"use strict";var Ihr=Xt(),Rhr=er();function Lhr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Rhr(r)==="[object Error]")return!0;r=Ihr(r)}return!1}kb.exports=Lhr});var Ub=s((yme,Vb)=>{"use strict";var Phr=Cb();Vb.exports=Phr});var W1=s((qme,Gb)=>{"use strict";function Fhr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Gb.exports=Fhr});var Db=s((bme,xb)=>{"use strict";var Mhr=W1(),Bhr=Mhr();xb.exports=Bhr});var zb=s((wme,Wb)=>{"use strict";var jhr=b(),Hb=W1(),khr=Db();jhr(Hb,"REGEXP",khr);Wb.exports=Hb});var Jb=s((Eme,Xb)=>{"use strict";var Chr=$().isPrimitive,Vhr=zb(),Uhr=q();function Ghr(r){if(!Chr(r))throw new TypeError(Uhr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=Vhr().exec(r),r?new RegExp(r[1],r[2]):null}Xb.exports=Ghr});var $b=s((Nme,Yb)=>{"use strict";var xhr=Jb();Yb.exports=xhr});var z1=s((Sme,Zb)=>{"use strict";var Dhr=M().isPrimitive,Hhr=E();function Whr(r){return Dhr(r)&&Hhr(r)}Zb.exports=Whr});var X1=s((Ome,Qb)=>{"use strict";var zhr=M().isObject,Xhr=E();function Jhr(r){return zhr(r)&&Xhr(r.valueOf())}Qb.exports=Jhr});var rw=s((Ame,Kb)=>{"use strict";var Yhr=z1(),$hr=X1();function Zhr(r){return Yhr(r)||$hr(r)}Kb.exports=Zhr});var vr=s((_me,tw)=>{"use strict";var ew=b(),J1=rw(),Qhr=z1(),Khr=X1();ew(J1,"isPrimitive",Qhr);ew(J1,"isObject",Khr);tw.exports=J1});var sw=s((Tme,aw)=>{"use strict";var iw=vr(),ryr=Br(),eyr=$().isPrimitive,tyr=gr().isPrimitive,nw=q();function iyr(r,e,t){var i,n;if(!ryr(r)&&!eyr(r))throw new TypeError(nw("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!tyr(t))throw new TypeError(nw("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(iw(e)){for(;n<i;n++)if(iw(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}aw.exports=iyr});var Za=s((Ime,uw)=>{"use strict";var nyr=sw();uw.exports=nyr});var Qa=s((Rme,ow)=>{"use strict";function ayr(r){return Object.keys(Object(r))}ow.exports=ayr});var fw=s((Lme,vw)=>{"use strict";var syr=Qa();function uyr(){return(syr(arguments)||"").length!==2}function oyr(){return uyr(1,2)}vw.exports=oyr});var lw=s((Pme,cw)=>{"use strict";var vyr=typeof Object.keys<"u";cw.exports=vyr});var Y1=s((Fme,pw)=>{"use strict";var fyr=er();function cyr(r){return fyr(r)==="[object Arguments]"}pw.exports=cyr});var dw=s((Mme,mw)=>{"use strict";var lyr=Y1(),gw;function pyr(){return lyr(arguments)}gw=pyr();mw.exports=gw});var $1=s((Bme,hw)=>{"use strict";var gyr=Object.prototype.propertyIsEnumerable;hw.exports=gyr});var bw=s((jme,qw)=>{"use strict";var myr=$1(),yw;function dyr(){return!myr.call("beep","0")}yw=dyr();qw.exports=yw});var Ew=s((kme,ww)=>{"use strict";var hyr=$(),yyr=vr().isPrimitive,qyr=gr().isPrimitive,byr=$1(),wyr=bw();function Eyr(r,e){var t;return r==null?!1:(t=byr.call(r,e),!t&&wyr&&hyr(r)?(e=+e,!yyr(e)&&qyr(e)&&e>=0&&e<r.length):t)}ww.exports=Eyr});var In=s((Cme,Nw)=>{"use strict";var Nyr=Ew();Nw.exports=Nyr});var Ow=s((Vme,Sw)=>{"use strict";var Syr=O(),Oyr=In(),Ayr=dr(),_yr=yr(),Tyr=ci();function Iyr(r){return r!==null&&typeof r=="object"&&!Ayr(r)&&typeof r.length=="number"&&_yr(r.length)&&r.length>=0&&r.length<=Tyr&&Syr(r,"callee")&&!Oyr(r,"callee")}Sw.exports=Iyr});var Q1=s((Ume,Aw)=>{"use strict";var Ryr=dw(),Lyr=Y1(),Pyr=Ow(),Z1;Ryr?Z1=Lyr:Z1=Pyr;Aw.exports=Z1});var Iw=s((Gme,Tw)=>{"use strict";var Fyr=Q1(),_w=Qa(),Myr=Array.prototype.slice;function Byr(r){return Fyr(r)?_w(Myr.call(r)):_w(r)}Tw.exports=Byr});var Lw=s((xme,Rw)=>{"use strict";function jyr(){}Rw.exports=jyr});var C=s((Dme,Pw)=>{"use strict";var kyr=Lw();Pw.exports=kyr});var Mw=s((Hme,Fw)=>{"use strict";var Cyr=In(),Vyr=C(),Uyr=Cyr(Vyr,"prototype");Fw.exports=Uyr});var jw=s((Wme,Bw)=>{"use strict";var Gyr=In(),xyr={toString:null},Dyr=!Gyr(xyr,"toString");Bw.exports=Dyr});var K1=s((zme,kw)=>{"use strict";function Hyr(r){return r.constructor&&r.constructor.prototype===r}kw.exports=Hyr});var Cw=s((Xme,Wyr)=>{Wyr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Uw=s((Jme,Vw)=>{"use strict";var zyr=typeof window>"u"?void 0:window;Vw.exports=zyr});var Hw=s((Yme,Dw)=>{"use strict";var Xyr=O(),Jyr=Za(),Gw=La(),Yyr=K1(),$yr=Cw(),Pi=Uw(),xw;function Zyr(){var r;if(Gw(Pi)==="undefined")return!1;for(r in Pi)try{Jyr($yr,r)===-1&&Xyr(Pi,r)&&Pi[r]!==null&&Gw(Pi[r])==="object"&&Yyr(Pi[r])}catch{return!0}return!1}xw=Zyr();Dw.exports=xw});var zw=s(($me,Ww)=>{"use strict";var Qyr=typeof window<"u";Ww.exports=Qyr});var Yw=s((Zme,Jw)=>{"use strict";var Kyr=Hw(),Xw=K1(),rqr=zw();function eqr(r){if(rqr===!1&&!Kyr)return Xw(r);try{return Xw(r)}catch{return!1}}Jw.exports=eqr});var $w=s((Qme,tqr)=>{tqr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Kw=s((Kme,Qw)=>{"use strict";var iqr=Io(),r2=O(),nqr=Q1(),aqr=Mw(),sqr=jw(),uqr=Yw(),Zw=$w();function oqr(r){var e,t,i,n,a,u,o;if(n=[],nqr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!r2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!iqr(r))return n;t=aqr&&i}for(a in r)!(t&&a==="prototype")&&r2(r,a)&&n.push(String(a));if(sqr)for(e=uqr(r),o=0;o<Zw.length;o++)u=Zw[o],!(e&&u==="constructor")&&r2(r,u)&&n.push(String(u));return n}Qw.exports=oqr});var eE=s((rde,rE)=>{"use strict";var vqr=fw(),fqr=lw(),cqr=Qa(),lqr=Iw(),pqr=Kw(),Ka;fqr?vqr()?Ka=lqr:Ka=cqr:Ka=pqr;rE.exports=Ka});var Fi=s((ede,tE)=>{"use strict";var gqr=eE();tE.exports=gqr});var nE=s((tde,iE)=>{"use strict";var mqr=typeof Object.getOwnPropertyNames<"u";iE.exports=mqr});var uE=s((ide,sE)=>{"use strict";var aE=Ri(),dqr=aE.getOwnPropertyNames;function hqr(r){return dqr(aE(r))}sE.exports=hqr});var vE=s((nde,oE)=>{"use strict";var yqr=Ri(),qqr=Fi();function bqr(r){return qqr(yqr(r))}oE.exports=bqr});var cE=s((ade,fE)=>{"use strict";var wqr=nE(),Eqr=uE(),Nqr=vE(),e2;wqr?e2=Eqr:e2=Nqr;fE.exports=e2});var pE=s((sde,lE)=>{"use strict";var Sqr=typeof Object.getOwnPropertyDescriptor<"u";lE.exports=Sqr});var mE=s((ude,gE)=>{"use strict";var Oqr=Object.getOwnPropertyDescriptor;function Aqr(r,e){var t;return r==null?null:(t=Oqr(r,e),t===void 0?null:t)}gE.exports=Aqr});var hE=s((ode,dE)=>{"use strict";var _qr=O();function Tqr(r,e){return _qr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}dE.exports=Tqr});var qE=s((vde,yE)=>{"use strict";var Iqr=pE(),Rqr=mE(),Lqr=hE(),t2;Iqr?t2=Rqr:t2=Lqr;yE.exports=t2});var wE=s((fde,bE)=>{"use strict";var Pqr=typeof Buffer=="function"?Buffer:null;bE.exports=Pqr});var NE=s((cde,EE)=>{"use strict";var Fqr=Ut(),r0=wE();function Mqr(){var r,e;if(typeof r0!="function")return!1;try{typeof r0.from=="function"?e=r0.from([1,2,3,4]):e=new r0([1,2,3,4]),r=Fqr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}EE.exports=Mqr});var OE=s((lde,SE)=>{"use strict";var Bqr=NE();SE.exports=Bqr});var TE=s(e0=>{"use strict";e0.byteLength=kqr;e0.toByteArray=Vqr;e0.fromByteArray=xqr;var ne=[],xr=[],jqr=typeof Uint8Array<"u"?Uint8Array:Array,i2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Jt=0,AE=i2.length;Jt<AE;++Jt)ne[Jt]=i2[Jt],xr[i2.charCodeAt(Jt)]=Jt;var Jt,AE;xr["-".charCodeAt(0)]=62;xr["_".charCodeAt(0)]=63;function _E(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function kqr(r){var e=_E(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Cqr(r,e,t){return(e+t)*3/4-t}function Vqr(r){var e,t=_E(r),i=t[0],n=t[1],a=new jqr(Cqr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=xr[r.charCodeAt(v)]<<18|xr[r.charCodeAt(v+1)]<<12|xr[r.charCodeAt(v+2)]<<6|xr[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=xr[r.charCodeAt(v)]<<2|xr[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=xr[r.charCodeAt(v)]<<10|xr[r.charCodeAt(v+1)]<<4|xr[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Uqr(r){return ne[r>>18&63]+ne[r>>12&63]+ne[r>>6&63]+ne[r&63]}function Gqr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Uqr(i));return n.join("")}function xqr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(Gqr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ne[e>>2]+ne[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ne[e>>10]+ne[e>>4&63]+ne[e<<2&63]+"=")),n.join("")}});var IE=s(n2=>{n2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(g?-1:1)*u*Math.pow(2,a-i)};n2.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+g]=u&255,g+=h,u/=256,f-=8);r[t+g-h]|=d*128}});var zE=s(ki=>{"use strict";var a2=TE(),Bi=IE(),RE=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ki.Buffer=w;ki.SlowBuffer=Jqr;ki.INSPECT_MAX_BYTES=50;var t0=2147483647;ki.kMaxLength=t0;w.TYPED_ARRAY_SUPPORT=Dqr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Dqr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function me(r){if(r>t0)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v2(r)}return ME(r,e,t)}w.poolSize=8192;function ME(r,e,t){if(typeof r=="string")return Wqr(r,e);if(ArrayBuffer.isView(r))return zqr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ae(r,ArrayBuffer)||r&&ae(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ae(r,SharedArrayBuffer)||r&&ae(r.buffer,SharedArrayBuffer)))return u2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=Xqr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return ME(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function BE(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Hqr(r,e,t){return BE(r),r<=0?me(r):e!==void 0?typeof t=="string"?me(r).fill(e,t):me(r).fill(e):me(r)}w.alloc=function(r,e,t){return Hqr(r,e,t)};function v2(r){return BE(r),me(r<0?0:f2(r)|0)}w.allocUnsafe=function(r){return v2(r)};w.allocUnsafeSlow=function(r){return v2(r)};function Wqr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=jE(r,e)|0,i=me(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function s2(r){let e=r.length<0?0:f2(r.length)|0,t=me(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function zqr(r){if(ae(r,Uint8Array)){let e=new Uint8Array(r);return u2(e.buffer,e.byteOffset,e.byteLength)}return s2(r)}function u2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function Xqr(r){if(w.isBuffer(r)){let e=f2(r.length)|0,t=me(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||l2(r.length)?me(0):s2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return s2(r.data)}function f2(r){if(r>=t0)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+t0.toString(16)+" bytes");return r|0}function Jqr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(ae(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(ae(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function jE(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ae(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return o2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return WE(r).length;default:if(n)return i?-1:o2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=jE;function Yqr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return abr(this,e,t);case"utf8":case"utf-8":return CE(this,e,t);case"ascii":return ibr(this,e,t);case"latin1":case"binary":return nbr(this,e,t);case"base64":return ebr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return sbr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Yt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Yt(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Yt(this,t,t+3),Yt(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Yt(this,t,t+7),Yt(this,t+1,t+6),Yt(this,t+2,t+5),Yt(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?CE(this,0,e):Yqr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=ki.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};RE&&(w.prototype[RE]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(ae(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function kE(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,l2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:LE(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):LE(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function LE(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return kE(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return kE(this,e,t,i,!1)};function $qr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(l2(o))return u;r[t+u]=o}return u}function Zqr(r,e,t,i){return i0(o2(e,r.length-t),r,t,i)}function Qqr(r,e,t,i){return i0(fbr(e),r,t,i)}function Kqr(r,e,t,i){return i0(WE(e),r,t,i)}function rbr(r,e,t,i){return i0(cbr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return $qr(this,e,t,i);case"utf8":case"utf-8":return Zqr(this,e,t,i);case"ascii":case"latin1":case"binary":return Qqr(this,e,t,i);case"base64":return Kqr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rbr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function ebr(r,e,t){return e===0&&t===r.length?a2.fromByteArray(r):a2.fromByteArray(r.slice(e,t))}function CE(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return tbr(i)}var PE=4096;function tbr(r){let e=r.length;if(e<=PE)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=PE));return t}function ibr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function nbr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function abr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=lbr[r[a]];return n}function sbr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Bi.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Bi.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Bi.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Bi.read(this,e,!1,52,8)};function Er(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function VE(r,e,t,i,n){HE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function UE(r,e,t,i,n){HE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=tt(function(e,t=0){return VE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=tt(function(e,t=0){return UE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);Er(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);Er(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=tt(function(e,t=0){return VE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=tt(function(e,t=0){return UE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function GE(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xE(r,e,t,i,n){return e=+e,t=t>>>0,n||GE(r,e,t,4,34028234663852886e22,-34028234663852886e22),Bi.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return xE(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return xE(this,e,t,!1,i)};function DE(r,e,t,i,n){return e=+e,t=t>>>0,n||GE(r,e,t,8,17976931348623157e292,-17976931348623157e292),Bi.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return DE(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return DE(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Mi={};function c2(r,e,t){Mi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}c2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);c2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);c2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=FE(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=FE(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function FE(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function ubr(r,e,t){ji(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Rn(e,r.length-(t+1))}function HE(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Mi.ERR_OUT_OF_RANGE("value",o,r)}ubr(i,n,a)}function ji(r,e){if(typeof r!="number")throw new Mi.ERR_INVALID_ARG_TYPE(e,"number",r)}function Rn(r,e,t){throw Math.floor(r)!==r?(ji(r,t),new Mi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Mi.ERR_BUFFER_OUT_OF_BOUNDS:new Mi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var obr=/[^+/0-9A-Za-z-_]/g;function vbr(r){if(r=r.split("=")[0],r=r.trim().replace(obr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function o2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function fbr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function cbr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function WE(r){return a2.toByteArray(vbr(r))}function i0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function ae(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function l2(r){return r!==r}var lbr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function tt(r){return typeof BigInt>"u"?pbr:r}function pbr(){throw new Error("BigInt not supported")}});var JE=s((hde,XE)=>{"use strict";var gbr=zE().Buffer;XE.exports=gbr});var $E=s((yde,YE)=>{"use strict";function mbr(){throw new Error("not implemented")}YE.exports=mbr});var it=s((qde,ZE)=>{"use strict";var dbr=OE(),hbr=JE(),ybr=$E(),p2;dbr()?p2=hbr:p2=ybr;ZE.exports=p2});var KE=s((bde,QE)=>{"use strict";var qbr=I(),bbr=it(),wbr=qbr(bbr.from);QE.exports=wbr});var eN=s((wde,rN)=>{"use strict";var Ebr=Ut(),Nbr=q(),Sbr=it();function Obr(r){if(!Ebr(r))throw new TypeError(Nbr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Sbr.from(r)}rN.exports=Obr});var iN=s((Ede,tN)=>{"use strict";var Abr=Ut(),_br=q(),Tbr=it();function Ibr(r){if(!Abr(r))throw new TypeError(_br("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Tbr(r)}tN.exports=Ibr});var aN=s((Nde,nN)=>{"use strict";var Rbr=KE(),Lbr=eN(),Pbr=iN(),g2;Rbr?g2=Lbr:g2=Pbr;nN.exports=g2});var oN=s((Sde,uN)=>{"use strict";var Fbr=mi(),Mbr=Kr(),Bbr=gi(),jbr=pi(),kbr=Gt(),Cbr=Ke(),Vbr=pr(),Ubr=Qr(),Gbr=lr(),sN;function xbr(r){return new Fbr(r)}function Dbr(r){return new Mbr(r)}function Hbr(r){return new Bbr(r)}function Wbr(r){return new jbr(r)}function zbr(r){return new kbr(r)}function Xbr(r){return new Cbr(r)}function Jbr(r){return new Vbr(r)}function Ybr(r){return new Ubr(r)}function $br(r){return new Gbr(r)}function Zbr(){var r={int8array:xbr,uint8array:Dbr,uint8clampedarray:Hbr,int16array:Wbr,uint16array:zbr,int32array:Xbr,uint32array:Jbr,float32array:Ybr,float64array:$br};return r}sN=Zbr();uN.exports=sN});var pN=s((Ode,lN)=>{"use strict";var n0=O(),m2=dr(),vN=Ut(),Qbr=Ub(),fN=La(),Kbr=$b(),rwr=Za(),cN=Fi(),ewr=cE(),Ln=qE(),twr=Xt(),Pn=Ze(),iwr=aN(),nwr=oN();function awr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(twr(r)),e.push(r),n.push(o),t=ewr(r),v=0;v<t.length;v++)i=t[v],a=Ln(r,i),n0(a,"value")&&(u=m2(r[i])?[]:{},a.value=$t(r[i],u,e,n,-1)),Pn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function swr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=cN(r),v=0;v<i.length;v++)u=i[v],n=Ln(r,u),n0(n,"value")&&(a=m2(r[u])?[]:{},n.value=$t(r[u],a,e,t,-1)),Pn(o,u,n);return o}function $t(r,e,t,i,n){var a,u,o,v,f,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(vN(r))return iwr(r);if(Qbr(r))return swr(r);if(o=fN(r),o==="date")return new Date(+r);if(o==="regexp")return Kbr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=nwr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?awr(r):{};if(u=cN(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=fN(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||vN(p)){a==="object"?(v=Ln(r,c),n0(v,"value")&&(v.value=$t(p)),Pn(e,c,v)):e[c]=$t(p);continue}if(g=rwr(t,p),g!==-1){e[c]=i[g];continue}l=m2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=$t(p,l,t,i,n):(v=Ln(r,c),n0(v,"value")&&(v.value=$t(p,l,t,i,n)),Pn(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=Ln(r,c),Pn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}lN.exports=$t});var mN=s((Ade,gN)=>{"use strict";var uwr=dr(),owr=hr().isPrimitive,vwr=q(),fwr=R(),cwr=pN();function lwr(r,e){var t;if(arguments.length>1){if(!owr(e))throw new TypeError(vwr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=fwr;return t=uwr(r)?new Array(r.length):{},cwr(r,t,[r],[t],e)}gN.exports=lwr});var Fn=s((_de,dN)=>{"use strict";var pwr=mN();dN.exports=pwr});var hN=s((Tde,gwr)=>{gwr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var qN=s((Ide,yN)=>{"use strict";var mwr=Fn(),dwr=hN();function hwr(){return mwr(dwr)}yN.exports=hwr});var bN=s((Rde,ywr)=>{ywr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var EN=s((Lde,wN)=>{"use strict";var qwr=Fn(),bwr=bN();function wwr(){return qwr(bwr)}wN.exports=wwr});var NN=s((Pde,Ewr)=>{Ewr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var ON=s((Fde,SN)=>{"use strict";var Nwr=Fn(),Swr=NN();function Owr(){return Nwr(Swr)}SN.exports=Owr});var AN=s((Mde,Awr)=>{Awr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var TN=s((Bde,_N)=>{"use strict";var _wr=AN();function Twr(){return _wr.slice()}_N.exports=Twr});var IN=s((jde,Iwr)=>{Iwr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var LN=s((kde,RN)=>{"use strict";var Rwr=Fn(),Lwr=IN();function Pwr(){return Rwr(Lwr)}RN.exports=Pwr});var FN=s((Cde,PN)=>{"use strict";var Mn=rr(),Fwr=qN(),Mwr=EN(),Bwr=ON(),jwr=TN(),kwr=LN();function Cwr(r){return Mn(r,"AFINN_111",Fwr),Mn(r,"AFINN_96",Mwr),Mn(r,"ANSCOMBES_QUARTET",Bwr),Mn(r,"HERNDON_VENUS_SEMIDIAMETERS",jwr),Mn(r,"NIGHTINGALES_ROSE",kwr),r}PN.exports=Cwr});var BN=s((Vde,MN)=>{"use strict";function Vwr(r,e){return r+e}MN.exports=Vwr});var kN=s((Ude,jN)=>{"use strict";var Uwr=BN();jN.exports=Uwr});var VN=s((Gde,CN)=>{"use strict";var Gwr=R(),xwr=V();function Dwr(r){return r===Gwr||r===xwr}CN.exports=Dwr});var Cr=s((xde,UN)=>{"use strict";var Hwr=VN();UN.exports=Hwr});var DN=s((Dde,xN)=>{"use strict";var GN=ja();function Wwr(r){return r>0?GN(r-1):GN(r+1)}xN.exports=Wwr});var a0=s((Hde,HN)=>{"use strict";var zwr=DN();HN.exports=zwr});var zN=s((Wde,WN)=>{"use strict";var Xwr=Math.sqrt;WN.exports=Xwr});var U=s((zde,XN)=>{"use strict";var Jwr=zN();XN.exports=Jwr});var YN=s((Xde,JN)=>{"use strict";function Ywr(r){return Math.abs(r)}JN.exports=Ywr});var Y=s((Jde,$N)=>{"use strict";var $wr=YN();$N.exports=$wr});var QN=s((Yde,ZN)=>{"use strict";var Zwr=Kr(),Qwr=Gt(),Kwr={uint16:Qwr,uint8:Zwr};ZN.exports=Kwr});var tS=s(($de,eS)=>{"use strict";var KN=QN(),rS;function rEr(){var r,e;return r=new KN.uint16(1),r[0]=4660,e=new KN.uint8(r.buffer),e[0]===52}rS=rEr();eS.exports=rS});var Xr=s((Zde,iS)=>{"use strict";var eEr=tS();iS.exports=eEr});var sS=s((Qde,aS)=>{"use strict";var tEr=Xr(),nS,d2,h2;tEr===!0?(d2=1,h2=0):(d2=0,h2=1);nS={HIGH:d2,LOW:h2};aS.exports=nS});var y2=s((Kde,fS)=>{"use strict";var iEr=pr(),nEr=lr(),oS=sS(),vS=new nEr(1),uS=new iEr(vS.buffer),aEr=oS.HIGH,sEr=oS.LOW;function uEr(r,e,t,i){return vS[0]=r,e[i]=uS[aEr],e[i+t]=uS[sEr],e}fS.exports=uEr});var lS=s((rhe,cS)=>{"use strict";var oEr=y2();function vEr(r){return oEr(r,[0>>>0,0>>>0],1,0)}cS.exports=vEr});var Ci=s((ehe,gS)=>{"use strict";var fEr=b(),pS=lS(),cEr=y2();fEr(pS,"assign",cEr);gS.exports=pS});var dS=s((the,mS)=>{"use strict";var lEr=Xr(),q2;lEr===!0?q2=0:q2=1;mS.exports=q2});var yS=s((ihe,hS)=>{"use strict";var pEr=pr(),gEr=lr(),mEr=dS(),b2=new gEr(1),dEr=new pEr(b2.buffer);function hEr(r,e){return b2[0]=r,dEr[mEr]=e>>>0,b2[0]}hS.exports=hEr});var de=s((nhe,qS)=>{"use strict";var yEr=yS();qS.exports=yEr});var wS=s((ahe,bS)=>{"use strict";function qEr(r){return r|0}bS.exports=qEr});var w2=s((she,ES)=>{"use strict";var bEr=wS();ES.exports=bEr});var se=s((uhe,NS)=>{"use strict";var wEr=2147483647;NS.exports=wEr});var E2=s((ohe,SS)=>{"use strict";var EEr=2147483648;SS.exports=EEr});var AS=s((vhe,OS)=>{"use strict";var NEr=Xr(),N2;NEr===!0?N2=1:N2=0;OS.exports=N2});var IS=s((fhe,TS)=>{"use strict";var SEr=pr(),OEr=lr(),AEr=AS(),_S=new OEr(1),_Er=new SEr(_S.buffer);function TEr(r){return _S[0]=r,_Er[AEr]}TS.exports=TEr});var ar=s((che,RS)=>{"use strict";var IEr=IS();RS.exports=IEr});var FS=s((lhe,PS)=>{"use strict";var REr=Xr(),LS,S2,O2;REr===!0?(S2=1,O2=0):(S2=0,O2=1);LS={HIGH:S2,LOW:O2};PS.exports=LS});var CS=s((phe,kS)=>{"use strict";var LEr=pr(),PEr=lr(),BS=FS(),jS=new PEr(1),MS=new LEr(jS.buffer),FEr=BS.HIGH,MEr=BS.LOW;function BEr(r,e){return MS[FEr]=r,MS[MEr]=e,jS[0]}kS.exports=BEr});var Vi=s((ghe,VS)=>{"use strict";var jEr=CS();VS.exports=jEr});var GS=s((mhe,US)=>{"use strict";var kEr=E2(),CEr=se(),VEr=Ci(),UEr=ar(),GEr=Vi(),A2=[0,0];function xEr(r,e){var t,i;return VEr.assign(r,A2,1,0),t=A2[0],t&=CEr,i=UEr(e),i&=kEr,t|=i,GEr(t,A2[1])}US.exports=xEr});var s0=s((dhe,xS)=>{"use strict";var DEr=GS();xS.exports=DEr});var WS=s((hhe,HS)=>{"use strict";var DS=a0(),HEr=s0(),WEr=V(),u0=R();function zEr(r,e){return e===WEr?u0:e===u0?0:e>0?DS(e)?r:0:DS(e)?HEr(u0,r):u0}HS.exports=zEr});var XS=s((yhe,zS)=>{"use strict";var XEr=se(),JEr=ar(),YEr=1072693247,o0=1e300,v0=1e-300;function $Er(r,e){var t,i;return i=JEr(r),t=i&XEr,t<=YEr?e<0?o0*o0:v0*v0:e>0?o0*o0:v0*v0}zS.exports=$Er});var $S=s((qhe,YS)=>{"use strict";var ZEr=Y(),JS=R();function QEr(r,e){return r===-1?(r-r)/(r-r):r===1?1:ZEr(r)<1==(e===JS)?0:JS}YS.exports=QEr});var QS=s((bhe,ZS)=>{"use strict";var KEr=Xr(),_2;KEr===!0?_2=1:_2=0;ZS.exports=_2});var rO=s((whe,KS)=>{"use strict";var rNr=pr(),eNr=lr(),tNr=QS(),T2=new eNr(1),iNr=new rNr(T2.buffer);function nNr(r,e){return T2[0]=r,iNr[tNr]=e>>>0,T2[0]}KS.exports=nNr});var he=s((Ehe,eO)=>{"use strict";var aNr=rO();eO.exports=aNr});var ue=s((Nhe,tO)=>{"use strict";var sNr=1023;tO.exports=sNr});var nO=s((She,iO)=>{"use strict";function uNr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}iO.exports=uNr});var oO=s((Ohe,uO)=>{"use strict";var oNr=ar(),f0=de(),aO=he(),vNr=ue(),fNr=nO(),cNr=1048575,sO=1048576,lNr=1072693248,pNr=536870912,gNr=524288,mNr=20,dNr=9007199254740992,hNr=.9617966939259756,yNr=.9617967009544373,qNr=-7028461650952758e-24,bNr=[1,1.5],wNr=[0,.5849624872207642],ENr=[0,1350039202129749e-23];function NNr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,S,F,A,H,K,G;return H=0,t<sO&&(e*=dNr,H-=53,t=oNr(e)),H+=(t>>mNr)-vNr|0,K=t&cNr|0,t=K|lNr|0,K<=235662?G=0:K<767610?G=1:(G=0,H+=1,t-=sO),e=aO(e,t),c=bNr[G],F=e-c,A=1/(e+c),n=F*A,u=f0(n,0),i=(t>>1|pNr)+gNr,i+=G<<18,v=aO(0,i),f=e-(v-c),o=A*(F-u*v-u*f),a=n*n,S=a*a*fNr(a),S+=o*(u+n),a=u*u,v=3+a+S,v=f0(v,0),f=S-(v-3-a),F=u*v,A=o*v+f*n,p=F+A,p=f0(p,0),g=A-(p-F),h=yNr*p,d=qNr*p+g*hNr+ENr[G],l=wNr[G],N=H,m=h+d+l+N,m=f0(m,0),y=d-(m-N-l-h),r[0]=m,r[1]=y,r}uO.exports=NNr});var fO=s((Ahe,vO)=>{"use strict";function SNr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}vO.exports=SNr});var lO=s((_he,cO)=>{"use strict";var ONr=de(),ANr=fO(),_Nr=1.4426950408889634,TNr=1.4426950216293335,INr=19259629911266175e-24;function RNr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*ANr(n),u=TNr*n,o=n*INr-a*_Nr,i=u+o,i=ONr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}cO.exports=RNr});var I2=s((The,pO)=>{"use strict";var LNr=1023;pO.exports=LNr});var mO=s((Ihe,gO)=>{"use strict";var PNr=-1023;gO.exports=PNr});var R2=s((Rhe,dO)=>{"use strict";var FNr=-1074;dO.exports=FNr});var L2=s((Lhe,hO)=>{"use strict";var MNr=22250738585072014e-324;hO.exports=MNr});var P2=s((Phe,yO)=>{"use strict";var BNr=L2(),jNr=Cr(),kNr=E(),CNr=Y(),VNr=4503599627370496;function UNr(r,e,t,i){return kNr(r)||jNr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&CNr(r)<BNr?(e[i]=r*VNr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}yO.exports=UNr});var bO=s((Fhe,qO)=>{"use strict";var GNr=P2();function xNr(r){return GNr(r,[0,0],1,0)}qO.exports=xNr});var NO=s((Mhe,EO)=>{"use strict";var DNr=b(),wO=bO(),HNr=P2();DNr(wO,"assign",HNr);EO.exports=wO});var Bn=s((Bhe,SO)=>{"use strict";var WNr=2146435072;SO.exports=WNr});var AO=s((jhe,OO)=>{"use strict";var zNr=ar(),XNr=Bn(),JNr=ue();function YNr(r){var e=zNr(r);return e=(e&XNr)>>>20,e-JNr|0}OO.exports=YNr});var TO=s((khe,_O)=>{"use strict";var $Nr=AO();_O.exports=$Nr});var RO=s((Che,IO)=>{"use strict";var ZNr=R(),QNr=V(),KNr=ue(),rSr=I2(),eSr=mO(),tSr=R2(),iSr=E(),nSr=Cr(),aSr=s0(),sSr=NO().assign,uSr=TO(),oSr=Ci(),vSr=Vi(),fSr=2220446049250313e-31,cSr=2148532223>>>0,F2=[0,0],M2=[0,0];function lSr(r,e){var t,i;return e===0||r===0||iSr(r)||nSr(r)?r:(sSr(r,F2,1,0),r=F2[0],e+=F2[1],e+=uSr(r),e<tSr?aSr(0,r):e>rSr?r<0?QNr:ZNr:(e<=eSr?(e+=52,i=fSr):i=1,oSr.assign(r,M2,1,0),t=M2[0],t&=cSr,t|=e+KNr<<20,i*vSr(t,M2[1])))}IO.exports=lSr});var c0=s((Vhe,LO)=>{"use strict";var pSr=RO();LO.exports=pSr});var l0=s((Uhe,PO)=>{"use strict";var gSr=.6931471805599453;PO.exports=gSr});var p0=s((Ghe,FO)=>{"use strict";var mSr=1048575;FO.exports=mSr});var BO=s((xhe,MO)=>{"use strict";function dSr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}MO.exports=dSr});var xO=s((Dhe,GO)=>{"use strict";var hSr=ar(),jO=he(),ySr=de(),qSr=w2(),bSr=c0(),wSr=l0(),kO=ue(),CO=se(),VO=p0(),ESr=BO(),UO=1048576,NSr=1071644672,jn=20,SSr=.6931471824645996,OSr=-1904654299957768e-24;function ASr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g;return p=r&CO|0,g=(p>>jn)-kO|0,l=0,p>NSr&&(l=r+(UO>>g+1)>>>0,g=((l&CO)>>jn)-kO|0,i=(l&~(VO>>g))>>>0,a=jO(0,i),l=(l&VO|UO)>>jn-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=ySr(a,0),o=a*SSr,v=(t-(a-e))*wSr+a*OSr,c=o+v,f=v-(c-o),a=c*c,n=c-a*ESr(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=hSr(c),r=qSr(r),r+=l<<jn>>>0,r>>jn<=0?c=bSr(c,l):c=jO(c,r),c}GO.exports=ASr});var KO=s((Hhe,QO)=>{"use strict";var DO=E(),HO=a0(),WO=Cr(),_Sr=yr(),zO=U(),TSr=Y(),B2=Ci(),ISr=de(),XO=w2(),RSr=V(),LSr=R(),j2=se(),PSr=WS(),FSr=XS(),MSr=$S(),BSr=oO(),jSr=lO(),kSr=xO(),CSr=1072693247,VSr=1105199104,USr=1139802112,JO=1083179008,GSr=1072693248,xSr=1083231232,DSr=3230714880>>>0,YO=31,nt=1e300,at=1e-300,HSr=8008566259537294e-32,ye=[0,0],$O=[0,0];function ZO(r,e){var t,i,n,a,u,o,v,f,c,l,p,g,h,d,m,y;if(DO(r)||DO(e))return NaN;if(B2.assign(e,ye,1,0),o=ye[0],v=ye[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return zO(r);if(e===-.5)return 1/zO(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(WO(e))return MSr(r,e)}if(B2.assign(r,ye,1,0),a=ye[0],u=ye[1],u===0){if(a===0)return PSr(r,e);if(r===1)return 1;if(r===-1&&HO(e))return-1;if(WO(r))return r===RSr?ZO(-0,-e):e<0?0:LSr}if(r<0&&_Sr(e)===!1)return(r-r)/(r-r);if(n=TSr(r),t=a&j2|0,i=o&j2|0,f=a>>>YO|0,c=o>>>YO|0,f&&HO(e)?f=-1:f=1,i>VSr){if(i>USr)return FSr(r,e);if(t<CSr)return c===1?f*nt*nt:f*at*at;if(t>GSr)return c===0?f*nt*nt:f*at*at;h=jSr($O,n)}else h=BSr($O,n,t);if(l=ISr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,B2.assign(d,ye,1,0),m=XO(ye[0]),y=XO(ye[1]),m>=JO){if((m-JO|y)!==0||g+HSr>d-p)return f*nt*nt}else if((m&j2)>=xSr&&((m-DSr|y)!==0||g<=d-p))return f*at*at;return d=kSr(m,p,g),f*d}QO.exports=ZO});var D=s((Whe,rA)=>{"use strict";var WSr=KO();rA.exports=WSr});var Ui=s((zhe,eA)=>{"use strict";var zSr=9007199254740991;eA.exports=zSr});var g0=s((Xhe,tA)=>{"use strict";var XSr=308;tA.exports=XSr});var k2=s((Jhe,iA)=>{"use strict";var JSr=-308;iA.exports=JSr});var m0=s((Yhe,nA)=>{"use strict";var YSr=-324;nA.exports=YSr});var cA=s(($he,fA)=>{"use strict";var aA=E(),d0=Cr(),sA=D(),$Sr=Y(),uA=z(),ZSr=Ui(),oA=g0(),QSr=k2(),KSr=m0(),rOr=V(),eOr=ZSr+1,vA=1e308;function tOr(r,e){var t,i;return aA(r)||aA(e)||d0(e)?NaN:d0(r)||r===0||e<KSr||$Sr(r)>eOr&&e<=0?r:e>oA?r>=0?0:rOr:e<QSr?(t=sA(10,-(e+oA)),i=r*vA*t,d0(i)?r:uA(i)/vA/t):(t=sA(10,-e),i=r*t,d0(i)?r:uA(i)/t)}fA.exports=tOr});var pA=s((Zhe,lA)=>{"use strict";var iOr=cA();lA.exports=iOr});var mA=s((Qhe,gA)=>{"use strict";function nOr(r,e){return r*e}gA.exports=nOr});var hA=s((Khe,dA)=>{"use strict";var aOr=mA();dA.exports=aOr});var qA=s((rye,yA)=>{"use strict";function sOr(r,e){return r-e}yA.exports=sOr});var wA=s((eye,bA)=>{"use strict";var uOr=qA();bA.exports=uOr});var NA=s((tye,EA)=>{"use strict";var kn=rr(),oOr=kN(),vOr=pA(),fOr=hA(),cOr=D(),lOr=wA();function pOr(r){return kn(r,"add",oOr),kn(r,"floorn",vOr),kn(r,"mul",fOr),kn(r,"pow",cOr),kn(r,"sub",lOr),r}EA.exports=pOr});var _A=s((iye,AA)=>{"use strict";var SA=M().isPrimitive,gOr=R(),mOr=V(),OA=q();function dOr(r,e){return t;function t(i,n){var a;if(!SA(i)){if(e.nonnumeric===void 0)throw new TypeError(OA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!SA(n)){if(e.nonnumeric===void 0)throw new TypeError(OA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===gOr?e.pinf:a===mOr?e.ninf:a}}AA.exports=dOr});var C2=s((nye,TA)=>{"use strict";var hOr=_A();TA.exports=hOr});var RA=s((aye,IA)=>{"use strict";var yOr=Ta(),qOr=lo(),bOr=Ya(),wOr=q(),EOr=Ja(),NOr=C2(),SOr=["number","number"],OOr=["First argument","Second argument"];function AOr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(wOr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=EOr([r[0],r[1]],SOr,OOr),t=yOr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=bOr(t),a=NOr(e,i),r[0].push(n),r[1].push(t),qOr(r[0],r[1],a),n}IA.exports=AOr});var PA=s((sye,LA)=>{"use strict";var _Or=RA();LA.exports=_Or});var MA=s((uye,FA)=>{"use strict";var TOr=M().isPrimitive,IOr=R(),ROr=V(),LOr=q();function POr(r,e){return t;function t(i){var n;if(!TOr(i)){if(e.nonnumeric===void 0)throw new TypeError(LOr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===IOr?e.pinf:n===ROr?e.ninf:n}}FA.exports=POr});var V2=s((oye,BA)=>{"use strict";var FOr=MA();BA.exports=FOr});var kA=s((vye,jA)=>{"use strict";var U2=M().isPrimitive,MOr=R(),BOr=V(),G2=q();function jOr(r,e){return t;function t(i,n,a){var u;if(!U2(i)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!U2(n)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!U2(a)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===MOr?e.pinf:u===BOr?e.ninf:u}}jA.exports=jOr});var x2=s((fye,CA)=>{"use strict";var kOr=kA();CA.exports=kOr});var UA=s((cye,VA)=>{"use strict";var h0=M().isPrimitive,COr=R(),VOr=V(),y0=q();function UOr(r,e){return t;function t(i,n,a,u){var o;if(!h0(i)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!h0(n)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!h0(a)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!h0(u)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===COr?e.pinf:o===VOr?e.ninf:o}}VA.exports=UOr});var xA=s((lye,GA)=>{"use strict";var GOr=UA();GA.exports=GOr});var HA=s((pye,DA)=>{"use strict";var Cn=M().isPrimitive,xOr=R(),DOr=V(),Vn=q();function HOr(r,e){return t;function t(i,n,a,u,o){var v;if(!Cn(i)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Cn(n)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Cn(a)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Cn(u)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Cn(o)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,n,a,u,o),v!==v?e.nan:v===xOr?e.pinf:v===DOr?e.ninf:v}}DA.exports=HOr});var zA=s((gye,WA)=>{"use strict";var WOr=HA();WA.exports=WOr});var JA=s((mye,XA)=>{"use strict";var zOr=Ta(),XOr=go(),JOr=Ya(),YOr=q(),$Or=Ja(),ZOr=x2(),QOr=["number","number","number"],KOr=["First argument","Second argument","Third argument"];function rAr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(YOr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=$Or([r[0],r[1],r[2]],QOr,KOr),t=zOr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=JOr(t),a=ZOr(e,i),r[0].push(n),r[1].push(t),XOr(r[0],r[1],a),n}XA.exports=rAr});var $A=s((dye,YA)=>{"use strict";var eAr=JA();YA.exports=eAr});var QA=s((hye,ZA)=>{"use strict";var tAr=dr(),iAr=y1(),nAr=q(),aAr=V2();function sAr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(nAr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=aAr(e,i),tAr(t)?(iAr([t,t],[t.length,t[0].length],n),t):n(t)}ZA.exports=sAr});var r_=s((yye,KA)=>{"use strict";var uAr=QA();KA.exports=uAr});var t_=s((qye,e_)=>{"use strict";var st=rr(),oAr=PA(),vAr=V2(),fAr=C2(),cAr=x2(),lAr=xA(),pAr=zA(),gAr=$A(),mAr=r_();function dAr(r){return st(r,"binary",oAr),st(r,"d_d",vAr),st(r,"dd_d",fAr),st(r,"ddd_d",cAr),st(r,"dddd_d",lAr),st(r,"ddddd_d",pAr),st(r,"ternary",gAr),st(r,"unary",mAr),r}e_.exports=dAr});var n_=s((bye,i_)=>{"use strict";function hAr(r){return r*r}i_.exports=hAr});var q0=s((wye,a_)=>{"use strict";var yAr=n_();a_.exports=yAr});var b0=s((Eye,s_)=>{"use strict";var qAr=.7853981633974483;s_.exports=qAr});var o_=s((Nye,u_)=>{"use strict";function bAr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}u_.exports=bAr});var f_=s((Sye,v_)=>{"use strict";function wAr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}v_.exports=wAr});var p_=s((Oye,l_)=>{"use strict";var EAr=E(),NAr=U(),c_=b0(),SAr=o_(),OAr=f_(),AAr=6123233995736766e-32;function _Ar(r){var e,t,i,n,a;if(EAr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*OAr(t),t=NAr(t+t),a=c_-t,t=t*n-AAr,a-=t,a+=c_;else{if(i<1e-8)return r;t=i*i,a=t*SAr(t),a=i*a+i}return e?-a:a}l_.exports=_Ar});var Zt=s((Aye,g_)=>{"use strict";var TAr=p_();g_.exports=TAr});var y_=s((_ye,h_)=>{"use strict";var IAr=E(),m_=Zt(),RAr=U(),d_=b0(),LAr=6123233995736766e-32;function PAr(r){var e;return IAr(r)?NaN:r<-1||r>1?NaN:r>.5?2*m_(RAr(.5-.5*r)):(e=d_-m_(r),e+=LAr,e+=d_,e)}h_.exports=PAr});var Un=s((Tye,q_)=>{"use strict";var FAr=y_();q_.exports=FAr});var w_=s((Iye,b_)=>{"use strict";function MAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}b_.exports=MAr});var A_=s((Rye,O_)=>{"use strict";var BAr=E(),E_=ar(),N_=he(),jAr=R(),kAr=V(),S_=ue(),CAr=w_(),D2=.6931471803691238,H2=19082149292705877e-26,VAr=.41421356237309503,UAr=-.2928932188134525,GAr=1862645149230957e-24,xAr=5551115123125783e-32,DAr=9007199254740992,HAr=.6666666666666666;function WAr(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||BAr(r))return NaN;if(r===-1)return kAr;if(r===jAr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<VAr){if(i<GAr)return i<xAr?r:r-r*r*.5;r>UAr&&(c=0,n=r,t=1)}return c!==0&&(i<DAr?(f=1+r,t=E_(f),c=(t>>20)-S_,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=E_(f),c=(t>>20)-S_,a=0),t&=1048575,t<434334?f=N_(f,t|1072693248):(c+=1,f=N_(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*H2,c*D2+a):(v=e*(1-HAr*n),c*D2-(v-(c*H2+a)-n)):(u=n/(2+n),o=u*u,v=o*CAr(o),c===0?n-(e-u*(e+v)):c*D2-(e-(u*(e+v)+(c*H2+a))-n))}O_.exports=WAr});var ut=s((Lye,__)=>{"use strict";var zAr=A_();__.exports=zAr});var I_=s((Pye,T_)=>{"use strict";function XAr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}T_.exports=XAr});var L_=s((Fye,R_)=>{"use strict";function JAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}R_.exports=JAr});var B_=s((Mye,M_)=>{"use strict";var P_=ar(),YAr=he(),$Ar=E(),ZAr=ue(),QAr=V(),KAr=I_(),r_r=L_(),w0=.6931471803691238,E0=19082149292705877e-26,e_r=0x40000000000000,t_r=.3333333333333333,F_=1048575,i_r=2146435072,n_r=1048576,a_r=1072693248;function s_r(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?QAr:$Ar(r)||r<0?NaN:(t=P_(r),a=0,t<n_r&&(a-=54,r*=e_r,t=P_(r)),t>=i_r?r+r:(a+=(t>>20)-ZAr|0,t&=F_,v=t+614244&1048576|0,r=YAr(r,t|v^a_r),a+=v>>20|0,o=r-1,(F_&2+t)<3?o===0?a===0?0:a*w0+a*E0:(u=o*o*(.5-t_r*o),a===0?o-u:a*w0-(u-a*E0-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*KAr(l),i=p*r_r(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*w0-(e-(c*(e+u)+a*E0)-o)):a===0?o-c*(o-u):a*w0-(c*(o-u)-a*E0-o))))}M_.exports=s_r});var P=s((Bye,j_)=>{"use strict";var u_r=B_();j_.exports=u_r});var U_=s((jye,V_)=>{"use strict";var o_r=E(),v_r=ut(),k_=U(),f_r=l0(),C_=P(),c_r=1<<28;function l_r(r){var e;return o_r(r)||r<1?NaN:r===1?0:r>=c_r?C_(r)+f_r:r>2?C_(2*r-1/(r+k_(r*r-1))):(e=r-1,v_r(e+k_(2*e+e*e)))}V_.exports=l_r});var x_=s((kye,G_)=>{"use strict";var p_r=U_();G_.exports=p_r});var N0=s((Cye,D_)=>{"use strict";var g_r=1.5707963267948966;D_.exports=g_r});var W_=s((Vye,H_)=>{"use strict";function m_r(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}H_.exports=m_r});var X_=s((Uye,z_)=>{"use strict";function d_r(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}z_.exports=d_r});var $_=s((Gye,Y_)=>{"use strict";var h_r=E(),y_r=R(),W2=N0(),q_r=b0(),b_r=V(),w_r=W_(),E_r=X_(),J_=6123233995736766e-32,N_r=2.414213562373095;function S_r(r){var e,t,i,n;return h_r(r)||r===0?r:r===y_r?W2:r===b_r?-W2:(r<0&&(t=!0,r=-r),e=0,r>N_r?(i=W2,e=1,r=-(1/r)):r<=.66?i=0:(i=q_r,e=2,r=(r-1)/(r+1)),n=r*r,n=n*w_r(n)/E_r(n),n=r*n+r,e===2?n+=.5*J_:e===1&&(n+=J_),i+=n,t?-i:i)}Y_.exports=S_r});var S0=s((xye,Z_)=>{"use strict";var O_r=$_();Z_.exports=O_r});var K_=s((Dye,Q_)=>{"use strict";var A_r=S0();function __r(r){return A_r(1/r)}Q_.exports=__r});var eT=s((Hye,rT)=>{"use strict";var T_r=K_();rT.exports=T_r});var iT=s((Wye,tT)=>{"use strict";var I_r=Zt();function R_r(r){return I_r(1+r)}tT.exports=R_r});var aT=s((zye,nT)=>{"use strict";var L_r=iT();nT.exports=L_r});var uT=s((Xye,sT)=>{"use strict";var P_r=Zt();function F_r(r){return P_r(1-r)}sT.exports=F_r});var vT=s((Jye,oT)=>{"use strict";var M_r=uT();oT.exports=M_r});var cT=s((Yye,fT)=>{"use strict";var B_r=Zt();function j_r(r){return B_r(1/r)}fT.exports=j_r});var pT=s(($ye,lT)=>{"use strict";var k_r=cT();lT.exports=k_r});var hT=s((Zye,dT)=>{"use strict";var C_r=Cr(),V_r=E(),U_r=ut(),gT=U(),G_r=l0(),mT=P(),x_r=1/(1<<28),D_r=1<<28;function H_r(r){var e,t,i;return V_r(r)||C_r(r)?r:(r<0&&(r=-r,e=!0),r<x_r?i=r:r>D_r?i=mT(r)+G_r:r>2?i=mT(2*r+1/(gT(r*r+1)+r)):(t=r*r,i=U_r(r+t/(1+gT(1+t)))),e?-i:i)}dT.exports=H_r});var z2=s((Qye,yT)=>{"use strict";var W_r=hT();yT.exports=W_r});var bT=s((Kye,qT)=>{"use strict";var z_r=z2();function X_r(r){return z_r(1/r)}qT.exports=X_r});var ET=s((rqe,wT)=>{"use strict";var J_r=bT();wT.exports=J_r});var ST=s((eqe,NT)=>{"use strict";var Y_r=Un(),$_r=U();function Z_r(r){return 2*Y_r($_r(r))}NT.exports=Z_r});var AT=s((tqe,OT)=>{"use strict";var Q_r=ST();OT.exports=Q_r});var TT=s((iqe,_T)=>{"use strict";var K_r=Zt(),rTr=U();function eTr(r){return 2*K_r(rTr(r))}_T.exports=eTr});var RT=s((nqe,IT)=>{"use strict";var tTr=TT();IT.exports=tTr});var FT=s((aqe,PT)=>{"use strict";var iTr=E(),LT=ut(),nTr=R(),aTr=V(),sTr=1/(1<<28);function uTr(r){var e,t;return iTr(r)||r<-1||r>1?NaN:r===1?nTr:r===-1?aTr:(r<0&&(e=!0,r=-r),r<sTr?e?-r:r:(r<.5?(t=r+r,t=.5*LT(t+t*r/(1-r))):t=.5*LT((r+r)/(1-r)),e?-t:t))}PT.exports=uTr});var BT=s((sqe,MT)=>{"use strict";var oTr=FT();MT.exports=oTr});var kT=s((uqe,jT)=>{"use strict";var vTr=Un();function fTr(r){return vTr(1+r)}jT.exports=fTr});var VT=s((oqe,CT)=>{"use strict";var cTr=kT();CT.exports=cTr});var GT=s((vqe,UT)=>{"use strict";var lTr=Un();function pTr(r){return lTr(1-r)}UT.exports=pTr});var DT=s((fqe,xT)=>{"use strict";var gTr=GT();xT.exports=gTr});var WT=s((cqe,HT)=>{"use strict";var mTr=z();function dTr(r){return mTr(r)===r&&r>=0}HT.exports=dTr});var X2=s((lqe,zT)=>{"use strict";var hTr=WT();zT.exports=hTr});var XT=s((pqe,yTr)=>{yTr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var YT=s((gqe,JT)=>{"use strict";var qTr=X2(),bTr=E(),wTr=a0(),ETr=V(),NTr=R(),STr=XT(),OTr=258;function ATr(r){return bTr(r)||!qTr(r)?NaN:wTr(r)?0:r>OTr?r/2&1?NTr:ETr:STr[r/2]}JT.exports=ATr});var ZT=s((mqe,$T)=>{"use strict";var _Tr=YT();$T.exports=_Tr});var KT=s((dqe,QT)=>{"use strict";var TTr=Xr(),J2;TTr===!0?J2=0:J2=1;QT.exports=J2});var tI=s((hqe,eI)=>{"use strict";var ITr=pr(),RTr=lr(),LTr=KT(),rI=new RTr(1),PTr=new ITr(rI.buffer);function FTr(r){return rI[0]=r,PTr[LTr]}eI.exports=FTr});var nI=s((yqe,iI)=>{"use strict";var MTr=tI();iI.exports=MTr});var vI=s((qqe,oI)=>{"use strict";var BTr=z(),O0=c0(),T0=Qe(),sI=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jTr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Y2=16777216,$2=5960464477539063e-23,A0=T0(20),aI=T0(20),_0=T0(20),mr=T0(20);function uI(r,e,t,i,n,a,u,o,v){var f,c,l,p,g,h,d,m,y;for(p=a,y=i[t],m=t,g=0;m>0;g++)c=$2*y|0,mr[g]=y-Y2*c|0,y=i[m-1]+c,m-=1;if(y=O0(y,n),y-=8*BTr(y*.125),d=y|0,y-=d,l=0,n>0?(g=mr[t-1]>>24-n,d+=g,mr[t-1]-=g<<24-n,l=mr[t-1]>>23-n):n===0?l=mr[t-1]>>23:y>=.5&&(l=2),l>0){for(d+=1,f=0,g=0;g<t;g++)m=mr[g],f===0?m!==0&&(f=1,mr[g]=16777216-m):mr[g]=16777215-m;if(n>0)switch(n){case 1:mr[t-1]&=8388607;break;case 2:mr[t-1]&=4194303;break}l===2&&(y=1-y,f!==0&&(y-=O0(1,n)))}if(y===0){for(m=0,g=t-1;g>=a;g--)m|=mr[g];if(m===0){for(h=1;mr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(v[o+g]=sI[u+g],c=0,m=0;m<=o;m++)c+=r[m]*v[o+(g-m)];i[g]=c}return t+=h,uI(r,e,t,i,n,a,u,o,v)}}if(y===0)for(t-=1,n-=24;mr[t]===0;)t-=1,n-=24;else y=O0(y,-n),y>=Y2?(c=$2*y|0,mr[t]=y-Y2*c|0,t+=1,n+=24,mr[t]=c):mr[t]=y|0;for(c=O0(1,n),g=t;g>=0;g--)i[g]=c*mr[g],c*=$2;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=jTr[h]*i[g+h];_0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=_0[g];for(l===0?e[0]=c:e[0]=-c,c=_0[0]-c,g=1;g<=t;g++)c+=_0[g];return l===0?e[1]=c:e[1]=-c,d&7}function kTr(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?A0[c]=0:A0[c]=sI[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*A0[o+(c-l)];aI[c]=n}return v=a,uI(r,e,v,aI,f,a,u,o,A0)}oI.exports=kTr});var cI=s((bqe,fI)=>{"use strict";var CTr=Math.round;fI.exports=CTr});var Z2=s((wqe,lI)=>{"use strict";var VTr=cI();lI.exports=VTr});var dI=s((Eqe,mI)=>{"use strict";var UTr=Z2(),pI=ar(),GTr=.6366197723675814,xTr=1.5707963267341256,DTr=6077100506506192e-26,HTr=6077100506303966e-26,WTr=20222662487959506e-37,zTr=20222662487111665e-37,XTr=84784276603689e-45,gI=2047;function JTr(r,e,t){var i,n,a,u,o,v,f;return n=UTr(r*GTr),u=r-n*xTr,o=n*DTr,f=e>>20|0,t[0]=u-o,i=pI(t[0]),v=f-(i>>20&gI),v>16&&(a=u,o=n*HTr,u=a-o,o=n*WTr-(a-u-o),t[0]=u-o,i=pI(t[0]),v=f-(i>>20&gI),v>49&&(a=u,o=n*zTr,u=a-o,o=n*XTr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}mI.exports=JTr});var yI=s((Nqe,hI)=>{"use strict";var YTr=se(),$Tr=Bn(),ZTr=p0(),QTr=ar(),KTr=nI(),rIr=Vi(),eIr=vI(),I0=dI(),tIr=0,iIr=16777216,ot=1.5707963267341256,Qt=6077100506506192e-26,R0=2*Qt,L0=3*Qt,P0=4*Qt,nIr=598523,aIr=1072243195,sIr=1073928572,uIr=1074752122,oIr=1074977148,vIr=1075183036,fIr=1075388923,cIr=1075594811,lIr=1094263291,Gn=[0,0,0],xn=[0,0];function pIr(r,e){var t,i,n,a,u,o,v,f;if(n=QTr(r),a=n&YTr|0,a<=aIr)return e[0]=r,e[1]=0,0;if(a<=uIr)return(a&ZTr)===nIr?I0(r,a,e):a<=sIr?r>0?(f=r-ot,e[0]=f-Qt,e[1]=f-e[0]-Qt,1):(f=r+ot,e[0]=f+Qt,e[1]=f-e[0]+Qt,-1):r>0?(f=r-2*ot,e[0]=f-R0,e[1]=f-e[0]-R0,2):(f=r+2*ot,e[0]=f+R0,e[1]=f-e[0]+R0,-2);if(a<=cIr)return a<=vIr?a===oIr?I0(r,a,e):r>0?(f=r-3*ot,e[0]=f-L0,e[1]=f-e[0]-L0,3):(f=r+3*ot,e[0]=f+L0,e[1]=f-e[0]+L0,-3):a===fIr?I0(r,a,e):r>0?(f=r-4*ot,e[0]=f-P0,e[1]=f-e[0]-P0,4):(f=r+4*ot,e[0]=f+P0,e[1]=f-e[0]+P0,-4);if(a<lIr)return I0(r,a,e);if(a>=$Tr)return e[0]=NaN,e[1]=NaN,0;for(t=KTr(r),i=(a>>20)-1046,f=rIr(a-(i<<20|0),t),o=0;o<2;o++)Gn[o]=f|0,f=(f-Gn[o])*iIr;for(Gn[2]=f,u=3;Gn[u-1]===tIr;)u-=1;return v=eIr(Gn,xn,i,u,1),r<0?(e[0]=-xn[0],e[1]=-xn[1],-v):(e[0]=xn[0],e[1]=xn[1],v)}hI.exports=pIr});var Dn=s((Sqe,qI)=>{"use strict";var gIr=yI();qI.exports=gIr});var EI=s((Oqe,wI)=>{"use strict";var bI=-.16666666666666632,mIr=.00833333333332249,dIr=-.0001984126982985795,hIr=27557313707070068e-22,yIr=-25050760253406863e-24,qIr=158969099521155e-24,bIr=.0416666666666666,wIr=-.001388888888887411,EIr=2480158728947673e-20,NIr=-27557314351390663e-23,SIr=2087572321298175e-24,OIr=-11359647557788195e-27;function AIr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=mIr+f*(dIr+f*hIr)+f*v*(yIr+f*qIr),o=f*r,e===0?t[n]=r+o*(bI+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*bI),u=f*(bIr+f*(wIr+f*EIr)),u+=v*v*(NIr+f*(SIr+f*OIr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}wI.exports=AIr});var K2=s((Aqe,SI)=>{"use strict";var _Ir=se(),TIr=Bn(),IIr=ar(),RIr=Dn(),NI=EI(),LIr=1072243195,PIr=1044381696,Q2=[0,0];function FIr(r,e,t,i){var n,a;if(n=IIr(r),n&=_Ir,n<=LIr)return n<PIr&&(r|0)===0&&(e[i]=r,e[i+t]=0),NI(r,0,e,t,i);if(n>=TIr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=RIr(r,Q2),NI(Q2[0],Q2[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}SI.exports=FIr});var AI=s((_qe,OI)=>{"use strict";var MIr=K2();function BIr(r){return MIr(r,[0,0],1,0)}OI.exports=BIr});var Hn=s((Tqe,TI)=>{"use strict";var jIr=b(),_I=AI(),kIr=K2();jIr(_I,"assign",kIr);TI.exports=_I});var RI=s((Iqe,II)=>{"use strict";function CIr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}II.exports=CIr});var PI=s((Rqe,LI)=>{"use strict";function VIr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}LI.exports=VIr});var MI=s((Lqe,FI)=>{"use strict";function UIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}FI.exports=UIr});var jI=s((Pqe,BI)=>{"use strict";function GIr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}BI.exports=GIr});var CI=s((Fqe,kI)=>{"use strict";var xIr=U(),DIr=Hn().assign,HIr=R(),WIr=RI(),zIr=PI(),XIr=MI(),JIr=jI(),YIr=.5641895835477563,$Ir=2.404825557695773,ZIr=5.520078110286311,QIr=616,KIr=-.0014244423042272315,rRr=1413,eRr=.0005468602863106496,Wn=[0,0];function tRr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===HIr?0:r===0?1:r<=4?(a=r*r,n=WIr(a),u=(r+$Ir)*(r-QIr/256-KIr),u*n):r<=8?(a=1-r*r/64,n=zIr(a),u=(r+ZIr)*(r-rRr/256-eRr),u*n):(a=8/r,i=a*a,e=XIr(i),t=JIr(i),u=YIr/xIr(r),DIr(r,Wn,1,0),u*(e*(Wn[1]+Wn[0])-a*t*(Wn[0]-Wn[1])))}kI.exports=tRr});var r3=s((Mqe,VI)=>{"use strict";var iRr=CI();VI.exports=iRr});var F0=s((Bqe,UI)=>{"use strict";var nRr=1.772453850905516;UI.exports=nRr});var xI=s((jqe,GI)=>{"use strict";function aRr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}GI.exports=aRr});var HI=s((kqe,DI)=>{"use strict";function sRr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}DI.exports=sRr});var zI=s((Cqe,WI)=>{"use strict";function uRr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}WI.exports=uRr});var JI=s((Vqe,XI)=>{"use strict";function oRr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}XI.exports=oRr});var $I=s((Uqe,YI)=>{"use strict";var vRr=U(),fRr=Y(),cRr=Hn().assign,lRr=R(),pRr=F0(),gRr=xI(),mRr=HI(),dRr=zI(),hRr=JI(),yRr=3.8317059702075125,qRr=7.015586669815619,bRr=981,wRr=-.0003252797924876844,ERr=1796,NRr=-38330184381246464e-21,zn=[0,0];function SRr(r){var e,t,i,n,a,u,o,v;return v=fRr(r),r===0||v===lRr?0:(v<=4?(u=r*r,a=gRr(u),o=v*(v+yRr)*(v-bRr/256-wRr),e=o*a):v<=8?(u=r*r,a=mRr(u),o=v*(v+qRr)*(v-ERr/256-NRr),e=o*a):(u=8/v,n=u*u,t=dRr(n),i=hRr(n),o=1/(vRr(v)*pRr),cRr(v,zn,1,0),e=o*(t*(zn[0]-zn[1])+u*i*(zn[0]+zn[1]))),r<0&&(e*=-1),e)}YI.exports=SRr});var e3=s((Gqe,ZI)=>{"use strict";var ORr=$I();ZI.exports=ORr});var Vr=s((xqe,QI)=>{"use strict";var ARr=3.141592653589793;QI.exports=ARr});var rR=s((Dqe,KI)=>{"use strict";function _Rr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}KI.exports=_Rr});var tR=s((Hqe,eR)=>{"use strict";function TRr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}eR.exports=TRr});var nR=s((Wqe,iR)=>{"use strict";function IRr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}iR.exports=IRr});var sR=s((zqe,aR)=>{"use strict";function RRr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}aR.exports=RRr});var oR=s((Xqe,uR)=>{"use strict";function LRr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}uR.exports=LRr});var pR=s((Jqe,lR)=>{"use strict";var t3=P(),PRr=U(),FRr=Vr(),MRr=F0(),BRr=V(),jRr=R(),kRr=Hn().assign,i3=r3(),CRr=rR(),VRr=tR(),URr=nR(),GRr=sR(),xRr=oR(),DRr=1/MRr,n3=2/FRr,vR=.8935769662791675,fR=3.957678419314858,cR=7.086051060301773,HRr=228,WRr=.0029519662791675214,zRr=1013,XRr=.0006471693148578684,JRr=1814,YRr=.00011356030177269763,Xn=[0,0];function $Rr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?BRr:r===jRr?0:r<=3?(a=r*r,u=t3(r/vR)*i3(r)*n3,n=CRr(a),o=(r+vR)*(r-HRr/256-WRr),u+o*n):r<=5.5?(a=r*r,u=t3(r/fR)*i3(r)*n3,n=VRr(a),o=(r+fR)*(r-zRr/256-XRr),u+o*n):r<=8?(a=r*r,u=t3(r/cR)*i3(r)*n3,n=URr(a),o=(r+cR)*(r-JRr/256-YRr),u+o*n):(a=8/r,i=a*a,e=GRr(i),t=xRr(i),o=DRr/PRr(r),kRr(r,Xn,1,0),o*(e*(Xn[0]-Xn[1])+a*t*(Xn[1]+Xn[0])))}lR.exports=$Rr});var mR=s((Yqe,gR)=>{"use strict";var ZRr=pR();gR.exports=ZRr});var hR=s(($qe,dR)=>{"use strict";function QRr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}dR.exports=QRr});var qR=s((Zqe,yR)=>{"use strict";function KRr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}yR.exports=KRr});var wR=s((Qqe,bR)=>{"use strict";function rLr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}bR.exports=rLr});var NR=s((Kqe,ER)=>{"use strict";function eLr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}ER.exports=eLr});var RR=s((rbe,IR)=>{"use strict";var SR=P(),tLr=U(),iLr=Vr(),nLr=F0(),aLr=V(),sLr=R(),uLr=Hn().assign,OR=e3(),oLr=hR(),vLr=qR(),fLr=wR(),cLr=NR(),lLr=1/nLr,AR=2/iLr,_R=2.197141326031017,TR=5.429681040794135,pLr=562,gLr=.001828826031017035,mLr=1390,dLr=-6459205864867228e-21,Jn=[0,0];function hLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?aLr:r===sLr?0:r<=4?(a=r*r,u=SR(r/_R)*OR(r)*AR,n=oLr(a),o=(r+_R)*(r-pLr/256-gLr)/r,u+o*n):r<=8?(a=r*r,u=SR(r/TR)*OR(r)*AR,n=vLr(a),o=(r+TR)*(r-mLr/256-dLr)/r,u+o*n):(a=8/r,i=a*a,e=fLr(i),t=cLr(i),o=lLr/tLr(r),uLr(r,Jn,1,0),o*(a*t*(Jn[0]-Jn[1])-e*(Jn[0]+Jn[1])))}IR.exports=hLr});var PR=s((ebe,LR)=>{"use strict";var yLr=RR();LR.exports=yLr});var MR=s((tbe,FR)=>{"use strict";function qLr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}FR.exports=qLr});var jR=s((ibe,BR)=>{"use strict";function bLr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}BR.exports=bLr});var CR=s((nbe,kR)=>{"use strict";var wLr=MR(),ELr=jR();function NLr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*wLr(a),i+=n*n*ELr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}kR.exports=NLr});var a3=s((abe,VR)=>{"use strict";var SLr=CR();VR.exports=SLr});var xR=s((sbe,GR)=>{"use strict";var UR=-.16666666666666632,OLr=.00833333333332249,ALr=-.0001984126982985795,_Lr=27557313707070068e-22,TLr=-25050760253406863e-24,ILr=158969099521155e-24;function RLr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=OLr+a*(ALr+a*_Lr)+a*n*(TLr+a*ILr),i=a*r,e===0?r+i*(UR+a*t):r-(a*(.5*e-i*t)-e-i*UR)}GR.exports=RLr});var s3=s((ube,DR)=>{"use strict";var LLr=xR();DR.exports=LLr});var zR=s((obe,WR)=>{"use strict";var PLr=ar(),u3=a3(),HR=s3(),FLr=Dn(),qe=[0,0],MLr=2147483647,BLr=1072243195,jLr=1044381696,kLr=2146435072;function CLr(r){var e,t;if(e=PLr(r),e&=MLr,e<=BLr)return e<jLr?1:u3(r,0);if(e>=kLr)return NaN;switch(t=FLr(r,qe),t&3){case 0:return u3(qe[0],qe[1]);case 1:return-HR(qe[0],qe[1]);case 2:return-u3(qe[0],qe[1]);default:return HR(qe[0],qe[1])}}WR.exports=CLr});var Kt=s((vbe,XR)=>{"use strict";var VLr=zR();XR.exports=VLr});var $R=s((fbe,YR)=>{"use strict";var ULr=se(),GLr=Bn(),xLr=ar(),JR=a3(),o3=s3(),DLr=Dn(),HLr=1072243195,WLr=1045430272,be=[0,0];function zLr(r){var e,t;if(e=xLr(r),e&=ULr,e<=HLr)return e<WLr?r:o3(r,0);if(e>=GLr)return NaN;switch(t=DLr(r,be),t&3){case 0:return o3(be[0],be[1]);case 1:return JR(be[0],be[1]);case 2:return-o3(be[0],be[1]);default:return-JR(be[0],be[1])}}YR.exports=zLr});var ri=s((cbe,ZR)=>{"use strict";var XLr=$R();ZR.exports=XLr});var rL=s((lbe,KR)=>{"use strict";var JLr=E(),YLr=Cr(),$Lr=Y(),QR=Kt(),ZLr=ri(),QLr=z(),v3=Vr(),KLr=Ui(),rPr=KLr+1;function ePr(r){var e,t,i,n;return JLr(r)?NaN:YLr(r)?NaN:(e=$Lr(r),e>rPr?1:(t=QLr(e),i=e-t,i===.5?0:(i<.25?n=QR(v3*i):i<.75?(i=.5-i,n=ZLr(v3*i)):(i=1-i,n=-QR(v3*i)),t%2===1?-n:n)))}KR.exports=ePr});var tL=s((pbe,eL)=>{"use strict";var tPr=rL();eL.exports=tPr});var nL=s((gbe,iL)=>{"use strict";var iPr=1.618033988749895;iL.exports=iPr});var sL=s((mbe,aL)=>{"use strict";var nPr=E(),aPr=tL(),sPr=D(),uPr=nL(),oPr=R(),vPr=V(),fPr=2.23606797749979;function cPr(r){var e,t;return nPr(r)||r===oPr||r===vPr?NaN:(e=sPr(uPr,r),t=aPr(r)/e,(e-t)/fPr)}aL.exports=cPr});var oL=s((dbe,uL)=>{"use strict";var lPr=sL();uL.exports=lPr});var fL=s((hbe,vL)=>{"use strict";function pPr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}vL.exports=pPr});var gL=s((ybe,pL)=>{"use strict";var gPr=L2(),mPr=E2(),cL=se(),c3=ar(),dPr=he(),hPr=Cr(),lL=Vi(),yPr=Ci(),qPr=E(),bPr=fL(),wPr=4294967295>>>0,EPr=3221225472>>>0,NPr=0x40000000000000,f3=2147483648>>>0,SPr=1>>>0,OPr=715094163>>>0,APr=696219795>>>0,_Pr=c3(gPr),ei=[0>>>0,0>>>0];function TPr(r){var e,t,i,n,a,u,o;return r===0||qPr(r)||hPr(r)?r:(t=c3(r)>>>0,e=(t&mPr)>>>0,t&=cL,t<_Pr?(u=NPr*r,i=(c3(u)&cL)>>>0,i=(i/3>>>0)+APr>>>0,u=lL(e|i,0)):(u=0,i=(t/3>>>0)+OPr>>>0,u=dPr(u,e|i)),n=u*u*(u/r),u*=bPr(n),yPr.assign(u,ei,1,0),ei[1]&f3?(ei[0]+=SPr,ei[1]&=~f3):ei[1]|=f3,u=lL(ei[0]&wPr,ei[1]&EPr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}pL.exports=TPr});var dL=s((qbe,mL)=>{"use strict";var IPr=gL();mL.exports=IPr});var yL=s((bbe,hL)=>{"use strict";var RPr=Math.ceil;hL.exports=RPr});var Gi=s((wbe,qL)=>{"use strict";var LPr=yL();qL.exports=LPr});var wL=s((Ebe,bL)=>{"use strict";function PPr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}bL.exports=PPr});var NL=s((Nbe,EL)=>{"use strict";function FPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}EL.exports=FPr});var AL=s((Sbe,OL)=>{"use strict";var MPr=ar(),BPr=wL(),jPr=NL(),SL=1048575,kPr=.3333333333333333;function CPr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=MPr(r),a=r-1,(SL&2+n)<3?a===0?0:a*a*(kPr*a-.5):(u=a/(2+a),o=u*u,n&=SL,c=n-398458|0,f=o*o,l=440401-n|0,t=f*BPr(f),i=o*jPr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}OL.exports=CPr});var RL=s((Obe,IL)=>{"use strict";var _L=ar(),VPr=he(),UPr=de(),GPr=E(),xPr=ue(),DPr=V(),HPr=AL(),WPr=0x40000000000000,TL=.4342944818781689,zPr=25082946711645275e-27,XPr=.30102999566361177,JPr=3694239077158931e-28,YPr=1048575,$Pr=2146435072,ZPr=1048576,QPr=1072693248;function KPr(r){var e,t,i,n,a,u,o,v;return GPr(r)||r<0?NaN:r===0?DPr:(t=_L(r),u=0,t<ZPr&&(u-=54,r*=WPr,t=_L(r)),t>=$Pr?r+r:(u+=(t>>20)-xPr|0,t&=YPr,a=t+614244&1048576|0,r=VPr(r,t|a^QPr),u+=a>>20|0,o=u,n=HPr(r),r-=1,e=UPr(r,0),i=r-e,v=o*JPr+(r+n)*zPr,v+=(i+n)*TL+e*TL,v+o*XPr))}IL.exports=KPr});var PL=s((Abe,LL)=>{"use strict";var rFr=RL();LL.exports=rFr});var ML=s((_be,FL)=>{"use strict";var eFr=E(),tFr=Cr(),iFr=D(),nFr=z(),aFr=Gi(),sFr=PL(),uFr=g0(),oFr=m0(),vFr=R();function fFr(r){var e,t;return eFr(r)||tFr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=sFr(r),e===-1?t=nFr(t):t=aFr(t),t<=oFr?e*0:t>uFr?vFr:e*iFr(10,t))}FL.exports=fFr});var jL=s((Tbe,BL)=>{"use strict";var cFr=ML();BL.exports=cFr});var CL=s((Ibe,kL)=>{"use strict";function lFr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}kL.exports=lFr});var UL=s((Rbe,VL)=>{"use strict";function pFr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}VL.exports=pFr});var DL=s((Lbe,xL)=>{"use strict";var gFr=ar(),mFr=CL(),dFr=UL(),GL=1048575,hFr=.3333333333333333;function yFr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=gFr(r),a=r-1,(GL&2+n)<3?a===0?0:a*a*(hFr*a-.5):(u=a/(2+a),o=u*u,n&=GL,c=n-398458|0,f=o*o,l=440401-n|0,t=f*mFr(f),i=o*dFr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}xL.exports=yFr});var zL=s((Pbe,WL)=>{"use strict";var qFr=ar(),bFr=he(),wFr=de(),EFr=Ci(),NFr=E(),SFr=se(),OFr=p0(),AFr=ue(),_Fr=V(),TFr=DL(),IFr=0x40000000000000,HL=1.4426950407214463,RFr=16751713164886512e-26,LFr=2146435072,PFr=1048576,FFr=1072693248,l3=[0,0];function MFr(r){var e,t,i,n,a,u,o;if(NFr(r)||r<0)return NaN;if(EFr.assign(r,l3,1,0),i=l3[0],n=l3[1],o=0,i<PFr){if((i&SFr|n)===0)return _Fr;o-=54,r*=IFr,i=qFr(r)}return i>=LFr?r+r:(o+=(i>>20)-AFr|0,i&=OFr,u=i+614244&1048576|0,r=bFr(r,i|u^FFr),o+=u>>20|0,a=TFr(r),r-=1,e=wFr(r,0),t=r-e,(r+a)*RFr+(t+a)*HL+e*HL+o)}WL.exports=MFr});var JL=s((Fbe,XL)=>{"use strict";var BFr=zL();XL.exports=BFr});var $L=s((Mbe,YL)=>{"use strict";var jFr=E(),kFr=Cr(),CFr=D(),VFr=z(),UFr=Gi(),GFr=JL(),xFr=I2(),DFr=R2(),HFr=R();function WFr(r){var e,t;return jFr(r)||kFr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=GFr(r),t===DFr)?r:(e===-1?t=VFr(t):t=UFr(t),t>xFr?HFr:e*CFr(2,t))}YL.exports=WFr});var QL=s((Bbe,ZL)=>{"use strict";var zFr=$L();ZL.exports=zFr});var rP=s((jbe,KL)=>{"use strict";var XFr=z(),JFr=Gi();function YFr(r){return r<0?JFr(r):XFr(r)}KL.exports=YFr});var M0=s((kbe,eP)=>{"use strict";var $Fr=rP();eP.exports=$Fr});var iP=s((Cbe,tP)=>{"use strict";function ZFr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}tP.exports=ZFr});var aP=s((Vbe,nP)=>{"use strict";var QFr=c0(),KFr=iP();function rMr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*KFr(n),u=1-(e-i*a/(2-a)-r),QFr(u,t)}nP.exports=rMr});var cP=s((Ube,fP)=>{"use strict";var eMr=E(),sP=M0(),tMr=V(),uP=R(),iMr=aP(),nMr=.6931471803691238,aMr=19082149292705877e-26,oP=1.4426950408889634,sMr=709.782712893384,uMr=-745.1332191019411,vP=1/(1<<28),oMr=-vP;function vMr(r){var e,t,i;return eMr(r)||r===uP?r:r===tMr?0:r>sMr?uP:r<uMr?0:r>oMr&&r<vP?1+r:(r<0?i=sP(oP*r-.5):i=sP(oP*r+.5),e=r-i*nMr,t=i*aMr,iMr(e,t,i))}fP.exports=vMr});var sr=s((Gbe,lP)=>{"use strict";var fMr=cP();lP.exports=fMr});var gP=s((xbe,pP)=>{"use strict";var cMr=V();function lMr(r){return r===0&&1/r===cMr}pP.exports=lMr});var p3=s((Dbe,mP)=>{"use strict";var pMr=gP();mP.exports=pMr});var g3=s((Hbe,dP)=>{"use strict";var gMr=2.5066282746310007;dP.exports=gMr});var yP=s((Wbe,hP)=>{"use strict";function mMr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}hP.exports=mMr});var wP=s((zbe,bP)=>{"use strict";var dMr=g3(),qP=D(),hMr=sr(),yMr=yP(),qMr=143.01608;function bMr(r){var e,t,i;return e=1/r,e=1+e*yMr(e),t=hMr(r),r>qMr?(i=qP(r,.5*r-.25),t=i*(i/t)):t=qP(r,r-.5)/t,dMr*t*e}bP.exports=bMr});var NP=s((Xbe,EP)=>{"use strict";var wMr=.5772156649015329;EP.exports=wMr});var OP=s((Jbe,SP)=>{"use strict";var EMr=NP();function NMr(r,e){return e/((1+EMr*r)*r)}SP.exports=NMr});var _P=s((Ybe,AP)=>{"use strict";function SMr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}AP.exports=SMr});var BP=s(($be,MP)=>{"use strict";var OMr=E(),AMr=yr(),_Mr=p3(),TP=Y(),TMr=z(),IMr=ri(),IP=R(),RP=V(),LP=Vr(),PP=wP(),FP=OP(),RMr=_P();function LMr(r){var e,t,i,n;if(AMr(r)&&r<0||r===RP||OMr(r))return NaN;if(r===0)return _Mr(r)?RP:IP;if(r>171.61447887182297)return IP;if(r<-170.5674972726612)return 0;if(t=TP(r),t>33)return r>=0?PP(r):(i=TMr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*IMr(LP*n),e*LP/(TP(n)*PP(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return FP(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return FP(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*RMr(r))}MP.exports=LMr});var xi=s((Zbe,jP)=>{"use strict";var PMr=BP();jP.exports=PMr});var VP=s((Qbe,CP)=>{"use strict";var FMr=E(),MMr=Cr(),kP=Kt(),m3=ri(),BMr=Y(),Yn=s0(),$n=Vr();function jMr(r){var e,t;return FMr(r)?NaN:MMr(r)?NaN:(t=r%2,e=BMr(t),e===0||e===1?Yn(0,t):e<.25?m3($n*t):e<.75?(e=.5-e,Yn(kP($n*e),t)):e<1.25?(t=Yn(1,t)-t,m3($n*t)):e<1.75?(e-=1.5,-Yn(kP($n*e),t)):(t-=Yn(2,t),m3($n*t)))}CP.exports=jMr});var Zn=s((Kbe,UP)=>{"use strict";var kMr=VP();UP.exports=kMr});var xP=s((rwe,GP)=>{"use strict";function CMr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}GP.exports=CMr});var HP=s((ewe,DP)=>{"use strict";function VMr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}DP.exports=VMr});var zP=s((twe,WP)=>{"use strict";function UMr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}WP.exports=UMr});var JP=s((iwe,XP)=>{"use strict";function GMr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}XP.exports=GMr});var $P=s((nwe,YP)=>{"use strict";function xMr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}YP.exports=xMr});var QP=s((awe,ZP)=>{"use strict";function DMr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}ZP.exports=DMr});var rF=s((swe,KP)=>{"use strict";function HMr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}KP.exports=HMr});var tF=s((uwe,eF)=>{"use strict";function WMr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}eF.exports=WMr});var nF=s((owe,iF)=>{"use strict";function zMr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}iF.exports=zMr});var sF=s((vwe,aF)=>{"use strict";function XMr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}aF.exports=XMr});var vF=s((fwe,oF)=>{"use strict";var JMr=E(),YMr=Cr(),$Mr=Y(),Di=P(),ZMr=M0(),QMr=Zn(),KMr=Vr(),d3=R(),rBr=xP(),eBr=HP(),tBr=zP(),iBr=JP(),nBr=$P(),aBr=QP(),sBr=rF(),uBr=tF(),oBr=nF(),vBr=sF(),fBr=.07721566490153287,cBr=.3224670334241136,lBr=1,pBr=-.07721566490153287,gBr=.48383612272381005,mBr=-.1475877229945939,dBr=.06462494023913339,hBr=-.07721566490153287,yBr=1,qBr=.4189385332046727,B0=1.4616321449683622,bBr=4503599627370496,wBr=0x400000000000000,EBr=8470329472543003e-37,uF=1.4616321449683622,NBr=-.12148629053584961,SBr=-3638676997039505e-33;function OBr(r){var e,t,i,n,a,u,o,v,f,c,l,p,g;if(JMr(r)||YMr(r))return r;if(r===0)return d3;if(r<0?(e=!0,r=-r):e=!1,r<EBr)return-Di(r);if(e){if(r>=bBr||(f=QMr(r),f===0))return d3;t=Di(KMr/$Mr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Di(r),r>=B0-1+.27?(l=1-r,i=0):r>=B0-1-.27?(l=r-(uF-1),i=1):(l=r,i=2)):(g=0,r>=B0+.27?(l=2-r,i=0):r>=B0-.27?(l=r-uF,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=fBr+p*rBr(p),a=p*(cBr+p*eBr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=gBr+c*nBr(c),a=mBr+c*aBr(c),n=dBr+c*sBr(c),o=p*u-(SBr-c*(a+l*n)),g+=NBr+o;break;case 2:u=l*(hBr+l*uBr(l)),a=yBr+l*oBr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=ZMr(r),l=r-i,o=l*(pBr+l*iBr(l)),v=lBr+l*tBr(l),g=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Di(p)}else r<wBr?(f=Di(r),p=1/r,l=p*p,c=qBr+p*vBr(l),g=(r-.5)*(f-1)+c):g=r*(Di(r)-1);return e&&(g=t-g),g}oF.exports=OBr});var Qn=s((cwe,fF)=>{"use strict";var ABr=vF();fF.exports=ABr});var vt=s((lwe,cF)=>{"use strict";var _Br=6.283185307179586;cF.exports=_Br});var h3=s((pwe,lF)=>{"use strict";var TBr=14901161193847656e-24;lF.exports=TBr});var y3=s((gwe,pF)=>{"use strict";var IBr=.9189385332046728;pF.exports=IBr});var gF=s((mwe,RBr)=>{RBr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var mF=s((dwe,LBr)=>{LBr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var dF=s((hwe,PBr)=>{PBr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var yF=s((ywe,hF)=>{"use strict";function FBr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}hF.exports=FBr});var bF=s((qwe,qF)=>{"use strict";function MBr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}qF.exports=MBr});var EF=s((bwe,wF)=>{"use strict";function BBr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}wF.exports=BBr});var SF=s((wwe,NF)=>{"use strict";function jBr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}NF.exports=jBr});var AF=s((Ewe,OF)=>{"use strict";function kBr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}OF.exports=kBr});var TF=s((Nwe,_F)=>{"use strict";function CBr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}_F.exports=CBr});var FF=s((Swe,PF)=>{"use strict";var VBr=E(),UBr=yr(),GBr=Y(),j0=sr(),xBr=z(),DBr=xi(),HBr=Qn(),IF=Zn(),RF=D(),WBr=P(),zBr=R(),XBr=V(),LF=vt(),JBr=h3(),YBr=y3(),$Br=gF(),ZBr=mF(),QBr=dF(),KBr=yF(),rjr=bF(),ejr=EF(),tjr=SF(),ijr=AF(),njr=TF(),ajr=129,sjr=170,ujr=709,ojr=1.2433929443359375,vjr=.6986598968505859;function q3(r){var e,t,i,n,a,u;if(VBr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(UBr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=ajr)return-QBr[u]/(i+1)}else return(n&1)===0?ZBr[n/2]:$Br[(n-3)/2];return GBr(r)<JBr?-.5-YBr*r:(t=1-r,r<0?xBr(r/2)===r/2?0:(e=r,r=t,t=e,r>sjr?(e=IF(.5*t)*2*q3(r),a=HBr(r),a-=r*WBr(LF),a>ujr?e<0?XBr:zBr:e*j0(a)):IF(.5*t)*2*RF(LF,-r)*DBr(r)*q3(r)):r<1?(e=KBr(t),e-=ojr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+rjr(t)):r<=4?(e=vjr+1/-t,e+ejr(r-2)):r<=7?(e=tjr(r-4),1+j0(e)):r<15?(e=ijr(r-7),1+j0(e)):r<36?(e=njr(r-15),1+j0(e)):1+RF(2,-r))}PF.exports=q3});var BF=s((Owe,MF)=>{"use strict";var fjr=FF();MF.exports=fjr});var kF=s((Awe,jF)=>{"use strict";var x=rr(),cjr=Y(),ljr=q0(),pjr=Un(),gjr=x_(),mjr=eT(),djr=aT(),hjr=vT(),yjr=pT(),qjr=ET(),bjr=AT(),wjr=RT(),Ejr=Zt(),Njr=z2(),Sjr=S0(),Ojr=BT(),Ajr=VT(),_jr=DT(),Tjr=ZT(),Ijr=r3(),Rjr=e3(),Ljr=mR(),Pjr=PR(),Fjr=oL(),Mjr=dL(),Bjr=Gi(),jjr=jL(),kjr=QL(),Cjr=Kt(),Vjr=ri(),Ujr=U(),Gjr=BF();function xjr(r){return x(r,"abs",cjr),x(r,"abs2",ljr),x(r,"acos",pjr),x(r,"acosh",gjr),x(r,"acot",mjr),x(r,"acovercos",djr),x(r,"acoversin",hjr),x(r,"acsc",yjr),x(r,"acsch",qjr),x(r,"ahavercos",bjr),x(r,"ahaversin",wjr),x(r,"asin",Ejr),x(r,"asinh",Njr),x(r,"atan",Sjr),x(r,"atanh",Ojr),x(r,"avercos",Ajr),x(r,"aversin",_jr),x(r,"bernoulli",Tjr),x(r,"besselj0",Ijr),x(r,"besselj1",Rjr),x(r,"bessely0",Ljr),x(r,"bessely1",Pjr),x(r,"binet",Fjr),x(r,"cbrt",Mjr),x(r,"ceil",Bjr),x(r,"ceil10",jjr),x(r,"ceil2",kjr),x(r,"cos",Cjr),x(r,"sin",Vjr),x(r,"sqrt",Ujr),x(r,"zeta",Gjr),r}jF.exports=xjr});var VF=s((_we,CF)=>{"use strict";var Djr=rr(),Hjr=NA(),Wjr=t_(),zjr=kF();function Xjr(r){return Djr(r,"tools",Wjr({})),r=Hjr(r),r=zjr(r),r}CF.exports=Xjr});var xF=s((Twe,GF)=>{"use strict";var Jjr=So(),UF=Jjr();function Yjr(){return typeof UF.BigInt=="function"&&typeof BigInt=="function"&&typeof UF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}GF.exports=Yjr});var HF=s((Iwe,DF)=>{"use strict";var $jr=xF();DF.exports=$jr});var WF=s((Rwe,Zjr)=>{Zjr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var XF=s((Lwe,zF)=>{"use strict";var Qjr=WF();function Kjr(r){return Qjr[r]||null}zF.exports=Kjr});var YF=s((Pwe,JF)=>{"use strict";var rkr=XF();JF.exports=rkr});var ZF=s((Fwe,$F)=>{"use strict";function ekr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}$F.exports=ekr});var KF=s((Mwe,QF)=>{"use strict";var tkr=ZF();QF.exports=tkr});var tM=s((Bwe,eM)=>{"use strict";var rM=Y();function ikr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=rM(r[0]),u=1;u<t;u++)if(a=rM(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}eM.exports=ikr});var b3=s((jwe,iM)=>{"use strict";var nkr=tM();iM.exports=nkr});var aM=s((kwe,nM)=>{"use strict";function akr(r,e){return e&&(r===2||r===3)}nM.exports=akr});var uM=s((Cwe,sM)=>{"use strict";function skr(r,e){return e&&(r===1||r===3)}sM.exports=skr});var vM=s((Vwe,oM)=>{"use strict";var ukr=q1();function okr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=ukr(e,t,i),r===a[1]-a[0]+1)}oM.exports=okr});var cM=s((Uwe,fM)=>{"use strict";function vkr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}fM.exports=vkr});var pM=s((Gwe,lM)=>{"use strict";function fkr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}lM.exports=fkr});var mM=s((xwe,gM)=>{"use strict";function ckr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}gM.exports=ckr});var hM=s((Dwe,dM)=>{"use strict";function lkr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}dM.exports=lkr});var qM=s((Hwe,yM)=>{"use strict";function pkr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}yM.exports=pkr});var wM=s((Wwe,bM)=>{"use strict";var gkr=re(),mkr=ee();function dkr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(gkr(t),mkr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}bM.exports=dkr});var SM=s((zwe,NM)=>{"use strict";var hkr=$().isPrimitive,ykr=q(),EM=/[-\/\\^$*+?.()|[\]{}]/g;function qkr(r){var e,t,i;if(!hkr(r))throw new TypeError(ykr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(EM,"\\$&"):(t=r.substring(1,i),t=t.replace(EM,"\\$&"),r=r[0]+t+r.substring(i),r)}NM.exports=qkr});var AM=s((Xwe,OM)=>{"use strict";var bkr=SM();OM.exports=bkr});var TM=s((Jwe,_M)=>{"use strict";var wkr=RegExp.prototype.exec;_M.exports=wkr});var RM=s((Ywe,IM)=>{"use strict";var Ekr=TM();function Nkr(r){try{return Ekr.call(r),!0}catch{return!1}}IM.exports=Nkr});var PM=s(($we,LM)=>{"use strict";var Skr=fi(),Okr=er(),Akr=RM(),_kr=Skr();function Tkr(r){return typeof r=="object"?r instanceof RegExp?!0:_kr?Akr(r):Okr(r)==="[object RegExp]":!1}LM.exports=Tkr});var MM=s((Zwe,FM)=>{"use strict";var Ikr=PM();FM.exports=Ikr});var jM=s((Qwe,BM)=>{"use strict";function Rkr(r,e,t){return r.replace(e,t)}BM.exports=Rkr});var ft=s((Kwe,kM)=>{"use strict";var Lkr=jM();kM.exports=Lkr});var VM=s((rEe,CM)=>{"use strict";var Pkr=AM(),Fkr=I(),w3=$().isPrimitive,Mkr=MM(),E3=q(),Bkr=ft();function jkr(r,e,t){if(!w3(r))throw new TypeError(E3("invalid argument. First argument must be a string. Value: `%s`.",r));if(w3(e))e=new RegExp(Pkr(e),"g");else if(!Mkr(e))throw new TypeError(E3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!w3(t)&&!Fkr(t))throw new TypeError(E3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return Bkr(r,e,t)}CM.exports=jkr});var GM=s((eEe,UM)=>{"use strict";var kkr=VM();UM.exports=kkr});var DM=s((tEe,xM)=>{"use strict";var Ckr=GM(),N3=re(),S3=ee(),Vkr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function Ukr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=N3(a)+", "+S3(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=N3(a)+", "+S3(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=N3(a)+", "+S3(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=Vkr[this.dtype],i+=Ckr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}xM.exports=Ukr});var WM=s((iEe,HM)=>{"use strict";var Gkr=typeof ArrayBuffer=="function"?ArrayBuffer:null;HM.exports=Gkr});var XM=s((nEe,zM)=>{"use strict";var xkr=Ma(),Dkr=lr(),k0=WM();function Hkr(){var r,e,t;if(typeof k0!="function")return!1;try{t=new k0(16),r=xkr(t)&&typeof k0.isView=="function",r&&(e=new Dkr(t),e[0]=-3.14,e[1]=NaN,r=r&&k0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}zM.exports=Hkr});var YM=s((aEe,JM)=>{"use strict";var Wkr=XM();JM.exports=Wkr});var ZM=s((sEe,$M)=>{"use strict";var zkr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;$M.exports=zkr});var KM=s((uEe,QM)=>{"use strict";function Xkr(){throw new Error("not implemented")}QM.exports=Xkr});var C0=s((oEe,rB)=>{"use strict";var Jkr=YM(),Ykr=ZM(),$kr=KM(),O3;Jkr()?O3=Ykr:O3=$kr;rB.exports=O3});var tB=s((vEe,eB)=>{"use strict";var Zkr=er(),Qkr=typeof DataView=="function";function Kkr(r){return Qkr&&r instanceof DataView||Zkr(r)==="[object DataView]"}eB.exports=Kkr});var nB=s((fEe,iB)=>{"use strict";var rCr=tB();iB.exports=rCr});var sB=s((cEe,aB)=>{"use strict";var eCr=typeof DataView=="function"?DataView:null;aB.exports=eCr});var vB=s((lEe,oB)=>{"use strict";var tCr=nB(),iCr=C0(),uB=sB();function nCr(){var r,e,t;if(typeof uB!="function")return!1;try{t=new iCr(24),e=new uB(t,8),r=tCr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}oB.exports=nCr});var cB=s((pEe,fB)=>{"use strict";var aCr=vB();fB.exports=aCr});var pB=s((gEe,lB)=>{"use strict";var sCr=typeof DataView=="function"?DataView:void 0;lB.exports=sCr});var mB=s((mEe,gB)=>{"use strict";function uCr(){throw new Error("not implemented")}gB.exports=uCr});var Kn=s((dEe,dB)=>{"use strict";var oCr=cB(),vCr=pB(),fCr=mB(),A3;oCr()?A3=vCr:A3=fCr;dB.exports=A3});var yB=s((hEe,hB)=>{"use strict";var cCr=typeof BigInt=="function"?BigInt:void 0;hB.exports=cCr});var bB=s((yEe,qB)=>{"use strict";var lCr=yB();qB.exports=lCr});var wB=s((qEe,pCr)=>{pCr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var SB=s((bEe,NB)=>{"use strict";var EB=wB();function gCr(){var r;return arguments.length===0?EB.all.slice():(r=EB[arguments[0]],r?r.slice():[])}NB.exports=gCr});var AB=s((wEe,OB)=>{"use strict";function mCr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}OB.exports=mCr});var TB=s((EEe,_B)=>{"use strict";var dCr=rr(),hCr=Fi();function yCr(r,e){var t,i,n;for(t=hCr(e),n=0;n<t.length;n++)i=t[n],dCr(r,i,e[i]);return r}_B.exports=yCr});var T3=s((NEe,RB)=>{"use strict";var qCr=b(),_3=SB(),IB=AB(),bCr=TB();qCr(_3,"enum",IB);bCr(_3,IB());RB.exports=_3});var LB=s((SEe,wCr)=>{wCr.exports=["row-major","column-major"]});var FB=s((OEe,PB)=>{"use strict";var ECr=LB();function NCr(){return ECr.slice()}PB.exports=NCr});var BB=s((AEe,MB)=>{"use strict";function SCr(){return{"row-major":1,"column-major":2}}MB.exports=SCr});var ra=s((_Ee,kB)=>{"use strict";var OCr=b(),jB=FB(),ACr=BB();OCr(jB,"enum",ACr);kB.exports=jB});var CB=s((TEe,_Cr)=>{_Cr.exports=["throw","clamp","wrap"]});var UB=s((IEe,VB)=>{"use strict";var TCr=CB();function ICr(){return TCr.slice()}VB.exports=ICr});var xB=s((REe,GB)=>{"use strict";function RCr(){return{throw:1,clamp:2,wrap:3}}GB.exports=RCr});var I3=s((LEe,HB)=>{"use strict";var LCr=b(),DB=UB(),PCr=xB();LCr(DB,"enum",PCr);HB.exports=DB});var XB=s((PEe,zB)=>{"use strict";var ct=Xr(),FCr=C0(),MCr=Kn(),ea=bB(),BCr=T3().enum,jCr=ra().enum,kCr=I3().enum,CCr=BCr(),VCr=jCr(),WB=kCr();function UCr(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new MCr(new FCr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,ct?1:0),f+=1,o.setInt16(f,CCr[i],ct),f+=2,o.setBigInt64(f,ea(l),ct),c=l*8,f+=8,g=0;g<l;g++)o.setBigInt64(f,ea(n[g]),ct),o.setBigInt64(f+c,ea(a[g]*r),ct),f+=8;for(f+=c,o.setBigInt64(f,ea(this._offset*r),ct),f+=8,o.setInt8(f,VCr[this._order]),f+=1,o.setInt8(f,WB[v]),f+=1,o.setBigInt64(f,ea(p),ct),f+=8,g=0;g<p;g++)o.setInt8(f,WB[u[g]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,ct),this.__meta_dataview__=o,o}zB.exports=UCr});var YB=s((FEe,JB)=>{"use strict";var ta=Xr(),GCr=Kr(),xCr=Kn(),DCr=z(),HCr=4294967295>>>0,WCr=4294967296;function zCr(r){var e,t,i,n;return e=new GCr(8),r===0||(n=(r&HCr)>>>0,i=DCr(r/WCr),t=new xCr(e.buffer),ta?(t.setUint32(0,n,ta),t.setUint32(4,i,ta)):(t.setUint32(0,i,ta),t.setUint32(4,n,ta))),e}JB.exports=zCr});var ZB=s((MEe,$B)=>{"use strict";var ia=Xr(),XCr=Kr(),JCr=Kn(),YCr=z(),$Cr=4294967295>>>0,ZCr=4294967296,U0=new XCr(8),V0=new JCr(U0.buffer);function QCr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<U0.length;u++)e[i]=0,i+=t;return e}for(a=(r&$Cr)>>>0,n=YCr(r/ZCr),ia?(V0.setUint32(0,a,ia),V0.setUint32(4,n,ia)):(V0.setUint32(0,n,ia),V0.setUint32(4,a,ia)),u=0;u<U0.length;u++)e[i]=U0[u],i+=t;return e}$B.exports=QCr});var rj=s((BEe,KB)=>{"use strict";var KCr=b(),QB=YB(),rVr=ZB();KCr(QB,"assign",rVr);KB.exports=QB});var ij=s((jEe,tj)=>{"use strict";var R3=Xr(),eVr=C0(),tVr=Kn(),iVr=Kr(),nVr=T3().enum,aVr=ra().enum,sVr=I3().enum,na=rj().assign,uVr=nVr(),oVr=aVr(),ej=sVr();function vVr(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g,h;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,g=o.length,i=33+p*16+g,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new tVr(new eVr(i)),e=new iVr(v.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,R3?1:0),c+=1,v.setInt16(c,uVr[n],R3),c+=2,na(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)na(a[h],e,1,c),na(u[h]*r,e,1,c+l),c+=8;for(c+=l,na(this._offset*r,e,1,c),c+=8,v.setInt8(c,oVr[this._order]),c+=1,v.setInt8(c,ej[f]),c+=1,na(g,e,1,c),c+=8,h=0;h<g;h++)v.setInt8(c,ej[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,R3),this.__meta_dataview__=v,v}tj.exports=vVr});var aj=s((kEe,nj)=>{"use strict";var fVr=HF(),lt=b(),Jr=L(),cVr=YF(),lVr=KF(),pVr=b3(),gVr=wo(),mVr=aM(),dVr=uM(),hVr=vM(),yVr=cM(),qVr=pM(),bVr=mM(),wVr=hM(),EVr=qM(),NVr=wM(),SVr=DM(),OVr=XB(),AVr=ij();function nr(r,e,t,i,n,a){var u,o,v,f,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=cVr(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=gVr(e.get&&e.set),this._iterationOrder=lVr(i),u=hVr(f,t,i,n,this._iterationOrder),v=pVr(i),this._flags={ROW_MAJOR_CONTIGUOUS:dVr(v,u),COLUMN_MAJOR_CONTIGUOUS:mVr(v,u),READONLY:!1},this.__meta_dataview__=null,this}lt(nr,"name","ndarray");Jr(nr.prototype,"byteLength",function(){return this._byteLength});Jr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Jr(nr.prototype,"data",function(){return this._buffer});Jr(nr.prototype,"dtype",function(){return this._dtype});Jr(nr.prototype,"flags",function(){return yVr(this._flags)});Jr(nr.prototype,"length",function(){return this._length});Jr(nr.prototype,"ndims",function(){return this._ndims});Jr(nr.prototype,"offset",function(){return this._offset});Jr(nr.prototype,"order",function(){return this._order});Jr(nr.prototype,"shape",function(){return this._shape.slice()});Jr(nr.prototype,"strides",function(){return this._strides.slice()});lt(nr.prototype,"get",EVr);lt(nr.prototype,"iget",qVr);lt(nr.prototype,"set",wVr);lt(nr.prototype,"iset",bVr);lt(nr.prototype,"toString",SVr);lt(nr.prototype,"toJSON",NVr);lt(nr.prototype,"__array_meta_dataview__",fVr()?OVr:AVr);nj.exports=nr});var aa=s((CEe,sj)=>{"use strict";var _Vr=aj();sj.exports=_Vr});var oj=s((VEe,uj)=>{"use strict";var TVr=aa();function IVr(r){return r instanceof TVr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}uj.exports=IVr});var fj=s((UEe,vj)=>{"use strict";var RVr=oj();vj.exports=RVr});var lj=s((GEe,cj)=>{"use strict";function LVr(r){var e=r.flags;return e&&e.READONLY===!0}cj.exports=LVr});var gj=s((xEe,pj)=>{"use strict";var PVr=lj();pj.exports=PVr});var dj=s((DEe,mj)=>{"use strict";var FVr=hr().isPrimitive,MVr=Br(),L3=q();function BVr(r){var e,t,i,n;if(typeof r!="object"||r===null)throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!MVr(t))throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],n=0;n<t.length;n++){if(i=t[n],!FVr(i))throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}mj.exports=BVr});var yj=s((HEe,hj)=>{"use strict";var jVr=dj();hj.exports=jVr});var bj=s((WEe,qj)=>{"use strict";function kVr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}qj.exports=kVr});var ti=s((zEe,wj)=>{"use strict";var CVr=bj();wj.exports=CVr});var Nj=s((XEe,Ej)=>{"use strict";function VVr(r){return r===null}Ej.exports=VVr});var P3=s((JEe,Sj)=>{"use strict";var UVr=Nj();Sj.exports=UVr});var Aj=s((YEe,Oj)=>{"use strict";function GVr(r){return r===void 0}Oj.exports=GVr});var F3=s(($Ee,_j)=>{"use strict";var xVr=Aj();_j.exports=xVr});var Ij=s((ZEe,Tj)=>{"use strict";var B3=b(),j3=L(),DVr=gr().isPrimitive,HVr=P3(),WVr=F3(),G0=q();function M3(r){return DVr(r)||HVr(r)||WVr(r)}function we(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof we))return new we(e,t,i);if(!M3(e))throw new TypeError(G0("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!M3(t))throw new TypeError(G0("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(M3(i)){if(i===0)throw new RangeError(G0("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(G0("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}B3(we,"name","Slice");j3(we.prototype,"start",function(){return this._start});j3(we.prototype,"stop",function(){return this._stop});j3(we.prototype,"step",function(){return this._step});B3(we.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});B3(we.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});Tj.exports=we});var Hi=s((QEe,Rj)=>{"use strict";var zVr=Ij();Rj.exports=zVr});var Pj=s((KEe,Lj)=>{"use strict";var XVr=Hi(),JVr=pe();function YVr(r){return r instanceof XVr||JVr(r)==="Slice"}Lj.exports=YVr});var Mj=s((rNe,Fj)=>{"use strict";var $Vr=Pj();Fj.exports=$Vr});var kj=s((eNe,jj)=>{"use strict";var k3=b(),Bj=L(),ZVr=gr().isPrimitive,QVr=P3(),KVr=F3(),rUr=Mj(),eUr=q();function tUr(r){return ZVr(r)||QVr(r)||KVr(r)||rUr(r)}function Nr(){var r,e,t,i,n;if(r=arguments.length,!(this instanceof Nr)){if(r===1)return new Nr(arguments[0]);if(r===2)return new Nr(arguments[0],arguments[1]);if(r===3)return new Nr(arguments[0],arguments[1],arguments[2]);if(r===4)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],n=0;n<r;n++)t.push(arguments[n]);return e=Object.create(Nr.prototype),Nr.apply(e,t)}for(this._data=[],n=0;n<r;n++){if(i=arguments[n],!tUr(i))throw new TypeError(eUr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,i));this._data.push(i===void 0?null:i)}return this}k3(Nr,"name","MultiSlice");Bj(Nr.prototype,"ndims",function(){return this._data.length});Bj(Nr.prototype,"data",function(){return this._data.slice()});k3(Nr.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});k3(Nr.prototype,"toJSON",function(){var e,t,i,n;for(e=this._data,t={type:"MultiSlice",data:[]},n=0;n<e.length;n++)i=e[n],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});jj.exports=Nr});var x0=s((tNe,Cj)=>{"use strict";var iUr=kj();Cj.exports=iUr});var Uj=s((iNe,Vj)=>{"use strict";function nUr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Vj.exports=nUr});var xj=s((nNe,Gj)=>{"use strict";var aUr=Hi(),sa=Uj();function sUr(r,e,t){var i,n,a;if(i=r.start,n=r.stop,a=r.step,a===null&&(a=1),i===null)a>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return sa();i=0}}else if(i>=e){if(t)return sa();a<0?i=e-1:i=e}if(n===null)a>0?n=e:n=null;else if(n<0){if(n=e+n,n<0)if(a>0){if(t)return sa();n=0}else{if(t&&n<-1)return sa();n=null}}else if(n>e){if(t)return sa();n=e}return new aUr(i,n,a)}Gj.exports=sUr});var Hj=s((aNe,Dj)=>{"use strict";var uUr=xj();Dj.exports=uUr});var zj=s((sNe,Wj)=>{"use strict";function oUr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Wj.exports=oUr});var Yj=s((uNe,Jj)=>{"use strict";var vUr=x0(),ua=Hi(),fUr=Hj(),Xj=zj();function cUr(r,e,t){return r===null?new ua(0,e,1):typeof r=="number"?r>=e?t?Xj():new ua(e,e,1):r<0?(r=e+r,r<0?t?Xj():new ua(0,0,1):new ua(r,r+1,1)):new ua(r,r+1,1):fUr(r,e,t)}function lUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],u=0;u<i.length;u++){if(a=cUr(i[u],e[u],t),a.code!==void 0)return a;n.push(a)}return vUr.apply(null,n)}Jj.exports=lUr});var Zj=s((oNe,$j)=>{"use strict";var pUr=Yj();$j.exports=pUr});var Kj=s((vNe,Qj)=>{"use strict";function gUr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}Qj.exports=gUr});var ek=s((fNe,rk)=>{"use strict";var mUr=Kj();rk.exports=mUr});var ik=s((cNe,tk)=>{"use strict";var dUr=Gi();function hUr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:dUr((i-t)/e)}tk.exports=hUr});var ak=s((lNe,nk)=>{"use strict";var yUr=ik();nk.exports=yUr});var uk=s((pNe,sk)=>{"use strict";var qUr=ak();function bUr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(qUr(e[i]));return t}sk.exports=bUr});var vk=s((gNe,ok)=>{"use strict";var wUr=uk();ok.exports=wUr});var ck=s((mNe,fk)=>{"use strict";function EUr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}fk.exports=EUr});var pk=s((dNe,lk)=>{"use strict";var NUr=ck();lk.exports=NUr});var mk=s((hNe,gk)=>{"use strict";function SUr(r){return r.dtype}gk.exports=SUr});var hk=s((yNe,dk)=>{"use strict";var OUr=mk();dk.exports=OUr});var qk=s((qNe,yk)=>{"use strict";var AUr=Aa();function _Ur(r,e){var t=r.shape;return e?AUr(t):t}yk.exports=_Ur});var wk=s((bNe,bk)=>{"use strict";var TUr=qk();bk.exports=TUr});var Nk=s((wNe,Ek)=>{"use strict";function IUr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function RUr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function LUr(r,e){return e==="column-major"?RUr(r):IUr(r)}Ek.exports=LUr});var Ok=s((ENe,Sk)=>{"use strict";function PUr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function FUr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function MUr(r,e,t){return e==="column-major"?FUr(r,t):PUr(r,t)}Sk.exports=MUr});var D0=s((NNe,_k)=>{"use strict";var BUr=b(),Ak=Nk(),jUr=Ok();BUr(Ak,"assign",jUr);_k.exports=Ak});var Ik=s((SNe,Tk)=>{"use strict";var kUr=D0(),CUr=Aa(),VUr="row-major";function UUr(r,e){var t,i,n;return n=r.strides,typeof n!="object"||n===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=VUr),kUr(i,t))):e?CUr(n):n}Tk.exports=UUr});var Lk=s((ONe,Rk)=>{"use strict";var GUr=Ik();Rk.exports=GUr});var Fk=s((ANe,Pk)=>{"use strict";function xUr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}Pk.exports=xUr});var H0=s((_Ne,Mk)=>{"use strict";var DUr=Fk();Mk.exports=DUr});var jk=s((TNe,Bk)=>{"use strict";var HUr=H0();function WUr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:HUr(t,e))}Bk.exports=WUr});var Ck=s((INe,kk)=>{"use strict";var zUr=jk();kk.exports=zUr});var Uk=s((RNe,Vk)=>{"use strict";var XUr=b3(),C3="row-major",JUr="column-major";function YUr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=XUr(e),t===1||t===3)?C3:t===2?JUr:r.shape.length===0?C3:null)}Vk.exports=YUr});var xk=s((LNe,Gk)=>{"use strict";var $Ur=Uk();Gk.exports=$Ur});var Hk=s((PNe,Dk)=>{"use strict";function ZUr(r){return r.data}Dk.exports=ZUr});var zk=s((FNe,Wk)=>{"use strict";var QUr=Hk();Wk.exports=QUr});var Jk=s((MNe,Xk)=>{"use strict";function KUr(r,e,t){var i,n,a;for(i=r.data,n=t,a=0;a<i.length;a++)n+=e[a]*i[a].start;return n}Xk.exports=KUr});var $k=s((BNe,Yk)=>{"use strict";function rGr(r,e,t){var i,n,a,u;for(i=r.data,n=[],a=0;a<t.length;a++)u=t[a],n.push(e[u]*i[u].step);return n}Yk.exports=rGr});var Qk=s((jNe,Zk)=>{"use strict";var eGr=it(),tGr=lr(),iGr=Qr(),nGr=pi(),aGr=Ke(),sGr=mi(),uGr=Gt(),oGr=pr(),vGr=Kr(),fGr=gi(),cGr=Si(),lGr=Ti(),pGr={binary:eGr,float64:tGr,float32:iGr,generic:Array,int16:nGr,int32:aGr,int8:sGr,uint16:uGr,uint32:oGr,uint8:vGr,uint8c:fGr,complex64:cGr,complex128:lGr};Zk.exports=pGr});var rC=s((kNe,Kk)=>{"use strict";var gGr=Qk();function mGr(r){return gGr[r]||null}Kk.exports=mGr});var tC=s((CNe,eC)=>{"use strict";var dGr=rC();eC.exports=dGr});var nC=s((VNe,iC)=>{"use strict";var hGr=I(),yGr=it(),qGr=hGr(yGr.allocUnsafe);iC.exports=qGr});var sC=s((UNe,aC)=>{"use strict";var bGr=hr(),wGr=q(),EGr=it();function NGr(r){if(!bGr(r))throw new TypeError(wGr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return EGr.allocUnsafe(r)}aC.exports=NGr});var oC=s((GNe,uC)=>{"use strict";var SGr=hr(),OGr=q(),AGr=it();function _Gr(r){if(!SGr(r))throw new TypeError(OGr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new AGr(r)}uC.exports=_Gr});var fC=s((xNe,vC)=>{"use strict";var TGr=nC(),IGr=sC(),RGr=oC(),V3;TGr?V3=IGr:V3=RGr;vC.exports=V3});var lC=s((DNe,cC)=>{"use strict";function LGr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}cC.exports=LGr});var gC=s((HNe,pC)=>{"use strict";var PGr=tC(),FGr=fC(),MGr=lC();function BGr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function jGr(r){return MGr(FGr(r))}function kGr(r,e){var t=PGr(r);return t?new t(e):null}function CGr(r,e){return r==="generic"?BGr(e):r==="binary"?jGr(e):kGr(r,e)}pC.exports=CGr});var U3=s((WNe,mC)=>{"use strict";var VGr=gC();mC.exports=VGr});var hC=s((zNe,dC)=>{"use strict";var UGr=U3(),GGr=Qe();function xGr(r,e,t,i,n){var a,u;return u=t.length,u===0?a=[0]:a=GGr(u),new r(e,UGr(e,0),t,a,0,i,{readonly:n})}dC.exports=xGr});var NC=s((XNe,EC)=>{"use strict";var yC=Zj(),DGr=ek(),qC=vk(),G3=pk(),HGr=Qe(),bC=ti(),WGr=hk(),zGr=wk(),XGr=Lk(),JGr=Ck(),YGr=xk(),x3=zk(),wC=q(),$Gr=Jk(),ZGr=$k(),QGr=hC();function KGr(r,e,t,i){var n,a,u,o,v,f,c,l,p,g;if(u=WGr(r),o=zGr(r,!0),n=XGr(r,!0),a=JGr(r),v=YGr(r),c=o.length,e.ndims!==c)throw new RangeError(wC("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,x3(r),o,n,a,v,{readonly:!i});if(f=DGr(e),g=yC(e,o,!0),g.code){if(t)throw new RangeError(wC("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));g=yC(e,o,!1),p=qC(g),bC(G3(p,f))>0&&(p=HGr(p.length))}else p=qC(g);return bC(p)===0?QGr(l,u,G3(p,f),v,!i):(a=$Gr(g,n,a),p=G3(p,f),p.length===0?new l(u,x3(r),[],[0],a,v,{readonly:!i}):(n=ZGr(g,n,f),new l(u,x3(r),p,n,a,v,{readonly:!i})))}EC.exports=KGr});var D3=s((JNe,SC)=>{"use strict";var rxr=NC();SC.exports=rxr});var H3=s((YNe,OC)=>{"use strict";var exr="row-major";function txr(r,e,t,i,n){var a,u;for(a=r-1;a>i;a--)n[a]=t[a];for(a=i;a>=0&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a--);for(a-=1;a>=0;a--)n[a]=t[a];return n}function ixr(r,e,t,i,n){var a,u;for(a=0;a<i;a++)n[a]=t[a];for(a=i;a<r&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a++);for(a+=1;a<r;a++)n[a]=t[a];return n}function nxr(r,e,t,i,n){var a=r.length;if(a===0)return null;if(i<0){if(i+=a,i<0)return null}else if(i>=a)return null;return e===exr?txr(a,r,t,i,n):ixr(a,r,t,i,n)}OC.exports=nxr});var _C=s(($Ne,AC)=>{"use strict";var axr=Qe(),sxr=H3();function uxr(r,e,t,i){return sxr(r,e,t,i,axr(r.length))}AC.exports=uxr});var W3=s((ZNe,IC)=>{"use strict";var oxr=b(),TC=_C(),vxr=H3();oxr(TC,"assign",vxr);IC.exports=TC});var FC=s((QNe,PC)=>{"use strict";var z3=b(),fxr=T(),cxr=cr().isPrimitive,lxr=fj(),pxr=gj(),gxr=O(),RC=wn(),mxr=Qe(),dxr=yj(),hxr=ti(),yxr=D3(),qxr=W3().assign,bxr=x0(),W0=q();function LC(r){var e,t,i,n,a,u,o,v,f,c,l;if(!lxr(r))throw new TypeError(W0("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(n={writable:!1},arguments.length>1){if(e=arguments[1],!fxr(e))throw new TypeError(W0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gxr(e,"readonly")){if(!cxr(e.readonly))throw new TypeError(W0("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(n.writable=!e.readonly,n.writable&&pxr(r))throw new Error(W0("invalid option. Cannot write to read-only array."))}}if(t=dxr(r),i=t.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return c=hxr(t),c===0&&(u=!0),c/=t[i-1],v=i-2,f=t[v],l=-1,o=mxr(i),o[i-1]=null,a={},z3(a,"next",p),z3(a,"return",g),RC&&z3(a,RC,h),a;function p(){var d,m;return l+=1,u||l>=c?{done:!0}:(d=bxr.apply(null,o),m=(o[v]+1)%f,o[v]=m,m===0&&(o=qxr(t,"row-major",o,v-1,o)),{value:yxr(r,d,!0,n.writable),done:!1})}function g(d){return u=!0,arguments.length?{value:d,done:!0}:{done:!0}}function h(){return LC(r,n)}}PC.exports=LC});var BC=s((KNe,MC)=>{"use strict";var wxr=FC();MC.exports=wxr});var CC=s((rSe,kC)=>{"use strict";function jC(r,e,t,i,n,a){var u,o,v,f,c;if(a>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[a],u=t[a],c=0;c<f;c++)o=jC(r,e,t,i,n,a+1),v.push(o),i+=u;return v}kC.exports=jC});var UC=s((eSe,VC)=>{"use strict";var Exr=On(),Nxr=CC();function Sxr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return Nxr(Exr(r),e,t,i,n,0)}VC.exports=Sxr});var X3=s((tSe,GC)=>{"use strict";var Oxr=UC();GC.exports=Oxr});var DC=s((iSe,xC)=>{"use strict";var Axr=X3(),_xr=ti();function Txr(r,e,t,i,n,a,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<n.length;f++)r[v]=n[f],v+=1;return r[v]="offset",v+=1,r[v]=a,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:_xr(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:Axr(r,[r.length,1],[1,1],0,"row-major")}xC.exports=Txr});var WC=s((nSe,HC)=>{"use strict";var Ixr=DC();HC.exports=Ixr});var JC=s((aSe,XC)=>{"use strict";var Rxr=ra(),zC=Rxr(),Lxr=zC.length;function Pxr(r){var e;for(e=0;e<Lxr;e++)if(r===zC[e])return!0;return!1}XC.exports=Pxr});var $C=s((sSe,YC)=>{"use strict";var Fxr=JC();YC.exports=Fxr});var QC=s((uSe,ZC)=>{"use strict";function Mxr(r){return r.toLowerCase()}ZC.exports=Mxr});var ii=s((oSe,KC)=>{"use strict";var Bxr=QC();KC.exports=Bxr});var eV=s((vSe,rV)=>{"use strict";var jxr=yn(),kxr=bi(),Cxr=En(),Vxr=Ii();function Uxr(r,e){var t,i,n,a;for(n=Vxr(r),jxr(r)?i=kxr(n):i=Cxr(n),t=r.length,a=0;a<t;a++)if(i(r,a)===e)return!0;return!1}rV.exports=Uxr});var iV=s((fSe,tV)=>{"use strict";var Gxr=Br(),xxr=yn(),Dxr=bi(),Hxr=Ii(),Wxr=q();function zxr(r){var e,t,i;if(!Gxr(r))throw new TypeError(Wxr("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=Hxr(r),xxr(r)&&(e=Dxr(i)),t=r.length,e===void 0?n:a;function n(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function a(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}tV.exports=zxr});var sV=s((cSe,aV)=>{"use strict";var Xxr=b(),nV=eV(),Jxr=iV();Xxr(nV,"factory",Jxr);aV.exports=nV});var fV=s((lSe,vV)=>{"use strict";var z0=hr().isPrimitive,Yxr=gr().isPrimitive,uV=M().isPrimitive,$xr=$C(),Zxr=b1(),J3=ii(),Qxr=sV().factory,Kxr=ra(),rDr=aa(),eDr=ti(),oe=q(),tDr=B1(),iDr=Ra(),nDr=Kxr(),oV=["string","number","complex","boolean","date","any"],aDr=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],sDr=aDr.length,uDr=5,oDr=Qxr(oV);function vDr(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function fDr(r,e){var t,i,n;for(t=[],n=e;n<r.length&&(i=r[n],!!uV(i));n++){if(!z0(i))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function cDr(r,e){var t,i,n;for(t=[],n=e;n<r.length&&(i=r[n],!!uV(i));n++){if(!Yxr(i))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function lDr(r,e){var t,i,n;if(r[0]!=="ndarray")throw new TypeError(oe('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(n=1;n<r.length;n++)if(i=J3(r[n]),i==="shape")e.shape=fDr(r,n+1),e.ndims=e.shape.length,n+=e.ndims;else if(i==="strides")e.strides=cDr(r,n+1),n+=e.strides.length;else if(i==="offset"){if(n+=1,t=r[n],!z0(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(n+=1,t=J3(r[n]),!$xr(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',nDr.join('", "'),t));e.order=t}else if(i==="dtype"){if(n+=1,t=J3(r[n]),!oDr(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',oV.join('", "'),t));e.dtype=t}else if(i==="length"){if(n+=1,t=r[n],!z0(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(n+=1,t=r[n],!z0(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){n+=1;break}else throw new TypeError(oe('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function pDr(r,e){return sDr+r+e+uDr}function gDr(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(oe("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=eDr(r.shape),t!==r.length)throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!Zxr(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function mDr(r){var e;if(!tDr(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=vDr(),e.rawBuffer=iDr(r),e=lDr(e.rawBuffer,e),e=gDr(e),e.headerLength=pDr(e.ndims,e.strides.length),e.ndarray=new rDr("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}vV.exports=mDr});var lV=s((pSe,cV)=>{"use strict";var dDr=fV();cV.exports=dDr});var gV=s((gSe,pV)=>{"use strict";var hDr=typeof String.prototype.trim<"u";pV.exports=hDr});var Y3=s((mSe,mV)=>{"use strict";var yDr=String.prototype.trim;mV.exports=yDr});var qV=s((dSe,yV)=>{"use strict";var dV=Y3(),qDr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,hV="\u180E";function bDr(){return dV.call(qDr)===""&&dV.call(hV)===hV}yV.exports=bDr});var wV=s((hSe,bV)=>{"use strict";var wDr=ft(),EDr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function NDr(r){return wDr(r,EDr,"$1")}bV.exports=NDr});var NV=s((ySe,EV)=>{"use strict";var SDr=Y3();function ODr(r){return SDr.call(r)}EV.exports=ODr});var pt=s((qSe,SV)=>{"use strict";var ADr=gV(),_Dr=qV(),TDr=wV(),IDr=NV(),$3;ADr&&_Dr()?$3=IDr:$3=TDr;SV.exports=$3});var AV=s((bSe,OV)=>{"use strict";var RDr=/(?:\s*-\s*)(?=\d+)(\d+)$/;OV.exports=RDr});var TV=s((wSe,_V)=>{"use strict";var LDr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;_V.exports=LDr});var LV=s((ESe,RV)=>{"use strict";var IV=z(),PDr=AV(),FDr=TV();function MDr(r,e,t,i){var n;if(r==="end")return e;if(n=r.match(PDr),n){if(r=e-parseInt(n[1],10),r<0){if(i)return-2;r=0}return r}return n=r.match(FDr),n?(r=parseFloat(n[1]),r<1?i?-2:-1:t&&e>0&&r!==1?IV((e-1)/r):IV(e/r)):-1}RV.exports=MDr});var FV=s((NSe,PV)=>{"use strict";var BDr=/\s*:\s*/;PV.exports=BDr});var BV=s((SSe,MV)=>{"use strict";var jDr=/^[-+]?[0-9]+$/;MV.exports=jDr});var kV=s((OSe,jV)=>{"use strict";var kDr=/^end/;jV.exports=kDr});var VV=s((ASe,CV)=>{"use strict";function CDr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}CV.exports=CDr});var GV=s((_Se,UV)=>{"use strict";function VDr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}UV.exports=VDr});var DV=s((TSe,xV)=>{"use strict";function UDr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}xV.exports=UDr});var JV=s((ISe,XV)=>{"use strict";var HV=Hi(),GDr=pt(),WV=LV(),xDr=FV(),Z3=BV(),zV=kV(),Wi=VV(),ni=GV(),DDr=DV();function HDr(r,e,t){var i,n,a;if(i=GDr(r).split(xDr),n=i.length,n<2||n>3)return Wi();if(n===3)if(a=i[2],a.length===0)i[2]=1;else{if(Z3.test(a)===!1)return Wi();if(a=parseInt(a,10),a===0)return DDr();i[2]=a}else i.push(1);if(a=i[0],a.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(zV.test(a)){if(a=WV(a,e,i[2]<0,t),a<0)return a===-2?ni():Wi();i[2]<0&&a>=e&&(a-=1),i[0]=a}else if(Z3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0){if(t)return ni();a=0}}else if(a>=e){if(t)return ni();i[2]<0?a=e-1:a=e}i[0]=a}else return Wi();if(a=i[1],a.length===0)i[2]<0?i[1]=null:i[1]=e;else if(zV.test(a)){if(a=WV(a,e,i[2]<0,t),a<0)return a===-2?ni():Wi();i[1]=a}else if(Z3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0)if(i[2]>0){if(t)return ni();a=0}else{if(t&&a<-1)return ni();a=null}}else if(a>e){if(t)return ni();a=e}i[1]=a}else return Wi();return e===0?new HV(0,0,i[2]):new HV(i[0],i[1],i[2])}XV.exports=HDr});var $V=s((RSe,YV)=>{"use strict";var WDr=JV();YV.exports=WDr});var QV=s((LSe,ZV)=>{"use strict";function zDr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}ZV.exports=zDr});var rU=s((PSe,KV)=>{"use strict";function XDr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}KV.exports=XDr});var tU=s((FSe,eU)=>{"use strict";function JDr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}eU.exports=JDr});var nU=s((MSe,iU)=>{"use strict";function YDr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}iU.exports=YDr});var sU=s((BSe,aU)=>{"use strict";var $Dr=/\s*,\s*/;aU.exports=$Dr});var oU=s((jSe,uU)=>{"use strict";var ZDr=/^[-+]?[0-9]+$/;uU.exports=ZDr});var cU=s((kSe,fU)=>{"use strict";var QDr=pt(),KDr=Hi(),rHr=x0(),eHr=$V(),tHr=QV(),iHr=rU(),nHr=tU(),vU=nU(),aHr=sU(),sHr=oU();function uHr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(o=e.length,i=QDr(r).split(aHr),v=i.length,a=!1,n=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(a)return tHr();for(a=!0,p=0;p<o-v+1;p++)n.push(new KDr(0,e[l],1)),l+=1;continue}if(u=e[l],sHr.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return vU()}else if(f>=u)return vU()}l+=1}else{if(f=eHr(f,u,t),f.code)return f;l+=1}n.push(f)}return n.length!==o?n.length<o?iHr():nHr():rHr.apply(null,n)}fU.exports=uHr});var pU=s((CSe,lU)=>{"use strict";var oHr=cU();lU.exports=oHr});var dU=s((VSe,mU)=>{"use strict";var vHr=$().isPrimitive,gU=pU(),fHr=q();function cHr(r,e,t){var i;if(!vHr(r))throw new TypeError(fHr('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=gU(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=gU(r,e,!1)}}return i}mU.exports=cHr});var yU=s((USe,hU)=>{"use strict";var lHr=dU();hU.exports=lHr});var bU=s((GSe,qU)=>{"use strict";var pHr=D0(),gHr=H0(),mHr=U3(),dHr=q(),hHr=aa(),yHr=ti();function qHr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=yHr(e),u=pHr(e,t)):(a=1,u=[0]),n=mHr(r,a),n===null)throw new TypeError(dHr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new hHr(r,n,e,u,gHr(e,u),t)}qU.exports=qHr});var EU=s((xSe,wU)=>{"use strict";var bHr=bU();wU.exports=bHr});var SU=s((DSe,NU)=>{"use strict";var Dr=rr(),wHr=BC(),EHr=aa(),NHr=WC(),SHr=W3(),OHr=ti(),AHr=lV(),_Hr=yU(),THr=D0(),IHr=D3(),RHr=H0(),LHr=X3(),PHr=EU();function FHr(r){return Dr(r,"iterRows",wHr),Dr(r,"ndarray",EHr),Dr(r,"ndarray2range",NHr),Dr(r,"nextCartesianIndex",SHr),Dr(r,"numel",OHr),Dr(r,"range2ndarray",AHr),Dr(r,"seq2multislice",_Hr),Dr(r,"shape2strides",THr),Dr(r,"slice",IHr),Dr(r,"strides2offset",RHr),Dr(r,"toArray",LHr),Dr(r,"zeros",PHr),r}NU.exports=FHr});var AU=s((HSe,OU)=>{"use strict";var MHr=Ze();function BHr(r,e,t,i){MHr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}OU.exports=BHr});var B=s((WSe,_U)=>{"use strict";var jHr=AU();_U.exports=jHr});var IU=s((zSe,TU)=>{"use strict";function kHr(r){return e;function e(){return r}}TU.exports=kHr});var _=s((XSe,RU)=>{"use strict";var CHr=IU();RU.exports=CHr});var PU=s((JSe,LU)=>{"use strict";var VHr=R();function UHr(r){return r===0&&1/r===VHr}LU.exports=UHr});var gt=s((YSe,FU)=>{"use strict";var GHr=PU();FU.exports=GHr});var jU=s(($Se,BU)=>{"use strict";var xHr=gt(),MU=E(),Q3=R();function DHr(r,e){return MU(r)||MU(e)?NaN:r===Q3||e===Q3?Q3:r===e&&r===0?xHr(r)?r:e:r>e?r:e}BU.exports=DHr});var K3=s((ZSe,kU)=>{"use strict";var HHr=jU();kU.exports=HHr});var UU=s((QSe,VU)=>{"use strict";var CU=65535;function WHr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&CU)>>>0,o=(e&CU)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}VU.exports=WHr});var xU=s((KSe,GU)=>{"use strict";var zHr=UU();GU.exports=zHr});var rv=s((rOe,DU)=>{"use strict";function XHr(r,e,t,i,n,a,u){var o,v,f,c,l,p,g;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,g=0;g<r;g++)f(v,p,c(o,l)),l+=t,p+=a;return e}DU.exports=XHr});var zU=s((eOe,WU)=>{"use strict";var HU=On(),JHr=rv(),ev=8;function YHr(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=HU(e),v=HU(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,JHr(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%ev,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<ev)return i;for(c=f;c<r;c+=ev)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}WU.exports=YHr});var YU=s((tOe,JU)=>{"use strict";var XU=On(),$Hr=rv(),oa=8;function ZHr(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=XU(e),c=XU(n),f.accessorProtocol||c.accessorProtocol)return $Hr(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%oa,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<oa)return n;for(p=l;p<r;p+=oa)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=oa,v+=oa;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}JU.exports=ZHr});var mt=s((iOe,ZU)=>{"use strict";var QHr=b(),$U=zU(),KHr=YU();QHr($U,"ndarray",KHr);ZU.exports=$U});var KU=s((nOe,QU)=>{"use strict";function rWr(){}QU.exports=rWr});var eG=s((aOe,rG)=>{"use strict";var eWr=KU();function tWr(){return eWr.name==="foo"}rG.exports=tWr});var iG=s((sOe,tG)=>{"use strict";var iWr=eG();tG.exports=iWr});var aG=s((uOe,nG)=>{"use strict";var nWr=I(),aWr=iG(),sWr=q(),uWr=Ao().REGEXP,oWr=aWr();function vWr(r){if(nWr(r)===!1)throw new TypeError(sWr("invalid argument. Must provide a function. Value: `%s`.",r));return oWr?r.name:uWr.exec(r.toString())[1]}nG.exports=vWr});var uG=s((oOe,sG)=>{"use strict";var fWr=aG();sG.exports=fWr});var vG=s((vOe,oG)=>{"use strict";var cWr=mi(),lWr=Kr(),pWr=gi(),gWr=pi(),mWr=Gt(),dWr=Ke(),hWr=pr(),yWr=Qr(),qWr=lr(),bWr=[qWr,yWr,dWr,hWr,gWr,mWr,cWr,lWr,pWr];oG.exports=bWr});var fG=s((fOe,wWr)=>{wWr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var dG=s((cOe,mG)=>{"use strict";var EWr=pe(),NWr=uG(),pG=Xt(),SWr=Po(),OWr=lr(),cG=vG(),lG=fG(),X0=SWr()?pG(OWr):gG;X0=NWr(X0)==="TypedArray"?X0:gG;function gG(){}function AWr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof X0)return!0;for(t=0;t<cG.length;t++)if(r instanceof cG[t])return!0;for(;r;){for(e=EWr(r),t=0;t<lG.length;t++)if(lG[t]===e)return!0;r=pG(r)}return!1}mG.exports=AWr});var yG=s((lOe,hG)=>{"use strict";var _Wr=dG();hG.exports=_Wr});var bG=s((pOe,qG)=>{"use strict";var TWr=Si(),IWr=Ti(),RWr=[IWr,TWr];qG.exports=RWr});var wG=s((gOe,LWr)=>{LWr.exports=["Complex64Array","Complex128Array"]});var OG=s((mOe,SG)=>{"use strict";var PWr=pe(),FWr=Xt(),EG=bG(),NG=wG();function MWr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<EG.length;t++)if(r instanceof EG[t])return!0;for(;r;){for(e=PWr(r),t=0;t<NG.length;t++)if(NG[t]===e)return!0;r=FWr(r)}return!1}SG.exports=MWr});var _G=s((dOe,AG)=>{"use strict";var BWr=OG();AG.exports=BWr});var IG=s((hOe,TG)=>{"use strict";var jWr=q();function kWr(r,e){if(typeof e!="function")throw new TypeError(jWr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}TG.exports=kWr});var LG=s((yOe,RG)=>{"use strict";var CWr=IG();RG.exports=CWr});var FG=s((qOe,PG)=>{"use strict";var VWr=mi(),UWr=Kr(),GWr=gi(),xWr=pi(),DWr=Gt(),HWr=Ke(),WWr=pr(),zWr=Qr(),XWr=lr(),JWr=Si(),YWr=Ti(),$Wr=[[XWr,"Float64Array"],[zWr,"Float32Array"],[HWr,"Int32Array"],[WWr,"Uint32Array"],[xWr,"Int16Array"],[DWr,"Uint16Array"],[VWr,"Int8Array"],[UWr,"Uint8Array"],[GWr,"Uint8ClampedArray"],[JWr,"Complex64Array"],[YWr,"Complex128Array"]];PG.exports=$Wr});var BG=s((bOe,MG)=>{"use strict";var ZWr=LG(),QWr=pe(),KWr=Xt(),zi=FG();function rzr(r){var e,t;for(t=0;t<zi.length;t++)if(ZWr(r,zi[t][0]))return zi[t][1];for(;r;){for(e=QWr(r),t=0;t<zi.length;t++)if(e===zi[t][1])return zi[t][1];r=KWr(r)}}MG.exports=rzr});var kG=s((wOe,jG)=>{"use strict";var ezr=yG(),tzr=_G(),izr=yi(),nzr=qi(),azr=q(),szr=BG();function uzr(r){var e,t,i;if(ezr(r))e=r;else if(tzr(r))r.BYTES_PER_ELEMENT===8?e=izr(r,0):e=nzr(r,0);else throw new TypeError(azr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:szr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}jG.exports=uzr});var j=s((EOe,CG)=>{"use strict";var ozr=kG();CG.exports=ozr});var tv=s((NOe,VG)=>{"use strict";var vzr=ci(),fzr=z(),czr=vzr-1;function lzr(){var r=fzr(1+czr*Math.random());return r>>>0}VG.exports=lzr});var fv=s((SOe,$G)=>{"use strict";var Ee=b(),dt=L(),UG=B(),iv=O(),pzr=T(),gzr=Br(),GG=ge(),mzr=cr().isPrimitive,xG=te().isPrimitive,XG=Ui(),JG=ci(),Sr=pr(),dzr=K3(),vv=xU(),Xi=mt(),hzr=j(),Ar=q(),DG=tv(),ur=624,nv=397,HG=JG>>>0,yzr=19650218>>>0,av=2147483648>>>0,sv=2147483647>>>0,qzr=1812433253>>>0,bzr=1664525>>>0,wzr=1566083941>>>0,Ezr=2636928640>>>0,Nzr=4022730752>>>0,Szr=2567483615>>>0,uv=[0>>>0,Szr>>>0],YG=1/(XG+1),Ozr=67108864>>>0,Azr=2147483648>>>0,ov=1>>>0,_zr=XG*YG,J0=1,Y0=3,ht=2,yt=ur+3,Or=ur+5,va=ur+6;function WG(r,e){var t;return e?t="option":t="argument",r.length<va+1?new RangeError(Ar("invalid %s. `state` array has insufficient length.",t)):r[0]!==J0?new RangeError(Ar("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,J0,r[0])):r[1]!==Y0?new RangeError(Ar("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Y0,r[1])):r[ht]!==ur?new RangeError(Ar("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[ht])):r[yt]!==1?new RangeError(Ar("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[yt])):r[Or]!==r.length-va?new RangeError(Ar("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-va,r[Or])):null}function zG(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=vv(t,qzr)+i>>>0;return r}function Tzr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=dzr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=vv(n,bzr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=vv(n,wzr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=Azr,r}function Izr(r){var e,t,i,n;for(n=ur-nv,t=0;t<n;t++)e=r[t]&av|r[t+1]&sv,r[t]=r[t+nv]^e>>>1^uv[e&ov];for(i=ur-1;t<i;t++)e=r[t]&av|r[t+1]&sv,r[t]=r[t-n]^e>>>1^uv[e&ov];return e=r[i]&av|r[0]&sv,r[i]=r[nv-1]^e>>>1^uv[e&ov],r}function Rzr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!pzr(r))throw new TypeError(Ar("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iv(r,"copy")&&(i.copy=r.copy,!mzr(r.copy)))throw new TypeError(Ar("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(iv(r,"state")){if(t=r.state,i.state=!0,!GG(t))throw new TypeError(Ar("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=WG(t,!0),u)throw u;i.copy===!1?e=t:(e=new Sr(t.length),Xi(t.length,t,1,e,1)),t=new Sr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Sr(e.buffer,e.byteOffset+(Or+1)*e.BYTES_PER_ELEMENT,t[Or])}if(n===void 0)if(iv(r,"seed"))if(n=r.seed,i.seed=!0,xG(n)){if(n>HG)throw new RangeError(Ar("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(gzr(n)===!1||n.length<1)throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!xG(n))throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>HG)throw new RangeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new Sr(va+a),e[0]=J0,e[1]=Y0,e[ht]=ur,e[yt]=1,e[yt+1]=ur,e[Or]=a,Xi.ndarray(a,n,1,0,e,1,Or+1),t=new Sr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Sr(e.buffer,e.byteOffset+(Or+1)*e.BYTES_PER_ELEMENT,a),t=zG(t,ur,yzr),t=Tzr(t,ur,n,a)}else n=DG()>>>0}else n=DG()>>>0;return t===void 0&&(e=new Sr(va+1),e[0]=J0,e[1]=Y0,e[ht]=ur,e[yt]=1,e[yt+1]=ur,e[Or]=1,e[Or+1]=n,t=new Sr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Sr(e.buffer,e.byteOffset+(Or+1)*e.BYTES_PER_ELEMENT,1),t=zG(t,ur,n)),Ee(h,"NAME","mt19937"),dt(h,"seed",o),dt(h,"seedLength",v),UG(h,"state",l,p),dt(h,"stateLength",f),dt(h,"byteLength",c),Ee(h,"toJSON",g),Ee(h,"MIN",0),Ee(h,"MAX",JG),Ee(h,"normalized",d),Ee(d,"NAME",h.NAME),dt(d,"seed",o),dt(d,"seedLength",v),UG(d,"state",l,p),dt(d,"stateLength",f),dt(d,"byteLength",c),Ee(d,"toJSON",g),Ee(d,"MIN",0),Ee(d,"MAX",_zr),h;function o(){var m=e[Or];return Xi(m,n,1,new Sr(m),1)}function v(){return e[Or]}function f(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Xi(m,e,1,new Sr(m),1)}function p(m){var y;if(!GG(m))throw new TypeError(Ar("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(y=WG(m,!1),y)throw y;i.copy===!1?i.state&&m.length===e.length?Xi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Sr(m.length)),Xi(m.length,m,1,e,1)),t=new Sr(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Sr(e.buffer,e.byteOffset+(Or+1)*e.BYTES_PER_ELEMENT,e[Or])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=hzr(e),m.params=[],m}function h(){var m,y;return y=e[yt+1],y>=ur&&(t=Izr(t),y=0),m=t[y],e[yt+1]=y+1,m^=m>>>11,m^=m<<7&Ezr,m^=m<<15&Nzr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,y=h()>>>6;return(m*Ozr+y)*YG}}$G.exports=Rzr});var QG=s((OOe,ZG)=>{"use strict";var Lzr=fv(),Pzr=tv(),Fzr=Lzr({seed:Pzr()});ZG.exports=Fzr});var J=s((AOe,rx)=>{"use strict";var Mzr=b(),KG=QG(),Bzr=fv();Mzr(KG,"factory",Bzr);rx.exports=KG});var nx=s((_Oe,ix)=>{"use strict";var ex=M().isPrimitive,cv=q(),tx=vr();function jzr(r,e){return!ex(r)||tx(r)?new TypeError(cv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!ex(e)||tx(e)?new TypeError(cv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(cv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}ix.exports=jzr});var sx=s((TOe,ax)=>{"use strict";var kzr=D(),Czr=ri(),Vzr=N0();function Uzr(r,e,t){return e+kzr(Czr(Vzr*r()),2)*(t-e)}ax.exports=Uzr});var lv=s((IOe,gx)=>{"use strict";var Ne=b(),$0=L(),ux=B(),ox=T(),vx=I(),fx=O(),cx=_(),Gzr=C(),Z0=J().factory,lx=E(),xzr=j(),Q0=q(),Dzr=nx(),px=sx();function Hzr(){var r,e,t,i,n,a;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(r=arguments[0],!ox(r))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fx(r,"prng")){if(!vx(r.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else{if(n=arguments[0],a=arguments[1],i=Dzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ox(r))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fx(r,"prng")){if(!vx(r.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else e=Z0()}return n===void 0?t=h:t=g,Ne(t,"NAME","arcsine"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),ux(t,"state",cx(null),Gzr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",cx(null)),Ne(t,"PRNG",e)):($0(t,"seed",u),$0(t,"seedLength",o),ux(t,"state",c,l),$0(t,"stateLength",v),$0(t,"byteLength",f),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=xzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return px(e,n,a)}function h(d,m){return lx(d)||lx(m)||d>=m?NaN:px(e,d,m)}}gx.exports=Hzr});var dx=s((ROe,mx)=>{"use strict";var Wzr=lv(),zzr=Wzr();mx.exports=zzr});var qx=s((LOe,yx)=>{"use strict";var Xzr=b(),hx=dx(),Jzr=lv();Xzr(hx,"factory",Jzr);yx.exports=hx});var pv=s((POe,Ox)=>{"use strict";var Se=b(),K0=L(),bx=B(),wx=T(),Yzr=_n().isPrimitive,Ex=I(),Nx=O(),Sx=_(),$zr=C(),rs=J().factory,Zzr=E(),Qzr=j(),es=q();function Kzr(){var r,e,t,i;if(arguments.length===0)e=rs();else if(arguments.length===1&&wx(arguments[0]))if(r=arguments[0],Nx(r,"prng")){if(!Ex(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r);else{if(i=arguments[0],!Yzr(i))throw new TypeError(es("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!wx(r))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Nx(r,"prng")){if(!Ex(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r)}else e=rs()}return i===void 0?t=p:t=l,Se(t,"NAME","bernoulli"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),bx(t,"state",Sx(null),$zr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",Sx(null)),Se(t,"PRNG",e)):(K0(t,"seed",n),K0(t,"seedLength",a),bx(t,"state",v,f),K0(t,"stateLength",u),K0(t,"byteLength",o),Se(t,"toJSON",c),Se(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Qzr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return Zzr(g)||g<0||g>1?NaN:e()<=g?1:0}}Ox.exports=Kzr});var _x=s((FOe,Ax)=>{"use strict";var rXr=pv(),eXr=rXr();Ax.exports=eXr});var Rx=s((MOe,Ix)=>{"use strict";var tXr=b(),Tx=_x(),iXr=pv();tXr(Tx,"factory",iXr);Ix.exports=Tx});var Mx=s((BOe,Fx)=>{"use strict";var nXr=U(),Lx=sr(),aXr=P(),Px=.00991256303526217;function sXr(r,e){var t,i,n;for(i=Lx(-.5*e*e),t=[],t.push(Px/i),t.push(e),n=2;n<r;n++)t[n]=nXr(-2*aXr(Px/t[n-1]+i)),i=Lx(-.5*t[n]*t[n]);return t.push(0),t}Fx.exports=sXr});var jx=s((jOe,Bx)=>{"use strict";function uXr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}Bx.exports=uXr});var Vx=s((kOe,Cx)=>{"use strict";var kx=P();function oXr(r,e,t){var i,n;do i=kx(r())/e,n=kx(r());while(-2*n<i*i);return t?i-e:e-i}Cx.exports=oXr});var Dx=s((COe,xx)=>{"use strict";var vXr=Y(),Ux=sr(),fXr=Mx(),cXr=jx(),lXr=Vx(),pXr=128,Gx=3.442619855899,ai=fXr(pXr,Gx),gXr=cXr(ai),mXr=127;function dXr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&mXr,vXr(o)<gXr[v])return o*ai[v];if(v===0)return lXr(r,Gx,o<0);if(u=o*ai[v],a=u*u,f=v+1,i=Ux(-.5*(ai[v]*ai[v]-a)),n=Ux(-.5*(ai[f]*ai[f]-a)),n+r()*(i-n)<1)return u}}}xx.exports=dXr});var mv=s((VOe,zx)=>{"use strict";var qt=b(),ts=L(),Hx=B(),hXr=I(),yXr=T(),qXr=cr().isPrimitive,is=O(),bXr=ge(),gv=J().factory,Wx=_(),wXr=C(),EXr=z(),NXr=ci(),SXr=j(),fa=q(),OXr=Dx();function AXr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!yXr(r))throw new TypeError(fa("invalid argument. Must provide an object. Value: `%s`.",r));if(is(r,"copy")&&(n.copy=r.copy,!qXr(r.copy)))throw new TypeError(fa("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(is(r,"prng")){if(!hXr(r.prng))throw new TypeError(fa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(is(r,"state")){if(n.state=r.state,!bXr(r.state))throw new TypeError(fa("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(is(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(fa("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=gv(n),e=t.normalized):(t=gv({seed:EXr(1+NXr*e()),copy:n.copy}),n.seed=null):(t=gv(n),e=t.normalized),i=OXr(e,t),qt(i,"NAME","improved-ziggurat"),n.seed===null?(qt(i,"seed",null),qt(i,"seedLength",null)):(ts(i,"seed",a),ts(i,"seedLength",u)),r&&r.prng?(Hx(i,"state",Wx(null),wXr),qt(i,"stateLength",null),qt(i,"byteLength",null),qt(i,"toJSON",Wx(null))):(Hx(i,"state",f,c),ts(i,"stateLength",o),ts(i,"byteLength",v),qt(i,"toJSON",l)),qt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=SXr(t.state),p.params=[],p}}zx.exports=AXr});var Jx=s((UOe,Xx)=>{"use strict";var _Xr=mv(),TXr=_Xr();Xx.exports=TXr});var bt=s((GOe,$x)=>{"use strict";var IXr=b(),Yx=Jx(),RXr=mv();IXr(Yx,"factory",RXr);$x.exports=Yx});var Qx=s((xOe,Zx)=>{"use strict";var LXr=I(),PXr=LXr(Object.assign);Zx.exports=PXr});var rD=s((DOe,Kx)=>{"use strict";var FXr=Object.assign;Kx.exports=FXr});var tD=s((HOe,eD)=>{"use strict";var MXr=typeof Object.getOwnPropertySymbols<"u";eD.exports=MXr});var aD=s((WOe,nD)=>{"use strict";var iD=Ri(),BXr=iD.getOwnPropertySymbols;function jXr(r){return BXr(iD(r))}nD.exports=jXr});var uD=s((zOe,sD)=>{"use strict";function kXr(){return[]}sD.exports=kXr});var vD=s((XOe,oD)=>{"use strict";var CXr=tD(),VXr=aD(),UXr=uD(),dv;CXr?dv=VXr:dv=UXr;oD.exports=dv});var cD=s((JOe,fD)=>{"use strict";var GXr=Fi(),xXr=vD(),DXr=In();function HXr(r){var e,t,i;for(e=GXr(r),t=xXr(r),i=0;i<t.length;i++)DXr(r,t[i])&&e.push(t[i]);return e}fD.exports=HXr});var pD=s((YOe,lD)=>{"use strict";var WXr=cD();lD.exports=WXr});var dD=s(($Oe,mD)=>{"use strict";var zXr=pD(),gD=Ri(),XXr=q();function JXr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(XXr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=gD(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=zXr(gD(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}mD.exports=JXr});var ca=s((ZOe,hD)=>{"use strict";var YXr=Qx(),$Xr=rD(),ZXr=dD(),hv;YXr?hv=$Xr:hv=ZXr;hD.exports=hv});var wD=s((QOe,bD)=>{"use strict";var yD=W().isPrimitive,qD=q();function QXr(r,e){return yD(r)?yD(e)?null:new TypeError(qD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(qD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}bD.exports=QXr});var AD=s((KOe,OD)=>{"use strict";var ED=P(),ND=U(),KXr=D(),SD=1/3;function rJr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-SD,o=1/ND(9*v),c=KXr(r(),1/t)):(v=t-SD,o=1/ND(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+ED(p)),l=r(),(l<a||ED(l)<u)&&(i=!1)}return v*p*c}OD.exports=rJr});var ID=s((rAe,TD)=>{"use strict";var yv=D(),_D=P();function eJr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=yv(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=yv(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*yv(n/(8*t-8),2),v<c&&(c=a*_D(4*f*(1-f)),c+=u*u/2,c>=_D(v)&&(i=!1))));return f}TD.exports=eJr});var LD=s((eAe,RD)=>{"use strict";var tJr=D(),ns=P();function iJr(r,e,t,i){var n,a,u,o,v,f,c,l,p,g,h;for(o=t-1,v=i-1,f=o+v,c=f*ns(f),u=o/f,n=.5/tJr(f,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*ns(g/o),h+=v*ns((1-g)/v),h+=c+.5*l*l,h>=ns(p)&&(a=!1));return g}RD.exports=iJr});var MD=s((tAe,FD)=>{"use strict";var qv=sr(),PD=D(),bv=P();function nJr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=PD(u,1/e),f=PD(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=bv(u)/e,n=bv(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),qv(i-bv(qv(i)+qv(n))))}FD.exports=nJr});var kD=s((iAe,jD)=>{"use strict";var BD=AD(),aJr=ID(),sJr=LD(),uJr=MD();function oJr(r,e,t,i){var n,a;return t===i&&t>1.5?aJr(r,e,t):t>1&&i>1?sJr(r,e,t,i):t<1&&i<1?uJr(r,t,i):(n=BD(r,e,t),a=BD(r,e,i),n/(n+a))}jD.exports=oJr});var Sv=s((nAe,XD)=>{"use strict";var Oe=b(),as=L(),CD=B(),VD=T(),UD=cr().isPrimitive,GD=I(),Ji=O(),xD=_(),vJr=C(),DD=bt().factory,ss=J().factory,HD=E(),wv=mt(),Ev=pr(),Nv=ge(),WD=ca(),fJr=j(),Ae=q(),cJr=wD(),zD=kD();function lJr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=ss(n);else if(arguments.length===1){if(n=arguments[0],!VD(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ji(n,"copy")&&!UD(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ji(n,"prng")){if(!GD(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ji(n,"state")&&!Nv(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=WD({},n),n.copy===!1?o=!1:n.state&&(n.state=wv(n.state.length,n.state,1,new Ev(n.state.length),1)),n.copy=!1,a=ss(n)}}else{if(t=arguments[0],i=arguments[1],v=cJr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!VD(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ji(n,"copy")&&!UD(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ji(n,"prng")){if(!GD(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ji(n,"state")&&!Nv(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=WD({},n),n.copy===!1?o=!1:n.state&&(n.state=wv(n.state.length,n.state,1,new Ev(n.state.length),1)),n.copy=!1,a=ss(n)}}else n={copy:!1},a=ss(n)}return n&&n.prng?e=DD({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=DD({state:r,copy:!1})),t===void 0?u=y:u=m,Oe(u,"NAME","beta"),n&&n.prng?(Oe(u,"seed",null),Oe(u,"seedLength",null),CD(u,"state",xD(null),vJr),Oe(u,"stateLength",null),Oe(u,"byteLength",null),Oe(u,"toJSON",xD(null)),Oe(u,"PRNG",a)):(as(u,"seed",f),as(u,"seedLength",c),CD(u,"state",g,h),as(u,"stateLength",l),as(u,"byteLength",p),Oe(u,"toJSON",d),Oe(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!Nv(N))throw new TypeError(Ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=wv(N.length,N,1,new Ev(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=fJr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return zD(a,e,t,i)}function y(N,S){return HD(N)||HD(S)||N<=0||S<=0?NaN:zD(a,e,N,S)}}XD.exports=lJr});var YD=s((aAe,JD)=>{"use strict";var pJr=Sv(),gJr=pJr();JD.exports=gJr});var QD=s((sAe,ZD)=>{"use strict";var mJr=b(),$D=YD(),dJr=Sv();mJr($D,"factory",dJr);ZD.exports=$D});var tH=s((uAe,eH)=>{"use strict";var KD=W().isPrimitive,rH=q();function hJr(r,e){return KD(r)?KD(e)?null:new TypeError(rH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(rH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}eH.exports=hJr});var aH=s((oAe,nH)=>{"use strict";var iH=P();function yJr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+iH(l)),c=r(),(c<o||iH(c)<v)&&(a=!1)}return 1/t*i*l}nH.exports=yJr});var Iv=s((vAe,mH)=>{"use strict";var _e=b(),us=L(),sH=B(),uH=T(),Ov=ge(),oH=cr().isPrimitive,vH=I(),Yi=O(),fH=_(),qJr=C(),cH=bt().factory,os=J().factory,lH=E(),Av=U(),pH=D(),_v=mt(),Tv=pr(),bJr=j(),gH=ca(),Te=q(),wJr=tH(),vs=aH(),fs=1/3;function EJr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=os(n);else if(arguments.length===1){if(n=arguments[0],!uH(n))throw new TypeError(Te("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Yi(n,"copy")&&!oH(n.copy))throw new TypeError(Te("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Yi(n,"prng")){if(!vH(n.prng))throw new TypeError(Te("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Yi(n,"state")&&!Ov(n.state))throw new TypeError(Te("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=gH({},n),n.copy===!1?o=!1:n.state&&(n.state=_v(n.state.length,n.state,1,new Tv(n.state.length),1)),n.copy=!1,a=os(n)}}else{if(e=arguments[0],i=arguments[1],v=wJr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!uH(n))throw new TypeError(Te("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Yi(n,"copy")&&!oH(n.copy))throw new TypeError(Te("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Yi(n,"prng")){if(!vH(n.prng))throw new TypeError(Te("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Yi(n,"state")&&!Ov(n.state))throw new TypeError(Te("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=gH({},n),n.copy===!1?o=!1:n.state&&(n.state=_v(n.state.length,n.state,1,new Tv(n.state.length),1)),n.copy=!1,a=os(n)}}else n={copy:!1},a=os(n)}return n&&n.prng?t=cH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=cH({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-fs):(u=S,c=e+1-fs),f=1/Av(9*c)),_e(u,"NAME","gamma"),n&&n.prng?(_e(u,"seed",null),_e(u,"seedLength",null),sH(u,"state",fH(null),qJr),_e(u,"stateLength",null),_e(u,"byteLength",null),_e(u,"toJSON",fH(null)),_e(u,"PRNG",a)):(us(u,"seed",l),us(u,"seedLength",p),sH(u,"state",d,m),us(u,"stateLength",g),us(u,"byteLength",h),_e(u,"toJSON",y),_e(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(A){if(!Ov(A))throw new TypeError(Te("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));o&&(A=_v(A.length,A,1,new Tv(A.length),1)),a.state=A}function y(){var A={};return A.type="PRNG",A.name=u.NAME,A.state=bJr(a.state),e===void 0?A.params=[]:A.params=[e,i],A}function N(){return vs(a,t,i,c,f)}function S(){return vs(a,t,i,c,f)*pH(a(),1/e)}function F(A,H){var K,G;return lH(A)||lH(H)||A<=0||H<=0?NaN:A<1?(G=A+1-fs,K=1/Av(9*G),vs(a,t,H,G,K)*pH(a(),1/A)):(G=A-fs,K=1/Av(9*G),vs(a,t,H,G,K))}}mH.exports=EJr});var hH=s((fAe,dH)=>{"use strict";var NJr=Iv(),SJr=NJr();dH.exports=SJr});var $i=s((cAe,qH)=>{"use strict";var OJr=b(),yH=hH(),AJr=Iv();OJr(yH,"factory",AJr);qH.exports=yH});var NH=s((lAe,EH)=>{"use strict";var bH=W().isPrimitive,wH=q();function _Jr(r,e){return bH(r)?bH(e)?null:new TypeError(wH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}EH.exports=_Jr});var OH=s((pAe,SH)=>{"use strict";function TJr(r,e,t){return r(e,1)/r(t,1)}SH.exports=TJr});var Rv=s((gAe,PH)=>{"use strict";var wt=b(),cs=L(),AH=B(),_H=T(),TH=_(),IJr=C(),ls=$i().factory,IH=E(),RJr=j(),RH=q(),LJr=NH(),LH=OH();function PJr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=ls();else if(arguments.length===1){if(i=arguments[0],!_H(i))throw new TypeError(RH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=ls(i)}else{if(e=arguments[0],t=arguments[1],u=LJr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!_H(i))throw new TypeError(RH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=ls(i)}else r=ls()}return e===void 0?a=d:a=h,n=r.PRNG,wt(a,"NAME","betaprime"),i&&i.prng?(wt(a,"seed",null),wt(a,"seedLength",null),AH(a,"state",TH(null),IJr),wt(a,"stateLength",null),wt(a,"byteLength",null),wt(a,"toJSON",TH(null))):(cs(a,"seed",o),cs(a,"seedLength",v),AH(a,"state",l,p),cs(a,"stateLength",f),cs(a,"byteLength",c),wt(a,"toJSON",g)),wt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=RJr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return LH(r,e,t)}function d(m,y){return IH(m)||IH(y)||m<=0||y<=0?NaN:LH(r,m,y)}}PH.exports=PJr});var MH=s((mAe,FH)=>{"use strict";var FJr=Rv(),MJr=FJr();FH.exports=MJr});var kH=s((dAe,jH)=>{"use strict";var BJr=b(),BH=MH(),jJr=Rv();BJr(BH,"factory",jJr);jH.exports=BH});var VH=s((hAe,CH)=>{"use strict";var kJr=z();function CJr(r){return kJr(r)===r&&r>0}CH.exports=CJr});var Lv=s((yAe,UH)=>{"use strict";var VJr=VH();UH.exports=VJr});var xH=s((qAe,GH)=>{"use strict";function UJr(r){return r>=0&&r<=1}GH.exports=UJr});var HH=s((bAe,DH)=>{"use strict";var GJr=xH();DH.exports=GJr});var XH=s((wAe,zH)=>{"use strict";var xJr=te().isPrimitive,DJr=_n().isPrimitive,WH=q();function HJr(r,e){return xJr(r)?DJr(e)?null:new TypeError(WH("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(WH("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}zH.exports=HJr});var YH=s((EAe,JH)=>{"use strict";function WJr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}JH.exports=WJr});var ZH=s((NAe,$H)=>{"use strict";var zJr=E();function XJr(r){return r===0||zJr(r)?r:r<0?-1:1}$H.exports=XJr});var ps=s((SAe,QH)=>{"use strict";var JJr=ZH();QH.exports=JJr});var rW=s((OAe,KH)=>{"use strict";var YJr=D(),$Jr=1/12,ZJr=1/360,QJr=1/1260;function KJr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=YJr(r,2),($Jr-(ZJr-QJr/e)/e)/r}}KH.exports=KJr});var tW=s((AAe,eW)=>{"use strict";var Pv=z(),rYr=ps(),eYr=U(),Fv=Y(),gs=P(),ms=rW(),tYr=1/6;function iYr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,S,F,A,H,K,G,Fr,Mr,or,Ct;for(H=Pv((e+1)*t),f=e-H+1,K=1-t,G=t/K,c=(e+1)*G,u=e*t*K,a=eYr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,y=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,S=(H+.5)*gs((H+1)/(G*f)),S+=ms(H)+ms(e-H);;){if(or=r(),or<=n)return Mr=or/h-.43,G=Mr*(2*d/(.5-Fv(Mr))+m)+y,Pv(G);if(or>=h?Mr=r()-.5:(Mr=or/h-.93,Mr=rYr(Mr)*.5-Mr,or=h*r()),l=.5-Fv(Mr),A=Pv(Mr*(2*d/l+m)+y),!(A<0||A>e))if(or=or*i/(d/(l*l)+m),p=Fv(A-H),p>15){if(or=gs(or),o=p/u,v=(p/3+.625)*p,v+=tYr,v/=u,o*=v+.5,Fr=-(p*p)/(2*u),or<Fr-o||or<=Fr+o&&(g=e-A+1,Ct=S+(e+1)*gs(f/g),Ct+=(A+.5)*gs(g*G/(A+1)),Ct+=-(ms(A)+ms(e-A)),or<=Ct))return A}else{if(N=1,H<A)for(F=H;F<=A;F++)N*=c/F-G;else if(H>A)for(F=A;F<=H;F++)or*=c/F-G;if(or<=N)return A}}}eW.exports=iYr});var aW=s((_Ae,nW)=>{"use strict";var nYr=YH(),aYr=tW();function iW(r,e,t){return t>.5?e-iW(r,e,1-t):e*t<10?nYr(r,e,t):aYr(r,e,t)}nW.exports=iW});var Mv=s((TAe,pW)=>{"use strict";var Ie=b(),ds=L(),sW=B(),uW=T(),oW=I(),vW=O(),fW=_(),sYr=C(),cW=E(),uYr=Lv(),oYr=HH(),hs=J().factory,vYr=j(),ys=q(),fYr=XH(),lW=aW();function cYr(){var r,e,t,i,n,a;if(arguments.length===0)e=hs();else if(arguments.length===1){if(r=arguments[0],!uW(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vW(r,"prng")){if(!oW(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else{if(n=arguments[0],a=arguments[1],i=fYr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!uW(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vW(r,"prng")){if(!oW(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else e=hs()}return n===void 0?t=h:t=g,Ie(t,"NAME","binomial"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),sW(t,"state",fW(null),sYr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",fW(null)),Ie(t,"PRNG",e)):(ds(t,"seed",u),ds(t,"seedLength",o),sW(t,"state",c,l),ds(t,"stateLength",v),ds(t,"byteLength",f),Ie(t,"toJSON",p),Ie(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=vYr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return lW(e,n,a)}function h(d,m){return cW(d)||cW(m)||!uYr(d)||!oYr(m)?NaN:lW(e,d,m)}}pW.exports=cYr});var mW=s((IAe,gW)=>{"use strict";var lYr=Mv(),pYr=lYr();gW.exports=pYr});var yW=s((RAe,hW)=>{"use strict";var gYr=b(),dW=mW(),mYr=Mv();gYr(dW,"factory",mYr);hW.exports=dW});var bW=s((LAe,qW)=>{"use strict";var dYr=U(),hYr=P(),yYr=ri(),qYr=Kt(),bYr=vt();function wYr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=dYr(-2*hYr(n)),o=bYr*a,t=u*qYr(o),e=!1,u*yYr(o)}return e=!0,t}}qW.exports=wYr});var EW=s((PAe,wW)=>{"use strict";var EYr=U(),NYr=P(),SYr=Kt(),OYr=Vr(),AYr=SYr(OYr);function _Yr(r){var e=EYr(-2*NYr(r));return e*AYr}wW.exports=_Yr});var SW=s((FAe,NW)=>{"use strict";var TYr=U(),IYr=P(),RYr=Kt(),LYr=vt();function PYr(r){var e=TYr(-2*IYr(r)),t=LYr*r;return e*RYr(t)}NW.exports=PYr});var Bv=s((MAe,TW)=>{"use strict";var Hr=b(),qs=L(),OW=B(),FYr=T(),MYr=I(),BYr=cr().isPrimitive,la=O(),jYr=ge(),AW=J().factory,_W=_(),kYr=C(),CYr=j(),pa=q(),VYr=bW(),UYr=EW(),GYr=SW();function xYr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!FYr(r))throw new TypeError(pa("invalid argument. Must provide an object. Value: `%s`.",r));if(la(r,"copy")&&(n.copy=r.copy,!BYr(r.copy)))throw new TypeError(pa("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(la(r,"prng")){if(!MYr(r.prng))throw new TypeError(pa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(la(r,"state")){if(n.state=r.state,!jYr(r.state))throw new TypeError(pa("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(la(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(pa("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=AW(n),e=i.normalized):n.seed=null:(i=AW(n),e=i.normalized),t=VYr(e),Hr(t,"NAME","box-muller"),n.seed===null?(Hr(t,"seed",null),Hr(t,"seedLength",null)):(qs(t,"seed",a),qs(t,"seedLength",u)),r&&r.prng?(OW(t,"state",_W(null),kYr),Hr(t,"stateLength",null),Hr(t,"byteLength",null),Hr(t,"toJSON",_W(null))):(OW(t,"state",f,c),qs(t,"stateLength",o),qs(t,"byteLength",v),Hr(t,"toJSON",l)),Hr(t,"PRNG",e),la(e,"MIN")?(Hr(t,"MIN",UYr(e.MIN)),Hr(t,"MAX",GYr(e.MIN))):(Hr(t,"MIN",null),Hr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=CYr(i.state),p.params=[],p}}TW.exports=xYr});var RW=s((BAe,IW)=>{"use strict";var DYr=Bv(),HYr=DYr();IW.exports=HYr});var FW=s((jAe,PW)=>{"use strict";var WYr=b(),LW=RW(),zYr=Bv();WYr(LW,"factory",zYr);PW.exports=LW});var jW=s((kAe,BW)=>{"use strict";var XYr=M().isPrimitive,JYr=W().isPrimitive,MW=q(),YYr=vr();function $Yr(r,e){return!XYr(r)||YYr(r)?new TypeError(MW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):JYr(e)?null:new TypeError(MW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}BW.exports=$Yr});var CW=s((CAe,kW)=>{"use strict";function ZYr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}kW.exports=ZYr});var UW=s((VAe,VW)=>{"use strict";function QYr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}VW.exports=QYr});var DW=s((UAe,xW)=>{"use strict";var KYr=ar(),GW=de(),r$r=CW(),e$r=UW(),t$r=.7853981633974483,i$r=3061616997868383e-32,n$r=.3333333333333341,a$r=2147483647;function s$r(r,e,t){var i,n,a,u,o,v,f,c,l;return i=KYr(r),n=i&a$r|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=t$r-r,c=i$r-e,r=l+c,e=0),l=r*r,c=l*l,u=r$r(c),f=l*e$r(c),o=l*r,u=e+l*(o*(u+f)+e),u+=n$r*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=GW(c,0),f=u-(l-r),a=-1/c,v=GW(a,0),o=1+v*l,v+a*(o+v*f))}xW.exports=s$r});var WW=s((GAe,HW)=>{"use strict";var u$r=DW();HW.exports=u$r});var JW=s((xAe,XW)=>{"use strict";var o$r=ar(),zW=WW(),v$r=Dn(),jv=[0,0],f$r=2147483647,c$r=1072243195,l$r=2146435072,p$r=1044381696;function g$r(r){var e,t;return e=o$r(r),e&=f$r,e<=c$r?e<p$r?r:zW(r,0,1):e>=l$r?NaN:(t=v$r(r,jv),zW(jv[0],jv[1],1-((t&1)<<1)))}XW.exports=g$r});var kv=s((DAe,YW)=>{"use strict";var m$r=JW();YW.exports=m$r});var ZW=s((HAe,$W)=>{"use strict";var d$r=kv(),h$r=Vr();function y$r(r,e,t){return e+t*d$r(h$r*(r()-.5))}$W.exports=y$r});var Cv=s((WAe,az)=>{"use strict";var Et=b(),bs=L(),QW=B(),KW=T(),rz=I(),ez=O(),tz=_(),q$r=C(),iz=E(),Zi=bt().factory,b$r=j(),ws=q(),w$r=jW(),nz=ZW();function E$r(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zi();else if(arguments.length===1){if(t=arguments[0],!KW(t))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ez(t,"prng")){if(!rz(t.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else{if(u=arguments[0],r=arguments[1],a=w$r(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!KW(t))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ez(t,"prng")){if(!rz(t.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else e=Zi()}return u===void 0?n=d:n=h,i=e.PRNG,Et(n,"NAME","cauchy"),t&&t.prng?(Et(n,"seed",null),Et(n,"seedLength",null),QW(n,"state",tz(null),q$r),Et(n,"stateLength",null),Et(n,"byteLength",null),Et(n,"toJSON",tz(null))):(bs(n,"seed",o),bs(n,"seedLength",v),QW(n,"state",l,p),bs(n,"stateLength",f),bs(n,"byteLength",c),Et(n,"toJSON",g)),Et(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=b$r(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return nz(e,u,r)}function d(m,y){return iz(m)||iz(y)||y<=0?NaN:nz(e,m,y)}}az.exports=E$r});var uz=s((zAe,sz)=>{"use strict";var N$r=Cv(),S$r=N$r();sz.exports=S$r});var fz=s((XAe,vz)=>{"use strict";var O$r=b(),oz=uz(),A$r=Cv();O$r(oz,"factory",A$r);vz.exports=oz});var Vv=s((JAe,dz)=>{"use strict";var Nt=b(),Es=L(),cz=B(),_$r=W().isPrimitive,lz=T(),pz=I(),gz=O(),mz=_(),T$r=C(),I$r=E(),Qi=$i().factory,R$r=j(),Ns=q();function L$r(){var r,e,t,i,n;if(arguments.length===0)r=Qi();else if(arguments.length===1&&lz(arguments[0]))if(t=arguments[0],gz(t,"prng")){if(!pz(t.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Qi({prng:t.prng})}else r=Qi(t);else{if(n=arguments[0],!_$r(n))throw new TypeError(Ns("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!lz(t))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",t));if(gz(t,"prng")){if(!pz(t.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Qi(n/2,.5,{prng:t.prng})}else r=Qi(n/2,.5,t)}else r=Qi(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,Nt(i,"NAME","chisquare"),t&&t.prng?(Nt(i,"seed",null),Nt(i,"seedLength",null),cz(i,"state",mz(null),T$r),Nt(i,"stateLength",null),Nt(i,"byteLength",null),Nt(i,"toJSON",mz(null))):(Es(i,"seed",a),Es(i,"seedLength",u),cz(i,"state",f,c),Es(i,"stateLength",o),Es(i,"byteLength",v),Nt(i,"toJSON",l)),Nt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=R$r(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return I$r(h)||h<=0?NaN:r(h/2,.5)}}dz.exports=L$r});var yz=s((YAe,hz)=>{"use strict";var P$r=Vv(),F$r=P$r();hz.exports=F$r});var ga=s(($Ae,bz)=>{"use strict";var M$r=b(),qz=yz(),B$r=Vv();M$r(qz,"factory",B$r);bz.exports=qz});var Uv=s((ZAe,_z)=>{"use strict";var St=b(),Ss=L(),wz=B(),j$r=W().isPrimitive,Ez=T(),Nz=I(),Sz=O(),Oz=_(),k$r=C(),C$r=E(),Ki=ga().factory,V$r=j(),Az=U(),Os=q();function U$r(){var r,e,t,i,n;if(arguments.length===0)r=Ki();else if(arguments.length===1&&Ez(arguments[0]))if(t=arguments[0],Sz(t,"prng")){if(!Nz(t.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ki({prng:t.prng})}else r=Ki(t);else{if(n=arguments[0],!j$r(n))throw new TypeError(Os("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!Ez(t))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Sz(t,"prng")){if(!Nz(t.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ki(n,{prng:t.prng})}else r=Ki(n,t)}else r=Ki(n)}return n===void 0?i=g:i=p,e=r.PRNG,St(i,"NAME","chi"),t&&t.prng?(St(i,"seed",null),St(i,"seedLength",null),wz(i,"state",Oz(null),k$r),St(i,"stateLength",null),St(i,"byteLength",null),St(i,"toJSON",Oz(null))):(Ss(i,"seed",a),Ss(i,"seedLength",u),wz(i,"state",f,c),Ss(i,"stateLength",o),Ss(i,"byteLength",v),St(i,"toJSON",l)),St(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=V$r(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return Az(r())}function g(h){return C$r(h)||h<=0?NaN:Az(r(h))}}_z.exports=U$r});var Iz=s((QAe,Tz)=>{"use strict";var G$r=Uv(),x$r=G$r();Tz.exports=x$r});var Pz=s((KAe,Lz)=>{"use strict";var D$r=b(),Rz=Iz(),H$r=Uv();D$r(Rz,"factory",H$r);Lz.exports=Rz});var Bz=s((r_e,Mz)=>{"use strict";var W$r=M().isPrimitive,z$r=W().isPrimitive,Fz=q(),X$r=vr();function J$r(r,e){return!W$r(r)||X$r(r)?new TypeError(Fz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):z$r(e)?null:new TypeError(Fz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Mz.exports=J$r});var kz=s((e_e,jz)=>{"use strict";var Gv=E(),Y$r=Zn(),$$r=Vr();function Z$r(r,e,t){var i;return Gv(r)||Gv(e)||Gv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+Y$r(i)/$$r)/2)}jz.exports=Z$r});var Uz=s((t_e,Vz)=>{"use strict";var Cz=E();function Q$r(r,e){return Cz(r)||Cz(e)?NaN:r<e?0:1}Vz.exports=Q$r});var Dz=s((i_e,xz)=>{"use strict";var K$r=_(),Gz=E();function rZr(r){if(Gz(r))return K$r(NaN);return e;function e(t){return Gz(t)?NaN:t<r?0:1}}xz.exports=rZr});var As=s((n_e,Wz)=>{"use strict";var eZr=b(),Hz=Uz(),tZr=Dz();eZr(Hz,"factory",tZr);Wz.exports=Hz});var Xz=s((a_e,zz)=>{"use strict";var iZr=_(),nZr=As().factory,xv=E(),aZr=Zn(),sZr=Vr();function uZr(r,e){if(xv(r)||xv(e)||e<0)return iZr(NaN);if(e===0)return nZr(r);return t;function t(i){var n;return xv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+aZr(n)/sZr)/2)}}zz.exports=uZr});var $z=s((s_e,Yz)=>{"use strict";var oZr=b(),Jz=kz(),vZr=Xz();oZr(Jz,"factory",vZr);Yz.exports=Jz});var Dv=s((u_e,Zz)=>{"use strict";var fZr=$z(),cZr=1e4,lZr=1e-12;function pZr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<cZr;){if(u=(i+n)/2,n-i<lZr)return u;a=fZr(u,e,t),r>a?i=u:n=u,o+=1}return u}Zz.exports=pZr});var Kz=s((o_e,Qz)=>{"use strict";var Hv=E(),gZr=Dv();function mZr(r,e,t){return Hv(e)||Hv(t)||Hv(r)||t<0||r<0||r>1?NaN:t===0?e:gZr(r,e,t)}Qz.exports=mZr});var eX=s((v_e,rX)=>{"use strict";var dZr=E();function hZr(r,e){return dZr(r)||r<0||r>1?NaN:e}rX.exports=hZr});var nX=s((f_e,iX)=>{"use strict";var yZr=_(),tX=E();function qZr(r){if(tX(r))return yZr(NaN);return e;function e(t){return tX(t)||t<0||t>1?NaN:r}}iX.exports=qZr});var Wv=s((c_e,sX)=>{"use strict";var bZr=b(),aX=eX(),wZr=nX();bZr(aX,"factory",wZr);sX.exports=aX});var oX=s((l_e,uX)=>{"use strict";var EZr=_(),NZr=Wv().factory,zv=E(),SZr=Dv();function OZr(r,e){if(zv(r)||zv(e)||e<0)return EZr(NaN);if(e===0)return NZr(r);return t;function t(i){return zv(i)||i<0||i>1?NaN:SZr(i,r,e)}}uX.exports=OZr});var cX=s((p_e,fX)=>{"use strict";var AZr=b(),vX=Kz(),_Zr=oX();AZr(vX,"factory",_Zr);fX.exports=vX});var pX=s((g_e,lX)=>{"use strict";var TZr=cX();function IZr(r,e,t){return TZr(r(),e,t)}lX.exports=IZr});var Xv=s((m_e,wX)=>{"use strict";var Re=b(),_s=L(),gX=B(),mX=T(),dX=I(),hX=O(),yX=_(),RZr=C(),Ts=J().factory,qX=E(),LZr=j(),Is=q(),PZr=Bz(),bX=pX();function FZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ts();else if(arguments.length===1){if(r=arguments[0],!mX(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hX(r,"prng")){if(!dX(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else{if(n=arguments[0],a=arguments[1],i=PZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mX(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hX(r,"prng")){if(!dX(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else e=Ts()}return n===void 0?t=h:t=g,Re(t,"NAME","cosine"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),gX(t,"state",yX(null),RZr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",yX(null)),Re(t,"PRNG",e)):(_s(t,"seed",u),_s(t,"seedLength",o),gX(t,"state",c,l),_s(t,"stateLength",v),_s(t,"byteLength",f),Re(t,"toJSON",p),Re(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=LZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return bX(e,n,a)}function h(d,m){return qX(d)||qX(m)||m<=0?NaN:bX(e,d,m)}}wX.exports=FZr});var NX=s((d_e,EX)=>{"use strict";var MZr=Xv(),BZr=MZr();EX.exports=BZr});var AX=s((h_e,OX)=>{"use strict";var jZr=b(),SX=NX(),kZr=Xv();jZr(SX,"factory",kZr);OX.exports=SX});var RX=s((y_e,IX)=>{"use strict";var _X=gr().isPrimitive,Jv=q(),TX=vr();function CZr(r,e){return!_X(r)||TX(r)?new TypeError(Jv("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!_X(e)||TX(e)?new TypeError(Jv("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Jv("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}IX.exports=CZr});var FX=s((q_e,PX)=>{"use strict";var Yv=Ui(),rn=z();function LX(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===Yv?(u=rn(a/(n+1)),a%(n+1)===n&&(u+=1)):u=rn((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=LX(r,0,rn(a/v)),!(l>Yv/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===Yv?(o=rn(n/(a+1)),n%(a+1)===a&&(o+=1)):o=rn((n+1)/(a+1));;)if(i=r()-f,i=rn(i/o),i<=a)return i+e}PX.exports=LX});var $v=s((b_e,GX)=>{"use strict";var Le=b(),Rs=L(),MX=B(),BX=T(),jX=I(),kX=O(),CX=_(),VZr=C(),Ls=J().factory,VX=E(),en=yr(),UZr=j(),Ot=q(),GZr=RX(),UX=FX();function xZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ls();else if(arguments.length===1){if(r=arguments[0],!BX(r))throw new TypeError(Ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kX(r,"prng")){if(!jX(r.prng))throw new TypeError(Ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!en(e.MIN))throw new TypeError(Ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!en(e.MAX))throw new TypeError(Ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Ls(r)}else{if(n=arguments[0],a=arguments[1],i=GZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!BX(r))throw new TypeError(Ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kX(r,"prng")){if(!jX(r.prng))throw new TypeError(Ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!en(e.MIN))throw new TypeError(Ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!en(e.MAX))throw new TypeError(Ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Ls(r)}else e=Ls()}return n===void 0?t=h:t=g,Le(t,"NAME","discrete-uniform"),r&&r.prng?(Le(t,"seed",null),Le(t,"seedLength",null),MX(t,"state",CX(null),VZr),Le(t,"stateLength",null),Le(t,"byteLength",null),Le(t,"toJSON",CX(null)),Le(t,"PRNG",e)):(Rs(t,"seed",u),Rs(t,"seedLength",o),MX(t,"state",c,l),Rs(t,"stateLength",v),Rs(t,"byteLength",f),Le(t,"toJSON",p),Le(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=UZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return UX(e,n,a)}function h(d,m){return VX(d)||VX(m)||!en(d)||!en(m)||d>m?NaN:UX(e,d,m)}}GX.exports=xZr});var DX=s((w_e,xX)=>{"use strict";var DZr=$v(),HZr=DZr();xX.exports=HZr});var zX=s((E_e,WX)=>{"use strict";var WZr=b(),HX=DX(),zZr=$v();WZr(HX,"factory",zZr);WX.exports=HX});var YX=s((N_e,JX)=>{"use strict";var XZr=W().isPrimitive,JZr=te().isPrimitive,XX=q();function YZr(r,e){return JZr(r)?XZr(e)?null:new TypeError(XX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(XX("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}JX.exports=YZr});var ZX=s((S_e,$X)=>{"use strict";var $Zr=P();function ZZr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*$Zr(i)}$X.exports=ZZr});var Zv=s((O_e,aJ)=>{"use strict";var Pe=b(),Ps=L(),QX=B(),KX=T(),rJ=I(),eJ=O(),tJ=_(),QZr=C(),Fs=J().factory,iJ=E(),KZr=Lv(),rQr=j(),Ms=q(),eQr=YX(),nJ=ZX();function tQr(){var r,e,t,i,n,a;if(arguments.length===0)e=Fs();else if(arguments.length===1){if(t=arguments[0],!KX(t))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",t));if(eJ(t,"prng")){if(!rJ(t.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Fs(t)}else{if(a=arguments[0],r=arguments[1],n=eQr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!KX(t))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",t));if(eJ(t,"prng")){if(!rJ(t.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Fs(t)}else e=Fs()}return a===void 0?i=h:i=g,Pe(i,"NAME","erlang"),t&&t.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),QX(i,"state",tJ(null),QZr),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",tJ(null)),Pe(i,"PRNG",e)):(Ps(i,"seed",u),Ps(i,"seedLength",o),QX(i,"state",c,l),Ps(i,"stateLength",v),Ps(i,"byteLength",f),Pe(i,"toJSON",p),Pe(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=rQr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return nJ(e,a,r)}function h(d,m){return iJ(d)||iJ(m)||!KZr(d)||m<=0?NaN:nJ(e,d,m)}}aJ.exports=tQr});var uJ=s((A_e,sJ)=>{"use strict";var iQr=Zv(),nQr=iQr();sJ.exports=nQr});var fJ=s((__e,vJ)=>{"use strict";var aQr=b(),oJ=uJ(),sQr=Zv();aQr(oJ,"factory",sQr);vJ.exports=oJ});var lJ=s((T_e,cJ)=>{"use strict";var uQr=P();function oQr(r,e){return-uQr(1-r())/e}cJ.exports=oQr});var Qv=s((I_e,qJ)=>{"use strict";var Fe=b(),Bs=L(),pJ=B(),vQr=W().isPrimitive,gJ=T(),mJ=I(),dJ=O(),hJ=_(),fQr=C(),js=J().factory,cQr=E(),lQr=j(),ks=q(),yJ=lJ();function pQr(){var r,e,t,i;if(arguments.length===0)t=js();else if(arguments.length===1&&gJ(arguments[0]))if(e=arguments[0],dJ(e,"prng")){if(!mJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e);else{if(r=arguments[0],!vQr(r))throw new TypeError(ks("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!gJ(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dJ(e,"prng")){if(!mJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e)}else t=js()}return r===void 0?i=p:i=l,Fe(i,"NAME","exponential"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),pJ(i,"state",hJ(null),fQr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",hJ(null)),Fe(i,"PRNG",t)):(Bs(i,"seed",n),Bs(i,"seedLength",a),pJ(i,"state",v,f),Bs(i,"stateLength",u),Bs(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=lQr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return yJ(t,r)}function p(g){return cQr(g)||g<=0?NaN:yJ(t,g)}}qJ.exports=pQr});var wJ=s((R_e,bJ)=>{"use strict";var gQr=Qv(),mQr=gQr();bJ.exports=mQr});var SJ=s((L_e,NJ)=>{"use strict";var dQr=b(),EJ=wJ(),hQr=Qv();dQr(EJ,"factory",hQr);NJ.exports=EJ});var TJ=s((P_e,_J)=>{"use strict";var OJ=W().isPrimitive,AJ=q();function yQr(r,e){return OJ(r)?OJ(e)?null:new TypeError(AJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(AJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}_J.exports=yQr});var RJ=s((F_e,IJ)=>{"use strict";function qQr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}IJ.exports=qQr});var Kv=s((M_e,CJ)=>{"use strict";var At=b(),Cs=L(),LJ=B(),PJ=T(),FJ=I(),MJ=O(),BJ=_(),bQr=C(),tn=ga().factory,jJ=E(),wQr=j(),Vs=q(),EQr=TJ(),kJ=RJ();function NQr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=tn();else if(arguments.length===1){if(e=arguments[0],!PJ(e))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(MJ(e,"prng")){if(!FJ(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=tn({prng:e.prng})}else r=tn(e)}else{if(a=arguments[0],u=arguments[1],n=EQr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!PJ(e))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(MJ(e,"prng")){if(!FJ(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=tn({prng:e.prng})}else r=tn(e)}else r=tn()}return a===void 0?i=d:i=h,t=r.PRNG,At(i,"NAME","f"),e&&e.prng?(At(i,"seed",null),At(i,"seedLength",null),LJ(i,"state",BJ(null),bQr),At(i,"stateLength",null),At(i,"byteLength",null),At(i,"toJSON",BJ(null))):(Cs(i,"seed",o),Cs(i,"seedLength",v),LJ(i,"state",l,p),Cs(i,"stateLength",f),Cs(i,"byteLength",c),At(i,"toJSON",g)),At(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=wQr(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return kJ(r,a,u)}function d(m,y){return jJ(m)||jJ(y)||m<=0||y<=0?NaN:kJ(r,m,y)}}CJ.exports=NQr});var UJ=s((B_e,VJ)=>{"use strict";var SQr=Kv(),OQr=SQr();VJ.exports=OQr});var DJ=s((j_e,xJ)=>{"use strict";var AQr=b(),GJ=UJ(),_Qr=Kv();AQr(GJ,"factory",_Qr);xJ.exports=GJ});var zJ=s((k_e,WJ)=>{"use strict";var HJ=W().isPrimitive,TQr=M().isPrimitive,rf=vr(),ef=q();function IQr(r,e,t){return!HJ(r)||rf(r)?new TypeError(ef("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!HJ(e)||rf(e)?new TypeError(ef("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!TQr(t)||rf(t)?new TypeError(ef("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}WJ.exports=IQr});var JJ=s((C_e,XJ)=>{"use strict";var RQr=D(),LQr=P();function PQr(r,e,t,i){return i+t*RQr(-LQr(r()),-1/e)}XJ.exports=PQr});var nf=s((V_e,eY)=>{"use strict";var Me=b(),Us=L(),YJ=B(),$J=T(),ZJ=I(),QJ=O(),KJ=_(),FQr=C(),Gs=J().factory,tf=E(),MQr=j(),xs=q(),BQr=zJ(),rY=JJ();function jQr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=Gs();else if(arguments.length===1){if(e=arguments[0],!$J(e))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(QJ(e,"prng")){if(!ZJ(e.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=BQr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!$J(e))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(QJ(e,"prng")){if(!ZJ(e.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e)}else t=Gs()}return r===void 0?i=d:i=h,Me(i,"NAME","frechet"),e&&e.prng?(Me(i,"seed",null),Me(i,"seedLength",null),YJ(i,"state",KJ(null),FQr),Me(i,"stateLength",null),Me(i,"byteLength",null),Me(i,"toJSON",KJ(null)),Me(i,"PRNG",t)):(Us(i,"seed",o),Us(i,"seedLength",v),YJ(i,"state",l,p),Us(i,"stateLength",f),Us(i,"byteLength",c),Me(i,"toJSON",g),Me(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=MQr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return rY(t,r,a,u)}function d(m,y,N){return tf(m)||tf(y)||tf(N)||m<=0||y<=0?NaN:rY(t,m,y,N)}}eY.exports=jQr});var iY=s((U_e,tY)=>{"use strict";var kQr=nf(),CQr=kQr();tY.exports=CQr});var sY=s((G_e,aY)=>{"use strict";var VQr=b(),nY=iY(),UQr=nf();VQr(nY,"factory",UQr);aY.exports=nY});var vY=s((x_e,oY)=>{"use strict";var GQr=z(),uY=P();function xQr(r,e){var t=r();return t===0&&(t=r()),GQr(uY(t)/uY(1-e))}oY.exports=xQr});var af=s((D_e,dY)=>{"use strict";var Be=b(),Ds=L(),fY=B(),cY=T(),DQr=_n().isPrimitive,lY=I(),pY=O(),gY=_(),HQr=C(),Hs=J().factory,WQr=E(),zQr=j(),Ws=q(),mY=vY();function XQr(){var r,e,t,i;if(arguments.length===0)e=Hs();else if(arguments.length===1&&cY(arguments[0]))if(r=arguments[0],pY(r,"prng")){if(!lY(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r);else{if(i=arguments[0],!DQr(i))throw new TypeError(Ws("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!cY(r))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pY(r,"prng")){if(!lY(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r)}else e=Hs()}return i===void 0?t=p:t=l,Be(t,"NAME","geometric"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),fY(t,"state",gY(null),HQr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",gY(null)),Be(t,"PRNG",e)):(Ds(t,"seed",n),Ds(t,"seedLength",a),fY(t,"state",v,f),Ds(t,"stateLength",u),Ds(t,"byteLength",o),Be(t,"toJSON",c),Be(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=zQr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return mY(e,i)}function p(g){return WQr(g)||g<0||g>1?NaN:mY(e,g)}}dY.exports=XQr});var yY=s((H_e,hY)=>{"use strict";var JQr=af(),YQr=JQr();hY.exports=YQr});var wY=s((W_e,bY)=>{"use strict";var $Qr=b(),qY=yY(),ZQr=af();$Qr(qY,"factory",ZQr);bY.exports=qY});var SY=s((z_e,NY)=>{"use strict";var QQr=M().isPrimitive,KQr=W().isPrimitive,EY=q(),rKr=vr();function eKr(r,e){return!QQr(r)||rKr(r)?new TypeError(EY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):KQr(e)?null:new TypeError(EY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}NY.exports=eKr});var _Y=s((X_e,AY)=>{"use strict";var OY=P();function tKr(r,e,t){return e-t*OY(-OY(r()))}AY.exports=tKr});var sf=s((J_e,BY)=>{"use strict";var je=b(),zs=L(),TY=B(),IY=T(),RY=I(),LY=O(),PY=_(),iKr=C(),Xs=J().factory,FY=E(),nKr=j(),Js=q(),aKr=SY(),MY=_Y();function sKr(){var r,e,t,i,n,a;if(arguments.length===0)t=Xs();else if(arguments.length===1){if(e=arguments[0],!IY(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(LY(e,"prng")){if(!RY(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else{if(a=arguments[0],r=arguments[1],n=aKr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!IY(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(LY(e,"prng")){if(!RY(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else t=Xs()}return a===void 0?i=h:i=g,je(i,"NAME","gumbel"),e&&e.prng?(je(i,"seed",null),je(i,"seedLength",null),TY(i,"state",PY(null),iKr),je(i,"stateLength",null),je(i,"byteLength",null),je(i,"toJSON",PY(null)),je(i,"PRNG",t)):(zs(i,"seed",u),zs(i,"seedLength",o),TY(i,"state",c,l),zs(i,"stateLength",v),zs(i,"byteLength",f),je(i,"toJSON",p),je(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=nKr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return MY(t,a,r)}function h(d,m){return FY(d)||FY(m)||m<=0?NaN:MY(t,d,m)}}BY.exports=sKr});var kY=s((Y_e,jY)=>{"use strict";var uKr=sf(),oKr=uKr();jY.exports=oKr});var UY=s(($_e,VY)=>{"use strict";var vKr=b(),CY=kY(),fKr=sf();vKr(CY,"factory",fKr);VY.exports=CY});var xY=s((Z_e,GY)=>{"use strict";var uf=hr().isPrimitive,ma=q();function cKr(r,e,t){return uf(r)?uf(e)?uf(t)?t>r?new RangeError(ma("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(ma("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(ma("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(ma("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(ma("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}GY.exports=cKr});var DY=s((Q_e,lKr)=>{lKr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var WY=s((K_e,HY)=>{"use strict";var pKr=E(),gKr=yr(),mKr=xi(),dKr=R(),hKr=DY(),yKr=170;function qKr(r){return pKr(r)?NaN:gKr(r)?r<0?NaN:r<=yKr?hKr[r]:dKr:mKr(r+1)}HY.exports=qKr});var XY=s((rTe,zY)=>{"use strict";var bKr=WY();zY.exports=bKr});var YY=s((eTe,JY)=>{"use strict";var _t=XY();function wKr(r,e,t,i){var n,a,u;for(i<t?(n=_t(t)*_t(e+t-i)/(_t(e+t)*_t(t-i)),u=0):(n=_t(e)*_t(i)/(_t(i-t)*_t(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}JY.exports=wKr});var ZY=s((tTe,$Y)=>{"use strict";var Ys=YY();function EKr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=Ys(r,n,a,u),t-o):(a=t,n=e-t,o=Ys(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=Ys(r,n,a,u),o):(n=e-t,a=t,o=Ys(r,n,a,u),i-o))}$Y.exports=EKr});var vf=s((iTe,a$)=>{"use strict";var ke=b(),$s=L(),QY=B(),KY=T(),r$=I(),e$=O(),t$=_(),NKr=C(),Zs=J().factory,of=X2(),i$=R(),SKr=j(),Qs=q(),OKr=xY(),n$=ZY();function AKr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zs();else if(arguments.length===1){if(r=arguments[0],!KY(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(e$(r,"prng")){if(!r$(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=OKr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!KY(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(e$(r,"prng")){if(!r$(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else e=Zs()}return n===void 0?t=d:t=h,ke(t,"NAME","hypergeometric"),r&&r.prng?(ke(t,"seed",null),ke(t,"seedLength",null),QY(t,"state",t$(null),NKr),ke(t,"stateLength",null),ke(t,"byteLength",null),ke(t,"toJSON",t$(null)),ke(t,"PRNG",e)):($s(t,"seed",o),$s(t,"seedLength",v),QY(t,"state",l,p),$s(t,"stateLength",f),$s(t,"byteLength",c),ke(t,"toJSON",g),ke(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=SKr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return n$(e,n,a,u)}function d(m,y,N){return m===i$||y===i$||!of(m)||!of(y)||!of(N)||N>m?NaN:n$(e,m,y,N)}}a$.exports=AKr});var u$=s((nTe,s$)=>{"use strict";var _Kr=vf(),TKr=_Kr();s$.exports=TKr});var f$=s((aTe,v$)=>{"use strict";var IKr=b(),o$=u$(),RKr=vf();IKr(o$,"factory",RKr);v$.exports=o$});var g$=s((sTe,p$)=>{"use strict";var c$=W().isPrimitive,l$=q();function LKr(r,e){return c$(r)?c$(e)?null:new TypeError(l$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(l$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}p$.exports=LKr});var ff=s((uTe,w$)=>{"use strict";var Tt=b(),Ks=L(),m$=B(),d$=T(),h$=I(),y$=O(),q$=_(),PKr=C(),nn=$i().factory,b$=E(),FKr=j(),ru=q(),MKr=g$();function BKr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=nn();else if(arguments.length===1){if(i=arguments[0],!d$(i))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",i));if(y$(i,"prng")){if(!h$(i.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=nn({prng:i.prng})}else r=nn(i)}else{if(e=arguments[0],t=arguments[1],u=MKr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!d$(i))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",i));if(y$(i,"prng")){if(!h$(i.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=nn(e,t,{prng:i.prng})}else r=nn(e,t,i)}else r=nn(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,Tt(a,"NAME","invgamma"),i&&i.prng?(Tt(a,"seed",null),Tt(a,"seedLength",null),m$(a,"state",q$(null),PKr),Tt(a,"stateLength",null),Tt(a,"byteLength",null),Tt(a,"toJSON",q$(null))):(Ks(a,"seed",o),Ks(a,"seedLength",v),m$(a,"state",l,p),Ks(a,"stateLength",f),Ks(a,"byteLength",c),Tt(a,"toJSON",g)),Tt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=FKr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,y){return b$(m)||b$(y)||m<=0||y<=0?NaN:1/r(m,y)}}w$.exports=BKr});var N$=s((oTe,E$)=>{"use strict";var jKr=ff(),kKr=jKr();E$.exports=kKr});var A$=s((vTe,O$)=>{"use strict";var CKr=b(),S$=N$(),VKr=ff();CKr(S$,"factory",VKr);O$.exports=S$});var R$=s((fTe,I$)=>{"use strict";var _$=W().isPrimitive,T$=q();function UKr(r,e){return _$(r)?_$(e)?null:new TypeError(T$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(T$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}I$.exports=UKr});var F$=s((cTe,P$)=>{"use strict";var L$=D();function GKr(r,e,t){var i=r();return L$(1-L$(1-i,1/t),1/e)}P$.exports=GKr});var cf=s((lTe,G$)=>{"use strict";var Ce=b(),eu=L(),M$=B(),B$=T(),j$=I(),k$=O(),C$=_(),xKr=C(),tu=J().factory,V$=E(),DKr=j(),iu=q(),HKr=R$(),U$=F$();function WKr(){var r,e,t,i,n,a;if(arguments.length===0)e=tu();else if(arguments.length===1){if(r=arguments[0],!B$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(k$(r,"prng")){if(!j$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else{if(n=arguments[0],a=arguments[1],i=HKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!B$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(k$(r,"prng")){if(!j$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else e=tu()}return n===void 0?t=h:t=g,Ce(t,"NAME","kumaraswamy"),r&&r.prng?(Ce(t,"seed",null),Ce(t,"seedLength",null),M$(t,"state",C$(null),xKr),Ce(t,"stateLength",null),Ce(t,"byteLength",null),Ce(t,"toJSON",C$(null)),Ce(t,"PRNG",e)):(eu(t,"seed",u),eu(t,"seedLength",o),M$(t,"state",c,l),eu(t,"stateLength",v),eu(t,"byteLength",f),Ce(t,"toJSON",p),Ce(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=DKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return U$(e,n,a)}function h(d,m){return V$(d)||V$(m)||d<=0||m<=0?NaN:U$(e,d,m)}}G$.exports=WKr});var D$=s((pTe,x$)=>{"use strict";var zKr=cf(),XKr=zKr();x$.exports=XKr});var z$=s((gTe,W$)=>{"use strict";var JKr=b(),H$=D$(),YKr=cf();JKr(H$,"factory",YKr);W$.exports=H$});var Y$=s((mTe,J$)=>{"use strict";var $Kr=M().isPrimitive,ZKr=W().isPrimitive,X$=q(),QKr=vr();function KKr(r,e){return!$Kr(r)||QKr(r)?new TypeError(X$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):ZKr(e)?null:new TypeError(X$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}J$.exports=KKr});var Z$=s((dTe,$$)=>{"use strict";var rre=ps(),ere=Y(),tre=P();function ire(r,e,t){var i=r()-.5;return e-t*rre(i)*tre(1-2*ere(i))}$$.exports=ire});var lf=s((hTe,aZ)=>{"use strict";var Ve=b(),nu=L(),Q$=B(),K$=T(),rZ=I(),eZ=O(),tZ=_(),nre=C(),au=J().factory,iZ=E(),are=j(),su=q(),sre=Y$(),nZ=Z$();function ure(){var r,e,t,i,n,a;if(arguments.length===0)e=au();else if(arguments.length===1){if(r=arguments[0],!K$(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(eZ(r,"prng")){if(!rZ(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else{if(n=arguments[0],a=arguments[1],i=sre(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!K$(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(eZ(r,"prng")){if(!rZ(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else e=au()}return n===void 0?t=h:t=g,Ve(t,"NAME","laplace"),r&&r.prng?(Ve(t,"seed",null),Ve(t,"seedLength",null),Q$(t,"state",tZ(null),nre),Ve(t,"stateLength",null),Ve(t,"byteLength",null),Ve(t,"toJSON",tZ(null)),Ve(t,"PRNG",e)):(nu(t,"seed",u),nu(t,"seedLength",o),Q$(t,"state",c,l),nu(t,"stateLength",v),nu(t,"byteLength",f),Ve(t,"toJSON",p),Ve(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=are(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return nZ(e,n,a)}function h(d,m){return iZ(d)||iZ(m)||m<=0?NaN:nZ(e,d,m)}}aZ.exports=ure});var uZ=s((yTe,sZ)=>{"use strict";var ore=lf(),vre=ore();sZ.exports=vre});var fZ=s((qTe,vZ)=>{"use strict";var fre=b(),oZ=uZ(),cre=lf();fre(oZ,"factory",cre);vZ.exports=oZ});var pZ=s((bTe,lZ)=>{"use strict";var lre=M().isPrimitive,pre=W().isPrimitive,cZ=q(),gre=vr();function mre(r,e){return!lre(r)||gre(r)?new TypeError(cZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):pre(e)?null:new TypeError(cZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}lZ.exports=mre});var mZ=s((wTe,gZ)=>{"use strict";function dre(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}gZ.exports=dre});var hZ=s((ETe,dZ)=>{"use strict";function hre(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}dZ.exports=hre});var qZ=s((NTe,yZ)=>{"use strict";function yre(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}yZ.exports=yre});var wZ=s((STe,bZ)=>{"use strict";function qre(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}bZ.exports=qre});var NZ=s((OTe,EZ)=>{"use strict";function bre(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}EZ.exports=bre});var _Z=s((ATe,AZ)=>{"use strict";var wre=E(),SZ=U(),OZ=P(),Ere=R(),Nre=V(),Sre=mZ(),Ore=hZ(),Are=qZ(),_re=wZ(),Tre=NZ(),Ire=.08913147449493408,Rre=2.249481201171875,Lre=.807220458984375,Pre=.9399557113647461,Fre=.9836282730102539;function Mre(r){var e,t,i,n,a,u;return wre(r)?NaN:r===1?Ere:r===-1?Nre:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=Sre(t),e*(a*Ire+a*u)):n>=.25?(a=SZ(-2*OZ(n)),n-=.25,u=Ore(n),e*(a/(Rre+u))):(n=SZ(-OZ(n)),n<3?(i=n-1.125,u=Are(i),e*(Lre*n+u*n)):n<6?(i=n-3,u=_re(i),e*(Pre*n+u*n)):(i=n-6,u=Tre(i),e*(Fre*n+u*n))))}AZ.exports=Mre});var pf=s((_Te,TZ)=>{"use strict";var Bre=_Z();TZ.exports=Bre});var RZ=s((TTe,IZ)=>{"use strict";var jre=pf(),gf=E(),kre=U();function Cre(r,e,t){var i,n;return gf(e)||gf(t)||gf(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*kre(2),i+n*jre(2*r-1))}IZ.exports=Cre});var PZ=s((ITe,LZ)=>{"use strict";var Vre=_(),Ure=Wv().factory,Gre=pf(),mf=E(),xre=U();function Dre(r,e){var t,i;if(mf(r)||mf(e)||e<0)return Vre(NaN);return e===0&&Ure(r),t=r,i=e*xre(2),n;function n(a){return mf(a)||a<0||a>1?NaN:t+i*Gre(2*a-1)}}LZ.exports=Dre});var df=s((RTe,MZ)=>{"use strict";var Hre=b(),FZ=RZ(),Wre=PZ();Hre(FZ,"factory",Wre);MZ.exports=FZ});var jZ=s((LTe,BZ)=>{"use strict";var zre=df();function Xre(r,e,t){var i=zre(1-r()/2,0,1);return e+t/(i*i)}BZ.exports=Xre});var hf=s((PTe,HZ)=>{"use strict";var Ue=b(),uu=L(),kZ=B(),CZ=T(),VZ=I(),UZ=O(),GZ=_(),Jre=C(),ou=J().factory,xZ=E(),Yre=j(),vu=q(),$re=pZ(),DZ=jZ();function Zre(){var r,e,t,i,n,a;if(arguments.length===0)e=ou();else if(arguments.length===1){if(r=arguments[0],!CZ(r))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UZ(r,"prng")){if(!VZ(r.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else{if(n=arguments[0],a=arguments[1],i=$re(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!CZ(r))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UZ(r,"prng")){if(!VZ(r.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else e=ou()}return n===void 0?t=h:t=g,Ue(t,"NAME","levy"),r&&r.prng?(Ue(t,"seed",null),Ue(t,"seedLength",null),kZ(t,"state",GZ(null),Jre),Ue(t,"stateLength",null),Ue(t,"byteLength",null),Ue(t,"toJSON",GZ(null)),Ue(t,"PRNG",e)):(uu(t,"seed",u),uu(t,"seedLength",o),kZ(t,"state",c,l),uu(t,"stateLength",v),uu(t,"byteLength",f),Ue(t,"toJSON",p),Ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Yre(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return DZ(e,n,a)}function h(d,m){return xZ(d)||xZ(m)||m<=0?NaN:DZ(e,d,m)}}HZ.exports=Zre});var zZ=s((FTe,WZ)=>{"use strict";var Qre=hf(),Kre=Qre();WZ.exports=Kre});var YZ=s((MTe,JZ)=>{"use strict";var ree=b(),XZ=zZ(),eee=hf();ree(XZ,"factory",eee);JZ.exports=XZ});var QZ=s((BTe,ZZ)=>{"use strict";var tee=M().isPrimitive,iee=W().isPrimitive,nee=vr(),$Z=q();function aee(r,e){return!tee(r)||nee(r)?new TypeError($Z("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):iee(e)?null:new TypeError($Z("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ZZ.exports=aee});var rQ=s((jTe,KZ)=>{"use strict";var see=P();function uee(r,e,t){var i=r();return e+t*see(i/(1-i))}KZ.exports=uee});var yf=s((kTe,oQ)=>{"use strict";var Ge=b(),fu=L(),eQ=B(),tQ=T(),iQ=I(),nQ=O(),aQ=_(),oee=C(),cu=J().factory,sQ=E(),vee=j(),lu=q(),fee=QZ(),uQ=rQ();function cee(){var r,e,t,i,n,a;if(arguments.length===0)e=cu();else if(arguments.length===1){if(r=arguments[0],!tQ(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nQ(r,"prng")){if(!iQ(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else{if(n=arguments[0],a=arguments[1],i=fee(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!tQ(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nQ(r,"prng")){if(!iQ(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else e=cu()}return n===void 0?t=h:t=g,Ge(t,"NAME","logistic"),r&&r.prng?(Ge(t,"seed",null),Ge(t,"seedLength",null),eQ(t,"state",aQ(null),oee),Ge(t,"stateLength",null),Ge(t,"byteLength",null),Ge(t,"toJSON",aQ(null)),Ge(t,"PRNG",e)):(fu(t,"seed",u),fu(t,"seedLength",o),eQ(t,"state",c,l),fu(t,"stateLength",v),fu(t,"byteLength",f),Ge(t,"toJSON",p),Ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=vee(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return uQ(e,n,a)}function h(d,m){return sQ(d)||sQ(m)||m<=0?NaN:uQ(e,d,m)}}oQ.exports=cee});var fQ=s((CTe,vQ)=>{"use strict";var lee=yf(),pee=lee();vQ.exports=pee});var pQ=s((VTe,lQ)=>{"use strict";var gee=b(),cQ=fQ(),mee=yf();gee(cQ,"factory",mee);lQ.exports=cQ});var dQ=s((UTe,mQ)=>{"use strict";var dee=M().isPrimitive,hee=W().isPrimitive,gQ=q(),yee=vr();function qee(r,e){return!dee(r)||yee(r)?new TypeError(gQ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):hee(e)?null:new TypeError(gQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}mQ.exports=qee});var yQ=s((GTe,hQ)=>{"use strict";var bee=sr();function wee(r,e,t){return bee(e+t*r())}hQ.exports=wee});var qf=s((xTe,AQ)=>{"use strict";var It=b(),pu=L(),qQ=B(),bQ=T(),wQ=I(),EQ=O(),NQ=_(),Eee=C(),an=bt().factory,SQ=E(),Nee=j(),gu=q(),See=dQ(),OQ=yQ();function Oee(){var r,e,t,i,n,a,u;if(arguments.length===0)e=an();else if(arguments.length===1){if(t=arguments[0],!bQ(t))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EQ(t,"prng")){if(!wQ(t.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else{if(u=arguments[0],r=arguments[1],a=See(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!bQ(t))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(EQ(t,"prng")){if(!wQ(t.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else e=an()}return u===void 0?n=d:n=h,i=e.PRNG,It(n,"NAME","lognormal"),t&&t.prng?(It(n,"seed",null),It(n,"seedLength",null),qQ(n,"state",NQ(null),Eee),It(n,"stateLength",null),It(n,"byteLength",null),It(n,"toJSON",NQ(null))):(pu(n,"seed",o),pu(n,"seedLength",v),qQ(n,"state",l,p),pu(n,"stateLength",f),pu(n,"byteLength",c),It(n,"toJSON",g)),It(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=Nee(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return OQ(e,u,r)}function d(m,y){return SQ(m)||SQ(y)||y<=0?NaN:OQ(e,m,y)}}AQ.exports=Oee});var TQ=s((DTe,_Q)=>{"use strict";var Aee=qf(),_ee=Aee();_Q.exports=_ee});var LQ=s((HTe,RQ)=>{"use strict";var Tee=b(),IQ=TQ(),Iee=qf();Tee(IQ,"factory",Iee);RQ.exports=IQ});var bf=s((WTe,PQ)=>{"use strict";var Ree=li(),Lee=z(),Pee=Ree-1;function Fee(){var r=Lee(1+Pee*Math.random());return r|0}PQ.exports=Fee});var Nf=s((zTe,kQ)=>{"use strict";var xe=b(),Rt=L(),FQ=B(),wf=O(),Mee=T(),Bee=cr().isPrimitive,jee=Br(),kee=te().isPrimitive,MQ=Pa(),Yr=q(),mu=li(),_r=Ke(),sn=mt(),Cee=j(),BQ=bf(),Ef=mu-1|0,Vee=mu-1|0,Uee=16807,du=1,hu=2,Lt=2,Tr=4,da=5;function jQ(r,e){var t;return e?t="option":t="argument",r.length<da+1?new RangeError(Yr("invalid %s. State array has insufficient length.",t)):r[0]!==du?new RangeError(Yr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,du,r[0])):r[1]!==hu?new RangeError(Yr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,hu,r[1])):r[Lt]!==1?new RangeError(Yr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Lt])):r[Tr]!==r.length-da?new RangeError(Yr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-da,r[Tr])):null}function Gee(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Mee(r))throw new TypeError(Yr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wf(r,"copy")&&(i.copy=r.copy,!Bee(r.copy)))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(wf(r,"state")){if(t=r.state,i.state=!0,!MQ(t))throw new TypeError(Yr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=jQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new _r(t.length),sn(t.length,t,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,t[Tr])}if(n===void 0)if(wf(r,"seed"))if(n=r.seed,i.seed=!0,kee(n)){if(n>Vee)throw new RangeError(Yr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(jee(n)&&n.length>0)a=n.length,e=new _r(da+a),e[0]=du,e[1]=hu,e[Lt]=1,e[Tr]=a,sn.ndarray(a,n,1,0,e,1,Tr+1),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Yr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=BQ()|0}else n=BQ()|0;return t===void 0&&(e=new _r(da+1),e[0]=du,e[1]=hu,e[Lt]=1,e[Tr]=1,e[Tr+1]=n,t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),xe(h,"NAME","minstd"),Rt(h,"seed",o),Rt(h,"seedLength",v),FQ(h,"state",l,p),Rt(h,"stateLength",f),Rt(h,"byteLength",c),xe(h,"toJSON",g),xe(h,"MIN",1),xe(h,"MAX",mu-1),xe(h,"normalized",d),xe(d,"NAME",h.NAME),Rt(d,"seed",o),Rt(d,"seedLength",v),FQ(d,"state",l,p),Rt(d,"stateLength",f),Rt(d,"byteLength",c),xe(d,"toJSON",g),xe(d,"MIN",(h.MIN-1)/Ef),xe(d,"MAX",(h.MAX-1)/Ef),h;function o(){var m=e[Tr];return sn(m,n,1,new _r(m),1)}function v(){return e[Tr]}function f(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return sn(m,e,1,new _r(m),1)}function p(m){var y;if(!MQ(m))throw new TypeError(Yr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(y=jQ(m,!1),y)throw y;i.copy===!1?i.state&&m.length===e.length?sn(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new _r(m.length)),sn(m.length,m,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,e[Tr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=Cee(e),m.params=[],m}function h(){var m=t[0]|0;return m=Uee*m%mu|0,t[0]=m,m|0}function d(){return(h()-1)/Ef}}kQ.exports=Gee});var VQ=s((XTe,CQ)=>{"use strict";var xee=Nf(),Dee=bf(),Hee=xee({seed:Dee()});CQ.exports=Hee});var xQ=s((JTe,GQ)=>{"use strict";var Wee=b(),UQ=VQ(),zee=Nf();Wee(UQ,"factory",zee);GQ.exports=UQ});var HQ=s((YTe,DQ)=>{"use strict";var Xee=E(),Jee=8;function Yee(r,e,t){var i,n;for(n=0;n<Jee;n++)if(i=r(),Xee(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}DQ.exports=Yee});var Sf=s(($Te,WQ)=>{"use strict";var $ee=li(),Zee=z(),Qee=$ee-1;function Kee(){var r=Zee(1+Qee*Math.random());return r|0}WQ.exports=Kee});var _f=s((ZTe,ZQ)=>{"use strict";var De=b(),Pt=L(),zQ=B(),Of=O(),rte=T(),ete=cr().isPrimitive,tte=Br(),ite=te().isPrimitive,XQ=Pa(),un=mt(),nte=z(),Ir=Ke(),ha=li(),ate=j(),Wr=q(),JQ=HQ(),YQ=Sf(),Af=ha-1|0,ste=ha-1|0,ute=16807,Lr=32,bu=1,wu=3,Ft=2,on=Lr+3,Rr=Lr+6,ya=Lr+7,yu=on+1,qu=on+2;function $Q(r,e){var t;return e?t="option":t="argument",r.length<ya+1?new RangeError(Wr("invalid %s. State array has insufficient length.",t)):r[0]!==bu?new RangeError(Wr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,bu,r[0])):r[1]!==wu?new RangeError(Wr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,wu,r[1])):r[Ft]!==Lr?new RangeError(Wr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Lr,r[Ft])):r[on]!==2?new RangeError(Wr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[on])):r[Rr]!==r.length-ya?new RangeError(Wr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ya,r[Rr])):null}function ote(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!rte(r))throw new TypeError(Wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Of(r,"copy")&&(i.copy=r.copy,!ete(r.copy)))throw new TypeError(Wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Of(r,"state")){if(t=r.state,i.state=!0,!XQ(t))throw new TypeError(Wr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=$Q(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ir(t.length),un(t.length,t,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,t[Rr])}if(n===void 0)if(Of(r,"seed"))if(n=r.seed,i.seed=!0,ite(n)){if(n>ste)throw new RangeError(Wr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(tte(n)&&n.length>0)a=n.length,e=new Ir(ya+a),e[0]=bu,e[1]=wu,e[Ft]=Lr,e[on]=2,e[qu]=n[0],e[Rr]=a,un.ndarray(a,n,1,0,e,1,Rr+1),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,a),t=JQ(h,t,Lr),e[yu]=t[0];else throw new TypeError(Wr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=YQ()|0}else n=YQ()|0;return t===void 0&&(e=new Ir(ya+1),e[0]=bu,e[1]=wu,e[Ft]=Lr,e[on]=2,e[qu]=n,e[Rr]=1,e[Rr+1]=n,t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,1),t=JQ(h,t,Lr),e[yu]=t[0]),De(d,"NAME","minstd-shuffle"),Pt(d,"seed",o),Pt(d,"seedLength",v),zQ(d,"state",l,p),Pt(d,"stateLength",f),Pt(d,"byteLength",c),De(d,"toJSON",g),De(d,"MIN",1),De(d,"MAX",ha-1),De(d,"normalized",m),De(m,"NAME",d.NAME),Pt(m,"seed",o),Pt(m,"seedLength",v),zQ(m,"state",l,p),Pt(m,"stateLength",f),Pt(m,"byteLength",c),De(m,"toJSON",g),De(m,"MIN",(d.MIN-1)/Af),De(m,"MAX",(d.MAX-1)/Af),d;function o(){var y=e[Rr];return un(y,n,1,new Ir(y),1)}function v(){return e[Rr]}function f(){return e.length}function c(){return e.byteLength}function l(){var y=e.length;return un(y,e,1,new Ir(y),1)}function p(y){var N;if(!XQ(y))throw new TypeError(Wr("invalid argument. Must provide an Int32Array. Value: `%s`.",y));if(N=$Q(y,!1),N)throw N;i.copy===!1?i.state&&y.length===e.length?un(y.length,y,1,e,1):(e=y,i.state=!0):(y.length!==e.length&&(e=new Ir(y.length)),un(y.length,y,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,e[Rr])}function g(){var y={};return y.type="PRNG",y.name=d.NAME,y.state=ate(e),y.params=[],y}function h(){var y=e[qu]|0;return y=ute*y%ha|0,e[qu]=y,y|0}function d(){var y,N;return y=e[yu],N=nte(Lr*(y/ha)),y=t[N],e[yu]=y,t[N]=h(),y}function m(){return(d()-1)/Af}}ZQ.exports=ote});var KQ=s((QTe,QQ)=>{"use strict";var vte=_f(),fte=Sf(),cte=vte({seed:fte()});QQ.exports=cte});var tK=s((KTe,eK)=>{"use strict";var lte=b(),rK=KQ(),pte=_f();lte(rK,"factory",pte);eK.exports=rK});var nK=s((rIe,iK)=>{"use strict";var gte=sr();function mte(r,e){for(var t=r(),i=1;t>gte(-e);)i+=1,t*=r();return i-1}iK.exports=mte});var sK=s((eIe,aK)=>{"use strict";var dte=z();function hte(r){return dte(r)===r&&r<0}aK.exports=hte});var oK=s((tIe,uK)=>{"use strict";var yte=sK();uK.exports=yte});var fK=s((iIe,vK)=>{"use strict";var qte=oK(),bte=Qn();function wte(r){return qte(r)?NaN:bte(r+1)}vK.exports=wte});var lK=s((nIe,cK)=>{"use strict";var Ete=fK();cK.exports=Ete});var dK=s((aIe,mK)=>{"use strict";var Nte=lK(),pK=z(),Ste=ps(),Ote=U(),gK=Y(),Eu=P(),Ate=y3(),_te=1/12,Tte=1/360;function Ite(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=Ote(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-gK(c))+v,c+=e+.445,pK(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=Ste(c)*.5-c,l=u*r()),a=.5-gK(c),(a>=.013||a>=l)&&(f=pK((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Eu(e/f),c+=-e-Ate+f,c-=(_te-Tte/(f*f))/f,f>=10&&c>=Eu(l*t)||(c=f*Eu(e)-e-Nte(f),f>=0&&f<=9&&c>=Eu(l))))return f}}mK.exports=Ite});var yK=s((sIe,hK)=>{"use strict";var Rte=nK(),Lte=dK();function Pte(r,e){return e<30?Rte(r,e):Lte(r,e)}hK.exports=Pte});var Tf=s((uIe,OK)=>{"use strict";var He=b(),Nu=L(),qK=B(),Fte=W().isPrimitive,bK=T(),wK=I(),EK=O(),NK=_(),Mte=C(),Su=J().factory,Bte=E(),jte=j(),Ou=q(),SK=yK();function kte(){var r,e,t,i;if(arguments.length===0)t=Su();else if(arguments.length===1&&bK(arguments[0]))if(e=arguments[0],EK(e,"prng")){if(!wK(e.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Su(e);else{if(r=arguments[0],!Fte(r))throw new TypeError(Ou("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!bK(e))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",e));if(EK(e,"prng")){if(!wK(e.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Su(e)}else t=Su()}return r===void 0?i=p:i=l,He(i,"NAME","poisson"),e&&e.prng?(He(i,"seed",null),He(i,"seedLength",null),qK(i,"state",NK(null),Mte),He(i,"stateLength",null),He(i,"byteLength",null),He(i,"toJSON",NK(null)),He(i,"PRNG",t)):(Nu(i,"seed",n),Nu(i,"seedLength",a),qK(i,"state",v,f),Nu(i,"stateLength",u),Nu(i,"byteLength",o),He(i,"toJSON",c),He(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=jte(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return SK(t,r)}function p(g){return Bte(g)||g<=0?NaN:SK(t,g)}}OK.exports=kte});var _K=s((oIe,AK)=>{"use strict";var Cte=Tf(),Vte=Cte();AK.exports=Vte});var If=s((vIe,IK)=>{"use strict";var Ute=b(),TK=_K(),Gte=Tf();Ute(TK,"factory",Gte);IK.exports=TK});var LK=s((fIe,RK)=>{"use strict";var xte=W().isPrimitive,Dte=M().isPrimitive,Rf=q(),Hte=vr();function Wte(r,e){return xte(r)?!Dte(e)||Hte(e)?new TypeError(Rf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Rf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Rf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}RK.exports=Wte});var Mf=s((cIe,VK)=>{"use strict";var Mt=b(),Au=L(),PK=B(),vn=O(),FK=T(),Lf=ge(),MK=cr().isPrimitive,BK=I(),jK=_(),zte=C(),kK=E(),fn=If().factory,_u=$i().factory,Pf=mt(),Ff=pr(),CK=ca(),Xte=j(),We=q(),Jte=LK();function Yte(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=fn(i);else if(arguments.length===1){if(i=arguments[0],!FK(i))throw new TypeError(We("invalid argument. Options argument must be an object. Value: `%s`.",i));if(vn(i,"copy")&&!MK(i.copy))throw new TypeError(We("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(vn(i,"prng")){if(!BK(i.prng))throw new TypeError(We("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=fn({prng:i.prng})}else{if(vn(i,"state")&&!Lf(i.state))throw new TypeError(We("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=CK({},i),i.copy===!1?u=!1:i.state&&(i.state=Pf(i.state.length,i.state,1,new Ff(i.state.length),1)),i.copy=!1,t=fn(i)}}else{if(f=arguments[0],v=arguments[1],o=Jte(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!FK(i))throw new TypeError(We("invalid argument. Options argument must be an object. Value: `%s`.",i));if(vn(i,"copy")&&!MK(i.copy))throw new TypeError(We("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(vn(i,"prng")){if(!BK(i.prng))throw new TypeError(We("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=fn({prng:i.prng})}else{if(vn(i,"state")&&!Lf(i.state))throw new TypeError(We("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=CK({},i),i.copy===!1?u=!1:i.state&&(i.state=Pf(i.state.length,i.state,1,new Ff(i.state.length),1)),i.copy=!1,t=fn(i)}}else i={copy:!1},t=fn(i)}return i&&i.prng?f===void 0?r=_u({prng:i.prng}):r=_u(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=_u({state:e,copy:!1}):r=_u(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=y,a=t.PRNG,Mt(n,"NAME","negative-binomial"),i&&i.prng?(Mt(n,"seed",null),Mt(n,"seedLength",null),PK(n,"state",jK(null),zte),Mt(n,"stateLength",null),Mt(n,"byteLength",null),Mt(n,"toJSON",jK(null))):(Au(n,"seed",c),Au(n,"seedLength",l),PK(n,"state",h,d),Au(n,"stateLength",p),Au(n,"byteLength",g),Mt(n,"toJSON",m)),Mt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(S){if(!Lf(S))throw new TypeError(We("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));u&&(S=Pf(S.length,S,1,new Ff(S.length),1)),a.state=S}function m(){var S={};return S.type="PRNG",S.name=n.NAME,S.state=Xte(a.state),f===void 0?S.params=[]:S.params=[f,v],S}function y(){return t(r())}function N(S,F){return kK(S)||kK(F)||F<=0||F>=1?NaN:t(r(S,F/(1-F)))}}VK.exports=Yte});var GK=s((lIe,UK)=>{"use strict";var $te=Mf(),Zte=$te();UK.exports=Zte});var HK=s((pIe,DK)=>{"use strict";var Qte=b(),xK=GK(),Kte=Mf();Qte(xK,"factory",Kte);DK.exports=xK});var XK=s((gIe,zK)=>{"use strict";var rie=M().isPrimitive,eie=W().isPrimitive,WK=q(),tie=vr();function iie(r,e){return!rie(r)||tie(r)?new TypeError(WK("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):eie(e)?null:new TypeError(WK("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}zK.exports=iie});var YK=s((mIe,JK)=>{"use strict";function nie(r,e,t){return e+t*r()}JK.exports=nie});var Bf=s((dIe,irr)=>{"use strict";var Bt=b(),Tu=L(),$K=B(),ZK=T(),QK=I(),KK=O(),rrr=_(),aie=C(),cn=bt().factory,err=E(),sie=j(),Iu=q(),uie=XK(),trr=YK();function oie(){var r,e,t,i,n,a,u;if(arguments.length===0)e=cn();else if(arguments.length===1){if(t=arguments[0],!ZK(t))throw new TypeError(Iu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KK(t,"prng")){if(!QK(t.prng))throw new TypeError(Iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else{if(u=arguments[0],r=arguments[1],a=uie(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!ZK(t))throw new TypeError(Iu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KK(t,"prng")){if(!QK(t.prng))throw new TypeError(Iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else e=cn()}return u===void 0?n=d:n=h,i=e.PRNG,Bt(n,"NAME","normal"),t&&t.prng?(Bt(n,"seed",null),Bt(n,"seedLength",null),$K(n,"state",rrr(null),aie),Bt(n,"stateLength",null),Bt(n,"byteLength",null),Bt(n,"toJSON",rrr(null))):(Tu(n,"seed",o),Tu(n,"seedLength",v),$K(n,"state",l,p),Tu(n,"stateLength",f),Tu(n,"byteLength",c),Bt(n,"toJSON",g)),Bt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=sie(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return trr(e,u,r)}function d(m,y){return err(m)||err(y)||y<=0?NaN:trr(e,m,y)}}irr.exports=oie});var arr=s((hIe,nrr)=>{"use strict";var vie=Bf(),fie=vie();nrr.exports=fie});var orr=s((yIe,urr)=>{"use strict";var cie=b(),srr=arr(),lie=Bf();cie(srr,"factory",lie);urr.exports=srr});var lrr=s((qIe,crr)=>{"use strict";var vrr=W().isPrimitive,frr=q();function pie(r,e){return vrr(r)?vrr(e)?null:new TypeError(frr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(frr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}crr.exports=pie});var grr=s((bIe,prr)=>{"use strict";var gie=D();function mie(r,e,t){return t/gie(r(),1/e)}prr.exports=mie});var jf=s((wIe,Err)=>{"use strict";var ze=b(),Ru=L(),mrr=B(),drr=T(),hrr=I(),yrr=O(),qrr=_(),die=C(),Lu=J().factory,brr=E(),hie=j(),Pu=q(),yie=lrr(),wrr=grr();function qie(){var r,e,t,i,n,a;if(arguments.length===0)i=Lu();else if(arguments.length===1){if(t=arguments[0],!drr(t))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(yrr(t,"prng")){if(!hrr(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Lu(t)}else{if(r=arguments[0],e=arguments[1],a=yie(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!drr(t))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(yrr(t,"prng")){if(!hrr(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Lu(t)}else i=Lu()}return r===void 0?n=h:n=g,ze(n,"NAME","pareto-type1"),t&&t.prng?(ze(n,"seed",null),ze(n,"seedLength",null),mrr(n,"state",qrr(null),die),ze(n,"stateLength",null),ze(n,"byteLength",null),ze(n,"toJSON",qrr(null)),ze(n,"PRNG",i)):(Ru(n,"seed",u),Ru(n,"seedLength",o),mrr(n,"state",c,l),Ru(n,"stateLength",v),Ru(n,"byteLength",f),ze(n,"toJSON",p),ze(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=hie(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return wrr(i,r,e)}function h(d,m){return brr(d)||brr(m)||d<=0||m<=0?NaN:wrr(i,d,m)}}Err.exports=qie});var Srr=s((EIe,Nrr)=>{"use strict";var bie=jf(),wie=bie();Nrr.exports=wie});var _rr=s((NIe,Arr)=>{"use strict";var Eie=b(),Orr=Srr(),Nie=jf();Eie(Orr,"factory",Nie);Arr.exports=Orr});var Irr=s((SIe,Trr)=>{"use strict";var Sie=U(),Oie=P();function Aie(r,e){return e*Sie(-2*Oie(r()))}Trr.exports=Aie});var kf=s((OIe,jrr)=>{"use strict";var Xe=b(),Fu=L(),Rrr=B(),_ie=W().isPrimitive,Lrr=T(),Prr=I(),Frr=O(),Mrr=_(),Tie=C(),Mu=J().factory,Iie=E(),Rie=j(),Bu=q(),Brr=Irr();function Lie(){var r,e,t,i;if(arguments.length===0)t=Mu();else if(arguments.length===1&&Lrr(arguments[0]))if(e=arguments[0],Frr(e,"prng")){if(!Prr(e.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Mu(e);else{if(r=arguments[0],!_ie(r))throw new TypeError(Bu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Lrr(e))throw new TypeError(Bu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Frr(e,"prng")){if(!Prr(e.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Mu(e)}else t=Mu()}return r===void 0?i=p:i=l,Xe(i,"NAME","rayleigh"),e&&e.prng?(Xe(i,"seed",null),Xe(i,"seedLength",null),Rrr(i,"state",Mrr(null),Tie),Xe(i,"stateLength",null),Xe(i,"byteLength",null),Xe(i,"toJSON",Mrr(null)),Xe(i,"PRNG",t)):(Fu(i,"seed",n),Fu(i,"seedLength",a),Rrr(i,"state",v,f),Fu(i,"stateLength",u),Fu(i,"byteLength",o),Xe(i,"toJSON",c),Xe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Rie(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return Brr(t,r)}function p(g){return Iie(g)||g<=0?NaN:Brr(t,g)}}jrr.exports=Lie});var Crr=s((AIe,krr)=>{"use strict";var Pie=kf(),Fie=Pie();krr.exports=Fie});var Grr=s((_Ie,Urr)=>{"use strict";var Mie=b(),Vrr=Crr(),Bie=kf();Mie(Vrr,"factory",Bie);Urr.exports=Vrr});var Gf=s((TIe,$rr)=>{"use strict";var jt=b(),ju=L(),xrr=B(),ln=O(),Drr=W().isPrimitive,Hrr=T(),Cf=ge(),Wrr=cr().isPrimitive,jie=E(),zrr=I(),Xrr=_(),kie=C(),ku=ga().factory,pn=bt().factory,Vf=mt(),Uf=pr(),Jrr=ca(),Cie=j(),ve=q(),Yrr=U();function Vie(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=pn(n);else if(arguments.length===1)if(Hrr(arguments[0])){if(n=arguments[0],ln(n,"copy")&&!Wrr(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ln(n,"prng")){if(!zrr(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=pn({prng:n.prng})}else{if(ln(n,"state")&&!Cf(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Jrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Vf(n.state.length,n.state,1,new Uf(n.state.length),1)),n.copy=!1,t=pn(n)}}else{if(o=arguments[0],!Drr(o))throw new TypeError(ve("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=pn(n)}else{if(o=arguments[0],!Drr(o))throw new TypeError(ve("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!Hrr(n))throw new TypeError(ve("invalid argument. Options argument must be an object. Value: `%s`.",n));if(ln(n,"copy")&&!Wrr(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ln(n,"prng")){if(!zrr(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=pn({prng:n.prng})}else{if(ln(n,"state")&&!Cf(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Jrr({},n),n.copy===!1?u=!1:n.state&&(n.state=Vf(n.state.length,n.state,1,new Uf(n.state.length),1)),n.copy=!1,t=pn(n)}}return n&&n.prng?o===void 0?r=ku({prng:n.prng}):r=ku(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=ku({state:e,copy:!1}):r=ku(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,jt(a,"NAME","t"),n&&n.prng?(jt(a,"seed",null),jt(a,"seedLength",null),xrr(a,"state",Xrr(null),kie),jt(a,"stateLength",null),jt(a,"byteLength",null),jt(a,"toJSON",Xrr(null))):(ju(a,"seed",v),ju(a,"seedLength",f),xrr(a,"state",p,g),ju(a,"stateLength",c),ju(a,"byteLength",l),jt(a,"toJSON",h)),jt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(y){if(!Cf(y))throw new TypeError(ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));u&&(y=Vf(y.length,y,1,new Uf(y.length),1)),i.state=y}function h(){var y={};return y.type="PRNG",y.name=a.NAME,y.state=Cie(i.state),o===void 0?y.params=[]:y.params=[o],y}function d(){return t()/Yrr(r()/o)}function m(y){return jie(y)||y<=0?NaN:t()/Yrr(r(y)/y)}}$rr.exports=Vie});var Qrr=s((IIe,Zrr)=>{"use strict";var Uie=Gf(),Gie=Uie();Zrr.exports=Gie});var eer=s((RIe,rer)=>{"use strict";var xie=b(),Krr=Qrr(),Die=Gf();xie(Krr,"factory",Die);rer.exports=Krr});var ier=s((LIe,ter)=>{"use strict";var xf=M().isPrimitive,Cu=q(),Df=vr();function Hie(r,e,t){return!xf(r)||Df(r)?new TypeError(Cu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!xf(e)||Df(e)?new TypeError(Cu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!xf(t)||Df(t)?new TypeError(Cu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Cu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}ter.exports=Hie});var ser=s((PIe,aer)=>{"use strict";var ner=U();function Wie(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+ner(a*u)):(a=(t-e)*(t-i),t-ner(a*(1-u)))}aer.exports=Wie});var Wf=s((FIe,per)=>{"use strict";var Je=b(),Vu=L(),uer=B(),oer=T(),ver=I(),fer=O(),cer=_(),zie=C(),Uu=J().factory,Hf=E(),Xie=j(),Gu=q(),Jie=ier(),ler=ser();function Yie(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Uu();else if(arguments.length===1){if(r=arguments[0],!oer(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fer(r,"prng")){if(!ver(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=Jie(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!oer(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fer(r,"prng")){if(!ver(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else e=Uu()}return n===void 0?t=d:t=h,Je(t,"NAME","triangular"),r&&r.prng?(Je(t,"seed",null),Je(t,"seedLength",null),uer(t,"state",cer(null),zie),Je(t,"stateLength",null),Je(t,"byteLength",null),Je(t,"toJSON",cer(null)),Je(t,"PRNG",e)):(Vu(t,"seed",o),Vu(t,"seedLength",v),uer(t,"state",l,p),Vu(t,"stateLength",f),Vu(t,"byteLength",c),Je(t,"toJSON",g),Je(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Xie(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return ler(e,n,a,u)}function d(m,y,N){return Hf(m)||Hf(y)||Hf(N)||!(m<=N&&N<=y)?NaN:ler(e,m,y,N)}}per.exports=Yie});var mer=s((MIe,ger)=>{"use strict";var $ie=Wf(),Zie=$ie();ger.exports=Zie});var yer=s((BIe,her)=>{"use strict";var Qie=b(),der=mer(),Kie=Wf();Qie(der,"factory",Kie);her.exports=der});var Eer=s((jIe,wer)=>{"use strict";var qer=M().isPrimitive,zf=q(),ber=vr();function rne(r,e){return!qer(r)||ber(r)?new TypeError(zf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!qer(e)||ber(e)?new TypeError(zf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(zf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}wer.exports=rne});var Ser=s((kIe,Ner)=>{"use strict";function ene(r,e,t){var i=r();return t*i+(1-i)*e}Ner.exports=ene});var Xf=s((CIe,Per)=>{"use strict";var Ye=b(),xu=L(),Oer=B(),Aer=T(),_er=I(),Ter=O(),Ier=_(),tne=C(),Du=J().factory,Rer=E(),ine=j(),Hu=q(),nne=Eer(),Ler=Ser();function ane(){var r,e,t,i,n,a;if(arguments.length===0)e=Du();else if(arguments.length===1){if(r=arguments[0],!Aer(r))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ter(r,"prng")){if(!_er(r.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Du(r)}else{if(n=arguments[0],a=arguments[1],i=nne(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Aer(r))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ter(r,"prng")){if(!_er(r.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Du(r)}else e=Du()}return n===void 0?t=h:t=g,Ye(t,"NAME","uniform"),r&&r.prng?(Ye(t,"seed",null),Ye(t,"seedLength",null),Oer(t,"state",Ier(null),tne),Ye(t,"stateLength",null),Ye(t,"byteLength",null),Ye(t,"toJSON",Ier(null)),Ye(t,"PRNG",e)):(xu(t,"seed",u),xu(t,"seedLength",o),Oer(t,"state",c,l),xu(t,"stateLength",v),xu(t,"byteLength",f),Ye(t,"toJSON",p),Ye(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=ine(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Ler(e,n,a)}function h(d,m){return Rer(d)||Rer(m)||d>=m?NaN:Ler(e,d,m)}}Per.exports=ane});var Mer=s((VIe,Fer)=>{"use strict";var sne=Xf(),une=sne();Fer.exports=une});var ker=s((UIe,jer)=>{"use strict";var one=b(),Ber=Mer(),vne=Xf();one(Ber,"factory",vne);jer.exports=Ber});var Ger=s((GIe,Uer)=>{"use strict";var Cer=W().isPrimitive,Ver=q();function fne(r,e){return Cer(r)?Cer(e)?null:new TypeError(Ver("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(Ver("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}Uer.exports=fne});var Der=s((xIe,xer)=>{"use strict";var cne=D(),lne=P();function pne(r,e,t){return t*cne(-lne(1-r()),1/e)}xer.exports=pne});var Jf=s((DIe,Zer)=>{"use strict";var $e=b(),Wu=L(),Her=B(),Wer=T(),zer=I(),Xer=O(),Jer=_(),gne=C(),zu=J().factory,Yer=E(),mne=j(),Xu=q(),dne=Ger(),$er=Der();function hne(){var r,e,t,i,n,a;if(arguments.length===0)t=zu();else if(arguments.length===1){if(e=arguments[0],!Wer(e))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xer(e,"prng")){if(!zer(e.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e)}else{if(a=arguments[0],r=arguments[1],n=dne(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!Wer(e))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xer(e,"prng")){if(!zer(e.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e)}else t=zu()}return r===void 0?i=h:i=g,$e(i,"NAME","weibull"),e&&e.prng?($e(i,"seed",null),$e(i,"seedLength",null),Her(i,"state",Jer(null),gne),$e(i,"stateLength",null),$e(i,"byteLength",null),$e(i,"toJSON",Jer(null)),$e(i,"PRNG",t)):(Wu(i,"seed",u),Wu(i,"seedLength",o),Her(i,"state",c,l),Wu(i,"stateLength",v),Wu(i,"byteLength",f),$e(i,"toJSON",p),$e(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=mne(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return $er(t,a,r)}function h(d,m){return Yer(d)||Yer(m)||d<=0||m<=0?NaN:$er(t,d,m)}}Zer.exports=hne});var Ker=s((HIe,Qer)=>{"use strict";var yne=Jf(),qne=yne();Qer.exports=qne});var ttr=s((WIe,etr)=>{"use strict";var bne=b(),rtr=Ker(),wne=Jf();bne(rtr,"factory",wne);etr.exports=rtr});var ntr=s((zIe,itr)=>{"use strict";var Ene=dr(),Nne=gr().isPrimitive,Sne=q(),One=Ra();function Ane(r){if(Nne(r))return r;if(Ene(r))return One(r);throw new TypeError(Sne("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}itr.exports=Ane});var str=s((XIe,atr)=>{"use strict";var _ne=ntr();atr.exports=_ne});var otr=s((JIe,utr)=>{"use strict";var k=rr(),Tne=qx().factory,Ine=Rx().factory,Rne=QD().factory,Lne=kH().factory,Pne=yW().factory,Fne=FW().factory,Mne=fz().factory,Bne=Pz().factory,jne=ga().factory,kne=AX().factory,Cne=zX().factory,Vne=fJ().factory,Une=SJ().factory,Gne=DJ().factory,xne=sY().factory,Dne=$i().factory,Hne=wY().factory,Wne=UY().factory,zne=f$().factory,Xne=bt().factory,Jne=A$().factory,Yne=z$().factory,$ne=fZ().factory,Zne=YZ().factory,Qne=pQ().factory,Kne=LQ().factory,rae=xQ().factory,eae=tK().factory,tae=J().factory,iae=HK().factory,nae=orr().factory,aae=_rr().factory,sae=If().factory,uae=Grr().factory,oae=eer().factory,vae=yer().factory,fae=ker().factory,cae=ttr().factory,lae=str();function pae(r){return k(r,"arcsine",Tne),k(r,"bernoulli",Ine),k(r,"beta",Rne),k(r,"betaprime",Lne),k(r,"binomial",Pne),k(r,"boxMuller",Fne),k(r,"cauchy",Mne),k(r,"chi",Bne),k(r,"chisquare",jne),k(r,"cosine",kne),k(r,"discreteUniform",Cne),k(r,"erlang",Vne),k(r,"exponential",Une),k(r,"f",Gne),k(r,"frechet",xne),k(r,"gamma",Dne),k(r,"geometric",Hne),k(r,"gumbel",Wne),k(r,"hypergeometric",zne),k(r,"improvedZiggurat",Xne),k(r,"invgamma",Jne),k(r,"kumaraswamy",Yne),k(r,"laplace",$ne),k(r,"levy",Zne),k(r,"logistic",Qne),k(r,"lognormal",Kne),k(r,"minstd",rae),k(r,"minstdShuffle",eae),k(r,"mt19937",tae),k(r,"negativeBinomial",iae),k(r,"normal",nae),k(r,"pareto1",aae),k(r,"poisson",sae),k(r,"rayleigh",uae),k(r,"t",oae),k(r,"triangular",vae),k(r,"uniform",fae),k(r,"weibull",cae),r.base={},k(r.base,"normalizeSeed",lae),r}utr.exports=pae});var ftr=s((YIe,vtr)=>{"use strict";var gae=T(),Ju=O(),mae=gr().isPrimitive,dae=te().isPrimitive,hae=hr().isPrimitive,yae=$a().isPrimitive,qa=q();function qae(r,e){return gae(e)?Ju(e,"period")&&(r.period=e.period,!dae(e.period))?new TypeError(qa("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Ju(e,"amplitude")&&(r.amplitude=e.amplitude,!yae(e.amplitude))?new TypeError(qa("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Ju(e,"offset")&&(r.offset=e.offset,!mae(e.offset))?new TypeError(qa("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Ju(e,"iter")&&(r.iter=e.iter,!hae(e.iter))?new TypeError(qa("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(qa("invalid argument. Options argument must be an object. Value: `%s`.",e))}vtr.exports=qae});var gtr=s(($Ie,ptr)=>{"use strict";var Yf=b(),ctr=wn(),bae=kv(),wae=S0(),Eae=N0(),Nae=Vr(),Sae=ftr();function ltr(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=Sae(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=Nae/e.period,o=e.amplitude/Eae,v=0,t={},Yf(t,"next",f),Yf(t,"return",c),ctr&&Yf(t,ctr,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*wae(bae(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return ltr(e)}}ptr.exports=ltr});var dtr=s((ZIe,mtr)=>{"use strict";var Oae=gtr();mtr.exports=Oae});var ytr=s((QIe,htr)=>{"use strict";var Aae=rr(),_ae=dtr();function Tae(r){return Aae(r,"iterSawtoothWave",_ae),r}htr.exports=Tae});var btr=s((KIe,qtr)=>{"use strict";var Iae=17976931348623157e292;qtr.exports=Iae});var Yu=s((rRe,wtr)=>{"use strict";var Rae=709.782712893384;wtr.exports=Rae});var Ntr=s((eRe,Etr)=>{"use strict";var Lae=sr();function Pae(r,e){var t,i,n,a;if(n=Lae(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Etr.exports=Pae});var Otr=s((tRe,Str)=>{"use strict";function Fae(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Str.exports=Fae});var _tr=s((iRe,Atr)=>{"use strict";function Mae(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Atr.exports=Mae});var Itr=s((nRe,Ttr)=>{"use strict";function Bae(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Ttr.exports=Bae});var Ltr=s((aRe,Rtr)=>{"use strict";function jae(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Rtr.exports=jae});var Ftr=s((sRe,Ptr)=>{"use strict";function kae(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Ptr.exports=kae});var Btr=s((uRe,Mtr)=>{"use strict";function Cae(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Mtr.exports=Cae});var ktr=s((oRe,jtr)=>{"use strict";function Vae(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}jtr.exports=Vae});var Vtr=s((vRe,Ctr)=>{"use strict";function Uae(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Ctr.exports=Uae});var Dtr=s((fRe,xtr)=>{"use strict";var Gae=E(),Utr=sr(),xae=de(),Dae=R(),Hae=V(),Wae=Otr(),zae=_tr(),Xae=Itr(),Jae=Ltr(),Yae=Ftr(),$ae=Btr(),Zae=ktr(),Qae=Vtr(),$u=1e-300,Kae=13877787807814457e-33,Gtr=.8450629115104675,r0e=.12837916709551256,e0e=1,t0e=-.0023621185607526594,i0e=1,n0e=-.009864944034847148,a0e=1,s0e=-.0098649429247001,u0e=1;function o0e(r){var e,t,i,n,a,u,o,v;if(Gae(r))return NaN;if(r===Dae)return 0;if(r===Hae)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Kae?1-r:(i=r*r,n=r0e+i*Wae(i),a=e0e+i*zae(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=t0e+a*Xae(a),v=i0e+a*Jae(a),e?1+Gtr+o/v:1-Gtr-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=n0e+a*Yae(a),a=a0e+a*$ae(a);else{if(r<-6)return 2-$u;n=s0e+a*Zae(a),a=u0e+a*Qae(a)}return i=xae(t,0),n=Utr(-(i*i)-.5625)*Utr((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-$u:$u*$u}xtr.exports=o0e});var si=s((cRe,Htr)=>{"use strict";var v0e=Dtr();Htr.exports=v0e});var Xtr=s((lRe,ztr)=>{"use strict";var f0e=si(),Wtr=U(),c0e=sr(),l0e=Vr();function p0e(r,e){var t,i,n,a,u;if(a=f0e(Wtr(e)),a!==0&&r>1){for(i=c0e(-e)/Wtr(l0e*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}ztr.exports=p0e});var $f=s((pRe,Jtr)=>{"use strict";var g0e=-708.3964185322641;Jtr.exports=g0e});var Qtr=s((gRe,Ztr)=>{"use strict";var gn=sr(),Zu=D(),m0e=P(),Ytr=Yu(),$tr=$f();function d0e(r,e){var t,i;return i=r*m0e(e),e>=1?i<Ytr&&-e>$tr?t=Zu(e,r)*gn(-e):r>=1?t=Zu(e/gn(e/r),r):t=gn(i-e):i>$tr?t=Zu(e,r)*gn(-e):e/r<Ytr?t=Zu(e/gn(e/r),r):t=gn(i-e),t}Ztr.exports=d0e});var Zf=s((mRe,Ktr)=>{"use strict";function h0e(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Ktr.exports=h0e});var eir=s((dRe,rir)=>{"use strict";var y0e=Function;rir.exports=y0e});var iir=s((hRe,tir)=>{"use strict";var q0e=eir();tir.exports=q0e});var air=s((yRe,nir)=>{"use strict";var b0e=iir(),w0e=Zf();function E0e(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new b0e(e)();function a(u){return w0e(r,u)}}nir.exports=E0e});var oir=s((qRe,uir)=>{"use strict";var N0e=b(),sir=Zf(),S0e=air();N0e(sir,"factory",S0e);uir.exports=sir});var ui=s((bRe,vir)=>{"use strict";var O0e=2220446049250313e-31;vir.exports=O0e});var cir=s((wRe,fir)=>{"use strict";var A0e=eval;fir.exports=A0e});var pir=s((ERe,lir)=>{"use strict";var _0e=cir();function T0e(){var r;try{_0e('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}lir.exports=T0e});var Qf=s((NRe,gir)=>{"use strict";var I0e=pir();gir.exports=I0e});var dir=s((SRe,mir)=>{"use strict";var Qu=Y(),R0e=ui(),L0e=1e6;function P0e(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||R0e,a=o.maxTerms||L0e,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Qu(i*u)>=Qu(n)||--a===0)break}else do n=r(),u+=n;while(Qu(i*u)<Qu(n)&&--a);return u}mir.exports=P0e});var qir=s((ORe,yir)=>{"use strict";var hir=Y(),F0e=ui(),M0e=1e6;function B0e(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||F0e,n=u.maxTerms||M0e,a=u.initialValue||0;do i=r(),a+=i;while(hir(t*a)<hir(i)&&--n);return a}yir.exports=B0e});var Ku=s((ARe,bir)=>{"use strict";var j0e=Qf(),k0e=dir(),C0e=qir(),Kf;j0e()?Kf=k0e:Kf=C0e;bir.exports=Kf});var Eir=s((_Re,wir)=>{"use strict";function V0e(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}wir.exports=V0e});var Sir=s((TRe,Nir)=>{"use strict";var U0e=Y(),G0e=P(),x0e=ui(),D0e=Ku(),H0e=Eir();function W0e(r){var e,t;return r<=-1?NaN:(t=U0e(r),t>.95?G0e(1+r)-r:t<x0e?-r*r/2:(e={initialValue:-r},D0e(H0e(r),e)))}Nir.exports=W0e});var Air=s((IRe,Oir)=>{"use strict";var z0e=Sir();Oir.exports=z0e});var Tir=s((RRe,_ir)=>{"use strict";function X0e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}_ir.exports=X0e});var Rir=s((LRe,Iir)=>{"use strict";function J0e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Iir.exports=J0e});var Pir=s((PRe,Lir)=>{"use strict";function Y0e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Lir.exports=Y0e});var Mir=s((FRe,Fir)=>{"use strict";function $0e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Fir.exports=$0e});var jir=s((MRe,Bir)=>{"use strict";function Z0e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Bir.exports=Z0e});var Cir=s((BRe,kir)=>{"use strict";function Q0e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}kir.exports=Q0e});var Uir=s((jRe,Vir)=>{"use strict";function K0e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Vir.exports=K0e});var xir=s((kRe,Gir)=>{"use strict";function rse(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Gir.exports=rse});var Hir=s((CRe,Dir)=>{"use strict";function ese(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Dir.exports=ese});var zir=s((VRe,Wir)=>{"use strict";var tse=oir(),ise=Air(),nse=si(),rc=U(),ase=sr(),sse=vt(),use=Tir(),ose=Rir(),vse=Pir(),fse=Mir(),cse=jir(),lse=Cir(),pse=Uir(),gse=xir(),mse=Hir(),$r=[0,0,0,0,0,0,0,0,0,0];function dse(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-ise(i),a=r*n,u=rc(2*n),e<r&&(u=-u),$r[0]=use(u),$r[1]=ose(u),$r[2]=vse(u),$r[3]=fse(u),$r[4]=cse(u),$r[5]=lse(u),$r[6]=pse(u),$r[7]=gse(u),$r[8]=mse(u),$r[9]=-.0005967612901927463,t=tse($r,1/r),t*=ase(-a)/rc(sse*r),e<r&&(t=-t),t+=nse(rc(a))/2,t}Wir.exports=dse});var Jir=s((URe,Xir)=>{"use strict";function hse(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}Xir.exports=hse});var $ir=s((GRe,Yir)=>{"use strict";var yse=Ku(),qse=Jir();function bse(r,e,t){var i,n;return t=t||0,n=qse(r,e),i=yse(n,{initialValue:t}),i}Yir.exports=bse});var Qir=s((xRe,Zir)=>{"use strict";function wse(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Zir.exports=wse});var rnr=s((DRe,Kir)=>{"use strict";var Ese=Qir();Kir.exports=Ese});var tnr=s((HRe,enr)=>{"use strict";var Nse=rnr();enr.exports=Nse});var anr=s((WRe,nnr)=>{"use strict";var Sse=p3(),inr=E(),ec=V();function Ose(r,e){return inr(r)||inr(e)?NaN:r===ec||e===ec?ec:r===e&&r===0?Sse(r)?r:e:r<e?r:e}nnr.exports=Ose});var unr=s((zRe,snr)=>{"use strict";var Ase=anr();snr.exports=Ase});var vnr=s((XRe,onr)=>{"use strict";var _se=10.900511;onr.exports=_se});var tc=s((JRe,fnr)=>{"use strict";var Tse=2.718281828459045;fnr.exports=Tse});var pnr=s((YRe,lnr)=>{"use strict";var Ise=tnr(),Rse=Qn(),Lse=xi(),Pse=ut(),Fse=U(),Mse=Y(),kt=sr(),ba=D(),ic=K3(),nc=unr(),cnr=P(),ro=Yu(),wa=$f(),ac=vnr(),Bse=tc();function jse(r,e){var t,i,n,a,u,o,v;return n=r+ac-.5,v=(e-r-ac+.5)/n,r<1?e<=wa?kt(r*cnr(e)-e-Rse(r)):ba(e,r)*kt(-e)/Lse(r):(Mse(v*v*r)<=100&&r>150?(t=r*(Pse(v)-v)+e*(.5-ac)/n,t=kt(t)):(a=r*cnr(e/n),u=r-e,nc(a,u)<=wa||ic(a,u)>=ro?(i=u/r,nc(a,u)/2>wa&&ic(a,u)/2<ro?(o=ba(e/n,r/2)*kt(u/2),t=o*o):nc(a,u)/4>wa&&ic(a,u)/4<ro&&e>r?(o=ba(e/n,r/4)*kt(u/4),t=o*o,t*=t):i>wa&&i<ro?t=ba(e*kt(i)/n,r):t=kt(a+u)):t=ba(e/n,r)*kt(u)),t*=Fse(n/Bse)/Ise(r),t)}lnr.exports=jse});var mnr=s(($Re,gnr)=>{"use strict";var kse=.34657359027997264;gnr.exports=kse});var hnr=s((ZRe,dnr)=>{"use strict";function Cse(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}dnr.exports=Cse});var Nnr=s((QRe,Enr)=>{"use strict";var Vse=E(),ynr=ar(),sc=he(),Use=Vi(),qnr=R(),Gse=V(),bnr=ue(),xse=mnr(),Dse=hnr(),Hse=709.782712893384,uc=.6931471803691238,oc=19082149292705877e-26,wnr=1.4426950408889634,Wse=38.816242111356935,zse=1.0397207708399179;function Xse(r){var e,t,i,n,a,u,o,v,f,c,l,p,g;if(r===qnr||Vse(r))return r;if(r===Gse)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=Wse){if(i)return-1;if(v>=Hse)return qnr}if(u=ynr(v)|0,v>xse)v<zse?i?(n=r+uc,a=-oc,g=-1):(n=r-uc,a=oc,g=1):(i?g=wnr*r-.5:g=wnr*r+.5,g|=0,l=g,n=r-l*uc,a=l*oc),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,f=r*e,o=1+f*Dse(f),l=3-o*e,p=f*((o-l)/(6-r*l)),g===0?r-(r*p-f):(t=Use(bnr+g<<20,0),p=r*(p-c)-c,p-=f,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(v=1-(p-r),g===1024?(n=ynr(v)+(g<<20)|0,v=sc(v,n)):v*=t,v-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=sc(l,n),v=l-(p-r)):(n=bnr-g<<20|0,l=sc(l,n),v=r-(p+l),v+=1),v*=t,v))}Enr.exports=Xse});var vc=s((KRe,Snr)=>{"use strict";var Jse=Nnr();Snr.exports=Jse});var Tnr=s((rLe,_nr)=>{"use strict";var Onr=E(),Anr=Y(),Yse=vc(),$se=P(),Zse=D(),Qse=M0();function Kse(r,e){var t;if(Onr(r)||Onr(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Anr(e*(r-1))<.5||Anr(e)<.2)&&(t=$se(r)*e,t<.5))return Yse(t)}else if(Qse(e)!==e)return NaN;return Zse(r,e)-1}_nr.exports=Kse});var Rnr=s((eLe,Inr)=>{"use strict";var rue=Tnr();Inr.exports=rue});var Pnr=s((tLe,Lnr)=>{"use strict";function eue(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Lnr.exports=eue});var Mnr=s((iLe,Fnr)=>{"use strict";function tue(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Fnr.exports=tue});var jnr=s((nLe,Bnr)=>{"use strict";function iue(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Bnr.exports=iue});var Cnr=s((aLe,knr)=>{"use strict";var fc=P(),nue=ui(),aue=Pnr(),sue=Mnr(),uue=jnr(),oue=.15896368026733398,vue=.5281534194946289,fue=.45201730728149414;function cue(r,e,t){var i,n,a,u;if(r<nue)return-fc(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=fc(r);while(r>=3);t=r-2}return a=t*(r+1),u=aue(t),n+=a*oue+a*u,n}return r<1&&(n+=-fc(r),t=e,e=r,r+=1),r<=1.5?(a=sue(e),i=e*t,n+=i*vue+i*a,n):(a=t*e,u=uue(-t),n+=a*fue+a*u,n)}knr.exports=cue});var Dnr=s((sLe,xnr)=>{"use strict";var Vnr=xi(),Unr=vc(),lue=ut(),pue=E(),Gnr=Cnr();function gue(r){return pue(r)?NaN:r<0?r<-.5?Vnr(1+r)-1:Unr(-lue(r)+Gnr(r+2,r+1,r)):r<2?Unr(Gnr(r+1,r,r-1)):Vnr(1+r)-1}xnr.exports=gue});var Wnr=s((uLe,Hnr)=>{"use strict";var mue=Dnr();Hnr.exports=mue});var Xnr=s((oLe,znr)=>{"use strict";function due(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}znr.exports=due});var Ynr=s((vLe,Jnr)=>{"use strict";var hue=Rnr(),yue=Ku(),que=Wnr(),bue=Xnr();function wue(r,e,t){var i,n,a,u,o;return n=que(r),a=(n+1)/r,u=hue(e,r),n-=u,n/=r,o=bue(r,e),u+=1,i=t?a:0,n=-u*yue(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Jnr.exports=wue});var cc=s((fLe,$nr)=>{"use strict";var Eue=11754943508222875e-54;$nr.exports=Eue});var Qnr=s((cLe,Znr)=>{"use strict";var eo=Y(),fe=cc(),Nue=ui(),Sue=1e6;function Oue(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=fe),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=fe),o=f[1]+f[0]/o,o===0&&(o=fe),v=1/v,n=o*v,u*=n);while(eo(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=fe),o=f[1]+f[0]/o,o===0&&(o=fe),v=1/v,n=o*v,u*=n);while(f&&eo(n-1)>e&&--t);return a/u}function Aue(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=fe),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=fe),u=v[1]+v[0]/u,u===0&&(u=fe),o=1/o,n=u*o,a*=n);while(v&&eo(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=fe),u=v[1]+v[0]/u,u===0&&(u=fe),o=1/o,n=u*o,a*=n);while(v&&eo(n-1)>e&&--t);return a}function _ue(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Sue,n=i.tolerance||Nue,i.keep?Aue(r,n,t):Oue(r,n,t)}Znr.exports=_ue});var ear=s((lLe,rar)=>{"use strict";var Knr=Y(),Tue=ui(),mn=cc(),Iue=1e6;function Rue(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=mn),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=mn),a=v[1]+v[0]/a,a===0&&(a=mn),u=1/u,i=a*u,o*=i);while(v&&Knr(i-1)>e&&--t);return n/o}function Lue(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=mn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=mn),n=o[1]+o[0]/n,n===0&&(n=mn),a=1/a,i=n*a,u*=i);while(o&&Knr(i-1)>e&&--t);return u}function Pue(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||Tue,t=i.maxIter||Iue,i.keep?Lue(r,n,t):Rue(r,n,t)}rar.exports=Pue});var iar=s((pLe,tar)=>{"use strict";var Fue=Qf(),Mue=Qnr(),Bue=ear(),lc;Fue()?lc=Mue:lc=Bue;tar.exports=lc});var aar=s((gLe,nar)=>{"use strict";function jue(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}nar.exports=jue});var uar=s((mLe,sar)=>{"use strict";var kue=iar(),Cue=aar();function Vue(r,e){var t=Cue(r,e);return 1/(e-r+1+kue(t))}sar.exports=Vue});var yar=s((dLe,har)=>{"use strict";var Uue=Qn(),Gue=z(),Ea=xi(),oar=Y(),xue=sr(),far=D(),Zr=P(),Due=h3(),car=btr(),Hue=g3(),lar=Yu(),Wue=R(),zue=Ntr(),Xue=Xtr(),par=Qtr(),Jue=zir(),pc=$ir(),gar=pnr(),Yue=Ynr(),mar=uar(),$ue=170;function dar(r,e,t,i){var n,a,u,o,v,f,c,l,p,g,h,d,m,y,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=$ue&&!a)return l&&e*4<r?(p=e*Zr(r)-r,p+=Zr(mar(e,r))):!l&&e>4*r?(p=e*Zr(r)-r,o=0,p+=Zr(pc(e,r,o)/e)):(p=dar(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Zr(p)-e+(e-.5)*Zr(e),p+=Zr(Hue)):(p=e*Zr(r)-r,o=0,p+=Zr(pc(e,r,o)/e)):p=Zr(p)+Uue(e)),p>lar?Wue:xue(p);switch(c=e<30&&e<=r+1&&r<lar,c?(y=Gue(e),g=y===e,v=g?!1:oar(y-e)===.5):g=v=!1,g&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<Due&&e>1?u=6:r<.5?-.4/Zr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=oar((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=zue(e,r),a===!1&&(p*=Ea(e));break;case 1:p=Xue(e,r),a===!1&&(p*=Ea(e));break;case 2:p=a?gar(e,r):par(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:Ea(e),a||p>=1||car*p>o?(o/=p,a||e<1||car/e>o?(o*=-e,n=!0):o=0):o=0)),p*=pc(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=Yue(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?gar(e,r):par(e,r),p!==0&&(p*=mar(e,r));break;case 5:p=Jue(e,r),r>=e&&(l=!l);break;case 6:p=a?far(r,e)/Ea(e+1):far(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:Ea(e),p=d-p),p}har.exports=dar});var gc=s((hLe,qar)=>{"use strict";var Zue=yar();qar.exports=Zue});var war=s((yLe,bar)=>{"use strict";var Que=gc(),mc=E(),Kue=R();function roe(r,e,t){return mc(r)||mc(e)||mc(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Kue?1:Que(r*t,e)}bar.exports=roe});var Sar=s((qLe,Nar)=>{"use strict";var eoe=_(),toe=As().factory,ioe=gc(),Ear=E(),noe=R();function aoe(r,e){if(Ear(r)||Ear(e)||r<0||e<=0)return eoe(NaN);if(r===0)return toe(0);return t;function t(i){return i<=0?0:i===noe?1:ioe(i*e,r)}}Nar.exports=aoe});var dc=s((bLe,Aar)=>{"use strict";var soe=b(),Oar=war(),uoe=Sar();soe(Oar,"factory",uoe);Aar.exports=Oar});var Tar=s((wLe,_ar)=>{"use strict";var ooe=dc();function voe(r,e){return ooe(r,e/2,.5)}_ar.exports=voe});var Rar=s((ELe,Iar)=>{"use strict";var foe=dc().factory;function coe(r){return foe(r/2,.5)}Iar.exports=coe});var Far=s((NLe,Par)=>{"use strict";var loe=b(),Lar=Tar(),poe=Rar();loe(Lar,"factory",poe);Par.exports=Lar});var kar=s((SLe,jar)=>{"use strict";var goe=T(),moe=O(),doe=Za(),Mar=q(),Bar=["values","indices","*"];function hoe(r,e){return goe(e)?moe(e,"returns")&&(r.returns=e.returns,doe(Bar,r.returns)===-1)?new TypeError(Mar('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Bar.join('", "'),r.returns)):null:new TypeError(Mar("invalid argument. Options argument must be an object. Value: `%s`.",e))}jar.exports=hoe});var Var=s((OLe,Car)=>{"use strict";var yoe=O();function qoe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),yoe(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Car.exports=qoe});var Gar=s((ALe,Uar)=>{"use strict";var boe=O();function woe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),boe(t,n)?t[n].push(a):t[n]=[a];return t}Uar.exports=woe});var Dar=s((_Le,xar)=>{"use strict";var Eoe=O();function Noe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Eoe(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}xar.exports=Noe});var Xar=s((TLe,zar)=>{"use strict";var Har=Br(),War=q(),Soe=kar(),Ooe=Var(),Aoe=Gar(),_oe=Dar();function Toe(r,e,t){var i,n,a;if(!Har(r))throw new TypeError(War("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=Soe(i,e),n)throw n;a=t}if(!Har(a))throw new TypeError(War("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Ooe(r,a):i.returns==="indices"?Aoe(r,a):_oe(r,a)}zar.exports=Toe});var Yar=s((ILe,Jar)=>{"use strict";var Ioe=Xar();Jar.exports=Ioe});var Zar=s((RLe,$ar)=>{"use strict";function Roe(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}$ar.exports=Roe});var r0r=s((LLe,Kar)=>{"use strict";var Loe=dr(),Poe=M().isPrimitive,Foe=T(),Moe=vr(),Qar=O(),hc=q();function Boe(r,e){return Foe(e)?Qar(e,"alpha")&&(r.alpha=e.alpha,!Poe(r.alpha)||Moe(r.alpha))?new TypeError(hc("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Qar(e,"groups")&&(r.groups=e.groups,!Loe(r.groups))?new TypeError(hc("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(hc("invalid argument. Options argument must be an object. Value: `%s`.",e))}Kar.exports=Boe});var u0r=s((PLe,s0r)=>{"use strict";var e0r=E(),to=Cr(),t0r=D(),joe=Y(),i0r=Z2(),koe=Ui(),n0r=g0(),Coe=k2(),Voe=m0(),Uoe=koe+1,a0r=1e308;function Goe(r,e){var t,i;return e0r(r)||e0r(e)||to(e)?NaN:to(r)||r===0||e<Voe||joe(r)>Uoe&&e<=0?r:e>n0r?0*r:e<Coe?(t=t0r(10,-(e+n0r)),i=r*a0r*t,to(i)?r:i0r(i)/a0r/t):(t=t0r(10,-e),i=r*t,to(i)?r:i0r(i)/t)}s0r.exports=Goe});var v0r=s((FLe,o0r)=>{"use strict";var xoe=u0r();o0r.exports=xoe});var l0r=s((MLe,c0r)=>{"use strict";var Doe=te(),Hoe=T(),Woe=cr().isPrimitive,f0r=O(),yc=q(),qc=v0r();function zoe(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Hoe(r))throw new TypeError(yc("invalid argument. First argument must be an object. Value: `%s`.",r));if(f0r(r,"digits")){if(!Doe(r.digits))throw new TypeError(yc("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(f0r(r,"decision")){if(!Woe(r.decision))throw new TypeError(yc("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+qc(this.pValue,-t)+`
`,i+="    statistic: "+qc(this.statistic,-t)+`
`,i+="    df: "+qc(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}c0r.exports=zoe});var m0r=s((BLe,g0r)=>{"use strict";var Xoe=Br(),Joe=T(),oi=rr(),Yoe=Fi(),io=q(),$oe=Far(),Zoe=Yar(),p0r=P(),Qoe=Zar(),Koe=r0r(),r1e=l0r();function e1e(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,S;if(v=[],e=arguments.length,f={},Joe(arguments[e-1])&&(r=arguments[e-1],e-=1,g=Koe(f,r),g))throw g;if(f.groups){if(n=Zoe(arguments[0],f.groups),i=Yoe(n),e=i.length,e<2)throw new Error(io("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(S=0;S<e;S++)v.push(n[i[S]])}else for(S=0;S<e;S++)v.push(arguments[S]);for(u=0,t=0,o=0,h=0,y=new Array(e),N=y.slice(),S=0;S<e;S++){if(p=v[S],!Xoe(p))throw new TypeError(io("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(io("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));y[S]=p.length-1,u+=y[S],t+=1/y[S],N[S]=Qoe(p),o+=y[S]*N[S],h+=y[S]*p0r(N[S])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(io("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*p0r(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-$oe(l,m),d={},oi(d,"rejected",c<=a),oi(d,"alpha",a),oi(d,"pValue",c),oi(d,"statistic",l),oi(d,"df",m),oi(d,"method","Bartlett's test of equal variances"),oi(d,"print",r1e),d}g0r.exports=e1e});var h0r=s((jLe,d0r)=>{"use strict";var t1e=m0r();d0r.exports=t1e});var q0r=s((kLe,y0r)=>{"use strict";var bc=E(),i1e=gt();function n1e(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,bc(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],bc(v)){a=v;break}(v>a||v===a&&i1e(v))&&(a=v),i[o]=a,o+=n}if(bc(a))for(f;f<r;f++)i[o]=a,o+=n;return i}y0r.exports=n1e});var w0r=s((CLe,b0r)=>{"use strict";var wc=E(),a1e=gt();function s1e(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,wc(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],wc(c)){o=c;break}(c>o||c===o&&a1e(c))&&(o=c),n[f]=o,f+=a}if(wc(o))for(l;l<r;l++)n[f]=o,f+=a;return n}b0r.exports=s1e});var S0r=s((VLe,N0r)=>{"use strict";var u1e=b(),E0r=q0r(),o1e=w0r();u1e(E0r,"ndarray",o1e);N0r.exports=E0r});var A0r=s((ULe,O0r)=>{"use strict";var v1e=S0r();O0r.exports=v1e});var T0r=s((GLe,_0r)=>{"use strict";var f1e=E(),c1e=gt();function l1e(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],f1e(a))return a;(a>i||a===i&&c1e(a))&&(i=a)}return i}_0r.exports=l1e});var R0r=s((xLe,I0r)=>{"use strict";var p1e=E(),g1e=gt();function m1e(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],p1e(u))return u;(u>n||u===n&&g1e(u))&&(n=u)}return n}I0r.exports=m1e});var F0r=s((DLe,P0r)=>{"use strict";var d1e=b(),L0r=T0r(),h1e=R0r();d1e(L0r,"ndarray",h1e);P0r.exports=L0r});var B0r=s((HLe,M0r)=>{"use strict";var y1e=F0r();M0r.exports=y1e});var C0r=s((WLe,k0r)=>{"use strict";var j0r=E(),q1e=gt();function b1e(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],j0r(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],j0r(v))return v;(v>a||v===a&&q1e(v))&&(a=v)}return a}k0r.exports=b1e});var G0r=s((zLe,U0r)=>{"use strict";var V0r=E(),w1e=gt();function E1e(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],V0r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],V0r(c))return c;(c>o||c===o&&w1e(c))&&(o=c)}return o}U0r.exports=E1e});var H0r=s((XLe,D0r)=>{"use strict";var N1e=b(),x0r=C0r(),S1e=G0r();N1e(x0r,"ndarray",S1e);D0r.exports=x0r});var z0r=s((JLe,W0r)=>{"use strict";var O1e=si(),A1e=U(),Ec=E();function _1e(r,e,t){var i,n;return Ec(r)||Ec(e)||Ec(t)||t<0?NaN:t===0?r<e?0:1:(i=t*A1e(2),n=r-e,.5*O1e(-n/i))}W0r.exports=_1e});var J0r=s((YLe,X0r)=>{"use strict";var T1e=_(),I1e=As().factory,Nc=E(),R1e=U(),L1e=si();function P1e(r,e){var t;if(Nc(r)||Nc(e)||e<0)return T1e(NaN);if(e===0)return I1e(r);return t=e*R1e(2),i;function i(n){var a;return Nc(n)?NaN:(a=n-r,.5*L1e(-a/t))}}X0r.exports=P1e});var Z0r=s(($Le,$0r)=>{"use strict";var F1e=b(),Y0r=z0r(),M1e=J0r();F1e(Y0r,"factory",M1e);$0r.exports=Y0r});var rsr=s((ZLe,K0r)=>{"use strict";var Q0r=E(),B1e=P(),j1e=vt(),k1e=tc();function C1e(r,e){return Q0r(r)||Q0r(e)||e<=0?NaN:.5*B1e(j1e*k1e*e*e)}K0r.exports=C1e});var tsr=s((QLe,esr)=>{"use strict";var V1e=rsr();esr.exports=V1e});var asr=s((KLe,nsr)=>{"use strict";var isr=E();function U1e(r,e){return isr(r)||isr(e)||e<=0?NaN:0}nsr.exports=U1e});var usr=s((rPe,ssr)=>{"use strict";var G1e=asr();ssr.exports=G1e});var vsr=s((ePe,osr)=>{"use strict";var x1e=z(),D1e=[H1e,W1e,z1e,X1e,J1e,Y1e,$1e,Z1e,Q1e,K1e,r2e,e2e,t2e,i2e,n2e,a2e,s2e,u2e,o2e,v2e,f2e,c2e,l2e,p2e,g2e,m2e,d2e,h2e,y2e,q2e,b2e,w2e,E2e,N2e,S2e,O2e,A2e,_2e,T2e,I2e,R2e,L2e,P2e,F2e,M2e,B2e,j2e,k2e,C2e,V2e,U2e,G2e,x2e,D2e,H2e,W2e,z2e,X2e,J2e,Y2e,$2e,Z2e,Q2e,K2e,r3e,e3e,t3e,i3e,n3e,a3e,s3e,u3e,o3e,v3e,f3e,c3e,l3e,p3e,g3e,m3e,d3e,h3e,y3e,q3e,b3e,w3e,E3e,N3e,S3e,O3e,A3e,_3e,T3e,I3e,R3e,L3e,P3e,F3e,M3e,B3e,j3e];function H1e(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function W1e(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function z1e(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function X1e(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function J1e(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function Y1e(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function $1e(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function Z1e(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function Q1e(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function K1e(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function r2e(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function e2e(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function t2e(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function i2e(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function n2e(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function a2e(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function s2e(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function u2e(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function o2e(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function v2e(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function f2e(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function c2e(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function l2e(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function p2e(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function g2e(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function m2e(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function d2e(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function h2e(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function y2e(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function q2e(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function b2e(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function w2e(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function E2e(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function N2e(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function S2e(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function O2e(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function A2e(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function _2e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function T2e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function I2e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function R2e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function L2e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function P2e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function F2e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function M2e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function B2e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function j2e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function k2e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function C2e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function V2e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function U2e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function G2e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function x2e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function D2e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function H2e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function W2e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function z2e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function X2e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function J2e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function Y2e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function $2e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function Z2e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function Q2e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function K2e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function r3e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function e3e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function t3e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function i3e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function n3e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function a3e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function s3e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function u3e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function o3e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function v3e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function f3e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function c3e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function l3e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function p3e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function g3e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function m3e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function d3e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function h3e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function y3e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function q3e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function b3e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function w3e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function E3e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function N3e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function S3e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function O3e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function A3e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function _3e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function T3e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function I3e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function R3e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function L3e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function P3e(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function F3e(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function M3e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function B3e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function j3e(){return 1}function k3e(r){var e=x1e(r),t=D1e[e];return t(2*r-(2*e+1))}osr.exports=k3e});var gsr=s((tPe,psr)=>{"use strict";var fsr=sr(),C3e=R(),csr=vsr(),lsr=.5641895835477563;function V3e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?lsr/r:(e=r*r,lsr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):csr(400/(4+r)):r<-26.7?C3e:(e=r*r,r<-6.1?2*fsr(e):2*fsr(e)-csr(400/(4-r)))}psr.exports=V3e});var Sc=s((iPe,msr)=>{"use strict";var U3e=gsr();msr.exports=U3e});var ysr=s((nPe,hsr)=>{"use strict";var G3e=P(),x3e=ut(),D3e=q0(),H3e=si(),W3e=Sc(),z3e=V(),Oc=E(),dsr=.7071067811865475;function X3e(r,e,t){var i;return Oc(r)||Oc(e)||Oc(t)||t<0?NaN:t===0?r<e?z3e:0:(i=(r-e)/t,i<-1?G3e(W3e(-i*dsr)/2)-D3e(i)/2:x3e(-H3e(i*dsr)/2))}hsr.exports=X3e});var wsr=s((aPe,bsr)=>{"use strict";var qsr=E(),J3e=V();function Y3e(r,e){return qsr(r)||qsr(e)?NaN:r<e?J3e:0}bsr.exports=Y3e});var Ssr=s((sPe,Nsr)=>{"use strict";var $3e=_(),Esr=E(),Z3e=V();function Q3e(r){if(Esr(r))return $3e(NaN);return e;function e(t){return Esr(t)?NaN:t<r?Z3e:0}}Nsr.exports=Q3e});var _sr=s((uPe,Asr)=>{"use strict";var K3e=b(),Osr=wsr(),rve=Ssr();K3e(Osr,"factory",rve);Asr.exports=Osr});var Lsr=s((oPe,Rsr)=>{"use strict";var eve=_(),tve=_sr().factory,Tsr=E(),ive=ut(),nve=q0(),ave=si(),sve=Sc(),uve=P(),Isr=.7071067811865475;function ove(r,e){if(Tsr(r)||Tsr(e)||e<0)return eve(NaN);if(e===0)return tve(r);return t;function t(i){var n=(i-r)/e;return n<-1?uve(sve(-n*Isr)/2)-nve(n)/2:ive(-ave(n*Isr)/2)}}Rsr.exports=ove});var Msr=s((vPe,Fsr)=>{"use strict";var vve=b(),Psr=ysr(),fve=Lsr();vve(Psr,"factory",fve);Fsr.exports=Psr});var Ac=s((fPe,Bsr)=>{"use strict";var cve=1.8378770664093456;Bsr.exports=cve});var Csr=s((cPe,ksr)=>{"use strict";var lve=P(),jsr=D(),pve=Ac(),gve=V(),mve=R(),_c=E();function dve(r,e,t){var i,n,a;return _c(r)||_c(e)||_c(t)||t<0?NaN:t===0?r===e?mve:gve:(i=jsr(t,2),n=-.5*(2*lve(t)+pve),a=-1/(2*i),n+a*jsr(r-e,2))}ksr.exports=dve});var Gsr=s((lPe,Usr)=>{"use strict";var hve=R(),yve=V(),Vsr=E();function qve(r,e){return Vsr(r)||Vsr(e)?NaN:r===e?hve:yve}Usr.exports=qve});var Hsr=s((pPe,Dsr)=>{"use strict";var bve=_(),wve=R(),Eve=V(),xsr=E();function Nve(r){if(xsr(r))return bve(NaN);return e;function e(t){return xsr(t)?NaN:t===r?wve:Eve}}Dsr.exports=Nve});var Xsr=s((gPe,zsr)=>{"use strict";var Sve=b(),Wsr=Gsr(),Ove=Hsr();Sve(Wsr,"factory",Ove);zsr.exports=Wsr});var Zsr=s((mPe,$sr)=>{"use strict";var Ave=_(),_ve=Xsr().factory,Tve=Ac(),Jsr=E(),Ysr=D(),Ive=P();function Rve(r,e){var t,i,n;if(Jsr(r)||Jsr(e)||e<0)return Ave(NaN);if(e===0)return _ve(r);return t=Ysr(e,2),i=-.5*(2*Ive(e)+Tve),n=-1/(2*t),a;function a(u){return i+n*Ysr(u-r,2)}}$sr.exports=Rve});var rur=s((dPe,Ksr)=>{"use strict";var Lve=b(),Qsr=Csr(),Pve=Zsr();Lve(Qsr,"factory",Pve);Ksr.exports=Qsr});var iur=s((hPe,tur)=>{"use strict";var eur=E();function Fve(r,e){return eur(r)||eur(e)||e<=0?NaN:r}tur.exports=Fve});var aur=s((yPe,nur)=>{"use strict";var Mve=iur();nur.exports=Mve});var our=s((qPe,uur)=>{"use strict";var sur=E();function Bve(r,e){return sur(r)||sur(e)||e<=0?NaN:r}uur.exports=Bve});var fur=s((bPe,vur)=>{"use strict";var jve=our();vur.exports=jve});var lur=s((wPe,cur)=>{"use strict";var Tc=E(),kve=sr(),Cve=D();function Vve(r,e,t){return Tc(r)||Tc(e)||Tc(t)||t<=0?NaN:kve(e*r+.5*Cve(t*r,2))}cur.exports=Vve});var gur=s((EPe,pur)=>{"use strict";var Uve=_(),Ic=E(),Gve=sr(),xve=D();function Dve(r,e){if(Ic(r)||Ic(e)||e<=0)return Uve(NaN);return t;function t(i){return Ic(i)?NaN:Gve(r*i+.5*xve(e*i,2))}}pur.exports=Dve});var hur=s((NPe,dur)=>{"use strict";var Hve=b(),mur=lur(),Wve=gur();Hve(mur,"factory",Wve);dur.exports=mur});var bur=s((SPe,qur)=>{"use strict";var yur=E();function zve(r,e){return yur(r)||yur(e)||e<=0?NaN:r}qur.exports=zve});var Eur=s((OPe,wur)=>{"use strict";var Xve=bur();wur.exports=Xve});var Our=s((APe,Sur)=>{"use strict";var Jve=sr(),Nur=D(),Yve=U(),$ve=vt(),Zve=R(),Rc=E();function Qve(r,e,t){var i,n,a;return Rc(r)||Rc(e)||Rc(t)||t<0?NaN:t===0?r===e?Zve:0:(i=Nur(t,2),n=1/Yve(i*$ve),a=-1/(2*i),n*Jve(a*Nur(r-e,2)))}Sur.exports=Qve});var Tur=s((_Pe,_ur)=>{"use strict";var Kve=R(),Aur=E();function rfe(r,e){return Aur(r)||Aur(e)?NaN:r===e?Kve:0}_ur.exports=rfe});var Lur=s((TPe,Rur)=>{"use strict";var efe=_(),tfe=R(),Iur=E();function ife(r){if(Iur(r))return efe(NaN);return e;function e(t){return Iur(t)?NaN:t===r?tfe:0}}Rur.exports=ife});var Mur=s((IPe,Fur)=>{"use strict";var nfe=b(),Pur=Tur(),afe=Lur();nfe(Pur,"factory",afe);Fur.exports=Pur});var kur=s((RPe,jur)=>{"use strict";var sfe=_(),ufe=Mur().factory,Lc=E(),ofe=U(),vfe=sr(),Bur=D(),ffe=vt();function cfe(r,e){var t,i,n;if(Lc(r)||Lc(e)||e<0)return sfe(NaN);if(e===0)return ufe(r);return t=Bur(e,2),i=1/ofe(t*ffe),n=-1/(2*t),a;function a(u){return Lc(u)?NaN:i*vfe(n*Bur(u-r,2))}}jur.exports=cfe});var Uur=s((LPe,Vur)=>{"use strict";var lfe=b(),Cur=Our(),pfe=kur();lfe(Cur,"factory",pfe);Vur.exports=Cur});var Dur=s((PPe,xur)=>{"use strict";var Gur=E();function gfe(r,e){return Gur(r)||Gur(e)||e<=0?NaN:0}xur.exports=gfe});var Wur=s((FPe,Hur)=>{"use strict";var mfe=Dur();Hur.exports=mfe});var Jur=s((MPe,Xur)=>{"use strict";var zur=E();function dfe(r,e){return zur(r)||zur(e)||e<=0?NaN:e}Xur.exports=dfe});var $ur=s((BPe,Yur)=>{"use strict";var hfe=Jur();Yur.exports=hfe});var Kur=s((jPe,Qur)=>{"use strict";var Zur=E();function yfe(r,e){return Zur(r)||Zur(e)||e<=0?NaN:e*e}Qur.exports=yfe});var eor=s((kPe,ror)=>{"use strict";var qfe=Kur();ror.exports=qfe});var ior=s((CPe,tor)=>{"use strict";var Pr=rr(),bfe=Z0r(),wfe=tsr(),Efe=usr(),Nfe=Msr(),Sfe=rur(),Ofe=aur(),Afe=fur(),_fe=hur(),Tfe=Eur(),Ife=Uur(),Rfe=df(),Lfe=Wur(),Pfe=$ur(),Ffe=eor();function Mfe(r){return Pr(r,"cdf",bfe),Pr(r,"entropy",wfe),Pr(r,"kurtosis",Efe),Pr(r,"logcdf",Nfe),Pr(r,"logpdf",Sfe),Pr(r,"mean",Ofe),Pr(r,"median",Afe),Pr(r,"mgf",_fe),Pr(r,"mode",Tfe),Pr(r,"pdf",Ife),Pr(r,"quantile",Rfe),Pr(r,"skewness",Lfe),Pr(r,"stdev",Pfe),Pr(r,"variance",Ffe),r}tor.exports=Mfe});var aor=s((VPe,nor)=>{"use strict";var Bfe=rr(),jfe=ior();function kfe(r){return Bfe(r,"normal",jfe({})),r}nor.exports=kfe});var uor=s((UPe,sor)=>{"use strict";var Na=rr(),Cfe=h0r(),Vfe=A0r().ndarray,Ufe=B0r().ndarray,Gfe=H0r().ndarray,xfe=aor();function Dfe(r){return Na(r,"bartlettTest",Cfe),Na(r,"cumax",Vfe),Na(r,"max",Ufe),Na(r,"mskmax",Gfe),Na(r,"dists",xfe({})),r}sor.exports=Dfe});var vor=s((GPe,oor)=>{"use strict";var Hfe=$().isPrimitive,Wfe=q();function zfe(r){return e;function e(t){if(!Hfe(t))throw new TypeError(Wfe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}oor.exports=zfe});var lor=s((xPe,cor)=>{"use strict";var Xfe=vor();cor.exports=Xfe});var dor=s((DPe,mor)=>{"use strict";var por=$().isPrimitive,gor=q();function Jfe(r){return e;function e(t,i){if(!por(t))throw new TypeError(gor("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!por(i))throw new TypeError(gor("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}mor.exports=Jfe});var yor=s((HPe,hor)=>{"use strict";var Yfe=dor();hor.exports=Yfe});var bor=s((WPe,qor)=>{"use strict";var Pc=$().isPrimitive,Fc=q();function $fe(r){return e;function e(t,i,n){if(!Pc(t))throw new TypeError(Fc("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Pc(i))throw new TypeError(Fc("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Pc(n))throw new TypeError(Fc("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}qor.exports=$fe});var Eor=s((zPe,wor)=>{"use strict";var Zfe=bor();wor.exports=Zfe});var Sor=s((XPe,Nor)=>{"use strict";var Mc=rr(),Qfe=lor(),Kfe=yor(),rce=Eor();function ece(r){return Mc(r,"s_o",Qfe),Mc(r,"ss_o",Kfe),Mc(r,"sss_o",rce),r}Nor.exports=ece});var Aor=s((JPe,Oor)=>{"use strict";function tce(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Oor.exports=tce});var no=s((YPe,_or)=>{"use strict";var ice=Aor();_or.exports=ice});var Ior=s(($Pe,Tor)=>{"use strict";var nce=no(),ace=ii(),ao=ft(),sce=pt(),uce=/\s+/g,oce=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,vce=/(?:\s|^)([^\s]+)(?=\s|$)/g,fce=/([a-z0-9])([A-Z])/g;function cce(r,e,t){return e=ace(e),t===0?e:nce(e)}function lce(r){return r=ao(r,oce," "),r=ao(r,uce," "),r=ao(r,fce,"$1 $2"),r=sce(r),ao(r,vce,cce)}Tor.exports=lce});var Lor=s((ZPe,Ror)=>{"use strict";var pce=Ior();Ror.exports=pce});var For=s((QPe,Por)=>{"use strict";var gce=$().isPrimitive,mce=q(),dce=Lor();function hce(r){if(!gce(r))throw new TypeError(mce("invalid argument. First argument must be a string. Value: `%s`.",r));return dce(r)}Por.exports=hce});var Bor=s((KPe,Mor)=>{"use strict";var yce=For();Mor.exports=yce});var kor=s((rFe,jor)=>{"use strict";var qce=$().isPrimitive,bce=q(),wce=no();function Ece(r){if(!qce(r))throw new TypeError(bce("invalid argument. First argument must be a string. Value: `%s`.",r));return wce(r)}jor.exports=Ece});var Vor=s((eFe,Cor)=>{"use strict";var Nce=kor();Cor.exports=Nce});var Gor=s((tFe,Uor)=>{"use strict";function Sce(r){return r.toUpperCase()}Uor.exports=Sce});var Dor=s((iFe,xor)=>{"use strict";var Oce=Gor();xor.exports=Oce});var Wor=s((nFe,Hor)=>{"use strict";var Ace=Dor(),Bc=ft(),_ce=pt(),Tce=/\s+/g,Ice=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Rce=/([a-z0-9])([A-Z])/g;function Lce(r){return r=Bc(r,Ice," "),r=Bc(r,Rce,"$1 $2"),r=_ce(r),r=Bc(r,Tce,"_"),Ace(r)}Hor.exports=Lce});var Xor=s((aFe,zor)=>{"use strict";var Pce=Wor();zor.exports=Pce});var Yor=s((sFe,Jor)=>{"use strict";var Fce=$().isPrimitive,Mce=q(),Bce=Xor();function jce(r){if(!Fce(r))throw new TypeError(Mce("invalid argument. Must provide a string. Value: `%s`.",r));return Bce(r)}Jor.exports=jce});var Zor=s((uFe,$or)=>{"use strict";var kce=Yor();$or.exports=kce});var Kor=s((oFe,Qor)=>{"use strict";var Cce=ii(),jc=ft(),Vce=pt(),Uce=/\s+/g,Gce=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,xce=/([a-z0-9])([A-Z])/g;function Dce(r){return r=jc(r,Gce," "),r=jc(r,xce,"$1 $2"),r=Vce(r),r=jc(r,Uce,"-"),Cce(r)}Qor.exports=Dce});var e1r=s((vFe,r1r)=>{"use strict";var Hce=Kor();r1r.exports=Hce});var i1r=s((fFe,t1r)=>{"use strict";var Wce=$().isPrimitive,zce=q(),Xce=e1r();function Jce(r){if(!Wce(r))throw new TypeError(zce("invalid argument. Must provide a string. Value: `%s`.",r));return Xce(r)}t1r.exports=Jce});var a1r=s((cFe,n1r)=>{"use strict";var Yce=i1r();n1r.exports=Yce});var u1r=s((lFe,s1r)=>{"use strict";var $ce=$().isPrimitive,Zce=q(),Qce=ii();function Kce(r){if(!$ce(r))throw new TypeError(Zce("invalid argument. Must provide a string. Value: `%s`.",r));return Qce(r)}s1r.exports=Kce});var v1r=s((pFe,o1r)=>{"use strict";var rle=u1r();o1r.exports=rle});var c1r=s((gFe,f1r)=>{"use strict";var ele=no(),tle=ii(),so=ft(),ile=pt(),nle=/\s+/g,ale=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,sle=/(?:\s|^)([^\s]+)(?=\s|$)/g,ule=/([a-z0-9])([A-Z])/g;function ole(r,e){return ele(tle(e))}function vle(r){return r=so(r,ale," "),r=so(r,nle," "),r=so(r,ule,"$1 $2"),r=ile(r),so(r,sle,ole)}f1r.exports=vle});var p1r=s((mFe,l1r)=>{"use strict";var fle=c1r();l1r.exports=fle});var m1r=s((dFe,g1r)=>{"use strict";var cle=$().isPrimitive,lle=q(),ple=p1r();function gle(r){if(!cle(r))throw new TypeError(lle("invalid argument. First argument must be a string. Value: `%s`.",r));return ple(r)}g1r.exports=gle});var h1r=s((hFe,d1r)=>{"use strict";var mle=m1r();d1r.exports=mle});var q1r=s((yFe,y1r)=>{"use strict";var dle=ii(),kc=ft(),hle=pt(),yle=/\s+/g,qle=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ble=/([a-z0-9])([A-Z])/g;function wle(r){return r=kc(r,qle," "),r=kc(r,ble,"$1 $2"),r=hle(r),r=kc(r,yle,"_"),dle(r)}y1r.exports=wle});var w1r=s((qFe,b1r)=>{"use strict";var Ele=q1r();b1r.exports=Ele});var N1r=s((bFe,E1r)=>{"use strict";var Nle=$().isPrimitive,Sle=q(),Ole=w1r();function Ale(r){if(!Nle(r))throw new TypeError(Sle("invalid argument. Must provide a string. Value: `%s`.",r));return Ole(r)}E1r.exports=Ale});var O1r=s((wFe,S1r)=>{"use strict";var _le=N1r();S1r.exports=_le});var T1r=s((EFe,_1r)=>{"use strict";var Tle=T(),A1r=O(),Ile=cr().isPrimitive,Rle=$().isPrimitive,Cc=q();function Lle(r,e){return Tle(e)?A1r(e,"flags")&&(r.flags=e.flags,!Rle(r.flags))?new TypeError(Cc("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):A1r(e,"capture")&&(r.capture=e.capture,!Ile(r.capture))?new TypeError(Cc("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Cc("invalid argument. Options argument must be an object. Value: `%s`.",e))}_1r.exports=Lle});var uo=s((NFe,R1r)=>{"use strict";var Ple=T1r(),I1r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function Fle(r){var e,t;if(arguments.length>0){if(e={},t=Ple(e,r),t)throw t;return e.capture?new RegExp("("+I1r+")",e.flags):new RegExp(I1r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}R1r.exports=Fle});var P1r=s((SFe,L1r)=>{"use strict";var Mle=uo(),Ble=Mle({capture:!0});L1r.exports=Ble});var M1r=s((OFe,F1r)=>{"use strict";var jle=uo(),kle=jle();F1r.exports=kle});var k1r=s((AFe,j1r)=>{"use strict";var B1r=b(),Vc=uo(),Cle=P1r(),Vle=M1r();B1r(Vc,"REGEXP",Vle);B1r(Vc,"REGEXP_CAPTURE",Cle);j1r.exports=Vc});var V1r=s((_Fe,C1r)=>{"use strict";var Ule=k1r().REGEXP;function Gle(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),Ule.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}C1r.exports=Gle});var G1r=s((TFe,U1r)=>{"use strict";var xle=V1r();U1r.exports=xle});var D1r=s((IFe,x1r)=>{"use strict";var Dle=$().isPrimitive,Hle=q(),Wle=G1r();function zle(r){if(!Dle(r))throw new TypeError(Hle("invalid argument. Must provide a string. Value: `%s`.",r));return Wle(r)}x1r.exports=zle});var W1r=s((RFe,H1r)=>{"use strict";var Xle=D1r();H1r.exports=Xle});var X1r=s((LFe,z1r)=>{"use strict";function Jle(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}z1r.exports=Jle});var Y1r=s((PFe,J1r)=>{"use strict";var Yle=X1r();J1r.exports=Yle});var Z1r=s((FFe,$1r)=>{"use strict";var $le=$().isPrimitive,Zle=q(),Qle=Y1r();function Kle(r){if(!$le(r))throw new TypeError(Zle("invalid argument. First argument must be a string. Value: `%s`.",r));return Qle(r)}$1r.exports=Kle});var K1r=s((MFe,Q1r)=>{"use strict";var r6e=Z1r();Q1r.exports=r6e});var e2r=s((BFe,r2r)=>{"use strict";var e6e=$().isPrimitive,t6e=q();function i6e(r){if(!e6e(r))throw new TypeError(t6e("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}r2r.exports=i6e});var i2r=s((jFe,t2r)=>{"use strict";var n6e=e2r();t2r.exports=n6e});var a2r=s((kFe,n2r)=>{"use strict";var ce=rr(),a6e=Bor(),s6e=Vor(),u6e=Zor(),o6e=a1r(),v6e=v1r(),f6e=h1r(),c6e=O1r(),l6e=W1r(),p6e=K1r(),g6e=i2r();function m6e(r){return ce(r,"camelcase",a6e),ce(r,"capitalize",s6e),ce(r,"constantcase",u6e),ce(r,"kebabcase",o6e),ce(r,"lowercase",v6e),ce(r,"pascalcase",f6e),ce(r,"snakecase",c6e),ce(r,"startcase",l6e),ce(r,"uncapitalize",p6e),ce(r,"uppercase",g6e),r}n2r.exports=m6e});var u2r=s((CFe,s2r)=>{"use strict";var d6e=rr(),h6e=Sor(),y6e=a2r();function q6e(r){return d6e(r,"tools",h6e({})),r=y6e(r),r}s2r.exports=q6e});var v2r=s((VFe,o2r)=>{"use strict";var le=rr(),b6e=lh(),w6e=_b(),E6e=jb(),N6e=FN(),S6e=VF(),O6e=SU(),A6e=otr(),_6e=ytr(),T6e=uor(),I6e=u2r();function R6e(){var r={};return le(r,"array",b6e({})),le(r,"assert",w6e({})),le(r,"blas",E6e({})),le(r,"datasets",N6e({})),le(r,"math",S6e({})),le(r,"ndarray",O6e({})),le(r,"random",A6e({})),le(r,"simulate",_6e({})),le(r,"stats",T6e({})),le(r,"string",I6e({})),r}o2r.exports=R6e});var c2r=s((UFe,f2r)=>{"use strict";var L6e=b(),Uc=v2r();L6e(Uc,"CACHED",Uc());f2r.exports=Uc});var F6e=s((GFe,l2r)=>{var P6e=c2r().CACHED;l2r.exports=P6e});return F6e();})();
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
