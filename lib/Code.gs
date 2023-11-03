/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Dc=s((A6e,xc)=>{"use strict";var o2r=typeof Object.defineProperty=="function"?Object.defineProperty:null;xc.exports=o2r});var Wc=s((_6e,Hc)=>{"use strict";var v2r=Dc();function f2r(){try{return v2r({},"x",{}),!0}catch{return!1}}Hc.exports=f2r});var Xc=s((T6e,zc)=>{"use strict";var c2r=Object.defineProperty;zc.exports=c2r});var oo=s((I6e,Jc)=>{"use strict";function l2r(r){return typeof r=="number"}Jc.exports=l2r});var vo=s((R6e,$c)=>{"use strict";function p2r(r){return r[0]==="-"}function Yc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function g2r(r,e,t){var i=!1,n=e-r.length;return n<0||(p2r(r)&&(i=!0,r=r.substr(1)),r=t?r+Yc(n):Yc(n)+r,i&&(r="-"+r)),r}$c.exports=g2r});var rl=s((L6e,Kc)=>{"use strict";var m2r=oo(),Zc=vo(),d2r=String.prototype.toLowerCase,Qc=String.prototype.toUpperCase;function h2r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!m2r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Zc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Zc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Qc.call(r.specifier)?Qc.call(t):d2r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Kc.exports=h2r});var tl=s((P6e,el)=>{"use strict";function y2r(r){return typeof r=="string"}el.exports=y2r});var al=s((F6e,nl)=>{"use strict";var q2r=oo(),b2r=Math.abs,w2r=String.prototype.toLowerCase,il=String.prototype.toUpperCase,Vt=String.prototype.replace,E2r=/e\+(\d)$/,N2r=/e-(\d)$/,O2r=/^(\d+)$/,S2r=/^(\d+)e/,A2r=/\.0$/,_2r=/\.0*e/,T2r=/(\..*[^0])0*e/;function I2r(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!q2r(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":b2r(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Vt.call(t,T2r,"$1e"),t=Vt.call(t,_2r,"e"),t=Vt.call(t,A2r,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Vt.call(t,E2r,"e+0$1"),t=Vt.call(t,N2r,"e-0$1"),r.alternate&&(t=Vt.call(t,O2r,"$1."),t=Vt.call(t,S2r,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===il.call(r.specifier)?il.call(t):w2r.call(t),t}nl.exports=I2r});var ol=s((M6e,ul)=>{"use strict";function sl(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function R2r(r,e,t){var i=e-r.length;return i<0||(r=t?r+sl(i):sl(i)+r),r}ul.exports=R2r});var fl=s((B6e,vl)=>{"use strict";var L2r=rl(),P2r=tl(),F2r=al(),M2r=ol(),B2r=vo(),j2r=String.fromCharCode,Oa=isNaN,k2r=Array.isArray;function C2r(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V2r(r){var e,t,i,n,a,u,o,v,f;if(!k2r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],P2r(i))u+=i;else{if(e=i.precision!==void 0,i=C2r(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Oa(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Oa(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=L2r(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Oa(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Oa(a)?String(i.arg):j2r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=F2r(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=B2r(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=M2r(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}vl.exports=V2r});var ll=s((j6e,cl)=>{"use strict";var U2r=fl();cl.exports=U2r});var gl=s((k6e,pl)=>{"use strict";var Sa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G2r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function x2r(r){var e,t,i,n;for(t=[],n=0,i=Sa.exec(r);i;)e=r.slice(n,Sa.lastIndex-i[0].length),e.length&&t.push(e),t.push(G2r(i)),n=Sa.lastIndex,i=Sa.exec(r);return e=r.slice(n),e.length&&t.push(e),t}pl.exports=x2r});var dl=s((C6e,ml)=>{"use strict";var D2r=gl();ml.exports=D2r});var yl=s((V6e,hl)=>{"use strict";function H2r(r){return typeof r=="string"}hl.exports=H2r});var wl=s((U6e,bl)=>{"use strict";var W2r=ll(),z2r=dl(),X2r=yl();function ql(r){var e,t,i;if(!X2r(r))throw new TypeError(ql("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=z2r(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return W2r.apply(null,t)}bl.exports=ql});var q=s((G6e,El)=>{"use strict";var J2r=wl();El.exports=J2r});var Tl=s((x6e,_l)=>{"use strict";var Nl=q(),vi=Object.prototype,Ol=vi.toString,Sl=vi.__defineGetter__,Al=vi.__defineSetter__,Y2r=vi.__lookupGetter__,$2r=vi.__lookupSetter__;function Z2r(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||Ol.call(r)==="[object Array]")throw new TypeError(Nl("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Ol.call(t)==="[object Array]")throw new TypeError(Nl("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Y2r.call(r,e)||$2r.call(r,e)?(i=r.__proto__,r.__proto__=vi,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Sl&&Sl.call(r,e,t.get),u&&Al&&Al.call(r,e,t.set),r}_l.exports=Z2r});var Ze=s((D6e,Il)=>{"use strict";var Q2r=Wc(),K2r=Xc(),r3r=Tl(),fo;Q2r()?fo=K2r:fo=r3r;Il.exports=fo});var Ll=s((H6e,Rl)=>{"use strict";var e3r=Ze();function t3r(r,e,t){e3r(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Rl.exports=t3r});var b=s((W6e,Pl)=>{"use strict";var i3r=Ll();Pl.exports=i3r});var Ml=s((z6e,Fl)=>{"use strict";var n3r=Ze();function a3r(r,e,t){n3r(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Fl.exports=a3r});var rr=s((X6e,Bl)=>{"use strict";var s3r=Ml();Bl.exports=s3r});var kl=s((J6e,jl)=>{"use strict";function u3r(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}jl.exports=u3r});var Aa=s((Y6e,Cl)=>{"use strict";var o3r=kl();Cl.exports=o3r});var Ul=s(($6e,Vl)=>{"use strict";function v3r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Vl.exports=v3r});var _a=s((Z6e,Gl)=>{"use strict";var f3r=Ul();Gl.exports=f3r});var Dl=s((Q6e,xl)=>{"use strict";var c3r=_a();function l3r(r){return c3r(0,r)}xl.exports=l3r});var Qe=s((K6e,Hl)=>{"use strict";var p3r=Dl();Hl.exports=p3r});var Xl=s((r4e,zl)=>{"use strict";var dn=Aa(),g3r=Qe(),Wl=q();function m3r(r,e,t){var i,n,a,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(a=g3r(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],n=t[f],n!==0&&n<v)throw new Error(Wl("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",dn(e).join(", "),dn(t).join(", "),f));if(v===n)a[f]=1;else if(v===1)a[f]=0;else throw new Error(Wl("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",dn(e).join(", "),dn(t).join(", "),f))}return{ref:r,data:i,shape:dn(t),strides:a}}zl.exports=m3r});var co=s((e4e,Jl)=>{"use strict";var d3r=Xl();Jl.exports=d3r});var Zl=s((t4e,$l)=>{"use strict";var Yl=co();function h3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K;if(N=e[2],o=N[1],v=N[0],!(o<=0||v<=0))for(F=Yl(r[0],e[0],N),A=F.data,O=F.strides,i=O[1],n=O[0],F=Yl(r[1],e[1],N),H=F.data,O=F.strides,a=O[1],u=O[0],K=r[2],p=0,h=0,c=0;c<v;c++){for(l=0,g=0,d=A[p],m=H[h],y=K[c],f=0;f<o;f++)y[f]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}$l.exports=h3r});var lo=s((i4e,Ql)=>{"use strict";var y3r=Zl();Ql.exports=y3r});var r6=s((n4e,Kl)=>{"use strict";var po=co();function q3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K,G,Fr,Mr,or,Ct,Gc;if(K=e[3],f=K[1],c=K[0],!(f<=0||c<=0))for(Fr=po(r[0],e[0],K),Mr=Fr.data,G=Fr.strides,i=G[1],n=G[0],Fr=po(r[1],e[1],K),or=Fr.data,G=Fr.strides,a=G[1],u=G[0],Fr=po(r[2],e[2],K),Ct=Fr.data,G=Fr.strides,o=G[1],v=G[0],Gc=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,y=0,O=Mr[h],F=or[m],A=Ct[N],H=Gc[p],l=0;l<f;l++)H[l]=t(O[g],F[d],A[y]),g+=i,d+=a,y+=o;h+=n,m+=u,N+=v}}Kl.exports=q3r});var go=s((a4e,e6)=>{"use strict";var b3r=r6();e6.exports=b3r});var i6=s((s4e,t6)=>{"use strict";function w3r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}t6.exports=w3r});var Ta=s((u4e,n6)=>{"use strict";var E3r=i6();n6.exports=E3r});var s6=s((o4e,a6)=>{"use strict";var N3r=_a();function O3r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(N3r(r,i));return t}a6.exports=O3r});var Ia=s((v4e,u6)=>{"use strict";var S3r=s6();u6.exports=S3r});var v6=s((f4e,o6)=>{"use strict";function A3r(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}o6.exports=A3r});var c6=s((c4e,f6)=>{"use strict";var _3r=v6();f6.exports=_3r});var p6=s((l4e,l6)=>{"use strict";function T3r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}l6.exports=T3r});var m6=s((p4e,g6)=>{"use strict";function I3r(r,e,t,i){var n,a,u,o,v,f;for(a=r.length,u=r[0].length,n=i,v=0;v<a;v++)for(o=r[v],f=0;f<u;f++)e[n]=o[f],n+=t;return e}g6.exports=I3r});var Ra=s((g4e,h6)=>{"use strict";var R3r=b(),d6=p6(),L3r=m6();R3r(d6,"assign",L3r);h6.exports=d6});var q6=s((m4e,y6)=>{"use strict";var P3r=/./;y6.exports=P3r});var mo=s((d4e,b6)=>{"use strict";function F3r(r){return typeof r=="boolean"}b6.exports=F3r});var E6=s((h4e,w6)=>{"use strict";function M3r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}w6.exports=M3r});var O6=s((y4e,N6)=>{"use strict";var B3r=E6();N6.exports=B3r});var A6=s((q4e,S6)=>{"use strict";var j3r=O6(),k3r=j3r();function C3r(){return k3r&&typeof Symbol.toStringTag=="symbol"}S6.exports=C3r});var fi=s((b4e,_6)=>{"use strict";var V3r=A6();_6.exports=V3r});var ho=s((w4e,T6)=>{"use strict";var U3r=Object.prototype.toString;T6.exports=U3r});var R6=s((E4e,I6)=>{"use strict";var G3r=ho();function x3r(r){return G3r.call(r)}I6.exports=x3r});var P6=s((N4e,L6)=>{"use strict";var D3r=Object.prototype.hasOwnProperty;function H3r(r,e){return r==null?!1:D3r.call(r,e)}L6.exports=H3r});var S=s((O4e,F6)=>{"use strict";var W3r=P6();F6.exports=W3r});var B6=s((S4e,M6)=>{"use strict";var z3r=typeof Symbol=="function"?Symbol:void 0;M6.exports=z3r});var yo=s((A4e,j6)=>{"use strict";var X3r=B6();j6.exports=X3r});var V6=s((_4e,C6)=>{"use strict";var k6=yo(),J3r=typeof k6=="function"?k6.toStringTag:"";C6.exports=J3r});var G6=s((T4e,U6)=>{"use strict";var Y3r=S(),hn=V6(),qo=ho();function $3r(r){var e,t,i;if(r==null)return qo.call(r);t=r[hn],e=Y3r(r,hn);try{r[hn]=void 0}catch{return qo.call(r)}return i=qo.call(r),e?r[hn]=t:delete r[hn],i}U6.exports=$3r});var er=s((I4e,x6)=>{"use strict";var Z3r=fi(),Q3r=R6(),K3r=G6(),bo;Z3r()?bo=K3r:bo=Q3r;x6.exports=bo});var H6=s((R4e,D6)=>{"use strict";var rvr=Boolean;D6.exports=rvr});var wo=s((L4e,W6)=>{"use strict";var evr=H6();W6.exports=evr});var X6=s((P4e,z6)=>{"use strict";var tvr=Boolean.prototype.toString;z6.exports=tvr});var Y6=s((F4e,J6)=>{"use strict";var ivr=X6();function nvr(r){try{return ivr.call(r),!0}catch{return!1}}J6.exports=nvr});var Eo=s((M4e,$6)=>{"use strict";var avr=fi(),svr=er(),uvr=wo(),ovr=Y6(),vvr=avr();function fvr(r){return typeof r=="object"?r instanceof uvr?!0:vvr?ovr(r):svr(r)==="[object Boolean]":!1}$6.exports=fvr});var Q6=s((B4e,Z6)=>{"use strict";var cvr=mo(),lvr=Eo();function pvr(r){return cvr(r)||lvr(r)}Z6.exports=pvr});var cr=s((j4e,r4)=>{"use strict";var K6=b(),No=Q6(),gvr=mo(),mvr=Eo();K6(No,"isPrimitive",gvr);K6(No,"isObject",mvr);r4.exports=No});var t4=s((k4e,e4)=>{"use strict";function dvr(){return new Function("return this;")()}e4.exports=dvr});var n4=s((C4e,i4)=>{"use strict";var hvr=typeof self=="object"?self:null;i4.exports=hvr});var s4=s((V4e,a4)=>{"use strict";var yvr=typeof window=="object"?window:null;a4.exports=yvr});var o4=s((U4e,u4)=>{"use strict";var qvr=typeof globalThis=="object"?globalThis:null;u4.exports=qvr});var Oo=s((G4e,l4)=>{"use strict";var bvr=cr().isPrimitive,wvr=q(),Evr=t4(),v4=n4(),f4=s4(),c4=o4();function Nvr(r){if(arguments.length){if(!bvr(r))throw new TypeError(wvr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Evr()}if(c4)return c4;if(v4)return v4;if(f4)return f4;throw new Error("unexpected error. Unable to resolve global object.")}l4.exports=Nvr});var m4=s((x4e,g4)=>{"use strict";var Ovr=Oo(),p4=Ovr(),Svr=p4.document&&p4.document.childNodes;g4.exports=Svr});var h4=s((D4e,d4)=>{"use strict";var Avr=Int8Array;d4.exports=Avr});var q4=s((H4e,y4)=>{"use strict";var _vr=q6(),Tvr=m4(),Ivr=h4();function Rvr(){return typeof _vr=="function"||typeof Ivr=="object"||typeof Tvr=="function"}y4.exports=Rvr});var So=s((W4e,b4)=>{"use strict";function Lvr(){return/^\s*function\s*([^(]*)/i}b4.exports=Lvr});var E4=s((z4e,w4)=>{"use strict";var Pvr=So(),Fvr=Pvr();w4.exports=Fvr});var Ao=s((X4e,O4)=>{"use strict";var Mvr=b(),N4=So(),Bvr=E4();Mvr(N4,"REGEXP",Bvr);O4.exports=N4});var A4=s((J4e,S4)=>{"use strict";var jvr=er(),_o;function kvr(r){return jvr(r)==="[object Array]"}Array.isArray?_o=Array.isArray:_o=kvr;S4.exports=_o});var dr=s((Y4e,_4)=>{"use strict";var Cvr=A4();_4.exports=Cvr});var I4=s(($4e,T4)=>{"use strict";var Vvr=dr(),Uvr=q();function Gvr(r){if(typeof r!="function")throw new TypeError(Uvr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Vvr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}T4.exports=Gvr});var L4=s((Z4e,R4)=>{"use strict";var xvr=I4();R4.exports=xvr});var F4=s((Q4e,P4)=>{"use strict";function Dvr(r){return r!==null&&typeof r=="object"}P4.exports=Dvr});var Io=s((K4e,M4)=>{"use strict";var Hvr=b(),Wvr=L4(),To=F4(),zvr=Wvr(To);Hvr(To,"isObjectLikeArray",zvr);M4.exports=To});var j4=s((r8e,B4)=>{"use strict";var Xvr=Io();function Jvr(r){return Xvr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}B4.exports=Jvr});var Ut=s((e8e,k4)=>{"use strict";var Yvr=j4();k4.exports=Yvr});var V4=s((t8e,C4)=>{"use strict";var $vr=er(),Zvr=Ao().REGEXP,Qvr=Ut();function Kvr(r){var e,t,i;if(t=$vr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Zvr.exec(i.toString()),e)return e[1]}return Qvr(r)?"Buffer":t}C4.exports=Kvr});var pe=s((i8e,U4)=>{"use strict";var rfr=V4();U4.exports=rfr});var x4=s((n8e,G4)=>{"use strict";var efr=pe();function tfr(r){var e;return r===null?"null":(e=typeof r,e==="object"?efr(r).toLowerCase():e)}G4.exports=tfr});var H4=s((a8e,D4)=>{"use strict";var ifr=pe();function nfr(r){return ifr(r).toLowerCase()}D4.exports=nfr});var La=s((s8e,W4)=>{"use strict";var afr=q4(),sfr=x4(),ufr=H4(),ofr=afr()?ufr:sfr;W4.exports=ofr});var X4=s((u8e,z4)=>{"use strict";var vfr=La();function ffr(r){return vfr(r)==="function"}z4.exports=ffr});var I=s((o8e,J4)=>{"use strict";var cfr=X4();J4.exports=cfr});var $4=s((v8e,Y4)=>{"use strict";var lfr=Math.floor;Y4.exports=lfr});var z=s((f8e,Z4)=>{"use strict";var pfr=$4();Z4.exports=pfr});var K4=s((c8e,Q4)=>{"use strict";var gfr=z();function mfr(r){return gfr(r)===r}Q4.exports=mfr});var yr=s((l8e,r8)=>{"use strict";var dfr=K4();r8.exports=dfr});var t8=s((p8e,e8)=>{"use strict";var hfr=9007199254740991;e8.exports=hfr});var n8=s((g8e,i8)=>{"use strict";var yfr=yr(),qfr=t8();function bfr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&yfr(r.length)&&r.length>=0&&r.length<=qfr}i8.exports=bfr});var Br=s((m8e,a8)=>{"use strict";var wfr=n8();a8.exports=wfr});var u8=s((d8e,s8)=>{"use strict";var Efr=I();function Nfr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Efr(r.next)}s8.exports=Nfr});var v8=s((h8e,o8)=>{"use strict";var Ofr=u8();o8.exports=Ofr});var l8=s((y8e,c8)=>{"use strict";var f8="function";function Sfr(r){return typeof r.get===f8&&typeof r.set===f8}c8.exports=Sfr});var yn=s((q8e,p8)=>{"use strict";var Afr=l8();p8.exports=Afr});var d8=s((b8e,m8)=>{"use strict";var g8={complex128:_fr,complex64:Tfr,default:Ifr};function _fr(r,e,t){r.set(t,e)}function Tfr(r,e,t){r.set(t,e)}function Ifr(r,e,t){r.set(t,e)}function Rfr(r){var e=g8[r];return typeof e=="function"?e:g8.default}m8.exports=Rfr});var Ro=s((w8e,h8)=>{"use strict";var Lfr=d8();h8.exports=Lfr});var b8=s((E8e,q8)=>{"use strict";var y8={float64:Pfr,float32:Ffr,int32:Mfr,int16:Bfr,int8:jfr,uint32:kfr,uint16:Cfr,uint8:Vfr,uint8c:Ufr,generic:Gfr,default:xfr};function Pfr(r,e,t){r[e]=t}function Ffr(r,e,t){r[e]=t}function Mfr(r,e,t){r[e]=t}function Bfr(r,e,t){r[e]=t}function jfr(r,e,t){r[e]=t}function kfr(r,e,t){r[e]=t}function Cfr(r,e,t){r[e]=t}function Vfr(r,e,t){r[e]=t}function Ufr(r,e,t){r[e]=t}function Gfr(r,e,t){r[e]=t}function xfr(r,e,t){r[e]=t}function Dfr(r){var e=y8[r];return typeof e=="function"?e:y8.default}q8.exports=Dfr});var Lo=s((N8e,w8)=>{"use strict";var Hfr=b8();w8.exports=Hfr});var N8=s((O8e,E8)=>{"use strict";var Wfr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};E8.exports=Wfr});var S8=s((S8e,O8)=>{"use strict";var zfr=er(),Xfr=typeof Float64Array=="function";function Jfr(r){return Xfr&&r instanceof Float64Array||zfr(r)==="[object Float64Array]"}O8.exports=Jfr});var _8=s((A8e,A8)=>{"use strict";var Yfr=S8();A8.exports=Yfr});var I8=s((_8e,T8)=>{"use strict";var $fr=typeof Float64Array=="function"?Float64Array:null;T8.exports=$fr});var P8=s((T8e,L8)=>{"use strict";var Zfr=_8(),R8=I8();function Qfr(){var r,e;if(typeof R8!="function")return!1;try{e=new R8([1,3.14,-3.14,NaN]),r=Zfr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}L8.exports=Qfr});var Po=s((I8e,F8)=>{"use strict";var Kfr=P8();F8.exports=Kfr});var B8=s((R8e,M8)=>{"use strict";var rcr=typeof Float64Array=="function"?Float64Array:void 0;M8.exports=rcr});var k8=s((L8e,j8)=>{"use strict";function ecr(){throw new Error("not implemented")}j8.exports=ecr});var lr=s((P8e,C8)=>{"use strict";var tcr=Po(),icr=B8(),ncr=k8(),Fo;tcr()?Fo=icr:Fo=ncr;C8.exports=Fo});var U8=s((F8e,V8)=>{"use strict";var acr=er(),scr=typeof Float32Array=="function";function ucr(r){return scr&&r instanceof Float32Array||acr(r)==="[object Float32Array]"}V8.exports=ucr});var x8=s((M8e,G8)=>{"use strict";var ocr=U8();G8.exports=ocr});var R=s((B8e,D8)=>{"use strict";var vcr=Number.POSITIVE_INFINITY;D8.exports=vcr});var W8=s((j8e,H8)=>{"use strict";var fcr=typeof Float32Array=="function"?Float32Array:null;H8.exports=fcr});var J8=s((k8e,X8)=>{"use strict";var ccr=x8(),lcr=R(),z8=W8();function pcr(){var r,e;if(typeof z8!="function")return!1;try{e=new z8([1,3.14,-3.14,5e40]),r=ccr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===lcr}catch{r=!1}return r}X8.exports=pcr});var $8=s((C8e,Y8)=>{"use strict";var gcr=J8();Y8.exports=gcr});var Q8=s((V8e,Z8)=>{"use strict";var mcr=typeof Float32Array=="function"?Float32Array:void 0;Z8.exports=mcr});var r5=s((U8e,K8)=>{"use strict";function dcr(){throw new Error("not implemented")}K8.exports=dcr});var Qr=s((G8e,e5)=>{"use strict";var hcr=$8(),ycr=Q8(),qcr=r5(),Mo;hcr()?Mo=ycr:Mo=qcr;e5.exports=Mo});var i5=s((x8e,t5)=>{"use strict";var bcr=er(),wcr=typeof Uint32Array=="function";function Ecr(r){return wcr&&r instanceof Uint32Array||bcr(r)==="[object Uint32Array]"}t5.exports=Ecr});var ge=s((D8e,n5)=>{"use strict";var Ncr=i5();n5.exports=Ncr});var ci=s((H8e,a5)=>{"use strict";var Ocr=4294967295;a5.exports=Ocr});var u5=s((W8e,s5)=>{"use strict";var Scr=typeof Uint32Array=="function"?Uint32Array:null;s5.exports=Scr});var f5=s((z8e,v5)=>{"use strict";var Acr=ge(),Bo=ci(),o5=u5();function _cr(){var r,e;if(typeof o5!="function")return!1;try{e=[1,3.14,-3.14,Bo+1,Bo+2],e=new o5(e),r=Acr(e)&&e[0]===1&&e[1]===3&&e[2]===Bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}v5.exports=_cr});var l5=s((X8e,c5)=>{"use strict";var Tcr=f5();c5.exports=Tcr});var g5=s((J8e,p5)=>{"use strict";var Icr=typeof Uint32Array=="function"?Uint32Array:void 0;p5.exports=Icr});var d5=s((Y8e,m5)=>{"use strict";function Rcr(){throw new Error("not implemented")}m5.exports=Rcr});var pr=s(($8e,h5)=>{"use strict";var Lcr=l5(),Pcr=g5(),Fcr=d5(),jo;Lcr()?jo=Pcr:jo=Fcr;h5.exports=jo});var q5=s((Z8e,y5)=>{"use strict";var Mcr=er(),Bcr=typeof Int32Array=="function";function jcr(r){return Bcr&&r instanceof Int32Array||Mcr(r)==="[object Int32Array]"}y5.exports=jcr});var Pa=s((Q8e,b5)=>{"use strict";var kcr=q5();b5.exports=kcr});var li=s((K8e,w5)=>{"use strict";var Ccr=2147483647;w5.exports=Ccr});var N5=s((r5e,E5)=>{"use strict";var Vcr=-2147483648;E5.exports=Vcr});var S5=s((e5e,O5)=>{"use strict";var Ucr=typeof Int32Array=="function"?Int32Array:null;O5.exports=Ucr});var T5=s((t5e,_5)=>{"use strict";var Gcr=Pa(),xcr=li(),Dcr=N5(),A5=S5();function Hcr(){var r,e;if(typeof A5!="function")return!1;try{e=new A5([1,3.14,-3.14,xcr+1]),r=Gcr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Dcr}catch{r=!1}return r}_5.exports=Hcr});var R5=s((i5e,I5)=>{"use strict";var Wcr=T5();I5.exports=Wcr});var P5=s((n5e,L5)=>{"use strict";var zcr=typeof Int32Array=="function"?Int32Array:void 0;L5.exports=zcr});var M5=s((a5e,F5)=>{"use strict";function Xcr(){throw new Error("not implemented")}F5.exports=Xcr});var Ke=s((s5e,B5)=>{"use strict";var Jcr=R5(),Ycr=P5(),$cr=M5(),ko;Jcr()?ko=Ycr:ko=$cr;B5.exports=ko});var k5=s((u5e,j5)=>{"use strict";var Zcr=er(),Qcr=typeof Uint16Array=="function";function Kcr(r){return Qcr&&r instanceof Uint16Array||Zcr(r)==="[object Uint16Array]"}j5.exports=Kcr});var V5=s((o5e,C5)=>{"use strict";var rlr=k5();C5.exports=rlr});var G5=s((v5e,U5)=>{"use strict";var elr=65535;U5.exports=elr});var D5=s((f5e,x5)=>{"use strict";var tlr=typeof Uint16Array=="function"?Uint16Array:null;x5.exports=tlr});var z5=s((c5e,W5)=>{"use strict";var ilr=V5(),Co=G5(),H5=D5();function nlr(){var r,e;if(typeof H5!="function")return!1;try{e=[1,3.14,-3.14,Co+1,Co+2],e=new H5(e),r=ilr(e)&&e[0]===1&&e[1]===3&&e[2]===Co-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}W5.exports=nlr});var J5=s((l5e,X5)=>{"use strict";var alr=z5();X5.exports=alr});var $5=s((p5e,Y5)=>{"use strict";var slr=typeof Uint16Array=="function"?Uint16Array:void 0;Y5.exports=slr});var Q5=s((g5e,Z5)=>{"use strict";function ulr(){throw new Error("not implemented")}Z5.exports=ulr});var Gt=s((m5e,K5)=>{"use strict";var olr=J5(),vlr=$5(),flr=Q5(),Vo;olr()?Vo=vlr:Vo=flr;K5.exports=Vo});var ep=s((d5e,rp)=>{"use strict";var clr=er(),llr=typeof Int16Array=="function";function plr(r){return llr&&r instanceof Int16Array||clr(r)==="[object Int16Array]"}rp.exports=plr});var ip=s((h5e,tp)=>{"use strict";var glr=ep();tp.exports=glr});var ap=s((y5e,np)=>{"use strict";var mlr=32767;np.exports=mlr});var up=s((q5e,sp)=>{"use strict";var dlr=-32768;sp.exports=dlr});var vp=s((b5e,op)=>{"use strict";var hlr=typeof Int16Array=="function"?Int16Array:null;op.exports=hlr});var lp=s((w5e,cp)=>{"use strict";var ylr=ip(),qlr=ap(),blr=up(),fp=vp();function wlr(){var r,e;if(typeof fp!="function")return!1;try{e=new fp([1,3.14,-3.14,qlr+1]),r=ylr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===blr}catch{r=!1}return r}cp.exports=wlr});var gp=s((E5e,pp)=>{"use strict";var Elr=lp();pp.exports=Elr});var dp=s((N5e,mp)=>{"use strict";var Nlr=typeof Int16Array=="function"?Int16Array:void 0;mp.exports=Nlr});var yp=s((O5e,hp)=>{"use strict";function Olr(){throw new Error("not implemented")}hp.exports=Olr});var pi=s((S5e,qp)=>{"use strict";var Slr=gp(),Alr=dp(),_lr=yp(),Uo;Slr()?Uo=Alr:Uo=_lr;qp.exports=Uo});var wp=s((A5e,bp)=>{"use strict";var Tlr=er(),Ilr=typeof Uint8Array=="function";function Rlr(r){return Ilr&&r instanceof Uint8Array||Tlr(r)==="[object Uint8Array]"}bp.exports=Rlr});var Np=s((_5e,Ep)=>{"use strict";var Llr=wp();Ep.exports=Llr});var Sp=s((T5e,Op)=>{"use strict";var Plr=255;Op.exports=Plr});var _p=s((I5e,Ap)=>{"use strict";var Flr=typeof Uint8Array=="function"?Uint8Array:null;Ap.exports=Flr});var Rp=s((R5e,Ip)=>{"use strict";var Mlr=Np(),Go=Sp(),Tp=_p();function Blr(){var r,e;if(typeof Tp!="function")return!1;try{e=[1,3.14,-3.14,Go+1,Go+2],e=new Tp(e),r=Mlr(e)&&e[0]===1&&e[1]===3&&e[2]===Go-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Ip.exports=Blr});var Pp=s((L5e,Lp)=>{"use strict";var jlr=Rp();Lp.exports=jlr});var Mp=s((P5e,Fp)=>{"use strict";var klr=typeof Uint8Array=="function"?Uint8Array:void 0;Fp.exports=klr});var jp=s((F5e,Bp)=>{"use strict";function Clr(){throw new Error("not implemented")}Bp.exports=Clr});var Kr=s((M5e,kp)=>{"use strict";var Vlr=Pp(),Ulr=Mp(),Glr=jp(),xo;Vlr()?xo=Ulr:xo=Glr;kp.exports=xo});var Vp=s((B5e,Cp)=>{"use strict";var xlr=er(),Dlr=typeof Uint8ClampedArray=="function";function Hlr(r){return Dlr&&r instanceof Uint8ClampedArray||xlr(r)==="[object Uint8ClampedArray]"}Cp.exports=Hlr});var Gp=s((j5e,Up)=>{"use strict";var Wlr=Vp();Up.exports=Wlr});var Dp=s((k5e,xp)=>{"use strict";var zlr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;xp.exports=zlr});var zp=s((C5e,Wp)=>{"use strict";var Xlr=Gp(),Hp=Dp();function Jlr(){var r,e;if(typeof Hp!="function")return!1;try{e=new Hp([-1,0,1,3.14,4.99,255,256]),r=Xlr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Wp.exports=Jlr});var Jp=s((V5e,Xp)=>{"use strict";var Ylr=zp();Xp.exports=Ylr});var $p=s((U5e,Yp)=>{"use strict";var $lr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Yp.exports=$lr});var Qp=s((G5e,Zp)=>{"use strict";function Zlr(){throw new Error("not implemented")}Zp.exports=Zlr});var gi=s((x5e,Kp)=>{"use strict";var Qlr=Jp(),Klr=$p(),r6r=Qp(),Do;Qlr()?Do=Klr:Do=r6r;Kp.exports=Do});var e7=s((D5e,r7)=>{"use strict";var e6r=er(),t6r=typeof Int8Array=="function";function i6r(r){return t6r&&r instanceof Int8Array||e6r(r)==="[object Int8Array]"}r7.exports=i6r});var i7=s((H5e,t7)=>{"use strict";var n6r=e7();t7.exports=n6r});var a7=s((W5e,n7)=>{"use strict";var a6r=127;n7.exports=a6r});var u7=s((z5e,s7)=>{"use strict";var s6r=-128;s7.exports=s6r});var v7=s((X5e,o7)=>{"use strict";var u6r=typeof Int8Array=="function"?Int8Array:null;o7.exports=u6r});var l7=s((J5e,c7)=>{"use strict";var o6r=i7(),v6r=a7(),f6r=u7(),f7=v7();function c6r(){var r,e;if(typeof f7!="function")return!1;try{e=new f7([1,3.14,-3.14,v6r+1]),r=o6r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===f6r}catch{r=!1}return r}c7.exports=c6r});var g7=s((Y5e,p7)=>{"use strict";var l6r=l7();p7.exports=l6r});var d7=s(($5e,m7)=>{"use strict";var p6r=typeof Int8Array=="function"?Int8Array:void 0;m7.exports=p6r});var y7=s((Z5e,h7)=>{"use strict";function g6r(){throw new Error("not implemented")}h7.exports=g6r});var mi=s((Q5e,q7)=>{"use strict";var m6r=g7(),d6r=d7(),h6r=y7(),Ho;m6r()?Ho=d6r:Ho=h6r;q7.exports=Ho});var Wo=s((K5e,b7)=>{"use strict";function y6r(r){return typeof r=="number"}b7.exports=y6r});var E7=s((rpe,w7)=>{"use strict";w7.exports=Number});var Fa=s((epe,N7)=>{"use strict";var q6r=E7();N7.exports=q6r});var S7=s((tpe,O7)=>{"use strict";var b6r=Fa(),w6r=b6r.prototype.toString;O7.exports=w6r});var _7=s((ipe,A7)=>{"use strict";var E6r=S7();function N6r(r){try{return E6r.call(r),!0}catch{return!1}}A7.exports=N6r});var zo=s((npe,T7)=>{"use strict";var O6r=fi(),S6r=er(),A6r=Fa(),_6r=_7(),T6r=O6r();function I6r(r){return typeof r=="object"?r instanceof A6r?!0:T6r?_6r(r):S6r(r)==="[object Number]":!1}T7.exports=I6r});var R7=s((ape,I7)=>{"use strict";var R6r=Wo(),L6r=zo();function P6r(r){return R6r(r)||L6r(r)}I7.exports=P6r});var M=s((spe,P7)=>{"use strict";var L7=b(),Xo=R7(),F6r=Wo(),M6r=zo();L7(Xo,"isPrimitive",F6r);L7(Xo,"isObject",M6r);P7.exports=Xo});var V=s((upe,F7)=>{"use strict";var B6r=Fa(),j6r=B6r.NEGATIVE_INFINITY;F7.exports=j6r});var Jo=s((ope,M7)=>{"use strict";var k6r=R(),C6r=V(),V6r=yr();function U6r(r){return r<k6r&&r>C6r&&V6r(r)}M7.exports=U6r});var Yo=s((vpe,B7)=>{"use strict";var G6r=M().isPrimitive,x6r=Jo();function D6r(r){return G6r(r)&&x6r(r)}B7.exports=D6r});var $o=s((fpe,j7)=>{"use strict";var H6r=M().isObject,W6r=Jo();function z6r(r){return H6r(r)&&W6r(r.valueOf())}j7.exports=z6r});var C7=s((cpe,k7)=>{"use strict";var X6r=Yo(),J6r=$o();function Y6r(r){return X6r(r)||J6r(r)}k7.exports=Y6r});var gr=s((lpe,U7)=>{"use strict";var V7=b(),Zo=C7(),$6r=Yo(),Z6r=$o();V7(Zo,"isPrimitive",$6r);V7(Zo,"isObject",Z6r);U7.exports=Zo});var Qo=s((ppe,G7)=>{"use strict";var Q6r=gr().isPrimitive;function K6r(r){return Q6r(r)&&r>=0}G7.exports=K6r});var Ko=s((gpe,x7)=>{"use strict";var r4r=gr().isObject;function e4r(r){return r4r(r)&&r.valueOf()>=0}x7.exports=e4r});var H7=s((mpe,D7)=>{"use strict";var t4r=Qo(),i4r=Ko();function n4r(r){return t4r(r)||i4r(r)}D7.exports=n4r});var hr=s((dpe,z7)=>{"use strict";var W7=b(),r1=H7(),a4r=Qo(),s4r=Ko();W7(r1,"isPrimitive",a4r);W7(r1,"isObject",s4r);z7.exports=r1});var e1=s((hpe,X7)=>{"use strict";var u4r=4294967295;X7.exports=u4r});var Y7=s((ype,J7)=>{"use strict";var o4r=yr(),v4r=e1();function f4r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&o4r(r.length)&&r.length>=0&&r.length<=v4r}J7.exports=f4r});var xt=s((qpe,$7)=>{"use strict";var c4r=Y7();$7.exports=c4r});var Q7=s((bpe,Z7)=>{"use strict";var l4r=er(),p4r=typeof ArrayBuffer=="function";function g4r(r){return p4r&&r instanceof ArrayBuffer||l4r(r)==="[object ArrayBuffer]"}Z7.exports=g4r});var Ma=s((wpe,K7)=>{"use strict";var m4r=Q7();K7.exports=m4r});var e9=s((Epe,r9)=>{"use strict";var d4r=dr();function h4r(r){return typeof r=="object"&&r!==null&&!d4r(r)}r9.exports=h4r});var Ba=s((Npe,t9)=>{"use strict";var y4r=e9();t9.exports=y4r});var n9=s((Ope,i9)=>{"use strict";function q4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}i9.exports=q4r});var s9=s((Spe,a9)=>{"use strict";function b4r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}a9.exports=b4r});var c9=s((Ape,f9)=>{"use strict";var u9=M().isPrimitive,o9=Ze(),qn=b(),v9=q(),w4r=n9(),E4r=s9();function Dt(r,e){if(!(this instanceof Dt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!u9(r))throw new TypeError(v9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!u9(e))throw new TypeError(v9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return o9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),o9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}qn(Dt,"BYTES_PER_ELEMENT",8);qn(Dt.prototype,"BYTES_PER_ELEMENT",8);qn(Dt.prototype,"byteLength",16);qn(Dt.prototype,"toString",w4r);qn(Dt.prototype,"toJSON",E4r);f9.exports=Dt});var di=s((_pe,l9)=>{"use strict";var N4r=c9();l9.exports=N4r});var g9=s((Tpe,p9)=>{"use strict";var O4r=typeof Math.fround=="function"?Math.fround:null;p9.exports=O4r});var h9=s((Ipe,d9)=>{"use strict";var S4r=Qr(),m9=new S4r(1);function A4r(r){return m9[0]=r,m9[0]}d9.exports=A4r});var b9=s((Rpe,q9)=>{"use strict";var y9=g9(),_4r=h9(),t1;typeof y9=="function"?t1=y9:t1=_4r;q9.exports=t1});var E9=s((Lpe,w9)=>{"use strict";function T4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}w9.exports=T4r});var O9=s((Ppe,N9)=>{"use strict";function I4r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}N9.exports=I4r});var R9=s((Fpe,I9)=>{"use strict";var S9=M().isPrimitive,A9=Ze(),bn=b(),_9=b9(),T9=q(),R4r=E9(),L4r=O9();function Ht(r,e){if(!(this instanceof Ht))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!S9(r))throw new TypeError(T9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!S9(e))throw new TypeError(T9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return A9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:_9(r)}),A9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:_9(e)}),this}bn(Ht,"BYTES_PER_ELEMENT",4);bn(Ht.prototype,"BYTES_PER_ELEMENT",4);bn(Ht.prototype,"byteLength",8);bn(Ht.prototype,"toString",R4r);bn(Ht.prototype,"toJSON",L4r);I9.exports=Ht});var hi=s((Mpe,L9)=>{"use strict";var P4r=R9();L9.exports=P4r});var F9=s((Bpe,P9)=>{"use strict";var F4r=di(),M4r=hi();function B4r(r){return r instanceof F4r||r instanceof M4r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}P9.exports=B4r});var zr=s((jpe,M9)=>{"use strict";var j4r=F9();M9.exports=j4r});var j9=s((kpe,B9)=>{"use strict";var k4r=yr();function C4r(r){return k4r(r/2)}B9.exports=C4r});var ja=s((Cpe,k9)=>{"use strict";var V4r=j9();k9.exports=V4r});var V9=s((Vpe,C9)=>{"use strict";var U4r=S(),ka=yo();function G4r(){return typeof ka=="function"&&typeof ka("foo")=="symbol"&&U4r(ka,"iterator")&&typeof ka.iterator=="symbol"}C9.exports=G4r});var Ca=s((Upe,U9)=>{"use strict";var x4r=V9();U9.exports=x4r});var x9=s((Gpe,G9)=>{"use strict";var D4r=Ca(),H4r=D4r()?Symbol.iterator:null;G9.exports=H4r});var wn=s((xpe,D9)=>{"use strict";var W4r=x9();D9.exports=W4r});var W9=s((Dpe,H9)=>{"use strict";var z4r=Ze();function X4r(r,e,t){z4r(r,e,{configurable:!1,enumerable:!1,get:t})}H9.exports=X4r});var L=s((Hpe,z9)=>{"use strict";var J4r=W9();z9.exports=J4r});var J9=s((Wpe,X9)=>{"use strict";function Y4r(r){return r.re}X9.exports=Y4r});var rt=s((zpe,Y9)=>{"use strict";var $4r=J9();Y9.exports=$4r});var Z9=s((Xpe,$9)=>{"use strict";function Z4r(r){return r.im}$9.exports=Z4r});var et=s((Jpe,Q9)=>{"use strict";var Q4r=Z9();Q9.exports=Q4r});var rg=s((Ype,K9)=>{"use strict";var K4r=Qr();function r8r(r,e){return new K4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}K9.exports=r8r});var yi=s(($pe,eg)=>{"use strict";var e8r=rg();eg.exports=e8r});var ig=s((Zpe,tg)=>{"use strict";var t8r=lr();function i8r(r,e){return new t8r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}tg.exports=i8r});var qi=s((Qpe,ng)=>{"use strict";var n8r=ig();ng.exports=n8r});var ug=s((Kpe,sg)=>{"use strict";var ag={float64:a8r,float32:s8r,int32:u8r,int16:o8r,int8:v8r,uint32:f8r,uint16:c8r,uint8:l8r,uint8c:p8r,generic:g8r,default:m8r};function a8r(r,e){return r[e]}function s8r(r,e){return r[e]}function u8r(r,e){return r[e]}function o8r(r,e){return r[e]}function v8r(r,e){return r[e]}function f8r(r,e){return r[e]}function c8r(r,e){return r[e]}function l8r(r,e){return r[e]}function p8r(r,e){return r[e]}function g8r(r,e){return r[e]}function m8r(r,e){return r[e]}function d8r(r){var e=ag[r];return typeof e=="function"?e:ag.default}sg.exports=d8r});var En=s((r7e,og)=>{"use strict";var h8r=ug();og.exports=h8r});var cg=s((e7e,fg)=>{"use strict";var vg={complex128:y8r,complex64:q8r,default:b8r};function y8r(r,e){return r.get(e)}function q8r(r,e){return r.get(e)}function b8r(r,e){return r.get(e)}function w8r(r){var e=vg[r];return typeof e=="function"?e:vg.default}fg.exports=w8r});var bi=s((t7e,lg)=>{"use strict";var E8r=cg();lg.exports=E8r});var gg=s((i7e,pg)=>{"use strict";var N8r=xt(),O8r=zr(),S8r=rt(),A8r=et(),_8r=q();function T8r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,N8r(i)&&i.length>=2)e.push(i[0],i[1]);else if(O8r(i))e.push(S8r(i),A8r(i));else return new TypeError(_8r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}pg.exports=T8r});var dg=s((n7e,mg)=>{"use strict";var I8r=xt(),R8r=zr(),L8r=rt(),P8r=et(),F8r=q();function M8r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),I8r(a)&&a.length>=2)i.push(a[0],a[1]);else if(R8r(a))i.push(L8r(a),P8r(a));else return new TypeError(F8r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}mg.exports=M8r});var yg=s((a7e,hg)=>{"use strict";var B8r=zr(),j8r=rt(),k8r=et();function C8r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!B8r(i))return null;r[a]=j8r(i),r[a+1]=k8r(i),a+=2}return r}hg.exports=C8r});var _g=s((s7e,Ag)=>{"use strict";var Nn=hr().isPrimitive,qg=xt(),n1=Br(),bg=Ma(),wg=Ba(),V8r=dr(),Wt=I(),wi=zr(),Va=ja(),i1=yr(),U8r=Ca(),Ei=wn(),qr=b(),xa=L(),Ur=Qr(),Eg=hi(),$=q(),Ua=rt(),Ga=et(),G8r=yi(),x8r=qi(),D8r=En(),H8r=bi(),Ng=gg(),W8r=dg(),z8r=yg(),jr=Ur.BYTES_PER_ELEMENT*2,Og=U8r();function Ni(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Sg(r){return r===tr||r.name==="Complex128Array"}function X8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===jr}function J8r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===jr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ur(0);else if(e===1)if(Nn(arguments[0]))t=new Ur(arguments[0]*2);else if(n1(arguments[0]))if(t=arguments[0],i=t.length,i&&V8r(t)&&wi(t[0])){if(t=z8r(new Ur(i*2),t),t===null){if(!Va(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(arguments[0])}}else{if(X8r(t))t=G8r(t,0);else if(J8r(t))t=x8r(t,0);else if(!Va(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Ur(t)}else if(bg(arguments[0])){if(t=arguments[0],!i1(t.byteLength/jr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",jr,t.byteLength));t=new Ur(t)}else if(wg(arguments[0])){if(t=arguments[0],Og===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Wt(t[Ei]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ei](),!Wt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Ng(t),t instanceof Error)throw t;t=new Ur(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!bg(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Nn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!i1(r/jr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",jr,r));if(e===2){if(i=t.byteLength-r,!i1(i/jr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",jr,i));t=new Ur(t,r)}else{if(i=arguments[2],!Nn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*jr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*jr));t=new Ur(t,r,i*2)}}return qr(this,"_buffer",t),qr(this,"_length",t.length/2),this}qr(tr,"BYTES_PER_ELEMENT",jr);qr(tr,"name","Complex64Array");qr(tr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,g;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Sg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Wt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(Ni(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),wi(l))u[g]=Ua(l),u[g+1]=Ga(l);else if(qg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(n1(e)){if(n){for(f=e.length,e.get&&e.set?v=H8r("default"):v=D8r("default"),p=0;p<f;p++)if(!wi(v(e,p))){c=!0;break}if(c){if(!Va(f))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),wi(l))u[g]=Ua(l),u[g+1]=Ga(l);else if(qg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(wg(e)&&Og&&Wt(e[Ei])){if(u=e[Ei](),!Wt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=W8r(u,n,t):o=Ng(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});qr(tr,"of",function(){var e,t;if(!Wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Sg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});xa(tr.prototype,"buffer",function(){return this._buffer.buffer});xa(tr.prototype,"byteLength",function(){return this._buffer.byteLength});xa(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});qr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);qr(tr.prototype,"copyWithin",function(e,t){if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});qr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},qr(i,"next",v),qr(i,"return",f),Ei&&qr(i,Ei,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Eg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});qr(tr.prototype,"get",function(e){var t;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Nn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Eg(t[e],t[e+1])});xa(tr.prototype,"length",function(){return this._length});qr(tr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!Ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Nn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(wi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ua(e),n[i+1]=Ga(e);return}if(Ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(n1(e)){for(o=e.length,f=0;f<o;f++)if(!wi(e[f])){u=!0;break}if(u){if(!Va(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*jr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Ur(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ua(v),n[i+1]=Ga(v),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Ag.exports=tr});var Oi=s((u7e,Tg)=>{"use strict";var Y8r=_g();Tg.exports=Y8r});var Rg=s((o7e,Ig)=>{"use strict";function $8r(r){return r.re}Ig.exports=$8r});var re=s((v7e,Lg)=>{"use strict";var Z8r=Rg();Lg.exports=Z8r});var Fg=s((f7e,Pg)=>{"use strict";function Q8r(r){return r.im}Pg.exports=Q8r});var ee=s((c7e,Mg)=>{"use strict";var K8r=Fg();Mg.exports=K8r});var jg=s((l7e,Bg)=>{"use strict";var r5r=xt(),e5r=zr(),t5r=q(),i5r=re(),n5r=ee();function a5r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,r5r(i)&&i.length>=2)e.push(i[0],i[1]);else if(e5r(i))e.push(i5r(i),n5r(i));else return new TypeError(t5r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Bg.exports=a5r});var Cg=s((p7e,kg)=>{"use strict";var s5r=xt(),u5r=zr(),o5r=q(),v5r=re(),f5r=ee();function c5r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),s5r(a)&&a.length>=2)i.push(a[0],a[1]);else if(u5r(a))i.push(v5r(a),f5r(a));else return new TypeError(o5r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}kg.exports=c5r});var Ug=s((g7e,Vg)=>{"use strict";var l5r=zr(),p5r=re(),g5r=ee();function m5r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!l5r(i))return null;r[a]=p5r(i),r[a+1]=g5r(i),a+=2}return r}Vg.exports=m5r});var Yg=s((m7e,Jg)=>{"use strict";var On=hr().isPrimitive,Gg=xt(),s1=Br(),xg=Ma(),Dg=Ba(),d5r=dr(),zt=I(),Si=zr(),Da=ja(),a1=yr(),h5r=Ca(),Ai=wn(),br=b(),za=L(),Gr=lr(),Hg=di(),Ha=re(),Wa=ee(),y5r=yi(),q5r=qi(),b5r=En(),w5r=bi(),Z=q(),Wg=jg(),E5r=Cg(),N5r=Ug(),kr=Gr.BYTES_PER_ELEMENT*2,zg=h5r();function _i(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Xg(r){return r===ir||r.name==="Complex64Array"}function O5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===kr/2}function S5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===kr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Gr(0);else if(e===1)if(On(arguments[0]))t=new Gr(arguments[0]*2);else if(s1(arguments[0]))if(t=arguments[0],i=t.length,i&&d5r(t)&&Si(t[0])){if(t=N5r(new Gr(i*2),t),t===null){if(!Da(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(arguments[0])}}else{if(O5r(t))t=y5r(t,0);else if(S5r(t))t=q5r(t,0);else if(!Da(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Gr(t)}else if(xg(arguments[0])){if(t=arguments[0],!a1(t.byteLength/kr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",kr,t.byteLength));t=new Gr(t)}else if(Dg(arguments[0])){if(t=arguments[0],zg===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!zt(t[Ai]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ai](),!zt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Wg(t),t instanceof Error)throw t;t=new Gr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!xg(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!On(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!a1(r/kr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",kr,r));if(e===2){if(i=t.byteLength-r,!a1(i/kr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",kr,i));t=new Gr(t,r)}else{if(i=arguments[2],!On(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*kr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*kr));t=new Gr(t,r,i*2)}}return br(this,"_buffer",t),br(this,"_length",t.length/2),this}br(ir,"BYTES_PER_ELEMENT",kr);br(ir,"name","Complex128Array");br(ir,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,g;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Xg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!zt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(_i(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),Si(l))u[g]=Ha(l),u[g+1]=Wa(l);else if(Gg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(s1(e)){if(n){for(f=e.length,e.get&&e.set?v=w5r("default"):v=b5r("default"),p=0;p<f;p++)if(!Si(v(e,p))){c=!0;break}if(c){if(!Da(f))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,g=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),Si(l))u[g]=Ha(l),u[g+1]=Wa(l);else if(Gg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Dg(e)&&zg&&zt(e[Ai])){if(u=e[Ai](),!zt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=E5r(u,n,t):o=Wg(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});br(ir,"of",function(){var e,t;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Xg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});za(ir.prototype,"buffer",function(){return this._buffer.buffer});za(ir.prototype,"byteLength",function(){return this._buffer.byteLength});za(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});br(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);br(ir.prototype,"copyWithin",function(e,t){if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});br(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},br(i,"next",v),br(i,"return",f),Ai&&br(i,Ai,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Hg(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});br(ir.prototype,"get",function(e){var t;if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!On(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Hg(t[e],t[e+1])});za(ir.prototype,"length",function(){return this._length});br(ir.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!_i(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!On(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Si(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ha(e),n[i+1]=Wa(e);return}if(_i(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*kr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(s1(e)){for(o=e.length,f=0;f<o;f++)if(!Si(e[f])){u=!0;break}if(u){if(!Da(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*kr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Gr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ha(v),n[i+1]=Wa(v),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Jg.exports=ir});var Ti=s((d7e,$g)=>{"use strict";var A5r=Yg();$g.exports=A5r});var Qg=s((h7e,Zg)=>{"use strict";var _5r=lr(),T5r=Qr(),I5r=pr(),R5r=Ke(),L5r=Gt(),P5r=pi(),F5r=Kr(),M5r=gi(),B5r=mi(),j5r=Oi(),k5r=Ti(),C5r=[_5r,T5r,R5r,I5r,P5r,L5r,B5r,F5r,M5r,j5r,k5r];Zg.exports=C5r});var rm=s((y7e,Kg)=>{"use strict";var V5r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];Kg.exports=V5r});var im=s((q7e,tm)=>{"use strict";var U5r=Ut(),G5r=dr(),x5r=pe(),D5r=N8(),H5r=Qg(),em=rm(),W5r=em.length;function z5r(r){var e;if(G5r(r))return"generic";if(U5r(r))return null;for(e=0;e<W5r;e++)if(r instanceof H5r[e])return em[e];return D5r[x5r(r)]||null}tm.exports=z5r});var Ii=s((b7e,nm)=>{"use strict";var X5r=im();nm.exports=X5r});var um=s((w7e,sm)=>{"use strict";var am=I(),J5r=Br(),Y5r=v8(),$5r=yn(),Z5r=Ro(),Q5r=Lo(),K5r=Ii(),u1=q();function rpr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(J5r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!am(t))throw new TypeError(u1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!am(t))throw new TypeError(u1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!Y5r(r))throw new TypeError(u1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=K5r(i),$5r(i)?a=Z5r(u):a=Q5r(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}sm.exports=rpr});var vm=s((E7e,om)=>{"use strict";var epr=um();om.exports=epr});var cm=s((N7e,fm)=>{"use strict";function tpr(r){return r!==r}fm.exports=tpr});var E=s((O7e,lm)=>{"use strict";var ipr=cm();lm.exports=ipr});var gm=s((S7e,pm)=>{"use strict";var npr={Complex64:"complex64",Complex128:"complex128"};pm.exports=npr});var dm=s((A7e,mm)=>{"use strict";var apr=hi(),spr=di(),upr=[apr,spr];mm.exports=upr});var ym=s((_7e,hm)=>{"use strict";var opr=["complex64","complex128"];hm.exports=opr});var wm=s((T7e,bm)=>{"use strict";var vpr=pe(),fpr=gm(),cpr=dm(),qm=ym(),lpr=qm.length;function ppr(r){var e;for(e=0;e<lpr;e++)if(r instanceof cpr[e])return qm[e];return fpr[vpr(r)]||null}bm.exports=ppr});var o1=s((I7e,Em)=>{"use strict";var gpr=wm();Em.exports=gpr});var Om=s((R7e,Nm)=>{"use strict";var mpr=lr(),dpr=Qr(),hpr=Ti(),ypr=Oi(),qpr={float64:mpr,float32:dpr,complex128:hpr,complex64:ypr};Nm.exports=qpr});var Am=s((L7e,Sm)=>{"use strict";var bpr=Om();function wpr(r){return bpr[r]||null}Sm.exports=wpr});var Tm=s((P7e,_m)=>{"use strict";var Epr=Am();_m.exports=Epr});var Rm=s((F7e,Im)=>{"use strict";function Npr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Im.exports=Npr});var jm=s((M7e,Bm)=>{"use strict";var Opr=hi(),Spr=di(),Lm=re(),Pm=ee(),Fm=rt(),Mm=et();function Apr(r,e,t,i,n,a){var u,o,v,f,c,l,p,g,h,d,m,y,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=Fm(e),l=Mm(e)):(f=Lm(e),l=Pm(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Fm(i),p=Mm(i)):(c=Lm(i),p=Pm(i)),o===2?u=Opr:u=Spr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?y=n-1:y=n,d=(c-f)/y,m=(p-l)/y,N=1;N<y;N++)g=f+d*N,h=l+m*N,v.push(new u(g,h));return a&&v.push(new u(c,p)),v}Bm.exports=Apr});var v1=s((B7e,km)=>{"use strict";function _pr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}km.exports=_pr});var f1=s((j7e,xm)=>{"use strict";var Cm=re(),Vm=ee(),Um=rt(),Gm=et();function Tpr(r,e,t,i,n,a,u){var o,v,f,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=Um(t),f=Gm(t)):(o=Cm(t),f=Vm(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=Um(n),c=Gm(n)):(v=Cm(n),c=Vm(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?g=a-1:g=a,l=(v-o)/g,p=(c-f)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}xm.exports=Tpr});var Hm=s((k7e,Dm)=>{"use strict";var Ipr=Object;Dm.exports=Ipr});var Ri=s((C7e,Wm)=>{"use strict";var Rpr=Hm();Wm.exports=Rpr});var Xm=s((V7e,zm)=>{"use strict";var Lpr=Object.getPrototypeOf;zm.exports=Lpr});var Ym=s((U7e,Jm)=>{"use strict";function Ppr(r){return r.__proto__}Jm.exports=Ppr});var Zm=s((G7e,$m)=>{"use strict";var Fpr=er(),Mpr=Ym();function Bpr(r){var e=Mpr(r);return e||e===null?e:Fpr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}$m.exports=Bpr});var Km=s((x7e,Qm)=>{"use strict";var jpr=I(),kpr=Xm(),Cpr=Zm(),c1;jpr(Object.getPrototypeOf)?c1=kpr:c1=Cpr;Qm.exports=c1});var ed=s((D7e,rd)=>{"use strict";var Vpr=Ri(),Upr=Km();function Gpr(r){return r==null?null:(r=Vpr(r),Upr(r))}rd.exports=Gpr});var Xt=s((H7e,td)=>{"use strict";var xpr=ed();td.exports=xpr});var ad=s((W7e,nd)=>{"use strict";var Dpr=Ba(),id=I(),Hpr=Xt(),Xa=S(),Wpr=er(),zpr=Object.prototype;function Xpr(r){var e;for(e in r)if(!Xa(r,e))return!1;return!0}function Jpr(r){var e;return Dpr(r)?(e=Hpr(r),e?!Xa(r,"constructor")&&Xa(e,"constructor")&&id(e.constructor)&&Wpr(e.constructor)==="[object Function]"&&Xa(e,"isPrototypeOf")&&id(e.isPrototypeOf)&&(e===zpr||Xpr(r)):!0):!1}nd.exports=Jpr});var T=s((z7e,sd)=>{"use strict";var Ypr=ad();sd.exports=Ypr});var l1=s((X7e,ud)=>{"use strict";function $pr(r){return typeof r=="string"}ud.exports=$pr});var vd=s((J7e,od)=>{"use strict";var Zpr=String.prototype.valueOf;od.exports=Zpr});var cd=s((Y7e,fd)=>{"use strict";var Qpr=vd();function Kpr(r){try{return Qpr.call(r),!0}catch{return!1}}fd.exports=Kpr});var p1=s(($7e,ld)=>{"use strict";var r7r=fi(),e7r=er(),t7r=cd(),i7r=r7r();function n7r(r){return typeof r=="object"?r instanceof String?!0:i7r?t7r(r):e7r(r)==="[object String]":!1}ld.exports=n7r});var gd=s((Z7e,pd)=>{"use strict";var a7r=l1(),s7r=p1();function u7r(r){return a7r(r)||s7r(r)}pd.exports=u7r});var Q=s((Q7e,dd)=>{"use strict";var md=b(),g1=gd(),o7r=l1(),v7r=p1();md(g1,"isPrimitive",o7r);md(g1,"isObject",v7r);dd.exports=g1});var d1=s((K7e,yd)=>{"use strict";var f7r=T(),hd=S(),c7r=Q().isPrimitive,l7r=cr().isPrimitive,m1=q();function p7r(r,e){return f7r(e)?hd(e,"dtype")&&(r.dtype=e.dtype,!c7r(r.dtype))?new TypeError(m1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):hd(e,"endpoint")&&(r.endpoint=e.endpoint,!l7r(r.endpoint))?new TypeError(m1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(m1("invalid argument. Options argument must be an object. Value: `%s`.",e))}yd.exports=p7r});var h1=s((r9e,g7r)=>{g7r.exports={endpoint:!0}});var Sd=s((e9e,Od)=>{"use strict";var qd=zr(),bd=M().isPrimitive,m7r=hr().isPrimitive,wd=E(),Ed=o1(),d7r=Tm(),h7r=yi(),y7r=qi(),Li=q(),q7r=Rm(),b7r=jm(),w7r=v1(),Nd=f1(),E7r=d1(),N7r=h1();function O7r(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=Ed(r),o===null){if(!qd(r))throw new TypeError(Li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!bd(r)||wd(r))throw new TypeError(Li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=Ed(e),v===null){if(!qd(e))throw new TypeError(Li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!bd(e)||wd(e))throw new TypeError(Li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!m7r(t))throw new TypeError(Li("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:N7r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=E7r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?b7r(o,r,v,e,t,i.endpoint):q7r(r,e,t,i.endpoint);if(n=d7r(i.dtype),n===null)throw new TypeError(Li('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return Nd(h7r(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Nd(y7r(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return w7r(u,r,e,t,i.endpoint)}Od.exports=O7r});var _d=s((t9e,Ad)=>{"use strict";var S7r=yn(),A7r=En(),_7r=Lo(),T7r=bi(),I7r=Ro(),R7r=Ii();function L7r(r){var e=R7r(r);return S7r(r)?{accessorProtocol:!0,accessors:[T7r(e),I7r(e)]}:{accessorProtocol:!1,accessors:[A7r(e),_7r(e)]}}Ad.exports=L7r});var Id=s((i9e,Td)=>{"use strict";var P7r=_d();Td.exports=P7r});var Ld=s((n9e,Rd)=>{"use strict";var F7r=Id();function M7r(r){var e=F7r(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Rd.exports=M7r});var Sn=s((a9e,Pd)=>{"use strict";var B7r=Ld();Pd.exports=B7r});var Cd=s((s9e,kd)=>{"use strict";var j7r=hi(),k7r=di(),Fd=re(),Md=ee(),Bd=rt(),jd=et();function C7r(r,e,t,i,n,a,u){var o,v,f,c,l,p,g,h,d,m,y,N,O,F;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Bd(t),l=jd(t)):(f=Fd(t),l=Md(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=Bd(n),p=jd(n)):(c=Fd(n),p=Md(n)),v===2?o=j7r:o=k7r,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(f,l)),r;for(g(h,0,new o(f,l)),u?O=a-1:O=a,y=(c-f)/O,N=(p-l)/O,F=1;F<O;F++)d=f+y*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}kd.exports=C7r});var Ud=s((u9e,Vd)=>{"use strict";function V7r(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}Vd.exports=V7r});var Jd=s((o9e,Xd)=>{"use strict";var Gd=zr(),xd=M().isPrimitive,U7r=Br(),An=q(),Dd=E(),Hd=o1(),G7r=Ii(),x7r=yi(),D7r=qi(),Wd=Sn(),H7r=Cd(),W7r=Ud(),zd=f1(),z7r=v1(),X7r=d1(),J7r=h1();function Y7r(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=Hd(r),a===null){if(!Gd(r))throw new TypeError(An("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!xd(r)||Dd(r))throw new TypeError(An("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Hd(e),u===null){if(!Gd(e))throw new TypeError(An("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!xd(e)||Dd(e))throw new TypeError(An("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!U7r(t))throw new TypeError(An("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:J7r.endpoint},arguments.length>3&&(n=X7r(i,arguments[3]),n))throw n;if(v=G7r(t),v===null&&(v="generic"),v==="complex64")return zd(x7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return zd(D7r(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=Wd(t),H7r(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=Wd(t),f.accessorProtocol?(W7r(f,r,e,t.length,i.endpoint),t):(z7r(t,r,e,t.length,i.endpoint),t)}Xd.exports=Y7r});var Zd=s((v9e,$d)=>{"use strict";var $7r=b(),Yd=Sd(),Z7r=Jd();$7r(Yd,"assign",Z7r);$d.exports=Yd});var Kd=s((f9e,Qd)=>{"use strict";var Q7r=M().isPrimitive,K7r=Q().isPrimitive,r9r=cr().isPrimitive,e9r=dr(),t9r=q(),i9r={number:Q7r,string:K7r,boolean:r9r};function n9r(r,e,t){var i,n,a,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],v=0;v<r.length;v++)if(o=r[v],a=e[v],u=i9r[a],u(o))i.push([[o]]),n.push([1,1]);else if(e9r(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(t9r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],a,a,String(o)));return[i,n]}Qd.exports=n9r});var Ja=s((c9e,rh)=>{"use strict";var a9r=Kd();rh.exports=a9r});var th=s((l9e,eh)=>{"use strict";var s9r=Ia();function u9r(r){return s9r(1,r)}eh.exports=u9r});var nh=s((p9e,ih)=>{"use strict";var o9r=th();ih.exports=o9r});var sh=s((g9e,ah)=>{"use strict";function v9r(r,e,t){var i,n,a,u,o,v,f,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(f=r[0],c=r[1],u=0;u<n;u++)for(o=f[u],v=c[u],a=0;a<i;a++)v[a]=t(o[a])}ah.exports=v9r});var y1=s((m9e,uh)=>{"use strict";var f9r=sh();uh.exports=f9r});var vh=s((d9e,oh)=>{"use strict";var c9r=Ia();function l9r(r){return c9r(0,r)}oh.exports=l9r});var Ya=s((h9e,fh)=>{"use strict";var p9r=vh();fh.exports=p9r});var lh=s((y9e,ch)=>{"use strict";var wr=rr(),g9r=lo(),m9r=go(),d9r=Ta(),h9r=_a(),y9r=Ia(),q9r=c6(),b9r=Ra(),w9r=vm(),E9r=Zd(),N9r=Ja(),O9r=nh(),S9r=y1(),A9r=Qe(),_9r=Ya();function T9r(r){return wr(r,"bbinary2d",g9r),wr(r,"bternary2d",m9r),wr(r,"broadcastShapes",d9r),wr(r,"filled",h9r),wr(r,"filled2d",y9r),wr(r,"filled2dBy",q9r),wr(r,"flatten2d",b9r),wr(r,"iterator2array",w9r),wr(r,"linspace",E9r),wr(r,"normalizeBroadcastArgs",N9r),wr(r,"ones2d",O9r),wr(r,"unary2d",S9r),wr(r,"zeros",A9r),wr(r,"zeros2d",_9r),r}ch.exports=T9r});var mh=s((q9e,gh)=>{"use strict";var ph=q();function I9r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(ph('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(ph('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}gh.exports=I9r});var hh=s((b9e,dh)=>{"use strict";var R9r=mh();dh.exports=R9r});var qh=s((w9e,yh)=>{"use strict";var L9r=M().isPrimitive,P9r=hh(),F9r=q();function M9r(r,e,t,i,n,a){var u,o;if(!(L9r(r)&&P9r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(F9r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}yh.exports=M9r});var wh=s((E9e,bh)=>{"use strict";var B9r=qh();bh.exports=B9r});var Nh=s((N9e,Eh)=>{"use strict";var j9r=cr().isPrimitive,k9r=q();function C9r(r,e){if(!j9r(r))throw new TypeError(k9r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Eh.exports=C9r});var Sh=s((O9e,Oh)=>{"use strict";var V9r=Nh();Oh.exports=V9r});var _h=s((S9e,Ah)=>{"use strict";function U9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Ah.exports=U9r});var Ih=s((A9e,Th)=>{"use strict";var G9r=_h();Th.exports=G9r});var Lh=s((_9e,Rh)=>{"use strict";var x9r=q(),D9r=Ih();function H9r(r,e,t){if(!D9r(r,e))throw new TypeError(x9r("invalid argument. %s must be broadcast compatible.",t))}Rh.exports=H9r});var Fh=s((T9e,Ph)=>{"use strict";var W9r=Lh();Ph.exports=W9r});var Bh=s((I9e,Mh)=>{"use strict";function z9r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Mh.exports=z9r});var kh=s((R9e,jh)=>{"use strict";var X9r=Bh();jh.exports=X9r});var Vh=s((L9e,Ch)=>{"use strict";var J9r=q(),Y9r=kh();function $9r(r,e,t,i){if(!Y9r(r,e))throw new TypeError(J9r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Ch.exports=$9r});var Gh=s((P9e,Uh)=>{"use strict";var Z9r=Vh();Uh.exports=Z9r});var Dh=s((F9e,xh)=>{"use strict";function Q9r(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}xh.exports=Q9r});var Wh=s((M9e,Hh)=>{"use strict";function K9r(r,e,t,i){var n,a,u,o,v;for(n=r.length,a=t,u=t,v=0;v<n;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(a+=o*(r[v]-1))}return i[0]=a,i[1]=u,i}Hh.exports=K9r});var q1=s((B9e,Xh)=>{"use strict";var rgr=b(),zh=Dh(),egr=Wh();rgr(zh,"assign",egr);Xh.exports=zh});var Yh=s((j9e,Jh)=>{"use strict";var tgr=q1();function igr(r,e,t,i){var n=tgr(e,t,i);return n[0]>=0&&n[1]<r}Jh.exports=igr});var b1=s((k9e,$h)=>{"use strict";var ngr=Yh();$h.exports=ngr});var Qh=s((C9e,Zh)=>{"use strict";var agr=b1();function sgr(r,e,t,i){if(e.length&&!agr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}Zh.exports=sgr});var ry=s((V9e,Kh)=>{"use strict";var ugr=Qh();Kh.exports=ugr});var ty=s((U9e,ey)=>{"use strict";var ogr=q();function vgr(r,e){if(r===void 0)throw new Error(ogr("invalid invocation. Must provide %s.",e))}ey.exports=vgr});var w1=s((G9e,iy)=>{"use strict";var fgr=ty();iy.exports=fgr});var ay=s((x9e,ny)=>{"use strict";var cgr=q();function lgr(r,e,t,i){if(!(r>e))throw new TypeError(cgr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}ny.exports=lgr});var uy=s((D9e,sy)=>{"use strict";var pgr=ay();sy.exports=pgr});var vy=s((H9e,oy)=>{"use strict";var ggr=q();function mgr(r,e,t,i){if(!(r>=e))throw new TypeError(ggr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}oy.exports=mgr});var cy=s((W9e,fy)=>{"use strict";var dgr=vy();fy.exports=dgr});var py=s((z9e,ly)=>{"use strict";var hgr=gr().isPrimitive,ygr=q();function qgr(r,e){if(!hgr(r))throw new TypeError(ygr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}ly.exports=qgr});var my=s((X9e,gy)=>{"use strict";var bgr=py();gy.exports=bgr});var hy=s((J9e,dy)=>{"use strict";var wgr=q();function Egr(r,e,t,i){if(!(r<e))throw new TypeError(wgr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}dy.exports=Egr});var qy=s((Y9e,yy)=>{"use strict";var Ngr=hy();yy.exports=Ngr});var wy=s(($9e,by)=>{"use strict";var Ogr=q();function Sgr(r,e,t,i){if(!(r<=e))throw new TypeError(Ogr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}by.exports=Sgr});var Ny=s((Z9e,Ey)=>{"use strict";var Agr=wy();Ey.exports=Agr});var Sy=s((Q9e,Oy)=>{"use strict";var _gr=hr().isPrimitive,Tgr=q();function Igr(r,e){if(!_gr(r))throw new TypeError(Tgr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Oy.exports=Igr});var _y=s((K9e,Ay)=>{"use strict";var Rgr=Sy();Ay.exports=Rgr});var E1=s((rge,Ty)=>{"use strict";var Lgr=M().isPrimitive;function Pgr(r){return Lgr(r)&&r>=0}Ty.exports=Pgr});var N1=s((ege,Iy)=>{"use strict";var Fgr=M().isObject;function Mgr(r){return Fgr(r)&&r.valueOf()>=0}Iy.exports=Mgr});var Ly=s((tge,Ry)=>{"use strict";var Bgr=E1(),jgr=N1();function kgr(r){return Bgr(r)||jgr(r)}Ry.exports=kgr});var $a=s((ige,Fy)=>{"use strict";var Py=b(),O1=Ly(),Cgr=E1(),Vgr=N1();Py(O1,"isPrimitive",Cgr);Py(O1,"isObject",Vgr);Fy.exports=O1});var By=s((nge,My)=>{"use strict";var Ugr=$a().isPrimitive,Ggr=q();function xgr(r,e){if(!Ugr(r))throw new TypeError(Ggr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}My.exports=xgr});var ky=s((age,jy)=>{"use strict";var Dgr=By();jy.exports=Dgr});var Vy=s((sge,Cy)=>{"use strict";var Hgr=M().isPrimitive,Wgr=q();function zgr(r,e){if(!Hgr(r))throw new TypeError(Wgr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Cy.exports=zgr});var Gy=s((uge,Uy)=>{"use strict";var Xgr=Vy();Uy.exports=Xgr});var Dy=s((oge,xy)=>{"use strict";var Jgr=q();function Ygr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Jgr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}xy.exports=Ygr});var Wy=s((vge,Hy)=>{"use strict";var $gr=Dy();Hy.exports=$gr});var S1=s((fge,zy)=>{"use strict";var Zgr=gr().isPrimitive;function Qgr(r){return Zgr(r)&&r>0}zy.exports=Qgr});var A1=s((cge,Xy)=>{"use strict";var Kgr=gr().isObject;function rmr(r){return Kgr(r)&&r.valueOf()>0}Xy.exports=rmr});var Yy=s((lge,Jy)=>{"use strict";var emr=S1(),tmr=A1();function imr(r){return emr(r)||tmr(r)}Jy.exports=imr});var te=s((pge,Zy)=>{"use strict";var $y=b(),_1=Yy(),nmr=S1(),amr=A1();$y(_1,"isPrimitive",nmr);$y(_1,"isObject",amr);Zy.exports=_1});var Ky=s((gge,Qy)=>{"use strict";var smr=te().isPrimitive,umr=q();function omr(r,e){if(!smr(r))throw new TypeError(umr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Qy.exports=omr});var T1=s((mge,rq)=>{"use strict";var vmr=Ky();rq.exports=vmr});var I1=s((dge,eq)=>{"use strict";var fmr=M().isPrimitive;function cmr(r){return fmr(r)&&r>0}eq.exports=cmr});var R1=s((hge,tq)=>{"use strict";var lmr=M().isObject;function pmr(r){return lmr(r)&&r.valueOf()>0}tq.exports=pmr});var nq=s((yge,iq)=>{"use strict";var gmr=I1(),mmr=R1();function dmr(r){return gmr(r)||mmr(r)}iq.exports=dmr});var W=s((qge,sq)=>{"use strict";var aq=b(),L1=nq(),hmr=I1(),ymr=R1();aq(L1,"isPrimitive",hmr);aq(L1,"isObject",ymr);sq.exports=L1});var oq=s((bge,uq)=>{"use strict";var qmr=W().isPrimitive,bmr=q();function wmr(r,e){if(!qmr(r))throw new TypeError(bmr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}uq.exports=wmr});var fq=s((wge,vq)=>{"use strict";var Emr=oq();vq.exports=Emr});var P1=s((Ege,cq)=>{"use strict";var Nmr=M().isPrimitive;function Omr(r){return Nmr(r)&&r>=0&&r<=1}cq.exports=Omr});var F1=s((Nge,lq)=>{"use strict";var Smr=M().isObject;function Amr(r){return Smr(r)&&r.valueOf()>=0&&r.valueOf()<=1}lq.exports=Amr});var gq=s((Oge,pq)=>{"use strict";var _mr=P1(),Tmr=F1();function Imr(r){return _mr(r)||Tmr(r)}pq.exports=Imr});var _n=s((Sge,dq)=>{"use strict";var mq=b(),M1=gq(),Rmr=P1(),Lmr=F1();mq(M1,"isPrimitive",Rmr);mq(M1,"isObject",Lmr);dq.exports=M1});var yq=s((Age,hq)=>{"use strict";var Pmr=_n().isPrimitive,Fmr=q();function Mmr(r,e){if(!Pmr(r))throw new TypeError(Fmr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}hq.exports=Mmr});var bq=s((_ge,qq)=>{"use strict";var Bmr=yq();qq.exports=Bmr});var Eq=s((Tge,wq)=>{"use strict";var jmr=dr(),kmr=q();function Cmr(r,e){if(!jmr(r))throw new TypeError(kmr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}wq.exports=Cmr});var Oq=s((Ige,Nq)=>{"use strict";var Vmr=Eq();Nq.exports=Vmr});var Aq=s((Rge,Sq)=>{"use strict";function Umr(r){return r.length===1||r[0].length===1}Sq.exports=Umr});var Tq=s((Lge,_q)=>{"use strict";var Gmr=Aq();_q.exports=Gmr});var Rq=s((Pge,Iq)=>{"use strict";var xmr=dr(),Dmr=Tq();function Hmr(r){return xmr(r)&&Dmr(r)}Iq.exports=Hmr});var B1=s((Fge,Lq)=>{"use strict";var Wmr=Rq();Lq.exports=Wmr});var Fq=s((Mge,Pq)=>{"use strict";var zmr=q(),Xmr=B1();function Jmr(r,e){if(!Xmr(r))throw new TypeError(zmr("invalid argument. %s must consist of only a single row or a single column.",e))}Pq.exports=Jmr});var Bq=s((Bge,Mq)=>{"use strict";var Ymr=Fq();Mq.exports=Ymr});var kq=s((jge,jq)=>{"use strict";function $mr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}jq.exports=$mr});var Vq=s((kge,Cq)=>{"use strict";var Zmr=kq();Cq.exports=Zmr});var Gq=s((Cge,Uq)=>{"use strict";var Qmr=q(),Kmr=Vq();function rdr(r,e,t){if(!Kmr(r,e))throw new TypeError(Qmr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Uq.exports=rdr});var Dq=s((Vge,xq)=>{"use strict";var edr=Gq();xq.exports=edr});var Wq=s((Uge,Hq)=>{"use strict";var tdr=Q().isPrimitive,idr=q();function ndr(r,e){if(!tdr(r))throw new TypeError(idr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}Hq.exports=ndr});var Xq=s((Gge,zq)=>{"use strict";var adr=Wq();zq.exports=adr});var Yq=s((xge,Jq)=>{"use strict";var sdr=q(),udr=hr().isPrimitive;function odr(r,e){var t;for(t=0;t<r.length;t++)if(!udr(r[t]))throw new TypeError(sdr("invalid argument. %s must contain only nonnegative integers.",e))}Jq.exports=odr});var Zq=s((Dge,$q)=>{"use strict";var vdr=Yq();$q.exports=vdr});var Kq=s((Hge,Qq)=>{"use strict";var fdr=q(),cdr=gr().isPrimitive;function ldr(r,e){var t;for(t=0;t<r.length;t++)if(!cdr(r[t]))throw new TypeError(fdr("invalid argument. %s must contain only integers.",e))}Qq.exports=ldr});var eb=s((Wge,rb)=>{"use strict";var pdr=Kq();rb.exports=pdr});var ib=s((zge,tb)=>{"use strict";var gdr=q();function mdr(r){throw new Error(gdr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}tb.exports=mdr});var ab=s((Xge,nb)=>{"use strict";var ddr=ib();nb.exports=ddr});var ob=s((Jge,ub)=>{"use strict";var sb=T1(),hdr=w1();function ydr(r,e,t){sb(r,"Number of rows"),sb(e,"Number of columns"),hdr(t,"a pseudorandom number generator seed")}ub.exports=ydr});var fb=s((Yge,vb)=>{"use strict";var qdr=ob();vb.exports=qdr});var lb=s(($ge,cb)=>{"use strict";var bdr=yr(),wdr=e1();function Edr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&bdr(r.length)&&r.length>=0&&r.length<=wdr}cb.exports=Edr});var gb=s((Zge,pb)=>{"use strict";var Ndr=lb();pb.exports=Ndr});var db=s((Qge,mb)=>{"use strict";var Odr=gb(),Sdr=q();function Adr(r){if(typeof r!="function")throw new TypeError(Sdr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Odr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}mb.exports=Adr});var j1=s((Kge,hb)=>{"use strict";var _dr=db();hb.exports=_dr});var bb=s((rme,qb)=>{"use strict";var k1=gr(),yb=b(),C1=j1(),Tdr=C1(k1.isPrimitive),Idr=C1(k1.isObject),V1=C1(k1);yb(V1,"primitives",Tdr);yb(V1,"objects",Idr);qb.exports=V1});var Nb=s((eme,Eb)=>{"use strict";var U1=hr(),wb=b(),G1=j1(),Rdr=G1(U1.isPrimitive),Ldr=G1(U1.isObject),x1=G1(U1);wb(x1,"primitives",Rdr);wb(x1,"objects",Ldr);Eb.exports=x1});var Sb=s((tme,Ob)=>{"use strict";var ie=rr(),Pdr=dr(),Fdr=gr().isPrimitive,Mdr=bb().primitives,Bdr=hr().isPrimitive,jdr=Nb().primitives,kdr=$a().isPrimitive,Cdr=M().isPrimitive,Vdr=te().isPrimitive,Udr=W().isPrimitive,Gdr=Q().isPrimitive;function xdr(r){return ie(r,"isArray",Pdr),ie(r,"isInteger",Fdr),ie(r,"isIntegerArray",Mdr),ie(r,"isNonNegativeInteger",Bdr),ie(r,"isNonNegativeIntegerArray",jdr),ie(r,"isNonNegativeNumber",kdr),ie(r,"isNumber",Cdr),ie(r,"isPositiveInteger",Vdr),ie(r,"isPositiveNumber",Udr),ie(r,"isString",Gdr),r}Ob.exports=xdr});var _b=s((ime,Ab)=>{"use strict";var X=rr(),Ddr=wh(),Hdr=Sh(),Wdr=Fh(),zdr=Gh(),Xdr=ry(),Jdr=w1(),Ydr=uy(),$dr=cy(),Zdr=my(),Qdr=qy(),Kdr=Ny(),rhr=_y(),ehr=ky(),thr=Gy(),ihr=Wy(),nhr=T1(),ahr=fq(),shr=bq(),uhr=Oq(),ohr=Bq(),vhr=Dq(),fhr=Xq(),chr=Zq(),lhr=eb(),phr=ab(),ghr=fb(),mhr=Sb();function dhr(r){return X(r,"isBetween",Ddr),X(r,"isBoolean",Hdr),X(r,"isBroadcastCompatible",Wdr),X(r,"isBroadcastCompatibleWith",zdr),X(r,"isBufferLengthCompatible",Xdr),X(r,"isDefined",Jdr),X(r,"isGreaterThan",Ydr),X(r,"isGreaterThanEqual",$dr),X(r,"isInteger",Zdr),X(r,"isLessThan",Qdr),X(r,"isLessThanEqual",Kdr),X(r,"isNonNegativeInteger",rhr),X(r,"isNonNegativeNumber",ehr),X(r,"isNumber",thr),X(r,"isOneOf",ihr),X(r,"isPositiveInteger",nhr),X(r,"isPositiveNumber",ahr),X(r,"isProbability",shr),X(r,"isRange",uhr),X(r,"isRange1d",ohr),X(r,"isSameShape",vhr),X(r,"isString",fhr),X(r,"isValidShape",chr),X(r,"isValidStrides",lhr),X(r,"unrecognizedOptionName",phr),X(r,"verifyCommonPRNGArgs",ghr),X(r,"base",mhr({})),r}Ab.exports=dhr});var Ib=s((nme,Tb)=>{"use strict";var D1=4;function hhr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%D1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<D1)return n;for(f=v;f<r;f+=D1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}Tb.exports=hhr});var Lb=s((ame,Rb)=>{"use strict";var Tn=4;function yhr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%Tn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<Tn)return a;for(l=c;l<r;l+=Tn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Tn,f+=Tn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}Rb.exports=yhr});var H1=s((sme,Fb)=>{"use strict";var qhr=b(),Pb=Ib(),bhr=Lb();qhr(Pb,"ndarray",bhr);Fb.exports=Pb});var jb=s((ume,Bb)=>{"use strict";var Mb=rr(),whr=H1().ndarray,Ehr=H1().ndarray;function Nhr(r){return Mb(r,"daxpy",whr),Mb(r,"saxpy",Ehr),r}Bb.exports=Nhr});var Cb=s((ome,kb)=>{"use strict";var Ohr=Xt(),Shr=er();function Ahr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Shr(r)==="[object Error]")return!0;r=Ohr(r)}return!1}kb.exports=Ahr});var Ub=s((vme,Vb)=>{"use strict";var _hr=Cb();Vb.exports=_hr});var W1=s((fme,Gb)=>{"use strict";function Thr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Gb.exports=Thr});var Db=s((cme,xb)=>{"use strict";var Ihr=W1(),Rhr=Ihr();xb.exports=Rhr});var zb=s((lme,Wb)=>{"use strict";var Lhr=b(),Hb=W1(),Phr=Db();Lhr(Hb,"REGEXP",Phr);Wb.exports=Hb});var Jb=s((pme,Xb)=>{"use strict";var Fhr=Q().isPrimitive,Mhr=zb(),Bhr=q();function jhr(r){if(!Fhr(r))throw new TypeError(Bhr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=Mhr().exec(r),r?new RegExp(r[1],r[2]):null}Xb.exports=jhr});var $b=s((gme,Yb)=>{"use strict";var khr=Jb();Yb.exports=khr});var z1=s((mme,Zb)=>{"use strict";var Chr=M().isPrimitive,Vhr=E();function Uhr(r){return Chr(r)&&Vhr(r)}Zb.exports=Uhr});var X1=s((dme,Qb)=>{"use strict";var Ghr=M().isObject,xhr=E();function Dhr(r){return Ghr(r)&&xhr(r.valueOf())}Qb.exports=Dhr});var rw=s((hme,Kb)=>{"use strict";var Hhr=z1(),Whr=X1();function zhr(r){return Hhr(r)||Whr(r)}Kb.exports=zhr});var vr=s((yme,tw)=>{"use strict";var ew=b(),J1=rw(),Xhr=z1(),Jhr=X1();ew(J1,"isPrimitive",Xhr);ew(J1,"isObject",Jhr);tw.exports=J1});var sw=s((qme,aw)=>{"use strict";var iw=vr(),Yhr=Br(),$hr=Q().isPrimitive,Zhr=gr().isPrimitive,nw=q();function Qhr(r,e,t){var i,n;if(!Yhr(r)&&!$hr(r))throw new TypeError(nw("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Zhr(t))throw new TypeError(nw("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(iw(e)){for(;n<i;n++)if(iw(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}aw.exports=Qhr});var Za=s((bme,uw)=>{"use strict";var Khr=sw();uw.exports=Khr});var Qa=s((wme,ow)=>{"use strict";function ryr(r){return Object.keys(Object(r))}ow.exports=ryr});var fw=s((Eme,vw)=>{"use strict";var eyr=Qa();function tyr(){return(eyr(arguments)||"").length!==2}function iyr(){return tyr(1,2)}vw.exports=iyr});var lw=s((Nme,cw)=>{"use strict";var nyr=typeof Object.keys<"u";cw.exports=nyr});var Y1=s((Ome,pw)=>{"use strict";var ayr=er();function syr(r){return ayr(r)==="[object Arguments]"}pw.exports=syr});var dw=s((Sme,mw)=>{"use strict";var uyr=Y1(),gw;function oyr(){return uyr(arguments)}gw=oyr();mw.exports=gw});var $1=s((Ame,hw)=>{"use strict";var vyr=Object.prototype.propertyIsEnumerable;hw.exports=vyr});var bw=s((_me,qw)=>{"use strict";var fyr=$1(),yw;function cyr(){return!fyr.call("beep","0")}yw=cyr();qw.exports=yw});var Ew=s((Tme,ww)=>{"use strict";var lyr=Q(),pyr=vr().isPrimitive,gyr=gr().isPrimitive,myr=$1(),dyr=bw();function hyr(r,e){var t;return r==null?!1:(t=myr.call(r,e),!t&&dyr&&lyr(r)?(e=+e,!pyr(e)&&gyr(e)&&e>=0&&e<r.length):t)}ww.exports=hyr});var In=s((Ime,Nw)=>{"use strict";var yyr=Ew();Nw.exports=yyr});var Sw=s((Rme,Ow)=>{"use strict";var qyr=S(),byr=In(),wyr=dr(),Eyr=yr(),Nyr=ci();function Oyr(r){return r!==null&&typeof r=="object"&&!wyr(r)&&typeof r.length=="number"&&Eyr(r.length)&&r.length>=0&&r.length<=Nyr&&qyr(r,"callee")&&!byr(r,"callee")}Ow.exports=Oyr});var Q1=s((Lme,Aw)=>{"use strict";var Syr=dw(),Ayr=Y1(),_yr=Sw(),Z1;Syr?Z1=Ayr:Z1=_yr;Aw.exports=Z1});var Iw=s((Pme,Tw)=>{"use strict";var Tyr=Q1(),_w=Qa(),Iyr=Array.prototype.slice;function Ryr(r){return Tyr(r)?_w(Iyr.call(r)):_w(r)}Tw.exports=Ryr});var Lw=s((Fme,Rw)=>{"use strict";function Lyr(){}Rw.exports=Lyr});var C=s((Mme,Pw)=>{"use strict";var Pyr=Lw();Pw.exports=Pyr});var Mw=s((Bme,Fw)=>{"use strict";var Fyr=In(),Myr=C(),Byr=Fyr(Myr,"prototype");Fw.exports=Byr});var jw=s((jme,Bw)=>{"use strict";var jyr=In(),kyr={toString:null},Cyr=!jyr(kyr,"toString");Bw.exports=Cyr});var K1=s((kme,kw)=>{"use strict";function Vyr(r){return r.constructor&&r.constructor.prototype===r}kw.exports=Vyr});var Cw=s((Cme,Uyr)=>{Uyr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Uw=s((Vme,Vw)=>{"use strict";var Gyr=typeof window>"u"?void 0:window;Vw.exports=Gyr});var Hw=s((Ume,Dw)=>{"use strict";var xyr=S(),Dyr=Za(),Gw=La(),Hyr=K1(),Wyr=Cw(),Pi=Uw(),xw;function zyr(){var r;if(Gw(Pi)==="undefined")return!1;for(r in Pi)try{Dyr(Wyr,r)===-1&&xyr(Pi,r)&&Pi[r]!==null&&Gw(Pi[r])==="object"&&Hyr(Pi[r])}catch{return!0}return!1}xw=zyr();Dw.exports=xw});var zw=s((Gme,Ww)=>{"use strict";var Xyr=typeof window<"u";Ww.exports=Xyr});var Yw=s((xme,Jw)=>{"use strict";var Jyr=Hw(),Xw=K1(),Yyr=zw();function $yr(r){if(Yyr===!1&&!Jyr)return Xw(r);try{return Xw(r)}catch{return!1}}Jw.exports=$yr});var $w=s((Dme,Zyr)=>{Zyr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Kw=s((Hme,Qw)=>{"use strict";var Qyr=Io(),r2=S(),Kyr=Q1(),rqr=Mw(),eqr=jw(),tqr=Yw(),Zw=$w();function iqr(r){var e,t,i,n,a,u,o;if(n=[],Kyr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!r2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Qyr(r))return n;t=rqr&&i}for(a in r)!(t&&a==="prototype")&&r2(r,a)&&n.push(String(a));if(eqr)for(e=tqr(r),o=0;o<Zw.length;o++)u=Zw[o],!(e&&u==="constructor")&&r2(r,u)&&n.push(String(u));return n}Qw.exports=iqr});var eE=s((Wme,rE)=>{"use strict";var nqr=fw(),aqr=lw(),sqr=Qa(),uqr=Iw(),oqr=Kw(),Ka;aqr?nqr()?Ka=uqr:Ka=sqr:Ka=oqr;rE.exports=Ka});var Fi=s((zme,tE)=>{"use strict";var vqr=eE();tE.exports=vqr});var nE=s((Xme,iE)=>{"use strict";var fqr=typeof Object.getOwnPropertyNames<"u";iE.exports=fqr});var uE=s((Jme,sE)=>{"use strict";var aE=Ri(),cqr=aE.getOwnPropertyNames;function lqr(r){return cqr(aE(r))}sE.exports=lqr});var vE=s((Yme,oE)=>{"use strict";var pqr=Ri(),gqr=Fi();function mqr(r){return gqr(pqr(r))}oE.exports=mqr});var cE=s(($me,fE)=>{"use strict";var dqr=nE(),hqr=uE(),yqr=vE(),e2;dqr?e2=hqr:e2=yqr;fE.exports=e2});var pE=s((Zme,lE)=>{"use strict";var qqr=typeof Object.getOwnPropertyDescriptor<"u";lE.exports=qqr});var mE=s((Qme,gE)=>{"use strict";var bqr=Object.getOwnPropertyDescriptor;function wqr(r,e){var t;return r==null?null:(t=bqr(r,e),t===void 0?null:t)}gE.exports=wqr});var hE=s((Kme,dE)=>{"use strict";var Eqr=S();function Nqr(r,e){return Eqr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}dE.exports=Nqr});var qE=s((rde,yE)=>{"use strict";var Oqr=pE(),Sqr=mE(),Aqr=hE(),t2;Oqr?t2=Sqr:t2=Aqr;yE.exports=t2});var wE=s((ede,bE)=>{"use strict";var _qr=typeof Buffer=="function"?Buffer:null;bE.exports=_qr});var NE=s((tde,EE)=>{"use strict";var Tqr=Ut(),r0=wE();function Iqr(){var r,e;if(typeof r0!="function")return!1;try{typeof r0.from=="function"?e=r0.from([1,2,3,4]):e=new r0([1,2,3,4]),r=Tqr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}EE.exports=Iqr});var SE=s((ide,OE)=>{"use strict";var Rqr=NE();OE.exports=Rqr});var TE=s(e0=>{"use strict";e0.byteLength=Pqr;e0.toByteArray=Mqr;e0.fromByteArray=kqr;var ne=[],xr=[],Lqr=typeof Uint8Array<"u"?Uint8Array:Array,i2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Jt=0,AE=i2.length;Jt<AE;++Jt)ne[Jt]=i2[Jt],xr[i2.charCodeAt(Jt)]=Jt;var Jt,AE;xr["-".charCodeAt(0)]=62;xr["_".charCodeAt(0)]=63;function _E(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Pqr(r){var e=_E(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Fqr(r,e,t){return(e+t)*3/4-t}function Mqr(r){var e,t=_E(r),i=t[0],n=t[1],a=new Lqr(Fqr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=xr[r.charCodeAt(v)]<<18|xr[r.charCodeAt(v+1)]<<12|xr[r.charCodeAt(v+2)]<<6|xr[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=xr[r.charCodeAt(v)]<<2|xr[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=xr[r.charCodeAt(v)]<<10|xr[r.charCodeAt(v+1)]<<4|xr[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Bqr(r){return ne[r>>18&63]+ne[r>>12&63]+ne[r>>6&63]+ne[r&63]}function jqr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Bqr(i));return n.join("")}function kqr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(jqr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ne[e>>2]+ne[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ne[e>>10]+ne[e>>4&63]+ne[e<<2&63]+"=")),n.join("")}});var IE=s(n2=>{n2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(g?-1:1)*u*Math.pow(2,a-i)};n2.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+g]=u&255,g+=h,u/=256,f-=8);r[t+g-h]|=d*128}});var zE=s(ki=>{"use strict";var a2=TE(),Bi=IE(),RE=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;ki.Buffer=w;ki.SlowBuffer=Dqr;ki.INSPECT_MAX_BYTES=50;var t0=2147483647;ki.kMaxLength=t0;w.TYPED_ARRAY_SUPPORT=Cqr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Cqr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function me(r){if(r>t0)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v2(r)}return ME(r,e,t)}w.poolSize=8192;function ME(r,e,t){if(typeof r=="string")return Uqr(r,e);if(ArrayBuffer.isView(r))return Gqr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ae(r,ArrayBuffer)||r&&ae(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ae(r,SharedArrayBuffer)||r&&ae(r.buffer,SharedArrayBuffer)))return u2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=xqr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return ME(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function BE(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Vqr(r,e,t){return BE(r),r<=0?me(r):e!==void 0?typeof t=="string"?me(r).fill(e,t):me(r).fill(e):me(r)}w.alloc=function(r,e,t){return Vqr(r,e,t)};function v2(r){return BE(r),me(r<0?0:f2(r)|0)}w.allocUnsafe=function(r){return v2(r)};w.allocUnsafeSlow=function(r){return v2(r)};function Uqr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=jE(r,e)|0,i=me(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function s2(r){let e=r.length<0?0:f2(r.length)|0,t=me(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function Gqr(r){if(ae(r,Uint8Array)){let e=new Uint8Array(r);return u2(e.buffer,e.byteOffset,e.byteLength)}return s2(r)}function u2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function xqr(r){if(w.isBuffer(r)){let e=f2(r.length)|0,t=me(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||l2(r.length)?me(0):s2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return s2(r.data)}function f2(r){if(r>=t0)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+t0.toString(16)+" bytes");return r|0}function Dqr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(ae(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(ae(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function jE(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ae(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return o2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return WE(r).length;default:if(n)return i?-1:o2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=jE;function Hqr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return rbr(this,e,t);case"utf8":case"utf-8":return CE(this,e,t);case"ascii":return Qqr(this,e,t);case"latin1":case"binary":return Kqr(this,e,t);case"base64":return $qr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ebr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Yt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Yt(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Yt(this,t,t+3),Yt(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Yt(this,t,t+7),Yt(this,t+1,t+6),Yt(this,t+2,t+5),Yt(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?CE(this,0,e):Hqr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=ki.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};RE&&(w.prototype[RE]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(ae(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function kE(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,l2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:LE(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):LE(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function LE(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return kE(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return kE(this,e,t,i,!1)};function Wqr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(l2(o))return u;r[t+u]=o}return u}function zqr(r,e,t,i){return i0(o2(e,r.length-t),r,t,i)}function Xqr(r,e,t,i){return i0(abr(e),r,t,i)}function Jqr(r,e,t,i){return i0(WE(e),r,t,i)}function Yqr(r,e,t,i){return i0(sbr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return Wqr(this,e,t,i);case"utf8":case"utf-8":return zqr(this,e,t,i);case"ascii":case"latin1":case"binary":return Xqr(this,e,t,i);case"base64":return Jqr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yqr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $qr(r,e,t){return e===0&&t===r.length?a2.fromByteArray(r):a2.fromByteArray(r.slice(e,t))}function CE(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Zqr(i)}var PE=4096;function Zqr(r){let e=r.length;if(e<=PE)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=PE));return t}function Qqr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Kqr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function rbr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=ubr[r[a]];return n}function ebr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=tt(function(e){e=e>>>0,ji(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Rn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Bi.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Bi.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Bi.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Bi.read(this,e,!1,52,8)};function Er(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;Er(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function VE(r,e,t,i,n){HE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function UE(r,e,t,i,n){HE(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=tt(function(e,t=0){return VE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=tt(function(e,t=0){return UE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);Er(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);Er(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||Er(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=tt(function(e,t=0){return VE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=tt(function(e,t=0){return UE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function GE(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xE(r,e,t,i,n){return e=+e,t=t>>>0,n||GE(r,e,t,4,34028234663852886e22,-34028234663852886e22),Bi.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return xE(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return xE(this,e,t,!1,i)};function DE(r,e,t,i,n){return e=+e,t=t>>>0,n||GE(r,e,t,8,17976931348623157e292,-17976931348623157e292),Bi.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return DE(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return DE(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Mi={};function c2(r,e,t){Mi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}c2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);c2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);c2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=FE(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=FE(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function FE(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function tbr(r,e,t){ji(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Rn(e,r.length-(t+1))}function HE(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Mi.ERR_OUT_OF_RANGE("value",o,r)}tbr(i,n,a)}function ji(r,e){if(typeof r!="number")throw new Mi.ERR_INVALID_ARG_TYPE(e,"number",r)}function Rn(r,e,t){throw Math.floor(r)!==r?(ji(r,t),new Mi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Mi.ERR_BUFFER_OUT_OF_BOUNDS:new Mi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var ibr=/[^+/0-9A-Za-z-_]/g;function nbr(r){if(r=r.split("=")[0],r=r.trim().replace(ibr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function o2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function abr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function sbr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function WE(r){return a2.toByteArray(nbr(r))}function i0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function ae(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function l2(r){return r!==r}var ubr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function tt(r){return typeof BigInt>"u"?obr:r}function obr(){throw new Error("BigInt not supported")}});var JE=s((ode,XE)=>{"use strict";var vbr=zE().Buffer;XE.exports=vbr});var $E=s((vde,YE)=>{"use strict";function fbr(){throw new Error("not implemented")}YE.exports=fbr});var it=s((fde,ZE)=>{"use strict";var cbr=SE(),lbr=JE(),pbr=$E(),p2;cbr()?p2=lbr:p2=pbr;ZE.exports=p2});var KE=s((cde,QE)=>{"use strict";var gbr=I(),mbr=it(),dbr=gbr(mbr.from);QE.exports=dbr});var eN=s((lde,rN)=>{"use strict";var hbr=Ut(),ybr=q(),qbr=it();function bbr(r){if(!hbr(r))throw new TypeError(ybr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return qbr.from(r)}rN.exports=bbr});var iN=s((pde,tN)=>{"use strict";var wbr=Ut(),Ebr=q(),Nbr=it();function Obr(r){if(!wbr(r))throw new TypeError(Ebr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Nbr(r)}tN.exports=Obr});var aN=s((gde,nN)=>{"use strict";var Sbr=KE(),Abr=eN(),_br=iN(),g2;Sbr?g2=Abr:g2=_br;nN.exports=g2});var oN=s((mde,uN)=>{"use strict";var Tbr=mi(),Ibr=Kr(),Rbr=gi(),Lbr=pi(),Pbr=Gt(),Fbr=Ke(),Mbr=pr(),Bbr=Qr(),jbr=lr(),sN;function kbr(r){return new Tbr(r)}function Cbr(r){return new Ibr(r)}function Vbr(r){return new Rbr(r)}function Ubr(r){return new Lbr(r)}function Gbr(r){return new Pbr(r)}function xbr(r){return new Fbr(r)}function Dbr(r){return new Mbr(r)}function Hbr(r){return new Bbr(r)}function Wbr(r){return new jbr(r)}function zbr(){var r={int8array:kbr,uint8array:Cbr,uint8clampedarray:Vbr,int16array:Ubr,uint16array:Gbr,int32array:xbr,uint32array:Dbr,float32array:Hbr,float64array:Wbr};return r}sN=zbr();uN.exports=sN});var pN=s((dde,lN)=>{"use strict";var n0=S(),m2=dr(),vN=Ut(),Xbr=Ub(),fN=La(),Jbr=$b(),Ybr=Za(),cN=Fi(),$br=cE(),Ln=qE(),Zbr=Xt(),Pn=Ze(),Qbr=aN(),Kbr=oN();function rwr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(Zbr(r)),e.push(r),n.push(o),t=$br(r),v=0;v<t.length;v++)i=t[v],a=Ln(r,i),n0(a,"value")&&(u=m2(r[i])?[]:{},a.value=$t(r[i],u,e,n,-1)),Pn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function ewr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=cN(r),v=0;v<i.length;v++)u=i[v],n=Ln(r,u),n0(n,"value")&&(a=m2(r[u])?[]:{},n.value=$t(r[u],a,e,t,-1)),Pn(o,u,n);return o}function $t(r,e,t,i,n){var a,u,o,v,f,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(vN(r))return Qbr(r);if(Xbr(r))return ewr(r);if(o=fN(r),o==="date")return new Date(+r);if(o==="regexp")return Jbr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=Kbr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?rwr(r):{};if(u=cN(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=fN(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||vN(p)){a==="object"?(v=Ln(r,c),n0(v,"value")&&(v.value=$t(p)),Pn(e,c,v)):e[c]=$t(p);continue}if(g=Ybr(t,p),g!==-1){e[c]=i[g];continue}l=m2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=$t(p,l,t,i,n):(v=Ln(r,c),n0(v,"value")&&(v.value=$t(p,l,t,i,n)),Pn(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=Ln(r,c),Pn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}lN.exports=$t});var mN=s((hde,gN)=>{"use strict";var twr=dr(),iwr=hr().isPrimitive,nwr=q(),awr=R(),swr=pN();function uwr(r,e){var t;if(arguments.length>1){if(!iwr(e))throw new TypeError(nwr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=awr;return t=twr(r)?new Array(r.length):{},swr(r,t,[r],[t],e)}gN.exports=uwr});var Fn=s((yde,dN)=>{"use strict";var owr=mN();dN.exports=owr});var hN=s((qde,vwr)=>{vwr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var qN=s((bde,yN)=>{"use strict";var fwr=Fn(),cwr=hN();function lwr(){return fwr(cwr)}yN.exports=lwr});var bN=s((wde,pwr)=>{pwr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var EN=s((Ede,wN)=>{"use strict";var gwr=Fn(),mwr=bN();function dwr(){return gwr(mwr)}wN.exports=dwr});var NN=s((Nde,hwr)=>{hwr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var SN=s((Ode,ON)=>{"use strict";var ywr=Fn(),qwr=NN();function bwr(){return ywr(qwr)}ON.exports=bwr});var AN=s((Sde,wwr)=>{wwr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var TN=s((Ade,_N)=>{"use strict";var Ewr=AN();function Nwr(){return Ewr.slice()}_N.exports=Nwr});var IN=s((_de,Owr)=>{Owr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var LN=s((Tde,RN)=>{"use strict";var Swr=Fn(),Awr=IN();function _wr(){return Swr(Awr)}RN.exports=_wr});var FN=s((Ide,PN)=>{"use strict";var Mn=rr(),Twr=qN(),Iwr=EN(),Rwr=SN(),Lwr=TN(),Pwr=LN();function Fwr(r){return Mn(r,"AFINN_111",Twr),Mn(r,"AFINN_96",Iwr),Mn(r,"ANSCOMBES_QUARTET",Rwr),Mn(r,"HERNDON_VENUS_SEMIDIAMETERS",Lwr),Mn(r,"NIGHTINGALES_ROSE",Pwr),r}PN.exports=Fwr});var BN=s((Rde,MN)=>{"use strict";function Mwr(r,e){return r+e}MN.exports=Mwr});var kN=s((Lde,jN)=>{"use strict";var Bwr=BN();jN.exports=Bwr});var VN=s((Pde,CN)=>{"use strict";var jwr=R(),kwr=V();function Cwr(r){return r===jwr||r===kwr}CN.exports=Cwr});var Cr=s((Fde,UN)=>{"use strict";var Vwr=VN();UN.exports=Vwr});var DN=s((Mde,xN)=>{"use strict";var GN=ja();function Uwr(r){return r>0?GN(r-1):GN(r+1)}xN.exports=Uwr});var a0=s((Bde,HN)=>{"use strict";var Gwr=DN();HN.exports=Gwr});var zN=s((jde,WN)=>{"use strict";var xwr=Math.sqrt;WN.exports=xwr});var U=s((kde,XN)=>{"use strict";var Dwr=zN();XN.exports=Dwr});var YN=s((Cde,JN)=>{"use strict";function Hwr(r){return Math.abs(r)}JN.exports=Hwr});var Y=s((Vde,$N)=>{"use strict";var Wwr=YN();$N.exports=Wwr});var QN=s((Ude,ZN)=>{"use strict";var zwr=Kr(),Xwr=Gt(),Jwr={uint16:Xwr,uint8:zwr};ZN.exports=Jwr});var tO=s((Gde,eO)=>{"use strict";var KN=QN(),rO;function Ywr(){var r,e;return r=new KN.uint16(1),r[0]=4660,e=new KN.uint8(r.buffer),e[0]===52}rO=Ywr();eO.exports=rO});var Xr=s((xde,iO)=>{"use strict";var $wr=tO();iO.exports=$wr});var sO=s((Dde,aO)=>{"use strict";var Zwr=Xr(),nO,d2,h2;Zwr===!0?(d2=1,h2=0):(d2=0,h2=1);nO={HIGH:d2,LOW:h2};aO.exports=nO});var y2=s((Hde,fO)=>{"use strict";var Qwr=pr(),Kwr=lr(),oO=sO(),vO=new Kwr(1),uO=new Qwr(vO.buffer),rEr=oO.HIGH,eEr=oO.LOW;function tEr(r,e,t,i){return vO[0]=r,e[i]=uO[rEr],e[i+t]=uO[eEr],e}fO.exports=tEr});var lO=s((Wde,cO)=>{"use strict";var iEr=y2();function nEr(r){return iEr(r,[0>>>0,0>>>0],1,0)}cO.exports=nEr});var Ci=s((zde,gO)=>{"use strict";var aEr=b(),pO=lO(),sEr=y2();aEr(pO,"assign",sEr);gO.exports=pO});var dO=s((Xde,mO)=>{"use strict";var uEr=Xr(),q2;uEr===!0?q2=0:q2=1;mO.exports=q2});var yO=s((Jde,hO)=>{"use strict";var oEr=pr(),vEr=lr(),fEr=dO(),b2=new vEr(1),cEr=new oEr(b2.buffer);function lEr(r,e){return b2[0]=r,cEr[fEr]=e>>>0,b2[0]}hO.exports=lEr});var de=s((Yde,qO)=>{"use strict";var pEr=yO();qO.exports=pEr});var wO=s(($de,bO)=>{"use strict";function gEr(r){return r|0}bO.exports=gEr});var w2=s((Zde,EO)=>{"use strict";var mEr=wO();EO.exports=mEr});var se=s((Qde,NO)=>{"use strict";var dEr=2147483647;NO.exports=dEr});var E2=s((Kde,OO)=>{"use strict";var hEr=2147483648;OO.exports=hEr});var AO=s((rhe,SO)=>{"use strict";var yEr=Xr(),N2;yEr===!0?N2=1:N2=0;SO.exports=N2});var IO=s((ehe,TO)=>{"use strict";var qEr=pr(),bEr=lr(),wEr=AO(),_O=new bEr(1),EEr=new qEr(_O.buffer);function NEr(r){return _O[0]=r,EEr[wEr]}TO.exports=NEr});var ar=s((the,RO)=>{"use strict";var OEr=IO();RO.exports=OEr});var FO=s((ihe,PO)=>{"use strict";var SEr=Xr(),LO,O2,S2;SEr===!0?(O2=1,S2=0):(O2=0,S2=1);LO={HIGH:O2,LOW:S2};PO.exports=LO});var CO=s((nhe,kO)=>{"use strict";var AEr=pr(),_Er=lr(),BO=FO(),jO=new _Er(1),MO=new AEr(jO.buffer),TEr=BO.HIGH,IEr=BO.LOW;function REr(r,e){return MO[TEr]=r,MO[IEr]=e,jO[0]}kO.exports=REr});var Vi=s((ahe,VO)=>{"use strict";var LEr=CO();VO.exports=LEr});var GO=s((she,UO)=>{"use strict";var PEr=E2(),FEr=se(),MEr=Ci(),BEr=ar(),jEr=Vi(),A2=[0,0];function kEr(r,e){var t,i;return MEr.assign(r,A2,1,0),t=A2[0],t&=FEr,i=BEr(e),i&=PEr,t|=i,jEr(t,A2[1])}UO.exports=kEr});var s0=s((uhe,xO)=>{"use strict";var CEr=GO();xO.exports=CEr});var WO=s((ohe,HO)=>{"use strict";var DO=a0(),VEr=s0(),UEr=V(),u0=R();function GEr(r,e){return e===UEr?u0:e===u0?0:e>0?DO(e)?r:0:DO(e)?VEr(u0,r):u0}HO.exports=GEr});var XO=s((vhe,zO)=>{"use strict";var xEr=se(),DEr=ar(),HEr=1072693247,o0=1e300,v0=1e-300;function WEr(r,e){var t,i;return i=DEr(r),t=i&xEr,t<=HEr?e<0?o0*o0:v0*v0:e>0?o0*o0:v0*v0}zO.exports=WEr});var $O=s((fhe,YO)=>{"use strict";var zEr=Y(),JO=R();function XEr(r,e){return r===-1?(r-r)/(r-r):r===1?1:zEr(r)<1==(e===JO)?0:JO}YO.exports=XEr});var QO=s((che,ZO)=>{"use strict";var JEr=Xr(),_2;JEr===!0?_2=1:_2=0;ZO.exports=_2});var rS=s((lhe,KO)=>{"use strict";var YEr=pr(),$Er=lr(),ZEr=QO(),T2=new $Er(1),QEr=new YEr(T2.buffer);function KEr(r,e){return T2[0]=r,QEr[ZEr]=e>>>0,T2[0]}KO.exports=KEr});var he=s((phe,eS)=>{"use strict";var rNr=rS();eS.exports=rNr});var ue=s((ghe,tS)=>{"use strict";var eNr=1023;tS.exports=eNr});var nS=s((mhe,iS)=>{"use strict";function tNr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}iS.exports=tNr});var oS=s((dhe,uS)=>{"use strict";var iNr=ar(),f0=de(),aS=he(),nNr=ue(),aNr=nS(),sNr=1048575,sS=1048576,uNr=1072693248,oNr=536870912,vNr=524288,fNr=20,cNr=9007199254740992,lNr=.9617966939259756,pNr=.9617967009544373,gNr=-7028461650952758e-24,mNr=[1,1.5],dNr=[0,.5849624872207642],hNr=[0,1350039202129749e-23];function yNr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K,G;return H=0,t<sS&&(e*=cNr,H-=53,t=iNr(e)),H+=(t>>fNr)-nNr|0,K=t&sNr|0,t=K|uNr|0,K<=235662?G=0:K<767610?G=1:(G=0,H+=1,t-=sS),e=aS(e,t),c=mNr[G],F=e-c,A=1/(e+c),n=F*A,u=f0(n,0),i=(t>>1|oNr)+vNr,i+=G<<18,v=aS(0,i),f=e-(v-c),o=A*(F-u*v-u*f),a=n*n,O=a*a*aNr(a),O+=o*(u+n),a=u*u,v=3+a+O,v=f0(v,0),f=O-(v-3-a),F=u*v,A=o*v+f*n,p=F+A,p=f0(p,0),g=A-(p-F),h=pNr*p,d=gNr*p+g*lNr+hNr[G],l=dNr[G],N=H,m=h+d+l+N,m=f0(m,0),y=d-(m-N-l-h),r[0]=m,r[1]=y,r}uS.exports=yNr});var fS=s((hhe,vS)=>{"use strict";function qNr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}vS.exports=qNr});var lS=s((yhe,cS)=>{"use strict";var bNr=de(),wNr=fS(),ENr=1.4426950408889634,NNr=1.4426950216293335,ONr=19259629911266175e-24;function SNr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*wNr(n),u=NNr*n,o=n*ONr-a*ENr,i=u+o,i=bNr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}cS.exports=SNr});var I2=s((qhe,pS)=>{"use strict";var ANr=1023;pS.exports=ANr});var mS=s((bhe,gS)=>{"use strict";var _Nr=-1023;gS.exports=_Nr});var R2=s((whe,dS)=>{"use strict";var TNr=-1074;dS.exports=TNr});var L2=s((Ehe,hS)=>{"use strict";var INr=22250738585072014e-324;hS.exports=INr});var P2=s((Nhe,yS)=>{"use strict";var RNr=L2(),LNr=Cr(),PNr=E(),FNr=Y(),MNr=4503599627370496;function BNr(r,e,t,i){return PNr(r)||LNr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&FNr(r)<RNr?(e[i]=r*MNr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}yS.exports=BNr});var bS=s((Ohe,qS)=>{"use strict";var jNr=P2();function kNr(r){return jNr(r,[0,0],1,0)}qS.exports=kNr});var NS=s((She,ES)=>{"use strict";var CNr=b(),wS=bS(),VNr=P2();CNr(wS,"assign",VNr);ES.exports=wS});var Bn=s((Ahe,OS)=>{"use strict";var UNr=2146435072;OS.exports=UNr});var AS=s((_he,SS)=>{"use strict";var GNr=ar(),xNr=Bn(),DNr=ue();function HNr(r){var e=GNr(r);return e=(e&xNr)>>>20,e-DNr|0}SS.exports=HNr});var TS=s((The,_S)=>{"use strict";var WNr=AS();_S.exports=WNr});var RS=s((Ihe,IS)=>{"use strict";var zNr=R(),XNr=V(),JNr=ue(),YNr=I2(),$Nr=mS(),ZNr=R2(),QNr=E(),KNr=Cr(),rOr=s0(),eOr=NS().assign,tOr=TS(),iOr=Ci(),nOr=Vi(),aOr=2220446049250313e-31,sOr=2148532223>>>0,F2=[0,0],M2=[0,0];function uOr(r,e){var t,i;return e===0||r===0||QNr(r)||KNr(r)?r:(eOr(r,F2,1,0),r=F2[0],e+=F2[1],e+=tOr(r),e<ZNr?rOr(0,r):e>YNr?r<0?XNr:zNr:(e<=$Nr?(e+=52,i=aOr):i=1,iOr.assign(r,M2,1,0),t=M2[0],t&=sOr,t|=e+JNr<<20,i*nOr(t,M2[1])))}IS.exports=uOr});var c0=s((Rhe,LS)=>{"use strict";var oOr=RS();LS.exports=oOr});var l0=s((Lhe,PS)=>{"use strict";var vOr=.6931471805599453;PS.exports=vOr});var p0=s((Phe,FS)=>{"use strict";var fOr=1048575;FS.exports=fOr});var BS=s((Fhe,MS)=>{"use strict";function cOr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}MS.exports=cOr});var xS=s((Mhe,GS)=>{"use strict";var lOr=ar(),jS=he(),pOr=de(),gOr=w2(),mOr=c0(),dOr=l0(),kS=ue(),CS=se(),VS=p0(),hOr=BS(),US=1048576,yOr=1071644672,jn=20,qOr=.6931471824645996,bOr=-1904654299957768e-24;function wOr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g;return p=r&CS|0,g=(p>>jn)-kS|0,l=0,p>yOr&&(l=r+(US>>g+1)>>>0,g=((l&CS)>>jn)-kS|0,i=(l&~(VS>>g))>>>0,a=jS(0,i),l=(l&VS|US)>>jn-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=pOr(a,0),o=a*qOr,v=(t-(a-e))*dOr+a*bOr,c=o+v,f=v-(c-o),a=c*c,n=c-a*hOr(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=lOr(c),r=gOr(r),r+=l<<jn>>>0,r>>jn<=0?c=mOr(c,l):c=jS(c,r),c}GS.exports=wOr});var KS=s((Bhe,QS)=>{"use strict";var DS=E(),HS=a0(),WS=Cr(),EOr=yr(),zS=U(),NOr=Y(),B2=Ci(),OOr=de(),XS=w2(),SOr=V(),AOr=R(),j2=se(),_Or=WO(),TOr=XO(),IOr=$O(),ROr=oS(),LOr=lS(),POr=xS(),FOr=1072693247,MOr=1105199104,BOr=1139802112,JS=1083179008,jOr=1072693248,kOr=1083231232,COr=3230714880>>>0,YS=31,nt=1e300,at=1e-300,VOr=8008566259537294e-32,ye=[0,0],$S=[0,0];function ZS(r,e){var t,i,n,a,u,o,v,f,c,l,p,g,h,d,m,y;if(DS(r)||DS(e))return NaN;if(B2.assign(e,ye,1,0),o=ye[0],v=ye[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return zS(r);if(e===-.5)return 1/zS(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(WS(e))return IOr(r,e)}if(B2.assign(r,ye,1,0),a=ye[0],u=ye[1],u===0){if(a===0)return _Or(r,e);if(r===1)return 1;if(r===-1&&HS(e))return-1;if(WS(r))return r===SOr?ZS(-0,-e):e<0?0:AOr}if(r<0&&EOr(e)===!1)return(r-r)/(r-r);if(n=NOr(r),t=a&j2|0,i=o&j2|0,f=a>>>YS|0,c=o>>>YS|0,f&&HS(e)?f=-1:f=1,i>MOr){if(i>BOr)return TOr(r,e);if(t<FOr)return c===1?f*nt*nt:f*at*at;if(t>jOr)return c===0?f*nt*nt:f*at*at;h=LOr($S,n)}else h=ROr($S,n,t);if(l=OOr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,B2.assign(d,ye,1,0),m=XS(ye[0]),y=XS(ye[1]),m>=JS){if((m-JS|y)!==0||g+VOr>d-p)return f*nt*nt}else if((m&j2)>=kOr&&((m-COr|y)!==0||g<=d-p))return f*at*at;return d=POr(m,p,g),f*d}QS.exports=ZS});var D=s((jhe,rA)=>{"use strict";var UOr=KS();rA.exports=UOr});var Ui=s((khe,eA)=>{"use strict";var GOr=9007199254740991;eA.exports=GOr});var g0=s((Che,tA)=>{"use strict";var xOr=308;tA.exports=xOr});var k2=s((Vhe,iA)=>{"use strict";var DOr=-308;iA.exports=DOr});var m0=s((Uhe,nA)=>{"use strict";var HOr=-324;nA.exports=HOr});var cA=s((Ghe,fA)=>{"use strict";var aA=E(),d0=Cr(),sA=D(),WOr=Y(),uA=z(),zOr=Ui(),oA=g0(),XOr=k2(),JOr=m0(),YOr=V(),$Or=zOr+1,vA=1e308;function ZOr(r,e){var t,i;return aA(r)||aA(e)||d0(e)?NaN:d0(r)||r===0||e<JOr||WOr(r)>$Or&&e<=0?r:e>oA?r>=0?0:YOr:e<XOr?(t=sA(10,-(e+oA)),i=r*vA*t,d0(i)?r:uA(i)/vA/t):(t=sA(10,-e),i=r*t,d0(i)?r:uA(i)/t)}fA.exports=ZOr});var pA=s((xhe,lA)=>{"use strict";var QOr=cA();lA.exports=QOr});var mA=s((Dhe,gA)=>{"use strict";function KOr(r,e){return r*e}gA.exports=KOr});var hA=s((Hhe,dA)=>{"use strict";var rSr=mA();dA.exports=rSr});var qA=s((Whe,yA)=>{"use strict";function eSr(r,e){return r-e}yA.exports=eSr});var wA=s((zhe,bA)=>{"use strict";var tSr=qA();bA.exports=tSr});var NA=s((Xhe,EA)=>{"use strict";var kn=rr(),iSr=kN(),nSr=pA(),aSr=hA(),sSr=D(),uSr=wA();function oSr(r){return kn(r,"add",iSr),kn(r,"floorn",nSr),kn(r,"mul",aSr),kn(r,"pow",sSr),kn(r,"sub",uSr),r}EA.exports=oSr});var _A=s((Jhe,AA)=>{"use strict";var OA=M().isPrimitive,vSr=R(),fSr=V(),SA=q();function cSr(r,e){return t;function t(i,n){var a;if(!OA(i)){if(e.nonnumeric===void 0)throw new TypeError(SA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!OA(n)){if(e.nonnumeric===void 0)throw new TypeError(SA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===vSr?e.pinf:a===fSr?e.ninf:a}}AA.exports=cSr});var C2=s((Yhe,TA)=>{"use strict";var lSr=_A();TA.exports=lSr});var RA=s(($he,IA)=>{"use strict";var pSr=Ta(),gSr=lo(),mSr=Ya(),dSr=q(),hSr=Ja(),ySr=C2(),qSr=["number","number"],bSr=["First argument","Second argument"];function wSr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(dSr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=hSr([r[0],r[1]],qSr,bSr),t=pSr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=mSr(t),a=ySr(e,i),r[0].push(n),r[1].push(t),gSr(r[0],r[1],a),n}IA.exports=wSr});var PA=s((Zhe,LA)=>{"use strict";var ESr=RA();LA.exports=ESr});var MA=s((Qhe,FA)=>{"use strict";var NSr=M().isPrimitive,OSr=R(),SSr=V(),ASr=q();function _Sr(r,e){return t;function t(i){var n;if(!NSr(i)){if(e.nonnumeric===void 0)throw new TypeError(ASr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===OSr?e.pinf:n===SSr?e.ninf:n}}FA.exports=_Sr});var V2=s((Khe,BA)=>{"use strict";var TSr=MA();BA.exports=TSr});var kA=s((rye,jA)=>{"use strict";var U2=M().isPrimitive,ISr=R(),RSr=V(),G2=q();function LSr(r,e){return t;function t(i,n,a){var u;if(!U2(i)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!U2(n)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!U2(a)){if(e.nonnumeric===void 0)throw new TypeError(G2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===ISr?e.pinf:u===RSr?e.ninf:u}}jA.exports=LSr});var x2=s((eye,CA)=>{"use strict";var PSr=kA();CA.exports=PSr});var UA=s((tye,VA)=>{"use strict";var h0=M().isPrimitive,FSr=R(),MSr=V(),y0=q();function BSr(r,e){return t;function t(i,n,a,u){var o;if(!h0(i)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!h0(n)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!h0(a)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!h0(u)){if(e.nonnumeric===void 0)throw new TypeError(y0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===FSr?e.pinf:o===MSr?e.ninf:o}}VA.exports=BSr});var xA=s((iye,GA)=>{"use strict";var jSr=UA();GA.exports=jSr});var HA=s((nye,DA)=>{"use strict";var Cn=M().isPrimitive,kSr=R(),CSr=V(),Vn=q();function VSr(r,e){return t;function t(i,n,a,u,o){var v;if(!Cn(i)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Cn(n)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Cn(a)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Cn(u)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Cn(o)){if(e.nonnumeric===void 0)throw new TypeError(Vn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,n,a,u,o),v!==v?e.nan:v===kSr?e.pinf:v===CSr?e.ninf:v}}DA.exports=VSr});var zA=s((aye,WA)=>{"use strict";var USr=HA();WA.exports=USr});var JA=s((sye,XA)=>{"use strict";var GSr=Ta(),xSr=go(),DSr=Ya(),HSr=q(),WSr=Ja(),zSr=x2(),XSr=["number","number","number"],JSr=["First argument","Second argument","Third argument"];function YSr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(HSr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=WSr([r[0],r[1],r[2]],XSr,JSr),t=GSr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=DSr(t),a=zSr(e,i),r[0].push(n),r[1].push(t),xSr(r[0],r[1],a),n}XA.exports=YSr});var $A=s((uye,YA)=>{"use strict";var $Sr=JA();YA.exports=$Sr});var QA=s((oye,ZA)=>{"use strict";var ZSr=dr(),QSr=y1(),KSr=q(),rAr=V2();function eAr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(KSr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=rAr(e,i),ZSr(t)?(QSr([t,t],[t.length,t[0].length],n),t):n(t)}ZA.exports=eAr});var r_=s((vye,KA)=>{"use strict";var tAr=QA();KA.exports=tAr});var t_=s((fye,e_)=>{"use strict";var st=rr(),iAr=PA(),nAr=V2(),aAr=C2(),sAr=x2(),uAr=xA(),oAr=zA(),vAr=$A(),fAr=r_();function cAr(r){return st(r,"binary",iAr),st(r,"d_d",nAr),st(r,"dd_d",aAr),st(r,"ddd_d",sAr),st(r,"dddd_d",uAr),st(r,"ddddd_d",oAr),st(r,"ternary",vAr),st(r,"unary",fAr),r}e_.exports=cAr});var n_=s((cye,i_)=>{"use strict";function lAr(r){return r*r}i_.exports=lAr});var q0=s((lye,a_)=>{"use strict";var pAr=n_();a_.exports=pAr});var b0=s((pye,s_)=>{"use strict";var gAr=.7853981633974483;s_.exports=gAr});var o_=s((gye,u_)=>{"use strict";function mAr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}u_.exports=mAr});var f_=s((mye,v_)=>{"use strict";function dAr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}v_.exports=dAr});var p_=s((dye,l_)=>{"use strict";var hAr=E(),yAr=U(),c_=b0(),qAr=o_(),bAr=f_(),wAr=6123233995736766e-32;function EAr(r){var e,t,i,n,a;if(hAr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*bAr(t),t=yAr(t+t),a=c_-t,t=t*n-wAr,a-=t,a+=c_;else{if(i<1e-8)return r;t=i*i,a=t*qAr(t),a=i*a+i}return e?-a:a}l_.exports=EAr});var Zt=s((hye,g_)=>{"use strict";var NAr=p_();g_.exports=NAr});var y_=s((yye,h_)=>{"use strict";var OAr=E(),m_=Zt(),SAr=U(),d_=b0(),AAr=6123233995736766e-32;function _Ar(r){var e;return OAr(r)?NaN:r<-1||r>1?NaN:r>.5?2*m_(SAr(.5-.5*r)):(e=d_-m_(r),e+=AAr,e+=d_,e)}h_.exports=_Ar});var Un=s((qye,q_)=>{"use strict";var TAr=y_();q_.exports=TAr});var w_=s((bye,b_)=>{"use strict";function IAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}b_.exports=IAr});var A_=s((wye,S_)=>{"use strict";var RAr=E(),E_=ar(),N_=he(),LAr=R(),PAr=V(),O_=ue(),FAr=w_(),D2=.6931471803691238,H2=19082149292705877e-26,MAr=.41421356237309503,BAr=-.2928932188134525,jAr=1862645149230957e-24,kAr=5551115123125783e-32,CAr=9007199254740992,VAr=.6666666666666666;function UAr(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||RAr(r))return NaN;if(r===-1)return PAr;if(r===LAr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<MAr){if(i<jAr)return i<kAr?r:r-r*r*.5;r>BAr&&(c=0,n=r,t=1)}return c!==0&&(i<CAr?(f=1+r,t=E_(f),c=(t>>20)-O_,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=E_(f),c=(t>>20)-O_,a=0),t&=1048575,t<434334?f=N_(f,t|1072693248):(c+=1,f=N_(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*H2,c*D2+a):(v=e*(1-VAr*n),c*D2-(v-(c*H2+a)-n)):(u=n/(2+n),o=u*u,v=o*FAr(o),c===0?n-(e-u*(e+v)):c*D2-(e-(u*(e+v)+(c*H2+a))-n))}S_.exports=UAr});var ut=s((Eye,__)=>{"use strict";var GAr=A_();__.exports=GAr});var I_=s((Nye,T_)=>{"use strict";function xAr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}T_.exports=xAr});var L_=s((Oye,R_)=>{"use strict";function DAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}R_.exports=DAr});var B_=s((Sye,M_)=>{"use strict";var P_=ar(),HAr=he(),WAr=E(),zAr=ue(),XAr=V(),JAr=I_(),YAr=L_(),w0=.6931471803691238,E0=19082149292705877e-26,$Ar=0x40000000000000,ZAr=.3333333333333333,F_=1048575,QAr=2146435072,KAr=1048576,r_r=1072693248;function e_r(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?XAr:WAr(r)||r<0?NaN:(t=P_(r),a=0,t<KAr&&(a-=54,r*=$Ar,t=P_(r)),t>=QAr?r+r:(a+=(t>>20)-zAr|0,t&=F_,v=t+614244&1048576|0,r=HAr(r,t|v^r_r),a+=v>>20|0,o=r-1,(F_&2+t)<3?o===0?a===0?0:a*w0+a*E0:(u=o*o*(.5-ZAr*o),a===0?o-u:a*w0-(u-a*E0-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*JAr(l),i=p*YAr(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*w0-(e-(c*(e+u)+a*E0)-o)):a===0?o-c*(o-u):a*w0-(c*(o-u)-a*E0-o))))}M_.exports=e_r});var P=s((Aye,j_)=>{"use strict";var t_r=B_();j_.exports=t_r});var U_=s((_ye,V_)=>{"use strict";var i_r=E(),n_r=ut(),k_=U(),a_r=l0(),C_=P(),s_r=1<<28;function u_r(r){var e;return i_r(r)||r<1?NaN:r===1?0:r>=s_r?C_(r)+a_r:r>2?C_(2*r-1/(r+k_(r*r-1))):(e=r-1,n_r(e+k_(2*e+e*e)))}V_.exports=u_r});var x_=s((Tye,G_)=>{"use strict";var o_r=U_();G_.exports=o_r});var N0=s((Iye,D_)=>{"use strict";var v_r=1.5707963267948966;D_.exports=v_r});var W_=s((Rye,H_)=>{"use strict";function f_r(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}H_.exports=f_r});var X_=s((Lye,z_)=>{"use strict";function c_r(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}z_.exports=c_r});var $_=s((Pye,Y_)=>{"use strict";var l_r=E(),p_r=R(),W2=N0(),g_r=b0(),m_r=V(),d_r=W_(),h_r=X_(),J_=6123233995736766e-32,y_r=2.414213562373095;function q_r(r){var e,t,i,n;return l_r(r)||r===0?r:r===p_r?W2:r===m_r?-W2:(r<0&&(t=!0,r=-r),e=0,r>y_r?(i=W2,e=1,r=-(1/r)):r<=.66?i=0:(i=g_r,e=2,r=(r-1)/(r+1)),n=r*r,n=n*d_r(n)/h_r(n),n=r*n+r,e===2?n+=.5*J_:e===1&&(n+=J_),i+=n,t?-i:i)}Y_.exports=q_r});var O0=s((Fye,Z_)=>{"use strict";var b_r=$_();Z_.exports=b_r});var K_=s((Mye,Q_)=>{"use strict";var w_r=O0();function E_r(r){return w_r(1/r)}Q_.exports=E_r});var eT=s((Bye,rT)=>{"use strict";var N_r=K_();rT.exports=N_r});var iT=s((jye,tT)=>{"use strict";var O_r=Zt();function S_r(r){return O_r(1+r)}tT.exports=S_r});var aT=s((kye,nT)=>{"use strict";var A_r=iT();nT.exports=A_r});var uT=s((Cye,sT)=>{"use strict";var __r=Zt();function T_r(r){return __r(1-r)}sT.exports=T_r});var vT=s((Vye,oT)=>{"use strict";var I_r=uT();oT.exports=I_r});var cT=s((Uye,fT)=>{"use strict";var R_r=Zt();function L_r(r){return R_r(1/r)}fT.exports=L_r});var pT=s((Gye,lT)=>{"use strict";var P_r=cT();lT.exports=P_r});var hT=s((xye,dT)=>{"use strict";var F_r=Cr(),M_r=E(),B_r=ut(),gT=U(),j_r=l0(),mT=P(),k_r=1/(1<<28),C_r=1<<28;function V_r(r){var e,t,i;return M_r(r)||F_r(r)?r:(r<0&&(r=-r,e=!0),r<k_r?i=r:r>C_r?i=mT(r)+j_r:r>2?i=mT(2*r+1/(gT(r*r+1)+r)):(t=r*r,i=B_r(r+t/(1+gT(1+t)))),e?-i:i)}dT.exports=V_r});var z2=s((Dye,yT)=>{"use strict";var U_r=hT();yT.exports=U_r});var bT=s((Hye,qT)=>{"use strict";var G_r=z2();function x_r(r){return G_r(1/r)}qT.exports=x_r});var ET=s((Wye,wT)=>{"use strict";var D_r=bT();wT.exports=D_r});var OT=s((zye,NT)=>{"use strict";var H_r=Un(),W_r=U();function z_r(r){return 2*H_r(W_r(r))}NT.exports=z_r});var AT=s((Xye,ST)=>{"use strict";var X_r=OT();ST.exports=X_r});var TT=s((Jye,_T)=>{"use strict";var J_r=Zt(),Y_r=U();function $_r(r){return 2*J_r(Y_r(r))}_T.exports=$_r});var RT=s((Yye,IT)=>{"use strict";var Z_r=TT();IT.exports=Z_r});var FT=s(($ye,PT)=>{"use strict";var Q_r=E(),LT=ut(),K_r=R(),rTr=V(),eTr=1/(1<<28);function tTr(r){var e,t;return Q_r(r)||r<-1||r>1?NaN:r===1?K_r:r===-1?rTr:(r<0&&(e=!0,r=-r),r<eTr?e?-r:r:(r<.5?(t=r+r,t=.5*LT(t+t*r/(1-r))):t=.5*LT((r+r)/(1-r)),e?-t:t))}PT.exports=tTr});var BT=s((Zye,MT)=>{"use strict";var iTr=FT();MT.exports=iTr});var kT=s((Qye,jT)=>{"use strict";var nTr=Un();function aTr(r){return nTr(1+r)}jT.exports=aTr});var VT=s((Kye,CT)=>{"use strict";var sTr=kT();CT.exports=sTr});var GT=s((rqe,UT)=>{"use strict";var uTr=Un();function oTr(r){return uTr(1-r)}UT.exports=oTr});var DT=s((eqe,xT)=>{"use strict";var vTr=GT();xT.exports=vTr});var WT=s((tqe,HT)=>{"use strict";var fTr=z();function cTr(r){return fTr(r)===r&&r>=0}HT.exports=cTr});var X2=s((iqe,zT)=>{"use strict";var lTr=WT();zT.exports=lTr});var XT=s((nqe,pTr)=>{pTr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var YT=s((aqe,JT)=>{"use strict";var gTr=X2(),mTr=E(),dTr=a0(),hTr=V(),yTr=R(),qTr=XT(),bTr=258;function wTr(r){return mTr(r)||!gTr(r)?NaN:dTr(r)?0:r>bTr?r/2&1?yTr:hTr:qTr[r/2]}JT.exports=wTr});var ZT=s((sqe,$T)=>{"use strict";var ETr=YT();$T.exports=ETr});var KT=s((uqe,QT)=>{"use strict";var NTr=Xr(),J2;NTr===!0?J2=0:J2=1;QT.exports=J2});var tI=s((oqe,eI)=>{"use strict";var OTr=pr(),STr=lr(),ATr=KT(),rI=new STr(1),_Tr=new OTr(rI.buffer);function TTr(r){return rI[0]=r,_Tr[ATr]}eI.exports=TTr});var nI=s((vqe,iI)=>{"use strict";var ITr=tI();iI.exports=ITr});var vI=s((fqe,oI)=>{"use strict";var RTr=z(),S0=c0(),T0=Qe(),sI=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],LTr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Y2=16777216,$2=5960464477539063e-23,A0=T0(20),aI=T0(20),_0=T0(20),mr=T0(20);function uI(r,e,t,i,n,a,u,o,v){var f,c,l,p,g,h,d,m,y;for(p=a,y=i[t],m=t,g=0;m>0;g++)c=$2*y|0,mr[g]=y-Y2*c|0,y=i[m-1]+c,m-=1;if(y=S0(y,n),y-=8*RTr(y*.125),d=y|0,y-=d,l=0,n>0?(g=mr[t-1]>>24-n,d+=g,mr[t-1]-=g<<24-n,l=mr[t-1]>>23-n):n===0?l=mr[t-1]>>23:y>=.5&&(l=2),l>0){for(d+=1,f=0,g=0;g<t;g++)m=mr[g],f===0?m!==0&&(f=1,mr[g]=16777216-m):mr[g]=16777215-m;if(n>0)switch(n){case 1:mr[t-1]&=8388607;break;case 2:mr[t-1]&=4194303;break}l===2&&(y=1-y,f!==0&&(y-=S0(1,n)))}if(y===0){for(m=0,g=t-1;g>=a;g--)m|=mr[g];if(m===0){for(h=1;mr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(v[o+g]=sI[u+g],c=0,m=0;m<=o;m++)c+=r[m]*v[o+(g-m)];i[g]=c}return t+=h,uI(r,e,t,i,n,a,u,o,v)}}if(y===0)for(t-=1,n-=24;mr[t]===0;)t-=1,n-=24;else y=S0(y,-n),y>=Y2?(c=$2*y|0,mr[t]=y-Y2*c|0,t+=1,n+=24,mr[t]=c):mr[t]=y|0;for(c=S0(1,n),g=t;g>=0;g--)i[g]=c*mr[g],c*=$2;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=LTr[h]*i[g+h];_0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=_0[g];for(l===0?e[0]=c:e[0]=-c,c=_0[0]-c,g=1;g<=t;g++)c+=_0[g];return l===0?e[1]=c:e[1]=-c,d&7}function PTr(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?A0[c]=0:A0[c]=sI[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*A0[o+(c-l)];aI[c]=n}return v=a,uI(r,e,v,aI,f,a,u,o,A0)}oI.exports=PTr});var cI=s((cqe,fI)=>{"use strict";var FTr=Math.round;fI.exports=FTr});var Z2=s((lqe,lI)=>{"use strict";var MTr=cI();lI.exports=MTr});var dI=s((pqe,mI)=>{"use strict";var BTr=Z2(),pI=ar(),jTr=.6366197723675814,kTr=1.5707963267341256,CTr=6077100506506192e-26,VTr=6077100506303966e-26,UTr=20222662487959506e-37,GTr=20222662487111665e-37,xTr=84784276603689e-45,gI=2047;function DTr(r,e,t){var i,n,a,u,o,v,f;return n=BTr(r*jTr),u=r-n*kTr,o=n*CTr,f=e>>20|0,t[0]=u-o,i=pI(t[0]),v=f-(i>>20&gI),v>16&&(a=u,o=n*VTr,u=a-o,o=n*UTr-(a-u-o),t[0]=u-o,i=pI(t[0]),v=f-(i>>20&gI),v>49&&(a=u,o=n*GTr,u=a-o,o=n*xTr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}mI.exports=DTr});var yI=s((gqe,hI)=>{"use strict";var HTr=se(),WTr=Bn(),zTr=p0(),XTr=ar(),JTr=nI(),YTr=Vi(),$Tr=vI(),I0=dI(),ZTr=0,QTr=16777216,ot=1.5707963267341256,Qt=6077100506506192e-26,R0=2*Qt,L0=3*Qt,P0=4*Qt,KTr=598523,rIr=1072243195,eIr=1073928572,tIr=1074752122,iIr=1074977148,nIr=1075183036,aIr=1075388923,sIr=1075594811,uIr=1094263291,Gn=[0,0,0],xn=[0,0];function oIr(r,e){var t,i,n,a,u,o,v,f;if(n=XTr(r),a=n&HTr|0,a<=rIr)return e[0]=r,e[1]=0,0;if(a<=tIr)return(a&zTr)===KTr?I0(r,a,e):a<=eIr?r>0?(f=r-ot,e[0]=f-Qt,e[1]=f-e[0]-Qt,1):(f=r+ot,e[0]=f+Qt,e[1]=f-e[0]+Qt,-1):r>0?(f=r-2*ot,e[0]=f-R0,e[1]=f-e[0]-R0,2):(f=r+2*ot,e[0]=f+R0,e[1]=f-e[0]+R0,-2);if(a<=sIr)return a<=nIr?a===iIr?I0(r,a,e):r>0?(f=r-3*ot,e[0]=f-L0,e[1]=f-e[0]-L0,3):(f=r+3*ot,e[0]=f+L0,e[1]=f-e[0]+L0,-3):a===aIr?I0(r,a,e):r>0?(f=r-4*ot,e[0]=f-P0,e[1]=f-e[0]-P0,4):(f=r+4*ot,e[0]=f+P0,e[1]=f-e[0]+P0,-4);if(a<uIr)return I0(r,a,e);if(a>=WTr)return e[0]=NaN,e[1]=NaN,0;for(t=JTr(r),i=(a>>20)-1046,f=YTr(a-(i<<20|0),t),o=0;o<2;o++)Gn[o]=f|0,f=(f-Gn[o])*QTr;for(Gn[2]=f,u=3;Gn[u-1]===ZTr;)u-=1;return v=$Tr(Gn,xn,i,u,1),r<0?(e[0]=-xn[0],e[1]=-xn[1],-v):(e[0]=xn[0],e[1]=xn[1],v)}hI.exports=oIr});var Dn=s((mqe,qI)=>{"use strict";var vIr=yI();qI.exports=vIr});var EI=s((dqe,wI)=>{"use strict";var bI=-.16666666666666632,fIr=.00833333333332249,cIr=-.0001984126982985795,lIr=27557313707070068e-22,pIr=-25050760253406863e-24,gIr=158969099521155e-24,mIr=.0416666666666666,dIr=-.001388888888887411,hIr=2480158728947673e-20,yIr=-27557314351390663e-23,qIr=2087572321298175e-24,bIr=-11359647557788195e-27;function wIr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=fIr+f*(cIr+f*lIr)+f*v*(pIr+f*gIr),o=f*r,e===0?t[n]=r+o*(bI+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*bI),u=f*(mIr+f*(dIr+f*hIr)),u+=v*v*(yIr+f*(qIr+f*bIr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}wI.exports=wIr});var K2=s((hqe,OI)=>{"use strict";var EIr=se(),NIr=Bn(),OIr=ar(),SIr=Dn(),NI=EI(),AIr=1072243195,_Ir=1044381696,Q2=[0,0];function TIr(r,e,t,i){var n,a;if(n=OIr(r),n&=EIr,n<=AIr)return n<_Ir&&(r|0)===0&&(e[i]=r,e[i+t]=0),NI(r,0,e,t,i);if(n>=NIr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=SIr(r,Q2),NI(Q2[0],Q2[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}OI.exports=TIr});var AI=s((yqe,SI)=>{"use strict";var IIr=K2();function RIr(r){return IIr(r,[0,0],1,0)}SI.exports=RIr});var Hn=s((qqe,TI)=>{"use strict";var LIr=b(),_I=AI(),PIr=K2();LIr(_I,"assign",PIr);TI.exports=_I});var RI=s((bqe,II)=>{"use strict";function FIr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}II.exports=FIr});var PI=s((wqe,LI)=>{"use strict";function MIr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}LI.exports=MIr});var MI=s((Eqe,FI)=>{"use strict";function BIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}FI.exports=BIr});var jI=s((Nqe,BI)=>{"use strict";function jIr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}BI.exports=jIr});var CI=s((Oqe,kI)=>{"use strict";var kIr=U(),CIr=Hn().assign,VIr=R(),UIr=RI(),GIr=PI(),xIr=MI(),DIr=jI(),HIr=.5641895835477563,WIr=2.404825557695773,zIr=5.520078110286311,XIr=616,JIr=-.0014244423042272315,YIr=1413,$Ir=.0005468602863106496,Wn=[0,0];function ZIr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===VIr?0:r===0?1:r<=4?(a=r*r,n=UIr(a),u=(r+WIr)*(r-XIr/256-JIr),u*n):r<=8?(a=1-r*r/64,n=GIr(a),u=(r+zIr)*(r-YIr/256-$Ir),u*n):(a=8/r,i=a*a,e=xIr(i),t=DIr(i),u=HIr/kIr(r),CIr(r,Wn,1,0),u*(e*(Wn[1]+Wn[0])-a*t*(Wn[0]-Wn[1])))}kI.exports=ZIr});var r3=s((Sqe,VI)=>{"use strict";var QIr=CI();VI.exports=QIr});var F0=s((Aqe,UI)=>{"use strict";var KIr=1.772453850905516;UI.exports=KIr});var xI=s((_qe,GI)=>{"use strict";function rRr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}GI.exports=rRr});var HI=s((Tqe,DI)=>{"use strict";function eRr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}DI.exports=eRr});var zI=s((Iqe,WI)=>{"use strict";function tRr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}WI.exports=tRr});var JI=s((Rqe,XI)=>{"use strict";function iRr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}XI.exports=iRr});var $I=s((Lqe,YI)=>{"use strict";var nRr=U(),aRr=Y(),sRr=Hn().assign,uRr=R(),oRr=F0(),vRr=xI(),fRr=HI(),cRr=zI(),lRr=JI(),pRr=3.8317059702075125,gRr=7.015586669815619,mRr=981,dRr=-.0003252797924876844,hRr=1796,yRr=-38330184381246464e-21,zn=[0,0];function qRr(r){var e,t,i,n,a,u,o,v;return v=aRr(r),r===0||v===uRr?0:(v<=4?(u=r*r,a=vRr(u),o=v*(v+pRr)*(v-mRr/256-dRr),e=o*a):v<=8?(u=r*r,a=fRr(u),o=v*(v+gRr)*(v-hRr/256-yRr),e=o*a):(u=8/v,n=u*u,t=cRr(n),i=lRr(n),o=1/(nRr(v)*oRr),sRr(v,zn,1,0),e=o*(t*(zn[0]-zn[1])+u*i*(zn[0]+zn[1]))),r<0&&(e*=-1),e)}YI.exports=qRr});var e3=s((Pqe,ZI)=>{"use strict";var bRr=$I();ZI.exports=bRr});var Vr=s((Fqe,QI)=>{"use strict";var wRr=3.141592653589793;QI.exports=wRr});var rR=s((Mqe,KI)=>{"use strict";function ERr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}KI.exports=ERr});var tR=s((Bqe,eR)=>{"use strict";function NRr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}eR.exports=NRr});var nR=s((jqe,iR)=>{"use strict";function ORr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}iR.exports=ORr});var sR=s((kqe,aR)=>{"use strict";function SRr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}aR.exports=SRr});var oR=s((Cqe,uR)=>{"use strict";function ARr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}uR.exports=ARr});var pR=s((Vqe,lR)=>{"use strict";var t3=P(),_Rr=U(),TRr=Vr(),IRr=F0(),RRr=V(),LRr=R(),PRr=Hn().assign,i3=r3(),FRr=rR(),MRr=tR(),BRr=nR(),jRr=sR(),kRr=oR(),CRr=1/IRr,n3=2/TRr,vR=.8935769662791675,fR=3.957678419314858,cR=7.086051060301773,VRr=228,URr=.0029519662791675214,GRr=1013,xRr=.0006471693148578684,DRr=1814,HRr=.00011356030177269763,Xn=[0,0];function WRr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?RRr:r===LRr?0:r<=3?(a=r*r,u=t3(r/vR)*i3(r)*n3,n=FRr(a),o=(r+vR)*(r-VRr/256-URr),u+o*n):r<=5.5?(a=r*r,u=t3(r/fR)*i3(r)*n3,n=MRr(a),o=(r+fR)*(r-GRr/256-xRr),u+o*n):r<=8?(a=r*r,u=t3(r/cR)*i3(r)*n3,n=BRr(a),o=(r+cR)*(r-DRr/256-HRr),u+o*n):(a=8/r,i=a*a,e=jRr(i),t=kRr(i),o=CRr/_Rr(r),PRr(r,Xn,1,0),o*(e*(Xn[0]-Xn[1])+a*t*(Xn[1]+Xn[0])))}lR.exports=WRr});var mR=s((Uqe,gR)=>{"use strict";var zRr=pR();gR.exports=zRr});var hR=s((Gqe,dR)=>{"use strict";function XRr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}dR.exports=XRr});var qR=s((xqe,yR)=>{"use strict";function JRr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}yR.exports=JRr});var wR=s((Dqe,bR)=>{"use strict";function YRr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}bR.exports=YRr});var NR=s((Hqe,ER)=>{"use strict";function $Rr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}ER.exports=$Rr});var RR=s((Wqe,IR)=>{"use strict";var OR=P(),ZRr=U(),QRr=Vr(),KRr=F0(),rLr=V(),eLr=R(),tLr=Hn().assign,SR=e3(),iLr=hR(),nLr=qR(),aLr=wR(),sLr=NR(),uLr=1/KRr,AR=2/QRr,_R=2.197141326031017,TR=5.429681040794135,oLr=562,vLr=.001828826031017035,fLr=1390,cLr=-6459205864867228e-21,Jn=[0,0];function lLr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?rLr:r===eLr?0:r<=4?(a=r*r,u=OR(r/_R)*SR(r)*AR,n=iLr(a),o=(r+_R)*(r-oLr/256-vLr)/r,u+o*n):r<=8?(a=r*r,u=OR(r/TR)*SR(r)*AR,n=nLr(a),o=(r+TR)*(r-fLr/256-cLr)/r,u+o*n):(a=8/r,i=a*a,e=aLr(i),t=sLr(i),o=uLr/ZRr(r),tLr(r,Jn,1,0),o*(a*t*(Jn[0]-Jn[1])-e*(Jn[0]+Jn[1])))}IR.exports=lLr});var PR=s((zqe,LR)=>{"use strict";var pLr=RR();LR.exports=pLr});var MR=s((Xqe,FR)=>{"use strict";function gLr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}FR.exports=gLr});var jR=s((Jqe,BR)=>{"use strict";function mLr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}BR.exports=mLr});var CR=s((Yqe,kR)=>{"use strict";var dLr=MR(),hLr=jR();function yLr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*dLr(a),i+=n*n*hLr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}kR.exports=yLr});var a3=s(($qe,VR)=>{"use strict";var qLr=CR();VR.exports=qLr});var xR=s((Zqe,GR)=>{"use strict";var UR=-.16666666666666632,bLr=.00833333333332249,wLr=-.0001984126982985795,ELr=27557313707070068e-22,NLr=-25050760253406863e-24,OLr=158969099521155e-24;function SLr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=bLr+a*(wLr+a*ELr)+a*n*(NLr+a*OLr),i=a*r,e===0?r+i*(UR+a*t):r-(a*(.5*e-i*t)-e-i*UR)}GR.exports=SLr});var s3=s((Qqe,DR)=>{"use strict";var ALr=xR();DR.exports=ALr});var zR=s((Kqe,WR)=>{"use strict";var _Lr=ar(),u3=a3(),HR=s3(),TLr=Dn(),qe=[0,0],ILr=2147483647,RLr=1072243195,LLr=1044381696,PLr=2146435072;function FLr(r){var e,t;if(e=_Lr(r),e&=ILr,e<=RLr)return e<LLr?1:u3(r,0);if(e>=PLr)return NaN;switch(t=TLr(r,qe),t&3){case 0:return u3(qe[0],qe[1]);case 1:return-HR(qe[0],qe[1]);case 2:return-u3(qe[0],qe[1]);default:return HR(qe[0],qe[1])}}WR.exports=FLr});var Kt=s((rbe,XR)=>{"use strict";var MLr=zR();XR.exports=MLr});var $R=s((ebe,YR)=>{"use strict";var BLr=se(),jLr=Bn(),kLr=ar(),JR=a3(),o3=s3(),CLr=Dn(),VLr=1072243195,ULr=1045430272,be=[0,0];function GLr(r){var e,t;if(e=kLr(r),e&=BLr,e<=VLr)return e<ULr?r:o3(r,0);if(e>=jLr)return NaN;switch(t=CLr(r,be),t&3){case 0:return o3(be[0],be[1]);case 1:return JR(be[0],be[1]);case 2:return-o3(be[0],be[1]);default:return-JR(be[0],be[1])}}YR.exports=GLr});var ri=s((tbe,ZR)=>{"use strict";var xLr=$R();ZR.exports=xLr});var rL=s((ibe,KR)=>{"use strict";var DLr=E(),HLr=Cr(),WLr=Y(),QR=Kt(),zLr=ri(),XLr=z(),v3=Vr(),JLr=Ui(),YLr=JLr+1;function $Lr(r){var e,t,i,n;return DLr(r)?NaN:HLr(r)?NaN:(e=WLr(r),e>YLr?1:(t=XLr(e),i=e-t,i===.5?0:(i<.25?n=QR(v3*i):i<.75?(i=.5-i,n=zLr(v3*i)):(i=1-i,n=-QR(v3*i)),t%2===1?-n:n)))}KR.exports=$Lr});var tL=s((nbe,eL)=>{"use strict";var ZLr=rL();eL.exports=ZLr});var nL=s((abe,iL)=>{"use strict";var QLr=1.618033988749895;iL.exports=QLr});var sL=s((sbe,aL)=>{"use strict";var KLr=E(),rPr=tL(),ePr=D(),tPr=nL(),iPr=R(),nPr=V(),aPr=2.23606797749979;function sPr(r){var e,t;return KLr(r)||r===iPr||r===nPr?NaN:(e=ePr(tPr,r),t=rPr(r)/e,(e-t)/aPr)}aL.exports=sPr});var oL=s((ube,uL)=>{"use strict";var uPr=sL();uL.exports=uPr});var fL=s((obe,vL)=>{"use strict";function oPr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}vL.exports=oPr});var gL=s((vbe,pL)=>{"use strict";var vPr=L2(),fPr=E2(),cL=se(),c3=ar(),cPr=he(),lPr=Cr(),lL=Vi(),pPr=Ci(),gPr=E(),mPr=fL(),dPr=4294967295>>>0,hPr=3221225472>>>0,yPr=0x40000000000000,f3=2147483648>>>0,qPr=1>>>0,bPr=715094163>>>0,wPr=696219795>>>0,EPr=c3(vPr),ei=[0>>>0,0>>>0];function NPr(r){var e,t,i,n,a,u,o;return r===0||gPr(r)||lPr(r)?r:(t=c3(r)>>>0,e=(t&fPr)>>>0,t&=cL,t<EPr?(u=yPr*r,i=(c3(u)&cL)>>>0,i=(i/3>>>0)+wPr>>>0,u=lL(e|i,0)):(u=0,i=(t/3>>>0)+bPr>>>0,u=cPr(u,e|i)),n=u*u*(u/r),u*=mPr(n),pPr.assign(u,ei,1,0),ei[1]&f3?(ei[0]+=qPr,ei[1]&=~f3):ei[1]|=f3,u=lL(ei[0]&dPr,ei[1]&hPr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}pL.exports=NPr});var dL=s((fbe,mL)=>{"use strict";var OPr=gL();mL.exports=OPr});var yL=s((cbe,hL)=>{"use strict";var SPr=Math.ceil;hL.exports=SPr});var Gi=s((lbe,qL)=>{"use strict";var APr=yL();qL.exports=APr});var wL=s((pbe,bL)=>{"use strict";function _Pr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}bL.exports=_Pr});var NL=s((gbe,EL)=>{"use strict";function TPr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}EL.exports=TPr});var AL=s((mbe,SL)=>{"use strict";var IPr=ar(),RPr=wL(),LPr=NL(),OL=1048575,PPr=.3333333333333333;function FPr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=IPr(r),a=r-1,(OL&2+n)<3?a===0?0:a*a*(PPr*a-.5):(u=a/(2+a),o=u*u,n&=OL,c=n-398458|0,f=o*o,l=440401-n|0,t=f*RPr(f),i=o*LPr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}SL.exports=FPr});var RL=s((dbe,IL)=>{"use strict";var _L=ar(),MPr=he(),BPr=de(),jPr=E(),kPr=ue(),CPr=V(),VPr=AL(),UPr=0x40000000000000,TL=.4342944818781689,GPr=25082946711645275e-27,xPr=.30102999566361177,DPr=3694239077158931e-28,HPr=1048575,WPr=2146435072,zPr=1048576,XPr=1072693248;function JPr(r){var e,t,i,n,a,u,o,v;return jPr(r)||r<0?NaN:r===0?CPr:(t=_L(r),u=0,t<zPr&&(u-=54,r*=UPr,t=_L(r)),t>=WPr?r+r:(u+=(t>>20)-kPr|0,t&=HPr,a=t+614244&1048576|0,r=MPr(r,t|a^XPr),u+=a>>20|0,o=u,n=VPr(r),r-=1,e=BPr(r,0),i=r-e,v=o*DPr+(r+n)*GPr,v+=(i+n)*TL+e*TL,v+o*xPr))}IL.exports=JPr});var PL=s((hbe,LL)=>{"use strict";var YPr=RL();LL.exports=YPr});var ML=s((ybe,FL)=>{"use strict";var $Pr=E(),ZPr=Cr(),QPr=D(),KPr=z(),rFr=Gi(),eFr=PL(),tFr=g0(),iFr=m0(),nFr=R();function aFr(r){var e,t;return $Pr(r)||ZPr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=eFr(r),e===-1?t=KPr(t):t=rFr(t),t<=iFr?e*0:t>tFr?nFr:e*QPr(10,t))}FL.exports=aFr});var jL=s((qbe,BL)=>{"use strict";var sFr=ML();BL.exports=sFr});var CL=s((bbe,kL)=>{"use strict";function uFr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}kL.exports=uFr});var UL=s((wbe,VL)=>{"use strict";function oFr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}VL.exports=oFr});var DL=s((Ebe,xL)=>{"use strict";var vFr=ar(),fFr=CL(),cFr=UL(),GL=1048575,lFr=.3333333333333333;function pFr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=vFr(r),a=r-1,(GL&2+n)<3?a===0?0:a*a*(lFr*a-.5):(u=a/(2+a),o=u*u,n&=GL,c=n-398458|0,f=o*o,l=440401-n|0,t=f*fFr(f),i=o*cFr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}xL.exports=pFr});var zL=s((Nbe,WL)=>{"use strict";var gFr=ar(),mFr=he(),dFr=de(),hFr=Ci(),yFr=E(),qFr=se(),bFr=p0(),wFr=ue(),EFr=V(),NFr=DL(),OFr=0x40000000000000,HL=1.4426950407214463,SFr=16751713164886512e-26,AFr=2146435072,_Fr=1048576,TFr=1072693248,l3=[0,0];function IFr(r){var e,t,i,n,a,u,o;if(yFr(r)||r<0)return NaN;if(hFr.assign(r,l3,1,0),i=l3[0],n=l3[1],o=0,i<_Fr){if((i&qFr|n)===0)return EFr;o-=54,r*=OFr,i=gFr(r)}return i>=AFr?r+r:(o+=(i>>20)-wFr|0,i&=bFr,u=i+614244&1048576|0,r=mFr(r,i|u^TFr),o+=u>>20|0,a=NFr(r),r-=1,e=dFr(r,0),t=r-e,(r+a)*SFr+(t+a)*HL+e*HL+o)}WL.exports=IFr});var JL=s((Obe,XL)=>{"use strict";var RFr=zL();XL.exports=RFr});var $L=s((Sbe,YL)=>{"use strict";var LFr=E(),PFr=Cr(),FFr=D(),MFr=z(),BFr=Gi(),jFr=JL(),kFr=I2(),CFr=R2(),VFr=R();function UFr(r){var e,t;return LFr(r)||PFr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=jFr(r),t===CFr)?r:(e===-1?t=MFr(t):t=BFr(t),t>kFr?VFr:e*FFr(2,t))}YL.exports=UFr});var QL=s((Abe,ZL)=>{"use strict";var GFr=$L();ZL.exports=GFr});var rP=s((_be,KL)=>{"use strict";var xFr=z(),DFr=Gi();function HFr(r){return r<0?DFr(r):xFr(r)}KL.exports=HFr});var M0=s((Tbe,eP)=>{"use strict";var WFr=rP();eP.exports=WFr});var iP=s((Ibe,tP)=>{"use strict";function zFr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}tP.exports=zFr});var aP=s((Rbe,nP)=>{"use strict";var XFr=c0(),JFr=iP();function YFr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*JFr(n),u=1-(e-i*a/(2-a)-r),XFr(u,t)}nP.exports=YFr});var cP=s((Lbe,fP)=>{"use strict";var $Fr=E(),sP=M0(),ZFr=V(),uP=R(),QFr=aP(),KFr=.6931471803691238,rMr=19082149292705877e-26,oP=1.4426950408889634,eMr=709.782712893384,tMr=-745.1332191019411,vP=1/(1<<28),iMr=-vP;function nMr(r){var e,t,i;return $Fr(r)||r===uP?r:r===ZFr?0:r>eMr?uP:r<tMr?0:r>iMr&&r<vP?1+r:(r<0?i=sP(oP*r-.5):i=sP(oP*r+.5),e=r-i*KFr,t=i*rMr,QFr(e,t,i))}fP.exports=nMr});var sr=s((Pbe,lP)=>{"use strict";var aMr=cP();lP.exports=aMr});var gP=s((Fbe,pP)=>{"use strict";var sMr=V();function uMr(r){return r===0&&1/r===sMr}pP.exports=uMr});var p3=s((Mbe,mP)=>{"use strict";var oMr=gP();mP.exports=oMr});var g3=s((Bbe,dP)=>{"use strict";var vMr=2.5066282746310007;dP.exports=vMr});var yP=s((jbe,hP)=>{"use strict";function fMr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}hP.exports=fMr});var wP=s((kbe,bP)=>{"use strict";var cMr=g3(),qP=D(),lMr=sr(),pMr=yP(),gMr=143.01608;function mMr(r){var e,t,i;return e=1/r,e=1+e*pMr(e),t=lMr(r),r>gMr?(i=qP(r,.5*r-.25),t=i*(i/t)):t=qP(r,r-.5)/t,cMr*t*e}bP.exports=mMr});var NP=s((Cbe,EP)=>{"use strict";var dMr=.5772156649015329;EP.exports=dMr});var SP=s((Vbe,OP)=>{"use strict";var hMr=NP();function yMr(r,e){return e/((1+hMr*r)*r)}OP.exports=yMr});var _P=s((Ube,AP)=>{"use strict";function qMr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}AP.exports=qMr});var BP=s((Gbe,MP)=>{"use strict";var bMr=E(),wMr=yr(),EMr=p3(),TP=Y(),NMr=z(),OMr=ri(),IP=R(),RP=V(),LP=Vr(),PP=wP(),FP=SP(),SMr=_P();function AMr(r){var e,t,i,n;if(wMr(r)&&r<0||r===RP||bMr(r))return NaN;if(r===0)return EMr(r)?RP:IP;if(r>171.61447887182297)return IP;if(r<-170.5674972726612)return 0;if(t=TP(r),t>33)return r>=0?PP(r):(i=NMr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*OMr(LP*n),e*LP/(TP(n)*PP(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return FP(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return FP(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*SMr(r))}MP.exports=AMr});var xi=s((xbe,jP)=>{"use strict";var _Mr=BP();jP.exports=_Mr});var VP=s((Dbe,CP)=>{"use strict";var TMr=E(),IMr=Cr(),kP=Kt(),m3=ri(),RMr=Y(),Yn=s0(),$n=Vr();function LMr(r){var e,t;return TMr(r)?NaN:IMr(r)?NaN:(t=r%2,e=RMr(t),e===0||e===1?Yn(0,t):e<.25?m3($n*t):e<.75?(e=.5-e,Yn(kP($n*e),t)):e<1.25?(t=Yn(1,t)-t,m3($n*t)):e<1.75?(e-=1.5,-Yn(kP($n*e),t)):(t-=Yn(2,t),m3($n*t)))}CP.exports=LMr});var Zn=s((Hbe,UP)=>{"use strict";var PMr=VP();UP.exports=PMr});var xP=s((Wbe,GP)=>{"use strict";function FMr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}GP.exports=FMr});var HP=s((zbe,DP)=>{"use strict";function MMr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}DP.exports=MMr});var zP=s((Xbe,WP)=>{"use strict";function BMr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}WP.exports=BMr});var JP=s((Jbe,XP)=>{"use strict";function jMr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}XP.exports=jMr});var $P=s((Ybe,YP)=>{"use strict";function kMr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}YP.exports=kMr});var QP=s(($be,ZP)=>{"use strict";function CMr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}ZP.exports=CMr});var rF=s((Zbe,KP)=>{"use strict";function VMr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}KP.exports=VMr});var tF=s((Qbe,eF)=>{"use strict";function UMr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}eF.exports=UMr});var nF=s((Kbe,iF)=>{"use strict";function GMr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}iF.exports=GMr});var sF=s((rwe,aF)=>{"use strict";function xMr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}aF.exports=xMr});var vF=s((ewe,oF)=>{"use strict";var DMr=E(),HMr=Cr(),WMr=Y(),Di=P(),zMr=M0(),XMr=Zn(),JMr=Vr(),d3=R(),YMr=xP(),$Mr=HP(),ZMr=zP(),QMr=JP(),KMr=$P(),rBr=QP(),eBr=rF(),tBr=tF(),iBr=nF(),nBr=sF(),aBr=.07721566490153287,sBr=.3224670334241136,uBr=1,oBr=-.07721566490153287,vBr=.48383612272381005,fBr=-.1475877229945939,cBr=.06462494023913339,lBr=-.07721566490153287,pBr=1,gBr=.4189385332046727,B0=1.4616321449683622,mBr=4503599627370496,dBr=0x400000000000000,hBr=8470329472543003e-37,uF=1.4616321449683622,yBr=-.12148629053584961,qBr=-3638676997039505e-33;function bBr(r){var e,t,i,n,a,u,o,v,f,c,l,p,g;if(DMr(r)||HMr(r))return r;if(r===0)return d3;if(r<0?(e=!0,r=-r):e=!1,r<hBr)return-Di(r);if(e){if(r>=mBr||(f=XMr(r),f===0))return d3;t=Di(JMr/WMr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Di(r),r>=B0-1+.27?(l=1-r,i=0):r>=B0-1-.27?(l=r-(uF-1),i=1):(l=r,i=2)):(g=0,r>=B0+.27?(l=2-r,i=0):r>=B0-.27?(l=r-uF,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=aBr+p*YMr(p),a=p*(sBr+p*$Mr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=vBr+c*KMr(c),a=fBr+c*rBr(c),n=cBr+c*eBr(c),o=p*u-(qBr-c*(a+l*n)),g+=yBr+o;break;case 2:u=l*(lBr+l*tBr(l)),a=pBr+l*iBr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=zMr(r),l=r-i,o=l*(oBr+l*QMr(l)),v=uBr+l*ZMr(l),g=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Di(p)}else r<dBr?(f=Di(r),p=1/r,l=p*p,c=gBr+p*nBr(l),g=(r-.5)*(f-1)+c):g=r*(Di(r)-1);return e&&(g=t-g),g}oF.exports=bBr});var Qn=s((twe,fF)=>{"use strict";var wBr=vF();fF.exports=wBr});var vt=s((iwe,cF)=>{"use strict";var EBr=6.283185307179586;cF.exports=EBr});var h3=s((nwe,lF)=>{"use strict";var NBr=14901161193847656e-24;lF.exports=NBr});var y3=s((awe,pF)=>{"use strict";var OBr=.9189385332046728;pF.exports=OBr});var gF=s((swe,SBr)=>{SBr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var mF=s((uwe,ABr)=>{ABr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var dF=s((owe,_Br)=>{_Br.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var yF=s((vwe,hF)=>{"use strict";function TBr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}hF.exports=TBr});var bF=s((fwe,qF)=>{"use strict";function IBr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}qF.exports=IBr});var EF=s((cwe,wF)=>{"use strict";function RBr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}wF.exports=RBr});var OF=s((lwe,NF)=>{"use strict";function LBr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}NF.exports=LBr});var AF=s((pwe,SF)=>{"use strict";function PBr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}SF.exports=PBr});var TF=s((gwe,_F)=>{"use strict";function FBr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}_F.exports=FBr});var FF=s((mwe,PF)=>{"use strict";var MBr=E(),BBr=yr(),jBr=Y(),j0=sr(),kBr=z(),CBr=xi(),VBr=Qn(),IF=Zn(),RF=D(),UBr=P(),GBr=R(),xBr=V(),LF=vt(),DBr=h3(),HBr=y3(),WBr=gF(),zBr=mF(),XBr=dF(),JBr=yF(),YBr=bF(),$Br=EF(),ZBr=OF(),QBr=AF(),KBr=TF(),rjr=129,ejr=170,tjr=709,ijr=1.2433929443359375,njr=.6986598968505859;function q3(r){var e,t,i,n,a,u;if(MBr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(BBr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=rjr)return-XBr[u]/(i+1)}else return(n&1)===0?zBr[n/2]:WBr[(n-3)/2];return jBr(r)<DBr?-.5-HBr*r:(t=1-r,r<0?kBr(r/2)===r/2?0:(e=r,r=t,t=e,r>ejr?(e=IF(.5*t)*2*q3(r),a=VBr(r),a-=r*UBr(LF),a>tjr?e<0?xBr:GBr:e*j0(a)):IF(.5*t)*2*RF(LF,-r)*CBr(r)*q3(r)):r<1?(e=JBr(t),e-=ijr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+YBr(t)):r<=4?(e=njr+1/-t,e+$Br(r-2)):r<=7?(e=ZBr(r-4),1+j0(e)):r<15?(e=QBr(r-7),1+j0(e)):r<36?(e=KBr(r-15),1+j0(e)):1+RF(2,-r))}PF.exports=q3});var BF=s((dwe,MF)=>{"use strict";var ajr=FF();MF.exports=ajr});var kF=s((hwe,jF)=>{"use strict";var x=rr(),sjr=Y(),ujr=q0(),ojr=Un(),vjr=x_(),fjr=eT(),cjr=aT(),ljr=vT(),pjr=pT(),gjr=ET(),mjr=AT(),djr=RT(),hjr=Zt(),yjr=z2(),qjr=O0(),bjr=BT(),wjr=VT(),Ejr=DT(),Njr=ZT(),Ojr=r3(),Sjr=e3(),Ajr=mR(),_jr=PR(),Tjr=oL(),Ijr=dL(),Rjr=Gi(),Ljr=jL(),Pjr=QL(),Fjr=Kt(),Mjr=ri(),Bjr=U(),jjr=BF();function kjr(r){return x(r,"abs",sjr),x(r,"abs2",ujr),x(r,"acos",ojr),x(r,"acosh",vjr),x(r,"acot",fjr),x(r,"acovercos",cjr),x(r,"acoversin",ljr),x(r,"acsc",pjr),x(r,"acsch",gjr),x(r,"ahavercos",mjr),x(r,"ahaversin",djr),x(r,"asin",hjr),x(r,"asinh",yjr),x(r,"atan",qjr),x(r,"atanh",bjr),x(r,"avercos",wjr),x(r,"aversin",Ejr),x(r,"bernoulli",Njr),x(r,"besselj0",Ojr),x(r,"besselj1",Sjr),x(r,"bessely0",Ajr),x(r,"bessely1",_jr),x(r,"binet",Tjr),x(r,"cbrt",Ijr),x(r,"ceil",Rjr),x(r,"ceil10",Ljr),x(r,"ceil2",Pjr),x(r,"cos",Fjr),x(r,"sin",Mjr),x(r,"sqrt",Bjr),x(r,"zeta",jjr),r}jF.exports=kjr});var VF=s((ywe,CF)=>{"use strict";var Cjr=rr(),Vjr=NA(),Ujr=t_(),Gjr=kF();function xjr(r){return Cjr(r,"tools",Ujr({})),r=Vjr(r),r=Gjr(r),r}CF.exports=xjr});var xF=s((qwe,GF)=>{"use strict";var Djr=Oo(),UF=Djr();function Hjr(){return typeof UF.BigInt=="function"&&typeof BigInt=="function"&&typeof UF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}GF.exports=Hjr});var HF=s((bwe,DF)=>{"use strict";var Wjr=xF();DF.exports=Wjr});var WF=s((wwe,zjr)=>{zjr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var XF=s((Ewe,zF)=>{"use strict";var Xjr=WF();function Jjr(r){return Xjr[r]||null}zF.exports=Jjr});var YF=s((Nwe,JF)=>{"use strict";var Yjr=XF();JF.exports=Yjr});var ZF=s((Owe,$F)=>{"use strict";function $jr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}$F.exports=$jr});var KF=s((Swe,QF)=>{"use strict";var Zjr=ZF();QF.exports=Zjr});var tM=s((Awe,eM)=>{"use strict";var rM=Y();function Qjr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=rM(r[0]),u=1;u<t;u++)if(a=rM(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}eM.exports=Qjr});var b3=s((_we,iM)=>{"use strict";var Kjr=tM();iM.exports=Kjr});var aM=s((Twe,nM)=>{"use strict";function rkr(r,e){return e&&(r===2||r===3)}nM.exports=rkr});var uM=s((Iwe,sM)=>{"use strict";function ekr(r,e){return e&&(r===1||r===3)}sM.exports=ekr});var vM=s((Rwe,oM)=>{"use strict";var tkr=q1();function ikr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=tkr(e,t,i),r===a[1]-a[0]+1)}oM.exports=ikr});var cM=s((Lwe,fM)=>{"use strict";function nkr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}fM.exports=nkr});var pM=s((Pwe,lM)=>{"use strict";function akr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}lM.exports=akr});var mM=s((Fwe,gM)=>{"use strict";function skr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}gM.exports=skr});var hM=s((Mwe,dM)=>{"use strict";function ukr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}dM.exports=ukr});var qM=s((Bwe,yM)=>{"use strict";function okr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}yM.exports=okr});var wM=s((jwe,bM)=>{"use strict";var vkr=re(),fkr=ee();function ckr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(vkr(t),fkr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}bM.exports=ckr});var OM=s((kwe,NM)=>{"use strict";var lkr=Q().isPrimitive,pkr=q(),EM=/[-\/\\^$*+?.()|[\]{}]/g;function gkr(r){var e,t,i;if(!lkr(r))throw new TypeError(pkr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(EM,"\\$&"):(t=r.substring(1,i),t=t.replace(EM,"\\$&"),r=r[0]+t+r.substring(i),r)}NM.exports=gkr});var AM=s((Cwe,SM)=>{"use strict";var mkr=OM();SM.exports=mkr});var TM=s((Vwe,_M)=>{"use strict";var dkr=RegExp.prototype.exec;_M.exports=dkr});var RM=s((Uwe,IM)=>{"use strict";var hkr=TM();function ykr(r){try{return hkr.call(r),!0}catch{return!1}}IM.exports=ykr});var PM=s((Gwe,LM)=>{"use strict";var qkr=fi(),bkr=er(),wkr=RM(),Ekr=qkr();function Nkr(r){return typeof r=="object"?r instanceof RegExp?!0:Ekr?wkr(r):bkr(r)==="[object RegExp]":!1}LM.exports=Nkr});var MM=s((xwe,FM)=>{"use strict";var Okr=PM();FM.exports=Okr});var jM=s((Dwe,BM)=>{"use strict";function Skr(r,e,t){return r.replace(e,t)}BM.exports=Skr});var ft=s((Hwe,kM)=>{"use strict";var Akr=jM();kM.exports=Akr});var VM=s((Wwe,CM)=>{"use strict";var _kr=AM(),Tkr=I(),w3=Q().isPrimitive,Ikr=MM(),E3=q(),Rkr=ft();function Lkr(r,e,t){if(!w3(r))throw new TypeError(E3("invalid argument. First argument must be a string. Value: `%s`.",r));if(w3(e))e=new RegExp(_kr(e),"g");else if(!Ikr(e))throw new TypeError(E3("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!w3(t)&&!Tkr(t))throw new TypeError(E3("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return Rkr(r,e,t)}CM.exports=Lkr});var GM=s((zwe,UM)=>{"use strict";var Pkr=VM();UM.exports=Pkr});var DM=s((Xwe,xM)=>{"use strict";var Fkr=GM(),N3=re(),O3=ee(),Mkr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function Bkr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=N3(a)+", "+O3(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=N3(a)+", "+O3(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=N3(a)+", "+O3(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=Mkr[this.dtype],i+=Fkr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}xM.exports=Bkr});var WM=s((Jwe,HM)=>{"use strict";var jkr=typeof ArrayBuffer=="function"?ArrayBuffer:null;HM.exports=jkr});var XM=s((Ywe,zM)=>{"use strict";var kkr=Ma(),Ckr=lr(),k0=WM();function Vkr(){var r,e,t;if(typeof k0!="function")return!1;try{t=new k0(16),r=kkr(t)&&typeof k0.isView=="function",r&&(e=new Ckr(t),e[0]=-3.14,e[1]=NaN,r=r&&k0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}zM.exports=Vkr});var YM=s(($we,JM)=>{"use strict";var Ukr=XM();JM.exports=Ukr});var ZM=s((Zwe,$M)=>{"use strict";var Gkr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;$M.exports=Gkr});var KM=s((Qwe,QM)=>{"use strict";function xkr(){throw new Error("not implemented")}QM.exports=xkr});var C0=s((Kwe,rB)=>{"use strict";var Dkr=YM(),Hkr=ZM(),Wkr=KM(),S3;Dkr()?S3=Hkr:S3=Wkr;rB.exports=S3});var tB=s((rEe,eB)=>{"use strict";var zkr=er(),Xkr=typeof DataView=="function";function Jkr(r){return Xkr&&r instanceof DataView||zkr(r)==="[object DataView]"}eB.exports=Jkr});var nB=s((eEe,iB)=>{"use strict";var Ykr=tB();iB.exports=Ykr});var sB=s((tEe,aB)=>{"use strict";var $kr=typeof DataView=="function"?DataView:null;aB.exports=$kr});var vB=s((iEe,oB)=>{"use strict";var Zkr=nB(),Qkr=C0(),uB=sB();function Kkr(){var r,e,t;if(typeof uB!="function")return!1;try{t=new Qkr(24),e=new uB(t,8),r=Zkr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}oB.exports=Kkr});var cB=s((nEe,fB)=>{"use strict";var rCr=vB();fB.exports=rCr});var pB=s((aEe,lB)=>{"use strict";var eCr=typeof DataView=="function"?DataView:void 0;lB.exports=eCr});var mB=s((sEe,gB)=>{"use strict";function tCr(){throw new Error("not implemented")}gB.exports=tCr});var Kn=s((uEe,dB)=>{"use strict";var iCr=cB(),nCr=pB(),aCr=mB(),A3;iCr()?A3=nCr:A3=aCr;dB.exports=A3});var yB=s((oEe,hB)=>{"use strict";var sCr=typeof BigInt=="function"?BigInt:void 0;hB.exports=sCr});var bB=s((vEe,qB)=>{"use strict";var uCr=yB();qB.exports=uCr});var wB=s((fEe,oCr)=>{oCr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var OB=s((cEe,NB)=>{"use strict";var EB=wB();function vCr(){var r;return arguments.length===0?EB.all.slice():(r=EB[arguments[0]],r?r.slice():[])}NB.exports=vCr});var AB=s((lEe,SB)=>{"use strict";function fCr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}SB.exports=fCr});var TB=s((pEe,_B)=>{"use strict";var cCr=rr(),lCr=Fi();function pCr(r,e){var t,i,n;for(t=lCr(e),n=0;n<t.length;n++)i=t[n],cCr(r,i,e[i]);return r}_B.exports=pCr});var T3=s((gEe,RB)=>{"use strict";var gCr=b(),_3=OB(),IB=AB(),mCr=TB();gCr(_3,"enum",IB);mCr(_3,IB());RB.exports=_3});var LB=s((mEe,dCr)=>{dCr.exports=["row-major","column-major"]});var FB=s((dEe,PB)=>{"use strict";var hCr=LB();function yCr(){return hCr.slice()}PB.exports=yCr});var BB=s((hEe,MB)=>{"use strict";function qCr(){return{"row-major":1,"column-major":2}}MB.exports=qCr});var ra=s((yEe,kB)=>{"use strict";var bCr=b(),jB=FB(),wCr=BB();bCr(jB,"enum",wCr);kB.exports=jB});var CB=s((qEe,ECr)=>{ECr.exports=["throw","clamp","wrap"]});var UB=s((bEe,VB)=>{"use strict";var NCr=CB();function OCr(){return NCr.slice()}VB.exports=OCr});var xB=s((wEe,GB)=>{"use strict";function SCr(){return{throw:1,clamp:2,wrap:3}}GB.exports=SCr});var I3=s((EEe,HB)=>{"use strict";var ACr=b(),DB=UB(),_Cr=xB();ACr(DB,"enum",_Cr);HB.exports=DB});var XB=s((NEe,zB)=>{"use strict";var ct=Xr(),TCr=C0(),ICr=Kn(),ea=bB(),RCr=T3().enum,LCr=ra().enum,PCr=I3().enum,FCr=RCr(),MCr=LCr(),WB=PCr();function BCr(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new ICr(new TCr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,ct?1:0),f+=1,o.setInt16(f,FCr[i],ct),f+=2,o.setBigInt64(f,ea(l),ct),c=l*8,f+=8,g=0;g<l;g++)o.setBigInt64(f,ea(n[g]),ct),o.setBigInt64(f+c,ea(a[g]*r),ct),f+=8;for(f+=c,o.setBigInt64(f,ea(this._offset*r),ct),f+=8,o.setInt8(f,MCr[this._order]),f+=1,o.setInt8(f,WB[v]),f+=1,o.setBigInt64(f,ea(p),ct),f+=8,g=0;g<p;g++)o.setInt8(f,WB[u[g]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,ct),this.__meta_dataview__=o,o}zB.exports=BCr});var YB=s((OEe,JB)=>{"use strict";var ta=Xr(),jCr=Kr(),kCr=Kn(),CCr=z(),VCr=4294967295>>>0,UCr=4294967296;function GCr(r){var e,t,i,n;return e=new jCr(8),r===0||(n=(r&VCr)>>>0,i=CCr(r/UCr),t=new kCr(e.buffer),ta?(t.setUint32(0,n,ta),t.setUint32(4,i,ta)):(t.setUint32(0,i,ta),t.setUint32(4,n,ta))),e}JB.exports=GCr});var ZB=s((SEe,$B)=>{"use strict";var ia=Xr(),xCr=Kr(),DCr=Kn(),HCr=z(),WCr=4294967295>>>0,zCr=4294967296,U0=new xCr(8),V0=new DCr(U0.buffer);function XCr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<U0.length;u++)e[i]=0,i+=t;return e}for(a=(r&WCr)>>>0,n=HCr(r/zCr),ia?(V0.setUint32(0,a,ia),V0.setUint32(4,n,ia)):(V0.setUint32(0,n,ia),V0.setUint32(4,a,ia)),u=0;u<U0.length;u++)e[i]=U0[u],i+=t;return e}$B.exports=XCr});var rj=s((AEe,KB)=>{"use strict";var JCr=b(),QB=YB(),YCr=ZB();JCr(QB,"assign",YCr);KB.exports=QB});var ij=s((_Ee,tj)=>{"use strict";var R3=Xr(),$Cr=C0(),ZCr=Kn(),QCr=Kr(),KCr=T3().enum,rVr=ra().enum,eVr=I3().enum,na=rj().assign,tVr=KCr(),iVr=rVr(),ej=eVr();function nVr(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g,h;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,g=o.length,i=33+p*16+g,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new ZCr(new $Cr(i)),e=new QCr(v.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,R3?1:0),c+=1,v.setInt16(c,tVr[n],R3),c+=2,na(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)na(a[h],e,1,c),na(u[h]*r,e,1,c+l),c+=8;for(c+=l,na(this._offset*r,e,1,c),c+=8,v.setInt8(c,iVr[this._order]),c+=1,v.setInt8(c,ej[f]),c+=1,na(g,e,1,c),c+=8,h=0;h<g;h++)v.setInt8(c,ej[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,R3),this.__meta_dataview__=v,v}tj.exports=nVr});var aj=s((TEe,nj)=>{"use strict";var aVr=HF(),lt=b(),Jr=L(),sVr=YF(),uVr=KF(),oVr=b3(),vVr=wo(),fVr=aM(),cVr=uM(),lVr=vM(),pVr=cM(),gVr=pM(),mVr=mM(),dVr=hM(),hVr=qM(),yVr=wM(),qVr=DM(),bVr=XB(),wVr=ij();function nr(r,e,t,i,n,a){var u,o,v,f,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=sVr(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=vVr(e.get&&e.set),this._iterationOrder=uVr(i),u=lVr(f,t,i,n,this._iterationOrder),v=oVr(i),this._flags={ROW_MAJOR_CONTIGUOUS:cVr(v,u),COLUMN_MAJOR_CONTIGUOUS:fVr(v,u),READONLY:!1},this.__meta_dataview__=null,this}lt(nr,"name","ndarray");Jr(nr.prototype,"byteLength",function(){return this._byteLength});Jr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});Jr(nr.prototype,"data",function(){return this._buffer});Jr(nr.prototype,"dtype",function(){return this._dtype});Jr(nr.prototype,"flags",function(){return pVr(this._flags)});Jr(nr.prototype,"length",function(){return this._length});Jr(nr.prototype,"ndims",function(){return this._ndims});Jr(nr.prototype,"offset",function(){return this._offset});Jr(nr.prototype,"order",function(){return this._order});Jr(nr.prototype,"shape",function(){return this._shape.slice()});Jr(nr.prototype,"strides",function(){return this._strides.slice()});lt(nr.prototype,"get",hVr);lt(nr.prototype,"iget",gVr);lt(nr.prototype,"set",dVr);lt(nr.prototype,"iset",mVr);lt(nr.prototype,"toString",qVr);lt(nr.prototype,"toJSON",yVr);lt(nr.prototype,"__array_meta_dataview__",aVr()?bVr:wVr);nj.exports=nr});var aa=s((IEe,sj)=>{"use strict";var EVr=aj();sj.exports=EVr});var oj=s((REe,uj)=>{"use strict";var NVr=aa();function OVr(r){return r instanceof NVr||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}uj.exports=OVr});var fj=s((LEe,vj)=>{"use strict";var SVr=oj();vj.exports=SVr});var lj=s((PEe,cj)=>{"use strict";function AVr(r){var e=r.flags;return e&&e.READONLY===!0}cj.exports=AVr});var gj=s((FEe,pj)=>{"use strict";var _Vr=lj();pj.exports=_Vr});var dj=s((MEe,mj)=>{"use strict";var TVr=hr().isPrimitive,IVr=Br(),L3=q();function RVr(r){var e,t,i,n;if(typeof r!="object"||r===null)throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!IVr(t))throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],n=0;n<t.length;n++){if(i=t[n],!TVr(i))throw new TypeError(L3("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}mj.exports=RVr});var yj=s((BEe,hj)=>{"use strict";var LVr=dj();hj.exports=LVr});var bj=s((jEe,qj)=>{"use strict";function PVr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}qj.exports=PVr});var ti=s((kEe,wj)=>{"use strict";var FVr=bj();wj.exports=FVr});var Nj=s((CEe,Ej)=>{"use strict";function MVr(r){return r===null}Ej.exports=MVr});var P3=s((VEe,Oj)=>{"use strict";var BVr=Nj();Oj.exports=BVr});var Aj=s((UEe,Sj)=>{"use strict";function jVr(r){return r===void 0}Sj.exports=jVr});var F3=s((GEe,_j)=>{"use strict";var kVr=Aj();_j.exports=kVr});var Ij=s((xEe,Tj)=>{"use strict";var B3=b(),j3=L(),CVr=gr().isPrimitive,VVr=P3(),UVr=F3(),G0=q();function M3(r){return CVr(r)||VVr(r)||UVr(r)}function we(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof we))return new we(e,t,i);if(!M3(e))throw new TypeError(G0("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!M3(t))throw new TypeError(G0("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(M3(i)){if(i===0)throw new RangeError(G0("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(G0("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}B3(we,"name","Slice");j3(we.prototype,"start",function(){return this._start});j3(we.prototype,"stop",function(){return this._stop});j3(we.prototype,"step",function(){return this._step});B3(we.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});B3(we.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});Tj.exports=we});var Hi=s((DEe,Rj)=>{"use strict";var GVr=Ij();Rj.exports=GVr});var Pj=s((HEe,Lj)=>{"use strict";var xVr=Hi(),DVr=pe();function HVr(r){return r instanceof xVr||DVr(r)==="Slice"}Lj.exports=HVr});var Mj=s((WEe,Fj)=>{"use strict";var WVr=Pj();Fj.exports=WVr});var kj=s((zEe,jj)=>{"use strict";var k3=b(),Bj=L(),zVr=gr().isPrimitive,XVr=P3(),JVr=F3(),YVr=Mj(),$Vr=q();function ZVr(r){return zVr(r)||XVr(r)||JVr(r)||YVr(r)}function Nr(){var r,e,t,i,n;if(r=arguments.length,!(this instanceof Nr)){if(r===1)return new Nr(arguments[0]);if(r===2)return new Nr(arguments[0],arguments[1]);if(r===3)return new Nr(arguments[0],arguments[1],arguments[2]);if(r===4)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Nr(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],n=0;n<r;n++)t.push(arguments[n]);return e=Object.create(Nr.prototype),Nr.apply(e,t)}for(this._data=[],n=0;n<r;n++){if(i=arguments[n],!ZVr(i))throw new TypeError($Vr("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",n,i));this._data.push(i===void 0?null:i)}return this}k3(Nr,"name","MultiSlice");Bj(Nr.prototype,"ndims",function(){return this._data.length});Bj(Nr.prototype,"data",function(){return this._data.slice()});k3(Nr.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});k3(Nr.prototype,"toJSON",function(){var e,t,i,n;for(e=this._data,t={type:"MultiSlice",data:[]},n=0;n<e.length;n++)i=e[n],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});jj.exports=Nr});var x0=s((XEe,Cj)=>{"use strict";var QVr=kj();Cj.exports=QVr});var Uj=s((JEe,Vj)=>{"use strict";function KVr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Vj.exports=KVr});var xj=s((YEe,Gj)=>{"use strict";var rUr=Hi(),sa=Uj();function eUr(r,e,t){var i,n,a;if(i=r.start,n=r.stop,a=r.step,a===null&&(a=1),i===null)a>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return sa();i=0}}else if(i>=e){if(t)return sa();a<0?i=e-1:i=e}if(n===null)a>0?n=e:n=null;else if(n<0){if(n=e+n,n<0)if(a>0){if(t)return sa();n=0}else{if(t&&n<-1)return sa();n=null}}else if(n>e){if(t)return sa();n=e}return new rUr(i,n,a)}Gj.exports=eUr});var Hj=s(($Ee,Dj)=>{"use strict";var tUr=xj();Dj.exports=tUr});var zj=s((ZEe,Wj)=>{"use strict";function iUr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}Wj.exports=iUr});var Yj=s((QEe,Jj)=>{"use strict";var nUr=x0(),ua=Hi(),aUr=Hj(),Xj=zj();function sUr(r,e,t){return r===null?new ua(0,e,1):typeof r=="number"?r>=e?t?Xj():new ua(e,e,1):r<0?(r=e+r,r<0?t?Xj():new ua(0,0,1):new ua(r,r+1,1)):new ua(r,r+1,1):aUr(r,e,t)}function uUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],u=0;u<i.length;u++){if(a=sUr(i[u],e[u],t),a.code!==void 0)return a;n.push(a)}return nUr.apply(null,n)}Jj.exports=uUr});var Zj=s((KEe,$j)=>{"use strict";var oUr=Yj();$j.exports=oUr});var Kj=s((rNe,Qj)=>{"use strict";function vUr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}Qj.exports=vUr});var ek=s((eNe,rk)=>{"use strict";var fUr=Kj();rk.exports=fUr});var ik=s((tNe,tk)=>{"use strict";var cUr=Gi();function lUr(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:cUr((i-t)/e)}tk.exports=lUr});var ak=s((iNe,nk)=>{"use strict";var pUr=ik();nk.exports=pUr});var uk=s((nNe,sk)=>{"use strict";var gUr=ak();function mUr(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(gUr(e[i]));return t}sk.exports=mUr});var vk=s((aNe,ok)=>{"use strict";var dUr=uk();ok.exports=dUr});var ck=s((sNe,fk)=>{"use strict";function hUr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}fk.exports=hUr});var pk=s((uNe,lk)=>{"use strict";var yUr=ck();lk.exports=yUr});var mk=s((oNe,gk)=>{"use strict";function qUr(r){return r.dtype}gk.exports=qUr});var hk=s((vNe,dk)=>{"use strict";var bUr=mk();dk.exports=bUr});var qk=s((fNe,yk)=>{"use strict";var wUr=Aa();function EUr(r,e){var t=r.shape;return e?wUr(t):t}yk.exports=EUr});var wk=s((cNe,bk)=>{"use strict";var NUr=qk();bk.exports=NUr});var Nk=s((lNe,Ek)=>{"use strict";function OUr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function SUr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function AUr(r,e){return e==="column-major"?SUr(r):OUr(r)}Ek.exports=AUr});var Sk=s((pNe,Ok)=>{"use strict";function _Ur(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function TUr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function IUr(r,e,t){return e==="column-major"?TUr(r,t):_Ur(r,t)}Ok.exports=IUr});var D0=s((gNe,_k)=>{"use strict";var RUr=b(),Ak=Nk(),LUr=Sk();RUr(Ak,"assign",LUr);_k.exports=Ak});var Ik=s((mNe,Tk)=>{"use strict";var PUr=D0(),FUr=Aa(),MUr="row-major";function BUr(r,e){var t,i,n;return n=r.strides,typeof n!="object"||n===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=MUr),PUr(i,t))):e?FUr(n):n}Tk.exports=BUr});var Lk=s((dNe,Rk)=>{"use strict";var jUr=Ik();Rk.exports=jUr});var Fk=s((hNe,Pk)=>{"use strict";function kUr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}Pk.exports=kUr});var H0=s((yNe,Mk)=>{"use strict";var CUr=Fk();Mk.exports=CUr});var jk=s((qNe,Bk)=>{"use strict";var VUr=H0();function UUr(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:VUr(t,e))}Bk.exports=UUr});var Ck=s((bNe,kk)=>{"use strict";var GUr=jk();kk.exports=GUr});var Uk=s((wNe,Vk)=>{"use strict";var xUr=b3(),C3="row-major",DUr="column-major";function HUr(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=xUr(e),t===1||t===3)?C3:t===2?DUr:r.shape.length===0?C3:null)}Vk.exports=HUr});var xk=s((ENe,Gk)=>{"use strict";var WUr=Uk();Gk.exports=WUr});var Hk=s((NNe,Dk)=>{"use strict";function zUr(r){return r.data}Dk.exports=zUr});var zk=s((ONe,Wk)=>{"use strict";var XUr=Hk();Wk.exports=XUr});var Jk=s((SNe,Xk)=>{"use strict";function JUr(r,e,t){var i,n,a;for(i=r.data,n=t,a=0;a<i.length;a++)n+=e[a]*i[a].start;return n}Xk.exports=JUr});var $k=s((ANe,Yk)=>{"use strict";function YUr(r,e,t){var i,n,a,u;for(i=r.data,n=[],a=0;a<t.length;a++)u=t[a],n.push(e[u]*i[u].step);return n}Yk.exports=YUr});var Qk=s((_Ne,Zk)=>{"use strict";var $Ur=it(),ZUr=lr(),QUr=Qr(),KUr=pi(),rGr=Ke(),eGr=mi(),tGr=Gt(),iGr=pr(),nGr=Kr(),aGr=gi(),sGr=Oi(),uGr=Ti(),oGr={binary:$Ur,float64:ZUr,float32:QUr,generic:Array,int16:KUr,int32:rGr,int8:eGr,uint16:tGr,uint32:iGr,uint8:nGr,uint8c:aGr,complex64:sGr,complex128:uGr};Zk.exports=oGr});var rC=s((TNe,Kk)=>{"use strict";var vGr=Qk();function fGr(r){return vGr[r]||null}Kk.exports=fGr});var tC=s((INe,eC)=>{"use strict";var cGr=rC();eC.exports=cGr});var nC=s((RNe,iC)=>{"use strict";var lGr=I(),pGr=it(),gGr=lGr(pGr.allocUnsafe);iC.exports=gGr});var sC=s((LNe,aC)=>{"use strict";var mGr=hr(),dGr=q(),hGr=it();function yGr(r){if(!mGr(r))throw new TypeError(dGr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return hGr.allocUnsafe(r)}aC.exports=yGr});var oC=s((PNe,uC)=>{"use strict";var qGr=hr(),bGr=q(),wGr=it();function EGr(r){if(!qGr(r))throw new TypeError(bGr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new wGr(r)}uC.exports=EGr});var fC=s((FNe,vC)=>{"use strict";var NGr=nC(),OGr=sC(),SGr=oC(),V3;NGr?V3=OGr:V3=SGr;vC.exports=V3});var lC=s((MNe,cC)=>{"use strict";function AGr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}cC.exports=AGr});var gC=s((BNe,pC)=>{"use strict";var _Gr=tC(),TGr=fC(),IGr=lC();function RGr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function LGr(r){return IGr(TGr(r))}function PGr(r,e){var t=_Gr(r);return t?new t(e):null}function FGr(r,e){return r==="generic"?RGr(e):r==="binary"?LGr(e):PGr(r,e)}pC.exports=FGr});var U3=s((jNe,mC)=>{"use strict";var MGr=gC();mC.exports=MGr});var hC=s((kNe,dC)=>{"use strict";var BGr=U3(),jGr=Qe();function kGr(r,e,t,i,n){var a,u;return u=t.length,u===0?a=[0]:a=jGr(u),new r(e,BGr(e,0),t,a,0,i,{readonly:n})}dC.exports=kGr});var NC=s((CNe,EC)=>{"use strict";var yC=Zj(),CGr=ek(),qC=vk(),G3=pk(),VGr=Qe(),bC=ti(),UGr=hk(),GGr=wk(),xGr=Lk(),DGr=Ck(),HGr=xk(),x3=zk(),wC=q(),WGr=Jk(),zGr=$k(),XGr=hC();function JGr(r,e,t,i){var n,a,u,o,v,f,c,l,p,g;if(u=UGr(r),o=GGr(r,!0),n=xGr(r,!0),a=DGr(r),v=HGr(r),c=o.length,e.ndims!==c)throw new RangeError(wC("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,x3(r),o,n,a,v,{readonly:!i});if(f=CGr(e),g=yC(e,o,!0),g.code){if(t)throw new RangeError(wC("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));g=yC(e,o,!1),p=qC(g),bC(G3(p,f))>0&&(p=VGr(p.length))}else p=qC(g);return bC(p)===0?XGr(l,u,G3(p,f),v,!i):(a=WGr(g,n,a),p=G3(p,f),p.length===0?new l(u,x3(r),[],[0],a,v,{readonly:!i}):(n=zGr(g,n,f),new l(u,x3(r),p,n,a,v,{readonly:!i})))}EC.exports=JGr});var D3=s((VNe,OC)=>{"use strict";var YGr=NC();OC.exports=YGr});var H3=s((UNe,SC)=>{"use strict";var $Gr="row-major";function ZGr(r,e,t,i,n){var a,u;for(a=r-1;a>i;a--)n[a]=t[a];for(a=i;a>=0&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a--);for(a-=1;a>=0;a--)n[a]=t[a];return n}function QGr(r,e,t,i,n){var a,u;for(a=0;a<i;a++)n[a]=t[a];for(a=i;a<r&&(u=(t[a]+1)%e[a],n[a]=u,!(u>0));a++);for(a+=1;a<r;a++)n[a]=t[a];return n}function KGr(r,e,t,i,n){var a=r.length;if(a===0)return null;if(i<0){if(i+=a,i<0)return null}else if(i>=a)return null;return e===$Gr?ZGr(a,r,t,i,n):QGr(a,r,t,i,n)}SC.exports=KGr});var _C=s((GNe,AC)=>{"use strict";var rxr=Qe(),exr=H3();function txr(r,e,t,i){return exr(r,e,t,i,rxr(r.length))}AC.exports=txr});var W3=s((xNe,IC)=>{"use strict";var ixr=b(),TC=_C(),nxr=H3();ixr(TC,"assign",nxr);IC.exports=TC});var FC=s((DNe,PC)=>{"use strict";var z3=b(),axr=T(),sxr=cr().isPrimitive,uxr=fj(),oxr=gj(),vxr=S(),RC=wn(),fxr=Qe(),cxr=yj(),lxr=ti(),pxr=D3(),gxr=W3().assign,mxr=x0(),W0=q();function LC(r){var e,t,i,n,a,u,o,v,f,c,l;if(!uxr(r))throw new TypeError(W0("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(n={writable:!1},arguments.length>1){if(e=arguments[1],!axr(e))throw new TypeError(W0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(vxr(e,"readonly")){if(!sxr(e.readonly))throw new TypeError(W0("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(n.writable=!e.readonly,n.writable&&oxr(r))throw new Error(W0("invalid option. Cannot write to read-only array."))}}if(t=cxr(r),i=t.length,i<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return c=lxr(t),c===0&&(u=!0),c/=t[i-1],v=i-2,f=t[v],l=-1,o=fxr(i),o[i-1]=null,a={},z3(a,"next",p),z3(a,"return",g),RC&&z3(a,RC,h),a;function p(){var d,m;return l+=1,u||l>=c?{done:!0}:(d=mxr.apply(null,o),m=(o[v]+1)%f,o[v]=m,m===0&&(o=gxr(t,"row-major",o,v-1,o)),{value:pxr(r,d,!0,n.writable),done:!1})}function g(d){return u=!0,arguments.length?{value:d,done:!0}:{done:!0}}function h(){return LC(r,n)}}PC.exports=LC});var BC=s((HNe,MC)=>{"use strict";var dxr=FC();MC.exports=dxr});var CC=s((WNe,kC)=>{"use strict";function jC(r,e,t,i,n,a){var u,o,v,f,c;if(a>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[a],u=t[a],c=0;c<f;c++)o=jC(r,e,t,i,n,a+1),v.push(o),i+=u;return v}kC.exports=jC});var UC=s((zNe,VC)=>{"use strict";var hxr=Sn(),yxr=CC();function qxr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return yxr(hxr(r),e,t,i,n,0)}VC.exports=qxr});var X3=s((XNe,GC)=>{"use strict";var bxr=UC();GC.exports=bxr});var DC=s((JNe,xC)=>{"use strict";var wxr=X3(),Exr=ti();function Nxr(r,e,t,i,n,a,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<n.length;f++)r[v]=n[f],v+=1;return r[v]="offset",v+=1,r[v]=a,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:Exr(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:wxr(r,[r.length,1],[1,1],0,"row-major")}xC.exports=Nxr});var WC=s((YNe,HC)=>{"use strict";var Oxr=DC();HC.exports=Oxr});var JC=s(($Ne,XC)=>{"use strict";var Sxr=ra(),zC=Sxr(),Axr=zC.length;function _xr(r){var e;for(e=0;e<Axr;e++)if(r===zC[e])return!0;return!1}XC.exports=_xr});var $C=s((ZNe,YC)=>{"use strict";var Txr=JC();YC.exports=Txr});var QC=s((QNe,ZC)=>{"use strict";function Ixr(r){return r.toLowerCase()}ZC.exports=Ixr});var ii=s((KNe,KC)=>{"use strict";var Rxr=QC();KC.exports=Rxr});var eV=s((rOe,rV)=>{"use strict";var Lxr=yn(),Pxr=bi(),Fxr=En(),Mxr=Ii();function Bxr(r,e){var t,i,n,a;for(n=Mxr(r),Lxr(r)?i=Pxr(n):i=Fxr(n),t=r.length,a=0;a<t;a++)if(i(r,a)===e)return!0;return!1}rV.exports=Bxr});var iV=s((eOe,tV)=>{"use strict";var jxr=Br(),kxr=yn(),Cxr=bi(),Vxr=Ii(),Uxr=q();function Gxr(r){var e,t,i;if(!jxr(r))throw new TypeError(Uxr("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=Vxr(r),kxr(r)&&(e=Cxr(i)),t=r.length,e===void 0?n:a;function n(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function a(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}tV.exports=Gxr});var sV=s((tOe,aV)=>{"use strict";var xxr=b(),nV=eV(),Dxr=iV();xxr(nV,"factory",Dxr);aV.exports=nV});var fV=s((iOe,vV)=>{"use strict";var z0=hr().isPrimitive,Hxr=gr().isPrimitive,uV=M().isPrimitive,Wxr=$C(),zxr=b1(),J3=ii(),Xxr=sV().factory,Jxr=ra(),Yxr=aa(),$xr=ti(),oe=q(),Zxr=B1(),Qxr=Ra(),Kxr=Jxr(),oV=["string","number","complex","boolean","date","any"],rDr=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],eDr=rDr.length,tDr=5,iDr=Xxr(oV);function nDr(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function aDr(r,e){var t,i,n;for(t=[],n=e;n<r.length&&(i=r[n],!!uV(i));n++){if(!z0(i))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function sDr(r,e){var t,i,n;for(t=[],n=e;n<r.length&&(i=r[n],!!uV(i));n++){if(!Hxr(i))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function uDr(r,e){var t,i,n;if(r[0]!=="ndarray")throw new TypeError(oe('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(n=1;n<r.length;n++)if(i=J3(r[n]),i==="shape")e.shape=aDr(r,n+1),e.ndims=e.shape.length,n+=e.ndims;else if(i==="strides")e.strides=sDr(r,n+1),n+=e.strides.length;else if(i==="offset"){if(n+=1,t=r[n],!z0(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(n+=1,t=J3(r[n]),!Wxr(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',Kxr.join('", "'),t));e.order=t}else if(i==="dtype"){if(n+=1,t=J3(r[n]),!iDr(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',oV.join('", "'),t));e.dtype=t}else if(i==="length"){if(n+=1,t=r[n],!z0(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(n+=1,t=r[n],!z0(t))throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){n+=1;break}else throw new TypeError(oe('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function oDr(r,e){return eDr+r+e+tDr}function vDr(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(oe("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=$xr(r.shape),t!==r.length)throw new TypeError(oe('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!zxr(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function fDr(r){var e;if(!Zxr(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=nDr(),e.rawBuffer=Qxr(r),e=uDr(e.rawBuffer,e),e=vDr(e),e.headerLength=oDr(e.ndims,e.strides.length),e.ndarray=new Yxr("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}vV.exports=fDr});var lV=s((nOe,cV)=>{"use strict";var cDr=fV();cV.exports=cDr});var gV=s((aOe,pV)=>{"use strict";var lDr=typeof String.prototype.trim<"u";pV.exports=lDr});var Y3=s((sOe,mV)=>{"use strict";var pDr=String.prototype.trim;mV.exports=pDr});var qV=s((uOe,yV)=>{"use strict";var dV=Y3(),gDr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,hV="\u180E";function mDr(){return dV.call(gDr)===""&&dV.call(hV)===hV}yV.exports=mDr});var wV=s((oOe,bV)=>{"use strict";var dDr=ft(),hDr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function yDr(r){return dDr(r,hDr,"$1")}bV.exports=yDr});var NV=s((vOe,EV)=>{"use strict";var qDr=Y3();function bDr(r){return qDr.call(r)}EV.exports=bDr});var pt=s((fOe,OV)=>{"use strict";var wDr=gV(),EDr=qV(),NDr=wV(),ODr=NV(),$3;wDr&&EDr()?$3=ODr:$3=NDr;OV.exports=$3});var AV=s((cOe,SV)=>{"use strict";var SDr=/(?:\s*-\s*)(?=\d+)(\d+)$/;SV.exports=SDr});var TV=s((lOe,_V)=>{"use strict";var ADr=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;_V.exports=ADr});var LV=s((pOe,RV)=>{"use strict";var IV=z(),_Dr=AV(),TDr=TV();function IDr(r,e,t,i){var n;if(r==="end")return e;if(n=r.match(_Dr),n){if(r=e-parseInt(n[1],10),r<0){if(i)return-2;r=0}return r}return n=r.match(TDr),n?(r=parseFloat(n[1]),r<1?i?-2:-1:t&&e>0&&r!==1?IV((e-1)/r):IV(e/r)):-1}RV.exports=IDr});var FV=s((gOe,PV)=>{"use strict";var RDr=/\s*:\s*/;PV.exports=RDr});var BV=s((mOe,MV)=>{"use strict";var LDr=/^[-+]?[0-9]+$/;MV.exports=LDr});var kV=s((dOe,jV)=>{"use strict";var PDr=/^end/;jV.exports=PDr});var VV=s((hOe,CV)=>{"use strict";function FDr(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}CV.exports=FDr});var GV=s((yOe,UV)=>{"use strict";function MDr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}UV.exports=MDr});var DV=s((qOe,xV)=>{"use strict";function BDr(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}xV.exports=BDr});var JV=s((bOe,XV)=>{"use strict";var HV=Hi(),jDr=pt(),WV=LV(),kDr=FV(),Z3=BV(),zV=kV(),Wi=VV(),ni=GV(),CDr=DV();function VDr(r,e,t){var i,n,a;if(i=jDr(r).split(kDr),n=i.length,n<2||n>3)return Wi();if(n===3)if(a=i[2],a.length===0)i[2]=1;else{if(Z3.test(a)===!1)return Wi();if(a=parseInt(a,10),a===0)return CDr();i[2]=a}else i.push(1);if(a=i[0],a.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(zV.test(a)){if(a=WV(a,e,i[2]<0,t),a<0)return a===-2?ni():Wi();i[2]<0&&a>=e&&(a-=1),i[0]=a}else if(Z3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0){if(t)return ni();a=0}}else if(a>=e){if(t)return ni();i[2]<0?a=e-1:a=e}i[0]=a}else return Wi();if(a=i[1],a.length===0)i[2]<0?i[1]=null:i[1]=e;else if(zV.test(a)){if(a=WV(a,e,i[2]<0,t),a<0)return a===-2?ni():Wi();i[1]=a}else if(Z3.test(a)){if(a=parseInt(a,10),a<0){if(a=e+a,a<0)if(i[2]>0){if(t)return ni();a=0}else{if(t&&a<-1)return ni();a=null}}else if(a>e){if(t)return ni();a=e}i[1]=a}else return Wi();return e===0?new HV(0,0,i[2]):new HV(i[0],i[1],i[2])}XV.exports=VDr});var $V=s((wOe,YV)=>{"use strict";var UDr=JV();YV.exports=UDr});var QV=s((EOe,ZV)=>{"use strict";function GDr(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}ZV.exports=GDr});var rU=s((NOe,KV)=>{"use strict";function xDr(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}KV.exports=xDr});var tU=s((OOe,eU)=>{"use strict";function DDr(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}eU.exports=DDr});var nU=s((SOe,iU)=>{"use strict";function HDr(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}iU.exports=HDr});var sU=s((AOe,aU)=>{"use strict";var WDr=/\s*,\s*/;aU.exports=WDr});var oU=s((_Oe,uU)=>{"use strict";var zDr=/^[-+]?[0-9]+$/;uU.exports=zDr});var cU=s((TOe,fU)=>{"use strict";var XDr=pt(),JDr=Hi(),YDr=x0(),$Dr=$V(),ZDr=QV(),QDr=rU(),KDr=tU(),vU=nU(),rHr=sU(),eHr=oU();function tHr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(o=e.length,i=XDr(r).split(rHr),v=i.length,a=!1,n=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(a)return ZDr();for(a=!0,p=0;p<o-v+1;p++)n.push(new JDr(0,e[l],1)),l+=1;continue}if(u=e[l],eHr.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return vU()}else if(f>=u)return vU()}l+=1}else{if(f=$Dr(f,u,t),f.code)return f;l+=1}n.push(f)}return n.length!==o?n.length<o?QDr():KDr():YDr.apply(null,n)}fU.exports=tHr});var pU=s((IOe,lU)=>{"use strict";var iHr=cU();lU.exports=iHr});var mU=s((ROe,gU)=>{"use strict";var nHr=D0(),aHr=H0(),sHr=U3(),uHr=q(),oHr=aa(),vHr=ti();function fHr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=vHr(e),u=nHr(e,t)):(a=1,u=[0]),n=sHr(r,a),n===null)throw new TypeError(uHr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new oHr(r,n,e,u,aHr(e,u),t)}gU.exports=fHr});var hU=s((LOe,dU)=>{"use strict";var cHr=mU();dU.exports=cHr});var qU=s((POe,yU)=>{"use strict";var Dr=rr(),lHr=BC(),pHr=aa(),gHr=WC(),mHr=W3(),dHr=ti(),hHr=lV(),yHr=pU(),qHr=D0(),bHr=D3(),wHr=H0(),EHr=X3(),NHr=hU();function OHr(r){return Dr(r,"iterRows",lHr),Dr(r,"ndarray",pHr),Dr(r,"ndarray2range",gHr),Dr(r,"nextCartesianIndex",mHr),Dr(r,"numel",dHr),Dr(r,"range2ndarray",hHr),Dr(r,"seq2multislice",yHr),Dr(r,"shape2strides",qHr),Dr(r,"slice",bHr),Dr(r,"strides2offset",wHr),Dr(r,"toArray",EHr),Dr(r,"zeros",NHr),r}yU.exports=OHr});var wU=s((FOe,bU)=>{"use strict";var SHr=Ze();function AHr(r,e,t,i){SHr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}bU.exports=AHr});var B=s((MOe,EU)=>{"use strict";var _Hr=wU();EU.exports=_Hr});var OU=s((BOe,NU)=>{"use strict";function THr(r){return e;function e(){return r}}NU.exports=THr});var _=s((jOe,SU)=>{"use strict";var IHr=OU();SU.exports=IHr});var _U=s((kOe,AU)=>{"use strict";var RHr=R();function LHr(r){return r===0&&1/r===RHr}AU.exports=LHr});var gt=s((COe,TU)=>{"use strict";var PHr=_U();TU.exports=PHr});var LU=s((VOe,RU)=>{"use strict";var FHr=gt(),IU=E(),Q3=R();function MHr(r,e){return IU(r)||IU(e)?NaN:r===Q3||e===Q3?Q3:r===e&&r===0?FHr(r)?r:e:r>e?r:e}RU.exports=MHr});var K3=s((UOe,PU)=>{"use strict";var BHr=LU();PU.exports=BHr});var BU=s((GOe,MU)=>{"use strict";var FU=65535;function jHr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&FU)>>>0,o=(e&FU)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}MU.exports=jHr});var kU=s((xOe,jU)=>{"use strict";var kHr=BU();jU.exports=kHr});var rv=s((DOe,CU)=>{"use strict";function CHr(r,e,t,i,n,a,u){var o,v,f,c,l,p,g;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,g=0;g<r;g++)f(v,p,c(o,l)),l+=t,p+=a;return e}CU.exports=CHr});var GU=s((HOe,UU)=>{"use strict";var VU=Sn(),VHr=rv(),ev=8;function UHr(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=VU(e),v=VU(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,VHr(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%ev,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<ev)return i;for(c=f;c<r;c+=ev)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}UU.exports=UHr});var HU=s((WOe,DU)=>{"use strict";var xU=Sn(),GHr=rv(),oa=8;function xHr(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=xU(e),c=xU(n),f.accessorProtocol||c.accessorProtocol)return GHr(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%oa,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<oa)return n;for(p=l;p<r;p+=oa)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=oa,v+=oa;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}DU.exports=xHr});var mt=s((zOe,zU)=>{"use strict";var DHr=b(),WU=GU(),HHr=HU();DHr(WU,"ndarray",HHr);zU.exports=WU});var JU=s((XOe,XU)=>{"use strict";function WHr(){}XU.exports=WHr});var $U=s((JOe,YU)=>{"use strict";var zHr=JU();function XHr(){return zHr.name==="foo"}YU.exports=XHr});var QU=s((YOe,ZU)=>{"use strict";var JHr=$U();ZU.exports=JHr});var rG=s(($Oe,KU)=>{"use strict";var YHr=I(),$Hr=QU(),ZHr=q(),QHr=Ao().REGEXP,KHr=$Hr();function rWr(r){if(YHr(r)===!1)throw new TypeError(ZHr("invalid argument. Must provide a function. Value: `%s`.",r));return KHr?r.name:QHr.exec(r.toString())[1]}KU.exports=rWr});var tG=s((ZOe,eG)=>{"use strict";var eWr=rG();eG.exports=eWr});var nG=s((QOe,iG)=>{"use strict";var tWr=mi(),iWr=Kr(),nWr=gi(),aWr=pi(),sWr=Gt(),uWr=Ke(),oWr=pr(),vWr=Qr(),fWr=lr(),cWr=[fWr,vWr,uWr,oWr,aWr,sWr,tWr,iWr,nWr];iG.exports=cWr});var aG=s((KOe,lWr)=>{lWr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var cG=s((rSe,fG)=>{"use strict";var pWr=pe(),gWr=tG(),oG=Xt(),mWr=Po(),dWr=lr(),sG=nG(),uG=aG(),X0=mWr()?oG(dWr):vG;X0=gWr(X0)==="TypedArray"?X0:vG;function vG(){}function hWr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof X0)return!0;for(t=0;t<sG.length;t++)if(r instanceof sG[t])return!0;for(;r;){for(e=pWr(r),t=0;t<uG.length;t++)if(uG[t]===e)return!0;r=oG(r)}return!1}fG.exports=hWr});var pG=s((eSe,lG)=>{"use strict";var yWr=cG();lG.exports=yWr});var mG=s((tSe,gG)=>{"use strict";var qWr=Oi(),bWr=Ti(),wWr=[bWr,qWr];gG.exports=wWr});var dG=s((iSe,EWr)=>{EWr.exports=["Complex64Array","Complex128Array"]});var bG=s((nSe,qG)=>{"use strict";var NWr=pe(),OWr=Xt(),hG=mG(),yG=dG();function SWr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<hG.length;t++)if(r instanceof hG[t])return!0;for(;r;){for(e=NWr(r),t=0;t<yG.length;t++)if(yG[t]===e)return!0;r=OWr(r)}return!1}qG.exports=SWr});var EG=s((aSe,wG)=>{"use strict";var AWr=bG();wG.exports=AWr});var OG=s((sSe,NG)=>{"use strict";var _Wr=q();function TWr(r,e){if(typeof e!="function")throw new TypeError(_Wr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}NG.exports=TWr});var AG=s((uSe,SG)=>{"use strict";var IWr=OG();SG.exports=IWr});var TG=s((oSe,_G)=>{"use strict";var RWr=mi(),LWr=Kr(),PWr=gi(),FWr=pi(),MWr=Gt(),BWr=Ke(),jWr=pr(),kWr=Qr(),CWr=lr(),VWr=Oi(),UWr=Ti(),GWr=[[CWr,"Float64Array"],[kWr,"Float32Array"],[BWr,"Int32Array"],[jWr,"Uint32Array"],[FWr,"Int16Array"],[MWr,"Uint16Array"],[RWr,"Int8Array"],[LWr,"Uint8Array"],[PWr,"Uint8ClampedArray"],[VWr,"Complex64Array"],[UWr,"Complex128Array"]];_G.exports=GWr});var RG=s((vSe,IG)=>{"use strict";var xWr=AG(),DWr=pe(),HWr=Xt(),zi=TG();function WWr(r){var e,t;for(t=0;t<zi.length;t++)if(xWr(r,zi[t][0]))return zi[t][1];for(;r;){for(e=DWr(r),t=0;t<zi.length;t++)if(e===zi[t][1])return zi[t][1];r=HWr(r)}}IG.exports=WWr});var PG=s((fSe,LG)=>{"use strict";var zWr=pG(),XWr=EG(),JWr=yi(),YWr=qi(),$Wr=q(),ZWr=RG();function QWr(r){var e,t,i;if(zWr(r))e=r;else if(XWr(r))r.BYTES_PER_ELEMENT===8?e=JWr(r,0):e=YWr(r,0);else throw new TypeError($Wr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:ZWr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}LG.exports=QWr});var j=s((cSe,FG)=>{"use strict";var KWr=PG();FG.exports=KWr});var tv=s((lSe,MG)=>{"use strict";var rzr=ci(),ezr=z(),tzr=rzr-1;function izr(){var r=ezr(1+tzr*Math.random());return r>>>0}MG.exports=izr});var fv=s((pSe,WG)=>{"use strict";var Ee=b(),dt=L(),BG=B(),iv=S(),nzr=T(),azr=Br(),jG=ge(),szr=cr().isPrimitive,kG=te().isPrimitive,xG=Ui(),DG=ci(),Or=pr(),uzr=K3(),vv=kU(),Xi=mt(),ozr=j(),Ar=q(),CG=tv(),ur=624,nv=397,VG=DG>>>0,vzr=19650218>>>0,av=2147483648>>>0,sv=2147483647>>>0,fzr=1812433253>>>0,czr=1664525>>>0,lzr=1566083941>>>0,pzr=2636928640>>>0,gzr=4022730752>>>0,mzr=2567483615>>>0,uv=[0>>>0,mzr>>>0],HG=1/(xG+1),dzr=67108864>>>0,hzr=2147483648>>>0,ov=1>>>0,yzr=xG*HG,J0=1,Y0=3,ht=2,yt=ur+3,Sr=ur+5,va=ur+6;function UG(r,e){var t;return e?t="option":t="argument",r.length<va+1?new RangeError(Ar("invalid %s. `state` array has insufficient length.",t)):r[0]!==J0?new RangeError(Ar("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,J0,r[0])):r[1]!==Y0?new RangeError(Ar("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Y0,r[1])):r[ht]!==ur?new RangeError(Ar("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[ht])):r[yt]!==1?new RangeError(Ar("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[yt])):r[Sr]!==r.length-va?new RangeError(Ar("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-va,r[Sr])):null}function GG(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=vv(t,fzr)+i>>>0;return r}function qzr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=uzr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=vv(n,czr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=vv(n,lzr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=hzr,r}function bzr(r){var e,t,i,n;for(n=ur-nv,t=0;t<n;t++)e=r[t]&av|r[t+1]&sv,r[t]=r[t+nv]^e>>>1^uv[e&ov];for(i=ur-1;t<i;t++)e=r[t]&av|r[t+1]&sv,r[t]=r[t-n]^e>>>1^uv[e&ov];return e=r[i]&av|r[0]&sv,r[i]=r[nv-1]^e>>>1^uv[e&ov],r}function wzr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!nzr(r))throw new TypeError(Ar("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iv(r,"copy")&&(i.copy=r.copy,!szr(r.copy)))throw new TypeError(Ar("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(iv(r,"state")){if(t=r.state,i.state=!0,!jG(t))throw new TypeError(Ar("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=UG(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),Xi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(iv(r,"seed"))if(n=r.seed,i.seed=!0,kG(n)){if(n>VG)throw new RangeError(Ar("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(azr(n)===!1||n.length<1)throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!kG(n))throw new TypeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>VG)throw new RangeError(Ar("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new Or(va+a),e[0]=J0,e[1]=Y0,e[ht]=ur,e[yt]=1,e[yt+1]=ur,e[Sr]=a,Xi.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=GG(t,ur,vzr),t=qzr(t,ur,n,a)}else n=CG()>>>0}else n=CG()>>>0;return t===void 0&&(e=new Or(va+1),e[0]=J0,e[1]=Y0,e[ht]=ur,e[yt]=1,e[yt+1]=ur,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=GG(t,ur,n)),Ee(h,"NAME","mt19937"),dt(h,"seed",o),dt(h,"seedLength",v),BG(h,"state",l,p),dt(h,"stateLength",f),dt(h,"byteLength",c),Ee(h,"toJSON",g),Ee(h,"MIN",0),Ee(h,"MAX",DG),Ee(h,"normalized",d),Ee(d,"NAME",h.NAME),dt(d,"seed",o),dt(d,"seedLength",v),BG(d,"state",l,p),dt(d,"stateLength",f),dt(d,"byteLength",c),Ee(d,"toJSON",g),Ee(d,"MIN",0),Ee(d,"MAX",yzr),h;function o(){var m=e[Sr];return Xi(m,n,1,new Or(m),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Xi(m,e,1,new Or(m),1)}function p(m){var y;if(!jG(m))throw new TypeError(Ar("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(y=UG(m,!1),y)throw y;i.copy===!1?i.state&&m.length===e.length?Xi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Or(m.length)),Xi(m.length,m,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,ur),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=ozr(e),m.params=[],m}function h(){var m,y;return y=e[yt+1],y>=ur&&(t=bzr(t),y=0),m=t[y],e[yt+1]=y+1,m^=m>>>11,m^=m<<7&pzr,m^=m<<15&gzr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,y=h()>>>6;return(m*dzr+y)*HG}}WG.exports=wzr});var XG=s((gSe,zG)=>{"use strict";var Ezr=fv(),Nzr=tv(),Ozr=Ezr({seed:Nzr()});zG.exports=Ozr});var J=s((mSe,YG)=>{"use strict";var Szr=b(),JG=XG(),Azr=fv();Szr(JG,"factory",Azr);YG.exports=JG});var KG=s((dSe,QG)=>{"use strict";var $G=M().isPrimitive,cv=q(),ZG=vr();function _zr(r,e){return!$G(r)||ZG(r)?new TypeError(cv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!$G(e)||ZG(e)?new TypeError(cv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(cv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}QG.exports=_zr});var ex=s((hSe,rx)=>{"use strict";var Tzr=D(),Izr=ri(),Rzr=N0();function Lzr(r,e,t){return e+Tzr(Izr(Rzr*r()),2)*(t-e)}rx.exports=Lzr});var lv=s((ySe,vx)=>{"use strict";var Ne=b(),$0=L(),tx=B(),ix=T(),nx=I(),ax=S(),sx=_(),Pzr=C(),Z0=J().factory,ux=E(),Fzr=j(),Q0=q(),Mzr=KG(),ox=ex();function Bzr(){var r,e,t,i,n,a;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(r=arguments[0],!ix(r))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ax(r,"prng")){if(!nx(r.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else{if(n=arguments[0],a=arguments[1],i=Mzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ix(r))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ax(r,"prng")){if(!nx(r.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else e=Z0()}return n===void 0?t=h:t=g,Ne(t,"NAME","arcsine"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),tx(t,"state",sx(null),Pzr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",sx(null)),Ne(t,"PRNG",e)):($0(t,"seed",u),$0(t,"seedLength",o),tx(t,"state",c,l),$0(t,"stateLength",v),$0(t,"byteLength",f),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Fzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return ox(e,n,a)}function h(d,m){return ux(d)||ux(m)||d>=m?NaN:ox(e,d,m)}}vx.exports=Bzr});var cx=s((qSe,fx)=>{"use strict";var jzr=lv(),kzr=jzr();fx.exports=kzr});var gx=s((bSe,px)=>{"use strict";var Czr=b(),lx=cx(),Vzr=lv();Czr(lx,"factory",Vzr);px.exports=lx});var pv=s((wSe,bx)=>{"use strict";var Oe=b(),K0=L(),mx=B(),dx=T(),Uzr=_n().isPrimitive,hx=I(),yx=S(),qx=_(),Gzr=C(),rs=J().factory,xzr=E(),Dzr=j(),es=q();function Hzr(){var r,e,t,i;if(arguments.length===0)e=rs();else if(arguments.length===1&&dx(arguments[0]))if(r=arguments[0],yx(r,"prng")){if(!hx(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r);else{if(i=arguments[0],!Uzr(i))throw new TypeError(es("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!dx(r))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yx(r,"prng")){if(!hx(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r)}else e=rs()}return i===void 0?t=p:t=l,Oe(t,"NAME","bernoulli"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),mx(t,"state",qx(null),Gzr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",qx(null)),Oe(t,"PRNG",e)):(K0(t,"seed",n),K0(t,"seedLength",a),mx(t,"state",v,f),K0(t,"stateLength",u),K0(t,"byteLength",o),Oe(t,"toJSON",c),Oe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Dzr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return xzr(g)||g<0||g>1?NaN:e()<=g?1:0}}bx.exports=Hzr});var Ex=s((ESe,wx)=>{"use strict";var Wzr=pv(),zzr=Wzr();wx.exports=zzr});var Sx=s((NSe,Ox)=>{"use strict";var Xzr=b(),Nx=Ex(),Jzr=pv();Xzr(Nx,"factory",Jzr);Ox.exports=Nx});var Ix=s((OSe,Tx)=>{"use strict";var Yzr=U(),Ax=sr(),$zr=P(),_x=.00991256303526217;function Zzr(r,e){var t,i,n;for(i=Ax(-.5*e*e),t=[],t.push(_x/i),t.push(e),n=2;n<r;n++)t[n]=Yzr(-2*$zr(_x/t[n-1]+i)),i=Ax(-.5*t[n]*t[n]);return t.push(0),t}Tx.exports=Zzr});var Lx=s((SSe,Rx)=>{"use strict";function Qzr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}Rx.exports=Qzr});var Mx=s((ASe,Fx)=>{"use strict";var Px=P();function Kzr(r,e,t){var i,n;do i=Px(r())/e,n=Px(r());while(-2*n<i*i);return t?i-e:e-i}Fx.exports=Kzr});var Cx=s((_Se,kx)=>{"use strict";var rXr=Y(),Bx=sr(),eXr=Ix(),tXr=Lx(),iXr=Mx(),nXr=128,jx=3.442619855899,ai=eXr(nXr,jx),aXr=tXr(ai),sXr=127;function uXr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&sXr,rXr(o)<aXr[v])return o*ai[v];if(v===0)return iXr(r,jx,o<0);if(u=o*ai[v],a=u*u,f=v+1,i=Bx(-.5*(ai[v]*ai[v]-a)),n=Bx(-.5*(ai[f]*ai[f]-a)),n+r()*(i-n)<1)return u}}}kx.exports=uXr});var mv=s((TSe,Gx)=>{"use strict";var qt=b(),ts=L(),Vx=B(),oXr=I(),vXr=T(),fXr=cr().isPrimitive,is=S(),cXr=ge(),gv=J().factory,Ux=_(),lXr=C(),pXr=z(),gXr=ci(),mXr=j(),fa=q(),dXr=Cx();function hXr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!vXr(r))throw new TypeError(fa("invalid argument. Must provide an object. Value: `%s`.",r));if(is(r,"copy")&&(n.copy=r.copy,!fXr(r.copy)))throw new TypeError(fa("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(is(r,"prng")){if(!oXr(r.prng))throw new TypeError(fa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(is(r,"state")){if(n.state=r.state,!cXr(r.state))throw new TypeError(fa("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(is(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(fa("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=gv(n),e=t.normalized):(t=gv({seed:pXr(1+gXr*e()),copy:n.copy}),n.seed=null):(t=gv(n),e=t.normalized),i=dXr(e,t),qt(i,"NAME","improved-ziggurat"),n.seed===null?(qt(i,"seed",null),qt(i,"seedLength",null)):(ts(i,"seed",a),ts(i,"seedLength",u)),r&&r.prng?(Vx(i,"state",Ux(null),lXr),qt(i,"stateLength",null),qt(i,"byteLength",null),qt(i,"toJSON",Ux(null))):(Vx(i,"state",f,c),ts(i,"stateLength",o),ts(i,"byteLength",v),qt(i,"toJSON",l)),qt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=mXr(t.state),p.params=[],p}}Gx.exports=hXr});var Dx=s((ISe,xx)=>{"use strict";var yXr=mv(),qXr=yXr();xx.exports=qXr});var bt=s((RSe,Wx)=>{"use strict";var bXr=b(),Hx=Dx(),wXr=mv();bXr(Hx,"factory",wXr);Wx.exports=Hx});var Xx=s((LSe,zx)=>{"use strict";var EXr=I(),NXr=EXr(Object.assign);zx.exports=NXr});var Yx=s((PSe,Jx)=>{"use strict";var OXr=Object.assign;Jx.exports=OXr});var Zx=s((FSe,$x)=>{"use strict";var SXr=typeof Object.getOwnPropertySymbols<"u";$x.exports=SXr});var rD=s((MSe,Kx)=>{"use strict";var Qx=Ri(),AXr=Qx.getOwnPropertySymbols;function _Xr(r){return AXr(Qx(r))}Kx.exports=_Xr});var tD=s((BSe,eD)=>{"use strict";function TXr(){return[]}eD.exports=TXr});var nD=s((jSe,iD)=>{"use strict";var IXr=Zx(),RXr=rD(),LXr=tD(),dv;IXr?dv=RXr:dv=LXr;iD.exports=dv});var sD=s((kSe,aD)=>{"use strict";var PXr=Fi(),FXr=nD(),MXr=In();function BXr(r){var e,t,i;for(e=PXr(r),t=FXr(r),i=0;i<t.length;i++)MXr(r,t[i])&&e.push(t[i]);return e}aD.exports=BXr});var oD=s((CSe,uD)=>{"use strict";var jXr=sD();uD.exports=jXr});var cD=s((VSe,fD)=>{"use strict";var kXr=oD(),vD=Ri(),CXr=q();function VXr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(CXr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=vD(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=kXr(vD(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}fD.exports=VXr});var ca=s((USe,lD)=>{"use strict";var UXr=Xx(),GXr=Yx(),xXr=cD(),hv;UXr?hv=GXr:hv=xXr;lD.exports=hv});var dD=s((GSe,mD)=>{"use strict";var pD=W().isPrimitive,gD=q();function DXr(r,e){return pD(r)?pD(e)?null:new TypeError(gD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}mD.exports=DXr});var wD=s((xSe,bD)=>{"use strict";var hD=P(),yD=U(),HXr=D(),qD=1/3;function WXr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-qD,o=1/yD(9*v),c=HXr(r(),1/t)):(v=t-qD,o=1/yD(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+hD(p)),l=r(),(l<a||hD(l)<u)&&(i=!1)}return v*p*c}bD.exports=WXr});var OD=s((DSe,ND)=>{"use strict";var yv=D(),ED=P();function zXr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=yv(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=yv(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*yv(n/(8*t-8),2),v<c&&(c=a*ED(4*f*(1-f)),c+=u*u/2,c>=ED(v)&&(i=!1))));return f}ND.exports=zXr});var AD=s((HSe,SD)=>{"use strict";var XXr=D(),ns=P();function JXr(r,e,t,i){var n,a,u,o,v,f,c,l,p,g,h;for(o=t-1,v=i-1,f=o+v,c=f*ns(f),u=o/f,n=.5/XXr(f,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*ns(g/o),h+=v*ns((1-g)/v),h+=c+.5*l*l,h>=ns(p)&&(a=!1));return g}SD.exports=JXr});var ID=s((WSe,TD)=>{"use strict";var qv=sr(),_D=D(),bv=P();function YXr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=_D(u,1/e),f=_D(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=bv(u)/e,n=bv(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),qv(i-bv(qv(i)+qv(n))))}TD.exports=YXr});var PD=s((zSe,LD)=>{"use strict";var RD=wD(),$Xr=OD(),ZXr=AD(),QXr=ID();function KXr(r,e,t,i){var n,a;return t===i&&t>1.5?$Xr(r,e,t):t>1&&i>1?ZXr(r,e,t,i):t<1&&i<1?QXr(r,t,i):(n=RD(r,e,t),a=RD(r,e,i),n/(n+a))}LD.exports=KXr});var Ov=s((XSe,xD)=>{"use strict";var Se=b(),as=L(),FD=B(),MD=T(),BD=cr().isPrimitive,jD=I(),Ji=S(),kD=_(),rJr=C(),CD=bt().factory,ss=J().factory,VD=E(),wv=mt(),Ev=pr(),Nv=ge(),UD=ca(),eJr=j(),Ae=q(),tJr=dD(),GD=PD();function iJr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=ss(n);else if(arguments.length===1){if(n=arguments[0],!MD(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ji(n,"copy")&&!BD(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ji(n,"prng")){if(!jD(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ji(n,"state")&&!Nv(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=UD({},n),n.copy===!1?o=!1:n.state&&(n.state=wv(n.state.length,n.state,1,new Ev(n.state.length),1)),n.copy=!1,a=ss(n)}}else{if(t=arguments[0],i=arguments[1],v=tJr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!MD(n))throw new TypeError(Ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ji(n,"copy")&&!BD(n.copy))throw new TypeError(Ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ji(n,"prng")){if(!jD(n.prng))throw new TypeError(Ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ji(n,"state")&&!Nv(n.state))throw new TypeError(Ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=UD({},n),n.copy===!1?o=!1:n.state&&(n.state=wv(n.state.length,n.state,1,new Ev(n.state.length),1)),n.copy=!1,a=ss(n)}}else n={copy:!1},a=ss(n)}return n&&n.prng?e=CD({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=CD({state:r,copy:!1})),t===void 0?u=y:u=m,Se(u,"NAME","beta"),n&&n.prng?(Se(u,"seed",null),Se(u,"seedLength",null),FD(u,"state",kD(null),rJr),Se(u,"stateLength",null),Se(u,"byteLength",null),Se(u,"toJSON",kD(null)),Se(u,"PRNG",a)):(as(u,"seed",f),as(u,"seedLength",c),FD(u,"state",g,h),as(u,"stateLength",l),as(u,"byteLength",p),Se(u,"toJSON",d),Se(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!Nv(N))throw new TypeError(Ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=wv(N.length,N,1,new Ev(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=eJr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return GD(a,e,t,i)}function y(N,O){return VD(N)||VD(O)||N<=0||O<=0?NaN:GD(a,e,N,O)}}xD.exports=iJr});var HD=s((JSe,DD)=>{"use strict";var nJr=Ov(),aJr=nJr();DD.exports=aJr});var XD=s((YSe,zD)=>{"use strict";var sJr=b(),WD=HD(),uJr=Ov();sJr(WD,"factory",uJr);zD.exports=WD});var ZD=s(($Se,$D)=>{"use strict";var JD=W().isPrimitive,YD=q();function oJr(r,e){return JD(r)?JD(e)?null:new TypeError(YD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(YD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}$D.exports=oJr});var rH=s((ZSe,KD)=>{"use strict";var QD=P();function vJr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+QD(l)),c=r(),(c<o||QD(c)<v)&&(a=!1)}return 1/t*i*l}KD.exports=vJr});var Iv=s((QSe,fH)=>{"use strict";var _e=b(),us=L(),eH=B(),tH=T(),Sv=ge(),iH=cr().isPrimitive,nH=I(),Yi=S(),aH=_(),fJr=C(),sH=bt().factory,os=J().factory,uH=E(),Av=U(),oH=D(),_v=mt(),Tv=pr(),cJr=j(),vH=ca(),Te=q(),lJr=ZD(),vs=rH(),fs=1/3;function pJr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=os(n);else if(arguments.length===1){if(n=arguments[0],!tH(n))throw new TypeError(Te("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Yi(n,"copy")&&!iH(n.copy))throw new TypeError(Te("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Yi(n,"prng")){if(!nH(n.prng))throw new TypeError(Te("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Yi(n,"state")&&!Sv(n.state))throw new TypeError(Te("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=vH({},n),n.copy===!1?o=!1:n.state&&(n.state=_v(n.state.length,n.state,1,new Tv(n.state.length),1)),n.copy=!1,a=os(n)}}else{if(e=arguments[0],i=arguments[1],v=lJr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!tH(n))throw new TypeError(Te("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Yi(n,"copy")&&!iH(n.copy))throw new TypeError(Te("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Yi(n,"prng")){if(!nH(n.prng))throw new TypeError(Te("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Yi(n,"state")&&!Sv(n.state))throw new TypeError(Te("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=vH({},n),n.copy===!1?o=!1:n.state&&(n.state=_v(n.state.length,n.state,1,new Tv(n.state.length),1)),n.copy=!1,a=os(n)}}else n={copy:!1},a=os(n)}return n&&n.prng?t=sH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=sH({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-fs):(u=O,c=e+1-fs),f=1/Av(9*c)),_e(u,"NAME","gamma"),n&&n.prng?(_e(u,"seed",null),_e(u,"seedLength",null),eH(u,"state",aH(null),fJr),_e(u,"stateLength",null),_e(u,"byteLength",null),_e(u,"toJSON",aH(null)),_e(u,"PRNG",a)):(us(u,"seed",l),us(u,"seedLength",p),eH(u,"state",d,m),us(u,"stateLength",g),us(u,"byteLength",h),_e(u,"toJSON",y),_e(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(A){if(!Sv(A))throw new TypeError(Te("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));o&&(A=_v(A.length,A,1,new Tv(A.length),1)),a.state=A}function y(){var A={};return A.type="PRNG",A.name=u.NAME,A.state=cJr(a.state),e===void 0?A.params=[]:A.params=[e,i],A}function N(){return vs(a,t,i,c,f)}function O(){return vs(a,t,i,c,f)*oH(a(),1/e)}function F(A,H){var K,G;return uH(A)||uH(H)||A<=0||H<=0?NaN:A<1?(G=A+1-fs,K=1/Av(9*G),vs(a,t,H,G,K)*oH(a(),1/A)):(G=A-fs,K=1/Av(9*G),vs(a,t,H,G,K))}}fH.exports=pJr});var lH=s((KSe,cH)=>{"use strict";var gJr=Iv(),mJr=gJr();cH.exports=mJr});var $i=s((rAe,gH)=>{"use strict";var dJr=b(),pH=lH(),hJr=Iv();dJr(pH,"factory",hJr);gH.exports=pH});var yH=s((eAe,hH)=>{"use strict";var mH=W().isPrimitive,dH=q();function yJr(r,e){return mH(r)?mH(e)?null:new TypeError(dH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(dH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}hH.exports=yJr});var bH=s((tAe,qH)=>{"use strict";function qJr(r,e,t){return r(e,1)/r(t,1)}qH.exports=qJr});var Rv=s((iAe,_H)=>{"use strict";var wt=b(),cs=L(),wH=B(),EH=T(),NH=_(),bJr=C(),ls=$i().factory,OH=E(),wJr=j(),SH=q(),EJr=yH(),AH=bH();function NJr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=ls();else if(arguments.length===1){if(i=arguments[0],!EH(i))throw new TypeError(SH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=ls(i)}else{if(e=arguments[0],t=arguments[1],u=EJr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!EH(i))throw new TypeError(SH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=ls(i)}else r=ls()}return e===void 0?a=d:a=h,n=r.PRNG,wt(a,"NAME","betaprime"),i&&i.prng?(wt(a,"seed",null),wt(a,"seedLength",null),wH(a,"state",NH(null),bJr),wt(a,"stateLength",null),wt(a,"byteLength",null),wt(a,"toJSON",NH(null))):(cs(a,"seed",o),cs(a,"seedLength",v),wH(a,"state",l,p),cs(a,"stateLength",f),cs(a,"byteLength",c),wt(a,"toJSON",g)),wt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=wJr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return AH(r,e,t)}function d(m,y){return OH(m)||OH(y)||m<=0||y<=0?NaN:AH(r,m,y)}}_H.exports=NJr});var IH=s((nAe,TH)=>{"use strict";var OJr=Rv(),SJr=OJr();TH.exports=SJr});var PH=s((aAe,LH)=>{"use strict";var AJr=b(),RH=IH(),_Jr=Rv();AJr(RH,"factory",_Jr);LH.exports=RH});var MH=s((sAe,FH)=>{"use strict";var TJr=z();function IJr(r){return TJr(r)===r&&r>0}FH.exports=IJr});var Lv=s((uAe,BH)=>{"use strict";var RJr=MH();BH.exports=RJr});var kH=s((oAe,jH)=>{"use strict";function LJr(r){return r>=0&&r<=1}jH.exports=LJr});var VH=s((vAe,CH)=>{"use strict";var PJr=kH();CH.exports=PJr});var xH=s((fAe,GH)=>{"use strict";var FJr=te().isPrimitive,MJr=_n().isPrimitive,UH=q();function BJr(r,e){return FJr(r)?MJr(e)?null:new TypeError(UH("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(UH("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}GH.exports=BJr});var HH=s((cAe,DH)=>{"use strict";function jJr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}DH.exports=jJr});var zH=s((lAe,WH)=>{"use strict";var kJr=E();function CJr(r){return r===0||kJr(r)?r:r<0?-1:1}WH.exports=CJr});var ps=s((pAe,XH)=>{"use strict";var VJr=zH();XH.exports=VJr});var YH=s((gAe,JH)=>{"use strict";var UJr=D(),GJr=1/12,xJr=1/360,DJr=1/1260;function HJr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=UJr(r,2),(GJr-(xJr-DJr/e)/e)/r}}JH.exports=HJr});var ZH=s((mAe,$H)=>{"use strict";var Pv=z(),WJr=ps(),zJr=U(),Fv=Y(),gs=P(),ms=YH(),XJr=1/6;function JJr(r,e,t){var i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O,F,A,H,K,G,Fr,Mr,or,Ct;for(H=Pv((e+1)*t),f=e-H+1,K=1-t,G=t/K,c=(e+1)*G,u=e*t*K,a=zJr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,y=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(H+.5)*gs((H+1)/(G*f)),O+=ms(H)+ms(e-H);;){if(or=r(),or<=n)return Mr=or/h-.43,G=Mr*(2*d/(.5-Fv(Mr))+m)+y,Pv(G);if(or>=h?Mr=r()-.5:(Mr=or/h-.93,Mr=WJr(Mr)*.5-Mr,or=h*r()),l=.5-Fv(Mr),A=Pv(Mr*(2*d/l+m)+y),!(A<0||A>e))if(or=or*i/(d/(l*l)+m),p=Fv(A-H),p>15){if(or=gs(or),o=p/u,v=(p/3+.625)*p,v+=XJr,v/=u,o*=v+.5,Fr=-(p*p)/(2*u),or<Fr-o||or<=Fr+o&&(g=e-A+1,Ct=O+(e+1)*gs(f/g),Ct+=(A+.5)*gs(g*G/(A+1)),Ct+=-(ms(A)+ms(e-A)),or<=Ct))return A}else{if(N=1,H<A)for(F=H;F<=A;F++)N*=c/F-G;else if(H>A)for(F=A;F<=H;F++)or*=c/F-G;if(or<=N)return A}}}$H.exports=JJr});var rW=s((dAe,KH)=>{"use strict";var YJr=HH(),$Jr=ZH();function QH(r,e,t){return t>.5?e-QH(r,e,1-t):e*t<10?YJr(r,e,t):$Jr(r,e,t)}KH.exports=QH});var Mv=s((hAe,oW)=>{"use strict";var Ie=b(),ds=L(),eW=B(),tW=T(),iW=I(),nW=S(),aW=_(),ZJr=C(),sW=E(),QJr=Lv(),KJr=VH(),hs=J().factory,rYr=j(),ys=q(),eYr=xH(),uW=rW();function tYr(){var r,e,t,i,n,a;if(arguments.length===0)e=hs();else if(arguments.length===1){if(r=arguments[0],!tW(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nW(r,"prng")){if(!iW(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else{if(n=arguments[0],a=arguments[1],i=eYr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!tW(r))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",r));if(nW(r,"prng")){if(!iW(r.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else e=hs()}return n===void 0?t=h:t=g,Ie(t,"NAME","binomial"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),eW(t,"state",aW(null),ZJr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",aW(null)),Ie(t,"PRNG",e)):(ds(t,"seed",u),ds(t,"seedLength",o),eW(t,"state",c,l),ds(t,"stateLength",v),ds(t,"byteLength",f),Ie(t,"toJSON",p),Ie(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=rYr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return uW(e,n,a)}function h(d,m){return sW(d)||sW(m)||!QJr(d)||!KJr(m)?NaN:uW(e,d,m)}}oW.exports=tYr});var fW=s((yAe,vW)=>{"use strict";var iYr=Mv(),nYr=iYr();vW.exports=nYr});var pW=s((qAe,lW)=>{"use strict";var aYr=b(),cW=fW(),sYr=Mv();aYr(cW,"factory",sYr);lW.exports=cW});var mW=s((bAe,gW)=>{"use strict";var uYr=U(),oYr=P(),vYr=ri(),fYr=Kt(),cYr=vt();function lYr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=uYr(-2*oYr(n)),o=cYr*a,t=u*fYr(o),e=!1,u*vYr(o)}return e=!0,t}}gW.exports=lYr});var hW=s((wAe,dW)=>{"use strict";var pYr=U(),gYr=P(),mYr=Kt(),dYr=Vr(),hYr=mYr(dYr);function yYr(r){var e=pYr(-2*gYr(r));return e*hYr}dW.exports=yYr});var qW=s((EAe,yW)=>{"use strict";var qYr=U(),bYr=P(),wYr=Kt(),EYr=vt();function NYr(r){var e=qYr(-2*bYr(r)),t=EYr*r;return e*wYr(t)}yW.exports=NYr});var Bv=s((NAe,NW)=>{"use strict";var Hr=b(),qs=L(),bW=B(),OYr=T(),SYr=I(),AYr=cr().isPrimitive,la=S(),_Yr=ge(),wW=J().factory,EW=_(),TYr=C(),IYr=j(),pa=q(),RYr=mW(),LYr=hW(),PYr=qW();function FYr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!OYr(r))throw new TypeError(pa("invalid argument. Must provide an object. Value: `%s`.",r));if(la(r,"copy")&&(n.copy=r.copy,!AYr(r.copy)))throw new TypeError(pa("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(la(r,"prng")){if(!SYr(r.prng))throw new TypeError(pa("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(la(r,"state")){if(n.state=r.state,!_Yr(r.state))throw new TypeError(pa("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(la(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(pa("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=wW(n),e=i.normalized):n.seed=null:(i=wW(n),e=i.normalized),t=RYr(e),Hr(t,"NAME","box-muller"),n.seed===null?(Hr(t,"seed",null),Hr(t,"seedLength",null)):(qs(t,"seed",a),qs(t,"seedLength",u)),r&&r.prng?(bW(t,"state",EW(null),TYr),Hr(t,"stateLength",null),Hr(t,"byteLength",null),Hr(t,"toJSON",EW(null))):(bW(t,"state",f,c),qs(t,"stateLength",o),qs(t,"byteLength",v),Hr(t,"toJSON",l)),Hr(t,"PRNG",e),la(e,"MIN")?(Hr(t,"MIN",LYr(e.MIN)),Hr(t,"MAX",PYr(e.MIN))):(Hr(t,"MIN",null),Hr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=IYr(i.state),p.params=[],p}}NW.exports=FYr});var SW=s((OAe,OW)=>{"use strict";var MYr=Bv(),BYr=MYr();OW.exports=BYr});var TW=s((SAe,_W)=>{"use strict";var jYr=b(),AW=SW(),kYr=Bv();jYr(AW,"factory",kYr);_W.exports=AW});var LW=s((AAe,RW)=>{"use strict";var CYr=M().isPrimitive,VYr=W().isPrimitive,IW=q(),UYr=vr();function GYr(r,e){return!CYr(r)||UYr(r)?new TypeError(IW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):VYr(e)?null:new TypeError(IW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}RW.exports=GYr});var FW=s((_Ae,PW)=>{"use strict";function xYr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}PW.exports=xYr});var BW=s((TAe,MW)=>{"use strict";function DYr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}MW.exports=DYr});var CW=s((IAe,kW)=>{"use strict";var HYr=ar(),jW=de(),WYr=FW(),zYr=BW(),XYr=.7853981633974483,JYr=3061616997868383e-32,YYr=.3333333333333341,$Yr=2147483647;function ZYr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=HYr(r),n=i&$Yr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=XYr-r,c=JYr-e,r=l+c,e=0),l=r*r,c=l*l,u=WYr(c),f=l*zYr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=YYr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=jW(c,0),f=u-(l-r),a=-1/c,v=jW(a,0),o=1+v*l,v+a*(o+v*f))}kW.exports=ZYr});var UW=s((RAe,VW)=>{"use strict";var QYr=CW();VW.exports=QYr});var DW=s((LAe,xW)=>{"use strict";var KYr=ar(),GW=UW(),r$r=Dn(),jv=[0,0],e$r=2147483647,t$r=1072243195,i$r=2146435072,n$r=1044381696;function a$r(r){var e,t;return e=KYr(r),e&=e$r,e<=t$r?e<n$r?r:GW(r,0,1):e>=i$r?NaN:(t=r$r(r,jv),GW(jv[0],jv[1],1-((t&1)<<1)))}xW.exports=a$r});var kv=s((PAe,HW)=>{"use strict";var s$r=DW();HW.exports=s$r});var zW=s((FAe,WW)=>{"use strict";var u$r=kv(),o$r=Vr();function v$r(r,e,t){return e+t*u$r(o$r*(r()-.5))}WW.exports=v$r});var Cv=s((MAe,rz)=>{"use strict";var Et=b(),bs=L(),XW=B(),JW=T(),YW=I(),$W=S(),ZW=_(),f$r=C(),QW=E(),Zi=bt().factory,c$r=j(),ws=q(),l$r=LW(),KW=zW();function p$r(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zi();else if(arguments.length===1){if(t=arguments[0],!JW(t))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if($W(t,"prng")){if(!YW(t.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else{if(u=arguments[0],r=arguments[1],a=l$r(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!JW(t))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if($W(t,"prng")){if(!YW(t.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else e=Zi()}return u===void 0?n=d:n=h,i=e.PRNG,Et(n,"NAME","cauchy"),t&&t.prng?(Et(n,"seed",null),Et(n,"seedLength",null),XW(n,"state",ZW(null),f$r),Et(n,"stateLength",null),Et(n,"byteLength",null),Et(n,"toJSON",ZW(null))):(bs(n,"seed",o),bs(n,"seedLength",v),XW(n,"state",l,p),bs(n,"stateLength",f),bs(n,"byteLength",c),Et(n,"toJSON",g)),Et(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=c$r(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return KW(e,u,r)}function d(m,y){return QW(m)||QW(y)||y<=0?NaN:KW(e,m,y)}}rz.exports=p$r});var tz=s((BAe,ez)=>{"use strict";var g$r=Cv(),m$r=g$r();ez.exports=m$r});var az=s((jAe,nz)=>{"use strict";var d$r=b(),iz=tz(),h$r=Cv();d$r(iz,"factory",h$r);nz.exports=iz});var Vv=s((kAe,cz)=>{"use strict";var Nt=b(),Es=L(),sz=B(),y$r=W().isPrimitive,uz=T(),oz=I(),vz=S(),fz=_(),q$r=C(),b$r=E(),Qi=$i().factory,w$r=j(),Ns=q();function E$r(){var r,e,t,i,n;if(arguments.length===0)r=Qi();else if(arguments.length===1&&uz(arguments[0]))if(t=arguments[0],vz(t,"prng")){if(!oz(t.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Qi({prng:t.prng})}else r=Qi(t);else{if(n=arguments[0],!y$r(n))throw new TypeError(Ns("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!uz(t))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",t));if(vz(t,"prng")){if(!oz(t.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Qi(n/2,.5,{prng:t.prng})}else r=Qi(n/2,.5,t)}else r=Qi(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,Nt(i,"NAME","chisquare"),t&&t.prng?(Nt(i,"seed",null),Nt(i,"seedLength",null),sz(i,"state",fz(null),q$r),Nt(i,"stateLength",null),Nt(i,"byteLength",null),Nt(i,"toJSON",fz(null))):(Es(i,"seed",a),Es(i,"seedLength",u),sz(i,"state",f,c),Es(i,"stateLength",o),Es(i,"byteLength",v),Nt(i,"toJSON",l)),Nt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=w$r(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return b$r(h)||h<=0?NaN:r(h/2,.5)}}cz.exports=E$r});var pz=s((CAe,lz)=>{"use strict";var N$r=Vv(),O$r=N$r();lz.exports=O$r});var ga=s((VAe,mz)=>{"use strict";var S$r=b(),gz=pz(),A$r=Vv();S$r(gz,"factory",A$r);mz.exports=gz});var Uv=s((UAe,Ez)=>{"use strict";var Ot=b(),Os=L(),dz=B(),_$r=W().isPrimitive,hz=T(),yz=I(),qz=S(),bz=_(),T$r=C(),I$r=E(),Ki=ga().factory,R$r=j(),wz=U(),Ss=q();function L$r(){var r,e,t,i,n;if(arguments.length===0)r=Ki();else if(arguments.length===1&&hz(arguments[0]))if(t=arguments[0],qz(t,"prng")){if(!yz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ki({prng:t.prng})}else r=Ki(t);else{if(n=arguments[0],!_$r(n))throw new TypeError(Ss("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!hz(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(qz(t,"prng")){if(!yz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ki(n,{prng:t.prng})}else r=Ki(n,t)}else r=Ki(n)}return n===void 0?i=g:i=p,e=r.PRNG,Ot(i,"NAME","chi"),t&&t.prng?(Ot(i,"seed",null),Ot(i,"seedLength",null),dz(i,"state",bz(null),T$r),Ot(i,"stateLength",null),Ot(i,"byteLength",null),Ot(i,"toJSON",bz(null))):(Os(i,"seed",a),Os(i,"seedLength",u),dz(i,"state",f,c),Os(i,"stateLength",o),Os(i,"byteLength",v),Ot(i,"toJSON",l)),Ot(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=R$r(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return wz(r())}function g(h){return I$r(h)||h<=0?NaN:wz(r(h))}}Ez.exports=L$r});var Oz=s((GAe,Nz)=>{"use strict";var P$r=Uv(),F$r=P$r();Nz.exports=F$r});var _z=s((xAe,Az)=>{"use strict";var M$r=b(),Sz=Oz(),B$r=Uv();M$r(Sz,"factory",B$r);Az.exports=Sz});var Rz=s((DAe,Iz)=>{"use strict";var j$r=M().isPrimitive,k$r=W().isPrimitive,Tz=q(),C$r=vr();function V$r(r,e){return!j$r(r)||C$r(r)?new TypeError(Tz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):k$r(e)?null:new TypeError(Tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Iz.exports=V$r});var Pz=s((HAe,Lz)=>{"use strict";var Gv=E(),U$r=Zn(),G$r=Vr();function x$r(r,e,t){var i;return Gv(r)||Gv(e)||Gv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+U$r(i)/G$r)/2)}Lz.exports=x$r});var Bz=s((WAe,Mz)=>{"use strict";var Fz=E();function D$r(r,e){return Fz(r)||Fz(e)?NaN:r<e?0:1}Mz.exports=D$r});var Cz=s((zAe,kz)=>{"use strict";var H$r=_(),jz=E();function W$r(r){if(jz(r))return H$r(NaN);return e;function e(t){return jz(t)?NaN:t<r?0:1}}kz.exports=W$r});var As=s((XAe,Uz)=>{"use strict";var z$r=b(),Vz=Bz(),X$r=Cz();z$r(Vz,"factory",X$r);Uz.exports=Vz});var xz=s((JAe,Gz)=>{"use strict";var J$r=_(),Y$r=As().factory,xv=E(),$$r=Zn(),Z$r=Vr();function Q$r(r,e){if(xv(r)||xv(e)||e<0)return J$r(NaN);if(e===0)return Y$r(r);return t;function t(i){var n;return xv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+$$r(n)/Z$r)/2)}}Gz.exports=Q$r});var Wz=s((YAe,Hz)=>{"use strict";var K$r=b(),Dz=Pz(),rZr=xz();K$r(Dz,"factory",rZr);Hz.exports=Dz});var Dv=s(($Ae,zz)=>{"use strict";var eZr=Wz(),tZr=1e4,iZr=1e-12;function nZr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<tZr;){if(u=(i+n)/2,n-i<iZr)return u;a=eZr(u,e,t),r>a?i=u:n=u,o+=1}return u}zz.exports=nZr});var Jz=s((ZAe,Xz)=>{"use strict";var Hv=E(),aZr=Dv();function sZr(r,e,t){return Hv(e)||Hv(t)||Hv(r)||t<0||r<0||r>1?NaN:t===0?e:aZr(r,e,t)}Xz.exports=sZr});var $z=s((QAe,Yz)=>{"use strict";var uZr=E();function oZr(r,e){return uZr(r)||r<0||r>1?NaN:e}Yz.exports=oZr});var Kz=s((KAe,Qz)=>{"use strict";var vZr=_(),Zz=E();function fZr(r){if(Zz(r))return vZr(NaN);return e;function e(t){return Zz(t)||t<0||t>1?NaN:r}}Qz.exports=fZr});var Wv=s((r_e,eX)=>{"use strict";var cZr=b(),rX=$z(),lZr=Kz();cZr(rX,"factory",lZr);eX.exports=rX});var iX=s((e_e,tX)=>{"use strict";var pZr=_(),gZr=Wv().factory,zv=E(),mZr=Dv();function dZr(r,e){if(zv(r)||zv(e)||e<0)return pZr(NaN);if(e===0)return gZr(r);return t;function t(i){return zv(i)||i<0||i>1?NaN:mZr(i,r,e)}}tX.exports=dZr});var sX=s((t_e,aX)=>{"use strict";var hZr=b(),nX=Jz(),yZr=iX();hZr(nX,"factory",yZr);aX.exports=nX});var oX=s((i_e,uX)=>{"use strict";var qZr=sX();function bZr(r,e,t){return qZr(r(),e,t)}uX.exports=bZr});var Xv=s((n_e,dX)=>{"use strict";var Re=b(),_s=L(),vX=B(),fX=T(),cX=I(),lX=S(),pX=_(),wZr=C(),Ts=J().factory,gX=E(),EZr=j(),Is=q(),NZr=Rz(),mX=oX();function OZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ts();else if(arguments.length===1){if(r=arguments[0],!fX(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lX(r,"prng")){if(!cX(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else{if(n=arguments[0],a=arguments[1],i=NZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!fX(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lX(r,"prng")){if(!cX(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else e=Ts()}return n===void 0?t=h:t=g,Re(t,"NAME","cosine"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),vX(t,"state",pX(null),wZr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",pX(null)),Re(t,"PRNG",e)):(_s(t,"seed",u),_s(t,"seedLength",o),vX(t,"state",c,l),_s(t,"stateLength",v),_s(t,"byteLength",f),Re(t,"toJSON",p),Re(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=EZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return mX(e,n,a)}function h(d,m){return gX(d)||gX(m)||m<=0?NaN:mX(e,d,m)}}dX.exports=OZr});var yX=s((a_e,hX)=>{"use strict";var SZr=Xv(),AZr=SZr();hX.exports=AZr});var wX=s((s_e,bX)=>{"use strict";var _Zr=b(),qX=yX(),TZr=Xv();_Zr(qX,"factory",TZr);bX.exports=qX});var SX=s((u_e,OX)=>{"use strict";var EX=gr().isPrimitive,Jv=q(),NX=vr();function IZr(r,e){return!EX(r)||NX(r)?new TypeError(Jv("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!EX(e)||NX(e)?new TypeError(Jv("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Jv("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}OX.exports=IZr});var TX=s((o_e,_X)=>{"use strict";var Yv=Ui(),rn=z();function AX(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===Yv?(u=rn(a/(n+1)),a%(n+1)===n&&(u+=1)):u=rn((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=AX(r,0,rn(a/v)),!(l>Yv/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===Yv?(o=rn(n/(a+1)),n%(a+1)===a&&(o+=1)):o=rn((n+1)/(a+1));;)if(i=r()-f,i=rn(i/o),i<=a)return i+e}_X.exports=AX});var $v=s((v_e,jX)=>{"use strict";var Le=b(),Rs=L(),IX=B(),RX=T(),LX=I(),PX=S(),FX=_(),RZr=C(),Ls=J().factory,MX=E(),en=yr(),LZr=j(),St=q(),PZr=SX(),BX=TX();function FZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ls();else if(arguments.length===1){if(r=arguments[0],!RX(r))throw new TypeError(St("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PX(r,"prng")){if(!LX(r.prng))throw new TypeError(St("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!en(e.MIN))throw new TypeError(St("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!en(e.MAX))throw new TypeError(St("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Ls(r)}else{if(n=arguments[0],a=arguments[1],i=PZr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!RX(r))throw new TypeError(St("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PX(r,"prng")){if(!LX(r.prng))throw new TypeError(St("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!en(e.MIN))throw new TypeError(St("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!en(e.MAX))throw new TypeError(St("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Ls(r)}else e=Ls()}return n===void 0?t=h:t=g,Le(t,"NAME","discrete-uniform"),r&&r.prng?(Le(t,"seed",null),Le(t,"seedLength",null),IX(t,"state",FX(null),RZr),Le(t,"stateLength",null),Le(t,"byteLength",null),Le(t,"toJSON",FX(null)),Le(t,"PRNG",e)):(Rs(t,"seed",u),Rs(t,"seedLength",o),IX(t,"state",c,l),Rs(t,"stateLength",v),Rs(t,"byteLength",f),Le(t,"toJSON",p),Le(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=LZr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return BX(e,n,a)}function h(d,m){return MX(d)||MX(m)||!en(d)||!en(m)||d>m?NaN:BX(e,d,m)}}jX.exports=FZr});var CX=s((f_e,kX)=>{"use strict";var MZr=$v(),BZr=MZr();kX.exports=BZr});var GX=s((c_e,UX)=>{"use strict";var jZr=b(),VX=CX(),kZr=$v();jZr(VX,"factory",kZr);UX.exports=VX});var HX=s((l_e,DX)=>{"use strict";var CZr=W().isPrimitive,VZr=te().isPrimitive,xX=q();function UZr(r,e){return VZr(r)?CZr(e)?null:new TypeError(xX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xX("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}DX.exports=UZr});var zX=s((p_e,WX)=>{"use strict";var GZr=P();function xZr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*GZr(i)}WX.exports=xZr});var Zv=s((g_e,rJ)=>{"use strict";var Pe=b(),Ps=L(),XX=B(),JX=T(),YX=I(),$X=S(),ZX=_(),DZr=C(),Fs=J().factory,QX=E(),HZr=Lv(),WZr=j(),Ms=q(),zZr=HX(),KX=zX();function XZr(){var r,e,t,i,n,a;if(arguments.length===0)e=Fs();else if(arguments.length===1){if(t=arguments[0],!JX(t))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",t));if($X(t,"prng")){if(!YX(t.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Fs(t)}else{if(a=arguments[0],r=arguments[1],n=zZr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!JX(t))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",t));if($X(t,"prng")){if(!YX(t.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Fs(t)}else e=Fs()}return a===void 0?i=h:i=g,Pe(i,"NAME","erlang"),t&&t.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),XX(i,"state",ZX(null),DZr),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",ZX(null)),Pe(i,"PRNG",e)):(Ps(i,"seed",u),Ps(i,"seedLength",o),XX(i,"state",c,l),Ps(i,"stateLength",v),Ps(i,"byteLength",f),Pe(i,"toJSON",p),Pe(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=WZr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return KX(e,a,r)}function h(d,m){return QX(d)||QX(m)||!HZr(d)||m<=0?NaN:KX(e,d,m)}}rJ.exports=XZr});var tJ=s((m_e,eJ)=>{"use strict";var JZr=Zv(),YZr=JZr();eJ.exports=YZr});var aJ=s((d_e,nJ)=>{"use strict";var $Zr=b(),iJ=tJ(),ZZr=Zv();$Zr(iJ,"factory",ZZr);nJ.exports=iJ});var uJ=s((h_e,sJ)=>{"use strict";var QZr=P();function KZr(r,e){return-QZr(1-r())/e}sJ.exports=KZr});var Qv=s((y_e,gJ)=>{"use strict";var Fe=b(),Bs=L(),oJ=B(),rQr=W().isPrimitive,vJ=T(),fJ=I(),cJ=S(),lJ=_(),eQr=C(),js=J().factory,tQr=E(),iQr=j(),ks=q(),pJ=uJ();function nQr(){var r,e,t,i;if(arguments.length===0)t=js();else if(arguments.length===1&&vJ(arguments[0]))if(e=arguments[0],cJ(e,"prng")){if(!fJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e);else{if(r=arguments[0],!rQr(r))throw new TypeError(ks("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!vJ(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cJ(e,"prng")){if(!fJ(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=js(e)}else t=js()}return r===void 0?i=p:i=l,Fe(i,"NAME","exponential"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),oJ(i,"state",lJ(null),eQr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",lJ(null)),Fe(i,"PRNG",t)):(Bs(i,"seed",n),Bs(i,"seedLength",a),oJ(i,"state",v,f),Bs(i,"stateLength",u),Bs(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=iQr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return pJ(t,r)}function p(g){return tQr(g)||g<=0?NaN:pJ(t,g)}}gJ.exports=nQr});var dJ=s((q_e,mJ)=>{"use strict";var aQr=Qv(),sQr=aQr();mJ.exports=sQr});var qJ=s((b_e,yJ)=>{"use strict";var uQr=b(),hJ=dJ(),oQr=Qv();uQr(hJ,"factory",oQr);yJ.exports=hJ});var NJ=s((w_e,EJ)=>{"use strict";var bJ=W().isPrimitive,wJ=q();function vQr(r,e){return bJ(r)?bJ(e)?null:new TypeError(wJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}EJ.exports=vQr});var SJ=s((E_e,OJ)=>{"use strict";function fQr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}OJ.exports=fQr});var Kv=s((N_e,FJ)=>{"use strict";var At=b(),Cs=L(),AJ=B(),_J=T(),TJ=I(),IJ=S(),RJ=_(),cQr=C(),tn=ga().factory,LJ=E(),lQr=j(),Vs=q(),pQr=NJ(),PJ=SJ();function gQr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=tn();else if(arguments.length===1){if(e=arguments[0],!_J(e))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IJ(e,"prng")){if(!TJ(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=tn({prng:e.prng})}else r=tn(e)}else{if(a=arguments[0],u=arguments[1],n=pQr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!_J(e))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IJ(e,"prng")){if(!TJ(e.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=tn({prng:e.prng})}else r=tn(e)}else r=tn()}return a===void 0?i=d:i=h,t=r.PRNG,At(i,"NAME","f"),e&&e.prng?(At(i,"seed",null),At(i,"seedLength",null),AJ(i,"state",RJ(null),cQr),At(i,"stateLength",null),At(i,"byteLength",null),At(i,"toJSON",RJ(null))):(Cs(i,"seed",o),Cs(i,"seedLength",v),AJ(i,"state",l,p),Cs(i,"stateLength",f),Cs(i,"byteLength",c),At(i,"toJSON",g)),At(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=lQr(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return PJ(r,a,u)}function d(m,y){return LJ(m)||LJ(y)||m<=0||y<=0?NaN:PJ(r,m,y)}}FJ.exports=gQr});var BJ=s((O_e,MJ)=>{"use strict";var mQr=Kv(),dQr=mQr();MJ.exports=dQr});var CJ=s((S_e,kJ)=>{"use strict";var hQr=b(),jJ=BJ(),yQr=Kv();hQr(jJ,"factory",yQr);kJ.exports=jJ});var GJ=s((A_e,UJ)=>{"use strict";var VJ=W().isPrimitive,qQr=M().isPrimitive,rf=vr(),ef=q();function bQr(r,e,t){return!VJ(r)||rf(r)?new TypeError(ef("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!VJ(e)||rf(e)?new TypeError(ef("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!qQr(t)||rf(t)?new TypeError(ef("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}UJ.exports=bQr});var DJ=s((__e,xJ)=>{"use strict";var wQr=D(),EQr=P();function NQr(r,e,t,i){return i+t*wQr(-EQr(r()),-1/e)}xJ.exports=NQr});var nf=s((T_e,$J)=>{"use strict";var Me=b(),Us=L(),HJ=B(),WJ=T(),zJ=I(),XJ=S(),JJ=_(),OQr=C(),Gs=J().factory,tf=E(),SQr=j(),xs=q(),AQr=GJ(),YJ=DJ();function _Qr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=Gs();else if(arguments.length===1){if(e=arguments[0],!WJ(e))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XJ(e,"prng")){if(!zJ(e.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=AQr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!WJ(e))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XJ(e,"prng")){if(!zJ(e.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Gs(e)}else t=Gs()}return r===void 0?i=d:i=h,Me(i,"NAME","frechet"),e&&e.prng?(Me(i,"seed",null),Me(i,"seedLength",null),HJ(i,"state",JJ(null),OQr),Me(i,"stateLength",null),Me(i,"byteLength",null),Me(i,"toJSON",JJ(null)),Me(i,"PRNG",t)):(Us(i,"seed",o),Us(i,"seedLength",v),HJ(i,"state",l,p),Us(i,"stateLength",f),Us(i,"byteLength",c),Me(i,"toJSON",g),Me(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=SQr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return YJ(t,r,a,u)}function d(m,y,N){return tf(m)||tf(y)||tf(N)||m<=0||y<=0?NaN:YJ(t,m,y,N)}}$J.exports=_Qr});var QJ=s((I_e,ZJ)=>{"use strict";var TQr=nf(),IQr=TQr();ZJ.exports=IQr});var eY=s((R_e,rY)=>{"use strict";var RQr=b(),KJ=QJ(),LQr=nf();RQr(KJ,"factory",LQr);rY.exports=KJ});var nY=s((L_e,iY)=>{"use strict";var PQr=z(),tY=P();function FQr(r,e){var t=r();return t===0&&(t=r()),PQr(tY(t)/tY(1-e))}iY.exports=FQr});var af=s((P_e,cY)=>{"use strict";var Be=b(),Ds=L(),aY=B(),sY=T(),MQr=_n().isPrimitive,uY=I(),oY=S(),vY=_(),BQr=C(),Hs=J().factory,jQr=E(),kQr=j(),Ws=q(),fY=nY();function CQr(){var r,e,t,i;if(arguments.length===0)e=Hs();else if(arguments.length===1&&sY(arguments[0]))if(r=arguments[0],oY(r,"prng")){if(!uY(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r);else{if(i=arguments[0],!MQr(i))throw new TypeError(Ws("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!sY(r))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oY(r,"prng")){if(!uY(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r)}else e=Hs()}return i===void 0?t=p:t=l,Be(t,"NAME","geometric"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),aY(t,"state",vY(null),BQr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",vY(null)),Be(t,"PRNG",e)):(Ds(t,"seed",n),Ds(t,"seedLength",a),aY(t,"state",v,f),Ds(t,"stateLength",u),Ds(t,"byteLength",o),Be(t,"toJSON",c),Be(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=kQr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return fY(e,i)}function p(g){return jQr(g)||g<0||g>1?NaN:fY(e,g)}}cY.exports=CQr});var pY=s((F_e,lY)=>{"use strict";var VQr=af(),UQr=VQr();lY.exports=UQr});var dY=s((M_e,mY)=>{"use strict";var GQr=b(),gY=pY(),xQr=af();GQr(gY,"factory",xQr);mY.exports=gY});var qY=s((B_e,yY)=>{"use strict";var DQr=M().isPrimitive,HQr=W().isPrimitive,hY=q(),WQr=vr();function zQr(r,e){return!DQr(r)||WQr(r)?new TypeError(hY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):HQr(e)?null:new TypeError(hY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}yY.exports=zQr});var EY=s((j_e,wY)=>{"use strict";var bY=P();function XQr(r,e,t){return e-t*bY(-bY(r()))}wY.exports=XQr});var sf=s((k_e,RY)=>{"use strict";var je=b(),zs=L(),NY=B(),OY=T(),SY=I(),AY=S(),_Y=_(),JQr=C(),Xs=J().factory,TY=E(),YQr=j(),Js=q(),$Qr=qY(),IY=EY();function ZQr(){var r,e,t,i,n,a;if(arguments.length===0)t=Xs();else if(arguments.length===1){if(e=arguments[0],!OY(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(AY(e,"prng")){if(!SY(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else{if(a=arguments[0],r=arguments[1],n=$Qr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!OY(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(AY(e,"prng")){if(!SY(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else t=Xs()}return a===void 0?i=h:i=g,je(i,"NAME","gumbel"),e&&e.prng?(je(i,"seed",null),je(i,"seedLength",null),NY(i,"state",_Y(null),JQr),je(i,"stateLength",null),je(i,"byteLength",null),je(i,"toJSON",_Y(null)),je(i,"PRNG",t)):(zs(i,"seed",u),zs(i,"seedLength",o),NY(i,"state",c,l),zs(i,"stateLength",v),zs(i,"byteLength",f),je(i,"toJSON",p),je(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=YQr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return IY(t,a,r)}function h(d,m){return TY(d)||TY(m)||m<=0?NaN:IY(t,d,m)}}RY.exports=ZQr});var PY=s((C_e,LY)=>{"use strict";var QQr=sf(),KQr=QQr();LY.exports=KQr});var BY=s((V_e,MY)=>{"use strict";var rKr=b(),FY=PY(),eKr=sf();rKr(FY,"factory",eKr);MY.exports=FY});var kY=s((U_e,jY)=>{"use strict";var uf=hr().isPrimitive,ma=q();function tKr(r,e,t){return uf(r)?uf(e)?uf(t)?t>r?new RangeError(ma("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(ma("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(ma("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(ma("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(ma("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}jY.exports=tKr});var CY=s((G_e,iKr)=>{iKr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var UY=s((x_e,VY)=>{"use strict";var nKr=E(),aKr=yr(),sKr=xi(),uKr=R(),oKr=CY(),vKr=170;function fKr(r){return nKr(r)?NaN:aKr(r)?r<0?NaN:r<=vKr?oKr[r]:uKr:sKr(r+1)}VY.exports=fKr});var xY=s((D_e,GY)=>{"use strict";var cKr=UY();GY.exports=cKr});var HY=s((H_e,DY)=>{"use strict";var _t=xY();function lKr(r,e,t,i){var n,a,u;for(i<t?(n=_t(t)*_t(e+t-i)/(_t(e+t)*_t(t-i)),u=0):(n=_t(e)*_t(i)/(_t(i-t)*_t(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}DY.exports=lKr});var zY=s((W_e,WY)=>{"use strict";var Ys=HY();function pKr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=Ys(r,n,a,u),t-o):(a=t,n=e-t,o=Ys(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=Ys(r,n,a,u),o):(n=e-t,a=t,o=Ys(r,n,a,u),i-o))}WY.exports=pKr});var vf=s((z_e,r$)=>{"use strict";var ke=b(),$s=L(),XY=B(),JY=T(),YY=I(),$Y=S(),ZY=_(),gKr=C(),Zs=J().factory,of=X2(),QY=R(),mKr=j(),Qs=q(),dKr=kY(),KY=zY();function hKr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zs();else if(arguments.length===1){if(r=arguments[0],!JY(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if($Y(r,"prng")){if(!YY(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=dKr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!JY(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if($Y(r,"prng")){if(!YY(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zs(r)}else e=Zs()}return n===void 0?t=d:t=h,ke(t,"NAME","hypergeometric"),r&&r.prng?(ke(t,"seed",null),ke(t,"seedLength",null),XY(t,"state",ZY(null),gKr),ke(t,"stateLength",null),ke(t,"byteLength",null),ke(t,"toJSON",ZY(null)),ke(t,"PRNG",e)):($s(t,"seed",o),$s(t,"seedLength",v),XY(t,"state",l,p),$s(t,"stateLength",f),$s(t,"byteLength",c),ke(t,"toJSON",g),ke(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=mKr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return KY(e,n,a,u)}function d(m,y,N){return m===QY||y===QY||!of(m)||!of(y)||!of(N)||N>m?NaN:KY(e,m,y,N)}}r$.exports=hKr});var t$=s((X_e,e$)=>{"use strict";var yKr=vf(),qKr=yKr();e$.exports=qKr});var a$=s((J_e,n$)=>{"use strict";var bKr=b(),i$=t$(),wKr=vf();bKr(i$,"factory",wKr);n$.exports=i$});var v$=s((Y_e,o$)=>{"use strict";var s$=W().isPrimitive,u$=q();function EKr(r,e){return s$(r)?s$(e)?null:new TypeError(u$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(u$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}o$.exports=EKr});var ff=s(($_e,d$)=>{"use strict";var Tt=b(),Ks=L(),f$=B(),c$=T(),l$=I(),p$=S(),g$=_(),NKr=C(),nn=$i().factory,m$=E(),OKr=j(),ru=q(),SKr=v$();function AKr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=nn();else if(arguments.length===1){if(i=arguments[0],!c$(i))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",i));if(p$(i,"prng")){if(!l$(i.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=nn({prng:i.prng})}else r=nn(i)}else{if(e=arguments[0],t=arguments[1],u=SKr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!c$(i))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",i));if(p$(i,"prng")){if(!l$(i.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=nn(e,t,{prng:i.prng})}else r=nn(e,t,i)}else r=nn(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,Tt(a,"NAME","invgamma"),i&&i.prng?(Tt(a,"seed",null),Tt(a,"seedLength",null),f$(a,"state",g$(null),NKr),Tt(a,"stateLength",null),Tt(a,"byteLength",null),Tt(a,"toJSON",g$(null))):(Ks(a,"seed",o),Ks(a,"seedLength",v),f$(a,"state",l,p),Ks(a,"stateLength",f),Ks(a,"byteLength",c),Tt(a,"toJSON",g)),Tt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=OKr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,y){return m$(m)||m$(y)||m<=0||y<=0?NaN:1/r(m,y)}}d$.exports=AKr});var y$=s((Z_e,h$)=>{"use strict";var _Kr=ff(),TKr=_Kr();h$.exports=TKr});var w$=s((Q_e,b$)=>{"use strict";var IKr=b(),q$=y$(),RKr=ff();IKr(q$,"factory",RKr);b$.exports=q$});var S$=s((K_e,O$)=>{"use strict";var E$=W().isPrimitive,N$=q();function LKr(r,e){return E$(r)?E$(e)?null:new TypeError(N$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(N$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}O$.exports=LKr});var T$=s((rTe,_$)=>{"use strict";var A$=D();function PKr(r,e,t){var i=r();return A$(1-A$(1-i,1/t),1/e)}_$.exports=PKr});var cf=s((eTe,j$)=>{"use strict";var Ce=b(),eu=L(),I$=B(),R$=T(),L$=I(),P$=S(),F$=_(),FKr=C(),tu=J().factory,M$=E(),MKr=j(),iu=q(),BKr=S$(),B$=T$();function jKr(){var r,e,t,i,n,a;if(arguments.length===0)e=tu();else if(arguments.length===1){if(r=arguments[0],!R$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(P$(r,"prng")){if(!L$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else{if(n=arguments[0],a=arguments[1],i=BKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!R$(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(P$(r,"prng")){if(!L$(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else e=tu()}return n===void 0?t=h:t=g,Ce(t,"NAME","kumaraswamy"),r&&r.prng?(Ce(t,"seed",null),Ce(t,"seedLength",null),I$(t,"state",F$(null),FKr),Ce(t,"stateLength",null),Ce(t,"byteLength",null),Ce(t,"toJSON",F$(null)),Ce(t,"PRNG",e)):(eu(t,"seed",u),eu(t,"seedLength",o),I$(t,"state",c,l),eu(t,"stateLength",v),eu(t,"byteLength",f),Ce(t,"toJSON",p),Ce(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=MKr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return B$(e,n,a)}function h(d,m){return M$(d)||M$(m)||d<=0||m<=0?NaN:B$(e,d,m)}}j$.exports=jKr});var C$=s((tTe,k$)=>{"use strict";var kKr=cf(),CKr=kKr();k$.exports=CKr});var G$=s((iTe,U$)=>{"use strict";var VKr=b(),V$=C$(),UKr=cf();VKr(V$,"factory",UKr);U$.exports=V$});var H$=s((nTe,D$)=>{"use strict";var GKr=M().isPrimitive,xKr=W().isPrimitive,x$=q(),DKr=vr();function HKr(r,e){return!GKr(r)||DKr(r)?new TypeError(x$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):xKr(e)?null:new TypeError(x$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}D$.exports=HKr});var z$=s((aTe,W$)=>{"use strict";var WKr=ps(),zKr=Y(),XKr=P();function JKr(r,e,t){var i=r()-.5;return e-t*WKr(i)*XKr(1-2*zKr(i))}W$.exports=JKr});var lf=s((sTe,rZ)=>{"use strict";var Ve=b(),nu=L(),X$=B(),J$=T(),Y$=I(),$$=S(),Z$=_(),YKr=C(),au=J().factory,Q$=E(),$Kr=j(),su=q(),ZKr=H$(),K$=z$();function QKr(){var r,e,t,i,n,a;if(arguments.length===0)e=au();else if(arguments.length===1){if(r=arguments[0],!J$(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if($$(r,"prng")){if(!Y$(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else{if(n=arguments[0],a=arguments[1],i=ZKr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!J$(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if($$(r,"prng")){if(!Y$(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else e=au()}return n===void 0?t=h:t=g,Ve(t,"NAME","laplace"),r&&r.prng?(Ve(t,"seed",null),Ve(t,"seedLength",null),X$(t,"state",Z$(null),YKr),Ve(t,"stateLength",null),Ve(t,"byteLength",null),Ve(t,"toJSON",Z$(null)),Ve(t,"PRNG",e)):(nu(t,"seed",u),nu(t,"seedLength",o),X$(t,"state",c,l),nu(t,"stateLength",v),nu(t,"byteLength",f),Ve(t,"toJSON",p),Ve(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=$Kr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return K$(e,n,a)}function h(d,m){return Q$(d)||Q$(m)||m<=0?NaN:K$(e,d,m)}}rZ.exports=QKr});var tZ=s((uTe,eZ)=>{"use strict";var KKr=lf(),rre=KKr();eZ.exports=rre});var aZ=s((oTe,nZ)=>{"use strict";var ere=b(),iZ=tZ(),tre=lf();ere(iZ,"factory",tre);nZ.exports=iZ});var oZ=s((vTe,uZ)=>{"use strict";var ire=M().isPrimitive,nre=W().isPrimitive,sZ=q(),are=vr();function sre(r,e){return!ire(r)||are(r)?new TypeError(sZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):nre(e)?null:new TypeError(sZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}uZ.exports=sre});var fZ=s((fTe,vZ)=>{"use strict";function ure(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}vZ.exports=ure});var lZ=s((cTe,cZ)=>{"use strict";function ore(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}cZ.exports=ore});var gZ=s((lTe,pZ)=>{"use strict";function vre(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}pZ.exports=vre});var dZ=s((pTe,mZ)=>{"use strict";function fre(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}mZ.exports=fre});var yZ=s((gTe,hZ)=>{"use strict";function cre(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}hZ.exports=cre});var EZ=s((mTe,wZ)=>{"use strict";var lre=E(),qZ=U(),bZ=P(),pre=R(),gre=V(),mre=fZ(),dre=lZ(),hre=gZ(),yre=dZ(),qre=yZ(),bre=.08913147449493408,wre=2.249481201171875,Ere=.807220458984375,Nre=.9399557113647461,Ore=.9836282730102539;function Sre(r){var e,t,i,n,a,u;return lre(r)?NaN:r===1?pre:r===-1?gre:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=mre(t),e*(a*bre+a*u)):n>=.25?(a=qZ(-2*bZ(n)),n-=.25,u=dre(n),e*(a/(wre+u))):(n=qZ(-bZ(n)),n<3?(i=n-1.125,u=hre(i),e*(Ere*n+u*n)):n<6?(i=n-3,u=yre(i),e*(Nre*n+u*n)):(i=n-6,u=qre(i),e*(Ore*n+u*n))))}wZ.exports=Sre});var pf=s((dTe,NZ)=>{"use strict";var Are=EZ();NZ.exports=Are});var SZ=s((hTe,OZ)=>{"use strict";var _re=pf(),gf=E(),Tre=U();function Ire(r,e,t){var i,n;return gf(e)||gf(t)||gf(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*Tre(2),i+n*_re(2*r-1))}OZ.exports=Ire});var _Z=s((yTe,AZ)=>{"use strict";var Rre=_(),Lre=Wv().factory,Pre=pf(),mf=E(),Fre=U();function Mre(r,e){var t,i;if(mf(r)||mf(e)||e<0)return Rre(NaN);return e===0&&Lre(r),t=r,i=e*Fre(2),n;function n(a){return mf(a)||a<0||a>1?NaN:t+i*Pre(2*a-1)}}AZ.exports=Mre});var df=s((qTe,IZ)=>{"use strict";var Bre=b(),TZ=SZ(),jre=_Z();Bre(TZ,"factory",jre);IZ.exports=TZ});var LZ=s((bTe,RZ)=>{"use strict";var kre=df();function Cre(r,e,t){var i=kre(1-r()/2,0,1);return e+t/(i*i)}RZ.exports=Cre});var hf=s((wTe,VZ)=>{"use strict";var Ue=b(),uu=L(),PZ=B(),FZ=T(),MZ=I(),BZ=S(),jZ=_(),Vre=C(),ou=J().factory,kZ=E(),Ure=j(),vu=q(),Gre=oZ(),CZ=LZ();function xre(){var r,e,t,i,n,a;if(arguments.length===0)e=ou();else if(arguments.length===1){if(r=arguments[0],!FZ(r))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BZ(r,"prng")){if(!MZ(r.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else{if(n=arguments[0],a=arguments[1],i=Gre(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!FZ(r))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BZ(r,"prng")){if(!MZ(r.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else e=ou()}return n===void 0?t=h:t=g,Ue(t,"NAME","levy"),r&&r.prng?(Ue(t,"seed",null),Ue(t,"seedLength",null),PZ(t,"state",jZ(null),Vre),Ue(t,"stateLength",null),Ue(t,"byteLength",null),Ue(t,"toJSON",jZ(null)),Ue(t,"PRNG",e)):(uu(t,"seed",u),uu(t,"seedLength",o),PZ(t,"state",c,l),uu(t,"stateLength",v),uu(t,"byteLength",f),Ue(t,"toJSON",p),Ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Ure(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return CZ(e,n,a)}function h(d,m){return kZ(d)||kZ(m)||m<=0?NaN:CZ(e,d,m)}}VZ.exports=xre});var GZ=s((ETe,UZ)=>{"use strict";var Dre=hf(),Hre=Dre();UZ.exports=Hre});var HZ=s((NTe,DZ)=>{"use strict";var Wre=b(),xZ=GZ(),zre=hf();Wre(xZ,"factory",zre);DZ.exports=xZ});var XZ=s((OTe,zZ)=>{"use strict";var Xre=M().isPrimitive,Jre=W().isPrimitive,Yre=vr(),WZ=q();function $re(r,e){return!Xre(r)||Yre(r)?new TypeError(WZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Jre(e)?null:new TypeError(WZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}zZ.exports=$re});var YZ=s((STe,JZ)=>{"use strict";var Zre=P();function Qre(r,e,t){var i=r();return e+t*Zre(i/(1-i))}JZ.exports=Qre});var yf=s((ATe,iQ)=>{"use strict";var Ge=b(),fu=L(),$Z=B(),ZZ=T(),QZ=I(),KZ=S(),rQ=_(),Kre=C(),cu=J().factory,eQ=E(),ree=j(),lu=q(),eee=XZ(),tQ=YZ();function tee(){var r,e,t,i,n,a;if(arguments.length===0)e=cu();else if(arguments.length===1){if(r=arguments[0],!ZZ(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KZ(r,"prng")){if(!QZ(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else{if(n=arguments[0],a=arguments[1],i=eee(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ZZ(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KZ(r,"prng")){if(!QZ(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else e=cu()}return n===void 0?t=h:t=g,Ge(t,"NAME","logistic"),r&&r.prng?(Ge(t,"seed",null),Ge(t,"seedLength",null),$Z(t,"state",rQ(null),Kre),Ge(t,"stateLength",null),Ge(t,"byteLength",null),Ge(t,"toJSON",rQ(null)),Ge(t,"PRNG",e)):(fu(t,"seed",u),fu(t,"seedLength",o),$Z(t,"state",c,l),fu(t,"stateLength",v),fu(t,"byteLength",f),Ge(t,"toJSON",p),Ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=ree(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return tQ(e,n,a)}function h(d,m){return eQ(d)||eQ(m)||m<=0?NaN:tQ(e,d,m)}}iQ.exports=tee});var aQ=s((_Te,nQ)=>{"use strict";var iee=yf(),nee=iee();nQ.exports=nee});var oQ=s((TTe,uQ)=>{"use strict";var aee=b(),sQ=aQ(),see=yf();aee(sQ,"factory",see);uQ.exports=sQ});var cQ=s((ITe,fQ)=>{"use strict";var uee=M().isPrimitive,oee=W().isPrimitive,vQ=q(),vee=vr();function fee(r,e){return!uee(r)||vee(r)?new TypeError(vQ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):oee(e)?null:new TypeError(vQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}fQ.exports=fee});var pQ=s((RTe,lQ)=>{"use strict";var cee=sr();function lee(r,e,t){return cee(e+t*r())}lQ.exports=lee});var qf=s((LTe,wQ)=>{"use strict";var It=b(),pu=L(),gQ=B(),mQ=T(),dQ=I(),hQ=S(),yQ=_(),pee=C(),an=bt().factory,qQ=E(),gee=j(),gu=q(),mee=cQ(),bQ=pQ();function dee(){var r,e,t,i,n,a,u;if(arguments.length===0)e=an();else if(arguments.length===1){if(t=arguments[0],!mQ(t))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hQ(t,"prng")){if(!dQ(t.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else{if(u=arguments[0],r=arguments[1],a=mee(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!mQ(t))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hQ(t,"prng")){if(!dQ(t.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=an({prng:t.prng})}else e=an(t)}else e=an()}return u===void 0?n=d:n=h,i=e.PRNG,It(n,"NAME","lognormal"),t&&t.prng?(It(n,"seed",null),It(n,"seedLength",null),gQ(n,"state",yQ(null),pee),It(n,"stateLength",null),It(n,"byteLength",null),It(n,"toJSON",yQ(null))):(pu(n,"seed",o),pu(n,"seedLength",v),gQ(n,"state",l,p),pu(n,"stateLength",f),pu(n,"byteLength",c),It(n,"toJSON",g)),It(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=gee(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return bQ(e,u,r)}function d(m,y){return qQ(m)||qQ(y)||y<=0?NaN:bQ(e,m,y)}}wQ.exports=dee});var NQ=s((PTe,EQ)=>{"use strict";var hee=qf(),yee=hee();EQ.exports=yee});var AQ=s((FTe,SQ)=>{"use strict";var qee=b(),OQ=NQ(),bee=qf();qee(OQ,"factory",bee);SQ.exports=OQ});var bf=s((MTe,_Q)=>{"use strict";var wee=li(),Eee=z(),Nee=wee-1;function Oee(){var r=Eee(1+Nee*Math.random());return r|0}_Q.exports=Oee});var Nf=s((BTe,PQ)=>{"use strict";var xe=b(),Rt=L(),TQ=B(),wf=S(),See=T(),Aee=cr().isPrimitive,_ee=Br(),Tee=te().isPrimitive,IQ=Pa(),Yr=q(),mu=li(),_r=Ke(),sn=mt(),Iee=j(),RQ=bf(),Ef=mu-1|0,Ree=mu-1|0,Lee=16807,du=1,hu=2,Lt=2,Tr=4,da=5;function LQ(r,e){var t;return e?t="option":t="argument",r.length<da+1?new RangeError(Yr("invalid %s. State array has insufficient length.",t)):r[0]!==du?new RangeError(Yr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,du,r[0])):r[1]!==hu?new RangeError(Yr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,hu,r[1])):r[Lt]!==1?new RangeError(Yr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Lt])):r[Tr]!==r.length-da?new RangeError(Yr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-da,r[Tr])):null}function Pee(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!See(r))throw new TypeError(Yr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wf(r,"copy")&&(i.copy=r.copy,!Aee(r.copy)))throw new TypeError(Yr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(wf(r,"state")){if(t=r.state,i.state=!0,!IQ(t))throw new TypeError(Yr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=LQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new _r(t.length),sn(t.length,t,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,t[Tr])}if(n===void 0)if(wf(r,"seed"))if(n=r.seed,i.seed=!0,Tee(n)){if(n>Ree)throw new RangeError(Yr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(_ee(n)&&n.length>0)a=n.length,e=new _r(da+a),e[0]=du,e[1]=hu,e[Lt]=1,e[Tr]=a,sn.ndarray(a,n,1,0,e,1,Tr+1),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Yr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=RQ()|0}else n=RQ()|0;return t===void 0&&(e=new _r(da+1),e[0]=du,e[1]=hu,e[Lt]=1,e[Tr]=1,e[Tr+1]=n,t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),xe(h,"NAME","minstd"),Rt(h,"seed",o),Rt(h,"seedLength",v),TQ(h,"state",l,p),Rt(h,"stateLength",f),Rt(h,"byteLength",c),xe(h,"toJSON",g),xe(h,"MIN",1),xe(h,"MAX",mu-1),xe(h,"normalized",d),xe(d,"NAME",h.NAME),Rt(d,"seed",o),Rt(d,"seedLength",v),TQ(d,"state",l,p),Rt(d,"stateLength",f),Rt(d,"byteLength",c),xe(d,"toJSON",g),xe(d,"MIN",(h.MIN-1)/Ef),xe(d,"MAX",(h.MAX-1)/Ef),h;function o(){var m=e[Tr];return sn(m,n,1,new _r(m),1)}function v(){return e[Tr]}function f(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return sn(m,e,1,new _r(m),1)}function p(m){var y;if(!IQ(m))throw new TypeError(Yr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(y=LQ(m,!1),y)throw y;i.copy===!1?i.state&&m.length===e.length?sn(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new _r(m.length)),sn(m.length,m,1,e,1)),t=new _r(e.buffer,e.byteOffset+(Lt+1)*e.BYTES_PER_ELEMENT,1),n=new _r(e.buffer,e.byteOffset+(Tr+1)*e.BYTES_PER_ELEMENT,e[Tr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=Iee(e),m.params=[],m}function h(){var m=t[0]|0;return m=Lee*m%mu|0,t[0]=m,m|0}function d(){return(h()-1)/Ef}}PQ.exports=Pee});var MQ=s((jTe,FQ)=>{"use strict";var Fee=Nf(),Mee=bf(),Bee=Fee({seed:Mee()});FQ.exports=Bee});var kQ=s((kTe,jQ)=>{"use strict";var jee=b(),BQ=MQ(),kee=Nf();jee(BQ,"factory",kee);jQ.exports=BQ});var VQ=s((CTe,CQ)=>{"use strict";var Cee=E(),Vee=8;function Uee(r,e,t){var i,n;for(n=0;n<Vee;n++)if(i=r(),Cee(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}CQ.exports=Uee});var Of=s((VTe,UQ)=>{"use strict";var Gee=li(),xee=z(),Dee=Gee-1;function Hee(){var r=xee(1+Dee*Math.random());return r|0}UQ.exports=Hee});var _f=s((UTe,zQ)=>{"use strict";var De=b(),Pt=L(),GQ=B(),Sf=S(),Wee=T(),zee=cr().isPrimitive,Xee=Br(),Jee=te().isPrimitive,xQ=Pa(),un=mt(),Yee=z(),Ir=Ke(),ha=li(),$ee=j(),Wr=q(),DQ=VQ(),HQ=Of(),Af=ha-1|0,Zee=ha-1|0,Qee=16807,Lr=32,bu=1,wu=3,Ft=2,on=Lr+3,Rr=Lr+6,ya=Lr+7,yu=on+1,qu=on+2;function WQ(r,e){var t;return e?t="option":t="argument",r.length<ya+1?new RangeError(Wr("invalid %s. State array has insufficient length.",t)):r[0]!==bu?new RangeError(Wr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,bu,r[0])):r[1]!==wu?new RangeError(Wr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,wu,r[1])):r[Ft]!==Lr?new RangeError(Wr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Lr,r[Ft])):r[on]!==2?new RangeError(Wr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[on])):r[Rr]!==r.length-ya?new RangeError(Wr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ya,r[Rr])):null}function Kee(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Wee(r))throw new TypeError(Wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Sf(r,"copy")&&(i.copy=r.copy,!zee(r.copy)))throw new TypeError(Wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Sf(r,"state")){if(t=r.state,i.state=!0,!xQ(t))throw new TypeError(Wr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=WQ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ir(t.length),un(t.length,t,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,t[Rr])}if(n===void 0)if(Sf(r,"seed"))if(n=r.seed,i.seed=!0,Jee(n)){if(n>Zee)throw new RangeError(Wr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Xee(n)&&n.length>0)a=n.length,e=new Ir(ya+a),e[0]=bu,e[1]=wu,e[Ft]=Lr,e[on]=2,e[qu]=n[0],e[Rr]=a,un.ndarray(a,n,1,0,e,1,Rr+1),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,a),t=DQ(h,t,Lr),e[yu]=t[0];else throw new TypeError(Wr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=HQ()|0}else n=HQ()|0;return t===void 0&&(e=new Ir(ya+1),e[0]=bu,e[1]=wu,e[Ft]=Lr,e[on]=2,e[qu]=n,e[Rr]=1,e[Rr+1]=n,t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,1),t=DQ(h,t,Lr),e[yu]=t[0]),De(d,"NAME","minstd-shuffle"),Pt(d,"seed",o),Pt(d,"seedLength",v),GQ(d,"state",l,p),Pt(d,"stateLength",f),Pt(d,"byteLength",c),De(d,"toJSON",g),De(d,"MIN",1),De(d,"MAX",ha-1),De(d,"normalized",m),De(m,"NAME",d.NAME),Pt(m,"seed",o),Pt(m,"seedLength",v),GQ(m,"state",l,p),Pt(m,"stateLength",f),Pt(m,"byteLength",c),De(m,"toJSON",g),De(m,"MIN",(d.MIN-1)/Af),De(m,"MAX",(d.MAX-1)/Af),d;function o(){var y=e[Rr];return un(y,n,1,new Ir(y),1)}function v(){return e[Rr]}function f(){return e.length}function c(){return e.byteLength}function l(){var y=e.length;return un(y,e,1,new Ir(y),1)}function p(y){var N;if(!xQ(y))throw new TypeError(Wr("invalid argument. Must provide an Int32Array. Value: `%s`.",y));if(N=WQ(y,!1),N)throw N;i.copy===!1?i.state&&y.length===e.length?un(y.length,y,1,e,1):(e=y,i.state=!0):(y.length!==e.length&&(e=new Ir(y.length)),un(y.length,y,1,e,1)),t=new Ir(e.buffer,e.byteOffset+(Ft+1)*e.BYTES_PER_ELEMENT,Lr),n=new Ir(e.buffer,e.byteOffset+(Rr+1)*e.BYTES_PER_ELEMENT,e[Rr])}function g(){var y={};return y.type="PRNG",y.name=d.NAME,y.state=$ee(e),y.params=[],y}function h(){var y=e[qu]|0;return y=Qee*y%ha|0,e[qu]=y,y|0}function d(){var y,N;return y=e[yu],N=Yee(Lr*(y/ha)),y=t[N],e[yu]=y,t[N]=h(),y}function m(){return(d()-1)/Af}}zQ.exports=Kee});var JQ=s((GTe,XQ)=>{"use strict";var rte=_f(),ete=Of(),tte=rte({seed:ete()});XQ.exports=tte});var ZQ=s((xTe,$Q)=>{"use strict";var ite=b(),YQ=JQ(),nte=_f();ite(YQ,"factory",nte);$Q.exports=YQ});var KQ=s((DTe,QQ)=>{"use strict";var ate=sr();function ste(r,e){for(var t=r(),i=1;t>ate(-e);)i+=1,t*=r();return i-1}QQ.exports=ste});var eK=s((HTe,rK)=>{"use strict";var ute=z();function ote(r){return ute(r)===r&&r<0}rK.exports=ote});var iK=s((WTe,tK)=>{"use strict";var vte=eK();tK.exports=vte});var aK=s((zTe,nK)=>{"use strict";var fte=iK(),cte=Qn();function lte(r){return fte(r)?NaN:cte(r+1)}nK.exports=lte});var uK=s((XTe,sK)=>{"use strict";var pte=aK();sK.exports=pte});var cK=s((JTe,fK)=>{"use strict";var gte=uK(),oK=z(),mte=ps(),dte=U(),vK=Y(),Eu=P(),hte=y3(),yte=1/12,qte=1/360;function bte(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=dte(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-vK(c))+v,c+=e+.445,oK(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=mte(c)*.5-c,l=u*r()),a=.5-vK(c),(a>=.013||a>=l)&&(f=oK((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Eu(e/f),c+=-e-hte+f,c-=(yte-qte/(f*f))/f,f>=10&&c>=Eu(l*t)||(c=f*Eu(e)-e-gte(f),f>=0&&f<=9&&c>=Eu(l))))return f}}fK.exports=bte});var pK=s((YTe,lK)=>{"use strict";var wte=KQ(),Ete=cK();function Nte(r,e){return e<30?wte(r,e):Ete(r,e)}lK.exports=Nte});var Tf=s(($Te,bK)=>{"use strict";var He=b(),Nu=L(),gK=B(),Ote=W().isPrimitive,mK=T(),dK=I(),hK=S(),yK=_(),Ste=C(),Ou=J().factory,Ate=E(),_te=j(),Su=q(),qK=pK();function Tte(){var r,e,t,i;if(arguments.length===0)t=Ou();else if(arguments.length===1&&mK(arguments[0]))if(e=arguments[0],hK(e,"prng")){if(!dK(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ou(e);else{if(r=arguments[0],!Ote(r))throw new TypeError(Su("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!mK(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(hK(e,"prng")){if(!dK(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ou(e)}else t=Ou()}return r===void 0?i=p:i=l,He(i,"NAME","poisson"),e&&e.prng?(He(i,"seed",null),He(i,"seedLength",null),gK(i,"state",yK(null),Ste),He(i,"stateLength",null),He(i,"byteLength",null),He(i,"toJSON",yK(null)),He(i,"PRNG",t)):(Nu(i,"seed",n),Nu(i,"seedLength",a),gK(i,"state",v,f),Nu(i,"stateLength",u),Nu(i,"byteLength",o),He(i,"toJSON",c),He(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=_te(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return qK(t,r)}function p(g){return Ate(g)||g<=0?NaN:qK(t,g)}}bK.exports=Tte});var EK=s((ZTe,wK)=>{"use strict";var Ite=Tf(),Rte=Ite();wK.exports=Rte});var If=s((QTe,OK)=>{"use strict";var Lte=b(),NK=EK(),Pte=Tf();Lte(NK,"factory",Pte);OK.exports=NK});var AK=s((KTe,SK)=>{"use strict";var Fte=W().isPrimitive,Mte=M().isPrimitive,Rf=q(),Bte=vr();function jte(r,e){return Fte(r)?!Mte(e)||Bte(e)?new TypeError(Rf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Rf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Rf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}SK.exports=jte});var Mf=s((rIe,MK)=>{"use strict";var Mt=b(),Au=L(),_K=B(),vn=S(),TK=T(),Lf=ge(),IK=cr().isPrimitive,RK=I(),LK=_(),kte=C(),PK=E(),fn=If().factory,_u=$i().factory,Pf=mt(),Ff=pr(),FK=ca(),Cte=j(),We=q(),Vte=AK();function Ute(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=fn(i);else if(arguments.length===1){if(i=arguments[0],!TK(i))throw new TypeError(We("invalid argument. Options argument must be an object. Value: `%s`.",i));if(vn(i,"copy")&&!IK(i.copy))throw new TypeError(We("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(vn(i,"prng")){if(!RK(i.prng))throw new TypeError(We("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=fn({prng:i.prng})}else{if(vn(i,"state")&&!Lf(i.state))throw new TypeError(We("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=FK({},i),i.copy===!1?u=!1:i.state&&(i.state=Pf(i.state.length,i.state,1,new Ff(i.state.length),1)),i.copy=!1,t=fn(i)}}else{if(f=arguments[0],v=arguments[1],o=Vte(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!TK(i))throw new TypeError(We("invalid argument. Options argument must be an object. Value: `%s`.",i));if(vn(i,"copy")&&!IK(i.copy))throw new TypeError(We("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(vn(i,"prng")){if(!RK(i.prng))throw new TypeError(We("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=fn({prng:i.prng})}else{if(vn(i,"state")&&!Lf(i.state))throw new TypeError(We("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=FK({},i),i.copy===!1?u=!1:i.state&&(i.state=Pf(i.state.length,i.state,1,new Ff(i.state.length),1)),i.copy=!1,t=fn(i)}}else i={copy:!1},t=fn(i)}return i&&i.prng?f===void 0?r=_u({prng:i.prng}):r=_u(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=_u({state:e,copy:!1}):r=_u(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=y,a=t.PRNG,Mt(n,"NAME","negative-binomial"),i&&i.prng?(Mt(n,"seed",null),Mt(n,"seedLength",null),_K(n,"state",LK(null),kte),Mt(n,"stateLength",null),Mt(n,"byteLength",null),Mt(n,"toJSON",LK(null))):(Au(n,"seed",c),Au(n,"seedLength",l),_K(n,"state",h,d),Au(n,"stateLength",p),Au(n,"byteLength",g),Mt(n,"toJSON",m)),Mt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!Lf(O))throw new TypeError(We("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Pf(O.length,O,1,new Ff(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=Cte(a.state),f===void 0?O.params=[]:O.params=[f,v],O}function y(){return t(r())}function N(O,F){return PK(O)||PK(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}MK.exports=Ute});var jK=s((eIe,BK)=>{"use strict";var Gte=Mf(),xte=Gte();BK.exports=xte});var VK=s((tIe,CK)=>{"use strict";var Dte=b(),kK=jK(),Hte=Mf();Dte(kK,"factory",Hte);CK.exports=kK});var xK=s((iIe,GK)=>{"use strict";var Wte=M().isPrimitive,zte=W().isPrimitive,UK=q(),Xte=vr();function Jte(r,e){return!Wte(r)||Xte(r)?new TypeError(UK("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zte(e)?null:new TypeError(UK("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}GK.exports=Jte});var HK=s((nIe,DK)=>{"use strict";function Yte(r,e,t){return e+t*r()}DK.exports=Yte});var Bf=s((aIe,QK)=>{"use strict";var Bt=b(),Tu=L(),WK=B(),zK=T(),XK=I(),JK=S(),YK=_(),$te=C(),cn=bt().factory,$K=E(),Zte=j(),Iu=q(),Qte=xK(),ZK=HK();function Kte(){var r,e,t,i,n,a,u;if(arguments.length===0)e=cn();else if(arguments.length===1){if(t=arguments[0],!zK(t))throw new TypeError(Iu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(JK(t,"prng")){if(!XK(t.prng))throw new TypeError(Iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else{if(u=arguments[0],r=arguments[1],a=Qte(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!zK(t))throw new TypeError(Iu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(JK(t,"prng")){if(!XK(t.prng))throw new TypeError(Iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else e=cn()}return u===void 0?n=d:n=h,i=e.PRNG,Bt(n,"NAME","normal"),t&&t.prng?(Bt(n,"seed",null),Bt(n,"seedLength",null),WK(n,"state",YK(null),$te),Bt(n,"stateLength",null),Bt(n,"byteLength",null),Bt(n,"toJSON",YK(null))):(Tu(n,"seed",o),Tu(n,"seedLength",v),WK(n,"state",l,p),Tu(n,"stateLength",f),Tu(n,"byteLength",c),Bt(n,"toJSON",g)),Bt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=Zte(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return ZK(e,u,r)}function d(m,y){return $K(m)||$K(y)||y<=0?NaN:ZK(e,m,y)}}QK.exports=Kte});var rrr=s((sIe,KK)=>{"use strict";var rie=Bf(),eie=rie();KK.exports=eie});var irr=s((uIe,trr)=>{"use strict";var tie=b(),err=rrr(),iie=Bf();tie(err,"factory",iie);trr.exports=err});var urr=s((oIe,srr)=>{"use strict";var nrr=W().isPrimitive,arr=q();function nie(r,e){return nrr(r)?nrr(e)?null:new TypeError(arr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(arr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}srr.exports=nie});var vrr=s((vIe,orr)=>{"use strict";var aie=D();function sie(r,e,t){return t/aie(r(),1/e)}orr.exports=sie});var jf=s((fIe,hrr)=>{"use strict";var ze=b(),Ru=L(),frr=B(),crr=T(),lrr=I(),prr=S(),grr=_(),uie=C(),Lu=J().factory,mrr=E(),oie=j(),Pu=q(),vie=urr(),drr=vrr();function fie(){var r,e,t,i,n,a;if(arguments.length===0)i=Lu();else if(arguments.length===1){if(t=arguments[0],!crr(t))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(prr(t,"prng")){if(!lrr(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Lu(t)}else{if(r=arguments[0],e=arguments[1],a=vie(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!crr(t))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(prr(t,"prng")){if(!lrr(t.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Lu(t)}else i=Lu()}return r===void 0?n=h:n=g,ze(n,"NAME","pareto-type1"),t&&t.prng?(ze(n,"seed",null),ze(n,"seedLength",null),frr(n,"state",grr(null),uie),ze(n,"stateLength",null),ze(n,"byteLength",null),ze(n,"toJSON",grr(null)),ze(n,"PRNG",i)):(Ru(n,"seed",u),Ru(n,"seedLength",o),frr(n,"state",c,l),Ru(n,"stateLength",v),Ru(n,"byteLength",f),ze(n,"toJSON",p),ze(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=oie(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return drr(i,r,e)}function h(d,m){return mrr(d)||mrr(m)||d<=0||m<=0?NaN:drr(i,d,m)}}hrr.exports=fie});var qrr=s((cIe,yrr)=>{"use strict";var cie=jf(),lie=cie();yrr.exports=lie});var Err=s((lIe,wrr)=>{"use strict";var pie=b(),brr=qrr(),gie=jf();pie(brr,"factory",gie);wrr.exports=brr});var Orr=s((pIe,Nrr)=>{"use strict";var mie=U(),die=P();function hie(r,e){return e*mie(-2*die(r()))}Nrr.exports=hie});var kf=s((gIe,Lrr)=>{"use strict";var Xe=b(),Fu=L(),Srr=B(),yie=W().isPrimitive,Arr=T(),_rr=I(),Trr=S(),Irr=_(),qie=C(),Mu=J().factory,bie=E(),wie=j(),Bu=q(),Rrr=Orr();function Eie(){var r,e,t,i;if(arguments.length===0)t=Mu();else if(arguments.length===1&&Arr(arguments[0]))if(e=arguments[0],Trr(e,"prng")){if(!_rr(e.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Mu(e);else{if(r=arguments[0],!yie(r))throw new TypeError(Bu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Arr(e))throw new TypeError(Bu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Trr(e,"prng")){if(!_rr(e.prng))throw new TypeError(Bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Mu(e)}else t=Mu()}return r===void 0?i=p:i=l,Xe(i,"NAME","rayleigh"),e&&e.prng?(Xe(i,"seed",null),Xe(i,"seedLength",null),Srr(i,"state",Irr(null),qie),Xe(i,"stateLength",null),Xe(i,"byteLength",null),Xe(i,"toJSON",Irr(null)),Xe(i,"PRNG",t)):(Fu(i,"seed",n),Fu(i,"seedLength",a),Srr(i,"state",v,f),Fu(i,"stateLength",u),Fu(i,"byteLength",o),Xe(i,"toJSON",c),Xe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=wie(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return Rrr(t,r)}function p(g){return bie(g)||g<=0?NaN:Rrr(t,g)}}Lrr.exports=Eie});var Frr=s((mIe,Prr)=>{"use strict";var Nie=kf(),Oie=Nie();Prr.exports=Oie});var jrr=s((dIe,Brr)=>{"use strict";var Sie=b(),Mrr=Frr(),Aie=kf();Sie(Mrr,"factory",Aie);Brr.exports=Mrr});var Gf=s((hIe,Wrr)=>{"use strict";var jt=b(),ju=L(),krr=B(),ln=S(),Crr=W().isPrimitive,Vrr=T(),Cf=ge(),Urr=cr().isPrimitive,_ie=E(),Grr=I(),xrr=_(),Tie=C(),ku=ga().factory,pn=bt().factory,Vf=mt(),Uf=pr(),Drr=ca(),Iie=j(),ve=q(),Hrr=U();function Rie(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=pn(n);else if(arguments.length===1)if(Vrr(arguments[0])){if(n=arguments[0],ln(n,"copy")&&!Urr(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ln(n,"prng")){if(!Grr(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=pn({prng:n.prng})}else{if(ln(n,"state")&&!Cf(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Drr({},n),n.copy===!1?u=!1:n.state&&(n.state=Vf(n.state.length,n.state,1,new Uf(n.state.length),1)),n.copy=!1,t=pn(n)}}else{if(o=arguments[0],!Crr(o))throw new TypeError(ve("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=pn(n)}else{if(o=arguments[0],!Crr(o))throw new TypeError(ve("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!Vrr(n))throw new TypeError(ve("invalid argument. Options argument must be an object. Value: `%s`.",n));if(ln(n,"copy")&&!Urr(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ln(n,"prng")){if(!Grr(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=pn({prng:n.prng})}else{if(ln(n,"state")&&!Cf(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Drr({},n),n.copy===!1?u=!1:n.state&&(n.state=Vf(n.state.length,n.state,1,new Uf(n.state.length),1)),n.copy=!1,t=pn(n)}}return n&&n.prng?o===void 0?r=ku({prng:n.prng}):r=ku(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=ku({state:e,copy:!1}):r=ku(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,jt(a,"NAME","t"),n&&n.prng?(jt(a,"seed",null),jt(a,"seedLength",null),krr(a,"state",xrr(null),Tie),jt(a,"stateLength",null),jt(a,"byteLength",null),jt(a,"toJSON",xrr(null))):(ju(a,"seed",v),ju(a,"seedLength",f),krr(a,"state",p,g),ju(a,"stateLength",c),ju(a,"byteLength",l),jt(a,"toJSON",h)),jt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(y){if(!Cf(y))throw new TypeError(ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));u&&(y=Vf(y.length,y,1,new Uf(y.length),1)),i.state=y}function h(){var y={};return y.type="PRNG",y.name=a.NAME,y.state=Iie(i.state),o===void 0?y.params=[]:y.params=[o],y}function d(){return t()/Hrr(r()/o)}function m(y){return _ie(y)||y<=0?NaN:t()/Hrr(r(y)/y)}}Wrr.exports=Rie});var Xrr=s((yIe,zrr)=>{"use strict";var Lie=Gf(),Pie=Lie();zrr.exports=Pie});var $rr=s((qIe,Yrr)=>{"use strict";var Fie=b(),Jrr=Xrr(),Mie=Gf();Fie(Jrr,"factory",Mie);Yrr.exports=Jrr});var Qrr=s((bIe,Zrr)=>{"use strict";var xf=M().isPrimitive,Cu=q(),Df=vr();function Bie(r,e,t){return!xf(r)||Df(r)?new TypeError(Cu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!xf(e)||Df(e)?new TypeError(Cu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!xf(t)||Df(t)?new TypeError(Cu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Cu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Zrr.exports=Bie});var eer=s((wIe,rer)=>{"use strict";var Krr=U();function jie(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+Krr(a*u)):(a=(t-e)*(t-i),t-Krr(a*(1-u)))}rer.exports=jie});var Wf=s((EIe,oer)=>{"use strict";var Je=b(),Vu=L(),ter=B(),ier=T(),ner=I(),aer=S(),ser=_(),kie=C(),Uu=J().factory,Hf=E(),Cie=j(),Gu=q(),Vie=Qrr(),uer=eer();function Uie(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Uu();else if(arguments.length===1){if(r=arguments[0],!ier(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(aer(r,"prng")){if(!ner(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=Vie(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!ier(r))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(aer(r,"prng")){if(!ner(r.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Uu(r)}else e=Uu()}return n===void 0?t=d:t=h,Je(t,"NAME","triangular"),r&&r.prng?(Je(t,"seed",null),Je(t,"seedLength",null),ter(t,"state",ser(null),kie),Je(t,"stateLength",null),Je(t,"byteLength",null),Je(t,"toJSON",ser(null)),Je(t,"PRNG",e)):(Vu(t,"seed",o),Vu(t,"seedLength",v),ter(t,"state",l,p),Vu(t,"stateLength",f),Vu(t,"byteLength",c),Je(t,"toJSON",g),Je(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Cie(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return uer(e,n,a,u)}function d(m,y,N){return Hf(m)||Hf(y)||Hf(N)||!(m<=N&&N<=y)?NaN:uer(e,m,y,N)}}oer.exports=Uie});var fer=s((NIe,ver)=>{"use strict";var Gie=Wf(),xie=Gie();ver.exports=xie});var per=s((OIe,ler)=>{"use strict";var Die=b(),cer=fer(),Hie=Wf();Die(cer,"factory",Hie);ler.exports=cer});var her=s((SIe,der)=>{"use strict";var ger=M().isPrimitive,zf=q(),mer=vr();function Wie(r,e){return!ger(r)||mer(r)?new TypeError(zf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!ger(e)||mer(e)?new TypeError(zf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(zf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}der.exports=Wie});var qer=s((AIe,yer)=>{"use strict";function zie(r,e,t){var i=r();return t*i+(1-i)*e}yer.exports=zie});var Xf=s((_Ie,_er)=>{"use strict";var Ye=b(),xu=L(),ber=B(),wer=T(),Eer=I(),Ner=S(),Oer=_(),Xie=C(),Du=J().factory,Ser=E(),Jie=j(),Hu=q(),Yie=her(),Aer=qer();function $ie(){var r,e,t,i,n,a;if(arguments.length===0)e=Du();else if(arguments.length===1){if(r=arguments[0],!wer(r))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ner(r,"prng")){if(!Eer(r.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Du(r)}else{if(n=arguments[0],a=arguments[1],i=Yie(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!wer(r))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ner(r,"prng")){if(!Eer(r.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Du(r)}else e=Du()}return n===void 0?t=h:t=g,Ye(t,"NAME","uniform"),r&&r.prng?(Ye(t,"seed",null),Ye(t,"seedLength",null),ber(t,"state",Oer(null),Xie),Ye(t,"stateLength",null),Ye(t,"byteLength",null),Ye(t,"toJSON",Oer(null)),Ye(t,"PRNG",e)):(xu(t,"seed",u),xu(t,"seedLength",o),ber(t,"state",c,l),xu(t,"stateLength",v),xu(t,"byteLength",f),Ye(t,"toJSON",p),Ye(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Jie(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Aer(e,n,a)}function h(d,m){return Ser(d)||Ser(m)||d>=m?NaN:Aer(e,d,m)}}_er.exports=$ie});var Ier=s((TIe,Ter)=>{"use strict";var Zie=Xf(),Qie=Zie();Ter.exports=Qie});var Per=s((IIe,Ler)=>{"use strict";var Kie=b(),Rer=Ier(),rne=Xf();Kie(Rer,"factory",rne);Ler.exports=Rer});var jer=s((RIe,Ber)=>{"use strict";var Fer=W().isPrimitive,Mer=q();function ene(r,e){return Fer(r)?Fer(e)?null:new TypeError(Mer("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(Mer("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}Ber.exports=ene});var Cer=s((LIe,ker)=>{"use strict";var tne=D(),ine=P();function nne(r,e,t){return t*tne(-ine(1-r()),1/e)}ker.exports=nne});var Jf=s((PIe,zer)=>{"use strict";var $e=b(),Wu=L(),Ver=B(),Uer=T(),Ger=I(),xer=S(),Der=_(),ane=C(),zu=J().factory,Her=E(),sne=j(),Xu=q(),une=jer(),Wer=Cer();function one(){var r,e,t,i,n,a;if(arguments.length===0)t=zu();else if(arguments.length===1){if(e=arguments[0],!Uer(e))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xer(e,"prng")){if(!Ger(e.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e)}else{if(a=arguments[0],r=arguments[1],n=une(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!Uer(e))throw new TypeError(Xu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xer(e,"prng")){if(!Ger(e.prng))throw new TypeError(Xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zu(e)}else t=zu()}return r===void 0?i=h:i=g,$e(i,"NAME","weibull"),e&&e.prng?($e(i,"seed",null),$e(i,"seedLength",null),Ver(i,"state",Der(null),ane),$e(i,"stateLength",null),$e(i,"byteLength",null),$e(i,"toJSON",Der(null)),$e(i,"PRNG",t)):(Wu(i,"seed",u),Wu(i,"seedLength",o),Ver(i,"state",c,l),Wu(i,"stateLength",v),Wu(i,"byteLength",f),$e(i,"toJSON",p),$e(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=sne(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return Wer(t,a,r)}function h(d,m){return Her(d)||Her(m)||d<=0||m<=0?NaN:Wer(t,d,m)}}zer.exports=one});var Jer=s((FIe,Xer)=>{"use strict";var vne=Jf(),fne=vne();Xer.exports=fne});var Zer=s((MIe,$er)=>{"use strict";var cne=b(),Yer=Jer(),lne=Jf();cne(Yer,"factory",lne);$er.exports=Yer});var Ker=s((BIe,Qer)=>{"use strict";var pne=dr(),gne=gr().isPrimitive,mne=q(),dne=Ra();function hne(r){if(gne(r))return r;if(pne(r))return dne(r);throw new TypeError(mne("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}Qer.exports=hne});var etr=s((jIe,rtr)=>{"use strict";var yne=Ker();rtr.exports=yne});var itr=s((kIe,ttr)=>{"use strict";var k=rr(),qne=gx().factory,bne=Sx().factory,wne=XD().factory,Ene=PH().factory,Nne=pW().factory,One=TW().factory,Sne=az().factory,Ane=_z().factory,_ne=ga().factory,Tne=wX().factory,Ine=GX().factory,Rne=aJ().factory,Lne=qJ().factory,Pne=CJ().factory,Fne=eY().factory,Mne=$i().factory,Bne=dY().factory,jne=BY().factory,kne=a$().factory,Cne=bt().factory,Vne=w$().factory,Une=G$().factory,Gne=aZ().factory,xne=HZ().factory,Dne=oQ().factory,Hne=AQ().factory,Wne=kQ().factory,zne=ZQ().factory,Xne=J().factory,Jne=VK().factory,Yne=irr().factory,$ne=Err().factory,Zne=If().factory,Qne=jrr().factory,Kne=$rr().factory,rae=per().factory,eae=Per().factory,tae=Zer().factory,iae=etr();function nae(r){return k(r,"arcsine",qne),k(r,"bernoulli",bne),k(r,"beta",wne),k(r,"betaprime",Ene),k(r,"binomial",Nne),k(r,"boxMuller",One),k(r,"cauchy",Sne),k(r,"chi",Ane),k(r,"chisquare",_ne),k(r,"cosine",Tne),k(r,"discreteUniform",Ine),k(r,"erlang",Rne),k(r,"exponential",Lne),k(r,"f",Pne),k(r,"frechet",Fne),k(r,"gamma",Mne),k(r,"geometric",Bne),k(r,"gumbel",jne),k(r,"hypergeometric",kne),k(r,"improvedZiggurat",Cne),k(r,"invgamma",Vne),k(r,"kumaraswamy",Une),k(r,"laplace",Gne),k(r,"levy",xne),k(r,"logistic",Dne),k(r,"lognormal",Hne),k(r,"minstd",Wne),k(r,"minstdShuffle",zne),k(r,"mt19937",Xne),k(r,"negativeBinomial",Jne),k(r,"normal",Yne),k(r,"pareto1",$ne),k(r,"poisson",Zne),k(r,"rayleigh",Qne),k(r,"t",Kne),k(r,"triangular",rae),k(r,"uniform",eae),k(r,"weibull",tae),r.base={},k(r.base,"normalizeSeed",iae),r}ttr.exports=nae});var atr=s((CIe,ntr)=>{"use strict";var aae=T(),Ju=S(),sae=gr().isPrimitive,uae=te().isPrimitive,oae=hr().isPrimitive,vae=$a().isPrimitive,qa=q();function fae(r,e){return aae(e)?Ju(e,"period")&&(r.period=e.period,!uae(e.period))?new TypeError(qa("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Ju(e,"amplitude")&&(r.amplitude=e.amplitude,!vae(e.amplitude))?new TypeError(qa("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Ju(e,"offset")&&(r.offset=e.offset,!sae(e.offset))?new TypeError(qa("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Ju(e,"iter")&&(r.iter=e.iter,!oae(e.iter))?new TypeError(qa("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(qa("invalid argument. Options argument must be an object. Value: `%s`.",e))}ntr.exports=fae});var vtr=s((VIe,otr)=>{"use strict";var Yf=b(),str=wn(),cae=kv(),lae=O0(),pae=N0(),gae=Vr(),mae=atr();function utr(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=mae(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=gae/e.period,o=e.amplitude/pae,v=0,t={},Yf(t,"next",f),Yf(t,"return",c),str&&Yf(t,str,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*lae(cae(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return utr(e)}}otr.exports=utr});var ctr=s((UIe,ftr)=>{"use strict";var dae=vtr();ftr.exports=dae});var ptr=s((GIe,ltr)=>{"use strict";var hae=rr(),yae=ctr();function qae(r){return hae(r,"iterSawtoothWave",yae),r}ltr.exports=qae});var mtr=s((xIe,gtr)=>{"use strict";var bae=17976931348623157e292;gtr.exports=bae});var Yu=s((DIe,dtr)=>{"use strict";var wae=709.782712893384;dtr.exports=wae});var ytr=s((HIe,htr)=>{"use strict";var Eae=sr();function Nae(r,e){var t,i,n,a;if(n=Eae(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}htr.exports=Nae});var btr=s((WIe,qtr)=>{"use strict";function Oae(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}qtr.exports=Oae});var Etr=s((zIe,wtr)=>{"use strict";function Sae(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}wtr.exports=Sae});var Otr=s((XIe,Ntr)=>{"use strict";function Aae(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Ntr.exports=Aae});var Atr=s((JIe,Str)=>{"use strict";function _ae(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Str.exports=_ae});var Ttr=s((YIe,_tr)=>{"use strict";function Tae(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}_tr.exports=Tae});var Rtr=s(($Ie,Itr)=>{"use strict";function Iae(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Itr.exports=Iae});var Ptr=s((ZIe,Ltr)=>{"use strict";function Rae(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Ltr.exports=Rae});var Mtr=s((QIe,Ftr)=>{"use strict";function Lae(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Ftr.exports=Lae});var Ctr=s((KIe,ktr)=>{"use strict";var Pae=E(),Btr=sr(),Fae=de(),Mae=R(),Bae=V(),jae=btr(),kae=Etr(),Cae=Otr(),Vae=Atr(),Uae=Ttr(),Gae=Rtr(),xae=Ptr(),Dae=Mtr(),$u=1e-300,Hae=13877787807814457e-33,jtr=.8450629115104675,Wae=.12837916709551256,zae=1,Xae=-.0023621185607526594,Jae=1,Yae=-.009864944034847148,$ae=1,Zae=-.0098649429247001,Qae=1;function Kae(r){var e,t,i,n,a,u,o,v;if(Pae(r))return NaN;if(r===Mae)return 0;if(r===Bae)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Hae?1-r:(i=r*r,n=Wae+i*jae(i),a=zae+i*kae(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Xae+a*Cae(a),v=Jae+a*Vae(a),e?1+jtr+o/v:1-jtr-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Yae+a*Uae(a),a=$ae+a*Gae(a);else{if(r<-6)return 2-$u;n=Zae+a*xae(a),a=Qae+a*Dae(a)}return i=Fae(t,0),n=Btr(-(i*i)-.5625)*Btr((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-$u:$u*$u}ktr.exports=Kae});var si=s((rRe,Vtr)=>{"use strict";var r0e=Ctr();Vtr.exports=r0e});var xtr=s((eRe,Gtr)=>{"use strict";var e0e=si(),Utr=U(),t0e=sr(),i0e=Vr();function n0e(r,e){var t,i,n,a,u;if(a=e0e(Utr(e)),a!==0&&r>1){for(i=t0e(-e)/Utr(i0e*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}Gtr.exports=n0e});var $f=s((tRe,Dtr)=>{"use strict";var a0e=-708.3964185322641;Dtr.exports=a0e});var Xtr=s((iRe,ztr)=>{"use strict";var gn=sr(),Zu=D(),s0e=P(),Htr=Yu(),Wtr=$f();function u0e(r,e){var t,i;return i=r*s0e(e),e>=1?i<Htr&&-e>Wtr?t=Zu(e,r)*gn(-e):r>=1?t=Zu(e/gn(e/r),r):t=gn(i-e):i>Wtr?t=Zu(e,r)*gn(-e):e/r<Htr?t=Zu(e/gn(e/r),r):t=gn(i-e),t}ztr.exports=u0e});var Zf=s((nRe,Jtr)=>{"use strict";function o0e(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Jtr.exports=o0e});var $tr=s((aRe,Ytr)=>{"use strict";var v0e=Function;Ytr.exports=v0e});var Qtr=s((sRe,Ztr)=>{"use strict";var f0e=$tr();Ztr.exports=f0e});var rir=s((uRe,Ktr)=>{"use strict";var c0e=Qtr(),l0e=Zf();function p0e(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new c0e(e)();function a(u){return l0e(r,u)}}Ktr.exports=p0e});var iir=s((oRe,tir)=>{"use strict";var g0e=b(),eir=Zf(),m0e=rir();g0e(eir,"factory",m0e);tir.exports=eir});var ui=s((vRe,nir)=>{"use strict";var d0e=2220446049250313e-31;nir.exports=d0e});var sir=s((fRe,air)=>{"use strict";var h0e=eval;air.exports=h0e});var oir=s((cRe,uir)=>{"use strict";var y0e=sir();function q0e(){var r;try{y0e('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}uir.exports=q0e});var Qf=s((lRe,vir)=>{"use strict";var b0e=oir();vir.exports=b0e});var cir=s((pRe,fir)=>{"use strict";var Qu=Y(),w0e=ui(),E0e=1e6;function N0e(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||w0e,a=o.maxTerms||E0e,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Qu(i*u)>=Qu(n)||--a===0)break}else do n=r(),u+=n;while(Qu(i*u)<Qu(n)&&--a);return u}fir.exports=N0e});var gir=s((gRe,pir)=>{"use strict";var lir=Y(),O0e=ui(),S0e=1e6;function A0e(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||O0e,n=u.maxTerms||S0e,a=u.initialValue||0;do i=r(),a+=i;while(lir(t*a)<lir(i)&&--n);return a}pir.exports=A0e});var Ku=s((mRe,mir)=>{"use strict";var _0e=Qf(),T0e=cir(),I0e=gir(),Kf;_0e()?Kf=T0e:Kf=I0e;mir.exports=Kf});var hir=s((dRe,dir)=>{"use strict";function R0e(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}dir.exports=R0e});var qir=s((hRe,yir)=>{"use strict";var L0e=Y(),P0e=P(),F0e=ui(),M0e=Ku(),B0e=hir();function j0e(r){var e,t;return r<=-1?NaN:(t=L0e(r),t>.95?P0e(1+r)-r:t<F0e?-r*r/2:(e={initialValue:-r},M0e(B0e(r),e)))}yir.exports=j0e});var wir=s((yRe,bir)=>{"use strict";var k0e=qir();bir.exports=k0e});var Nir=s((qRe,Eir)=>{"use strict";function C0e(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Eir.exports=C0e});var Sir=s((bRe,Oir)=>{"use strict";function V0e(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Oir.exports=V0e});var _ir=s((wRe,Air)=>{"use strict";function U0e(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Air.exports=U0e});var Iir=s((ERe,Tir)=>{"use strict";function G0e(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Tir.exports=G0e});var Lir=s((NRe,Rir)=>{"use strict";function x0e(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Rir.exports=x0e});var Fir=s((ORe,Pir)=>{"use strict";function D0e(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Pir.exports=D0e});var Bir=s((SRe,Mir)=>{"use strict";function H0e(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Mir.exports=H0e});var kir=s((ARe,jir)=>{"use strict";function W0e(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}jir.exports=W0e});var Vir=s((_Re,Cir)=>{"use strict";function z0e(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Cir.exports=z0e});var Gir=s((TRe,Uir)=>{"use strict";var X0e=iir(),J0e=wir(),Y0e=si(),rc=U(),$0e=sr(),Z0e=vt(),Q0e=Nir(),K0e=Sir(),rse=_ir(),ese=Iir(),tse=Lir(),ise=Fir(),nse=Bir(),ase=kir(),sse=Vir(),$r=[0,0,0,0,0,0,0,0,0,0];function use(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-J0e(i),a=r*n,u=rc(2*n),e<r&&(u=-u),$r[0]=Q0e(u),$r[1]=K0e(u),$r[2]=rse(u),$r[3]=ese(u),$r[4]=tse(u),$r[5]=ise(u),$r[6]=nse(u),$r[7]=ase(u),$r[8]=sse(u),$r[9]=-.0005967612901927463,t=X0e($r,1/r),t*=$0e(-a)/rc(Z0e*r),e<r&&(t=-t),t+=Y0e(rc(a))/2,t}Uir.exports=use});var Dir=s((IRe,xir)=>{"use strict";function ose(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}xir.exports=ose});var Wir=s((RRe,Hir)=>{"use strict";var vse=Ku(),fse=Dir();function cse(r,e,t){var i,n;return t=t||0,n=fse(r,e),i=vse(n,{initialValue:t}),i}Hir.exports=cse});var Xir=s((LRe,zir)=>{"use strict";function lse(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}zir.exports=lse});var Yir=s((PRe,Jir)=>{"use strict";var pse=Xir();Jir.exports=pse});var Zir=s((FRe,$ir)=>{"use strict";var gse=Yir();$ir.exports=gse});var rnr=s((MRe,Kir)=>{"use strict";var mse=p3(),Qir=E(),ec=V();function dse(r,e){return Qir(r)||Qir(e)?NaN:r===ec||e===ec?ec:r===e&&r===0?mse(r)?r:e:r<e?r:e}Kir.exports=dse});var tnr=s((BRe,enr)=>{"use strict";var hse=rnr();enr.exports=hse});var nnr=s((jRe,inr)=>{"use strict";var yse=10.900511;inr.exports=yse});var tc=s((kRe,anr)=>{"use strict";var qse=2.718281828459045;anr.exports=qse});var onr=s((CRe,unr)=>{"use strict";var bse=Zir(),wse=Qn(),Ese=xi(),Nse=ut(),Ose=U(),Sse=Y(),kt=sr(),ba=D(),ic=K3(),nc=tnr(),snr=P(),ro=Yu(),wa=$f(),ac=nnr(),Ase=tc();function _se(r,e){var t,i,n,a,u,o,v;return n=r+ac-.5,v=(e-r-ac+.5)/n,r<1?e<=wa?kt(r*snr(e)-e-wse(r)):ba(e,r)*kt(-e)/Ese(r):(Sse(v*v*r)<=100&&r>150?(t=r*(Nse(v)-v)+e*(.5-ac)/n,t=kt(t)):(a=r*snr(e/n),u=r-e,nc(a,u)<=wa||ic(a,u)>=ro?(i=u/r,nc(a,u)/2>wa&&ic(a,u)/2<ro?(o=ba(e/n,r/2)*kt(u/2),t=o*o):nc(a,u)/4>wa&&ic(a,u)/4<ro&&e>r?(o=ba(e/n,r/4)*kt(u/4),t=o*o,t*=t):i>wa&&i<ro?t=ba(e*kt(i)/n,r):t=kt(a+u)):t=ba(e/n,r)*kt(u)),t*=Ose(n/Ase)/bse(r),t)}unr.exports=_se});var fnr=s((VRe,vnr)=>{"use strict";var Tse=.34657359027997264;vnr.exports=Tse});var lnr=s((URe,cnr)=>{"use strict";function Ise(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}cnr.exports=Ise});var ynr=s((GRe,hnr)=>{"use strict";var Rse=E(),pnr=ar(),sc=he(),Lse=Vi(),gnr=R(),Pse=V(),mnr=ue(),Fse=fnr(),Mse=lnr(),Bse=709.782712893384,uc=.6931471803691238,oc=19082149292705877e-26,dnr=1.4426950408889634,jse=38.816242111356935,kse=1.0397207708399179;function Cse(r){var e,t,i,n,a,u,o,v,f,c,l,p,g;if(r===gnr||Rse(r))return r;if(r===Pse)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=jse){if(i)return-1;if(v>=Bse)return gnr}if(u=pnr(v)|0,v>Fse)v<kse?i?(n=r+uc,a=-oc,g=-1):(n=r-uc,a=oc,g=1):(i?g=dnr*r-.5:g=dnr*r+.5,g|=0,l=g,n=r-l*uc,a=l*oc),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,f=r*e,o=1+f*Mse(f),l=3-o*e,p=f*((o-l)/(6-r*l)),g===0?r-(r*p-f):(t=Lse(mnr+g<<20,0),p=r*(p-c)-c,p-=f,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(v=1-(p-r),g===1024?(n=pnr(v)+(g<<20)|0,v=sc(v,n)):v*=t,v-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=sc(l,n),v=l-(p-r)):(n=mnr-g<<20|0,l=sc(l,n),v=r-(p+l),v+=1),v*=t,v))}hnr.exports=Cse});var vc=s((xRe,qnr)=>{"use strict";var Vse=ynr();qnr.exports=Vse});var Nnr=s((DRe,Enr)=>{"use strict";var bnr=E(),wnr=Y(),Use=vc(),Gse=P(),xse=D(),Dse=M0();function Hse(r,e){var t;if(bnr(r)||bnr(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((wnr(e*(r-1))<.5||wnr(e)<.2)&&(t=Gse(r)*e,t<.5))return Use(t)}else if(Dse(e)!==e)return NaN;return xse(r,e)-1}Enr.exports=Hse});var Snr=s((HRe,Onr)=>{"use strict";var Wse=Nnr();Onr.exports=Wse});var _nr=s((WRe,Anr)=>{"use strict";function zse(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Anr.exports=zse});var Inr=s((zRe,Tnr)=>{"use strict";function Xse(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Tnr.exports=Xse});var Lnr=s((XRe,Rnr)=>{"use strict";function Jse(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Rnr.exports=Jse});var Fnr=s((JRe,Pnr)=>{"use strict";var fc=P(),Yse=ui(),$se=_nr(),Zse=Inr(),Qse=Lnr(),Kse=.15896368026733398,rue=.5281534194946289,eue=.45201730728149414;function tue(r,e,t){var i,n,a,u;if(r<Yse)return-fc(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=fc(r);while(r>=3);t=r-2}return a=t*(r+1),u=$se(t),n+=a*Kse+a*u,n}return r<1&&(n+=-fc(r),t=e,e=r,r+=1),r<=1.5?(a=Zse(e),i=e*t,n+=i*rue+i*a,n):(a=t*e,u=Qse(-t),n+=a*eue+a*u,n)}Pnr.exports=tue});var Cnr=s((YRe,knr)=>{"use strict";var Mnr=xi(),Bnr=vc(),iue=ut(),nue=E(),jnr=Fnr();function aue(r){return nue(r)?NaN:r<0?r<-.5?Mnr(1+r)-1:Bnr(-iue(r)+jnr(r+2,r+1,r)):r<2?Bnr(jnr(r+1,r,r-1)):Mnr(1+r)-1}knr.exports=aue});var Unr=s(($Re,Vnr)=>{"use strict";var sue=Cnr();Vnr.exports=sue});var xnr=s((ZRe,Gnr)=>{"use strict";function uue(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Gnr.exports=uue});var Hnr=s((QRe,Dnr)=>{"use strict";var oue=Snr(),vue=Ku(),fue=Unr(),cue=xnr();function lue(r,e,t){var i,n,a,u,o;return n=fue(r),a=(n+1)/r,u=oue(e,r),n-=u,n/=r,o=cue(r,e),u+=1,i=t?a:0,n=-u*vue(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Dnr.exports=lue});var cc=s((KRe,Wnr)=>{"use strict";var pue=11754943508222875e-54;Wnr.exports=pue});var Xnr=s((rLe,znr)=>{"use strict";var eo=Y(),fe=cc(),gue=ui(),mue=1e6;function due(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=fe),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=fe),o=f[1]+f[0]/o,o===0&&(o=fe),v=1/v,n=o*v,u*=n);while(eo(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=fe),o=f[1]+f[0]/o,o===0&&(o=fe),v=1/v,n=o*v,u*=n);while(f&&eo(n-1)>e&&--t);return a/u}function hue(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=fe),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=fe),u=v[1]+v[0]/u,u===0&&(u=fe),o=1/o,n=u*o,a*=n);while(v&&eo(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=fe),u=v[1]+v[0]/u,u===0&&(u=fe),o=1/o,n=u*o,a*=n);while(v&&eo(n-1)>e&&--t);return a}function yue(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||mue,n=i.tolerance||gue,i.keep?hue(r,n,t):due(r,n,t)}znr.exports=yue});var $nr=s((eLe,Ynr)=>{"use strict";var Jnr=Y(),que=ui(),mn=cc(),bue=1e6;function wue(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=mn),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=mn),a=v[1]+v[0]/a,a===0&&(a=mn),u=1/u,i=a*u,o*=i);while(v&&Jnr(i-1)>e&&--t);return n/o}function Eue(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=mn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=mn),n=o[1]+o[0]/n,n===0&&(n=mn),a=1/a,i=n*a,u*=i);while(o&&Jnr(i-1)>e&&--t);return u}function Nue(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||que,t=i.maxIter||bue,i.keep?Eue(r,n,t):wue(r,n,t)}Ynr.exports=Nue});var Qnr=s((tLe,Znr)=>{"use strict";var Oue=Qf(),Sue=Xnr(),Aue=$nr(),lc;Oue()?lc=Sue:lc=Aue;Znr.exports=lc});var rar=s((iLe,Knr)=>{"use strict";function _ue(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Knr.exports=_ue});var tar=s((nLe,ear)=>{"use strict";var Tue=Qnr(),Iue=rar();function Rue(r,e){var t=Iue(r,e);return 1/(e-r+1+Tue(t))}ear.exports=Rue});var par=s((aLe,lar)=>{"use strict";var Lue=Qn(),Pue=z(),Ea=xi(),iar=Y(),Fue=sr(),nar=D(),Zr=P(),Mue=h3(),aar=mtr(),Bue=g3(),sar=Yu(),jue=R(),kue=ytr(),Cue=xtr(),uar=Xtr(),Vue=Gir(),pc=Wir(),oar=onr(),Uue=Hnr(),far=tar(),Gue=170;function car(r,e,t,i){var n,a,u,o,v,f,c,l,p,g,h,d,m,y,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Gue&&!a)return l&&e*4<r?(p=e*Zr(r)-r,p+=Zr(far(e,r))):!l&&e>4*r?(p=e*Zr(r)-r,o=0,p+=Zr(pc(e,r,o)/e)):(p=car(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Zr(p)-e+(e-.5)*Zr(e),p+=Zr(Bue)):(p=e*Zr(r)-r,o=0,p+=Zr(pc(e,r,o)/e)):p=Zr(p)+Lue(e)),p>sar?jue:Fue(p);switch(c=e<30&&e<=r+1&&r<sar,c?(y=Pue(e),g=y===e,v=g?!1:iar(y-e)===.5):g=v=!1,g&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<Mue&&e>1?u=6:r<.5?-.4/Zr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=iar((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=kue(e,r),a===!1&&(p*=Ea(e));break;case 1:p=Cue(e,r),a===!1&&(p*=Ea(e));break;case 2:p=a?oar(e,r):uar(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:Ea(e),a||p>=1||aar*p>o?(o/=p,a||e<1||aar/e>o?(o*=-e,n=!0):o=0):o=0)),p*=pc(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=Uue(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?oar(e,r):uar(e,r),p!==0&&(p*=far(e,r));break;case 5:p=Vue(e,r),r>=e&&(l=!l);break;case 6:p=a?nar(r,e)/Ea(e+1):nar(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:Ea(e),p=d-p),p}lar.exports=car});var gc=s((sLe,gar)=>{"use strict";var xue=par();gar.exports=xue});var dar=s((uLe,mar)=>{"use strict";var Due=gc(),mc=E(),Hue=R();function Wue(r,e,t){return mc(r)||mc(e)||mc(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Hue?1:Due(r*t,e)}mar.exports=Wue});var qar=s((oLe,yar)=>{"use strict";var zue=_(),Xue=As().factory,Jue=gc(),har=E(),Yue=R();function $ue(r,e){if(har(r)||har(e)||r<0||e<=0)return zue(NaN);if(r===0)return Xue(0);return t;function t(i){return i<=0?0:i===Yue?1:Jue(i*e,r)}}yar.exports=$ue});var dc=s((vLe,war)=>{"use strict";var Zue=b(),bar=dar(),Que=qar();Zue(bar,"factory",Que);war.exports=bar});var Nar=s((fLe,Ear)=>{"use strict";var Kue=dc();function roe(r,e){return Kue(r,e/2,.5)}Ear.exports=roe});var Sar=s((cLe,Oar)=>{"use strict";var eoe=dc().factory;function toe(r){return eoe(r/2,.5)}Oar.exports=toe});var Tar=s((lLe,_ar)=>{"use strict";var ioe=b(),Aar=Nar(),noe=Sar();ioe(Aar,"factory",noe);_ar.exports=Aar});var Par=s((pLe,Lar)=>{"use strict";var aoe=T(),soe=S(),uoe=Za(),Iar=q(),Rar=["values","indices","*"];function ooe(r,e){return aoe(e)?soe(e,"returns")&&(r.returns=e.returns,uoe(Rar,r.returns)===-1)?new TypeError(Iar('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Rar.join('", "'),r.returns)):null:new TypeError(Iar("invalid argument. Options argument must be an object. Value: `%s`.",e))}Lar.exports=ooe});var Mar=s((gLe,Far)=>{"use strict";var voe=S();function foe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),voe(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Far.exports=foe});var jar=s((mLe,Bar)=>{"use strict";var coe=S();function loe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),coe(t,n)?t[n].push(a):t[n]=[a];return t}Bar.exports=loe});var Car=s((dLe,kar)=>{"use strict";var poe=S();function goe(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),poe(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}kar.exports=goe});var xar=s((hLe,Gar)=>{"use strict";var Var=Br(),Uar=q(),moe=Par(),doe=Mar(),hoe=jar(),yoe=Car();function qoe(r,e,t){var i,n,a;if(!Var(r))throw new TypeError(Uar("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=moe(i,e),n)throw n;a=t}if(!Var(a))throw new TypeError(Uar("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?doe(r,a):i.returns==="indices"?hoe(r,a):yoe(r,a)}Gar.exports=qoe});var Har=s((yLe,Dar)=>{"use strict";var boe=xar();Dar.exports=boe});var zar=s((qLe,War)=>{"use strict";function woe(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}War.exports=woe});var Yar=s((bLe,Jar)=>{"use strict";var Eoe=dr(),Noe=M().isPrimitive,Ooe=T(),Soe=vr(),Xar=S(),hc=q();function Aoe(r,e){return Ooe(e)?Xar(e,"alpha")&&(r.alpha=e.alpha,!Noe(r.alpha)||Soe(r.alpha))?new TypeError(hc("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Xar(e,"groups")&&(r.groups=e.groups,!Eoe(r.groups))?new TypeError(hc("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(hc("invalid argument. Options argument must be an object. Value: `%s`.",e))}Jar.exports=Aoe});var t0r=s((wLe,e0r)=>{"use strict";var $ar=E(),to=Cr(),Zar=D(),_oe=Y(),Qar=Z2(),Toe=Ui(),Kar=g0(),Ioe=k2(),Roe=m0(),Loe=Toe+1,r0r=1e308;function Poe(r,e){var t,i;return $ar(r)||$ar(e)||to(e)?NaN:to(r)||r===0||e<Roe||_oe(r)>Loe&&e<=0?r:e>Kar?0*r:e<Ioe?(t=Zar(10,-(e+Kar)),i=r*r0r*t,to(i)?r:Qar(i)/r0r/t):(t=Zar(10,-e),i=r*t,to(i)?r:Qar(i)/t)}e0r.exports=Poe});var n0r=s((ELe,i0r)=>{"use strict";var Foe=t0r();i0r.exports=Foe});var u0r=s((NLe,s0r)=>{"use strict";var Moe=te(),Boe=T(),joe=cr().isPrimitive,a0r=S(),yc=q(),qc=n0r();function koe(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Boe(r))throw new TypeError(yc("invalid argument. First argument must be an object. Value: `%s`.",r));if(a0r(r,"digits")){if(!Moe(r.digits))throw new TypeError(yc("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(a0r(r,"decision")){if(!joe(r.decision))throw new TypeError(yc("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+qc(this.pValue,-t)+`
`,i+="    statistic: "+qc(this.statistic,-t)+`
`,i+="    df: "+qc(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}s0r.exports=koe});var f0r=s((OLe,v0r)=>{"use strict";var Coe=Br(),Voe=T(),oi=rr(),Uoe=Fi(),io=q(),Goe=Tar(),xoe=Har(),o0r=P(),Doe=zar(),Hoe=Yar(),Woe=u0r();function zoe(){var r,e,t,i,n,a,u,o,v,f,c,l,p,g,h,d,m,y,N,O;if(v=[],e=arguments.length,f={},Voe(arguments[e-1])&&(r=arguments[e-1],e-=1,g=Hoe(f,r),g))throw g;if(f.groups){if(n=xoe(arguments[0],f.groups),i=Uoe(n),e=i.length,e<2)throw new Error(io("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)v.push(n[i[O]])}else for(O=0;O<e;O++)v.push(arguments[O]);for(u=0,t=0,o=0,h=0,y=new Array(e),N=y.slice(),O=0;O<e;O++){if(p=v[O],!Coe(p))throw new TypeError(io("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(io("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));y[O]=p.length-1,u+=y[O],t+=1/y[O],N[O]=Doe(p),o+=y[O]*N[O],h+=y[O]*o0r(N[O])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(io("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*o0r(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-Goe(l,m),d={},oi(d,"rejected",c<=a),oi(d,"alpha",a),oi(d,"pValue",c),oi(d,"statistic",l),oi(d,"df",m),oi(d,"method","Bartlett's test of equal variances"),oi(d,"print",Woe),d}v0r.exports=zoe});var l0r=s((SLe,c0r)=>{"use strict";var Xoe=f0r();c0r.exports=Xoe});var g0r=s((ALe,p0r)=>{"use strict";var bc=E(),Joe=gt();function Yoe(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,bc(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],bc(v)){a=v;break}(v>a||v===a&&Joe(v))&&(a=v),i[o]=a,o+=n}if(bc(a))for(f;f<r;f++)i[o]=a,o+=n;return i}p0r.exports=Yoe});var d0r=s((_Le,m0r)=>{"use strict";var wc=E(),$oe=gt();function Zoe(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,wc(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],wc(c)){o=c;break}(c>o||c===o&&$oe(c))&&(o=c),n[f]=o,f+=a}if(wc(o))for(l;l<r;l++)n[f]=o,f+=a;return n}m0r.exports=Zoe});var q0r=s((TLe,y0r)=>{"use strict";var Qoe=b(),h0r=g0r(),Koe=d0r();Qoe(h0r,"ndarray",Koe);y0r.exports=h0r});var w0r=s((ILe,b0r)=>{"use strict";var r1e=q0r();b0r.exports=r1e});var N0r=s((RLe,E0r)=>{"use strict";var e1e=E(),t1e=gt();function i1e(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],e1e(a))return a;(a>i||a===i&&t1e(a))&&(i=a)}return i}E0r.exports=i1e});var S0r=s((LLe,O0r)=>{"use strict";var n1e=E(),a1e=gt();function s1e(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],n1e(u))return u;(u>n||u===n&&a1e(u))&&(n=u)}return n}O0r.exports=s1e});var T0r=s((PLe,_0r)=>{"use strict";var u1e=b(),A0r=N0r(),o1e=S0r();u1e(A0r,"ndarray",o1e);_0r.exports=A0r});var R0r=s((FLe,I0r)=>{"use strict";var v1e=T0r();I0r.exports=v1e});var F0r=s((MLe,P0r)=>{"use strict";var L0r=E(),f1e=gt();function c1e(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],L0r(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],L0r(v))return v;(v>a||v===a&&f1e(v))&&(a=v)}return a}P0r.exports=c1e});var j0r=s((BLe,B0r)=>{"use strict";var M0r=E(),l1e=gt();function p1e(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],M0r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],M0r(c))return c;(c>o||c===o&&l1e(c))&&(o=c)}return o}B0r.exports=p1e});var V0r=s((jLe,C0r)=>{"use strict";var g1e=b(),k0r=F0r(),m1e=j0r();g1e(k0r,"ndarray",m1e);C0r.exports=k0r});var G0r=s((kLe,U0r)=>{"use strict";var d1e=si(),h1e=U(),Ec=E();function y1e(r,e,t){var i,n;return Ec(r)||Ec(e)||Ec(t)||t<0?NaN:t===0?r<e?0:1:(i=t*h1e(2),n=r-e,.5*d1e(-n/i))}U0r.exports=y1e});var D0r=s((CLe,x0r)=>{"use strict";var q1e=_(),b1e=As().factory,Nc=E(),w1e=U(),E1e=si();function N1e(r,e){var t;if(Nc(r)||Nc(e)||e<0)return q1e(NaN);if(e===0)return b1e(r);return t=e*w1e(2),i;function i(n){var a;return Nc(n)?NaN:(a=n-r,.5*E1e(-a/t))}}x0r.exports=N1e});var z0r=s((VLe,W0r)=>{"use strict";var O1e=b(),H0r=G0r(),S1e=D0r();O1e(H0r,"factory",S1e);W0r.exports=H0r});var Y0r=s((ULe,J0r)=>{"use strict";var X0r=E(),A1e=P(),_1e=vt(),T1e=tc();function I1e(r,e){return X0r(r)||X0r(e)||e<=0?NaN:.5*A1e(_1e*T1e*e*e)}J0r.exports=I1e});var Z0r=s((GLe,$0r)=>{"use strict";var R1e=Y0r();$0r.exports=R1e});var rsr=s((xLe,K0r)=>{"use strict";var Q0r=E();function L1e(r,e){return Q0r(r)||Q0r(e)||e<=0?NaN:0}K0r.exports=L1e});var tsr=s((DLe,esr)=>{"use strict";var P1e=rsr();esr.exports=P1e});var nsr=s((HLe,isr)=>{"use strict";var F1e=z(),M1e=[B1e,j1e,k1e,C1e,V1e,U1e,G1e,x1e,D1e,H1e,W1e,z1e,X1e,J1e,Y1e,$1e,Z1e,Q1e,K1e,r2e,e2e,t2e,i2e,n2e,a2e,s2e,u2e,o2e,v2e,f2e,c2e,l2e,p2e,g2e,m2e,d2e,h2e,y2e,q2e,b2e,w2e,E2e,N2e,O2e,S2e,A2e,_2e,T2e,I2e,R2e,L2e,P2e,F2e,M2e,B2e,j2e,k2e,C2e,V2e,U2e,G2e,x2e,D2e,H2e,W2e,z2e,X2e,J2e,Y2e,$2e,Z2e,Q2e,K2e,r3e,e3e,t3e,i3e,n3e,a3e,s3e,u3e,o3e,v3e,f3e,c3e,l3e,p3e,g3e,m3e,d3e,h3e,y3e,q3e,b3e,w3e,E3e,N3e,O3e,S3e,A3e,_3e];function B1e(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function j1e(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function k1e(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function C1e(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function V1e(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function U1e(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function G1e(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function x1e(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function D1e(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function H1e(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function W1e(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function z1e(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function X1e(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function J1e(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function Y1e(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function $1e(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function Z1e(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function Q1e(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function K1e(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function r2e(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function e2e(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function t2e(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function i2e(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function n2e(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function a2e(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function s2e(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function u2e(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function o2e(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function v2e(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function f2e(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function c2e(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function l2e(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function p2e(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function g2e(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function m2e(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function d2e(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function h2e(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function y2e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function q2e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function b2e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function w2e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function E2e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function N2e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function O2e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function S2e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function A2e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function _2e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function T2e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function I2e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function R2e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function L2e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function P2e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function F2e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function M2e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function B2e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function j2e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function k2e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function C2e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function V2e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function U2e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function G2e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function x2e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function D2e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function H2e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function W2e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function z2e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function X2e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function J2e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function Y2e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function $2e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function Z2e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function Q2e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function K2e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function r3e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function e3e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function t3e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function i3e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function n3e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function a3e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function s3e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function u3e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function o3e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function v3e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function f3e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function c3e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function l3e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function p3e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function g3e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function m3e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function d3e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function h3e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function y3e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function q3e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function b3e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function w3e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function E3e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function N3e(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function O3e(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function S3e(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function A3e(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function _3e(){return 1}function T3e(r){var e=F1e(r),t=M1e[e];return t(2*r-(2*e+1))}isr.exports=T3e});var vsr=s((WLe,osr)=>{"use strict";var asr=sr(),I3e=R(),ssr=nsr(),usr=.5641895835477563;function R3e(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?usr/r:(e=r*r,usr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):ssr(400/(4+r)):r<-26.7?I3e:(e=r*r,r<-6.1?2*asr(e):2*asr(e)-ssr(400/(4-r)))}osr.exports=R3e});var Oc=s((zLe,fsr)=>{"use strict";var L3e=vsr();fsr.exports=L3e});var psr=s((XLe,lsr)=>{"use strict";var P3e=P(),F3e=ut(),M3e=q0(),B3e=si(),j3e=Oc(),k3e=V(),Sc=E(),csr=.7071067811865475;function C3e(r,e,t){var i;return Sc(r)||Sc(e)||Sc(t)||t<0?NaN:t===0?r<e?k3e:0:(i=(r-e)/t,i<-1?P3e(j3e(-i*csr)/2)-M3e(i)/2:F3e(-B3e(i*csr)/2))}lsr.exports=C3e});var dsr=s((JLe,msr)=>{"use strict";var gsr=E(),V3e=V();function U3e(r,e){return gsr(r)||gsr(e)?NaN:r<e?V3e:0}msr.exports=U3e});var qsr=s((YLe,ysr)=>{"use strict";var G3e=_(),hsr=E(),x3e=V();function D3e(r){if(hsr(r))return G3e(NaN);return e;function e(t){return hsr(t)?NaN:t<r?x3e:0}}ysr.exports=D3e});var Esr=s(($Le,wsr)=>{"use strict";var H3e=b(),bsr=dsr(),W3e=qsr();H3e(bsr,"factory",W3e);wsr.exports=bsr});var Asr=s((ZLe,Ssr)=>{"use strict";var z3e=_(),X3e=Esr().factory,Nsr=E(),J3e=ut(),Y3e=q0(),$3e=si(),Z3e=Oc(),Q3e=P(),Osr=.7071067811865475;function K3e(r,e){if(Nsr(r)||Nsr(e)||e<0)return z3e(NaN);if(e===0)return X3e(r);return t;function t(i){var n=(i-r)/e;return n<-1?Q3e(Z3e(-n*Osr)/2)-Y3e(n)/2:J3e(-$3e(n*Osr)/2)}}Ssr.exports=K3e});var Isr=s((QLe,Tsr)=>{"use strict";var rve=b(),_sr=psr(),eve=Asr();rve(_sr,"factory",eve);Tsr.exports=_sr});var Ac=s((KLe,Rsr)=>{"use strict";var tve=1.8378770664093456;Rsr.exports=tve});var Fsr=s((rPe,Psr)=>{"use strict";var ive=P(),Lsr=D(),nve=Ac(),ave=V(),sve=R(),_c=E();function uve(r,e,t){var i,n,a;return _c(r)||_c(e)||_c(t)||t<0?NaN:t===0?r===e?sve:ave:(i=Lsr(t,2),n=-.5*(2*ive(t)+nve),a=-1/(2*i),n+a*Lsr(r-e,2))}Psr.exports=uve});var jsr=s((ePe,Bsr)=>{"use strict";var ove=R(),vve=V(),Msr=E();function fve(r,e){return Msr(r)||Msr(e)?NaN:r===e?ove:vve}Bsr.exports=fve});var Vsr=s((tPe,Csr)=>{"use strict";var cve=_(),lve=R(),pve=V(),ksr=E();function gve(r){if(ksr(r))return cve(NaN);return e;function e(t){return ksr(t)?NaN:t===r?lve:pve}}Csr.exports=gve});var xsr=s((iPe,Gsr)=>{"use strict";var mve=b(),Usr=jsr(),dve=Vsr();mve(Usr,"factory",dve);Gsr.exports=Usr});var zsr=s((nPe,Wsr)=>{"use strict";var hve=_(),yve=xsr().factory,qve=Ac(),Dsr=E(),Hsr=D(),bve=P();function wve(r,e){var t,i,n;if(Dsr(r)||Dsr(e)||e<0)return hve(NaN);if(e===0)return yve(r);return t=Hsr(e,2),i=-.5*(2*bve(e)+qve),n=-1/(2*t),a;function a(u){return i+n*Hsr(u-r,2)}}Wsr.exports=wve});var Ysr=s((aPe,Jsr)=>{"use strict";var Eve=b(),Xsr=Fsr(),Nve=zsr();Eve(Xsr,"factory",Nve);Jsr.exports=Xsr});var Qsr=s((sPe,Zsr)=>{"use strict";var $sr=E();function Ove(r,e){return $sr(r)||$sr(e)||e<=0?NaN:r}Zsr.exports=Ove});var rur=s((uPe,Ksr)=>{"use strict";var Sve=Qsr();Ksr.exports=Sve});var iur=s((oPe,tur)=>{"use strict";var eur=E();function Ave(r,e){return eur(r)||eur(e)||e<=0?NaN:r}tur.exports=Ave});var aur=s((vPe,nur)=>{"use strict";var _ve=iur();nur.exports=_ve});var uur=s((fPe,sur)=>{"use strict";var Tc=E(),Tve=sr(),Ive=D();function Rve(r,e,t){return Tc(r)||Tc(e)||Tc(t)||t<=0?NaN:Tve(e*r+.5*Ive(t*r,2))}sur.exports=Rve});var vur=s((cPe,our)=>{"use strict";var Lve=_(),Ic=E(),Pve=sr(),Fve=D();function Mve(r,e){if(Ic(r)||Ic(e)||e<=0)return Lve(NaN);return t;function t(i){return Ic(i)?NaN:Pve(r*i+.5*Fve(e*i,2))}}our.exports=Mve});var lur=s((lPe,cur)=>{"use strict";var Bve=b(),fur=uur(),jve=vur();Bve(fur,"factory",jve);cur.exports=fur});var mur=s((pPe,gur)=>{"use strict";var pur=E();function kve(r,e){return pur(r)||pur(e)||e<=0?NaN:r}gur.exports=kve});var hur=s((gPe,dur)=>{"use strict";var Cve=mur();dur.exports=Cve});var bur=s((mPe,qur)=>{"use strict";var Vve=sr(),yur=D(),Uve=U(),Gve=vt(),xve=R(),Rc=E();function Dve(r,e,t){var i,n,a;return Rc(r)||Rc(e)||Rc(t)||t<0?NaN:t===0?r===e?xve:0:(i=yur(t,2),n=1/Uve(i*Gve),a=-1/(2*i),n*Vve(a*yur(r-e,2)))}qur.exports=Dve});var Nur=s((dPe,Eur)=>{"use strict";var Hve=R(),wur=E();function Wve(r,e){return wur(r)||wur(e)?NaN:r===e?Hve:0}Eur.exports=Wve});var Aur=s((hPe,Sur)=>{"use strict";var zve=_(),Xve=R(),Our=E();function Jve(r){if(Our(r))return zve(NaN);return e;function e(t){return Our(t)?NaN:t===r?Xve:0}}Sur.exports=Jve});var Iur=s((yPe,Tur)=>{"use strict";var Yve=b(),_ur=Nur(),$ve=Aur();Yve(_ur,"factory",$ve);Tur.exports=_ur});var Pur=s((qPe,Lur)=>{"use strict";var Zve=_(),Qve=Iur().factory,Lc=E(),Kve=U(),rfe=sr(),Rur=D(),efe=vt();function tfe(r,e){var t,i,n;if(Lc(r)||Lc(e)||e<0)return Zve(NaN);if(e===0)return Qve(r);return t=Rur(e,2),i=1/Kve(t*efe),n=-1/(2*t),a;function a(u){return Lc(u)?NaN:i*rfe(n*Rur(u-r,2))}}Lur.exports=tfe});var Bur=s((bPe,Mur)=>{"use strict";var ife=b(),Fur=bur(),nfe=Pur();ife(Fur,"factory",nfe);Mur.exports=Fur});var Cur=s((wPe,kur)=>{"use strict";var jur=E();function afe(r,e){return jur(r)||jur(e)||e<=0?NaN:0}kur.exports=afe});var Uur=s((EPe,Vur)=>{"use strict";var sfe=Cur();Vur.exports=sfe});var Dur=s((NPe,xur)=>{"use strict";var Gur=E();function ufe(r,e){return Gur(r)||Gur(e)||e<=0?NaN:e}xur.exports=ufe});var Wur=s((OPe,Hur)=>{"use strict";var ofe=Dur();Hur.exports=ofe});var Jur=s((SPe,Xur)=>{"use strict";var zur=E();function vfe(r,e){return zur(r)||zur(e)||e<=0?NaN:e*e}Xur.exports=vfe});var $ur=s((APe,Yur)=>{"use strict";var ffe=Jur();Yur.exports=ffe});var Qur=s((_Pe,Zur)=>{"use strict";var Pr=rr(),cfe=z0r(),lfe=Z0r(),pfe=tsr(),gfe=Isr(),mfe=Ysr(),dfe=rur(),hfe=aur(),yfe=lur(),qfe=hur(),bfe=Bur(),wfe=df(),Efe=Uur(),Nfe=Wur(),Ofe=$ur();function Sfe(r){return Pr(r,"cdf",cfe),Pr(r,"entropy",lfe),Pr(r,"kurtosis",pfe),Pr(r,"logcdf",gfe),Pr(r,"logpdf",mfe),Pr(r,"mean",dfe),Pr(r,"median",hfe),Pr(r,"mgf",yfe),Pr(r,"mode",qfe),Pr(r,"pdf",bfe),Pr(r,"quantile",wfe),Pr(r,"skewness",Efe),Pr(r,"stdev",Nfe),Pr(r,"variance",Ofe),r}Zur.exports=Sfe});var ror=s((TPe,Kur)=>{"use strict";var Afe=rr(),_fe=Qur();function Tfe(r){return Afe(r,"normal",_fe({})),r}Kur.exports=Tfe});var tor=s((IPe,eor)=>{"use strict";var Na=rr(),Ife=l0r(),Rfe=w0r().ndarray,Lfe=R0r().ndarray,Pfe=V0r().ndarray,Ffe=ror();function Mfe(r){return Na(r,"bartlettTest",Ife),Na(r,"cumax",Rfe),Na(r,"max",Lfe),Na(r,"mskmax",Pfe),Na(r,"dists",Ffe({})),r}eor.exports=Mfe});var nor=s((RPe,ior)=>{"use strict";var Bfe=Q().isPrimitive,jfe=q();function kfe(r){return e;function e(t){if(!Bfe(t))throw new TypeError(jfe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}ior.exports=kfe});var sor=s((LPe,aor)=>{"use strict";var Cfe=nor();aor.exports=Cfe});var cor=s((PPe,vor)=>{"use strict";var uor=Q().isPrimitive,oor=q();function Vfe(r){return e;function e(t,i){if(!uor(t))throw new TypeError(oor("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!uor(i))throw new TypeError(oor("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}vor.exports=Vfe});var por=s((FPe,lor)=>{"use strict";var Ufe=cor();lor.exports=Ufe});var mor=s((MPe,gor)=>{"use strict";var Pc=Q().isPrimitive,Fc=q();function Gfe(r){return e;function e(t,i,n){if(!Pc(t))throw new TypeError(Fc("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Pc(i))throw new TypeError(Fc("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Pc(n))throw new TypeError(Fc("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}gor.exports=Gfe});var hor=s((BPe,dor)=>{"use strict";var xfe=mor();dor.exports=xfe});var qor=s((jPe,yor)=>{"use strict";var Mc=rr(),Dfe=sor(),Hfe=por(),Wfe=hor();function zfe(r){return Mc(r,"s_o",Dfe),Mc(r,"ss_o",Hfe),Mc(r,"sss_o",Wfe),r}yor.exports=zfe});var wor=s((kPe,bor)=>{"use strict";function Xfe(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}bor.exports=Xfe});var no=s((CPe,Eor)=>{"use strict";var Jfe=wor();Eor.exports=Jfe});var Oor=s((VPe,Nor)=>{"use strict";var Yfe=no(),$fe=ii(),ao=ft(),Zfe=pt(),Qfe=/\s+/g,Kfe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,rce=/(?:\s|^)([^\s]+)(?=\s|$)/g,ece=/([a-z0-9])([A-Z])/g;function tce(r,e,t){return e=$fe(e),t===0?e:Yfe(e)}function ice(r){return r=ao(r,Kfe," "),r=ao(r,Qfe," "),r=ao(r,ece,"$1 $2"),r=Zfe(r),ao(r,rce,tce)}Nor.exports=ice});var Aor=s((UPe,Sor)=>{"use strict";var nce=Oor();Sor.exports=nce});var Tor=s((GPe,_or)=>{"use strict";var ace=Q().isPrimitive,sce=q(),uce=Aor();function oce(r){if(!ace(r))throw new TypeError(sce("invalid argument. First argument must be a string. Value: `%s`.",r));return uce(r)}_or.exports=oce});var Ror=s((xPe,Ior)=>{"use strict";var vce=Tor();Ior.exports=vce});var Por=s((DPe,Lor)=>{"use strict";var fce=Q().isPrimitive,cce=q(),lce=no();function pce(r){if(!fce(r))throw new TypeError(cce("invalid argument. First argument must be a string. Value: `%s`.",r));return lce(r)}Lor.exports=pce});var Mor=s((HPe,For)=>{"use strict";var gce=Por();For.exports=gce});var jor=s((WPe,Bor)=>{"use strict";function mce(r){return r.toUpperCase()}Bor.exports=mce});var Cor=s((zPe,kor)=>{"use strict";var dce=jor();kor.exports=dce});var Uor=s((XPe,Vor)=>{"use strict";var hce=Cor(),Bc=ft(),yce=pt(),qce=/\s+/g,bce=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,wce=/([a-z0-9])([A-Z])/g;function Ece(r){return r=Bc(r,bce," "),r=Bc(r,wce,"$1 $2"),r=yce(r),r=Bc(r,qce,"_"),hce(r)}Vor.exports=Ece});var xor=s((JPe,Gor)=>{"use strict";var Nce=Uor();Gor.exports=Nce});var Hor=s((YPe,Dor)=>{"use strict";var Oce=Q().isPrimitive,Sce=q(),Ace=xor();function _ce(r){if(!Oce(r))throw new TypeError(Sce("invalid argument. Must provide a string. Value: `%s`.",r));return Ace(r)}Dor.exports=_ce});var zor=s(($Pe,Wor)=>{"use strict";var Tce=Hor();Wor.exports=Tce});var Jor=s((ZPe,Xor)=>{"use strict";var Ice=ii(),jc=ft(),Rce=pt(),Lce=/\s+/g,Pce=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Fce=/([a-z0-9])([A-Z])/g;function Mce(r){return r=jc(r,Pce," "),r=jc(r,Fce,"$1 $2"),r=Rce(r),r=jc(r,Lce,"-"),Ice(r)}Xor.exports=Mce});var $or=s((QPe,Yor)=>{"use strict";var Bce=Jor();Yor.exports=Bce});var Qor=s((KPe,Zor)=>{"use strict";var jce=Q().isPrimitive,kce=q(),Cce=$or();function Vce(r){if(!jce(r))throw new TypeError(kce("invalid argument. Must provide a string. Value: `%s`.",r));return Cce(r)}Zor.exports=Vce});var r1r=s((rFe,Kor)=>{"use strict";var Uce=Qor();Kor.exports=Uce});var t1r=s((eFe,e1r)=>{"use strict";var Gce=Q().isPrimitive,xce=q(),Dce=ii();function Hce(r){if(!Gce(r))throw new TypeError(xce("invalid argument. Must provide a string. Value: `%s`.",r));return Dce(r)}e1r.exports=Hce});var n1r=s((tFe,i1r)=>{"use strict";var Wce=t1r();i1r.exports=Wce});var s1r=s((iFe,a1r)=>{"use strict";var zce=no(),Xce=ii(),so=ft(),Jce=pt(),Yce=/\s+/g,$ce=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Zce=/(?:\s|^)([^\s]+)(?=\s|$)/g,Qce=/([a-z0-9])([A-Z])/g;function Kce(r,e){return zce(Xce(e))}function rle(r){return r=so(r,$ce," "),r=so(r,Yce," "),r=so(r,Qce,"$1 $2"),r=Jce(r),so(r,Zce,Kce)}a1r.exports=rle});var o1r=s((nFe,u1r)=>{"use strict";var ele=s1r();u1r.exports=ele});var f1r=s((aFe,v1r)=>{"use strict";var tle=Q().isPrimitive,ile=q(),nle=o1r();function ale(r){if(!tle(r))throw new TypeError(ile("invalid argument. First argument must be a string. Value: `%s`.",r));return nle(r)}v1r.exports=ale});var l1r=s((sFe,c1r)=>{"use strict";var sle=f1r();c1r.exports=sle});var g1r=s((uFe,p1r)=>{"use strict";var ule=ii(),kc=ft(),ole=pt(),vle=/\s+/g,fle=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,cle=/([a-z0-9])([A-Z])/g;function lle(r){return r=kc(r,fle," "),r=kc(r,cle,"$1 $2"),r=ole(r),r=kc(r,vle,"_"),ule(r)}p1r.exports=lle});var d1r=s((oFe,m1r)=>{"use strict";var ple=g1r();m1r.exports=ple});var y1r=s((vFe,h1r)=>{"use strict";var gle=Q().isPrimitive,mle=q(),dle=d1r();function hle(r){if(!gle(r))throw new TypeError(mle("invalid argument. Must provide a string. Value: `%s`.",r));return dle(r)}h1r.exports=hle});var b1r=s((fFe,q1r)=>{"use strict";var yle=y1r();q1r.exports=yle});var N1r=s((cFe,E1r)=>{"use strict";var qle=T(),w1r=S(),ble=cr().isPrimitive,wle=Q().isPrimitive,Cc=q();function Ele(r,e){return qle(e)?w1r(e,"flags")&&(r.flags=e.flags,!wle(r.flags))?new TypeError(Cc("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):w1r(e,"capture")&&(r.capture=e.capture,!ble(r.capture))?new TypeError(Cc("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Cc("invalid argument. Options argument must be an object. Value: `%s`.",e))}E1r.exports=Ele});var uo=s((lFe,S1r)=>{"use strict";var Nle=N1r(),O1r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function Ole(r){var e,t;if(arguments.length>0){if(e={},t=Nle(e,r),t)throw t;return e.capture?new RegExp("("+O1r+")",e.flags):new RegExp(O1r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}S1r.exports=Ole});var _1r=s((pFe,A1r)=>{"use strict";var Sle=uo(),Ale=Sle({capture:!0});A1r.exports=Ale});var I1r=s((gFe,T1r)=>{"use strict";var _le=uo(),Tle=_le();T1r.exports=Tle});var P1r=s((mFe,L1r)=>{"use strict";var R1r=b(),Vc=uo(),Ile=_1r(),Rle=I1r();R1r(Vc,"REGEXP",Rle);R1r(Vc,"REGEXP_CAPTURE",Ile);L1r.exports=Vc});var M1r=s((dFe,F1r)=>{"use strict";var Lle=P1r().REGEXP;function Ple(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),Lle.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}F1r.exports=Ple});var j1r=s((hFe,B1r)=>{"use strict";var Fle=M1r();B1r.exports=Fle});var C1r=s((yFe,k1r)=>{"use strict";var Mle=Q().isPrimitive,Ble=q(),jle=j1r();function kle(r){if(!Mle(r))throw new TypeError(Ble("invalid argument. Must provide a string. Value: `%s`.",r));return jle(r)}k1r.exports=kle});var U1r=s((qFe,V1r)=>{"use strict";var Cle=C1r();V1r.exports=Cle});var x1r=s((bFe,G1r)=>{"use strict";function Vle(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}G1r.exports=Vle});var H1r=s((wFe,D1r)=>{"use strict";var Ule=x1r();D1r.exports=Ule});var z1r=s((EFe,W1r)=>{"use strict";var Gle=Q().isPrimitive,xle=q(),Dle=H1r();function Hle(r){if(!Gle(r))throw new TypeError(xle("invalid argument. First argument must be a string. Value: `%s`.",r));return Dle(r)}W1r.exports=Hle});var J1r=s((NFe,X1r)=>{"use strict";var Wle=z1r();X1r.exports=Wle});var $1r=s((OFe,Y1r)=>{"use strict";var zle=Q().isPrimitive,Xle=q();function Jle(r){if(!zle(r))throw new TypeError(Xle("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}Y1r.exports=Jle});var Q1r=s((SFe,Z1r)=>{"use strict";var Yle=$1r();Z1r.exports=Yle});var r2r=s((AFe,K1r)=>{"use strict";var ce=rr(),$le=Ror(),Zle=Mor(),Qle=zor(),Kle=r1r(),r6e=n1r(),e6e=l1r(),t6e=b1r(),i6e=U1r(),n6e=J1r(),a6e=Q1r();function s6e(r){return ce(r,"camelcase",$le),ce(r,"capitalize",Zle),ce(r,"constantcase",Qle),ce(r,"kebabcase",Kle),ce(r,"lowercase",r6e),ce(r,"pascalcase",e6e),ce(r,"snakecase",t6e),ce(r,"startcase",i6e),ce(r,"uncapitalize",n6e),ce(r,"uppercase",a6e),r}K1r.exports=s6e});var t2r=s((_Fe,e2r)=>{"use strict";var u6e=rr(),o6e=qor(),v6e=r2r();function f6e(r){return u6e(r,"tools",o6e({})),r=v6e(r),r}e2r.exports=f6e});var n2r=s((TFe,i2r)=>{"use strict";var le=rr(),c6e=lh(),l6e=_b(),p6e=jb(),g6e=FN(),m6e=VF(),d6e=qU(),h6e=itr(),y6e=ptr(),q6e=tor(),b6e=t2r();function w6e(){var r={};return le(r,"array",c6e({})),le(r,"assert",l6e({})),le(r,"blas",p6e({})),le(r,"datasets",g6e({})),le(r,"math",m6e({})),le(r,"ndarray",d6e({})),le(r,"random",h6e({})),le(r,"simulate",y6e({})),le(r,"stats",q6e({})),le(r,"string",b6e({})),r}i2r.exports=w6e});var s2r=s((IFe,a2r)=>{"use strict";var E6e=b(),Uc=n2r();E6e(Uc,"CACHED",Uc());a2r.exports=Uc});var O6e=s((RFe,u2r)=>{var N6e=s2r().CACHED;u2r.exports=N6e});return O6e();})();
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
